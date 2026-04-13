var Lf=Object.defineProperty;var jf=(gt,un,vn)=>un in gt?Lf(gt,un,{enumerable:!0,configurable:!0,writable:!0,value:vn}):gt[un]=vn;var Qo=(gt,un,vn)=>jf(gt,typeof un!="symbol"?un+"":un,vn);var overlay=(function(){"use strict";var ia,la,tt,oa,yn;function gt(h){return h}var un={exports:{}},vn={},Hi={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yo;function nc(){if(Yo)return W;Yo=1;var h=Symbol.for("react.element"),s=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),j=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),Y=Symbol.iterator;function Q(f){return f===null||typeof f!="object"?null:(f=Y&&f[Y]||f["@@iterator"],typeof f=="function"?f:null)}var ge={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},le=Object.assign,te={};function q(f,k,H){this.props=f,this.context=k,this.refs=te,this.updater=H||ge}q.prototype.isReactComponent={},q.prototype.setState=function(f,k){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,k,"setState")},q.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function sn(){}sn.prototype=q.prototype;function We(f,k,H){this.props=f,this.context=k,this.refs=te,this.updater=H||ge}var Qe=We.prototype=new sn;Qe.constructor=We,le(Qe,q.prototype),Qe.isPureReactComponent=!0;var ke=Array.isArray,Ye=Object.prototype.hasOwnProperty,_e={current:null},Te={key:!0,ref:!0,__self:!0,__source:!0};function Oe(f,k,H){var K,G={},Z=null,re=null;if(k!=null)for(K in k.ref!==void 0&&(re=k.ref),k.key!==void 0&&(Z=""+k.key),k)Ye.call(k,K)&&!Te.hasOwnProperty(K)&&(G[K]=k[K]);var ee=arguments.length-2;if(ee===1)G.children=H;else if(1<ee){for(var ue=Array(ee),Ge=0;Ge<ee;Ge++)ue[Ge]=arguments[Ge+2];G.children=ue}if(f&&f.defaultProps)for(K in ee=f.defaultProps,ee)G[K]===void 0&&(G[K]=ee[K]);return{$$typeof:h,type:f,key:Z,ref:re,props:G,_owner:_e.current}}function I(f,k){return{$$typeof:h,type:f.type,key:k,ref:f.ref,props:f.props,_owner:f._owner}}function B(f){return typeof f=="object"&&f!==null&&f.$$typeof===h}function Ie(f){var k={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(H){return k[H]})}var Ke=/\/+/g;function Se(f,k){return typeof f=="object"&&f!==null&&f.key!=null?Ie(""+f.key):k.toString(36)}function Xe(f,k,H,K,G){var Z=typeof f;(Z==="undefined"||Z==="boolean")&&(f=null);var re=!1;if(f===null)re=!0;else switch(Z){case"string":case"number":re=!0;break;case"object":switch(f.$$typeof){case h:case s:re=!0}}if(re)return re=f,G=G(re),f=K===""?"."+Se(re,0):K,ke(G)?(H="",f!=null&&(H=f.replace(Ke,"$&/")+"/"),Xe(G,k,H,"",function(Ge){return Ge})):G!=null&&(B(G)&&(G=I(G,H+(!G.key||re&&re.key===G.key?"":(""+G.key).replace(Ke,"$&/")+"/")+f)),k.push(G)),1;if(re=0,K=K===""?".":K+":",ke(f))for(var ee=0;ee<f.length;ee++){Z=f[ee];var ue=K+Se(Z,ee);re+=Xe(Z,k,H,ue,G)}else if(ue=Q(f),typeof ue=="function")for(f=ue.call(f),ee=0;!(Z=f.next()).done;)Z=Z.value,ue=K+Se(Z,ee++),re+=Xe(Z,k,H,ue,G);else if(Z==="object")throw k=String(f),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.");return re}function wn(f,k,H){if(f==null)return f;var K=[],G=0;return Xe(f,K,"","",function(Z){return k.call(H,Z,G++)}),K}function Ue(f){if(f._status===-1){var k=f._result;k=k(),k.then(function(H){(f._status===0||f._status===-1)&&(f._status=1,f._result=H)},function(H){(f._status===0||f._status===-1)&&(f._status=2,f._result=H)}),f._status===-1&&(f._status=0,f._result=k)}if(f._status===1)return f._result.default;throw f._result}var fe={current:null},N={transition:null},U={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:N,ReactCurrentOwner:_e};function z(){throw Error("act(...) is not supported in production builds of React.")}return W.Children={map:wn,forEach:function(f,k,H){wn(f,function(){k.apply(this,arguments)},H)},count:function(f){var k=0;return wn(f,function(){k++}),k},toArray:function(f){return wn(f,function(k){return k})||[]},only:function(f){if(!B(f))throw Error("React.Children.only expected to receive a single React element child.");return f}},W.Component=q,W.Fragment=a,W.Profiler=v,W.PureComponent=We,W.StrictMode=y,W.Suspense=T,W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,W.act=z,W.cloneElement=function(f,k,H){if(f==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+f+".");var K=le({},f.props),G=f.key,Z=f.ref,re=f._owner;if(k!=null){if(k.ref!==void 0&&(Z=k.ref,re=_e.current),k.key!==void 0&&(G=""+k.key),f.type&&f.type.defaultProps)var ee=f.type.defaultProps;for(ue in k)Ye.call(k,ue)&&!Te.hasOwnProperty(ue)&&(K[ue]=k[ue]===void 0&&ee!==void 0?ee[ue]:k[ue])}var ue=arguments.length-2;if(ue===1)K.children=H;else if(1<ue){ee=Array(ue);for(var Ge=0;Ge<ue;Ge++)ee[Ge]=arguments[Ge+2];K.children=ee}return{$$typeof:h,type:f.type,key:G,ref:Z,props:K,_owner:re}},W.createContext=function(f){return f={$$typeof:j,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},f.Provider={$$typeof:C,_context:f},f.Consumer=f},W.createElement=Oe,W.createFactory=function(f){var k=Oe.bind(null,f);return k.type=f,k},W.createRef=function(){return{current:null}},W.forwardRef=function(f){return{$$typeof:R,render:f}},W.isValidElement=B,W.lazy=function(f){return{$$typeof:$,_payload:{_status:-1,_result:f},_init:Ue}},W.memo=function(f,k){return{$$typeof:b,type:f,compare:k===void 0?null:k}},W.startTransition=function(f){var k=N.transition;N.transition={};try{f()}finally{N.transition=k}},W.unstable_act=z,W.useCallback=function(f,k){return fe.current.useCallback(f,k)},W.useContext=function(f){return fe.current.useContext(f)},W.useDebugValue=function(){},W.useDeferredValue=function(f){return fe.current.useDeferredValue(f)},W.useEffect=function(f,k){return fe.current.useEffect(f,k)},W.useId=function(){return fe.current.useId()},W.useImperativeHandle=function(f,k,H){return fe.current.useImperativeHandle(f,k,H)},W.useInsertionEffect=function(f,k){return fe.current.useInsertionEffect(f,k)},W.useLayoutEffect=function(f,k){return fe.current.useLayoutEffect(f,k)},W.useMemo=function(f,k){return fe.current.useMemo(f,k)},W.useReducer=function(f,k,H){return fe.current.useReducer(f,k,H)},W.useRef=function(f){return fe.current.useRef(f)},W.useState=function(f){return fe.current.useState(f)},W.useSyncExternalStore=function(f,k,H){return fe.current.useSyncExternalStore(f,k,H)},W.useTransition=function(){return fe.current.useTransition()},W.version="18.3.1",W}var Ko;function Wi(){return Ko||(Ko=1,Hi.exports=nc()),Hi.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xo;function tc(){if(Xo)return vn;Xo=1;var h=Wi(),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,v=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,C={key:!0,ref:!0,__self:!0,__source:!0};function j(R,T,b){var $,Y={},Q=null,ge=null;b!==void 0&&(Q=""+b),T.key!==void 0&&(Q=""+T.key),T.ref!==void 0&&(ge=T.ref);for($ in T)y.call(T,$)&&!C.hasOwnProperty($)&&(Y[$]=T[$]);if(R&&R.defaultProps)for($ in T=R.defaultProps,T)Y[$]===void 0&&(Y[$]=T[$]);return{$$typeof:s,type:R,key:Q,ref:ge,props:Y,_owner:v.current}}return vn.Fragment=a,vn.jsx=j,vn.jsxs=j,vn}var Go;function rc(){return Go||(Go=1,un.exports=tc()),un.exports}var _=rc(),_n=Wi(),Dr={},Qi={exports:{}},Ae={},Yi={exports:{}},Ki={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zo;function ic(){return Zo||(Zo=1,(function(h){function s(N,U){var z=N.length;N.push(U);e:for(;0<z;){var f=z-1>>>1,k=N[f];if(0<v(k,U))N[f]=U,N[z]=k,z=f;else break e}}function a(N){return N.length===0?null:N[0]}function y(N){if(N.length===0)return null;var U=N[0],z=N.pop();if(z!==U){N[0]=z;e:for(var f=0,k=N.length,H=k>>>1;f<H;){var K=2*(f+1)-1,G=N[K],Z=K+1,re=N[Z];if(0>v(G,z))Z<k&&0>v(re,G)?(N[f]=re,N[Z]=z,f=Z):(N[f]=G,N[K]=z,f=K);else if(Z<k&&0>v(re,z))N[f]=re,N[Z]=z,f=Z;else break e}}return U}function v(N,U){var z=N.sortIndex-U.sortIndex;return z!==0?z:N.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var C=performance;h.unstable_now=function(){return C.now()}}else{var j=Date,R=j.now();h.unstable_now=function(){return j.now()-R}}var T=[],b=[],$=1,Y=null,Q=3,ge=!1,le=!1,te=!1,q=typeof setTimeout=="function"?setTimeout:null,sn=typeof clearTimeout=="function"?clearTimeout:null,We=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Qe(N){for(var U=a(b);U!==null;){if(U.callback===null)y(b);else if(U.startTime<=N)y(b),U.sortIndex=U.expirationTime,s(T,U);else break;U=a(b)}}function ke(N){if(te=!1,Qe(N),!le)if(a(T)!==null)le=!0,Ue(Ye);else{var U=a(b);U!==null&&fe(ke,U.startTime-N)}}function Ye(N,U){le=!1,te&&(te=!1,sn(Oe),Oe=-1),ge=!0;var z=Q;try{for(Qe(U),Y=a(T);Y!==null&&(!(Y.expirationTime>U)||N&&!Ie());){var f=Y.callback;if(typeof f=="function"){Y.callback=null,Q=Y.priorityLevel;var k=f(Y.expirationTime<=U);U=h.unstable_now(),typeof k=="function"?Y.callback=k:Y===a(T)&&y(T),Qe(U)}else y(T);Y=a(T)}if(Y!==null)var H=!0;else{var K=a(b);K!==null&&fe(ke,K.startTime-U),H=!1}return H}finally{Y=null,Q=z,ge=!1}}var _e=!1,Te=null,Oe=-1,I=5,B=-1;function Ie(){return!(h.unstable_now()-B<I)}function Ke(){if(Te!==null){var N=h.unstable_now();B=N;var U=!0;try{U=Te(!0,N)}finally{U?Se():(_e=!1,Te=null)}}else _e=!1}var Se;if(typeof We=="function")Se=function(){We(Ke)};else if(typeof MessageChannel<"u"){var Xe=new MessageChannel,wn=Xe.port2;Xe.port1.onmessage=Ke,Se=function(){wn.postMessage(null)}}else Se=function(){q(Ke,0)};function Ue(N){Te=N,_e||(_e=!0,Se())}function fe(N,U){Oe=q(function(){N(h.unstable_now())},U)}h.unstable_IdlePriority=5,h.unstable_ImmediatePriority=1,h.unstable_LowPriority=4,h.unstable_NormalPriority=3,h.unstable_Profiling=null,h.unstable_UserBlockingPriority=2,h.unstable_cancelCallback=function(N){N.callback=null},h.unstable_continueExecution=function(){le||ge||(le=!0,Ue(Ye))},h.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<N?Math.floor(1e3/N):5},h.unstable_getCurrentPriorityLevel=function(){return Q},h.unstable_getFirstCallbackNode=function(){return a(T)},h.unstable_next=function(N){switch(Q){case 1:case 2:case 3:var U=3;break;default:U=Q}var z=Q;Q=U;try{return N()}finally{Q=z}},h.unstable_pauseExecution=function(){},h.unstable_requestPaint=function(){},h.unstable_runWithPriority=function(N,U){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var z=Q;Q=N;try{return U()}finally{Q=z}},h.unstable_scheduleCallback=function(N,U,z){var f=h.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?f+z:f):z=f,N){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=z+k,N={id:$++,callback:U,priorityLevel:N,startTime:z,expirationTime:k,sortIndex:-1},z>f?(N.sortIndex=z,s(b,N),a(T)===null&&N===a(b)&&(te?(sn(Oe),Oe=-1):te=!0,fe(ke,z-f))):(N.sortIndex=k,s(T,N),le||ge||(le=!0,Ue(Ye))),N},h.unstable_shouldYield=Ie,h.unstable_wrapCallback=function(N){var U=Q;return function(){var z=Q;Q=U;try{return N.apply(this,arguments)}finally{Q=z}}}})(Ki)),Ki}var Jo;function lc(){return Jo||(Jo=1,Yi.exports=ic()),Yi.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qo;function oc(){if(qo)return Ae;qo=1;var h=Wi(),s=lc();function a(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y=new Set,v={};function C(e,n){j(e,n),j(e+"Capture",n)}function j(e,n){for(v[e]=n,e=0;e<n.length;e++)y.add(n[e])}var R=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),T=Object.prototype.hasOwnProperty,b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$={},Y={};function Q(e){return T.call(Y,e)?!0:T.call($,e)?!1:b.test(e)?Y[e]=!0:($[e]=!0,!1)}function ge(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function le(e,n,t,r){if(n===null||typeof n>"u"||ge(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function te(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){q[e]=new te(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];q[n]=new te(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){q[e]=new te(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){q[e]=new te(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){q[e]=new te(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){q[e]=new te(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){q[e]=new te(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){q[e]=new te(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){q[e]=new te(e,5,!1,e.toLowerCase(),null,!1,!1)});var sn=/[\-:]([a-z])/g;function We(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(sn,We);q[n]=new te(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(sn,We);q[n]=new te(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(sn,We);q[n]=new te(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){q[e]=new te(e,1,!1,e.toLowerCase(),null,!1,!1)}),q.xlinkHref=new te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){q[e]=new te(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qe(e,n,t,r){var i=q.hasOwnProperty(n)?q[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(le(n,t,i,r)&&(t=null),r||i===null?Q(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var ke=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ye=Symbol.for("react.element"),_e=Symbol.for("react.portal"),Te=Symbol.for("react.fragment"),Oe=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),Ie=Symbol.for("react.context"),Ke=Symbol.for("react.forward_ref"),Se=Symbol.for("react.suspense"),Xe=Symbol.for("react.suspense_list"),wn=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),N=Symbol.iterator;function U(e){return e===null||typeof e!="object"?null:(e=N&&e[N]||e["@@iterator"],typeof e=="function"?e:null)}var z=Object.assign,f;function k(e){if(f===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);f=n&&n[1]||""}return`
`+f+e}var H=!1;function K(e,n){if(!e||H)return"";H=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(g){var r=g}Reflect.construct(e,[],n)}else{try{n.call()}catch(g){r=g}e.call(n.prototype)}else{try{throw Error()}catch(g){r=g}e()}}catch(g){if(g&&r&&typeof g.stack=="string"){for(var i=g.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,u=l.length-1;1<=o&&0<=u&&i[o]!==l[u];)u--;for(;1<=o&&0<=u;o--,u--)if(i[o]!==l[u]){if(o!==1||u!==1)do if(o--,u--,0>u||i[o]!==l[u]){var c=`
`+i[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=u);break}}}finally{H=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?k(e):""}function G(e){switch(e.tag){case 5:return k(e.type);case 16:return k("Lazy");case 13:return k("Suspense");case 19:return k("SuspenseList");case 0:case 2:case 15:return e=K(e.type,!1),e;case 11:return e=K(e.type.render,!1),e;case 1:return e=K(e.type,!0),e;default:return""}}function Z(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Te:return"Fragment";case _e:return"Portal";case I:return"Profiler";case Oe:return"StrictMode";case Se:return"Suspense";case Xe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ie:return(e.displayName||"Context")+".Consumer";case B:return(e._context.displayName||"Context")+".Provider";case Ke:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wn:return n=e.displayName||null,n!==null?n:Z(e.type)||"Memo";case Ue:n=e._payload,e=e._init;try{return Z(e(n))}catch{}}return null}function re(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Z(n);case 8:return n===Oe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ee(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ue(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ge(e){var n=ue(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Fr(e){e._valueTracker||(e._valueTracker=Ge(e))}function aa(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ue(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Lr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ji(e,n){var t=n.checked;return z({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ua(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=ee(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function sa(e,n){n=n.checked,n!=null&&Qe(e,"checked",n,!1)}function qi(e,n){sa(e,n);var t=ee(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?el(e,n.type,t):n.hasOwnProperty("defaultValue")&&el(e,n.type,ee(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ca(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function el(e,n,t){(n!=="number"||Lr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var $t=Array.isArray;function yt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+ee(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function nl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(a(91));return z({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function da(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(a(92));if($t(t)){if(1<t.length)throw Error(a(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:ee(t)}}function fa(e,n){var t=ee(n.value),r=ee(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function pa(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ma(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ma(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jr,ha=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(jr=jr||document.createElement("div"),jr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=jr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ht(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Wt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oc=["Webkit","ms","Moz","O"];Object.keys(Wt).forEach(function(e){Oc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Wt[n]=Wt[e]})});function ga(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Wt.hasOwnProperty(e)&&Wt[e]?(""+n).trim():n+"px"}function va(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=ga(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Uc=z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rl(e,n){if(n){if(Uc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(a(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(a(61))}if(n.style!=null&&typeof n.style!="object")throw Error(a(62))}}function il(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ll=null;function ol(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var al=null,wt=null,kt=null;function ya(e){if(e=pr(e)){if(typeof al!="function")throw Error(a(280));var n=e.stateNode;n&&(n=li(n),al(e.stateNode,e.type,n))}}function wa(e){wt?kt?kt.push(e):kt=[e]:wt=e}function ka(){if(wt){var e=wt,n=kt;if(kt=wt=null,ya(e),n)for(e=0;e<n.length;e++)ya(n[e])}}function Sa(e,n){return e(n)}function xa(){}var ul=!1;function Ea(e,n,t){if(ul)return e(n,t);ul=!0;try{return Sa(e,n,t)}finally{ul=!1,(wt!==null||kt!==null)&&(xa(),ka())}}function Qt(e,n){var t=e.stateNode;if(t===null)return null;var r=li(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(a(231,n,typeof t));return t}var sl=!1;if(R)try{var Yt={};Object.defineProperty(Yt,"passive",{get:function(){sl=!0}}),window.addEventListener("test",Yt,Yt),window.removeEventListener("test",Yt,Yt)}catch{sl=!1}function bc(e,n,t,r,i,l,o,u,c){var g=Array.prototype.slice.call(arguments,3);try{n.apply(t,g)}catch(S){this.onError(S)}}var Kt=!1,Ar=null,Or=!1,cl=null,Bc={onError:function(e){Kt=!0,Ar=e}};function Vc(e,n,t,r,i,l,o,u,c){Kt=!1,Ar=null,bc.apply(Bc,arguments)}function $c(e,n,t,r,i,l,o,u,c){if(Vc.apply(this,arguments),Kt){if(Kt){var g=Ar;Kt=!1,Ar=null}else throw Error(a(198));Or||(Or=!0,cl=g)}}function rt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ca(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function _a(e){if(rt(e)!==e)throw Error(a(188))}function Hc(e){var n=e.alternate;if(!n){if(n=rt(e),n===null)throw Error(a(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return _a(i),e;if(l===r)return _a(i),n;l=l.sibling}throw Error(a(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,u=i.child;u;){if(u===t){o=!0,t=i,r=l;break}if(u===r){o=!0,r=i,t=l;break}u=u.sibling}if(!o){for(u=l.child;u;){if(u===t){o=!0,t=l,r=i;break}if(u===r){o=!0,r=l,t=i;break}u=u.sibling}if(!o)throw Error(a(189))}}if(t.alternate!==r)throw Error(a(190))}if(t.tag!==3)throw Error(a(188));return t.stateNode.current===t?e:n}function Ia(e){return e=Hc(e),e!==null?Na(e):null}function Na(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Na(e);if(n!==null)return n;e=e.sibling}return null}var Da=s.unstable_scheduleCallback,Ma=s.unstable_cancelCallback,Wc=s.unstable_shouldYield,Qc=s.unstable_requestPaint,me=s.unstable_now,Yc=s.unstable_getCurrentPriorityLevel,dl=s.unstable_ImmediatePriority,Ta=s.unstable_UserBlockingPriority,Ur=s.unstable_NormalPriority,Kc=s.unstable_LowPriority,za=s.unstable_IdlePriority,br=null,kn=null;function Xc(e){if(kn&&typeof kn.onCommitFiberRoot=="function")try{kn.onCommitFiberRoot(br,e,void 0,(e.current.flags&128)===128)}catch{}}var cn=Math.clz32?Math.clz32:Jc,Gc=Math.log,Zc=Math.LN2;function Jc(e){return e>>>=0,e===0?32:31-(Gc(e)/Zc|0)|0}var Br=64,Vr=4194304;function Xt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $r(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var u=o&~i;u!==0?r=Xt(u):(l&=o,l!==0&&(r=Xt(l)))}else o=t&~i,o!==0?r=Xt(o):l!==0&&(r=Xt(l));if(r===0)return 0;if(n!==0&&n!==r&&(n&i)===0&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-cn(n),i=1<<t,r|=e[t],n&=~i;return r}function qc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ed(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-cn(l),u=1<<o,c=i[o];c===-1?((u&t)===0||(u&r)!==0)&&(i[o]=qc(u,n)):c<=n&&(e.expiredLanes|=u),l&=~u}}function fl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pa(){var e=Br;return Br<<=1,(Br&4194240)===0&&(Br=64),e}function pl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Gt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-cn(n),e[n]=t}function nd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-cn(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function ml(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-cn(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var ne=0;function Ra(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Fa,hl,La,ja,Aa,gl=!1,Hr=[],jn=null,An=null,On=null,Zt=new Map,Jt=new Map,Un=[],td="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Oa(e,n){switch(e){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":Zt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jt.delete(n.pointerId)}}function qt(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=pr(n),n!==null&&hl(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function rd(e,n,t,r,i){switch(n){case"focusin":return jn=qt(jn,e,n,t,r,i),!0;case"dragenter":return An=qt(An,e,n,t,r,i),!0;case"mouseover":return On=qt(On,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return Zt.set(l,qt(Zt.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Jt.set(l,qt(Jt.get(l)||null,e,n,t,r,i)),!0}return!1}function Ua(e){var n=it(e.target);if(n!==null){var t=rt(n);if(t!==null){if(n=t.tag,n===13){if(n=Ca(t),n!==null){e.blockedOn=n,Aa(e.priority,function(){La(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=yl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ll=r,t.target.dispatchEvent(r),ll=null}else return n=pr(t),n!==null&&hl(n),e.blockedOn=t,!1;n.shift()}return!0}function ba(e,n,t){Wr(e)&&t.delete(n)}function id(){gl=!1,jn!==null&&Wr(jn)&&(jn=null),An!==null&&Wr(An)&&(An=null),On!==null&&Wr(On)&&(On=null),Zt.forEach(ba),Jt.forEach(ba)}function er(e,n){e.blockedOn===n&&(e.blockedOn=null,gl||(gl=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,id)))}function nr(e){function n(i){return er(i,e)}if(0<Hr.length){er(Hr[0],e);for(var t=1;t<Hr.length;t++){var r=Hr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(jn!==null&&er(jn,e),An!==null&&er(An,e),On!==null&&er(On,e),Zt.forEach(n),Jt.forEach(n),t=0;t<Un.length;t++)r=Un[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Un.length&&(t=Un[0],t.blockedOn===null);)Ua(t),t.blockedOn===null&&Un.shift()}var St=ke.ReactCurrentBatchConfig,Qr=!0;function ld(e,n,t,r){var i=ne,l=St.transition;St.transition=null;try{ne=1,vl(e,n,t,r)}finally{ne=i,St.transition=l}}function od(e,n,t,r){var i=ne,l=St.transition;St.transition=null;try{ne=4,vl(e,n,t,r)}finally{ne=i,St.transition=l}}function vl(e,n,t,r){if(Qr){var i=yl(e,n,t,r);if(i===null)Ll(e,n,r,Yr,t),Oa(e,r);else if(rd(i,e,n,t,r))r.stopPropagation();else if(Oa(e,r),n&4&&-1<td.indexOf(e)){for(;i!==null;){var l=pr(i);if(l!==null&&Fa(l),l=yl(e,n,t,r),l===null&&Ll(e,n,r,Yr,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else Ll(e,n,r,null,t)}}var Yr=null;function yl(e,n,t,r){if(Yr=null,e=ol(r),e=it(e),e!==null)if(n=rt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ca(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Yr=e,null}function Ba(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yc()){case dl:return 1;case Ta:return 4;case Ur:case Kc:return 16;case za:return 536870912;default:return 16}default:return 16}}var bn=null,wl=null,Kr=null;function Va(){if(Kr)return Kr;var e,n=wl,t=n.length,r,i="value"in bn?bn.value:bn.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return Kr=i.slice(e,1<r?1-r:void 0)}function Xr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Gr(){return!0}function $a(){return!1}function Ze(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Gr:$a,this.isPropagationStopped=$a,this}return z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Gr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Gr)},persist:function(){},isPersistent:Gr}),n}var xt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kl=Ze(xt),tr=z({},xt,{view:0,detail:0}),ad=Ze(tr),Sl,xl,rr,Zr=z({},tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rr&&(rr&&e.type==="mousemove"?(Sl=e.screenX-rr.screenX,xl=e.screenY-rr.screenY):xl=Sl=0,rr=e),Sl)},movementY:function(e){return"movementY"in e?e.movementY:xl}}),Ha=Ze(Zr),ud=z({},Zr,{dataTransfer:0}),sd=Ze(ud),cd=z({},tr,{relatedTarget:0}),El=Ze(cd),dd=z({},xt,{animationName:0,elapsedTime:0,pseudoElement:0}),fd=Ze(dd),pd=z({},xt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),md=Ze(pd),hd=z({},xt,{data:0}),Wa=Ze(hd),gd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=yd[e])?!!n[e]:!1}function Cl(){return wd}var kd=z({},tr,{key:function(e){if(e.key){var n=gd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Xr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cl,charCode:function(e){return e.type==="keypress"?Xr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sd=Ze(kd),xd=z({},Zr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qa=Ze(xd),Ed=z({},tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cl}),Cd=Ze(Ed),_d=z({},xt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Id=Ze(_d),Nd=z({},Zr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dd=Ze(Nd),Md=[9,13,27,32],_l=R&&"CompositionEvent"in window,ir=null;R&&"documentMode"in document&&(ir=document.documentMode);var Td=R&&"TextEvent"in window&&!ir,Ya=R&&(!_l||ir&&8<ir&&11>=ir),Ka=" ",Xa=!1;function Ga(e,n){switch(e){case"keyup":return Md.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Za(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Et=!1;function zd(e,n){switch(e){case"compositionend":return Za(n);case"keypress":return n.which!==32?null:(Xa=!0,Ka);case"textInput":return e=n.data,e===Ka&&Xa?null:e;default:return null}}function Pd(e,n){if(Et)return e==="compositionend"||!_l&&Ga(e,n)?(e=Va(),Kr=wl=bn=null,Et=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ya&&n.locale!=="ko"?null:n.data;default:return null}}var Rd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ja(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Rd[e.type]:n==="textarea"}function qa(e,n,t,r){wa(r),n=ti(n,"onChange"),0<n.length&&(t=new kl("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var lr=null,or=null;function Fd(e){vu(e,0)}function Jr(e){var n=Dt(e);if(aa(n))return e}function Ld(e,n){if(e==="change")return n}var eu=!1;if(R){var Il;if(R){var Nl="oninput"in document;if(!Nl){var nu=document.createElement("div");nu.setAttribute("oninput","return;"),Nl=typeof nu.oninput=="function"}Il=Nl}else Il=!1;eu=Il&&(!document.documentMode||9<document.documentMode)}function tu(){lr&&(lr.detachEvent("onpropertychange",ru),or=lr=null)}function ru(e){if(e.propertyName==="value"&&Jr(or)){var n=[];qa(n,or,e,ol(e)),Ea(Fd,n)}}function jd(e,n,t){e==="focusin"?(tu(),lr=n,or=t,lr.attachEvent("onpropertychange",ru)):e==="focusout"&&tu()}function Ad(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jr(or)}function Od(e,n){if(e==="click")return Jr(n)}function Ud(e,n){if(e==="input"||e==="change")return Jr(n)}function bd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var dn=typeof Object.is=="function"?Object.is:bd;function ar(e,n){if(dn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!T.call(n,i)||!dn(e[i],n[i]))return!1}return!0}function iu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lu(e,n){var t=iu(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=iu(t)}}function ou(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ou(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function au(){for(var e=window,n=Lr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Lr(e.document)}return n}function Dl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Bd(e){var n=au(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&ou(t.ownerDocument.documentElement,t)){if(r!==null&&Dl(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=lu(t,l);var o=lu(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vd=R&&"documentMode"in document&&11>=document.documentMode,Ct=null,Ml=null,ur=null,Tl=!1;function uu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Tl||Ct==null||Ct!==Lr(r)||(r=Ct,"selectionStart"in r&&Dl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ur&&ar(ur,r)||(ur=r,r=ti(Ml,"onSelect"),0<r.length&&(n=new kl("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Ct)))}function qr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var _t={animationend:qr("Animation","AnimationEnd"),animationiteration:qr("Animation","AnimationIteration"),animationstart:qr("Animation","AnimationStart"),transitionend:qr("Transition","TransitionEnd")},zl={},su={};R&&(su=document.createElement("div").style,"AnimationEvent"in window||(delete _t.animationend.animation,delete _t.animationiteration.animation,delete _t.animationstart.animation),"TransitionEvent"in window||delete _t.transitionend.transition);function ei(e){if(zl[e])return zl[e];if(!_t[e])return e;var n=_t[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in su)return zl[e]=n[t];return e}var cu=ei("animationend"),du=ei("animationiteration"),fu=ei("animationstart"),pu=ei("transitionend"),mu=new Map,hu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bn(e,n){mu.set(e,n),C(n,[e])}for(var Pl=0;Pl<hu.length;Pl++){var Rl=hu[Pl],$d=Rl.toLowerCase(),Hd=Rl[0].toUpperCase()+Rl.slice(1);Bn($d,"on"+Hd)}Bn(cu,"onAnimationEnd"),Bn(du,"onAnimationIteration"),Bn(fu,"onAnimationStart"),Bn("dblclick","onDoubleClick"),Bn("focusin","onFocus"),Bn("focusout","onBlur"),Bn(pu,"onTransitionEnd"),j("onMouseEnter",["mouseout","mouseover"]),j("onMouseLeave",["mouseout","mouseover"]),j("onPointerEnter",["pointerout","pointerover"]),j("onPointerLeave",["pointerout","pointerover"]),C("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),C("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),C("onBeforeInput",["compositionend","keypress","textInput","paste"]),C("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wd=new Set("cancel close invalid load scroll toggle".split(" ").concat(sr));function gu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,$c(r,n,void 0,e),e.currentTarget=null}function vu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var u=r[o],c=u.instance,g=u.currentTarget;if(u=u.listener,c!==l&&i.isPropagationStopped())break e;gu(i,u,g),l=c}else for(o=0;o<r.length;o++){if(u=r[o],c=u.instance,g=u.currentTarget,u=u.listener,c!==l&&i.isPropagationStopped())break e;gu(i,u,g),l=c}}}if(Or)throw e=cl,Or=!1,cl=null,e}function oe(e,n){var t=n[Bl];t===void 0&&(t=n[Bl]=new Set);var r=e+"__bubble";t.has(r)||(yu(n,e,2,!1),t.add(r))}function Fl(e,n,t){var r=0;n&&(r|=4),yu(t,e,r,n)}var ni="_reactListening"+Math.random().toString(36).slice(2);function cr(e){if(!e[ni]){e[ni]=!0,y.forEach(function(t){t!=="selectionchange"&&(Wd.has(t)||Fl(t,!1,e),Fl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ni]||(n[ni]=!0,Fl("selectionchange",!1,n))}}function yu(e,n,t,r){switch(Ba(n)){case 1:var i=ld;break;case 4:i=od;break;default:i=vl}t=i.bind(null,n,t,e),i=void 0,!sl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Ll(e,n,t,r,i){var l=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;u!==null;){if(o=it(u),o===null)return;if(c=o.tag,c===5||c===6){r=l=o;continue e}u=u.parentNode}}r=r.return}Ea(function(){var g=l,S=ol(t),x=[];e:{var w=mu.get(e);if(w!==void 0){var D=kl,P=e;switch(e){case"keypress":if(Xr(t)===0)break e;case"keydown":case"keyup":D=Sd;break;case"focusin":P="focus",D=El;break;case"focusout":P="blur",D=El;break;case"beforeblur":case"afterblur":D=El;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=Ha;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=sd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=Cd;break;case cu:case du:case fu:D=fd;break;case pu:D=Id;break;case"scroll":D=ad;break;case"wheel":D=Dd;break;case"copy":case"cut":case"paste":D=md;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=Qa}var F=(n&4)!==0,he=!F&&e==="scroll",p=F?w!==null?w+"Capture":null:w;F=[];for(var d=g,m;d!==null;){m=d;var E=m.stateNode;if(m.tag===5&&E!==null&&(m=E,p!==null&&(E=Qt(d,p),E!=null&&F.push(dr(d,E,m)))),he)break;d=d.return}0<F.length&&(w=new D(w,P,null,t,S),x.push({event:w,listeners:F}))}}if((n&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",w&&t!==ll&&(P=t.relatedTarget||t.fromElement)&&(it(P)||P[In]))break e;if((D||w)&&(w=S.window===S?S:(w=S.ownerDocument)?w.defaultView||w.parentWindow:window,D?(P=t.relatedTarget||t.toElement,D=g,P=P?it(P):null,P!==null&&(he=rt(P),P!==he||P.tag!==5&&P.tag!==6)&&(P=null)):(D=null,P=g),D!==P)){if(F=Ha,E="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(F=Qa,E="onPointerLeave",p="onPointerEnter",d="pointer"),he=D==null?w:Dt(D),m=P==null?w:Dt(P),w=new F(E,d+"leave",D,t,S),w.target=he,w.relatedTarget=m,E=null,it(S)===g&&(F=new F(p,d+"enter",P,t,S),F.target=m,F.relatedTarget=he,E=F),he=E,D&&P)n:{for(F=D,p=P,d=0,m=F;m;m=It(m))d++;for(m=0,E=p;E;E=It(E))m++;for(;0<d-m;)F=It(F),d--;for(;0<m-d;)p=It(p),m--;for(;d--;){if(F===p||p!==null&&F===p.alternate)break n;F=It(F),p=It(p)}F=null}else F=null;D!==null&&wu(x,w,D,F,!1),P!==null&&he!==null&&wu(x,he,P,F,!0)}}e:{if(w=g?Dt(g):window,D=w.nodeName&&w.nodeName.toLowerCase(),D==="select"||D==="input"&&w.type==="file")var L=Ld;else if(Ja(w))if(eu)L=Ud;else{L=Ad;var A=jd}else(D=w.nodeName)&&D.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(L=Od);if(L&&(L=L(e,g))){qa(x,L,t,S);break e}A&&A(e,w,g),e==="focusout"&&(A=w._wrapperState)&&A.controlled&&w.type==="number"&&el(w,"number",w.value)}switch(A=g?Dt(g):window,e){case"focusin":(Ja(A)||A.contentEditable==="true")&&(Ct=A,Ml=g,ur=null);break;case"focusout":ur=Ml=Ct=null;break;case"mousedown":Tl=!0;break;case"contextmenu":case"mouseup":case"dragend":Tl=!1,uu(x,t,S);break;case"selectionchange":if(Vd)break;case"keydown":case"keyup":uu(x,t,S)}var O;if(_l)e:{switch(e){case"compositionstart":var V="onCompositionStart";break e;case"compositionend":V="onCompositionEnd";break e;case"compositionupdate":V="onCompositionUpdate";break e}V=void 0}else Et?Ga(e,t)&&(V="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(V="onCompositionStart");V&&(Ya&&t.locale!=="ko"&&(Et||V!=="onCompositionStart"?V==="onCompositionEnd"&&Et&&(O=Va()):(bn=S,wl="value"in bn?bn.value:bn.textContent,Et=!0)),A=ti(g,V),0<A.length&&(V=new Wa(V,e,null,t,S),x.push({event:V,listeners:A}),O?V.data=O:(O=Za(t),O!==null&&(V.data=O)))),(O=Td?zd(e,t):Pd(e,t))&&(g=ti(g,"onBeforeInput"),0<g.length&&(S=new Wa("onBeforeInput","beforeinput",null,t,S),x.push({event:S,listeners:g}),S.data=O))}vu(x,n)})}function dr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ti(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Qt(e,t),l!=null&&r.unshift(dr(e,l,i)),l=Qt(e,n),l!=null&&r.push(dr(e,l,i))),e=e.return}return r}function It(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wu(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var u=t,c=u.alternate,g=u.stateNode;if(c!==null&&c===r)break;u.tag===5&&g!==null&&(u=g,i?(c=Qt(t,l),c!=null&&o.unshift(dr(t,c,u))):i||(c=Qt(t,l),c!=null&&o.push(dr(t,c,u)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Qd=/\r\n?/g,Yd=/\u0000|\uFFFD/g;function ku(e){return(typeof e=="string"?e:""+e).replace(Qd,`
`).replace(Yd,"")}function ri(e,n,t){if(n=ku(n),ku(e)!==n&&t)throw Error(a(425))}function ii(){}var jl=null,Al=null;function Ol(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ul=typeof setTimeout=="function"?setTimeout:void 0,Kd=typeof clearTimeout=="function"?clearTimeout:void 0,Su=typeof Promise=="function"?Promise:void 0,Xd=typeof queueMicrotask=="function"?queueMicrotask:typeof Su<"u"?function(e){return Su.resolve(null).then(e).catch(Gd)}:Ul;function Gd(e){setTimeout(function(){throw e})}function bl(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),nr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);nr(n)}function Vn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function xu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Nt=Math.random().toString(36).slice(2),Sn="__reactFiber$"+Nt,fr="__reactProps$"+Nt,In="__reactContainer$"+Nt,Bl="__reactEvents$"+Nt,Zd="__reactListeners$"+Nt,Jd="__reactHandles$"+Nt;function it(e){var n=e[Sn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[In]||t[Sn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=xu(e);e!==null;){if(t=e[Sn])return t;e=xu(e)}return n}e=t,t=e.parentNode}return null}function pr(e){return e=e[Sn]||e[In],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function li(e){return e[fr]||null}var Vl=[],Mt=-1;function $n(e){return{current:e}}function ae(e){0>Mt||(e.current=Vl[Mt],Vl[Mt]=null,Mt--)}function ie(e,n){Mt++,Vl[Mt]=e.current,e.current=n}var Hn={},ze=$n(Hn),be=$n(!1),lt=Hn;function Tt(e,n){var t=e.type.contextTypes;if(!t)return Hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Be(e){return e=e.childContextTypes,e!=null}function oi(){ae(be),ae(ze)}function Eu(e,n,t){if(ze.current!==Hn)throw Error(a(168));ie(ze,n),ie(be,t)}function Cu(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(a(108,re(e)||"Unknown",i));return z({},t,r)}function ai(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hn,lt=ze.current,ie(ze,e),ie(be,be.current),!0}function _u(e,n,t){var r=e.stateNode;if(!r)throw Error(a(169));t?(e=Cu(e,n,lt),r.__reactInternalMemoizedMergedChildContext=e,ae(be),ae(ze),ie(ze,e)):ae(be),ie(be,t)}var Nn=null,ui=!1,$l=!1;function Iu(e){Nn===null?Nn=[e]:Nn.push(e)}function qd(e){ui=!0,Iu(e)}function Wn(){if(!$l&&Nn!==null){$l=!0;var e=0,n=ne;try{var t=Nn;for(ne=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Nn=null,ui=!1}catch(i){throw Nn!==null&&(Nn=Nn.slice(e+1)),Da(dl,Wn),i}finally{ne=n,$l=!1}}return null}var zt=[],Pt=0,si=null,ci=0,nn=[],tn=0,ot=null,Dn=1,Mn="";function at(e,n){zt[Pt++]=ci,zt[Pt++]=si,si=e,ci=n}function Nu(e,n,t){nn[tn++]=Dn,nn[tn++]=Mn,nn[tn++]=ot,ot=e;var r=Dn;e=Mn;var i=32-cn(r)-1;r&=~(1<<i),t+=1;var l=32-cn(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Dn=1<<32-cn(n)+i|t<<i|r,Mn=l+e}else Dn=1<<l|t<<i|r,Mn=e}function Hl(e){e.return!==null&&(at(e,1),Nu(e,1,0))}function Wl(e){for(;e===si;)si=zt[--Pt],zt[Pt]=null,ci=zt[--Pt],zt[Pt]=null;for(;e===ot;)ot=nn[--tn],nn[tn]=null,Mn=nn[--tn],nn[tn]=null,Dn=nn[--tn],nn[tn]=null}var Je=null,qe=null,se=!1,fn=null;function Du(e,n){var t=an(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Mu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Je=e,qe=Vn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Je=e,qe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=ot!==null?{id:Dn,overflow:Mn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=an(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Je=e,qe=null,!0):!1;default:return!1}}function Ql(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Yl(e){if(se){var n=qe;if(n){var t=n;if(!Mu(e,n)){if(Ql(e))throw Error(a(418));n=Vn(t.nextSibling);var r=Je;n&&Mu(e,n)?Du(r,t):(e.flags=e.flags&-4097|2,se=!1,Je=e)}}else{if(Ql(e))throw Error(a(418));e.flags=e.flags&-4097|2,se=!1,Je=e}}}function Tu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Je=e}function di(e){if(e!==Je)return!1;if(!se)return Tu(e),se=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ol(e.type,e.memoizedProps)),n&&(n=qe)){if(Ql(e))throw zu(),Error(a(418));for(;n;)Du(e,n),n=Vn(n.nextSibling)}if(Tu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){qe=Vn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}qe=null}}else qe=Je?Vn(e.stateNode.nextSibling):null;return!0}function zu(){for(var e=qe;e;)e=Vn(e.nextSibling)}function Rt(){qe=Je=null,se=!1}function Kl(e){fn===null?fn=[e]:fn.push(e)}var ef=ke.ReactCurrentBatchConfig;function mr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(a(309));var r=t.stateNode}if(!r)throw Error(a(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var u=i.refs;o===null?delete u[l]:u[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(a(284));if(!t._owner)throw Error(a(290,e))}return e}function fi(e,n){throw e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Pu(e){var n=e._init;return n(e._payload)}function Ru(e){function n(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function t(p,d){if(!e)return null;for(;d!==null;)n(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=qn(p,d),p.index=0,p.sibling=null,p}function l(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function u(p,d,m,E){return d===null||d.tag!==6?(d=bo(m,p.mode,E),d.return=p,d):(d=i(d,m),d.return=p,d)}function c(p,d,m,E){var L=m.type;return L===Te?S(p,d,m.props.children,E,m.key):d!==null&&(d.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ue&&Pu(L)===d.type)?(E=i(d,m.props),E.ref=mr(p,d,m),E.return=p,E):(E=ji(m.type,m.key,m.props,null,p.mode,E),E.ref=mr(p,d,m),E.return=p,E)}function g(p,d,m,E){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Bo(m,p.mode,E),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function S(p,d,m,E,L){return d===null||d.tag!==7?(d=ht(m,p.mode,E,L),d.return=p,d):(d=i(d,m),d.return=p,d)}function x(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=bo(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ye:return m=ji(d.type,d.key,d.props,null,p.mode,m),m.ref=mr(p,null,d),m.return=p,m;case _e:return d=Bo(d,p.mode,m),d.return=p,d;case Ue:var E=d._init;return x(p,E(d._payload),m)}if($t(d)||U(d))return d=ht(d,p.mode,m,null),d.return=p,d;fi(p,d)}return null}function w(p,d,m,E){var L=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return L!==null?null:u(p,d,""+m,E);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ye:return m.key===L?c(p,d,m,E):null;case _e:return m.key===L?g(p,d,m,E):null;case Ue:return L=m._init,w(p,d,L(m._payload),E)}if($t(m)||U(m))return L!==null?null:S(p,d,m,E,null);fi(p,m)}return null}function D(p,d,m,E,L){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(m)||null,u(d,p,""+E,L);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ye:return p=p.get(E.key===null?m:E.key)||null,c(d,p,E,L);case _e:return p=p.get(E.key===null?m:E.key)||null,g(d,p,E,L);case Ue:var A=E._init;return D(p,d,m,A(E._payload),L)}if($t(E)||U(E))return p=p.get(m)||null,S(d,p,E,L,null);fi(d,E)}return null}function P(p,d,m,E){for(var L=null,A=null,O=d,V=d=0,Ce=null;O!==null&&V<m.length;V++){O.index>V?(Ce=O,O=null):Ce=O.sibling;var J=w(p,O,m[V],E);if(J===null){O===null&&(O=Ce);break}e&&O&&J.alternate===null&&n(p,O),d=l(J,d,V),A===null?L=J:A.sibling=J,A=J,O=Ce}if(V===m.length)return t(p,O),se&&at(p,V),L;if(O===null){for(;V<m.length;V++)O=x(p,m[V],E),O!==null&&(d=l(O,d,V),A===null?L=O:A.sibling=O,A=O);return se&&at(p,V),L}for(O=r(p,O);V<m.length;V++)Ce=D(O,p,V,m[V],E),Ce!==null&&(e&&Ce.alternate!==null&&O.delete(Ce.key===null?V:Ce.key),d=l(Ce,d,V),A===null?L=Ce:A.sibling=Ce,A=Ce);return e&&O.forEach(function(et){return n(p,et)}),se&&at(p,V),L}function F(p,d,m,E){var L=U(m);if(typeof L!="function")throw Error(a(150));if(m=L.call(m),m==null)throw Error(a(151));for(var A=L=null,O=d,V=d=0,Ce=null,J=m.next();O!==null&&!J.done;V++,J=m.next()){O.index>V?(Ce=O,O=null):Ce=O.sibling;var et=w(p,O,J.value,E);if(et===null){O===null&&(O=Ce);break}e&&O&&et.alternate===null&&n(p,O),d=l(et,d,V),A===null?L=et:A.sibling=et,A=et,O=Ce}if(J.done)return t(p,O),se&&at(p,V),L;if(O===null){for(;!J.done;V++,J=m.next())J=x(p,J.value,E),J!==null&&(d=l(J,d,V),A===null?L=J:A.sibling=J,A=J);return se&&at(p,V),L}for(O=r(p,O);!J.done;V++,J=m.next())J=D(O,p,V,J.value,E),J!==null&&(e&&J.alternate!==null&&O.delete(J.key===null?V:J.key),d=l(J,d,V),A===null?L=J:A.sibling=J,A=J);return e&&O.forEach(function(Ff){return n(p,Ff)}),se&&at(p,V),L}function he(p,d,m,E){if(typeof m=="object"&&m!==null&&m.type===Te&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ye:e:{for(var L=m.key,A=d;A!==null;){if(A.key===L){if(L=m.type,L===Te){if(A.tag===7){t(p,A.sibling),d=i(A,m.props.children),d.return=p,p=d;break e}}else if(A.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ue&&Pu(L)===A.type){t(p,A.sibling),d=i(A,m.props),d.ref=mr(p,A,m),d.return=p,p=d;break e}t(p,A);break}else n(p,A);A=A.sibling}m.type===Te?(d=ht(m.props.children,p.mode,E,m.key),d.return=p,p=d):(E=ji(m.type,m.key,m.props,null,p.mode,E),E.ref=mr(p,d,m),E.return=p,p=E)}return o(p);case _e:e:{for(A=m.key;d!==null;){if(d.key===A)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){t(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{t(p,d);break}else n(p,d);d=d.sibling}d=Bo(m,p.mode,E),d.return=p,p=d}return o(p);case Ue:return A=m._init,he(p,d,A(m._payload),E)}if($t(m))return P(p,d,m,E);if(U(m))return F(p,d,m,E);fi(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(t(p,d.sibling),d=i(d,m),d.return=p,p=d):(t(p,d),d=bo(m,p.mode,E),d.return=p,p=d),o(p)):t(p,d)}return he}var Ft=Ru(!0),Fu=Ru(!1),pi=$n(null),mi=null,Lt=null,Xl=null;function Gl(){Xl=Lt=mi=null}function Zl(e){var n=pi.current;ae(pi),e._currentValue=n}function Jl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function jt(e,n){mi=e,Xl=Lt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Ve=!0),e.firstContext=null)}function rn(e){var n=e._currentValue;if(Xl!==e)if(e={context:e,memoizedValue:n,next:null},Lt===null){if(mi===null)throw Error(a(308));Lt=e,mi.dependencies={lanes:0,firstContext:e}}else Lt=Lt.next=e;return n}var ut=null;function ql(e){ut===null?ut=[e]:ut.push(e)}function Lu(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,ql(n)):(t.next=i.next,i.next=t),n.interleaved=t,Tn(e,r)}function Tn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Qn=!1;function eo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ju(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Yn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(X&2)!==0){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Tn(e,t)}return i=r.interleaved,i===null?(n.next=n,ql(r)):(n.next=i.next,i.next=n),r.interleaved=n,Tn(e,t)}function hi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ml(e,t)}}function Au(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function gi(e,n,t,r){var i=e.updateQueue;Qn=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var c=u,g=c.next;c.next=null,o===null?l=g:o.next=g,o=c;var S=e.alternate;S!==null&&(S=S.updateQueue,u=S.lastBaseUpdate,u!==o&&(u===null?S.firstBaseUpdate=g:u.next=g,S.lastBaseUpdate=c))}if(l!==null){var x=i.baseState;o=0,S=g=c=null,u=l;do{var w=u.lane,D=u.eventTime;if((r&w)===w){S!==null&&(S=S.next={eventTime:D,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var P=e,F=u;switch(w=n,D=t,F.tag){case 1:if(P=F.payload,typeof P=="function"){x=P.call(D,x,w);break e}x=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=F.payload,w=typeof P=="function"?P.call(D,x,w):P,w==null)break e;x=z({},x,w);break e;case 2:Qn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,w=i.effects,w===null?i.effects=[u]:w.push(u))}else D={eventTime:D,lane:w,tag:u.tag,payload:u.payload,callback:u.callback,next:null},S===null?(g=S=D,c=x):S=S.next=D,o|=w;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;w=u,u=w.next,w.next=null,i.lastBaseUpdate=w,i.shared.pending=null}}while(!0);if(S===null&&(c=x),i.baseState=c,i.firstBaseUpdate=g,i.lastBaseUpdate=S,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);dt|=o,e.lanes=o,e.memoizedState=x}}function Ou(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(a(191,i));i.call(r)}}}var hr={},xn=$n(hr),gr=$n(hr),vr=$n(hr);function st(e){if(e===hr)throw Error(a(174));return e}function no(e,n){switch(ie(vr,n),ie(gr,e),ie(xn,hr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:tl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=tl(n,e)}ae(xn),ie(xn,n)}function At(){ae(xn),ae(gr),ae(vr)}function Uu(e){st(vr.current);var n=st(xn.current),t=tl(n,e.type);n!==t&&(ie(gr,e),ie(xn,t))}function to(e){gr.current===e&&(ae(xn),ae(gr))}var ce=$n(0);function vi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ro=[];function io(){for(var e=0;e<ro.length;e++)ro[e]._workInProgressVersionPrimary=null;ro.length=0}var yi=ke.ReactCurrentDispatcher,lo=ke.ReactCurrentBatchConfig,ct=0,de=null,ye=null,xe=null,wi=!1,yr=!1,wr=0,nf=0;function Pe(){throw Error(a(321))}function oo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!dn(e[t],n[t]))return!1;return!0}function ao(e,n,t,r,i,l){if(ct=l,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,yi.current=e===null||e.memoizedState===null?of:af,e=t(r,i),yr){l=0;do{if(yr=!1,wr=0,25<=l)throw Error(a(301));l+=1,xe=ye=null,n.updateQueue=null,yi.current=uf,e=t(r,i)}while(yr)}if(yi.current=xi,n=ye!==null&&ye.next!==null,ct=0,xe=ye=de=null,wi=!1,n)throw Error(a(300));return e}function uo(){var e=wr!==0;return wr=0,e}function En(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?de.memoizedState=xe=e:xe=xe.next=e,xe}function ln(){if(ye===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var n=xe===null?de.memoizedState:xe.next;if(n!==null)xe=n,ye=e;else{if(e===null)throw Error(a(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},xe===null?de.memoizedState=xe=e:xe=xe.next=e}return xe}function kr(e,n){return typeof n=="function"?n(e):n}function so(e){var n=ln(),t=n.queue;if(t===null)throw Error(a(311));t.lastRenderedReducer=e;var r=ye,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var u=o=null,c=null,g=l;do{var S=g.lane;if((ct&S)===S)c!==null&&(c=c.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),r=g.hasEagerState?g.eagerState:e(r,g.action);else{var x={lane:S,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};c===null?(u=c=x,o=r):c=c.next=x,de.lanes|=S,dt|=S}g=g.next}while(g!==null&&g!==l);c===null?o=r:c.next=u,dn(r,n.memoizedState)||(Ve=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=c,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,de.lanes|=l,dt|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function co(e){var n=ln(),t=n.queue;if(t===null)throw Error(a(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);dn(l,n.memoizedState)||(Ve=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function bu(){}function Bu(e,n){var t=de,r=ln(),i=n(),l=!dn(r.memoizedState,i);if(l&&(r.memoizedState=i,Ve=!0),r=r.queue,fo(Hu.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||xe!==null&&xe.memoizedState.tag&1){if(t.flags|=2048,Sr(9,$u.bind(null,t,r,i,n),void 0,null),Ee===null)throw Error(a(349));(ct&30)!==0||Vu(t,n,i)}return i}function Vu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=de.updateQueue,n===null?(n={lastEffect:null,stores:null},de.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function $u(e,n,t,r){n.value=t,n.getSnapshot=r,Wu(n)&&Qu(e)}function Hu(e,n,t){return t(function(){Wu(n)&&Qu(e)})}function Wu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!dn(e,t)}catch{return!0}}function Qu(e){var n=Tn(e,1);n!==null&&gn(n,e,1,-1)}function Yu(e){var n=En();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:kr,lastRenderedState:e},n.queue=e,e=e.dispatch=lf.bind(null,de,e),[n.memoizedState,e]}function Sr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=de.updateQueue,n===null?(n={lastEffect:null,stores:null},de.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Ku(){return ln().memoizedState}function ki(e,n,t,r){var i=En();de.flags|=e,i.memoizedState=Sr(1|n,t,void 0,r===void 0?null:r)}function Si(e,n,t,r){var i=ln();r=r===void 0?null:r;var l=void 0;if(ye!==null){var o=ye.memoizedState;if(l=o.destroy,r!==null&&oo(r,o.deps)){i.memoizedState=Sr(n,t,l,r);return}}de.flags|=e,i.memoizedState=Sr(1|n,t,l,r)}function Xu(e,n){return ki(8390656,8,e,n)}function fo(e,n){return Si(2048,8,e,n)}function Gu(e,n){return Si(4,2,e,n)}function Zu(e,n){return Si(4,4,e,n)}function Ju(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function qu(e,n,t){return t=t!=null?t.concat([e]):null,Si(4,4,Ju.bind(null,n,e),t)}function po(){}function es(e,n){var t=ln();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&oo(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function ns(e,n){var t=ln();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&oo(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function ts(e,n,t){return(ct&21)===0?(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=t):(dn(t,n)||(t=Pa(),de.lanes|=t,dt|=t,e.baseState=!0),n)}function tf(e,n){var t=ne;ne=t!==0&&4>t?t:4,e(!0);var r=lo.transition;lo.transition={};try{e(!1),n()}finally{ne=t,lo.transition=r}}function rs(){return ln().memoizedState}function rf(e,n,t){var r=Zn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},is(e))ls(n,t);else if(t=Lu(e,n,t,r),t!==null){var i=je();gn(t,e,r,i),os(t,n,r)}}function lf(e,n,t){var r=Zn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(is(e))ls(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,u=l(o,t);if(i.hasEagerState=!0,i.eagerState=u,dn(u,o)){var c=n.interleaved;c===null?(i.next=i,ql(n)):(i.next=c.next,c.next=i),n.interleaved=i;return}}catch{}finally{}t=Lu(e,n,i,r),t!==null&&(i=je(),gn(t,e,r,i),os(t,n,r))}}function is(e){var n=e.alternate;return e===de||n!==null&&n===de}function ls(e,n){yr=wi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function os(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ml(e,t)}}var xi={readContext:rn,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},of={readContext:rn,useCallback:function(e,n){return En().memoizedState=[e,n===void 0?null:n],e},useContext:rn,useEffect:Xu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,ki(4194308,4,Ju.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ki(4194308,4,e,n)},useInsertionEffect:function(e,n){return ki(4,2,e,n)},useMemo:function(e,n){var t=En();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=En();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=rf.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var n=En();return e={current:e},n.memoizedState=e},useState:Yu,useDebugValue:po,useDeferredValue:function(e){return En().memoizedState=e},useTransition:function(){var e=Yu(!1),n=e[0];return e=tf.bind(null,e[1]),En().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=de,i=En();if(se){if(t===void 0)throw Error(a(407));t=t()}else{if(t=n(),Ee===null)throw Error(a(349));(ct&30)!==0||Vu(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,Xu(Hu.bind(null,r,l,e),[e]),r.flags|=2048,Sr(9,$u.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=En(),n=Ee.identifierPrefix;if(se){var t=Mn,r=Dn;t=(r&~(1<<32-cn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=wr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=nf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},af={readContext:rn,useCallback:es,useContext:rn,useEffect:fo,useImperativeHandle:qu,useInsertionEffect:Gu,useLayoutEffect:Zu,useMemo:ns,useReducer:so,useRef:Ku,useState:function(){return so(kr)},useDebugValue:po,useDeferredValue:function(e){var n=ln();return ts(n,ye.memoizedState,e)},useTransition:function(){var e=so(kr)[0],n=ln().memoizedState;return[e,n]},useMutableSource:bu,useSyncExternalStore:Bu,useId:rs,unstable_isNewReconciler:!1},uf={readContext:rn,useCallback:es,useContext:rn,useEffect:fo,useImperativeHandle:qu,useInsertionEffect:Gu,useLayoutEffect:Zu,useMemo:ns,useReducer:co,useRef:Ku,useState:function(){return co(kr)},useDebugValue:po,useDeferredValue:function(e){var n=ln();return ye===null?n.memoizedState=e:ts(n,ye.memoizedState,e)},useTransition:function(){var e=co(kr)[0],n=ln().memoizedState;return[e,n]},useMutableSource:bu,useSyncExternalStore:Bu,useId:rs,unstable_isNewReconciler:!1};function pn(e,n){if(e&&e.defaultProps){n=z({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function mo(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:z({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ei={isMounted:function(e){return(e=e._reactInternals)?rt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=je(),i=Zn(e),l=zn(r,i);l.payload=n,t!=null&&(l.callback=t),n=Yn(e,l,i),n!==null&&(gn(n,e,i,r),hi(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=je(),i=Zn(e),l=zn(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=Yn(e,l,i),n!==null&&(gn(n,e,i,r),hi(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=je(),r=Zn(e),i=zn(t,r);i.tag=2,n!=null&&(i.callback=n),n=Yn(e,i,r),n!==null&&(gn(n,e,r,t),hi(n,e,r))}};function as(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!ar(t,r)||!ar(i,l):!0}function us(e,n,t){var r=!1,i=Hn,l=n.contextType;return typeof l=="object"&&l!==null?l=rn(l):(i=Be(n)?lt:ze.current,r=n.contextTypes,l=(r=r!=null)?Tt(e,i):Hn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ei,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function ss(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Ei.enqueueReplaceState(n,n.state,null)}function ho(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},eo(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=rn(l):(l=Be(n)?lt:ze.current,i.context=Tt(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(mo(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Ei.enqueueReplaceState(i,i.state,null),gi(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ot(e,n){try{var t="",r=n;do t+=G(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function go(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function vo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var sf=typeof WeakMap=="function"?WeakMap:Map;function cs(e,n,t){t=zn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Ti||(Ti=!0,Po=r),vo(e,n)},t}function ds(e,n,t){t=zn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){vo(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){vo(e,n),typeof r!="function"&&(Xn===null?Xn=new Set([this]):Xn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function fs(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new sf;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Ef.bind(null,e,n,t),n.then(e,e))}function ps(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function ms(e,n,t,r,i){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=zn(-1,1),n.tag=2,Yn(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var cf=ke.ReactCurrentOwner,Ve=!1;function Le(e,n,t,r){n.child=e===null?Fu(n,null,t,r):Ft(n,e.child,t,r)}function hs(e,n,t,r,i){t=t.render;var l=n.ref;return jt(n,i),r=ao(e,n,t,r,l,i),t=uo(),e!==null&&!Ve?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Pn(e,n,i)):(se&&t&&Hl(n),n.flags|=1,Le(e,n,r,i),n.child)}function gs(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!Uo(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,vs(e,n,l,r,i)):(e=ji(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,(e.lanes&i)===0){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:ar,t(o,r)&&e.ref===n.ref)return Pn(e,n,i)}return n.flags|=1,e=qn(l,r),e.ref=n.ref,e.return=n,n.child=e}function vs(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(ar(l,r)&&e.ref===n.ref)if(Ve=!1,n.pendingProps=r=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Ve=!0);else return n.lanes=e.lanes,Pn(e,n,i)}return yo(e,n,t,r,i)}function ys(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(bt,en),en|=t;else{if((t&1073741824)===0)return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ie(bt,en),en|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,ie(bt,en),en|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,ie(bt,en),en|=r;return Le(e,n,i,t),n.child}function ws(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function yo(e,n,t,r,i){var l=Be(t)?lt:ze.current;return l=Tt(n,l),jt(n,i),t=ao(e,n,t,r,l,i),r=uo(),e!==null&&!Ve?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Pn(e,n,i)):(se&&r&&Hl(n),n.flags|=1,Le(e,n,t,i),n.child)}function ks(e,n,t,r,i){if(Be(t)){var l=!0;ai(n)}else l=!1;if(jt(n,i),n.stateNode===null)_i(e,n),us(n,t,r),ho(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,u=n.memoizedProps;o.props=u;var c=o.context,g=t.contextType;typeof g=="object"&&g!==null?g=rn(g):(g=Be(t)?lt:ze.current,g=Tt(n,g));var S=t.getDerivedStateFromProps,x=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function";x||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||c!==g)&&ss(n,o,r,g),Qn=!1;var w=n.memoizedState;o.state=w,gi(n,r,o,i),c=n.memoizedState,u!==r||w!==c||be.current||Qn?(typeof S=="function"&&(mo(n,t,S,r),c=n.memoizedState),(u=Qn||as(n,t,u,r,w,c,g))?(x||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=c),o.props=r,o.state=c,o.context=g,r=u):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,ju(e,n),u=n.memoizedProps,g=n.type===n.elementType?u:pn(n.type,u),o.props=g,x=n.pendingProps,w=o.context,c=t.contextType,typeof c=="object"&&c!==null?c=rn(c):(c=Be(t)?lt:ze.current,c=Tt(n,c));var D=t.getDerivedStateFromProps;(S=typeof D=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==x||w!==c)&&ss(n,o,r,c),Qn=!1,w=n.memoizedState,o.state=w,gi(n,r,o,i);var P=n.memoizedState;u!==x||w!==P||be.current||Qn?(typeof D=="function"&&(mo(n,t,D,r),P=n.memoizedState),(g=Qn||as(n,t,g,r,w,P,c)||!1)?(S||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,c)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=P),o.props=r,o.state=P,o.context=c,r=g):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(n.flags|=1024),r=!1)}return wo(e,n,t,r,l,i)}function wo(e,n,t,r,i,l){ws(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&_u(n,t,!1),Pn(e,n,l);r=n.stateNode,cf.current=n;var u=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=Ft(n,e.child,null,l),n.child=Ft(n,null,u,l)):Le(e,n,u,l),n.memoizedState=r.state,i&&_u(n,t,!0),n.child}function Ss(e){var n=e.stateNode;n.pendingContext?Eu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Eu(e,n.context,!1),no(e,n.containerInfo)}function xs(e,n,t,r,i){return Rt(),Kl(i),n.flags|=256,Le(e,n,t,r),n.child}var ko={dehydrated:null,treeContext:null,retryLane:0};function So(e){return{baseLanes:e,cachePool:null,transitions:null}}function Es(e,n,t){var r=n.pendingProps,i=ce.current,l=!1,o=(n.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ie(ce,i&1),e===null)return Yl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Ai(o,r,0,null),e=ht(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=So(t),n.memoizedState=ko,e):xo(n,o));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return df(e,n,o,r,u,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,u=i.sibling;var c={mode:"hidden",children:r.children};return(o&1)===0&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=c,n.deletions=null):(r=qn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?l=qn(u,l):(l=ht(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?So(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=ko,r}return l=e.child,e=l.sibling,r=qn(l,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function xo(e,n){return n=Ai({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ci(e,n,t,r){return r!==null&&Kl(r),Ft(n,e.child,null,t),e=xo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function df(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=go(Error(a(422))),Ci(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=Ai({mode:"visible",children:r.children},i,0,null),l=ht(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,(n.mode&1)!==0&&Ft(n,e.child,null,o),n.child.memoizedState=So(o),n.memoizedState=ko,l);if((n.mode&1)===0)return Ci(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,l=Error(a(419)),r=go(l,r,void 0),Ci(e,n,o,r)}if(u=(o&e.childLanes)!==0,Ve||u){if(r=Ee,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Tn(e,i),gn(r,e,i,-1))}return Oo(),r=go(Error(a(421))),Ci(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Cf.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,qe=Vn(i.nextSibling),Je=n,se=!0,fn=null,e!==null&&(nn[tn++]=Dn,nn[tn++]=Mn,nn[tn++]=ot,Dn=e.id,Mn=e.overflow,ot=n),n=xo(n,r.children),n.flags|=4096,n)}function Cs(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Jl(e.return,n,t)}function Eo(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function _s(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(Le(e,n,r.children,t),r=ce.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cs(e,t,n);else if(e.tag===19)Cs(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(ce,r),(n.mode&1)===0)n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&vi(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Eo(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&vi(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Eo(n,!0,t,null,l);break;case"together":Eo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function _i(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Pn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),dt|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,t=qn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=qn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function ff(e,n,t){switch(n.tag){case 3:Ss(n),Rt();break;case 5:Uu(n);break;case 1:Be(n.type)&&ai(n);break;case 4:no(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;ie(pi,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ie(ce,ce.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?Es(e,n,t):(ie(ce,ce.current&1),e=Pn(e,n,t),e!==null?e.sibling:null);ie(ce,ce.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return _s(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(ce,ce.current),r)break;return null;case 22:case 23:return n.lanes=0,ys(e,n,t)}return Pn(e,n,t)}var Is,Co,Ns,Ds;Is=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},Co=function(){},Ns=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,st(xn.current);var l=null;switch(t){case"input":i=Ji(e,i),r=Ji(e,r),l=[];break;case"select":i=z({},i,{value:void 0}),r=z({},r,{value:void 0}),l=[];break;case"textarea":i=nl(e,i),r=nl(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ii)}rl(t,r);var o;t=null;for(g in i)if(!r.hasOwnProperty(g)&&i.hasOwnProperty(g)&&i[g]!=null)if(g==="style"){var u=i[g];for(o in u)u.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(v.hasOwnProperty(g)?l||(l=[]):(l=l||[]).push(g,null));for(g in r){var c=r[g];if(u=i!=null?i[g]:void 0,r.hasOwnProperty(g)&&c!==u&&(c!=null||u!=null))if(g==="style")if(u){for(o in u)!u.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in c)c.hasOwnProperty(o)&&u[o]!==c[o]&&(t||(t={}),t[o]=c[o])}else t||(l||(l=[]),l.push(g,t)),t=c;else g==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,u=u?u.__html:void 0,c!=null&&u!==c&&(l=l||[]).push(g,c)):g==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(g,""+c):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(v.hasOwnProperty(g)?(c!=null&&g==="onScroll"&&oe("scroll",e),l||u===c||(l=[])):(l=l||[]).push(g,c))}t&&(l=l||[]).push("style",t);var g=l;(n.updateQueue=g)&&(n.flags|=4)}},Ds=function(e,n,t,r){t!==r&&(n.flags|=4)};function xr(e,n){if(!se)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Re(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function pf(e,n,t){var r=n.pendingProps;switch(Wl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(n),null;case 1:return Be(n.type)&&oi(),Re(n),null;case 3:return r=n.stateNode,At(),ae(be),ae(ze),io(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(di(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,fn!==null&&(Lo(fn),fn=null))),Co(e,n),Re(n),null;case 5:to(n);var i=st(vr.current);if(t=n.type,e!==null&&n.stateNode!=null)Ns(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(a(166));return Re(n),null}if(e=st(xn.current),di(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[Sn]=n,r[fr]=l,e=(n.mode&1)!==0,t){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(i=0;i<sr.length;i++)oe(sr[i],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":ua(r,l),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},oe("invalid",r);break;case"textarea":da(r,l),oe("invalid",r)}rl(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="children"?typeof u=="string"?r.textContent!==u&&(l.suppressHydrationWarning!==!0&&ri(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&ri(r.textContent,u,e),i=["children",""+u]):v.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&oe("scroll",r)}switch(t){case"input":Fr(r),ca(r,l,!0);break;case"textarea":Fr(r),pa(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=ii)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ma(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Sn]=n,e[fr]=r,Is(e,n,!1,!1),n.stateNode=e;e:{switch(o=il(t,r),t){case"dialog":oe("cancel",e),oe("close",e),i=r;break;case"iframe":case"object":case"embed":oe("load",e),i=r;break;case"video":case"audio":for(i=0;i<sr.length;i++)oe(sr[i],e);i=r;break;case"source":oe("error",e),i=r;break;case"img":case"image":case"link":oe("error",e),oe("load",e),i=r;break;case"details":oe("toggle",e),i=r;break;case"input":ua(e,r),i=Ji(e,r),oe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=z({},r,{value:void 0}),oe("invalid",e);break;case"textarea":da(e,r),i=nl(e,r),oe("invalid",e);break;default:i=r}rl(t,i),u=i;for(l in u)if(u.hasOwnProperty(l)){var c=u[l];l==="style"?va(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ha(e,c)):l==="children"?typeof c=="string"?(t!=="textarea"||c!=="")&&Ht(e,c):typeof c=="number"&&Ht(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(v.hasOwnProperty(l)?c!=null&&l==="onScroll"&&oe("scroll",e):c!=null&&Qe(e,l,c,o))}switch(t){case"input":Fr(e),ca(e,r,!1);break;case"textarea":Fr(e),pa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ee(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?yt(e,!!r.multiple,l,!1):r.defaultValue!=null&&yt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ii)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Re(n),null;case 6:if(e&&n.stateNode!=null)Ds(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(a(166));if(t=st(vr.current),st(xn.current),di(n)){if(r=n.stateNode,t=n.memoizedProps,r[Sn]=n,(l=r.nodeValue!==t)&&(e=Je,e!==null))switch(e.tag){case 3:ri(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ri(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Sn]=n,n.stateNode=r}return Re(n),null;case 13:if(ae(ce),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(se&&qe!==null&&(n.mode&1)!==0&&(n.flags&128)===0)zu(),Rt(),n.flags|=98560,l=!1;else if(l=di(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(a(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(a(317));l[Sn]=n}else Rt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Re(n),l=!1}else fn!==null&&(Lo(fn),fn=null),l=!0;if(!l)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(ce.current&1)!==0?we===0&&(we=3):Oo())),n.updateQueue!==null&&(n.flags|=4),Re(n),null);case 4:return At(),Co(e,n),e===null&&cr(n.stateNode.containerInfo),Re(n),null;case 10:return Zl(n.type._context),Re(n),null;case 17:return Be(n.type)&&oi(),Re(n),null;case 19:if(ae(ce),l=n.memoizedState,l===null)return Re(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)xr(l,!1);else{if(we!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(o=vi(e),o!==null){for(n.flags|=128,xr(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ie(ce,ce.current&1|2),n.child}e=e.sibling}l.tail!==null&&me()>Bt&&(n.flags|=128,r=!0,xr(l,!1),n.lanes=4194304)}else{if(!r)if(e=vi(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),xr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!se)return Re(n),null}else 2*me()-l.renderingStartTime>Bt&&t!==1073741824&&(n.flags|=128,r=!0,xr(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=me(),n.sibling=null,t=ce.current,ie(ce,r?t&1|2:t&1),n):(Re(n),null);case 22:case 23:return Ao(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?(en&1073741824)!==0&&(Re(n),n.subtreeFlags&6&&(n.flags|=8192)):Re(n),null;case 24:return null;case 25:return null}throw Error(a(156,n.tag))}function mf(e,n){switch(Wl(n),n.tag){case 1:return Be(n.type)&&oi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return At(),ae(be),ae(ze),io(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return to(n),null;case 13:if(ae(ce),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Rt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ae(ce),null;case 4:return At(),null;case 10:return Zl(n.type._context),null;case 22:case 23:return Ao(),null;case 24:return null;default:return null}}var Ii=!1,Fe=!1,hf=typeof WeakSet=="function"?WeakSet:Set,M=null;function Ut(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){pe(e,n,r)}else t.current=null}function _o(e,n,t){try{t()}catch(r){pe(e,n,r)}}var Ms=!1;function gf(e,n){if(jl=Qr,e=au(),Dl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,u=-1,c=-1,g=0,S=0,x=e,w=null;n:for(;;){for(var D;x!==t||i!==0&&x.nodeType!==3||(u=o+i),x!==l||r!==0&&x.nodeType!==3||(c=o+r),x.nodeType===3&&(o+=x.nodeValue.length),(D=x.firstChild)!==null;)w=x,x=D;for(;;){if(x===e)break n;if(w===t&&++g===i&&(u=o),w===l&&++S===r&&(c=o),(D=x.nextSibling)!==null)break;x=w,w=x.parentNode}x=D}t=u===-1||c===-1?null:{start:u,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(Al={focusedElem:e,selectionRange:t},Qr=!1,M=n;M!==null;)if(n=M,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,M=e;else for(;M!==null;){n=M;try{var P=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var F=P.memoizedProps,he=P.memoizedState,p=n.stateNode,d=p.getSnapshotBeforeUpdate(n.elementType===n.type?F:pn(n.type,F),he);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=n.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(E){pe(n,n.return,E)}if(e=n.sibling,e!==null){e.return=n.return,M=e;break}M=n.return}return P=Ms,Ms=!1,P}function Er(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&_o(n,t,l)}i=i.next}while(i!==r)}}function Ni(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Io(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Ts(e){var n=e.alternate;n!==null&&(e.alternate=null,Ts(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Sn],delete n[fr],delete n[Bl],delete n[Zd],delete n[Jd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zs(e){return e.tag===5||e.tag===3||e.tag===4}function Ps(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function No(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ii));else if(r!==4&&(e=e.child,e!==null))for(No(e,n,t),e=e.sibling;e!==null;)No(e,n,t),e=e.sibling}function Do(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Do(e,n,t),e=e.sibling;e!==null;)Do(e,n,t),e=e.sibling}var Ne=null,mn=!1;function Kn(e,n,t){for(t=t.child;t!==null;)Rs(e,n,t),t=t.sibling}function Rs(e,n,t){if(kn&&typeof kn.onCommitFiberUnmount=="function")try{kn.onCommitFiberUnmount(br,t)}catch{}switch(t.tag){case 5:Fe||Ut(t,n);case 6:var r=Ne,i=mn;Ne=null,Kn(e,n,t),Ne=r,mn=i,Ne!==null&&(mn?(e=Ne,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Ne.removeChild(t.stateNode));break;case 18:Ne!==null&&(mn?(e=Ne,t=t.stateNode,e.nodeType===8?bl(e.parentNode,t):e.nodeType===1&&bl(e,t),nr(e)):bl(Ne,t.stateNode));break;case 4:r=Ne,i=mn,Ne=t.stateNode.containerInfo,mn=!0,Kn(e,n,t),Ne=r,mn=i;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&((l&2)!==0||(l&4)!==0)&&_o(t,n,o),i=i.next}while(i!==r)}Kn(e,n,t);break;case 1:if(!Fe&&(Ut(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){pe(t,n,u)}Kn(e,n,t);break;case 21:Kn(e,n,t);break;case 22:t.mode&1?(Fe=(r=Fe)||t.memoizedState!==null,Kn(e,n,t),Fe=r):Kn(e,n,t);break;default:Kn(e,n,t)}}function Fs(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new hf),n.forEach(function(r){var i=_f.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function hn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,u=o;e:for(;u!==null;){switch(u.tag){case 5:Ne=u.stateNode,mn=!1;break e;case 3:Ne=u.stateNode.containerInfo,mn=!0;break e;case 4:Ne=u.stateNode.containerInfo,mn=!0;break e}u=u.return}if(Ne===null)throw Error(a(160));Rs(l,o,i),Ne=null,mn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(g){pe(i,n,g)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Ls(n,e),n=n.sibling}function Ls(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(hn(n,e),Cn(e),r&4){try{Er(3,e,e.return),Ni(3,e)}catch(F){pe(e,e.return,F)}try{Er(5,e,e.return)}catch(F){pe(e,e.return,F)}}break;case 1:hn(n,e),Cn(e),r&512&&t!==null&&Ut(t,t.return);break;case 5:if(hn(n,e),Cn(e),r&512&&t!==null&&Ut(t,t.return),e.flags&32){var i=e.stateNode;try{Ht(i,"")}catch(F){pe(e,e.return,F)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,u=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&sa(i,l),il(u,o);var g=il(u,l);for(o=0;o<c.length;o+=2){var S=c[o],x=c[o+1];S==="style"?va(i,x):S==="dangerouslySetInnerHTML"?ha(i,x):S==="children"?Ht(i,x):Qe(i,S,x,g)}switch(u){case"input":qi(i,l);break;case"textarea":fa(i,l);break;case"select":var w=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var D=l.value;D!=null?yt(i,!!l.multiple,D,!1):w!==!!l.multiple&&(l.defaultValue!=null?yt(i,!!l.multiple,l.defaultValue,!0):yt(i,!!l.multiple,l.multiple?[]:"",!1))}i[fr]=l}catch(F){pe(e,e.return,F)}}break;case 6:if(hn(n,e),Cn(e),r&4){if(e.stateNode===null)throw Error(a(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(F){pe(e,e.return,F)}}break;case 3:if(hn(n,e),Cn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{nr(n.containerInfo)}catch(F){pe(e,e.return,F)}break;case 4:hn(n,e),Cn(e);break;case 13:hn(n,e),Cn(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(zo=me())),r&4&&Fs(e);break;case 22:if(S=t!==null&&t.memoizedState!==null,e.mode&1?(Fe=(g=Fe)||S,hn(n,e),Fe=g):hn(n,e),Cn(e),r&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!S&&(e.mode&1)!==0)for(M=e,S=e.child;S!==null;){for(x=M=S;M!==null;){switch(w=M,D=w.child,w.tag){case 0:case 11:case 14:case 15:Er(4,w,w.return);break;case 1:Ut(w,w.return);var P=w.stateNode;if(typeof P.componentWillUnmount=="function"){r=w,t=w.return;try{n=r,P.props=n.memoizedProps,P.state=n.memoizedState,P.componentWillUnmount()}catch(F){pe(r,t,F)}}break;case 5:Ut(w,w.return);break;case 22:if(w.memoizedState!==null){Os(x);continue}}D!==null?(D.return=w,M=D):Os(x)}S=S.sibling}e:for(S=null,x=e;;){if(x.tag===5){if(S===null){S=x;try{i=x.stateNode,g?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=x.stateNode,c=x.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,u.style.display=ga("display",o))}catch(F){pe(e,e.return,F)}}}else if(x.tag===6){if(S===null)try{x.stateNode.nodeValue=g?"":x.memoizedProps}catch(F){pe(e,e.return,F)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;S===x&&(S=null),x=x.return}S===x&&(S=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:hn(n,e),Cn(e),r&4&&Fs(e);break;case 21:break;default:hn(n,e),Cn(e)}}function Cn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(zs(t)){var r=t;break e}t=t.return}throw Error(a(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ht(i,""),r.flags&=-33);var l=Ps(e);Do(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,u=Ps(e);No(e,u,o);break;default:throw Error(a(161))}}catch(c){pe(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function vf(e,n,t){M=e,js(e)}function js(e,n,t){for(var r=(e.mode&1)!==0;M!==null;){var i=M,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ii;if(!o){var u=i.alternate,c=u!==null&&u.memoizedState!==null||Fe;u=Ii;var g=Fe;if(Ii=o,(Fe=c)&&!g)for(M=i;M!==null;)o=M,c=o.child,o.tag===22&&o.memoizedState!==null?Us(i):c!==null?(c.return=o,M=c):Us(i);for(;l!==null;)M=l,js(l),l=l.sibling;M=i,Ii=u,Fe=g}As(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,M=l):As(e)}}function As(e){for(;M!==null;){var n=M;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Fe||Ni(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Fe)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:pn(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Ou(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Ou(n,o,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&t.focus();break;case"img":c.src&&(t.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var g=n.alternate;if(g!==null){var S=g.memoizedState;if(S!==null){var x=S.dehydrated;x!==null&&nr(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}Fe||n.flags&512&&Io(n)}catch(w){pe(n,n.return,w)}}if(n===e){M=null;break}if(t=n.sibling,t!==null){t.return=n.return,M=t;break}M=n.return}}function Os(e){for(;M!==null;){var n=M;if(n===e){M=null;break}var t=n.sibling;if(t!==null){t.return=n.return,M=t;break}M=n.return}}function Us(e){for(;M!==null;){var n=M;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ni(4,n)}catch(c){pe(n,t,c)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(c){pe(n,i,c)}}var l=n.return;try{Io(n)}catch(c){pe(n,l,c)}break;case 5:var o=n.return;try{Io(n)}catch(c){pe(n,o,c)}}}catch(c){pe(n,n.return,c)}if(n===e){M=null;break}var u=n.sibling;if(u!==null){u.return=n.return,M=u;break}M=n.return}}var yf=Math.ceil,Di=ke.ReactCurrentDispatcher,Mo=ke.ReactCurrentOwner,on=ke.ReactCurrentBatchConfig,X=0,Ee=null,ve=null,De=0,en=0,bt=$n(0),we=0,Cr=null,dt=0,Mi=0,To=0,_r=null,$e=null,zo=0,Bt=1/0,Rn=null,Ti=!1,Po=null,Xn=null,zi=!1,Gn=null,Pi=0,Ir=0,Ro=null,Ri=-1,Fi=0;function je(){return(X&6)!==0?me():Ri!==-1?Ri:Ri=me()}function Zn(e){return(e.mode&1)===0?1:(X&2)!==0&&De!==0?De&-De:ef.transition!==null?(Fi===0&&(Fi=Pa()),Fi):(e=ne,e!==0||(e=window.event,e=e===void 0?16:Ba(e.type)),e)}function gn(e,n,t,r){if(50<Ir)throw Ir=0,Ro=null,Error(a(185));Gt(e,t,r),((X&2)===0||e!==Ee)&&(e===Ee&&((X&2)===0&&(Mi|=t),we===4&&Jn(e,De)),He(e,r),t===1&&X===0&&(n.mode&1)===0&&(Bt=me()+500,ui&&Wn()))}function He(e,n){var t=e.callbackNode;ed(e,n);var r=$r(e,e===Ee?De:0);if(r===0)t!==null&&Ma(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Ma(t),n===1)e.tag===0?qd(Bs.bind(null,e)):Iu(Bs.bind(null,e)),Xd(function(){(X&6)===0&&Wn()}),t=null;else{switch(Ra(r)){case 1:t=dl;break;case 4:t=Ta;break;case 16:t=Ur;break;case 536870912:t=za;break;default:t=Ur}t=Xs(t,bs.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function bs(e,n){if(Ri=-1,Fi=0,(X&6)!==0)throw Error(a(327));var t=e.callbackNode;if(Vt()&&e.callbackNode!==t)return null;var r=$r(e,e===Ee?De:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=Li(e,r);else{n=r;var i=X;X|=2;var l=$s();(Ee!==e||De!==n)&&(Rn=null,Bt=me()+500,pt(e,n));do try{Sf();break}catch(u){Vs(e,u)}while(!0);Gl(),Di.current=l,X=i,ve!==null?n=0:(Ee=null,De=0,n=we)}if(n!==0){if(n===2&&(i=fl(e),i!==0&&(r=i,n=Fo(e,i))),n===1)throw t=Cr,pt(e,0),Jn(e,r),He(e,me()),t;if(n===6)Jn(e,r);else{if(i=e.current.alternate,(r&30)===0&&!wf(i)&&(n=Li(e,r),n===2&&(l=fl(e),l!==0&&(r=l,n=Fo(e,l))),n===1))throw t=Cr,pt(e,0),Jn(e,r),He(e,me()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(a(345));case 2:mt(e,$e,Rn);break;case 3:if(Jn(e,r),(r&130023424)===r&&(n=zo+500-me(),10<n)){if($r(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ul(mt.bind(null,e,$e,Rn),n);break}mt(e,$e,Rn);break;case 4:if(Jn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-cn(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yf(r/1960))-r,10<r){e.timeoutHandle=Ul(mt.bind(null,e,$e,Rn),r);break}mt(e,$e,Rn);break;case 5:mt(e,$e,Rn);break;default:throw Error(a(329))}}}return He(e,me()),e.callbackNode===t?bs.bind(null,e):null}function Fo(e,n){var t=_r;return e.current.memoizedState.isDehydrated&&(pt(e,n).flags|=256),e=Li(e,n),e!==2&&(n=$e,$e=t,n!==null&&Lo(n)),e}function Lo(e){$e===null?$e=e:$e.push.apply($e,e)}function wf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!dn(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Jn(e,n){for(n&=~To,n&=~Mi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-cn(n),r=1<<t;e[t]=-1,n&=~r}}function Bs(e){if((X&6)!==0)throw Error(a(327));Vt();var n=$r(e,0);if((n&1)===0)return He(e,me()),null;var t=Li(e,n);if(e.tag!==0&&t===2){var r=fl(e);r!==0&&(n=r,t=Fo(e,r))}if(t===1)throw t=Cr,pt(e,0),Jn(e,n),He(e,me()),t;if(t===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,mt(e,$e,Rn),He(e,me()),null}function jo(e,n){var t=X;X|=1;try{return e(n)}finally{X=t,X===0&&(Bt=me()+500,ui&&Wn())}}function ft(e){Gn!==null&&Gn.tag===0&&(X&6)===0&&Vt();var n=X;X|=1;var t=on.transition,r=ne;try{if(on.transition=null,ne=1,e)return e()}finally{ne=r,on.transition=t,X=n,(X&6)===0&&Wn()}}function Ao(){en=bt.current,ae(bt)}function pt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Kd(t)),ve!==null)for(t=ve.return;t!==null;){var r=t;switch(Wl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&oi();break;case 3:At(),ae(be),ae(ze),io();break;case 5:to(r);break;case 4:At();break;case 13:ae(ce);break;case 19:ae(ce);break;case 10:Zl(r.type._context);break;case 22:case 23:Ao()}t=t.return}if(Ee=e,ve=e=qn(e.current,null),De=en=n,we=0,Cr=null,To=Mi=dt=0,$e=_r=null,ut!==null){for(n=0;n<ut.length;n++)if(t=ut[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}ut=null}return e}function Vs(e,n){do{var t=ve;try{if(Gl(),yi.current=xi,wi){for(var r=de.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}wi=!1}if(ct=0,xe=ye=de=null,yr=!1,wr=0,Mo.current=null,t===null||t.return===null){we=1,Cr=n,ve=null;break}e:{var l=e,o=t.return,u=t,c=n;if(n=De,u.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var g=c,S=u,x=S.tag;if((S.mode&1)===0&&(x===0||x===11||x===15)){var w=S.alternate;w?(S.updateQueue=w.updateQueue,S.memoizedState=w.memoizedState,S.lanes=w.lanes):(S.updateQueue=null,S.memoizedState=null)}var D=ps(o);if(D!==null){D.flags&=-257,ms(D,o,u,l,n),D.mode&1&&fs(l,g,n),n=D,c=g;var P=n.updateQueue;if(P===null){var F=new Set;F.add(c),n.updateQueue=F}else P.add(c);break e}else{if((n&1)===0){fs(l,g,n),Oo();break e}c=Error(a(426))}}else if(se&&u.mode&1){var he=ps(o);if(he!==null){(he.flags&65536)===0&&(he.flags|=256),ms(he,o,u,l,n),Kl(Ot(c,u));break e}}l=c=Ot(c,u),we!==4&&(we=2),_r===null?_r=[l]:_r.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var p=cs(l,c,n);Au(l,p);break e;case 1:u=c;var d=l.type,m=l.stateNode;if((l.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Xn===null||!Xn.has(m)))){l.flags|=65536,n&=-n,l.lanes|=n;var E=ds(l,u,n);Au(l,E);break e}}l=l.return}while(l!==null)}Ws(t)}catch(L){n=L,ve===t&&t!==null&&(ve=t=t.return);continue}break}while(!0)}function $s(){var e=Di.current;return Di.current=xi,e===null?xi:e}function Oo(){(we===0||we===3||we===2)&&(we=4),Ee===null||(dt&268435455)===0&&(Mi&268435455)===0||Jn(Ee,De)}function Li(e,n){var t=X;X|=2;var r=$s();(Ee!==e||De!==n)&&(Rn=null,pt(e,n));do try{kf();break}catch(i){Vs(e,i)}while(!0);if(Gl(),X=t,Di.current=r,ve!==null)throw Error(a(261));return Ee=null,De=0,we}function kf(){for(;ve!==null;)Hs(ve)}function Sf(){for(;ve!==null&&!Wc();)Hs(ve)}function Hs(e){var n=Ks(e.alternate,e,en);e.memoizedProps=e.pendingProps,n===null?Ws(e):ve=n,Mo.current=null}function Ws(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=pf(t,n,en),t!==null){ve=t;return}}else{if(t=mf(t,n),t!==null){t.flags&=32767,ve=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,ve=null;return}}if(n=n.sibling,n!==null){ve=n;return}ve=n=e}while(n!==null);we===0&&(we=5)}function mt(e,n,t){var r=ne,i=on.transition;try{on.transition=null,ne=1,xf(e,n,t,r)}finally{on.transition=i,ne=r}return null}function xf(e,n,t,r){do Vt();while(Gn!==null);if((X&6)!==0)throw Error(a(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(nd(e,l),e===Ee&&(ve=Ee=null,De=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||zi||(zi=!0,Xs(Ur,function(){return Vt(),null})),l=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||l){l=on.transition,on.transition=null;var o=ne;ne=1;var u=X;X|=4,Mo.current=null,gf(e,t),Ls(t,e),Bd(Al),Qr=!!jl,Al=jl=null,e.current=t,vf(t),Qc(),X=u,ne=o,on.transition=l}else e.current=t;if(zi&&(zi=!1,Gn=e,Pi=i),l=e.pendingLanes,l===0&&(Xn=null),Xc(t.stateNode),He(e,me()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ti)throw Ti=!1,e=Po,Po=null,e;return(Pi&1)!==0&&e.tag!==0&&Vt(),l=e.pendingLanes,(l&1)!==0?e===Ro?Ir++:(Ir=0,Ro=e):Ir=0,Wn(),null}function Vt(){if(Gn!==null){var e=Ra(Pi),n=on.transition,t=ne;try{if(on.transition=null,ne=16>e?16:e,Gn===null)var r=!1;else{if(e=Gn,Gn=null,Pi=0,(X&6)!==0)throw Error(a(331));var i=X;for(X|=4,M=e.current;M!==null;){var l=M,o=l.child;if((M.flags&16)!==0){var u=l.deletions;if(u!==null){for(var c=0;c<u.length;c++){var g=u[c];for(M=g;M!==null;){var S=M;switch(S.tag){case 0:case 11:case 15:Er(8,S,l)}var x=S.child;if(x!==null)x.return=S,M=x;else for(;M!==null;){S=M;var w=S.sibling,D=S.return;if(Ts(S),S===g){M=null;break}if(w!==null){w.return=D,M=w;break}M=D}}}var P=l.alternate;if(P!==null){var F=P.child;if(F!==null){P.child=null;do{var he=F.sibling;F.sibling=null,F=he}while(F!==null)}}M=l}}if((l.subtreeFlags&2064)!==0&&o!==null)o.return=l,M=o;else e:for(;M!==null;){if(l=M,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Er(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,M=p;break e}M=l.return}}var d=e.current;for(M=d;M!==null;){o=M;var m=o.child;if((o.subtreeFlags&2064)!==0&&m!==null)m.return=o,M=m;else e:for(o=d;M!==null;){if(u=M,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:Ni(9,u)}}catch(L){pe(u,u.return,L)}if(u===o){M=null;break e}var E=u.sibling;if(E!==null){E.return=u.return,M=E;break e}M=u.return}}if(X=i,Wn(),kn&&typeof kn.onPostCommitFiberRoot=="function")try{kn.onPostCommitFiberRoot(br,e)}catch{}r=!0}return r}finally{ne=t,on.transition=n}}return!1}function Qs(e,n,t){n=Ot(t,n),n=cs(e,n,1),e=Yn(e,n,1),n=je(),e!==null&&(Gt(e,1,n),He(e,n))}function pe(e,n,t){if(e.tag===3)Qs(e,e,t);else for(;n!==null;){if(n.tag===3){Qs(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xn===null||!Xn.has(r))){e=Ot(t,e),e=ds(n,e,1),n=Yn(n,e,1),e=je(),n!==null&&(Gt(n,1,e),He(n,e));break}}n=n.return}}function Ef(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=je(),e.pingedLanes|=e.suspendedLanes&t,Ee===e&&(De&t)===t&&(we===4||we===3&&(De&130023424)===De&&500>me()-zo?pt(e,0):To|=t),He(e,n)}function Ys(e,n){n===0&&((e.mode&1)===0?n=1:(n=Vr,Vr<<=1,(Vr&130023424)===0&&(Vr=4194304)));var t=je();e=Tn(e,n),e!==null&&(Gt(e,n,t),He(e,t))}function Cf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Ys(e,t)}function _f(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}r!==null&&r.delete(n),Ys(e,t)}var Ks;Ks=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||be.current)Ve=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return Ve=!1,ff(e,n,t);Ve=(e.flags&131072)!==0}else Ve=!1,se&&(n.flags&1048576)!==0&&Nu(n,ci,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;_i(e,n),e=n.pendingProps;var i=Tt(n,ze.current);jt(n,t),i=ao(null,n,r,e,i,t);var l=uo();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Be(r)?(l=!0,ai(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,eo(n),i.updater=Ei,n.stateNode=i,i._reactInternals=n,ho(n,r,e,t),n=wo(null,n,r,!0,l,t)):(n.tag=0,se&&l&&Hl(n),Le(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(_i(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Nf(r),e=pn(r,e),i){case 0:n=yo(null,n,r,e,t);break e;case 1:n=ks(null,n,r,e,t);break e;case 11:n=hs(null,n,r,e,t);break e;case 14:n=gs(null,n,r,pn(r.type,e),t);break e}throw Error(a(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:pn(r,i),yo(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:pn(r,i),ks(e,n,r,i,t);case 3:e:{if(Ss(n),e===null)throw Error(a(387));r=n.pendingProps,l=n.memoizedState,i=l.element,ju(e,n),gi(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=Ot(Error(a(423)),n),n=xs(e,n,r,t,i);break e}else if(r!==i){i=Ot(Error(a(424)),n),n=xs(e,n,r,t,i);break e}else for(qe=Vn(n.stateNode.containerInfo.firstChild),Je=n,se=!0,fn=null,t=Fu(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Rt(),r===i){n=Pn(e,n,t);break e}Le(e,n,r,t)}n=n.child}return n;case 5:return Uu(n),e===null&&Yl(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Ol(r,i)?o=null:l!==null&&Ol(r,l)&&(n.flags|=32),ws(e,n),Le(e,n,o,t),n.child;case 6:return e===null&&Yl(n),null;case 13:return Es(e,n,t);case 4:return no(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ft(n,null,r,t):Le(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:pn(r,i),hs(e,n,r,i,t);case 7:return Le(e,n,n.pendingProps,t),n.child;case 8:return Le(e,n,n.pendingProps.children,t),n.child;case 12:return Le(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,ie(pi,r._currentValue),r._currentValue=o,l!==null)if(dn(l.value,o)){if(l.children===i.children&&!be.current){n=Pn(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var u=l.dependencies;if(u!==null){o=l.child;for(var c=u.firstContext;c!==null;){if(c.context===r){if(l.tag===1){c=zn(-1,t&-t),c.tag=2;var g=l.updateQueue;if(g!==null){g=g.shared;var S=g.pending;S===null?c.next=c:(c.next=S.next,S.next=c),g.pending=c}}l.lanes|=t,c=l.alternate,c!==null&&(c.lanes|=t),Jl(l.return,t,n),u.lanes|=t;break}c=c.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(a(341));o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),Jl(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}Le(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,jt(n,t),i=rn(i),r=r(i),n.flags|=1,Le(e,n,r,t),n.child;case 14:return r=n.type,i=pn(r,n.pendingProps),i=pn(r.type,i),gs(e,n,r,i,t);case 15:return vs(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:pn(r,i),_i(e,n),n.tag=1,Be(r)?(e=!0,ai(n)):e=!1,jt(n,t),us(n,r,i),ho(n,r,i,t),wo(null,n,r,!0,e,t);case 19:return _s(e,n,t);case 22:return ys(e,n,t)}throw Error(a(156,n.tag))};function Xs(e,n){return Da(e,n)}function If(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(e,n,t,r){return new If(e,n,t,r)}function Uo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nf(e){if(typeof e=="function")return Uo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ke)return 11;if(e===wn)return 14}return 2}function qn(e,n){var t=e.alternate;return t===null?(t=an(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ji(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")Uo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Te:return ht(t.children,i,l,n);case Oe:o=8,i|=8;break;case I:return e=an(12,t,n,i|2),e.elementType=I,e.lanes=l,e;case Se:return e=an(13,t,n,i),e.elementType=Se,e.lanes=l,e;case Xe:return e=an(19,t,n,i),e.elementType=Xe,e.lanes=l,e;case fe:return Ai(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case B:o=10;break e;case Ie:o=9;break e;case Ke:o=11;break e;case wn:o=14;break e;case Ue:o=16,r=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return n=an(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function ht(e,n,t,r){return e=an(7,e,r,n),e.lanes=t,e}function Ai(e,n,t,r){return e=an(22,e,r,n),e.elementType=fe,e.lanes=t,e.stateNode={isHidden:!1},e}function bo(e,n,t){return e=an(6,e,null,n),e.lanes=t,e}function Bo(e,n,t){return n=an(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Df(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pl(0),this.expirationTimes=pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vo(e,n,t,r,i,l,o,u,c){return e=new Df(e,n,t,u,c),n===1?(n=1,l===!0&&(n|=8)):n=0,l=an(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},eo(l),e}function Mf(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_e,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Gs(e){if(!e)return Hn;e=e._reactInternals;e:{if(rt(e)!==e||e.tag!==1)throw Error(a(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Be(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(a(171))}if(e.tag===1){var t=e.type;if(Be(t))return Cu(e,t,n)}return n}function Zs(e,n,t,r,i,l,o,u,c){return e=Vo(t,r,!0,e,i,l,o,u,c),e.context=Gs(null),t=e.current,r=je(),i=Zn(t),l=zn(r,i),l.callback=n??null,Yn(t,l,i),e.current.lanes=i,Gt(e,i,r),He(e,r),e}function Oi(e,n,t,r){var i=n.current,l=je(),o=Zn(i);return t=Gs(t),n.context===null?n.context=t:n.pendingContext=t,n=zn(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Yn(i,n,o),e!==null&&(gn(e,i,o,l),hi(e,i,o)),o}function Ui(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Js(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function $o(e,n){Js(e,n),(e=e.alternate)&&Js(e,n)}function Tf(){return null}var qs=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ho(e){this._internalRoot=e}bi.prototype.render=Ho.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));Oi(e,n,null,null)},bi.prototype.unmount=Ho.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ft(function(){Oi(null,e,null,null)}),n[In]=null}};function bi(e){this._internalRoot=e}bi.prototype.unstable_scheduleHydration=function(e){if(e){var n=ja();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Un.length&&n!==0&&n<Un[t].priority;t++);Un.splice(t,0,e),t===0&&Ua(e)}};function Wo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ec(){}function zf(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var g=Ui(o);l.call(g)}}var o=Zs(n,r,e,0,null,!1,!1,"",ec);return e._reactRootContainer=o,e[In]=o.current,cr(e.nodeType===8?e.parentNode:e),ft(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var g=Ui(c);u.call(g)}}var c=Vo(e,0,!1,null,null,!1,!1,"",ec);return e._reactRootContainer=c,e[In]=c.current,cr(e.nodeType===8?e.parentNode:e),ft(function(){Oi(n,c,t,r)}),c}function Vi(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var u=i;i=function(){var c=Ui(o);u.call(c)}}Oi(n,o,e,i)}else o=zf(t,n,e,i,r);return Ui(o)}Fa=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Xt(n.pendingLanes);t!==0&&(ml(n,t|1),He(n,me()),(X&6)===0&&(Bt=me()+500,Wn()))}break;case 13:ft(function(){var r=Tn(e,1);if(r!==null){var i=je();gn(r,e,1,i)}}),$o(e,1)}},hl=function(e){if(e.tag===13){var n=Tn(e,134217728);if(n!==null){var t=je();gn(n,e,134217728,t)}$o(e,134217728)}},La=function(e){if(e.tag===13){var n=Zn(e),t=Tn(e,n);if(t!==null){var r=je();gn(t,e,n,r)}$o(e,n)}},ja=function(){return ne},Aa=function(e,n){var t=ne;try{return ne=e,n()}finally{ne=t}},al=function(e,n,t){switch(n){case"input":if(qi(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=li(r);if(!i)throw Error(a(90));aa(r),qi(r,i)}}}break;case"textarea":fa(e,t);break;case"select":n=t.value,n!=null&&yt(e,!!t.multiple,n,!1)}},Sa=jo,xa=ft;var Pf={usingClientEntryPoint:!1,Events:[pr,Dt,li,wa,ka,jo]},Nr={findFiberByHostInstance:it,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rf={bundleType:Nr.bundleType,version:Nr.version,rendererPackageName:Nr.rendererPackageName,rendererConfig:Nr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ia(e),e===null?null:e.stateNode},findFiberByHostInstance:Nr.findFiberByHostInstance||Tf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$i.isDisabled&&$i.supportsFiber)try{br=$i.inject(Rf),kn=$i}catch{}}return Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pf,Ae.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wo(n))throw Error(a(200));return Mf(e,n,null,t)},Ae.createRoot=function(e,n){if(!Wo(e))throw Error(a(299));var t=!1,r="",i=qs;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Vo(e,1,!1,null,null,t,!1,r,i),e[In]=n.current,cr(e.nodeType===8?e.parentNode:e),new Ho(n)},Ae.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=Ia(n),e=e===null?null:e.stateNode,e},Ae.flushSync=function(e){return ft(e)},Ae.hydrate=function(e,n,t){if(!Bi(n))throw Error(a(200));return Vi(null,e,n,!0,t)},Ae.hydrateRoot=function(e,n,t){if(!Wo(e))throw Error(a(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=qs;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Zs(n,null,e,1,t??null,i,!1,l,o),e[In]=n.current,cr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new bi(n)},Ae.render=function(e,n,t){if(!Bi(n))throw Error(a(200));return Vi(null,e,n,!1,t)},Ae.unmountComponentAtNode=function(e){if(!Bi(e))throw Error(a(40));return e._reactRootContainer?(ft(function(){Vi(null,null,e,!1,function(){e._reactRootContainer=null,e[In]=null})}),!0):!1},Ae.unstable_batchedUpdates=jo,Ae.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Bi(t))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return Vi(e,n,t,!1,r)},Ae.version="18.3.1-next-f1338f8080-20240426",Ae}var ea;function ac(){if(ea)return Qi.exports;ea=1;function h(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h)}catch(s){console.error(s)}}return h(),Qi.exports=oc(),Qi.exports}var na;function uc(){if(na)return Dr;na=1;var h=ac();return Dr.createRoot=h.createRoot,Dr.hydrateRoot=h.hydrateRoot,Dr}var sc=uc();const Xi=({size:h="medium"})=>{const s=h==="small"?"spinner-small":h==="large"?"spinner-large":"spinner-medium";return _.jsx("div",{className:`loading-spinner ${s}`,children:_.jsx("div",{className:"spinner-circle"})})},cc=()=>_.jsxs("div",{className:"header",children:[_.jsx("div",{className:"logo",children:"M"}),_.jsx("div",{className:"title",children:"@eatsjobs/media-mock-extension"})]}),dc=({isActive:h})=>_.jsxs("div",{className:`status ${h?"active":"inactive"}`,children:["Status: ",h?"Active":"Inactive"]});var fc=Object.defineProperty,pc=(h,s,a)=>s in h?fc(h,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):h[s]=a,Me=(h,s,a)=>pc(h,typeof s!="symbol"?s+"":s,a);function Mr(h,s,a){const y=h[s];let v=!1;const C=Object.getOwnPropertyDescriptor(h,s);if(!C||C.configurable!==!1)try{Object.defineProperty(h,s,{writable:!0,configurable:!0,value:a}),v=!0}catch(j){console.warn(`Object.defineProperty failed for ${String(s)}. Attempting fallback...`,j);try{h[s]=a,v=!0,console.log(`Successfully mocked ${String(s)} via direct assignment`)}catch(R){return console.error(`All mocking strategies failed for ${String(s)}:`,R),()=>{try{h[s]=y}catch(T){console.warn(`Failed to restore property ${String(s)}:`,T)}}}}else{console.warn(`Cannot redefine non-configurable property: ${String(s)}. Attempting fallback strategy...`);try{h[s]=a,v=!0,console.log(`Successfully mocked ${String(s)} via direct assignment`)}catch(j){return console.warn(`Fallback assignment also failed for ${String(s)}:`,j),()=>{try{h[s]=y}catch(R){console.warn(`Failed to restore non-configurable property ${String(s)}:`,R)}}}}return()=>{if(v)try{Object.defineProperty(h,s,{writable:!0,configurable:!0,value:y})}catch{try{h[s]=y}catch(j){console.warn(`Failed to restore property ${String(s)} via both methods:`,j)}}}}function Fn({deviceId:h,groupId:s,kind:a,label:y,mockCapabilities:v={width:{min:1,max:1280},height:{min:1,max:720}}}){return{deviceId:h,groupId:s,kind:a,label:y,getCapabilities:()=>v,toJSON(){return{deviceId:`${this.deviceId}`,kind:this.kind,label:`${this.label}`,groupId:`${this.groupId}`}}}}const Gi={aspectRatio:!0,deviceId:!0,displaySurface:!0,echoCancellation:!0,facingMode:!0,frameRate:!0,groupId:!1,height:!0,sampleRate:!1,sampleSize:!1,torch:!0,volume:!0,whiteBalanceMode:!0,width:!0,zoom:!0},mc={...Gi,torch:!1},nt={"iPhone 12":{videoResolutions:[{width:1920,height:1080},{width:1280,height:720},{width:640,height:480},{width:320,height:240}],mediaDeviceInfo:[Fn({deviceId:"A7FB77364106629BF38E043E6B000EE5FD680B9B",kind:"videoinput",label:"Front Camera",groupId:"C1B048C04520A18C3611DC837450814245482489",mockCapabilities:{aspectRatio:{max:4032,min:.00033068783068783067},deviceId:"1A100C35A33042B643BE0438DBBF9FDC95AF1913",facingMode:["user"],frameRate:{max:60,min:1},groupId:"C1B048C04520A18C3611DC837450814245482489",height:{max:3024,min:1},whiteBalanceMode:["manual","continuous"],width:{max:4032,min:1},zoom:{max:4,min:1}}}),Fn({deviceId:"9729B396E0C2B460BC7B69C0E368EB0B605058A9",kind:"videoinput",label:"Back Dual Wide Camera",groupId:"A1F2417053FF79495E7D01AF37A6C4461CE0C060",mockCapabilities:{aspectRatio:{max:4032,min:.00033068783068783067},deviceId:"D87C414E22C375BB0697DCB83A24D97BD520624D",facingMode:["environment"],focusDistance:{min:.12},frameRate:{max:60,min:1},groupId:"A1F2417053FF79495E7D01AF37A6C4461CE0C060",height:{max:3024,min:1},torch:!0,whiteBalanceMode:["manual","continuous"],width:{max:4032,min:1},zoom:{max:2,min:.5}}}),Fn({deviceId:"0B74C1149038CA5235F6C2325E53AE22AA920379",kind:"videoinput",label:"Back Ultra Wide Camera",groupId:"B402A3862F28FB8D54BDF33BD7D41874FE175517",mockCapabilities:{aspectRatio:{max:4032,min:.00033068783068783067},deviceId:"BE00A990BEDE2D324EB0AD51F567EE4ADC24D9B0",facingMode:["environment"],focusDistance:{min:.12},frameRate:{max:60,min:1},groupId:"B402A3862F28FB8D54BDF33BD7D41874FE175517",height:{max:3024,min:1},torch:!0,whiteBalanceMode:["manual","continuous"],width:{max:4032,min:1},zoom:{max:4,min:1}}}),Fn({deviceId:"C92FE814FCB4F2F856CDCBFD1C555429774DD0E2",kind:"videoinput",label:"Back Camera",groupId:"14122C2CE97B69A84360822AB87E8206C32B5BD8",mockCapabilities:{aspectRatio:{max:4032,min:.00033068783068783067},deviceId:"D13A012C1D5C9F9899B40BDA0790184EE57FD282",facingMode:["environment"],focusDistance:{min:.12},frameRate:{max:60,min:1},groupId:"14122C2CE97B69A84360822AB87E8206C32B5BD8",height:{max:3024,min:1},torch:!0,whiteBalanceMode:["manual","continuous"],width:{max:4032,min:1},zoom:{max:4,min:1}}})],supportedConstraints:Gi},"Samsung Galaxy M53":{videoResolutions:[{width:1920,height:1080},{width:1280,height:720},{width:640,height:480}],mediaDeviceInfo:[Fn({deviceId:"87fcafb209f5ff2a6d7c8a5d14afe1c9aba9f209330e93933e545e40b102b35f",groupId:"f70f63d2f4eea57dafe6c6b60833aa69a02f06bb0a6878cb277fb4d70daa9020",kind:"videoinput",label:"camera2 1, facing front",mockCapabilities:{aspectRatio:{max:2400,min:.0009191176470588235},deviceId:"87fcafb209f5ff2a6d7c8a5d14afe1c9aba9f209330e93933e545e40b102b35f",facingMode:["user"],frameRate:{max:30,min:1},groupId:"f70f63d2f4eea57dafe6c6b60833aa69a02f06bb0a6878cb277fb4d70daa9020",height:{max:1088,min:1},resizeMode:["none","crop-and-scale"],width:{max:2400,min:1}}}),Fn({deviceId:"81cb5898aebd672ef65d04ed1bc7b00c704f2b6aa94200bc5556ff02c89ea14d",groupId:"7300f91d6cb037dcaa6fe16abb59f4e9f92fb471e2280ff0e313e07c49cb536c",kind:"videoinput",label:"camera2 2, facing front",mockCapabilities:{aspectRatio:{max:2400,min:.0009191176470588235},deviceId:"81cb5898aebd672ef65d04ed1bc7b00c704f2b6aa94200bc5556ff02c89ea14d",facingMode:["user"],frameRate:{max:30,min:1},groupId:"7300f91d6cb037dcaa6fe16abb59f4e9f92fb471e2280ff0e313e07c49cb536c",height:{max:1088,min:1},resizeMode:["none","crop-and-scale"],width:{max:2400,min:1}}}),Fn({deviceId:"99be6eecad8c050052df5dbb08b0460d2715b0a3b18fc5c7f08d6073d312ca34",groupId:"40f44b864c99ab042a21cf87df882d0ef5c7f88f7cbfcee74cefc1e393b8616b",kind:"videoinput",label:"camera2 0, facing back",mockCapabilities:{aspectRatio:{max:3840,min:.000462962962962963},deviceId:"99be6eecad8c050052df5dbb08b0460d2715b0a3b18fc5c7f08d6073d312ca34",facingMode:["environment"],frameRate:{max:30,min:1},groupId:"40f44b864c99ab042a21cf87df882d0ef5c7f88f7cbfcee74cefc1e393b8616b",height:{max:2160,min:1},resizeMode:["none","crop-and-scale"],width:{max:3840,min:1},torch:!0}})],supportedConstraints:Gi},"Mac Desktop":{videoResolutions:[{width:1920,height:1080},{width:1280,height:720},{width:640,height:480}],mediaDeviceInfo:[Fn({deviceId:"e91a0ba82ba051029709163c442d340a3919dfabd",groupId:"7ce19c839ef9ab1a4cba8d4dd4d3c1bbbf3ad",kind:"videoinput",label:"FaceTime HD Camera (2C0E:82E3)",mockCapabilities:{aspectRatio:{max:1920,min:.0005208333333333333},backgroundBlur:[!1],deviceId:"370CF6B3449B7B73599E8DAEEE75FB41788A0712",frameRate:{max:30,min:1},groupId:"F2EFF7249C97B5531FF959C8F977138341165F6B",height:{max:1920,min:1},width:{max:1920,min:1}}})],supportedConstraints:mc}};async function hc(h,s=6e4){const a=new Image;a.src=h;try{return await Promise.race([a.decode(),new Promise((y,v)=>setTimeout(()=>v(new Error(`Image load timeout after ${s/1e3} seconds`)),s))]),a}catch(y){throw new Error(`Failed to load image: ${h}. Details: ${y}`)}}function gc(){return{mediaDevices:{getUserMedia:!0,getSupportedConstraints:!0,enumerateDevices:!0}}}function ta(h){var s;const a=["mp4","webm","ogg","mov","avi","mkv","flv","wmv","m4v","3gp","mpg","mpeg","asf","rm","vob"],y=(s=h.split(".").pop())==null?void 0:s.toLowerCase();return a.includes(y??"")}function Tr(){return typeof requestAnimationFrame=="function"}function vc(h,s=6e4){return new Promise((a,y)=>{let v=null,C=!1;const j=()=>{v!==null&&(clearTimeout(v),v=null),h.removeEventListener("loadeddata",R),h.removeEventListener("error",T)},R=async()=>{if(!C){C=!0,j();try{await h.play(),a()}catch(b){console.warn("Video autoplay failed (may be blocked by browser):",b),a()}}},T=()=>{var b;C||(C=!0,j(),console.error("Failed to load video source. Ensure the format is supported and the URL is valid."),console.error("Video error details:",{error:(b=h.error)==null?void 0:b.message,target:h,networkState:h.networkState,readyState:h.readyState,currentSrc:h.currentSrc}),y(new Error(`Video failed to load: ${h.src}`)))};v=setTimeout(()=>{C||(C=!0,j(),y(new Error(`Video loading timed out after ${s/1e3} seconds`)))},s),h.addEventListener("loadeddata",R,{once:!0}),h.addEventListener("error",T,{once:!0}),h.load()})}async function yc(h,s=6e4){if(ta(h)){const a=document.createElement("video");return a.src=h,a.muted=!0,a.playsInline=!0,a.loop=!0,a.autoplay=!0,a.hidden=!0,a.crossOrigin="anonymous",await vc(a,s),a}else return await hc(h,s)}class wc{constructor(){Me(this,"settings",{mediaURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAgMBgQn2nAAAAABJRU5ErkJggg==",device:nt["iPhone 12"],constraints:nt["iPhone 12"].supportedConstraints,canvasScaleFactor:1,mediaTimeout:6e4}),Me(this,"mediaMockImageId","media-mock-image"),Me(this,"mediaMockCanvasId","media-mock-canvas"),Me(this,"currentImage"),Me(this,"currentVideo"),Me(this,"mapUnmockFunction",new Map),Me(this,"currentStream"),Me(this,"intervalId",null),Me(this,"rafId",null),Me(this,"debug",!1),Me(this,"canvas"),Me(this,"ctx"),Me(this,"mockedVideoTracksHandler",s=>s),Me(this,"fps",30),Me(this,"resolution",{width:640,height:480}),Me(this,"lastDrawTime",0)}async setMediaURL(s){if(!s||typeof s!="string"||s.trim()==="")throw new Error("Invalid mediaURL: must be a non-empty string");const a=await yc(s,this.settings.mediaTimeout);return this.settings.mediaURL=s,a instanceof HTMLImageElement?(this.currentVideo&&(this.currentVideo.pause(),this.currentVideo.src=""),this.currentImage=a,this.currentVideo=void 0):a instanceof HTMLVideoElement&&(this.currentImage&&(this.currentImage.src=""),this.currentVideo=a,this.currentImage=void 0),(this.intervalId!==null||this.rafId!==null)&&await this.startDrawingLoop(),this}async startDrawingLoop(){this.stopDrawingLoop();const{width:s,height:a}=this.resolution;if(ta(this.settings.mediaURL)){if(!this.currentVideo)throw new Error("Video media not loaded");this.startVideoDrawingLoop(s,a)}else{if(!this.currentImage)throw new Error("Image media not loaded");this.debug&&console.log(`
          Canvas: ${s}x${a},
          Image: ${this.currentImage.naturalWidth}x${this.currentImage.naturalHeight}`),this.startImageDrawingLoop(s,a)}}startVideoDrawingLoop(s,a){const y=1e3/this.fps;this.lastDrawTime=performance.now();const v=()=>{if(!this.ctx||!this.currentVideo)return;const C=performance.now();C-this.lastDrawTime>=y&&(this.ctx.clearRect(0,0,s,a),this.ctx.fillStyle="#ffffff",this.ctx.fillRect(0,0,s,a),this.ctx.drawImage(this.currentVideo,0,0,s,a),this.lastDrawTime=C),Tr()&&(this.rafId=requestAnimationFrame(v))};Tr()?this.rafId=requestAnimationFrame(v):this.intervalId=setInterval(()=>{!this.ctx||!this.currentVideo||(this.ctx.clearRect(0,0,s,a),this.ctx.fillStyle="#ffffff",this.ctx.fillRect(0,0,s,a),this.ctx.drawImage(this.currentVideo,0,0,s,a))},y)}startImageDrawingLoop(s,a){const y=()=>{if(!this.ctx||!this.currentImage)return;this.currentImage.id=this.mediaMockImageId,this.ctx.clearRect(0,0,s,a),this.ctx.fillStyle="#ffffff",this.ctx.fillRect(0,0,s,a);const{naturalWidth:v,naturalHeight:C}=this.currentImage;if(C===0||a===0||!Number.isFinite(v/C)||!Number.isFinite(s/a))return;const j=v/C,R=s/a;let T,b,$,Y;const Q=this.settings.canvasScaleFactor;j>R?(T=s*Q,b=s*Q/j,$=(s-T)/2,Y=(a-b)/2):(b=a*Q,T=a*Q*j,$=(s-T)/2,Y=(a-b)/2),this.ctx.drawImage(this.currentImage,$,Y,T,b),Tr()&&(this.rafId=requestAnimationFrame(y))};if(Tr())this.rafId=requestAnimationFrame(y);else{const v=1e3/this.fps;this.intervalId=setInterval(y,v)}}stopDrawingLoop(){this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.intervalId!==null&&(clearInterval(this.intervalId),this.intervalId=null),this.lastDrawTime=0}addMockDevice(s){return this.settings.device.mediaDeviceInfo.push(s),this.triggerDeviceChange(),this}removeMockDevice(s){return this.settings.device.mediaDeviceInfo=this.settings.device.mediaDeviceInfo.filter(a=>a.deviceId!==s),this.triggerDeviceChange(),this}triggerDeviceChange(){navigator.mediaDevices.dispatchEvent(new Event("devicechange"))}enableDebugMode(){return this.debug=!0,this.canvas!=null&&document.querySelector(this.mediaMockCanvasId)==null&&(this.canvas.style.border="10px solid red",document.body.append(this.canvas)),this.currentImage!=null&&document.querySelector(this.mediaMockImageId)==null&&(this.currentImage.style.border="10px solid red",document.body.append(this.currentImage)),this}disableDebugMode(){var s,a;this.debug=!1;const y=document.getElementById(this.mediaMockCanvasId),v=document.getElementById(this.mediaMockImageId);return y==null||y.remove(),v==null||v.remove(),(s=this.currentImage)!=null&&s.parentNode&&(this.currentImage.style.border="",this.currentImage.remove()),(a=this.canvas)!=null&&a.parentNode&&(this.canvas.style.border="",this.canvas.remove()),this}setMockedVideoTracksHandler(s){return this.mockedVideoTracksHandler=s,this}mock(s,a=gc()){if(this.settings.device=s,typeof navigator.mediaDevices>"u"){class y extends EventTarget{}Mr(navigator,"mediaDevices",new y)}if(a!=null&&a.mediaDevices.getUserMedia){const y=Mr(navigator.mediaDevices,"getUserMedia",v=>this.getMockStream(v));this.mapUnmockFunction.set("getUserMedia",y)}if(a!=null&&a.mediaDevices.getSupportedConstraints){const y=Mr(navigator.mediaDevices,"getSupportedConstraints",()=>this.settings.constraints);this.mapUnmockFunction.set("getSupportedConstraints",y)}if(a!=null&&a.mediaDevices.enumerateDevices){const y=Mr(navigator.mediaDevices,"enumerateDevices",async()=>this.settings.device.mediaDeviceInfo);this.mapUnmockFunction.set("enumerateDevices",y)}return this}unmock(){return this.stopMockStream(),this.disableDebugMode(),this.mapUnmockFunction.forEach(s=>{s()}),this.mapUnmockFunction.clear(),this}stopMockStream(){var s,a,y,v;this.stopDrawingLoop(),(a=(s=this.currentStream)==null?void 0:s.getVideoTracks())==null||a.forEach(C=>{C.stop()}),(v=(y=this.currentStream)==null?void 0:y.stop)==null||v.call(y),this.currentStream=void 0,this.currentVideo&&(this.currentVideo.pause(),this.currentVideo.src="",this.currentVideo=void 0),this.currentImage&&(this.currentImage.src="",this.currentImage=void 0),this.canvas&&(this.canvas.parentNode&&this.canvas.remove(),this.canvas=void 0),this.ctx=void 0}setCanvasScaleFactor(s){return this.settings.canvasScaleFactor=Math.max(.1,s),this}setMediaTimeout(s){if(s<=0)throw new Error("Media timeout must be a positive number");return this.settings.mediaTimeout=s,this}async getMockStream(s){this.resolution=this.getResolution(s,this.settings.device),this.fps=this.getFPSFromConstraints(s),this.canvas=document.createElement("canvas"),this.canvas.id=this.mediaMockCanvasId;const{width:a,height:y}=this.resolution;if(this.canvas.width=a,this.canvas.height=y,this.ctx=this.canvas.getContext("2d"),!this.ctx)throw new Error("Failed to get 2D canvas context");this.ctx.fillStyle="#ffffff",this.ctx.fillRect(0,0,a,y),await this.setMediaURL(this.settings.mediaURL),await this.startDrawingLoop(),this.debug&&this.enableDebugMode();const v=this.canvas.captureStream(this.fps),C=(v==null?void 0:v.getVideoTracks())??[],j=this.getFacingModeFromConstraints(s),R=this.getDeviceForFacingMode(j,this.settings.device);return C.forEach(T=>{if(R!=null&&R.label&&Object.defineProperty(T,"label",{value:R.label,writable:!1,configurable:!1}),R!=null&&R.deviceId&&Object.defineProperty(T,"id",{value:R.deviceId,writable:!1,configurable:!1}),!T.getCapabilities)if(R!=null&&R.getCapabilities)T.getCapabilities=(function(){return R.getCapabilities()}).bind(T);else{const $=this.settings.device.videoResolutions,Y=$.map(ge=>ge.width),Q=$.map(ge=>ge.height);T.getCapabilities=(function(){return{width:{min:Math.min(...Y),max:Math.max(...Y)},height:{min:Math.min(...Q),max:Math.max(...Q)},frameRate:{min:1,max:60},facingMode:["user","environment"],resizeMode:["none","crop-and-scale"]}}).bind(T)}const b=T.getSettings.bind(T);T.getSettings=()=>{const $=b();return $.frameRate===void 0&&($.frameRate=this.fps),($.width===void 0||$.height===void 0)&&($.width=this.resolution.width,$.height=this.resolution.height),$}}),this.currentStream=new MediaStream(this.mockedVideoTracksHandler(C)),this.currentStream}getFPSFromConstraints(s){return typeof s.video=="object"&&s.video.frameRate?typeof s.video.frameRate=="number"?s.video.frameRate:s.video.frameRate.ideal||30:30}getFacingModeFromConstraints(s){if(typeof s.video=="object"&&s.video.facingMode){const a=s.video.facingMode;if(typeof a=="string")return a;const y=a;if(y.ideal){const v=y.ideal;return Array.isArray(v)?v[0]:v}if(y.exact){const v=y.exact;return Array.isArray(v)?v[0]:v}}return null}getDeviceForFacingMode(s,a){const y=a.mediaDeviceInfo.filter(C=>C.kind==="videoinput");if(!y.length)return;if(!s)return y[0];const v=y.filter(C=>{const j=C.getCapabilities().facingMode;return Array.isArray(j)&&j.includes(s)});return v.length>0?v[v.length-1]:y[0]}getResolution(s,a){const y=window.innerHeight>window.innerWidth,v=s.video||{},C=this.extractConstraintValue(v.width,640),j=this.extractConstraintValue(v.height,480);let R=this.findExactMatch(a.videoResolutions,C,j,y);return R||(R=this.findBestFitResolution(a.videoResolutions,C,j,y)),R||(R=this.getFallbackResolution(a.videoResolutions,y)),R}extractConstraintValue(s,a){return typeof s=="number"?s:s&&typeof s=="object"?s.ideal??s.exact??s.max??a:a}findExactMatch(s,a,y,v){const C=s.find(j=>j.width===a&&j.height===y);if(C)return v&&C.width>C.height?{width:C.height,height:C.width}:C;if(v){const j=s.find(R=>R.width===y&&R.height===a);if(j)return{width:j.height,height:j.width}}}findBestFitResolution(s,a,y,v){const C=a/y,j=a*y,R=s.map(T=>{const b=v&&T.width>T.height?{width:T.height,height:T.width}:T,$=b.width/b.height,Y=b.width*b.height,Q=Math.abs($-C),ge=Math.abs(Y-j)/j,le=Q*2+ge;return{resolution:b,score:le}});return R.sort((T,b)=>T.score-b.score),R[0].resolution}getFallbackResolution(s,a){if(s.length===0)return{width:640,height:480};if(a){const y=s.find(C=>C.height>C.width);if(y)return y;const v=s[0];return{width:v.height,height:v.width}}return s.find(y=>y.width>=y.height)||s[0]}}new wc;const kc=({selectedDevice:h,autoDetected:s,isActive:a,onDeviceChange:y})=>_.jsxs("div",{className:"section",children:[_.jsxs("div",{className:"section-title",children:["Device Configuration",s&&_.jsx("span",{className:"auto-badge",children:"Auto"})]}),_.jsx("div",{className:"device-selector",children:_.jsx("select",{className:"select device-select",value:h,onChange:v=>y(v.target.value),disabled:a,children:Object.entries(nt).map(([v,C])=>{const R=v.includes("iPhone")||v.includes("Samsung")?"📱":"🖥️",T=C.videoResolutions.length,b=C.mediaDeviceInfo.filter($=>$.kind==="videoinput").length;return _.jsxs("option",{value:v,children:[R," ",v," • ",b," 📷 • ",T," 📐"]},v)})})}),h&&nt[h]&&_.jsxs("div",{className:"device-info",children:[_.jsxs("div",{className:"device-detail",children:[_.jsx("strong",{children:"📐 Resolutions:"}),_.jsx("ul",{children:nt[h].videoResolutions.map(v=>_.jsxs("li",{children:[v.width,"x",v.height]},`${v.width}x${v.height}`))})]}),_.jsxs("div",{className:"device-detail",children:[_.jsx("strong",{children:"📷 Cameras:"})," ",nt[h].mediaDeviceInfo.filter(v=>v.kind==="videoinput").length," video input",nt[h].mediaDeviceInfo.filter(v=>v.kind==="videoinput").length!==1?"s":""]}),_.jsxs("div",{className:"device-detail",children:[_.jsx("strong",{children:"📝 Type:"})," ",h.includes("iPhone")||h.includes("Samsung")?"Mobile Device":"Desktop Device"]})]})]}),Sc=({mediaUrl:h,uploadedFile:s,uploadedFileName:a,isDragging:y,isActive:v,onFileUpload:C,onMediaUrlChange:j,onClearFile:R,onDragEnter:T,onDragLeave:b,onDragOver:$,onDrop:Y})=>_.jsxs("div",{className:"section",children:[_.jsx("div",{className:"section-title",children:"Media Source"}),_.jsxs("div",{className:`upload-section ${y?"dragging":""}`,onDragEnter:T,onDragLeave:b,onDragOver:$,onDrop:Y,children:[_.jsx("input",{id:"file-upload",type:"file",accept:"image/*,video/*",onChange:C,disabled:v,className:"file-input"}),_.jsx("label",{htmlFor:"file-upload",className:`button button-upload ${v?"disabled":""} ${y?"drag-active":""}`,children:y?"📎 Drop file here":"📁 Upload Local File or Drag & Drop"})]}),s&&_.jsxs("div",{className:"uploaded-file-info",children:[_.jsxs("div",{className:"file-details",children:[_.jsx("span",{className:"file-icon",children:s.type.startsWith("video/")?"🎥":"🖼️"}),_.jsx("span",{className:"file-name",children:a}),_.jsxs("span",{className:"file-size",children:["(",(s.size/1024/1024).toFixed(1)," MB)"]})]}),_.jsx("button",{className:"button button-small button-danger",onClick:R,disabled:v,children:"✕"})]}),_.jsx("input",{type:"text",className:"input",placeholder:"Or enter image/video URL",value:s?"":h,onChange:Q=>j(Q.target.value),disabled:v||!!s})]}),xc=({isActive:h,loading:s,loadingAction:a,debugMode:y,onStart:v,onStop:C,onTest:j,onDebugToggle:R})=>_.jsxs(_.Fragment,{children:[_.jsx("div",{className:"section",children:_.jsxs("label",{className:"checkbox-label",children:[_.jsx("input",{type:"checkbox",checked:y,onChange:T=>R(T.target.checked),disabled:h}),"Enable debug mode"]})}),_.jsxs("div",{className:"section buttons",children:[_.jsx("button",{className:"button button-primary",onClick:v,disabled:s||h,children:s&&a.includes("Starting")?_.jsxs(_.Fragment,{children:[_.jsx(Xi,{size:"small"}),"Starting..."]}):"▶ Start Mock"}),_.jsx("button",{className:"button button-danger",onClick:C,disabled:s||!h,children:s&&a.includes("Stopping")?_.jsxs(_.Fragment,{children:[_.jsx(Xi,{size:"small"}),"Stopping..."]}):"⏹ Stop Mock"})]}),_.jsx("div",{className:"section",children:_.jsx("button",{className:"button button-secondary full-width",onClick:j,disabled:s,children:s&&a.includes("Testing")?_.jsxs(_.Fragment,{children:[_.jsx(Xi,{size:"small"}),"Testing..."]}):"🎯 Test Camera Access"})})]}),Ec=({message:h,type:s})=>h?_.jsx("div",{className:`message ${s}`,children:h}):null,Cc={version:"1.2.2"};function _c(){return Cc.version}const Ic="1.0.0",Nc=_c(),Dc=()=>_.jsxs("div",{className:"version-info",children:[_.jsxs("div",{className:"version-item",children:[_.jsx("span",{className:"version-label",children:"🔧 Extension"}),_.jsxs("span",{className:"version-value",children:["v",Ic]})]}),_.jsxs("div",{className:"version-item",children:[_.jsx("span",{className:"version-label",children:"📦 Media Mock"}),_.jsxs("span",{className:"version-value",children:["v",Nc]})]})]}),Mc=`:root {
  --bg-primary: linear-gradient(135deg, #0d1b2e 0%, #1a3367 55%, #2ec1ce 100%);
  --bg-container: rgba(255, 255, 255, 0.97);
  --bg-device-info: rgba(255, 255, 255, 0.9);
  --text-primary: #1a202c;
  --text-secondary: #2d3748;
  --border-primary: rgba(255, 255, 255, 0.15);
  --border-secondary: rgba(45, 55, 72, 0.2);
  --accent-primary: #2ec1ce;
  --accent-secondary: #1a3367;
  --success-bg: rgba(16, 185, 129, 0.1);
  --success-color: #059669;
  --success-border: rgba(16, 185, 129, 0.3);
  --error-bg: rgba(239, 68, 68, 0.1);
  --error-color: #dc2626;
  --error-border: rgba(239, 68, 68, 0.3);
  --version-bg: rgba(255, 255, 255, 0.6);
  --version-value-bg: rgba(46, 193, 206, 0.1);
  --version-value-border: rgba(46, 193, 206, 0.2);
  --version-label-color: #64748b;
  --version-value-color: #1a3367;
}

body {
  margin: 0;
  padding: 0;
  width: 100%;
  min-width: 24.5rem;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 0.875rem;
  background: var(--bg-primary);
  color: var(--text-primary);
  overflow-x: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0.75rem 0;
  box-sizing: border-box;
}

.popup-container {
  padding: 1.5rem;
  width: calc(100% - 1.5rem);
  min-height: 40rem;
  max-height: none;
  overflow-y: visible;
  background: var(--bg-container);
  backdrop-filter: blur(0.625rem);
  border-radius: 1rem;
  margin: 0 0.75rem;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.15);
  border: 1px solid var(--border-primary);
  animation: popupAppear 0.4s ease-out;
  box-sizing: border-box;
  flex-shrink: 0;
}

/* Custom Scrollbar */
.popup-container::-webkit-scrollbar {
  width: 0.375rem;
}

.popup-container::-webkit-scrollbar-track {
  background: transparent;
}

.popup-container::-webkit-scrollbar-thumb {
  background: rgba(46, 193, 206, 0.3);
  border-radius: 0.1875rem;
  transition: background 0.3s ease;
}

.popup-container::-webkit-scrollbar-thumb:hover {
  background: rgba(46, 193, 206, 0.5);
}

@keyframes popupAppear {
  from {
    opacity: 0;
    transform: translateY(-1.25rem) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1.25rem;
  border-bottom: 0.125rem solid rgba(46, 193, 206, 0.15);
  position: relative;
}

.header::after {
  content: '';
  position: absolute;
  bottom: -0.125rem;
  left: 0;
  width: 3.75rem;
  height: 0.125rem;
  background: linear-gradient(90deg, #2ec1ce, #1a3367);
  border-radius: 0.0625rem;
}

.logo {
  width: 2rem;
  height: 2rem;
  margin-right: 0.75rem;
  background: linear-gradient(135deg, #2ec1ce 0%, #1a3367 100%);
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 0 0.25rem 0.75rem rgba(46, 193, 206, 0.35);
  position: relative;
  overflow: hidden;
}

.logo::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
  transform: rotate(45deg);
  transition: all 0.6s;
  opacity: 0;
}

.logo:hover::before {
  animation: shimmer 0.6s ease-out;
  opacity: 1;
}

@keyframes shimmer {
  0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
  100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
}

.title {
  font-size: 1.25rem;
  font-weight: 700;
  background: linear-gradient(135deg, #0d1b2e, #2ec1ce);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.message {
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  font-size: 0.8125rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  animation: slideIn 0.3s ease-out;
  position: relative;
  overflow: hidden;
}

.message::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0.25rem;
  border-radius: 0.125rem;
}

.message.success {
  background: var(--success-bg);
  color: var(--success-color);
  border: 1px solid var(--success-border);
  box-shadow: 0 2px 8px rgba(21, 87, 36, 0.1);
}

.message.success::before {
  background: var(--success-color);
}

.message.success::after {
  content: '✓';
  font-weight: bold;
  color: var(--success-color);
}

.message.error {
  background: var(--error-bg);
  color: var(--error-color);
  border: 1px solid var(--error-border);
  box-shadow: 0 2px 8px rgba(114, 28, 36, 0.1);
}

.message.error::before {
  background: var(--error-color);
}

.message.error::after {
  content: '⚠';
  font-weight: bold;
  color: var(--error-color);
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-0.625rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.status {
  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.status::before {
  content: '';
  position: absolute;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.status.active {
  background: linear-gradient(135deg, rgba(46, 193, 206, 0.15) 0%, rgba(26, 51, 103, 0.1) 100%);
  color: #1a3367;
  border: 2px solid rgba(46, 193, 206, 0.4);
  box-shadow: 0 4px 12px rgba(46, 193, 206, 0.2);
}

.status.active::before {
  background: #2ec1ce;
  left: 1rem;
}

.status.active::after {
  content: 'ACTIVE';
  font-size: 0.6875rem;
  letter-spacing: 0.0625rem;
}

.status.inactive {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  color: #64748b;
  border: 0.125rem solid rgba(100, 116, 139, 0.2);
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
}

.status.inactive::before {
  background: #94a3b8;
  left: 1rem;
}

.status.inactive::after {
  content: 'INACTIVE';
  font-size: 0.6875rem;
  letter-spacing: 0.0625rem;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }
}

.section {
  margin-bottom: 2rem;
  position: relative;
  animation: fadeInUp 0.4s ease-out;
  animation-fill-mode: both;
}

.section:nth-child(1) { animation-delay: 0.1s; }
.section:nth-child(2) { animation-delay: 0.2s; }
.section:nth-child(3) { animation-delay: 0.3s; }
.section:nth-child(4) { animation-delay: 0.4s; }
.section:nth-child(5) { animation-delay: 0.5s; }
.section:nth-child(6) { animation-delay: 0.6s; }

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(1.25rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section-title {
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  background: linear-gradient(135deg, #2ec1ce, #1a3367);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.75rem;
  letter-spacing: 0.0625rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.section-title::before {
  content: '';
  width: 0.1875rem;
  height: 1rem;
  background: linear-gradient(135deg, #2ec1ce, #1a3367);
  border-radius: 0.125rem;
}

.select, .input {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 0.125rem solid rgba(46, 193, 206, 0.25);
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(0.3125rem);
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
  box-sizing: border-box;
  transition: all 0.3s ease;
  position: relative;
}

.select:focus, .input:focus {
  outline: none;
  border-color: #2ec1ce;
  box-shadow: 0 0 0 0.1875rem rgba(46, 193, 206, 0.15);
  background: rgba(255, 255, 255, 1);
  transform: translateY(-0.0625rem);
}

.select:hover:not(:disabled), .input:hover:not(:disabled) {
  border-color: rgba(46, 193, 206, 0.5);
}

.select:disabled, .input:disabled {
  background: rgba(248, 249, 250, 0.8);
  color: #80868b;
  cursor: not-allowed;
  border-color: rgba(0, 0, 0, 0.1);
}

/* Enhanced Device Selector */
.device-selector {
  position: relative;
  display: flex;
  align-items: center;
}

.device-select {
  flex: 1;
  padding-right: 3.125rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.device-preview-icon {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.25rem;
  pointer-events: none;
  z-index: 2;
  filter: drop-shadow(0 0.125rem 0.25rem rgba(0,0,0,0.1));
  transition: all 0.3s ease;
}

.device-select:focus + .device-preview-icon {
  transform: translateY(-50%) scale(1.1);
}

.device-select option {
  padding: 0.5rem 0.75rem;
  font-size: 0.8125rem;
  background: white;
  color: #1a202c;
}


.button {
  padding: 0.875rem 1.25rem;
  border: none;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 0.03125rem;
}

.button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.button:hover:not(:disabled)::before {
  left: 100%;
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.button:active:not(:disabled) {
  transform: translateY(0.0625rem);
}

.button-primary {
  background: linear-gradient(135deg, #2ec1ce 0%, #1a9aaa 100%);
  color: white;
  box-shadow: 0 0.25rem 0.9375rem rgba(46, 193, 206, 0.35);
}

.button-primary:hover:not(:disabled) {
  transform: translateY(-0.125rem);
  box-shadow: 0 0.375rem 1.25rem rgba(46, 193, 206, 0.5);
}

.button-secondary {
  background: rgba(255, 255, 255, 0.9);
  color: #1a3367;
  border: 0.125rem solid rgba(46, 193, 206, 0.4);
  font-size: 0.8125rem;
  padding: 0.75rem 1.125rem;
  backdrop-filter: blur(0.3125rem);
}

.button-secondary:hover:not(:disabled) {
  background: rgba(255, 255, 255, 1);
  border-color: #2ec1ce;
  transform: translateY(-0.0625rem);
  box-shadow: 0 0.25rem 0.75rem rgba(46, 193, 206, 0.2);
}

.button-danger {
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
  color: white;
  box-shadow: 0 0.25rem 0.9375rem rgba(238, 90, 82, 0.3);
}

.button-danger:hover:not(:disabled) {
  transform: translateY(-0.125rem);
  box-shadow: 0 0.375rem 1.25rem rgba(238, 90, 82, 0.4);
}

.full-width {
  width: 100%;
}

.buttons {
  display: flex;
  gap: 0.5rem;
}

.buttons .button {
  flex: 1;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  cursor: pointer;
  color: #1a202c;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  position: relative;
}

.checkbox-label:hover {
  color: #2ec1ce;
}

.checkbox-label input[type="checkbox"] {
  margin: 0;
  width: 1.125rem;
  height: 1.125rem;
  accent-color: #2ec1ce;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.checkbox-label input[type="checkbox"]:checked {
  transform: scale(1.1);
}

.device-info {
  background: var(--bg-device-info);
  border: 0.0625rem solid var(--border-secondary);
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  margin-top: 0.75rem;
  font-size: 0.8125rem;
  color: var(--text-secondary);
  backdrop-filter: blur(0.3125rem);
  transition: all 0.3s ease;
  animation: deviceInfoSlide 0.3s ease-out;
}

@keyframes deviceInfoSlide {
  from {
    opacity: 0;
    transform: translateX(-0.625rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.device-detail {
  margin-bottom: 0.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
}

.device-detail:last-child {
  margin-bottom: 0;
}

.device-detail strong {
  color: var(--text-secondary);
  font-weight: 700;
  min-width: 5rem;
}

.auto-badge {
  background: linear-gradient(135deg, #2ec1ce 0%, #1a9aaa 100%);
  color: white;
  font-size: 0.625rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  margin-left: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  box-shadow: 0 0.125rem 0.375rem rgba(46, 193, 206, 0.35);
  position: relative;
  overflow: hidden;
}

.auto-badge::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  animation: autoShimmer 2s infinite;
}

@keyframes autoShimmer {
  0% { left: -100%; }
  50% { left: -100%; }
  100% { left: 100%; }
}

/* File Upload Styles */
.upload-section {
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  border-radius: 0.75rem;
  position: relative;
}

.upload-section.dragging {
  background: rgba(46, 193, 206, 0.05);
  border: 0.125rem dashed rgba(46, 193, 206, 0.5);
  padding: 0.5rem;
  margin: -0.5rem;
  margin-bottom: 0.5rem;
  animation: dragPulse 1s infinite;
}

@keyframes dragPulse {
  0%, 100% {
    background: rgba(46, 193, 206, 0.05);
  }
  50% {
    background: rgba(46, 193, 206, 0.1);
  }
}

.file-input {
  display: none;
}

.button-upload {
  width: 100%;
  background: linear-gradient(135deg, #2ec1ce 0%, #1a9aaa 100%);
  color: white;
  border: 2px dashed rgba(46, 193, 206, 0.4);
  transition: all 0.3s ease;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}

.button-upload:hover:not(.disabled) {
  border-color: #2ec1ce;
  transform: translateY(-0.0625rem);
  box-shadow: 0 0.375rem 1.25rem rgba(46, 193, 206, 0.35);
}

.button-upload.disabled {
  background: rgba(248, 249, 250, 0.8);
  color: #80868b;
  cursor: not-allowed;
  border-color: rgba(0, 0, 0, 0.1);
}

.button-upload.drag-active {
  background: linear-gradient(135deg, #1a9aaa 0%, #1a3367 100%);
  border-color: #2ec1ce;
  transform: translateY(-0.125rem) scale(1.02);
  box-shadow: 0 0.5rem 1.5625rem rgba(46, 193, 206, 0.4);
  animation: dropZone 0.3s ease-out;
}

@keyframes dropZone {
  0% {
    transform: translateY(-0.0625rem) scale(1);
  }
  100% {
    transform: translateY(-0.125rem) scale(1.02);
  }
}

.uploaded-file-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, rgba(46, 193, 206, 0.08) 0%, rgba(26, 51, 103, 0.06) 100%);
  border: 0.125rem solid rgba(46, 193, 206, 0.25);
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  margin-bottom: 0.75rem;
  backdrop-filter: blur(0.3125rem);
  animation: slideIn 0.3s ease-out;
}

.file-details {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  flex: 1;
  min-width: 0;
}

.file-icon {
  font-size: 1.25rem;
  filter: drop-shadow(0 0.125rem 0.25rem rgba(0,0,0,0.1));
}

.file-name {
  font-weight: 600;
  color: #1a3367;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 8.75rem;
}

.file-size {
  font-size: 0.6875rem;
  color: #2ec1ce;
  white-space: nowrap;
  font-weight: 500;
}

.button-small {
  padding: 0.375rem 0.625rem;
  font-size: 0.75rem;
  min-width: unset;
  border-radius: 0.5rem;
  text-transform: none;
  letter-spacing: normal;
}

.button-small:hover:not(:disabled) {
  transform: translateY(-0.0625rem);
  box-shadow: 0 0.25rem 0.75rem rgba(238, 90, 82, 0.3);
}

/* Loading Spinner Styles */
.loading-spinner {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.spinner-circle {
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.spinner-small .spinner-circle {
  width: 0.875rem;
  height: 0.875rem;
  border-width: 0.125rem;
  margin-right: 0.5rem;
}

.spinner-medium .spinner-circle {
  width: 1.25rem;
  height: 1.25rem;
  border-width: 0.125rem;
}

.spinner-large .spinner-circle {
  width: 2rem;
  height: 2rem;
  border-width: 0.1875rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Button loading states */
.button:disabled .loading-spinner {
  opacity: 0.8;
}

.button .loading-spinner {
  margin-right: 0.5rem;
}

/* Responsive Design Improvements */
@media (max-width: 25rem) {
  body {
    min-width: 20rem;
  }

  .popup-container {
    width: calc(100% - 1rem);
    min-height: 35rem;
    padding: 1rem;
    margin: 0 0.5rem;
  }

  .title {
    font-size: 1rem;
  }

  .section {
    margin-bottom: 1.5rem;
  }

  .button {
    padding: 0.625rem 0.875rem;
    font-size: 0.8125rem;
  }

  .device-info {
    padding: 0.5rem 0.625rem;
    font-size: 0.75rem;
  }

  .device-detail ul {
    padding-left: 1rem;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .file-details .file-name {
    max-width: 5rem;
  }

  .device-detail {
    font-size: 0.6875rem;
  }

  .select, .input {
    padding: 0.625rem 0.75rem;
    font-size: 0.8125rem;
  }

  .header {
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
  }

  .status {
    margin-bottom: 1.25rem;
  }
}

@media (min-width: 28.125rem) {
  .popup-container {
    width: calc(100% - 2rem);
    min-height: 42rem;
    padding: 1.75rem;
    margin: 0 1rem;
  }

  .section {
    margin-bottom: 2.25rem;
  }

  .button {
    padding: 1rem 1.25rem;
  }

  .device-info {
    padding: 1rem 1.25rem;
  }

  .header {
    margin-bottom: 2.25rem;
    padding-bottom: 1.5rem;
  }

  .status {
    margin-bottom: 1.75rem;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: linear-gradient(135deg, #060d18 0%, #0d1b2e 55%, #1a9aaa 100%);
    --bg-container: rgba(15, 23, 42, 0.97);
    --bg-device-info: rgba(26, 51, 103, 0.4);
    --text-primary: #e2e8f0;
    --text-secondary: #cbd5e1;
    --border-primary: rgba(46, 193, 206, 0.15);
    --border-secondary: rgba(46, 193, 206, 0.2);
    --accent-primary: #2ec1ce;
    --accent-secondary: #93c5fd;
    --success-bg: rgba(16, 185, 129, 0.2);
    --success-color: #10b981;
    --success-border: rgba(16, 185, 129, 0.4);
    --error-bg: rgba(239, 68, 68, 0.2);
    --error-color: #ef4444;
    --error-border: rgba(239, 68, 68, 0.4);
    --version-bg: rgba(26, 51, 103, 0.4);
    --version-value-bg: rgba(46, 193, 206, 0.15);
    --version-value-border: rgba(46, 193, 206, 0.3);
    --version-label-color: #94a3b8;
    --version-value-color: #2ec1ce;
  }

  .title {
    background: linear-gradient(135deg, #e2e8f0, #2ec1ce);
    -webkit-background-clip: text;
    background-clip: text;
  }

  .select, .input {
    background: rgba(15, 23, 42, 0.8);
    border-color: rgba(46, 193, 206, 0.25);
    color: #e2e8f0;
  }

  .button-secondary {
    background: rgba(15, 23, 42, 0.8);
    color: #2ec1ce;
  }

  .status.inactive {
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(26, 51, 103, 0.4) 100%);
    color: #94a3b8;
    border-color: rgba(148, 163, 184, 0.2);
  }

  .checkbox-label {
    color: #e2e8f0;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .button {
    border: 2px solid currentColor;
  }

  .status, .message {
    border-width: 2px;
  }

  .device-info {
    border-width: 2px;
  }
}

/* Version Info Component */
.version-info {
  margin-top: 1.5rem;
  padding: 1rem;
  background: var(--version-bg);
  backdrop-filter: blur(0.5rem);
  border-radius: 0.75rem;
  border: 1px solid var(--border-primary);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.version-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
}

.version-label {
  font-size: 0.75rem;
  color: var(--version-label-color);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.version-value {
  font-size: 0.75rem;
  color: var(--version-value-color);
  font-weight: 600;
  background: var(--version-value-bg);
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid var(--version-value-border);
}
`;function Tc(){const h=navigator.userAgent.toLowerCase();return h.includes("iphone")||h.includes("ipad")?"iPhone 12":h.includes("android")&&h.includes("mobile")?"Samsung Galaxy M53":"Mac Desktop"}function vt(h,s){return new Promise(a=>{const y="mediamock_overlay_"+Date.now(),v=C=>{const j=C;j.detail.messageId===y&&(window.removeEventListener("mediamock:response",v),a(j.detail.result))};window.addEventListener("mediamock:response",v),window.dispatchEvent(new CustomEvent("mediamock:command",{detail:{messageId:y,command:h,config:s}})),setTimeout(()=>{window.removeEventListener("mediamock:response",v),a({success:!1,error:"Timeout"})},1e4)})}const Ln={fabWrapper:h=>({position:"fixed",bottom:"80px",right:0,zIndex:2147483646,display:"flex",alignItems:"center",pointerEvents:"auto",transform:h?"translateX(56px)":"translateX(0)",transition:"transform 0.25s ease"}),fabToggle:{width:"20px",height:"40px",border:"none",borderRadius:"6px 0 0 6px",background:"#1e40af",color:"white",fontSize:"12px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",padding:0,outline:"none",boxShadow:"-2px 2px 8px rgba(0,0,0,0.25)",flexShrink:0},fab:{width:"56px",height:"56px",borderRadius:"12px 0 0 12px",background:"#2563eb",color:"white",fontSize:"22px",border:"none",cursor:"pointer",boxShadow:"0 4px 16px rgba(0,0,0,0.35)",display:"flex",alignItems:"center",justifyContent:"center",padding:0,outline:"none",position:"relative",flexShrink:0},fabDot:h=>({position:"absolute",top:"6px",right:"6px",width:"10px",height:"10px",borderRadius:"50%",background:h?"#22c55e":"#6b7280",border:"2px solid #2563eb",pointerEvents:"none"}),backdrop:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.45)",zIndex:2147483644,pointerEvents:"auto"},drawer:h=>({position:"fixed",bottom:0,left:0,right:0,zIndex:2147483645,maxHeight:"85vh",overflowY:"auto",pointerEvents:"auto",WebkitOverflowScrolling:"touch",transform:h?"translateY(0)":"translateY(100%)",transition:"transform 0.3s ease",borderRadius:"16px 16px 0 0",background:"linear-gradient(135deg, #0d1b2e 0%, #1a3367 55%, #2ec1ce 100%)"}),handle:{width:"40px",height:"4px",background:"rgba(255,255,255,0.3)",borderRadius:"2px",margin:"12px auto 0",cursor:"pointer",display:"block"},content:{padding:"8px 0 32px"}};function zc(){const[h,s]=_n.useState(!1),[a,y]=_n.useState(!1),[v,C]=_n.useState({isActive:!1,device:Tc(),mediaUrl:"",debugMode:!1,autoDetected:!0,uploadedFile:null,uploadedFileName:"",isDragging:!1}),[j,R]=_n.useState(!1),[T,b]=_n.useState(""),[$,Y]=_n.useState(""),[Q,ge]=_n.useState("success"),le=_n.useCallback((I,B)=>{Y(I),ge(B),setTimeout(()=>Y(""),3e3)},[]);_n.useEffect(()=>{chrome.storage.local.get(["mockActive","mockDevice","mediaUrl","uploadedFileName","mockDebugMode"],B=>{C(Ie=>({...Ie,...B.mockDevice?{device:B.mockDevice,autoDetected:!1}:{},...B.mediaUrl?{mediaUrl:B.mediaUrl}:{},...B.uploadedFileName?{uploadedFileName:B.uploadedFileName}:{},...B.mockDebugMode?{debugMode:B.mockDebugMode}:{}}))});const I=async()=>{const B=await vt("GET_STATUS");B&&B.success&&C(Ie=>({...Ie,isActive:B.isActive}))};return window.addEventListener("mediamock:ready",I),I(),()=>window.removeEventListener("mediamock:ready",I)},[]);const te=async()=>{R(!0),b("Starting MediaMock...");try{const I=await vt("START_MOCK",{device:v.device,mediaUrl:v.mediaUrl,debugMode:v.debugMode});if(I&&I.success)C(B=>({...B,isActive:!0})),chrome.storage.local.set({mockActive:!0,mockDevice:v.device,mockDebugMode:v.debugMode}),le("MediaMock started successfully","success");else throw new Error(I&&I.error||"Failed to start mock")}catch(I){le("Failed to start: "+I.message,"error")}finally{R(!1),b("")}},q=async()=>{R(!0),b("Stopping MediaMock...");try{const I=await vt("STOP_MOCK");if(I&&I.success)C(B=>({...B,isActive:!1})),chrome.storage.local.set({mockActive:!1}),le("MediaMock stopped","success");else throw new Error(I&&I.error||"Failed to stop mock")}catch(I){le("Failed to stop: "+I.message,"error")}finally{R(!1),b("")}},sn=async()=>{R(!0),b("Testing camera access...");try{const I=await vt("TEST_CAMERA");if(I&&I.success)le("Camera test completed","success");else throw new Error(I&&I.error||"Camera test failed")}catch(I){le("Camera test failed: "+I.message,"error")}finally{R(!1),b("")}},We=I=>{if(!["image/jpeg","image/jpg","image/png","image/gif","image/webp","video/mp4","video/webm","video/mov","video/avi","video/mkv"].includes(I.type))return le("Please select a valid image or video file","error"),!1;if(I.size>50*1024*1024)return le("File size must be less than 50MB","error"),!1;const Ie=new FileReader;return Ie.onload=async Ke=>{const Se=Ke.target&&Ke.target.result;Se&&(C(Xe=>({...Xe,mediaUrl:Se,uploadedFile:I,uploadedFileName:I.name})),chrome.storage.local.set({mediaUrl:Se,uploadedFileName:I.name}),v.isActive&&await vt("SET_MEDIA_URL",{mediaUrl:Se}),le("Uploaded "+I.name+" successfully","success"))},Ie.onerror=()=>le("Failed to read file","error"),Ie.readAsDataURL(I),!0},Qe=I=>{const B=I.target.files&&I.target.files[0];B&&We(B)},ke=()=>{C(B=>({...B,mediaUrl:"",uploadedFile:null,uploadedFileName:""})),chrome.storage.local.remove(["mediaUrl","uploadedFileName"]);const I=document.getElementById("file-upload");I&&(I.value="")},Ye=I=>{I.preventDefault(),I.stopPropagation(),C(B=>({...B,isDragging:!0}))},_e=I=>{I.preventDefault(),I.stopPropagation(),C(B=>({...B,isDragging:!1}))},Te=I=>{I.preventDefault(),I.stopPropagation()},Oe=I=>{I.preventDefault(),I.stopPropagation(),C(Ie=>({...Ie,isDragging:!1}));const B=I.dataTransfer.files[0];B&&We(B)};return _.jsxs(_.Fragment,{children:[_.jsxs("div",{style:Ln.fabWrapper(a),children:[_.jsx("button",{style:Ln.fabToggle,onClick:()=>y(I=>!I),"aria-label":a?"Show MediaMock":"Hide MediaMock",children:a?"‹":"›"}),_.jsxs("button",{style:Ln.fab,onClick:()=>s(I=>!I),"aria-label":"Toggle MediaMock",children:[_.jsx("span",{style:Ln.fabDot(v.isActive)}),"📷"]})]}),h&&_.jsx("div",{style:Ln.backdrop,onClick:()=>s(!1)}),_.jsxs("div",{style:Ln.drawer(h),role:"dialog","aria-label":"MediaMock controls",children:[_.jsx("div",{style:Ln.handle,onClick:()=>s(!1)}),_.jsx("div",{style:Ln.content,className:"mm-popup",children:_.jsxs("div",{className:"popup-container",children:[_.jsx(cc,{}),_.jsx(Ec,{message:$,type:Q}),_.jsx(dc,{isActive:v.isActive}),_.jsx(kc,{selectedDevice:v.device,autoDetected:v.autoDetected,isActive:v.isActive,onDeviceChange:I=>C(B=>({...B,device:I,autoDetected:!1}))}),_.jsx(Sc,{mediaUrl:v.mediaUrl,uploadedFile:v.uploadedFile,uploadedFileName:v.uploadedFileName,isDragging:v.isDragging,isActive:v.isActive,onFileUpload:Qe,onMediaUrlChange:async I=>{C(B=>({...B,mediaUrl:I})),I?(chrome.storage.local.set({mediaUrl:I,uploadedFileName:""}),v.isActive&&await vt("SET_MEDIA_URL",{mediaUrl:I})):chrome.storage.local.remove(["mediaUrl","uploadedFileName"])},onClearFile:ke,onDragEnter:Ye,onDragLeave:_e,onDragOver:Te,onDrop:Oe}),_.jsx(xc,{isActive:v.isActive,loading:j,loadingAction:T,debugMode:v.debugMode,onStart:te,onStop:q,onTest:sn,onDebugToggle:I=>C(B=>({...B,debugMode:I}))}),_.jsx(Dc,{})]})})]})]})}const Pc={matches:["<all_urls>"],runAt:"document_end",main(){console.log("[MediaMock] overlay script running on",navigator.userAgent);const h=()=>{try{const s=document.createElement("style");s.textContent=Mc.replace(/:root\b/g,".mm-popup").replace(/^body\b/gm,".mm-popup").replace(/\bbody\b/g,".mm-popup"),document.head.appendChild(s);const a=document.createElement("div");document.body.appendChild(a),sc.createRoot(a).render(_.jsx(zc,{})),console.log("[MediaMock] overlay mounted successfully")}catch(s){console.error("[MediaMock] overlay failed to mount:",s);const a=document.createElement("button");a.textContent="📷",a.setAttribute("aria-label","MediaMock (fallback)"),a.style.cssText="position:fixed;bottom:80px;right:0;width:56px;height:56px;border-radius:12px 0 0 12px;background:#2563eb;color:white;font-size:22px;border:none;cursor:pointer;z-index:2147483646;box-shadow:0 4px 16px rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;padding:0;",document.body.appendChild(a)}};document.body?h():document.addEventListener("DOMContentLoaded",h)}};function zr(h,...s){}const Rc={debug:(...h)=>zr(console.debug,...h),log:(...h)=>zr(console.log,...h),warn:(...h)=>zr(console.warn,...h),error:(...h)=>zr(console.error,...h)},Pr=(la=(ia=globalThis.browser)==null?void 0:ia.runtime)!=null&&la.id?globalThis.browser:globalThis.chrome;var ra=(tt=class extends Event{constructor(s,a){super(tt.EVENT_NAME,{}),this.newUrl=s,this.oldUrl=a}},Qo(tt,"EVENT_NAME",Zi("wxt:locationchange")),tt);function Zi(h){var s;return`${(s=Pr==null?void 0:Pr.runtime)==null?void 0:s.id}:overlay:${h}`}const Fc=typeof((oa=globalThis.navigation)==null?void 0:oa.addEventListener)=="function";function Lc(h){let s,a=!1;return{run(){a||(a=!0,s=new URL(location.href),Fc?globalThis.navigation.addEventListener("navigate",y=>{const v=new URL(y.destination.url);v.href!==s.href&&(window.dispatchEvent(new ra(v,s)),s=v)},{signal:h.signal}):h.setInterval(()=>{const y=new URL(location.href);y.href!==s.href&&(window.dispatchEvent(new ra(y,s)),s=y)},1e3))}}}var jc=(yn=class{id;abortController;locationWatcher=Lc(this);constructor(s,a){this.contentScriptName=s,this.options=a,this.id=Math.random().toString(36).slice(2),this.abortController=new AbortController,this.stopOldScripts(),this.listenForNewerScripts()}get signal(){return this.abortController.signal}abort(s){return this.abortController.abort(s)}get isInvalid(){var s;return((s=Pr.runtime)==null?void 0:s.id)==null&&this.notifyInvalidated(),this.signal.aborted}get isValid(){return!this.isInvalid}onInvalidated(s){return this.signal.addEventListener("abort",s),()=>this.signal.removeEventListener("abort",s)}block(){return new Promise(()=>{})}setInterval(s,a){const y=setInterval(()=>{this.isValid&&s()},a);return this.onInvalidated(()=>clearInterval(y)),y}setTimeout(s,a){const y=setTimeout(()=>{this.isValid&&s()},a);return this.onInvalidated(()=>clearTimeout(y)),y}requestAnimationFrame(s){const a=requestAnimationFrame((...y)=>{this.isValid&&s(...y)});return this.onInvalidated(()=>cancelAnimationFrame(a)),a}requestIdleCallback(s,a){const y=requestIdleCallback((...v)=>{this.signal.aborted||s(...v)},a);return this.onInvalidated(()=>cancelIdleCallback(y)),y}addEventListener(s,a,y,v){var C;a==="wxt:locationchange"&&this.isValid&&this.locationWatcher.run(),(C=s.addEventListener)==null||C.call(s,a.startsWith("wxt:")?Zi(a):a,y,{...v,signal:this.signal})}notifyInvalidated(){this.abort("Content script context invalidated"),Rc.debug(`Content script "${this.contentScriptName}" context invalidated`)}stopOldScripts(){document.dispatchEvent(new CustomEvent(yn.SCRIPT_STARTED_MESSAGE_TYPE,{detail:{contentScriptName:this.contentScriptName,messageId:this.id}})),window.postMessage({type:yn.SCRIPT_STARTED_MESSAGE_TYPE,contentScriptName:this.contentScriptName,messageId:this.id},"*")}verifyScriptStartedEvent(s){var v,C;const a=((v=s.detail)==null?void 0:v.contentScriptName)===this.contentScriptName,y=((C=s.detail)==null?void 0:C.messageId)===this.id;return a&&!y}listenForNewerScripts(){const s=a=>{!(a instanceof CustomEvent)||!this.verifyScriptStartedEvent(a)||this.notifyInvalidated()};document.addEventListener(yn.SCRIPT_STARTED_MESSAGE_TYPE,s),this.onInvalidated(()=>document.removeEventListener(yn.SCRIPT_STARTED_MESSAGE_TYPE,s))}},Qo(yn,"SCRIPT_STARTED_MESSAGE_TYPE",Zi("wxt:content-script-started")),yn);function Uf(){}function Rr(h,...s){}const Ac={debug:(...h)=>Rr(console.debug,...h),log:(...h)=>Rr(console.log,...h),warn:(...h)=>Rr(console.warn,...h),error:(...h)=>Rr(console.error,...h)};return(async()=>{try{const{main:h,...s}=Pc;return await h(new jc("overlay",s))}catch(h){throw Ac.error('The content script "overlay" crashed on startup!',h),h}})()})();

overlay;