function ny(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function ry(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Mf={exports:{}},Oo={},Rf={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ai=Symbol.for("react.element"),iy=Symbol.for("react.portal"),oy=Symbol.for("react.fragment"),sy=Symbol.for("react.strict_mode"),ay=Symbol.for("react.profiler"),ly=Symbol.for("react.provider"),uy=Symbol.for("react.context"),cy=Symbol.for("react.forward_ref"),dy=Symbol.for("react.suspense"),fy=Symbol.for("react.memo"),hy=Symbol.for("react.lazy"),Hu=Symbol.iterator;function py(e){return e===null||typeof e!="object"?null:(e=Hu&&e[Hu]||e["@@iterator"],typeof e=="function"?e:null)}var zf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lf=Object.assign,Vf={};function er(e,t,n){this.props=e,this.context=t,this.refs=Vf,this.updater=n||zf}er.prototype.isReactComponent={};er.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};er.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function If(){}If.prototype=er.prototype;function pl(e,t,n){this.props=e,this.context=t,this.refs=Vf,this.updater=n||zf}var ml=pl.prototype=new If;ml.constructor=pl;Lf(ml,er.prototype);ml.isPureReactComponent=!0;var $u=Array.isArray,Ff=Object.prototype.hasOwnProperty,gl={current:null},Of={key:!0,ref:!0,__self:!0,__source:!0};function Uf(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Ff.call(t,r)&&!Of.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ai,type:e,key:o,ref:s,props:i,_owner:gl.current}}function my(e,t){return{$$typeof:ai,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function yl(e){return typeof e=="object"&&e!==null&&e.$$typeof===ai}function gy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Yu=/\/+/g;function ls(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gy(""+e.key):t.toString(36)}function Wi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ai:case iy:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+ls(s,0):r,$u(i)?(n="",e!=null&&(n=e.replace(Yu,"$&/")+"/"),Wi(i,t,n,"",function(c){return c})):i!=null&&(yl(i)&&(i=my(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Yu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",$u(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+ls(o,a);s+=Wi(o,t,n,l,i)}else if(l=py(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+ls(o,a++),s+=Wi(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ki(e,t,n){if(e==null)return e;var r=[],i=0;return Wi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function yy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},Hi={transition:null},vy={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:Hi,ReactCurrentOwner:gl};function Bf(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:ki,forEach:function(e,t,n){ki(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ki(e,function(){t++}),t},toArray:function(e){return ki(e,function(t){return t})||[]},only:function(e){if(!yl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=er;z.Fragment=oy;z.Profiler=ay;z.PureComponent=pl;z.StrictMode=sy;z.Suspense=dy;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vy;z.act=Bf;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Lf({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=gl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Ff.call(t,l)&&!Of.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ai,type:e.type,key:i,ref:o,props:r,_owner:s}};z.createContext=function(e){return e={$$typeof:uy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ly,_context:e},e.Consumer=e};z.createElement=Uf;z.createFactory=function(e){var t=Uf.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:cy,render:e}};z.isValidElement=yl;z.lazy=function(e){return{$$typeof:hy,_payload:{_status:-1,_result:e},_init:yy}};z.memo=function(e,t){return{$$typeof:fy,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=Hi.transition;Hi.transition={};try{e()}finally{Hi.transition=t}};z.unstable_act=Bf;z.useCallback=function(e,t){return Ee.current.useCallback(e,t)};z.useContext=function(e){return Ee.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};z.useEffect=function(e,t){return Ee.current.useEffect(e,t)};z.useId=function(){return Ee.current.useId()};z.useImperativeHandle=function(e,t,n){return Ee.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return Ee.current.useMemo(e,t)};z.useReducer=function(e,t,n){return Ee.current.useReducer(e,t,n)};z.useRef=function(e){return Ee.current.useRef(e)};z.useState=function(e){return Ee.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return Ee.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return Ee.current.useTransition()};z.version="18.3.1";Rf.exports=z;var w=Rf.exports;const xy=ry(w),wy=ny({__proto__:null,default:xy},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ky=w,Sy=Symbol.for("react.element"),Ty=Symbol.for("react.fragment"),jy=Object.prototype.hasOwnProperty,Ey=ky.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,by={key:!0,ref:!0,__self:!0,__source:!0};function Wf(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)jy.call(t,r)&&!by.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Sy,type:e,key:o,ref:s,props:i,_owner:Ey.current}}Oo.Fragment=Ty;Oo.jsx=Wf;Oo.jsxs=Wf;Mf.exports=Oo;var u=Mf.exports,Hf={exports:{}},Le={},$f={exports:{}},Yf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,A){var M=P.length;P.push(A);e:for(;0<M;){var W=M-1>>>1,ae=P[W];if(0<i(ae,A))P[W]=A,P[M]=ae,M=W;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var A=P[0],M=P.pop();if(M!==A){P[0]=M;e:for(var W=0,ae=P.length,xi=ae>>>1;W<xi;){var Jt=2*(W+1)-1,as=P[Jt],Zt=Jt+1,wi=P[Zt];if(0>i(as,M))Zt<ae&&0>i(wi,as)?(P[W]=wi,P[Zt]=M,W=Zt):(P[W]=as,P[Jt]=M,W=Jt);else if(Zt<ae&&0>i(wi,M))P[W]=wi,P[Zt]=M,W=Zt;else break e}}return A}function i(P,A){var M=P.sortIndex-A.sortIndex;return M!==0?M:P.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],d=1,f=null,h=3,y=!1,v=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var A=n(c);A!==null;){if(A.callback===null)r(c);else if(A.startTime<=P)r(c),A.sortIndex=A.expirationTime,t(l,A);else break;A=n(c)}}function k(P){if(x=!1,g(P),!v)if(n(l)!==null)v=!0,vi(T);else{var A=n(c);A!==null&&q(k,A.startTime-P)}}function T(P,A){v=!1,x&&(x=!1,p(j),j=-1),y=!0;var M=h;try{for(g(A),f=n(l);f!==null&&(!(f.expirationTime>A)||P&&!X());){var W=f.callback;if(typeof W=="function"){f.callback=null,h=f.priorityLevel;var ae=W(f.expirationTime<=A);A=e.unstable_now(),typeof ae=="function"?f.callback=ae:f===n(l)&&r(l),g(A)}else r(l);f=n(l)}if(f!==null)var xi=!0;else{var Jt=n(c);Jt!==null&&q(k,Jt.startTime-A),xi=!1}return xi}finally{f=null,h=M,y=!1}}var b=!1,C=null,j=-1,R=5,_=-1;function X(){return!(e.unstable_now()-_<R)}function it(){if(C!==null){var P=e.unstable_now();_=P;var A=!0;try{A=C(!0,P)}finally{A?qt():(b=!1,C=null)}}else b=!1}var qt;if(typeof m=="function")qt=function(){m(it)};else if(typeof MessageChannel<"u"){var lr=new MessageChannel,yi=lr.port2;lr.port1.onmessage=it,qt=function(){yi.postMessage(null)}}else qt=function(){S(it,0)};function vi(P){C=P,b||(b=!0,qt())}function q(P,A){j=S(function(){P(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,vi(T))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(P){switch(h){case 1:case 2:case 3:var A=3;break;default:A=h}var M=h;h=A;try{return P()}finally{h=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,A){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var M=h;h=P;try{return A()}finally{h=M}},e.unstable_scheduleCallback=function(P,A,M){var W=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?W+M:W):M=W,P){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=M+ae,P={id:d++,callback:A,priorityLevel:P,startTime:M,expirationTime:ae,sortIndex:-1},M>W?(P.sortIndex=M,t(c,P),n(l)===null&&P===n(c)&&(x?(p(j),j=-1):x=!0,q(k,M-W))):(P.sortIndex=ae,t(l,P),v||y||(v=!0,vi(T))),P},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(P){var A=h;return function(){var M=h;h=A;try{return P.apply(this,arguments)}finally{h=M}}}})(Yf);$f.exports=Yf;var Cy=$f.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Py=w,ze=Cy;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kf=new Set,Vr={};function vn(e,t){Yn(e,t),Yn(e+"Capture",t)}function Yn(e,t){for(Vr[e]=t,e=0;e<t.length;e++)Kf.add(t[e])}var vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Js=Object.prototype.hasOwnProperty,Dy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ku={},Gu={};function Ny(e){return Js.call(Gu,e)?!0:Js.call(Ku,e)?!1:Dy.test(e)?Gu[e]=!0:(Ku[e]=!0,!1)}function _y(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ay(e,t,n,r){if(t===null||typeof t>"u"||_y(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function be(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new be(e,5,!1,e.toLowerCase(),null,!1,!1)});var vl=/[\-:]([a-z])/g;function xl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(vl,xl);he[t]=new be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(vl,xl);he[t]=new be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(vl,xl);he[t]=new be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new be(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new be(e,1,!1,e.toLowerCase(),null,!0,!0)});function wl(e,t,n,r){var i=he.hasOwnProperty(t)?he[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ay(t,n,i,r)&&(n=null),r||i===null?Ny(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Tt=Py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Si=Symbol.for("react.element"),Tn=Symbol.for("react.portal"),jn=Symbol.for("react.fragment"),kl=Symbol.for("react.strict_mode"),Zs=Symbol.for("react.profiler"),Gf=Symbol.for("react.provider"),Qf=Symbol.for("react.context"),Sl=Symbol.for("react.forward_ref"),ea=Symbol.for("react.suspense"),ta=Symbol.for("react.suspense_list"),Tl=Symbol.for("react.memo"),bt=Symbol.for("react.lazy"),Xf=Symbol.for("react.offscreen"),Qu=Symbol.iterator;function ur(e){return e===null||typeof e!="object"?null:(e=Qu&&e[Qu]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,us;function vr(e){if(us===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);us=t&&t[1]||""}return`
`+us+e}var cs=!1;function ds(e,t){if(!e||cs)return"";cs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{cs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?vr(e):""}function My(e){switch(e.tag){case 5:return vr(e.type);case 16:return vr("Lazy");case 13:return vr("Suspense");case 19:return vr("SuspenseList");case 0:case 2:case 15:return e=ds(e.type,!1),e;case 11:return e=ds(e.type.render,!1),e;case 1:return e=ds(e.type,!0),e;default:return""}}function na(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case jn:return"Fragment";case Tn:return"Portal";case Zs:return"Profiler";case kl:return"StrictMode";case ea:return"Suspense";case ta:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qf:return(e.displayName||"Context")+".Consumer";case Gf:return(e._context.displayName||"Context")+".Provider";case Sl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Tl:return t=e.displayName||null,t!==null?t:na(e.type)||"Memo";case bt:t=e._payload,e=e._init;try{return na(e(t))}catch{}}return null}function Ry(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return na(t);case 8:return t===kl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zy(e){var t=qf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ti(e){e._valueTracker||(e._valueTracker=zy(e))}function Jf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=qf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function oo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ra(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Xu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Zf(e,t){t=t.checked,t!=null&&wl(e,"checked",t,!1)}function ia(e,t){Zf(e,t);var n=Wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?oa(e,t.type,n):t.hasOwnProperty("defaultValue")&&oa(e,t.type,Wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function qu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function oa(e,t,n){(t!=="number"||oo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var xr=Array.isArray;function Fn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function sa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ju(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(xr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wt(n)}}function eh(e,t){var n=Wt(t.value),r=Wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Zu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function th(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function aa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?th(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ji,nh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ji=ji||document.createElement("div"),ji.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ji.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ir(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ly=["Webkit","ms","Moz","O"];Object.keys(jr).forEach(function(e){Ly.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jr[t]=jr[e]})});function rh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||jr.hasOwnProperty(e)&&jr[e]?(""+t).trim():t+"px"}function ih(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=rh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Vy=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function la(e,t){if(t){if(Vy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function ua(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ca=null;function jl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var da=null,On=null,Un=null;function ec(e){if(e=ci(e)){if(typeof da!="function")throw Error(E(280));var t=e.stateNode;t&&(t=$o(t),da(e.stateNode,e.type,t))}}function oh(e){On?Un?Un.push(e):Un=[e]:On=e}function sh(){if(On){var e=On,t=Un;if(Un=On=null,ec(e),t)for(e=0;e<t.length;e++)ec(t[e])}}function ah(e,t){return e(t)}function lh(){}var fs=!1;function uh(e,t,n){if(fs)return e(t,n);fs=!0;try{return ah(e,t,n)}finally{fs=!1,(On!==null||Un!==null)&&(lh(),sh())}}function Fr(e,t){var n=e.stateNode;if(n===null)return null;var r=$o(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var fa=!1;if(vt)try{var cr={};Object.defineProperty(cr,"passive",{get:function(){fa=!0}}),window.addEventListener("test",cr,cr),window.removeEventListener("test",cr,cr)}catch{fa=!1}function Iy(e,t,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Er=!1,so=null,ao=!1,ha=null,Fy={onError:function(e){Er=!0,so=e}};function Oy(e,t,n,r,i,o,s,a,l){Er=!1,so=null,Iy.apply(Fy,arguments)}function Uy(e,t,n,r,i,o,s,a,l){if(Oy.apply(this,arguments),Er){if(Er){var c=so;Er=!1,so=null}else throw Error(E(198));ao||(ao=!0,ha=c)}}function xn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ch(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function tc(e){if(xn(e)!==e)throw Error(E(188))}function By(e){var t=e.alternate;if(!t){if(t=xn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return tc(i),e;if(o===r)return tc(i),t;o=o.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function dh(e){return e=By(e),e!==null?fh(e):null}function fh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=fh(e);if(t!==null)return t;e=e.sibling}return null}var hh=ze.unstable_scheduleCallback,nc=ze.unstable_cancelCallback,Wy=ze.unstable_shouldYield,Hy=ze.unstable_requestPaint,J=ze.unstable_now,$y=ze.unstable_getCurrentPriorityLevel,El=ze.unstable_ImmediatePriority,ph=ze.unstable_UserBlockingPriority,lo=ze.unstable_NormalPriority,Yy=ze.unstable_LowPriority,mh=ze.unstable_IdlePriority,Uo=null,lt=null;function Ky(e){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Uo,e,void 0,(e.current.flags&128)===128)}catch{}}var et=Math.clz32?Math.clz32:Xy,Gy=Math.log,Qy=Math.LN2;function Xy(e){return e>>>=0,e===0?32:31-(Gy(e)/Qy|0)|0}var Ei=64,bi=4194304;function wr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function uo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=wr(a):(o&=s,o!==0&&(r=wr(o)))}else s=n&~i,s!==0?r=wr(s):o!==0&&(r=wr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-et(t),i=1<<n,r|=e[n],t&=~i;return r}function qy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-et(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=qy(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function pa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gh(){var e=Ei;return Ei<<=1,!(Ei&4194240)&&(Ei=64),e}function hs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function li(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-et(t),e[t]=n}function Zy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-et(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function bl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-et(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var V=0;function yh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var vh,Cl,xh,wh,kh,ma=!1,Ci=[],Rt=null,zt=null,Lt=null,Or=new Map,Ur=new Map,Pt=[],ev="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rc(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Lt=null;break;case"pointerover":case"pointerout":Or.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ur.delete(t.pointerId)}}function dr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ci(t),t!==null&&Cl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function tv(e,t,n,r,i){switch(t){case"focusin":return Rt=dr(Rt,e,t,n,r,i),!0;case"dragenter":return zt=dr(zt,e,t,n,r,i),!0;case"mouseover":return Lt=dr(Lt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Or.set(o,dr(Or.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ur.set(o,dr(Ur.get(o)||null,e,t,n,r,i)),!0}return!1}function Sh(e){var t=on(e.target);if(t!==null){var n=xn(t);if(n!==null){if(t=n.tag,t===13){if(t=ch(n),t!==null){e.blockedOn=t,kh(e.priority,function(){xh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $i(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ga(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ca=r,n.target.dispatchEvent(r),ca=null}else return t=ci(n),t!==null&&Cl(t),e.blockedOn=n,!1;t.shift()}return!0}function ic(e,t,n){$i(e)&&n.delete(t)}function nv(){ma=!1,Rt!==null&&$i(Rt)&&(Rt=null),zt!==null&&$i(zt)&&(zt=null),Lt!==null&&$i(Lt)&&(Lt=null),Or.forEach(ic),Ur.forEach(ic)}function fr(e,t){e.blockedOn===t&&(e.blockedOn=null,ma||(ma=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,nv)))}function Br(e){function t(i){return fr(i,e)}if(0<Ci.length){fr(Ci[0],e);for(var n=1;n<Ci.length;n++){var r=Ci[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rt!==null&&fr(Rt,e),zt!==null&&fr(zt,e),Lt!==null&&fr(Lt,e),Or.forEach(t),Ur.forEach(t),n=0;n<Pt.length;n++)r=Pt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Pt.length&&(n=Pt[0],n.blockedOn===null);)Sh(n),n.blockedOn===null&&Pt.shift()}var Bn=Tt.ReactCurrentBatchConfig,co=!0;function rv(e,t,n,r){var i=V,o=Bn.transition;Bn.transition=null;try{V=1,Pl(e,t,n,r)}finally{V=i,Bn.transition=o}}function iv(e,t,n,r){var i=V,o=Bn.transition;Bn.transition=null;try{V=4,Pl(e,t,n,r)}finally{V=i,Bn.transition=o}}function Pl(e,t,n,r){if(co){var i=ga(e,t,n,r);if(i===null)Ts(e,t,r,fo,n),rc(e,r);else if(tv(i,e,t,n,r))r.stopPropagation();else if(rc(e,r),t&4&&-1<ev.indexOf(e)){for(;i!==null;){var o=ci(i);if(o!==null&&vh(o),o=ga(e,t,n,r),o===null&&Ts(e,t,r,fo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ts(e,t,r,null,n)}}var fo=null;function ga(e,t,n,r){if(fo=null,e=jl(r),e=on(e),e!==null)if(t=xn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ch(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fo=e,null}function Th(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($y()){case El:return 1;case ph:return 4;case lo:case Yy:return 16;case mh:return 536870912;default:return 16}default:return 16}}var Nt=null,Dl=null,Yi=null;function jh(){if(Yi)return Yi;var e,t=Dl,n=t.length,r,i="value"in Nt?Nt.value:Nt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Yi=i.slice(e,1<r?1-r:void 0)}function Ki(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pi(){return!0}function oc(){return!1}function Ve(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Pi:oc,this.isPropagationStopped=oc,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pi)},persist:function(){},isPersistent:Pi}),t}var tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nl=Ve(tr),ui=K({},tr,{view:0,detail:0}),ov=Ve(ui),ps,ms,hr,Bo=K({},ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_l,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hr&&(hr&&e.type==="mousemove"?(ps=e.screenX-hr.screenX,ms=e.screenY-hr.screenY):ms=ps=0,hr=e),ps)},movementY:function(e){return"movementY"in e?e.movementY:ms}}),sc=Ve(Bo),sv=K({},Bo,{dataTransfer:0}),av=Ve(sv),lv=K({},ui,{relatedTarget:0}),gs=Ve(lv),uv=K({},tr,{animationName:0,elapsedTime:0,pseudoElement:0}),cv=Ve(uv),dv=K({},tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fv=Ve(dv),hv=K({},tr,{data:0}),ac=Ve(hv),pv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gv[e])?!!t[e]:!1}function _l(){return yv}var vv=K({},ui,{key:function(e){if(e.key){var t=pv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ki(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_l,charCode:function(e){return e.type==="keypress"?Ki(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ki(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xv=Ve(vv),wv=K({},Bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lc=Ve(wv),kv=K({},ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_l}),Sv=Ve(kv),Tv=K({},tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),jv=Ve(Tv),Ev=K({},Bo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bv=Ve(Ev),Cv=[9,13,27,32],Al=vt&&"CompositionEvent"in window,br=null;vt&&"documentMode"in document&&(br=document.documentMode);var Pv=vt&&"TextEvent"in window&&!br,Eh=vt&&(!Al||br&&8<br&&11>=br),uc=" ",cc=!1;function bh(e,t){switch(e){case"keyup":return Cv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ch(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var En=!1;function Dv(e,t){switch(e){case"compositionend":return Ch(t);case"keypress":return t.which!==32?null:(cc=!0,uc);case"textInput":return e=t.data,e===uc&&cc?null:e;default:return null}}function Nv(e,t){if(En)return e==="compositionend"||!Al&&bh(e,t)?(e=jh(),Yi=Dl=Nt=null,En=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Eh&&t.locale!=="ko"?null:t.data;default:return null}}var _v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_v[e.type]:t==="textarea"}function Ph(e,t,n,r){oh(r),t=ho(t,"onChange"),0<t.length&&(n=new Nl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Cr=null,Wr=null;function Av(e){Fh(e,0)}function Wo(e){var t=Pn(e);if(Jf(t))return e}function Mv(e,t){if(e==="change")return t}var Dh=!1;if(vt){var ys;if(vt){var vs="oninput"in document;if(!vs){var fc=document.createElement("div");fc.setAttribute("oninput","return;"),vs=typeof fc.oninput=="function"}ys=vs}else ys=!1;Dh=ys&&(!document.documentMode||9<document.documentMode)}function hc(){Cr&&(Cr.detachEvent("onpropertychange",Nh),Wr=Cr=null)}function Nh(e){if(e.propertyName==="value"&&Wo(Wr)){var t=[];Ph(t,Wr,e,jl(e)),uh(Av,t)}}function Rv(e,t,n){e==="focusin"?(hc(),Cr=t,Wr=n,Cr.attachEvent("onpropertychange",Nh)):e==="focusout"&&hc()}function zv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wo(Wr)}function Lv(e,t){if(e==="click")return Wo(t)}function Vv(e,t){if(e==="input"||e==="change")return Wo(t)}function Iv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:Iv;function Hr(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Js.call(t,i)||!nt(e[i],t[i]))return!1}return!0}function pc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mc(e,t){var n=pc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pc(n)}}function _h(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_h(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ah(){for(var e=window,t=oo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=oo(e.document)}return t}function Ml(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Fv(e){var t=Ah(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&_h(n.ownerDocument.documentElement,n)){if(r!==null&&Ml(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=mc(n,o);var s=mc(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ov=vt&&"documentMode"in document&&11>=document.documentMode,bn=null,ya=null,Pr=null,va=!1;function gc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;va||bn==null||bn!==oo(r)||(r=bn,"selectionStart"in r&&Ml(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pr&&Hr(Pr,r)||(Pr=r,r=ho(ya,"onSelect"),0<r.length&&(t=new Nl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=bn)))}function Di(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Cn={animationend:Di("Animation","AnimationEnd"),animationiteration:Di("Animation","AnimationIteration"),animationstart:Di("Animation","AnimationStart"),transitionend:Di("Transition","TransitionEnd")},xs={},Mh={};vt&&(Mh=document.createElement("div").style,"AnimationEvent"in window||(delete Cn.animationend.animation,delete Cn.animationiteration.animation,delete Cn.animationstart.animation),"TransitionEvent"in window||delete Cn.transitionend.transition);function Ho(e){if(xs[e])return xs[e];if(!Cn[e])return e;var t=Cn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Mh)return xs[e]=t[n];return e}var Rh=Ho("animationend"),zh=Ho("animationiteration"),Lh=Ho("animationstart"),Vh=Ho("transitionend"),Ih=new Map,yc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kt(e,t){Ih.set(e,t),vn(t,[e])}for(var ws=0;ws<yc.length;ws++){var ks=yc[ws],Uv=ks.toLowerCase(),Bv=ks[0].toUpperCase()+ks.slice(1);Kt(Uv,"on"+Bv)}Kt(Rh,"onAnimationEnd");Kt(zh,"onAnimationIteration");Kt(Lh,"onAnimationStart");Kt("dblclick","onDoubleClick");Kt("focusin","onFocus");Kt("focusout","onBlur");Kt(Vh,"onTransitionEnd");Yn("onMouseEnter",["mouseout","mouseover"]);Yn("onMouseLeave",["mouseout","mouseover"]);Yn("onPointerEnter",["pointerout","pointerover"]);Yn("onPointerLeave",["pointerout","pointerover"]);vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wv=new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));function vc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Uy(r,t,void 0,e),e.currentTarget=null}function Fh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;vc(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;vc(i,a,c),o=l}}}if(ao)throw e=ha,ao=!1,ha=null,e}function F(e,t){var n=t[Ta];n===void 0&&(n=t[Ta]=new Set);var r=e+"__bubble";n.has(r)||(Oh(t,e,2,!1),n.add(r))}function Ss(e,t,n){var r=0;t&&(r|=4),Oh(n,e,r,t)}var Ni="_reactListening"+Math.random().toString(36).slice(2);function $r(e){if(!e[Ni]){e[Ni]=!0,Kf.forEach(function(n){n!=="selectionchange"&&(Wv.has(n)||Ss(n,!1,e),Ss(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ni]||(t[Ni]=!0,Ss("selectionchange",!1,t))}}function Oh(e,t,n,r){switch(Th(t)){case 1:var i=rv;break;case 4:i=iv;break;default:i=Pl}n=i.bind(null,t,n,e),i=void 0,!fa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ts(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=on(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}uh(function(){var c=o,d=jl(n),f=[];e:{var h=Ih.get(e);if(h!==void 0){var y=Nl,v=e;switch(e){case"keypress":if(Ki(n)===0)break e;case"keydown":case"keyup":y=xv;break;case"focusin":v="focus",y=gs;break;case"focusout":v="blur",y=gs;break;case"beforeblur":case"afterblur":y=gs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=sc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=av;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Sv;break;case Rh:case zh:case Lh:y=cv;break;case Vh:y=jv;break;case"scroll":y=ov;break;case"wheel":y=bv;break;case"copy":case"cut":case"paste":y=fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=lc}var x=(t&4)!==0,S=!x&&e==="scroll",p=x?h!==null?h+"Capture":null:h;x=[];for(var m=c,g;m!==null;){g=m;var k=g.stateNode;if(g.tag===5&&k!==null&&(g=k,p!==null&&(k=Fr(m,p),k!=null&&x.push(Yr(m,k,g)))),S)break;m=m.return}0<x.length&&(h=new y(h,v,null,n,d),f.push({event:h,listeners:x}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==ca&&(v=n.relatedTarget||n.fromElement)&&(on(v)||v[xt]))break e;if((y||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=c,v=v?on(v):null,v!==null&&(S=xn(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=c),y!==v)){if(x=sc,k="onMouseLeave",p="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(x=lc,k="onPointerLeave",p="onPointerEnter",m="pointer"),S=y==null?h:Pn(y),g=v==null?h:Pn(v),h=new x(k,m+"leave",y,n,d),h.target=S,h.relatedTarget=g,k=null,on(d)===c&&(x=new x(p,m+"enter",v,n,d),x.target=g,x.relatedTarget=S,k=x),S=k,y&&v)t:{for(x=y,p=v,m=0,g=x;g;g=Sn(g))m++;for(g=0,k=p;k;k=Sn(k))g++;for(;0<m-g;)x=Sn(x),m--;for(;0<g-m;)p=Sn(p),g--;for(;m--;){if(x===p||p!==null&&x===p.alternate)break t;x=Sn(x),p=Sn(p)}x=null}else x=null;y!==null&&xc(f,h,y,x,!1),v!==null&&S!==null&&xc(f,S,v,x,!0)}}e:{if(h=c?Pn(c):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var T=Mv;else if(dc(h))if(Dh)T=Vv;else{T=zv;var b=Rv}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=Lv);if(T&&(T=T(e,c))){Ph(f,T,n,d);break e}b&&b(e,h,c),e==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&oa(h,"number",h.value)}switch(b=c?Pn(c):window,e){case"focusin":(dc(b)||b.contentEditable==="true")&&(bn=b,ya=c,Pr=null);break;case"focusout":Pr=ya=bn=null;break;case"mousedown":va=!0;break;case"contextmenu":case"mouseup":case"dragend":va=!1,gc(f,n,d);break;case"selectionchange":if(Ov)break;case"keydown":case"keyup":gc(f,n,d)}var C;if(Al)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else En?bh(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Eh&&n.locale!=="ko"&&(En||j!=="onCompositionStart"?j==="onCompositionEnd"&&En&&(C=jh()):(Nt=d,Dl="value"in Nt?Nt.value:Nt.textContent,En=!0)),b=ho(c,j),0<b.length&&(j=new ac(j,e,null,n,d),f.push({event:j,listeners:b}),C?j.data=C:(C=Ch(n),C!==null&&(j.data=C)))),(C=Pv?Dv(e,n):Nv(e,n))&&(c=ho(c,"onBeforeInput"),0<c.length&&(d=new ac("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=C))}Fh(f,t)})}function Yr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ho(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Fr(e,n),o!=null&&r.unshift(Yr(e,o,i)),o=Fr(e,t),o!=null&&r.push(Yr(e,o,i))),e=e.return}return r}function Sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xc(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Fr(n,o),l!=null&&s.unshift(Yr(n,l,a))):i||(l=Fr(n,o),l!=null&&s.push(Yr(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Hv=/\r\n?/g,$v=/\u0000|\uFFFD/g;function wc(e){return(typeof e=="string"?e:""+e).replace(Hv,`
`).replace($v,"")}function _i(e,t,n){if(t=wc(t),wc(e)!==t&&n)throw Error(E(425))}function po(){}var xa=null,wa=null;function ka(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sa=typeof setTimeout=="function"?setTimeout:void 0,Yv=typeof clearTimeout=="function"?clearTimeout:void 0,kc=typeof Promise=="function"?Promise:void 0,Kv=typeof queueMicrotask=="function"?queueMicrotask:typeof kc<"u"?function(e){return kc.resolve(null).then(e).catch(Gv)}:Sa;function Gv(e){setTimeout(function(){throw e})}function js(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Br(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Br(t)}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Sc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var nr=Math.random().toString(36).slice(2),at="__reactFiber$"+nr,Kr="__reactProps$"+nr,xt="__reactContainer$"+nr,Ta="__reactEvents$"+nr,Qv="__reactListeners$"+nr,Xv="__reactHandles$"+nr;function on(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xt]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Sc(e);e!==null;){if(n=e[at])return n;e=Sc(e)}return t}e=n,n=e.parentNode}return null}function ci(e){return e=e[at]||e[xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function $o(e){return e[Kr]||null}var ja=[],Dn=-1;function Gt(e){return{current:e}}function O(e){0>Dn||(e.current=ja[Dn],ja[Dn]=null,Dn--)}function I(e,t){Dn++,ja[Dn]=e.current,e.current=t}var Ht={},ve=Gt(Ht),De=Gt(!1),hn=Ht;function Kn(e,t){var n=e.type.contextTypes;if(!n)return Ht;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(e){return e=e.childContextTypes,e!=null}function mo(){O(De),O(ve)}function Tc(e,t,n){if(ve.current!==Ht)throw Error(E(168));I(ve,t),I(De,n)}function Uh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,Ry(e)||"Unknown",i));return K({},n,r)}function go(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ht,hn=ve.current,I(ve,e),I(De,De.current),!0}function jc(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=Uh(e,t,hn),r.__reactInternalMemoizedMergedChildContext=e,O(De),O(ve),I(ve,e)):O(De),I(De,n)}var ht=null,Yo=!1,Es=!1;function Bh(e){ht===null?ht=[e]:ht.push(e)}function qv(e){Yo=!0,Bh(e)}function Qt(){if(!Es&&ht!==null){Es=!0;var e=0,t=V;try{var n=ht;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ht=null,Yo=!1}catch(i){throw ht!==null&&(ht=ht.slice(e+1)),hh(El,Qt),i}finally{V=t,Es=!1}}return null}var Nn=[],_n=0,yo=null,vo=0,Fe=[],Oe=0,pn=null,pt=1,mt="";function tn(e,t){Nn[_n++]=vo,Nn[_n++]=yo,yo=e,vo=t}function Wh(e,t,n){Fe[Oe++]=pt,Fe[Oe++]=mt,Fe[Oe++]=pn,pn=e;var r=pt;e=mt;var i=32-et(r)-1;r&=~(1<<i),n+=1;var o=32-et(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,pt=1<<32-et(t)+i|n<<i|r,mt=o+e}else pt=1<<o|n<<i|r,mt=e}function Rl(e){e.return!==null&&(tn(e,1),Wh(e,1,0))}function zl(e){for(;e===yo;)yo=Nn[--_n],Nn[_n]=null,vo=Nn[--_n],Nn[_n]=null;for(;e===pn;)pn=Fe[--Oe],Fe[Oe]=null,mt=Fe[--Oe],Fe[Oe]=null,pt=Fe[--Oe],Fe[Oe]=null}var Re=null,Me=null,B=!1,Ze=null;function Hh(e,t){var n=Ue(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ec(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Re=e,Me=Vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Re=e,Me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=pn!==null?{id:pt,overflow:mt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ue(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Re=e,Me=null,!0):!1;default:return!1}}function Ea(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ba(e){if(B){var t=Me;if(t){var n=t;if(!Ec(e,t)){if(Ea(e))throw Error(E(418));t=Vt(n.nextSibling);var r=Re;t&&Ec(e,t)?Hh(r,n):(e.flags=e.flags&-4097|2,B=!1,Re=e)}}else{if(Ea(e))throw Error(E(418));e.flags=e.flags&-4097|2,B=!1,Re=e}}}function bc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function Ai(e){if(e!==Re)return!1;if(!B)return bc(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ka(e.type,e.memoizedProps)),t&&(t=Me)){if(Ea(e))throw $h(),Error(E(418));for(;t;)Hh(e,t),t=Vt(t.nextSibling)}if(bc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Me=Vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Me=null}}else Me=Re?Vt(e.stateNode.nextSibling):null;return!0}function $h(){for(var e=Me;e;)e=Vt(e.nextSibling)}function Gn(){Me=Re=null,B=!1}function Ll(e){Ze===null?Ze=[e]:Ze.push(e)}var Jv=Tt.ReactCurrentBatchConfig;function pr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function Mi(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Cc(e){var t=e._init;return t(e._payload)}function Yh(e){function t(p,m){if(e){var g=p.deletions;g===null?(p.deletions=[m],p.flags|=16):g.push(m)}}function n(p,m){if(!e)return null;for(;m!==null;)t(p,m),m=m.sibling;return null}function r(p,m){for(p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function i(p,m){return p=Ut(p,m),p.index=0,p.sibling=null,p}function o(p,m,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<m?(p.flags|=2,m):g):(p.flags|=2,m)):(p.flags|=1048576,m)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,m,g,k){return m===null||m.tag!==6?(m=As(g,p.mode,k),m.return=p,m):(m=i(m,g),m.return=p,m)}function l(p,m,g,k){var T=g.type;return T===jn?d(p,m,g.props.children,k,g.key):m!==null&&(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===bt&&Cc(T)===m.type)?(k=i(m,g.props),k.ref=pr(p,m,g),k.return=p,k):(k=eo(g.type,g.key,g.props,null,p.mode,k),k.ref=pr(p,m,g),k.return=p,k)}function c(p,m,g,k){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=Ms(g,p.mode,k),m.return=p,m):(m=i(m,g.children||[]),m.return=p,m)}function d(p,m,g,k,T){return m===null||m.tag!==7?(m=dn(g,p.mode,k,T),m.return=p,m):(m=i(m,g),m.return=p,m)}function f(p,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=As(""+m,p.mode,g),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Si:return g=eo(m.type,m.key,m.props,null,p.mode,g),g.ref=pr(p,null,m),g.return=p,g;case Tn:return m=Ms(m,p.mode,g),m.return=p,m;case bt:var k=m._init;return f(p,k(m._payload),g)}if(xr(m)||ur(m))return m=dn(m,p.mode,g,null),m.return=p,m;Mi(p,m)}return null}function h(p,m,g,k){var T=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return T!==null?null:a(p,m,""+g,k);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Si:return g.key===T?l(p,m,g,k):null;case Tn:return g.key===T?c(p,m,g,k):null;case bt:return T=g._init,h(p,m,T(g._payload),k)}if(xr(g)||ur(g))return T!==null?null:d(p,m,g,k,null);Mi(p,g)}return null}function y(p,m,g,k,T){if(typeof k=="string"&&k!==""||typeof k=="number")return p=p.get(g)||null,a(m,p,""+k,T);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Si:return p=p.get(k.key===null?g:k.key)||null,l(m,p,k,T);case Tn:return p=p.get(k.key===null?g:k.key)||null,c(m,p,k,T);case bt:var b=k._init;return y(p,m,g,b(k._payload),T)}if(xr(k)||ur(k))return p=p.get(g)||null,d(m,p,k,T,null);Mi(m,k)}return null}function v(p,m,g,k){for(var T=null,b=null,C=m,j=m=0,R=null;C!==null&&j<g.length;j++){C.index>j?(R=C,C=null):R=C.sibling;var _=h(p,C,g[j],k);if(_===null){C===null&&(C=R);break}e&&C&&_.alternate===null&&t(p,C),m=o(_,m,j),b===null?T=_:b.sibling=_,b=_,C=R}if(j===g.length)return n(p,C),B&&tn(p,j),T;if(C===null){for(;j<g.length;j++)C=f(p,g[j],k),C!==null&&(m=o(C,m,j),b===null?T=C:b.sibling=C,b=C);return B&&tn(p,j),T}for(C=r(p,C);j<g.length;j++)R=y(C,p,j,g[j],k),R!==null&&(e&&R.alternate!==null&&C.delete(R.key===null?j:R.key),m=o(R,m,j),b===null?T=R:b.sibling=R,b=R);return e&&C.forEach(function(X){return t(p,X)}),B&&tn(p,j),T}function x(p,m,g,k){var T=ur(g);if(typeof T!="function")throw Error(E(150));if(g=T.call(g),g==null)throw Error(E(151));for(var b=T=null,C=m,j=m=0,R=null,_=g.next();C!==null&&!_.done;j++,_=g.next()){C.index>j?(R=C,C=null):R=C.sibling;var X=h(p,C,_.value,k);if(X===null){C===null&&(C=R);break}e&&C&&X.alternate===null&&t(p,C),m=o(X,m,j),b===null?T=X:b.sibling=X,b=X,C=R}if(_.done)return n(p,C),B&&tn(p,j),T;if(C===null){for(;!_.done;j++,_=g.next())_=f(p,_.value,k),_!==null&&(m=o(_,m,j),b===null?T=_:b.sibling=_,b=_);return B&&tn(p,j),T}for(C=r(p,C);!_.done;j++,_=g.next())_=y(C,p,j,_.value,k),_!==null&&(e&&_.alternate!==null&&C.delete(_.key===null?j:_.key),m=o(_,m,j),b===null?T=_:b.sibling=_,b=_);return e&&C.forEach(function(it){return t(p,it)}),B&&tn(p,j),T}function S(p,m,g,k){if(typeof g=="object"&&g!==null&&g.type===jn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Si:e:{for(var T=g.key,b=m;b!==null;){if(b.key===T){if(T=g.type,T===jn){if(b.tag===7){n(p,b.sibling),m=i(b,g.props.children),m.return=p,p=m;break e}}else if(b.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===bt&&Cc(T)===b.type){n(p,b.sibling),m=i(b,g.props),m.ref=pr(p,b,g),m.return=p,p=m;break e}n(p,b);break}else t(p,b);b=b.sibling}g.type===jn?(m=dn(g.props.children,p.mode,k,g.key),m.return=p,p=m):(k=eo(g.type,g.key,g.props,null,p.mode,k),k.ref=pr(p,m,g),k.return=p,p=k)}return s(p);case Tn:e:{for(b=g.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(p,m.sibling),m=i(m,g.children||[]),m.return=p,p=m;break e}else{n(p,m);break}else t(p,m);m=m.sibling}m=Ms(g,p.mode,k),m.return=p,p=m}return s(p);case bt:return b=g._init,S(p,m,b(g._payload),k)}if(xr(g))return v(p,m,g,k);if(ur(g))return x(p,m,g,k);Mi(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(n(p,m.sibling),m=i(m,g),m.return=p,p=m):(n(p,m),m=As(g,p.mode,k),m.return=p,p=m),s(p)):n(p,m)}return S}var Qn=Yh(!0),Kh=Yh(!1),xo=Gt(null),wo=null,An=null,Vl=null;function Il(){Vl=An=wo=null}function Fl(e){var t=xo.current;O(xo),e._currentValue=t}function Ca(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Wn(e,t){wo=e,Vl=An=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Pe=!0),e.firstContext=null)}function $e(e){var t=e._currentValue;if(Vl!==e)if(e={context:e,memoizedValue:t,next:null},An===null){if(wo===null)throw Error(E(308));An=e,wo.dependencies={lanes:0,firstContext:e}}else An=An.next=e;return t}var sn=null;function Ol(e){sn===null?sn=[e]:sn.push(e)}function Gh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ol(t)):(n.next=i.next,i.next=n),t.interleaved=n,wt(e,r)}function wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ct=!1;function Ul(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function It(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,wt(e,n)}return i=r.interleaved,i===null?(t.next=t,Ol(r)):(t.next=i.next,i.next=t),r.interleaved=t,wt(e,n)}function Gi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bl(e,n)}}function Pc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ko(e,t,n,r){var i=e.updateQueue;Ct=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,d=c=l=null,a=o;do{var h=a.lane,y=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,x=a;switch(h=t,y=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){f=v.call(y,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(y,f,h):v,h==null)break e;f=K({},f,h);break e;case 2:Ct=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else y={eventTime:y,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=y,l=f):d=d.next=y,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);gn|=s,e.lanes=s,e.memoizedState=f}}function Dc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var di={},ut=Gt(di),Gr=Gt(di),Qr=Gt(di);function an(e){if(e===di)throw Error(E(174));return e}function Bl(e,t){switch(I(Qr,t),I(Gr,e),I(ut,di),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:aa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=aa(t,e)}O(ut),I(ut,t)}function Xn(){O(ut),O(Gr),O(Qr)}function Xh(e){an(Qr.current);var t=an(ut.current),n=aa(t,e.type);t!==n&&(I(Gr,e),I(ut,n))}function Wl(e){Gr.current===e&&(O(ut),O(Gr))}var H=Gt(0);function So(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bs=[];function Hl(){for(var e=0;e<bs.length;e++)bs[e]._workInProgressVersionPrimary=null;bs.length=0}var Qi=Tt.ReactCurrentDispatcher,Cs=Tt.ReactCurrentBatchConfig,mn=0,Y=null,oe=null,le=null,To=!1,Dr=!1,Xr=0,Zv=0;function pe(){throw Error(E(321))}function $l(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function Yl(e,t,n,r,i,o){if(mn=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Qi.current=e===null||e.memoizedState===null?r0:i0,e=n(r,i),Dr){o=0;do{if(Dr=!1,Xr=0,25<=o)throw Error(E(301));o+=1,le=oe=null,t.updateQueue=null,Qi.current=o0,e=n(r,i)}while(Dr)}if(Qi.current=jo,t=oe!==null&&oe.next!==null,mn=0,le=oe=Y=null,To=!1,t)throw Error(E(300));return e}function Kl(){var e=Xr!==0;return Xr=0,e}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Y.memoizedState=le=e:le=le.next=e,le}function Ye(){if(oe===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=le===null?Y.memoizedState:le.next;if(t!==null)le=t,oe=e;else{if(e===null)throw Error(E(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},le===null?Y.memoizedState=le=e:le=le.next=e}return le}function qr(e,t){return typeof t=="function"?t(e):t}function Ps(e){var t=Ye(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=oe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var d=c.lane;if((mn&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,Y.lanes|=d,gn|=d}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,nt(r,t.memoizedState)||(Pe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Y.lanes|=o,gn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ds(e){var t=Ye(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);nt(o,t.memoizedState)||(Pe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function qh(){}function Jh(e,t){var n=Y,r=Ye(),i=t(),o=!nt(r.memoizedState,i);if(o&&(r.memoizedState=i,Pe=!0),r=r.queue,Gl(tp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,Jr(9,ep.bind(null,n,r,i,t),void 0,null),ue===null)throw Error(E(349));mn&30||Zh(n,t,i)}return i}function Zh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ep(e,t,n,r){t.value=n,t.getSnapshot=r,np(t)&&rp(e)}function tp(e,t,n){return n(function(){np(t)&&rp(e)})}function np(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function rp(e){var t=wt(e,1);t!==null&&tt(t,e,1,-1)}function Nc(e){var t=st();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qr,lastRenderedState:e},t.queue=e,e=e.dispatch=n0.bind(null,Y,e),[t.memoizedState,e]}function Jr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ip(){return Ye().memoizedState}function Xi(e,t,n,r){var i=st();Y.flags|=e,i.memoizedState=Jr(1|t,n,void 0,r===void 0?null:r)}function Ko(e,t,n,r){var i=Ye();r=r===void 0?null:r;var o=void 0;if(oe!==null){var s=oe.memoizedState;if(o=s.destroy,r!==null&&$l(r,s.deps)){i.memoizedState=Jr(t,n,o,r);return}}Y.flags|=e,i.memoizedState=Jr(1|t,n,o,r)}function _c(e,t){return Xi(8390656,8,e,t)}function Gl(e,t){return Ko(2048,8,e,t)}function op(e,t){return Ko(4,2,e,t)}function sp(e,t){return Ko(4,4,e,t)}function ap(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lp(e,t,n){return n=n!=null?n.concat([e]):null,Ko(4,4,ap.bind(null,t,e),n)}function Ql(){}function up(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$l(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function cp(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$l(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function dp(e,t,n){return mn&21?(nt(n,t)||(n=gh(),Y.lanes|=n,gn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Pe=!0),e.memoizedState=n)}function e0(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=Cs.transition;Cs.transition={};try{e(!1),t()}finally{V=n,Cs.transition=r}}function fp(){return Ye().memoizedState}function t0(e,t,n){var r=Ot(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hp(e))pp(t,n);else if(n=Gh(e,t,n,r),n!==null){var i=je();tt(n,e,r,i),mp(n,t,r)}}function n0(e,t,n){var r=Ot(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hp(e))pp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,nt(a,s)){var l=t.interleaved;l===null?(i.next=i,Ol(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Gh(e,t,i,r),n!==null&&(i=je(),tt(n,e,r,i),mp(n,t,r))}}function hp(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function pp(e,t){Dr=To=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function mp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bl(e,n)}}var jo={readContext:$e,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},r0={readContext:$e,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:_c,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xi(4194308,4,ap.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xi(4,2,e,t)},useMemo:function(e,t){var n=st();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=st();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=t0.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:Nc,useDebugValue:Ql,useDeferredValue:function(e){return st().memoizedState=e},useTransition:function(){var e=Nc(!1),t=e[0];return e=e0.bind(null,e[1]),st().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=st();if(B){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),ue===null)throw Error(E(349));mn&30||Zh(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,_c(tp.bind(null,r,o,e),[e]),r.flags|=2048,Jr(9,ep.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=st(),t=ue.identifierPrefix;if(B){var n=mt,r=pt;n=(r&~(1<<32-et(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Xr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Zv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},i0={readContext:$e,useCallback:up,useContext:$e,useEffect:Gl,useImperativeHandle:lp,useInsertionEffect:op,useLayoutEffect:sp,useMemo:cp,useReducer:Ps,useRef:ip,useState:function(){return Ps(qr)},useDebugValue:Ql,useDeferredValue:function(e){var t=Ye();return dp(t,oe.memoizedState,e)},useTransition:function(){var e=Ps(qr)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:qh,useSyncExternalStore:Jh,useId:fp,unstable_isNewReconciler:!1},o0={readContext:$e,useCallback:up,useContext:$e,useEffect:Gl,useImperativeHandle:lp,useInsertionEffect:op,useLayoutEffect:sp,useMemo:cp,useReducer:Ds,useRef:ip,useState:function(){return Ds(qr)},useDebugValue:Ql,useDeferredValue:function(e){var t=Ye();return oe===null?t.memoizedState=e:dp(t,oe.memoizedState,e)},useTransition:function(){var e=Ds(qr)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:qh,useSyncExternalStore:Jh,useId:fp,unstable_isNewReconciler:!1};function qe(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Pa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Go={isMounted:function(e){return(e=e._reactInternals)?xn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=je(),i=Ot(e),o=gt(r,i);o.payload=t,n!=null&&(o.callback=n),t=It(e,o,i),t!==null&&(tt(t,e,i,r),Gi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=je(),i=Ot(e),o=gt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=It(e,o,i),t!==null&&(tt(t,e,i,r),Gi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=je(),r=Ot(e),i=gt(n,r);i.tag=2,t!=null&&(i.callback=t),t=It(e,i,r),t!==null&&(tt(t,e,r,n),Gi(t,e,r))}};function Ac(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Hr(n,r)||!Hr(i,o):!0}function gp(e,t,n){var r=!1,i=Ht,o=t.contextType;return typeof o=="object"&&o!==null?o=$e(o):(i=Ne(t)?hn:ve.current,r=t.contextTypes,o=(r=r!=null)?Kn(e,i):Ht),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Go,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Mc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Go.enqueueReplaceState(t,t.state,null)}function Da(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ul(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=$e(o):(o=Ne(t)?hn:ve.current,i.context=Kn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Pa(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Go.enqueueReplaceState(i,i.state,null),ko(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function qn(e,t){try{var n="",r=t;do n+=My(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ns(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Na(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var s0=typeof WeakMap=="function"?WeakMap:Map;function yp(e,t,n){n=gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){bo||(bo=!0,Oa=r),Na(e,t)},n}function vp(e,t,n){n=gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Na(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Na(e,t),typeof r!="function"&&(Ft===null?Ft=new Set([this]):Ft.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Rc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new s0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=w0.bind(null,e,t,n),t.then(e,e))}function zc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Lc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=gt(-1,1),t.tag=2,It(n,t,1))),n.lanes|=1),e)}var a0=Tt.ReactCurrentOwner,Pe=!1;function we(e,t,n,r){t.child=e===null?Kh(t,null,n,r):Qn(t,e.child,n,r)}function Vc(e,t,n,r,i){n=n.render;var o=t.ref;return Wn(t,i),r=Yl(e,t,n,r,o,i),n=Kl(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kt(e,t,i)):(B&&n&&Rl(t),t.flags|=1,we(e,t,r,i),t.child)}function Ic(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ru(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,xp(e,t,o,r,i)):(e=eo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Hr,n(s,r)&&e.ref===t.ref)return kt(e,t,i)}return t.flags|=1,e=Ut(o,r),e.ref=t.ref,e.return=t,t.child=e}function xp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Hr(o,r)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Pe=!0);else return t.lanes=e.lanes,kt(e,t,i)}return _a(e,t,n,r,i)}function wp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(Rn,Ae),Ae|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,I(Rn,Ae),Ae|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,I(Rn,Ae),Ae|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,I(Rn,Ae),Ae|=r;return we(e,t,i,n),t.child}function kp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _a(e,t,n,r,i){var o=Ne(n)?hn:ve.current;return o=Kn(t,o),Wn(t,i),n=Yl(e,t,n,r,o,i),r=Kl(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kt(e,t,i)):(B&&r&&Rl(t),t.flags|=1,we(e,t,n,i),t.child)}function Fc(e,t,n,r,i){if(Ne(n)){var o=!0;go(t)}else o=!1;if(Wn(t,i),t.stateNode===null)qi(e,t),gp(t,n,r),Da(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=$e(c):(c=Ne(n)?hn:ve.current,c=Kn(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Mc(t,s,r,c),Ct=!1;var h=t.memoizedState;s.state=h,ko(t,r,s,i),l=t.memoizedState,a!==r||h!==l||De.current||Ct?(typeof d=="function"&&(Pa(t,n,d,r),l=t.memoizedState),(a=Ct||Ac(t,n,a,r,h,l,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Qh(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:qe(t.type,a),s.props=c,f=t.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=$e(l):(l=Ne(n)?hn:ve.current,l=Kn(t,l));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Mc(t,s,r,l),Ct=!1,h=t.memoizedState,s.state=h,ko(t,r,s,i);var v=t.memoizedState;a!==f||h!==v||De.current||Ct?(typeof y=="function"&&(Pa(t,n,y,r),v=t.memoizedState),(c=Ct||Ac(t,n,c,r,h,v,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Aa(e,t,n,r,o,i)}function Aa(e,t,n,r,i,o){kp(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&jc(t,n,!1),kt(e,t,o);r=t.stateNode,a0.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Qn(t,e.child,null,o),t.child=Qn(t,null,a,o)):we(e,t,a,o),t.memoizedState=r.state,i&&jc(t,n,!0),t.child}function Sp(e){var t=e.stateNode;t.pendingContext?Tc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Tc(e,t.context,!1),Bl(e,t.containerInfo)}function Oc(e,t,n,r,i){return Gn(),Ll(i),t.flags|=256,we(e,t,n,r),t.child}var Ma={dehydrated:null,treeContext:null,retryLane:0};function Ra(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tp(e,t,n){var r=t.pendingProps,i=H.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),I(H,i&1),e===null)return ba(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=qo(s,r,0,null),e=dn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ra(n),t.memoizedState=Ma,e):Xl(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return l0(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Ut(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Ut(a,o):(o=dn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Ra(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Ma,r}return o=e.child,e=o.sibling,r=Ut(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xl(e,t){return t=qo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ri(e,t,n,r){return r!==null&&Ll(r),Qn(t,e.child,null,n),e=Xl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function l0(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Ns(Error(E(422))),Ri(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=qo({mode:"visible",children:r.children},i,0,null),o=dn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Qn(t,e.child,null,s),t.child.memoizedState=Ra(s),t.memoizedState=Ma,o);if(!(t.mode&1))return Ri(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(E(419)),r=Ns(o,r,void 0),Ri(e,t,s,r)}if(a=(s&e.childLanes)!==0,Pe||a){if(r=ue,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,wt(e,i),tt(r,e,i,-1))}return nu(),r=Ns(Error(E(421))),Ri(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=k0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Me=Vt(i.nextSibling),Re=t,B=!0,Ze=null,e!==null&&(Fe[Oe++]=pt,Fe[Oe++]=mt,Fe[Oe++]=pn,pt=e.id,mt=e.overflow,pn=t),t=Xl(t,r.children),t.flags|=4096,t)}function Uc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ca(e.return,t,n)}function _s(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function jp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(we(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Uc(e,n,t);else if(e.tag===19)Uc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(H,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&So(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),_s(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&So(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}_s(t,!0,n,null,o);break;case"together":_s(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),gn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=Ut(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ut(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function u0(e,t,n){switch(t.tag){case 3:Sp(t),Gn();break;case 5:Xh(t);break;case 1:Ne(t.type)&&go(t);break;case 4:Bl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;I(xo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(I(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?Tp(e,t,n):(I(H,H.current&1),e=kt(e,t,n),e!==null?e.sibling:null);I(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return jp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),I(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,wp(e,t,n)}return kt(e,t,n)}var Ep,za,bp,Cp;Ep=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};za=function(){};bp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,an(ut.current);var o=null;switch(n){case"input":i=ra(e,i),r=ra(e,r),o=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),o=[];break;case"textarea":i=sa(e,i),r=sa(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=po)}la(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Vr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Vr.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&F("scroll",e),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Cp=function(e,t,n,r){n!==r&&(t.flags|=4)};function mr(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function c0(e,t,n){var r=t.pendingProps;switch(zl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return Ne(t.type)&&mo(),me(t),null;case 3:return r=t.stateNode,Xn(),O(De),O(ve),Hl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ai(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ze!==null&&(Wa(Ze),Ze=null))),za(e,t),me(t),null;case 5:Wl(t);var i=an(Qr.current);if(n=t.type,e!==null&&t.stateNode!=null)bp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return me(t),null}if(e=an(ut.current),Ai(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[at]=t,r[Kr]=o,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(i=0;i<kr.length;i++)F(kr[i],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":Xu(r,o),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},F("invalid",r);break;case"textarea":Ju(r,o),F("invalid",r)}la(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&_i(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&_i(r.textContent,a,e),i=["children",""+a]):Vr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&F("scroll",r)}switch(n){case"input":Ti(r),qu(r,o,!0);break;case"textarea":Ti(r),Zu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=po)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=th(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[at]=t,e[Kr]=r,Ep(e,t,!1,!1),t.stateNode=e;e:{switch(s=ua(n,r),n){case"dialog":F("cancel",e),F("close",e),i=r;break;case"iframe":case"object":case"embed":F("load",e),i=r;break;case"video":case"audio":for(i=0;i<kr.length;i++)F(kr[i],e);i=r;break;case"source":F("error",e),i=r;break;case"img":case"image":case"link":F("error",e),F("load",e),i=r;break;case"details":F("toggle",e),i=r;break;case"input":Xu(e,r),i=ra(e,r),F("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),F("invalid",e);break;case"textarea":Ju(e,r),i=sa(e,r),F("invalid",e);break;default:i=r}la(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?ih(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&nh(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ir(e,l):typeof l=="number"&&Ir(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Vr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&F("scroll",e):l!=null&&wl(e,o,l,s))}switch(n){case"input":Ti(e),qu(e,r,!1);break;case"textarea":Ti(e),Zu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Fn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Fn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=po)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)Cp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=an(Qr.current),an(ut.current),Ai(t)){if(r=t.stateNode,n=t.memoizedProps,r[at]=t,(o=r.nodeValue!==n)&&(e=Re,e!==null))switch(e.tag){case 3:_i(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_i(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[at]=t,t.stateNode=r}return me(t),null;case 13:if(O(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&Me!==null&&t.mode&1&&!(t.flags&128))$h(),Gn(),t.flags|=98560,o=!1;else if(o=Ai(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[at]=t}else Gn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),o=!1}else Ze!==null&&(Wa(Ze),Ze=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?se===0&&(se=3):nu())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return Xn(),za(e,t),e===null&&$r(t.stateNode.containerInfo),me(t),null;case 10:return Fl(t.type._context),me(t),null;case 17:return Ne(t.type)&&mo(),me(t),null;case 19:if(O(H),o=t.memoizedState,o===null)return me(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)mr(o,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=So(e),s!==null){for(t.flags|=128,mr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return I(H,H.current&1|2),t.child}e=e.sibling}o.tail!==null&&J()>Jn&&(t.flags|=128,r=!0,mr(o,!1),t.lanes=4194304)}else{if(!r)if(e=So(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!B)return me(t),null}else 2*J()-o.renderingStartTime>Jn&&n!==1073741824&&(t.flags|=128,r=!0,mr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=J(),t.sibling=null,n=H.current,I(H,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return tu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ae&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function d0(e,t){switch(zl(t),t.tag){case 1:return Ne(t.type)&&mo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xn(),O(De),O(ve),Hl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Wl(t),null;case 13:if(O(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(H),null;case 4:return Xn(),null;case 10:return Fl(t.type._context),null;case 22:case 23:return tu(),null;case 24:return null;default:return null}}var zi=!1,ge=!1,f0=typeof WeakSet=="function"?WeakSet:Set,N=null;function Mn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function La(e,t,n){try{n()}catch(r){Q(e,t,r)}}var Bc=!1;function h0(e,t){if(xa=co,e=Ah(),Ml(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,d=0,f=e,h=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(y=f.firstChild)!==null;)h=f,f=y;for(;;){if(f===e)break t;if(h===n&&++c===i&&(a=s),h===o&&++d===r&&(l=s),(y=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wa={focusedElem:e,selectionRange:n},co=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,S=v.memoizedState,p=t.stateNode,m=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:qe(t.type,x),S);p.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(k){Q(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return v=Bc,Bc=!1,v}function Nr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&La(t,n,o)}i=i.next}while(i!==r)}}function Qo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Va(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Pp(e){var t=e.alternate;t!==null&&(e.alternate=null,Pp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[at],delete t[Kr],delete t[Ta],delete t[Qv],delete t[Xv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dp(e){return e.tag===5||e.tag===3||e.tag===4}function Wc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ia(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=po));else if(r!==4&&(e=e.child,e!==null))for(Ia(e,t,n),e=e.sibling;e!==null;)Ia(e,t,n),e=e.sibling}function Fa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fa(e,t,n),e=e.sibling;e!==null;)Fa(e,t,n),e=e.sibling}var ce=null,Je=!1;function jt(e,t,n){for(n=n.child;n!==null;)Np(e,t,n),n=n.sibling}function Np(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Uo,n)}catch{}switch(n.tag){case 5:ge||Mn(n,t);case 6:var r=ce,i=Je;ce=null,jt(e,t,n),ce=r,Je=i,ce!==null&&(Je?(e=ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ce.removeChild(n.stateNode));break;case 18:ce!==null&&(Je?(e=ce,n=n.stateNode,e.nodeType===8?js(e.parentNode,n):e.nodeType===1&&js(e,n),Br(e)):js(ce,n.stateNode));break;case 4:r=ce,i=Je,ce=n.stateNode.containerInfo,Je=!0,jt(e,t,n),ce=r,Je=i;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&La(n,t,s),i=i.next}while(i!==r)}jt(e,t,n);break;case 1:if(!ge&&(Mn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Q(n,t,a)}jt(e,t,n);break;case 21:jt(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,jt(e,t,n),ge=r):jt(e,t,n);break;default:jt(e,t,n)}}function Hc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new f0),t.forEach(function(r){var i=S0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ke(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ce=a.stateNode,Je=!1;break e;case 3:ce=a.stateNode.containerInfo,Je=!0;break e;case 4:ce=a.stateNode.containerInfo,Je=!0;break e}a=a.return}if(ce===null)throw Error(E(160));Np(o,s,i),ce=null,Je=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Q(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_p(t,e),t=t.sibling}function _p(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ke(t,e),ot(e),r&4){try{Nr(3,e,e.return),Qo(3,e)}catch(x){Q(e,e.return,x)}try{Nr(5,e,e.return)}catch(x){Q(e,e.return,x)}}break;case 1:Ke(t,e),ot(e),r&512&&n!==null&&Mn(n,n.return);break;case 5:if(Ke(t,e),ot(e),r&512&&n!==null&&Mn(n,n.return),e.flags&32){var i=e.stateNode;try{Ir(i,"")}catch(x){Q(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Zf(i,o),ua(a,s);var c=ua(a,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?ih(i,f):d==="dangerouslySetInnerHTML"?nh(i,f):d==="children"?Ir(i,f):wl(i,d,f,c)}switch(a){case"input":ia(i,o);break;case"textarea":eh(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Fn(i,!!o.multiple,y,!1):h!==!!o.multiple&&(o.defaultValue!=null?Fn(i,!!o.multiple,o.defaultValue,!0):Fn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Kr]=o}catch(x){Q(e,e.return,x)}}break;case 6:if(Ke(t,e),ot(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){Q(e,e.return,x)}}break;case 3:if(Ke(t,e),ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Br(t.containerInfo)}catch(x){Q(e,e.return,x)}break;case 4:Ke(t,e),ot(e);break;case 13:Ke(t,e),ot(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Zl=J())),r&4&&Hc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(c=ge)||d,Ke(t,e),ge=c):Ke(t,e),ot(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(N=e,d=e.child;d!==null;){for(f=N=d;N!==null;){switch(h=N,y=h.child,h.tag){case 0:case 11:case 14:case 15:Nr(4,h,h.return);break;case 1:Mn(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){Q(r,n,x)}}break;case 5:Mn(h,h.return);break;case 22:if(h.memoizedState!==null){Yc(f);continue}}y!==null?(y.return=h,N=y):Yc(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=rh("display",s))}catch(x){Q(e,e.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){Q(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ke(t,e),ot(e),r&4&&Hc(e);break;case 21:break;default:Ke(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Dp(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ir(i,""),r.flags&=-33);var o=Wc(e);Fa(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Wc(e);Ia(e,a,s);break;default:throw Error(E(161))}}catch(l){Q(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function p0(e,t,n){N=e,Ap(e)}function Ap(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||zi;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ge;a=zi;var c=ge;if(zi=s,(ge=l)&&!c)for(N=i;N!==null;)s=N,l=s.child,s.tag===22&&s.memoizedState!==null?Kc(i):l!==null?(l.return=s,N=l):Kc(i);for(;o!==null;)N=o,Ap(o),o=o.sibling;N=i,zi=a,ge=c}$c(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):$c(e)}}function $c(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||Qo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:qe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Dc(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Dc(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Br(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}ge||t.flags&512&&Va(t)}catch(h){Q(t,t.return,h)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Yc(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Kc(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Qo(4,t)}catch(l){Q(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Q(t,i,l)}}var o=t.return;try{Va(t)}catch(l){Q(t,o,l)}break;case 5:var s=t.return;try{Va(t)}catch(l){Q(t,s,l)}}}catch(l){Q(t,t.return,l)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var m0=Math.ceil,Eo=Tt.ReactCurrentDispatcher,ql=Tt.ReactCurrentOwner,We=Tt.ReactCurrentBatchConfig,L=0,ue=null,ne=null,fe=0,Ae=0,Rn=Gt(0),se=0,Zr=null,gn=0,Xo=0,Jl=0,_r=null,Ce=null,Zl=0,Jn=1/0,ft=null,bo=!1,Oa=null,Ft=null,Li=!1,_t=null,Co=0,Ar=0,Ua=null,Ji=-1,Zi=0;function je(){return L&6?J():Ji!==-1?Ji:Ji=J()}function Ot(e){return e.mode&1?L&2&&fe!==0?fe&-fe:Jv.transition!==null?(Zi===0&&(Zi=gh()),Zi):(e=V,e!==0||(e=window.event,e=e===void 0?16:Th(e.type)),e):1}function tt(e,t,n,r){if(50<Ar)throw Ar=0,Ua=null,Error(E(185));li(e,n,r),(!(L&2)||e!==ue)&&(e===ue&&(!(L&2)&&(Xo|=n),se===4&&Dt(e,fe)),_e(e,r),n===1&&L===0&&!(t.mode&1)&&(Jn=J()+500,Yo&&Qt()))}function _e(e,t){var n=e.callbackNode;Jy(e,t);var r=uo(e,e===ue?fe:0);if(r===0)n!==null&&nc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&nc(n),t===1)e.tag===0?qv(Gc.bind(null,e)):Bh(Gc.bind(null,e)),Kv(function(){!(L&6)&&Qt()}),n=null;else{switch(yh(r)){case 1:n=El;break;case 4:n=ph;break;case 16:n=lo;break;case 536870912:n=mh;break;default:n=lo}n=Op(n,Mp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Mp(e,t){if(Ji=-1,Zi=0,L&6)throw Error(E(327));var n=e.callbackNode;if(Hn()&&e.callbackNode!==n)return null;var r=uo(e,e===ue?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Po(e,r);else{t=r;var i=L;L|=2;var o=zp();(ue!==e||fe!==t)&&(ft=null,Jn=J()+500,cn(e,t));do try{v0();break}catch(a){Rp(e,a)}while(!0);Il(),Eo.current=o,L=i,ne!==null?t=0:(ue=null,fe=0,t=se)}if(t!==0){if(t===2&&(i=pa(e),i!==0&&(r=i,t=Ba(e,i))),t===1)throw n=Zr,cn(e,0),Dt(e,r),_e(e,J()),n;if(t===6)Dt(e,r);else{if(i=e.current.alternate,!(r&30)&&!g0(i)&&(t=Po(e,r),t===2&&(o=pa(e),o!==0&&(r=o,t=Ba(e,o))),t===1))throw n=Zr,cn(e,0),Dt(e,r),_e(e,J()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:nn(e,Ce,ft);break;case 3:if(Dt(e,r),(r&130023424)===r&&(t=Zl+500-J(),10<t)){if(uo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Sa(nn.bind(null,e,Ce,ft),t);break}nn(e,Ce,ft);break;case 4:if(Dt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-et(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*m0(r/1960))-r,10<r){e.timeoutHandle=Sa(nn.bind(null,e,Ce,ft),r);break}nn(e,Ce,ft);break;case 5:nn(e,Ce,ft);break;default:throw Error(E(329))}}}return _e(e,J()),e.callbackNode===n?Mp.bind(null,e):null}function Ba(e,t){var n=_r;return e.current.memoizedState.isDehydrated&&(cn(e,t).flags|=256),e=Po(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&Wa(t)),e}function Wa(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function g0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!nt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dt(e,t){for(t&=~Jl,t&=~Xo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-et(t),r=1<<n;e[n]=-1,t&=~r}}function Gc(e){if(L&6)throw Error(E(327));Hn();var t=uo(e,0);if(!(t&1))return _e(e,J()),null;var n=Po(e,t);if(e.tag!==0&&n===2){var r=pa(e);r!==0&&(t=r,n=Ba(e,r))}if(n===1)throw n=Zr,cn(e,0),Dt(e,t),_e(e,J()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,nn(e,Ce,ft),_e(e,J()),null}function eu(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(Jn=J()+500,Yo&&Qt())}}function yn(e){_t!==null&&_t.tag===0&&!(L&6)&&Hn();var t=L;L|=1;var n=We.transition,r=V;try{if(We.transition=null,V=1,e)return e()}finally{V=r,We.transition=n,L=t,!(L&6)&&Qt()}}function tu(){Ae=Rn.current,O(Rn)}function cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yv(n)),ne!==null)for(n=ne.return;n!==null;){var r=n;switch(zl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&mo();break;case 3:Xn(),O(De),O(ve),Hl();break;case 5:Wl(r);break;case 4:Xn();break;case 13:O(H);break;case 19:O(H);break;case 10:Fl(r.type._context);break;case 22:case 23:tu()}n=n.return}if(ue=e,ne=e=Ut(e.current,null),fe=Ae=t,se=0,Zr=null,Jl=Xo=gn=0,Ce=_r=null,sn!==null){for(t=0;t<sn.length;t++)if(n=sn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}sn=null}return e}function Rp(e,t){do{var n=ne;try{if(Il(),Qi.current=jo,To){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}To=!1}if(mn=0,le=oe=Y=null,Dr=!1,Xr=0,ql.current=null,n===null||n.return===null){se=1,Zr=t,ne=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=fe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=zc(s);if(y!==null){y.flags&=-257,Lc(y,s,a,o,t),y.mode&1&&Rc(o,c,t),t=y,l=c;var v=t.updateQueue;if(v===null){var x=new Set;x.add(l),t.updateQueue=x}else v.add(l);break e}else{if(!(t&1)){Rc(o,c,t),nu();break e}l=Error(E(426))}}else if(B&&a.mode&1){var S=zc(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Lc(S,s,a,o,t),Ll(qn(l,a));break e}}o=l=qn(l,a),se!==4&&(se=2),_r===null?_r=[o]:_r.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=yp(o,l,t);Pc(o,p);break e;case 1:a=l;var m=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ft===null||!Ft.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=vp(o,a,t);Pc(o,k);break e}}o=o.return}while(o!==null)}Vp(n)}catch(T){t=T,ne===n&&n!==null&&(ne=n=n.return);continue}break}while(!0)}function zp(){var e=Eo.current;return Eo.current=jo,e===null?jo:e}function nu(){(se===0||se===3||se===2)&&(se=4),ue===null||!(gn&268435455)&&!(Xo&268435455)||Dt(ue,fe)}function Po(e,t){var n=L;L|=2;var r=zp();(ue!==e||fe!==t)&&(ft=null,cn(e,t));do try{y0();break}catch(i){Rp(e,i)}while(!0);if(Il(),L=n,Eo.current=r,ne!==null)throw Error(E(261));return ue=null,fe=0,se}function y0(){for(;ne!==null;)Lp(ne)}function v0(){for(;ne!==null&&!Wy();)Lp(ne)}function Lp(e){var t=Fp(e.alternate,e,Ae);e.memoizedProps=e.pendingProps,t===null?Vp(e):ne=t,ql.current=null}function Vp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=d0(n,t),n!==null){n.flags&=32767,ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,ne=null;return}}else if(n=c0(n,t,Ae),n!==null){ne=n;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);se===0&&(se=5)}function nn(e,t,n){var r=V,i=We.transition;try{We.transition=null,V=1,x0(e,t,n,r)}finally{We.transition=i,V=r}return null}function x0(e,t,n,r){do Hn();while(_t!==null);if(L&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Zy(e,o),e===ue&&(ne=ue=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Li||(Li=!0,Op(lo,function(){return Hn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=We.transition,We.transition=null;var s=V;V=1;var a=L;L|=4,ql.current=null,h0(e,n),_p(n,e),Fv(wa),co=!!xa,wa=xa=null,e.current=n,p0(n),Hy(),L=a,V=s,We.transition=o}else e.current=n;if(Li&&(Li=!1,_t=e,Co=i),o=e.pendingLanes,o===0&&(Ft=null),Ky(n.stateNode),_e(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(bo)throw bo=!1,e=Oa,Oa=null,e;return Co&1&&e.tag!==0&&Hn(),o=e.pendingLanes,o&1?e===Ua?Ar++:(Ar=0,Ua=e):Ar=0,Qt(),null}function Hn(){if(_t!==null){var e=yh(Co),t=We.transition,n=V;try{if(We.transition=null,V=16>e?16:e,_t===null)var r=!1;else{if(e=_t,_t=null,Co=0,L&6)throw Error(E(331));var i=L;for(L|=4,N=e.current;N!==null;){var o=N,s=o.child;if(N.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(N=c;N!==null;){var d=N;switch(d.tag){case 0:case 11:case 15:Nr(8,d,o)}var f=d.child;if(f!==null)f.return=d,N=f;else for(;N!==null;){d=N;var h=d.sibling,y=d.return;if(Pp(d),d===c){N=null;break}if(h!==null){h.return=y,N=h;break}N=y}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}N=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,N=s;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Nr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,N=p;break e}N=o.return}}var m=e.current;for(N=m;N!==null;){s=N;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,N=g;else e:for(s=m;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Qo(9,a)}}catch(T){Q(a,a.return,T)}if(a===s){N=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,N=k;break e}N=a.return}}if(L=i,Qt(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Uo,e)}catch{}r=!0}return r}finally{V=n,We.transition=t}}return!1}function Qc(e,t,n){t=qn(n,t),t=yp(e,t,1),e=It(e,t,1),t=je(),e!==null&&(li(e,1,t),_e(e,t))}function Q(e,t,n){if(e.tag===3)Qc(e,e,n);else for(;t!==null;){if(t.tag===3){Qc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ft===null||!Ft.has(r))){e=qn(n,e),e=vp(t,e,1),t=It(t,e,1),e=je(),t!==null&&(li(t,1,e),_e(t,e));break}}t=t.return}}function w0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=je(),e.pingedLanes|=e.suspendedLanes&n,ue===e&&(fe&n)===n&&(se===4||se===3&&(fe&130023424)===fe&&500>J()-Zl?cn(e,0):Jl|=n),_e(e,t)}function Ip(e,t){t===0&&(e.mode&1?(t=bi,bi<<=1,!(bi&130023424)&&(bi=4194304)):t=1);var n=je();e=wt(e,t),e!==null&&(li(e,t,n),_e(e,n))}function k0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ip(e,n)}function S0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),Ip(e,n)}var Fp;Fp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)Pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Pe=!1,u0(e,t,n);Pe=!!(e.flags&131072)}else Pe=!1,B&&t.flags&1048576&&Wh(t,vo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qi(e,t),e=t.pendingProps;var i=Kn(t,ve.current);Wn(t,n),i=Yl(null,t,r,e,i,n);var o=Kl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(o=!0,go(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ul(t),i.updater=Go,t.stateNode=i,i._reactInternals=t,Da(t,r,e,n),t=Aa(null,t,r,!0,o,n)):(t.tag=0,B&&o&&Rl(t),we(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=j0(r),e=qe(r,e),i){case 0:t=_a(null,t,r,e,n);break e;case 1:t=Fc(null,t,r,e,n);break e;case 11:t=Vc(null,t,r,e,n);break e;case 14:t=Ic(null,t,r,qe(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),_a(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),Fc(e,t,r,i,n);case 3:e:{if(Sp(t),e===null)throw Error(E(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Qh(e,t),ko(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=qn(Error(E(423)),t),t=Oc(e,t,r,n,i);break e}else if(r!==i){i=qn(Error(E(424)),t),t=Oc(e,t,r,n,i);break e}else for(Me=Vt(t.stateNode.containerInfo.firstChild),Re=t,B=!0,Ze=null,n=Kh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gn(),r===i){t=kt(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return Xh(t),e===null&&ba(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,ka(r,i)?s=null:o!==null&&ka(r,o)&&(t.flags|=32),kp(e,t),we(e,t,s,n),t.child;case 6:return e===null&&ba(t),null;case 13:return Tp(e,t,n);case 4:return Bl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Qn(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),Vc(e,t,r,i,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,I(xo,r._currentValue),r._currentValue=s,o!==null)if(nt(o.value,s)){if(o.children===i.children&&!De.current){t=kt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=gt(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ca(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(E(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ca(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}we(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Wn(t,n),i=$e(i),r=r(i),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,i=qe(r,t.pendingProps),i=qe(r.type,i),Ic(e,t,r,i,n);case 15:return xp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),qi(e,t),t.tag=1,Ne(r)?(e=!0,go(t)):e=!1,Wn(t,n),gp(t,r,i),Da(t,r,i,n),Aa(null,t,r,!0,e,n);case 19:return jp(e,t,n);case 22:return wp(e,t,n)}throw Error(E(156,t.tag))};function Op(e,t){return hh(e,t)}function T0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(e,t,n,r){return new T0(e,t,n,r)}function ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function j0(e){if(typeof e=="function")return ru(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Sl)return 11;if(e===Tl)return 14}return 2}function Ut(e,t){var n=e.alternate;return n===null?(n=Ue(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function eo(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")ru(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case jn:return dn(n.children,i,o,t);case kl:s=8,i|=8;break;case Zs:return e=Ue(12,n,t,i|2),e.elementType=Zs,e.lanes=o,e;case ea:return e=Ue(13,n,t,i),e.elementType=ea,e.lanes=o,e;case ta:return e=Ue(19,n,t,i),e.elementType=ta,e.lanes=o,e;case Xf:return qo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Gf:s=10;break e;case Qf:s=9;break e;case Sl:s=11;break e;case Tl:s=14;break e;case bt:s=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Ue(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function dn(e,t,n,r){return e=Ue(7,e,r,t),e.lanes=n,e}function qo(e,t,n,r){return e=Ue(22,e,r,t),e.elementType=Xf,e.lanes=n,e.stateNode={isHidden:!1},e}function As(e,t,n){return e=Ue(6,e,null,t),e.lanes=n,e}function Ms(e,t,n){return t=Ue(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function E0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hs(0),this.expirationTimes=hs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function iu(e,t,n,r,i,o,s,a,l){return e=new E0(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ue(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ul(o),e}function b0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Up(e){if(!e)return Ht;e=e._reactInternals;e:{if(xn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Ne(n))return Uh(e,n,t)}return t}function Bp(e,t,n,r,i,o,s,a,l){return e=iu(n,r,!0,e,i,o,s,a,l),e.context=Up(null),n=e.current,r=je(),i=Ot(n),o=gt(r,i),o.callback=t??null,It(n,o,i),e.current.lanes=i,li(e,i,r),_e(e,r),e}function Jo(e,t,n,r){var i=t.current,o=je(),s=Ot(i);return n=Up(n),t.context===null?t.context=n:t.pendingContext=n,t=gt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=It(i,t,s),e!==null&&(tt(e,i,s,o),Gi(e,i,s)),s}function Do(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ou(e,t){Xc(e,t),(e=e.alternate)&&Xc(e,t)}function C0(){return null}var Wp=typeof reportError=="function"?reportError:function(e){console.error(e)};function su(e){this._internalRoot=e}Zo.prototype.render=su.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Jo(e,t,null,null)};Zo.prototype.unmount=su.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yn(function(){Jo(null,e,null,null)}),t[xt]=null}};function Zo(e){this._internalRoot=e}Zo.prototype.unstable_scheduleHydration=function(e){if(e){var t=wh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pt.length&&t!==0&&t<Pt[n].priority;n++);Pt.splice(n,0,e),n===0&&Sh(e)}};function au(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function es(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qc(){}function P0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Do(s);o.call(c)}}var s=Bp(t,r,e,0,null,!1,!1,"",qc);return e._reactRootContainer=s,e[xt]=s.current,$r(e.nodeType===8?e.parentNode:e),yn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Do(l);a.call(c)}}var l=iu(e,0,!1,null,null,!1,!1,"",qc);return e._reactRootContainer=l,e[xt]=l.current,$r(e.nodeType===8?e.parentNode:e),yn(function(){Jo(t,l,n,r)}),l}function ts(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Do(s);a.call(l)}}Jo(t,s,e,i)}else s=P0(n,t,e,i,r);return Do(s)}vh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wr(t.pendingLanes);n!==0&&(bl(t,n|1),_e(t,J()),!(L&6)&&(Jn=J()+500,Qt()))}break;case 13:yn(function(){var r=wt(e,1);if(r!==null){var i=je();tt(r,e,1,i)}}),ou(e,1)}};Cl=function(e){if(e.tag===13){var t=wt(e,134217728);if(t!==null){var n=je();tt(t,e,134217728,n)}ou(e,134217728)}};xh=function(e){if(e.tag===13){var t=Ot(e),n=wt(e,t);if(n!==null){var r=je();tt(n,e,t,r)}ou(e,t)}};wh=function(){return V};kh=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};da=function(e,t,n){switch(t){case"input":if(ia(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=$o(r);if(!i)throw Error(E(90));Jf(r),ia(r,i)}}}break;case"textarea":eh(e,n);break;case"select":t=n.value,t!=null&&Fn(e,!!n.multiple,t,!1)}};ah=eu;lh=yn;var D0={usingClientEntryPoint:!1,Events:[ci,Pn,$o,oh,sh,eu]},gr={findFiberByHostInstance:on,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},N0={bundleType:gr.bundleType,version:gr.version,rendererPackageName:gr.rendererPackageName,rendererConfig:gr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=dh(e),e===null?null:e.stateNode},findFiberByHostInstance:gr.findFiberByHostInstance||C0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vi.isDisabled&&Vi.supportsFiber)try{Uo=Vi.inject(N0),lt=Vi}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D0;Le.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!au(t))throw Error(E(200));return b0(e,t,null,n)};Le.createRoot=function(e,t){if(!au(e))throw Error(E(299));var n=!1,r="",i=Wp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=iu(e,1,!1,null,null,n,!1,r,i),e[xt]=t.current,$r(e.nodeType===8?e.parentNode:e),new su(t)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=dh(t),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return yn(e)};Le.hydrate=function(e,t,n){if(!es(t))throw Error(E(200));return ts(null,e,t,!0,n)};Le.hydrateRoot=function(e,t,n){if(!au(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Wp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Bp(t,null,e,1,n??null,i,!1,o,s),e[xt]=t.current,$r(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Zo(t)};Le.render=function(e,t,n){if(!es(t))throw Error(E(200));return ts(null,e,t,!1,n)};Le.unmountComponentAtNode=function(e){if(!es(e))throw Error(E(40));return e._reactRootContainer?(yn(function(){ts(null,null,e,!1,function(){e._reactRootContainer=null,e[xt]=null})}),!0):!1};Le.unstable_batchedUpdates=eu;Le.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!es(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return ts(e,t,n,!1,r)};Le.version="18.3.1-next-f1338f8080-20240426";function Hp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hp)}catch(e){console.error(e)}}Hp(),Hf.exports=Le;var _0=Hf.exports,$p,Jc=_0;$p=Jc.createRoot,Jc.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ei(){return ei=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ei.apply(null,arguments)}var At;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(At||(At={}));const Zc="popstate";function A0(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Ha("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:No(i)}return R0(t,n,null,e)}function re(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Yp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function M0(){return Math.random().toString(36).substr(2,8)}function ed(e,t){return{usr:e.state,key:e.key,idx:t}}function Ha(e,t,n,r){return n===void 0&&(n=null),ei({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?rr(t):t,{state:n,key:t&&t.key||r||M0()})}function No(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function rr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function R0(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=At.Pop,l=null,c=d();c==null&&(c=0,s.replaceState(ei({},s.state,{idx:c}),""));function d(){return(s.state||{idx:null}).idx}function f(){a=At.Pop;let S=d(),p=S==null?null:S-c;c=S,l&&l({action:a,location:x.location,delta:p})}function h(S,p){a=At.Push;let m=Ha(x.location,S,p);c=d()+1;let g=ed(m,c),k=x.createHref(m);try{s.pushState(g,"",k)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(k)}o&&l&&l({action:a,location:x.location,delta:1})}function y(S,p){a=At.Replace;let m=Ha(x.location,S,p);c=d();let g=ed(m,c),k=x.createHref(m);s.replaceState(g,"",k),o&&l&&l({action:a,location:x.location,delta:0})}function v(S){let p=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof S=="string"?S:No(S);return m=m.replace(/ $/,"%20"),re(p,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,p)}let x={get action(){return a},get location(){return e(i,s)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Zc,f),l=S,()=>{i.removeEventListener(Zc,f),l=null}},createHref(S){return t(i,S)},createURL:v,encodeLocation(S){let p=v(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:y,go(S){return s.go(S)}};return x}var td;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(td||(td={}));function z0(e,t,n){return n===void 0&&(n="/"),L0(e,t,n)}function L0(e,t,n,r){let i=typeof t=="string"?rr(t):t,o=lu(i.pathname||"/",n);if(o==null)return null;let s=Kp(e);V0(s);let a=null,l=Q0(o);for(let c=0;a==null&&c<s.length;++c)a=Y0(s[c],l);return a}function Kp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(re(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Bt([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(re(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Kp(o.children,t,d,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:H0(c,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Gp(o.path))i(o,s,l)}),t}function Gp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Gp(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function V0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:$0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const I0=/^:[\w-]+$/,F0=3,O0=2,U0=1,B0=10,W0=-2,nd=e=>e==="*";function H0(e,t){let n=e.split("/"),r=n.length;return n.some(nd)&&(r+=W0),t&&(r+=O0),n.filter(i=>!nd(i)).reduce((i,o)=>i+(I0.test(o)?F0:o===""?U0:B0),r)}function $0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Y0(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",f=K0({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),h=l.route;if(!f)return null;Object.assign(i,f.params),s.push({params:i,pathname:Bt([o,f.pathname]),pathnameBase:J0(Bt([o,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(o=Bt([o,f.pathnameBase]))}return s}function K0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=G0(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:h,isOptional:y}=d;if(h==="*"){let x=a[f]||"";s=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const v=a[f];return y&&!v?c[h]=void 0:c[h]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:e}}function G0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Yp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Q0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Yp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function lu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function X0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?rr(e):e,o;return n?(n=qp(n),n.startsWith("/")?o=rd(n.substring(1),"/"):o=rd(n,t)):o=t,{pathname:o,search:Z0(r),hash:ex(i)}}function rd(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Rs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function q0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Qp(e,t){let n=q0(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Xp(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=rr(e):(i=ei({},e),re(!i.pathname||!i.pathname.includes("?"),Rs("?","pathname","search",i)),re(!i.pathname||!i.pathname.includes("#"),Rs("#","pathname","hash",i)),re(!i.search||!i.search.includes("#"),Rs("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}a=f>=0?t[f]:"/"}let l=X0(i,a),c=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const qp=e=>e.replace(/\/\/+/g,"/"),Bt=e=>qp(e.join("/")),J0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Z0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ex=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function tx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Jp=["post","put","patch","delete"];new Set(Jp);const nx=["get",...Jp];new Set(nx);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ti(){return ti=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ti.apply(null,arguments)}const uu=w.createContext(null),rx=w.createContext(null),wn=w.createContext(null),ns=w.createContext(null),kn=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Zp=w.createContext(null);function ix(e,t){let{relative:n}=t===void 0?{}:t;fi()||re(!1);let{basename:r,navigator:i}=w.useContext(wn),{hash:o,pathname:s,search:a}=tm(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Bt([r,s])),i.createHref({pathname:l,search:a,hash:o})}function fi(){return w.useContext(ns)!=null}function ir(){return fi()||re(!1),w.useContext(ns).location}function em(e){w.useContext(wn).static||w.useLayoutEffect(e)}function ox(){let{isDataRoute:e}=w.useContext(kn);return e?vx():sx()}function sx(){fi()||re(!1);let e=w.useContext(uu),{basename:t,future:n,navigator:r}=w.useContext(wn),{matches:i}=w.useContext(kn),{pathname:o}=ir(),s=JSON.stringify(Qp(i,n.v7_relativeSplatPath)),a=w.useRef(!1);return em(()=>{a.current=!0}),w.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Xp(c,JSON.parse(s),o,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Bt([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,s,o,e])}function tm(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(wn),{matches:i}=w.useContext(kn),{pathname:o}=ir(),s=JSON.stringify(Qp(i,r.v7_relativeSplatPath));return w.useMemo(()=>Xp(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function ax(e,t){return lx(e,t)}function lx(e,t,n,r){fi()||re(!1);let{navigator:i}=w.useContext(wn),{matches:o}=w.useContext(kn),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=ir(),d;if(t){var f;let S=typeof t=="string"?rr(t):t;l==="/"||(f=S.pathname)!=null&&f.startsWith(l)||re(!1),d=S}else d=c;let h=d.pathname||"/",y=h;if(l!=="/"){let S=l.replace(/^\//,"").split("/");y="/"+h.replace(/^\//,"").split("/").slice(S.length).join("/")}let v=z0(e,{pathname:y}),x=hx(v&&v.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:Bt([l,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:Bt([l,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n,r);return t&&x?w.createElement(ns.Provider,{value:{location:ti({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:At.Pop}},x):x}function ux(){let e=yx(),t=tx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,null)}const cx=w.createElement(ux,null);class dx extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(kn.Provider,{value:this.props.routeContext},w.createElement(Zp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function fx(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(uu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(kn.Provider,{value:t},r)}function hx(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||re(!1),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let f=s[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:h,errors:y}=n,v=f.route.loader&&h[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||v){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((d,f,h)=>{let y,v=!1,x=null,S=null;n&&(y=a&&f.route.id?a[f.route.id]:void 0,x=f.route.errorElement||cx,l&&(c<0&&h===0?(xx("route-fallback"),v=!0,S=null):c===h&&(v=!0,S=f.route.hydrateFallbackElement||null)));let p=t.concat(s.slice(0,h+1)),m=()=>{let g;return y?g=x:v?g=S:f.route.Component?g=w.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=d,w.createElement(fx,{match:f,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:g})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?w.createElement(dx,{location:n.location,revalidation:n.revalidation,component:x,error:y,children:m(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):m()},null)}var nm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(nm||{}),rm=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(rm||{});function px(e){let t=w.useContext(uu);return t||re(!1),t}function mx(e){let t=w.useContext(rx);return t||re(!1),t}function gx(e){let t=w.useContext(kn);return t||re(!1),t}function im(e){let t=gx(),n=t.matches[t.matches.length-1];return n.route.id||re(!1),n.route.id}function yx(){var e;let t=w.useContext(Zp),n=mx(),r=im();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function vx(){let{router:e}=px(nm.UseNavigateStable),t=im(rm.UseNavigateStable),n=w.useRef(!1);return em(()=>{n.current=!0}),w.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ti({fromRouteId:t},o)))},[e,t])}const id={};function xx(e,t,n){id[e]||(id[e]=!0)}function wx(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Qe(e){re(!1)}function kx(e){let{basename:t="/",children:n=null,location:r,navigationType:i=At.Pop,navigator:o,static:s=!1,future:a}=e;fi()&&re(!1);let l=t.replace(/^\/*/,"/"),c=w.useMemo(()=>({basename:l,navigator:o,static:s,future:ti({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=rr(r));let{pathname:d="/",search:f="",hash:h="",state:y=null,key:v="default"}=r,x=w.useMemo(()=>{let S=lu(d,l);return S==null?null:{location:{pathname:S,search:f,hash:h,state:y,key:v},navigationType:i}},[l,d,f,h,y,v,i]);return x==null?null:w.createElement(wn.Provider,{value:c},w.createElement(ns.Provider,{children:n,value:x}))}function Sx(e){let{children:t,location:n}=e;return ax($a(t),n)}new Promise(()=>{});function $a(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let o=[...t,i];if(r.type===w.Fragment){n.push.apply(n,$a(r.props.children,o));return}r.type!==Qe&&re(!1),!r.props.index||!r.props.children||re(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=$a(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ya(){return Ya=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ya.apply(null,arguments)}function Tx(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function jx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ex(e,t){return e.button===0&&(!t||t==="_self")&&!jx(e)}const bx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Cx="6";try{window.__reactRouterVersion=Cx}catch{}const Px="startTransition",od=wy[Px];function Dx(e){let{basename:t,children:n,future:r,window:i}=e,o=w.useRef();o.current==null&&(o.current=A0({window:i,v5Compat:!0}));let s=o.current,[a,l]=w.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},d=w.useCallback(f=>{c&&od?od(()=>l(f)):l(f)},[l,c]);return w.useLayoutEffect(()=>s.listen(d),[s,d]),w.useEffect(()=>wx(r),[r]),w.createElement(kx,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const Nx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_x=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ke=w.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:c,preventScrollReset:d,viewTransition:f}=t,h=Tx(t,bx),{basename:y}=w.useContext(wn),v,x=!1;if(typeof c=="string"&&_x.test(c)&&(v=c,Nx))try{let g=new URL(window.location.href),k=c.startsWith("//")?new URL(g.protocol+c):new URL(c),T=lu(k.pathname,y);k.origin===g.origin&&T!=null?c=T+k.search+k.hash:x=!0}catch{}let S=ix(c,{relative:i}),p=Ax(c,{replace:s,state:a,target:l,preventScrollReset:d,relative:i,viewTransition:f});function m(g){r&&r(g),g.defaultPrevented||p(g)}return w.createElement("a",Ya({},h,{href:v||S,onClick:x||o?r:m,ref:n,target:l}))});var sd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(sd||(sd={}));var ad;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ad||(ad={}));function Ax(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=t===void 0?{}:t,l=ox(),c=ir(),d=tm(e,{relative:s});return w.useCallback(f=>{if(Ex(f,n)){f.preventDefault();let h=r!==void 0?r:No(c)===No(d);l(e,{replace:h,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[c,l,d,r,i,n,e,o,s,a])}const cu=w.createContext({});function du(e){const t=w.useRef(null);return t.current===null&&(t.current=e()),t.current}const om=typeof window<"u",sm=om?w.useLayoutEffect:w.useEffect,rs=w.createContext(null);function fu(e,t){e.indexOf(t)===-1&&e.push(t)}function hu(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const dt=(e,t,n)=>n>t?t:n<e?e:n;let pu=()=>{};const St={},am=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function lm(e){return typeof e=="object"&&e!==null}const um=e=>/^0[^.\s]+$/u.test(e);function mu(e){let t;return()=>(t===void 0&&(t=e()),t)}const He=e=>e,Mx=(e,t)=>n=>t(e(n)),hi=(...e)=>e.reduce(Mx),ni=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r};class gu{constructor(){this.subscriptions=[]}add(t){return fu(this.subscriptions,t),()=>hu(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const yt=e=>e*1e3,Be=e=>e/1e3;function cm(e,t){return t?e*(1e3/t):0}const dm=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Rx=1e-7,zx=12;function Lx(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=dm(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>Rx&&++a<zx);return s}function pi(e,t,n,r){if(e===t&&n===r)return He;const i=o=>Lx(o,0,1,e,n);return o=>o===0||o===1?o:dm(i(o),t,r)}const fm=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,hm=e=>t=>1-e(1-t),pm=pi(.33,1.53,.69,.99),yu=hm(pm),mm=fm(yu),gm=e=>(e*=2)<1?.5*yu(e):.5*(2-Math.pow(2,-10*(e-1))),vu=e=>1-Math.sin(Math.acos(e)),ym=hm(vu),vm=fm(vu),Vx=pi(.42,0,1,1),Ix=pi(0,0,.58,1),xm=pi(.42,0,.58,1),Fx=e=>Array.isArray(e)&&typeof e[0]!="number",wm=e=>Array.isArray(e)&&typeof e[0]=="number",Ox={linear:He,easeIn:Vx,easeInOut:xm,easeOut:Ix,circIn:vu,circInOut:vm,circOut:ym,backIn:yu,backInOut:mm,backOut:pm,anticipate:gm},Ux=e=>typeof e=="string",ld=e=>{if(wm(e)){pu(e.length===4);const[t,n,r,i]=e;return pi(t,n,r,i)}else if(Ux(e))return Ox[e];return e},Ii=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Bx(e,t){let n=new Set,r=new Set,i=!1,o=!1;const s=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function l(d){s.has(d)&&(c.schedule(d),e()),d(a)}const c={schedule:(d,f=!1,h=!1)=>{const v=h&&i?n:r;return f&&s.add(d),v.has(d)||v.add(d),d},cancel:d=>{r.delete(d),s.delete(d)},process:d=>{if(a=d,i){o=!0;return}i=!0,[n,r]=[r,n],n.forEach(l),n.clear(),i=!1,o&&(o=!1,c.process(d))}};return c}const Wx=40;function km(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=Ii.reduce((g,k)=>(g[k]=Bx(o),g),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:d,update:f,preRender:h,render:y,postRender:v}=s,x=()=>{const g=St.useManualTiming?i.timestamp:performance.now();n=!1,St.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(g-i.timestamp,Wx),1)),i.timestamp=g,i.isProcessing=!0,a.process(i),l.process(i),c.process(i),d.process(i),f.process(i),h.process(i),y.process(i),v.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(x))},S=()=>{n=!0,r=!0,i.isProcessing||e(x)};return{schedule:Ii.reduce((g,k)=>{const T=s[k];return g[k]=(b,C=!1,j=!1)=>(n||S(),T.schedule(b,C,j)),g},{}),cancel:g=>{for(let k=0;k<Ii.length;k++)s[Ii[k]].cancel(g)},state:i,steps:s}}const{schedule:U,cancel:$t,state:de,steps:zs}=km(typeof requestAnimationFrame<"u"?requestAnimationFrame:He,!0);let to;function Hx(){to=void 0}const Se={now:()=>(to===void 0&&Se.set(de.isProcessing||St.useManualTiming?de.timestamp:performance.now()),to),set:e=>{to=e,queueMicrotask(Hx)}},Sm=e=>t=>typeof t=="string"&&t.startsWith(e),Tm=Sm("--"),$x=Sm("var(--"),xu=e=>$x(e)?Yx.test(e.split("/*")[0].trim()):!1,Yx=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function ud(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const or={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ri={...or,transform:e=>dt(0,1,e)},Fi={...or,default:1},Mr=e=>Math.round(e*1e5)/1e5,wu=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Kx(e){return e==null}const Gx=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,ku=(e,t)=>n=>!!(typeof n=="string"&&Gx.test(n)&&n.startsWith(e)||t&&!Kx(n)&&Object.prototype.hasOwnProperty.call(n,t)),jm=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,s,a]=r.match(wu);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},Qx=e=>dt(0,255,e),Ls={...or,transform:e=>Math.round(Qx(e))},ln={test:ku("rgb","red"),parse:jm("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Ls.transform(e)+", "+Ls.transform(t)+", "+Ls.transform(n)+", "+Mr(ri.transform(r))+")"};function Xx(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Ka={test:ku("#"),parse:Xx,transform:ln.transform},mi=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Et=mi("deg"),ct=mi("%"),D=mi("px"),qx=mi("vh"),Jx=mi("vw"),cd={...ct,parse:e=>ct.parse(e)/100,transform:e=>ct.transform(e*100)},zn={test:ku("hsl","hue"),parse:jm("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+ct.transform(Mr(t))+", "+ct.transform(Mr(n))+", "+Mr(ri.transform(r))+")"},te={test:e=>ln.test(e)||Ka.test(e)||zn.test(e),parse:e=>ln.test(e)?ln.parse(e):zn.test(e)?zn.parse(e):Ka.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?ln.transform(e):zn.transform(e),getAnimatableNone:e=>{const t=te.parse(e);return t.alpha=0,te.transform(t)}},Zx=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function e1(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(wu))==null?void 0:t.length)||0)+(((n=e.match(Zx))==null?void 0:n.length)||0)>0}const Em="number",bm="color",t1="var",n1="var(",dd="${}",r1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ii(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const a=t.replace(r1,l=>(te.test(l)?(r.color.push(o),i.push(bm),n.push(te.parse(l))):l.startsWith(n1)?(r.var.push(o),i.push(t1),n.push(l)):(r.number.push(o),i.push(Em),n.push(parseFloat(l))),++o,dd)).split(dd);return{values:n,split:a,indexes:r,types:i}}function Cm(e){return ii(e).values}function Pm(e){const{split:t,types:n}=ii(e),r=t.length;return i=>{let o="";for(let s=0;s<r;s++)if(o+=t[s],i[s]!==void 0){const a=n[s];a===Em?o+=Mr(i[s]):a===bm?o+=te.transform(i[s]):o+=i[s]}return o}}const i1=e=>typeof e=="number"?0:te.test(e)?te.getAnimatableNone(e):e;function o1(e){const t=Cm(e);return Pm(e)(t.map(i1))}const Yt={test:e1,parse:Cm,createTransformer:Pm,getAnimatableNone:o1};function Vs(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function s1({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=Vs(l,a,e+1/3),o=Vs(l,a,e),s=Vs(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}function _o(e,t){return n=>n>0?t:e}const $=(e,t,n)=>e+(t-e)*n,Is=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},a1=[Ka,ln,zn],l1=e=>a1.find(t=>t.test(e));function fd(e){const t=l1(e);if(!t)return!1;let n=t.parse(e);return t===zn&&(n=s1(n)),n}const hd=(e,t)=>{const n=fd(e),r=fd(t);if(!n||!r)return _o(e,t);const i={...n};return o=>(i.red=Is(n.red,r.red,o),i.green=Is(n.green,r.green,o),i.blue=Is(n.blue,r.blue,o),i.alpha=$(n.alpha,r.alpha,o),ln.transform(i))},Ga=new Set(["none","hidden"]);function u1(e,t){return Ga.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function c1(e,t){return n=>$(e,t,n)}function Su(e){return typeof e=="number"?c1:typeof e=="string"?xu(e)?_o:te.test(e)?hd:h1:Array.isArray(e)?Dm:typeof e=="object"?te.test(e)?hd:d1:_o}function Dm(e,t){const n=[...e],r=n.length,i=e.map((o,s)=>Su(o)(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}}function d1(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Su(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function f1(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const o=t.types[i],s=e.indexes[o][r[o]],a=e.values[s]??0;n[i]=a,r[o]++}return n}const h1=(e,t)=>{const n=Yt.createTransformer(t),r=ii(e),i=ii(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Ga.has(e)&&!i.values.length||Ga.has(t)&&!r.values.length?u1(e,t):hi(Dm(f1(r,i),i.values),n):_o(e,t)};function Nm(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?$(e,t,n):Su(e)(e,t)}const p1=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>U.update(t,n),stop:()=>$t(t),now:()=>de.isProcessing?de.timestamp:Se.now()}},_m=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let o=0;o<i;o++)r+=Math.round(e(o/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Ao=2e4;function Tu(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Ao;)t+=n,r=e.next(t);return t>=Ao?1/0:t}function m1(e,t=100,n){const r=n({...e,keyframes:[0,t]}),i=Math.min(Tu(r),Ao);return{type:"keyframes",ease:o=>r.next(i*o).value/t,duration:Be(i)}}const g1=5;function Am(e,t,n){const r=Math.max(t-g1,0);return cm(n-e(r),t-r)}const G={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Fs=.001;function y1({duration:e=G.duration,bounce:t=G.bounce,velocity:n=G.velocity,mass:r=G.mass}){let i,o,s=1-t;s=dt(G.minDamping,G.maxDamping,s),e=dt(G.minDuration,G.maxDuration,Be(e)),s<1?(i=c=>{const d=c*s,f=d*e,h=d-n,y=Qa(c,s),v=Math.exp(-f);return Fs-h/y*v},o=c=>{const f=c*s*e,h=f*n+n,y=Math.pow(s,2)*Math.pow(c,2)*e,v=Math.exp(-f),x=Qa(Math.pow(c,2),s);return(-i(c)+Fs>0?-1:1)*((h-y)*v)/x}):(i=c=>{const d=Math.exp(-c*e),f=(c-n)*e+1;return-Fs+d*f},o=c=>{const d=Math.exp(-c*e),f=(n-c)*(e*e);return d*f});const a=5/e,l=x1(i,o,a);if(e=yt(e),isNaN(l))return{stiffness:G.stiffness,damping:G.damping,duration:e};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:s*2*Math.sqrt(r*c),duration:e}}}const v1=12;function x1(e,t,n){let r=n;for(let i=1;i<v1;i++)r=r-e(r)/t(r);return r}function Qa(e,t){return e*Math.sqrt(1-t*t)}const w1=["duration","bounce"],k1=["stiffness","damping","mass"];function pd(e,t){return t.some(n=>e[n]!==void 0)}function S1(e){let t={velocity:G.velocity,stiffness:G.stiffness,damping:G.damping,mass:G.mass,isResolvedFromDuration:!1,...e};if(!pd(e,k1)&&pd(e,w1))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,o=2*dt(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:G.mass,stiffness:i,damping:o}}else{const n=y1(e);t={...t,...n,mass:G.mass},t.isResolvedFromDuration=!0}return t}function Mo(e=G.visualDuration,t=G.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const o=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],a={done:!1,value:o},{stiffness:l,damping:c,mass:d,duration:f,velocity:h,isResolvedFromDuration:y}=S1({...n,velocity:-Be(n.velocity||0)}),v=h||0,x=c/(2*Math.sqrt(l*d)),S=s-o,p=Be(Math.sqrt(l/d)),m=Math.abs(S)<5;r||(r=m?G.restSpeed.granular:G.restSpeed.default),i||(i=m?G.restDelta.granular:G.restDelta.default);let g;if(x<1){const T=Qa(p,x);g=b=>{const C=Math.exp(-x*p*b);return s-C*((v+x*p*S)/T*Math.sin(T*b)+S*Math.cos(T*b))}}else if(x===1)g=T=>s-Math.exp(-p*T)*(S+(v+p*S)*T);else{const T=p*Math.sqrt(x*x-1);g=b=>{const C=Math.exp(-x*p*b),j=Math.min(T*b,300);return s-C*((v+x*p*S)*Math.sinh(j)+T*S*Math.cosh(j))/T}}const k={calculatedDuration:y&&f||null,next:T=>{const b=g(T);if(y)a.done=T>=f;else{let C=T===0?v:0;x<1&&(C=T===0?yt(v):Am(g,T,b));const j=Math.abs(C)<=r,R=Math.abs(s-b)<=i;a.done=j&&R}return a.value=a.done?s:b,a},toString:()=>{const T=Math.min(Tu(k),Ao),b=_m(C=>k.next(T*C).value,T,30);return T+"ms "+b},toTransition:()=>{}};return k}Mo.applyToOptions=e=>{const t=m1(e,100,Mo);return e.ease=t.ease,e.duration=yt(t.duration),e.type="keyframes",e};function Xa({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:c=.5,restSpeed:d}){const f=e[0],h={done:!1,value:f},y=j=>a!==void 0&&j<a||l!==void 0&&j>l,v=j=>a===void 0?l:l===void 0||Math.abs(a-j)<Math.abs(l-j)?a:l;let x=n*t;const S=f+x,p=s===void 0?S:s(S);p!==S&&(x=p-f);const m=j=>-x*Math.exp(-j/r),g=j=>p+m(j),k=j=>{const R=m(j),_=g(j);h.done=Math.abs(R)<=c,h.value=h.done?p:_};let T,b;const C=j=>{y(h.value)&&(T=j,b=Mo({keyframes:[h.value,v(h.value)],velocity:Am(g,j,h.value),damping:i,stiffness:o,restDelta:c,restSpeed:d}))};return C(0),{calculatedDuration:null,next:j=>{let R=!1;return!b&&T===void 0&&(R=!0,k(j),C(j)),T!==void 0&&j>=T?b.next(j-T):(!R&&k(j),h)}}}function T1(e,t,n){const r=[],i=n||St.mix||Nm,o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||He:t;a=hi(l,a)}r.push(a)}return r}function j1(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(pu(o===t.length),o===1)return()=>t[0];if(o===2&&t[0]===t[1])return()=>t[1];const s=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=T1(t,r,i),l=a.length,c=d=>{if(s&&d<e[0])return t[0];let f=0;if(l>1)for(;f<e.length-2&&!(d<e[f+1]);f++);const h=ni(e[f],e[f+1],d);return a[f](h)};return n?d=>c(dt(e[0],e[o-1],d)):c}function E1(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=ni(0,t,r);e.push($(n,1,i))}}function b1(e){const t=[0];return E1(t,e.length-1),t}function C1(e,t){return e.map(n=>n*t)}function P1(e,t){return e.map(()=>t||xm).splice(0,e.length-1)}function Rr({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=Fx(r)?r.map(ld):ld(r),o={done:!1,value:t[0]},s=C1(n&&n.length===t.length?n:b1(t),e),a=j1(s,t,{ease:Array.isArray(i)?i:P1(t,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}const D1=e=>e!==null;function ju(e,{repeat:t,repeatType:n="loop"},r,i=1){const o=e.filter(D1),a=i<0||t&&n!=="loop"&&t%2===1?0:o.length-1;return!a||r===void 0?o[a]:r}const N1={decay:Xa,inertia:Xa,tween:Rr,keyframes:Rr,spring:Mo};function Mm(e){typeof e.type=="string"&&(e.type=N1[e.type])}class Eu{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const _1=e=>e/100;class bu extends Eu{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,i;const{motionValue:n}=this.options;n&&n.updatedAt!==Se.now()&&this.tick(Se.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(r=this.options).onStop)==null||i.call(r))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;Mm(t);const{type:n=Rr,repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:s=0}=t;let{keyframes:a}=t;const l=n||Rr;l!==Rr&&typeof a[0]!="number"&&(this.mixKeyframes=hi(_1,Nm(a[0],a[1])),a=[0,100]);const c=l({...t,keyframes:a});o==="mirror"&&(this.mirroredGenerator=l({...t,keyframes:[...a].reverse(),velocity:-s})),c.calculatedDuration===null&&(c.calculatedDuration=Tu(c));const{calculatedDuration:d}=c;this.calculatedDuration=d,this.resolvedDuration=d+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=c}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:r,totalDuration:i,mixKeyframes:o,mirroredGenerator:s,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return r.next(0);const{delay:c=0,keyframes:d,repeat:f,repeatType:h,repeatDelay:y,type:v,onUpdate:x,finalKeyframe:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-i/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const p=this.currentTime-c*(this.playbackSpeed>=0?1:-1),m=this.playbackSpeed>=0?p<0:p>i;this.currentTime=Math.max(p,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let g=this.currentTime,k=r;if(f){const j=Math.min(this.currentTime,i)/a;let R=Math.floor(j),_=j%1;!_&&j>=1&&(_=1),_===1&&R--,R=Math.min(R,f+1),!!(R%2)&&(h==="reverse"?(_=1-_,y&&(_-=y/a)):h==="mirror"&&(k=s)),g=dt(0,1,_)*a}const T=m?{done:!1,value:d[0]}:k.next(g);o&&(T.value=o(T.value));let{done:b}=T;!m&&l!==null&&(b=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&b);return C&&v!==Xa&&(T.value=ju(d,this.options,S,this.speed)),x&&x(T.value),C&&this.finish(),T}then(t,n){return this.finished.then(t,n)}get duration(){return Be(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Be(t)}get time(){return Be(this.currentTime)}set time(t){var n;t=yt(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(Se.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Be(this.currentTime))}play(){var i,o;if(this.isStopped)return;const{driver:t=p1,startTime:n}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),(o=(i=this.options).onPlay)==null||o.call(i);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Se.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function A1(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const un=e=>e*180/Math.PI,qa=e=>{const t=un(Math.atan2(e[1],e[0]));return Ja(t)},M1={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:qa,rotateZ:qa,skewX:e=>un(Math.atan(e[1])),skewY:e=>un(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Ja=e=>(e=e%360,e<0&&(e+=360),e),md=qa,gd=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),yd=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),R1={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:gd,scaleY:yd,scale:e=>(gd(e)+yd(e))/2,rotateX:e=>Ja(un(Math.atan2(e[6],e[5]))),rotateY:e=>Ja(un(Math.atan2(-e[2],e[0]))),rotateZ:md,rotate:md,skewX:e=>un(Math.atan(e[4])),skewY:e=>un(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Za(e){return e.includes("scale")?1:0}function el(e,t){if(!e||e==="none")return Za(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=R1,i=n;else{const a=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=M1,i=a}if(!i)return Za(t);const o=r[t],s=i[1].split(",").map(L1);return typeof o=="function"?o(s):s[o]}const z1=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return el(n,t)};function L1(e){return parseFloat(e.trim())}const sr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ar=new Set(sr),vd=e=>e===or||e===D,V1=new Set(["x","y","z"]),I1=sr.filter(e=>!V1.has(e));function F1(e){const t=[];return I1.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Mt={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>el(t,"x"),y:(e,{transform:t})=>el(t,"y")};Mt.translateX=Mt.x;Mt.translateY=Mt.y;const fn=new Set;let tl=!1,nl=!1,rl=!1;function Rm(){if(nl){const e=Array.from(fn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=F1(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,s])=>{var a;(a=r.getValue(o))==null||a.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}nl=!1,tl=!1,fn.forEach(e=>e.complete(rl)),fn.clear()}function zm(){fn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(nl=!0)})}function O1(){rl=!0,zm(),Rm(),rl=!1}class Cu{constructor(t,n,r,i,o,s=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=s}scheduleResolve(){this.state="scheduled",this.isAsync?(fn.add(this),tl||(tl=!0,U.read(zm),U.resolveKeyframes(Rm))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;if(t[0]===null){const o=i==null?void 0:i.get(),s=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const a=r.readValue(n,s);a!=null&&(t[0]=a)}t[0]===void 0&&(t[0]=s),i&&o===void 0&&i.set(t[0])}A1(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),fn.delete(this)}cancel(){this.state==="scheduled"&&(fn.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const U1=e=>e.startsWith("--");function B1(e,t,n){U1(t)?e.style.setProperty(t,n):e.style[t]=n}const W1=mu(()=>window.ScrollTimeline!==void 0),H1={};function $1(e,t){const n=mu(e);return()=>H1[t]??n()}const Lm=$1(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Sr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,xd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Sr([0,.65,.55,1]),circOut:Sr([.55,0,1,.45]),backIn:Sr([.31,.01,.66,-.59]),backOut:Sr([.33,1.53,.69,.99])};function Vm(e,t){if(e)return typeof e=="function"?Lm()?_m(e,t):"ease-out":wm(e)?Sr(e):Array.isArray(e)?e.map(n=>Vm(n,t)||xd.easeOut):xd[e]}function Y1(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:a="easeOut",times:l}={},c=void 0){const d={[t]:n};l&&(d.offset=l);const f=Vm(a,i);Array.isArray(f)&&(d.easing=f);const h={delay:r,duration:i,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"};return c&&(h.pseudoElement=c),e.animate(d,h)}function Im(e){return typeof e=="function"&&"applyToOptions"in e}function K1({type:e,...t}){return Im(e)&&Lm()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class G1 extends Eu{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:r,keyframes:i,pseudoElement:o,allowFlatten:s=!1,finalKeyframe:a,onComplete:l}=t;this.isPseudoElement=!!o,this.allowFlatten=s,this.options=t,pu(typeof t.type!="string");const c=K1(t);this.animation=Y1(n,r,i,c,o),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!o){const d=ju(i,this.options,a,this.speed);this.updateMotionValue?this.updateMotionValue(d):B1(n,r,d),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,n;this.isPseudoElement||(n=(t=this.animation).commitStyles)==null||n.call(t)}get duration(){var n,r;const t=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return Be(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Be(t)}get time(){return Be(Number(this.animation.currentTime)||0)}set time(t){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=yt(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,observe:n}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&W1()?(this.animation.timeline=t,He):n(this)}}const Fm={anticipate:gm,backInOut:mm,circInOut:vm};function Q1(e){return e in Fm}function X1(e){typeof e.ease=="string"&&Q1(e.ease)&&(e.ease=Fm[e.ease])}const Os=10;class q1 extends G1{constructor(t){X1(t),Mm(t),super(t),t.startTime!==void 0&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:r,onComplete:i,element:o,...s}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const a=new bu({...s,autoplay:!1}),l=Math.max(Os,Se.now()-this.startTime),c=dt(0,Os,l-Os);n.setWithVelocity(a.sample(Math.max(0,l-c)).value,a.sample(l).value,c),a.stop()}}const wd=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Yt.test(e)||e==="0")&&!e.startsWith("url("));function J1(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Z1(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],s=wd(i,t),a=wd(o,t);return!s||!a?!1:J1(e)||(n==="spring"||Im(n))&&r}function il(e){e.duration=0,e.type="keyframes"}const ew=new Set(["opacity","clipPath","filter","transform"]),tw=mu(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function nw(e){var d;const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:o,type:s}=e;if(!(((d=t==null?void 0:t.owner)==null?void 0:d.current)instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=t.owner.getProps();return tw()&&n&&ew.has(n)&&(n!=="transform"||!c)&&!l&&!r&&i!=="mirror"&&o!==0&&s!=="inertia"}const rw=40;class iw extends Eu{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s="loop",keyframes:a,name:l,motionValue:c,element:d,...f}){var v;super(),this.stop=()=>{var x,S;this._animation&&(this._animation.stop(),(x=this.stopTimeline)==null||x.call(this)),(S=this.keyframeResolver)==null||S.cancel()},this.createdAt=Se.now();const h={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:s,name:l,motionValue:c,element:d,...f},y=(d==null?void 0:d.KeyframeResolver)||Cu;this.keyframeResolver=new y(a,(x,S,p)=>this.onKeyframesResolved(x,S,h,!p),l,c,d),(v=this.keyframeResolver)==null||v.scheduleResolve()}onKeyframesResolved(t,n,r,i){this.keyframeResolver=void 0;const{name:o,type:s,velocity:a,delay:l,isHandoff:c,onUpdate:d}=r;this.resolvedAt=Se.now(),Z1(t,o,s,a)||((St.instantAnimations||!l)&&(d==null||d(ju(t,r,n))),t[0]=t[t.length-1],il(r),r.repeat=0);const h={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>rw?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:t},y=!c&&nw(h)?new q1({...h,element:h.motionValue.owner.current}):new bu(h);y.finished.then(()=>this.notifyFinished()).catch(He),this.pendingTimeline&&(this.stopTimeline=y.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=y}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),O1()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}const ow=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function sw(e){const t=ow.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function Om(e,t,n=1){const[r,i]=sw(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return am(s)?parseFloat(s):s}return xu(i)?Om(i,t,n+1):i}function Pu(e,t){return(e==null?void 0:e[t])??(e==null?void 0:e.default)??e}const aw={type:"spring",stiffness:500,damping:25,restSpeed:10},lw=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),uw={type:"keyframes",duration:.8},cw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},dw=(e,{keyframes:t})=>t.length>2?uw:ar.has(e)?e.startsWith("scale")?lw(t[1]):aw:cw;function fw({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:c,...d}){return!!Object.keys(d).length}const hw=e=>e!==null;function pw(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(hw),o=t&&n!=="loop"&&t%2===1?0:i.length-1;return i[o]}function Um(e,t,n,r=0,i=1){const o=Array.from(e).sort((c,d)=>c.sortNodePosition(d)).indexOf(t),s=e.size,a=(s-1)*r;return typeof n=="function"?n(o,s):i===1?o*r:a-o*r}const Du=(e,t,n,r={},i,o)=>s=>{const a=Pu(r,e)||{},l=a.delay||r.delay||0;let{elapsed:c=0}=r;c=c-yt(l);const d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-c,onUpdate:h=>{t.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:o?void 0:i};fw(a)||Object.assign(d,dw(e,d)),d.duration&&(d.duration=yt(d.duration)),d.repeatDelay&&(d.repeatDelay=yt(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(il(d),d.delay===0&&(f=!0)),(St.instantAnimations||St.skipAnimations)&&(f=!0,il(d),d.delay=0),d.allowFlatten=!a.type&&!a.ease,f&&!o&&t.get()!==void 0){const h=pw(d.keyframes,a);if(h!==void 0){U.update(()=>{d.onUpdate(h),d.onComplete()});return}}return a.isSync?new bu(d):new iw(d)},Bm=new Set(["width","height","top","left","right","bottom",...sr]),kd=30,mw=e=>!isNaN(parseFloat(e));class gw{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var o;const i=Se.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((o=this.events.change)==null||o.notify(this.current),this.dependents))for(const s of this.dependents)s.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Se.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=mw(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new gu);const r=this.events[t].add(n);return t==="change"?()=>{r(),U.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Se.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>kd)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,kd);return cm(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Zn(e,t){return new gw(e,t)}function Sd(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Nu(e,t,n,r){if(typeof t=="function"){const[i,o]=Sd(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=Sd(r);t=t(n!==void 0?n:e.custom,i,o)}return t}function $n(e,t,n){const r=e.getProps();return Nu(r,t,n!==void 0?n:r.custom,e)}const ol=e=>Array.isArray(e);function yw(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Zn(n))}function vw(e){return ol(e)?e[e.length-1]||0:e}function xw(e,t){const n=$n(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const s in o){const a=vw(o[s]);yw(e,s,a)}}const ye=e=>!!(e&&e.getVelocity);function ww(e){return!!(ye(e)&&e.add)}function sl(e,t){const n=e.getValue("willChange");if(ww(n))return n.add(t);if(!n&&St.WillChange){const r=new St.WillChange("auto");e.addValue("willChange",r),r.add(t)}}function _u(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const kw="framerAppearId",Wm="data-"+_u(kw);function Hm(e){return e.props[Wm]}function Sw({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function $m(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:s,...a}=t;r&&(o=r);const l=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const d in a){const f=e.getValue(d,e.latestValues[d]??null),h=a[d];if(h===void 0||c&&Sw(c,d))continue;const y={delay:n,...Pu(o||{},d)},v=f.get();if(v!==void 0&&!f.isAnimating&&!Array.isArray(h)&&h===v&&!y.velocity)continue;let x=!1;if(window.MotionHandoffAnimation){const p=Hm(e);if(p){const m=window.MotionHandoffAnimation(p,d,U);m!==null&&(y.startTime=m,x=!0)}}sl(e,d),f.start(Du(d,f,h,e.shouldReduceMotion&&Bm.has(d)?{type:!1}:y,e,x));const S=f.animation;S&&l.push(S)}return s&&Promise.all(l).then(()=>{U.update(()=>{s&&xw(e,s)})}),l}function al(e,t,n={}){var l;const r=$n(e,t,n.type==="exit"?(l=e.presenceContext)==null?void 0:l.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all($m(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(c=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:h}=i;return Tw(e,t,c,d,f,h,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[c,d]=a==="beforeChildren"?[o,s]:[s,o];return c().then(()=>d())}else return Promise.all([o(),s(n.delay)])}function Tw(e,t,n=0,r=0,i=0,o=1,s){const a=[];for(const l of e.variantChildren)l.notify("AnimationStart",t),a.push(al(l,t,{...s,delay:n+(typeof r=="function"?0:r)+Um(e.variantChildren,l,r,i,o)}).then(()=>l.notify("AnimationComplete",t)));return Promise.all(a)}function jw(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>al(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=al(e,t,n);else{const i=typeof t=="function"?$n(e,t,n.custom):t;r=Promise.all($m(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const Ew={test:e=>e==="auto",parse:e=>e},Ym=e=>t=>t.test(e),Km=[or,D,ct,Et,Jx,qx,Ew],Td=e=>Km.find(Ym(e));function bw(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||um(e):!0}const Cw=new Set(["brightness","contrast","saturate","opacity"]);function Pw(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(wu)||[];if(!r)return e;const i=n.replace(r,"");let o=Cw.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const Dw=/\b([a-z-]*)\(.*?\)/gu,ll={...Yt,getAnimatableNone:e=>{const t=e.match(Dw);return t?t.map(Pw).join(" "):e}},jd={...or,transform:Math.round},Nw={rotate:Et,rotateX:Et,rotateY:Et,rotateZ:Et,scale:Fi,scaleX:Fi,scaleY:Fi,scaleZ:Fi,skew:Et,skewX:Et,skewY:Et,distance:D,translateX:D,translateY:D,translateZ:D,x:D,y:D,z:D,perspective:D,transformPerspective:D,opacity:ri,originX:cd,originY:cd,originZ:D},Au={borderWidth:D,borderTopWidth:D,borderRightWidth:D,borderBottomWidth:D,borderLeftWidth:D,borderRadius:D,radius:D,borderTopLeftRadius:D,borderTopRightRadius:D,borderBottomRightRadius:D,borderBottomLeftRadius:D,width:D,maxWidth:D,height:D,maxHeight:D,top:D,right:D,bottom:D,left:D,inset:D,insetBlock:D,insetBlockStart:D,insetBlockEnd:D,insetInline:D,insetInlineStart:D,insetInlineEnd:D,padding:D,paddingTop:D,paddingRight:D,paddingBottom:D,paddingLeft:D,paddingBlock:D,paddingBlockStart:D,paddingBlockEnd:D,paddingInline:D,paddingInlineStart:D,paddingInlineEnd:D,margin:D,marginTop:D,marginRight:D,marginBottom:D,marginLeft:D,marginBlock:D,marginBlockStart:D,marginBlockEnd:D,marginInline:D,marginInlineStart:D,marginInlineEnd:D,backgroundPositionX:D,backgroundPositionY:D,...Nw,zIndex:jd,fillOpacity:ri,strokeOpacity:ri,numOctaves:jd},_w={...Au,color:te,backgroundColor:te,outlineColor:te,fill:te,stroke:te,borderColor:te,borderTopColor:te,borderRightColor:te,borderBottomColor:te,borderLeftColor:te,filter:ll,WebkitFilter:ll},Gm=e=>_w[e];function Qm(e,t){let n=Gm(e);return n!==ll&&(n=Yt),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Aw=new Set(["auto","none","0"]);function Mw(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!Aw.has(o)&&ii(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=Qm(n,i)}class Rw extends Cu{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let d=0;d<t.length;d++){let f=t[d];if(typeof f=="string"&&(f=f.trim(),xu(f))){const h=Om(f,n.current);h!==void 0&&(t[d]=h),d===t.length-1&&(this.finalKeyframe=f)}}if(this.resolveNoneKeyframes(),!Bm.has(r)||t.length!==2)return;const[i,o]=t,s=Td(i),a=Td(o),l=ud(i),c=ud(o);if(l!==c&&Mt[r]){this.needsMeasurement=!0;return}if(s!==a)if(vd(s)&&vd(a))for(let d=0;d<t.length;d++){const f=t[d];typeof f=="string"&&(t[d]=parseFloat(f))}else Mt[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)(t[i]===null||bw(t[i]))&&r.push(i);r.length&&Mw(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Mt[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var a;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const i=t.getValue(n);i&&i.jump(this.measuredOrigin,!1);const o=r.length-1,s=r[o];r[o]=Mt[n](t.measureViewportBox(),window.getComputedStyle(t.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,c])=>{t.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function zw(e,t,n){if(e instanceof EventTarget)return[e];if(typeof e=="string"){let r=document;const i=(n==null?void 0:n[e])??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e)}const Xm=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function qm(e){return lm(e)&&"offsetHeight"in e}const{schedule:Mu}=km(queueMicrotask,!1),Xe={x:!1,y:!1};function Jm(){return Xe.x||Xe.y}function Lw(e){return e==="x"||e==="y"?Xe[e]?null:(Xe[e]=!0,()=>{Xe[e]=!1}):Xe.x||Xe.y?null:(Xe.x=Xe.y=!0,()=>{Xe.x=Xe.y=!1})}function Zm(e,t){const n=zw(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function Ed(e){return!(e.pointerType==="touch"||Jm())}function Vw(e,t,n={}){const[r,i,o]=Zm(e,n),s=a=>{if(!Ed(a))return;const{target:l}=a,c=t(l,a);if(typeof c!="function"||!l)return;const d=f=>{Ed(f)&&(c(f),l.removeEventListener("pointerleave",d))};l.addEventListener("pointerleave",d,i)};return r.forEach(a=>{a.addEventListener("pointerenter",s,i)}),o}const eg=(e,t)=>t?e===t?!0:eg(e,t.parentElement):!1,Ru=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,Iw=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function tg(e){return Iw.has(e.tagName)||e.isContentEditable===!0}const no=new WeakSet;function bd(e){return t=>{t.key==="Enter"&&e(t)}}function Us(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const Fw=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=bd(()=>{if(no.has(n))return;Us(n,"down");const i=bd(()=>{Us(n,"up")}),o=()=>Us(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",o,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function Cd(e){return Ru(e)&&!Jm()}function Ow(e,t,n={}){const[r,i,o]=Zm(e,n),s=a=>{const l=a.currentTarget;if(!Cd(a))return;no.add(l);const c=t(l,a),d=(y,v)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",h),no.has(l)&&no.delete(l),Cd(y)&&typeof c=="function"&&c(y,{success:v})},f=y=>{d(y,l===window||l===document||n.useGlobalTarget||eg(l,y.target))},h=y=>{d(y,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",h,i)};return r.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",s,i),qm(a)&&(a.addEventListener("focus",c=>Fw(c,i)),!tg(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),o}function ng(e){return lm(e)&&"ownerSVGElement"in e}function Uw(e){return ng(e)&&e.tagName==="svg"}const Bw=[...Km,te,Yt],Ww=e=>Bw.find(Ym(e)),Pd=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ln=()=>({x:Pd(),y:Pd()}),Dd=()=>({min:0,max:0}),ie=()=>({x:Dd(),y:Dd()}),Ro={current:null},zu={current:!1},Hw=typeof window<"u";function rg(){if(zu.current=!0,!!Hw)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Ro.current=e.matches;e.addEventListener("change",t),t()}else Ro.current=!1}const $w=new WeakMap;function is(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function oi(e){return typeof e=="string"||Array.isArray(e)}const Lu=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Vu=["initial",...Lu];function os(e){return is(e.animate)||Vu.some(t=>oi(e[t]))}function ig(e){return!!(os(e)||e.variants)}function Yw(e,t,n){for(const r in t){const i=t[r],o=n[r];if(ye(i))e.addValue(r,i);else if(ye(o))e.addValue(r,Zn(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const s=e.getValue(r);s.liveStyle===!0?s.jump(i):s.hasAnimated||s.set(i)}else{const s=e.getStaticValue(r);e.addValue(r,Zn(s!==void 0?s:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Nd=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let zo={};function og(e){zo=e}function Kw(){return zo}class Gw{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:s},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Cu,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const h=Se.now();this.renderScheduledAt<h&&(this.renderScheduledAt=h,U.render(this.render,!1,!0))};const{latestValues:l,renderState:c}=s;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!o,this.isControllingVariants=os(n),this.isVariantNode=ig(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const h in f){const y=f[h];l[h]!==void 0&&ye(y)&&y.set(l[h])}}mount(t){var n;this.current=t,$w.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,i)=>this.bindToMotionValue(i,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(zu.current||rg(),this.shouldReduceMotion=Ro.current),(n=this.parent)==null||n.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var t;this.projection&&this.projection.unmount(),$t(this.notifyUpdate),$t(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=ar.has(t);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&U.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let o;typeof window<"u"&&window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in zo){const n=zo[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ie()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Nd.length;r++){const i=Nd[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,s=t[o];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=Yw(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Zn(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(am(r)||um(r))?r=parseFloat(r):!Ww(r)&&Yt.test(n)&&(r=Qm(t,n)),this.setBaseTarget(t,ye(r)?r.get():r)),ye(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var o;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const s=Nu(this.props,n,(o=this.presenceContext)==null?void 0:o.custom);s&&(r=s[t])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!ye(i)?i:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new gu),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){Mu.render(this.render)}}class Xt{constructor(t){this.isMounted=!1,this.node=t}update(){}}class sg extends Gw{constructor(){super(...arguments),this.KeyframeResolver=Rw}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const r=t.style;return r?r[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;ye(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function ag({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Qw({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Xw(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Bs(e){return e===void 0||e===1}function ul({scale:e,scaleX:t,scaleY:n}){return!Bs(e)||!Bs(t)||!Bs(n)}function rn(e){return ul(e)||lg(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function lg(e){return _d(e.x)||_d(e.y)}function _d(e){return e&&e!=="0%"}function Lo(e,t,n){const r=e-n,i=t*r;return n+i}function Ad(e,t,n,r,i){return i!==void 0&&(e=Lo(e,i,r)),Lo(e,n,r)+t}function cl(e,t=0,n=1,r,i){e.min=Ad(e.min,t,n,r,i),e.max=Ad(e.max,t,n,r,i)}function ug(e,{x:t,y:n}){cl(e.x,t.translate,t.scale,t.originPoint),cl(e.y,n.translate,n.scale,n.originPoint)}const Md=.999999999999,Rd=1.0000000000001;function qw(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const{visualElement:l}=o.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&In(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,ug(e,s)),r&&rn(o.latestValues)&&In(e,o.latestValues))}t.x<Rd&&t.x>Md&&(t.x=1),t.y<Rd&&t.y>Md&&(t.y=1)}function Vn(e,t){e.min=e.min+t,e.max=e.max+t}function zd(e,t,n,r,i=.5){const o=$(e.min,e.max,i);cl(e,t,n,o,r)}function In(e,t){zd(e.x,t.x,t.scaleX,t.scale,t.originX),zd(e.y,t.y,t.scaleY,t.scale,t.originY)}function cg(e,t){return ag(Xw(e.getBoundingClientRect(),t))}function Jw(e,t,n){const r=cg(e,n),{scroll:i}=t;return i&&(Vn(r.x,i.offset.x),Vn(r.y,i.offset.y)),r}const Zw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},ek=sr.length;function tk(e,t,n){let r="",i=!0;for(let o=0;o<ek;o++){const s=sr[o],a=e[s];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(s.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=Xm(a,Au[s]);if(!l){i=!1;const d=Zw[s]||s;r+=`${d}(${c}) `}n&&(t[s]=c)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Iu(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let s=!1,a=!1;for(const l in t){const c=t[l];if(ar.has(l)){s=!0;continue}else if(Tm(l)){i[l]=c;continue}else{const d=Xm(c,Au[l]);l.startsWith("origin")?(a=!0,o[l]=d):r[l]=d}}if(t.transform||(s||n?r.transform=tk(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:d=0}=o;r.transformOrigin=`${l} ${c} ${d}`}}function dg(e,{style:t,vars:n},r,i){const o=e.style;let s;for(s in t)o[s]=t[s];i==null||i.applyProjectionStyles(o,r);for(s in n)o.setProperty(s,n[s])}function Ld(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const yr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(D.test(e))e=parseFloat(e);else return e;const n=Ld(e,t.target.x),r=Ld(e,t.target.y);return`${n}% ${r}%`}},nk={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Yt.parse(e);if(i.length>5)return r;const o=Yt.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=l;const c=$(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=c),typeof i[3+s]=="number"&&(i[3+s]/=c),o(i)}},dl={borderRadius:{...yr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:yr,borderTopRightRadius:yr,borderBottomLeftRadius:yr,borderBottomRightRadius:yr,boxShadow:nk};function fg(e,{layout:t,layoutId:n}){return ar.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!dl[e]||e==="opacity")}function Fu(e,t,n){var s;const r=e.style,i=t==null?void 0:t.style,o={};if(!r)return o;for(const a in r)(ye(r[a])||i&&ye(i[a])||fg(a,e)||((s=n==null?void 0:n.getValue(a))==null?void 0:s.liveStyle)!==void 0)&&(o[a]=r[a]);return o}function rk(e){return window.getComputedStyle(e)}class ik extends sg{constructor(){super(...arguments),this.type="html",this.renderInstance=dg}readValueFromInstance(t,n){var r;if(ar.has(n))return(r=this.projection)!=null&&r.isProjecting?Za(n):z1(t,n);{const i=rk(t),o=(Tm(n)?i.getPropertyValue(n):i[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return cg(t,n)}build(t,n,r){Iu(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Fu(t,n,r)}}const ok={offset:"stroke-dashoffset",array:"stroke-dasharray"},sk={offset:"strokeDashoffset",array:"strokeDasharray"};function ak(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?ok:sk;e[o.offset]=D.transform(-r);const s=D.transform(t),a=D.transform(n);e[o.array]=`${s} ${a}`}const lk=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function hg(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:o=1,pathOffset:s=0,...a},l,c,d){if(Iu(e,a,c),l){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:f,style:h}=e;f.transform&&(h.transform=f.transform,delete f.transform),(h.transform||f.transformOrigin)&&(h.transformOrigin=f.transformOrigin??"50% 50%",delete f.transformOrigin),h.transform&&(h.transformBox=(d==null?void 0:d.transformBox)??"fill-box",delete f.transformBox);for(const y of lk)f[y]!==void 0&&(h[y]=f[y],delete f[y]);t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),i!==void 0&&ak(f,i,o,s,!1)}const pg=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),mg=e=>typeof e=="string"&&e.toLowerCase()==="svg";function uk(e,t,n,r){dg(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(pg.has(i)?i:_u(i),t.attrs[i])}function gg(e,t,n){const r=Fu(e,t,n);for(const i in e)if(ye(e[i])||ye(t[i])){const o=sr.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}class ck extends sg{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ie}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(ar.has(n)){const r=Gm(n);return r&&r.default||0}return n=pg.has(n)?n:_u(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return gg(t,n,r)}build(t,n,r){hg(t,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(t,n,r,i){uk(t,n,r,i)}mount(t){this.isSVGTag=mg(t.tagName),super.mount(t)}}const dk=Vu.length;function yg(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?yg(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<dk;n++){const r=Vu[n],i=e.props[r];(oi(i)||i===!1)&&(t[r]=i)}return t}function vg(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const fk=[...Lu].reverse(),hk=Lu.length;function pk(e){return t=>Promise.all(t.map(({animation:n,options:r})=>jw(e,n,r)))}function mk(e){let t=pk(e),n=Vd(),r=!0;const i=l=>(c,d)=>{var h;const f=$n(e,d,l==="exit"?(h=e.presenceContext)==null?void 0:h.custom:void 0);if(f){const{transition:y,transitionEnd:v,...x}=f;c={...c,...x,...v}}return c};function o(l){t=l(e)}function s(l){const{props:c}=e,d=yg(e.parent)||{},f=[],h=new Set;let y={},v=1/0;for(let S=0;S<hk;S++){const p=fk[S],m=n[p],g=c[p]!==void 0?c[p]:d[p],k=oi(g),T=p===l?m.isActive:null;T===!1&&(v=S);let b=g===d[p]&&g!==c[p]&&k;if(b&&r&&e.manuallyAnimateOnMount&&(b=!1),m.protectedKeys={...y},!m.isActive&&T===null||!g&&!m.prevProp||is(g)||typeof g=="boolean")continue;const C=gk(m.prevProp,g);let j=C||p===l&&m.isActive&&!b&&k||S>v&&k,R=!1;const _=Array.isArray(g)?g:[g];let X=_.reduce(i(p),{});T===!1&&(X={});const{prevResolvedValues:it={}}=m,qt={...it,...X},lr=q=>{j=!0,h.has(q)&&(R=!0,h.delete(q)),m.needsAnimating[q]=!0;const P=e.getValue(q);P&&(P.liveStyle=!1)};for(const q in qt){const P=X[q],A=it[q];if(y.hasOwnProperty(q))continue;let M=!1;ol(P)&&ol(A)?M=!vg(P,A):M=P!==A,M?P!=null?lr(q):h.add(q):P!==void 0&&h.has(q)?lr(q):m.protectedKeys[q]=!0}m.prevProp=g,m.prevResolvedValues=X,m.isActive&&(y={...y,...X}),r&&e.blockInitialAnimation&&(j=!1);const yi=b&&C;j&&(!yi||R)&&f.push(..._.map(q=>{const P={type:p};if(typeof q=="string"&&r&&!yi&&e.manuallyAnimateOnMount&&e.parent){const{parent:A}=e,M=$n(A,q);if(A.enteringChildren&&M){const{delayChildren:W}=M.transition||{};P.delay=Um(A.enteringChildren,e,W)}}return{animation:q,options:P}}))}if(h.size){const S={};if(typeof c.initial!="boolean"){const p=$n(e,Array.isArray(c.initial)?c.initial[0]:c.initial);p&&p.transition&&(S.transition=p.transition)}h.forEach(p=>{const m=e.getBaseTarget(p),g=e.getValue(p);g&&(g.liveStyle=!0),S[p]=m??null}),f.push({animation:S})}let x=!!f.length;return r&&(c.initial===!1||c.initial===c.animate)&&!e.manuallyAnimateOnMount&&(x=!1),r=!1,x?t(f):Promise.resolve()}function a(l,c){var f;if(n[l].isActive===c)return Promise.resolve();(f=e.variantChildren)==null||f.forEach(h=>{var y;return(y=h.animationState)==null?void 0:y.setActive(l,c)}),n[l].isActive=c;const d=s(l);for(const h in n)n[h].protectedKeys={};return d}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Vd()}}}function gk(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!vg(t,e):!1}function en(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Vd(){return{animate:en(!0),whileInView:en(),whileHover:en(),whileTap:en(),whileDrag:en(),whileFocus:en(),exit:en()}}const xg=1e-4,yk=1-xg,vk=1+xg,wg=.01,xk=0-wg,wk=0+wg;function Te(e){return e.max-e.min}function kk(e,t,n){return Math.abs(e-t)<=n}function Id(e,t,n,r=.5){e.origin=r,e.originPoint=$(t.min,t.max,e.origin),e.scale=Te(n)/Te(t),e.translate=$(n.min,n.max,e.origin)-e.originPoint,(e.scale>=yk&&e.scale<=vk||isNaN(e.scale))&&(e.scale=1),(e.translate>=xk&&e.translate<=wk||isNaN(e.translate))&&(e.translate=0)}function zr(e,t,n,r){Id(e.x,t.x,n.x,r?r.originX:void 0),Id(e.y,t.y,n.y,r?r.originY:void 0)}function Fd(e,t,n){e.min=n.min+t.min,e.max=e.min+Te(t)}function Sk(e,t,n){Fd(e.x,t.x,n.x),Fd(e.y,t.y,n.y)}function Od(e,t,n){e.min=t.min-n.min,e.max=e.min+Te(t)}function Vo(e,t,n){Od(e.x,t.x,n.x),Od(e.y,t.y,n.y)}function Ud(e,t,n,r,i){return e-=t,e=Lo(e,1/n,r),i!==void 0&&(e=Lo(e,1/i,r)),e}function Tk(e,t=0,n=1,r=.5,i,o=e,s=e){if(ct.test(t)&&(t=parseFloat(t),t=$(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=$(o.min,o.max,r);e===o&&(a-=t),e.min=Ud(e.min,t,n,a,i),e.max=Ud(e.max,t,n,a,i)}function Bd(e,t,[n,r,i],o,s){Tk(e,t[n],t[r],t[i],t.scale,o,s)}const jk=["x","scaleX","originX"],Ek=["y","scaleY","originY"];function Wd(e,t,n,r){Bd(e.x,t,jk,n?n.x:void 0,r?r.x:void 0),Bd(e.y,t,Ek,n?n.y:void 0,r?r.y:void 0)}function Hd(e,t){e.min=t.min,e.max=t.max}function Ge(e,t){Hd(e.x,t.x),Hd(e.y,t.y)}function $d(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Yd(e){return e.translate===0&&e.scale===1}function kg(e){return Yd(e.x)&&Yd(e.y)}function Kd(e,t){return e.min===t.min&&e.max===t.max}function bk(e,t){return Kd(e.x,t.x)&&Kd(e.y,t.y)}function Gd(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Sg(e,t){return Gd(e.x,t.x)&&Gd(e.y,t.y)}function Qd(e){return Te(e.x)/Te(e.y)}function Xd(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Ie(e){return[e("x"),e("y")]}function Ck(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((i||o||s)&&(r=`translate3d(${i}px, ${o}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:c,rotate:d,rotateX:f,rotateY:h,skewX:y,skewY:v}=n;c&&(r=`perspective(${c}px) ${r}`),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotateX(${f}deg) `),h&&(r+=`rotateY(${h}deg) `),y&&(r+=`skewX(${y}deg) `),v&&(r+=`skewY(${v}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const Tg=["TopLeft","TopRight","BottomLeft","BottomRight"],Pk=Tg.length,qd=e=>typeof e=="string"?parseFloat(e):e,Jd=e=>typeof e=="number"||D.test(e);function Dk(e,t,n,r,i,o){i?(e.opacity=$(0,n.opacity??1,Nk(r)),e.opacityExit=$(t.opacity??1,0,_k(r))):o&&(e.opacity=$(t.opacity??1,n.opacity??1,r));for(let s=0;s<Pk;s++){const a=`border${Tg[s]}Radius`;let l=Zd(t,a),c=Zd(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Jd(l)===Jd(c)?(e[a]=Math.max($(qd(l),qd(c),r),0),(ct.test(c)||ct.test(l))&&(e[a]+="%")):e[a]=c}(t.rotate||n.rotate)&&(e.rotate=$(t.rotate||0,n.rotate||0,r))}function Zd(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Nk=jg(0,.5,ym),_k=jg(.5,.95,He);function jg(e,t,n){return r=>r<e?0:r>t?1:n(ni(e,t,r))}function Ak(e,t){const n=Se.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&($t(r),e(o-t))};return U.setup(r,!0),()=>$t(r)}function si(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function ro(e){return ye(e)?e.get():e}function Mk(e,t,n){const r=ye(e)?e:Zn(e);return r.start(Du("",r,t,n)),r.animation}const Rk=(e,t)=>e.depth-t.depth;class zk{constructor(){this.children=[],this.isDirty=!1}add(t){fu(this.children,t),this.isDirty=!0}remove(t){hu(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Rk),this.isDirty=!1,this.children.forEach(t)}}class Lk{constructor(){this.members=[]}add(t){fu(this.members,t),t.scheduleRender()}remove(t){if(hu(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const io={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Ws=["","X","Y","Z"],Vk=1e3;let Ik=0;function Hs(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Eg(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Hm(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",U,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Eg(r)}function bg({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=Ik++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Uk),this.nodes.forEach($k),this.nodes.forEach(Yk),this.nodes.forEach(Bk)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new zk)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new gu),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s){if(this.instance)return;this.isSVG=ng(s)&&!Uw(s),this.instance=s;const{layoutId:a,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),e){let d,f=0;const h=()=>this.root.updateBlockedByResize=!1;U.read(()=>{f=window.innerWidth}),e(s,()=>{const y=window.innerWidth;y!==f&&(f=y,this.root.updateBlockedByResize=!0,d&&d(),d=Ak(h,250),io.hasAnimatedSinceResize&&(io.hasAnimatedSinceResize=!1,this.nodes.forEach(nf)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&c&&(a||l)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeLayoutChanged:h,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const v=this.options.transition||c.getDefaultTransition()||qk,{onLayoutAnimationStart:x,onLayoutAnimationComplete:S}=c.getProps(),p=!this.targetLayout||!Sg(this.targetLayout,y),m=!f&&h;if(this.options.layoutRoot||this.resumeFrom||m||f&&(p||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const g={...Pu(v,"layout"),onPlay:x,onComplete:S};(c.shouldReduceMotion||this.options.layoutRoot)&&(g.delay=0,g.type=!1),this.startAnimation(g),this.setAnimationOrigin(d,m)}else f||nf(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),$t(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Kk),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Eg(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(ef);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(tf);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Hk),this.nodes.forEach(Fk),this.nodes.forEach(Ok)):this.nodes.forEach(tf),this.clearAllSnapshots();const a=Se.now();de.delta=dt(0,1e3/60,a-de.timestamp),de.timestamp=a,de.isProcessing=!0,zs.update.process(de),zs.preRender.process(de),zs.render.process(de),de.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Mu.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Wk),this.sharedNodes.forEach(Gk)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,U.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){U.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Te(this.snapshot.measuredBox.x)&&!Te(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=ie(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&this.instance){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!kg(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,d=c!==this.prevTransformTemplateValue;s&&this.instance&&(a||rn(this.latestValues)||d)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),Jk(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:s}=this.options;if(!s)return ie();const a=s.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(Zk))){const{scroll:d}=this.root;d&&(Vn(a.x,d.offset.x),Vn(a.y,d.offset.y))}return a}removeElementScroll(s){var l;const a=ie();if(Ge(a,s),(l=this.scroll)!=null&&l.wasRoot)return a;for(let c=0;c<this.path.length;c++){const d=this.path[c],{scroll:f,options:h}=d;d!==this.root&&f&&h.layoutScroll&&(f.wasRoot&&Ge(a,s),Vn(a.x,f.offset.x),Vn(a.y,f.offset.y))}return a}applyTransform(s,a=!1){const l=ie();Ge(l,s);for(let c=0;c<this.path.length;c++){const d=this.path[c];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&In(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),rn(d.latestValues)&&In(l,d.latestValues)}return rn(this.latestValues)&&In(l,this.latestValues),l}removeTransform(s){const a=ie();Ge(a,s);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!rn(c.latestValues))continue;ul(c.latestValues)&&c.updateSnapshot();const d=ie(),f=c.measurePageBox();Ge(d,f),Wd(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,d)}return rn(this.latestValues)&&Wd(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==de.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var y;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(s||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:f}=this.options;if(!this.layout||!(d||f))return;this.resolvedRelativeTargetAt=de.timestamp;const h=this.getClosestProjectingParent();h&&this.linkedParentVersion!==h.layoutVersion&&!h.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(h&&h.layout?this.createRelativeTarget(h,this.layout.layoutBox,h.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ie(),this.targetWithTransforms=ie()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Sk(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ge(this.target,this.layout.layoutBox),ug(this.target,this.targetDelta)):Ge(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?this.createRelativeTarget(h,this.target,h.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||ul(this.parent.latestValues)||lg(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(s,a,l){this.relativeParent=s,this.linkedParentVersion=s.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ie(),this.relativeTargetOrigin=ie(),Vo(this.relativeTargetOrigin,a,l),Ge(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var v;const s=this.getLead(),a=!!this.resumingFrom||this!==s;let l=!0;if((this.isProjectionDirty||(v=this.parent)!=null&&v.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===de.timestamp&&(l=!1),l)return;const{layout:c,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||d))return;Ge(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,h=this.treeScale.y;qw(this.layoutCorrected,this.treeScale,this.path,a),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=ie());const{target:y}=s;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():($d(this.prevProjectionDelta.x,this.projectionDelta.x),$d(this.prevProjectionDelta.y,this.projectionDelta.y)),zr(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==h||!Xd(this.projectionDelta.x,this.prevProjectionDelta.x)||!Xd(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),s){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ln(),this.projectionDelta=Ln(),this.projectionDeltaWithTransform=Ln()}setAnimationOrigin(s,a=!1){const l=this.snapshot,c=l?l.latestValues:{},d={...this.latestValues},f=Ln();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=ie(),y=l?l.source:void 0,v=this.layout?this.layout.source:void 0,x=y!==v,S=this.getStack(),p=!S||S.members.length<=1,m=!!(x&&!p&&this.options.crossfade===!0&&!this.path.some(Xk));this.animationProgress=0;let g;this.mixTargetDelta=k=>{const T=k/1e3;rf(f.x,s.x,T),rf(f.y,s.y,T),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Vo(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Qk(this.relativeTarget,this.relativeTargetOrigin,h,T),g&&bk(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=ie()),Ge(g,this.relativeTarget)),x&&(this.animationValues=d,Dk(d,c,this.latestValues,T,m,p)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=T},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){var a,l,c;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(c=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||c.stop(),this.pendingAnimation&&($t(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=U.update(()=>{io.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Zn(0)),this.currentAnimation=Mk(this.motionValue,[0,1e3],{...s,velocity:0,isSync:!0,onUpdate:d=>{this.mixTargetDelta(d),s.onUpdate&&s.onUpdate(d)},onStop:()=>{},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Vk),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:d}=s;if(!(!a||!l||!c)){if(this!==s&&this.layout&&c&&Cg(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||ie();const f=Te(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+f;const h=Te(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+h}Ge(a,l),In(a,d),zr(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new Lk),this.sharedNodes.get(s).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var a;const{layoutId:s}=this.options;return s?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:s}=this.options;return s?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Hs("z",s,c,this.animationValues);for(let d=0;d<Ws.length;d++)Hs(`rotate${Ws[d]}`,s,c,this.animationValues),Hs(`skew${Ws[d]}`,s,c,this.animationValues);s.render();for(const d in c)s.setStaticValue(d,c[d]),this.animationValues&&(this.animationValues[d]=c[d]);s.scheduleRender()}applyProjectionStyles(s,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){s.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,s.visibility="",s.opacity="",s.pointerEvents=ro(a==null?void 0:a.pointerEvents)||"",s.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(s.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,s.pointerEvents=ro(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!rn(this.latestValues)&&(s.transform=l?l({},""):"none",this.hasProjected=!1);return}s.visibility="";const d=c.animationValues||c.latestValues;this.applyTransformsToTarget();let f=Ck(this.projectionDeltaWithTransform,this.treeScale,d);l&&(f=l(d,f)),s.transform=f;const{x:h,y}=this.projectionDelta;s.transformOrigin=`${h.origin*100}% ${y.origin*100}% 0`,c.animationValues?s.opacity=c===this?d.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:s.opacity=c===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const v in dl){if(d[v]===void 0)continue;const{correct:x,applyTo:S,isCSSVariable:p}=dl[v],m=f==="none"?d[v]:x(d[v],c);if(S){const g=S.length;for(let k=0;k<g;k++)s[S[k]]=m}else p?this.options.visualElement.renderState.vars[v]=m:s[v]=m}this.options.layoutId&&(s.pointerEvents=c===this?ro(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(ef),this.root.sharedNodes.clear()}}}function Fk(e){e.updateLayout()}function Ok(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=t.source!==e.layout.source;o==="size"?Ie(f=>{const h=s?t.measuredBox[f]:t.layoutBox[f],y=Te(h);h.min=r[f].min,h.max=h.min+y}):Cg(o,t.layoutBox,r)&&Ie(f=>{const h=s?t.measuredBox[f]:t.layoutBox[f],y=Te(r[f]);h.max=h.min+y,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+y)});const a=Ln();zr(a,r,t.layoutBox);const l=Ln();s?zr(l,e.applyTransform(i,!0),t.measuredBox):zr(l,r,t.layoutBox);const c=!kg(a);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:h,layout:y}=f;if(h&&y){const v=ie();Vo(v,t.layoutBox,h.layoutBox);const x=ie();Vo(x,r,y.layoutBox),Sg(v,x)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=v,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeLayoutChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function Uk(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Bk(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Wk(e){e.clearSnapshot()}function ef(e){e.clearMeasurements()}function tf(e){e.isLayoutDirty=!1}function Hk(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function nf(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function $k(e){e.resolveTargetDelta()}function Yk(e){e.calcProjection()}function Kk(e){e.resetSkewAndRotation()}function Gk(e){e.removeLeadSnapshot()}function rf(e,t,n){e.translate=$(t.translate,0,n),e.scale=$(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function of(e,t,n,r){e.min=$(t.min,n.min,r),e.max=$(t.max,n.max,r)}function Qk(e,t,n,r){of(e.x,t.x,n.x,r),of(e.y,t.y,n.y,r)}function Xk(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const qk={duration:.45,ease:[.4,0,.1,1]},sf=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),af=sf("applewebkit/")&&!sf("chrome/")?Math.round:He;function lf(e){e.min=af(e.min),e.max=af(e.max)}function Jk(e){lf(e.x),lf(e.y)}function Cg(e,t,n){return e==="position"||e==="preserve-aspect"&&!kk(Qd(t),Qd(n),.2)}function Zk(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const eS=bg({attachResizeListener:(e,t)=>si(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),$s={current:void 0},Pg=bg({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!$s.current){const e=new eS({});e.mount(window),e.setOptions({layoutScroll:!0}),$s.current=e}return $s.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Ou=w.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function uf(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function tS(...e){return t=>{let n=!1;const r=e.map(i=>{const o=uf(i,t);return!n&&typeof o=="function"&&(n=!0),o});if(n)return()=>{for(let i=0;i<r.length;i++){const o=r[i];typeof o=="function"?o():uf(e[i],null)}}}}function nS(...e){return w.useCallback(tS(...e),e)}class rS extends w.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=n.offsetParent,i=qm(r)&&r.offsetWidth||0,o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft,o.right=i-o.width-o.left}return null}componentDidUpdate(){}render(){return this.props.children}}function iS({children:e,isPresent:t,anchorX:n,root:r}){var d;const i=w.useId(),o=w.useRef(null),s=w.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:a}=w.useContext(Ou),l=((d=e.props)==null?void 0:d.ref)??(e==null?void 0:e.ref),c=nS(o,l);return w.useInsertionEffect(()=>{const{width:f,height:h,top:y,left:v,right:x}=s.current;if(t||!o.current||!f||!h)return;const S=n==="left"?`left: ${v}`:`right: ${x}`;o.current.dataset.motionPopId=i;const p=document.createElement("style");a&&(p.nonce=a);const m=r??document.head;return m.appendChild(p),p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${h}px !important;
            ${S}px !important;
            top: ${y}px !important;
          }
        `),()=>{m.contains(p)&&m.removeChild(p)}},[t]),u.jsx(rS,{isPresent:t,childRef:o,sizeRef:s,children:w.cloneElement(e,{ref:c})})}const oS=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s,anchorX:a,root:l})=>{const c=du(sS),d=w.useId();let f=!0,h=w.useMemo(()=>(f=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:y=>{c.set(y,!0);for(const v of c.values())if(!v)return;r&&r()},register:y=>(c.set(y,!1),()=>c.delete(y))}),[n,c,r]);return o&&f&&(h={...h}),w.useMemo(()=>{c.forEach((y,v)=>c.set(v,!1))},[n]),w.useEffect(()=>{!n&&!c.size&&r&&r()},[n]),s==="popLayout"&&(e=u.jsx(iS,{isPresent:n,anchorX:a,root:l,children:e})),u.jsx(rs.Provider,{value:h,children:e})};function sS(){return new Map}function Dg(e=!0){const t=w.useContext(rs);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=w.useId();w.useEffect(()=>{if(e)return i(o)},[e]);const s=w.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,s]:[!0]}const Oi=e=>e.key||"";function cf(e){const t=[];return w.Children.forEach(e,n=>{w.isValidElement(n)&&t.push(n)}),t}const Ng=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:o="sync",propagate:s=!1,anchorX:a="left",root:l})=>{const[c,d]=Dg(s),f=w.useMemo(()=>cf(e),[e]),h=s&&!c?[]:f.map(Oi),y=w.useRef(!0),v=w.useRef(f),x=du(()=>new Map),S=w.useRef(new Set),[p,m]=w.useState(f),[g,k]=w.useState(f);sm(()=>{y.current=!1,v.current=f;for(let C=0;C<g.length;C++){const j=Oi(g[C]);h.includes(j)?(x.delete(j),S.current.delete(j)):x.get(j)!==!0&&x.set(j,!1)}},[g,h.length,h.join("-")]);const T=[];if(f!==p){let C=[...f];for(let j=0;j<g.length;j++){const R=g[j],_=Oi(R);h.includes(_)||(C.splice(j,0,R),T.push(R))}return o==="wait"&&T.length&&(C=T),k(cf(C)),m(f),null}const{forceRender:b}=w.useContext(cu);return u.jsx(u.Fragment,{children:g.map(C=>{const j=Oi(C),R=s&&!c?!1:f===g||h.includes(j),_=()=>{if(S.current.has(j))return;if(S.current.add(j),x.has(j))x.set(j,!0);else return;let X=!0;x.forEach(it=>{it||(X=!1)}),X&&(b==null||b(),k(v.current),s&&(d==null||d()),r&&r())};return u.jsx(oS,{isPresent:R,initial:!y.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:o,root:l,onExitComplete:R?void 0:_,anchorX:a,children:C},j)})})},_g=w.createContext({strict:!1}),df={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let ff=!1;function aS(){if(ff)return;const e={};for(const t in df)e[t]={isEnabled:n=>df[t].some(r=>!!n[r])};og(e),ff=!0}function Ag(){return aS(),Kw()}function lS(e){const t=Ag();for(const n in e)t[n]={...t[n],...e[n]};og(t)}const uS=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Io(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||uS.has(e)}let Mg=e=>!Io(e);function cS(e){typeof e=="function"&&(Mg=t=>t.startsWith("on")?!Io(t):e(t))}try{cS(require("@emotion/is-prop-valid").default)}catch{}function dS(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Mg(i)||n===!0&&Io(i)||!t&&!Io(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}const ss=w.createContext({});function fS(e,t){if(os(e)){const{initial:n,animate:r}=e;return{initial:n===!1||oi(n)?n:void 0,animate:oi(r)?r:void 0}}return e.inherit!==!1?t:{}}function hS(e){const{initial:t,animate:n}=fS(e,w.useContext(ss));return w.useMemo(()=>({initial:t,animate:n}),[hf(t),hf(n)])}function hf(e){return Array.isArray(e)?e.join(" "):e}const Uu=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Rg(e,t,n){for(const r in t)!ye(t[r])&&!fg(r,n)&&(e[r]=t[r])}function pS({transformTemplate:e},t){return w.useMemo(()=>{const n=Uu();return Iu(n,t,e),Object.assign({},n.vars,n.style)},[t])}function mS(e,t){const n=e.style||{},r={};return Rg(r,n,e),Object.assign(r,pS(e,t)),r}function gS(e,t){const n={},r=mS(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const zg=()=>({...Uu(),attrs:{}});function yS(e,t,n,r){const i=w.useMemo(()=>{const o=zg();return hg(o,t,mg(r),e.transformTemplate,e.style),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};Rg(o,e.style,e),i.style={...o,...i.style}}return i}const vS=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Bu(e){return typeof e!="string"||e.includes("-")?!1:!!(vS.indexOf(e)>-1||/[A-Z]/u.test(e))}function xS(e,t,n,{latestValues:r},i,o=!1,s){const l=(s??Bu(e)?yS:gS)(t,r,i,e),c=dS(t,typeof e=="string",o),d=e!==w.Fragment?{...c,...l,ref:n}:{},{children:f}=t,h=w.useMemo(()=>ye(f)?f.get():f,[f]);return w.createElement(e,{...d,children:h})}function wS({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:kS(n,r,i,e),renderState:t()}}function kS(e,t,n,r){const i={},o=r(e,{});for(const h in o)i[h]=ro(o[h]);let{initial:s,animate:a}=e;const l=os(e),c=ig(e);t&&c&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let d=n?n.initial===!1:!1;d=d||s===!1;const f=d?a:s;if(f&&typeof f!="boolean"&&!is(f)){const h=Array.isArray(f)?f:[f];for(let y=0;y<h.length;y++){const v=Nu(e,h[y]);if(v){const{transitionEnd:x,transition:S,...p}=v;for(const m in p){let g=p[m];if(Array.isArray(g)){const k=d?g.length-1:0;g=g[k]}g!==null&&(i[m]=g)}for(const m in x)i[m]=x[m]}}}return i}const Lg=e=>(t,n)=>{const r=w.useContext(ss),i=w.useContext(rs),o=()=>wS(e,t,r,i);return n?o():du(o)},SS=Lg({scrapeMotionValuesFromProps:Fu,createRenderState:Uu}),TS=Lg({scrapeMotionValuesFromProps:gg,createRenderState:zg}),jS=Symbol.for("motionComponentSymbol");function ES(e,t,n){const r=w.useRef(n);w.useInsertionEffect(()=>{r.current=n});const i=w.useRef(null);return w.useCallback(o=>{var a;o&&((a=e.onMount)==null||a.call(e,o)),t&&(o?t.mount(o):t.unmount());const s=r.current;if(typeof s=="function")if(o){const l=s(o);typeof l=="function"&&(i.current=l)}else i.current?(i.current(),i.current=null):s(o);else s&&(s.current=o)},[t])}const Vg=w.createContext({});function Tr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function bS(e,t,n,r,i,o){var S,p;const{visualElement:s}=w.useContext(ss),a=w.useContext(_g),l=w.useContext(rs),c=w.useContext(Ou).reducedMotion,d=w.useRef(null);r=r||a.renderer,!d.current&&r&&(d.current=r(e,{visualState:t,parent:s,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:c,isSVG:o}));const f=d.current,h=w.useContext(Vg);f&&!f.projection&&i&&(f.type==="html"||f.type==="svg")&&CS(d.current,n,i,h);const y=w.useRef(!1);w.useInsertionEffect(()=>{f&&y.current&&f.update(n,l)});const v=n[Wm],x=w.useRef(!!v&&!((S=window.MotionHandoffIsComplete)!=null&&S.call(window,v))&&((p=window.MotionHasOptimisedAnimation)==null?void 0:p.call(window,v)));return sm(()=>{f&&(y.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),f.scheduleRenderMicrotask(),x.current&&f.animationState&&f.animationState.animateChanges())}),w.useEffect(()=>{f&&(!x.current&&f.animationState&&f.animationState.animateChanges(),x.current&&(queueMicrotask(()=>{var m;(m=window.MotionHandoffMarkAsComplete)==null||m.call(window,v)}),x.current=!1),f.enteringChildren=void 0)}),f}function CS(e,t,n,r){const{layoutId:i,layout:o,drag:s,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Ig(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!s||a&&Tr(a),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,crossfade:d,layoutScroll:l,layoutRoot:c})}function Ig(e){if(e)return e.options.allowProjection!==!1?e.projection:Ig(e.parent)}function Ys(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&lS(r);const o=n?n==="svg":Bu(e),s=o?TS:SS;function a(c,d){let f;const h={...w.useContext(Ou),...c,layoutId:PS(c)},{isStatic:y}=h,v=hS(c),x=s(c,y);if(!y&&om){DS();const S=NS(h);f=S.MeasureLayout,v.visualElement=bS(e,x,h,i,S.ProjectionNode,o)}return u.jsxs(ss.Provider,{value:v,children:[f&&v.visualElement?u.jsx(f,{visualElement:v.visualElement,...h}):null,xS(e,c,ES(x,v.visualElement,d),x,y,t,o)]})}a.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const l=w.forwardRef(a);return l[jS]=e,l}function PS({layoutId:e}){const t=w.useContext(cu).id;return t&&e!==void 0?t+"-"+e:e}function DS(e,t){w.useContext(_g).strict}function NS(e){const t=Ag(),{drag:n,layout:r}=t;if(!n&&!r)return{};const i={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(e)||r!=null&&r.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function _S(e,t){if(typeof Proxy>"u")return Ys;const n=new Map,r=(o,s)=>Ys(o,s,e,t),i=(o,s)=>r(o,s);return new Proxy(i,{get:(o,s)=>s==="create"?r:(n.has(s)||n.set(s,Ys(s,void 0,e,t)),n.get(s))})}const AS=(e,t)=>t.isSVG??Bu(e)?new ck(t):new ik(t,{allowProjection:e!==w.Fragment});class MS extends Xt{constructor(t){super(t),t.animationState||(t.animationState=mk(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();is(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let RS=0;class zS extends Xt{constructor(){super(...arguments),this.id=RS++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const LS={animation:{Feature:MS},exit:{Feature:zS}};function gi(e){return{point:{x:e.pageX,y:e.pageY}}}const VS=e=>t=>Ru(t)&&e(t,gi(t));function Lr(e,t,n,r){return si(e,t,VS(n),r)}const Fg=({current:e})=>e?e.ownerDocument.defaultView:null,pf=(e,t)=>Math.abs(e-t);function IS(e,t){const n=pf(e.x,t.x),r=pf(e.y,t.y);return Math.sqrt(n**2+r**2)}const mf=new Set(["auto","scroll"]);class Og{constructor(t,n,{transformPagePoint:r,contextWindow:i=window,dragSnapToOrigin:o=!1,distanceThreshold:s=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=y=>{this.handleScroll(y.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=Gs(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,x=IS(y.offset,{x:0,y:0})>=this.distanceThreshold;if(!v&&!x)return;const{point:S}=y,{timestamp:p}=de;this.history.push({...S,timestamp:p});const{onStart:m,onMove:g}=this.handlers;v||(m&&m(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,y)},this.handlePointerMove=(y,v)=>{this.lastMoveEvent=y,this.lastMoveEventInfo=Ks(v,this.transformPagePoint),U.update(this.updatePoint,!0)},this.handlePointerUp=(y,v)=>{this.end();const{onEnd:x,onSessionEnd:S,resumeAnimation:p}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&p&&p(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=Gs(y.type==="pointercancel"?this.lastMoveEventInfo:Ks(v,this.transformPagePoint),this.history);this.startEvent&&x&&x(y,m),S&&S(y,m)},!Ru(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=s,this.contextWindow=i||window;const l=gi(t),c=Ks(l,this.transformPagePoint),{point:d}=c,{timestamp:f}=de;this.history=[{...d,timestamp:f}];const{onSessionStart:h}=n;h&&h(t,Gs(c,this.history)),this.removeListeners=hi(Lr(this.contextWindow,"pointermove",this.handlePointerMove),Lr(this.contextWindow,"pointerup",this.handlePointerUp),Lr(this.contextWindow,"pointercancel",this.handlePointerUp)),a&&this.startScrollTracking(a)}startScrollTracking(t){let n=t.parentElement;for(;n;){const r=getComputedStyle(n);(mf.has(r.overflowX)||mf.has(r.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const r=t===window,i=r?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},o={x:i.x-n.x,y:i.y-n.y};o.x===0&&o.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=o.x,this.lastMoveEventInfo.point.y+=o.y):this.history.length>0&&(this.history[0].x-=o.x,this.history[0].y-=o.y),this.scrollPositions.set(t,i),U.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),$t(this.updatePoint)}}function Ks(e,t){return t?{point:t(e.point)}:e}function gf(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Gs({point:e},t){return{point:e,delta:gf(e,Ug(t)),offset:gf(e,FS(t)),velocity:OS(t,.1)}}function FS(e){return e[0]}function Ug(e){return e[e.length-1]}function OS(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Ug(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>yt(t)));)n--;if(!r)return{x:0,y:0};const o=Be(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function US(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?$(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?$(n,e,r.max):Math.min(e,n)),e}function yf(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function BS(e,{top:t,left:n,bottom:r,right:i}){return{x:yf(e.x,n,i),y:yf(e.y,t,r)}}function vf(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function WS(e,t){return{x:vf(e.x,t.x),y:vf(e.y,t.y)}}function HS(e,t){let n=.5;const r=Te(e),i=Te(t);return i>r?n=ni(t.min,t.max-r,e.min):r>i&&(n=ni(e.min,e.max-i,t.min)),dt(0,1,n)}function $S(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const fl=.35;function YS(e=fl){return e===!1?e=0:e===!0&&(e=fl),{x:xf(e,"left","right"),y:xf(e,"top","bottom")}}function xf(e,t,n){return{min:wf(e,t),max:wf(e,n)}}function wf(e,t){return typeof e=="number"?e:e[t]||0}const KS=new WeakMap;class GS{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ie(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const o=f=>{n?(this.stopAnimation(),this.snapToCursor(gi(f).point)):this.pauseAnimation()},s=(f,h)=>{this.stopAnimation();const{drag:y,dragPropagation:v,onDragStart:x}=this.getProps();if(y&&!v&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Lw(y),!this.openDragLock))return;this.latestPointerEvent=f,this.latestPanInfo=h,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ie(p=>{let m=this.getAxisMotionValue(p).get()||0;if(ct.test(m)){const{projection:g}=this.visualElement;if(g&&g.layout){const k=g.layout.layoutBox[p];k&&(m=Te(k)*(parseFloat(m)/100))}}this.originPoint[p]=m}),x&&U.postRender(()=>x(f,h)),sl(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},a=(f,h)=>{this.latestPointerEvent=f,this.latestPanInfo=h;const{dragPropagation:y,dragDirectionLock:v,onDirectionLock:x,onDrag:S}=this.getProps();if(!y&&!this.openDragLock)return;const{offset:p}=h;if(v&&this.currentDirection===null){this.currentDirection=QS(p),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",h.point,p),this.updateAxis("y",h.point,p),this.visualElement.render(),S&&S(f,h)},l=(f,h)=>{this.latestPointerEvent=f,this.latestPanInfo=h,this.stop(f,h),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>Ie(f=>{var h;return this.getAnimationState(f)==="paused"&&((h=this.getAxisMotionValue(f).animation)==null?void 0:h.play())}),{dragSnapToOrigin:d}=this.getProps();this.panSession=new Og(t,{onSessionStart:o,onStart:s,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,distanceThreshold:r,contextWindow:Fg(this.visualElement),element:this.visualElement.current})}stop(t,n){const r=t||this.latestPointerEvent,i=n||this.latestPanInfo,o=this.isDragging;if(this.cancel(),!o||!i||!r)return;const{velocity:s}=i;this.startAnimation(s);const{onDragEnd:a}=this.getProps();a&&U.postRender(()=>a(r,i))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Ui(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=US(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var o;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(o=this.visualElement.projection)==null?void 0:o.layout,i=this.constraints;t&&Tr(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=BS(r.layoutBox,t):this.constraints=!1,this.elastic=YS(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Ie(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=$S(r.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Tr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=Jw(r,i.root,this.visualElement.getTransformPagePoint());let s=WS(i.layout.layoutBox,o);if(n){const a=n(Qw(s));this.hasMutatedConstraints=!!a,a&&(s=ag(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Ie(d=>{if(!Ui(d,n,this.currentDirection))return;let f=l&&l[d]||{};s&&(f={min:0,max:0});const h=i?200:1e6,y=i?40:1e7,v={type:"inertia",velocity:r?t[d]:0,bounceStiffness:h,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...o,...f};return this.startAxisValueAnimation(d,v)});return Promise.all(c).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return sl(this.visualElement,t),r.start(Du(t,r,0,n,this.visualElement,!1))}stopAnimation(){Ie(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Ie(t=>{var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Ie(n=>{const{drag:r}=this.getProps();if(!Ui(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n],l=o.get()||0;o.set(t[n]-$(s,a,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Tr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Ie(s=>{const a=this.getAxisMotionValue(s);if(a&&this.constraints!==!1){const l=a.get();i[s]=HS({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Ie(s=>{if(!Ui(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:c}=this.constraints[s];a.set($(l,c,i[s]))})}addListeners(){if(!this.visualElement.current)return;KS.set(this.visualElement,this);const t=this.visualElement.current,n=Lr(t,"pointerdown",l=>{const{drag:c,dragListener:d=!0}=this.getProps();c&&d&&!tg(l.target)&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Tr(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),U.read(r);const s=si(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Ie(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=l[d].translate,f.set(f.get()+l[d].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=fl,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function Ui(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function QS(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class XS extends Xt{constructor(t){super(t),this.removeGroupControls=He,this.removeListeners=He,this.controls=new GS(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||He}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners()}}const kf=e=>(t,n)=>{e&&U.postRender(()=>e(t,n))};class qS extends Xt{constructor(){super(...arguments),this.removePointerDownListener=He}onPointerDown(t){this.session=new Og(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Fg(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:kf(t),onStart:kf(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&U.postRender(()=>i(o,s))}}}mount(){this.removePointerDownListener=Lr(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Qs=!1;class JS extends w.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),Qs&&o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),io.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,{projection:s}=r;return s&&(s.isPresent=o,Qs=!0,i||t.layoutDependency!==n||n===void 0||t.isPresent!==o?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||U.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Mu.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;Qs=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Bg(e){const[t,n]=Dg(),r=w.useContext(cu);return u.jsx(JS,{...e,layoutGroup:r,switchLayoutGroup:w.useContext(Vg),isPresent:t,safeToRemove:n})}const ZS={pan:{Feature:qS},drag:{Feature:XS,ProjectionNode:Pg,MeasureLayout:Bg}};function Sf(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,o=r[i];o&&U.postRender(()=>o(t,gi(t)))}class e2 extends Xt{mount(){const{current:t}=this.node;t&&(this.unmount=Vw(t,(n,r)=>(Sf(this.node,r,"Start"),i=>Sf(this.node,i,"End"))))}unmount(){}}class t2 extends Xt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=hi(si(this.node.current,"focus",()=>this.onFocus()),si(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Tf(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),o=r[i];o&&U.postRender(()=>o(t,gi(t)))}class n2 extends Xt{mount(){const{current:t}=this.node;t&&(this.unmount=Ow(t,(n,r)=>(Tf(this.node,r,"Start"),(i,{success:o})=>Tf(this.node,i,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const hl=new WeakMap,Xs=new WeakMap,r2=e=>{const t=hl.get(e.target);t&&t(e)},i2=e=>{e.forEach(r2)};function o2({root:e,...t}){const n=e||document;Xs.has(n)||Xs.set(n,{});const r=Xs.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(i2,{root:e,...t})),r[i]}function s2(e,t,n){const r=o2(t);return hl.set(e,n),r.observe(e),()=>{hl.delete(e),r.unobserve(e)}}const a2={some:0,all:1};class l2 extends Xt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:a2[i]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,o&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),h=c?d:f;h&&h(l)};return s2(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(u2(t,n))&&this.startObserver()}unmount(){}}function u2({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const c2={inView:{Feature:l2},tap:{Feature:n2},focus:{Feature:t2},hover:{Feature:e2}},d2={layout:{ProjectionNode:Pg,MeasureLayout:Bg}},f2={...LS,...c2,...ZS,...d2},Z=_S(f2,AS);function rt(){!zu.current&&rg();const[e]=w.useState(Ro.current);return e}/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),p2=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),jf=e=>{const t=p2(e);return t.charAt(0).toUpperCase()+t.slice(1)},Wg=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim(),m2=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var g2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=w.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:s,...a},l)=>w.createElement("svg",{ref:l,...g2,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Wg("lucide",i),...!o&&!m2(a)&&{"aria-hidden":"true"},...a},[...s.map(([c,d])=>w.createElement(c,d)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=(e,t)=>{const n=w.forwardRef(({className:r,...i},o)=>w.createElement(y2,{ref:o,iconNode:t,className:Wg(`lucide-${h2(jf(e))}`,`lucide-${e}`,r),...i}));return n.displayName=jf(e),n};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Wu=ee("arrow-left",v2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Hg=ee("arrow-right",x2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],k2=ee("bell",w2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],T2=ee("calendar-days",S2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],E2=ee("calendar",j2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],C2=ee("circle-check-big",b2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=[["path",{d:"M12 6v6h4",key:"135r8i"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],D2=ee("clock-3",P2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],_2=ee("code",N2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],M2=ee("facebook",A2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],$g=ee("instagram",R2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],L2=ee("linkedin",z2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Yg=ee("mail",V2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],F2=ee("map-pin",I2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],U2=ee("menu",O2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],Kg=ee("mic",B2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]],H2=ee("music-2",W2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],Y2=ee("panels-top-left",$2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]],Gg=ee("ticket",K2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],Qg=ee("twitter",G2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Fo=ee("users",Q2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],q2=ee("x",X2),Xg="/assets/logo_red-Cuc5EyMY.png",qg="tedxwushs-language",qs="ja",Jg=new Set(["ja","en"]),J2={ja:{description:"TEDxWUSHS Youthは、早稲田大学高等学院の生徒が独立して企画・運営する、日本語と英語のバイリンガルTEDxイベントです。Ideas change everything.",locale:"ja_JP"},en:{description:"TEDxWUSHS Youth is an independently organized, bilingual Japanese-English TEDx event led by students of Waseda University Senior High School. Ideas change everything.",locale:"en_US"}},Zg=w.createContext(void 0),Z2=()=>{if(typeof window>"u")return qs;try{const e=window.localStorage.getItem(qg);return Jg.has(e)?e:qs}catch{return qs}},Bi=(e,t)=>{const n=document.querySelector(e);n&&n.setAttribute("content",t)},eT=({children:e})=>{const[t,n]=w.useState(Z2),r=w.useCallback(o=>{Jg.has(o)&&n(o)},[]);w.useEffect(()=>{document.documentElement.lang=t;try{window.localStorage.setItem(qg,t)}catch{}const o=J2[t];Bi('meta[name="description"]',o.description),Bi('meta[property="og:description"]',o.description),Bi('meta[property="og:locale"]',o.locale),Bi('meta[property="twitter:description"]',o.description)},[t]);const i=w.useMemo(()=>({language:t,setLanguage:r}),[t,r]);return u.jsx(Zg.Provider,{value:i,children:e})},xe=()=>{const e=w.useContext(Zg);if(!e)throw new Error("useLanguage must be used within a LanguageProvider.");return e},tT={ja:{group:"表示言語",ja:"日本語で表示",en:"英語で表示"},en:{group:"Display language",ja:"Show in Japanese",en:"Show in English"}},nT=()=>{const{language:e,setLanguage:t}=xe(),n=tT[e],r=()=>t(e==="ja"?"en":"ja"),i=e==="ja"?"現在は日本語です。英語に切り替える":"Currently displayed in English. Switch to Japanese";return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"language-switcher language-switcher--desktop",role:"group","aria-label":n.group,children:[u.jsx("button",{type:"button",className:`language-option ${e==="ja"?"active":""}`,"aria-label":n.ja,"aria-pressed":e==="ja",onClick:()=>t("ja"),children:"JA"}),u.jsx("span",{className:"language-divider","aria-hidden":"true",children:"/"}),u.jsx("button",{type:"button",className:`language-option ${e==="en"?"active":""}`,"aria-label":n.en,"aria-pressed":e==="en",onClick:()=>t("en"),children:"EN"})]}),u.jsxs("button",{type:"button",className:"language-toggle-mobile","aria-label":i,onClick:r,children:[u.jsx("span",{className:`language-toggle-code ${e==="ja"?"active":""}`,"aria-hidden":"true",children:"JA"}),u.jsx("span",{className:"language-toggle-divider","aria-hidden":"true",children:"/"}),u.jsx("span",{className:`language-toggle-code ${e==="en"?"active":""}`,"aria-hidden":"true",children:"EN"})]}),u.jsx("style",{children:`
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
      `})]})},rT=()=>{const[e,t]=w.useState(!1),[n,r]=w.useState(!1),i=ir(),{language:o}=xe(),s=rt(),a=w.useRef(null),l=w.useRef(null),c=w.useRef(null),d=w.useRef(null),f=w.useRef(!1),h=w.useRef(!1);w.useEffect(()=>{const p=()=>{t(window.scrollY>50)};return window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)},[]);const y=[{name:"Home",href:"/"},{name:"About",href:"/about"},{name:"Speakers",href:"/speakers"},{name:"Organizers",href:"/organizers"},{name:"Join Us",href:"/join-us"},{name:"FAQ",href:"/faq"}],v=p=>p==="/"?i.pathname==="/":i.pathname===p||i.pathname.startsWith(`${p}/`);w.useEffect(()=>{f.current=!1,r(!1)},[i.pathname]),w.useEffect(()=>{var p,m;if(n){const g=window.requestAnimationFrame(()=>{var k;(k=d.current)==null||k.focus()});return()=>window.cancelAnimationFrame(g)}h.current?(h.current=!1,(p=l.current??a.current)==null||p.focus()):f.current&&(f.current=!1,(m=c.current)==null||m.focus())},[n]),w.useEffect(()=>{const p=window.matchMedia("(min-width: 901px)"),m=g=>{if(!g.matches||!n)return;const k=document.getElementById("mobile-navigation"),T=document.activeElement;h.current=(k==null?void 0:k.contains(T))||c.current===T,f.current=!1,r(!1)};return m(p),p.addEventListener("change",m),()=>p.removeEventListener("change",m)},[n]),w.useEffect(()=>{if(!n)return;const p=m=>{m.key==="Escape"&&(f.current=!0,r(!1))};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[n]);const x=()=>{n&&(f.current=!0),r(p=>!p)},S=p=>{f.current=i.pathname===p,r(!1)};return u.jsxs(u.Fragment,{children:[u.jsx("a",{href:"#main-content",className:"skip-link",children:o==="ja"?"本文へ移動":"Skip to main content"}),u.jsxs("header",{className:`header ${e?"scrolled":""}`,children:[u.jsxs("div",{className:"container header-content",children:[u.jsx(ke,{ref:a,to:"/",className:"logo-container",children:u.jsx("img",{src:Xg,alt:"TEDxWUSHS Youth",className:"header-logo"})}),u.jsxs("div",{className:"header-actions",children:[u.jsx("nav",{className:"desktop-nav","aria-label":o==="ja"?"メインナビゲーション":"Primary navigation",children:u.jsx("ul",{lang:"en",children:y.map(p=>u.jsx("li",{children:u.jsx(ke,{to:p.href,ref:v(p.href)?l:void 0,className:v(p.href)?"active":"","aria-current":i.pathname===p.href?"page":void 0,children:p.name})},p.name))})}),u.jsx("button",{type:"button",ref:c,className:"mobile-menu-btn","aria-label":n?o==="ja"?"メニューを閉じる":"Close menu":o==="ja"?"メニューを開く":"Open menu","aria-expanded":n,"aria-controls":"mobile-navigation",onClick:x,children:n?u.jsx(q2,{size:28,"aria-hidden":"true"}):u.jsx(U2,{size:28,"aria-hidden":"true"})}),u.jsx(nT,{})]})]}),u.jsx(Ng,{children:n&&u.jsx(Z.nav,{id:"mobile-navigation",className:"mobile-menu","aria-label":o==="ja"?"モバイルナビゲーション":"Mobile navigation",initial:s?!1:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:s?{opacity:1,y:0}:{opacity:0,y:-20},transition:s?{duration:0}:{duration:.2},children:u.jsx("ul",{lang:"en",children:y.map((p,m)=>u.jsx("li",{children:u.jsx(ke,{to:p.href,ref:m===0?d:void 0,onClick:()=>S(p.href),className:v(p.href)?"active-mobile":"","aria-current":i.pathname===p.href?"page":void 0,children:p.name})},p.name))})})}),u.jsx("style",{children:`
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
          overflow-x: hidden;
          transition: var(--transition-smooth);
          will-change: background, padding;
        }

        @supports (overflow-x: clip) {
          .header {
            overflow-x: clip;
          }
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
          max-height: calc(100dvh - 92px);
          padding: 1rem 2rem 2rem;
          border-bottom: 1px solid var(--ted-red);
          overflow-x: hidden;
          overflow-y: auto;
          overscroll-behavior: contain;
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
      `})]})]})},iT=()=>{const e=new Date().getFullYear();return u.jsxs("footer",{id:"footer",className:"footer",lang:"en",children:[u.jsxs("div",{className:"container footer-content",children:[u.jsxs("div",{className:"footer-top",children:[u.jsxs("div",{className:"footer-brand",children:[u.jsx(ke,{className:"footer-brand-link",to:"/",children:u.jsx("img",{src:Xg,alt:"TEDxWUSHS Youth",className:"footer-logo"})}),u.jsx("p",{className:"footer-tagline",children:"This independent TEDx event is operated under license from TED."})]}),u.jsxs("nav",{className:"footer-links","aria-labelledby":"footer-quick-links-heading",children:[u.jsx("h4",{id:"footer-quick-links-heading",children:"Quick Links"}),u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx(ke,{to:"/about",children:"About Us"})}),u.jsx("li",{children:u.jsx(ke,{to:"/speakers",children:"Speakers"})}),u.jsx("li",{children:u.jsx(ke,{to:"/organizers",children:"Organizers"})}),u.jsx("li",{children:u.jsx("a",{href:"https://www.waseda.jp/school/shs/",target:"_blank",rel:"noopener noreferrer",children:"Waseda SHS"})}),u.jsx("li",{children:u.jsx("a",{href:"https://www.ted.com/about/programs-initiatives/tedx-program",target:"_blank",rel:"noopener noreferrer",children:"TEDx Program"})})]})]}),u.jsxs("div",{className:"footer-social",children:[u.jsx("h4",{children:"Connect"}),u.jsxs("div",{className:"social-icons",children:[u.jsx("a",{href:"https://www.instagram.com/tedxwushs/",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:u.jsx($g,{size:24,"aria-hidden":"true"})}),u.jsx("a",{href:"https://x.com/TEDxWUSHS",target:"_blank",rel:"noopener noreferrer","aria-label":"X (Twitter)",children:u.jsx(Qg,{size:24,"aria-hidden":"true"})}),u.jsx("a",{href:"mailto:tedxwushs@gmail.com","aria-label":"Email",children:u.jsx(Yg,{size:24,"aria-hidden":"true"})})]}),u.jsx("p",{className:"footer-handle",children:"@TEDxWUSHS"}),u.jsx("a",{className:"footer-email",href:"mailto:tedxwushs@gmail.com",children:"tedxwushs@gmail.com"})]})]}),u.jsx("div",{className:"footer-bottom",children:u.jsxs("p",{children:["© ",e," TEDxWUSHS Youth. All Rights Reserved."]})})]}),u.jsx("style",{children:`
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
      `})]})},oT="/assets/poster-DnR2-vAa.png",sT={ja:{description:"早稲田大学高等学院の生徒が独立して企画・運営するTEDxイベント。アイデアには、すべてを変える力がある。その可能性を高等学院から。",eventLabel:"開催情報",date:"2026年10月31日（土）",reception:"受付開始 13:30",venue:"早稲田大学高等学院 講堂",posterAlt:"TEDxWUSHS Youth「Ideas change everything.」イベントポスター"},en:{description:"TEDxWUSHS Youth is an independently organized TEDx event led by students at Waseda University Senior High School. From our school, we explore the power of ideas to change everything.",eventLabel:"Event details",date:"Saturday, October 31, 2026",reception:"Doors open 1:30 PM",venue:"Waseda University Senior High School Auditorium",posterAlt:"TEDxWUSHS Youth event poster: Ideas change everything."}},aT=()=>{const{language:e}=xe(),t=rt(),n=sT[e];return u.jsxs("section",{className:"hero",children:[u.jsxs("div",{className:"container hero-container",children:[u.jsxs(Z.div,{className:"hero-content",initial:t?!1:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:t?0:.8},children:[u.jsx(Z.span,{className:"hero-tagline",lang:"en",initial:t?!1:{opacity:0},animate:{opacity:1},transition:t?{duration:0}:{delay:.5},children:"TEDxWUSHS Youth · Waseda University Senior High School"}),u.jsxs("h1",{className:"hero-title",lang:"en",children:["Ideas change ",u.jsx("br",{})," ",u.jsx("span",{className:"highlight-red",children:"everything."})]}),u.jsx("p",{className:"hero-description",children:n.description}),u.jsxs("div",{className:"hero-event-details",role:"group","aria-label":n.eventLabel,children:[u.jsxs("div",{className:"hero-event-detail",children:[u.jsx(T2,{size:22,"aria-hidden":"true"}),u.jsxs("div",{children:[u.jsx("span",{lang:"en",children:"Date"}),u.jsx("time",{dateTime:"2026-10-31",children:u.jsx("strong",{children:n.date})})]})]}),u.jsxs("div",{className:"hero-event-detail",children:[u.jsx(D2,{size:22,"aria-hidden":"true"}),u.jsxs("div",{children:[u.jsx("span",{lang:"en",children:"Time"}),u.jsx("strong",{children:"14:00～18:00"}),u.jsx("small",{children:n.reception})]})]}),u.jsxs("div",{className:"hero-event-detail",children:[u.jsx(F2,{size:22,"aria-hidden":"true"}),u.jsxs("div",{children:[u.jsx("span",{lang:"en",children:"Venue"}),u.jsx("strong",{children:n.venue})]})]})]}),u.jsxs("div",{className:"hero-cta",children:[u.jsx(ke,{to:"/about",className:"btn btn-primary",lang:"en",children:"Discover More"}),u.jsx(ke,{to:"/join-us",className:"btn btn-outline",lang:"en",children:"Join Us"})]})]}),u.jsx(Z.div,{className:"hero-visual",initial:t?!1:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:t?0:1,ease:"easeOut"},children:u.jsxs("div",{className:"poster-container",children:[u.jsx("img",{src:oT,alt:n.posterAlt,className:"hero-poster"}),u.jsx("div",{className:"poster-glow","aria-hidden":"true"})]})})]}),u.jsx("style",{children:`
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
      `})]})},lT={ja:{whatIsTedxTitle:"TEDxとは？",whatIsTedx:"アイデアを発見し広める精神のもと、TEDはTEDxというプログラムを創設しました。TEDxは、地域で自主的に運営されるイベントを通じて、人々がTEDのような体験を共有するためのプログラムです。私たちのイベントはTEDxWUSHS Youthといい、xは「independently organized TED event（独立して運営されるTEDイベント）」を表します。TEDxWUSHS Youthでは、TED Talksの映像とライブスピーカーが組み合わさり、少人数の中で深い議論とつながりを生み出します。スピーカーがTEDxイベントへの参加費を支払うことはありません。選考、スピーカーコーチング、イベントへの出演および来場はすべて無料です。TED ConferenceはTEDxプログラムに一般的な指針を提供しますが、TEDxWUSHS Youthを含む各TEDxイベントは自主的に運営されています。",programLink:"TEDxプログラムについて詳しく見る",localDescription:"TEDxWUSHS Youthは、早稲田大学高等学院の生徒が独立して企画・運営するTEDxイベントです。若者ならではの視点とパッションを武器に、高校生という枠を超えた、社会に響くメッセージを発信します。私たちは、対話を通じて互いの可能性を広げ、新しい一歩を踏み出すきっかけを作ります。",venue:"早稲田大学高等学院 講堂",theme:["人生は予測不能なショットの連続である。しかし、自分の軌道を決めるのは運ではない。","工夫と情熱を込めたその一打が、閉ざされた未来を「無限の可能性」へと変える。決断を恐れず、life-changingな最高のBreakshotを放て。","今回は七人のスピーカーに、人生の「軌道」を変えたBreakshotについて語ってもらいます。オーディエンスの皆さんの人生を変える機会となることを願っています。"]},en:{whatIsTedxTitle:"What is TEDx?",whatIsTedx:"In the spirit of discovering and spreading ideas, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxWUSHS Youth, where x = independently organized TED event. At TEDxWUSHS Youth, TED Talks video and live speakers combine to spark deep discussion and connection in a small group. Speakers never pay to join a TEDx event. Speaker consideration, coaching, event participation and attendance are all provided free of charge. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.",programLink:"Learn more about the TEDx program",localDescription:"TEDxWUSHS Youth is an independently organized TEDx event conceived and produced by students at Waseda University Senior High School. Drawing on the perspectives and passion unique to young people, we share messages that reach beyond the boundaries of high school. Through dialogue, we aim to expand one another’s possibilities and inspire a first step toward change.",venue:"Waseda University Senior High School Auditorium",theme:["Life is a succession of unpredictable shots. Yet luck does not determine our trajectory.","A single shot shaped by ingenuity and passion can turn a closed future into infinite possibility. Do not fear the decision—take the life-changing Breakshot.","Seven speakers will share the Breakshots that changed the course of their lives. We hope their ideas become an opportunity to change yours."]}},uT=()=>{const{language:e}=xe(),t=rt(),n=lT[e];return u.jsxs("section",{id:"about",className:"about section-padding",children:[u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"about-grid",children:[u.jsxs(Z.div,{className:"about-item",initial:t?!1:{opacity:0,y:30},whileInView:t?void 0:{opacity:1,y:0},viewport:{once:!0},transition:{duration:t?0:.6},children:[u.jsx("h2",{className:"section-title",children:n.whatIsTedxTitle}),u.jsx("p",{className:"tedx-description",children:n.whatIsTedx}),u.jsxs("a",{href:"https://www.ted.com/about/programs-initiatives/tedx-program",target:"_blank",rel:"noopener noreferrer",className:"highlight-link program-link",children:[n.programLink," ↗"]})]}),u.jsxs(Z.div,{className:"about-item",initial:t?!1:{opacity:0,y:30},whileInView:t?void 0:{opacity:1,y:0},viewport:{once:!0},transition:t?{duration:0}:{duration:.6,delay:.2},children:[u.jsxs("h2",{className:"section-title",children:["TEDx",u.jsx("span",{className:"highlight-red",children:"WUSHS Youth"})]}),u.jsx("p",{children:n.localDescription}),u.jsxs("p",{className:"event-info",children:[u.jsx("strong",{lang:"en",children:"Date:"})," ",u.jsx("span",{lang:"en",children:"October 31, 2026 (14:00 - 18:00 / Reception 13:30)"}),u.jsx("br",{}),u.jsx("strong",{lang:"en",children:"Venue:"})," ",u.jsx("a",{href:"https://www.waseda.jp/school/shs/",target:"_blank",rel:"noopener noreferrer",className:"highlight-link",children:n.venue}),", ",u.jsx("span",{lang:"en",children:"Nerima, Tokyo"}),u.jsx("br",{}),u.jsx("strong",{lang:"en",children:"Theme:"})," ",u.jsx("span",{lang:"en",children:"Breakshot"})]})]})]}),u.jsxs(Z.div,{className:"mission-box",initial:t?!1:{opacity:0,scale:.95},whileInView:t?void 0:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:t?0:.8},children:[u.jsx("h3",{lang:"en",children:"Theme"}),u.jsx("p",{className:"mission-text",lang:"en",children:"Breakshot"}),u.jsx("div",{className:"mission-description",children:n.theme.map(r=>u.jsx("p",{children:r},r))})]})]}),u.jsx("style",{children:`
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
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          position: relative;
          z-index: 1;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 2rem;
        }

        .about-item p {
          font-size: 1.1rem;
          color: #ccc;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .tedx-description {
          font-size: 1rem !important;
          color: #aaa !important;
        }

        .about .highlight-link {
          color: var(--ted-red);
          font-size: 1.2rem;
          font-weight: 700;
          text-decoration: underline;
        }

        .program-link {
          display: inline-block;
          margin-top: -0.5rem;
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

        .mission-box {
          margin-top: 6rem;
          padding: 4rem;
          background: var(--ted-red);
          text-align: center;
          border-radius: 20px;
          position: relative;
          z-index: 1;
        }

        .mission-box h3 {
          font-size: 1.2rem;
          letter-spacing: 0.3em;
          margin-bottom: 1.5rem;
          color: var(--ted-white);
        }

        .mission-text {
          font-size: 2.5rem;
          font-weight: 800;
          font-family: var(--font-heading);
          margin-bottom: 2rem;
        }

        .mission-description {
          max-width: 850px;
          margin: 0 auto;
        }

        .mission-description p {
          margin-bottom: 1.2rem;
          color: var(--ted-white);
          font-size: 1.05rem;
          line-height: 2;
        }

        .mission-description p:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .mission-text {
            font-size: 1.8rem;
          }
          .mission-box {
            padding: 2.5rem;
          }
        }

        @media (max-width: 480px) {
          .about .section-title {
            font-size: clamp(1.75rem, 9vw, 2.1rem);
            line-height: 1.15;
          }

          .event-info {
            padding: 1.25rem 1rem;
          }

          .mission-box {
            padding: 2rem 1.25rem;
          }
        }
      `})]})},cT="/assets/enomoto-takayuki-DNGDHC06.jpg",dT="/assets/hasegawa-keisuke-DYSgj9AY.jpg",fT="/assets/horise-yoshito-BMWy-myU.jpg",hT="/assets/kuroki-yuto-H_vlZVz7.jpg",pT="/assets/takezawa-mamoru-CgZku-6Z.jpg",mT=[{id:"enomoto-takayuki",displayOrder:10,published:!0,featured:!0,image:cT,imagePosition:"50% 42%",name:{ja:"榎本 隆之",en:"Takayuki Enomoto"},role:{ja:"早稲田大学高等学院 国語科教員",en:"Japanese Language Educator, Waseda University Senior High School"},shortBio:{ja:"国語科指導、国際交流・芸術プログラムを通して、グローバルな文脈に造詣のある高校生の育成を目指している。",en:"A Japanese language educator with experience in textbook editing, international exchange initiatives, and comparative teacher education."},bio:{ja:["1964年生まれ。中高国語科教員。早稲田大学、コロラド州立大学などを経て、現在は早稲田大学高等学院所属。国語科指導をはじめ各種国際交流プログラムや芸術プログラムを通じて、グローバルな文脈に造詣のあるスーパー高校生を育成することを目指している。","高等学校国語科検定教科書の編集に長く携わり、教員養成の比較教育に関心がある。"],en:["An accomplished junior and senior high school Japanese language literacy educator with academic and professional backgrounds at Waseda University and Colorado State University. He currently serves on the faculty at Waseda University Senior High School.","He is dedicated to nurturing exceptional, globally minded high school students through comprehensive Japanese language instruction, international exchange initiatives, and music programs. He brings extensive experience in editing government-approved high school textbooks of Japanese language and literature, complemented by a strong research interest in comparative education in teacher education programs."]}},{id:"hasegawa-keisuke",displayOrder:20,published:!0,featured:!0,image:dT,imagePosition:"50% 42%",name:{ja:"長谷川 慶佑",en:"Keisuke Hasegawa"},role:{ja:"TEDxWUSHS Youth Speaker",en:"TEDxWUSHS Youth Speaker"},shortBio:{ja:"中学時代に「ビオトープ管理委員会」を立ち上げ、環境保全活動を牽引。環境・文芸の両分野で多数の受賞実績を持つ。",en:"Founder of a school Biotope Management Committee, with numerous awards in environmental conservation and literature."},bio:{ja:["2010年福島県生まれ。中学時代に校内組織「ビオトープ管理委員会」を自ら立ち上げ、環境保全活動を牽引。「全国学校・園庭ビオトープコンクール2023文部科学大臣賞」や「第59回全国野生生物保護活動発表大会環境大臣賞」を受賞する。","さらに「令和6年度道路ふれあい月間推進標語最優秀賞（国土交通大臣表彰）」、「第44回福島県川柳賞青少年奨励賞」など、環境・文芸の両分野で多数の受賞実績を持つ。"],en:["Born in Fukushima Prefecture in 2010, he has won numerous literary contests, including the 2024 Road Fureai Month Promotion Slogan Grand Prize, the 44th Fukushima Prefecture Senryu Award Youth Encouragement Prize, and the “Thinking Together: Fukushima, Towards the Environment Beyond” Challenge Award 2023.","The Biotope Management Committee activity he initiated at school during junior high received the 2023 National School/Garden Biotope Contest Minister of Education, Culture, Sports, Science and Technology Award and the 59th National Wildlife Protection Activity Presentation Competition Minister of the Environment Award. In his talk, he will share insights drawn from experiences related to the Fukushima Daiichi Nuclear Power Plant accident and his activities to date."]}},{id:"horise-yoshito",displayOrder:30,published:!0,featured:!0,image:fT,imagePosition:"50% 45%",name:{ja:"堀瀬 善仁",en:"Yoshito Horise"},role:{ja:"TEDxWUSHS Youth Speaker",en:"TEDxWUSHS Youth Speaker"},shortBio:{ja:"早稲田大学高等学院2年。7度の転校と多文化経験を持ち、AI姿勢認識を活用した語学ツール「KATA」を開発。",en:"A sophomore at Waseda University Senior High School with seven school changes and multicultural experience, and the developer of “KATA,” an AI-based language-learning tool."},bio:{ja:["早稲田大学高等学院2年。日本・台湾・香港で7度の転校を経験し、カナダ・オーストラリア・フランス・トロント大学での国際経験を積む。","日本語・中国語を母語とし、英語・フランス語・韓国語を学習中。国際HANAシンポジウム2年連続登壇、AI時代における人間の主体性を研究。","東大AIハッカソン優秀賞受賞。AI姿勢認識を活用した語学ツール「KATA」を開発。","現在は、Stanford e-Japanに挑戦し、国際分野での活動を目指す。"],en:["A sophomore at Waseda University Senior High School. He has changed schools seven times in Japan, Taiwan, and Hong Kong, and has gained international experience in Canada, Australia, France, and at the University of Toronto.","Japanese and Chinese are his native languages, and he is currently studying English, French, and Korean. He has spoken at the International HANA Symposium for two consecutive years and is researching human agency in the age of AI.","He received the Excellence Award at the University of Tokyo AI Hackathon. He developed “KATA,” a language-learning tool that utilizes AI-based posture recognition.","He is currently participating in the Stanford e-Japan program and aims to pursue activities in the international arena."]}},{id:"kuroki-yuto",displayOrder:40,published:!0,featured:!0,image:hT,imagePosition:"50% 44%",name:{ja:"黒木 勇人",en:"Yuto Kuroki"},role:{ja:"早稲田大学 情報理工学科2年",en:"Second-year Computer Science Student, Waseda University"},shortBio:{ja:"ISEF 2025に日本代表として出場し、ドローン配送最適化アルゴリズムの研究で文部科学大臣特別賞を受賞。",en:"Japan representative at ISEF 2025 and recipient of the MEXT Minister’s Special Award for drone-delivery optimization research."},bio:{ja:["早稲田大学情報理工学科2年。国際学生科学技術フェア（ISEF 2025）に日本代表として出場し、ドローン配送最適化アルゴリズムの研究を発表。文部科学大臣特別賞を受賞した。2026年夏には中谷財団の奨学生としてジョージア工科大学でロボット外骨格の深層学習モデルを研究予定。","外国語学習にも力を入れ、TOEIC満点、ケンブリッジ英検C2取得、最難関のドイツ語検定試験Goethe-Zertifikat C2の3技能合格を達成。現在は外国語学習の方法を発信しながら、高校生の研究発表を支援するNPO法人で活動している。高校時代は硬式テニス部に所属。"],en:["A second-year Computer Science student at Waseda University. He represented Japan at ISEF 2025, presenting research on a drone-delivery optimization algorithm, and received the MEXT Minister’s Special Award. In summer 2026, he will conduct research on deep-learning models for robotic exoskeletons at Georgia Institute of Technology as a Nakatani Foundation scholar.","Passionate about language learning, he has achieved a perfect TOEIC score, Cambridge C2 Proficiency, and passed three Goethe-Zertifikat C2 modules. He currently shares language-learning methods and works with an NPO supporting high school students in presenting their research. In high school, he was on the tennis team."]}},{id:"takezawa-mamoru",displayOrder:50,published:!0,featured:!0,image:pT,imagePosition:"42% 50%",name:{ja:"武沢 護",en:"Mamoru Takezawa"},role:{ja:"元早稲田大学高等学院学院長",en:"Former Headmaster of Waseda University Senior High School"},shortBio:{ja:"長年、早稲田大学高等学院で数学と情報を教え、最後の4年間は学院長を務めた。",en:"A longtime mathematics and computer science educator who served as Headmaster of Waseda University Senior High School for four years."},bio:{ja:["元早稲田大学高等学院学院長。長く早稲田大学高等学院の教員を務め、数学と情報を教えていました。そして最後の4年間は学院長でした。"],en:["He taught mathematics and computer science at Waseda University Senior High School for many years and served as Headmaster for his final four years."]},talkDescription:{ja:"これらの教育経験に基づき、TEDxWUSHS Youthのテーマ「Breakshot」に沿って、AI・デジタル時代の予測不可能な未来に向けて、私たちが身につけるべき資質と能力について議論する予定です。",en:"Drawing on these educational experiences and the TEDxWUSHS Youth theme “Breakshot,” he will discuss the essential qualities and capabilities we must cultivate to thrive in the unpredictable AI and digital era. When rapid technological shifts disrupt our established foundations, what critical choices must we make? Let’s explore together how to navigate this uncertain future."}}],gT=({speaker:e,language:t,variant:n,index:r})=>{var y;const i=rt(),o=n==="detail",s=o?"h2":"h3",a=e.name[t]??e.name.ja,l=e.role[t]??e.role.ja,c=e.shortBio[t]??e.shortBio.ja,d=e.bio[t]??e.bio.ja,f=(y=e.talkDescription)==null?void 0:y[t],h=t==="en"?`Portrait of ${a}`:`${a}のプロフィール写真`;return u.jsxs(Z.article,{className:`speaker-card speaker-card--${n}${o&&r%2===1?" speaker-card--reversed":""}`,style:{"--speaker-image-position":e.imagePosition},initial:i?!1:{opacity:0,y:28},whileInView:i?void 0:{opacity:1,y:0},viewport:{once:!0,amount:.15},transition:i?{duration:0}:{duration:.55,delay:o?0:Math.min(r*.07,.28)},children:[u.jsx("div",{className:"speaker-card__image-frame",children:u.jsx("img",{src:e.image,alt:h,className:"speaker-card__image",loading:o&&r===0?"eager":"lazy",decoding:"async"})}),u.jsxs("div",{className:"speaker-card__content",children:[u.jsx("p",{className:"speaker-card__role",children:l}),u.jsx(s,{className:"speaker-card__name",children:a}),o?u.jsxs("div",{className:"speaker-card__bio",children:[d.map((v,x)=>u.jsx("p",{children:v},`${e.id}-bio-${x}`)),f&&u.jsx("p",{children:f})]}):u.jsx("p",{className:"speaker-card__summary",children:c})]})]})},Ef={ja:{previewSubtitle:"多様な経験と専門性を持つスピーカーたちが、それぞれのBreakshotから生まれたアイデアを共有します。",fullSubtitle:"TEDxWUSHS Youth 2026に登壇するスピーカーと、その背景にある経験やアイデアをご紹介します。",empty:"スピーカー情報は近日公開予定です。",comingSoonLabel:"追加情報",comingSoonBody:"スピーカーや講演内容に関する追加情報を、今後このページでお知らせします。"},en:{previewSubtitle:"Speakers with diverse experiences and expertise share ideas shaped by their own Breakshots.",fullSubtitle:"Meet the TEDxWUSHS Youth 2026 speakers and discover the experiences and ideas behind their talks.",empty:"Speaker information will be announced soon.",comingSoonLabel:"More to come",comingSoonBody:"More speaker and talk information will be announced on this page."}},ey=({variant:e="preview"})=>{const{language:t}=xe(),n=rt(),r=Ef[t]??Ef.ja,i=e==="full",o=i?"h1":"h2",s=[...mT].filter(a=>a.published&&(i||a.featured)).sort((a,l)=>a.displayOrder-l.displayOrder);return u.jsxs("section",{id:"speakers",className:`speakers-section speakers-section--${e} section-padding`,"aria-labelledby":"speakers-heading",children:[u.jsxs("div",{className:"container speakers-section__container",children:[u.jsxs(Z.header,{className:"speakers-section__header",initial:n?!1:{opacity:0,y:20},whileInView:n?void 0:{opacity:1,y:0},viewport:{once:!0},transition:{duration:n?0:.6},children:[u.jsx("span",{className:"speakers-section__eyebrow",lang:"en",children:i?"The 2026 Speaker Lineup":"Ideas in Motion"}),u.jsxs(o,{id:"speakers-heading",className:"speakers-section__title",lang:"en",children:[i?"Our ":"Featured ",u.jsx("span",{children:"Speakers"})]}),u.jsx("p",{className:"speakers-section__subtitle",children:i?r.fullSubtitle:r.previewSubtitle})]}),s.length>0?u.jsx("div",{className:i?"speakers-section__list":"speakers-section__grid",children:s.map((a,l)=>u.jsx(gT,{speaker:a,language:t,variant:i?"detail":"preview",index:l},a.id))}):u.jsx("p",{className:"speakers-section__empty",children:r.empty}),i&&s.length>0&&u.jsxs("section",{className:"speakers-section__coming-soon","aria-labelledby":"speakers-coming-soon-heading",children:[u.jsx("span",{className:"speakers-section__coming-soon-mark","aria-hidden":"true",children:"+"}),u.jsxs("div",{children:[u.jsx("p",{className:"speakers-section__coming-soon-label",children:r.comingSoonLabel}),u.jsx("h2",{id:"speakers-coming-soon-heading",className:"speakers-section__coming-soon-title",lang:"en",children:"Coming Soon"}),u.jsx("p",{className:"speakers-section__coming-soon-body",children:r.comingSoonBody})]})]}),!i&&s.length>0&&u.jsx("div",{className:"speakers-section__cta-wrap",children:u.jsxs(ke,{to:"/speakers",className:"speakers-section__cta",lang:"en",children:["More Details",u.jsx(Hg,{size:18,"aria-hidden":"true"})]})})]}),u.jsx("style",{children:`
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
      `})]})},yT=[{time:"14:00",event:"Doors Open",description:{ja:"開場",en:"Audience entry begins"}},{time:"14:30",event:"Opening",description:{ja:"開会・オープニング",en:"Opening remarks"}},{time:"14:40",event:"Talk Section 1",description:{ja:"トークセクション1",en:"First talk session"}},{time:"14:45–15:00",event:"Talk 1",description:{ja:"トーク1",en:"First talk"}},{time:"15:00–15:15",event:"Talk 2",description:{ja:"トーク2",en:"Second talk"}},{time:"15:15–15:30",event:"Talk 3",description:{ja:"トーク3",en:"Third talk"}},{time:"15:30–15:50",event:"Break",description:{ja:"休憩",en:"Intermission"}},{time:"15:50",event:"Talk Section 2",description:{ja:"トークセクション2",en:"Second talk session"}},{time:"16:00–16:10",event:"Talk 4",description:{ja:"トーク4",en:"Fourth talk"}},{time:"16:15–16:25",event:"Talk 5",description:{ja:"トーク5",en:"Fifth talk"}},{time:"16:30–16:45",event:"Talk 6",description:{ja:"トーク6",en:"Sixth talk"}},{time:"16:45–17:00",event:"Talk 7",description:{ja:"トーク7",en:"Seventh talk"}},{time:"17:00",event:"Closing",description:{ja:"閉会",en:"Closing remarks"}},{time:"17:20–17:50",event:"Workshop & Networking",description:{ja:"Workshop・交流会",en:"Workshop and networking"}},{time:"18:00頃",timeEn:"Around 18:00",event:"Event Ends",description:{ja:"終了",en:"Program concludes"}}],vT=()=>{const{language:e}=xe(),t=rt(),n=e==="en"?"Scheduled for Saturday, October 31, 2026, from 14:00 to 18:00. Times are subject to change.":"2026年10月31日（土）14:00〜18:00 開催予定。時間は前後する可能性があります。";return u.jsxs("section",{id:"schedule",className:"schedule section-padding",children:[u.jsxs("div",{className:"container",children:[u.jsxs(Z.div,{className:"section-header",initial:t?!1:{opacity:0,y:20},whileInView:t?void 0:{opacity:1,y:0},viewport:{once:!0},children:[u.jsxs("h2",{className:"section-title",lang:"en",children:["Event ",u.jsx("span",{className:"highlight-red",children:"Schedule"})]}),u.jsx("p",{className:"section-subtitle",children:n})]}),u.jsx("ol",{className:"timeline",children:yT.map((r,i)=>u.jsxs(Z.li,{className:"timeline-item",initial:t?!1:{opacity:0,y:20},whileInView:t?void 0:{opacity:1,y:0},viewport:{once:!0},transition:t?{duration:0}:{delay:i*.1},children:[u.jsx("time",{className:"time",children:e==="en"&&r.timeEn?r.timeEn:r.time}),u.jsxs("div",{className:"event-content",children:[u.jsx("h3",{lang:"en",children:r.event}),u.jsx("p",{children:r.description[e]})]})]},`${r.time}-${r.event}`))})]}),u.jsx("style",{children:`
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
      `})]})},xT={ja:{sectionSubtitle:"TEDxWUSHS Youthへの参加方法と最新情報をご案内します。",optionsHeading:"参加方法と最新情報",applicationsUpdate:"2026年開催分のスピーカー募集及び運営チーム募集は終了しました。たくさんのご応募ありがとうございました。",teamDescription:"2026年開催分の運営チーム募集は終了しました。今後の募集はウェブサイトとSNSでお知らせします。",teamAction:"募集状況を見る",audienceDescription:"対象は早稲田大学高等学院の生徒及びその保護者です。参加申込みは2026年9月開始予定です。",audienceAction:"対象・申込情報を見る",subscribed:u.jsxs(u.Fragment,{children:["登録完了しました",u.jsx("br",{}),"イベントの最新情報をお届けしますのでお楽しみに。"]}),newsletter:"イベントの最新情報や募集のお知らせをメールでお届けします。",emailLabel:"メールアドレス",emailPlaceholder:"メールアドレスを入力",subscribeAction:"登録する",contactTitle:"お問い合わせ",contactDescription:"参加方法や当日の運営についてのご質問は、イベント事務局までご連絡ください。"},en:{sectionSubtitle:"Explore ways to take part in TEDxWUSHS Youth and receive the latest event updates.",optionsHeading:"Ways to Participate and Stay Updated",applicationsUpdate:"Speaker and organizing team applications for the 2026 event are now closed. Thank you to everyone who applied.",teamDescription:"Recruitment for the 2026 organizing team has closed. Future opportunities will be announced on our website and social media.",teamAction:"View Recruitment Status",audienceDescription:"Audience registration is open to students of Waseda University Senior High School and their parents or guardians. Registration is scheduled to begin in September 2026.",audienceAction:"View Eligibility & Registration",subscribed:u.jsxs(u.Fragment,{children:["You are subscribed.",u.jsx("br",{}),"We look forward to sharing the latest event updates with you."]}),newsletter:"Receive event updates and future application announcements by email.",emailLabel:"Email address",emailPlaceholder:"Enter your email address",subscribeAction:"Subscribe",contactTitle:"Contact Us",contactDescription:"For questions about attending the event or event-day operations, please contact the TEDxWUSHS Youth team."}},ty=({hideHeader:e=!1})=>{const[t,n]=w.useState(!1),r=w.useRef(null),i=w.useRef(null),o=rt(),{language:s}=xe(),a=xT[s];w.useEffect(()=>{var d;t&&((d=r.current)==null||d.focus())},[t]),w.useEffect(()=>()=>{i.current&&clearTimeout(i.current)},[]);const l=()=>{i.current&&clearTimeout(i.current),i.current=setTimeout(()=>n(!0),300)},c=[{title:"Join the Team",icon:u.jsx(Fo,{size:32,"aria-hidden":"true",focusable:"false"}),description:a.teamDescription,link:"/join-us/team",action:a.teamAction,status:"Recruitment Closed",closed:!0,color:"#fff"},{title:"Register as Audience",icon:u.jsx(Gg,{size:32,"aria-hidden":"true",focusable:"false"}),description:a.audienceDescription,link:"/join-us/audience",action:a.audienceAction,color:"#fff"}];return u.jsxs("section",{id:"contact",className:"join-us section-padding",children:[u.jsxs("div",{className:"container",children:[e?u.jsx("h2",{className:"visually-hidden",children:a.optionsHeading}):u.jsxs(Z.div,{className:"section-header",initial:o?!1:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[u.jsx("span",{className:"join-tagline",lang:"en",children:"Be part of the community"}),u.jsxs("h2",{className:"section-title",lang:"en",children:["Join ",u.jsx("span",{className:"highlight-red",children:"Us"})]}),u.jsx("p",{className:"section-subtitle",children:a.sectionSubtitle})]}),u.jsxs(Z.div,{className:"recruitment-closed",initial:o?!1:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[u.jsx("strong",{lang:"en",children:"2026 Applications Update"}),u.jsx("p",{children:a.applicationsUpdate})]}),u.jsx("div",{className:"opportunities-grid",children:c.map((d,f)=>u.jsxs(Z.div,{className:`opt-card${d.closed?" opt-card--closed":""}`,initial:o?!1:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:o?0:f*.1},children:[u.jsx("div",{className:"opt-icon",children:d.icon}),d.status&&u.jsx("span",{className:"opt-status",lang:"en",children:d.status}),u.jsx("h3",{className:"opt-title",lang:"en",children:d.title}),u.jsx("p",{className:"opt-description",children:d.description}),u.jsxs(ke,{to:d.link,className:"opt-link",children:[d.action," ",u.jsx(Hg,{size:16,"aria-hidden":"true",focusable:"false"})]})]},d.title))}),u.jsx(Z.div,{className:"newsletter-box",initial:o?!1:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},children:u.jsxs("div",{className:"newsletter-content",children:[u.jsx("h3",{lang:"en",children:"Stay Updated"}),u.jsx("iframe",{title:"hidden_iframe",name:"hidden_iframe",id:"hidden_iframe",style:{display:"none"}}),t?u.jsx("div",{ref:r,className:"success-message",role:"status","aria-live":"polite","aria-atomic":"true",tabIndex:-1,children:u.jsx("p",{children:a.subscribed})}):u.jsxs("div",{children:[u.jsx("p",{id:"newsletter-description",children:a.newsletter}),u.jsxs("form",{className:"newsletter-form",action:"https://docs.google.com/forms/d/e/1FAIpQLScvnsbAaQFhyodG3GY4qXmTAj919BFivczNyE9bOt4Z_TxuWw/formResponse",method:"post",target:"hidden_iframe",onSubmit:l,children:[u.jsxs("div",{className:"newsletter-field",children:[u.jsx("label",{htmlFor:"newsletter-email",children:a.emailLabel}),u.jsx("input",{id:"newsletter-email",type:"email",name:"entry.269866944","aria-describedby":"newsletter-description",placeholder:a.emailPlaceholder,autoComplete:"email",inputMode:"email",required:!0})]}),u.jsx("button",{type:"submit",className:"btn-primary",children:a.subscribeAction})]})]})]})}),u.jsxs(Z.div,{className:"contact-box",initial:o?!1:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[u.jsx(Yg,{size:30,"aria-hidden":"true",focusable:"false"}),u.jsxs("div",{children:[u.jsx("span",{lang:"en",children:"Questions about the event?"}),u.jsx("h3",{children:a.contactTitle}),u.jsx("p",{children:a.contactDescription}),u.jsx("a",{href:"mailto:tedxwushs@gmail.com",children:"tedxwushs@gmail.com"})]})]})]}),u.jsx("style",{children:`
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
      `})]})},wT=()=>u.jsxs("main",{id:"main-content",tabIndex:-1,children:[u.jsx(aT,{}),u.jsx(uT,{}),u.jsx(ey,{}),u.jsx(vT,{}),u.jsx(ty,{})]}),kT="https://www.ted.com/participate/organize-a-local-tedx-event/tedx-organizer-guide/branding-promotions/your-event-website#h3--about-page",ST="アイデアを発見し広める精神のもと、TEDxは、地域で自主的に運営されるイベントを通じて、人々がTEDのような体験を共有するためのプログラムです。TEDxイベントでは、TED Talksの映像とライブスピーカーが組み合わさり、深い議論とつながりを生み出します。これらの地域で自主運営されるイベントはTEDxと呼ばれ、xは independently organized TED event（独立して運営されるTEDイベント）を表します。TED ConferenceはTEDxプログラムに一般的な指針を提供しますが、各TEDxイベントは自主的に運営されています（所定のルールおよび規定に従います）。",TT="TEDは、対話を生み出し、理解を深め、意義ある変化を促すアイデアを発見し、議論し、広めることに取り組む、非営利・無党派の組織です。TEDは、特定の主張を掲げることなく、好奇心、理性、驚き、そして知識の探究に力を注いでいます。世界をより深く理解し、他者とのつながりを求める、あらゆる分野と文化の人々を歓迎します。そして、誰もがアイデアに触れ、それを自分たちのコミュニティで行動へと移すことを呼びかけています。",jT="TEDは1984年、Technology、Entertainment、Designが交わるカンファレンスとして始まりました。現在では、科学やビジネスから教育、芸術、世界規模の課題までを探究する、多様な世界的コミュニティと取り組みへと広がっています。毎年のカンファレンスで選ばれ、TED.comで公開されるTED Talksに加え、TEDはオリジナルポッドキャスト、短編映像シリーズ、アニメーション形式の教育コンテンツ（TED-Ed）、テレビ番組を制作しています。これらは100以上の言語に翻訳され、世界各地の提携先を通じて配信されています。毎年、数千件のTEDxイベントが独立して運営されています。",ET="Audacious Projectを通じて、TEDは、世界が直面する最も緊急な課題に大胆な解決策を示すプロジェクトへ66億ドルの資金提供が促されることに貢献してきました。より美しく、持続可能で、公正な世界を目指す取り組みです。2020年、TEDは、気候危機の解決を加速し、ネットゼロの未来に向けた運動を広げるCountdownを開始しました。2023年には、より活気があり公平な未来への現実的な道筋に焦点を当て、新しい対話を生み出すTED Democracyを開始しました。",bT=()=>{const{language:e}=xe(),t=e==="ja",n=rt();return u.jsxs("main",{id:"main-content",tabIndex:-1,className:"about-page",children:[u.jsx("div",{className:"container section-padding",children:u.jsxs(Z.div,{initial:n?!1:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:n?0:.8},children:[u.jsxs("section",{className:"about-section",children:[u.jsx("h1",{className:"page-title",children:t?u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"highlight-red",children:"TEDx"}),"について"]}):u.jsxs(u.Fragment,{children:["About ",u.jsx("span",{className:"highlight-red",children:"TEDx"})]})}),u.jsx("h2",{className:"sub-title",children:t?"TEDxについて — x = independently organized event（独立して運営されるイベント）":"TEDx, x = independently organized event"}),u.jsx("p",{children:t?ST:u.jsx(u.Fragment,{children:"In the spirit of discovering and spreading ideas, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)"})}),u.jsxs("p",{className:"official-guide",children:[t?"掲載内容の基準：":"Source for this page: ",u.jsx("a",{href:kT,target:"_blank",rel:"noopener noreferrer",className:"highlight-link",children:t?"TED公式ガイド「Your event website」":"TED official guide: Your event website"})]})]}),u.jsxs("section",{className:"about-section",children:[u.jsx("h2",{className:"section-title",children:t?u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"highlight-red",children:"TED"}),"について"]}):u.jsxs(u.Fragment,{children:["About ",u.jsx("span",{className:"highlight-red",children:"TED"})]})}),u.jsx("p",{children:t?TT:"TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and drive meaningful change. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community."}),t&&u.jsxs(u.Fragment,{children:[u.jsx("p",{children:jT}),u.jsx("p",{children:ET}),u.jsx("p",{children:u.jsx("a",{href:"https://www.ted.com/about/programs-initiatives",target:"_blank",rel:"noopener noreferrer",className:"highlight-link",children:"TEDのプログラムと取り組みの一覧を見る"})})]}),u.jsxs("p",{hidden:t,children:["TED began in 1984 as a conference where Technology, Entertainment and Design converged, but today it spans a multitude of worldwide communities and initiatives exploring everything from science and business to education, arts and global issues. In addition to the TED Talks curated from our annual conferences and published on TED.com, we produce original podcasts, short video series, animated educational lessons (TED-Ed) and TV programs that are translated into more than 100 languages and distributed via partnerships around the world. Each year, thousands of independently run TEDx events. Through the Audacious Project, TED has helped catalyze $6.6 billion in funding for projects that support bold solutions to the world's most urgent challenges — working to make the world more beautiful, sustainable and just. In 2020, TED launched Countdown, an initiative to accelerate solutions to the climate crisis and mobilize a movement for a net-zero future, and in 2023 TED launched TED Democracy to spark a new kind of conversation focused on realistic pathways towards a more vibrant and equitable future. ",u.jsx("a",{href:"https://www.ted.com/about/programs-initiatives",target:"_blank",rel:"noopener noreferrer",className:"highlight-link",children:"View a full list of TED’s many programs and initiatives."})]}),u.jsxs("div",{className:"ted-social",children:[u.jsx("p",{children:t?"TEDの公式アカウント":"Follow TED on:"}),u.jsxs("div",{className:"social-links",children:[u.jsx("a",{href:"https://www.facebook.com/TED",target:"_blank",rel:"noopener noreferrer","aria-label":"TED on Facebook",lang:"en",children:u.jsx(M2,{size:24,"aria-hidden":"true"})}),u.jsx("a",{href:"https://www.instagram.com/ted",target:"_blank",rel:"noopener noreferrer","aria-label":"TED on Instagram",lang:"en",children:u.jsx($g,{size:24,"aria-hidden":"true"})}),u.jsx("a",{href:"https://www.linkedin.com/company/ted-conferences",target:"_blank",rel:"noopener noreferrer","aria-label":"TED on LinkedIn",lang:"en",children:u.jsx(L2,{size:24,"aria-hidden":"true"})}),u.jsx("a",{href:"https://twitter.com/TEDTalks",target:"_blank",rel:"noopener noreferrer","aria-label":"TED on X",lang:"en",children:u.jsx(Qg,{size:24,"aria-hidden":"true"})}),u.jsx("a",{href:"https://www.tiktok.com/@tedtoks",target:"_blank",rel:"noopener noreferrer","aria-label":"TED on TikTok",lang:"en",children:u.jsx(H2,{size:24,"aria-hidden":"true"})})]})]})]})]})}),u.jsx("style",{children:`
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

                .official-guide {
                    padding: 1rem 1.25rem;
                    border-left: 3px solid var(--ted-red);
                    background: var(--ted-black);
                    font-size: 1rem;
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
            `})]})},CT=()=>u.jsx("main",{id:"main-content",tabIndex:-1,children:u.jsx(ey,{variant:"full"})}),PT=[{id:"haruki-kawamata",name:"Haruki KAWAMATA",role:{ja:"オーガナイザー",en:"Organizer"}},{id:"takuya-saeki",name:"Takuya Saeki",role:{ja:"共同オーガナイザー",en:"Co-organizer"}},{id:"hironori-sakai",name:"Hironori SAKAI",role:{ja:"運営・スピーカー",en:"Operation/Speaker"}},{id:"tatsuaki-matsuda",name:"Tatsuaki Matsuda",role:{ja:"運営・スピーカー",en:"Operation/Speaker"}},{id:"yasuhiro-nanjo",name:"Yasuhiro Nanjo",role:{ja:"テクノロジー・広報",en:"Technology/Marketing"}},{id:"lyu-noguchi",name:"Lyu Noguchi",role:{ja:"スピーカー",en:"Speaker"}},{id:"yunosuke-sato",name:"Yunosuke Sato",role:{ja:"財務",en:"Finance"}},{id:"taisei-moriwaki",name:"Taisei Moriwaki",role:{ja:"広報",en:"Marketing"}},{id:"keisuke-horikoshi",name:"Keisuke Horikoshi",role:{ja:"監査",en:"Audit"}}],bf={ja:{eyebrow:"Organizing Team",year:"2026",fullTitle:"2026 運営メンバー",titleLead:"運営",titleAccent:"メンバー",memberList:"運営メンバー一覧"},en:{eyebrow:"TEDxWUSHS Youth",year:"2026",fullTitle:"2026 Organizing Team",titleLead:"Organizing",titleAccent:"Team",memberList:"Organizing team members"}},DT=()=>{const{language:e}=xe(),t=rt(),n=bf[e]??bf.ja;return u.jsxs("main",{id:"main-content",className:"organizers-page",tabIndex:-1,children:[u.jsx("section",{className:"organizers-hero","aria-labelledby":"organizers-title",children:u.jsxs("div",{className:"container organizers-container",children:[u.jsxs(Z.div,{className:"organizers-heading",initial:t?!1:{opacity:0,y:20},animate:{opacity:1,y:0},transition:t?{duration:0}:{duration:.55},children:[u.jsx("p",{className:"organizers-eyebrow",lang:"en",children:n.eyebrow}),u.jsxs("h1",{id:"organizers-title","aria-label":n.fullTitle,children:[u.jsx("span",{className:"organizers-year","aria-hidden":"true",children:n.year}),u.jsxs("span",{className:"organizers-title-text","aria-hidden":"true",children:[n.titleLead,e==="en"?" ":null,u.jsx("span",{className:"highlight-red",children:n.titleAccent})]})]})]}),u.jsx("h2",{className:"visually-hidden",children:n.memberList}),u.jsx("ul",{className:"organizers-grid",children:PT.map((r,i)=>u.jsxs(Z.li,{className:"organizer-card",initial:t?!1:{opacity:0,y:24},whileInView:t?void 0:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:t?{duration:0}:{duration:.4,delay:i*.06},children:[u.jsx("h3",{className:"organizer-name",lang:"en",children:r.name}),u.jsxs("div",{className:"organizer-role-block",children:[u.jsx("span",{className:"organizer-role",lang:"en",children:r.role.en}),e==="ja"&&u.jsx("span",{className:"organizer-role-ja",children:r.role.ja})]})]},r.id))})]})}),u.jsx("style",{children:`
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
      `})]})},NT=()=>{const{language:e}=xe();return u.jsxs("main",{id:"main-content",tabIndex:-1,className:"join-us-page",children:[u.jsxs("header",{className:"join-us-page-heading container",children:[u.jsx("span",{lang:"en",children:"Be part of the community"}),u.jsxs("h1",{lang:"en",children:["Join ",u.jsx("span",{className:"highlight-red",children:"Us"})]}),u.jsx("p",{children:e==="ja"?"TEDxWUSHS Youthへの参加方法と最新情報をご案内します。":"Explore ways to take part in TEDxWUSHS Youth and receive the latest event updates."})]}),u.jsx(ty,{hideHeader:!0}),u.jsx("style",{children:`
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
            `})]})},Cf={ja:{steps:[{title:"Application",desc:"2026年開催分の応募受付は終了しました。"},{title:"Audition",desc:"運営チームとの面談で、アイデアを深掘りします。"},{title:"Curation",desc:"TEDxの基準に合わせて、スピーチを磨き上げます。"},{title:"The Stage",desc:"TEDxWUSHS Youthのステージで、世界へ発信！"}],lead:"2026年開催分のスピーカー募集は終了しました。",benefits:["世界中のTEDコミュニティにあなたのアイデアが届きます。","プロフェッショナルなコーチングでプレゼンスキルが向上します。","情熱的な仲間や観客との貴重な出会いがあります。"],closedMessage:"たくさんのご応募ありがとうございました。今後の募集については、ウェブサイトとSNSでお知らせします。"},en:{steps:[{title:"Application",desc:"Applications for the 2026 event have closed."},{title:"Audition",desc:"Explore your idea in depth during an interview with the organizing team."},{title:"Curation",desc:"Refine your talk in line with TEDx standards."},{title:"The Stage",desc:"Share your idea with the world from the TEDxWUSHS Youth stage!"}],lead:"Speaker applications for the 2026 event have closed.",benefits:["Share your idea with the global TED community.","Improve your presentation skills through professional coaching.","Connect with passionate peers and audience members."],closedMessage:"Thank you to everyone who applied. Future opportunities will be announced on this website and our social media channels."}},_T=()=>{const{language:e}=xe(),t=Cf[e]??Cf.ja;return u.jsxs("main",{id:"main-content",tabIndex:-1,className:"recruit-page",style:{paddingTop:"120px"},children:[u.jsxs("div",{className:"container",children:[u.jsxs(ke,{to:"/join-us",className:"back-link",children:[u.jsx(Wu,{size:16,"aria-hidden":"true"})," ",u.jsx("span",{lang:"en",children:"Back to Opportunities"})]}),u.jsxs("header",{className:"recruit-header",children:[u.jsx("div",{className:"icon-circle","aria-hidden":"true",children:u.jsx(Kg,{size:48})}),u.jsxs("h1",{lang:"en",children:["Speaker ",u.jsx("span",{className:"highlight-red",children:"Applications"})]}),u.jsx("p",{className:"lead-text",children:t.lead})]}),u.jsxs("section",{className:"detail-section",children:[u.jsx("h2",{lang:"en",children:"Why speak at TEDxWUSHS Youth?"}),u.jsx("ul",{className:"benefits-grid",children:t.benefits.map(n=>u.jsxs("li",{className:"benefit-card",children:[u.jsx(C2,{color:"var(--ted-red)",size:24,"aria-hidden":"true"}),u.jsx("p",{children:n})]},n))})]}),u.jsxs("section",{className:"process-section",children:[u.jsx("h2",{lang:"en",children:"Application Process"}),u.jsx("ol",{className:"steps-container",children:t.steps.map((n,r)=>u.jsxs("li",{className:"step-item",children:[u.jsx("div",{className:"step-num","aria-hidden":"true",children:r+1}),u.jsx("h3",{lang:"en",children:n.title}),u.jsx("p",{children:n.desc})]},n.title))})]}),u.jsxs("section",{className:"cta-box","aria-labelledby":"speaker-applications-status",children:[u.jsx("h2",{id:"speaker-applications-status",lang:"en",children:"Applications Closed"}),u.jsx("p",{children:t.closedMessage}),u.jsx("span",{className:"closed-label",lang:"en",children:"2026 Speaker Applications Closed"})]})]}),u.jsx("style",{children:`
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
      `})]})},Pf={ja:{departmentDescriptions:["イベントの全体企画、進行、会場設営などを担います。","SNSやWebサイトを通じた広報活動、ブランディングを担います。","スピーカーの選定、スピーチ構成のサポートを担います。","デザイン、映像制作、Web開発などを担います。"],lead:"2026年開催分の運営チーム募集は終了しました。たくさんのご応募ありがとうございました。",values:["アイデアを広めること、新しい価値を創ることに情熱を持っている方。","多様な視点を尊重し、チームで最高のパフォーマンスを発揮できる方。","自ら考え、行動し、変化を恐れずに挑戦し続けられる方。"],closedMessage:"次回の募集については、ウェブサイトと公式SNSでお知らせします。"},en:{departmentDescriptions:["Oversees overall event planning, program flow, venue setup, and related operations.","Handles promotion and branding through social media and the website.","Handles speaker selection and supports the development of talks.","Handles design, video production, web development, and related creative work."],lead:"Recruitment for the 2026 organizing team has closed. Thank you to everyone who applied.",values:["Passionate about sharing ideas and creating new value.","Respects diverse perspectives and brings out the best in the team through collaboration.","Thinks and acts independently, and continues to take on challenges without fearing change."],closedMessage:"Future recruitment opportunities will be announced on this website and our official social media channels."}},AT=()=>{const{language:e}=xe(),t=Pf[e]??Pf.ja,n=[{title:"Operations",icon:u.jsx(Fo,{size:32,"aria-hidden":"true"}),desc:t.departmentDescriptions[0]},{title:"Marketing",icon:u.jsx(Y2,{size:32,"aria-hidden":"true"}),desc:t.departmentDescriptions[1]},{title:"Speaker",icon:u.jsx(Kg,{size:32,"aria-hidden":"true"}),desc:t.departmentDescriptions[2]},{title:"Creative",icon:u.jsx(_2,{size:32,"aria-hidden":"true"}),desc:t.departmentDescriptions[3]}];return u.jsxs("main",{id:"main-content",tabIndex:-1,className:"recruit-page",style:{paddingTop:"120px"},children:[u.jsxs("div",{className:"container",children:[u.jsxs(ke,{to:"/join-us",className:"back-link",children:[u.jsx(Wu,{size:16,"aria-hidden":"true"})," ",u.jsx("span",{lang:"en",children:"Back to Opportunities"})]}),u.jsxs("header",{className:"recruit-header",children:[u.jsx("div",{className:"icon-circle","aria-hidden":"true",children:u.jsx(Fo,{size:48})}),u.jsx("span",{className:"recruitment-status",lang:"en",children:"2026 Recruitment Closed"}),u.jsxs("h1",{lang:"en",children:["Join the ",u.jsx("span",{className:"highlight-red",children:"Team"})]}),u.jsx("p",{className:"lead-text",children:t.lead})]}),u.jsxs("section",{className:"detail-section",children:[u.jsx("h2",{lang:"en",children:"Departments"}),u.jsx("div",{className:"departments-grid",children:n.map((r,i)=>u.jsxs("div",{className:"dept-card",children:[u.jsx("div",{className:"dept-icon",children:r.icon}),u.jsx("h3",{lang:"en",children:r.title}),u.jsx("p",{children:r.desc})]},i))})]}),u.jsxs("section",{className:"why-join-section",children:[u.jsx("h2",{lang:"en",children:"What we look for"}),u.jsxs("div",{className:"values-grid",children:[u.jsxs("div",{className:"value-item",children:[u.jsx("h3",{lang:"en",children:"Passion"}),u.jsx("p",{children:t.values[0]})]}),u.jsxs("div",{className:"value-item",children:[u.jsx("h3",{lang:"en",children:"Collaboration"}),u.jsx("p",{children:t.values[1]})]}),u.jsxs("div",{className:"value-item",children:[u.jsx("h3",{lang:"en",children:"Proactive"}),u.jsx("p",{children:t.values[2]})]})]})]}),u.jsxs("section",{className:"cta-box","aria-labelledby":"team-recruitment-status-heading",children:[u.jsx("h2",{id:"team-recruitment-status-heading",lang:"en",children:"Recruitment Closed"}),u.jsx("p",{children:t.closedMessage}),u.jsx("span",{className:"closed-label",lang:"en",children:"2026 Team Recruitment Closed"})]})]}),u.jsx("style",{children:`
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
      `})]})},Df={ja:{lead:"参加申込みは2026年9月開始予定です。受付開始まで今しばらくお待ちください。",eligibilityLabel:"Audience Eligibility / 参加対象",eligibilityTitle:"早稲田大学高等学院の生徒及びその保護者",eligibilityDescription:"本イベントの会場参加は、上記の方を対象としています。対象をご確認のうえ、受付開始をお待ちください。",newsletterDescription:"ニュースレターに登録して、チケット販売開始の通知や、公開前のスピーカー情報をいち早く入手しましょう。",eventDescription:"2026年10月31日（土）14:00〜18:00、早稲田大学高等学院 講堂にて開催します（受付開始13:30）。",registrationTitle:"参加申込みについて",registrationDescription:"申込みは2026年9月開始予定です。開始時にウェブサイトとSNSでご案内します。",audienceLabel:"対象",audienceValue:"学院生・保護者"},en:{lead:"Registration is scheduled to open in September 2026. Please check back when registration begins.",eligibilityLabel:"Audience Eligibility",eligibilityTitle:"Students of Waseda University Senior High School and Their Parents or Guardians",eligibilityDescription:"In-person attendance is limited to the group listed above. Please confirm your eligibility and check back when registration opens.",newsletterDescription:"Sign up for the newsletter to be among the first to receive registration updates and speaker announcements.",eventDescription:"The event will be held on Saturday, October 31, 2026, from 2:00 p.m. to 6:00 p.m. at the auditorium of Waseda University Senior High School (doors open at 1:30 p.m.).",registrationTitle:"Registration Information",registrationDescription:"Registration is scheduled to open in September 2026. We will announce the opening on this website and our social media channels.",audienceLabel:"Eligible Attendees",audienceValue:"Students & Parents/Guardians"}},MT=()=>{const{language:e}=xe(),t=Df[e]??Df.ja;return u.jsxs("main",{id:"main-content",tabIndex:-1,className:"recruit-page",style:{paddingTop:"120px"},children:[u.jsxs("div",{className:"container",children:[u.jsxs(ke,{to:"/join-us",className:"back-link",children:[u.jsx(Wu,{size:16,"aria-hidden":"true"})," ",u.jsx("span",{lang:"en",children:"Back to Opportunities"})]}),u.jsxs("header",{className:"recruit-header",children:[u.jsx("div",{className:"icon-circle","aria-hidden":"true",children:u.jsx(Gg,{size:48})}),u.jsxs("h1",{lang:"en",children:["Register as ",u.jsx("span",{className:"highlight-red",children:"Audience"})]}),u.jsx("p",{className:"lead-text",children:t.lead})]}),u.jsxs("section",{className:"eligibility-panel","aria-labelledby":"audience-eligibility-title",children:[u.jsx("div",{className:"eligibility-icon",children:u.jsx(Fo,{size:36,"aria-hidden":"true"})}),u.jsxs("div",{children:[u.jsx("span",{className:"eligibility-label",children:e==="ja"?u.jsxs(u.Fragment,{children:[u.jsx("span",{lang:"en",children:"Audience Eligibility"})," / 参加対象"]}):t.eligibilityLabel}),u.jsx("h2",{id:"audience-eligibility-title",children:t.eligibilityTitle}),u.jsx("p",{children:t.eligibilityDescription})]})]}),u.jsxs("div",{className:"audience-layout",children:[u.jsxs("div",{className:"info-side",children:[u.jsxs("section",{className:"info-block",children:[u.jsx("div",{className:"info-icon","aria-hidden":"true",children:u.jsx(k2,{size:24})}),u.jsxs("div",{children:[u.jsx("h2",{lang:"en",children:"Be the First to Know"}),u.jsx("p",{children:t.newsletterDescription})]})]}),u.jsxs("section",{className:"info-block",children:[u.jsx("div",{className:"info-icon","aria-hidden":"true",children:u.jsx(E2,{size:24})}),u.jsxs("div",{children:[u.jsx("h2",{lang:"en",children:"Upcoming Events"}),u.jsx("p",{children:t.eventDescription})]})]})]}),u.jsx("div",{className:"form-side",children:u.jsxs("section",{className:"registration-card","aria-labelledby":"registration-information-title",children:[u.jsx("span",{className:"registration-status",lang:"en",children:"Coming in September"}),u.jsx("h2",{id:"registration-information-title",children:t.registrationTitle}),u.jsx("p",{children:t.registrationDescription}),u.jsxs("div",{className:"registration-audience",children:[u.jsx("span",{children:t.audienceLabel}),u.jsx("strong",{children:t.audienceValue})]}),u.jsx("time",{className:"registration-date",dateTime:"2026-09",children:"2026.09"})]})})]})]}),u.jsx("style",{children:`
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
        .registration-date { display: block; padding: 1rem; border: 1px solid rgb(var(--ted-red-rgb) / 0.65); border-radius: 8px; color: var(--ted-red); font-family: var(--font-heading); font-size: 2rem; font-weight: 800; text-align: center; }

        .form-group { margin-bottom: 1.5rem; }
        .form-group label { display: block; font-size: 0.8rem; font-weight: 700; color: #888; text-transform: uppercase; margin-bottom: 0.5rem; }
        input, select { width: 100%; background: #222; border: 1px solid #333; padding: 1rem; border-radius: 8px; color: white; font-family: inherit; }
        .recruit-page input:focus, .recruit-page select:focus { border-color: var(--ted-red); }

        .btn-primary-full { 
          width: 100%; 
          background: var(--ted-red); 
          color: white; 
          padding: 1.2rem; 
          border-radius: 8px; 
          font-weight: 800; 
          text-transform: uppercase; 
          margin-top: 1rem; 
          transition: var(--transition-smooth);
          display: block;
          text-align: center;
          text-decoration: none;
        }
        .btn-primary-full:hover { background: var(--ted-red); transform: translateY(-3px); box-shadow: 0 10px 20px rgb(var(--ted-red-rgb) / 0.3); }

        .form-note {
          margin-top: 1.5rem;
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
      `})]})},Nf={ja:[{question:"TEDxWUSHS Youthとは何ですか？",answer:"早稲田大学高等学院の生徒が独立して企画・運営するTEDxイベントです。『Ideas change everything.』という考えのもと、対話と変化につながるアイデアを若者の視点から届けます。"},{question:"参加対象者を教えてください。",answer:"参加対象者は、早稲田大学高等学院の生徒（学院生）とその保護者です。参加申込みは2026年9月開始予定で、詳細はウェブサイトと公式SNSでご案内します。"},{question:"イベントでは何語が使用されますか？",answer:"日本語と英語のバイリンガルイベントを予定しています。日本語・英語のどちらで行われるトークにも、スライド上に字幕を付ける予定です。"},{question:"参加費はかかりますか？",answer:"参加費は無料です。"},{question:"ボランティアとして参加したいのですが、どうすればいいですか？",answer:"2026年開催分の運営チーム募集は終了しました。今後の募集はウェブサイトの『Join Us』ページと公式SNSでお知らせします。"}],en:[{question:"What is TEDxWUSHS Youth?",answer:"TEDxWUSHS Youth is an independently organized TEDx event planned and run by students of Waseda University Senior High School. We believe that “Ideas change everything.” From a youth perspective, we share ideas that can spark dialogue and change."},{question:"Who can attend?",answer:"The event is open to students of Waseda University Senior High School and their parents or guardians. Registration is scheduled to open in September 2026, with details to be announced on this website and our official social media channels."},{question:"What languages will be used at the event?",answer:"The event is planned to be bilingual in Japanese and English. For both Japanese- and English-language talks, we plan to display subtitles on the presentation slides."},{question:"Is there an admission fee?",answer:"The event is free to attend."},{question:"How can I participate as a volunteer?",answer:"Recruitment for the 2026 organizing team has closed. Future opportunities will be announced on the Join Us page and our official social media channels."}]},RT={ja:"質問と回答",en:"Questions and Answers"},zT=({question:e,answer:t,id:n})=>{const[r,i]=w.useState(!1),o=rt(),s=`${n}-question`,a=`${n}-answer`;return u.jsxs("div",{className:"faq-item",children:[u.jsx("h3",{className:"faq-question-heading",children:u.jsxs("button",{id:s,type:"button",className:"faq-question",onClick:()=>i(!r),"aria-expanded":r,"aria-controls":a,children:[u.jsx("span",{children:e}),u.jsx("span",{className:`icon ${r?"open":""}`,"aria-hidden":"true",children:"+"})]})}),u.jsx(Ng,{children:r&&u.jsx(Z.div,{className:"faq-answer",id:a,role:"region","aria-labelledby":s,initial:o?!1:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:o?0:.3},children:u.jsx("p",{children:t})})})]})},LT=({hideHeader:e=!1})=>{const{language:t}=xe(),n=Nf[t]??Nf.ja;return u.jsxs("section",{id:"faq",className:"faq section-padding","aria-labelledby":"faq-list-heading",children:[u.jsxs("div",{className:"container",children:[e?u.jsx("h2",{id:"faq-list-heading",className:"visually-hidden",children:RT[t]}):u.jsx("div",{className:"section-header",children:u.jsxs("h2",{id:"faq-list-heading",className:"section-title",lang:"en",children:["Frequently Asked ",u.jsx("span",{className:"highlight-red",children:"Questions"})]})}),u.jsx("div",{className:"faq-list",children:n.map((r,i)=>{const o=`faq-${t}-${i+1}`;return u.jsx(zT,{id:o,...r},o)})})]}),u.jsx("style",{children:`
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
      `})]})},VT=()=>{const e=rt();return u.jsxs("main",{id:"main-content",tabIndex:-1,className:"faq-page",children:[u.jsx("header",{className:"faq-page-heading container",children:u.jsxs("h1",{lang:"en",children:["Frequently Asked ",u.jsx("span",{className:"highlight-red",children:"Questions"})]})}),u.jsx(Z.div,{initial:e?!1:{opacity:0},animate:{opacity:1},transition:{duration:e?0:.8},children:u.jsx(LT,{hideHeader:!0})}),u.jsx("style",{children:`
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
            `})]})},_f={ja:{title:"ページが見つかりません",description:"指定されたページは移動または削除された可能性があります。",action:"ホームへ戻る"},en:{title:"Page Not Found",description:"The page may have been moved or removed.",action:"Return Home"}},IT=()=>{const{language:e}=xe(),t=_f[e]??_f.ja;return u.jsxs("main",{id:"main-content",tabIndex:-1,className:"not-found-page",children:[u.jsxs("div",{className:"container not-found-page__content",children:[u.jsx("p",{className:"not-found-page__code","aria-hidden":"true",children:"404"}),u.jsx("h1",{children:t.title}),u.jsx("p",{children:t.description}),u.jsx(ke,{to:"/",className:"not-found-page__link",children:t.action})]}),u.jsx("style",{children:`
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
      `})]})},Af={ja:{"/":"TEDxWUSHS Youth | Ideas change everything","/about":"TEDxについて | TEDxWUSHS Youth","/speakers":"スピーカー | TEDxWUSHS Youth","/organizers":"運営メンバー | TEDxWUSHS Youth","/join-us":"参加する | TEDxWUSHS Youth","/join-us/speaker":"スピーカー募集 | TEDxWUSHS Youth","/join-us/team":"運営チーム募集 | TEDxWUSHS Youth","/join-us/audience":"参加申込み | TEDxWUSHS Youth","/faq":"よくある質問 | TEDxWUSHS Youth"},en:{"/":"TEDxWUSHS Youth | Ideas change everything","/about":"About | TEDxWUSHS Youth","/speakers":"Speakers | TEDxWUSHS Youth","/organizers":"Organizers | TEDxWUSHS Youth","/join-us":"Join Us | TEDxWUSHS Youth","/join-us/speaker":"Speaker Applications | TEDxWUSHS Youth","/join-us/team":"Team Recruitment | TEDxWUSHS Youth","/join-us/audience":"Audience Registration | TEDxWUSHS Youth","/faq":"Frequently Asked Questions | TEDxWUSHS Youth"}},FT=()=>{const{pathname:e}=ir(),{language:t}=xe(),n=w.useRef(e);return w.useEffect(()=>{const r=Af[t]??Af.ja;document.title=r[e]??(t==="ja"?"ページが見つかりません | TEDxWUSHS Youth":"Page Not Found | TEDxWUSHS Youth"),document.documentElement.lang=t==="en"?"en":"ja"},[t,e]),w.useEffect(()=>{const r=document.getElementById("main-content"),i=n.current!==e;if(n.current=e,!r||(window.scrollTo({top:0,left:0,behavior:"auto"}),!i))return;const o=window.requestAnimationFrame(()=>{r.focus({preventScroll:!0})});return()=>window.cancelAnimationFrame(o)},[e]),null};function OT(){return u.jsx(eT,{children:u.jsx(Dx,{children:u.jsxs("div",{className:"app",children:[u.jsx(FT,{}),u.jsx(rT,{}),u.jsxs(Sx,{children:[u.jsx(Qe,{path:"/",element:u.jsx(wT,{})}),u.jsx(Qe,{path:"/about",element:u.jsx(bT,{})}),u.jsx(Qe,{path:"/speakers",element:u.jsx(CT,{})}),u.jsx(Qe,{path:"/organizers",element:u.jsx(DT,{})}),u.jsx(Qe,{path:"/join-us",element:u.jsx(NT,{})}),u.jsx(Qe,{path:"/join-us/speaker",element:u.jsx(_T,{})}),u.jsx(Qe,{path:"/join-us/team",element:u.jsx(AT,{})}),u.jsx(Qe,{path:"/join-us/audience",element:u.jsx(MT,{})}),u.jsx(Qe,{path:"/faq",element:u.jsx(VT,{})}),u.jsx(Qe,{path:"*",element:u.jsx(IT,{})})]}),u.jsx(iT,{})]})})})}$p(document.getElementById("root")).render(u.jsx(w.StrictMode,{children:u.jsx(OT,{})}));
