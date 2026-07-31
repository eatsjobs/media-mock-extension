import React from 'react';
import { CanvasScaleControl } from './CanvasScaleControl';

interface MediaSourceUploadProps {
  mediaUrl: string;
  uploadedFile: File | null;
  uploadedFileName: string;
  isDragging: boolean;
  isActive: boolean;
  canvasScaleFactor?: number;
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onMediaUrlChange: (url: string) => void;
  onClearFile: () => void;
  onDragEnter: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onCanvasScaleFactorChange?: (value: number) => void;
}

export const MediaSourceUpload: React.FC<MediaSourceUploadProps> = ({
  mediaUrl,
  uploadedFile,
  uploadedFileName,
  isDragging,
  isActive,
  canvasScaleFactor,
  onFileUpload,
  onMediaUrlChange,
  onClearFile,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
  onCanvasScaleFactorChange,
}) => {
  return (
    <div className="mm-section">
      <div className="mm-section-title">Media Source</div>

      <div
        className={`mm-upload-section ${isDragging ? 'mm-dragging' : ''}`}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        <input
          id="file-upload"
          type="file"
          accept="image/*,video/*"
          onChange={onFileUpload}
          disabled={isActive}
          className="mm-file-input"
        />
        <label
          htmlFor="file-upload"
          className={`mm-button mm-button-upload ${isActive ? 'mm-disabled' : ''} ${isDragging ? 'mm-drag-active' : ''}`}
        >
          {isDragging ? '📎 Drop file here' : '📁 Upload Local File or Drag & Drop'}
        </label>
      </div>

      {uploadedFile && (
        <div className="mm-uploaded-file-info">
          <div className="mm-file-details">
            <span className="mm-file-icon">
              {uploadedFile.type.startsWith('video/') ? '🎥' : '🖼️'}
            </span>
            <span className="mm-file-name">{uploadedFileName}</span>
            <span className="mm-file-size">
              ({(uploadedFile.size / 1024 / 1024).toFixed(1)} MB)
            </span>
          </div>
          <button
            className="mm-button mm-button-small mm-button-danger"
            onClick={onClearFile}
            disabled={isActive}
          >
            ✕
          </button>
        </div>
      )}

      <input
        type="text"
        className="mm-input"
        placeholder="Or enter image/video URL"
        value={uploadedFile ? '' : mediaUrl}
        onChange={(e) => onMediaUrlChange(e.target.value)}
        disabled={isActive || !!uploadedFile}
      />

      {canvasScaleFactor !== undefined && onCanvasScaleFactorChange && (
        <CanvasScaleControl
          canvasScaleFactor={canvasScaleFactor}
          onCanvasScaleFactorChange={onCanvasScaleFactorChange}
        />
      )}
    </div>
  );
};