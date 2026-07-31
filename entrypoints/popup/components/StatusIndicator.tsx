import React from 'react';

interface StatusIndicatorProps {
  isActive: boolean;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({ isActive }) => {
  return (
    <div className={`mm-status ${isActive ? 'mm-active' : 'mm-inactive'}`}>
      Status: {isActive ? 'Active' : 'Inactive'}
    </div>
  );
};