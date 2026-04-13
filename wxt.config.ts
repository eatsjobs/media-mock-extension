import { defineConfig } from 'wxt';
import {
  copyFileSync,
  existsSync,
  lstatSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
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

// See https://wxt.dev/api/config.html
export default defineConfig({
  vite: () => ({
    build: {
      target: ['chrome85', 'safari14'],
    },
  }),
  hooks: {
    // Ensure the Xcode Resources directory exists when the iOS project is present.
    ready(wxt) {
      if (!existsSync(resolve('ios-media-mock-extension'))) return;
      const stat = lstatSync(IOS_RESOURCES, { throwIfNoEntry: false });
      // Remove stale symlink — Xcode 16 file-system sync doesn't follow symlinks
      if (stat?.isSymbolicLink()) rmSync(IOS_RESOURCES);
      if (!existsSync(IOS_RESOURCES)) mkdirSync(IOS_RESOURCES, { recursive: true });
    },

    // Flatten the output directory: move content-scripts/* to the bundle root.
    // Safari iOS doesn't support nested folders inside the extension bundle —
    // all resources must live at the top level, otherwise they silently fail
    // to load. We apply this to every build (not just Safari) so the output
    // structure is consistent across all browsers.
    'build:done'(wxt) {
      const outDir = wxt.config.outDir;
      const csDir = join(outDir, 'content-scripts');

      if (existsSync(csDir)) {
        // Copy content scripts to the root (keep the originals — WXT still
        // references them in its post-build file listing)
        for (const entry of readdirSync(csDir, { withFileTypes: true })) {
          if (entry.isFile()) {
            copyFileSync(join(csDir, entry.name), join(outDir, entry.name));
          }
        }

        // Patch manifest: strip "content-scripts/" prefix from JS/CSS paths
        const manifestPath = join(outDir, 'manifest.json');
        const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'));
        for (const cs of manifest.content_scripts ?? []) {
          cs.js = cs.js?.map((p: string) => p.replace(/^content-scripts\//, ''));
          cs.css = cs.css?.map((p: string) => p.replace(/^content-scripts\//, ''));
        }
        writeFileSync(manifestPath, JSON.stringify(manifest));
      }

      wxt.logger.success(`Flat bundle written to ${outDir}`);

      // Copy built files into Xcode extension's Resources directory
      // (real files, not a symlink — Xcode 16 file-system sync doesn't follow symlinks)
      if (wxt.config.browser === 'safari' && existsSync(resolve('ios-media-mock-extension'))) {
        rmSync(IOS_RESOURCES, { recursive: true, force: true });
        mkdirSync(IOS_RESOURCES, { recursive: true });
        for (const entry of readdirSync(outDir, { withFileTypes: true })) {
          if (entry.isFile()) {
            copyFileSync(join(outDir, entry.name), join(IOS_RESOURCES, entry.name));
          }
        }
        wxt.logger.success('Copied resources into Xcode extension');
      }
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
