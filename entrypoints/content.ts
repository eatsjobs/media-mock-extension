// Content script for MediaMock extension

export default defineContentScript({
  matches: ['<all_urls>'],
  runAt: 'document_start',
  main() {
    console.log('MediaMock content script loaded');

    // Start reading storage immediately, in parallel with script injection
    const autostartPromise = chrome.storage.local.get(['mockActive', 'mockDevice', 'mediaUrl', 'mockDebugMode']);

    // Inject MediaMock into the main world using external script
    injectMediaMockScript();

    // Add global flag to indicate extension is ready in isolated world
    (window as any).MediaMockExtensionLoaded = true;

    // Listen for messages from popup
    chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
      (async () => {
        try {
          switch (message.action) {
            case 'START_MOCK':
              await handleStartMock(message.config);
              sendResponse({ success: true, status: 'started' });
              break;
              
            case 'SET_MEDIA_URL':
              await executeCommandInMainWorld('SET_MEDIA_URL', { mediaUrl: message.mediaUrl });
              sendResponse({ success: true, status: 'media_updated' });
              break;
            case 'STOP_MOCK':
              handleStopMock();
              sendResponse({ success: true, status: 'stopped' });
              break;
              
            case 'TEST_CAMERA':
              await handleTestCamera();
              sendResponse({ success: true, status: 'testing' });
              break;
              
            case 'GET_STATUS':
              // Check status from main world
              const result = await executeCommandInMainWorld('GET_STATUS');
              sendResponse(result);
              break;
              
            default:
              sendResponse({ success: false, error: 'Unknown action' });
          }
        } catch (error) {
          console.error('MediaMock extension error:', error);
          sendResponse({ success: false, error: (error as Error).message });
        }
      })();
      
      return true; // Keep message channel open for async response
    });

    function injectMediaMockScript() {
      // Inject UMD bundle first (sets window.MediaMock), then our script
      const umd = document.createElement('script');
      umd.src = chrome.runtime.getURL('media-mock.umd.min.js');
      umd.onload = function() {
        const script = document.createElement('script');
        script.src = chrome.runtime.getURL('inject-mediamock.js');
        script.onerror = function() {
          console.error('Failed to load MediaMock injection script');
        };
        (document.head || document.documentElement).appendChild(script);
      };
      umd.onerror = function() {
        console.error('Failed to load MediaMock UMD bundle');
      };
      (document.head || document.documentElement).appendChild(umd);
    }

    // Auto-restart mock on page load if it was previously active.
    // autostartPromise is already in-flight so this await is near-instant.
    window.addEventListener('mediamock:ready', async () => {
      const result = await autostartPromise;
      if (result.mockActive) {
        console.log('MediaMock: auto-restarting mock after page load');
        await executeCommandInMainWorld('START_MOCK', {
          device: result.mockDevice,
          mediaUrl: result.mediaUrl || '',
          debugMode: result.mockDebugMode || false,
        });
      }
    });

    async function executeCommandInMainWorld(command: string, config?: any) {
      return new Promise((resolve) => {
        const messageId = 'mediamock_cmd_' + Date.now();
        
        // Listen for response from main world
        const handleResponse = (event: Event) => {
          const customEvent = event as CustomEvent;
          if (customEvent.detail.messageId === messageId) {
            window.removeEventListener('mediamock:response', handleResponse);
            resolve(customEvent.detail.result);
          }
        };
        
        window.addEventListener('mediamock:response', handleResponse);
        
        // Send command to main world
        window.dispatchEvent(new CustomEvent('mediamock:command', {
          detail: { messageId, command, config }
        }));
        
        // Timeout after 10 seconds
        setTimeout(() => {
          window.removeEventListener('mediamock:response', handleResponse);
          resolve({ success: false, error: 'Timeout' });
        }, 10000);
      });
    }

    interface StartMockConfig {
      device: string;
      mediaUrl: string;
      debugMode: boolean;
    }

    async function handleStartMock(config: StartMockConfig) {
      console.log('Starting MediaMock with device:', config.device);
      return await executeCommandInMainWorld('START_MOCK', config);
    }

    async function handleStopMock() {
      return await executeCommandInMainWorld('STOP_MOCK');
    }

    async function handleTestCamera() {
      return await executeCommandInMainWorld('TEST_CAMERA');
    }

  },
});