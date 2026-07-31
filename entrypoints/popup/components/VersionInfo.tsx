import React from 'react';
import { getMediaMockVersion } from '../utils/getMediaMockVersion';

const EXTENSION_VERSION = '1.2.2';
const MEDIA_MOCK_VERSION = getMediaMockVersion();

export const VersionInfo: React.FC = () => {
  return (
    <div className="mm-version-info">
      <div className="mm-version-item">
        <span className="mm-version-label">🔧 Extension</span>
        <span className="mm-version-value">v{EXTENSION_VERSION}</span>
      </div>
      <div className="mm-version-item">
        <span className="mm-version-label">📦 Media Mock</span>
        <span className="mm-version-value">v{MEDIA_MOCK_VERSION}</span>
      </div>
    </div>
  );
};