function f0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function h0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hf={exports:{}},Bo={},$f={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ci=Symbol.for("react.element"),p0=Symbol.for("react.portal"),m0=Symbol.for("react.fragment"),g0=Symbol.for("react.strict_mode"),v0=Symbol.for("react.profiler"),y0=Symbol.for("react.provider"),x0=Symbol.for("react.context"),w0=Symbol.for("react.forward_ref"),k0=Symbol.for("react.suspense"),S0=Symbol.for("react.memo"),j0=Symbol.for("react.lazy"),qu=Symbol.iterator;function b0(e){return e===null||typeof e!="object"?null:(e=qu&&e[qu]||e["@@iterator"],typeof e=="function"?e:null)}var Yf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kf=Object.assign,Gf={};function nr(e,t,n){this.props=e,this.context=t,this.refs=Gf,this.updater=n||Yf}nr.prototype.isReactComponent={};nr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};nr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qf(){}Qf.prototype=nr.prototype;function gl(e,t,n){this.props=e,this.context=t,this.refs=Gf,this.updater=n||Yf}var vl=gl.prototype=new Qf;vl.constructor=gl;Kf(vl,nr.prototype);vl.isPureReactComponent=!0;var Ju=Array.isArray,Xf=Object.prototype.hasOwnProperty,yl={current:null},qf={key:!0,ref:!0,__self:!0,__source:!0};function Jf(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Xf.call(t,r)&&!qf.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ci,type:e,key:o,ref:s,props:i,_owner:yl.current}}function T0(e,t){return{$$typeof:ci,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function xl(e){return typeof e=="object"&&e!==null&&e.$$typeof===ci}function E0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Zu=/\/+/g;function cs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?E0(""+e.key):t.toString(36)}function $i(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ci:case p0:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+cs(s,0):r,Ju(i)?(n="",e!=null&&(n=e.replace(Zu,"$&/")+"/"),$i(i,t,n,"",function(c){return c})):i!=null&&(xl(i)&&(i=T0(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Zu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Ju(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+cs(o,a);s+=$i(o,t,n,l,i)}else if(l=b0(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+cs(o,a++),s+=$i(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ji(e,t,n){if(e==null)return e;var r=[],i=0;return $i(e,r,"","",function(o){return t.call(n,o,i++)}),r}function C0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Te={current:null},Yi={transition:null},P0={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:Yi,ReactCurrentOwner:yl};function Zf(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:ji,forEach:function(e,t,n){ji(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ji(e,function(){t++}),t},toArray:function(e){return ji(e,function(t){return t})||[]},only:function(e){if(!xl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=nr;L.Fragment=m0;L.Profiler=v0;L.PureComponent=gl;L.StrictMode=g0;L.Suspense=k0;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P0;L.act=Zf;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Kf({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=yl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Xf.call(t,l)&&!qf.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ci,type:e.type,key:i,ref:o,props:r,_owner:s}};L.createContext=function(e){return e={$$typeof:x0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:y0,_context:e},e.Consumer=e};L.createElement=Jf;L.createFactory=function(e){var t=Jf.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:w0,render:e}};L.isValidElement=xl;L.lazy=function(e){return{$$typeof:j0,_payload:{_status:-1,_result:e},_init:C0}};L.memo=function(e,t){return{$$typeof:S0,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Yi.transition;Yi.transition={};try{e()}finally{Yi.transition=t}};L.unstable_act=Zf;L.useCallback=function(e,t){return Te.current.useCallback(e,t)};L.useContext=function(e){return Te.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return Te.current.useDeferredValue(e)};L.useEffect=function(e,t){return Te.current.useEffect(e,t)};L.useId=function(){return Te.current.useId()};L.useImperativeHandle=function(e,t,n){return Te.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return Te.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return Te.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return Te.current.useMemo(e,t)};L.useReducer=function(e,t,n){return Te.current.useReducer(e,t,n)};L.useRef=function(e){return Te.current.useRef(e)};L.useState=function(e){return Te.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return Te.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return Te.current.useTransition()};L.version="18.3.1";$f.exports=L;var w=$f.exports;const _0=h0(w),N0=f0({__proto__:null,default:_0},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0=w,A0=Symbol.for("react.element"),M0=Symbol.for("react.fragment"),R0=Object.prototype.hasOwnProperty,L0=D0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,z0={key:!0,ref:!0,__self:!0,__source:!0};function eh(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)R0.call(t,r)&&!z0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:A0,type:e,key:o,ref:s,props:i,_owner:L0.current}}Bo.Fragment=M0;Bo.jsx=eh;Bo.jsxs=eh;Hf.exports=Bo;var u=Hf.exports,th={exports:{}},Ve={},nh={exports:{}},rh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,A){var M=P.length;P.push(A);e:for(;0<M;){var W=M-1>>>1,ae=P[W];if(0<i(ae,A))P[W]=A,P[M]=ae,M=W;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var A=P[0],M=P.pop();if(M!==A){P[0]=M;e:for(var W=0,ae=P.length,ki=ae>>>1;W<ki;){var tn=2*(W+1)-1,us=P[tn],nn=tn+1,Si=P[nn];if(0>i(us,M))nn<ae&&0>i(Si,us)?(P[W]=Si,P[nn]=M,W=nn):(P[W]=us,P[tn]=M,W=tn);else if(nn<ae&&0>i(Si,M))P[W]=Si,P[nn]=M,W=nn;else break e}}return A}function i(P,A){var M=P.sortIndex-A.sortIndex;return M!==0?M:P.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],d=1,f=null,h=3,v=!1,y=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(P){for(var A=n(c);A!==null;){if(A.callback===null)r(c);else if(A.startTime<=P)r(c),A.sortIndex=A.expirationTime,t(l,A);else break;A=n(c)}}function k(P){if(x=!1,p(P),!y)if(n(l)!==null)y=!0,wi(j);else{var A=n(c);A!==null&&J(k,A.startTime-P)}}function j(P,A){y=!1,x&&(x=!1,g(b),b=-1),v=!0;var M=h;try{for(p(A),f=n(l);f!==null&&(!(f.expirationTime>A)||P&&!q());){var W=f.callback;if(typeof W=="function"){f.callback=null,h=f.priorityLevel;var ae=W(f.expirationTime<=A);A=e.unstable_now(),typeof ae=="function"?f.callback=ae:f===n(l)&&r(l),p(A)}else r(l);f=n(l)}if(f!==null)var ki=!0;else{var tn=n(c);tn!==null&&J(k,tn.startTime-A),ki=!1}return ki}finally{f=null,h=M,v=!1}}var T=!1,E=null,b=-1,R=5,D=-1;function q(){return!(e.unstable_now()-D<R)}function it(){if(E!==null){var P=e.unstable_now();D=P;var A=!0;try{A=E(!0,P)}finally{A?en():(T=!1,E=null)}}else T=!1}var en;if(typeof m=="function")en=function(){m(it)};else if(typeof MessageChannel<"u"){var cr=new MessageChannel,xi=cr.port2;cr.port1.onmessage=it,en=function(){xi.postMessage(null)}}else en=function(){S(it,0)};function wi(P){E=P,T||(T=!0,en())}function J(P,A){b=S(function(){P(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,wi(j))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(P){switch(h){case 1:case 2:case 3:var A=3;break;default:A=h}var M=h;h=A;try{return P()}finally{h=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,A){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var M=h;h=P;try{return A()}finally{h=M}},e.unstable_scheduleCallback=function(P,A,M){var W=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?W+M:W):M=W,P){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=M+ae,P={id:d++,callback:A,priorityLevel:P,startTime:M,expirationTime:ae,sortIndex:-1},M>W?(P.sortIndex=M,t(c,P),n(l)===null&&P===n(c)&&(x?(g(b),b=-1):x=!0,J(k,M-W))):(P.sortIndex=ae,t(l,P),y||v||(y=!0,wi(j))),P},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(P){var A=h;return function(){var M=h;h=A;try{return P.apply(this,arguments)}finally{h=M}}}})(rh);nh.exports=rh;var V0=nh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I0=w,ze=V0;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ih=new Set,Fr={};function kn(e,t){Gn(e,t),Gn(e+"Capture",t)}function Gn(e,t){for(Fr[e]=t,e=0;e<t.length;e++)ih.add(t[e])}var xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ea=Object.prototype.hasOwnProperty,F0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ec={},tc={};function O0(e){return ea.call(tc,e)?!0:ea.call(ec,e)?!1:F0.test(e)?tc[e]=!0:(ec[e]=!0,!1)}function U0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function B0(e,t,n,r){if(t===null||typeof t>"u"||U0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ee(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new Ee(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var wl=/[\-:]([a-z])/g;function kl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(wl,kl);me[t]=new Ee(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(wl,kl);me[t]=new Ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(wl,kl);me[t]=new Ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function Sl(e,t,n,r){var i=me.hasOwnProperty(t)?me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(B0(t,n,i,r)&&(n=null),r||i===null?O0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var bt=I0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bi=Symbol.for("react.element"),Tn=Symbol.for("react.portal"),En=Symbol.for("react.fragment"),jl=Symbol.for("react.strict_mode"),ta=Symbol.for("react.profiler"),oh=Symbol.for("react.provider"),sh=Symbol.for("react.context"),bl=Symbol.for("react.forward_ref"),na=Symbol.for("react.suspense"),ra=Symbol.for("react.suspense_list"),Tl=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),ah=Symbol.for("react.offscreen"),nc=Symbol.iterator;function dr(e){return e===null||typeof e!="object"?null:(e=nc&&e[nc]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,ds;function wr(e){if(ds===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ds=t&&t[1]||""}return`
`+ds+e}var fs=!1;function hs(e,t){if(!e||fs)return"";fs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{fs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wr(e):""}function W0(e){switch(e.tag){case 5:return wr(e.type);case 16:return wr("Lazy");case 13:return wr("Suspense");case 19:return wr("SuspenseList");case 0:case 2:case 15:return e=hs(e.type,!1),e;case 11:return e=hs(e.type.render,!1),e;case 1:return e=hs(e.type,!0),e;default:return""}}function ia(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case En:return"Fragment";case Tn:return"Portal";case ta:return"Profiler";case jl:return"StrictMode";case na:return"Suspense";case ra:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sh:return(e.displayName||"Context")+".Consumer";case oh:return(e._context.displayName||"Context")+".Provider";case bl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Tl:return t=e.displayName||null,t!==null?t:ia(e.type)||"Memo";case Ct:t=e._payload,e=e._init;try{return ia(e(t))}catch{}}return null}function H0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ia(t);case 8:return t===jl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $0(e){var t=lh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ti(e){e._valueTracker||(e._valueTracker=$0(e))}function uh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=lh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ao(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function oa(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function rc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ht(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ch(e,t){t=t.checked,t!=null&&Sl(e,"checked",t,!1)}function sa(e,t){ch(e,t);var n=Ht(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?aa(e,t.type,n):t.hasOwnProperty("defaultValue")&&aa(e,t.type,Ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ic(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function aa(e,t,n){(t!=="number"||ao(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var kr=Array.isArray;function Un(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ht(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function la(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(kr(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ht(n)}}function dh(e,t){var n=Ht(t.value),r=Ht(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function sc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ua(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ei,hh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ei=Ei||document.createElement("div"),Ei.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ei.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Or(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Er={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Y0=["Webkit","ms","Moz","O"];Object.keys(Er).forEach(function(e){Y0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Er[t]=Er[e]})});function ph(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Er.hasOwnProperty(e)&&Er[e]?(""+t).trim():t+"px"}function mh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ph(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var K0=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ca(e,t){if(t){if(K0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function da(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fa=null;function El(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ha=null,Bn=null,Wn=null;function ac(e){if(e=hi(e)){if(typeof ha!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Ko(t),ha(e.stateNode,e.type,t))}}function gh(e){Bn?Wn?Wn.push(e):Wn=[e]:Bn=e}function vh(){if(Bn){var e=Bn,t=Wn;if(Wn=Bn=null,ac(e),t)for(e=0;e<t.length;e++)ac(t[e])}}function yh(e,t){return e(t)}function xh(){}var ps=!1;function wh(e,t,n){if(ps)return e(t,n);ps=!0;try{return yh(e,t,n)}finally{ps=!1,(Bn!==null||Wn!==null)&&(xh(),vh())}}function Ur(e,t){var n=e.stateNode;if(n===null)return null;var r=Ko(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var pa=!1;if(xt)try{var fr={};Object.defineProperty(fr,"passive",{get:function(){pa=!0}}),window.addEventListener("test",fr,fr),window.removeEventListener("test",fr,fr)}catch{pa=!1}function G0(e,t,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Cr=!1,lo=null,uo=!1,ma=null,Q0={onError:function(e){Cr=!0,lo=e}};function X0(e,t,n,r,i,o,s,a,l){Cr=!1,lo=null,G0.apply(Q0,arguments)}function q0(e,t,n,r,i,o,s,a,l){if(X0.apply(this,arguments),Cr){if(Cr){var c=lo;Cr=!1,lo=null}else throw Error(C(198));uo||(uo=!0,ma=c)}}function Sn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function kh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function lc(e){if(Sn(e)!==e)throw Error(C(188))}function J0(e){var t=e.alternate;if(!t){if(t=Sn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return lc(i),e;if(o===r)return lc(i),t;o=o.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function Sh(e){return e=J0(e),e!==null?jh(e):null}function jh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=jh(e);if(t!==null)return t;e=e.sibling}return null}var bh=ze.unstable_scheduleCallback,uc=ze.unstable_cancelCallback,Z0=ze.unstable_shouldYield,ev=ze.unstable_requestPaint,Z=ze.unstable_now,tv=ze.unstable_getCurrentPriorityLevel,Cl=ze.unstable_ImmediatePriority,Th=ze.unstable_UserBlockingPriority,co=ze.unstable_NormalPriority,nv=ze.unstable_LowPriority,Eh=ze.unstable_IdlePriority,Wo=null,lt=null;function rv(e){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Wo,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:sv,iv=Math.log,ov=Math.LN2;function sv(e){return e>>>=0,e===0?32:31-(iv(e)/ov|0)|0}var Ci=64,Pi=4194304;function Sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Sr(a):(o&=s,o!==0&&(r=Sr(o)))}else s=n&~i,s!==0?r=Sr(s):o!==0&&(r=Sr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tt(t),i=1<<n,r|=e[n],t&=~i;return r}function av(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-tt(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=av(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function ga(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ch(){var e=Ci;return Ci<<=1,!(Ci&4194240)&&(Ci=64),e}function ms(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function di(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function uv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-tt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Pl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var V=0;function Ph(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _h,_l,Nh,Dh,Ah,va=!1,_i=[],Lt=null,zt=null,Vt=null,Br=new Map,Wr=new Map,_t=[],cv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cc(e,t){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Vt=null;break;case"pointerover":case"pointerout":Br.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wr.delete(t.pointerId)}}function hr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=hi(t),t!==null&&_l(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function dv(e,t,n,r,i){switch(t){case"focusin":return Lt=hr(Lt,e,t,n,r,i),!0;case"dragenter":return zt=hr(zt,e,t,n,r,i),!0;case"mouseover":return Vt=hr(Vt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Br.set(o,hr(Br.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Wr.set(o,hr(Wr.get(o)||null,e,t,n,r,i)),!0}return!1}function Mh(e){var t=ln(e.target);if(t!==null){var n=Sn(t);if(n!==null){if(t=n.tag,t===13){if(t=kh(n),t!==null){e.blockedOn=t,Ah(e.priority,function(){Nh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ki(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ya(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fa=r,n.target.dispatchEvent(r),fa=null}else return t=hi(n),t!==null&&_l(t),e.blockedOn=n,!1;t.shift()}return!0}function dc(e,t,n){Ki(e)&&n.delete(t)}function fv(){va=!1,Lt!==null&&Ki(Lt)&&(Lt=null),zt!==null&&Ki(zt)&&(zt=null),Vt!==null&&Ki(Vt)&&(Vt=null),Br.forEach(dc),Wr.forEach(dc)}function pr(e,t){e.blockedOn===t&&(e.blockedOn=null,va||(va=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,fv)))}function Hr(e){function t(i){return pr(i,e)}if(0<_i.length){pr(_i[0],e);for(var n=1;n<_i.length;n++){var r=_i[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Lt!==null&&pr(Lt,e),zt!==null&&pr(zt,e),Vt!==null&&pr(Vt,e),Br.forEach(t),Wr.forEach(t),n=0;n<_t.length;n++)r=_t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<_t.length&&(n=_t[0],n.blockedOn===null);)Mh(n),n.blockedOn===null&&_t.shift()}var Hn=bt.ReactCurrentBatchConfig,ho=!0;function hv(e,t,n,r){var i=V,o=Hn.transition;Hn.transition=null;try{V=1,Nl(e,t,n,r)}finally{V=i,Hn.transition=o}}function pv(e,t,n,r){var i=V,o=Hn.transition;Hn.transition=null;try{V=4,Nl(e,t,n,r)}finally{V=i,Hn.transition=o}}function Nl(e,t,n,r){if(ho){var i=ya(e,t,n,r);if(i===null)Ts(e,t,r,po,n),cc(e,r);else if(dv(i,e,t,n,r))r.stopPropagation();else if(cc(e,r),t&4&&-1<cv.indexOf(e)){for(;i!==null;){var o=hi(i);if(o!==null&&_h(o),o=ya(e,t,n,r),o===null&&Ts(e,t,r,po,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ts(e,t,r,null,n)}}var po=null;function ya(e,t,n,r){if(po=null,e=El(r),e=ln(e),e!==null)if(t=Sn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=kh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return po=e,null}function Rh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tv()){case Cl:return 1;case Th:return 4;case co:case nv:return 16;case Eh:return 536870912;default:return 16}default:return 16}}var Dt=null,Dl=null,Gi=null;function Lh(){if(Gi)return Gi;var e,t=Dl,n=t.length,r,i="value"in Dt?Dt.value:Dt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Gi=i.slice(e,1<r?1-r:void 0)}function Qi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ni(){return!0}function fc(){return!1}function Ie(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ni:fc,this.isPropagationStopped=fc,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ni)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ni)},persist:function(){},isPersistent:Ni}),t}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Al=Ie(rr),fi=K({},rr,{view:0,detail:0}),mv=Ie(fi),gs,vs,mr,Ho=K({},fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ml,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mr&&(mr&&e.type==="mousemove"?(gs=e.screenX-mr.screenX,vs=e.screenY-mr.screenY):vs=gs=0,mr=e),gs)},movementY:function(e){return"movementY"in e?e.movementY:vs}}),hc=Ie(Ho),gv=K({},Ho,{dataTransfer:0}),vv=Ie(gv),yv=K({},fi,{relatedTarget:0}),ys=Ie(yv),xv=K({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),wv=Ie(xv),kv=K({},rr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sv=Ie(kv),jv=K({},rr,{data:0}),pc=Ie(jv),bv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ev={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ev[e])?!!t[e]:!1}function Ml(){return Cv}var Pv=K({},fi,{key:function(e){if(e.key){var t=bv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ml,charCode:function(e){return e.type==="keypress"?Qi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_v=Ie(Pv),Nv=K({},Ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mc=Ie(Nv),Dv=K({},fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ml}),Av=Ie(Dv),Mv=K({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rv=Ie(Mv),Lv=K({},Ho,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zv=Ie(Lv),Vv=[9,13,27,32],Rl=xt&&"CompositionEvent"in window,Pr=null;xt&&"documentMode"in document&&(Pr=document.documentMode);var Iv=xt&&"TextEvent"in window&&!Pr,zh=xt&&(!Rl||Pr&&8<Pr&&11>=Pr),gc=" ",vc=!1;function Vh(e,t){switch(e){case"keyup":return Vv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ih(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cn=!1;function Fv(e,t){switch(e){case"compositionend":return Ih(t);case"keypress":return t.which!==32?null:(vc=!0,gc);case"textInput":return e=t.data,e===gc&&vc?null:e;default:return null}}function Ov(e,t){if(Cn)return e==="compositionend"||!Rl&&Vh(e,t)?(e=Lh(),Gi=Dl=Dt=null,Cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zh&&t.locale!=="ko"?null:t.data;default:return null}}var Uv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Uv[e.type]:t==="textarea"}function Fh(e,t,n,r){gh(r),t=mo(t,"onChange"),0<t.length&&(n=new Al("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _r=null,$r=null;function Bv(e){Xh(e,0)}function $o(e){var t=Nn(e);if(uh(t))return e}function Wv(e,t){if(e==="change")return t}var Oh=!1;if(xt){var xs;if(xt){var ws="oninput"in document;if(!ws){var xc=document.createElement("div");xc.setAttribute("oninput","return;"),ws=typeof xc.oninput=="function"}xs=ws}else xs=!1;Oh=xs&&(!document.documentMode||9<document.documentMode)}function wc(){_r&&(_r.detachEvent("onpropertychange",Uh),$r=_r=null)}function Uh(e){if(e.propertyName==="value"&&$o($r)){var t=[];Fh(t,$r,e,El(e)),wh(Bv,t)}}function Hv(e,t,n){e==="focusin"?(wc(),_r=t,$r=n,_r.attachEvent("onpropertychange",Uh)):e==="focusout"&&wc()}function $v(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $o($r)}function Yv(e,t){if(e==="click")return $o(t)}function Kv(e,t){if(e==="input"||e==="change")return $o(t)}function Gv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:Gv;function Yr(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ea.call(t,i)||!rt(e[i],t[i]))return!1}return!0}function kc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sc(e,t){var n=kc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kc(n)}}function Bh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wh(){for(var e=window,t=ao();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ao(e.document)}return t}function Ll(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Qv(e){var t=Wh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bh(n.ownerDocument.documentElement,n)){if(r!==null&&Ll(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Sc(n,o);var s=Sc(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xv=xt&&"documentMode"in document&&11>=document.documentMode,Pn=null,xa=null,Nr=null,wa=!1;function jc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wa||Pn==null||Pn!==ao(r)||(r=Pn,"selectionStart"in r&&Ll(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nr&&Yr(Nr,r)||(Nr=r,r=mo(xa,"onSelect"),0<r.length&&(t=new Al("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Pn)))}function Di(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _n={animationend:Di("Animation","AnimationEnd"),animationiteration:Di("Animation","AnimationIteration"),animationstart:Di("Animation","AnimationStart"),transitionend:Di("Transition","TransitionEnd")},ks={},Hh={};xt&&(Hh=document.createElement("div").style,"AnimationEvent"in window||(delete _n.animationend.animation,delete _n.animationiteration.animation,delete _n.animationstart.animation),"TransitionEvent"in window||delete _n.transitionend.transition);function Yo(e){if(ks[e])return ks[e];if(!_n[e])return e;var t=_n[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hh)return ks[e]=t[n];return e}var $h=Yo("animationend"),Yh=Yo("animationiteration"),Kh=Yo("animationstart"),Gh=Yo("transitionend"),Qh=new Map,bc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gt(e,t){Qh.set(e,t),kn(t,[e])}for(var Ss=0;Ss<bc.length;Ss++){var js=bc[Ss],qv=js.toLowerCase(),Jv=js[0].toUpperCase()+js.slice(1);Gt(qv,"on"+Jv)}Gt($h,"onAnimationEnd");Gt(Yh,"onAnimationIteration");Gt(Kh,"onAnimationStart");Gt("dblclick","onDoubleClick");Gt("focusin","onFocus");Gt("focusout","onBlur");Gt(Gh,"onTransitionEnd");Gn("onMouseEnter",["mouseout","mouseover"]);Gn("onMouseLeave",["mouseout","mouseover"]);Gn("onPointerEnter",["pointerout","pointerover"]);Gn("onPointerLeave",["pointerout","pointerover"]);kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zv=new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));function Tc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,q0(r,t,void 0,e),e.currentTarget=null}function Xh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Tc(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Tc(i,a,c),o=l}}}if(uo)throw e=ma,uo=!1,ma=null,e}function F(e,t){var n=t[Ta];n===void 0&&(n=t[Ta]=new Set);var r=e+"__bubble";n.has(r)||(qh(t,e,2,!1),n.add(r))}function bs(e,t,n){var r=0;t&&(r|=4),qh(n,e,r,t)}var Ai="_reactListening"+Math.random().toString(36).slice(2);function Kr(e){if(!e[Ai]){e[Ai]=!0,ih.forEach(function(n){n!=="selectionchange"&&(Zv.has(n)||bs(n,!1,e),bs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ai]||(t[Ai]=!0,bs("selectionchange",!1,t))}}function qh(e,t,n,r){switch(Rh(t)){case 1:var i=hv;break;case 4:i=pv;break;default:i=Nl}n=i.bind(null,t,n,e),i=void 0,!pa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ts(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=ln(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}wh(function(){var c=o,d=El(n),f=[];e:{var h=Qh.get(e);if(h!==void 0){var v=Al,y=e;switch(e){case"keypress":if(Qi(n)===0)break e;case"keydown":case"keyup":v=_v;break;case"focusin":y="focus",v=ys;break;case"focusout":y="blur",v=ys;break;case"beforeblur":case"afterblur":v=ys;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=hc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=vv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Av;break;case $h:case Yh:case Kh:v=wv;break;case Gh:v=Rv;break;case"scroll":v=mv;break;case"wheel":v=zv;break;case"copy":case"cut":case"paste":v=Sv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=mc}var x=(t&4)!==0,S=!x&&e==="scroll",g=x?h!==null?h+"Capture":null:h;x=[];for(var m=c,p;m!==null;){p=m;var k=p.stateNode;if(p.tag===5&&k!==null&&(p=k,g!==null&&(k=Ur(m,g),k!=null&&x.push(Gr(m,k,p)))),S)break;m=m.return}0<x.length&&(h=new v(h,y,null,n,d),f.push({event:h,listeners:x}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==fa&&(y=n.relatedTarget||n.fromElement)&&(ln(y)||y[wt]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=c,y=y?ln(y):null,y!==null&&(S=Sn(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=c),v!==y)){if(x=hc,k="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(x=mc,k="onPointerLeave",g="onPointerEnter",m="pointer"),S=v==null?h:Nn(v),p=y==null?h:Nn(y),h=new x(k,m+"leave",v,n,d),h.target=S,h.relatedTarget=p,k=null,ln(d)===c&&(x=new x(g,m+"enter",y,n,d),x.target=p,x.relatedTarget=S,k=x),S=k,v&&y)t:{for(x=v,g=y,m=0,p=x;p;p=bn(p))m++;for(p=0,k=g;k;k=bn(k))p++;for(;0<m-p;)x=bn(x),m--;for(;0<p-m;)g=bn(g),p--;for(;m--;){if(x===g||g!==null&&x===g.alternate)break t;x=bn(x),g=bn(g)}x=null}else x=null;v!==null&&Ec(f,h,v,x,!1),y!==null&&S!==null&&Ec(f,S,y,x,!0)}}e:{if(h=c?Nn(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var j=Wv;else if(yc(h))if(Oh)j=Kv;else{j=$v;var T=Hv}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=Yv);if(j&&(j=j(e,c))){Fh(f,j,n,d);break e}T&&T(e,h,c),e==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&aa(h,"number",h.value)}switch(T=c?Nn(c):window,e){case"focusin":(yc(T)||T.contentEditable==="true")&&(Pn=T,xa=c,Nr=null);break;case"focusout":Nr=xa=Pn=null;break;case"mousedown":wa=!0;break;case"contextmenu":case"mouseup":case"dragend":wa=!1,jc(f,n,d);break;case"selectionchange":if(Xv)break;case"keydown":case"keyup":jc(f,n,d)}var E;if(Rl)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Cn?Vh(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(zh&&n.locale!=="ko"&&(Cn||b!=="onCompositionStart"?b==="onCompositionEnd"&&Cn&&(E=Lh()):(Dt=d,Dl="value"in Dt?Dt.value:Dt.textContent,Cn=!0)),T=mo(c,b),0<T.length&&(b=new pc(b,e,null,n,d),f.push({event:b,listeners:T}),E?b.data=E:(E=Ih(n),E!==null&&(b.data=E)))),(E=Iv?Fv(e,n):Ov(e,n))&&(c=mo(c,"onBeforeInput"),0<c.length&&(d=new pc("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=E))}Xh(f,t)})}function Gr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function mo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ur(e,n),o!=null&&r.unshift(Gr(e,o,i)),o=Ur(e,t),o!=null&&r.push(Gr(e,o,i))),e=e.return}return r}function bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ec(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Ur(n,o),l!=null&&s.unshift(Gr(n,l,a))):i||(l=Ur(n,o),l!=null&&s.push(Gr(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var ey=/\r\n?/g,ty=/\u0000|\uFFFD/g;function Cc(e){return(typeof e=="string"?e:""+e).replace(ey,`
`).replace(ty,"")}function Mi(e,t,n){if(t=Cc(t),Cc(e)!==t&&n)throw Error(C(425))}function go(){}var ka=null,Sa=null;function ja(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ba=typeof setTimeout=="function"?setTimeout:void 0,ny=typeof clearTimeout=="function"?clearTimeout:void 0,Pc=typeof Promise=="function"?Promise:void 0,ry=typeof queueMicrotask=="function"?queueMicrotask:typeof Pc<"u"?function(e){return Pc.resolve(null).then(e).catch(iy)}:ba;function iy(e){setTimeout(function(){throw e})}function Es(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Hr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Hr(t)}function It(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _c(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ir=Math.random().toString(36).slice(2),at="__reactFiber$"+ir,Qr="__reactProps$"+ir,wt="__reactContainer$"+ir,Ta="__reactEvents$"+ir,oy="__reactListeners$"+ir,sy="__reactHandles$"+ir;function ln(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_c(e);e!==null;){if(n=e[at])return n;e=_c(e)}return t}e=n,n=e.parentNode}return null}function hi(e){return e=e[at]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Ko(e){return e[Qr]||null}var Ea=[],Dn=-1;function Qt(e){return{current:e}}function O(e){0>Dn||(e.current=Ea[Dn],Ea[Dn]=null,Dn--)}function I(e,t){Dn++,Ea[Dn]=e.current,e.current=t}var $t={},we=Qt($t),Ne=Qt(!1),gn=$t;function Qn(e,t){var n=e.type.contextTypes;if(!n)return $t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function De(e){return e=e.childContextTypes,e!=null}function vo(){O(Ne),O(we)}function Nc(e,t,n){if(we.current!==$t)throw Error(C(168));I(we,t),I(Ne,n)}function Jh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(C(108,H0(e)||"Unknown",i));return K({},n,r)}function yo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$t,gn=we.current,I(we,e),I(Ne,Ne.current),!0}function Dc(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Jh(e,t,gn),r.__reactInternalMemoizedMergedChildContext=e,O(Ne),O(we),I(we,e)):O(Ne),I(Ne,n)}var pt=null,Go=!1,Cs=!1;function Zh(e){pt===null?pt=[e]:pt.push(e)}function ay(e){Go=!0,Zh(e)}function Xt(){if(!Cs&&pt!==null){Cs=!0;var e=0,t=V;try{var n=pt;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}pt=null,Go=!1}catch(i){throw pt!==null&&(pt=pt.slice(e+1)),bh(Cl,Xt),i}finally{V=t,Cs=!1}}return null}var An=[],Mn=0,xo=null,wo=0,Oe=[],Ue=0,vn=null,mt=1,gt="";function on(e,t){An[Mn++]=wo,An[Mn++]=xo,xo=e,wo=t}function ep(e,t,n){Oe[Ue++]=mt,Oe[Ue++]=gt,Oe[Ue++]=vn,vn=e;var r=mt;e=gt;var i=32-tt(r)-1;r&=~(1<<i),n+=1;var o=32-tt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,mt=1<<32-tt(t)+i|n<<i|r,gt=o+e}else mt=1<<o|n<<i|r,gt=e}function zl(e){e.return!==null&&(on(e,1),ep(e,1,0))}function Vl(e){for(;e===xo;)xo=An[--Mn],An[Mn]=null,wo=An[--Mn],An[Mn]=null;for(;e===vn;)vn=Oe[--Ue],Oe[Ue]=null,gt=Oe[--Ue],Oe[Ue]=null,mt=Oe[--Ue],Oe[Ue]=null}var Le=null,Re=null,B=!1,et=null;function tp(e,t){var n=Be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ac(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Le=e,Re=It(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Le=e,Re=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=vn!==null?{id:mt,overflow:gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Le=e,Re=null,!0):!1;default:return!1}}function Ca(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pa(e){if(B){var t=Re;if(t){var n=t;if(!Ac(e,t)){if(Ca(e))throw Error(C(418));t=It(n.nextSibling);var r=Le;t&&Ac(e,t)?tp(r,n):(e.flags=e.flags&-4097|2,B=!1,Le=e)}}else{if(Ca(e))throw Error(C(418));e.flags=e.flags&-4097|2,B=!1,Le=e}}}function Mc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function Ri(e){if(e!==Le)return!1;if(!B)return Mc(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ja(e.type,e.memoizedProps)),t&&(t=Re)){if(Ca(e))throw np(),Error(C(418));for(;t;)tp(e,t),t=It(t.nextSibling)}if(Mc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Re=It(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Re=null}}else Re=Le?It(e.stateNode.nextSibling):null;return!0}function np(){for(var e=Re;e;)e=It(e.nextSibling)}function Xn(){Re=Le=null,B=!1}function Il(e){et===null?et=[e]:et.push(e)}var ly=bt.ReactCurrentBatchConfig;function gr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Li(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Rc(e){var t=e._init;return t(e._payload)}function rp(e){function t(g,m){if(e){var p=g.deletions;p===null?(g.deletions=[m],g.flags|=16):p.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=Bt(g,m),g.index=0,g.sibling=null,g}function o(g,m,p){return g.index=p,e?(p=g.alternate,p!==null?(p=p.index,p<m?(g.flags|=2,m):p):(g.flags|=2,m)):(g.flags|=1048576,m)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,m,p,k){return m===null||m.tag!==6?(m=Rs(p,g.mode,k),m.return=g,m):(m=i(m,p),m.return=g,m)}function l(g,m,p,k){var j=p.type;return j===En?d(g,m,p.props.children,k,p.key):m!==null&&(m.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Ct&&Rc(j)===m.type)?(k=i(m,p.props),k.ref=gr(g,m,p),k.return=g,k):(k=no(p.type,p.key,p.props,null,g.mode,k),k.ref=gr(g,m,p),k.return=g,k)}function c(g,m,p,k){return m===null||m.tag!==4||m.stateNode.containerInfo!==p.containerInfo||m.stateNode.implementation!==p.implementation?(m=Ls(p,g.mode,k),m.return=g,m):(m=i(m,p.children||[]),m.return=g,m)}function d(g,m,p,k,j){return m===null||m.tag!==7?(m=pn(p,g.mode,k,j),m.return=g,m):(m=i(m,p),m.return=g,m)}function f(g,m,p){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Rs(""+m,g.mode,p),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case bi:return p=no(m.type,m.key,m.props,null,g.mode,p),p.ref=gr(g,null,m),p.return=g,p;case Tn:return m=Ls(m,g.mode,p),m.return=g,m;case Ct:var k=m._init;return f(g,k(m._payload),p)}if(kr(m)||dr(m))return m=pn(m,g.mode,p,null),m.return=g,m;Li(g,m)}return null}function h(g,m,p,k){var j=m!==null?m.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return j!==null?null:a(g,m,""+p,k);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case bi:return p.key===j?l(g,m,p,k):null;case Tn:return p.key===j?c(g,m,p,k):null;case Ct:return j=p._init,h(g,m,j(p._payload),k)}if(kr(p)||dr(p))return j!==null?null:d(g,m,p,k,null);Li(g,p)}return null}function v(g,m,p,k,j){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(p)||null,a(m,g,""+k,j);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case bi:return g=g.get(k.key===null?p:k.key)||null,l(m,g,k,j);case Tn:return g=g.get(k.key===null?p:k.key)||null,c(m,g,k,j);case Ct:var T=k._init;return v(g,m,p,T(k._payload),j)}if(kr(k)||dr(k))return g=g.get(p)||null,d(m,g,k,j,null);Li(m,k)}return null}function y(g,m,p,k){for(var j=null,T=null,E=m,b=m=0,R=null;E!==null&&b<p.length;b++){E.index>b?(R=E,E=null):R=E.sibling;var D=h(g,E,p[b],k);if(D===null){E===null&&(E=R);break}e&&E&&D.alternate===null&&t(g,E),m=o(D,m,b),T===null?j=D:T.sibling=D,T=D,E=R}if(b===p.length)return n(g,E),B&&on(g,b),j;if(E===null){for(;b<p.length;b++)E=f(g,p[b],k),E!==null&&(m=o(E,m,b),T===null?j=E:T.sibling=E,T=E);return B&&on(g,b),j}for(E=r(g,E);b<p.length;b++)R=v(E,g,b,p[b],k),R!==null&&(e&&R.alternate!==null&&E.delete(R.key===null?b:R.key),m=o(R,m,b),T===null?j=R:T.sibling=R,T=R);return e&&E.forEach(function(q){return t(g,q)}),B&&on(g,b),j}function x(g,m,p,k){var j=dr(p);if(typeof j!="function")throw Error(C(150));if(p=j.call(p),p==null)throw Error(C(151));for(var T=j=null,E=m,b=m=0,R=null,D=p.next();E!==null&&!D.done;b++,D=p.next()){E.index>b?(R=E,E=null):R=E.sibling;var q=h(g,E,D.value,k);if(q===null){E===null&&(E=R);break}e&&E&&q.alternate===null&&t(g,E),m=o(q,m,b),T===null?j=q:T.sibling=q,T=q,E=R}if(D.done)return n(g,E),B&&on(g,b),j;if(E===null){for(;!D.done;b++,D=p.next())D=f(g,D.value,k),D!==null&&(m=o(D,m,b),T===null?j=D:T.sibling=D,T=D);return B&&on(g,b),j}for(E=r(g,E);!D.done;b++,D=p.next())D=v(E,g,b,D.value,k),D!==null&&(e&&D.alternate!==null&&E.delete(D.key===null?b:D.key),m=o(D,m,b),T===null?j=D:T.sibling=D,T=D);return e&&E.forEach(function(it){return t(g,it)}),B&&on(g,b),j}function S(g,m,p,k){if(typeof p=="object"&&p!==null&&p.type===En&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case bi:e:{for(var j=p.key,T=m;T!==null;){if(T.key===j){if(j=p.type,j===En){if(T.tag===7){n(g,T.sibling),m=i(T,p.props.children),m.return=g,g=m;break e}}else if(T.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Ct&&Rc(j)===T.type){n(g,T.sibling),m=i(T,p.props),m.ref=gr(g,T,p),m.return=g,g=m;break e}n(g,T);break}else t(g,T);T=T.sibling}p.type===En?(m=pn(p.props.children,g.mode,k,p.key),m.return=g,g=m):(k=no(p.type,p.key,p.props,null,g.mode,k),k.ref=gr(g,m,p),k.return=g,g=k)}return s(g);case Tn:e:{for(T=p.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===p.containerInfo&&m.stateNode.implementation===p.implementation){n(g,m.sibling),m=i(m,p.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=Ls(p,g.mode,k),m.return=g,g=m}return s(g);case Ct:return T=p._init,S(g,m,T(p._payload),k)}if(kr(p))return y(g,m,p,k);if(dr(p))return x(g,m,p,k);Li(g,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,p),m.return=g,g=m):(n(g,m),m=Rs(p,g.mode,k),m.return=g,g=m),s(g)):n(g,m)}return S}var qn=rp(!0),ip=rp(!1),ko=Qt(null),So=null,Rn=null,Fl=null;function Ol(){Fl=Rn=So=null}function Ul(e){var t=ko.current;O(ko),e._currentValue=t}function _a(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $n(e,t){So=e,Fl=Rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(_e=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(Fl!==e)if(e={context:e,memoizedValue:t,next:null},Rn===null){if(So===null)throw Error(C(308));Rn=e,So.dependencies={lanes:0,firstContext:e}}else Rn=Rn.next=e;return t}var un=null;function Bl(e){un===null?un=[e]:un.push(e)}function op(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Bl(t)):(n.next=i.next,i.next=n),t.interleaved=n,kt(e,r)}function kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pt=!1;function Wl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,kt(e,n)}return i=r.interleaved,i===null?(t.next=t,Bl(r)):(t.next=i.next,i.next=t),r.interleaved=t,kt(e,n)}function Xi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pl(e,n)}}function Lc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function jo(e,t,n,r){var i=e.updateQueue;Pt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,d=c=l=null,a=o;do{var h=a.lane,v=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,x=a;switch(h=t,v=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){f=y.call(v,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,h=typeof y=="function"?y.call(v,f,h):y,h==null)break e;f=K({},f,h);break e;case 2:Pt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else v={eventTime:v,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=v,l=f):d=d.next=v,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);xn|=s,e.lanes=s,e.memoizedState=f}}function zc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var pi={},ut=Qt(pi),Xr=Qt(pi),qr=Qt(pi);function cn(e){if(e===pi)throw Error(C(174));return e}function Hl(e,t){switch(I(qr,t),I(Xr,e),I(ut,pi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ua(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ua(t,e)}O(ut),I(ut,t)}function Jn(){O(ut),O(Xr),O(qr)}function ap(e){cn(qr.current);var t=cn(ut.current),n=ua(t,e.type);t!==n&&(I(Xr,e),I(ut,n))}function $l(e){Xr.current===e&&(O(ut),O(Xr))}var H=Qt(0);function bo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ps=[];function Yl(){for(var e=0;e<Ps.length;e++)Ps[e]._workInProgressVersionPrimary=null;Ps.length=0}var qi=bt.ReactCurrentDispatcher,_s=bt.ReactCurrentBatchConfig,yn=0,Y=null,oe=null,le=null,To=!1,Dr=!1,Jr=0,uy=0;function ge(){throw Error(C(321))}function Kl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rt(e[n],t[n]))return!1;return!0}function Gl(e,t,n,r,i,o){if(yn=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qi.current=e===null||e.memoizedState===null?hy:py,e=n(r,i),Dr){o=0;do{if(Dr=!1,Jr=0,25<=o)throw Error(C(301));o+=1,le=oe=null,t.updateQueue=null,qi.current=my,e=n(r,i)}while(Dr)}if(qi.current=Eo,t=oe!==null&&oe.next!==null,yn=0,le=oe=Y=null,To=!1,t)throw Error(C(300));return e}function Ql(){var e=Jr!==0;return Jr=0,e}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Y.memoizedState=le=e:le=le.next=e,le}function Ke(){if(oe===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=le===null?Y.memoizedState:le.next;if(t!==null)le=t,oe=e;else{if(e===null)throw Error(C(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},le===null?Y.memoizedState=le=e:le=le.next=e}return le}function Zr(e,t){return typeof t=="function"?t(e):t}function Ns(e){var t=Ke(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=oe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var d=c.lane;if((yn&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,Y.lanes|=d,xn|=d}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,rt(r,t.memoizedState)||(_e=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Y.lanes|=o,xn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ds(e){var t=Ke(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);rt(o,t.memoizedState)||(_e=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function lp(){}function up(e,t){var n=Y,r=Ke(),i=t(),o=!rt(r.memoizedState,i);if(o&&(r.memoizedState=i,_e=!0),r=r.queue,Xl(fp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,ei(9,dp.bind(null,n,r,i,t),void 0,null),ce===null)throw Error(C(349));yn&30||cp(n,t,i)}return i}function cp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function dp(e,t,n,r){t.value=n,t.getSnapshot=r,hp(t)&&pp(e)}function fp(e,t,n){return n(function(){hp(t)&&pp(e)})}function hp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rt(e,n)}catch{return!0}}function pp(e){var t=kt(e,1);t!==null&&nt(t,e,1,-1)}function Vc(e){var t=st();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zr,lastRenderedState:e},t.queue=e,e=e.dispatch=fy.bind(null,Y,e),[t.memoizedState,e]}function ei(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function mp(){return Ke().memoizedState}function Ji(e,t,n,r){var i=st();Y.flags|=e,i.memoizedState=ei(1|t,n,void 0,r===void 0?null:r)}function Qo(e,t,n,r){var i=Ke();r=r===void 0?null:r;var o=void 0;if(oe!==null){var s=oe.memoizedState;if(o=s.destroy,r!==null&&Kl(r,s.deps)){i.memoizedState=ei(t,n,o,r);return}}Y.flags|=e,i.memoizedState=ei(1|t,n,o,r)}function Ic(e,t){return Ji(8390656,8,e,t)}function Xl(e,t){return Qo(2048,8,e,t)}function gp(e,t){return Qo(4,2,e,t)}function vp(e,t){return Qo(4,4,e,t)}function yp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xp(e,t,n){return n=n!=null?n.concat([e]):null,Qo(4,4,yp.bind(null,t,e),n)}function ql(){}function wp(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Kl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function kp(e,t){var n=Ke();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Kl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Sp(e,t,n){return yn&21?(rt(n,t)||(n=Ch(),Y.lanes|=n,xn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=n)}function cy(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=_s.transition;_s.transition={};try{e(!1),t()}finally{V=n,_s.transition=r}}function jp(){return Ke().memoizedState}function dy(e,t,n){var r=Ut(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bp(e))Tp(t,n);else if(n=op(e,t,n,r),n!==null){var i=be();nt(n,e,r,i),Ep(n,t,r)}}function fy(e,t,n){var r=Ut(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bp(e))Tp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,rt(a,s)){var l=t.interleaved;l===null?(i.next=i,Bl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=op(e,t,i,r),n!==null&&(i=be(),nt(n,e,r,i),Ep(n,t,r))}}function bp(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Tp(e,t){Dr=To=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ep(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pl(e,n)}}var Eo={readContext:Ye,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},hy={readContext:Ye,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:Ic,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ji(4194308,4,yp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ji(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ji(4,2,e,t)},useMemo:function(e,t){var n=st();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=st();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=dy.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:Vc,useDebugValue:ql,useDeferredValue:function(e){return st().memoizedState=e},useTransition:function(){var e=Vc(!1),t=e[0];return e=cy.bind(null,e[1]),st().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=st();if(B){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),ce===null)throw Error(C(349));yn&30||cp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ic(fp.bind(null,r,o,e),[e]),r.flags|=2048,ei(9,dp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=st(),t=ce.identifierPrefix;if(B){var n=gt,r=mt;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Jr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=uy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},py={readContext:Ye,useCallback:wp,useContext:Ye,useEffect:Xl,useImperativeHandle:xp,useInsertionEffect:gp,useLayoutEffect:vp,useMemo:kp,useReducer:Ns,useRef:mp,useState:function(){return Ns(Zr)},useDebugValue:ql,useDeferredValue:function(e){var t=Ke();return Sp(t,oe.memoizedState,e)},useTransition:function(){var e=Ns(Zr)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:lp,useSyncExternalStore:up,useId:jp,unstable_isNewReconciler:!1},my={readContext:Ye,useCallback:wp,useContext:Ye,useEffect:Xl,useImperativeHandle:xp,useInsertionEffect:gp,useLayoutEffect:vp,useMemo:kp,useReducer:Ds,useRef:mp,useState:function(){return Ds(Zr)},useDebugValue:ql,useDeferredValue:function(e){var t=Ke();return oe===null?t.memoizedState=e:Sp(t,oe.memoizedState,e)},useTransition:function(){var e=Ds(Zr)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:lp,useSyncExternalStore:up,useId:jp,unstable_isNewReconciler:!1};function Je(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Na(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Xo={isMounted:function(e){return(e=e._reactInternals)?Sn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=be(),i=Ut(e),o=vt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Ft(e,o,i),t!==null&&(nt(t,e,i,r),Xi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=be(),i=Ut(e),o=vt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ft(e,o,i),t!==null&&(nt(t,e,i,r),Xi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=be(),r=Ut(e),i=vt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ft(e,i,r),t!==null&&(nt(t,e,r,n),Xi(t,e,r))}};function Fc(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Yr(n,r)||!Yr(i,o):!0}function Cp(e,t,n){var r=!1,i=$t,o=t.contextType;return typeof o=="object"&&o!==null?o=Ye(o):(i=De(t)?gn:we.current,r=t.contextTypes,o=(r=r!=null)?Qn(e,i):$t),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Xo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Oc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Xo.enqueueReplaceState(t,t.state,null)}function Da(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Wl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ye(o):(o=De(t)?gn:we.current,i.context=Qn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Na(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Xo.enqueueReplaceState(i,i.state,null),jo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Zn(e,t){try{var n="",r=t;do n+=W0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function As(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Aa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var gy=typeof WeakMap=="function"?WeakMap:Map;function Pp(e,t,n){n=vt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Po||(Po=!0,Ba=r),Aa(e,t)},n}function _p(e,t,n){n=vt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Aa(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Aa(e,t),typeof r!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Uc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new gy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ny.bind(null,e,t,n),t.then(e,e))}function Bc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vt(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e)}var vy=bt.ReactCurrentOwner,_e=!1;function ke(e,t,n,r){t.child=e===null?ip(t,null,n,r):qn(t,e.child,n,r)}function Hc(e,t,n,r,i){n=n.render;var o=t.ref;return $n(t,i),r=Gl(e,t,n,r,o,i),n=Ql(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,St(e,t,i)):(B&&n&&zl(t),t.flags|=1,ke(e,t,r,i),t.child)}function $c(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ou(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Np(e,t,o,r,i)):(e=no(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Yr,n(s,r)&&e.ref===t.ref)return St(e,t,i)}return t.flags|=1,e=Bt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Np(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Yr(o,r)&&e.ref===t.ref)if(_e=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(_e=!0);else return t.lanes=e.lanes,St(e,t,i)}return Ma(e,t,n,r,i)}function Dp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(zn,Me),Me|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,I(zn,Me),Me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,I(zn,Me),Me|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,I(zn,Me),Me|=r;return ke(e,t,i,n),t.child}function Ap(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ma(e,t,n,r,i){var o=De(n)?gn:we.current;return o=Qn(t,o),$n(t,i),n=Gl(e,t,n,r,o,i),r=Ql(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,St(e,t,i)):(B&&r&&zl(t),t.flags|=1,ke(e,t,n,i),t.child)}function Yc(e,t,n,r,i){if(De(n)){var o=!0;yo(t)}else o=!1;if($n(t,i),t.stateNode===null)Zi(e,t),Cp(t,n,r),Da(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ye(c):(c=De(n)?gn:we.current,c=Qn(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Oc(t,s,r,c),Pt=!1;var h=t.memoizedState;s.state=h,jo(t,r,s,i),l=t.memoizedState,a!==r||h!==l||Ne.current||Pt?(typeof d=="function"&&(Na(t,n,d,r),l=t.memoizedState),(a=Pt||Fc(t,n,a,r,h,l,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,sp(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Je(t.type,a),s.props=c,f=t.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ye(l):(l=De(n)?gn:we.current,l=Qn(t,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Oc(t,s,r,l),Pt=!1,h=t.memoizedState,s.state=h,jo(t,r,s,i);var y=t.memoizedState;a!==f||h!==y||Ne.current||Pt?(typeof v=="function"&&(Na(t,n,v,r),y=t.memoizedState),(c=Pt||Fc(t,n,c,r,h,y,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ra(e,t,n,r,o,i)}function Ra(e,t,n,r,i,o){Ap(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Dc(t,n,!1),St(e,t,o);r=t.stateNode,vy.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=qn(t,e.child,null,o),t.child=qn(t,null,a,o)):ke(e,t,a,o),t.memoizedState=r.state,i&&Dc(t,n,!0),t.child}function Mp(e){var t=e.stateNode;t.pendingContext?Nc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Nc(e,t.context,!1),Hl(e,t.containerInfo)}function Kc(e,t,n,r,i){return Xn(),Il(i),t.flags|=256,ke(e,t,n,r),t.child}var La={dehydrated:null,treeContext:null,retryLane:0};function za(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rp(e,t,n){var r=t.pendingProps,i=H.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),I(H,i&1),e===null)return Pa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Zo(s,r,0,null),e=pn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=za(n),t.memoizedState=La,e):Jl(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return yy(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Bt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Bt(a,o):(o=pn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?za(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=La,r}return o=e.child,e=o.sibling,r=Bt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Jl(e,t){return t=Zo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zi(e,t,n,r){return r!==null&&Il(r),qn(t,e.child,null,n),e=Jl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yy(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=As(Error(C(422))),zi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Zo({mode:"visible",children:r.children},i,0,null),o=pn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&qn(t,e.child,null,s),t.child.memoizedState=za(s),t.memoizedState=La,o);if(!(t.mode&1))return zi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(C(419)),r=As(o,r,void 0),zi(e,t,s,r)}if(a=(s&e.childLanes)!==0,_e||a){if(r=ce,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,kt(e,i),nt(r,e,i,-1))}return iu(),r=As(Error(C(421))),zi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Dy.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Re=It(i.nextSibling),Le=t,B=!0,et=null,e!==null&&(Oe[Ue++]=mt,Oe[Ue++]=gt,Oe[Ue++]=vn,mt=e.id,gt=e.overflow,vn=t),t=Jl(t,r.children),t.flags|=4096,t)}function Gc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_a(e.return,t,n)}function Ms(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Lp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ke(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gc(e,n,t);else if(e.tag===19)Gc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(H,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&bo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ms(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&bo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ms(t,!0,n,null,o);break;case"together":Ms(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function St(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function xy(e,t,n){switch(t.tag){case 3:Mp(t),Xn();break;case 5:ap(t);break;case 1:De(t.type)&&yo(t);break;case 4:Hl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;I(ko,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(I(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?Rp(e,t,n):(I(H,H.current&1),e=St(e,t,n),e!==null?e.sibling:null);I(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Lp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),I(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,Dp(e,t,n)}return St(e,t,n)}var zp,Va,Vp,Ip;zp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Va=function(){};Vp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,cn(ut.current);var o=null;switch(n){case"input":i=oa(e,i),r=oa(e,r),o=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),o=[];break;case"textarea":i=la(e,i),r=la(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=go)}ca(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Fr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Fr.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&F("scroll",e),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Ip=function(e,t,n,r){n!==r&&(t.flags|=4)};function vr(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function wy(e,t,n){var r=t.pendingProps;switch(Vl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return De(t.type)&&vo(),ve(t),null;case 3:return r=t.stateNode,Jn(),O(Ne),O(we),Yl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ri(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,et!==null&&($a(et),et=null))),Va(e,t),ve(t),null;case 5:$l(t);var i=cn(qr.current);if(n=t.type,e!==null&&t.stateNode!=null)Vp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return ve(t),null}if(e=cn(ut.current),Ri(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[at]=t,r[Qr]=o,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(i=0;i<jr.length;i++)F(jr[i],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":rc(r,o),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},F("invalid",r);break;case"textarea":oc(r,o),F("invalid",r)}ca(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Mi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Mi(r.textContent,a,e),i=["children",""+a]):Fr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&F("scroll",r)}switch(n){case"input":Ti(r),ic(r,o,!0);break;case"textarea":Ti(r),sc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=go)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[at]=t,e[Qr]=r,zp(e,t,!1,!1),t.stateNode=e;e:{switch(s=da(n,r),n){case"dialog":F("cancel",e),F("close",e),i=r;break;case"iframe":case"object":case"embed":F("load",e),i=r;break;case"video":case"audio":for(i=0;i<jr.length;i++)F(jr[i],e);i=r;break;case"source":F("error",e),i=r;break;case"img":case"image":case"link":F("error",e),F("load",e),i=r;break;case"details":F("toggle",e),i=r;break;case"input":rc(e,r),i=oa(e,r),F("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),F("invalid",e);break;case"textarea":oc(e,r),i=la(e,r),F("invalid",e);break;default:i=r}ca(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?mh(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&hh(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Or(e,l):typeof l=="number"&&Or(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Fr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&F("scroll",e):l!=null&&Sl(e,o,l,s))}switch(n){case"input":Ti(e),ic(e,r,!1);break;case"textarea":Ti(e),sc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ht(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Un(e,!!r.multiple,o,!1):r.defaultValue!=null&&Un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=go)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)Ip(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=cn(qr.current),cn(ut.current),Ri(t)){if(r=t.stateNode,n=t.memoizedProps,r[at]=t,(o=r.nodeValue!==n)&&(e=Le,e!==null))switch(e.tag){case 3:Mi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[at]=t,t.stateNode=r}return ve(t),null;case 13:if(O(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&Re!==null&&t.mode&1&&!(t.flags&128))np(),Xn(),t.flags|=98560,o=!1;else if(o=Ri(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(C(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[at]=t}else Xn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),o=!1}else et!==null&&($a(et),et=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?se===0&&(se=3):iu())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return Jn(),Va(e,t),e===null&&Kr(t.stateNode.containerInfo),ve(t),null;case 10:return Ul(t.type._context),ve(t),null;case 17:return De(t.type)&&vo(),ve(t),null;case 19:if(O(H),o=t.memoizedState,o===null)return ve(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)vr(o,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=bo(e),s!==null){for(t.flags|=128,vr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return I(H,H.current&1|2),t.child}e=e.sibling}o.tail!==null&&Z()>er&&(t.flags|=128,r=!0,vr(o,!1),t.lanes=4194304)}else{if(!r)if(e=bo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!B)return ve(t),null}else 2*Z()-o.renderingStartTime>er&&n!==1073741824&&(t.flags|=128,r=!0,vr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Z(),t.sibling=null,n=H.current,I(H,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return ru(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Me&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function ky(e,t){switch(Vl(t),t.tag){case 1:return De(t.type)&&vo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Jn(),O(Ne),O(we),Yl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return $l(t),null;case 13:if(O(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Xn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(H),null;case 4:return Jn(),null;case 10:return Ul(t.type._context),null;case 22:case 23:return ru(),null;case 24:return null;default:return null}}var Vi=!1,ye=!1,Sy=typeof WeakSet=="function"?WeakSet:Set,N=null;function Ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function Ia(e,t,n){try{n()}catch(r){Q(e,t,r)}}var Qc=!1;function jy(e,t){if(ka=ho,e=Wh(),Ll(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,d=0,f=e,h=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(v=f.firstChild)!==null;)h=f,f=v;for(;;){if(f===e)break t;if(h===n&&++c===i&&(a=s),h===o&&++d===r&&(l=s),(v=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sa={focusedElem:e,selectionRange:n},ho=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,S=y.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?x:Je(t.type,x),S);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(k){Q(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return y=Qc,Qc=!1,y}function Ar(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ia(t,n,o)}i=i.next}while(i!==r)}}function qo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Fa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Fp(e){var t=e.alternate;t!==null&&(e.alternate=null,Fp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[at],delete t[Qr],delete t[Ta],delete t[oy],delete t[sy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Op(e){return e.tag===5||e.tag===3||e.tag===4}function Xc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Op(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=go));else if(r!==4&&(e=e.child,e!==null))for(Oa(e,t,n),e=e.sibling;e!==null;)Oa(e,t,n),e=e.sibling}function Ua(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ua(e,t,n),e=e.sibling;e!==null;)Ua(e,t,n),e=e.sibling}var fe=null,Ze=!1;function Tt(e,t,n){for(n=n.child;n!==null;)Up(e,t,n),n=n.sibling}function Up(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Wo,n)}catch{}switch(n.tag){case 5:ye||Ln(n,t);case 6:var r=fe,i=Ze;fe=null,Tt(e,t,n),fe=r,Ze=i,fe!==null&&(Ze?(e=fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(Ze?(e=fe,n=n.stateNode,e.nodeType===8?Es(e.parentNode,n):e.nodeType===1&&Es(e,n),Hr(e)):Es(fe,n.stateNode));break;case 4:r=fe,i=Ze,fe=n.stateNode.containerInfo,Ze=!0,Tt(e,t,n),fe=r,Ze=i;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ia(n,t,s),i=i.next}while(i!==r)}Tt(e,t,n);break;case 1:if(!ye&&(Ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Q(n,t,a)}Tt(e,t,n);break;case 21:Tt(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,Tt(e,t,n),ye=r):Tt(e,t,n);break;default:Tt(e,t,n)}}function qc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sy),t.forEach(function(r){var i=Ay.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:fe=a.stateNode,Ze=!1;break e;case 3:fe=a.stateNode.containerInfo,Ze=!0;break e;case 4:fe=a.stateNode.containerInfo,Ze=!0;break e}a=a.return}if(fe===null)throw Error(C(160));Up(o,s,i),fe=null,Ze=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Q(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bp(t,e),t=t.sibling}function Bp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qe(t,e),ot(e),r&4){try{Ar(3,e,e.return),qo(3,e)}catch(x){Q(e,e.return,x)}try{Ar(5,e,e.return)}catch(x){Q(e,e.return,x)}}break;case 1:Qe(t,e),ot(e),r&512&&n!==null&&Ln(n,n.return);break;case 5:if(Qe(t,e),ot(e),r&512&&n!==null&&Ln(n,n.return),e.flags&32){var i=e.stateNode;try{Or(i,"")}catch(x){Q(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&ch(i,o),da(a,s);var c=da(a,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?mh(i,f):d==="dangerouslySetInnerHTML"?hh(i,f):d==="children"?Or(i,f):Sl(i,d,f,c)}switch(a){case"input":sa(i,o);break;case"textarea":dh(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Un(i,!!o.multiple,v,!1):h!==!!o.multiple&&(o.defaultValue!=null?Un(i,!!o.multiple,o.defaultValue,!0):Un(i,!!o.multiple,o.multiple?[]:"",!1))}i[Qr]=o}catch(x){Q(e,e.return,x)}}break;case 6:if(Qe(t,e),ot(e),r&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){Q(e,e.return,x)}}break;case 3:if(Qe(t,e),ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hr(t.containerInfo)}catch(x){Q(e,e.return,x)}break;case 4:Qe(t,e),ot(e);break;case 13:Qe(t,e),ot(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(tu=Z())),r&4&&qc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(c=ye)||d,Qe(t,e),ye=c):Qe(t,e),ot(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(N=e,d=e.child;d!==null;){for(f=N=d;N!==null;){switch(h=N,v=h.child,h.tag){case 0:case 11:case 14:case 15:Ar(4,h,h.return);break;case 1:Ln(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){Q(r,n,x)}}break;case 5:Ln(h,h.return);break;case 22:if(h.memoizedState!==null){Zc(f);continue}}v!==null?(v.return=h,N=v):Zc(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ph("display",s))}catch(x){Q(e,e.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){Q(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Qe(t,e),ot(e),r&4&&qc(e);break;case 21:break;default:Qe(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Op(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Or(i,""),r.flags&=-33);var o=Xc(e);Ua(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Xc(e);Oa(e,a,s);break;default:throw Error(C(161))}}catch(l){Q(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function by(e,t,n){N=e,Wp(e)}function Wp(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Vi;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ye;a=Vi;var c=ye;if(Vi=s,(ye=l)&&!c)for(N=i;N!==null;)s=N,l=s.child,s.tag===22&&s.memoizedState!==null?ed(i):l!==null?(l.return=s,N=l):ed(i);for(;o!==null;)N=o,Wp(o),o=o.sibling;N=i,Vi=a,ye=c}Jc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):Jc(e)}}function Jc(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||qo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Je(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&zc(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}zc(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Hr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ye||t.flags&512&&Fa(t)}catch(h){Q(t,t.return,h)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Zc(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function ed(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{qo(4,t)}catch(l){Q(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Q(t,i,l)}}var o=t.return;try{Fa(t)}catch(l){Q(t,o,l)}break;case 5:var s=t.return;try{Fa(t)}catch(l){Q(t,s,l)}}}catch(l){Q(t,t.return,l)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var Ty=Math.ceil,Co=bt.ReactCurrentDispatcher,Zl=bt.ReactCurrentOwner,He=bt.ReactCurrentBatchConfig,z=0,ce=null,re=null,pe=0,Me=0,zn=Qt(0),se=0,ti=null,xn=0,Jo=0,eu=0,Mr=null,Pe=null,tu=0,er=1/0,ht=null,Po=!1,Ba=null,Ot=null,Ii=!1,At=null,_o=0,Rr=0,Wa=null,eo=-1,to=0;function be(){return z&6?Z():eo!==-1?eo:eo=Z()}function Ut(e){return e.mode&1?z&2&&pe!==0?pe&-pe:ly.transition!==null?(to===0&&(to=Ch()),to):(e=V,e!==0||(e=window.event,e=e===void 0?16:Rh(e.type)),e):1}function nt(e,t,n,r){if(50<Rr)throw Rr=0,Wa=null,Error(C(185));di(e,n,r),(!(z&2)||e!==ce)&&(e===ce&&(!(z&2)&&(Jo|=n),se===4&&Nt(e,pe)),Ae(e,r),n===1&&z===0&&!(t.mode&1)&&(er=Z()+500,Go&&Xt()))}function Ae(e,t){var n=e.callbackNode;lv(e,t);var r=fo(e,e===ce?pe:0);if(r===0)n!==null&&uc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&uc(n),t===1)e.tag===0?ay(td.bind(null,e)):Zh(td.bind(null,e)),ry(function(){!(z&6)&&Xt()}),n=null;else{switch(Ph(r)){case 1:n=Cl;break;case 4:n=Th;break;case 16:n=co;break;case 536870912:n=Eh;break;default:n=co}n=qp(n,Hp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Hp(e,t){if(eo=-1,to=0,z&6)throw Error(C(327));var n=e.callbackNode;if(Yn()&&e.callbackNode!==n)return null;var r=fo(e,e===ce?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=No(e,r);else{t=r;var i=z;z|=2;var o=Yp();(ce!==e||pe!==t)&&(ht=null,er=Z()+500,hn(e,t));do try{Py();break}catch(a){$p(e,a)}while(!0);Ol(),Co.current=o,z=i,re!==null?t=0:(ce=null,pe=0,t=se)}if(t!==0){if(t===2&&(i=ga(e),i!==0&&(r=i,t=Ha(e,i))),t===1)throw n=ti,hn(e,0),Nt(e,r),Ae(e,Z()),n;if(t===6)Nt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ey(i)&&(t=No(e,r),t===2&&(o=ga(e),o!==0&&(r=o,t=Ha(e,o))),t===1))throw n=ti,hn(e,0),Nt(e,r),Ae(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:sn(e,Pe,ht);break;case 3:if(Nt(e,r),(r&130023424)===r&&(t=tu+500-Z(),10<t)){if(fo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){be(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ba(sn.bind(null,e,Pe,ht),t);break}sn(e,Pe,ht);break;case 4:if(Nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-tt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ty(r/1960))-r,10<r){e.timeoutHandle=ba(sn.bind(null,e,Pe,ht),r);break}sn(e,Pe,ht);break;case 5:sn(e,Pe,ht);break;default:throw Error(C(329))}}}return Ae(e,Z()),e.callbackNode===n?Hp.bind(null,e):null}function Ha(e,t){var n=Mr;return e.current.memoizedState.isDehydrated&&(hn(e,t).flags|=256),e=No(e,t),e!==2&&(t=Pe,Pe=n,t!==null&&$a(t)),e}function $a(e){Pe===null?Pe=e:Pe.push.apply(Pe,e)}function Ey(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!rt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nt(e,t){for(t&=~eu,t&=~Jo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),r=1<<n;e[n]=-1,t&=~r}}function td(e){if(z&6)throw Error(C(327));Yn();var t=fo(e,0);if(!(t&1))return Ae(e,Z()),null;var n=No(e,t);if(e.tag!==0&&n===2){var r=ga(e);r!==0&&(t=r,n=Ha(e,r))}if(n===1)throw n=ti,hn(e,0),Nt(e,t),Ae(e,Z()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sn(e,Pe,ht),Ae(e,Z()),null}function nu(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(er=Z()+500,Go&&Xt())}}function wn(e){At!==null&&At.tag===0&&!(z&6)&&Yn();var t=z;z|=1;var n=He.transition,r=V;try{if(He.transition=null,V=1,e)return e()}finally{V=r,He.transition=n,z=t,!(z&6)&&Xt()}}function ru(){Me=zn.current,O(zn)}function hn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ny(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(Vl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vo();break;case 3:Jn(),O(Ne),O(we),Yl();break;case 5:$l(r);break;case 4:Jn();break;case 13:O(H);break;case 19:O(H);break;case 10:Ul(r.type._context);break;case 22:case 23:ru()}n=n.return}if(ce=e,re=e=Bt(e.current,null),pe=Me=t,se=0,ti=null,eu=Jo=xn=0,Pe=Mr=null,un!==null){for(t=0;t<un.length;t++)if(n=un[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}un=null}return e}function $p(e,t){do{var n=re;try{if(Ol(),qi.current=Eo,To){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}To=!1}if(yn=0,le=oe=Y=null,Dr=!1,Jr=0,Zl.current=null,n===null||n.return===null){se=1,ti=t,re=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=pe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Bc(s);if(v!==null){v.flags&=-257,Wc(v,s,a,o,t),v.mode&1&&Uc(o,c,t),t=v,l=c;var y=t.updateQueue;if(y===null){var x=new Set;x.add(l),t.updateQueue=x}else y.add(l);break e}else{if(!(t&1)){Uc(o,c,t),iu();break e}l=Error(C(426))}}else if(B&&a.mode&1){var S=Bc(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Wc(S,s,a,o,t),Il(Zn(l,a));break e}}o=l=Zn(l,a),se!==4&&(se=2),Mr===null?Mr=[o]:Mr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=Pp(o,l,t);Lc(o,g);break e;case 1:a=l;var m=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ot===null||!Ot.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=_p(o,a,t);Lc(o,k);break e}}o=o.return}while(o!==null)}Gp(n)}catch(j){t=j,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function Yp(){var e=Co.current;return Co.current=Eo,e===null?Eo:e}function iu(){(se===0||se===3||se===2)&&(se=4),ce===null||!(xn&268435455)&&!(Jo&268435455)||Nt(ce,pe)}function No(e,t){var n=z;z|=2;var r=Yp();(ce!==e||pe!==t)&&(ht=null,hn(e,t));do try{Cy();break}catch(i){$p(e,i)}while(!0);if(Ol(),z=n,Co.current=r,re!==null)throw Error(C(261));return ce=null,pe=0,se}function Cy(){for(;re!==null;)Kp(re)}function Py(){for(;re!==null&&!Z0();)Kp(re)}function Kp(e){var t=Xp(e.alternate,e,Me);e.memoizedProps=e.pendingProps,t===null?Gp(e):re=t,Zl.current=null}function Gp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ky(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,re=null;return}}else if(n=wy(n,t,Me),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);se===0&&(se=5)}function sn(e,t,n){var r=V,i=He.transition;try{He.transition=null,V=1,_y(e,t,n,r)}finally{He.transition=i,V=r}return null}function _y(e,t,n,r){do Yn();while(At!==null);if(z&6)throw Error(C(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(uv(e,o),e===ce&&(re=ce=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ii||(Ii=!0,qp(co,function(){return Yn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=He.transition,He.transition=null;var s=V;V=1;var a=z;z|=4,Zl.current=null,jy(e,n),Bp(n,e),Qv(Sa),ho=!!ka,Sa=ka=null,e.current=n,by(n),ev(),z=a,V=s,He.transition=o}else e.current=n;if(Ii&&(Ii=!1,At=e,_o=i),o=e.pendingLanes,o===0&&(Ot=null),rv(n.stateNode),Ae(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Po)throw Po=!1,e=Ba,Ba=null,e;return _o&1&&e.tag!==0&&Yn(),o=e.pendingLanes,o&1?e===Wa?Rr++:(Rr=0,Wa=e):Rr=0,Xt(),null}function Yn(){if(At!==null){var e=Ph(_o),t=He.transition,n=V;try{if(He.transition=null,V=16>e?16:e,At===null)var r=!1;else{if(e=At,At=null,_o=0,z&6)throw Error(C(331));var i=z;for(z|=4,N=e.current;N!==null;){var o=N,s=o.child;if(N.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(N=c;N!==null;){var d=N;switch(d.tag){case 0:case 11:case 15:Ar(8,d,o)}var f=d.child;if(f!==null)f.return=d,N=f;else for(;N!==null;){d=N;var h=d.sibling,v=d.return;if(Fp(d),d===c){N=null;break}if(h!==null){h.return=v,N=h;break}N=v}}}var y=o.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}N=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,N=s;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ar(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,N=g;break e}N=o.return}}var m=e.current;for(N=m;N!==null;){s=N;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,N=p;else e:for(s=m;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:qo(9,a)}}catch(j){Q(a,a.return,j)}if(a===s){N=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,N=k;break e}N=a.return}}if(z=i,Xt(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Wo,e)}catch{}r=!0}return r}finally{V=n,He.transition=t}}return!1}function nd(e,t,n){t=Zn(n,t),t=Pp(e,t,1),e=Ft(e,t,1),t=be(),e!==null&&(di(e,1,t),Ae(e,t))}function Q(e,t,n){if(e.tag===3)nd(e,e,n);else for(;t!==null;){if(t.tag===3){nd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ot===null||!Ot.has(r))){e=Zn(n,e),e=_p(t,e,1),t=Ft(t,e,1),e=be(),t!==null&&(di(t,1,e),Ae(t,e));break}}t=t.return}}function Ny(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=be(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(pe&n)===n&&(se===4||se===3&&(pe&130023424)===pe&&500>Z()-tu?hn(e,0):eu|=n),Ae(e,t)}function Qp(e,t){t===0&&(e.mode&1?(t=Pi,Pi<<=1,!(Pi&130023424)&&(Pi=4194304)):t=1);var n=be();e=kt(e,t),e!==null&&(di(e,t,n),Ae(e,n))}function Dy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qp(e,n)}function Ay(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Qp(e,n)}var Xp;Xp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ne.current)_e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return _e=!1,xy(e,t,n);_e=!!(e.flags&131072)}else _e=!1,B&&t.flags&1048576&&ep(t,wo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Zi(e,t),e=t.pendingProps;var i=Qn(t,we.current);$n(t,n),i=Gl(null,t,r,e,i,n);var o=Ql();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,De(r)?(o=!0,yo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wl(t),i.updater=Xo,t.stateNode=i,i._reactInternals=t,Da(t,r,e,n),t=Ra(null,t,r,!0,o,n)):(t.tag=0,B&&o&&zl(t),ke(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Zi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ry(r),e=Je(r,e),i){case 0:t=Ma(null,t,r,e,n);break e;case 1:t=Yc(null,t,r,e,n);break e;case 11:t=Hc(null,t,r,e,n);break e;case 14:t=$c(null,t,r,Je(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Je(r,i),Ma(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Je(r,i),Yc(e,t,r,i,n);case 3:e:{if(Mp(t),e===null)throw Error(C(387));r=t.pendingProps,o=t.memoizedState,i=o.element,sp(e,t),jo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Zn(Error(C(423)),t),t=Kc(e,t,r,n,i);break e}else if(r!==i){i=Zn(Error(C(424)),t),t=Kc(e,t,r,n,i);break e}else for(Re=It(t.stateNode.containerInfo.firstChild),Le=t,B=!0,et=null,n=ip(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xn(),r===i){t=St(e,t,n);break e}ke(e,t,r,n)}t=t.child}return t;case 5:return ap(t),e===null&&Pa(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,ja(r,i)?s=null:o!==null&&ja(r,o)&&(t.flags|=32),Ap(e,t),ke(e,t,s,n),t.child;case 6:return e===null&&Pa(t),null;case 13:return Rp(e,t,n);case 4:return Hl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=qn(t,null,r,n):ke(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Je(r,i),Hc(e,t,r,i,n);case 7:return ke(e,t,t.pendingProps,n),t.child;case 8:return ke(e,t,t.pendingProps.children,n),t.child;case 12:return ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,I(ko,r._currentValue),r._currentValue=s,o!==null)if(rt(o.value,s)){if(o.children===i.children&&!Ne.current){t=St(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=vt(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),_a(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(C(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),_a(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ke(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,$n(t,n),i=Ye(i),r=r(i),t.flags|=1,ke(e,t,r,n),t.child;case 14:return r=t.type,i=Je(r,t.pendingProps),i=Je(r.type,i),$c(e,t,r,i,n);case 15:return Np(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Je(r,i),Zi(e,t),t.tag=1,De(r)?(e=!0,yo(t)):e=!1,$n(t,n),Cp(t,r,i),Da(t,r,i,n),Ra(null,t,r,!0,e,n);case 19:return Lp(e,t,n);case 22:return Dp(e,t,n)}throw Error(C(156,t.tag))};function qp(e,t){return bh(e,t)}function My(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Be(e,t,n,r){return new My(e,t,n,r)}function ou(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ry(e){if(typeof e=="function")return ou(e)?1:0;if(e!=null){if(e=e.$$typeof,e===bl)return 11;if(e===Tl)return 14}return 2}function Bt(e,t){var n=e.alternate;return n===null?(n=Be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function no(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")ou(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case En:return pn(n.children,i,o,t);case jl:s=8,i|=8;break;case ta:return e=Be(12,n,t,i|2),e.elementType=ta,e.lanes=o,e;case na:return e=Be(13,n,t,i),e.elementType=na,e.lanes=o,e;case ra:return e=Be(19,n,t,i),e.elementType=ra,e.lanes=o,e;case ah:return Zo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oh:s=10;break e;case sh:s=9;break e;case bl:s=11;break e;case Tl:s=14;break e;case Ct:s=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Be(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function pn(e,t,n,r){return e=Be(7,e,r,t),e.lanes=n,e}function Zo(e,t,n,r){return e=Be(22,e,r,t),e.elementType=ah,e.lanes=n,e.stateNode={isHidden:!1},e}function Rs(e,t,n){return e=Be(6,e,null,t),e.lanes=n,e}function Ls(e,t,n){return t=Be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ly(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ms(0),this.expirationTimes=ms(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ms(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function su(e,t,n,r,i,o,s,a,l){return e=new Ly(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Be(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wl(o),e}function zy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Jp(e){if(!e)return $t;e=e._reactInternals;e:{if(Sn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(De(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(De(n))return Jh(e,n,t)}return t}function Zp(e,t,n,r,i,o,s,a,l){return e=su(n,r,!0,e,i,o,s,a,l),e.context=Jp(null),n=e.current,r=be(),i=Ut(n),o=vt(r,i),o.callback=t??null,Ft(n,o,i),e.current.lanes=i,di(e,i,r),Ae(e,r),e}function es(e,t,n,r){var i=t.current,o=be(),s=Ut(i);return n=Jp(n),t.context===null?t.context=n:t.pendingContext=n,t=vt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(i,t,s),e!==null&&(nt(e,i,s,o),Xi(e,i,s)),s}function Do(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function rd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function au(e,t){rd(e,t),(e=e.alternate)&&rd(e,t)}function Vy(){return null}var em=typeof reportError=="function"?reportError:function(e){console.error(e)};function lu(e){this._internalRoot=e}ts.prototype.render=lu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));es(e,t,null,null)};ts.prototype.unmount=lu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wn(function(){es(null,e,null,null)}),t[wt]=null}};function ts(e){this._internalRoot=e}ts.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_t.length&&t!==0&&t<_t[n].priority;n++);_t.splice(n,0,e),n===0&&Mh(e)}};function uu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function id(){}function Iy(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Do(s);o.call(c)}}var s=Zp(t,r,e,0,null,!1,!1,"",id);return e._reactRootContainer=s,e[wt]=s.current,Kr(e.nodeType===8?e.parentNode:e),wn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Do(l);a.call(c)}}var l=su(e,0,!1,null,null,!1,!1,"",id);return e._reactRootContainer=l,e[wt]=l.current,Kr(e.nodeType===8?e.parentNode:e),wn(function(){es(t,l,n,r)}),l}function rs(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Do(s);a.call(l)}}es(t,s,e,i)}else s=Iy(n,t,e,i,r);return Do(s)}_h=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Sr(t.pendingLanes);n!==0&&(Pl(t,n|1),Ae(t,Z()),!(z&6)&&(er=Z()+500,Xt()))}break;case 13:wn(function(){var r=kt(e,1);if(r!==null){var i=be();nt(r,e,1,i)}}),au(e,1)}};_l=function(e){if(e.tag===13){var t=kt(e,134217728);if(t!==null){var n=be();nt(t,e,134217728,n)}au(e,134217728)}};Nh=function(e){if(e.tag===13){var t=Ut(e),n=kt(e,t);if(n!==null){var r=be();nt(n,e,t,r)}au(e,t)}};Dh=function(){return V};Ah=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};ha=function(e,t,n){switch(t){case"input":if(sa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ko(r);if(!i)throw Error(C(90));uh(r),sa(r,i)}}}break;case"textarea":dh(e,n);break;case"select":t=n.value,t!=null&&Un(e,!!n.multiple,t,!1)}};yh=nu;xh=wn;var Fy={usingClientEntryPoint:!1,Events:[hi,Nn,Ko,gh,vh,nu]},yr={findFiberByHostInstance:ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Oy={bundleType:yr.bundleType,version:yr.version,rendererPackageName:yr.rendererPackageName,rendererConfig:yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sh(e),e===null?null:e.stateNode},findFiberByHostInstance:yr.findFiberByHostInstance||Vy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fi.isDisabled&&Fi.supportsFiber)try{Wo=Fi.inject(Oy),lt=Fi}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fy;Ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uu(t))throw Error(C(200));return zy(e,t,null,n)};Ve.createRoot=function(e,t){if(!uu(e))throw Error(C(299));var n=!1,r="",i=em;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=su(e,1,!1,null,null,n,!1,r,i),e[wt]=t.current,Kr(e.nodeType===8?e.parentNode:e),new lu(t)};Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Sh(t),e=e===null?null:e.stateNode,e};Ve.flushSync=function(e){return wn(e)};Ve.hydrate=function(e,t,n){if(!ns(t))throw Error(C(200));return rs(null,e,t,!0,n)};Ve.hydrateRoot=function(e,t,n){if(!uu(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=em;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Zp(t,null,e,1,n??null,i,!1,o,s),e[wt]=t.current,Kr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ts(t)};Ve.render=function(e,t,n){if(!ns(t))throw Error(C(200));return rs(null,e,t,!1,n)};Ve.unmountComponentAtNode=function(e){if(!ns(e))throw Error(C(40));return e._reactRootContainer?(wn(function(){rs(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1};Ve.unstable_batchedUpdates=nu;Ve.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ns(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return rs(e,t,n,!1,r)};Ve.version="18.3.1-next-f1338f8080-20240426";function tm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tm)}catch(e){console.error(e)}}tm(),th.exports=Ve;var Uy=th.exports,nm,od=Uy;nm=od.createRoot,od.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ni(){return ni=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ni.apply(null,arguments)}var Mt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Mt||(Mt={}));const sd="popstate";function By(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Ya("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ao(i)}return Hy(t,n,null,e)}function te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function rm(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Wy(){return Math.random().toString(36).substr(2,8)}function ad(e,t){return{usr:e.state,key:e.key,idx:t}}function Ya(e,t,n,r){return n===void 0&&(n=null),ni({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?or(t):t,{state:n,key:t&&t.key||r||Wy()})}function Ao(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function or(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Hy(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Mt.Pop,l=null,c=d();c==null&&(c=0,s.replaceState(ni({},s.state,{idx:c}),""));function d(){return(s.state||{idx:null}).idx}function f(){a=Mt.Pop;let S=d(),g=S==null?null:S-c;c=S,l&&l({action:a,location:x.location,delta:g})}function h(S,g){a=Mt.Push;let m=Ya(x.location,S,g);c=d()+1;let p=ad(m,c),k=x.createHref(m);try{s.pushState(p,"",k)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(k)}o&&l&&l({action:a,location:x.location,delta:1})}function v(S,g){a=Mt.Replace;let m=Ya(x.location,S,g);c=d();let p=ad(m,c),k=x.createHref(m);s.replaceState(p,"",k),o&&l&&l({action:a,location:x.location,delta:0})}function y(S){let g=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof S=="string"?S:Ao(S);return m=m.replace(/ $/,"%20"),te(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let x={get action(){return a},get location(){return e(i,s)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(sd,f),l=S,()=>{i.removeEventListener(sd,f),l=null}},createHref(S){return t(i,S)},createURL:y,encodeLocation(S){let g=y(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:v,go(S){return s.go(S)}};return x}var ld;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ld||(ld={}));function $y(e,t,n){return n===void 0&&(n="/"),Yy(e,t,n)}function Yy(e,t,n,r){let i=typeof t=="string"?or(t):t,o=cu(i.pathname||"/",n);if(o==null)return null;let s=im(e);Ky(s);let a=null,l=ox(o);for(let c=0;a==null&&c<s.length;++c)a=nx(s[c],l);return a}function im(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(te(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Wt([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(te(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),im(o.children,t,d,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:ex(c,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of om(o.path))i(o,s,l)}),t}function om(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=om(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Ky(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:tx(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Gy=/^:[\w-]+$/,Qy=3,Xy=2,qy=1,Jy=10,Zy=-2,ud=e=>e==="*";function ex(e,t){let n=e.split("/"),r=n.length;return n.some(ud)&&(r+=Zy),t&&(r+=Xy),n.filter(i=>!ud(i)).reduce((i,o)=>i+(Gy.test(o)?Qy:o===""?qy:Jy),r)}function tx(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function nx(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",f=rx({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),h=l.route;if(!f)return null;Object.assign(i,f.params),s.push({params:i,pathname:Wt([o,f.pathname]),pathnameBase:lx(Wt([o,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(o=Wt([o,f.pathnameBase]))}return s}function rx(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ix(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:h,isOptional:v}=d;if(h==="*"){let x=a[f]||"";s=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const y=a[f];return v&&!y?c[h]=void 0:c[h]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:e}}function ix(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),rm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function ox(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return rm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function cu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function sx(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?or(e):e,o;return n?(n=sm(n),n.startsWith("/")?o=cd(n.substring(1),"/"):o=cd(n,t)):o=t,{pathname:o,search:ux(r),hash:cx(i)}}function cd(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function zs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ax(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function du(e,t){let n=ax(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function fu(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=or(e):(i=ni({},e),te(!i.pathname||!i.pathname.includes("?"),zs("?","pathname","search",i)),te(!i.pathname||!i.pathname.includes("#"),zs("#","pathname","hash",i)),te(!i.search||!i.search.includes("#"),zs("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}a=f>=0?t[f]:"/"}let l=sx(i,a),c=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const sm=e=>e.replace(/\/\/+/g,"/"),Wt=e=>sm(e.join("/")),lx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ux=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,cx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function dx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const am=["post","put","patch","delete"];new Set(am);const fx=["get",...am];new Set(fx);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ri(){return ri=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ri.apply(null,arguments)}const hu=w.createContext(null),hx=w.createContext(null),qt=w.createContext(null),is=w.createContext(null),Jt=w.createContext({outlet:null,matches:[],isDataRoute:!1}),lm=w.createContext(null);function px(e,t){let{relative:n}=t===void 0?{}:t;sr()||te(!1);let{basename:r,navigator:i}=w.useContext(qt),{hash:o,pathname:s,search:a}=dm(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Wt([r,s])),i.createHref({pathname:l,search:a,hash:o})}function sr(){return w.useContext(is)!=null}function jn(){return sr()||te(!1),w.useContext(is).location}function um(e){w.useContext(qt).static||w.useLayoutEffect(e)}function cm(){let{isDataRoute:e}=w.useContext(Jt);return e?Cx():mx()}function mx(){sr()||te(!1);let e=w.useContext(hu),{basename:t,future:n,navigator:r}=w.useContext(qt),{matches:i}=w.useContext(Jt),{pathname:o}=jn(),s=JSON.stringify(du(i,n.v7_relativeSplatPath)),a=w.useRef(!1);return um(()=>{a.current=!0}),w.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=fu(c,JSON.parse(s),o,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Wt([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,s,o,e])}function dm(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(qt),{matches:i}=w.useContext(Jt),{pathname:o}=jn(),s=JSON.stringify(du(i,r.v7_relativeSplatPath));return w.useMemo(()=>fu(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function gx(e,t){return vx(e,t)}function vx(e,t,n,r){sr()||te(!1);let{navigator:i}=w.useContext(qt),{matches:o}=w.useContext(Jt),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=jn(),d;if(t){var f;let S=typeof t=="string"?or(t):t;l==="/"||(f=S.pathname)!=null&&f.startsWith(l)||te(!1),d=S}else d=c;let h=d.pathname||"/",v=h;if(l!=="/"){let S=l.replace(/^\//,"").split("/");v="/"+h.replace(/^\//,"").split("/").slice(S.length).join("/")}let y=$y(e,{pathname:v}),x=Sx(y&&y.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:Wt([l,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:Wt([l,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n,r);return t&&x?w.createElement(is.Provider,{value:{location:ri({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Mt.Pop}},x):x}function yx(){let e=Ex(),t=dx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,null)}const xx=w.createElement(yx,null);class wx extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(Jt.Provider,{value:this.props.routeContext},w.createElement(lm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function kx(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(hu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Jt.Provider,{value:t},r)}function Sx(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||te(!1),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let f=s[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:h,errors:v}=n,y=f.route.loader&&h[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||y){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((d,f,h)=>{let v,y=!1,x=null,S=null;n&&(v=a&&f.route.id?a[f.route.id]:void 0,x=f.route.errorElement||xx,l&&(c<0&&h===0?(Px("route-fallback"),y=!0,S=null):c===h&&(y=!0,S=f.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,h+1)),m=()=>{let p;return v?p=x:y?p=S:f.route.Component?p=w.createElement(f.route.Component,null):f.route.element?p=f.route.element:p=d,w.createElement(kx,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:p})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?w.createElement(wx,{location:n.location,revalidation:n.revalidation,component:x,error:v,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var fm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(fm||{}),hm=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(hm||{});function jx(e){let t=w.useContext(hu);return t||te(!1),t}function bx(e){let t=w.useContext(hx);return t||te(!1),t}function Tx(e){let t=w.useContext(Jt);return t||te(!1),t}function pm(e){let t=Tx(),n=t.matches[t.matches.length-1];return n.route.id||te(!1),n.route.id}function Ex(){var e;let t=w.useContext(lm),n=bx(),r=pm();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Cx(){let{router:e}=jx(fm.UseNavigateStable),t=pm(hm.UseNavigateStable),n=w.useRef(!1);return um(()=>{n.current=!0}),w.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ri({fromRouteId:t},o)))},[e,t])}const dd={};function Px(e,t,n){dd[e]||(dd[e]=!0)}function _x(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function fd(e){let{to:t,replace:n,state:r,relative:i}=e;sr()||te(!1);let{future:o,static:s}=w.useContext(qt),{matches:a}=w.useContext(Jt),{pathname:l}=jn(),c=cm(),d=fu(t,du(a,o.v7_relativeSplatPath),l,i==="path"),f=JSON.stringify(d);return w.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function Ce(e){te(!1)}function Nx(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Mt.Pop,navigator:o,static:s=!1,future:a}=e;sr()&&te(!1);let l=t.replace(/^\/*/,"/"),c=w.useMemo(()=>({basename:l,navigator:o,static:s,future:ri({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=or(r));let{pathname:d="/",search:f="",hash:h="",state:v=null,key:y="default"}=r,x=w.useMemo(()=>{let S=cu(d,l);return S==null?null:{location:{pathname:S,search:f,hash:h,state:v,key:y},navigationType:i}},[l,d,f,h,v,y,i]);return x==null?null:w.createElement(qt.Provider,{value:c},w.createElement(is.Provider,{children:n,value:x}))}function Dx(e){let{children:t,location:n}=e;return gx(Ka(t),n)}new Promise(()=>{});function Ka(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let o=[...t,i];if(r.type===w.Fragment){n.push.apply(n,Ka(r.props.children,o));return}r.type!==Ce&&te(!1),!r.props.index||!r.props.children||te(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Ka(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ga(){return Ga=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ga.apply(null,arguments)}function Ax(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Mx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Rx(e,t){return e.button===0&&(!t||t==="_self")&&!Mx(e)}const Lx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],zx="6";try{window.__reactRouterVersion=zx}catch{}const Vx="startTransition",hd=N0[Vx];function Ix(e){let{basename:t,children:n,future:r,window:i}=e,o=w.useRef();o.current==null&&(o.current=By({window:i,v5Compat:!0}));let s=o.current,[a,l]=w.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},d=w.useCallback(f=>{c&&hd?hd(()=>l(f)):l(f)},[l,c]);return w.useLayoutEffect(()=>s.listen(d),[s,d]),w.useEffect(()=>_x(r),[r]),w.createElement(Nx,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const Fx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ox=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ue=w.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:c,preventScrollReset:d,viewTransition:f}=t,h=Ax(t,Lx),{basename:v}=w.useContext(qt),y,x=!1;if(typeof c=="string"&&Ox.test(c)&&(y=c,Fx))try{let p=new URL(window.location.href),k=c.startsWith("//")?new URL(p.protocol+c):new URL(c),j=cu(k.pathname,v);k.origin===p.origin&&j!=null?c=j+k.search+k.hash:x=!0}catch{}let S=px(c,{relative:i}),g=Ux(c,{replace:s,state:a,target:l,preventScrollReset:d,relative:i,viewTransition:f});function m(p){r&&r(p),p.defaultPrevented||g(p)}return w.createElement("a",Ga({},h,{href:y||S,onClick:x||o?r:m,ref:n,target:l}))});var pd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(pd||(pd={}));var md;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(md||(md={}));function Ux(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=t===void 0?{}:t,l=cm(),c=jn(),d=dm(e,{relative:s});return w.useCallback(f=>{if(Rx(f,n)){f.preventDefault();let h=r!==void 0?r:Ao(c)===Ao(d);l(e,{replace:h,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[c,l,d,r,i,n,e,o,s,a])}const pu=w.createContext({});function mu(e){const t=w.useRef(null);return t.current===null&&(t.current=e()),t.current}const mm=typeof window<"u",gm=mm?w.useLayoutEffect:w.useEffect,os=w.createContext(null);function gu(e,t){e.indexOf(t)===-1&&e.push(t)}function vu(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const dt=(e,t,n)=>n>t?t:n<e?e:n;let yu=()=>{};const jt={},vm=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function ym(e){return typeof e=="object"&&e!==null}const xm=e=>/^0[^.\s]+$/u.test(e);function xu(e){let t;return()=>(t===void 0&&(t=e()),t)}const $e=e=>e,Bx=(e,t)=>n=>t(e(n)),mi=(...e)=>e.reduce(Bx),ii=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r};class wu{constructor(){this.subscriptions=[]}add(t){return gu(this.subscriptions,t),()=>vu(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const yt=e=>e*1e3,We=e=>e/1e3;function wm(e,t){return t?e*(1e3/t):0}const km=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Wx=1e-7,Hx=12;function $x(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=km(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>Wx&&++a<Hx);return s}function gi(e,t,n,r){if(e===t&&n===r)return $e;const i=o=>$x(o,0,1,e,n);return o=>o===0||o===1?o:km(i(o),t,r)}const Sm=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,jm=e=>t=>1-e(1-t),bm=gi(.33,1.53,.69,.99),ku=jm(bm),Tm=Sm(ku),Em=e=>(e*=2)<1?.5*ku(e):.5*(2-Math.pow(2,-10*(e-1))),Su=e=>1-Math.sin(Math.acos(e)),Cm=jm(Su),Pm=Sm(Su),Yx=gi(.42,0,1,1),Kx=gi(0,0,.58,1),_m=gi(.42,0,.58,1),Gx=e=>Array.isArray(e)&&typeof e[0]!="number",Nm=e=>Array.isArray(e)&&typeof e[0]=="number",Qx={linear:$e,easeIn:Yx,easeInOut:_m,easeOut:Kx,circIn:Su,circInOut:Pm,circOut:Cm,backIn:ku,backInOut:Tm,backOut:bm,anticipate:Em},Xx=e=>typeof e=="string",gd=e=>{if(Nm(e)){yu(e.length===4);const[t,n,r,i]=e;return gi(t,n,r,i)}else if(Xx(e))return Qx[e];return e},Oi=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function qx(e,t){let n=new Set,r=new Set,i=!1,o=!1;const s=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function l(d){s.has(d)&&(c.schedule(d),e()),d(a)}const c={schedule:(d,f=!1,h=!1)=>{const y=h&&i?n:r;return f&&s.add(d),y.has(d)||y.add(d),d},cancel:d=>{r.delete(d),s.delete(d)},process:d=>{if(a=d,i){o=!0;return}i=!0,[n,r]=[r,n],n.forEach(l),n.clear(),i=!1,o&&(o=!1,c.process(d))}};return c}const Jx=40;function Dm(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=Oi.reduce((p,k)=>(p[k]=qx(o),p),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:d,update:f,preRender:h,render:v,postRender:y}=s,x=()=>{const p=jt.useManualTiming?i.timestamp:performance.now();n=!1,jt.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(p-i.timestamp,Jx),1)),i.timestamp=p,i.isProcessing=!0,a.process(i),l.process(i),c.process(i),d.process(i),f.process(i),h.process(i),v.process(i),y.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(x))},S=()=>{n=!0,r=!0,i.isProcessing||e(x)};return{schedule:Oi.reduce((p,k)=>{const j=s[k];return p[k]=(T,E=!1,b=!1)=>(n||S(),j.schedule(T,E,b)),p},{}),cancel:p=>{for(let k=0;k<Oi.length;k++)s[Oi[k]].cancel(p)},state:i,steps:s}}const{schedule:U,cancel:Yt,state:he,steps:Vs}=Dm(typeof requestAnimationFrame<"u"?requestAnimationFrame:$e,!0);let ro;function Zx(){ro=void 0}const Se={now:()=>(ro===void 0&&Se.set(he.isProcessing||jt.useManualTiming?he.timestamp:performance.now()),ro),set:e=>{ro=e,queueMicrotask(Zx)}},Am=e=>t=>typeof t=="string"&&t.startsWith(e),Mm=Am("--"),e1=Am("var(--"),ju=e=>e1(e)?t1.test(e.split("/*")[0].trim()):!1,t1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function vd(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const ar={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},oi={...ar,transform:e=>dt(0,1,e)},Ui={...ar,default:1},Lr=e=>Math.round(e*1e5)/1e5,bu=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function n1(e){return e==null}const r1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Tu=(e,t)=>n=>!!(typeof n=="string"&&r1.test(n)&&n.startsWith(e)||t&&!n1(n)&&Object.prototype.hasOwnProperty.call(n,t)),Rm=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,s,a]=r.match(bu);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},i1=e=>dt(0,255,e),Is={...ar,transform:e=>Math.round(i1(e))},dn={test:Tu("rgb","red"),parse:Rm("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Is.transform(e)+", "+Is.transform(t)+", "+Is.transform(n)+", "+Lr(oi.transform(r))+")"};function o1(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Qa={test:Tu("#"),parse:o1,transform:dn.transform},vi=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Et=vi("deg"),ct=vi("%"),_=vi("px"),s1=vi("vh"),a1=vi("vw"),yd={...ct,parse:e=>ct.parse(e)/100,transform:e=>ct.transform(e*100)},Vn={test:Tu("hsl","hue"),parse:Rm("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+ct.transform(Lr(t))+", "+ct.transform(Lr(n))+", "+Lr(oi.transform(r))+")"},ne={test:e=>dn.test(e)||Qa.test(e)||Vn.test(e),parse:e=>dn.test(e)?dn.parse(e):Vn.test(e)?Vn.parse(e):Qa.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?dn.transform(e):Vn.transform(e),getAnimatableNone:e=>{const t=ne.parse(e);return t.alpha=0,ne.transform(t)}},l1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function u1(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(bu))==null?void 0:t.length)||0)+(((n=e.match(l1))==null?void 0:n.length)||0)>0}const Lm="number",zm="color",c1="var",d1="var(",xd="${}",f1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function si(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const a=t.replace(f1,l=>(ne.test(l)?(r.color.push(o),i.push(zm),n.push(ne.parse(l))):l.startsWith(d1)?(r.var.push(o),i.push(c1),n.push(l)):(r.number.push(o),i.push(Lm),n.push(parseFloat(l))),++o,xd)).split(xd);return{values:n,split:a,indexes:r,types:i}}function Vm(e){return si(e).values}function Im(e){const{split:t,types:n}=si(e),r=t.length;return i=>{let o="";for(let s=0;s<r;s++)if(o+=t[s],i[s]!==void 0){const a=n[s];a===Lm?o+=Lr(i[s]):a===zm?o+=ne.transform(i[s]):o+=i[s]}return o}}const h1=e=>typeof e=="number"?0:ne.test(e)?ne.getAnimatableNone(e):e;function p1(e){const t=Vm(e);return Im(e)(t.map(h1))}const Kt={test:u1,parse:Vm,createTransformer:Im,getAnimatableNone:p1};function Fs(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function m1({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=Fs(l,a,e+1/3),o=Fs(l,a,e),s=Fs(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}function Mo(e,t){return n=>n>0?t:e}const $=(e,t,n)=>e+(t-e)*n,Os=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},g1=[Qa,dn,Vn],v1=e=>g1.find(t=>t.test(e));function wd(e){const t=v1(e);if(!t)return!1;let n=t.parse(e);return t===Vn&&(n=m1(n)),n}const kd=(e,t)=>{const n=wd(e),r=wd(t);if(!n||!r)return Mo(e,t);const i={...n};return o=>(i.red=Os(n.red,r.red,o),i.green=Os(n.green,r.green,o),i.blue=Os(n.blue,r.blue,o),i.alpha=$(n.alpha,r.alpha,o),dn.transform(i))},Xa=new Set(["none","hidden"]);function y1(e,t){return Xa.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function x1(e,t){return n=>$(e,t,n)}function Eu(e){return typeof e=="number"?x1:typeof e=="string"?ju(e)?Mo:ne.test(e)?kd:S1:Array.isArray(e)?Fm:typeof e=="object"?ne.test(e)?kd:w1:Mo}function Fm(e,t){const n=[...e],r=n.length,i=e.map((o,s)=>Eu(o)(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}}function w1(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Eu(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function k1(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const o=t.types[i],s=e.indexes[o][r[o]],a=e.values[s]??0;n[i]=a,r[o]++}return n}const S1=(e,t)=>{const n=Kt.createTransformer(t),r=si(e),i=si(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Xa.has(e)&&!i.values.length||Xa.has(t)&&!r.values.length?y1(e,t):mi(Fm(k1(r,i),i.values),n):Mo(e,t)};function Om(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?$(e,t,n):Eu(e)(e,t)}const j1=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>U.update(t,n),stop:()=>Yt(t),now:()=>he.isProcessing?he.timestamp:Se.now()}},Um=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let o=0;o<i;o++)r+=Math.round(e(o/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Ro=2e4;function Cu(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Ro;)t+=n,r=e.next(t);return t>=Ro?1/0:t}function b1(e,t=100,n){const r=n({...e,keyframes:[0,t]}),i=Math.min(Cu(r),Ro);return{type:"keyframes",ease:o=>r.next(i*o).value/t,duration:We(i)}}const T1=5;function Bm(e,t,n){const r=Math.max(t-T1,0);return wm(n-e(r),t-r)}const G={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Us=.001;function E1({duration:e=G.duration,bounce:t=G.bounce,velocity:n=G.velocity,mass:r=G.mass}){let i,o,s=1-t;s=dt(G.minDamping,G.maxDamping,s),e=dt(G.minDuration,G.maxDuration,We(e)),s<1?(i=c=>{const d=c*s,f=d*e,h=d-n,v=qa(c,s),y=Math.exp(-f);return Us-h/v*y},o=c=>{const f=c*s*e,h=f*n+n,v=Math.pow(s,2)*Math.pow(c,2)*e,y=Math.exp(-f),x=qa(Math.pow(c,2),s);return(-i(c)+Us>0?-1:1)*((h-v)*y)/x}):(i=c=>{const d=Math.exp(-c*e),f=(c-n)*e+1;return-Us+d*f},o=c=>{const d=Math.exp(-c*e),f=(n-c)*(e*e);return d*f});const a=5/e,l=P1(i,o,a);if(e=yt(e),isNaN(l))return{stiffness:G.stiffness,damping:G.damping,duration:e};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:s*2*Math.sqrt(r*c),duration:e}}}const C1=12;function P1(e,t,n){let r=n;for(let i=1;i<C1;i++)r=r-e(r)/t(r);return r}function qa(e,t){return e*Math.sqrt(1-t*t)}const _1=["duration","bounce"],N1=["stiffness","damping","mass"];function Sd(e,t){return t.some(n=>e[n]!==void 0)}function D1(e){let t={velocity:G.velocity,stiffness:G.stiffness,damping:G.damping,mass:G.mass,isResolvedFromDuration:!1,...e};if(!Sd(e,N1)&&Sd(e,_1))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,o=2*dt(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:G.mass,stiffness:i,damping:o}}else{const n=E1(e);t={...t,...n,mass:G.mass},t.isResolvedFromDuration=!0}return t}function Lo(e=G.visualDuration,t=G.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const o=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],a={done:!1,value:o},{stiffness:l,damping:c,mass:d,duration:f,velocity:h,isResolvedFromDuration:v}=D1({...n,velocity:-We(n.velocity||0)}),y=h||0,x=c/(2*Math.sqrt(l*d)),S=s-o,g=We(Math.sqrt(l/d)),m=Math.abs(S)<5;r||(r=m?G.restSpeed.granular:G.restSpeed.default),i||(i=m?G.restDelta.granular:G.restDelta.default);let p;if(x<1){const j=qa(g,x);p=T=>{const E=Math.exp(-x*g*T);return s-E*((y+x*g*S)/j*Math.sin(j*T)+S*Math.cos(j*T))}}else if(x===1)p=j=>s-Math.exp(-g*j)*(S+(y+g*S)*j);else{const j=g*Math.sqrt(x*x-1);p=T=>{const E=Math.exp(-x*g*T),b=Math.min(j*T,300);return s-E*((y+x*g*S)*Math.sinh(b)+j*S*Math.cosh(b))/j}}const k={calculatedDuration:v&&f||null,next:j=>{const T=p(j);if(v)a.done=j>=f;else{let E=j===0?y:0;x<1&&(E=j===0?yt(y):Bm(p,j,T));const b=Math.abs(E)<=r,R=Math.abs(s-T)<=i;a.done=b&&R}return a.value=a.done?s:T,a},toString:()=>{const j=Math.min(Cu(k),Ro),T=Um(E=>k.next(j*E).value,j,30);return j+"ms "+T},toTransition:()=>{}};return k}Lo.applyToOptions=e=>{const t=b1(e,100,Lo);return e.ease=t.ease,e.duration=yt(t.duration),e.type="keyframes",e};function Ja({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:c=.5,restSpeed:d}){const f=e[0],h={done:!1,value:f},v=b=>a!==void 0&&b<a||l!==void 0&&b>l,y=b=>a===void 0?l:l===void 0||Math.abs(a-b)<Math.abs(l-b)?a:l;let x=n*t;const S=f+x,g=s===void 0?S:s(S);g!==S&&(x=g-f);const m=b=>-x*Math.exp(-b/r),p=b=>g+m(b),k=b=>{const R=m(b),D=p(b);h.done=Math.abs(R)<=c,h.value=h.done?g:D};let j,T;const E=b=>{v(h.value)&&(j=b,T=Lo({keyframes:[h.value,y(h.value)],velocity:Bm(p,b,h.value),damping:i,stiffness:o,restDelta:c,restSpeed:d}))};return E(0),{calculatedDuration:null,next:b=>{let R=!1;return!T&&j===void 0&&(R=!0,k(b),E(b)),j!==void 0&&b>=j?T.next(b-j):(!R&&k(b),h)}}}function A1(e,t,n){const r=[],i=n||jt.mix||Om,o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||$e:t;a=mi(l,a)}r.push(a)}return r}function M1(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(yu(o===t.length),o===1)return()=>t[0];if(o===2&&t[0]===t[1])return()=>t[1];const s=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=A1(t,r,i),l=a.length,c=d=>{if(s&&d<e[0])return t[0];let f=0;if(l>1)for(;f<e.length-2&&!(d<e[f+1]);f++);const h=ii(e[f],e[f+1],d);return a[f](h)};return n?d=>c(dt(e[0],e[o-1],d)):c}function R1(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=ii(0,t,r);e.push($(n,1,i))}}function L1(e){const t=[0];return R1(t,e.length-1),t}function z1(e,t){return e.map(n=>n*t)}function V1(e,t){return e.map(()=>t||_m).splice(0,e.length-1)}function zr({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=Gx(r)?r.map(gd):gd(r),o={done:!1,value:t[0]},s=z1(n&&n.length===t.length?n:L1(t),e),a=M1(s,t,{ease:Array.isArray(i)?i:V1(t,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}const I1=e=>e!==null;function Pu(e,{repeat:t,repeatType:n="loop"},r,i=1){const o=e.filter(I1),a=i<0||t&&n!=="loop"&&t%2===1?0:o.length-1;return!a||r===void 0?o[a]:r}const F1={decay:Ja,inertia:Ja,tween:zr,keyframes:zr,spring:Lo};function Wm(e){typeof e.type=="string"&&(e.type=F1[e.type])}class _u{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const O1=e=>e/100;class Nu extends _u{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,i;const{motionValue:n}=this.options;n&&n.updatedAt!==Se.now()&&this.tick(Se.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(r=this.options).onStop)==null||i.call(r))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;Wm(t);const{type:n=zr,repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:s=0}=t;let{keyframes:a}=t;const l=n||zr;l!==zr&&typeof a[0]!="number"&&(this.mixKeyframes=mi(O1,Om(a[0],a[1])),a=[0,100]);const c=l({...t,keyframes:a});o==="mirror"&&(this.mirroredGenerator=l({...t,keyframes:[...a].reverse(),velocity:-s})),c.calculatedDuration===null&&(c.calculatedDuration=Cu(c));const{calculatedDuration:d}=c;this.calculatedDuration=d,this.resolvedDuration=d+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=c}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:r,totalDuration:i,mixKeyframes:o,mirroredGenerator:s,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return r.next(0);const{delay:c=0,keyframes:d,repeat:f,repeatType:h,repeatDelay:v,type:y,onUpdate:x,finalKeyframe:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-i/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),m=this.playbackSpeed>=0?g<0:g>i;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let p=this.currentTime,k=r;if(f){const b=Math.min(this.currentTime,i)/a;let R=Math.floor(b),D=b%1;!D&&b>=1&&(D=1),D===1&&R--,R=Math.min(R,f+1),!!(R%2)&&(h==="reverse"?(D=1-D,v&&(D-=v/a)):h==="mirror"&&(k=s)),p=dt(0,1,D)*a}const j=m?{done:!1,value:d[0]}:k.next(p);o&&(j.value=o(j.value));let{done:T}=j;!m&&l!==null&&(T=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const E=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return E&&y!==Ja&&(j.value=Pu(d,this.options,S,this.speed)),x&&x(j.value),E&&this.finish(),j}then(t,n){return this.finished.then(t,n)}get duration(){return We(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+We(t)}get time(){return We(this.currentTime)}set time(t){var n;t=yt(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(Se.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=We(this.currentTime))}play(){var i,o;if(this.isStopped)return;const{driver:t=j1,startTime:n}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),(o=(i=this.options).onPlay)==null||o.call(i);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Se.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function U1(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const fn=e=>e*180/Math.PI,Za=e=>{const t=fn(Math.atan2(e[1],e[0]));return el(t)},B1={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Za,rotateZ:Za,skewX:e=>fn(Math.atan(e[1])),skewY:e=>fn(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},el=e=>(e=e%360,e<0&&(e+=360),e),jd=Za,bd=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Td=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),W1={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:bd,scaleY:Td,scale:e=>(bd(e)+Td(e))/2,rotateX:e=>el(fn(Math.atan2(e[6],e[5]))),rotateY:e=>el(fn(Math.atan2(-e[2],e[0]))),rotateZ:jd,rotate:jd,skewX:e=>fn(Math.atan(e[4])),skewY:e=>fn(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function tl(e){return e.includes("scale")?1:0}function nl(e,t){if(!e||e==="none")return tl(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=W1,i=n;else{const a=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=B1,i=a}if(!i)return tl(t);const o=r[t],s=i[1].split(",").map($1);return typeof o=="function"?o(s):s[o]}const H1=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return nl(n,t)};function $1(e){return parseFloat(e.trim())}const lr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ur=new Set(lr),Ed=e=>e===ar||e===_,Y1=new Set(["x","y","z"]),K1=lr.filter(e=>!Y1.has(e));function G1(e){const t=[];return K1.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Rt={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>nl(t,"x"),y:(e,{transform:t})=>nl(t,"y")};Rt.translateX=Rt.x;Rt.translateY=Rt.y;const mn=new Set;let rl=!1,il=!1,ol=!1;function Hm(){if(il){const e=Array.from(mn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=G1(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,s])=>{var a;(a=r.getValue(o))==null||a.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}il=!1,rl=!1,mn.forEach(e=>e.complete(ol)),mn.clear()}function $m(){mn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(il=!0)})}function Q1(){ol=!0,$m(),Hm(),ol=!1}class Du{constructor(t,n,r,i,o,s=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=s}scheduleResolve(){this.state="scheduled",this.isAsync?(mn.add(this),rl||(rl=!0,U.read($m),U.resolveKeyframes(Hm))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;if(t[0]===null){const o=i==null?void 0:i.get(),s=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const a=r.readValue(n,s);a!=null&&(t[0]=a)}t[0]===void 0&&(t[0]=s),i&&o===void 0&&i.set(t[0])}U1(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),mn.delete(this)}cancel(){this.state==="scheduled"&&(mn.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const X1=e=>e.startsWith("--");function q1(e,t,n){X1(t)?e.style.setProperty(t,n):e.style[t]=n}const J1=xu(()=>window.ScrollTimeline!==void 0),Z1={};function ew(e,t){const n=xu(e);return()=>Z1[t]??n()}const Ym=ew(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),br=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Cd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:br([0,.65,.55,1]),circOut:br([.55,0,1,.45]),backIn:br([.31,.01,.66,-.59]),backOut:br([.33,1.53,.69,.99])};function Km(e,t){if(e)return typeof e=="function"?Ym()?Um(e,t):"ease-out":Nm(e)?br(e):Array.isArray(e)?e.map(n=>Km(n,t)||Cd.easeOut):Cd[e]}function tw(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:a="easeOut",times:l}={},c=void 0){const d={[t]:n};l&&(d.offset=l);const f=Km(a,i);Array.isArray(f)&&(d.easing=f);const h={delay:r,duration:i,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"};return c&&(h.pseudoElement=c),e.animate(d,h)}function Gm(e){return typeof e=="function"&&"applyToOptions"in e}function nw({type:e,...t}){return Gm(e)&&Ym()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class rw extends _u{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:r,keyframes:i,pseudoElement:o,allowFlatten:s=!1,finalKeyframe:a,onComplete:l}=t;this.isPseudoElement=!!o,this.allowFlatten=s,this.options=t,yu(typeof t.type!="string");const c=nw(t);this.animation=tw(n,r,i,c,o),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!o){const d=Pu(i,this.options,a,this.speed);this.updateMotionValue?this.updateMotionValue(d):q1(n,r,d),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,n;this.isPseudoElement||(n=(t=this.animation).commitStyles)==null||n.call(t)}get duration(){var n,r;const t=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return We(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+We(t)}get time(){return We(Number(this.animation.currentTime)||0)}set time(t){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=yt(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,observe:n}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&J1()?(this.animation.timeline=t,$e):n(this)}}const Qm={anticipate:Em,backInOut:Tm,circInOut:Pm};function iw(e){return e in Qm}function ow(e){typeof e.ease=="string"&&iw(e.ease)&&(e.ease=Qm[e.ease])}const Bs=10;class sw extends rw{constructor(t){ow(t),Wm(t),super(t),t.startTime!==void 0&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:r,onComplete:i,element:o,...s}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const a=new Nu({...s,autoplay:!1}),l=Math.max(Bs,Se.now()-this.startTime),c=dt(0,Bs,l-Bs);n.setWithVelocity(a.sample(Math.max(0,l-c)).value,a.sample(l).value,c),a.stop()}}const Pd=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Kt.test(e)||e==="0")&&!e.startsWith("url("));function aw(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function lw(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],s=Pd(i,t),a=Pd(o,t);return!s||!a?!1:aw(e)||(n==="spring"||Gm(n))&&r}function sl(e){e.duration=0,e.type="keyframes"}const uw=new Set(["opacity","clipPath","filter","transform"]),cw=xu(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function dw(e){var d;const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:o,type:s}=e;if(!(((d=t==null?void 0:t.owner)==null?void 0:d.current)instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=t.owner.getProps();return cw()&&n&&uw.has(n)&&(n!=="transform"||!c)&&!l&&!r&&i!=="mirror"&&o!==0&&s!=="inertia"}const fw=40;class hw extends _u{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s="loop",keyframes:a,name:l,motionValue:c,element:d,...f}){var y;super(),this.stop=()=>{var x,S;this._animation&&(this._animation.stop(),(x=this.stopTimeline)==null||x.call(this)),(S=this.keyframeResolver)==null||S.cancel()},this.createdAt=Se.now();const h={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:s,name:l,motionValue:c,element:d,...f},v=(d==null?void 0:d.KeyframeResolver)||Du;this.keyframeResolver=new v(a,(x,S,g)=>this.onKeyframesResolved(x,S,h,!g),l,c,d),(y=this.keyframeResolver)==null||y.scheduleResolve()}onKeyframesResolved(t,n,r,i){this.keyframeResolver=void 0;const{name:o,type:s,velocity:a,delay:l,isHandoff:c,onUpdate:d}=r;this.resolvedAt=Se.now(),lw(t,o,s,a)||((jt.instantAnimations||!l)&&(d==null||d(Pu(t,r,n))),t[0]=t[t.length-1],sl(r),r.repeat=0);const h={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>fw?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:t},v=!c&&dw(h)?new sw({...h,element:h.motionValue.owner.current}):new Nu(h);v.finished.then(()=>this.notifyFinished()).catch($e),this.pendingTimeline&&(this.stopTimeline=v.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=v}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),Q1()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}const pw=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function mw(e){const t=pw.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function Xm(e,t,n=1){const[r,i]=mw(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return vm(s)?parseFloat(s):s}return ju(i)?Xm(i,t,n+1):i}function Au(e,t){return(e==null?void 0:e[t])??(e==null?void 0:e.default)??e}const gw={type:"spring",stiffness:500,damping:25,restSpeed:10},vw=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),yw={type:"keyframes",duration:.8},xw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ww=(e,{keyframes:t})=>t.length>2?yw:ur.has(e)?e.startsWith("scale")?vw(t[1]):gw:xw;function kw({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:c,...d}){return!!Object.keys(d).length}const Sw=e=>e!==null;function jw(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(Sw),o=t&&n!=="loop"&&t%2===1?0:i.length-1;return i[o]}function qm(e,t,n,r=0,i=1){const o=Array.from(e).sort((c,d)=>c.sortNodePosition(d)).indexOf(t),s=e.size,a=(s-1)*r;return typeof n=="function"?n(o,s):i===1?o*r:a-o*r}const Mu=(e,t,n,r={},i,o)=>s=>{const a=Au(r,e)||{},l=a.delay||r.delay||0;let{elapsed:c=0}=r;c=c-yt(l);const d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-c,onUpdate:h=>{t.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:o?void 0:i};kw(a)||Object.assign(d,ww(e,d)),d.duration&&(d.duration=yt(d.duration)),d.repeatDelay&&(d.repeatDelay=yt(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(sl(d),d.delay===0&&(f=!0)),(jt.instantAnimations||jt.skipAnimations)&&(f=!0,sl(d),d.delay=0),d.allowFlatten=!a.type&&!a.ease,f&&!o&&t.get()!==void 0){const h=jw(d.keyframes,a);if(h!==void 0){U.update(()=>{d.onUpdate(h),d.onComplete()});return}}return a.isSync?new Nu(d):new hw(d)},Jm=new Set(["width","height","top","left","right","bottom",...lr]),_d=30,bw=e=>!isNaN(parseFloat(e));class Tw{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var o;const i=Se.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((o=this.events.change)==null||o.notify(this.current),this.dependents))for(const s of this.dependents)s.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Se.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=bw(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new wu);const r=this.events[t].add(n);return t==="change"?()=>{r(),U.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Se.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>_d)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,_d);return wm(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function tr(e,t){return new Tw(e,t)}function Nd(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Ru(e,t,n,r){if(typeof t=="function"){const[i,o]=Nd(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=Nd(r);t=t(n!==void 0?n:e.custom,i,o)}return t}function Kn(e,t,n){const r=e.getProps();return Ru(r,t,n!==void 0?n:r.custom,e)}const al=e=>Array.isArray(e);function Ew(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,tr(n))}function Cw(e){return al(e)?e[e.length-1]||0:e}function Pw(e,t){const n=Kn(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const s in o){const a=Cw(o[s]);Ew(e,s,a)}}const xe=e=>!!(e&&e.getVelocity);function _w(e){return!!(xe(e)&&e.add)}function ll(e,t){const n=e.getValue("willChange");if(_w(n))return n.add(t);if(!n&&jt.WillChange){const r=new jt.WillChange("auto");e.addValue("willChange",r),r.add(t)}}function Lu(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const Nw="framerAppearId",Zm="data-"+Lu(Nw);function eg(e){return e.props[Zm]}function Dw({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function tg(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:s,...a}=t;r&&(o=r);const l=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const d in a){const f=e.getValue(d,e.latestValues[d]??null),h=a[d];if(h===void 0||c&&Dw(c,d))continue;const v={delay:n,...Au(o||{},d)},y=f.get();if(y!==void 0&&!f.isAnimating&&!Array.isArray(h)&&h===y&&!v.velocity)continue;let x=!1;if(window.MotionHandoffAnimation){const g=eg(e);if(g){const m=window.MotionHandoffAnimation(g,d,U);m!==null&&(v.startTime=m,x=!0)}}ll(e,d),f.start(Mu(d,f,h,e.shouldReduceMotion&&Jm.has(d)?{type:!1}:v,e,x));const S=f.animation;S&&l.push(S)}return s&&Promise.all(l).then(()=>{U.update(()=>{s&&Pw(e,s)})}),l}function ul(e,t,n={}){var l;const r=Kn(e,t,n.type==="exit"?(l=e.presenceContext)==null?void 0:l.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(tg(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(c=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:h}=i;return Aw(e,t,c,d,f,h,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[c,d]=a==="beforeChildren"?[o,s]:[s,o];return c().then(()=>d())}else return Promise.all([o(),s(n.delay)])}function Aw(e,t,n=0,r=0,i=0,o=1,s){const a=[];for(const l of e.variantChildren)l.notify("AnimationStart",t),a.push(ul(l,t,{...s,delay:n+(typeof r=="function"?0:r)+qm(e.variantChildren,l,r,i,o)}).then(()=>l.notify("AnimationComplete",t)));return Promise.all(a)}function Mw(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>ul(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=ul(e,t,n);else{const i=typeof t=="function"?Kn(e,t,n.custom):t;r=Promise.all(tg(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const Rw={test:e=>e==="auto",parse:e=>e},ng=e=>t=>t.test(e),rg=[ar,_,ct,Et,a1,s1,Rw],Dd=e=>rg.find(ng(e));function Lw(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||xm(e):!0}const zw=new Set(["brightness","contrast","saturate","opacity"]);function Vw(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(bu)||[];if(!r)return e;const i=n.replace(r,"");let o=zw.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const Iw=/\b([a-z-]*)\(.*?\)/gu,cl={...Kt,getAnimatableNone:e=>{const t=e.match(Iw);return t?t.map(Vw).join(" "):e}},Ad={...ar,transform:Math.round},Fw={rotate:Et,rotateX:Et,rotateY:Et,rotateZ:Et,scale:Ui,scaleX:Ui,scaleY:Ui,scaleZ:Ui,skew:Et,skewX:Et,skewY:Et,distance:_,translateX:_,translateY:_,translateZ:_,x:_,y:_,z:_,perspective:_,transformPerspective:_,opacity:oi,originX:yd,originY:yd,originZ:_},zu={borderWidth:_,borderTopWidth:_,borderRightWidth:_,borderBottomWidth:_,borderLeftWidth:_,borderRadius:_,radius:_,borderTopLeftRadius:_,borderTopRightRadius:_,borderBottomRightRadius:_,borderBottomLeftRadius:_,width:_,maxWidth:_,height:_,maxHeight:_,top:_,right:_,bottom:_,left:_,inset:_,insetBlock:_,insetBlockStart:_,insetBlockEnd:_,insetInline:_,insetInlineStart:_,insetInlineEnd:_,padding:_,paddingTop:_,paddingRight:_,paddingBottom:_,paddingLeft:_,paddingBlock:_,paddingBlockStart:_,paddingBlockEnd:_,paddingInline:_,paddingInlineStart:_,paddingInlineEnd:_,margin:_,marginTop:_,marginRight:_,marginBottom:_,marginLeft:_,marginBlock:_,marginBlockStart:_,marginBlockEnd:_,marginInline:_,marginInlineStart:_,marginInlineEnd:_,backgroundPositionX:_,backgroundPositionY:_,...Fw,zIndex:Ad,fillOpacity:oi,strokeOpacity:oi,numOctaves:Ad},Ow={...zu,color:ne,backgroundColor:ne,outlineColor:ne,fill:ne,stroke:ne,borderColor:ne,borderTopColor:ne,borderRightColor:ne,borderBottomColor:ne,borderLeftColor:ne,filter:cl,WebkitFilter:cl},ig=e=>Ow[e];function og(e,t){let n=ig(e);return n!==cl&&(n=Kt),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Uw=new Set(["auto","none","0"]);function Bw(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!Uw.has(o)&&si(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=og(n,i)}class Ww extends Du{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let d=0;d<t.length;d++){let f=t[d];if(typeof f=="string"&&(f=f.trim(),ju(f))){const h=Xm(f,n.current);h!==void 0&&(t[d]=h),d===t.length-1&&(this.finalKeyframe=f)}}if(this.resolveNoneKeyframes(),!Jm.has(r)||t.length!==2)return;const[i,o]=t,s=Dd(i),a=Dd(o),l=vd(i),c=vd(o);if(l!==c&&Rt[r]){this.needsMeasurement=!0;return}if(s!==a)if(Ed(s)&&Ed(a))for(let d=0;d<t.length;d++){const f=t[d];typeof f=="string"&&(t[d]=parseFloat(f))}else Rt[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)(t[i]===null||Lw(t[i]))&&r.push(i);r.length&&Bw(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Rt[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var a;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const i=t.getValue(n);i&&i.jump(this.measuredOrigin,!1);const o=r.length-1,s=r[o];r[o]=Rt[n](t.measureViewportBox(),window.getComputedStyle(t.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,c])=>{t.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function Hw(e,t,n){if(e instanceof EventTarget)return[e];if(typeof e=="string"){let r=document;const i=(n==null?void 0:n[e])??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e)}const sg=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function ag(e){return ym(e)&&"offsetHeight"in e}const{schedule:Vu}=Dm(queueMicrotask,!1),qe={x:!1,y:!1};function lg(){return qe.x||qe.y}function $w(e){return e==="x"||e==="y"?qe[e]?null:(qe[e]=!0,()=>{qe[e]=!1}):qe.x||qe.y?null:(qe.x=qe.y=!0,()=>{qe.x=qe.y=!1})}function ug(e,t){const n=Hw(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function Md(e){return!(e.pointerType==="touch"||lg())}function Yw(e,t,n={}){const[r,i,o]=ug(e,n),s=a=>{if(!Md(a))return;const{target:l}=a,c=t(l,a);if(typeof c!="function"||!l)return;const d=f=>{Md(f)&&(c(f),l.removeEventListener("pointerleave",d))};l.addEventListener("pointerleave",d,i)};return r.forEach(a=>{a.addEventListener("pointerenter",s,i)}),o}const cg=(e,t)=>t?e===t?!0:cg(e,t.parentElement):!1,Iu=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,Kw=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function dg(e){return Kw.has(e.tagName)||e.isContentEditable===!0}const io=new WeakSet;function Rd(e){return t=>{t.key==="Enter"&&e(t)}}function Ws(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const Gw=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=Rd(()=>{if(io.has(n))return;Ws(n,"down");const i=Rd(()=>{Ws(n,"up")}),o=()=>Ws(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",o,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function Ld(e){return Iu(e)&&!lg()}function Qw(e,t,n={}){const[r,i,o]=ug(e,n),s=a=>{const l=a.currentTarget;if(!Ld(a))return;io.add(l);const c=t(l,a),d=(v,y)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",h),io.has(l)&&io.delete(l),Ld(v)&&typeof c=="function"&&c(v,{success:y})},f=v=>{d(v,l===window||l===document||n.useGlobalTarget||cg(l,v.target))},h=v=>{d(v,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",h,i)};return r.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",s,i),ag(a)&&(a.addEventListener("focus",c=>Gw(c,i)),!dg(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),o}function fg(e){return ym(e)&&"ownerSVGElement"in e}function Xw(e){return fg(e)&&e.tagName==="svg"}const qw=[...rg,ne,Kt],Jw=e=>qw.find(ng(e)),zd=()=>({translate:0,scale:1,origin:0,originPoint:0}),In=()=>({x:zd(),y:zd()}),Vd=()=>({min:0,max:0}),ie=()=>({x:Vd(),y:Vd()}),zo={current:null},Fu={current:!1},Zw=typeof window<"u";function hg(){if(Fu.current=!0,!!Zw)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>zo.current=e.matches;e.addEventListener("change",t),t()}else zo.current=!1}const ek=new WeakMap;function ss(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function ai(e){return typeof e=="string"||Array.isArray(e)}const Ou=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Uu=["initial",...Ou];function as(e){return ss(e.animate)||Uu.some(t=>ai(e[t]))}function pg(e){return!!(as(e)||e.variants)}function tk(e,t,n){for(const r in t){const i=t[r],o=n[r];if(xe(i))e.addValue(r,i);else if(xe(o))e.addValue(r,tr(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const s=e.getValue(r);s.liveStyle===!0?s.jump(i):s.hasAnimated||s.set(i)}else{const s=e.getStaticValue(r);e.addValue(r,tr(s!==void 0?s:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Id=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Vo={};function mg(e){Vo=e}function nk(){return Vo}class rk{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:s},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Du,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const h=Se.now();this.renderScheduledAt<h&&(this.renderScheduledAt=h,U.render(this.render,!1,!0))};const{latestValues:l,renderState:c}=s;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!o,this.isControllingVariants=as(n),this.isVariantNode=pg(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const h in f){const v=f[h];l[h]!==void 0&&xe(v)&&v.set(l[h])}}mount(t){var n;this.current=t,ek.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,i)=>this.bindToMotionValue(i,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Fu.current||hg(),this.shouldReduceMotion=zo.current),(n=this.parent)==null||n.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var t;this.projection&&this.projection.unmount(),Yt(this.notifyUpdate),Yt(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=ur.has(t);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&U.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let o;typeof window<"u"&&window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Vo){const n=Vo[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ie()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Id.length;r++){const i=Id[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,s=t[o];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=tk(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=tr(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(vm(r)||xm(r))?r=parseFloat(r):!Jw(r)&&Kt.test(n)&&(r=og(t,n)),this.setBaseTarget(t,xe(r)?r.get():r)),xe(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var o;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const s=Ru(this.props,n,(o=this.presenceContext)==null?void 0:o.custom);s&&(r=s[t])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!xe(i)?i:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new wu),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){Vu.render(this.render)}}class Zt{constructor(t){this.isMounted=!1,this.node=t}update(){}}class gg extends rk{constructor(){super(...arguments),this.KeyframeResolver=Ww}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const r=t.style;return r?r[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;xe(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function vg({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function ik({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function ok(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Hs(e){return e===void 0||e===1}function dl({scale:e,scaleX:t,scaleY:n}){return!Hs(e)||!Hs(t)||!Hs(n)}function an(e){return dl(e)||yg(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function yg(e){return Fd(e.x)||Fd(e.y)}function Fd(e){return e&&e!=="0%"}function Io(e,t,n){const r=e-n,i=t*r;return n+i}function Od(e,t,n,r,i){return i!==void 0&&(e=Io(e,i,r)),Io(e,n,r)+t}function fl(e,t=0,n=1,r,i){e.min=Od(e.min,t,n,r,i),e.max=Od(e.max,t,n,r,i)}function xg(e,{x:t,y:n}){fl(e.x,t.translate,t.scale,t.originPoint),fl(e.y,n.translate,n.scale,n.originPoint)}const Ud=.999999999999,Bd=1.0000000000001;function sk(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const{visualElement:l}=o.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&On(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,xg(e,s)),r&&an(o.latestValues)&&On(e,o.latestValues))}t.x<Bd&&t.x>Ud&&(t.x=1),t.y<Bd&&t.y>Ud&&(t.y=1)}function Fn(e,t){e.min=e.min+t,e.max=e.max+t}function Wd(e,t,n,r,i=.5){const o=$(e.min,e.max,i);fl(e,t,n,o,r)}function On(e,t){Wd(e.x,t.x,t.scaleX,t.scale,t.originX),Wd(e.y,t.y,t.scaleY,t.scale,t.originY)}function wg(e,t){return vg(ok(e.getBoundingClientRect(),t))}function ak(e,t,n){const r=wg(e,n),{scroll:i}=t;return i&&(Fn(r.x,i.offset.x),Fn(r.y,i.offset.y)),r}const lk={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},uk=lr.length;function ck(e,t,n){let r="",i=!0;for(let o=0;o<uk;o++){const s=lr[o],a=e[s];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(s.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=sg(a,zu[s]);if(!l){i=!1;const d=lk[s]||s;r+=`${d}(${c}) `}n&&(t[s]=c)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Bu(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let s=!1,a=!1;for(const l in t){const c=t[l];if(ur.has(l)){s=!0;continue}else if(Mm(l)){i[l]=c;continue}else{const d=sg(c,zu[l]);l.startsWith("origin")?(a=!0,o[l]=d):r[l]=d}}if(t.transform||(s||n?r.transform=ck(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:d=0}=o;r.transformOrigin=`${l} ${c} ${d}`}}function kg(e,{style:t,vars:n},r,i){const o=e.style;let s;for(s in t)o[s]=t[s];i==null||i.applyProjectionStyles(o,r);for(s in n)o.setProperty(s,n[s])}function Hd(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const xr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(_.test(e))e=parseFloat(e);else return e;const n=Hd(e,t.target.x),r=Hd(e,t.target.y);return`${n}% ${r}%`}},dk={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Kt.parse(e);if(i.length>5)return r;const o=Kt.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=l;const c=$(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=c),typeof i[3+s]=="number"&&(i[3+s]/=c),o(i)}},hl={borderRadius:{...xr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:xr,borderTopRightRadius:xr,borderBottomLeftRadius:xr,borderBottomRightRadius:xr,boxShadow:dk};function Sg(e,{layout:t,layoutId:n}){return ur.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!hl[e]||e==="opacity")}function Wu(e,t,n){var s;const r=e.style,i=t==null?void 0:t.style,o={};if(!r)return o;for(const a in r)(xe(r[a])||i&&xe(i[a])||Sg(a,e)||((s=n==null?void 0:n.getValue(a))==null?void 0:s.liveStyle)!==void 0)&&(o[a]=r[a]);return o}function fk(e){return window.getComputedStyle(e)}class hk extends gg{constructor(){super(...arguments),this.type="html",this.renderInstance=kg}readValueFromInstance(t,n){var r;if(ur.has(n))return(r=this.projection)!=null&&r.isProjecting?tl(n):H1(t,n);{const i=fk(t),o=(Mm(n)?i.getPropertyValue(n):i[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return wg(t,n)}build(t,n,r){Bu(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Wu(t,n,r)}}const pk={offset:"stroke-dashoffset",array:"stroke-dasharray"},mk={offset:"strokeDashoffset",array:"strokeDasharray"};function gk(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?pk:mk;e[o.offset]=_.transform(-r);const s=_.transform(t),a=_.transform(n);e[o.array]=`${s} ${a}`}const vk=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function jg(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:o=1,pathOffset:s=0,...a},l,c,d){if(Bu(e,a,c),l){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:f,style:h}=e;f.transform&&(h.transform=f.transform,delete f.transform),(h.transform||f.transformOrigin)&&(h.transformOrigin=f.transformOrigin??"50% 50%",delete f.transformOrigin),h.transform&&(h.transformBox=(d==null?void 0:d.transformBox)??"fill-box",delete f.transformBox);for(const v of vk)f[v]!==void 0&&(h[v]=f[v],delete f[v]);t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),i!==void 0&&gk(f,i,o,s,!1)}const bg=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Tg=e=>typeof e=="string"&&e.toLowerCase()==="svg";function yk(e,t,n,r){kg(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(bg.has(i)?i:Lu(i),t.attrs[i])}function Eg(e,t,n){const r=Wu(e,t,n);for(const i in e)if(xe(e[i])||xe(t[i])){const o=lr.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}class xk extends gg{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ie}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(ur.has(n)){const r=ig(n);return r&&r.default||0}return n=bg.has(n)?n:Lu(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Eg(t,n,r)}build(t,n,r){jg(t,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(t,n,r,i){yk(t,n,r,i)}mount(t){this.isSVGTag=Tg(t.tagName),super.mount(t)}}const wk=Uu.length;function Cg(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Cg(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<wk;n++){const r=Uu[n],i=e.props[r];(ai(i)||i===!1)&&(t[r]=i)}return t}function Pg(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const kk=[...Ou].reverse(),Sk=Ou.length;function jk(e){return t=>Promise.all(t.map(({animation:n,options:r})=>Mw(e,n,r)))}function bk(e){let t=jk(e),n=$d(),r=!0;const i=l=>(c,d)=>{var h;const f=Kn(e,d,l==="exit"?(h=e.presenceContext)==null?void 0:h.custom:void 0);if(f){const{transition:v,transitionEnd:y,...x}=f;c={...c,...x,...y}}return c};function o(l){t=l(e)}function s(l){const{props:c}=e,d=Cg(e.parent)||{},f=[],h=new Set;let v={},y=1/0;for(let S=0;S<Sk;S++){const g=kk[S],m=n[g],p=c[g]!==void 0?c[g]:d[g],k=ai(p),j=g===l?m.isActive:null;j===!1&&(y=S);let T=p===d[g]&&p!==c[g]&&k;if(T&&r&&e.manuallyAnimateOnMount&&(T=!1),m.protectedKeys={...v},!m.isActive&&j===null||!p&&!m.prevProp||ss(p)||typeof p=="boolean")continue;const E=Tk(m.prevProp,p);let b=E||g===l&&m.isActive&&!T&&k||S>y&&k,R=!1;const D=Array.isArray(p)?p:[p];let q=D.reduce(i(g),{});j===!1&&(q={});const{prevResolvedValues:it={}}=m,en={...it,...q},cr=J=>{b=!0,h.has(J)&&(R=!0,h.delete(J)),m.needsAnimating[J]=!0;const P=e.getValue(J);P&&(P.liveStyle=!1)};for(const J in en){const P=q[J],A=it[J];if(v.hasOwnProperty(J))continue;let M=!1;al(P)&&al(A)?M=!Pg(P,A):M=P!==A,M?P!=null?cr(J):h.add(J):P!==void 0&&h.has(J)?cr(J):m.protectedKeys[J]=!0}m.prevProp=p,m.prevResolvedValues=q,m.isActive&&(v={...v,...q}),r&&e.blockInitialAnimation&&(b=!1);const xi=T&&E;b&&(!xi||R)&&f.push(...D.map(J=>{const P={type:g};if(typeof J=="string"&&r&&!xi&&e.manuallyAnimateOnMount&&e.parent){const{parent:A}=e,M=Kn(A,J);if(A.enteringChildren&&M){const{delayChildren:W}=M.transition||{};P.delay=qm(A.enteringChildren,e,W)}}return{animation:J,options:P}}))}if(h.size){const S={};if(typeof c.initial!="boolean"){const g=Kn(e,Array.isArray(c.initial)?c.initial[0]:c.initial);g&&g.transition&&(S.transition=g.transition)}h.forEach(g=>{const m=e.getBaseTarget(g),p=e.getValue(g);p&&(p.liveStyle=!0),S[g]=m??null}),f.push({animation:S})}let x=!!f.length;return r&&(c.initial===!1||c.initial===c.animate)&&!e.manuallyAnimateOnMount&&(x=!1),r=!1,x?t(f):Promise.resolve()}function a(l,c){var f;if(n[l].isActive===c)return Promise.resolve();(f=e.variantChildren)==null||f.forEach(h=>{var v;return(v=h.animationState)==null?void 0:v.setActive(l,c)}),n[l].isActive=c;const d=s(l);for(const h in n)n[h].protectedKeys={};return d}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n,reset:()=>{n=$d()}}}function Tk(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Pg(t,e):!1}function rn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function $d(){return{animate:rn(!0),whileInView:rn(),whileHover:rn(),whileTap:rn(),whileDrag:rn(),whileFocus:rn(),exit:rn()}}const _g=1e-4,Ek=1-_g,Ck=1+_g,Ng=.01,Pk=0-Ng,_k=0+Ng;function je(e){return e.max-e.min}function Nk(e,t,n){return Math.abs(e-t)<=n}function Yd(e,t,n,r=.5){e.origin=r,e.originPoint=$(t.min,t.max,e.origin),e.scale=je(n)/je(t),e.translate=$(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Ek&&e.scale<=Ck||isNaN(e.scale))&&(e.scale=1),(e.translate>=Pk&&e.translate<=_k||isNaN(e.translate))&&(e.translate=0)}function Vr(e,t,n,r){Yd(e.x,t.x,n.x,r?r.originX:void 0),Yd(e.y,t.y,n.y,r?r.originY:void 0)}function Kd(e,t,n){e.min=n.min+t.min,e.max=e.min+je(t)}function Dk(e,t,n){Kd(e.x,t.x,n.x),Kd(e.y,t.y,n.y)}function Gd(e,t,n){e.min=t.min-n.min,e.max=e.min+je(t)}function Fo(e,t,n){Gd(e.x,t.x,n.x),Gd(e.y,t.y,n.y)}function Qd(e,t,n,r,i){return e-=t,e=Io(e,1/n,r),i!==void 0&&(e=Io(e,1/i,r)),e}function Ak(e,t=0,n=1,r=.5,i,o=e,s=e){if(ct.test(t)&&(t=parseFloat(t),t=$(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=$(o.min,o.max,r);e===o&&(a-=t),e.min=Qd(e.min,t,n,a,i),e.max=Qd(e.max,t,n,a,i)}function Xd(e,t,[n,r,i],o,s){Ak(e,t[n],t[r],t[i],t.scale,o,s)}const Mk=["x","scaleX","originX"],Rk=["y","scaleY","originY"];function qd(e,t,n,r){Xd(e.x,t,Mk,n?n.x:void 0,r?r.x:void 0),Xd(e.y,t,Rk,n?n.y:void 0,r?r.y:void 0)}function Jd(e,t){e.min=t.min,e.max=t.max}function Xe(e,t){Jd(e.x,t.x),Jd(e.y,t.y)}function Zd(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function ef(e){return e.translate===0&&e.scale===1}function Dg(e){return ef(e.x)&&ef(e.y)}function tf(e,t){return e.min===t.min&&e.max===t.max}function Lk(e,t){return tf(e.x,t.x)&&tf(e.y,t.y)}function nf(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Ag(e,t){return nf(e.x,t.x)&&nf(e.y,t.y)}function rf(e){return je(e.x)/je(e.y)}function of(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Fe(e){return[e("x"),e("y")]}function zk(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((i||o||s)&&(r=`translate3d(${i}px, ${o}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:c,rotate:d,rotateX:f,rotateY:h,skewX:v,skewY:y}=n;c&&(r=`perspective(${c}px) ${r}`),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotateX(${f}deg) `),h&&(r+=`rotateY(${h}deg) `),v&&(r+=`skewX(${v}deg) `),y&&(r+=`skewY(${y}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const Mg=["TopLeft","TopRight","BottomLeft","BottomRight"],Vk=Mg.length,sf=e=>typeof e=="string"?parseFloat(e):e,af=e=>typeof e=="number"||_.test(e);function Ik(e,t,n,r,i,o){i?(e.opacity=$(0,n.opacity??1,Fk(r)),e.opacityExit=$(t.opacity??1,0,Ok(r))):o&&(e.opacity=$(t.opacity??1,n.opacity??1,r));for(let s=0;s<Vk;s++){const a=`border${Mg[s]}Radius`;let l=lf(t,a),c=lf(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||af(l)===af(c)?(e[a]=Math.max($(sf(l),sf(c),r),0),(ct.test(c)||ct.test(l))&&(e[a]+="%")):e[a]=c}(t.rotate||n.rotate)&&(e.rotate=$(t.rotate||0,n.rotate||0,r))}function lf(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Fk=Rg(0,.5,Cm),Ok=Rg(.5,.95,$e);function Rg(e,t,n){return r=>r<e?0:r>t?1:n(ii(e,t,r))}function Uk(e,t){const n=Se.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Yt(r),e(o-t))};return U.setup(r,!0),()=>Yt(r)}function li(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function oo(e){return xe(e)?e.get():e}function Bk(e,t,n){const r=xe(e)?e:tr(e);return r.start(Mu("",r,t,n)),r.animation}const Wk=(e,t)=>e.depth-t.depth;class Hk{constructor(){this.children=[],this.isDirty=!1}add(t){gu(this.children,t),this.isDirty=!0}remove(t){vu(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Wk),this.isDirty=!1,this.children.forEach(t)}}class $k{constructor(){this.members=[]}add(t){gu(this.members,t),t.scheduleRender()}remove(t){if(vu(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const so={hasAnimatedSinceResize:!0,hasEverUpdated:!1},$s=["","X","Y","Z"],Yk=1e3;let Kk=0;function Ys(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Lg(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=eg(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",U,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Lg(r)}function zg({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=Kk++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Xk),this.nodes.forEach(e2),this.nodes.forEach(t2),this.nodes.forEach(qk)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Hk)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new wu),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s){if(this.instance)return;this.isSVG=fg(s)&&!Xw(s),this.instance=s;const{layoutId:a,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),e){let d,f=0;const h=()=>this.root.updateBlockedByResize=!1;U.read(()=>{f=window.innerWidth}),e(s,()=>{const v=window.innerWidth;v!==f&&(f=v,this.root.updateBlockedByResize=!0,d&&d(),d=Uk(h,250),so.hasAnimatedSinceResize&&(so.hasAnimatedSinceResize=!1,this.nodes.forEach(df)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&c&&(a||l)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeLayoutChanged:h,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||c.getDefaultTransition()||s2,{onLayoutAnimationStart:x,onLayoutAnimationComplete:S}=c.getProps(),g=!this.targetLayout||!Ag(this.targetLayout,v),m=!f&&h;if(this.options.layoutRoot||this.resumeFrom||m||f&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const p={...Au(y,"layout"),onPlay:x,onComplete:S};(c.shouldReduceMotion||this.options.layoutRoot)&&(p.delay=0,p.type=!1),this.startAnimation(p),this.setAnimationOrigin(d,m)}else f||df(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Yt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(n2),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Lg(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(uf);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(cf);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Zk),this.nodes.forEach(Gk),this.nodes.forEach(Qk)):this.nodes.forEach(cf),this.clearAllSnapshots();const a=Se.now();he.delta=dt(0,1e3/60,a-he.timestamp),he.timestamp=a,he.isProcessing=!0,Vs.update.process(he),Vs.preRender.process(he),Vs.render.process(he),he.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Vu.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Jk),this.sharedNodes.forEach(r2)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,U.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){U.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!je(this.snapshot.measuredBox.x)&&!je(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=ie(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&this.instance){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!Dg(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,d=c!==this.prevTransformTemplateValue;s&&this.instance&&(a||an(this.latestValues)||d)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),a2(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:s}=this.options;if(!s)return ie();const a=s.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(l2))){const{scroll:d}=this.root;d&&(Fn(a.x,d.offset.x),Fn(a.y,d.offset.y))}return a}removeElementScroll(s){var l;const a=ie();if(Xe(a,s),(l=this.scroll)!=null&&l.wasRoot)return a;for(let c=0;c<this.path.length;c++){const d=this.path[c],{scroll:f,options:h}=d;d!==this.root&&f&&h.layoutScroll&&(f.wasRoot&&Xe(a,s),Fn(a.x,f.offset.x),Fn(a.y,f.offset.y))}return a}applyTransform(s,a=!1){const l=ie();Xe(l,s);for(let c=0;c<this.path.length;c++){const d=this.path[c];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&On(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),an(d.latestValues)&&On(l,d.latestValues)}return an(this.latestValues)&&On(l,this.latestValues),l}removeTransform(s){const a=ie();Xe(a,s);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!an(c.latestValues))continue;dl(c.latestValues)&&c.updateSnapshot();const d=ie(),f=c.measurePageBox();Xe(d,f),qd(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,d)}return an(this.latestValues)&&qd(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==he.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var v;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(s||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(v=this.parent)!=null&&v.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:f}=this.options;if(!this.layout||!(d||f))return;this.resolvedRelativeTargetAt=he.timestamp;const h=this.getClosestProjectingParent();h&&this.linkedParentVersion!==h.layoutVersion&&!h.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(h&&h.layout?this.createRelativeTarget(h,this.layout.layoutBox,h.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ie(),this.targetWithTransforms=ie()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Dk(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Xe(this.target,this.layout.layoutBox),xg(this.target,this.targetDelta)):Xe(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?this.createRelativeTarget(h,this.target,h.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||dl(this.parent.latestValues)||yg(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(s,a,l){this.relativeParent=s,this.linkedParentVersion=s.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ie(),this.relativeTargetOrigin=ie(),Fo(this.relativeTargetOrigin,a,l),Xe(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var y;const s=this.getLead(),a=!!this.resumingFrom||this!==s;let l=!0;if((this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===he.timestamp&&(l=!1),l)return;const{layout:c,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||d))return;Xe(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,h=this.treeScale.y;sk(this.layoutCorrected,this.treeScale,this.path,a),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=ie());const{target:v}=s;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Zd(this.prevProjectionDelta.x,this.projectionDelta.x),Zd(this.prevProjectionDelta.y,this.projectionDelta.y)),Vr(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==h||!of(this.projectionDelta.x,this.prevProjectionDelta.x)||!of(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),s){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=In(),this.projectionDelta=In(),this.projectionDeltaWithTransform=In()}setAnimationOrigin(s,a=!1){const l=this.snapshot,c=l?l.latestValues:{},d={...this.latestValues},f=In();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=ie(),v=l?l.source:void 0,y=this.layout?this.layout.source:void 0,x=v!==y,S=this.getStack(),g=!S||S.members.length<=1,m=!!(x&&!g&&this.options.crossfade===!0&&!this.path.some(o2));this.animationProgress=0;let p;this.mixTargetDelta=k=>{const j=k/1e3;ff(f.x,s.x,j),ff(f.y,s.y,j),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Fo(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),i2(this.relativeTarget,this.relativeTargetOrigin,h,j),p&&Lk(this.relativeTarget,p)&&(this.isProjectionDirty=!1),p||(p=ie()),Xe(p,this.relativeTarget)),x&&(this.animationValues=d,Ik(d,c,this.latestValues,j,m,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=j},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){var a,l,c;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(c=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||c.stop(),this.pendingAnimation&&(Yt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=U.update(()=>{so.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=tr(0)),this.currentAnimation=Bk(this.motionValue,[0,1e3],{...s,velocity:0,isSync:!0,onUpdate:d=>{this.mixTargetDelta(d),s.onUpdate&&s.onUpdate(d)},onStop:()=>{},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Yk),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:d}=s;if(!(!a||!l||!c)){if(this!==s&&this.layout&&c&&Vg(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||ie();const f=je(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+f;const h=je(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+h}Xe(a,l),On(a,d),Vr(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new $k),this.sharedNodes.get(s).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var a;const{layoutId:s}=this.options;return s?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:s}=this.options;return s?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Ys("z",s,c,this.animationValues);for(let d=0;d<$s.length;d++)Ys(`rotate${$s[d]}`,s,c,this.animationValues),Ys(`skew${$s[d]}`,s,c,this.animationValues);s.render();for(const d in c)s.setStaticValue(d,c[d]),this.animationValues&&(this.animationValues[d]=c[d]);s.scheduleRender()}applyProjectionStyles(s,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){s.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,s.visibility="",s.opacity="",s.pointerEvents=oo(a==null?void 0:a.pointerEvents)||"",s.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(s.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,s.pointerEvents=oo(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!an(this.latestValues)&&(s.transform=l?l({},""):"none",this.hasProjected=!1);return}s.visibility="";const d=c.animationValues||c.latestValues;this.applyTransformsToTarget();let f=zk(this.projectionDeltaWithTransform,this.treeScale,d);l&&(f=l(d,f)),s.transform=f;const{x:h,y:v}=this.projectionDelta;s.transformOrigin=`${h.origin*100}% ${v.origin*100}% 0`,c.animationValues?s.opacity=c===this?d.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:s.opacity=c===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const y in hl){if(d[y]===void 0)continue;const{correct:x,applyTo:S,isCSSVariable:g}=hl[y],m=f==="none"?d[y]:x(d[y],c);if(S){const p=S.length;for(let k=0;k<p;k++)s[S[k]]=m}else g?this.options.visualElement.renderState.vars[y]=m:s[y]=m}this.options.layoutId&&(s.pointerEvents=c===this?oo(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(uf),this.root.sharedNodes.clear()}}}function Gk(e){e.updateLayout()}function Qk(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=t.source!==e.layout.source;o==="size"?Fe(f=>{const h=s?t.measuredBox[f]:t.layoutBox[f],v=je(h);h.min=r[f].min,h.max=h.min+v}):Vg(o,t.layoutBox,r)&&Fe(f=>{const h=s?t.measuredBox[f]:t.layoutBox[f],v=je(r[f]);h.max=h.min+v,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+v)});const a=In();Vr(a,r,t.layoutBox);const l=In();s?Vr(l,e.applyTransform(i,!0),t.measuredBox):Vr(l,r,t.layoutBox);const c=!Dg(a);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:h,layout:v}=f;if(h&&v){const y=ie();Fo(y,t.layoutBox,h.layoutBox);const x=ie();Fo(x,r,v.layoutBox),Ag(y,x)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=y,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeLayoutChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function Xk(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function qk(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Jk(e){e.clearSnapshot()}function uf(e){e.clearMeasurements()}function cf(e){e.isLayoutDirty=!1}function Zk(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function df(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function e2(e){e.resolveTargetDelta()}function t2(e){e.calcProjection()}function n2(e){e.resetSkewAndRotation()}function r2(e){e.removeLeadSnapshot()}function ff(e,t,n){e.translate=$(t.translate,0,n),e.scale=$(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function hf(e,t,n,r){e.min=$(t.min,n.min,r),e.max=$(t.max,n.max,r)}function i2(e,t,n,r){hf(e.x,t.x,n.x,r),hf(e.y,t.y,n.y,r)}function o2(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const s2={duration:.45,ease:[.4,0,.1,1]},pf=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),mf=pf("applewebkit/")&&!pf("chrome/")?Math.round:$e;function gf(e){e.min=mf(e.min),e.max=mf(e.max)}function a2(e){gf(e.x),gf(e.y)}function Vg(e,t,n){return e==="position"||e==="preserve-aspect"&&!Nk(rf(t),rf(n),.2)}function l2(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const u2=zg({attachResizeListener:(e,t)=>li(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ks={current:void 0},Ig=zg({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Ks.current){const e=new u2({});e.mount(window),e.setOptions({layoutScroll:!0}),Ks.current=e}return Ks.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Hu=w.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function vf(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function c2(...e){return t=>{let n=!1;const r=e.map(i=>{const o=vf(i,t);return!n&&typeof o=="function"&&(n=!0),o});if(n)return()=>{for(let i=0;i<r.length;i++){const o=r[i];typeof o=="function"?o():vf(e[i],null)}}}}function d2(...e){return w.useCallback(c2(...e),e)}class f2 extends w.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=n.offsetParent,i=ag(r)&&r.offsetWidth||0,o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft,o.right=i-o.width-o.left}return null}componentDidUpdate(){}render(){return this.props.children}}function h2({children:e,isPresent:t,anchorX:n,root:r}){var d;const i=w.useId(),o=w.useRef(null),s=w.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:a}=w.useContext(Hu),l=((d=e.props)==null?void 0:d.ref)??(e==null?void 0:e.ref),c=d2(o,l);return w.useInsertionEffect(()=>{const{width:f,height:h,top:v,left:y,right:x}=s.current;if(t||!o.current||!f||!h)return;const S=n==="left"?`left: ${y}`:`right: ${x}`;o.current.dataset.motionPopId=i;const g=document.createElement("style");a&&(g.nonce=a);const m=r??document.head;return m.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${h}px !important;
            ${S}px !important;
            top: ${v}px !important;
          }
        `),()=>{m.contains(g)&&m.removeChild(g)}},[t]),u.jsx(f2,{isPresent:t,childRef:o,sizeRef:s,children:w.cloneElement(e,{ref:c})})}const p2=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s,anchorX:a,root:l})=>{const c=mu(m2),d=w.useId();let f=!0,h=w.useMemo(()=>(f=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:v=>{c.set(v,!0);for(const y of c.values())if(!y)return;r&&r()},register:v=>(c.set(v,!1),()=>c.delete(v))}),[n,c,r]);return o&&f&&(h={...h}),w.useMemo(()=>{c.forEach((v,y)=>c.set(y,!1))},[n]),w.useEffect(()=>{!n&&!c.size&&r&&r()},[n]),s==="popLayout"&&(e=u.jsx(h2,{isPresent:n,anchorX:a,root:l,children:e})),u.jsx(os.Provider,{value:h,children:e})};function m2(){return new Map}function Fg(e=!0){const t=w.useContext(os);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=w.useId();w.useEffect(()=>{if(e)return i(o)},[e]);const s=w.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,s]:[!0]}const Bi=e=>e.key||"";function yf(e){const t=[];return w.Children.forEach(e,n=>{w.isValidElement(n)&&t.push(n)}),t}const Og=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:o="sync",propagate:s=!1,anchorX:a="left",root:l})=>{const[c,d]=Fg(s),f=w.useMemo(()=>yf(e),[e]),h=s&&!c?[]:f.map(Bi),v=w.useRef(!0),y=w.useRef(f),x=mu(()=>new Map),S=w.useRef(new Set),[g,m]=w.useState(f),[p,k]=w.useState(f);gm(()=>{v.current=!1,y.current=f;for(let E=0;E<p.length;E++){const b=Bi(p[E]);h.includes(b)?(x.delete(b),S.current.delete(b)):x.get(b)!==!0&&x.set(b,!1)}},[p,h.length,h.join("-")]);const j=[];if(f!==g){let E=[...f];for(let b=0;b<p.length;b++){const R=p[b],D=Bi(R);h.includes(D)||(E.splice(b,0,R),j.push(R))}return o==="wait"&&j.length&&(E=j),k(yf(E)),m(f),null}const{forceRender:T}=w.useContext(pu);return u.jsx(u.Fragment,{children:p.map(E=>{const b=Bi(E),R=s&&!c?!1:f===p||h.includes(b),D=()=>{if(S.current.has(b))return;if(S.current.add(b),x.has(b))x.set(b,!0);else return;let q=!0;x.forEach(it=>{it||(q=!1)}),q&&(T==null||T(),k(y.current),s&&(d==null||d()),r&&r())};return u.jsx(p2,{isPresent:R,initial:!v.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:o,root:l,onExitComplete:R?void 0:D,anchorX:a,children:E},b)})})},Ug=w.createContext({strict:!1}),xf={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let wf=!1;function g2(){if(wf)return;const e={};for(const t in xf)e[t]={isEnabled:n=>xf[t].some(r=>!!n[r])};mg(e),wf=!0}function Bg(){return g2(),nk()}function v2(e){const t=Bg();for(const n in e)t[n]={...t[n],...e[n]};mg(t)}const y2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Oo(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||y2.has(e)}let Wg=e=>!Oo(e);function x2(e){typeof e=="function"&&(Wg=t=>t.startsWith("on")?!Oo(t):e(t))}try{x2(require("@emotion/is-prop-valid").default)}catch{}function w2(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Wg(i)||n===!0&&Oo(i)||!t&&!Oo(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}const ls=w.createContext({});function k2(e,t){if(as(e)){const{initial:n,animate:r}=e;return{initial:n===!1||ai(n)?n:void 0,animate:ai(r)?r:void 0}}return e.inherit!==!1?t:{}}function S2(e){const{initial:t,animate:n}=k2(e,w.useContext(ls));return w.useMemo(()=>({initial:t,animate:n}),[kf(t),kf(n)])}function kf(e){return Array.isArray(e)?e.join(" "):e}const $u=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Hg(e,t,n){for(const r in t)!xe(t[r])&&!Sg(r,n)&&(e[r]=t[r])}function j2({transformTemplate:e},t){return w.useMemo(()=>{const n=$u();return Bu(n,t,e),Object.assign({},n.vars,n.style)},[t])}function b2(e,t){const n=e.style||{},r={};return Hg(r,n,e),Object.assign(r,j2(e,t)),r}function T2(e,t){const n={},r=b2(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const $g=()=>({...$u(),attrs:{}});function E2(e,t,n,r){const i=w.useMemo(()=>{const o=$g();return jg(o,t,Tg(r),e.transformTemplate,e.style),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};Hg(o,e.style,e),i.style={...o,...i.style}}return i}const C2=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Yu(e){return typeof e!="string"||e.includes("-")?!1:!!(C2.indexOf(e)>-1||/[A-Z]/u.test(e))}function P2(e,t,n,{latestValues:r},i,o=!1,s){const l=(s??Yu(e)?E2:T2)(t,r,i,e),c=w2(t,typeof e=="string",o),d=e!==w.Fragment?{...c,...l,ref:n}:{},{children:f}=t,h=w.useMemo(()=>xe(f)?f.get():f,[f]);return w.createElement(e,{...d,children:h})}function _2({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:N2(n,r,i,e),renderState:t()}}function N2(e,t,n,r){const i={},o=r(e,{});for(const h in o)i[h]=oo(o[h]);let{initial:s,animate:a}=e;const l=as(e),c=pg(e);t&&c&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let d=n?n.initial===!1:!1;d=d||s===!1;const f=d?a:s;if(f&&typeof f!="boolean"&&!ss(f)){const h=Array.isArray(f)?f:[f];for(let v=0;v<h.length;v++){const y=Ru(e,h[v]);if(y){const{transitionEnd:x,transition:S,...g}=y;for(const m in g){let p=g[m];if(Array.isArray(p)){const k=d?p.length-1:0;p=p[k]}p!==null&&(i[m]=p)}for(const m in x)i[m]=x[m]}}}return i}const Yg=e=>(t,n)=>{const r=w.useContext(ls),i=w.useContext(os),o=()=>_2(e,t,r,i);return n?o():mu(o)},D2=Yg({scrapeMotionValuesFromProps:Wu,createRenderState:$u}),A2=Yg({scrapeMotionValuesFromProps:Eg,createRenderState:$g}),M2=Symbol.for("motionComponentSymbol");function R2(e,t,n){const r=w.useRef(n);w.useInsertionEffect(()=>{r.current=n});const i=w.useRef(null);return w.useCallback(o=>{var a;o&&((a=e.onMount)==null||a.call(e,o)),t&&(o?t.mount(o):t.unmount());const s=r.current;if(typeof s=="function")if(o){const l=s(o);typeof l=="function"&&(i.current=l)}else i.current?(i.current(),i.current=null):s(o);else s&&(s.current=o)},[t])}const Kg=w.createContext({});function Tr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function L2(e,t,n,r,i,o){var S,g;const{visualElement:s}=w.useContext(ls),a=w.useContext(Ug),l=w.useContext(os),c=w.useContext(Hu).reducedMotion,d=w.useRef(null);r=r||a.renderer,!d.current&&r&&(d.current=r(e,{visualState:t,parent:s,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:c,isSVG:o}));const f=d.current,h=w.useContext(Kg);f&&!f.projection&&i&&(f.type==="html"||f.type==="svg")&&z2(d.current,n,i,h);const v=w.useRef(!1);w.useInsertionEffect(()=>{f&&v.current&&f.update(n,l)});const y=n[Zm],x=w.useRef(!!y&&!((S=window.MotionHandoffIsComplete)!=null&&S.call(window,y))&&((g=window.MotionHasOptimisedAnimation)==null?void 0:g.call(window,y)));return gm(()=>{f&&(v.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),f.scheduleRenderMicrotask(),x.current&&f.animationState&&f.animationState.animateChanges())}),w.useEffect(()=>{f&&(!x.current&&f.animationState&&f.animationState.animateChanges(),x.current&&(queueMicrotask(()=>{var m;(m=window.MotionHandoffMarkAsComplete)==null||m.call(window,y)}),x.current=!1),f.enteringChildren=void 0)}),f}function z2(e,t,n,r){const{layoutId:i,layout:o,drag:s,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Gg(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!s||a&&Tr(a),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,crossfade:d,layoutScroll:l,layoutRoot:c})}function Gg(e){if(e)return e.options.allowProjection!==!1?e.projection:Gg(e.parent)}function Gs(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&v2(r);const o=n?n==="svg":Yu(e),s=o?A2:D2;function a(c,d){let f;const h={...w.useContext(Hu),...c,layoutId:V2(c)},{isStatic:v}=h,y=S2(c),x=s(c,v);if(!v&&mm){I2();const S=F2(h);f=S.MeasureLayout,y.visualElement=L2(e,x,h,i,S.ProjectionNode,o)}return u.jsxs(ls.Provider,{value:y,children:[f&&y.visualElement?u.jsx(f,{visualElement:y.visualElement,...h}):null,P2(e,c,R2(x,y.visualElement,d),x,v,t,o)]})}a.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const l=w.forwardRef(a);return l[M2]=e,l}function V2({layoutId:e}){const t=w.useContext(pu).id;return t&&e!==void 0?t+"-"+e:e}function I2(e,t){w.useContext(Ug).strict}function F2(e){const t=Bg(),{drag:n,layout:r}=t;if(!n&&!r)return{};const i={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(e)||r!=null&&r.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function O2(e,t){if(typeof Proxy>"u")return Gs;const n=new Map,r=(o,s)=>Gs(o,s,e,t),i=(o,s)=>r(o,s);return new Proxy(i,{get:(o,s)=>s==="create"?r:(n.has(s)||n.set(s,Gs(s,void 0,e,t)),n.get(s))})}const U2=(e,t)=>t.isSVG??Yu(e)?new xk(t):new hk(t,{allowProjection:e!==w.Fragment});class B2 extends Zt{constructor(t){super(t),t.animationState||(t.animationState=bk(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();ss(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let W2=0;class H2 extends Zt{constructor(){super(...arguments),this.id=W2++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const $2={animation:{Feature:B2},exit:{Feature:H2}};function yi(e){return{point:{x:e.pageX,y:e.pageY}}}const Y2=e=>t=>Iu(t)&&e(t,yi(t));function Ir(e,t,n,r){return li(e,t,Y2(n),r)}const Qg=({current:e})=>e?e.ownerDocument.defaultView:null,Sf=(e,t)=>Math.abs(e-t);function K2(e,t){const n=Sf(e.x,t.x),r=Sf(e.y,t.y);return Math.sqrt(n**2+r**2)}const jf=new Set(["auto","scroll"]);class Xg{constructor(t,n,{transformPagePoint:r,contextWindow:i=window,dragSnapToOrigin:o=!1,distanceThreshold:s=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=v=>{this.handleScroll(v.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Xs(this.lastMoveEventInfo,this.history),y=this.startEvent!==null,x=K2(v.offset,{x:0,y:0})>=this.distanceThreshold;if(!y&&!x)return;const{point:S}=v,{timestamp:g}=he;this.history.push({...S,timestamp:g});const{onStart:m,onMove:p}=this.handlers;y||(m&&m(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),p&&p(this.lastMoveEvent,v)},this.handlePointerMove=(v,y)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=Qs(y,this.transformPagePoint),U.update(this.updatePoint,!0)},this.handlePointerUp=(v,y)=>{this.end();const{onEnd:x,onSessionEnd:S,resumeAnimation:g}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&g&&g(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=Xs(v.type==="pointercancel"?this.lastMoveEventInfo:Qs(y,this.transformPagePoint),this.history);this.startEvent&&x&&x(v,m),S&&S(v,m)},!Iu(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=s,this.contextWindow=i||window;const l=yi(t),c=Qs(l,this.transformPagePoint),{point:d}=c,{timestamp:f}=he;this.history=[{...d,timestamp:f}];const{onSessionStart:h}=n;h&&h(t,Xs(c,this.history)),this.removeListeners=mi(Ir(this.contextWindow,"pointermove",this.handlePointerMove),Ir(this.contextWindow,"pointerup",this.handlePointerUp),Ir(this.contextWindow,"pointercancel",this.handlePointerUp)),a&&this.startScrollTracking(a)}startScrollTracking(t){let n=t.parentElement;for(;n;){const r=getComputedStyle(n);(jf.has(r.overflowX)||jf.has(r.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const r=t===window,i=r?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},o={x:i.x-n.x,y:i.y-n.y};o.x===0&&o.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=o.x,this.lastMoveEventInfo.point.y+=o.y):this.history.length>0&&(this.history[0].x-=o.x,this.history[0].y-=o.y),this.scrollPositions.set(t,i),U.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Yt(this.updatePoint)}}function Qs(e,t){return t?{point:t(e.point)}:e}function bf(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Xs({point:e},t){return{point:e,delta:bf(e,qg(t)),offset:bf(e,G2(t)),velocity:Q2(t,.1)}}function G2(e){return e[0]}function qg(e){return e[e.length-1]}function Q2(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=qg(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>yt(t)));)n--;if(!r)return{x:0,y:0};const o=We(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function X2(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?$(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?$(n,e,r.max):Math.min(e,n)),e}function Tf(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function q2(e,{top:t,left:n,bottom:r,right:i}){return{x:Tf(e.x,n,i),y:Tf(e.y,t,r)}}function Ef(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function J2(e,t){return{x:Ef(e.x,t.x),y:Ef(e.y,t.y)}}function Z2(e,t){let n=.5;const r=je(e),i=je(t);return i>r?n=ii(t.min,t.max-r,e.min):r>i&&(n=ii(e.min,e.max-i,t.min)),dt(0,1,n)}function eS(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const pl=.35;function tS(e=pl){return e===!1?e=0:e===!0&&(e=pl),{x:Cf(e,"left","right"),y:Cf(e,"top","bottom")}}function Cf(e,t,n){return{min:Pf(e,t),max:Pf(e,n)}}function Pf(e,t){return typeof e=="number"?e:e[t]||0}const nS=new WeakMap;class rS{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ie(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const o=f=>{n?(this.stopAnimation(),this.snapToCursor(yi(f).point)):this.pauseAnimation()},s=(f,h)=>{this.stopAnimation();const{drag:v,dragPropagation:y,onDragStart:x}=this.getProps();if(v&&!y&&(this.openDragLock&&this.openDragLock(),this.openDragLock=$w(v),!this.openDragLock))return;this.latestPointerEvent=f,this.latestPanInfo=h,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Fe(g=>{let m=this.getAxisMotionValue(g).get()||0;if(ct.test(m)){const{projection:p}=this.visualElement;if(p&&p.layout){const k=p.layout.layoutBox[g];k&&(m=je(k)*(parseFloat(m)/100))}}this.originPoint[g]=m}),x&&U.postRender(()=>x(f,h)),ll(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},a=(f,h)=>{this.latestPointerEvent=f,this.latestPanInfo=h;const{dragPropagation:v,dragDirectionLock:y,onDirectionLock:x,onDrag:S}=this.getProps();if(!v&&!this.openDragLock)return;const{offset:g}=h;if(y&&this.currentDirection===null){this.currentDirection=iS(g),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",h.point,g),this.updateAxis("y",h.point,g),this.visualElement.render(),S&&S(f,h)},l=(f,h)=>{this.latestPointerEvent=f,this.latestPanInfo=h,this.stop(f,h),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>Fe(f=>{var h;return this.getAnimationState(f)==="paused"&&((h=this.getAxisMotionValue(f).animation)==null?void 0:h.play())}),{dragSnapToOrigin:d}=this.getProps();this.panSession=new Xg(t,{onSessionStart:o,onStart:s,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,distanceThreshold:r,contextWindow:Qg(this.visualElement),element:this.visualElement.current})}stop(t,n){const r=t||this.latestPointerEvent,i=n||this.latestPanInfo,o=this.isDragging;if(this.cancel(),!o||!i||!r)return;const{velocity:s}=i;this.startAnimation(s);const{onDragEnd:a}=this.getProps();a&&U.postRender(()=>a(r,i))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Wi(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=X2(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var o;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(o=this.visualElement.projection)==null?void 0:o.layout,i=this.constraints;t&&Tr(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=q2(r.layoutBox,t):this.constraints=!1,this.elastic=tS(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Fe(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=eS(r.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Tr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=ak(r,i.root,this.visualElement.getTransformPagePoint());let s=J2(i.layout.layoutBox,o);if(n){const a=n(ik(s));this.hasMutatedConstraints=!!a,a&&(s=vg(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Fe(d=>{if(!Wi(d,n,this.currentDirection))return;let f=l&&l[d]||{};s&&(f={min:0,max:0});const h=i?200:1e6,v=i?40:1e7,y={type:"inertia",velocity:r?t[d]:0,bounceStiffness:h,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...o,...f};return this.startAxisValueAnimation(d,y)});return Promise.all(c).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return ll(this.visualElement,t),r.start(Mu(t,r,0,n,this.visualElement,!1))}stopAnimation(){Fe(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Fe(t=>{var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Fe(n=>{const{drag:r}=this.getProps();if(!Wi(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n],l=o.get()||0;o.set(t[n]-$(s,a,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Tr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Fe(s=>{const a=this.getAxisMotionValue(s);if(a&&this.constraints!==!1){const l=a.get();i[s]=Z2({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Fe(s=>{if(!Wi(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:c}=this.constraints[s];a.set($(l,c,i[s]))})}addListeners(){if(!this.visualElement.current)return;nS.set(this.visualElement,this);const t=this.visualElement.current,n=Ir(t,"pointerdown",l=>{const{drag:c,dragListener:d=!0}=this.getProps();c&&d&&!dg(l.target)&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Tr(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),U.read(r);const s=li(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Fe(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=l[d].translate,f.set(f.get()+l[d].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=pl,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function Wi(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function iS(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class oS extends Zt{constructor(t){super(t),this.removeGroupControls=$e,this.removeListeners=$e,this.controls=new rS(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||$e}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners()}}const _f=e=>(t,n)=>{e&&U.postRender(()=>e(t,n))};class sS extends Zt{constructor(){super(...arguments),this.removePointerDownListener=$e}onPointerDown(t){this.session=new Xg(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Qg(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:_f(t),onStart:_f(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&U.postRender(()=>i(o,s))}}}mount(){this.removePointerDownListener=Ir(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let qs=!1;class aS extends w.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),qs&&o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),so.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,{projection:s}=r;return s&&(s.isPresent=o,qs=!0,i||t.layoutDependency!==n||n===void 0||t.isPresent!==o?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||U.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Vu.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;qs=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Jg(e){const[t,n]=Fg(),r=w.useContext(pu);return u.jsx(aS,{...e,layoutGroup:r,switchLayoutGroup:w.useContext(Kg),isPresent:t,safeToRemove:n})}const lS={pan:{Feature:sS},drag:{Feature:oS,ProjectionNode:Ig,MeasureLayout:Jg}};function Nf(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,o=r[i];o&&U.postRender(()=>o(t,yi(t)))}class uS extends Zt{mount(){const{current:t}=this.node;t&&(this.unmount=Yw(t,(n,r)=>(Nf(this.node,r,"Start"),i=>Nf(this.node,i,"End"))))}unmount(){}}class cS extends Zt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=mi(li(this.node.current,"focus",()=>this.onFocus()),li(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Df(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),o=r[i];o&&U.postRender(()=>o(t,yi(t)))}class dS extends Zt{mount(){const{current:t}=this.node;t&&(this.unmount=Qw(t,(n,r)=>(Df(this.node,r,"Start"),(i,{success:o})=>Df(this.node,i,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const ml=new WeakMap,Js=new WeakMap,fS=e=>{const t=ml.get(e.target);t&&t(e)},hS=e=>{e.forEach(fS)};function pS({root:e,...t}){const n=e||document;Js.has(n)||Js.set(n,{});const r=Js.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(hS,{root:e,...t})),r[i]}function mS(e,t,n){const r=pS(t);return ml.set(e,n),r.observe(e),()=>{ml.delete(e),r.unobserve(e)}}const gS={some:0,all:1};class vS extends Zt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:gS[i]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,o&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),h=c?d:f;h&&h(l)};return mS(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(yS(t,n))&&this.startObserver()}unmount(){}}function yS({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const xS={inView:{Feature:vS},tap:{Feature:dS},focus:{Feature:cS},hover:{Feature:uS}},wS={layout:{ProjectionNode:Ig,MeasureLayout:Jg}},kS={...$2,...xS,...lS,...wS},ee=O2(kS,U2);function Ge(){!Fu.current&&hg();const[e]=w.useState(zo.current);return e}/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),jS=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),Af=e=>{const t=jS(e);return t.charAt(0).toUpperCase()+t.slice(1)},Zg=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim(),bS=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var TS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=w.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:s,...a},l)=>w.createElement("svg",{ref:l,...TS,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Zg("lucide",i),...!o&&!bS(a)&&{"aria-hidden":"true"},...a},[...s.map(([c,d])=>w.createElement(c,d)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=(e,t)=>{const n=w.forwardRef(({className:r,...i},o)=>w.createElement(ES,{ref:o,iconNode:t,className:Zg(`lucide-${SS(Af(e))}`,`lucide-${e}`,r),...i}));return n.displayName=Af(e),n};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Ku=X("arrow-left",CS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],ui=X("arrow-right",PS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],NS=X("bell",_S);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],AS=X("calendar-days",DS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],RS=X("calendar",MS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],zS=X("circle-check-big",LS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=[["path",{d:"M12 6v6h4",key:"135r8i"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],IS=X("clock-3",VS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],OS=X("code",FS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Gu=X("external-link",US);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],WS=X("facebook",BS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],e0=X("instagram",HS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],YS=X("linkedin",$S);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],t0=X("mail",KS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],QS=X("map-pin",GS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],qS=X("menu",XS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],n0=X("mic",JS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]],ej=X("music-2",ZS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tj=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],nj=X("panels-top-left",tj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rj=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]],r0=X("ticket",rj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ij=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],i0=X("twitter",ij);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oj=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Uo=X("users",oj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sj=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],aj=X("x",sj),Qu="/assets/logo_red-Cuc5EyMY.png",o0="tedxwushs-language",Zs="ja",s0=new Set(["ja","en"]),lj={ja:{description:"TEDxWUSHS Youthは、早稲田大学高等学院の生徒が独立して企画・運営する、日本語と英語のバイリンガルTEDxイベントです。Ideas change everything.",locale:"ja_JP"},en:{description:"TEDxWUSHS Youth is an independently organized, bilingual Japanese-English TEDx event led by students of Waseda University Senior High School. Ideas change everything.",locale:"en_US"}},a0=w.createContext(void 0),uj=()=>{if(typeof window>"u")return Zs;try{const e=window.localStorage.getItem(o0);return s0.has(e)?e:Zs}catch{return Zs}},Hi=(e,t)=>{const n=document.querySelector(e);n&&n.setAttribute("content",t)},cj=({children:e})=>{const[t,n]=w.useState(uj),r=w.useCallback(o=>{s0.has(o)&&n(o)},[]);w.useEffect(()=>{document.documentElement.lang=t;try{window.localStorage.setItem(o0,t)}catch{}const o=lj[t];Hi('meta[name="description"]',o.description),Hi('meta[property="og:description"]',o.description),Hi('meta[property="og:locale"]',o.locale),Hi('meta[property="twitter:description"]',o.description)},[t]);const i=w.useMemo(()=>({language:t,setLanguage:r}),[t,r]);return u.jsx(a0.Provider,{value:i,children:e})},de=()=>{const e=w.useContext(a0);if(!e)throw new Error("useLanguage must be used within a LanguageProvider.");return e},dj={ja:{group:"表示言語",ja:"日本語で表示",en:"英語で表示"},en:{group:"Display language",ja:"Show in Japanese",en:"Show in English"}},fj=()=>{const{language:e,setLanguage:t}=de(),n=dj[e],r=()=>t(e==="ja"?"en":"ja"),i=e==="ja"?"現在は日本語です。英語に切り替える":"Currently displayed in English. Switch to Japanese";return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"language-switcher language-switcher--desktop",role:"group","aria-label":n.group,children:[u.jsx("button",{type:"button",className:`language-option ${e==="ja"?"active":""}`,"aria-label":n.ja,"aria-pressed":e==="ja",onClick:()=>t("ja"),children:"JA"}),u.jsx("span",{className:"language-divider","aria-hidden":"true",children:"/"}),u.jsx("button",{type:"button",className:`language-option ${e==="en"?"active":""}`,"aria-label":n.en,"aria-pressed":e==="en",onClick:()=>t("en"),children:"EN"})]}),u.jsxs("button",{type:"button",className:"language-toggle-mobile","aria-label":i,onClick:r,children:[u.jsx("span",{className:`language-toggle-code ${e==="ja"?"active":""}`,"aria-hidden":"true",children:"JA"}),u.jsx("span",{className:"language-toggle-divider","aria-hidden":"true",children:"/"}),u.jsx("span",{className:`language-toggle-code ${e==="en"?"active":""}`,"aria-hidden":"true",children:"EN"})]}),u.jsx("style",{children:`
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
      `})]})},hj=()=>{const[e,t]=w.useState(!1),[n,r]=w.useState(!1),i=jn(),{language:o}=de(),s=Ge(),a=w.useRef(null),l=w.useRef(null),c=w.useRef(null),d=w.useRef(null),f=w.useRef(!1),h=w.useRef(!1),v=w.useRef(i.pathname),y=w.useRef(!1);v.current=i.pathname,w.useEffect(()=>{const p=()=>{y.current||t(window.scrollY>50)};return window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)},[]);const x=[{name:"Home",href:"/"},{name:"Program",href:"/program"},{name:"Speakers",href:"/speakers"},{name:"Team",href:"/team"},{name:"About",href:"/about"},{name:"Join Us",href:"/join-us"},{name:"FAQ",href:"/faq"}],S=p=>p==="/"?i.pathname==="/":i.pathname===p||i.pathname.startsWith(`${p}/`);w.useEffect(()=>{f.current=!1,r(!1)},[i.pathname]),w.useEffect(()=>{var p,k;if(n){const j=window.requestAnimationFrame(()=>{var T;(T=d.current)==null||T.focus({preventScroll:!0})});return()=>window.cancelAnimationFrame(j)}h.current?(h.current=!1,(p=l.current??a.current)==null||p.focus()):f.current&&(f.current=!1,(k=c.current)==null||k.focus())},[n]),w.useEffect(()=>{if(!n)return;const p=document.body,k=document.documentElement,j=i.pathname,T=window.scrollY,E={position:p.style.position,top:p.style.top,left:p.style.left,width:p.style.width,overflow:p.style.overflow},b=k.style.overflow;return y.current=!0,k.style.overflow="hidden",p.style.position="fixed",p.style.top=`-${T}px`,p.style.left="0",p.style.width="100%",p.style.overflow="hidden",()=>{k.style.overflow=b,p.style.position=E.position,p.style.top=E.top,p.style.left=E.left,p.style.width=E.width,p.style.overflow=E.overflow,y.current=!1,v.current===j?(window.scrollTo({top:T,left:0,behavior:"auto"}),t(T>50)):(window.scrollTo({top:0,left:0,behavior:"auto"}),t(!1))}},[n,i.pathname]),w.useEffect(()=>{const p=window.matchMedia("(min-width: 901px)"),k=j=>{if(!j.matches||!n)return;const T=document.getElementById("mobile-navigation"),E=document.activeElement;h.current=(T==null?void 0:T.contains(E))||c.current===E,f.current=!1,r(!1)};return k(p),typeof p.addEventListener=="function"?(p.addEventListener("change",k),()=>p.removeEventListener("change",k)):(p.addListener(k),()=>p.removeListener(k))},[n]),w.useEffect(()=>{if(!n)return;const p=k=>{k.key==="Escape"&&(f.current=!0,r(!1))};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[n]);const g=()=>{n&&(f.current=!0),r(p=>!p)},m=p=>{f.current=i.pathname===p,r(!1)};return u.jsxs(u.Fragment,{children:[u.jsx("a",{href:"#main-content",className:"skip-link",children:o==="ja"?"本文へ移動":"Skip to main content"}),u.jsxs("header",{className:`header ${e?"scrolled":""}`,children:[u.jsxs("div",{className:"container header-content",children:[u.jsx(ue,{ref:a,to:"/",className:"logo-container",children:u.jsx("img",{src:Qu,alt:"TEDxWUSHS Youth",className:"header-logo"})}),u.jsxs("div",{className:"header-actions",children:[u.jsx("nav",{className:"desktop-nav","aria-label":o==="ja"?"メインナビゲーション":"Primary navigation",children:u.jsx("ul",{lang:"en",children:x.map(p=>u.jsx("li",{children:u.jsx(ue,{to:p.href,ref:S(p.href)?l:void 0,className:S(p.href)?"active":"","aria-current":i.pathname===p.href?"page":void 0,children:p.name})},p.name))})}),u.jsx("button",{type:"button",ref:c,className:"mobile-menu-btn","aria-label":n?o==="ja"?"メニューを閉じる":"Close menu":o==="ja"?"メニューを開く":"Open menu","aria-expanded":n,"aria-controls":"mobile-navigation",onClick:g,children:n?u.jsx(aj,{size:28,"aria-hidden":"true"}):u.jsx(qS,{size:28,"aria-hidden":"true"})}),u.jsx(fj,{})]})]}),u.jsx(Og,{children:n&&u.jsx(ee.nav,{id:"mobile-navigation",className:"mobile-menu","aria-label":o==="ja"?"モバイルナビゲーション":"Mobile navigation",initial:s?!1:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:s?{opacity:1,y:0}:{opacity:0,y:-20},transition:s?{duration:0}:{duration:.2},children:u.jsx("ul",{lang:"en",children:x.map((p,k)=>u.jsx("li",{children:u.jsx(ue,{to:p.href,ref:k===0?d:void 0,onClick:()=>m(p.href),className:S(p.href)?"active-mobile":"","aria-current":i.pathname===p.href?"page":void 0,children:p.name})},p.name))})})}),u.jsx("style",{children:`
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
      `})]})]})},pj=()=>{const e=new Date().getFullYear();return u.jsxs("footer",{id:"footer",className:"footer",lang:"en",children:[u.jsxs("div",{className:"container footer-content",children:[u.jsxs("div",{className:"footer-top",children:[u.jsxs("div",{className:"footer-brand",children:[u.jsx(ue,{className:"footer-brand-link",to:"/",children:u.jsx("img",{src:Qu,alt:"TEDxWUSHS Youth",className:"footer-logo"})}),u.jsx("p",{className:"footer-tagline",children:"This independent TEDx event is operated under license from TED."})]}),u.jsxs("nav",{className:"footer-links","aria-labelledby":"footer-quick-links-heading",children:[u.jsx("h4",{id:"footer-quick-links-heading",children:"Quick Links"}),u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx(ue,{to:"/program",children:"Program"})}),u.jsx("li",{children:u.jsx(ue,{to:"/speakers",children:"Speakers"})}),u.jsx("li",{children:u.jsx(ue,{to:"/team",children:"Team"})}),u.jsx("li",{children:u.jsx(ue,{to:"/about",children:"About Us"})}),u.jsx("li",{children:u.jsx("a",{href:"https://www.waseda.jp/school/shs/",target:"_blank",rel:"noopener noreferrer",children:"Waseda SHS"})}),u.jsx("li",{children:u.jsx("a",{href:"https://www.ted.com/about/programs-initiatives/tedx-program",target:"_blank",rel:"noopener noreferrer",children:"TEDx Program"})})]})]}),u.jsxs("div",{className:"footer-social",children:[u.jsx("h4",{children:"Connect"}),u.jsxs("div",{className:"social-icons",children:[u.jsx("a",{href:"https://www.instagram.com/tedxwushs/",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:u.jsx(e0,{size:24,"aria-hidden":"true"})}),u.jsx("a",{href:"https://x.com/TEDxWUSHS",target:"_blank",rel:"noopener noreferrer","aria-label":"X (Twitter)",children:u.jsx(i0,{size:24,"aria-hidden":"true"})}),u.jsx("a",{href:"https://note.com/tedx_wushs_youth",target:"_blank",rel:"noopener noreferrer","aria-label":"TEDxWUSHS Youth on note",title:"note",children:u.jsx("span",{className:"note-wordmark","aria-hidden":"true",children:"note"})}),u.jsx("a",{href:"mailto:tedxwushs@gmail.com","aria-label":"Email",children:u.jsx(t0,{size:24,"aria-hidden":"true"})})]}),u.jsx("p",{className:"footer-handle",children:"@TEDxWUSHS"}),u.jsx("a",{className:"footer-email",href:"mailto:tedxwushs@gmail.com",children:"tedxwushs@gmail.com"})]})]}),u.jsx("div",{className:"footer-bottom",children:u.jsxs("p",{children:["© ",e," TEDxWUSHS Youth. All Rights Reserved."]})})]}),u.jsx("style",{children:`
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
      `})]})},mj="/assets/poster-DnR2-vAa.png",gj={ja:{description:"早稲田大学高等学院の生徒が独立して企画・運営するTEDxイベント。アイデアには、すべてを変える力がある。その可能性を高等学院から。",eventLabel:"開催情報",date:"2026年10月31日（土）",reception:"受付開始 13:30",venue:"早稲田大学高等学院 講堂",posterAlt:"TEDxWUSHS Youth「Ideas change everything.」イベントポスター",programAction:"イベント詳細",applicationAction:"応募フォーム"},en:{description:"TEDxWUSHS Youth is an independently organized TEDx event led by students at Waseda University Senior High School. From our school, we explore the power of ideas to change everything.",eventLabel:"Program details",date:"Saturday, October 31, 2026",reception:"Doors open 1:30 PM",venue:"Waseda University Senior High School Auditorium",posterAlt:"TEDxWUSHS Youth event poster: Ideas change everything.",programAction:"Event Details",applicationAction:"Application Form"}},vj=()=>{const{language:e}=de(),t=Ge(),n=gj[e];return u.jsxs("section",{className:"hero",children:[u.jsxs("div",{className:"container hero-container",children:[u.jsxs(ee.div,{className:"hero-content",initial:t?!1:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:t?0:.8},children:[u.jsxs(ee.span,{className:"hero-tagline",lang:"en",initial:t?!1:{opacity:0},animate:{opacity:1},transition:t?{duration:0}:{delay:.5},children:[u.jsx("span",{className:"brand-name",children:"TEDxWUSHS Youth"})," · Waseda University Senior High School"]}),u.jsxs("h1",{className:"hero-title",lang:"en",children:["Ideas change ",u.jsx("br",{})," ",u.jsx("span",{className:"highlight-red",children:"everything."})]}),u.jsx("p",{className:"hero-description",children:n.description}),u.jsxs("div",{className:"hero-event-details",role:"group","aria-label":n.eventLabel,children:[u.jsxs("div",{className:"hero-event-detail",children:[u.jsx(AS,{size:22,"aria-hidden":"true"}),u.jsxs("div",{children:[u.jsx("span",{lang:"en",children:"Date"}),u.jsx("time",{dateTime:"2026-10-31",children:u.jsx("strong",{children:n.date})})]})]}),u.jsxs("div",{className:"hero-event-detail",children:[u.jsx(IS,{size:22,"aria-hidden":"true"}),u.jsxs("div",{children:[u.jsx("span",{lang:"en",children:"Time"}),u.jsx("strong",{children:"14:00～18:00"}),u.jsx("small",{children:n.reception})]})]}),u.jsxs("div",{className:"hero-event-detail",children:[u.jsx(QS,{size:22,"aria-hidden":"true"}),u.jsxs("div",{children:[u.jsx("span",{lang:"en",children:"Venue"}),u.jsx("strong",{children:n.venue})]})]})]}),u.jsxs("div",{className:"hero-cta",children:[u.jsx(ue,{to:"/program",className:"btn btn-primary",children:n.programAction}),u.jsx(ue,{to:"/join-us/audience",className:"btn btn-outline",children:n.applicationAction})]})]}),u.jsx(ee.div,{className:"hero-visual",initial:t?!1:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:t?0:1,ease:"easeOut"},children:u.jsxs("div",{className:"poster-container",children:[u.jsx("img",{src:mj,alt:n.posterAlt,className:"hero-poster"}),u.jsx("div",{className:"poster-glow","aria-hidden":"true"})]})})]}),u.jsx("style",{children:`
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
      `})]})},Mf="/assets/gakuinsai-BWIVjSAN.png",Xu="https://docs.google.com/forms/d/e/1FAIpQLScgIJmzQPqA0wPBogA5n2a7ObTGbCNzBIzN5oXXrNjf-BlYSg/viewform?usp=sharing&ouid=100328861093802403857",yj=[{id:"audience-registration-open",publishedAt:"2026-10-01",category:"Registration",href:Xu,external:!0,copy:{ja:{title:"オーディエンス募集を開始しました",summary:"TEDxWUSHS Youth 2026のオーディエンス募集を開始しました。対象は早稲田大学高等学院の生徒及びその保護者です。",action:"参加を申し込む"},en:{title:"Audience registration is now open",summary:"Audience registration for TEDxWUSHS Youth 2026 is now open to students of Waseda University Senior High School and their parents or guardians.",action:"Apply to attend"}}},{id:"gakuinsai-2026-program",publishedAt:"2026-09-30",category:"Event",href:Mf,external:!0,image:Mf,imageAlt:{ja:"TEDxWUSHS Youth学院祭企画「English Debate」のポスター",en:"Poster for the TEDxWUSHS Youth English Debate program at Gakuinsai 2026"},copy:{ja:{title:"学院祭で英語ディベート企画を実施します",summary:"10月10日（土）・11日（日）、学院祭のゼミ室2でTEDxWUSHS Youthの団体紹介を行います。頌栄女子学院高等学校・慶應義塾高等学校・早稲田大学本庄高等学院ESSと、社会奉仕・所得税・友情と恋愛を論題に英語で議論します。",action:"ポスターを拡大して見る"},en:{title:"English debates at Gakuinsai 2026",summary:"On October 10 and 11 in Seminar Room 2, we will introduce TEDxWUSHS Youth and hold philosophical English debates with Shoei Girls’ Senior High School, Keio Senior High School, and Waseda University Honjo Senior High School ESS on community service, income tax, and friendship versus romantic relationships.",action:"View the full poster"}}},{id:"official-note-launched",publishedAt:"2026-09-30",category:"note",href:"https://note.com/tedx_wushs_youth/n/n01e4f29a9fca",external:!0,copy:{ja:{title:"公式noteを更新しました",summary:"公式noteで「TEDxWUSHS Youth 公式note始めました！」を公開しました。今後、活動やイベントに関する情報を発信していきます。",action:"noteの記事を読む"},en:{title:"Official note updated",summary:"We published “TEDxWUSHS Youth 公式note始めました！” and will share more updates about our activities and the event.",action:"Read on note"}}},{id:"full-speaker-lineup-announced",publishedAt:"2026-09-29",category:"Speakers",href:"/speakers",copy:{ja:{title:"全登壇者のプロフィールを公開しました",summary:"TEDxWUSHS Youth 2026に登壇する全7名のスピーカー情報を公開しました。",action:"全登壇者を見る"},en:{title:"Full speaker lineup announced",summary:"Profiles for all seven TEDxWUSHS Youth 2026 speakers are now available.",action:"View the full lineup"}}},{id:"speaker-information-update",publishedAt:"2026-09-27",category:"Speakers",href:"/speakers",copy:{ja:{title:"スピーカー情報を更新しました",summary:"TEDxWUSHS Youth 2026に登壇するスピーカーのプロフィールと講演情報を更新しました。",action:"スピーカー情報を見る"},en:{title:"Speaker information updated",summary:"We have updated the profiles and talk information for the TEDxWUSHS Youth 2026 speakers.",action:"View speakers"}}}],Rf={ja:{eyebrow:"Newsroom",titleLead:"Latest",titleAccent:"Updates",description:"TEDxWUSHS Youthの開催準備や登壇者に関する最新情報をお知らせします。",listLabel:"TEDxWUSHS Youthの更新情報"},en:{eyebrow:"Newsroom",titleLead:"Latest",titleAccent:"Updates",description:"The latest announcements about TEDxWUSHS Youth, our speakers, and event preparations.",listLabel:"TEDxWUSHS Youth updates"}},xj=e=>e.replaceAll("-","."),wj=()=>{const{language:e}=de(),t=Ge(),n=Rf[e]??Rf.ja,r=[...yj].sort((i,o)=>o.publishedAt.localeCompare(i.publishedAt));return u.jsxs("section",{className:"updates section-padding","aria-labelledby":"updates-heading",children:[u.jsxs("div",{className:"container",children:[u.jsxs(ee.header,{className:"updates-header",initial:t?!1:{opacity:0,y:20},whileInView:t?void 0:{opacity:1,y:0},viewport:{once:!0},transition:{duration:t?0:.6},children:[u.jsxs("div",{children:[u.jsx("p",{className:"updates-eyebrow",lang:"en",children:n.eyebrow}),u.jsxs("h2",{id:"updates-heading",className:"updates-title",lang:"en",children:[n.titleLead," ",u.jsx("span",{className:"highlight-red",children:n.titleAccent})]})]}),u.jsx("p",{className:"updates-description",children:n.description})]}),u.jsx("ol",{className:"updates-list","aria-label":n.listLabel,children:r.map((i,o)=>{var h,v;const s=i.copy[e]??i.copy.ja,a=((h=i.imageAlt)==null?void 0:h[e])??((v=i.imageAlt)==null?void 0:v.ja)??"",l=i.external?"a":ue,c=i.external?{href:i.href,target:"_blank",rel:"noopener noreferrer"}:{to:i.href},d=i.external?Gu:ui,f=e==="en"?" (opens in a new tab)":"（新しいタブで開きます）";return u.jsx(ee.li,{initial:t?!1:{opacity:0,y:16},whileInView:t?void 0:{opacity:1,y:0},viewport:{once:!0},transition:{duration:t?0:.5,delay:t?0:o*.08},children:u.jsxs(l,{className:`updates-item${i.image?" updates-item--with-image":""}`,"aria-label":`${s.action}: ${s.title}${i.external?f:""}`,...c,children:[i.image&&u.jsx("span",{className:"updates-item-media",children:u.jsx("img",{src:i.image,alt:a,loading:"lazy",decoding:"async"})}),u.jsxs("div",{className:"updates-item-body",children:[u.jsxs("div",{className:"updates-meta",children:[u.jsx("time",{dateTime:i.publishedAt,lang:"en",children:xj(i.publishedAt)}),u.jsx("span",{lang:"en",children:i.category})]}),u.jsx("h3",{children:s.title}),u.jsx("p",{children:s.summary}),u.jsx("span",{className:"updates-action",children:s.action})]}),u.jsx("span",{className:"updates-arrow","aria-hidden":"true",children:u.jsx(d,{size:22})})]})},i.id)})})]}),u.jsx("style",{children:`
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
      `})]})},kj={ja:{programLink:"TEDxプログラムについて詳しく見る",descriptions:["TEDxWUSHS Youthは、早稲田大学高等学院の生徒が独立して企画・運営するTEDxイベントです。若者ならではの視点とパッションを武器に、高校生という枠を超えた、社会に響くメッセージを発信します。私たちは、対話を通じて互いの可能性を広げ、新しい一歩を踏み出すきっかけを作ります。","TEDxは、地域で自主的に運営されるイベントを通じて、人々がTEDのような体験を共有するためのプログラムです。TEDxWUSHS Youthでは、TED Talksの映像と7名のライブスピーカーによるトークを組み合わせ、対話とつながりを生み出します。","2026年のテーマは「Breakshot」。人生の軌道を変えた一打をテーマに、7名のスピーカーがそれぞれのアイデアを共有します。"],venue:"早稲田大学高等学院 講堂"},en:{programLink:"Learn more about the TEDx program",descriptions:["TEDxWUSHS Youth is an independently organized TEDx event conceived and produced by students at Waseda University Senior High School. Drawing on the perspectives and passion unique to young people, we share messages that reach beyond the boundaries of high school. Through dialogue, we aim to expand one another’s possibilities and inspire a first step toward change.","TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. TEDxWUSHS Youth combines TED Talks video with talks from seven live speakers to spark discussion and connection.","Our 2026 theme is “Breakshot.” Seven speakers will share the ideas and defining moments that changed the course of their lives."],venue:"Waseda University Senior High School Auditorium"}},Sj=()=>{const{language:e}=de(),t=Ge(),n=kj[e];return u.jsxs("section",{id:"about",className:"about section-padding",children:[u.jsx("div",{className:"container",children:u.jsx("div",{className:"about-grid",children:u.jsxs(ee.div,{className:"about-item about-item--combined",initial:t?!1:{opacity:0,y:30},whileInView:t?void 0:{opacity:1,y:0},viewport:{once:!0},transition:{duration:t?0:.6},children:[u.jsx("h2",{className:"about-logo-heading",children:u.jsx("img",{src:Qu,alt:"TEDxWUSHS Youth",className:"about-logo"})}),u.jsx("div",{className:"about-description",children:n.descriptions.map(r=>u.jsx("p",{children:r},r))}),u.jsxs("a",{href:"https://www.ted.com/about/programs-initiatives/tedx-program",target:"_blank",rel:"noopener noreferrer",className:"highlight-link program-link",children:[n.programLink," ↗"]}),u.jsxs("p",{className:"event-info",children:[u.jsx("strong",{lang:"en",children:"Date:"})," ",u.jsx("span",{lang:"en",children:"October 31, 2026 (14:00 - 18:00 / Reception 13:30)"}),u.jsx("br",{}),u.jsx("strong",{lang:"en",children:"Venue:"})," ",u.jsx("a",{href:"https://www.waseda.jp/school/shs/",target:"_blank",rel:"noopener noreferrer",className:"highlight-link",children:n.venue}),", ",u.jsx("span",{lang:"en",children:"Nerima, Tokyo"})]})]})})}),u.jsx("style",{children:`
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
      `})]})},jj="/assets/enomoto-takayuki-DNGDHC06.jpg",bj="/assets/hasegawa-keisuke-DYSgj9AY.jpg",Tj="/assets/reon-hiruma-CtjqnzZU.jpg",Ej="/assets/horise-yoshito-BMWy-myU.jpg",Cj="/assets/kogure-masahisa-jgnY9mTV.jpg",Pj="/assets/kuroki-yuto-H_vlZVz7.jpg",_j="/assets/takezawa-mamoru-CgZku-6Z.jpg",l0=[{id:"enomoto-takayuki",displayOrder:10,published:!0,featured:!0,image:jj,imagePosition:"50% 42%",name:{ja:"榎本 隆之",en:"Takayuki Enomoto"},role:{ja:"早稲田大学高等学院 国語科教員",en:"Japanese Language Educator, Waseda University Senior High School"},shortBio:{ja:"国語科指導、国際交流・芸術プログラムを通して、グローバルな文脈に造詣のある高校生の育成を目指している。",en:"A Japanese language educator with experience in textbook editing, international exchange initiatives, and comparative teacher education."},intro:{ja:["1964年生まれ。中高国語科教員。早稲田大学、コロラド州立大学などを経て、現在は早稲田大学高等学院所属。国語科指導をはじめ各種国際交流プログラムや芸術プログラムを通じて、グローバルな文脈に造詣のあるスーパー高校生を育成することを目指している。","高等学校国語科検定教科書の編集に長く携わり、教員養成の比較教育に関心がある。"],en:["An accomplished junior and senior high school Japanese language literacy educator with academic and professional backgrounds at Waseda University and Colorado State University. He currently serves on the faculty at Waseda University Senior High School.","He is dedicated to nurturing exceptional, globally minded high school students through comprehensive Japanese language instruction, international exchange initiatives, and music programs. He brings extensive experience in editing government-approved high school textbooks of Japanese language and literature, complemented by a strong research interest in comparative education in teacher education programs."]}},{id:"hasegawa-keisuke",displayOrder:40,published:!0,featured:!0,image:bj,imagePosition:"50% 42%",name:{ja:"長谷川 慶佑",en:"Keisuke Hasegawa"},role:{ja:"早稲田大学高等学院 1年",en:"First-year Student, Waseda University Senior High School"},shortBio:{ja:"中学時代に「ビオトープ管理委員会」を立ち上げ、環境保全活動を牽引。環境・文芸の両分野で多数の受賞実績を持つ。",en:"Founder of a school Biotope Management Committee, with numerous awards in environmental conservation and literature."},intro:{ja:["2010年福島県生まれ。中学時代に校内組織「ビオトープ管理委員会」を自ら立ち上げ、環境保全活動を牽引。「全国学校・園庭ビオトープコンクール2023文部科学大臣賞」や「第59回全国野生生物保護活動発表大会環境大臣賞」を受賞する。","さらに「令和6年度道路ふれあい月間推進標語最優秀賞（国土交通大臣表彰）」、「第44回福島県川柳賞青少年奨励賞」など、環境・文芸の両分野で多数の受賞実績を持つ。"],en:["Born in Fukushima Prefecture in 2010, he has won numerous literary contests, including the 2024 Road Fureai Month Promotion Slogan Grand Prize, the 44th Fukushima Prefecture Senryu Award Youth Encouragement Prize, and the “Thinking Together: Fukushima, Towards the Environment Beyond” Challenge Award 2023.","The Biotope Management Committee activity he initiated at school during junior high received the 2023 National School/Garden Biotope Contest Minister of Education, Culture, Sports, Science and Technology Award and the 59th National Wildlife Protection Activity Presentation Competition Minister of the Environment Award. In his talk, he will share insights drawn from experiences related to the Fukushima Daiichi Nuclear Power Plant accident and his activities to date."]}},{id:"horise-yoshito",displayOrder:50,published:!0,featured:!0,image:Ej,imagePosition:"50% 45%",name:{ja:"堀瀬 善仁",en:"Yoshito Horise"},role:{ja:"早稲田大学高等学院 2年",en:"Second-year Student, Waseda University Senior High School"},shortBio:{ja:"早稲田大学高等学院2年。7度の転校と多文化経験を持ち、AI姿勢認識を活用した語学ツール「KATA」を開発。",en:"A sophomore at Waseda University Senior High School with seven school changes and multicultural experience, and the developer of “KATA,” an AI-based language-learning tool."},intro:{ja:["早稲田大学高等学院2年。日本・台湾・香港で7度の転校を経験し、カナダ・オーストラリア・フランスでの国際経験を積む。日本語・中国語を母語とし、英語・フランス語・韓国語を学習中。国際HANAシンポジウム2年連続登壇、AI時代における人間の主体性を研究。","東大AIハッカソン優秀賞受賞。AI姿勢認識を活用した語学ツール「KATA」を開発。現在は、Stanford e-Japanに挑戦し、国際分野での活動を目指す。"],en:["A sophomore at Waseda University Senior High School. He has changed schools seven times in Japan, Taiwan, and Hong Kong, and has gained international experience in Canada, Australia, and France. Japanese and Chinese are his native languages, and he is currently studying English, French, and Korean. He has spoken at the International HANA Symposium for two consecutive years and is researching human agency in the age of AI.","He received the Excellence Award at the University of Tokyo AI Hackathon and developed “KATA,” a language-learning tool that utilizes AI-based posture recognition. He is currently participating in the Stanford e-Japan program and aims to pursue activities in the international arena."]}},{id:"kuroki-yuto",displayOrder:20,published:!0,featured:!0,image:Pj,imagePosition:"50% 44%",name:{ja:"黒木 勇人",en:"Yuto Kuroki"},role:{ja:"早稲田大学 情報理工学科2年",en:"Second-year Computer Science Student, Waseda University"},shortBio:{ja:"ISEF 2025に日本代表として出場し、ドローン配送最適化アルゴリズムの研究で文部科学大臣特別賞を受賞。",en:"Japan representative at ISEF 2025 and recipient of the MEXT Minister’s Special Award for drone-delivery optimization research."},intro:{ja:["早稲田大学情報理工学科2年。国際学生科学技術フェア（ISEF 2025）に日本代表として出場し、ドローン配送最適化アルゴリズムの研究を発表。文部科学大臣特別賞を受賞した。2026年夏からは、中谷財団の奨学生としてジョージア工科大学でロボット外骨格の深層学習モデルを研究している。","外国語学習にも力を入れ、TOEIC満点、ケンブリッジ英検C2取得、最難関のドイツ語検定試験Goethe-Zertifikat C2の3技能合格を達成。現在は外国語学習の方法を発信しながら、高校生の研究発表を支援するNPO法人で活動している。高校時代は硬式テニス部に所属。"],en:["A second-year Computer Science student at Waseda University. He represented Japan at ISEF 2025, presenting research on a drone-delivery optimization algorithm, and received the MEXT Minister’s Special Award. Since summer 2026, he has been conducting research on deep-learning models for robotic exoskeletons at the Georgia Institute of Technology as a Nakatani Foundation scholar.","Passionate about language learning, he has achieved a perfect TOEIC score, Cambridge C2 Proficiency, and passed three Goethe-Zertifikat C2 modules. He currently shares language-learning methods and works with an NPO supporting high school students in presenting their research. In high school, he was on the tennis team."]}},{id:"kogure-masahisa",displayOrder:60,published:!0,featured:!0,image:Cj,imagePosition:"50% 42%",name:{ja:"小暮 真久",en:"Masahisa Kogure"},role:{ja:"社会起業家",en:"Social Entrepreneur"},shortBio:{ja:"TABLE FOR TWOを創設し、約800の企業・団体を巻き込む社会運動へ成長させた。現在も医療・AIなど多領域で挑戦を続けている。",en:"Founder of TABLE FOR TWO, which grew into a nationwide social movement involving around 800 companies and organizations."},intro:{ja:["早稲田大学卒業後、オーストラリアで人工心臓の研究に従事。その後、マッキンゼー・アンド・カンパニーを経て、社会課題の解決を目指すTABLE FOR TWOを創設。約800の企業・団体を巻き込み、日本最大規模の社会運動へと成長させる。研究、ビジネス、社会課題など異なる世界を越境しながら、新しい仕組みや事業を生み出してきた。現在も医療・AIをはじめ、さまざまな領域で新たな挑戦を続けている。"],en:["After graduating from Waseda University, he conducted artificial-heart research in Australia. He later worked at McKinsey & Company before founding TABLE FOR TWO to address social challenges. By involving around 800 companies and organizations, he grew the initiative into one of Japan’s largest social movements. Crossing boundaries among research, business, and social issues, he has created new systems and ventures, and he continues to take on new challenges in healthcare, AI, and other fields."]}},{id:"takezawa-mamoru",displayOrder:30,published:!0,featured:!0,image:_j,imagePosition:"42% 50%",name:{ja:"武沢 護",en:"Mamoru Takezawa"},role:{ja:"早稲田大学高等学院 前学院長",en:"Former Headmaster of Waseda University Senior High School"},shortBio:{ja:"長く早稲田大学高等学院の教員を務め、数学・情報科の指導に携わる。特に最後の4年間は学院長を務めた。",en:"A longtime mathematics and information studies educator at Waseda University Senior High School who served as Headmaster for the final four years of his tenure."},intro:{ja:["早稲田大学高等学院前学院長。長く早稲田大学高等学院の教員を務め、数学・情報科の指導に携わる。特に最後の4年間は学院長を務めた。"],en:["Former Headmaster of Waseda University Senior High School. He served for many years as a teacher at the school, teaching mathematics and information studies. He was Headmaster for the final four years of his tenure."]},speechInfo:{ja:"これまでの教育経験をもとに、TEDxWUSHS Youthのテーマ「Breakshot」に沿って、AI・デジタル時代の予測不可能な未来に向けて、私たちが身につけるべき資質と能力について議論する。",en:"Drawing on his experience in education and in keeping with the TEDxWUSHS Youth theme “Breakshot,” he will discuss the qualities and capabilities we should develop as we face an unpredictable future in the age of AI and digital technology."}},{id:"reon-hiruma",displayOrder:70,published:!0,featured:!0,image:Tj,imagePosition:"50% 42%",name:{ja:"比留間 礼音",en:"Reon Hiruma"},role:{ja:"ベンチャーキャピタリスト",en:"Venture Capitalist"},shortBio:{ja:"ヘルスケア、産業技術、安全保障領域のディープテックに投資し、防衛技術コミュニティJDTIも運営している。",en:"A venture capitalist investing in deep tech across healthcare, industrial technology, and security, and the operator of the JDTI defense technology community."},intro:{ja:["ヘルスケア、産業技術、安全保障領域のディープテックに投資するベンチャーキャピタリスト。早稲田大学在学中の2018年にPotentialist Globalを共同創業し、欧米の技術系企業20社以上の日本・アジア進出を支援。2026年より国内大手VCで投資を担当する。投資の傍ら、防衛技術コミュニティJDTIを運営し、技術系スタートアップが安全保障に果たしうる役割を議論する場づくりに取り組む。オランダ人と日本人の両親をもち、四言語に堪能。"],en:["Reon Hiruma is a venture capitalist investing in deep tech across healthcare, industrial technology, and security. While at Waseda University, he co-founded Potentialist Global in 2018 and helped over 20 US and European technology companies enter Japan and Asia. In 2026, he joined a leading Japanese venture capital firm. Alongside his work as an investor, Reon runs JDTI, a defense technology community that brings people together to discuss the role startups can play in national security. Born to Dutch and Japanese parents, he speaks four languages."]}}],Nj=({speaker:e,language:t,variant:n,index:r})=>{var v,y;const i=Ge(),o=n==="detail",s=o?"h2":"h3",a=e.name[t]??e.name.ja,l=e.role[t]??e.role.ja,c=e.shortBio[t]??e.shortBio.ja,d=e.intro[t]??e.intro.ja,f=((v=e.speechInfo)==null?void 0:v[t])??((y=e.speechInfo)==null?void 0:y.ja),h=t==="en"?`Portrait of ${a}`:`${a}のプロフィール写真`;return u.jsxs(ee.article,{className:`speaker-card speaker-card--${n}${o&&r%2===1?" speaker-card--reversed":""}`,style:{"--speaker-image-position":e.imagePosition},initial:i?!1:{opacity:0,y:28},whileInView:i?void 0:{opacity:1,y:0},viewport:{once:!0,amount:.15},transition:i?{duration:0}:{duration:.55,delay:o?0:Math.min(r*.07,.28)},children:[u.jsx("div",{className:"speaker-card__image-frame",children:u.jsx("img",{src:e.image,alt:h,className:"speaker-card__image",loading:o&&r===0?"eager":"lazy",decoding:"async"})}),u.jsxs("div",{className:"speaker-card__content",children:[u.jsx("p",{className:"speaker-card__role",children:l}),u.jsx(s,{className:"speaker-card__name",children:a}),o?u.jsxs("div",{className:"speaker-card__bio",children:[d.map((x,S)=>u.jsx("p",{children:x},`${e.id}-intro-${S}`)),f&&u.jsx("p",{children:f})]}):u.jsx("p",{className:"speaker-card__summary",children:c})]})]})},Lf={ja:{previewSubtitle:"多様な経験と専門性を持つスピーカーたちが、それぞれのBreakshotから生まれたアイデアを共有します。",fullSubtitle:"TEDxWUSHS Youth 2026に登壇するスピーカーと、その背景にある経験やアイデアをご紹介します。",empty:"スピーカー情報は近日公開予定です。",comingSoonLabel:"追加情報",comingSoonBody:"スピーカーや講演内容に関する追加情報を、今後このページでお知らせします。"},en:{previewSubtitle:"Speakers with diverse experiences and expertise share ideas shaped by their own Breakshots.",fullSubtitle:"Meet the TEDxWUSHS Youth 2026 speakers and discover the experiences and ideas behind their talks.",empty:"Speaker information will be announced soon.",comingSoonLabel:"More to come",comingSoonBody:"More speaker and talk information will be announced on this page."}},u0=({variant:e="preview"})=>{const{language:t}=de(),n=Ge(),r=Lf[t]??Lf.ja,i=e==="full",o=i?"h1":"h2",s=[...l0].filter(a=>a.published&&(i||a.featured)).sort((a,l)=>a.displayOrder-l.displayOrder);return u.jsxs("section",{id:"speakers",className:`speakers-section speakers-section--${e} section-padding`,"aria-labelledby":"speakers-heading",children:[u.jsxs("div",{className:"container speakers-section__container",children:[u.jsxs(ee.header,{className:"speakers-section__header",initial:n?!1:{opacity:0,y:20},whileInView:n?void 0:{opacity:1,y:0},viewport:{once:!0},transition:{duration:n?0:.6},children:[u.jsx("span",{className:"speakers-section__eyebrow",lang:"en",children:i?"The 2026 Speaker Lineup":"Ideas in Motion"}),u.jsxs(o,{id:"speakers-heading",className:"speakers-section__title",lang:"en",children:[i?"Our ":"Featured ",u.jsx("span",{children:"Speakers"})]}),u.jsx("p",{className:"speakers-section__subtitle",children:i?r.fullSubtitle:r.previewSubtitle})]}),s.length>0?u.jsx("div",{className:i?"speakers-section__list":"speakers-section__grid",children:s.map((a,l)=>u.jsx(Nj,{speaker:a,language:t,variant:i?"detail":"preview",index:l},a.id))}):u.jsx("p",{className:"speakers-section__empty",children:r.empty}),i&&s.length>0&&u.jsxs("section",{className:"speakers-section__coming-soon","aria-labelledby":"speakers-coming-soon-heading",children:[u.jsx("span",{className:"speakers-section__coming-soon-mark","aria-hidden":"true",children:"+"}),u.jsxs("div",{children:[u.jsx("p",{className:"speakers-section__coming-soon-label",children:r.comingSoonLabel}),u.jsx("h2",{id:"speakers-coming-soon-heading",className:"speakers-section__coming-soon-title",lang:"en",children:"Coming Soon"}),u.jsx("p",{className:"speakers-section__coming-soon-body",children:r.comingSoonBody})]})]}),!i&&s.length>0&&u.jsx("div",{className:"speakers-section__cta-wrap",children:u.jsxs(ue,{to:"/speakers",className:"speakers-section__cta",lang:"en",children:["More Details",u.jsx(ui,{size:18,"aria-hidden":"true"})]})})]}),u.jsx("style",{children:`
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
      `})]})},c0=[{time:"14:00",event:"Doors Open",description:{ja:"開場",en:"Audience entry begins"}},{time:"14:30",event:"Opening",description:{ja:"開会・オープニング",en:"Opening remarks"}},{time:"14:40",event:"Talk Section 1",description:{ja:"トークセクション1",en:"First talk session"}},{time:"14:45–15:00",event:"Talk 1",description:{ja:"トーク1",en:"First talk"}},{time:"15:00–15:15",event:"Talk 2",description:{ja:"トーク2",en:"Second talk"}},{time:"15:15–15:30",event:"Talk 3",description:{ja:"トーク3",en:"Third talk"}},{time:"15:30–15:50",event:"Break",description:{ja:"休憩",en:"Intermission"}},{time:"15:50",event:"Talk Section 2",description:{ja:"トークセクション2",en:"Second talk session"}},{time:"16:00–16:10",event:"Talk 4",description:{ja:"トーク4",en:"Fourth talk"}},{time:"16:15–16:25",event:"Talk 5",description:{ja:"トーク5",en:"Fifth talk"}},{time:"16:30–16:45",event:"Talk 6",description:{ja:"トーク6",en:"Sixth talk"}},{time:"16:45–17:00",event:"Talk 7",description:{ja:"トーク7",en:"Seventh talk"}},{time:"17:00",event:"Closing",description:{ja:"閉会",en:"Closing remarks"}},{time:"17:20–17:50",event:"Workshop & Networking",description:{ja:"ワークショップ・交流会",en:"Workshop and networking"}},{time:"18:00頃",timeEn:"Around 18:00",event:"Program Ends",description:{ja:"終了",en:"Program concludes"}}],Dj=()=>{const{language:e}=de(),t=Ge(),n=e==="en"?"Scheduled for Saturday, October 31, 2026, from 14:00 to 18:00. Times are subject to change.":"2026年10月31日（土）14:00〜18:00 開催予定。時間は前後する可能性があります。";return u.jsxs("section",{id:"schedule",className:"schedule section-padding",children:[u.jsxs("div",{className:"container",children:[u.jsxs(ee.div,{className:"section-header",initial:t?!1:{opacity:0,y:20},whileInView:t?void 0:{opacity:1,y:0},viewport:{once:!0},children:[u.jsxs("h2",{className:"section-title",lang:"en",children:["Program ",u.jsx("span",{className:"highlight-red",children:"Schedule"})]}),u.jsx("p",{className:"section-subtitle",children:n})]}),u.jsx("ol",{className:"timeline",children:c0.map((r,i)=>u.jsxs(ee.li,{className:"timeline-item",initial:t?!1:{opacity:0,y:20},whileInView:t?void 0:{opacity:1,y:0},viewport:{once:!0},transition:t?{duration:0}:{delay:i*.1},children:[u.jsx("time",{className:"time",children:e==="en"&&r.timeEn?r.timeEn:r.time}),u.jsxs("div",{className:"event-content",children:[u.jsx("h3",{lang:"en",children:r.event}),u.jsx("p",{children:r.description[e]})]})]},`${r.time}-${r.event}`))})]}),u.jsx("style",{children:`
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
      `})]})},Aj={ja:{sectionSubtitle:"TEDxWUSHS Youthへの参加方法と最新情報をご案内します。",optionsHeading:"参加方法と最新情報",applicationsUpdate:"2026年開催分のスピーカー募集及び運営チーム募集は終了しました。たくさんのご応募ありがとうございました。オーディエンスの参加申込みは現在受け付けています。",teamDescription:"2026年開催分の運営チーム募集は終了しました。今後の募集はウェブサイトとSNSでお知らせします。",teamAction:"募集状況を見る",audienceDescription:"対象は早稲田大学高等学院の生徒及びその保護者です。参加申込みを現在受け付けています。",audienceAction:"対象・申込みを見る",audienceStatus:"受付中",subscribed:u.jsxs(u.Fragment,{children:["登録完了しました",u.jsx("br",{}),"イベントの最新情報をお届けしますのでお楽しみに。"]}),newsletter:"イベントの最新情報や募集のお知らせをメールでお届けします。",emailLabel:"メールアドレス",emailPlaceholder:"メールアドレスを入力",subscribeAction:"登録する",contactTitle:"お問い合わせ",contactDescription:"参加方法や当日の運営についてのご質問は、イベント事務局までご連絡ください。"},en:{sectionSubtitle:"Explore ways to take part in TEDxWUSHS Youth and receive the latest event updates.",optionsHeading:"Ways to Participate and Stay Updated",applicationsUpdate:"Speaker and organizing team applications for the 2026 event are now closed. Thank you to everyone who applied. Audience registration is now open.",teamDescription:"Recruitment for the 2026 organizing team has closed. Future opportunities will be announced on our website and social media.",teamAction:"View Recruitment Status",audienceDescription:"Audience registration is now open to students of Waseda University Senior High School and their parents or guardians.",audienceAction:"View eligibility and registration",audienceStatus:"Registration Open",subscribed:u.jsxs(u.Fragment,{children:["You are subscribed.",u.jsx("br",{}),"We look forward to sharing the latest event updates with you."]}),newsletter:"Receive event updates and future application announcements by email.",emailLabel:"Email address",emailPlaceholder:"Enter your email address",subscribeAction:"Subscribe",contactTitle:"Contact Us",contactDescription:"For questions about attending the event or event-day operations, please contact the TEDxWUSHS Youth team."}},d0=({hideHeader:e=!1})=>{const[t,n]=w.useState(!1),r=w.useRef(null),i=w.useRef(null),o=Ge(),{language:s}=de(),a=Aj[s];w.useEffect(()=>{var d;t&&((d=r.current)==null||d.focus())},[t]),w.useEffect(()=>()=>{i.current&&clearTimeout(i.current)},[]);const l=()=>{i.current&&clearTimeout(i.current),i.current=setTimeout(()=>n(!0),300)},c=[{title:"Join the Team",icon:u.jsx(Uo,{size:32,"aria-hidden":"true",focusable:"false"}),description:a.teamDescription,link:"/join-us/team",action:a.teamAction,status:"Recruitment Closed",closed:!0,color:"#fff"},{title:"Register as Audience",icon:u.jsx(r0,{size:32,"aria-hidden":"true",focusable:"false"}),description:a.audienceDescription,link:"/join-us/audience",action:a.audienceAction,status:a.audienceStatus,statusLanguage:s,color:"#fff"}];return u.jsxs("section",{id:"contact",className:"join-us section-padding",children:[u.jsxs("div",{className:"container",children:[e?u.jsx("h2",{className:"visually-hidden",children:a.optionsHeading}):u.jsxs(ee.div,{className:"section-header",initial:o?!1:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[u.jsx("span",{className:"join-tagline",lang:"en",children:"Be part of the community"}),u.jsxs("h2",{className:"section-title",lang:"en",children:["Join ",u.jsx("span",{className:"highlight-red",children:"Us"})]}),u.jsx("p",{className:"section-subtitle",children:a.sectionSubtitle})]}),u.jsxs(ee.div,{className:"recruitment-closed",initial:o?!1:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[u.jsx("strong",{lang:"en",children:"2026 Applications Update"}),u.jsx("p",{children:a.applicationsUpdate})]}),u.jsx("div",{className:"opportunities-grid",children:c.map((d,f)=>u.jsxs(ee.div,{className:`opt-card${d.closed?" opt-card--closed":""}`,initial:o?!1:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:o?0:f*.1},children:[u.jsx("div",{className:"opt-icon",children:d.icon}),d.status&&u.jsx("span",{className:"opt-status",lang:d.statusLanguage??"en",children:d.status}),u.jsx("h3",{className:"opt-title",lang:"en",children:d.title}),u.jsx("p",{className:"opt-description",children:d.description}),u.jsxs(ue,{to:d.link,className:"opt-link",children:[d.action," ",u.jsx(ui,{size:16,"aria-hidden":"true",focusable:"false"})]})]},d.title))}),u.jsx(ee.div,{className:"newsletter-box",initial:o?!1:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},children:u.jsxs("div",{className:"newsletter-content",children:[u.jsx("h3",{lang:"en",children:"Stay Updated"}),u.jsx("iframe",{title:"hidden_iframe",name:"hidden_iframe",id:"hidden_iframe",style:{display:"none"}}),t?u.jsx("div",{ref:r,className:"success-message",role:"status","aria-live":"polite","aria-atomic":"true",tabIndex:-1,children:u.jsx("p",{children:a.subscribed})}):u.jsxs("div",{children:[u.jsx("p",{id:"newsletter-description",children:a.newsletter}),u.jsxs("form",{className:"newsletter-form",action:"https://docs.google.com/forms/d/e/1FAIpQLScvnsbAaQFhyodG3GY4qXmTAj919BFivczNyE9bOt4Z_TxuWw/formResponse",method:"post",target:"hidden_iframe",onSubmit:l,children:[u.jsxs("div",{className:"newsletter-field",children:[u.jsx("label",{htmlFor:"newsletter-email",children:a.emailLabel}),u.jsx("input",{id:"newsletter-email",type:"email",name:"entry.269866944","aria-describedby":"newsletter-description",placeholder:a.emailPlaceholder,autoComplete:"email",inputMode:"email",required:!0})]}),u.jsx("button",{type:"submit",className:"btn-primary",children:a.subscribeAction})]})]})]})}),u.jsxs(ee.div,{className:"contact-box",initial:o?!1:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[u.jsx(t0,{size:30,"aria-hidden":"true",focusable:"false"}),u.jsxs("div",{children:[u.jsx("span",{lang:"en",children:"Questions about the event?"}),u.jsx("h3",{children:a.contactTitle}),u.jsx("p",{children:a.contactDescription}),u.jsx("a",{href:"mailto:tedxwushs@gmail.com",children:"tedxwushs@gmail.com"})]})]})]}),u.jsx("style",{children:`
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
      `})]})},Mj=()=>u.jsxs("main",{id:"main-content",tabIndex:-1,children:[u.jsx(vj,{}),u.jsx(wj,{}),u.jsx(Sj,{}),u.jsx(u0,{}),u.jsx(Dj,{}),u.jsx(d0,{})]}),Rj="アイデアを発見し広める精神のもと、TEDxは、地域で自主的に運営されるイベントを通じて、人々がTEDのような体験を共有するためのプログラムです。TEDxイベントでは、TED Talksの映像とライブスピーカーが組み合わさり、深い議論とつながりを生み出します。これらの地域で自主運営されるイベントはTEDxと呼ばれ、xは independently organized TED event（独立して運営されるTEDイベント）を表します。TED ConferenceはTEDxプログラムに一般的な指針を提供しますが、各TEDxイベントは自主的に運営されています（所定のルールおよび規定に従います）。",Lj="TEDは、対話を生み出し、理解を深め、意義ある変化を促すアイデアを発見し、議論し、広めることに取り組む、非営利・無党派の組織です。TEDは、特定の主張を掲げることなく、好奇心、理性、驚き、そして知識の探究に力を注いでいます。世界をより深く理解し、他者とのつながりを求める、あらゆる分野と文化の人々を歓迎します。そして、誰もがアイデアに触れ、それを自分たちのコミュニティで行動へと移すことを呼びかけています。",zj="TEDは1984年、Technology、Entertainment、Designが交わるカンファレンスとして始まりました。現在では、科学やビジネスから教育、芸術、世界規模の課題までを探究する、多様な世界的コミュニティと取り組みへと広がっています。毎年のカンファレンスで選ばれ、TED.comで公開されるTED Talksに加え、TEDはオリジナルポッドキャスト、短編映像シリーズ、アニメーション形式の教育コンテンツ（TED-Ed）、テレビ番組を制作しています。これらは100以上の言語に翻訳され、世界各地の提携先を通じて配信されています。毎年、数千件のTEDxイベントが独立して運営されています。",Vj="Audacious Projectを通じて、TEDは、世界が直面する最も緊急な課題に大胆な解決策を示すプロジェクトへ66億ドルの資金提供が促されることに貢献してきました。より美しく、持続可能で、公正な世界を目指す取り組みです。2020年、TEDは、気候危機の解決を加速し、ネットゼロの未来に向けた運動を広げるCountdownを開始しました。2023年には、より活気があり公平な未来への現実的な道筋に焦点を当て、新しい対話を生み出すTED Democracyを開始しました。",Ij=()=>{const{language:e}=de(),t=e==="ja",n=Ge();return u.jsxs("main",{id:"main-content",tabIndex:-1,className:"about-page",children:[u.jsx("div",{className:"container section-padding",children:u.jsxs(ee.div,{initial:n?!1:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:n?0:.8},children:[u.jsxs("section",{className:"about-section",children:[u.jsx("h1",{className:"page-title",children:t?u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"highlight-red brand-name",children:"TEDx"}),"について"]}):u.jsxs(u.Fragment,{children:["About ",u.jsx("span",{className:"highlight-red brand-name",children:"TEDx"})]})}),u.jsx("h2",{className:"sub-title brand-name",children:t?"TEDxについて — x = independently organized event（独立して運営されるイベント）":"TEDx, x = independently organized event"}),u.jsx("p",{children:t?Rj:u.jsx(u.Fragment,{children:"In the spirit of discovering and spreading ideas, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)"})})]}),u.jsxs("section",{className:"about-section",children:[u.jsx("h2",{className:"section-title",children:t?u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"highlight-red",children:"TED"}),"について"]}):u.jsxs(u.Fragment,{children:["About ",u.jsx("span",{className:"highlight-red",children:"TED"})]})}),u.jsx("p",{children:t?Lj:"TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and drive meaningful change. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community."}),t&&u.jsxs(u.Fragment,{children:[u.jsx("p",{children:zj}),u.jsx("p",{children:Vj}),u.jsx("p",{children:u.jsx("a",{href:"https://www.ted.com/about/programs-initiatives",target:"_blank",rel:"noopener noreferrer",className:"highlight-link",children:"TEDのプログラムと取り組みの一覧を見る"})})]}),u.jsxs("p",{hidden:t,children:["TED began in 1984 as a conference where Technology, Entertainment and Design converged, but today it spans a multitude of worldwide communities and initiatives exploring everything from science and business to education, arts and global issues. In addition to the TED Talks curated from our annual conferences and published on TED.com, we produce original podcasts, short video series, animated educational lessons (TED-Ed) and TV programs that are translated into more than 100 languages and distributed via partnerships around the world. Each year, thousands of independently run TEDx events. Through the Audacious Project, TED has helped catalyze $6.6 billion in funding for projects that support bold solutions to the world's most urgent challenges — working to make the world more beautiful, sustainable and just. In 2020, TED launched Countdown, an initiative to accelerate solutions to the climate crisis and mobilize a movement for a net-zero future, and in 2023 TED launched TED Democracy to spark a new kind of conversation focused on realistic pathways towards a more vibrant and equitable future. ",u.jsx("a",{href:"https://www.ted.com/about/programs-initiatives",target:"_blank",rel:"noopener noreferrer",className:"highlight-link",children:"View a full list of TED’s many programs and initiatives."})]}),u.jsxs("div",{className:"ted-social",children:[u.jsx("p",{children:t?"TEDの公式アカウント":"Follow TED on:"}),u.jsxs("div",{className:"social-links",children:[u.jsx("a",{href:"https://www.facebook.com/TED",target:"_blank",rel:"noopener noreferrer","aria-label":"TED on Facebook",lang:"en",children:u.jsx(WS,{size:24,"aria-hidden":"true"})}),u.jsx("a",{href:"https://www.instagram.com/ted",target:"_blank",rel:"noopener noreferrer","aria-label":"TED on Instagram",lang:"en",children:u.jsx(e0,{size:24,"aria-hidden":"true"})}),u.jsx("a",{href:"https://www.linkedin.com/company/ted-conferences",target:"_blank",rel:"noopener noreferrer","aria-label":"TED on LinkedIn",lang:"en",children:u.jsx(YS,{size:24,"aria-hidden":"true"})}),u.jsx("a",{href:"https://twitter.com/TEDTalks",target:"_blank",rel:"noopener noreferrer","aria-label":"TED on X",lang:"en",children:u.jsx(i0,{size:24,"aria-hidden":"true"})}),u.jsx("a",{href:"https://www.tiktok.com/@tedtoks",target:"_blank",rel:"noopener noreferrer","aria-label":"TED on TikTok",lang:"en",children:u.jsx(ej,{size:24,"aria-hidden":"true"})})]})]})]})]})}),u.jsx("style",{children:`
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
            `})]})},Fj=()=>u.jsx("main",{id:"main-content",tabIndex:-1,children:u.jsx(u0,{variant:"full"})}),ft={year2:{ja:"2年生",en:"Year 2"},year3:{ja:"3年生",en:"Year 3"},faculty:{ja:"教員",en:"Faculty"}},Oj=[{id:"haruki-kawamata",name:"Haruki Kawamata",grade:ft.year3,role:{ja:"ボードメンバー・オーガナイザー",en:"Board Member / Organizer"}},{id:"takuya-saeki",name:"Takuya Saeki",grade:ft.faculty,role:{ja:"共同オーガナイザー",en:"Co-organizer"}},{id:"hironori-sakai",name:"Hironori Sakai",grade:ft.year2,role:{ja:"ボードメンバー・運営・スピーカーチーム",en:"Board Member / Operation / Speaker Team"}},{id:"tatsuaki-matsuda",name:"Tatsuaki Matsuda",grade:ft.year3,role:{ja:"ボードメンバー・テクノロジー・運営・スピーカーチーム",en:"Board Member / Technology / Operation / Speaker Team"}},{id:"yasuhiro-nanjo",name:"Yasuhiro Nanjo",grade:ft.year2,role:{ja:"テクノロジー・広報・運営・マネジメント",en:"Technology / Marketing / Operation / Management"}},{id:"lyu-noguchi",name:"Lyu Noguchi",grade:ft.year3,role:{ja:"スピーカーチーム",en:"Speaker Team"}},{id:"yunosuke-sato",name:"Yunosuke Sato",grade:ft.year3,role:{ja:"マネジメント・財務",en:"Management / Finance"}},{id:"taisei-moriwaki",name:"Taisei Moriwaki",grade:ft.year3,role:{ja:"広報・運営",en:"Marketing / Operation"}},{id:"keisuke-horikoshi",name:"Keisuke Horikoshi",grade:ft.year2,role:{ja:"監査",en:"Audit"}}],Uj=e=>e.trim().toLocaleLowerCase("en-US").replace(/(^|[\s'-])[a-z]/g,t=>t.toLocaleUpperCase("en-US")),zf={ja:{eyebrow:"TEDxWUSHS Youth",year:"2026",fullTitle:"2026 Team",titleLead:"Our",titleAccent:"Team",memberList:"2026年チームメンバー一覧"},en:{eyebrow:"TEDxWUSHS Youth",year:"2026",fullTitle:"2026 Team",titleLead:"Our",titleAccent:"Team",memberList:"2026 team members"}},Bj=()=>{const{language:e}=de(),t=Ge(),n=zf[e]??zf.ja;return u.jsxs("main",{id:"main-content",className:"organizers-page",tabIndex:-1,children:[u.jsx("section",{className:"organizers-hero","aria-labelledby":"organizers-title",children:u.jsxs("div",{className:"container organizers-container",children:[u.jsxs(ee.div,{className:"organizers-heading",initial:t?!1:{opacity:0,y:20},animate:{opacity:1,y:0},transition:t?{duration:0}:{duration:.55},children:[u.jsx("p",{className:"organizers-eyebrow brand-name",lang:"en",children:n.eyebrow}),u.jsxs("h1",{id:"organizers-title","aria-label":n.fullTitle,children:[u.jsx("span",{className:"organizers-year","aria-hidden":"true",children:n.year}),u.jsxs("span",{className:"organizers-title-text","aria-hidden":"true",children:[n.titleLead," ",u.jsx("span",{className:"highlight-red",children:n.titleAccent})]})]})]}),u.jsx("h2",{className:"visually-hidden",children:n.memberList}),u.jsx("ul",{className:"organizers-grid",children:Oj.map((r,i)=>u.jsxs(ee.li,{className:"organizer-card",initial:t?!1:{opacity:0,y:24},whileInView:t?void 0:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:t?{duration:0}:{duration:.4,delay:i*.06},children:[u.jsxs("div",{className:"organizer-identity",children:[u.jsx("h3",{className:"organizer-name",lang:"en",children:Uj(r.name)}),u.jsx("span",{className:"organizer-grade",children:r.grade[e]??r.grade.ja})]}),u.jsxs("div",{className:"organizer-role-block",children:[u.jsx("span",{className:"organizer-role",lang:"en",children:r.role.en}),e==="ja"&&u.jsx("span",{className:"organizer-role-ja",children:r.role.ja})]})]},r.id))})]})}),u.jsx("style",{children:`
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
      `})]})},Wj=()=>{const{language:e}=de();return u.jsxs("main",{id:"main-content",tabIndex:-1,className:"join-us-page",children:[u.jsxs("header",{className:"join-us-page-heading container",children:[u.jsx("span",{lang:"en",children:"Be part of the community"}),u.jsxs("h1",{lang:"en",children:["Join ",u.jsx("span",{className:"highlight-red",children:"Us"})]}),u.jsx("p",{children:e==="ja"?"TEDxWUSHS Youthへの参加方法と最新情報をご案内します。":"Explore ways to take part in TEDxWUSHS Youth and receive the latest event updates."})]}),u.jsx(d0,{hideHeader:!0}),u.jsx("style",{children:`
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
            `})]})},Vf={ja:{steps:[{title:"Application",desc:"2026年開催分の応募受付は終了しました。"},{title:"Audition",desc:"運営チームとの面談で、アイデアを深掘りします。"},{title:"Curation",desc:"TEDxの基準に合わせて、スピーチを磨き上げます。"},{title:"The Stage",desc:"TEDxWUSHS Youthのステージで、世界へ発信！"}],lead:"2026年開催分のスピーカー募集は終了しました。",benefits:["世界中のTEDコミュニティにあなたのアイデアが届きます。","プロフェッショナルなコーチングでプレゼンスキルが向上します。","情熱的な仲間や観客との貴重な出会いがあります。"],closedMessage:"たくさんのご応募ありがとうございました。今後の募集については、ウェブサイトとSNSでお知らせします。"},en:{steps:[{title:"Application",desc:"Applications for the 2026 event have closed."},{title:"Audition",desc:"Explore your idea in depth during an interview with the organizing team."},{title:"Curation",desc:"Refine your talk in line with TEDx standards."},{title:"The Stage",desc:"Share your idea with the world from the TEDxWUSHS Youth stage!"}],lead:"Speaker applications for the 2026 event have closed.",benefits:["Share your idea with the global TED community.","Improve your presentation skills through professional coaching.","Connect with passionate peers and audience members."],closedMessage:"Thank you to everyone who applied. Future opportunities will be announced on this website and our social media channels."}},Hj=()=>{const{language:e}=de(),t=Vf[e]??Vf.ja;return u.jsxs("main",{id:"main-content",tabIndex:-1,className:"recruit-page",style:{paddingTop:"120px"},children:[u.jsxs("div",{className:"container",children:[u.jsxs(ue,{to:"/join-us",className:"back-link",children:[u.jsx(Ku,{size:16,"aria-hidden":"true"})," ",u.jsx("span",{lang:"en",children:"Back to Opportunities"})]}),u.jsxs("header",{className:"recruit-header",children:[u.jsx("div",{className:"icon-circle","aria-hidden":"true",children:u.jsx(n0,{size:48})}),u.jsxs("h1",{lang:"en",children:["Speaker ",u.jsx("span",{className:"highlight-red",children:"Applications"})]}),u.jsx("p",{className:"lead-text",children:t.lead})]}),u.jsxs("section",{className:"detail-section",children:[u.jsxs("h2",{lang:"en",children:["Why speak at ",u.jsx("span",{className:"brand-name",children:"TEDxWUSHS Youth"}),"?"]}),u.jsx("ul",{className:"benefits-grid",children:t.benefits.map(n=>u.jsxs("li",{className:"benefit-card",children:[u.jsx(zS,{color:"var(--ted-red)",size:24,"aria-hidden":"true"}),u.jsx("p",{children:n})]},n))})]}),u.jsxs("section",{className:"process-section",children:[u.jsx("h2",{lang:"en",children:"Application Process"}),u.jsx("ol",{className:"steps-container",children:t.steps.map((n,r)=>u.jsxs("li",{className:"step-item",children:[u.jsx("div",{className:"step-num","aria-hidden":"true",children:r+1}),u.jsx("h3",{lang:"en",children:n.title}),u.jsx("p",{children:n.desc})]},n.title))})]}),u.jsxs("section",{className:"cta-box","aria-labelledby":"speaker-applications-status",children:[u.jsx("h2",{id:"speaker-applications-status",lang:"en",children:"Applications Closed"}),u.jsx("p",{children:t.closedMessage}),u.jsx("span",{className:"closed-label",lang:"en",children:"2026 Speaker Applications Closed"})]})]}),u.jsx("style",{children:`
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
      `})]})},If={ja:{departmentDescriptions:["イベントの全体企画、進行、会場設営などを担います。","SNSやWebサイトを通じた広報活動、ブランディングを担います。","スピーカーの選定、スピーチ構成のサポートを担います。","デザイン、映像制作、Web開発などを担います。"],lead:"2026年開催分の運営チーム募集は終了しました。たくさんのご応募ありがとうございました。",values:["アイデアを広めること、新しい価値を創ることに情熱を持っている方。","多様な視点を尊重し、チームで最高のパフォーマンスを発揮できる方。","自ら考え、行動し、変化を恐れずに挑戦し続けられる方。"],closedMessage:"次回の募集については、ウェブサイトと公式SNSでお知らせします。"},en:{departmentDescriptions:["Oversees overall event planning, program flow, venue setup, and related operations.","Handles promotion and branding through social media and the website.","Handles speaker selection and supports the development of talks.","Handles design, video production, web development, and related creative work."],lead:"Recruitment for the 2026 organizing team has closed. Thank you to everyone who applied.",values:["Passionate about sharing ideas and creating new value.","Respects diverse perspectives and brings out the best in the team through collaboration.","Thinks and acts independently, and continues to take on challenges without fearing change."],closedMessage:"Future recruitment opportunities will be announced on this website and our official social media channels."}},$j=()=>{const{language:e}=de(),t=If[e]??If.ja,n=[{title:"Operations",icon:u.jsx(Uo,{size:32,"aria-hidden":"true"}),desc:t.departmentDescriptions[0]},{title:"Marketing",icon:u.jsx(nj,{size:32,"aria-hidden":"true"}),desc:t.departmentDescriptions[1]},{title:"Speaker",icon:u.jsx(n0,{size:32,"aria-hidden":"true"}),desc:t.departmentDescriptions[2]},{title:"Creative",icon:u.jsx(OS,{size:32,"aria-hidden":"true"}),desc:t.departmentDescriptions[3]}];return u.jsxs("main",{id:"main-content",tabIndex:-1,className:"recruit-page",style:{paddingTop:"120px"},children:[u.jsxs("div",{className:"container",children:[u.jsxs(ue,{to:"/join-us",className:"back-link",children:[u.jsx(Ku,{size:16,"aria-hidden":"true"})," ",u.jsx("span",{lang:"en",children:"Back to Opportunities"})]}),u.jsxs("header",{className:"recruit-header",children:[u.jsx("div",{className:"icon-circle","aria-hidden":"true",children:u.jsx(Uo,{size:48})}),u.jsx("span",{className:"recruitment-status",lang:"en",children:"2026 Recruitment Closed"}),u.jsxs("h1",{lang:"en",children:["Join the ",u.jsx("span",{className:"highlight-red",children:"Team"})]}),u.jsx("p",{className:"lead-text",children:t.lead})]}),u.jsxs("section",{className:"detail-section",children:[u.jsx("h2",{lang:"en",children:"Departments"}),u.jsx("div",{className:"departments-grid",children:n.map((r,i)=>u.jsxs("div",{className:"dept-card",children:[u.jsx("div",{className:"dept-icon",children:r.icon}),u.jsx("h3",{lang:"en",children:r.title}),u.jsx("p",{children:r.desc})]},i))})]}),u.jsxs("section",{className:"why-join-section",children:[u.jsx("h2",{lang:"en",children:"What we look for"}),u.jsxs("div",{className:"values-grid",children:[u.jsxs("div",{className:"value-item",children:[u.jsx("h3",{lang:"en",children:"Passion"}),u.jsx("p",{children:t.values[0]})]}),u.jsxs("div",{className:"value-item",children:[u.jsx("h3",{lang:"en",children:"Collaboration"}),u.jsx("p",{children:t.values[1]})]}),u.jsxs("div",{className:"value-item",children:[u.jsx("h3",{lang:"en",children:"Proactive"}),u.jsx("p",{children:t.values[2]})]})]})]}),u.jsxs("section",{className:"cta-box","aria-labelledby":"team-recruitment-status-heading",children:[u.jsx("h2",{id:"team-recruitment-status-heading",lang:"en",children:"Recruitment Closed"}),u.jsx("p",{children:t.closedMessage}),u.jsx("span",{className:"closed-label",lang:"en",children:"2026 Team Recruitment Closed"})]})]}),u.jsx("style",{children:`
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
      `})]})},Ff={ja:{lead:"参加申込みを受け付けています。対象をご確認のうえ、申込フォームからお申し込みください。",eligibilityLabel:"Audience Eligibility / 参加対象",eligibilityTitle:"早稲田大学高等学院の生徒及びその保護者",eligibilityDescription:"本イベントの会場参加は、上記の方を対象としています。対象をご確認のうえ、申込フォームからお申し込みください。",newsletterDescription:"ニュースレターに登録すると、イベントに関する最新情報をメールで受け取れます。",eventDescription:"2026年10月31日（土）14:00〜18:00、早稲田大学高等学院 講堂にて開催します（受付開始13:30）。",registrationTitle:"参加申込みについて",registrationDescription:"参加費は無料です。Googleフォームに必要事項を入力してお申し込みください。",registrationStatus:"受付中",registrationAction:"参加を申し込む",registrationNote:"申込フォームは新しいタブで開きます。",audienceLabel:"対象",audienceValue:"学院生・保護者"},en:{lead:"Audience registration is now open. Please confirm your eligibility and apply using the registration form.",eligibilityLabel:"Audience Eligibility",eligibilityTitle:"Students of Waseda University Senior High School and Their Parents or Guardians",eligibilityDescription:"In-person attendance is limited to the group listed above. Please confirm your eligibility and apply using the registration form.",newsletterDescription:"Subscribe to receive the latest event updates by email.",eventDescription:"The event will be held on Saturday, October 31, 2026, from 2:00 p.m. to 6:00 p.m. at the auditorium of Waseda University Senior High School (doors open at 1:30 p.m.).",registrationTitle:"Registration Information",registrationDescription:"Admission is free. Complete the Google Form to apply to attend.",registrationStatus:"Registration Open",registrationAction:"Apply to attend",registrationNote:"The registration form opens in a new tab.",audienceLabel:"Eligible Attendees",audienceValue:"Students & Parents/Guardians"}},Yj=()=>{const{language:e}=de(),t=Ff[e]??Ff.ja;return u.jsxs("main",{id:"main-content",tabIndex:-1,className:"recruit-page",style:{paddingTop:"120px"},children:[u.jsxs("div",{className:"container",children:[u.jsxs(ue,{to:"/join-us",className:"back-link",children:[u.jsx(Ku,{size:16,"aria-hidden":"true"})," ",u.jsx("span",{lang:"en",children:"Back to Opportunities"})]}),u.jsxs("header",{className:"recruit-header",children:[u.jsx("div",{className:"icon-circle","aria-hidden":"true",children:u.jsx(r0,{size:48})}),u.jsxs("h1",{lang:"en",children:["Register as ",u.jsx("span",{className:"highlight-red",children:"Audience"})]}),u.jsx("p",{className:"lead-text",children:t.lead})]}),u.jsxs("section",{className:"eligibility-panel","aria-labelledby":"audience-eligibility-title",children:[u.jsx("div",{className:"eligibility-icon",children:u.jsx(Uo,{size:36,"aria-hidden":"true"})}),u.jsxs("div",{children:[u.jsx("span",{className:"eligibility-label",children:e==="ja"?u.jsxs(u.Fragment,{children:[u.jsx("span",{lang:"en",children:"Audience Eligibility"})," / 参加対象"]}):t.eligibilityLabel}),u.jsx("h2",{id:"audience-eligibility-title",children:t.eligibilityTitle}),u.jsx("p",{children:t.eligibilityDescription})]})]}),u.jsxs("div",{className:"audience-layout",children:[u.jsxs("div",{className:"info-side",children:[u.jsxs("section",{className:"info-block",children:[u.jsx("div",{className:"info-icon","aria-hidden":"true",children:u.jsx(NS,{size:24})}),u.jsxs("div",{children:[u.jsx("h2",{lang:"en",children:"Be the First to Know"}),u.jsx("p",{children:t.newsletterDescription})]})]}),u.jsxs("section",{className:"info-block",children:[u.jsx("div",{className:"info-icon","aria-hidden":"true",children:u.jsx(RS,{size:24})}),u.jsxs("div",{children:[u.jsx("h2",{lang:"en",children:"Upcoming Events"}),u.jsx("p",{children:t.eventDescription})]})]})]}),u.jsx("div",{className:"form-side",children:u.jsxs("section",{className:"registration-card","aria-labelledby":"registration-information-title",children:[u.jsx("span",{className:"registration-status",children:t.registrationStatus}),u.jsx("h2",{id:"registration-information-title",children:t.registrationTitle}),u.jsx("p",{children:t.registrationDescription}),u.jsxs("div",{className:"registration-audience",children:[u.jsx("span",{children:t.audienceLabel}),u.jsx("strong",{children:t.audienceValue})]}),u.jsxs("a",{className:"btn-primary-full",href:Xu,target:"_blank",rel:"noopener noreferrer",children:[u.jsx("span",{children:t.registrationAction}),u.jsx(Gu,{size:18,strokeWidth:2.5,"aria-hidden":"true"})]}),u.jsx("p",{className:"form-note",children:t.registrationNote})]})})]})]}),u.jsx("style",{children:`
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
      `})]})},Of={ja:[{question:"TEDxWUSHS Youthとは何ですか？",answer:"早稲田大学高等学院の生徒が独立して企画・運営するTEDxイベントです。『Ideas change everything.』という考えのもと、対話と変化につながるアイデアを若者の視点から届けます。"},{question:"参加対象者を教えてください。",answer:"参加対象者は、早稲田大学高等学院の生徒（学院生）とその保護者です。参加申込みを現在受け付けています。対象をご確認のうえ、「Join Us」のAudience Registrationページからお申し込みください。"},{question:"イベントでは何語が使用されますか？",answer:"日本語と英語のバイリンガルイベントを予定しています。日本語・英語のどちらで行われるトークにも、スライド上に字幕を付ける予定です。"},{question:"参加費はかかりますか？",answer:"参加費は無料です。"},{question:"ボランティアとして参加したいのですが、どうすればいいですか？",answer:"2026年開催分の運営チーム募集は終了しました。今後の募集はウェブサイトの『Join Us』ページと公式SNSでお知らせします。"}],en:[{question:"What is TEDxWUSHS Youth?",answer:"TEDxWUSHS Youth is an independently organized TEDx event planned and run by students of Waseda University Senior High School. We believe that “Ideas change everything.” From a youth perspective, we share ideas that can spark dialogue and change."},{question:"Who can attend?",answer:"The event is open to students of Waseda University Senior High School and their parents or guardians. Registration is now open. Please confirm your eligibility and apply from the Audience Registration page under Join Us."},{question:"What languages will be used at the event?",answer:"The event is planned to be bilingual in Japanese and English. For both Japanese- and English-language talks, we plan to display subtitles on the presentation slides."},{question:"Is there an admission fee?",answer:"The event is free to attend."},{question:"How can I participate as a volunteer?",answer:"Recruitment for the 2026 organizing team has closed. Future opportunities will be announced on the Join Us page and our official social media channels."}]},Kj={ja:"質問と回答",en:"Questions and Answers"},Gj=({question:e,answer:t,id:n})=>{const[r,i]=w.useState(!1),o=Ge(),s=`${n}-question`,a=`${n}-answer`;return u.jsxs("div",{className:"faq-item",children:[u.jsx("h3",{className:"faq-question-heading",children:u.jsxs("button",{id:s,type:"button",className:"faq-question",onClick:()=>i(!r),"aria-expanded":r,"aria-controls":a,children:[u.jsx("span",{children:e}),u.jsx("span",{className:`icon ${r?"open":""}`,"aria-hidden":"true",children:"+"})]})}),u.jsx(Og,{children:r&&u.jsx(ee.div,{className:"faq-answer",id:a,role:"region","aria-labelledby":s,initial:o?!1:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:o?0:.3},children:u.jsx("p",{children:t})})})]})},Qj=({hideHeader:e=!1})=>{const{language:t}=de(),n=Of[t]??Of.ja;return u.jsxs("section",{id:"faq",className:"faq section-padding","aria-labelledby":"faq-list-heading",children:[u.jsxs("div",{className:"container",children:[e?u.jsx("h2",{id:"faq-list-heading",className:"visually-hidden",children:Kj[t]}):u.jsx("div",{className:"section-header",children:u.jsxs("h2",{id:"faq-list-heading",className:"section-title",lang:"en",children:["Frequently Asked ",u.jsx("span",{className:"highlight-red",children:"Questions"})]})}),u.jsx("div",{className:"faq-list",children:n.map((r,i)=>{const o=`faq-${t}-${i+1}`;return u.jsx(Gj,{id:o,...r},o)})})]}),u.jsx("style",{children:`
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
      `})]})},Xj=()=>{const e=Ge();return u.jsxs("main",{id:"main-content",tabIndex:-1,className:"faq-page",children:[u.jsx("header",{className:"faq-page-heading container",children:u.jsxs("h1",{lang:"en",children:["Frequently Asked ",u.jsx("span",{className:"highlight-red",children:"Questions"})]})}),u.jsx(ee.div,{initial:e?!1:{opacity:0},animate:{opacity:1},transition:{duration:e?0:.8},children:u.jsx(Qj,{hideHeader:!0})}),u.jsx("style",{children:`
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
            `})]})},Uf={ja:{title:"ページが見つかりません",description:"指定されたページは移動または削除された可能性があります。",action:"ホームへ戻る"},en:{title:"Page Not Found",description:"The page may have been moved or removed.",action:"Return Home"}},qj=()=>{const{language:e}=de(),t=Uf[e]??Uf.ja;return u.jsxs("main",{id:"main-content",tabIndex:-1,className:"not-found-page",children:[u.jsxs("div",{className:"container not-found-page__content",children:[u.jsx("p",{className:"not-found-page__code","aria-hidden":"true",children:"404"}),u.jsx("h1",{children:t.title}),u.jsx("p",{children:t.description}),u.jsx(ue,{to:"/",className:"not-found-page__link",children:t.action})]}),u.jsx("style",{children:`
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
      `})]})},Bf={ja:{intro:"開催概要、登壇者、当日のタイムテーブルを一つのページにまとめました。",themeLabel:"Program theme",themeDescription:"予測できない変化を前に、常識の枠を越えて新しい方向を切り拓くアイデアを共有します。",detailsLabel:"プログラム概要",details:[{label:"開催日",value:"2026年10月31日（土）"},{label:"時間",value:"受付開始 13:30／開催 14:00〜18:00"},{label:"会場",value:"早稲田大学高等学院 講堂"},{label:"参加対象",value:"早稲田大学高等学院の生徒及びその保護者"},{label:"参加費",value:"無料"},{label:"言語",value:"日本語・英語（スライド字幕対応予定）"}],applyAction:"参加を申し込む",applyNote:"Googleフォームが新しいタブで開きます。",scheduleAction:"タイムテーブルを見る",speakerTitle:"Speaker Lineup",speakerDescription:"TEDxWUSHS Youth 2026に登壇する7名です。詳しい紹介文はSpeakersページでご覧いただけます。",speakerAction:"スピーカー詳細を見る",scheduleTitle:"Program Schedule",scheduleDescription:"当日の進行予定です。時間は前後する可能性があります。",scheduleLabel:"TEDxWUSHS Youth 2026 当日タイムテーブル"},en:{intro:"Find the program essentials, speaker lineup, and full schedule in one place.",themeLabel:"Program theme",themeDescription:"Ideas that break beyond familiar boundaries and open new directions in an unpredictable world.",detailsLabel:"Program details",details:[{label:"Date",value:"Saturday, October 31, 2026"},{label:"Time",value:"Doors open 1:30 PM / Program 2:00–6:00 PM"},{label:"Venue",value:"Waseda University Senior High School Auditorium"},{label:"Audience",value:"Students of Waseda University Senior High School and their parents or guardians"},{label:"Admission",value:"Free"},{label:"Languages",value:"Japanese and English, with slide subtitles planned"}],applyAction:"Apply to attend",applyNote:"The Google Form opens in a new tab.",scheduleAction:"View the schedule",speakerTitle:"Speaker Lineup",speakerDescription:"Meet the seven speakers joining TEDxWUSHS Youth 2026. Full profiles are available on the Speakers page.",speakerAction:"View speaker profiles",scheduleTitle:"Program Schedule",scheduleDescription:"The program is subject to minor timing changes.",scheduleLabel:"TEDxWUSHS Youth 2026 program schedule"}},Jj=()=>{const{language:e}=de(),t=Bf[e]??Bf.ja,n=[...l0].filter(r=>r.published).sort((r,i)=>r.displayOrder-i.displayOrder);return u.jsxs("main",{id:"main-content",tabIndex:-1,className:"event-page",children:[u.jsx("section",{className:"event-hero","aria-labelledby":"event-page-title",children:u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"event-hero__layout",children:[u.jsxs("header",{className:"event-hero__header",children:[u.jsx("p",{className:"event-eyebrow",lang:"en",children:"TEDxWUSHS Youth 2026"}),u.jsxs("h1",{id:"event-page-title",className:"event-hero__title",lang:"en",children:["Program ",u.jsx("span",{children:"Information"})]}),u.jsx("p",{className:"event-hero__intro",children:t.intro}),u.jsxs("div",{className:"event-hero__actions",children:[u.jsxs("a",{className:"event-button event-button--primary",href:Xu,target:"_blank",rel:"noopener noreferrer","aria-label":`${t.applyAction} — ${t.applyNote}`,children:[t.applyAction,u.jsx(Gu,{size:18,strokeWidth:2.5,"aria-hidden":"true"})]}),u.jsxs("a",{className:"event-button event-button--secondary",href:"#event-schedule",children:[t.scheduleAction,u.jsx(ui,{size:18,strokeWidth:2.5,"aria-hidden":"true"})]})]}),u.jsx("p",{className:"event-hero__note",children:t.applyNote})]}),u.jsxs("aside",{className:"event-theme","aria-labelledby":"event-theme-heading",children:[u.jsx("p",{id:"event-theme-heading",className:"event-theme__label",lang:"en",children:t.themeLabel}),u.jsx("p",{className:"event-theme__name",lang:"en",children:"Breakshot"}),u.jsx("p",{className:"event-theme__description",children:t.themeDescription}),u.jsx("p",{className:"event-theme__statement",lang:"en",children:"Ideas change everything."})]})]}),u.jsx("dl",{className:"event-facts","aria-label":t.detailsLabel,children:t.details.map(r=>u.jsxs("div",{className:"event-facts__item",children:[u.jsx("dt",{children:r.label}),u.jsx("dd",{children:r.value})]},r.label))})]})}),u.jsx("section",{className:"event-section event-speakers","aria-labelledby":"event-speakers-title",children:u.jsxs("div",{className:"container",children:[u.jsxs("header",{className:"event-section__header",children:[u.jsx("p",{className:"event-eyebrow",lang:"en",children:"Meet the speakers"}),u.jsx("h2",{id:"event-speakers-title",lang:"en",children:t.speakerTitle}),u.jsx("p",{children:t.speakerDescription})]}),u.jsx("ul",{className:"event-speakers__list",children:n.map(r=>u.jsxs("li",{className:"event-speaker",children:[u.jsx("img",{src:r.image,alt:"",loading:"lazy",decoding:"async",style:{"--event-speaker-position":r.imagePosition}}),u.jsxs("div",{children:[u.jsx("h3",{children:r.name[e]??r.name.ja}),u.jsx("p",{children:r.role[e]??r.role.ja})]})]},r.id))}),u.jsxs(ue,{className:"event-text-link",to:"/speakers",children:[t.speakerAction,u.jsx(ui,{size:18,strokeWidth:2.5,"aria-hidden":"true"})]})]})}),u.jsx("section",{id:"event-schedule",className:"event-section event-schedule","aria-labelledby":"event-schedule-title",children:u.jsxs("div",{className:"container",children:[u.jsxs("header",{className:"event-section__header",children:[u.jsx("p",{className:"event-eyebrow",lang:"en",children:"October 31, 2026"}),u.jsx("h2",{id:"event-schedule-title",lang:"en",children:t.scheduleTitle}),u.jsx("p",{children:t.scheduleDescription})]}),u.jsx("ol",{className:"event-schedule__list","aria-label":t.scheduleLabel,children:c0.map(r=>u.jsxs("li",{className:"event-schedule__item",children:[u.jsx("time",{children:e==="en"&&r.timeEn?r.timeEn:r.time}),u.jsxs("div",{children:[u.jsx("h3",{lang:"en",children:r.event}),u.jsx("p",{children:r.description[e]??r.description.ja})]})]},`${r.time}-${r.event}`))})]})}),u.jsx("style",{children:`
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
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 2rem;
        }

        .event-speaker {
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

          .event-speakers__list {
            grid-template-columns: repeat(3, minmax(0, 1fr));
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
            grid-template-columns: repeat(2, minmax(0, 1fr));
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
          .event-speakers__list {
            grid-template-columns: 1fr;
          }

          .event-speaker {
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
      `})]})},Wf={ja:{"/":"TEDxWUSHS Youth | Ideas change everything","/about":"TEDxについて | TEDxWUSHS Youth","/program":"プログラム | TEDxWUSHS Youth","/event":"プログラム | TEDxWUSHS Youth","/speakers":"スピーカー | TEDxWUSHS Youth","/team":"チーム | TEDxWUSHS Youth","/organizers":"チーム | TEDxWUSHS Youth","/join-us":"参加する | TEDxWUSHS Youth","/join-us/speaker":"スピーカー募集 | TEDxWUSHS Youth","/join-us/team":"運営チーム募集 | TEDxWUSHS Youth","/join-us/audience":"参加申込み | TEDxWUSHS Youth","/faq":"よくある質問 | TEDxWUSHS Youth"},en:{"/":"TEDxWUSHS Youth | Ideas change everything","/about":"About | TEDxWUSHS Youth","/program":"Program | TEDxWUSHS Youth","/event":"Program | TEDxWUSHS Youth","/speakers":"Speakers | TEDxWUSHS Youth","/team":"Team | TEDxWUSHS Youth","/organizers":"Team | TEDxWUSHS Youth","/join-us":"Join Us | TEDxWUSHS Youth","/join-us/speaker":"Speaker Applications | TEDxWUSHS Youth","/join-us/team":"Team Recruitment | TEDxWUSHS Youth","/join-us/audience":"Audience Registration | TEDxWUSHS Youth","/faq":"Frequently Asked Questions | TEDxWUSHS Youth"}},Zj=()=>{const{pathname:e}=jn(),{language:t}=de(),n=w.useRef(e);return w.useEffect(()=>{const r=Wf[t]??Wf.ja;document.title=r[e]??(t==="ja"?"ページが見つかりません | TEDxWUSHS Youth":"Page Not Found | TEDxWUSHS Youth"),document.documentElement.lang=t==="en"?"en":"ja"},[t,e]),w.useEffect(()=>{const r=document.getElementById("main-content"),i=n.current!==e;if(n.current=e,!r||(window.scrollTo({top:0,left:0,behavior:"auto"}),!i))return;const o=window.requestAnimationFrame(()=>{r.focus({preventScroll:!0})});return()=>window.cancelAnimationFrame(o)},[e]),null};function eb(){return u.jsx(cj,{children:u.jsx(Ix,{children:u.jsxs("div",{className:"app",children:[u.jsx(Zj,{}),u.jsx(hj,{}),u.jsxs(Dx,{children:[u.jsx(Ce,{path:"/",element:u.jsx(Mj,{})}),u.jsx(Ce,{path:"/about",element:u.jsx(Ij,{})}),u.jsx(Ce,{path:"/program",element:u.jsx(Jj,{})}),u.jsx(Ce,{path:"/event",element:u.jsx(fd,{to:"/program",replace:!0})}),u.jsx(Ce,{path:"/speakers",element:u.jsx(Fj,{})}),u.jsx(Ce,{path:"/team",element:u.jsx(Bj,{})}),u.jsx(Ce,{path:"/organizers",element:u.jsx(fd,{to:"/team",replace:!0})}),u.jsx(Ce,{path:"/join-us",element:u.jsx(Wj,{})}),u.jsx(Ce,{path:"/join-us/speaker",element:u.jsx(Hj,{})}),u.jsx(Ce,{path:"/join-us/team",element:u.jsx($j,{})}),u.jsx(Ce,{path:"/join-us/audience",element:u.jsx(Yj,{})}),u.jsx(Ce,{path:"/faq",element:u.jsx(Xj,{})}),u.jsx(Ce,{path:"*",element:u.jsx(qj,{})})]}),u.jsx(pj,{})]})})})}nm(document.getElementById("root")).render(u.jsx(w.StrictMode,{children:u.jsx(eb,{})}));
