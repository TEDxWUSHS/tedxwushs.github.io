function vv(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function yv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gh={exports:{}},$o={},qh={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var di=Symbol.for("react.element"),xv=Symbol.for("react.portal"),wv=Symbol.for("react.fragment"),kv=Symbol.for("react.strict_mode"),Sv=Symbol.for("react.profiler"),jv=Symbol.for("react.provider"),bv=Symbol.for("react.context"),Tv=Symbol.for("react.forward_ref"),Ev=Symbol.for("react.suspense"),_v=Symbol.for("react.memo"),Dv=Symbol.for("react.lazy"),eu=Symbol.iterator;function Cv(e){return e===null||typeof e!="object"?null:(e=eu&&e[eu]||e["@@iterator"],typeof e=="function"?e:null)}var Qh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xh=Object.assign,Jh={};function ir(e,t,n){this.props=e,this.context=t,this.refs=Jh,this.updater=n||Qh}ir.prototype.isReactComponent={};ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zh(){}Zh.prototype=ir.prototype;function kl(e,t,n){this.props=e,this.context=t,this.refs=Jh,this.updater=n||Qh}var Sl=kl.prototype=new Zh;Sl.constructor=kl;Xh(Sl,ir.prototype);Sl.isPureReactComponent=!0;var tu=Array.isArray,ef=Object.prototype.hasOwnProperty,jl={current:null},tf={key:!0,ref:!0,__self:!0,__source:!0};function nf(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)ef.call(t,r)&&!tf.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:di,type:e,key:o,ref:s,props:i,_owner:jl.current}}function Pv(e,t){return{$$typeof:di,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bl(e){return typeof e=="object"&&e!==null&&e.$$typeof===di}function Nv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var nu=/\/+/g;function fs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Nv(""+e.key):t.toString(36)}function Gi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case di:case xv:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+fs(s,0):r,tu(i)?(n="",e!=null&&(n=e.replace(nu,"$&/")+"/"),Gi(i,t,n,"",function(u){return u})):i!=null&&(bl(i)&&(i=Pv(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(nu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",tu(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+fs(o,l);s+=Gi(o,t,n,c,i)}else if(c=Cv(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+fs(o,l++),s+=Gi(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ti(e,t,n){if(e==null)return e;var r=[],i=0;return Gi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Av(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},qi={transition:null},Lv={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:qi,ReactCurrentOwner:jl};function rf(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:Ti,forEach:function(e,t,n){Ti(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ti(e,function(){t++}),t},toArray:function(e){return Ti(e,function(t){return t})||[]},only:function(e){if(!bl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=ir;z.Fragment=wv;z.Profiler=Sv;z.PureComponent=kl;z.StrictMode=kv;z.Suspense=Ev;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lv;z.act=rf;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xh({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=jl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)ef.call(t,c)&&!tf.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:di,type:e.type,key:i,ref:o,props:r,_owner:s}};z.createContext=function(e){return e={$$typeof:bv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jv,_context:e},e.Consumer=e};z.createElement=nf;z.createFactory=function(e){var t=nf.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:Tv,render:e}};z.isValidElement=bl;z.lazy=function(e){return{$$typeof:Dv,_payload:{_status:-1,_result:e},_init:Av}};z.memo=function(e,t){return{$$typeof:_v,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=qi.transition;qi.transition={};try{e()}finally{qi.transition=t}};z.unstable_act=rf;z.useCallback=function(e,t){return Ee.current.useCallback(e,t)};z.useContext=function(e){return Ee.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};z.useEffect=function(e,t){return Ee.current.useEffect(e,t)};z.useId=function(){return Ee.current.useId()};z.useImperativeHandle=function(e,t,n){return Ee.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return Ee.current.useMemo(e,t)};z.useReducer=function(e,t,n){return Ee.current.useReducer(e,t,n)};z.useRef=function(e){return Ee.current.useRef(e)};z.useState=function(e){return Ee.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return Ee.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return Ee.current.useTransition()};z.version="18.3.1";qh.exports=z;var w=qh.exports;const Mv=yv(w),zv=vv({__proto__:null,default:Mv},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rv=w,Iv=Symbol.for("react.element"),Vv=Symbol.for("react.fragment"),Uv=Object.prototype.hasOwnProperty,Ov=Rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fv={key:!0,ref:!0,__self:!0,__source:!0};function of(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Uv.call(t,r)&&!Fv.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Iv,type:e,key:o,ref:s,props:i,_owner:Ov.current}}$o.Fragment=Vv;$o.jsx=of;$o.jsxs=of;Gh.exports=$o;var a=Gh.exports,sf={exports:{}},Ie={},af={exports:{}},lf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,A){var M=D.length;D.push(A);e:for(;0<M;){var $=M-1>>>1,ce=D[$];if(0<i(ce,A))D[$]=A,D[M]=ce,M=$;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var A=D[0],M=D.pop();if(M!==A){D[0]=M;e:for(var $=0,ce=D.length,ji=ce>>>1;$<ji;){var on=2*($+1)-1,hs=D[on],sn=on+1,bi=D[sn];if(0>i(hs,M))sn<ce&&0>i(bi,hs)?(D[$]=bi,D[sn]=M,$=sn):(D[$]=hs,D[on]=M,$=on);else if(sn<ce&&0>i(bi,M))D[$]=bi,D[sn]=M,$=sn;else break e}}return A}function i(D,A){var M=D.sortIndex-A.sortIndex;return M!==0?M:D.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,h=null,f=3,v=!1,y=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(D){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=D)r(u),A.sortIndex=A.expirationTime,t(c,A);else break;A=n(u)}}function k(D){if(x=!1,p(D),!y)if(n(c)!==null)y=!0,Si(j);else{var A=n(u);A!==null&&Z(k,A.startTime-D)}}function j(D,A){y=!1,x&&(x=!1,g(b),b=-1),v=!0;var M=f;try{for(p(A),h=n(c);h!==null&&(!(h.expirationTime>A)||D&&!J());){var $=h.callback;if(typeof $=="function"){h.callback=null,f=h.priorityLevel;var ce=$(h.expirationTime<=A);A=e.unstable_now(),typeof ce=="function"?h.callback=ce:h===n(c)&&r(c),p(A)}else r(c);h=n(c)}if(h!==null)var ji=!0;else{var on=n(u);on!==null&&Z(k,on.startTime-A),ji=!1}return ji}finally{h=null,f=M,v=!1}}var T=!1,E=null,b=-1,L=5,N=-1;function J(){return!(e.unstable_now()-N<L)}function ot(){if(E!==null){var D=e.unstable_now();N=D;var A=!0;try{A=E(!0,D)}finally{A?rn():(T=!1,E=null)}}else T=!1}var rn;if(typeof m=="function")rn=function(){m(ot)};else if(typeof MessageChannel<"u"){var hr=new MessageChannel,ki=hr.port2;hr.port1.onmessage=ot,rn=function(){ki.postMessage(null)}}else rn=function(){S(ot,0)};function Si(D){E=D,T||(T=!0,rn())}function Z(D,A){b=S(function(){D(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,Si(j))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(D){switch(f){case 1:case 2:case 3:var A=3;break;default:A=f}var M=f;f=A;try{return D()}finally{f=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,A){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var M=f;f=D;try{return A()}finally{f=M}},e.unstable_scheduleCallback=function(D,A,M){var $=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?$+M:$):M=$,D){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=M+ce,D={id:d++,callback:A,priorityLevel:D,startTime:M,expirationTime:ce,sortIndex:-1},M>$?(D.sortIndex=M,t(u,D),n(c)===null&&D===n(u)&&(x?(g(b),b=-1):x=!0,Z(k,M-$))):(D.sortIndex=ce,t(c,D),y||v||(y=!0,Si(j))),D},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(D){var A=f;return function(){var M=f;f=A;try{return D.apply(this,arguments)}finally{f=M}}}})(lf);af.exports=lf;var Wv=af.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hv=w,Re=Wv;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cf=new Set,Fr={};function bn(e,t){Qn(e,t),Qn(e+"Capture",t)}function Qn(e,t){for(Fr[e]=t,e=0;e<t.length;e++)cf.add(t[e])}var wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ra=Object.prototype.hasOwnProperty,Bv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ru={},iu={};function $v(e){return ra.call(iu,e)?!0:ra.call(ru,e)?!1:Bv.test(e)?iu[e]=!0:(ru[e]=!0,!1)}function Yv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Kv(e,t,n,r){if(t===null||typeof t>"u"||Yv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _e(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ge[t]=new _e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Tl=/[\-:]([a-z])/g;function El(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Tl,El);ge[t]=new _e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Tl,El);ge[t]=new _e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Tl,El);ge[t]=new _e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function _l(e,t,n,r){var i=ge.hasOwnProperty(t)?ge[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Kv(t,n,i,r)&&(n=null),r||i===null?$v(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Tt=Hv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ei=Symbol.for("react.element"),_n=Symbol.for("react.portal"),Dn=Symbol.for("react.fragment"),Dl=Symbol.for("react.strict_mode"),ia=Symbol.for("react.profiler"),uf=Symbol.for("react.provider"),df=Symbol.for("react.context"),Cl=Symbol.for("react.forward_ref"),oa=Symbol.for("react.suspense"),sa=Symbol.for("react.suspense_list"),Pl=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),hf=Symbol.for("react.offscreen"),ou=Symbol.iterator;function fr(e){return e===null||typeof e!="object"?null:(e=ou&&e[ou]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,ps;function Sr(e){if(ps===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ps=t&&t[1]||""}return`
`+ps+e}var ms=!1;function gs(e,t){if(!e||ms)return"";ms=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{ms=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Sr(e):""}function Gv(e){switch(e.tag){case 5:return Sr(e.type);case 16:return Sr("Lazy");case 13:return Sr("Suspense");case 19:return Sr("SuspenseList");case 0:case 2:case 15:return e=gs(e.type,!1),e;case 11:return e=gs(e.type.render,!1),e;case 1:return e=gs(e.type,!0),e;default:return""}}function aa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dn:return"Fragment";case _n:return"Portal";case ia:return"Profiler";case Dl:return"StrictMode";case oa:return"Suspense";case sa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case df:return(e.displayName||"Context")+".Consumer";case uf:return(e._context.displayName||"Context")+".Provider";case Cl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Pl:return t=e.displayName||null,t!==null?t:aa(e.type)||"Memo";case Dt:t=e._payload,e=e._init;try{return aa(e(t))}catch{}}return null}function qv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return aa(t);case 8:return t===Dl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $t(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ff(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qv(e){var t=ff(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _i(e){e._valueTracker||(e._valueTracker=Qv(e))}function pf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ff(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function uo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function la(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function su(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=$t(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function mf(e,t){t=t.checked,t!=null&&_l(e,"checked",t,!1)}function ca(e,t){mf(e,t);var n=$t(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ua(e,t.type,n):t.hasOwnProperty("defaultValue")&&ua(e,t.type,$t(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function au(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ua(e,t,n){(t!=="number"||uo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var jr=Array.isArray;function Hn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$t(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function da(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function lu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(jr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:$t(n)}}function gf(e,t){var n=$t(t.value),r=$t(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function cu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function vf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ha(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?vf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Di,yf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Di=Di||document.createElement("div"),Di.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Di.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xv=["Webkit","ms","Moz","O"];Object.keys(Dr).forEach(function(e){Xv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dr[t]=Dr[e]})});function xf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Dr.hasOwnProperty(e)&&Dr[e]?(""+t).trim():t+"px"}function wf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Jv=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fa(e,t){if(t){if(Jv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function pa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ma=null;function Nl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ga=null,Bn=null,$n=null;function uu(e){if(e=pi(e)){if(typeof ga!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Qo(t),ga(e.stateNode,e.type,t))}}function kf(e){Bn?$n?$n.push(e):$n=[e]:Bn=e}function Sf(){if(Bn){var e=Bn,t=$n;if($n=Bn=null,uu(e),t)for(e=0;e<t.length;e++)uu(t[e])}}function jf(e,t){return e(t)}function bf(){}var vs=!1;function Tf(e,t,n){if(vs)return e(t,n);vs=!0;try{return jf(e,t,n)}finally{vs=!1,(Bn!==null||$n!==null)&&(bf(),Sf())}}function Hr(e,t){var n=e.stateNode;if(n===null)return null;var r=Qo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var va=!1;if(wt)try{var pr={};Object.defineProperty(pr,"passive",{get:function(){va=!0}}),window.addEventListener("test",pr,pr),window.removeEventListener("test",pr,pr)}catch{va=!1}function Zv(e,t,n,r,i,o,s,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Cr=!1,ho=null,fo=!1,ya=null,e0={onError:function(e){Cr=!0,ho=e}};function t0(e,t,n,r,i,o,s,l,c){Cr=!1,ho=null,Zv.apply(e0,arguments)}function n0(e,t,n,r,i,o,s,l,c){if(t0.apply(this,arguments),Cr){if(Cr){var u=ho;Cr=!1,ho=null}else throw Error(_(198));fo||(fo=!0,ya=u)}}function Tn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ef(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function du(e){if(Tn(e)!==e)throw Error(_(188))}function r0(e){var t=e.alternate;if(!t){if(t=Tn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return du(i),e;if(o===r)return du(i),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function _f(e){return e=r0(e),e!==null?Df(e):null}function Df(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Df(e);if(t!==null)return t;e=e.sibling}return null}var Cf=Re.unstable_scheduleCallback,hu=Re.unstable_cancelCallback,i0=Re.unstable_shouldYield,o0=Re.unstable_requestPaint,ee=Re.unstable_now,s0=Re.unstable_getCurrentPriorityLevel,Al=Re.unstable_ImmediatePriority,Pf=Re.unstable_UserBlockingPriority,po=Re.unstable_NormalPriority,a0=Re.unstable_LowPriority,Nf=Re.unstable_IdlePriority,Yo=null,ct=null;function l0(e){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(Yo,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:d0,c0=Math.log,u0=Math.LN2;function d0(e){return e>>>=0,e===0?32:31-(c0(e)/u0|0)|0}var Ci=64,Pi=4194304;function br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function mo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=br(l):(o&=s,o!==0&&(r=br(o)))}else s=n&~i,s!==0?r=br(s):o!==0&&(r=br(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tt(t),i=1<<n,r|=e[n],t&=~i;return r}function h0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function f0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-tt(o),l=1<<s,c=i[s];c===-1?(!(l&n)||l&r)&&(i[s]=h0(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function xa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Af(){var e=Ci;return Ci<<=1,!(Ci&4194240)&&(Ci=64),e}function ys(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function p0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-tt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ll(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var V=0;function Lf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Mf,Ml,zf,Rf,If,wa=!1,Ni=[],Rt=null,It=null,Vt=null,Br=new Map,$r=new Map,Pt=[],m0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fu(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":Vt=null;break;case"pointerover":case"pointerout":Br.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$r.delete(t.pointerId)}}function mr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=pi(t),t!==null&&Ml(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function g0(e,t,n,r,i){switch(t){case"focusin":return Rt=mr(Rt,e,t,n,r,i),!0;case"dragenter":return It=mr(It,e,t,n,r,i),!0;case"mouseover":return Vt=mr(Vt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Br.set(o,mr(Br.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,$r.set(o,mr($r.get(o)||null,e,t,n,r,i)),!0}return!1}function Vf(e){var t=dn(e.target);if(t!==null){var n=Tn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ef(n),t!==null){e.blockedOn=t,If(e.priority,function(){zf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ka(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ma=r,n.target.dispatchEvent(r),ma=null}else return t=pi(n),t!==null&&Ml(t),e.blockedOn=n,!1;t.shift()}return!0}function pu(e,t,n){Qi(e)&&n.delete(t)}function v0(){wa=!1,Rt!==null&&Qi(Rt)&&(Rt=null),It!==null&&Qi(It)&&(It=null),Vt!==null&&Qi(Vt)&&(Vt=null),Br.forEach(pu),$r.forEach(pu)}function gr(e,t){e.blockedOn===t&&(e.blockedOn=null,wa||(wa=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,v0)))}function Yr(e){function t(i){return gr(i,e)}if(0<Ni.length){gr(Ni[0],e);for(var n=1;n<Ni.length;n++){var r=Ni[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rt!==null&&gr(Rt,e),It!==null&&gr(It,e),Vt!==null&&gr(Vt,e),Br.forEach(t),$r.forEach(t),n=0;n<Pt.length;n++)r=Pt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Pt.length&&(n=Pt[0],n.blockedOn===null);)Vf(n),n.blockedOn===null&&Pt.shift()}var Yn=Tt.ReactCurrentBatchConfig,go=!0;function y0(e,t,n,r){var i=V,o=Yn.transition;Yn.transition=null;try{V=1,zl(e,t,n,r)}finally{V=i,Yn.transition=o}}function x0(e,t,n,r){var i=V,o=Yn.transition;Yn.transition=null;try{V=4,zl(e,t,n,r)}finally{V=i,Yn.transition=o}}function zl(e,t,n,r){if(go){var i=ka(e,t,n,r);if(i===null)Ds(e,t,r,vo,n),fu(e,r);else if(g0(i,e,t,n,r))r.stopPropagation();else if(fu(e,r),t&4&&-1<m0.indexOf(e)){for(;i!==null;){var o=pi(i);if(o!==null&&Mf(o),o=ka(e,t,n,r),o===null&&Ds(e,t,r,vo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ds(e,t,r,null,n)}}var vo=null;function ka(e,t,n,r){if(vo=null,e=Nl(r),e=dn(e),e!==null)if(t=Tn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ef(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return vo=e,null}function Uf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(s0()){case Al:return 1;case Pf:return 4;case po:case a0:return 16;case Nf:return 536870912;default:return 16}default:return 16}}var At=null,Rl=null,Xi=null;function Of(){if(Xi)return Xi;var e,t=Rl,n=t.length,r,i="value"in At?At.value:At.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Xi=i.slice(e,1<r?1-r:void 0)}function Ji(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ai(){return!0}function mu(){return!1}function Ve(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ai:mu,this.isPropagationStopped=mu,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ai)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ai)},persist:function(){},isPersistent:Ai}),t}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Il=Ve(or),fi=q({},or,{view:0,detail:0}),w0=Ve(fi),xs,ws,vr,Ko=q({},fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vr&&(vr&&e.type==="mousemove"?(xs=e.screenX-vr.screenX,ws=e.screenY-vr.screenY):ws=xs=0,vr=e),xs)},movementY:function(e){return"movementY"in e?e.movementY:ws}}),gu=Ve(Ko),k0=q({},Ko,{dataTransfer:0}),S0=Ve(k0),j0=q({},fi,{relatedTarget:0}),ks=Ve(j0),b0=q({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),T0=Ve(b0),E0=q({},or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_0=Ve(E0),D0=q({},or,{data:0}),vu=Ve(D0),C0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},P0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function A0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=N0[e])?!!t[e]:!1}function Vl(){return A0}var L0=q({},fi,{key:function(e){if(e.key){var t=C0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ji(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?P0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vl,charCode:function(e){return e.type==="keypress"?Ji(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ji(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),M0=Ve(L0),z0=q({},Ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yu=Ve(z0),R0=q({},fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vl}),I0=Ve(R0),V0=q({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),U0=Ve(V0),O0=q({},Ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),F0=Ve(O0),W0=[9,13,27,32],Ul=wt&&"CompositionEvent"in window,Pr=null;wt&&"documentMode"in document&&(Pr=document.documentMode);var H0=wt&&"TextEvent"in window&&!Pr,Ff=wt&&(!Ul||Pr&&8<Pr&&11>=Pr),xu=" ",wu=!1;function Wf(e,t){switch(e){case"keyup":return W0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cn=!1;function B0(e,t){switch(e){case"compositionend":return Hf(t);case"keypress":return t.which!==32?null:(wu=!0,xu);case"textInput":return e=t.data,e===xu&&wu?null:e;default:return null}}function $0(e,t){if(Cn)return e==="compositionend"||!Ul&&Wf(e,t)?(e=Of(),Xi=Rl=At=null,Cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ff&&t.locale!=="ko"?null:t.data;default:return null}}var Y0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ku(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Y0[e.type]:t==="textarea"}function Bf(e,t,n,r){kf(r),t=yo(t,"onChange"),0<t.length&&(n=new Il("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Nr=null,Kr=null;function K0(e){tp(e,0)}function Go(e){var t=An(e);if(pf(t))return e}function G0(e,t){if(e==="change")return t}var $f=!1;if(wt){var Ss;if(wt){var js="oninput"in document;if(!js){var Su=document.createElement("div");Su.setAttribute("oninput","return;"),js=typeof Su.oninput=="function"}Ss=js}else Ss=!1;$f=Ss&&(!document.documentMode||9<document.documentMode)}function ju(){Nr&&(Nr.detachEvent("onpropertychange",Yf),Kr=Nr=null)}function Yf(e){if(e.propertyName==="value"&&Go(Kr)){var t=[];Bf(t,Kr,e,Nl(e)),Tf(K0,t)}}function q0(e,t,n){e==="focusin"?(ju(),Nr=t,Kr=n,Nr.attachEvent("onpropertychange",Yf)):e==="focusout"&&ju()}function Q0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Go(Kr)}function X0(e,t){if(e==="click")return Go(t)}function J0(e,t){if(e==="input"||e==="change")return Go(t)}function Z0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:Z0;function Gr(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ra.call(t,i)||!rt(e[i],t[i]))return!1}return!0}function bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tu(e,t){var n=bu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bu(n)}}function Kf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Kf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gf(){for(var e=window,t=uo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=uo(e.document)}return t}function Ol(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ey(e){var t=Gf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Kf(n.ownerDocument.documentElement,n)){if(r!==null&&Ol(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Tu(n,o);var s=Tu(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ty=wt&&"documentMode"in document&&11>=document.documentMode,Pn=null,Sa=null,Ar=null,ja=!1;function Eu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ja||Pn==null||Pn!==uo(r)||(r=Pn,"selectionStart"in r&&Ol(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ar&&Gr(Ar,r)||(Ar=r,r=yo(Sa,"onSelect"),0<r.length&&(t=new Il("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Pn)))}function Li(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Nn={animationend:Li("Animation","AnimationEnd"),animationiteration:Li("Animation","AnimationIteration"),animationstart:Li("Animation","AnimationStart"),transitionend:Li("Transition","TransitionEnd")},bs={},qf={};wt&&(qf=document.createElement("div").style,"AnimationEvent"in window||(delete Nn.animationend.animation,delete Nn.animationiteration.animation,delete Nn.animationstart.animation),"TransitionEvent"in window||delete Nn.transitionend.transition);function qo(e){if(bs[e])return bs[e];if(!Nn[e])return e;var t=Nn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qf)return bs[e]=t[n];return e}var Qf=qo("animationend"),Xf=qo("animationiteration"),Jf=qo("animationstart"),Zf=qo("transitionend"),ep=new Map,_u="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qt(e,t){ep.set(e,t),bn(t,[e])}for(var Ts=0;Ts<_u.length;Ts++){var Es=_u[Ts],ny=Es.toLowerCase(),ry=Es[0].toUpperCase()+Es.slice(1);Qt(ny,"on"+ry)}Qt(Qf,"onAnimationEnd");Qt(Xf,"onAnimationIteration");Qt(Jf,"onAnimationStart");Qt("dblclick","onDoubleClick");Qt("focusin","onFocus");Qt("focusout","onBlur");Qt(Zf,"onTransitionEnd");Qn("onMouseEnter",["mouseout","mouseover"]);Qn("onMouseLeave",["mouseout","mouseover"]);Qn("onPointerEnter",["pointerout","pointerover"]);Qn("onPointerLeave",["pointerout","pointerover"]);bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));function Du(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,n0(r,t,void 0,e),e.currentTarget=null}function tp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Du(i,l,u),o=c}else for(s=0;s<r.length;s++){if(l=r[s],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Du(i,l,u),o=c}}}if(fo)throw e=ya,fo=!1,ya=null,e}function O(e,t){var n=t[Da];n===void 0&&(n=t[Da]=new Set);var r=e+"__bubble";n.has(r)||(np(t,e,2,!1),n.add(r))}function _s(e,t,n){var r=0;t&&(r|=4),np(n,e,r,t)}var Mi="_reactListening"+Math.random().toString(36).slice(2);function qr(e){if(!e[Mi]){e[Mi]=!0,cf.forEach(function(n){n!=="selectionchange"&&(iy.has(n)||_s(n,!1,e),_s(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mi]||(t[Mi]=!0,_s("selectionchange",!1,t))}}function np(e,t,n,r){switch(Uf(t)){case 1:var i=y0;break;case 4:i=x0;break;default:i=zl}n=i.bind(null,t,n,e),i=void 0,!va||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ds(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=dn(l),s===null)return;if(c=s.tag,c===5||c===6){r=o=s;continue e}l=l.parentNode}}r=r.return}Tf(function(){var u=o,d=Nl(n),h=[];e:{var f=ep.get(e);if(f!==void 0){var v=Il,y=e;switch(e){case"keypress":if(Ji(n)===0)break e;case"keydown":case"keyup":v=M0;break;case"focusin":y="focus",v=ks;break;case"focusout":y="blur",v=ks;break;case"beforeblur":case"afterblur":v=ks;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=gu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=S0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=I0;break;case Qf:case Xf:case Jf:v=T0;break;case Zf:v=U0;break;case"scroll":v=w0;break;case"wheel":v=F0;break;case"copy":case"cut":case"paste":v=_0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=yu}var x=(t&4)!==0,S=!x&&e==="scroll",g=x?f!==null?f+"Capture":null:f;x=[];for(var m=u,p;m!==null;){p=m;var k=p.stateNode;if(p.tag===5&&k!==null&&(p=k,g!==null&&(k=Hr(m,g),k!=null&&x.push(Qr(m,k,p)))),S)break;m=m.return}0<x.length&&(f=new v(f,y,null,n,d),h.push({event:f,listeners:x}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&n!==ma&&(y=n.relatedTarget||n.fromElement)&&(dn(y)||y[kt]))break e;if((v||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?dn(y):null,y!==null&&(S=Tn(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(x=gu,k="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(x=yu,k="onPointerLeave",g="onPointerEnter",m="pointer"),S=v==null?f:An(v),p=y==null?f:An(y),f=new x(k,m+"leave",v,n,d),f.target=S,f.relatedTarget=p,k=null,dn(d)===u&&(x=new x(g,m+"enter",y,n,d),x.target=p,x.relatedTarget=S,k=x),S=k,v&&y)t:{for(x=v,g=y,m=0,p=x;p;p=En(p))m++;for(p=0,k=g;k;k=En(k))p++;for(;0<m-p;)x=En(x),m--;for(;0<p-m;)g=En(g),p--;for(;m--;){if(x===g||g!==null&&x===g.alternate)break t;x=En(x),g=En(g)}x=null}else x=null;v!==null&&Cu(h,f,v,x,!1),y!==null&&S!==null&&Cu(h,S,y,x,!0)}}e:{if(f=u?An(u):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var j=G0;else if(ku(f))if($f)j=J0;else{j=Q0;var T=q0}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(j=X0);if(j&&(j=j(e,u))){Bf(h,j,n,d);break e}T&&T(e,f,u),e==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&ua(f,"number",f.value)}switch(T=u?An(u):window,e){case"focusin":(ku(T)||T.contentEditable==="true")&&(Pn=T,Sa=u,Ar=null);break;case"focusout":Ar=Sa=Pn=null;break;case"mousedown":ja=!0;break;case"contextmenu":case"mouseup":case"dragend":ja=!1,Eu(h,n,d);break;case"selectionchange":if(ty)break;case"keydown":case"keyup":Eu(h,n,d)}var E;if(Ul)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Cn?Wf(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Ff&&n.locale!=="ko"&&(Cn||b!=="onCompositionStart"?b==="onCompositionEnd"&&Cn&&(E=Of()):(At=d,Rl="value"in At?At.value:At.textContent,Cn=!0)),T=yo(u,b),0<T.length&&(b=new vu(b,e,null,n,d),h.push({event:b,listeners:T}),E?b.data=E:(E=Hf(n),E!==null&&(b.data=E)))),(E=H0?B0(e,n):$0(e,n))&&(u=yo(u,"onBeforeInput"),0<u.length&&(d=new vu("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=E))}tp(h,t)})}function Qr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function yo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Hr(e,n),o!=null&&r.unshift(Qr(e,o,i)),o=Hr(e,t),o!=null&&r.push(Qr(e,o,i))),e=e.return}return r}function En(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Cu(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Hr(n,o),c!=null&&s.unshift(Qr(n,c,l))):i||(c=Hr(n,o),c!=null&&s.push(Qr(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var oy=/\r\n?/g,sy=/\u0000|\uFFFD/g;function Pu(e){return(typeof e=="string"?e:""+e).replace(oy,`
`).replace(sy,"")}function zi(e,t,n){if(t=Pu(t),Pu(e)!==t&&n)throw Error(_(425))}function xo(){}var ba=null,Ta=null;function Ea(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _a=typeof setTimeout=="function"?setTimeout:void 0,ay=typeof clearTimeout=="function"?clearTimeout:void 0,Nu=typeof Promise=="function"?Promise:void 0,ly=typeof queueMicrotask=="function"?queueMicrotask:typeof Nu<"u"?function(e){return Nu.resolve(null).then(e).catch(cy)}:_a;function cy(e){setTimeout(function(){throw e})}function Cs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Yr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Yr(t)}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Au(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var sr=Math.random().toString(36).slice(2),lt="__reactFiber$"+sr,Xr="__reactProps$"+sr,kt="__reactContainer$"+sr,Da="__reactEvents$"+sr,uy="__reactListeners$"+sr,dy="__reactHandles$"+sr;function dn(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kt]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Au(e);e!==null;){if(n=e[lt])return n;e=Au(e)}return t}e=n,n=e.parentNode}return null}function pi(e){return e=e[lt]||e[kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function An(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Qo(e){return e[Xr]||null}var Ca=[],Ln=-1;function Xt(e){return{current:e}}function F(e){0>Ln||(e.current=Ca[Ln],Ca[Ln]=null,Ln--)}function U(e,t){Ln++,Ca[Ln]=e.current,e.current=t}var Yt={},ke=Xt(Yt),Pe=Xt(!1),xn=Yt;function Xn(e,t){var n=e.type.contextTypes;if(!n)return Yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(e){return e=e.childContextTypes,e!=null}function wo(){F(Pe),F(ke)}function Lu(e,t,n){if(ke.current!==Yt)throw Error(_(168));U(ke,t),U(Pe,n)}function rp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,qv(e)||"Unknown",i));return q({},n,r)}function ko(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yt,xn=ke.current,U(ke,e),U(Pe,Pe.current),!0}function Mu(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=rp(e,t,xn),r.__reactInternalMemoizedMergedChildContext=e,F(Pe),F(ke),U(ke,e)):F(Pe),U(Pe,n)}var mt=null,Xo=!1,Ps=!1;function ip(e){mt===null?mt=[e]:mt.push(e)}function hy(e){Xo=!0,ip(e)}function Jt(){if(!Ps&&mt!==null){Ps=!0;var e=0,t=V;try{var n=mt;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}mt=null,Xo=!1}catch(i){throw mt!==null&&(mt=mt.slice(e+1)),Cf(Al,Jt),i}finally{V=t,Ps=!1}}return null}var Mn=[],zn=0,So=null,jo=0,Oe=[],Fe=0,wn=null,gt=1,vt="";function ln(e,t){Mn[zn++]=jo,Mn[zn++]=So,So=e,jo=t}function op(e,t,n){Oe[Fe++]=gt,Oe[Fe++]=vt,Oe[Fe++]=wn,wn=e;var r=gt;e=vt;var i=32-tt(r)-1;r&=~(1<<i),n+=1;var o=32-tt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,gt=1<<32-tt(t)+i|n<<i|r,vt=o+e}else gt=1<<o|n<<i|r,vt=e}function Fl(e){e.return!==null&&(ln(e,1),op(e,1,0))}function Wl(e){for(;e===So;)So=Mn[--zn],Mn[zn]=null,jo=Mn[--zn],Mn[zn]=null;for(;e===wn;)wn=Oe[--Fe],Oe[Fe]=null,vt=Oe[--Fe],Oe[Fe]=null,gt=Oe[--Fe],Oe[Fe]=null}var ze=null,Me=null,H=!1,et=null;function sp(e,t){var n=We(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function zu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Me=Ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=wn!==null?{id:gt,overflow:vt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=We(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Me=null,!0):!1;default:return!1}}function Pa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Na(e){if(H){var t=Me;if(t){var n=t;if(!zu(e,t)){if(Pa(e))throw Error(_(418));t=Ut(n.nextSibling);var r=ze;t&&zu(e,t)?sp(r,n):(e.flags=e.flags&-4097|2,H=!1,ze=e)}}else{if(Pa(e))throw Error(_(418));e.flags=e.flags&-4097|2,H=!1,ze=e}}}function Ru(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function Ri(e){if(e!==ze)return!1;if(!H)return Ru(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ea(e.type,e.memoizedProps)),t&&(t=Me)){if(Pa(e))throw ap(),Error(_(418));for(;t;)sp(e,t),t=Ut(t.nextSibling)}if(Ru(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Me=Ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Me=null}}else Me=ze?Ut(e.stateNode.nextSibling):null;return!0}function ap(){for(var e=Me;e;)e=Ut(e.nextSibling)}function Jn(){Me=ze=null,H=!1}function Hl(e){et===null?et=[e]:et.push(e)}var fy=Tt.ReactCurrentBatchConfig;function yr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Ii(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Iu(e){var t=e._init;return t(e._payload)}function lp(e){function t(g,m){if(e){var p=g.deletions;p===null?(g.deletions=[m],g.flags|=16):p.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=Ht(g,m),g.index=0,g.sibling=null,g}function o(g,m,p){return g.index=p,e?(p=g.alternate,p!==null?(p=p.index,p<m?(g.flags|=2,m):p):(g.flags|=2,m)):(g.flags|=1048576,m)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,m,p,k){return m===null||m.tag!==6?(m=Is(p,g.mode,k),m.return=g,m):(m=i(m,p),m.return=g,m)}function c(g,m,p,k){var j=p.type;return j===Dn?d(g,m,p.props.children,k,p.key):m!==null&&(m.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Dt&&Iu(j)===m.type)?(k=i(m,p.props),k.ref=yr(g,m,p),k.return=g,k):(k=oo(p.type,p.key,p.props,null,g.mode,k),k.ref=yr(g,m,p),k.return=g,k)}function u(g,m,p,k){return m===null||m.tag!==4||m.stateNode.containerInfo!==p.containerInfo||m.stateNode.implementation!==p.implementation?(m=Vs(p,g.mode,k),m.return=g,m):(m=i(m,p.children||[]),m.return=g,m)}function d(g,m,p,k,j){return m===null||m.tag!==7?(m=vn(p,g.mode,k,j),m.return=g,m):(m=i(m,p),m.return=g,m)}function h(g,m,p){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Is(""+m,g.mode,p),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ei:return p=oo(m.type,m.key,m.props,null,g.mode,p),p.ref=yr(g,null,m),p.return=g,p;case _n:return m=Vs(m,g.mode,p),m.return=g,m;case Dt:var k=m._init;return h(g,k(m._payload),p)}if(jr(m)||fr(m))return m=vn(m,g.mode,p,null),m.return=g,m;Ii(g,m)}return null}function f(g,m,p,k){var j=m!==null?m.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return j!==null?null:l(g,m,""+p,k);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ei:return p.key===j?c(g,m,p,k):null;case _n:return p.key===j?u(g,m,p,k):null;case Dt:return j=p._init,f(g,m,j(p._payload),k)}if(jr(p)||fr(p))return j!==null?null:d(g,m,p,k,null);Ii(g,p)}return null}function v(g,m,p,k,j){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(p)||null,l(m,g,""+k,j);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ei:return g=g.get(k.key===null?p:k.key)||null,c(m,g,k,j);case _n:return g=g.get(k.key===null?p:k.key)||null,u(m,g,k,j);case Dt:var T=k._init;return v(g,m,p,T(k._payload),j)}if(jr(k)||fr(k))return g=g.get(p)||null,d(m,g,k,j,null);Ii(m,k)}return null}function y(g,m,p,k){for(var j=null,T=null,E=m,b=m=0,L=null;E!==null&&b<p.length;b++){E.index>b?(L=E,E=null):L=E.sibling;var N=f(g,E,p[b],k);if(N===null){E===null&&(E=L);break}e&&E&&N.alternate===null&&t(g,E),m=o(N,m,b),T===null?j=N:T.sibling=N,T=N,E=L}if(b===p.length)return n(g,E),H&&ln(g,b),j;if(E===null){for(;b<p.length;b++)E=h(g,p[b],k),E!==null&&(m=o(E,m,b),T===null?j=E:T.sibling=E,T=E);return H&&ln(g,b),j}for(E=r(g,E);b<p.length;b++)L=v(E,g,b,p[b],k),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?b:L.key),m=o(L,m,b),T===null?j=L:T.sibling=L,T=L);return e&&E.forEach(function(J){return t(g,J)}),H&&ln(g,b),j}function x(g,m,p,k){var j=fr(p);if(typeof j!="function")throw Error(_(150));if(p=j.call(p),p==null)throw Error(_(151));for(var T=j=null,E=m,b=m=0,L=null,N=p.next();E!==null&&!N.done;b++,N=p.next()){E.index>b?(L=E,E=null):L=E.sibling;var J=f(g,E,N.value,k);if(J===null){E===null&&(E=L);break}e&&E&&J.alternate===null&&t(g,E),m=o(J,m,b),T===null?j=J:T.sibling=J,T=J,E=L}if(N.done)return n(g,E),H&&ln(g,b),j;if(E===null){for(;!N.done;b++,N=p.next())N=h(g,N.value,k),N!==null&&(m=o(N,m,b),T===null?j=N:T.sibling=N,T=N);return H&&ln(g,b),j}for(E=r(g,E);!N.done;b++,N=p.next())N=v(E,g,b,N.value,k),N!==null&&(e&&N.alternate!==null&&E.delete(N.key===null?b:N.key),m=o(N,m,b),T===null?j=N:T.sibling=N,T=N);return e&&E.forEach(function(ot){return t(g,ot)}),H&&ln(g,b),j}function S(g,m,p,k){if(typeof p=="object"&&p!==null&&p.type===Dn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ei:e:{for(var j=p.key,T=m;T!==null;){if(T.key===j){if(j=p.type,j===Dn){if(T.tag===7){n(g,T.sibling),m=i(T,p.props.children),m.return=g,g=m;break e}}else if(T.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Dt&&Iu(j)===T.type){n(g,T.sibling),m=i(T,p.props),m.ref=yr(g,T,p),m.return=g,g=m;break e}n(g,T);break}else t(g,T);T=T.sibling}p.type===Dn?(m=vn(p.props.children,g.mode,k,p.key),m.return=g,g=m):(k=oo(p.type,p.key,p.props,null,g.mode,k),k.ref=yr(g,m,p),k.return=g,g=k)}return s(g);case _n:e:{for(T=p.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===p.containerInfo&&m.stateNode.implementation===p.implementation){n(g,m.sibling),m=i(m,p.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=Vs(p,g.mode,k),m.return=g,g=m}return s(g);case Dt:return T=p._init,S(g,m,T(p._payload),k)}if(jr(p))return y(g,m,p,k);if(fr(p))return x(g,m,p,k);Ii(g,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,p),m.return=g,g=m):(n(g,m),m=Is(p,g.mode,k),m.return=g,g=m),s(g)):n(g,m)}return S}var Zn=lp(!0),cp=lp(!1),bo=Xt(null),To=null,Rn=null,Bl=null;function $l(){Bl=Rn=To=null}function Yl(e){var t=bo.current;F(bo),e._currentValue=t}function Aa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Kn(e,t){To=e,Bl=Rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function Ke(e){var t=e._currentValue;if(Bl!==e)if(e={context:e,memoizedValue:t,next:null},Rn===null){if(To===null)throw Error(_(308));Rn=e,To.dependencies={lanes:0,firstContext:e}}else Rn=Rn.next=e;return t}var hn=null;function Kl(e){hn===null?hn=[e]:hn.push(e)}function up(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Kl(t)):(n.next=i.next,i.next=n),t.interleaved=n,St(e,r)}function St(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ct=!1;function Gl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ot(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,St(e,n)}return i=r.interleaved,i===null?(t.next=t,Kl(r)):(t.next=i.next,i.next=t),r.interleaved=t,St(e,n)}function Zi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ll(e,n)}}function Vu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Eo(e,t,n,r){var i=e.updateQueue;Ct=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,s===null?o=u:s.next=u,s=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(o!==null){var h=i.baseState;s=0,d=u=c=null,l=o;do{var f=l.lane,v=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,x=l;switch(f=t,v=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){h=y.call(v,h,f);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,f=typeof y=="function"?y.call(v,h,f):y,f==null)break e;h=q({},h,f);break e;case 2:Ct=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else v={eventTime:v,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=v,c=h):d=d.next=v,s|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(c=h),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Sn|=s,e.lanes=s,e.memoizedState=h}}function Uu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var mi={},ut=Xt(mi),Jr=Xt(mi),Zr=Xt(mi);function fn(e){if(e===mi)throw Error(_(174));return e}function ql(e,t){switch(U(Zr,t),U(Jr,e),U(ut,mi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ha(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ha(t,e)}F(ut),U(ut,t)}function er(){F(ut),F(Jr),F(Zr)}function hp(e){fn(Zr.current);var t=fn(ut.current),n=ha(t,e.type);t!==n&&(U(Jr,e),U(ut,n))}function Ql(e){Jr.current===e&&(F(ut),F(Jr))}var Y=Xt(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ns=[];function Xl(){for(var e=0;e<Ns.length;e++)Ns[e]._workInProgressVersionPrimary=null;Ns.length=0}var eo=Tt.ReactCurrentDispatcher,As=Tt.ReactCurrentBatchConfig,kn=0,G=null,ae=null,ue=null,Do=!1,Lr=!1,ei=0,py=0;function ve(){throw Error(_(321))}function Jl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rt(e[n],t[n]))return!1;return!0}function Zl(e,t,n,r,i,o){if(kn=o,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,eo.current=e===null||e.memoizedState===null?yy:xy,e=n(r,i),Lr){o=0;do{if(Lr=!1,ei=0,25<=o)throw Error(_(301));o+=1,ue=ae=null,t.updateQueue=null,eo.current=wy,e=n(r,i)}while(Lr)}if(eo.current=Co,t=ae!==null&&ae.next!==null,kn=0,ue=ae=G=null,Do=!1,t)throw Error(_(300));return e}function ec(){var e=ei!==0;return ei=0,e}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?G.memoizedState=ue=e:ue=ue.next=e,ue}function Ge(){if(ae===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=ue===null?G.memoizedState:ue.next;if(t!==null)ue=t,ae=e;else{if(e===null)throw Error(_(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ue===null?G.memoizedState=ue=e:ue=ue.next=e}return ue}function ti(e,t){return typeof t=="function"?t(e):t}function Ls(e){var t=Ge(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,c=null,u=o;do{var d=u.lane;if((kn&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=h,s=r):c=c.next=h,G.lanes|=d,Sn|=d}u=u.next}while(u!==null&&u!==o);c===null?s=r:c.next=l,rt(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,G.lanes|=o,Sn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ms(e){var t=Ge(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);rt(o,t.memoizedState)||(Ce=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function fp(){}function pp(e,t){var n=G,r=Ge(),i=t(),o=!rt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ce=!0),r=r.queue,tc(vp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,ni(9,gp.bind(null,n,r,i,t),void 0,null),he===null)throw Error(_(349));kn&30||mp(n,t,i)}return i}function mp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gp(e,t,n,r){t.value=n,t.getSnapshot=r,yp(t)&&xp(e)}function vp(e,t,n){return n(function(){yp(t)&&xp(e)})}function yp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rt(e,n)}catch{return!0}}function xp(e){var t=St(e,1);t!==null&&nt(t,e,1,-1)}function Ou(e){var t=at();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ti,lastRenderedState:e},t.queue=e,e=e.dispatch=vy.bind(null,G,e),[t.memoizedState,e]}function ni(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function wp(){return Ge().memoizedState}function to(e,t,n,r){var i=at();G.flags|=e,i.memoizedState=ni(1|t,n,void 0,r===void 0?null:r)}function Jo(e,t,n,r){var i=Ge();r=r===void 0?null:r;var o=void 0;if(ae!==null){var s=ae.memoizedState;if(o=s.destroy,r!==null&&Jl(r,s.deps)){i.memoizedState=ni(t,n,o,r);return}}G.flags|=e,i.memoizedState=ni(1|t,n,o,r)}function Fu(e,t){return to(8390656,8,e,t)}function tc(e,t){return Jo(2048,8,e,t)}function kp(e,t){return Jo(4,2,e,t)}function Sp(e,t){return Jo(4,4,e,t)}function jp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bp(e,t,n){return n=n!=null?n.concat([e]):null,Jo(4,4,jp.bind(null,t,e),n)}function nc(){}function Tp(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Jl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ep(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Jl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function _p(e,t,n){return kn&21?(rt(n,t)||(n=Af(),G.lanes|=n,Sn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function my(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=As.transition;As.transition={};try{e(!1),t()}finally{V=n,As.transition=r}}function Dp(){return Ge().memoizedState}function gy(e,t,n){var r=Wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cp(e))Pp(t,n);else if(n=up(e,t,n,r),n!==null){var i=Te();nt(n,e,r,i),Np(n,t,r)}}function vy(e,t,n){var r=Wt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cp(e))Pp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,rt(l,s)){var c=t.interleaved;c===null?(i.next=i,Kl(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=up(e,t,i,r),n!==null&&(i=Te(),nt(n,e,r,i),Np(n,t,r))}}function Cp(e){var t=e.alternate;return e===G||t!==null&&t===G}function Pp(e,t){Lr=Do=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Np(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ll(e,n)}}var Co={readContext:Ke,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useInsertionEffect:ve,useLayoutEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useMutableSource:ve,useSyncExternalStore:ve,useId:ve,unstable_isNewReconciler:!1},yy={readContext:Ke,useCallback:function(e,t){return at().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:Fu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,to(4194308,4,jp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return to(4194308,4,e,t)},useInsertionEffect:function(e,t){return to(4,2,e,t)},useMemo:function(e,t){var n=at();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=at();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=gy.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=at();return e={current:e},t.memoizedState=e},useState:Ou,useDebugValue:nc,useDeferredValue:function(e){return at().memoizedState=e},useTransition:function(){var e=Ou(!1),t=e[0];return e=my.bind(null,e[1]),at().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,i=at();if(H){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),he===null)throw Error(_(349));kn&30||mp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Fu(vp.bind(null,r,o,e),[e]),r.flags|=2048,ni(9,gp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=at(),t=he.identifierPrefix;if(H){var n=vt,r=gt;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ei++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=py++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},xy={readContext:Ke,useCallback:Tp,useContext:Ke,useEffect:tc,useImperativeHandle:bp,useInsertionEffect:kp,useLayoutEffect:Sp,useMemo:Ep,useReducer:Ls,useRef:wp,useState:function(){return Ls(ti)},useDebugValue:nc,useDeferredValue:function(e){var t=Ge();return _p(t,ae.memoizedState,e)},useTransition:function(){var e=Ls(ti)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:fp,useSyncExternalStore:pp,useId:Dp,unstable_isNewReconciler:!1},wy={readContext:Ke,useCallback:Tp,useContext:Ke,useEffect:tc,useImperativeHandle:bp,useInsertionEffect:kp,useLayoutEffect:Sp,useMemo:Ep,useReducer:Ms,useRef:wp,useState:function(){return Ms(ti)},useDebugValue:nc,useDeferredValue:function(e){var t=Ge();return ae===null?t.memoizedState=e:_p(t,ae.memoizedState,e)},useTransition:function(){var e=Ms(ti)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:fp,useSyncExternalStore:pp,useId:Dp,unstable_isNewReconciler:!1};function Je(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function La(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Zo={isMounted:function(e){return(e=e._reactInternals)?Tn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Te(),i=Wt(e),o=yt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Ot(e,o,i),t!==null&&(nt(t,e,i,r),Zi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Te(),i=Wt(e),o=yt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ot(e,o,i),t!==null&&(nt(t,e,i,r),Zi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Te(),r=Wt(e),i=yt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ot(e,i,r),t!==null&&(nt(t,e,r,n),Zi(t,e,r))}};function Wu(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Gr(n,r)||!Gr(i,o):!0}function Ap(e,t,n){var r=!1,i=Yt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ke(o):(i=Ne(t)?xn:ke.current,r=t.contextTypes,o=(r=r!=null)?Xn(e,i):Yt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Zo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Hu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Zo.enqueueReplaceState(t,t.state,null)}function Ma(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Gl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ke(o):(o=Ne(t)?xn:ke.current,i.context=Xn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(La(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Zo.enqueueReplaceState(i,i.state,null),Eo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function tr(e,t){try{var n="",r=t;do n+=Gv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function zs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function za(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ky=typeof WeakMap=="function"?WeakMap:Map;function Lp(e,t,n){n=yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){No||(No=!0,$a=r),za(e,t)},n}function Mp(e,t,n){n=yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){za(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){za(e,t),typeof r!="function"&&(Ft===null?Ft=new Set([this]):Ft.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Bu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ky;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=zy.bind(null,e,t,n),t.then(e,e))}function $u(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Yu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=yt(-1,1),t.tag=2,Ot(n,t,1))),n.lanes|=1),e)}var Sy=Tt.ReactCurrentOwner,Ce=!1;function Se(e,t,n,r){t.child=e===null?cp(t,null,n,r):Zn(t,e.child,n,r)}function Ku(e,t,n,r,i){n=n.render;var o=t.ref;return Kn(t,i),r=Zl(e,t,n,r,o,i),n=ec(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,jt(e,t,i)):(H&&n&&Fl(t),t.flags|=1,Se(e,t,r,i),t.child)}function Gu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!uc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,zp(e,t,o,r,i)):(e=oo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Gr,n(s,r)&&e.ref===t.ref)return jt(e,t,i)}return t.flags|=1,e=Ht(o,r),e.ref=t.ref,e.return=t,t.child=e}function zp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Gr(o,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,jt(e,t,i)}return Ra(e,t,n,r,i)}function Rp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(Vn,Le),Le|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(Vn,Le),Le|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,U(Vn,Le),Le|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,U(Vn,Le),Le|=r;return Se(e,t,i,n),t.child}function Ip(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ra(e,t,n,r,i){var o=Ne(n)?xn:ke.current;return o=Xn(t,o),Kn(t,i),n=Zl(e,t,n,r,o,i),r=ec(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,jt(e,t,i)):(H&&r&&Fl(t),t.flags|=1,Se(e,t,n,i),t.child)}function qu(e,t,n,r,i){if(Ne(n)){var o=!0;ko(t)}else o=!1;if(Kn(t,i),t.stateNode===null)no(e,t),Ap(t,n,r),Ma(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ke(u):(u=Ne(n)?xn:ke.current,u=Xn(t,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Hu(t,s,r,u),Ct=!1;var f=t.memoizedState;s.state=f,Eo(t,r,s,i),c=t.memoizedState,l!==r||f!==c||Pe.current||Ct?(typeof d=="function"&&(La(t,n,d,r),c=t.memoizedState),(l=Ct||Wu(t,n,l,r,f,c,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,dp(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Je(t.type,l),s.props=u,h=t.pendingProps,f=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ke(c):(c=Ne(n)?xn:ke.current,c=Xn(t,c));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==h||f!==c)&&Hu(t,s,r,c),Ct=!1,f=t.memoizedState,s.state=f,Eo(t,r,s,i);var y=t.memoizedState;l!==h||f!==y||Pe.current||Ct?(typeof v=="function"&&(La(t,n,v,r),y=t.memoizedState),(u=Ct||Wu(t,n,u,r,f,y,c)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Ia(e,t,n,r,o,i)}function Ia(e,t,n,r,i,o){Ip(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Mu(t,n,!1),jt(e,t,o);r=t.stateNode,Sy.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Zn(t,e.child,null,o),t.child=Zn(t,null,l,o)):Se(e,t,l,o),t.memoizedState=r.state,i&&Mu(t,n,!0),t.child}function Vp(e){var t=e.stateNode;t.pendingContext?Lu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Lu(e,t.context,!1),ql(e,t.containerInfo)}function Qu(e,t,n,r,i){return Jn(),Hl(i),t.flags|=256,Se(e,t,n,r),t.child}var Va={dehydrated:null,treeContext:null,retryLane:0};function Ua(e){return{baseLanes:e,cachePool:null,transitions:null}}function Up(e,t,n){var r=t.pendingProps,i=Y.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),U(Y,i&1),e===null)return Na(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ns(s,r,0,null),e=vn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ua(n),t.memoizedState=Va,e):rc(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return jy(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Ht(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Ht(l,o):(o=vn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Ua(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Va,r}return o=e.child,e=o.sibling,r=Ht(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function rc(e,t){return t=ns({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Vi(e,t,n,r){return r!==null&&Hl(r),Zn(t,e.child,null,n),e=rc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jy(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=zs(Error(_(422))),Vi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ns({mode:"visible",children:r.children},i,0,null),o=vn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Zn(t,e.child,null,s),t.child.memoizedState=Ua(s),t.memoizedState=Va,o);if(!(t.mode&1))return Vi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(_(419)),r=zs(o,r,void 0),Vi(e,t,s,r)}if(l=(s&e.childLanes)!==0,Ce||l){if(r=he,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,St(e,i),nt(r,e,i,-1))}return cc(),r=zs(Error(_(421))),Vi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Ry.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Me=Ut(i.nextSibling),ze=t,H=!0,et=null,e!==null&&(Oe[Fe++]=gt,Oe[Fe++]=vt,Oe[Fe++]=wn,gt=e.id,vt=e.overflow,wn=t),t=rc(t,r.children),t.flags|=4096,t)}function Xu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Aa(e.return,t,n)}function Rs(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Op(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Se(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xu(e,n,t);else if(e.tag===19)Xu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(Y,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Rs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_o(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Rs(t,!0,n,null,o);break;case"together":Rs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function no(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Sn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=Ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function by(e,t,n){switch(t.tag){case 3:Vp(t),Jn();break;case 5:hp(t);break;case 1:Ne(t.type)&&ko(t);break;case 4:ql(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;U(bo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?Up(e,t,n):(U(Y,Y.current&1),e=jt(e,t,n),e!==null?e.sibling:null);U(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Op(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,Rp(e,t,n)}return jt(e,t,n)}var Fp,Oa,Wp,Hp;Fp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Oa=function(){};Wp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,fn(ut.current);var o=null;switch(n){case"input":i=la(e,i),r=la(e,r),o=[];break;case"select":i=q({},i,{value:void 0}),r=q({},r,{value:void 0}),o=[];break;case"textarea":i=da(e,i),r=da(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=xo)}fa(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Fr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Fr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&O("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Hp=function(e,t,n,r){n!==r&&(t.flags|=4)};function xr(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ty(e,t,n){var r=t.pendingProps;switch(Wl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return Ne(t.type)&&wo(),ye(t),null;case 3:return r=t.stateNode,er(),F(Pe),F(ke),Xl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ri(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,et!==null&&(Ga(et),et=null))),Oa(e,t),ye(t),null;case 5:Ql(t);var i=fn(Zr.current);if(n=t.type,e!==null&&t.stateNode!=null)Wp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return ye(t),null}if(e=fn(ut.current),Ri(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[lt]=t,r[Xr]=o,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(i=0;i<Tr.length;i++)O(Tr[i],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":su(r,o),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},O("invalid",r);break;case"textarea":lu(r,o),O("invalid",r)}fa(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&zi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&zi(r.textContent,l,e),i=["children",""+l]):Fr.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&O("scroll",r)}switch(n){case"input":_i(r),au(r,o,!0);break;case"textarea":_i(r),cu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=xo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[lt]=t,e[Xr]=r,Fp(e,t,!1,!1),t.stateNode=e;e:{switch(s=pa(n,r),n){case"dialog":O("cancel",e),O("close",e),i=r;break;case"iframe":case"object":case"embed":O("load",e),i=r;break;case"video":case"audio":for(i=0;i<Tr.length;i++)O(Tr[i],e);i=r;break;case"source":O("error",e),i=r;break;case"img":case"image":case"link":O("error",e),O("load",e),i=r;break;case"details":O("toggle",e),i=r;break;case"input":su(e,r),i=la(e,r),O("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=q({},r,{value:void 0}),O("invalid",e);break;case"textarea":lu(e,r),i=da(e,r),O("invalid",e);break;default:i=r}fa(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?wf(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&yf(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Wr(e,c):typeof c=="number"&&Wr(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Fr.hasOwnProperty(o)?c!=null&&o==="onScroll"&&O("scroll",e):c!=null&&_l(e,o,c,s))}switch(n){case"input":_i(e),au(e,r,!1);break;case"textarea":_i(e),cu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$t(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Hn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Hn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=xo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ye(t),null;case 6:if(e&&t.stateNode!=null)Hp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=fn(Zr.current),fn(ut.current),Ri(t)){if(r=t.stateNode,n=t.memoizedProps,r[lt]=t,(o=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:zi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[lt]=t,t.stateNode=r}return ye(t),null;case 13:if(F(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&Me!==null&&t.mode&1&&!(t.flags&128))ap(),Jn(),t.flags|=98560,o=!1;else if(o=Ri(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[lt]=t}else Jn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ye(t),o=!1}else et!==null&&(Ga(et),et=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?le===0&&(le=3):cc())),t.updateQueue!==null&&(t.flags|=4),ye(t),null);case 4:return er(),Oa(e,t),e===null&&qr(t.stateNode.containerInfo),ye(t),null;case 10:return Yl(t.type._context),ye(t),null;case 17:return Ne(t.type)&&wo(),ye(t),null;case 19:if(F(Y),o=t.memoizedState,o===null)return ye(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)xr(o,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=_o(e),s!==null){for(t.flags|=128,xr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(Y,Y.current&1|2),t.child}e=e.sibling}o.tail!==null&&ee()>nr&&(t.flags|=128,r=!0,xr(o,!1),t.lanes=4194304)}else{if(!r)if(e=_o(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!H)return ye(t),null}else 2*ee()-o.renderingStartTime>nr&&n!==1073741824&&(t.flags|=128,r=!0,xr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ee(),t.sibling=null,n=Y.current,U(Y,r?n&1|2:n&1),t):(ye(t),null);case 22:case 23:return lc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Le&1073741824&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Ey(e,t){switch(Wl(t),t.tag){case 1:return Ne(t.type)&&wo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return er(),F(Pe),F(ke),Xl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ql(t),null;case 13:if(F(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(Y),null;case 4:return er(),null;case 10:return Yl(t.type._context),null;case 22:case 23:return lc(),null;case 24:return null;default:return null}}var Ui=!1,xe=!1,_y=typeof WeakSet=="function"?WeakSet:Set,P=null;function In(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function Fa(e,t,n){try{n()}catch(r){X(e,t,r)}}var Ju=!1;function Dy(e,t){if(ba=go,e=Gf(),Ol(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,h=e,f=null;t:for(;;){for(var v;h!==n||i!==0&&h.nodeType!==3||(l=s+i),h!==o||r!==0&&h.nodeType!==3||(c=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(v=h.firstChild)!==null;)f=h,h=v;for(;;){if(h===e)break t;if(f===n&&++u===i&&(l=s),f===o&&++d===r&&(c=s),(v=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=v}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ta={focusedElem:e,selectionRange:n},go=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,S=y.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?x:Je(t.type,x),S);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(k){X(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return y=Ju,Ju=!1,y}function Mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Fa(t,n,o)}i=i.next}while(i!==r)}}function es(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Bp(e){var t=e.alternate;t!==null&&(e.alternate=null,Bp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[lt],delete t[Xr],delete t[Da],delete t[uy],delete t[dy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $p(e){return e.tag===5||e.tag===3||e.tag===4}function Zu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$p(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ha(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xo));else if(r!==4&&(e=e.child,e!==null))for(Ha(e,t,n),e=e.sibling;e!==null;)Ha(e,t,n),e=e.sibling}function Ba(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ba(e,t,n),e=e.sibling;e!==null;)Ba(e,t,n),e=e.sibling}var fe=null,Ze=!1;function Et(e,t,n){for(n=n.child;n!==null;)Yp(e,t,n),n=n.sibling}function Yp(e,t,n){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(Yo,n)}catch{}switch(n.tag){case 5:xe||In(n,t);case 6:var r=fe,i=Ze;fe=null,Et(e,t,n),fe=r,Ze=i,fe!==null&&(Ze?(e=fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(Ze?(e=fe,n=n.stateNode,e.nodeType===8?Cs(e.parentNode,n):e.nodeType===1&&Cs(e,n),Yr(e)):Cs(fe,n.stateNode));break;case 4:r=fe,i=Ze,fe=n.stateNode.containerInfo,Ze=!0,Et(e,t,n),fe=r,Ze=i;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Fa(n,t,s),i=i.next}while(i!==r)}Et(e,t,n);break;case 1:if(!xe&&(In(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){X(n,t,l)}Et(e,t,n);break;case 21:Et(e,t,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,Et(e,t,n),xe=r):Et(e,t,n);break;default:Et(e,t,n)}}function ed(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new _y),t.forEach(function(r){var i=Iy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:fe=l.stateNode,Ze=!1;break e;case 3:fe=l.stateNode.containerInfo,Ze=!0;break e;case 4:fe=l.stateNode.containerInfo,Ze=!0;break e}l=l.return}if(fe===null)throw Error(_(160));Yp(o,s,i),fe=null,Ze=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){X(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Kp(t,e),t=t.sibling}function Kp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qe(t,e),st(e),r&4){try{Mr(3,e,e.return),es(3,e)}catch(x){X(e,e.return,x)}try{Mr(5,e,e.return)}catch(x){X(e,e.return,x)}}break;case 1:qe(t,e),st(e),r&512&&n!==null&&In(n,n.return);break;case 5:if(qe(t,e),st(e),r&512&&n!==null&&In(n,n.return),e.flags&32){var i=e.stateNode;try{Wr(i,"")}catch(x){X(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&mf(i,o),pa(l,s);var u=pa(l,o);for(s=0;s<c.length;s+=2){var d=c[s],h=c[s+1];d==="style"?wf(i,h):d==="dangerouslySetInnerHTML"?yf(i,h):d==="children"?Wr(i,h):_l(i,d,h,u)}switch(l){case"input":ca(i,o);break;case"textarea":gf(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Hn(i,!!o.multiple,v,!1):f!==!!o.multiple&&(o.defaultValue!=null?Hn(i,!!o.multiple,o.defaultValue,!0):Hn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Xr]=o}catch(x){X(e,e.return,x)}}break;case 6:if(qe(t,e),st(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){X(e,e.return,x)}}break;case 3:if(qe(t,e),st(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yr(t.containerInfo)}catch(x){X(e,e.return,x)}break;case 4:qe(t,e),st(e);break;case 13:qe(t,e),st(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(sc=ee())),r&4&&ed(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(xe=(u=xe)||d,qe(t,e),xe=u):qe(t,e),st(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(P=e,d=e.child;d!==null;){for(h=P=d;P!==null;){switch(f=P,v=f.child,f.tag){case 0:case 11:case 14:case 15:Mr(4,f,f.return);break;case 1:In(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){X(r,n,x)}}break;case 5:In(f,f.return);break;case 22:if(f.memoizedState!==null){nd(h);continue}}v!==null?(v.return=f,P=v):nd(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=h.stateNode,c=h.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=xf("display",s))}catch(x){X(e,e.return,x)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(x){X(e,e.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:qe(t,e),st(e),r&4&&ed(e);break;case 21:break;default:qe(t,e),st(e)}}function st(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if($p(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wr(i,""),r.flags&=-33);var o=Zu(e);Ba(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Zu(e);Ha(e,l,s);break;default:throw Error(_(161))}}catch(c){X(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cy(e,t,n){P=e,Gp(e)}function Gp(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ui;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||xe;l=Ui;var u=xe;if(Ui=s,(xe=c)&&!u)for(P=i;P!==null;)s=P,c=s.child,s.tag===22&&s.memoizedState!==null?rd(i):c!==null?(c.return=s,P=c):rd(i);for(;o!==null;)P=o,Gp(o),o=o.sibling;P=i,Ui=l,xe=u}td(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,P=o):td(e)}}function td(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||es(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Je(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Uu(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Uu(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Yr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}xe||t.flags&512&&Wa(t)}catch(f){X(t,t.return,f)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function nd(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function rd(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{es(4,t)}catch(c){X(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){X(t,i,c)}}var o=t.return;try{Wa(t)}catch(c){X(t,o,c)}break;case 5:var s=t.return;try{Wa(t)}catch(c){X(t,s,c)}}}catch(c){X(t,t.return,c)}if(t===e){P=null;break}var l=t.sibling;if(l!==null){l.return=t.return,P=l;break}P=t.return}}var Py=Math.ceil,Po=Tt.ReactCurrentDispatcher,ic=Tt.ReactCurrentOwner,$e=Tt.ReactCurrentBatchConfig,R=0,he=null,ie=null,me=0,Le=0,Vn=Xt(0),le=0,ri=null,Sn=0,ts=0,oc=0,zr=null,De=null,sc=0,nr=1/0,pt=null,No=!1,$a=null,Ft=null,Oi=!1,Lt=null,Ao=0,Rr=0,Ya=null,ro=-1,io=0;function Te(){return R&6?ee():ro!==-1?ro:ro=ee()}function Wt(e){return e.mode&1?R&2&&me!==0?me&-me:fy.transition!==null?(io===0&&(io=Af()),io):(e=V,e!==0||(e=window.event,e=e===void 0?16:Uf(e.type)),e):1}function nt(e,t,n,r){if(50<Rr)throw Rr=0,Ya=null,Error(_(185));hi(e,n,r),(!(R&2)||e!==he)&&(e===he&&(!(R&2)&&(ts|=n),le===4&&Nt(e,me)),Ae(e,r),n===1&&R===0&&!(t.mode&1)&&(nr=ee()+500,Xo&&Jt()))}function Ae(e,t){var n=e.callbackNode;f0(e,t);var r=mo(e,e===he?me:0);if(r===0)n!==null&&hu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&hu(n),t===1)e.tag===0?hy(id.bind(null,e)):ip(id.bind(null,e)),ly(function(){!(R&6)&&Jt()}),n=null;else{switch(Lf(r)){case 1:n=Al;break;case 4:n=Pf;break;case 16:n=po;break;case 536870912:n=Nf;break;default:n=po}n=nm(n,qp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qp(e,t){if(ro=-1,io=0,R&6)throw Error(_(327));var n=e.callbackNode;if(Gn()&&e.callbackNode!==n)return null;var r=mo(e,e===he?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Lo(e,r);else{t=r;var i=R;R|=2;var o=Xp();(he!==e||me!==t)&&(pt=null,nr=ee()+500,gn(e,t));do try{Ly();break}catch(l){Qp(e,l)}while(!0);$l(),Po.current=o,R=i,ie!==null?t=0:(he=null,me=0,t=le)}if(t!==0){if(t===2&&(i=xa(e),i!==0&&(r=i,t=Ka(e,i))),t===1)throw n=ri,gn(e,0),Nt(e,r),Ae(e,ee()),n;if(t===6)Nt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ny(i)&&(t=Lo(e,r),t===2&&(o=xa(e),o!==0&&(r=o,t=Ka(e,o))),t===1))throw n=ri,gn(e,0),Nt(e,r),Ae(e,ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:cn(e,De,pt);break;case 3:if(Nt(e,r),(r&130023424)===r&&(t=sc+500-ee(),10<t)){if(mo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Te(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=_a(cn.bind(null,e,De,pt),t);break}cn(e,De,pt);break;case 4:if(Nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-tt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Py(r/1960))-r,10<r){e.timeoutHandle=_a(cn.bind(null,e,De,pt),r);break}cn(e,De,pt);break;case 5:cn(e,De,pt);break;default:throw Error(_(329))}}}return Ae(e,ee()),e.callbackNode===n?qp.bind(null,e):null}function Ka(e,t){var n=zr;return e.current.memoizedState.isDehydrated&&(gn(e,t).flags|=256),e=Lo(e,t),e!==2&&(t=De,De=n,t!==null&&Ga(t)),e}function Ga(e){De===null?De=e:De.push.apply(De,e)}function Ny(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!rt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nt(e,t){for(t&=~oc,t&=~ts,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),r=1<<n;e[n]=-1,t&=~r}}function id(e){if(R&6)throw Error(_(327));Gn();var t=mo(e,0);if(!(t&1))return Ae(e,ee()),null;var n=Lo(e,t);if(e.tag!==0&&n===2){var r=xa(e);r!==0&&(t=r,n=Ka(e,r))}if(n===1)throw n=ri,gn(e,0),Nt(e,t),Ae(e,ee()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cn(e,De,pt),Ae(e,ee()),null}function ac(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(nr=ee()+500,Xo&&Jt())}}function jn(e){Lt!==null&&Lt.tag===0&&!(R&6)&&Gn();var t=R;R|=1;var n=$e.transition,r=V;try{if($e.transition=null,V=1,e)return e()}finally{V=r,$e.transition=n,R=t,!(R&6)&&Jt()}}function lc(){Le=Vn.current,F(Vn)}function gn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ay(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(Wl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wo();break;case 3:er(),F(Pe),F(ke),Xl();break;case 5:Ql(r);break;case 4:er();break;case 13:F(Y);break;case 19:F(Y);break;case 10:Yl(r.type._context);break;case 22:case 23:lc()}n=n.return}if(he=e,ie=e=Ht(e.current,null),me=Le=t,le=0,ri=null,oc=ts=Sn=0,De=zr=null,hn!==null){for(t=0;t<hn.length;t++)if(n=hn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}hn=null}return e}function Qp(e,t){do{var n=ie;try{if($l(),eo.current=Co,Do){for(var r=G.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Do=!1}if(kn=0,ue=ae=G=null,Lr=!1,ei=0,ic.current=null,n===null||n.return===null){le=1,ri=t,ie=null;break}e:{var o=e,s=n.return,l=n,c=t;if(t=me,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=$u(s);if(v!==null){v.flags&=-257,Yu(v,s,l,o,t),v.mode&1&&Bu(o,u,t),t=v,c=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(c),t.updateQueue=x}else y.add(c);break e}else{if(!(t&1)){Bu(o,u,t),cc();break e}c=Error(_(426))}}else if(H&&l.mode&1){var S=$u(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Yu(S,s,l,o,t),Hl(tr(c,l));break e}}o=c=tr(c,l),le!==4&&(le=2),zr===null?zr=[o]:zr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=Lp(o,c,t);Vu(o,g);break e;case 1:l=c;var m=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ft===null||!Ft.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=Mp(o,l,t);Vu(o,k);break e}}o=o.return}while(o!==null)}Zp(n)}catch(j){t=j,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(!0)}function Xp(){var e=Po.current;return Po.current=Co,e===null?Co:e}function cc(){(le===0||le===3||le===2)&&(le=4),he===null||!(Sn&268435455)&&!(ts&268435455)||Nt(he,me)}function Lo(e,t){var n=R;R|=2;var r=Xp();(he!==e||me!==t)&&(pt=null,gn(e,t));do try{Ay();break}catch(i){Qp(e,i)}while(!0);if($l(),R=n,Po.current=r,ie!==null)throw Error(_(261));return he=null,me=0,le}function Ay(){for(;ie!==null;)Jp(ie)}function Ly(){for(;ie!==null&&!i0();)Jp(ie)}function Jp(e){var t=tm(e.alternate,e,Le);e.memoizedProps=e.pendingProps,t===null?Zp(e):ie=t,ic.current=null}function Zp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ey(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,ie=null;return}}else if(n=Ty(n,t,Le),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);le===0&&(le=5)}function cn(e,t,n){var r=V,i=$e.transition;try{$e.transition=null,V=1,My(e,t,n,r)}finally{$e.transition=i,V=r}return null}function My(e,t,n,r){do Gn();while(Lt!==null);if(R&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(p0(e,o),e===he&&(ie=he=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Oi||(Oi=!0,nm(po,function(){return Gn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=$e.transition,$e.transition=null;var s=V;V=1;var l=R;R|=4,ic.current=null,Dy(e,n),Kp(n,e),ey(Ta),go=!!ba,Ta=ba=null,e.current=n,Cy(n),o0(),R=l,V=s,$e.transition=o}else e.current=n;if(Oi&&(Oi=!1,Lt=e,Ao=i),o=e.pendingLanes,o===0&&(Ft=null),l0(n.stateNode),Ae(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(No)throw No=!1,e=$a,$a=null,e;return Ao&1&&e.tag!==0&&Gn(),o=e.pendingLanes,o&1?e===Ya?Rr++:(Rr=0,Ya=e):Rr=0,Jt(),null}function Gn(){if(Lt!==null){var e=Lf(Ao),t=$e.transition,n=V;try{if($e.transition=null,V=16>e?16:e,Lt===null)var r=!1;else{if(e=Lt,Lt=null,Ao=0,R&6)throw Error(_(331));var i=R;for(R|=4,P=e.current;P!==null;){var o=P,s=o.child;if(P.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(P=u;P!==null;){var d=P;switch(d.tag){case 0:case 11:case 15:Mr(8,d,o)}var h=d.child;if(h!==null)h.return=d,P=h;else for(;P!==null;){d=P;var f=d.sibling,v=d.return;if(Bp(d),d===u){P=null;break}if(f!==null){f.return=v,P=f;break}P=v}}}var y=o.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}P=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,P=s;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Mr(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,P=g;break e}P=o.return}}var m=e.current;for(P=m;P!==null;){s=P;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,P=p;else e:for(s=m;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:es(9,l)}}catch(j){X(l,l.return,j)}if(l===s){P=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,P=k;break e}P=l.return}}if(R=i,Jt(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(Yo,e)}catch{}r=!0}return r}finally{V=n,$e.transition=t}}return!1}function od(e,t,n){t=tr(n,t),t=Lp(e,t,1),e=Ot(e,t,1),t=Te(),e!==null&&(hi(e,1,t),Ae(e,t))}function X(e,t,n){if(e.tag===3)od(e,e,n);else for(;t!==null;){if(t.tag===3){od(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ft===null||!Ft.has(r))){e=tr(n,e),e=Mp(t,e,1),t=Ot(t,e,1),e=Te(),t!==null&&(hi(t,1,e),Ae(t,e));break}}t=t.return}}function zy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Te(),e.pingedLanes|=e.suspendedLanes&n,he===e&&(me&n)===n&&(le===4||le===3&&(me&130023424)===me&&500>ee()-sc?gn(e,0):oc|=n),Ae(e,t)}function em(e,t){t===0&&(e.mode&1?(t=Pi,Pi<<=1,!(Pi&130023424)&&(Pi=4194304)):t=1);var n=Te();e=St(e,t),e!==null&&(hi(e,t,n),Ae(e,n))}function Ry(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),em(e,n)}function Iy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),em(e,n)}var tm;tm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pe.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,by(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,H&&t.flags&1048576&&op(t,jo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;no(e,t),e=t.pendingProps;var i=Xn(t,ke.current);Kn(t,n),i=Zl(null,t,r,e,i,n);var o=ec();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(o=!0,ko(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Gl(t),i.updater=Zo,t.stateNode=i,i._reactInternals=t,Ma(t,r,e,n),t=Ia(null,t,r,!0,o,n)):(t.tag=0,H&&o&&Fl(t),Se(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(no(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Uy(r),e=Je(r,e),i){case 0:t=Ra(null,t,r,e,n);break e;case 1:t=qu(null,t,r,e,n);break e;case 11:t=Ku(null,t,r,e,n);break e;case 14:t=Gu(null,t,r,Je(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Je(r,i),Ra(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Je(r,i),qu(e,t,r,i,n);case 3:e:{if(Vp(t),e===null)throw Error(_(387));r=t.pendingProps,o=t.memoizedState,i=o.element,dp(e,t),Eo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=tr(Error(_(423)),t),t=Qu(e,t,r,n,i);break e}else if(r!==i){i=tr(Error(_(424)),t),t=Qu(e,t,r,n,i);break e}else for(Me=Ut(t.stateNode.containerInfo.firstChild),ze=t,H=!0,et=null,n=cp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jn(),r===i){t=jt(e,t,n);break e}Se(e,t,r,n)}t=t.child}return t;case 5:return hp(t),e===null&&Na(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Ea(r,i)?s=null:o!==null&&Ea(r,o)&&(t.flags|=32),Ip(e,t),Se(e,t,s,n),t.child;case 6:return e===null&&Na(t),null;case 13:return Up(e,t,n);case 4:return ql(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Zn(t,null,r,n):Se(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Je(r,i),Ku(e,t,r,i,n);case 7:return Se(e,t,t.pendingProps,n),t.child;case 8:return Se(e,t,t.pendingProps.children,n),t.child;case 12:return Se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,U(bo,r._currentValue),r._currentValue=s,o!==null)if(rt(o.value,s)){if(o.children===i.children&&!Pe.current){t=jt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=yt(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Aa(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(_(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Aa(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Se(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Kn(t,n),i=Ke(i),r=r(i),t.flags|=1,Se(e,t,r,n),t.child;case 14:return r=t.type,i=Je(r,t.pendingProps),i=Je(r.type,i),Gu(e,t,r,i,n);case 15:return zp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Je(r,i),no(e,t),t.tag=1,Ne(r)?(e=!0,ko(t)):e=!1,Kn(t,n),Ap(t,r,i),Ma(t,r,i,n),Ia(null,t,r,!0,e,n);case 19:return Op(e,t,n);case 22:return Rp(e,t,n)}throw Error(_(156,t.tag))};function nm(e,t){return Cf(e,t)}function Vy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,t,n,r){return new Vy(e,t,n,r)}function uc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Uy(e){if(typeof e=="function")return uc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Cl)return 11;if(e===Pl)return 14}return 2}function Ht(e,t){var n=e.alternate;return n===null?(n=We(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function oo(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")uc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Dn:return vn(n.children,i,o,t);case Dl:s=8,i|=8;break;case ia:return e=We(12,n,t,i|2),e.elementType=ia,e.lanes=o,e;case oa:return e=We(13,n,t,i),e.elementType=oa,e.lanes=o,e;case sa:return e=We(19,n,t,i),e.elementType=sa,e.lanes=o,e;case hf:return ns(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case uf:s=10;break e;case df:s=9;break e;case Cl:s=11;break e;case Pl:s=14;break e;case Dt:s=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=We(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function vn(e,t,n,r){return e=We(7,e,r,t),e.lanes=n,e}function ns(e,t,n,r){return e=We(22,e,r,t),e.elementType=hf,e.lanes=n,e.stateNode={isHidden:!1},e}function Is(e,t,n){return e=We(6,e,null,t),e.lanes=n,e}function Vs(e,t,n){return t=We(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Oy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ys(0),this.expirationTimes=ys(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ys(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function dc(e,t,n,r,i,o,s,l,c){return e=new Oy(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=We(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gl(o),e}function Fy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_n,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function rm(e){if(!e)return Yt;e=e._reactInternals;e:{if(Tn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Ne(n))return rp(e,n,t)}return t}function im(e,t,n,r,i,o,s,l,c){return e=dc(n,r,!0,e,i,o,s,l,c),e.context=rm(null),n=e.current,r=Te(),i=Wt(n),o=yt(r,i),o.callback=t??null,Ot(n,o,i),e.current.lanes=i,hi(e,i,r),Ae(e,r),e}function rs(e,t,n,r){var i=t.current,o=Te(),s=Wt(i);return n=rm(n),t.context===null?t.context=n:t.pendingContext=n,t=yt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ot(i,t,s),e!==null&&(nt(e,i,s,o),Zi(e,i,s)),s}function Mo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hc(e,t){sd(e,t),(e=e.alternate)&&sd(e,t)}function Wy(){return null}var om=typeof reportError=="function"?reportError:function(e){console.error(e)};function fc(e){this._internalRoot=e}is.prototype.render=fc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));rs(e,t,null,null)};is.prototype.unmount=fc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jn(function(){rs(null,e,null,null)}),t[kt]=null}};function is(e){this._internalRoot=e}is.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pt.length&&t!==0&&t<Pt[n].priority;n++);Pt.splice(n,0,e),n===0&&Vf(e)}};function pc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function os(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ad(){}function Hy(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Mo(s);o.call(u)}}var s=im(t,r,e,0,null,!1,!1,"",ad);return e._reactRootContainer=s,e[kt]=s.current,qr(e.nodeType===8?e.parentNode:e),jn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Mo(c);l.call(u)}}var c=dc(e,0,!1,null,null,!1,!1,"",ad);return e._reactRootContainer=c,e[kt]=c.current,qr(e.nodeType===8?e.parentNode:e),jn(function(){rs(t,c,n,r)}),c}function ss(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var c=Mo(s);l.call(c)}}rs(t,s,e,i)}else s=Hy(n,t,e,i,r);return Mo(s)}Mf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=br(t.pendingLanes);n!==0&&(Ll(t,n|1),Ae(t,ee()),!(R&6)&&(nr=ee()+500,Jt()))}break;case 13:jn(function(){var r=St(e,1);if(r!==null){var i=Te();nt(r,e,1,i)}}),hc(e,1)}};Ml=function(e){if(e.tag===13){var t=St(e,134217728);if(t!==null){var n=Te();nt(t,e,134217728,n)}hc(e,134217728)}};zf=function(e){if(e.tag===13){var t=Wt(e),n=St(e,t);if(n!==null){var r=Te();nt(n,e,t,r)}hc(e,t)}};Rf=function(){return V};If=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};ga=function(e,t,n){switch(t){case"input":if(ca(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Qo(r);if(!i)throw Error(_(90));pf(r),ca(r,i)}}}break;case"textarea":gf(e,n);break;case"select":t=n.value,t!=null&&Hn(e,!!n.multiple,t,!1)}};jf=ac;bf=jn;var By={usingClientEntryPoint:!1,Events:[pi,An,Qo,kf,Sf,ac]},wr={findFiberByHostInstance:dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$y={bundleType:wr.bundleType,version:wr.version,rendererPackageName:wr.rendererPackageName,rendererConfig:wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_f(e),e===null?null:e.stateNode},findFiberByHostInstance:wr.findFiberByHostInstance||Wy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fi.isDisabled&&Fi.supportsFiber)try{Yo=Fi.inject($y),ct=Fi}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=By;Ie.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pc(t))throw Error(_(200));return Fy(e,t,null,n)};Ie.createRoot=function(e,t){if(!pc(e))throw Error(_(299));var n=!1,r="",i=om;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=dc(e,1,!1,null,null,n,!1,r,i),e[kt]=t.current,qr(e.nodeType===8?e.parentNode:e),new fc(t)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=_f(t),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return jn(e)};Ie.hydrate=function(e,t,n){if(!os(t))throw Error(_(200));return ss(null,e,t,!0,n)};Ie.hydrateRoot=function(e,t,n){if(!pc(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=om;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=im(t,null,e,1,n??null,i,!1,o,s),e[kt]=t.current,qr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new is(t)};Ie.render=function(e,t,n){if(!os(t))throw Error(_(200));return ss(null,e,t,!1,n)};Ie.unmountComponentAtNode=function(e){if(!os(e))throw Error(_(40));return e._reactRootContainer?(jn(function(){ss(null,null,e,!1,function(){e._reactRootContainer=null,e[kt]=null})}),!0):!1};Ie.unstable_batchedUpdates=ac;Ie.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!os(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return ss(e,t,n,!1,r)};Ie.version="18.3.1-next-f1338f8080-20240426";function sm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sm)}catch(e){console.error(e)}}sm(),sf.exports=Ie;var Yy=sf.exports,am,ld=Yy;am=ld.createRoot,ld.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ii.apply(null,arguments)}var Mt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Mt||(Mt={}));const cd="popstate";function Ky(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:l}=r.location;return qa("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:zo(i)}return qy(t,n,null,e)}function te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function lm(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Gy(){return Math.random().toString(36).substr(2,8)}function ud(e,t){return{usr:e.state,key:e.key,idx:t}}function qa(e,t,n,r){return n===void 0&&(n=null),ii({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ar(t):t,{state:n,key:t&&t.key||r||Gy()})}function zo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ar(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function qy(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,l=Mt.Pop,c=null,u=d();u==null&&(u=0,s.replaceState(ii({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function h(){l=Mt.Pop;let S=d(),g=S==null?null:S-u;u=S,c&&c({action:l,location:x.location,delta:g})}function f(S,g){l=Mt.Push;let m=qa(x.location,S,g);u=d()+1;let p=ud(m,u),k=x.createHref(m);try{s.pushState(p,"",k)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(k)}o&&c&&c({action:l,location:x.location,delta:1})}function v(S,g){l=Mt.Replace;let m=qa(x.location,S,g);u=d();let p=ud(m,u),k=x.createHref(m);s.replaceState(p,"",k),o&&c&&c({action:l,location:x.location,delta:0})}function y(S){let g=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof S=="string"?S:zo(S);return m=m.replace(/ $/,"%20"),te(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let x={get action(){return l},get location(){return e(i,s)},listen(S){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(cd,h),c=S,()=>{i.removeEventListener(cd,h),c=null}},createHref(S){return t(i,S)},createURL:y,encodeLocation(S){let g=y(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:v,go(S){return s.go(S)}};return x}var dd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(dd||(dd={}));function Qy(e,t,n){return n===void 0&&(n="/"),Xy(e,t,n)}function Xy(e,t,n,r){let i=typeof t=="string"?ar(t):t,o=mc(i.pathname||"/",n);if(o==null)return null;let s=cm(e);Jy(s);let l=null,c=ux(o);for(let u=0;l==null&&u<s.length;++u)l=ax(s[u],c);return l}function cm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};c.relativePath.startsWith("/")&&(te(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Bt([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(te(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),cm(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:ox(u,o.index),routesMeta:d})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let c of um(o.path))i(o,s,c)}),t}function um(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=um(r.join("/")),l=[];return l.push(...s.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...s),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Jy(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:sx(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Zy=/^:[\w-]+$/,ex=3,tx=2,nx=1,rx=10,ix=-2,hd=e=>e==="*";function ox(e,t){let n=e.split("/"),r=n.length;return n.some(hd)&&(r+=ix),t&&(r+=tx),n.filter(i=>!hd(i)).reduce((i,o)=>i+(Zy.test(o)?ex:o===""?nx:rx),r)}function sx(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function ax(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",h=lx({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),f=c.route;if(!h)return null;Object.assign(i,h.params),s.push({params:i,pathname:Bt([o,h.pathname]),pathnameBase:fx(Bt([o,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(o=Bt([o,h.pathnameBase]))}return s}function lx(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=cx(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,h)=>{let{paramName:f,isOptional:v}=d;if(f==="*"){let x=l[h]||"";s=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const y=l[h];return v&&!y?u[f]=void 0:u[f]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function cx(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),lm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function ux(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return lm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function mc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function dx(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ar(e):e,o;return n?(n=dm(n),n.startsWith("/")?o=fd(n.substring(1),"/"):o=fd(n,t)):o=t,{pathname:o,search:px(r),hash:mx(i)}}function fd(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Us(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function hx(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function gc(e,t){let n=hx(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function vc(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ar(e):(i=ii({},e),te(!i.pathname||!i.pathname.includes("?"),Us("?","pathname","search",i)),te(!i.pathname||!i.pathname.includes("#"),Us("#","pathname","hash",i)),te(!i.search||!i.search.includes("#"),Us("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=n;else{let h=t.length-1;if(!r&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),h-=1;i.pathname=f.join("/")}l=h>=0?t[h]:"/"}let c=dx(i,l),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const dm=e=>e.replace(/\/\/+/g,"/"),Bt=e=>dm(e.join("/")),fx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),px=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,mx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function gx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const hm=["post","put","patch","delete"];new Set(hm);const vx=["get",...hm];new Set(vx);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oi(){return oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oi.apply(null,arguments)}const yc=w.createContext(null),yx=w.createContext(null),Zt=w.createContext(null),as=w.createContext(null),en=w.createContext({outlet:null,matches:[],isDataRoute:!1}),fm=w.createContext(null);function xx(e,t){let{relative:n}=t===void 0?{}:t;lr()||te(!1);let{basename:r,navigator:i}=w.useContext(Zt),{hash:o,pathname:s,search:l}=gm(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:Bt([r,s])),i.createHref({pathname:c,search:l,hash:o})}function lr(){return w.useContext(as)!=null}function tn(){return lr()||te(!1),w.useContext(as).location}function pm(e){w.useContext(Zt).static||w.useLayoutEffect(e)}function mm(){let{isDataRoute:e}=w.useContext(en);return e?Ax():wx()}function wx(){lr()||te(!1);let e=w.useContext(yc),{basename:t,future:n,navigator:r}=w.useContext(Zt),{matches:i}=w.useContext(en),{pathname:o}=tn(),s=JSON.stringify(gc(i,n.v7_relativeSplatPath)),l=w.useRef(!1);return pm(()=>{l.current=!0}),w.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let h=vc(u,JSON.parse(s),o,d.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Bt([t,h.pathname])),(d.replace?r.replace:r.push)(h,d.state,d)},[t,r,s,o,e])}function gm(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(Zt),{matches:i}=w.useContext(en),{pathname:o}=tn(),s=JSON.stringify(gc(i,r.v7_relativeSplatPath));return w.useMemo(()=>vc(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function kx(e,t){return Sx(e,t)}function Sx(e,t,n,r){lr()||te(!1);let{navigator:i}=w.useContext(Zt),{matches:o}=w.useContext(en),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let u=tn(),d;if(t){var h;let S=typeof t=="string"?ar(t):t;c==="/"||(h=S.pathname)!=null&&h.startsWith(c)||te(!1),d=S}else d=u;let f=d.pathname||"/",v=f;if(c!=="/"){let S=c.replace(/^\//,"").split("/");v="/"+f.replace(/^\//,"").split("/").slice(S.length).join("/")}let y=Qy(e,{pathname:v}),x=_x(y&&y.map(S=>Object.assign({},S,{params:Object.assign({},l,S.params),pathname:Bt([c,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?c:Bt([c,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n,r);return t&&x?w.createElement(as.Provider,{value:{location:oi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Mt.Pop}},x):x}function jx(){let e=Nx(),t=gx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,null)}const bx=w.createElement(jx,null);class Tx extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(en.Provider,{value:this.props.routeContext},w.createElement(fm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ex(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(yc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(en.Provider,{value:t},r)}function _x(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=s.findIndex(h=>h.route.id&&(l==null?void 0:l[h.route.id])!==void 0);d>=0||te(!1),s=s.slice(0,Math.min(s.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let h=s[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=d),h.route.id){let{loaderData:f,errors:v}=n,y=h.route.loader&&f[h.route.id]===void 0&&(!v||v[h.route.id]===void 0);if(h.route.lazy||y){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,h,f)=>{let v,y=!1,x=null,S=null;n&&(v=l&&h.route.id?l[h.route.id]:void 0,x=h.route.errorElement||bx,c&&(u<0&&f===0?(Lx("route-fallback"),y=!0,S=null):u===f&&(y=!0,S=h.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,f+1)),m=()=>{let p;return v?p=x:y?p=S:h.route.Component?p=w.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=d,w.createElement(Ex,{match:h,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:p})};return n&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?w.createElement(Tx,{location:n.location,revalidation:n.revalidation,component:x,error:v,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var vm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(vm||{}),ym=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ym||{});function Dx(e){let t=w.useContext(yc);return t||te(!1),t}function Cx(e){let t=w.useContext(yx);return t||te(!1),t}function Px(e){let t=w.useContext(en);return t||te(!1),t}function xm(e){let t=Px(),n=t.matches[t.matches.length-1];return n.route.id||te(!1),n.route.id}function Nx(){var e;let t=w.useContext(fm),n=Cx(),r=xm();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Ax(){let{router:e}=Dx(vm.UseNavigateStable),t=xm(ym.UseNavigateStable),n=w.useRef(!1);return pm(()=>{n.current=!0}),w.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,oi({fromRouteId:t},o)))},[e,t])}const pd={};function Lx(e,t,n){pd[e]||(pd[e]=!0)}function Mx(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Wi(e){let{to:t,replace:n,state:r,relative:i}=e;lr()||te(!1);let{future:o,static:s}=w.useContext(Zt),{matches:l}=w.useContext(en),{pathname:c}=tn(),u=mm(),d=vc(t,gc(l,o.v7_relativeSplatPath),c,i==="path"),h=JSON.stringify(d);return w.useEffect(()=>u(JSON.parse(h),{replace:n,state:r,relative:i}),[u,h,i,n,r]),null}function oe(e){te(!1)}function zx(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Mt.Pop,navigator:o,static:s=!1,future:l}=e;lr()&&te(!1);let c=t.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:c,navigator:o,static:s,future:oi({v7_relativeSplatPath:!1},l)}),[c,l,o,s]);typeof r=="string"&&(r=ar(r));let{pathname:d="/",search:h="",hash:f="",state:v=null,key:y="default"}=r,x=w.useMemo(()=>{let S=mc(d,c);return S==null?null:{location:{pathname:S,search:h,hash:f,state:v,key:y},navigationType:i}},[c,d,h,f,v,y,i]);return x==null?null:w.createElement(Zt.Provider,{value:u},w.createElement(as.Provider,{children:n,value:x}))}function Rx(e){let{children:t,location:n}=e;return kx(Qa(t),n)}new Promise(()=>{});function Qa(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let o=[...t,i];if(r.type===w.Fragment){n.push.apply(n,Qa(r.props.children,o));return}r.type!==oe&&te(!1),!r.props.index||!r.props.children||te(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Qa(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xa(){return Xa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xa.apply(null,arguments)}function Ix(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Vx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ux(e,t){return e.button===0&&(!t||t==="_self")&&!Vx(e)}const Ox=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Fx="6";try{window.__reactRouterVersion=Fx}catch{}const Wx="startTransition",md=zv[Wx];function Hx(e){let{basename:t,children:n,future:r,window:i}=e,o=w.useRef();o.current==null&&(o.current=Ky({window:i,v5Compat:!0}));let s=o.current,[l,c]=w.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=w.useCallback(h=>{u&&md?md(()=>c(h)):c(h)},[c,u]);return w.useLayoutEffect(()=>s.listen(d),[s,d]),w.useEffect(()=>Mx(r),[r]),w.createElement(zx,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const Bx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$x=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,I=w.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:l,target:c,to:u,preventScrollReset:d,viewTransition:h}=t,f=Ix(t,Ox),{basename:v}=w.useContext(Zt),y,x=!1;if(typeof u=="string"&&$x.test(u)&&(y=u,Bx))try{let p=new URL(window.location.href),k=u.startsWith("//")?new URL(p.protocol+u):new URL(u),j=mc(k.pathname,v);k.origin===p.origin&&j!=null?u=j+k.search+k.hash:x=!0}catch{}let S=xx(u,{relative:i}),g=Yx(u,{replace:s,state:l,target:c,preventScrollReset:d,relative:i,viewTransition:h});function m(p){r&&r(p),p.defaultPrevented||g(p)}return w.createElement("a",Xa({},f,{href:y||S,onClick:x||o?r:m,ref:n,target:c}))});var gd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(gd||(gd={}));var vd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(vd||(vd={}));function Yx(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:l}=t===void 0?{}:t,c=mm(),u=tn(),d=gm(e,{relative:s});return w.useCallback(h=>{if(Ux(h,n)){h.preventDefault();let f=r!==void 0?r:zo(u)===zo(d);c(e,{replace:f,state:i,preventScrollReset:o,relative:s,viewTransition:l})}},[u,c,d,r,i,n,e,o,s,l])}const xc=w.createContext({});function wc(e){const t=w.useRef(null);return t.current===null&&(t.current=e()),t.current}const wm=typeof window<"u",km=wm?w.useLayoutEffect:w.useEffect,ls=w.createContext(null);function kc(e,t){e.indexOf(t)===-1&&e.push(t)}function Sc(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const ht=(e,t,n)=>n>t?t:n<e?e:n;let jc=()=>{};const bt={},Sm=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function jm(e){return typeof e=="object"&&e!==null}const bm=e=>/^0[^.\s]+$/u.test(e);function bc(e){let t;return()=>(t===void 0&&(t=e()),t)}const Ye=e=>e,Kx=(e,t)=>n=>t(e(n)),gi=(...e)=>e.reduce(Kx),si=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r};class Tc{constructor(){this.subscriptions=[]}add(t){return kc(this.subscriptions,t),()=>Sc(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const xt=e=>e*1e3,He=e=>e/1e3;function Tm(e,t){return t?e*(1e3/t):0}const Em=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Gx=1e-7,qx=12;function Qx(e,t,n,r,i){let o,s,l=0;do s=t+(n-t)/2,o=Em(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>Gx&&++l<qx);return s}function vi(e,t,n,r){if(e===t&&n===r)return Ye;const i=o=>Qx(o,0,1,e,n);return o=>o===0||o===1?o:Em(i(o),t,r)}const _m=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Dm=e=>t=>1-e(1-t),Cm=vi(.33,1.53,.69,.99),Ec=Dm(Cm),Pm=_m(Ec),Nm=e=>(e*=2)<1?.5*Ec(e):.5*(2-Math.pow(2,-10*(e-1))),_c=e=>1-Math.sin(Math.acos(e)),Am=Dm(_c),Lm=_m(_c),Xx=vi(.42,0,1,1),Jx=vi(0,0,.58,1),Mm=vi(.42,0,.58,1),Zx=e=>Array.isArray(e)&&typeof e[0]!="number",zm=e=>Array.isArray(e)&&typeof e[0]=="number",ew={linear:Ye,easeIn:Xx,easeInOut:Mm,easeOut:Jx,circIn:_c,circInOut:Lm,circOut:Am,backIn:Ec,backInOut:Pm,backOut:Cm,anticipate:Nm},tw=e=>typeof e=="string",yd=e=>{if(zm(e)){jc(e.length===4);const[t,n,r,i]=e;return vi(t,n,r,i)}else if(tw(e))return ew[e];return e},Hi=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function nw(e,t){let n=new Set,r=new Set,i=!1,o=!1;const s=new WeakSet;let l={delta:0,timestamp:0,isProcessing:!1};function c(d){s.has(d)&&(u.schedule(d),e()),d(l)}const u={schedule:(d,h=!1,f=!1)=>{const y=f&&i?n:r;return h&&s.add(d),y.has(d)||y.add(d),d},cancel:d=>{r.delete(d),s.delete(d)},process:d=>{if(l=d,i){o=!0;return}i=!0,[n,r]=[r,n],n.forEach(c),n.clear(),i=!1,o&&(o=!1,u.process(d))}};return u}const rw=40;function Rm(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=Hi.reduce((p,k)=>(p[k]=nw(o),p),{}),{setup:l,read:c,resolveKeyframes:u,preUpdate:d,update:h,preRender:f,render:v,postRender:y}=s,x=()=>{const p=bt.useManualTiming?i.timestamp:performance.now();n=!1,bt.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(p-i.timestamp,rw),1)),i.timestamp=p,i.isProcessing=!0,l.process(i),c.process(i),u.process(i),d.process(i),h.process(i),f.process(i),v.process(i),y.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(x))},S=()=>{n=!0,r=!0,i.isProcessing||e(x)};return{schedule:Hi.reduce((p,k)=>{const j=s[k];return p[k]=(T,E=!1,b=!1)=>(n||S(),j.schedule(T,E,b)),p},{}),cancel:p=>{for(let k=0;k<Hi.length;k++)s[Hi[k]].cancel(p)},state:i,steps:s}}const{schedule:W,cancel:Kt,state:pe,steps:Os}=Rm(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ye,!0);let so;function iw(){so=void 0}const je={now:()=>(so===void 0&&je.set(pe.isProcessing||bt.useManualTiming?pe.timestamp:performance.now()),so),set:e=>{so=e,queueMicrotask(iw)}},Im=e=>t=>typeof t=="string"&&t.startsWith(e),Vm=Im("--"),ow=Im("var(--"),Dc=e=>ow(e)?sw.test(e.split("/*")[0].trim()):!1,sw=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function xd(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const cr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ai={...cr,transform:e=>ht(0,1,e)},Bi={...cr,default:1},Ir=e=>Math.round(e*1e5)/1e5,Cc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function aw(e){return e==null}const lw=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Pc=(e,t)=>n=>!!(typeof n=="string"&&lw.test(n)&&n.startsWith(e)||t&&!aw(n)&&Object.prototype.hasOwnProperty.call(n,t)),Um=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,s,l]=r.match(Cc);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:l!==void 0?parseFloat(l):1}},cw=e=>ht(0,255,e),Fs={...cr,transform:e=>Math.round(cw(e))},pn={test:Pc("rgb","red"),parse:Um("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Fs.transform(e)+", "+Fs.transform(t)+", "+Fs.transform(n)+", "+Ir(ai.transform(r))+")"};function uw(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Ja={test:Pc("#"),parse:uw,transform:pn.transform},yi=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),_t=yi("deg"),dt=yi("%"),C=yi("px"),dw=yi("vh"),hw=yi("vw"),wd={...dt,parse:e=>dt.parse(e)/100,transform:e=>dt.transform(e*100)},Un={test:Pc("hsl","hue"),parse:Um("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+dt.transform(Ir(t))+", "+dt.transform(Ir(n))+", "+Ir(ai.transform(r))+")"},re={test:e=>pn.test(e)||Ja.test(e)||Un.test(e),parse:e=>pn.test(e)?pn.parse(e):Un.test(e)?Un.parse(e):Ja.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?pn.transform(e):Un.transform(e),getAnimatableNone:e=>{const t=re.parse(e);return t.alpha=0,re.transform(t)}},fw=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function pw(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Cc))==null?void 0:t.length)||0)+(((n=e.match(fw))==null?void 0:n.length)||0)>0}const Om="number",Fm="color",mw="var",gw="var(",kd="${}",vw=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function li(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const l=t.replace(vw,c=>(re.test(c)?(r.color.push(o),i.push(Fm),n.push(re.parse(c))):c.startsWith(gw)?(r.var.push(o),i.push(mw),n.push(c)):(r.number.push(o),i.push(Om),n.push(parseFloat(c))),++o,kd)).split(kd);return{values:n,split:l,indexes:r,types:i}}function Wm(e){return li(e).values}function Hm(e){const{split:t,types:n}=li(e),r=t.length;return i=>{let o="";for(let s=0;s<r;s++)if(o+=t[s],i[s]!==void 0){const l=n[s];l===Om?o+=Ir(i[s]):l===Fm?o+=re.transform(i[s]):o+=i[s]}return o}}const yw=e=>typeof e=="number"?0:re.test(e)?re.getAnimatableNone(e):e;function xw(e){const t=Wm(e);return Hm(e)(t.map(yw))}const Gt={test:pw,parse:Wm,createTransformer:Hm,getAnimatableNone:xw};function Ws(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ww({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;i=Ws(c,l,e+1/3),o=Ws(c,l,e),s=Ws(c,l,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}function Ro(e,t){return n=>n>0?t:e}const K=(e,t,n)=>e+(t-e)*n,Hs=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},kw=[Ja,pn,Un],Sw=e=>kw.find(t=>t.test(e));function Sd(e){const t=Sw(e);if(!t)return!1;let n=t.parse(e);return t===Un&&(n=ww(n)),n}const jd=(e,t)=>{const n=Sd(e),r=Sd(t);if(!n||!r)return Ro(e,t);const i={...n};return o=>(i.red=Hs(n.red,r.red,o),i.green=Hs(n.green,r.green,o),i.blue=Hs(n.blue,r.blue,o),i.alpha=K(n.alpha,r.alpha,o),pn.transform(i))},Za=new Set(["none","hidden"]);function jw(e,t){return Za.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function bw(e,t){return n=>K(e,t,n)}function Nc(e){return typeof e=="number"?bw:typeof e=="string"?Dc(e)?Ro:re.test(e)?jd:_w:Array.isArray(e)?Bm:typeof e=="object"?re.test(e)?jd:Tw:Ro}function Bm(e,t){const n=[...e],r=n.length,i=e.map((o,s)=>Nc(o)(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}}function Tw(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Nc(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function Ew(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const o=t.types[i],s=e.indexes[o][r[o]],l=e.values[s]??0;n[i]=l,r[o]++}return n}const _w=(e,t)=>{const n=Gt.createTransformer(t),r=li(e),i=li(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Za.has(e)&&!i.values.length||Za.has(t)&&!r.values.length?jw(e,t):gi(Bm(Ew(r,i),i.values),n):Ro(e,t)};function $m(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?K(e,t,n):Nc(e)(e,t)}const Dw=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>W.update(t,n),stop:()=>Kt(t),now:()=>pe.isProcessing?pe.timestamp:je.now()}},Ym=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let o=0;o<i;o++)r+=Math.round(e(o/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Io=2e4;function Ac(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Io;)t+=n,r=e.next(t);return t>=Io?1/0:t}function Cw(e,t=100,n){const r=n({...e,keyframes:[0,t]}),i=Math.min(Ac(r),Io);return{type:"keyframes",ease:o=>r.next(i*o).value/t,duration:He(i)}}const Pw=5;function Km(e,t,n){const r=Math.max(t-Pw,0);return Tm(n-e(r),t-r)}const Q={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Bs=.001;function Nw({duration:e=Q.duration,bounce:t=Q.bounce,velocity:n=Q.velocity,mass:r=Q.mass}){let i,o,s=1-t;s=ht(Q.minDamping,Q.maxDamping,s),e=ht(Q.minDuration,Q.maxDuration,He(e)),s<1?(i=u=>{const d=u*s,h=d*e,f=d-n,v=el(u,s),y=Math.exp(-h);return Bs-f/v*y},o=u=>{const h=u*s*e,f=h*n+n,v=Math.pow(s,2)*Math.pow(u,2)*e,y=Math.exp(-h),x=el(Math.pow(u,2),s);return(-i(u)+Bs>0?-1:1)*((f-v)*y)/x}):(i=u=>{const d=Math.exp(-u*e),h=(u-n)*e+1;return-Bs+d*h},o=u=>{const d=Math.exp(-u*e),h=(n-u)*(e*e);return d*h});const l=5/e,c=Lw(i,o,l);if(e=xt(e),isNaN(c))return{stiffness:Q.stiffness,damping:Q.damping,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const Aw=12;function Lw(e,t,n){let r=n;for(let i=1;i<Aw;i++)r=r-e(r)/t(r);return r}function el(e,t){return e*Math.sqrt(1-t*t)}const Mw=["duration","bounce"],zw=["stiffness","damping","mass"];function bd(e,t){return t.some(n=>e[n]!==void 0)}function Rw(e){let t={velocity:Q.velocity,stiffness:Q.stiffness,damping:Q.damping,mass:Q.mass,isResolvedFromDuration:!1,...e};if(!bd(e,zw)&&bd(e,Mw))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,o=2*ht(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:Q.mass,stiffness:i,damping:o}}else{const n=Nw(e);t={...t,...n,mass:Q.mass},t.isResolvedFromDuration=!0}return t}function Vo(e=Q.visualDuration,t=Q.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const o=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],l={done:!1,value:o},{stiffness:c,damping:u,mass:d,duration:h,velocity:f,isResolvedFromDuration:v}=Rw({...n,velocity:-He(n.velocity||0)}),y=f||0,x=u/(2*Math.sqrt(c*d)),S=s-o,g=He(Math.sqrt(c/d)),m=Math.abs(S)<5;r||(r=m?Q.restSpeed.granular:Q.restSpeed.default),i||(i=m?Q.restDelta.granular:Q.restDelta.default);let p;if(x<1){const j=el(g,x);p=T=>{const E=Math.exp(-x*g*T);return s-E*((y+x*g*S)/j*Math.sin(j*T)+S*Math.cos(j*T))}}else if(x===1)p=j=>s-Math.exp(-g*j)*(S+(y+g*S)*j);else{const j=g*Math.sqrt(x*x-1);p=T=>{const E=Math.exp(-x*g*T),b=Math.min(j*T,300);return s-E*((y+x*g*S)*Math.sinh(b)+j*S*Math.cosh(b))/j}}const k={calculatedDuration:v&&h||null,next:j=>{const T=p(j);if(v)l.done=j>=h;else{let E=j===0?y:0;x<1&&(E=j===0?xt(y):Km(p,j,T));const b=Math.abs(E)<=r,L=Math.abs(s-T)<=i;l.done=b&&L}return l.value=l.done?s:T,l},toString:()=>{const j=Math.min(Ac(k),Io),T=Ym(E=>k.next(j*E).value,j,30);return j+"ms "+T},toTransition:()=>{}};return k}Vo.applyToOptions=e=>{const t=Cw(e,100,Vo);return e.ease=t.ease,e.duration=xt(t.duration),e.type="keyframes",e};function tl({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:l,max:c,restDelta:u=.5,restSpeed:d}){const h=e[0],f={done:!1,value:h},v=b=>l!==void 0&&b<l||c!==void 0&&b>c,y=b=>l===void 0?c:c===void 0||Math.abs(l-b)<Math.abs(c-b)?l:c;let x=n*t;const S=h+x,g=s===void 0?S:s(S);g!==S&&(x=g-h);const m=b=>-x*Math.exp(-b/r),p=b=>g+m(b),k=b=>{const L=m(b),N=p(b);f.done=Math.abs(L)<=u,f.value=f.done?g:N};let j,T;const E=b=>{v(f.value)&&(j=b,T=Vo({keyframes:[f.value,y(f.value)],velocity:Km(p,b,f.value),damping:i,stiffness:o,restDelta:u,restSpeed:d}))};return E(0),{calculatedDuration:null,next:b=>{let L=!1;return!T&&j===void 0&&(L=!0,k(b),E(b)),j!==void 0&&b>=j?T.next(b-j):(!L&&k(b),f)}}}function Iw(e,t,n){const r=[],i=n||bt.mix||$m,o=e.length-1;for(let s=0;s<o;s++){let l=i(e[s],e[s+1]);if(t){const c=Array.isArray(t)?t[s]||Ye:t;l=gi(c,l)}r.push(l)}return r}function Vw(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(jc(o===t.length),o===1)return()=>t[0];if(o===2&&t[0]===t[1])return()=>t[1];const s=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const l=Iw(t,r,i),c=l.length,u=d=>{if(s&&d<e[0])return t[0];let h=0;if(c>1)for(;h<e.length-2&&!(d<e[h+1]);h++);const f=si(e[h],e[h+1],d);return l[h](f)};return n?d=>u(ht(e[0],e[o-1],d)):u}function Uw(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=si(0,t,r);e.push(K(n,1,i))}}function Ow(e){const t=[0];return Uw(t,e.length-1),t}function Fw(e,t){return e.map(n=>n*t)}function Ww(e,t){return e.map(()=>t||Mm).splice(0,e.length-1)}function Vr({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=Zx(r)?r.map(yd):yd(r),o={done:!1,value:t[0]},s=Fw(n&&n.length===t.length?n:Ow(t),e),l=Vw(s,t,{ease:Array.isArray(i)?i:Ww(t,i)});return{calculatedDuration:e,next:c=>(o.value=l(c),o.done=c>=e,o)}}const Hw=e=>e!==null;function Lc(e,{repeat:t,repeatType:n="loop"},r,i=1){const o=e.filter(Hw),l=i<0||t&&n!=="loop"&&t%2===1?0:o.length-1;return!l||r===void 0?o[l]:r}const Bw={decay:tl,inertia:tl,tween:Vr,keyframes:Vr,spring:Vo};function Gm(e){typeof e.type=="string"&&(e.type=Bw[e.type])}class Mc{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const $w=e=>e/100;class zc extends Mc{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,i;const{motionValue:n}=this.options;n&&n.updatedAt!==je.now()&&this.tick(je.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(r=this.options).onStop)==null||i.call(r))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;Gm(t);const{type:n=Vr,repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:s=0}=t;let{keyframes:l}=t;const c=n||Vr;c!==Vr&&typeof l[0]!="number"&&(this.mixKeyframes=gi($w,$m(l[0],l[1])),l=[0,100]);const u=c({...t,keyframes:l});o==="mirror"&&(this.mirroredGenerator=c({...t,keyframes:[...l].reverse(),velocity:-s})),u.calculatedDuration===null&&(u.calculatedDuration=Ac(u));const{calculatedDuration:d}=u;this.calculatedDuration=d,this.resolvedDuration=d+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=u}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:r,totalDuration:i,mixKeyframes:o,mirroredGenerator:s,resolvedDuration:l,calculatedDuration:c}=this;if(this.startTime===null)return r.next(0);const{delay:u=0,keyframes:d,repeat:h,repeatType:f,repeatDelay:v,type:y,onUpdate:x,finalKeyframe:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-i/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const g=this.currentTime-u*(this.playbackSpeed>=0?1:-1),m=this.playbackSpeed>=0?g<0:g>i;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let p=this.currentTime,k=r;if(h){const b=Math.min(this.currentTime,i)/l;let L=Math.floor(b),N=b%1;!N&&b>=1&&(N=1),N===1&&L--,L=Math.min(L,h+1),!!(L%2)&&(f==="reverse"?(N=1-N,v&&(N-=v/l)):f==="mirror"&&(k=s)),p=ht(0,1,N)*l}const j=m?{done:!1,value:d[0]}:k.next(p);o&&(j.value=o(j.value));let{done:T}=j;!m&&c!==null&&(T=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const E=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return E&&y!==tl&&(j.value=Lc(d,this.options,S,this.speed)),x&&x(j.value),E&&this.finish(),j}then(t,n){return this.finished.then(t,n)}get duration(){return He(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+He(t)}get time(){return He(this.currentTime)}set time(t){var n;t=xt(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(je.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=He(this.currentTime))}play(){var i,o;if(this.isStopped)return;const{driver:t=Dw,startTime:n}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),(o=(i=this.options).onPlay)==null||o.call(i);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(je.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function Yw(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const mn=e=>e*180/Math.PI,nl=e=>{const t=mn(Math.atan2(e[1],e[0]));return rl(t)},Kw={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:nl,rotateZ:nl,skewX:e=>mn(Math.atan(e[1])),skewY:e=>mn(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},rl=e=>(e=e%360,e<0&&(e+=360),e),Td=nl,Ed=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),_d=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Gw={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Ed,scaleY:_d,scale:e=>(Ed(e)+_d(e))/2,rotateX:e=>rl(mn(Math.atan2(e[6],e[5]))),rotateY:e=>rl(mn(Math.atan2(-e[2],e[0]))),rotateZ:Td,rotate:Td,skewX:e=>mn(Math.atan(e[4])),skewY:e=>mn(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function il(e){return e.includes("scale")?1:0}function ol(e,t){if(!e||e==="none")return il(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=Gw,i=n;else{const l=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Kw,i=l}if(!i)return il(t);const o=r[t],s=i[1].split(",").map(Qw);return typeof o=="function"?o(s):s[o]}const qw=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return ol(n,t)};function Qw(e){return parseFloat(e.trim())}const ur=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],dr=new Set(ur),Dd=e=>e===cr||e===C,Xw=new Set(["x","y","z"]),Jw=ur.filter(e=>!Xw.has(e));function Zw(e){const t=[];return Jw.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const zt={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>ol(t,"x"),y:(e,{transform:t})=>ol(t,"y")};zt.translateX=zt.x;zt.translateY=zt.y;const yn=new Set;let sl=!1,al=!1,ll=!1;function qm(){if(al){const e=Array.from(yn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=Zw(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,s])=>{var l;(l=r.getValue(o))==null||l.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}al=!1,sl=!1,yn.forEach(e=>e.complete(ll)),yn.clear()}function Qm(){yn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(al=!0)})}function e1(){ll=!0,Qm(),qm(),ll=!1}class Rc{constructor(t,n,r,i,o,s=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=s}scheduleResolve(){this.state="scheduled",this.isAsync?(yn.add(this),sl||(sl=!0,W.read(Qm),W.resolveKeyframes(qm))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;if(t[0]===null){const o=i==null?void 0:i.get(),s=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const l=r.readValue(n,s);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=s),i&&o===void 0&&i.set(t[0])}Yw(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),yn.delete(this)}cancel(){this.state==="scheduled"&&(yn.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const t1=e=>e.startsWith("--");function n1(e,t,n){t1(t)?e.style.setProperty(t,n):e.style[t]=n}const r1=bc(()=>window.ScrollTimeline!==void 0),i1={};function o1(e,t){const n=bc(e);return()=>i1[t]??n()}const Xm=o1(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Er=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Cd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Er([0,.65,.55,1]),circOut:Er([.55,0,1,.45]),backIn:Er([.31,.01,.66,-.59]),backOut:Er([.33,1.53,.69,.99])};function Jm(e,t){if(e)return typeof e=="function"?Xm()?Ym(e,t):"ease-out":zm(e)?Er(e):Array.isArray(e)?e.map(n=>Jm(n,t)||Cd.easeOut):Cd[e]}function s1(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:l="easeOut",times:c}={},u=void 0){const d={[t]:n};c&&(d.offset=c);const h=Jm(l,i);Array.isArray(h)&&(d.easing=h);const f={delay:r,duration:i,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"};return u&&(f.pseudoElement=u),e.animate(d,f)}function Zm(e){return typeof e=="function"&&"applyToOptions"in e}function a1({type:e,...t}){return Zm(e)&&Xm()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class l1 extends Mc{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:r,keyframes:i,pseudoElement:o,allowFlatten:s=!1,finalKeyframe:l,onComplete:c}=t;this.isPseudoElement=!!o,this.allowFlatten=s,this.options=t,jc(typeof t.type!="string");const u=a1(t);this.animation=s1(n,r,i,u,o),u.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!o){const d=Lc(i,this.options,l,this.speed);this.updateMotionValue?this.updateMotionValue(d):n1(n,r,d),this.animation.cancel()}c==null||c(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,n;this.isPseudoElement||(n=(t=this.animation).commitStyles)==null||n.call(t)}get duration(){var n,r;const t=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return He(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+He(t)}get time(){return He(Number(this.animation.currentTime)||0)}set time(t){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=xt(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,observe:n}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&r1()?(this.animation.timeline=t,Ye):n(this)}}const eg={anticipate:Nm,backInOut:Pm,circInOut:Lm};function c1(e){return e in eg}function u1(e){typeof e.ease=="string"&&c1(e.ease)&&(e.ease=eg[e.ease])}const $s=10;class d1 extends l1{constructor(t){u1(t),Gm(t),super(t),t.startTime!==void 0&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:r,onComplete:i,element:o,...s}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const l=new zc({...s,autoplay:!1}),c=Math.max($s,je.now()-this.startTime),u=ht(0,$s,c-$s);n.setWithVelocity(l.sample(Math.max(0,c-u)).value,l.sample(c).value,u),l.stop()}}const Pd=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Gt.test(e)||e==="0")&&!e.startsWith("url("));function h1(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function f1(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],s=Pd(i,t),l=Pd(o,t);return!s||!l?!1:h1(e)||(n==="spring"||Zm(n))&&r}function cl(e){e.duration=0,e.type="keyframes"}const p1=new Set(["opacity","clipPath","filter","transform"]),m1=bc(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function g1(e){var d;const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:o,type:s}=e;if(!(((d=t==null?void 0:t.owner)==null?void 0:d.current)instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:u}=t.owner.getProps();return m1()&&n&&p1.has(n)&&(n!=="transform"||!u)&&!c&&!r&&i!=="mirror"&&o!==0&&s!=="inertia"}const v1=40;class y1 extends Mc{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s="loop",keyframes:l,name:c,motionValue:u,element:d,...h}){var y;super(),this.stop=()=>{var x,S;this._animation&&(this._animation.stop(),(x=this.stopTimeline)==null||x.call(this)),(S=this.keyframeResolver)==null||S.cancel()},this.createdAt=je.now();const f={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:s,name:c,motionValue:u,element:d,...h},v=(d==null?void 0:d.KeyframeResolver)||Rc;this.keyframeResolver=new v(l,(x,S,g)=>this.onKeyframesResolved(x,S,f,!g),c,u,d),(y=this.keyframeResolver)==null||y.scheduleResolve()}onKeyframesResolved(t,n,r,i){this.keyframeResolver=void 0;const{name:o,type:s,velocity:l,delay:c,isHandoff:u,onUpdate:d}=r;this.resolvedAt=je.now(),f1(t,o,s,l)||((bt.instantAnimations||!c)&&(d==null||d(Lc(t,r,n))),t[0]=t[t.length-1],cl(r),r.repeat=0);const f={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>v1?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:t},v=!u&&g1(f)?new d1({...f,element:f.motionValue.owner.current}):new zc(f);v.finished.then(()=>this.notifyFinished()).catch(Ye),this.pendingTimeline&&(this.stopTimeline=v.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=v}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),e1()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}const x1=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function w1(e){const t=x1.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function tg(e,t,n=1){const[r,i]=w1(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return Sm(s)?parseFloat(s):s}return Dc(i)?tg(i,t,n+1):i}function Ic(e,t){return(e==null?void 0:e[t])??(e==null?void 0:e.default)??e}const k1={type:"spring",stiffness:500,damping:25,restSpeed:10},S1=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),j1={type:"keyframes",duration:.8},b1={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},T1=(e,{keyframes:t})=>t.length>2?j1:dr.has(e)?e.startsWith("scale")?S1(t[1]):k1:b1;function E1({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:l,from:c,elapsed:u,...d}){return!!Object.keys(d).length}const _1=e=>e!==null;function D1(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(_1),o=t&&n!=="loop"&&t%2===1?0:i.length-1;return i[o]}function ng(e,t,n,r=0,i=1){const o=Array.from(e).sort((u,d)=>u.sortNodePosition(d)).indexOf(t),s=e.size,l=(s-1)*r;return typeof n=="function"?n(o,s):i===1?o*r:l-o*r}const Vc=(e,t,n,r={},i,o)=>s=>{const l=Ic(r,e)||{},c=l.delay||r.delay||0;let{elapsed:u=0}=r;u=u-xt(c);const d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-u,onUpdate:f=>{t.set(f),l.onUpdate&&l.onUpdate(f)},onComplete:()=>{s(),l.onComplete&&l.onComplete()},name:e,motionValue:t,element:o?void 0:i};E1(l)||Object.assign(d,T1(e,d)),d.duration&&(d.duration=xt(d.duration)),d.repeatDelay&&(d.repeatDelay=xt(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let h=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(cl(d),d.delay===0&&(h=!0)),(bt.instantAnimations||bt.skipAnimations)&&(h=!0,cl(d),d.delay=0),d.allowFlatten=!l.type&&!l.ease,h&&!o&&t.get()!==void 0){const f=D1(d.keyframes,l);if(f!==void 0){W.update(()=>{d.onUpdate(f),d.onComplete()});return}}return l.isSync?new zc(d):new y1(d)},rg=new Set(["width","height","top","left","right","bottom",...ur]),Nd=30,C1=e=>!isNaN(parseFloat(e));class P1{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var o;const i=je.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((o=this.events.change)==null||o.notify(this.current),this.dependents))for(const s of this.dependents)s.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=je.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=C1(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Tc);const r=this.events[t].add(n);return t==="change"?()=>{r(),W.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=je.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Nd)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Nd);return Tm(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function rr(e,t){return new P1(e,t)}function Ad(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Uc(e,t,n,r){if(typeof t=="function"){const[i,o]=Ad(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=Ad(r);t=t(n!==void 0?n:e.custom,i,o)}return t}function qn(e,t,n){const r=e.getProps();return Uc(r,t,n!==void 0?n:r.custom,e)}const ul=e=>Array.isArray(e);function N1(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,rr(n))}function A1(e){return ul(e)?e[e.length-1]||0:e}function L1(e,t){const n=qn(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const s in o){const l=A1(o[s]);N1(e,s,l)}}const we=e=>!!(e&&e.getVelocity);function M1(e){return!!(we(e)&&e.add)}function dl(e,t){const n=e.getValue("willChange");if(M1(n))return n.add(t);if(!n&&bt.WillChange){const r=new bt.WillChange("auto");e.addValue("willChange",r),r.add(t)}}function Oc(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const z1="framerAppearId",ig="data-"+Oc(z1);function og(e){return e.props[ig]}function R1({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function sg(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:s,...l}=t;r&&(o=r);const c=[],u=i&&e.animationState&&e.animationState.getState()[i];for(const d in l){const h=e.getValue(d,e.latestValues[d]??null),f=l[d];if(f===void 0||u&&R1(u,d))continue;const v={delay:n,...Ic(o||{},d)},y=h.get();if(y!==void 0&&!h.isAnimating&&!Array.isArray(f)&&f===y&&!v.velocity)continue;let x=!1;if(window.MotionHandoffAnimation){const g=og(e);if(g){const m=window.MotionHandoffAnimation(g,d,W);m!==null&&(v.startTime=m,x=!0)}}dl(e,d),h.start(Vc(d,h,f,e.shouldReduceMotion&&rg.has(d)?{type:!1}:v,e,x));const S=h.animation;S&&c.push(S)}return s&&Promise.all(c).then(()=>{W.update(()=>{s&&L1(e,s)})}),c}function hl(e,t,n={}){var c;const r=qn(e,t,n.type==="exit"?(c=e.presenceContext)==null?void 0:c.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(sg(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:h,staggerDirection:f}=i;return I1(e,t,u,d,h,f,n)}:()=>Promise.resolve(),{when:l}=i;if(l){const[u,d]=l==="beforeChildren"?[o,s]:[s,o];return u().then(()=>d())}else return Promise.all([o(),s(n.delay)])}function I1(e,t,n=0,r=0,i=0,o=1,s){const l=[];for(const c of e.variantChildren)c.notify("AnimationStart",t),l.push(hl(c,t,{...s,delay:n+(typeof r=="function"?0:r)+ng(e.variantChildren,c,r,i,o)}).then(()=>c.notify("AnimationComplete",t)));return Promise.all(l)}function V1(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>hl(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=hl(e,t,n);else{const i=typeof t=="function"?qn(e,t,n.custom):t;r=Promise.all(sg(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const U1={test:e=>e==="auto",parse:e=>e},ag=e=>t=>t.test(e),lg=[cr,C,dt,_t,hw,dw,U1],Ld=e=>lg.find(ag(e));function O1(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||bm(e):!0}const F1=new Set(["brightness","contrast","saturate","opacity"]);function W1(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Cc)||[];if(!r)return e;const i=n.replace(r,"");let o=F1.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const H1=/\b([a-z-]*)\(.*?\)/gu,fl={...Gt,getAnimatableNone:e=>{const t=e.match(H1);return t?t.map(W1).join(" "):e}},Md={...cr,transform:Math.round},B1={rotate:_t,rotateX:_t,rotateY:_t,rotateZ:_t,scale:Bi,scaleX:Bi,scaleY:Bi,scaleZ:Bi,skew:_t,skewX:_t,skewY:_t,distance:C,translateX:C,translateY:C,translateZ:C,x:C,y:C,z:C,perspective:C,transformPerspective:C,opacity:ai,originX:wd,originY:wd,originZ:C},Fc={borderWidth:C,borderTopWidth:C,borderRightWidth:C,borderBottomWidth:C,borderLeftWidth:C,borderRadius:C,radius:C,borderTopLeftRadius:C,borderTopRightRadius:C,borderBottomRightRadius:C,borderBottomLeftRadius:C,width:C,maxWidth:C,height:C,maxHeight:C,top:C,right:C,bottom:C,left:C,inset:C,insetBlock:C,insetBlockStart:C,insetBlockEnd:C,insetInline:C,insetInlineStart:C,insetInlineEnd:C,padding:C,paddingTop:C,paddingRight:C,paddingBottom:C,paddingLeft:C,paddingBlock:C,paddingBlockStart:C,paddingBlockEnd:C,paddingInline:C,paddingInlineStart:C,paddingInlineEnd:C,margin:C,marginTop:C,marginRight:C,marginBottom:C,marginLeft:C,marginBlock:C,marginBlockStart:C,marginBlockEnd:C,marginInline:C,marginInlineStart:C,marginInlineEnd:C,backgroundPositionX:C,backgroundPositionY:C,...B1,zIndex:Md,fillOpacity:ai,strokeOpacity:ai,numOctaves:Md},$1={...Fc,color:re,backgroundColor:re,outlineColor:re,fill:re,stroke:re,borderColor:re,borderTopColor:re,borderRightColor:re,borderBottomColor:re,borderLeftColor:re,filter:fl,WebkitFilter:fl},cg=e=>$1[e];function ug(e,t){let n=cg(e);return n!==fl&&(n=Gt),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Y1=new Set(["auto","none","0"]);function K1(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!Y1.has(o)&&li(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=ug(n,i)}class G1 extends Rc{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let d=0;d<t.length;d++){let h=t[d];if(typeof h=="string"&&(h=h.trim(),Dc(h))){const f=tg(h,n.current);f!==void 0&&(t[d]=f),d===t.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!rg.has(r)||t.length!==2)return;const[i,o]=t,s=Ld(i),l=Ld(o),c=xd(i),u=xd(o);if(c!==u&&zt[r]){this.needsMeasurement=!0;return}if(s!==l)if(Dd(s)&&Dd(l))for(let d=0;d<t.length;d++){const h=t[d];typeof h=="string"&&(t[d]=parseFloat(h))}else zt[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)(t[i]===null||O1(t[i]))&&r.push(i);r.length&&K1(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=zt[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var l;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const i=t.getValue(n);i&&i.jump(this.measuredOrigin,!1);const o=r.length-1,s=r[o];r[o]=zt[n](t.measureViewportBox(),window.getComputedStyle(t.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),(l=this.removedTransforms)!=null&&l.length&&this.removedTransforms.forEach(([c,u])=>{t.getValue(c).set(u)}),this.resolveNoneKeyframes()}}function q1(e,t,n){if(e instanceof EventTarget)return[e];if(typeof e=="string"){let r=document;const i=(n==null?void 0:n[e])??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e)}const dg=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function hg(e){return jm(e)&&"offsetHeight"in e}const{schedule:Wc}=Rm(queueMicrotask,!1),Xe={x:!1,y:!1};function fg(){return Xe.x||Xe.y}function Q1(e){return e==="x"||e==="y"?Xe[e]?null:(Xe[e]=!0,()=>{Xe[e]=!1}):Xe.x||Xe.y?null:(Xe.x=Xe.y=!0,()=>{Xe.x=Xe.y=!1})}function pg(e,t){const n=q1(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function zd(e){return!(e.pointerType==="touch"||fg())}function X1(e,t,n={}){const[r,i,o]=pg(e,n),s=l=>{if(!zd(l))return;const{target:c}=l,u=t(c,l);if(typeof u!="function"||!c)return;const d=h=>{zd(h)&&(u(h),c.removeEventListener("pointerleave",d))};c.addEventListener("pointerleave",d,i)};return r.forEach(l=>{l.addEventListener("pointerenter",s,i)}),o}const mg=(e,t)=>t?e===t?!0:mg(e,t.parentElement):!1,Hc=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,J1=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function gg(e){return J1.has(e.tagName)||e.isContentEditable===!0}const ao=new WeakSet;function Rd(e){return t=>{t.key==="Enter"&&e(t)}}function Ys(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const Z1=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=Rd(()=>{if(ao.has(n))return;Ys(n,"down");const i=Rd(()=>{Ys(n,"up")}),o=()=>Ys(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",o,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function Id(e){return Hc(e)&&!fg()}function ek(e,t,n={}){const[r,i,o]=pg(e,n),s=l=>{const c=l.currentTarget;if(!Id(l))return;ao.add(c);const u=t(c,l),d=(v,y)=>{window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",f),ao.has(c)&&ao.delete(c),Id(v)&&typeof u=="function"&&u(v,{success:y})},h=v=>{d(v,c===window||c===document||n.useGlobalTarget||mg(c,v.target))},f=v=>{d(v,!1)};window.addEventListener("pointerup",h,i),window.addEventListener("pointercancel",f,i)};return r.forEach(l=>{(n.useGlobalTarget?window:l).addEventListener("pointerdown",s,i),hg(l)&&(l.addEventListener("focus",u=>Z1(u,i)),!gg(l)&&!l.hasAttribute("tabindex")&&(l.tabIndex=0))}),o}function vg(e){return jm(e)&&"ownerSVGElement"in e}function tk(e){return vg(e)&&e.tagName==="svg"}const nk=[...lg,re,Gt],rk=e=>nk.find(ag(e)),Vd=()=>({translate:0,scale:1,origin:0,originPoint:0}),On=()=>({x:Vd(),y:Vd()}),Ud=()=>({min:0,max:0}),se=()=>({x:Ud(),y:Ud()}),Uo={current:null},Bc={current:!1},ik=typeof window<"u";function yg(){if(Bc.current=!0,!!ik)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Uo.current=e.matches;e.addEventListener("change",t),t()}else Uo.current=!1}const ok=new WeakMap;function cs(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function ci(e){return typeof e=="string"||Array.isArray(e)}const $c=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Yc=["initial",...$c];function us(e){return cs(e.animate)||Yc.some(t=>ci(e[t]))}function xg(e){return!!(us(e)||e.variants)}function sk(e,t,n){for(const r in t){const i=t[r],o=n[r];if(we(i))e.addValue(r,i);else if(we(o))e.addValue(r,rr(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const s=e.getValue(r);s.liveStyle===!0?s.jump(i):s.hasAnimated||s.set(i)}else{const s=e.getStaticValue(r);e.addValue(r,rr(s!==void 0?s:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Od=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Oo={};function wg(e){Oo=e}function ak(){return Oo}class lk{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:s},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Rc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const f=je.now();this.renderScheduledAt<f&&(this.renderScheduledAt=f,W.render(this.render,!1,!0))};const{latestValues:c,renderState:u}=s;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=us(n),this.isVariantNode=xg(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...h}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in h){const v=h[f];c[f]!==void 0&&we(v)&&v.set(c[f])}}mount(t){var n;this.current=t,ok.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,i)=>this.bindToMotionValue(i,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Bc.current||yg(),this.shouldReduceMotion=Uo.current),(n=this.parent)==null||n.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var t;this.projection&&this.projection.unmount(),Kt(this.notifyUpdate),Kt(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=dr.has(t);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&W.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let o;typeof window<"u"&&window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Oo){const n=Oo[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):se()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Od.length;r++){const i=Od[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,s=t[o];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=sk(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=rr(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(Sm(r)||bm(r))?r=parseFloat(r):!rk(r)&&Gt.test(n)&&(r=ug(t,n)),this.setBaseTarget(t,we(r)?r.get():r)),we(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var o;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const s=Uc(this.props,n,(o=this.presenceContext)==null?void 0:o.custom);s&&(r=s[t])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!we(i)?i:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Tc),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){Wc.render(this.render)}}class nn{constructor(t){this.isMounted=!1,this.node=t}update(){}}class kg extends lk{constructor(){super(...arguments),this.KeyframeResolver=G1}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const r=t.style;return r?r[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;we(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function Sg({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function ck({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function uk(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Ks(e){return e===void 0||e===1}function pl({scale:e,scaleX:t,scaleY:n}){return!Ks(e)||!Ks(t)||!Ks(n)}function un(e){return pl(e)||jg(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function jg(e){return Fd(e.x)||Fd(e.y)}function Fd(e){return e&&e!=="0%"}function Fo(e,t,n){const r=e-n,i=t*r;return n+i}function Wd(e,t,n,r,i){return i!==void 0&&(e=Fo(e,i,r)),Fo(e,n,r)+t}function ml(e,t=0,n=1,r,i){e.min=Wd(e.min,t,n,r,i),e.max=Wd(e.max,t,n,r,i)}function bg(e,{x:t,y:n}){ml(e.x,t.translate,t.scale,t.originPoint),ml(e.y,n.translate,n.scale,n.originPoint)}const Hd=.999999999999,Bd=1.0000000000001;function dk(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let l=0;l<i;l++){o=n[l],s=o.projectionDelta;const{visualElement:c}=o.options;c&&c.props.style&&c.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&Wn(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,bg(e,s)),r&&un(o.latestValues)&&Wn(e,o.latestValues))}t.x<Bd&&t.x>Hd&&(t.x=1),t.y<Bd&&t.y>Hd&&(t.y=1)}function Fn(e,t){e.min=e.min+t,e.max=e.max+t}function $d(e,t,n,r,i=.5){const o=K(e.min,e.max,i);ml(e,t,n,o,r)}function Wn(e,t){$d(e.x,t.x,t.scaleX,t.scale,t.originX),$d(e.y,t.y,t.scaleY,t.scale,t.originY)}function Tg(e,t){return Sg(uk(e.getBoundingClientRect(),t))}function hk(e,t,n){const r=Tg(e,n),{scroll:i}=t;return i&&(Fn(r.x,i.offset.x),Fn(r.y,i.offset.y)),r}const fk={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},pk=ur.length;function mk(e,t,n){let r="",i=!0;for(let o=0;o<pk;o++){const s=ur[o],l=e[s];if(l===void 0)continue;let c=!0;if(typeof l=="number"?c=l===(s.startsWith("scale")?1:0):c=parseFloat(l)===0,!c||n){const u=dg(l,Fc[s]);if(!c){i=!1;const d=fk[s]||s;r+=`${d}(${u}) `}n&&(t[s]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Kc(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let s=!1,l=!1;for(const c in t){const u=t[c];if(dr.has(c)){s=!0;continue}else if(Vm(c)){i[c]=u;continue}else{const d=dg(u,Fc[c]);c.startsWith("origin")?(l=!0,o[c]=d):r[c]=d}}if(t.transform||(s||n?r.transform=mk(t,e.transform,n):r.transform&&(r.transform="none")),l){const{originX:c="50%",originY:u="50%",originZ:d=0}=o;r.transformOrigin=`${c} ${u} ${d}`}}function Eg(e,{style:t,vars:n},r,i){const o=e.style;let s;for(s in t)o[s]=t[s];i==null||i.applyProjectionStyles(o,r);for(s in n)o.setProperty(s,n[s])}function Yd(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const kr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(C.test(e))e=parseFloat(e);else return e;const n=Yd(e,t.target.x),r=Yd(e,t.target.y);return`${n}% ${r}%`}},gk={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Gt.parse(e);if(i.length>5)return r;const o=Gt.createTransformer(e),s=typeof i[0]!="number"?1:0,l=n.x.scale*t.x,c=n.y.scale*t.y;i[0+s]/=l,i[1+s]/=c;const u=K(l,c,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),o(i)}},gl={borderRadius:{...kr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:kr,borderTopRightRadius:kr,borderBottomLeftRadius:kr,borderBottomRightRadius:kr,boxShadow:gk};function _g(e,{layout:t,layoutId:n}){return dr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!gl[e]||e==="opacity")}function Gc(e,t,n){var s;const r=e.style,i=t==null?void 0:t.style,o={};if(!r)return o;for(const l in r)(we(r[l])||i&&we(i[l])||_g(l,e)||((s=n==null?void 0:n.getValue(l))==null?void 0:s.liveStyle)!==void 0)&&(o[l]=r[l]);return o}function vk(e){return window.getComputedStyle(e)}class yk extends kg{constructor(){super(...arguments),this.type="html",this.renderInstance=Eg}readValueFromInstance(t,n){var r;if(dr.has(n))return(r=this.projection)!=null&&r.isProjecting?il(n):qw(t,n);{const i=vk(t),o=(Vm(n)?i.getPropertyValue(n):i[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Tg(t,n)}build(t,n,r){Kc(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Gc(t,n,r)}}const xk={offset:"stroke-dashoffset",array:"stroke-dasharray"},wk={offset:"strokeDashoffset",array:"strokeDasharray"};function kk(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?xk:wk;e[o.offset]=C.transform(-r);const s=C.transform(t),l=C.transform(n);e[o.array]=`${s} ${l}`}const Sk=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Dg(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:o=1,pathOffset:s=0,...l},c,u,d){if(Kc(e,l,u),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:h,style:f}=e;h.transform&&(f.transform=h.transform,delete h.transform),(f.transform||h.transformOrigin)&&(f.transformOrigin=h.transformOrigin??"50% 50%",delete h.transformOrigin),f.transform&&(f.transformBox=(d==null?void 0:d.transformBox)??"fill-box",delete h.transformBox);for(const v of Sk)h[v]!==void 0&&(f[v]=h[v],delete h[v]);t!==void 0&&(h.x=t),n!==void 0&&(h.y=n),r!==void 0&&(h.scale=r),i!==void 0&&kk(h,i,o,s,!1)}const Cg=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Pg=e=>typeof e=="string"&&e.toLowerCase()==="svg";function jk(e,t,n,r){Eg(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Cg.has(i)?i:Oc(i),t.attrs[i])}function Ng(e,t,n){const r=Gc(e,t,n);for(const i in e)if(we(e[i])||we(t[i])){const o=ur.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}class bk extends kg{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=se}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(dr.has(n)){const r=cg(n);return r&&r.default||0}return n=Cg.has(n)?n:Oc(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Ng(t,n,r)}build(t,n,r){Dg(t,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(t,n,r,i){jk(t,n,r,i)}mount(t){this.isSVGTag=Pg(t.tagName),super.mount(t)}}const Tk=Yc.length;function Ag(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Ag(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<Tk;n++){const r=Yc[n],i=e.props[r];(ci(i)||i===!1)&&(t[r]=i)}return t}function Lg(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const Ek=[...$c].reverse(),_k=$c.length;function Dk(e){return t=>Promise.all(t.map(({animation:n,options:r})=>V1(e,n,r)))}function Ck(e){let t=Dk(e),n=Kd(),r=!0;const i=c=>(u,d)=>{var f;const h=qn(e,d,c==="exit"?(f=e.presenceContext)==null?void 0:f.custom:void 0);if(h){const{transition:v,transitionEnd:y,...x}=h;u={...u,...x,...y}}return u};function o(c){t=c(e)}function s(c){const{props:u}=e,d=Ag(e.parent)||{},h=[],f=new Set;let v={},y=1/0;for(let S=0;S<_k;S++){const g=Ek[S],m=n[g],p=u[g]!==void 0?u[g]:d[g],k=ci(p),j=g===c?m.isActive:null;j===!1&&(y=S);let T=p===d[g]&&p!==u[g]&&k;if(T&&r&&e.manuallyAnimateOnMount&&(T=!1),m.protectedKeys={...v},!m.isActive&&j===null||!p&&!m.prevProp||cs(p)||typeof p=="boolean")continue;const E=Pk(m.prevProp,p);let b=E||g===c&&m.isActive&&!T&&k||S>y&&k,L=!1;const N=Array.isArray(p)?p:[p];let J=N.reduce(i(g),{});j===!1&&(J={});const{prevResolvedValues:ot={}}=m,rn={...ot,...J},hr=Z=>{b=!0,f.has(Z)&&(L=!0,f.delete(Z)),m.needsAnimating[Z]=!0;const D=e.getValue(Z);D&&(D.liveStyle=!1)};for(const Z in rn){const D=J[Z],A=ot[Z];if(v.hasOwnProperty(Z))continue;let M=!1;ul(D)&&ul(A)?M=!Lg(D,A):M=D!==A,M?D!=null?hr(Z):f.add(Z):D!==void 0&&f.has(Z)?hr(Z):m.protectedKeys[Z]=!0}m.prevProp=p,m.prevResolvedValues=J,m.isActive&&(v={...v,...J}),r&&e.blockInitialAnimation&&(b=!1);const ki=T&&E;b&&(!ki||L)&&h.push(...N.map(Z=>{const D={type:g};if(typeof Z=="string"&&r&&!ki&&e.manuallyAnimateOnMount&&e.parent){const{parent:A}=e,M=qn(A,Z);if(A.enteringChildren&&M){const{delayChildren:$}=M.transition||{};D.delay=ng(A.enteringChildren,e,$)}}return{animation:Z,options:D}}))}if(f.size){const S={};if(typeof u.initial!="boolean"){const g=qn(e,Array.isArray(u.initial)?u.initial[0]:u.initial);g&&g.transition&&(S.transition=g.transition)}f.forEach(g=>{const m=e.getBaseTarget(g),p=e.getValue(g);p&&(p.liveStyle=!0),S[g]=m??null}),h.push({animation:S})}let x=!!h.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(x=!1),r=!1,x?t(h):Promise.resolve()}function l(c,u){var h;if(n[c].isActive===u)return Promise.resolve();(h=e.variantChildren)==null||h.forEach(f=>{var v;return(v=f.animationState)==null?void 0:v.setActive(c,u)}),n[c].isActive=u;const d=s(c);for(const f in n)n[f].protectedKeys={};return d}return{animateChanges:s,setActive:l,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Kd()}}}function Pk(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Lg(t,e):!1}function an(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Kd(){return{animate:an(!0),whileInView:an(),whileHover:an(),whileTap:an(),whileDrag:an(),whileFocus:an(),exit:an()}}const Mg=1e-4,Nk=1-Mg,Ak=1+Mg,zg=.01,Lk=0-zg,Mk=0+zg;function be(e){return e.max-e.min}function zk(e,t,n){return Math.abs(e-t)<=n}function Gd(e,t,n,r=.5){e.origin=r,e.originPoint=K(t.min,t.max,e.origin),e.scale=be(n)/be(t),e.translate=K(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Nk&&e.scale<=Ak||isNaN(e.scale))&&(e.scale=1),(e.translate>=Lk&&e.translate<=Mk||isNaN(e.translate))&&(e.translate=0)}function Ur(e,t,n,r){Gd(e.x,t.x,n.x,r?r.originX:void 0),Gd(e.y,t.y,n.y,r?r.originY:void 0)}function qd(e,t,n){e.min=n.min+t.min,e.max=e.min+be(t)}function Rk(e,t,n){qd(e.x,t.x,n.x),qd(e.y,t.y,n.y)}function Qd(e,t,n){e.min=t.min-n.min,e.max=e.min+be(t)}function Wo(e,t,n){Qd(e.x,t.x,n.x),Qd(e.y,t.y,n.y)}function Xd(e,t,n,r,i){return e-=t,e=Fo(e,1/n,r),i!==void 0&&(e=Fo(e,1/i,r)),e}function Ik(e,t=0,n=1,r=.5,i,o=e,s=e){if(dt.test(t)&&(t=parseFloat(t),t=K(s.min,s.max,t/100)-s.min),typeof t!="number")return;let l=K(o.min,o.max,r);e===o&&(l-=t),e.min=Xd(e.min,t,n,l,i),e.max=Xd(e.max,t,n,l,i)}function Jd(e,t,[n,r,i],o,s){Ik(e,t[n],t[r],t[i],t.scale,o,s)}const Vk=["x","scaleX","originX"],Uk=["y","scaleY","originY"];function Zd(e,t,n,r){Jd(e.x,t,Vk,n?n.x:void 0,r?r.x:void 0),Jd(e.y,t,Uk,n?n.y:void 0,r?r.y:void 0)}function eh(e,t){e.min=t.min,e.max=t.max}function Qe(e,t){eh(e.x,t.x),eh(e.y,t.y)}function th(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function nh(e){return e.translate===0&&e.scale===1}function Rg(e){return nh(e.x)&&nh(e.y)}function rh(e,t){return e.min===t.min&&e.max===t.max}function Ok(e,t){return rh(e.x,t.x)&&rh(e.y,t.y)}function ih(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Ig(e,t){return ih(e.x,t.x)&&ih(e.y,t.y)}function oh(e){return be(e.x)/be(e.y)}function sh(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Ue(e){return[e("x"),e("y")]}function Fk(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((i||o||s)&&(r=`translate3d(${i}px, ${o}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:h,rotateY:f,skewX:v,skewY:y}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),h&&(r+=`rotateX(${h}deg) `),f&&(r+=`rotateY(${f}deg) `),v&&(r+=`skewX(${v}deg) `),y&&(r+=`skewY(${y}deg) `)}const l=e.x.scale*t.x,c=e.y.scale*t.y;return(l!==1||c!==1)&&(r+=`scale(${l}, ${c})`),r||"none"}const Vg=["TopLeft","TopRight","BottomLeft","BottomRight"],Wk=Vg.length,ah=e=>typeof e=="string"?parseFloat(e):e,lh=e=>typeof e=="number"||C.test(e);function Hk(e,t,n,r,i,o){i?(e.opacity=K(0,n.opacity??1,Bk(r)),e.opacityExit=K(t.opacity??1,0,$k(r))):o&&(e.opacity=K(t.opacity??1,n.opacity??1,r));for(let s=0;s<Wk;s++){const l=`border${Vg[s]}Radius`;let c=ch(t,l),u=ch(n,l);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||lh(c)===lh(u)?(e[l]=Math.max(K(ah(c),ah(u),r),0),(dt.test(u)||dt.test(c))&&(e[l]+="%")):e[l]=u}(t.rotate||n.rotate)&&(e.rotate=K(t.rotate||0,n.rotate||0,r))}function ch(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Bk=Ug(0,.5,Am),$k=Ug(.5,.95,Ye);function Ug(e,t,n){return r=>r<e?0:r>t?1:n(si(e,t,r))}function Yk(e,t){const n=je.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Kt(r),e(o-t))};return W.setup(r,!0),()=>Kt(r)}function ui(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function lo(e){return we(e)?e.get():e}function Kk(e,t,n){const r=we(e)?e:rr(e);return r.start(Vc("",r,t,n)),r.animation}const Gk=(e,t)=>e.depth-t.depth;class qk{constructor(){this.children=[],this.isDirty=!1}add(t){kc(this.children,t),this.isDirty=!0}remove(t){Sc(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Gk),this.isDirty=!1,this.children.forEach(t)}}class Qk{constructor(){this.members=[]}add(t){kc(this.members,t),t.scheduleRender()}remove(t){if(Sc(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const co={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Gs=["","X","Y","Z"],Xk=1e3;let Jk=0;function qs(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Og(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=og(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",W,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Og(r)}function Fg({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},l=t==null?void 0:t()){this.id=Jk++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(t2),this.nodes.forEach(o2),this.nodes.forEach(s2),this.nodes.forEach(n2)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new qk)}addEventListener(s,l){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Tc),this.eventHandlers.get(s).add(l)}notifyListeners(s,...l){const c=this.eventHandlers.get(s);c&&c.notify(...l)}hasListeners(s){return this.eventHandlers.has(s)}mount(s){if(this.instance)return;this.isSVG=vg(s)&&!tk(s),this.instance=s;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(c||l)&&(this.isLayoutDirty=!0),e){let d,h=0;const f=()=>this.root.updateBlockedByResize=!1;W.read(()=>{h=window.innerWidth}),e(s,()=>{const v=window.innerWidth;v!==h&&(h=v,this.root.updateBlockedByResize=!0,d&&d(),d=Yk(f,250),co.hasAnimatedSinceResize&&(co.hasAnimatedSinceResize=!1,this.nodes.forEach(hh)))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:h,hasRelativeLayoutChanged:f,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||u.getDefaultTransition()||d2,{onLayoutAnimationStart:x,onLayoutAnimationComplete:S}=u.getProps(),g=!this.targetLayout||!Ig(this.targetLayout,v),m=!h&&f;if(this.options.layoutRoot||this.resumeFrom||m||h&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const p={...Ic(y,"layout"),onPlay:x,onComplete:S};(u.shouldReduceMotion||this.options.layoutRoot)&&(p.delay=0,p.type=!1),this.startAnimation(p),this.setAnimationOrigin(d,m)}else h||hh(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Kt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(a2),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Og(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const h=this.path[d];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(uh);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(dh);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(i2),this.nodes.forEach(Zk),this.nodes.forEach(e2)):this.nodes.forEach(dh),this.clearAllSnapshots();const l=je.now();pe.delta=ht(0,1e3/60,l-pe.timestamp),pe.timestamp=l,pe.isProcessing=!0,Os.update.process(pe),Os.preRender.process(pe),Os.render.process(pe),pe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Wc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(r2),this.sharedNodes.forEach(l2)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,W.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){W.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!be(this.snapshot.measuredBox.x)&&!be(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=se(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let l=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(l=!1),l&&this.instance){const c=r(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,l=this.projectionDelta&&!Rg(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;s&&this.instance&&(l||un(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return s&&(c=this.removeTransform(c)),h2(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:s}=this.options;if(!s)return se();const l=s.measureViewportBox();if(!(((u=this.scroll)==null?void 0:u.wasRoot)||this.path.some(f2))){const{scroll:d}=this.root;d&&(Fn(l.x,d.offset.x),Fn(l.y,d.offset.y))}return l}removeElementScroll(s){var c;const l=se();if(Qe(l,s),(c=this.scroll)!=null&&c.wasRoot)return l;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:h,options:f}=d;d!==this.root&&h&&f.layoutScroll&&(h.wasRoot&&Qe(l,s),Fn(l.x,h.offset.x),Fn(l.y,h.offset.y))}return l}applyTransform(s,l=!1){const c=se();Qe(c,s);for(let u=0;u<this.path.length;u++){const d=this.path[u];!l&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Wn(c,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),un(d.latestValues)&&Wn(c,d.latestValues)}return un(this.latestValues)&&Wn(c,this.latestValues),c}removeTransform(s){const l=se();Qe(l,s);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!u.instance||!un(u.latestValues))continue;pl(u.latestValues)&&u.updateSnapshot();const d=se(),h=u.measurePageBox();Qe(d,h),Zd(l,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return un(this.latestValues)&&Zd(l,this.latestValues),l}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==pe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var v;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(s||c&&this.isSharedProjectionDirty||this.isProjectionDirty||(v=this.parent)!=null&&v.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:h}=this.options;if(!this.layout||!(d||h))return;this.resolvedRelativeTargetAt=pe.timestamp;const f=this.getClosestProjectingParent();f&&this.linkedParentVersion!==f.layoutVersion&&!f.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(f&&f.layout?this.createRelativeTarget(f,this.layout.layoutBox,f.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=se(),this.targetWithTransforms=se()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Rk(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Qe(this.target,this.layout.layoutBox),bg(this.target,this.targetDelta)):Qe(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,f&&!!f.resumingFrom==!!this.resumingFrom&&!f.options.layoutScroll&&f.target&&this.animationProgress!==1?this.createRelativeTarget(f,this.target,f.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||pl(this.parent.latestValues)||jg(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(s,l,c){this.relativeParent=s,this.linkedParentVersion=s.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=se(),this.relativeTargetOrigin=se(),Wo(this.relativeTargetOrigin,l,c),Qe(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var y;const s=this.getLead(),l=!!this.resumingFrom||this!==s;let c=!0;if((this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===pe.timestamp&&(c=!1),c)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;Qe(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,f=this.treeScale.y;dk(this.layoutCorrected,this.treeScale,this.path,l),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=se());const{target:v}=s;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(th(this.prevProjectionDelta.x,this.projectionDelta.x),th(this.prevProjectionDelta.y,this.projectionDelta.y)),Ur(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==f||!sh(this.projectionDelta.x,this.prevProjectionDelta.x)||!sh(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var l;if((l=this.options.visualElement)==null||l.scheduleRender(),s){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=On(),this.projectionDelta=On(),this.projectionDeltaWithTransform=On()}setAnimationOrigin(s,l=!1){const c=this.snapshot,u=c?c.latestValues:{},d={...this.latestValues},h=On();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const f=se(),v=c?c.source:void 0,y=this.layout?this.layout.source:void 0,x=v!==y,S=this.getStack(),g=!S||S.members.length<=1,m=!!(x&&!g&&this.options.crossfade===!0&&!this.path.some(u2));this.animationProgress=0;let p;this.mixTargetDelta=k=>{const j=k/1e3;fh(h.x,s.x,j),fh(h.y,s.y,j),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Wo(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),c2(this.relativeTarget,this.relativeTargetOrigin,f,j),p&&Ok(this.relativeTarget,p)&&(this.isProjectionDirty=!1),p||(p=se()),Qe(p,this.relativeTarget)),x&&(this.animationValues=d,Hk(d,u,this.latestValues,j,m,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=j},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){var l,c,u;this.notifyListeners("animationStart"),(l=this.currentAnimation)==null||l.stop(),(u=(c=this.resumingFrom)==null?void 0:c.currentAnimation)==null||u.stop(),this.pendingAnimation&&(Kt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=W.update(()=>{co.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=rr(0)),this.currentAnimation=Kk(this.motionValue,[0,1e3],{...s,velocity:0,isSync:!0,onUpdate:d=>{this.mixTargetDelta(d),s.onUpdate&&s.onUpdate(d)},onStop:()=>{},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Xk),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:l,target:c,layout:u,latestValues:d}=s;if(!(!l||!c||!u)){if(this!==s&&this.layout&&u&&Wg(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||se();const h=be(this.layout.layoutBox.x);c.x.min=s.target.x.min,c.x.max=c.x.min+h;const f=be(this.layout.layoutBox.y);c.y.min=s.target.y.min,c.y.max=c.y.min+f}Qe(l,c),Wn(l,d),Ur(this.projectionDeltaWithTransform,this.layoutCorrected,l,d)}}registerSharedNode(s,l){this.sharedNodes.has(s)||this.sharedNodes.set(s,new Qk),this.sharedNodes.get(s).add(l);const u=l.options.initialPromotionConfig;l.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(l):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var l;const{layoutId:s}=this.options;return s?((l=this.getStack())==null?void 0:l.lead)||this:this}getPrevLead(){var l;const{layoutId:s}=this.options;return s?(l=this.getStack())==null?void 0:l.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:l,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),s&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let l=!1;const{latestValues:c}=s;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(l=!0),!l)return;const u={};c.z&&qs("z",s,u,this.animationValues);for(let d=0;d<Gs.length;d++)qs(`rotate${Gs[d]}`,s,u,this.animationValues),qs(`skew${Gs[d]}`,s,u,this.animationValues);s.render();for(const d in u)s.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);s.scheduleRender()}applyProjectionStyles(s,l){if(!this.instance||this.isSVG)return;if(!this.isVisible){s.visibility="hidden";return}const c=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,s.visibility="",s.opacity="",s.pointerEvents=lo(l==null?void 0:l.pointerEvents)||"",s.transform=c?c(this.latestValues,""):"none";return}const u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){this.options.layoutId&&(s.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,s.pointerEvents=lo(l==null?void 0:l.pointerEvents)||""),this.hasProjected&&!un(this.latestValues)&&(s.transform=c?c({},""):"none",this.hasProjected=!1);return}s.visibility="";const d=u.animationValues||u.latestValues;this.applyTransformsToTarget();let h=Fk(this.projectionDeltaWithTransform,this.treeScale,d);c&&(h=c(d,h)),s.transform=h;const{x:f,y:v}=this.projectionDelta;s.transformOrigin=`${f.origin*100}% ${v.origin*100}% 0`,u.animationValues?s.opacity=u===this?d.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:s.opacity=u===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const y in gl){if(d[y]===void 0)continue;const{correct:x,applyTo:S,isCSSVariable:g}=gl[y],m=h==="none"?d[y]:x(d[y],u);if(S){const p=S.length;for(let k=0;k<p;k++)s[S[k]]=m}else g?this.options.visualElement.renderState.vars[y]=m:s[y]=m}this.options.layoutId&&(s.pointerEvents=u===this?lo(l==null?void 0:l.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var l;return(l=s.currentAnimation)==null?void 0:l.stop()}),this.root.nodes.forEach(uh),this.root.sharedNodes.clear()}}}function Zk(e){e.updateLayout()}function e2(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=t.source!==e.layout.source;o==="size"?Ue(h=>{const f=s?t.measuredBox[h]:t.layoutBox[h],v=be(f);f.min=r[h].min,f.max=f.min+v}):Wg(o,t.layoutBox,r)&&Ue(h=>{const f=s?t.measuredBox[h]:t.layoutBox[h],v=be(r[h]);f.max=f.min+v,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[h].max=e.relativeTarget[h].min+v)});const l=On();Ur(l,r,t.layoutBox);const c=On();s?Ur(c,e.applyTransform(i,!0),t.measuredBox):Ur(c,r,t.layoutBox);const u=!Rg(l);let d=!1;if(!e.resumeFrom){const h=e.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:f,layout:v}=h;if(f&&v){const y=se();Wo(y,t.layoutBox,f.layoutBox);const x=se();Wo(x,r,v.layoutBox),Ig(y,x)||(d=!0),h.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=y,e.relativeParent=h)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:c,layoutDelta:l,hasLayoutChanged:u,hasRelativeLayoutChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function t2(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function n2(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function r2(e){e.clearSnapshot()}function uh(e){e.clearMeasurements()}function dh(e){e.isLayoutDirty=!1}function i2(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function hh(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function o2(e){e.resolveTargetDelta()}function s2(e){e.calcProjection()}function a2(e){e.resetSkewAndRotation()}function l2(e){e.removeLeadSnapshot()}function fh(e,t,n){e.translate=K(t.translate,0,n),e.scale=K(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function ph(e,t,n,r){e.min=K(t.min,n.min,r),e.max=K(t.max,n.max,r)}function c2(e,t,n,r){ph(e.x,t.x,n.x,r),ph(e.y,t.y,n.y,r)}function u2(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const d2={duration:.45,ease:[.4,0,.1,1]},mh=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),gh=mh("applewebkit/")&&!mh("chrome/")?Math.round:Ye;function vh(e){e.min=gh(e.min),e.max=gh(e.max)}function h2(e){vh(e.x),vh(e.y)}function Wg(e,t,n){return e==="position"||e==="preserve-aspect"&&!zk(oh(t),oh(n),.2)}function f2(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const p2=Fg({attachResizeListener:(e,t)=>ui(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Qs={current:void 0},Hg=Fg({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Qs.current){const e=new p2({});e.mount(window),e.setOptions({layoutScroll:!0}),Qs.current=e}return Qs.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),qc=w.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function yh(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function m2(...e){return t=>{let n=!1;const r=e.map(i=>{const o=yh(i,t);return!n&&typeof o=="function"&&(n=!0),o});if(n)return()=>{for(let i=0;i<r.length;i++){const o=r[i];typeof o=="function"?o():yh(e[i],null)}}}}function g2(...e){return w.useCallback(m2(...e),e)}class v2 extends w.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=n.offsetParent,i=hg(r)&&r.offsetWidth||0,o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft,o.right=i-o.width-o.left}return null}componentDidUpdate(){}render(){return this.props.children}}function y2({children:e,isPresent:t,anchorX:n,root:r}){var d;const i=w.useId(),o=w.useRef(null),s=w.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=w.useContext(qc),c=((d=e.props)==null?void 0:d.ref)??(e==null?void 0:e.ref),u=g2(o,c);return w.useInsertionEffect(()=>{const{width:h,height:f,top:v,left:y,right:x}=s.current;if(t||!o.current||!h||!f)return;const S=n==="left"?`left: ${y}`:`right: ${x}`;o.current.dataset.motionPopId=i;const g=document.createElement("style");l&&(g.nonce=l);const m=r??document.head;return m.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${f}px !important;
            ${S}px !important;
            top: ${v}px !important;
          }
        `),()=>{m.contains(g)&&m.removeChild(g)}},[t]),a.jsx(v2,{isPresent:t,childRef:o,sizeRef:s,children:w.cloneElement(e,{ref:u})})}const x2=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s,anchorX:l,root:c})=>{const u=wc(w2),d=w.useId();let h=!0,f=w.useMemo(()=>(h=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:v=>{u.set(v,!0);for(const y of u.values())if(!y)return;r&&r()},register:v=>(u.set(v,!1),()=>u.delete(v))}),[n,u,r]);return o&&h&&(f={...f}),w.useMemo(()=>{u.forEach((v,y)=>u.set(y,!1))},[n]),w.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),s==="popLayout"&&(e=a.jsx(y2,{isPresent:n,anchorX:l,root:c,children:e})),a.jsx(ls.Provider,{value:f,children:e})};function w2(){return new Map}function Bg(e=!0){const t=w.useContext(ls);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=w.useId();w.useEffect(()=>{if(e)return i(o)},[e]);const s=w.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,s]:[!0]}const $i=e=>e.key||"";function xh(e){const t=[];return w.Children.forEach(e,n=>{w.isValidElement(n)&&t.push(n)}),t}const $g=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:o="sync",propagate:s=!1,anchorX:l="left",root:c})=>{const[u,d]=Bg(s),h=w.useMemo(()=>xh(e),[e]),f=s&&!u?[]:h.map($i),v=w.useRef(!0),y=w.useRef(h),x=wc(()=>new Map),S=w.useRef(new Set),[g,m]=w.useState(h),[p,k]=w.useState(h);km(()=>{v.current=!1,y.current=h;for(let E=0;E<p.length;E++){const b=$i(p[E]);f.includes(b)?(x.delete(b),S.current.delete(b)):x.get(b)!==!0&&x.set(b,!1)}},[p,f.length,f.join("-")]);const j=[];if(h!==g){let E=[...h];for(let b=0;b<p.length;b++){const L=p[b],N=$i(L);f.includes(N)||(E.splice(b,0,L),j.push(L))}return o==="wait"&&j.length&&(E=j),k(xh(E)),m(h),null}const{forceRender:T}=w.useContext(xc);return a.jsx(a.Fragment,{children:p.map(E=>{const b=$i(E),L=s&&!u?!1:h===p||f.includes(b),N=()=>{if(S.current.has(b))return;if(S.current.add(b),x.has(b))x.set(b,!0);else return;let J=!0;x.forEach(ot=>{ot||(J=!1)}),J&&(T==null||T(),k(y.current),s&&(d==null||d()),r&&r())};return a.jsx(x2,{isPresent:L,initial:!v.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:o,root:c,onExitComplete:L?void 0:N,anchorX:l,children:E},b)})})},Yg=w.createContext({strict:!1}),wh={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let kh=!1;function k2(){if(kh)return;const e={};for(const t in wh)e[t]={isEnabled:n=>wh[t].some(r=>!!n[r])};wg(e),kh=!0}function Kg(){return k2(),ak()}function S2(e){const t=Kg();for(const n in e)t[n]={...t[n],...e[n]};wg(t)}const j2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ho(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||j2.has(e)}let Gg=e=>!Ho(e);function b2(e){typeof e=="function"&&(Gg=t=>t.startsWith("on")?!Ho(t):e(t))}try{b2(require("@emotion/is-prop-valid").default)}catch{}function T2(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Gg(i)||n===!0&&Ho(i)||!t&&!Ho(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}const ds=w.createContext({});function E2(e,t){if(us(e)){const{initial:n,animate:r}=e;return{initial:n===!1||ci(n)?n:void 0,animate:ci(r)?r:void 0}}return e.inherit!==!1?t:{}}function _2(e){const{initial:t,animate:n}=E2(e,w.useContext(ds));return w.useMemo(()=>({initial:t,animate:n}),[Sh(t),Sh(n)])}function Sh(e){return Array.isArray(e)?e.join(" "):e}const Qc=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function qg(e,t,n){for(const r in t)!we(t[r])&&!_g(r,n)&&(e[r]=t[r])}function D2({transformTemplate:e},t){return w.useMemo(()=>{const n=Qc();return Kc(n,t,e),Object.assign({},n.vars,n.style)},[t])}function C2(e,t){const n=e.style||{},r={};return qg(r,n,e),Object.assign(r,D2(e,t)),r}function P2(e,t){const n={},r=C2(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const Qg=()=>({...Qc(),attrs:{}});function N2(e,t,n,r){const i=w.useMemo(()=>{const o=Qg();return Dg(o,t,Pg(r),e.transformTemplate,e.style),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};qg(o,e.style,e),i.style={...o,...i.style}}return i}const A2=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Xc(e){return typeof e!="string"||e.includes("-")?!1:!!(A2.indexOf(e)>-1||/[A-Z]/u.test(e))}function L2(e,t,n,{latestValues:r},i,o=!1,s){const c=(s??Xc(e)?N2:P2)(t,r,i,e),u=T2(t,typeof e=="string",o),d=e!==w.Fragment?{...u,...c,ref:n}:{},{children:h}=t,f=w.useMemo(()=>we(h)?h.get():h,[h]);return w.createElement(e,{...d,children:f})}function M2({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:z2(n,r,i,e),renderState:t()}}function z2(e,t,n,r){const i={},o=r(e,{});for(const f in o)i[f]=lo(o[f]);let{initial:s,animate:l}=e;const c=us(e),u=xg(e);t&&u&&!c&&e.inherit!==!1&&(s===void 0&&(s=t.initial),l===void 0&&(l=t.animate));let d=n?n.initial===!1:!1;d=d||s===!1;const h=d?l:s;if(h&&typeof h!="boolean"&&!cs(h)){const f=Array.isArray(h)?h:[h];for(let v=0;v<f.length;v++){const y=Uc(e,f[v]);if(y){const{transitionEnd:x,transition:S,...g}=y;for(const m in g){let p=g[m];if(Array.isArray(p)){const k=d?p.length-1:0;p=p[k]}p!==null&&(i[m]=p)}for(const m in x)i[m]=x[m]}}}return i}const Xg=e=>(t,n)=>{const r=w.useContext(ds),i=w.useContext(ls),o=()=>M2(e,t,r,i);return n?o():wc(o)},R2=Xg({scrapeMotionValuesFromProps:Gc,createRenderState:Qc}),I2=Xg({scrapeMotionValuesFromProps:Ng,createRenderState:Qg}),V2=Symbol.for("motionComponentSymbol");function U2(e,t,n){const r=w.useRef(n);w.useInsertionEffect(()=>{r.current=n});const i=w.useRef(null);return w.useCallback(o=>{var l;o&&((l=e.onMount)==null||l.call(e,o)),t&&(o?t.mount(o):t.unmount());const s=r.current;if(typeof s=="function")if(o){const c=s(o);typeof c=="function"&&(i.current=c)}else i.current?(i.current(),i.current=null):s(o);else s&&(s.current=o)},[t])}const Jg=w.createContext({});function _r(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function O2(e,t,n,r,i,o){var S,g;const{visualElement:s}=w.useContext(ds),l=w.useContext(Yg),c=w.useContext(ls),u=w.useContext(qc).reducedMotion,d=w.useRef(null);r=r||l.renderer,!d.current&&r&&(d.current=r(e,{visualState:t,parent:s,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,isSVG:o}));const h=d.current,f=w.useContext(Jg);h&&!h.projection&&i&&(h.type==="html"||h.type==="svg")&&F2(d.current,n,i,f);const v=w.useRef(!1);w.useInsertionEffect(()=>{h&&v.current&&h.update(n,c)});const y=n[ig],x=w.useRef(!!y&&!((S=window.MotionHandoffIsComplete)!=null&&S.call(window,y))&&((g=window.MotionHasOptimisedAnimation)==null?void 0:g.call(window,y)));return km(()=>{h&&(v.current=!0,window.MotionIsMounted=!0,h.updateFeatures(),h.scheduleRenderMicrotask(),x.current&&h.animationState&&h.animationState.animateChanges())}),w.useEffect(()=>{h&&(!x.current&&h.animationState&&h.animationState.animateChanges(),x.current&&(queueMicrotask(()=>{var m;(m=window.MotionHandoffMarkAsComplete)==null||m.call(window,y)}),x.current=!1),h.enteringChildren=void 0)}),h}function F2(e,t,n,r){const{layoutId:i,layout:o,drag:s,dragConstraints:l,layoutScroll:c,layoutRoot:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Zg(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!s||l&&_r(l),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:u})}function Zg(e){if(e)return e.options.allowProjection!==!1?e.projection:Zg(e.parent)}function Xs(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&S2(r);const o=n?n==="svg":Xc(e),s=o?I2:R2;function l(u,d){let h;const f={...w.useContext(qc),...u,layoutId:W2(u)},{isStatic:v}=f,y=_2(u),x=s(u,v);if(!v&&wm){H2();const S=B2(f);h=S.MeasureLayout,y.visualElement=O2(e,x,f,i,S.ProjectionNode,o)}return a.jsxs(ds.Provider,{value:y,children:[h&&y.visualElement?a.jsx(h,{visualElement:y.visualElement,...f}):null,L2(e,u,U2(x,y.visualElement,d),x,v,t,o)]})}l.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const c=w.forwardRef(l);return c[V2]=e,c}function W2({layoutId:e}){const t=w.useContext(xc).id;return t&&e!==void 0?t+"-"+e:e}function H2(e,t){w.useContext(Yg).strict}function B2(e){const t=Kg(),{drag:n,layout:r}=t;if(!n&&!r)return{};const i={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(e)||r!=null&&r.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function $2(e,t){if(typeof Proxy>"u")return Xs;const n=new Map,r=(o,s)=>Xs(o,s,e,t),i=(o,s)=>r(o,s);return new Proxy(i,{get:(o,s)=>s==="create"?r:(n.has(s)||n.set(s,Xs(s,void 0,e,t)),n.get(s))})}const Y2=(e,t)=>t.isSVG??Xc(e)?new bk(t):new yk(t,{allowProjection:e!==w.Fragment});class K2 extends nn{constructor(t){super(t),t.animationState||(t.animationState=Ck(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();cs(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let G2=0;class q2 extends nn{constructor(){super(...arguments),this.id=G2++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const Q2={animation:{Feature:K2},exit:{Feature:q2}};function xi(e){return{point:{x:e.pageX,y:e.pageY}}}const X2=e=>t=>Hc(t)&&e(t,xi(t));function Or(e,t,n,r){return ui(e,t,X2(n),r)}const ev=({current:e})=>e?e.ownerDocument.defaultView:null,jh=(e,t)=>Math.abs(e-t);function J2(e,t){const n=jh(e.x,t.x),r=jh(e.y,t.y);return Math.sqrt(n**2+r**2)}const bh=new Set(["auto","scroll"]);class tv{constructor(t,n,{transformPagePoint:r,contextWindow:i=window,dragSnapToOrigin:o=!1,distanceThreshold:s=3,element:l}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=v=>{this.handleScroll(v.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Zs(this.lastMoveEventInfo,this.history),y=this.startEvent!==null,x=J2(v.offset,{x:0,y:0})>=this.distanceThreshold;if(!y&&!x)return;const{point:S}=v,{timestamp:g}=pe;this.history.push({...S,timestamp:g});const{onStart:m,onMove:p}=this.handlers;y||(m&&m(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),p&&p(this.lastMoveEvent,v)},this.handlePointerMove=(v,y)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=Js(y,this.transformPagePoint),W.update(this.updatePoint,!0)},this.handlePointerUp=(v,y)=>{this.end();const{onEnd:x,onSessionEnd:S,resumeAnimation:g}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&g&&g(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=Zs(v.type==="pointercancel"?this.lastMoveEventInfo:Js(y,this.transformPagePoint),this.history);this.startEvent&&x&&x(v,m),S&&S(v,m)},!Hc(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=s,this.contextWindow=i||window;const c=xi(t),u=Js(c,this.transformPagePoint),{point:d}=u,{timestamp:h}=pe;this.history=[{...d,timestamp:h}];const{onSessionStart:f}=n;f&&f(t,Zs(u,this.history)),this.removeListeners=gi(Or(this.contextWindow,"pointermove",this.handlePointerMove),Or(this.contextWindow,"pointerup",this.handlePointerUp),Or(this.contextWindow,"pointercancel",this.handlePointerUp)),l&&this.startScrollTracking(l)}startScrollTracking(t){let n=t.parentElement;for(;n;){const r=getComputedStyle(n);(bh.has(r.overflowX)||bh.has(r.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const r=t===window,i=r?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},o={x:i.x-n.x,y:i.y-n.y};o.x===0&&o.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=o.x,this.lastMoveEventInfo.point.y+=o.y):this.history.length>0&&(this.history[0].x-=o.x,this.history[0].y-=o.y),this.scrollPositions.set(t,i),W.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Kt(this.updatePoint)}}function Js(e,t){return t?{point:t(e.point)}:e}function Th(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Zs({point:e},t){return{point:e,delta:Th(e,nv(t)),offset:Th(e,Z2(t)),velocity:eS(t,.1)}}function Z2(e){return e[0]}function nv(e){return e[e.length-1]}function eS(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=nv(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>xt(t)));)n--;if(!r)return{x:0,y:0};const o=He(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function tS(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?K(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?K(n,e,r.max):Math.min(e,n)),e}function Eh(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function nS(e,{top:t,left:n,bottom:r,right:i}){return{x:Eh(e.x,n,i),y:Eh(e.y,t,r)}}function _h(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function rS(e,t){return{x:_h(e.x,t.x),y:_h(e.y,t.y)}}function iS(e,t){let n=.5;const r=be(e),i=be(t);return i>r?n=si(t.min,t.max-r,e.min):r>i&&(n=si(e.min,e.max-i,t.min)),ht(0,1,n)}function oS(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const vl=.35;function sS(e=vl){return e===!1?e=0:e===!0&&(e=vl),{x:Dh(e,"left","right"),y:Dh(e,"top","bottom")}}function Dh(e,t,n){return{min:Ch(e,t),max:Ch(e,n)}}function Ch(e,t){return typeof e=="number"?e:e[t]||0}const aS=new WeakMap;class lS{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=se(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const o=h=>{n?(this.stopAnimation(),this.snapToCursor(xi(h).point)):this.pauseAnimation()},s=(h,f)=>{this.stopAnimation();const{drag:v,dragPropagation:y,onDragStart:x}=this.getProps();if(v&&!y&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Q1(v),!this.openDragLock))return;this.latestPointerEvent=h,this.latestPanInfo=f,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ue(g=>{let m=this.getAxisMotionValue(g).get()||0;if(dt.test(m)){const{projection:p}=this.visualElement;if(p&&p.layout){const k=p.layout.layoutBox[g];k&&(m=be(k)*(parseFloat(m)/100))}}this.originPoint[g]=m}),x&&W.postRender(()=>x(h,f)),dl(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},l=(h,f)=>{this.latestPointerEvent=h,this.latestPanInfo=f;const{dragPropagation:v,dragDirectionLock:y,onDirectionLock:x,onDrag:S}=this.getProps();if(!v&&!this.openDragLock)return;const{offset:g}=f;if(y&&this.currentDirection===null){this.currentDirection=cS(g),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",f.point,g),this.updateAxis("y",f.point,g),this.visualElement.render(),S&&S(h,f)},c=(h,f)=>{this.latestPointerEvent=h,this.latestPanInfo=f,this.stop(h,f),this.latestPointerEvent=null,this.latestPanInfo=null},u=()=>Ue(h=>{var f;return this.getAnimationState(h)==="paused"&&((f=this.getAxisMotionValue(h).animation)==null?void 0:f.play())}),{dragSnapToOrigin:d}=this.getProps();this.panSession=new tv(t,{onSessionStart:o,onStart:s,onMove:l,onSessionEnd:c,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,distanceThreshold:r,contextWindow:ev(this.visualElement),element:this.visualElement.current})}stop(t,n){const r=t||this.latestPointerEvent,i=n||this.latestPanInfo,o=this.isDragging;if(this.cancel(),!o||!i||!r)return;const{velocity:s}=i;this.startAnimation(s);const{onDragEnd:l}=this.getProps();l&&W.postRender(()=>l(r,i))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Yi(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=tS(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var o;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(o=this.visualElement.projection)==null?void 0:o.layout,i=this.constraints;t&&_r(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=nS(r.layoutBox,t):this.constraints=!1,this.elastic=sS(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Ue(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=oS(r.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!_r(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=hk(r,i.root,this.visualElement.getTransformPagePoint());let s=rS(i.layout.layoutBox,o);if(n){const l=n(ck(s));this.hasMutatedConstraints=!!l,l&&(s=Sg(l))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},u=Ue(d=>{if(!Yi(d,n,this.currentDirection))return;let h=c&&c[d]||{};s&&(h={min:0,max:0});const f=i?200:1e6,v=i?40:1e7,y={type:"inertia",velocity:r?t[d]:0,bounceStiffness:f,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...o,...h};return this.startAxisValueAnimation(d,y)});return Promise.all(u).then(l)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return dl(this.visualElement,t),r.start(Vc(t,r,0,n,this.visualElement,!1))}stopAnimation(){Ue(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Ue(t=>{var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Ue(n=>{const{drag:r}=this.getProps();if(!Yi(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:l}=i.layout.layoutBox[n],c=o.get()||0;o.set(t[n]-K(s,l,.5)+c)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!_r(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Ue(s=>{const l=this.getAxisMotionValue(s);if(l&&this.constraints!==!1){const c=l.get();i[s]=iS({min:c,max:c},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Ue(s=>{if(!Yi(s,t,null))return;const l=this.getAxisMotionValue(s),{min:c,max:u}=this.constraints[s];l.set(K(c,u,i[s]))})}addListeners(){if(!this.visualElement.current)return;aS.set(this.visualElement,this);const t=this.visualElement.current,n=Or(t,"pointerdown",c=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&!gg(c.target)&&this.start(c)}),r=()=>{const{dragConstraints:c}=this.getProps();_r(c)&&c.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),W.read(r);const s=ui(window,"resize",()=>this.scalePositionWithinConstraints()),l=i.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(Ue(d=>{const h=this.getAxisMotionValue(d);h&&(this.originPoint[d]+=c[d].translate,h.set(h.get()+c[d].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),l&&l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=vl,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:l}}}function Yi(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function cS(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class uS extends nn{constructor(t){super(t),this.removeGroupControls=Ye,this.removeListeners=Ye,this.controls=new lS(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ye}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners()}}const Ph=e=>(t,n)=>{e&&W.postRender(()=>e(t,n))};class dS extends nn{constructor(){super(...arguments),this.removePointerDownListener=Ye}onPointerDown(t){this.session=new tv(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ev(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Ph(t),onStart:Ph(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&W.postRender(()=>i(o,s))}}}mount(){this.removePointerDownListener=Or(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let ea=!1;class hS extends w.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),ea&&o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),co.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,{projection:s}=r;return s&&(s.isPresent=o,ea=!0,i||t.layoutDependency!==n||n===void 0||t.isPresent!==o?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||W.postRender(()=>{const l=s.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Wc.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;ea=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function rv(e){const[t,n]=Bg(),r=w.useContext(xc);return a.jsx(hS,{...e,layoutGroup:r,switchLayoutGroup:w.useContext(Jg),isPresent:t,safeToRemove:n})}const fS={pan:{Feature:dS},drag:{Feature:uS,ProjectionNode:Hg,MeasureLayout:rv}};function Nh(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,o=r[i];o&&W.postRender(()=>o(t,xi(t)))}class pS extends nn{mount(){const{current:t}=this.node;t&&(this.unmount=X1(t,(n,r)=>(Nh(this.node,r,"Start"),i=>Nh(this.node,i,"End"))))}unmount(){}}class mS extends nn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=gi(ui(this.node.current,"focus",()=>this.onFocus()),ui(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Ah(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),o=r[i];o&&W.postRender(()=>o(t,xi(t)))}class gS extends nn{mount(){const{current:t}=this.node;t&&(this.unmount=ek(t,(n,r)=>(Ah(this.node,r,"Start"),(i,{success:o})=>Ah(this.node,i,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const yl=new WeakMap,ta=new WeakMap,vS=e=>{const t=yl.get(e.target);t&&t(e)},yS=e=>{e.forEach(vS)};function xS({root:e,...t}){const n=e||document;ta.has(n)||ta.set(n,{});const r=ta.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(yS,{root:e,...t})),r[i]}function wS(e,t,n){const r=xS(t);return yl.set(e,n),r.observe(e),()=>{yl.delete(e),r.unobserve(e)}}const kS={some:0,all:1};class SS extends nn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:kS[i]},l=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:h}=this.node.getProps(),f=u?d:h;f&&f(c)};return wS(this.node.current,s,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(jS(t,n))&&this.startObserver()}unmount(){}}function jS({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const bS={inView:{Feature:SS},tap:{Feature:gS},focus:{Feature:mS},hover:{Feature:pS}},TS={layout:{ProjectionNode:Hg,MeasureLayout:rv}},ES={...Q2,...bS,...fS,...TS},de=$2(ES,Y2);function it(){!Bc.current&&yg();const[e]=w.useState(Uo.current);return e}/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),DS=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),Lh=e=>{const t=DS(e);return t.charAt(0).toUpperCase()+t.slice(1)},iv=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim(),CS=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var PS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=w.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:s,...l},c)=>w.createElement("svg",{ref:c,...PS,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:iv("lucide",i),...!o&&!CS(l)&&{"aria-hidden":"true"},...l},[...s.map(([u,d])=>w.createElement(u,d)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=(e,t)=>{const n=w.forwardRef(({className:r,...i},o)=>w.createElement(NS,{ref:o,iconNode:t,className:iv(`lucide-${_S(Lh(e))}`,`lucide-${e}`,r),...i}));return n.displayName=Lh(e),n};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],ov=ne("arrow-left",AS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],qt=ne("arrow-right",LS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],zS=ne("arrow-up-right",MS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],sv=ne("chevron-down",RS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],VS=ne("chevron-up",IS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],OS=ne("circle-check-big",US);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],WS=ne("code",FS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Bo=ne("external-link",HS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],$S=ne("facebook",BS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],av=ne("instagram",YS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],GS=ne("linkedin",KS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],QS=ne("mail",qS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],JS=ne("menu",XS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],lv=ne("mic",ZS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ej=[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]],tj=ne("music-2",ej);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nj=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],rj=ne("panels-top-left",nj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ij=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]],oj=ne("ticket",ij);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sj=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],cv=ne("twitter",sj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aj=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],xl=ne("users",aj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lj=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],cj=ne("x",lj);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uj=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],dj=ne("youtube",uj),Jc="/assets/logo_red-Cuc5EyMY.png",uv="tedxwushs-language",na="ja",dv=new Set(["ja","en"]),hj={ja:{description:"TEDxWUSHS Youthは、早稲田大学高等学院の生徒が独立して企画・運営する、日本語と英語のバイリンガルTEDxイベントです。Ideas change everything.",locale:"ja_JP"},en:{description:"TEDxWUSHS Youth is an independently organized, bilingual Japanese-English TEDx event led by students of Waseda University Senior High School. Ideas change everything.",locale:"en_US"}},hv=w.createContext(void 0),fj=()=>{if(typeof window>"u")return na;try{const e=window.localStorage.getItem(uv);return dv.has(e)?e:na}catch{return na}},Ki=(e,t)=>{const n=document.querySelector(e);n&&n.setAttribute("content",t)},pj=({children:e})=>{const[t,n]=w.useState(fj),r=w.useCallback(o=>{dv.has(o)&&n(o)},[]);w.useEffect(()=>{document.documentElement.lang=t;try{window.localStorage.setItem(uv,t)}catch{}const o=hj[t];Ki('meta[name="description"]',o.description),Ki('meta[property="og:description"]',o.description),Ki('meta[property="og:locale"]',o.locale),Ki('meta[property="twitter:description"]',o.description)},[t]);const i=w.useMemo(()=>({language:t,setLanguage:r}),[t,r]);return a.jsx(hv.Provider,{value:i,children:e})},B=()=>{const e=w.useContext(hv);if(!e)throw new Error("useLanguage must be used within a LanguageProvider.");return e},mj={ja:{group:"表示言語",ja:"日本語で表示",en:"英語で表示"},en:{group:"Display language",ja:"Show in Japanese",en:"Show in English"}},gj=()=>{const{language:e,setLanguage:t}=B(),n=mj[e],r=()=>t(e==="ja"?"en":"ja"),i=e==="ja"?"現在は日本語です。英語に切り替える":"Currently displayed in English. Switch to Japanese";return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"language-switcher language-switcher--desktop",role:"group","aria-label":n.group,children:[a.jsx("button",{type:"button",className:`language-option ${e==="ja"?"active":""}`,"aria-label":n.ja,"aria-pressed":e==="ja",onClick:()=>t("ja"),children:"JA"}),a.jsx("span",{className:"language-divider","aria-hidden":"true",children:"/"}),a.jsx("button",{type:"button",className:`language-option ${e==="en"?"active":""}`,"aria-label":n.en,"aria-pressed":e==="en",onClick:()=>t("en"),children:"EN"})]}),a.jsxs("button",{type:"button",className:"language-toggle-mobile","aria-label":i,onClick:r,children:[a.jsx("span",{className:`language-toggle-code ${e==="ja"?"active":""}`,"aria-hidden":"true",children:"JA"}),a.jsx("span",{className:"language-toggle-divider","aria-hidden":"true",children:"/"}),a.jsx("span",{className:`language-toggle-code ${e==="en"?"active":""}`,"aria-hidden":"true",children:"EN"})]}),a.jsx("style",{children:`
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
      `})]})},vj=()=>{const[e,t]=w.useState(!1),[n,r]=w.useState(!1),i=tn(),{language:o}=B(),s=it(),l=w.useRef(null),c=w.useRef(null),u=w.useRef(null),d=w.useRef(null),h=w.useRef(!1),f=w.useRef(!1),v=w.useRef(i.pathname),y=w.useRef(!1);v.current=i.pathname,w.useEffect(()=>{const p=()=>{y.current||t(window.scrollY>50)};return window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)},[]);const x=[{name:"Home",href:"/"},{name:"Event Archives",href:"/archives"},{name:"Speakers",href:"/speakers"},{name:"Team",href:"/team"},{name:"About",href:"/about"},{name:"Acknowledgements",href:"/acknowledgements"},{name:"FAQ",href:"/faq"}],S=p=>p==="/"?i.pathname==="/":i.pathname===p||i.pathname.startsWith(`${p}/`);w.useEffect(()=>{h.current=!1,r(!1)},[i.pathname]),w.useEffect(()=>{var p,k;if(n){const j=window.requestAnimationFrame(()=>{var T;(T=d.current)==null||T.focus({preventScroll:!0})});return()=>window.cancelAnimationFrame(j)}f.current?(f.current=!1,(p=c.current??l.current)==null||p.focus()):h.current&&(h.current=!1,(k=u.current)==null||k.focus())},[n]),w.useEffect(()=>{if(!n)return;const p=document.body,k=document.documentElement,j=i.pathname,T=window.scrollY,E={position:p.style.position,top:p.style.top,left:p.style.left,width:p.style.width,overflow:p.style.overflow},b=k.style.overflow;return y.current=!0,k.style.overflow="hidden",p.style.position="fixed",p.style.top=`-${T}px`,p.style.left="0",p.style.width="100%",p.style.overflow="hidden",()=>{k.style.overflow=b,p.style.position=E.position,p.style.top=E.top,p.style.left=E.left,p.style.width=E.width,p.style.overflow=E.overflow,y.current=!1,v.current===j?(window.scrollTo({top:T,left:0,behavior:"auto"}),t(T>50)):(window.scrollTo({top:0,left:0,behavior:"auto"}),t(!1))}},[n,i.pathname]),w.useEffect(()=>{const p=window.matchMedia("(min-width: 1101px)"),k=j=>{if(!j.matches||!n)return;const T=document.getElementById("mobile-navigation"),E=document.activeElement;f.current=(T==null?void 0:T.contains(E))||u.current===E,h.current=!1,r(!1)};return k(p),typeof p.addEventListener=="function"?(p.addEventListener("change",k),()=>p.removeEventListener("change",k)):(p.addListener(k),()=>p.removeListener(k))},[n]),w.useEffect(()=>{if(!n)return;const p=k=>{k.key==="Escape"&&(h.current=!0,r(!1))};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[n]);const g=()=>{n&&(h.current=!0),r(p=>!p)},m=p=>{h.current=i.pathname===p,r(!1)};return a.jsxs(a.Fragment,{children:[a.jsx("a",{href:"#main-content",className:"skip-link",children:o==="ja"?"本文へ移動":"Skip to main content"}),a.jsxs("header",{className:`header ${e?"scrolled":""}`,children:[a.jsxs("div",{className:"container header-content",children:[a.jsx(I,{ref:l,to:"/",className:"logo-container",children:a.jsx("img",{src:Jc,alt:"TEDxWUSHS Youth",className:"header-logo"})}),a.jsxs("div",{className:"header-actions",children:[a.jsx("nav",{className:"desktop-nav","aria-label":o==="ja"?"メインナビゲーション":"Primary navigation",children:a.jsx("ul",{lang:"en",children:x.map(p=>a.jsx("li",{children:a.jsx(I,{to:p.href,ref:S(p.href)?c:void 0,className:S(p.href)?"active":"","aria-current":i.pathname===p.href?"page":void 0,children:p.name})},p.name))})}),a.jsx("button",{type:"button",ref:u,className:"mobile-menu-btn","aria-label":n?o==="ja"?"メニューを閉じる":"Close menu":o==="ja"?"メニューを開く":"Open menu","aria-expanded":n,"aria-controls":"mobile-navigation",onClick:g,children:n?a.jsx(cj,{size:28,"aria-hidden":"true"}):a.jsx(JS,{size:28,"aria-hidden":"true"})}),a.jsx(gj,{})]})]}),a.jsx($g,{children:n&&a.jsx(de.nav,{id:"mobile-navigation",className:"mobile-menu","aria-label":o==="ja"?"モバイルナビゲーション":"Mobile navigation",initial:s?!1:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:s?{opacity:1,y:0}:{opacity:0,y:-20},transition:s?{duration:0}:{duration:.2},children:a.jsx("ul",{lang:"en",children:x.map((p,k)=>a.jsx("li",{children:a.jsx(I,{to:p.href,ref:k===0?d:void 0,onClick:()=>m(p.href),className:S(p.href)?"active-mobile":"","aria-current":i.pathname===p.href?"page":void 0,children:p.name})},p.name))})})}),a.jsx("style",{children:`
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
      `})]})]})},yj=()=>{const e=new Date().getFullYear();return a.jsxs("footer",{id:"footer",className:"footer",lang:"en",children:[a.jsxs("div",{className:"container footer-content",children:[a.jsxs("div",{className:"footer-top",children:[a.jsxs("div",{className:"footer-brand",children:[a.jsx(I,{className:"footer-brand-link",to:"/",children:a.jsx("img",{src:Jc,alt:"TEDxWUSHS Youth",className:"footer-logo"})}),a.jsx("p",{className:"footer-tagline",children:"This independent TEDx event is operated under license from TED."})]}),a.jsxs("nav",{className:"footer-links","aria-labelledby":"footer-quick-links-heading",children:[a.jsx("h4",{id:"footer-quick-links-heading",children:"Quick Links"}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx(I,{to:"/archives",children:"Event Archives"})}),a.jsx("li",{children:a.jsx(I,{to:"/speakers",children:"Speakers"})}),a.jsx("li",{children:a.jsx(I,{to:"/team",children:"Team"})}),a.jsx("li",{children:a.jsx(I,{to:"/about",children:"About Us"})}),a.jsx("li",{children:a.jsx(I,{to:"/join-us",children:"Join Us"})}),a.jsx("li",{children:a.jsx("a",{href:"https://www.waseda.jp/school/shs/",target:"_blank",rel:"noopener noreferrer",children:"Waseda SHS"})}),a.jsx("li",{children:a.jsx("a",{href:"https://www.ted.com/about/programs-initiatives/tedx-program",target:"_blank",rel:"noopener noreferrer",children:"TEDx Program"})})]})]}),a.jsxs("div",{className:"footer-social",children:[a.jsx("h4",{children:"Connect"}),a.jsxs("div",{className:"social-icons",children:[a.jsx("a",{href:"https://www.instagram.com/tedxwushs/",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:a.jsx(av,{size:24,"aria-hidden":"true"})}),a.jsx("a",{href:"https://x.com/TEDxWUSHS",target:"_blank",rel:"noopener noreferrer","aria-label":"X (Twitter)",children:a.jsx(cv,{size:24,"aria-hidden":"true"})}),a.jsx("a",{href:"https://note.com/tedx_wushs_youth",target:"_blank",rel:"noopener noreferrer","aria-label":"TEDxWUSHS Youth on note",title:"note",children:a.jsx("span",{className:"note-wordmark","aria-hidden":"true",children:"note"})}),a.jsx("a",{href:"https://www.youtube.com/@TEDxWUSHSYouth",target:"_blank",rel:"noopener noreferrer","aria-label":"TEDxWUSHS Youth on YouTube",children:a.jsx(dj,{size:24,"aria-hidden":"true"})}),a.jsx("a",{href:"mailto:tedxwushs@gmail.com","aria-label":"Email",children:a.jsx(QS,{size:24,"aria-hidden":"true"})})]}),a.jsx("p",{className:"footer-handle",children:"@TEDxWUSHS"}),a.jsxs("div",{className:"footer-contact",children:[a.jsx("p",{className:"footer-contact-label",children:"Contact"}),a.jsx("a",{className:"footer-email",href:"mailto:tedxwushs@gmail.com",children:"tedxwushs@gmail.com"}),a.jsx("p",{className:"footer-contact-note",lang:"ja",children:"イベントに関するご質問・お問い合わせ"})]})]})]}),a.jsx("div",{className:"footer-bottom",children:a.jsxs("p",{children:["© ",e," TEDxWUSHS Youth. All Rights Reserved."]})})]}),a.jsx("style",{children:`
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
      `})]})},xj="/assets/speaker-pamphlet-eZs2GcaY.webp",wj="/assets/timetable-pamphlet-D9fVAgjp.webp",kj="/assets/auditorium-CFZwqu6g.webp",Sj="/assets/horise-talk-BVkijafi.webp",jj="/assets/enomoto-talk-DPbk2h-d.webp",bj="/assets/kuroki-talk-BlsJnqu9.webp",Tj="/assets/kogure-talk-Bk-9GvSu.webp",Ej="/assets/hiruma-audience-BXwF9EQK.webp",_j="/assets/hiruma-stage-CwJTgFQt.webp",Dj="/assets/stage-and-audience-DQXxORqg.webp",Cj="/assets/tedx-letters-BGFjsVaW.webp",fv=[{id:"auditorium",src:kj,width:1350,height:1800,caption:{ja:"講堂全体と客席の様子",en:"The auditorium and audience"}},{id:"horise-talk",src:Sj,width:1350,height:1800,caption:{ja:"堀瀬 善仁さんのトークの様子",en:"Yoshito Horise on stage"}},{id:"enomoto-talk",src:jj,width:1350,height:1800,caption:{ja:"榎本 隆之先生のトークの様子",en:"Takayuki Enomoto on stage"}},{id:"kuroki-talk",src:bj,width:1350,height:1800,caption:{ja:"黒木 勇人さんのトークの様子",en:"Yuto Kuroki on stage"}},{id:"kogure-talk",src:Tj,width:1350,height:1800,caption:{ja:"小暮 真久さんのトークの様子",en:"Masahisa Kogure on stage"}},{id:"hiruma-audience",src:Ej,width:1800,height:1350,caption:{ja:"客席から見た比留間 礼音さんのトークの様子",en:"Reon Hiruma’s talk, viewed from the audience"}},{id:"hiruma-stage",src:_j,width:1800,height:1350,caption:{ja:"比留間 礼音さんがステージで語る様子",en:"Reon Hiruma speaking on stage"}},{id:"stage-and-audience",src:Dj,width:1800,height:1350,caption:{ja:"ステージとスライド、トークに耳を傾ける客席",en:"The stage, slides, and audience during a talk"}},{id:"tedx-letters",src:Cj,width:1350,height:1800,caption:{ja:"ステージに設置されたTEDxWUSHS Youthのロゴ",en:"The TEDxWUSHS Youth letters on stage"}}],Be=fv[0],Mh={url:"https://youtu.be/lkSY4hoaYSo",embedUrl:"https://www.youtube-nocookie.com/embed/lkSY4hoaYSo?rel=0"},Pj=[{id:"speakers",preview:xj,href:"/archives/2026/speaker-pamphlet.pdf",title:{ja:"登壇者紹介（改訂版）",en:"Speaker introductions (revised)"},description:{ja:"登壇者のプロフィールとトーク紹介を掲載した配布資料です。7人目の紹介はタイムテーブル面に掲載されています。",en:"Profiles and talk introductions from the event pamphlet. The seventh speaker is introduced on the timetable side."}},{id:"timetable",preview:wj,href:"/archives/2026/timetable-pamphlet.pdf",title:{ja:"タイムテーブル・主催者挨拶",en:"Timetable and organizer’s message"},description:{ja:"当日のタイムテーブル、主催者挨拶、7人目の登壇者紹介、ご案内を掲載しています。",en:"The event timetable, organizer’s message, seventh speaker introduction, and event guidelines."}}],Nj={ja:{description:"早稲田大学高等学院の生徒が独立して企画・運営するTEDxイベント。アイデアは世界を変える。その可能性を高等学院から。",deadlineLabel:"TEDx WUSHS Youth 2026は無事に開催できました",deadlineDate:"ご参加・ご協力ありがとうございました",programAction:"2026 メインイベントの記録を見る",allArchivesAction:"イベントアーカイブ一覧",archiveDescription:"当日の写真やオープニングムービー、登壇者とトークの紹介をアーカイブで公開しています。"},en:{description:"TEDxWUSHS Youth is an independently organized TEDx event led by students at Waseda University Senior High School. From our school, we explore the power of ideas to change everything.",deadlineLabel:"TEDx WUSHS Youth 2026 was successfully held",deadlineDate:"Thank you for joining and supporting us",programAction:"Explore the Main Event",allArchivesAction:"All Event Archives",archiveDescription:"Revisit the day through photographs, the opening movie, and speaker and talk introductions in our archive."}},Aj=()=>{const{language:e}=B(),t=it(),n=Nj[e];return a.jsxs("section",{className:"hero",children:[a.jsxs("div",{className:"container hero-container",children:[a.jsxs(de.div,{className:"hero-content",initial:t?!1:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:t?0:.8},children:[a.jsxs(I,{className:"hero-deadline-notice",to:"/archives/2026/main-event",children:[a.jsxs("span",{className:"hero-deadline-copy",children:[a.jsx("span",{children:n.deadlineLabel}),a.jsx("strong",{children:n.deadlineDate})]}),a.jsx(zS,{size:20,"aria-hidden":"true"})]}),a.jsxs(de.span,{className:"hero-tagline",lang:"en",initial:t?!1:{opacity:0},animate:{opacity:1},transition:t?{duration:0}:{delay:.5},children:[a.jsx("span",{className:"brand-name",children:"TEDxWUSHS Youth"})," · Waseda University Senior High School"]}),a.jsxs("h1",{className:"hero-title",lang:"en",children:["Ideas change ",a.jsx("br",{})," ",a.jsx("span",{className:"highlight-red",children:"everything."})]}),a.jsx("p",{className:"hero-description",children:n.description}),a.jsx("p",{className:"hero-description",children:n.archiveDescription}),a.jsxs("div",{className:"hero-cta",children:[a.jsx(I,{to:"/archives/2026/main-event",className:"btn btn-primary",children:n.programAction}),a.jsx(I,{to:"/archives",className:"btn btn-outline",children:n.allArchivesAction})]})]}),a.jsx(de.div,{className:"hero-visual",initial:t?!1:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:t?0:1,ease:"easeOut"},children:a.jsxs(I,{className:"poster-container",to:"/archives/2026/main-event","aria-label":n.programAction,children:[a.jsx("img",{src:Be.src,width:Be.width,height:Be.height,alt:Be.caption[e],className:"hero-poster"}),a.jsx("div",{className:"poster-glow","aria-hidden":"true"})]})})]}),a.jsx("style",{children:`
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
          display: block;
          position: relative;
        }

        .hero-poster {
          display: block;
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
          position: relative;
          z-index: 2;
          max-height: 620px;
          object-fit: contain;
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
          .hero-cta {
            justify-content: center;
          }
          .hero-visual {
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
      `})]})},wl="/assets/gakuinsai-BWIVjSAN.png",Lj=[{id:"all-speaker-talk-details-published",publishedAt:"2026-10-27",category:"Speakers",href:"/speakers",copy:{ja:{title:"全スピーカーのトーク紹介を公開しました",summary:"TEDxWUSHS Youth 2026に登壇する全7名について、トーク題名、使用言語、トーク紹介を公開しました。",action:"トーク紹介を見る"},en:{title:"Talk details published for all speakers",summary:"Talk titles, presentation languages, and talk introductions are now available for all seven TEDxWUSHS Youth 2026 speakers.",action:"View talk details"}}},{id:"youtube-live-stream-announced",publishedAt:"2026-10-26",category:"Live",href:"https://www.youtube.com/live/gkV3lfWCSIE",external:!0,copy:{ja:{title:"ライブ配信のリンクができました",summary:"10月31日（土）開催のTEDxWUSHS Youth 2026をYouTubeでライブ配信します。会場外からもリアルタイムでご覧いただけます。",action:"ライブ配信ページを開く"},en:{title:"Live stream link now available",summary:"TEDxWUSHS Youth 2026 will be streamed live on YouTube on Saturday, October 31. You can watch the event live from outside the venue.",action:"Open the live stream"}}},{id:"audience-registration-deadline-extended",publishedAt:"2026-10-25",category:"Registration",featured:!0,href:"/join-us/audience",external:!0,copy:{ja:{title:"参加申込み締切を10月29日まで延長しました",summary:"TEDxWUSHS Youth 2026の参加申込み締切を、2026年10月29日（木）まで延長しました。参加をご希望の方は、申込フォームからお申し込みください。",action:"参加を申し込む"},en:{title:"Registration deadline extended to October 29",summary:"The audience registration deadline for TEDxWUSHS Youth 2026 has been extended to Thursday, October 29, 2026. Please apply using the registration form.",action:"Apply to attend"}}},{id:"alumni-added-to-audience-eligibility",publishedAt:"2026-10-24",category:"Registration",featured:!0,href:"/join-us/audience",external:!0,copy:{ja:{title:"OBも参加申込みの対象となりました",summary:"TEDxWUSHS Youth 2026の参加対象に、早稲田大学高等学院のOBを追加しました。高等学院・高等学院中学部の生徒及びその保護者に加え、OBの皆さまもお申し込みいただけます。",action:"参加を申し込む"},en:{title:"Audience eligibility now includes alumni",summary:"Alumni of Waseda University Senior High School are now eligible to attend TEDxWUSHS Youth 2026, alongside Senior High School and Junior High School students and their parents or guardians.",action:"Apply to attend"}}},{id:"audience-eligibility-expanded",publishedAt:"2026-10-18",category:"Registration",featured:!0,href:"/join-us/audience",external:!0,copy:{ja:{title:"中学部の生徒・保護者もお申し込みいただけます",summary:"TEDx WUSHS Youth 2026の参加対象は、高等学院の生徒およびその保護者に加え、高等学院中学部の生徒およびその保護者もお申し込みいただけます。以前までの文章は分かりにくい案内となっていましたことをお詫び申し上げます。",action:"参加を申し込む"},en:{title:"Audience eligibility has expanded",summary:"We apologize that our previous information did not clearly explain audience eligibility. Senior High School and Junior High School students, as well as their parents or guardians, may apply to attend TEDxWUSHS Youth 2026.",action:"Apply to attend"}}},{id:"school-fest-2026-feature",publishedAt:"2026-10-12",category:"Feature",href:"/school-fest-2026",copy:{ja:{title:"学院祭英語ディベート特集を公開",summary:"学院祭で実施した3校との英語ディベートを、対戦記録、TED/TEDxの理念、オーディエンスを取り込んだ今回の工夫とともに紹介します。",action:"特集記事を読む"},en:{title:"Gakuinsai English Debate feature",summary:"Explore our three interschool debates through the match records, the ideas behind TED and TEDx, and the audience-inclusive format we developed.",action:"Read the feature"}}},{id:"waseda-shs-official-announcement",publishedAt:"2026-10-09",category:"Announcement",href:"https://www.waseda.jp/school/shs/news/2026/10/09/11248/",external:!0,copy:{ja:{title:"高等学院公式サイトに開催案内が掲載されました",summary:"早稲田大学高等学院の公式サイトで、10月31日（土）開催のTEDxWUSHS Youth 2026「Breakshot」が紹介されました。",action:"高等学院の掲載記事を読む"},en:{title:"Event announcement published by Waseda University Senior High School",summary:"Waseda University Senior High School has published an official announcement for TEDxWUSHS Youth 2026 “Breakshot,” taking place on Saturday, October 31.",action:"Read the official announcement"}}},{id:"audience-registration-open",publishedAt:"2026-10-01",category:"Registration",href:"/join-us/audience",external:!0,copy:{ja:{title:"オーディエンス募集を開始しました",summary:"TEDxWUSHS Youth 2026のオーディエンス募集を開始しました。対象は早稲田大学高等学院の生徒及びその保護者と、高等学院中学部の生徒及びその保護者です。",action:"参加を申し込む"},en:{title:"Audience registration is now open",summary:"Audience registration for TEDxWUSHS Youth 2026 is open to Senior High School and Junior High School students, as well as their parents or guardians.",action:"Apply to attend"}}},{id:"gakuinsai-2026-program",publishedAt:"2026-09-30",category:"Event",href:wl,external:!0,image:wl,imageAlt:{ja:"TEDxWUSHS Youth学院祭企画「English Debate」のポスター",en:"Poster for the TEDxWUSHS Youth English Debate program at Gakuinsai 2026"},copy:{ja:{title:"学院祭で英語ディベート企画を実施します",summary:"10月10日（土）・11日（日）、学院祭のゼミ室2でTEDxWUSHS Youthの団体紹介を行います。頌栄女子学院高等学校・慶應義塾高等学校・早稲田大学本庄高等学院ESSと、社会奉仕・所得税・友情と恋愛を論題に英語で議論します。",action:"ポスターを拡大して見る"},en:{title:"English debates at Gakuinsai 2026",summary:"On October 10 and 11 in Seminar Room 2, we will introduce TEDxWUSHS Youth and hold philosophical English debates with Shoei Girls’ Senior High School, Keio Senior High School, and Waseda University Honjo Senior High School ESS on community service, income tax, and friendship versus romantic relationships.",action:"View the full poster"}}},{id:"official-note-launched",publishedAt:"2026-09-30",category:"note",href:"https://note.com/tedx_wushs_youth/n/n01e4f29a9fca",external:!0,copy:{ja:{title:"公式noteを更新しました",summary:"公式noteで「TEDxWUSHS Youth 公式note始めました！」を公開しました。今後、活動やイベントに関する情報を発信していきます。",action:"noteの記事を読む"},en:{title:"Official note updated",summary:"We published “TEDxWUSHS Youth 公式note始めました！” and will share more updates about our activities and the event.",action:"Read on note"}}},{id:"full-speaker-lineup-announced",publishedAt:"2026-09-29",category:"Speakers",href:"/speakers",copy:{ja:{title:"全登壇者のプロフィールを公開しました",summary:"TEDxWUSHS Youth 2026に登壇する全7名のスピーカー情報を公開しました。",action:"全登壇者を見る"},en:{title:"Full speaker lineup announced",summary:"Profiles for all seven TEDxWUSHS Youth 2026 speakers are now available.",action:"View the full lineup"}}},{id:"speaker-information-update",publishedAt:"2026-09-27",category:"Speakers",href:"/speakers",copy:{ja:{title:"スピーカー情報を更新しました",summary:"TEDxWUSHS Youth 2026に登壇するスピーカーのプロフィールと講演情報を更新しました。",action:"スピーカー情報を見る"},en:{title:"Speaker information updated",summary:"We have updated the profiles and talk information for the TEDxWUSHS Youth 2026 speakers.",action:"View speakers"}}}],Mj=[{id:"main-event-2026-photo-archive",publishedAt:"2026-11-03",category:"Event Archives",featured:!0,href:"/archives/2026/main-event",copy:{ja:{title:"TEDx WUSHS Youth 2026を無事に開催しました",summary:"ご参加・ご協力ありがとうございました。メインイベントの写真、オープニングムービー、登壇者とトーク、配布資料をイベントアーカイブでご覧いただけます。",action:"メインイベントのアーカイブを見る"},en:{title:"TEDx WUSHS Youth 2026 was successfully held",summary:"Thank you for joining and supporting us. Explore photographs, the opening movie, speakers and talks, and the event pamphlet in our main event archive.",action:"Explore the main event archive"}}},{id:"event-2026-concluded",publishedAt:"2026-11-02",category:"Event Archives",href:"/archives/2026/main-event",copy:{ja:{title:"TEDxWUSHS Youth 2026は終了しました",summary:"ご参加・ご協力ありがとうございました。メインイベント当日の報告は近日公開予定です。開催概要と当日のプログラムをアーカイブでご覧いただけます。",action:"イベントアーカイブを見る"},en:{title:"TEDxWUSHS Youth 2026 has concluded",summary:"Thank you for joining and supporting us. Our main event report is coming soon. Event details and the program are available in the archive.",action:"Explore the event archive"}}},...Lj.filter(e=>e.category!=="Registration"&&e.category!=="Live")],zh={ja:{eyebrow:"Newsroom",titleLead:"Latest",titleAccent:"Updates",description:"TEDxWUSHS Youthの活動とイベントアーカイブに関する最新情報をお知らせします。",listLabel:"TEDxWUSHS Youthの更新情報",featured:"Featured",showMore:"もっと見る",showLess:"表示を戻す"},en:{eyebrow:"Newsroom",titleLead:"Latest",titleAccent:"Updates",description:"The latest announcements about TEDxWUSHS Youth and our event archives.",listLabel:"TEDxWUSHS Youth updates",featured:"Featured",showMore:"Show more",showLess:"Show fewer"}},zj=e=>e.replaceAll("-","."),Rh=1,Rj=()=>{const[e,t]=w.useState(!1),{language:n}=B(),r=it(),i=zh[n]??zh.ja,o=[...Mj].sort((v,y)=>y.publishedAt.localeCompare(v.publishedAt)),s=o.filter(v=>v.featured),l=o.filter(v=>!v.featured),c=[...s,...l],u=[...s,...l.slice(0,Rh)],d=l.length>Rh,h=e?c:u,f=e?VS:sv;return a.jsxs("section",{className:"updates section-padding","aria-labelledby":"updates-heading",children:[a.jsxs("div",{className:"container",children:[a.jsxs(de.header,{className:"updates-header",initial:r?!1:{opacity:0,y:20},whileInView:r?void 0:{opacity:1,y:0},viewport:{once:!0},transition:{duration:r?0:.6},children:[a.jsxs("div",{children:[a.jsx("p",{className:"updates-eyebrow",lang:"en",children:i.eyebrow}),a.jsxs("h2",{id:"updates-heading",className:"updates-title",lang:"en",children:[i.titleLead," ",a.jsx("span",{className:"highlight-red",children:i.titleAccent})]})]}),a.jsx("p",{className:"updates-description",children:i.description})]}),a.jsx("ol",{id:"updates-list",className:"updates-list","aria-label":i.listLabel,children:h.map((v,y)=>{var j,T;const x=v.copy[n]??v.copy.ja,S=((j=v.imageAlt)==null?void 0:j[n])??((T=v.imageAlt)==null?void 0:T.ja)??"",g=v.external?"a":I,m=v.external?{href:v.href,target:"_blank",rel:"noopener noreferrer"}:{to:v.href},p=v.external?Bo:qt,k=n==="en"?" (opens in a new tab)":"（新しいタブで開きます）";return a.jsx(de.li,{initial:r?!1:{opacity:0,y:16},whileInView:r?void 0:{opacity:1,y:0},viewport:{once:!0},transition:{duration:r?0:.5,delay:r?0:y*.08},children:a.jsxs(g,{className:`updates-item${v.featured?" updates-item--featured":""}${v.image?" updates-item--with-image":""}`,"aria-label":`${x.action}: ${x.title}${v.external?k:""}`,...m,children:[v.image&&a.jsx("span",{className:"updates-item-media",children:a.jsx("img",{src:v.image,alt:S,loading:"lazy",decoding:"async"})}),a.jsxs("div",{className:"updates-item-body",children:[a.jsxs("div",{className:"updates-meta",children:[v.featured&&a.jsx("span",{className:"updates-featured",lang:"en",children:i.featured}),a.jsx("time",{dateTime:v.publishedAt,lang:"en",children:zj(v.publishedAt)}),a.jsx("span",{lang:"en",children:v.category})]}),a.jsx("h3",{children:x.title}),a.jsx("p",{children:x.summary}),a.jsx("span",{className:"updates-action",children:x.action})]}),a.jsx("span",{className:"updates-arrow","aria-hidden":"true",children:a.jsx(p,{size:22})})]})},v.id)})}),d&&a.jsx("div",{className:"updates-toggle-wrap",children:a.jsxs("button",{type:"button",className:"updates-toggle","aria-expanded":e,"aria-controls":"updates-list",onClick:()=>t(v=>!v),children:[a.jsx("span",{children:e?i.showLess:i.showMore}),a.jsx(f,{size:20,strokeWidth:2.5,"aria-hidden":"true"})]})})]}),a.jsx("style",{children:`
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
      `})]})},Ij={ja:{programLink:"TEDxプログラムについて詳しく見る",descriptions:["TEDxWUSHS Youthは、早稲田大学高等学院の生徒が独立して企画・運営するTEDxイベントです。若者ならではの視点とパッションを武器に、高校生という枠を超えた、社会に響くメッセージを発信します。私たちは、対話を通じて互いの可能性を広げ、新しい一歩を踏み出すきっかけを作ります。","TEDxは、地域で自主的に運営されるイベントを通じて、人々がTEDのような体験を共有するためのプログラムです。私たちは、アイデアを共有する場を通じて対話とつながりを育んでいます。","TEDx WUSHS Youth 2026は、皆さまのご協力により無事に開催することができました。開催概要や当日の記録は、イベントアーカイブにまとめています。"]},en:{programLink:"Learn more about the TEDx program",descriptions:["TEDxWUSHS Youth is an independently organized TEDx event conceived and produced by students at Waseda University Senior High School. Drawing on the perspectives and passion unique to young people, we share messages that reach beyond the boundaries of high school. Through dialogue, we aim to expand one another’s possibilities and inspire a first step toward change.","TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. We create space for sharing ideas, sparking discussion, and building connections.","TEDx WUSHS Youth 2026 was successfully held thanks to your support. Event details and records from the day are collected in our event archive."]}},Vj=()=>{const{language:e}=B(),t=it(),n=Ij[e];return a.jsxs("section",{id:"about",className:"about section-padding",children:[a.jsx("div",{className:"container",children:a.jsx("div",{className:"about-grid",children:a.jsxs(de.div,{className:"about-item about-item--combined",initial:t?!1:{opacity:0,y:30},whileInView:t?void 0:{opacity:1,y:0},viewport:{once:!0},transition:{duration:t?0:.6},children:[a.jsx("h2",{className:"about-logo-heading",children:a.jsx("img",{src:Jc,alt:"TEDxWUSHS Youth",className:"about-logo"})}),a.jsx("div",{className:"about-description",children:n.descriptions.map(r=>a.jsx("p",{children:r},r))}),a.jsxs("a",{href:"https://www.ted.com/about/programs-initiatives/tedx-program",target:"_blank",rel:"noopener noreferrer",className:"highlight-link program-link",children:[n.programLink," ↗"]}),a.jsxs("p",{className:"event-info",children:[a.jsxs(I,{className:"highlight-link",to:"/archives/2026/main-event",children:[e==="ja"?"2026年メインイベントの記録を見る":"Explore the 2026 main event"," →"]}),a.jsx("br",{}),a.jsxs(I,{className:"highlight-link",to:"/archives",children:[e==="ja"?"イベントアーカイブ一覧":"All event archives"," →"]})]})]})})}),a.jsx("style",{children:`
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
      `})]})},Uj=()=>{const{language:e}=B(),t=e==="ja";return a.jsx("section",{className:"home-archives section-padding","aria-labelledby":"home-archives-title",children:a.jsxs("div",{className:"container",children:[a.jsxs("header",{children:[a.jsx("p",{className:"home-archives__eyebrow",lang:"en",children:"Thank you for being part of it"}),a.jsxs("h2",{id:"home-archives-title",lang:"en",children:["Event ",a.jsx("span",{className:"highlight-red",children:"Archives"})]}),a.jsx("p",{children:t?"TEDx WUSHS Youth 2026は無事に開催することができました。ご参加・ご協力いただいた皆さま、ありがとうございました。当日の記録をアーカイブでご覧ください。":"TEDx WUSHS Youth 2026 was successfully held. Thank you to everyone who participated and supported us. Revisit the day in our event archive."})]}),a.jsxs("div",{className:"home-archives__grid",children:[a.jsxs(I,{to:"/archives/2026/main-event",className:"home-archives__main",children:[a.jsx("img",{src:Be.src,width:Be.width,height:Be.height,alt:"",loading:"lazy",decoding:"async"}),a.jsxs("div",{children:[a.jsx("p",{className:"home-archives__eyebrow",lang:"en",children:"2026 Main Event"}),a.jsx("h3",{lang:"en",children:"Breakshot"}),a.jsx("p",{children:t?"オープニングムービー、登壇者とトーク、当日の写真、運営チーム。メインイベントの記録を一つにまとめました。":"The opening movie, speakers and talks, photographs, and organizing team—all in one main event archive."}),a.jsxs("span",{children:[t?"2026 メインイベントの記録を見る":"Explore the main event"," ",a.jsx(qt,{size:20,"aria-hidden":"true"})]})]})]}),a.jsxs(I,{to:"/archives",className:"home-archives__all",children:[a.jsx("p",{className:"home-archives__eyebrow",lang:"en",children:"Explore all events"}),a.jsx("h3",{children:t?"イベントアーカイブ一覧":"All Event Archives"}),a.jsx("p",{children:t?"メインイベントと学院祭の英語ディベートなど、これまでの活動を振り返ります。":"Look back at our main event, school festival English debates, and past activities."}),a.jsxs("span",{children:[t?"すべてのアーカイブを見る":"Browse all archives"," ",a.jsx(qt,{size:20,"aria-hidden":"true"})]})]})]})]})})},wi=()=>{const{language:e}=B();return a.jsxs("aside",{className:"recruitment-notice","aria-label":e==="ja"?"来年度の募集について":"Next year’s recruitment",children:[a.jsx("p",{children:e==="ja"?"掲載しているスピーカー・チームは2026年のメンバーです。来年度（2027年）のスピーカーと運営チームメンバーの募集は、公式SNSで行います。":"The speakers and team shown here are the 2026 members. Recruitment for 2027 speakers and organizing team members will take place on our official social media channels."}),a.jsxs("div",{className:"recruitment-notice__links",children:[a.jsx("a",{href:"https://www.instagram.com/tedxwushs/",target:"_blank",rel:"noopener noreferrer",children:"Instagram ↗"}),a.jsx("a",{href:"https://x.com/TEDxWUSHS",target:"_blank",rel:"noopener noreferrer",children:"X ↗"})]})]})},Oj={ja:{sectionSubtitle:"TEDxWUSHS Youthへの参加方法と最新情報をご案内します。",optionsHeading:"参加方法と最新情報",applicationsUpdate:"TEDx WUSHS Youth 2026は無事に開催することができました。ご参加・ご協力ありがとうございました。",teamDescription:"来年度（2027年）の運営チームメンバー募集は公式SNSで行います。",teamAction:"募集状況を見る",audienceDescription:"2026年のイベントは終了しました。当日の写真と配布パンフレットをアーカイブでご覧いただけます。",audienceAction:"イベントの記録を見る",audienceStatus:"開催終了",subscribed:a.jsxs(a.Fragment,{children:["登録完了しました",a.jsx("br",{}),"イベントの最新情報をお届けしますのでお楽しみに。"]}),newsletter:"イベントの最新情報や募集のお知らせをメールでお届けします。",emailLabel:"メールアドレス",emailPlaceholder:"メールアドレスを入力",subscribeAction:"登録する"},en:{sectionSubtitle:"Explore ways to take part in TEDxWUSHS Youth and receive the latest event updates.",optionsHeading:"Ways to Participate and Stay Updated",applicationsUpdate:"TEDx WUSHS Youth 2026 was successfully held. Thank you for joining and supporting us.",teamDescription:"2027 recruitment will take place on our official social media channels.",teamAction:"View Recruitment Status",audienceDescription:"Our 2026 event has concluded. Explore photographs and the event pamphlet in the archive.",audienceAction:"Explore event archives",audienceStatus:"Event concluded",subscribed:a.jsxs(a.Fragment,{children:["You are subscribed.",a.jsx("br",{}),"We look forward to sharing the latest event updates with you."]}),newsletter:"Receive event updates and future application announcements by email.",emailLabel:"Email address",emailPlaceholder:"Enter your email address",subscribeAction:"Subscribe"}},pv=({hideHeader:e=!1})=>{const[t,n]=w.useState(!1),r=w.useRef(null),i=w.useRef(null),o=it(),{language:s}=B(),l=Oj[s];w.useEffect(()=>{var d;t&&((d=r.current)==null||d.focus())},[t]),w.useEffect(()=>()=>{i.current&&clearTimeout(i.current)},[]);const c=()=>{i.current&&clearTimeout(i.current),i.current=setTimeout(()=>n(!0),300)},u=[{title:"Join the Team",icon:a.jsx(xl,{size:32,"aria-hidden":"true",focusable:"false"}),description:l.teamDescription,link:"/join-us/team",action:l.teamAction,status:"Recruitment Closed",closed:!0,color:"#fff"},{title:"Event Archives",icon:a.jsx(oj,{size:32,"aria-hidden":"true",focusable:"false"}),description:l.audienceDescription,link:"/archives",action:l.audienceAction,status:l.audienceStatus,statusLanguage:s,color:"#fff"}];return a.jsxs("section",{id:"contact",className:"join-us section-padding",children:[a.jsxs("div",{className:"container",children:[e?a.jsx("h2",{className:"visually-hidden",children:l.optionsHeading}):a.jsxs(de.div,{className:"section-header",initial:o?!1:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[a.jsx("span",{className:"join-tagline",lang:"en",children:"Be part of the community"}),a.jsxs("h2",{className:"section-title",lang:"en",children:["Join ",a.jsx("span",{className:"highlight-red",children:"Us"})]}),a.jsx("p",{className:"section-subtitle",children:l.sectionSubtitle})]}),a.jsxs(de.div,{className:"recruitment-closed",initial:o?!1:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[a.jsx("strong",{lang:"en",children:"2026 Applications Update"}),a.jsx("p",{children:l.applicationsUpdate})]}),a.jsx(wi,{}),a.jsx("div",{className:"opportunities-grid",children:u.map((d,h)=>a.jsxs(de.div,{className:`opt-card${d.closed?" opt-card--closed":""}`,initial:o?!1:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:o?0:h*.1},children:[a.jsx("div",{className:"opt-icon",children:d.icon}),d.status&&a.jsx("span",{className:"opt-status",lang:d.statusLanguage??"en",children:d.status}),a.jsx("h3",{className:"opt-title",lang:"en",children:d.title}),a.jsx("p",{className:"opt-description",children:d.description}),a.jsxs(I,{to:d.link,className:"opt-link",children:[d.action," ",a.jsx(qt,{size:16,"aria-hidden":"true",focusable:"false"})]})]},d.title))}),a.jsx(de.div,{className:"newsletter-box",initial:o?!1:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},children:a.jsxs("div",{className:"newsletter-content",children:[a.jsx("h3",{lang:"en",children:"Stay Updated"}),a.jsx("iframe",{title:"hidden_iframe",name:"hidden_iframe",id:"hidden_iframe",style:{display:"none"}}),t?a.jsx("div",{ref:r,className:"success-message",role:"status","aria-live":"polite","aria-atomic":"true",tabIndex:-1,children:a.jsx("p",{children:l.subscribed})}):a.jsxs("div",{children:[a.jsx("p",{id:"newsletter-description",children:l.newsletter}),a.jsxs("form",{className:"newsletter-form",action:"https://docs.google.com/forms/d/e/1FAIpQLScvnsbAaQFhyodG3GY4qXmTAj919BFivczNyE9bOt4Z_TxuWw/formResponse",method:"post",target:"hidden_iframe",onSubmit:c,children:[a.jsxs("div",{className:"newsletter-field",children:[a.jsx("label",{htmlFor:"newsletter-email",children:l.emailLabel}),a.jsx("input",{id:"newsletter-email",type:"email",name:"entry.269866944","aria-describedby":"newsletter-description",placeholder:l.emailPlaceholder,autoComplete:"email",inputMode:"email",required:!0})]}),a.jsx("button",{type:"submit",className:"btn-primary",children:l.subscribeAction})]})]})]})})]}),a.jsx("style",{children:`
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
      `})]})},Fj=()=>a.jsxs("main",{id:"main-content",tabIndex:-1,children:[a.jsx(Aj,{}),a.jsx(Uj,{}),a.jsx(Rj,{}),a.jsx(Vj,{}),a.jsx(pv,{})]}),Wj="アイデアを発見し広める精神のもと、TEDxは、地域で自主的に運営されるイベントを通じて、人々がTEDのような体験を共有するためのプログラムです。TEDxイベントでは、TED Talksの映像とライブスピーカーが組み合わさり、深い議論とつながりを生み出します。これらの地域で自主運営されるイベントはTEDxと呼ばれ、xは independently organized TED event（独立して運営されるTEDイベント）を表します。TED ConferenceはTEDxプログラムに一般的な指針を提供しますが、各TEDxイベントは自主的に運営されています（所定のルールおよび規定に従います）。",Hj="TEDは、対話を生み出し、理解を深め、意義ある変化を促すアイデアを発見し、議論し、広めることに取り組む、非営利・無党派の組織です。TEDは、特定の主張を掲げることなく、好奇心、理性、驚き、そして知識の探究に力を注いでいます。世界をより深く理解し、他者とのつながりを求める、あらゆる分野と文化の人々を歓迎します。そして、誰もがアイデアに触れ、それを自分たちのコミュニティで行動へと移すことを呼びかけています。",Bj="TEDは1984年、Technology、Entertainment、Designが交わるカンファレンスとして始まりました。現在では、科学やビジネスから教育、芸術、世界規模の課題までを探究する、多様な世界的コミュニティと取り組みへと広がっています。毎年のカンファレンスで選ばれ、TED.comで公開されるTED Talksに加え、TEDはオリジナルポッドキャスト、短編映像シリーズ、アニメーション形式の教育コンテンツ（TED-Ed）、テレビ番組を制作しています。これらは100以上の言語に翻訳され、世界各地の提携先を通じて配信されています。毎年、数千件のTEDxイベントが独立して運営されています。",$j="Audacious Projectを通じて、TEDは、世界が直面する最も緊急な課題に大胆な解決策を示すプロジェクトへ66億ドルの資金提供が促されることに貢献してきました。より美しく、持続可能で、公正な世界を目指す取り組みです。2020年、TEDは、気候危機の解決を加速し、ネットゼロの未来に向けた運動を広げるCountdownを開始しました。2023年には、より活気があり公平な未来への現実的な道筋に焦点を当て、新しい対話を生み出すTED Democracyを開始しました。",Yj=()=>{const{language:e}=B(),t=e==="ja",n=it();return a.jsxs("main",{id:"main-content",tabIndex:-1,className:"about-page",children:[a.jsx("div",{className:"container section-padding",children:a.jsxs(de.div,{initial:n?!1:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:n?0:.8},children:[a.jsxs("section",{className:"about-section",children:[a.jsx("h1",{className:"page-title",children:t?a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"highlight-red brand-name",children:"TEDx"}),"について"]}):a.jsxs(a.Fragment,{children:["About ",a.jsx("span",{className:"highlight-red brand-name",children:"TEDx"})]})}),a.jsx("h2",{className:"sub-title brand-name",children:t?"TEDxについて — x = independently organized event（独立して運営されるイベント）":"TEDx, x = independently organized event"}),a.jsx("p",{children:t?Wj:a.jsx(a.Fragment,{children:"In the spirit of discovering and spreading ideas, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)"})})]}),a.jsxs("section",{className:"about-section",children:[a.jsx("h2",{className:"section-title",children:t?a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"highlight-red",children:"TED"}),"について"]}):a.jsxs(a.Fragment,{children:["About ",a.jsx("span",{className:"highlight-red",children:"TED"})]})}),a.jsx("p",{children:t?Hj:"TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and drive meaningful change. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community."}),t&&a.jsxs(a.Fragment,{children:[a.jsx("p",{children:Bj}),a.jsx("p",{children:$j}),a.jsx("p",{children:a.jsx("a",{href:"https://www.ted.com/about/programs-initiatives",target:"_blank",rel:"noopener noreferrer",className:"highlight-link",children:"TEDのプログラムと取り組みの一覧を見る"})})]}),a.jsxs("p",{hidden:t,children:["TED began in 1984 as a conference where Technology, Entertainment and Design converged, but today it spans a multitude of worldwide communities and initiatives exploring everything from science and business to education, arts and global issues. In addition to the TED Talks curated from our annual conferences and published on TED.com, we produce original podcasts, short video series, animated educational lessons (TED-Ed) and TV programs that are translated into more than 100 languages and distributed via partnerships around the world. Each year, thousands of independently run TEDx events. Through the Audacious Project, TED has helped catalyze $6.6 billion in funding for projects that support bold solutions to the world's most urgent challenges — working to make the world more beautiful, sustainable and just. In 2020, TED launched Countdown, an initiative to accelerate solutions to the climate crisis and mobilize a movement for a net-zero future, and in 2023 TED launched TED Democracy to spark a new kind of conversation focused on realistic pathways towards a more vibrant and equitable future. ",a.jsx("a",{href:"https://www.ted.com/about/programs-initiatives",target:"_blank",rel:"noopener noreferrer",className:"highlight-link",children:"View a full list of TED’s many programs and initiatives."})]}),a.jsxs("div",{className:"ted-social",children:[a.jsx("p",{children:t?"TEDの公式アカウント":"Follow TED on:"}),a.jsxs("div",{className:"social-links",children:[a.jsx("a",{href:"https://www.facebook.com/TED",target:"_blank",rel:"noopener noreferrer","aria-label":"TED on Facebook",lang:"en",children:a.jsx($S,{size:24,"aria-hidden":"true"})}),a.jsx("a",{href:"https://www.instagram.com/ted",target:"_blank",rel:"noopener noreferrer","aria-label":"TED on Instagram",lang:"en",children:a.jsx(av,{size:24,"aria-hidden":"true"})}),a.jsx("a",{href:"https://www.linkedin.com/company/ted-conferences",target:"_blank",rel:"noopener noreferrer","aria-label":"TED on LinkedIn",lang:"en",children:a.jsx(GS,{size:24,"aria-hidden":"true"})}),a.jsx("a",{href:"https://twitter.com/TEDTalks",target:"_blank",rel:"noopener noreferrer","aria-label":"TED on X",lang:"en",children:a.jsx(cv,{size:24,"aria-hidden":"true"})}),a.jsx("a",{href:"https://www.tiktok.com/@tedtoks",target:"_blank",rel:"noopener noreferrer","aria-label":"TED on TikTok",lang:"en",children:a.jsx(tj,{size:24,"aria-hidden":"true"})})]})]})]})]})}),a.jsx("style",{children:`
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
            `})]})},Kj="/assets/enomoto-takayuki-DNGDHC06.jpg",Gj="/assets/hasegawa-keisuke-DYSgj9AY.jpg",qj="/assets/reon-hiruma-CtjqnzZU.jpg",Qj="/assets/horise-yoshito-BMWy-myU.jpg",Xj="/assets/kogure-masahisa-jgnY9mTV.jpg",Jj="/assets/kuroki-yuto-H_vlZVz7.jpg",Zj="/assets/takezawa-mamoru-CgZku-6Z.jpg",eb=e=>{const t=[];let n=0;for([2,2].forEach(r=>{n>=e.length||(t.push(e.slice(n,n+r)),n+=r)});n<e.length;)t.push(e.slice(n,n+3)),n+=3;return t},Zc=[{id:"enomoto-takayuki",displayOrder:30,published:!0,featured:!0,image:Kj,imagePosition:"50% 42%",name:{ja:"榎本 隆之",en:"Takayuki Enomoto"},role:{ja:"早稲田大学高等学院 国語科教員",en:"Japanese Language Educator, Waseda University Senior High School"},shortBio:{ja:"国語科指導、国際交流・芸術プログラムを通して、グローバルな文脈に造詣のある高校生の育成を目指している。",en:"A Japanese language educator with experience in textbook editing, international exchange initiatives, and comparative teacher education."},talk:{title:{ja:"The glasses we forgot we were wearing: How native language shapes our reality",en:"The glasses we forgot we were wearing: How native language shapes our reality"},language:{ja:"英語スピーチ",en:"Talk in English"},description:{ja:"日本語、英語、韓国語など、私たちが使う言語は、ものの見え方や人の振る舞い方、物語の読み取り方に影響を与えています。しかし、私たちはその影響を普段あまり意識していません。本トークでは、母語という「色メガネ」が私たちの現実の捉え方をどのように形づくっているのかを探ります。",en:"The languages we use—such as Japanese, English, and Korean—influence how we see things, how people behave, and how we interpret stories. Yet we rarely notice that influence in everyday life. This talk explores how the “glasses” of our native language shape the way we perceive reality."}},intro:{ja:["1964年生まれ。中高国語科教員。早稲田大学、コロラド州立大学などを経て、現在は早稲田大学高等学院所属。国語科指導をはじめ各種国際交流プログラムや芸術プログラムを通じて、グローバルな文脈に造詣のあるスーパー高校生を育成することを目指している。","高等学校国語科検定教科書の編集に長く携わり、教員養成の比較教育に関心がある。"],en:["An accomplished junior and senior high school Japanese language literacy educator with academic and professional backgrounds at Waseda University and Colorado State University. He currently serves on the faculty at Waseda University Senior High School.","He is dedicated to nurturing exceptional, globally minded high school students through comprehensive Japanese language instruction, international exchange initiatives, and music programs. He brings extensive experience in editing government-approved high school textbooks of Japanese language and literature, complemented by a strong research interest in comparative education in teacher education programs."]}},{id:"hasegawa-keisuke",displayOrder:70,published:!0,featured:!0,image:Gj,imagePosition:"50% 42%",name:{ja:"長谷川 慶佑",en:"Keisuke Hasegawa"},role:{ja:"早稲田大学高等学院 1年",en:"First-year Student, Waseda University Senior High School"},shortBio:{ja:"中学時代に「ビオトープ管理委員会」を立ち上げ、環境保全活動を牽引。環境・文芸の両分野で多数の受賞実績を持つ。",en:"Founder of a school Biotope Management Committee, with numerous awards in environmental conservation and literature."},talk:{title:{ja:"過去を未来へ活かす大切さ",en:"Turning the Past into the Future"},language:{ja:"日本語スピーチ",en:"Talk in Japanese"},description:{ja:"出身地である福島県で原発事故を経験し、日常生活が一変したスピーカーは、その経験を踏まえ、中学校でビオトープ活動に精力的に取り組みました。本トークでは、過去の経験を糧として行動を起こすことの大切さについて語ります。",en:"After experiencing the nuclear power plant accident in his home prefecture of Fukushima and seeing daily life change completely, the speaker drew on that experience to devote himself to biotope activities in junior high school. This talk considers the importance of turning past experiences into motivation for action."}},intro:{ja:["2010年福島県生まれ。中学時代に校内組織「ビオトープ管理委員会」を自ら立ち上げ、環境保全活動を牽引。「全国学校・園庭ビオトープコンクール2023文部科学大臣賞」や「第59回全国野生生物保護活動発表大会環境大臣賞」を受賞する。","さらに「令和6年度道路ふれあい月間推進標語最優秀賞（国土交通大臣表彰）」、「第44回福島県川柳賞青少年奨励賞」など、環境・文芸の両分野で多数の受賞実績を持つ。"],en:["Born in Fukushima Prefecture in 2010, he has won numerous literary contests, including the 2024 Road Fureai Month Promotion Slogan Grand Prize, the 44th Fukushima Prefecture Senryu Award Youth Encouragement Prize, and the “Thinking Together: Fukushima, Towards the Environment Beyond” Challenge Award 2023.","The Biotope Management Committee activity he initiated at school during junior high received the 2023 National School/Garden Biotope Contest Minister of Education, Culture, Sports, Science and Technology Award and the 59th National Wildlife Protection Activity Presentation Competition Minister of the Environment Award. In his talk, he will share insights drawn from experiences related to the Fukushima Daiichi Nuclear Power Plant accident and his activities to date."]}},{id:"horise-yoshito",displayOrder:60,published:!0,featured:!0,image:Qj,imagePosition:"50% 45%",name:{ja:"堀瀬 善仁",en:"Yoshito Horise"},role:{ja:"早稲田大学高等学院 2年",en:"Second-year Student, Waseda University Senior High School"},shortBio:{ja:"早稲田大学高等学院2年。7度の転校と多文化経験を持ち、AI姿勢認識を活用した語学ツール「KATA」を開発。",en:"A sophomore at Waseda University Senior High School with seven school changes and multicultural experience, and the developer of “KATA,” an AI-based language-learning tool."},talk:{title:{ja:"100,000 Words of Self-Analysis: Why You Don’t Have to Pick the “Real” You",en:"100,000 Words of Self-Analysis: Why You Don’t Have to Pick the “Real” You"},language:{ja:"英語スピーチ",en:"Talk in English"},description:{ja:"7回の転校と7回の留学を経験したスピーカーは、いつしか自分の頭の中に、正反対の考えを持つ二人の「同居人」がいることに気づきました。長年にわたり二人と向き合い、葛藤を重ねてきた経験をもとに、本トークでは「本当の自分」とは何なのか、そして一つの自分を選ぶ必要があるのかについて考えます。",en:"After changing schools seven times and studying abroad seven times, the speaker came to recognize two “roommates” in his mind who held opposing views. Drawing on years of confronting and struggling with both, this talk asks what the “real self” is—and whether we need to choose only one version of ourselves."}},intro:{ja:["早稲田大学高等学院2年。日本・台湾・香港で7度の転校を経験し、カナダ・オーストラリア・フランスでの国際経験を積む。日本語・中国語を母語とし、英語・フランス語・韓国語を学習中。国際HANAシンポジウム2年連続登壇、AI時代における人間の主体性を研究。","東大AIハッカソン優秀賞受賞。AI姿勢認識を活用した語学ツール「KATA」を開発。現在は、Stanford e-Japanに挑戦し、国際分野での活動を目指す。"],en:["A sophomore at Waseda University Senior High School. He has changed schools seven times in Japan, Taiwan, and Hong Kong, and has gained international experience in Canada, Australia, and France. Japanese and Chinese are his native languages, and he is currently studying English, French, and Korean. He has spoken at the International HANA Symposium for two consecutive years and is researching human agency in the age of AI.","He received the Excellence Award at the University of Tokyo AI Hackathon and developed “KATA,” a language-learning tool that utilizes AI-based posture recognition. He is currently participating in the Stanford e-Japan program and aims to pursue activities in the international arena."]}},{id:"kuroki-yuto",displayOrder:50,published:!0,featured:!0,image:Jj,imagePosition:"50% 44%",name:{ja:"黒木 勇人",en:"Yuto Kuroki"},role:{ja:"早稲田大学 情報理工学科2年",en:"Second-year Computer Science Student, Waseda University"},shortBio:{ja:"ISEF 2025に日本代表として出場し、ドローン配送最適化アルゴリズムの研究で文部科学大臣特別賞を受賞。",en:"Japan representative at ISEF 2025 and recipient of the MEXT Minister’s Special Award for drone-delivery optimization research."},talk:{title:{ja:"Don’t Find Your Passion. Build It.",en:"Don’t Find Your Passion. Build It."},language:{ja:"英語スピーチ",en:"Talk in English"},description:{ja:"情熱は、ある日突然見つかるものではなく、自ら築いていくものです。AI研究への情熱を育んできたスピーカーは、その経験を通じて、情熱を育てる過程の大切さを実感しました。本トークでは、情熱を築くための具体的なステップと、自分らしい人生の方向性を見つける方法について語ります。",en:"Passion is not something we suddenly discover one day; it is something we build. Through developing his own passion for AI research, the speaker came to understand the value of that process. This talk presents practical steps for building passion and finding a direction in life that feels true to you."}},intro:{ja:["早稲田大学情報理工学科2年。国際学生科学技術フェア（ISEF 2025）に日本代表として出場し、ドローン配送最適化アルゴリズムの研究を発表。文部科学大臣特別賞を受賞した。2026年夏からは、中谷財団の奨学生としてジョージア工科大学でロボット外骨格の深層学習モデルを研究している。","外国語学習にも力を入れ、TOEIC満点、ケンブリッジ英検C2取得、最難関のドイツ語検定試験Goethe-Zertifikat C2の3技能合格を達成。現在は外国語学習の方法を発信しながら、高校生の研究発表を支援するNPO法人で活動している。高校時代は硬式テニス部に所属。"],en:["A second-year Computer Science student at Waseda University. He represented Japan at ISEF 2025, presenting research on a drone-delivery optimization algorithm, and received the MEXT Minister’s Special Award. Since summer 2026, he has been conducting research on deep-learning models for robotic exoskeletons at the Georgia Institute of Technology as a Nakatani Foundation scholar.","Passionate about language learning, he has achieved a perfect TOEIC score, Cambridge C2 Proficiency, and passed three Goethe-Zertifikat C2 modules. He currently shares language-learning methods and works with an NPO supporting high school students in presenting their research. In high school, he was on the tennis team."]}},{id:"kogure-masahisa",displayOrder:10,published:!0,featured:!0,image:Xj,imagePosition:"50% 42%",name:{ja:"小暮 真久",en:"Masahisa Kogure"},role:{ja:"社会起業家",en:"Social Entrepreneur"},shortBio:{ja:"TABLE FOR TWOを創設し、約800の企業・団体を巻き込む社会運動へ成長させた。現在も医療・AIなど多領域で挑戦を続けている。",en:"Founder of TABLE FOR TWO, which grew into a nationwide social movement involving around 800 companies and organizations."},talk:{title:{ja:"BECOME A STRANGER 自分に出会うために",en:"BECOME A STRANGER: To Meet Yourself"},language:{ja:"日本語スピーチ",en:"Talk in Japanese"},description:{ja:"あなたのすぐ隣にも、まだ開けていない「Gate」がある。いつもの世界から一歩外へ出て、知らない世界に飛び込んでみる。出会うのは、まだ知らなかった自分かもしれない。人生でいくつものGateを開けてきた経験から、知らない世界へ一歩踏み出すことが、自分を発見するきっかけになることを語ります。",en:"There may be an unopened “Gate” right beside you. Step beyond the familiar and enter a world you do not know; the person you meet there may be a self you have never discovered. Drawing on a life of opening many such gates, this talk shows how taking one step into the unknown can become an opportunity to discover yourself."}},intro:{ja:["早稲田大学卒業後、オーストラリアで人工心臓の研究に従事。その後、マッキンゼー・アンド・カンパニーを経て、社会課題の解決を目指すTABLE FOR TWOを創設。約800の企業・団体を巻き込み、日本最大規模の社会運動へと成長させる。研究、ビジネス、社会課題など異なる世界を越境しながら、新しい仕組みや事業を生み出してきた。現在も医療・AIをはじめ、さまざまな領域で新たな挑戦を続けている。"],en:["After graduating from Waseda University, he conducted artificial-heart research in Australia. He later worked at McKinsey & Company before founding TABLE FOR TWO to address social challenges. By involving around 800 companies and organizations, he grew the initiative into one of Japan’s largest social movements. Crossing boundaries among research, business, and social issues, he has created new systems and ventures, and he continues to take on new challenges in healthcare, AI, and other fields."]}},{id:"takezawa-mamoru",displayOrder:40,published:!0,featured:!0,image:Zj,imagePosition:"42% 50%",name:{ja:"武沢 護",en:"Mamoru Takezawa"},role:{ja:"早稲田大学高等学院 前学院長",en:"Former Headmaster of Waseda University Senior High School"},shortBio:{ja:"長く早稲田大学高等学院の教員を務め、数学・情報科の指導に携わる。特に最後の4年間は学院長を務めた。",en:"A longtime mathematics and information studies educator at Waseda University Senior High School who served as Headmaster for the final four years of his tenure."},talk:{title:{ja:"偶然と想像力 — AI時代の意志決定 —",en:"Chance and Imagination: Decision-Making in the AI Era"},language:{ja:"日本語スピーチ",en:"Talk in Japanese"},description:{ja:"人類はこれまで、さまざまな場面で判断を重ね、意思決定を通じて生き延びてきました。AI時代を迎えた今、意思決定はどのように変化するのでしょうか。本トークでは、「偶然」という概念を手がかりに、現代における意思決定と想像力の重要性について考えます。",en:"Throughout history, humanity has survived by making judgments and decisions in many different situations. How will decision-making change in the age of AI? Using the concept of “chance” as a starting point, this talk considers the importance of decision-making and imagination today."}},intro:{ja:["早稲田大学高等学院前学院長。長く早稲田大学高等学院の教員を務め、数学・情報科の指導に携わる。特に最後の4年間は学院長を務めた。"],en:["Former Headmaster of Waseda University Senior High School. He served for many years as a teacher at the school, teaching mathematics and information studies. He was Headmaster for the final four years of his tenure."]}},{id:"reon-hiruma",displayOrder:20,published:!0,featured:!0,image:qj,imagePosition:"50% 42%",name:{ja:"比留間 礼音",en:"Reon Hiruma"},role:{ja:"ベンチャーキャピタリスト",en:"Venture Capitalist"},shortBio:{ja:"ヘルスケア、産業技術、安全保障領域のディープテックに投資し、防衛技術コミュニティJDTIも運営している。",en:"A venture capitalist investing in deep tech across healthcare, industrial technology, and security, and the operator of the JDTI defense technology community."},talk:{title:{ja:"Learning New Perspectives: Why I Keep Learning Languages",en:"Learning New Perspectives: Why I Keep Learning Languages"},language:{ja:"英語スピーチ",en:"Talk in English"},description:{ja:"日本語とオランダ語から出発し、独学で英語とフランス語を習得したスピーカー。言語学習によって広がった人とのつながりや世界の見え方を通して、AI翻訳が普及した今も言語を学ぶ意味を考えます。",en:"Starting with Japanese and Dutch, the speaker went on to teach himself English and French. Through the relationships and perspectives that language learning opened up, this talk considers why learning languages still matters in an age of widely available AI translation."}},intro:{ja:["ヘルスケア、産業技術、安全保障領域のディープテックに投資するベンチャーキャピタリスト。早稲田大学在学中の2018年にPotentialist Globalを共同創業し、欧米の技術系企業20社以上の日本・アジア進出を支援。2026年より国内大手VCで投資を担当する。投資の傍ら、防衛技術コミュニティJDTIを運営し、技術系スタートアップが安全保障に果たしうる役割を議論する場づくりに取り組む。オランダ人と日本人の両親をもち、四言語に堪能。"],en:["Reon Hiruma is a venture capitalist investing in deep tech across healthcare, industrial technology, and security. While at Waseda University, he co-founded Potentialist Global in 2018 and helped over 20 US and European technology companies enter Japan and Asia. In 2026, he joined a leading Japanese venture capital firm. Alongside his work as an investor, Reon runs JDTI, a defense technology community that brings people together to discuss the role startups can play in national security. Born to Dutch and Japanese parents, he speaks four languages."]}}],Ih={ja:{profileLabel:"プロフィール",talkLabel:"トーク紹介",showDetails:"プロフィールとトーク紹介を見る",hideDetails:"詳細を閉じる",viewSpeaker:"詳しく見る"},en:{profileLabel:"Profile",talkLabel:"About the talk",showDetails:"View profile and talk details",hideDetails:"Close details",viewSpeaker:"View details"}},Vh=({speaker:e,language:t,variant:n,index:r,initiallyExpanded:i=!1})=>{var p,k,j,T,E,b;const o=it(),[s,l]=w.useState(i),c=n==="detail",u=c?"h2":"h3",d=Ih[t]??Ih.ja,h=e.name[t]??e.name.ja,f=e.role[t]??e.role.ja,v=e.shortBio[t]??e.shortBio.ja,y=e.intro[t]??e.intro.ja,x=((p=e.talk)==null?void 0:p.title[t])??((k=e.talk)==null?void 0:k.title.ja),S=((j=e.talk)==null?void 0:j.language[t])??((T=e.talk)==null?void 0:T.language.ja),g=((E=e.talk)==null?void 0:E.description[t])??((b=e.talk)==null?void 0:b.description.ja),m=`speaker-${e.id}-details`;return w.useEffect(()=>{i&&l(!0)},[i]),a.jsxs(de.article,{id:c?`speaker-${e.id}`:void 0,className:`speaker-card speaker-card--${n}${c&&r%2===1?" speaker-card--reversed":""}`,style:{"--speaker-image-position":e.imagePosition},initial:o?!1:{opacity:0,y:28},whileInView:o?void 0:{opacity:1,y:0},viewport:{once:!0,amount:.15},transition:o?{duration:0}:{duration:.55,delay:c?0:Math.min(r*.07,.28)},children:[a.jsx("div",{className:"speaker-card__image-frame",children:a.jsx("img",{src:e.image,alt:"",className:"speaker-card__image",loading:c&&r===0?"eager":"lazy",decoding:"async"})}),a.jsxs("div",{className:"speaker-card__content",children:[a.jsx("p",{className:"speaker-card__role",children:f}),a.jsx(u,{className:"speaker-card__name",children:h}),c?a.jsxs(a.Fragment,{children:[a.jsxs("button",{className:"speaker-card__mobile-toggle",type:"button","aria-expanded":s,"aria-controls":m,onClick:()=>l(L=>!L),children:[a.jsx("span",{children:s?d.hideDetails:d.showDetails}),a.jsx(sv,{className:"speaker-card__mobile-toggle-icon",size:20,strokeWidth:2,"aria-hidden":"true"})]}),a.jsxs("div",{id:m,className:`speaker-card__details${s?" speaker-card__details--expanded":""}`,children:[a.jsxs("div",{className:"speaker-card__bio",children:[a.jsx("p",{className:"speaker-card__detail-label",children:d.profileLabel}),y.map((L,N)=>a.jsx("p",{children:L},`${e.id}-intro-${N}`))]}),e.talk&&a.jsxs("section",{className:"speaker-card__talk","aria-labelledby":`${e.id}-talk-title`,children:[a.jsxs("div",{className:"speaker-card__talk-meta",children:[a.jsx("p",{className:"speaker-card__detail-label",children:d.talkLabel}),a.jsx("p",{className:"speaker-card__talk-language",children:S})]}),a.jsx("h3",{id:`${e.id}-talk-title`,className:"speaker-card__talk-title",children:x}),a.jsx("p",{className:"speaker-card__talk-description",children:g})]})]})]}):a.jsxs(a.Fragment,{children:[a.jsx("p",{className:"speaker-card__summary",children:v}),a.jsxs(I,{className:"speaker-card__details-link",to:`/speakers#speaker-${e.id}`,children:[d.viewSpeaker,a.jsx(qt,{size:16,strokeWidth:2,"aria-hidden":"true"})]})]})]})]})},Uh={ja:{previewSubtitle:"多様な経験と専門性を持つスピーカーたちが、それぞれのBreakshotから生まれたアイデアを共有します。",fullSubtitle:"TEDxWUSHS Youth 2026に登壇したスピーカーと、その背景にある経験やアイデアをご紹介します。",empty:"スピーカー情報は近日公開予定です。",comingSoonLabel:"追加情報",comingSoonBody:"メインイベント当日の写真と配布パンフレットを、イベントアーカイブでご覧いただけます。"},en:{previewSubtitle:"Speakers with diverse experiences and expertise share ideas shaped by their own Breakshots.",fullSubtitle:"Meet the TEDxWUSHS Youth 2026 speakers and discover the experiences and ideas behind their talks.",empty:"Speaker information will be announced soon.",comingSoonLabel:"More to come",comingSoonBody:"Explore photographs and the event pamphlet in Event Archives."}},tb=({variant:e="preview"})=>{const{language:t}=B(),{hash:n}=tn(),r=it(),i=Uh[t]??Uh.ja,o=e==="full",s=o?"h1":"h2",l=[...Zc].filter(u=>u.published&&(o||u.featured)).sort((u,d)=>u.displayOrder-d.displayOrder),c=eb(l);return a.jsxs("section",{id:"speakers",className:`speakers-section speakers-section--${e} section-padding`,"aria-labelledby":"speakers-heading",children:[a.jsxs("div",{className:"container speakers-section__container",children:[a.jsxs(de.header,{className:"speakers-section__header",initial:r?!1:{opacity:0,y:20},whileInView:r?void 0:{opacity:1,y:0},viewport:{once:!0},transition:{duration:r?0:.6},children:[a.jsx("span",{className:"speakers-section__eyebrow",lang:"en",children:o?"The 2026 Speaker Lineup":"Ideas in Motion"}),a.jsxs(s,{id:"speakers-heading",className:"speakers-section__title",lang:"en",children:[o?"2026 ":"2026 Featured ",a.jsx("span",{children:"Speakers"})]}),a.jsx("p",{className:"speakers-section__subtitle",children:o?i.fullSubtitle:i.previewSubtitle})]}),a.jsx(wi,{}),l.length>0?o?a.jsx("div",{className:"speakers-section__list",children:l.map((u,d)=>a.jsx(Vh,{speaker:u,language:t,variant:"detail",index:d,initiallyExpanded:n===`#speaker-${u.id}`},u.id))}):a.jsx("div",{className:"speakers-section__grid",children:c.map((u,d)=>a.jsx("div",{className:"speakers-section__row",children:u.map(h=>a.jsx(Vh,{speaker:h,language:t,variant:"preview",index:l.findIndex(f=>f.id===h.id)},h.id))},`speaker-row-${d+1}`))}):a.jsx("p",{className:"speakers-section__empty",children:i.empty}),o&&l.length>0&&a.jsxs("section",{className:"speakers-section__coming-soon","aria-labelledby":"speakers-coming-soon-heading",children:[a.jsx("span",{className:"speakers-section__coming-soon-mark","aria-hidden":"true",children:"+"}),a.jsxs("div",{children:[a.jsx("p",{className:"speakers-section__coming-soon-label",children:i.comingSoonLabel}),a.jsx("h2",{id:"speakers-coming-soon-heading",className:"speakers-section__coming-soon-title",lang:"en",children:"Coming Soon"}),a.jsx("p",{className:"speakers-section__coming-soon-body",children:i.comingSoonBody})]})]}),!o&&l.length>0&&a.jsx("div",{className:"speakers-section__cta-wrap",children:a.jsxs(I,{to:"/speakers",className:"speakers-section__cta",lang:"en",children:["More Details",a.jsx(qt,{size:18,"aria-hidden":"true"})]})})]}),a.jsx("style",{children:`
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
      `})]})},nb=()=>a.jsx("main",{id:"main-content",tabIndex:-1,children:a.jsx(tb,{variant:"full"})}),ft={year2:{ja:"2年生",en:"Year 2"},year3:{ja:"3年生",en:"Year 3"},faculty:{ja:"教員",en:"Faculty"}},mv=[{id:"haruki-kawamata",name:"Haruki Kawamata",grade:ft.year3,role:{ja:"ボードメンバー・オーガナイザー",en:"Board Member / Organizer"}},{id:"takuya-saeki",name:"Takuya Saeki",grade:ft.faculty,role:{ja:"共同オーガナイザー",en:"Co-organizer"}},{id:"hironori-sakai",name:"Hironori Sakai",grade:ft.year2,role:{ja:"ボードメンバー・運営（リーダー）・スピーカーチーム",en:"Board Member / Operation (Leader) / Speaker Team"}},{id:"tatsuaki-matsuda",name:"Tatsuaki Matsuda",grade:ft.year3,role:{ja:"ボードメンバー・テクノロジー・運営・スピーカーチーム",en:"Board Member / Technology / Operation / Speaker Team"}},{id:"yasuhiro-nanjo",name:"Yasuhiro Nanjo",grade:ft.year2,role:{ja:"テクノロジー（リーダー）・広報・運営・マネジメント・スピーカーチーム",en:"Technology (Leader) / Marketing / Operation / Management / Speaker Team"}},{id:"lyu-noguchi",name:"Lyu Noguchi",grade:ft.year3,role:{ja:"スピーカーチーム（リーダー）",en:"Speaker Team (Leader)"}},{id:"yunosuke-sato",name:"Yunosuke Sato",grade:ft.year3,role:{ja:"マネジメント・財務（リーダー）",en:"Management / Finance (Leader)"}},{id:"taisei-moriwaki",name:"Taisei Moriwaki",grade:ft.year3,role:{ja:"広報（リーダー）・運営",en:"Marketing (Leader) / Operation"}},{id:"keisuke-horikoshi",name:"Keisuke Horikoshi",grade:ft.year2,role:{ja:"監査",en:"Audit"}}],rb=e=>e.trim().toLocaleLowerCase("en-US").replace(/(^|[\s'-])[a-z]/g,t=>t.toLocaleUpperCase("en-US")),Oh={ja:{eyebrow:"TEDxWUSHS Youth",year:"2026",fullTitle:"2026 Team",titleLead:"Our",titleAccent:"Team",memberList:"2026年チームメンバー一覧"},en:{eyebrow:"TEDxWUSHS Youth",year:"2026",fullTitle:"2026 Team",titleLead:"Our",titleAccent:"Team",memberList:"2026 team members"}},ib=()=>{const{language:e}=B(),t=it(),n=Oh[e]??Oh.ja;return a.jsxs("main",{id:"main-content",className:"organizers-page",tabIndex:-1,children:[a.jsx("section",{className:"organizers-hero","aria-labelledby":"organizers-title",children:a.jsxs("div",{className:"container organizers-container",children:[a.jsxs(de.div,{className:"organizers-heading",initial:t?!1:{opacity:0,y:20},animate:{opacity:1,y:0},transition:t?{duration:0}:{duration:.55},children:[a.jsx("p",{className:"organizers-eyebrow brand-name",lang:"en",children:n.eyebrow}),a.jsxs("h1",{id:"organizers-title","aria-label":n.fullTitle,children:[a.jsx("span",{className:"organizers-year","aria-hidden":"true",children:n.year}),a.jsxs("span",{className:"organizers-title-text","aria-hidden":"true",children:[n.titleLead," ",a.jsx("span",{className:"highlight-red",children:n.titleAccent})]})]})]}),a.jsx(wi,{}),a.jsx("h2",{className:"visually-hidden",children:n.memberList}),a.jsx("ul",{className:"organizers-grid",children:mv.map((r,i)=>a.jsxs(de.li,{className:"organizer-card",initial:t?!1:{opacity:0,y:24},whileInView:t?void 0:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:t?{duration:0}:{duration:.4,delay:i*.06},children:[a.jsxs("div",{className:"organizer-identity",children:[a.jsx("h3",{className:"organizer-name",lang:"en",children:rb(r.name)}),a.jsx("span",{className:"organizer-grade",children:r.grade[e]??r.grade.ja})]}),a.jsxs("div",{className:"organizer-role-block",children:[a.jsx("span",{className:"organizer-role",lang:"en",children:r.role.en}),e==="ja"&&a.jsx("span",{className:"organizer-role-ja",children:r.role.ja})]})]},r.id))})]})}),a.jsx("style",{children:`
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
      `})]})},ob=()=>{const{language:e}=B();return a.jsxs("main",{id:"main-content",tabIndex:-1,className:"join-us-page",children:[a.jsxs("header",{className:"join-us-page-heading container",children:[a.jsx("span",{lang:"en",children:"Be part of the community"}),a.jsxs("h1",{lang:"en",children:["Join ",a.jsx("span",{className:"highlight-red",children:"Us"})]}),a.jsx("p",{children:e==="ja"?"TEDxWUSHS Youthへの参加方法と最新情報をご案内します。":"Explore ways to take part in TEDxWUSHS Youth and receive the latest event updates."})]}),a.jsx(pv,{hideHeader:!0}),a.jsx("style",{children:`
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
            `})]})},Fh={ja:{steps:[{title:"Application",desc:"2026年開催分の応募受付は終了しました。"},{title:"Audition",desc:"運営チームとの面談で、アイデアを深掘りします。"},{title:"Curation",desc:"TEDxの基準に合わせて、スピーチを磨き上げます。"},{title:"The Stage",desc:"TEDxWUSHS Youthのステージで、世界へ発信！"}],lead:"2026年開催分のスピーカー募集は終了しました。",benefits:["世界中のTEDコミュニティにあなたのアイデアが届きます。","プロフェッショナルなコーチングでプレゼンスキルが向上します。","情熱的な仲間や観客との貴重な出会いがあります。"],closedMessage:"たくさんのご応募ありがとうございました。来年度（2027年）のスピーカー募集は公式SNSで行います。"},en:{steps:[{title:"Application",desc:"Applications for the 2026 event have closed."},{title:"Audition",desc:"Explore your idea in depth during an interview with the organizing team."},{title:"Curation",desc:"Refine your talk in line with TEDx standards."},{title:"The Stage",desc:"Share your idea with the world from the TEDxWUSHS Youth stage!"}],lead:"Speaker applications for the 2026 event have closed.",benefits:["Share your idea with the global TED community.","Improve your presentation skills through professional coaching.","Connect with passionate peers and audience members."],closedMessage:"Thank you to everyone who applied. Recruitment for 2027 speakers will take place on our official social media channels."}},sb=()=>{const{language:e}=B(),t=Fh[e]??Fh.ja;return a.jsxs("main",{id:"main-content",tabIndex:-1,className:"recruit-page",style:{paddingTop:"120px"},children:[a.jsxs("div",{className:"container",children:[a.jsxs(I,{to:"/join-us",className:"back-link",children:[a.jsx(ov,{size:16,"aria-hidden":"true"})," ",a.jsx("span",{lang:"en",children:"Back to Opportunities"})]}),a.jsxs("header",{className:"recruit-header",children:[a.jsx("div",{className:"icon-circle","aria-hidden":"true",children:a.jsx(lv,{size:48})}),a.jsxs("h1",{lang:"en",children:["Speaker ",a.jsx("span",{className:"highlight-red",children:"Applications"})]}),a.jsx("p",{className:"lead-text",children:t.lead})]}),a.jsx(wi,{}),a.jsxs("section",{className:"detail-section",children:[a.jsxs("h2",{lang:"en",children:["Why speak at ",a.jsx("span",{className:"brand-name",children:"TEDxWUSHS Youth"}),"?"]}),a.jsx("ul",{className:"benefits-grid",children:t.benefits.map(n=>a.jsxs("li",{className:"benefit-card",children:[a.jsx(OS,{color:"var(--ted-red)",size:24,"aria-hidden":"true"}),a.jsx("p",{children:n})]},n))})]}),a.jsxs("section",{className:"process-section",children:[a.jsx("h2",{lang:"en",children:"Application Process"}),a.jsx("ol",{className:"steps-container",children:t.steps.map((n,r)=>a.jsxs("li",{className:"step-item",children:[a.jsx("div",{className:"step-num","aria-hidden":"true",children:r+1}),a.jsx("h3",{lang:"en",children:n.title}),a.jsx("p",{children:n.desc})]},n.title))})]}),a.jsxs("section",{className:"cta-box","aria-labelledby":"speaker-applications-status",children:[a.jsx("h2",{id:"speaker-applications-status",lang:"en",children:"Applications Closed"}),a.jsx("p",{children:t.closedMessage}),a.jsx("span",{className:"closed-label",lang:"en",children:"2026 Speaker Applications Closed"})]})]}),a.jsx("style",{children:`
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
      `})]})},Wh={ja:{departmentDescriptions:["イベントの全体企画、進行、会場設営などを担います。","SNSやWebサイトを通じた広報活動、ブランディングを担います。","スピーカーの選定、スピーチ構成のサポートを担います。","デザイン、映像制作、Web開発などを担います。"],lead:"2026年開催分の運営チーム募集は終了しました。たくさんのご応募ありがとうございました。",values:["アイデアを広めること、新しい価値を創ることに情熱を持っている方。","多様な視点を尊重し、チームで最高のパフォーマンスを発揮できる方。","自ら考え、行動し、変化を恐れずに挑戦し続けられる方。"],closedMessage:"来年度（2027年）の運営チームメンバー募集は公式SNSで行います。"},en:{departmentDescriptions:["Oversees overall event planning, program flow, venue setup, and related operations.","Handles promotion and branding through social media and the website.","Handles speaker selection and supports the development of talks.","Handles design, video production, web development, and related creative work."],lead:"Recruitment for the 2026 organizing team has closed. Thank you to everyone who applied.",values:["Passionate about sharing ideas and creating new value.","Respects diverse perspectives and brings out the best in the team through collaboration.","Thinks and acts independently, and continues to take on challenges without fearing change."],closedMessage:"Recruitment for the 2027 organizing team will take place on our official social media channels."}},ab=()=>{const{language:e}=B(),t=Wh[e]??Wh.ja,n=[{title:"Operations",icon:a.jsx(xl,{size:32,"aria-hidden":"true"}),desc:t.departmentDescriptions[0]},{title:"Marketing",icon:a.jsx(rj,{size:32,"aria-hidden":"true"}),desc:t.departmentDescriptions[1]},{title:"Speaker",icon:a.jsx(lv,{size:32,"aria-hidden":"true"}),desc:t.departmentDescriptions[2]},{title:"Creative",icon:a.jsx(WS,{size:32,"aria-hidden":"true"}),desc:t.departmentDescriptions[3]}];return a.jsxs("main",{id:"main-content",tabIndex:-1,className:"recruit-page",style:{paddingTop:"120px"},children:[a.jsxs("div",{className:"container",children:[a.jsxs(I,{to:"/join-us",className:"back-link",children:[a.jsx(ov,{size:16,"aria-hidden":"true"})," ",a.jsx("span",{lang:"en",children:"Back to Opportunities"})]}),a.jsxs("header",{className:"recruit-header",children:[a.jsx("div",{className:"icon-circle","aria-hidden":"true",children:a.jsx(xl,{size:48})}),a.jsx("span",{className:"recruitment-status",lang:"en",children:"2026 Recruitment Closed"}),a.jsxs("h1",{lang:"en",children:["Join the ",a.jsx("span",{className:"highlight-red",children:"Team"})]}),a.jsx("p",{className:"lead-text",children:t.lead})]}),a.jsx(wi,{}),a.jsxs("section",{className:"detail-section",children:[a.jsx("h2",{lang:"en",children:"Departments"}),a.jsx("div",{className:"departments-grid",children:n.map((r,i)=>a.jsxs("div",{className:"dept-card",children:[a.jsx("div",{className:"dept-icon",children:r.icon}),a.jsx("h3",{lang:"en",children:r.title}),a.jsx("p",{children:r.desc})]},i))})]}),a.jsxs("section",{className:"why-join-section",children:[a.jsx("h2",{lang:"en",children:"What we look for"}),a.jsxs("div",{className:"values-grid",children:[a.jsxs("div",{className:"value-item",children:[a.jsx("h3",{lang:"en",children:"Passion"}),a.jsx("p",{children:t.values[0]})]}),a.jsxs("div",{className:"value-item",children:[a.jsx("h3",{lang:"en",children:"Collaboration"}),a.jsx("p",{children:t.values[1]})]}),a.jsxs("div",{className:"value-item",children:[a.jsx("h3",{lang:"en",children:"Proactive"}),a.jsx("p",{children:t.values[2]})]})]})]}),a.jsxs("section",{className:"cta-box","aria-labelledby":"team-recruitment-status-heading",children:[a.jsx("h2",{id:"team-recruitment-status-heading",lang:"en",children:"Recruitment Closed"}),a.jsx("p",{children:t.closedMessage}),a.jsx("span",{className:"closed-label",lang:"en",children:"2026 Team Recruitment Closed"})]})]}),a.jsx("style",{children:`
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
      `})]})},lb=()=>{const{language:e}=B(),t=e==="ja";return a.jsx("main",{id:"main-content",tabIndex:-1,className:"archive-page",children:a.jsxs("div",{className:"container archive-heading",children:[a.jsx("p",{className:"archive-eyebrow",lang:"en",children:"TEDxWUSHS Youth 2026"}),a.jsx("h1",{children:t?"イベントは終了しました":"The event has concluded"}),a.jsx("p",{children:t?"ご参加・ご協力ありがとうございました。参加申込みの受付は終了しています。当日の写真と配布パンフレットをイベントアーカイブでご覧いただけます。":"Thank you to everyone who participated and supported us. Audience registration is closed. Explore photographs and the event pamphlet in Event Archives."}),a.jsx(I,{className:"btn btn-primary",to:"/archives",children:"Event Archives"})]})})},gv="/assets/school-fest-2026-booth-D78qCxP1.jpg",cb=()=>{const{language:e}=B(),t=e==="ja",n=[{title:t?"学院祭 — 英語ディベート":"Gakuinsai — English Debate",description:t?"学院祭での英語ディベートと会場の様子をご紹介します。":"Explore our English debates and scenes from the school festival.",image:gv,href:"/archives/2026/school-fest",status:t?"開催レポート":"Event report"},{title:"TEDxWUSHS Youth — Breakshot",description:t?"2026年10月31日のメインイベントを、会場の写真と配布パンフレットで振り返ります。登壇者と当日のプログラムもご覧いただけます。":"Revisit our October 31, 2026 main event through photographs and the event pamphlet, alongside the speakers and program.",image:Be.src,href:"/archives/2026/main-event",status:t?"当日の写真・配布資料":"Photos & event pamphlet"}];return a.jsx("main",{id:"main-content",tabIndex:-1,className:"archive-page",children:a.jsxs("div",{className:"container",children:[a.jsxs("header",{className:"archive-heading",children:[a.jsx("p",{className:"archive-eyebrow",lang:"en",children:"Our past events"}),a.jsxs("h1",{lang:"en",children:["Event ",a.jsx("span",{className:"highlight-red",children:"Archives"})]}),a.jsx("p",{children:t?"これまでのイベントと、そこで生まれたアイデアを振り返ります。":"Look back at our events and the ideas they brought together."})]}),a.jsxs("section",{"aria-labelledby":"archive-2026-heading",children:[a.jsx("h2",{id:"archive-2026-heading",className:"archive-year",children:"2026"}),a.jsx("div",{className:"archive-grid",children:n.map(r=>a.jsx("article",{className:"archive-card",children:a.jsxs(I,{className:"archive-card__link",to:r.href,"aria-labelledby":`archive-${r.href.split("/").pop()}-title`,children:[a.jsx("img",{src:r.image,alt:"",loading:"lazy"}),a.jsxs("div",{className:"archive-card__body",children:[a.jsx("p",{className:"archive-eyebrow",children:r.status}),a.jsx("h3",{id:`archive-${r.href.split("/").pop()}-title`,children:r.title}),a.jsx("p",{children:r.description}),a.jsxs("span",{className:"archive-card__action",children:[t?"記録を見る":"Explore the archive"," ",a.jsx(qt,{size:18,"aria-hidden":"true"})]})]})]})},r.href))})]})]})})},Hh={ja:[{question:"TEDxWUSHS Youthとは何ですか？",answer:"早稲田大学高等学院の生徒が独立して企画・運営するTEDxイベントです。『Ideas change everything.（アイデアは世界を変える）』という考えのもと、対話と変化につながるアイデアを若者の視点から届けます。"},{question:"参加対象者を教えてください。",answer:"2026年のイベントは終了し、参加申込みの受付も終了しました。当日の写真と配布パンフレットをイベントアーカイブでご覧いただけます。"},{question:"イベントでは何語が使用されますか？",answer:"日本語と英語のバイリンガルイベントを予定しています。日本語・英語のどちらで行われるトークにも、スライド上に字幕を付ける予定です。"},{question:"参加費はかかりますか？",answer:"参加費は無料です。"},{question:"ボランティアとして参加したいのですが、どうすればいいですか？",answer:"2026年開催分の運営チーム募集は終了しました。来年度（2027年）のスピーカー・運営チームメンバー募集は公式SNSで行います。"}],en:[{question:"What is TEDxWUSHS Youth?",answer:"TEDxWUSHS Youth is an independently organized TEDx event planned and run by students of Waseda University Senior High School. We believe that “Ideas change everything.” From a youth perspective, we share ideas that can spark dialogue and change."},{question:"Who can attend?",answer:"The 2026 event has concluded and audience registration is closed. Explore photographs and the event pamphlet in Event Archives."},{question:"What languages will be used at the event?",answer:"The event is planned to be bilingual in Japanese and English. For both Japanese- and English-language talks, we plan to display subtitles on the presentation slides."},{question:"Is there an admission fee?",answer:"The event is free to attend."},{question:"How can I participate as a volunteer?",answer:"Recruitment for the 2026 organizing team has closed. Recruitment for 2027 speakers and organizing team members will take place on our official social media channels."}]},ub={ja:"質問と回答",en:"Questions and Answers"},db=({question:e,answer:t,id:n})=>{const[r,i]=w.useState(!1),o=it(),s=`${n}-question`,l=`${n}-answer`;return a.jsxs("div",{className:"faq-item",children:[a.jsx("h3",{className:"faq-question-heading",children:a.jsxs("button",{id:s,type:"button",className:"faq-question",onClick:()=>i(!r),"aria-expanded":r,"aria-controls":l,children:[a.jsx("span",{children:e}),a.jsx("span",{className:`icon ${r?"open":""}`,"aria-hidden":"true",children:"+"})]})}),a.jsx($g,{children:r&&a.jsx(de.div,{className:"faq-answer",id:l,role:"region","aria-labelledby":s,initial:o?!1:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:o?0:.3},children:a.jsx("p",{children:t})})})]})},hb=({hideHeader:e=!1})=>{const{language:t}=B(),n=Hh[t]??Hh.ja;return a.jsxs("section",{id:"faq",className:"faq section-padding","aria-labelledby":"faq-list-heading",children:[a.jsxs("div",{className:"container",children:[e?a.jsx("h2",{id:"faq-list-heading",className:"visually-hidden",children:ub[t]}):a.jsx("div",{className:"section-header",children:a.jsxs("h2",{id:"faq-list-heading",className:"section-title",lang:"en",children:["Frequently Asked ",a.jsx("span",{className:"highlight-red",children:"Questions"})]})}),a.jsx("div",{className:"faq-list",children:n.map((r,i)=>{const o=`faq-${t}-${i+1}`;return a.jsx(db,{id:o,...r},o)})})]}),a.jsx("style",{children:`
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
      `})]})},fb=()=>{const e=it();return a.jsxs("main",{id:"main-content",tabIndex:-1,className:"faq-page",children:[a.jsx("header",{className:"faq-page-heading container",children:a.jsxs("h1",{lang:"en",children:["Frequently Asked ",a.jsx("span",{className:"highlight-red",children:"Questions"})]})}),a.jsx(de.div,{initial:e?!1:{opacity:0},animate:{opacity:1},transition:{duration:e?0:.8},children:a.jsx(hb,{hideHeader:!0})}),a.jsx("style",{children:`
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
            `})]})},Bh={ja:{title:"ページが見つかりません",description:"指定されたページは移動または削除された可能性があります。",action:"ホームへ戻る"},en:{title:"Page Not Found",description:"The page may have been moved or removed.",action:"Return Home"}},pb=()=>{const{language:e}=B(),t=Bh[e]??Bh.ja;return a.jsxs("main",{id:"main-content",tabIndex:-1,className:"not-found-page",children:[a.jsxs("div",{className:"container not-found-page__content",children:[a.jsx("p",{className:"not-found-page__code","aria-hidden":"true",children:"404"}),a.jsx("h1",{children:t.title}),a.jsx("p",{children:t.description}),a.jsx(I,{to:"/",className:"not-found-page__link",children:t.action})]}),a.jsx("style",{children:`
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
      `})]})},mb="/assets/poster-DnR2-vAa.png",gb=[{time:"13:30",event:"Doors Open",description:{ja:"開場",en:"Audience entry begins"}},{time:"14:00",event:"Opening",description:{ja:"開会・オープニング",en:"Opening remarks"}},{time:"14:10",event:"Speech 1",description:{ja:"武沢 護／早稲田大学高等学院 前学院長",en:"Mamoru Takezawa / Former Headmaster, Waseda University Senior High School"}},{time:"14:30",event:"Speech 2",description:{ja:"長谷川 慶佑／早稲田大学高等学院 1年",en:"Keisuke Hasegawa / First-year student, Waseda University Senior High School"}},{time:"14:45",event:"Speech 3",description:{ja:"堀瀬 善仁／早稲田大学高等学院 2年",en:"Yoshito Horise / Second-year student, Waseda University Senior High School"}},{time:"15:05",event:"Break",description:{ja:"休憩",en:"Intermission"}},{time:"15:20",event:"Speech 4",description:{ja:"榎本 隆之／早稲田大学高等学院 国語科教員",en:"Takayuki Enomoto / Japanese teacher, Waseda University Senior High School"}},{time:"15:40",event:"Speech 5",description:{ja:"黒木 勇人／早稲田大学 情報理工学科2年・学院卒業生",en:"Yuto Kuroki / Second-year student in Computer Science and Engineering at Waseda University; school alumnus"}},{time:"16:00",event:"Speech 6",description:{ja:"小暮 真久／社会起業家・学院卒業生",en:"Masahisa Kogure / Social entrepreneur; school alumnus"}},{time:"16:20",event:"Speech 7",description:{ja:"比留間 礼音／ベンチャーキャピタリスト・学院卒業生",en:"Reon Hiruma / Venture capitalist; school alumnus"}},{time:"16:30",event:"Closing",description:{ja:"閉会",en:"Closing remarks"}},{time:"16:40",event:"Workshop & Networking",description:{ja:"ワークショップ（交流会）",en:"Workshop and networking"}},{time:"17:40",event:"Program Ends",description:{ja:"終了",en:"Program concludes"}}],vb="/assets/takezawa-mamoru-DQgzULZj.webp",yb="/assets/hasegawa-keisuke-MbI--YK6.webp",xb="/assets/horise-yoshito-Dj9jNqmv.webp",wb="/assets/enomoto-takayuki-DxAH8FG2.webp",kb="/assets/kuroki-yuto-Bw3mFlgn.webp",Sb="/assets/kogure-masahisa-6KQVkgAN.webp",jb="/assets/reon-hiruma-BoiuGCxB.webp",bb=[["takezawa-mamoru",vb],["hasegawa-keisuke",yb],["horise-yoshito",xb],["enomoto-takayuki",wb],["kuroki-yuto",kb],["kogure-masahisa",Sb],["reon-hiruma",jb]],Tb=bb.map(([e,t])=>({...Zc.find(n=>n.id===e),poster:t})),Eb=()=>{const{language:e}=B(),t=e==="ja";return a.jsx("section",{id:"event-gallery",className:"main-event-report","aria-labelledby":"main-event-gallery-title",children:a.jsxs("div",{className:"container",children:[a.jsxs("header",{className:"main-event-report__heading",children:[a.jsx("p",{className:"main-event-eyebrow",lang:"en",children:"03 / Scenes from the day"}),a.jsx("h2",{id:"main-event-gallery-title",lang:"en",children:"Gallery"}),a.jsx("p",{children:t?"ステージ、客席、トークのひとこまを写真でご紹介します。":"Scenes from the stage, audience, and talks."})]}),a.jsx("div",{className:"main-event-gallery",children:fv.map(n=>a.jsxs("figure",{children:[a.jsx("a",{href:n.src,target:"_blank",rel:"noopener noreferrer","aria-label":`${n.caption[e]} — ${t?"写真を別タブで開く":"Open photo in a new tab"}`,children:a.jsx("img",{src:n.src,width:n.width,height:n.height,alt:n.caption[e],loading:"lazy",decoding:"async"})}),a.jsx("figcaption",{children:n.caption[e]})]},n.id))})]})})},_b=()=>{const{language:e}=B(),t=e==="ja";return a.jsx("section",{id:"event-pamphlets",className:"main-event-report main-event-report--documents","aria-labelledby":"main-event-pamphlets-title",children:a.jsxs("div",{className:"container",children:[a.jsxs("header",{className:"main-event-report__heading",children:[a.jsx("p",{className:"main-event-eyebrow",lang:"en",children:"From the event"}),a.jsx("h2",{id:"main-event-pamphlets-title",children:t?"当日配布パンフレット":"Event Pamphlet"}),a.jsx("p",{children:t?"登壇者の紹介と当日のプログラムを、配布資料のままご覧いただけます。":"Explore the speaker introductions and program as presented in the event pamphlet."})]}),a.jsx("div",{className:"main-event-documents",children:Pj.map(n=>a.jsxs("article",{children:[a.jsx("img",{src:n.preview,width:"1095",height:"775",alt:t?`${n.title.ja}の紙面プレビュー`:`Preview of ${n.title.en}`,loading:"lazy",decoding:"async"}),a.jsxs("div",{children:[a.jsx("h3",{children:n.title[e]}),a.jsx("p",{children:n.description[e]}),a.jsxs("a",{href:n.href,target:"_blank",rel:"noopener noreferrer",children:[t?"PDFを開く（別タブ）":"Open PDF (new tab)"," ",a.jsx(Bo,{size:16,"aria-hidden":"true"})]})]})]},n.id))})]})})},Db=[["event-introduction","Introduction",{ja:"開催年・テーマ、このアーカイブの紹介と代表写真",en:"Event year, theme, introduction to the archive, and cover photo"}],["event-overview","Overview",{ja:"開催概要、オープニングムービー、当日のタイムテーブル、配布パンフレット",en:"Event details, opening movie, timetable, and the event pamphlet"}],["event-speakers","Speakers & Talks",{ja:"登壇者7名のプロフィールと講演タイトル・使用言語・トーク紹介",en:"Seven speaker profiles, talk titles, languages, and introductions"}],["event-gallery","Gallery",{ja:"登壇中のステージ、客席、会場のロゴなど当日の写真",en:"Photographs of talks, the audience, and the TEDx letters"}],["event-team","Team",{ja:"2026年の運営メンバーと担当、ご協力いただいた皆さまへのリンク",en:"The 2026 organizing team, their roles, and acknowledgements"}]],Cb=()=>{const{language:e}=B(),t=e==="ja",n=t?[["開催日","2026年10月31日（土）"],["時間","開場 13:30／開催 14:00〜18:00"],["会場","早稲田大学高等学院 講堂"],["参加対象","高等学院・中学部の生徒及びその保護者、高等学院OB"],["参加費","無料"],["プログラム","7名のトーク、ワークショップ・交流会"],["言語","日本語・英語"]]:[["Date","October 31, 2026"],["Time","Doors open 1:30 PM / Event 2:00–6:00 PM"],["Venue","Waseda University Senior High School Auditorium"],["Audience","Senior High and Junior High students, their parents or guardians, and Senior High alumni"],["Admission","Free"],["Program","Seven talks, workshop and networking"],["Languages","Japanese and English"]];return a.jsxs("main",{id:"main-content",tabIndex:-1,className:"main-event-page",children:[a.jsxs("header",{id:"event-introduction",className:"main-event-introduction container",children:[a.jsxs("div",{children:[a.jsx(I,{className:"main-event-back",to:"/archives",children:"← Event Archives"}),a.jsx("p",{className:"main-event-eyebrow",lang:"en",children:"2026 / TEDxWUSHS Youth"}),a.jsxs("h1",{lang:"en",children:["TEDx WUSHS Youth",a.jsx("br",{}),"2026 MAIN EVENT"]}),a.jsx("p",{children:t?"2026年10月31日、早稲田大学高等学院 講堂で開催した「Breakshot」。当日の写真、配布パンフレット、登壇者とプログラムをまとめたイベントアーカイブです。":"An event archive of “Breakshot,” held at Waseda University Senior High School Auditorium on October 31, 2026, featuring photographs, the event pamphlet, speakers, and program."})]}),a.jsxs("figure",{children:[a.jsx("img",{src:Be.src,width:Be.width,height:Be.height,alt:Be.caption[e],decoding:"async"}),a.jsxs("figcaption",{children:[a.jsx("strong",{lang:"en",children:"Breakshot"}),a.jsx("span",{lang:"en",children:"October 31, 2026 · Waseda University Senior High School"})]})]})]}),a.jsxs("nav",{className:"main-event-toc container","aria-labelledby":"event-contents-title",children:[a.jsx("h2",{id:"event-contents-title",children:t?"目次":"Contents"}),a.jsx("ol",{start:"0",children:Db.map(([r,i,o],s)=>a.jsx("li",{children:a.jsxs("a",{href:`#${r}`,children:[a.jsxs("span",{"aria-hidden":"true",children:["0",s]}),a.jsxs("span",{className:"main-event-toc__text",children:[a.jsx("strong",{lang:"en",children:i}),a.jsx("small",{children:o[e]})]})]})},r))})]}),a.jsxs("section",{id:"event-overview",className:"main-event-chapter container","aria-labelledby":"event-overview-title",children:[a.jsx("span",{id:"event-report",className:"main-event-anchor"}),a.jsx("p",{className:"main-event-eyebrow",lang:"en",children:"01 / The event"}),a.jsx("h2",{id:"event-overview-title",lang:"en",children:"Overview"}),a.jsx("p",{className:"main-event-lead",children:t?"早稲田大学高等学院の生徒が企画・運営したTEDxイベントです。さまざまな経験を持つ登壇者が「Breakshot」をテーマにアイデアを共有しました。ご来場いただいた皆さま、登壇者の皆さま、開催にご協力いただいたすべての方々に感謝申し上げます。":"An independently organized TEDx event led by students of Waseda University Senior High School. Speakers with diverse experiences shared ideas around “Breakshot.” Our sincere thanks to everyone who attended, spoke, and helped make the event possible."}),a.jsx("dl",{className:"main-event-facts",children:n.map(([r,i])=>a.jsxs("div",{children:[a.jsx("dt",{children:r}),a.jsx("dd",{children:i})]},r))}),a.jsxs("section",{className:"main-event-movie","aria-labelledby":"event-opening-movie-title",children:[a.jsx("h3",{id:"event-opening-movie-title",children:t?"オープニングムービー":"Opening Movie"}),a.jsx("p",{children:t?"当日のオープニングムービーをご覧いただけます。":"Watch the opening movie from the event."}),a.jsx("iframe",{src:Mh.embedUrl,title:t?"TEDxWUSHS Youth 2026 オープニングムービー":"TEDxWUSHS Youth 2026 Opening Movie",loading:"lazy",allow:"encrypted-media; picture-in-picture; fullscreen",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0}),a.jsxs("a",{href:Mh.url,target:"_blank",rel:"noopener noreferrer",children:[t?"YouTubeで見る（別タブ）":"Watch on YouTube (new tab)"," ↗"]})]}),a.jsxs("details",{id:"event-schedule",className:"main-event-schedule",children:[a.jsx("summary",{children:t?"当日のタイムテーブルを見る":"View the event timetable"}),a.jsx("p",{children:t?"当日のプログラムとして案内したタイムテーブルです。":"The timetable published for the event."}),a.jsx("ol",{children:gb.map(r=>a.jsxs("li",{children:[a.jsx("time",{children:r.time}),a.jsxs("div",{children:[a.jsx("strong",{lang:"en",children:r.event}),a.jsx("p",{children:r.description[e]})]})]},r.time))})]}),a.jsxs("details",{className:"main-event-schedule main-event-poster",children:[a.jsx("summary",{children:t?"イベントポスターを見る":"View the event poster"}),a.jsx("img",{src:mb,alt:t?"TEDxWUSHS Youth 2026 イベントポスター":"TEDxWUSHS Youth 2026 event poster",loading:"lazy"})]}),a.jsx(_b,{})]}),a.jsxs("section",{id:"event-speakers",className:"main-event-chapter container","aria-labelledby":"event-speakers-title",children:[a.jsx("span",{id:"event-talks",className:"main-event-anchor"}),a.jsx("p",{className:"main-event-eyebrow",lang:"en",children:"02 / Seven speakers, seven perspectives"}),a.jsx("h2",{id:"event-speakers-title",lang:"en",children:"Speakers & Talks"}),a.jsx("p",{className:"main-event-lead",children:t?"当日のプログラム順に、7名の登壇者のプロフィールと、それぞれのトークをご紹介します。":"Meet the seven speakers and explore their talks, in program order."}),a.jsxs("aside",{className:"main-event-talks-notice","aria-labelledby":"event-talks-release-title",children:[a.jsx("h3",{id:"event-talks-release-title",children:t?"トーク動画の公開について":"Talk video updates"}),a.jsx("p",{children:t?"トーク動画がTED公式YouTubeチャンネルで公開されるまでには、もう少し時間がかかります。公開まで今しばらくお待ちください。公開されましたら公式SNSでお知らせしますので、引き続きフォローしてお待ちいただけますと幸いです。":"It will take a little more time for the talk videos to be published on TED’s official YouTube channel. Thank you for your patience. We will announce their release on our official social media channels, so please keep following us for updates."}),a.jsxs("div",{children:[a.jsx("a",{href:"https://www.instagram.com/tedxwushs/",target:"_blank",rel:"noopener noreferrer",children:"Instagram ↗"}),a.jsx("a",{href:"https://x.com/TEDxWUSHS",target:"_blank",rel:"noopener noreferrer",children:"X ↗"})]})]}),a.jsx("div",{className:"main-event-speakers",children:Tb.map((r,i)=>a.jsxs("article",{id:`talk-${r.id}`,children:[a.jsx("img",{src:r.poster,width:"864",height:"1080",alt:t?`${r.name.ja}の登壇者紹介ビジュアル（日本語）`:`Original Japanese speaker introduction poster for ${r.name.en}`,loading:"lazy",decoding:"async"}),a.jsxs("div",{children:[a.jsxs("p",{className:"main-event-eyebrow",lang:"en",children:["Speaker 0",i+1]}),a.jsx("h3",{children:r.name[e]}),a.jsx("p",{className:"main-event-role",children:r.role[e]}),a.jsx("p",{children:r.shortBio[e]}),a.jsxs(I,{to:`/speakers#speaker-${r.id}`,children:[t?"プロフィールの詳細":"Full profile"," →"]}),a.jsxs("div",{className:"main-event-speaker-talk",children:[a.jsx("p",{className:"main-event-eyebrow",children:r.talk.language[e]}),a.jsx("h4",{children:r.talk.title[e]}),a.jsx("p",{children:r.talk.description[e]})]})]})]},r.id))})]}),a.jsx(Eb,{}),a.jsxs("section",{id:"event-team",className:"main-event-chapter container","aria-labelledby":"event-team-title",children:[a.jsx("p",{className:"main-event-eyebrow",lang:"en",children:"04 / Behind the scenes"}),a.jsx("h2",{id:"event-team-title",lang:"en",children:"Team"}),a.jsx("p",{className:"main-event-lead",children:t?"TEDxWUSHS Youth 2026を企画・運営したチームメンバーです。":"The team who planned and organized TEDxWUSHS Youth 2026."}),a.jsx("ul",{className:"main-event-team",children:mv.map(r=>a.jsxs("li",{children:[a.jsx("h3",{lang:"en",children:r.name}),a.jsx("p",{children:r.grade[e]}),a.jsx("p",{children:r.role[e]})]},r.id))}),a.jsxs("div",{className:"main-event-footer-links",children:[a.jsxs(I,{to:"/team",children:[t?"2026年チームの紹介":"Meet the 2026 team"," →"]}),a.jsxs(I,{to:"/acknowledgements",children:[t?"謝礼・ご協力いただいた皆さま":"Acknowledgements"," →"]}),a.jsx(I,{to:"/archives",children:"← Event Archives"})]})]})]})},$h={ja:{eyebrow:"Gakuinsai 2026 / Feature",title:"学院祭で英語ディベートを開催",lead:"TEDxWUSHS Youthは学院祭期間中、頌栄女子学院高等学校、慶應義塾高等学校、早稲田大学本庄高等学院の3校を招き、社会や日常に関わる問いを英語で議論しました。競技として勝敗を決めながら、アイデアを問い直し、より深く理解する場を目指した企画です。",meta:"2026年10月10日・11日／早稲田大学高等学院 ゼミ室2",boothAlt:"学院祭のTEDxWUSHS Youth展示会場。黒板のロゴとBreakshotを表現したビリヤード台が設置されている。",boothCaption:"雄弁部と共同で使用したゼミ室2の展示会場。ビリヤード台は、TEDxWUSHS Youth 2026のテーマ「Breakshot」を表現しています。",contentsLabel:"この記事の内容",chapters:[{number:"01",href:"#overview",title:"学院祭で英語ディベートを開催",description:"開催概要・対戦校・試合結果"},{number:"02",href:"#about-tedx",title:"TED/TEDxとは",description:"TEDの使命と、地域からアイデアを広めるTEDx"},{number:"03",href:"#why-debate",title:"TED/TEDxがディベートを行う理由",description:"Debateの理念と、今回の工夫"}],overview:{number:"01",eyebrow:"Event report",title:"学院祭で英語ディベートを開催",intro:"10月10日と11日の2日間、TEDxWUSHS Youthは雄弁部と共同でゼミ室2を使用し、団体紹介と哲学的英語ディベートを実施しました。頌栄女子学院高等学校、慶應義塾高等学校、早稲田大学本庄高等学院ESSを迎え、3つの論題について議論しました。",detailsLabel:"開催概要",details:[{term:"開催日",description:"2026年10月10日（土）・11日（日）"},{term:"会場",description:"早稲田大学高等学院 ゼミ室2"},{term:"実施内容",description:"団体紹介・哲学的英語ディベート"},{term:"共同展示",description:"早稲田大学高等学院 雄弁部"}],matchesLabel:"対戦記録",dateLabel:"日時",opponentLabel:"対戦校",motionLabel:"論題",positionLabel:"両校の立場",resultLabel:"結果",leafletAlt:"TEDxWUSHS Youth学院祭企画「English Debate」の案内チラシ",leafletCaption:"学院祭で配布・掲示したEnglish Debateの案内チラシ。"},aboutTedx:{number:"02",eyebrow:"TED and TEDx",title:"TED/TEDxとは",intro:"TEDとは、1984年にアメリカで始まったカンファレンスに端を発する非営利組織です。最初のカンファレンスは、カリフォルニア州モントレーで開催されました。",acronymLead:"TEDという名称は、次の3つの言葉に由来します。",acronym:[{initial:"T",term:"Technology",translation:"テクノロジー"},{initial:"E",term:"Entertainment",translation:"エンターテインメント"},{initial:"D",term:"Design",translation:"デザイン"}],body:"技術・エンターテインメント・デザインという3領域を結び付ける場として始まり、現在では分野を越えて、世界をより深く理解するきっかけとなるアイデアを届けています。",tedxBody:"TEDxは、TEDの精神を地域のコミュニティへ届けるための草の根の取り組みです。TEDから付与された無償ライセンスのもと、各地域のチームが独立して企画・運営し、その地域から生まれるアイデアや対話を広げます。TEDxWUSHS Youthも、その一つです。",quote:"Ideas change everything.",quoteTranslation:"アイデアは世界を変える",dialogueTitle:"アイデアが、対話と変化につながるまで",dialogue:["ここで重要なのは、TEDが優れた知識や面白いアイデアを一方的に発信することだけを目指しているわけではないという点です。","スピーカーが届けたアイデアをきっかけに、オーディエンス層に応じてスピーカー/オーディエンスの間に深い交流と対話が生まれる。そして、そのアイデアが実際のオーディエンスのアクションにつながっていく。TEDが重視するのは、そうしたアイデアの可能性です。"],watchTitle:"実際のTED/TEDxを見てみる",watchIntro:"まだイメージが湧かない方は、実際のTED TalkとTEDx Talkをご覧ください。",watchOnYouTube:"YouTubeで見る",videos:[{label:"TED Talk / 日本語字幕",title:"ジュリアン・トレジャー：人を惹きつける話し方",embedUrl:"https://www.youtube-nocookie.com/embed/eIho2S0ZahI?cc_load_policy=1&cc_lang_pref=ja&hl=ja&origin=https%3A%2F%2Fwww.tedxwushs.com&rel=0",youtubeUrl:"https://www.youtube.com/watch?v=eIho2S0ZahI"},{label:"TEDxSapporo",title:"思うは招く｜植松 努",embedUrl:"https://www.youtube-nocookie.com/embed/gBumdOWWMhY?origin=https%3A%2F%2Fwww.tedxwushs.com&rel=0",youtubeUrl:"https://www.youtube.com/watch?v=gBumdOWWMhY"}]},whyDebate:{number:"03",eyebrow:"Debate and dialogue",title:"TED/TEDxがディベートを行う理由",intro:"ここで、今回の英語ディベート企画とTEDの関係に戻りましょう。TEDは公式のCuration Guidelinesで、「Debate（討論）」を価値の一つとして明確に掲げています。",body:"TEDの精神の中にあるDebateは、一般的な競技英語ディベートのように、勝敗や最終的な結論だけを求めるものではありません。TEDは懐疑的な視点や批判的な検討を歓迎し、それらをアイデアの改善や、見落としていた課題の発見につなげます。同時に、相互尊重を前提とし、差別やヘイトスピーチを認めていません。今回の企画でも、ディベート参加者をアイデアを届ける話者として捉えると同時に、オーディエンスの立場を踏まえたうえでの議論を意識し、扱うアイデアに深みを与えることを重視しました。そして、特にDebateの中でも質問時間を設け、オーディエンスを取り込んだ議論にすることができました。また、異なる前提から議論が始まり、主張が十分に噛み合わない場面もありましたが、それ含めオーディエンスに新しい発見をもたらすことができ有意義な会になったと思います。",practiceTitle:"今回の工夫",practices:["立論と反論は英語で行い、論点を言葉にして明確にする。","試合中に質問時間を設け、状況に応じて日本語での質問も受け付ける。"]},programAction:"イベントアーカイブに戻る",references:{eyebrow:"Sources",title:"参考資料",description:"TED/TEDxおよびDebateに関する記述は、以下のTED公式資料を参照しています。",items:[{title:"TED — About",description:"TEDの使命と活動について",href:"https://www.ted.com/about"},{title:"History of TED",description:"1984年の創設とカンファレンスの歩みについて",href:"https://www.ted.com/about/our-organization/history-of-ted"},{title:"TED Conferences",description:"Technology・Entertainment・Designという名称の由来について",href:"https://www.ted.com/about/conferences"},{title:"TEDx Program",description:"TEDxの仕組みと地域コミュニティでの役割について",href:"https://www.ted.com/tedx"},{title:"TED’s Curation Guidelines",description:"Debate、相互尊重、ヘイトスピーチに関する方針",href:"https://www.ted.com/about/our-organization/how-ted-works/ted-s-curation-guidelines"}]}},en:{eyebrow:"Gakuinsai 2026 / Feature",title:"English debates at Gakuinsai 2026",lead:"During Gakuinsai, TEDxWUSHS Youth welcomed Shoei Girls’ Senior High School, Keio Senior High School, and Waseda University Honjo Senior High School for English debates on questions connected to society and everyday life. The event kept the competitive format while creating space to re-examine ideas and understand them more deeply.",meta:"October 10–11, 2026 / Seminar Room 2, Waseda University Senior High School",boothAlt:"The TEDxWUSHS Youth exhibition at Gakuinsai, with a logo on the blackboard and a billiards table representing Breakshot.",boothCaption:"The exhibition space shared with the school debate club. The billiards table represented “Breakshot,” the theme of TEDxWUSHS Youth 2026.",contentsLabel:"In this feature",chapters:[{number:"01",href:"#overview",title:"English debates at Gakuinsai",description:"Event details, participating schools, and results"},{number:"02",href:"#about-tedx",title:"What are TED and TEDx?",description:"TED’s mission and how TEDx carries ideas into local communities"},{number:"03",href:"#why-debate",title:"Why TED/TEDx engages in debate",description:"The idea of Debate and what we tried"}],overview:{number:"01",eyebrow:"Event report",title:"English debates at Gakuinsai",intro:"On October 10 and 11, TEDxWUSHS Youth shared Seminar Room 2 with the school debate club for an introduction to our activities and three philosophical English debates. We welcomed Shoei Girls’ Senior High School, Keio Senior High School, and Waseda University Honjo Senior High School ESS.",detailsLabel:"Event details",details:[{term:"Dates",description:"Saturday, October 10 and Sunday, October 11, 2026"},{term:"Venue",description:"Seminar Room 2, Waseda University Senior High School"},{term:"Program",description:"Organization showcase and philosophical English debates"},{term:"Shared with",description:"Waseda University Senior High School Debate Club"}],matchesLabel:"Debate record",dateLabel:"Date and time",opponentLabel:"Opponent",motionLabel:"Motion",positionLabel:"Positions",resultLabel:"Result",leafletAlt:"Flyer for the TEDxWUSHS Youth English Debate program at Gakuinsai 2026",leafletCaption:"The English Debate flyer displayed and distributed at Gakuinsai."},aboutTedx:{number:"02",eyebrow:"TED and TEDx",title:"What are TED and TEDx?",intro:"TED is a nonprofit organization that traces its roots to a conference first held in the United States in 1984. The first conference took place in Monterey, California.",acronymLead:"The name TED comes from three words:",acronym:[{initial:"T",term:"Technology",translation:"Technology"},{initial:"E",term:"Entertainment",translation:"Entertainment"},{initial:"D",term:"Design",translation:"Design"}],body:"TED began by bringing together technology, entertainment, and design. Today, its work reaches across disciplines to share ideas that help people understand the world more deeply.",tedxBody:"TEDx is a grassroots initiative that brings the spirit of TED to local communities. Under a free license granted by TED, local teams independently organize events that uncover ideas and create conversation in their communities. TEDxWUSHS Youth is one of those independently organized events.",quote:"Ideas change everything.",quoteTranslation:"アイデアは世界を変える",dialogueTitle:"From an idea to dialogue and change",dialogue:["What matters is that TED is not simply about broadcasting excellent knowledge or interesting ideas in one direction.","An idea shared by a speaker can create deep exchange and dialogue between speakers and audience members in ways that reflect the audience’s background. The idea can then lead to real action by the audience. TED places value on this wider potential of ideas."],watchTitle:"Watch TED and TEDx in action",watchIntro:"If the distinction still feels abstract, these TED and TEDx Talks offer two concrete examples.",watchOnYouTube:"Watch on YouTube",videos:[{label:"TED Talk / Japanese subtitles",title:"How to speak so that people want to listen | Julian Treasure",embedUrl:"https://www.youtube-nocookie.com/embed/eIho2S0ZahI?cc_load_policy=1&cc_lang_pref=ja&hl=ja&origin=https%3A%2F%2Fwww.tedxwushs.com&rel=0",youtubeUrl:"https://www.youtube.com/watch?v=eIho2S0ZahI"},{label:"TEDxSapporo",title:"Hope invites | Tsutomu Uematsu",embedUrl:"https://www.youtube-nocookie.com/embed/gBumdOWWMhY?origin=https%3A%2F%2Fwww.tedxwushs.com&rel=0",youtubeUrl:"https://www.youtube.com/watch?v=gBumdOWWMhY"}]},whyDebate:{number:"03",eyebrow:"Debate and dialogue",title:"Why TED/TEDx engages in debate",intro:"Returning to the relationship between this English debate project and TED, TED explicitly identifies “Debate” as one of its values in its official Curation Guidelines.",body:"Debate within the spirit of TED differs from conventional competitive English debate focused only on a winner or a final conclusion. TED welcomes skepticism and critical examination as ways to improve an idea or reveal its flaws, while requiring mutual respect and rejecting bigotry and hate speech. In this project, we treated each participant as a speaker carrying an idea while also shaping the discussion around the audience’s perspective, so that the ideas being examined could gain greater depth. In particular, we included question time to bring the audience directly into the discussion. At times, arguments began from different assumptions and did not fully meet; even those moments offered the audience new discoveries and helped make the event meaningful.",practiceTitle:"What we tried",practices:["Cases and rebuttals were delivered in English to make each line of reasoning explicit.","Question time was built into the matches, with Japanese questions accepted when appropriate."]},programAction:"Back to Event Archives",references:{eyebrow:"Sources",title:"References",description:"Our descriptions of TED, TEDx, and Debate draw on the following official TED sources.",items:[{title:"TED — About",description:"TED’s mission and work",href:"https://www.ted.com/about"},{title:"History of TED",description:"TED’s origins in 1984 and the history of its conference",href:"https://www.ted.com/about/our-organization/history-of-ted"},{title:"TED Conferences",description:"The origin of the name Technology, Entertainment, and Design",href:"https://www.ted.com/about/conferences"},{title:"TEDx Program",description:"How TEDx works in local communities",href:"https://www.ted.com/tedx"},{title:"TED’s Curation Guidelines",description:"Guidance on debate, mutual respect, and hate speech",href:"https://www.ted.com/about/our-organization/how-ted-works/ted-s-curation-guidelines"}]}}},Pb=[{date:{ja:"10月10日（土）12:00–13:00",en:"Saturday, October 10 / 12:00–1:00 PM"},opponent:{ja:"頌栄女子学院高等学校",en:"Shoei Girls’ Senior High School"},motionJa:"日本はボランティア（社会奉仕）活動を高校卒業の要件とするべきである。",motionEn:"Japan should make community service a requirement for high school graduation.",positions:[{school:{ja:"頌栄女子学院高等学校",en:"Shoei Girls’ Senior High School"},stance:{ja:"ボランティア活動の必修化に肯定",en:"Supports requiring volunteer service for graduation"}},{school:{ja:"早稲田大学高等学院",en:"Waseda University Senior High School"},stance:{ja:"ボランティア活動の必修化に否定",en:"Opposes requiring volunteer service for graduation"}}],result:{ja:"頌栄女子学院高等学校の勝利",en:"Shoei Girls’ Senior High School won"}},{date:{ja:"10月11日（日）11:30–12:30",en:"Sunday, October 11 / 11:30 AM–12:30 PM"},opponent:{ja:"慶應義塾高等学校",en:"Keio Senior High School"},motionJa:"日本は高所得者に対する所得税を引き上げるべきである。",motionEn:"Japan should significantly increase income taxes on high-income earners.",positions:[{school:{ja:"慶應義塾高等学校",en:"Keio Senior High School"},stance:{ja:"高所得者への所得税引き上げに賛成",en:"Supports raising income taxes on high-income earners"}},{school:{ja:"早稲田大学高等学院",en:"Waseda University Senior High School"},stance:{ja:"高所得者への所得税引き上げに反対",en:"Opposes raising income taxes on high-income earners"}}],result:{ja:"慶應義塾高等学校の勝利",en:"Keio Senior High School won"}},{date:{ja:"10月11日（日）14:00–15:00",en:"Sunday, October 11 / 2:00–3:00 PM"},opponent:{ja:"早稲田大学本庄高等学院 ESS",en:"Waseda University Honjo Senior High School ESS"},motionJa:"恋愛より友情を優先すべきである。",motionEn:"This House believes that friendship is more important than romantic relationships.",positions:[{school:{ja:"早稲田大学本庄高等学院 ESS",en:"Waseda University Honjo Senior High School ESS"},stance:{ja:"恋愛関係を重視する立場",en:"Prioritizes romantic relationships"}},{school:{ja:"早稲田大学高等学院",en:"Waseda University Senior High School"},stance:{ja:"友情を重視する立場",en:"Prioritizes friendship"}}],result:{ja:"早稲田大学高等学院の勝利",en:"Waseda University Senior High School won"}}],Nb=()=>{const{language:e}=B(),t=$h[e]??$h.ja;return a.jsxs("main",{id:"main-content",tabIndex:-1,className:"school-fest-page",children:[a.jsxs("article",{children:[a.jsx("header",{className:"school-fest-hero",children:a.jsxs("div",{className:"container school-fest-hero__layout",children:[a.jsxs("div",{className:"school-fest-hero__copy",children:[a.jsx("p",{className:"school-fest-eyebrow",lang:"en",children:t.eyebrow}),a.jsx("h1",{children:t.title}),a.jsx("p",{className:"school-fest-hero__lead",children:t.lead}),a.jsx("p",{className:"school-fest-hero__meta",children:t.meta})]}),a.jsxs("figure",{className:"school-fest-hero__media",children:[a.jsx("img",{src:gv,alt:t.boothAlt}),a.jsx("figcaption",{children:t.boothCaption})]})]})}),a.jsx("nav",{className:"school-fest-contents","aria-label":t.contentsLabel,children:a.jsxs("div",{className:"container",children:[a.jsx("p",{className:"school-fest-contents__label",children:t.contentsLabel}),a.jsx("ol",{children:t.chapters.map(n=>a.jsx("li",{children:a.jsxs("a",{href:n.href,children:[a.jsx("span",{className:"school-fest-contents__number","aria-hidden":"true",children:n.number}),a.jsxs("span",{children:[a.jsx("strong",{children:n.title}),a.jsx("small",{children:n.description})]})]})},n.number))})]})}),a.jsx("section",{id:"overview",className:"school-fest-section school-fest-section--light","aria-labelledby":"overview-title",children:a.jsxs("div",{className:"container",children:[a.jsxs("header",{className:"school-fest-section__header",children:[a.jsx("span",{className:"school-fest-section__number","aria-hidden":"true",children:t.overview.number}),a.jsxs("div",{children:[a.jsx("p",{className:"school-fest-eyebrow",lang:"en",children:t.overview.eyebrow}),a.jsx("h2",{id:"overview-title",children:t.overview.title}),a.jsx("p",{children:t.overview.intro})]})]}),a.jsx("dl",{className:"school-fest-facts","aria-label":t.overview.detailsLabel,children:t.overview.details.map(n=>a.jsxs("div",{children:[a.jsx("dt",{children:n.term}),a.jsx("dd",{children:n.description})]},n.term))}),a.jsxs("div",{className:"school-fest-overview__layout",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"school-fest-subheading",children:t.overview.matchesLabel}),a.jsx("ol",{className:"school-fest-matches",children:Pb.map((n,r)=>a.jsxs("li",{children:[a.jsx("span",{className:"school-fest-match__index","aria-hidden":"true",children:String(r+1).padStart(2,"0")}),a.jsxs("div",{className:"school-fest-match__body",children:[a.jsxs("dl",{children:[a.jsxs("div",{children:[a.jsx("dt",{children:t.overview.dateLabel}),a.jsx("dd",{children:n.date[e]??n.date.ja})]}),a.jsxs("div",{children:[a.jsx("dt",{children:t.overview.opponentLabel}),a.jsx("dd",{children:n.opponent[e]??n.opponent.ja})]})]}),a.jsxs("div",{className:"school-fest-match__motion",children:[a.jsx("span",{children:t.overview.motionLabel}),a.jsx("p",{children:e==="en"?n.motionEn:n.motionJa}),a.jsx("p",{lang:e==="en"?"ja":"en",children:e==="en"?n.motionJa:n.motionEn})]}),a.jsxs("div",{className:"school-fest-match__positions",children:[a.jsx("span",{children:t.overview.positionLabel}),a.jsx("dl",{children:n.positions.map(i=>a.jsxs("div",{children:[a.jsx("dt",{children:i.school[e]??i.school.ja}),a.jsx("dd",{children:i.stance[e]??i.stance.ja})]},i.school.en))})]}),a.jsxs("p",{className:"school-fest-match__result",children:[a.jsx("span",{children:t.overview.resultLabel}),n.result[e]??n.result.ja]})]})]},n.motionEn))})]}),a.jsxs("figure",{className:"school-fest-leaflet",children:[a.jsx("img",{src:wl,alt:t.overview.leafletAlt,loading:"lazy",decoding:"async"}),a.jsx("figcaption",{children:t.overview.leafletCaption})]})]})]})}),a.jsx("section",{id:"about-tedx",className:"school-fest-section school-fest-section--dark","aria-labelledby":"about-tedx-title",children:a.jsxs("div",{className:"container school-fest-rationale",children:[a.jsxs("header",{className:"school-fest-section__header",children:[a.jsx("span",{className:"school-fest-section__number","aria-hidden":"true",children:t.aboutTedx.number}),a.jsxs("div",{children:[a.jsx("p",{className:"school-fest-eyebrow",lang:"en",children:t.aboutTedx.eyebrow}),a.jsx("h2",{id:"about-tedx-title",children:t.aboutTedx.title})]})]}),a.jsxs("div",{className:"school-fest-rationale__grid",children:[a.jsxs("div",{className:"school-fest-rationale__copy",children:[a.jsx("p",{children:t.aboutTedx.intro}),a.jsx("p",{children:t.aboutTedx.acronymLead}),a.jsx("dl",{className:"school-fest-acronym",children:t.aboutTedx.acronym.map(n=>a.jsxs("div",{children:[a.jsx("dt",{children:n.initial}),a.jsxs("dd",{children:[a.jsx("strong",{lang:"en",children:n.term}),n.translation!==n.term&&a.jsx("span",{children:n.translation})]})]},n.initial))}),a.jsx("p",{children:t.aboutTedx.body}),a.jsx("p",{children:t.aboutTedx.tedxBody})]}),a.jsxs("blockquote",{className:"school-fest-quote",children:[a.jsx("p",{lang:"en",children:t.aboutTedx.quote}),a.jsx("footer",{children:t.aboutTedx.quoteTranslation})]})]}),a.jsxs("div",{className:"school-fest-dialogue",children:[a.jsx("h3",{children:t.aboutTedx.dialogueTitle}),a.jsx("div",{children:t.aboutTedx.dialogue.map(n=>a.jsx("p",{children:n},n))})]}),a.jsxs("section",{className:"school-fest-watch","aria-labelledby":"school-fest-watch-title",children:[a.jsxs("header",{children:[a.jsx("p",{className:"school-fest-eyebrow",lang:"en",children:"Watch"}),a.jsx("h3",{id:"school-fest-watch-title",children:t.aboutTedx.watchTitle}),a.jsx("p",{children:t.aboutTedx.watchIntro})]}),a.jsx("div",{className:"school-fest-watch__grid",children:t.aboutTedx.videos.map(n=>a.jsxs("figure",{children:[a.jsx("div",{className:"school-fest-video",children:a.jsx("iframe",{src:n.embedUrl,title:n.title,loading:"lazy",referrerPolicy:"strict-origin-when-cross-origin",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),a.jsxs("figcaption",{children:[a.jsx("span",{children:n.label}),a.jsx("strong",{children:n.title}),a.jsxs("a",{href:n.youtubeUrl,target:"_blank",rel:"noopener noreferrer",children:[t.aboutTedx.watchOnYouTube,a.jsx(Bo,{size:17,strokeWidth:2.25,"aria-hidden":"true"})]})]})]},n.youtubeUrl))})]})]})}),a.jsx("section",{id:"why-debate",className:"school-fest-section school-fest-section--light","aria-labelledby":"why-debate-title",children:a.jsxs("div",{className:"container",children:[a.jsxs("header",{className:"school-fest-section__header",children:[a.jsx("span",{className:"school-fest-section__number","aria-hidden":"true",children:t.whyDebate.number}),a.jsxs("div",{children:[a.jsx("p",{className:"school-fest-eyebrow",lang:"en",children:t.whyDebate.eyebrow}),a.jsx("h2",{id:"why-debate-title",children:t.whyDebate.title}),a.jsx("p",{children:t.whyDebate.intro})]})]}),a.jsxs("div",{className:"school-fest-debate-context",children:[a.jsx("p",{children:t.whyDebate.body}),a.jsxs("section",{"aria-labelledby":"practice-title",children:[a.jsx("h3",{id:"practice-title",children:t.whyDebate.practiceTitle}),a.jsx("ol",{children:t.whyDebate.practices.map((n,r)=>a.jsxs("li",{children:[a.jsx("span",{"aria-hidden":"true",children:String(r+1).padStart(2,"0")}),a.jsx("p",{children:n})]},n))})]})]}),a.jsxs(I,{className:"school-fest-program-link",to:"/archives",children:[t.programAction,a.jsx(qt,{size:20,strokeWidth:2.5,"aria-hidden":"true"})]})]})}),a.jsx("section",{className:"school-fest-references","aria-labelledby":"school-fest-references-title",children:a.jsxs("div",{className:"container",children:[a.jsxs("header",{children:[a.jsx("p",{className:"school-fest-eyebrow",lang:"en",children:t.references.eyebrow}),a.jsx("h2",{id:"school-fest-references-title",children:t.references.title}),a.jsx("p",{children:t.references.description})]}),a.jsx("ol",{children:t.references.items.map((n,r)=>a.jsx("li",{children:a.jsxs("a",{href:n.href,target:"_blank",rel:"noopener noreferrer",children:[a.jsx("span",{"aria-hidden":"true",children:String(r+1).padStart(2,"0")}),a.jsxs("span",{children:[a.jsx("strong",{children:n.title}),a.jsx("small",{children:n.description})]}),a.jsx(Bo,{size:19,strokeWidth:2.25,"aria-hidden":"true"})]})},n.href))})]})})]}),a.jsx("style",{children:`
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
      `})]})},Yh={ja:{eyebrow:"Acknowledgements",title:"謝礼",intro:"TEDxWUSHS Youthの活動にご協力いただいた皆さまに、心より感謝申し上げます。",schoolsLabel:"English Debate",schoolsTitle:"英語ディベート参加校",schoolsDescription:"2026年の学院祭企画にご参加いただき、ありがとうございました。",schools:["頌栄女子学院高等学校","慶應義塾高等学校","早稲田大学本庄高等学院 ESS"],partnerLabel:"Special Thanks",partnerTitle:"TEDxTeikyoU",partnerDescription:"スピーカーコーチングとTEDxロゴの貸し出しにご協力いただきました。心より感謝申し上げます。",contributions:["スピーカーコーチングへの協力","TEDxロゴの貸し出し"],speakersLabel:"2026 Speakers",speakersTitle:"登壇者の皆さま",speakersDescription:"TEDxWUSHS Youth 2026にご登壇いただき、貴重なアイデアを共有してくださった皆さまに、心より感謝申し上げます。"},en:{eyebrow:"Acknowledgements",title:"Acknowledgements",intro:"We sincerely thank everyone who has supported the work of TEDxWUSHS Youth.",schoolsLabel:"English Debate",schoolsTitle:"Participating Schools",schoolsDescription:"Thank you for joining our English debate program at the 2026 school festival.",schools:["Shoei Girls’ Senior High School","Keio Senior High School","Waseda University Honjo Senior High School ESS"],partnerLabel:"Special Thanks",partnerTitle:"TEDxTeikyoU",partnerDescription:"We sincerely thank TEDxTeikyoU for supporting our speaker coaching and lending us the TEDx logo.",contributions:["Speaker coaching support","Loan of the TEDx logo"],speakersLabel:"2026 Speakers",speakersTitle:"Our Speakers",speakersDescription:"We sincerely thank the speakers who shared their valuable ideas at TEDxWUSHS Youth 2026."}},Ab=()=>{const{language:e}=B(),t=Yh[e]??Yh.ja,n=Zc.filter(r=>r.published).sort((r,i)=>r.displayOrder-i.displayOrder);return a.jsxs("main",{id:"main-content",tabIndex:-1,className:"acknowledgements-page",children:[a.jsx("header",{className:"acknowledgements-hero","aria-labelledby":"acknowledgements-title",children:a.jsxs("div",{className:"container acknowledgements-hero__inner",children:[a.jsx("p",{className:"acknowledgements-eyebrow",lang:"en",children:t.eyebrow}),a.jsx("h1",{id:"acknowledgements-title",children:t.title}),a.jsx("p",{className:"acknowledgements-hero__intro",children:t.intro})]})}),a.jsx("section",{className:"acknowledgements-section acknowledgements-section--partner","aria-labelledby":"acknowledgements-partner-title",children:a.jsxs("div",{className:"container acknowledgements-section__layout",children:[a.jsxs("header",{children:[a.jsx("p",{className:"acknowledgements-eyebrow",lang:"en",children:t.partnerLabel}),a.jsx("h2",{id:"acknowledgements-partner-title",lang:"en",children:t.partnerTitle}),a.jsx("p",{children:t.partnerDescription})]}),a.jsx("ul",{className:"acknowledgements-list acknowledgements-list--accent",children:t.contributions.map(r=>a.jsx("li",{children:r},r))})]})}),a.jsx("section",{className:"acknowledgements-section","aria-labelledby":"acknowledgements-speakers-title",children:a.jsxs("div",{className:"container acknowledgements-section__layout",children:[a.jsxs("header",{children:[a.jsx("p",{className:"acknowledgements-eyebrow",lang:"en",children:t.speakersLabel}),a.jsx("h2",{id:"acknowledgements-speakers-title",children:t.speakersTitle}),a.jsx("p",{children:t.speakersDescription})]}),a.jsx("ul",{className:"acknowledgements-list",children:n.map(r=>a.jsx("li",{children:r.name[e]??r.name.ja},r.id))})]})}),a.jsx("section",{className:"acknowledgements-section acknowledgements-section--partner","aria-labelledby":"acknowledgements-schools-title",children:a.jsxs("div",{className:"container acknowledgements-section__layout",children:[a.jsxs("header",{children:[a.jsx("p",{className:"acknowledgements-eyebrow",lang:"en",children:t.schoolsLabel}),a.jsx("h2",{id:"acknowledgements-schools-title",children:t.schoolsTitle}),a.jsx("p",{children:t.schoolsDescription})]}),a.jsx("ul",{className:"acknowledgements-list",children:t.schools.map(r=>a.jsx("li",{children:r},r))})]})}),a.jsx("style",{children:`
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
      `})]})},Kh={ja:{"/":"TEDxWUSHS Youth | Ideas change everything","/about":"TEDxについて | TEDxWUSHS Youth","/archives":"イベントアーカイブ | TEDxWUSHS Youth","/archives/2026/main-event":"2026 メインイベント | TEDxWUSHS Youth","/archives/2026/school-fest":"2026 学院祭 | TEDxWUSHS Youth","/program":"2026 メインイベント | TEDxWUSHS Youth","/event":"プログラム | TEDxWUSHS Youth","/speakers":"2026 スピーカー | TEDxWUSHS Youth","/team":"2026 チーム | TEDxWUSHS Youth","/organizers":"チーム | TEDxWUSHS Youth","/join-us":"参加する | TEDxWUSHS Youth","/join-us/speaker":"スピーカー募集 | TEDxWUSHS Youth","/join-us/team":"運営チーム募集 | TEDxWUSHS Youth","/join-us/audience":"参加申込み | TEDxWUSHS Youth","/faq":"よくある質問 | TEDxWUSHS Youth","/school-fest-2026":"学院祭英語ディベート特集 | TEDxWUSHS Youth","/acknowledgements":"謝礼 | TEDxWUSHS Youth"},en:{"/":"TEDxWUSHS Youth | Ideas change everything","/about":"About | TEDxWUSHS Youth","/archives":"Event Archives | TEDxWUSHS Youth","/archives/2026/main-event":"2026 Main Event | TEDxWUSHS Youth","/archives/2026/school-fest":"2026 Gakuinsai | TEDxWUSHS Youth","/program":"2026 Main Event | TEDxWUSHS Youth","/event":"Program | TEDxWUSHS Youth","/speakers":"2026 Speakers | TEDxWUSHS Youth","/team":"2026 Team | TEDxWUSHS Youth","/organizers":"Team | TEDxWUSHS Youth","/join-us":"Join Us | TEDxWUSHS Youth","/join-us/speaker":"Speaker Applications | TEDxWUSHS Youth","/join-us/team":"Team Recruitment | TEDxWUSHS Youth","/join-us/audience":"Audience Registration | TEDxWUSHS Youth","/faq":"Frequently Asked Questions | TEDxWUSHS Youth","/school-fest-2026":"Gakuinsai English Debate Feature | TEDxWUSHS Youth","/acknowledgements":"Acknowledgements | TEDxWUSHS Youth"}},Lb=()=>{const{pathname:e,hash:t}=tn(),{language:n}=B(),r=w.useRef(e);return w.useEffect(()=>{const i=Kh[n]??Kh.ja;document.title=i[e]??(n==="ja"?"ページが見つかりません | TEDxWUSHS Youth":"Page Not Found | TEDxWUSHS Youth"),document.documentElement.lang=n==="en"?"en":"ja"},[n,e]),w.useEffect(()=>{const i=document.getElementById("main-content"),o=r.current!==e;if(r.current=e,!i)return;t||window.scrollTo({top:0,left:0,behavior:"auto"});const s=o?window.requestAnimationFrame(()=>{i.focus({preventScroll:!0})}):null,l=window.requestAnimationFrame(()=>{if(!t)return;const c=document.getElementById(decodeURIComponent(t.slice(1)));c==null||c.scrollIntoView({block:"start",behavior:"auto"})});return()=>{s!==null&&window.cancelAnimationFrame(s),window.cancelAnimationFrame(l)}},[t,e]),null};function Mb(){return a.jsx(pj,{children:a.jsx(Hx,{children:a.jsxs("div",{className:"app",children:[a.jsx(Lb,{}),a.jsx(vj,{}),a.jsxs(Rx,{children:[a.jsx(oe,{path:"/",element:a.jsx(Fj,{})}),a.jsx(oe,{path:"/about",element:a.jsx(Yj,{})}),a.jsx(oe,{path:"/archives",element:a.jsx(cb,{})}),a.jsx(oe,{path:"/archives/2026/main-event",element:a.jsx(Cb,{})}),a.jsx(oe,{path:"/archives/2026/school-fest",element:a.jsx(Nb,{})}),a.jsx(oe,{path:"/program",element:a.jsx(Wi,{to:"/archives/2026/main-event",replace:!0})}),a.jsx(oe,{path:"/event",element:a.jsx(Wi,{to:"/program",replace:!0})}),a.jsx(oe,{path:"/speakers",element:a.jsx(nb,{})}),a.jsx(oe,{path:"/team",element:a.jsx(ib,{})}),a.jsx(oe,{path:"/organizers",element:a.jsx(Wi,{to:"/team",replace:!0})}),a.jsx(oe,{path:"/join-us",element:a.jsx(ob,{})}),a.jsx(oe,{path:"/join-us/speaker",element:a.jsx(sb,{})}),a.jsx(oe,{path:"/join-us/team",element:a.jsx(ab,{})}),a.jsx(oe,{path:"/join-us/audience",element:a.jsx(lb,{})}),a.jsx(oe,{path:"/faq",element:a.jsx(fb,{})}),a.jsx(oe,{path:"/school-fest-2026",element:a.jsx(Wi,{to:"/archives/2026/school-fest",replace:!0})}),a.jsx(oe,{path:"/acknowledgements",element:a.jsx(Ab,{})}),a.jsx(oe,{path:"*",element:a.jsx(pb,{})})]}),a.jsx(yj,{})]})})})}am(document.getElementById("root")).render(a.jsx(w.StrictMode,{children:a.jsx(Mb,{})}));
