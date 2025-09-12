// Utility to get the media-mock library version
export function getMediaMockVersion(): string | null {
  try {
    // Try to get version from the library package
    // Since we're using the JSR package, we can try to detect from known locations
    
    // First, try to get it from the package.json resolution
    const mediaMockDeps = require('../../../package.json').dependencies;
    const mediaMockEntry = mediaMockDeps['@eatsjobs/media-mock'];
    
    if (mediaMockEntry) {
      // Extract version from npm:@jsr/eatsjobs__media-mock@^1.0.1
      const versionMatch = mediaMockEntry.match(/@(\^?)([0-9]+\.[0-9]+\.[0-9]+)/);
      if (versionMatch) {
        return versionMatch[2]; // Return the version number without the ^
      }
    }
    
    // Fallback: try to detect from node_modules if available
    try {
      const nodeModulesPackage = require('../../../node_modules/@eatsjobs/media-mock/package.json');
      return nodeModulesPackage.version;
    } catch {
      // Node modules approach failed, continue
    }
    
    // Another fallback: parse from the JSR package structure
    try {
      const jsrPackage = require('../../../node_modules/@jsr/eatsjobs__media-mock/package.json');
      return jsrPackage.version;
    } catch {
      // JSR approach failed too
    }
    
    return null;
  } catch (error) {
    console.warn('Could not detect media-mock version:', error);
    return null;
  }
}