import React from 'react';

interface MediaSourceUploadProps {
  mediaUrl: string;
  uploadedFile: File | null;
  uploadedFileName: string;
  isDragging: boolean;
  isActive: boolean;
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onMediaUrlChange: (url: string) => void;
  onClearFile: () => void;
  onDragEnter: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
}

export const MediaSourceUpload: React.FC<MediaSourceUploadProps> = ({
  mediaUrl,
  uploadedFile,
  uploadedFileName,
  isDragging,
  isActive,
  onFileUpload,
  onMediaUrlChange,
  onClearFile,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
}) => {
  return (
    <div className="section">
      <div className="section-title">Media Source</div>
      
      <div
        className={`upload-section ${isDragging ? 'dragging' : ''}`}
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
          className="file-input"
        />
        <label
          htmlFor="file-upload"
          className={`button button-upload ${isActive ? 'disabled' : ''} ${isDragging ? 'drag-active' : ''}`}
        >
          {isDragging ? '📎 Drop file here' : '📁 Upload Local File or Drag & Drop'}
        </label>
      </div>

      {uploadedFile && (
        <div className="uploaded-file-info">
          <div className="file-details">
            <span className="file-icon">
              {uploadedFile.type.startsWith('video/') ? '🎥' : '🖼️'}
            </span>
            <span className="file-name">{uploadedFileName}</span>
            <span className="file-size">
              ({(uploadedFile.size / 1024 / 1024).toFixed(1)} MB)
            </span>
          </div>
          <button
            className="button button-small button-danger"
            onClick={onClearFile}
            disabled={isActive}
          >
            ✕
          </button>
        </div>
      )}

      <input
        type="text"
        className="input"
        placeholder="Or enter image/video URL"
        value={uploadedFile ? '' : mediaUrl}
        onChange={(e) => onMediaUrlChange(e.target.value)}
        disabled={isActive || !!uploadedFile}
      />
    </div>
  );
};