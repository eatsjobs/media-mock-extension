import React, { useState, useCallback, useEffect, CSSProperties } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Header,
  Message,
  StatusIndicator,
  DeviceSelector,
  MediaSourceUpload,
  ActionButtons,
  VersionInfo,
} from './popup/components';
import popupStyles from './popup/style.css?raw';

function detectDevice(): string {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes('iphone') || ua.includes('ipad')) return 'iPhone 12';
  if (ua.includes('android') && ua.includes('mobile')) return 'Samsung Galaxy M53';
  return 'Mac Desktop';
}

function executeCommand(command: string, config?: any): Promise<any> {
  return new Promise((resolve) => {
    const messageId = 'mediamock_overlay_' + Date.now();
    const handleResponse = (event: Event) => {
      const e = event as CustomEvent;
      if (e.detail.messageId === messageId) {
        window.removeEventListener('mediamock:response', handleResponse);
        resolve(e.detail.result);
      }
    };
    window.addEventListener('mediamock:response', handleResponse);
    window.dispatchEvent(new CustomEvent('mediamock:command', {
      detail: { messageId, command, config },
    }));
    setTimeout(() => {
      window.removeEventListener('mediamock:response', handleResponse);
      resolve({ success: false, error: 'Timeout' });
    }, 10000);
  });
}

interface MockState {
  isActive: boolean;
  device: string;
  mediaUrl: string;
  debugMode: boolean;
  autoDetected: boolean;
  uploadedFile: File | null;
  uploadedFileName: string;
  isDragging: boolean;
}

// All structural styles are inline so page CSS can never override them
const S = {
  fabWrapper: (hidden: boolean): CSSProperties => ({
    position: 'fixed',
    bottom: '80px',
    right: 0,
    zIndex: 2147483646,
    display: 'flex',
    alignItems: 'center',
    pointerEvents: 'auto',
    transform: hidden ? 'translateX(56px)' : 'translateX(0)',
    transition: 'transform 0.25s ease',
  }),
  fabToggle: {
    width: '20px',
    height: '40px',
    border: 'none',
    borderRadius: '6px 0 0 6px',
    background: '#1e40af',
    color: 'white',
    fontSize: '12px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    outline: 'none',
    boxShadow: '-2px 2px 8px rgba(0,0,0,0.25)',
    flexShrink: 0,
  } as CSSProperties,
  fab: {
    width: '56px',
    height: '56px',
    borderRadius: '12px 0 0 12px',
    background: '#2563eb',
    color: 'white',
    fontSize: '22px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 16px rgba(0,0,0,0.35)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    outline: 'none',
    position: 'relative',
    flexShrink: 0,
  } as CSSProperties,
  fabDot: (active: boolean): CSSProperties => ({
    position: 'absolute',
    top: '6px',
    right: '6px',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: active ? '#22c55e' : '#6b7280',
    border: '2px solid #2563eb',
    pointerEvents: 'none',
  }),
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.45)',
    zIndex: 2147483644,
    pointerEvents: 'auto',
  } as CSSProperties,
  drawer: (open: boolean): CSSProperties => ({
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2147483645,
    maxHeight: '85vh',
    overflowY: 'auto',
    pointerEvents: 'auto',
    WebkitOverflowScrolling: 'touch' as any,
    transform: open ? 'translateY(0)' : 'translateY(100%)',
    transition: 'transform 0.3s ease',
    borderRadius: '16px 16px 0 0',
    background: 'linear-gradient(135deg, #0d1b2e 0%, #1a3367 55%, #2ec1ce 100%)',
  }),
  handle: {
    width: '40px',
    height: '4px',
    background: 'rgba(255,255,255,0.3)',
    borderRadius: '2px',
    margin: '12px auto 0',
    cursor: 'pointer',
    display: 'block',
  } as CSSProperties,
  content: {
    padding: '8px 0 32px',
  } as CSSProperties,
};

function OverlayApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [fabHidden, setFabHidden] = useState(false);
  const [state, setState] = useState<MockState>({
    isActive: false,
    device: detectDevice(),
    mediaUrl: '',
    debugMode: false,
    autoDetected: true,
    uploadedFile: null,
    uploadedFileName: '',
    isDragging: false,
  });
  const [loading, setLoading] = useState(false);
  const [loadingAction, setLoadingAction] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');

  const showMessage = useCallback((text: string, type: 'success' | 'error') => {
    setMessage(text);
    setMessageType(type);
    setTimeout(() => setMessage(''), 3000);
  }, []);

  useEffect(() => {
    chrome.storage.local.get(['mockActive', 'mockDevice', 'mediaUrl', 'uploadedFileName', 'mockDebugMode'], (result) => {
      setState(prev => ({
        ...prev,
        ...(result.mockDevice ? { device: result.mockDevice, autoDetected: false } : {}),
        ...(result.mediaUrl ? { mediaUrl: result.mediaUrl } : {}),
        ...(result.uploadedFileName ? { uploadedFileName: result.uploadedFileName } : {}),
        ...(result.mockDebugMode ? { debugMode: result.mockDebugMode } : {}),
      }));
    });

    const checkStatus = async () => {
      const result = await executeCommand('GET_STATUS');
      if (result && result.success) setState(prev => ({ ...prev, isActive: result.isActive }));
    };

    window.addEventListener('mediamock:ready', checkStatus);
    checkStatus();
    return () => window.removeEventListener('mediamock:ready', checkStatus);
  }, []);

  const handleStartMock = async () => {
    setLoading(true);
    setLoadingAction('Starting MediaMock...');
    try {
      const result = await executeCommand('START_MOCK', {
        device: state.device,
        mediaUrl: state.mediaUrl,
        debugMode: state.debugMode,
      });
      if (result && result.success) {
        setState(prev => ({ ...prev, isActive: true }));
        chrome.storage.local.set({ mockActive: true, mockDevice: state.device, mockDebugMode: state.debugMode });
        showMessage('MediaMock started successfully', 'success');
      } else {
        throw new Error((result && result.error) || 'Failed to start mock');
      }
    } catch (error) {
      showMessage('Failed to start: ' + (error as Error).message, 'error');
    } finally {
      setLoading(false);
      setLoadingAction('');
    }
  };

  const handleStopMock = async () => {
    setLoading(true);
    setLoadingAction('Stopping MediaMock...');
    try {
      const result = await executeCommand('STOP_MOCK');
      if (result && result.success) {
        setState(prev => ({ ...prev, isActive: false }));
        chrome.storage.local.set({ mockActive: false });
        showMessage('MediaMock stopped', 'success');
      } else {
        throw new Error((result && result.error) || 'Failed to stop mock');
      }
    } catch (error) {
      showMessage('Failed to stop: ' + (error as Error).message, 'error');
    } finally {
      setLoading(false);
      setLoadingAction('');
    }
  };

  const handleTestCamera = async () => {
    setLoading(true);
    setLoadingAction('Testing camera access...');
    try {
      const result = await executeCommand('TEST_CAMERA');
      if (result && result.success) {
        showMessage('Camera test completed', 'success');
      } else {
        throw new Error((result && result.error) || 'Camera test failed');
      }
    } catch (error) {
      showMessage('Camera test failed: ' + (error as Error).message, 'error');
    } finally {
      setLoading(false);
      setLoadingAction('');
    }
  };

  const validateAndProcessFile = (file: File) => {
    const validTypes = [
      'image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp',
      'video/mp4', 'video/webm', 'video/mov', 'video/avi', 'video/mkv',
    ];
    if (!validTypes.includes(file.type)) { showMessage('Please select a valid image or video file', 'error'); return false; }
    if (file.size > 50 * 1024 * 1024) { showMessage('File size must be less than 50MB', 'error'); return false; }
    const reader = new FileReader();
    reader.onload = async (e) => {
      const dataUrl = e.target && e.target.result as string;
      if (!dataUrl) return;
      setState(prev => ({ ...prev, mediaUrl: dataUrl, uploadedFile: file, uploadedFileName: file.name }));
      chrome.storage.local.set({ mediaUrl: dataUrl, uploadedFileName: file.name });
      if (state.isActive) await executeCommand('SET_MEDIA_URL', { mediaUrl: dataUrl });
      showMessage('Uploaded ' + file.name + ' successfully', 'success');
    };
    reader.onerror = () => showMessage('Failed to read file', 'error');
    reader.readAsDataURL(file);
    return true;
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) validateAndProcessFile(file);
  };

  const clearUploadedFile = () => {
    setState(prev => ({ ...prev, mediaUrl: '', uploadedFile: null, uploadedFileName: '' }));
    chrome.storage.local.remove(['mediaUrl', 'uploadedFileName']);
    const fileInput = document.getElementById('file-upload') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  const handleDragEnter = (e: React.DragEvent) => { e.preventDefault(); e.stopPropagation(); setState(prev => ({ ...prev, isDragging: true })); };
  const handleDragLeave = (e: React.DragEvent) => { e.preventDefault(); e.stopPropagation(); setState(prev => ({ ...prev, isDragging: false })); };
  const handleDragOver = (e: React.DragEvent) => { e.preventDefault(); e.stopPropagation(); };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault(); e.stopPropagation();
    setState(prev => ({ ...prev, isDragging: false }));
    const file = e.dataTransfer.files[0];
    if (file) validateAndProcessFile(file);
  };

  return (
    <>
      <div style={S.fabWrapper(fabHidden)}>
        <button
          style={S.fabToggle}
          onClick={() => setFabHidden(h => !h)}
          aria-label={fabHidden ? 'Show MediaMock' : 'Hide MediaMock'}
        >
          {fabHidden ? '‹' : '›'}
        </button>
        <button style={S.fab} onClick={() => setIsOpen(o => !o)} aria-label="Toggle MediaMock">
          <span style={S.fabDot(state.isActive)} />
          📷
        </button>
      </div>

      {isOpen && <div style={S.backdrop} onClick={() => setIsOpen(false)} />}

      <div style={S.drawer(isOpen)} role="dialog" aria-label="MediaMock controls">
        <div style={S.handle} onClick={() => setIsOpen(false)} />
        <div style={S.content} className="mm-popup">
          <div className="popup-container">
            <Header />
            <Message message={message} type={messageType} />
            <StatusIndicator isActive={state.isActive} />
            <DeviceSelector
              selectedDevice={state.device}
              autoDetected={state.autoDetected}
              isActive={state.isActive}
              onDeviceChange={(d) => setState(prev => ({ ...prev, device: d, autoDetected: false }))}
            />
            <MediaSourceUpload
              mediaUrl={state.mediaUrl}
              uploadedFile={state.uploadedFile}
              uploadedFileName={state.uploadedFileName}
              isDragging={state.isDragging}
              isActive={state.isActive}
              onFileUpload={handleFileUpload}
              onMediaUrlChange={async (url) => {
                setState(prev => ({ ...prev, mediaUrl: url }));
                if (url) {
                  chrome.storage.local.set({ mediaUrl: url, uploadedFileName: '' });
                  if (state.isActive) await executeCommand('SET_MEDIA_URL', { mediaUrl: url });
                } else {
                  chrome.storage.local.remove(['mediaUrl', 'uploadedFileName']);
                }
              }}
              onClearFile={clearUploadedFile}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            />
            <ActionButtons
              isActive={state.isActive}
              loading={loading}
              loadingAction={loadingAction}
              debugMode={state.debugMode}
              onStart={handleStartMock}
              onStop={handleStopMock}
              onTest={handleTestCamera}
              onDebugToggle={(checked) => setState(prev => ({ ...prev, debugMode: checked }))}
            />
            <VersionInfo />
          </div>
        </div>
      </div>
    </>
  );
}

