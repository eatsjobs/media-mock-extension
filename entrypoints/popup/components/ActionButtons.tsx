import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';

interface ActionButtonsProps {
  isActive: boolean;
  loading: boolean;
  loadingAction: string;
  debugMode: boolean;
  onStart: () => void;
  onStop: () => void;
  onTest: () => void;
  onDebugToggle: (checked: boolean) => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  isActive,
  loading,
  loadingAction,
  debugMode,
  onStart,
  onStop,
  onTest,
  onDebugToggle,
}) => {
  return (
    <>
      <div className="section">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={debugMode}
            onChange={(e) => onDebugToggle(e.target.checked)}
            disabled={isActive}
          />
          Enable debug mode
        </label>
      </div>

      <div className="section buttons">
        <button
          className="button button-primary"
          onClick={onStart}
          disabled={loading || isActive}
        >
          {loading && loadingAction.includes('Starting') ? (
            <>
              <LoadingSpinner size="small" />
              Starting...
            </>
          ) : (
            '▶ Start Mock'
          )}
        </button>
        
        <button
          className="button button-danger"
          onClick={onStop}
          disabled={loading || !isActive}
        >
          {loading && loadingAction.includes('Stopping') ? (
            <>
              <LoadingSpinner size="small" />
              Stopping...
            </>
          ) : (
            '⏹ Stop Mock'
          )}
        </button>
      </div>

      <div className="section">
        <button
          className="button button-secondary full-width"
          onClick={onTest}
          disabled={loading}
        >
          {loading && loadingAction.includes('Testing') ? (
            <>
              <LoadingSpinner size="small" />
              Testing...
            </>
          ) : (
            '🎯 Test Camera Access'
          )}
        </button>
      </div>
    </>
  );
};