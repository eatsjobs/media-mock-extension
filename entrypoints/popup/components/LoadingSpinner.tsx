import React from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'medium' }) => {
  const sizeClass = size === 'small' ? 'spinner-small' : size === 'large' ? 'spinner-large' : 'spinner-medium';
  
  return (
    <div className={`loading-spinner ${sizeClass}`}>
      <div className="spinner-circle"></div>
    </div>
  );
};