function g0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function y0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yh={exports:{}},Ho={},Kh={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hi=Symbol.for("react.element"),v0=Symbol.for("react.portal"),x0=Symbol.for("react.fragment"),w0=Symbol.for("react.strict_mode"),k0=Symbol.for("react.profiler"),b0=Symbol.for("react.provider"),S0=Symbol.for("react.context"),j0=Symbol.for("react.forward_ref"),T0=Symbol.for("react.suspense"),E0=Symbol.for("react.memo"),_0=Symbol.for("react.lazy"),Jc=Symbol.iterator;function D0(e){return e===null||typeof e!="object"?null:(e=Jc&&e[Jc]||e["@@iterator"],typeof e=="function"?e:null)}var Gh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qh=Object.assign,Qh={};function ir(e,t,n){this.props=e,this.context=t,this.refs=Qh,this.updater=n||Gh}ir.prototype.isReactComponent={};ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xh(){}Xh.prototype=ir.prototype;function xl(e,t,n){this.props=e,this.context=t,this.refs=Qh,this.updater=n||Gh}var wl=xl.prototype=new Xh;wl.constructor=xl;qh(wl,ir.prototype);wl.isPureReactComponent=!0;var Zc=Array.isArray,Jh=Object.prototype.hasOwnProperty,kl={current:null},Zh={key:!0,ref:!0,__self:!0,__source:!0};function ef(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Jh.call(t,r)&&!Zh.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:hi,type:e,key:o,ref:s,props:i,_owner:kl.current}}function C0(e,t){return{$$typeof:hi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bl(e){return typeof e=="object"&&e!==null&&e.$$typeof===hi}function P0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var eu=/\/+/g;function hs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?P0(""+e.key):t.toString(36)}function Ki(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case hi:case v0:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+hs(s,0):r,Zc(i)?(n="",e!=null&&(n=e.replace(eu,"$&/")+"/"),Ki(i,t,n,"",function(u){return u})):i!=null&&(bl(i)&&(i=C0(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(eu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Zc(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+hs(o,l);s+=Ki(o,t,n,c,i)}else if(c=D0(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+hs(o,l++),s+=Ki(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ti(e,t,n){if(e==null)return e;var r=[],i=0;return Ki(e,r,"","",function(o){return t.call(n,o,i++)}),r}function N0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},Gi={transition:null},A0={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:Gi,ReactCurrentOwner:kl};function tf(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:Ti,forEach:function(e,t,n){Ti(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ti(e,function(){t++}),t},toArray:function(e){return Ti(e,function(t){return t})||[]},only:function(e){if(!bl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=ir;L.Fragment=x0;L.Profiler=k0;L.PureComponent=xl;L.StrictMode=w0;L.Suspense=T0;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A0;L.act=tf;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=qh({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=kl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Jh.call(t,c)&&!Zh.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:hi,type:e.type,key:i,ref:o,props:r,_owner:s}};L.createContext=function(e){return e={$$typeof:S0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:b0,_context:e},e.Consumer=e};L.createElement=ef;L.createFactory=function(e){var t=ef.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:j0,render:e}};L.isValidElement=bl;L.lazy=function(e){return{$$typeof:_0,_payload:{_status:-1,_result:e},_init:N0}};L.memo=function(e,t){return{$$typeof:E0,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Gi.transition;Gi.transition={};try{e()}finally{Gi.transition=t}};L.unstable_act=tf;L.useCallback=function(e,t){return Ee.current.useCallback(e,t)};L.useContext=function(e){return Ee.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};L.useEffect=function(e,t){return Ee.current.useEffect(e,t)};L.useId=function(){return Ee.current.useId()};L.useImperativeHandle=function(e,t,n){return Ee.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return Ee.current.useMemo(e,t)};L.useReducer=function(e,t,n){return Ee.current.useReducer(e,t,n)};L.useRef=function(e){return Ee.current.useRef(e)};L.useState=function(e){return Ee.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return Ee.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return Ee.current.useTransition()};L.version="18.3.1";Kh.exports=L;var w=Kh.exports;const z0=y0(w),M0=g0({__proto__:null,default:z0},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0=w,R0=Symbol.for("react.element"),I0=Symbol.for("react.fragment"),V0=Object.prototype.hasOwnProperty,O0=L0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U0={key:!0,ref:!0,__self:!0,__source:!0};function nf(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)V0.call(t,r)&&!U0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:R0,type:e,key:o,ref:s,props:i,_owner:O0.current}}Ho.Fragment=I0;Ho.jsx=nf;Ho.jsxs=nf;Yh.exports=Ho;var a=Yh.exports,rf={exports:{}},Ie={},of={exports:{}},sf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,A){var z=D.length;D.push(A);e:for(;0<z;){var H=z-1>>>1,ce=D[H];if(0<i(ce,A))D[H]=A,D[z]=ce,z=H;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var A=D[0],z=D.pop();if(z!==A){D[0]=z;e:for(var H=0,ce=D.length,Si=ce>>>1;H<Si;){var tn=2*(H+1)-1,ds=D[tn],nn=tn+1,ji=D[nn];if(0>i(ds,z))nn<ce&&0>i(ji,ds)?(D[H]=ji,D[nn]=z,H=nn):(D[H]=ds,D[tn]=z,H=tn);else if(nn<ce&&0>i(ji,z))D[H]=ji,D[nn]=z,H=nn;else break e}}return A}function i(D,A){var z=D.sortIndex-A.sortIndex;return z!==0?z:D.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,h=null,f=3,y=!1,v=!1,x=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(D){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=D)r(u),A.sortIndex=A.expirationTime,t(c,A);else break;A=n(u)}}function k(D){if(x=!1,p(D),!v)if(n(c)!==null)v=!0,bi(S);else{var A=n(u);A!==null&&J(k,A.startTime-D)}}function S(D,A){v=!1,x&&(x=!1,g(j),j=-1),y=!0;var z=f;try{for(p(A),h=n(c);h!==null&&(!(h.expirationTime>A)||D&&!X());){var H=h.callback;if(typeof H=="function"){h.callback=null,f=h.priorityLevel;var ce=H(h.expirationTime<=A);A=e.unstable_now(),typeof ce=="function"?h.callback=ce:h===n(c)&&r(c),p(A)}else r(c);h=n(c)}if(h!==null)var Si=!0;else{var tn=n(u);tn!==null&&J(k,tn.startTime-A),Si=!1}return Si}finally{h=null,f=z,y=!1}}var T=!1,E=null,j=-1,M=5,N=-1;function X(){return!(e.unstable_now()-N<M)}function it(){if(E!==null){var D=e.unstable_now();N=D;var A=!0;try{A=E(!0,D)}finally{A?en():(T=!1,E=null)}}else T=!1}var en;if(typeof m=="function")en=function(){m(it)};else if(typeof MessageChannel<"u"){var hr=new MessageChannel,ki=hr.port2;hr.port1.onmessage=it,en=function(){ki.postMessage(null)}}else en=function(){b(it,0)};function bi(D){E=D,T||(T=!0,en())}function J(D,A){j=b(function(){D(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,bi(S))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(D){switch(f){case 1:case 2:case 3:var A=3;break;default:A=f}var z=f;f=A;try{return D()}finally{f=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,A){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var z=f;f=D;try{return A()}finally{f=z}},e.unstable_scheduleCallback=function(D,A,z){var H=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?H+z:H):z=H,D){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=z+ce,D={id:d++,callback:A,priorityLevel:D,startTime:z,expirationTime:ce,sortIndex:-1},z>H?(D.sortIndex=z,t(u,D),n(c)===null&&D===n(u)&&(x?(g(j),j=-1):x=!0,J(k,z-H))):(D.sortIndex=ce,t(c,D),v||y||(v=!0,bi(S))),D},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(D){var A=f;return function(){var z=f;f=A;try{return D.apply(this,arguments)}finally{f=z}}}})(sf);of.exports=sf;var F0=of.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0=w,Re=F0;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var af=new Set,Fr={};function bn(e,t){qn(e,t),qn(e+"Capture",t)}function qn(e,t){for(Fr[e]=t,e=0;e<t.length;e++)af.add(t[e])}var xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),na=Object.prototype.hasOwnProperty,B0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tu={},nu={};function H0(e){return na.call(nu,e)?!0:na.call(tu,e)?!1:B0.test(e)?nu[e]=!0:(tu[e]=!0,!1)}function $0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Y0(e,t,n,r){if(t===null||typeof t>"u"||$0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _e(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new _e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Sl=/[\-:]([a-z])/g;function jl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Sl,jl);me[t]=new _e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Sl,jl);me[t]=new _e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Sl,jl);me[t]=new _e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function Tl(e,t,n,r){var i=me.hasOwnProperty(t)?me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Y0(t,n,i,r)&&(n=null),r||i===null?H0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var jt=W0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ei=Symbol.for("react.element"),En=Symbol.for("react.portal"),_n=Symbol.for("react.fragment"),El=Symbol.for("react.strict_mode"),ra=Symbol.for("react.profiler"),lf=Symbol.for("react.provider"),cf=Symbol.for("react.context"),_l=Symbol.for("react.forward_ref"),ia=Symbol.for("react.suspense"),oa=Symbol.for("react.suspense_list"),Dl=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),uf=Symbol.for("react.offscreen"),ru=Symbol.iterator;function fr(e){return e===null||typeof e!="object"?null:(e=ru&&e[ru]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,fs;function br(e){if(fs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);fs=t&&t[1]||""}return`
`+fs+e}var ps=!1;function ms(e,t){if(!e||ps)return"";ps=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{ps=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?br(e):""}function K0(e){switch(e.tag){case 5:return br(e.type);case 16:return br("Lazy");case 13:return br("Suspense");case 19:return br("SuspenseList");case 0:case 2:case 15:return e=ms(e.type,!1),e;case 11:return e=ms(e.type.render,!1),e;case 1:return e=ms(e.type,!0),e;default:return""}}function sa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _n:return"Fragment";case En:return"Portal";case ra:return"Profiler";case El:return"StrictMode";case ia:return"Suspense";case oa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cf:return(e.displayName||"Context")+".Consumer";case lf:return(e._context.displayName||"Context")+".Provider";case _l:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Dl:return t=e.displayName||null,t!==null?t:sa(e.type)||"Memo";case _t:t=e._payload,e=e._init;try{return sa(e(t))}catch{}}return null}function G0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sa(t);case 8:return t===El?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function df(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function q0(e){var t=df(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _i(e){e._valueTracker||(e._valueTracker=q0(e))}function hf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=df(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function co(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function aa(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function iu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ht(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ff(e,t){t=t.checked,t!=null&&Tl(e,"checked",t,!1)}function la(e,t){ff(e,t);var n=Ht(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ca(e,t.type,n):t.hasOwnProperty("defaultValue")&&ca(e,t.type,Ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ou(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ca(e,t,n){(t!=="number"||co(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Sr=Array.isArray;function Wn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ht(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ua(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function su(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Sr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ht(n)}}function pf(e,t){var n=Ht(t.value),r=Ht(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function au(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function mf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function da(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?mf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Di,gf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Di=Di||document.createElement("div"),Di.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Di.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Q0=["Webkit","ms","Moz","O"];Object.keys(Dr).forEach(function(e){Q0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dr[t]=Dr[e]})});function yf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Dr.hasOwnProperty(e)&&Dr[e]?(""+t).trim():t+"px"}function vf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=yf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var X0=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ha(e,t){if(t){if(X0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function fa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pa=null;function Cl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ma=null,Bn=null,Hn=null;function lu(e){if(e=mi(e)){if(typeof ma!="function")throw Error(_(280));var t=e.stateNode;t&&(t=qo(t),ma(e.stateNode,e.type,t))}}function xf(e){Bn?Hn?Hn.push(e):Hn=[e]:Bn=e}function wf(){if(Bn){var e=Bn,t=Hn;if(Hn=Bn=null,lu(e),t)for(e=0;e<t.length;e++)lu(t[e])}}function kf(e,t){return e(t)}function bf(){}var gs=!1;function Sf(e,t,n){if(gs)return e(t,n);gs=!0;try{return kf(e,t,n)}finally{gs=!1,(Bn!==null||Hn!==null)&&(bf(),wf())}}function Br(e,t){var n=e.stateNode;if(n===null)return null;var r=qo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var ga=!1;if(xt)try{var pr={};Object.defineProperty(pr,"passive",{get:function(){ga=!0}}),window.addEventListener("test",pr,pr),window.removeEventListener("test",pr,pr)}catch{ga=!1}function J0(e,t,n,r,i,o,s,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Cr=!1,uo=null,ho=!1,ya=null,Z0={onError:function(e){Cr=!0,uo=e}};function ey(e,t,n,r,i,o,s,l,c){Cr=!1,uo=null,J0.apply(Z0,arguments)}function ty(e,t,n,r,i,o,s,l,c){if(ey.apply(this,arguments),Cr){if(Cr){var u=uo;Cr=!1,uo=null}else throw Error(_(198));ho||(ho=!0,ya=u)}}function Sn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function jf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cu(e){if(Sn(e)!==e)throw Error(_(188))}function ny(e){var t=e.alternate;if(!t){if(t=Sn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return cu(i),e;if(o===r)return cu(i),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Tf(e){return e=ny(e),e!==null?Ef(e):null}function Ef(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ef(e);if(t!==null)return t;e=e.sibling}return null}var _f=Re.unstable_scheduleCallback,uu=Re.unstable_cancelCallback,ry=Re.unstable_shouldYield,iy=Re.unstable_requestPaint,Z=Re.unstable_now,oy=Re.unstable_getCurrentPriorityLevel,Pl=Re.unstable_ImmediatePriority,Df=Re.unstable_UserBlockingPriority,fo=Re.unstable_NormalPriority,sy=Re.unstable_LowPriority,Cf=Re.unstable_IdlePriority,$o=null,lt=null;function ay(e){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot($o,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:uy,ly=Math.log,cy=Math.LN2;function uy(e){return e>>>=0,e===0?32:31-(ly(e)/cy|0)|0}var Ci=64,Pi=4194304;function jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function po(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=jr(l):(o&=s,o!==0&&(r=jr(o)))}else s=n&~i,s!==0?r=jr(s):o!==0&&(r=jr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tt(t),i=1<<n,r|=e[n],t&=~i;return r}function dy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-tt(o),l=1<<s,c=i[s];c===-1?(!(l&n)||l&r)&&(i[s]=dy(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function va(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pf(){var e=Ci;return Ci<<=1,!(Ci&4194240)&&(Ci=64),e}function ys(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function fy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-tt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Nl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var I=0;function Nf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Af,Al,zf,Mf,Lf,xa=!1,Ni=[],Lt=null,Rt=null,It=null,Hr=new Map,$r=new Map,Ct=[],py="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function du(e,t){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":Hr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$r.delete(t.pointerId)}}function mr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=mi(t),t!==null&&Al(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function my(e,t,n,r,i){switch(t){case"focusin":return Lt=mr(Lt,e,t,n,r,i),!0;case"dragenter":return Rt=mr(Rt,e,t,n,r,i),!0;case"mouseover":return It=mr(It,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Hr.set(o,mr(Hr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,$r.set(o,mr($r.get(o)||null,e,t,n,r,i)),!0}return!1}function Rf(e){var t=ln(e.target);if(t!==null){var n=Sn(t);if(n!==null){if(t=n.tag,t===13){if(t=jf(n),t!==null){e.blockedOn=t,Lf(e.priority,function(){zf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);pa=r,n.target.dispatchEvent(r),pa=null}else return t=mi(n),t!==null&&Al(t),e.blockedOn=n,!1;t.shift()}return!0}function hu(e,t,n){qi(e)&&n.delete(t)}function gy(){xa=!1,Lt!==null&&qi(Lt)&&(Lt=null),Rt!==null&&qi(Rt)&&(Rt=null),It!==null&&qi(It)&&(It=null),Hr.forEach(hu),$r.forEach(hu)}function gr(e,t){e.blockedOn===t&&(e.blockedOn=null,xa||(xa=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,gy)))}function Yr(e){function t(i){return gr(i,e)}if(0<Ni.length){gr(Ni[0],e);for(var n=1;n<Ni.length;n++){var r=Ni[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Lt!==null&&gr(Lt,e),Rt!==null&&gr(Rt,e),It!==null&&gr(It,e),Hr.forEach(t),$r.forEach(t),n=0;n<Ct.length;n++)r=Ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ct.length&&(n=Ct[0],n.blockedOn===null);)Rf(n),n.blockedOn===null&&Ct.shift()}var $n=jt.ReactCurrentBatchConfig,mo=!0;function yy(e,t,n,r){var i=I,o=$n.transition;$n.transition=null;try{I=1,zl(e,t,n,r)}finally{I=i,$n.transition=o}}function vy(e,t,n,r){var i=I,o=$n.transition;$n.transition=null;try{I=4,zl(e,t,n,r)}finally{I=i,$n.transition=o}}function zl(e,t,n,r){if(mo){var i=wa(e,t,n,r);if(i===null)_s(e,t,r,go,n),du(e,r);else if(my(i,e,t,n,r))r.stopPropagation();else if(du(e,r),t&4&&-1<py.indexOf(e)){for(;i!==null;){var o=mi(i);if(o!==null&&Af(o),o=wa(e,t,n,r),o===null&&_s(e,t,r,go,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else _s(e,t,r,null,n)}}var go=null;function wa(e,t,n,r){if(go=null,e=Cl(r),e=ln(e),e!==null)if(t=Sn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=jf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return go=e,null}function If(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(oy()){case Pl:return 1;case Df:return 4;case fo:case sy:return 16;case Cf:return 536870912;default:return 16}default:return 16}}var Nt=null,Ml=null,Qi=null;function Vf(){if(Qi)return Qi;var e,t=Ml,n=t.length,r,i="value"in Nt?Nt.value:Nt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Qi=i.slice(e,1<r?1-r:void 0)}function Xi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ai(){return!0}function fu(){return!1}function Ve(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ai:fu,this.isPropagationStopped=fu,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ai)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ai)},persist:function(){},isPersistent:Ai}),t}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ll=Ve(or),pi=G({},or,{view:0,detail:0}),xy=Ve(pi),vs,xs,yr,Yo=G({},pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yr&&(yr&&e.type==="mousemove"?(vs=e.screenX-yr.screenX,xs=e.screenY-yr.screenY):xs=vs=0,yr=e),vs)},movementY:function(e){return"movementY"in e?e.movementY:xs}}),pu=Ve(Yo),wy=G({},Yo,{dataTransfer:0}),ky=Ve(wy),by=G({},pi,{relatedTarget:0}),ws=Ve(by),Sy=G({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),jy=Ve(Sy),Ty=G({},or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ey=Ve(Ty),_y=G({},or,{data:0}),mu=Ve(_y),Dy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Py={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ny(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Py[e])?!!t[e]:!1}function Rl(){return Ny}var Ay=G({},pi,{key:function(e){if(e.key){var t=Dy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rl,charCode:function(e){return e.type==="keypress"?Xi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zy=Ve(Ay),My=G({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gu=Ve(My),Ly=G({},pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rl}),Ry=Ve(Ly),Iy=G({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vy=Ve(Iy),Oy=G({},Yo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Uy=Ve(Oy),Fy=[9,13,27,32],Il=xt&&"CompositionEvent"in window,Pr=null;xt&&"documentMode"in document&&(Pr=document.documentMode);var Wy=xt&&"TextEvent"in window&&!Pr,Of=xt&&(!Il||Pr&&8<Pr&&11>=Pr),yu=" ",vu=!1;function Uf(e,t){switch(e){case"keyup":return Fy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ff(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dn=!1;function By(e,t){switch(e){case"compositionend":return Ff(t);case"keypress":return t.which!==32?null:(vu=!0,yu);case"textInput":return e=t.data,e===yu&&vu?null:e;default:return null}}function Hy(e,t){if(Dn)return e==="compositionend"||!Il&&Uf(e,t)?(e=Vf(),Qi=Ml=Nt=null,Dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Of&&t.locale!=="ko"?null:t.data;default:return null}}var $y={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$y[e.type]:t==="textarea"}function Wf(e,t,n,r){xf(r),t=yo(t,"onChange"),0<t.length&&(n=new Ll("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Nr=null,Kr=null;function Yy(e){Zf(e,0)}function Ko(e){var t=Nn(e);if(hf(t))return e}function Ky(e,t){if(e==="change")return t}var Bf=!1;if(xt){var ks;if(xt){var bs="oninput"in document;if(!bs){var wu=document.createElement("div");wu.setAttribute("oninput","return;"),bs=typeof wu.oninput=="function"}ks=bs}else ks=!1;Bf=ks&&(!document.documentMode||9<document.documentMode)}function ku(){Nr&&(Nr.detachEvent("onpropertychange",Hf),Kr=Nr=null)}function Hf(e){if(e.propertyName==="value"&&Ko(Kr)){var t=[];Wf(t,Kr,e,Cl(e)),Sf(Yy,t)}}function Gy(e,t,n){e==="focusin"?(ku(),Nr=t,Kr=n,Nr.attachEvent("onpropertychange",Hf)):e==="focusout"&&ku()}function qy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ko(Kr)}function Qy(e,t){if(e==="click")return Ko(t)}function Xy(e,t){if(e==="input"||e==="change")return Ko(t)}function Jy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:Jy;function Gr(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!na.call(t,i)||!rt(e[i],t[i]))return!1}return!0}function bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Su(e,t){var n=bu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bu(n)}}function $f(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$f(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yf(){for(var e=window,t=co();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=co(e.document)}return t}function Vl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Zy(e){var t=Yf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&$f(n.ownerDocument.documentElement,n)){if(r!==null&&Vl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Su(n,o);var s=Su(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ev=xt&&"documentMode"in document&&11>=document.documentMode,Cn=null,ka=null,Ar=null,ba=!1;function ju(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ba||Cn==null||Cn!==co(r)||(r=Cn,"selectionStart"in r&&Vl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ar&&Gr(Ar,r)||(Ar=r,r=yo(ka,"onSelect"),0<r.length&&(t=new Ll("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cn)))}function zi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pn={animationend:zi("Animation","AnimationEnd"),animationiteration:zi("Animation","AnimationIteration"),animationstart:zi("Animation","AnimationStart"),transitionend:zi("Transition","TransitionEnd")},Ss={},Kf={};xt&&(Kf=document.createElement("div").style,"AnimationEvent"in window||(delete Pn.animationend.animation,delete Pn.animationiteration.animation,delete Pn.animationstart.animation),"TransitionEvent"in window||delete Pn.transitionend.transition);function Go(e){if(Ss[e])return Ss[e];if(!Pn[e])return e;var t=Pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kf)return Ss[e]=t[n];return e}var Gf=Go("animationend"),qf=Go("animationiteration"),Qf=Go("animationstart"),Xf=Go("transitionend"),Jf=new Map,Tu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gt(e,t){Jf.set(e,t),bn(t,[e])}for(var js=0;js<Tu.length;js++){var Ts=Tu[js],tv=Ts.toLowerCase(),nv=Ts[0].toUpperCase()+Ts.slice(1);Gt(tv,"on"+nv)}Gt(Gf,"onAnimationEnd");Gt(qf,"onAnimationIteration");Gt(Qf,"onAnimationStart");Gt("dblclick","onDoubleClick");Gt("focusin","onFocus");Gt("focusout","onBlur");Gt(Xf,"onTransitionEnd");qn("onMouseEnter",["mouseout","mouseover"]);qn("onMouseLeave",["mouseout","mouseover"]);qn("onPointerEnter",["pointerout","pointerover"]);qn("onPointerLeave",["pointerout","pointerover"]);bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));function Eu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ty(r,t,void 0,e),e.currentTarget=null}function Zf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Eu(i,l,u),o=c}else for(s=0;s<r.length;s++){if(l=r[s],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Eu(i,l,u),o=c}}}if(ho)throw e=ya,ho=!1,ya=null,e}function O(e,t){var n=t[_a];n===void 0&&(n=t[_a]=new Set);var r=e+"__bubble";n.has(r)||(ep(t,e,2,!1),n.add(r))}function Es(e,t,n){var r=0;t&&(r|=4),ep(n,e,r,t)}var Mi="_reactListening"+Math.random().toString(36).slice(2);function qr(e){if(!e[Mi]){e[Mi]=!0,af.forEach(function(n){n!=="selectionchange"&&(rv.has(n)||Es(n,!1,e),Es(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mi]||(t[Mi]=!0,Es("selectionchange",!1,t))}}function ep(e,t,n,r){switch(If(t)){case 1:var i=yy;break;case 4:i=vy;break;default:i=zl}n=i.bind(null,t,n,e),i=void 0,!ga||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function _s(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=ln(l),s===null)return;if(c=s.tag,c===5||c===6){r=o=s;continue e}l=l.parentNode}}r=r.return}Sf(function(){var u=o,d=Cl(n),h=[];e:{var f=Jf.get(e);if(f!==void 0){var y=Ll,v=e;switch(e){case"keypress":if(Xi(n)===0)break e;case"keydown":case"keyup":y=zy;break;case"focusin":v="focus",y=ws;break;case"focusout":v="blur",y=ws;break;case"beforeblur":case"afterblur":y=ws;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=pu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=ky;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Ry;break;case Gf:case qf:case Qf:y=jy;break;case Xf:y=Vy;break;case"scroll":y=xy;break;case"wheel":y=Uy;break;case"copy":case"cut":case"paste":y=Ey;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=gu}var x=(t&4)!==0,b=!x&&e==="scroll",g=x?f!==null?f+"Capture":null:f;x=[];for(var m=u,p;m!==null;){p=m;var k=p.stateNode;if(p.tag===5&&k!==null&&(p=k,g!==null&&(k=Br(m,g),k!=null&&x.push(Qr(m,k,p)))),b)break;m=m.return}0<x.length&&(f=new y(f,v,null,n,d),h.push({event:f,listeners:x}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&n!==pa&&(v=n.relatedTarget||n.fromElement)&&(ln(v)||v[wt]))break e;if((y||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?ln(v):null,v!==null&&(b=Sn(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(x=pu,k="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(x=gu,k="onPointerLeave",g="onPointerEnter",m="pointer"),b=y==null?f:Nn(y),p=v==null?f:Nn(v),f=new x(k,m+"leave",y,n,d),f.target=b,f.relatedTarget=p,k=null,ln(d)===u&&(x=new x(g,m+"enter",v,n,d),x.target=p,x.relatedTarget=b,k=x),b=k,y&&v)t:{for(x=y,g=v,m=0,p=x;p;p=Tn(p))m++;for(p=0,k=g;k;k=Tn(k))p++;for(;0<m-p;)x=Tn(x),m--;for(;0<p-m;)g=Tn(g),p--;for(;m--;){if(x===g||g!==null&&x===g.alternate)break t;x=Tn(x),g=Tn(g)}x=null}else x=null;y!==null&&_u(h,f,y,x,!1),v!==null&&b!==null&&_u(h,b,v,x,!0)}}e:{if(f=u?Nn(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var S=Ky;else if(xu(f))if(Bf)S=Xy;else{S=qy;var T=Gy}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=Qy);if(S&&(S=S(e,u))){Wf(h,S,n,d);break e}T&&T(e,f,u),e==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&ca(f,"number",f.value)}switch(T=u?Nn(u):window,e){case"focusin":(xu(T)||T.contentEditable==="true")&&(Cn=T,ka=u,Ar=null);break;case"focusout":Ar=ka=Cn=null;break;case"mousedown":ba=!0;break;case"contextmenu":case"mouseup":case"dragend":ba=!1,ju(h,n,d);break;case"selectionchange":if(ev)break;case"keydown":case"keyup":ju(h,n,d)}var E;if(Il)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Dn?Uf(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Of&&n.locale!=="ko"&&(Dn||j!=="onCompositionStart"?j==="onCompositionEnd"&&Dn&&(E=Vf()):(Nt=d,Ml="value"in Nt?Nt.value:Nt.textContent,Dn=!0)),T=yo(u,j),0<T.length&&(j=new mu(j,e,null,n,d),h.push({event:j,listeners:T}),E?j.data=E:(E=Ff(n),E!==null&&(j.data=E)))),(E=Wy?By(e,n):Hy(e,n))&&(u=yo(u,"onBeforeInput"),0<u.length&&(d=new mu("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=E))}Zf(h,t)})}function Qr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function yo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Br(e,n),o!=null&&r.unshift(Qr(e,o,i)),o=Br(e,t),o!=null&&r.push(Qr(e,o,i))),e=e.return}return r}function Tn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _u(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Br(n,o),c!=null&&s.unshift(Qr(n,c,l))):i||(c=Br(n,o),c!=null&&s.push(Qr(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var iv=/\r\n?/g,ov=/\u0000|\uFFFD/g;function Du(e){return(typeof e=="string"?e:""+e).replace(iv,`
`).replace(ov,"")}function Li(e,t,n){if(t=Du(t),Du(e)!==t&&n)throw Error(_(425))}function vo(){}var Sa=null,ja=null;function Ta(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ea=typeof setTimeout=="function"?setTimeout:void 0,sv=typeof clearTimeout=="function"?clearTimeout:void 0,Cu=typeof Promise=="function"?Promise:void 0,av=typeof queueMicrotask=="function"?queueMicrotask:typeof Cu<"u"?function(e){return Cu.resolve(null).then(e).catch(lv)}:Ea;function lv(e){setTimeout(function(){throw e})}function Ds(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Yr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Yr(t)}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var sr=Math.random().toString(36).slice(2),at="__reactFiber$"+sr,Xr="__reactProps$"+sr,wt="__reactContainer$"+sr,_a="__reactEvents$"+sr,cv="__reactListeners$"+sr,uv="__reactHandles$"+sr;function ln(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pu(e);e!==null;){if(n=e[at])return n;e=Pu(e)}return t}e=n,n=e.parentNode}return null}function mi(e){return e=e[at]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function qo(e){return e[Xr]||null}var Da=[],An=-1;function qt(e){return{current:e}}function U(e){0>An||(e.current=Da[An],Da[An]=null,An--)}function V(e,t){An++,Da[An]=e.current,e.current=t}var $t={},ke=qt($t),Pe=qt(!1),yn=$t;function Qn(e,t){var n=e.type.contextTypes;if(!n)return $t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(e){return e=e.childContextTypes,e!=null}function xo(){U(Pe),U(ke)}function Nu(e,t,n){if(ke.current!==$t)throw Error(_(168));V(ke,t),V(Pe,n)}function tp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,G0(e)||"Unknown",i));return G({},n,r)}function wo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$t,yn=ke.current,V(ke,e),V(Pe,Pe.current),!0}function Au(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=tp(e,t,yn),r.__reactInternalMemoizedMergedChildContext=e,U(Pe),U(ke),V(ke,e)):U(Pe),V(Pe,n)}var pt=null,Qo=!1,Cs=!1;function np(e){pt===null?pt=[e]:pt.push(e)}function dv(e){Qo=!0,np(e)}function Qt(){if(!Cs&&pt!==null){Cs=!0;var e=0,t=I;try{var n=pt;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}pt=null,Qo=!1}catch(i){throw pt!==null&&(pt=pt.slice(e+1)),_f(Pl,Qt),i}finally{I=t,Cs=!1}}return null}var zn=[],Mn=0,ko=null,bo=0,Ue=[],Fe=0,vn=null,mt=1,gt="";function on(e,t){zn[Mn++]=bo,zn[Mn++]=ko,ko=e,bo=t}function rp(e,t,n){Ue[Fe++]=mt,Ue[Fe++]=gt,Ue[Fe++]=vn,vn=e;var r=mt;e=gt;var i=32-tt(r)-1;r&=~(1<<i),n+=1;var o=32-tt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,mt=1<<32-tt(t)+i|n<<i|r,gt=o+e}else mt=1<<o|n<<i|r,gt=e}function Ol(e){e.return!==null&&(on(e,1),rp(e,1,0))}function Ul(e){for(;e===ko;)ko=zn[--Mn],zn[Mn]=null,bo=zn[--Mn],zn[Mn]=null;for(;e===vn;)vn=Ue[--Fe],Ue[Fe]=null,gt=Ue[--Fe],Ue[Fe]=null,mt=Ue[--Fe],Ue[Fe]=null}var Le=null,Me=null,W=!1,et=null;function ip(e,t){var n=We(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function zu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Le=e,Me=Vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Le=e,Me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=vn!==null?{id:mt,overflow:gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=We(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Le=e,Me=null,!0):!1;default:return!1}}function Ca(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pa(e){if(W){var t=Me;if(t){var n=t;if(!zu(e,t)){if(Ca(e))throw Error(_(418));t=Vt(n.nextSibling);var r=Le;t&&zu(e,t)?ip(r,n):(e.flags=e.flags&-4097|2,W=!1,Le=e)}}else{if(Ca(e))throw Error(_(418));e.flags=e.flags&-4097|2,W=!1,Le=e}}}function Mu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function Ri(e){if(e!==Le)return!1;if(!W)return Mu(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ta(e.type,e.memoizedProps)),t&&(t=Me)){if(Ca(e))throw op(),Error(_(418));for(;t;)ip(e,t),t=Vt(t.nextSibling)}if(Mu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Me=Vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Me=null}}else Me=Le?Vt(e.stateNode.nextSibling):null;return!0}function op(){for(var e=Me;e;)e=Vt(e.nextSibling)}function Xn(){Me=Le=null,W=!1}function Fl(e){et===null?et=[e]:et.push(e)}var hv=jt.ReactCurrentBatchConfig;function vr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Ii(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Lu(e){var t=e._init;return t(e._payload)}function sp(e){function t(g,m){if(e){var p=g.deletions;p===null?(g.deletions=[m],g.flags|=16):p.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=Wt(g,m),g.index=0,g.sibling=null,g}function o(g,m,p){return g.index=p,e?(p=g.alternate,p!==null?(p=p.index,p<m?(g.flags|=2,m):p):(g.flags|=2,m)):(g.flags|=1048576,m)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,m,p,k){return m===null||m.tag!==6?(m=Rs(p,g.mode,k),m.return=g,m):(m=i(m,p),m.return=g,m)}function c(g,m,p,k){var S=p.type;return S===_n?d(g,m,p.props.children,k,p.key):m!==null&&(m.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===_t&&Lu(S)===m.type)?(k=i(m,p.props),k.ref=vr(g,m,p),k.return=g,k):(k=io(p.type,p.key,p.props,null,g.mode,k),k.ref=vr(g,m,p),k.return=g,k)}function u(g,m,p,k){return m===null||m.tag!==4||m.stateNode.containerInfo!==p.containerInfo||m.stateNode.implementation!==p.implementation?(m=Is(p,g.mode,k),m.return=g,m):(m=i(m,p.children||[]),m.return=g,m)}function d(g,m,p,k,S){return m===null||m.tag!==7?(m=mn(p,g.mode,k,S),m.return=g,m):(m=i(m,p),m.return=g,m)}function h(g,m,p){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Rs(""+m,g.mode,p),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ei:return p=io(m.type,m.key,m.props,null,g.mode,p),p.ref=vr(g,null,m),p.return=g,p;case En:return m=Is(m,g.mode,p),m.return=g,m;case _t:var k=m._init;return h(g,k(m._payload),p)}if(Sr(m)||fr(m))return m=mn(m,g.mode,p,null),m.return=g,m;Ii(g,m)}return null}function f(g,m,p,k){var S=m!==null?m.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:l(g,m,""+p,k);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ei:return p.key===S?c(g,m,p,k):null;case En:return p.key===S?u(g,m,p,k):null;case _t:return S=p._init,f(g,m,S(p._payload),k)}if(Sr(p)||fr(p))return S!==null?null:d(g,m,p,k,null);Ii(g,p)}return null}function y(g,m,p,k,S){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(p)||null,l(m,g,""+k,S);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ei:return g=g.get(k.key===null?p:k.key)||null,c(m,g,k,S);case En:return g=g.get(k.key===null?p:k.key)||null,u(m,g,k,S);case _t:var T=k._init;return y(g,m,p,T(k._payload),S)}if(Sr(k)||fr(k))return g=g.get(p)||null,d(m,g,k,S,null);Ii(m,k)}return null}function v(g,m,p,k){for(var S=null,T=null,E=m,j=m=0,M=null;E!==null&&j<p.length;j++){E.index>j?(M=E,E=null):M=E.sibling;var N=f(g,E,p[j],k);if(N===null){E===null&&(E=M);break}e&&E&&N.alternate===null&&t(g,E),m=o(N,m,j),T===null?S=N:T.sibling=N,T=N,E=M}if(j===p.length)return n(g,E),W&&on(g,j),S;if(E===null){for(;j<p.length;j++)E=h(g,p[j],k),E!==null&&(m=o(E,m,j),T===null?S=E:T.sibling=E,T=E);return W&&on(g,j),S}for(E=r(g,E);j<p.length;j++)M=y(E,g,j,p[j],k),M!==null&&(e&&M.alternate!==null&&E.delete(M.key===null?j:M.key),m=o(M,m,j),T===null?S=M:T.sibling=M,T=M);return e&&E.forEach(function(X){return t(g,X)}),W&&on(g,j),S}function x(g,m,p,k){var S=fr(p);if(typeof S!="function")throw Error(_(150));if(p=S.call(p),p==null)throw Error(_(151));for(var T=S=null,E=m,j=m=0,M=null,N=p.next();E!==null&&!N.done;j++,N=p.next()){E.index>j?(M=E,E=null):M=E.sibling;var X=f(g,E,N.value,k);if(X===null){E===null&&(E=M);break}e&&E&&X.alternate===null&&t(g,E),m=o(X,m,j),T===null?S=X:T.sibling=X,T=X,E=M}if(N.done)return n(g,E),W&&on(g,j),S;if(E===null){for(;!N.done;j++,N=p.next())N=h(g,N.value,k),N!==null&&(m=o(N,m,j),T===null?S=N:T.sibling=N,T=N);return W&&on(g,j),S}for(E=r(g,E);!N.done;j++,N=p.next())N=y(E,g,j,N.value,k),N!==null&&(e&&N.alternate!==null&&E.delete(N.key===null?j:N.key),m=o(N,m,j),T===null?S=N:T.sibling=N,T=N);return e&&E.forEach(function(it){return t(g,it)}),W&&on(g,j),S}function b(g,m,p,k){if(typeof p=="object"&&p!==null&&p.type===_n&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ei:e:{for(var S=p.key,T=m;T!==null;){if(T.key===S){if(S=p.type,S===_n){if(T.tag===7){n(g,T.sibling),m=i(T,p.props.children),m.return=g,g=m;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===_t&&Lu(S)===T.type){n(g,T.sibling),m=i(T,p.props),m.ref=vr(g,T,p),m.return=g,g=m;break e}n(g,T);break}else t(g,T);T=T.sibling}p.type===_n?(m=mn(p.props.children,g.mode,k,p.key),m.return=g,g=m):(k=io(p.type,p.key,p.props,null,g.mode,k),k.ref=vr(g,m,p),k.return=g,g=k)}return s(g);case En:e:{for(T=p.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===p.containerInfo&&m.stateNode.implementation===p.implementation){n(g,m.sibling),m=i(m,p.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=Is(p,g.mode,k),m.return=g,g=m}return s(g);case _t:return T=p._init,b(g,m,T(p._payload),k)}if(Sr(p))return v(g,m,p,k);if(fr(p))return x(g,m,p,k);Ii(g,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,p),m.return=g,g=m):(n(g,m),m=Rs(p,g.mode,k),m.return=g,g=m),s(g)):n(g,m)}return b}var Jn=sp(!0),ap=sp(!1),So=qt(null),jo=null,Ln=null,Wl=null;function Bl(){Wl=Ln=jo=null}function Hl(e){var t=So.current;U(So),e._currentValue=t}function Na(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Yn(e,t){jo=e,Wl=Ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(Wl!==e)if(e={context:e,memoizedValue:t,next:null},Ln===null){if(jo===null)throw Error(_(308));Ln=e,jo.dependencies={lanes:0,firstContext:e}}else Ln=Ln.next=e;return t}var cn=null;function $l(e){cn===null?cn=[e]:cn.push(e)}function lp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,$l(t)):(n.next=i.next,i.next=n),t.interleaved=n,kt(e,r)}function kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dt=!1;function Yl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ot(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,kt(e,n)}return i=r.interleaved,i===null?(t.next=t,$l(r)):(t.next=i.next,i.next=t),r.interleaved=t,kt(e,n)}function Ji(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Nl(e,n)}}function Ru(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function To(e,t,n,r){var i=e.updateQueue;Dt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,s===null?o=u:s.next=u,s=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(o!==null){var h=i.baseState;s=0,d=u=c=null,l=o;do{var f=l.lane,y=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,x=l;switch(f=t,y=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){h=v.call(y,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,f=typeof v=="function"?v.call(y,h,f):v,f==null)break e;h=G({},h,f);break e;case 2:Dt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else y={eventTime:y,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=y,c=h):d=d.next=y,s|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(c=h),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);wn|=s,e.lanes=s,e.memoizedState=h}}function Iu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var gi={},ct=qt(gi),Jr=qt(gi),Zr=qt(gi);function un(e){if(e===gi)throw Error(_(174));return e}function Kl(e,t){switch(V(Zr,t),V(Jr,e),V(ct,gi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:da(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=da(t,e)}U(ct),V(ct,t)}function Zn(){U(ct),U(Jr),U(Zr)}function up(e){un(Zr.current);var t=un(ct.current),n=da(t,e.type);t!==n&&(V(Jr,e),V(ct,n))}function Gl(e){Jr.current===e&&(U(ct),U(Jr))}var $=qt(0);function Eo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ps=[];function ql(){for(var e=0;e<Ps.length;e++)Ps[e]._workInProgressVersionPrimary=null;Ps.length=0}var Zi=jt.ReactCurrentDispatcher,Ns=jt.ReactCurrentBatchConfig,xn=0,K=null,se=null,ue=null,_o=!1,zr=!1,ei=0,fv=0;function ge(){throw Error(_(321))}function Ql(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rt(e[n],t[n]))return!1;return!0}function Xl(e,t,n,r,i,o){if(xn=o,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Zi.current=e===null||e.memoizedState===null?yv:vv,e=n(r,i),zr){o=0;do{if(zr=!1,ei=0,25<=o)throw Error(_(301));o+=1,ue=se=null,t.updateQueue=null,Zi.current=xv,e=n(r,i)}while(zr)}if(Zi.current=Do,t=se!==null&&se.next!==null,xn=0,ue=se=K=null,_o=!1,t)throw Error(_(300));return e}function Jl(){var e=ei!==0;return ei=0,e}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?K.memoizedState=ue=e:ue=ue.next=e,ue}function Ke(){if(se===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=ue===null?K.memoizedState:ue.next;if(t!==null)ue=t,se=e;else{if(e===null)throw Error(_(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},ue===null?K.memoizedState=ue=e:ue=ue.next=e}return ue}function ti(e,t){return typeof t=="function"?t(e):t}function As(e){var t=Ke(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=se,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,c=null,u=o;do{var d=u.lane;if((xn&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=h,s=r):c=c.next=h,K.lanes|=d,wn|=d}u=u.next}while(u!==null&&u!==o);c===null?s=r:c.next=l,rt(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,K.lanes|=o,wn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function zs(e){var t=Ke(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);rt(o,t.memoizedState)||(Ce=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function dp(){}function hp(e,t){var n=K,r=Ke(),i=t(),o=!rt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ce=!0),r=r.queue,Zl(mp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,ni(9,pp.bind(null,n,r,i,t),void 0,null),de===null)throw Error(_(349));xn&30||fp(n,t,i)}return i}function fp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pp(e,t,n,r){t.value=n,t.getSnapshot=r,gp(t)&&yp(e)}function mp(e,t,n){return n(function(){gp(t)&&yp(e)})}function gp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rt(e,n)}catch{return!0}}function yp(e){var t=kt(e,1);t!==null&&nt(t,e,1,-1)}function Vu(e){var t=st();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ti,lastRenderedState:e},t.queue=e,e=e.dispatch=gv.bind(null,K,e),[t.memoizedState,e]}function ni(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vp(){return Ke().memoizedState}function eo(e,t,n,r){var i=st();K.flags|=e,i.memoizedState=ni(1|t,n,void 0,r===void 0?null:r)}function Xo(e,t,n,r){var i=Ke();r=r===void 0?null:r;var o=void 0;if(se!==null){var s=se.memoizedState;if(o=s.destroy,r!==null&&Ql(r,s.deps)){i.memoizedState=ni(t,n,o,r);return}}K.flags|=e,i.memoizedState=ni(1|t,n,o,r)}function Ou(e,t){return eo(8390656,8,e,t)}function Zl(e,t){return Xo(2048,8,e,t)}function xp(e,t){return Xo(4,2,e,t)}function wp(e,t){return Xo(4,4,e,t)}function kp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bp(e,t,n){return n=n!=null?n.concat([e]):null,Xo(4,4,kp.bind(null,t,e),n)}function ec(){}function Sp(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ql(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function jp(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ql(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Tp(e,t,n){return xn&21?(rt(n,t)||(n=Pf(),K.lanes|=n,wn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function pv(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=Ns.transition;Ns.transition={};try{e(!1),t()}finally{I=n,Ns.transition=r}}function Ep(){return Ke().memoizedState}function mv(e,t,n){var r=Ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_p(e))Dp(t,n);else if(n=lp(e,t,n,r),n!==null){var i=Te();nt(n,e,r,i),Cp(n,t,r)}}function gv(e,t,n){var r=Ft(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_p(e))Dp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,rt(l,s)){var c=t.interleaved;c===null?(i.next=i,$l(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=lp(e,t,i,r),n!==null&&(i=Te(),nt(n,e,r,i),Cp(n,t,r))}}function _p(e){var t=e.alternate;return e===K||t!==null&&t===K}function Dp(e,t){zr=_o=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Cp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Nl(e,n)}}var Do={readContext:Ye,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},yv={readContext:Ye,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:Ou,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,eo(4194308,4,kp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return eo(4194308,4,e,t)},useInsertionEffect:function(e,t){return eo(4,2,e,t)},useMemo:function(e,t){var n=st();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=st();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=mv.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:Vu,useDebugValue:ec,useDeferredValue:function(e){return st().memoizedState=e},useTransition:function(){var e=Vu(!1),t=e[0];return e=pv.bind(null,e[1]),st().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,i=st();if(W){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),de===null)throw Error(_(349));xn&30||fp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ou(mp.bind(null,r,o,e),[e]),r.flags|=2048,ni(9,pp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=st(),t=de.identifierPrefix;if(W){var n=gt,r=mt;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ei++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=fv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},vv={readContext:Ye,useCallback:Sp,useContext:Ye,useEffect:Zl,useImperativeHandle:bp,useInsertionEffect:xp,useLayoutEffect:wp,useMemo:jp,useReducer:As,useRef:vp,useState:function(){return As(ti)},useDebugValue:ec,useDeferredValue:function(e){var t=Ke();return Tp(t,se.memoizedState,e)},useTransition:function(){var e=As(ti)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:dp,useSyncExternalStore:hp,useId:Ep,unstable_isNewReconciler:!1},xv={readContext:Ye,useCallback:Sp,useContext:Ye,useEffect:Zl,useImperativeHandle:bp,useInsertionEffect:xp,useLayoutEffect:wp,useMemo:jp,useReducer:zs,useRef:vp,useState:function(){return zs(ti)},useDebugValue:ec,useDeferredValue:function(e){var t=Ke();return se===null?t.memoizedState=e:Tp(t,se.memoizedState,e)},useTransition:function(){var e=zs(ti)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:dp,useSyncExternalStore:hp,useId:Ep,unstable_isNewReconciler:!1};function Je(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Aa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Jo={isMounted:function(e){return(e=e._reactInternals)?Sn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Te(),i=Ft(e),o=yt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Ot(e,o,i),t!==null&&(nt(t,e,i,r),Ji(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Te(),i=Ft(e),o=yt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ot(e,o,i),t!==null&&(nt(t,e,i,r),Ji(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Te(),r=Ft(e),i=yt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ot(e,i,r),t!==null&&(nt(t,e,r,n),Ji(t,e,r))}};function Uu(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Gr(n,r)||!Gr(i,o):!0}function Pp(e,t,n){var r=!1,i=$t,o=t.contextType;return typeof o=="object"&&o!==null?o=Ye(o):(i=Ne(t)?yn:ke.current,r=t.contextTypes,o=(r=r!=null)?Qn(e,i):$t),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Jo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Fu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Jo.enqueueReplaceState(t,t.state,null)}function za(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Yl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ye(o):(o=Ne(t)?yn:ke.current,i.context=Qn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Aa(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Jo.enqueueReplaceState(i,i.state,null),To(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function er(e,t){try{var n="",r=t;do n+=K0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ms(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ma(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var wv=typeof WeakMap=="function"?WeakMap:Map;function Np(e,t,n){n=yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Po||(Po=!0,Ha=r),Ma(e,t)},n}function Ap(e,t,n){n=yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ma(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ma(e,t),typeof r!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Wu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new wv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Mv.bind(null,e,t,n),t.then(e,e))}function Bu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=yt(-1,1),t.tag=2,Ot(n,t,1))),n.lanes|=1),e)}var kv=jt.ReactCurrentOwner,Ce=!1;function be(e,t,n,r){t.child=e===null?ap(t,null,n,r):Jn(t,e.child,n,r)}function $u(e,t,n,r,i){n=n.render;var o=t.ref;return Yn(t,i),r=Xl(e,t,n,r,o,i),n=Jl(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,bt(e,t,i)):(W&&n&&Ol(t),t.flags|=1,be(e,t,r,i),t.child)}function Yu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!lc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,zp(e,t,o,r,i)):(e=io(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Gr,n(s,r)&&e.ref===t.ref)return bt(e,t,i)}return t.flags|=1,e=Wt(o,r),e.ref=t.ref,e.return=t,t.child=e}function zp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Gr(o,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,bt(e,t,i)}return La(e,t,n,r,i)}function Mp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(In,ze),ze|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(In,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,V(In,ze),ze|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,V(In,ze),ze|=r;return be(e,t,i,n),t.child}function Lp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function La(e,t,n,r,i){var o=Ne(n)?yn:ke.current;return o=Qn(t,o),Yn(t,i),n=Xl(e,t,n,r,o,i),r=Jl(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,bt(e,t,i)):(W&&r&&Ol(t),t.flags|=1,be(e,t,n,i),t.child)}function Ku(e,t,n,r,i){if(Ne(n)){var o=!0;wo(t)}else o=!1;if(Yn(t,i),t.stateNode===null)to(e,t),Pp(t,n,r),za(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ye(u):(u=Ne(n)?yn:ke.current,u=Qn(t,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Fu(t,s,r,u),Dt=!1;var f=t.memoizedState;s.state=f,To(t,r,s,i),c=t.memoizedState,l!==r||f!==c||Pe.current||Dt?(typeof d=="function"&&(Aa(t,n,d,r),c=t.memoizedState),(l=Dt||Uu(t,n,l,r,f,c,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,cp(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Je(t.type,l),s.props=u,h=t.pendingProps,f=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ye(c):(c=Ne(n)?yn:ke.current,c=Qn(t,c));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==h||f!==c)&&Fu(t,s,r,c),Dt=!1,f=t.memoizedState,s.state=f,To(t,r,s,i);var v=t.memoizedState;l!==h||f!==v||Pe.current||Dt?(typeof y=="function"&&(Aa(t,n,y,r),v=t.memoizedState),(u=Dt||Uu(t,n,u,r,f,v,c)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Ra(e,t,n,r,o,i)}function Ra(e,t,n,r,i,o){Lp(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Au(t,n,!1),bt(e,t,o);r=t.stateNode,kv.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Jn(t,e.child,null,o),t.child=Jn(t,null,l,o)):be(e,t,l,o),t.memoizedState=r.state,i&&Au(t,n,!0),t.child}function Rp(e){var t=e.stateNode;t.pendingContext?Nu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Nu(e,t.context,!1),Kl(e,t.containerInfo)}function Gu(e,t,n,r,i){return Xn(),Fl(i),t.flags|=256,be(e,t,n,r),t.child}var Ia={dehydrated:null,treeContext:null,retryLane:0};function Va(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ip(e,t,n){var r=t.pendingProps,i=$.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),V($,i&1),e===null)return Pa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ts(s,r,0,null),e=mn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Va(n),t.memoizedState=Ia,e):tc(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return bv(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Wt(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Wt(l,o):(o=mn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Va(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Ia,r}return o=e.child,e=o.sibling,r=Wt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function tc(e,t){return t=ts({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Vi(e,t,n,r){return r!==null&&Fl(r),Jn(t,e.child,null,n),e=tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bv(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Ms(Error(_(422))),Vi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ts({mode:"visible",children:r.children},i,0,null),o=mn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Jn(t,e.child,null,s),t.child.memoizedState=Va(s),t.memoizedState=Ia,o);if(!(t.mode&1))return Vi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(_(419)),r=Ms(o,r,void 0),Vi(e,t,s,r)}if(l=(s&e.childLanes)!==0,Ce||l){if(r=de,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,kt(e,i),nt(r,e,i,-1))}return ac(),r=Ms(Error(_(421))),Vi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Lv.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Me=Vt(i.nextSibling),Le=t,W=!0,et=null,e!==null&&(Ue[Fe++]=mt,Ue[Fe++]=gt,Ue[Fe++]=vn,mt=e.id,gt=e.overflow,vn=t),t=tc(t,r.children),t.flags|=4096,t)}function qu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Na(e.return,t,n)}function Ls(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Vp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(be(e,t,r.children,n),r=$.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qu(e,n,t);else if(e.tag===19)qu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V($,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Eo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ls(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Eo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ls(t,!0,n,null,o);break;case"together":Ls(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function to(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),wn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=Wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Sv(e,t,n){switch(t.tag){case 3:Rp(t),Xn();break;case 5:up(t);break;case 1:Ne(t.type)&&wo(t);break;case 4:Kl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;V(So,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V($,$.current&1),t.flags|=128,null):n&t.child.childLanes?Ip(e,t,n):(V($,$.current&1),e=bt(e,t,n),e!==null?e.sibling:null);V($,$.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Vp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V($,$.current),r)break;return null;case 22:case 23:return t.lanes=0,Mp(e,t,n)}return bt(e,t,n)}var Op,Oa,Up,Fp;Op=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Oa=function(){};Up=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,un(ct.current);var o=null;switch(n){case"input":i=aa(e,i),r=aa(e,r),o=[];break;case"select":i=G({},i,{value:void 0}),r=G({},r,{value:void 0}),o=[];break;case"textarea":i=ua(e,i),r=ua(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=vo)}ha(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Fr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Fr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&O("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Fp=function(e,t,n,r){n!==r&&(t.flags|=4)};function xr(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function jv(e,t,n){var r=t.pendingProps;switch(Ul(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return Ne(t.type)&&xo(),ye(t),null;case 3:return r=t.stateNode,Zn(),U(Pe),U(ke),ql(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ri(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,et!==null&&(Ka(et),et=null))),Oa(e,t),ye(t),null;case 5:Gl(t);var i=un(Zr.current);if(n=t.type,e!==null&&t.stateNode!=null)Up(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return ye(t),null}if(e=un(ct.current),Ri(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[at]=t,r[Xr]=o,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(i=0;i<Tr.length;i++)O(Tr[i],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":iu(r,o),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},O("invalid",r);break;case"textarea":su(r,o),O("invalid",r)}ha(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Li(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Li(r.textContent,l,e),i=["children",""+l]):Fr.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&O("scroll",r)}switch(n){case"input":_i(r),ou(r,o,!0);break;case"textarea":_i(r),au(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=vo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=mf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[at]=t,e[Xr]=r,Op(e,t,!1,!1),t.stateNode=e;e:{switch(s=fa(n,r),n){case"dialog":O("cancel",e),O("close",e),i=r;break;case"iframe":case"object":case"embed":O("load",e),i=r;break;case"video":case"audio":for(i=0;i<Tr.length;i++)O(Tr[i],e);i=r;break;case"source":O("error",e),i=r;break;case"img":case"image":case"link":O("error",e),O("load",e),i=r;break;case"details":O("toggle",e),i=r;break;case"input":iu(e,r),i=aa(e,r),O("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=G({},r,{value:void 0}),O("invalid",e);break;case"textarea":su(e,r),i=ua(e,r),O("invalid",e);break;default:i=r}ha(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?vf(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&gf(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Wr(e,c):typeof c=="number"&&Wr(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Fr.hasOwnProperty(o)?c!=null&&o==="onScroll"&&O("scroll",e):c!=null&&Tl(e,o,c,s))}switch(n){case"input":_i(e),ou(e,r,!1);break;case"textarea":_i(e),au(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ht(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Wn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Wn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=vo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ye(t),null;case 6:if(e&&t.stateNode!=null)Fp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=un(Zr.current),un(ct.current),Ri(t)){if(r=t.stateNode,n=t.memoizedProps,r[at]=t,(o=r.nodeValue!==n)&&(e=Le,e!==null))switch(e.tag){case 3:Li(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Li(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[at]=t,t.stateNode=r}return ye(t),null;case 13:if(U($),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Me!==null&&t.mode&1&&!(t.flags&128))op(),Xn(),t.flags|=98560,o=!1;else if(o=Ri(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[at]=t}else Xn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ye(t),o=!1}else et!==null&&(Ka(et),et=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||$.current&1?le===0&&(le=3):ac())),t.updateQueue!==null&&(t.flags|=4),ye(t),null);case 4:return Zn(),Oa(e,t),e===null&&qr(t.stateNode.containerInfo),ye(t),null;case 10:return Hl(t.type._context),ye(t),null;case 17:return Ne(t.type)&&xo(),ye(t),null;case 19:if(U($),o=t.memoizedState,o===null)return ye(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)xr(o,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Eo(e),s!==null){for(t.flags|=128,xr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V($,$.current&1|2),t.child}e=e.sibling}o.tail!==null&&Z()>tr&&(t.flags|=128,r=!0,xr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Eo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!W)return ye(t),null}else 2*Z()-o.renderingStartTime>tr&&n!==1073741824&&(t.flags|=128,r=!0,xr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Z(),t.sibling=null,n=$.current,V($,r?n&1|2:n&1),t):(ye(t),null);case 22:case 23:return sc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ze&1073741824&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Tv(e,t){switch(Ul(t),t.tag){case 1:return Ne(t.type)&&xo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zn(),U(Pe),U(ke),ql(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Gl(t),null;case 13:if(U($),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Xn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U($),null;case 4:return Zn(),null;case 10:return Hl(t.type._context),null;case 22:case 23:return sc(),null;case 24:return null;default:return null}}var Oi=!1,xe=!1,Ev=typeof WeakSet=="function"?WeakSet:Set,P=null;function Rn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function Ua(e,t,n){try{n()}catch(r){Q(e,t,r)}}var Qu=!1;function _v(e,t){if(Sa=mo,e=Yf(),Vl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,h=e,f=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(l=s+i),h!==o||r!==0&&h.nodeType!==3||(c=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(y=h.firstChild)!==null;)f=h,h=y;for(;;){if(h===e)break t;if(f===n&&++u===i&&(l=s),f===o&&++d===r&&(c=s),(y=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=y}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ja={focusedElem:e,selectionRange:n},mo=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,b=v.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?x:Je(t.type,x),b);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(k){Q(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return v=Qu,Qu=!1,v}function Mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ua(t,n,o)}i=i.next}while(i!==r)}}function Zo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Fa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wp(e){var t=e.alternate;t!==null&&(e.alternate=null,Wp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[at],delete t[Xr],delete t[_a],delete t[cv],delete t[uv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bp(e){return e.tag===5||e.tag===3||e.tag===4}function Xu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=vo));else if(r!==4&&(e=e.child,e!==null))for(Wa(e,t,n),e=e.sibling;e!==null;)Wa(e,t,n),e=e.sibling}function Ba(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ba(e,t,n),e=e.sibling;e!==null;)Ba(e,t,n),e=e.sibling}var he=null,Ze=!1;function Tt(e,t,n){for(n=n.child;n!==null;)Hp(e,t,n),n=n.sibling}function Hp(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount($o,n)}catch{}switch(n.tag){case 5:xe||Rn(n,t);case 6:var r=he,i=Ze;he=null,Tt(e,t,n),he=r,Ze=i,he!==null&&(Ze?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(Ze?(e=he,n=n.stateNode,e.nodeType===8?Ds(e.parentNode,n):e.nodeType===1&&Ds(e,n),Yr(e)):Ds(he,n.stateNode));break;case 4:r=he,i=Ze,he=n.stateNode.containerInfo,Ze=!0,Tt(e,t,n),he=r,Ze=i;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ua(n,t,s),i=i.next}while(i!==r)}Tt(e,t,n);break;case 1:if(!xe&&(Rn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Q(n,t,l)}Tt(e,t,n);break;case 21:Tt(e,t,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,Tt(e,t,n),xe=r):Tt(e,t,n);break;default:Tt(e,t,n)}}function Ju(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ev),t.forEach(function(r){var i=Rv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:he=l.stateNode,Ze=!1;break e;case 3:he=l.stateNode.containerInfo,Ze=!0;break e;case 4:he=l.stateNode.containerInfo,Ze=!0;break e}l=l.return}if(he===null)throw Error(_(160));Hp(o,s,i),he=null,Ze=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Q(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$p(t,e),t=t.sibling}function $p(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qe(t,e),ot(e),r&4){try{Mr(3,e,e.return),Zo(3,e)}catch(x){Q(e,e.return,x)}try{Mr(5,e,e.return)}catch(x){Q(e,e.return,x)}}break;case 1:qe(t,e),ot(e),r&512&&n!==null&&Rn(n,n.return);break;case 5:if(qe(t,e),ot(e),r&512&&n!==null&&Rn(n,n.return),e.flags&32){var i=e.stateNode;try{Wr(i,"")}catch(x){Q(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&ff(i,o),fa(l,s);var u=fa(l,o);for(s=0;s<c.length;s+=2){var d=c[s],h=c[s+1];d==="style"?vf(i,h):d==="dangerouslySetInnerHTML"?gf(i,h):d==="children"?Wr(i,h):Tl(i,d,h,u)}switch(l){case"input":la(i,o);break;case"textarea":pf(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Wn(i,!!o.multiple,y,!1):f!==!!o.multiple&&(o.defaultValue!=null?Wn(i,!!o.multiple,o.defaultValue,!0):Wn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Xr]=o}catch(x){Q(e,e.return,x)}}break;case 6:if(qe(t,e),ot(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){Q(e,e.return,x)}}break;case 3:if(qe(t,e),ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yr(t.containerInfo)}catch(x){Q(e,e.return,x)}break;case 4:qe(t,e),ot(e);break;case 13:qe(t,e),ot(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ic=Z())),r&4&&Ju(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(xe=(u=xe)||d,qe(t,e),xe=u):qe(t,e),ot(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(P=e,d=e.child;d!==null;){for(h=P=d;P!==null;){switch(f=P,y=f.child,f.tag){case 0:case 11:case 14:case 15:Mr(4,f,f.return);break;case 1:Rn(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){Q(r,n,x)}}break;case 5:Rn(f,f.return);break;case 22:if(f.memoizedState!==null){ed(h);continue}}y!==null?(y.return=f,P=y):ed(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=h.stateNode,c=h.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=yf("display",s))}catch(x){Q(e,e.return,x)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(x){Q(e,e.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:qe(t,e),ot(e),r&4&&Ju(e);break;case 21:break;default:qe(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bp(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wr(i,""),r.flags&=-33);var o=Xu(e);Ba(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Xu(e);Wa(e,l,s);break;default:throw Error(_(161))}}catch(c){Q(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Dv(e,t,n){P=e,Yp(e)}function Yp(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Oi;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||xe;l=Oi;var u=xe;if(Oi=s,(xe=c)&&!u)for(P=i;P!==null;)s=P,c=s.child,s.tag===22&&s.memoizedState!==null?td(i):c!==null?(c.return=s,P=c):td(i);for(;o!==null;)P=o,Yp(o),o=o.sibling;P=i,Oi=l,xe=u}Zu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,P=o):Zu(e)}}function Zu(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||Zo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Je(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Iu(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Iu(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Yr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}xe||t.flags&512&&Fa(t)}catch(f){Q(t,t.return,f)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function ed(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function td(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Zo(4,t)}catch(c){Q(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Q(t,i,c)}}var o=t.return;try{Fa(t)}catch(c){Q(t,o,c)}break;case 5:var s=t.return;try{Fa(t)}catch(c){Q(t,s,c)}}}catch(c){Q(t,t.return,c)}if(t===e){P=null;break}var l=t.sibling;if(l!==null){l.return=t.return,P=l;break}P=t.return}}var Cv=Math.ceil,Co=jt.ReactCurrentDispatcher,nc=jt.ReactCurrentOwner,He=jt.ReactCurrentBatchConfig,R=0,de=null,ne=null,pe=0,ze=0,In=qt(0),le=0,ri=null,wn=0,es=0,rc=0,Lr=null,De=null,ic=0,tr=1/0,ft=null,Po=!1,Ha=null,Ut=null,Ui=!1,At=null,No=0,Rr=0,$a=null,no=-1,ro=0;function Te(){return R&6?Z():no!==-1?no:no=Z()}function Ft(e){return e.mode&1?R&2&&pe!==0?pe&-pe:hv.transition!==null?(ro===0&&(ro=Pf()),ro):(e=I,e!==0||(e=window.event,e=e===void 0?16:If(e.type)),e):1}function nt(e,t,n,r){if(50<Rr)throw Rr=0,$a=null,Error(_(185));fi(e,n,r),(!(R&2)||e!==de)&&(e===de&&(!(R&2)&&(es|=n),le===4&&Pt(e,pe)),Ae(e,r),n===1&&R===0&&!(t.mode&1)&&(tr=Z()+500,Qo&&Qt()))}function Ae(e,t){var n=e.callbackNode;hy(e,t);var r=po(e,e===de?pe:0);if(r===0)n!==null&&uu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&uu(n),t===1)e.tag===0?dv(nd.bind(null,e)):np(nd.bind(null,e)),av(function(){!(R&6)&&Qt()}),n=null;else{switch(Nf(r)){case 1:n=Pl;break;case 4:n=Df;break;case 16:n=fo;break;case 536870912:n=Cf;break;default:n=fo}n=em(n,Kp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Kp(e,t){if(no=-1,ro=0,R&6)throw Error(_(327));var n=e.callbackNode;if(Kn()&&e.callbackNode!==n)return null;var r=po(e,e===de?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ao(e,r);else{t=r;var i=R;R|=2;var o=qp();(de!==e||pe!==t)&&(ft=null,tr=Z()+500,pn(e,t));do try{Av();break}catch(l){Gp(e,l)}while(!0);Bl(),Co.current=o,R=i,ne!==null?t=0:(de=null,pe=0,t=le)}if(t!==0){if(t===2&&(i=va(e),i!==0&&(r=i,t=Ya(e,i))),t===1)throw n=ri,pn(e,0),Pt(e,r),Ae(e,Z()),n;if(t===6)Pt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Pv(i)&&(t=Ao(e,r),t===2&&(o=va(e),o!==0&&(r=o,t=Ya(e,o))),t===1))throw n=ri,pn(e,0),Pt(e,r),Ae(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:sn(e,De,ft);break;case 3:if(Pt(e,r),(r&130023424)===r&&(t=ic+500-Z(),10<t)){if(po(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Te(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ea(sn.bind(null,e,De,ft),t);break}sn(e,De,ft);break;case 4:if(Pt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-tt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cv(r/1960))-r,10<r){e.timeoutHandle=Ea(sn.bind(null,e,De,ft),r);break}sn(e,De,ft);break;case 5:sn(e,De,ft);break;default:throw Error(_(329))}}}return Ae(e,Z()),e.callbackNode===n?Kp.bind(null,e):null}function Ya(e,t){var n=Lr;return e.current.memoizedState.isDehydrated&&(pn(e,t).flags|=256),e=Ao(e,t),e!==2&&(t=De,De=n,t!==null&&Ka(t)),e}function Ka(e){De===null?De=e:De.push.apply(De,e)}function Pv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!rt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pt(e,t){for(t&=~rc,t&=~es,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),r=1<<n;e[n]=-1,t&=~r}}function nd(e){if(R&6)throw Error(_(327));Kn();var t=po(e,0);if(!(t&1))return Ae(e,Z()),null;var n=Ao(e,t);if(e.tag!==0&&n===2){var r=va(e);r!==0&&(t=r,n=Ya(e,r))}if(n===1)throw n=ri,pn(e,0),Pt(e,t),Ae(e,Z()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sn(e,De,ft),Ae(e,Z()),null}function oc(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(tr=Z()+500,Qo&&Qt())}}function kn(e){At!==null&&At.tag===0&&!(R&6)&&Kn();var t=R;R|=1;var n=He.transition,r=I;try{if(He.transition=null,I=1,e)return e()}finally{I=r,He.transition=n,R=t,!(R&6)&&Qt()}}function sc(){ze=In.current,U(In)}function pn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,sv(n)),ne!==null)for(n=ne.return;n!==null;){var r=n;switch(Ul(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xo();break;case 3:Zn(),U(Pe),U(ke),ql();break;case 5:Gl(r);break;case 4:Zn();break;case 13:U($);break;case 19:U($);break;case 10:Hl(r.type._context);break;case 22:case 23:sc()}n=n.return}if(de=e,ne=e=Wt(e.current,null),pe=ze=t,le=0,ri=null,rc=es=wn=0,De=Lr=null,cn!==null){for(t=0;t<cn.length;t++)if(n=cn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}cn=null}return e}function Gp(e,t){do{var n=ne;try{if(Bl(),Zi.current=Do,_o){for(var r=K.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}_o=!1}if(xn=0,ue=se=K=null,zr=!1,ei=0,nc.current=null,n===null||n.return===null){le=1,ri=t,ne=null;break}e:{var o=e,s=n.return,l=n,c=t;if(t=pe,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Bu(s);if(y!==null){y.flags&=-257,Hu(y,s,l,o,t),y.mode&1&&Wu(o,u,t),t=y,c=u;var v=t.updateQueue;if(v===null){var x=new Set;x.add(c),t.updateQueue=x}else v.add(c);break e}else{if(!(t&1)){Wu(o,u,t),ac();break e}c=Error(_(426))}}else if(W&&l.mode&1){var b=Bu(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Hu(b,s,l,o,t),Fl(er(c,l));break e}}o=c=er(c,l),le!==4&&(le=2),Lr===null?Lr=[o]:Lr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=Np(o,c,t);Ru(o,g);break e;case 1:l=c;var m=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ut===null||!Ut.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=Ap(o,l,t);Ru(o,k);break e}}o=o.return}while(o!==null)}Xp(n)}catch(S){t=S,ne===n&&n!==null&&(ne=n=n.return);continue}break}while(!0)}function qp(){var e=Co.current;return Co.current=Do,e===null?Do:e}function ac(){(le===0||le===3||le===2)&&(le=4),de===null||!(wn&268435455)&&!(es&268435455)||Pt(de,pe)}function Ao(e,t){var n=R;R|=2;var r=qp();(de!==e||pe!==t)&&(ft=null,pn(e,t));do try{Nv();break}catch(i){Gp(e,i)}while(!0);if(Bl(),R=n,Co.current=r,ne!==null)throw Error(_(261));return de=null,pe=0,le}function Nv(){for(;ne!==null;)Qp(ne)}function Av(){for(;ne!==null&&!ry();)Qp(ne)}function Qp(e){var t=Zp(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?Xp(e):ne=t,nc.current=null}function Xp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Tv(n,t),n!==null){n.flags&=32767,ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,ne=null;return}}else if(n=jv(n,t,ze),n!==null){ne=n;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);le===0&&(le=5)}function sn(e,t,n){var r=I,i=He.transition;try{He.transition=null,I=1,zv(e,t,n,r)}finally{He.transition=i,I=r}return null}function zv(e,t,n,r){do Kn();while(At!==null);if(R&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(fy(e,o),e===de&&(ne=de=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ui||(Ui=!0,em(fo,function(){return Kn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=He.transition,He.transition=null;var s=I;I=1;var l=R;R|=4,nc.current=null,_v(e,n),$p(n,e),Zy(ja),mo=!!Sa,ja=Sa=null,e.current=n,Dv(n),iy(),R=l,I=s,He.transition=o}else e.current=n;if(Ui&&(Ui=!1,At=e,No=i),o=e.pendingLanes,o===0&&(Ut=null),ay(n.stateNode),Ae(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Po)throw Po=!1,e=Ha,Ha=null,e;return No&1&&e.tag!==0&&Kn(),o=e.pendingLanes,o&1?e===$a?Rr++:(Rr=0,$a=e):Rr=0,Qt(),null}function Kn(){if(At!==null){var e=Nf(No),t=He.transition,n=I;try{if(He.transition=null,I=16>e?16:e,At===null)var r=!1;else{if(e=At,At=null,No=0,R&6)throw Error(_(331));var i=R;for(R|=4,P=e.current;P!==null;){var o=P,s=o.child;if(P.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(P=u;P!==null;){var d=P;switch(d.tag){case 0:case 11:case 15:Mr(8,d,o)}var h=d.child;if(h!==null)h.return=d,P=h;else for(;P!==null;){d=P;var f=d.sibling,y=d.return;if(Wp(d),d===u){P=null;break}if(f!==null){f.return=y,P=f;break}P=y}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var b=x.sibling;x.sibling=null,x=b}while(x!==null)}}P=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,P=s;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Mr(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,P=g;break e}P=o.return}}var m=e.current;for(P=m;P!==null;){s=P;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,P=p;else e:for(s=m;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Zo(9,l)}}catch(S){Q(l,l.return,S)}if(l===s){P=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,P=k;break e}P=l.return}}if(R=i,Qt(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot($o,e)}catch{}r=!0}return r}finally{I=n,He.transition=t}}return!1}function rd(e,t,n){t=er(n,t),t=Np(e,t,1),e=Ot(e,t,1),t=Te(),e!==null&&(fi(e,1,t),Ae(e,t))}function Q(e,t,n){if(e.tag===3)rd(e,e,n);else for(;t!==null;){if(t.tag===3){rd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ut===null||!Ut.has(r))){e=er(n,e),e=Ap(t,e,1),t=Ot(t,e,1),e=Te(),t!==null&&(fi(t,1,e),Ae(t,e));break}}t=t.return}}function Mv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Te(),e.pingedLanes|=e.suspendedLanes&n,de===e&&(pe&n)===n&&(le===4||le===3&&(pe&130023424)===pe&&500>Z()-ic?pn(e,0):rc|=n),Ae(e,t)}function Jp(e,t){t===0&&(e.mode&1?(t=Pi,Pi<<=1,!(Pi&130023424)&&(Pi=4194304)):t=1);var n=Te();e=kt(e,t),e!==null&&(fi(e,t,n),Ae(e,n))}function Lv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jp(e,n)}function Rv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Jp(e,n)}var Zp;Zp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pe.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,Sv(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,W&&t.flags&1048576&&rp(t,bo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;to(e,t),e=t.pendingProps;var i=Qn(t,ke.current);Yn(t,n),i=Xl(null,t,r,e,i,n);var o=Jl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(o=!0,wo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Yl(t),i.updater=Jo,t.stateNode=i,i._reactInternals=t,za(t,r,e,n),t=Ra(null,t,r,!0,o,n)):(t.tag=0,W&&o&&Ol(t),be(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(to(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Vv(r),e=Je(r,e),i){case 0:t=La(null,t,r,e,n);break e;case 1:t=Ku(null,t,r,e,n);break e;case 11:t=$u(null,t,r,e,n);break e;case 14:t=Yu(null,t,r,Je(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Je(r,i),La(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Je(r,i),Ku(e,t,r,i,n);case 3:e:{if(Rp(t),e===null)throw Error(_(387));r=t.pendingProps,o=t.memoizedState,i=o.element,cp(e,t),To(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=er(Error(_(423)),t),t=Gu(e,t,r,n,i);break e}else if(r!==i){i=er(Error(_(424)),t),t=Gu(e,t,r,n,i);break e}else for(Me=Vt(t.stateNode.containerInfo.firstChild),Le=t,W=!0,et=null,n=ap(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xn(),r===i){t=bt(e,t,n);break e}be(e,t,r,n)}t=t.child}return t;case 5:return up(t),e===null&&Pa(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Ta(r,i)?s=null:o!==null&&Ta(r,o)&&(t.flags|=32),Lp(e,t),be(e,t,s,n),t.child;case 6:return e===null&&Pa(t),null;case 13:return Ip(e,t,n);case 4:return Kl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Jn(t,null,r,n):be(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Je(r,i),$u(e,t,r,i,n);case 7:return be(e,t,t.pendingProps,n),t.child;case 8:return be(e,t,t.pendingProps.children,n),t.child;case 12:return be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,V(So,r._currentValue),r._currentValue=s,o!==null)if(rt(o.value,s)){if(o.children===i.children&&!Pe.current){t=bt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=yt(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Na(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(_(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Na(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}be(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Yn(t,n),i=Ye(i),r=r(i),t.flags|=1,be(e,t,r,n),t.child;case 14:return r=t.type,i=Je(r,t.pendingProps),i=Je(r.type,i),Yu(e,t,r,i,n);case 15:return zp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Je(r,i),to(e,t),t.tag=1,Ne(r)?(e=!0,wo(t)):e=!1,Yn(t,n),Pp(t,r,i),za(t,r,i,n),Ra(null,t,r,!0,e,n);case 19:return Vp(e,t,n);case 22:return Mp(e,t,n)}throw Error(_(156,t.tag))};function em(e,t){return _f(e,t)}function Iv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,t,n,r){return new Iv(e,t,n,r)}function lc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vv(e){if(typeof e=="function")return lc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_l)return 11;if(e===Dl)return 14}return 2}function Wt(e,t){var n=e.alternate;return n===null?(n=We(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function io(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")lc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case _n:return mn(n.children,i,o,t);case El:s=8,i|=8;break;case ra:return e=We(12,n,t,i|2),e.elementType=ra,e.lanes=o,e;case ia:return e=We(13,n,t,i),e.elementType=ia,e.lanes=o,e;case oa:return e=We(19,n,t,i),e.elementType=oa,e.lanes=o,e;case uf:return ts(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case lf:s=10;break e;case cf:s=9;break e;case _l:s=11;break e;case Dl:s=14;break e;case _t:s=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=We(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function mn(e,t,n,r){return e=We(7,e,r,t),e.lanes=n,e}function ts(e,t,n,r){return e=We(22,e,r,t),e.elementType=uf,e.lanes=n,e.stateNode={isHidden:!1},e}function Rs(e,t,n){return e=We(6,e,null,t),e.lanes=n,e}function Is(e,t,n){return t=We(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ov(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ys(0),this.expirationTimes=ys(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ys(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function cc(e,t,n,r,i,o,s,l,c){return e=new Ov(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=We(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yl(o),e}function Uv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:En,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function tm(e){if(!e)return $t;e=e._reactInternals;e:{if(Sn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Ne(n))return tp(e,n,t)}return t}function nm(e,t,n,r,i,o,s,l,c){return e=cc(n,r,!0,e,i,o,s,l,c),e.context=tm(null),n=e.current,r=Te(),i=Ft(n),o=yt(r,i),o.callback=t??null,Ot(n,o,i),e.current.lanes=i,fi(e,i,r),Ae(e,r),e}function ns(e,t,n,r){var i=t.current,o=Te(),s=Ft(i);return n=tm(n),t.context===null?t.context=n:t.pendingContext=n,t=yt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ot(i,t,s),e!==null&&(nt(e,i,s,o),Ji(e,i,s)),s}function zo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function id(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function uc(e,t){id(e,t),(e=e.alternate)&&id(e,t)}function Fv(){return null}var rm=typeof reportError=="function"?reportError:function(e){console.error(e)};function dc(e){this._internalRoot=e}rs.prototype.render=dc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));ns(e,t,null,null)};rs.prototype.unmount=dc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;kn(function(){ns(null,e,null,null)}),t[wt]=null}};function rs(e){this._internalRoot=e}rs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ct.length&&t!==0&&t<Ct[n].priority;n++);Ct.splice(n,0,e),n===0&&Rf(e)}};function hc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function is(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function od(){}function Wv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=zo(s);o.call(u)}}var s=nm(t,r,e,0,null,!1,!1,"",od);return e._reactRootContainer=s,e[wt]=s.current,qr(e.nodeType===8?e.parentNode:e),kn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=zo(c);l.call(u)}}var c=cc(e,0,!1,null,null,!1,!1,"",od);return e._reactRootContainer=c,e[wt]=c.current,qr(e.nodeType===8?e.parentNode:e),kn(function(){ns(t,c,n,r)}),c}function os(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var c=zo(s);l.call(c)}}ns(t,s,e,i)}else s=Wv(n,t,e,i,r);return zo(s)}Af=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=jr(t.pendingLanes);n!==0&&(Nl(t,n|1),Ae(t,Z()),!(R&6)&&(tr=Z()+500,Qt()))}break;case 13:kn(function(){var r=kt(e,1);if(r!==null){var i=Te();nt(r,e,1,i)}}),uc(e,1)}};Al=function(e){if(e.tag===13){var t=kt(e,134217728);if(t!==null){var n=Te();nt(t,e,134217728,n)}uc(e,134217728)}};zf=function(e){if(e.tag===13){var t=Ft(e),n=kt(e,t);if(n!==null){var r=Te();nt(n,e,t,r)}uc(e,t)}};Mf=function(){return I};Lf=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};ma=function(e,t,n){switch(t){case"input":if(la(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=qo(r);if(!i)throw Error(_(90));hf(r),la(r,i)}}}break;case"textarea":pf(e,n);break;case"select":t=n.value,t!=null&&Wn(e,!!n.multiple,t,!1)}};kf=oc;bf=kn;var Bv={usingClientEntryPoint:!1,Events:[mi,Nn,qo,xf,wf,oc]},wr={findFiberByHostInstance:ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hv={bundleType:wr.bundleType,version:wr.version,rendererPackageName:wr.rendererPackageName,rendererConfig:wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tf(e),e===null?null:e.stateNode},findFiberByHostInstance:wr.findFiberByHostInstance||Fv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fi.isDisabled&&Fi.supportsFiber)try{$o=Fi.inject(Hv),lt=Fi}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bv;Ie.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hc(t))throw Error(_(200));return Uv(e,t,null,n)};Ie.createRoot=function(e,t){if(!hc(e))throw Error(_(299));var n=!1,r="",i=rm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=cc(e,1,!1,null,null,n,!1,r,i),e[wt]=t.current,qr(e.nodeType===8?e.parentNode:e),new dc(t)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Tf(t),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return kn(e)};Ie.hydrate=function(e,t,n){if(!is(t))throw Error(_(200));return os(null,e,t,!0,n)};Ie.hydrateRoot=function(e,t,n){if(!hc(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=rm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=nm(t,null,e,1,n??null,i,!1,o,s),e[wt]=t.current,qr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new rs(t)};Ie.render=function(e,t,n){if(!is(t))throw Error(_(200));return os(null,e,t,!1,n)};Ie.unmountComponentAtNode=function(e){if(!is(e))throw Error(_(40));return e._reactRootContainer?(kn(function(){os(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1};Ie.unstable_batchedUpdates=oc;Ie.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!is(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return os(e,t,n,!1,r)};Ie.version="18.3.1-next-f1338f8080-20240426";function im(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(im)}catch(e){console.error(e)}}im(),rf.exports=Ie;var $v=rf.exports,om,sd=$v;om=sd.createRoot,sd.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ii.apply(null,arguments)}var zt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(zt||(zt={}));const ad="popstate";function Yv(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:l}=r.location;return Ga("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Mo(i)}return Gv(t,n,null,e)}function ee(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function sm(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Kv(){return Math.random().toString(36).substr(2,8)}function ld(e,t){return{usr:e.state,key:e.key,idx:t}}function Ga(e,t,n,r){return n===void 0&&(n=null),ii({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ar(t):t,{state:n,key:t&&t.key||r||Kv()})}function Mo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ar(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Gv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,l=zt.Pop,c=null,u=d();u==null&&(u=0,s.replaceState(ii({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function h(){l=zt.Pop;let b=d(),g=b==null?null:b-u;u=b,c&&c({action:l,location:x.location,delta:g})}function f(b,g){l=zt.Push;let m=Ga(x.location,b,g);u=d()+1;let p=ld(m,u),k=x.createHref(m);try{s.pushState(p,"",k)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(k)}o&&c&&c({action:l,location:x.location,delta:1})}function y(b,g){l=zt.Replace;let m=Ga(x.location,b,g);u=d();let p=ld(m,u),k=x.createHref(m);s.replaceState(p,"",k),o&&c&&c({action:l,location:x.location,delta:0})}function v(b){let g=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof b=="string"?b:Mo(b);return m=m.replace(/ $/,"%20"),ee(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let x={get action(){return l},get location(){return e(i,s)},listen(b){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(ad,h),c=b,()=>{i.removeEventListener(ad,h),c=null}},createHref(b){return t(i,b)},createURL:v,encodeLocation(b){let g=v(b);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:y,go(b){return s.go(b)}};return x}var cd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(cd||(cd={}));function qv(e,t,n){return n===void 0&&(n="/"),Qv(e,t,n)}function Qv(e,t,n,r){let i=typeof t=="string"?ar(t):t,o=fc(i.pathname||"/",n);if(o==null)return null;let s=am(e);Xv(s);let l=null,c=cx(o);for(let u=0;l==null&&u<s.length;++u)l=sx(s[u],c);return l}function am(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};c.relativePath.startsWith("/")&&(ee(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Bt([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(ee(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),am(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:ix(u,o.index),routesMeta:d})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let c of lm(o.path))i(o,s,c)}),t}function lm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=lm(r.join("/")),l=[];return l.push(...s.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...s),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Xv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ox(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Jv=/^:[\w-]+$/,Zv=3,ex=2,tx=1,nx=10,rx=-2,ud=e=>e==="*";function ix(e,t){let n=e.split("/"),r=n.length;return n.some(ud)&&(r+=rx),t&&(r+=ex),n.filter(i=>!ud(i)).reduce((i,o)=>i+(Jv.test(o)?Zv:o===""?tx:nx),r)}function ox(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function sx(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",h=ax({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),f=c.route;if(!h)return null;Object.assign(i,h.params),s.push({params:i,pathname:Bt([o,h.pathname]),pathnameBase:hx(Bt([o,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(o=Bt([o,h.pathnameBase]))}return s}function ax(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=lx(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,h)=>{let{paramName:f,isOptional:y}=d;if(f==="*"){let x=l[h]||"";s=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const v=l[h];return y&&!v?u[f]=void 0:u[f]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function lx(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),sm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function cx(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return sm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function fc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ux(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ar(e):e,o;return n?(n=cm(n),n.startsWith("/")?o=dd(n.substring(1),"/"):o=dd(n,t)):o=t,{pathname:o,search:fx(r),hash:px(i)}}function dd(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Vs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function dx(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function pc(e,t){let n=dx(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function mc(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ar(e):(i=ii({},e),ee(!i.pathname||!i.pathname.includes("?"),Vs("?","pathname","search",i)),ee(!i.pathname||!i.pathname.includes("#"),Vs("#","pathname","hash",i)),ee(!i.search||!i.search.includes("#"),Vs("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=n;else{let h=t.length-1;if(!r&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),h-=1;i.pathname=f.join("/")}l=h>=0?t[h]:"/"}let c=ux(i,l),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const cm=e=>e.replace(/\/\/+/g,"/"),Bt=e=>cm(e.join("/")),hx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),fx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,px=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function mx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const um=["post","put","patch","delete"];new Set(um);const gx=["get",...um];new Set(gx);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oi(){return oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oi.apply(null,arguments)}const gc=w.createContext(null),yx=w.createContext(null),Xt=w.createContext(null),ss=w.createContext(null),Jt=w.createContext({outlet:null,matches:[],isDataRoute:!1}),dm=w.createContext(null);function vx(e,t){let{relative:n}=t===void 0?{}:t;lr()||ee(!1);let{basename:r,navigator:i}=w.useContext(Xt),{hash:o,pathname:s,search:l}=pm(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:Bt([r,s])),i.createHref({pathname:c,search:l,hash:o})}function lr(){return w.useContext(ss)!=null}function jn(){return lr()||ee(!1),w.useContext(ss).location}function hm(e){w.useContext(Xt).static||w.useLayoutEffect(e)}function fm(){let{isDataRoute:e}=w.useContext(Jt);return e?Nx():xx()}function xx(){lr()||ee(!1);let e=w.useContext(gc),{basename:t,future:n,navigator:r}=w.useContext(Xt),{matches:i}=w.useContext(Jt),{pathname:o}=jn(),s=JSON.stringify(pc(i,n.v7_relativeSplatPath)),l=w.useRef(!1);return hm(()=>{l.current=!0}),w.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let h=mc(u,JSON.parse(s),o,d.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Bt([t,h.pathname])),(d.replace?r.replace:r.push)(h,d.state,d)},[t,r,s,o,e])}function pm(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(Xt),{matches:i}=w.useContext(Jt),{pathname:o}=jn(),s=JSON.stringify(pc(i,r.v7_relativeSplatPath));return w.useMemo(()=>mc(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function wx(e,t){return kx(e,t)}function kx(e,t,n,r){lr()||ee(!1);let{navigator:i}=w.useContext(Xt),{matches:o}=w.useContext(Jt),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let u=jn(),d;if(t){var h;let b=typeof t=="string"?ar(t):t;c==="/"||(h=b.pathname)!=null&&h.startsWith(c)||ee(!1),d=b}else d=u;let f=d.pathname||"/",y=f;if(c!=="/"){let b=c.replace(/^\//,"").split("/");y="/"+f.replace(/^\//,"").split("/").slice(b.length).join("/")}let v=qv(e,{pathname:y}),x=Ex(v&&v.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:Bt([c,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?c:Bt([c,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),o,n,r);return t&&x?w.createElement(ss.Provider,{value:{location:oi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:zt.Pop}},x):x}function bx(){let e=Px(),t=mx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,null)}const Sx=w.createElement(bx,null);class jx extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(Jt.Provider,{value:this.props.routeContext},w.createElement(dm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Tx(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(gc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Jt.Provider,{value:t},r)}function Ex(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=s.findIndex(h=>h.route.id&&(l==null?void 0:l[h.route.id])!==void 0);d>=0||ee(!1),s=s.slice(0,Math.min(s.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let h=s[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=d),h.route.id){let{loaderData:f,errors:y}=n,v=h.route.loader&&f[h.route.id]===void 0&&(!y||y[h.route.id]===void 0);if(h.route.lazy||v){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,h,f)=>{let y,v=!1,x=null,b=null;n&&(y=l&&h.route.id?l[h.route.id]:void 0,x=h.route.errorElement||Sx,c&&(u<0&&f===0?(Ax("route-fallback"),v=!0,b=null):u===f&&(v=!0,b=h.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,f+1)),m=()=>{let p;return y?p=x:v?p=b:h.route.Component?p=w.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=d,w.createElement(Tx,{match:h,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:p})};return n&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?w.createElement(jx,{location:n.location,revalidation:n.revalidation,component:x,error:y,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var mm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(mm||{}),gm=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(gm||{});function _x(e){let t=w.useContext(gc);return t||ee(!1),t}function Dx(e){let t=w.useContext(yx);return t||ee(!1),t}function Cx(e){let t=w.useContext(Jt);return t||ee(!1),t}function ym(e){let t=Cx(),n=t.matches[t.matches.length-1];return n.route.id||ee(!1),n.route.id}function Px(){var e;let t=w.useContext(dm),n=Dx(),r=ym();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Nx(){let{router:e}=_x(mm.UseNavigateStable),t=ym(gm.UseNavigateStable),n=w.useRef(!1);return hm(()=>{n.current=!0}),w.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,oi({fromRouteId:t},o)))},[e,t])}const hd={};function Ax(e,t,n){hd[e]||(hd[e]=!0)}function zx(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function fd(e){let{to:t,replace:n,state:r,relative:i}=e;lr()||ee(!1);let{future:o,static:s}=w.useContext(Xt),{matches:l}=w.useContext(Jt),{pathname:c}=jn(),u=fm(),d=mc(t,pc(l,o.v7_relativeSplatPath),c,i==="path"),h=JSON.stringify(d);return w.useEffect(()=>u(JSON.parse(h),{replace:n,state:r,relative:i}),[u,h,i,n,r]),null}function ve(e){ee(!1)}function Mx(e){let{basename:t="/",children:n=null,location:r,navigationType:i=zt.Pop,navigator:o,static:s=!1,future:l}=e;lr()&&ee(!1);let c=t.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:c,navigator:o,static:s,future:oi({v7_relativeSplatPath:!1},l)}),[c,l,o,s]);typeof r=="string"&&(r=ar(r));let{pathname:d="/",search:h="",hash:f="",state:y=null,key:v="default"}=r,x=w.useMemo(()=>{let b=fc(d,c);return b==null?null:{location:{pathname:b,search:h,hash:f,state:y,key:v},navigationType:i}},[c,d,h,f,y,v,i]);return x==null?null:w.createElement(Xt.Provider,{value:u},w.createElement(ss.Provider,{children:n,value:x}))}function Lx(e){let{children:t,location:n}=e;return wx(qa(t),n)}new Promise(()=>{});function qa(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let o=[...t,i];if(r.type===w.Fragment){n.push.apply(n,qa(r.props.children,o));return}r.type!==ve&&ee(!1),!r.props.index||!r.props.children||ee(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=qa(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qa(){return Qa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qa.apply(null,arguments)}function Rx(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Ix(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Vx(e,t){return e.button===0&&(!t||t==="_self")&&!Ix(e)}const Ox=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ux="6";try{window.__reactRouterVersion=Ux}catch{}const Fx="startTransition",pd=M0[Fx];function Wx(e){let{basename:t,children:n,future:r,window:i}=e,o=w.useRef();o.current==null&&(o.current=Yv({window:i,v5Compat:!0}));let s=o.current,[l,c]=w.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=w.useCallback(h=>{u&&pd?pd(()=>c(h)):c(h)},[c,u]);return w.useLayoutEffect(()=>s.listen(d),[s,d]),w.useEffect(()=>zx(r),[r]),w.createElement(Mx,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const Bx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Hx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ae=w.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:l,target:c,to:u,preventScrollReset:d,viewTransition:h}=t,f=Rx(t,Ox),{basename:y}=w.useContext(Xt),v,x=!1;if(typeof u=="string"&&Hx.test(u)&&(v=u,Bx))try{let p=new URL(window.location.href),k=u.startsWith("//")?new URL(p.protocol+u):new URL(u),S=fc(k.pathname,y);k.origin===p.origin&&S!=null?u=S+k.search+k.hash:x=!0}catch{}let b=vx(u,{relative:i}),g=$x(u,{replace:s,state:l,target:c,preventScrollReset:d,relative:i,viewTransition:h});function m(p){r&&r(p),p.defaultPrevented||g(p)}return w.createElement("a",Qa({},f,{href:v||b,onClick:x||o?r:m,ref:n,target:c}))});var md;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(md||(md={}));var gd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(gd||(gd={}));function $x(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:l}=t===void 0?{}:t,c=fm(),u=jn(),d=pm(e,{relative:s});return w.useCallback(h=>{if(Vx(h,n)){h.preventDefault();let f=r!==void 0?r:Mo(u)===Mo(d);c(e,{replace:f,state:i,preventScrollReset:o,relative:s,viewTransition:l})}},[u,c,d,r,i,n,e,o,s,l])}const yc=w.createContext({});function vc(e){const t=w.useRef(null);return t.current===null&&(t.current=e()),t.current}const vm=typeof window<"u",xm=vm?w.useLayoutEffect:w.useEffect,as=w.createContext(null);function xc(e,t){e.indexOf(t)===-1&&e.push(t)}function wc(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const dt=(e,t,n)=>n>t?t:n<e?e:n;let kc=()=>{};const St={},wm=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function km(e){return typeof e=="object"&&e!==null}const bm=e=>/^0[^.\s]+$/u.test(e);function bc(e){let t;return()=>(t===void 0&&(t=e()),t)}const $e=e=>e,Yx=(e,t)=>n=>t(e(n)),yi=(...e)=>e.reduce(Yx),si=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r};class Sc{constructor(){this.subscriptions=[]}add(t){return xc(this.subscriptions,t),()=>wc(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const vt=e=>e*1e3,Be=e=>e/1e3;function Sm(e,t){return t?e*(1e3/t):0}const jm=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Kx=1e-7,Gx=12;function qx(e,t,n,r,i){let o,s,l=0;do s=t+(n-t)/2,o=jm(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>Kx&&++l<Gx);return s}function vi(e,t,n,r){if(e===t&&n===r)return $e;const i=o=>qx(o,0,1,e,n);return o=>o===0||o===1?o:jm(i(o),t,r)}const Tm=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Em=e=>t=>1-e(1-t),_m=vi(.33,1.53,.69,.99),jc=Em(_m),Dm=Tm(jc),Cm=e=>(e*=2)<1?.5*jc(e):.5*(2-Math.pow(2,-10*(e-1))),Tc=e=>1-Math.sin(Math.acos(e)),Pm=Em(Tc),Nm=Tm(Tc),Qx=vi(.42,0,1,1),Xx=vi(0,0,.58,1),Am=vi(.42,0,.58,1),Jx=e=>Array.isArray(e)&&typeof e[0]!="number",zm=e=>Array.isArray(e)&&typeof e[0]=="number",Zx={linear:$e,easeIn:Qx,easeInOut:Am,easeOut:Xx,circIn:Tc,circInOut:Nm,circOut:Pm,backIn:jc,backInOut:Dm,backOut:_m,anticipate:Cm},e1=e=>typeof e=="string",yd=e=>{if(zm(e)){kc(e.length===4);const[t,n,r,i]=e;return vi(t,n,r,i)}else if(e1(e))return Zx[e];return e},Wi=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function t1(e,t){let n=new Set,r=new Set,i=!1,o=!1;const s=new WeakSet;let l={delta:0,timestamp:0,isProcessing:!1};function c(d){s.has(d)&&(u.schedule(d),e()),d(l)}const u={schedule:(d,h=!1,f=!1)=>{const v=f&&i?n:r;return h&&s.add(d),v.has(d)||v.add(d),d},cancel:d=>{r.delete(d),s.delete(d)},process:d=>{if(l=d,i){o=!0;return}i=!0,[n,r]=[r,n],n.forEach(c),n.clear(),i=!1,o&&(o=!1,u.process(d))}};return u}const n1=40;function Mm(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=Wi.reduce((p,k)=>(p[k]=t1(o),p),{}),{setup:l,read:c,resolveKeyframes:u,preUpdate:d,update:h,preRender:f,render:y,postRender:v}=s,x=()=>{const p=St.useManualTiming?i.timestamp:performance.now();n=!1,St.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(p-i.timestamp,n1),1)),i.timestamp=p,i.isProcessing=!0,l.process(i),c.process(i),u.process(i),d.process(i),h.process(i),f.process(i),y.process(i),v.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(x))},b=()=>{n=!0,r=!0,i.isProcessing||e(x)};return{schedule:Wi.reduce((p,k)=>{const S=s[k];return p[k]=(T,E=!1,j=!1)=>(n||b(),S.schedule(T,E,j)),p},{}),cancel:p=>{for(let k=0;k<Wi.length;k++)s[Wi[k]].cancel(p)},state:i,steps:s}}const{schedule:F,cancel:Yt,state:fe,steps:Os}=Mm(typeof requestAnimationFrame<"u"?requestAnimationFrame:$e,!0);let oo;function r1(){oo=void 0}const Se={now:()=>(oo===void 0&&Se.set(fe.isProcessing||St.useManualTiming?fe.timestamp:performance.now()),oo),set:e=>{oo=e,queueMicrotask(r1)}},Lm=e=>t=>typeof t=="string"&&t.startsWith(e),Rm=Lm("--"),i1=Lm("var(--"),Ec=e=>i1(e)?o1.test(e.split("/*")[0].trim()):!1,o1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function vd(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const cr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ai={...cr,transform:e=>dt(0,1,e)},Bi={...cr,default:1},Ir=e=>Math.round(e*1e5)/1e5,_c=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function s1(e){return e==null}const a1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Dc=(e,t)=>n=>!!(typeof n=="string"&&a1.test(n)&&n.startsWith(e)||t&&!s1(n)&&Object.prototype.hasOwnProperty.call(n,t)),Im=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,s,l]=r.match(_c);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:l!==void 0?parseFloat(l):1}},l1=e=>dt(0,255,e),Us={...cr,transform:e=>Math.round(l1(e))},dn={test:Dc("rgb","red"),parse:Im("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Us.transform(e)+", "+Us.transform(t)+", "+Us.transform(n)+", "+Ir(ai.transform(r))+")"};function c1(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Xa={test:Dc("#"),parse:c1,transform:dn.transform},xi=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Et=xi("deg"),ut=xi("%"),C=xi("px"),u1=xi("vh"),d1=xi("vw"),xd={...ut,parse:e=>ut.parse(e)/100,transform:e=>ut.transform(e*100)},Vn={test:Dc("hsl","hue"),parse:Im("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+ut.transform(Ir(t))+", "+ut.transform(Ir(n))+", "+Ir(ai.transform(r))+")"},te={test:e=>dn.test(e)||Xa.test(e)||Vn.test(e),parse:e=>dn.test(e)?dn.parse(e):Vn.test(e)?Vn.parse(e):Xa.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?dn.transform(e):Vn.transform(e),getAnimatableNone:e=>{const t=te.parse(e);return t.alpha=0,te.transform(t)}},h1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function f1(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(_c))==null?void 0:t.length)||0)+(((n=e.match(h1))==null?void 0:n.length)||0)>0}const Vm="number",Om="color",p1="var",m1="var(",wd="${}",g1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function li(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const l=t.replace(g1,c=>(te.test(c)?(r.color.push(o),i.push(Om),n.push(te.parse(c))):c.startsWith(m1)?(r.var.push(o),i.push(p1),n.push(c)):(r.number.push(o),i.push(Vm),n.push(parseFloat(c))),++o,wd)).split(wd);return{values:n,split:l,indexes:r,types:i}}function Um(e){return li(e).values}function Fm(e){const{split:t,types:n}=li(e),r=t.length;return i=>{let o="";for(let s=0;s<r;s++)if(o+=t[s],i[s]!==void 0){const l=n[s];l===Vm?o+=Ir(i[s]):l===Om?o+=te.transform(i[s]):o+=i[s]}return o}}const y1=e=>typeof e=="number"?0:te.test(e)?te.getAnimatableNone(e):e;function v1(e){const t=Um(e);return Fm(e)(t.map(y1))}const Kt={test:f1,parse:Um,createTransformer:Fm,getAnimatableNone:v1};function Fs(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function x1({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;i=Fs(c,l,e+1/3),o=Fs(c,l,e),s=Fs(c,l,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}function Lo(e,t){return n=>n>0?t:e}const Y=(e,t,n)=>e+(t-e)*n,Ws=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},w1=[Xa,dn,Vn],k1=e=>w1.find(t=>t.test(e));function kd(e){const t=k1(e);if(!t)return!1;let n=t.parse(e);return t===Vn&&(n=x1(n)),n}const bd=(e,t)=>{const n=kd(e),r=kd(t);if(!n||!r)return Lo(e,t);const i={...n};return o=>(i.red=Ws(n.red,r.red,o),i.green=Ws(n.green,r.green,o),i.blue=Ws(n.blue,r.blue,o),i.alpha=Y(n.alpha,r.alpha,o),dn.transform(i))},Ja=new Set(["none","hidden"]);function b1(e,t){return Ja.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function S1(e,t){return n=>Y(e,t,n)}function Cc(e){return typeof e=="number"?S1:typeof e=="string"?Ec(e)?Lo:te.test(e)?bd:E1:Array.isArray(e)?Wm:typeof e=="object"?te.test(e)?bd:j1:Lo}function Wm(e,t){const n=[...e],r=n.length,i=e.map((o,s)=>Cc(o)(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}}function j1(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Cc(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function T1(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const o=t.types[i],s=e.indexes[o][r[o]],l=e.values[s]??0;n[i]=l,r[o]++}return n}const E1=(e,t)=>{const n=Kt.createTransformer(t),r=li(e),i=li(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Ja.has(e)&&!i.values.length||Ja.has(t)&&!r.values.length?b1(e,t):yi(Wm(T1(r,i),i.values),n):Lo(e,t)};function Bm(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?Y(e,t,n):Cc(e)(e,t)}const _1=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>F.update(t,n),stop:()=>Yt(t),now:()=>fe.isProcessing?fe.timestamp:Se.now()}},Hm=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let o=0;o<i;o++)r+=Math.round(e(o/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Ro=2e4;function Pc(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Ro;)t+=n,r=e.next(t);return t>=Ro?1/0:t}function D1(e,t=100,n){const r=n({...e,keyframes:[0,t]}),i=Math.min(Pc(r),Ro);return{type:"keyframes",ease:o=>r.next(i*o).value/t,duration:Be(i)}}const C1=5;function $m(e,t,n){const r=Math.max(t-C1,0);return Sm(n-e(r),t-r)}const q={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Bs=.001;function P1({duration:e=q.duration,bounce:t=q.bounce,velocity:n=q.velocity,mass:r=q.mass}){let i,o,s=1-t;s=dt(q.minDamping,q.maxDamping,s),e=dt(q.minDuration,q.maxDuration,Be(e)),s<1?(i=u=>{const d=u*s,h=d*e,f=d-n,y=Za(u,s),v=Math.exp(-h);return Bs-f/y*v},o=u=>{const h=u*s*e,f=h*n+n,y=Math.pow(s,2)*Math.pow(u,2)*e,v=Math.exp(-h),x=Za(Math.pow(u,2),s);return(-i(u)+Bs>0?-1:1)*((f-y)*v)/x}):(i=u=>{const d=Math.exp(-u*e),h=(u-n)*e+1;return-Bs+d*h},o=u=>{const d=Math.exp(-u*e),h=(n-u)*(e*e);return d*h});const l=5/e,c=A1(i,o,l);if(e=vt(e),isNaN(c))return{stiffness:q.stiffness,damping:q.damping,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const N1=12;function A1(e,t,n){let r=n;for(let i=1;i<N1;i++)r=r-e(r)/t(r);return r}function Za(e,t){return e*Math.sqrt(1-t*t)}const z1=["duration","bounce"],M1=["stiffness","damping","mass"];function Sd(e,t){return t.some(n=>e[n]!==void 0)}function L1(e){let t={velocity:q.velocity,stiffness:q.stiffness,damping:q.damping,mass:q.mass,isResolvedFromDuration:!1,...e};if(!Sd(e,M1)&&Sd(e,z1))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,o=2*dt(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:q.mass,stiffness:i,damping:o}}else{const n=P1(e);t={...t,...n,mass:q.mass},t.isResolvedFromDuration=!0}return t}function Io(e=q.visualDuration,t=q.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const o=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],l={done:!1,value:o},{stiffness:c,damping:u,mass:d,duration:h,velocity:f,isResolvedFromDuration:y}=L1({...n,velocity:-Be(n.velocity||0)}),v=f||0,x=u/(2*Math.sqrt(c*d)),b=s-o,g=Be(Math.sqrt(c/d)),m=Math.abs(b)<5;r||(r=m?q.restSpeed.granular:q.restSpeed.default),i||(i=m?q.restDelta.granular:q.restDelta.default);let p;if(x<1){const S=Za(g,x);p=T=>{const E=Math.exp(-x*g*T);return s-E*((v+x*g*b)/S*Math.sin(S*T)+b*Math.cos(S*T))}}else if(x===1)p=S=>s-Math.exp(-g*S)*(b+(v+g*b)*S);else{const S=g*Math.sqrt(x*x-1);p=T=>{const E=Math.exp(-x*g*T),j=Math.min(S*T,300);return s-E*((v+x*g*b)*Math.sinh(j)+S*b*Math.cosh(j))/S}}const k={calculatedDuration:y&&h||null,next:S=>{const T=p(S);if(y)l.done=S>=h;else{let E=S===0?v:0;x<1&&(E=S===0?vt(v):$m(p,S,T));const j=Math.abs(E)<=r,M=Math.abs(s-T)<=i;l.done=j&&M}return l.value=l.done?s:T,l},toString:()=>{const S=Math.min(Pc(k),Ro),T=Hm(E=>k.next(S*E).value,S,30);return S+"ms "+T},toTransition:()=>{}};return k}Io.applyToOptions=e=>{const t=D1(e,100,Io);return e.ease=t.ease,e.duration=vt(t.duration),e.type="keyframes",e};function el({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:l,max:c,restDelta:u=.5,restSpeed:d}){const h=e[0],f={done:!1,value:h},y=j=>l!==void 0&&j<l||c!==void 0&&j>c,v=j=>l===void 0?c:c===void 0||Math.abs(l-j)<Math.abs(c-j)?l:c;let x=n*t;const b=h+x,g=s===void 0?b:s(b);g!==b&&(x=g-h);const m=j=>-x*Math.exp(-j/r),p=j=>g+m(j),k=j=>{const M=m(j),N=p(j);f.done=Math.abs(M)<=u,f.value=f.done?g:N};let S,T;const E=j=>{y(f.value)&&(S=j,T=Io({keyframes:[f.value,v(f.value)],velocity:$m(p,j,f.value),damping:i,stiffness:o,restDelta:u,restSpeed:d}))};return E(0),{calculatedDuration:null,next:j=>{let M=!1;return!T&&S===void 0&&(M=!0,k(j),E(j)),S!==void 0&&j>=S?T.next(j-S):(!M&&k(j),f)}}}function R1(e,t,n){const r=[],i=n||St.mix||Bm,o=e.length-1;for(let s=0;s<o;s++){let l=i(e[s],e[s+1]);if(t){const c=Array.isArray(t)?t[s]||$e:t;l=yi(c,l)}r.push(l)}return r}function I1(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(kc(o===t.length),o===1)return()=>t[0];if(o===2&&t[0]===t[1])return()=>t[1];const s=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const l=R1(t,r,i),c=l.length,u=d=>{if(s&&d<e[0])return t[0];let h=0;if(c>1)for(;h<e.length-2&&!(d<e[h+1]);h++);const f=si(e[h],e[h+1],d);return l[h](f)};return n?d=>u(dt(e[0],e[o-1],d)):u}function V1(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=si(0,t,r);e.push(Y(n,1,i))}}function O1(e){const t=[0];return V1(t,e.length-1),t}function U1(e,t){return e.map(n=>n*t)}function F1(e,t){return e.map(()=>t||Am).splice(0,e.length-1)}function Vr({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=Jx(r)?r.map(yd):yd(r),o={done:!1,value:t[0]},s=U1(n&&n.length===t.length?n:O1(t),e),l=I1(s,t,{ease:Array.isArray(i)?i:F1(t,i)});return{calculatedDuration:e,next:c=>(o.value=l(c),o.done=c>=e,o)}}const W1=e=>e!==null;function Nc(e,{repeat:t,repeatType:n="loop"},r,i=1){const o=e.filter(W1),l=i<0||t&&n!=="loop"&&t%2===1?0:o.length-1;return!l||r===void 0?o[l]:r}const B1={decay:el,inertia:el,tween:Vr,keyframes:Vr,spring:Io};function Ym(e){typeof e.type=="string"&&(e.type=B1[e.type])}class Ac{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const H1=e=>e/100;class zc extends Ac{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,i;const{motionValue:n}=this.options;n&&n.updatedAt!==Se.now()&&this.tick(Se.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(r=this.options).onStop)==null||i.call(r))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;Ym(t);const{type:n=Vr,repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:s=0}=t;let{keyframes:l}=t;const c=n||Vr;c!==Vr&&typeof l[0]!="number"&&(this.mixKeyframes=yi(H1,Bm(l[0],l[1])),l=[0,100]);const u=c({...t,keyframes:l});o==="mirror"&&(this.mirroredGenerator=c({...t,keyframes:[...l].reverse(),velocity:-s})),u.calculatedDuration===null&&(u.calculatedDuration=Pc(u));const{calculatedDuration:d}=u;this.calculatedDuration=d,this.resolvedDuration=d+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=u}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:r,totalDuration:i,mixKeyframes:o,mirroredGenerator:s,resolvedDuration:l,calculatedDuration:c}=this;if(this.startTime===null)return r.next(0);const{delay:u=0,keyframes:d,repeat:h,repeatType:f,repeatDelay:y,type:v,onUpdate:x,finalKeyframe:b}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-i/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const g=this.currentTime-u*(this.playbackSpeed>=0?1:-1),m=this.playbackSpeed>=0?g<0:g>i;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let p=this.currentTime,k=r;if(h){const j=Math.min(this.currentTime,i)/l;let M=Math.floor(j),N=j%1;!N&&j>=1&&(N=1),N===1&&M--,M=Math.min(M,h+1),!!(M%2)&&(f==="reverse"?(N=1-N,y&&(N-=y/l)):f==="mirror"&&(k=s)),p=dt(0,1,N)*l}const S=m?{done:!1,value:d[0]}:k.next(p);o&&(S.value=o(S.value));let{done:T}=S;!m&&c!==null&&(T=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const E=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return E&&v!==el&&(S.value=Nc(d,this.options,b,this.speed)),x&&x(S.value),E&&this.finish(),S}then(t,n){return this.finished.then(t,n)}get duration(){return Be(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Be(t)}get time(){return Be(this.currentTime)}set time(t){var n;t=vt(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(Se.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Be(this.currentTime))}play(){var i,o;if(this.isStopped)return;const{driver:t=_1,startTime:n}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),(o=(i=this.options).onPlay)==null||o.call(i);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Se.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function $1(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const hn=e=>e*180/Math.PI,tl=e=>{const t=hn(Math.atan2(e[1],e[0]));return nl(t)},Y1={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:tl,rotateZ:tl,skewX:e=>hn(Math.atan(e[1])),skewY:e=>hn(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},nl=e=>(e=e%360,e<0&&(e+=360),e),jd=tl,Td=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Ed=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),K1={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Td,scaleY:Ed,scale:e=>(Td(e)+Ed(e))/2,rotateX:e=>nl(hn(Math.atan2(e[6],e[5]))),rotateY:e=>nl(hn(Math.atan2(-e[2],e[0]))),rotateZ:jd,rotate:jd,skewX:e=>hn(Math.atan(e[4])),skewY:e=>hn(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function rl(e){return e.includes("scale")?1:0}function il(e,t){if(!e||e==="none")return rl(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=K1,i=n;else{const l=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Y1,i=l}if(!i)return rl(t);const o=r[t],s=i[1].split(",").map(q1);return typeof o=="function"?o(s):s[o]}const G1=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return il(n,t)};function q1(e){return parseFloat(e.trim())}const ur=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],dr=new Set(ur),_d=e=>e===cr||e===C,Q1=new Set(["x","y","z"]),X1=ur.filter(e=>!Q1.has(e));function J1(e){const t=[];return X1.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Mt={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>il(t,"x"),y:(e,{transform:t})=>il(t,"y")};Mt.translateX=Mt.x;Mt.translateY=Mt.y;const gn=new Set;let ol=!1,sl=!1,al=!1;function Km(){if(sl){const e=Array.from(gn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=J1(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,s])=>{var l;(l=r.getValue(o))==null||l.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}sl=!1,ol=!1,gn.forEach(e=>e.complete(al)),gn.clear()}function Gm(){gn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(sl=!0)})}function Z1(){al=!0,Gm(),Km(),al=!1}class Mc{constructor(t,n,r,i,o,s=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=s}scheduleResolve(){this.state="scheduled",this.isAsync?(gn.add(this),ol||(ol=!0,F.read(Gm),F.resolveKeyframes(Km))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;if(t[0]===null){const o=i==null?void 0:i.get(),s=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const l=r.readValue(n,s);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=s),i&&o===void 0&&i.set(t[0])}$1(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),gn.delete(this)}cancel(){this.state==="scheduled"&&(gn.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const ew=e=>e.startsWith("--");function tw(e,t,n){ew(t)?e.style.setProperty(t,n):e.style[t]=n}const nw=bc(()=>window.ScrollTimeline!==void 0),rw={};function iw(e,t){const n=bc(e);return()=>rw[t]??n()}const qm=iw(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Er=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Dd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Er([0,.65,.55,1]),circOut:Er([.55,0,1,.45]),backIn:Er([.31,.01,.66,-.59]),backOut:Er([.33,1.53,.69,.99])};function Qm(e,t){if(e)return typeof e=="function"?qm()?Hm(e,t):"ease-out":zm(e)?Er(e):Array.isArray(e)?e.map(n=>Qm(n,t)||Dd.easeOut):Dd[e]}function ow(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:l="easeOut",times:c}={},u=void 0){const d={[t]:n};c&&(d.offset=c);const h=Qm(l,i);Array.isArray(h)&&(d.easing=h);const f={delay:r,duration:i,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"};return u&&(f.pseudoElement=u),e.animate(d,f)}function Xm(e){return typeof e=="function"&&"applyToOptions"in e}function sw({type:e,...t}){return Xm(e)&&qm()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class aw extends Ac{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:r,keyframes:i,pseudoElement:o,allowFlatten:s=!1,finalKeyframe:l,onComplete:c}=t;this.isPseudoElement=!!o,this.allowFlatten=s,this.options=t,kc(typeof t.type!="string");const u=sw(t);this.animation=ow(n,r,i,u,o),u.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!o){const d=Nc(i,this.options,l,this.speed);this.updateMotionValue?this.updateMotionValue(d):tw(n,r,d),this.animation.cancel()}c==null||c(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,n;this.isPseudoElement||(n=(t=this.animation).commitStyles)==null||n.call(t)}get duration(){var n,r;const t=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return Be(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Be(t)}get time(){return Be(Number(this.animation.currentTime)||0)}set time(t){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=vt(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,observe:n}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&nw()?(this.animation.timeline=t,$e):n(this)}}const Jm={anticipate:Cm,backInOut:Dm,circInOut:Nm};function lw(e){return e in Jm}function cw(e){typeof e.ease=="string"&&lw(e.ease)&&(e.ease=Jm[e.ease])}const Hs=10;class uw extends aw{constructor(t){cw(t),Ym(t),super(t),t.startTime!==void 0&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:r,onComplete:i,element:o,...s}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const l=new zc({...s,autoplay:!1}),c=Math.max(Hs,Se.now()-this.startTime),u=dt(0,Hs,c-Hs);n.setWithVelocity(l.sample(Math.max(0,c-u)).value,l.sample(c).value,u),l.stop()}}const Cd=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Kt.test(e)||e==="0")&&!e.startsWith("url("));function dw(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function hw(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],s=Cd(i,t),l=Cd(o,t);return!s||!l?!1:dw(e)||(n==="spring"||Xm(n))&&r}function ll(e){e.duration=0,e.type="keyframes"}const fw=new Set(["opacity","clipPath","filter","transform"]),pw=bc(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function mw(e){var d;const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:o,type:s}=e;if(!(((d=t==null?void 0:t.owner)==null?void 0:d.current)instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:u}=t.owner.getProps();return pw()&&n&&fw.has(n)&&(n!=="transform"||!u)&&!c&&!r&&i!=="mirror"&&o!==0&&s!=="inertia"}const gw=40;class yw extends Ac{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s="loop",keyframes:l,name:c,motionValue:u,element:d,...h}){var v;super(),this.stop=()=>{var x,b;this._animation&&(this._animation.stop(),(x=this.stopTimeline)==null||x.call(this)),(b=this.keyframeResolver)==null||b.cancel()},this.createdAt=Se.now();const f={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:s,name:c,motionValue:u,element:d,...h},y=(d==null?void 0:d.KeyframeResolver)||Mc;this.keyframeResolver=new y(l,(x,b,g)=>this.onKeyframesResolved(x,b,f,!g),c,u,d),(v=this.keyframeResolver)==null||v.scheduleResolve()}onKeyframesResolved(t,n,r,i){this.keyframeResolver=void 0;const{name:o,type:s,velocity:l,delay:c,isHandoff:u,onUpdate:d}=r;this.resolvedAt=Se.now(),hw(t,o,s,l)||((St.instantAnimations||!c)&&(d==null||d(Nc(t,r,n))),t[0]=t[t.length-1],ll(r),r.repeat=0);const f={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>gw?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:t},y=!u&&mw(f)?new uw({...f,element:f.motionValue.owner.current}):new zc(f);y.finished.then(()=>this.notifyFinished()).catch($e),this.pendingTimeline&&(this.stopTimeline=y.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=y}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),Z1()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}const vw=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function xw(e){const t=vw.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function Zm(e,t,n=1){const[r,i]=xw(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return wm(s)?parseFloat(s):s}return Ec(i)?Zm(i,t,n+1):i}function Lc(e,t){return(e==null?void 0:e[t])??(e==null?void 0:e.default)??e}const ww={type:"spring",stiffness:500,damping:25,restSpeed:10},kw=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),bw={type:"keyframes",duration:.8},Sw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},jw=(e,{keyframes:t})=>t.length>2?bw:dr.has(e)?e.startsWith("scale")?kw(t[1]):ww:Sw;function Tw({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:l,from:c,elapsed:u,...d}){return!!Object.keys(d).length}const Ew=e=>e!==null;function _w(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(Ew),o=t&&n!=="loop"&&t%2===1?0:i.length-1;return i[o]}function eg(e,t,n,r=0,i=1){const o=Array.from(e).sort((u,d)=>u.sortNodePosition(d)).indexOf(t),s=e.size,l=(s-1)*r;return typeof n=="function"?n(o,s):i===1?o*r:l-o*r}const Rc=(e,t,n,r={},i,o)=>s=>{const l=Lc(r,e)||{},c=l.delay||r.delay||0;let{elapsed:u=0}=r;u=u-vt(c);const d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-u,onUpdate:f=>{t.set(f),l.onUpdate&&l.onUpdate(f)},onComplete:()=>{s(),l.onComplete&&l.onComplete()},name:e,motionValue:t,element:o?void 0:i};Tw(l)||Object.assign(d,jw(e,d)),d.duration&&(d.duration=vt(d.duration)),d.repeatDelay&&(d.repeatDelay=vt(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let h=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(ll(d),d.delay===0&&(h=!0)),(St.instantAnimations||St.skipAnimations)&&(h=!0,ll(d),d.delay=0),d.allowFlatten=!l.type&&!l.ease,h&&!o&&t.get()!==void 0){const f=_w(d.keyframes,l);if(f!==void 0){F.update(()=>{d.onUpdate(f),d.onComplete()});return}}return l.isSync?new zc(d):new yw(d)},tg=new Set(["width","height","top","left","right","bottom",...ur]),Pd=30,Dw=e=>!isNaN(parseFloat(e));class Cw{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var o;const i=Se.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((o=this.events.change)==null||o.notify(this.current),this.dependents))for(const s of this.dependents)s.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Se.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=Dw(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Sc);const r=this.events[t].add(n);return t==="change"?()=>{r(),F.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Se.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Pd)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Pd);return Sm(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function nr(e,t){return new Cw(e,t)}function Nd(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Ic(e,t,n,r){if(typeof t=="function"){const[i,o]=Nd(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=Nd(r);t=t(n!==void 0?n:e.custom,i,o)}return t}function Gn(e,t,n){const r=e.getProps();return Ic(r,t,n!==void 0?n:r.custom,e)}const cl=e=>Array.isArray(e);function Pw(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,nr(n))}function Nw(e){return cl(e)?e[e.length-1]||0:e}function Aw(e,t){const n=Gn(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const s in o){const l=Nw(o[s]);Pw(e,s,l)}}const we=e=>!!(e&&e.getVelocity);function zw(e){return!!(we(e)&&e.add)}function ul(e,t){const n=e.getValue("willChange");if(zw(n))return n.add(t);if(!n&&St.WillChange){const r=new St.WillChange("auto");e.addValue("willChange",r),r.add(t)}}function Vc(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const Mw="framerAppearId",ng="data-"+Vc(Mw);function rg(e){return e.props[ng]}function Lw({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function ig(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:s,...l}=t;r&&(o=r);const c=[],u=i&&e.animationState&&e.animationState.getState()[i];for(const d in l){const h=e.getValue(d,e.latestValues[d]??null),f=l[d];if(f===void 0||u&&Lw(u,d))continue;const y={delay:n,...Lc(o||{},d)},v=h.get();if(v!==void 0&&!h.isAnimating&&!Array.isArray(f)&&f===v&&!y.velocity)continue;let x=!1;if(window.MotionHandoffAnimation){const g=rg(e);if(g){const m=window.MotionHandoffAnimation(g,d,F);m!==null&&(y.startTime=m,x=!0)}}ul(e,d),h.start(Rc(d,h,f,e.shouldReduceMotion&&tg.has(d)?{type:!1}:y,e,x));const b=h.animation;b&&c.push(b)}return s&&Promise.all(c).then(()=>{F.update(()=>{s&&Aw(e,s)})}),c}function dl(e,t,n={}){var c;const r=Gn(e,t,n.type==="exit"?(c=e.presenceContext)==null?void 0:c.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(ig(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:h,staggerDirection:f}=i;return Rw(e,t,u,d,h,f,n)}:()=>Promise.resolve(),{when:l}=i;if(l){const[u,d]=l==="beforeChildren"?[o,s]:[s,o];return u().then(()=>d())}else return Promise.all([o(),s(n.delay)])}function Rw(e,t,n=0,r=0,i=0,o=1,s){const l=[];for(const c of e.variantChildren)c.notify("AnimationStart",t),l.push(dl(c,t,{...s,delay:n+(typeof r=="function"?0:r)+eg(e.variantChildren,c,r,i,o)}).then(()=>c.notify("AnimationComplete",t)));return Promise.all(l)}function Iw(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>dl(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=dl(e,t,n);else{const i=typeof t=="function"?Gn(e,t,n.custom):t;r=Promise.all(ig(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const Vw={test:e=>e==="auto",parse:e=>e},og=e=>t=>t.test(e),sg=[cr,C,ut,Et,d1,u1,Vw],Ad=e=>sg.find(og(e));function Ow(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||bm(e):!0}const Uw=new Set(["brightness","contrast","saturate","opacity"]);function Fw(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(_c)||[];if(!r)return e;const i=n.replace(r,"");let o=Uw.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const Ww=/\b([a-z-]*)\(.*?\)/gu,hl={...Kt,getAnimatableNone:e=>{const t=e.match(Ww);return t?t.map(Fw).join(" "):e}},zd={...cr,transform:Math.round},Bw={rotate:Et,rotateX:Et,rotateY:Et,rotateZ:Et,scale:Bi,scaleX:Bi,scaleY:Bi,scaleZ:Bi,skew:Et,skewX:Et,skewY:Et,distance:C,translateX:C,translateY:C,translateZ:C,x:C,y:C,z:C,perspective:C,transformPerspective:C,opacity:ai,originX:xd,originY:xd,originZ:C},Oc={borderWidth:C,borderTopWidth:C,borderRightWidth:C,borderBottomWidth:C,borderLeftWidth:C,borderRadius:C,radius:C,borderTopLeftRadius:C,borderTopRightRadius:C,borderBottomRightRadius:C,borderBottomLeftRadius:C,width:C,maxWidth:C,height:C,maxHeight:C,top:C,right:C,bottom:C,left:C,inset:C,insetBlock:C,insetBlockStart:C,insetBlockEnd:C,insetInline:C,insetInlineStart:C,insetInlineEnd:C,padding:C,paddingTop:C,paddingRight:C,paddingBottom:C,paddingLeft:C,paddingBlock:C,paddingBlockStart:C,paddingBlockEnd:C,paddingInline:C,paddingInlineStart:C,paddingInlineEnd:C,margin:C,marginTop:C,marginRight:C,marginBottom:C,marginLeft:C,marginBlock:C,marginBlockStart:C,marginBlockEnd:C,marginInline:C,marginInlineStart:C,marginInlineEnd:C,backgroundPositionX:C,backgroundPositionY:C,...Bw,zIndex:zd,fillOpacity:ai,strokeOpacity:ai,numOctaves:zd},Hw={...Oc,color:te,backgroundColor:te,outlineColor:te,fill:te,stroke:te,borderColor:te,borderTopColor:te,borderRightColor:te,borderBottomColor:te,borderLeftColor:te,filter:hl,WebkitFilter:hl},ag=e=>Hw[e];function lg(e,t){let n=ag(e);return n!==hl&&(n=Kt),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const $w=new Set(["auto","none","0"]);function Yw(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!$w.has(o)&&li(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=lg(n,i)}class Kw extends Mc{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let d=0;d<t.length;d++){let h=t[d];if(typeof h=="string"&&(h=h.trim(),Ec(h))){const f=Zm(h,n.current);f!==void 0&&(t[d]=f),d===t.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!tg.has(r)||t.length!==2)return;const[i,o]=t,s=Ad(i),l=Ad(o),c=vd(i),u=vd(o);if(c!==u&&Mt[r]){this.needsMeasurement=!0;return}if(s!==l)if(_d(s)&&_d(l))for(let d=0;d<t.length;d++){const h=t[d];typeof h=="string"&&(t[d]=parseFloat(h))}else Mt[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)(t[i]===null||Ow(t[i]))&&r.push(i);r.length&&Yw(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Mt[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var l;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const i=t.getValue(n);i&&i.jump(this.measuredOrigin,!1);const o=r.length-1,s=r[o];r[o]=Mt[n](t.measureViewportBox(),window.getComputedStyle(t.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),(l=this.removedTransforms)!=null&&l.length&&this.removedTransforms.forEach(([c,u])=>{t.getValue(c).set(u)}),this.resolveNoneKeyframes()}}function Gw(e,t,n){if(e instanceof EventTarget)return[e];if(typeof e=="string"){let r=document;const i=(n==null?void 0:n[e])??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e)}const cg=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function ug(e){return km(e)&&"offsetHeight"in e}const{schedule:Uc}=Mm(queueMicrotask,!1),Xe={x:!1,y:!1};function dg(){return Xe.x||Xe.y}function qw(e){return e==="x"||e==="y"?Xe[e]?null:(Xe[e]=!0,()=>{Xe[e]=!1}):Xe.x||Xe.y?null:(Xe.x=Xe.y=!0,()=>{Xe.x=Xe.y=!1})}function hg(e,t){const n=Gw(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function Md(e){return!(e.pointerType==="touch"||dg())}function Qw(e,t,n={}){const[r,i,o]=hg(e,n),s=l=>{if(!Md(l))return;const{target:c}=l,u=t(c,l);if(typeof u!="function"||!c)return;const d=h=>{Md(h)&&(u(h),c.removeEventListener("pointerleave",d))};c.addEventListener("pointerleave",d,i)};return r.forEach(l=>{l.addEventListener("pointerenter",s,i)}),o}const fg=(e,t)=>t?e===t?!0:fg(e,t.parentElement):!1,Fc=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,Xw=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function pg(e){return Xw.has(e.tagName)||e.isContentEditable===!0}const so=new WeakSet;function Ld(e){return t=>{t.key==="Enter"&&e(t)}}function $s(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const Jw=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=Ld(()=>{if(so.has(n))return;$s(n,"down");const i=Ld(()=>{$s(n,"up")}),o=()=>$s(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",o,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function Rd(e){return Fc(e)&&!dg()}function Zw(e,t,n={}){const[r,i,o]=hg(e,n),s=l=>{const c=l.currentTarget;if(!Rd(l))return;so.add(c);const u=t(c,l),d=(y,v)=>{window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",f),so.has(c)&&so.delete(c),Rd(y)&&typeof u=="function"&&u(y,{success:v})},h=y=>{d(y,c===window||c===document||n.useGlobalTarget||fg(c,y.target))},f=y=>{d(y,!1)};window.addEventListener("pointerup",h,i),window.addEventListener("pointercancel",f,i)};return r.forEach(l=>{(n.useGlobalTarget?window:l).addEventListener("pointerdown",s,i),ug(l)&&(l.addEventListener("focus",u=>Jw(u,i)),!pg(l)&&!l.hasAttribute("tabindex")&&(l.tabIndex=0))}),o}function mg(e){return km(e)&&"ownerSVGElement"in e}function e2(e){return mg(e)&&e.tagName==="svg"}const t2=[...sg,te,Kt],n2=e=>t2.find(og(e)),Id=()=>({translate:0,scale:1,origin:0,originPoint:0}),On=()=>({x:Id(),y:Id()}),Vd=()=>({min:0,max:0}),oe=()=>({x:Vd(),y:Vd()}),Vo={current:null},Wc={current:!1},r2=typeof window<"u";function gg(){if(Wc.current=!0,!!r2)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Vo.current=e.matches;e.addEventListener("change",t),t()}else Vo.current=!1}const i2=new WeakMap;function ls(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function ci(e){return typeof e=="string"||Array.isArray(e)}const Bc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Hc=["initial",...Bc];function cs(e){return ls(e.animate)||Hc.some(t=>ci(e[t]))}function yg(e){return!!(cs(e)||e.variants)}function o2(e,t,n){for(const r in t){const i=t[r],o=n[r];if(we(i))e.addValue(r,i);else if(we(o))e.addValue(r,nr(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const s=e.getValue(r);s.liveStyle===!0?s.jump(i):s.hasAnimated||s.set(i)}else{const s=e.getStaticValue(r);e.addValue(r,nr(s!==void 0?s:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Od=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Oo={};function vg(e){Oo=e}function s2(){return Oo}class a2{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:s},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Mc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const f=Se.now();this.renderScheduledAt<f&&(this.renderScheduledAt=f,F.render(this.render,!1,!0))};const{latestValues:c,renderState:u}=s;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=cs(n),this.isVariantNode=yg(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...h}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in h){const y=h[f];c[f]!==void 0&&we(y)&&y.set(c[f])}}mount(t){var n;this.current=t,i2.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,i)=>this.bindToMotionValue(i,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Wc.current||gg(),this.shouldReduceMotion=Vo.current),(n=this.parent)==null||n.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var t;this.projection&&this.projection.unmount(),Yt(this.notifyUpdate),Yt(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=dr.has(t);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&F.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let o;typeof window<"u"&&window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Oo){const n=Oo[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):oe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Od.length;r++){const i=Od[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,s=t[o];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=o2(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=nr(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(wm(r)||bm(r))?r=parseFloat(r):!n2(r)&&Kt.test(n)&&(r=lg(t,n)),this.setBaseTarget(t,we(r)?r.get():r)),we(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var o;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const s=Ic(this.props,n,(o=this.presenceContext)==null?void 0:o.custom);s&&(r=s[t])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!we(i)?i:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Sc),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){Uc.render(this.render)}}class Zt{constructor(t){this.isMounted=!1,this.node=t}update(){}}class xg extends a2{constructor(){super(...arguments),this.KeyframeResolver=Kw}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const r=t.style;return r?r[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;we(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function wg({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function l2({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function c2(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Ys(e){return e===void 0||e===1}function fl({scale:e,scaleX:t,scaleY:n}){return!Ys(e)||!Ys(t)||!Ys(n)}function an(e){return fl(e)||kg(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function kg(e){return Ud(e.x)||Ud(e.y)}function Ud(e){return e&&e!=="0%"}function Uo(e,t,n){const r=e-n,i=t*r;return n+i}function Fd(e,t,n,r,i){return i!==void 0&&(e=Uo(e,i,r)),Uo(e,n,r)+t}function pl(e,t=0,n=1,r,i){e.min=Fd(e.min,t,n,r,i),e.max=Fd(e.max,t,n,r,i)}function bg(e,{x:t,y:n}){pl(e.x,t.translate,t.scale,t.originPoint),pl(e.y,n.translate,n.scale,n.originPoint)}const Wd=.999999999999,Bd=1.0000000000001;function u2(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let l=0;l<i;l++){o=n[l],s=o.projectionDelta;const{visualElement:c}=o.options;c&&c.props.style&&c.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&Fn(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,bg(e,s)),r&&an(o.latestValues)&&Fn(e,o.latestValues))}t.x<Bd&&t.x>Wd&&(t.x=1),t.y<Bd&&t.y>Wd&&(t.y=1)}function Un(e,t){e.min=e.min+t,e.max=e.max+t}function Hd(e,t,n,r,i=.5){const o=Y(e.min,e.max,i);pl(e,t,n,o,r)}function Fn(e,t){Hd(e.x,t.x,t.scaleX,t.scale,t.originX),Hd(e.y,t.y,t.scaleY,t.scale,t.originY)}function Sg(e,t){return wg(c2(e.getBoundingClientRect(),t))}function d2(e,t,n){const r=Sg(e,n),{scroll:i}=t;return i&&(Un(r.x,i.offset.x),Un(r.y,i.offset.y)),r}const h2={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},f2=ur.length;function p2(e,t,n){let r="",i=!0;for(let o=0;o<f2;o++){const s=ur[o],l=e[s];if(l===void 0)continue;let c=!0;if(typeof l=="number"?c=l===(s.startsWith("scale")?1:0):c=parseFloat(l)===0,!c||n){const u=cg(l,Oc[s]);if(!c){i=!1;const d=h2[s]||s;r+=`${d}(${u}) `}n&&(t[s]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function $c(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let s=!1,l=!1;for(const c in t){const u=t[c];if(dr.has(c)){s=!0;continue}else if(Rm(c)){i[c]=u;continue}else{const d=cg(u,Oc[c]);c.startsWith("origin")?(l=!0,o[c]=d):r[c]=d}}if(t.transform||(s||n?r.transform=p2(t,e.transform,n):r.transform&&(r.transform="none")),l){const{originX:c="50%",originY:u="50%",originZ:d=0}=o;r.transformOrigin=`${c} ${u} ${d}`}}function jg(e,{style:t,vars:n},r,i){const o=e.style;let s;for(s in t)o[s]=t[s];i==null||i.applyProjectionStyles(o,r);for(s in n)o.setProperty(s,n[s])}function $d(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const kr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(C.test(e))e=parseFloat(e);else return e;const n=$d(e,t.target.x),r=$d(e,t.target.y);return`${n}% ${r}%`}},m2={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Kt.parse(e);if(i.length>5)return r;const o=Kt.createTransformer(e),s=typeof i[0]!="number"?1:0,l=n.x.scale*t.x,c=n.y.scale*t.y;i[0+s]/=l,i[1+s]/=c;const u=Y(l,c,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),o(i)}},ml={borderRadius:{...kr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:kr,borderTopRightRadius:kr,borderBottomLeftRadius:kr,borderBottomRightRadius:kr,boxShadow:m2};function Tg(e,{layout:t,layoutId:n}){return dr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!ml[e]||e==="opacity")}function Yc(e,t,n){var s;const r=e.style,i=t==null?void 0:t.style,o={};if(!r)return o;for(const l in r)(we(r[l])||i&&we(i[l])||Tg(l,e)||((s=n==null?void 0:n.getValue(l))==null?void 0:s.liveStyle)!==void 0)&&(o[l]=r[l]);return o}function g2(e){return window.getComputedStyle(e)}class y2 extends xg{constructor(){super(...arguments),this.type="html",this.renderInstance=jg}readValueFromInstance(t,n){var r;if(dr.has(n))return(r=this.projection)!=null&&r.isProjecting?rl(n):G1(t,n);{const i=g2(t),o=(Rm(n)?i.getPropertyValue(n):i[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Sg(t,n)}build(t,n,r){$c(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Yc(t,n,r)}}const v2={offset:"stroke-dashoffset",array:"stroke-dasharray"},x2={offset:"strokeDashoffset",array:"strokeDasharray"};function w2(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?v2:x2;e[o.offset]=C.transform(-r);const s=C.transform(t),l=C.transform(n);e[o.array]=`${s} ${l}`}const k2=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Eg(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:o=1,pathOffset:s=0,...l},c,u,d){if($c(e,l,u),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:h,style:f}=e;h.transform&&(f.transform=h.transform,delete h.transform),(f.transform||h.transformOrigin)&&(f.transformOrigin=h.transformOrigin??"50% 50%",delete h.transformOrigin),f.transform&&(f.transformBox=(d==null?void 0:d.transformBox)??"fill-box",delete h.transformBox);for(const y of k2)h[y]!==void 0&&(f[y]=h[y],delete h[y]);t!==void 0&&(h.x=t),n!==void 0&&(h.y=n),r!==void 0&&(h.scale=r),i!==void 0&&w2(h,i,o,s,!1)}const _g=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Dg=e=>typeof e=="string"&&e.toLowerCase()==="svg";function b2(e,t,n,r){jg(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(_g.has(i)?i:Vc(i),t.attrs[i])}function Cg(e,t,n){const r=Yc(e,t,n);for(const i in e)if(we(e[i])||we(t[i])){const o=ur.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}class S2 extends xg{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=oe}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(dr.has(n)){const r=ag(n);return r&&r.default||0}return n=_g.has(n)?n:Vc(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Cg(t,n,r)}build(t,n,r){Eg(t,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(t,n,r,i){b2(t,n,r,i)}mount(t){this.isSVGTag=Dg(t.tagName),super.mount(t)}}const j2=Hc.length;function Pg(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Pg(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<j2;n++){const r=Hc[n],i=e.props[r];(ci(i)||i===!1)&&(t[r]=i)}return t}function Ng(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const T2=[...Bc].reverse(),E2=Bc.length;function _2(e){return t=>Promise.all(t.map(({animation:n,options:r})=>Iw(e,n,r)))}function D2(e){let t=_2(e),n=Yd(),r=!0;const i=c=>(u,d)=>{var f;const h=Gn(e,d,c==="exit"?(f=e.presenceContext)==null?void 0:f.custom:void 0);if(h){const{transition:y,transitionEnd:v,...x}=h;u={...u,...x,...v}}return u};function o(c){t=c(e)}function s(c){const{props:u}=e,d=Pg(e.parent)||{},h=[],f=new Set;let y={},v=1/0;for(let b=0;b<E2;b++){const g=T2[b],m=n[g],p=u[g]!==void 0?u[g]:d[g],k=ci(p),S=g===c?m.isActive:null;S===!1&&(v=b);let T=p===d[g]&&p!==u[g]&&k;if(T&&r&&e.manuallyAnimateOnMount&&(T=!1),m.protectedKeys={...y},!m.isActive&&S===null||!p&&!m.prevProp||ls(p)||typeof p=="boolean")continue;const E=C2(m.prevProp,p);let j=E||g===c&&m.isActive&&!T&&k||b>v&&k,M=!1;const N=Array.isArray(p)?p:[p];let X=N.reduce(i(g),{});S===!1&&(X={});const{prevResolvedValues:it={}}=m,en={...it,...X},hr=J=>{j=!0,f.has(J)&&(M=!0,f.delete(J)),m.needsAnimating[J]=!0;const D=e.getValue(J);D&&(D.liveStyle=!1)};for(const J in en){const D=X[J],A=it[J];if(y.hasOwnProperty(J))continue;let z=!1;cl(D)&&cl(A)?z=!Ng(D,A):z=D!==A,z?D!=null?hr(J):f.add(J):D!==void 0&&f.has(J)?hr(J):m.protectedKeys[J]=!0}m.prevProp=p,m.prevResolvedValues=X,m.isActive&&(y={...y,...X}),r&&e.blockInitialAnimation&&(j=!1);const ki=T&&E;j&&(!ki||M)&&h.push(...N.map(J=>{const D={type:g};if(typeof J=="string"&&r&&!ki&&e.manuallyAnimateOnMount&&e.parent){const{parent:A}=e,z=Gn(A,J);if(A.enteringChildren&&z){const{delayChildren:H}=z.transition||{};D.delay=eg(A.enteringChildren,e,H)}}return{animation:J,options:D}}))}if(f.size){const b={};if(typeof u.initial!="boolean"){const g=Gn(e,Array.isArray(u.initial)?u.initial[0]:u.initial);g&&g.transition&&(b.transition=g.transition)}f.forEach(g=>{const m=e.getBaseTarget(g),p=e.getValue(g);p&&(p.liveStyle=!0),b[g]=m??null}),h.push({animation:b})}let x=!!h.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(x=!1),r=!1,x?t(h):Promise.resolve()}function l(c,u){var h;if(n[c].isActive===u)return Promise.resolve();(h=e.variantChildren)==null||h.forEach(f=>{var y;return(y=f.animationState)==null?void 0:y.setActive(c,u)}),n[c].isActive=u;const d=s(c);for(const f in n)n[f].protectedKeys={};return d}return{animateChanges:s,setActive:l,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Yd()}}}function C2(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Ng(t,e):!1}function rn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Yd(){return{animate:rn(!0),whileInView:rn(),whileHover:rn(),whileTap:rn(),whileDrag:rn(),whileFocus:rn(),exit:rn()}}const Ag=1e-4,P2=1-Ag,N2=1+Ag,zg=.01,A2=0-zg,z2=0+zg;function je(e){return e.max-e.min}function M2(e,t,n){return Math.abs(e-t)<=n}function Kd(e,t,n,r=.5){e.origin=r,e.originPoint=Y(t.min,t.max,e.origin),e.scale=je(n)/je(t),e.translate=Y(n.min,n.max,e.origin)-e.originPoint,(e.scale>=P2&&e.scale<=N2||isNaN(e.scale))&&(e.scale=1),(e.translate>=A2&&e.translate<=z2||isNaN(e.translate))&&(e.translate=0)}function Or(e,t,n,r){Kd(e.x,t.x,n.x,r?r.originX:void 0),Kd(e.y,t.y,n.y,r?r.originY:void 0)}function Gd(e,t,n){e.min=n.min+t.min,e.max=e.min+je(t)}function L2(e,t,n){Gd(e.x,t.x,n.x),Gd(e.y,t.y,n.y)}function qd(e,t,n){e.min=t.min-n.min,e.max=e.min+je(t)}function Fo(e,t,n){qd(e.x,t.x,n.x),qd(e.y,t.y,n.y)}function Qd(e,t,n,r,i){return e-=t,e=Uo(e,1/n,r),i!==void 0&&(e=Uo(e,1/i,r)),e}function R2(e,t=0,n=1,r=.5,i,o=e,s=e){if(ut.test(t)&&(t=parseFloat(t),t=Y(s.min,s.max,t/100)-s.min),typeof t!="number")return;let l=Y(o.min,o.max,r);e===o&&(l-=t),e.min=Qd(e.min,t,n,l,i),e.max=Qd(e.max,t,n,l,i)}function Xd(e,t,[n,r,i],o,s){R2(e,t[n],t[r],t[i],t.scale,o,s)}const I2=["x","scaleX","originX"],V2=["y","scaleY","originY"];function Jd(e,t,n,r){Xd(e.x,t,I2,n?n.x:void 0,r?r.x:void 0),Xd(e.y,t,V2,n?n.y:void 0,r?r.y:void 0)}function Zd(e,t){e.min=t.min,e.max=t.max}function Qe(e,t){Zd(e.x,t.x),Zd(e.y,t.y)}function eh(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function th(e){return e.translate===0&&e.scale===1}function Mg(e){return th(e.x)&&th(e.y)}function nh(e,t){return e.min===t.min&&e.max===t.max}function O2(e,t){return nh(e.x,t.x)&&nh(e.y,t.y)}function rh(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Lg(e,t){return rh(e.x,t.x)&&rh(e.y,t.y)}function ih(e){return je(e.x)/je(e.y)}function oh(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Oe(e){return[e("x"),e("y")]}function U2(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((i||o||s)&&(r=`translate3d(${i}px, ${o}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:h,rotateY:f,skewX:y,skewY:v}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),h&&(r+=`rotateX(${h}deg) `),f&&(r+=`rotateY(${f}deg) `),y&&(r+=`skewX(${y}deg) `),v&&(r+=`skewY(${v}deg) `)}const l=e.x.scale*t.x,c=e.y.scale*t.y;return(l!==1||c!==1)&&(r+=`scale(${l}, ${c})`),r||"none"}const Rg=["TopLeft","TopRight","BottomLeft","BottomRight"],F2=Rg.length,sh=e=>typeof e=="string"?parseFloat(e):e,ah=e=>typeof e=="number"||C.test(e);function W2(e,t,n,r,i,o){i?(e.opacity=Y(0,n.opacity??1,B2(r)),e.opacityExit=Y(t.opacity??1,0,H2(r))):o&&(e.opacity=Y(t.opacity??1,n.opacity??1,r));for(let s=0;s<F2;s++){const l=`border${Rg[s]}Radius`;let c=lh(t,l),u=lh(n,l);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||ah(c)===ah(u)?(e[l]=Math.max(Y(sh(c),sh(u),r),0),(ut.test(u)||ut.test(c))&&(e[l]+="%")):e[l]=u}(t.rotate||n.rotate)&&(e.rotate=Y(t.rotate||0,n.rotate||0,r))}function lh(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const B2=Ig(0,.5,Pm),H2=Ig(.5,.95,$e);function Ig(e,t,n){return r=>r<e?0:r>t?1:n(si(e,t,r))}function $2(e,t){const n=Se.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Yt(r),e(o-t))};return F.setup(r,!0),()=>Yt(r)}function ui(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function ao(e){return we(e)?e.get():e}function Y2(e,t,n){const r=we(e)?e:nr(e);return r.start(Rc("",r,t,n)),r.animation}const K2=(e,t)=>e.depth-t.depth;class G2{constructor(){this.children=[],this.isDirty=!1}add(t){xc(this.children,t),this.isDirty=!0}remove(t){wc(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(K2),this.isDirty=!1,this.children.forEach(t)}}class q2{constructor(){this.members=[]}add(t){xc(this.members,t),t.scheduleRender()}remove(t){if(wc(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const lo={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Ks=["","X","Y","Z"],Q2=1e3;let X2=0;function Gs(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Vg(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=rg(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",F,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Vg(r)}function Og({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},l=t==null?void 0:t()){this.id=X2++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(ek),this.nodes.forEach(ik),this.nodes.forEach(ok),this.nodes.forEach(tk)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new G2)}addEventListener(s,l){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Sc),this.eventHandlers.get(s).add(l)}notifyListeners(s,...l){const c=this.eventHandlers.get(s);c&&c.notify(...l)}hasListeners(s){return this.eventHandlers.has(s)}mount(s){if(this.instance)return;this.isSVG=mg(s)&&!e2(s),this.instance=s;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(c||l)&&(this.isLayoutDirty=!0),e){let d,h=0;const f=()=>this.root.updateBlockedByResize=!1;F.read(()=>{h=window.innerWidth}),e(s,()=>{const y=window.innerWidth;y!==h&&(h=y,this.root.updateBlockedByResize=!0,d&&d(),d=$2(f,250),lo.hasAnimatedSinceResize&&(lo.hasAnimatedSinceResize=!1,this.nodes.forEach(dh)))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:h,hasRelativeLayoutChanged:f,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const v=this.options.transition||u.getDefaultTransition()||uk,{onLayoutAnimationStart:x,onLayoutAnimationComplete:b}=u.getProps(),g=!this.targetLayout||!Lg(this.targetLayout,y),m=!h&&f;if(this.options.layoutRoot||this.resumeFrom||m||h&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const p={...Lc(v,"layout"),onPlay:x,onComplete:b};(u.shouldReduceMotion||this.options.layoutRoot)&&(p.delay=0,p.type=!1),this.startAnimation(p),this.setAnimationOrigin(d,m)}else h||dh(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Yt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(sk),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Vg(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const h=this.path[d];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(ch);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(uh);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(rk),this.nodes.forEach(J2),this.nodes.forEach(Z2)):this.nodes.forEach(uh),this.clearAllSnapshots();const l=Se.now();fe.delta=dt(0,1e3/60,l-fe.timestamp),fe.timestamp=l,fe.isProcessing=!0,Os.update.process(fe),Os.preRender.process(fe),Os.render.process(fe),fe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Uc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(nk),this.sharedNodes.forEach(ak)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,F.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){F.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!je(this.snapshot.measuredBox.x)&&!je(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=oe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let l=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(l=!1),l&&this.instance){const c=r(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,l=this.projectionDelta&&!Mg(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;s&&this.instance&&(l||an(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return s&&(c=this.removeTransform(c)),dk(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:s}=this.options;if(!s)return oe();const l=s.measureViewportBox();if(!(((u=this.scroll)==null?void 0:u.wasRoot)||this.path.some(hk))){const{scroll:d}=this.root;d&&(Un(l.x,d.offset.x),Un(l.y,d.offset.y))}return l}removeElementScroll(s){var c;const l=oe();if(Qe(l,s),(c=this.scroll)!=null&&c.wasRoot)return l;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:h,options:f}=d;d!==this.root&&h&&f.layoutScroll&&(h.wasRoot&&Qe(l,s),Un(l.x,h.offset.x),Un(l.y,h.offset.y))}return l}applyTransform(s,l=!1){const c=oe();Qe(c,s);for(let u=0;u<this.path.length;u++){const d=this.path[u];!l&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Fn(c,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),an(d.latestValues)&&Fn(c,d.latestValues)}return an(this.latestValues)&&Fn(c,this.latestValues),c}removeTransform(s){const l=oe();Qe(l,s);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!u.instance||!an(u.latestValues))continue;fl(u.latestValues)&&u.updateSnapshot();const d=oe(),h=u.measurePageBox();Qe(d,h),Jd(l,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return an(this.latestValues)&&Jd(l,this.latestValues),l}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==fe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var y;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(s||c&&this.isSharedProjectionDirty||this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:h}=this.options;if(!this.layout||!(d||h))return;this.resolvedRelativeTargetAt=fe.timestamp;const f=this.getClosestProjectingParent();f&&this.linkedParentVersion!==f.layoutVersion&&!f.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(f&&f.layout?this.createRelativeTarget(f,this.layout.layoutBox,f.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=oe(),this.targetWithTransforms=oe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),L2(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Qe(this.target,this.layout.layoutBox),bg(this.target,this.targetDelta)):Qe(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,f&&!!f.resumingFrom==!!this.resumingFrom&&!f.options.layoutScroll&&f.target&&this.animationProgress!==1?this.createRelativeTarget(f,this.target,f.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||fl(this.parent.latestValues)||kg(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(s,l,c){this.relativeParent=s,this.linkedParentVersion=s.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=oe(),this.relativeTargetOrigin=oe(),Fo(this.relativeTargetOrigin,l,c),Qe(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var v;const s=this.getLead(),l=!!this.resumingFrom||this!==s;let c=!0;if((this.isProjectionDirty||(v=this.parent)!=null&&v.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===fe.timestamp&&(c=!1),c)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;Qe(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,f=this.treeScale.y;u2(this.layoutCorrected,this.treeScale,this.path,l),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=oe());const{target:y}=s;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(eh(this.prevProjectionDelta.x,this.projectionDelta.x),eh(this.prevProjectionDelta.y,this.projectionDelta.y)),Or(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==f||!oh(this.projectionDelta.x,this.prevProjectionDelta.x)||!oh(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var l;if((l=this.options.visualElement)==null||l.scheduleRender(),s){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=On(),this.projectionDelta=On(),this.projectionDeltaWithTransform=On()}setAnimationOrigin(s,l=!1){const c=this.snapshot,u=c?c.latestValues:{},d={...this.latestValues},h=On();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const f=oe(),y=c?c.source:void 0,v=this.layout?this.layout.source:void 0,x=y!==v,b=this.getStack(),g=!b||b.members.length<=1,m=!!(x&&!g&&this.options.crossfade===!0&&!this.path.some(ck));this.animationProgress=0;let p;this.mixTargetDelta=k=>{const S=k/1e3;hh(h.x,s.x,S),hh(h.y,s.y,S),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Fo(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),lk(this.relativeTarget,this.relativeTargetOrigin,f,S),p&&O2(this.relativeTarget,p)&&(this.isProjectionDirty=!1),p||(p=oe()),Qe(p,this.relativeTarget)),x&&(this.animationValues=d,W2(d,u,this.latestValues,S,m,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){var l,c,u;this.notifyListeners("animationStart"),(l=this.currentAnimation)==null||l.stop(),(u=(c=this.resumingFrom)==null?void 0:c.currentAnimation)==null||u.stop(),this.pendingAnimation&&(Yt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=F.update(()=>{lo.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=nr(0)),this.currentAnimation=Y2(this.motionValue,[0,1e3],{...s,velocity:0,isSync:!0,onUpdate:d=>{this.mixTargetDelta(d),s.onUpdate&&s.onUpdate(d)},onStop:()=>{},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Q2),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:l,target:c,layout:u,latestValues:d}=s;if(!(!l||!c||!u)){if(this!==s&&this.layout&&u&&Ug(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||oe();const h=je(this.layout.layoutBox.x);c.x.min=s.target.x.min,c.x.max=c.x.min+h;const f=je(this.layout.layoutBox.y);c.y.min=s.target.y.min,c.y.max=c.y.min+f}Qe(l,c),Fn(l,d),Or(this.projectionDeltaWithTransform,this.layoutCorrected,l,d)}}registerSharedNode(s,l){this.sharedNodes.has(s)||this.sharedNodes.set(s,new q2),this.sharedNodes.get(s).add(l);const u=l.options.initialPromotionConfig;l.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(l):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var l;const{layoutId:s}=this.options;return s?((l=this.getStack())==null?void 0:l.lead)||this:this}getPrevLead(){var l;const{layoutId:s}=this.options;return s?(l=this.getStack())==null?void 0:l.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:l,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),s&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let l=!1;const{latestValues:c}=s;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(l=!0),!l)return;const u={};c.z&&Gs("z",s,u,this.animationValues);for(let d=0;d<Ks.length;d++)Gs(`rotate${Ks[d]}`,s,u,this.animationValues),Gs(`skew${Ks[d]}`,s,u,this.animationValues);s.render();for(const d in u)s.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);s.scheduleRender()}applyProjectionStyles(s,l){if(!this.instance||this.isSVG)return;if(!this.isVisible){s.visibility="hidden";return}const c=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,s.visibility="",s.opacity="",s.pointerEvents=ao(l==null?void 0:l.pointerEvents)||"",s.transform=c?c(this.latestValues,""):"none";return}const u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){this.options.layoutId&&(s.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,s.pointerEvents=ao(l==null?void 0:l.pointerEvents)||""),this.hasProjected&&!an(this.latestValues)&&(s.transform=c?c({},""):"none",this.hasProjected=!1);return}s.visibility="";const d=u.animationValues||u.latestValues;this.applyTransformsToTarget();let h=U2(this.projectionDeltaWithTransform,this.treeScale,d);c&&(h=c(d,h)),s.transform=h;const{x:f,y}=this.projectionDelta;s.transformOrigin=`${f.origin*100}% ${y.origin*100}% 0`,u.animationValues?s.opacity=u===this?d.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:s.opacity=u===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const v in ml){if(d[v]===void 0)continue;const{correct:x,applyTo:b,isCSSVariable:g}=ml[v],m=h==="none"?d[v]:x(d[v],u);if(b){const p=b.length;for(let k=0;k<p;k++)s[b[k]]=m}else g?this.options.visualElement.renderState.vars[v]=m:s[v]=m}this.options.layoutId&&(s.pointerEvents=u===this?ao(l==null?void 0:l.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var l;return(l=s.currentAnimation)==null?void 0:l.stop()}),this.root.nodes.forEach(ch),this.root.sharedNodes.clear()}}}function J2(e){e.updateLayout()}function Z2(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=t.source!==e.layout.source;o==="size"?Oe(h=>{const f=s?t.measuredBox[h]:t.layoutBox[h],y=je(f);f.min=r[h].min,f.max=f.min+y}):Ug(o,t.layoutBox,r)&&Oe(h=>{const f=s?t.measuredBox[h]:t.layoutBox[h],y=je(r[h]);f.max=f.min+y,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[h].max=e.relativeTarget[h].min+y)});const l=On();Or(l,r,t.layoutBox);const c=On();s?Or(c,e.applyTransform(i,!0),t.measuredBox):Or(c,r,t.layoutBox);const u=!Mg(l);let d=!1;if(!e.resumeFrom){const h=e.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:f,layout:y}=h;if(f&&y){const v=oe();Fo(v,t.layoutBox,f.layoutBox);const x=oe();Fo(x,r,y.layoutBox),Lg(v,x)||(d=!0),h.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=v,e.relativeParent=h)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:c,layoutDelta:l,hasLayoutChanged:u,hasRelativeLayoutChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function ek(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function tk(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function nk(e){e.clearSnapshot()}function ch(e){e.clearMeasurements()}function uh(e){e.isLayoutDirty=!1}function rk(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function dh(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function ik(e){e.resolveTargetDelta()}function ok(e){e.calcProjection()}function sk(e){e.resetSkewAndRotation()}function ak(e){e.removeLeadSnapshot()}function hh(e,t,n){e.translate=Y(t.translate,0,n),e.scale=Y(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function fh(e,t,n,r){e.min=Y(t.min,n.min,r),e.max=Y(t.max,n.max,r)}function lk(e,t,n,r){fh(e.x,t.x,n.x,r),fh(e.y,t.y,n.y,r)}function ck(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const uk={duration:.45,ease:[.4,0,.1,1]},ph=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),mh=ph("applewebkit/")&&!ph("chrome/")?Math.round:$e;function gh(e){e.min=mh(e.min),e.max=mh(e.max)}function dk(e){gh(e.x),gh(e.y)}function Ug(e,t,n){return e==="position"||e==="preserve-aspect"&&!M2(ih(t),ih(n),.2)}function hk(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const fk=Og({attachResizeListener:(e,t)=>ui(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),qs={current:void 0},Fg=Og({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!qs.current){const e=new fk({});e.mount(window),e.setOptions({layoutScroll:!0}),qs.current=e}return qs.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Kc=w.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function yh(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function pk(...e){return t=>{let n=!1;const r=e.map(i=>{const o=yh(i,t);return!n&&typeof o=="function"&&(n=!0),o});if(n)return()=>{for(let i=0;i<r.length;i++){const o=r[i];typeof o=="function"?o():yh(e[i],null)}}}}function mk(...e){return w.useCallback(pk(...e),e)}class gk extends w.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=n.offsetParent,i=ug(r)&&r.offsetWidth||0,o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft,o.right=i-o.width-o.left}return null}componentDidUpdate(){}render(){return this.props.children}}function yk({children:e,isPresent:t,anchorX:n,root:r}){var d;const i=w.useId(),o=w.useRef(null),s=w.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=w.useContext(Kc),c=((d=e.props)==null?void 0:d.ref)??(e==null?void 0:e.ref),u=mk(o,c);return w.useInsertionEffect(()=>{const{width:h,height:f,top:y,left:v,right:x}=s.current;if(t||!o.current||!h||!f)return;const b=n==="left"?`left: ${v}`:`right: ${x}`;o.current.dataset.motionPopId=i;const g=document.createElement("style");l&&(g.nonce=l);const m=r??document.head;return m.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${f}px !important;
            ${b}px !important;
            top: ${y}px !important;
          }
        `),()=>{m.contains(g)&&m.removeChild(g)}},[t]),a.jsx(gk,{isPresent:t,childRef:o,sizeRef:s,children:w.cloneElement(e,{ref:u})})}const vk=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s,anchorX:l,root:c})=>{const u=vc(xk),d=w.useId();let h=!0,f=w.useMemo(()=>(h=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:y=>{u.set(y,!0);for(const v of u.values())if(!v)return;r&&r()},register:y=>(u.set(y,!1),()=>u.delete(y))}),[n,u,r]);return o&&h&&(f={...f}),w.useMemo(()=>{u.forEach((y,v)=>u.set(v,!1))},[n]),w.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),s==="popLayout"&&(e=a.jsx(yk,{isPresent:n,anchorX:l,root:c,children:e})),a.jsx(as.Provider,{value:f,children:e})};function xk(){return new Map}function Wg(e=!0){const t=w.useContext(as);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=w.useId();w.useEffect(()=>{if(e)return i(o)},[e]);const s=w.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,s]:[!0]}const Hi=e=>e.key||"";function vh(e){const t=[];return w.Children.forEach(e,n=>{w.isValidElement(n)&&t.push(n)}),t}const Bg=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:o="sync",propagate:s=!1,anchorX:l="left",root:c})=>{const[u,d]=Wg(s),h=w.useMemo(()=>vh(e),[e]),f=s&&!u?[]:h.map(Hi),y=w.useRef(!0),v=w.useRef(h),x=vc(()=>new Map),b=w.useRef(new Set),[g,m]=w.useState(h),[p,k]=w.useState(h);xm(()=>{y.current=!1,v.current=h;for(let E=0;E<p.length;E++){const j=Hi(p[E]);f.includes(j)?(x.delete(j),b.current.delete(j)):x.get(j)!==!0&&x.set(j,!1)}},[p,f.length,f.join("-")]);const S=[];if(h!==g){let E=[...h];for(let j=0;j<p.length;j++){const M=p[j],N=Hi(M);f.includes(N)||(E.splice(j,0,M),S.push(M))}return o==="wait"&&S.length&&(E=S),k(vh(E)),m(h),null}const{forceRender:T}=w.useContext(yc);return a.jsx(a.Fragment,{children:p.map(E=>{const j=Hi(E),M=s&&!u?!1:h===p||f.includes(j),N=()=>{if(b.current.has(j))return;if(b.current.add(j),x.has(j))x.set(j,!0);else return;let X=!0;x.forEach(it=>{it||(X=!1)}),X&&(T==null||T(),k(v.current),s&&(d==null||d()),r&&r())};return a.jsx(vk,{isPresent:M,initial:!y.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:o,root:c,onExitComplete:M?void 0:N,anchorX:l,children:E},j)})})},Hg=w.createContext({strict:!1}),xh={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let wh=!1;function wk(){if(wh)return;const e={};for(const t in xh)e[t]={isEnabled:n=>xh[t].some(r=>!!n[r])};vg(e),wh=!0}function $g(){return wk(),s2()}function kk(e){const t=$g();for(const n in e)t[n]={...t[n],...e[n]};vg(t)}const bk=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Wo(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||bk.has(e)}let Yg=e=>!Wo(e);function Sk(e){typeof e=="function"&&(Yg=t=>t.startsWith("on")?!Wo(t):e(t))}try{Sk(require("@emotion/is-prop-valid").default)}catch{}function jk(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Yg(i)||n===!0&&Wo(i)||!t&&!Wo(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}const us=w.createContext({});function Tk(e,t){if(cs(e)){const{initial:n,animate:r}=e;return{initial:n===!1||ci(n)?n:void 0,animate:ci(r)?r:void 0}}return e.inherit!==!1?t:{}}function Ek(e){const{initial:t,animate:n}=Tk(e,w.useContext(us));return w.useMemo(()=>({initial:t,animate:n}),[kh(t),kh(n)])}function kh(e){return Array.isArray(e)?e.join(" "):e}const Gc=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Kg(e,t,n){for(const r in t)!we(t[r])&&!Tg(r,n)&&(e[r]=t[r])}function _k({transformTemplate:e},t){return w.useMemo(()=>{const n=Gc();return $c(n,t,e),Object.assign({},n.vars,n.style)},[t])}function Dk(e,t){const n=e.style||{},r={};return Kg(r,n,e),Object.assign(r,_k(e,t)),r}function Ck(e,t){const n={},r=Dk(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const Gg=()=>({...Gc(),attrs:{}});function Pk(e,t,n,r){const i=w.useMemo(()=>{const o=Gg();return Eg(o,t,Dg(r),e.transformTemplate,e.style),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};Kg(o,e.style,e),i.style={...o,...i.style}}return i}const Nk=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function qc(e){return typeof e!="string"||e.includes("-")?!1:!!(Nk.indexOf(e)>-1||/[A-Z]/u.test(e))}function Ak(e,t,n,{latestValues:r},i,o=!1,s){const c=(s??qc(e)?Pk:Ck)(t,r,i,e),u=jk(t,typeof e=="string",o),d=e!==w.Fragment?{...u,...c,ref:n}:{},{children:h}=t,f=w.useMemo(()=>we(h)?h.get():h,[h]);return w.createElement(e,{...d,children:f})}function zk({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:Mk(n,r,i,e),renderState:t()}}function Mk(e,t,n,r){const i={},o=r(e,{});for(const f in o)i[f]=ao(o[f]);let{initial:s,animate:l}=e;const c=cs(e),u=yg(e);t&&u&&!c&&e.inherit!==!1&&(s===void 0&&(s=t.initial),l===void 0&&(l=t.animate));let d=n?n.initial===!1:!1;d=d||s===!1;const h=d?l:s;if(h&&typeof h!="boolean"&&!ls(h)){const f=Array.isArray(h)?h:[h];for(let y=0;y<f.length;y++){const v=Ic(e,f[y]);if(v){const{transitionEnd:x,transition:b,...g}=v;for(const m in g){let p=g[m];if(Array.isArray(p)){const k=d?p.length-1:0;p=p[k]}p!==null&&(i[m]=p)}for(const m in x)i[m]=x[m]}}}return i}const qg=e=>(t,n)=>{const r=w.useContext(us),i=w.useContext(as),o=()=>zk(e,t,r,i);return n?o():vc(o)},Lk=qg({scrapeMotionValuesFromProps:Yc,createRenderState:Gc}),Rk=qg({scrapeMotionValuesFromProps:Cg,createRenderState:Gg}),Ik=Symbol.for("motionComponentSymbol");function Vk(e,t,n){const r=w.useRef(n);w.useInsertionEffect(()=>{r.current=n});const i=w.useRef(null);return w.useCallback(o=>{var l;o&&((l=e.onMount)==null||l.call(e,o)),t&&(o?t.mount(o):t.unmount());const s=r.current;if(typeof s=="function")if(o){const c=s(o);typeof c=="function"&&(i.current=c)}else i.current?(i.current(),i.current=null):s(o);else s&&(s.current=o)},[t])}const Qg=w.createContext({});function _r(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Ok(e,t,n,r,i,o){var b,g;const{visualElement:s}=w.useContext(us),l=w.useContext(Hg),c=w.useContext(as),u=w.useContext(Kc).reducedMotion,d=w.useRef(null);r=r||l.renderer,!d.current&&r&&(d.current=r(e,{visualState:t,parent:s,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,isSVG:o}));const h=d.current,f=w.useContext(Qg);h&&!h.projection&&i&&(h.type==="html"||h.type==="svg")&&Uk(d.current,n,i,f);const y=w.useRef(!1);w.useInsertionEffect(()=>{h&&y.current&&h.update(n,c)});const v=n[ng],x=w.useRef(!!v&&!((b=window.MotionHandoffIsComplete)!=null&&b.call(window,v))&&((g=window.MotionHasOptimisedAnimation)==null?void 0:g.call(window,v)));return xm(()=>{h&&(y.current=!0,window.MotionIsMounted=!0,h.updateFeatures(),h.scheduleRenderMicrotask(),x.current&&h.animationState&&h.animationState.animateChanges())}),w.useEffect(()=>{h&&(!x.current&&h.animationState&&h.animationState.animateChanges(),x.current&&(queueMicrotask(()=>{var m;(m=window.MotionHandoffMarkAsComplete)==null||m.call(window,v)}),x.current=!1),h.enteringChildren=void 0)}),h}function Uk(e,t,n,r){const{layoutId:i,layout:o,drag:s,dragConstraints:l,layoutScroll:c,layoutRoot:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Xg(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!s||l&&_r(l),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:u})}function Xg(e){if(e)return e.options.allowProjection!==!1?e.projection:Xg(e.parent)}function Qs(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&kk(r);const o=n?n==="svg":qc(e),s=o?Rk:Lk;function l(u,d){let h;const f={...w.useContext(Kc),...u,layoutId:Fk(u)},{isStatic:y}=f,v=Ek(u),x=s(u,y);if(!y&&vm){Wk();const b=Bk(f);h=b.MeasureLayout,v.visualElement=Ok(e,x,f,i,b.ProjectionNode,o)}return a.jsxs(us.Provider,{value:v,children:[h&&v.visualElement?a.jsx(h,{visualElement:v.visualElement,...f}):null,Ak(e,u,Vk(x,v.visualElement,d),x,y,t,o)]})}l.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const c=w.forwardRef(l);return c[Ik]=e,c}function Fk({layoutId:e}){const t=w.useContext(yc).id;return t&&e!==void 0?t+"-"+e:e}function Wk(e,t){w.useContext(Hg).strict}function Bk(e){const t=$g(),{drag:n,layout:r}=t;if(!n&&!r)return{};const i={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(e)||r!=null&&r.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function Hk(e,t){if(typeof Proxy>"u")return Qs;const n=new Map,r=(o,s)=>Qs(o,s,e,t),i=(o,s)=>r(o,s);return new Proxy(i,{get:(o,s)=>s==="create"?r:(n.has(s)||n.set(s,Qs(s,void 0,e,t)),n.get(s))})}const $k=(e,t)=>t.isSVG??qc(e)?new S2(t):new y2(t,{allowProjection:e!==w.Fragment});class Yk extends Zt{constructor(t){super(t),t.animationState||(t.animationState=D2(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();ls(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let Kk=0;class Gk extends Zt{constructor(){super(...arguments),this.id=Kk++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const qk={animation:{Feature:Yk},exit:{Feature:Gk}};function wi(e){return{point:{x:e.pageX,y:e.pageY}}}const Qk=e=>t=>Fc(t)&&e(t,wi(t));function Ur(e,t,n,r){return ui(e,t,Qk(n),r)}const Jg=({current:e})=>e?e.ownerDocument.defaultView:null,bh=(e,t)=>Math.abs(e-t);function Xk(e,t){const n=bh(e.x,t.x),r=bh(e.y,t.y);return Math.sqrt(n**2+r**2)}const Sh=new Set(["auto","scroll"]);class Zg{constructor(t,n,{transformPagePoint:r,contextWindow:i=window,dragSnapToOrigin:o=!1,distanceThreshold:s=3,element:l}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=y=>{this.handleScroll(y.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=Js(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,x=Xk(y.offset,{x:0,y:0})>=this.distanceThreshold;if(!v&&!x)return;const{point:b}=y,{timestamp:g}=fe;this.history.push({...b,timestamp:g});const{onStart:m,onMove:p}=this.handlers;v||(m&&m(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),p&&p(this.lastMoveEvent,y)},this.handlePointerMove=(y,v)=>{this.lastMoveEvent=y,this.lastMoveEventInfo=Xs(v,this.transformPagePoint),F.update(this.updatePoint,!0)},this.handlePointerUp=(y,v)=>{this.end();const{onEnd:x,onSessionEnd:b,resumeAnimation:g}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&g&&g(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=Js(y.type==="pointercancel"?this.lastMoveEventInfo:Xs(v,this.transformPagePoint),this.history);this.startEvent&&x&&x(y,m),b&&b(y,m)},!Fc(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=s,this.contextWindow=i||window;const c=wi(t),u=Xs(c,this.transformPagePoint),{point:d}=u,{timestamp:h}=fe;this.history=[{...d,timestamp:h}];const{onSessionStart:f}=n;f&&f(t,Js(u,this.history)),this.removeListeners=yi(Ur(this.contextWindow,"pointermove",this.handlePointerMove),Ur(this.contextWindow,"pointerup",this.handlePointerUp),Ur(this.contextWindow,"pointercancel",this.handlePointerUp)),l&&this.startScrollTracking(l)}startScrollTracking(t){let n=t.parentElement;for(;n;){const r=getComputedStyle(n);(Sh.has(r.overflowX)||Sh.has(r.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const r=t===window,i=r?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},o={x:i.x-n.x,y:i.y-n.y};o.x===0&&o.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=o.x,this.lastMoveEventInfo.point.y+=o.y):this.history.length>0&&(this.history[0].x-=o.x,this.history[0].y-=o.y),this.scrollPositions.set(t,i),F.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Yt(this.updatePoint)}}function Xs(e,t){return t?{point:t(e.point)}:e}function jh(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Js({point:e},t){return{point:e,delta:jh(e,e0(t)),offset:jh(e,Jk(t)),velocity:Zk(t,.1)}}function Jk(e){return e[0]}function e0(e){return e[e.length-1]}function Zk(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=e0(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>vt(t)));)n--;if(!r)return{x:0,y:0};const o=Be(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function eb(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Y(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Y(n,e,r.max):Math.min(e,n)),e}function Th(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function tb(e,{top:t,left:n,bottom:r,right:i}){return{x:Th(e.x,n,i),y:Th(e.y,t,r)}}function Eh(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function nb(e,t){return{x:Eh(e.x,t.x),y:Eh(e.y,t.y)}}function rb(e,t){let n=.5;const r=je(e),i=je(t);return i>r?n=si(t.min,t.max-r,e.min):r>i&&(n=si(e.min,e.max-i,t.min)),dt(0,1,n)}function ib(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const gl=.35;function ob(e=gl){return e===!1?e=0:e===!0&&(e=gl),{x:_h(e,"left","right"),y:_h(e,"top","bottom")}}function _h(e,t,n){return{min:Dh(e,t),max:Dh(e,n)}}function Dh(e,t){return typeof e=="number"?e:e[t]||0}const sb=new WeakMap;class ab{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=oe(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const o=h=>{n?(this.stopAnimation(),this.snapToCursor(wi(h).point)):this.pauseAnimation()},s=(h,f)=>{this.stopAnimation();const{drag:y,dragPropagation:v,onDragStart:x}=this.getProps();if(y&&!v&&(this.openDragLock&&this.openDragLock(),this.openDragLock=qw(y),!this.openDragLock))return;this.latestPointerEvent=h,this.latestPanInfo=f,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Oe(g=>{let m=this.getAxisMotionValue(g).get()||0;if(ut.test(m)){const{projection:p}=this.visualElement;if(p&&p.layout){const k=p.layout.layoutBox[g];k&&(m=je(k)*(parseFloat(m)/100))}}this.originPoint[g]=m}),x&&F.postRender(()=>x(h,f)),ul(this.visualElement,"transform");const{animationState:b}=this.visualElement;b&&b.setActive("whileDrag",!0)},l=(h,f)=>{this.latestPointerEvent=h,this.latestPanInfo=f;const{dragPropagation:y,dragDirectionLock:v,onDirectionLock:x,onDrag:b}=this.getProps();if(!y&&!this.openDragLock)return;const{offset:g}=f;if(v&&this.currentDirection===null){this.currentDirection=lb(g),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",f.point,g),this.updateAxis("y",f.point,g),this.visualElement.render(),b&&b(h,f)},c=(h,f)=>{this.latestPointerEvent=h,this.latestPanInfo=f,this.stop(h,f),this.latestPointerEvent=null,this.latestPanInfo=null},u=()=>Oe(h=>{var f;return this.getAnimationState(h)==="paused"&&((f=this.getAxisMotionValue(h).animation)==null?void 0:f.play())}),{dragSnapToOrigin:d}=this.getProps();this.panSession=new Zg(t,{onSessionStart:o,onStart:s,onMove:l,onSessionEnd:c,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,distanceThreshold:r,contextWindow:Jg(this.visualElement),element:this.visualElement.current})}stop(t,n){const r=t||this.latestPointerEvent,i=n||this.latestPanInfo,o=this.isDragging;if(this.cancel(),!o||!i||!r)return;const{velocity:s}=i;this.startAnimation(s);const{onDragEnd:l}=this.getProps();l&&F.postRender(()=>l(r,i))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!$i(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=eb(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var o;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(o=this.visualElement.projection)==null?void 0:o.layout,i=this.constraints;t&&_r(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=tb(r.layoutBox,t):this.constraints=!1,this.elastic=ob(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Oe(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=ib(r.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!_r(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=d2(r,i.root,this.visualElement.getTransformPagePoint());let s=nb(i.layout.layoutBox,o);if(n){const l=n(l2(s));this.hasMutatedConstraints=!!l,l&&(s=wg(l))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},u=Oe(d=>{if(!$i(d,n,this.currentDirection))return;let h=c&&c[d]||{};s&&(h={min:0,max:0});const f=i?200:1e6,y=i?40:1e7,v={type:"inertia",velocity:r?t[d]:0,bounceStiffness:f,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...o,...h};return this.startAxisValueAnimation(d,v)});return Promise.all(u).then(l)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return ul(this.visualElement,t),r.start(Rc(t,r,0,n,this.visualElement,!1))}stopAnimation(){Oe(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Oe(t=>{var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Oe(n=>{const{drag:r}=this.getProps();if(!$i(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:l}=i.layout.layoutBox[n],c=o.get()||0;o.set(t[n]-Y(s,l,.5)+c)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!_r(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Oe(s=>{const l=this.getAxisMotionValue(s);if(l&&this.constraints!==!1){const c=l.get();i[s]=rb({min:c,max:c},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Oe(s=>{if(!$i(s,t,null))return;const l=this.getAxisMotionValue(s),{min:c,max:u}=this.constraints[s];l.set(Y(c,u,i[s]))})}addListeners(){if(!this.visualElement.current)return;sb.set(this.visualElement,this);const t=this.visualElement.current,n=Ur(t,"pointerdown",c=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&!pg(c.target)&&this.start(c)}),r=()=>{const{dragConstraints:c}=this.getProps();_r(c)&&c.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),F.read(r);const s=ui(window,"resize",()=>this.scalePositionWithinConstraints()),l=i.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(Oe(d=>{const h=this.getAxisMotionValue(d);h&&(this.originPoint[d]+=c[d].translate,h.set(h.get()+c[d].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),l&&l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=gl,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:l}}}function $i(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function lb(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class cb extends Zt{constructor(t){super(t),this.removeGroupControls=$e,this.removeListeners=$e,this.controls=new ab(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||$e}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners()}}const Ch=e=>(t,n)=>{e&&F.postRender(()=>e(t,n))};class ub extends Zt{constructor(){super(...arguments),this.removePointerDownListener=$e}onPointerDown(t){this.session=new Zg(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Jg(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Ch(t),onStart:Ch(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&F.postRender(()=>i(o,s))}}}mount(){this.removePointerDownListener=Ur(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Zs=!1;class db extends w.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),Zs&&o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),lo.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,{projection:s}=r;return s&&(s.isPresent=o,Zs=!0,i||t.layoutDependency!==n||n===void 0||t.isPresent!==o?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||F.postRender(()=>{const l=s.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Uc.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;Zs=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function t0(e){const[t,n]=Wg(),r=w.useContext(yc);return a.jsx(db,{...e,layoutGroup:r,switchLayoutGroup:w.useContext(Qg),isPresent:t,safeToRemove:n})}const hb={pan:{Feature:ub},drag:{Feature:cb,ProjectionNode:Fg,MeasureLayout:t0}};function Ph(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,o=r[i];o&&F.postRender(()=>o(t,wi(t)))}class fb extends Zt{mount(){const{current:t}=this.node;t&&(this.unmount=Qw(t,(n,r)=>(Ph(this.node,r,"Start"),i=>Ph(this.node,i,"End"))))}unmount(){}}class pb extends Zt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=yi(ui(this.node.current,"focus",()=>this.onFocus()),ui(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Nh(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),o=r[i];o&&F.postRender(()=>o(t,wi(t)))}class mb extends Zt{mount(){const{current:t}=this.node;t&&(this.unmount=Zw(t,(n,r)=>(Nh(this.node,r,"Start"),(i,{success:o})=>Nh(this.node,i,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const yl=new WeakMap,ea=new WeakMap,gb=e=>{const t=yl.get(e.target);t&&t(e)},yb=e=>{e.forEach(gb)};function vb({root:e,...t}){const n=e||document;ea.has(n)||ea.set(n,{});const r=ea.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(yb,{root:e,...t})),r[i]}function xb(e,t,n){const r=vb(t);return yl.set(e,n),r.observe(e),()=>{yl.delete(e),r.unobserve(e)}}const wb={some:0,all:1};class kb extends Zt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:wb[i]},l=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:h}=this.node.getProps(),f=u?d:h;f&&f(c)};return xb(this.node.current,s,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(bb(t,n))&&this.startObserver()}unmount(){}}function bb({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const Sb={inView:{Feature:kb},tap:{Feature:mb},focus:{Feature:pb},hover:{Feature:fb}},jb={layout:{ProjectionNode:Fg,MeasureLayout:t0}},Tb={...qk,...Sb,...hb,...jb},re=Hk(Tb,$k);function Ge(){!Wc.current&&gg();const[e]=w.useState(Vo.current);return e}/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),_b=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),Ah=e=>{const t=_b(e);return t.charAt(0).toUpperCase()+t.slice(1)},n0=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim(),Db=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Cb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=w.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:s,...l},c)=>w.createElement("svg",{ref:c,...Cb,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:n0("lucide",i),...!o&&!Db(l)&&{"aria-hidden":"true"},...l},[...s.map(([u,d])=>w.createElement(u,d)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=(e,t)=>{const n=w.forwardRef(({className:r,...i},o)=>w.createElement(Pb,{ref:o,iconNode:t,className:n0(`lucide-${Eb(Ah(e))}`,`lucide-${e}`,r),...i}));return n.displayName=Ah(e),n};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Qc=B("arrow-left",Nb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],rr=B("arrow-right",Ab);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Mb=B("bell",zb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],Rb=B("calendar-days",Lb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Vb=B("calendar",Ib);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Ub=B("circle-check-big",Ob);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=[["path",{d:"M12 6v6h4",key:"135r8i"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Wb=B("clock-3",Fb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],Hb=B("code",Bb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],di=B("external-link",$b);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],Kb=B("facebook",Yb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],r0=B("instagram",Gb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Qb=B("linkedin",qb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],i0=B("mail",Xb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Zb=B("map-pin",Jb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],tS=B("menu",eS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],o0=B("mic",nS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]],iS=B("music-2",rS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],sS=B("panels-top-left",oS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]],s0=B("ticket",aS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],a0=B("twitter",lS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]],uS=B("users-round",cS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Bo=B("users",dS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],fS=B("x",hS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],mS=B("youtube",pS),Xc="/assets/logo_red-Cuc5EyMY.png",l0="tedxwushs-language",ta="ja",c0=new Set(["ja","en"]),gS={ja:{description:"TEDxWUSHS Youthは、早稲田大学高等学院の生徒が独立して企画・運営する、日本語と英語のバイリンガルTEDxイベントです。Ideas change everything.",locale:"ja_JP"},en:{description:"TEDxWUSHS Youth is an independently organized, bilingual Japanese-English TEDx event led by students of Waseda University Senior High School. Ideas change everything.",locale:"en_US"}},u0=w.createContext(void 0),yS=()=>{if(typeof window>"u")return ta;try{const e=window.localStorage.getItem(l0);return c0.has(e)?e:ta}catch{return ta}},Yi=(e,t)=>{const n=document.querySelector(e);n&&n.setAttribute("content",t)},vS=({children:e})=>{const[t,n]=w.useState(yS),r=w.useCallback(o=>{c0.has(o)&&n(o)},[]);w.useEffect(()=>{document.documentElement.lang=t;try{window.localStorage.setItem(l0,t)}catch{}const o=gS[t];Yi('meta[name="description"]',o.description),Yi('meta[property="og:description"]',o.description),Yi('meta[property="og:locale"]',o.locale),Yi('meta[property="twitter:description"]',o.description)},[t]);const i=w.useMemo(()=>({language:t,setLanguage:r}),[t,r]);return a.jsx(u0.Provider,{value:i,children:e})},ie=()=>{const e=w.useContext(u0);if(!e)throw new Error("useLanguage must be used within a LanguageProvider.");return e},xS={ja:{group:"表示言語",ja:"日本語で表示",en:"英語で表示"},en:{group:"Display language",ja:"Show in Japanese",en:"Show in English"}},wS=()=>{const{language:e,setLanguage:t}=ie(),n=xS[e],r=()=>t(e==="ja"?"en":"ja"),i=e==="ja"?"現在は日本語です。英語に切り替える":"Currently displayed in English. Switch to Japanese";return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"language-switcher language-switcher--desktop",role:"group","aria-label":n.group,children:[a.jsx("button",{type:"button",className:`language-option ${e==="ja"?"active":""}`,"aria-label":n.ja,"aria-pressed":e==="ja",onClick:()=>t("ja"),children:"JA"}),a.jsx("span",{className:"language-divider","aria-hidden":"true",children:"/"}),a.jsx("button",{type:"button",className:`language-option ${e==="en"?"active":""}`,"aria-label":n.en,"aria-pressed":e==="en",onClick:()=>t("en"),children:"EN"})]}),a.jsxs("button",{type:"button",className:"language-toggle-mobile","aria-label":i,onClick:r,children:[a.jsx("span",{className:`language-toggle-code ${e==="ja"?"active":""}`,"aria-hidden":"true",children:"JA"}),a.jsx("span",{className:"language-toggle-divider","aria-hidden":"true",children:"/"}),a.jsx("span",{className:`language-toggle-code ${e==="en"?"active":""}`,"aria-hidden":"true",children:"EN"})]}),a.jsx("style",{children:`
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
      `})]})},kS=()=>{const[e,t]=w.useState(!1),[n,r]=w.useState(!1),i=jn(),{language:o}=ie(),s=Ge(),l=w.useRef(null),c=w.useRef(null),u=w.useRef(null),d=w.useRef(null),h=w.useRef(!1),f=w.useRef(!1),y=w.useRef(i.pathname),v=w.useRef(!1);y.current=i.pathname,w.useEffect(()=>{const p=()=>{v.current||t(window.scrollY>50)};return window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)},[]);const x=[{name:"Home",href:"/"},{name:"Program",href:"/program"},{name:"Speakers",href:"/speakers"},{name:"Team",href:"/team"},{name:"About",href:"/about"},{name:"Acknowledgements",href:"/acknowledgements"},{name:"FAQ",href:"/faq"}],b=p=>p==="/"?i.pathname==="/":i.pathname===p||i.pathname.startsWith(`${p}/`);w.useEffect(()=>{h.current=!1,r(!1)},[i.pathname]),w.useEffect(()=>{var p,k;if(n){const S=window.requestAnimationFrame(()=>{var T;(T=d.current)==null||T.focus({preventScroll:!0})});return()=>window.cancelAnimationFrame(S)}f.current?(f.current=!1,(p=c.current??l.current)==null||p.focus()):h.current&&(h.current=!1,(k=u.current)==null||k.focus())},[n]),w.useEffect(()=>{if(!n)return;const p=document.body,k=document.documentElement,S=i.pathname,T=window.scrollY,E={position:p.style.position,top:p.style.top,left:p.style.left,width:p.style.width,overflow:p.style.overflow},j=k.style.overflow;return v.current=!0,k.style.overflow="hidden",p.style.position="fixed",p.style.top=`-${T}px`,p.style.left="0",p.style.width="100%",p.style.overflow="hidden",()=>{k.style.overflow=j,p.style.position=E.position,p.style.top=E.top,p.style.left=E.left,p.style.width=E.width,p.style.overflow=E.overflow,v.current=!1,y.current===S?(window.scrollTo({top:T,left:0,behavior:"auto"}),t(T>50)):(window.scrollTo({top:0,left:0,behavior:"auto"}),t(!1))}},[n,i.pathname]),w.useEffect(()=>{const p=window.matchMedia("(min-width: 901px)"),k=S=>{if(!S.matches||!n)return;const T=document.getElementById("mobile-navigation"),E=document.activeElement;f.current=(T==null?void 0:T.contains(E))||u.current===E,h.current=!1,r(!1)};return k(p),typeof p.addEventListener=="function"?(p.addEventListener("change",k),()=>p.removeEventListener("change",k)):(p.addListener(k),()=>p.removeListener(k))},[n]),w.useEffect(()=>{if(!n)return;const p=k=>{k.key==="Escape"&&(h.current=!0,r(!1))};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[n]);const g=()=>{n&&(h.current=!0),r(p=>!p)},m=p=>{h.current=i.pathname===p,r(!1)};return a.jsxs(a.Fragment,{children:[a.jsx("a",{href:"#main-content",className:"skip-link",children:o==="ja"?"本文へ移動":"Skip to main content"}),a.jsxs("header",{className:`header ${e?"scrolled":""}`,children:[a.jsxs("div",{className:"container header-content",children:[a.jsx(ae,{ref:l,to:"/",className:"logo-container",children:a.jsx("img",{src:Xc,alt:"TEDxWUSHS Youth",className:"header-logo"})}),a.jsxs("div",{className:"header-actions",children:[a.jsx("nav",{className:"desktop-nav","aria-label":o==="ja"?"メインナビゲーション":"Primary navigation",children:a.jsx("ul",{lang:"en",children:x.map(p=>a.jsx("li",{children:a.jsx(ae,{to:p.href,ref:b(p.href)?c:void 0,className:b(p.href)?"active":"","aria-current":i.pathname===p.href?"page":void 0,children:p.name})},p.name))})}),a.jsx("button",{type:"button",ref:u,className:"mobile-menu-btn","aria-label":n?o==="ja"?"メニューを閉じる":"Close menu":o==="ja"?"メニューを開く":"Open menu","aria-expanded":n,"aria-controls":"mobile-navigation",onClick:g,children:n?a.jsx(fS,{size:28,"aria-hidden":"true"}):a.jsx(tS,{size:28,"aria-hidden":"true"})}),a.jsx(wS,{})]})]}),a.jsx(Bg,{children:n&&a.jsx(re.nav,{id:"mobile-navigation",className:"mobile-menu","aria-label":o==="ja"?"モバイルナビゲーション":"Mobile navigation",initial:s?!1:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:s?{opacity:1,y:0}:{opacity:0,y:-20},transition:s?{duration:0}:{duration:.2},children:a.jsx("ul",{lang:"en",children:x.map((p,k)=>a.jsx("li",{children:a.jsx(ae,{to:p.href,ref:k===0?d:void 0,onClick:()=>m(p.href),className:b(p.href)?"active-mobile":"","aria-current":i.pathname===p.href?"page":void 0,children:p.name})},p.name))})})}),a.jsx("style",{children:`
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

        @media (max-width: 900px) {
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

        @media (min-width: 901px) {
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
      `})]})]})},bS=()=>{const e=new Date().getFullYear();return a.jsxs("footer",{id:"footer",className:"footer",lang:"en",children:[a.jsxs("div",{className:"container footer-content",children:[a.jsxs("div",{className:"footer-top",children:[a.jsxs("div",{className:"footer-brand",children:[a.jsx(ae,{className:"footer-brand-link",to:"/",children:a.jsx("img",{src:Xc,alt:"TEDxWUSHS Youth",className:"footer-logo"})}),a.jsx("p",{className:"footer-tagline",children:"This independent TEDx event is operated under license from TED."})]}),a.jsxs("nav",{className:"footer-links","aria-labelledby":"footer-quick-links-heading",children:[a.jsx("h4",{id:"footer-quick-links-heading",children:"Quick Links"}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx(ae,{to:"/program",children:"Program"})}),a.jsx("li",{children:a.jsx(ae,{to:"/speakers",children:"Speakers"})}),a.jsx("li",{children:a.jsx(ae,{to:"/team",children:"Team"})}),a.jsx("li",{children:a.jsx(ae,{to:"/about",children:"About Us"})}),a.jsx("li",{children:a.jsx(ae,{to:"/join-us",children:"Join Us"})}),a.jsx("li",{children:a.jsx("a",{href:"https://www.waseda.jp/school/shs/",target:"_blank",rel:"noopener noreferrer",children:"Waseda SHS"})}),a.jsx("li",{children:a.jsx("a",{href:"https://www.ted.com/about/programs-initiatives/tedx-program",target:"_blank",rel:"noopener noreferrer",children:"TEDx Program"})})]})]}),a.jsxs("div",{className:"footer-social",children:[a.jsx("h4",{children:"Connect"}),a.jsxs("div",{className:"social-icons",children:[a.jsx("a",{href:"https://www.instagram.com/tedxwushs/",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:a.jsx(r0,{size:24,"aria-hidden":"true"})}),a.jsx("a",{href:"https://x.com/TEDxWUSHS",target:"_blank",rel:"noopener noreferrer","aria-label":"X (Twitter)",children:a.jsx(a0,{size:24,"aria-hidden":"true"})}),a.jsx("a",{href:"https://note.com/tedx_wushs_youth",target:"_blank",rel:"noopener noreferrer","aria-label":"TEDxWUSHS Youth on note",title:"note",children:a.jsx("span",{className:"note-wordmark","aria-hidden":"true",children:"note"})}),a.jsx("a",{href:"https://www.youtube.com/@TEDxWUSHSYouth",target:"_blank",rel:"noopener noreferrer","aria-label":"TEDxWUSHS Youth on YouTube",children:a.jsx(mS,{size:24,"aria-hidden":"true"})}),a.jsx("a",{href:"mailto:tedxwushs@gmail.com","aria-label":"Email",children:a.jsx(i0,{size:24,"aria-hidden":"true"})})]}),a.jsx("p",{className:"footer-handle",children:"@TEDxWUSHS"}),a.jsxs("div",{className:"footer-contact",children:[a.jsx("p",{className:"footer-contact-label",children:"Contact"}),a.jsx("a",{className:"footer-email",href:"mailto:tedxwushs@gmail.com",children:"tedxwushs@gmail.com"}),a.jsx("p",{className:"footer-contact-note",lang:"ja",children:"イベント参加のお申し込みに関するご質問・お問い合わせ"})]})]})]}),a.jsx("div",{className:"footer-bottom",children:a.jsxs("p",{children:["© ",e," TEDxWUSHS Youth. All Rights Reserved."]})})]}),a.jsx("style",{children:`
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
      `})]})},SS="/assets/poster-DnR2-vAa.png",fn="https://docs.google.com/forms/d/e/1FAIpQLScgIJmzQPqA0wPBogA5n2a7ObTGbCNzBIzN5oXXrNjf-BlYSg/viewform?usp=sharing&ouid=100328861093802403857",jS={ja:{description:"早稲田大学高等学院の生徒が独立して企画・運営するTEDxイベント。アイデアは世界を変える。その可能性を高等学院から。",eventLabel:"開催情報",date:"2026年10月31日（土）",reception:"開場 13:30",venue:"早稲田大学高等学院 講堂",audience:"高等学院・中学部の生徒及びその保護者、高等学院OB",posterAlt:"TEDxWUSHS Youth「Ideas change everything.」イベントポスター",programAction:"イベント詳細",applicationAction:"応募フォーム"},en:{description:"TEDxWUSHS Youth is an independently organized TEDx event led by students at Waseda University Senior High School. From our school, we explore the power of ideas to change everything.",eventLabel:"Program details",date:"Saturday, October 31, 2026",reception:"Doors open 1:30 PM",venue:"Waseda University Senior High School Auditorium",audience:"Senior High School and Junior High School students, their parents or guardians, and alumni",posterAlt:"TEDxWUSHS Youth event poster: Ideas change everything.",programAction:"Event Details",applicationAction:"Application Form"}},TS=()=>{const{language:e}=ie(),t=Ge(),n=jS[e];return a.jsxs("section",{className:"hero",children:[a.jsxs("div",{className:"container hero-container",children:[a.jsxs(re.div,{className:"hero-content",initial:t?!1:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:t?0:.8},children:[a.jsxs(re.span,{className:"hero-tagline",lang:"en",initial:t?!1:{opacity:0},animate:{opacity:1},transition:t?{duration:0}:{delay:.5},children:[a.jsx("span",{className:"brand-name",children:"TEDxWUSHS Youth"})," · Waseda University Senior High School"]}),a.jsxs("h1",{className:"hero-title",lang:"en",children:["Ideas change ",a.jsx("br",{})," ",a.jsx("span",{className:"highlight-red",children:"everything."})]}),a.jsx("p",{className:"hero-description",children:n.description}),a.jsxs("div",{className:"hero-event-details",role:"group","aria-label":n.eventLabel,children:[a.jsxs("div",{className:"hero-event-detail",children:[a.jsx(Rb,{size:22,"aria-hidden":"true"}),a.jsxs("div",{children:[a.jsx("span",{lang:"en",children:"Date"}),a.jsx("time",{dateTime:"2026-10-31",children:a.jsx("strong",{children:n.date})})]})]}),a.jsxs("div",{className:"hero-event-detail",children:[a.jsx(Wb,{size:22,"aria-hidden":"true"}),a.jsxs("div",{children:[a.jsx("span",{lang:"en",children:"Time"}),a.jsx("strong",{children:"14:00～17:30"}),a.jsx("small",{children:n.reception})]})]}),a.jsxs("div",{className:"hero-event-detail",children:[a.jsx(Zb,{size:22,"aria-hidden":"true"}),a.jsxs("div",{children:[a.jsx("span",{lang:"en",children:"Venue"}),a.jsx("strong",{children:n.venue})]})]}),a.jsxs("div",{className:"hero-event-detail",children:[a.jsx(uS,{size:22,"aria-hidden":"true"}),a.jsxs("div",{children:[a.jsx("span",{lang:"en",children:"Audience"}),a.jsx("strong",{children:n.audience})]})]})]}),a.jsxs("div",{className:"hero-cta",children:[a.jsx(ae,{to:"/program",className:"btn btn-primary",children:n.programAction}),a.jsx("a",{href:fn,className:"btn btn-outline",target:"_blank",rel:"noopener noreferrer",children:n.applicationAction})]})]}),a.jsx(re.div,{className:"hero-visual",initial:t?!1:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:t?0:1,ease:"easeOut"},children:a.jsxs("div",{className:"poster-container",children:[a.jsx("img",{src:SS,alt:n.posterAlt,className:"hero-poster"}),a.jsx("div",{className:"poster-glow","aria-hidden":"true"})]})})]}),a.jsx("style",{children:`
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
      `})]})},vl="/assets/gakuinsai-BWIVjSAN.png",ES=[{id:"audience-registration-deadline-extended",publishedAt:"2026-10-25",category:"Registration",href:fn,external:!0,copy:{ja:{title:"参加申込み締切を10月29日まで延長しました",summary:"TEDxWUSHS Youth 2026の参加申込み締切を、2026年10月29日（木）まで延長しました。参加をご希望の方は、申込フォームからお申し込みください。",action:"参加を申し込む"},en:{title:"Registration deadline extended to October 29",summary:"The audience registration deadline for TEDxWUSHS Youth 2026 has been extended to Thursday, October 29, 2026. Please apply using the registration form.",action:"Apply to attend"}}},{id:"alumni-added-to-audience-eligibility",publishedAt:"2026-10-24",category:"Registration",href:fn,external:!0,copy:{ja:{title:"OBも参加申込みの対象となりました",summary:"TEDxWUSHS Youth 2026の参加対象に、早稲田大学高等学院のOBを追加しました。高等学院・高等学院中学部の生徒及びその保護者に加え、OBの皆さまもお申し込みいただけます。",action:"参加を申し込む"},en:{title:"Audience eligibility now includes alumni",summary:"Alumni of Waseda University Senior High School are now eligible to attend TEDxWUSHS Youth 2026, alongside Senior High School and Junior High School students and their parents or guardians.",action:"Apply to attend"}}},{id:"audience-eligibility-expanded",publishedAt:"2026-10-18",category:"Registration",href:fn,external:!0,copy:{ja:{title:"中学部の生徒・保護者もお申し込みいただけます",summary:"TEDx WUSHS Youth 2026の参加対象は、高等学院の生徒およびその保護者に加え、高等学院中学部の生徒およびその保護者もお申し込みいただけます。以前までの文章は分かりにくい案内となっていましたことをお詫び申し上げます。",action:"参加を申し込む"},en:{title:"Audience eligibility has expanded",summary:"We apologize that our previous information did not clearly explain audience eligibility. Senior High School and Junior High School students, as well as their parents or guardians, may apply to attend TEDxWUSHS Youth 2026.",action:"Apply to attend"}}},{id:"school-fest-2026-feature",publishedAt:"2026-10-12",category:"Feature",href:"/school-fest-2026",copy:{ja:{title:"学院祭英語ディベート特集を公開",summary:"学院祭で実施した3校との英語ディベートを、対戦記録、TED/TEDxの理念、オーディエンスを取り込んだ今回の工夫とともに紹介します。",action:"特集記事を読む"},en:{title:"Gakuinsai English Debate feature",summary:"Explore our three interschool debates through the match records, the ideas behind TED and TEDx, and the audience-inclusive format we developed.",action:"Read the feature"}}},{id:"waseda-shs-official-announcement",publishedAt:"2026-10-09",category:"Announcement",href:"https://www.waseda.jp/school/shs/news/2026/10/09/11248/",external:!0,copy:{ja:{title:"高等学院公式サイトに開催案内が掲載されました",summary:"早稲田大学高等学院の公式サイトで、10月31日（土）開催のTEDxWUSHS Youth 2026「Breakshot」が紹介されました。",action:"高等学院の掲載記事を読む"},en:{title:"Event announcement published by Waseda University Senior High School",summary:"Waseda University Senior High School has published an official announcement for TEDxWUSHS Youth 2026 “Breakshot,” taking place on Saturday, October 31.",action:"Read the official announcement"}}},{id:"audience-registration-open",publishedAt:"2026-10-01",category:"Registration",href:fn,external:!0,copy:{ja:{title:"オーディエンス募集を開始しました",summary:"TEDxWUSHS Youth 2026のオーディエンス募集を開始しました。対象は早稲田大学高等学院の生徒及びその保護者と、高等学院中学部の生徒及びその保護者です。",action:"参加を申し込む"},en:{title:"Audience registration is now open",summary:"Audience registration for TEDxWUSHS Youth 2026 is open to Senior High School and Junior High School students, as well as their parents or guardians.",action:"Apply to attend"}}},{id:"gakuinsai-2026-program",publishedAt:"2026-09-30",category:"Event",href:vl,external:!0,image:vl,imageAlt:{ja:"TEDxWUSHS Youth学院祭企画「English Debate」のポスター",en:"Poster for the TEDxWUSHS Youth English Debate program at Gakuinsai 2026"},copy:{ja:{title:"学院祭で英語ディベート企画を実施します",summary:"10月10日（土）・11日（日）、学院祭のゼミ室2でTEDxWUSHS Youthの団体紹介を行います。頌栄女子学院高等学校・慶應義塾高等学校・早稲田大学本庄高等学院ESSと、社会奉仕・所得税・友情と恋愛を論題に英語で議論します。",action:"ポスターを拡大して見る"},en:{title:"English debates at Gakuinsai 2026",summary:"On October 10 and 11 in Seminar Room 2, we will introduce TEDxWUSHS Youth and hold philosophical English debates with Shoei Girls’ Senior High School, Keio Senior High School, and Waseda University Honjo Senior High School ESS on community service, income tax, and friendship versus romantic relationships.",action:"View the full poster"}}},{id:"official-note-launched",publishedAt:"2026-09-30",category:"note",href:"https://note.com/tedx_wushs_youth/n/n01e4f29a9fca",external:!0,copy:{ja:{title:"公式noteを更新しました",summary:"公式noteで「TEDxWUSHS Youth 公式note始めました！」を公開しました。今後、活動やイベントに関する情報を発信していきます。",action:"noteの記事を読む"},en:{title:"Official note updated",summary:"We published “TEDxWUSHS Youth 公式note始めました！” and will share more updates about our activities and the event.",action:"Read on note"}}},{id:"full-speaker-lineup-announced",publishedAt:"2026-09-29",category:"Speakers",href:"/speakers",copy:{ja:{title:"全登壇者のプロフィールを公開しました",summary:"TEDxWUSHS Youth 2026に登壇する全7名のスピーカー情報を公開しました。",action:"全登壇者を見る"},en:{title:"Full speaker lineup announced",summary:"Profiles for all seven TEDxWUSHS Youth 2026 speakers are now available.",action:"View the full lineup"}}},{id:"speaker-information-update",publishedAt:"2026-09-27",category:"Speakers",href:"/speakers",copy:{ja:{title:"スピーカー情報を更新しました",summary:"TEDxWUSHS Youth 2026に登壇するスピーカーのプロフィールと講演情報を更新しました。",action:"スピーカー情報を見る"},en:{title:"Speaker information updated",summary:"We have updated the profiles and talk information for the TEDxWUSHS Youth 2026 speakers.",action:"View speakers"}}}],zh={ja:{eyebrow:"Newsroom",titleLead:"Latest",titleAccent:"Updates",description:"TEDxWUSHS Youthの開催準備や登壇者に関する最新情報をお知らせします。",listLabel:"TEDxWUSHS Youthの更新情報"},en:{eyebrow:"Newsroom",titleLead:"Latest",titleAccent:"Updates",description:"The latest announcements about TEDxWUSHS Youth, our speakers, and event preparations.",listLabel:"TEDxWUSHS Youth updates"}},_S=e=>e.replaceAll("-","."),DS=()=>{const{language:e}=ie(),t=Ge(),n=zh[e]??zh.ja,r=[...ES].sort((i,o)=>o.publishedAt.localeCompare(i.publishedAt));return a.jsxs("section",{className:"updates section-padding","aria-labelledby":"updates-heading",children:[a.jsxs("div",{className:"container",children:[a.jsxs(re.header,{className:"updates-header",initial:t?!1:{opacity:0,y:20},whileInView:t?void 0:{opacity:1,y:0},viewport:{once:!0},transition:{duration:t?0:.6},children:[a.jsxs("div",{children:[a.jsx("p",{className:"updates-eyebrow",lang:"en",children:n.eyebrow}),a.jsxs("h2",{id:"updates-heading",className:"updates-title",lang:"en",children:[n.titleLead," ",a.jsx("span",{className:"highlight-red",children:n.titleAccent})]})]}),a.jsx("p",{className:"updates-description",children:n.description})]}),a.jsx("ol",{className:"updates-list","aria-label":n.listLabel,children:r.map((i,o)=>{var f,y;const s=i.copy[e]??i.copy.ja,l=((f=i.imageAlt)==null?void 0:f[e])??((y=i.imageAlt)==null?void 0:y.ja)??"",c=i.external?"a":ae,u=i.external?{href:i.href,target:"_blank",rel:"noopener noreferrer"}:{to:i.href},d=i.external?di:rr,h=e==="en"?" (opens in a new tab)":"（新しいタブで開きます）";return a.jsx(re.li,{initial:t?!1:{opacity:0,y:16},whileInView:t?void 0:{opacity:1,y:0},viewport:{once:!0},transition:{duration:t?0:.5,delay:t?0:o*.08},children:a.jsxs(c,{className:`updates-item${i.image?" updates-item--with-image":""}`,"aria-label":`${s.action}: ${s.title}${i.external?h:""}`,...u,children:[i.image&&a.jsx("span",{className:"updates-item-media",children:a.jsx("img",{src:i.image,alt:l,loading:"lazy",decoding:"async"})}),a.jsxs("div",{className:"updates-item-body",children:[a.jsxs("div",{className:"updates-meta",children:[a.jsx("time",{dateTime:i.publishedAt,lang:"en",children:_S(i.publishedAt)}),a.jsx("span",{lang:"en",children:i.category})]}),a.jsx("h3",{children:s.title}),a.jsx("p",{children:s.summary}),a.jsx("span",{className:"updates-action",children:s.action})]}),a.jsx("span",{className:"updates-arrow","aria-hidden":"true",children:a.jsx(d,{size:22})})]})},i.id)})})]}),a.jsx("style",{children:`
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
        }

        @media (prefers-reduced-motion: reduce) {
          .updates-arrow {
            transition: none;
          }
        }
      `})]})},CS={ja:{programLink:"TEDxプログラムについて詳しく見る",descriptions:["TEDxWUSHS Youthは、早稲田大学高等学院の生徒が独立して企画・運営するTEDxイベントです。若者ならではの視点とパッションを武器に、高校生という枠を超えた、社会に響くメッセージを発信します。私たちは、対話を通じて互いの可能性を広げ、新しい一歩を踏み出すきっかけを作ります。","TEDxは、地域で自主的に運営されるイベントを通じて、人々がTEDのような体験を共有するためのプログラムです。TEDxWUSHS Youthでは、TED Talksの映像と7名のライブスピーカーによるトークを組み合わせ、対話とつながりを生み出します。","2026年のテーマは「Breakshot」。人生の軌道を変えた一打をテーマに、7名のスピーカーがそれぞれのアイデアを共有します。"],venue:"早稲田大学高等学院 講堂"},en:{programLink:"Learn more about the TEDx program",descriptions:["TEDxWUSHS Youth is an independently organized TEDx event conceived and produced by students at Waseda University Senior High School. Drawing on the perspectives and passion unique to young people, we share messages that reach beyond the boundaries of high school. Through dialogue, we aim to expand one another’s possibilities and inspire a first step toward change.","TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. TEDxWUSHS Youth combines TED Talks video with talks from seven live speakers to spark discussion and connection.","Our 2026 theme is “Breakshot.” Seven speakers will share the ideas and defining moments that changed the course of their lives."],venue:"Waseda University Senior High School Auditorium"}},PS=()=>{const{language:e}=ie(),t=Ge(),n=CS[e];return a.jsxs("section",{id:"about",className:"about section-padding",children:[a.jsx("div",{className:"container",children:a.jsx("div",{className:"about-grid",children:a.jsxs(re.div,{className:"about-item about-item--combined",initial:t?!1:{opacity:0,y:30},whileInView:t?void 0:{opacity:1,y:0},viewport:{once:!0},transition:{duration:t?0:.6},children:[a.jsx("h2",{className:"about-logo-heading",children:a.jsx("img",{src:Xc,alt:"TEDxWUSHS Youth",className:"about-logo"})}),a.jsx("div",{className:"about-description",children:n.descriptions.map(r=>a.jsx("p",{children:r},r))}),a.jsxs("a",{href:"https://www.ted.com/about/programs-initiatives/tedx-program",target:"_blank",rel:"noopener noreferrer",className:"highlight-link program-link",children:[n.programLink," ↗"]}),a.jsxs("p",{className:"event-info",children:[a.jsx("strong",{lang:"en",children:"Date:"})," ",a.jsx("span",{lang:"en",children:"October 31, 2026 (14:00 - 17:30 / Doors open 13:30)"}),a.jsx("br",{}),a.jsx("strong",{lang:"en",children:"Venue:"})," ",a.jsx("a",{href:"https://www.waseda.jp/school/shs/",target:"_blank",rel:"noopener noreferrer",className:"highlight-link",children:n.venue}),", ",a.jsx("span",{lang:"en",children:"Nerima, Tokyo"})]})]})})}),a.jsx("style",{children:`
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
      `})]})},NS="/assets/enomoto-takayuki-DNGDHC06.jpg",AS="/assets/hasegawa-keisuke-DYSgj9AY.jpg",zS="/assets/reon-hiruma-CtjqnzZU.jpg",MS="/assets/horise-yoshito-BMWy-myU.jpg",LS="/assets/kogure-masahisa-jgnY9mTV.jpg",RS="/assets/kuroki-yuto-H_vlZVz7.jpg",IS="/assets/takezawa-mamoru-CgZku-6Z.jpg",d0=e=>{const t=[];let n=0;for([2,2].forEach(r=>{n>=e.length||(t.push(e.slice(n,n+r)),n+=r)});n<e.length;)t.push(e.slice(n,n+3)),n+=3;return t},h0=[{id:"enomoto-takayuki",displayOrder:30,published:!0,featured:!0,image:NS,imagePosition:"50% 42%",name:{ja:"榎本 隆之",en:"Takayuki Enomoto"},role:{ja:"早稲田大学高等学院 国語科教員",en:"Japanese Language Educator, Waseda University Senior High School"},shortBio:{ja:"国語科指導、国際交流・芸術プログラムを通して、グローバルな文脈に造詣のある高校生の育成を目指している。",en:"A Japanese language educator with experience in textbook editing, international exchange initiatives, and comparative teacher education."},intro:{ja:["1964年生まれ。中高国語科教員。早稲田大学、コロラド州立大学などを経て、現在は早稲田大学高等学院所属。国語科指導をはじめ各種国際交流プログラムや芸術プログラムを通じて、グローバルな文脈に造詣のあるスーパー高校生を育成することを目指している。","高等学校国語科検定教科書の編集に長く携わり、教員養成の比較教育に関心がある。"],en:["An accomplished junior and senior high school Japanese language literacy educator with academic and professional backgrounds at Waseda University and Colorado State University. He currently serves on the faculty at Waseda University Senior High School.","He is dedicated to nurturing exceptional, globally minded high school students through comprehensive Japanese language instruction, international exchange initiatives, and music programs. He brings extensive experience in editing government-approved high school textbooks of Japanese language and literature, complemented by a strong research interest in comparative education in teacher education programs."]}},{id:"hasegawa-keisuke",displayOrder:70,published:!0,featured:!0,image:AS,imagePosition:"50% 42%",name:{ja:"長谷川 慶佑",en:"Keisuke Hasegawa"},role:{ja:"早稲田大学高等学院 1年",en:"First-year Student, Waseda University Senior High School"},shortBio:{ja:"中学時代に「ビオトープ管理委員会」を立ち上げ、環境保全活動を牽引。環境・文芸の両分野で多数の受賞実績を持つ。",en:"Founder of a school Biotope Management Committee, with numerous awards in environmental conservation and literature."},intro:{ja:["2010年福島県生まれ。中学時代に校内組織「ビオトープ管理委員会」を自ら立ち上げ、環境保全活動を牽引。「全国学校・園庭ビオトープコンクール2023文部科学大臣賞」や「第59回全国野生生物保護活動発表大会環境大臣賞」を受賞する。","さらに「令和6年度道路ふれあい月間推進標語最優秀賞（国土交通大臣表彰）」、「第44回福島県川柳賞青少年奨励賞」など、環境・文芸の両分野で多数の受賞実績を持つ。"],en:["Born in Fukushima Prefecture in 2010, he has won numerous literary contests, including the 2024 Road Fureai Month Promotion Slogan Grand Prize, the 44th Fukushima Prefecture Senryu Award Youth Encouragement Prize, and the “Thinking Together: Fukushima, Towards the Environment Beyond” Challenge Award 2023.","The Biotope Management Committee activity he initiated at school during junior high received the 2023 National School/Garden Biotope Contest Minister of Education, Culture, Sports, Science and Technology Award and the 59th National Wildlife Protection Activity Presentation Competition Minister of the Environment Award. In his talk, he will share insights drawn from experiences related to the Fukushima Daiichi Nuclear Power Plant accident and his activities to date."]}},{id:"horise-yoshito",displayOrder:60,published:!0,featured:!0,image:MS,imagePosition:"50% 45%",name:{ja:"堀瀬 善仁",en:"Yoshito Horise"},role:{ja:"早稲田大学高等学院 2年",en:"Second-year Student, Waseda University Senior High School"},shortBio:{ja:"早稲田大学高等学院2年。7度の転校と多文化経験を持ち、AI姿勢認識を活用した語学ツール「KATA」を開発。",en:"A sophomore at Waseda University Senior High School with seven school changes and multicultural experience, and the developer of “KATA,” an AI-based language-learning tool."},intro:{ja:["早稲田大学高等学院2年。日本・台湾・香港で7度の転校を経験し、カナダ・オーストラリア・フランスでの国際経験を積む。日本語・中国語を母語とし、英語・フランス語・韓国語を学習中。国際HANAシンポジウム2年連続登壇、AI時代における人間の主体性を研究。","東大AIハッカソン優秀賞受賞。AI姿勢認識を活用した語学ツール「KATA」を開発。現在は、Stanford e-Japanに挑戦し、国際分野での活動を目指す。"],en:["A sophomore at Waseda University Senior High School. He has changed schools seven times in Japan, Taiwan, and Hong Kong, and has gained international experience in Canada, Australia, and France. Japanese and Chinese are his native languages, and he is currently studying English, French, and Korean. He has spoken at the International HANA Symposium for two consecutive years and is researching human agency in the age of AI.","He received the Excellence Award at the University of Tokyo AI Hackathon and developed “KATA,” a language-learning tool that utilizes AI-based posture recognition. He is currently participating in the Stanford e-Japan program and aims to pursue activities in the international arena."]}},{id:"kuroki-yuto",displayOrder:50,published:!0,featured:!0,image:RS,imagePosition:"50% 44%",name:{ja:"黒木 勇人",en:"Yuto Kuroki"},role:{ja:"早稲田大学 情報理工学科2年",en:"Second-year Computer Science Student, Waseda University"},shortBio:{ja:"ISEF 2025に日本代表として出場し、ドローン配送最適化アルゴリズムの研究で文部科学大臣特別賞を受賞。",en:"Japan representative at ISEF 2025 and recipient of the MEXT Minister’s Special Award for drone-delivery optimization research."},intro:{ja:["早稲田大学情報理工学科2年。国際学生科学技術フェア（ISEF 2025）に日本代表として出場し、ドローン配送最適化アルゴリズムの研究を発表。文部科学大臣特別賞を受賞した。2026年夏からは、中谷財団の奨学生としてジョージア工科大学でロボット外骨格の深層学習モデルを研究している。","外国語学習にも力を入れ、TOEIC満点、ケンブリッジ英検C2取得、最難関のドイツ語検定試験Goethe-Zertifikat C2の3技能合格を達成。現在は外国語学習の方法を発信しながら、高校生の研究発表を支援するNPO法人で活動している。高校時代は硬式テニス部に所属。"],en:["A second-year Computer Science student at Waseda University. He represented Japan at ISEF 2025, presenting research on a drone-delivery optimization algorithm, and received the MEXT Minister’s Special Award. Since summer 2026, he has been conducting research on deep-learning models for robotic exoskeletons at the Georgia Institute of Technology as a Nakatani Foundation scholar.","Passionate about language learning, he has achieved a perfect TOEIC score, Cambridge C2 Proficiency, and passed three Goethe-Zertifikat C2 modules. He currently shares language-learning methods and works with an NPO supporting high school students in presenting their research. In high school, he was on the tennis team."]}},{id:"kogure-masahisa",displayOrder:10,published:!0,featured:!0,image:LS,imagePosition:"50% 42%",name:{ja:"小暮 真久",en:"Masahisa Kogure"},role:{ja:"社会起業家",en:"Social Entrepreneur"},shortBio:{ja:"TABLE FOR TWOを創設し、約800の企業・団体を巻き込む社会運動へ成長させた。現在も医療・AIなど多領域で挑戦を続けている。",en:"Founder of TABLE FOR TWO, which grew into a nationwide social movement involving around 800 companies and organizations."},intro:{ja:["早稲田大学卒業後、オーストラリアで人工心臓の研究に従事。その後、マッキンゼー・アンド・カンパニーを経て、社会課題の解決を目指すTABLE FOR TWOを創設。約800の企業・団体を巻き込み、日本最大規模の社会運動へと成長させる。研究、ビジネス、社会課題など異なる世界を越境しながら、新しい仕組みや事業を生み出してきた。現在も医療・AIをはじめ、さまざまな領域で新たな挑戦を続けている。"],en:["After graduating from Waseda University, he conducted artificial-heart research in Australia. He later worked at McKinsey & Company before founding TABLE FOR TWO to address social challenges. By involving around 800 companies and organizations, he grew the initiative into one of Japan’s largest social movements. Crossing boundaries among research, business, and social issues, he has created new systems and ventures, and he continues to take on new challenges in healthcare, AI, and other fields."]}},{id:"takezawa-mamoru",displayOrder:40,published:!0,featured:!0,image:IS,imagePosition:"42% 50%",name:{ja:"武沢 護",en:"Mamoru Takezawa"},role:{ja:"早稲田大学高等学院 前学院長",en:"Former Headmaster of Waseda University Senior High School"},shortBio:{ja:"長く早稲田大学高等学院の教員を務め、数学・情報科の指導に携わる。特に最後の4年間は学院長を務めた。",en:"A longtime mathematics and information studies educator at Waseda University Senior High School who served as Headmaster for the final four years of his tenure."},intro:{ja:["早稲田大学高等学院前学院長。長く早稲田大学高等学院の教員を務め、数学・情報科の指導に携わる。特に最後の4年間は学院長を務めた。"],en:["Former Headmaster of Waseda University Senior High School. He served for many years as a teacher at the school, teaching mathematics and information studies. He was Headmaster for the final four years of his tenure."]},speechInfo:{ja:"これまでの教育経験をもとに、TEDxWUSHS Youthのテーマ「Breakshot」に沿って、AI・デジタル時代の予測不可能な未来に向けて、私たちが身につけるべき資質と能力について議論する。",en:"Drawing on his experience in education and in keeping with the TEDxWUSHS Youth theme “Breakshot,” he will discuss the qualities and capabilities we should develop as we face an unpredictable future in the age of AI and digital technology."}},{id:"reon-hiruma",displayOrder:20,published:!0,featured:!0,image:zS,imagePosition:"50% 42%",name:{ja:"比留間 礼音",en:"Reon Hiruma"},role:{ja:"ベンチャーキャピタリスト",en:"Venture Capitalist"},shortBio:{ja:"ヘルスケア、産業技術、安全保障領域のディープテックに投資し、防衛技術コミュニティJDTIも運営している。",en:"A venture capitalist investing in deep tech across healthcare, industrial technology, and security, and the operator of the JDTI defense technology community."},intro:{ja:["ヘルスケア、産業技術、安全保障領域のディープテックに投資するベンチャーキャピタリスト。早稲田大学在学中の2018年にPotentialist Globalを共同創業し、欧米の技術系企業20社以上の日本・アジア進出を支援。2026年より国内大手VCで投資を担当する。投資の傍ら、防衛技術コミュニティJDTIを運営し、技術系スタートアップが安全保障に果たしうる役割を議論する場づくりに取り組む。オランダ人と日本人の両親をもち、四言語に堪能。"],en:["Reon Hiruma is a venture capitalist investing in deep tech across healthcare, industrial technology, and security. While at Waseda University, he co-founded Potentialist Global in 2018 and helped over 20 US and European technology companies enter Japan and Asia. In 2026, he joined a leading Japanese venture capital firm. Alongside his work as an investor, Reon runs JDTI, a defense technology community that brings people together to discuss the role startups can play in national security. Born to Dutch and Japanese parents, he speaks four languages."]}}],Mh=({speaker:e,language:t,variant:n,index:r})=>{var y,v;const i=Ge(),o=n==="detail",s=o?"h2":"h3",l=e.name[t]??e.name.ja,c=e.role[t]??e.role.ja,u=e.shortBio[t]??e.shortBio.ja,d=e.intro[t]??e.intro.ja,h=((y=e.speechInfo)==null?void 0:y[t])??((v=e.speechInfo)==null?void 0:v.ja),f=t==="en"?`Portrait of ${l}`:`${l}のプロフィール写真`;return a.jsxs(re.article,{className:`speaker-card speaker-card--${n}${o&&r%2===1?" speaker-card--reversed":""}`,style:{"--speaker-image-position":e.imagePosition},initial:i?!1:{opacity:0,y:28},whileInView:i?void 0:{opacity:1,y:0},viewport:{once:!0,amount:.15},transition:i?{duration:0}:{duration:.55,delay:o?0:Math.min(r*.07,.28)},children:[a.jsx("div",{className:"speaker-card__image-frame",children:a.jsx("img",{src:e.image,alt:f,className:"speaker-card__image",loading:o&&r===0?"eager":"lazy",decoding:"async"})}),a.jsxs("div",{className:"speaker-card__content",children:[a.jsx("p",{className:"speaker-card__role",children:c}),a.jsx(s,{className:"speaker-card__name",children:l}),o?a.jsxs("div",{className:"speaker-card__bio",children:[d.map((x,b)=>a.jsx("p",{children:x},`${e.id}-intro-${b}`)),h&&a.jsx("p",{children:h})]}):a.jsx("p",{className:"speaker-card__summary",children:u})]})]})},Lh={ja:{previewSubtitle:"多様な経験と専門性を持つスピーカーたちが、それぞれのBreakshotから生まれたアイデアを共有します。",fullSubtitle:"TEDxWUSHS Youth 2026に登壇するスピーカーと、その背景にある経験やアイデアをご紹介します。",empty:"スピーカー情報は近日公開予定です。",comingSoonLabel:"追加情報",comingSoonBody:"スピーカーや講演内容に関する追加情報を、今後このページでお知らせします。"},en:{previewSubtitle:"Speakers with diverse experiences and expertise share ideas shaped by their own Breakshots.",fullSubtitle:"Meet the TEDxWUSHS Youth 2026 speakers and discover the experiences and ideas behind their talks.",empty:"Speaker information will be announced soon.",comingSoonLabel:"More to come",comingSoonBody:"More speaker and talk information will be announced on this page."}},f0=({variant:e="preview"})=>{const{language:t}=ie(),n=Ge(),r=Lh[t]??Lh.ja,i=e==="full",o=i?"h1":"h2",s=[...h0].filter(c=>c.published&&(i||c.featured)).sort((c,u)=>c.displayOrder-u.displayOrder),l=d0(s);return a.jsxs("section",{id:"speakers",className:`speakers-section speakers-section--${e} section-padding`,"aria-labelledby":"speakers-heading",children:[a.jsxs("div",{className:"container speakers-section__container",children:[a.jsxs(re.header,{className:"speakers-section__header",initial:n?!1:{opacity:0,y:20},whileInView:n?void 0:{opacity:1,y:0},viewport:{once:!0},transition:{duration:n?0:.6},children:[a.jsx("span",{className:"speakers-section__eyebrow",lang:"en",children:i?"The 2026 Speaker Lineup":"Ideas in Motion"}),a.jsxs(o,{id:"speakers-heading",className:"speakers-section__title",lang:"en",children:[i?"Our ":"Featured ",a.jsx("span",{children:"Speakers"})]}),a.jsx("p",{className:"speakers-section__subtitle",children:i?r.fullSubtitle:r.previewSubtitle})]}),s.length>0?i?a.jsx("div",{className:"speakers-section__list",children:s.map((c,u)=>a.jsx(Mh,{speaker:c,language:t,variant:"detail",index:u},c.id))}):a.jsx("div",{className:"speakers-section__grid",children:l.map((c,u)=>a.jsx("div",{className:"speakers-section__row",children:c.map(d=>a.jsx(Mh,{speaker:d,language:t,variant:"preview",index:s.findIndex(h=>h.id===d.id)},d.id))},`speaker-row-${u+1}`))}):a.jsx("p",{className:"speakers-section__empty",children:r.empty}),i&&s.length>0&&a.jsxs("section",{className:"speakers-section__coming-soon","aria-labelledby":"speakers-coming-soon-heading",children:[a.jsx("span",{className:"speakers-section__coming-soon-mark","aria-hidden":"true",children:"+"}),a.jsxs("div",{children:[a.jsx("p",{className:"speakers-section__coming-soon-label",children:r.comingSoonLabel}),a.jsx("h2",{id:"speakers-coming-soon-heading",className:"speakers-section__coming-soon-title",lang:"en",children:"Coming Soon"}),a.jsx("p",{className:"speakers-section__coming-soon-body",children:r.comingSoonBody})]})]}),!i&&s.length>0&&a.jsx("div",{className:"speakers-section__cta-wrap",children:a.jsxs(ae,{to:"/speakers",className:"speakers-section__cta",lang:"en",children:["More Details",a.jsx(rr,{size:18,"aria-hidden":"true"})]})})]}),a.jsx("style",{children:`
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

        .speaker-card__bio > p {
          color: #b5b5b5;
          font-size: 1rem;
          line-height: 1.9;
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

        @media (max-width: 800px) {
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
      `})]})},p0=[{time:"13:30",event:"Doors Open",description:{ja:"開場",en:"Audience entry begins"}},{time:"14:00",event:"Opening",description:{ja:"開会・オープニング",en:"Opening remarks"}},{time:"14:10",event:"Speech 1",description:{ja:"武沢 護",en:"Mamoru Takezawa"}},{time:"14:30",event:"Speech 2",description:{ja:"長谷川 慶佑",en:"Keisuke Hasegawa"}},{time:"14:45",event:"Speech 3",description:{ja:"堀瀬 善仁",en:"Yoshito Horise"}},{time:"15:05",event:"Break",description:{ja:"休憩",en:"Intermission"}},{time:"15:20",event:"Speech 4",description:{ja:"榎本 隆之",en:"Takayuki Enomoto"}},{time:"15:40",event:"Speech 5",description:{ja:"黒木 勇人",en:"Yuto Kuroki"}},{time:"16:00",event:"Speech 6",description:{ja:"小暮 真久",en:"Masahisa Kogure"}},{time:"16:15",event:"Speech 7",description:{ja:"比留間 礼音",en:"Reon Hiruma"}},{time:"16:30",event:"Closing",description:{ja:"閉会",en:"Closing remarks"}},{time:"16:50–17:20",event:"Workshop & Networking",description:{ja:"ワークショップ・交流会",en:"Workshop and networking"}},{time:"17:30頃",timeEn:"Around 17:30",event:"Program Ends",description:{ja:"終了",en:"Program concludes"}}],VS=()=>{const{language:e}=ie(),t=Ge(),n=e==="en"?"Scheduled for Saturday, October 31, 2026, from 14:00 to around 17:30. Doors open at 13:30. Times are subject to change.":"2026年10月31日（土）14:00〜17:30頃 開催予定（13:30開場）。時間は前後する可能性があります。";return a.jsxs("section",{id:"schedule",className:"schedule section-padding",children:[a.jsxs("div",{className:"container",children:[a.jsxs(re.div,{className:"section-header",initial:t?!1:{opacity:0,y:20},whileInView:t?void 0:{opacity:1,y:0},viewport:{once:!0},children:[a.jsxs("h2",{className:"section-title",lang:"en",children:["Program ",a.jsx("span",{className:"highlight-red",children:"Schedule"})]}),a.jsx("p",{className:"section-subtitle",children:n})]}),a.jsx("ol",{className:"timeline",children:p0.map((r,i)=>a.jsxs(re.li,{className:"timeline-item",initial:t?!1:{opacity:0,y:20},whileInView:t?void 0:{opacity:1,y:0},viewport:{once:!0},transition:t?{duration:0}:{delay:i*.1},children:[a.jsx("time",{className:"time",children:e==="en"&&r.timeEn?r.timeEn:r.time}),a.jsxs("div",{className:"event-content",children:[a.jsx("h3",{lang:"en",children:r.event}),a.jsx("p",{children:r.description[e]})]})]},`${r.time}-${r.event}`))})]}),a.jsx("style",{children:`
        .schedule {
          background-color: var(--ted-dark-gray);
        }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: 0;
          list-style: none;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 100%;
          background: rgb(var(--ted-red-rgb) / 0.2);
        }

        .timeline-item {
          display: flex;
          justify-content: flex-end;
          padding-right: 50%;
          margin-bottom: 4rem;
          position: relative;
        }

        .timeline-item:nth-child(even) {
          justify-content: flex-start;
          padding-right: 0;
          padding-left: 50%;
        }

        .timeline-item::after {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          width: 20px;
          height: 20px;
          background: var(--ted-red);
          border-radius: 50%;
          z-index: 2;
          border: 4px solid var(--ted-dark-gray);
        }

        .time {
          font-family: var(--font-heading);
          font-size: clamp(1.2rem, 2.2vw, 1.5rem);
          font-weight: 800;
          color: var(--ted-red);
          position: absolute;
          right: calc(50% + 30px);
          top: -10px;
          white-space: nowrap;
        }

        .timeline-item:nth-child(even) .time {
          right: auto;
          left: calc(50% + 30px);
        }

        .event-content {
          background: rgba(255, 255, 255, 0.03);
          padding: 2rem;
          border-radius: 12px;
          width: 80%;
          transition: var(--transition-smooth);
        }

        .event-content:hover {
          background: rgba(255, 255, 255, 0.06);
          transform: scale(1.05);
        }

        .event-content h3 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          color: white;
        }

        .event-content p {
          color: #aaa;
        }

        @media (max-width: 768px) {
          .timeline::before {
            left: 20px;
          }
          .timeline-item {
            flex-direction: column;
            justify-content: flex-start;
            padding-left: 50px;
            padding-right: 0;
          }
          .timeline-item:nth-child(even) {
            padding-left: 50px;
          }
          .timeline-item::after {
            left: 20px;
          }
          .time {
            position: relative;
            left: 0 !important;
            right: auto !important;
            margin-bottom: 0.5rem;
            display: block;
          }
          .event-content {
            width: 100%;
            padding: 1.5rem;
          }
        }

        @media (max-width: 360px) {
          .timeline::before,
          .timeline-item::after {
            left: 12px;
          }

          .timeline-item,
          .timeline-item:nth-child(even) {
            padding-left: 36px;
          }

          .event-content {
            padding: 1.25rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .event-content { transition: none; }
          .event-content:hover { transform: none; }
        }
      `})]})},OS={ja:{sectionSubtitle:"TEDxWUSHS Youthへの参加方法と最新情報をご案内します。",optionsHeading:"参加方法と最新情報",applicationsUpdate:"2026年開催分のスピーカー募集及び運営チーム募集は終了しました。たくさんのご応募ありがとうございました。オーディエンスの参加申込みは現在受け付けています。",teamDescription:"2026年開催分の運営チーム募集は終了しました。今後の募集はウェブサイトとSNSでお知らせします。",teamAction:"募集状況を見る",audienceDescription:"対象は早稲田大学高等学院・高等学院中学部の生徒及びその保護者と、早稲田大学高等学院のOBです。参加申込みは2026年10月29日（木）まで受け付けています。",audienceAction:"対象・申込みを見る",audienceStatus:"受付中",subscribed:a.jsxs(a.Fragment,{children:["登録完了しました",a.jsx("br",{}),"イベントの最新情報をお届けしますのでお楽しみに。"]}),newsletter:"イベントの最新情報や募集のお知らせをメールでお届けします。",emailLabel:"メールアドレス",emailPlaceholder:"メールアドレスを入力",subscribeAction:"登録する"},en:{sectionSubtitle:"Explore ways to take part in TEDxWUSHS Youth and receive the latest event updates.",optionsHeading:"Ways to Participate and Stay Updated",applicationsUpdate:"Speaker and organizing team applications for the 2026 event are now closed. Thank you to everyone who applied. Audience registration is now open.",teamDescription:"Recruitment for the 2026 organizing team has closed. Future opportunities will be announced on our website and social media.",teamAction:"View Recruitment Status",audienceDescription:"Audience registration is open through Thursday, October 29, 2026, to Senior High School and Junior High School students, their parents or guardians, and alumni of Waseda University Senior High School.",audienceAction:"View eligibility and registration",audienceStatus:"Registration Open",subscribed:a.jsxs(a.Fragment,{children:["You are subscribed.",a.jsx("br",{}),"We look forward to sharing the latest event updates with you."]}),newsletter:"Receive event updates and future application announcements by email.",emailLabel:"Email address",emailPlaceholder:"Enter your email address",subscribeAction:"Subscribe"}},m0=({hideHeader:e=!1})=>{const[t,n]=w.useState(!1),r=w.useRef(null),i=w.useRef(null),o=Ge(),{language:s}=ie(),l=OS[s];w.useEffect(()=>{var d;t&&((d=r.current)==null||d.focus())},[t]),w.useEffect(()=>()=>{i.current&&clearTimeout(i.current)},[]);const c=()=>{i.current&&clearTimeout(i.current),i.current=setTimeout(()=>n(!0),300)},u=[{title:"Join the Team",icon:a.jsx(Bo,{size:32,"aria-hidden":"true",focusable:"false"}),description:l.teamDescription,link:"/join-us/team",action:l.teamAction,status:"Recruitment Closed",closed:!0,color:"#fff"},{title:"Register as Audience",icon:a.jsx(s0,{size:32,"aria-hidden":"true",focusable:"false"}),description:l.audienceDescription,link:"/join-us/audience",action:l.audienceAction,status:l.audienceStatus,statusLanguage:s,color:"#fff"}];return a.jsxs("section",{id:"contact",className:"join-us section-padding",children:[a.jsxs("div",{className:"container",children:[e?a.jsx("h2",{className:"visually-hidden",children:l.optionsHeading}):a.jsxs(re.div,{className:"section-header",initial:o?!1:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[a.jsx("span",{className:"join-tagline",lang:"en",children:"Be part of the community"}),a.jsxs("h2",{className:"section-title",lang:"en",children:["Join ",a.jsx("span",{className:"highlight-red",children:"Us"})]}),a.jsx("p",{className:"section-subtitle",children:l.sectionSubtitle})]}),a.jsxs(re.div,{className:"recruitment-closed",initial:o?!1:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[a.jsx("strong",{lang:"en",children:"2026 Applications Update"}),a.jsx("p",{children:l.applicationsUpdate})]}),a.jsx("div",{className:"opportunities-grid",children:u.map((d,h)=>a.jsxs(re.div,{className:`opt-card${d.closed?" opt-card--closed":""}`,initial:o?!1:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:o?0:h*.1},children:[a.jsx("div",{className:"opt-icon",children:d.icon}),d.status&&a.jsx("span",{className:"opt-status",lang:d.statusLanguage??"en",children:d.status}),a.jsx("h3",{className:"opt-title",lang:"en",children:d.title}),a.jsx("p",{className:"opt-description",children:d.description}),a.jsxs(ae,{to:d.link,className:"opt-link",children:[d.action," ",a.jsx(rr,{size:16,"aria-hidden":"true",focusable:"false"})]})]},d.title))}),a.jsx(re.div,{className:"newsletter-box",initial:o?!1:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},children:a.jsxs("div",{className:"newsletter-content",children:[a.jsx("h3",{lang:"en",children:"Stay Updated"}),a.jsx("iframe",{title:"hidden_iframe",name:"hidden_iframe",id:"hidden_iframe",style:{display:"none"}}),t?a.jsx("div",{ref:r,className:"success-message",role:"status","aria-live":"polite","aria-atomic":"true",tabIndex:-1,children:a.jsx("p",{children:l.subscribed})}):a.jsxs("div",{children:[a.jsx("p",{id:"newsletter-description",children:l.newsletter}),a.jsxs("form",{className:"newsletter-form",action:"https://docs.google.com/forms/d/e/1FAIpQLScvnsbAaQFhyodG3GY4qXmTAj919BFivczNyE9bOt4Z_TxuWw/formResponse",method:"post",target:"hidden_iframe",onSubmit:c,children:[a.jsxs("div",{className:"newsletter-field",children:[a.jsx("label",{htmlFor:"newsletter-email",children:l.emailLabel}),a.jsx("input",{id:"newsletter-email",type:"email",name:"entry.269866944","aria-describedby":"newsletter-description",placeholder:l.emailPlaceholder,autoComplete:"email",inputMode:"email",required:!0})]}),a.jsx("button",{type:"submit",className:"btn-primary",children:l.subscribeAction})]})]})]})})]}),a.jsx("style",{children:`
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
      `})]})},US=()=>a.jsxs("main",{id:"main-content",tabIndex:-1,children:[a.jsx(TS,{}),a.jsx(DS,{}),a.jsx(PS,{}),a.jsx(f0,{}),a.jsx(VS,{}),a.jsx(m0,{})]}),FS="アイデアを発見し広める精神のもと、TEDxは、地域で自主的に運営されるイベントを通じて、人々がTEDのような体験を共有するためのプログラムです。TEDxイベントでは、TED Talksの映像とライブスピーカーが組み合わさり、深い議論とつながりを生み出します。これらの地域で自主運営されるイベントはTEDxと呼ばれ、xは independently organized TED event（独立して運営されるTEDイベント）を表します。TED ConferenceはTEDxプログラムに一般的な指針を提供しますが、各TEDxイベントは自主的に運営されています（所定のルールおよび規定に従います）。",WS="TEDは、対話を生み出し、理解を深め、意義ある変化を促すアイデアを発見し、議論し、広めることに取り組む、非営利・無党派の組織です。TEDは、特定の主張を掲げることなく、好奇心、理性、驚き、そして知識の探究に力を注いでいます。世界をより深く理解し、他者とのつながりを求める、あらゆる分野と文化の人々を歓迎します。そして、誰もがアイデアに触れ、それを自分たちのコミュニティで行動へと移すことを呼びかけています。",BS="TEDは1984年、Technology、Entertainment、Designが交わるカンファレンスとして始まりました。現在では、科学やビジネスから教育、芸術、世界規模の課題までを探究する、多様な世界的コミュニティと取り組みへと広がっています。毎年のカンファレンスで選ばれ、TED.comで公開されるTED Talksに加え、TEDはオリジナルポッドキャスト、短編映像シリーズ、アニメーション形式の教育コンテンツ（TED-Ed）、テレビ番組を制作しています。これらは100以上の言語に翻訳され、世界各地の提携先を通じて配信されています。毎年、数千件のTEDxイベントが独立して運営されています。",HS="Audacious Projectを通じて、TEDは、世界が直面する最も緊急な課題に大胆な解決策を示すプロジェクトへ66億ドルの資金提供が促されることに貢献してきました。より美しく、持続可能で、公正な世界を目指す取り組みです。2020年、TEDは、気候危機の解決を加速し、ネットゼロの未来に向けた運動を広げるCountdownを開始しました。2023年には、より活気があり公平な未来への現実的な道筋に焦点を当て、新しい対話を生み出すTED Democracyを開始しました。",$S=()=>{const{language:e}=ie(),t=e==="ja",n=Ge();return a.jsxs("main",{id:"main-content",tabIndex:-1,className:"about-page",children:[a.jsx("div",{className:"container section-padding",children:a.jsxs(re.div,{initial:n?!1:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:n?0:.8},children:[a.jsxs("section",{className:"about-section",children:[a.jsx("h1",{className:"page-title",children:t?a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"highlight-red brand-name",children:"TEDx"}),"について"]}):a.jsxs(a.Fragment,{children:["About ",a.jsx("span",{className:"highlight-red brand-name",children:"TEDx"})]})}),a.jsx("h2",{className:"sub-title brand-name",children:t?"TEDxについて — x = independently organized event（独立して運営されるイベント）":"TEDx, x = independently organized event"}),a.jsx("p",{children:t?FS:a.jsx(a.Fragment,{children:"In the spirit of discovering and spreading ideas, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)"})})]}),a.jsxs("section",{className:"about-section",children:[a.jsx("h2",{className:"section-title",children:t?a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"highlight-red",children:"TED"}),"について"]}):a.jsxs(a.Fragment,{children:["About ",a.jsx("span",{className:"highlight-red",children:"TED"})]})}),a.jsx("p",{children:t?WS:"TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and drive meaningful change. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community."}),t&&a.jsxs(a.Fragment,{children:[a.jsx("p",{children:BS}),a.jsx("p",{children:HS}),a.jsx("p",{children:a.jsx("a",{href:"https://www.ted.com/about/programs-initiatives",target:"_blank",rel:"noopener noreferrer",className:"highlight-link",children:"TEDのプログラムと取り組みの一覧を見る"})})]}),a.jsxs("p",{hidden:t,children:["TED began in 1984 as a conference where Technology, Entertainment and Design converged, but today it spans a multitude of worldwide communities and initiatives exploring everything from science and business to education, arts and global issues. In addition to the TED Talks curated from our annual conferences and published on TED.com, we produce original podcasts, short video series, animated educational lessons (TED-Ed) and TV programs that are translated into more than 100 languages and distributed via partnerships around the world. Each year, thousands of independently run TEDx events. Through the Audacious Project, TED has helped catalyze $6.6 billion in funding for projects that support bold solutions to the world's most urgent challenges — working to make the world more beautiful, sustainable and just. In 2020, TED launched Countdown, an initiative to accelerate solutions to the climate crisis and mobilize a movement for a net-zero future, and in 2023 TED launched TED Democracy to spark a new kind of conversation focused on realistic pathways towards a more vibrant and equitable future. ",a.jsx("a",{href:"https://www.ted.com/about/programs-initiatives",target:"_blank",rel:"noopener noreferrer",className:"highlight-link",children:"View a full list of TED’s many programs and initiatives."})]}),a.jsxs("div",{className:"ted-social",children:[a.jsx("p",{children:t?"TEDの公式アカウント":"Follow TED on:"}),a.jsxs("div",{className:"social-links",children:[a.jsx("a",{href:"https://www.facebook.com/TED",target:"_blank",rel:"noopener noreferrer","aria-label":"TED on Facebook",lang:"en",children:a.jsx(Kb,{size:24,"aria-hidden":"true"})}),a.jsx("a",{href:"https://www.instagram.com/ted",target:"_blank",rel:"noopener noreferrer","aria-label":"TED on Instagram",lang:"en",children:a.jsx(r0,{size:24,"aria-hidden":"true"})}),a.jsx("a",{href:"https://www.linkedin.com/company/ted-conferences",target:"_blank",rel:"noopener noreferrer","aria-label":"TED on LinkedIn",lang:"en",children:a.jsx(Qb,{size:24,"aria-hidden":"true"})}),a.jsx("a",{href:"https://twitter.com/TEDTalks",target:"_blank",rel:"noopener noreferrer","aria-label":"TED on X",lang:"en",children:a.jsx(a0,{size:24,"aria-hidden":"true"})}),a.jsx("a",{href:"https://www.tiktok.com/@tedtoks",target:"_blank",rel:"noopener noreferrer","aria-label":"TED on TikTok",lang:"en",children:a.jsx(iS,{size:24,"aria-hidden":"true"})})]})]})]})]})}),a.jsx("style",{children:`
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
            `})]})},YS=()=>a.jsx("main",{id:"main-content",tabIndex:-1,children:a.jsx(f0,{variant:"full"})}),ht={year2:{ja:"2年生",en:"Year 2"},year3:{ja:"3年生",en:"Year 3"},faculty:{ja:"教員",en:"Faculty"}},KS=[{id:"haruki-kawamata",name:"Haruki Kawamata",grade:ht.year3,role:{ja:"ボードメンバー・オーガナイザー",en:"Board Member / Organizer"}},{id:"takuya-saeki",name:"Takuya Saeki",grade:ht.faculty,role:{ja:"共同オーガナイザー",en:"Co-organizer"}},{id:"hironori-sakai",name:"Hironori Sakai",grade:ht.year2,role:{ja:"ボードメンバー・運営（リーダー）・スピーカーチーム",en:"Board Member / Operation (Leader) / Speaker Team"}},{id:"tatsuaki-matsuda",name:"Tatsuaki Matsuda",grade:ht.year3,role:{ja:"ボードメンバー・テクノロジー・運営・スピーカーチーム",en:"Board Member / Technology / Operation / Speaker Team"}},{id:"yasuhiro-nanjo",name:"Yasuhiro Nanjo",grade:ht.year2,role:{ja:"テクノロジー（リーダー）・広報・運営・マネジメント・スピーカーチーム",en:"Technology (Leader) / Marketing / Operation / Management / Speaker Team"}},{id:"lyu-noguchi",name:"Lyu Noguchi",grade:ht.year3,role:{ja:"スピーカーチーム（リーダー）",en:"Speaker Team (Leader)"}},{id:"yunosuke-sato",name:"Yunosuke Sato",grade:ht.year3,role:{ja:"マネジメント・財務（リーダー）",en:"Management / Finance (Leader)"}},{id:"taisei-moriwaki",name:"Taisei Moriwaki",grade:ht.year3,role:{ja:"広報（リーダー）・運営",en:"Marketing (Leader) / Operation"}},{id:"keisuke-horikoshi",name:"Keisuke Horikoshi",grade:ht.year2,role:{ja:"監査",en:"Audit"}}],GS=e=>e.trim().toLocaleLowerCase("en-US").replace(/(^|[\s'-])[a-z]/g,t=>t.toLocaleUpperCase("en-US")),Rh={ja:{eyebrow:"TEDxWUSHS Youth",year:"2026",fullTitle:"2026 Team",titleLead:"Our",titleAccent:"Team",memberList:"2026年チームメンバー一覧"},en:{eyebrow:"TEDxWUSHS Youth",year:"2026",fullTitle:"2026 Team",titleLead:"Our",titleAccent:"Team",memberList:"2026 team members"}},qS=()=>{const{language:e}=ie(),t=Ge(),n=Rh[e]??Rh.ja;return a.jsxs("main",{id:"main-content",className:"organizers-page",tabIndex:-1,children:[a.jsx("section",{className:"organizers-hero","aria-labelledby":"organizers-title",children:a.jsxs("div",{className:"container organizers-container",children:[a.jsxs(re.div,{className:"organizers-heading",initial:t?!1:{opacity:0,y:20},animate:{opacity:1,y:0},transition:t?{duration:0}:{duration:.55},children:[a.jsx("p",{className:"organizers-eyebrow brand-name",lang:"en",children:n.eyebrow}),a.jsxs("h1",{id:"organizers-title","aria-label":n.fullTitle,children:[a.jsx("span",{className:"organizers-year","aria-hidden":"true",children:n.year}),a.jsxs("span",{className:"organizers-title-text","aria-hidden":"true",children:[n.titleLead," ",a.jsx("span",{className:"highlight-red",children:n.titleAccent})]})]})]}),a.jsx("h2",{className:"visually-hidden",children:n.memberList}),a.jsx("ul",{className:"organizers-grid",children:KS.map((r,i)=>a.jsxs(re.li,{className:"organizer-card",initial:t?!1:{opacity:0,y:24},whileInView:t?void 0:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:t?{duration:0}:{duration:.4,delay:i*.06},children:[a.jsxs("div",{className:"organizer-identity",children:[a.jsx("h3",{className:"organizer-name",lang:"en",children:GS(r.name)}),a.jsx("span",{className:"organizer-grade",children:r.grade[e]??r.grade.ja})]}),a.jsxs("div",{className:"organizer-role-block",children:[a.jsx("span",{className:"organizer-role",lang:"en",children:r.role.en}),e==="ja"&&a.jsx("span",{className:"organizer-role-ja",children:r.role.ja})]})]},r.id))})]})}),a.jsx("style",{children:`
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
      `})]})},QS=()=>{const{language:e}=ie();return a.jsxs("main",{id:"main-content",tabIndex:-1,className:"join-us-page",children:[a.jsxs("header",{className:"join-us-page-heading container",children:[a.jsx("span",{lang:"en",children:"Be part of the community"}),a.jsxs("h1",{lang:"en",children:["Join ",a.jsx("span",{className:"highlight-red",children:"Us"})]}),a.jsx("p",{children:e==="ja"?"TEDxWUSHS Youthへの参加方法と最新情報をご案内します。":"Explore ways to take part in TEDxWUSHS Youth and receive the latest event updates."})]}),a.jsx(m0,{hideHeader:!0}),a.jsx("style",{children:`
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
            `})]})},Ih={ja:{steps:[{title:"Application",desc:"2026年開催分の応募受付は終了しました。"},{title:"Audition",desc:"運営チームとの面談で、アイデアを深掘りします。"},{title:"Curation",desc:"TEDxの基準に合わせて、スピーチを磨き上げます。"},{title:"The Stage",desc:"TEDxWUSHS Youthのステージで、世界へ発信！"}],lead:"2026年開催分のスピーカー募集は終了しました。",benefits:["世界中のTEDコミュニティにあなたのアイデアが届きます。","プロフェッショナルなコーチングでプレゼンスキルが向上します。","情熱的な仲間や観客との貴重な出会いがあります。"],closedMessage:"たくさんのご応募ありがとうございました。今後の募集については、ウェブサイトとSNSでお知らせします。"},en:{steps:[{title:"Application",desc:"Applications for the 2026 event have closed."},{title:"Audition",desc:"Explore your idea in depth during an interview with the organizing team."},{title:"Curation",desc:"Refine your talk in line with TEDx standards."},{title:"The Stage",desc:"Share your idea with the world from the TEDxWUSHS Youth stage!"}],lead:"Speaker applications for the 2026 event have closed.",benefits:["Share your idea with the global TED community.","Improve your presentation skills through professional coaching.","Connect with passionate peers and audience members."],closedMessage:"Thank you to everyone who applied. Future opportunities will be announced on this website and our social media channels."}},XS=()=>{const{language:e}=ie(),t=Ih[e]??Ih.ja;return a.jsxs("main",{id:"main-content",tabIndex:-1,className:"recruit-page",style:{paddingTop:"120px"},children:[a.jsxs("div",{className:"container",children:[a.jsxs(ae,{to:"/join-us",className:"back-link",children:[a.jsx(Qc,{size:16,"aria-hidden":"true"})," ",a.jsx("span",{lang:"en",children:"Back to Opportunities"})]}),a.jsxs("header",{className:"recruit-header",children:[a.jsx("div",{className:"icon-circle","aria-hidden":"true",children:a.jsx(o0,{size:48})}),a.jsxs("h1",{lang:"en",children:["Speaker ",a.jsx("span",{className:"highlight-red",children:"Applications"})]}),a.jsx("p",{className:"lead-text",children:t.lead})]}),a.jsxs("section",{className:"detail-section",children:[a.jsxs("h2",{lang:"en",children:["Why speak at ",a.jsx("span",{className:"brand-name",children:"TEDxWUSHS Youth"}),"?"]}),a.jsx("ul",{className:"benefits-grid",children:t.benefits.map(n=>a.jsxs("li",{className:"benefit-card",children:[a.jsx(Ub,{color:"var(--ted-red)",size:24,"aria-hidden":"true"}),a.jsx("p",{children:n})]},n))})]}),a.jsxs("section",{className:"process-section",children:[a.jsx("h2",{lang:"en",children:"Application Process"}),a.jsx("ol",{className:"steps-container",children:t.steps.map((n,r)=>a.jsxs("li",{className:"step-item",children:[a.jsx("div",{className:"step-num","aria-hidden":"true",children:r+1}),a.jsx("h3",{lang:"en",children:n.title}),a.jsx("p",{children:n.desc})]},n.title))})]}),a.jsxs("section",{className:"cta-box","aria-labelledby":"speaker-applications-status",children:[a.jsx("h2",{id:"speaker-applications-status",lang:"en",children:"Applications Closed"}),a.jsx("p",{children:t.closedMessage}),a.jsx("span",{className:"closed-label",lang:"en",children:"2026 Speaker Applications Closed"})]})]}),a.jsx("style",{children:`
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
      `})]})},Vh={ja:{departmentDescriptions:["イベントの全体企画、進行、会場設営などを担います。","SNSやWebサイトを通じた広報活動、ブランディングを担います。","スピーカーの選定、スピーチ構成のサポートを担います。","デザイン、映像制作、Web開発などを担います。"],lead:"2026年開催分の運営チーム募集は終了しました。たくさんのご応募ありがとうございました。",values:["アイデアを広めること、新しい価値を創ることに情熱を持っている方。","多様な視点を尊重し、チームで最高のパフォーマンスを発揮できる方。","自ら考え、行動し、変化を恐れずに挑戦し続けられる方。"],closedMessage:"次回の募集については、ウェブサイトと公式SNSでお知らせします。"},en:{departmentDescriptions:["Oversees overall event planning, program flow, venue setup, and related operations.","Handles promotion and branding through social media and the website.","Handles speaker selection and supports the development of talks.","Handles design, video production, web development, and related creative work."],lead:"Recruitment for the 2026 organizing team has closed. Thank you to everyone who applied.",values:["Passionate about sharing ideas and creating new value.","Respects diverse perspectives and brings out the best in the team through collaboration.","Thinks and acts independently, and continues to take on challenges without fearing change."],closedMessage:"Future recruitment opportunities will be announced on this website and our official social media channels."}},JS=()=>{const{language:e}=ie(),t=Vh[e]??Vh.ja,n=[{title:"Operations",icon:a.jsx(Bo,{size:32,"aria-hidden":"true"}),desc:t.departmentDescriptions[0]},{title:"Marketing",icon:a.jsx(sS,{size:32,"aria-hidden":"true"}),desc:t.departmentDescriptions[1]},{title:"Speaker",icon:a.jsx(o0,{size:32,"aria-hidden":"true"}),desc:t.departmentDescriptions[2]},{title:"Creative",icon:a.jsx(Hb,{size:32,"aria-hidden":"true"}),desc:t.departmentDescriptions[3]}];return a.jsxs("main",{id:"main-content",tabIndex:-1,className:"recruit-page",style:{paddingTop:"120px"},children:[a.jsxs("div",{className:"container",children:[a.jsxs(ae,{to:"/join-us",className:"back-link",children:[a.jsx(Qc,{size:16,"aria-hidden":"true"})," ",a.jsx("span",{lang:"en",children:"Back to Opportunities"})]}),a.jsxs("header",{className:"recruit-header",children:[a.jsx("div",{className:"icon-circle","aria-hidden":"true",children:a.jsx(Bo,{size:48})}),a.jsx("span",{className:"recruitment-status",lang:"en",children:"2026 Recruitment Closed"}),a.jsxs("h1",{lang:"en",children:["Join the ",a.jsx("span",{className:"highlight-red",children:"Team"})]}),a.jsx("p",{className:"lead-text",children:t.lead})]}),a.jsxs("section",{className:"detail-section",children:[a.jsx("h2",{lang:"en",children:"Departments"}),a.jsx("div",{className:"departments-grid",children:n.map((r,i)=>a.jsxs("div",{className:"dept-card",children:[a.jsx("div",{className:"dept-icon",children:r.icon}),a.jsx("h3",{lang:"en",children:r.title}),a.jsx("p",{children:r.desc})]},i))})]}),a.jsxs("section",{className:"why-join-section",children:[a.jsx("h2",{lang:"en",children:"What we look for"}),a.jsxs("div",{className:"values-grid",children:[a.jsxs("div",{className:"value-item",children:[a.jsx("h3",{lang:"en",children:"Passion"}),a.jsx("p",{children:t.values[0]})]}),a.jsxs("div",{className:"value-item",children:[a.jsx("h3",{lang:"en",children:"Collaboration"}),a.jsx("p",{children:t.values[1]})]}),a.jsxs("div",{className:"value-item",children:[a.jsx("h3",{lang:"en",children:"Proactive"}),a.jsx("p",{children:t.values[2]})]})]})]}),a.jsxs("section",{className:"cta-box","aria-labelledby":"team-recruitment-status-heading",children:[a.jsx("h2",{id:"team-recruitment-status-heading",lang:"en",children:"Recruitment Closed"}),a.jsx("p",{children:t.closedMessage}),a.jsx("span",{className:"closed-label",lang:"en",children:"2026 Team Recruitment Closed"})]})]}),a.jsx("style",{children:`
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
      `})]})},Oh={ja:{lead:"参加申込みを2026年10月29日（木）まで受け付けています。対象をご確認のうえ、申込フォームからお申し込みください。",eligibilityLabel:"Audience Eligibility / 参加対象",eligibilityTitle:"高等学院・中学部の生徒及びその保護者、高等学院OB",eligibilityDescription:"本イベントの会場参加は、上記の方を対象としています。対象をご確認のうえ、申込フォームからお申し込みください。",newsletterDescription:"ニュースレターに登録すると、イベントに関する最新情報をメールで受け取れます。",eventDescription:"2026年10月31日（土）14:00〜17:30頃、早稲田大学高等学院 講堂にて開催します（開場13:30）。",registrationTitle:"参加申込みについて",registrationDescription:"参加費は無料です。申込みは2026年10月29日（木）までに、Googleフォームへ必要事項を入力してお申し込みください。",registrationStatus:"受付中",registrationAction:"参加を申し込む",registrationNote:"申込み締切：2026年10月29日（木）。申込フォームは新しいタブで開きます。",audienceLabel:"対象",audienceValue:"高等学院・中学部の生徒及びその保護者、高等学院OB"},en:{lead:"Audience registration is open through Thursday, October 29, 2026. Please confirm your eligibility and apply using the registration form.",eligibilityLabel:"Audience Eligibility",eligibilityTitle:"Senior High School and Junior High School Students, Their Parents or Guardians, and Alumni",eligibilityDescription:"In-person attendance is limited to the group listed above. Please confirm your eligibility and apply using the registration form.",newsletterDescription:"Subscribe to receive the latest event updates by email.",eventDescription:"The event will be held on Saturday, October 31, 2026, from 2:00 p.m. to around 5:30 p.m. at the auditorium of Waseda University Senior High School (doors open at 1:30 p.m.).",registrationTitle:"Registration Information",registrationDescription:"Admission is free. Please complete the Google Form by Thursday, October 29, 2026, to apply to attend.",registrationStatus:"Registration Open",registrationAction:"Apply to attend",registrationNote:"Registration deadline: Thursday, October 29, 2026. The registration form opens in a new tab.",audienceLabel:"Eligible Attendees",audienceValue:"Senior High & Junior High Students, Parents/Guardians, and Alumni"}},ZS=()=>{const{language:e}=ie(),t=Oh[e]??Oh.ja;return a.jsxs("main",{id:"main-content",tabIndex:-1,className:"recruit-page",style:{paddingTop:"120px"},children:[a.jsxs("div",{className:"container",children:[a.jsxs(ae,{to:"/join-us",className:"back-link",children:[a.jsx(Qc,{size:16,"aria-hidden":"true"})," ",a.jsx("span",{lang:"en",children:"Back to Opportunities"})]}),a.jsxs("header",{className:"recruit-header",children:[a.jsx("div",{className:"icon-circle","aria-hidden":"true",children:a.jsx(s0,{size:48})}),a.jsxs("h1",{lang:"en",children:["Register as ",a.jsx("span",{className:"highlight-red",children:"Audience"})]}),a.jsx("p",{className:"lead-text",children:t.lead})]}),a.jsxs("section",{className:"eligibility-panel","aria-labelledby":"audience-eligibility-title",children:[a.jsx("div",{className:"eligibility-icon",children:a.jsx(Bo,{size:36,"aria-hidden":"true"})}),a.jsxs("div",{children:[a.jsx("span",{className:"eligibility-label",children:e==="ja"?a.jsxs(a.Fragment,{children:[a.jsx("span",{lang:"en",children:"Audience Eligibility"})," / 参加対象"]}):t.eligibilityLabel}),a.jsx("h2",{id:"audience-eligibility-title",children:t.eligibilityTitle}),a.jsx("p",{children:t.eligibilityDescription})]})]}),a.jsxs("div",{className:"audience-layout",children:[a.jsxs("div",{className:"info-side",children:[a.jsxs("section",{className:"info-block",children:[a.jsx("div",{className:"info-icon","aria-hidden":"true",children:a.jsx(Mb,{size:24})}),a.jsxs("div",{children:[a.jsx("h2",{lang:"en",children:"Be the First to Know"}),a.jsx("p",{children:t.newsletterDescription})]})]}),a.jsxs("section",{className:"info-block",children:[a.jsx("div",{className:"info-icon","aria-hidden":"true",children:a.jsx(Vb,{size:24})}),a.jsxs("div",{children:[a.jsx("h2",{lang:"en",children:"Upcoming Events"}),a.jsx("p",{children:t.eventDescription})]})]})]}),a.jsx("div",{className:"form-side",children:a.jsxs("section",{className:"registration-card","aria-labelledby":"registration-information-title",children:[a.jsx("span",{className:"registration-status",children:t.registrationStatus}),a.jsx("h2",{id:"registration-information-title",children:t.registrationTitle}),a.jsx("p",{children:t.registrationDescription}),a.jsxs("div",{className:"registration-audience",children:[a.jsx("span",{children:t.audienceLabel}),a.jsx("strong",{children:t.audienceValue})]}),a.jsxs("a",{className:"btn-primary-full",href:fn,target:"_blank",rel:"noopener noreferrer",children:[a.jsx("span",{children:t.registrationAction}),a.jsx(di,{size:18,strokeWidth:2.5,"aria-hidden":"true"})]}),a.jsx("p",{className:"form-note",children:t.registrationNote})]})})]})]}),a.jsx("style",{children:`
        .recruit-page { background: var(--ted-black); color: white; padding-bottom: 8rem; }
        .back-link { display: inline-flex; align-items: center; gap: 0.5rem; min-height: 44px; color: #aaa; font-weight: 600; margin-bottom: 3rem; }
        .back-link:hover { color: var(--ted-red); }
        .recruit-header { text-align: center; margin-bottom: 6rem; }
        .icon-circle { width: 100px; height: 100px; background: rgb(var(--ted-red-rgb) / 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 2rem; color: var(--ted-red); }
        .recruit-header h1 { font-size: clamp(2.4rem, 9vw, 3.5rem); margin-bottom: 1.5rem; text-wrap: balance; }
        .lead-text { font-size: 1.3rem; color: #aaa; max-width: 600px; margin: 0 auto; }

        .eligibility-panel { display: grid; grid-template-columns: auto 1fr; gap: 2rem; align-items: center; max-width: 980px; margin: -2rem auto 6rem; padding: 2.5rem 3rem; background: white; color: var(--ted-black); border-left: 8px solid var(--ted-red); border-radius: 16px; box-shadow: 0 24px 60px rgba(0,0,0,0.45); }
        .eligibility-icon { width: 72px; height: 72px; display: flex; align-items: center; justify-content: center; border-radius: 50%; background: rgb(var(--ted-red-rgb) / 0.1); color: var(--ted-red); }
        .eligibility-label { display: block; margin-bottom: 0.55rem; color: var(--ted-red); font-size: 0.72rem; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; }
        .eligibility-panel h2 { margin: 0 0 0.65rem; font-size: clamp(1.55rem, 3vw, 2.35rem); line-height: 1.35; text-align: left; }
        .eligibility-panel p { color: #555; line-height: 1.7; }

        .audience-layout { display: grid; grid-template-columns: 1fr 450px; gap: 4rem; align-items: start; margin-top: 4rem; }
        
        .info-block { display: flex; gap: 2rem; margin-bottom: 4rem; }
        .info-icon { width: 48px; height: 48px; min-width: 48px; background: #111; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--ted-red); border: 1px solid rgba(255,255,255,0.05); }
        .info-block h2 { font-size: 1.5rem; margin-bottom: 0.8rem; text-align: left; }
        .info-block p { color: #888; line-height: 1.7; }

        .registration-card { background: #111; padding: 3rem; border-radius: 20px; border: 1px solid rgba(255,255,255,0.05); box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
        .registration-card h2 { font-size: 1.8rem; margin-bottom: 0.5rem; }
        .registration-card p { color: #aaa; margin-bottom: 2.5rem; }

        .registration-status { display: inline-block; margin-bottom: 1rem; padding: 0.35rem 0.6rem; border-radius: 999px; background: var(--ted-black); color: var(--ted-red); font-size: 0.75rem; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; }
        .registration-audience { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 0.5rem 1rem; margin-bottom: 1rem; padding: 0.9rem 1rem; background: rgba(255,255,255,0.05); border-radius: 8px; }
        .registration-audience span { color: #888; font-size: 0.75rem; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; }
        .registration-audience strong { color: white; }
        .form-group { margin-bottom: 1.5rem; }
        .form-group label { display: block; font-size: 0.8rem; font-weight: 700; color: #888; text-transform: uppercase; margin-bottom: 0.5rem; }
        input, select { width: 100%; background: #222; border: 1px solid #333; padding: 1rem; border-radius: 8px; color: white; font-family: inherit; }
        .recruit-page input:focus, .recruit-page select:focus { border-color: var(--ted-red); }

        .btn-primary-full { 
          width: 100%; 
          background: var(--ted-red); 
          color: white; 
          min-height: 48px;
          padding: 1rem;
          border-radius: 8px; 
          font-weight: 800; 
          text-transform: uppercase; 
          margin-top: 1rem; 
          transition: var(--transition-smooth);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          text-decoration: none;
        }
        .btn-primary-full:hover { background: var(--ted-red); transform: translateY(-3px); box-shadow: 0 10px 20px rgb(var(--ted-red-rgb) / 0.3); }
        .btn-primary-full:focus-visible { outline: 3px solid #fff; outline-offset: 4px; }

        .registration-card .form-note {
          margin: 1rem 0 0;
          color: #aaa;
          font-size: 0.85rem;
          text-align: center;
        }

        @media (max-width: 1024px) {
          .audience-layout { grid-template-columns: 1fr; }
          .registration-card { order: -1; }
          .recruit-header h1 { font-size: 2.5rem; }
        }

        @media (max-width: 640px) {
          .eligibility-panel { grid-template-columns: 1fr; gap: 1.25rem; margin-top: -2.5rem; padding: 2rem 1.5rem; text-align: center; }
          .eligibility-icon { margin: 0 auto; }
          .eligibility-panel h2 { text-align: center; }
          .registration-card { padding: 2rem 1.25rem; }
          .registration-audience { align-items: flex-start; flex-direction: column; }
          .registration-audience strong { overflow-wrap: anywhere; text-align: left; }
        }

        @media (prefers-reduced-motion: reduce) {
          .btn-primary-full { transition: none; }
          .btn-primary-full:hover { transform: none; }
        }
      `})]})},Uh={ja:[{question:"TEDxWUSHS Youthとは何ですか？",answer:"早稲田大学高等学院の生徒が独立して企画・運営するTEDxイベントです。『Ideas change everything.（アイデアは世界を変える）』という考えのもと、対話と変化につながるアイデアを若者の視点から届けます。"},{question:"参加対象者を教えてください。",answer:"参加対象者は、早稲田大学高等学院の生徒（学院生）及びその保護者、高等学院中学部の生徒及びその保護者、早稲田大学高等学院のOBです。参加申込みは2026年10月29日（木）まで受け付けています。対象をご確認のうえ、「Join Us」のAudience Registrationページからお申し込みください。"},{question:"イベントでは何語が使用されますか？",answer:"日本語と英語のバイリンガルイベントを予定しています。日本語・英語のどちらで行われるトークにも、スライド上に字幕を付ける予定です。"},{question:"参加費はかかりますか？",answer:"参加費は無料です。"},{question:"ボランティアとして参加したいのですが、どうすればいいですか？",answer:"2026年開催分の運営チーム募集は終了しました。今後の募集はウェブサイトの『Join Us』ページと公式SNSでお知らせします。"}],en:[{question:"What is TEDxWUSHS Youth?",answer:"TEDxWUSHS Youth is an independently organized TEDx event planned and run by students of Waseda University Senior High School. We believe that “Ideas change everything.” From a youth perspective, we share ideas that can spark dialogue and change."},{question:"Who can attend?",answer:"The event is open to Senior High School and Junior High School students, their parents or guardians, and alumni of Waseda University Senior High School. Registration is open through Thursday, October 29, 2026. Please confirm your eligibility and apply from the Audience Registration page under Join Us."},{question:"What languages will be used at the event?",answer:"The event is planned to be bilingual in Japanese and English. For both Japanese- and English-language talks, we plan to display subtitles on the presentation slides."},{question:"Is there an admission fee?",answer:"The event is free to attend."},{question:"How can I participate as a volunteer?",answer:"Recruitment for the 2026 organizing team has closed. Future opportunities will be announced on the Join Us page and our official social media channels."}]},ej={ja:"質問と回答",en:"Questions and Answers"},tj=({question:e,answer:t,id:n})=>{const[r,i]=w.useState(!1),o=Ge(),s=`${n}-question`,l=`${n}-answer`;return a.jsxs("div",{className:"faq-item",children:[a.jsx("h3",{className:"faq-question-heading",children:a.jsxs("button",{id:s,type:"button",className:"faq-question",onClick:()=>i(!r),"aria-expanded":r,"aria-controls":l,children:[a.jsx("span",{children:e}),a.jsx("span",{className:`icon ${r?"open":""}`,"aria-hidden":"true",children:"+"})]})}),a.jsx(Bg,{children:r&&a.jsx(re.div,{className:"faq-answer",id:l,role:"region","aria-labelledby":s,initial:o?!1:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:o?0:.3},children:a.jsx("p",{children:t})})})]})},nj=({hideHeader:e=!1})=>{const{language:t}=ie(),n=Uh[t]??Uh.ja;return a.jsxs("section",{id:"faq",className:"faq section-padding","aria-labelledby":"faq-list-heading",children:[a.jsxs("div",{className:"container",children:[e?a.jsx("h2",{id:"faq-list-heading",className:"visually-hidden",children:ej[t]}):a.jsx("div",{className:"section-header",children:a.jsxs("h2",{id:"faq-list-heading",className:"section-title",lang:"en",children:["Frequently Asked ",a.jsx("span",{className:"highlight-red",children:"Questions"})]})}),a.jsx("div",{className:"faq-list",children:n.map((r,i)=>{const o=`faq-${t}-${i+1}`;return a.jsx(tj,{id:o,...r},o)})})]}),a.jsx("style",{children:`
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
      `})]})},rj=()=>{const e=Ge();return a.jsxs("main",{id:"main-content",tabIndex:-1,className:"faq-page",children:[a.jsx("header",{className:"faq-page-heading container",children:a.jsxs("h1",{lang:"en",children:["Frequently Asked ",a.jsx("span",{className:"highlight-red",children:"Questions"})]})}),a.jsx(re.div,{initial:e?!1:{opacity:0},animate:{opacity:1},transition:{duration:e?0:.8},children:a.jsx(nj,{hideHeader:!0})}),a.jsx("style",{children:`
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
            `})]})},Fh={ja:{title:"ページが見つかりません",description:"指定されたページは移動または削除された可能性があります。",action:"ホームへ戻る"},en:{title:"Page Not Found",description:"The page may have been moved or removed.",action:"Return Home"}},ij=()=>{const{language:e}=ie(),t=Fh[e]??Fh.ja;return a.jsxs("main",{id:"main-content",tabIndex:-1,className:"not-found-page",children:[a.jsxs("div",{className:"container not-found-page__content",children:[a.jsx("p",{className:"not-found-page__code","aria-hidden":"true",children:"404"}),a.jsx("h1",{children:t.title}),a.jsx("p",{children:t.description}),a.jsx(ae,{to:"/",className:"not-found-page__link",children:t.action})]}),a.jsx("style",{children:`
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
      `})]})},Wh={ja:{intro:"開催概要、登壇者、当日のタイムテーブルを一つのページにまとめました。",themeLabel:"Program theme",themeDescription:"予測できない変化を前に、常識の枠を越えて新しい方向を切り拓くアイデアを共有します。",detailsLabel:"プログラム概要",details:[{label:"開催日",value:"2026年10月31日（土）"},{label:"時間",value:"開場 13:30／開会 14:00／終了 17:30頃"},{label:"会場",value:"早稲田大学高等学院 講堂"},{label:"参加対象",value:"早稲田大学高等学院・高等学院中学部の生徒及びその保護者、早稲田大学高等学院のOB"},{label:"参加費",value:"無料"},{label:"言語",value:"日本語・英語（スライド字幕対応予定）"}],applyAction:"参加を申し込む",applyNote:"申込みは2026年10月29日（木）まで。Googleフォームが新しいタブで開きます。",scheduleAction:"タイムテーブルを見る",speakerTitle:"Speaker Lineup",speakerDescription:"TEDxWUSHS Youth 2026に登壇する7名です。詳しい紹介文はSpeakersページでご覧いただけます。",speakerAction:"スピーカー詳細を見る",scheduleTitle:"Program Schedule",scheduleDescription:"各Speechに登壇者名を記載しています。時間は前後する可能性があります。",scheduleLabel:"TEDxWUSHS Youth 2026 当日タイムテーブル",contactEyebrow:"Contact",contactTitle:"お問い合わせ",contactDescription:"イベント参加のお申し込みや参加方法、当日の運営についてのご質問は、イベント事務局までご連絡ください。",contactEmailLabel:"イベント事務局へメールする"},en:{intro:"Find the program essentials, speaker lineup, and full schedule in one place.",themeLabel:"Program theme",themeDescription:"Ideas that break beyond familiar boundaries and open new directions in an unpredictable world.",detailsLabel:"Program details",details:[{label:"Date",value:"Saturday, October 31, 2026"},{label:"Time",value:"Doors open 1:30 PM / Opening 2:00 PM / Ends around 5:30 PM"},{label:"Venue",value:"Waseda University Senior High School Auditorium"},{label:"Audience",value:"Senior High School and Junior High School students, their parents or guardians, and alumni of Waseda University Senior High School"},{label:"Admission",value:"Free"},{label:"Languages",value:"Japanese and English, with slide subtitles planned"}],applyAction:"Apply to attend",applyNote:"Apply by Thursday, October 29, 2026. The Google Form opens in a new tab.",scheduleAction:"View the schedule",speakerTitle:"Speaker Lineup",speakerDescription:"Meet the seven speakers joining TEDxWUSHS Youth 2026. Full profiles are available on the Speakers page.",speakerAction:"View speaker profiles",scheduleTitle:"Program Schedule",scheduleDescription:"Each speech lists its scheduled speaker. Times are subject to minor changes.",scheduleLabel:"TEDxWUSHS Youth 2026 program schedule",contactEyebrow:"Contact",contactTitle:"Questions about the event?",contactDescription:"For questions about event registration, attending the event, or event-day operations, please contact the TEDxWUSHS Youth team.",contactEmailLabel:"Email the event team"}},oj=()=>{const{language:e}=ie(),t=Wh[e]??Wh.ja,n=[...h0].filter(i=>i.published).sort((i,o)=>i.displayOrder-o.displayOrder),r=d0(n);return a.jsxs("main",{id:"main-content",tabIndex:-1,className:"event-page",children:[a.jsx("section",{className:"event-hero","aria-labelledby":"event-page-title",children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"event-hero__layout",children:[a.jsxs("header",{className:"event-hero__header",children:[a.jsx("p",{className:"event-eyebrow",lang:"en",children:"TEDxWUSHS Youth 2026"}),a.jsxs("h1",{id:"event-page-title",className:"event-hero__title",lang:"en",children:["Program ",a.jsx("span",{children:"Information"})]}),a.jsx("p",{className:"event-hero__intro",children:t.intro}),a.jsxs("div",{className:"event-hero__actions",children:[a.jsxs("a",{className:"event-button event-button--primary",href:fn,target:"_blank",rel:"noopener noreferrer","aria-label":`${t.applyAction} — ${t.applyNote}`,children:[t.applyAction,a.jsx(di,{size:18,strokeWidth:2.5,"aria-hidden":"true"})]}),a.jsxs("a",{className:"event-button event-button--secondary",href:"#event-schedule",children:[t.scheduleAction,a.jsx(rr,{size:18,strokeWidth:2.5,"aria-hidden":"true"})]})]}),a.jsx("p",{className:"event-hero__note",children:t.applyNote})]}),a.jsxs("aside",{className:"event-theme","aria-labelledby":"event-theme-heading",children:[a.jsx("p",{id:"event-theme-heading",className:"event-theme__label",lang:"en",children:t.themeLabel}),a.jsx("p",{className:"event-theme__name",lang:"en",children:"Breakshot"}),a.jsx("p",{className:"event-theme__description",children:t.themeDescription}),a.jsx("p",{className:"event-theme__statement",lang:"en",children:"Ideas change everything."})]})]}),a.jsx("dl",{className:"event-facts","aria-label":t.detailsLabel,children:t.details.map(i=>a.jsxs("div",{className:"event-facts__item",children:[a.jsx("dt",{children:i.label}),a.jsx("dd",{children:i.value})]},i.label))})]})}),a.jsx("section",{className:"event-section event-speakers","aria-labelledby":"event-speakers-title",children:a.jsxs("div",{className:"container",children:[a.jsxs("header",{className:"event-section__header",children:[a.jsx("p",{className:"event-eyebrow",lang:"en",children:"Meet the speakers"}),a.jsx("h2",{id:"event-speakers-title",lang:"en",children:t.speakerTitle}),a.jsx("p",{children:t.speakerDescription})]}),a.jsx("div",{className:"event-speakers__list",children:r.map((i,o)=>a.jsx("ul",{className:"event-speakers__row",children:i.map(s=>a.jsxs("li",{className:"event-speaker",children:[a.jsx("img",{src:s.image,alt:"",loading:"lazy",decoding:"async",style:{"--event-speaker-position":s.imagePosition}}),a.jsxs("div",{children:[a.jsx("h3",{children:s.name[e]??s.name.ja}),a.jsx("p",{children:s.role[e]??s.role.ja})]})]},s.id))},`event-speaker-row-${o+1}`))}),a.jsxs(ae,{className:"event-text-link",to:"/speakers",children:[t.speakerAction,a.jsx(rr,{size:18,strokeWidth:2.5,"aria-hidden":"true"})]})]})}),a.jsx("section",{id:"event-schedule",className:"event-section event-schedule","aria-labelledby":"event-schedule-title",children:a.jsxs("div",{className:"container",children:[a.jsxs("header",{className:"event-section__header",children:[a.jsx("p",{className:"event-eyebrow",lang:"en",children:"October 31, 2026"}),a.jsx("h2",{id:"event-schedule-title",lang:"en",children:t.scheduleTitle}),a.jsx("p",{children:t.scheduleDescription})]}),a.jsx("ol",{className:"event-schedule__list","aria-label":t.scheduleLabel,children:p0.map(i=>a.jsxs("li",{className:"event-schedule__item",children:[a.jsx("time",{children:e==="en"&&i.timeEn?i.timeEn:i.time}),a.jsxs("div",{children:[a.jsx("h3",{lang:"en",children:i.event}),a.jsx("p",{children:i.description[e]??i.description.ja})]})]},`${i.time}-${i.event}`))})]})}),a.jsx("section",{className:"event-section event-contact","aria-labelledby":"event-contact-title",children:a.jsxs("div",{className:"container event-contact__layout",children:[a.jsx(i0,{size:34,strokeWidth:1.8,"aria-hidden":"true"}),a.jsxs("div",{children:[a.jsx("p",{className:"event-eyebrow",lang:"en",children:t.contactEyebrow}),a.jsx("h2",{id:"event-contact-title",children:t.contactTitle}),a.jsx("p",{children:t.contactDescription}),a.jsx("a",{href:"mailto:tedxwushs@gmail.com","aria-label":t.contactEmailLabel,children:"tedxwushs@gmail.com"})]})]})}),a.jsx("style",{children:`
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
      `})]})},sj="/assets/school-fest-2026-booth-D78qCxP1.jpg",Bh={ja:{eyebrow:"Gakuinsai 2026 / Feature",title:"学院祭で英語ディベートを開催",lead:"TEDxWUSHS Youthは学院祭期間中、頌栄女子学院高等学校、慶應義塾高等学校、早稲田大学本庄高等学院の3校を招き、社会や日常に関わる問いを英語で議論しました。競技として勝敗を決めながら、アイデアを問い直し、より深く理解する場を目指した企画です。",meta:"2026年10月10日・11日／早稲田大学高等学院 ゼミ室2",boothAlt:"学院祭のTEDxWUSHS Youth展示会場。黒板のロゴとBreakshotを表現したビリヤード台が設置されている。",boothCaption:"雄弁部と共同で使用したゼミ室2の展示会場。ビリヤード台は、TEDxWUSHS Youth 2026のテーマ「Breakshot」を表現しています。",contentsLabel:"この記事の内容",chapters:[{number:"01",href:"#overview",title:"学院祭で英語ディベートを開催",description:"開催概要・対戦校・試合結果"},{number:"02",href:"#about-tedx",title:"TED/TEDxとは",description:"TEDの使命と、地域からアイデアを広めるTEDx"},{number:"03",href:"#why-debate",title:"TED/TEDxがディベートを行う理由",description:"Debateの理念と、今回の工夫"}],overview:{number:"01",eyebrow:"Event report",title:"学院祭で英語ディベートを開催",intro:"10月10日と11日の2日間、TEDxWUSHS Youthは雄弁部と共同でゼミ室2を使用し、団体紹介と哲学的英語ディベートを実施しました。頌栄女子学院高等学校、慶應義塾高等学校、早稲田大学本庄高等学院ESSを迎え、3つの論題について議論しました。",detailsLabel:"開催概要",details:[{term:"開催日",description:"2026年10月10日（土）・11日（日）"},{term:"会場",description:"早稲田大学高等学院 ゼミ室2"},{term:"実施内容",description:"団体紹介・哲学的英語ディベート"},{term:"共同展示",description:"早稲田大学高等学院 雄弁部"}],matchesLabel:"対戦記録",dateLabel:"日時",opponentLabel:"対戦校",motionLabel:"論題",positionLabel:"両校の立場",resultLabel:"結果",leafletAlt:"TEDxWUSHS Youth学院祭企画「English Debate」の案内チラシ",leafletCaption:"学院祭で配布・掲示したEnglish Debateの案内チラシ。"},aboutTedx:{number:"02",eyebrow:"TED and TEDx",title:"TED/TEDxとは",intro:"TEDとは、1984年にアメリカで始まったカンファレンスに端を発する非営利組織です。最初のカンファレンスは、カリフォルニア州モントレーで開催されました。",acronymLead:"TEDという名称は、次の3つの言葉に由来します。",acronym:[{initial:"T",term:"Technology",translation:"テクノロジー"},{initial:"E",term:"Entertainment",translation:"エンターテインメント"},{initial:"D",term:"Design",translation:"デザイン"}],body:"技術・エンターテインメント・デザインという3領域を結び付ける場として始まり、現在では分野を越えて、世界をより深く理解するきっかけとなるアイデアを届けています。",tedxBody:"TEDxは、TEDの精神を地域のコミュニティへ届けるための草の根の取り組みです。TEDから付与された無償ライセンスのもと、各地域のチームが独立して企画・運営し、その地域から生まれるアイデアや対話を広げます。TEDxWUSHS Youthも、その一つです。",quote:"Ideas change everything.",quoteTranslation:"アイデアは世界を変える",dialogueTitle:"アイデアが、対話と変化につながるまで",dialogue:["ここで重要なのは、TEDが優れた知識や面白いアイデアを一方的に発信することだけを目指しているわけではないという点です。","スピーカーが届けたアイデアをきっかけに、オーディエンス層に応じてスピーカー/オーディエンスの間に深い交流と対話が生まれる。そして、そのアイデアが実際のオーディエンスのアクションにつながっていく。TEDが重視するのは、そうしたアイデアの可能性です。"],watchTitle:"実際のTED/TEDxを見てみる",watchIntro:"まだイメージが湧かない方は、実際のTED TalkとTEDx Talkをご覧ください。",watchOnYouTube:"YouTubeで見る",videos:[{label:"TED Talk / 日本語字幕",title:"ジュリアン・トレジャー：人を惹きつける話し方",embedUrl:"https://www.youtube-nocookie.com/embed/eIho2S0ZahI?cc_load_policy=1&cc_lang_pref=ja&hl=ja&origin=https%3A%2F%2Fwww.tedxwushs.com&rel=0",youtubeUrl:"https://www.youtube.com/watch?v=eIho2S0ZahI"},{label:"TEDxSapporo",title:"思うは招く｜植松 努",embedUrl:"https://www.youtube-nocookie.com/embed/gBumdOWWMhY?origin=https%3A%2F%2Fwww.tedxwushs.com&rel=0",youtubeUrl:"https://www.youtube.com/watch?v=gBumdOWWMhY"}]},whyDebate:{number:"03",eyebrow:"Debate and dialogue",title:"TED/TEDxがディベートを行う理由",intro:"ここで、今回の英語ディベート企画とTEDの関係に戻りましょう。TEDは公式のCuration Guidelinesで、「Debate（討論）」を価値の一つとして明確に掲げています。",body:"TEDの精神の中にあるDebateは、一般的な競技英語ディベートのように、勝敗や最終的な結論だけを求めるものではありません。TEDは懐疑的な視点や批判的な検討を歓迎し、それらをアイデアの改善や、見落としていた課題の発見につなげます。同時に、相互尊重を前提とし、差別やヘイトスピーチを認めていません。今回の企画でも、ディベート参加者をアイデアを届ける話者として捉えると同時に、オーディエンスの立場を踏まえたうえでの議論を意識し、扱うアイデアに深みを与えることを重視しました。そして、特にDebateの中でも質問時間を設け、オーディエンスを取り込んだ議論にすることができました。また、異なる前提から議論が始まり、主張が十分に噛み合わない場面もありましたが、それ含めオーディエンスに新しい発見をもたらすことができ有意義な会になったと思います。",practiceTitle:"今回の工夫",practices:["立論と反論は英語で行い、論点を言葉にして明確にする。","試合中に質問時間を設け、状況に応じて日本語での質問も受け付ける。"]},programAction:"TEDxWUSHS Youth 2026のプログラムを見る",references:{eyebrow:"Sources",title:"参考資料",description:"TED/TEDxおよびDebateに関する記述は、以下のTED公式資料を参照しています。",items:[{title:"TED — About",description:"TEDの使命と活動について",href:"https://www.ted.com/about"},{title:"History of TED",description:"1984年の創設とカンファレンスの歩みについて",href:"https://www.ted.com/about/our-organization/history-of-ted"},{title:"TED Conferences",description:"Technology・Entertainment・Designという名称の由来について",href:"https://www.ted.com/about/conferences"},{title:"TEDx Program",description:"TEDxの仕組みと地域コミュニティでの役割について",href:"https://www.ted.com/tedx"},{title:"TED’s Curation Guidelines",description:"Debate、相互尊重、ヘイトスピーチに関する方針",href:"https://www.ted.com/about/our-organization/how-ted-works/ted-s-curation-guidelines"}]}},en:{eyebrow:"Gakuinsai 2026 / Feature",title:"English debates at Gakuinsai 2026",lead:"During Gakuinsai, TEDxWUSHS Youth welcomed Shoei Girls’ Senior High School, Keio Senior High School, and Waseda University Honjo Senior High School for English debates on questions connected to society and everyday life. The event kept the competitive format while creating space to re-examine ideas and understand them more deeply.",meta:"October 10–11, 2026 / Seminar Room 2, Waseda University Senior High School",boothAlt:"The TEDxWUSHS Youth exhibition at Gakuinsai, with a logo on the blackboard and a billiards table representing Breakshot.",boothCaption:"The exhibition space shared with the school debate club. The billiards table represented “Breakshot,” the theme of TEDxWUSHS Youth 2026.",contentsLabel:"In this feature",chapters:[{number:"01",href:"#overview",title:"English debates at Gakuinsai",description:"Event details, participating schools, and results"},{number:"02",href:"#about-tedx",title:"What are TED and TEDx?",description:"TED’s mission and how TEDx carries ideas into local communities"},{number:"03",href:"#why-debate",title:"Why TED/TEDx engages in debate",description:"The idea of Debate and what we tried"}],overview:{number:"01",eyebrow:"Event report",title:"English debates at Gakuinsai",intro:"On October 10 and 11, TEDxWUSHS Youth shared Seminar Room 2 with the school debate club for an introduction to our activities and three philosophical English debates. We welcomed Shoei Girls’ Senior High School, Keio Senior High School, and Waseda University Honjo Senior High School ESS.",detailsLabel:"Event details",details:[{term:"Dates",description:"Saturday, October 10 and Sunday, October 11, 2026"},{term:"Venue",description:"Seminar Room 2, Waseda University Senior High School"},{term:"Program",description:"Organization showcase and philosophical English debates"},{term:"Shared with",description:"Waseda University Senior High School Debate Club"}],matchesLabel:"Debate record",dateLabel:"Date and time",opponentLabel:"Opponent",motionLabel:"Motion",positionLabel:"Positions",resultLabel:"Result",leafletAlt:"Flyer for the TEDxWUSHS Youth English Debate program at Gakuinsai 2026",leafletCaption:"The English Debate flyer displayed and distributed at Gakuinsai."},aboutTedx:{number:"02",eyebrow:"TED and TEDx",title:"What are TED and TEDx?",intro:"TED is a nonprofit organization that traces its roots to a conference first held in the United States in 1984. The first conference took place in Monterey, California.",acronymLead:"The name TED comes from three words:",acronym:[{initial:"T",term:"Technology",translation:"Technology"},{initial:"E",term:"Entertainment",translation:"Entertainment"},{initial:"D",term:"Design",translation:"Design"}],body:"TED began by bringing together technology, entertainment, and design. Today, its work reaches across disciplines to share ideas that help people understand the world more deeply.",tedxBody:"TEDx is a grassroots initiative that brings the spirit of TED to local communities. Under a free license granted by TED, local teams independently organize events that uncover ideas and create conversation in their communities. TEDxWUSHS Youth is one of those independently organized events.",quote:"Ideas change everything.",quoteTranslation:"アイデアは世界を変える",dialogueTitle:"From an idea to dialogue and change",dialogue:["What matters is that TED is not simply about broadcasting excellent knowledge or interesting ideas in one direction.","An idea shared by a speaker can create deep exchange and dialogue between speakers and audience members in ways that reflect the audience’s background. The idea can then lead to real action by the audience. TED places value on this wider potential of ideas."],watchTitle:"Watch TED and TEDx in action",watchIntro:"If the distinction still feels abstract, these TED and TEDx Talks offer two concrete examples.",watchOnYouTube:"Watch on YouTube",videos:[{label:"TED Talk / Japanese subtitles",title:"How to speak so that people want to listen | Julian Treasure",embedUrl:"https://www.youtube-nocookie.com/embed/eIho2S0ZahI?cc_load_policy=1&cc_lang_pref=ja&hl=ja&origin=https%3A%2F%2Fwww.tedxwushs.com&rel=0",youtubeUrl:"https://www.youtube.com/watch?v=eIho2S0ZahI"},{label:"TEDxSapporo",title:"Hope invites | Tsutomu Uematsu",embedUrl:"https://www.youtube-nocookie.com/embed/gBumdOWWMhY?origin=https%3A%2F%2Fwww.tedxwushs.com&rel=0",youtubeUrl:"https://www.youtube.com/watch?v=gBumdOWWMhY"}]},whyDebate:{number:"03",eyebrow:"Debate and dialogue",title:"Why TED/TEDx engages in debate",intro:"Returning to the relationship between this English debate project and TED, TED explicitly identifies “Debate” as one of its values in its official Curation Guidelines.",body:"Debate within the spirit of TED differs from conventional competitive English debate focused only on a winner or a final conclusion. TED welcomes skepticism and critical examination as ways to improve an idea or reveal its flaws, while requiring mutual respect and rejecting bigotry and hate speech. In this project, we treated each participant as a speaker carrying an idea while also shaping the discussion around the audience’s perspective, so that the ideas being examined could gain greater depth. In particular, we included question time to bring the audience directly into the discussion. At times, arguments began from different assumptions and did not fully meet; even those moments offered the audience new discoveries and helped make the event meaningful.",practiceTitle:"What we tried",practices:["Cases and rebuttals were delivered in English to make each line of reasoning explicit.","Question time was built into the matches, with Japanese questions accepted when appropriate."]},programAction:"View the TEDxWUSHS Youth 2026 program",references:{eyebrow:"Sources",title:"References",description:"Our descriptions of TED, TEDx, and Debate draw on the following official TED sources.",items:[{title:"TED — About",description:"TED’s mission and work",href:"https://www.ted.com/about"},{title:"History of TED",description:"TED’s origins in 1984 and the history of its conference",href:"https://www.ted.com/about/our-organization/history-of-ted"},{title:"TED Conferences",description:"The origin of the name Technology, Entertainment, and Design",href:"https://www.ted.com/about/conferences"},{title:"TEDx Program",description:"How TEDx works in local communities",href:"https://www.ted.com/tedx"},{title:"TED’s Curation Guidelines",description:"Guidance on debate, mutual respect, and hate speech",href:"https://www.ted.com/about/our-organization/how-ted-works/ted-s-curation-guidelines"}]}}},aj=[{date:{ja:"10月10日（土）12:00–13:00",en:"Saturday, October 10 / 12:00–1:00 PM"},opponent:{ja:"頌栄女子学院高等学校",en:"Shoei Girls’ Senior High School"},motionJa:"日本はボランティア（社会奉仕）活動を高校卒業の要件とするべきである。",motionEn:"Japan should make community service a requirement for high school graduation.",positions:[{school:{ja:"頌栄女子学院高等学校",en:"Shoei Girls’ Senior High School"},stance:{ja:"ボランティア活動の必修化に肯定",en:"Supports requiring volunteer service for graduation"}},{school:{ja:"早稲田大学高等学院",en:"Waseda University Senior High School"},stance:{ja:"ボランティア活動の必修化に否定",en:"Opposes requiring volunteer service for graduation"}}],result:{ja:"頌栄女子学院高等学校の勝利",en:"Shoei Girls’ Senior High School won"}},{date:{ja:"10月11日（日）11:30–12:30",en:"Sunday, October 11 / 11:30 AM–12:30 PM"},opponent:{ja:"慶應義塾高等学校",en:"Keio Senior High School"},motionJa:"日本は高所得者に対する所得税を引き上げるべきである。",motionEn:"Japan should significantly increase income taxes on high-income earners.",positions:[{school:{ja:"慶應義塾高等学校",en:"Keio Senior High School"},stance:{ja:"高所得者への所得税引き上げに賛成",en:"Supports raising income taxes on high-income earners"}},{school:{ja:"早稲田大学高等学院",en:"Waseda University Senior High School"},stance:{ja:"高所得者への所得税引き上げに反対",en:"Opposes raising income taxes on high-income earners"}}],result:{ja:"慶應義塾高等学校の勝利",en:"Keio Senior High School won"}},{date:{ja:"10月11日（日）14:00–15:00",en:"Sunday, October 11 / 2:00–3:00 PM"},opponent:{ja:"早稲田大学本庄高等学院 ESS",en:"Waseda University Honjo Senior High School ESS"},motionJa:"恋愛より友情を優先すべきである。",motionEn:"This House believes that friendship is more important than romantic relationships.",positions:[{school:{ja:"早稲田大学本庄高等学院 ESS",en:"Waseda University Honjo Senior High School ESS"},stance:{ja:"恋愛関係を重視する立場",en:"Prioritizes romantic relationships"}},{school:{ja:"早稲田大学高等学院",en:"Waseda University Senior High School"},stance:{ja:"友情を重視する立場",en:"Prioritizes friendship"}}],result:{ja:"早稲田大学高等学院の勝利",en:"Waseda University Senior High School won"}}],lj=()=>{const{language:e}=ie(),t=Bh[e]??Bh.ja;return a.jsxs("main",{id:"main-content",tabIndex:-1,className:"school-fest-page",children:[a.jsxs("article",{children:[a.jsx("header",{className:"school-fest-hero",children:a.jsxs("div",{className:"container school-fest-hero__layout",children:[a.jsxs("div",{className:"school-fest-hero__copy",children:[a.jsx("p",{className:"school-fest-eyebrow",lang:"en",children:t.eyebrow}),a.jsx("h1",{children:t.title}),a.jsx("p",{className:"school-fest-hero__lead",children:t.lead}),a.jsx("p",{className:"school-fest-hero__meta",children:t.meta})]}),a.jsxs("figure",{className:"school-fest-hero__media",children:[a.jsx("img",{src:sj,alt:t.boothAlt}),a.jsx("figcaption",{children:t.boothCaption})]})]})}),a.jsx("nav",{className:"school-fest-contents","aria-label":t.contentsLabel,children:a.jsxs("div",{className:"container",children:[a.jsx("p",{className:"school-fest-contents__label",children:t.contentsLabel}),a.jsx("ol",{children:t.chapters.map(n=>a.jsx("li",{children:a.jsxs("a",{href:n.href,children:[a.jsx("span",{className:"school-fest-contents__number","aria-hidden":"true",children:n.number}),a.jsxs("span",{children:[a.jsx("strong",{children:n.title}),a.jsx("small",{children:n.description})]})]})},n.number))})]})}),a.jsx("section",{id:"overview",className:"school-fest-section school-fest-section--light","aria-labelledby":"overview-title",children:a.jsxs("div",{className:"container",children:[a.jsxs("header",{className:"school-fest-section__header",children:[a.jsx("span",{className:"school-fest-section__number","aria-hidden":"true",children:t.overview.number}),a.jsxs("div",{children:[a.jsx("p",{className:"school-fest-eyebrow",lang:"en",children:t.overview.eyebrow}),a.jsx("h2",{id:"overview-title",children:t.overview.title}),a.jsx("p",{children:t.overview.intro})]})]}),a.jsx("dl",{className:"school-fest-facts","aria-label":t.overview.detailsLabel,children:t.overview.details.map(n=>a.jsxs("div",{children:[a.jsx("dt",{children:n.term}),a.jsx("dd",{children:n.description})]},n.term))}),a.jsxs("div",{className:"school-fest-overview__layout",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"school-fest-subheading",children:t.overview.matchesLabel}),a.jsx("ol",{className:"school-fest-matches",children:aj.map((n,r)=>a.jsxs("li",{children:[a.jsx("span",{className:"school-fest-match__index","aria-hidden":"true",children:String(r+1).padStart(2,"0")}),a.jsxs("div",{className:"school-fest-match__body",children:[a.jsxs("dl",{children:[a.jsxs("div",{children:[a.jsx("dt",{children:t.overview.dateLabel}),a.jsx("dd",{children:n.date[e]??n.date.ja})]}),a.jsxs("div",{children:[a.jsx("dt",{children:t.overview.opponentLabel}),a.jsx("dd",{children:n.opponent[e]??n.opponent.ja})]})]}),a.jsxs("div",{className:"school-fest-match__motion",children:[a.jsx("span",{children:t.overview.motionLabel}),a.jsx("p",{children:e==="en"?n.motionEn:n.motionJa}),a.jsx("p",{lang:e==="en"?"ja":"en",children:e==="en"?n.motionJa:n.motionEn})]}),a.jsxs("div",{className:"school-fest-match__positions",children:[a.jsx("span",{children:t.overview.positionLabel}),a.jsx("dl",{children:n.positions.map(i=>a.jsxs("div",{children:[a.jsx("dt",{children:i.school[e]??i.school.ja}),a.jsx("dd",{children:i.stance[e]??i.stance.ja})]},i.school.en))})]}),a.jsxs("p",{className:"school-fest-match__result",children:[a.jsx("span",{children:t.overview.resultLabel}),n.result[e]??n.result.ja]})]})]},n.motionEn))})]}),a.jsxs("figure",{className:"school-fest-leaflet",children:[a.jsx("img",{src:vl,alt:t.overview.leafletAlt,loading:"lazy",decoding:"async"}),a.jsx("figcaption",{children:t.overview.leafletCaption})]})]})]})}),a.jsx("section",{id:"about-tedx",className:"school-fest-section school-fest-section--dark","aria-labelledby":"about-tedx-title",children:a.jsxs("div",{className:"container school-fest-rationale",children:[a.jsxs("header",{className:"school-fest-section__header",children:[a.jsx("span",{className:"school-fest-section__number","aria-hidden":"true",children:t.aboutTedx.number}),a.jsxs("div",{children:[a.jsx("p",{className:"school-fest-eyebrow",lang:"en",children:t.aboutTedx.eyebrow}),a.jsx("h2",{id:"about-tedx-title",children:t.aboutTedx.title})]})]}),a.jsxs("div",{className:"school-fest-rationale__grid",children:[a.jsxs("div",{className:"school-fest-rationale__copy",children:[a.jsx("p",{children:t.aboutTedx.intro}),a.jsx("p",{children:t.aboutTedx.acronymLead}),a.jsx("dl",{className:"school-fest-acronym",children:t.aboutTedx.acronym.map(n=>a.jsxs("div",{children:[a.jsx("dt",{children:n.initial}),a.jsxs("dd",{children:[a.jsx("strong",{lang:"en",children:n.term}),n.translation!==n.term&&a.jsx("span",{children:n.translation})]})]},n.initial))}),a.jsx("p",{children:t.aboutTedx.body}),a.jsx("p",{children:t.aboutTedx.tedxBody})]}),a.jsxs("blockquote",{className:"school-fest-quote",children:[a.jsx("p",{lang:"en",children:t.aboutTedx.quote}),a.jsx("footer",{children:t.aboutTedx.quoteTranslation})]})]}),a.jsxs("div",{className:"school-fest-dialogue",children:[a.jsx("h3",{children:t.aboutTedx.dialogueTitle}),a.jsx("div",{children:t.aboutTedx.dialogue.map(n=>a.jsx("p",{children:n},n))})]}),a.jsxs("section",{className:"school-fest-watch","aria-labelledby":"school-fest-watch-title",children:[a.jsxs("header",{children:[a.jsx("p",{className:"school-fest-eyebrow",lang:"en",children:"Watch"}),a.jsx("h3",{id:"school-fest-watch-title",children:t.aboutTedx.watchTitle}),a.jsx("p",{children:t.aboutTedx.watchIntro})]}),a.jsx("div",{className:"school-fest-watch__grid",children:t.aboutTedx.videos.map(n=>a.jsxs("figure",{children:[a.jsx("div",{className:"school-fest-video",children:a.jsx("iframe",{src:n.embedUrl,title:n.title,loading:"lazy",referrerPolicy:"strict-origin-when-cross-origin",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),a.jsxs("figcaption",{children:[a.jsx("span",{children:n.label}),a.jsx("strong",{children:n.title}),a.jsxs("a",{href:n.youtubeUrl,target:"_blank",rel:"noopener noreferrer",children:[t.aboutTedx.watchOnYouTube,a.jsx(di,{size:17,strokeWidth:2.25,"aria-hidden":"true"})]})]})]},n.youtubeUrl))})]})]})}),a.jsx("section",{id:"why-debate",className:"school-fest-section school-fest-section--light","aria-labelledby":"why-debate-title",children:a.jsxs("div",{className:"container",children:[a.jsxs("header",{className:"school-fest-section__header",children:[a.jsx("span",{className:"school-fest-section__number","aria-hidden":"true",children:t.whyDebate.number}),a.jsxs("div",{children:[a.jsx("p",{className:"school-fest-eyebrow",lang:"en",children:t.whyDebate.eyebrow}),a.jsx("h2",{id:"why-debate-title",children:t.whyDebate.title}),a.jsx("p",{children:t.whyDebate.intro})]})]}),a.jsxs("div",{className:"school-fest-debate-context",children:[a.jsx("p",{children:t.whyDebate.body}),a.jsxs("section",{"aria-labelledby":"practice-title",children:[a.jsx("h3",{id:"practice-title",children:t.whyDebate.practiceTitle}),a.jsx("ol",{children:t.whyDebate.practices.map((n,r)=>a.jsxs("li",{children:[a.jsx("span",{"aria-hidden":"true",children:String(r+1).padStart(2,"0")}),a.jsx("p",{children:n})]},n))})]})]}),a.jsxs(ae,{className:"school-fest-program-link",to:"/program",children:[t.programAction,a.jsx(rr,{size:20,strokeWidth:2.5,"aria-hidden":"true"})]})]})}),a.jsx("section",{className:"school-fest-references","aria-labelledby":"school-fest-references-title",children:a.jsxs("div",{className:"container",children:[a.jsxs("header",{children:[a.jsx("p",{className:"school-fest-eyebrow",lang:"en",children:t.references.eyebrow}),a.jsx("h2",{id:"school-fest-references-title",children:t.references.title}),a.jsx("p",{children:t.references.description})]}),a.jsx("ol",{children:t.references.items.map((n,r)=>a.jsx("li",{children:a.jsxs("a",{href:n.href,target:"_blank",rel:"noopener noreferrer",children:[a.jsx("span",{"aria-hidden":"true",children:String(r+1).padStart(2,"0")}),a.jsxs("span",{children:[a.jsx("strong",{children:n.title}),a.jsx("small",{children:n.description})]}),a.jsx(di,{size:19,strokeWidth:2.25,"aria-hidden":"true"})]})},n.href))})]})})]}),a.jsx("style",{children:`
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
      `})]})},Hh={ja:{eyebrow:"Acknowledgements",title:"謝礼",intro:"TEDxWUSHS Youthの活動にご協力いただいた皆さまに、心より感謝申し上げます。",schoolsLabel:"English Debate",schoolsTitle:"英語ディベート参加校",schoolsDescription:"2026年の学院祭企画にご参加いただき、ありがとうございました。",schools:["頌栄女子学院高等学校","慶應義塾高等学校","早稲田大学本庄高等学院 ESS"],partnerLabel:"Special Thanks",partnerTitle:"TEDxTeikyoU",partnerDescription:"スピーカーコーチングにご協力いただきました。心より感謝申し上げます。",contributions:["スピーカーコーチングへの協力"]},en:{eyebrow:"Acknowledgements",title:"Acknowledgements",intro:"We sincerely thank everyone who has supported the work of TEDxWUSHS Youth.",schoolsLabel:"English Debate",schoolsTitle:"Participating Schools",schoolsDescription:"Thank you for joining our English debate program at the 2026 school festival.",schools:["Shoei Girls’ Senior High School","Keio Senior High School","Waseda University Honjo Senior High School ESS"],partnerLabel:"Special Thanks",partnerTitle:"TEDxTeikyoU",partnerDescription:"We sincerely thank TEDxTeikyoU for supporting our speaker coaching.",contributions:["Speaker coaching support"]}},cj=()=>{const{language:e}=ie(),t=Hh[e]??Hh.ja;return a.jsxs("main",{id:"main-content",tabIndex:-1,className:"acknowledgements-page",children:[a.jsx("header",{className:"acknowledgements-hero","aria-labelledby":"acknowledgements-title",children:a.jsxs("div",{className:"container acknowledgements-hero__inner",children:[a.jsx("p",{className:"acknowledgements-eyebrow",lang:"en",children:t.eyebrow}),a.jsx("h1",{id:"acknowledgements-title",children:t.title}),a.jsx("p",{className:"acknowledgements-hero__intro",children:t.intro})]})}),a.jsx("section",{className:"acknowledgements-section","aria-labelledby":"acknowledgements-schools-title",children:a.jsxs("div",{className:"container acknowledgements-section__layout",children:[a.jsxs("header",{children:[a.jsx("p",{className:"acknowledgements-eyebrow",lang:"en",children:t.schoolsLabel}),a.jsx("h2",{id:"acknowledgements-schools-title",children:t.schoolsTitle}),a.jsx("p",{children:t.schoolsDescription})]}),a.jsx("ul",{className:"acknowledgements-list",children:t.schools.map(n=>a.jsx("li",{children:n},n))})]})}),a.jsx("section",{className:"acknowledgements-section acknowledgements-section--partner","aria-labelledby":"acknowledgements-partner-title",children:a.jsxs("div",{className:"container acknowledgements-section__layout",children:[a.jsxs("header",{children:[a.jsx("p",{className:"acknowledgements-eyebrow",lang:"en",children:t.partnerLabel}),a.jsx("h2",{id:"acknowledgements-partner-title",lang:"en",children:t.partnerTitle}),a.jsx("p",{children:t.partnerDescription})]}),a.jsx("ul",{className:"acknowledgements-list acknowledgements-list--accent",children:t.contributions.map(n=>a.jsx("li",{children:n},n))})]})}),a.jsx("style",{children:`
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
      `})]})},$h={ja:{"/":"TEDxWUSHS Youth | Ideas change everything","/about":"TEDxについて | TEDxWUSHS Youth","/program":"プログラム | TEDxWUSHS Youth","/event":"プログラム | TEDxWUSHS Youth","/speakers":"スピーカー | TEDxWUSHS Youth","/team":"チーム | TEDxWUSHS Youth","/organizers":"チーム | TEDxWUSHS Youth","/join-us":"参加する | TEDxWUSHS Youth","/join-us/speaker":"スピーカー募集 | TEDxWUSHS Youth","/join-us/team":"運営チーム募集 | TEDxWUSHS Youth","/join-us/audience":"参加申込み | TEDxWUSHS Youth","/faq":"よくある質問 | TEDxWUSHS Youth","/school-fest-2026":"学院祭英語ディベート特集 | TEDxWUSHS Youth","/acknowledgements":"謝礼 | TEDxWUSHS Youth"},en:{"/":"TEDxWUSHS Youth | Ideas change everything","/about":"About | TEDxWUSHS Youth","/program":"Program | TEDxWUSHS Youth","/event":"Program | TEDxWUSHS Youth","/speakers":"Speakers | TEDxWUSHS Youth","/team":"Team | TEDxWUSHS Youth","/organizers":"Team | TEDxWUSHS Youth","/join-us":"Join Us | TEDxWUSHS Youth","/join-us/speaker":"Speaker Applications | TEDxWUSHS Youth","/join-us/team":"Team Recruitment | TEDxWUSHS Youth","/join-us/audience":"Audience Registration | TEDxWUSHS Youth","/faq":"Frequently Asked Questions | TEDxWUSHS Youth","/school-fest-2026":"Gakuinsai English Debate Feature | TEDxWUSHS Youth","/acknowledgements":"Acknowledgements | TEDxWUSHS Youth"}},uj=()=>{const{pathname:e}=jn(),{language:t}=ie(),n=w.useRef(e);return w.useEffect(()=>{const r=$h[t]??$h.ja;document.title=r[e]??(t==="ja"?"ページが見つかりません | TEDxWUSHS Youth":"Page Not Found | TEDxWUSHS Youth"),document.documentElement.lang=t==="en"?"en":"ja"},[t,e]),w.useEffect(()=>{const r=document.getElementById("main-content"),i=n.current!==e;if(n.current=e,!r||(window.scrollTo({top:0,left:0,behavior:"auto"}),!i))return;const o=window.requestAnimationFrame(()=>{r.focus({preventScroll:!0})});return()=>window.cancelAnimationFrame(o)},[e]),null};function dj(){return a.jsx(vS,{children:a.jsx(Wx,{children:a.jsxs("div",{className:"app",children:[a.jsx(uj,{}),a.jsx(kS,{}),a.jsxs(Lx,{children:[a.jsx(ve,{path:"/",element:a.jsx(US,{})}),a.jsx(ve,{path:"/about",element:a.jsx($S,{})}),a.jsx(ve,{path:"/program",element:a.jsx(oj,{})}),a.jsx(ve,{path:"/event",element:a.jsx(fd,{to:"/program",replace:!0})}),a.jsx(ve,{path:"/speakers",element:a.jsx(YS,{})}),a.jsx(ve,{path:"/team",element:a.jsx(qS,{})}),a.jsx(ve,{path:"/organizers",element:a.jsx(fd,{to:"/team",replace:!0})}),a.jsx(ve,{path:"/join-us",element:a.jsx(QS,{})}),a.jsx(ve,{path:"/join-us/speaker",element:a.jsx(XS,{})}),a.jsx(ve,{path:"/join-us/team",element:a.jsx(JS,{})}),a.jsx(ve,{path:"/join-us/audience",element:a.jsx(ZS,{})}),a.jsx(ve,{path:"/faq",element:a.jsx(rj,{})}),a.jsx(ve,{path:"/school-fest-2026",element:a.jsx(lj,{})}),a.jsx(ve,{path:"/acknowledgements",element:a.jsx(cj,{})}),a.jsx(ve,{path:"*",element:a.jsx(ij,{})})]}),a.jsx(bS,{})]})})})}om(document.getElementById("root")).render(a.jsx(w.StrictMode,{children:a.jsx(dj,{})}));
