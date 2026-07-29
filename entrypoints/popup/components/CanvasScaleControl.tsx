import React from 'react';

interface CanvasScaleControlProps {
  canvasScaleFactor: number;
  isActive: boolean;
  onCanvasScaleFactorChange: (value: number) => void;
}

export const CanvasScaleControl: React.FC<CanvasScaleControlProps> = ({
  canvasScaleFactor,
  isActive,
  onCanvasScaleFactorChange,
}) => {
  return (
    <div className="canvas-scale-control">
      <div className="canvas-scale-label">Canvas Scale Factor</div>

      <div className="range-control">
        <input
          type="range"
          className="range-slider"
          min={0.1}
          max={1}
          step={0.05}
          value={canvasScaleFactor}
          disabled={isActive}
          onChange={(e) => onCanvasScaleFactorChange(parseFloat(e.target.value))}
        />
        <span className="range-value">{canvasScaleFactor.toFixed(2)}</span>
      </div>
    </div>
  );
};
