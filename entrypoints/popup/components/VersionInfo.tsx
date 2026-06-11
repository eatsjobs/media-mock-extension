import React from 'react';
import { getMediaMockVersion } from '../utils/getMediaMockVersion';

const EXTENSION_VERSION = '1.1.1';
const MEDIA_MOCK_VERSION = getMediaMockVersion();

export const VersionInfo: React.FC = () => {
  return (
    <div className="version-info">
      <div className="version-item">
        <span className="version-label">🔧 Extension</span>
        <span className="version-value">v{EXTENSION_VERSION}</span>
      </div>
      <div className="version-item">
        <span className="version-label">📦 Media Mock</span>
        <span className="version-value">v{MEDIA_MOCK_VERSION}</span>
      </div>
    </div>
  );
};