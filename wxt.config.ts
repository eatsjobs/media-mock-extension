import { defineConfig } from 'wxt';
import { copyFileSync, existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';

// Copy UMD bundle at config load time, before WXT processes publicDir
const umdSrc = resolve('node_modules/@eatsjobs/media-mock/dist/media-mock.umd.min.js');
const publicDir = resolve('public');
if (!existsSync(publicDir)) mkdirSync(publicDir, { recursive: true });
copyFileSync(umdSrc, resolve(publicDir, 'media-mock.umd.min.js'));

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    name: 'MediaMock',
    description: 'Mock media devices for testing web applications',
    permissions: ['activeTab', 'scripting', 'tabs', 'unlimitedStorage'],
    host_permissions: ['<all_urls>'],
    web_accessible_resources: [
      {
        resources: ['inject-mediamock.js', 'media-mock.umd.min.js'],
        matches: ['<all_urls>']
      }
    ]
  },
  // Ensure builds work across different environments
  runner: {
    disabled: true
  }
});
