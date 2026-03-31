import { defineConfig } from 'wxt';
import {
  copyFileSync,
  existsSync,
  lstatSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from 'fs';
import { join, resolve } from 'path';

// Copy UMD bundle at config load time, before WXT processes publicDir
const umdSrc = resolve('node_modules/@eatsjobs/media-mock/dist/media-mock.umd.min.js');
const publicDir = resolve('public');
if (!existsSync(publicDir)) mkdirSync(publicDir, { recursive: true });
copyFileSync(umdSrc, resolve(publicDir, 'media-mock.umd.min.js'));

const IOS_RESOURCES = resolve(
  'ios-media-mock-extension',
  'ios-media-mock-extension Extension',
  'Resources',
);
// Relative from the symlink's own location to the iOS-ready output dir
const IOS_SYMLINK_TARGET = '../../.output/safari-mv2-ios';

// See https://wxt.dev/api/config.html
export default defineConfig({
  vite: () => ({
    build: {
      target: ['chrome68', 'safari14'],
    },
  }),
  hooks: {
    // Auto-create the Xcode Resources symlink whenever the iOS project is present.
    // Runs on every wxt invocation but is a no-op if the symlink already exists.
    ready(wxt) {
      if (!existsSync(resolve('ios-media-mock-extension'))) return;
      const stat = lstatSync(IOS_RESOURCES, { throwIfNoEntry: false });
      if (stat?.isSymbolicLink()) return;
      if (stat) rmSync(IOS_RESOURCES, { recursive: true, force: true });
      symlinkSync(IOS_SYMLINK_TARGET, IOS_RESOURCES);
      wxt.logger.info('iOS: created Resources → .output/safari-mv2-ios symlink');
    },

    // iOS Safari requires content scripts at the bundle root (not in subdirs).
    // We write a separate safari-mv2-ios/ directory so WXT's own output is
    // never modified (avoids conflicts with WXT's post-build file listing).
    'build:done'(wxt) {
      if (wxt.config.browser !== 'safari') return;

      const srcDir = wxt.config.outDir; // .output/safari-mv2
      const iosDir = srcDir + '-ios'; // .output/safari-mv2-ios

      // Rebuild iOS output dir from scratch
      rmSync(iosDir, { recursive: true, force: true });
      mkdirSync(iosDir, { recursive: true });

      // Copy every root-level file straight across; skip content-scripts/ dir
      for (const entry of readdirSync(srcDir, { withFileTypes: true })) {
        if (entry.isDirectory()) continue; // content-scripts/ gets handled below
        copyFileSync(join(srcDir, entry.name), join(iosDir, entry.name));
      }

      // Flatten content-scripts/* to ios root
      const csDir = join(srcDir, 'content-scripts');
      if (existsSync(csDir)) {
        for (const entry of readdirSync(csDir, { withFileTypes: true })) {
          if (entry.isFile()) {
            copyFileSync(join(csDir, entry.name), join(iosDir, entry.name));
          }
        }
      }

      // Patch manifest: strip "content-scripts/" prefix from JS/CSS paths
      const manifestPath = join(iosDir, 'manifest.json');
      const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'));
      for (const cs of manifest.content_scripts ?? []) {
        cs.js = cs.js?.map((p: string) => p.replace(/^content-scripts\//, ''));
        cs.css = cs.css?.map((p: string) => p.replace(/^content-scripts\//, ''));
      }
      writeFileSync(manifestPath, JSON.stringify(manifest));

      wxt.logger.success('Safari iOS: flat bundle written to .output/safari-mv2-ios');
    },
  },
  manifest: {
    name: 'MediaMock',
    description: 'Mock media devices for testing web applications',
    permissions: ['activeTab', 'scripting', 'storage', 'tabs', 'unlimitedStorage'],
    host_permissions: ['<all_urls>'],
    web_accessible_resources: [
      {
        resources: ['inject-mediamock.js', 'media-mock.umd.min.js'],
        matches: ['<all_urls>']
      }
    ],
    icons: {
      16: 'icon-16.png',
      32: 'icon-32.png',
      48: 'icon-48.png',
      96: 'icon-96.png',
      128: 'icon-128.png',
      256: 'icon-256.png',
      512: 'icon-512.png',
    },
  },
  // Ensure builds work across different environments
  runner: {
    disabled: true
  }
});