export default defineContentScript({
  matches: ['<all_urls>'],
  runAt: 'document_end',
  main() {
    console.log('[MediaMock] overlay script running on', navigator.userAgent);

    const mount = () => {
      try {
        // Scope popup styles to .mm-popup so they don't affect the page
        const style = document.createElement('style');
        style.textContent = popupStyles
          .replace(/:root\b/g, '.mm-popup')
          .replace(/^body\b/gm, '.mm-popup')
          .replace(/\bbody\b/g, '.mm-popup');
        document.head.appendChild(style);

        const container = document.createElement('div');
        document.body.appendChild(container);

        createRoot(container).render(<OverlayApp />);
        console.log('[MediaMock] overlay mounted successfully');
      } catch (err) {
        console.error('[MediaMock] overlay failed to mount:', err);
        // Fallback: plain DOM FAB button so we know the script ran
        const fab = document.createElement('button');
        fab.textContent = '📷';
        fab.setAttribute('aria-label', 'MediaMock (fallback)');
        fab.style.cssText = 'position:fixed;bottom:80px;right:0;width:56px;height:56px;border-radius:12px 0 0 12px;background:#2563eb;color:white;font-size:22px;border:none;cursor:pointer;z-index:2147483646;box-shadow:0 4px 16px rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;padding:0;';
        document.body.appendChild(fab);
      }
    };

    if (document.body) {
      mount();
    } else {
      document.addEventListener('DOMContentLoaded', mount);
    }
  },
});
