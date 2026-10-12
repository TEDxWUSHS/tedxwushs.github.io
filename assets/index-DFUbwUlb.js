function m0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function g0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $h={exports:{}},Bo={},Yh={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var di=Symbol.for("react.element"),v0=Symbol.for("react.portal"),y0=Symbol.for("react.fragment"),x0=Symbol.for("react.strict_mode"),w0=Symbol.for("react.profiler"),k0=Symbol.for("react.provider"),S0=Symbol.for("react.context"),b0=Symbol.for("react.forward_ref"),j0=Symbol.for("react.suspense"),T0=Symbol.for("react.memo"),E0=Symbol.for("react.lazy"),Jc=Symbol.iterator;function _0(e){return e===null||typeof e!="object"?null:(e=Jc&&e[Jc]||e["@@iterator"],typeof e=="function"?e:null)}var Kh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gh=Object.assign,qh={};function rr(e,t,n){this.props=e,this.context=t,this.refs=qh,this.updater=n||Kh}rr.prototype.isReactComponent={};rr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};rr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qh(){}Qh.prototype=rr.prototype;function yl(e,t,n){this.props=e,this.context=t,this.refs=qh,this.updater=n||Kh}var xl=yl.prototype=new Qh;xl.constructor=yl;Gh(xl,rr.prototype);xl.isPureReactComponent=!0;var Zc=Array.isArray,Xh=Object.prototype.hasOwnProperty,wl={current:null},Jh={key:!0,ref:!0,__self:!0,__source:!0};function Zh(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Xh.call(t,r)&&!Jh.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:di,type:e,key:o,ref:s,props:i,_owner:wl.current}}function D0(e,t){return{$$typeof:di,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function kl(e){return typeof e=="object"&&e!==null&&e.$$typeof===di}function C0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var eu=/\/+/g;function ds(e,t){return typeof e=="object"&&e!==null&&e.key!=null?C0(""+e.key):t.toString(36)}function Yi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case di:case v0:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+ds(s,0):r,Zc(i)?(n="",e!=null&&(n=e.replace(eu,"$&/")+"/"),Yi(i,t,n,"",function(u){return u})):i!=null&&(kl(i)&&(i=D0(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(eu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Zc(e))for(var a=0;a<e.length;a++){o=e[a];var c=r+ds(o,a);s+=Yi(o,t,n,c,i)}else if(c=_0(e),typeof c=="function")for(e=c.call(e),a=0;!(o=e.next()).done;)o=o.value,c=r+ds(o,a++),s+=Yi(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ji(e,t,n){if(e==null)return e;var r=[],i=0;return Yi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function P0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},Ki={transition:null},N0={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:Ki,ReactCurrentOwner:wl};function ef(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:ji,forEach:function(e,t,n){ji(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ji(e,function(){t++}),t},toArray:function(e){return ji(e,function(t){return t})||[]},only:function(e){if(!kl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=rr;L.Fragment=y0;L.Profiler=w0;L.PureComponent=yl;L.StrictMode=x0;L.Suspense=j0;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N0;L.act=ef;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Gh({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=wl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)Xh.call(t,c)&&!Jh.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:di,type:e.type,key:i,ref:o,props:r,_owner:s}};L.createContext=function(e){return e={$$typeof:S0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:k0,_context:e},e.Consumer=e};L.createElement=Zh;L.createFactory=function(e){var t=Zh.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:b0,render:e}};L.isValidElement=kl;L.lazy=function(e){return{$$typeof:E0,_payload:{_status:-1,_result:e},_init:P0}};L.memo=function(e,t){return{$$typeof:T0,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Ki.transition;Ki.transition={};try{e()}finally{Ki.transition=t}};L.unstable_act=ef;L.useCallback=function(e,t){return Ee.current.useCallback(e,t)};L.useContext=function(e){return Ee.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};L.useEffect=function(e,t){return Ee.current.useEffect(e,t)};L.useId=function(){return Ee.current.useId()};L.useImperativeHandle=function(e,t,n){return Ee.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return Ee.current.useMemo(e,t)};L.useReducer=function(e,t,n){return Ee.current.useReducer(e,t,n)};L.useRef=function(e){return Ee.current.useRef(e)};L.useState=function(e){return Ee.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return Ee.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return Ee.current.useTransition()};L.version="18.3.1";Yh.exports=L;var w=Yh.exports;const A0=g0(w),M0=m0({__proto__:null,default:A0},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0=w,L0=Symbol.for("react.element"),R0=Symbol.for("react.fragment"),I0=Object.prototype.hasOwnProperty,V0=z0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,F0={key:!0,ref:!0,__self:!0,__source:!0};function tf(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)I0.call(t,r)&&!F0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:L0,type:e,key:o,ref:s,props:i,_owner:V0.current}}Bo.Fragment=R0;Bo.jsx=tf;Bo.jsxs=tf;$h.exports=Bo;var l=$h.exports,nf={exports:{}},Ie={},rf={exports:{}},of={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,A){var M=D.length;D.push(A);e:for(;0<M;){var B=M-1>>>1,ce=D[B];if(0<i(ce,A))D[B]=A,D[M]=ce,M=B;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var A=D[0],M=D.pop();if(M!==A){D[0]=M;e:for(var B=0,ce=D.length,Si=ce>>>1;B<Si;){var tn=2*(B+1)-1,us=D[tn],nn=tn+1,bi=D[nn];if(0>i(us,M))nn<ce&&0>i(bi,us)?(D[B]=bi,D[nn]=M,B=nn):(D[B]=us,D[tn]=M,B=tn);else if(nn<ce&&0>i(bi,M))D[B]=bi,D[nn]=M,B=nn;else break e}}return A}function i(D,A){var M=D.sortIndex-A.sortIndex;return M!==0?M:D.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var c=[],u=[],d=1,h=null,f=3,v=!1,y=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(D){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=D)r(u),A.sortIndex=A.expirationTime,t(c,A);else break;A=n(u)}}function k(D){if(x=!1,p(D),!y)if(n(c)!==null)y=!0,ki(b);else{var A=n(u);A!==null&&J(k,A.startTime-D)}}function b(D,A){y=!1,x&&(x=!1,g(j),j=-1),v=!0;var M=f;try{for(p(A),h=n(c);h!==null&&(!(h.expirationTime>A)||D&&!X());){var B=h.callback;if(typeof B=="function"){h.callback=null,f=h.priorityLevel;var ce=B(h.expirationTime<=A);A=e.unstable_now(),typeof ce=="function"?h.callback=ce:h===n(c)&&r(c),p(A)}else r(c);h=n(c)}if(h!==null)var Si=!0;else{var tn=n(u);tn!==null&&J(k,tn.startTime-A),Si=!1}return Si}finally{h=null,f=M,v=!1}}var T=!1,E=null,j=-1,z=5,N=-1;function X(){return!(e.unstable_now()-N<z)}function it(){if(E!==null){var D=e.unstable_now();N=D;var A=!0;try{A=E(!0,D)}finally{A?en():(T=!1,E=null)}}else T=!1}var en;if(typeof m=="function")en=function(){m(it)};else if(typeof MessageChannel<"u"){var dr=new MessageChannel,wi=dr.port2;dr.port1.onmessage=it,en=function(){wi.postMessage(null)}}else en=function(){S(it,0)};function ki(D){E=D,T||(T=!0,en())}function J(D,A){j=S(function(){D(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,ki(b))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(D){switch(f){case 1:case 2:case 3:var A=3;break;default:A=f}var M=f;f=A;try{return D()}finally{f=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,A){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var M=f;f=D;try{return A()}finally{f=M}},e.unstable_scheduleCallback=function(D,A,M){var B=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?B+M:B):M=B,D){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=M+ce,D={id:d++,callback:A,priorityLevel:D,startTime:M,expirationTime:ce,sortIndex:-1},M>B?(D.sortIndex=M,t(u,D),n(c)===null&&D===n(u)&&(x?(g(j),j=-1):x=!0,J(k,M-B))):(D.sortIndex=ce,t(c,D),y||v||(y=!0,ki(b))),D},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(D){var A=f;return function(){var M=f;f=A;try{return D.apply(this,arguments)}finally{f=M}}}})(of);rf.exports=of;var O0=rf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0=w,Re=O0;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sf=new Set,Or={};function kn(e,t){Gn(e,t),Gn(e+"Capture",t)}function Gn(e,t){for(Or[e]=t,e=0;e<t.length;e++)sf.add(t[e])}var xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ta=Object.prototype.hasOwnProperty,W0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tu={},nu={};function B0(e){return ta.call(nu,e)?!0:ta.call(tu,e)?!1:W0.test(e)?nu[e]=!0:(tu[e]=!0,!1)}function H0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $0(e,t,n,r){if(t===null||typeof t>"u"||H0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _e(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new _e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Sl=/[\-:]([a-z])/g;function bl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Sl,bl);me[t]=new _e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Sl,bl);me[t]=new _e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Sl,bl);me[t]=new _e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function jl(e,t,n,r){var i=me.hasOwnProperty(t)?me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($0(t,n,i,r)&&(n=null),r||i===null?B0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var jt=U0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ti=Symbol.for("react.element"),Tn=Symbol.for("react.portal"),En=Symbol.for("react.fragment"),Tl=Symbol.for("react.strict_mode"),na=Symbol.for("react.profiler"),af=Symbol.for("react.provider"),lf=Symbol.for("react.context"),El=Symbol.for("react.forward_ref"),ra=Symbol.for("react.suspense"),ia=Symbol.for("react.suspense_list"),_l=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),cf=Symbol.for("react.offscreen"),ru=Symbol.iterator;function hr(e){return e===null||typeof e!="object"?null:(e=ru&&e[ru]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,hs;function kr(e){if(hs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);hs=t&&t[1]||""}return`
`+hs+e}var fs=!1;function ps(e,t){if(!e||fs)return"";fs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=a);break}}}finally{fs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?kr(e):""}function Y0(e){switch(e.tag){case 5:return kr(e.type);case 16:return kr("Lazy");case 13:return kr("Suspense");case 19:return kr("SuspenseList");case 0:case 2:case 15:return e=ps(e.type,!1),e;case 11:return e=ps(e.type.render,!1),e;case 1:return e=ps(e.type,!0),e;default:return""}}function oa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case En:return"Fragment";case Tn:return"Portal";case na:return"Profiler";case Tl:return"StrictMode";case ra:return"Suspense";case ia:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lf:return(e.displayName||"Context")+".Consumer";case af:return(e._context.displayName||"Context")+".Provider";case El:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _l:return t=e.displayName||null,t!==null?t:oa(e.type)||"Memo";case _t:t=e._payload,e=e._init;try{return oa(e(t))}catch{}}return null}function K0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oa(t);case 8:return t===Tl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function uf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function G0(e){var t=uf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ei(e){e._valueTracker||(e._valueTracker=G0(e))}function df(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=uf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function lo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function sa(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function iu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ht(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hf(e,t){t=t.checked,t!=null&&jl(e,"checked",t,!1)}function aa(e,t){hf(e,t);var n=Ht(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?la(e,t.type,n):t.hasOwnProperty("defaultValue")&&la(e,t.type,Ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ou(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function la(e,t,n){(t!=="number"||lo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Sr=Array.isArray;function Un(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ht(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ca(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function su(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Sr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ht(n)}}function ff(e,t){var n=Ht(t.value),r=Ht(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function au(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function pf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ua(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?pf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _i,mf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_i=_i||document.createElement("div"),_i.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_i.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ur(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},q0=["Webkit","ms","Moz","O"];Object.keys(_r).forEach(function(e){q0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_r[t]=_r[e]})});function gf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_r.hasOwnProperty(e)&&_r[e]?(""+t).trim():t+"px"}function vf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=gf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Q0=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function da(e,t){if(t){if(Q0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function ha(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fa=null;function Dl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pa=null,Wn=null,Bn=null;function lu(e){if(e=pi(e)){if(typeof pa!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Go(t),pa(e.stateNode,e.type,t))}}function yf(e){Wn?Bn?Bn.push(e):Bn=[e]:Wn=e}function xf(){if(Wn){var e=Wn,t=Bn;if(Bn=Wn=null,lu(e),t)for(e=0;e<t.length;e++)lu(t[e])}}function wf(e,t){return e(t)}function kf(){}var ms=!1;function Sf(e,t,n){if(ms)return e(t,n);ms=!0;try{return wf(e,t,n)}finally{ms=!1,(Wn!==null||Bn!==null)&&(kf(),xf())}}function Wr(e,t){var n=e.stateNode;if(n===null)return null;var r=Go(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var ma=!1;if(xt)try{var fr={};Object.defineProperty(fr,"passive",{get:function(){ma=!0}}),window.addEventListener("test",fr,fr),window.removeEventListener("test",fr,fr)}catch{ma=!1}function X0(e,t,n,r,i,o,s,a,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Dr=!1,co=null,uo=!1,ga=null,J0={onError:function(e){Dr=!0,co=e}};function Z0(e,t,n,r,i,o,s,a,c){Dr=!1,co=null,X0.apply(J0,arguments)}function ev(e,t,n,r,i,o,s,a,c){if(Z0.apply(this,arguments),Dr){if(Dr){var u=co;Dr=!1,co=null}else throw Error(_(198));uo||(uo=!0,ga=u)}}function Sn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cu(e){if(Sn(e)!==e)throw Error(_(188))}function tv(e){var t=e.alternate;if(!t){if(t=Sn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return cu(i),e;if(o===r)return cu(i),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function jf(e){return e=tv(e),e!==null?Tf(e):null}function Tf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Tf(e);if(t!==null)return t;e=e.sibling}return null}var Ef=Re.unstable_scheduleCallback,uu=Re.unstable_cancelCallback,nv=Re.unstable_shouldYield,rv=Re.unstable_requestPaint,Z=Re.unstable_now,iv=Re.unstable_getCurrentPriorityLevel,Cl=Re.unstable_ImmediatePriority,_f=Re.unstable_UserBlockingPriority,ho=Re.unstable_NormalPriority,ov=Re.unstable_LowPriority,Df=Re.unstable_IdlePriority,Ho=null,lt=null;function sv(e){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Ho,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:cv,av=Math.log,lv=Math.LN2;function cv(e){return e>>>=0,e===0?32:31-(av(e)/lv|0)|0}var Di=64,Ci=4194304;function br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=br(a):(o&=s,o!==0&&(r=br(o)))}else s=n&~i,s!==0?r=br(s):o!==0&&(r=br(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tt(t),i=1<<n,r|=e[n],t&=~i;return r}function uv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-tt(o),a=1<<s,c=i[s];c===-1?(!(a&n)||a&r)&&(i[s]=uv(a,t)):c<=t&&(e.expiredLanes|=a),o&=~a}}function va(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cf(){var e=Di;return Di<<=1,!(Di&4194240)&&(Di=64),e}function gs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function hv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-tt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Pl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var I=0;function Pf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Nf,Nl,Af,Mf,zf,ya=!1,Pi=[],Lt=null,Rt=null,It=null,Br=new Map,Hr=new Map,Ct=[],fv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function du(e,t){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":Br.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hr.delete(t.pointerId)}}function pr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=pi(t),t!==null&&Nl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function pv(e,t,n,r,i){switch(t){case"focusin":return Lt=pr(Lt,e,t,n,r,i),!0;case"dragenter":return Rt=pr(Rt,e,t,n,r,i),!0;case"mouseover":return It=pr(It,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Br.set(o,pr(Br.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Hr.set(o,pr(Hr.get(o)||null,e,t,n,r,i)),!0}return!1}function Lf(e){var t=ln(e.target);if(t!==null){var n=Sn(t);if(n!==null){if(t=n.tag,t===13){if(t=bf(n),t!==null){e.blockedOn=t,zf(e.priority,function(){Af(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fa=r,n.target.dispatchEvent(r),fa=null}else return t=pi(n),t!==null&&Nl(t),e.blockedOn=n,!1;t.shift()}return!0}function hu(e,t,n){Gi(e)&&n.delete(t)}function mv(){ya=!1,Lt!==null&&Gi(Lt)&&(Lt=null),Rt!==null&&Gi(Rt)&&(Rt=null),It!==null&&Gi(It)&&(It=null),Br.forEach(hu),Hr.forEach(hu)}function mr(e,t){e.blockedOn===t&&(e.blockedOn=null,ya||(ya=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,mv)))}function $r(e){function t(i){return mr(i,e)}if(0<Pi.length){mr(Pi[0],e);for(var n=1;n<Pi.length;n++){var r=Pi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Lt!==null&&mr(Lt,e),Rt!==null&&mr(Rt,e),It!==null&&mr(It,e),Br.forEach(t),Hr.forEach(t),n=0;n<Ct.length;n++)r=Ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ct.length&&(n=Ct[0],n.blockedOn===null);)Lf(n),n.blockedOn===null&&Ct.shift()}var Hn=jt.ReactCurrentBatchConfig,po=!0;function gv(e,t,n,r){var i=I,o=Hn.transition;Hn.transition=null;try{I=1,Al(e,t,n,r)}finally{I=i,Hn.transition=o}}function vv(e,t,n,r){var i=I,o=Hn.transition;Hn.transition=null;try{I=4,Al(e,t,n,r)}finally{I=i,Hn.transition=o}}function Al(e,t,n,r){if(po){var i=xa(e,t,n,r);if(i===null)Es(e,t,r,mo,n),du(e,r);else if(pv(i,e,t,n,r))r.stopPropagation();else if(du(e,r),t&4&&-1<fv.indexOf(e)){for(;i!==null;){var o=pi(i);if(o!==null&&Nf(o),o=xa(e,t,n,r),o===null&&Es(e,t,r,mo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Es(e,t,r,null,n)}}var mo=null;function xa(e,t,n,r){if(mo=null,e=Dl(r),e=ln(e),e!==null)if(t=Sn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return mo=e,null}function Rf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iv()){case Cl:return 1;case _f:return 4;case ho:case ov:return 16;case Df:return 536870912;default:return 16}default:return 16}}var Nt=null,Ml=null,qi=null;function If(){if(qi)return qi;var e,t=Ml,n=t.length,r,i="value"in Nt?Nt.value:Nt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return qi=i.slice(e,1<r?1-r:void 0)}function Qi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ni(){return!0}function fu(){return!1}function Ve(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ni:fu,this.isPropagationStopped=fu,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ni)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ni)},persist:function(){},isPersistent:Ni}),t}var ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=Ve(ir),fi=K({},ir,{view:0,detail:0}),yv=Ve(fi),vs,ys,gr,$o=K({},fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ll,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gr&&(gr&&e.type==="mousemove"?(vs=e.screenX-gr.screenX,ys=e.screenY-gr.screenY):ys=vs=0,gr=e),vs)},movementY:function(e){return"movementY"in e?e.movementY:ys}}),pu=Ve($o),xv=K({},$o,{dataTransfer:0}),wv=Ve(xv),kv=K({},fi,{relatedTarget:0}),xs=Ve(kv),Sv=K({},ir,{animationName:0,elapsedTime:0,pseudoElement:0}),bv=Ve(Sv),jv=K({},ir,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Tv=Ve(jv),Ev=K({},ir,{data:0}),mu=Ve(Ev),_v={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cv[e])?!!t[e]:!1}function Ll(){return Pv}var Nv=K({},fi,{key:function(e){if(e.key){var t=_v[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ll,charCode:function(e){return e.type==="keypress"?Qi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Av=Ve(Nv),Mv=K({},$o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gu=Ve(Mv),zv=K({},fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ll}),Lv=Ve(zv),Rv=K({},ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iv=Ve(Rv),Vv=K({},$o,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fv=Ve(Vv),Ov=[9,13,27,32],Rl=xt&&"CompositionEvent"in window,Cr=null;xt&&"documentMode"in document&&(Cr=document.documentMode);var Uv=xt&&"TextEvent"in window&&!Cr,Vf=xt&&(!Rl||Cr&&8<Cr&&11>=Cr),vu=" ",yu=!1;function Ff(e,t){switch(e){case"keyup":return Ov.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Of(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _n=!1;function Wv(e,t){switch(e){case"compositionend":return Of(t);case"keypress":return t.which!==32?null:(yu=!0,vu);case"textInput":return e=t.data,e===vu&&yu?null:e;default:return null}}function Bv(e,t){if(_n)return e==="compositionend"||!Rl&&Ff(e,t)?(e=If(),qi=Ml=Nt=null,_n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vf&&t.locale!=="ko"?null:t.data;default:return null}}var Hv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Hv[e.type]:t==="textarea"}function Uf(e,t,n,r){yf(r),t=go(t,"onChange"),0<t.length&&(n=new zl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pr=null,Yr=null;function $v(e){Jf(e,0)}function Yo(e){var t=Pn(e);if(df(t))return e}function Yv(e,t){if(e==="change")return t}var Wf=!1;if(xt){var ws;if(xt){var ks="oninput"in document;if(!ks){var wu=document.createElement("div");wu.setAttribute("oninput","return;"),ks=typeof wu.oninput=="function"}ws=ks}else ws=!1;Wf=ws&&(!document.documentMode||9<document.documentMode)}function ku(){Pr&&(Pr.detachEvent("onpropertychange",Bf),Yr=Pr=null)}function Bf(e){if(e.propertyName==="value"&&Yo(Yr)){var t=[];Uf(t,Yr,e,Dl(e)),Sf($v,t)}}function Kv(e,t,n){e==="focusin"?(ku(),Pr=t,Yr=n,Pr.attachEvent("onpropertychange",Bf)):e==="focusout"&&ku()}function Gv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yo(Yr)}function qv(e,t){if(e==="click")return Yo(t)}function Qv(e,t){if(e==="input"||e==="change")return Yo(t)}function Xv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:Xv;function Kr(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ta.call(t,i)||!rt(e[i],t[i]))return!1}return!0}function Su(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bu(e,t){var n=Su(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Su(n)}}function Hf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $f(){for(var e=window,t=lo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=lo(e.document)}return t}function Il(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Jv(e){var t=$f(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hf(n.ownerDocument.documentElement,n)){if(r!==null&&Il(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=bu(n,o);var s=bu(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Zv=xt&&"documentMode"in document&&11>=document.documentMode,Dn=null,wa=null,Nr=null,ka=!1;function ju(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ka||Dn==null||Dn!==lo(r)||(r=Dn,"selectionStart"in r&&Il(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nr&&Kr(Nr,r)||(Nr=r,r=go(wa,"onSelect"),0<r.length&&(t=new zl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Dn)))}function Ai(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Cn={animationend:Ai("Animation","AnimationEnd"),animationiteration:Ai("Animation","AnimationIteration"),animationstart:Ai("Animation","AnimationStart"),transitionend:Ai("Transition","TransitionEnd")},Ss={},Yf={};xt&&(Yf=document.createElement("div").style,"AnimationEvent"in window||(delete Cn.animationend.animation,delete Cn.animationiteration.animation,delete Cn.animationstart.animation),"TransitionEvent"in window||delete Cn.transitionend.transition);function Ko(e){if(Ss[e])return Ss[e];if(!Cn[e])return e;var t=Cn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Yf)return Ss[e]=t[n];return e}var Kf=Ko("animationend"),Gf=Ko("animationiteration"),qf=Ko("animationstart"),Qf=Ko("transitionend"),Xf=new Map,Tu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gt(e,t){Xf.set(e,t),kn(t,[e])}for(var bs=0;bs<Tu.length;bs++){var js=Tu[bs],ey=js.toLowerCase(),ty=js[0].toUpperCase()+js.slice(1);Gt(ey,"on"+ty)}Gt(Kf,"onAnimationEnd");Gt(Gf,"onAnimationIteration");Gt(qf,"onAnimationStart");Gt("dblclick","onDoubleClick");Gt("focusin","onFocus");Gt("focusout","onBlur");Gt(Qf,"onTransitionEnd");Gn("onMouseEnter",["mouseout","mouseover"]);Gn("onMouseLeave",["mouseout","mouseover"]);Gn("onPointerEnter",["pointerout","pointerover"]);Gn("onPointerLeave",["pointerout","pointerover"]);kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ny=new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));function Eu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ev(r,t,void 0,e),e.currentTarget=null}function Jf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==o&&i.isPropagationStopped())break e;Eu(i,a,u),o=c}else for(s=0;s<r.length;s++){if(a=r[s],c=a.instance,u=a.currentTarget,a=a.listener,c!==o&&i.isPropagationStopped())break e;Eu(i,a,u),o=c}}}if(uo)throw e=ga,uo=!1,ga=null,e}function F(e,t){var n=t[Ea];n===void 0&&(n=t[Ea]=new Set);var r=e+"__bubble";n.has(r)||(Zf(t,e,2,!1),n.add(r))}function Ts(e,t,n){var r=0;t&&(r|=4),Zf(n,e,r,t)}var Mi="_reactListening"+Math.random().toString(36).slice(2);function Gr(e){if(!e[Mi]){e[Mi]=!0,sf.forEach(function(n){n!=="selectionchange"&&(ny.has(n)||Ts(n,!1,e),Ts(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mi]||(t[Mi]=!0,Ts("selectionchange",!1,t))}}function Zf(e,t,n,r){switch(Rf(t)){case 1:var i=gv;break;case 4:i=vv;break;default:i=Al}n=i.bind(null,t,n,e),i=void 0,!ma||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Es(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;a!==null;){if(s=ln(a),s===null)return;if(c=s.tag,c===5||c===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Sf(function(){var u=o,d=Dl(n),h=[];e:{var f=Xf.get(e);if(f!==void 0){var v=zl,y=e;switch(e){case"keypress":if(Qi(n)===0)break e;case"keydown":case"keyup":v=Av;break;case"focusin":y="focus",v=xs;break;case"focusout":y="blur",v=xs;break;case"beforeblur":case"afterblur":v=xs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=pu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Lv;break;case Kf:case Gf:case qf:v=bv;break;case Qf:v=Iv;break;case"scroll":v=yv;break;case"wheel":v=Fv;break;case"copy":case"cut":case"paste":v=Tv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=gu}var x=(t&4)!==0,S=!x&&e==="scroll",g=x?f!==null?f+"Capture":null:f;x=[];for(var m=u,p;m!==null;){p=m;var k=p.stateNode;if(p.tag===5&&k!==null&&(p=k,g!==null&&(k=Wr(m,g),k!=null&&x.push(qr(m,k,p)))),S)break;m=m.return}0<x.length&&(f=new v(f,y,null,n,d),h.push({event:f,listeners:x}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&n!==fa&&(y=n.relatedTarget||n.fromElement)&&(ln(y)||y[wt]))break e;if((v||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?ln(y):null,y!==null&&(S=Sn(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(x=pu,k="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(x=gu,k="onPointerLeave",g="onPointerEnter",m="pointer"),S=v==null?f:Pn(v),p=y==null?f:Pn(y),f=new x(k,m+"leave",v,n,d),f.target=S,f.relatedTarget=p,k=null,ln(d)===u&&(x=new x(g,m+"enter",y,n,d),x.target=p,x.relatedTarget=S,k=x),S=k,v&&y)t:{for(x=v,g=y,m=0,p=x;p;p=jn(p))m++;for(p=0,k=g;k;k=jn(k))p++;for(;0<m-p;)x=jn(x),m--;for(;0<p-m;)g=jn(g),p--;for(;m--;){if(x===g||g!==null&&x===g.alternate)break t;x=jn(x),g=jn(g)}x=null}else x=null;v!==null&&_u(h,f,v,x,!1),y!==null&&S!==null&&_u(h,S,y,x,!0)}}e:{if(f=u?Pn(u):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var b=Yv;else if(xu(f))if(Wf)b=Qv;else{b=Gv;var T=Kv}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=qv);if(b&&(b=b(e,u))){Uf(h,b,n,d);break e}T&&T(e,f,u),e==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&la(f,"number",f.value)}switch(T=u?Pn(u):window,e){case"focusin":(xu(T)||T.contentEditable==="true")&&(Dn=T,wa=u,Nr=null);break;case"focusout":Nr=wa=Dn=null;break;case"mousedown":ka=!0;break;case"contextmenu":case"mouseup":case"dragend":ka=!1,ju(h,n,d);break;case"selectionchange":if(Zv)break;case"keydown":case"keyup":ju(h,n,d)}var E;if(Rl)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else _n?Ff(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Vf&&n.locale!=="ko"&&(_n||j!=="onCompositionStart"?j==="onCompositionEnd"&&_n&&(E=If()):(Nt=d,Ml="value"in Nt?Nt.value:Nt.textContent,_n=!0)),T=go(u,j),0<T.length&&(j=new mu(j,e,null,n,d),h.push({event:j,listeners:T}),E?j.data=E:(E=Of(n),E!==null&&(j.data=E)))),(E=Uv?Wv(e,n):Bv(e,n))&&(u=go(u,"onBeforeInput"),0<u.length&&(d=new mu("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=E))}Jf(h,t)})}function qr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function go(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Wr(e,n),o!=null&&r.unshift(qr(e,o,i)),o=Wr(e,t),o!=null&&r.push(qr(e,o,i))),e=e.return}return r}function jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _u(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,i?(c=Wr(n,o),c!=null&&s.unshift(qr(n,c,a))):i||(c=Wr(n,o),c!=null&&s.push(qr(n,c,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var ry=/\r\n?/g,iy=/\u0000|\uFFFD/g;function Du(e){return(typeof e=="string"?e:""+e).replace(ry,`
`).replace(iy,"")}function zi(e,t,n){if(t=Du(t),Du(e)!==t&&n)throw Error(_(425))}function vo(){}var Sa=null,ba=null;function ja(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ta=typeof setTimeout=="function"?setTimeout:void 0,oy=typeof clearTimeout=="function"?clearTimeout:void 0,Cu=typeof Promise=="function"?Promise:void 0,sy=typeof queueMicrotask=="function"?queueMicrotask:typeof Cu<"u"?function(e){return Cu.resolve(null).then(e).catch(ay)}:Ta;function ay(e){setTimeout(function(){throw e})}function _s(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),$r(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$r(t)}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var or=Math.random().toString(36).slice(2),at="__reactFiber$"+or,Qr="__reactProps$"+or,wt="__reactContainer$"+or,Ea="__reactEvents$"+or,ly="__reactListeners$"+or,cy="__reactHandles$"+or;function ln(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pu(e);e!==null;){if(n=e[at])return n;e=Pu(e)}return t}e=n,n=e.parentNode}return null}function pi(e){return e=e[at]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Go(e){return e[Qr]||null}var _a=[],Nn=-1;function qt(e){return{current:e}}function O(e){0>Nn||(e.current=_a[Nn],_a[Nn]=null,Nn--)}function V(e,t){Nn++,_a[Nn]=e.current,e.current=t}var $t={},we=qt($t),Pe=qt(!1),gn=$t;function qn(e,t){var n=e.type.contextTypes;if(!n)return $t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(e){return e=e.childContextTypes,e!=null}function yo(){O(Pe),O(we)}function Nu(e,t,n){if(we.current!==$t)throw Error(_(168));V(we,t),V(Pe,n)}function ep(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,K0(e)||"Unknown",i));return K({},n,r)}function xo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$t,gn=we.current,V(we,e),V(Pe,Pe.current),!0}function Au(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=ep(e,t,gn),r.__reactInternalMemoizedMergedChildContext=e,O(Pe),O(we),V(we,e)):O(Pe),V(Pe,n)}var pt=null,qo=!1,Ds=!1;function tp(e){pt===null?pt=[e]:pt.push(e)}function uy(e){qo=!0,tp(e)}function Qt(){if(!Ds&&pt!==null){Ds=!0;var e=0,t=I;try{var n=pt;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}pt=null,qo=!1}catch(i){throw pt!==null&&(pt=pt.slice(e+1)),Ef(Cl,Qt),i}finally{I=t,Ds=!1}}return null}var An=[],Mn=0,wo=null,ko=0,Oe=[],Ue=0,vn=null,mt=1,gt="";function on(e,t){An[Mn++]=ko,An[Mn++]=wo,wo=e,ko=t}function np(e,t,n){Oe[Ue++]=mt,Oe[Ue++]=gt,Oe[Ue++]=vn,vn=e;var r=mt;e=gt;var i=32-tt(r)-1;r&=~(1<<i),n+=1;var o=32-tt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,mt=1<<32-tt(t)+i|n<<i|r,gt=o+e}else mt=1<<o|n<<i|r,gt=e}function Vl(e){e.return!==null&&(on(e,1),np(e,1,0))}function Fl(e){for(;e===wo;)wo=An[--Mn],An[Mn]=null,ko=An[--Mn],An[Mn]=null;for(;e===vn;)vn=Oe[--Ue],Oe[Ue]=null,gt=Oe[--Ue],Oe[Ue]=null,mt=Oe[--Ue],Oe[Ue]=null}var Le=null,ze=null,W=!1,et=null;function rp(e,t){var n=We(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Mu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Le=e,ze=Vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Le=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=vn!==null?{id:mt,overflow:gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=We(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Le=e,ze=null,!0):!1;default:return!1}}function Da(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ca(e){if(W){var t=ze;if(t){var n=t;if(!Mu(e,t)){if(Da(e))throw Error(_(418));t=Vt(n.nextSibling);var r=Le;t&&Mu(e,t)?rp(r,n):(e.flags=e.flags&-4097|2,W=!1,Le=e)}}else{if(Da(e))throw Error(_(418));e.flags=e.flags&-4097|2,W=!1,Le=e}}}function zu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function Li(e){if(e!==Le)return!1;if(!W)return zu(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ja(e.type,e.memoizedProps)),t&&(t=ze)){if(Da(e))throw ip(),Error(_(418));for(;t;)rp(e,t),t=Vt(t.nextSibling)}if(zu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=Vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Le?Vt(e.stateNode.nextSibling):null;return!0}function ip(){for(var e=ze;e;)e=Vt(e.nextSibling)}function Qn(){ze=Le=null,W=!1}function Ol(e){et===null?et=[e]:et.push(e)}var dy=jt.ReactCurrentBatchConfig;function vr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Ri(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Lu(e){var t=e._init;return t(e._payload)}function op(e){function t(g,m){if(e){var p=g.deletions;p===null?(g.deletions=[m],g.flags|=16):p.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=Wt(g,m),g.index=0,g.sibling=null,g}function o(g,m,p){return g.index=p,e?(p=g.alternate,p!==null?(p=p.index,p<m?(g.flags|=2,m):p):(g.flags|=2,m)):(g.flags|=1048576,m)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,m,p,k){return m===null||m.tag!==6?(m=Ls(p,g.mode,k),m.return=g,m):(m=i(m,p),m.return=g,m)}function c(g,m,p,k){var b=p.type;return b===En?d(g,m,p.props.children,k,p.key):m!==null&&(m.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===_t&&Lu(b)===m.type)?(k=i(m,p.props),k.ref=vr(g,m,p),k.return=g,k):(k=ro(p.type,p.key,p.props,null,g.mode,k),k.ref=vr(g,m,p),k.return=g,k)}function u(g,m,p,k){return m===null||m.tag!==4||m.stateNode.containerInfo!==p.containerInfo||m.stateNode.implementation!==p.implementation?(m=Rs(p,g.mode,k),m.return=g,m):(m=i(m,p.children||[]),m.return=g,m)}function d(g,m,p,k,b){return m===null||m.tag!==7?(m=pn(p,g.mode,k,b),m.return=g,m):(m=i(m,p),m.return=g,m)}function h(g,m,p){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ls(""+m,g.mode,p),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ti:return p=ro(m.type,m.key,m.props,null,g.mode,p),p.ref=vr(g,null,m),p.return=g,p;case Tn:return m=Rs(m,g.mode,p),m.return=g,m;case _t:var k=m._init;return h(g,k(m._payload),p)}if(Sr(m)||hr(m))return m=pn(m,g.mode,p,null),m.return=g,m;Ri(g,m)}return null}function f(g,m,p,k){var b=m!==null?m.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return b!==null?null:a(g,m,""+p,k);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ti:return p.key===b?c(g,m,p,k):null;case Tn:return p.key===b?u(g,m,p,k):null;case _t:return b=p._init,f(g,m,b(p._payload),k)}if(Sr(p)||hr(p))return b!==null?null:d(g,m,p,k,null);Ri(g,p)}return null}function v(g,m,p,k,b){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(p)||null,a(m,g,""+k,b);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ti:return g=g.get(k.key===null?p:k.key)||null,c(m,g,k,b);case Tn:return g=g.get(k.key===null?p:k.key)||null,u(m,g,k,b);case _t:var T=k._init;return v(g,m,p,T(k._payload),b)}if(Sr(k)||hr(k))return g=g.get(p)||null,d(m,g,k,b,null);Ri(m,k)}return null}function y(g,m,p,k){for(var b=null,T=null,E=m,j=m=0,z=null;E!==null&&j<p.length;j++){E.index>j?(z=E,E=null):z=E.sibling;var N=f(g,E,p[j],k);if(N===null){E===null&&(E=z);break}e&&E&&N.alternate===null&&t(g,E),m=o(N,m,j),T===null?b=N:T.sibling=N,T=N,E=z}if(j===p.length)return n(g,E),W&&on(g,j),b;if(E===null){for(;j<p.length;j++)E=h(g,p[j],k),E!==null&&(m=o(E,m,j),T===null?b=E:T.sibling=E,T=E);return W&&on(g,j),b}for(E=r(g,E);j<p.length;j++)z=v(E,g,j,p[j],k),z!==null&&(e&&z.alternate!==null&&E.delete(z.key===null?j:z.key),m=o(z,m,j),T===null?b=z:T.sibling=z,T=z);return e&&E.forEach(function(X){return t(g,X)}),W&&on(g,j),b}function x(g,m,p,k){var b=hr(p);if(typeof b!="function")throw Error(_(150));if(p=b.call(p),p==null)throw Error(_(151));for(var T=b=null,E=m,j=m=0,z=null,N=p.next();E!==null&&!N.done;j++,N=p.next()){E.index>j?(z=E,E=null):z=E.sibling;var X=f(g,E,N.value,k);if(X===null){E===null&&(E=z);break}e&&E&&X.alternate===null&&t(g,E),m=o(X,m,j),T===null?b=X:T.sibling=X,T=X,E=z}if(N.done)return n(g,E),W&&on(g,j),b;if(E===null){for(;!N.done;j++,N=p.next())N=h(g,N.value,k),N!==null&&(m=o(N,m,j),T===null?b=N:T.sibling=N,T=N);return W&&on(g,j),b}for(E=r(g,E);!N.done;j++,N=p.next())N=v(E,g,j,N.value,k),N!==null&&(e&&N.alternate!==null&&E.delete(N.key===null?j:N.key),m=o(N,m,j),T===null?b=N:T.sibling=N,T=N);return e&&E.forEach(function(it){return t(g,it)}),W&&on(g,j),b}function S(g,m,p,k){if(typeof p=="object"&&p!==null&&p.type===En&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ti:e:{for(var b=p.key,T=m;T!==null;){if(T.key===b){if(b=p.type,b===En){if(T.tag===7){n(g,T.sibling),m=i(T,p.props.children),m.return=g,g=m;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===_t&&Lu(b)===T.type){n(g,T.sibling),m=i(T,p.props),m.ref=vr(g,T,p),m.return=g,g=m;break e}n(g,T);break}else t(g,T);T=T.sibling}p.type===En?(m=pn(p.props.children,g.mode,k,p.key),m.return=g,g=m):(k=ro(p.type,p.key,p.props,null,g.mode,k),k.ref=vr(g,m,p),k.return=g,g=k)}return s(g);case Tn:e:{for(T=p.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===p.containerInfo&&m.stateNode.implementation===p.implementation){n(g,m.sibling),m=i(m,p.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=Rs(p,g.mode,k),m.return=g,g=m}return s(g);case _t:return T=p._init,S(g,m,T(p._payload),k)}if(Sr(p))return y(g,m,p,k);if(hr(p))return x(g,m,p,k);Ri(g,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,p),m.return=g,g=m):(n(g,m),m=Ls(p,g.mode,k),m.return=g,g=m),s(g)):n(g,m)}return S}var Xn=op(!0),sp=op(!1),So=qt(null),bo=null,zn=null,Ul=null;function Wl(){Ul=zn=bo=null}function Bl(e){var t=So.current;O(So),e._currentValue=t}function Pa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $n(e,t){bo=e,Ul=zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(Ul!==e)if(e={context:e,memoizedValue:t,next:null},zn===null){if(bo===null)throw Error(_(308));zn=e,bo.dependencies={lanes:0,firstContext:e}}else zn=zn.next=e;return t}var cn=null;function Hl(e){cn===null?cn=[e]:cn.push(e)}function ap(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Hl(t)):(n.next=i.next,i.next=n),t.interleaved=n,kt(e,r)}function kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dt=!1;function $l(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,kt(e,n)}return i=r.interleaved,i===null?(t.next=t,Hl(r)):(t.next=i.next,i.next=t),r.interleaved=t,kt(e,n)}function Xi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pl(e,n)}}function Ru(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function jo(e,t,n,r){var i=e.updateQueue;Dt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,u=c.next;c.next=null,s===null?o=u:s.next=u,s=c;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=c))}if(o!==null){var h=i.baseState;s=0,d=u=c=null,a=o;do{var f=a.lane,v=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,x=a;switch(f=t,v=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){h=y.call(v,h,f);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,f=typeof y=="function"?y.call(v,h,f):y,f==null)break e;h=K({},h,f);break e;case 2:Dt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else v={eventTime:v,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=v,c=h):d=d.next=v,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(c=h),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);xn|=s,e.lanes=s,e.memoizedState=h}}function Iu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var mi={},ct=qt(mi),Xr=qt(mi),Jr=qt(mi);function un(e){if(e===mi)throw Error(_(174));return e}function Yl(e,t){switch(V(Jr,t),V(Xr,e),V(ct,mi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ua(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ua(t,e)}O(ct),V(ct,t)}function Jn(){O(ct),O(Xr),O(Jr)}function cp(e){un(Jr.current);var t=un(ct.current),n=ua(t,e.type);t!==n&&(V(Xr,e),V(ct,n))}function Kl(e){Xr.current===e&&(O(ct),O(Xr))}var H=qt(0);function To(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Cs=[];function Gl(){for(var e=0;e<Cs.length;e++)Cs[e]._workInProgressVersionPrimary=null;Cs.length=0}var Ji=jt.ReactCurrentDispatcher,Ps=jt.ReactCurrentBatchConfig,yn=0,Y=null,oe=null,ue=null,Eo=!1,Ar=!1,Zr=0,hy=0;function ge(){throw Error(_(321))}function ql(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rt(e[n],t[n]))return!1;return!0}function Ql(e,t,n,r,i,o){if(yn=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ji.current=e===null||e.memoizedState===null?gy:vy,e=n(r,i),Ar){o=0;do{if(Ar=!1,Zr=0,25<=o)throw Error(_(301));o+=1,ue=oe=null,t.updateQueue=null,Ji.current=yy,e=n(r,i)}while(Ar)}if(Ji.current=_o,t=oe!==null&&oe.next!==null,yn=0,ue=oe=Y=null,Eo=!1,t)throw Error(_(300));return e}function Xl(){var e=Zr!==0;return Zr=0,e}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?Y.memoizedState=ue=e:ue=ue.next=e,ue}function Ke(){if(oe===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=ue===null?Y.memoizedState:ue.next;if(t!==null)ue=t,oe=e;else{if(e===null)throw Error(_(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},ue===null?Y.memoizedState=ue=e:ue=ue.next=e}return ue}function ei(e,t){return typeof t=="function"?t(e):t}function Ns(e){var t=Ke(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=oe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,c=null,u=o;do{var d=u.lane;if((yn&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=h,s=r):c=c.next=h,Y.lanes|=d,xn|=d}u=u.next}while(u!==null&&u!==o);c===null?s=r:c.next=a,rt(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Y.lanes|=o,xn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function As(e){var t=Ke(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);rt(o,t.memoizedState)||(Ce=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function up(){}function dp(e,t){var n=Y,r=Ke(),i=t(),o=!rt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ce=!0),r=r.queue,Jl(pp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,ti(9,fp.bind(null,n,r,i,t),void 0,null),de===null)throw Error(_(349));yn&30||hp(n,t,i)}return i}function hp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function fp(e,t,n,r){t.value=n,t.getSnapshot=r,mp(t)&&gp(e)}function pp(e,t,n){return n(function(){mp(t)&&gp(e)})}function mp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rt(e,n)}catch{return!0}}function gp(e){var t=kt(e,1);t!==null&&nt(t,e,1,-1)}function Vu(e){var t=st();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:e},t.queue=e,e=e.dispatch=my.bind(null,Y,e),[t.memoizedState,e]}function ti(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vp(){return Ke().memoizedState}function Zi(e,t,n,r){var i=st();Y.flags|=e,i.memoizedState=ti(1|t,n,void 0,r===void 0?null:r)}function Qo(e,t,n,r){var i=Ke();r=r===void 0?null:r;var o=void 0;if(oe!==null){var s=oe.memoizedState;if(o=s.destroy,r!==null&&ql(r,s.deps)){i.memoizedState=ti(t,n,o,r);return}}Y.flags|=e,i.memoizedState=ti(1|t,n,o,r)}function Fu(e,t){return Zi(8390656,8,e,t)}function Jl(e,t){return Qo(2048,8,e,t)}function yp(e,t){return Qo(4,2,e,t)}function xp(e,t){return Qo(4,4,e,t)}function wp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kp(e,t,n){return n=n!=null?n.concat([e]):null,Qo(4,4,wp.bind(null,t,e),n)}function Zl(){}function Sp(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ql(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bp(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ql(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function jp(e,t,n){return yn&21?(rt(n,t)||(n=Cf(),Y.lanes|=n,xn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function fy(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=Ps.transition;Ps.transition={};try{e(!1),t()}finally{I=n,Ps.transition=r}}function Tp(){return Ke().memoizedState}function py(e,t,n){var r=Ut(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ep(e))_p(t,n);else if(n=ap(e,t,n,r),n!==null){var i=Te();nt(n,e,r,i),Dp(n,t,r)}}function my(e,t,n){var r=Ut(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ep(e))_p(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,rt(a,s)){var c=t.interleaved;c===null?(i.next=i,Hl(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=ap(e,t,i,r),n!==null&&(i=Te(),nt(n,e,r,i),Dp(n,t,r))}}function Ep(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function _p(e,t){Ar=Eo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Dp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pl(e,n)}}var _o={readContext:Ye,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},gy={readContext:Ye,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:Fu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Zi(4194308,4,wp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zi(4,2,e,t)},useMemo:function(e,t){var n=st();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=st();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=py.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:Vu,useDebugValue:Zl,useDeferredValue:function(e){return st().memoizedState=e},useTransition:function(){var e=Vu(!1),t=e[0];return e=fy.bind(null,e[1]),st().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=st();if(W){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),de===null)throw Error(_(349));yn&30||hp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Fu(pp.bind(null,r,o,e),[e]),r.flags|=2048,ti(9,fp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=st(),t=de.identifierPrefix;if(W){var n=gt,r=mt;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Zr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=hy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},vy={readContext:Ye,useCallback:Sp,useContext:Ye,useEffect:Jl,useImperativeHandle:kp,useInsertionEffect:yp,useLayoutEffect:xp,useMemo:bp,useReducer:Ns,useRef:vp,useState:function(){return Ns(ei)},useDebugValue:Zl,useDeferredValue:function(e){var t=Ke();return jp(t,oe.memoizedState,e)},useTransition:function(){var e=Ns(ei)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:up,useSyncExternalStore:dp,useId:Tp,unstable_isNewReconciler:!1},yy={readContext:Ye,useCallback:Sp,useContext:Ye,useEffect:Jl,useImperativeHandle:kp,useInsertionEffect:yp,useLayoutEffect:xp,useMemo:bp,useReducer:As,useRef:vp,useState:function(){return As(ei)},useDebugValue:Zl,useDeferredValue:function(e){var t=Ke();return oe===null?t.memoizedState=e:jp(t,oe.memoizedState,e)},useTransition:function(){var e=As(ei)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:up,useSyncExternalStore:dp,useId:Tp,unstable_isNewReconciler:!1};function Je(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Na(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Xo={isMounted:function(e){return(e=e._reactInternals)?Sn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Te(),i=Ut(e),o=vt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Ft(e,o,i),t!==null&&(nt(t,e,i,r),Xi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Te(),i=Ut(e),o=vt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ft(e,o,i),t!==null&&(nt(t,e,i,r),Xi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Te(),r=Ut(e),i=vt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ft(e,i,r),t!==null&&(nt(t,e,r,n),Xi(t,e,r))}};function Ou(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Kr(n,r)||!Kr(i,o):!0}function Cp(e,t,n){var r=!1,i=$t,o=t.contextType;return typeof o=="object"&&o!==null?o=Ye(o):(i=Ne(t)?gn:we.current,r=t.contextTypes,o=(r=r!=null)?qn(e,i):$t),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Xo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Uu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Xo.enqueueReplaceState(t,t.state,null)}function Aa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},$l(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ye(o):(o=Ne(t)?gn:we.current,i.context=qn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Na(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Xo.enqueueReplaceState(i,i.state,null),jo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Zn(e,t){try{var n="",r=t;do n+=Y0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ms(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ma(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var xy=typeof WeakMap=="function"?WeakMap:Map;function Pp(e,t,n){n=vt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Co||(Co=!0,Ba=r),Ma(e,t)},n}function Np(e,t,n){n=vt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ma(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ma(e,t),typeof r!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Wu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new xy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=My.bind(null,e,t,n),t.then(e,e))}function Bu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vt(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e)}var wy=jt.ReactCurrentOwner,Ce=!1;function Se(e,t,n,r){t.child=e===null?sp(t,null,n,r):Xn(t,e.child,n,r)}function $u(e,t,n,r,i){n=n.render;var o=t.ref;return $n(t,i),r=Ql(e,t,n,r,o,i),n=Xl(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,St(e,t,i)):(W&&n&&Vl(t),t.flags|=1,Se(e,t,r,i),t.child)}function Yu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ac(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ap(e,t,o,r,i)):(e=ro(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Kr,n(s,r)&&e.ref===t.ref)return St(e,t,i)}return t.flags|=1,e=Wt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Ap(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Kr(o,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,St(e,t,i)}return za(e,t,n,r,i)}function Mp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(Rn,Me),Me|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(Rn,Me),Me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,V(Rn,Me),Me|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,V(Rn,Me),Me|=r;return Se(e,t,i,n),t.child}function zp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function za(e,t,n,r,i){var o=Ne(n)?gn:we.current;return o=qn(t,o),$n(t,i),n=Ql(e,t,n,r,o,i),r=Xl(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,St(e,t,i)):(W&&r&&Vl(t),t.flags|=1,Se(e,t,n,i),t.child)}function Ku(e,t,n,r,i){if(Ne(n)){var o=!0;xo(t)}else o=!1;if($n(t,i),t.stateNode===null)eo(e,t),Cp(t,n,r),Aa(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ye(u):(u=Ne(n)?gn:we.current,u=qn(t,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||c!==u)&&Uu(t,s,r,u),Dt=!1;var f=t.memoizedState;s.state=f,jo(t,r,s,i),c=t.memoizedState,a!==r||f!==c||Pe.current||Dt?(typeof d=="function"&&(Na(t,n,d,r),c=t.memoizedState),(a=Dt||Ou(t,n,a,r,f,c,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,lp(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Je(t.type,a),s.props=u,h=t.pendingProps,f=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ye(c):(c=Ne(n)?gn:we.current,c=qn(t,c));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||f!==c)&&Uu(t,s,r,c),Dt=!1,f=t.memoizedState,s.state=f,jo(t,r,s,i);var y=t.memoizedState;a!==h||f!==y||Pe.current||Dt?(typeof v=="function"&&(Na(t,n,v,r),y=t.memoizedState),(u=Dt||Ou(t,n,u,r,f,y,c)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return La(e,t,n,r,o,i)}function La(e,t,n,r,i,o){zp(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Au(t,n,!1),St(e,t,o);r=t.stateNode,wy.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Xn(t,e.child,null,o),t.child=Xn(t,null,a,o)):Se(e,t,a,o),t.memoizedState=r.state,i&&Au(t,n,!0),t.child}function Lp(e){var t=e.stateNode;t.pendingContext?Nu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Nu(e,t.context,!1),Yl(e,t.containerInfo)}function Gu(e,t,n,r,i){return Qn(),Ol(i),t.flags|=256,Se(e,t,n,r),t.child}var Ra={dehydrated:null,treeContext:null,retryLane:0};function Ia(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rp(e,t,n){var r=t.pendingProps,i=H.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),V(H,i&1),e===null)return Ca(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=es(s,r,0,null),e=pn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ia(n),t.memoizedState=Ra,e):ec(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ky(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Wt(i,c),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Wt(a,o):(o=pn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Ia(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Ra,r}return o=e.child,e=o.sibling,r=Wt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ec(e,t){return t=es({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ii(e,t,n,r){return r!==null&&Ol(r),Xn(t,e.child,null,n),e=ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ky(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Ms(Error(_(422))),Ii(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=es({mode:"visible",children:r.children},i,0,null),o=pn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Xn(t,e.child,null,s),t.child.memoizedState=Ia(s),t.memoizedState=Ra,o);if(!(t.mode&1))return Ii(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(_(419)),r=Ms(o,r,void 0),Ii(e,t,s,r)}if(a=(s&e.childLanes)!==0,Ce||a){if(r=de,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,kt(e,i),nt(r,e,i,-1))}return sc(),r=Ms(Error(_(421))),Ii(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=zy.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ze=Vt(i.nextSibling),Le=t,W=!0,et=null,e!==null&&(Oe[Ue++]=mt,Oe[Ue++]=gt,Oe[Ue++]=vn,mt=e.id,gt=e.overflow,vn=t),t=ec(t,r.children),t.flags|=4096,t)}function qu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Pa(e.return,t,n)}function zs(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ip(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Se(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qu(e,n,t);else if(e.tag===19)qu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(H,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&To(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),zs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&To(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}zs(t,!0,n,null,o);break;case"together":zs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function eo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function St(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=Wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Sy(e,t,n){switch(t.tag){case 3:Lp(t),Qn();break;case 5:cp(t);break;case 1:Ne(t.type)&&xo(t);break;case 4:Yl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;V(So,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?Rp(e,t,n):(V(H,H.current&1),e=St(e,t,n),e!==null?e.sibling:null);V(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ip(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,Mp(e,t,n)}return St(e,t,n)}var Vp,Va,Fp,Op;Vp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Va=function(){};Fp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,un(ct.current);var o=null;switch(n){case"input":i=sa(e,i),r=sa(e,r),o=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),o=[];break;case"textarea":i=ca(e,i),r=ca(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=vo)}da(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Or.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&a[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Or.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&F("scroll",e),o||a===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Op=function(e,t,n,r){n!==r&&(t.flags|=4)};function yr(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function by(e,t,n){var r=t.pendingProps;switch(Fl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Ne(t.type)&&yo(),ve(t),null;case 3:return r=t.stateNode,Jn(),O(Pe),O(we),Gl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Li(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,et!==null&&(Ya(et),et=null))),Va(e,t),ve(t),null;case 5:Kl(t);var i=un(Jr.current);if(n=t.type,e!==null&&t.stateNode!=null)Fp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return ve(t),null}if(e=un(ct.current),Li(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[at]=t,r[Qr]=o,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(i=0;i<jr.length;i++)F(jr[i],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":iu(r,o),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},F("invalid",r);break;case"textarea":su(r,o),F("invalid",r)}da(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&zi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&zi(r.textContent,a,e),i=["children",""+a]):Or.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&F("scroll",r)}switch(n){case"input":Ei(r),ou(r,o,!0);break;case"textarea":Ei(r),au(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=vo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[at]=t,e[Qr]=r,Vp(e,t,!1,!1),t.stateNode=e;e:{switch(s=ha(n,r),n){case"dialog":F("cancel",e),F("close",e),i=r;break;case"iframe":case"object":case"embed":F("load",e),i=r;break;case"video":case"audio":for(i=0;i<jr.length;i++)F(jr[i],e);i=r;break;case"source":F("error",e),i=r;break;case"img":case"image":case"link":F("error",e),F("load",e),i=r;break;case"details":F("toggle",e),i=r;break;case"input":iu(e,r),i=sa(e,r),F("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),F("invalid",e);break;case"textarea":su(e,r),i=ca(e,r),F("invalid",e);break;default:i=r}da(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var c=a[o];o==="style"?vf(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&mf(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ur(e,c):typeof c=="number"&&Ur(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Or.hasOwnProperty(o)?c!=null&&o==="onScroll"&&F("scroll",e):c!=null&&jl(e,o,c,s))}switch(n){case"input":Ei(e),ou(e,r,!1);break;case"textarea":Ei(e),au(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ht(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Un(e,!!r.multiple,o,!1):r.defaultValue!=null&&Un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=vo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)Op(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=un(Jr.current),un(ct.current),Li(t)){if(r=t.stateNode,n=t.memoizedProps,r[at]=t,(o=r.nodeValue!==n)&&(e=Le,e!==null))switch(e.tag){case 3:zi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[at]=t,t.stateNode=r}return ve(t),null;case 13:if(O(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&ze!==null&&t.mode&1&&!(t.flags&128))ip(),Qn(),t.flags|=98560,o=!1;else if(o=Li(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[at]=t}else Qn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),o=!1}else et!==null&&(Ya(et),et=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?ae===0&&(ae=3):sc())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return Jn(),Va(e,t),e===null&&Gr(t.stateNode.containerInfo),ve(t),null;case 10:return Bl(t.type._context),ve(t),null;case 17:return Ne(t.type)&&yo(),ve(t),null;case 19:if(O(H),o=t.memoizedState,o===null)return ve(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)yr(o,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=To(e),s!==null){for(t.flags|=128,yr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(H,H.current&1|2),t.child}e=e.sibling}o.tail!==null&&Z()>er&&(t.flags|=128,r=!0,yr(o,!1),t.lanes=4194304)}else{if(!r)if(e=To(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!W)return ve(t),null}else 2*Z()-o.renderingStartTime>er&&n!==1073741824&&(t.flags|=128,r=!0,yr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Z(),t.sibling=null,n=H.current,V(H,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return oc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Me&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function jy(e,t){switch(Fl(t),t.tag){case 1:return Ne(t.type)&&yo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Jn(),O(Pe),O(we),Gl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Kl(t),null;case 13:if(O(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Qn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(H),null;case 4:return Jn(),null;case 10:return Bl(t.type._context),null;case 22:case 23:return oc(),null;case 24:return null;default:return null}}var Vi=!1,ye=!1,Ty=typeof WeakSet=="function"?WeakSet:Set,P=null;function Ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function Fa(e,t,n){try{n()}catch(r){q(e,t,r)}}var Qu=!1;function Ey(e,t){if(Sa=po,e=$f(),Il(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,c=-1,u=0,d=0,h=e,f=null;t:for(;;){for(var v;h!==n||i!==0&&h.nodeType!==3||(a=s+i),h!==o||r!==0&&h.nodeType!==3||(c=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(v=h.firstChild)!==null;)f=h,h=v;for(;;){if(h===e)break t;if(f===n&&++u===i&&(a=s),f===o&&++d===r&&(c=s),(v=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=v}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ba={focusedElem:e,selectionRange:n},po=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,S=y.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?x:Je(t.type,x),S);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(k){q(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return y=Qu,Qu=!1,y}function Mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Fa(t,n,o)}i=i.next}while(i!==r)}}function Jo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Oa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Up(e){var t=e.alternate;t!==null&&(e.alternate=null,Up(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[at],delete t[Qr],delete t[Ea],delete t[ly],delete t[cy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wp(e){return e.tag===5||e.tag===3||e.tag===4}function Xu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ua(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=vo));else if(r!==4&&(e=e.child,e!==null))for(Ua(e,t,n),e=e.sibling;e!==null;)Ua(e,t,n),e=e.sibling}function Wa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Wa(e,t,n),e=e.sibling;e!==null;)Wa(e,t,n),e=e.sibling}var he=null,Ze=!1;function Tt(e,t,n){for(n=n.child;n!==null;)Bp(e,t,n),n=n.sibling}function Bp(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Ho,n)}catch{}switch(n.tag){case 5:ye||Ln(n,t);case 6:var r=he,i=Ze;he=null,Tt(e,t,n),he=r,Ze=i,he!==null&&(Ze?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(Ze?(e=he,n=n.stateNode,e.nodeType===8?_s(e.parentNode,n):e.nodeType===1&&_s(e,n),$r(e)):_s(he,n.stateNode));break;case 4:r=he,i=Ze,he=n.stateNode.containerInfo,Ze=!0,Tt(e,t,n),he=r,Ze=i;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Fa(n,t,s),i=i.next}while(i!==r)}Tt(e,t,n);break;case 1:if(!ye&&(Ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){q(n,t,a)}Tt(e,t,n);break;case 21:Tt(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,Tt(e,t,n),ye=r):Tt(e,t,n);break;default:Tt(e,t,n)}}function Ju(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ty),t.forEach(function(r){var i=Ly.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:he=a.stateNode,Ze=!1;break e;case 3:he=a.stateNode.containerInfo,Ze=!0;break e;case 4:he=a.stateNode.containerInfo,Ze=!0;break e}a=a.return}if(he===null)throw Error(_(160));Bp(o,s,i),he=null,Ze=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){q(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hp(t,e),t=t.sibling}function Hp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qe(t,e),ot(e),r&4){try{Mr(3,e,e.return),Jo(3,e)}catch(x){q(e,e.return,x)}try{Mr(5,e,e.return)}catch(x){q(e,e.return,x)}}break;case 1:qe(t,e),ot(e),r&512&&n!==null&&Ln(n,n.return);break;case 5:if(qe(t,e),ot(e),r&512&&n!==null&&Ln(n,n.return),e.flags&32){var i=e.stateNode;try{Ur(i,"")}catch(x){q(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&hf(i,o),ha(a,s);var u=ha(a,o);for(s=0;s<c.length;s+=2){var d=c[s],h=c[s+1];d==="style"?vf(i,h):d==="dangerouslySetInnerHTML"?mf(i,h):d==="children"?Ur(i,h):jl(i,d,h,u)}switch(a){case"input":aa(i,o);break;case"textarea":ff(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Un(i,!!o.multiple,v,!1):f!==!!o.multiple&&(o.defaultValue!=null?Un(i,!!o.multiple,o.defaultValue,!0):Un(i,!!o.multiple,o.multiple?[]:"",!1))}i[Qr]=o}catch(x){q(e,e.return,x)}}break;case 6:if(qe(t,e),ot(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){q(e,e.return,x)}}break;case 3:if(qe(t,e),ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$r(t.containerInfo)}catch(x){q(e,e.return,x)}break;case 4:qe(t,e),ot(e);break;case 13:qe(t,e),ot(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(rc=Z())),r&4&&Ju(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(u=ye)||d,qe(t,e),ye=u):qe(t,e),ot(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(P=e,d=e.child;d!==null;){for(h=P=d;P!==null;){switch(f=P,v=f.child,f.tag){case 0:case 11:case 14:case 15:Mr(4,f,f.return);break;case 1:Ln(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){q(r,n,x)}}break;case 5:Ln(f,f.return);break;case 22:if(f.memoizedState!==null){ed(h);continue}}v!==null?(v.return=f,P=v):ed(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,c=h.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=gf("display",s))}catch(x){q(e,e.return,x)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(x){q(e,e.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:qe(t,e),ot(e),r&4&&Ju(e);break;case 21:break;default:qe(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wp(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ur(i,""),r.flags&=-33);var o=Xu(e);Wa(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Xu(e);Ua(e,a,s);break;default:throw Error(_(161))}}catch(c){q(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _y(e,t,n){P=e,$p(e)}function $p(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Vi;if(!s){var a=i.alternate,c=a!==null&&a.memoizedState!==null||ye;a=Vi;var u=ye;if(Vi=s,(ye=c)&&!u)for(P=i;P!==null;)s=P,c=s.child,s.tag===22&&s.memoizedState!==null?td(i):c!==null?(c.return=s,P=c):td(i);for(;o!==null;)P=o,$p(o),o=o.sibling;P=i,Vi=a,ye=u}Zu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,P=o):Zu(e)}}function Zu(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||Jo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Je(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Iu(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Iu(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&$r(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}ye||t.flags&512&&Oa(t)}catch(f){q(t,t.return,f)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function ed(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function td(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Jo(4,t)}catch(c){q(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){q(t,i,c)}}var o=t.return;try{Oa(t)}catch(c){q(t,o,c)}break;case 5:var s=t.return;try{Oa(t)}catch(c){q(t,s,c)}}}catch(c){q(t,t.return,c)}if(t===e){P=null;break}var a=t.sibling;if(a!==null){a.return=t.return,P=a;break}P=t.return}}var Dy=Math.ceil,Do=jt.ReactCurrentDispatcher,tc=jt.ReactCurrentOwner,He=jt.ReactCurrentBatchConfig,R=0,de=null,re=null,pe=0,Me=0,Rn=qt(0),ae=0,ni=null,xn=0,Zo=0,nc=0,zr=null,De=null,rc=0,er=1/0,ft=null,Co=!1,Ba=null,Ot=null,Fi=!1,At=null,Po=0,Lr=0,Ha=null,to=-1,no=0;function Te(){return R&6?Z():to!==-1?to:to=Z()}function Ut(e){return e.mode&1?R&2&&pe!==0?pe&-pe:dy.transition!==null?(no===0&&(no=Cf()),no):(e=I,e!==0||(e=window.event,e=e===void 0?16:Rf(e.type)),e):1}function nt(e,t,n,r){if(50<Lr)throw Lr=0,Ha=null,Error(_(185));hi(e,n,r),(!(R&2)||e!==de)&&(e===de&&(!(R&2)&&(Zo|=n),ae===4&&Pt(e,pe)),Ae(e,r),n===1&&R===0&&!(t.mode&1)&&(er=Z()+500,qo&&Qt()))}function Ae(e,t){var n=e.callbackNode;dv(e,t);var r=fo(e,e===de?pe:0);if(r===0)n!==null&&uu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&uu(n),t===1)e.tag===0?uy(nd.bind(null,e)):tp(nd.bind(null,e)),sy(function(){!(R&6)&&Qt()}),n=null;else{switch(Pf(r)){case 1:n=Cl;break;case 4:n=_f;break;case 16:n=ho;break;case 536870912:n=Df;break;default:n=ho}n=Zp(n,Yp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Yp(e,t){if(to=-1,no=0,R&6)throw Error(_(327));var n=e.callbackNode;if(Yn()&&e.callbackNode!==n)return null;var r=fo(e,e===de?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=No(e,r);else{t=r;var i=R;R|=2;var o=Gp();(de!==e||pe!==t)&&(ft=null,er=Z()+500,fn(e,t));do try{Ny();break}catch(a){Kp(e,a)}while(!0);Wl(),Do.current=o,R=i,re!==null?t=0:(de=null,pe=0,t=ae)}if(t!==0){if(t===2&&(i=va(e),i!==0&&(r=i,t=$a(e,i))),t===1)throw n=ni,fn(e,0),Pt(e,r),Ae(e,Z()),n;if(t===6)Pt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Cy(i)&&(t=No(e,r),t===2&&(o=va(e),o!==0&&(r=o,t=$a(e,o))),t===1))throw n=ni,fn(e,0),Pt(e,r),Ae(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:sn(e,De,ft);break;case 3:if(Pt(e,r),(r&130023424)===r&&(t=rc+500-Z(),10<t)){if(fo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Te(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ta(sn.bind(null,e,De,ft),t);break}sn(e,De,ft);break;case 4:if(Pt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-tt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Dy(r/1960))-r,10<r){e.timeoutHandle=Ta(sn.bind(null,e,De,ft),r);break}sn(e,De,ft);break;case 5:sn(e,De,ft);break;default:throw Error(_(329))}}}return Ae(e,Z()),e.callbackNode===n?Yp.bind(null,e):null}function $a(e,t){var n=zr;return e.current.memoizedState.isDehydrated&&(fn(e,t).flags|=256),e=No(e,t),e!==2&&(t=De,De=n,t!==null&&Ya(t)),e}function Ya(e){De===null?De=e:De.push.apply(De,e)}function Cy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!rt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pt(e,t){for(t&=~nc,t&=~Zo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),r=1<<n;e[n]=-1,t&=~r}}function nd(e){if(R&6)throw Error(_(327));Yn();var t=fo(e,0);if(!(t&1))return Ae(e,Z()),null;var n=No(e,t);if(e.tag!==0&&n===2){var r=va(e);r!==0&&(t=r,n=$a(e,r))}if(n===1)throw n=ni,fn(e,0),Pt(e,t),Ae(e,Z()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sn(e,De,ft),Ae(e,Z()),null}function ic(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(er=Z()+500,qo&&Qt())}}function wn(e){At!==null&&At.tag===0&&!(R&6)&&Yn();var t=R;R|=1;var n=He.transition,r=I;try{if(He.transition=null,I=1,e)return e()}finally{I=r,He.transition=n,R=t,!(R&6)&&Qt()}}function oc(){Me=Rn.current,O(Rn)}function fn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,oy(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(Fl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&yo();break;case 3:Jn(),O(Pe),O(we),Gl();break;case 5:Kl(r);break;case 4:Jn();break;case 13:O(H);break;case 19:O(H);break;case 10:Bl(r.type._context);break;case 22:case 23:oc()}n=n.return}if(de=e,re=e=Wt(e.current,null),pe=Me=t,ae=0,ni=null,nc=Zo=xn=0,De=zr=null,cn!==null){for(t=0;t<cn.length;t++)if(n=cn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}cn=null}return e}function Kp(e,t){do{var n=re;try{if(Wl(),Ji.current=_o,Eo){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Eo=!1}if(yn=0,ue=oe=Y=null,Ar=!1,Zr=0,tc.current=null,n===null||n.return===null){ae=1,ni=t,re=null;break}e:{var o=e,s=n.return,a=n,c=t;if(t=pe,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Bu(s);if(v!==null){v.flags&=-257,Hu(v,s,a,o,t),v.mode&1&&Wu(o,u,t),t=v,c=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(c),t.updateQueue=x}else y.add(c);break e}else{if(!(t&1)){Wu(o,u,t),sc();break e}c=Error(_(426))}}else if(W&&a.mode&1){var S=Bu(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Hu(S,s,a,o,t),Ol(Zn(c,a));break e}}o=c=Zn(c,a),ae!==4&&(ae=2),zr===null?zr=[o]:zr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=Pp(o,c,t);Ru(o,g);break e;case 1:a=c;var m=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ot===null||!Ot.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=Np(o,a,t);Ru(o,k);break e}}o=o.return}while(o!==null)}Qp(n)}catch(b){t=b,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function Gp(){var e=Do.current;return Do.current=_o,e===null?_o:e}function sc(){(ae===0||ae===3||ae===2)&&(ae=4),de===null||!(xn&268435455)&&!(Zo&268435455)||Pt(de,pe)}function No(e,t){var n=R;R|=2;var r=Gp();(de!==e||pe!==t)&&(ft=null,fn(e,t));do try{Py();break}catch(i){Kp(e,i)}while(!0);if(Wl(),R=n,Do.current=r,re!==null)throw Error(_(261));return de=null,pe=0,ae}function Py(){for(;re!==null;)qp(re)}function Ny(){for(;re!==null&&!nv();)qp(re)}function qp(e){var t=Jp(e.alternate,e,Me);e.memoizedProps=e.pendingProps,t===null?Qp(e):re=t,tc.current=null}function Qp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=jy(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,re=null;return}}else if(n=by(n,t,Me),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);ae===0&&(ae=5)}function sn(e,t,n){var r=I,i=He.transition;try{He.transition=null,I=1,Ay(e,t,n,r)}finally{He.transition=i,I=r}return null}function Ay(e,t,n,r){do Yn();while(At!==null);if(R&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(hv(e,o),e===de&&(re=de=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fi||(Fi=!0,Zp(ho,function(){return Yn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=He.transition,He.transition=null;var s=I;I=1;var a=R;R|=4,tc.current=null,Ey(e,n),Hp(n,e),Jv(ba),po=!!Sa,ba=Sa=null,e.current=n,_y(n),rv(),R=a,I=s,He.transition=o}else e.current=n;if(Fi&&(Fi=!1,At=e,Po=i),o=e.pendingLanes,o===0&&(Ot=null),sv(n.stateNode),Ae(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Co)throw Co=!1,e=Ba,Ba=null,e;return Po&1&&e.tag!==0&&Yn(),o=e.pendingLanes,o&1?e===Ha?Lr++:(Lr=0,Ha=e):Lr=0,Qt(),null}function Yn(){if(At!==null){var e=Pf(Po),t=He.transition,n=I;try{if(He.transition=null,I=16>e?16:e,At===null)var r=!1;else{if(e=At,At=null,Po=0,R&6)throw Error(_(331));var i=R;for(R|=4,P=e.current;P!==null;){var o=P,s=o.child;if(P.flags&16){var a=o.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(P=u;P!==null;){var d=P;switch(d.tag){case 0:case 11:case 15:Mr(8,d,o)}var h=d.child;if(h!==null)h.return=d,P=h;else for(;P!==null;){d=P;var f=d.sibling,v=d.return;if(Up(d),d===u){P=null;break}if(f!==null){f.return=v,P=f;break}P=v}}}var y=o.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}P=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,P=s;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Mr(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,P=g;break e}P=o.return}}var m=e.current;for(P=m;P!==null;){s=P;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,P=p;else e:for(s=m;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Jo(9,a)}}catch(b){q(a,a.return,b)}if(a===s){P=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,P=k;break e}P=a.return}}if(R=i,Qt(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Ho,e)}catch{}r=!0}return r}finally{I=n,He.transition=t}}return!1}function rd(e,t,n){t=Zn(n,t),t=Pp(e,t,1),e=Ft(e,t,1),t=Te(),e!==null&&(hi(e,1,t),Ae(e,t))}function q(e,t,n){if(e.tag===3)rd(e,e,n);else for(;t!==null;){if(t.tag===3){rd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ot===null||!Ot.has(r))){e=Zn(n,e),e=Np(t,e,1),t=Ft(t,e,1),e=Te(),t!==null&&(hi(t,1,e),Ae(t,e));break}}t=t.return}}function My(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Te(),e.pingedLanes|=e.suspendedLanes&n,de===e&&(pe&n)===n&&(ae===4||ae===3&&(pe&130023424)===pe&&500>Z()-rc?fn(e,0):nc|=n),Ae(e,t)}function Xp(e,t){t===0&&(e.mode&1?(t=Ci,Ci<<=1,!(Ci&130023424)&&(Ci=4194304)):t=1);var n=Te();e=kt(e,t),e!==null&&(hi(e,t,n),Ae(e,n))}function zy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xp(e,n)}function Ly(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Xp(e,n)}var Jp;Jp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pe.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,Sy(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,W&&t.flags&1048576&&np(t,ko,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;eo(e,t),e=t.pendingProps;var i=qn(t,we.current);$n(t,n),i=Ql(null,t,r,e,i,n);var o=Xl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(o=!0,xo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$l(t),i.updater=Xo,t.stateNode=i,i._reactInternals=t,Aa(t,r,e,n),t=La(null,t,r,!0,o,n)):(t.tag=0,W&&o&&Vl(t),Se(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(eo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Iy(r),e=Je(r,e),i){case 0:t=za(null,t,r,e,n);break e;case 1:t=Ku(null,t,r,e,n);break e;case 11:t=$u(null,t,r,e,n);break e;case 14:t=Yu(null,t,r,Je(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Je(r,i),za(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Je(r,i),Ku(e,t,r,i,n);case 3:e:{if(Lp(t),e===null)throw Error(_(387));r=t.pendingProps,o=t.memoizedState,i=o.element,lp(e,t),jo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Zn(Error(_(423)),t),t=Gu(e,t,r,n,i);break e}else if(r!==i){i=Zn(Error(_(424)),t),t=Gu(e,t,r,n,i);break e}else for(ze=Vt(t.stateNode.containerInfo.firstChild),Le=t,W=!0,et=null,n=sp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qn(),r===i){t=St(e,t,n);break e}Se(e,t,r,n)}t=t.child}return t;case 5:return cp(t),e===null&&Ca(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,ja(r,i)?s=null:o!==null&&ja(r,o)&&(t.flags|=32),zp(e,t),Se(e,t,s,n),t.child;case 6:return e===null&&Ca(t),null;case 13:return Rp(e,t,n);case 4:return Yl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Xn(t,null,r,n):Se(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Je(r,i),$u(e,t,r,i,n);case 7:return Se(e,t,t.pendingProps,n),t.child;case 8:return Se(e,t,t.pendingProps.children,n),t.child;case 12:return Se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,V(So,r._currentValue),r._currentValue=s,o!==null)if(rt(o.value,s)){if(o.children===i.children&&!Pe.current){t=St(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=vt(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Pa(o.return,n,t),a.lanes|=n;break}c=c.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(_(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Pa(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Se(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,$n(t,n),i=Ye(i),r=r(i),t.flags|=1,Se(e,t,r,n),t.child;case 14:return r=t.type,i=Je(r,t.pendingProps),i=Je(r.type,i),Yu(e,t,r,i,n);case 15:return Ap(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Je(r,i),eo(e,t),t.tag=1,Ne(r)?(e=!0,xo(t)):e=!1,$n(t,n),Cp(t,r,i),Aa(t,r,i,n),La(null,t,r,!0,e,n);case 19:return Ip(e,t,n);case 22:return Mp(e,t,n)}throw Error(_(156,t.tag))};function Zp(e,t){return Ef(e,t)}function Ry(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,t,n,r){return new Ry(e,t,n,r)}function ac(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Iy(e){if(typeof e=="function")return ac(e)?1:0;if(e!=null){if(e=e.$$typeof,e===El)return 11;if(e===_l)return 14}return 2}function Wt(e,t){var n=e.alternate;return n===null?(n=We(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ro(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")ac(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case En:return pn(n.children,i,o,t);case Tl:s=8,i|=8;break;case na:return e=We(12,n,t,i|2),e.elementType=na,e.lanes=o,e;case ra:return e=We(13,n,t,i),e.elementType=ra,e.lanes=o,e;case ia:return e=We(19,n,t,i),e.elementType=ia,e.lanes=o,e;case cf:return es(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case af:s=10;break e;case lf:s=9;break e;case El:s=11;break e;case _l:s=14;break e;case _t:s=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=We(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function pn(e,t,n,r){return e=We(7,e,r,t),e.lanes=n,e}function es(e,t,n,r){return e=We(22,e,r,t),e.elementType=cf,e.lanes=n,e.stateNode={isHidden:!1},e}function Ls(e,t,n){return e=We(6,e,null,t),e.lanes=n,e}function Rs(e,t,n){return t=We(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Vy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gs(0),this.expirationTimes=gs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function lc(e,t,n,r,i,o,s,a,c){return e=new Vy(e,t,n,a,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=We(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$l(o),e}function Fy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function em(e){if(!e)return $t;e=e._reactInternals;e:{if(Sn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Ne(n))return ep(e,n,t)}return t}function tm(e,t,n,r,i,o,s,a,c){return e=lc(n,r,!0,e,i,o,s,a,c),e.context=em(null),n=e.current,r=Te(),i=Ut(n),o=vt(r,i),o.callback=t??null,Ft(n,o,i),e.current.lanes=i,hi(e,i,r),Ae(e,r),e}function ts(e,t,n,r){var i=t.current,o=Te(),s=Ut(i);return n=em(n),t.context===null?t.context=n:t.pendingContext=n,t=vt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(i,t,s),e!==null&&(nt(e,i,s,o),Xi(e,i,s)),s}function Ao(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function id(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cc(e,t){id(e,t),(e=e.alternate)&&id(e,t)}function Oy(){return null}var nm=typeof reportError=="function"?reportError:function(e){console.error(e)};function uc(e){this._internalRoot=e}ns.prototype.render=uc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));ts(e,t,null,null)};ns.prototype.unmount=uc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wn(function(){ts(null,e,null,null)}),t[wt]=null}};function ns(e){this._internalRoot=e}ns.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ct.length&&t!==0&&t<Ct[n].priority;n++);Ct.splice(n,0,e),n===0&&Lf(e)}};function dc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function rs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function od(){}function Uy(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ao(s);o.call(u)}}var s=tm(t,r,e,0,null,!1,!1,"",od);return e._reactRootContainer=s,e[wt]=s.current,Gr(e.nodeType===8?e.parentNode:e),wn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ao(c);a.call(u)}}var c=lc(e,0,!1,null,null,!1,!1,"",od);return e._reactRootContainer=c,e[wt]=c.current,Gr(e.nodeType===8?e.parentNode:e),wn(function(){ts(t,c,n,r)}),c}function is(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var c=Ao(s);a.call(c)}}ts(t,s,e,i)}else s=Uy(n,t,e,i,r);return Ao(s)}Nf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=br(t.pendingLanes);n!==0&&(Pl(t,n|1),Ae(t,Z()),!(R&6)&&(er=Z()+500,Qt()))}break;case 13:wn(function(){var r=kt(e,1);if(r!==null){var i=Te();nt(r,e,1,i)}}),cc(e,1)}};Nl=function(e){if(e.tag===13){var t=kt(e,134217728);if(t!==null){var n=Te();nt(t,e,134217728,n)}cc(e,134217728)}};Af=function(e){if(e.tag===13){var t=Ut(e),n=kt(e,t);if(n!==null){var r=Te();nt(n,e,t,r)}cc(e,t)}};Mf=function(){return I};zf=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};pa=function(e,t,n){switch(t){case"input":if(aa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Go(r);if(!i)throw Error(_(90));df(r),aa(r,i)}}}break;case"textarea":ff(e,n);break;case"select":t=n.value,t!=null&&Un(e,!!n.multiple,t,!1)}};wf=ic;kf=wn;var Wy={usingClientEntryPoint:!1,Events:[pi,Pn,Go,yf,xf,ic]},xr={findFiberByHostInstance:ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},By={bundleType:xr.bundleType,version:xr.version,rendererPackageName:xr.rendererPackageName,rendererConfig:xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=jf(e),e===null?null:e.stateNode},findFiberByHostInstance:xr.findFiberByHostInstance||Oy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oi.isDisabled&&Oi.supportsFiber)try{Ho=Oi.inject(By),lt=Oi}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wy;Ie.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dc(t))throw Error(_(200));return Fy(e,t,null,n)};Ie.createRoot=function(e,t){if(!dc(e))throw Error(_(299));var n=!1,r="",i=nm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=lc(e,1,!1,null,null,n,!1,r,i),e[wt]=t.current,Gr(e.nodeType===8?e.parentNode:e),new uc(t)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=jf(t),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return wn(e)};Ie.hydrate=function(e,t,n){if(!rs(t))throw Error(_(200));return is(null,e,t,!0,n)};Ie.hydrateRoot=function(e,t,n){if(!dc(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=nm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=tm(t,null,e,1,n??null,i,!1,o,s),e[wt]=t.current,Gr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ns(t)};Ie.render=function(e,t,n){if(!rs(t))throw Error(_(200));return is(null,e,t,!1,n)};Ie.unmountComponentAtNode=function(e){if(!rs(e))throw Error(_(40));return e._reactRootContainer?(wn(function(){is(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1};Ie.unstable_batchedUpdates=ic;Ie.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!rs(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return is(e,t,n,!1,r)};Ie.version="18.3.1-next-f1338f8080-20240426";function rm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rm)}catch(e){console.error(e)}}rm(),nf.exports=Ie;var Hy=nf.exports,im,sd=Hy;im=sd.createRoot,sd.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ri(){return ri=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ri.apply(null,arguments)}var Mt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Mt||(Mt={}));const ad="popstate";function $y(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Ka("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Mo(i)}return Ky(t,n,null,e)}function te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function om(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Yy(){return Math.random().toString(36).substr(2,8)}function ld(e,t){return{usr:e.state,key:e.key,idx:t}}function Ka(e,t,n,r){return n===void 0&&(n=null),ri({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?sr(t):t,{state:n,key:t&&t.key||r||Yy()})}function Mo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function sr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ky(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Mt.Pop,c=null,u=d();u==null&&(u=0,s.replaceState(ri({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function h(){a=Mt.Pop;let S=d(),g=S==null?null:S-u;u=S,c&&c({action:a,location:x.location,delta:g})}function f(S,g){a=Mt.Push;let m=Ka(x.location,S,g);u=d()+1;let p=ld(m,u),k=x.createHref(m);try{s.pushState(p,"",k)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(k)}o&&c&&c({action:a,location:x.location,delta:1})}function v(S,g){a=Mt.Replace;let m=Ka(x.location,S,g);u=d();let p=ld(m,u),k=x.createHref(m);s.replaceState(p,"",k),o&&c&&c({action:a,location:x.location,delta:0})}function y(S){let g=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof S=="string"?S:Mo(S);return m=m.replace(/ $/,"%20"),te(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let x={get action(){return a},get location(){return e(i,s)},listen(S){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(ad,h),c=S,()=>{i.removeEventListener(ad,h),c=null}},createHref(S){return t(i,S)},createURL:y,encodeLocation(S){let g=y(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:v,go(S){return s.go(S)}};return x}var cd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(cd||(cd={}));function Gy(e,t,n){return n===void 0&&(n="/"),qy(e,t,n)}function qy(e,t,n,r){let i=typeof t=="string"?sr(t):t,o=hc(i.pathname||"/",n);if(o==null)return null;let s=sm(e);Qy(s);let a=null,c=lx(o);for(let u=0;a==null&&u<s.length;++u)a=ox(s[u],c);return a}function sm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let c={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};c.relativePath.startsWith("/")&&(te(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Bt([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(te(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),sm(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:rx(u,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let c of am(o.path))i(o,s,c)}),t}function am(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=am(r.join("/")),a=[];return a.push(...s.map(c=>c===""?o:[o,c].join("/"))),i&&a.push(...s),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function Qy(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ix(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Xy=/^:[\w-]+$/,Jy=3,Zy=2,ex=1,tx=10,nx=-2,ud=e=>e==="*";function rx(e,t){let n=e.split("/"),r=n.length;return n.some(ud)&&(r+=nx),t&&(r+=Zy),n.filter(i=>!ud(i)).reduce((i,o)=>i+(Xy.test(o)?Jy:o===""?ex:tx),r)}function ix(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function ox(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let c=r[a],u=a===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",h=sx({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),f=c.route;if(!h)return null;Object.assign(i,h.params),s.push({params:i,pathname:Bt([o,h.pathname]),pathnameBase:dx(Bt([o,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(o=Bt([o,h.pathnameBase]))}return s}function sx(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ax(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,h)=>{let{paramName:f,isOptional:v}=d;if(f==="*"){let x=a[h]||"";s=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const y=a[h];return v&&!y?u[f]=void 0:u[f]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function ax(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),om(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function lx(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return om(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function hc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function cx(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?sr(e):e,o;return n?(n=lm(n),n.startsWith("/")?o=dd(n.substring(1),"/"):o=dd(n,t)):o=t,{pathname:o,search:hx(r),hash:fx(i)}}function dd(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Is(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ux(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function fc(e,t){let n=ux(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function pc(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=sr(e):(i=ri({},e),te(!i.pathname||!i.pathname.includes("?"),Is("?","pathname","search",i)),te(!i.pathname||!i.pathname.includes("#"),Is("#","pathname","hash",i)),te(!i.search||!i.search.includes("#"),Is("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let h=t.length-1;if(!r&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),h-=1;i.pathname=f.join("/")}a=h>=0?t[h]:"/"}let c=cx(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const lm=e=>e.replace(/\/\/+/g,"/"),Bt=e=>lm(e.join("/")),dx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),hx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,fx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function px(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const cm=["post","put","patch","delete"];new Set(cm);const mx=["get",...cm];new Set(mx);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ii.apply(null,arguments)}const mc=w.createContext(null),gx=w.createContext(null),Xt=w.createContext(null),os=w.createContext(null),Jt=w.createContext({outlet:null,matches:[],isDataRoute:!1}),um=w.createContext(null);function vx(e,t){let{relative:n}=t===void 0?{}:t;ar()||te(!1);let{basename:r,navigator:i}=w.useContext(Xt),{hash:o,pathname:s,search:a}=fm(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:Bt([r,s])),i.createHref({pathname:c,search:a,hash:o})}function ar(){return w.useContext(os)!=null}function bn(){return ar()||te(!1),w.useContext(os).location}function dm(e){w.useContext(Xt).static||w.useLayoutEffect(e)}function hm(){let{isDataRoute:e}=w.useContext(Jt);return e?Px():yx()}function yx(){ar()||te(!1);let e=w.useContext(mc),{basename:t,future:n,navigator:r}=w.useContext(Xt),{matches:i}=w.useContext(Jt),{pathname:o}=bn(),s=JSON.stringify(fc(i,n.v7_relativeSplatPath)),a=w.useRef(!1);return dm(()=>{a.current=!0}),w.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let h=pc(u,JSON.parse(s),o,d.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Bt([t,h.pathname])),(d.replace?r.replace:r.push)(h,d.state,d)},[t,r,s,o,e])}function fm(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(Xt),{matches:i}=w.useContext(Jt),{pathname:o}=bn(),s=JSON.stringify(fc(i,r.v7_relativeSplatPath));return w.useMemo(()=>pc(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function xx(e,t){return wx(e,t)}function wx(e,t,n,r){ar()||te(!1);let{navigator:i}=w.useContext(Xt),{matches:o}=w.useContext(Jt),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let u=bn(),d;if(t){var h;let S=typeof t=="string"?sr(t):t;c==="/"||(h=S.pathname)!=null&&h.startsWith(c)||te(!1),d=S}else d=u;let f=d.pathname||"/",v=f;if(c!=="/"){let S=c.replace(/^\//,"").split("/");v="/"+f.replace(/^\//,"").split("/").slice(S.length).join("/")}let y=Gy(e,{pathname:v}),x=Tx(y&&y.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:Bt([c,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?c:Bt([c,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n,r);return t&&x?w.createElement(os.Provider,{value:{location:ii({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Mt.Pop}},x):x}function kx(){let e=Cx(),t=px(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,null)}const Sx=w.createElement(kx,null);class bx extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(Jt.Provider,{value:this.props.routeContext},w.createElement(um.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function jx(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(mc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Jt.Provider,{value:t},r)}function Tx(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=s.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);d>=0||te(!1),s=s.slice(0,Math.min(s.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let h=s[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=d),h.route.id){let{loaderData:f,errors:v}=n,y=h.route.loader&&f[h.route.id]===void 0&&(!v||v[h.route.id]===void 0);if(h.route.lazy||y){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,h,f)=>{let v,y=!1,x=null,S=null;n&&(v=a&&h.route.id?a[h.route.id]:void 0,x=h.route.errorElement||Sx,c&&(u<0&&f===0?(Nx("route-fallback"),y=!0,S=null):u===f&&(y=!0,S=h.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,f+1)),m=()=>{let p;return v?p=x:y?p=S:h.route.Component?p=w.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=d,w.createElement(jx,{match:h,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:p})};return n&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?w.createElement(bx,{location:n.location,revalidation:n.revalidation,component:x,error:v,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var pm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(pm||{}),mm=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(mm||{});function Ex(e){let t=w.useContext(mc);return t||te(!1),t}function _x(e){let t=w.useContext(gx);return t||te(!1),t}function Dx(e){let t=w.useContext(Jt);return t||te(!1),t}function gm(e){let t=Dx(),n=t.matches[t.matches.length-1];return n.route.id||te(!1),n.route.id}function Cx(){var e;let t=w.useContext(um),n=_x(),r=gm();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Px(){let{router:e}=Ex(pm.UseNavigateStable),t=gm(mm.UseNavigateStable),n=w.useRef(!1);return dm(()=>{n.current=!0}),w.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ii({fromRouteId:t},o)))},[e,t])}const hd={};function Nx(e,t,n){hd[e]||(hd[e]=!0)}function Ax(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function fd(e){let{to:t,replace:n,state:r,relative:i}=e;ar()||te(!1);let{future:o,static:s}=w.useContext(Xt),{matches:a}=w.useContext(Jt),{pathname:c}=bn(),u=hm(),d=pc(t,fc(a,o.v7_relativeSplatPath),c,i==="path"),h=JSON.stringify(d);return w.useEffect(()=>u(JSON.parse(h),{replace:n,state:r,relative:i}),[u,h,i,n,r]),null}function ke(e){te(!1)}function Mx(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Mt.Pop,navigator:o,static:s=!1,future:a}=e;ar()&&te(!1);let c=t.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:c,navigator:o,static:s,future:ii({v7_relativeSplatPath:!1},a)}),[c,a,o,s]);typeof r=="string"&&(r=sr(r));let{pathname:d="/",search:h="",hash:f="",state:v=null,key:y="default"}=r,x=w.useMemo(()=>{let S=hc(d,c);return S==null?null:{location:{pathname:S,search:h,hash:f,state:v,key:y},navigationType:i}},[c,d,h,f,v,y,i]);return x==null?null:w.createElement(Xt.Provider,{value:u},w.createElement(os.Provider,{children:n,value:x}))}function zx(e){let{children:t,location:n}=e;return xx(Ga(t),n)}new Promise(()=>{});function Ga(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let o=[...t,i];if(r.type===w.Fragment){n.push.apply(n,Ga(r.props.children,o));return}r.type!==ke&&te(!1),!r.props.index||!r.props.children||te(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Ga(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qa(){return qa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qa.apply(null,arguments)}function Lx(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Rx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ix(e,t){return e.button===0&&(!t||t==="_self")&&!Rx(e)}const Vx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Fx="6";try{window.__reactRouterVersion=Fx}catch{}const Ox="startTransition",pd=M0[Ox];function Ux(e){let{basename:t,children:n,future:r,window:i}=e,o=w.useRef();o.current==null&&(o.current=$y({window:i,v5Compat:!0}));let s=o.current,[a,c]=w.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=w.useCallback(h=>{u&&pd?pd(()=>c(h)):c(h)},[c,u]);return w.useLayoutEffect(()=>s.listen(d),[s,d]),w.useEffect(()=>Ax(r),[r]),w.createElement(Mx,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const Wx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Bx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,se=w.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:c,to:u,preventScrollReset:d,viewTransition:h}=t,f=Lx(t,Vx),{basename:v}=w.useContext(Xt),y,x=!1;if(typeof u=="string"&&Bx.test(u)&&(y=u,Wx))try{let p=new URL(window.location.href),k=u.startsWith("//")?new URL(p.protocol+u):new URL(u),b=hc(k.pathname,v);k.origin===p.origin&&b!=null?u=b+k.search+k.hash:x=!0}catch{}let S=vx(u,{relative:i}),g=Hx(u,{replace:s,state:a,target:c,preventScrollReset:d,relative:i,viewTransition:h});function m(p){r&&r(p),p.defaultPrevented||g(p)}return w.createElement("a",qa({},f,{href:y||S,onClick:x||o?r:m,ref:n,target:c}))});var md;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(md||(md={}));var gd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(gd||(gd={}));function Hx(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=t===void 0?{}:t,c=hm(),u=bn(),d=fm(e,{relative:s});return w.useCallback(h=>{if(Ix(h,n)){h.preventDefault();let f=r!==void 0?r:Mo(u)===Mo(d);c(e,{replace:f,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[u,c,d,r,i,n,e,o,s,a])}const gc=w.createContext({});function vc(e){const t=w.useRef(null);return t.current===null&&(t.current=e()),t.current}const vm=typeof window<"u",ym=vm?w.useLayoutEffect:w.useEffect,ss=w.createContext(null);function yc(e,t){e.indexOf(t)===-1&&e.push(t)}function xc(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const dt=(e,t,n)=>n>t?t:n<e?e:n;let wc=()=>{};const bt={},xm=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function wm(e){return typeof e=="object"&&e!==null}const km=e=>/^0[^.\s]+$/u.test(e);function kc(e){let t;return()=>(t===void 0&&(t=e()),t)}const $e=e=>e,$x=(e,t)=>n=>t(e(n)),gi=(...e)=>e.reduce($x),oi=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r};class Sc{constructor(){this.subscriptions=[]}add(t){return yc(this.subscriptions,t),()=>xc(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const yt=e=>e*1e3,Be=e=>e/1e3;function Sm(e,t){return t?e*(1e3/t):0}const bm=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Yx=1e-7,Kx=12;function Gx(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=bm(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>Yx&&++a<Kx);return s}function vi(e,t,n,r){if(e===t&&n===r)return $e;const i=o=>Gx(o,0,1,e,n);return o=>o===0||o===1?o:bm(i(o),t,r)}const jm=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Tm=e=>t=>1-e(1-t),Em=vi(.33,1.53,.69,.99),bc=Tm(Em),_m=jm(bc),Dm=e=>(e*=2)<1?.5*bc(e):.5*(2-Math.pow(2,-10*(e-1))),jc=e=>1-Math.sin(Math.acos(e)),Cm=Tm(jc),Pm=jm(jc),qx=vi(.42,0,1,1),Qx=vi(0,0,.58,1),Nm=vi(.42,0,.58,1),Xx=e=>Array.isArray(e)&&typeof e[0]!="number",Am=e=>Array.isArray(e)&&typeof e[0]=="number",Jx={linear:$e,easeIn:qx,easeInOut:Nm,easeOut:Qx,circIn:jc,circInOut:Pm,circOut:Cm,backIn:bc,backInOut:_m,backOut:Em,anticipate:Dm},Zx=e=>typeof e=="string",vd=e=>{if(Am(e)){wc(e.length===4);const[t,n,r,i]=e;return vi(t,n,r,i)}else if(Zx(e))return Jx[e];return e},Ui=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function e1(e,t){let n=new Set,r=new Set,i=!1,o=!1;const s=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function c(d){s.has(d)&&(u.schedule(d),e()),d(a)}const u={schedule:(d,h=!1,f=!1)=>{const y=f&&i?n:r;return h&&s.add(d),y.has(d)||y.add(d),d},cancel:d=>{r.delete(d),s.delete(d)},process:d=>{if(a=d,i){o=!0;return}i=!0,[n,r]=[r,n],n.forEach(c),n.clear(),i=!1,o&&(o=!1,u.process(d))}};return u}const t1=40;function Mm(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=Ui.reduce((p,k)=>(p[k]=e1(o),p),{}),{setup:a,read:c,resolveKeyframes:u,preUpdate:d,update:h,preRender:f,render:v,postRender:y}=s,x=()=>{const p=bt.useManualTiming?i.timestamp:performance.now();n=!1,bt.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(p-i.timestamp,t1),1)),i.timestamp=p,i.isProcessing=!0,a.process(i),c.process(i),u.process(i),d.process(i),h.process(i),f.process(i),v.process(i),y.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(x))},S=()=>{n=!0,r=!0,i.isProcessing||e(x)};return{schedule:Ui.reduce((p,k)=>{const b=s[k];return p[k]=(T,E=!1,j=!1)=>(n||S(),b.schedule(T,E,j)),p},{}),cancel:p=>{for(let k=0;k<Ui.length;k++)s[Ui[k]].cancel(p)},state:i,steps:s}}const{schedule:U,cancel:Yt,state:fe,steps:Vs}=Mm(typeof requestAnimationFrame<"u"?requestAnimationFrame:$e,!0);let io;function n1(){io=void 0}const be={now:()=>(io===void 0&&be.set(fe.isProcessing||bt.useManualTiming?fe.timestamp:performance.now()),io),set:e=>{io=e,queueMicrotask(n1)}},zm=e=>t=>typeof t=="string"&&t.startsWith(e),Lm=zm("--"),r1=zm("var(--"),Tc=e=>r1(e)?i1.test(e.split("/*")[0].trim()):!1,i1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function yd(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const lr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},si={...lr,transform:e=>dt(0,1,e)},Wi={...lr,default:1},Rr=e=>Math.round(e*1e5)/1e5,Ec=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function o1(e){return e==null}const s1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,_c=(e,t)=>n=>!!(typeof n=="string"&&s1.test(n)&&n.startsWith(e)||t&&!o1(n)&&Object.prototype.hasOwnProperty.call(n,t)),Rm=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,s,a]=r.match(Ec);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},a1=e=>dt(0,255,e),Fs={...lr,transform:e=>Math.round(a1(e))},dn={test:_c("rgb","red"),parse:Rm("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Fs.transform(e)+", "+Fs.transform(t)+", "+Fs.transform(n)+", "+Rr(si.transform(r))+")"};function l1(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Qa={test:_c("#"),parse:l1,transform:dn.transform},yi=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Et=yi("deg"),ut=yi("%"),C=yi("px"),c1=yi("vh"),u1=yi("vw"),xd={...ut,parse:e=>ut.parse(e)/100,transform:e=>ut.transform(e*100)},In={test:_c("hsl","hue"),parse:Rm("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+ut.transform(Rr(t))+", "+ut.transform(Rr(n))+", "+Rr(si.transform(r))+")"},ne={test:e=>dn.test(e)||Qa.test(e)||In.test(e),parse:e=>dn.test(e)?dn.parse(e):In.test(e)?In.parse(e):Qa.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?dn.transform(e):In.transform(e),getAnimatableNone:e=>{const t=ne.parse(e);return t.alpha=0,ne.transform(t)}},d1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function h1(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Ec))==null?void 0:t.length)||0)+(((n=e.match(d1))==null?void 0:n.length)||0)>0}const Im="number",Vm="color",f1="var",p1="var(",wd="${}",m1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ai(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const a=t.replace(m1,c=>(ne.test(c)?(r.color.push(o),i.push(Vm),n.push(ne.parse(c))):c.startsWith(p1)?(r.var.push(o),i.push(f1),n.push(c)):(r.number.push(o),i.push(Im),n.push(parseFloat(c))),++o,wd)).split(wd);return{values:n,split:a,indexes:r,types:i}}function Fm(e){return ai(e).values}function Om(e){const{split:t,types:n}=ai(e),r=t.length;return i=>{let o="";for(let s=0;s<r;s++)if(o+=t[s],i[s]!==void 0){const a=n[s];a===Im?o+=Rr(i[s]):a===Vm?o+=ne.transform(i[s]):o+=i[s]}return o}}const g1=e=>typeof e=="number"?0:ne.test(e)?ne.getAnimatableNone(e):e;function v1(e){const t=Fm(e);return Om(e)(t.map(g1))}const Kt={test:h1,parse:Fm,createTransformer:Om,getAnimatableNone:v1};function Os(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function y1({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,c=2*n-a;i=Os(c,a,e+1/3),o=Os(c,a,e),s=Os(c,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}function zo(e,t){return n=>n>0?t:e}const $=(e,t,n)=>e+(t-e)*n,Us=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},x1=[Qa,dn,In],w1=e=>x1.find(t=>t.test(e));function kd(e){const t=w1(e);if(!t)return!1;let n=t.parse(e);return t===In&&(n=y1(n)),n}const Sd=(e,t)=>{const n=kd(e),r=kd(t);if(!n||!r)return zo(e,t);const i={...n};return o=>(i.red=Us(n.red,r.red,o),i.green=Us(n.green,r.green,o),i.blue=Us(n.blue,r.blue,o),i.alpha=$(n.alpha,r.alpha,o),dn.transform(i))},Xa=new Set(["none","hidden"]);function k1(e,t){return Xa.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function S1(e,t){return n=>$(e,t,n)}function Dc(e){return typeof e=="number"?S1:typeof e=="string"?Tc(e)?zo:ne.test(e)?Sd:T1:Array.isArray(e)?Um:typeof e=="object"?ne.test(e)?Sd:b1:zo}function Um(e,t){const n=[...e],r=n.length,i=e.map((o,s)=>Dc(o)(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}}function b1(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Dc(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function j1(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const o=t.types[i],s=e.indexes[o][r[o]],a=e.values[s]??0;n[i]=a,r[o]++}return n}const T1=(e,t)=>{const n=Kt.createTransformer(t),r=ai(e),i=ai(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Xa.has(e)&&!i.values.length||Xa.has(t)&&!r.values.length?k1(e,t):gi(Um(j1(r,i),i.values),n):zo(e,t)};function Wm(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?$(e,t,n):Dc(e)(e,t)}const E1=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>U.update(t,n),stop:()=>Yt(t),now:()=>fe.isProcessing?fe.timestamp:be.now()}},Bm=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let o=0;o<i;o++)r+=Math.round(e(o/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Lo=2e4;function Cc(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Lo;)t+=n,r=e.next(t);return t>=Lo?1/0:t}function _1(e,t=100,n){const r=n({...e,keyframes:[0,t]}),i=Math.min(Cc(r),Lo);return{type:"keyframes",ease:o=>r.next(i*o).value/t,duration:Be(i)}}const D1=5;function Hm(e,t,n){const r=Math.max(t-D1,0);return Sm(n-e(r),t-r)}const G={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Ws=.001;function C1({duration:e=G.duration,bounce:t=G.bounce,velocity:n=G.velocity,mass:r=G.mass}){let i,o,s=1-t;s=dt(G.minDamping,G.maxDamping,s),e=dt(G.minDuration,G.maxDuration,Be(e)),s<1?(i=u=>{const d=u*s,h=d*e,f=d-n,v=Ja(u,s),y=Math.exp(-h);return Ws-f/v*y},o=u=>{const h=u*s*e,f=h*n+n,v=Math.pow(s,2)*Math.pow(u,2)*e,y=Math.exp(-h),x=Ja(Math.pow(u,2),s);return(-i(u)+Ws>0?-1:1)*((f-v)*y)/x}):(i=u=>{const d=Math.exp(-u*e),h=(u-n)*e+1;return-Ws+d*h},o=u=>{const d=Math.exp(-u*e),h=(n-u)*(e*e);return d*h});const a=5/e,c=N1(i,o,a);if(e=yt(e),isNaN(c))return{stiffness:G.stiffness,damping:G.damping,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const P1=12;function N1(e,t,n){let r=n;for(let i=1;i<P1;i++)r=r-e(r)/t(r);return r}function Ja(e,t){return e*Math.sqrt(1-t*t)}const A1=["duration","bounce"],M1=["stiffness","damping","mass"];function bd(e,t){return t.some(n=>e[n]!==void 0)}function z1(e){let t={velocity:G.velocity,stiffness:G.stiffness,damping:G.damping,mass:G.mass,isResolvedFromDuration:!1,...e};if(!bd(e,M1)&&bd(e,A1))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,o=2*dt(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:G.mass,stiffness:i,damping:o}}else{const n=C1(e);t={...t,...n,mass:G.mass},t.isResolvedFromDuration=!0}return t}function Ro(e=G.visualDuration,t=G.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const o=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],a={done:!1,value:o},{stiffness:c,damping:u,mass:d,duration:h,velocity:f,isResolvedFromDuration:v}=z1({...n,velocity:-Be(n.velocity||0)}),y=f||0,x=u/(2*Math.sqrt(c*d)),S=s-o,g=Be(Math.sqrt(c/d)),m=Math.abs(S)<5;r||(r=m?G.restSpeed.granular:G.restSpeed.default),i||(i=m?G.restDelta.granular:G.restDelta.default);let p;if(x<1){const b=Ja(g,x);p=T=>{const E=Math.exp(-x*g*T);return s-E*((y+x*g*S)/b*Math.sin(b*T)+S*Math.cos(b*T))}}else if(x===1)p=b=>s-Math.exp(-g*b)*(S+(y+g*S)*b);else{const b=g*Math.sqrt(x*x-1);p=T=>{const E=Math.exp(-x*g*T),j=Math.min(b*T,300);return s-E*((y+x*g*S)*Math.sinh(j)+b*S*Math.cosh(j))/b}}const k={calculatedDuration:v&&h||null,next:b=>{const T=p(b);if(v)a.done=b>=h;else{let E=b===0?y:0;x<1&&(E=b===0?yt(y):Hm(p,b,T));const j=Math.abs(E)<=r,z=Math.abs(s-T)<=i;a.done=j&&z}return a.value=a.done?s:T,a},toString:()=>{const b=Math.min(Cc(k),Lo),T=Bm(E=>k.next(b*E).value,b,30);return b+"ms "+T},toTransition:()=>{}};return k}Ro.applyToOptions=e=>{const t=_1(e,100,Ro);return e.ease=t.ease,e.duration=yt(t.duration),e.type="keyframes",e};function Za({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:c,restDelta:u=.5,restSpeed:d}){const h=e[0],f={done:!1,value:h},v=j=>a!==void 0&&j<a||c!==void 0&&j>c,y=j=>a===void 0?c:c===void 0||Math.abs(a-j)<Math.abs(c-j)?a:c;let x=n*t;const S=h+x,g=s===void 0?S:s(S);g!==S&&(x=g-h);const m=j=>-x*Math.exp(-j/r),p=j=>g+m(j),k=j=>{const z=m(j),N=p(j);f.done=Math.abs(z)<=u,f.value=f.done?g:N};let b,T;const E=j=>{v(f.value)&&(b=j,T=Ro({keyframes:[f.value,y(f.value)],velocity:Hm(p,j,f.value),damping:i,stiffness:o,restDelta:u,restSpeed:d}))};return E(0),{calculatedDuration:null,next:j=>{let z=!1;return!T&&b===void 0&&(z=!0,k(j),E(j)),b!==void 0&&j>=b?T.next(j-b):(!z&&k(j),f)}}}function L1(e,t,n){const r=[],i=n||bt.mix||Wm,o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const c=Array.isArray(t)?t[s]||$e:t;a=gi(c,a)}r.push(a)}return r}function R1(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(wc(o===t.length),o===1)return()=>t[0];if(o===2&&t[0]===t[1])return()=>t[1];const s=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=L1(t,r,i),c=a.length,u=d=>{if(s&&d<e[0])return t[0];let h=0;if(c>1)for(;h<e.length-2&&!(d<e[h+1]);h++);const f=oi(e[h],e[h+1],d);return a[h](f)};return n?d=>u(dt(e[0],e[o-1],d)):u}function I1(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=oi(0,t,r);e.push($(n,1,i))}}function V1(e){const t=[0];return I1(t,e.length-1),t}function F1(e,t){return e.map(n=>n*t)}function O1(e,t){return e.map(()=>t||Nm).splice(0,e.length-1)}function Ir({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=Xx(r)?r.map(vd):vd(r),o={done:!1,value:t[0]},s=F1(n&&n.length===t.length?n:V1(t),e),a=R1(s,t,{ease:Array.isArray(i)?i:O1(t,i)});return{calculatedDuration:e,next:c=>(o.value=a(c),o.done=c>=e,o)}}const U1=e=>e!==null;function Pc(e,{repeat:t,repeatType:n="loop"},r,i=1){const o=e.filter(U1),a=i<0||t&&n!=="loop"&&t%2===1?0:o.length-1;return!a||r===void 0?o[a]:r}const W1={decay:Za,inertia:Za,tween:Ir,keyframes:Ir,spring:Ro};function $m(e){typeof e.type=="string"&&(e.type=W1[e.type])}class Nc{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const B1=e=>e/100;class Ac extends Nc{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,i;const{motionValue:n}=this.options;n&&n.updatedAt!==be.now()&&this.tick(be.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(r=this.options).onStop)==null||i.call(r))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;$m(t);const{type:n=Ir,repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:s=0}=t;let{keyframes:a}=t;const c=n||Ir;c!==Ir&&typeof a[0]!="number"&&(this.mixKeyframes=gi(B1,Wm(a[0],a[1])),a=[0,100]);const u=c({...t,keyframes:a});o==="mirror"&&(this.mirroredGenerator=c({...t,keyframes:[...a].reverse(),velocity:-s})),u.calculatedDuration===null&&(u.calculatedDuration=Cc(u));const{calculatedDuration:d}=u;this.calculatedDuration=d,this.resolvedDuration=d+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=u}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:r,totalDuration:i,mixKeyframes:o,mirroredGenerator:s,resolvedDuration:a,calculatedDuration:c}=this;if(this.startTime===null)return r.next(0);const{delay:u=0,keyframes:d,repeat:h,repeatType:f,repeatDelay:v,type:y,onUpdate:x,finalKeyframe:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-i/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const g=this.currentTime-u*(this.playbackSpeed>=0?1:-1),m=this.playbackSpeed>=0?g<0:g>i;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let p=this.currentTime,k=r;if(h){const j=Math.min(this.currentTime,i)/a;let z=Math.floor(j),N=j%1;!N&&j>=1&&(N=1),N===1&&z--,z=Math.min(z,h+1),!!(z%2)&&(f==="reverse"?(N=1-N,v&&(N-=v/a)):f==="mirror"&&(k=s)),p=dt(0,1,N)*a}const b=m?{done:!1,value:d[0]}:k.next(p);o&&(b.value=o(b.value));let{done:T}=b;!m&&c!==null&&(T=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const E=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return E&&y!==Za&&(b.value=Pc(d,this.options,S,this.speed)),x&&x(b.value),E&&this.finish(),b}then(t,n){return this.finished.then(t,n)}get duration(){return Be(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Be(t)}get time(){return Be(this.currentTime)}set time(t){var n;t=yt(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(be.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Be(this.currentTime))}play(){var i,o;if(this.isStopped)return;const{driver:t=E1,startTime:n}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),(o=(i=this.options).onPlay)==null||o.call(i);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(be.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function H1(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const hn=e=>e*180/Math.PI,el=e=>{const t=hn(Math.atan2(e[1],e[0]));return tl(t)},$1={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:el,rotateZ:el,skewX:e=>hn(Math.atan(e[1])),skewY:e=>hn(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},tl=e=>(e=e%360,e<0&&(e+=360),e),jd=el,Td=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Ed=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Y1={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Td,scaleY:Ed,scale:e=>(Td(e)+Ed(e))/2,rotateX:e=>tl(hn(Math.atan2(e[6],e[5]))),rotateY:e=>tl(hn(Math.atan2(-e[2],e[0]))),rotateZ:jd,rotate:jd,skewX:e=>hn(Math.atan(e[4])),skewY:e=>hn(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function nl(e){return e.includes("scale")?1:0}function rl(e,t){if(!e||e==="none")return nl(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=Y1,i=n;else{const a=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=$1,i=a}if(!i)return nl(t);const o=r[t],s=i[1].split(",").map(G1);return typeof o=="function"?o(s):s[o]}const K1=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return rl(n,t)};function G1(e){return parseFloat(e.trim())}const cr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ur=new Set(cr),_d=e=>e===lr||e===C,q1=new Set(["x","y","z"]),Q1=cr.filter(e=>!q1.has(e));function X1(e){const t=[];return Q1.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const zt={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>rl(t,"x"),y:(e,{transform:t})=>rl(t,"y")};zt.translateX=zt.x;zt.translateY=zt.y;const mn=new Set;let il=!1,ol=!1,sl=!1;function Ym(){if(ol){const e=Array.from(mn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=X1(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,s])=>{var a;(a=r.getValue(o))==null||a.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}ol=!1,il=!1,mn.forEach(e=>e.complete(sl)),mn.clear()}function Km(){mn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(ol=!0)})}function J1(){sl=!0,Km(),Ym(),sl=!1}class Mc{constructor(t,n,r,i,o,s=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=s}scheduleResolve(){this.state="scheduled",this.isAsync?(mn.add(this),il||(il=!0,U.read(Km),U.resolveKeyframes(Ym))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;if(t[0]===null){const o=i==null?void 0:i.get(),s=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const a=r.readValue(n,s);a!=null&&(t[0]=a)}t[0]===void 0&&(t[0]=s),i&&o===void 0&&i.set(t[0])}H1(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),mn.delete(this)}cancel(){this.state==="scheduled"&&(mn.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Z1=e=>e.startsWith("--");function ew(e,t,n){Z1(t)?e.style.setProperty(t,n):e.style[t]=n}const tw=kc(()=>window.ScrollTimeline!==void 0),nw={};function rw(e,t){const n=kc(e);return()=>nw[t]??n()}const Gm=rw(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Tr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Dd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Tr([0,.65,.55,1]),circOut:Tr([.55,0,1,.45]),backIn:Tr([.31,.01,.66,-.59]),backOut:Tr([.33,1.53,.69,.99])};function qm(e,t){if(e)return typeof e=="function"?Gm()?Bm(e,t):"ease-out":Am(e)?Tr(e):Array.isArray(e)?e.map(n=>qm(n,t)||Dd.easeOut):Dd[e]}function iw(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:a="easeOut",times:c}={},u=void 0){const d={[t]:n};c&&(d.offset=c);const h=qm(a,i);Array.isArray(h)&&(d.easing=h);const f={delay:r,duration:i,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"};return u&&(f.pseudoElement=u),e.animate(d,f)}function Qm(e){return typeof e=="function"&&"applyToOptions"in e}function ow({type:e,...t}){return Qm(e)&&Gm()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class sw extends Nc{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:r,keyframes:i,pseudoElement:o,allowFlatten:s=!1,finalKeyframe:a,onComplete:c}=t;this.isPseudoElement=!!o,this.allowFlatten=s,this.options=t,wc(typeof t.type!="string");const u=ow(t);this.animation=iw(n,r,i,u,o),u.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!o){const d=Pc(i,this.options,a,this.speed);this.updateMotionValue?this.updateMotionValue(d):ew(n,r,d),this.animation.cancel()}c==null||c(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,n;this.isPseudoElement||(n=(t=this.animation).commitStyles)==null||n.call(t)}get duration(){var n,r;const t=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return Be(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Be(t)}get time(){return Be(Number(this.animation.currentTime)||0)}set time(t){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=yt(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,observe:n}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&tw()?(this.animation.timeline=t,$e):n(this)}}const Xm={anticipate:Dm,backInOut:_m,circInOut:Pm};function aw(e){return e in Xm}function lw(e){typeof e.ease=="string"&&aw(e.ease)&&(e.ease=Xm[e.ease])}const Bs=10;class cw extends sw{constructor(t){lw(t),$m(t),super(t),t.startTime!==void 0&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:r,onComplete:i,element:o,...s}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const a=new Ac({...s,autoplay:!1}),c=Math.max(Bs,be.now()-this.startTime),u=dt(0,Bs,c-Bs);n.setWithVelocity(a.sample(Math.max(0,c-u)).value,a.sample(c).value,u),a.stop()}}const Cd=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Kt.test(e)||e==="0")&&!e.startsWith("url("));function uw(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function dw(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],s=Cd(i,t),a=Cd(o,t);return!s||!a?!1:uw(e)||(n==="spring"||Qm(n))&&r}function al(e){e.duration=0,e.type="keyframes"}const hw=new Set(["opacity","clipPath","filter","transform"]),fw=kc(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function pw(e){var d;const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:o,type:s}=e;if(!(((d=t==null?void 0:t.owner)==null?void 0:d.current)instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:u}=t.owner.getProps();return fw()&&n&&hw.has(n)&&(n!=="transform"||!u)&&!c&&!r&&i!=="mirror"&&o!==0&&s!=="inertia"}const mw=40;class gw extends Nc{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s="loop",keyframes:a,name:c,motionValue:u,element:d,...h}){var y;super(),this.stop=()=>{var x,S;this._animation&&(this._animation.stop(),(x=this.stopTimeline)==null||x.call(this)),(S=this.keyframeResolver)==null||S.cancel()},this.createdAt=be.now();const f={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:s,name:c,motionValue:u,element:d,...h},v=(d==null?void 0:d.KeyframeResolver)||Mc;this.keyframeResolver=new v(a,(x,S,g)=>this.onKeyframesResolved(x,S,f,!g),c,u,d),(y=this.keyframeResolver)==null||y.scheduleResolve()}onKeyframesResolved(t,n,r,i){this.keyframeResolver=void 0;const{name:o,type:s,velocity:a,delay:c,isHandoff:u,onUpdate:d}=r;this.resolvedAt=be.now(),dw(t,o,s,a)||((bt.instantAnimations||!c)&&(d==null||d(Pc(t,r,n))),t[0]=t[t.length-1],al(r),r.repeat=0);const f={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>mw?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:t},v=!u&&pw(f)?new cw({...f,element:f.motionValue.owner.current}):new Ac(f);v.finished.then(()=>this.notifyFinished()).catch($e),this.pendingTimeline&&(this.stopTimeline=v.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=v}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),J1()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}const vw=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function yw(e){const t=vw.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function Jm(e,t,n=1){const[r,i]=yw(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return xm(s)?parseFloat(s):s}return Tc(i)?Jm(i,t,n+1):i}function zc(e,t){return(e==null?void 0:e[t])??(e==null?void 0:e.default)??e}const xw={type:"spring",stiffness:500,damping:25,restSpeed:10},ww=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),kw={type:"keyframes",duration:.8},Sw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},bw=(e,{keyframes:t})=>t.length>2?kw:ur.has(e)?e.startsWith("scale")?ww(t[1]):xw:Sw;function jw({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:c,elapsed:u,...d}){return!!Object.keys(d).length}const Tw=e=>e!==null;function Ew(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(Tw),o=t&&n!=="loop"&&t%2===1?0:i.length-1;return i[o]}function Zm(e,t,n,r=0,i=1){const o=Array.from(e).sort((u,d)=>u.sortNodePosition(d)).indexOf(t),s=e.size,a=(s-1)*r;return typeof n=="function"?n(o,s):i===1?o*r:a-o*r}const Lc=(e,t,n,r={},i,o)=>s=>{const a=zc(r,e)||{},c=a.delay||r.delay||0;let{elapsed:u=0}=r;u=u-yt(c);const d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-u,onUpdate:f=>{t.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:o?void 0:i};jw(a)||Object.assign(d,bw(e,d)),d.duration&&(d.duration=yt(d.duration)),d.repeatDelay&&(d.repeatDelay=yt(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let h=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(al(d),d.delay===0&&(h=!0)),(bt.instantAnimations||bt.skipAnimations)&&(h=!0,al(d),d.delay=0),d.allowFlatten=!a.type&&!a.ease,h&&!o&&t.get()!==void 0){const f=Ew(d.keyframes,a);if(f!==void 0){U.update(()=>{d.onUpdate(f),d.onComplete()});return}}return a.isSync?new Ac(d):new gw(d)},eg=new Set(["width","height","top","left","right","bottom",...cr]),Pd=30,_w=e=>!isNaN(parseFloat(e));class Dw{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var o;const i=be.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((o=this.events.change)==null||o.notify(this.current),this.dependents))for(const s of this.dependents)s.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=be.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=_w(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Sc);const r=this.events[t].add(n);return t==="change"?()=>{r(),U.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=be.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Pd)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Pd);return Sm(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function tr(e,t){return new Dw(e,t)}function Nd(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Rc(e,t,n,r){if(typeof t=="function"){const[i,o]=Nd(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=Nd(r);t=t(n!==void 0?n:e.custom,i,o)}return t}function Kn(e,t,n){const r=e.getProps();return Rc(r,t,n!==void 0?n:r.custom,e)}const ll=e=>Array.isArray(e);function Cw(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,tr(n))}function Pw(e){return ll(e)?e[e.length-1]||0:e}function Nw(e,t){const n=Kn(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const s in o){const a=Pw(o[s]);Cw(e,s,a)}}const xe=e=>!!(e&&e.getVelocity);function Aw(e){return!!(xe(e)&&e.add)}function cl(e,t){const n=e.getValue("willChange");if(Aw(n))return n.add(t);if(!n&&bt.WillChange){const r=new bt.WillChange("auto");e.addValue("willChange",r),r.add(t)}}function Ic(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const Mw="framerAppearId",tg="data-"+Ic(Mw);function ng(e){return e.props[tg]}function zw({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function rg(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:s,...a}=t;r&&(o=r);const c=[],u=i&&e.animationState&&e.animationState.getState()[i];for(const d in a){const h=e.getValue(d,e.latestValues[d]??null),f=a[d];if(f===void 0||u&&zw(u,d))continue;const v={delay:n,...zc(o||{},d)},y=h.get();if(y!==void 0&&!h.isAnimating&&!Array.isArray(f)&&f===y&&!v.velocity)continue;let x=!1;if(window.MotionHandoffAnimation){const g=ng(e);if(g){const m=window.MotionHandoffAnimation(g,d,U);m!==null&&(v.startTime=m,x=!0)}}cl(e,d),h.start(Lc(d,h,f,e.shouldReduceMotion&&eg.has(d)?{type:!1}:v,e,x));const S=h.animation;S&&c.push(S)}return s&&Promise.all(c).then(()=>{U.update(()=>{s&&Nw(e,s)})}),c}function ul(e,t,n={}){var c;const r=Kn(e,t,n.type==="exit"?(c=e.presenceContext)==null?void 0:c.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(rg(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:h,staggerDirection:f}=i;return Lw(e,t,u,d,h,f,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[u,d]=a==="beforeChildren"?[o,s]:[s,o];return u().then(()=>d())}else return Promise.all([o(),s(n.delay)])}function Lw(e,t,n=0,r=0,i=0,o=1,s){const a=[];for(const c of e.variantChildren)c.notify("AnimationStart",t),a.push(ul(c,t,{...s,delay:n+(typeof r=="function"?0:r)+Zm(e.variantChildren,c,r,i,o)}).then(()=>c.notify("AnimationComplete",t)));return Promise.all(a)}function Rw(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>ul(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=ul(e,t,n);else{const i=typeof t=="function"?Kn(e,t,n.custom):t;r=Promise.all(rg(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const Iw={test:e=>e==="auto",parse:e=>e},ig=e=>t=>t.test(e),og=[lr,C,ut,Et,u1,c1,Iw],Ad=e=>og.find(ig(e));function Vw(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||km(e):!0}const Fw=new Set(["brightness","contrast","saturate","opacity"]);function Ow(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Ec)||[];if(!r)return e;const i=n.replace(r,"");let o=Fw.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const Uw=/\b([a-z-]*)\(.*?\)/gu,dl={...Kt,getAnimatableNone:e=>{const t=e.match(Uw);return t?t.map(Ow).join(" "):e}},Md={...lr,transform:Math.round},Ww={rotate:Et,rotateX:Et,rotateY:Et,rotateZ:Et,scale:Wi,scaleX:Wi,scaleY:Wi,scaleZ:Wi,skew:Et,skewX:Et,skewY:Et,distance:C,translateX:C,translateY:C,translateZ:C,x:C,y:C,z:C,perspective:C,transformPerspective:C,opacity:si,originX:xd,originY:xd,originZ:C},Vc={borderWidth:C,borderTopWidth:C,borderRightWidth:C,borderBottomWidth:C,borderLeftWidth:C,borderRadius:C,radius:C,borderTopLeftRadius:C,borderTopRightRadius:C,borderBottomRightRadius:C,borderBottomLeftRadius:C,width:C,maxWidth:C,height:C,maxHeight:C,top:C,right:C,bottom:C,left:C,inset:C,insetBlock:C,insetBlockStart:C,insetBlockEnd:C,insetInline:C,insetInlineStart:C,insetInlineEnd:C,padding:C,paddingTop:C,paddingRight:C,paddingBottom:C,paddingLeft:C,paddingBlock:C,paddingBlockStart:C,paddingBlockEnd:C,paddingInline:C,paddingInlineStart:C,paddingInlineEnd:C,margin:C,marginTop:C,marginRight:C,marginBottom:C,marginLeft:C,marginBlock:C,marginBlockStart:C,marginBlockEnd:C,marginInline:C,marginInlineStart:C,marginInlineEnd:C,backgroundPositionX:C,backgroundPositionY:C,...Ww,zIndex:Md,fillOpacity:si,strokeOpacity:si,numOctaves:Md},Bw={...Vc,color:ne,backgroundColor:ne,outlineColor:ne,fill:ne,stroke:ne,borderColor:ne,borderTopColor:ne,borderRightColor:ne,borderBottomColor:ne,borderLeftColor:ne,filter:dl,WebkitFilter:dl},sg=e=>Bw[e];function ag(e,t){let n=sg(e);return n!==dl&&(n=Kt),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Hw=new Set(["auto","none","0"]);function $w(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!Hw.has(o)&&ai(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=ag(n,i)}class Yw extends Mc{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let d=0;d<t.length;d++){let h=t[d];if(typeof h=="string"&&(h=h.trim(),Tc(h))){const f=Jm(h,n.current);f!==void 0&&(t[d]=f),d===t.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!eg.has(r)||t.length!==2)return;const[i,o]=t,s=Ad(i),a=Ad(o),c=yd(i),u=yd(o);if(c!==u&&zt[r]){this.needsMeasurement=!0;return}if(s!==a)if(_d(s)&&_d(a))for(let d=0;d<t.length;d++){const h=t[d];typeof h=="string"&&(t[d]=parseFloat(h))}else zt[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)(t[i]===null||Vw(t[i]))&&r.push(i);r.length&&$w(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=zt[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var a;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const i=t.getValue(n);i&&i.jump(this.measuredOrigin,!1);const o=r.length-1,s=r[o];r[o]=zt[n](t.measureViewportBox(),window.getComputedStyle(t.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([c,u])=>{t.getValue(c).set(u)}),this.resolveNoneKeyframes()}}function Kw(e,t,n){if(e instanceof EventTarget)return[e];if(typeof e=="string"){let r=document;const i=(n==null?void 0:n[e])??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e)}const lg=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function cg(e){return wm(e)&&"offsetHeight"in e}const{schedule:Fc}=Mm(queueMicrotask,!1),Xe={x:!1,y:!1};function ug(){return Xe.x||Xe.y}function Gw(e){return e==="x"||e==="y"?Xe[e]?null:(Xe[e]=!0,()=>{Xe[e]=!1}):Xe.x||Xe.y?null:(Xe.x=Xe.y=!0,()=>{Xe.x=Xe.y=!1})}function dg(e,t){const n=Kw(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function zd(e){return!(e.pointerType==="touch"||ug())}function qw(e,t,n={}){const[r,i,o]=dg(e,n),s=a=>{if(!zd(a))return;const{target:c}=a,u=t(c,a);if(typeof u!="function"||!c)return;const d=h=>{zd(h)&&(u(h),c.removeEventListener("pointerleave",d))};c.addEventListener("pointerleave",d,i)};return r.forEach(a=>{a.addEventListener("pointerenter",s,i)}),o}const hg=(e,t)=>t?e===t?!0:hg(e,t.parentElement):!1,Oc=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,Qw=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function fg(e){return Qw.has(e.tagName)||e.isContentEditable===!0}const oo=new WeakSet;function Ld(e){return t=>{t.key==="Enter"&&e(t)}}function Hs(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const Xw=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=Ld(()=>{if(oo.has(n))return;Hs(n,"down");const i=Ld(()=>{Hs(n,"up")}),o=()=>Hs(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",o,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function Rd(e){return Oc(e)&&!ug()}function Jw(e,t,n={}){const[r,i,o]=dg(e,n),s=a=>{const c=a.currentTarget;if(!Rd(a))return;oo.add(c);const u=t(c,a),d=(v,y)=>{window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",f),oo.has(c)&&oo.delete(c),Rd(v)&&typeof u=="function"&&u(v,{success:y})},h=v=>{d(v,c===window||c===document||n.useGlobalTarget||hg(c,v.target))},f=v=>{d(v,!1)};window.addEventListener("pointerup",h,i),window.addEventListener("pointercancel",f,i)};return r.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",s,i),cg(a)&&(a.addEventListener("focus",u=>Xw(u,i)),!fg(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),o}function pg(e){return wm(e)&&"ownerSVGElement"in e}function Zw(e){return pg(e)&&e.tagName==="svg"}const e2=[...og,ne,Kt],t2=e=>e2.find(ig(e)),Id=()=>({translate:0,scale:1,origin:0,originPoint:0}),Vn=()=>({x:Id(),y:Id()}),Vd=()=>({min:0,max:0}),ie=()=>({x:Vd(),y:Vd()}),Io={current:null},Uc={current:!1},n2=typeof window<"u";function mg(){if(Uc.current=!0,!!n2)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Io.current=e.matches;e.addEventListener("change",t),t()}else Io.current=!1}const r2=new WeakMap;function as(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function li(e){return typeof e=="string"||Array.isArray(e)}const Wc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Bc=["initial",...Wc];function ls(e){return as(e.animate)||Bc.some(t=>li(e[t]))}function gg(e){return!!(ls(e)||e.variants)}function i2(e,t,n){for(const r in t){const i=t[r],o=n[r];if(xe(i))e.addValue(r,i);else if(xe(o))e.addValue(r,tr(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const s=e.getValue(r);s.liveStyle===!0?s.jump(i):s.hasAnimated||s.set(i)}else{const s=e.getStaticValue(r);e.addValue(r,tr(s!==void 0?s:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Fd=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Vo={};function vg(e){Vo=e}function o2(){return Vo}class s2{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:s},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Mc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const f=be.now();this.renderScheduledAt<f&&(this.renderScheduledAt=f,U.render(this.render,!1,!0))};const{latestValues:c,renderState:u}=s;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!o,this.isControllingVariants=ls(n),this.isVariantNode=gg(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...h}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in h){const v=h[f];c[f]!==void 0&&xe(v)&&v.set(c[f])}}mount(t){var n;this.current=t,r2.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,i)=>this.bindToMotionValue(i,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Uc.current||mg(),this.shouldReduceMotion=Io.current),(n=this.parent)==null||n.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var t;this.projection&&this.projection.unmount(),Yt(this.notifyUpdate),Yt(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=ur.has(t);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&U.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let o;typeof window<"u"&&window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Vo){const n=Vo[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ie()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Fd.length;r++){const i=Fd[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,s=t[o];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=i2(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=tr(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(xm(r)||km(r))?r=parseFloat(r):!t2(r)&&Kt.test(n)&&(r=ag(t,n)),this.setBaseTarget(t,xe(r)?r.get():r)),xe(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var o;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const s=Rc(this.props,n,(o=this.presenceContext)==null?void 0:o.custom);s&&(r=s[t])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!xe(i)?i:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Sc),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){Fc.render(this.render)}}class Zt{constructor(t){this.isMounted=!1,this.node=t}update(){}}class yg extends s2{constructor(){super(...arguments),this.KeyframeResolver=Yw}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const r=t.style;return r?r[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;xe(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function xg({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function a2({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function l2(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function $s(e){return e===void 0||e===1}function hl({scale:e,scaleX:t,scaleY:n}){return!$s(e)||!$s(t)||!$s(n)}function an(e){return hl(e)||wg(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function wg(e){return Od(e.x)||Od(e.y)}function Od(e){return e&&e!=="0%"}function Fo(e,t,n){const r=e-n,i=t*r;return n+i}function Ud(e,t,n,r,i){return i!==void 0&&(e=Fo(e,i,r)),Fo(e,n,r)+t}function fl(e,t=0,n=1,r,i){e.min=Ud(e.min,t,n,r,i),e.max=Ud(e.max,t,n,r,i)}function kg(e,{x:t,y:n}){fl(e.x,t.translate,t.scale,t.originPoint),fl(e.y,n.translate,n.scale,n.originPoint)}const Wd=.999999999999,Bd=1.0000000000001;function c2(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const{visualElement:c}=o.options;c&&c.props.style&&c.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&On(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,kg(e,s)),r&&an(o.latestValues)&&On(e,o.latestValues))}t.x<Bd&&t.x>Wd&&(t.x=1),t.y<Bd&&t.y>Wd&&(t.y=1)}function Fn(e,t){e.min=e.min+t,e.max=e.max+t}function Hd(e,t,n,r,i=.5){const o=$(e.min,e.max,i);fl(e,t,n,o,r)}function On(e,t){Hd(e.x,t.x,t.scaleX,t.scale,t.originX),Hd(e.y,t.y,t.scaleY,t.scale,t.originY)}function Sg(e,t){return xg(l2(e.getBoundingClientRect(),t))}function u2(e,t,n){const r=Sg(e,n),{scroll:i}=t;return i&&(Fn(r.x,i.offset.x),Fn(r.y,i.offset.y)),r}const d2={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},h2=cr.length;function f2(e,t,n){let r="",i=!0;for(let o=0;o<h2;o++){const s=cr[o],a=e[s];if(a===void 0)continue;let c=!0;if(typeof a=="number"?c=a===(s.startsWith("scale")?1:0):c=parseFloat(a)===0,!c||n){const u=lg(a,Vc[s]);if(!c){i=!1;const d=d2[s]||s;r+=`${d}(${u}) `}n&&(t[s]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Hc(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let s=!1,a=!1;for(const c in t){const u=t[c];if(ur.has(c)){s=!0;continue}else if(Lm(c)){i[c]=u;continue}else{const d=lg(u,Vc[c]);c.startsWith("origin")?(a=!0,o[c]=d):r[c]=d}}if(t.transform||(s||n?r.transform=f2(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:c="50%",originY:u="50%",originZ:d=0}=o;r.transformOrigin=`${c} ${u} ${d}`}}function bg(e,{style:t,vars:n},r,i){const o=e.style;let s;for(s in t)o[s]=t[s];i==null||i.applyProjectionStyles(o,r);for(s in n)o.setProperty(s,n[s])}function $d(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const wr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(C.test(e))e=parseFloat(e);else return e;const n=$d(e,t.target.x),r=$d(e,t.target.y);return`${n}% ${r}%`}},p2={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Kt.parse(e);if(i.length>5)return r;const o=Kt.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,c=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=c;const u=$(a,c,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),o(i)}},pl={borderRadius:{...wr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:wr,borderTopRightRadius:wr,borderBottomLeftRadius:wr,borderBottomRightRadius:wr,boxShadow:p2};function jg(e,{layout:t,layoutId:n}){return ur.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!pl[e]||e==="opacity")}function $c(e,t,n){var s;const r=e.style,i=t==null?void 0:t.style,o={};if(!r)return o;for(const a in r)(xe(r[a])||i&&xe(i[a])||jg(a,e)||((s=n==null?void 0:n.getValue(a))==null?void 0:s.liveStyle)!==void 0)&&(o[a]=r[a]);return o}function m2(e){return window.getComputedStyle(e)}class g2 extends yg{constructor(){super(...arguments),this.type="html",this.renderInstance=bg}readValueFromInstance(t,n){var r;if(ur.has(n))return(r=this.projection)!=null&&r.isProjecting?nl(n):K1(t,n);{const i=m2(t),o=(Lm(n)?i.getPropertyValue(n):i[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Sg(t,n)}build(t,n,r){Hc(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return $c(t,n,r)}}const v2={offset:"stroke-dashoffset",array:"stroke-dasharray"},y2={offset:"strokeDashoffset",array:"strokeDasharray"};function x2(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?v2:y2;e[o.offset]=C.transform(-r);const s=C.transform(t),a=C.transform(n);e[o.array]=`${s} ${a}`}const w2=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Tg(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:o=1,pathOffset:s=0,...a},c,u,d){if(Hc(e,a,u),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:h,style:f}=e;h.transform&&(f.transform=h.transform,delete h.transform),(f.transform||h.transformOrigin)&&(f.transformOrigin=h.transformOrigin??"50% 50%",delete h.transformOrigin),f.transform&&(f.transformBox=(d==null?void 0:d.transformBox)??"fill-box",delete h.transformBox);for(const v of w2)h[v]!==void 0&&(f[v]=h[v],delete h[v]);t!==void 0&&(h.x=t),n!==void 0&&(h.y=n),r!==void 0&&(h.scale=r),i!==void 0&&x2(h,i,o,s,!1)}const Eg=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),_g=e=>typeof e=="string"&&e.toLowerCase()==="svg";function k2(e,t,n,r){bg(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Eg.has(i)?i:Ic(i),t.attrs[i])}function Dg(e,t,n){const r=$c(e,t,n);for(const i in e)if(xe(e[i])||xe(t[i])){const o=cr.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}class S2 extends yg{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ie}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(ur.has(n)){const r=sg(n);return r&&r.default||0}return n=Eg.has(n)?n:Ic(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Dg(t,n,r)}build(t,n,r){Tg(t,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(t,n,r,i){k2(t,n,r,i)}mount(t){this.isSVGTag=_g(t.tagName),super.mount(t)}}const b2=Bc.length;function Cg(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Cg(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<b2;n++){const r=Bc[n],i=e.props[r];(li(i)||i===!1)&&(t[r]=i)}return t}function Pg(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const j2=[...Wc].reverse(),T2=Wc.length;function E2(e){return t=>Promise.all(t.map(({animation:n,options:r})=>Rw(e,n,r)))}function _2(e){let t=E2(e),n=Yd(),r=!0;const i=c=>(u,d)=>{var f;const h=Kn(e,d,c==="exit"?(f=e.presenceContext)==null?void 0:f.custom:void 0);if(h){const{transition:v,transitionEnd:y,...x}=h;u={...u,...x,...y}}return u};function o(c){t=c(e)}function s(c){const{props:u}=e,d=Cg(e.parent)||{},h=[],f=new Set;let v={},y=1/0;for(let S=0;S<T2;S++){const g=j2[S],m=n[g],p=u[g]!==void 0?u[g]:d[g],k=li(p),b=g===c?m.isActive:null;b===!1&&(y=S);let T=p===d[g]&&p!==u[g]&&k;if(T&&r&&e.manuallyAnimateOnMount&&(T=!1),m.protectedKeys={...v},!m.isActive&&b===null||!p&&!m.prevProp||as(p)||typeof p=="boolean")continue;const E=D2(m.prevProp,p);let j=E||g===c&&m.isActive&&!T&&k||S>y&&k,z=!1;const N=Array.isArray(p)?p:[p];let X=N.reduce(i(g),{});b===!1&&(X={});const{prevResolvedValues:it={}}=m,en={...it,...X},dr=J=>{j=!0,f.has(J)&&(z=!0,f.delete(J)),m.needsAnimating[J]=!0;const D=e.getValue(J);D&&(D.liveStyle=!1)};for(const J in en){const D=X[J],A=it[J];if(v.hasOwnProperty(J))continue;let M=!1;ll(D)&&ll(A)?M=!Pg(D,A):M=D!==A,M?D!=null?dr(J):f.add(J):D!==void 0&&f.has(J)?dr(J):m.protectedKeys[J]=!0}m.prevProp=p,m.prevResolvedValues=X,m.isActive&&(v={...v,...X}),r&&e.blockInitialAnimation&&(j=!1);const wi=T&&E;j&&(!wi||z)&&h.push(...N.map(J=>{const D={type:g};if(typeof J=="string"&&r&&!wi&&e.manuallyAnimateOnMount&&e.parent){const{parent:A}=e,M=Kn(A,J);if(A.enteringChildren&&M){const{delayChildren:B}=M.transition||{};D.delay=Zm(A.enteringChildren,e,B)}}return{animation:J,options:D}}))}if(f.size){const S={};if(typeof u.initial!="boolean"){const g=Kn(e,Array.isArray(u.initial)?u.initial[0]:u.initial);g&&g.transition&&(S.transition=g.transition)}f.forEach(g=>{const m=e.getBaseTarget(g),p=e.getValue(g);p&&(p.liveStyle=!0),S[g]=m??null}),h.push({animation:S})}let x=!!h.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(x=!1),r=!1,x?t(h):Promise.resolve()}function a(c,u){var h;if(n[c].isActive===u)return Promise.resolve();(h=e.variantChildren)==null||h.forEach(f=>{var v;return(v=f.animationState)==null?void 0:v.setActive(c,u)}),n[c].isActive=u;const d=s(c);for(const f in n)n[f].protectedKeys={};return d}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Yd()}}}function D2(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Pg(t,e):!1}function rn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Yd(){return{animate:rn(!0),whileInView:rn(),whileHover:rn(),whileTap:rn(),whileDrag:rn(),whileFocus:rn(),exit:rn()}}const Ng=1e-4,C2=1-Ng,P2=1+Ng,Ag=.01,N2=0-Ag,A2=0+Ag;function je(e){return e.max-e.min}function M2(e,t,n){return Math.abs(e-t)<=n}function Kd(e,t,n,r=.5){e.origin=r,e.originPoint=$(t.min,t.max,e.origin),e.scale=je(n)/je(t),e.translate=$(n.min,n.max,e.origin)-e.originPoint,(e.scale>=C2&&e.scale<=P2||isNaN(e.scale))&&(e.scale=1),(e.translate>=N2&&e.translate<=A2||isNaN(e.translate))&&(e.translate=0)}function Vr(e,t,n,r){Kd(e.x,t.x,n.x,r?r.originX:void 0),Kd(e.y,t.y,n.y,r?r.originY:void 0)}function Gd(e,t,n){e.min=n.min+t.min,e.max=e.min+je(t)}function z2(e,t,n){Gd(e.x,t.x,n.x),Gd(e.y,t.y,n.y)}function qd(e,t,n){e.min=t.min-n.min,e.max=e.min+je(t)}function Oo(e,t,n){qd(e.x,t.x,n.x),qd(e.y,t.y,n.y)}function Qd(e,t,n,r,i){return e-=t,e=Fo(e,1/n,r),i!==void 0&&(e=Fo(e,1/i,r)),e}function L2(e,t=0,n=1,r=.5,i,o=e,s=e){if(ut.test(t)&&(t=parseFloat(t),t=$(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=$(o.min,o.max,r);e===o&&(a-=t),e.min=Qd(e.min,t,n,a,i),e.max=Qd(e.max,t,n,a,i)}function Xd(e,t,[n,r,i],o,s){L2(e,t[n],t[r],t[i],t.scale,o,s)}const R2=["x","scaleX","originX"],I2=["y","scaleY","originY"];function Jd(e,t,n,r){Xd(e.x,t,R2,n?n.x:void 0,r?r.x:void 0),Xd(e.y,t,I2,n?n.y:void 0,r?r.y:void 0)}function Zd(e,t){e.min=t.min,e.max=t.max}function Qe(e,t){Zd(e.x,t.x),Zd(e.y,t.y)}function eh(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function th(e){return e.translate===0&&e.scale===1}function Mg(e){return th(e.x)&&th(e.y)}function nh(e,t){return e.min===t.min&&e.max===t.max}function V2(e,t){return nh(e.x,t.x)&&nh(e.y,t.y)}function rh(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function zg(e,t){return rh(e.x,t.x)&&rh(e.y,t.y)}function ih(e){return je(e.x)/je(e.y)}function oh(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Fe(e){return[e("x"),e("y")]}function F2(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((i||o||s)&&(r=`translate3d(${i}px, ${o}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:h,rotateY:f,skewX:v,skewY:y}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),h&&(r+=`rotateX(${h}deg) `),f&&(r+=`rotateY(${f}deg) `),v&&(r+=`skewX(${v}deg) `),y&&(r+=`skewY(${y}deg) `)}const a=e.x.scale*t.x,c=e.y.scale*t.y;return(a!==1||c!==1)&&(r+=`scale(${a}, ${c})`),r||"none"}const Lg=["TopLeft","TopRight","BottomLeft","BottomRight"],O2=Lg.length,sh=e=>typeof e=="string"?parseFloat(e):e,ah=e=>typeof e=="number"||C.test(e);function U2(e,t,n,r,i,o){i?(e.opacity=$(0,n.opacity??1,W2(r)),e.opacityExit=$(t.opacity??1,0,B2(r))):o&&(e.opacity=$(t.opacity??1,n.opacity??1,r));for(let s=0;s<O2;s++){const a=`border${Lg[s]}Radius`;let c=lh(t,a),u=lh(n,a);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||ah(c)===ah(u)?(e[a]=Math.max($(sh(c),sh(u),r),0),(ut.test(u)||ut.test(c))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=$(t.rotate||0,n.rotate||0,r))}function lh(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const W2=Rg(0,.5,Cm),B2=Rg(.5,.95,$e);function Rg(e,t,n){return r=>r<e?0:r>t?1:n(oi(e,t,r))}function H2(e,t){const n=be.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Yt(r),e(o-t))};return U.setup(r,!0),()=>Yt(r)}function ci(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function so(e){return xe(e)?e.get():e}function $2(e,t,n){const r=xe(e)?e:tr(e);return r.start(Lc("",r,t,n)),r.animation}const Y2=(e,t)=>e.depth-t.depth;class K2{constructor(){this.children=[],this.isDirty=!1}add(t){yc(this.children,t),this.isDirty=!0}remove(t){xc(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Y2),this.isDirty=!1,this.children.forEach(t)}}class G2{constructor(){this.members=[]}add(t){yc(this.members,t),t.scheduleRender()}remove(t){if(xc(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const ao={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Ys=["","X","Y","Z"],q2=1e3;let Q2=0;function Ks(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Ig(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=ng(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",U,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Ig(r)}function Vg({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=Q2++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Z2),this.nodes.forEach(rk),this.nodes.forEach(ik),this.nodes.forEach(ek)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new K2)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Sc),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const c=this.eventHandlers.get(s);c&&c.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s){if(this.instance)return;this.isSVG=pg(s)&&!Zw(s),this.instance=s;const{layoutId:a,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(c||a)&&(this.isLayoutDirty=!0),e){let d,h=0;const f=()=>this.root.updateBlockedByResize=!1;U.read(()=>{h=window.innerWidth}),e(s,()=>{const v=window.innerWidth;v!==h&&(h=v,this.root.updateBlockedByResize=!0,d&&d(),d=H2(f,250),ao.hasAnimatedSinceResize&&(ao.hasAnimatedSinceResize=!1,this.nodes.forEach(dh)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&u&&(a||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:h,hasRelativeLayoutChanged:f,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||u.getDefaultTransition()||ck,{onLayoutAnimationStart:x,onLayoutAnimationComplete:S}=u.getProps(),g=!this.targetLayout||!zg(this.targetLayout,v),m=!h&&f;if(this.options.layoutRoot||this.resumeFrom||m||h&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const p={...zc(y,"layout"),onPlay:x,onComplete:S};(u.shouldReduceMotion||this.options.layoutRoot)&&(p.delay=0,p.type=!1),this.startAnimation(p),this.setAnimationOrigin(d,m)}else h||dh(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Yt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(ok),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Ig(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const h=this.path[d];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:a,layout:c}=this.options;if(a===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(ch);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(uh);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(nk),this.nodes.forEach(X2),this.nodes.forEach(J2)):this.nodes.forEach(uh),this.clearAllSnapshots();const a=be.now();fe.delta=dt(0,1e3/60,a-fe.timestamp),fe.timestamp=a,fe.isProcessing=!0,Vs.update.process(fe),Vs.preRender.process(fe),Vs.render.process(fe),fe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Fc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(tk),this.sharedNodes.forEach(sk)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,U.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){U.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!je(this.snapshot.measuredBox.x)&&!je(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=ie(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&this.instance){const c=r(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!Mg(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;s&&this.instance&&(a||an(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let c=this.removeElementScroll(a);return s&&(c=this.removeTransform(c)),uk(c),{animationId:this.root.animationId,measuredBox:a,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:s}=this.options;if(!s)return ie();const a=s.measureViewportBox();if(!(((u=this.scroll)==null?void 0:u.wasRoot)||this.path.some(dk))){const{scroll:d}=this.root;d&&(Fn(a.x,d.offset.x),Fn(a.y,d.offset.y))}return a}removeElementScroll(s){var c;const a=ie();if(Qe(a,s),(c=this.scroll)!=null&&c.wasRoot)return a;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:h,options:f}=d;d!==this.root&&h&&f.layoutScroll&&(h.wasRoot&&Qe(a,s),Fn(a.x,h.offset.x),Fn(a.y,h.offset.y))}return a}applyTransform(s,a=!1){const c=ie();Qe(c,s);for(let u=0;u<this.path.length;u++){const d=this.path[u];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&On(c,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),an(d.latestValues)&&On(c,d.latestValues)}return an(this.latestValues)&&On(c,this.latestValues),c}removeTransform(s){const a=ie();Qe(a,s);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!u.instance||!an(u.latestValues))continue;hl(u.latestValues)&&u.updateSnapshot();const d=ie(),h=u.measurePageBox();Qe(d,h),Jd(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return an(this.latestValues)&&Jd(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==fe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var v;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==a;if(!(s||c&&this.isSharedProjectionDirty||this.isProjectionDirty||(v=this.parent)!=null&&v.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:h}=this.options;if(!this.layout||!(d||h))return;this.resolvedRelativeTargetAt=fe.timestamp;const f=this.getClosestProjectingParent();f&&this.linkedParentVersion!==f.layoutVersion&&!f.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(f&&f.layout?this.createRelativeTarget(f,this.layout.layoutBox,f.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ie(),this.targetWithTransforms=ie()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),z2(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Qe(this.target,this.layout.layoutBox),kg(this.target,this.targetDelta)):Qe(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,f&&!!f.resumingFrom==!!this.resumingFrom&&!f.options.layoutScroll&&f.target&&this.animationProgress!==1?this.createRelativeTarget(f,this.target,f.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||hl(this.parent.latestValues)||wg(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(s,a,c){this.relativeParent=s,this.linkedParentVersion=s.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ie(),this.relativeTargetOrigin=ie(),Oo(this.relativeTargetOrigin,a,c),Qe(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var y;const s=this.getLead(),a=!!this.resumingFrom||this!==s;let c=!0;if((this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty)&&(c=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===fe.timestamp&&(c=!1),c)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;Qe(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,f=this.treeScale.y;c2(this.layoutCorrected,this.treeScale,this.path,a),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=ie());const{target:v}=s;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(eh(this.prevProjectionDelta.x,this.projectionDelta.x),eh(this.prevProjectionDelta.y,this.projectionDelta.y)),Vr(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==f||!oh(this.projectionDelta.x,this.prevProjectionDelta.x)||!oh(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),s){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Vn(),this.projectionDelta=Vn(),this.projectionDeltaWithTransform=Vn()}setAnimationOrigin(s,a=!1){const c=this.snapshot,u=c?c.latestValues:{},d={...this.latestValues},h=Vn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=ie(),v=c?c.source:void 0,y=this.layout?this.layout.source:void 0,x=v!==y,S=this.getStack(),g=!S||S.members.length<=1,m=!!(x&&!g&&this.options.crossfade===!0&&!this.path.some(lk));this.animationProgress=0;let p;this.mixTargetDelta=k=>{const b=k/1e3;hh(h.x,s.x,b),hh(h.y,s.y,b),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Oo(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),ak(this.relativeTarget,this.relativeTargetOrigin,f,b),p&&V2(this.relativeTarget,p)&&(this.isProjectionDirty=!1),p||(p=ie()),Qe(p,this.relativeTarget)),x&&(this.animationValues=d,U2(d,u,this.latestValues,b,m,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=b},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){var a,c,u;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(u=(c=this.resumingFrom)==null?void 0:c.currentAnimation)==null||u.stop(),this.pendingAnimation&&(Yt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=U.update(()=>{ao.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=tr(0)),this.currentAnimation=$2(this.motionValue,[0,1e3],{...s,velocity:0,isSync:!0,onUpdate:d=>{this.mixTargetDelta(d),s.onUpdate&&s.onUpdate(d)},onStop:()=>{},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(q2),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:c,layout:u,latestValues:d}=s;if(!(!a||!c||!u)){if(this!==s&&this.layout&&u&&Fg(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||ie();const h=je(this.layout.layoutBox.x);c.x.min=s.target.x.min,c.x.max=c.x.min+h;const f=je(this.layout.layoutBox.y);c.y.min=s.target.y.min,c.y.max=c.y.min+f}Qe(a,c),On(a,d),Vr(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new G2),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var a;const{layoutId:s}=this.options;return s?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:s}=this.options;return s?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:c}=s;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(a=!0),!a)return;const u={};c.z&&Ks("z",s,u,this.animationValues);for(let d=0;d<Ys.length;d++)Ks(`rotate${Ys[d]}`,s,u,this.animationValues),Ks(`skew${Ys[d]}`,s,u,this.animationValues);s.render();for(const d in u)s.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);s.scheduleRender()}applyProjectionStyles(s,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){s.visibility="hidden";return}const c=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,s.visibility="",s.opacity="",s.pointerEvents=so(a==null?void 0:a.pointerEvents)||"",s.transform=c?c(this.latestValues,""):"none";return}const u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){this.options.layoutId&&(s.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,s.pointerEvents=so(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!an(this.latestValues)&&(s.transform=c?c({},""):"none",this.hasProjected=!1);return}s.visibility="";const d=u.animationValues||u.latestValues;this.applyTransformsToTarget();let h=F2(this.projectionDeltaWithTransform,this.treeScale,d);c&&(h=c(d,h)),s.transform=h;const{x:f,y:v}=this.projectionDelta;s.transformOrigin=`${f.origin*100}% ${v.origin*100}% 0`,u.animationValues?s.opacity=u===this?d.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:s.opacity=u===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const y in pl){if(d[y]===void 0)continue;const{correct:x,applyTo:S,isCSSVariable:g}=pl[y],m=h==="none"?d[y]:x(d[y],u);if(S){const p=S.length;for(let k=0;k<p;k++)s[S[k]]=m}else g?this.options.visualElement.renderState.vars[y]=m:s[y]=m}this.options.layoutId&&(s.pointerEvents=u===this?so(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(ch),this.root.sharedNodes.clear()}}}function X2(e){e.updateLayout()}function J2(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=t.source!==e.layout.source;o==="size"?Fe(h=>{const f=s?t.measuredBox[h]:t.layoutBox[h],v=je(f);f.min=r[h].min,f.max=f.min+v}):Fg(o,t.layoutBox,r)&&Fe(h=>{const f=s?t.measuredBox[h]:t.layoutBox[h],v=je(r[h]);f.max=f.min+v,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[h].max=e.relativeTarget[h].min+v)});const a=Vn();Vr(a,r,t.layoutBox);const c=Vn();s?Vr(c,e.applyTransform(i,!0),t.measuredBox):Vr(c,r,t.layoutBox);const u=!Mg(a);let d=!1;if(!e.resumeFrom){const h=e.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:f,layout:v}=h;if(f&&v){const y=ie();Oo(y,t.layoutBox,f.layoutBox);const x=ie();Oo(x,r,v.layoutBox),zg(y,x)||(d=!0),h.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=y,e.relativeParent=h)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:c,layoutDelta:a,hasLayoutChanged:u,hasRelativeLayoutChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function Z2(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function ek(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function tk(e){e.clearSnapshot()}function ch(e){e.clearMeasurements()}function uh(e){e.isLayoutDirty=!1}function nk(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function dh(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function rk(e){e.resolveTargetDelta()}function ik(e){e.calcProjection()}function ok(e){e.resetSkewAndRotation()}function sk(e){e.removeLeadSnapshot()}function hh(e,t,n){e.translate=$(t.translate,0,n),e.scale=$(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function fh(e,t,n,r){e.min=$(t.min,n.min,r),e.max=$(t.max,n.max,r)}function ak(e,t,n,r){fh(e.x,t.x,n.x,r),fh(e.y,t.y,n.y,r)}function lk(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const ck={duration:.45,ease:[.4,0,.1,1]},ph=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),mh=ph("applewebkit/")&&!ph("chrome/")?Math.round:$e;function gh(e){e.min=mh(e.min),e.max=mh(e.max)}function uk(e){gh(e.x),gh(e.y)}function Fg(e,t,n){return e==="position"||e==="preserve-aspect"&&!M2(ih(t),ih(n),.2)}function dk(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const hk=Vg({attachResizeListener:(e,t)=>ci(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Gs={current:void 0},Og=Vg({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Gs.current){const e=new hk({});e.mount(window),e.setOptions({layoutScroll:!0}),Gs.current=e}return Gs.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Yc=w.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function vh(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function fk(...e){return t=>{let n=!1;const r=e.map(i=>{const o=vh(i,t);return!n&&typeof o=="function"&&(n=!0),o});if(n)return()=>{for(let i=0;i<r.length;i++){const o=r[i];typeof o=="function"?o():vh(e[i],null)}}}}function pk(...e){return w.useCallback(fk(...e),e)}class mk extends w.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=n.offsetParent,i=cg(r)&&r.offsetWidth||0,o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft,o.right=i-o.width-o.left}return null}componentDidUpdate(){}render(){return this.props.children}}function gk({children:e,isPresent:t,anchorX:n,root:r}){var d;const i=w.useId(),o=w.useRef(null),s=w.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:a}=w.useContext(Yc),c=((d=e.props)==null?void 0:d.ref)??(e==null?void 0:e.ref),u=pk(o,c);return w.useInsertionEffect(()=>{const{width:h,height:f,top:v,left:y,right:x}=s.current;if(t||!o.current||!h||!f)return;const S=n==="left"?`left: ${y}`:`right: ${x}`;o.current.dataset.motionPopId=i;const g=document.createElement("style");a&&(g.nonce=a);const m=r??document.head;return m.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${f}px !important;
            ${S}px !important;
            top: ${v}px !important;
          }
        `),()=>{m.contains(g)&&m.removeChild(g)}},[t]),l.jsx(mk,{isPresent:t,childRef:o,sizeRef:s,children:w.cloneElement(e,{ref:u})})}const vk=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s,anchorX:a,root:c})=>{const u=vc(yk),d=w.useId();let h=!0,f=w.useMemo(()=>(h=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:v=>{u.set(v,!0);for(const y of u.values())if(!y)return;r&&r()},register:v=>(u.set(v,!1),()=>u.delete(v))}),[n,u,r]);return o&&h&&(f={...f}),w.useMemo(()=>{u.forEach((v,y)=>u.set(y,!1))},[n]),w.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),s==="popLayout"&&(e=l.jsx(gk,{isPresent:n,anchorX:a,root:c,children:e})),l.jsx(ss.Provider,{value:f,children:e})};function yk(){return new Map}function Ug(e=!0){const t=w.useContext(ss);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=w.useId();w.useEffect(()=>{if(e)return i(o)},[e]);const s=w.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,s]:[!0]}const Bi=e=>e.key||"";function yh(e){const t=[];return w.Children.forEach(e,n=>{w.isValidElement(n)&&t.push(n)}),t}const Wg=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:o="sync",propagate:s=!1,anchorX:a="left",root:c})=>{const[u,d]=Ug(s),h=w.useMemo(()=>yh(e),[e]),f=s&&!u?[]:h.map(Bi),v=w.useRef(!0),y=w.useRef(h),x=vc(()=>new Map),S=w.useRef(new Set),[g,m]=w.useState(h),[p,k]=w.useState(h);ym(()=>{v.current=!1,y.current=h;for(let E=0;E<p.length;E++){const j=Bi(p[E]);f.includes(j)?(x.delete(j),S.current.delete(j)):x.get(j)!==!0&&x.set(j,!1)}},[p,f.length,f.join("-")]);const b=[];if(h!==g){let E=[...h];for(let j=0;j<p.length;j++){const z=p[j],N=Bi(z);f.includes(N)||(E.splice(j,0,z),b.push(z))}return o==="wait"&&b.length&&(E=b),k(yh(E)),m(h),null}const{forceRender:T}=w.useContext(gc);return l.jsx(l.Fragment,{children:p.map(E=>{const j=Bi(E),z=s&&!u?!1:h===p||f.includes(j),N=()=>{if(S.current.has(j))return;if(S.current.add(j),x.has(j))x.set(j,!0);else return;let X=!0;x.forEach(it=>{it||(X=!1)}),X&&(T==null||T(),k(y.current),s&&(d==null||d()),r&&r())};return l.jsx(vk,{isPresent:z,initial:!v.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:o,root:c,onExitComplete:z?void 0:N,anchorX:a,children:E},j)})})},Bg=w.createContext({strict:!1}),xh={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let wh=!1;function xk(){if(wh)return;const e={};for(const t in xh)e[t]={isEnabled:n=>xh[t].some(r=>!!n[r])};vg(e),wh=!0}function Hg(){return xk(),o2()}function wk(e){const t=Hg();for(const n in e)t[n]={...t[n],...e[n]};vg(t)}const kk=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Uo(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||kk.has(e)}let $g=e=>!Uo(e);function Sk(e){typeof e=="function"&&($g=t=>t.startsWith("on")?!Uo(t):e(t))}try{Sk(require("@emotion/is-prop-valid").default)}catch{}function bk(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||($g(i)||n===!0&&Uo(i)||!t&&!Uo(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}const cs=w.createContext({});function jk(e,t){if(ls(e)){const{initial:n,animate:r}=e;return{initial:n===!1||li(n)?n:void 0,animate:li(r)?r:void 0}}return e.inherit!==!1?t:{}}function Tk(e){const{initial:t,animate:n}=jk(e,w.useContext(cs));return w.useMemo(()=>({initial:t,animate:n}),[kh(t),kh(n)])}function kh(e){return Array.isArray(e)?e.join(" "):e}const Kc=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Yg(e,t,n){for(const r in t)!xe(t[r])&&!jg(r,n)&&(e[r]=t[r])}function Ek({transformTemplate:e},t){return w.useMemo(()=>{const n=Kc();return Hc(n,t,e),Object.assign({},n.vars,n.style)},[t])}function _k(e,t){const n=e.style||{},r={};return Yg(r,n,e),Object.assign(r,Ek(e,t)),r}function Dk(e,t){const n={},r=_k(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const Kg=()=>({...Kc(),attrs:{}});function Ck(e,t,n,r){const i=w.useMemo(()=>{const o=Kg();return Tg(o,t,_g(r),e.transformTemplate,e.style),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};Yg(o,e.style,e),i.style={...o,...i.style}}return i}const Pk=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Gc(e){return typeof e!="string"||e.includes("-")?!1:!!(Pk.indexOf(e)>-1||/[A-Z]/u.test(e))}function Nk(e,t,n,{latestValues:r},i,o=!1,s){const c=(s??Gc(e)?Ck:Dk)(t,r,i,e),u=bk(t,typeof e=="string",o),d=e!==w.Fragment?{...u,...c,ref:n}:{},{children:h}=t,f=w.useMemo(()=>xe(h)?h.get():h,[h]);return w.createElement(e,{...d,children:f})}function Ak({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:Mk(n,r,i,e),renderState:t()}}function Mk(e,t,n,r){const i={},o=r(e,{});for(const f in o)i[f]=so(o[f]);let{initial:s,animate:a}=e;const c=ls(e),u=gg(e);t&&u&&!c&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let d=n?n.initial===!1:!1;d=d||s===!1;const h=d?a:s;if(h&&typeof h!="boolean"&&!as(h)){const f=Array.isArray(h)?h:[h];for(let v=0;v<f.length;v++){const y=Rc(e,f[v]);if(y){const{transitionEnd:x,transition:S,...g}=y;for(const m in g){let p=g[m];if(Array.isArray(p)){const k=d?p.length-1:0;p=p[k]}p!==null&&(i[m]=p)}for(const m in x)i[m]=x[m]}}}return i}const Gg=e=>(t,n)=>{const r=w.useContext(cs),i=w.useContext(ss),o=()=>Ak(e,t,r,i);return n?o():vc(o)},zk=Gg({scrapeMotionValuesFromProps:$c,createRenderState:Kc}),Lk=Gg({scrapeMotionValuesFromProps:Dg,createRenderState:Kg}),Rk=Symbol.for("motionComponentSymbol");function Ik(e,t,n){const r=w.useRef(n);w.useInsertionEffect(()=>{r.current=n});const i=w.useRef(null);return w.useCallback(o=>{var a;o&&((a=e.onMount)==null||a.call(e,o)),t&&(o?t.mount(o):t.unmount());const s=r.current;if(typeof s=="function")if(o){const c=s(o);typeof c=="function"&&(i.current=c)}else i.current?(i.current(),i.current=null):s(o);else s&&(s.current=o)},[t])}const qg=w.createContext({});function Er(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Vk(e,t,n,r,i,o){var S,g;const{visualElement:s}=w.useContext(cs),a=w.useContext(Bg),c=w.useContext(ss),u=w.useContext(Yc).reducedMotion,d=w.useRef(null);r=r||a.renderer,!d.current&&r&&(d.current=r(e,{visualState:t,parent:s,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,isSVG:o}));const h=d.current,f=w.useContext(qg);h&&!h.projection&&i&&(h.type==="html"||h.type==="svg")&&Fk(d.current,n,i,f);const v=w.useRef(!1);w.useInsertionEffect(()=>{h&&v.current&&h.update(n,c)});const y=n[tg],x=w.useRef(!!y&&!((S=window.MotionHandoffIsComplete)!=null&&S.call(window,y))&&((g=window.MotionHasOptimisedAnimation)==null?void 0:g.call(window,y)));return ym(()=>{h&&(v.current=!0,window.MotionIsMounted=!0,h.updateFeatures(),h.scheduleRenderMicrotask(),x.current&&h.animationState&&h.animationState.animateChanges())}),w.useEffect(()=>{h&&(!x.current&&h.animationState&&h.animationState.animateChanges(),x.current&&(queueMicrotask(()=>{var m;(m=window.MotionHandoffMarkAsComplete)==null||m.call(window,y)}),x.current=!1),h.enteringChildren=void 0)}),h}function Fk(e,t,n,r){const{layoutId:i,layout:o,drag:s,dragConstraints:a,layoutScroll:c,layoutRoot:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Qg(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!s||a&&Er(a),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:u})}function Qg(e){if(e)return e.options.allowProjection!==!1?e.projection:Qg(e.parent)}function qs(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&wk(r);const o=n?n==="svg":Gc(e),s=o?Lk:zk;function a(u,d){let h;const f={...w.useContext(Yc),...u,layoutId:Ok(u)},{isStatic:v}=f,y=Tk(u),x=s(u,v);if(!v&&vm){Uk();const S=Wk(f);h=S.MeasureLayout,y.visualElement=Vk(e,x,f,i,S.ProjectionNode,o)}return l.jsxs(cs.Provider,{value:y,children:[h&&y.visualElement?l.jsx(h,{visualElement:y.visualElement,...f}):null,Nk(e,u,Ik(x,y.visualElement,d),x,v,t,o)]})}a.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const c=w.forwardRef(a);return c[Rk]=e,c}function Ok({layoutId:e}){const t=w.useContext(gc).id;return t&&e!==void 0?t+"-"+e:e}function Uk(e,t){w.useContext(Bg).strict}function Wk(e){const t=Hg(),{drag:n,layout:r}=t;if(!n&&!r)return{};const i={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(e)||r!=null&&r.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function Bk(e,t){if(typeof Proxy>"u")return qs;const n=new Map,r=(o,s)=>qs(o,s,e,t),i=(o,s)=>r(o,s);return new Proxy(i,{get:(o,s)=>s==="create"?r:(n.has(s)||n.set(s,qs(s,void 0,e,t)),n.get(s))})}const Hk=(e,t)=>t.isSVG??Gc(e)?new S2(t):new g2(t,{allowProjection:e!==w.Fragment});class $k extends Zt{constructor(t){super(t),t.animationState||(t.animationState=_2(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();as(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let Yk=0;class Kk extends Zt{constructor(){super(...arguments),this.id=Yk++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const Gk={animation:{Feature:$k},exit:{Feature:Kk}};function xi(e){return{point:{x:e.pageX,y:e.pageY}}}const qk=e=>t=>Oc(t)&&e(t,xi(t));function Fr(e,t,n,r){return ci(e,t,qk(n),r)}const Xg=({current:e})=>e?e.ownerDocument.defaultView:null,Sh=(e,t)=>Math.abs(e-t);function Qk(e,t){const n=Sh(e.x,t.x),r=Sh(e.y,t.y);return Math.sqrt(n**2+r**2)}const bh=new Set(["auto","scroll"]);class Jg{constructor(t,n,{transformPagePoint:r,contextWindow:i=window,dragSnapToOrigin:o=!1,distanceThreshold:s=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=v=>{this.handleScroll(v.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Xs(this.lastMoveEventInfo,this.history),y=this.startEvent!==null,x=Qk(v.offset,{x:0,y:0})>=this.distanceThreshold;if(!y&&!x)return;const{point:S}=v,{timestamp:g}=fe;this.history.push({...S,timestamp:g});const{onStart:m,onMove:p}=this.handlers;y||(m&&m(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),p&&p(this.lastMoveEvent,v)},this.handlePointerMove=(v,y)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=Qs(y,this.transformPagePoint),U.update(this.updatePoint,!0)},this.handlePointerUp=(v,y)=>{this.end();const{onEnd:x,onSessionEnd:S,resumeAnimation:g}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&g&&g(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=Xs(v.type==="pointercancel"?this.lastMoveEventInfo:Qs(y,this.transformPagePoint),this.history);this.startEvent&&x&&x(v,m),S&&S(v,m)},!Oc(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=s,this.contextWindow=i||window;const c=xi(t),u=Qs(c,this.transformPagePoint),{point:d}=u,{timestamp:h}=fe;this.history=[{...d,timestamp:h}];const{onSessionStart:f}=n;f&&f(t,Xs(u,this.history)),this.removeListeners=gi(Fr(this.contextWindow,"pointermove",this.handlePointerMove),Fr(this.contextWindow,"pointerup",this.handlePointerUp),Fr(this.contextWindow,"pointercancel",this.handlePointerUp)),a&&this.startScrollTracking(a)}startScrollTracking(t){let n=t.parentElement;for(;n;){const r=getComputedStyle(n);(bh.has(r.overflowX)||bh.has(r.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const r=t===window,i=r?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},o={x:i.x-n.x,y:i.y-n.y};o.x===0&&o.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=o.x,this.lastMoveEventInfo.point.y+=o.y):this.history.length>0&&(this.history[0].x-=o.x,this.history[0].y-=o.y),this.scrollPositions.set(t,i),U.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Yt(this.updatePoint)}}function Qs(e,t){return t?{point:t(e.point)}:e}function jh(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Xs({point:e},t){return{point:e,delta:jh(e,Zg(t)),offset:jh(e,Xk(t)),velocity:Jk(t,.1)}}function Xk(e){return e[0]}function Zg(e){return e[e.length-1]}function Jk(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Zg(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>yt(t)));)n--;if(!r)return{x:0,y:0};const o=Be(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function Zk(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?$(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?$(n,e,r.max):Math.min(e,n)),e}function Th(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function eS(e,{top:t,left:n,bottom:r,right:i}){return{x:Th(e.x,n,i),y:Th(e.y,t,r)}}function Eh(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function tS(e,t){return{x:Eh(e.x,t.x),y:Eh(e.y,t.y)}}function nS(e,t){let n=.5;const r=je(e),i=je(t);return i>r?n=oi(t.min,t.max-r,e.min):r>i&&(n=oi(e.min,e.max-i,t.min)),dt(0,1,n)}function rS(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const ml=.35;function iS(e=ml){return e===!1?e=0:e===!0&&(e=ml),{x:_h(e,"left","right"),y:_h(e,"top","bottom")}}function _h(e,t,n){return{min:Dh(e,t),max:Dh(e,n)}}function Dh(e,t){return typeof e=="number"?e:e[t]||0}const oS=new WeakMap;class sS{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ie(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const o=h=>{n?(this.stopAnimation(),this.snapToCursor(xi(h).point)):this.pauseAnimation()},s=(h,f)=>{this.stopAnimation();const{drag:v,dragPropagation:y,onDragStart:x}=this.getProps();if(v&&!y&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Gw(v),!this.openDragLock))return;this.latestPointerEvent=h,this.latestPanInfo=f,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Fe(g=>{let m=this.getAxisMotionValue(g).get()||0;if(ut.test(m)){const{projection:p}=this.visualElement;if(p&&p.layout){const k=p.layout.layoutBox[g];k&&(m=je(k)*(parseFloat(m)/100))}}this.originPoint[g]=m}),x&&U.postRender(()=>x(h,f)),cl(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},a=(h,f)=>{this.latestPointerEvent=h,this.latestPanInfo=f;const{dragPropagation:v,dragDirectionLock:y,onDirectionLock:x,onDrag:S}=this.getProps();if(!v&&!this.openDragLock)return;const{offset:g}=f;if(y&&this.currentDirection===null){this.currentDirection=aS(g),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",f.point,g),this.updateAxis("y",f.point,g),this.visualElement.render(),S&&S(h,f)},c=(h,f)=>{this.latestPointerEvent=h,this.latestPanInfo=f,this.stop(h,f),this.latestPointerEvent=null,this.latestPanInfo=null},u=()=>Fe(h=>{var f;return this.getAnimationState(h)==="paused"&&((f=this.getAxisMotionValue(h).animation)==null?void 0:f.play())}),{dragSnapToOrigin:d}=this.getProps();this.panSession=new Jg(t,{onSessionStart:o,onStart:s,onMove:a,onSessionEnd:c,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,distanceThreshold:r,contextWindow:Xg(this.visualElement),element:this.visualElement.current})}stop(t,n){const r=t||this.latestPointerEvent,i=n||this.latestPanInfo,o=this.isDragging;if(this.cancel(),!o||!i||!r)return;const{velocity:s}=i;this.startAnimation(s);const{onDragEnd:a}=this.getProps();a&&U.postRender(()=>a(r,i))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Hi(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=Zk(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var o;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(o=this.visualElement.projection)==null?void 0:o.layout,i=this.constraints;t&&Er(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=eS(r.layoutBox,t):this.constraints=!1,this.elastic=iS(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Fe(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=rS(r.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Er(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=u2(r,i.root,this.visualElement.getTransformPagePoint());let s=tS(i.layout.layoutBox,o);if(n){const a=n(a2(s));this.hasMutatedConstraints=!!a,a&&(s=xg(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),c=this.constraints||{},u=Fe(d=>{if(!Hi(d,n,this.currentDirection))return;let h=c&&c[d]||{};s&&(h={min:0,max:0});const f=i?200:1e6,v=i?40:1e7,y={type:"inertia",velocity:r?t[d]:0,bounceStiffness:f,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...o,...h};return this.startAxisValueAnimation(d,y)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return cl(this.visualElement,t),r.start(Lc(t,r,0,n,this.visualElement,!1))}stopAnimation(){Fe(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Fe(t=>{var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Fe(n=>{const{drag:r}=this.getProps();if(!Hi(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n],c=o.get()||0;o.set(t[n]-$(s,a,.5)+c)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Er(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Fe(s=>{const a=this.getAxisMotionValue(s);if(a&&this.constraints!==!1){const c=a.get();i[s]=nS({min:c,max:c},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Fe(s=>{if(!Hi(s,t,null))return;const a=this.getAxisMotionValue(s),{min:c,max:u}=this.constraints[s];a.set($(c,u,i[s]))})}addListeners(){if(!this.visualElement.current)return;oS.set(this.visualElement,this);const t=this.visualElement.current,n=Fr(t,"pointerdown",c=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&!fg(c.target)&&this.start(c)}),r=()=>{const{dragConstraints:c}=this.getProps();Er(c)&&c.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),U.read(r);const s=ci(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(Fe(d=>{const h=this.getAxisMotionValue(d);h&&(this.originPoint[d]+=c[d].translate,h.set(h.get()+c[d].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=ml,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function Hi(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function aS(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class lS extends Zt{constructor(t){super(t),this.removeGroupControls=$e,this.removeListeners=$e,this.controls=new sS(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||$e}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners()}}const Ch=e=>(t,n)=>{e&&U.postRender(()=>e(t,n))};class cS extends Zt{constructor(){super(...arguments),this.removePointerDownListener=$e}onPointerDown(t){this.session=new Jg(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Xg(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Ch(t),onStart:Ch(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&U.postRender(()=>i(o,s))}}}mount(){this.removePointerDownListener=Fr(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Js=!1;class uS extends w.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),Js&&o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),ao.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,{projection:s}=r;return s&&(s.isPresent=o,Js=!0,i||t.layoutDependency!==n||n===void 0||t.isPresent!==o?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||U.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Fc.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;Js=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function e0(e){const[t,n]=Ug(),r=w.useContext(gc);return l.jsx(uS,{...e,layoutGroup:r,switchLayoutGroup:w.useContext(qg),isPresent:t,safeToRemove:n})}const dS={pan:{Feature:cS},drag:{Feature:lS,ProjectionNode:Og,MeasureLayout:e0}};function Ph(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,o=r[i];o&&U.postRender(()=>o(t,xi(t)))}class hS extends Zt{mount(){const{current:t}=this.node;t&&(this.unmount=qw(t,(n,r)=>(Ph(this.node,r,"Start"),i=>Ph(this.node,i,"End"))))}unmount(){}}class fS extends Zt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=gi(ci(this.node.current,"focus",()=>this.onFocus()),ci(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Nh(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),o=r[i];o&&U.postRender(()=>o(t,xi(t)))}class pS extends Zt{mount(){const{current:t}=this.node;t&&(this.unmount=Jw(t,(n,r)=>(Nh(this.node,r,"Start"),(i,{success:o})=>Nh(this.node,i,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const gl=new WeakMap,Zs=new WeakMap,mS=e=>{const t=gl.get(e.target);t&&t(e)},gS=e=>{e.forEach(mS)};function vS({root:e,...t}){const n=e||document;Zs.has(n)||Zs.set(n,{});const r=Zs.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(gS,{root:e,...t})),r[i]}function yS(e,t,n){const r=vS(t);return gl.set(e,n),r.observe(e),()=>{gl.delete(e),r.unobserve(e)}}const xS={some:0,all:1};class wS extends Zt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:xS[i]},a=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:h}=this.node.getProps(),f=u?d:h;f&&f(c)};return yS(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(kS(t,n))&&this.startObserver()}unmount(){}}function kS({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const SS={inView:{Feature:wS},tap:{Feature:pS},focus:{Feature:fS},hover:{Feature:hS}},bS={layout:{ProjectionNode:Og,MeasureLayout:e0}},jS={...Gk,...SS,...dS,...bS},ee=Bk(jS,Hk);function Ge(){!Uc.current&&mg();const[e]=w.useState(Io.current);return e}/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ES=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),Ah=e=>{const t=ES(e);return t.charAt(0).toUpperCase()+t.slice(1)},t0=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim(),_S=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var DS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=w.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:s,...a},c)=>w.createElement("svg",{ref:c,...DS,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:t0("lucide",i),...!o&&!_S(a)&&{"aria-hidden":"true"},...a},[...s.map(([u,d])=>w.createElement(u,d)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=(e,t)=>{const n=w.forwardRef(({className:r,...i},o)=>w.createElement(CS,{ref:o,iconNode:t,className:t0(`lucide-${TS(Ah(e))}`,`lucide-${e}`,r),...i}));return n.displayName=Ah(e),n};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],qc=Q("arrow-left",PS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],nr=Q("arrow-right",NS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],MS=Q("bell",AS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],LS=Q("calendar-days",zS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],IS=Q("calendar",RS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],FS=Q("circle-check-big",VS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=[["path",{d:"M12 6v6h4",key:"135r8i"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],US=Q("clock-3",OS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],BS=Q("code",WS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],ui=Q("external-link",HS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],YS=Q("facebook",$S);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],n0=Q("instagram",KS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],qS=Q("linkedin",GS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],r0=Q("mail",QS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],JS=Q("map-pin",XS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],eb=Q("menu",ZS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],i0=Q("mic",tb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]],rb=Q("music-2",nb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],ob=Q("panels-top-left",ib);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]],o0=Q("ticket",sb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],s0=Q("twitter",ab);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Wo=Q("users",lb);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ub=Q("x",cb),Qc="/assets/logo_red-Cuc5EyMY.png",a0="tedxwushs-language",ea="ja",l0=new Set(["ja","en"]),db={ja:{description:"TEDxWUSHS Youthは、早稲田大学高等学院の生徒が独立して企画・運営する、日本語と英語のバイリンガルTEDxイベントです。Ideas change everything.",locale:"ja_JP"},en:{description:"TEDxWUSHS Youth is an independently organized, bilingual Japanese-English TEDx event led by students of Waseda University Senior High School. Ideas change everything.",locale:"en_US"}},c0=w.createContext(void 0),hb=()=>{if(typeof window>"u")return ea;try{const e=window.localStorage.getItem(a0);return l0.has(e)?e:ea}catch{return ea}},$i=(e,t)=>{const n=document.querySelector(e);n&&n.setAttribute("content",t)},fb=({children:e})=>{const[t,n]=w.useState(hb),r=w.useCallback(o=>{l0.has(o)&&n(o)},[]);w.useEffect(()=>{document.documentElement.lang=t;try{window.localStorage.setItem(a0,t)}catch{}const o=db[t];$i('meta[name="description"]',o.description),$i('meta[property="og:description"]',o.description),$i('meta[property="og:locale"]',o.locale),$i('meta[property="twitter:description"]',o.description)},[t]);const i=w.useMemo(()=>({language:t,setLanguage:r}),[t,r]);return l.jsx(c0.Provider,{value:i,children:e})},le=()=>{const e=w.useContext(c0);if(!e)throw new Error("useLanguage must be used within a LanguageProvider.");return e},pb={ja:{group:"表示言語",ja:"日本語で表示",en:"英語で表示"},en:{group:"Display language",ja:"Show in Japanese",en:"Show in English"}},mb=()=>{const{language:e,setLanguage:t}=le(),n=pb[e],r=()=>t(e==="ja"?"en":"ja"),i=e==="ja"?"現在は日本語です。英語に切り替える":"Currently displayed in English. Switch to Japanese";return l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"language-switcher language-switcher--desktop",role:"group","aria-label":n.group,children:[l.jsx("button",{type:"button",className:`language-option ${e==="ja"?"active":""}`,"aria-label":n.ja,"aria-pressed":e==="ja",onClick:()=>t("ja"),children:"JA"}),l.jsx("span",{className:"language-divider","aria-hidden":"true",children:"/"}),l.jsx("button",{type:"button",className:`language-option ${e==="en"?"active":""}`,"aria-label":n.en,"aria-pressed":e==="en",onClick:()=>t("en"),children:"EN"})]}),l.jsxs("button",{type:"button",className:"language-toggle-mobile","aria-label":i,onClick:r,children:[l.jsx("span",{className:`language-toggle-code ${e==="ja"?"active":""}`,"aria-hidden":"true",children:"JA"}),l.jsx("span",{className:"language-toggle-divider","aria-hidden":"true",children:"/"}),l.jsx("span",{className:`language-toggle-code ${e==="en"?"active":""}`,"aria-hidden":"true",children:"EN"})]}),l.jsx("style",{children:`
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
      `})]})},gb=()=>{const[e,t]=w.useState(!1),[n,r]=w.useState(!1),i=bn(),{language:o}=le(),s=Ge(),a=w.useRef(null),c=w.useRef(null),u=w.useRef(null),d=w.useRef(null),h=w.useRef(!1),f=w.useRef(!1),v=w.useRef(i.pathname),y=w.useRef(!1);v.current=i.pathname,w.useEffect(()=>{const p=()=>{y.current||t(window.scrollY>50)};return window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)},[]);const x=[{name:"Home",href:"/"},{name:"Program",href:"/program"},{name:"Speakers",href:"/speakers"},{name:"Team",href:"/team"},{name:"About",href:"/about"},{name:"Join Us",href:"/join-us"},{name:"FAQ",href:"/faq"}],S=p=>p==="/"?i.pathname==="/":i.pathname===p||i.pathname.startsWith(`${p}/`);w.useEffect(()=>{h.current=!1,r(!1)},[i.pathname]),w.useEffect(()=>{var p,k;if(n){const b=window.requestAnimationFrame(()=>{var T;(T=d.current)==null||T.focus({preventScroll:!0})});return()=>window.cancelAnimationFrame(b)}f.current?(f.current=!1,(p=c.current??a.current)==null||p.focus()):h.current&&(h.current=!1,(k=u.current)==null||k.focus())},[n]),w.useEffect(()=>{if(!n)return;const p=document.body,k=document.documentElement,b=i.pathname,T=window.scrollY,E={position:p.style.position,top:p.style.top,left:p.style.left,width:p.style.width,overflow:p.style.overflow},j=k.style.overflow;return y.current=!0,k.style.overflow="hidden",p.style.position="fixed",p.style.top=`-${T}px`,p.style.left="0",p.style.width="100%",p.style.overflow="hidden",()=>{k.style.overflow=j,p.style.position=E.position,p.style.top=E.top,p.style.left=E.left,p.style.width=E.width,p.style.overflow=E.overflow,y.current=!1,v.current===b?(window.scrollTo({top:T,left:0,behavior:"auto"}),t(T>50)):(window.scrollTo({top:0,left:0,behavior:"auto"}),t(!1))}},[n,i.pathname]),w.useEffect(()=>{const p=window.matchMedia("(min-width: 901px)"),k=b=>{if(!b.matches||!n)return;const T=document.getElementById("mobile-navigation"),E=document.activeElement;f.current=(T==null?void 0:T.contains(E))||u.current===E,h.current=!1,r(!1)};return k(p),typeof p.addEventListener=="function"?(p.addEventListener("change",k),()=>p.removeEventListener("change",k)):(p.addListener(k),()=>p.removeListener(k))},[n]),w.useEffect(()=>{if(!n)return;const p=k=>{k.key==="Escape"&&(h.current=!0,r(!1))};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[n]);const g=()=>{n&&(h.current=!0),r(p=>!p)},m=p=>{h.current=i.pathname===p,r(!1)};return l.jsxs(l.Fragment,{children:[l.jsx("a",{href:"#main-content",className:"skip-link",children:o==="ja"?"本文へ移動":"Skip to main content"}),l.jsxs("header",{className:`header ${e?"scrolled":""}`,children:[l.jsxs("div",{className:"container header-content",children:[l.jsx(se,{ref:a,to:"/",className:"logo-container",children:l.jsx("img",{src:Qc,alt:"TEDxWUSHS Youth",className:"header-logo"})}),l.jsxs("div",{className:"header-actions",children:[l.jsx("nav",{className:"desktop-nav","aria-label":o==="ja"?"メインナビゲーション":"Primary navigation",children:l.jsx("ul",{lang:"en",children:x.map(p=>l.jsx("li",{children:l.jsx(se,{to:p.href,ref:S(p.href)?c:void 0,className:S(p.href)?"active":"","aria-current":i.pathname===p.href?"page":void 0,children:p.name})},p.name))})}),l.jsx("button",{type:"button",ref:u,className:"mobile-menu-btn","aria-label":n?o==="ja"?"メニューを閉じる":"Close menu":o==="ja"?"メニューを開く":"Open menu","aria-expanded":n,"aria-controls":"mobile-navigation",onClick:g,children:n?l.jsx(ub,{size:28,"aria-hidden":"true"}):l.jsx(eb,{size:28,"aria-hidden":"true"})}),l.jsx(mb,{})]})]}),l.jsx(Wg,{children:n&&l.jsx(ee.nav,{id:"mobile-navigation",className:"mobile-menu","aria-label":o==="ja"?"モバイルナビゲーション":"Mobile navigation",initial:s?!1:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:s?{opacity:1,y:0}:{opacity:0,y:-20},transition:s?{duration:0}:{duration:.2},children:l.jsx("ul",{lang:"en",children:x.map((p,k)=>l.jsx("li",{children:l.jsx(se,{to:p.href,ref:k===0?d:void 0,onClick:()=>m(p.href),className:S(p.href)?"active-mobile":"","aria-current":i.pathname===p.href?"page":void 0,children:p.name})},p.name))})})}),l.jsx("style",{children:`
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
      `})]})]})},vb=()=>{const e=new Date().getFullYear();return l.jsxs("footer",{id:"footer",className:"footer",lang:"en",children:[l.jsxs("div",{className:"container footer-content",children:[l.jsxs("div",{className:"footer-top",children:[l.jsxs("div",{className:"footer-brand",children:[l.jsx(se,{className:"footer-brand-link",to:"/",children:l.jsx("img",{src:Qc,alt:"TEDxWUSHS Youth",className:"footer-logo"})}),l.jsx("p",{className:"footer-tagline",children:"This independent TEDx event is operated under license from TED."})]}),l.jsxs("nav",{className:"footer-links","aria-labelledby":"footer-quick-links-heading",children:[l.jsx("h4",{id:"footer-quick-links-heading",children:"Quick Links"}),l.jsxs("ul",{children:[l.jsx("li",{children:l.jsx(se,{to:"/program",children:"Program"})}),l.jsx("li",{children:l.jsx(se,{to:"/speakers",children:"Speakers"})}),l.jsx("li",{children:l.jsx(se,{to:"/team",children:"Team"})}),l.jsx("li",{children:l.jsx(se,{to:"/about",children:"About Us"})}),l.jsx("li",{children:l.jsx("a",{href:"https://www.waseda.jp/school/shs/",target:"_blank",rel:"noopener noreferrer",children:"Waseda SHS"})}),l.jsx("li",{children:l.jsx("a",{href:"https://www.ted.com/about/programs-initiatives/tedx-program",target:"_blank",rel:"noopener noreferrer",children:"TEDx Program"})})]})]}),l.jsxs("div",{className:"footer-social",children:[l.jsx("h4",{children:"Connect"}),l.jsxs("div",{className:"social-icons",children:[l.jsx("a",{href:"https://www.instagram.com/tedxwushs/",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:l.jsx(n0,{size:24,"aria-hidden":"true"})}),l.jsx("a",{href:"https://x.com/TEDxWUSHS",target:"_blank",rel:"noopener noreferrer","aria-label":"X (Twitter)",children:l.jsx(s0,{size:24,"aria-hidden":"true"})}),l.jsx("a",{href:"https://note.com/tedx_wushs_youth",target:"_blank",rel:"noopener noreferrer","aria-label":"TEDxWUSHS Youth on note",title:"note",children:l.jsx("span",{className:"note-wordmark","aria-hidden":"true",children:"note"})}),l.jsx("a",{href:"mailto:tedxwushs@gmail.com","aria-label":"Email",children:l.jsx(r0,{size:24,"aria-hidden":"true"})})]}),l.jsx("p",{className:"footer-handle",children:"@TEDxWUSHS"}),l.jsx("a",{className:"footer-email",href:"mailto:tedxwushs@gmail.com",children:"tedxwushs@gmail.com"})]})]}),l.jsx("div",{className:"footer-bottom",children:l.jsxs("p",{children:["© ",e," TEDxWUSHS Youth. All Rights Reserved."]})})]}),l.jsx("style",{children:`
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
          margin-top: 0.5rem;
          color: #aaa;
          font-size: 0.9rem;
          overflow-wrap: anywhere;
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
      `})]})},yb="/assets/poster-DnR2-vAa.png",xb={ja:{description:"早稲田大学高等学院の生徒が独立して企画・運営するTEDxイベント。アイデアには、すべてを変える力がある。その可能性を高等学院から。",eventLabel:"開催情報",date:"2026年10月31日（土）",reception:"受付開始 13:30",venue:"早稲田大学高等学院 講堂",posterAlt:"TEDxWUSHS Youth「Ideas change everything.」イベントポスター",programAction:"イベント詳細",applicationAction:"応募フォーム"},en:{description:"TEDxWUSHS Youth is an independently organized TEDx event led by students at Waseda University Senior High School. From our school, we explore the power of ideas to change everything.",eventLabel:"Program details",date:"Saturday, October 31, 2026",reception:"Doors open 1:30 PM",venue:"Waseda University Senior High School Auditorium",posterAlt:"TEDxWUSHS Youth event poster: Ideas change everything.",programAction:"Event Details",applicationAction:"Application Form"}},wb=()=>{const{language:e}=le(),t=Ge(),n=xb[e];return l.jsxs("section",{className:"hero",children:[l.jsxs("div",{className:"container hero-container",children:[l.jsxs(ee.div,{className:"hero-content",initial:t?!1:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:t?0:.8},children:[l.jsxs(ee.span,{className:"hero-tagline",lang:"en",initial:t?!1:{opacity:0},animate:{opacity:1},transition:t?{duration:0}:{delay:.5},children:[l.jsx("span",{className:"brand-name",children:"TEDxWUSHS Youth"})," · Waseda University Senior High School"]}),l.jsxs("h1",{className:"hero-title",lang:"en",children:["Ideas change ",l.jsx("br",{})," ",l.jsx("span",{className:"highlight-red",children:"everything."})]}),l.jsx("p",{className:"hero-description",children:n.description}),l.jsxs("div",{className:"hero-event-details",role:"group","aria-label":n.eventLabel,children:[l.jsxs("div",{className:"hero-event-detail",children:[l.jsx(LS,{size:22,"aria-hidden":"true"}),l.jsxs("div",{children:[l.jsx("span",{lang:"en",children:"Date"}),l.jsx("time",{dateTime:"2026-10-31",children:l.jsx("strong",{children:n.date})})]})]}),l.jsxs("div",{className:"hero-event-detail",children:[l.jsx(US,{size:22,"aria-hidden":"true"}),l.jsxs("div",{children:[l.jsx("span",{lang:"en",children:"Time"}),l.jsx("strong",{children:"14:00～18:00"}),l.jsx("small",{children:n.reception})]})]}),l.jsxs("div",{className:"hero-event-detail",children:[l.jsx(JS,{size:22,"aria-hidden":"true"}),l.jsxs("div",{children:[l.jsx("span",{lang:"en",children:"Venue"}),l.jsx("strong",{children:n.venue})]})]})]}),l.jsxs("div",{className:"hero-cta",children:[l.jsx(se,{to:"/program",className:"btn btn-primary",children:n.programAction}),l.jsx(se,{to:"/join-us/audience",className:"btn btn-outline",children:n.applicationAction})]})]}),l.jsx(ee.div,{className:"hero-visual",initial:t?!1:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:t?0:1,ease:"easeOut"},children:l.jsxs("div",{className:"poster-container",children:[l.jsx("img",{src:yb,alt:n.posterAlt,className:"hero-poster"}),l.jsx("div",{className:"poster-glow","aria-hidden":"true"})]})})]}),l.jsx("style",{children:`
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
      `})]})},vl="/assets/gakuinsai-BWIVjSAN.png",Xc="https://docs.google.com/forms/d/e/1FAIpQLScgIJmzQPqA0wPBogA5n2a7ObTGbCNzBIzN5oXXrNjf-BlYSg/viewform?usp=sharing&ouid=100328861093802403857",kb=[{id:"school-fest-2026-feature",publishedAt:"2026-10-12",category:"Feature",href:"/school-fest-2026",copy:{ja:{title:"学院祭英語ディベート特集を公開",summary:"学院祭で実施した3校との英語ディベートを、対戦記録、TED/TEDxの理念、オーディエンスを取り込んだ今回の工夫とともに紹介します。",action:"特集記事を読む"},en:{title:"Gakuinsai English Debate feature",summary:"Explore our three interschool debates through the match records, the ideas behind TED and TEDx, and the audience-inclusive format we developed.",action:"Read the feature"}}},{id:"waseda-shs-official-announcement",publishedAt:"2026-10-09",category:"Announcement",href:"https://www.waseda.jp/school/shs/news/2026/10/09/11248/",external:!0,copy:{ja:{title:"高等学院公式サイトに開催案内が掲載されました",summary:"早稲田大学高等学院の公式サイトで、10月31日（土）開催のTEDxWUSHS Youth 2026「Breakshot」が紹介されました。",action:"高等学院の掲載記事を読む"},en:{title:"Event announcement published by Waseda University Senior High School",summary:"Waseda University Senior High School has published an official announcement for TEDxWUSHS Youth 2026 “Breakshot,” taking place on Saturday, October 31.",action:"Read the official announcement"}}},{id:"audience-registration-open",publishedAt:"2026-10-01",category:"Registration",href:Xc,external:!0,copy:{ja:{title:"オーディエンス募集を開始しました",summary:"TEDxWUSHS Youth 2026のオーディエンス募集を開始しました。対象は早稲田大学高等学院の生徒及びその保護者です。",action:"参加を申し込む"},en:{title:"Audience registration is now open",summary:"Audience registration for TEDxWUSHS Youth 2026 is now open to students of Waseda University Senior High School and their parents or guardians.",action:"Apply to attend"}}},{id:"gakuinsai-2026-program",publishedAt:"2026-09-30",category:"Event",href:vl,external:!0,image:vl,imageAlt:{ja:"TEDxWUSHS Youth学院祭企画「English Debate」のポスター",en:"Poster for the TEDxWUSHS Youth English Debate program at Gakuinsai 2026"},copy:{ja:{title:"学院祭で英語ディベート企画を実施します",summary:"10月10日（土）・11日（日）、学院祭のゼミ室2でTEDxWUSHS Youthの団体紹介を行います。頌栄女子学院高等学校・慶應義塾高等学校・早稲田大学本庄高等学院ESSと、社会奉仕・所得税・友情と恋愛を論題に英語で議論します。",action:"ポスターを拡大して見る"},en:{title:"English debates at Gakuinsai 2026",summary:"On October 10 and 11 in Seminar Room 2, we will introduce TEDxWUSHS Youth and hold philosophical English debates with Shoei Girls’ Senior High School, Keio Senior High School, and Waseda University Honjo Senior High School ESS on community service, income tax, and friendship versus romantic relationships.",action:"View the full poster"}}},{id:"official-note-launched",publishedAt:"2026-09-30",category:"note",href:"https://note.com/tedx_wushs_youth/n/n01e4f29a9fca",external:!0,copy:{ja:{title:"公式noteを更新しました",summary:"公式noteで「TEDxWUSHS Youth 公式note始めました！」を公開しました。今後、活動やイベントに関する情報を発信していきます。",action:"noteの記事を読む"},en:{title:"Official note updated",summary:"We published “TEDxWUSHS Youth 公式note始めました！” and will share more updates about our activities and the event.",action:"Read on note"}}},{id:"full-speaker-lineup-announced",publishedAt:"2026-09-29",category:"Speakers",href:"/speakers",copy:{ja:{title:"全登壇者のプロフィールを公開しました",summary:"TEDxWUSHS Youth 2026に登壇する全7名のスピーカー情報を公開しました。",action:"全登壇者を見る"},en:{title:"Full speaker lineup announced",summary:"Profiles for all seven TEDxWUSHS Youth 2026 speakers are now available.",action:"View the full lineup"}}},{id:"speaker-information-update",publishedAt:"2026-09-27",category:"Speakers",href:"/speakers",copy:{ja:{title:"スピーカー情報を更新しました",summary:"TEDxWUSHS Youth 2026に登壇するスピーカーのプロフィールと講演情報を更新しました。",action:"スピーカー情報を見る"},en:{title:"Speaker information updated",summary:"We have updated the profiles and talk information for the TEDxWUSHS Youth 2026 speakers.",action:"View speakers"}}}],Mh={ja:{eyebrow:"Newsroom",titleLead:"Latest",titleAccent:"Updates",description:"TEDxWUSHS Youthの開催準備や登壇者に関する最新情報をお知らせします。",listLabel:"TEDxWUSHS Youthの更新情報"},en:{eyebrow:"Newsroom",titleLead:"Latest",titleAccent:"Updates",description:"The latest announcements about TEDxWUSHS Youth, our speakers, and event preparations.",listLabel:"TEDxWUSHS Youth updates"}},Sb=e=>e.replaceAll("-","."),bb=()=>{const{language:e}=le(),t=Ge(),n=Mh[e]??Mh.ja,r=[...kb].sort((i,o)=>o.publishedAt.localeCompare(i.publishedAt));return l.jsxs("section",{className:"updates section-padding","aria-labelledby":"updates-heading",children:[l.jsxs("div",{className:"container",children:[l.jsxs(ee.header,{className:"updates-header",initial:t?!1:{opacity:0,y:20},whileInView:t?void 0:{opacity:1,y:0},viewport:{once:!0},transition:{duration:t?0:.6},children:[l.jsxs("div",{children:[l.jsx("p",{className:"updates-eyebrow",lang:"en",children:n.eyebrow}),l.jsxs("h2",{id:"updates-heading",className:"updates-title",lang:"en",children:[n.titleLead," ",l.jsx("span",{className:"highlight-red",children:n.titleAccent})]})]}),l.jsx("p",{className:"updates-description",children:n.description})]}),l.jsx("ol",{className:"updates-list","aria-label":n.listLabel,children:r.map((i,o)=>{var f,v;const s=i.copy[e]??i.copy.ja,a=((f=i.imageAlt)==null?void 0:f[e])??((v=i.imageAlt)==null?void 0:v.ja)??"",c=i.external?"a":se,u=i.external?{href:i.href,target:"_blank",rel:"noopener noreferrer"}:{to:i.href},d=i.external?ui:nr,h=e==="en"?" (opens in a new tab)":"（新しいタブで開きます）";return l.jsx(ee.li,{initial:t?!1:{opacity:0,y:16},whileInView:t?void 0:{opacity:1,y:0},viewport:{once:!0},transition:{duration:t?0:.5,delay:t?0:o*.08},children:l.jsxs(c,{className:`updates-item${i.image?" updates-item--with-image":""}`,"aria-label":`${s.action}: ${s.title}${i.external?h:""}`,...u,children:[i.image&&l.jsx("span",{className:"updates-item-media",children:l.jsx("img",{src:i.image,alt:a,loading:"lazy",decoding:"async"})}),l.jsxs("div",{className:"updates-item-body",children:[l.jsxs("div",{className:"updates-meta",children:[l.jsx("time",{dateTime:i.publishedAt,lang:"en",children:Sb(i.publishedAt)}),l.jsx("span",{lang:"en",children:i.category})]}),l.jsx("h3",{children:s.title}),l.jsx("p",{children:s.summary}),l.jsx("span",{className:"updates-action",children:s.action})]}),l.jsx("span",{className:"updates-arrow","aria-hidden":"true",children:l.jsx(d,{size:22})})]})},i.id)})})]}),l.jsx("style",{children:`
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
      `})]})},jb={ja:{programLink:"TEDxプログラムについて詳しく見る",descriptions:["TEDxWUSHS Youthは、早稲田大学高等学院の生徒が独立して企画・運営するTEDxイベントです。若者ならではの視点とパッションを武器に、高校生という枠を超えた、社会に響くメッセージを発信します。私たちは、対話を通じて互いの可能性を広げ、新しい一歩を踏み出すきっかけを作ります。","TEDxは、地域で自主的に運営されるイベントを通じて、人々がTEDのような体験を共有するためのプログラムです。TEDxWUSHS Youthでは、TED Talksの映像と7名のライブスピーカーによるトークを組み合わせ、対話とつながりを生み出します。","2026年のテーマは「Breakshot」。人生の軌道を変えた一打をテーマに、7名のスピーカーがそれぞれのアイデアを共有します。"],venue:"早稲田大学高等学院 講堂"},en:{programLink:"Learn more about the TEDx program",descriptions:["TEDxWUSHS Youth is an independently organized TEDx event conceived and produced by students at Waseda University Senior High School. Drawing on the perspectives and passion unique to young people, we share messages that reach beyond the boundaries of high school. Through dialogue, we aim to expand one another’s possibilities and inspire a first step toward change.","TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. TEDxWUSHS Youth combines TED Talks video with talks from seven live speakers to spark discussion and connection.","Our 2026 theme is “Breakshot.” Seven speakers will share the ideas and defining moments that changed the course of their lives."],venue:"Waseda University Senior High School Auditorium"}},Tb=()=>{const{language:e}=le(),t=Ge(),n=jb[e];return l.jsxs("section",{id:"about",className:"about section-padding",children:[l.jsx("div",{className:"container",children:l.jsx("div",{className:"about-grid",children:l.jsxs(ee.div,{className:"about-item about-item--combined",initial:t?!1:{opacity:0,y:30},whileInView:t?void 0:{opacity:1,y:0},viewport:{once:!0},transition:{duration:t?0:.6},children:[l.jsx("h2",{className:"about-logo-heading",children:l.jsx("img",{src:Qc,alt:"TEDxWUSHS Youth",className:"about-logo"})}),l.jsx("div",{className:"about-description",children:n.descriptions.map(r=>l.jsx("p",{children:r},r))}),l.jsxs("a",{href:"https://www.ted.com/about/programs-initiatives/tedx-program",target:"_blank",rel:"noopener noreferrer",className:"highlight-link program-link",children:[n.programLink," ↗"]}),l.jsxs("p",{className:"event-info",children:[l.jsx("strong",{lang:"en",children:"Date:"})," ",l.jsx("span",{lang:"en",children:"October 31, 2026 (14:00 - 18:00 / Reception 13:30)"}),l.jsx("br",{}),l.jsx("strong",{lang:"en",children:"Venue:"})," ",l.jsx("a",{href:"https://www.waseda.jp/school/shs/",target:"_blank",rel:"noopener noreferrer",className:"highlight-link",children:n.venue}),", ",l.jsx("span",{lang:"en",children:"Nerima, Tokyo"})]})]})})}),l.jsx("style",{children:`
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
      `})]})},Eb="/assets/enomoto-takayuki-DNGDHC06.jpg",_b="/assets/hasegawa-keisuke-DYSgj9AY.jpg",Db="/assets/reon-hiruma-CtjqnzZU.jpg",Cb="/assets/horise-yoshito-BMWy-myU.jpg",Pb="/assets/kogure-masahisa-jgnY9mTV.jpg",Nb="/assets/kuroki-yuto-H_vlZVz7.jpg",Ab="/assets/takezawa-mamoru-CgZku-6Z.jpg",u0=e=>{const t=[];let n=0;for([2,2].forEach(r=>{n>=e.length||(t.push(e.slice(n,n+r)),n+=r)});n<e.length;)t.push(e.slice(n,n+3)),n+=3;return t},d0=[{id:"enomoto-takayuki",displayOrder:30,published:!0,featured:!0,image:Eb,imagePosition:"50% 42%",name:{ja:"榎本 隆之",en:"Takayuki Enomoto"},role:{ja:"早稲田大学高等学院 国語科教員",en:"Japanese Language Educator, Waseda University Senior High School"},shortBio:{ja:"国語科指導、国際交流・芸術プログラムを通して、グローバルな文脈に造詣のある高校生の育成を目指している。",en:"A Japanese language educator with experience in textbook editing, international exchange initiatives, and comparative teacher education."},intro:{ja:["1964年生まれ。中高国語科教員。早稲田大学、コロラド州立大学などを経て、現在は早稲田大学高等学院所属。国語科指導をはじめ各種国際交流プログラムや芸術プログラムを通じて、グローバルな文脈に造詣のあるスーパー高校生を育成することを目指している。","高等学校国語科検定教科書の編集に長く携わり、教員養成の比較教育に関心がある。"],en:["An accomplished junior and senior high school Japanese language literacy educator with academic and professional backgrounds at Waseda University and Colorado State University. He currently serves on the faculty at Waseda University Senior High School.","He is dedicated to nurturing exceptional, globally minded high school students through comprehensive Japanese language instruction, international exchange initiatives, and music programs. He brings extensive experience in editing government-approved high school textbooks of Japanese language and literature, complemented by a strong research interest in comparative education in teacher education programs."]}},{id:"hasegawa-keisuke",displayOrder:70,published:!0,featured:!0,image:_b,imagePosition:"50% 42%",name:{ja:"長谷川 慶佑",en:"Keisuke Hasegawa"},role:{ja:"早稲田大学高等学院 1年",en:"First-year Student, Waseda University Senior High School"},shortBio:{ja:"中学時代に「ビオトープ管理委員会」を立ち上げ、環境保全活動を牽引。環境・文芸の両分野で多数の受賞実績を持つ。",en:"Founder of a school Biotope Management Committee, with numerous awards in environmental conservation and literature."},intro:{ja:["2010年福島県生まれ。中学時代に校内組織「ビオトープ管理委員会」を自ら立ち上げ、環境保全活動を牽引。「全国学校・園庭ビオトープコンクール2023文部科学大臣賞」や「第59回全国野生生物保護活動発表大会環境大臣賞」を受賞する。","さらに「令和6年度道路ふれあい月間推進標語最優秀賞（国土交通大臣表彰）」、「第44回福島県川柳賞青少年奨励賞」など、環境・文芸の両分野で多数の受賞実績を持つ。"],en:["Born in Fukushima Prefecture in 2010, he has won numerous literary contests, including the 2024 Road Fureai Month Promotion Slogan Grand Prize, the 44th Fukushima Prefecture Senryu Award Youth Encouragement Prize, and the “Thinking Together: Fukushima, Towards the Environment Beyond” Challenge Award 2023.","The Biotope Management Committee activity he initiated at school during junior high received the 2023 National School/Garden Biotope Contest Minister of Education, Culture, Sports, Science and Technology Award and the 59th National Wildlife Protection Activity Presentation Competition Minister of the Environment Award. In his talk, he will share insights drawn from experiences related to the Fukushima Daiichi Nuclear Power Plant accident and his activities to date."]}},{id:"horise-yoshito",displayOrder:60,published:!0,featured:!0,image:Cb,imagePosition:"50% 45%",name:{ja:"堀瀬 善仁",en:"Yoshito Horise"},role:{ja:"早稲田大学高等学院 2年",en:"Second-year Student, Waseda University Senior High School"},shortBio:{ja:"早稲田大学高等学院2年。7度の転校と多文化経験を持ち、AI姿勢認識を活用した語学ツール「KATA」を開発。",en:"A sophomore at Waseda University Senior High School with seven school changes and multicultural experience, and the developer of “KATA,” an AI-based language-learning tool."},intro:{ja:["早稲田大学高等学院2年。日本・台湾・香港で7度の転校を経験し、カナダ・オーストラリア・フランスでの国際経験を積む。日本語・中国語を母語とし、英語・フランス語・韓国語を学習中。国際HANAシンポジウム2年連続登壇、AI時代における人間の主体性を研究。","東大AIハッカソン優秀賞受賞。AI姿勢認識を活用した語学ツール「KATA」を開発。現在は、Stanford e-Japanに挑戦し、国際分野での活動を目指す。"],en:["A sophomore at Waseda University Senior High School. He has changed schools seven times in Japan, Taiwan, and Hong Kong, and has gained international experience in Canada, Australia, and France. Japanese and Chinese are his native languages, and he is currently studying English, French, and Korean. He has spoken at the International HANA Symposium for two consecutive years and is researching human agency in the age of AI.","He received the Excellence Award at the University of Tokyo AI Hackathon and developed “KATA,” a language-learning tool that utilizes AI-based posture recognition. He is currently participating in the Stanford e-Japan program and aims to pursue activities in the international arena."]}},{id:"kuroki-yuto",displayOrder:50,published:!0,featured:!0,image:Nb,imagePosition:"50% 44%",name:{ja:"黒木 勇人",en:"Yuto Kuroki"},role:{ja:"早稲田大学 情報理工学科2年",en:"Second-year Computer Science Student, Waseda University"},shortBio:{ja:"ISEF 2025に日本代表として出場し、ドローン配送最適化アルゴリズムの研究で文部科学大臣特別賞を受賞。",en:"Japan representative at ISEF 2025 and recipient of the MEXT Minister’s Special Award for drone-delivery optimization research."},intro:{ja:["早稲田大学情報理工学科2年。国際学生科学技術フェア（ISEF 2025）に日本代表として出場し、ドローン配送最適化アルゴリズムの研究を発表。文部科学大臣特別賞を受賞した。2026年夏からは、中谷財団の奨学生としてジョージア工科大学でロボット外骨格の深層学習モデルを研究している。","外国語学習にも力を入れ、TOEIC満点、ケンブリッジ英検C2取得、最難関のドイツ語検定試験Goethe-Zertifikat C2の3技能合格を達成。現在は外国語学習の方法を発信しながら、高校生の研究発表を支援するNPO法人で活動している。高校時代は硬式テニス部に所属。"],en:["A second-year Computer Science student at Waseda University. He represented Japan at ISEF 2025, presenting research on a drone-delivery optimization algorithm, and received the MEXT Minister’s Special Award. Since summer 2026, he has been conducting research on deep-learning models for robotic exoskeletons at the Georgia Institute of Technology as a Nakatani Foundation scholar.","Passionate about language learning, he has achieved a perfect TOEIC score, Cambridge C2 Proficiency, and passed three Goethe-Zertifikat C2 modules. He currently shares language-learning methods and works with an NPO supporting high school students in presenting their research. In high school, he was on the tennis team."]}},{id:"kogure-masahisa",displayOrder:10,published:!0,featured:!0,image:Pb,imagePosition:"50% 42%",name:{ja:"小暮 真久",en:"Masahisa Kogure"},role:{ja:"社会起業家",en:"Social Entrepreneur"},shortBio:{ja:"TABLE FOR TWOを創設し、約800の企業・団体を巻き込む社会運動へ成長させた。現在も医療・AIなど多領域で挑戦を続けている。",en:"Founder of TABLE FOR TWO, which grew into a nationwide social movement involving around 800 companies and organizations."},intro:{ja:["早稲田大学卒業後、オーストラリアで人工心臓の研究に従事。その後、マッキンゼー・アンド・カンパニーを経て、社会課題の解決を目指すTABLE FOR TWOを創設。約800の企業・団体を巻き込み、日本最大規模の社会運動へと成長させる。研究、ビジネス、社会課題など異なる世界を越境しながら、新しい仕組みや事業を生み出してきた。現在も医療・AIをはじめ、さまざまな領域で新たな挑戦を続けている。"],en:["After graduating from Waseda University, he conducted artificial-heart research in Australia. He later worked at McKinsey & Company before founding TABLE FOR TWO to address social challenges. By involving around 800 companies and organizations, he grew the initiative into one of Japan’s largest social movements. Crossing boundaries among research, business, and social issues, he has created new systems and ventures, and he continues to take on new challenges in healthcare, AI, and other fields."]}},{id:"takezawa-mamoru",displayOrder:40,published:!0,featured:!0,image:Ab,imagePosition:"42% 50%",name:{ja:"武沢 護",en:"Mamoru Takezawa"},role:{ja:"早稲田大学高等学院 前学院長",en:"Former Headmaster of Waseda University Senior High School"},shortBio:{ja:"長く早稲田大学高等学院の教員を務め、数学・情報科の指導に携わる。特に最後の4年間は学院長を務めた。",en:"A longtime mathematics and information studies educator at Waseda University Senior High School who served as Headmaster for the final four years of his tenure."},intro:{ja:["早稲田大学高等学院前学院長。長く早稲田大学高等学院の教員を務め、数学・情報科の指導に携わる。特に最後の4年間は学院長を務めた。"],en:["Former Headmaster of Waseda University Senior High School. He served for many years as a teacher at the school, teaching mathematics and information studies. He was Headmaster for the final four years of his tenure."]},speechInfo:{ja:"これまでの教育経験をもとに、TEDxWUSHS Youthのテーマ「Breakshot」に沿って、AI・デジタル時代の予測不可能な未来に向けて、私たちが身につけるべき資質と能力について議論する。",en:"Drawing on his experience in education and in keeping with the TEDxWUSHS Youth theme “Breakshot,” he will discuss the qualities and capabilities we should develop as we face an unpredictable future in the age of AI and digital technology."}},{id:"reon-hiruma",displayOrder:20,published:!0,featured:!0,image:Db,imagePosition:"50% 42%",name:{ja:"比留間 礼音",en:"Reon Hiruma"},role:{ja:"ベンチャーキャピタリスト",en:"Venture Capitalist"},shortBio:{ja:"ヘルスケア、産業技術、安全保障領域のディープテックに投資し、防衛技術コミュニティJDTIも運営している。",en:"A venture capitalist investing in deep tech across healthcare, industrial technology, and security, and the operator of the JDTI defense technology community."},intro:{ja:["ヘルスケア、産業技術、安全保障領域のディープテックに投資するベンチャーキャピタリスト。早稲田大学在学中の2018年にPotentialist Globalを共同創業し、欧米の技術系企業20社以上の日本・アジア進出を支援。2026年より国内大手VCで投資を担当する。投資の傍ら、防衛技術コミュニティJDTIを運営し、技術系スタートアップが安全保障に果たしうる役割を議論する場づくりに取り組む。オランダ人と日本人の両親をもち、四言語に堪能。"],en:["Reon Hiruma is a venture capitalist investing in deep tech across healthcare, industrial technology, and security. While at Waseda University, he co-founded Potentialist Global in 2018 and helped over 20 US and European technology companies enter Japan and Asia. In 2026, he joined a leading Japanese venture capital firm. Alongside his work as an investor, Reon runs JDTI, a defense technology community that brings people together to discuss the role startups can play in national security. Born to Dutch and Japanese parents, he speaks four languages."]}}],zh=({speaker:e,language:t,variant:n,index:r})=>{var v,y;const i=Ge(),o=n==="detail",s=o?"h2":"h3",a=e.name[t]??e.name.ja,c=e.role[t]??e.role.ja,u=e.shortBio[t]??e.shortBio.ja,d=e.intro[t]??e.intro.ja,h=((v=e.speechInfo)==null?void 0:v[t])??((y=e.speechInfo)==null?void 0:y.ja),f=t==="en"?`Portrait of ${a}`:`${a}のプロフィール写真`;return l.jsxs(ee.article,{className:`speaker-card speaker-card--${n}${o&&r%2===1?" speaker-card--reversed":""}`,style:{"--speaker-image-position":e.imagePosition},initial:i?!1:{opacity:0,y:28},whileInView:i?void 0:{opacity:1,y:0},viewport:{once:!0,amount:.15},transition:i?{duration:0}:{duration:.55,delay:o?0:Math.min(r*.07,.28)},children:[l.jsx("div",{className:"speaker-card__image-frame",children:l.jsx("img",{src:e.image,alt:f,className:"speaker-card__image",loading:o&&r===0?"eager":"lazy",decoding:"async"})}),l.jsxs("div",{className:"speaker-card__content",children:[l.jsx("p",{className:"speaker-card__role",children:c}),l.jsx(s,{className:"speaker-card__name",children:a}),o?l.jsxs("div",{className:"speaker-card__bio",children:[d.map((x,S)=>l.jsx("p",{children:x},`${e.id}-intro-${S}`)),h&&l.jsx("p",{children:h})]}):l.jsx("p",{className:"speaker-card__summary",children:u})]})]})},Lh={ja:{previewSubtitle:"多様な経験と専門性を持つスピーカーたちが、それぞれのBreakshotから生まれたアイデアを共有します。",fullSubtitle:"TEDxWUSHS Youth 2026に登壇するスピーカーと、その背景にある経験やアイデアをご紹介します。",empty:"スピーカー情報は近日公開予定です。",comingSoonLabel:"追加情報",comingSoonBody:"スピーカーや講演内容に関する追加情報を、今後このページでお知らせします。"},en:{previewSubtitle:"Speakers with diverse experiences and expertise share ideas shaped by their own Breakshots.",fullSubtitle:"Meet the TEDxWUSHS Youth 2026 speakers and discover the experiences and ideas behind their talks.",empty:"Speaker information will be announced soon.",comingSoonLabel:"More to come",comingSoonBody:"More speaker and talk information will be announced on this page."}},h0=({variant:e="preview"})=>{const{language:t}=le(),n=Ge(),r=Lh[t]??Lh.ja,i=e==="full",o=i?"h1":"h2",s=[...d0].filter(c=>c.published&&(i||c.featured)).sort((c,u)=>c.displayOrder-u.displayOrder),a=u0(s);return l.jsxs("section",{id:"speakers",className:`speakers-section speakers-section--${e} section-padding`,"aria-labelledby":"speakers-heading",children:[l.jsxs("div",{className:"container speakers-section__container",children:[l.jsxs(ee.header,{className:"speakers-section__header",initial:n?!1:{opacity:0,y:20},whileInView:n?void 0:{opacity:1,y:0},viewport:{once:!0},transition:{duration:n?0:.6},children:[l.jsx("span",{className:"speakers-section__eyebrow",lang:"en",children:i?"The 2026 Speaker Lineup":"Ideas in Motion"}),l.jsxs(o,{id:"speakers-heading",className:"speakers-section__title",lang:"en",children:[i?"Our ":"Featured ",l.jsx("span",{children:"Speakers"})]}),l.jsx("p",{className:"speakers-section__subtitle",children:i?r.fullSubtitle:r.previewSubtitle})]}),s.length>0?i?l.jsx("div",{className:"speakers-section__list",children:s.map((c,u)=>l.jsx(zh,{speaker:c,language:t,variant:"detail",index:u},c.id))}):l.jsx("div",{className:"speakers-section__grid",children:a.map((c,u)=>l.jsx("div",{className:"speakers-section__row",children:c.map(d=>l.jsx(zh,{speaker:d,language:t,variant:"preview",index:s.findIndex(h=>h.id===d.id)},d.id))},`speaker-row-${u+1}`))}):l.jsx("p",{className:"speakers-section__empty",children:r.empty}),i&&s.length>0&&l.jsxs("section",{className:"speakers-section__coming-soon","aria-labelledby":"speakers-coming-soon-heading",children:[l.jsx("span",{className:"speakers-section__coming-soon-mark","aria-hidden":"true",children:"+"}),l.jsxs("div",{children:[l.jsx("p",{className:"speakers-section__coming-soon-label",children:r.comingSoonLabel}),l.jsx("h2",{id:"speakers-coming-soon-heading",className:"speakers-section__coming-soon-title",lang:"en",children:"Coming Soon"}),l.jsx("p",{className:"speakers-section__coming-soon-body",children:r.comingSoonBody})]})]}),!i&&s.length>0&&l.jsx("div",{className:"speakers-section__cta-wrap",children:l.jsxs(se,{to:"/speakers",className:"speakers-section__cta",lang:"en",children:["More Details",l.jsx(nr,{size:18,"aria-hidden":"true"})]})})]}),l.jsx("style",{children:`
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
      `})]})},f0=[{time:"14:00",event:"Doors Open",description:{ja:"開場",en:"Audience entry begins"}},{time:"14:30",event:"Opening",description:{ja:"開会・オープニング",en:"Opening remarks"}},{time:"14:40",event:"Talk Section 1",description:{ja:"トークセクション1",en:"First talk session"}},{time:"14:45–15:00",event:"Talk 1",description:{ja:"トーク1",en:"First talk"}},{time:"15:00–15:15",event:"Talk 2",description:{ja:"トーク2",en:"Second talk"}},{time:"15:15–15:30",event:"Talk 3",description:{ja:"トーク3",en:"Third talk"}},{time:"15:30–15:50",event:"Break",description:{ja:"休憩",en:"Intermission"}},{time:"15:50",event:"Talk Section 2",description:{ja:"トークセクション2",en:"Second talk session"}},{time:"16:00–16:10",event:"Talk 4",description:{ja:"トーク4",en:"Fourth talk"}},{time:"16:15–16:25",event:"Talk 5",description:{ja:"トーク5",en:"Fifth talk"}},{time:"16:30–16:45",event:"Talk 6",description:{ja:"トーク6",en:"Sixth talk"}},{time:"16:45–17:00",event:"Talk 7",description:{ja:"トーク7",en:"Seventh talk"}},{time:"17:00",event:"Closing",description:{ja:"閉会",en:"Closing remarks"}},{time:"17:20–17:50",event:"Workshop & Networking",description:{ja:"ワークショップ・交流会",en:"Workshop and networking"}},{time:"18:00頃",timeEn:"Around 18:00",event:"Program Ends",description:{ja:"終了",en:"Program concludes"}}],Mb=()=>{const{language:e}=le(),t=Ge(),n=e==="en"?"Scheduled for Saturday, October 31, 2026, from 14:00 to 18:00. Times are subject to change.":"2026年10月31日（土）14:00〜18:00 開催予定。時間は前後する可能性があります。";return l.jsxs("section",{id:"schedule",className:"schedule section-padding",children:[l.jsxs("div",{className:"container",children:[l.jsxs(ee.div,{className:"section-header",initial:t?!1:{opacity:0,y:20},whileInView:t?void 0:{opacity:1,y:0},viewport:{once:!0},children:[l.jsxs("h2",{className:"section-title",lang:"en",children:["Program ",l.jsx("span",{className:"highlight-red",children:"Schedule"})]}),l.jsx("p",{className:"section-subtitle",children:n})]}),l.jsx("ol",{className:"timeline",children:f0.map((r,i)=>l.jsxs(ee.li,{className:"timeline-item",initial:t?!1:{opacity:0,y:20},whileInView:t?void 0:{opacity:1,y:0},viewport:{once:!0},transition:t?{duration:0}:{delay:i*.1},children:[l.jsx("time",{className:"time",children:e==="en"&&r.timeEn?r.timeEn:r.time}),l.jsxs("div",{className:"event-content",children:[l.jsx("h3",{lang:"en",children:r.event}),l.jsx("p",{children:r.description[e]})]})]},`${r.time}-${r.event}`))})]}),l.jsx("style",{children:`
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
      `})]})},zb={ja:{sectionSubtitle:"TEDxWUSHS Youthへの参加方法と最新情報をご案内します。",optionsHeading:"参加方法と最新情報",applicationsUpdate:"2026年開催分のスピーカー募集及び運営チーム募集は終了しました。たくさんのご応募ありがとうございました。オーディエンスの参加申込みは現在受け付けています。",teamDescription:"2026年開催分の運営チーム募集は終了しました。今後の募集はウェブサイトとSNSでお知らせします。",teamAction:"募集状況を見る",audienceDescription:"対象は早稲田大学高等学院の生徒及びその保護者です。参加申込みを現在受け付けています。",audienceAction:"対象・申込みを見る",audienceStatus:"受付中",subscribed:l.jsxs(l.Fragment,{children:["登録完了しました",l.jsx("br",{}),"イベントの最新情報をお届けしますのでお楽しみに。"]}),newsletter:"イベントの最新情報や募集のお知らせをメールでお届けします。",emailLabel:"メールアドレス",emailPlaceholder:"メールアドレスを入力",subscribeAction:"登録する",contactTitle:"お問い合わせ",contactDescription:"参加方法や当日の運営についてのご質問は、イベント事務局までご連絡ください。"},en:{sectionSubtitle:"Explore ways to take part in TEDxWUSHS Youth and receive the latest event updates.",optionsHeading:"Ways to Participate and Stay Updated",applicationsUpdate:"Speaker and organizing team applications for the 2026 event are now closed. Thank you to everyone who applied. Audience registration is now open.",teamDescription:"Recruitment for the 2026 organizing team has closed. Future opportunities will be announced on our website and social media.",teamAction:"View Recruitment Status",audienceDescription:"Audience registration is now open to students of Waseda University Senior High School and their parents or guardians.",audienceAction:"View eligibility and registration",audienceStatus:"Registration Open",subscribed:l.jsxs(l.Fragment,{children:["You are subscribed.",l.jsx("br",{}),"We look forward to sharing the latest event updates with you."]}),newsletter:"Receive event updates and future application announcements by email.",emailLabel:"Email address",emailPlaceholder:"Enter your email address",subscribeAction:"Subscribe",contactTitle:"Contact Us",contactDescription:"For questions about attending the event or event-day operations, please contact the TEDxWUSHS Youth team."}},p0=({hideHeader:e=!1})=>{const[t,n]=w.useState(!1),r=w.useRef(null),i=w.useRef(null),o=Ge(),{language:s}=le(),a=zb[s];w.useEffect(()=>{var d;t&&((d=r.current)==null||d.focus())},[t]),w.useEffect(()=>()=>{i.current&&clearTimeout(i.current)},[]);const c=()=>{i.current&&clearTimeout(i.current),i.current=setTimeout(()=>n(!0),300)},u=[{title:"Join the Team",icon:l.jsx(Wo,{size:32,"aria-hidden":"true",focusable:"false"}),description:a.teamDescription,link:"/join-us/team",action:a.teamAction,status:"Recruitment Closed",closed:!0,color:"#fff"},{title:"Register as Audience",icon:l.jsx(o0,{size:32,"aria-hidden":"true",focusable:"false"}),description:a.audienceDescription,link:"/join-us/audience",action:a.audienceAction,status:a.audienceStatus,statusLanguage:s,color:"#fff"}];return l.jsxs("section",{id:"contact",className:"join-us section-padding",children:[l.jsxs("div",{className:"container",children:[e?l.jsx("h2",{className:"visually-hidden",children:a.optionsHeading}):l.jsxs(ee.div,{className:"section-header",initial:o?!1:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[l.jsx("span",{className:"join-tagline",lang:"en",children:"Be part of the community"}),l.jsxs("h2",{className:"section-title",lang:"en",children:["Join ",l.jsx("span",{className:"highlight-red",children:"Us"})]}),l.jsx("p",{className:"section-subtitle",children:a.sectionSubtitle})]}),l.jsxs(ee.div,{className:"recruitment-closed",initial:o?!1:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[l.jsx("strong",{lang:"en",children:"2026 Applications Update"}),l.jsx("p",{children:a.applicationsUpdate})]}),l.jsx("div",{className:"opportunities-grid",children:u.map((d,h)=>l.jsxs(ee.div,{className:`opt-card${d.closed?" opt-card--closed":""}`,initial:o?!1:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:o?0:h*.1},children:[l.jsx("div",{className:"opt-icon",children:d.icon}),d.status&&l.jsx("span",{className:"opt-status",lang:d.statusLanguage??"en",children:d.status}),l.jsx("h3",{className:"opt-title",lang:"en",children:d.title}),l.jsx("p",{className:"opt-description",children:d.description}),l.jsxs(se,{to:d.link,className:"opt-link",children:[d.action," ",l.jsx(nr,{size:16,"aria-hidden":"true",focusable:"false"})]})]},d.title))}),l.jsx(ee.div,{className:"newsletter-box",initial:o?!1:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},children:l.jsxs("div",{className:"newsletter-content",children:[l.jsx("h3",{lang:"en",children:"Stay Updated"}),l.jsx("iframe",{title:"hidden_iframe",name:"hidden_iframe",id:"hidden_iframe",style:{display:"none"}}),t?l.jsx("div",{ref:r,className:"success-message",role:"status","aria-live":"polite","aria-atomic":"true",tabIndex:-1,children:l.jsx("p",{children:a.subscribed})}):l.jsxs("div",{children:[l.jsx("p",{id:"newsletter-description",children:a.newsletter}),l.jsxs("form",{className:"newsletter-form",action:"https://docs.google.com/forms/d/e/1FAIpQLScvnsbAaQFhyodG3GY4qXmTAj919BFivczNyE9bOt4Z_TxuWw/formResponse",method:"post",target:"hidden_iframe",onSubmit:c,children:[l.jsxs("div",{className:"newsletter-field",children:[l.jsx("label",{htmlFor:"newsletter-email",children:a.emailLabel}),l.jsx("input",{id:"newsletter-email",type:"email",name:"entry.269866944","aria-describedby":"newsletter-description",placeholder:a.emailPlaceholder,autoComplete:"email",inputMode:"email",required:!0})]}),l.jsx("button",{type:"submit",className:"btn-primary",children:a.subscribeAction})]})]})]})}),l.jsxs(ee.div,{className:"contact-box",initial:o?!1:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[l.jsx(r0,{size:30,"aria-hidden":"true",focusable:"false"}),l.jsxs("div",{children:[l.jsx("span",{lang:"en",children:"Questions about the event?"}),l.jsx("h3",{children:a.contactTitle}),l.jsx("p",{children:a.contactDescription}),l.jsx("a",{href:"mailto:tedxwushs@gmail.com",children:"tedxwushs@gmail.com"})]})]})]}),l.jsx("style",{children:`
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
        .contact-box a:focus-visible,
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

        .contact-box {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 1.5rem;
          align-items: start;
          margin-top: 3rem;
          padding: 2rem;
          border-radius: 16px;
          background: var(--ted-black);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .contact-box > svg {
          color: var(--ted-red);
        }

        .contact-box span {
          color: #bbb;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .contact-box h3 {
          margin: 0.25rem 0 0.6rem;
          font-size: 1.5rem;
        }

        .contact-box p {
          margin-bottom: 0.7rem;
          color: #aaa;
        }

        .contact-box a {
          display: inline-flex;
          align-items: center;
          min-height: 44px;
          color: var(--ted-red);
          font-weight: 700;
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
          .contact-box {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .contact-box > svg {
            margin: 0 auto;
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
      `})]})},Lb=()=>l.jsxs("main",{id:"main-content",tabIndex:-1,children:[l.jsx(wb,{}),l.jsx(bb,{}),l.jsx(Tb,{}),l.jsx(h0,{}),l.jsx(Mb,{}),l.jsx(p0,{})]}),Rb="アイデアを発見し広める精神のもと、TEDxは、地域で自主的に運営されるイベントを通じて、人々がTEDのような体験を共有するためのプログラムです。TEDxイベントでは、TED Talksの映像とライブスピーカーが組み合わさり、深い議論とつながりを生み出します。これらの地域で自主運営されるイベントはTEDxと呼ばれ、xは independently organized TED event（独立して運営されるTEDイベント）を表します。TED ConferenceはTEDxプログラムに一般的な指針を提供しますが、各TEDxイベントは自主的に運営されています（所定のルールおよび規定に従います）。",Ib="TEDは、対話を生み出し、理解を深め、意義ある変化を促すアイデアを発見し、議論し、広めることに取り組む、非営利・無党派の組織です。TEDは、特定の主張を掲げることなく、好奇心、理性、驚き、そして知識の探究に力を注いでいます。世界をより深く理解し、他者とのつながりを求める、あらゆる分野と文化の人々を歓迎します。そして、誰もがアイデアに触れ、それを自分たちのコミュニティで行動へと移すことを呼びかけています。",Vb="TEDは1984年、Technology、Entertainment、Designが交わるカンファレンスとして始まりました。現在では、科学やビジネスから教育、芸術、世界規模の課題までを探究する、多様な世界的コミュニティと取り組みへと広がっています。毎年のカンファレンスで選ばれ、TED.comで公開されるTED Talksに加え、TEDはオリジナルポッドキャスト、短編映像シリーズ、アニメーション形式の教育コンテンツ（TED-Ed）、テレビ番組を制作しています。これらは100以上の言語に翻訳され、世界各地の提携先を通じて配信されています。毎年、数千件のTEDxイベントが独立して運営されています。",Fb="Audacious Projectを通じて、TEDは、世界が直面する最も緊急な課題に大胆な解決策を示すプロジェクトへ66億ドルの資金提供が促されることに貢献してきました。より美しく、持続可能で、公正な世界を目指す取り組みです。2020年、TEDは、気候危機の解決を加速し、ネットゼロの未来に向けた運動を広げるCountdownを開始しました。2023年には、より活気があり公平な未来への現実的な道筋に焦点を当て、新しい対話を生み出すTED Democracyを開始しました。",Ob=()=>{const{language:e}=le(),t=e==="ja",n=Ge();return l.jsxs("main",{id:"main-content",tabIndex:-1,className:"about-page",children:[l.jsx("div",{className:"container section-padding",children:l.jsxs(ee.div,{initial:n?!1:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:n?0:.8},children:[l.jsxs("section",{className:"about-section",children:[l.jsx("h1",{className:"page-title",children:t?l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"highlight-red brand-name",children:"TEDx"}),"について"]}):l.jsxs(l.Fragment,{children:["About ",l.jsx("span",{className:"highlight-red brand-name",children:"TEDx"})]})}),l.jsx("h2",{className:"sub-title brand-name",children:t?"TEDxについて — x = independently organized event（独立して運営されるイベント）":"TEDx, x = independently organized event"}),l.jsx("p",{children:t?Rb:l.jsx(l.Fragment,{children:"In the spirit of discovering and spreading ideas, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)"})})]}),l.jsxs("section",{className:"about-section",children:[l.jsx("h2",{className:"section-title",children:t?l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"highlight-red",children:"TED"}),"について"]}):l.jsxs(l.Fragment,{children:["About ",l.jsx("span",{className:"highlight-red",children:"TED"})]})}),l.jsx("p",{children:t?Ib:"TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and drive meaningful change. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community."}),t&&l.jsxs(l.Fragment,{children:[l.jsx("p",{children:Vb}),l.jsx("p",{children:Fb}),l.jsx("p",{children:l.jsx("a",{href:"https://www.ted.com/about/programs-initiatives",target:"_blank",rel:"noopener noreferrer",className:"highlight-link",children:"TEDのプログラムと取り組みの一覧を見る"})})]}),l.jsxs("p",{hidden:t,children:["TED began in 1984 as a conference where Technology, Entertainment and Design converged, but today it spans a multitude of worldwide communities and initiatives exploring everything from science and business to education, arts and global issues. In addition to the TED Talks curated from our annual conferences and published on TED.com, we produce original podcasts, short video series, animated educational lessons (TED-Ed) and TV programs that are translated into more than 100 languages and distributed via partnerships around the world. Each year, thousands of independently run TEDx events. Through the Audacious Project, TED has helped catalyze $6.6 billion in funding for projects that support bold solutions to the world's most urgent challenges — working to make the world more beautiful, sustainable and just. In 2020, TED launched Countdown, an initiative to accelerate solutions to the climate crisis and mobilize a movement for a net-zero future, and in 2023 TED launched TED Democracy to spark a new kind of conversation focused on realistic pathways towards a more vibrant and equitable future. ",l.jsx("a",{href:"https://www.ted.com/about/programs-initiatives",target:"_blank",rel:"noopener noreferrer",className:"highlight-link",children:"View a full list of TED’s many programs and initiatives."})]}),l.jsxs("div",{className:"ted-social",children:[l.jsx("p",{children:t?"TEDの公式アカウント":"Follow TED on:"}),l.jsxs("div",{className:"social-links",children:[l.jsx("a",{href:"https://www.facebook.com/TED",target:"_blank",rel:"noopener noreferrer","aria-label":"TED on Facebook",lang:"en",children:l.jsx(YS,{size:24,"aria-hidden":"true"})}),l.jsx("a",{href:"https://www.instagram.com/ted",target:"_blank",rel:"noopener noreferrer","aria-label":"TED on Instagram",lang:"en",children:l.jsx(n0,{size:24,"aria-hidden":"true"})}),l.jsx("a",{href:"https://www.linkedin.com/company/ted-conferences",target:"_blank",rel:"noopener noreferrer","aria-label":"TED on LinkedIn",lang:"en",children:l.jsx(qS,{size:24,"aria-hidden":"true"})}),l.jsx("a",{href:"https://twitter.com/TEDTalks",target:"_blank",rel:"noopener noreferrer","aria-label":"TED on X",lang:"en",children:l.jsx(s0,{size:24,"aria-hidden":"true"})}),l.jsx("a",{href:"https://www.tiktok.com/@tedtoks",target:"_blank",rel:"noopener noreferrer","aria-label":"TED on TikTok",lang:"en",children:l.jsx(rb,{size:24,"aria-hidden":"true"})})]})]})]})]})}),l.jsx("style",{children:`
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
            `})]})},Ub=()=>l.jsx("main",{id:"main-content",tabIndex:-1,children:l.jsx(h0,{variant:"full"})}),ht={year2:{ja:"2年生",en:"Year 2"},year3:{ja:"3年生",en:"Year 3"},faculty:{ja:"教員",en:"Faculty"}},Wb=[{id:"haruki-kawamata",name:"Haruki Kawamata",grade:ht.year3,role:{ja:"ボードメンバー・オーガナイザー",en:"Board Member / Organizer"}},{id:"takuya-saeki",name:"Takuya Saeki",grade:ht.faculty,role:{ja:"共同オーガナイザー",en:"Co-organizer"}},{id:"hironori-sakai",name:"Hironori Sakai",grade:ht.year2,role:{ja:"ボードメンバー・運営・スピーカーチーム",en:"Board Member / Operation / Speaker Team"}},{id:"tatsuaki-matsuda",name:"Tatsuaki Matsuda",grade:ht.year3,role:{ja:"ボードメンバー・テクノロジー・運営・スピーカーチーム",en:"Board Member / Technology / Operation / Speaker Team"}},{id:"yasuhiro-nanjo",name:"Yasuhiro Nanjo",grade:ht.year2,role:{ja:"テクノロジー・広報・運営・マネジメント",en:"Technology / Marketing / Operation / Management"}},{id:"lyu-noguchi",name:"Lyu Noguchi",grade:ht.year3,role:{ja:"スピーカーチーム",en:"Speaker Team"}},{id:"yunosuke-sato",name:"Yunosuke Sato",grade:ht.year3,role:{ja:"マネジメント・財務",en:"Management / Finance"}},{id:"taisei-moriwaki",name:"Taisei Moriwaki",grade:ht.year3,role:{ja:"広報・運営",en:"Marketing / Operation"}},{id:"keisuke-horikoshi",name:"Keisuke Horikoshi",grade:ht.year2,role:{ja:"監査",en:"Audit"}}],Bb=e=>e.trim().toLocaleLowerCase("en-US").replace(/(^|[\s'-])[a-z]/g,t=>t.toLocaleUpperCase("en-US")),Rh={ja:{eyebrow:"TEDxWUSHS Youth",year:"2026",fullTitle:"2026 Team",titleLead:"Our",titleAccent:"Team",memberList:"2026年チームメンバー一覧"},en:{eyebrow:"TEDxWUSHS Youth",year:"2026",fullTitle:"2026 Team",titleLead:"Our",titleAccent:"Team",memberList:"2026 team members"}},Hb=()=>{const{language:e}=le(),t=Ge(),n=Rh[e]??Rh.ja;return l.jsxs("main",{id:"main-content",className:"organizers-page",tabIndex:-1,children:[l.jsx("section",{className:"organizers-hero","aria-labelledby":"organizers-title",children:l.jsxs("div",{className:"container organizers-container",children:[l.jsxs(ee.div,{className:"organizers-heading",initial:t?!1:{opacity:0,y:20},animate:{opacity:1,y:0},transition:t?{duration:0}:{duration:.55},children:[l.jsx("p",{className:"organizers-eyebrow brand-name",lang:"en",children:n.eyebrow}),l.jsxs("h1",{id:"organizers-title","aria-label":n.fullTitle,children:[l.jsx("span",{className:"organizers-year","aria-hidden":"true",children:n.year}),l.jsxs("span",{className:"organizers-title-text","aria-hidden":"true",children:[n.titleLead," ",l.jsx("span",{className:"highlight-red",children:n.titleAccent})]})]})]}),l.jsx("h2",{className:"visually-hidden",children:n.memberList}),l.jsx("ul",{className:"organizers-grid",children:Wb.map((r,i)=>l.jsxs(ee.li,{className:"organizer-card",initial:t?!1:{opacity:0,y:24},whileInView:t?void 0:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:t?{duration:0}:{duration:.4,delay:i*.06},children:[l.jsxs("div",{className:"organizer-identity",children:[l.jsx("h3",{className:"organizer-name",lang:"en",children:Bb(r.name)}),l.jsx("span",{className:"organizer-grade",children:r.grade[e]??r.grade.ja})]}),l.jsxs("div",{className:"organizer-role-block",children:[l.jsx("span",{className:"organizer-role",lang:"en",children:r.role.en}),e==="ja"&&l.jsx("span",{className:"organizer-role-ja",children:r.role.ja})]})]},r.id))})]})}),l.jsx("style",{children:`
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
      `})]})},$b=()=>{const{language:e}=le();return l.jsxs("main",{id:"main-content",tabIndex:-1,className:"join-us-page",children:[l.jsxs("header",{className:"join-us-page-heading container",children:[l.jsx("span",{lang:"en",children:"Be part of the community"}),l.jsxs("h1",{lang:"en",children:["Join ",l.jsx("span",{className:"highlight-red",children:"Us"})]}),l.jsx("p",{children:e==="ja"?"TEDxWUSHS Youthへの参加方法と最新情報をご案内します。":"Explore ways to take part in TEDxWUSHS Youth and receive the latest event updates."})]}),l.jsx(p0,{hideHeader:!0}),l.jsx("style",{children:`
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
            `})]})},Ih={ja:{steps:[{title:"Application",desc:"2026年開催分の応募受付は終了しました。"},{title:"Audition",desc:"運営チームとの面談で、アイデアを深掘りします。"},{title:"Curation",desc:"TEDxの基準に合わせて、スピーチを磨き上げます。"},{title:"The Stage",desc:"TEDxWUSHS Youthのステージで、世界へ発信！"}],lead:"2026年開催分のスピーカー募集は終了しました。",benefits:["世界中のTEDコミュニティにあなたのアイデアが届きます。","プロフェッショナルなコーチングでプレゼンスキルが向上します。","情熱的な仲間や観客との貴重な出会いがあります。"],closedMessage:"たくさんのご応募ありがとうございました。今後の募集については、ウェブサイトとSNSでお知らせします。"},en:{steps:[{title:"Application",desc:"Applications for the 2026 event have closed."},{title:"Audition",desc:"Explore your idea in depth during an interview with the organizing team."},{title:"Curation",desc:"Refine your talk in line with TEDx standards."},{title:"The Stage",desc:"Share your idea with the world from the TEDxWUSHS Youth stage!"}],lead:"Speaker applications for the 2026 event have closed.",benefits:["Share your idea with the global TED community.","Improve your presentation skills through professional coaching.","Connect with passionate peers and audience members."],closedMessage:"Thank you to everyone who applied. Future opportunities will be announced on this website and our social media channels."}},Yb=()=>{const{language:e}=le(),t=Ih[e]??Ih.ja;return l.jsxs("main",{id:"main-content",tabIndex:-1,className:"recruit-page",style:{paddingTop:"120px"},children:[l.jsxs("div",{className:"container",children:[l.jsxs(se,{to:"/join-us",className:"back-link",children:[l.jsx(qc,{size:16,"aria-hidden":"true"})," ",l.jsx("span",{lang:"en",children:"Back to Opportunities"})]}),l.jsxs("header",{className:"recruit-header",children:[l.jsx("div",{className:"icon-circle","aria-hidden":"true",children:l.jsx(i0,{size:48})}),l.jsxs("h1",{lang:"en",children:["Speaker ",l.jsx("span",{className:"highlight-red",children:"Applications"})]}),l.jsx("p",{className:"lead-text",children:t.lead})]}),l.jsxs("section",{className:"detail-section",children:[l.jsxs("h2",{lang:"en",children:["Why speak at ",l.jsx("span",{className:"brand-name",children:"TEDxWUSHS Youth"}),"?"]}),l.jsx("ul",{className:"benefits-grid",children:t.benefits.map(n=>l.jsxs("li",{className:"benefit-card",children:[l.jsx(FS,{color:"var(--ted-red)",size:24,"aria-hidden":"true"}),l.jsx("p",{children:n})]},n))})]}),l.jsxs("section",{className:"process-section",children:[l.jsx("h2",{lang:"en",children:"Application Process"}),l.jsx("ol",{className:"steps-container",children:t.steps.map((n,r)=>l.jsxs("li",{className:"step-item",children:[l.jsx("div",{className:"step-num","aria-hidden":"true",children:r+1}),l.jsx("h3",{lang:"en",children:n.title}),l.jsx("p",{children:n.desc})]},n.title))})]}),l.jsxs("section",{className:"cta-box","aria-labelledby":"speaker-applications-status",children:[l.jsx("h2",{id:"speaker-applications-status",lang:"en",children:"Applications Closed"}),l.jsx("p",{children:t.closedMessage}),l.jsx("span",{className:"closed-label",lang:"en",children:"2026 Speaker Applications Closed"})]})]}),l.jsx("style",{children:`
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
      `})]})},Vh={ja:{departmentDescriptions:["イベントの全体企画、進行、会場設営などを担います。","SNSやWebサイトを通じた広報活動、ブランディングを担います。","スピーカーの選定、スピーチ構成のサポートを担います。","デザイン、映像制作、Web開発などを担います。"],lead:"2026年開催分の運営チーム募集は終了しました。たくさんのご応募ありがとうございました。",values:["アイデアを広めること、新しい価値を創ることに情熱を持っている方。","多様な視点を尊重し、チームで最高のパフォーマンスを発揮できる方。","自ら考え、行動し、変化を恐れずに挑戦し続けられる方。"],closedMessage:"次回の募集については、ウェブサイトと公式SNSでお知らせします。"},en:{departmentDescriptions:["Oversees overall event planning, program flow, venue setup, and related operations.","Handles promotion and branding through social media and the website.","Handles speaker selection and supports the development of talks.","Handles design, video production, web development, and related creative work."],lead:"Recruitment for the 2026 organizing team has closed. Thank you to everyone who applied.",values:["Passionate about sharing ideas and creating new value.","Respects diverse perspectives and brings out the best in the team through collaboration.","Thinks and acts independently, and continues to take on challenges without fearing change."],closedMessage:"Future recruitment opportunities will be announced on this website and our official social media channels."}},Kb=()=>{const{language:e}=le(),t=Vh[e]??Vh.ja,n=[{title:"Operations",icon:l.jsx(Wo,{size:32,"aria-hidden":"true"}),desc:t.departmentDescriptions[0]},{title:"Marketing",icon:l.jsx(ob,{size:32,"aria-hidden":"true"}),desc:t.departmentDescriptions[1]},{title:"Speaker",icon:l.jsx(i0,{size:32,"aria-hidden":"true"}),desc:t.departmentDescriptions[2]},{title:"Creative",icon:l.jsx(BS,{size:32,"aria-hidden":"true"}),desc:t.departmentDescriptions[3]}];return l.jsxs("main",{id:"main-content",tabIndex:-1,className:"recruit-page",style:{paddingTop:"120px"},children:[l.jsxs("div",{className:"container",children:[l.jsxs(se,{to:"/join-us",className:"back-link",children:[l.jsx(qc,{size:16,"aria-hidden":"true"})," ",l.jsx("span",{lang:"en",children:"Back to Opportunities"})]}),l.jsxs("header",{className:"recruit-header",children:[l.jsx("div",{className:"icon-circle","aria-hidden":"true",children:l.jsx(Wo,{size:48})}),l.jsx("span",{className:"recruitment-status",lang:"en",children:"2026 Recruitment Closed"}),l.jsxs("h1",{lang:"en",children:["Join the ",l.jsx("span",{className:"highlight-red",children:"Team"})]}),l.jsx("p",{className:"lead-text",children:t.lead})]}),l.jsxs("section",{className:"detail-section",children:[l.jsx("h2",{lang:"en",children:"Departments"}),l.jsx("div",{className:"departments-grid",children:n.map((r,i)=>l.jsxs("div",{className:"dept-card",children:[l.jsx("div",{className:"dept-icon",children:r.icon}),l.jsx("h3",{lang:"en",children:r.title}),l.jsx("p",{children:r.desc})]},i))})]}),l.jsxs("section",{className:"why-join-section",children:[l.jsx("h2",{lang:"en",children:"What we look for"}),l.jsxs("div",{className:"values-grid",children:[l.jsxs("div",{className:"value-item",children:[l.jsx("h3",{lang:"en",children:"Passion"}),l.jsx("p",{children:t.values[0]})]}),l.jsxs("div",{className:"value-item",children:[l.jsx("h3",{lang:"en",children:"Collaboration"}),l.jsx("p",{children:t.values[1]})]}),l.jsxs("div",{className:"value-item",children:[l.jsx("h3",{lang:"en",children:"Proactive"}),l.jsx("p",{children:t.values[2]})]})]})]}),l.jsxs("section",{className:"cta-box","aria-labelledby":"team-recruitment-status-heading",children:[l.jsx("h2",{id:"team-recruitment-status-heading",lang:"en",children:"Recruitment Closed"}),l.jsx("p",{children:t.closedMessage}),l.jsx("span",{className:"closed-label",lang:"en",children:"2026 Team Recruitment Closed"})]})]}),l.jsx("style",{children:`
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
      `})]})},Fh={ja:{lead:"参加申込みを受け付けています。対象をご確認のうえ、申込フォームからお申し込みください。",eligibilityLabel:"Audience Eligibility / 参加対象",eligibilityTitle:"早稲田大学高等学院の生徒及びその保護者",eligibilityDescription:"本イベントの会場参加は、上記の方を対象としています。対象をご確認のうえ、申込フォームからお申し込みください。",newsletterDescription:"ニュースレターに登録すると、イベントに関する最新情報をメールで受け取れます。",eventDescription:"2026年10月31日（土）14:00〜18:00、早稲田大学高等学院 講堂にて開催します（受付開始13:30）。",registrationTitle:"参加申込みについて",registrationDescription:"参加費は無料です。Googleフォームに必要事項を入力してお申し込みください。",registrationStatus:"受付中",registrationAction:"参加を申し込む",registrationNote:"申込フォームは新しいタブで開きます。",audienceLabel:"対象",audienceValue:"学院生・保護者"},en:{lead:"Audience registration is now open. Please confirm your eligibility and apply using the registration form.",eligibilityLabel:"Audience Eligibility",eligibilityTitle:"Students of Waseda University Senior High School and Their Parents or Guardians",eligibilityDescription:"In-person attendance is limited to the group listed above. Please confirm your eligibility and apply using the registration form.",newsletterDescription:"Subscribe to receive the latest event updates by email.",eventDescription:"The event will be held on Saturday, October 31, 2026, from 2:00 p.m. to 6:00 p.m. at the auditorium of Waseda University Senior High School (doors open at 1:30 p.m.).",registrationTitle:"Registration Information",registrationDescription:"Admission is free. Complete the Google Form to apply to attend.",registrationStatus:"Registration Open",registrationAction:"Apply to attend",registrationNote:"The registration form opens in a new tab.",audienceLabel:"Eligible Attendees",audienceValue:"Students & Parents/Guardians"}},Gb=()=>{const{language:e}=le(),t=Fh[e]??Fh.ja;return l.jsxs("main",{id:"main-content",tabIndex:-1,className:"recruit-page",style:{paddingTop:"120px"},children:[l.jsxs("div",{className:"container",children:[l.jsxs(se,{to:"/join-us",className:"back-link",children:[l.jsx(qc,{size:16,"aria-hidden":"true"})," ",l.jsx("span",{lang:"en",children:"Back to Opportunities"})]}),l.jsxs("header",{className:"recruit-header",children:[l.jsx("div",{className:"icon-circle","aria-hidden":"true",children:l.jsx(o0,{size:48})}),l.jsxs("h1",{lang:"en",children:["Register as ",l.jsx("span",{className:"highlight-red",children:"Audience"})]}),l.jsx("p",{className:"lead-text",children:t.lead})]}),l.jsxs("section",{className:"eligibility-panel","aria-labelledby":"audience-eligibility-title",children:[l.jsx("div",{className:"eligibility-icon",children:l.jsx(Wo,{size:36,"aria-hidden":"true"})}),l.jsxs("div",{children:[l.jsx("span",{className:"eligibility-label",children:e==="ja"?l.jsxs(l.Fragment,{children:[l.jsx("span",{lang:"en",children:"Audience Eligibility"})," / 参加対象"]}):t.eligibilityLabel}),l.jsx("h2",{id:"audience-eligibility-title",children:t.eligibilityTitle}),l.jsx("p",{children:t.eligibilityDescription})]})]}),l.jsxs("div",{className:"audience-layout",children:[l.jsxs("div",{className:"info-side",children:[l.jsxs("section",{className:"info-block",children:[l.jsx("div",{className:"info-icon","aria-hidden":"true",children:l.jsx(MS,{size:24})}),l.jsxs("div",{children:[l.jsx("h2",{lang:"en",children:"Be the First to Know"}),l.jsx("p",{children:t.newsletterDescription})]})]}),l.jsxs("section",{className:"info-block",children:[l.jsx("div",{className:"info-icon","aria-hidden":"true",children:l.jsx(IS,{size:24})}),l.jsxs("div",{children:[l.jsx("h2",{lang:"en",children:"Upcoming Events"}),l.jsx("p",{children:t.eventDescription})]})]})]}),l.jsx("div",{className:"form-side",children:l.jsxs("section",{className:"registration-card","aria-labelledby":"registration-information-title",children:[l.jsx("span",{className:"registration-status",children:t.registrationStatus}),l.jsx("h2",{id:"registration-information-title",children:t.registrationTitle}),l.jsx("p",{children:t.registrationDescription}),l.jsxs("div",{className:"registration-audience",children:[l.jsx("span",{children:t.audienceLabel}),l.jsx("strong",{children:t.audienceValue})]}),l.jsxs("a",{className:"btn-primary-full",href:Xc,target:"_blank",rel:"noopener noreferrer",children:[l.jsx("span",{children:t.registrationAction}),l.jsx(ui,{size:18,strokeWidth:2.5,"aria-hidden":"true"})]}),l.jsx("p",{className:"form-note",children:t.registrationNote})]})})]})]}),l.jsx("style",{children:`
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
      `})]})},Oh={ja:[{question:"TEDxWUSHS Youthとは何ですか？",answer:"早稲田大学高等学院の生徒が独立して企画・運営するTEDxイベントです。『Ideas change everything.』という考えのもと、対話と変化につながるアイデアを若者の視点から届けます。"},{question:"参加対象者を教えてください。",answer:"参加対象者は、早稲田大学高等学院の生徒（学院生）とその保護者です。参加申込みを現在受け付けています。対象をご確認のうえ、「Join Us」のAudience Registrationページからお申し込みください。"},{question:"イベントでは何語が使用されますか？",answer:"日本語と英語のバイリンガルイベントを予定しています。日本語・英語のどちらで行われるトークにも、スライド上に字幕を付ける予定です。"},{question:"参加費はかかりますか？",answer:"参加費は無料です。"},{question:"ボランティアとして参加したいのですが、どうすればいいですか？",answer:"2026年開催分の運営チーム募集は終了しました。今後の募集はウェブサイトの『Join Us』ページと公式SNSでお知らせします。"}],en:[{question:"What is TEDxWUSHS Youth?",answer:"TEDxWUSHS Youth is an independently organized TEDx event planned and run by students of Waseda University Senior High School. We believe that “Ideas change everything.” From a youth perspective, we share ideas that can spark dialogue and change."},{question:"Who can attend?",answer:"The event is open to students of Waseda University Senior High School and their parents or guardians. Registration is now open. Please confirm your eligibility and apply from the Audience Registration page under Join Us."},{question:"What languages will be used at the event?",answer:"The event is planned to be bilingual in Japanese and English. For both Japanese- and English-language talks, we plan to display subtitles on the presentation slides."},{question:"Is there an admission fee?",answer:"The event is free to attend."},{question:"How can I participate as a volunteer?",answer:"Recruitment for the 2026 organizing team has closed. Future opportunities will be announced on the Join Us page and our official social media channels."}]},qb={ja:"質問と回答",en:"Questions and Answers"},Qb=({question:e,answer:t,id:n})=>{const[r,i]=w.useState(!1),o=Ge(),s=`${n}-question`,a=`${n}-answer`;return l.jsxs("div",{className:"faq-item",children:[l.jsx("h3",{className:"faq-question-heading",children:l.jsxs("button",{id:s,type:"button",className:"faq-question",onClick:()=>i(!r),"aria-expanded":r,"aria-controls":a,children:[l.jsx("span",{children:e}),l.jsx("span",{className:`icon ${r?"open":""}`,"aria-hidden":"true",children:"+"})]})}),l.jsx(Wg,{children:r&&l.jsx(ee.div,{className:"faq-answer",id:a,role:"region","aria-labelledby":s,initial:o?!1:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:o?0:.3},children:l.jsx("p",{children:t})})})]})},Xb=({hideHeader:e=!1})=>{const{language:t}=le(),n=Oh[t]??Oh.ja;return l.jsxs("section",{id:"faq",className:"faq section-padding","aria-labelledby":"faq-list-heading",children:[l.jsxs("div",{className:"container",children:[e?l.jsx("h2",{id:"faq-list-heading",className:"visually-hidden",children:qb[t]}):l.jsx("div",{className:"section-header",children:l.jsxs("h2",{id:"faq-list-heading",className:"section-title",lang:"en",children:["Frequently Asked ",l.jsx("span",{className:"highlight-red",children:"Questions"})]})}),l.jsx("div",{className:"faq-list",children:n.map((r,i)=>{const o=`faq-${t}-${i+1}`;return l.jsx(Qb,{id:o,...r},o)})})]}),l.jsx("style",{children:`
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
      `})]})},Jb=()=>{const e=Ge();return l.jsxs("main",{id:"main-content",tabIndex:-1,className:"faq-page",children:[l.jsx("header",{className:"faq-page-heading container",children:l.jsxs("h1",{lang:"en",children:["Frequently Asked ",l.jsx("span",{className:"highlight-red",children:"Questions"})]})}),l.jsx(ee.div,{initial:e?!1:{opacity:0},animate:{opacity:1},transition:{duration:e?0:.8},children:l.jsx(Xb,{hideHeader:!0})}),l.jsx("style",{children:`
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
            `})]})},Uh={ja:{title:"ページが見つかりません",description:"指定されたページは移動または削除された可能性があります。",action:"ホームへ戻る"},en:{title:"Page Not Found",description:"The page may have been moved or removed.",action:"Return Home"}},Zb=()=>{const{language:e}=le(),t=Uh[e]??Uh.ja;return l.jsxs("main",{id:"main-content",tabIndex:-1,className:"not-found-page",children:[l.jsxs("div",{className:"container not-found-page__content",children:[l.jsx("p",{className:"not-found-page__code","aria-hidden":"true",children:"404"}),l.jsx("h1",{children:t.title}),l.jsx("p",{children:t.description}),l.jsx(se,{to:"/",className:"not-found-page__link",children:t.action})]}),l.jsx("style",{children:`
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
      `})]})},Wh={ja:{intro:"開催概要、登壇者、当日のタイムテーブルを一つのページにまとめました。",themeLabel:"Program theme",themeDescription:"予測できない変化を前に、常識の枠を越えて新しい方向を切り拓くアイデアを共有します。",detailsLabel:"プログラム概要",details:[{label:"開催日",value:"2026年10月31日（土）"},{label:"時間",value:"受付開始 13:30／開催 14:00〜18:00"},{label:"会場",value:"早稲田大学高等学院 講堂"},{label:"参加対象",value:"早稲田大学高等学院の生徒及びその保護者"},{label:"参加費",value:"無料"},{label:"言語",value:"日本語・英語（スライド字幕対応予定）"}],applyAction:"参加を申し込む",applyNote:"Googleフォームが新しいタブで開きます。",scheduleAction:"タイムテーブルを見る",speakerTitle:"Speaker Lineup",speakerDescription:"TEDxWUSHS Youth 2026に登壇する7名です。詳しい紹介文はSpeakersページでご覧いただけます。",speakerAction:"スピーカー詳細を見る",scheduleTitle:"Program Schedule",scheduleDescription:"当日の進行予定です。時間は前後する可能性があります。",scheduleLabel:"TEDxWUSHS Youth 2026 当日タイムテーブル"},en:{intro:"Find the program essentials, speaker lineup, and full schedule in one place.",themeLabel:"Program theme",themeDescription:"Ideas that break beyond familiar boundaries and open new directions in an unpredictable world.",detailsLabel:"Program details",details:[{label:"Date",value:"Saturday, October 31, 2026"},{label:"Time",value:"Doors open 1:30 PM / Program 2:00–6:00 PM"},{label:"Venue",value:"Waseda University Senior High School Auditorium"},{label:"Audience",value:"Students of Waseda University Senior High School and their parents or guardians"},{label:"Admission",value:"Free"},{label:"Languages",value:"Japanese and English, with slide subtitles planned"}],applyAction:"Apply to attend",applyNote:"The Google Form opens in a new tab.",scheduleAction:"View the schedule",speakerTitle:"Speaker Lineup",speakerDescription:"Meet the seven speakers joining TEDxWUSHS Youth 2026. Full profiles are available on the Speakers page.",speakerAction:"View speaker profiles",scheduleTitle:"Program Schedule",scheduleDescription:"The program is subject to minor timing changes.",scheduleLabel:"TEDxWUSHS Youth 2026 program schedule"}},ej=()=>{const{language:e}=le(),t=Wh[e]??Wh.ja,n=[...d0].filter(i=>i.published).sort((i,o)=>i.displayOrder-o.displayOrder),r=u0(n);return l.jsxs("main",{id:"main-content",tabIndex:-1,className:"event-page",children:[l.jsx("section",{className:"event-hero","aria-labelledby":"event-page-title",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"event-hero__layout",children:[l.jsxs("header",{className:"event-hero__header",children:[l.jsx("p",{className:"event-eyebrow",lang:"en",children:"TEDxWUSHS Youth 2026"}),l.jsxs("h1",{id:"event-page-title",className:"event-hero__title",lang:"en",children:["Program ",l.jsx("span",{children:"Information"})]}),l.jsx("p",{className:"event-hero__intro",children:t.intro}),l.jsxs("div",{className:"event-hero__actions",children:[l.jsxs("a",{className:"event-button event-button--primary",href:Xc,target:"_blank",rel:"noopener noreferrer","aria-label":`${t.applyAction} — ${t.applyNote}`,children:[t.applyAction,l.jsx(ui,{size:18,strokeWidth:2.5,"aria-hidden":"true"})]}),l.jsxs("a",{className:"event-button event-button--secondary",href:"#event-schedule",children:[t.scheduleAction,l.jsx(nr,{size:18,strokeWidth:2.5,"aria-hidden":"true"})]})]}),l.jsx("p",{className:"event-hero__note",children:t.applyNote})]}),l.jsxs("aside",{className:"event-theme","aria-labelledby":"event-theme-heading",children:[l.jsx("p",{id:"event-theme-heading",className:"event-theme__label",lang:"en",children:t.themeLabel}),l.jsx("p",{className:"event-theme__name",lang:"en",children:"Breakshot"}),l.jsx("p",{className:"event-theme__description",children:t.themeDescription}),l.jsx("p",{className:"event-theme__statement",lang:"en",children:"Ideas change everything."})]})]}),l.jsx("dl",{className:"event-facts","aria-label":t.detailsLabel,children:t.details.map(i=>l.jsxs("div",{className:"event-facts__item",children:[l.jsx("dt",{children:i.label}),l.jsx("dd",{children:i.value})]},i.label))})]})}),l.jsx("section",{className:"event-section event-speakers","aria-labelledby":"event-speakers-title",children:l.jsxs("div",{className:"container",children:[l.jsxs("header",{className:"event-section__header",children:[l.jsx("p",{className:"event-eyebrow",lang:"en",children:"Meet the speakers"}),l.jsx("h2",{id:"event-speakers-title",lang:"en",children:t.speakerTitle}),l.jsx("p",{children:t.speakerDescription})]}),l.jsx("div",{className:"event-speakers__list",children:r.map((i,o)=>l.jsx("ul",{className:"event-speakers__row",children:i.map(s=>l.jsxs("li",{className:"event-speaker",children:[l.jsx("img",{src:s.image,alt:"",loading:"lazy",decoding:"async",style:{"--event-speaker-position":s.imagePosition}}),l.jsxs("div",{children:[l.jsx("h3",{children:s.name[e]??s.name.ja}),l.jsx("p",{children:s.role[e]??s.role.ja})]})]},s.id))},`event-speaker-row-${o+1}`))}),l.jsxs(se,{className:"event-text-link",to:"/speakers",children:[t.speakerAction,l.jsx(nr,{size:18,strokeWidth:2.5,"aria-hidden":"true"})]})]})}),l.jsx("section",{id:"event-schedule",className:"event-section event-schedule","aria-labelledby":"event-schedule-title",children:l.jsxs("div",{className:"container",children:[l.jsxs("header",{className:"event-section__header",children:[l.jsx("p",{className:"event-eyebrow",lang:"en",children:"October 31, 2026"}),l.jsx("h2",{id:"event-schedule-title",lang:"en",children:t.scheduleTitle}),l.jsx("p",{children:t.scheduleDescription})]}),l.jsx("ol",{className:"event-schedule__list","aria-label":t.scheduleLabel,children:f0.map(i=>l.jsxs("li",{className:"event-schedule__item",children:[l.jsx("time",{children:e==="en"&&i.timeEn?i.timeEn:i.time}),l.jsxs("div",{children:[l.jsx("h3",{lang:"en",children:i.event}),l.jsx("p",{children:i.description[e]??i.description.ja})]})]},`${i.time}-${i.event}`))})]})}),l.jsx("style",{children:`
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
        .event-text-link:focus-visible {
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
      `})]})},tj="/assets/school-fest-2026-booth-D78qCxP1.jpg",Bh={ja:{eyebrow:"Gakuinsai 2026 / Feature",title:"学院祭で英語ディベートを開催",lead:"TEDxWUSHS Youthは学院祭期間中、頌栄女子学院高等学校、慶應義塾高等学校、早稲田大学本庄高等学院の3校を招き、社会や日常に関わる問いを英語で議論しました。競技として勝敗を決めながら、アイデアを問い直し、より深く理解する場を目指した企画です。",meta:"2026年10月10日・11日／早稲田大学高等学院 ゼミ室2",boothAlt:"学院祭のTEDxWUSHS Youth展示会場。黒板のロゴとBreakshotを表現したビリヤード台が設置されている。",boothCaption:"雄弁部と共同で使用したゼミ室2の展示会場。ビリヤード台は、TEDxWUSHS Youth 2026のテーマ「Breakshot」を表現しています。",contentsLabel:"この記事の内容",chapters:[{number:"01",href:"#overview",title:"学院祭で英語ディベートを開催",description:"開催概要・対戦校・試合結果"},{number:"02",href:"#about-tedx",title:"TED/TEDxとは",description:"TEDの使命と、地域からアイデアを広めるTEDx"},{number:"03",href:"#why-debate",title:"TED/TEDxがディベートを行う理由",description:"Debateの理念と、今回の工夫"}],overview:{number:"01",eyebrow:"Event report",title:"学院祭で英語ディベートを開催",intro:"10月10日と11日の2日間、TEDxWUSHS Youthは雄弁部と共同でゼミ室2を使用し、団体紹介と哲学的英語ディベートを実施しました。頌栄女子学院高等学校、慶應義塾高等学校、早稲田大学本庄高等学院ESSを迎え、3つの論題について議論しました。",detailsLabel:"開催概要",details:[{term:"開催日",description:"2026年10月10日（土）・11日（日）"},{term:"会場",description:"早稲田大学高等学院 ゼミ室2"},{term:"実施内容",description:"団体紹介・哲学的英語ディベート"},{term:"共同展示",description:"早稲田大学高等学院 雄弁部"}],matchesLabel:"対戦記録",dateLabel:"日時",opponentLabel:"対戦校",motionLabel:"論題",positionLabel:"両校の立場",resultLabel:"結果",leafletAlt:"TEDxWUSHS Youth学院祭企画「English Debate」の案内チラシ",leafletCaption:"学院祭で配布・掲示したEnglish Debateの案内チラシ。"},aboutTedx:{number:"02",eyebrow:"TED and TEDx",title:"TED/TEDxとは",intro:"TEDとは、1984年にアメリカで始まったカンファレンスに端を発する非営利組織です。最初のカンファレンスは、カリフォルニア州モントレーで開催されました。",acronymLead:"TEDという名称は、次の3つの言葉に由来します。",acronym:[{initial:"T",term:"Technology",translation:"テクノロジー"},{initial:"E",term:"Entertainment",translation:"エンターテインメント"},{initial:"D",term:"Design",translation:"デザイン"}],body:"技術・エンターテインメント・デザインという3領域を結び付ける場として始まり、現在では分野を越えて、世界をより深く理解するきっかけとなるアイデアを届けています。",tedxBody:"TEDxは、TEDの精神を地域のコミュニティへ届けるための草の根の取り組みです。TEDから付与された無償ライセンスのもと、各地域のチームが独立して企画・運営し、その地域から生まれるアイデアや対話を広げます。TEDxWUSHS Youthも、その一つです。",quote:"Ideas change everything.",quoteTranslation:"アイデアは世界を変える",dialogueTitle:"アイデアが、対話と変化につながるまで",dialogue:["ここで重要なのは、TEDが優れた知識や面白いアイデアを一方的に発信することだけを目指しているわけではないという点です。","スピーカーが届けたアイデアをきっかけに、オーディエンス層に応じてスピーカー/オーディエンスの間に深い交流と対話が生まれる。そして、そのアイデアが実際のオーディエンスのアクションにつながっていく。TEDが重視するのは、そうしたアイデアの可能性です。"],watchTitle:"実際のTED/TEDxを見てみる",watchIntro:"まだイメージが湧かない方は、実際のTED TalkとTEDx Talkをご覧ください。",watchOnYouTube:"YouTubeで見る",videos:[{label:"TED Talk / 日本語字幕",title:"ジュリアン・トレジャー：人を惹きつける話し方",embedUrl:"https://www.youtube-nocookie.com/embed/eIho2S0ZahI?cc_load_policy=1&cc_lang_pref=ja&hl=ja&origin=https%3A%2F%2Fwww.tedxwushs.com&rel=0",youtubeUrl:"https://www.youtube.com/watch?v=eIho2S0ZahI"},{label:"TEDxSapporo",title:"思うは招く｜植松 努",embedUrl:"https://www.youtube-nocookie.com/embed/gBumdOWWMhY?origin=https%3A%2F%2Fwww.tedxwushs.com&rel=0",youtubeUrl:"https://www.youtube.com/watch?v=gBumdOWWMhY"}]},whyDebate:{number:"03",eyebrow:"Debate and dialogue",title:"TED/TEDxがディベートを行う理由",intro:"ここで、今回の英語ディベート企画とTEDの関係に戻りましょう。TEDは公式のCuration Guidelinesで、「Debate（討論）」を価値の一つとして明確に掲げています。",body:"TEDの精神の中にあるDebateは、一般的な競技英語ディベートのように、勝敗や最終的な結論だけを求めるものではありません。TEDは懐疑的な視点や批判的な検討を歓迎し、それらをアイデアの改善や、見落としていた課題の発見につなげます。同時に、相互尊重を前提とし、差別やヘイトスピーチを認めていません。今回の企画でも、ディベート参加者をアイデアを届ける話者として捉えると同時に、オーディエンスの立場を踏まえたうえでの議論を意識し、扱うアイデアに深みを与えることを重視しました。そして、特にDebateの中でも質問時間を設け、オーディエンスを取り込んだ議論にすることができました。また、異なる前提から議論が始まり、主張が十分に噛み合わない場面もありましたが、それ含めオーディエンスに新しい発見をもたらすことができ有意義な会になったと思います。",practiceTitle:"今回の工夫",practices:["立論と反論は英語で行い、論点を言葉にして明確にする。","試合中に質問時間を設け、状況に応じて日本語での質問も受け付ける。"]},programAction:"TEDxWUSHS Youth 2026のプログラムを見る",references:{eyebrow:"Sources",title:"参考資料",description:"TED/TEDxおよびDebateに関する記述は、以下のTED公式資料を参照しています。",items:[{title:"TED — About",description:"TEDの使命と活動について",href:"https://www.ted.com/about"},{title:"History of TED",description:"1984年の創設とカンファレンスの歩みについて",href:"https://www.ted.com/about/our-organization/history-of-ted"},{title:"TED Conferences",description:"Technology・Entertainment・Designという名称の由来について",href:"https://www.ted.com/about/conferences"},{title:"TEDx Program",description:"TEDxの仕組みと地域コミュニティでの役割について",href:"https://www.ted.com/tedx"},{title:"TED’s Curation Guidelines",description:"Debate、相互尊重、ヘイトスピーチに関する方針",href:"https://www.ted.com/about/our-organization/how-ted-works/ted-s-curation-guidelines"}]}},en:{eyebrow:"Gakuinsai 2026 / Feature",title:"English debates at Gakuinsai 2026",lead:"During Gakuinsai, TEDxWUSHS Youth welcomed Shoei Girls’ Senior High School, Keio Senior High School, and Waseda University Honjo Senior High School for English debates on questions connected to society and everyday life. The event kept the competitive format while creating space to re-examine ideas and understand them more deeply.",meta:"October 10–11, 2026 / Seminar Room 2, Waseda University Senior High School",boothAlt:"The TEDxWUSHS Youth exhibition at Gakuinsai, with a logo on the blackboard and a billiards table representing Breakshot.",boothCaption:"The exhibition space shared with the school debate club. The billiards table represented “Breakshot,” the theme of TEDxWUSHS Youth 2026.",contentsLabel:"In this feature",chapters:[{number:"01",href:"#overview",title:"English debates at Gakuinsai",description:"Event details, participating schools, and results"},{number:"02",href:"#about-tedx",title:"What are TED and TEDx?",description:"TED’s mission and how TEDx carries ideas into local communities"},{number:"03",href:"#why-debate",title:"Why TED/TEDx engages in debate",description:"The idea of Debate and what we tried"}],overview:{number:"01",eyebrow:"Event report",title:"English debates at Gakuinsai",intro:"On October 10 and 11, TEDxWUSHS Youth shared Seminar Room 2 with the school debate club for an introduction to our activities and three philosophical English debates. We welcomed Shoei Girls’ Senior High School, Keio Senior High School, and Waseda University Honjo Senior High School ESS.",detailsLabel:"Event details",details:[{term:"Dates",description:"Saturday, October 10 and Sunday, October 11, 2026"},{term:"Venue",description:"Seminar Room 2, Waseda University Senior High School"},{term:"Program",description:"Organization showcase and philosophical English debates"},{term:"Shared with",description:"Waseda University Senior High School Debate Club"}],matchesLabel:"Debate record",dateLabel:"Date and time",opponentLabel:"Opponent",motionLabel:"Motion",positionLabel:"Positions",resultLabel:"Result",leafletAlt:"Flyer for the TEDxWUSHS Youth English Debate program at Gakuinsai 2026",leafletCaption:"The English Debate flyer displayed and distributed at Gakuinsai."},aboutTedx:{number:"02",eyebrow:"TED and TEDx",title:"What are TED and TEDx?",intro:"TED is a nonprofit organization that traces its roots to a conference first held in the United States in 1984. The first conference took place in Monterey, California.",acronymLead:"The name TED comes from three words:",acronym:[{initial:"T",term:"Technology",translation:"Technology"},{initial:"E",term:"Entertainment",translation:"Entertainment"},{initial:"D",term:"Design",translation:"Design"}],body:"TED began by bringing together technology, entertainment, and design. Today, its work reaches across disciplines to share ideas that help people understand the world more deeply.",tedxBody:"TEDx is a grassroots initiative that brings the spirit of TED to local communities. Under a free license granted by TED, local teams independently organize events that uncover ideas and create conversation in their communities. TEDxWUSHS Youth is one of those independently organized events.",quote:"Ideas change everything.",quoteTranslation:"アイデアは世界を変える",dialogueTitle:"From an idea to dialogue and change",dialogue:["What matters is that TED is not simply about broadcasting excellent knowledge or interesting ideas in one direction.","An idea shared by a speaker can create deep exchange and dialogue between speakers and audience members in ways that reflect the audience’s background. The idea can then lead to real action by the audience. TED places value on this wider potential of ideas."],watchTitle:"Watch TED and TEDx in action",watchIntro:"If the distinction still feels abstract, these TED and TEDx Talks offer two concrete examples.",watchOnYouTube:"Watch on YouTube",videos:[{label:"TED Talk / Japanese subtitles",title:"How to speak so that people want to listen | Julian Treasure",embedUrl:"https://www.youtube-nocookie.com/embed/eIho2S0ZahI?cc_load_policy=1&cc_lang_pref=ja&hl=ja&origin=https%3A%2F%2Fwww.tedxwushs.com&rel=0",youtubeUrl:"https://www.youtube.com/watch?v=eIho2S0ZahI"},{label:"TEDxSapporo",title:"Hope invites | Tsutomu Uematsu",embedUrl:"https://www.youtube-nocookie.com/embed/gBumdOWWMhY?origin=https%3A%2F%2Fwww.tedxwushs.com&rel=0",youtubeUrl:"https://www.youtube.com/watch?v=gBumdOWWMhY"}]},whyDebate:{number:"03",eyebrow:"Debate and dialogue",title:"Why TED/TEDx engages in debate",intro:"Returning to the relationship between this English debate project and TED, TED explicitly identifies “Debate” as one of its values in its official Curation Guidelines.",body:"Debate within the spirit of TED differs from conventional competitive English debate focused only on a winner or a final conclusion. TED welcomes skepticism and critical examination as ways to improve an idea or reveal its flaws, while requiring mutual respect and rejecting bigotry and hate speech. In this project, we treated each participant as a speaker carrying an idea while also shaping the discussion around the audience’s perspective, so that the ideas being examined could gain greater depth. In particular, we included question time to bring the audience directly into the discussion. At times, arguments began from different assumptions and did not fully meet; even those moments offered the audience new discoveries and helped make the event meaningful.",practiceTitle:"What we tried",practices:["Cases and rebuttals were delivered in English to make each line of reasoning explicit.","Question time was built into the matches, with Japanese questions accepted when appropriate."]},programAction:"View the TEDxWUSHS Youth 2026 program",references:{eyebrow:"Sources",title:"References",description:"Our descriptions of TED, TEDx, and Debate draw on the following official TED sources.",items:[{title:"TED — About",description:"TED’s mission and work",href:"https://www.ted.com/about"},{title:"History of TED",description:"TED’s origins in 1984 and the history of its conference",href:"https://www.ted.com/about/our-organization/history-of-ted"},{title:"TED Conferences",description:"The origin of the name Technology, Entertainment, and Design",href:"https://www.ted.com/about/conferences"},{title:"TEDx Program",description:"How TEDx works in local communities",href:"https://www.ted.com/tedx"},{title:"TED’s Curation Guidelines",description:"Guidance on debate, mutual respect, and hate speech",href:"https://www.ted.com/about/our-organization/how-ted-works/ted-s-curation-guidelines"}]}}},nj=[{date:{ja:"10月10日（土）12:00–13:00",en:"Saturday, October 10 / 12:00–1:00 PM"},opponent:{ja:"頌栄女子学院高等学校",en:"Shoei Girls’ Senior High School"},motionJa:"日本はボランティア（社会奉仕）活動を高校卒業の要件とするべきである。",motionEn:"Japan should make community service a requirement for high school graduation.",positions:[{school:{ja:"頌栄女子学院高等学校",en:"Shoei Girls’ Senior High School"},stance:{ja:"ボランティア活動の必修化に肯定",en:"Supports requiring volunteer service for graduation"}},{school:{ja:"早稲田大学高等学院",en:"Waseda University Senior High School"},stance:{ja:"ボランティア活動の必修化に否定",en:"Opposes requiring volunteer service for graduation"}}],result:{ja:"頌栄女子学院高等学校の勝利",en:"Shoei Girls’ Senior High School won"}},{date:{ja:"10月11日（日）11:30–12:30",en:"Sunday, October 11 / 11:30 AM–12:30 PM"},opponent:{ja:"慶應義塾高等学校",en:"Keio Senior High School"},motionJa:"日本は高所得者に対する所得税を引き上げるべきである。",motionEn:"Japan should significantly increase income taxes on high-income earners.",positions:[{school:{ja:"慶應義塾高等学校",en:"Keio Senior High School"},stance:{ja:"高所得者への所得税引き上げに賛成",en:"Supports raising income taxes on high-income earners"}},{school:{ja:"早稲田大学高等学院",en:"Waseda University Senior High School"},stance:{ja:"高所得者への所得税引き上げに反対",en:"Opposes raising income taxes on high-income earners"}}],result:{ja:"慶應義塾高等学校の勝利",en:"Keio Senior High School won"}},{date:{ja:"10月11日（日）14:00–15:00",en:"Sunday, October 11 / 2:00–3:00 PM"},opponent:{ja:"早稲田大学本庄高等学院 ESS",en:"Waseda University Honjo Senior High School ESS"},motionJa:"恋愛より友情を優先すべきである。",motionEn:"This House believes that friendship is more important than romantic relationships.",positions:[{school:{ja:"早稲田大学本庄高等学院 ESS",en:"Waseda University Honjo Senior High School ESS"},stance:{ja:"恋愛関係を重視する立場",en:"Prioritizes romantic relationships"}},{school:{ja:"早稲田大学高等学院",en:"Waseda University Senior High School"},stance:{ja:"友情を重視する立場",en:"Prioritizes friendship"}}],result:{ja:"早稲田大学高等学院の勝利",en:"Waseda University Senior High School won"}}],rj=()=>{const{language:e}=le(),t=Bh[e]??Bh.ja;return l.jsxs("main",{id:"main-content",tabIndex:-1,className:"school-fest-page",children:[l.jsxs("article",{children:[l.jsx("header",{className:"school-fest-hero",children:l.jsxs("div",{className:"container school-fest-hero__layout",children:[l.jsxs("div",{className:"school-fest-hero__copy",children:[l.jsx("p",{className:"school-fest-eyebrow",lang:"en",children:t.eyebrow}),l.jsx("h1",{children:t.title}),l.jsx("p",{className:"school-fest-hero__lead",children:t.lead}),l.jsx("p",{className:"school-fest-hero__meta",children:t.meta})]}),l.jsxs("figure",{className:"school-fest-hero__media",children:[l.jsx("img",{src:tj,alt:t.boothAlt}),l.jsx("figcaption",{children:t.boothCaption})]})]})}),l.jsx("nav",{className:"school-fest-contents","aria-label":t.contentsLabel,children:l.jsxs("div",{className:"container",children:[l.jsx("p",{className:"school-fest-contents__label",children:t.contentsLabel}),l.jsx("ol",{children:t.chapters.map(n=>l.jsx("li",{children:l.jsxs("a",{href:n.href,children:[l.jsx("span",{className:"school-fest-contents__number","aria-hidden":"true",children:n.number}),l.jsxs("span",{children:[l.jsx("strong",{children:n.title}),l.jsx("small",{children:n.description})]})]})},n.number))})]})}),l.jsx("section",{id:"overview",className:"school-fest-section school-fest-section--light","aria-labelledby":"overview-title",children:l.jsxs("div",{className:"container",children:[l.jsxs("header",{className:"school-fest-section__header",children:[l.jsx("span",{className:"school-fest-section__number","aria-hidden":"true",children:t.overview.number}),l.jsxs("div",{children:[l.jsx("p",{className:"school-fest-eyebrow",lang:"en",children:t.overview.eyebrow}),l.jsx("h2",{id:"overview-title",children:t.overview.title}),l.jsx("p",{children:t.overview.intro})]})]}),l.jsx("dl",{className:"school-fest-facts","aria-label":t.overview.detailsLabel,children:t.overview.details.map(n=>l.jsxs("div",{children:[l.jsx("dt",{children:n.term}),l.jsx("dd",{children:n.description})]},n.term))}),l.jsxs("div",{className:"school-fest-overview__layout",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"school-fest-subheading",children:t.overview.matchesLabel}),l.jsx("ol",{className:"school-fest-matches",children:nj.map((n,r)=>l.jsxs("li",{children:[l.jsx("span",{className:"school-fest-match__index","aria-hidden":"true",children:String(r+1).padStart(2,"0")}),l.jsxs("div",{className:"school-fest-match__body",children:[l.jsxs("dl",{children:[l.jsxs("div",{children:[l.jsx("dt",{children:t.overview.dateLabel}),l.jsx("dd",{children:n.date[e]??n.date.ja})]}),l.jsxs("div",{children:[l.jsx("dt",{children:t.overview.opponentLabel}),l.jsx("dd",{children:n.opponent[e]??n.opponent.ja})]})]}),l.jsxs("div",{className:"school-fest-match__motion",children:[l.jsx("span",{children:t.overview.motionLabel}),l.jsx("p",{children:e==="en"?n.motionEn:n.motionJa}),l.jsx("p",{lang:e==="en"?"ja":"en",children:e==="en"?n.motionJa:n.motionEn})]}),l.jsxs("div",{className:"school-fest-match__positions",children:[l.jsx("span",{children:t.overview.positionLabel}),l.jsx("dl",{children:n.positions.map(i=>l.jsxs("div",{children:[l.jsx("dt",{children:i.school[e]??i.school.ja}),l.jsx("dd",{children:i.stance[e]??i.stance.ja})]},i.school.en))})]}),l.jsxs("p",{className:"school-fest-match__result",children:[l.jsx("span",{children:t.overview.resultLabel}),n.result[e]??n.result.ja]})]})]},n.motionEn))})]}),l.jsxs("figure",{className:"school-fest-leaflet",children:[l.jsx("img",{src:vl,alt:t.overview.leafletAlt,loading:"lazy",decoding:"async"}),l.jsx("figcaption",{children:t.overview.leafletCaption})]})]})]})}),l.jsx("section",{id:"about-tedx",className:"school-fest-section school-fest-section--dark","aria-labelledby":"about-tedx-title",children:l.jsxs("div",{className:"container school-fest-rationale",children:[l.jsxs("header",{className:"school-fest-section__header",children:[l.jsx("span",{className:"school-fest-section__number","aria-hidden":"true",children:t.aboutTedx.number}),l.jsxs("div",{children:[l.jsx("p",{className:"school-fest-eyebrow",lang:"en",children:t.aboutTedx.eyebrow}),l.jsx("h2",{id:"about-tedx-title",children:t.aboutTedx.title})]})]}),l.jsxs("div",{className:"school-fest-rationale__grid",children:[l.jsxs("div",{className:"school-fest-rationale__copy",children:[l.jsx("p",{children:t.aboutTedx.intro}),l.jsx("p",{children:t.aboutTedx.acronymLead}),l.jsx("dl",{className:"school-fest-acronym",children:t.aboutTedx.acronym.map(n=>l.jsxs("div",{children:[l.jsx("dt",{children:n.initial}),l.jsxs("dd",{children:[l.jsx("strong",{lang:"en",children:n.term}),n.translation!==n.term&&l.jsx("span",{children:n.translation})]})]},n.initial))}),l.jsx("p",{children:t.aboutTedx.body}),l.jsx("p",{children:t.aboutTedx.tedxBody})]}),l.jsxs("blockquote",{className:"school-fest-quote",children:[l.jsx("p",{lang:"en",children:t.aboutTedx.quote}),l.jsx("footer",{children:t.aboutTedx.quoteTranslation})]})]}),l.jsxs("div",{className:"school-fest-dialogue",children:[l.jsx("h3",{children:t.aboutTedx.dialogueTitle}),l.jsx("div",{children:t.aboutTedx.dialogue.map(n=>l.jsx("p",{children:n},n))})]}),l.jsxs("section",{className:"school-fest-watch","aria-labelledby":"school-fest-watch-title",children:[l.jsxs("header",{children:[l.jsx("p",{className:"school-fest-eyebrow",lang:"en",children:"Watch"}),l.jsx("h3",{id:"school-fest-watch-title",children:t.aboutTedx.watchTitle}),l.jsx("p",{children:t.aboutTedx.watchIntro})]}),l.jsx("div",{className:"school-fest-watch__grid",children:t.aboutTedx.videos.map(n=>l.jsxs("figure",{children:[l.jsx("div",{className:"school-fest-video",children:l.jsx("iframe",{src:n.embedUrl,title:n.title,loading:"lazy",referrerPolicy:"strict-origin-when-cross-origin",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),l.jsxs("figcaption",{children:[l.jsx("span",{children:n.label}),l.jsx("strong",{children:n.title}),l.jsxs("a",{href:n.youtubeUrl,target:"_blank",rel:"noopener noreferrer",children:[t.aboutTedx.watchOnYouTube,l.jsx(ui,{size:17,strokeWidth:2.25,"aria-hidden":"true"})]})]})]},n.youtubeUrl))})]})]})}),l.jsx("section",{id:"why-debate",className:"school-fest-section school-fest-section--light","aria-labelledby":"why-debate-title",children:l.jsxs("div",{className:"container",children:[l.jsxs("header",{className:"school-fest-section__header",children:[l.jsx("span",{className:"school-fest-section__number","aria-hidden":"true",children:t.whyDebate.number}),l.jsxs("div",{children:[l.jsx("p",{className:"school-fest-eyebrow",lang:"en",children:t.whyDebate.eyebrow}),l.jsx("h2",{id:"why-debate-title",children:t.whyDebate.title}),l.jsx("p",{children:t.whyDebate.intro})]})]}),l.jsxs("div",{className:"school-fest-debate-context",children:[l.jsx("p",{children:t.whyDebate.body}),l.jsxs("section",{"aria-labelledby":"practice-title",children:[l.jsx("h3",{id:"practice-title",children:t.whyDebate.practiceTitle}),l.jsx("ol",{children:t.whyDebate.practices.map((n,r)=>l.jsxs("li",{children:[l.jsx("span",{"aria-hidden":"true",children:String(r+1).padStart(2,"0")}),l.jsx("p",{children:n})]},n))})]})]}),l.jsxs(se,{className:"school-fest-program-link",to:"/program",children:[t.programAction,l.jsx(nr,{size:20,strokeWidth:2.5,"aria-hidden":"true"})]})]})}),l.jsx("section",{className:"school-fest-references","aria-labelledby":"school-fest-references-title",children:l.jsxs("div",{className:"container",children:[l.jsxs("header",{children:[l.jsx("p",{className:"school-fest-eyebrow",lang:"en",children:t.references.eyebrow}),l.jsx("h2",{id:"school-fest-references-title",children:t.references.title}),l.jsx("p",{children:t.references.description})]}),l.jsx("ol",{children:t.references.items.map((n,r)=>l.jsx("li",{children:l.jsxs("a",{href:n.href,target:"_blank",rel:"noopener noreferrer",children:[l.jsx("span",{"aria-hidden":"true",children:String(r+1).padStart(2,"0")}),l.jsxs("span",{children:[l.jsx("strong",{children:n.title}),l.jsx("small",{children:n.description})]}),l.jsx(ui,{size:19,strokeWidth:2.25,"aria-hidden":"true"})]})},n.href))})]})})]}),l.jsx("style",{children:`
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
      `})]})},Hh={ja:{"/":"TEDxWUSHS Youth | Ideas change everything","/about":"TEDxについて | TEDxWUSHS Youth","/program":"プログラム | TEDxWUSHS Youth","/event":"プログラム | TEDxWUSHS Youth","/speakers":"スピーカー | TEDxWUSHS Youth","/team":"チーム | TEDxWUSHS Youth","/organizers":"チーム | TEDxWUSHS Youth","/join-us":"参加する | TEDxWUSHS Youth","/join-us/speaker":"スピーカー募集 | TEDxWUSHS Youth","/join-us/team":"運営チーム募集 | TEDxWUSHS Youth","/join-us/audience":"参加申込み | TEDxWUSHS Youth","/faq":"よくある質問 | TEDxWUSHS Youth","/school-fest-2026":"学院祭英語ディベート特集 | TEDxWUSHS Youth"},en:{"/":"TEDxWUSHS Youth | Ideas change everything","/about":"About | TEDxWUSHS Youth","/program":"Program | TEDxWUSHS Youth","/event":"Program | TEDxWUSHS Youth","/speakers":"Speakers | TEDxWUSHS Youth","/team":"Team | TEDxWUSHS Youth","/organizers":"Team | TEDxWUSHS Youth","/join-us":"Join Us | TEDxWUSHS Youth","/join-us/speaker":"Speaker Applications | TEDxWUSHS Youth","/join-us/team":"Team Recruitment | TEDxWUSHS Youth","/join-us/audience":"Audience Registration | TEDxWUSHS Youth","/faq":"Frequently Asked Questions | TEDxWUSHS Youth","/school-fest-2026":"Gakuinsai English Debate Feature | TEDxWUSHS Youth"}},ij=()=>{const{pathname:e}=bn(),{language:t}=le(),n=w.useRef(e);return w.useEffect(()=>{const r=Hh[t]??Hh.ja;document.title=r[e]??(t==="ja"?"ページが見つかりません | TEDxWUSHS Youth":"Page Not Found | TEDxWUSHS Youth"),document.documentElement.lang=t==="en"?"en":"ja"},[t,e]),w.useEffect(()=>{const r=document.getElementById("main-content"),i=n.current!==e;if(n.current=e,!r||(window.scrollTo({top:0,left:0,behavior:"auto"}),!i))return;const o=window.requestAnimationFrame(()=>{r.focus({preventScroll:!0})});return()=>window.cancelAnimationFrame(o)},[e]),null};function oj(){return l.jsx(fb,{children:l.jsx(Ux,{children:l.jsxs("div",{className:"app",children:[l.jsx(ij,{}),l.jsx(gb,{}),l.jsxs(zx,{children:[l.jsx(ke,{path:"/",element:l.jsx(Lb,{})}),l.jsx(ke,{path:"/about",element:l.jsx(Ob,{})}),l.jsx(ke,{path:"/program",element:l.jsx(ej,{})}),l.jsx(ke,{path:"/event",element:l.jsx(fd,{to:"/program",replace:!0})}),l.jsx(ke,{path:"/speakers",element:l.jsx(Ub,{})}),l.jsx(ke,{path:"/team",element:l.jsx(Hb,{})}),l.jsx(ke,{path:"/organizers",element:l.jsx(fd,{to:"/team",replace:!0})}),l.jsx(ke,{path:"/join-us",element:l.jsx($b,{})}),l.jsx(ke,{path:"/join-us/speaker",element:l.jsx(Yb,{})}),l.jsx(ke,{path:"/join-us/team",element:l.jsx(Kb,{})}),l.jsx(ke,{path:"/join-us/audience",element:l.jsx(Gb,{})}),l.jsx(ke,{path:"/faq",element:l.jsx(Jb,{})}),l.jsx(ke,{path:"/school-fest-2026",element:l.jsx(rj,{})}),l.jsx(ke,{path:"*",element:l.jsx(Zb,{})})]}),l.jsx(vb,{})]})})})}im(document.getElementById("root")).render(l.jsx(w.StrictMode,{children:l.jsx(oj,{})}));
