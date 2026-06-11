// MediaMock injection script - runs in MAIN world
// Relies on the UMD bundle (media-mock.umd.min.js) being loaded first,
// which sets window.MediaMock = { MediaMock: instance, devices: {...} }
import type { MediaMockClass, DeviceConfig } from "@eatsjobs/media-mock";

export default defineUnlistedScript(() => {
  interface MediaMockNamespace {
    MediaMock: InstanceType<typeof MediaMockClass>;
    devices: Record<string, DeviceConfig>;
  }

  interface MediaMockWindow extends Window {
    MediaMock: MediaMockNamespace;
    MediaMockPageContextReady: boolean;
    MediaMockActive: boolean;
  }

  const mediaWindow = window as unknown as MediaMockWindow;

  try {
    mediaWindow.MediaMockPageContextReady = true;

    console.log("MediaMock loaded in main world");
    console.log("Available devices:", Object.keys(mediaWindow.MediaMock.devices));

    // Signal to content script that the inject script is ready
    window.dispatchEvent(new CustomEvent("mediamock:ready"));

    // Listen for commands from content script
    window.addEventListener("mediamock:command", async (event) => {
      const customEvent = event as CustomEvent;
      const { messageId, command, config } = customEvent.detail;

      try {
        let result: { success: boolean; status?: string } |
                    { success: boolean; error: string } |
                    { success: boolean; isActive: boolean };

        switch (command) {
          case "START_MOCK":
            result = await startMock(config);
            break;
          case "STOP_MOCK":
            result = await stopMock();
            break;
          case "TEST_CAMERA":
            result = await testCamera();
            break;
          case "SET_MEDIA_URL":
            await mediaWindow.MediaMock.MediaMock.setMediaURL(config.mediaUrl);
            result = { success: true, status: "media_updated" };
            break;
          case "GET_STATUS":
            result = {
              success: true,
              isActive: mediaWindow.MediaMockActive || false,
            };
            break;
          default:
            result = { success: false, error: "Unknown command: " + command };
        }

        window.dispatchEvent(
          new CustomEvent("mediamock:response", {
            detail: { messageId, result },
          }),
        );
      } catch (error) {
        window.dispatchEvent(
          new CustomEvent("mediamock:response", {
            detail: {
              messageId,
              result: { success: false, error: (error as Error).message },
            },
          }),
        );
      }
    });

    interface StartMockConfig {
      device: string;
      mediaUrl: string;
      debugMode: boolean;
    }

    async function startMock(config: StartMockConfig) {
      const { device, mediaUrl, debugMode } = config;
      const { MediaMock: instance, devices } = mediaWindow.MediaMock;

      if (!devices[device]) {
        throw new Error(`Unknown device: ${device}`);
      }

      let mockInstance = instance;
      if (debugMode) {
        mockInstance = mockInstance.enableDebugMode();
      }

      mockInstance.mock(devices[device]);

      if (mediaUrl) {
        await mockInstance.setMediaURL(mediaUrl);
      }

      mediaWindow.MediaMockActive = true;

      window.dispatchEvent(
        new CustomEvent("mediamock:started", {
          detail: { device, mediaUrl, debugMode },
        }),
      );

      return { success: true, status: "started" };
    }

    async function stopMock() {
      mediaWindow.MediaMock.MediaMock.unmock();
      mediaWindow.MediaMockActive = false;
      window.dispatchEvent(new CustomEvent("mediamock:stopped"));
      return { success: true, status: "stopped" };
    }

    async function testCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: { ideal: 640 }, height: { ideal: 480 } },
        });

        stream.getTracks().forEach((track) => track.stop());
        showTestResult(true);
        return { success: true, status: "testing" };
      } catch (error) {
        showTestResult(false, (error as Error).message);
        return { success: false, error: (error as Error).message };
      }
    }

    function showTestResult(success: boolean, errorMessage = "") {
      const overlay = document.createElement("div");
      overlay.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${success ? "#4caf50" : "#f44336"};
        color: white;
        padding: 16px 20px;
        border-radius: 8px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 14px;
        font-weight: 500;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        max-width: 300px;
      `;
      overlay.textContent = success
        ? "✓ Camera test successful"
        : `✗ Camera test failed: ${errorMessage}`;
      document.body.appendChild(overlay);
      setTimeout(() => overlay.remove(), 3000);
    }
  } catch (error) {
    console.error("Failed to initialize MediaMock in main world:", error);
  }
});
