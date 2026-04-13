var injectMediamock=(function(){"use strict";function l(e){return e==null||typeof e=="function"?{main:e}:e}const m=l(()=>{const e=window;try{let t=function(a,i=""){const s=document.createElement("div");s.style.cssText=`
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${a?"#4caf50":"#f44336"};
        color: white;
        padding: 16px 20px;
        border-radius: 8px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 14px;
        font-weight: 500;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        max-width: 300px;
      `,s.textContent=a?"✓ Camera test successful":`✗ Camera test failed: ${i}`,document.body.appendChild(s),setTimeout(()=>s.remove(),3e3)};e.MediaMockPageContextReady=!0,console.log("MediaMock loaded in main world"),console.log("Available devices:",Object.keys(e.MediaMock.devices)),window.dispatchEvent(new CustomEvent("mediamock:ready")),window.addEventListener("mediamock:command",async a=>{const i=a,{messageId:s,command:n,config:r}=i.detail;try{let o;switch(n){case"START_MOCK":o=await w(r);break;case"STOP_MOCK":o=await k();break;case"TEST_CAMERA":o=await M();break;case"SET_MEDIA_URL":await e.MediaMock.MediaMock.setMediaURL(r.mediaUrl),o={success:!0,status:"media_updated"};break;case"GET_STATUS":o={success:!0,isActive:e.MediaMockActive||!1};break;default:o={success:!1,error:"Unknown command: "+n}}window.dispatchEvent(new CustomEvent("mediamock:response",{detail:{messageId:s,result:o}}))}catch(o){window.dispatchEvent(new CustomEvent("mediamock:response",{detail:{messageId:s,result:{success:!1,error:o.message}}}))}});async function w(a){const{device:i,mediaUrl:s,debugMode:n}=a,{MediaMock:r,devices:o}=e.MediaMock;if(!o[i])throw new Error(`Unknown device: ${i}`);let d=r;return n&&(d=d.enableDebugMode()),d.mock(o[i]),s&&await d.setMediaURL(s),e.MediaMockActive=!0,window.dispatchEvent(new CustomEvent("mediamock:started",{detail:{device:i,mediaUrl:s,debugMode:n}})),{success:!0,status:"started"}}async function k(){return e.MediaMock.MediaMock.unmock(),e.MediaMockActive=!1,window.dispatchEvent(new CustomEvent("mediamock:stopped")),{success:!0,status:"stopped"}}async function M(){try{return(await navigator.mediaDevices.getUserMedia({video:{width:{ideal:640},height:{ideal:480}}})).getTracks().forEach(i=>i.stop()),t(!0),{success:!0,status:"testing"}}catch(a){return t(!1,a.message),{success:!1,error:a.message}}}}catch(t){console.error("Failed to initialize MediaMock in main world:",t)}});function f(){}function c(e,...t){}const u={debug:(...e)=>c(console.debug,...e),log:(...e)=>c(console.log,...e),warn:(...e)=>c(console.warn,...e),error:(...e)=>c(console.error,...e)};return(()=>{try{}catch(t){throw u.error('Failed to initialize plugins for "inject-mediamock"',t),t}let e;try{e=m.main(),e instanceof Promise&&(e=e.catch(t=>{throw u.error('The unlisted script "inject-mediamock" crashed on startup!',t),t}))}catch(t){throw u.error('The unlisted script "inject-mediamock" crashed on startup!',t),t}return e})()})();

injectMediamock;