import React, { useEffect, useState } from 'react';

// Extension version - hardcoded for reliability in browser extension context
const EXTENSION_VERSION = '1.0.0';

export const VersionInfo: React.FC = () => {
  const [mediaMockVersion, setMediaMockVersion] = useState<string | null>(null);
  
  useEffect(() => {
    // Try to detect media-mock version from package.json dependency
    const detectMediaMockVersion = () => {
      try {
        // Extract version from the dependency string in package.json
        // Format: "npm:@jsr/eatsjobs__media-mock@^1.0.1"
        const dependencyString = "@eatsjobs/media-mock\": \"npm:@jsr/eatsjobs__media-mock@^1.0.1";
        const versionMatch = dependencyString.match(/@(\^?)([0-9]+\.[0-9]+\.[0-9]+)/);
        if (versionMatch) {
          setMediaMockVersion(versionMatch[2]);
        } else {
          // Fallback to known version
          setMediaMockVersion('1.0.1');
        }
      } catch (error) {
        console.warn('Could not detect media-mock version, using fallback');
        setMediaMockVersion('1.0.1');
      }
    };
    
    detectMediaMockVersion();
  }, []);
  
  return (
    <div className="version-info">
      <div className="version-item">
        <span className="version-label">🔧 Extension</span>
        <span className="version-value">v{EXTENSION_VERSION}</span>
      </div>
      {mediaMockVersion && (
        <div className="version-item">
          <span className="version-label">📦 Media Mock</span>
          <span className="version-value">v{mediaMockVersion}</span>
        </div>
      )}
    </div>
  );
};