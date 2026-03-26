import { devices } from '@eatsjobs/media-mock';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Header, 
  Message, 
  StatusIndicator, 
  DeviceSelector, 
  MediaSourceUpload, 
  ActionButtons,
  VersionInfo 
} from './components';

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

// User agent detection for smart device selection
function detectDeviceFromUserAgent(userAgent: string): keyof typeof devices {
  const ua = userAgent.toLowerCase();
  
  // iOS devices → iPhone 12
  if (ua.includes('iphone') || ua.includes('ipad')) {
    return 'iPhone 12';
  }
  
  // Android mobile → Samsung Galaxy M53
  if (ua.includes('android') && ua.includes('mobile')) {
    return 'Samsung Galaxy M53';
  }
  
  // Desktop (default) → Mac Desktop
  return 'Mac Desktop';
}

function Popup() {
  const [state, setState] = useState<MockState>({
    isActive: false,
    device: Object.keys(devices)[0], // Will be updated by auto-detection
    mediaUrl: '',
    debugMode: false,
    autoDetected: false,
    uploadedFile: null,
    uploadedFileName: '',
    isDragging: false
  });
  const [loading, setLoading] = useState(false);
  const [loadingAction, setLoadingAction] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');

  useEffect(() => {
    initializePopup();
  }, []);

  const initializePopup = async () => {
    try {
      // Get current tab and detect device from user agent
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

      if (tab.id) {
        // Execute script to get user agent from the tab
        const results = await chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: () => navigator.userAgent
        });

        if (results && results[0] && results[0].result) {
          const userAgent = results[0].result;
          const detectedDevice = detectDeviceFromUserAgent(userAgent);

          setState(prev => ({
            ...prev,
            device: detectedDevice,
            autoDetected: true
          }));
        }
      }
    } catch (error) {
      console.error('Failed to detect device from user agent:', error);
      // Fall back to first device if detection fails
    }

    // Restore persisted media URL
    chrome.storage.local.get(['mediaUrl', 'uploadedFileName'], (result) => {
      if (result.mediaUrl) {
        setState(prev => ({
          ...prev,
          mediaUrl: result.mediaUrl,
          uploadedFileName: result.uploadedFileName || '',
        }));
      }
    });

    // Check mock status regardless
    checkStatus();
  };

  const checkStatus = async () => {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      const response = await chrome.tabs.sendMessage(tab.id!, { action: 'GET_STATUS' });
      
      if (response?.success) {
        setState(prev => ({ ...prev, isActive: response.isActive }));
      }
    } catch (error) {
      console.error('Failed to check status:', error);
    }
  };

  const sendMessageToActiveTab = async (message: any) => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    return chrome.tabs.sendMessage(tab.id!, message);
  };

  const handleStartMock = async () => {
    if (!state.device) {
      showMessage('Please select a device', 'error');
      return;
    }

    setLoading(true);
    setLoadingAction('Starting MediaMock...');
    try {
      const response = await sendMessageToActiveTab({
        action: 'START_MOCK',
        config: {
          device: state.device,
          mediaUrl: state.mediaUrl,
          debugMode: state.debugMode
        }
      });

      if (response?.success) {
        setState(prev => ({ ...prev, isActive: true }));
        chrome.storage.local.set({
          mockActive: true,
          mockDevice: state.device,
          mockDebugMode: state.debugMode,
        });
        showMessage('MediaMock started successfully', 'success');
      } else {
        throw new Error(response?.error || 'Failed to start mock');
      }
    } catch (error) {
      showMessage(`Failed to start: ${(error as Error).message}`, 'error');
    } finally {
      setLoading(false);
      setLoadingAction('');
    }
  };

  const handleStopMock = async () => {
    setLoading(true);
    setLoadingAction('Stopping MediaMock...');
    try {
      const response = await sendMessageToActiveTab({ action: 'STOP_MOCK' });
      
      if (response?.success) {
        setState(prev => ({ ...prev, isActive: false }));
        chrome.storage.local.set({ mockActive: false });
        showMessage('MediaMock stopped', 'success');
      } else {
        throw new Error(response?.error || 'Failed to stop mock');
      }
    } catch (error) {
      showMessage(`Failed to stop: ${(error as Error).message}`, 'error');
    } finally {
      setLoading(false);
      setLoadingAction('');
    }
  };

  const handleTestCamera = async () => {
    setLoading(true);
    setLoadingAction('Testing camera access...');
    try {
      const response = await sendMessageToActiveTab({ action: 'TEST_CAMERA' });
      
      if (response?.success) {
        showMessage('Camera test completed - check console for details', 'success');
      } else {
        throw new Error(response?.error || 'Camera test failed');
      }
    } catch (error) {
      showMessage(`Camera test failed: ${(error as Error).message}`, 'error');
    } finally {
      setLoading(false);
      setLoadingAction('');
    }
  };

  const showMessage = (text: string, type: 'success' | 'error') => {
    setMessage(text);
    setMessageType(type);
    setTimeout(() => setMessage(''), 3000);
  };


  const handleDeviceChange = (deviceName: string) => {
    setState(prev => ({
      ...prev,
      device: deviceName,
      autoDetected: false // Clear auto-detected flag when user manually changes
    }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    validateAndProcessFile(file);
  };

  const clearUploadedFile = () => {
    setState(prev => ({
      ...prev,
      mediaUrl: '',
      uploadedFile: null,
      uploadedFileName: ''
    }));
    chrome.storage.local.remove(['mediaUrl', 'uploadedFileName']);

    // Clear the file input
    const fileInput = document.getElementById('file-upload') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  const validateAndProcessFile = (file: File) => {
    // Validate file type
    const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    const validVideoTypes = ['video/mp4', 'video/webm', 'video/mov', 'video/avi', 'video/mkv'];
    const validTypes = [...validImageTypes, ...validVideoTypes];

    if (!validTypes.includes(file.type)) {
      showMessage('Please select a valid image or video file', 'error');
      return false;
    }

    // Check file size (limit to 50MB)
    const maxSize = 50 * 1024 * 1024; // 50MB
    if (file.size > maxSize) {
      showMessage('File size must be less than 50MB', 'error');
      return false;
    }

    // Read file and convert to data URL
    const reader = new FileReader();
    reader.onload = async (e) => {
      const dataUrl = e.target?.result as string;
      setState(prev => ({
        ...prev,
        mediaUrl: dataUrl,
        uploadedFile: file,
        uploadedFileName: file.name
      }));
      chrome.storage.local.set({ mediaUrl: dataUrl, uploadedFileName: file.name });
      if (state.isActive) {
        await sendMessageToActiveTab({ action: 'SET_MEDIA_URL', mediaUrl: dataUrl });
      }
      showMessage(`Uploaded ${file.name} successfully`, 'success');
    };
    
    reader.onerror = () => {
      showMessage('Failed to read file', 'error');
    };

    reader.readAsDataURL(file);
    return true;
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setState(prev => ({ ...prev, isDragging: true }));
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setState(prev => ({ ...prev, isDragging: false }));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setState(prev => ({ ...prev, isDragging: false }));

    const files = Array.from(e.dataTransfer.files);
    if (files.length === 0) return;

    const file = files[0]; // Only take the first file
    validateAndProcessFile(file);
  };

  return (
    <div className="popup-container">
      <Header />
      
      <Message message={message} type={messageType} />
      
      <StatusIndicator isActive={state.isActive} />
      
      <DeviceSelector
        selectedDevice={state.device}
        autoDetected={state.autoDetected}
        isActive={state.isActive}
        onDeviceChange={handleDeviceChange}
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
            if (state.isActive) {
              await sendMessageToActiveTab({ action: 'SET_MEDIA_URL', mediaUrl: url });
            }
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
  );
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<Popup />);
}