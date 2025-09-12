import React from 'react';

interface StatusIndicatorProps {
  isActive: boolean;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({ isActive }) => {
  return (
    <div className={`status ${isActive ? 'active' : 'inactive'}`}>
      Status: {isActive ? 'Active' : 'Inactive'}
    </div>
  );
};