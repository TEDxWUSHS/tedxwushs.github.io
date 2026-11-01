function y0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function x0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yh={exports:{}},Ho={},Kh={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ui=Symbol.for("react.element"),w0=Symbol.for("react.portal"),k0=Symbol.for("react.fragment"),S0=Symbol.for("react.strict_mode"),b0=Symbol.for("react.profiler"),j0=Symbol.for("react.provider"),T0=Symbol.for("react.context"),E0=Symbol.for("react.forward_ref"),_0=Symbol.for("react.suspense"),D0=Symbol.for("react.memo"),C0=Symbol.for("react.lazy"),Jc=Symbol.iterator;function P0(e){return e===null||typeof e!="object"?null:(e=Jc&&e[Jc]||e["@@iterator"],typeof e=="function"?e:null)}var Gh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qh=Object.assign,Qh={};function rr(e,t,n){this.props=e,this.context=t,this.refs=Qh,this.updater=n||Gh}rr.prototype.isReactComponent={};rr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};rr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xh(){}Xh.prototype=rr.prototype;function wl(e,t,n){this.props=e,this.context=t,this.refs=Qh,this.updater=n||Gh}var kl=wl.prototype=new Xh;kl.constructor=wl;qh(kl,rr.prototype);kl.isPureReactComponent=!0;var Zc=Array.isArray,Jh=Object.prototype.hasOwnProperty,Sl={current:null},Zh={key:!0,ref:!0,__self:!0,__source:!0};function ef(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Jh.call(t,r)&&!Zh.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ui,type:e,key:o,ref:s,props:i,_owner:Sl.current}}function N0(e,t){return{$$typeof:ui,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bl(e){return typeof e=="object"&&e!==null&&e.$$typeof===ui}function A0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var eu=/\/+/g;function ds(e,t){return typeof e=="object"&&e!==null&&e.key!=null?A0(""+e.key):t.toString(36)}function Ki(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ui:case w0:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+ds(s,0):r,Zc(i)?(n="",e!=null&&(n=e.replace(eu,"$&/")+"/"),Ki(i,t,n,"",function(u){return u})):i!=null&&(bl(i)&&(i=N0(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(eu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Zc(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+ds(o,l);s+=Ki(o,t,n,c,i)}else if(c=P0(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+ds(o,l++),s+=Ki(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ji(e,t,n){if(e==null)return e;var r=[],i=0;return Ki(e,r,"","",function(o){return t.call(n,o,i++)}),r}function L0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},Gi={transition:null},M0={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:Gi,ReactCurrentOwner:Sl};function tf(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:ji,forEach:function(e,t,n){ji(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ji(e,function(){t++}),t},toArray:function(e){return ji(e,function(t){return t})||[]},only:function(e){if(!bl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=rr;z.Fragment=k0;z.Profiler=b0;z.PureComponent=wl;z.StrictMode=S0;z.Suspense=_0;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M0;z.act=tf;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=qh({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Sl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Jh.call(t,c)&&!Zh.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ui,type:e.type,key:i,ref:o,props:r,_owner:s}};z.createContext=function(e){return e={$$typeof:T0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:j0,_context:e},e.Consumer=e};z.createElement=ef;z.createFactory=function(e){var t=ef.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:E0,render:e}};z.isValidElement=bl;z.lazy=function(e){return{$$typeof:C0,_payload:{_status:-1,_result:e},_init:L0}};z.memo=function(e,t){return{$$typeof:D0,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=Gi.transition;Gi.transition={};try{e()}finally{Gi.transition=t}};z.unstable_act=tf;z.useCallback=function(e,t){return Ee.current.useCallback(e,t)};z.useContext=function(e){return Ee.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};z.useEffect=function(e,t){return Ee.current.useEffect(e,t)};z.useId=function(){return Ee.current.useId()};z.useImperativeHandle=function(e,t,n){return Ee.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return Ee.current.useMemo(e,t)};z.useReducer=function(e,t,n){return Ee.current.useReducer(e,t,n)};z.useRef=function(e){return Ee.current.useRef(e)};z.useState=function(e){return Ee.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return Ee.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return Ee.current.useTransition()};z.version="18.3.1";Kh.exports=z;var w=Kh.exports;const z0=x0(w),R0=y0({__proto__:null,default:z0},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I0=w,V0=Symbol.for("react.element"),U0=Symbol.for("react.fragment"),O0=Object.prototype.hasOwnProperty,F0=I0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W0={key:!0,ref:!0,__self:!0,__source:!0};function nf(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)O0.call(t,r)&&!W0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:V0,type:e,key:o,ref:s,props:i,_owner:F0.current}}Ho.Fragment=U0;Ho.jsx=nf;Ho.jsxs=nf;Yh.exports=Ho;var a=Yh.exports,rf={exports:{}},Ie={},of={exports:{}},sf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,A){var M=D.length;D.push(A);e:for(;0<M;){var B=M-1>>>1,ce=D[B];if(0<i(ce,A))D[B]=A,D[M]=ce,M=B;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var A=D[0],M=D.pop();if(M!==A){D[0]=M;e:for(var B=0,ce=D.length,Si=ce>>>1;B<Si;){var rn=2*(B+1)-1,us=D[rn],on=rn+1,bi=D[on];if(0>i(us,M))on<ce&&0>i(bi,us)?(D[B]=bi,D[on]=M,B=on):(D[B]=us,D[rn]=M,B=rn);else if(on<ce&&0>i(bi,M))D[B]=bi,D[on]=M,B=on;else break e}}return A}function i(D,A){var M=D.sortIndex-A.sortIndex;return M!==0?M:D.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,h=null,f=3,v=!1,y=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(D){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=D)r(u),A.sortIndex=A.expirationTime,t(c,A);else break;A=n(u)}}function k(D){if(x=!1,p(D),!y)if(n(c)!==null)y=!0,ki(b);else{var A=n(u);A!==null&&Z(k,A.startTime-D)}}function b(D,A){y=!1,x&&(x=!1,g(j),j=-1),v=!0;var M=f;try{for(p(A),h=n(c);h!==null&&(!(h.expirationTime>A)||D&&!J());){var B=h.callback;if(typeof B=="function"){h.callback=null,f=h.priorityLevel;var ce=B(h.expirationTime<=A);A=e.unstable_now(),typeof ce=="function"?h.callback=ce:h===n(c)&&r(c),p(A)}else r(c);h=n(c)}if(h!==null)var Si=!0;else{var rn=n(u);rn!==null&&Z(k,rn.startTime-A),Si=!1}return Si}finally{h=null,f=M,v=!1}}var T=!1,E=null,j=-1,L=5,N=-1;function J(){return!(e.unstable_now()-N<L)}function it(){if(E!==null){var D=e.unstable_now();N=D;var A=!0;try{A=E(!0,D)}finally{A?nn():(T=!1,E=null)}}else T=!1}var nn;if(typeof m=="function")nn=function(){m(it)};else if(typeof MessageChannel<"u"){var dr=new MessageChannel,wi=dr.port2;dr.port1.onmessage=it,nn=function(){wi.postMessage(null)}}else nn=function(){S(it,0)};function ki(D){E=D,T||(T=!0,nn())}function Z(D,A){j=S(function(){D(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,ki(b))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(D){switch(f){case 1:case 2:case 3:var A=3;break;default:A=f}var M=f;f=A;try{return D()}finally{f=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,A){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var M=f;f=D;try{return A()}finally{f=M}},e.unstable_scheduleCallback=function(D,A,M){var B=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?B+M:B):M=B,D){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=M+ce,D={id:d++,callback:A,priorityLevel:D,startTime:M,expirationTime:ce,sortIndex:-1},M>B?(D.sortIndex=M,t(u,D),n(c)===null&&D===n(u)&&(x?(g(j),j=-1):x=!0,Z(k,M-B))):(D.sortIndex=ce,t(c,D),y||v||(y=!0,ki(b))),D},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(D){var A=f;return function(){var M=f;f=A;try{return D.apply(this,arguments)}finally{f=M}}}})(sf);of.exports=sf;var H0=of.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0=w,Re=H0;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var af=new Set,Or={};function bn(e,t){qn(e,t),qn(e+"Capture",t)}function qn(e,t){for(Or[e]=t,e=0;e<t.length;e++)af.add(t[e])}var xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ta=Object.prototype.hasOwnProperty,$0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tu={},nu={};function Y0(e){return ta.call(nu,e)?!0:ta.call(tu,e)?!1:$0.test(e)?nu[e]=!0:(tu[e]=!0,!1)}function K0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function G0(e,t,n,r){if(t===null||typeof t>"u"||K0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _e(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ge[t]=new _e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var jl=/[\-:]([a-z])/g;function Tl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(jl,Tl);ge[t]=new _e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(jl,Tl);ge[t]=new _e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(jl,Tl);ge[t]=new _e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function El(e,t,n,r){var i=ge.hasOwnProperty(t)?ge[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(G0(t,n,i,r)&&(n=null),r||i===null?Y0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var jt=B0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ti=Symbol.for("react.element"),En=Symbol.for("react.portal"),_n=Symbol.for("react.fragment"),_l=Symbol.for("react.strict_mode"),na=Symbol.for("react.profiler"),lf=Symbol.for("react.provider"),cf=Symbol.for("react.context"),Dl=Symbol.for("react.forward_ref"),ra=Symbol.for("react.suspense"),ia=Symbol.for("react.suspense_list"),Cl=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),uf=Symbol.for("react.offscreen"),ru=Symbol.iterator;function hr(e){return e===null||typeof e!="object"?null:(e=ru&&e[ru]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,hs;function kr(e){if(hs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);hs=t&&t[1]||""}return`
`+hs+e}var fs=!1;function ps(e,t){if(!e||fs)return"";fs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{fs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?kr(e):""}function q0(e){switch(e.tag){case 5:return kr(e.type);case 16:return kr("Lazy");case 13:return kr("Suspense");case 19:return kr("SuspenseList");case 0:case 2:case 15:return e=ps(e.type,!1),e;case 11:return e=ps(e.type.render,!1),e;case 1:return e=ps(e.type,!0),e;default:return""}}function oa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _n:return"Fragment";case En:return"Portal";case na:return"Profiler";case _l:return"StrictMode";case ra:return"Suspense";case ia:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cf:return(e.displayName||"Context")+".Consumer";case lf:return(e._context.displayName||"Context")+".Provider";case Dl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cl:return t=e.displayName||null,t!==null?t:oa(e.type)||"Memo";case _t:t=e._payload,e=e._init;try{return oa(e(t))}catch{}}return null}function Q0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oa(t);case 8:return t===_l?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function df(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function X0(e){var t=df(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ei(e){e._valueTracker||(e._valueTracker=X0(e))}function hf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=df(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function co(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function sa(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function iu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ff(e,t){t=t.checked,t!=null&&El(e,"checked",t,!1)}function aa(e,t){ff(e,t);var n=Bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?la(e,t.type,n):t.hasOwnProperty("defaultValue")&&la(e,t.type,Bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ou(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function la(e,t,n){(t!=="number"||co(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Sr=Array.isArray;function Wn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ca(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function su(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Sr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Bt(n)}}function pf(e,t){var n=Bt(t.value),r=Bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function au(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function mf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ua(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?mf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _i,gf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_i=_i||document.createElement("div"),_i.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_i.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},J0=["Webkit","ms","Moz","O"];Object.keys(_r).forEach(function(e){J0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_r[t]=_r[e]})});function vf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_r.hasOwnProperty(e)&&_r[e]?(""+t).trim():t+"px"}function yf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=vf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Z0=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function da(e,t){if(t){if(Z0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function ha(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fa=null;function Pl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pa=null,Hn=null,Bn=null;function lu(e){if(e=fi(e)){if(typeof pa!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Go(t),pa(e.stateNode,e.type,t))}}function xf(e){Hn?Bn?Bn.push(e):Bn=[e]:Hn=e}function wf(){if(Hn){var e=Hn,t=Bn;if(Bn=Hn=null,lu(e),t)for(e=0;e<t.length;e++)lu(t[e])}}function kf(e,t){return e(t)}function Sf(){}var ms=!1;function bf(e,t,n){if(ms)return e(t,n);ms=!0;try{return kf(e,t,n)}finally{ms=!1,(Hn!==null||Bn!==null)&&(Sf(),wf())}}function Wr(e,t){var n=e.stateNode;if(n===null)return null;var r=Go(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var ma=!1;if(xt)try{var fr={};Object.defineProperty(fr,"passive",{get:function(){ma=!0}}),window.addEventListener("test",fr,fr),window.removeEventListener("test",fr,fr)}catch{ma=!1}function ev(e,t,n,r,i,o,s,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Dr=!1,uo=null,ho=!1,ga=null,tv={onError:function(e){Dr=!0,uo=e}};function nv(e,t,n,r,i,o,s,l,c){Dr=!1,uo=null,ev.apply(tv,arguments)}function rv(e,t,n,r,i,o,s,l,c){if(nv.apply(this,arguments),Dr){if(Dr){var u=uo;Dr=!1,uo=null}else throw Error(_(198));ho||(ho=!0,ga=u)}}function jn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function jf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cu(e){if(jn(e)!==e)throw Error(_(188))}function iv(e){var t=e.alternate;if(!t){if(t=jn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return cu(i),e;if(o===r)return cu(i),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Tf(e){return e=iv(e),e!==null?Ef(e):null}function Ef(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ef(e);if(t!==null)return t;e=e.sibling}return null}var _f=Re.unstable_scheduleCallback,uu=Re.unstable_cancelCallback,ov=Re.unstable_shouldYield,sv=Re.unstable_requestPaint,ee=Re.unstable_now,av=Re.unstable_getCurrentPriorityLevel,Nl=Re.unstable_ImmediatePriority,Df=Re.unstable_UserBlockingPriority,fo=Re.unstable_NormalPriority,lv=Re.unstable_LowPriority,Cf=Re.unstable_IdlePriority,Bo=null,lt=null;function cv(e){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Bo,e,void 0,(e.current.flags&128)===128)}catch{}}var et=Math.clz32?Math.clz32:hv,uv=Math.log,dv=Math.LN2;function hv(e){return e>>>=0,e===0?32:31-(uv(e)/dv|0)|0}var Di=64,Ci=4194304;function br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function po(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=br(l):(o&=s,o!==0&&(r=br(o)))}else s=n&~i,s!==0?r=br(s):o!==0&&(r=br(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-et(t),i=1<<n,r|=e[n],t&=~i;return r}function fv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-et(o),l=1<<s,c=i[s];c===-1?(!(l&n)||l&r)&&(i[s]=fv(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function va(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pf(){var e=Di;return Di<<=1,!(Di&4194240)&&(Di=64),e}function gs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function di(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-et(t),e[t]=n}function mv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-et(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Al(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-et(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var I=0;function Nf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Af,Ll,Lf,Mf,zf,ya=!1,Pi=[],zt=null,Rt=null,It=null,Hr=new Map,Br=new Map,Ct=[],gv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function du(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":Hr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Br.delete(t.pointerId)}}function pr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=fi(t),t!==null&&Ll(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function vv(e,t,n,r,i){switch(t){case"focusin":return zt=pr(zt,e,t,n,r,i),!0;case"dragenter":return Rt=pr(Rt,e,t,n,r,i),!0;case"mouseover":return It=pr(It,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Hr.set(o,pr(Hr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Br.set(o,pr(Br.get(o)||null,e,t,n,r,i)),!0}return!1}function Rf(e){var t=un(e.target);if(t!==null){var n=jn(t);if(n!==null){if(t=n.tag,t===13){if(t=jf(n),t!==null){e.blockedOn=t,zf(e.priority,function(){Lf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fa=r,n.target.dispatchEvent(r),fa=null}else return t=fi(n),t!==null&&Ll(t),e.blockedOn=n,!1;t.shift()}return!0}function hu(e,t,n){qi(e)&&n.delete(t)}function yv(){ya=!1,zt!==null&&qi(zt)&&(zt=null),Rt!==null&&qi(Rt)&&(Rt=null),It!==null&&qi(It)&&(It=null),Hr.forEach(hu),Br.forEach(hu)}function mr(e,t){e.blockedOn===t&&(e.blockedOn=null,ya||(ya=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,yv)))}function $r(e){function t(i){return mr(i,e)}if(0<Pi.length){mr(Pi[0],e);for(var n=1;n<Pi.length;n++){var r=Pi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(zt!==null&&mr(zt,e),Rt!==null&&mr(Rt,e),It!==null&&mr(It,e),Hr.forEach(t),Br.forEach(t),n=0;n<Ct.length;n++)r=Ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ct.length&&(n=Ct[0],n.blockedOn===null);)Rf(n),n.blockedOn===null&&Ct.shift()}var $n=jt.ReactCurrentBatchConfig,mo=!0;function xv(e,t,n,r){var i=I,o=$n.transition;$n.transition=null;try{I=1,Ml(e,t,n,r)}finally{I=i,$n.transition=o}}function wv(e,t,n,r){var i=I,o=$n.transition;$n.transition=null;try{I=4,Ml(e,t,n,r)}finally{I=i,$n.transition=o}}function Ml(e,t,n,r){if(mo){var i=xa(e,t,n,r);if(i===null)Es(e,t,r,go,n),du(e,r);else if(vv(i,e,t,n,r))r.stopPropagation();else if(du(e,r),t&4&&-1<gv.indexOf(e)){for(;i!==null;){var o=fi(i);if(o!==null&&Af(o),o=xa(e,t,n,r),o===null&&Es(e,t,r,go,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Es(e,t,r,null,n)}}var go=null;function xa(e,t,n,r){if(go=null,e=Pl(r),e=un(e),e!==null)if(t=jn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=jf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return go=e,null}function If(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(av()){case Nl:return 1;case Df:return 4;case fo:case lv:return 16;case Cf:return 536870912;default:return 16}default:return 16}}var Nt=null,zl=null,Qi=null;function Vf(){if(Qi)return Qi;var e,t=zl,n=t.length,r,i="value"in Nt?Nt.value:Nt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Qi=i.slice(e,1<r?1-r:void 0)}function Xi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ni(){return!0}function fu(){return!1}function Ve(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ni:fu,this.isPropagationStopped=fu,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ni)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ni)},persist:function(){},isPersistent:Ni}),t}var ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rl=Ve(ir),hi=q({},ir,{view:0,detail:0}),kv=Ve(hi),vs,ys,gr,$o=q({},hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Il,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gr&&(gr&&e.type==="mousemove"?(vs=e.screenX-gr.screenX,ys=e.screenY-gr.screenY):ys=vs=0,gr=e),vs)},movementY:function(e){return"movementY"in e?e.movementY:ys}}),pu=Ve($o),Sv=q({},$o,{dataTransfer:0}),bv=Ve(Sv),jv=q({},hi,{relatedTarget:0}),xs=Ve(jv),Tv=q({},ir,{animationName:0,elapsedTime:0,pseudoElement:0}),Ev=Ve(Tv),_v=q({},ir,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dv=Ve(_v),Cv=q({},ir,{data:0}),mu=Ve(Cv),Pv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Av={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Av[e])?!!t[e]:!1}function Il(){return Lv}var Mv=q({},hi,{key:function(e){if(e.key){var t=Pv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Il,charCode:function(e){return e.type==="keypress"?Xi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zv=Ve(Mv),Rv=q({},$o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gu=Ve(Rv),Iv=q({},hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Il}),Vv=Ve(Iv),Uv=q({},ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ov=Ve(Uv),Fv=q({},$o,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wv=Ve(Fv),Hv=[9,13,27,32],Vl=xt&&"CompositionEvent"in window,Cr=null;xt&&"documentMode"in document&&(Cr=document.documentMode);var Bv=xt&&"TextEvent"in window&&!Cr,Uf=xt&&(!Vl||Cr&&8<Cr&&11>=Cr),vu=" ",yu=!1;function Of(e,t){switch(e){case"keyup":return Hv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ff(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dn=!1;function $v(e,t){switch(e){case"compositionend":return Ff(t);case"keypress":return t.which!==32?null:(yu=!0,vu);case"textInput":return e=t.data,e===vu&&yu?null:e;default:return null}}function Yv(e,t){if(Dn)return e==="compositionend"||!Vl&&Of(e,t)?(e=Vf(),Qi=zl=Nt=null,Dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Uf&&t.locale!=="ko"?null:t.data;default:return null}}var Kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kv[e.type]:t==="textarea"}function Wf(e,t,n,r){xf(r),t=vo(t,"onChange"),0<t.length&&(n=new Rl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pr=null,Yr=null;function Gv(e){Zf(e,0)}function Yo(e){var t=Nn(e);if(hf(t))return e}function qv(e,t){if(e==="change")return t}var Hf=!1;if(xt){var ws;if(xt){var ks="oninput"in document;if(!ks){var wu=document.createElement("div");wu.setAttribute("oninput","return;"),ks=typeof wu.oninput=="function"}ws=ks}else ws=!1;Hf=ws&&(!document.documentMode||9<document.documentMode)}function ku(){Pr&&(Pr.detachEvent("onpropertychange",Bf),Yr=Pr=null)}function Bf(e){if(e.propertyName==="value"&&Yo(Yr)){var t=[];Wf(t,Yr,e,Pl(e)),bf(Gv,t)}}function Qv(e,t,n){e==="focusin"?(ku(),Pr=t,Yr=n,Pr.attachEvent("onpropertychange",Bf)):e==="focusout"&&ku()}function Xv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yo(Yr)}function Jv(e,t){if(e==="click")return Yo(t)}function Zv(e,t){if(e==="input"||e==="change")return Yo(t)}function ey(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:ey;function Kr(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ta.call(t,i)||!nt(e[i],t[i]))return!1}return!0}function Su(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bu(e,t){var n=Su(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Su(n)}}function $f(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$f(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yf(){for(var e=window,t=co();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=co(e.document)}return t}function Ul(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ty(e){var t=Yf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&$f(n.ownerDocument.documentElement,n)){if(r!==null&&Ul(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=bu(n,o);var s=bu(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ny=xt&&"documentMode"in document&&11>=document.documentMode,Cn=null,wa=null,Nr=null,ka=!1;function ju(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ka||Cn==null||Cn!==co(r)||(r=Cn,"selectionStart"in r&&Ul(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nr&&Kr(Nr,r)||(Nr=r,r=vo(wa,"onSelect"),0<r.length&&(t=new Rl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cn)))}function Ai(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pn={animationend:Ai("Animation","AnimationEnd"),animationiteration:Ai("Animation","AnimationIteration"),animationstart:Ai("Animation","AnimationStart"),transitionend:Ai("Transition","TransitionEnd")},Ss={},Kf={};xt&&(Kf=document.createElement("div").style,"AnimationEvent"in window||(delete Pn.animationend.animation,delete Pn.animationiteration.animation,delete Pn.animationstart.animation),"TransitionEvent"in window||delete Pn.transitionend.transition);function Ko(e){if(Ss[e])return Ss[e];if(!Pn[e])return e;var t=Pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kf)return Ss[e]=t[n];return e}var Gf=Ko("animationend"),qf=Ko("animationiteration"),Qf=Ko("animationstart"),Xf=Ko("transitionend"),Jf=new Map,Tu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qt(e,t){Jf.set(e,t),bn(t,[e])}for(var bs=0;bs<Tu.length;bs++){var js=Tu[bs],ry=js.toLowerCase(),iy=js[0].toUpperCase()+js.slice(1);qt(ry,"on"+iy)}qt(Gf,"onAnimationEnd");qt(qf,"onAnimationIteration");qt(Qf,"onAnimationStart");qt("dblclick","onDoubleClick");qt("focusin","onFocus");qt("focusout","onBlur");qt(Xf,"onTransitionEnd");qn("onMouseEnter",["mouseout","mouseover"]);qn("onMouseLeave",["mouseout","mouseover"]);qn("onPointerEnter",["pointerout","pointerover"]);qn("onPointerLeave",["pointerout","pointerover"]);bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oy=new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));function Eu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rv(r,t,void 0,e),e.currentTarget=null}function Zf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Eu(i,l,u),o=c}else for(s=0;s<r.length;s++){if(l=r[s],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Eu(i,l,u),o=c}}}if(ho)throw e=ga,ho=!1,ga=null,e}function U(e,t){var n=t[Ea];n===void 0&&(n=t[Ea]=new Set);var r=e+"__bubble";n.has(r)||(ep(t,e,2,!1),n.add(r))}function Ts(e,t,n){var r=0;t&&(r|=4),ep(n,e,r,t)}var Li="_reactListening"+Math.random().toString(36).slice(2);function Gr(e){if(!e[Li]){e[Li]=!0,af.forEach(function(n){n!=="selectionchange"&&(oy.has(n)||Ts(n,!1,e),Ts(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Li]||(t[Li]=!0,Ts("selectionchange",!1,t))}}function ep(e,t,n,r){switch(If(t)){case 1:var i=xv;break;case 4:i=wv;break;default:i=Ml}n=i.bind(null,t,n,e),i=void 0,!ma||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Es(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=un(l),s===null)return;if(c=s.tag,c===5||c===6){r=o=s;continue e}l=l.parentNode}}r=r.return}bf(function(){var u=o,d=Pl(n),h=[];e:{var f=Jf.get(e);if(f!==void 0){var v=Rl,y=e;switch(e){case"keypress":if(Xi(n)===0)break e;case"keydown":case"keyup":v=zv;break;case"focusin":y="focus",v=xs;break;case"focusout":y="blur",v=xs;break;case"beforeblur":case"afterblur":v=xs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=pu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Vv;break;case Gf:case qf:case Qf:v=Ev;break;case Xf:v=Ov;break;case"scroll":v=kv;break;case"wheel":v=Wv;break;case"copy":case"cut":case"paste":v=Dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=gu}var x=(t&4)!==0,S=!x&&e==="scroll",g=x?f!==null?f+"Capture":null:f;x=[];for(var m=u,p;m!==null;){p=m;var k=p.stateNode;if(p.tag===5&&k!==null&&(p=k,g!==null&&(k=Wr(m,g),k!=null&&x.push(qr(m,k,p)))),S)break;m=m.return}0<x.length&&(f=new v(f,y,null,n,d),h.push({event:f,listeners:x}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&n!==fa&&(y=n.relatedTarget||n.fromElement)&&(un(y)||y[wt]))break e;if((v||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?un(y):null,y!==null&&(S=jn(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(x=pu,k="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(x=gu,k="onPointerLeave",g="onPointerEnter",m="pointer"),S=v==null?f:Nn(v),p=y==null?f:Nn(y),f=new x(k,m+"leave",v,n,d),f.target=S,f.relatedTarget=p,k=null,un(d)===u&&(x=new x(g,m+"enter",y,n,d),x.target=p,x.relatedTarget=S,k=x),S=k,v&&y)t:{for(x=v,g=y,m=0,p=x;p;p=Tn(p))m++;for(p=0,k=g;k;k=Tn(k))p++;for(;0<m-p;)x=Tn(x),m--;for(;0<p-m;)g=Tn(g),p--;for(;m--;){if(x===g||g!==null&&x===g.alternate)break t;x=Tn(x),g=Tn(g)}x=null}else x=null;v!==null&&_u(h,f,v,x,!1),y!==null&&S!==null&&_u(h,S,y,x,!0)}}e:{if(f=u?Nn(u):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var b=qv;else if(xu(f))if(Hf)b=Zv;else{b=Xv;var T=Qv}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=Jv);if(b&&(b=b(e,u))){Wf(h,b,n,d);break e}T&&T(e,f,u),e==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&la(f,"number",f.value)}switch(T=u?Nn(u):window,e){case"focusin":(xu(T)||T.contentEditable==="true")&&(Cn=T,wa=u,Nr=null);break;case"focusout":Nr=wa=Cn=null;break;case"mousedown":ka=!0;break;case"contextmenu":case"mouseup":case"dragend":ka=!1,ju(h,n,d);break;case"selectionchange":if(ny)break;case"keydown":case"keyup":ju(h,n,d)}var E;if(Vl)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Dn?Of(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Uf&&n.locale!=="ko"&&(Dn||j!=="onCompositionStart"?j==="onCompositionEnd"&&Dn&&(E=Vf()):(Nt=d,zl="value"in Nt?Nt.value:Nt.textContent,Dn=!0)),T=vo(u,j),0<T.length&&(j=new mu(j,e,null,n,d),h.push({event:j,listeners:T}),E?j.data=E:(E=Ff(n),E!==null&&(j.data=E)))),(E=Bv?$v(e,n):Yv(e,n))&&(u=vo(u,"onBeforeInput"),0<u.length&&(d=new mu("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=E))}Zf(h,t)})}function qr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Wr(e,n),o!=null&&r.unshift(qr(e,o,i)),o=Wr(e,t),o!=null&&r.push(qr(e,o,i))),e=e.return}return r}function Tn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _u(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Wr(n,o),c!=null&&s.unshift(qr(n,c,l))):i||(c=Wr(n,o),c!=null&&s.push(qr(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var sy=/\r\n?/g,ay=/\u0000|\uFFFD/g;function Du(e){return(typeof e=="string"?e:""+e).replace(sy,`
`).replace(ay,"")}function Mi(e,t,n){if(t=Du(t),Du(e)!==t&&n)throw Error(_(425))}function yo(){}var Sa=null,ba=null;function ja(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ta=typeof setTimeout=="function"?setTimeout:void 0,ly=typeof clearTimeout=="function"?clearTimeout:void 0,Cu=typeof Promise=="function"?Promise:void 0,cy=typeof queueMicrotask=="function"?queueMicrotask:typeof Cu<"u"?function(e){return Cu.resolve(null).then(e).catch(uy)}:Ta;function uy(e){setTimeout(function(){throw e})}function _s(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),$r(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$r(t)}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var or=Math.random().toString(36).slice(2),at="__reactFiber$"+or,Qr="__reactProps$"+or,wt="__reactContainer$"+or,Ea="__reactEvents$"+or,dy="__reactListeners$"+or,hy="__reactHandles$"+or;function un(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pu(e);e!==null;){if(n=e[at])return n;e=Pu(e)}return t}e=n,n=e.parentNode}return null}function fi(e){return e=e[at]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Go(e){return e[Qr]||null}var _a=[],An=-1;function Qt(e){return{current:e}}function O(e){0>An||(e.current=_a[An],_a[An]=null,An--)}function V(e,t){An++,_a[An]=e.current,e.current=t}var $t={},ke=Qt($t),Pe=Qt(!1),yn=$t;function Qn(e,t){var n=e.type.contextTypes;if(!n)return $t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(e){return e=e.childContextTypes,e!=null}function xo(){O(Pe),O(ke)}function Nu(e,t,n){if(ke.current!==$t)throw Error(_(168));V(ke,t),V(Pe,n)}function tp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,Q0(e)||"Unknown",i));return q({},n,r)}function wo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$t,yn=ke.current,V(ke,e),V(Pe,Pe.current),!0}function Au(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=tp(e,t,yn),r.__reactInternalMemoizedMergedChildContext=e,O(Pe),O(ke),V(ke,e)):O(Pe),V(Pe,n)}var pt=null,qo=!1,Ds=!1;function np(e){pt===null?pt=[e]:pt.push(e)}function fy(e){qo=!0,np(e)}function Xt(){if(!Ds&&pt!==null){Ds=!0;var e=0,t=I;try{var n=pt;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}pt=null,qo=!1}catch(i){throw pt!==null&&(pt=pt.slice(e+1)),_f(Nl,Xt),i}finally{I=t,Ds=!1}}return null}var Ln=[],Mn=0,ko=null,So=0,Oe=[],Fe=0,xn=null,mt=1,gt="";function an(e,t){Ln[Mn++]=So,Ln[Mn++]=ko,ko=e,So=t}function rp(e,t,n){Oe[Fe++]=mt,Oe[Fe++]=gt,Oe[Fe++]=xn,xn=e;var r=mt;e=gt;var i=32-et(r)-1;r&=~(1<<i),n+=1;var o=32-et(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,mt=1<<32-et(t)+i|n<<i|r,gt=o+e}else mt=1<<o|n<<i|r,gt=e}function Ol(e){e.return!==null&&(an(e,1),rp(e,1,0))}function Fl(e){for(;e===ko;)ko=Ln[--Mn],Ln[Mn]=null,So=Ln[--Mn],Ln[Mn]=null;for(;e===xn;)xn=Oe[--Fe],Oe[Fe]=null,gt=Oe[--Fe],Oe[Fe]=null,mt=Oe[--Fe],Oe[Fe]=null}var ze=null,Me=null,H=!1,Ze=null;function ip(e,t){var n=We(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Lu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Me=Vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xn!==null?{id:mt,overflow:gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=We(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Me=null,!0):!1;default:return!1}}function Da(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ca(e){if(H){var t=Me;if(t){var n=t;if(!Lu(e,t)){if(Da(e))throw Error(_(418));t=Vt(n.nextSibling);var r=ze;t&&Lu(e,t)?ip(r,n):(e.flags=e.flags&-4097|2,H=!1,ze=e)}}else{if(Da(e))throw Error(_(418));e.flags=e.flags&-4097|2,H=!1,ze=e}}}function Mu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function zi(e){if(e!==ze)return!1;if(!H)return Mu(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ja(e.type,e.memoizedProps)),t&&(t=Me)){if(Da(e))throw op(),Error(_(418));for(;t;)ip(e,t),t=Vt(t.nextSibling)}if(Mu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Me=Vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Me=null}}else Me=ze?Vt(e.stateNode.nextSibling):null;return!0}function op(){for(var e=Me;e;)e=Vt(e.nextSibling)}function Xn(){Me=ze=null,H=!1}function Wl(e){Ze===null?Ze=[e]:Ze.push(e)}var py=jt.ReactCurrentBatchConfig;function vr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Ri(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zu(e){var t=e._init;return t(e._payload)}function sp(e){function t(g,m){if(e){var p=g.deletions;p===null?(g.deletions=[m],g.flags|=16):p.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=Wt(g,m),g.index=0,g.sibling=null,g}function o(g,m,p){return g.index=p,e?(p=g.alternate,p!==null?(p=p.index,p<m?(g.flags|=2,m):p):(g.flags|=2,m)):(g.flags|=1048576,m)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,m,p,k){return m===null||m.tag!==6?(m=zs(p,g.mode,k),m.return=g,m):(m=i(m,p),m.return=g,m)}function c(g,m,p,k){var b=p.type;return b===_n?d(g,m,p.props.children,k,p.key):m!==null&&(m.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===_t&&zu(b)===m.type)?(k=i(m,p.props),k.ref=vr(g,m,p),k.return=g,k):(k=io(p.type,p.key,p.props,null,g.mode,k),k.ref=vr(g,m,p),k.return=g,k)}function u(g,m,p,k){return m===null||m.tag!==4||m.stateNode.containerInfo!==p.containerInfo||m.stateNode.implementation!==p.implementation?(m=Rs(p,g.mode,k),m.return=g,m):(m=i(m,p.children||[]),m.return=g,m)}function d(g,m,p,k,b){return m===null||m.tag!==7?(m=gn(p,g.mode,k,b),m.return=g,m):(m=i(m,p),m.return=g,m)}function h(g,m,p){if(typeof m=="string"&&m!==""||typeof m=="number")return m=zs(""+m,g.mode,p),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ti:return p=io(m.type,m.key,m.props,null,g.mode,p),p.ref=vr(g,null,m),p.return=g,p;case En:return m=Rs(m,g.mode,p),m.return=g,m;case _t:var k=m._init;return h(g,k(m._payload),p)}if(Sr(m)||hr(m))return m=gn(m,g.mode,p,null),m.return=g,m;Ri(g,m)}return null}function f(g,m,p,k){var b=m!==null?m.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return b!==null?null:l(g,m,""+p,k);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ti:return p.key===b?c(g,m,p,k):null;case En:return p.key===b?u(g,m,p,k):null;case _t:return b=p._init,f(g,m,b(p._payload),k)}if(Sr(p)||hr(p))return b!==null?null:d(g,m,p,k,null);Ri(g,p)}return null}function v(g,m,p,k,b){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(p)||null,l(m,g,""+k,b);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ti:return g=g.get(k.key===null?p:k.key)||null,c(m,g,k,b);case En:return g=g.get(k.key===null?p:k.key)||null,u(m,g,k,b);case _t:var T=k._init;return v(g,m,p,T(k._payload),b)}if(Sr(k)||hr(k))return g=g.get(p)||null,d(m,g,k,b,null);Ri(m,k)}return null}function y(g,m,p,k){for(var b=null,T=null,E=m,j=m=0,L=null;E!==null&&j<p.length;j++){E.index>j?(L=E,E=null):L=E.sibling;var N=f(g,E,p[j],k);if(N===null){E===null&&(E=L);break}e&&E&&N.alternate===null&&t(g,E),m=o(N,m,j),T===null?b=N:T.sibling=N,T=N,E=L}if(j===p.length)return n(g,E),H&&an(g,j),b;if(E===null){for(;j<p.length;j++)E=h(g,p[j],k),E!==null&&(m=o(E,m,j),T===null?b=E:T.sibling=E,T=E);return H&&an(g,j),b}for(E=r(g,E);j<p.length;j++)L=v(E,g,j,p[j],k),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?j:L.key),m=o(L,m,j),T===null?b=L:T.sibling=L,T=L);return e&&E.forEach(function(J){return t(g,J)}),H&&an(g,j),b}function x(g,m,p,k){var b=hr(p);if(typeof b!="function")throw Error(_(150));if(p=b.call(p),p==null)throw Error(_(151));for(var T=b=null,E=m,j=m=0,L=null,N=p.next();E!==null&&!N.done;j++,N=p.next()){E.index>j?(L=E,E=null):L=E.sibling;var J=f(g,E,N.value,k);if(J===null){E===null&&(E=L);break}e&&E&&J.alternate===null&&t(g,E),m=o(J,m,j),T===null?b=J:T.sibling=J,T=J,E=L}if(N.done)return n(g,E),H&&an(g,j),b;if(E===null){for(;!N.done;j++,N=p.next())N=h(g,N.value,k),N!==null&&(m=o(N,m,j),T===null?b=N:T.sibling=N,T=N);return H&&an(g,j),b}for(E=r(g,E);!N.done;j++,N=p.next())N=v(E,g,j,N.value,k),N!==null&&(e&&N.alternate!==null&&E.delete(N.key===null?j:N.key),m=o(N,m,j),T===null?b=N:T.sibling=N,T=N);return e&&E.forEach(function(it){return t(g,it)}),H&&an(g,j),b}function S(g,m,p,k){if(typeof p=="object"&&p!==null&&p.type===_n&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ti:e:{for(var b=p.key,T=m;T!==null;){if(T.key===b){if(b=p.type,b===_n){if(T.tag===7){n(g,T.sibling),m=i(T,p.props.children),m.return=g,g=m;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===_t&&zu(b)===T.type){n(g,T.sibling),m=i(T,p.props),m.ref=vr(g,T,p),m.return=g,g=m;break e}n(g,T);break}else t(g,T);T=T.sibling}p.type===_n?(m=gn(p.props.children,g.mode,k,p.key),m.return=g,g=m):(k=io(p.type,p.key,p.props,null,g.mode,k),k.ref=vr(g,m,p),k.return=g,g=k)}return s(g);case En:e:{for(T=p.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===p.containerInfo&&m.stateNode.implementation===p.implementation){n(g,m.sibling),m=i(m,p.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=Rs(p,g.mode,k),m.return=g,g=m}return s(g);case _t:return T=p._init,S(g,m,T(p._payload),k)}if(Sr(p))return y(g,m,p,k);if(hr(p))return x(g,m,p,k);Ri(g,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,p),m.return=g,g=m):(n(g,m),m=zs(p,g.mode,k),m.return=g,g=m),s(g)):n(g,m)}return S}var Jn=sp(!0),ap=sp(!1),bo=Qt(null),jo=null,zn=null,Hl=null;function Bl(){Hl=zn=jo=null}function $l(e){var t=bo.current;O(bo),e._currentValue=t}function Pa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Yn(e,t){jo=e,Hl=zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(Hl!==e)if(e={context:e,memoizedValue:t,next:null},zn===null){if(jo===null)throw Error(_(308));zn=e,jo.dependencies={lanes:0,firstContext:e}}else zn=zn.next=e;return t}var dn=null;function Yl(e){dn===null?dn=[e]:dn.push(e)}function lp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Yl(t)):(n.next=i.next,i.next=n),t.interleaved=n,kt(e,r)}function kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dt=!1;function Kl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,kt(e,n)}return i=r.interleaved,i===null?(t.next=t,Yl(r)):(t.next=i.next,i.next=t),r.interleaved=t,kt(e,n)}function Ji(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Al(e,n)}}function Ru(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function To(e,t,n,r){var i=e.updateQueue;Dt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,s===null?o=u:s.next=u,s=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(o!==null){var h=i.baseState;s=0,d=u=c=null,l=o;do{var f=l.lane,v=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,x=l;switch(f=t,v=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){h=y.call(v,h,f);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,f=typeof y=="function"?y.call(v,h,f):y,f==null)break e;h=q({},h,f);break e;case 2:Dt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else v={eventTime:v,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=v,c=h):d=d.next=v,s|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(c=h),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);kn|=s,e.lanes=s,e.memoizedState=h}}function Iu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var pi={},ct=Qt(pi),Xr=Qt(pi),Jr=Qt(pi);function hn(e){if(e===pi)throw Error(_(174));return e}function Gl(e,t){switch(V(Jr,t),V(Xr,e),V(ct,pi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ua(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ua(t,e)}O(ct),V(ct,t)}function Zn(){O(ct),O(Xr),O(Jr)}function up(e){hn(Jr.current);var t=hn(ct.current),n=ua(t,e.type);t!==n&&(V(Xr,e),V(ct,n))}function ql(e){Xr.current===e&&(O(ct),O(Xr))}var $=Qt(0);function Eo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Cs=[];function Ql(){for(var e=0;e<Cs.length;e++)Cs[e]._workInProgressVersionPrimary=null;Cs.length=0}var Zi=jt.ReactCurrentDispatcher,Ps=jt.ReactCurrentBatchConfig,wn=0,G=null,ae=null,ue=null,_o=!1,Ar=!1,Zr=0,my=0;function ve(){throw Error(_(321))}function Xl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function Jl(e,t,n,r,i,o){if(wn=o,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Zi.current=e===null||e.memoizedState===null?xy:wy,e=n(r,i),Ar){o=0;do{if(Ar=!1,Zr=0,25<=o)throw Error(_(301));o+=1,ue=ae=null,t.updateQueue=null,Zi.current=ky,e=n(r,i)}while(Ar)}if(Zi.current=Do,t=ae!==null&&ae.next!==null,wn=0,ue=ae=G=null,_o=!1,t)throw Error(_(300));return e}function Zl(){var e=Zr!==0;return Zr=0,e}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?G.memoizedState=ue=e:ue=ue.next=e,ue}function Ke(){if(ae===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=ue===null?G.memoizedState:ue.next;if(t!==null)ue=t,ae=e;else{if(e===null)throw Error(_(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ue===null?G.memoizedState=ue=e:ue=ue.next=e}return ue}function ei(e,t){return typeof t=="function"?t(e):t}function Ns(e){var t=Ke(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,c=null,u=o;do{var d=u.lane;if((wn&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=h,s=r):c=c.next=h,G.lanes|=d,kn|=d}u=u.next}while(u!==null&&u!==o);c===null?s=r:c.next=l,nt(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,G.lanes|=o,kn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function As(e){var t=Ke(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);nt(o,t.memoizedState)||(Ce=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function dp(){}function hp(e,t){var n=G,r=Ke(),i=t(),o=!nt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ce=!0),r=r.queue,ec(mp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,ti(9,pp.bind(null,n,r,i,t),void 0,null),he===null)throw Error(_(349));wn&30||fp(n,t,i)}return i}function fp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pp(e,t,n,r){t.value=n,t.getSnapshot=r,gp(t)&&vp(e)}function mp(e,t,n){return n(function(){gp(t)&&vp(e)})}function gp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function vp(e){var t=kt(e,1);t!==null&&tt(t,e,1,-1)}function Vu(e){var t=st();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:e},t.queue=e,e=e.dispatch=yy.bind(null,G,e),[t.memoizedState,e]}function ti(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function yp(){return Ke().memoizedState}function eo(e,t,n,r){var i=st();G.flags|=e,i.memoizedState=ti(1|t,n,void 0,r===void 0?null:r)}function Qo(e,t,n,r){var i=Ke();r=r===void 0?null:r;var o=void 0;if(ae!==null){var s=ae.memoizedState;if(o=s.destroy,r!==null&&Xl(r,s.deps)){i.memoizedState=ti(t,n,o,r);return}}G.flags|=e,i.memoizedState=ti(1|t,n,o,r)}function Uu(e,t){return eo(8390656,8,e,t)}function ec(e,t){return Qo(2048,8,e,t)}function xp(e,t){return Qo(4,2,e,t)}function wp(e,t){return Qo(4,4,e,t)}function kp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sp(e,t,n){return n=n!=null?n.concat([e]):null,Qo(4,4,kp.bind(null,t,e),n)}function tc(){}function bp(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function jp(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Tp(e,t,n){return wn&21?(nt(n,t)||(n=Pf(),G.lanes|=n,kn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function gy(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=Ps.transition;Ps.transition={};try{e(!1),t()}finally{I=n,Ps.transition=r}}function Ep(){return Ke().memoizedState}function vy(e,t,n){var r=Ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_p(e))Dp(t,n);else if(n=lp(e,t,n,r),n!==null){var i=Te();tt(n,e,r,i),Cp(n,t,r)}}function yy(e,t,n){var r=Ft(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_p(e))Dp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,nt(l,s)){var c=t.interleaved;c===null?(i.next=i,Yl(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=lp(e,t,i,r),n!==null&&(i=Te(),tt(n,e,r,i),Cp(n,t,r))}}function _p(e){var t=e.alternate;return e===G||t!==null&&t===G}function Dp(e,t){Ar=_o=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Cp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Al(e,n)}}var Do={readContext:Ye,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useInsertionEffect:ve,useLayoutEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useMutableSource:ve,useSyncExternalStore:ve,useId:ve,unstable_isNewReconciler:!1},xy={readContext:Ye,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:Uu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,eo(4194308,4,kp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return eo(4194308,4,e,t)},useInsertionEffect:function(e,t){return eo(4,2,e,t)},useMemo:function(e,t){var n=st();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=st();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=vy.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:Vu,useDebugValue:tc,useDeferredValue:function(e){return st().memoizedState=e},useTransition:function(){var e=Vu(!1),t=e[0];return e=gy.bind(null,e[1]),st().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,i=st();if(H){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),he===null)throw Error(_(349));wn&30||fp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Uu(mp.bind(null,r,o,e),[e]),r.flags|=2048,ti(9,pp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=st(),t=he.identifierPrefix;if(H){var n=gt,r=mt;n=(r&~(1<<32-et(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Zr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=my++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wy={readContext:Ye,useCallback:bp,useContext:Ye,useEffect:ec,useImperativeHandle:Sp,useInsertionEffect:xp,useLayoutEffect:wp,useMemo:jp,useReducer:Ns,useRef:yp,useState:function(){return Ns(ei)},useDebugValue:tc,useDeferredValue:function(e){var t=Ke();return Tp(t,ae.memoizedState,e)},useTransition:function(){var e=Ns(ei)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:dp,useSyncExternalStore:hp,useId:Ep,unstable_isNewReconciler:!1},ky={readContext:Ye,useCallback:bp,useContext:Ye,useEffect:ec,useImperativeHandle:Sp,useInsertionEffect:xp,useLayoutEffect:wp,useMemo:jp,useReducer:As,useRef:yp,useState:function(){return As(ei)},useDebugValue:tc,useDeferredValue:function(e){var t=Ke();return ae===null?t.memoizedState=e:Tp(t,ae.memoizedState,e)},useTransition:function(){var e=As(ei)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:dp,useSyncExternalStore:hp,useId:Ep,unstable_isNewReconciler:!1};function Xe(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Na(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Xo={isMounted:function(e){return(e=e._reactInternals)?jn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Te(),i=Ft(e),o=vt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Ut(e,o,i),t!==null&&(tt(t,e,i,r),Ji(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Te(),i=Ft(e),o=vt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ut(e,o,i),t!==null&&(tt(t,e,i,r),Ji(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Te(),r=Ft(e),i=vt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ut(e,i,r),t!==null&&(tt(t,e,r,n),Ji(t,e,r))}};function Ou(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Kr(n,r)||!Kr(i,o):!0}function Pp(e,t,n){var r=!1,i=$t,o=t.contextType;return typeof o=="object"&&o!==null?o=Ye(o):(i=Ne(t)?yn:ke.current,r=t.contextTypes,o=(r=r!=null)?Qn(e,i):$t),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Xo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Fu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Xo.enqueueReplaceState(t,t.state,null)}function Aa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Kl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ye(o):(o=Ne(t)?yn:ke.current,i.context=Qn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Na(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Xo.enqueueReplaceState(i,i.state,null),To(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function er(e,t){try{var n="",r=t;do n+=q0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ls(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function La(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Sy=typeof WeakMap=="function"?WeakMap:Map;function Np(e,t,n){n=vt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Po||(Po=!0,Ha=r),La(e,t)},n}function Ap(e,t,n){n=vt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){La(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){La(e,t),typeof r!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Wu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Sy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ry.bind(null,e,t,n),t.then(e,e))}function Hu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Bu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vt(-1,1),t.tag=2,Ut(n,t,1))),n.lanes|=1),e)}var by=jt.ReactCurrentOwner,Ce=!1;function Se(e,t,n,r){t.child=e===null?ap(t,null,n,r):Jn(t,e.child,n,r)}function $u(e,t,n,r,i){n=n.render;var o=t.ref;return Yn(t,i),r=Jl(e,t,n,r,o,i),n=Zl(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,St(e,t,i)):(H&&n&&Ol(t),t.flags|=1,Se(e,t,r,i),t.child)}function Yu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!cc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Lp(e,t,o,r,i)):(e=io(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Kr,n(s,r)&&e.ref===t.ref)return St(e,t,i)}return t.flags|=1,e=Wt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Lp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Kr(o,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,St(e,t,i)}return Ma(e,t,n,r,i)}function Mp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(In,Le),Le|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(In,Le),Le|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,V(In,Le),Le|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,V(In,Le),Le|=r;return Se(e,t,i,n),t.child}function zp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ma(e,t,n,r,i){var o=Ne(n)?yn:ke.current;return o=Qn(t,o),Yn(t,i),n=Jl(e,t,n,r,o,i),r=Zl(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,St(e,t,i)):(H&&r&&Ol(t),t.flags|=1,Se(e,t,n,i),t.child)}function Ku(e,t,n,r,i){if(Ne(n)){var o=!0;wo(t)}else o=!1;if(Yn(t,i),t.stateNode===null)to(e,t),Pp(t,n,r),Aa(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ye(u):(u=Ne(n)?yn:ke.current,u=Qn(t,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Fu(t,s,r,u),Dt=!1;var f=t.memoizedState;s.state=f,To(t,r,s,i),c=t.memoizedState,l!==r||f!==c||Pe.current||Dt?(typeof d=="function"&&(Na(t,n,d,r),c=t.memoizedState),(l=Dt||Ou(t,n,l,r,f,c,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,cp(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Xe(t.type,l),s.props=u,h=t.pendingProps,f=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ye(c):(c=Ne(n)?yn:ke.current,c=Qn(t,c));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==h||f!==c)&&Fu(t,s,r,c),Dt=!1,f=t.memoizedState,s.state=f,To(t,r,s,i);var y=t.memoizedState;l!==h||f!==y||Pe.current||Dt?(typeof v=="function"&&(Na(t,n,v,r),y=t.memoizedState),(u=Dt||Ou(t,n,u,r,f,y,c)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return za(e,t,n,r,o,i)}function za(e,t,n,r,i,o){zp(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Au(t,n,!1),St(e,t,o);r=t.stateNode,by.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Jn(t,e.child,null,o),t.child=Jn(t,null,l,o)):Se(e,t,l,o),t.memoizedState=r.state,i&&Au(t,n,!0),t.child}function Rp(e){var t=e.stateNode;t.pendingContext?Nu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Nu(e,t.context,!1),Gl(e,t.containerInfo)}function Gu(e,t,n,r,i){return Xn(),Wl(i),t.flags|=256,Se(e,t,n,r),t.child}var Ra={dehydrated:null,treeContext:null,retryLane:0};function Ia(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ip(e,t,n){var r=t.pendingProps,i=$.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),V($,i&1),e===null)return Ca(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=es(s,r,0,null),e=gn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ia(n),t.memoizedState=Ra,e):nc(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return jy(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Wt(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Wt(l,o):(o=gn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Ia(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Ra,r}return o=e.child,e=o.sibling,r=Wt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function nc(e,t){return t=es({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ii(e,t,n,r){return r!==null&&Wl(r),Jn(t,e.child,null,n),e=nc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jy(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Ls(Error(_(422))),Ii(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=es({mode:"visible",children:r.children},i,0,null),o=gn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Jn(t,e.child,null,s),t.child.memoizedState=Ia(s),t.memoizedState=Ra,o);if(!(t.mode&1))return Ii(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(_(419)),r=Ls(o,r,void 0),Ii(e,t,s,r)}if(l=(s&e.childLanes)!==0,Ce||l){if(r=he,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,kt(e,i),tt(r,e,i,-1))}return lc(),r=Ls(Error(_(421))),Ii(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Iy.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Me=Vt(i.nextSibling),ze=t,H=!0,Ze=null,e!==null&&(Oe[Fe++]=mt,Oe[Fe++]=gt,Oe[Fe++]=xn,mt=e.id,gt=e.overflow,xn=t),t=nc(t,r.children),t.flags|=4096,t)}function qu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Pa(e.return,t,n)}function Ms(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Vp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Se(e,t,r.children,n),r=$.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qu(e,n,t);else if(e.tag===19)qu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V($,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Eo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ms(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Eo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ms(t,!0,n,null,o);break;case"together":Ms(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function to(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function St(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),kn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=Wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ty(e,t,n){switch(t.tag){case 3:Rp(t),Xn();break;case 5:up(t);break;case 1:Ne(t.type)&&wo(t);break;case 4:Gl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;V(bo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V($,$.current&1),t.flags|=128,null):n&t.child.childLanes?Ip(e,t,n):(V($,$.current&1),e=St(e,t,n),e!==null?e.sibling:null);V($,$.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Vp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V($,$.current),r)break;return null;case 22:case 23:return t.lanes=0,Mp(e,t,n)}return St(e,t,n)}var Up,Va,Op,Fp;Up=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Va=function(){};Op=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,hn(ct.current);var o=null;switch(n){case"input":i=sa(e,i),r=sa(e,r),o=[];break;case"select":i=q({},i,{value:void 0}),r=q({},r,{value:void 0}),o=[];break;case"textarea":i=ca(e,i),r=ca(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=yo)}da(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Or.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Or.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&U("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Fp=function(e,t,n,r){n!==r&&(t.flags|=4)};function yr(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ey(e,t,n){var r=t.pendingProps;switch(Fl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return Ne(t.type)&&xo(),ye(t),null;case 3:return r=t.stateNode,Zn(),O(Pe),O(ke),Ql(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ze!==null&&(Ya(Ze),Ze=null))),Va(e,t),ye(t),null;case 5:ql(t);var i=hn(Jr.current);if(n=t.type,e!==null&&t.stateNode!=null)Op(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return ye(t),null}if(e=hn(ct.current),zi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[at]=t,r[Qr]=o,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(i=0;i<jr.length;i++)U(jr[i],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":iu(r,o),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},U("invalid",r);break;case"textarea":su(r,o),U("invalid",r)}da(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Mi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Mi(r.textContent,l,e),i=["children",""+l]):Or.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&U("scroll",r)}switch(n){case"input":Ei(r),ou(r,o,!0);break;case"textarea":Ei(r),au(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=yo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=mf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[at]=t,e[Qr]=r,Up(e,t,!1,!1),t.stateNode=e;e:{switch(s=ha(n,r),n){case"dialog":U("cancel",e),U("close",e),i=r;break;case"iframe":case"object":case"embed":U("load",e),i=r;break;case"video":case"audio":for(i=0;i<jr.length;i++)U(jr[i],e);i=r;break;case"source":U("error",e),i=r;break;case"img":case"image":case"link":U("error",e),U("load",e),i=r;break;case"details":U("toggle",e),i=r;break;case"input":iu(e,r),i=sa(e,r),U("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=q({},r,{value:void 0}),U("invalid",e);break;case"textarea":su(e,r),i=ca(e,r),U("invalid",e);break;default:i=r}da(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?yf(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&gf(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Fr(e,c):typeof c=="number"&&Fr(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Or.hasOwnProperty(o)?c!=null&&o==="onScroll"&&U("scroll",e):c!=null&&El(e,o,c,s))}switch(n){case"input":Ei(e),ou(e,r,!1);break;case"textarea":Ei(e),au(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Bt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Wn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Wn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=yo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ye(t),null;case 6:if(e&&t.stateNode!=null)Fp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=hn(Jr.current),hn(ct.current),zi(t)){if(r=t.stateNode,n=t.memoizedProps,r[at]=t,(o=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:Mi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[at]=t,t.stateNode=r}return ye(t),null;case 13:if(O($),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&Me!==null&&t.mode&1&&!(t.flags&128))op(),Xn(),t.flags|=98560,o=!1;else if(o=zi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[at]=t}else Xn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ye(t),o=!1}else Ze!==null&&(Ya(Ze),Ze=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||$.current&1?le===0&&(le=3):lc())),t.updateQueue!==null&&(t.flags|=4),ye(t),null);case 4:return Zn(),Va(e,t),e===null&&Gr(t.stateNode.containerInfo),ye(t),null;case 10:return $l(t.type._context),ye(t),null;case 17:return Ne(t.type)&&xo(),ye(t),null;case 19:if(O($),o=t.memoizedState,o===null)return ye(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)yr(o,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Eo(e),s!==null){for(t.flags|=128,yr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V($,$.current&1|2),t.child}e=e.sibling}o.tail!==null&&ee()>tr&&(t.flags|=128,r=!0,yr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Eo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!H)return ye(t),null}else 2*ee()-o.renderingStartTime>tr&&n!==1073741824&&(t.flags|=128,r=!0,yr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ee(),t.sibling=null,n=$.current,V($,r?n&1|2:n&1),t):(ye(t),null);case 22:case 23:return ac(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Le&1073741824&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function _y(e,t){switch(Fl(t),t.tag){case 1:return Ne(t.type)&&xo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zn(),O(Pe),O(ke),Ql(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ql(t),null;case 13:if(O($),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Xn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O($),null;case 4:return Zn(),null;case 10:return $l(t.type._context),null;case 22:case 23:return ac(),null;case 24:return null;default:return null}}var Vi=!1,xe=!1,Dy=typeof WeakSet=="function"?WeakSet:Set,P=null;function Rn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function Ua(e,t,n){try{n()}catch(r){X(e,t,r)}}var Qu=!1;function Cy(e,t){if(Sa=mo,e=Yf(),Ul(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,h=e,f=null;t:for(;;){for(var v;h!==n||i!==0&&h.nodeType!==3||(l=s+i),h!==o||r!==0&&h.nodeType!==3||(c=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(v=h.firstChild)!==null;)f=h,h=v;for(;;){if(h===e)break t;if(f===n&&++u===i&&(l=s),f===o&&++d===r&&(c=s),(v=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=v}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ba={focusedElem:e,selectionRange:n},mo=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,S=y.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?x:Xe(t.type,x),S);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(k){X(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return y=Qu,Qu=!1,y}function Lr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ua(t,n,o)}i=i.next}while(i!==r)}}function Jo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Oa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wp(e){var t=e.alternate;t!==null&&(e.alternate=null,Wp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[at],delete t[Qr],delete t[Ea],delete t[dy],delete t[hy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hp(e){return e.tag===5||e.tag===3||e.tag===4}function Xu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=yo));else if(r!==4&&(e=e.child,e!==null))for(Fa(e,t,n),e=e.sibling;e!==null;)Fa(e,t,n),e=e.sibling}function Wa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Wa(e,t,n),e=e.sibling;e!==null;)Wa(e,t,n),e=e.sibling}var fe=null,Je=!1;function Tt(e,t,n){for(n=n.child;n!==null;)Bp(e,t,n),n=n.sibling}function Bp(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Bo,n)}catch{}switch(n.tag){case 5:xe||Rn(n,t);case 6:var r=fe,i=Je;fe=null,Tt(e,t,n),fe=r,Je=i,fe!==null&&(Je?(e=fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(Je?(e=fe,n=n.stateNode,e.nodeType===8?_s(e.parentNode,n):e.nodeType===1&&_s(e,n),$r(e)):_s(fe,n.stateNode));break;case 4:r=fe,i=Je,fe=n.stateNode.containerInfo,Je=!0,Tt(e,t,n),fe=r,Je=i;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ua(n,t,s),i=i.next}while(i!==r)}Tt(e,t,n);break;case 1:if(!xe&&(Rn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){X(n,t,l)}Tt(e,t,n);break;case 21:Tt(e,t,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,Tt(e,t,n),xe=r):Tt(e,t,n);break;default:Tt(e,t,n)}}function Ju(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Dy),t.forEach(function(r){var i=Vy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ge(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:fe=l.stateNode,Je=!1;break e;case 3:fe=l.stateNode.containerInfo,Je=!0;break e;case 4:fe=l.stateNode.containerInfo,Je=!0;break e}l=l.return}if(fe===null)throw Error(_(160));Bp(o,s,i),fe=null,Je=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){X(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$p(t,e),t=t.sibling}function $p(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(t,e),ot(e),r&4){try{Lr(3,e,e.return),Jo(3,e)}catch(x){X(e,e.return,x)}try{Lr(5,e,e.return)}catch(x){X(e,e.return,x)}}break;case 1:Ge(t,e),ot(e),r&512&&n!==null&&Rn(n,n.return);break;case 5:if(Ge(t,e),ot(e),r&512&&n!==null&&Rn(n,n.return),e.flags&32){var i=e.stateNode;try{Fr(i,"")}catch(x){X(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&ff(i,o),ha(l,s);var u=ha(l,o);for(s=0;s<c.length;s+=2){var d=c[s],h=c[s+1];d==="style"?yf(i,h):d==="dangerouslySetInnerHTML"?gf(i,h):d==="children"?Fr(i,h):El(i,d,h,u)}switch(l){case"input":aa(i,o);break;case"textarea":pf(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Wn(i,!!o.multiple,v,!1):f!==!!o.multiple&&(o.defaultValue!=null?Wn(i,!!o.multiple,o.defaultValue,!0):Wn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Qr]=o}catch(x){X(e,e.return,x)}}break;case 6:if(Ge(t,e),ot(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){X(e,e.return,x)}}break;case 3:if(Ge(t,e),ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$r(t.containerInfo)}catch(x){X(e,e.return,x)}break;case 4:Ge(t,e),ot(e);break;case 13:Ge(t,e),ot(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(oc=ee())),r&4&&Ju(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(xe=(u=xe)||d,Ge(t,e),xe=u):Ge(t,e),ot(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(P=e,d=e.child;d!==null;){for(h=P=d;P!==null;){switch(f=P,v=f.child,f.tag){case 0:case 11:case 14:case 15:Lr(4,f,f.return);break;case 1:Rn(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){X(r,n,x)}}break;case 5:Rn(f,f.return);break;case 22:if(f.memoizedState!==null){ed(h);continue}}v!==null?(v.return=f,P=v):ed(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=h.stateNode,c=h.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=vf("display",s))}catch(x){X(e,e.return,x)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(x){X(e,e.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ge(t,e),ot(e),r&4&&Ju(e);break;case 21:break;default:Ge(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Hp(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fr(i,""),r.flags&=-33);var o=Xu(e);Wa(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Xu(e);Fa(e,l,s);break;default:throw Error(_(161))}}catch(c){X(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Py(e,t,n){P=e,Yp(e)}function Yp(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Vi;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||xe;l=Vi;var u=xe;if(Vi=s,(xe=c)&&!u)for(P=i;P!==null;)s=P,c=s.child,s.tag===22&&s.memoizedState!==null?td(i):c!==null?(c.return=s,P=c):td(i);for(;o!==null;)P=o,Yp(o),o=o.sibling;P=i,Vi=l,xe=u}Zu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,P=o):Zu(e)}}function Zu(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||Jo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Xe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Iu(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Iu(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&$r(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}xe||t.flags&512&&Oa(t)}catch(f){X(t,t.return,f)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function ed(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function td(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Jo(4,t)}catch(c){X(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){X(t,i,c)}}var o=t.return;try{Oa(t)}catch(c){X(t,o,c)}break;case 5:var s=t.return;try{Oa(t)}catch(c){X(t,s,c)}}}catch(c){X(t,t.return,c)}if(t===e){P=null;break}var l=t.sibling;if(l!==null){l.return=t.return,P=l;break}P=t.return}}var Ny=Math.ceil,Co=jt.ReactCurrentDispatcher,rc=jt.ReactCurrentOwner,Be=jt.ReactCurrentBatchConfig,R=0,he=null,ie=null,me=0,Le=0,In=Qt(0),le=0,ni=null,kn=0,Zo=0,ic=0,Mr=null,De=null,oc=0,tr=1/0,ft=null,Po=!1,Ha=null,Ot=null,Ui=!1,At=null,No=0,zr=0,Ba=null,no=-1,ro=0;function Te(){return R&6?ee():no!==-1?no:no=ee()}function Ft(e){return e.mode&1?R&2&&me!==0?me&-me:py.transition!==null?(ro===0&&(ro=Pf()),ro):(e=I,e!==0||(e=window.event,e=e===void 0?16:If(e.type)),e):1}function tt(e,t,n,r){if(50<zr)throw zr=0,Ba=null,Error(_(185));di(e,n,r),(!(R&2)||e!==he)&&(e===he&&(!(R&2)&&(Zo|=n),le===4&&Pt(e,me)),Ae(e,r),n===1&&R===0&&!(t.mode&1)&&(tr=ee()+500,qo&&Xt()))}function Ae(e,t){var n=e.callbackNode;pv(e,t);var r=po(e,e===he?me:0);if(r===0)n!==null&&uu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&uu(n),t===1)e.tag===0?fy(nd.bind(null,e)):np(nd.bind(null,e)),cy(function(){!(R&6)&&Xt()}),n=null;else{switch(Nf(r)){case 1:n=Nl;break;case 4:n=Df;break;case 16:n=fo;break;case 536870912:n=Cf;break;default:n=fo}n=em(n,Kp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Kp(e,t){if(no=-1,ro=0,R&6)throw Error(_(327));var n=e.callbackNode;if(Kn()&&e.callbackNode!==n)return null;var r=po(e,e===he?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ao(e,r);else{t=r;var i=R;R|=2;var o=qp();(he!==e||me!==t)&&(ft=null,tr=ee()+500,mn(e,t));do try{My();break}catch(l){Gp(e,l)}while(!0);Bl(),Co.current=o,R=i,ie!==null?t=0:(he=null,me=0,t=le)}if(t!==0){if(t===2&&(i=va(e),i!==0&&(r=i,t=$a(e,i))),t===1)throw n=ni,mn(e,0),Pt(e,r),Ae(e,ee()),n;if(t===6)Pt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ay(i)&&(t=Ao(e,r),t===2&&(o=va(e),o!==0&&(r=o,t=$a(e,o))),t===1))throw n=ni,mn(e,0),Pt(e,r),Ae(e,ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:ln(e,De,ft);break;case 3:if(Pt(e,r),(r&130023424)===r&&(t=oc+500-ee(),10<t)){if(po(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Te(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ta(ln.bind(null,e,De,ft),t);break}ln(e,De,ft);break;case 4:if(Pt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-et(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ny(r/1960))-r,10<r){e.timeoutHandle=Ta(ln.bind(null,e,De,ft),r);break}ln(e,De,ft);break;case 5:ln(e,De,ft);break;default:throw Error(_(329))}}}return Ae(e,ee()),e.callbackNode===n?Kp.bind(null,e):null}function $a(e,t){var n=Mr;return e.current.memoizedState.isDehydrated&&(mn(e,t).flags|=256),e=Ao(e,t),e!==2&&(t=De,De=n,t!==null&&Ya(t)),e}function Ya(e){De===null?De=e:De.push.apply(De,e)}function Ay(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!nt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pt(e,t){for(t&=~ic,t&=~Zo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-et(t),r=1<<n;e[n]=-1,t&=~r}}function nd(e){if(R&6)throw Error(_(327));Kn();var t=po(e,0);if(!(t&1))return Ae(e,ee()),null;var n=Ao(e,t);if(e.tag!==0&&n===2){var r=va(e);r!==0&&(t=r,n=$a(e,r))}if(n===1)throw n=ni,mn(e,0),Pt(e,t),Ae(e,ee()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ln(e,De,ft),Ae(e,ee()),null}function sc(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(tr=ee()+500,qo&&Xt())}}function Sn(e){At!==null&&At.tag===0&&!(R&6)&&Kn();var t=R;R|=1;var n=Be.transition,r=I;try{if(Be.transition=null,I=1,e)return e()}finally{I=r,Be.transition=n,R=t,!(R&6)&&Xt()}}function ac(){Le=In.current,O(In)}function mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ly(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(Fl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xo();break;case 3:Zn(),O(Pe),O(ke),Ql();break;case 5:ql(r);break;case 4:Zn();break;case 13:O($);break;case 19:O($);break;case 10:$l(r.type._context);break;case 22:case 23:ac()}n=n.return}if(he=e,ie=e=Wt(e.current,null),me=Le=t,le=0,ni=null,ic=Zo=kn=0,De=Mr=null,dn!==null){for(t=0;t<dn.length;t++)if(n=dn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}dn=null}return e}function Gp(e,t){do{var n=ie;try{if(Bl(),Zi.current=Do,_o){for(var r=G.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}_o=!1}if(wn=0,ue=ae=G=null,Ar=!1,Zr=0,rc.current=null,n===null||n.return===null){le=1,ni=t,ie=null;break}e:{var o=e,s=n.return,l=n,c=t;if(t=me,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Hu(s);if(v!==null){v.flags&=-257,Bu(v,s,l,o,t),v.mode&1&&Wu(o,u,t),t=v,c=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(c),t.updateQueue=x}else y.add(c);break e}else{if(!(t&1)){Wu(o,u,t),lc();break e}c=Error(_(426))}}else if(H&&l.mode&1){var S=Hu(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Bu(S,s,l,o,t),Wl(er(c,l));break e}}o=c=er(c,l),le!==4&&(le=2),Mr===null?Mr=[o]:Mr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=Np(o,c,t);Ru(o,g);break e;case 1:l=c;var m=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ot===null||!Ot.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=Ap(o,l,t);Ru(o,k);break e}}o=o.return}while(o!==null)}Xp(n)}catch(b){t=b,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(!0)}function qp(){var e=Co.current;return Co.current=Do,e===null?Do:e}function lc(){(le===0||le===3||le===2)&&(le=4),he===null||!(kn&268435455)&&!(Zo&268435455)||Pt(he,me)}function Ao(e,t){var n=R;R|=2;var r=qp();(he!==e||me!==t)&&(ft=null,mn(e,t));do try{Ly();break}catch(i){Gp(e,i)}while(!0);if(Bl(),R=n,Co.current=r,ie!==null)throw Error(_(261));return he=null,me=0,le}function Ly(){for(;ie!==null;)Qp(ie)}function My(){for(;ie!==null&&!ov();)Qp(ie)}function Qp(e){var t=Zp(e.alternate,e,Le);e.memoizedProps=e.pendingProps,t===null?Xp(e):ie=t,rc.current=null}function Xp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=_y(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,ie=null;return}}else if(n=Ey(n,t,Le),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);le===0&&(le=5)}function ln(e,t,n){var r=I,i=Be.transition;try{Be.transition=null,I=1,zy(e,t,n,r)}finally{Be.transition=i,I=r}return null}function zy(e,t,n,r){do Kn();while(At!==null);if(R&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(mv(e,o),e===he&&(ie=he=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ui||(Ui=!0,em(fo,function(){return Kn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Be.transition,Be.transition=null;var s=I;I=1;var l=R;R|=4,rc.current=null,Cy(e,n),$p(n,e),ty(ba),mo=!!Sa,ba=Sa=null,e.current=n,Py(n),sv(),R=l,I=s,Be.transition=o}else e.current=n;if(Ui&&(Ui=!1,At=e,No=i),o=e.pendingLanes,o===0&&(Ot=null),cv(n.stateNode),Ae(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Po)throw Po=!1,e=Ha,Ha=null,e;return No&1&&e.tag!==0&&Kn(),o=e.pendingLanes,o&1?e===Ba?zr++:(zr=0,Ba=e):zr=0,Xt(),null}function Kn(){if(At!==null){var e=Nf(No),t=Be.transition,n=I;try{if(Be.transition=null,I=16>e?16:e,At===null)var r=!1;else{if(e=At,At=null,No=0,R&6)throw Error(_(331));var i=R;for(R|=4,P=e.current;P!==null;){var o=P,s=o.child;if(P.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(P=u;P!==null;){var d=P;switch(d.tag){case 0:case 11:case 15:Lr(8,d,o)}var h=d.child;if(h!==null)h.return=d,P=h;else for(;P!==null;){d=P;var f=d.sibling,v=d.return;if(Wp(d),d===u){P=null;break}if(f!==null){f.return=v,P=f;break}P=v}}}var y=o.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}P=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,P=s;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Lr(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,P=g;break e}P=o.return}}var m=e.current;for(P=m;P!==null;){s=P;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,P=p;else e:for(s=m;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Jo(9,l)}}catch(b){X(l,l.return,b)}if(l===s){P=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,P=k;break e}P=l.return}}if(R=i,Xt(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Bo,e)}catch{}r=!0}return r}finally{I=n,Be.transition=t}}return!1}function rd(e,t,n){t=er(n,t),t=Np(e,t,1),e=Ut(e,t,1),t=Te(),e!==null&&(di(e,1,t),Ae(e,t))}function X(e,t,n){if(e.tag===3)rd(e,e,n);else for(;t!==null;){if(t.tag===3){rd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ot===null||!Ot.has(r))){e=er(n,e),e=Ap(t,e,1),t=Ut(t,e,1),e=Te(),t!==null&&(di(t,1,e),Ae(t,e));break}}t=t.return}}function Ry(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Te(),e.pingedLanes|=e.suspendedLanes&n,he===e&&(me&n)===n&&(le===4||le===3&&(me&130023424)===me&&500>ee()-oc?mn(e,0):ic|=n),Ae(e,t)}function Jp(e,t){t===0&&(e.mode&1?(t=Ci,Ci<<=1,!(Ci&130023424)&&(Ci=4194304)):t=1);var n=Te();e=kt(e,t),e!==null&&(di(e,t,n),Ae(e,n))}function Iy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jp(e,n)}function Vy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Jp(e,n)}var Zp;Zp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pe.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,Ty(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,H&&t.flags&1048576&&rp(t,So,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;to(e,t),e=t.pendingProps;var i=Qn(t,ke.current);Yn(t,n),i=Jl(null,t,r,e,i,n);var o=Zl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(o=!0,wo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Kl(t),i.updater=Xo,t.stateNode=i,i._reactInternals=t,Aa(t,r,e,n),t=za(null,t,r,!0,o,n)):(t.tag=0,H&&o&&Ol(t),Se(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(to(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Oy(r),e=Xe(r,e),i){case 0:t=Ma(null,t,r,e,n);break e;case 1:t=Ku(null,t,r,e,n);break e;case 11:t=$u(null,t,r,e,n);break e;case 14:t=Yu(null,t,r,Xe(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),Ma(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),Ku(e,t,r,i,n);case 3:e:{if(Rp(t),e===null)throw Error(_(387));r=t.pendingProps,o=t.memoizedState,i=o.element,cp(e,t),To(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=er(Error(_(423)),t),t=Gu(e,t,r,n,i);break e}else if(r!==i){i=er(Error(_(424)),t),t=Gu(e,t,r,n,i);break e}else for(Me=Vt(t.stateNode.containerInfo.firstChild),ze=t,H=!0,Ze=null,n=ap(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xn(),r===i){t=St(e,t,n);break e}Se(e,t,r,n)}t=t.child}return t;case 5:return up(t),e===null&&Ca(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,ja(r,i)?s=null:o!==null&&ja(r,o)&&(t.flags|=32),zp(e,t),Se(e,t,s,n),t.child;case 6:return e===null&&Ca(t),null;case 13:return Ip(e,t,n);case 4:return Gl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Jn(t,null,r,n):Se(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),$u(e,t,r,i,n);case 7:return Se(e,t,t.pendingProps,n),t.child;case 8:return Se(e,t,t.pendingProps.children,n),t.child;case 12:return Se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,V(bo,r._currentValue),r._currentValue=s,o!==null)if(nt(o.value,s)){if(o.children===i.children&&!Pe.current){t=St(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=vt(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Pa(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(_(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Pa(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Se(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Yn(t,n),i=Ye(i),r=r(i),t.flags|=1,Se(e,t,r,n),t.child;case 14:return r=t.type,i=Xe(r,t.pendingProps),i=Xe(r.type,i),Yu(e,t,r,i,n);case 15:return Lp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),to(e,t),t.tag=1,Ne(r)?(e=!0,wo(t)):e=!1,Yn(t,n),Pp(t,r,i),Aa(t,r,i,n),za(null,t,r,!0,e,n);case 19:return Vp(e,t,n);case 22:return Mp(e,t,n)}throw Error(_(156,t.tag))};function em(e,t){return _f(e,t)}function Uy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,t,n,r){return new Uy(e,t,n,r)}function cc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Oy(e){if(typeof e=="function")return cc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Dl)return 11;if(e===Cl)return 14}return 2}function Wt(e,t){var n=e.alternate;return n===null?(n=We(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function io(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")cc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case _n:return gn(n.children,i,o,t);case _l:s=8,i|=8;break;case na:return e=We(12,n,t,i|2),e.elementType=na,e.lanes=o,e;case ra:return e=We(13,n,t,i),e.elementType=ra,e.lanes=o,e;case ia:return e=We(19,n,t,i),e.elementType=ia,e.lanes=o,e;case uf:return es(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case lf:s=10;break e;case cf:s=9;break e;case Dl:s=11;break e;case Cl:s=14;break e;case _t:s=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=We(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function gn(e,t,n,r){return e=We(7,e,r,t),e.lanes=n,e}function es(e,t,n,r){return e=We(22,e,r,t),e.elementType=uf,e.lanes=n,e.stateNode={isHidden:!1},e}function zs(e,t,n){return e=We(6,e,null,t),e.lanes=n,e}function Rs(e,t,n){return t=We(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gs(0),this.expirationTimes=gs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function uc(e,t,n,r,i,o,s,l,c){return e=new Fy(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=We(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kl(o),e}function Wy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:En,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function tm(e){if(!e)return $t;e=e._reactInternals;e:{if(jn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Ne(n))return tp(e,n,t)}return t}function nm(e,t,n,r,i,o,s,l,c){return e=uc(n,r,!0,e,i,o,s,l,c),e.context=tm(null),n=e.current,r=Te(),i=Ft(n),o=vt(r,i),o.callback=t??null,Ut(n,o,i),e.current.lanes=i,di(e,i,r),Ae(e,r),e}function ts(e,t,n,r){var i=t.current,o=Te(),s=Ft(i);return n=tm(n),t.context===null?t.context=n:t.pendingContext=n,t=vt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ut(i,t,s),e!==null&&(tt(e,i,s,o),Ji(e,i,s)),s}function Lo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function id(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function dc(e,t){id(e,t),(e=e.alternate)&&id(e,t)}function Hy(){return null}var rm=typeof reportError=="function"?reportError:function(e){console.error(e)};function hc(e){this._internalRoot=e}ns.prototype.render=hc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));ts(e,t,null,null)};ns.prototype.unmount=hc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sn(function(){ts(null,e,null,null)}),t[wt]=null}};function ns(e){this._internalRoot=e}ns.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ct.length&&t!==0&&t<Ct[n].priority;n++);Ct.splice(n,0,e),n===0&&Rf(e)}};function fc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function rs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function od(){}function By(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Lo(s);o.call(u)}}var s=nm(t,r,e,0,null,!1,!1,"",od);return e._reactRootContainer=s,e[wt]=s.current,Gr(e.nodeType===8?e.parentNode:e),Sn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Lo(c);l.call(u)}}var c=uc(e,0,!1,null,null,!1,!1,"",od);return e._reactRootContainer=c,e[wt]=c.current,Gr(e.nodeType===8?e.parentNode:e),Sn(function(){ts(t,c,n,r)}),c}function is(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var c=Lo(s);l.call(c)}}ts(t,s,e,i)}else s=By(n,t,e,i,r);return Lo(s)}Af=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=br(t.pendingLanes);n!==0&&(Al(t,n|1),Ae(t,ee()),!(R&6)&&(tr=ee()+500,Xt()))}break;case 13:Sn(function(){var r=kt(e,1);if(r!==null){var i=Te();tt(r,e,1,i)}}),dc(e,1)}};Ll=function(e){if(e.tag===13){var t=kt(e,134217728);if(t!==null){var n=Te();tt(t,e,134217728,n)}dc(e,134217728)}};Lf=function(e){if(e.tag===13){var t=Ft(e),n=kt(e,t);if(n!==null){var r=Te();tt(n,e,t,r)}dc(e,t)}};Mf=function(){return I};zf=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};pa=function(e,t,n){switch(t){case"input":if(aa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Go(r);if(!i)throw Error(_(90));hf(r),aa(r,i)}}}break;case"textarea":pf(e,n);break;case"select":t=n.value,t!=null&&Wn(e,!!n.multiple,t,!1)}};kf=sc;Sf=Sn;var $y={usingClientEntryPoint:!1,Events:[fi,Nn,Go,xf,wf,sc]},xr={findFiberByHostInstance:un,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yy={bundleType:xr.bundleType,version:xr.version,rendererPackageName:xr.rendererPackageName,rendererConfig:xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tf(e),e===null?null:e.stateNode},findFiberByHostInstance:xr.findFiberByHostInstance||Hy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oi.isDisabled&&Oi.supportsFiber)try{Bo=Oi.inject(Yy),lt=Oi}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$y;Ie.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fc(t))throw Error(_(200));return Wy(e,t,null,n)};Ie.createRoot=function(e,t){if(!fc(e))throw Error(_(299));var n=!1,r="",i=rm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=uc(e,1,!1,null,null,n,!1,r,i),e[wt]=t.current,Gr(e.nodeType===8?e.parentNode:e),new hc(t)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Tf(t),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return Sn(e)};Ie.hydrate=function(e,t,n){if(!rs(t))throw Error(_(200));return is(null,e,t,!0,n)};Ie.hydrateRoot=function(e,t,n){if(!fc(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=rm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=nm(t,null,e,1,n??null,i,!1,o,s),e[wt]=t.current,Gr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ns(t)};Ie.render=function(e,t,n){if(!rs(t))throw Error(_(200));return is(null,e,t,!1,n)};Ie.unmountComponentAtNode=function(e){if(!rs(e))throw Error(_(40));return e._reactRootContainer?(Sn(function(){is(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1};Ie.unstable_batchedUpdates=sc;Ie.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!rs(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return is(e,t,n,!1,r)};Ie.version="18.3.1-next-f1338f8080-20240426";function im(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(im)}catch(e){console.error(e)}}im(),rf.exports=Ie;var Ky=rf.exports,om,sd=Ky;om=sd.createRoot,sd.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ri(){return ri=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ri.apply(null,arguments)}var Lt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Lt||(Lt={}));const ad="popstate";function Gy(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:l}=r.location;return Ka("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Mo(i)}return Qy(t,n,null,e)}function te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function sm(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function qy(){return Math.random().toString(36).substr(2,8)}function ld(e,t){return{usr:e.state,key:e.key,idx:t}}function Ka(e,t,n,r){return n===void 0&&(n=null),ri({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?sr(t):t,{state:n,key:t&&t.key||r||qy()})}function Mo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function sr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Qy(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,l=Lt.Pop,c=null,u=d();u==null&&(u=0,s.replaceState(ri({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function h(){l=Lt.Pop;let S=d(),g=S==null?null:S-u;u=S,c&&c({action:l,location:x.location,delta:g})}function f(S,g){l=Lt.Push;let m=Ka(x.location,S,g);u=d()+1;let p=ld(m,u),k=x.createHref(m);try{s.pushState(p,"",k)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(k)}o&&c&&c({action:l,location:x.location,delta:1})}function v(S,g){l=Lt.Replace;let m=Ka(x.location,S,g);u=d();let p=ld(m,u),k=x.createHref(m);s.replaceState(p,"",k),o&&c&&c({action:l,location:x.location,delta:0})}function y(S){let g=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof S=="string"?S:Mo(S);return m=m.replace(/ $/,"%20"),te(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let x={get action(){return l},get location(){return e(i,s)},listen(S){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(ad,h),c=S,()=>{i.removeEventListener(ad,h),c=null}},createHref(S){return t(i,S)},createURL:y,encodeLocation(S){let g=y(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:v,go(S){return s.go(S)}};return x}var cd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(cd||(cd={}));function Xy(e,t,n){return n===void 0&&(n="/"),Jy(e,t,n)}function Jy(e,t,n,r){let i=typeof t=="string"?sr(t):t,o=pc(i.pathname||"/",n);if(o==null)return null;let s=am(e);Zy(s);let l=null,c=dx(o);for(let u=0;l==null&&u<s.length;++u)l=lx(s[u],c);return l}function am(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};c.relativePath.startsWith("/")&&(te(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Ht([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(te(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),am(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:sx(u,o.index),routesMeta:d})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let c of lm(o.path))i(o,s,c)}),t}function lm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=lm(r.join("/")),l=[];return l.push(...s.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...s),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Zy(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ax(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ex=/^:[\w-]+$/,tx=3,nx=2,rx=1,ix=10,ox=-2,ud=e=>e==="*";function sx(e,t){let n=e.split("/"),r=n.length;return n.some(ud)&&(r+=ox),t&&(r+=nx),n.filter(i=>!ud(i)).reduce((i,o)=>i+(ex.test(o)?tx:o===""?rx:ix),r)}function ax(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function lx(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",h=cx({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),f=c.route;if(!h)return null;Object.assign(i,h.params),s.push({params:i,pathname:Ht([o,h.pathname]),pathnameBase:px(Ht([o,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(o=Ht([o,h.pathnameBase]))}return s}function cx(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ux(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,h)=>{let{paramName:f,isOptional:v}=d;if(f==="*"){let x=l[h]||"";s=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const y=l[h];return v&&!y?u[f]=void 0:u[f]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function ux(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),sm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function dx(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return sm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function pc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function hx(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?sr(e):e,o;return n?(n=cm(n),n.startsWith("/")?o=dd(n.substring(1),"/"):o=dd(n,t)):o=t,{pathname:o,search:mx(r),hash:gx(i)}}function dd(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Is(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function fx(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function mc(e,t){let n=fx(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function gc(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=sr(e):(i=ri({},e),te(!i.pathname||!i.pathname.includes("?"),Is("?","pathname","search",i)),te(!i.pathname||!i.pathname.includes("#"),Is("#","pathname","hash",i)),te(!i.search||!i.search.includes("#"),Is("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=n;else{let h=t.length-1;if(!r&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),h-=1;i.pathname=f.join("/")}l=h>=0?t[h]:"/"}let c=hx(i,l),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const cm=e=>e.replace(/\/\/+/g,"/"),Ht=e=>cm(e.join("/")),px=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),mx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,gx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function vx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const um=["post","put","patch","delete"];new Set(um);const yx=["get",...um];new Set(yx);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ii.apply(null,arguments)}const vc=w.createContext(null),xx=w.createContext(null),Jt=w.createContext(null),os=w.createContext(null),Zt=w.createContext({outlet:null,matches:[],isDataRoute:!1}),dm=w.createContext(null);function wx(e,t){let{relative:n}=t===void 0?{}:t;ar()||te(!1);let{basename:r,navigator:i}=w.useContext(Jt),{hash:o,pathname:s,search:l}=pm(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:Ht([r,s])),i.createHref({pathname:c,search:l,hash:o})}function ar(){return w.useContext(os)!=null}function en(){return ar()||te(!1),w.useContext(os).location}function hm(e){w.useContext(Jt).static||w.useLayoutEffect(e)}function fm(){let{isDataRoute:e}=w.useContext(Zt);return e?Lx():kx()}function kx(){ar()||te(!1);let e=w.useContext(vc),{basename:t,future:n,navigator:r}=w.useContext(Jt),{matches:i}=w.useContext(Zt),{pathname:o}=en(),s=JSON.stringify(mc(i,n.v7_relativeSplatPath)),l=w.useRef(!1);return hm(()=>{l.current=!0}),w.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let h=gc(u,JSON.parse(s),o,d.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Ht([t,h.pathname])),(d.replace?r.replace:r.push)(h,d.state,d)},[t,r,s,o,e])}function pm(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(Jt),{matches:i}=w.useContext(Zt),{pathname:o}=en(),s=JSON.stringify(mc(i,r.v7_relativeSplatPath));return w.useMemo(()=>gc(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function Sx(e,t){return bx(e,t)}function bx(e,t,n,r){ar()||te(!1);let{navigator:i}=w.useContext(Jt),{matches:o}=w.useContext(Zt),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let u=en(),d;if(t){var h;let S=typeof t=="string"?sr(t):t;c==="/"||(h=S.pathname)!=null&&h.startsWith(c)||te(!1),d=S}else d=u;let f=d.pathname||"/",v=f;if(c!=="/"){let S=c.replace(/^\//,"").split("/");v="/"+f.replace(/^\//,"").split("/").slice(S.length).join("/")}let y=Xy(e,{pathname:v}),x=Dx(y&&y.map(S=>Object.assign({},S,{params:Object.assign({},l,S.params),pathname:Ht([c,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?c:Ht([c,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n,r);return t&&x?w.createElement(os.Provider,{value:{location:ii({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Lt.Pop}},x):x}function jx(){let e=Ax(),t=vx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,null)}const Tx=w.createElement(jx,null);class Ex extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(Zt.Provider,{value:this.props.routeContext},w.createElement(dm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _x(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(vc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Zt.Provider,{value:t},r)}function Dx(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=s.findIndex(h=>h.route.id&&(l==null?void 0:l[h.route.id])!==void 0);d>=0||te(!1),s=s.slice(0,Math.min(s.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let h=s[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=d),h.route.id){let{loaderData:f,errors:v}=n,y=h.route.loader&&f[h.route.id]===void 0&&(!v||v[h.route.id]===void 0);if(h.route.lazy||y){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,h,f)=>{let v,y=!1,x=null,S=null;n&&(v=l&&h.route.id?l[h.route.id]:void 0,x=h.route.errorElement||Tx,c&&(u<0&&f===0?(Mx("route-fallback"),y=!0,S=null):u===f&&(y=!0,S=h.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,f+1)),m=()=>{let p;return v?p=x:y?p=S:h.route.Component?p=w.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=d,w.createElement(_x,{match:h,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:p})};return n&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?w.createElement(Ex,{location:n.location,revalidation:n.revalidation,component:x,error:v,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var mm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(mm||{}),gm=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(gm||{});function Cx(e){let t=w.useContext(vc);return t||te(!1),t}function Px(e){let t=w.useContext(xx);return t||te(!1),t}function Nx(e){let t=w.useContext(Zt);return t||te(!1),t}function vm(e){let t=Nx(),n=t.matches[t.matches.length-1];return n.route.id||te(!1),n.route.id}function Ax(){var e;let t=w.useContext(dm),n=Px(),r=vm();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Lx(){let{router:e}=Cx(mm.UseNavigateStable),t=vm(gm.UseNavigateStable),n=w.useRef(!1);return hm(()=>{n.current=!0}),w.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ii({fromRouteId:t},o)))},[e,t])}const hd={};function Mx(e,t,n){hd[e]||(hd[e]=!0)}function zx(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Fi(e){let{to:t,replace:n,state:r,relative:i}=e;ar()||te(!1);let{future:o,static:s}=w.useContext(Jt),{matches:l}=w.useContext(Zt),{pathname:c}=en(),u=fm(),d=gc(t,mc(l,o.v7_relativeSplatPath),c,i==="path"),h=JSON.stringify(d);return w.useEffect(()=>u(JSON.parse(h),{replace:n,state:r,relative:i}),[u,h,i,n,r]),null}function oe(e){te(!1)}function Rx(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Lt.Pop,navigator:o,static:s=!1,future:l}=e;ar()&&te(!1);let c=t.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:c,navigator:o,static:s,future:ii({v7_relativeSplatPath:!1},l)}),[c,l,o,s]);typeof r=="string"&&(r=sr(r));let{pathname:d="/",search:h="",hash:f="",state:v=null,key:y="default"}=r,x=w.useMemo(()=>{let S=pc(d,c);return S==null?null:{location:{pathname:S,search:h,hash:f,state:v,key:y},navigationType:i}},[c,d,h,f,v,y,i]);return x==null?null:w.createElement(Jt.Provider,{value:u},w.createElement(os.Provider,{children:n,value:x}))}function Ix(e){let{children:t,location:n}=e;return Sx(Ga(t),n)}new Promise(()=>{});function Ga(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let o=[...t,i];if(r.type===w.Fragment){n.push.apply(n,Ga(r.props.children,o));return}r.type!==oe&&te(!1),!r.props.index||!r.props.children||te(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Ga(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qa(){return qa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qa.apply(null,arguments)}function Vx(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Ux(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ox(e,t){return e.button===0&&(!t||t==="_self")&&!Ux(e)}const Fx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Wx="6";try{window.__reactRouterVersion=Wx}catch{}const Hx="startTransition",fd=R0[Hx];function Bx(e){let{basename:t,children:n,future:r,window:i}=e,o=w.useRef();o.current==null&&(o.current=Gy({window:i,v5Compat:!0}));let s=o.current,[l,c]=w.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=w.useCallback(h=>{u&&fd?fd(()=>c(h)):c(h)},[c,u]);return w.useLayoutEffect(()=>s.listen(d),[s,d]),w.useEffect(()=>zx(r),[r]),w.createElement(Rx,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const $x=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Yx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Y=w.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:l,target:c,to:u,preventScrollReset:d,viewTransition:h}=t,f=Vx(t,Fx),{basename:v}=w.useContext(Jt),y,x=!1;if(typeof u=="string"&&Yx.test(u)&&(y=u,$x))try{let p=new URL(window.location.href),k=u.startsWith("//")?new URL(p.protocol+u):new URL(u),b=pc(k.pathname,v);k.origin===p.origin&&b!=null?u=b+k.search+k.hash:x=!0}catch{}let S=wx(u,{relative:i}),g=Kx(u,{replace:s,state:l,target:c,preventScrollReset:d,relative:i,viewTransition:h});function m(p){r&&r(p),p.defaultPrevented||g(p)}return w.createElement("a",qa({},f,{href:y||S,onClick:x||o?r:m,ref:n,target:c}))});var pd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(pd||(pd={}));var md;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(md||(md={}));function Kx(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:l}=t===void 0?{}:t,c=fm(),u=en(),d=pm(e,{relative:s});return w.useCallback(h=>{if(Ox(h,n)){h.preventDefault();let f=r!==void 0?r:Mo(u)===Mo(d);c(e,{replace:f,state:i,preventScrollReset:o,relative:s,viewTransition:l})}},[u,c,d,r,i,n,e,o,s,l])}const yc=w.createContext({});function xc(e){const t=w.useRef(null);return t.current===null&&(t.current=e()),t.current}const ym=typeof window<"u",xm=ym?w.useLayoutEffect:w.useEffect,ss=w.createContext(null);function wc(e,t){e.indexOf(t)===-1&&e.push(t)}function kc(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const dt=(e,t,n)=>n>t?t:n<e?e:n;let Sc=()=>{};const bt={},wm=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function km(e){return typeof e=="object"&&e!==null}const Sm=e=>/^0[^.\s]+$/u.test(e);function bc(e){let t;return()=>(t===void 0&&(t=e()),t)}const $e=e=>e,Gx=(e,t)=>n=>t(e(n)),mi=(...e)=>e.reduce(Gx),oi=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r};class jc{constructor(){this.subscriptions=[]}add(t){return wc(this.subscriptions,t),()=>kc(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const yt=e=>e*1e3,He=e=>e/1e3;function bm(e,t){return t?e*(1e3/t):0}const jm=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,qx=1e-7,Qx=12;function Xx(e,t,n,r,i){let o,s,l=0;do s=t+(n-t)/2,o=jm(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>qx&&++l<Qx);return s}function gi(e,t,n,r){if(e===t&&n===r)return $e;const i=o=>Xx(o,0,1,e,n);return o=>o===0||o===1?o:jm(i(o),t,r)}const Tm=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Em=e=>t=>1-e(1-t),_m=gi(.33,1.53,.69,.99),Tc=Em(_m),Dm=Tm(Tc),Cm=e=>(e*=2)<1?.5*Tc(e):.5*(2-Math.pow(2,-10*(e-1))),Ec=e=>1-Math.sin(Math.acos(e)),Pm=Em(Ec),Nm=Tm(Ec),Jx=gi(.42,0,1,1),Zx=gi(0,0,.58,1),Am=gi(.42,0,.58,1),e1=e=>Array.isArray(e)&&typeof e[0]!="number",Lm=e=>Array.isArray(e)&&typeof e[0]=="number",t1={linear:$e,easeIn:Jx,easeInOut:Am,easeOut:Zx,circIn:Ec,circInOut:Nm,circOut:Pm,backIn:Tc,backInOut:Dm,backOut:_m,anticipate:Cm},n1=e=>typeof e=="string",gd=e=>{if(Lm(e)){Sc(e.length===4);const[t,n,r,i]=e;return gi(t,n,r,i)}else if(n1(e))return t1[e];return e},Wi=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function r1(e,t){let n=new Set,r=new Set,i=!1,o=!1;const s=new WeakSet;let l={delta:0,timestamp:0,isProcessing:!1};function c(d){s.has(d)&&(u.schedule(d),e()),d(l)}const u={schedule:(d,h=!1,f=!1)=>{const y=f&&i?n:r;return h&&s.add(d),y.has(d)||y.add(d),d},cancel:d=>{r.delete(d),s.delete(d)},process:d=>{if(l=d,i){o=!0;return}i=!0,[n,r]=[r,n],n.forEach(c),n.clear(),i=!1,o&&(o=!1,u.process(d))}};return u}const i1=40;function Mm(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=Wi.reduce((p,k)=>(p[k]=r1(o),p),{}),{setup:l,read:c,resolveKeyframes:u,preUpdate:d,update:h,preRender:f,render:v,postRender:y}=s,x=()=>{const p=bt.useManualTiming?i.timestamp:performance.now();n=!1,bt.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(p-i.timestamp,i1),1)),i.timestamp=p,i.isProcessing=!0,l.process(i),c.process(i),u.process(i),d.process(i),h.process(i),f.process(i),v.process(i),y.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(x))},S=()=>{n=!0,r=!0,i.isProcessing||e(x)};return{schedule:Wi.reduce((p,k)=>{const b=s[k];return p[k]=(T,E=!1,j=!1)=>(n||S(),b.schedule(T,E,j)),p},{}),cancel:p=>{for(let k=0;k<Wi.length;k++)s[Wi[k]].cancel(p)},state:i,steps:s}}const{schedule:F,cancel:Yt,state:pe,steps:Vs}=Mm(typeof requestAnimationFrame<"u"?requestAnimationFrame:$e,!0);let oo;function o1(){oo=void 0}const be={now:()=>(oo===void 0&&be.set(pe.isProcessing||bt.useManualTiming?pe.timestamp:performance.now()),oo),set:e=>{oo=e,queueMicrotask(o1)}},zm=e=>t=>typeof t=="string"&&t.startsWith(e),Rm=zm("--"),s1=zm("var(--"),_c=e=>s1(e)?a1.test(e.split("/*")[0].trim()):!1,a1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function vd(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const lr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},si={...lr,transform:e=>dt(0,1,e)},Hi={...lr,default:1},Rr=e=>Math.round(e*1e5)/1e5,Dc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function l1(e){return e==null}const c1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Cc=(e,t)=>n=>!!(typeof n=="string"&&c1.test(n)&&n.startsWith(e)||t&&!l1(n)&&Object.prototype.hasOwnProperty.call(n,t)),Im=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,s,l]=r.match(Dc);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:l!==void 0?parseFloat(l):1}},u1=e=>dt(0,255,e),Us={...lr,transform:e=>Math.round(u1(e))},fn={test:Cc("rgb","red"),parse:Im("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Us.transform(e)+", "+Us.transform(t)+", "+Us.transform(n)+", "+Rr(si.transform(r))+")"};function d1(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Qa={test:Cc("#"),parse:d1,transform:fn.transform},vi=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Et=vi("deg"),ut=vi("%"),C=vi("px"),h1=vi("vh"),f1=vi("vw"),yd={...ut,parse:e=>ut.parse(e)/100,transform:e=>ut.transform(e*100)},Vn={test:Cc("hsl","hue"),parse:Im("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+ut.transform(Rr(t))+", "+ut.transform(Rr(n))+", "+Rr(si.transform(r))+")"},re={test:e=>fn.test(e)||Qa.test(e)||Vn.test(e),parse:e=>fn.test(e)?fn.parse(e):Vn.test(e)?Vn.parse(e):Qa.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?fn.transform(e):Vn.transform(e),getAnimatableNone:e=>{const t=re.parse(e);return t.alpha=0,re.transform(t)}},p1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function m1(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Dc))==null?void 0:t.length)||0)+(((n=e.match(p1))==null?void 0:n.length)||0)>0}const Vm="number",Um="color",g1="var",v1="var(",xd="${}",y1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ai(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const l=t.replace(y1,c=>(re.test(c)?(r.color.push(o),i.push(Um),n.push(re.parse(c))):c.startsWith(v1)?(r.var.push(o),i.push(g1),n.push(c)):(r.number.push(o),i.push(Vm),n.push(parseFloat(c))),++o,xd)).split(xd);return{values:n,split:l,indexes:r,types:i}}function Om(e){return ai(e).values}function Fm(e){const{split:t,types:n}=ai(e),r=t.length;return i=>{let o="";for(let s=0;s<r;s++)if(o+=t[s],i[s]!==void 0){const l=n[s];l===Vm?o+=Rr(i[s]):l===Um?o+=re.transform(i[s]):o+=i[s]}return o}}const x1=e=>typeof e=="number"?0:re.test(e)?re.getAnimatableNone(e):e;function w1(e){const t=Om(e);return Fm(e)(t.map(x1))}const Kt={test:m1,parse:Om,createTransformer:Fm,getAnimatableNone:w1};function Os(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function k1({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;i=Os(c,l,e+1/3),o=Os(c,l,e),s=Os(c,l,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}function zo(e,t){return n=>n>0?t:e}const K=(e,t,n)=>e+(t-e)*n,Fs=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},S1=[Qa,fn,Vn],b1=e=>S1.find(t=>t.test(e));function wd(e){const t=b1(e);if(!t)return!1;let n=t.parse(e);return t===Vn&&(n=k1(n)),n}const kd=(e,t)=>{const n=wd(e),r=wd(t);if(!n||!r)return zo(e,t);const i={...n};return o=>(i.red=Fs(n.red,r.red,o),i.green=Fs(n.green,r.green,o),i.blue=Fs(n.blue,r.blue,o),i.alpha=K(n.alpha,r.alpha,o),fn.transform(i))},Xa=new Set(["none","hidden"]);function j1(e,t){return Xa.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function T1(e,t){return n=>K(e,t,n)}function Pc(e){return typeof e=="number"?T1:typeof e=="string"?_c(e)?zo:re.test(e)?kd:D1:Array.isArray(e)?Wm:typeof e=="object"?re.test(e)?kd:E1:zo}function Wm(e,t){const n=[...e],r=n.length,i=e.map((o,s)=>Pc(o)(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}}function E1(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Pc(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function _1(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const o=t.types[i],s=e.indexes[o][r[o]],l=e.values[s]??0;n[i]=l,r[o]++}return n}const D1=(e,t)=>{const n=Kt.createTransformer(t),r=ai(e),i=ai(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Xa.has(e)&&!i.values.length||Xa.has(t)&&!r.values.length?j1(e,t):mi(Wm(_1(r,i),i.values),n):zo(e,t)};function Hm(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?K(e,t,n):Pc(e)(e,t)}const C1=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>F.update(t,n),stop:()=>Yt(t),now:()=>pe.isProcessing?pe.timestamp:be.now()}},Bm=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let o=0;o<i;o++)r+=Math.round(e(o/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Ro=2e4;function Nc(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Ro;)t+=n,r=e.next(t);return t>=Ro?1/0:t}function P1(e,t=100,n){const r=n({...e,keyframes:[0,t]}),i=Math.min(Nc(r),Ro);return{type:"keyframes",ease:o=>r.next(i*o).value/t,duration:He(i)}}const N1=5;function $m(e,t,n){const r=Math.max(t-N1,0);return bm(n-e(r),t-r)}const Q={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Ws=.001;function A1({duration:e=Q.duration,bounce:t=Q.bounce,velocity:n=Q.velocity,mass:r=Q.mass}){let i,o,s=1-t;s=dt(Q.minDamping,Q.maxDamping,s),e=dt(Q.minDuration,Q.maxDuration,He(e)),s<1?(i=u=>{const d=u*s,h=d*e,f=d-n,v=Ja(u,s),y=Math.exp(-h);return Ws-f/v*y},o=u=>{const h=u*s*e,f=h*n+n,v=Math.pow(s,2)*Math.pow(u,2)*e,y=Math.exp(-h),x=Ja(Math.pow(u,2),s);return(-i(u)+Ws>0?-1:1)*((f-v)*y)/x}):(i=u=>{const d=Math.exp(-u*e),h=(u-n)*e+1;return-Ws+d*h},o=u=>{const d=Math.exp(-u*e),h=(n-u)*(e*e);return d*h});const l=5/e,c=M1(i,o,l);if(e=yt(e),isNaN(c))return{stiffness:Q.stiffness,damping:Q.damping,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const L1=12;function M1(e,t,n){let r=n;for(let i=1;i<L1;i++)r=r-e(r)/t(r);return r}function Ja(e,t){return e*Math.sqrt(1-t*t)}const z1=["duration","bounce"],R1=["stiffness","damping","mass"];function Sd(e,t){return t.some(n=>e[n]!==void 0)}function I1(e){let t={velocity:Q.velocity,stiffness:Q.stiffness,damping:Q.damping,mass:Q.mass,isResolvedFromDuration:!1,...e};if(!Sd(e,R1)&&Sd(e,z1))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,o=2*dt(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:Q.mass,stiffness:i,damping:o}}else{const n=A1(e);t={...t,...n,mass:Q.mass},t.isResolvedFromDuration=!0}return t}function Io(e=Q.visualDuration,t=Q.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const o=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],l={done:!1,value:o},{stiffness:c,damping:u,mass:d,duration:h,velocity:f,isResolvedFromDuration:v}=I1({...n,velocity:-He(n.velocity||0)}),y=f||0,x=u/(2*Math.sqrt(c*d)),S=s-o,g=He(Math.sqrt(c/d)),m=Math.abs(S)<5;r||(r=m?Q.restSpeed.granular:Q.restSpeed.default),i||(i=m?Q.restDelta.granular:Q.restDelta.default);let p;if(x<1){const b=Ja(g,x);p=T=>{const E=Math.exp(-x*g*T);return s-E*((y+x*g*S)/b*Math.sin(b*T)+S*Math.cos(b*T))}}else if(x===1)p=b=>s-Math.exp(-g*b)*(S+(y+g*S)*b);else{const b=g*Math.sqrt(x*x-1);p=T=>{const E=Math.exp(-x*g*T),j=Math.min(b*T,300);return s-E*((y+x*g*S)*Math.sinh(j)+b*S*Math.cosh(j))/b}}const k={calculatedDuration:v&&h||null,next:b=>{const T=p(b);if(v)l.done=b>=h;else{let E=b===0?y:0;x<1&&(E=b===0?yt(y):$m(p,b,T));const j=Math.abs(E)<=r,L=Math.abs(s-T)<=i;l.done=j&&L}return l.value=l.done?s:T,l},toString:()=>{const b=Math.min(Nc(k),Ro),T=Bm(E=>k.next(b*E).value,b,30);return b+"ms "+T},toTransition:()=>{}};return k}Io.applyToOptions=e=>{const t=P1(e,100,Io);return e.ease=t.ease,e.duration=yt(t.duration),e.type="keyframes",e};function Za({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:l,max:c,restDelta:u=.5,restSpeed:d}){const h=e[0],f={done:!1,value:h},v=j=>l!==void 0&&j<l||c!==void 0&&j>c,y=j=>l===void 0?c:c===void 0||Math.abs(l-j)<Math.abs(c-j)?l:c;let x=n*t;const S=h+x,g=s===void 0?S:s(S);g!==S&&(x=g-h);const m=j=>-x*Math.exp(-j/r),p=j=>g+m(j),k=j=>{const L=m(j),N=p(j);f.done=Math.abs(L)<=u,f.value=f.done?g:N};let b,T;const E=j=>{v(f.value)&&(b=j,T=Io({keyframes:[f.value,y(f.value)],velocity:$m(p,j,f.value),damping:i,stiffness:o,restDelta:u,restSpeed:d}))};return E(0),{calculatedDuration:null,next:j=>{let L=!1;return!T&&b===void 0&&(L=!0,k(j),E(j)),b!==void 0&&j>=b?T.next(j-b):(!L&&k(j),f)}}}function V1(e,t,n){const r=[],i=n||bt.mix||Hm,o=e.length-1;for(let s=0;s<o;s++){let l=i(e[s],e[s+1]);if(t){const c=Array.isArray(t)?t[s]||$e:t;l=mi(c,l)}r.push(l)}return r}function U1(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(Sc(o===t.length),o===1)return()=>t[0];if(o===2&&t[0]===t[1])return()=>t[1];const s=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const l=V1(t,r,i),c=l.length,u=d=>{if(s&&d<e[0])return t[0];let h=0;if(c>1)for(;h<e.length-2&&!(d<e[h+1]);h++);const f=oi(e[h],e[h+1],d);return l[h](f)};return n?d=>u(dt(e[0],e[o-1],d)):u}function O1(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=oi(0,t,r);e.push(K(n,1,i))}}function F1(e){const t=[0];return O1(t,e.length-1),t}function W1(e,t){return e.map(n=>n*t)}function H1(e,t){return e.map(()=>t||Am).splice(0,e.length-1)}function Ir({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=e1(r)?r.map(gd):gd(r),o={done:!1,value:t[0]},s=W1(n&&n.length===t.length?n:F1(t),e),l=U1(s,t,{ease:Array.isArray(i)?i:H1(t,i)});return{calculatedDuration:e,next:c=>(o.value=l(c),o.done=c>=e,o)}}const B1=e=>e!==null;function Ac(e,{repeat:t,repeatType:n="loop"},r,i=1){const o=e.filter(B1),l=i<0||t&&n!=="loop"&&t%2===1?0:o.length-1;return!l||r===void 0?o[l]:r}const $1={decay:Za,inertia:Za,tween:Ir,keyframes:Ir,spring:Io};function Ym(e){typeof e.type=="string"&&(e.type=$1[e.type])}class Lc{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const Y1=e=>e/100;class Mc extends Lc{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,i;const{motionValue:n}=this.options;n&&n.updatedAt!==be.now()&&this.tick(be.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(r=this.options).onStop)==null||i.call(r))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;Ym(t);const{type:n=Ir,repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:s=0}=t;let{keyframes:l}=t;const c=n||Ir;c!==Ir&&typeof l[0]!="number"&&(this.mixKeyframes=mi(Y1,Hm(l[0],l[1])),l=[0,100]);const u=c({...t,keyframes:l});o==="mirror"&&(this.mirroredGenerator=c({...t,keyframes:[...l].reverse(),velocity:-s})),u.calculatedDuration===null&&(u.calculatedDuration=Nc(u));const{calculatedDuration:d}=u;this.calculatedDuration=d,this.resolvedDuration=d+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=u}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:r,totalDuration:i,mixKeyframes:o,mirroredGenerator:s,resolvedDuration:l,calculatedDuration:c}=this;if(this.startTime===null)return r.next(0);const{delay:u=0,keyframes:d,repeat:h,repeatType:f,repeatDelay:v,type:y,onUpdate:x,finalKeyframe:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-i/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const g=this.currentTime-u*(this.playbackSpeed>=0?1:-1),m=this.playbackSpeed>=0?g<0:g>i;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let p=this.currentTime,k=r;if(h){const j=Math.min(this.currentTime,i)/l;let L=Math.floor(j),N=j%1;!N&&j>=1&&(N=1),N===1&&L--,L=Math.min(L,h+1),!!(L%2)&&(f==="reverse"?(N=1-N,v&&(N-=v/l)):f==="mirror"&&(k=s)),p=dt(0,1,N)*l}const b=m?{done:!1,value:d[0]}:k.next(p);o&&(b.value=o(b.value));let{done:T}=b;!m&&c!==null&&(T=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const E=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return E&&y!==Za&&(b.value=Ac(d,this.options,S,this.speed)),x&&x(b.value),E&&this.finish(),b}then(t,n){return this.finished.then(t,n)}get duration(){return He(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+He(t)}get time(){return He(this.currentTime)}set time(t){var n;t=yt(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(be.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=He(this.currentTime))}play(){var i,o;if(this.isStopped)return;const{driver:t=C1,startTime:n}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),(o=(i=this.options).onPlay)==null||o.call(i);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(be.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function K1(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const pn=e=>e*180/Math.PI,el=e=>{const t=pn(Math.atan2(e[1],e[0]));return tl(t)},G1={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:el,rotateZ:el,skewX:e=>pn(Math.atan(e[1])),skewY:e=>pn(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},tl=e=>(e=e%360,e<0&&(e+=360),e),bd=el,jd=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Td=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),q1={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:jd,scaleY:Td,scale:e=>(jd(e)+Td(e))/2,rotateX:e=>tl(pn(Math.atan2(e[6],e[5]))),rotateY:e=>tl(pn(Math.atan2(-e[2],e[0]))),rotateZ:bd,rotate:bd,skewX:e=>pn(Math.atan(e[4])),skewY:e=>pn(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function nl(e){return e.includes("scale")?1:0}function rl(e,t){if(!e||e==="none")return nl(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=q1,i=n;else{const l=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=G1,i=l}if(!i)return nl(t);const o=r[t],s=i[1].split(",").map(X1);return typeof o=="function"?o(s):s[o]}const Q1=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return rl(n,t)};function X1(e){return parseFloat(e.trim())}const cr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ur=new Set(cr),Ed=e=>e===lr||e===C,J1=new Set(["x","y","z"]),Z1=cr.filter(e=>!J1.has(e));function ew(e){const t=[];return Z1.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Mt={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>rl(t,"x"),y:(e,{transform:t})=>rl(t,"y")};Mt.translateX=Mt.x;Mt.translateY=Mt.y;const vn=new Set;let il=!1,ol=!1,sl=!1;function Km(){if(ol){const e=Array.from(vn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=ew(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,s])=>{var l;(l=r.getValue(o))==null||l.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}ol=!1,il=!1,vn.forEach(e=>e.complete(sl)),vn.clear()}function Gm(){vn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(ol=!0)})}function tw(){sl=!0,Gm(),Km(),sl=!1}class zc{constructor(t,n,r,i,o,s=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=s}scheduleResolve(){this.state="scheduled",this.isAsync?(vn.add(this),il||(il=!0,F.read(Gm),F.resolveKeyframes(Km))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;if(t[0]===null){const o=i==null?void 0:i.get(),s=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const l=r.readValue(n,s);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=s),i&&o===void 0&&i.set(t[0])}K1(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),vn.delete(this)}cancel(){this.state==="scheduled"&&(vn.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const nw=e=>e.startsWith("--");function rw(e,t,n){nw(t)?e.style.setProperty(t,n):e.style[t]=n}const iw=bc(()=>window.ScrollTimeline!==void 0),ow={};function sw(e,t){const n=bc(e);return()=>ow[t]??n()}const qm=sw(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Tr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,_d={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Tr([0,.65,.55,1]),circOut:Tr([.55,0,1,.45]),backIn:Tr([.31,.01,.66,-.59]),backOut:Tr([.33,1.53,.69,.99])};function Qm(e,t){if(e)return typeof e=="function"?qm()?Bm(e,t):"ease-out":Lm(e)?Tr(e):Array.isArray(e)?e.map(n=>Qm(n,t)||_d.easeOut):_d[e]}function aw(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:l="easeOut",times:c}={},u=void 0){const d={[t]:n};c&&(d.offset=c);const h=Qm(l,i);Array.isArray(h)&&(d.easing=h);const f={delay:r,duration:i,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"};return u&&(f.pseudoElement=u),e.animate(d,f)}function Xm(e){return typeof e=="function"&&"applyToOptions"in e}function lw({type:e,...t}){return Xm(e)&&qm()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class cw extends Lc{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:r,keyframes:i,pseudoElement:o,allowFlatten:s=!1,finalKeyframe:l,onComplete:c}=t;this.isPseudoElement=!!o,this.allowFlatten=s,this.options=t,Sc(typeof t.type!="string");const u=lw(t);this.animation=aw(n,r,i,u,o),u.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!o){const d=Ac(i,this.options,l,this.speed);this.updateMotionValue?this.updateMotionValue(d):rw(n,r,d),this.animation.cancel()}c==null||c(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,n;this.isPseudoElement||(n=(t=this.animation).commitStyles)==null||n.call(t)}get duration(){var n,r;const t=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return He(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+He(t)}get time(){return He(Number(this.animation.currentTime)||0)}set time(t){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=yt(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,observe:n}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&iw()?(this.animation.timeline=t,$e):n(this)}}const Jm={anticipate:Cm,backInOut:Dm,circInOut:Nm};function uw(e){return e in Jm}function dw(e){typeof e.ease=="string"&&uw(e.ease)&&(e.ease=Jm[e.ease])}const Hs=10;class hw extends cw{constructor(t){dw(t),Ym(t),super(t),t.startTime!==void 0&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:r,onComplete:i,element:o,...s}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const l=new Mc({...s,autoplay:!1}),c=Math.max(Hs,be.now()-this.startTime),u=dt(0,Hs,c-Hs);n.setWithVelocity(l.sample(Math.max(0,c-u)).value,l.sample(c).value,u),l.stop()}}const Dd=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Kt.test(e)||e==="0")&&!e.startsWith("url("));function fw(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function pw(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],s=Dd(i,t),l=Dd(o,t);return!s||!l?!1:fw(e)||(n==="spring"||Xm(n))&&r}function al(e){e.duration=0,e.type="keyframes"}const mw=new Set(["opacity","clipPath","filter","transform"]),gw=bc(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function vw(e){var d;const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:o,type:s}=e;if(!(((d=t==null?void 0:t.owner)==null?void 0:d.current)instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:u}=t.owner.getProps();return gw()&&n&&mw.has(n)&&(n!=="transform"||!u)&&!c&&!r&&i!=="mirror"&&o!==0&&s!=="inertia"}const yw=40;class xw extends Lc{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s="loop",keyframes:l,name:c,motionValue:u,element:d,...h}){var y;super(),this.stop=()=>{var x,S;this._animation&&(this._animation.stop(),(x=this.stopTimeline)==null||x.call(this)),(S=this.keyframeResolver)==null||S.cancel()},this.createdAt=be.now();const f={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:s,name:c,motionValue:u,element:d,...h},v=(d==null?void 0:d.KeyframeResolver)||zc;this.keyframeResolver=new v(l,(x,S,g)=>this.onKeyframesResolved(x,S,f,!g),c,u,d),(y=this.keyframeResolver)==null||y.scheduleResolve()}onKeyframesResolved(t,n,r,i){this.keyframeResolver=void 0;const{name:o,type:s,velocity:l,delay:c,isHandoff:u,onUpdate:d}=r;this.resolvedAt=be.now(),pw(t,o,s,l)||((bt.instantAnimations||!c)&&(d==null||d(Ac(t,r,n))),t[0]=t[t.length-1],al(r),r.repeat=0);const f={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>yw?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:t},v=!u&&vw(f)?new hw({...f,element:f.motionValue.owner.current}):new Mc(f);v.finished.then(()=>this.notifyFinished()).catch($e),this.pendingTimeline&&(this.stopTimeline=v.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=v}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),tw()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}const ww=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function kw(e){const t=ww.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function Zm(e,t,n=1){const[r,i]=kw(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return wm(s)?parseFloat(s):s}return _c(i)?Zm(i,t,n+1):i}function Rc(e,t){return(e==null?void 0:e[t])??(e==null?void 0:e.default)??e}const Sw={type:"spring",stiffness:500,damping:25,restSpeed:10},bw=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),jw={type:"keyframes",duration:.8},Tw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Ew=(e,{keyframes:t})=>t.length>2?jw:ur.has(e)?e.startsWith("scale")?bw(t[1]):Sw:Tw;function _w({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:l,from:c,elapsed:u,...d}){return!!Object.keys(d).length}const Dw=e=>e!==null;function Cw(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(Dw),o=t&&n!=="loop"&&t%2===1?0:i.length-1;return i[o]}function eg(e,t,n,r=0,i=1){const o=Array.from(e).sort((u,d)=>u.sortNodePosition(d)).indexOf(t),s=e.size,l=(s-1)*r;return typeof n=="function"?n(o,s):i===1?o*r:l-o*r}const Ic=(e,t,n,r={},i,o)=>s=>{const l=Rc(r,e)||{},c=l.delay||r.delay||0;let{elapsed:u=0}=r;u=u-yt(c);const d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-u,onUpdate:f=>{t.set(f),l.onUpdate&&l.onUpdate(f)},onComplete:()=>{s(),l.onComplete&&l.onComplete()},name:e,motionValue:t,element:o?void 0:i};_w(l)||Object.assign(d,Ew(e,d)),d.duration&&(d.duration=yt(d.duration)),d.repeatDelay&&(d.repeatDelay=yt(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let h=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(al(d),d.delay===0&&(h=!0)),(bt.instantAnimations||bt.skipAnimations)&&(h=!0,al(d),d.delay=0),d.allowFlatten=!l.type&&!l.ease,h&&!o&&t.get()!==void 0){const f=Cw(d.keyframes,l);if(f!==void 0){F.update(()=>{d.onUpdate(f),d.onComplete()});return}}return l.isSync?new Mc(d):new xw(d)},tg=new Set(["width","height","top","left","right","bottom",...cr]),Cd=30,Pw=e=>!isNaN(parseFloat(e));class Nw{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var o;const i=be.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((o=this.events.change)==null||o.notify(this.current),this.dependents))for(const s of this.dependents)s.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=be.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=Pw(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new jc);const r=this.events[t].add(n);return t==="change"?()=>{r(),F.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=be.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Cd)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Cd);return bm(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function nr(e,t){return new Nw(e,t)}function Pd(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Vc(e,t,n,r){if(typeof t=="function"){const[i,o]=Pd(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=Pd(r);t=t(n!==void 0?n:e.custom,i,o)}return t}function Gn(e,t,n){const r=e.getProps();return Vc(r,t,n!==void 0?n:r.custom,e)}const ll=e=>Array.isArray(e);function Aw(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,nr(n))}function Lw(e){return ll(e)?e[e.length-1]||0:e}function Mw(e,t){const n=Gn(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const s in o){const l=Lw(o[s]);Aw(e,s,l)}}const we=e=>!!(e&&e.getVelocity);function zw(e){return!!(we(e)&&e.add)}function cl(e,t){const n=e.getValue("willChange");if(zw(n))return n.add(t);if(!n&&bt.WillChange){const r=new bt.WillChange("auto");e.addValue("willChange",r),r.add(t)}}function Uc(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const Rw="framerAppearId",ng="data-"+Uc(Rw);function rg(e){return e.props[ng]}function Iw({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function ig(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:s,...l}=t;r&&(o=r);const c=[],u=i&&e.animationState&&e.animationState.getState()[i];for(const d in l){const h=e.getValue(d,e.latestValues[d]??null),f=l[d];if(f===void 0||u&&Iw(u,d))continue;const v={delay:n,...Rc(o||{},d)},y=h.get();if(y!==void 0&&!h.isAnimating&&!Array.isArray(f)&&f===y&&!v.velocity)continue;let x=!1;if(window.MotionHandoffAnimation){const g=rg(e);if(g){const m=window.MotionHandoffAnimation(g,d,F);m!==null&&(v.startTime=m,x=!0)}}cl(e,d),h.start(Ic(d,h,f,e.shouldReduceMotion&&tg.has(d)?{type:!1}:v,e,x));const S=h.animation;S&&c.push(S)}return s&&Promise.all(c).then(()=>{F.update(()=>{s&&Mw(e,s)})}),c}function ul(e,t,n={}){var c;const r=Gn(e,t,n.type==="exit"?(c=e.presenceContext)==null?void 0:c.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(ig(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:h,staggerDirection:f}=i;return Vw(e,t,u,d,h,f,n)}:()=>Promise.resolve(),{when:l}=i;if(l){const[u,d]=l==="beforeChildren"?[o,s]:[s,o];return u().then(()=>d())}else return Promise.all([o(),s(n.delay)])}function Vw(e,t,n=0,r=0,i=0,o=1,s){const l=[];for(const c of e.variantChildren)c.notify("AnimationStart",t),l.push(ul(c,t,{...s,delay:n+(typeof r=="function"?0:r)+eg(e.variantChildren,c,r,i,o)}).then(()=>c.notify("AnimationComplete",t)));return Promise.all(l)}function Uw(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>ul(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=ul(e,t,n);else{const i=typeof t=="function"?Gn(e,t,n.custom):t;r=Promise.all(ig(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const Ow={test:e=>e==="auto",parse:e=>e},og=e=>t=>t.test(e),sg=[lr,C,ut,Et,f1,h1,Ow],Nd=e=>sg.find(og(e));function Fw(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Sm(e):!0}const Ww=new Set(["brightness","contrast","saturate","opacity"]);function Hw(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Dc)||[];if(!r)return e;const i=n.replace(r,"");let o=Ww.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const Bw=/\b([a-z-]*)\(.*?\)/gu,dl={...Kt,getAnimatableNone:e=>{const t=e.match(Bw);return t?t.map(Hw).join(" "):e}},Ad={...lr,transform:Math.round},$w={rotate:Et,rotateX:Et,rotateY:Et,rotateZ:Et,scale:Hi,scaleX:Hi,scaleY:Hi,scaleZ:Hi,skew:Et,skewX:Et,skewY:Et,distance:C,translateX:C,translateY:C,translateZ:C,x:C,y:C,z:C,perspective:C,transformPerspective:C,opacity:si,originX:yd,originY:yd,originZ:C},Oc={borderWidth:C,borderTopWidth:C,borderRightWidth:C,borderBottomWidth:C,borderLeftWidth:C,borderRadius:C,radius:C,borderTopLeftRadius:C,borderTopRightRadius:C,borderBottomRightRadius:C,borderBottomLeftRadius:C,width:C,maxWidth:C,height:C,maxHeight:C,top:C,right:C,bottom:C,left:C,inset:C,insetBlock:C,insetBlockStart:C,insetBlockEnd:C,insetInline:C,insetInlineStart:C,insetInlineEnd:C,padding:C,paddingTop:C,paddingRight:C,paddingBottom:C,paddingLeft:C,paddingBlock:C,paddingBlockStart:C,paddingBlockEnd:C,paddingInline:C,paddingInlineStart:C,paddingInlineEnd:C,margin:C,marginTop:C,marginRight:C,marginBottom:C,marginLeft:C,marginBlock:C,marginBlockStart:C,marginBlockEnd:C,marginInline:C,marginInlineStart:C,marginInlineEnd:C,backgroundPositionX:C,backgroundPositionY:C,...$w,zIndex:Ad,fillOpacity:si,strokeOpacity:si,numOctaves:Ad},Yw={...Oc,color:re,backgroundColor:re,outlineColor:re,fill:re,stroke:re,borderColor:re,borderTopColor:re,borderRightColor:re,borderBottomColor:re,borderLeftColor:re,filter:dl,WebkitFilter:dl},ag=e=>Yw[e];function lg(e,t){let n=ag(e);return n!==dl&&(n=Kt),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Kw=new Set(["auto","none","0"]);function Gw(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!Kw.has(o)&&ai(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=lg(n,i)}class qw extends zc{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let d=0;d<t.length;d++){let h=t[d];if(typeof h=="string"&&(h=h.trim(),_c(h))){const f=Zm(h,n.current);f!==void 0&&(t[d]=f),d===t.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!tg.has(r)||t.length!==2)return;const[i,o]=t,s=Nd(i),l=Nd(o),c=vd(i),u=vd(o);if(c!==u&&Mt[r]){this.needsMeasurement=!0;return}if(s!==l)if(Ed(s)&&Ed(l))for(let d=0;d<t.length;d++){const h=t[d];typeof h=="string"&&(t[d]=parseFloat(h))}else Mt[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)(t[i]===null||Fw(t[i]))&&r.push(i);r.length&&Gw(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Mt[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var l;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const i=t.getValue(n);i&&i.jump(this.measuredOrigin,!1);const o=r.length-1,s=r[o];r[o]=Mt[n](t.measureViewportBox(),window.getComputedStyle(t.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),(l=this.removedTransforms)!=null&&l.length&&this.removedTransforms.forEach(([c,u])=>{t.getValue(c).set(u)}),this.resolveNoneKeyframes()}}function Qw(e,t,n){if(e instanceof EventTarget)return[e];if(typeof e=="string"){let r=document;const i=(n==null?void 0:n[e])??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e)}const cg=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function ug(e){return km(e)&&"offsetHeight"in e}const{schedule:Fc}=Mm(queueMicrotask,!1),Qe={x:!1,y:!1};function dg(){return Qe.x||Qe.y}function Xw(e){return e==="x"||e==="y"?Qe[e]?null:(Qe[e]=!0,()=>{Qe[e]=!1}):Qe.x||Qe.y?null:(Qe.x=Qe.y=!0,()=>{Qe.x=Qe.y=!1})}function hg(e,t){const n=Qw(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function Ld(e){return!(e.pointerType==="touch"||dg())}function Jw(e,t,n={}){const[r,i,o]=hg(e,n),s=l=>{if(!Ld(l))return;const{target:c}=l,u=t(c,l);if(typeof u!="function"||!c)return;const d=h=>{Ld(h)&&(u(h),c.removeEventListener("pointerleave",d))};c.addEventListener("pointerleave",d,i)};return r.forEach(l=>{l.addEventListener("pointerenter",s,i)}),o}const fg=(e,t)=>t?e===t?!0:fg(e,t.parentElement):!1,Wc=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,Zw=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function pg(e){return Zw.has(e.tagName)||e.isContentEditable===!0}const so=new WeakSet;function Md(e){return t=>{t.key==="Enter"&&e(t)}}function Bs(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const e2=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=Md(()=>{if(so.has(n))return;Bs(n,"down");const i=Md(()=>{Bs(n,"up")}),o=()=>Bs(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",o,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function zd(e){return Wc(e)&&!dg()}function t2(e,t,n={}){const[r,i,o]=hg(e,n),s=l=>{const c=l.currentTarget;if(!zd(l))return;so.add(c);const u=t(c,l),d=(v,y)=>{window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",f),so.has(c)&&so.delete(c),zd(v)&&typeof u=="function"&&u(v,{success:y})},h=v=>{d(v,c===window||c===document||n.useGlobalTarget||fg(c,v.target))},f=v=>{d(v,!1)};window.addEventListener("pointerup",h,i),window.addEventListener("pointercancel",f,i)};return r.forEach(l=>{(n.useGlobalTarget?window:l).addEventListener("pointerdown",s,i),ug(l)&&(l.addEventListener("focus",u=>e2(u,i)),!pg(l)&&!l.hasAttribute("tabindex")&&(l.tabIndex=0))}),o}function mg(e){return km(e)&&"ownerSVGElement"in e}function n2(e){return mg(e)&&e.tagName==="svg"}const r2=[...sg,re,Kt],i2=e=>r2.find(og(e)),Rd=()=>({translate:0,scale:1,origin:0,originPoint:0}),Un=()=>({x:Rd(),y:Rd()}),Id=()=>({min:0,max:0}),se=()=>({x:Id(),y:Id()}),Vo={current:null},Hc={current:!1},o2=typeof window<"u";function gg(){if(Hc.current=!0,!!o2)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Vo.current=e.matches;e.addEventListener("change",t),t()}else Vo.current=!1}const s2=new WeakMap;function as(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function li(e){return typeof e=="string"||Array.isArray(e)}const Bc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],$c=["initial",...Bc];function ls(e){return as(e.animate)||$c.some(t=>li(e[t]))}function vg(e){return!!(ls(e)||e.variants)}function a2(e,t,n){for(const r in t){const i=t[r],o=n[r];if(we(i))e.addValue(r,i);else if(we(o))e.addValue(r,nr(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const s=e.getValue(r);s.liveStyle===!0?s.jump(i):s.hasAnimated||s.set(i)}else{const s=e.getStaticValue(r);e.addValue(r,nr(s!==void 0?s:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Vd=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Uo={};function yg(e){Uo=e}function l2(){return Uo}class c2{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:s},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=zc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const f=be.now();this.renderScheduledAt<f&&(this.renderScheduledAt=f,F.render(this.render,!1,!0))};const{latestValues:c,renderState:u}=s;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=ls(n),this.isVariantNode=vg(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...h}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in h){const v=h[f];c[f]!==void 0&&we(v)&&v.set(c[f])}}mount(t){var n;this.current=t,s2.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,i)=>this.bindToMotionValue(i,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Hc.current||gg(),this.shouldReduceMotion=Vo.current),(n=this.parent)==null||n.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var t;this.projection&&this.projection.unmount(),Yt(this.notifyUpdate),Yt(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=ur.has(t);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&F.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let o;typeof window<"u"&&window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Uo){const n=Uo[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):se()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Vd.length;r++){const i=Vd[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,s=t[o];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=a2(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=nr(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(wm(r)||Sm(r))?r=parseFloat(r):!i2(r)&&Kt.test(n)&&(r=lg(t,n)),this.setBaseTarget(t,we(r)?r.get():r)),we(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var o;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const s=Vc(this.props,n,(o=this.presenceContext)==null?void 0:o.custom);s&&(r=s[t])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!we(i)?i:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new jc),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){Fc.render(this.render)}}class tn{constructor(t){this.isMounted=!1,this.node=t}update(){}}class xg extends c2{constructor(){super(...arguments),this.KeyframeResolver=qw}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const r=t.style;return r?r[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;we(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function wg({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function u2({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function d2(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function $s(e){return e===void 0||e===1}function hl({scale:e,scaleX:t,scaleY:n}){return!$s(e)||!$s(t)||!$s(n)}function cn(e){return hl(e)||kg(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function kg(e){return Ud(e.x)||Ud(e.y)}function Ud(e){return e&&e!=="0%"}function Oo(e,t,n){const r=e-n,i=t*r;return n+i}function Od(e,t,n,r,i){return i!==void 0&&(e=Oo(e,i,r)),Oo(e,n,r)+t}function fl(e,t=0,n=1,r,i){e.min=Od(e.min,t,n,r,i),e.max=Od(e.max,t,n,r,i)}function Sg(e,{x:t,y:n}){fl(e.x,t.translate,t.scale,t.originPoint),fl(e.y,n.translate,n.scale,n.originPoint)}const Fd=.999999999999,Wd=1.0000000000001;function h2(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let l=0;l<i;l++){o=n[l],s=o.projectionDelta;const{visualElement:c}=o.options;c&&c.props.style&&c.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&Fn(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,Sg(e,s)),r&&cn(o.latestValues)&&Fn(e,o.latestValues))}t.x<Wd&&t.x>Fd&&(t.x=1),t.y<Wd&&t.y>Fd&&(t.y=1)}function On(e,t){e.min=e.min+t,e.max=e.max+t}function Hd(e,t,n,r,i=.5){const o=K(e.min,e.max,i);fl(e,t,n,o,r)}function Fn(e,t){Hd(e.x,t.x,t.scaleX,t.scale,t.originX),Hd(e.y,t.y,t.scaleY,t.scale,t.originY)}function bg(e,t){return wg(d2(e.getBoundingClientRect(),t))}function f2(e,t,n){const r=bg(e,n),{scroll:i}=t;return i&&(On(r.x,i.offset.x),On(r.y,i.offset.y)),r}const p2={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},m2=cr.length;function g2(e,t,n){let r="",i=!0;for(let o=0;o<m2;o++){const s=cr[o],l=e[s];if(l===void 0)continue;let c=!0;if(typeof l=="number"?c=l===(s.startsWith("scale")?1:0):c=parseFloat(l)===0,!c||n){const u=cg(l,Oc[s]);if(!c){i=!1;const d=p2[s]||s;r+=`${d}(${u}) `}n&&(t[s]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Yc(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let s=!1,l=!1;for(const c in t){const u=t[c];if(ur.has(c)){s=!0;continue}else if(Rm(c)){i[c]=u;continue}else{const d=cg(u,Oc[c]);c.startsWith("origin")?(l=!0,o[c]=d):r[c]=d}}if(t.transform||(s||n?r.transform=g2(t,e.transform,n):r.transform&&(r.transform="none")),l){const{originX:c="50%",originY:u="50%",originZ:d=0}=o;r.transformOrigin=`${c} ${u} ${d}`}}function jg(e,{style:t,vars:n},r,i){const o=e.style;let s;for(s in t)o[s]=t[s];i==null||i.applyProjectionStyles(o,r);for(s in n)o.setProperty(s,n[s])}function Bd(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const wr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(C.test(e))e=parseFloat(e);else return e;const n=Bd(e,t.target.x),r=Bd(e,t.target.y);return`${n}% ${r}%`}},v2={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Kt.parse(e);if(i.length>5)return r;const o=Kt.createTransformer(e),s=typeof i[0]!="number"?1:0,l=n.x.scale*t.x,c=n.y.scale*t.y;i[0+s]/=l,i[1+s]/=c;const u=K(l,c,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),o(i)}},pl={borderRadius:{...wr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:wr,borderTopRightRadius:wr,borderBottomLeftRadius:wr,borderBottomRightRadius:wr,boxShadow:v2};function Tg(e,{layout:t,layoutId:n}){return ur.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!pl[e]||e==="opacity")}function Kc(e,t,n){var s;const r=e.style,i=t==null?void 0:t.style,o={};if(!r)return o;for(const l in r)(we(r[l])||i&&we(i[l])||Tg(l,e)||((s=n==null?void 0:n.getValue(l))==null?void 0:s.liveStyle)!==void 0)&&(o[l]=r[l]);return o}function y2(e){return window.getComputedStyle(e)}class x2 extends xg{constructor(){super(...arguments),this.type="html",this.renderInstance=jg}readValueFromInstance(t,n){var r;if(ur.has(n))return(r=this.projection)!=null&&r.isProjecting?nl(n):Q1(t,n);{const i=y2(t),o=(Rm(n)?i.getPropertyValue(n):i[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return bg(t,n)}build(t,n,r){Yc(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Kc(t,n,r)}}const w2={offset:"stroke-dashoffset",array:"stroke-dasharray"},k2={offset:"strokeDashoffset",array:"strokeDasharray"};function S2(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?w2:k2;e[o.offset]=C.transform(-r);const s=C.transform(t),l=C.transform(n);e[o.array]=`${s} ${l}`}const b2=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Eg(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:o=1,pathOffset:s=0,...l},c,u,d){if(Yc(e,l,u),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:h,style:f}=e;h.transform&&(f.transform=h.transform,delete h.transform),(f.transform||h.transformOrigin)&&(f.transformOrigin=h.transformOrigin??"50% 50%",delete h.transformOrigin),f.transform&&(f.transformBox=(d==null?void 0:d.transformBox)??"fill-box",delete h.transformBox);for(const v of b2)h[v]!==void 0&&(f[v]=h[v],delete h[v]);t!==void 0&&(h.x=t),n!==void 0&&(h.y=n),r!==void 0&&(h.scale=r),i!==void 0&&S2(h,i,o,s,!1)}const _g=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Dg=e=>typeof e=="string"&&e.toLowerCase()==="svg";function j2(e,t,n,r){jg(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(_g.has(i)?i:Uc(i),t.attrs[i])}function Cg(e,t,n){const r=Kc(e,t,n);for(const i in e)if(we(e[i])||we(t[i])){const o=cr.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}class T2 extends xg{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=se}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(ur.has(n)){const r=ag(n);return r&&r.default||0}return n=_g.has(n)?n:Uc(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Cg(t,n,r)}build(t,n,r){Eg(t,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(t,n,r,i){j2(t,n,r,i)}mount(t){this.isSVGTag=Dg(t.tagName),super.mount(t)}}const E2=$c.length;function Pg(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Pg(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<E2;n++){const r=$c[n],i=e.props[r];(li(i)||i===!1)&&(t[r]=i)}return t}function Ng(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const _2=[...Bc].reverse(),D2=Bc.length;function C2(e){return t=>Promise.all(t.map(({animation:n,options:r})=>Uw(e,n,r)))}function P2(e){let t=C2(e),n=$d(),r=!0;const i=c=>(u,d)=>{var f;const h=Gn(e,d,c==="exit"?(f=e.presenceContext)==null?void 0:f.custom:void 0);if(h){const{transition:v,transitionEnd:y,...x}=h;u={...u,...x,...y}}return u};function o(c){t=c(e)}function s(c){const{props:u}=e,d=Pg(e.parent)||{},h=[],f=new Set;let v={},y=1/0;for(let S=0;S<D2;S++){const g=_2[S],m=n[g],p=u[g]!==void 0?u[g]:d[g],k=li(p),b=g===c?m.isActive:null;b===!1&&(y=S);let T=p===d[g]&&p!==u[g]&&k;if(T&&r&&e.manuallyAnimateOnMount&&(T=!1),m.protectedKeys={...v},!m.isActive&&b===null||!p&&!m.prevProp||as(p)||typeof p=="boolean")continue;const E=N2(m.prevProp,p);let j=E||g===c&&m.isActive&&!T&&k||S>y&&k,L=!1;const N=Array.isArray(p)?p:[p];let J=N.reduce(i(g),{});b===!1&&(J={});const{prevResolvedValues:it={}}=m,nn={...it,...J},dr=Z=>{j=!0,f.has(Z)&&(L=!0,f.delete(Z)),m.needsAnimating[Z]=!0;const D=e.getValue(Z);D&&(D.liveStyle=!1)};for(const Z in nn){const D=J[Z],A=it[Z];if(v.hasOwnProperty(Z))continue;let M=!1;ll(D)&&ll(A)?M=!Ng(D,A):M=D!==A,M?D!=null?dr(Z):f.add(Z):D!==void 0&&f.has(Z)?dr(Z):m.protectedKeys[Z]=!0}m.prevProp=p,m.prevResolvedValues=J,m.isActive&&(v={...v,...J}),r&&e.blockInitialAnimation&&(j=!1);const wi=T&&E;j&&(!wi||L)&&h.push(...N.map(Z=>{const D={type:g};if(typeof Z=="string"&&r&&!wi&&e.manuallyAnimateOnMount&&e.parent){const{parent:A}=e,M=Gn(A,Z);if(A.enteringChildren&&M){const{delayChildren:B}=M.transition||{};D.delay=eg(A.enteringChildren,e,B)}}return{animation:Z,options:D}}))}if(f.size){const S={};if(typeof u.initial!="boolean"){const g=Gn(e,Array.isArray(u.initial)?u.initial[0]:u.initial);g&&g.transition&&(S.transition=g.transition)}f.forEach(g=>{const m=e.getBaseTarget(g),p=e.getValue(g);p&&(p.liveStyle=!0),S[g]=m??null}),h.push({animation:S})}let x=!!h.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(x=!1),r=!1,x?t(h):Promise.resolve()}function l(c,u){var h;if(n[c].isActive===u)return Promise.resolve();(h=e.variantChildren)==null||h.forEach(f=>{var v;return(v=f.animationState)==null?void 0:v.setActive(c,u)}),n[c].isActive=u;const d=s(c);for(const f in n)n[f].protectedKeys={};return d}return{animateChanges:s,setActive:l,setAnimateFunction:o,getState:()=>n,reset:()=>{n=$d()}}}function N2(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Ng(t,e):!1}function sn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function $d(){return{animate:sn(!0),whileInView:sn(),whileHover:sn(),whileTap:sn(),whileDrag:sn(),whileFocus:sn(),exit:sn()}}const Ag=1e-4,A2=1-Ag,L2=1+Ag,Lg=.01,M2=0-Lg,z2=0+Lg;function je(e){return e.max-e.min}function R2(e,t,n){return Math.abs(e-t)<=n}function Yd(e,t,n,r=.5){e.origin=r,e.originPoint=K(t.min,t.max,e.origin),e.scale=je(n)/je(t),e.translate=K(n.min,n.max,e.origin)-e.originPoint,(e.scale>=A2&&e.scale<=L2||isNaN(e.scale))&&(e.scale=1),(e.translate>=M2&&e.translate<=z2||isNaN(e.translate))&&(e.translate=0)}function Vr(e,t,n,r){Yd(e.x,t.x,n.x,r?r.originX:void 0),Yd(e.y,t.y,n.y,r?r.originY:void 0)}function Kd(e,t,n){e.min=n.min+t.min,e.max=e.min+je(t)}function I2(e,t,n){Kd(e.x,t.x,n.x),Kd(e.y,t.y,n.y)}function Gd(e,t,n){e.min=t.min-n.min,e.max=e.min+je(t)}function Fo(e,t,n){Gd(e.x,t.x,n.x),Gd(e.y,t.y,n.y)}function qd(e,t,n,r,i){return e-=t,e=Oo(e,1/n,r),i!==void 0&&(e=Oo(e,1/i,r)),e}function V2(e,t=0,n=1,r=.5,i,o=e,s=e){if(ut.test(t)&&(t=parseFloat(t),t=K(s.min,s.max,t/100)-s.min),typeof t!="number")return;let l=K(o.min,o.max,r);e===o&&(l-=t),e.min=qd(e.min,t,n,l,i),e.max=qd(e.max,t,n,l,i)}function Qd(e,t,[n,r,i],o,s){V2(e,t[n],t[r],t[i],t.scale,o,s)}const U2=["x","scaleX","originX"],O2=["y","scaleY","originY"];function Xd(e,t,n,r){Qd(e.x,t,U2,n?n.x:void 0,r?r.x:void 0),Qd(e.y,t,O2,n?n.y:void 0,r?r.y:void 0)}function Jd(e,t){e.min=t.min,e.max=t.max}function qe(e,t){Jd(e.x,t.x),Jd(e.y,t.y)}function Zd(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function eh(e){return e.translate===0&&e.scale===1}function Mg(e){return eh(e.x)&&eh(e.y)}function th(e,t){return e.min===t.min&&e.max===t.max}function F2(e,t){return th(e.x,t.x)&&th(e.y,t.y)}function nh(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function zg(e,t){return nh(e.x,t.x)&&nh(e.y,t.y)}function rh(e){return je(e.x)/je(e.y)}function ih(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Ue(e){return[e("x"),e("y")]}function W2(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((i||o||s)&&(r=`translate3d(${i}px, ${o}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:h,rotateY:f,skewX:v,skewY:y}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),h&&(r+=`rotateX(${h}deg) `),f&&(r+=`rotateY(${f}deg) `),v&&(r+=`skewX(${v}deg) `),y&&(r+=`skewY(${y}deg) `)}const l=e.x.scale*t.x,c=e.y.scale*t.y;return(l!==1||c!==1)&&(r+=`scale(${l}, ${c})`),r||"none"}const Rg=["TopLeft","TopRight","BottomLeft","BottomRight"],H2=Rg.length,oh=e=>typeof e=="string"?parseFloat(e):e,sh=e=>typeof e=="number"||C.test(e);function B2(e,t,n,r,i,o){i?(e.opacity=K(0,n.opacity??1,$2(r)),e.opacityExit=K(t.opacity??1,0,Y2(r))):o&&(e.opacity=K(t.opacity??1,n.opacity??1,r));for(let s=0;s<H2;s++){const l=`border${Rg[s]}Radius`;let c=ah(t,l),u=ah(n,l);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||sh(c)===sh(u)?(e[l]=Math.max(K(oh(c),oh(u),r),0),(ut.test(u)||ut.test(c))&&(e[l]+="%")):e[l]=u}(t.rotate||n.rotate)&&(e.rotate=K(t.rotate||0,n.rotate||0,r))}function ah(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const $2=Ig(0,.5,Pm),Y2=Ig(.5,.95,$e);function Ig(e,t,n){return r=>r<e?0:r>t?1:n(oi(e,t,r))}function K2(e,t){const n=be.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Yt(r),e(o-t))};return F.setup(r,!0),()=>Yt(r)}function ci(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function ao(e){return we(e)?e.get():e}function G2(e,t,n){const r=we(e)?e:nr(e);return r.start(Ic("",r,t,n)),r.animation}const q2=(e,t)=>e.depth-t.depth;class Q2{constructor(){this.children=[],this.isDirty=!1}add(t){wc(this.children,t),this.isDirty=!0}remove(t){kc(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(q2),this.isDirty=!1,this.children.forEach(t)}}class X2{constructor(){this.members=[]}add(t){wc(this.members,t),t.scheduleRender()}remove(t){if(kc(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const lo={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Ys=["","X","Y","Z"],J2=1e3;let Z2=0;function Ks(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Vg(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=rg(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",F,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Vg(r)}function Ug({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},l=t==null?void 0:t()){this.id=Z2++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(nk),this.nodes.forEach(sk),this.nodes.forEach(ak),this.nodes.forEach(rk)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new Q2)}addEventListener(s,l){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new jc),this.eventHandlers.get(s).add(l)}notifyListeners(s,...l){const c=this.eventHandlers.get(s);c&&c.notify(...l)}hasListeners(s){return this.eventHandlers.has(s)}mount(s){if(this.instance)return;this.isSVG=mg(s)&&!n2(s),this.instance=s;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(c||l)&&(this.isLayoutDirty=!0),e){let d,h=0;const f=()=>this.root.updateBlockedByResize=!1;F.read(()=>{h=window.innerWidth}),e(s,()=>{const v=window.innerWidth;v!==h&&(h=v,this.root.updateBlockedByResize=!0,d&&d(),d=K2(f,250),lo.hasAnimatedSinceResize&&(lo.hasAnimatedSinceResize=!1,this.nodes.forEach(uh)))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:h,hasRelativeLayoutChanged:f,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||u.getDefaultTransition()||hk,{onLayoutAnimationStart:x,onLayoutAnimationComplete:S}=u.getProps(),g=!this.targetLayout||!zg(this.targetLayout,v),m=!h&&f;if(this.options.layoutRoot||this.resumeFrom||m||h&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const p={...Rc(y,"layout"),onPlay:x,onComplete:S};(u.shouldReduceMotion||this.options.layoutRoot)&&(p.delay=0,p.type=!1),this.startAnimation(p),this.setAnimationOrigin(d,m)}else h||uh(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Yt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(lk),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Vg(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const h=this.path[d];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(lh);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(ch);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(ok),this.nodes.forEach(ek),this.nodes.forEach(tk)):this.nodes.forEach(ch),this.clearAllSnapshots();const l=be.now();pe.delta=dt(0,1e3/60,l-pe.timestamp),pe.timestamp=l,pe.isProcessing=!0,Vs.update.process(pe),Vs.preRender.process(pe),Vs.render.process(pe),pe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Fc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(ik),this.sharedNodes.forEach(ck)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,F.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){F.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!je(this.snapshot.measuredBox.x)&&!je(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=se(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let l=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(l=!1),l&&this.instance){const c=r(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,l=this.projectionDelta&&!Mg(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;s&&this.instance&&(l||cn(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return s&&(c=this.removeTransform(c)),fk(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:s}=this.options;if(!s)return se();const l=s.measureViewportBox();if(!(((u=this.scroll)==null?void 0:u.wasRoot)||this.path.some(pk))){const{scroll:d}=this.root;d&&(On(l.x,d.offset.x),On(l.y,d.offset.y))}return l}removeElementScroll(s){var c;const l=se();if(qe(l,s),(c=this.scroll)!=null&&c.wasRoot)return l;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:h,options:f}=d;d!==this.root&&h&&f.layoutScroll&&(h.wasRoot&&qe(l,s),On(l.x,h.offset.x),On(l.y,h.offset.y))}return l}applyTransform(s,l=!1){const c=se();qe(c,s);for(let u=0;u<this.path.length;u++){const d=this.path[u];!l&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Fn(c,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),cn(d.latestValues)&&Fn(c,d.latestValues)}return cn(this.latestValues)&&Fn(c,this.latestValues),c}removeTransform(s){const l=se();qe(l,s);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!u.instance||!cn(u.latestValues))continue;hl(u.latestValues)&&u.updateSnapshot();const d=se(),h=u.measurePageBox();qe(d,h),Xd(l,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return cn(this.latestValues)&&Xd(l,this.latestValues),l}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==pe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var v;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(s||c&&this.isSharedProjectionDirty||this.isProjectionDirty||(v=this.parent)!=null&&v.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:h}=this.options;if(!this.layout||!(d||h))return;this.resolvedRelativeTargetAt=pe.timestamp;const f=this.getClosestProjectingParent();f&&this.linkedParentVersion!==f.layoutVersion&&!f.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(f&&f.layout?this.createRelativeTarget(f,this.layout.layoutBox,f.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=se(),this.targetWithTransforms=se()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),I2(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):qe(this.target,this.layout.layoutBox),Sg(this.target,this.targetDelta)):qe(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,f&&!!f.resumingFrom==!!this.resumingFrom&&!f.options.layoutScroll&&f.target&&this.animationProgress!==1?this.createRelativeTarget(f,this.target,f.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||hl(this.parent.latestValues)||kg(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(s,l,c){this.relativeParent=s,this.linkedParentVersion=s.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=se(),this.relativeTargetOrigin=se(),Fo(this.relativeTargetOrigin,l,c),qe(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var y;const s=this.getLead(),l=!!this.resumingFrom||this!==s;let c=!0;if((this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===pe.timestamp&&(c=!1),c)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;qe(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,f=this.treeScale.y;h2(this.layoutCorrected,this.treeScale,this.path,l),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=se());const{target:v}=s;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Zd(this.prevProjectionDelta.x,this.projectionDelta.x),Zd(this.prevProjectionDelta.y,this.projectionDelta.y)),Vr(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==f||!ih(this.projectionDelta.x,this.prevProjectionDelta.x)||!ih(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var l;if((l=this.options.visualElement)==null||l.scheduleRender(),s){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Un(),this.projectionDelta=Un(),this.projectionDeltaWithTransform=Un()}setAnimationOrigin(s,l=!1){const c=this.snapshot,u=c?c.latestValues:{},d={...this.latestValues},h=Un();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const f=se(),v=c?c.source:void 0,y=this.layout?this.layout.source:void 0,x=v!==y,S=this.getStack(),g=!S||S.members.length<=1,m=!!(x&&!g&&this.options.crossfade===!0&&!this.path.some(dk));this.animationProgress=0;let p;this.mixTargetDelta=k=>{const b=k/1e3;dh(h.x,s.x,b),dh(h.y,s.y,b),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Fo(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),uk(this.relativeTarget,this.relativeTargetOrigin,f,b),p&&F2(this.relativeTarget,p)&&(this.isProjectionDirty=!1),p||(p=se()),qe(p,this.relativeTarget)),x&&(this.animationValues=d,B2(d,u,this.latestValues,b,m,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=b},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){var l,c,u;this.notifyListeners("animationStart"),(l=this.currentAnimation)==null||l.stop(),(u=(c=this.resumingFrom)==null?void 0:c.currentAnimation)==null||u.stop(),this.pendingAnimation&&(Yt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=F.update(()=>{lo.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=nr(0)),this.currentAnimation=G2(this.motionValue,[0,1e3],{...s,velocity:0,isSync:!0,onUpdate:d=>{this.mixTargetDelta(d),s.onUpdate&&s.onUpdate(d)},onStop:()=>{},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(J2),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:l,target:c,layout:u,latestValues:d}=s;if(!(!l||!c||!u)){if(this!==s&&this.layout&&u&&Og(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||se();const h=je(this.layout.layoutBox.x);c.x.min=s.target.x.min,c.x.max=c.x.min+h;const f=je(this.layout.layoutBox.y);c.y.min=s.target.y.min,c.y.max=c.y.min+f}qe(l,c),Fn(l,d),Vr(this.projectionDeltaWithTransform,this.layoutCorrected,l,d)}}registerSharedNode(s,l){this.sharedNodes.has(s)||this.sharedNodes.set(s,new X2),this.sharedNodes.get(s).add(l);const u=l.options.initialPromotionConfig;l.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(l):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var l;const{layoutId:s}=this.options;return s?((l=this.getStack())==null?void 0:l.lead)||this:this}getPrevLead(){var l;const{layoutId:s}=this.options;return s?(l=this.getStack())==null?void 0:l.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:l,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),s&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let l=!1;const{latestValues:c}=s;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(l=!0),!l)return;const u={};c.z&&Ks("z",s,u,this.animationValues);for(let d=0;d<Ys.length;d++)Ks(`rotate${Ys[d]}`,s,u,this.animationValues),Ks(`skew${Ys[d]}`,s,u,this.animationValues);s.render();for(const d in u)s.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);s.scheduleRender()}applyProjectionStyles(s,l){if(!this.instance||this.isSVG)return;if(!this.isVisible){s.visibility="hidden";return}const c=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,s.visibility="",s.opacity="",s.pointerEvents=ao(l==null?void 0:l.pointerEvents)||"",s.transform=c?c(this.latestValues,""):"none";return}const u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){this.options.layoutId&&(s.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,s.pointerEvents=ao(l==null?void 0:l.pointerEvents)||""),this.hasProjected&&!cn(this.latestValues)&&(s.transform=c?c({},""):"none",this.hasProjected=!1);return}s.visibility="";const d=u.animationValues||u.latestValues;this.applyTransformsToTarget();let h=W2(this.projectionDeltaWithTransform,this.treeScale,d);c&&(h=c(d,h)),s.transform=h;const{x:f,y:v}=this.projectionDelta;s.transformOrigin=`${f.origin*100}% ${v.origin*100}% 0`,u.animationValues?s.opacity=u===this?d.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:s.opacity=u===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const y in pl){if(d[y]===void 0)continue;const{correct:x,applyTo:S,isCSSVariable:g}=pl[y],m=h==="none"?d[y]:x(d[y],u);if(S){const p=S.length;for(let k=0;k<p;k++)s[S[k]]=m}else g?this.options.visualElement.renderState.vars[y]=m:s[y]=m}this.options.layoutId&&(s.pointerEvents=u===this?ao(l==null?void 0:l.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var l;return(l=s.currentAnimation)==null?void 0:l.stop()}),this.root.nodes.forEach(lh),this.root.sharedNodes.clear()}}}function ek(e){e.updateLayout()}function tk(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=t.source!==e.layout.source;o==="size"?Ue(h=>{const f=s?t.measuredBox[h]:t.layoutBox[h],v=je(f);f.min=r[h].min,f.max=f.min+v}):Og(o,t.layoutBox,r)&&Ue(h=>{const f=s?t.measuredBox[h]:t.layoutBox[h],v=je(r[h]);f.max=f.min+v,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[h].max=e.relativeTarget[h].min+v)});const l=Un();Vr(l,r,t.layoutBox);const c=Un();s?Vr(c,e.applyTransform(i,!0),t.measuredBox):Vr(c,r,t.layoutBox);const u=!Mg(l);let d=!1;if(!e.resumeFrom){const h=e.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:f,layout:v}=h;if(f&&v){const y=se();Fo(y,t.layoutBox,f.layoutBox);const x=se();Fo(x,r,v.layoutBox),zg(y,x)||(d=!0),h.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=y,e.relativeParent=h)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:c,layoutDelta:l,hasLayoutChanged:u,hasRelativeLayoutChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function nk(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function rk(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function ik(e){e.clearSnapshot()}function lh(e){e.clearMeasurements()}function ch(e){e.isLayoutDirty=!1}function ok(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function uh(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function sk(e){e.resolveTargetDelta()}function ak(e){e.calcProjection()}function lk(e){e.resetSkewAndRotation()}function ck(e){e.removeLeadSnapshot()}function dh(e,t,n){e.translate=K(t.translate,0,n),e.scale=K(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function hh(e,t,n,r){e.min=K(t.min,n.min,r),e.max=K(t.max,n.max,r)}function uk(e,t,n,r){hh(e.x,t.x,n.x,r),hh(e.y,t.y,n.y,r)}function dk(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const hk={duration:.45,ease:[.4,0,.1,1]},fh=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),ph=fh("applewebkit/")&&!fh("chrome/")?Math.round:$e;function mh(e){e.min=ph(e.min),e.max=ph(e.max)}function fk(e){mh(e.x),mh(e.y)}function Og(e,t,n){return e==="position"||e==="preserve-aspect"&&!R2(rh(t),rh(n),.2)}function pk(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const mk=Ug({attachResizeListener:(e,t)=>ci(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Gs={current:void 0},Fg=Ug({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Gs.current){const e=new mk({});e.mount(window),e.setOptions({layoutScroll:!0}),Gs.current=e}return Gs.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Gc=w.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function gh(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function gk(...e){return t=>{let n=!1;const r=e.map(i=>{const o=gh(i,t);return!n&&typeof o=="function"&&(n=!0),o});if(n)return()=>{for(let i=0;i<r.length;i++){const o=r[i];typeof o=="function"?o():gh(e[i],null)}}}}function vk(...e){return w.useCallback(gk(...e),e)}class yk extends w.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=n.offsetParent,i=ug(r)&&r.offsetWidth||0,o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft,o.right=i-o.width-o.left}return null}componentDidUpdate(){}render(){return this.props.children}}function xk({children:e,isPresent:t,anchorX:n,root:r}){var d;const i=w.useId(),o=w.useRef(null),s=w.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=w.useContext(Gc),c=((d=e.props)==null?void 0:d.ref)??(e==null?void 0:e.ref),u=vk(o,c);return w.useInsertionEffect(()=>{const{width:h,height:f,top:v,left:y,right:x}=s.current;if(t||!o.current||!h||!f)return;const S=n==="left"?`left: ${y}`:`right: ${x}`;o.current.dataset.motionPopId=i;const g=document.createElement("style");l&&(g.nonce=l);const m=r??document.head;return m.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${f}px !important;
            ${S}px !important;
            top: ${v}px !important;
          }
        `),()=>{m.contains(g)&&m.removeChild(g)}},[t]),a.jsx(yk,{isPresent:t,childRef:o,sizeRef:s,children:w.cloneElement(e,{ref:u})})}const wk=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s,anchorX:l,root:c})=>{const u=xc(kk),d=w.useId();let h=!0,f=w.useMemo(()=>(h=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:v=>{u.set(v,!0);for(const y of u.values())if(!y)return;r&&r()},register:v=>(u.set(v,!1),()=>u.delete(v))}),[n,u,r]);return o&&h&&(f={...f}),w.useMemo(()=>{u.forEach((v,y)=>u.set(y,!1))},[n]),w.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),s==="popLayout"&&(e=a.jsx(xk,{isPresent:n,anchorX:l,root:c,children:e})),a.jsx(ss.Provider,{value:f,children:e})};function kk(){return new Map}function Wg(e=!0){const t=w.useContext(ss);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=w.useId();w.useEffect(()=>{if(e)return i(o)},[e]);const s=w.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,s]:[!0]}const Bi=e=>e.key||"";function vh(e){const t=[];return w.Children.forEach(e,n=>{w.isValidElement(n)&&t.push(n)}),t}const Hg=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:o="sync",propagate:s=!1,anchorX:l="left",root:c})=>{const[u,d]=Wg(s),h=w.useMemo(()=>vh(e),[e]),f=s&&!u?[]:h.map(Bi),v=w.useRef(!0),y=w.useRef(h),x=xc(()=>new Map),S=w.useRef(new Set),[g,m]=w.useState(h),[p,k]=w.useState(h);xm(()=>{v.current=!1,y.current=h;for(let E=0;E<p.length;E++){const j=Bi(p[E]);f.includes(j)?(x.delete(j),S.current.delete(j)):x.get(j)!==!0&&x.set(j,!1)}},[p,f.length,f.join("-")]);const b=[];if(h!==g){let E=[...h];for(let j=0;j<p.length;j++){const L=p[j],N=Bi(L);f.includes(N)||(E.splice(j,0,L),b.push(L))}return o==="wait"&&b.length&&(E=b),k(vh(E)),m(h),null}const{forceRender:T}=w.useContext(yc);return a.jsx(a.Fragment,{children:p.map(E=>{const j=Bi(E),L=s&&!u?!1:h===p||f.includes(j),N=()=>{if(S.current.has(j))return;if(S.current.add(j),x.has(j))x.set(j,!0);else return;let J=!0;x.forEach(it=>{it||(J=!1)}),J&&(T==null||T(),k(y.current),s&&(d==null||d()),r&&r())};return a.jsx(wk,{isPresent:L,initial:!v.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:o,root:c,onExitComplete:L?void 0:N,anchorX:l,children:E},j)})})},Bg=w.createContext({strict:!1}),yh={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let xh=!1;function Sk(){if(xh)return;const e={};for(const t in yh)e[t]={isEnabled:n=>yh[t].some(r=>!!n[r])};yg(e),xh=!0}function $g(){return Sk(),l2()}function bk(e){const t=$g();for(const n in e)t[n]={...t[n],...e[n]};yg(t)}const jk=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Wo(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||jk.has(e)}let Yg=e=>!Wo(e);function Tk(e){typeof e=="function"&&(Yg=t=>t.startsWith("on")?!Wo(t):e(t))}try{Tk(require("@emotion/is-prop-valid").default)}catch{}function Ek(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Yg(i)||n===!0&&Wo(i)||!t&&!Wo(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}const cs=w.createContext({});function _k(e,t){if(ls(e)){const{initial:n,animate:r}=e;return{initial:n===!1||li(n)?n:void 0,animate:li(r)?r:void 0}}return e.inherit!==!1?t:{}}function Dk(e){const{initial:t,animate:n}=_k(e,w.useContext(cs));return w.useMemo(()=>({initial:t,animate:n}),[wh(t),wh(n)])}function wh(e){return Array.isArray(e)?e.join(" "):e}const qc=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Kg(e,t,n){for(const r in t)!we(t[r])&&!Tg(r,n)&&(e[r]=t[r])}function Ck({transformTemplate:e},t){return w.useMemo(()=>{const n=qc();return Yc(n,t,e),Object.assign({},n.vars,n.style)},[t])}function Pk(e,t){const n=e.style||{},r={};return Kg(r,n,e),Object.assign(r,Ck(e,t)),r}function Nk(e,t){const n={},r=Pk(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const Gg=()=>({...qc(),attrs:{}});function Ak(e,t,n,r){const i=w.useMemo(()=>{const o=Gg();return Eg(o,t,Dg(r),e.transformTemplate,e.style),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};Kg(o,e.style,e),i.style={...o,...i.style}}return i}const Lk=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Qc(e){return typeof e!="string"||e.includes("-")?!1:!!(Lk.indexOf(e)>-1||/[A-Z]/u.test(e))}function Mk(e,t,n,{latestValues:r},i,o=!1,s){const c=(s??Qc(e)?Ak:Nk)(t,r,i,e),u=Ek(t,typeof e=="string",o),d=e!==w.Fragment?{...u,...c,ref:n}:{},{children:h}=t,f=w.useMemo(()=>we(h)?h.get():h,[h]);return w.createElement(e,{...d,children:f})}function zk({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:Rk(n,r,i,e),renderState:t()}}function Rk(e,t,n,r){const i={},o=r(e,{});for(const f in o)i[f]=ao(o[f]);let{initial:s,animate:l}=e;const c=ls(e),u=vg(e);t&&u&&!c&&e.inherit!==!1&&(s===void 0&&(s=t.initial),l===void 0&&(l=t.animate));let d=n?n.initial===!1:!1;d=d||s===!1;const h=d?l:s;if(h&&typeof h!="boolean"&&!as(h)){const f=Array.isArray(h)?h:[h];for(let v=0;v<f.length;v++){const y=Vc(e,f[v]);if(y){const{transitionEnd:x,transition:S,...g}=y;for(const m in g){let p=g[m];if(Array.isArray(p)){const k=d?p.length-1:0;p=p[k]}p!==null&&(i[m]=p)}for(const m in x)i[m]=x[m]}}}return i}const qg=e=>(t,n)=>{const r=w.useContext(cs),i=w.useContext(ss),o=()=>zk(e,t,r,i);return n?o():xc(o)},Ik=qg({scrapeMotionValuesFromProps:Kc,createRenderState:qc}),Vk=qg({scrapeMotionValuesFromProps:Cg,createRenderState:Gg}),Uk=Symbol.for("motionComponentSymbol");function Ok(e,t,n){const r=w.useRef(n);w.useInsertionEffect(()=>{r.current=n});const i=w.useRef(null);return w.useCallback(o=>{var l;o&&((l=e.onMount)==null||l.call(e,o)),t&&(o?t.mount(o):t.unmount());const s=r.current;if(typeof s=="function")if(o){const c=s(o);typeof c=="function"&&(i.current=c)}else i.current?(i.current(),i.current=null):s(o);else s&&(s.current=o)},[t])}const Qg=w.createContext({});function Er(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Fk(e,t,n,r,i,o){var S,g;const{visualElement:s}=w.useContext(cs),l=w.useContext(Bg),c=w.useContext(ss),u=w.useContext(Gc).reducedMotion,d=w.useRef(null);r=r||l.renderer,!d.current&&r&&(d.current=r(e,{visualState:t,parent:s,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,isSVG:o}));const h=d.current,f=w.useContext(Qg);h&&!h.projection&&i&&(h.type==="html"||h.type==="svg")&&Wk(d.current,n,i,f);const v=w.useRef(!1);w.useInsertionEffect(()=>{h&&v.current&&h.update(n,c)});const y=n[ng],x=w.useRef(!!y&&!((S=window.MotionHandoffIsComplete)!=null&&S.call(window,y))&&((g=window.MotionHasOptimisedAnimation)==null?void 0:g.call(window,y)));return xm(()=>{h&&(v.current=!0,window.MotionIsMounted=!0,h.updateFeatures(),h.scheduleRenderMicrotask(),x.current&&h.animationState&&h.animationState.animateChanges())}),w.useEffect(()=>{h&&(!x.current&&h.animationState&&h.animationState.animateChanges(),x.current&&(queueMicrotask(()=>{var m;(m=window.MotionHandoffMarkAsComplete)==null||m.call(window,y)}),x.current=!1),h.enteringChildren=void 0)}),h}function Wk(e,t,n,r){const{layoutId:i,layout:o,drag:s,dragConstraints:l,layoutScroll:c,layoutRoot:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Xg(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!s||l&&Er(l),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:u})}function Xg(e){if(e)return e.options.allowProjection!==!1?e.projection:Xg(e.parent)}function qs(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&bk(r);const o=n?n==="svg":Qc(e),s=o?Vk:Ik;function l(u,d){let h;const f={...w.useContext(Gc),...u,layoutId:Hk(u)},{isStatic:v}=f,y=Dk(u),x=s(u,v);if(!v&&ym){Bk();const S=$k(f);h=S.MeasureLayout,y.visualElement=Fk(e,x,f,i,S.ProjectionNode,o)}return a.jsxs(cs.Provider,{value:y,children:[h&&y.visualElement?a.jsx(h,{visualElement:y.visualElement,...f}):null,Mk(e,u,Ok(x,y.visualElement,d),x,v,t,o)]})}l.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const c=w.forwardRef(l);return c[Uk]=e,c}function Hk({layoutId:e}){const t=w.useContext(yc).id;return t&&e!==void 0?t+"-"+e:e}function Bk(e,t){w.useContext(Bg).strict}function $k(e){const t=$g(),{drag:n,layout:r}=t;if(!n&&!r)return{};const i={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(e)||r!=null&&r.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function Yk(e,t){if(typeof Proxy>"u")return qs;const n=new Map,r=(o,s)=>qs(o,s,e,t),i=(o,s)=>r(o,s);return new Proxy(i,{get:(o,s)=>s==="create"?r:(n.has(s)||n.set(s,qs(s,void 0,e,t)),n.get(s))})}const Kk=(e,t)=>t.isSVG??Qc(e)?new T2(t):new x2(t,{allowProjection:e!==w.Fragment});class Gk extends tn{constructor(t){super(t),t.animationState||(t.animationState=P2(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();as(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let qk=0;class Qk extends tn{constructor(){super(...arguments),this.id=qk++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const Xk={animation:{Feature:Gk},exit:{Feature:Qk}};function yi(e){return{point:{x:e.pageX,y:e.pageY}}}const Jk=e=>t=>Wc(t)&&e(t,yi(t));function Ur(e,t,n,r){return ci(e,t,Jk(n),r)}const Jg=({current:e})=>e?e.ownerDocument.defaultView:null,kh=(e,t)=>Math.abs(e-t);function Zk(e,t){const n=kh(e.x,t.x),r=kh(e.y,t.y);return Math.sqrt(n**2+r**2)}const Sh=new Set(["auto","scroll"]);class Zg{constructor(t,n,{transformPagePoint:r,contextWindow:i=window,dragSnapToOrigin:o=!1,distanceThreshold:s=3,element:l}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=v=>{this.handleScroll(v.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Xs(this.lastMoveEventInfo,this.history),y=this.startEvent!==null,x=Zk(v.offset,{x:0,y:0})>=this.distanceThreshold;if(!y&&!x)return;const{point:S}=v,{timestamp:g}=pe;this.history.push({...S,timestamp:g});const{onStart:m,onMove:p}=this.handlers;y||(m&&m(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),p&&p(this.lastMoveEvent,v)},this.handlePointerMove=(v,y)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=Qs(y,this.transformPagePoint),F.update(this.updatePoint,!0)},this.handlePointerUp=(v,y)=>{this.end();const{onEnd:x,onSessionEnd:S,resumeAnimation:g}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&g&&g(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=Xs(v.type==="pointercancel"?this.lastMoveEventInfo:Qs(y,this.transformPagePoint),this.history);this.startEvent&&x&&x(v,m),S&&S(v,m)},!Wc(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=s,this.contextWindow=i||window;const c=yi(t),u=Qs(c,this.transformPagePoint),{point:d}=u,{timestamp:h}=pe;this.history=[{...d,timestamp:h}];const{onSessionStart:f}=n;f&&f(t,Xs(u,this.history)),this.removeListeners=mi(Ur(this.contextWindow,"pointermove",this.handlePointerMove),Ur(this.contextWindow,"pointerup",this.handlePointerUp),Ur(this.contextWindow,"pointercancel",this.handlePointerUp)),l&&this.startScrollTracking(l)}startScrollTracking(t){let n=t.parentElement;for(;n;){const r=getComputedStyle(n);(Sh.has(r.overflowX)||Sh.has(r.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const r=t===window,i=r?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},o={x:i.x-n.x,y:i.y-n.y};o.x===0&&o.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=o.x,this.lastMoveEventInfo.point.y+=o.y):this.history.length>0&&(this.history[0].x-=o.x,this.history[0].y-=o.y),this.scrollPositions.set(t,i),F.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Yt(this.updatePoint)}}function Qs(e,t){return t?{point:t(e.point)}:e}function bh(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Xs({point:e},t){return{point:e,delta:bh(e,e0(t)),offset:bh(e,eS(t)),velocity:tS(t,.1)}}function eS(e){return e[0]}function e0(e){return e[e.length-1]}function tS(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=e0(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>yt(t)));)n--;if(!r)return{x:0,y:0};const o=He(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function nS(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?K(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?K(n,e,r.max):Math.min(e,n)),e}function jh(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function rS(e,{top:t,left:n,bottom:r,right:i}){return{x:jh(e.x,n,i),y:jh(e.y,t,r)}}function Th(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function iS(e,t){return{x:Th(e.x,t.x),y:Th(e.y,t.y)}}function oS(e,t){let n=.5;const r=je(e),i=je(t);return i>r?n=oi(t.min,t.max-r,e.min):r>i&&(n=oi(e.min,e.max-i,t.min)),dt(0,1,n)}function sS(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const ml=.35;function aS(e=ml){return e===!1?e=0:e===!0&&(e=ml),{x:Eh(e,"left","right"),y:Eh(e,"top","bottom")}}function Eh(e,t,n){return{min:_h(e,t),max:_h(e,n)}}function _h(e,t){return typeof e=="number"?e:e[t]||0}const lS=new WeakMap;class cS{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=se(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const o=h=>{n?(this.stopAnimation(),this.snapToCursor(yi(h).point)):this.pauseAnimation()},s=(h,f)=>{this.stopAnimation();const{drag:v,dragPropagation:y,onDragStart:x}=this.getProps();if(v&&!y&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Xw(v),!this.openDragLock))return;this.latestPointerEvent=h,this.latestPanInfo=f,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ue(g=>{let m=this.getAxisMotionValue(g).get()||0;if(ut.test(m)){const{projection:p}=this.visualElement;if(p&&p.layout){const k=p.layout.layoutBox[g];k&&(m=je(k)*(parseFloat(m)/100))}}this.originPoint[g]=m}),x&&F.postRender(()=>x(h,f)),cl(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},l=(h,f)=>{this.latestPointerEvent=h,this.latestPanInfo=f;const{dragPropagation:v,dragDirectionLock:y,onDirectionLock:x,onDrag:S}=this.getProps();if(!v&&!this.openDragLock)return;const{offset:g}=f;if(y&&this.currentDirection===null){this.currentDirection=uS(g),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",f.point,g),this.updateAxis("y",f.point,g),this.visualElement.render(),S&&S(h,f)},c=(h,f)=>{this.latestPointerEvent=h,this.latestPanInfo=f,this.stop(h,f),this.latestPointerEvent=null,this.latestPanInfo=null},u=()=>Ue(h=>{var f;return this.getAnimationState(h)==="paused"&&((f=this.getAxisMotionValue(h).animation)==null?void 0:f.play())}),{dragSnapToOrigin:d}=this.getProps();this.panSession=new Zg(t,{onSessionStart:o,onStart:s,onMove:l,onSessionEnd:c,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,distanceThreshold:r,contextWindow:Jg(this.visualElement),element:this.visualElement.current})}stop(t,n){const r=t||this.latestPointerEvent,i=n||this.latestPanInfo,o=this.isDragging;if(this.cancel(),!o||!i||!r)return;const{velocity:s}=i;this.startAnimation(s);const{onDragEnd:l}=this.getProps();l&&F.postRender(()=>l(r,i))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!$i(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=nS(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var o;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(o=this.visualElement.projection)==null?void 0:o.layout,i=this.constraints;t&&Er(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=rS(r.layoutBox,t):this.constraints=!1,this.elastic=aS(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Ue(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=sS(r.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Er(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=f2(r,i.root,this.visualElement.getTransformPagePoint());let s=iS(i.layout.layoutBox,o);if(n){const l=n(u2(s));this.hasMutatedConstraints=!!l,l&&(s=wg(l))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},u=Ue(d=>{if(!$i(d,n,this.currentDirection))return;let h=c&&c[d]||{};s&&(h={min:0,max:0});const f=i?200:1e6,v=i?40:1e7,y={type:"inertia",velocity:r?t[d]:0,bounceStiffness:f,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...o,...h};return this.startAxisValueAnimation(d,y)});return Promise.all(u).then(l)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return cl(this.visualElement,t),r.start(Ic(t,r,0,n,this.visualElement,!1))}stopAnimation(){Ue(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Ue(t=>{var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Ue(n=>{const{drag:r}=this.getProps();if(!$i(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:l}=i.layout.layoutBox[n],c=o.get()||0;o.set(t[n]-K(s,l,.5)+c)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Er(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Ue(s=>{const l=this.getAxisMotionValue(s);if(l&&this.constraints!==!1){const c=l.get();i[s]=oS({min:c,max:c},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Ue(s=>{if(!$i(s,t,null))return;const l=this.getAxisMotionValue(s),{min:c,max:u}=this.constraints[s];l.set(K(c,u,i[s]))})}addListeners(){if(!this.visualElement.current)return;lS.set(this.visualElement,this);const t=this.visualElement.current,n=Ur(t,"pointerdown",c=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&!pg(c.target)&&this.start(c)}),r=()=>{const{dragConstraints:c}=this.getProps();Er(c)&&c.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),F.read(r);const s=ci(window,"resize",()=>this.scalePositionWithinConstraints()),l=i.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(Ue(d=>{const h=this.getAxisMotionValue(d);h&&(this.originPoint[d]+=c[d].translate,h.set(h.get()+c[d].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),l&&l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=ml,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:l}}}function $i(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function uS(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class dS extends tn{constructor(t){super(t),this.removeGroupControls=$e,this.removeListeners=$e,this.controls=new cS(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||$e}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners()}}const Dh=e=>(t,n)=>{e&&F.postRender(()=>e(t,n))};class hS extends tn{constructor(){super(...arguments),this.removePointerDownListener=$e}onPointerDown(t){this.session=new Zg(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Jg(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Dh(t),onStart:Dh(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&F.postRender(()=>i(o,s))}}}mount(){this.removePointerDownListener=Ur(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Js=!1;class fS extends w.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),Js&&o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),lo.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,{projection:s}=r;return s&&(s.isPresent=o,Js=!0,i||t.layoutDependency!==n||n===void 0||t.isPresent!==o?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||F.postRender(()=>{const l=s.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Fc.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;Js=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function t0(e){const[t,n]=Wg(),r=w.useContext(yc);return a.jsx(fS,{...e,layoutGroup:r,switchLayoutGroup:w.useContext(Qg),isPresent:t,safeToRemove:n})}const pS={pan:{Feature:hS},drag:{Feature:dS,ProjectionNode:Fg,MeasureLayout:t0}};function Ch(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,o=r[i];o&&F.postRender(()=>o(t,yi(t)))}class mS extends tn{mount(){const{current:t}=this.node;t&&(this.unmount=Jw(t,(n,r)=>(Ch(this.node,r,"Start"),i=>Ch(this.node,i,"End"))))}unmount(){}}class gS extends tn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=mi(ci(this.node.current,"focus",()=>this.onFocus()),ci(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Ph(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),o=r[i];o&&F.postRender(()=>o(t,yi(t)))}class vS extends tn{mount(){const{current:t}=this.node;t&&(this.unmount=t2(t,(n,r)=>(Ph(this.node,r,"Start"),(i,{success:o})=>Ph(this.node,i,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const gl=new WeakMap,Zs=new WeakMap,yS=e=>{const t=gl.get(e.target);t&&t(e)},xS=e=>{e.forEach(yS)};function wS({root:e,...t}){const n=e||document;Zs.has(n)||Zs.set(n,{});const r=Zs.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(xS,{root:e,...t})),r[i]}function kS(e,t,n){const r=wS(t);return gl.set(e,n),r.observe(e),()=>{gl.delete(e),r.unobserve(e)}}const SS={some:0,all:1};class bS extends tn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:SS[i]},l=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:h}=this.node.getProps(),f=u?d:h;f&&f(c)};return kS(this.node.current,s,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(jS(t,n))&&this.startObserver()}unmount(){}}function jS({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const TS={inView:{Feature:bS},tap:{Feature:vS},focus:{Feature:gS},hover:{Feature:mS}},ES={layout:{ProjectionNode:Fg,MeasureLayout:t0}},_S={...Xk,...TS,...pS,...ES},de=Yk(_S,Kk);function rt(){!Hc.current&&gg();const[e]=w.useState(Vo.current);return e}/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),CS=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),Nh=e=>{const t=CS(e);return t.charAt(0).toUpperCase()+t.slice(1)},n0=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim(),PS=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var NS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=w.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:s,...l},c)=>w.createElement("svg",{ref:c,...NS,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:n0("lucide",i),...!o&&!PS(l)&&{"aria-hidden":"true"},...l},[...s.map(([u,d])=>w.createElement(u,d)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=(e,t)=>{const n=w.forwardRef(({className:r,...i},o)=>w.createElement(AS,{ref:o,iconNode:t,className:n0(`lucide-${DS(Nh(e))}`,`lucide-${e}`,r),...i}));return n.displayName=Nh(e),n};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],r0=W("arrow-left",LS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Gt=W("arrow-right",MS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],RS=W("arrow-up-right",zS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],VS=W("calendar-days",IS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],i0=W("chevron-down",US);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],FS=W("chevron-up",OS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],HS=W("circle-check-big",WS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=[["path",{d:"M12 6v6h4",key:"135r8i"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],$S=W("clock-3",BS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],KS=W("code",YS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],vl=W("external-link",GS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],QS=W("facebook",qS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],o0=W("instagram",XS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],ZS=W("linkedin",JS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],s0=W("mail",eb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],nb=W("map-pin",tb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],ib=W("menu",rb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],a0=W("mic",ob);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]],ab=W("music-2",sb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],cb=W("panels-top-left",lb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]],db=W("ticket",ub);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],l0=W("twitter",hb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]],pb=W("users-round",fb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],yl=W("users",mb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],vb=W("x",gb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],xb=W("youtube",yb),Xc="/assets/logo_red-Cuc5EyMY.png",c0="tedxwushs-language",ea="ja",u0=new Set(["ja","en"]),wb={ja:{description:"TEDxWUSHS Youthは、早稲田大学高等学院の生徒が独立して企画・運営する、日本語と英語のバイリンガルTEDxイベントです。Ideas change everything.",locale:"ja_JP"},en:{description:"TEDxWUSHS Youth is an independently organized, bilingual Japanese-English TEDx event led by students of Waseda University Senior High School. Ideas change everything.",locale:"en_US"}},d0=w.createContext(void 0),kb=()=>{if(typeof window>"u")return ea;try{const e=window.localStorage.getItem(c0);return u0.has(e)?e:ea}catch{return ea}},Yi=(e,t)=>{const n=document.querySelector(e);n&&n.setAttribute("content",t)},Sb=({children:e})=>{const[t,n]=w.useState(kb),r=w.useCallback(o=>{u0.has(o)&&n(o)},[]);w.useEffect(()=>{document.documentElement.lang=t;try{window.localStorage.setItem(c0,t)}catch{}const o=wb[t];Yi('meta[name="description"]',o.description),Yi('meta[property="og:description"]',o.description),Yi('meta[property="og:locale"]',o.locale),Yi('meta[property="twitter:description"]',o.description)},[t]);const i=w.useMemo(()=>({language:t,setLanguage:r}),[t,r]);return a.jsx(d0.Provider,{value:i,children:e})},ne=()=>{const e=w.useContext(d0);if(!e)throw new Error("useLanguage must be used within a LanguageProvider.");return e},bb={ja:{group:"表示言語",ja:"日本語で表示",en:"英語で表示"},en:{group:"Display language",ja:"Show in Japanese",en:"Show in English"}},jb=()=>{const{language:e,setLanguage:t}=ne(),n=bb[e],r=()=>t(e==="ja"?"en":"ja"),i=e==="ja"?"現在は日本語です。英語に切り替える":"Currently displayed in English. Switch to Japanese";return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"language-switcher language-switcher--desktop",role:"group","aria-label":n.group,children:[a.jsx("button",{type:"button",className:`language-option ${e==="ja"?"active":""}`,"aria-label":n.ja,"aria-pressed":e==="ja",onClick:()=>t("ja"),children:"JA"}),a.jsx("span",{className:"language-divider","aria-hidden":"true",children:"/"}),a.jsx("button",{type:"button",className:`language-option ${e==="en"?"active":""}`,"aria-label":n.en,"aria-pressed":e==="en",onClick:()=>t("en"),children:"EN"})]}),a.jsxs("button",{type:"button",className:"language-toggle-mobile","aria-label":i,onClick:r,children:[a.jsx("span",{className:`language-toggle-code ${e==="ja"?"active":""}`,"aria-hidden":"true",children:"JA"}),a.jsx("span",{className:"language-toggle-divider","aria-hidden":"true",children:"/"}),a.jsx("span",{className:`language-toggle-code ${e==="en"?"active":""}`,"aria-hidden":"true",children:"EN"})]}),a.jsx("style",{children:`
        .language-switcher {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          height: var(--header-control-size, 46px);
          gap: 0.28rem;
          padding: 0 0.3rem;
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.42);
          color: var(--ted-white);
          line-height: 1;
        }

        .language-option {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 2.75rem;
          height: calc(var(--header-control-size, 46px) - 2px);
          min-height: calc(var(--header-control-size, 46px) - 2px);
          padding: 0;
          color: inherit;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          opacity: 0.48;
          transition: color 0.2s ease, opacity 0.2s ease;
        }

        .language-option:hover,
        .language-option.active {
          color: var(--ted-red);
          opacity: 1;
        }

        .language-option:focus-visible {
          outline: 2px solid var(--ted-white);
          outline-offset: 3px;
          border-radius: 2px;
        }

        .language-divider {
          display: inline-flex;
          align-items: center;
          align-self: stretch;
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.7rem;
          user-select: none;
        }

        .language-toggle-mobile {
          display: none;
        }

        @media (max-width: 900px) {
          .language-switcher--desktop {
            display: none;
          }

          .language-toggle-mobile {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            width: 4.25rem;
            min-width: 4.25rem;
            height: var(--header-control-size, 44px);
            gap: 0.2rem;
            padding: 0 0.45rem;
            border: 1px solid rgba(255, 255, 255, 0.25);
            border-radius: 999px;
            background: rgba(0, 0, 0, 0.42);
            color: var(--ted-white);
            line-height: 1;
          }

          .language-toggle-code {
            font-size: 0.65rem;
            font-weight: 800;
            letter-spacing: 0.04em;
            opacity: 0.5;
            transition: color 0.2s ease, opacity 0.2s ease;
          }

          .language-toggle-code.active {
            color: var(--ted-red);
            opacity: 1;
          }

          .language-toggle-divider {
            color: rgba(255, 255, 255, 0.45);
            font-size: 0.62rem;
          }

          .language-toggle-mobile:focus-visible {
            outline: 2px solid var(--ted-white);
            outline-offset: 3px;
          }
        }

        @media (max-width: 360px) {
          .language-toggle-mobile {
            width: 4rem;
            min-width: 4rem;
            gap: 0.15rem;
            padding-right: 0.35rem;
            padding-left: 0.35rem;
          }
        }
      `})]})},Tb=()=>{const[e,t]=w.useState(!1),[n,r]=w.useState(!1),i=en(),{language:o}=ne(),s=rt(),l=w.useRef(null),c=w.useRef(null),u=w.useRef(null),d=w.useRef(null),h=w.useRef(!1),f=w.useRef(!1),v=w.useRef(i.pathname),y=w.useRef(!1);v.current=i.pathname,w.useEffect(()=>{const p=()=>{y.current||t(window.scrollY>50)};return window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)},[]);const x=[{name:"Home",href:"/"},{name:"Event Archives",href:"/archives"},{name:"Speakers",href:"/speakers"},{name:"Team",href:"/team"},{name:"About",href:"/about"},{name:"Acknowledgements",href:"/acknowledgements"},{name:"FAQ",href:"/faq"}],S=p=>p==="/"?i.pathname==="/":i.pathname===p||i.pathname.startsWith(`${p}/`);w.useEffect(()=>{h.current=!1,r(!1)},[i.pathname]),w.useEffect(()=>{var p,k;if(n){const b=window.requestAnimationFrame(()=>{var T;(T=d.current)==null||T.focus({preventScroll:!0})});return()=>window.cancelAnimationFrame(b)}f.current?(f.current=!1,(p=c.current??l.current)==null||p.focus()):h.current&&(h.current=!1,(k=u.current)==null||k.focus())},[n]),w.useEffect(()=>{if(!n)return;const p=document.body,k=document.documentElement,b=i.pathname,T=window.scrollY,E={position:p.style.position,top:p.style.top,left:p.style.left,width:p.style.width,overflow:p.style.overflow},j=k.style.overflow;return y.current=!0,k.style.overflow="hidden",p.style.position="fixed",p.style.top=`-${T}px`,p.style.left="0",p.style.width="100%",p.style.overflow="hidden",()=>{k.style.overflow=j,p.style.position=E.position,p.style.top=E.top,p.style.left=E.left,p.style.width=E.width,p.style.overflow=E.overflow,y.current=!1,v.current===b?(window.scrollTo({top:T,left:0,behavior:"auto"}),t(T>50)):(window.scrollTo({top:0,left:0,behavior:"auto"}),t(!1))}},[n,i.pathname]),w.useEffect(()=>{const p=window.matchMedia("(min-width: 1101px)"),k=b=>{if(!b.matches||!n)return;const T=document.getElementById("mobile-navigation"),E=document.activeElement;f.current=(T==null?void 0:T.contains(E))||u.current===E,h.current=!1,r(!1)};return k(p),typeof p.addEventListener=="function"?(p.addEventListener("change",k),()=>p.removeEventListener("change",k)):(p.addListener(k),()=>p.removeListener(k))},[n]),w.useEffect(()=>{if(!n)return;const p=k=>{k.key==="Escape"&&(h.current=!0,r(!1))};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[n]);const g=()=>{n&&(h.current=!0),r(p=>!p)},m=p=>{h.current=i.pathname===p,r(!1)};return a.jsxs(a.Fragment,{children:[a.jsx("a",{href:"#main-content",className:"skip-link",children:o==="ja"?"本文へ移動":"Skip to main content"}),a.jsxs("header",{className:`header ${e?"scrolled":""}`,children:[a.jsxs("div",{className:"container header-content",children:[a.jsx(Y,{ref:l,to:"/",className:"logo-container",children:a.jsx("img",{src:Xc,alt:"TEDxWUSHS Youth",className:"header-logo"})}),a.jsxs("div",{className:"header-actions",children:[a.jsx("nav",{className:"desktop-nav","aria-label":o==="ja"?"メインナビゲーション":"Primary navigation",children:a.jsx("ul",{lang:"en",children:x.map(p=>a.jsx("li",{children:a.jsx(Y,{to:p.href,ref:S(p.href)?c:void 0,className:S(p.href)?"active":"","aria-current":i.pathname===p.href?"page":void 0,children:p.name})},p.name))})}),a.jsx("button",{type:"button",ref:u,className:"mobile-menu-btn","aria-label":n?o==="ja"?"メニューを閉じる":"Close menu":o==="ja"?"メニューを開く":"Open menu","aria-expanded":n,"aria-controls":"mobile-navigation",onClick:g,children:n?a.jsx(vb,{size:28,"aria-hidden":"true"}):a.jsx(ib,{size:28,"aria-hidden":"true"})}),a.jsx(jb,{})]})]}),a.jsx(Hg,{children:n&&a.jsx(de.nav,{id:"mobile-navigation",className:"mobile-menu","aria-label":o==="ja"?"モバイルナビゲーション":"Mobile navigation",initial:s?!1:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:s?{opacity:1,y:0}:{opacity:0,y:-20},transition:s?{duration:0}:{duration:.2},children:a.jsx("ul",{lang:"en",children:x.map((p,k)=>a.jsx("li",{children:a.jsx(Y,{to:p.href,ref:k===0?d:void 0,onClick:()=>m(p.href),className:S(p.href)?"active-mobile":"","aria-current":i.pathname===p.href?"page":void 0,children:p.name})},p.name))})})}),a.jsx("style",{children:`
        .skip-link {
          position: fixed;
          top: 0.5rem;
          left: 0.5rem;
          z-index: 2000;
          display: inline-flex;
          align-items: center;
          min-height: 44px;
          padding: 0.65rem 1rem;
          border: 2px solid var(--ted-white);
          border-radius: 4px;
          background: var(--ted-red);
          color: var(--ted-white);
          font-weight: 700;
          transform: translateY(calc(-100% - 1rem));
        }

        .skip-link:focus {
          outline: 2px solid var(--ted-white);
          outline-offset: 2px;
          transform: translateY(0);
        }

        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          max-width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          overflow: visible;
          transition: var(--transition-smooth);
          will-change: background, padding;
        }

        .header.scrolled {
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(10px);
          padding: 1rem 0;
          border-bottom: 1px solid rgb(var(--ted-red-rgb) / 0.2);
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.75rem;
          min-width: 0;
        }

        .header-logo {
          display: block;
          max-width: 100%;
          height: 35px;
          object-fit: contain;
        }

        .logo-container {
          display: inline-flex;
          align-items: center;
          min-height: 44px;
          max-width: 100%;
          flex-shrink: 0;
        }

        .header-actions {
          --header-control-size: 46px;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex: 0 0 auto;
          min-width: 0;
        }

        .desktop-nav ul {
          display: flex;
          gap: clamp(1.25rem, 2.4vw, 2.5rem);
        }

        .desktop-nav a {
          white-space: nowrap;
          font-weight: 600;
          font-size: 0.9rem;
          text-transform: uppercase;
          opacity: 0.7;
        }

        .desktop-nav a:hover, .desktop-nav a.active {
          color: var(--ted-red);
          opacity: 1;
        }

        .mobile-menu-btn {
          display: none;
          align-items: center;
          justify-content: center;
          width: var(--header-control-size);
          min-width: var(--header-control-size);
          height: var(--header-control-size);
          padding: 0;
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.42);
          color: var(--ted-white);
          line-height: 0;
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }

        .mobile-menu-btn svg {
          display: block;
        }

        .mobile-menu-btn:focus-visible {
          outline: 2px solid var(--ted-white);
          outline-offset: 4px;
          border-radius: 999px;
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          max-width: 100%;
          background: var(--ted-black);
          max-height: calc(100vh - 92px);
          max-height: calc(100svh - 92px);
          max-height: calc(100dvh - 92px);
          padding: 1rem 2rem max(2rem, calc(1rem + env(safe-area-inset-bottom)));
          border-bottom: 1px solid var(--ted-red);
          overflow-x: hidden;
          overflow-y: auto;
          overscroll-behavior-y: contain;
          -webkit-overflow-scrolling: touch;
          touch-action: pan-y;
        }

        .mobile-menu ul {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: center;
        }

        .mobile-menu li {
          width: min(100%, 28rem);
        }

        .mobile-menu a {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 0.65rem 1rem;
          font-size: 1.2rem;
          font-weight: 700;
          text-transform: uppercase;
          opacity: 0.7;
        }

        .mobile-menu a.active-mobile {
          color: var(--ted-red);
          opacity: 1;
        }

        @media (max-width: 1100px) {
          .desktop-nav {
            display: none;
          }
          .mobile-menu-btn {
            display: flex;
          }
          .header-content {
            gap: 0.5rem;
          }
          .logo-container {
            flex: 1 1 auto;
            min-width: 0;
          }
          .header-actions {
            --header-control-size: 44px;
            gap: 0.5rem;
          }
          .header-logo {
            width: clamp(105px, 34vw, 180px);
            max-width: 100%;
            height: auto;
          }
          .mobile-menu {
            padding-right: max(1.25rem, env(safe-area-inset-right));
            padding-left: max(1.25rem, env(safe-area-inset-left));
          }
        }

        @media (max-width: 360px) {
          .header-content,
          .header-actions {
            gap: 0.375rem;
          }
        }

        @media (min-width: 1101px) {
          .mobile-menu {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .skip-link,
          .header,
          .desktop-nav a,
          .mobile-menu a {
            scroll-behavior: auto;
            transition-duration: 0.01ms !important;
          }
        }
      `})]})]})},Eb=()=>{const e=new Date().getFullYear();return a.jsxs("footer",{id:"footer",className:"footer",lang:"en",children:[a.jsxs("div",{className:"container footer-content",children:[a.jsxs("div",{className:"footer-top",children:[a.jsxs("div",{className:"footer-brand",children:[a.jsx(Y,{className:"footer-brand-link",to:"/",children:a.jsx("img",{src:Xc,alt:"TEDxWUSHS Youth",className:"footer-logo"})}),a.jsx("p",{className:"footer-tagline",children:"This independent TEDx event is operated under license from TED."})]}),a.jsxs("nav",{className:"footer-links","aria-labelledby":"footer-quick-links-heading",children:[a.jsx("h4",{id:"footer-quick-links-heading",children:"Quick Links"}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx(Y,{to:"/archives",children:"Event Archives"})}),a.jsx("li",{children:a.jsx(Y,{to:"/speakers",children:"Speakers"})}),a.jsx("li",{children:a.jsx(Y,{to:"/team",children:"Team"})}),a.jsx("li",{children:a.jsx(Y,{to:"/about",children:"About Us"})}),a.jsx("li",{children:a.jsx(Y,{to:"/join-us",children:"Join Us"})}),a.jsx("li",{children:a.jsx("a",{href:"https://www.waseda.jp/school/shs/",target:"_blank",rel:"noopener noreferrer",children:"Waseda SHS"})}),a.jsx("li",{children:a.jsx("a",{href:"https://www.ted.com/about/programs-initiatives/tedx-program",target:"_blank",rel:"noopener noreferrer",children:"TEDx Program"})})]})]}),a.jsxs("div",{className:"footer-social",children:[a.jsx("h4",{children:"Connect"}),a.jsxs("div",{className:"social-icons",children:[a.jsx("a",{href:"https://www.instagram.com/tedxwushs/",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:a.jsx(o0,{size:24,"aria-hidden":"true"})}),a.jsx("a",{href:"https://x.com/TEDxWUSHS",target:"_blank",rel:"noopener noreferrer","aria-label":"X (Twitter)",children:a.jsx(l0,{size:24,"aria-hidden":"true"})}),a.jsx("a",{href:"https://note.com/tedx_wushs_youth",target:"_blank",rel:"noopener noreferrer","aria-label":"TEDxWUSHS Youth on note",title:"note",children:a.jsx("span",{className:"note-wordmark","aria-hidden":"true",children:"note"})}),a.jsx("a",{href:"https://www.youtube.com/@TEDxWUSHSYouth",target:"_blank",rel:"noopener noreferrer","aria-label":"TEDxWUSHS Youth on YouTube",children:a.jsx(xb,{size:24,"aria-hidden":"true"})}),a.jsx("a",{href:"mailto:tedxwushs@gmail.com","aria-label":"Email",children:a.jsx(s0,{size:24,"aria-hidden":"true"})})]}),a.jsx("p",{className:"footer-handle",children:"@TEDxWUSHS"}),a.jsxs("div",{className:"footer-contact",children:[a.jsx("p",{className:"footer-contact-label",children:"Contact"}),a.jsx("a",{className:"footer-email",href:"mailto:tedxwushs@gmail.com",children:"tedxwushs@gmail.com"}),a.jsx("p",{className:"footer-contact-note",lang:"ja",children:"イベントに関するご質問・お問い合わせ"})]})]})]}),a.jsx("div",{className:"footer-bottom",children:a.jsxs("p",{children:["© ",e," TEDxWUSHS Youth. All Rights Reserved."]})})]}),a.jsx("style",{children:`
        .footer {
          background-color: var(--ted-black);
          padding: 5rem 0 3rem;
          border-top: 1px solid var(--ted-dark-gray);
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .footer-top {
          display: grid;
          grid-template-columns: minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1.5fr);
          gap: 4rem;
        }

        .footer-brand,
        .footer-links,
        .footer-social {
          min-width: 0;
        }

        .footer-brand-link {
          display: inline-flex;
          max-width: 100%;
          margin-bottom: 1.5rem;
          border-radius: 2px;
        }

        .footer-logo {
          display: block;
          width: min(375px, 100%);
          max-width: 100%;
          height: auto;
        }

        .footer-tagline {
          color: #aaa;
          font-size: 0.9rem;
          max-width: 300px;
        }

        .footer-links h4, .footer-social h4 {
          margin-bottom: 2rem;
          font-size: 1rem;
          color: var(--ted-red);
        }

        .footer-links ul {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-links a {
          display: inline-block;
          color: #aaa;
          font-size: 0.95rem;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .footer-links a:hover {
          color: var(--ted-white);
          transform: translateX(5px);
        }

        .social-icons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .social-icons a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          min-width: 44px;
          height: 44px;
          color: var(--ted-white);
          border-radius: 4px;
          transition: var(--transition-smooth);
        }

        .note-wordmark {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1;
          text-transform: lowercase;
        }

        .social-icons a:hover {
          color: var(--ted-red);
          transform: translateY(-3px);
        }

        .footer-handle {
          font-weight: 700;
          color: var(--ted-red);
          letter-spacing: 0.1em;
        }

        .footer-email {
          display: inline-block;
          max-width: 100%;
          color: #aaa;
          font-size: 0.9rem;
          overflow-wrap: anywhere;
        }

        .footer-contact {
          margin-top: 1.25rem;
        }

        .footer-contact-label {
          margin-bottom: 0.35rem;
          color: var(--ted-white);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .footer-contact-note {
          max-width: 26rem;
          margin-top: 0.45rem;
          color: #888;
          font-size: 0.78rem;
          line-height: 1.6;
        }

        .footer-email:hover {
          color: var(--ted-white);
        }

        .footer-bottom {
          padding-top: 3rem;
          border-top: 1px solid var(--ted-dark-gray);
          text-align: center;
          color: #aaa;
          font-size: 0.85rem;
        }

        .footer-brand-link:focus-visible,
        .footer-links a:focus-visible,
        .social-icons a:focus-visible,
        .footer-email:focus-visible {
          outline: 3px solid var(--ted-white);
          outline-offset: 4px;
        }

        @media (max-width: 900px) {
          .footer-top {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }
          .footer-brand, .footer-social {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .footer-contact-note {
            margin-right: auto;
            margin-left: auto;
          }
          .footer-links ul {
            align-items: center;
          }
          .footer-tagline {
            margin: 0 auto;
          }
          .social-icons {
            justify-content: center;
          }
        }

        @media (max-width: 400px) {
          .footer {
            padding: 3.5rem 0 2rem;
          }

          .footer-content {
            gap: 3rem;
          }

          .footer-top {
            gap: 2.5rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-links a,
          .social-icons a {
            transition: none;
          }

          .footer-links a:hover,
          .social-icons a:hover {
            transform: none;
          }
        }
      `})]})},h0="/assets/poster-DnR2-vAa.png",_b={ja:{description:"早稲田大学高等学院の生徒が独立して企画・運営するTEDxイベント。アイデアは世界を変える。その可能性を高等学院から。",deadlineLabel:"2026年のイベントは終了しました",deadlineDate:"ご参加・ご協力ありがとうございました",eventLabel:"開催情報",date:"2026年10月31日（土）",reception:"開場 13:30",venue:"早稲田大学高等学院 講堂",audience:"高等学院・中学部の生徒及びその保護者、高等学院OB",posterAlt:"TEDxWUSHS Youth「Ideas change everything.」イベントポスター",programAction:"イベントアーカイブ"},en:{description:"TEDxWUSHS Youth is an independently organized TEDx event led by students at Waseda University Senior High School. From our school, we explore the power of ideas to change everything.",deadlineLabel:"Our 2026 event has concluded",deadlineDate:"Thank you for joining and supporting us",eventLabel:"Program details",date:"Saturday, October 31, 2026",reception:"Doors open 1:30 PM",venue:"Waseda University Senior High School Auditorium",audience:"Senior High School and Junior High School students, their parents or guardians, and alumni",posterAlt:"TEDxWUSHS Youth event poster: Ideas change everything.",programAction:"Event Archives"}},Db=()=>{const{language:e}=ne(),t=rt(),n=_b[e];return a.jsxs("section",{className:"hero",children:[a.jsxs("div",{className:"container hero-container",children:[a.jsxs(de.div,{className:"hero-content",initial:t?!1:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:t?0:.8},children:[a.jsxs(Y,{className:"hero-deadline-notice",to:"/archives/2026/main-event",children:[a.jsxs("span",{className:"hero-deadline-copy",children:[a.jsx("span",{children:n.deadlineLabel}),a.jsx("strong",{children:n.deadlineDate})]}),a.jsx(RS,{size:20,"aria-hidden":"true"})]}),a.jsxs(de.span,{className:"hero-tagline",lang:"en",initial:t?!1:{opacity:0},animate:{opacity:1},transition:t?{duration:0}:{delay:.5},children:[a.jsx("span",{className:"brand-name",children:"TEDxWUSHS Youth"})," · Waseda University Senior High School"]}),a.jsxs("h1",{className:"hero-title",lang:"en",children:["Ideas change ",a.jsx("br",{})," ",a.jsx("span",{className:"highlight-red",children:"everything."})]}),a.jsx("p",{className:"hero-description",children:n.description}),a.jsxs("div",{className:"hero-event-details",role:"group","aria-label":n.eventLabel,children:[a.jsxs("div",{className:"hero-event-detail",children:[a.jsx(VS,{size:22,"aria-hidden":"true"}),a.jsxs("div",{children:[a.jsx("span",{lang:"en",children:"Date"}),a.jsx("time",{dateTime:"2026-10-31",children:a.jsx("strong",{children:n.date})})]})]}),a.jsxs("div",{className:"hero-event-detail",children:[a.jsx($S,{size:22,"aria-hidden":"true"}),a.jsxs("div",{children:[a.jsx("span",{lang:"en",children:"Time"}),a.jsx("strong",{children:"14:00～18:00"}),a.jsx("small",{children:n.reception})]})]}),a.jsxs("div",{className:"hero-event-detail",children:[a.jsx(nb,{size:22,"aria-hidden":"true"}),a.jsxs("div",{children:[a.jsx("span",{lang:"en",children:"Venue"}),a.jsx("strong",{children:n.venue})]})]}),a.jsxs("div",{className:"hero-event-detail",children:[a.jsx(pb,{size:22,"aria-hidden":"true"}),a.jsxs("div",{children:[a.jsx("span",{lang:"en",children:"Audience"}),a.jsx("strong",{children:n.audience})]})]})]}),a.jsx("div",{className:"hero-cta",children:a.jsx(Y,{to:"/archives",className:"btn btn-primary",children:n.programAction})})]}),a.jsx(de.div,{className:"hero-visual",initial:t?!1:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:t?0:1,ease:"easeOut"},children:a.jsxs("div",{className:"poster-container",children:[a.jsx("img",{src:h0,alt:n.posterAlt,className:"hero-poster"}),a.jsx("div",{className:"poster-glow","aria-hidden":"true"})]})})]}),a.jsx("style",{children:`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          overflow-x: hidden;
          background: radial-gradient(circle at 10% 20%, rgb(var(--ted-red-rgb) / 0.05) 0%, transparent 50%);
        }

        @supports (overflow-x: clip) {
          .hero {
            overflow-x: clip;
          }
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-tagline {
          color: var(--ted-red);
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-size: 0.8rem;
          margin-bottom: 1rem;
          display: block;
        }

        .hero-deadline-notice {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          max-width: 580px;
          min-height: 52px;
          margin-bottom: 1.25rem;
          padding: 0.8rem 1rem;
          border: 1px solid rgb(var(--ted-red-rgb) / 0.5);
          border-left: 4px solid var(--ted-red);
          background: rgb(var(--ted-red-rgb) / 0.12);
          color: var(--ted-white);
          transition: var(--transition-smooth);
        }

        .hero-deadline-notice:hover {
          background: rgb(var(--ted-red-rgb) / 0.2);
          border-color: var(--ted-red);
        }

        .hero-deadline-notice:focus-visible {
          outline: 3px solid var(--ted-white);
          outline-offset: 3px;
        }

        .hero-deadline-copy {
          display: grid;
          gap: 0.15rem;
          min-width: 0;
        }

        .hero-deadline-copy span {
          color: #ddd;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .hero-deadline-copy strong {
          color: var(--ted-white);
          font-size: 1rem;
          line-height: 1.35;
        }

        .hero-deadline-notice > svg {
          flex: 0 0 auto;
          color: var(--ted-red);
        }

        .hero-title {
          font-size: 5rem;
          line-height: 1.1;
          margin-bottom: 2rem;
          text-transform: none;
        }

        .hero-description {
          font-size: 1.1rem;
          color: #aaa;
          max-width: 500px;
          margin-bottom: 2rem;
        }

        .hero-event-details {
          display: grid;
          gap: 0.75rem;
          max-width: 580px;
          margin-bottom: 2.5rem;
        }

        .hero-event-detail {
          display: grid;
          grid-template-columns: 28px 1fr;
          gap: 0.9rem;
          align-items: center;
          padding: 0.9rem 1rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-left: 3px solid var(--ted-red);
          background: var(--ted-black);
          text-align: left;
        }

        .hero-event-detail > svg {
          color: var(--ted-red);
        }

        .hero-event-detail div {
          display: flex;
          flex-wrap: wrap;
          gap: 0.25rem 0.75rem;
          align-items: baseline;
          min-width: 0;
        }

        .hero-event-detail span {
          min-width: 50px;
          color: var(--ted-red);
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .hero-event-detail strong {
          color: white;
          font-size: 1rem;
          overflow-wrap: anywhere;
        }

        .hero-event-detail small {
          color: #999;
          font-size: 0.8rem;
        }

        .hero-cta {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 1rem 2.5rem;
          border-radius: 4px;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.9rem;
          transition: var(--transition-smooth);
        }

        .btn-primary {
          background-color: var(--ted-red);
          color: var(--ted-white);
        }

        .btn-primary:hover {
          background-color: var(--ted-red);
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgb(var(--ted-red-rgb) / 0.3);
        }

        .btn-outline {
          border: 2px solid var(--ted-white);
          color: var(--ted-white);
        }

        .btn-outline:hover {
          background: var(--ted-white);
          color: var(--ted-black);
          transform: translateY(-5px);
        }

        .poster-container {
          position: relative;
        }

        .hero-poster {
          display: block;
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
          position: relative;
          z-index: 2;
          will-change: transform;
        }

        .poster-glow {
          position: absolute;
          top: -20%;
          left: -20%;
          width: 140%;
          height: 140%;
          background: radial-gradient(circle, rgb(var(--ted-red-rgb) / 0.4) 0%, rgb(var(--ted-red-rgb) / 0) 70%);
          opacity: 0.6;
          z-index: 1;
          will-change: transform;
        }

        @media (max-width: 1024px) {
          .hero-title {
            font-size: 3.5rem;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding-bottom: 60px;
          }
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-title {
            font-size: 3rem;
          }
          .hero-description {
            margin: 0 auto 2rem;
          }
          .hero-event-details {
            margin: 0 auto 2.5rem;
          }
          .hero-cta {
            justify-content: center;
          }
          .hero-visual {
            order: -1;
            max-width: 400px;
            margin: 0 auto;
          }
        }

        @media (max-width: 400px) {
          .hero-container {
            gap: 2.5rem;
          }

          .hero-title {
            font-size: clamp(2.5rem, 14vw, 3rem);
          }

          .hero-event-detail {
            grid-template-columns: 24px minmax(0, 1fr);
            gap: 0.65rem;
            padding-right: 0.75rem;
            padding-left: 0.75rem;
          }

          .hero-cta {
            gap: 1rem;
          }

          .btn {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .btn { transition: none; }
          .btn:hover { transform: none; }
        }
      `})]})},xl="/assets/gakuinsai-BWIVjSAN.png",Cb=[{id:"all-speaker-talk-details-published",publishedAt:"2026-10-27",category:"Speakers",href:"/speakers",copy:{ja:{title:"全スピーカーのトーク紹介を公開しました",summary:"TEDxWUSHS Youth 2026に登壇する全7名について、トーク題名、使用言語、トーク紹介を公開しました。",action:"トーク紹介を見る"},en:{title:"Talk details published for all speakers",summary:"Talk titles, presentation languages, and talk introductions are now available for all seven TEDxWUSHS Youth 2026 speakers.",action:"View talk details"}}},{id:"youtube-live-stream-announced",publishedAt:"2026-10-26",category:"Live",href:"https://www.youtube.com/live/gkV3lfWCSIE",external:!0,copy:{ja:{title:"ライブ配信のリンクができました",summary:"10月31日（土）開催のTEDxWUSHS Youth 2026をYouTubeでライブ配信します。会場外からもリアルタイムでご覧いただけます。",action:"ライブ配信ページを開く"},en:{title:"Live stream link now available",summary:"TEDxWUSHS Youth 2026 will be streamed live on YouTube on Saturday, October 31. You can watch the event live from outside the venue.",action:"Open the live stream"}}},{id:"audience-registration-deadline-extended",publishedAt:"2026-10-25",category:"Registration",featured:!0,href:"/join-us/audience",external:!0,copy:{ja:{title:"参加申込み締切を10月29日まで延長しました",summary:"TEDxWUSHS Youth 2026の参加申込み締切を、2026年10月29日（木）まで延長しました。参加をご希望の方は、申込フォームからお申し込みください。",action:"参加を申し込む"},en:{title:"Registration deadline extended to October 29",summary:"The audience registration deadline for TEDxWUSHS Youth 2026 has been extended to Thursday, October 29, 2026. Please apply using the registration form.",action:"Apply to attend"}}},{id:"alumni-added-to-audience-eligibility",publishedAt:"2026-10-24",category:"Registration",featured:!0,href:"/join-us/audience",external:!0,copy:{ja:{title:"OBも参加申込みの対象となりました",summary:"TEDxWUSHS Youth 2026の参加対象に、早稲田大学高等学院のOBを追加しました。高等学院・高等学院中学部の生徒及びその保護者に加え、OBの皆さまもお申し込みいただけます。",action:"参加を申し込む"},en:{title:"Audience eligibility now includes alumni",summary:"Alumni of Waseda University Senior High School are now eligible to attend TEDxWUSHS Youth 2026, alongside Senior High School and Junior High School students and their parents or guardians.",action:"Apply to attend"}}},{id:"audience-eligibility-expanded",publishedAt:"2026-10-18",category:"Registration",featured:!0,href:"/join-us/audience",external:!0,copy:{ja:{title:"中学部の生徒・保護者もお申し込みいただけます",summary:"TEDx WUSHS Youth 2026の参加対象は、高等学院の生徒およびその保護者に加え、高等学院中学部の生徒およびその保護者もお申し込みいただけます。以前までの文章は分かりにくい案内となっていましたことをお詫び申し上げます。",action:"参加を申し込む"},en:{title:"Audience eligibility has expanded",summary:"We apologize that our previous information did not clearly explain audience eligibility. Senior High School and Junior High School students, as well as their parents or guardians, may apply to attend TEDxWUSHS Youth 2026.",action:"Apply to attend"}}},{id:"school-fest-2026-feature",publishedAt:"2026-10-12",category:"Feature",href:"/school-fest-2026",copy:{ja:{title:"学院祭英語ディベート特集を公開",summary:"学院祭で実施した3校との英語ディベートを、対戦記録、TED/TEDxの理念、オーディエンスを取り込んだ今回の工夫とともに紹介します。",action:"特集記事を読む"},en:{title:"Gakuinsai English Debate feature",summary:"Explore our three interschool debates through the match records, the ideas behind TED and TEDx, and the audience-inclusive format we developed.",action:"Read the feature"}}},{id:"waseda-shs-official-announcement",publishedAt:"2026-10-09",category:"Announcement",href:"https://www.waseda.jp/school/shs/news/2026/10/09/11248/",external:!0,copy:{ja:{title:"高等学院公式サイトに開催案内が掲載されました",summary:"早稲田大学高等学院の公式サイトで、10月31日（土）開催のTEDxWUSHS Youth 2026「Breakshot」が紹介されました。",action:"高等学院の掲載記事を読む"},en:{title:"Event announcement published by Waseda University Senior High School",summary:"Waseda University Senior High School has published an official announcement for TEDxWUSHS Youth 2026 “Breakshot,” taking place on Saturday, October 31.",action:"Read the official announcement"}}},{id:"audience-registration-open",publishedAt:"2026-10-01",category:"Registration",href:"/join-us/audience",external:!0,copy:{ja:{title:"オーディエンス募集を開始しました",summary:"TEDxWUSHS Youth 2026のオーディエンス募集を開始しました。対象は早稲田大学高等学院の生徒及びその保護者と、高等学院中学部の生徒及びその保護者です。",action:"参加を申し込む"},en:{title:"Audience registration is now open",summary:"Audience registration for TEDxWUSHS Youth 2026 is open to Senior High School and Junior High School students, as well as their parents or guardians.",action:"Apply to attend"}}},{id:"gakuinsai-2026-program",publishedAt:"2026-09-30",category:"Event",href:xl,external:!0,image:xl,imageAlt:{ja:"TEDxWUSHS Youth学院祭企画「English Debate」のポスター",en:"Poster for the TEDxWUSHS Youth English Debate program at Gakuinsai 2026"},copy:{ja:{title:"学院祭で英語ディベート企画を実施します",summary:"10月10日（土）・11日（日）、学院祭のゼミ室2でTEDxWUSHS Youthの団体紹介を行います。頌栄女子学院高等学校・慶應義塾高等学校・早稲田大学本庄高等学院ESSと、社会奉仕・所得税・友情と恋愛を論題に英語で議論します。",action:"ポスターを拡大して見る"},en:{title:"English debates at Gakuinsai 2026",summary:"On October 10 and 11 in Seminar Room 2, we will introduce TEDxWUSHS Youth and hold philosophical English debates with Shoei Girls’ Senior High School, Keio Senior High School, and Waseda University Honjo Senior High School ESS on community service, income tax, and friendship versus romantic relationships.",action:"View the full poster"}}},{id:"official-note-launched",publishedAt:"2026-09-30",category:"note",href:"https://note.com/tedx_wushs_youth/n/n01e4f29a9fca",external:!0,copy:{ja:{title:"公式noteを更新しました",summary:"公式noteで「TEDxWUSHS Youth 公式note始めました！」を公開しました。今後、活動やイベントに関する情報を発信していきます。",action:"noteの記事を読む"},en:{title:"Official note updated",summary:"We published “TEDxWUSHS Youth 公式note始めました！” and will share more updates about our activities and the event.",action:"Read on note"}}},{id:"full-speaker-lineup-announced",publishedAt:"2026-09-29",category:"Speakers",href:"/speakers",copy:{ja:{title:"全登壇者のプロフィールを公開しました",summary:"TEDxWUSHS Youth 2026に登壇する全7名のスピーカー情報を公開しました。",action:"全登壇者を見る"},en:{title:"Full speaker lineup announced",summary:"Profiles for all seven TEDxWUSHS Youth 2026 speakers are now available.",action:"View the full lineup"}}},{id:"speaker-information-update",publishedAt:"2026-09-27",category:"Speakers",href:"/speakers",copy:{ja:{title:"スピーカー情報を更新しました",summary:"TEDxWUSHS Youth 2026に登壇するスピーカーのプロフィールと講演情報を更新しました。",action:"スピーカー情報を見る"},en:{title:"Speaker information updated",summary:"We have updated the profiles and talk information for the TEDxWUSHS Youth 2026 speakers.",action:"View speakers"}}}],Pb=[{id:"event-2026-concluded",publishedAt:"2026-11-02",category:"Event Archives",featured:!0,href:"/archives/2026/main-event",copy:{ja:{title:"TEDxWUSHS Youth 2026は終了しました",summary:"ご参加・ご協力ありがとうございました。メインイベント当日の報告は近日公開予定です。開催概要と当日のプログラムをアーカイブでご覧いただけます。",action:"イベントアーカイブを見る"},en:{title:"TEDxWUSHS Youth 2026 has concluded",summary:"Thank you for joining and supporting us. Our main event report is coming soon. Event details and the program are available in the archive.",action:"Explore the event archive"}}},...Cb.filter(e=>e.category!=="Registration"&&e.category!=="Live")],Ah={ja:{eyebrow:"Newsroom",titleLead:"Latest",titleAccent:"Updates",description:"TEDxWUSHS Youthの活動とイベントアーカイブに関する最新情報をお知らせします。",listLabel:"TEDxWUSHS Youthの更新情報",featured:"Featured",showMore:"もっと見る",showLess:"表示を戻す"},en:{eyebrow:"Newsroom",titleLead:"Latest",titleAccent:"Updates",description:"The latest announcements about TEDxWUSHS Youth and our event archives.",listLabel:"TEDxWUSHS Youth updates",featured:"Featured",showMore:"Show more",showLess:"Show fewer"}},Nb=e=>e.replaceAll("-","."),Lh=1,Ab=()=>{const[e,t]=w.useState(!1),{language:n}=ne(),r=rt(),i=Ah[n]??Ah.ja,o=[...Pb].sort((v,y)=>y.publishedAt.localeCompare(v.publishedAt)),s=o.filter(v=>v.featured),l=o.filter(v=>!v.featured),c=[...s,...l],u=[...s,...l.slice(0,Lh)],d=l.length>Lh,h=e?c:u,f=e?FS:i0;return a.jsxs("section",{className:"updates section-padding","aria-labelledby":"updates-heading",children:[a.jsxs("div",{className:"container",children:[a.jsxs(de.header,{className:"updates-header",initial:r?!1:{opacity:0,y:20},whileInView:r?void 0:{opacity:1,y:0},viewport:{once:!0},transition:{duration:r?0:.6},children:[a.jsxs("div",{children:[a.jsx("p",{className:"updates-eyebrow",lang:"en",children:i.eyebrow}),a.jsxs("h2",{id:"updates-heading",className:"updates-title",lang:"en",children:[i.titleLead," ",a.jsx("span",{className:"highlight-red",children:i.titleAccent})]})]}),a.jsx("p",{className:"updates-description",children:i.description})]}),a.jsx("ol",{id:"updates-list",className:"updates-list","aria-label":i.listLabel,children:h.map((v,y)=>{var b,T;const x=v.copy[n]??v.copy.ja,S=((b=v.imageAlt)==null?void 0:b[n])??((T=v.imageAlt)==null?void 0:T.ja)??"",g=v.external?"a":Y,m=v.external?{href:v.href,target:"_blank",rel:"noopener noreferrer"}:{to:v.href},p=v.external?vl:Gt,k=n==="en"?" (opens in a new tab)":"（新しいタブで開きます）";return a.jsx(de.li,{initial:r?!1:{opacity:0,y:16},whileInView:r?void 0:{opacity:1,y:0},viewport:{once:!0},transition:{duration:r?0:.5,delay:r?0:y*.08},children:a.jsxs(g,{className:`updates-item${v.featured?" updates-item--featured":""}${v.image?" updates-item--with-image":""}`,"aria-label":`${x.action}: ${x.title}${v.external?k:""}`,...m,children:[v.image&&a.jsx("span",{className:"updates-item-media",children:a.jsx("img",{src:v.image,alt:S,loading:"lazy",decoding:"async"})}),a.jsxs("div",{className:"updates-item-body",children:[a.jsxs("div",{className:"updates-meta",children:[v.featured&&a.jsx("span",{className:"updates-featured",lang:"en",children:i.featured}),a.jsx("time",{dateTime:v.publishedAt,lang:"en",children:Nb(v.publishedAt)}),a.jsx("span",{lang:"en",children:v.category})]}),a.jsx("h3",{children:x.title}),a.jsx("p",{children:x.summary}),a.jsx("span",{className:"updates-action",children:x.action})]}),a.jsx("span",{className:"updates-arrow","aria-hidden":"true",children:a.jsx(p,{size:22})})]})},v.id)})}),d&&a.jsx("div",{className:"updates-toggle-wrap",children:a.jsxs("button",{type:"button",className:"updates-toggle","aria-expanded":e,"aria-controls":"updates-list",onClick:()=>t(v=>!v),children:[a.jsx("span",{children:e?i.showLess:i.showMore}),a.jsx(f,{size:20,strokeWidth:2.5,"aria-hidden":"true"})]})})]}),a.jsx("style",{children:`
        .updates {
          background: var(--ted-black);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .updates-header {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(18rem, 32rem);
          align-items: end;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .updates-eyebrow {
          margin-bottom: 0.5rem;
          color: var(--ted-red);
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.16em;
        }

        .updates-title {
          font-size: clamp(2.35rem, 5vw, 4.5rem);
          line-height: 0.95;
        }

        .updates-description {
          color: #b8b8b8;
          font-size: 1rem;
          line-height: 1.8;
        }

        .updates-list {
          border-top: 1px solid rgba(255, 255, 255, 0.16);
        }

        .updates-list li {
          border-bottom: 1px solid rgba(255, 255, 255, 0.16);
        }

        .updates-item {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 3rem;
          align-items: center;
          gap: 2rem;
          padding: 2rem 1.25rem;
          color: var(--ted-white);
        }

        .updates-item:hover {
          background: rgba(255, 255, 255, 0.045);
        }

        .updates-item--featured {
          border-left: 3px solid var(--ted-red);
          background: rgb(var(--ted-red-rgb) / 0.07);
        }

        .updates-item--featured:hover {
          background: rgb(var(--ted-red-rgb) / 0.12);
        }

        .updates-item--with-image {
          grid-template-columns: 8.5rem minmax(0, 1fr) 3rem;
          align-items: start;
        }

        .updates-item-media {
          display: block;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          border-radius: 6px;
          outline: 1px solid rgba(255, 255, 255, 0.12);
          outline-offset: -1px;
          background: #111;
        }

        .updates-item-media img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .updates-item-body {
          min-width: 0;
        }

        .updates-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.75rem 1.25rem;
          margin-bottom: 0.75rem;
          color: #aaa;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.08em;
        }

        .updates-meta span {
          color: var(--ted-red);
        }

        .updates-featured {
          padding: 0.25rem 0.45rem;
          border: 1px solid rgb(var(--ted-red-rgb) / 0.7);
          border-radius: 3px;
          color: var(--ted-white) !important;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
        }

        .updates-item h3 {
          margin-bottom: 0.5rem;
          font-size: clamp(1.3rem, 2.2vw, 1.75rem);
          font-weight: 600;
          line-height: 1.25;
          text-transform: none;
        }

        .updates-item p {
          max-width: 52rem;
          color: #b8b8b8;
          font-size: 1rem;
          line-height: 1.7;
        }

        .updates-action {
          display: inline-block;
          margin-top: 0.9rem;
          color: var(--ted-white);
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: underline;
          text-decoration-color: var(--ted-red);
          text-decoration-thickness: 2px;
          text-underline-offset: 5px;
        }

        .updates-arrow {
          display: grid;
          width: 3rem;
          height: 3rem;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.35);
          border-radius: 50%;
          color: var(--ted-white);
          transition: border-color 0.25s ease, background-color 0.25s ease, color 0.25s ease;
        }

        .updates-item:hover .updates-arrow,
        .updates-item:focus-visible .updates-arrow {
          border-color: var(--ted-red);
          background: var(--ted-red);
        }

        .updates-toggle-wrap {
          display: flex;
          justify-content: center;
          padding-top: 2rem;
        }

        .updates-toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          min-width: 12rem;
          min-height: 48px;
          padding: 0.8rem 1.1rem;
          border: 1px solid rgba(255, 255, 255, 0.42);
          border-radius: 4px;
          background: transparent;
          color: var(--ted-white);
          font: inherit;
          font-weight: 700;
          cursor: pointer;
          user-select: none;
          transition: border-color 0.25s ease, background-color 0.25s ease;
        }

        .updates-toggle:hover {
          border-color: var(--ted-red);
          background: rgb(var(--ted-red-rgb) / 0.12);
        }

        .updates-toggle:focus-visible {
          outline: 3px solid var(--ted-white);
          outline-offset: 3px;
        }

        @media (max-width: 768px) {
          .updates-header {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            margin-bottom: 2.5rem;
          }

          .updates-title {
            font-size: clamp(2.25rem, 13vw, 3.5rem);
          }

          .updates-item {
            grid-template-columns: minmax(0, 1fr) 2.75rem;
            gap: 1rem;
            padding: 1.5rem 0.25rem;
          }

          .updates-item--featured {
            padding-left: 0.85rem;
          }

          .updates-item--with-image {
            grid-template-columns: minmax(0, 1fr) 2.75rem;
          }

          .updates-item-media {
            grid-column: 1 / -1;
            width: min(100%, 20rem);
          }

          .updates-arrow {
            width: 2.75rem;
            height: 2.75rem;
          }

          .updates-action {
            font-size: 1rem;
          }

          .updates-toggle {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .updates-arrow,
          .updates-toggle {
            transition: none;
          }
        }
      `})]})},Lb={ja:{programLink:"TEDxプログラムについて詳しく見る",descriptions:["TEDxWUSHS Youthは、早稲田大学高等学院の生徒が独立して企画・運営するTEDxイベントです。若者ならではの視点とパッションを武器に、高校生という枠を超えた、社会に響くメッセージを発信します。私たちは、対話を通じて互いの可能性を広げ、新しい一歩を踏み出すきっかけを作ります。","TEDxは、地域で自主的に運営されるイベントを通じて、人々がTEDのような体験を共有するためのプログラムです。TEDxWUSHS Youthでは、TED Talksの映像と7名のライブスピーカーによるトークを組み合わせ、対話とつながりを生み出します。","2026年のテーマは「Breakshot」。人生の軌道を変えた一打をテーマに、7名のスピーカーがそれぞれのアイデアを共有します。"],venue:"早稲田大学高等学院 講堂"},en:{programLink:"Learn more about the TEDx program",descriptions:["TEDxWUSHS Youth is an independently organized TEDx event conceived and produced by students at Waseda University Senior High School. Drawing on the perspectives and passion unique to young people, we share messages that reach beyond the boundaries of high school. Through dialogue, we aim to expand one another’s possibilities and inspire a first step toward change.","TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. TEDxWUSHS Youth combines TED Talks video with talks from seven live speakers to spark discussion and connection.","Our 2026 theme is “Breakshot.” Seven speakers will share the ideas and defining moments that changed the course of their lives."],venue:"Waseda University Senior High School Auditorium"}},Mb=()=>{const{language:e}=ne(),t=rt(),n=Lb[e];return a.jsxs("section",{id:"about",className:"about section-padding",children:[a.jsx("div",{className:"container",children:a.jsx("div",{className:"about-grid",children:a.jsxs(de.div,{className:"about-item about-item--combined",initial:t?!1:{opacity:0,y:30},whileInView:t?void 0:{opacity:1,y:0},viewport:{once:!0},transition:{duration:t?0:.6},children:[a.jsx("h2",{className:"about-logo-heading",children:a.jsx("img",{src:Xc,alt:"TEDxWUSHS Youth",className:"about-logo"})}),a.jsx("div",{className:"about-description",children:n.descriptions.map(r=>a.jsx("p",{children:r},r))}),a.jsxs("a",{href:"https://www.ted.com/about/programs-initiatives/tedx-program",target:"_blank",rel:"noopener noreferrer",className:"highlight-link program-link",children:[n.programLink," ↗"]}),a.jsxs("p",{className:"event-info",children:[a.jsx("strong",{lang:"en",children:"Date:"})," ",a.jsx("span",{lang:"en",children:"October 31, 2026 (14:00 - 18:00 / Doors open 13:30)"}),a.jsx("br",{}),a.jsx("strong",{lang:"en",children:"Venue:"})," ",a.jsx("a",{href:"https://www.waseda.jp/school/shs/",target:"_blank",rel:"noopener noreferrer",className:"highlight-link",children:n.venue}),", ",a.jsx("span",{lang:"en",children:"Nerima, Tokyo"})]})]})})}),a.jsx("style",{children:`
        .about {
          background-color: var(--ted-dark-gray);
          position: relative;
          overflow: hidden;
        }

        .about::before {
          content: 'IDEAS';
          position: absolute;
          top: -20px;
          right: -50px;
          font-size: 15rem;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.02);
          z-index: 0;
          pointer-events: none;
        }

        .about-grid {
          position: relative;
          z-index: 1;
        }

        .about-item--combined {
          max-width: 900px;
        }

        .about-logo-heading {
          margin: 0 0 2rem;
          line-height: 0;
        }

        .about-logo {
          display: block;
          width: min(100%, 420px);
          height: auto;
        }

        .about-item p {
          font-size: 1.1rem;
          color: #ccc;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .about-description p:last-child {
          margin-bottom: 0;
        }

        .about .highlight-link {
          color: var(--ted-red);
          font-size: 1.2rem;
          font-weight: 700;
          text-decoration: underline;
        }

        .program-link {
          display: inline-block;
          margin-top: 1rem;
          font-weight: 700;
        }

        .event-info {
          margin-top: 2rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-left: 4px solid var(--ted-red);
          border-radius: 4px;
        }

        .event-info strong {
          color: var(--ted-red);
          font-size: 1.2rem;
          text-transform: uppercase;
        }

        @media (max-width: 480px) {
          .event-info {
            padding: 1.25rem 1rem;
          }
        }
      `})]})},xi=()=>{const{language:e}=ne();return a.jsxs("aside",{className:"recruitment-notice","aria-label":e==="ja"?"来年度の募集について":"Next year’s recruitment",children:[a.jsx("p",{children:e==="ja"?"掲載しているスピーカー・チームは2026年のメンバーです。来年度（2027年）のスピーカーと運営チームメンバーの募集は、公式SNSで行います。":"The speakers and team shown here are the 2026 members. Recruitment for 2027 speakers and organizing team members will take place on our official social media channels."}),a.jsxs("div",{className:"recruitment-notice__links",children:[a.jsx("a",{href:"https://www.instagram.com/tedxwushs/",target:"_blank",rel:"noopener noreferrer",children:"Instagram ↗"}),a.jsx("a",{href:"https://x.com/TEDxWUSHS",target:"_blank",rel:"noopener noreferrer",children:"X ↗"})]})]})},zb="/assets/enomoto-takayuki-DNGDHC06.jpg",Rb="/assets/hasegawa-keisuke-DYSgj9AY.jpg",Ib="/assets/reon-hiruma-CtjqnzZU.jpg",Vb="/assets/horise-yoshito-BMWy-myU.jpg",Ub="/assets/kogure-masahisa-jgnY9mTV.jpg",Ob="/assets/kuroki-yuto-H_vlZVz7.jpg",Fb="/assets/takezawa-mamoru-CgZku-6Z.jpg",f0=e=>{const t=[];let n=0;for([2,2].forEach(r=>{n>=e.length||(t.push(e.slice(n,n+r)),n+=r)});n<e.length;)t.push(e.slice(n,n+3)),n+=3;return t},p0=[{id:"enomoto-takayuki",displayOrder:30,published:!0,featured:!0,image:zb,imagePosition:"50% 42%",name:{ja:"榎本 隆之",en:"Takayuki Enomoto"},role:{ja:"早稲田大学高等学院 国語科教員",en:"Japanese Language Educator, Waseda University Senior High School"},shortBio:{ja:"国語科指導、国際交流・芸術プログラムを通して、グローバルな文脈に造詣のある高校生の育成を目指している。",en:"A Japanese language educator with experience in textbook editing, international exchange initiatives, and comparative teacher education."},talk:{title:{ja:"The glasses we forgot we were wearing: How native language shapes our reality",en:"The glasses we forgot we were wearing: How native language shapes our reality"},language:{ja:"英語スピーチ",en:"Talk in English"},description:{ja:"日本語、英語、韓国語など、私たちが使う言語は、ものの見え方や人の振る舞い方、物語の読み取り方に影響を与えています。しかし、私たちはその影響を普段あまり意識していません。本トークでは、母語という「色メガネ」が私たちの現実の捉え方をどのように形づくっているのかを探ります。",en:"The languages we use—such as Japanese, English, and Korean—influence how we see things, how people behave, and how we interpret stories. Yet we rarely notice that influence in everyday life. This talk explores how the “glasses” of our native language shape the way we perceive reality."}},intro:{ja:["1964年生まれ。中高国語科教員。早稲田大学、コロラド州立大学などを経て、現在は早稲田大学高等学院所属。国語科指導をはじめ各種国際交流プログラムや芸術プログラムを通じて、グローバルな文脈に造詣のあるスーパー高校生を育成することを目指している。","高等学校国語科検定教科書の編集に長く携わり、教員養成の比較教育に関心がある。"],en:["An accomplished junior and senior high school Japanese language literacy educator with academic and professional backgrounds at Waseda University and Colorado State University. He currently serves on the faculty at Waseda University Senior High School.","He is dedicated to nurturing exceptional, globally minded high school students through comprehensive Japanese language instruction, international exchange initiatives, and music programs. He brings extensive experience in editing government-approved high school textbooks of Japanese language and literature, complemented by a strong research interest in comparative education in teacher education programs."]}},{id:"hasegawa-keisuke",displayOrder:70,published:!0,featured:!0,image:Rb,imagePosition:"50% 42%",name:{ja:"長谷川 慶佑",en:"Keisuke Hasegawa"},role:{ja:"早稲田大学高等学院 1年",en:"First-year Student, Waseda University Senior High School"},shortBio:{ja:"中学時代に「ビオトープ管理委員会」を立ち上げ、環境保全活動を牽引。環境・文芸の両分野で多数の受賞実績を持つ。",en:"Founder of a school Biotope Management Committee, with numerous awards in environmental conservation and literature."},talk:{title:{ja:"過去を未来へ活かす大切さ",en:"Turning the Past into the Future"},language:{ja:"日本語スピーチ",en:"Talk in Japanese"},description:{ja:"出身地である福島県で原発事故を経験し、日常生活が一変したスピーカーは、その経験を踏まえ、中学校でビオトープ活動に精力的に取り組みました。本トークでは、過去の経験を糧として行動を起こすことの大切さについて語ります。",en:"After experiencing the nuclear power plant accident in his home prefecture of Fukushima and seeing daily life change completely, the speaker drew on that experience to devote himself to biotope activities in junior high school. This talk considers the importance of turning past experiences into motivation for action."}},intro:{ja:["2010年福島県生まれ。中学時代に校内組織「ビオトープ管理委員会」を自ら立ち上げ、環境保全活動を牽引。「全国学校・園庭ビオトープコンクール2023文部科学大臣賞」や「第59回全国野生生物保護活動発表大会環境大臣賞」を受賞する。","さらに「令和6年度道路ふれあい月間推進標語最優秀賞（国土交通大臣表彰）」、「第44回福島県川柳賞青少年奨励賞」など、環境・文芸の両分野で多数の受賞実績を持つ。"],en:["Born in Fukushima Prefecture in 2010, he has won numerous literary contests, including the 2024 Road Fureai Month Promotion Slogan Grand Prize, the 44th Fukushima Prefecture Senryu Award Youth Encouragement Prize, and the “Thinking Together: Fukushima, Towards the Environment Beyond” Challenge Award 2023.","The Biotope Management Committee activity he initiated at school during junior high received the 2023 National School/Garden Biotope Contest Minister of Education, Culture, Sports, Science and Technology Award and the 59th National Wildlife Protection Activity Presentation Competition Minister of the Environment Award. In his talk, he will share insights drawn from experiences related to the Fukushima Daiichi Nuclear Power Plant accident and his activities to date."]}},{id:"horise-yoshito",displayOrder:60,published:!0,featured:!0,image:Vb,imagePosition:"50% 45%",name:{ja:"堀瀬 善仁",en:"Yoshito Horise"},role:{ja:"早稲田大学高等学院 2年",en:"Second-year Student, Waseda University Senior High School"},shortBio:{ja:"早稲田大学高等学院2年。7度の転校と多文化経験を持ち、AI姿勢認識を活用した語学ツール「KATA」を開発。",en:"A sophomore at Waseda University Senior High School with seven school changes and multicultural experience, and the developer of “KATA,” an AI-based language-learning tool."},talk:{title:{ja:"100,000 Words of Self-Analysis: Why You Don’t Have to Pick the “Real” You",en:"100,000 Words of Self-Analysis: Why You Don’t Have to Pick the “Real” You"},language:{ja:"英語スピーチ",en:"Talk in English"},description:{ja:"7回の転校と7回の留学を経験したスピーカーは、いつしか自分の頭の中に、正反対の考えを持つ二人の「同居人」がいることに気づきました。長年にわたり二人と向き合い、葛藤を重ねてきた経験をもとに、本トークでは「本当の自分」とは何なのか、そして一つの自分を選ぶ必要があるのかについて考えます。",en:"After changing schools seven times and studying abroad seven times, the speaker came to recognize two “roommates” in his mind who held opposing views. Drawing on years of confronting and struggling with both, this talk asks what the “real self” is—and whether we need to choose only one version of ourselves."}},intro:{ja:["早稲田大学高等学院2年。日本・台湾・香港で7度の転校を経験し、カナダ・オーストラリア・フランスでの国際経験を積む。日本語・中国語を母語とし、英語・フランス語・韓国語を学習中。国際HANAシンポジウム2年連続登壇、AI時代における人間の主体性を研究。","東大AIハッカソン優秀賞受賞。AI姿勢認識を活用した語学ツール「KATA」を開発。現在は、Stanford e-Japanに挑戦し、国際分野での活動を目指す。"],en:["A sophomore at Waseda University Senior High School. He has changed schools seven times in Japan, Taiwan, and Hong Kong, and has gained international experience in Canada, Australia, and France. Japanese and Chinese are his native languages, and he is currently studying English, French, and Korean. He has spoken at the International HANA Symposium for two consecutive years and is researching human agency in the age of AI.","He received the Excellence Award at the University of Tokyo AI Hackathon and developed “KATA,” a language-learning tool that utilizes AI-based posture recognition. He is currently participating in the Stanford e-Japan program and aims to pursue activities in the international arena."]}},{id:"kuroki-yuto",displayOrder:50,published:!0,featured:!0,image:Ob,imagePosition:"50% 44%",name:{ja:"黒木 勇人",en:"Yuto Kuroki"},role:{ja:"早稲田大学 情報理工学科2年",en:"Second-year Computer Science Student, Waseda University"},shortBio:{ja:"ISEF 2025に日本代表として出場し、ドローン配送最適化アルゴリズムの研究で文部科学大臣特別賞を受賞。",en:"Japan representative at ISEF 2025 and recipient of the MEXT Minister’s Special Award for drone-delivery optimization research."},talk:{title:{ja:"Don’t Find Your Passion. Build It.",en:"Don’t Find Your Passion. Build It."},language:{ja:"英語スピーチ",en:"Talk in English"},description:{ja:"情熱は、ある日突然見つかるものではなく、自ら築いていくものです。AI研究への情熱を育んできたスピーカーは、その経験を通じて、情熱を育てる過程の大切さを実感しました。本トークでは、情熱を築くための具体的なステップと、自分らしい人生の方向性を見つける方法について語ります。",en:"Passion is not something we suddenly discover one day; it is something we build. Through developing his own passion for AI research, the speaker came to understand the value of that process. This talk presents practical steps for building passion and finding a direction in life that feels true to you."}},intro:{ja:["早稲田大学情報理工学科2年。国際学生科学技術フェア（ISEF 2025）に日本代表として出場し、ドローン配送最適化アルゴリズムの研究を発表。文部科学大臣特別賞を受賞した。2026年夏からは、中谷財団の奨学生としてジョージア工科大学でロボット外骨格の深層学習モデルを研究している。","外国語学習にも力を入れ、TOEIC満点、ケンブリッジ英検C2取得、最難関のドイツ語検定試験Goethe-Zertifikat C2の3技能合格を達成。現在は外国語学習の方法を発信しながら、高校生の研究発表を支援するNPO法人で活動している。高校時代は硬式テニス部に所属。"],en:["A second-year Computer Science student at Waseda University. He represented Japan at ISEF 2025, presenting research on a drone-delivery optimization algorithm, and received the MEXT Minister’s Special Award. Since summer 2026, he has been conducting research on deep-learning models for robotic exoskeletons at the Georgia Institute of Technology as a Nakatani Foundation scholar.","Passionate about language learning, he has achieved a perfect TOEIC score, Cambridge C2 Proficiency, and passed three Goethe-Zertifikat C2 modules. He currently shares language-learning methods and works with an NPO supporting high school students in presenting their research. In high school, he was on the tennis team."]}},{id:"kogure-masahisa",displayOrder:10,published:!0,featured:!0,image:Ub,imagePosition:"50% 42%",name:{ja:"小暮 真久",en:"Masahisa Kogure"},role:{ja:"社会起業家",en:"Social Entrepreneur"},shortBio:{ja:"TABLE FOR TWOを創設し、約800の企業・団体を巻き込む社会運動へ成長させた。現在も医療・AIなど多領域で挑戦を続けている。",en:"Founder of TABLE FOR TWO, which grew into a nationwide social movement involving around 800 companies and organizations."},talk:{title:{ja:"BECOME A STRANGER 自分に出会うために",en:"BECOME A STRANGER: To Meet Yourself"},language:{ja:"日本語スピーチ",en:"Talk in Japanese"},description:{ja:"あなたのすぐ隣にも、まだ開けていない「Gate」がある。いつもの世界から一歩外へ出て、知らない世界に飛び込んでみる。出会うのは、まだ知らなかった自分かもしれない。人生でいくつものGateを開けてきた経験から、知らない世界へ一歩踏み出すことが、自分を発見するきっかけになることを語ります。",en:"There may be an unopened “Gate” right beside you. Step beyond the familiar and enter a world you do not know; the person you meet there may be a self you have never discovered. Drawing on a life of opening many such gates, this talk shows how taking one step into the unknown can become an opportunity to discover yourself."}},intro:{ja:["早稲田大学卒業後、オーストラリアで人工心臓の研究に従事。その後、マッキンゼー・アンド・カンパニーを経て、社会課題の解決を目指すTABLE FOR TWOを創設。約800の企業・団体を巻き込み、日本最大規模の社会運動へと成長させる。研究、ビジネス、社会課題など異なる世界を越境しながら、新しい仕組みや事業を生み出してきた。現在も医療・AIをはじめ、さまざまな領域で新たな挑戦を続けている。"],en:["After graduating from Waseda University, he conducted artificial-heart research in Australia. He later worked at McKinsey & Company before founding TABLE FOR TWO to address social challenges. By involving around 800 companies and organizations, he grew the initiative into one of Japan’s largest social movements. Crossing boundaries among research, business, and social issues, he has created new systems and ventures, and he continues to take on new challenges in healthcare, AI, and other fields."]}},{id:"takezawa-mamoru",displayOrder:40,published:!0,featured:!0,image:Fb,imagePosition:"42% 50%",name:{ja:"武沢 護",en:"Mamoru Takezawa"},role:{ja:"早稲田大学高等学院 前学院長",en:"Former Headmaster of Waseda University Senior High School"},shortBio:{ja:"長く早稲田大学高等学院の教員を務め、数学・情報科の指導に携わる。特に最後の4年間は学院長を務めた。",en:"A longtime mathematics and information studies educator at Waseda University Senior High School who served as Headmaster for the final four years of his tenure."},talk:{title:{ja:"偶然と想像力 — AI時代の意志決定 —",en:"Chance and Imagination: Decision-Making in the AI Era"},language:{ja:"日本語スピーチ",en:"Talk in Japanese"},description:{ja:"人類はこれまで、さまざまな場面で判断を重ね、意思決定を通じて生き延びてきました。AI時代を迎えた今、意思決定はどのように変化するのでしょうか。本トークでは、「偶然」という概念を手がかりに、現代における意思決定と想像力の重要性について考えます。",en:"Throughout history, humanity has survived by making judgments and decisions in many different situations. How will decision-making change in the age of AI? Using the concept of “chance” as a starting point, this talk considers the importance of decision-making and imagination today."}},intro:{ja:["早稲田大学高等学院前学院長。長く早稲田大学高等学院の教員を務め、数学・情報科の指導に携わる。特に最後の4年間は学院長を務めた。"],en:["Former Headmaster of Waseda University Senior High School. He served for many years as a teacher at the school, teaching mathematics and information studies. He was Headmaster for the final four years of his tenure."]}},{id:"reon-hiruma",displayOrder:20,published:!0,featured:!0,image:Ib,imagePosition:"50% 42%",name:{ja:"比留間 礼音",en:"Reon Hiruma"},role:{ja:"ベンチャーキャピタリスト",en:"Venture Capitalist"},shortBio:{ja:"ヘルスケア、産業技術、安全保障領域のディープテックに投資し、防衛技術コミュニティJDTIも運営している。",en:"A venture capitalist investing in deep tech across healthcare, industrial technology, and security, and the operator of the JDTI defense technology community."},talk:{title:{ja:"Learning New Perspectives: Why I Keep Learning Languages",en:"Learning New Perspectives: Why I Keep Learning Languages"},language:{ja:"英語スピーチ",en:"Talk in English"},description:{ja:"日本語とオランダ語から出発し、独学で英語とフランス語を習得したスピーカー。言語学習によって広がった人とのつながりや世界の見え方を通して、AI翻訳が普及した今も言語を学ぶ意味を考えます。",en:"Starting with Japanese and Dutch, the speaker went on to teach himself English and French. Through the relationships and perspectives that language learning opened up, this talk considers why learning languages still matters in an age of widely available AI translation."}},intro:{ja:["ヘルスケア、産業技術、安全保障領域のディープテックに投資するベンチャーキャピタリスト。早稲田大学在学中の2018年にPotentialist Globalを共同創業し、欧米の技術系企業20社以上の日本・アジア進出を支援。2026年より国内大手VCで投資を担当する。投資の傍ら、防衛技術コミュニティJDTIを運営し、技術系スタートアップが安全保障に果たしうる役割を議論する場づくりに取り組む。オランダ人と日本人の両親をもち、四言語に堪能。"],en:["Reon Hiruma is a venture capitalist investing in deep tech across healthcare, industrial technology, and security. While at Waseda University, he co-founded Potentialist Global in 2018 and helped over 20 US and European technology companies enter Japan and Asia. In 2026, he joined a leading Japanese venture capital firm. Alongside his work as an investor, Reon runs JDTI, a defense technology community that brings people together to discuss the role startups can play in national security. Born to Dutch and Japanese parents, he speaks four languages."]}}],Mh={ja:{profileLabel:"プロフィール",talkLabel:"トーク紹介",showDetails:"プロフィールとトーク紹介を見る",hideDetails:"詳細を閉じる",viewSpeaker:"詳しく見る"},en:{profileLabel:"Profile",talkLabel:"About the talk",showDetails:"View profile and talk details",hideDetails:"Close details",viewSpeaker:"View details"}},zh=({speaker:e,language:t,variant:n,index:r,initiallyExpanded:i=!1})=>{var p,k,b,T,E,j;const o=rt(),[s,l]=w.useState(i),c=n==="detail",u=c?"h2":"h3",d=Mh[t]??Mh.ja,h=e.name[t]??e.name.ja,f=e.role[t]??e.role.ja,v=e.shortBio[t]??e.shortBio.ja,y=e.intro[t]??e.intro.ja,x=((p=e.talk)==null?void 0:p.title[t])??((k=e.talk)==null?void 0:k.title.ja),S=((b=e.talk)==null?void 0:b.language[t])??((T=e.talk)==null?void 0:T.language.ja),g=((E=e.talk)==null?void 0:E.description[t])??((j=e.talk)==null?void 0:j.description.ja),m=`speaker-${e.id}-details`;return w.useEffect(()=>{i&&l(!0)},[i]),a.jsxs(de.article,{id:c?`speaker-${e.id}`:void 0,className:`speaker-card speaker-card--${n}${c&&r%2===1?" speaker-card--reversed":""}`,style:{"--speaker-image-position":e.imagePosition},initial:o?!1:{opacity:0,y:28},whileInView:o?void 0:{opacity:1,y:0},viewport:{once:!0,amount:.15},transition:o?{duration:0}:{duration:.55,delay:c?0:Math.min(r*.07,.28)},children:[a.jsx("div",{className:"speaker-card__image-frame",children:a.jsx("img",{src:e.image,alt:"",className:"speaker-card__image",loading:c&&r===0?"eager":"lazy",decoding:"async"})}),a.jsxs("div",{className:"speaker-card__content",children:[a.jsx("p",{className:"speaker-card__role",children:f}),a.jsx(u,{className:"speaker-card__name",children:h}),c?a.jsxs(a.Fragment,{children:[a.jsxs("button",{className:"speaker-card__mobile-toggle",type:"button","aria-expanded":s,"aria-controls":m,onClick:()=>l(L=>!L),children:[a.jsx("span",{children:s?d.hideDetails:d.showDetails}),a.jsx(i0,{className:"speaker-card__mobile-toggle-icon",size:20,strokeWidth:2,"aria-hidden":"true"})]}),a.jsxs("div",{id:m,className:`speaker-card__details${s?" speaker-card__details--expanded":""}`,children:[a.jsxs("div",{className:"speaker-card__bio",children:[a.jsx("p",{className:"speaker-card__detail-label",children:d.profileLabel}),y.map((L,N)=>a.jsx("p",{children:L},`${e.id}-intro-${N}`))]}),e.talk&&a.jsxs("section",{className:"speaker-card__talk","aria-labelledby":`${e.id}-talk-title`,children:[a.jsxs("div",{className:"speaker-card__talk-meta",children:[a.jsx("p",{className:"speaker-card__detail-label",children:d.talkLabel}),a.jsx("p",{className:"speaker-card__talk-language",children:S})]}),a.jsx("h3",{id:`${e.id}-talk-title`,className:"speaker-card__talk-title",children:x}),a.jsx("p",{className:"speaker-card__talk-description",children:g})]})]})]}):a.jsxs(a.Fragment,{children:[a.jsx("p",{className:"speaker-card__summary",children:v}),a.jsxs(Y,{className:"speaker-card__details-link",to:`/speakers#speaker-${e.id}`,children:[d.viewSpeaker,a.jsx(Gt,{size:16,strokeWidth:2,"aria-hidden":"true"})]})]})]})]})},Rh={ja:{previewSubtitle:"多様な経験と専門性を持つスピーカーたちが、それぞれのBreakshotから生まれたアイデアを共有します。",fullSubtitle:"TEDxWUSHS Youth 2026に登壇したスピーカーと、その背景にある経験やアイデアをご紹介します。",empty:"スピーカー情報は近日公開予定です。",comingSoonLabel:"追加情報",comingSoonBody:"メインイベント当日の報告は、イベントアーカイブで近日公開予定です。"},en:{previewSubtitle:"Speakers with diverse experiences and expertise share ideas shaped by their own Breakshots.",fullSubtitle:"Meet the TEDxWUSHS Youth 2026 speakers and discover the experiences and ideas behind their talks.",empty:"Speaker information will be announced soon.",comingSoonLabel:"More to come",comingSoonBody:"Our main event report is coming soon in Event Archives."}},m0=({variant:e="preview"})=>{const{language:t}=ne(),{hash:n}=en(),r=rt(),i=Rh[t]??Rh.ja,o=e==="full",s=o?"h1":"h2",l=[...p0].filter(u=>u.published&&(o||u.featured)).sort((u,d)=>u.displayOrder-d.displayOrder),c=f0(l);return a.jsxs("section",{id:"speakers",className:`speakers-section speakers-section--${e} section-padding`,"aria-labelledby":"speakers-heading",children:[a.jsxs("div",{className:"container speakers-section__container",children:[a.jsxs(de.header,{className:"speakers-section__header",initial:r?!1:{opacity:0,y:20},whileInView:r?void 0:{opacity:1,y:0},viewport:{once:!0},transition:{duration:r?0:.6},children:[a.jsx("span",{className:"speakers-section__eyebrow",lang:"en",children:o?"The 2026 Speaker Lineup":"Ideas in Motion"}),a.jsxs(s,{id:"speakers-heading",className:"speakers-section__title",lang:"en",children:[o?"2026 ":"2026 Featured ",a.jsx("span",{children:"Speakers"})]}),a.jsx("p",{className:"speakers-section__subtitle",children:o?i.fullSubtitle:i.previewSubtitle})]}),a.jsx(xi,{}),l.length>0?o?a.jsx("div",{className:"speakers-section__list",children:l.map((u,d)=>a.jsx(zh,{speaker:u,language:t,variant:"detail",index:d,initiallyExpanded:n===`#speaker-${u.id}`},u.id))}):a.jsx("div",{className:"speakers-section__grid",children:c.map((u,d)=>a.jsx("div",{className:"speakers-section__row",children:u.map(h=>a.jsx(zh,{speaker:h,language:t,variant:"preview",index:l.findIndex(f=>f.id===h.id)},h.id))},`speaker-row-${d+1}`))}):a.jsx("p",{className:"speakers-section__empty",children:i.empty}),o&&l.length>0&&a.jsxs("section",{className:"speakers-section__coming-soon","aria-labelledby":"speakers-coming-soon-heading",children:[a.jsx("span",{className:"speakers-section__coming-soon-mark","aria-hidden":"true",children:"+"}),a.jsxs("div",{children:[a.jsx("p",{className:"speakers-section__coming-soon-label",children:i.comingSoonLabel}),a.jsx("h2",{id:"speakers-coming-soon-heading",className:"speakers-section__coming-soon-title",lang:"en",children:"Coming Soon"}),a.jsx("p",{className:"speakers-section__coming-soon-body",children:i.comingSoonBody})]})]}),!o&&l.length>0&&a.jsx("div",{className:"speakers-section__cta-wrap",children:a.jsxs(Y,{to:"/speakers",className:"speakers-section__cta",lang:"en",children:["More Details",a.jsx(Gt,{size:18,"aria-hidden":"true"})]})})]}),a.jsx("style",{children:`
        .speakers-section {
          --speaker-accent: var(--ted-red);
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 8% 12%, rgb(var(--ted-red-rgb) / 0.11), transparent 30rem),
            var(--ted-black);
        }

        .speakers-section--full {
          padding-top: 10rem;
          min-height: 100vh;
        }

        .speakers-section__container {
          position: relative;
          z-index: 1;
        }

        .speakers-section__header {
          max-width: 760px;
          margin: 0 auto 4.5rem;
          text-align: center;
        }

        .speakers-section__eyebrow {
          display: inline-block;
          margin-bottom: 1rem;
          color: var(--speaker-accent);
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.24em;
          text-transform: uppercase;
        }

        .speakers-section__title {
          font-size: clamp(2.6rem, 7vw, 5rem);
          line-height: 0.95;
          text-transform: uppercase;
        }

        .speakers-section__title span {
          color: var(--ted-red);
        }

        .speakers-section__subtitle {
          max-width: 650px;
          margin: 1.5rem auto 0;
          color: #999;
          font-size: clamp(1rem, 2vw, 1.12rem);
          line-height: 1.8;
        }

        .speakers-section__grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .speakers-section__row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
        }

        .speaker-card {
          position: relative;
          min-width: 0;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.09);
          background: linear-gradient(145deg, #171717, #0c0c0c);
        }

        .speaker-card--preview {
          flex: 1 1 290px;
          max-width: 360px;
          border-radius: 16px;
          transition: border-color 0.35s ease, transform 0.35s ease;
        }

        .speaker-card--preview:hover {
          border-color: rgb(var(--ted-red-rgb) / 0.72);
          transform: translateY(-7px);
        }

        .speaker-card__image-frame {
          position: relative;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: #111;
        }

        .speaker-card__image-frame::after {
          content: '';
          position: absolute;
          inset: 45% 0 0;
          background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.58));
          pointer-events: none;
        }

        .speaker-card__image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: var(--speaker-image-position, 50% 50%);
          transition: transform 0.55s ease;
        }

        .speaker-card--preview:hover .speaker-card__image {
          transform: scale(1.035);
        }

        .speaker-card__content {
          padding: 1.6rem;
        }

        .speaker-card__role {
          display: inline-flex;
          margin-bottom: 0.55rem;
          padding: 0.3rem 0.5rem;
          border-radius: 999px;
          background: var(--ted-black);
          color: var(--speaker-accent);
          font-size: 0.73rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          line-height: 1.5;
        }

        .speaker-card__name {
          margin-bottom: 1rem;
          font-size: clamp(1.55rem, 3vw, 2rem);
          line-height: 1.1;
          letter-spacing: 0;
          text-transform: none;
        }

        .speaker-card__summary {
          color: #aaa;
          font-size: 0.96rem;
          line-height: 1.75;
        }

        .speaker-card__details-link {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          min-height: 3rem;
          margin-top: 1.25rem;
          color: var(--speaker-accent);
          font-size: 0.88rem;
          font-weight: 800;
          text-decoration: underline;
          text-decoration-color: transparent;
          text-underline-offset: 0.3em;
        }

        .speaker-card__details-link:hover,
        .speaker-card__details-link:focus-visible {
          text-decoration-color: currentColor;
        }

        .speaker-card__details-link:focus-visible {
          outline: 2px solid var(--ted-white);
          outline-offset: 4px;
        }

        .speakers-section__cta-wrap {
          display: flex;
          justify-content: center;
          margin-top: 3.5rem;
        }

        .speakers-section__cta {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.95rem 1.4rem;
          border: 1px solid rgb(var(--ted-red-rgb) / 0.65);
          border-radius: 999px;
          color: var(--ted-white);
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .speakers-section__cta:hover,
        .speakers-section__cta:focus-visible {
          border-color: var(--ted-red);
          background: var(--ted-red);
          transform: translateY(-2px);
        }

        .speakers-section__cta:focus-visible {
          outline: 2px solid var(--ted-white);
          outline-offset: 4px;
        }

        .speakers-section__list {
          display: flex;
          flex-direction: column;
          gap: 4.5rem;
          max-width: 1080px;
          margin: 0 auto;
        }

        .speaker-card--detail {
          display: grid;
          grid-template-columns: minmax(260px, 0.82fr) minmax(0, 1.18fr);
          align-items: stretch;
          border-radius: 20px;
          scroll-margin-top: 7.5rem;
        }

        .speaker-card--detail .speaker-card__image-frame {
          min-height: 100%;
          aspect-ratio: auto;
        }

        .speaker-card--detail.speaker-card--reversed {
          grid-template-columns: minmax(0, 1.18fr) minmax(260px, 0.82fr);
        }

        .speaker-card--detail.speaker-card--reversed .speaker-card__image-frame {
          order: 2;
        }

        .speaker-card--detail.speaker-card--reversed .speaker-card__content {
          order: 1;
        }

        .speaker-card--detail .speaker-card__content {
          padding: clamp(2rem, 5vw, 4rem);
        }

        .speaker-card--detail .speaker-card__role {
          margin-bottom: 0.8rem;
        }

        .speaker-card--detail .speaker-card__name {
          margin-bottom: 1.75rem;
          font-size: clamp(2rem, 5vw, 3.4rem);
        }

        .speaker-card__bio {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
        }

        .speaker-card__details {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .speaker-card__bio > p {
          color: #b5b5b5;
          font-size: 1rem;
          line-height: 1.9;
        }

        .speaker-card__detail-label {
          color: var(--speaker-accent) !important;
          font-size: 0.75rem !important;
          font-weight: 800;
          letter-spacing: 0.12em;
          line-height: 1.5 !important;
          text-transform: uppercase;
        }

        .speaker-card__talk {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.14);
        }

        .speaker-card__talk-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          justify-content: space-between;
          gap: 0.75rem 1.25rem;
        }

        .speaker-card__talk-language {
          color: #a9a9a9;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .speaker-card__talk-title {
          color: var(--ted-white);
          font-size: clamp(1.35rem, 2.5vw, 1.9rem);
          line-height: 1.35;
          letter-spacing: -0.02em;
          text-transform: none;
        }

        .speaker-card__talk-description {
          color: #c0c0c0;
          font-size: 1rem;
          line-height: 1.9;
        }

        .speaker-card__mobile-toggle {
          display: none;
        }

        .speakers-section__coming-soon {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          align-items: center;
          gap: clamp(1.5rem, 4vw, 3rem);
          max-width: 1080px;
          margin: 5rem auto 0;
          padding: clamp(2rem, 5vw, 3.5rem) 0;
          border-top: 1px solid rgba(255, 255, 255, 0.13);
          border-bottom: 1px solid rgba(255, 255, 255, 0.13);
        }

        .speakers-section__coming-soon-mark {
          display: grid;
          width: clamp(4.5rem, 10vw, 7rem);
          aspect-ratio: 1;
          place-items: center;
          border: 1px solid rgb(var(--ted-red-rgb) / 0.7);
          border-radius: 50%;
          color: var(--speaker-accent);
          font-size: clamp(2.5rem, 7vw, 4.5rem);
          font-weight: 200;
          line-height: 1;
        }

        .speakers-section__coming-soon-label {
          margin-bottom: 0.55rem;
          color: var(--speaker-accent);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .speakers-section__coming-soon-title {
          margin-bottom: 0.75rem;
          font-size: clamp(2rem, 6vw, 4rem);
          line-height: 1;
          text-transform: uppercase;
        }

        .speakers-section__coming-soon-body {
          max-width: 630px;
          color: #a9a9a9;
          line-height: 1.8;
        }

        .speakers-section__empty {
          text-align: center;
          color: #999;
        }

        @media (max-width: 900px) {
          .speakers-section--full {
            padding-top: 8rem;
          }

          .speakers-section__header {
            margin-bottom: 3rem;
          }

          .speakers-section__list {
            gap: 2.5rem;
          }

          .speakers-section__coming-soon {
            margin-top: 3rem;
          }

          .speaker-card--detail,
          .speaker-card--detail.speaker-card--reversed {
            grid-template-columns: 1fr;
          }

          .speaker-card--detail.speaker-card--reversed .speaker-card__image-frame,
          .speaker-card--detail.speaker-card--reversed .speaker-card__content {
            order: initial;
          }

          .speaker-card--detail .speaker-card__image-frame {
            min-height: 0;
            aspect-ratio: 4 / 5;
            max-height: 620px;
          }

          .speaker-card__mobile-toggle {
            display: flex;
            width: 100%;
            min-height: 3rem;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            padding: 0.75rem 0;
            border: 0;
            border-top: 1px solid rgba(255, 255, 255, 0.14);
            border-bottom: 1px solid rgba(255, 255, 255, 0.14);
            background: transparent;
            color: var(--ted-white);
            font: inherit;
            font-size: 1rem;
            font-weight: 700;
            text-align: left;
            cursor: pointer;
            user-select: none;
          }

          .speaker-card__mobile-toggle:focus-visible {
            outline: 2px solid var(--ted-red);
            outline-offset: 4px;
          }

          .speaker-card__mobile-toggle-icon {
            flex: 0 0 auto;
            color: var(--speaker-accent);
            transition: transform 0.25s ease;
          }

          .speaker-card__mobile-toggle[aria-expanded='true'] .speaker-card__mobile-toggle-icon {
            transform: rotate(180deg);
          }

          .speaker-card__details {
            display: none;
            padding-top: 1.75rem;
          }

          .speaker-card__details--expanded {
            display: flex;
          }
        }

        @media (max-width: 480px) {
          .speakers-section__header {
            margin-bottom: 2.5rem;
          }

          .speakers-section__grid {
            gap: 1.5rem;
          }

          .speakers-section__row {
            gap: 1.5rem;
          }

          .speaker-card--preview {
            flex-basis: 100%;
          }

          .speaker-card--detail .speaker-card__content {
            padding: 1.7rem 1.4rem 2rem;
          }

          .speaker-card__talk-title {
            font-size: 1.35rem;
          }

          .speakers-section__coming-soon {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }

          .speakers-section__coming-soon-mark {
            width: 4rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .speaker-card,
          .speaker-card__image,
          .speaker-card__mobile-toggle-icon,
          .speakers-section__cta {
            transition: none;
          }

          .speaker-card--preview:hover,
          .speaker-card--preview:hover .speaker-card__image,
          .speakers-section__cta:hover,
          .speakers-section__cta:focus-visible {
            transform: none;
          }
        }
      `})]})},Wb={ja:{sectionSubtitle:"TEDxWUSHS Youthへの参加方法と最新情報をご案内します。",optionsHeading:"参加方法と最新情報",applicationsUpdate:"2026年のイベントは終了しました。ご参加・ご協力ありがとうございました。",teamDescription:"来年度（2027年）の運営チームメンバー募集は公式SNSで行います。",teamAction:"募集状況を見る",audienceDescription:"2026年のイベントは終了しました。当日の報告は近日公開予定です。",audienceAction:"イベントの記録を見る",audienceStatus:"開催終了",subscribed:a.jsxs(a.Fragment,{children:["登録完了しました",a.jsx("br",{}),"イベントの最新情報をお届けしますのでお楽しみに。"]}),newsletter:"イベントの最新情報や募集のお知らせをメールでお届けします。",emailLabel:"メールアドレス",emailPlaceholder:"メールアドレスを入力",subscribeAction:"登録する"},en:{sectionSubtitle:"Explore ways to take part in TEDxWUSHS Youth and receive the latest event updates.",optionsHeading:"Ways to Participate and Stay Updated",applicationsUpdate:"TEDxWUSHS Youth 2026 — Thank you for joining us. The event has concluded.",teamDescription:"2027 recruitment will take place on our official social media channels.",teamAction:"View Recruitment Status",audienceDescription:"Our 2026 event has concluded. The event report is coming soon.",audienceAction:"Explore event archives",audienceStatus:"Event concluded",subscribed:a.jsxs(a.Fragment,{children:["You are subscribed.",a.jsx("br",{}),"We look forward to sharing the latest event updates with you."]}),newsletter:"Receive event updates and future application announcements by email.",emailLabel:"Email address",emailPlaceholder:"Enter your email address",subscribeAction:"Subscribe"}},g0=({hideHeader:e=!1})=>{const[t,n]=w.useState(!1),r=w.useRef(null),i=w.useRef(null),o=rt(),{language:s}=ne(),l=Wb[s];w.useEffect(()=>{var d;t&&((d=r.current)==null||d.focus())},[t]),w.useEffect(()=>()=>{i.current&&clearTimeout(i.current)},[]);const c=()=>{i.current&&clearTimeout(i.current),i.current=setTimeout(()=>n(!0),300)},u=[{title:"Join the Team",icon:a.jsx(yl,{size:32,"aria-hidden":"true",focusable:"false"}),description:l.teamDescription,link:"/join-us/team",action:l.teamAction,status:"Recruitment Closed",closed:!0,color:"#fff"},{title:"Event Archives",icon:a.jsx(db,{size:32,"aria-hidden":"true",focusable:"false"}),description:l.audienceDescription,link:"/archives",action:l.audienceAction,status:l.audienceStatus,statusLanguage:s,color:"#fff"}];return a.jsxs("section",{id:"contact",className:"join-us section-padding",children:[a.jsxs("div",{className:"container",children:[e?a.jsx("h2",{className:"visually-hidden",children:l.optionsHeading}):a.jsxs(de.div,{className:"section-header",initial:o?!1:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[a.jsx("span",{className:"join-tagline",lang:"en",children:"Be part of the community"}),a.jsxs("h2",{className:"section-title",lang:"en",children:["Join ",a.jsx("span",{className:"highlight-red",children:"Us"})]}),a.jsx("p",{className:"section-subtitle",children:l.sectionSubtitle})]}),a.jsxs(de.div,{className:"recruitment-closed",initial:o?!1:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[a.jsx("strong",{lang:"en",children:"2026 Applications Update"}),a.jsx("p",{children:l.applicationsUpdate})]}),a.jsx(xi,{}),a.jsx("div",{className:"opportunities-grid",children:u.map((d,h)=>a.jsxs(de.div,{className:`opt-card${d.closed?" opt-card--closed":""}`,initial:o?!1:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:o?0:h*.1},children:[a.jsx("div",{className:"opt-icon",children:d.icon}),d.status&&a.jsx("span",{className:"opt-status",lang:d.statusLanguage??"en",children:d.status}),a.jsx("h3",{className:"opt-title",lang:"en",children:d.title}),a.jsx("p",{className:"opt-description",children:d.description}),a.jsxs(Y,{to:d.link,className:"opt-link",children:[d.action," ",a.jsx(Gt,{size:16,"aria-hidden":"true",focusable:"false"})]})]},d.title))}),a.jsx(de.div,{className:"newsletter-box",initial:o?!1:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},children:a.jsxs("div",{className:"newsletter-content",children:[a.jsx("h3",{lang:"en",children:"Stay Updated"}),a.jsx("iframe",{title:"hidden_iframe",name:"hidden_iframe",id:"hidden_iframe",style:{display:"none"}}),t?a.jsx("div",{ref:r,className:"success-message",role:"status","aria-live":"polite","aria-atomic":"true",tabIndex:-1,children:a.jsx("p",{children:l.subscribed})}):a.jsxs("div",{children:[a.jsx("p",{id:"newsletter-description",children:l.newsletter}),a.jsxs("form",{className:"newsletter-form",action:"https://docs.google.com/forms/d/e/1FAIpQLScvnsbAaQFhyodG3GY4qXmTAj919BFivczNyE9bOt4Z_TxuWw/formResponse",method:"post",target:"hidden_iframe",onSubmit:c,children:[a.jsxs("div",{className:"newsletter-field",children:[a.jsx("label",{htmlFor:"newsletter-email",children:l.emailLabel}),a.jsx("input",{id:"newsletter-email",type:"email",name:"entry.269866944","aria-describedby":"newsletter-description",placeholder:l.emailPlaceholder,autoComplete:"email",inputMode:"email",required:!0})]}),a.jsx("button",{type:"submit",className:"btn-primary",children:l.subscribeAction})]})]})]})})]}),a.jsx("style",{children:`
        .join-us {
          background-color: var(--ted-black);
          position: relative;
        }

        .join-tagline {
          color: var(--ted-red);
          font-weight: 800;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          font-size: 0.75rem;
          margin-bottom: 1rem;
          display: block;
        }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .section-subtitle {
          color: #aaa;
          max-width: 600px;
          margin: 1.5rem auto 0;
          font-size: 1.1rem;
        }

        .recruitment-closed {
          max-width: 820px;
          margin: -2rem auto 4rem;
          padding: 1.5rem 2rem;
          border: 1px solid rgb(var(--ted-red-rgb) / 0.45);
          border-radius: 12px;
          background: var(--ted-black);
          text-align: center;
        }

        .recruitment-closed strong {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--ted-red);
          font-family: var(--font-heading);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .recruitment-closed p {
          color: #bbb;
        }

        .opportunities-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 2.5rem;
          margin-bottom: 6rem;
        }

        .opt-card {
          background: var(--ted-dark-gray);
          padding: 3rem 2rem;
          border-radius: 16px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
          will-change: transform, opacity;
        }

        .opt-card:hover {
          transform: translateY(-10px) !important;
          border-color: var(--ted-red);
          background: linear-gradient(145deg, var(--ted-dark-gray), #000);
        }

        .opt-card--closed {
          border-color: rgba(255, 255, 255, 0.12);
        }

        .opt-status {
          display: inline-block;
          margin-bottom: 1rem;
          padding: 0.35rem 0.7rem;
          border: 1px solid rgb(var(--ted-red-rgb) / 0.55);
          border-radius: 999px;
          background: var(--ted-black);
          color: var(--ted-red);
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .opt-icon {
          margin-bottom: 2rem;
          display: flex;
          justify-content: center;
          color: var(--ted-white);
          transition: color 0.3s ease;
        }

        .opt-card:hover .opt-icon {
          color: var(--ted-red);
        }

        .opt-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .opt-description {
          color: #aaa;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .opt-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          min-height: 44px;
          padding: 0.45rem 0.75rem;
          border-radius: 999px;
          background: var(--ted-black);
          color: var(--ted-red);
          font-weight: 700;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .newsletter-box {
          background: linear-gradient(135deg, #111, #000);
          border: 1px solid var(--ted-red);
          border-radius: 20px;
          padding: 4rem;
          text-align: center;
        }

        .newsletter-content h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .newsletter-content p {
          color: #888;
          margin-bottom: 2.5rem;
        }

        .newsletter-form {
          display: flex;
          align-items: flex-end;
          gap: 1rem;
          max-width: 500px;
          margin: 0 auto;
        }

        .newsletter-field {
          flex: 1;
          min-width: 0;
          text-align: left;
        }

        .newsletter-field label {
          display: block;
          margin-bottom: 0.5rem;
          color: #fff;
          font-size: 0.9rem;
          font-weight: 700;
        }

        .newsletter-form input {
          width: 100%;
          background: #222;
          border: 1px solid #444;
          padding: 1rem 1.5rem;
          border-radius: 8px;
          color: white;
          font-family: inherit;
          font-size: 1rem;
        }

        .newsletter-form input:focus {
          border-color: var(--ted-red);
        }

        .newsletter-form input:focus-visible,
        .btn-primary:focus-visible,
        .opt-link:focus-visible,
        .success-message:focus-visible {
          outline: 3px solid #fff;
          outline-offset: 4px;
        }

        .btn-primary {
          background: var(--ted-red);
          color: white;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-weight: 700;
          text-transform: uppercase;
          transition: var(--transition-smooth);
        }

        .btn-primary:hover {
          background: var(--ted-red);
          transform: scale(1.05);
        }

        .success-message {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--ted-red);
          border-radius: 8px;
          padding: 2rem;
          margin-top: 1.5rem;
          color: white;
          font-weight: 500;
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .opportunities-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .newsletter-box {
            padding: 2.5rem;
          }
          .newsletter-form {
            flex-direction: column;
            align-items: stretch;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .opt-card,
          .opt-icon,
          .btn-primary {
            transition: none;
          }

          .opt-card:hover,
          .btn-primary:hover {
            transform: none !important;
          }
        }
      `})]})},Hb=()=>a.jsxs("main",{id:"main-content",tabIndex:-1,children:[a.jsx(Db,{}),a.jsx(Ab,{}),a.jsx(Mb,{}),a.jsx(m0,{}),a.jsx(g0,{})]}),Bb="アイデアを発見し広める精神のもと、TEDxは、地域で自主的に運営されるイベントを通じて、人々がTEDのような体験を共有するためのプログラムです。TEDxイベントでは、TED Talksの映像とライブスピーカーが組み合わさり、深い議論とつながりを生み出します。これらの地域で自主運営されるイベントはTEDxと呼ばれ、xは independently organized TED event（独立して運営されるTEDイベント）を表します。TED ConferenceはTEDxプログラムに一般的な指針を提供しますが、各TEDxイベントは自主的に運営されています（所定のルールおよび規定に従います）。",$b="TEDは、対話を生み出し、理解を深め、意義ある変化を促すアイデアを発見し、議論し、広めることに取り組む、非営利・無党派の組織です。TEDは、特定の主張を掲げることなく、好奇心、理性、驚き、そして知識の探究に力を注いでいます。世界をより深く理解し、他者とのつながりを求める、あらゆる分野と文化の人々を歓迎します。そして、誰もがアイデアに触れ、それを自分たちのコミュニティで行動へと移すことを呼びかけています。",Yb="TEDは1984年、Technology、Entertainment、Designが交わるカンファレンスとして始まりました。現在では、科学やビジネスから教育、芸術、世界規模の課題までを探究する、多様な世界的コミュニティと取り組みへと広がっています。毎年のカンファレンスで選ばれ、TED.comで公開されるTED Talksに加え、TEDはオリジナルポッドキャスト、短編映像シリーズ、アニメーション形式の教育コンテンツ（TED-Ed）、テレビ番組を制作しています。これらは100以上の言語に翻訳され、世界各地の提携先を通じて配信されています。毎年、数千件のTEDxイベントが独立して運営されています。",Kb="Audacious Projectを通じて、TEDは、世界が直面する最も緊急な課題に大胆な解決策を示すプロジェクトへ66億ドルの資金提供が促されることに貢献してきました。より美しく、持続可能で、公正な世界を目指す取り組みです。2020年、TEDは、気候危機の解決を加速し、ネットゼロの未来に向けた運動を広げるCountdownを開始しました。2023年には、より活気があり公平な未来への現実的な道筋に焦点を当て、新しい対話を生み出すTED Democracyを開始しました。",Gb=()=>{const{language:e}=ne(),t=e==="ja",n=rt();return a.jsxs("main",{id:"main-content",tabIndex:-1,className:"about-page",children:[a.jsx("div",{className:"container section-padding",children:a.jsxs(de.div,{initial:n?!1:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:n?0:.8},children:[a.jsxs("section",{className:"about-section",children:[a.jsx("h1",{className:"page-title",children:t?a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"highlight-red brand-name",children:"TEDx"}),"について"]}):a.jsxs(a.Fragment,{children:["About ",a.jsx("span",{className:"highlight-red brand-name",children:"TEDx"})]})}),a.jsx("h2",{className:"sub-title brand-name",children:t?"TEDxについて — x = independently organized event（独立して運営されるイベント）":"TEDx, x = independently organized event"}),a.jsx("p",{children:t?Bb:a.jsx(a.Fragment,{children:"In the spirit of discovering and spreading ideas, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)"})})]}),a.jsxs("section",{className:"about-section",children:[a.jsx("h2",{className:"section-title",children:t?a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"highlight-red",children:"TED"}),"について"]}):a.jsxs(a.Fragment,{children:["About ",a.jsx("span",{className:"highlight-red",children:"TED"})]})}),a.jsx("p",{children:t?$b:"TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and drive meaningful change. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community."}),t&&a.jsxs(a.Fragment,{children:[a.jsx("p",{children:Yb}),a.jsx("p",{children:Kb}),a.jsx("p",{children:a.jsx("a",{href:"https://www.ted.com/about/programs-initiatives",target:"_blank",rel:"noopener noreferrer",className:"highlight-link",children:"TEDのプログラムと取り組みの一覧を見る"})})]}),a.jsxs("p",{hidden:t,children:["TED began in 1984 as a conference where Technology, Entertainment and Design converged, but today it spans a multitude of worldwide communities and initiatives exploring everything from science and business to education, arts and global issues. In addition to the TED Talks curated from our annual conferences and published on TED.com, we produce original podcasts, short video series, animated educational lessons (TED-Ed) and TV programs that are translated into more than 100 languages and distributed via partnerships around the world. Each year, thousands of independently run TEDx events. Through the Audacious Project, TED has helped catalyze $6.6 billion in funding for projects that support bold solutions to the world's most urgent challenges — working to make the world more beautiful, sustainable and just. In 2020, TED launched Countdown, an initiative to accelerate solutions to the climate crisis and mobilize a movement for a net-zero future, and in 2023 TED launched TED Democracy to spark a new kind of conversation focused on realistic pathways towards a more vibrant and equitable future. ",a.jsx("a",{href:"https://www.ted.com/about/programs-initiatives",target:"_blank",rel:"noopener noreferrer",className:"highlight-link",children:"View a full list of TED’s many programs and initiatives."})]}),a.jsxs("div",{className:"ted-social",children:[a.jsx("p",{children:t?"TEDの公式アカウント":"Follow TED on:"}),a.jsxs("div",{className:"social-links",children:[a.jsx("a",{href:"https://www.facebook.com/TED",target:"_blank",rel:"noopener noreferrer","aria-label":"TED on Facebook",lang:"en",children:a.jsx(QS,{size:24,"aria-hidden":"true"})}),a.jsx("a",{href:"https://www.instagram.com/ted",target:"_blank",rel:"noopener noreferrer","aria-label":"TED on Instagram",lang:"en",children:a.jsx(o0,{size:24,"aria-hidden":"true"})}),a.jsx("a",{href:"https://www.linkedin.com/company/ted-conferences",target:"_blank",rel:"noopener noreferrer","aria-label":"TED on LinkedIn",lang:"en",children:a.jsx(ZS,{size:24,"aria-hidden":"true"})}),a.jsx("a",{href:"https://twitter.com/TEDTalks",target:"_blank",rel:"noopener noreferrer","aria-label":"TED on X",lang:"en",children:a.jsx(l0,{size:24,"aria-hidden":"true"})}),a.jsx("a",{href:"https://www.tiktok.com/@tedtoks",target:"_blank",rel:"noopener noreferrer","aria-label":"TED on TikTok",lang:"en",children:a.jsx(ab,{size:24,"aria-hidden":"true"})})]})]})]})]})}),a.jsx("style",{children:`
                .about-page {
                    padding-top: 100px;
                    background-color: var(--ted-black);
                    color: var(--ted-white);
                    min-height: 100vh;
                }

                .page-title {
                    font-size: clamp(2.4rem, 9vw, 3.5rem);
                    margin-bottom: 3rem;
                    text-align: center;
                    text-wrap: balance;
                }

                .about-section {
                    max-width: 800px;
                    margin: 0 auto 5rem;
                }

                .sub-title {
                    font-size: 1.5rem;
                    color: var(--ted-red);
                    margin-bottom: 1.5rem;
                }

                .section-title {
                    font-size: 2.5rem;
                    margin-bottom: 2rem;
                }

                .about-section p {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: #ccc;
                    margin-bottom: 2rem;
                }

                .about-page .highlight-link {
                    color: var(--ted-red);
                    text-decoration: underline;
                    text-underline-offset: 0.18em;
                }

                .ted-social {
                    margin-top: 3rem;
                    padding: 2rem;
                    background: var(--ted-dark-gray);
                    border-radius: 12px;
                    text-align: center;
                }

                .ted-social p {
                    margin-bottom: 1.5rem;
                    font-weight: 700;
                }

                .social-links {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 0.75rem;
                }

                .social-links a {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 44px;
                    min-width: 44px;
                    height: 44px;
                    border-radius: 4px;
                    color: white;
                    transition: var(--transition-smooth);
                }

                .social-links a:hover {
                    color: var(--ted-red);
                    transform: translateY(-5px);
                }

                @media (max-width: 480px) {
                    .about-page .section-padding {
                        padding-top: 3.5rem;
                    }

                    .page-title {
                        margin-bottom: 2rem;
                    }

                    .sub-title {
                        font-size: 1.3rem;
                    }

                    .ted-social {
                        padding: 1.5rem 1rem;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .social-links a {
                        transition: none;
                    }

                    .social-links a:hover {
                        transform: none;
                    }
                }
            `})]})},qb=()=>a.jsx("main",{id:"main-content",tabIndex:-1,children:a.jsx(m0,{variant:"full"})}),ht={year2:{ja:"2年生",en:"Year 2"},year3:{ja:"3年生",en:"Year 3"},faculty:{ja:"教員",en:"Faculty"}},Qb=[{id:"haruki-kawamata",name:"Haruki Kawamata",grade:ht.year3,role:{ja:"ボードメンバー・オーガナイザー",en:"Board Member / Organizer"}},{id:"takuya-saeki",name:"Takuya Saeki",grade:ht.faculty,role:{ja:"共同オーガナイザー",en:"Co-organizer"}},{id:"hironori-sakai",name:"Hironori Sakai",grade:ht.year2,role:{ja:"ボードメンバー・運営（リーダー）・スピーカーチーム",en:"Board Member / Operation (Leader) / Speaker Team"}},{id:"tatsuaki-matsuda",name:"Tatsuaki Matsuda",grade:ht.year3,role:{ja:"ボードメンバー・テクノロジー・運営・スピーカーチーム",en:"Board Member / Technology / Operation / Speaker Team"}},{id:"yasuhiro-nanjo",name:"Yasuhiro Nanjo",grade:ht.year2,role:{ja:"テクノロジー（リーダー）・広報・運営・マネジメント・スピーカーチーム",en:"Technology (Leader) / Marketing / Operation / Management / Speaker Team"}},{id:"lyu-noguchi",name:"Lyu Noguchi",grade:ht.year3,role:{ja:"スピーカーチーム（リーダー）",en:"Speaker Team (Leader)"}},{id:"yunosuke-sato",name:"Yunosuke Sato",grade:ht.year3,role:{ja:"マネジメント・財務（リーダー）",en:"Management / Finance (Leader)"}},{id:"taisei-moriwaki",name:"Taisei Moriwaki",grade:ht.year3,role:{ja:"広報（リーダー）・運営",en:"Marketing (Leader) / Operation"}},{id:"keisuke-horikoshi",name:"Keisuke Horikoshi",grade:ht.year2,role:{ja:"監査",en:"Audit"}}],Xb=e=>e.trim().toLocaleLowerCase("en-US").replace(/(^|[\s'-])[a-z]/g,t=>t.toLocaleUpperCase("en-US")),Ih={ja:{eyebrow:"TEDxWUSHS Youth",year:"2026",fullTitle:"2026 Team",titleLead:"Our",titleAccent:"Team",memberList:"2026年チームメンバー一覧"},en:{eyebrow:"TEDxWUSHS Youth",year:"2026",fullTitle:"2026 Team",titleLead:"Our",titleAccent:"Team",memberList:"2026 team members"}},Jb=()=>{const{language:e}=ne(),t=rt(),n=Ih[e]??Ih.ja;return a.jsxs("main",{id:"main-content",className:"organizers-page",tabIndex:-1,children:[a.jsx("section",{className:"organizers-hero","aria-labelledby":"organizers-title",children:a.jsxs("div",{className:"container organizers-container",children:[a.jsxs(de.div,{className:"organizers-heading",initial:t?!1:{opacity:0,y:20},animate:{opacity:1,y:0},transition:t?{duration:0}:{duration:.55},children:[a.jsx("p",{className:"organizers-eyebrow brand-name",lang:"en",children:n.eyebrow}),a.jsxs("h1",{id:"organizers-title","aria-label":n.fullTitle,children:[a.jsx("span",{className:"organizers-year","aria-hidden":"true",children:n.year}),a.jsxs("span",{className:"organizers-title-text","aria-hidden":"true",children:[n.titleLead," ",a.jsx("span",{className:"highlight-red",children:n.titleAccent})]})]})]}),a.jsx(xi,{}),a.jsx("h2",{className:"visually-hidden",children:n.memberList}),a.jsx("ul",{className:"organizers-grid",children:Qb.map((r,i)=>a.jsxs(de.li,{className:"organizer-card",initial:t?!1:{opacity:0,y:24},whileInView:t?void 0:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:t?{duration:0}:{duration:.4,delay:i*.06},children:[a.jsxs("div",{className:"organizer-identity",children:[a.jsx("h3",{className:"organizer-name",lang:"en",children:Xb(r.name)}),a.jsx("span",{className:"organizer-grade",children:r.grade[e]??r.grade.ja})]}),a.jsxs("div",{className:"organizer-role-block",children:[a.jsx("span",{className:"organizer-role",lang:"en",children:r.role.en}),e==="ja"&&a.jsx("span",{className:"organizer-role-ja",children:r.role.ja})]})]},r.id))})]})}),a.jsx("style",{children:`
        .organizers-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at 88% 8%, rgb(var(--ted-red-rgb) / 0.11), transparent 28rem),
            var(--ted-black);
        }

        .organizers-hero {
          padding: 9.5rem 0 7rem;
        }

        .organizers-container {
          width: 100%;
        }

        .organizers-heading {
          max-width: 800px;
          margin: 0 auto clamp(3.5rem, 7vw, 5rem);
          text-align: center;
        }

        .organizers-eyebrow {
          margin-bottom: 0.85rem;
          color: var(--ted-red);
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .organizers-heading h1 {
          margin: 0;
          font-size: clamp(2.5rem, 7vw, 5rem);
          line-height: 1.05;
          text-wrap: balance;
        }

        .organizers-year {
          display: block;
          margin-bottom: 0.65rem;
          color: var(--ted-white);
          font-family: var(--font-main);
          font-size: clamp(0.95rem, 2vw, 1.2rem);
          font-weight: 800;
          letter-spacing: 0.18em;
          line-height: 1;
        }

        .organizers-title-text {
          display: block;
        }

        .organizers-grid {
          display: block;
          width: min(100%, 960px);
          margin: 0 auto;
          border-top: 1px solid rgba(255, 255, 255, 0.18);
        }

        .organizer-card {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(14rem, 0.85fr);
          align-items: center;
          gap: 1rem 3rem;
          min-width: 0;
          padding: clamp(1.75rem, 3.5vw, 2.5rem) 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.14);
          overflow-wrap: anywhere;
        }

        .organizer-role-block {
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          gap: 0.25rem;
          padding-left: 1rem;
          border-left: 3px solid var(--ted-red);
        }

        .organizer-identity {
          min-width: 0;
        }

        .organizer-grade {
          display: block;
          margin-top: 0.55rem;
          color: #aaa;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          line-height: 1.5;
        }

        .organizer-role {
          display: block;
          max-width: 100%;
          color: #f4f4f4;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          line-height: 1.5;
          text-transform: uppercase;
        }

        .organizer-role-ja {
          color: #aaa;
          font-size: 0.82rem;
          line-height: 1.6;
        }

        .organizer-name {
          max-width: 100%;
          font-size: clamp(1.55rem, 2.7vw, 2.15rem);
          line-height: 1.2;
          letter-spacing: -0.02em;
          text-transform: none;
          text-wrap: balance;
        }

        @media (max-width: 900px) {
          .organizers-hero {
            padding-top: 8rem;
          }

          .organizer-card {
            gap: 1rem 2rem;
          }
        }

        @media (max-width: 700px) {
          .organizers-hero {
            padding: 7.5rem 0 4.5rem;
          }

          .organizers-heading {
            margin-bottom: 2.75rem;
          }

          .organizer-card {
            grid-template-columns: minmax(0, 1fr);
            gap: 0.85rem;
            padding: 1.5rem 0;
          }

          .organizer-role-block {
            padding-left: 0.75rem;
          }
        }
      `})]})},Zb=()=>{const{language:e}=ne();return a.jsxs("main",{id:"main-content",tabIndex:-1,className:"join-us-page",children:[a.jsxs("header",{className:"join-us-page-heading container",children:[a.jsx("span",{lang:"en",children:"Be part of the community"}),a.jsxs("h1",{lang:"en",children:["Join ",a.jsx("span",{className:"highlight-red",children:"Us"})]}),a.jsx("p",{children:e==="ja"?"TEDxWUSHS Youthへの参加方法と最新情報をご案内します。":"Explore ways to take part in TEDxWUSHS Youth and receive the latest event updates."})]}),a.jsx(g0,{hideHeader:!0}),a.jsx("style",{children:`
                .join-us-page {
                    min-height: 80vh;
                    padding-top: 100px;
                    background: var(--ted-black);
                }

                .join-us-page-heading {
                    padding-top: 4rem;
                    text-align: center;
                }

                .join-us-page-heading > span {
                    display: block;
                    margin-bottom: 1rem;
                    color: var(--ted-red);
                    font-size: 0.75rem;
                    font-weight: 800;
                    letter-spacing: 0.25em;
                    text-transform: uppercase;
                }

                .join-us-page-heading h1 {
                    font-size: clamp(2.5rem, 7vw, 4rem);
                }

                .join-us-page-heading p {
                    max-width: 600px;
                    margin: 1.5rem auto 0;
                    color: #b3b3b3;
                    font-size: 1.1rem;
                }

                .join-us-page .join-us .recruitment-closed {
                    margin-top: 0;
                }

                @media (max-width: 640px) {
                    .join-us-page-heading {
                        padding-top: 2.5rem;
                    }
                }
            `})]})},Vh={ja:{steps:[{title:"Application",desc:"2026年開催分の応募受付は終了しました。"},{title:"Audition",desc:"運営チームとの面談で、アイデアを深掘りします。"},{title:"Curation",desc:"TEDxの基準に合わせて、スピーチを磨き上げます。"},{title:"The Stage",desc:"TEDxWUSHS Youthのステージで、世界へ発信！"}],lead:"2026年開催分のスピーカー募集は終了しました。",benefits:["世界中のTEDコミュニティにあなたのアイデアが届きます。","プロフェッショナルなコーチングでプレゼンスキルが向上します。","情熱的な仲間や観客との貴重な出会いがあります。"],closedMessage:"たくさんのご応募ありがとうございました。来年度（2027年）のスピーカー募集は公式SNSで行います。"},en:{steps:[{title:"Application",desc:"Applications for the 2026 event have closed."},{title:"Audition",desc:"Explore your idea in depth during an interview with the organizing team."},{title:"Curation",desc:"Refine your talk in line with TEDx standards."},{title:"The Stage",desc:"Share your idea with the world from the TEDxWUSHS Youth stage!"}],lead:"Speaker applications for the 2026 event have closed.",benefits:["Share your idea with the global TED community.","Improve your presentation skills through professional coaching.","Connect with passionate peers and audience members."],closedMessage:"Thank you to everyone who applied. Recruitment for 2027 speakers will take place on our official social media channels."}},ej=()=>{const{language:e}=ne(),t=Vh[e]??Vh.ja;return a.jsxs("main",{id:"main-content",tabIndex:-1,className:"recruit-page",style:{paddingTop:"120px"},children:[a.jsxs("div",{className:"container",children:[a.jsxs(Y,{to:"/join-us",className:"back-link",children:[a.jsx(r0,{size:16,"aria-hidden":"true"})," ",a.jsx("span",{lang:"en",children:"Back to Opportunities"})]}),a.jsxs("header",{className:"recruit-header",children:[a.jsx("div",{className:"icon-circle","aria-hidden":"true",children:a.jsx(a0,{size:48})}),a.jsxs("h1",{lang:"en",children:["Speaker ",a.jsx("span",{className:"highlight-red",children:"Applications"})]}),a.jsx("p",{className:"lead-text",children:t.lead})]}),a.jsx(xi,{}),a.jsxs("section",{className:"detail-section",children:[a.jsxs("h2",{lang:"en",children:["Why speak at ",a.jsx("span",{className:"brand-name",children:"TEDxWUSHS Youth"}),"?"]}),a.jsx("ul",{className:"benefits-grid",children:t.benefits.map(n=>a.jsxs("li",{className:"benefit-card",children:[a.jsx(HS,{color:"var(--ted-red)",size:24,"aria-hidden":"true"}),a.jsx("p",{children:n})]},n))})]}),a.jsxs("section",{className:"process-section",children:[a.jsx("h2",{lang:"en",children:"Application Process"}),a.jsx("ol",{className:"steps-container",children:t.steps.map((n,r)=>a.jsxs("li",{className:"step-item",children:[a.jsx("div",{className:"step-num","aria-hidden":"true",children:r+1}),a.jsx("h3",{lang:"en",children:n.title}),a.jsx("p",{children:n.desc})]},n.title))})]}),a.jsxs("section",{className:"cta-box","aria-labelledby":"speaker-applications-status",children:[a.jsx("h2",{id:"speaker-applications-status",lang:"en",children:"Applications Closed"}),a.jsx("p",{children:t.closedMessage}),a.jsx("span",{className:"closed-label",lang:"en",children:"2026 Speaker Applications Closed"})]})]}),a.jsx("style",{children:`
        .recruit-page {
          background-color: var(--ted-black);
          color: white;
          padding-bottom: 8rem;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          min-height: 44px;
          color: #aaa;
          font-weight: 600;
          margin-bottom: 3rem;
        }
        .back-link:hover { color: var(--ted-red); }
        .recruit-header { text-align: center; margin-bottom: 6rem; }
        .icon-circle {
          width: 100px;
          height: 100px;
          background: rgb(var(--ted-red-rgb) / 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
          color: var(--ted-red);
        }
        .recruit-header h1 { font-size: clamp(2.4rem, 9vw, 3.5rem); margin-bottom: 1.5rem; text-wrap: balance; }
        .lead-text { font-size: 1.5rem; color: #ccc; max-width: 700px; margin: 0 auto; }
        
        .detail-section, .process-section { margin-bottom: 8rem; }
        h2 { font-size: 2rem; margin-bottom: 3rem; text-align: center; }
        
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          list-style: none;
        }
        .benefit-card {
          background: #111;
          padding: 2.5rem;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: center;
          text-align: center;
        }

        .steps-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          list-style: none;
        }
        .step-item { text-align: center; }
        .step-num {
          width: 40px;
          height: 40px;
          background: var(--ted-red);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-weight: 800;
        }

        .cta-box {
          background: var(--ted-red);
          padding: 5rem;
          border-radius: 24px;
          text-align: center;
        }
        .cta-box h2 { font-size: 2.5rem; margin-bottom: 1rem; }
        .cta-box p { margin-bottom: 3rem; color: white; font-size: 1.2rem; }
        .closed-label {
          display: inline-block;
          background: white;
          color: var(--ted-red);
          padding: 1.2rem 2.5rem;
          border-radius: 100px;
          font-weight: 800;
          text-transform: uppercase;
          font-size: 0.9rem;
          max-width: 100%;
          white-space: normal;
          overflow-wrap: anywhere;
        }

        @media (max-width: 900px) {
          .benefits-grid, .steps-container { grid-template-columns: 1fr; }
          .recruit-header h1 { font-size: 2.5rem; }
          .cta-box { padding: 3rem 1.5rem; }
          .closed-label { padding: 1rem 1.25rem; font-size: 0.75rem; }
        }

        @media (max-width: 360px) {
          .cta-box { padding-right: 1rem; padding-left: 1rem; }
          .cta-box h2 { font-size: clamp(1.7rem, 9vw, 2.5rem); line-height: 1.1; }
          .benefit-card { padding: 2rem 1.25rem; }
          .closed-label { padding-right: 0.75rem; padding-left: 0.75rem; font-size: 0.7rem; }
        }
      `})]})},Uh={ja:{departmentDescriptions:["イベントの全体企画、進行、会場設営などを担います。","SNSやWebサイトを通じた広報活動、ブランディングを担います。","スピーカーの選定、スピーチ構成のサポートを担います。","デザイン、映像制作、Web開発などを担います。"],lead:"2026年開催分の運営チーム募集は終了しました。たくさんのご応募ありがとうございました。",values:["アイデアを広めること、新しい価値を創ることに情熱を持っている方。","多様な視点を尊重し、チームで最高のパフォーマンスを発揮できる方。","自ら考え、行動し、変化を恐れずに挑戦し続けられる方。"],closedMessage:"来年度（2027年）の運営チームメンバー募集は公式SNSで行います。"},en:{departmentDescriptions:["Oversees overall event planning, program flow, venue setup, and related operations.","Handles promotion and branding through social media and the website.","Handles speaker selection and supports the development of talks.","Handles design, video production, web development, and related creative work."],lead:"Recruitment for the 2026 organizing team has closed. Thank you to everyone who applied.",values:["Passionate about sharing ideas and creating new value.","Respects diverse perspectives and brings out the best in the team through collaboration.","Thinks and acts independently, and continues to take on challenges without fearing change."],closedMessage:"Recruitment for the 2027 organizing team will take place on our official social media channels."}},tj=()=>{const{language:e}=ne(),t=Uh[e]??Uh.ja,n=[{title:"Operations",icon:a.jsx(yl,{size:32,"aria-hidden":"true"}),desc:t.departmentDescriptions[0]},{title:"Marketing",icon:a.jsx(cb,{size:32,"aria-hidden":"true"}),desc:t.departmentDescriptions[1]},{title:"Speaker",icon:a.jsx(a0,{size:32,"aria-hidden":"true"}),desc:t.departmentDescriptions[2]},{title:"Creative",icon:a.jsx(KS,{size:32,"aria-hidden":"true"}),desc:t.departmentDescriptions[3]}];return a.jsxs("main",{id:"main-content",tabIndex:-1,className:"recruit-page",style:{paddingTop:"120px"},children:[a.jsxs("div",{className:"container",children:[a.jsxs(Y,{to:"/join-us",className:"back-link",children:[a.jsx(r0,{size:16,"aria-hidden":"true"})," ",a.jsx("span",{lang:"en",children:"Back to Opportunities"})]}),a.jsxs("header",{className:"recruit-header",children:[a.jsx("div",{className:"icon-circle","aria-hidden":"true",children:a.jsx(yl,{size:48})}),a.jsx("span",{className:"recruitment-status",lang:"en",children:"2026 Recruitment Closed"}),a.jsxs("h1",{lang:"en",children:["Join the ",a.jsx("span",{className:"highlight-red",children:"Team"})]}),a.jsx("p",{className:"lead-text",children:t.lead})]}),a.jsx(xi,{}),a.jsxs("section",{className:"detail-section",children:[a.jsx("h2",{lang:"en",children:"Departments"}),a.jsx("div",{className:"departments-grid",children:n.map((r,i)=>a.jsxs("div",{className:"dept-card",children:[a.jsx("div",{className:"dept-icon",children:r.icon}),a.jsx("h3",{lang:"en",children:r.title}),a.jsx("p",{children:r.desc})]},i))})]}),a.jsxs("section",{className:"why-join-section",children:[a.jsx("h2",{lang:"en",children:"What we look for"}),a.jsxs("div",{className:"values-grid",children:[a.jsxs("div",{className:"value-item",children:[a.jsx("h3",{lang:"en",children:"Passion"}),a.jsx("p",{children:t.values[0]})]}),a.jsxs("div",{className:"value-item",children:[a.jsx("h3",{lang:"en",children:"Collaboration"}),a.jsx("p",{children:t.values[1]})]}),a.jsxs("div",{className:"value-item",children:[a.jsx("h3",{lang:"en",children:"Proactive"}),a.jsx("p",{children:t.values[2]})]})]})]}),a.jsxs("section",{className:"cta-box","aria-labelledby":"team-recruitment-status-heading",children:[a.jsx("h2",{id:"team-recruitment-status-heading",lang:"en",children:"Recruitment Closed"}),a.jsx("p",{children:t.closedMessage}),a.jsx("span",{className:"closed-label",lang:"en",children:"2026 Team Recruitment Closed"})]})]}),a.jsx("style",{children:`
        .recruit-page { background: var(--ted-black); color: white; padding-bottom: 8rem; }
        .back-link { display: inline-flex; align-items: center; gap: 0.5rem; min-height: 44px; color: #aaa; font-weight: 600; margin-bottom: 3rem; }
        .back-link:hover { color: var(--ted-red); }
        .recruit-header { text-align: center; margin-bottom: 6rem; }
        .icon-circle { width: 100px; height: 100px; background: rgba(255, 255, 255, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 2rem; }
        .recruitment-status { display: inline-block; margin-bottom: 1rem; color: var(--ted-red); font-size: 0.75rem; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; }
        .recruit-header h1 { font-size: clamp(2.4rem, 9vw, 3.5rem); margin-bottom: 1.5rem; text-wrap: balance; }
        .lead-text { font-size: 1.3rem; color: #aaa; max-width: 650px; margin: 0 auto; }

        h2 { font-size: 2.2rem; margin-bottom: 4rem; text-align: center; }
        
        .departments-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2.5rem; margin-bottom: 8rem; }
        .dept-card { background: #111; padding: 3.5rem; border-radius: 20px; transition: var(--transition-smooth); border: 1px solid transparent; }
        .dept-card:hover { border-color: var(--ted-red); transform: translateY(-5px); }
        .dept-icon { color: var(--ted-red); margin-bottom: 1.5rem; }
        .dept-card h3 { font-size: 1.8rem; margin-bottom: 1rem; }
        .dept-card p { color: #888; line-height: 1.8; }

        .values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3rem; margin-bottom: 8rem; }
        .value-item h3 { color: var(--ted-red); margin-bottom: 1rem; font-size: 1.4rem; }
        .value-item p { color: #ccc; }

        .cta-box { border-radius: 24px; padding: 5rem; text-align: center; background: var(--ted-red); }
        .cta-box h2 { font-size: 2.5rem; margin-bottom: 1.2rem; }
        .cta-box p { color: white; font-size: 1.2rem; margin-bottom: 3rem; }
        .closed-label { display: inline-block; max-width: 100%; background: white; color: var(--ted-red); padding: 1.3rem 2.5rem; border-radius: 100px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em; overflow-wrap: anywhere; }

        @media (max-width: 768px) {
          .departments-grid, .values-grid { grid-template-columns: 1fr; }
          .recruit-header h1 { font-size: 2.5rem; }
          .cta-box { padding: 3rem 1.5rem; }
          .closed-label { padding: 1rem 1.25rem; font-size: 0.72rem; }
        }

        @media (max-width: 360px) {
          .cta-box { padding-right: 1rem; padding-left: 1rem; }
          .cta-box h2 { font-size: clamp(1.7rem, 9vw, 2.5rem); line-height: 1.1; }
          .dept-card { padding: 2rem 1.25rem; }
          .dept-card h3 { font-size: clamp(1.4rem, 8vw, 1.8rem); }
          .closed-label { padding-right: 0.75rem; padding-left: 0.75rem; font-size: 0.68rem; }
        }

        @media (prefers-reduced-motion: reduce) {
          .dept-card { transition: none; }
          .dept-card:hover { transform: none; }
        }
      `})]})},nj=()=>{const{language:e}=ne(),t=e==="ja";return a.jsx("main",{id:"main-content",tabIndex:-1,className:"archive-page",children:a.jsxs("div",{className:"container archive-heading",children:[a.jsx("p",{className:"archive-eyebrow",lang:"en",children:"TEDxWUSHS Youth 2026"}),a.jsx("h1",{children:t?"イベントは終了しました":"The event has concluded"}),a.jsx("p",{children:t?"ご参加・ご協力ありがとうございました。参加申込みの受付は終了しています。メインイベント当日の報告は近日公開予定です。":"Thank you to everyone who participated and supported us. Audience registration is closed. Our main event report is coming soon."}),a.jsx(Y,{className:"btn btn-primary",to:"/archives",children:"Event Archives"})]})})},v0="/assets/school-fest-2026-booth-D78qCxP1.jpg",rj=()=>{const{language:e}=ne(),t=e==="ja",n=[{title:t?"学院祭 — 英語ディベート":"Gakuinsai — English Debate",description:t?"学院祭での英語ディベートと会場の様子をご紹介します。":"Explore our English debates and scenes from the school festival.",image:v0,href:"/archives/2026/school-fest",status:t?"開催レポート":"Event report"},{title:"TEDxWUSHS Youth — Breakshot",description:t?"メインイベントは終了しました。ご参加・ご協力ありがとうございました。当日の報告は近日公開予定です。開催概要、登壇者、当日のプログラムをご覧いただけます。":"Our main event has concluded. Thank you to everyone who participated and supported us. The event report is coming soon; explore the event details, speakers, and program in the meantime.",image:h0,href:"/archives/2026/main-event",status:t?"当日の報告：近日公開":"Event report coming soon"}];return a.jsx("main",{id:"main-content",tabIndex:-1,className:"archive-page",children:a.jsxs("div",{className:"container",children:[a.jsxs("header",{className:"archive-heading",children:[a.jsx("p",{className:"archive-eyebrow",lang:"en",children:"Our past events"}),a.jsxs("h1",{lang:"en",children:["Event ",a.jsx("span",{className:"highlight-red",children:"Archives"})]}),a.jsx("p",{children:t?"これまでのイベントと、そこで生まれたアイデアを振り返ります。":"Look back at our events and the ideas they brought together."})]}),a.jsxs("section",{"aria-labelledby":"archive-2026-heading",children:[a.jsx("h2",{id:"archive-2026-heading",className:"archive-year",children:"2026"}),a.jsx("div",{className:"archive-grid",children:n.map(r=>a.jsxs("article",{className:"archive-card",children:[a.jsx("img",{src:r.image,alt:"",loading:"lazy"}),a.jsxs("div",{className:"archive-card__body",children:[a.jsx("p",{className:"archive-eyebrow",children:r.status}),a.jsx("h3",{children:r.title}),a.jsx("p",{children:r.description}),a.jsxs(Y,{to:r.href,children:[t?"記録を見る":"Explore the archive"," ",a.jsx(Gt,{size:18,"aria-hidden":"true"})]})]})]},r.href))})]})]})})},Oh={ja:[{question:"TEDxWUSHS Youthとは何ですか？",answer:"早稲田大学高等学院の生徒が独立して企画・運営するTEDxイベントです。『Ideas change everything.（アイデアは世界を変える）』という考えのもと、対話と変化につながるアイデアを若者の視点から届けます。"},{question:"参加対象者を教えてください。",answer:"2026年のイベントは終了し、参加申込みの受付も終了しました。当日の報告はイベントアーカイブで近日公開予定です。"},{question:"イベントでは何語が使用されますか？",answer:"日本語と英語のバイリンガルイベントを予定しています。日本語・英語のどちらで行われるトークにも、スライド上に字幕を付ける予定です。"},{question:"参加費はかかりますか？",answer:"参加費は無料です。"},{question:"ボランティアとして参加したいのですが、どうすればいいですか？",answer:"2026年開催分の運営チーム募集は終了しました。来年度（2027年）のスピーカー・運営チームメンバー募集は公式SNSで行います。"}],en:[{question:"What is TEDxWUSHS Youth?",answer:"TEDxWUSHS Youth is an independently organized TEDx event planned and run by students of Waseda University Senior High School. We believe that “Ideas change everything.” From a youth perspective, we share ideas that can spark dialogue and change."},{question:"Who can attend?",answer:"The 2026 event has concluded and audience registration is closed. The event report is coming soon in Event Archives."},{question:"What languages will be used at the event?",answer:"The event is planned to be bilingual in Japanese and English. For both Japanese- and English-language talks, we plan to display subtitles on the presentation slides."},{question:"Is there an admission fee?",answer:"The event is free to attend."},{question:"How can I participate as a volunteer?",answer:"Recruitment for the 2026 organizing team has closed. Recruitment for 2027 speakers and organizing team members will take place on our official social media channels."}]},ij={ja:"質問と回答",en:"Questions and Answers"},oj=({question:e,answer:t,id:n})=>{const[r,i]=w.useState(!1),o=rt(),s=`${n}-question`,l=`${n}-answer`;return a.jsxs("div",{className:"faq-item",children:[a.jsx("h3",{className:"faq-question-heading",children:a.jsxs("button",{id:s,type:"button",className:"faq-question",onClick:()=>i(!r),"aria-expanded":r,"aria-controls":l,children:[a.jsx("span",{children:e}),a.jsx("span",{className:`icon ${r?"open":""}`,"aria-hidden":"true",children:"+"})]})}),a.jsx(Hg,{children:r&&a.jsx(de.div,{className:"faq-answer",id:l,role:"region","aria-labelledby":s,initial:o?!1:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:o?0:.3},children:a.jsx("p",{children:t})})})]})},sj=({hideHeader:e=!1})=>{const{language:t}=ne(),n=Oh[t]??Oh.ja;return a.jsxs("section",{id:"faq",className:"faq section-padding","aria-labelledby":"faq-list-heading",children:[a.jsxs("div",{className:"container",children:[e?a.jsx("h2",{id:"faq-list-heading",className:"visually-hidden",children:ij[t]}):a.jsx("div",{className:"section-header",children:a.jsxs("h2",{id:"faq-list-heading",className:"section-title",lang:"en",children:["Frequently Asked ",a.jsx("span",{className:"highlight-red",children:"Questions"})]})}),a.jsx("div",{className:"faq-list",children:n.map((r,i)=>{const o=`faq-${t}-${i+1}`;return a.jsx(oj,{id:o,...r},o)})})]}),a.jsx("style",{children:`
        .faq {
          background-color: var(--ted-black);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .faq-list {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-item {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .faq-question-heading {
          font-family: inherit;
          letter-spacing: normal;
          text-transform: none;
        }

        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          padding: 2rem 0;
          text-align: left;
          font-size: 1.2rem;
          font-weight: 700;
          color: white;
          transition: color 0.3s;
        }

        .faq-question > span:first-child {
          min-width: 0;
          overflow-wrap: anywhere;
        }

        .faq-question:hover {
          color: var(--ted-red);
        }

        .faq-question:focus-visible {
          outline: 3px solid #fff;
          outline-offset: 4px;
          border-radius: 4px;
        }

        .icon {
          flex-shrink: 0;
          font-size: 1.5rem;
          transition: transform 0.3s;
        }

        .icon.open {
          transform: rotate(45deg);
          color: var(--ted-red);
        }

        .faq-answer {
          overflow: hidden;
        }

        .faq-answer p {
          padding-bottom: 2rem;
          color: #aaa;
          line-height: 1.8;
        }

        @media (prefers-reduced-motion: reduce) {
          .faq-question,
          .icon {
            transition: none;
          }
        }
      `})]})},aj=()=>{const e=rt();return a.jsxs("main",{id:"main-content",tabIndex:-1,className:"faq-page",children:[a.jsx("header",{className:"faq-page-heading container",children:a.jsxs("h1",{lang:"en",children:["Frequently Asked ",a.jsx("span",{className:"highlight-red",children:"Questions"})]})}),a.jsx(de.div,{initial:e?!1:{opacity:0},animate:{opacity:1},transition:{duration:e?0:.8},children:a.jsx(sj,{hideHeader:!0})}),a.jsx("style",{children:`
                .faq-page {
                    min-height: 80vh;
                    padding-top: 100px;
                    background-color: var(--ted-black);
                }

                .faq-page-heading {
                    padding-top: 4rem;
                    text-align: center;
                }

                .faq-page-heading h1 {
                    font-size: clamp(2.4rem, 7vw, 4rem);
                }

                @media (max-width: 640px) {
                    .faq-page-heading {
                        padding-top: 2.5rem;
                    }
                }
            `})]})},Fh={ja:{title:"ページが見つかりません",description:"指定されたページは移動または削除された可能性があります。",action:"ホームへ戻る"},en:{title:"Page Not Found",description:"The page may have been moved or removed.",action:"Return Home"}},lj=()=>{const{language:e}=ne(),t=Fh[e]??Fh.ja;return a.jsxs("main",{id:"main-content",tabIndex:-1,className:"not-found-page",children:[a.jsxs("div",{className:"container not-found-page__content",children:[a.jsx("p",{className:"not-found-page__code","aria-hidden":"true",children:"404"}),a.jsx("h1",{children:t.title}),a.jsx("p",{children:t.description}),a.jsx(Y,{to:"/",className:"not-found-page__link",children:t.action})]}),a.jsx("style",{children:`
        .not-found-page {
          display: grid;
          min-height: 75vh;
          padding-top: 100px;
          place-items: center;
          background: var(--ted-black);
        }

        .not-found-page__content {
          padding-top: 5rem;
          padding-bottom: 5rem;
          text-align: center;
        }

        .not-found-page__code {
          color: var(--ted-red);
          font-family: var(--font-heading);
          font-size: clamp(4rem, 20vw, 9rem);
          font-weight: 800;
          line-height: 0.9;
        }

        .not-found-page h1 {
          margin-top: 1.5rem;
          font-size: clamp(2rem, 8vw, 3.5rem);
          text-wrap: balance;
        }

        .not-found-page__content > p:not(.not-found-page__code) {
          max-width: 38rem;
          margin: 1.5rem auto 2rem;
          color: #aaa;
        }

        .not-found-page__link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 0.75rem 1.25rem;
          border: 2px solid var(--ted-white);
          border-radius: 4px;
          font-weight: 800;
        }

        .not-found-page__link:hover {
          background: var(--ted-white);
          color: var(--ted-black);
        }
      `})]})},cj=[{time:"13:30",event:"Doors Open",description:{ja:"開場",en:"Audience entry begins"}},{time:"14:00",event:"Opening",description:{ja:"開会・オープニング",en:"Opening remarks"}},{time:"14:10",event:"Speech 1",description:{ja:"武沢 護／早稲田大学高等学院 前学院長",en:"Mamoru Takezawa / Former Headmaster, Waseda University Senior High School"}},{time:"14:30",event:"Speech 2",description:{ja:"長谷川 慶佑／早稲田大学高等学院 1年",en:"Keisuke Hasegawa / First-year student, Waseda University Senior High School"}},{time:"14:45",event:"Speech 3",description:{ja:"堀瀬 善仁／早稲田大学高等学院 2年",en:"Yoshito Horise / Second-year student, Waseda University Senior High School"}},{time:"15:05",event:"Break",description:{ja:"休憩",en:"Intermission"}},{time:"15:20",event:"Speech 4",description:{ja:"榎本 隆之／早稲田大学高等学院 国語科教員",en:"Takayuki Enomoto / Japanese teacher, Waseda University Senior High School"}},{time:"15:40",event:"Speech 5",description:{ja:"黒木 勇人／早稲田大学 情報理工学科2年・学院卒業生",en:"Yuto Kuroki / Second-year student in Computer Science and Engineering at Waseda University; school alumnus"}},{time:"16:00",event:"Speech 6",description:{ja:"小暮 真久／社会起業家・学院卒業生",en:"Masahisa Kogure / Social entrepreneur; school alumnus"}},{time:"16:20",event:"Speech 7",description:{ja:"比留間 礼音／ベンチャーキャピタリスト・学院卒業生",en:"Reon Hiruma / Venture capitalist; school alumnus"}},{time:"16:30",event:"Closing",description:{ja:"閉会",en:"Closing remarks"}},{time:"16:40",event:"Workshop & Networking",description:{ja:"ワークショップ（交流会）",en:"Workshop and networking"}},{time:"17:40",event:"Program Ends",description:{ja:"終了",en:"Program concludes"}}],Wh={ja:{intro:"2026年10月31日のイベントは終了しました。ご参加・ご協力ありがとうございました。当日の報告は近日公開予定です。開催概要、登壇者、当日のプログラムを記録として掲載しています。",themeLabel:"Program theme",themeDescription:"予測できない変化を前に、常識の枠を越えて新しい方向を切り拓くアイデアを共有します。",detailsLabel:"プログラム概要",details:[{label:"開催日",value:"2026年10月31日（土）"},{label:"時間",value:"開場 13:30／開催 14:00〜18:00"},{label:"会場",value:"早稲田大学高等学院 講堂"},{label:"参加対象",value:"早稲田大学高等学院・高等学院中学部の生徒及びその保護者、早稲田大学高等学院のOB"},{label:"参加費",value:"無料"},{label:"言語",value:"日本語・英語"}],scheduleAction:"タイムテーブルを見る",speakerTitle:"Speaker Lineup",speakerDescription:"TEDxWUSHS Youth 2026に登壇した7名です。詳しい紹介文はSpeakersページでご覧いただけます。",speakerAction:"スピーカー詳細を見る",scheduleTitle:"Program Schedule",scheduleDescription:"当日のプログラムとして案内したタイムテーブルです。",scheduleLabel:"TEDxWUSHS Youth 2026 当日タイムテーブル",contactEyebrow:"Contact",contactTitle:"お問い合わせ",contactDescription:"イベントやアーカイブについてのご質問は、イベント事務局までご連絡ください。",contactEmailLabel:"イベント事務局へメールする"},en:{intro:"Our October 31, 2026 event has concluded. Thank you for joining and supporting us. The event report is coming soon. Explore the event details, speakers, and program below.",themeLabel:"Program theme",themeDescription:"Ideas that break beyond familiar boundaries and open new directions in an unpredictable world.",detailsLabel:"Program details",details:[{label:"Date",value:"Saturday, October 31, 2026"},{label:"Time",value:"Doors open 1:30 PM / Event 2:00–6:00 PM"},{label:"Venue",value:"Waseda University Senior High School Auditorium"},{label:"Audience",value:"Senior High School and Junior High School students, their parents or guardians, and alumni of Waseda University Senior High School"},{label:"Admission",value:"Free"},{label:"Languages",value:"Japanese and English"}],scheduleAction:"View the schedule",speakerTitle:"Speaker Lineup",speakerDescription:"Meet the seven speakers from TEDxWUSHS Youth 2026. Full profiles are available on the Speakers page.",speakerAction:"View speaker profiles",scheduleTitle:"Program Schedule",scheduleDescription:"The timetable published for the event is preserved below.",scheduleLabel:"TEDxWUSHS Youth 2026 program schedule",contactEyebrow:"Contact",contactTitle:"Questions about the event?",contactDescription:"For questions about the event or archives, please contact the TEDxWUSHS Youth team.",contactEmailLabel:"Email the event team"}},uj=()=>{const{language:e}=ne(),t=Wh[e]??Wh.ja,n=[...p0].filter(i=>i.published).sort((i,o)=>i.displayOrder-o.displayOrder),r=f0(n);return a.jsxs("main",{id:"main-content",tabIndex:-1,className:"event-page",children:[a.jsx("section",{className:"event-hero","aria-labelledby":"event-page-title",children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"event-hero__layout",children:[a.jsxs("header",{className:"event-hero__header",children:[a.jsx("p",{className:"event-eyebrow",lang:"en",children:"TEDxWUSHS Youth 2026"}),a.jsxs("h1",{id:"event-page-title",className:"event-hero__title",lang:"en",children:["2026 ",a.jsx("span",{children:"Main Event"})]}),a.jsx("p",{className:"event-hero__intro",children:t.intro}),a.jsx("div",{className:"event-hero__actions",children:a.jsxs("a",{className:"event-button event-button--secondary",href:"#event-schedule",children:[t.scheduleAction,a.jsx(Gt,{size:18,strokeWidth:2.5,"aria-hidden":"true"})]})}),a.jsx("p",{className:"event-hero__note",children:e==="ja"?"当日の報告：近日公開":"Event report coming soon"}),a.jsx(Y,{className:"event-text-link",to:"/archives",children:"← Event Archives"})]}),a.jsxs("aside",{className:"event-theme","aria-labelledby":"event-theme-heading",children:[a.jsx("p",{id:"event-theme-heading",className:"event-theme__label",lang:"en",children:t.themeLabel}),a.jsx("p",{className:"event-theme__name",lang:"en",children:"Breakshot"}),a.jsx("p",{className:"event-theme__description",children:t.themeDescription}),a.jsx("p",{className:"event-theme__statement",lang:"en",children:"Ideas change everything."})]})]}),a.jsx("dl",{className:"event-facts","aria-label":t.detailsLabel,children:t.details.map(i=>a.jsxs("div",{className:"event-facts__item",children:[a.jsx("dt",{children:i.label}),a.jsx("dd",{children:i.value})]},i.label))})]})}),a.jsx("section",{className:"event-section event-speakers","aria-labelledby":"event-speakers-title",children:a.jsxs("div",{className:"container",children:[a.jsxs("header",{className:"event-section__header",children:[a.jsx("p",{className:"event-eyebrow",lang:"en",children:"Meet the speakers"}),a.jsx("h2",{id:"event-speakers-title",lang:"en",children:t.speakerTitle}),a.jsx("p",{children:t.speakerDescription})]}),a.jsx("div",{className:"event-speakers__list",children:r.map((i,o)=>a.jsx("ul",{className:"event-speakers__row",children:i.map(s=>a.jsxs("li",{className:"event-speaker",children:[a.jsx("img",{src:s.image,alt:"",loading:"lazy",decoding:"async",style:{"--event-speaker-position":s.imagePosition}}),a.jsxs("div",{children:[a.jsx("h3",{children:s.name[e]??s.name.ja}),a.jsx("p",{children:s.role[e]??s.role.ja})]})]},s.id))},`event-speaker-row-${o+1}`))}),a.jsxs(Y,{className:"event-text-link",to:"/speakers",children:[t.speakerAction,a.jsx(Gt,{size:18,strokeWidth:2.5,"aria-hidden":"true"})]})]})}),a.jsx("section",{id:"event-schedule",className:"event-section event-schedule","aria-labelledby":"event-schedule-title",children:a.jsxs("div",{className:"container",children:[a.jsxs("header",{className:"event-section__header",children:[a.jsx("p",{className:"event-eyebrow",lang:"en",children:"October 31, 2026"}),a.jsx("h2",{id:"event-schedule-title",lang:"en",children:t.scheduleTitle}),a.jsx("p",{children:t.scheduleDescription})]}),a.jsx("ol",{className:"event-schedule__list","aria-label":t.scheduleLabel,children:cj.map(i=>a.jsxs("li",{className:"event-schedule__item",children:[a.jsx("time",{children:e==="en"&&i.timeEn?i.timeEn:i.time}),a.jsxs("div",{children:[a.jsx("h3",{lang:"en",children:i.event}),a.jsx("p",{children:i.description[e]??i.description.ja})]})]},`${i.time}-${i.event}`))})]})}),a.jsx("section",{className:"event-section event-contact","aria-labelledby":"event-contact-title",children:a.jsxs("div",{className:"container event-contact__layout",children:[a.jsx(s0,{size:34,strokeWidth:1.8,"aria-hidden":"true"}),a.jsxs("div",{children:[a.jsx("p",{className:"event-eyebrow",lang:"en",children:t.contactEyebrow}),a.jsx("h2",{id:"event-contact-title",children:t.contactTitle}),a.jsx("p",{children:t.contactDescription}),a.jsx("a",{href:"mailto:tedxwushs@gmail.com","aria-label":t.contactEmailLabel,children:"tedxwushs@gmail.com"})]})]})}),a.jsx("style",{children:`
        .event-page {
          background: var(--ted-black);
          color: var(--ted-white);
        }

        .event-hero {
          padding: 10rem 0 5rem;
          background:
            linear-gradient(120deg, rgb(var(--ted-red-rgb) / 0.13), transparent 36rem),
            var(--ted-black);
        }

        .event-hero__layout {
          display: grid;
          grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.55fr);
          gap: 3rem;
          align-items: end;
        }

        .event-eyebrow {
          margin-bottom: 0.8rem;
          color: var(--ted-red);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .event-hero__title {
          max-width: 12ch;
          font-size: clamp(3rem, 8vw, 6rem);
          line-height: 0.94;
          text-transform: uppercase;
        }

        .event-hero__title span {
          color: var(--ted-red);
        }

        .event-hero__intro {
          max-width: 54ch;
          margin-top: 1.5rem;
          color: #b8b8b8;
          font-size: 1.05rem;
          line-height: 1.8;
        }

        .event-hero__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 2rem;
        }

        .event-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          min-height: 48px;
          padding: 0.85rem 1.2rem;
          border-radius: 4px;
          font-weight: 800;
          transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
        }

        .event-button--primary {
          background: var(--ted-red);
          color: var(--ted-white);
        }

        .event-button--primary:hover {
          background: #c90022;
        }

        .event-button--secondary {
          border: 1px solid rgba(255, 255, 255, 0.38);
          color: var(--ted-white);
        }

        .event-button--secondary:hover {
          border-color: var(--ted-white);
          background: rgba(255, 255, 255, 0.08);
        }

        .event-button:focus-visible,
        .event-text-link:focus-visible,
        .event-contact a:focus-visible {
          outline: 3px solid var(--ted-white);
          outline-offset: 4px;
        }

        .event-hero__note {
          margin-top: 0.75rem;
          color: #8f8f8f;
          font-size: 0.85rem;
        }

        .event-theme {
          padding: 2rem 0 0 2rem;
          border-left: 3px solid var(--ted-red);
        }

        .event-theme__label {
          color: #969696;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .event-theme__name {
          margin-top: 0.35rem;
          font-family: var(--font-heading);
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 700;
          letter-spacing: -0.04em;
          line-height: 1;
        }

        .event-theme__description {
          margin-top: 1.25rem;
          color: #aaa;
          line-height: 1.75;
        }

        .event-theme__statement {
          margin-top: 1.25rem;
          color: var(--ted-red);
          font-weight: 800;
        }

        .event-facts {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 4.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
          border-bottom: 1px solid rgba(255, 255, 255, 0.16);
        }

        .event-facts__item {
          padding: 1.4rem 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .event-facts__item:not(:nth-child(3n + 1)) {
          border-left: 1px solid rgba(255, 255, 255, 0.1);
        }

        .event-facts__item:nth-last-child(-n + 3) {
          border-bottom: 0;
        }

        .event-facts dt {
          color: var(--ted-white);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.08em;
        }

        .event-facts dd {
          margin-top: 0.45rem;
          color: #aaa;
          line-height: 1.65;
        }

        .event-section {
          padding: 5rem 0;
        }

        .event-section__header {
          margin-bottom: 2.5rem;
          text-align: left;
        }

        .event-section__header h2 {
          max-width: 20ch;
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          line-height: 1;
          text-transform: uppercase;
        }

        .event-section__header > p:last-child {
          max-width: 62ch;
          margin-top: 1rem;
          color: #aaa;
          line-height: 1.75;
        }

        .event-speakers {
          background: #0b0b0b;
        }

        .event-speakers__list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .event-speakers__row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
        }

        .event-speaker {
          flex: 1 1 240px;
          max-width: 360px;
          min-width: 0;
        }

        .event-speaker img {
          display: block;
          width: 100%;
          aspect-ratio: 4 / 5;
          object-fit: cover;
          object-position: var(--event-speaker-position, 50% 50%);
          border-radius: min(1vw, 10px);
          outline: 1px solid rgba(255, 255, 255, 0.1);
          outline-offset: -1px;
        }

        .event-speaker div {
          padding-top: 1rem;
        }

        .event-speaker h3 {
          font-size: clamp(1.2rem, 2vw, 1.55rem);
          letter-spacing: 0;
          line-height: 1.25;
          text-transform: none;
        }

        .event-speaker p {
          margin-top: 0.35rem;
          color: #999;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .event-text-link {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          min-height: 48px;
          margin-top: 2.5rem;
          color: var(--ted-red);
          font-weight: 800;
        }

        .event-text-link:hover {
          color: var(--ted-white);
        }

        .event-schedule {
          background: var(--ted-dark-gray);
          scroll-margin-top: 96px;
        }

        .event-schedule__list {
          border-top: 1px solid rgba(255, 255, 255, 0.16);
        }

        .event-schedule__item {
          display: grid;
          grid-template-columns: minmax(130px, 0.25fr) minmax(0, 1fr);
          gap: 2rem;
          align-items: baseline;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .event-schedule__item time {
          color: var(--ted-red);
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
        }

        .event-schedule__item > div {
          display: grid;
          grid-template-columns: minmax(170px, 0.4fr) minmax(0, 1fr);
          gap: 1.5rem;
          align-items: baseline;
        }

        .event-schedule__item h3 {
          font-size: 1rem;
          letter-spacing: 0;
          text-transform: none;
        }

        .event-schedule__item p {
          color: #aaa;
          line-height: 1.6;
        }

        .event-contact {
          background: #0b0b0b;
        }

        .event-contact__layout {
          display: grid;
          grid-template-columns: 56px minmax(0, 1fr);
          gap: 1.5rem;
          align-items: start;
          padding-top: 2.25rem;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
        }

        .event-contact__layout > svg {
          color: var(--ted-red);
        }

        .event-contact h2 {
          font-size: clamp(2rem, 5vw, 3.5rem);
          line-height: 1;
        }

        .event-contact h2 + p {
          max-width: 62ch;
          margin-top: 1rem;
          color: #aaa;
          line-height: 1.75;
        }

        .event-contact a {
          display: inline-flex;
          align-items: center;
          min-height: 48px;
          margin-top: 0.8rem;
          color: var(--ted-red);
          font-weight: 800;
          overflow-wrap: anywhere;
        }

        .event-contact a:hover {
          color: var(--ted-white);
        }

        @media (max-width: 900px) {
          .event-hero__layout {
            grid-template-columns: 1fr;
          }

          .event-theme {
            max-width: 620px;
          }

          .event-facts {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .event-facts__item,
          .event-facts__item:nth-last-child(-n + 3) {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .event-facts__item:not(:nth-child(3n + 1)) {
            border-left: 0;
          }

          .event-facts__item:nth-child(even) {
            border-left: 1px solid rgba(255, 255, 255, 0.1);
          }

          .event-facts__item:nth-last-child(-n + 2) {
            border-bottom: 0;
          }

        }

        @media (max-width: 640px) {
          .event-hero {
            padding: 8rem 0 4rem;
          }

          .event-hero__title {
            font-size: clamp(2.7rem, 15vw, 4.25rem);
          }

          .event-hero__actions {
            align-items: stretch;
            flex-direction: column;
          }

          .event-button {
            width: 100%;
          }

          .event-theme {
            padding: 1.5rem 0 0 1.25rem;
          }

          .event-facts {
            grid-template-columns: 1fr;
            margin-top: 3.5rem;
          }

          .event-facts__item,
          .event-facts__item:nth-last-child(-n + 2) {
            padding: 1.2rem 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .event-facts__item:nth-child(even) {
            border-left: 0;
          }

          .event-facts__item:last-child {
            border-bottom: 0;
          }

          .event-section {
            padding: 4rem 0;
          }

          .event-speakers__list {
            gap: 1.5rem;
          }

          .event-speakers__row {
            gap: 1.5rem 1rem;
          }

          .event-schedule__item {
            grid-template-columns: 1fr;
            gap: 0.3rem;
            padding: 1.1rem 0;
          }

          .event-schedule__item > div {
            grid-template-columns: minmax(130px, 0.45fr) minmax(0, 1fr);
            gap: 1rem;
          }

          .event-contact__layout {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        @media (max-width: 400px) {
          .event-speaker {
            flex-basis: 100%;
            max-width: none;
            display: grid;
            grid-template-columns: 112px minmax(0, 1fr);
            gap: 1rem;
            align-items: center;
          }

          .event-speaker div {
            padding-top: 0;
          }

          .event-schedule__item > div {
            grid-template-columns: 1fr;
            gap: 0.2rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .event-button {
            transition: none;
          }
        }
      `})]})},Hh={ja:{eyebrow:"Gakuinsai 2026 / Feature",title:"学院祭で英語ディベートを開催",lead:"TEDxWUSHS Youthは学院祭期間中、頌栄女子学院高等学校、慶應義塾高等学校、早稲田大学本庄高等学院の3校を招き、社会や日常に関わる問いを英語で議論しました。競技として勝敗を決めながら、アイデアを問い直し、より深く理解する場を目指した企画です。",meta:"2026年10月10日・11日／早稲田大学高等学院 ゼミ室2",boothAlt:"学院祭のTEDxWUSHS Youth展示会場。黒板のロゴとBreakshotを表現したビリヤード台が設置されている。",boothCaption:"雄弁部と共同で使用したゼミ室2の展示会場。ビリヤード台は、TEDxWUSHS Youth 2026のテーマ「Breakshot」を表現しています。",contentsLabel:"この記事の内容",chapters:[{number:"01",href:"#overview",title:"学院祭で英語ディベートを開催",description:"開催概要・対戦校・試合結果"},{number:"02",href:"#about-tedx",title:"TED/TEDxとは",description:"TEDの使命と、地域からアイデアを広めるTEDx"},{number:"03",href:"#why-debate",title:"TED/TEDxがディベートを行う理由",description:"Debateの理念と、今回の工夫"}],overview:{number:"01",eyebrow:"Event report",title:"学院祭で英語ディベートを開催",intro:"10月10日と11日の2日間、TEDxWUSHS Youthは雄弁部と共同でゼミ室2を使用し、団体紹介と哲学的英語ディベートを実施しました。頌栄女子学院高等学校、慶應義塾高等学校、早稲田大学本庄高等学院ESSを迎え、3つの論題について議論しました。",detailsLabel:"開催概要",details:[{term:"開催日",description:"2026年10月10日（土）・11日（日）"},{term:"会場",description:"早稲田大学高等学院 ゼミ室2"},{term:"実施内容",description:"団体紹介・哲学的英語ディベート"},{term:"共同展示",description:"早稲田大学高等学院 雄弁部"}],matchesLabel:"対戦記録",dateLabel:"日時",opponentLabel:"対戦校",motionLabel:"論題",positionLabel:"両校の立場",resultLabel:"結果",leafletAlt:"TEDxWUSHS Youth学院祭企画「English Debate」の案内チラシ",leafletCaption:"学院祭で配布・掲示したEnglish Debateの案内チラシ。"},aboutTedx:{number:"02",eyebrow:"TED and TEDx",title:"TED/TEDxとは",intro:"TEDとは、1984年にアメリカで始まったカンファレンスに端を発する非営利組織です。最初のカンファレンスは、カリフォルニア州モントレーで開催されました。",acronymLead:"TEDという名称は、次の3つの言葉に由来します。",acronym:[{initial:"T",term:"Technology",translation:"テクノロジー"},{initial:"E",term:"Entertainment",translation:"エンターテインメント"},{initial:"D",term:"Design",translation:"デザイン"}],body:"技術・エンターテインメント・デザインという3領域を結び付ける場として始まり、現在では分野を越えて、世界をより深く理解するきっかけとなるアイデアを届けています。",tedxBody:"TEDxは、TEDの精神を地域のコミュニティへ届けるための草の根の取り組みです。TEDから付与された無償ライセンスのもと、各地域のチームが独立して企画・運営し、その地域から生まれるアイデアや対話を広げます。TEDxWUSHS Youthも、その一つです。",quote:"Ideas change everything.",quoteTranslation:"アイデアは世界を変える",dialogueTitle:"アイデアが、対話と変化につながるまで",dialogue:["ここで重要なのは、TEDが優れた知識や面白いアイデアを一方的に発信することだけを目指しているわけではないという点です。","スピーカーが届けたアイデアをきっかけに、オーディエンス層に応じてスピーカー/オーディエンスの間に深い交流と対話が生まれる。そして、そのアイデアが実際のオーディエンスのアクションにつながっていく。TEDが重視するのは、そうしたアイデアの可能性です。"],watchTitle:"実際のTED/TEDxを見てみる",watchIntro:"まだイメージが湧かない方は、実際のTED TalkとTEDx Talkをご覧ください。",watchOnYouTube:"YouTubeで見る",videos:[{label:"TED Talk / 日本語字幕",title:"ジュリアン・トレジャー：人を惹きつける話し方",embedUrl:"https://www.youtube-nocookie.com/embed/eIho2S0ZahI?cc_load_policy=1&cc_lang_pref=ja&hl=ja&origin=https%3A%2F%2Fwww.tedxwushs.com&rel=0",youtubeUrl:"https://www.youtube.com/watch?v=eIho2S0ZahI"},{label:"TEDxSapporo",title:"思うは招く｜植松 努",embedUrl:"https://www.youtube-nocookie.com/embed/gBumdOWWMhY?origin=https%3A%2F%2Fwww.tedxwushs.com&rel=0",youtubeUrl:"https://www.youtube.com/watch?v=gBumdOWWMhY"}]},whyDebate:{number:"03",eyebrow:"Debate and dialogue",title:"TED/TEDxがディベートを行う理由",intro:"ここで、今回の英語ディベート企画とTEDの関係に戻りましょう。TEDは公式のCuration Guidelinesで、「Debate（討論）」を価値の一つとして明確に掲げています。",body:"TEDの精神の中にあるDebateは、一般的な競技英語ディベートのように、勝敗や最終的な結論だけを求めるものではありません。TEDは懐疑的な視点や批判的な検討を歓迎し、それらをアイデアの改善や、見落としていた課題の発見につなげます。同時に、相互尊重を前提とし、差別やヘイトスピーチを認めていません。今回の企画でも、ディベート参加者をアイデアを届ける話者として捉えると同時に、オーディエンスの立場を踏まえたうえでの議論を意識し、扱うアイデアに深みを与えることを重視しました。そして、特にDebateの中でも質問時間を設け、オーディエンスを取り込んだ議論にすることができました。また、異なる前提から議論が始まり、主張が十分に噛み合わない場面もありましたが、それ含めオーディエンスに新しい発見をもたらすことができ有意義な会になったと思います。",practiceTitle:"今回の工夫",practices:["立論と反論は英語で行い、論点を言葉にして明確にする。","試合中に質問時間を設け、状況に応じて日本語での質問も受け付ける。"]},programAction:"イベントアーカイブに戻る",references:{eyebrow:"Sources",title:"参考資料",description:"TED/TEDxおよびDebateに関する記述は、以下のTED公式資料を参照しています。",items:[{title:"TED — About",description:"TEDの使命と活動について",href:"https://www.ted.com/about"},{title:"History of TED",description:"1984年の創設とカンファレンスの歩みについて",href:"https://www.ted.com/about/our-organization/history-of-ted"},{title:"TED Conferences",description:"Technology・Entertainment・Designという名称の由来について",href:"https://www.ted.com/about/conferences"},{title:"TEDx Program",description:"TEDxの仕組みと地域コミュニティでの役割について",href:"https://www.ted.com/tedx"},{title:"TED’s Curation Guidelines",description:"Debate、相互尊重、ヘイトスピーチに関する方針",href:"https://www.ted.com/about/our-organization/how-ted-works/ted-s-curation-guidelines"}]}},en:{eyebrow:"Gakuinsai 2026 / Feature",title:"English debates at Gakuinsai 2026",lead:"During Gakuinsai, TEDxWUSHS Youth welcomed Shoei Girls’ Senior High School, Keio Senior High School, and Waseda University Honjo Senior High School for English debates on questions connected to society and everyday life. The event kept the competitive format while creating space to re-examine ideas and understand them more deeply.",meta:"October 10–11, 2026 / Seminar Room 2, Waseda University Senior High School",boothAlt:"The TEDxWUSHS Youth exhibition at Gakuinsai, with a logo on the blackboard and a billiards table representing Breakshot.",boothCaption:"The exhibition space shared with the school debate club. The billiards table represented “Breakshot,” the theme of TEDxWUSHS Youth 2026.",contentsLabel:"In this feature",chapters:[{number:"01",href:"#overview",title:"English debates at Gakuinsai",description:"Event details, participating schools, and results"},{number:"02",href:"#about-tedx",title:"What are TED and TEDx?",description:"TED’s mission and how TEDx carries ideas into local communities"},{number:"03",href:"#why-debate",title:"Why TED/TEDx engages in debate",description:"The idea of Debate and what we tried"}],overview:{number:"01",eyebrow:"Event report",title:"English debates at Gakuinsai",intro:"On October 10 and 11, TEDxWUSHS Youth shared Seminar Room 2 with the school debate club for an introduction to our activities and three philosophical English debates. We welcomed Shoei Girls’ Senior High School, Keio Senior High School, and Waseda University Honjo Senior High School ESS.",detailsLabel:"Event details",details:[{term:"Dates",description:"Saturday, October 10 and Sunday, October 11, 2026"},{term:"Venue",description:"Seminar Room 2, Waseda University Senior High School"},{term:"Program",description:"Organization showcase and philosophical English debates"},{term:"Shared with",description:"Waseda University Senior High School Debate Club"}],matchesLabel:"Debate record",dateLabel:"Date and time",opponentLabel:"Opponent",motionLabel:"Motion",positionLabel:"Positions",resultLabel:"Result",leafletAlt:"Flyer for the TEDxWUSHS Youth English Debate program at Gakuinsai 2026",leafletCaption:"The English Debate flyer displayed and distributed at Gakuinsai."},aboutTedx:{number:"02",eyebrow:"TED and TEDx",title:"What are TED and TEDx?",intro:"TED is a nonprofit organization that traces its roots to a conference first held in the United States in 1984. The first conference took place in Monterey, California.",acronymLead:"The name TED comes from three words:",acronym:[{initial:"T",term:"Technology",translation:"Technology"},{initial:"E",term:"Entertainment",translation:"Entertainment"},{initial:"D",term:"Design",translation:"Design"}],body:"TED began by bringing together technology, entertainment, and design. Today, its work reaches across disciplines to share ideas that help people understand the world more deeply.",tedxBody:"TEDx is a grassroots initiative that brings the spirit of TED to local communities. Under a free license granted by TED, local teams independently organize events that uncover ideas and create conversation in their communities. TEDxWUSHS Youth is one of those independently organized events.",quote:"Ideas change everything.",quoteTranslation:"アイデアは世界を変える",dialogueTitle:"From an idea to dialogue and change",dialogue:["What matters is that TED is not simply about broadcasting excellent knowledge or interesting ideas in one direction.","An idea shared by a speaker can create deep exchange and dialogue between speakers and audience members in ways that reflect the audience’s background. The idea can then lead to real action by the audience. TED places value on this wider potential of ideas."],watchTitle:"Watch TED and TEDx in action",watchIntro:"If the distinction still feels abstract, these TED and TEDx Talks offer two concrete examples.",watchOnYouTube:"Watch on YouTube",videos:[{label:"TED Talk / Japanese subtitles",title:"How to speak so that people want to listen | Julian Treasure",embedUrl:"https://www.youtube-nocookie.com/embed/eIho2S0ZahI?cc_load_policy=1&cc_lang_pref=ja&hl=ja&origin=https%3A%2F%2Fwww.tedxwushs.com&rel=0",youtubeUrl:"https://www.youtube.com/watch?v=eIho2S0ZahI"},{label:"TEDxSapporo",title:"Hope invites | Tsutomu Uematsu",embedUrl:"https://www.youtube-nocookie.com/embed/gBumdOWWMhY?origin=https%3A%2F%2Fwww.tedxwushs.com&rel=0",youtubeUrl:"https://www.youtube.com/watch?v=gBumdOWWMhY"}]},whyDebate:{number:"03",eyebrow:"Debate and dialogue",title:"Why TED/TEDx engages in debate",intro:"Returning to the relationship between this English debate project and TED, TED explicitly identifies “Debate” as one of its values in its official Curation Guidelines.",body:"Debate within the spirit of TED differs from conventional competitive English debate focused only on a winner or a final conclusion. TED welcomes skepticism and critical examination as ways to improve an idea or reveal its flaws, while requiring mutual respect and rejecting bigotry and hate speech. In this project, we treated each participant as a speaker carrying an idea while also shaping the discussion around the audience’s perspective, so that the ideas being examined could gain greater depth. In particular, we included question time to bring the audience directly into the discussion. At times, arguments began from different assumptions and did not fully meet; even those moments offered the audience new discoveries and helped make the event meaningful.",practiceTitle:"What we tried",practices:["Cases and rebuttals were delivered in English to make each line of reasoning explicit.","Question time was built into the matches, with Japanese questions accepted when appropriate."]},programAction:"Back to Event Archives",references:{eyebrow:"Sources",title:"References",description:"Our descriptions of TED, TEDx, and Debate draw on the following official TED sources.",items:[{title:"TED — About",description:"TED’s mission and work",href:"https://www.ted.com/about"},{title:"History of TED",description:"TED’s origins in 1984 and the history of its conference",href:"https://www.ted.com/about/our-organization/history-of-ted"},{title:"TED Conferences",description:"The origin of the name Technology, Entertainment, and Design",href:"https://www.ted.com/about/conferences"},{title:"TEDx Program",description:"How TEDx works in local communities",href:"https://www.ted.com/tedx"},{title:"TED’s Curation Guidelines",description:"Guidance on debate, mutual respect, and hate speech",href:"https://www.ted.com/about/our-organization/how-ted-works/ted-s-curation-guidelines"}]}}},dj=[{date:{ja:"10月10日（土）12:00–13:00",en:"Saturday, October 10 / 12:00–1:00 PM"},opponent:{ja:"頌栄女子学院高等学校",en:"Shoei Girls’ Senior High School"},motionJa:"日本はボランティア（社会奉仕）活動を高校卒業の要件とするべきである。",motionEn:"Japan should make community service a requirement for high school graduation.",positions:[{school:{ja:"頌栄女子学院高等学校",en:"Shoei Girls’ Senior High School"},stance:{ja:"ボランティア活動の必修化に肯定",en:"Supports requiring volunteer service for graduation"}},{school:{ja:"早稲田大学高等学院",en:"Waseda University Senior High School"},stance:{ja:"ボランティア活動の必修化に否定",en:"Opposes requiring volunteer service for graduation"}}],result:{ja:"頌栄女子学院高等学校の勝利",en:"Shoei Girls’ Senior High School won"}},{date:{ja:"10月11日（日）11:30–12:30",en:"Sunday, October 11 / 11:30 AM–12:30 PM"},opponent:{ja:"慶應義塾高等学校",en:"Keio Senior High School"},motionJa:"日本は高所得者に対する所得税を引き上げるべきである。",motionEn:"Japan should significantly increase income taxes on high-income earners.",positions:[{school:{ja:"慶應義塾高等学校",en:"Keio Senior High School"},stance:{ja:"高所得者への所得税引き上げに賛成",en:"Supports raising income taxes on high-income earners"}},{school:{ja:"早稲田大学高等学院",en:"Waseda University Senior High School"},stance:{ja:"高所得者への所得税引き上げに反対",en:"Opposes raising income taxes on high-income earners"}}],result:{ja:"慶應義塾高等学校の勝利",en:"Keio Senior High School won"}},{date:{ja:"10月11日（日）14:00–15:00",en:"Sunday, October 11 / 2:00–3:00 PM"},opponent:{ja:"早稲田大学本庄高等学院 ESS",en:"Waseda University Honjo Senior High School ESS"},motionJa:"恋愛より友情を優先すべきである。",motionEn:"This House believes that friendship is more important than romantic relationships.",positions:[{school:{ja:"早稲田大学本庄高等学院 ESS",en:"Waseda University Honjo Senior High School ESS"},stance:{ja:"恋愛関係を重視する立場",en:"Prioritizes romantic relationships"}},{school:{ja:"早稲田大学高等学院",en:"Waseda University Senior High School"},stance:{ja:"友情を重視する立場",en:"Prioritizes friendship"}}],result:{ja:"早稲田大学高等学院の勝利",en:"Waseda University Senior High School won"}}],hj=()=>{const{language:e}=ne(),t=Hh[e]??Hh.ja;return a.jsxs("main",{id:"main-content",tabIndex:-1,className:"school-fest-page",children:[a.jsxs("article",{children:[a.jsx("header",{className:"school-fest-hero",children:a.jsxs("div",{className:"container school-fest-hero__layout",children:[a.jsxs("div",{className:"school-fest-hero__copy",children:[a.jsx("p",{className:"school-fest-eyebrow",lang:"en",children:t.eyebrow}),a.jsx("h1",{children:t.title}),a.jsx("p",{className:"school-fest-hero__lead",children:t.lead}),a.jsx("p",{className:"school-fest-hero__meta",children:t.meta})]}),a.jsxs("figure",{className:"school-fest-hero__media",children:[a.jsx("img",{src:v0,alt:t.boothAlt}),a.jsx("figcaption",{children:t.boothCaption})]})]})}),a.jsx("nav",{className:"school-fest-contents","aria-label":t.contentsLabel,children:a.jsxs("div",{className:"container",children:[a.jsx("p",{className:"school-fest-contents__label",children:t.contentsLabel}),a.jsx("ol",{children:t.chapters.map(n=>a.jsx("li",{children:a.jsxs("a",{href:n.href,children:[a.jsx("span",{className:"school-fest-contents__number","aria-hidden":"true",children:n.number}),a.jsxs("span",{children:[a.jsx("strong",{children:n.title}),a.jsx("small",{children:n.description})]})]})},n.number))})]})}),a.jsx("section",{id:"overview",className:"school-fest-section school-fest-section--light","aria-labelledby":"overview-title",children:a.jsxs("div",{className:"container",children:[a.jsxs("header",{className:"school-fest-section__header",children:[a.jsx("span",{className:"school-fest-section__number","aria-hidden":"true",children:t.overview.number}),a.jsxs("div",{children:[a.jsx("p",{className:"school-fest-eyebrow",lang:"en",children:t.overview.eyebrow}),a.jsx("h2",{id:"overview-title",children:t.overview.title}),a.jsx("p",{children:t.overview.intro})]})]}),a.jsx("dl",{className:"school-fest-facts","aria-label":t.overview.detailsLabel,children:t.overview.details.map(n=>a.jsxs("div",{children:[a.jsx("dt",{children:n.term}),a.jsx("dd",{children:n.description})]},n.term))}),a.jsxs("div",{className:"school-fest-overview__layout",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"school-fest-subheading",children:t.overview.matchesLabel}),a.jsx("ol",{className:"school-fest-matches",children:dj.map((n,r)=>a.jsxs("li",{children:[a.jsx("span",{className:"school-fest-match__index","aria-hidden":"true",children:String(r+1).padStart(2,"0")}),a.jsxs("div",{className:"school-fest-match__body",children:[a.jsxs("dl",{children:[a.jsxs("div",{children:[a.jsx("dt",{children:t.overview.dateLabel}),a.jsx("dd",{children:n.date[e]??n.date.ja})]}),a.jsxs("div",{children:[a.jsx("dt",{children:t.overview.opponentLabel}),a.jsx("dd",{children:n.opponent[e]??n.opponent.ja})]})]}),a.jsxs("div",{className:"school-fest-match__motion",children:[a.jsx("span",{children:t.overview.motionLabel}),a.jsx("p",{children:e==="en"?n.motionEn:n.motionJa}),a.jsx("p",{lang:e==="en"?"ja":"en",children:e==="en"?n.motionJa:n.motionEn})]}),a.jsxs("div",{className:"school-fest-match__positions",children:[a.jsx("span",{children:t.overview.positionLabel}),a.jsx("dl",{children:n.positions.map(i=>a.jsxs("div",{children:[a.jsx("dt",{children:i.school[e]??i.school.ja}),a.jsx("dd",{children:i.stance[e]??i.stance.ja})]},i.school.en))})]}),a.jsxs("p",{className:"school-fest-match__result",children:[a.jsx("span",{children:t.overview.resultLabel}),n.result[e]??n.result.ja]})]})]},n.motionEn))})]}),a.jsxs("figure",{className:"school-fest-leaflet",children:[a.jsx("img",{src:xl,alt:t.overview.leafletAlt,loading:"lazy",decoding:"async"}),a.jsx("figcaption",{children:t.overview.leafletCaption})]})]})]})}),a.jsx("section",{id:"about-tedx",className:"school-fest-section school-fest-section--dark","aria-labelledby":"about-tedx-title",children:a.jsxs("div",{className:"container school-fest-rationale",children:[a.jsxs("header",{className:"school-fest-section__header",children:[a.jsx("span",{className:"school-fest-section__number","aria-hidden":"true",children:t.aboutTedx.number}),a.jsxs("div",{children:[a.jsx("p",{className:"school-fest-eyebrow",lang:"en",children:t.aboutTedx.eyebrow}),a.jsx("h2",{id:"about-tedx-title",children:t.aboutTedx.title})]})]}),a.jsxs("div",{className:"school-fest-rationale__grid",children:[a.jsxs("div",{className:"school-fest-rationale__copy",children:[a.jsx("p",{children:t.aboutTedx.intro}),a.jsx("p",{children:t.aboutTedx.acronymLead}),a.jsx("dl",{className:"school-fest-acronym",children:t.aboutTedx.acronym.map(n=>a.jsxs("div",{children:[a.jsx("dt",{children:n.initial}),a.jsxs("dd",{children:[a.jsx("strong",{lang:"en",children:n.term}),n.translation!==n.term&&a.jsx("span",{children:n.translation})]})]},n.initial))}),a.jsx("p",{children:t.aboutTedx.body}),a.jsx("p",{children:t.aboutTedx.tedxBody})]}),a.jsxs("blockquote",{className:"school-fest-quote",children:[a.jsx("p",{lang:"en",children:t.aboutTedx.quote}),a.jsx("footer",{children:t.aboutTedx.quoteTranslation})]})]}),a.jsxs("div",{className:"school-fest-dialogue",children:[a.jsx("h3",{children:t.aboutTedx.dialogueTitle}),a.jsx("div",{children:t.aboutTedx.dialogue.map(n=>a.jsx("p",{children:n},n))})]}),a.jsxs("section",{className:"school-fest-watch","aria-labelledby":"school-fest-watch-title",children:[a.jsxs("header",{children:[a.jsx("p",{className:"school-fest-eyebrow",lang:"en",children:"Watch"}),a.jsx("h3",{id:"school-fest-watch-title",children:t.aboutTedx.watchTitle}),a.jsx("p",{children:t.aboutTedx.watchIntro})]}),a.jsx("div",{className:"school-fest-watch__grid",children:t.aboutTedx.videos.map(n=>a.jsxs("figure",{children:[a.jsx("div",{className:"school-fest-video",children:a.jsx("iframe",{src:n.embedUrl,title:n.title,loading:"lazy",referrerPolicy:"strict-origin-when-cross-origin",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),a.jsxs("figcaption",{children:[a.jsx("span",{children:n.label}),a.jsx("strong",{children:n.title}),a.jsxs("a",{href:n.youtubeUrl,target:"_blank",rel:"noopener noreferrer",children:[t.aboutTedx.watchOnYouTube,a.jsx(vl,{size:17,strokeWidth:2.25,"aria-hidden":"true"})]})]})]},n.youtubeUrl))})]})]})}),a.jsx("section",{id:"why-debate",className:"school-fest-section school-fest-section--light","aria-labelledby":"why-debate-title",children:a.jsxs("div",{className:"container",children:[a.jsxs("header",{className:"school-fest-section__header",children:[a.jsx("span",{className:"school-fest-section__number","aria-hidden":"true",children:t.whyDebate.number}),a.jsxs("div",{children:[a.jsx("p",{className:"school-fest-eyebrow",lang:"en",children:t.whyDebate.eyebrow}),a.jsx("h2",{id:"why-debate-title",children:t.whyDebate.title}),a.jsx("p",{children:t.whyDebate.intro})]})]}),a.jsxs("div",{className:"school-fest-debate-context",children:[a.jsx("p",{children:t.whyDebate.body}),a.jsxs("section",{"aria-labelledby":"practice-title",children:[a.jsx("h3",{id:"practice-title",children:t.whyDebate.practiceTitle}),a.jsx("ol",{children:t.whyDebate.practices.map((n,r)=>a.jsxs("li",{children:[a.jsx("span",{"aria-hidden":"true",children:String(r+1).padStart(2,"0")}),a.jsx("p",{children:n})]},n))})]})]}),a.jsxs(Y,{className:"school-fest-program-link",to:"/archives",children:[t.programAction,a.jsx(Gt,{size:20,strokeWidth:2.5,"aria-hidden":"true"})]})]})}),a.jsx("section",{className:"school-fest-references","aria-labelledby":"school-fest-references-title",children:a.jsxs("div",{className:"container",children:[a.jsxs("header",{children:[a.jsx("p",{className:"school-fest-eyebrow",lang:"en",children:t.references.eyebrow}),a.jsx("h2",{id:"school-fest-references-title",children:t.references.title}),a.jsx("p",{children:t.references.description})]}),a.jsx("ol",{children:t.references.items.map((n,r)=>a.jsx("li",{children:a.jsxs("a",{href:n.href,target:"_blank",rel:"noopener noreferrer",children:[a.jsx("span",{"aria-hidden":"true",children:String(r+1).padStart(2,"0")}),a.jsxs("span",{children:[a.jsx("strong",{children:n.title}),a.jsx("small",{children:n.description})]}),a.jsx(vl,{size:19,strokeWidth:2.25,"aria-hidden":"true"})]})},n.href))})]})})]}),a.jsx("style",{children:`
        .school-fest-page {
          width: 100%;
          max-width: 100%;
          min-height: 100vh;
          background: var(--ted-black);
          color: var(--ted-white);
          overflow-x: hidden;
        }

        @supports (overflow-x: clip) {
          .school-fest-page {
            overflow-x: clip;
          }
        }

        .school-fest-page article,
        .school-fest-hero__copy,
        .school-fest-hero__media,
        .school-fest-section__header > div,
        .school-fest-match__body,
        .school-fest-debate-context section {
          min-width: 0;
        }

        .school-fest-page h1,
        .school-fest-page h2,
        .school-fest-page h3,
        .school-fest-page p,
        .school-fest-page dd,
        .school-fest-page a {
          overflow-wrap: anywhere;
        }

        .school-fest-page h1,
        .school-fest-page h2,
        .school-fest-page h3 {
          text-transform: none;
          text-wrap: pretty;
        }

        .school-fest-hero {
          padding: 10rem 0 5rem;
          background:
            linear-gradient(130deg, rgb(var(--ted-red-rgb) / 0.14), transparent 34rem),
            var(--ted-black);
        }

        .school-fest-hero__layout {
          display: grid;
          grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
          gap: 4rem;
          align-items: center;
        }

        .school-fest-eyebrow {
          color: var(--ted-red);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .school-fest-hero h1 {
          max-width: 11ch;
          margin-top: 1rem;
          font-size: clamp(3rem, 7vw, 6rem);
          font-weight: 700;
          letter-spacing: -0.045em;
          line-height: 0.98;
        }

        .school-fest-hero__lead {
          max-width: 58ch;
          margin-top: 1.75rem;
          color: #c8c8c8;
          font-size: 1.05rem;
          line-height: 1.8;
        }

        .school-fest-hero__meta {
          margin-top: 1.5rem;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
          color: #9c9c9c;
          font-size: 0.9rem;
          line-height: 1.65;
        }

        .school-fest-hero__media img {
          display: block;
          width: 100%;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          outline: 1px solid rgba(255, 255, 255, 0.12);
          outline-offset: -1px;
        }

        .school-fest-hero figcaption,
        .school-fest-leaflet figcaption {
          margin-top: 0.75rem;
          color: #8f8f8f;
          font-size: 0.82rem;
          line-height: 1.6;
        }

        .school-fest-contents {
          background: #0b0b0b;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .school-fest-contents__label {
          padding-top: 1.5rem;
          color: #8f8f8f;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.08em;
        }

        .school-fest-contents ol {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .school-fest-contents li + li {
          border-left: 1px solid rgba(255, 255, 255, 0.1);
        }

        .school-fest-contents a {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          gap: 1rem;
          min-height: 48px;
          padding: 1.5rem;
          color: var(--ted-white);
        }

        .school-fest-contents a:hover {
          background: rgba(255, 255, 255, 0.06);
        }

        .school-fest-contents__number {
          color: var(--ted-red);
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 700;
        }

        .school-fest-contents strong,
        .school-fest-contents small {
          display: block;
        }

        .school-fest-contents strong {
          font-size: 1rem;
          font-weight: 600;
          line-height: 1.5;
        }

        .school-fest-contents small {
          margin-top: 0.35rem;
          color: #8f8f8f;
          font-size: 0.82rem;
          line-height: 1.55;
        }

        .school-fest-section {
          padding: 6rem 0;
          scroll-margin-top: 90px;
        }

        .school-fest-section--light {
          background: #f6f6f3;
          color: #161616;
        }

        .school-fest-section--dark {
          background: var(--ted-black);
          color: var(--ted-white);
        }

        .school-fest-section__header {
          display: grid;
          grid-template-columns: 86px minmax(0, 1fr);
          gap: 2rem;
          max-width: 920px;
          margin-bottom: 4rem;
        }

        .school-fest-section__number {
          color: var(--ted-red);
          font-family: var(--font-heading);
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1;
        }

        .school-fest-section__header h2 {
          max-width: 22ch;
          margin-top: 0.65rem;
          font-size: clamp(2.35rem, 5vw, 4.5rem);
          font-weight: 700;
          letter-spacing: -0.04em;
          line-height: 1.05;
        }

        .school-fest-section__header > div > p:last-child {
          max-width: 66ch;
          margin-top: 1.25rem;
          color: #555;
          font-size: 1rem;
          line-height: 1.75;
        }

        .school-fest-section--dark .school-fest-section__header > div > p:last-child {
          color: #b5b5b5;
        }

        .school-fest-facts {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin-bottom: 4.5rem;
          border-top: 1px solid rgba(0, 0, 0, 0.16);
          border-bottom: 1px solid rgba(0, 0, 0, 0.16);
        }

        .school-fest-facts > div {
          padding: 1.35rem 1.5rem;
        }

        .school-fest-facts > div + div {
          border-left: 1px solid rgba(0, 0, 0, 0.1);
        }

        .school-fest-facts dt,
        .school-fest-match__body dt,
        .school-fest-match__motion span,
        .school-fest-match__positions > span,
        .school-fest-match__result span {
          color: #6f6f6f;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
        }

        .school-fest-facts dd {
          margin-top: 0.45rem;
          font-size: 0.95rem;
          font-weight: 600;
          line-height: 1.6;
        }

        .school-fest-overview__layout {
          display: grid;
          grid-template-columns: minmax(0, 1.45fr) minmax(260px, 0.55fr);
          gap: 4rem;
          align-items: start;
        }

        .school-fest-subheading,
        .school-fest-debate-context h3 {
          margin-bottom: 1.5rem;
          font-size: 1.55rem;
          font-weight: 600;
          letter-spacing: -0.02em;
        }

        .school-fest-matches {
          border-top: 1px solid rgba(0, 0, 0, 0.16);
        }

        .school-fest-matches > li {
          display: grid;
          grid-template-columns: 54px minmax(0, 1fr);
          gap: 1.5rem;
          padding: 2rem 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        }

        .school-fest-match__index {
          color: var(--ted-red);
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 700;
        }

        .school-fest-match__body > dl {
          display: grid;
          grid-template-columns: minmax(160px, 0.75fr) minmax(0, 1.25fr);
          gap: 1.5rem;
        }

        .school-fest-match__body dd {
          margin-top: 0.3rem;
          font-weight: 600;
          line-height: 1.55;
        }

        .school-fest-match__motion {
          margin-top: 1.4rem;
        }

        .school-fest-match__motion p {
          margin-top: 0.35rem;
          line-height: 1.7;
        }

        .school-fest-match__motion p + p {
          color: #686868;
          font-size: 0.9rem;
        }

        .school-fest-match__positions {
          margin-top: 1.4rem;
        }

        .school-fest-match__positions dl {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin-top: 0.55rem;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .school-fest-match__positions dl > div {
          padding: 1rem 1.25rem 1rem 0;
        }

        .school-fest-match__positions dl > div + div {
          padding-right: 0;
          padding-left: 1.25rem;
          border-left: 1px solid rgba(0, 0, 0, 0.1);
        }

        .school-fest-match__positions dt {
          color: #1a1a1a;
          font-size: 0.86rem;
          font-weight: 700;
          line-height: 1.5;
        }

        .school-fest-match__positions dd {
          margin-top: 0.35rem;
          color: #595959;
          font-size: 0.92rem;
          line-height: 1.65;
        }

        .school-fest-match__result {
          margin-top: 1.25rem;
          padding-left: 1rem;
          border-left: 3px solid var(--ted-red);
          font-weight: 600;
        }

        .school-fest-match__result span {
          display: block;
          margin-bottom: 0.25rem;
        }

        .school-fest-leaflet {
          position: sticky;
          top: 110px;
        }

        .school-fest-leaflet img {
          display: block;
          width: 100%;
          outline: 1px solid rgba(0, 0, 0, 0.08);
          outline-offset: -1px;
        }

        .school-fest-leaflet figcaption {
          color: #696969;
        }

        .school-fest-rationale__grid {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(300px, 0.9fr);
          gap: 5rem;
          align-items: start;
          margin-left: 118px;
        }

        .school-fest-rationale__copy > p {
          max-width: 66ch;
          color: #bdbdbd;
          font-size: 1rem;
          line-height: 1.8;
        }

        .school-fest-rationale__copy > p + p {
          margin-top: 1.5rem;
        }

        .school-fest-acronym {
          margin: 1rem 0 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
          border-bottom: 1px solid rgba(255, 255, 255, 0.16);
        }

        .school-fest-acronym > div {
          display: grid;
          grid-template-columns: 42px minmax(0, 1fr);
          gap: 1rem;
          align-items: center;
          padding: 0.85rem 0;
        }

        .school-fest-acronym > div + div {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .school-fest-acronym dt {
          color: var(--ted-red);
          font-family: var(--font-heading);
          font-size: 1.45rem;
          font-weight: 700;
        }

        .school-fest-acronym dd {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem 0.75rem;
          align-items: baseline;
        }

        .school-fest-acronym strong {
          color: var(--ted-white);
          font-size: 1rem;
        }

        .school-fest-acronym span {
          color: #999;
          font-size: 0.88rem;
        }

        .school-fest-program-link {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          min-height: 48px;
          color: var(--ted-red);
          font-weight: 800;
        }

        .school-fest-quote {
          padding-left: 2rem;
          border-left: 5px solid var(--ted-red);
        }

        .school-fest-quote p {
          font-family: var(--font-heading);
          font-size: clamp(2.6rem, 5vw, 5rem);
          font-weight: 700;
          letter-spacing: -0.045em;
          line-height: 0.98;
        }

        .school-fest-quote footer {
          margin-top: 1.4rem;
          color: #9d9d9d;
          font-size: 1rem;
        }

        .school-fest-dialogue {
          display: grid;
          grid-template-columns: minmax(220px, 0.7fr) minmax(0, 1.3fr);
          gap: 4rem;
          margin: 4.5rem 0 0 118px;
          padding: 2.5rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
          border-bottom: 1px solid rgba(255, 255, 255, 0.16);
        }

        .school-fest-dialogue h3,
        .school-fest-watch h3 {
          font-size: clamp(1.65rem, 3vw, 2.35rem);
          font-weight: 600;
          letter-spacing: -0.03em;
          line-height: 1.2;
        }

        .school-fest-dialogue p,
        .school-fest-watch header > p:last-child {
          color: #bdbdbd;
          font-size: 1rem;
          line-height: 1.85;
        }

        .school-fest-dialogue p + p {
          margin-top: 1.25rem;
        }

        .school-fest-watch {
          margin: 4.5rem 0 0 118px;
        }

        .school-fest-watch > header {
          display: grid;
          grid-template-columns: minmax(220px, 0.7fr) minmax(0, 1.3fr);
          column-gap: 4rem;
          align-items: end;
          margin-bottom: 2rem;
        }

        .school-fest-watch > header .school-fest-eyebrow {
          grid-column: 1 / -1;
          margin-bottom: 0.65rem;
        }

        .school-fest-watch__grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 2rem;
        }

        .school-fest-watch figure {
          min-width: 0;
          border-top: 3px solid var(--ted-red);
        }

        .school-fest-video {
          position: relative;
          aspect-ratio: 16 / 9;
          background: #050505;
          outline: 1px solid rgba(255, 255, 255, 0.14);
          outline-offset: -1px;
        }

        .school-fest-video iframe {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          border: 0;
        }

        .school-fest-watch figcaption {
          display: grid;
          gap: 0.45rem;
          padding-top: 1rem;
        }

        .school-fest-watch figcaption > span {
          color: #999;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .school-fest-watch figcaption strong {
          color: var(--ted-white);
          font-size: 1rem;
          line-height: 1.55;
        }

        .school-fest-watch figcaption a {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          width: fit-content;
          min-height: 48px;
          color: var(--ted-red);
          font-size: 0.88rem;
          font-weight: 800;
        }

        .school-fest-watch figcaption a:hover {
          color: var(--ted-white);
        }

        .school-fest-debate-context {
          max-width: 76ch;
          margin: 0 0 3.5rem 118px;
          padding-left: 1.5rem;
          border-left: 4px solid var(--ted-red);
        }

        .school-fest-debate-context > p {
          color: #383838;
          font-size: 1.04rem;
          line-height: 1.9;
        }

        .school-fest-debate-context section {
          margin-top: 2.5rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .school-fest-debate-context ol {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .school-fest-debate-context li {
          display: grid;
          grid-template-columns: 42px minmax(0, 1fr);
          gap: 1rem;
          padding: 1.1rem 0;
        }

        .school-fest-debate-context li + li {
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .school-fest-debate-context li span {
          color: var(--ted-red);
          font-family: var(--font-heading);
          font-weight: 700;
        }

        .school-fest-debate-context li p {
          line-height: 1.75;
        }

        .school-fest-program-link {
          margin: 3rem 0 0 118px;
        }

        .school-fest-program-link:hover {
          color: #161616;
        }

        .school-fest-references {
          padding: 4.5rem 0 5rem;
          background: #0a0a0a;
          color: var(--ted-white);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .school-fest-references header {
          display: grid;
          grid-template-columns: minmax(180px, 0.42fr) minmax(0, 1fr);
          column-gap: 3rem;
          align-items: end;
          margin-bottom: 2.5rem;
        }

        .school-fest-references header .school-fest-eyebrow {
          grid-column: 1 / -1;
          margin-bottom: 0.75rem;
        }

        .school-fest-references h2 {
          font-size: clamp(2rem, 4vw, 3.25rem);
          letter-spacing: -0.035em;
        }

        .school-fest-references header > p:last-child {
          max-width: 62ch;
          color: #a9a9a9;
          line-height: 1.75;
        }

        .school-fest-references ol {
          border-top: 1px solid rgba(255, 255, 255, 0.16);
        }

        .school-fest-references li {
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        .school-fest-references a {
          display: grid;
          grid-template-columns: 48px minmax(0, 1fr) auto;
          gap: 1rem;
          align-items: center;
          min-height: 48px;
          padding: 1.35rem 0;
          color: var(--ted-white);
        }

        .school-fest-references a > span:first-child {
          color: var(--ted-red);
          font-family: var(--font-heading);
          font-weight: 700;
        }

        .school-fest-references a span:nth-child(2) {
          display: grid;
          gap: 0.3rem;
        }

        .school-fest-references a strong {
          font-size: 1rem;
        }

        .school-fest-references a small {
          color: #9d9d9d;
          font-size: 0.84rem;
          line-height: 1.5;
        }

        .school-fest-references a svg {
          color: var(--ted-red);
          transition: transform 160ms ease;
        }

        .school-fest-references a:hover svg {
          transform: translate(2px, -2px);
        }

        @media (max-width: 900px) {
          .school-fest-hero__layout,
          .school-fest-overview__layout,
          .school-fest-rationale__grid {
            grid-template-columns: 1fr;
          }

          .school-fest-hero__layout {
            gap: 3rem;
          }

          .school-fest-contents ol {
            grid-template-columns: 1fr;
          }

          .school-fest-contents li + li {
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            border-left: 0;
          }

          .school-fest-facts {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .school-fest-facts > div + div {
            border-left: 0;
          }

          .school-fest-facts > div:nth-child(even) {
            border-left: 1px solid rgba(0, 0, 0, 0.1);
          }

          .school-fest-facts > div:nth-child(-n + 2) {
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          }

          .school-fest-leaflet {
            position: static;
            max-width: 520px;
          }

          .school-fest-rationale__grid,
          .school-fest-dialogue,
          .school-fest-watch,
          .school-fest-debate-context,
          .school-fest-program-link {
            margin-left: 0;
          }

          .school-fest-rationale__grid {
            gap: 3rem;
          }

          .school-fest-dialogue,
          .school-fest-watch > header {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
        }

        @media (max-width: 640px) {
          .school-fest-hero {
            padding: 8rem 0 4rem;
          }

          .school-fest-hero h1 {
            font-size: clamp(2.75rem, 14vw, 4rem);
          }

          .school-fest-hero__lead,
          .school-fest-section__header > div > p:last-child,
          .school-fest-rationale__copy > p,
          .school-fest-debate-context > p,
          .school-fest-debate-context li p {
            font-size: 1rem;
          }

          .school-fest-contents a {
            padding: 1.25rem 0;
          }

          .school-fest-section {
            padding: 4.5rem 0;
          }

          .school-fest-section__header {
            grid-template-columns: 1fr;
            gap: 1rem;
            margin-bottom: 3rem;
          }

          .school-fest-section__number {
            font-size: 2.5rem;
          }

          .school-fest-section__header h2 {
            font-size: clamp(2.15rem, 11vw, 3.2rem);
          }

          .school-fest-facts {
            grid-template-columns: 1fr;
            margin-bottom: 3.5rem;
          }

          .school-fest-facts > div,
          .school-fest-facts > div:nth-child(even),
          .school-fest-facts > div:nth-child(-n + 2) {
            padding: 1.1rem 0;
            border-right: 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            border-left: 0;
          }

          .school-fest-facts > div:last-child {
            border-bottom: 0;
          }

          .school-fest-overview__layout {
            gap: 3rem;
          }

          .school-fest-matches > li {
            grid-template-columns: 1fr;
            gap: 0.65rem;
          }

          .school-fest-match__body > dl {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .school-fest-match__positions dl {
            grid-template-columns: 1fr;
          }

          .school-fest-match__positions dl > div,
          .school-fest-match__positions dl > div + div {
            padding: 0.9rem 0;
            border-left: 0;
          }

          .school-fest-match__positions dl > div + div {
            border-top: 1px solid rgba(0, 0, 0, 0.1);
          }

          .school-fest-quote {
            padding-left: 1.25rem;
          }

          .school-fest-dialogue {
            margin-top: 3.5rem;
            padding: 2rem 0;
          }

          .school-fest-watch {
            margin-top: 3.5rem;
          }

          .school-fest-watch__grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .school-fest-debate-context {
            padding-left: 1rem;
            font-size: 1rem;
          }

          .school-fest-references {
            padding: 4rem 0;
          }

          .school-fest-references header {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .school-fest-references a {
            grid-template-columns: 36px minmax(0, 1fr) auto;
            gap: 0.75rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .school-fest-page a {
            transition: none;
          }
        }
      `})]})},Bh={ja:{eyebrow:"Acknowledgements",title:"謝礼",intro:"TEDxWUSHS Youthの活動にご協力いただいた皆さまに、心より感謝申し上げます。",schoolsLabel:"English Debate",schoolsTitle:"英語ディベート参加校",schoolsDescription:"2026年の学院祭企画にご参加いただき、ありがとうございました。",schools:["頌栄女子学院高等学校","慶應義塾高等学校","早稲田大学本庄高等学院 ESS"],partnerLabel:"Special Thanks",partnerTitle:"TEDxTeikyoU",partnerDescription:"スピーカーコーチングにご協力いただきました。心より感謝申し上げます。",contributions:["スピーカーコーチングへの協力"]},en:{eyebrow:"Acknowledgements",title:"Acknowledgements",intro:"We sincerely thank everyone who has supported the work of TEDxWUSHS Youth.",schoolsLabel:"English Debate",schoolsTitle:"Participating Schools",schoolsDescription:"Thank you for joining our English debate program at the 2026 school festival.",schools:["Shoei Girls’ Senior High School","Keio Senior High School","Waseda University Honjo Senior High School ESS"],partnerLabel:"Special Thanks",partnerTitle:"TEDxTeikyoU",partnerDescription:"We sincerely thank TEDxTeikyoU for supporting our speaker coaching.",contributions:["Speaker coaching support"]}},fj=()=>{const{language:e}=ne(),t=Bh[e]??Bh.ja;return a.jsxs("main",{id:"main-content",tabIndex:-1,className:"acknowledgements-page",children:[a.jsx("header",{className:"acknowledgements-hero","aria-labelledby":"acknowledgements-title",children:a.jsxs("div",{className:"container acknowledgements-hero__inner",children:[a.jsx("p",{className:"acknowledgements-eyebrow",lang:"en",children:t.eyebrow}),a.jsx("h1",{id:"acknowledgements-title",children:t.title}),a.jsx("p",{className:"acknowledgements-hero__intro",children:t.intro})]})}),a.jsx("section",{className:"acknowledgements-section","aria-labelledby":"acknowledgements-schools-title",children:a.jsxs("div",{className:"container acknowledgements-section__layout",children:[a.jsxs("header",{children:[a.jsx("p",{className:"acknowledgements-eyebrow",lang:"en",children:t.schoolsLabel}),a.jsx("h2",{id:"acknowledgements-schools-title",children:t.schoolsTitle}),a.jsx("p",{children:t.schoolsDescription})]}),a.jsx("ul",{className:"acknowledgements-list",children:t.schools.map(n=>a.jsx("li",{children:n},n))})]})}),a.jsx("section",{className:"acknowledgements-section acknowledgements-section--partner","aria-labelledby":"acknowledgements-partner-title",children:a.jsxs("div",{className:"container acknowledgements-section__layout",children:[a.jsxs("header",{children:[a.jsx("p",{className:"acknowledgements-eyebrow",lang:"en",children:t.partnerLabel}),a.jsx("h2",{id:"acknowledgements-partner-title",lang:"en",children:t.partnerTitle}),a.jsx("p",{children:t.partnerDescription})]}),a.jsx("ul",{className:"acknowledgements-list acknowledgements-list--accent",children:t.contributions.map(n=>a.jsx("li",{children:n},n))})]})}),a.jsx("style",{children:`
        .acknowledgements-page {
          width: 100%;
          min-height: 100vh;
          background: var(--ted-black);
          color: var(--ted-white);
        }

        .acknowledgements-hero {
          padding: 10rem 0 5rem;
          background: linear-gradient(120deg, rgb(var(--ted-red-rgb) / 0.14), transparent 38rem), var(--ted-black);
        }

        .acknowledgements-hero__inner {
          max-width: 880px;
        }

        .acknowledgements-eyebrow {
          margin-bottom: 0.8rem;
          color: var(--ted-red);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .acknowledgements-hero h1 {
          font-size: clamp(2.25rem, 6vw, 4.25rem);
          line-height: 1;
          text-transform: none;
        }

        .acknowledgements-hero__intro {
          max-width: 58ch;
          margin-top: 1.5rem;
          color: #b8b8b8;
          font-size: 1.05rem;
          line-height: 1.8;
        }

        .acknowledgements-section {
          padding: 5rem 0;
          background: #0b0b0b;
        }

        .acknowledgements-section--partner {
          background: var(--ted-dark-gray);
        }

        .acknowledgements-section__layout {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(300px, 1.1fr);
          gap: clamp(3rem, 8vw, 7rem);
          align-items: start;
        }

        .acknowledgements-section h2 {
          max-width: 15ch;
          font-size: clamp(1.55rem, 3.2vw, 2.4rem);
          line-height: 1.15;
          text-transform: none;
        }

        .acknowledgements-section header > p:last-child {
          max-width: 56ch;
          margin-top: 1.25rem;
          color: #aaa;
          line-height: 1.75;
        }

        .acknowledgements-list {
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        .acknowledgements-list li {
          position: relative;
          padding: 1.35rem 0 1.35rem 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          font-size: clamp(1rem, 2vw, 1.25rem);
          font-weight: 700;
          line-height: 1.5;
        }

        .acknowledgements-list li::before {
          content: '';
          position: absolute;
          top: 1.95rem;
          left: 0;
          width: 7px;
          height: 7px;
          background: var(--ted-red);
        }

        .acknowledgements-list--accent {
          border-top-color: var(--ted-red);
        }

        @media (max-width: 760px) {
          .acknowledgements-hero {
            padding: 8rem 0 4rem;
          }

          .acknowledgements-hero h1 {
            font-size: clamp(2rem, 10vw, 3rem);
          }

          .acknowledgements-section {
            padding: 4rem 0;
          }

          .acknowledgements-section__layout {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `})]})},$h={ja:{"/":"TEDxWUSHS Youth | Ideas change everything","/about":"TEDxについて | TEDxWUSHS Youth","/archives":"イベントアーカイブ | TEDxWUSHS Youth","/archives/2026/main-event":"2026 メインイベント | TEDxWUSHS Youth","/archives/2026/school-fest":"2026 学院祭 | TEDxWUSHS Youth","/program":"2026 メインイベント | TEDxWUSHS Youth","/event":"プログラム | TEDxWUSHS Youth","/speakers":"2026 スピーカー | TEDxWUSHS Youth","/team":"2026 チーム | TEDxWUSHS Youth","/organizers":"チーム | TEDxWUSHS Youth","/join-us":"参加する | TEDxWUSHS Youth","/join-us/speaker":"スピーカー募集 | TEDxWUSHS Youth","/join-us/team":"運営チーム募集 | TEDxWUSHS Youth","/join-us/audience":"参加申込み | TEDxWUSHS Youth","/faq":"よくある質問 | TEDxWUSHS Youth","/school-fest-2026":"学院祭英語ディベート特集 | TEDxWUSHS Youth","/acknowledgements":"謝礼 | TEDxWUSHS Youth"},en:{"/":"TEDxWUSHS Youth | Ideas change everything","/about":"About | TEDxWUSHS Youth","/archives":"Event Archives | TEDxWUSHS Youth","/archives/2026/main-event":"2026 Main Event | TEDxWUSHS Youth","/archives/2026/school-fest":"2026 Gakuinsai | TEDxWUSHS Youth","/program":"2026 Main Event | TEDxWUSHS Youth","/event":"Program | TEDxWUSHS Youth","/speakers":"2026 Speakers | TEDxWUSHS Youth","/team":"2026 Team | TEDxWUSHS Youth","/organizers":"Team | TEDxWUSHS Youth","/join-us":"Join Us | TEDxWUSHS Youth","/join-us/speaker":"Speaker Applications | TEDxWUSHS Youth","/join-us/team":"Team Recruitment | TEDxWUSHS Youth","/join-us/audience":"Audience Registration | TEDxWUSHS Youth","/faq":"Frequently Asked Questions | TEDxWUSHS Youth","/school-fest-2026":"Gakuinsai English Debate Feature | TEDxWUSHS Youth","/acknowledgements":"Acknowledgements | TEDxWUSHS Youth"}},pj=()=>{const{pathname:e,hash:t}=en(),{language:n}=ne(),r=w.useRef(e);return w.useEffect(()=>{const i=$h[n]??$h.ja;document.title=i[e]??(n==="ja"?"ページが見つかりません | TEDxWUSHS Youth":"Page Not Found | TEDxWUSHS Youth"),document.documentElement.lang=n==="en"?"en":"ja"},[n,e]),w.useEffect(()=>{const i=document.getElementById("main-content"),o=r.current!==e;if(r.current=e,!i)return;t||window.scrollTo({top:0,left:0,behavior:"auto"});const s=o?window.requestAnimationFrame(()=>{i.focus({preventScroll:!0})}):null,l=window.requestAnimationFrame(()=>{if(!t)return;const c=document.getElementById(decodeURIComponent(t.slice(1)));c==null||c.scrollIntoView({block:"start",behavior:"auto"})});return()=>{s!==null&&window.cancelAnimationFrame(s),window.cancelAnimationFrame(l)}},[t,e]),null};function mj(){return a.jsx(Sb,{children:a.jsx(Bx,{children:a.jsxs("div",{className:"app",children:[a.jsx(pj,{}),a.jsx(Tb,{}),a.jsxs(Ix,{children:[a.jsx(oe,{path:"/",element:a.jsx(Hb,{})}),a.jsx(oe,{path:"/about",element:a.jsx(Gb,{})}),a.jsx(oe,{path:"/archives",element:a.jsx(rj,{})}),a.jsx(oe,{path:"/archives/2026/main-event",element:a.jsx(uj,{})}),a.jsx(oe,{path:"/archives/2026/school-fest",element:a.jsx(hj,{})}),a.jsx(oe,{path:"/program",element:a.jsx(Fi,{to:"/archives/2026/main-event",replace:!0})}),a.jsx(oe,{path:"/event",element:a.jsx(Fi,{to:"/program",replace:!0})}),a.jsx(oe,{path:"/speakers",element:a.jsx(qb,{})}),a.jsx(oe,{path:"/team",element:a.jsx(Jb,{})}),a.jsx(oe,{path:"/organizers",element:a.jsx(Fi,{to:"/team",replace:!0})}),a.jsx(oe,{path:"/join-us",element:a.jsx(Zb,{})}),a.jsx(oe,{path:"/join-us/speaker",element:a.jsx(ej,{})}),a.jsx(oe,{path:"/join-us/team",element:a.jsx(tj,{})}),a.jsx(oe,{path:"/join-us/audience",element:a.jsx(nj,{})}),a.jsx(oe,{path:"/faq",element:a.jsx(aj,{})}),a.jsx(oe,{path:"/school-fest-2026",element:a.jsx(Fi,{to:"/archives/2026/school-fest",replace:!0})}),a.jsx(oe,{path:"/acknowledgements",element:a.jsx(fj,{})}),a.jsx(oe,{path:"*",element:a.jsx(lj,{})})]}),a.jsx(Eb,{})]})})})}om(document.getElementById("root")).render(a.jsx(w.StrictMode,{children:a.jsx(mj,{})}));
