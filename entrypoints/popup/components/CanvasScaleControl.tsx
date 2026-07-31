import React from 'react';

interface CanvasScaleControlProps {
  canvasScaleFactor: number;
  onCanvasScaleFactorChange: (value: number) => void;
}

export const CanvasScaleControl: React.FC<CanvasScaleControlProps> = ({
  canvasScaleFactor,
  onCanvasScaleFactorChange,
}) => {
  return (
    <div className="mm-canvas-scale-control">
      <div className="mm-canvas-scale-label">Canvas Scale Factor</div>

      <div className="mm-range-control">
        <input
          type="range"
          className="mm-range-slider"
          min={0.1}
          max={1}
          step={0.05}
          value={canvasScaleFactor}
          onChange={(e) => onCanvasScaleFactorChange(parseFloat(e.target.value))}
        />
        <span className="mm-range-value">{canvasScaleFactor.toFixed(2)}</span>
      </div>
    </div>
  );
};
