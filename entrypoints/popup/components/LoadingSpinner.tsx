import React from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'medium' }) => {
  const sizeClass = size === 'small' ? 'mm-spinner-small' : size === 'large' ? 'mm-spinner-large' : 'mm-spinner-medium';

  return (
    <div className={`mm-loading-spinner ${sizeClass}`}>
      <div className="mm-spinner-circle"></div>
    </div>
  );
};