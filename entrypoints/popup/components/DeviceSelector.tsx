import { devices } from '@eatsjobs/media-mock';
import React from 'react';

interface DeviceSelectorProps {
  selectedDevice: string;
  autoDetected: boolean;
  isActive: boolean;
  onDeviceChange: (deviceName: string) => void;
}

export const DeviceSelector: React.FC<DeviceSelectorProps> = ({
  selectedDevice,
  autoDetected,
  isActive,
  onDeviceChange,
}) => {
  return (
    <div className="section">
      <div className="section-title">
        Device Configuration
        {autoDetected && <span className="auto-badge">Auto</span>}
      </div>
      
      <div className="device-selector">
        <select
          className="select device-select"
          value={selectedDevice}
          onChange={(e) => onDeviceChange(e.target.value)}
          disabled={isActive}
        >
          {Object.entries(devices).map(([deviceName, deviceConfig]) => {
            const isMobile = deviceName.includes('iPhone') || deviceName.includes('Samsung');
            const deviceType = isMobile ? '📱' : '🖥️';
            const resolutionCount = deviceConfig.videoResolutions.length;
            const cameraCount = deviceConfig.mediaDeviceInfo.filter(d => d.kind === 'videoinput').length;
            
            return (
              <option key={deviceName} value={deviceName}>
                {deviceType} {deviceName} • {cameraCount} 📷 • {resolutionCount} 📐
              </option>
            );
          })}
        </select>
      </div>
      
      {selectedDevice && devices[selectedDevice as keyof typeof devices] && (
        <div className="device-info">
          <div className="device-detail">
            <strong>📐 Resolutions:</strong> 
            <ul>
              {devices[selectedDevice as keyof typeof devices].videoResolutions.map((resolution) => (
                <li key={`${resolution.width}x${resolution.height}`}>{resolution.width}x{resolution.height}</li>
              ))}
            </ul>
          </div>
          <div className="device-detail">
            <strong>📷 Cameras:</strong> {devices[selectedDevice as keyof typeof devices].mediaDeviceInfo.filter(d => d.kind === 'videoinput').length} video input{devices[selectedDevice as keyof typeof devices].mediaDeviceInfo.filter(d => d.kind === 'videoinput').length !== 1 ? 's' : ''}
          </div>
          <div className="device-detail">
            <strong>📝 Type:</strong> {selectedDevice.includes('iPhone') || selectedDevice.includes('Samsung') ? 'Mobile Device' : 'Desktop Device'}
          </div>
        </div>
      )}
    </div>
  );
};