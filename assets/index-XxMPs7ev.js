(function(){const y=document.createElement("link").relList;if(y&&y.supports&&y.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))x(A);new MutationObserver(A=>{for(const R of A)if(R.type==="childList")for(const q of R.addedNodes)q.tagName==="LINK"&&q.rel==="modulepreload"&&x(q)}).observe(document,{childList:!0,subtree:!0});function c(A){const R={};return A.integrity&&(R.integrity=A.integrity),A.referrerPolicy&&(R.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?R.credentials="include":A.crossOrigin==="anonymous"?R.credentials="omit":R.credentials="same-origin",R}function x(A){if(A.ep)return;A.ep=!0;const R=c(A);fetch(A.href,R)}})();function Zc(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var ns={exports:{}},ea={},es={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zc;function Up(){if(zc)return Y;zc=1;var p=Symbol.for("react.element"),y=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),q=Symbol.for("react.context"),rn=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),en=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),nn=Symbol.iterator;function sn(m){return m===null||typeof m!="object"?null:(m=nn&&m[nn]||m["@@iterator"],typeof m=="function"?m:null)}var un={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gn=Object.assign,ln={};function F(m,S,$){this.props=m,this.context=S,this.refs=ln,this.updater=$||un}F.prototype.isReactComponent={},F.prototype.setState=function(m,S){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,S,"setState")},F.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function ee(){}ee.prototype=F.prototype;function hn(m,S,$){this.props=m,this.context=S,this.refs=ln,this.updater=$||un}var te=hn.prototype=new ee;te.constructor=hn,gn(te,F.prototype),te.isPureReactComponent=!0;var kn=Array.isArray,Yn=Object.prototype.hasOwnProperty,Bn={current:null},zn={key:!0,ref:!0,__self:!0,__source:!0};function Sn(m,S,$){var Q,tn={},X=null,dn=null;if(S!=null)for(Q in S.ref!==void 0&&(dn=S.ref),S.key!==void 0&&(X=""+S.key),S)Yn.call(S,Q)&&!zn.hasOwnProperty(Q)&&(tn[Q]=S[Q]);var Z=arguments.length-2;if(Z===1)tn.children=$;else if(1<Z){for(var mn=Array(Z),Gn=0;Gn<Z;Gn++)mn[Gn]=arguments[Gn+2];tn.children=mn}if(m&&m.defaultProps)for(Q in Z=m.defaultProps,Z)tn[Q]===void 0&&(tn[Q]=Z[Q]);return{$$typeof:p,type:m,key:X,ref:dn,props:tn,_owner:Bn.current}}function ve(m,S){return{$$typeof:p,type:m.type,key:S,ref:m.ref,props:m.props,_owner:m._owner}}function ye(m){return typeof m=="object"&&m!==null&&m.$$typeof===p}function Ee(m){var S={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function($){return S[$]})}var re=/\/+/g;function Hn(m,S){return typeof m=="object"&&m!==null&&m.key!=null?Ee(""+m.key):S.toString(36)}function ue(m,S,$,Q,tn){var X=typeof m;(X==="undefined"||X==="boolean")&&(m=null);var dn=!1;if(m===null)dn=!0;else switch(X){case"string":case"number":dn=!0;break;case"object":switch(m.$$typeof){case p:case y:dn=!0}}if(dn)return dn=m,tn=tn(dn),m=Q===""?"."+Hn(dn,0):Q,kn(tn)?($="",m!=null&&($=m.replace(re,"$&/")+"/"),ue(tn,S,$,"",function(Gn){return Gn})):tn!=null&&(ye(tn)&&(tn=ve(tn,$+(!tn.key||dn&&dn.key===tn.key?"":(""+tn.key).replace(re,"$&/")+"/")+m)),S.push(tn)),1;if(dn=0,Q=Q===""?".":Q+":",kn(m))for(var Z=0;Z<m.length;Z++){X=m[Z];var mn=Q+Hn(X,Z);dn+=ue(X,S,$,mn,tn)}else if(mn=sn(m),typeof mn=="function")for(m=mn.call(m),Z=0;!(X=m.next()).done;)X=X.value,mn=Q+Hn(X,Z++),dn+=ue(X,S,$,mn,tn);else if(X==="object")throw S=String(m),Error("Objects are not valid as a React child (found: "+(S==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.");return dn}function pe(m,S,$){if(m==null)return m;var Q=[],tn=0;return ue(m,Q,"","",function(X){return S.call($,X,tn++)}),Q}function Fn(m){if(m._status===-1){var S=m._result;S=S(),S.then(function($){(m._status===0||m._status===-1)&&(m._status=1,m._result=$)},function($){(m._status===0||m._status===-1)&&(m._status=2,m._result=$)}),m._status===-1&&(m._status=0,m._result=S)}if(m._status===1)return m._result.default;throw m._result}var vn={current:null},P={transition:null},z={ReactCurrentDispatcher:vn,ReactCurrentBatchConfig:P,ReactCurrentOwner:Bn};function M(){throw Error("act(...) is not supported in production builds of React.")}return Y.Children={map:pe,forEach:function(m,S,$){pe(m,function(){S.apply(this,arguments)},$)},count:function(m){var S=0;return pe(m,function(){S++}),S},toArray:function(m){return pe(m,function(S){return S})||[]},only:function(m){if(!ye(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},Y.Component=F,Y.Fragment=c,Y.Profiler=A,Y.PureComponent=hn,Y.StrictMode=x,Y.Suspense=H,Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z,Y.act=M,Y.cloneElement=function(m,S,$){if(m==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+m+".");var Q=gn({},m.props),tn=m.key,X=m.ref,dn=m._owner;if(S!=null){if(S.ref!==void 0&&(X=S.ref,dn=Bn.current),S.key!==void 0&&(tn=""+S.key),m.type&&m.type.defaultProps)var Z=m.type.defaultProps;for(mn in S)Yn.call(S,mn)&&!zn.hasOwnProperty(mn)&&(Q[mn]=S[mn]===void 0&&Z!==void 0?Z[mn]:S[mn])}var mn=arguments.length-2;if(mn===1)Q.children=$;else if(1<mn){Z=Array(mn);for(var Gn=0;Gn<mn;Gn++)Z[Gn]=arguments[Gn+2];Q.children=Z}return{$$typeof:p,type:m.type,key:tn,ref:X,props:Q,_owner:dn}},Y.createContext=function(m){return m={$$typeof:q,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},m.Provider={$$typeof:R,_context:m},m.Consumer=m},Y.createElement=Sn,Y.createFactory=function(m){var S=Sn.bind(null,m);return S.type=m,S},Y.createRef=function(){return{current:null}},Y.forwardRef=function(m){return{$$typeof:rn,render:m}},Y.isValidElement=ye,Y.lazy=function(m){return{$$typeof:W,_payload:{_status:-1,_result:m},_init:Fn}},Y.memo=function(m,S){return{$$typeof:en,type:m,compare:S===void 0?null:S}},Y.startTransition=function(m){var S=P.transition;P.transition={};try{m()}finally{P.transition=S}},Y.unstable_act=M,Y.useCallback=function(m,S){return vn.current.useCallback(m,S)},Y.useContext=function(m){return vn.current.useContext(m)},Y.useDebugValue=function(){},Y.useDeferredValue=function(m){return vn.current.useDeferredValue(m)},Y.useEffect=function(m,S){return vn.current.useEffect(m,S)},Y.useId=function(){return vn.current.useId()},Y.useImperativeHandle=function(m,S,$){return vn.current.useImperativeHandle(m,S,$)},Y.useInsertionEffect=function(m,S){return vn.current.useInsertionEffect(m,S)},Y.useLayoutEffect=function(m,S){return vn.current.useLayoutEffect(m,S)},Y.useMemo=function(m,S){return vn.current.useMemo(m,S)},Y.useReducer=function(m,S,$){return vn.current.useReducer(m,S,$)},Y.useRef=function(m){return vn.current.useRef(m)},Y.useState=function(m){return vn.current.useState(m)},Y.useSyncExternalStore=function(m,S,$){return vn.current.useSyncExternalStore(m,S,$)},Y.useTransition=function(){return vn.current.useTransition()},Y.version="18.3.1",Y}var Hc;function cs(){return Hc||(Hc=1,es.exports=Up()),es.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fc;function Wp(){if(Fc)return ea;Fc=1;var p=cs(),y=Symbol.for("react.element"),c=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,A=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R={key:!0,ref:!0,__self:!0,__source:!0};function q(rn,H,en){var W,nn={},sn=null,un=null;en!==void 0&&(sn=""+en),H.key!==void 0&&(sn=""+H.key),H.ref!==void 0&&(un=H.ref);for(W in H)x.call(H,W)&&!R.hasOwnProperty(W)&&(nn[W]=H[W]);if(rn&&rn.defaultProps)for(W in H=rn.defaultProps,H)nn[W]===void 0&&(nn[W]=H[W]);return{$$typeof:y,type:rn,key:sn,ref:un,props:nn,_owner:A.current}}return ea.Fragment=c,ea.jsx=q,ea.jsxs=q,ea}var Gc;function Vp(){return Gc||(Gc=1,ns.exports=Wp()),ns.exports}var s=Vp(),V=cs();const $p=Zc(V);var ho={},ts={exports:{}},ce={},rs={exports:{}},as={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uc;function Qp(){return Uc||(Uc=1,(function(p){function y(P,z){var M=P.length;P.push(z);n:for(;0<M;){var m=M-1>>>1,S=P[m];if(0<A(S,z))P[m]=z,P[M]=S,M=m;else break n}}function c(P){return P.length===0?null:P[0]}function x(P){if(P.length===0)return null;var z=P[0],M=P.pop();if(M!==z){P[0]=M;n:for(var m=0,S=P.length,$=S>>>1;m<$;){var Q=2*(m+1)-1,tn=P[Q],X=Q+1,dn=P[X];if(0>A(tn,M))X<S&&0>A(dn,tn)?(P[m]=dn,P[X]=M,m=X):(P[m]=tn,P[Q]=M,m=Q);else if(X<S&&0>A(dn,M))P[m]=dn,P[X]=M,m=X;else break n}}return z}function A(P,z){var M=P.sortIndex-z.sortIndex;return M!==0?M:P.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var R=performance;p.unstable_now=function(){return R.now()}}else{var q=Date,rn=q.now();p.unstable_now=function(){return q.now()-rn}}var H=[],en=[],W=1,nn=null,sn=3,un=!1,gn=!1,ln=!1,F=typeof setTimeout=="function"?setTimeout:null,ee=typeof clearTimeout=="function"?clearTimeout:null,hn=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function te(P){for(var z=c(en);z!==null;){if(z.callback===null)x(en);else if(z.startTime<=P)x(en),z.sortIndex=z.expirationTime,y(H,z);else break;z=c(en)}}function kn(P){if(ln=!1,te(P),!gn)if(c(H)!==null)gn=!0,Fn(Yn);else{var z=c(en);z!==null&&vn(kn,z.startTime-P)}}function Yn(P,z){gn=!1,ln&&(ln=!1,ee(Sn),Sn=-1),un=!0;var M=sn;try{for(te(z),nn=c(H);nn!==null&&(!(nn.expirationTime>z)||P&&!Ee());){var m=nn.callback;if(typeof m=="function"){nn.callback=null,sn=nn.priorityLevel;var S=m(nn.expirationTime<=z);z=p.unstable_now(),typeof S=="function"?nn.callback=S:nn===c(H)&&x(H),te(z)}else x(H);nn=c(H)}if(nn!==null)var $=!0;else{var Q=c(en);Q!==null&&vn(kn,Q.startTime-z),$=!1}return $}finally{nn=null,sn=M,un=!1}}var Bn=!1,zn=null,Sn=-1,ve=5,ye=-1;function Ee(){return!(p.unstable_now()-ye<ve)}function re(){if(zn!==null){var P=p.unstable_now();ye=P;var z=!0;try{z=zn(!0,P)}finally{z?Hn():(Bn=!1,zn=null)}}else Bn=!1}var Hn;if(typeof hn=="function")Hn=function(){hn(re)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,pe=ue.port2;ue.port1.onmessage=re,Hn=function(){pe.postMessage(null)}}else Hn=function(){F(re,0)};function Fn(P){zn=P,Bn||(Bn=!0,Hn())}function vn(P,z){Sn=F(function(){P(p.unstable_now())},z)}p.unstable_IdlePriority=5,p.unstable_ImmediatePriority=1,p.unstable_LowPriority=4,p.unstable_NormalPriority=3,p.unstable_Profiling=null,p.unstable_UserBlockingPriority=2,p.unstable_cancelCallback=function(P){P.callback=null},p.unstable_continueExecution=function(){gn||un||(gn=!0,Fn(Yn))},p.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ve=0<P?Math.floor(1e3/P):5},p.unstable_getCurrentPriorityLevel=function(){return sn},p.unstable_getFirstCallbackNode=function(){return c(H)},p.unstable_next=function(P){switch(sn){case 1:case 2:case 3:var z=3;break;default:z=sn}var M=sn;sn=z;try{return P()}finally{sn=M}},p.unstable_pauseExecution=function(){},p.unstable_requestPaint=function(){},p.unstable_runWithPriority=function(P,z){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var M=sn;sn=P;try{return z()}finally{sn=M}},p.unstable_scheduleCallback=function(P,z,M){var m=p.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?m+M:m):M=m,P){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=M+S,P={id:W++,callback:z,priorityLevel:P,startTime:M,expirationTime:S,sortIndex:-1},M>m?(P.sortIndex=M,y(en,P),c(H)===null&&P===c(en)&&(ln?(ee(Sn),Sn=-1):ln=!0,vn(kn,M-m))):(P.sortIndex=S,y(H,P),gn||un||(gn=!0,Fn(Yn))),P},p.unstable_shouldYield=Ee,p.unstable_wrapCallback=function(P){var z=sn;return function(){var M=sn;sn=z;try{return P.apply(this,arguments)}finally{sn=M}}}})(as)),as}var Wc;function Kp(){return Wc||(Wc=1,rs.exports=Qp()),rs.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vc;function Xp(){if(Vc)return ce;Vc=1;var p=cs(),y=Kp();function c(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var x=new Set,A={};function R(n,e){q(n,e),q(n+"Capture",e)}function q(n,e){for(A[n]=e,n=0;n<e.length;n++)x.add(e[n])}var rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),H=Object.prototype.hasOwnProperty,en=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,W={},nn={};function sn(n){return H.call(nn,n)?!0:H.call(W,n)?!1:en.test(n)?nn[n]=!0:(W[n]=!0,!1)}function un(n,e,t,r){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function gn(n,e,t,r){if(e===null||typeof e>"u"||un(n,e,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(n,e,t,r,a,o,i){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=o,this.removeEmptyString=i}var F={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){F[n]=new ln(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];F[e]=new ln(e,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){F[n]=new ln(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){F[n]=new ln(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){F[n]=new ln(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){F[n]=new ln(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){F[n]=new ln(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){F[n]=new ln(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){F[n]=new ln(n,5,!1,n.toLowerCase(),null,!1,!1)});var ee=/[\-:]([a-z])/g;function hn(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(ee,hn);F[e]=new ln(e,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(ee,hn);F[e]=new ln(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(ee,hn);F[e]=new ln(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){F[n]=new ln(n,1,!1,n.toLowerCase(),null,!1,!1)}),F.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){F[n]=new ln(n,1,!1,n.toLowerCase(),null,!0,!0)});function te(n,e,t,r){var a=F.hasOwnProperty(e)?F[e]:null;(a!==null?a.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(gn(e,t,a,r)&&(t=null),r||a===null?sn(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):a.mustUseProperty?n[a.propertyName]=t===null?a.type===3?!1:"":t:(e=a.attributeName,r=a.attributeNamespace,t===null?n.removeAttribute(e):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,r?n.setAttributeNS(r,e,t):n.setAttribute(e,t))))}var kn=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yn=Symbol.for("react.element"),Bn=Symbol.for("react.portal"),zn=Symbol.for("react.fragment"),Sn=Symbol.for("react.strict_mode"),ve=Symbol.for("react.profiler"),ye=Symbol.for("react.provider"),Ee=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),Hn=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),Fn=Symbol.for("react.lazy"),vn=Symbol.for("react.offscreen"),P=Symbol.iterator;function z(n){return n===null||typeof n!="object"?null:(n=P&&n[P]||n["@@iterator"],typeof n=="function"?n:null)}var M=Object.assign,m;function S(n){if(m===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);m=e&&e[1]||""}return`
`+m+n}var $=!1;function Q(n,e){if(!n||$)return"";$=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(v){var r=v}Reflect.construct(n,[],e)}else{try{e.call()}catch(v){r=v}n.call(e.prototype)}else{try{throw Error()}catch(v){r=v}n()}}catch(v){if(v&&r&&typeof v.stack=="string"){for(var a=v.stack.split(`
`),o=r.stack.split(`
`),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(i!==1||l!==1)do if(i--,l--,0>l||a[i]!==o[l]){var u=`
`+a[i].replace(" at new "," at ");return n.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",n.displayName)),u}while(1<=i&&0<=l);break}}}finally{$=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?S(n):""}function tn(n){switch(n.tag){case 5:return S(n.type);case 16:return S("Lazy");case 13:return S("Suspense");case 19:return S("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function X(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case zn:return"Fragment";case Bn:return"Portal";case ve:return"Profiler";case Sn:return"StrictMode";case Hn:return"Suspense";case ue:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Ee:return(n.displayName||"Context")+".Consumer";case ye:return(n._context.displayName||"Context")+".Provider";case re:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case pe:return e=n.displayName||null,e!==null?e:X(n.type)||"Memo";case Fn:e=n._payload,n=n._init;try{return X(n(e))}catch{}}return null}function dn(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return X(e);case 8:return e===Sn?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Z(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function mn(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Gn(n){var e=mn(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),r=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,o=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return a.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function He(n){n._valueTracker||(n._valueTracker=Gn(n))}function Fe(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),r="";return n&&(r=mn(n)?n.checked?"true":"false":n.value),n=r,n!==t?(e.setValue(n),!0):!1}function Jt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ge(n,e){var t=e.checked;return M({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function aa(n,e){var t=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;t=Z(e.value!=null?e.value:t),n._wrapperState={initialChecked:r,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function wt(n,e){e=e.checked,e!=null&&te(n,"checked",e,!1)}function pr(n,e){wt(n,e);var t=Z(e.value),r=e.type;if(t!=null)r==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(r==="submit"||r==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Vn(n,e.type,t):e.hasOwnProperty("defaultValue")&&Vn(n,e.type,Z(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function dr(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Vn(n,e,t){(e!=="number"||Jt(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var An=Array.isArray;function xe(n,e,t,r){if(n=n.options,e){e={};for(var a=0;a<t.length;a++)e["$"+t[a]]=!0;for(t=0;t<n.length;t++)a=e.hasOwnProperty("$"+n[t].value),n[t].selected!==a&&(n[t].selected=a),a&&r&&(n[t].defaultSelected=!0)}else{for(t=""+Z(t),e=null,a=0;a<n.length;a++){if(n[a].value===t){n[a].selected=!0,r&&(n[a].defaultSelected=!0);return}e!==null||n[a].disabled||(e=n[a])}e!==null&&(e.selected=!0)}}function et(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(c(91));return M({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function oa(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(c(92));if(An(t)){if(1<t.length)throw Error(c(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Z(t)}}function mr(n,e){var t=Z(e.value),r=Z(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),r!=null&&(n.defaultValue=""+r)}function gr(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Bt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fr(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Bt(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var zt,ia=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,r,a){MSApp.execUnsafeLocalFunction(function(){return n(e,t,r,a)})}:n})(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(zt=zt||document.createElement("div"),zt.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=zt.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function kt(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var jt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sa=["Webkit","ms","Moz","O"];Object.keys(jt).forEach(function(n){sa.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),jt[e]=jt[n]})});function hr(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||jt.hasOwnProperty(n)&&jt[n]?(""+e).trim():e+"px"}function vr(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var r=t.indexOf("--")===0,a=hr(t,e[t],r);t==="float"&&(t="cssFloat"),r?n.setProperty(t,a):n[t]=a}}var xo=M({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yr(n,e){if(e){if(xo[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(c(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(c(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(c(61))}if(e.style!=null&&typeof e.style!="object")throw Error(c(62))}}function Mn(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ue=null;function Pe(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Oe=null,Rn=null,tt=null;function xr(n){if(n=Br(n)){if(typeof Oe!="function")throw Error(c(280));var e=n.stateNode;e&&(e=Na(e),Oe(n.stateNode,n.type,e))}}function Ht(n){Rn?tt?tt.push(n):tt=[n]:Rn=n}function On(){if(Rn){var n=Rn,e=tt;if(tt=Rn=null,xr(n),e)for(n=0;n<e.length;n++)xr(e[n])}}function Tt(n,e){return n(e)}function la(){}var Sr=!1;function br(n,e,t){if(Sr)return n(e,t);Sr=!0;try{return Tt(n,e,t)}finally{Sr=!1,(Rn!==null||tt!==null)&&(la(),On())}}function g(n,e){var t=n.stateNode;if(t===null)return null;var r=Na(t);if(r===null)return null;t=r[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(n=n.type,r=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!r;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(c(231,e,typeof t));return t}var k=!1;if(rn)try{var T={};Object.defineProperty(T,"passive",{get:function(){k=!0}}),window.addEventListener("test",T,T),window.removeEventListener("test",T,T)}catch{k=!1}function L(n,e,t,r,a,o,i,l,u){var v=Array.prototype.slice.call(arguments,3);try{e.apply(t,v)}catch(w){this.onError(w)}}var an=!1,K=null,bn=!1,Se=null,de={onError:function(n){an=!0,K=n}};function Dn(n,e,t,r,a,o,i,l,u){an=!1,K=null,L.apply(de,arguments)}function ca(n,e,t,r,a,o,i,l,u){if(Dn.apply(this,arguments),an){if(an){var v=K;an=!1,K=null}else throw Error(c(198));bn||(bn=!0,Se=v)}}function Ct(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function us(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function ps(n){if(Ct(n)!==n)throw Error(c(188))}function eu(n){var e=n.alternate;if(!e){if(e=Ct(n),e===null)throw Error(c(188));return e!==n?null:n}for(var t=n,r=e;;){var a=t.return;if(a===null)break;var o=a.alternate;if(o===null){if(r=a.return,r!==null){t=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===t)return ps(a),n;if(o===r)return ps(a),e;o=o.sibling}throw Error(c(188))}if(t.return!==r.return)t=a,r=o;else{for(var i=!1,l=a.child;l;){if(l===t){i=!0,t=a,r=o;break}if(l===r){i=!0,r=a,t=o;break}l=l.sibling}if(!i){for(l=o.child;l;){if(l===t){i=!0,t=o,r=a;break}if(l===r){i=!0,r=o,t=a;break}l=l.sibling}if(!i)throw Error(c(189))}}if(t.alternate!==r)throw Error(c(190))}if(t.tag!==3)throw Error(c(188));return t.stateNode.current===t?n:e}function ds(n){return n=eu(n),n!==null?ms(n):null}function ms(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=ms(n);if(e!==null)return e;n=n.sibling}return null}var gs=y.unstable_scheduleCallback,fs=y.unstable_cancelCallback,tu=y.unstable_shouldYield,ru=y.unstable_requestPaint,En=y.unstable_now,au=y.unstable_getCurrentPriorityLevel,So=y.unstable_ImmediatePriority,hs=y.unstable_UserBlockingPriority,ua=y.unstable_NormalPriority,ou=y.unstable_LowPriority,vs=y.unstable_IdlePriority,pa=null,_e=null;function iu(n){if(_e&&typeof _e.onCommitFiberRoot=="function")try{_e.onCommitFiberRoot(pa,n,void 0,(n.current.flags&128)===128)}catch{}}var Me=Math.clz32?Math.clz32:cu,su=Math.log,lu=Math.LN2;function cu(n){return n>>>=0,n===0?32:31-(su(n)/lu|0)|0}var da=64,ma=4194304;function wr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ga(n,e){var t=n.pendingLanes;if(t===0)return 0;var r=0,a=n.suspendedLanes,o=n.pingedLanes,i=t&268435455;if(i!==0){var l=i&~a;l!==0?r=wr(l):(o&=i,o!==0&&(r=wr(o)))}else i=t&~a,i!==0?r=wr(i):o!==0&&(r=wr(o));if(r===0)return 0;if(e!==0&&e!==r&&(e&a)===0&&(a=r&-r,o=e&-e,a>=o||a===16&&(o&4194240)!==0))return e;if((r&4)!==0&&(r|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=r;0<e;)t=31-Me(e),a=1<<t,r|=n[t],e&=~a;return r}function uu(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pu(n,e){for(var t=n.suspendedLanes,r=n.pingedLanes,a=n.expirationTimes,o=n.pendingLanes;0<o;){var i=31-Me(o),l=1<<i,u=a[i];u===-1?((l&t)===0||(l&r)!==0)&&(a[i]=uu(l,e)):u<=e&&(n.expiredLanes|=l),o&=~l}}function bo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ys(){var n=da;return da<<=1,(da&4194240)===0&&(da=64),n}function wo(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function kr(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Me(e),n[e]=t}function du(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var r=n.eventTimes;for(n=n.expirationTimes;0<t;){var a=31-Me(t),o=1<<a;e[a]=0,r[a]=-1,n[a]=-1,t&=~o}}function ko(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var r=31-Me(t),a=1<<r;a&e|n[r]&e&&(n[r]|=e),t&=~a}}var pn=0;function xs(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ss,jo,bs,ws,ks,To=!1,fa=[],rt=null,at=null,ot=null,jr=new Map,Tr=new Map,it=[],mu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function js(n,e){switch(n){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":at=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":jr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tr.delete(e.pointerId)}}function Cr(n,e,t,r,a,o){return n===null||n.nativeEvent!==o?(n={blockedOn:e,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},e!==null&&(e=Br(e),e!==null&&jo(e)),n):(n.eventSystemFlags|=r,e=n.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),n)}function gu(n,e,t,r,a){switch(e){case"focusin":return rt=Cr(rt,n,e,t,r,a),!0;case"dragenter":return at=Cr(at,n,e,t,r,a),!0;case"mouseover":return ot=Cr(ot,n,e,t,r,a),!0;case"pointerover":var o=a.pointerId;return jr.set(o,Cr(jr.get(o)||null,n,e,t,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Tr.set(o,Cr(Tr.get(o)||null,n,e,t,r,a)),!0}return!1}function Ts(n){var e=Et(n.target);if(e!==null){var t=Ct(e);if(t!==null){if(e=t.tag,e===13){if(e=us(t),e!==null){n.blockedOn=e,ks(n.priority,function(){bs(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ha(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Eo(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var r=new t.constructor(t.type,t);Ue=r,t.target.dispatchEvent(r),Ue=null}else return e=Br(t),e!==null&&jo(e),n.blockedOn=t,!1;e.shift()}return!0}function Cs(n,e,t){ha(n)&&t.delete(e)}function fu(){To=!1,rt!==null&&ha(rt)&&(rt=null),at!==null&&ha(at)&&(at=null),ot!==null&&ha(ot)&&(ot=null),jr.forEach(Cs),Tr.forEach(Cs)}function Er(n,e){n.blockedOn===e&&(n.blockedOn=null,To||(To=!0,y.unstable_scheduleCallback(y.unstable_NormalPriority,fu)))}function Pr(n){function e(a){return Er(a,n)}if(0<fa.length){Er(fa[0],n);for(var t=1;t<fa.length;t++){var r=fa[t];r.blockedOn===n&&(r.blockedOn=null)}}for(rt!==null&&Er(rt,n),at!==null&&Er(at,n),ot!==null&&Er(ot,n),jr.forEach(e),Tr.forEach(e),t=0;t<it.length;t++)r=it[t],r.blockedOn===n&&(r.blockedOn=null);for(;0<it.length&&(t=it[0],t.blockedOn===null);)Ts(t),t.blockedOn===null&&it.shift()}var Ft=kn.ReactCurrentBatchConfig,va=!0;function hu(n,e,t,r){var a=pn,o=Ft.transition;Ft.transition=null;try{pn=1,Co(n,e,t,r)}finally{pn=a,Ft.transition=o}}function vu(n,e,t,r){var a=pn,o=Ft.transition;Ft.transition=null;try{pn=4,Co(n,e,t,r)}finally{pn=a,Ft.transition=o}}function Co(n,e,t,r){if(va){var a=Eo(n,e,t,r);if(a===null)Go(n,e,r,ya,t),js(n,r);else if(gu(a,n,e,t,r))r.stopPropagation();else if(js(n,r),e&4&&-1<mu.indexOf(n)){for(;a!==null;){var o=Br(a);if(o!==null&&Ss(o),o=Eo(n,e,t,r),o===null&&Go(n,e,r,ya,t),o===a)break;a=o}a!==null&&r.stopPropagation()}else Go(n,e,r,null,t)}}var ya=null;function Eo(n,e,t,r){if(ya=null,n=Pe(r),n=Et(n),n!==null)if(e=Ct(n),e===null)n=null;else if(t=e.tag,t===13){if(n=us(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return ya=n,null}function Es(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(au()){case So:return 1;case hs:return 4;case ua:case ou:return 16;case vs:return 536870912;default:return 16}default:return 16}}var st=null,Po=null,xa=null;function Ps(){if(xa)return xa;var n,e=Po,t=e.length,r,a="value"in st?st.value:st.textContent,o=a.length;for(n=0;n<t&&e[n]===a[n];n++);var i=t-n;for(r=1;r<=i&&e[t-r]===a[o-r];r++);return xa=a.slice(n,1<r?1-r:void 0)}function Sa(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function ba(){return!0}function Ms(){return!1}function me(n){function e(t,r,a,o,i){this._reactName=t,this._targetInst=a,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var l in n)n.hasOwnProperty(l)&&(t=n[l],this[l]=t?t(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ba:Ms,this.isPropagationStopped=Ms,this}return M(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ba)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ba)},persist:function(){},isPersistent:ba}),e}var Gt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mo=me(Gt),Mr=M({},Gt,{view:0,detail:0}),yu=me(Mr),No,Do,Nr,wa=M({},Mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lo,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Nr&&(Nr&&n.type==="mousemove"?(No=n.screenX-Nr.screenX,Do=n.screenY-Nr.screenY):Do=No=0,Nr=n),No)},movementY:function(n){return"movementY"in n?n.movementY:Do}}),Ns=me(wa),xu=M({},wa,{dataTransfer:0}),Su=me(xu),bu=M({},Mr,{relatedTarget:0}),Io=me(bu),wu=M({},Gt,{animationName:0,elapsedTime:0,pseudoElement:0}),ku=me(wu),ju=M({},Gt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Tu=me(ju),Cu=M({},Gt,{data:0}),Ds=me(Cu),Eu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nu(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Mu[n])?!!e[n]:!1}function Lo(){return Nu}var Du=M({},Mr,{key:function(n){if(n.key){var e=Eu[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Sa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Pu[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lo,charCode:function(n){return n.type==="keypress"?Sa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Sa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Iu=me(Du),Lu=M({},wa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Is=me(Lu),Au=M({},Mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lo}),Ru=me(Au),Ou=M({},Gt,{propertyName:0,elapsedTime:0,pseudoElement:0}),_u=me(Ou),qu=M({},wa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ju=me(qu),Bu=[9,13,27,32],Ao=rn&&"CompositionEvent"in window,Dr=null;rn&&"documentMode"in document&&(Dr=document.documentMode);var zu=rn&&"TextEvent"in window&&!Dr,Ls=rn&&(!Ao||Dr&&8<Dr&&11>=Dr),As=" ",Rs=!1;function Os(n,e){switch(n){case"keyup":return Bu.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _s(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ut=!1;function Hu(n,e){switch(n){case"compositionend":return _s(e);case"keypress":return e.which!==32?null:(Rs=!0,As);case"textInput":return n=e.data,n===As&&Rs?null:n;default:return null}}function Fu(n,e){if(Ut)return n==="compositionend"||!Ao&&Os(n,e)?(n=Ps(),xa=Po=st=null,Ut=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ls&&e.locale!=="ko"?null:e.data;default:return null}}var Gu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qs(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Gu[n.type]:e==="textarea"}function Js(n,e,t,r){Ht(r),e=Ea(e,"onChange"),0<e.length&&(t=new Mo("onChange","change",null,t,r),n.push({event:t,listeners:e}))}var Ir=null,Lr=null;function Uu(n){rl(n,0)}function ka(n){var e=Kt(n);if(Fe(e))return n}function Wu(n,e){if(n==="change")return e}var Bs=!1;if(rn){var Ro;if(rn){var Oo="oninput"in document;if(!Oo){var zs=document.createElement("div");zs.setAttribute("oninput","return;"),Oo=typeof zs.oninput=="function"}Ro=Oo}else Ro=!1;Bs=Ro&&(!document.documentMode||9<document.documentMode)}function Hs(){Ir&&(Ir.detachEvent("onpropertychange",Fs),Lr=Ir=null)}function Fs(n){if(n.propertyName==="value"&&ka(Lr)){var e=[];Js(e,Lr,n,Pe(n)),br(Uu,e)}}function Vu(n,e,t){n==="focusin"?(Hs(),Ir=e,Lr=t,Ir.attachEvent("onpropertychange",Fs)):n==="focusout"&&Hs()}function $u(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ka(Lr)}function Qu(n,e){if(n==="click")return ka(e)}function Ku(n,e){if(n==="input"||n==="change")return ka(e)}function Xu(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Ne=typeof Object.is=="function"?Object.is:Xu;function Ar(n,e){if(Ne(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),r=Object.keys(e);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!H.call(e,a)||!Ne(n[a],e[a]))return!1}return!0}function Gs(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Us(n,e){var t=Gs(n);n=0;for(var r;t;){if(t.nodeType===3){if(r=n+t.textContent.length,n<=e&&r>=e)return{node:t,offset:e-n};n=r}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=Gs(t)}}function Ws(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Ws(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Vs(){for(var n=window,e=Jt();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Jt(n.document)}return e}function _o(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Yu(n){var e=Vs(),t=n.focusedElem,r=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Ws(t.ownerDocument.documentElement,t)){if(r!==null&&_o(t)){if(e=r.start,n=r.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var a=t.textContent.length,o=Math.min(r.start,a);r=r.end===void 0?o:Math.min(r.end,a),!n.extend&&o>r&&(a=r,r=o,o=a),a=Us(t,o);var i=Us(t,r);a&&i&&(n.rangeCount!==1||n.anchorNode!==a.node||n.anchorOffset!==a.offset||n.focusNode!==i.node||n.focusOffset!==i.offset)&&(e=e.createRange(),e.setStart(a.node,a.offset),n.removeAllRanges(),o>r?(n.addRange(e),n.extend(i.node,i.offset)):(e.setEnd(i.node,i.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Zu=rn&&"documentMode"in document&&11>=document.documentMode,Wt=null,qo=null,Rr=null,Jo=!1;function $s(n,e,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Jo||Wt==null||Wt!==Jt(r)||(r=Wt,"selectionStart"in r&&_o(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rr&&Ar(Rr,r)||(Rr=r,r=Ea(qo,"onSelect"),0<r.length&&(e=new Mo("onSelect","select",null,e,t),n.push({event:e,listeners:r}),e.target=Wt)))}function ja(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Vt={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionend:ja("Transition","TransitionEnd")},Bo={},Qs={};rn&&(Qs=document.createElement("div").style,"AnimationEvent"in window||(delete Vt.animationend.animation,delete Vt.animationiteration.animation,delete Vt.animationstart.animation),"TransitionEvent"in window||delete Vt.transitionend.transition);function Ta(n){if(Bo[n])return Bo[n];if(!Vt[n])return n;var e=Vt[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Qs)return Bo[n]=e[t];return n}var Ks=Ta("animationend"),Xs=Ta("animationiteration"),Ys=Ta("animationstart"),Zs=Ta("transitionend"),nl=new Map,el="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lt(n,e){nl.set(n,e),R(e,[n])}for(var zo=0;zo<el.length;zo++){var Ho=el[zo],np=Ho.toLowerCase(),ep=Ho[0].toUpperCase()+Ho.slice(1);lt(np,"on"+ep)}lt(Ks,"onAnimationEnd"),lt(Xs,"onAnimationIteration"),lt(Ys,"onAnimationStart"),lt("dblclick","onDoubleClick"),lt("focusin","onFocus"),lt("focusout","onBlur"),lt(Zs,"onTransitionEnd"),q("onMouseEnter",["mouseout","mouseover"]),q("onMouseLeave",["mouseout","mouseover"]),q("onPointerEnter",["pointerout","pointerover"]),q("onPointerLeave",["pointerout","pointerover"]),R("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R("onBeforeInput",["compositionend","keypress","textInput","paste"]),R("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Or="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Or));function tl(n,e,t){var r=n.type||"unknown-event";n.currentTarget=t,ca(r,e,void 0,n),n.currentTarget=null}function rl(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var r=n[t],a=r.event;r=r.listeners;n:{var o=void 0;if(e)for(var i=r.length-1;0<=i;i--){var l=r[i],u=l.instance,v=l.currentTarget;if(l=l.listener,u!==o&&a.isPropagationStopped())break n;tl(a,l,v),o=u}else for(i=0;i<r.length;i++){if(l=r[i],u=l.instance,v=l.currentTarget,l=l.listener,u!==o&&a.isPropagationStopped())break n;tl(a,l,v),o=u}}}if(bn)throw n=Se,bn=!1,Se=null,n}function yn(n,e){var t=e[Ko];t===void 0&&(t=e[Ko]=new Set);var r=n+"__bubble";t.has(r)||(al(e,n,2,!1),t.add(r))}function Fo(n,e,t){var r=0;e&&(r|=4),al(t,n,r,e)}var Ca="_reactListening"+Math.random().toString(36).slice(2);function _r(n){if(!n[Ca]){n[Ca]=!0,x.forEach(function(t){t!=="selectionchange"&&(tp.has(t)||Fo(t,!1,n),Fo(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ca]||(e[Ca]=!0,Fo("selectionchange",!1,e))}}function al(n,e,t,r){switch(Es(e)){case 1:var a=hu;break;case 4:a=vu;break;default:a=Co}t=a.bind(null,e,t,n),a=void 0,!k||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),r?a!==void 0?n.addEventListener(e,t,{capture:!0,passive:a}):n.addEventListener(e,t,!0):a!==void 0?n.addEventListener(e,t,{passive:a}):n.addEventListener(e,t,!1)}function Go(n,e,t,r,a){var o=r;if((e&1)===0&&(e&2)===0&&r!==null)n:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var l=r.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===a||u.nodeType===8&&u.parentNode===a))return;i=i.return}for(;l!==null;){if(i=Et(l),i===null)return;if(u=i.tag,u===5||u===6){r=o=i;continue n}l=l.parentNode}}r=r.return}br(function(){var v=o,w=Pe(t),j=[];n:{var b=nl.get(n);if(b!==void 0){var N=Mo,I=n;switch(n){case"keypress":if(Sa(t)===0)break n;case"keydown":case"keyup":N=Iu;break;case"focusin":I="focus",N=Io;break;case"focusout":I="blur",N=Io;break;case"beforeblur":case"afterblur":N=Io;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Su;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=Ru;break;case Ks:case Xs:case Ys:N=ku;break;case Zs:N=_u;break;case"scroll":N=yu;break;case"wheel":N=Ju;break;case"copy":case"cut":case"paste":N=Tu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Is}var O=(e&4)!==0,Pn=!O&&n==="scroll",f=O?b!==null?b+"Capture":null:b;O=[];for(var d=v,h;d!==null;){h=d;var C=h.stateNode;if(h.tag===5&&C!==null&&(h=C,f!==null&&(C=g(d,f),C!=null&&O.push(qr(d,C,h)))),Pn)break;d=d.return}0<O.length&&(b=new N(b,I,null,t,w),j.push({event:b,listeners:O}))}}if((e&7)===0){n:{if(b=n==="mouseover"||n==="pointerover",N=n==="mouseout"||n==="pointerout",b&&t!==Ue&&(I=t.relatedTarget||t.fromElement)&&(Et(I)||I[We]))break n;if((N||b)&&(b=w.window===w?w:(b=w.ownerDocument)?b.defaultView||b.parentWindow:window,N?(I=t.relatedTarget||t.toElement,N=v,I=I?Et(I):null,I!==null&&(Pn=Ct(I),I!==Pn||I.tag!==5&&I.tag!==6)&&(I=null)):(N=null,I=v),N!==I)){if(O=Ns,C="onMouseLeave",f="onMouseEnter",d="mouse",(n==="pointerout"||n==="pointerover")&&(O=Is,C="onPointerLeave",f="onPointerEnter",d="pointer"),Pn=N==null?b:Kt(N),h=I==null?b:Kt(I),b=new O(C,d+"leave",N,t,w),b.target=Pn,b.relatedTarget=h,C=null,Et(w)===v&&(O=new O(f,d+"enter",I,t,w),O.target=h,O.relatedTarget=Pn,C=O),Pn=C,N&&I)e:{for(O=N,f=I,d=0,h=O;h;h=$t(h))d++;for(h=0,C=f;C;C=$t(C))h++;for(;0<d-h;)O=$t(O),d--;for(;0<h-d;)f=$t(f),h--;for(;d--;){if(O===f||f!==null&&O===f.alternate)break e;O=$t(O),f=$t(f)}O=null}else O=null;N!==null&&ol(j,b,N,O,!1),I!==null&&Pn!==null&&ol(j,Pn,I,O,!0)}}n:{if(b=v?Kt(v):window,N=b.nodeName&&b.nodeName.toLowerCase(),N==="select"||N==="input"&&b.type==="file")var _=Wu;else if(qs(b))if(Bs)_=Ku;else{_=$u;var J=Vu}else(N=b.nodeName)&&N.toLowerCase()==="input"&&(b.type==="checkbox"||b.type==="radio")&&(_=Qu);if(_&&(_=_(n,v))){Js(j,_,t,w);break n}J&&J(n,b,v),n==="focusout"&&(J=b._wrapperState)&&J.controlled&&b.type==="number"&&Vn(b,"number",b.value)}switch(J=v?Kt(v):window,n){case"focusin":(qs(J)||J.contentEditable==="true")&&(Wt=J,qo=v,Rr=null);break;case"focusout":Rr=qo=Wt=null;break;case"mousedown":Jo=!0;break;case"contextmenu":case"mouseup":case"dragend":Jo=!1,$s(j,t,w);break;case"selectionchange":if(Zu)break;case"keydown":case"keyup":$s(j,t,w)}var B;if(Ao)n:{switch(n){case"compositionstart":var G="onCompositionStart";break n;case"compositionend":G="onCompositionEnd";break n;case"compositionupdate":G="onCompositionUpdate";break n}G=void 0}else Ut?Os(n,t)&&(G="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(G="onCompositionStart");G&&(Ls&&t.locale!=="ko"&&(Ut||G!=="onCompositionStart"?G==="onCompositionEnd"&&Ut&&(B=Ps()):(st=w,Po="value"in st?st.value:st.textContent,Ut=!0)),J=Ea(v,G),0<J.length&&(G=new Ds(G,n,null,t,w),j.push({event:G,listeners:J}),B?G.data=B:(B=_s(t),B!==null&&(G.data=B)))),(B=zu?Hu(n,t):Fu(n,t))&&(v=Ea(v,"onBeforeInput"),0<v.length&&(w=new Ds("onBeforeInput","beforeinput",null,t,w),j.push({event:w,listeners:v}),w.data=B))}rl(j,e)})}function qr(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Ea(n,e){for(var t=e+"Capture",r=[];n!==null;){var a=n,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=g(n,t),o!=null&&r.unshift(qr(n,o,a)),o=g(n,e),o!=null&&r.push(qr(n,o,a))),n=n.return}return r}function $t(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ol(n,e,t,r,a){for(var o=e._reactName,i=[];t!==null&&t!==r;){var l=t,u=l.alternate,v=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&v!==null&&(l=v,a?(u=g(t,o),u!=null&&i.unshift(qr(t,u,l))):a||(u=g(t,o),u!=null&&i.push(qr(t,u,l)))),t=t.return}i.length!==0&&n.push({event:e,listeners:i})}var rp=/\r\n?/g,ap=/\u0000|\uFFFD/g;function il(n){return(typeof n=="string"?n:""+n).replace(rp,`
`).replace(ap,"")}function Pa(n,e,t){if(e=il(e),il(n)!==e&&t)throw Error(c(425))}function Ma(){}var Uo=null,Wo=null;function Vo(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $o=typeof setTimeout=="function"?setTimeout:void 0,op=typeof clearTimeout=="function"?clearTimeout:void 0,sl=typeof Promise=="function"?Promise:void 0,ip=typeof queueMicrotask=="function"?queueMicrotask:typeof sl<"u"?function(n){return sl.resolve(null).then(n).catch(sp)}:$o;function sp(n){setTimeout(function(){throw n})}function Qo(n,e){var t=e,r=0;do{var a=t.nextSibling;if(n.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(r===0){n.removeChild(a),Pr(e);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=a}while(t);Pr(e)}function ct(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function ll(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Qt=Math.random().toString(36).slice(2),qe="__reactFiber$"+Qt,Jr="__reactProps$"+Qt,We="__reactContainer$"+Qt,Ko="__reactEvents$"+Qt,lp="__reactListeners$"+Qt,cp="__reactHandles$"+Qt;function Et(n){var e=n[qe];if(e)return e;for(var t=n.parentNode;t;){if(e=t[We]||t[qe]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=ll(n);n!==null;){if(t=n[qe])return t;n=ll(n)}return e}n=t,t=n.parentNode}return null}function Br(n){return n=n[qe]||n[We],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Kt(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(c(33))}function Na(n){return n[Jr]||null}var Xo=[],Xt=-1;function ut(n){return{current:n}}function xn(n){0>Xt||(n.current=Xo[Xt],Xo[Xt]=null,Xt--)}function fn(n,e){Xt++,Xo[Xt]=n.current,n.current=e}var pt={},$n=ut(pt),ae=ut(!1),Pt=pt;function Yt(n,e){var t=n.type.contextTypes;if(!t)return pt;var r=n.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in t)a[o]=e[o];return r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=a),a}function oe(n){return n=n.childContextTypes,n!=null}function Da(){xn(ae),xn($n)}function cl(n,e,t){if($n.current!==pt)throw Error(c(168));fn($n,e),fn(ae,t)}function ul(n,e,t){var r=n.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var a in r)if(!(a in e))throw Error(c(108,dn(n)||"Unknown",a));return M({},t,r)}function Ia(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||pt,Pt=$n.current,fn($n,n),fn(ae,ae.current),!0}function pl(n,e,t){var r=n.stateNode;if(!r)throw Error(c(169));t?(n=ul(n,e,Pt),r.__reactInternalMemoizedMergedChildContext=n,xn(ae),xn($n),fn($n,n)):xn(ae),fn(ae,t)}var Ve=null,La=!1,Yo=!1;function dl(n){Ve===null?Ve=[n]:Ve.push(n)}function up(n){La=!0,dl(n)}function dt(){if(!Yo&&Ve!==null){Yo=!0;var n=0,e=pn;try{var t=Ve;for(pn=1;n<t.length;n++){var r=t[n];do r=r(!0);while(r!==null)}Ve=null,La=!1}catch(a){throw Ve!==null&&(Ve=Ve.slice(n+1)),gs(So,dt),a}finally{pn=e,Yo=!1}}return null}var Zt=[],nr=0,Aa=null,Ra=0,be=[],we=0,Mt=null,$e=1,Qe="";function Nt(n,e){Zt[nr++]=Ra,Zt[nr++]=Aa,Aa=n,Ra=e}function ml(n,e,t){be[we++]=$e,be[we++]=Qe,be[we++]=Mt,Mt=n;var r=$e;n=Qe;var a=32-Me(r)-1;r&=~(1<<a),t+=1;var o=32-Me(e)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,$e=1<<32-Me(e)+a|t<<a|r,Qe=o+n}else $e=1<<o|t<<a|r,Qe=n}function Zo(n){n.return!==null&&(Nt(n,1),ml(n,1,0))}function ni(n){for(;n===Aa;)Aa=Zt[--nr],Zt[nr]=null,Ra=Zt[--nr],Zt[nr]=null;for(;n===Mt;)Mt=be[--we],be[we]=null,Qe=be[--we],be[we]=null,$e=be[--we],be[we]=null}var ge=null,fe=null,wn=!1,De=null;function gl(n,e){var t=Ce(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function fl(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,ge=n,fe=ct(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,ge=n,fe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Mt!==null?{id:$e,overflow:Qe}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Ce(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,ge=n,fe=null,!0):!1;default:return!1}}function ei(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ti(n){if(wn){var e=fe;if(e){var t=e;if(!fl(n,e)){if(ei(n))throw Error(c(418));e=ct(t.nextSibling);var r=ge;e&&fl(n,e)?gl(r,t):(n.flags=n.flags&-4097|2,wn=!1,ge=n)}}else{if(ei(n))throw Error(c(418));n.flags=n.flags&-4097|2,wn=!1,ge=n}}}function hl(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ge=n}function Oa(n){if(n!==ge)return!1;if(!wn)return hl(n),wn=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Vo(n.type,n.memoizedProps)),e&&(e=fe)){if(ei(n))throw vl(),Error(c(418));for(;e;)gl(n,e),e=ct(e.nextSibling)}if(hl(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){fe=ct(n.nextSibling);break n}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}fe=null}}else fe=ge?ct(n.stateNode.nextSibling):null;return!0}function vl(){for(var n=fe;n;)n=ct(n.nextSibling)}function er(){fe=ge=null,wn=!1}function ri(n){De===null?De=[n]:De.push(n)}var pp=kn.ReactCurrentBatchConfig;function zr(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(c(309));var r=t.stateNode}if(!r)throw Error(c(147,n));var a=r,o=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(i){var l=a.refs;i===null?delete l[o]:l[o]=i},e._stringRef=o,e)}if(typeof n!="string")throw Error(c(284));if(!t._owner)throw Error(c(290,n))}return n}function _a(n,e){throw n=Object.prototype.toString.call(e),Error(c(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function yl(n){var e=n._init;return e(n._payload)}function xl(n){function e(f,d){if(n){var h=f.deletions;h===null?(f.deletions=[d],f.flags|=16):h.push(d)}}function t(f,d){if(!n)return null;for(;d!==null;)e(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function a(f,d){return f=St(f,d),f.index=0,f.sibling=null,f}function o(f,d,h){return f.index=h,n?(h=f.alternate,h!==null?(h=h.index,h<d?(f.flags|=2,d):h):(f.flags|=2,d)):(f.flags|=1048576,d)}function i(f){return n&&f.alternate===null&&(f.flags|=2),f}function l(f,d,h,C){return d===null||d.tag!==6?(d=$i(h,f.mode,C),d.return=f,d):(d=a(d,h),d.return=f,d)}function u(f,d,h,C){var _=h.type;return _===zn?w(f,d,h.props.children,C,h.key):d!==null&&(d.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Fn&&yl(_)===d.type)?(C=a(d,h.props),C.ref=zr(f,d,h),C.return=f,C):(C=so(h.type,h.key,h.props,null,f.mode,C),C.ref=zr(f,d,h),C.return=f,C)}function v(f,d,h,C){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Qi(h,f.mode,C),d.return=f,d):(d=a(d,h.children||[]),d.return=f,d)}function w(f,d,h,C,_){return d===null||d.tag!==7?(d=qt(h,f.mode,C,_),d.return=f,d):(d=a(d,h),d.return=f,d)}function j(f,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=$i(""+d,f.mode,h),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Yn:return h=so(d.type,d.key,d.props,null,f.mode,h),h.ref=zr(f,null,d),h.return=f,h;case Bn:return d=Qi(d,f.mode,h),d.return=f,d;case Fn:var C=d._init;return j(f,C(d._payload),h)}if(An(d)||z(d))return d=qt(d,f.mode,h,null),d.return=f,d;_a(f,d)}return null}function b(f,d,h,C){var _=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return _!==null?null:l(f,d,""+h,C);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Yn:return h.key===_?u(f,d,h,C):null;case Bn:return h.key===_?v(f,d,h,C):null;case Fn:return _=h._init,b(f,d,_(h._payload),C)}if(An(h)||z(h))return _!==null?null:w(f,d,h,C,null);_a(f,h)}return null}function N(f,d,h,C,_){if(typeof C=="string"&&C!==""||typeof C=="number")return f=f.get(h)||null,l(d,f,""+C,_);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Yn:return f=f.get(C.key===null?h:C.key)||null,u(d,f,C,_);case Bn:return f=f.get(C.key===null?h:C.key)||null,v(d,f,C,_);case Fn:var J=C._init;return N(f,d,h,J(C._payload),_)}if(An(C)||z(C))return f=f.get(h)||null,w(d,f,C,_,null);_a(d,C)}return null}function I(f,d,h,C){for(var _=null,J=null,B=d,G=d=0,Jn=null;B!==null&&G<h.length;G++){B.index>G?(Jn=B,B=null):Jn=B.sibling;var cn=b(f,B,h[G],C);if(cn===null){B===null&&(B=Jn);break}n&&B&&cn.alternate===null&&e(f,B),d=o(cn,d,G),J===null?_=cn:J.sibling=cn,J=cn,B=Jn}if(G===h.length)return t(f,B),wn&&Nt(f,G),_;if(B===null){for(;G<h.length;G++)B=j(f,h[G],C),B!==null&&(d=o(B,d,G),J===null?_=B:J.sibling=B,J=B);return wn&&Nt(f,G),_}for(B=r(f,B);G<h.length;G++)Jn=N(B,f,G,h[G],C),Jn!==null&&(n&&Jn.alternate!==null&&B.delete(Jn.key===null?G:Jn.key),d=o(Jn,d,G),J===null?_=Jn:J.sibling=Jn,J=Jn);return n&&B.forEach(function(bt){return e(f,bt)}),wn&&Nt(f,G),_}function O(f,d,h,C){var _=z(h);if(typeof _!="function")throw Error(c(150));if(h=_.call(h),h==null)throw Error(c(151));for(var J=_=null,B=d,G=d=0,Jn=null,cn=h.next();B!==null&&!cn.done;G++,cn=h.next()){B.index>G?(Jn=B,B=null):Jn=B.sibling;var bt=b(f,B,cn.value,C);if(bt===null){B===null&&(B=Jn);break}n&&B&&bt.alternate===null&&e(f,B),d=o(bt,d,G),J===null?_=bt:J.sibling=bt,J=bt,B=Jn}if(cn.done)return t(f,B),wn&&Nt(f,G),_;if(B===null){for(;!cn.done;G++,cn=h.next())cn=j(f,cn.value,C),cn!==null&&(d=o(cn,d,G),J===null?_=cn:J.sibling=cn,J=cn);return wn&&Nt(f,G),_}for(B=r(f,B);!cn.done;G++,cn=h.next())cn=N(B,f,G,cn.value,C),cn!==null&&(n&&cn.alternate!==null&&B.delete(cn.key===null?G:cn.key),d=o(cn,d,G),J===null?_=cn:J.sibling=cn,J=cn);return n&&B.forEach(function(Gp){return e(f,Gp)}),wn&&Nt(f,G),_}function Pn(f,d,h,C){if(typeof h=="object"&&h!==null&&h.type===zn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Yn:n:{for(var _=h.key,J=d;J!==null;){if(J.key===_){if(_=h.type,_===zn){if(J.tag===7){t(f,J.sibling),d=a(J,h.props.children),d.return=f,f=d;break n}}else if(J.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Fn&&yl(_)===J.type){t(f,J.sibling),d=a(J,h.props),d.ref=zr(f,J,h),d.return=f,f=d;break n}t(f,J);break}else e(f,J);J=J.sibling}h.type===zn?(d=qt(h.props.children,f.mode,C,h.key),d.return=f,f=d):(C=so(h.type,h.key,h.props,null,f.mode,C),C.ref=zr(f,d,h),C.return=f,f=C)}return i(f);case Bn:n:{for(J=h.key;d!==null;){if(d.key===J)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){t(f,d.sibling),d=a(d,h.children||[]),d.return=f,f=d;break n}else{t(f,d);break}else e(f,d);d=d.sibling}d=Qi(h,f.mode,C),d.return=f,f=d}return i(f);case Fn:return J=h._init,Pn(f,d,J(h._payload),C)}if(An(h))return I(f,d,h,C);if(z(h))return O(f,d,h,C);_a(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(t(f,d.sibling),d=a(d,h),d.return=f,f=d):(t(f,d),d=$i(h,f.mode,C),d.return=f,f=d),i(f)):t(f,d)}return Pn}var tr=xl(!0),Sl=xl(!1),qa=ut(null),Ja=null,rr=null,ai=null;function oi(){ai=rr=Ja=null}function ii(n){var e=qa.current;xn(qa),n._currentValue=e}function si(n,e,t){for(;n!==null;){var r=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),n===t)break;n=n.return}}function ar(n,e){Ja=n,ai=rr=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(ie=!0),n.firstContext=null)}function ke(n){var e=n._currentValue;if(ai!==n)if(n={context:n,memoizedValue:e,next:null},rr===null){if(Ja===null)throw Error(c(308));rr=n,Ja.dependencies={lanes:0,firstContext:n}}else rr=rr.next=n;return e}var Dt=null;function li(n){Dt===null?Dt=[n]:Dt.push(n)}function bl(n,e,t,r){var a=e.interleaved;return a===null?(t.next=t,li(e)):(t.next=a.next,a.next=t),e.interleaved=t,Ke(n,r)}function Ke(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var mt=!1;function ci(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wl(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Xe(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function gt(n,e,t){var r=n.updateQueue;if(r===null)return null;if(r=r.shared,(on&2)!==0){var a=r.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),r.pending=e,Ke(n,t)}return a=r.interleaved,a===null?(e.next=e,li(r)):(e.next=a.next,a.next=e),r.interleaved=e,Ke(n,t)}function Ba(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,ko(n,t)}}function kl(n,e){var t=n.updateQueue,r=n.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var a=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?a=o=i:o=o.next=i,t=t.next}while(t!==null);o===null?a=o=e:o=o.next=e}else a=o=e;t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function za(n,e,t,r){var a=n.updateQueue;mt=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var u=l,v=u.next;u.next=null,i===null?o=v:i.next=v,i=u;var w=n.alternate;w!==null&&(w=w.updateQueue,l=w.lastBaseUpdate,l!==i&&(l===null?w.firstBaseUpdate=v:l.next=v,w.lastBaseUpdate=u))}if(o!==null){var j=a.baseState;i=0,w=v=u=null,l=o;do{var b=l.lane,N=l.eventTime;if((r&b)===b){w!==null&&(w=w.next={eventTime:N,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});n:{var I=n,O=l;switch(b=e,N=t,O.tag){case 1:if(I=O.payload,typeof I=="function"){j=I.call(N,j,b);break n}j=I;break n;case 3:I.flags=I.flags&-65537|128;case 0:if(I=O.payload,b=typeof I=="function"?I.call(N,j,b):I,b==null)break n;j=M({},j,b);break n;case 2:mt=!0}}l.callback!==null&&l.lane!==0&&(n.flags|=64,b=a.effects,b===null?a.effects=[l]:b.push(l))}else N={eventTime:N,lane:b,tag:l.tag,payload:l.payload,callback:l.callback,next:null},w===null?(v=w=N,u=j):w=w.next=N,i|=b;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;b=l,l=b.next,b.next=null,a.lastBaseUpdate=b,a.shared.pending=null}}while(!0);if(w===null&&(u=j),a.baseState=u,a.firstBaseUpdate=v,a.lastBaseUpdate=w,e=a.shared.interleaved,e!==null){a=e;do i|=a.lane,a=a.next;while(a!==e)}else o===null&&(a.shared.lanes=0);At|=i,n.lanes=i,n.memoizedState=j}}function jl(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var r=n[e],a=r.callback;if(a!==null){if(r.callback=null,r=t,typeof a!="function")throw Error(c(191,a));a.call(r)}}}var Hr={},Je=ut(Hr),Fr=ut(Hr),Gr=ut(Hr);function It(n){if(n===Hr)throw Error(c(174));return n}function ui(n,e){switch(fn(Gr,e),fn(Fr,n),fn(Je,Hr),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:fr(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=fr(e,n)}xn(Je),fn(Je,e)}function or(){xn(Je),xn(Fr),xn(Gr)}function Tl(n){It(Gr.current);var e=It(Je.current),t=fr(e,n.type);e!==t&&(fn(Fr,n),fn(Je,t))}function pi(n){Fr.current===n&&(xn(Je),xn(Fr))}var jn=ut(0);function Ha(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var di=[];function mi(){for(var n=0;n<di.length;n++)di[n]._workInProgressVersionPrimary=null;di.length=0}var Fa=kn.ReactCurrentDispatcher,gi=kn.ReactCurrentBatchConfig,Lt=0,Tn=null,In=null,_n=null,Ga=!1,Ur=!1,Wr=0,dp=0;function Qn(){throw Error(c(321))}function fi(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Ne(n[t],e[t]))return!1;return!0}function hi(n,e,t,r,a,o){if(Lt=o,Tn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fa.current=n===null||n.memoizedState===null?hp:vp,n=t(r,a),Ur){o=0;do{if(Ur=!1,Wr=0,25<=o)throw Error(c(301));o+=1,_n=In=null,e.updateQueue=null,Fa.current=yp,n=t(r,a)}while(Ur)}if(Fa.current=Va,e=In!==null&&In.next!==null,Lt=0,_n=In=Tn=null,Ga=!1,e)throw Error(c(300));return n}function vi(){var n=Wr!==0;return Wr=0,n}function Be(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?Tn.memoizedState=_n=n:_n=_n.next=n,_n}function je(){if(In===null){var n=Tn.alternate;n=n!==null?n.memoizedState:null}else n=In.next;var e=_n===null?Tn.memoizedState:_n.next;if(e!==null)_n=e,In=n;else{if(n===null)throw Error(c(310));In=n,n={memoizedState:In.memoizedState,baseState:In.baseState,baseQueue:In.baseQueue,queue:In.queue,next:null},_n===null?Tn.memoizedState=_n=n:_n=_n.next=n}return _n}function Vr(n,e){return typeof e=="function"?e(n):e}function yi(n){var e=je(),t=e.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=n;var r=In,a=r.baseQueue,o=t.pending;if(o!==null){if(a!==null){var i=a.next;a.next=o.next,o.next=i}r.baseQueue=a=o,t.pending=null}if(a!==null){o=a.next,r=r.baseState;var l=i=null,u=null,v=o;do{var w=v.lane;if((Lt&w)===w)u!==null&&(u=u.next={lane:0,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),r=v.hasEagerState?v.eagerState:n(r,v.action);else{var j={lane:w,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null};u===null?(l=u=j,i=r):u=u.next=j,Tn.lanes|=w,At|=w}v=v.next}while(v!==null&&v!==o);u===null?i=r:u.next=l,Ne(r,e.memoizedState)||(ie=!0),e.memoizedState=r,e.baseState=i,e.baseQueue=u,t.lastRenderedState=r}if(n=t.interleaved,n!==null){a=n;do o=a.lane,Tn.lanes|=o,At|=o,a=a.next;while(a!==n)}else a===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function xi(n){var e=je(),t=e.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=n;var r=t.dispatch,a=t.pending,o=e.memoizedState;if(a!==null){t.pending=null;var i=a=a.next;do o=n(o,i.action),i=i.next;while(i!==a);Ne(o,e.memoizedState)||(ie=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),t.lastRenderedState=o}return[o,r]}function Cl(){}function El(n,e){var t=Tn,r=je(),a=e(),o=!Ne(r.memoizedState,a);if(o&&(r.memoizedState=a,ie=!0),r=r.queue,Si(Nl.bind(null,t,r,n),[n]),r.getSnapshot!==e||o||_n!==null&&_n.memoizedState.tag&1){if(t.flags|=2048,$r(9,Ml.bind(null,t,r,a,e),void 0,null),qn===null)throw Error(c(349));(Lt&30)!==0||Pl(t,e,a)}return a}function Pl(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Tn.updateQueue,e===null?(e={lastEffect:null,stores:null},Tn.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Ml(n,e,t,r){e.value=t,e.getSnapshot=r,Dl(e)&&Il(n)}function Nl(n,e,t){return t(function(){Dl(e)&&Il(n)})}function Dl(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Ne(n,t)}catch{return!0}}function Il(n){var e=Ke(n,1);e!==null&&Re(e,n,1,-1)}function Ll(n){var e=Be();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vr,lastRenderedState:n},e.queue=n,n=n.dispatch=fp.bind(null,Tn,n),[e.memoizedState,n]}function $r(n,e,t,r){return n={tag:n,create:e,destroy:t,deps:r,next:null},e=Tn.updateQueue,e===null?(e={lastEffect:null,stores:null},Tn.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(r=t.next,t.next=n,n.next=r,e.lastEffect=n)),n}function Al(){return je().memoizedState}function Ua(n,e,t,r){var a=Be();Tn.flags|=n,a.memoizedState=$r(1|e,t,void 0,r===void 0?null:r)}function Wa(n,e,t,r){var a=je();r=r===void 0?null:r;var o=void 0;if(In!==null){var i=In.memoizedState;if(o=i.destroy,r!==null&&fi(r,i.deps)){a.memoizedState=$r(e,t,o,r);return}}Tn.flags|=n,a.memoizedState=$r(1|e,t,o,r)}function Rl(n,e){return Ua(8390656,8,n,e)}function Si(n,e){return Wa(2048,8,n,e)}function Ol(n,e){return Wa(4,2,n,e)}function _l(n,e){return Wa(4,4,n,e)}function ql(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Jl(n,e,t){return t=t!=null?t.concat([n]):null,Wa(4,4,ql.bind(null,e,n),t)}function bi(){}function Bl(n,e){var t=je();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&fi(e,r[1])?r[0]:(t.memoizedState=[n,e],n)}function zl(n,e){var t=je();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&fi(e,r[1])?r[0]:(n=n(),t.memoizedState=[n,e],n)}function Hl(n,e,t){return(Lt&21)===0?(n.baseState&&(n.baseState=!1,ie=!0),n.memoizedState=t):(Ne(t,e)||(t=ys(),Tn.lanes|=t,At|=t,n.baseState=!0),e)}function mp(n,e){var t=pn;pn=t!==0&&4>t?t:4,n(!0);var r=gi.transition;gi.transition={};try{n(!1),e()}finally{pn=t,gi.transition=r}}function Fl(){return je().memoizedState}function gp(n,e,t){var r=yt(n);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Gl(n))Ul(e,t);else if(t=bl(n,e,t,r),t!==null){var a=ne();Re(t,n,r,a),Wl(t,e,r)}}function fp(n,e,t){var r=yt(n),a={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Gl(n))Ul(e,a);else{var o=n.alternate;if(n.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var i=e.lastRenderedState,l=o(i,t);if(a.hasEagerState=!0,a.eagerState=l,Ne(l,i)){var u=e.interleaved;u===null?(a.next=a,li(e)):(a.next=u.next,u.next=a),e.interleaved=a;return}}catch{}finally{}t=bl(n,e,a,r),t!==null&&(a=ne(),Re(t,n,r,a),Wl(t,e,r))}}function Gl(n){var e=n.alternate;return n===Tn||e!==null&&e===Tn}function Ul(n,e){Ur=Ga=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Wl(n,e,t){if((t&4194240)!==0){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,ko(n,t)}}var Va={readContext:ke,useCallback:Qn,useContext:Qn,useEffect:Qn,useImperativeHandle:Qn,useInsertionEffect:Qn,useLayoutEffect:Qn,useMemo:Qn,useReducer:Qn,useRef:Qn,useState:Qn,useDebugValue:Qn,useDeferredValue:Qn,useTransition:Qn,useMutableSource:Qn,useSyncExternalStore:Qn,useId:Qn,unstable_isNewReconciler:!1},hp={readContext:ke,useCallback:function(n,e){return Be().memoizedState=[n,e===void 0?null:e],n},useContext:ke,useEffect:Rl,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Ua(4194308,4,ql.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Ua(4194308,4,n,e)},useInsertionEffect:function(n,e){return Ua(4,2,n,e)},useMemo:function(n,e){var t=Be();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var r=Be();return e=t!==void 0?t(e):e,r.memoizedState=r.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},r.queue=n,n=n.dispatch=gp.bind(null,Tn,n),[r.memoizedState,n]},useRef:function(n){var e=Be();return n={current:n},e.memoizedState=n},useState:Ll,useDebugValue:bi,useDeferredValue:function(n){return Be().memoizedState=n},useTransition:function(){var n=Ll(!1),e=n[0];return n=mp.bind(null,n[1]),Be().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var r=Tn,a=Be();if(wn){if(t===void 0)throw Error(c(407));t=t()}else{if(t=e(),qn===null)throw Error(c(349));(Lt&30)!==0||Pl(r,e,t)}a.memoizedState=t;var o={value:t,getSnapshot:e};return a.queue=o,Rl(Nl.bind(null,r,o,n),[n]),r.flags|=2048,$r(9,Ml.bind(null,r,o,t,e),void 0,null),t},useId:function(){var n=Be(),e=qn.identifierPrefix;if(wn){var t=Qe,r=$e;t=(r&~(1<<32-Me(r)-1)).toString(32)+t,e=":"+e+"R"+t,t=Wr++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=dp++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},vp={readContext:ke,useCallback:Bl,useContext:ke,useEffect:Si,useImperativeHandle:Jl,useInsertionEffect:Ol,useLayoutEffect:_l,useMemo:zl,useReducer:yi,useRef:Al,useState:function(){return yi(Vr)},useDebugValue:bi,useDeferredValue:function(n){var e=je();return Hl(e,In.memoizedState,n)},useTransition:function(){var n=yi(Vr)[0],e=je().memoizedState;return[n,e]},useMutableSource:Cl,useSyncExternalStore:El,useId:Fl,unstable_isNewReconciler:!1},yp={readContext:ke,useCallback:Bl,useContext:ke,useEffect:Si,useImperativeHandle:Jl,useInsertionEffect:Ol,useLayoutEffect:_l,useMemo:zl,useReducer:xi,useRef:Al,useState:function(){return xi(Vr)},useDebugValue:bi,useDeferredValue:function(n){var e=je();return In===null?e.memoizedState=n:Hl(e,In.memoizedState,n)},useTransition:function(){var n=xi(Vr)[0],e=je().memoizedState;return[n,e]},useMutableSource:Cl,useSyncExternalStore:El,useId:Fl,unstable_isNewReconciler:!1};function Ie(n,e){if(n&&n.defaultProps){e=M({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function wi(n,e,t,r){e=n.memoizedState,t=t(r,e),t=t==null?e:M({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var $a={isMounted:function(n){return(n=n._reactInternals)?Ct(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var r=ne(),a=yt(n),o=Xe(r,a);o.payload=e,t!=null&&(o.callback=t),e=gt(n,o,a),e!==null&&(Re(e,n,a,r),Ba(e,n,a))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var r=ne(),a=yt(n),o=Xe(r,a);o.tag=1,o.payload=e,t!=null&&(o.callback=t),e=gt(n,o,a),e!==null&&(Re(e,n,a,r),Ba(e,n,a))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=ne(),r=yt(n),a=Xe(t,r);a.tag=2,e!=null&&(a.callback=e),e=gt(n,a,r),e!==null&&(Re(e,n,r,t),Ba(e,n,r))}};function Vl(n,e,t,r,a,o,i){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(r,o,i):e.prototype&&e.prototype.isPureReactComponent?!Ar(t,r)||!Ar(a,o):!0}function $l(n,e,t){var r=!1,a=pt,o=e.contextType;return typeof o=="object"&&o!==null?o=ke(o):(a=oe(e)?Pt:$n.current,r=e.contextTypes,o=(r=r!=null)?Yt(n,a):pt),e=new e(t,o),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=$a,n.stateNode=e,e._reactInternals=n,r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=a,n.__reactInternalMemoizedMaskedChildContext=o),e}function Ql(n,e,t,r){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,r),e.state!==n&&$a.enqueueReplaceState(e,e.state,null)}function ki(n,e,t,r){var a=n.stateNode;a.props=t,a.state=n.memoizedState,a.refs={},ci(n);var o=e.contextType;typeof o=="object"&&o!==null?a.context=ke(o):(o=oe(e)?Pt:$n.current,a.context=Yt(n,o)),a.state=n.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(wi(n,e,o,t),a.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(e=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),e!==a.state&&$a.enqueueReplaceState(a,a.state,null),za(n,t,a,r),a.state=n.memoizedState),typeof a.componentDidMount=="function"&&(n.flags|=4194308)}function ir(n,e){try{var t="",r=e;do t+=tn(r),r=r.return;while(r);var a=t}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:n,source:e,stack:a,digest:null}}function ji(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Ti(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var xp=typeof WeakMap=="function"?WeakMap:Map;function Kl(n,e,t){t=Xe(-1,t),t.tag=3,t.payload={element:null};var r=e.value;return t.callback=function(){eo||(eo=!0,Bi=r),Ti(n,e)},t}function Xl(n,e,t){t=Xe(-1,t),t.tag=3;var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var a=e.value;t.payload=function(){return r(a)},t.callback=function(){Ti(n,e)}}var o=n.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Ti(n,e),typeof r!="function"&&(ht===null?ht=new Set([this]):ht.add(this));var i=e.stack;this.componentDidCatch(e.value,{componentStack:i!==null?i:""})}),t}function Yl(n,e,t){var r=n.pingCache;if(r===null){r=n.pingCache=new xp;var a=new Set;r.set(e,a)}else a=r.get(e),a===void 0&&(a=new Set,r.set(e,a));a.has(t)||(a.add(t),n=Lp.bind(null,n,e,t),e.then(n,n))}function Zl(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function nc(n,e,t,r,a){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Xe(-1,1),e.tag=2,gt(t,e,1))),t.lanes|=1),n):(n.flags|=65536,n.lanes=a,n)}var Sp=kn.ReactCurrentOwner,ie=!1;function Zn(n,e,t,r){e.child=n===null?Sl(e,null,t,r):tr(e,n.child,t,r)}function ec(n,e,t,r,a){t=t.render;var o=e.ref;return ar(e,a),r=hi(n,e,t,r,o,a),t=vi(),n!==null&&!ie?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~a,Ye(n,e,a)):(wn&&t&&Zo(e),e.flags|=1,Zn(n,e,r,a),e.child)}function tc(n,e,t,r,a){if(n===null){var o=t.type;return typeof o=="function"&&!Vi(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=o,rc(n,e,o,r,a)):(n=so(t.type,null,r,e,e.mode,a),n.ref=e.ref,n.return=e,e.child=n)}if(o=n.child,(n.lanes&a)===0){var i=o.memoizedProps;if(t=t.compare,t=t!==null?t:Ar,t(i,r)&&n.ref===e.ref)return Ye(n,e,a)}return e.flags|=1,n=St(o,r),n.ref=e.ref,n.return=e,e.child=n}function rc(n,e,t,r,a){if(n!==null){var o=n.memoizedProps;if(Ar(o,r)&&n.ref===e.ref)if(ie=!1,e.pendingProps=r=o,(n.lanes&a)!==0)(n.flags&131072)!==0&&(ie=!0);else return e.lanes=n.lanes,Ye(n,e,a)}return Ci(n,e,t,r,a)}function ac(n,e,t){var r=e.pendingProps,a=r.children,o=n!==null?n.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fn(lr,he),he|=t;else{if((t&1073741824)===0)return n=o!==null?o.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,fn(lr,he),he|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,fn(lr,he),he|=r}else o!==null?(r=o.baseLanes|t,e.memoizedState=null):r=t,fn(lr,he),he|=r;return Zn(n,e,a,t),e.child}function oc(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Ci(n,e,t,r,a){var o=oe(t)?Pt:$n.current;return o=Yt(e,o),ar(e,a),t=hi(n,e,t,r,o,a),r=vi(),n!==null&&!ie?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~a,Ye(n,e,a)):(wn&&r&&Zo(e),e.flags|=1,Zn(n,e,t,a),e.child)}function ic(n,e,t,r,a){if(oe(t)){var o=!0;Ia(e)}else o=!1;if(ar(e,a),e.stateNode===null)Ka(n,e),$l(e,t,r),ki(e,t,r,a),r=!0;else if(n===null){var i=e.stateNode,l=e.memoizedProps;i.props=l;var u=i.context,v=t.contextType;typeof v=="object"&&v!==null?v=ke(v):(v=oe(t)?Pt:$n.current,v=Yt(e,v));var w=t.getDerivedStateFromProps,j=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function";j||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==r||u!==v)&&Ql(e,i,r,v),mt=!1;var b=e.memoizedState;i.state=b,za(e,r,i,a),u=e.memoizedState,l!==r||b!==u||ae.current||mt?(typeof w=="function"&&(wi(e,t,w,r),u=e.memoizedState),(l=mt||Vl(e,t,l,r,b,u,v))?(j||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),i.props=r,i.state=u,i.context=v,r=l):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{i=e.stateNode,wl(n,e),l=e.memoizedProps,v=e.type===e.elementType?l:Ie(e.type,l),i.props=v,j=e.pendingProps,b=i.context,u=t.contextType,typeof u=="object"&&u!==null?u=ke(u):(u=oe(t)?Pt:$n.current,u=Yt(e,u));var N=t.getDerivedStateFromProps;(w=typeof N=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==j||b!==u)&&Ql(e,i,r,u),mt=!1,b=e.memoizedState,i.state=b,za(e,r,i,a);var I=e.memoizedState;l!==j||b!==I||ae.current||mt?(typeof N=="function"&&(wi(e,t,N,r),I=e.memoizedState),(v=mt||Vl(e,t,v,r,b,I,u)||!1)?(w||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,I,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,I,u)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===n.memoizedProps&&b===n.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===n.memoizedProps&&b===n.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),i.props=r,i.state=I,i.context=u,r=v):(typeof i.componentDidUpdate!="function"||l===n.memoizedProps&&b===n.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===n.memoizedProps&&b===n.memoizedState||(e.flags|=1024),r=!1)}return Ei(n,e,t,r,o,a)}function Ei(n,e,t,r,a,o){oc(n,e);var i=(e.flags&128)!==0;if(!r&&!i)return a&&pl(e,t,!1),Ye(n,e,o);r=e.stateNode,Sp.current=e;var l=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,n!==null&&i?(e.child=tr(e,n.child,null,o),e.child=tr(e,null,l,o)):Zn(n,e,l,o),e.memoizedState=r.state,a&&pl(e,t,!0),e.child}function sc(n){var e=n.stateNode;e.pendingContext?cl(n,e.pendingContext,e.pendingContext!==e.context):e.context&&cl(n,e.context,!1),ui(n,e.containerInfo)}function lc(n,e,t,r,a){return er(),ri(a),e.flags|=256,Zn(n,e,t,r),e.child}var Pi={dehydrated:null,treeContext:null,retryLane:0};function Mi(n){return{baseLanes:n,cachePool:null,transitions:null}}function cc(n,e,t){var r=e.pendingProps,a=jn.current,o=!1,i=(e.flags&128)!==0,l;if((l=i)||(l=n!==null&&n.memoizedState===null?!1:(a&2)!==0),l?(o=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(a|=1),fn(jn,a&1),n===null)return ti(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(i=r.children,n=r.fallback,o?(r=e.mode,o=e.child,i={mode:"hidden",children:i},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=i):o=lo(i,r,0,null),n=qt(n,r,t,null),o.return=e,n.return=e,o.sibling=n,e.child=o,e.child.memoizedState=Mi(t),e.memoizedState=Pi,n):Ni(e,i));if(a=n.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return bp(n,e,i,r,l,a,t);if(o){o=r.fallback,i=e.mode,a=n.child,l=a.sibling;var u={mode:"hidden",children:r.children};return(i&1)===0&&e.child!==a?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=St(a,u),r.subtreeFlags=a.subtreeFlags&14680064),l!==null?o=St(l,o):(o=qt(o,i,t,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,i=n.child.memoizedState,i=i===null?Mi(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=n.childLanes&~t,e.memoizedState=Pi,r}return o=n.child,n=o.sibling,r=St(o,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=t),r.return=e,r.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=r,e.memoizedState=null,r}function Ni(n,e){return e=lo({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Qa(n,e,t,r){return r!==null&&ri(r),tr(e,n.child,null,t),n=Ni(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function bp(n,e,t,r,a,o,i){if(t)return e.flags&256?(e.flags&=-257,r=ji(Error(c(422))),Qa(n,e,i,r)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(o=r.fallback,a=e.mode,r=lo({mode:"visible",children:r.children},a,0,null),o=qt(o,a,i,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,(e.mode&1)!==0&&tr(e,n.child,null,i),e.child.memoizedState=Mi(i),e.memoizedState=Pi,o);if((e.mode&1)===0)return Qa(n,e,i,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(c(419)),r=ji(o,r,void 0),Qa(n,e,i,r)}if(l=(i&n.childLanes)!==0,ie||l){if(r=qn,r!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(r.suspendedLanes|i))!==0?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,Ke(n,a),Re(r,n,a,-1))}return Wi(),r=ji(Error(c(421))),Qa(n,e,i,r)}return a.data==="$?"?(e.flags|=128,e.child=n.child,e=Ap.bind(null,n),a._reactRetry=e,null):(n=o.treeContext,fe=ct(a.nextSibling),ge=e,wn=!0,De=null,n!==null&&(be[we++]=$e,be[we++]=Qe,be[we++]=Mt,$e=n.id,Qe=n.overflow,Mt=e),e=Ni(e,r.children),e.flags|=4096,e)}function uc(n,e,t){n.lanes|=e;var r=n.alternate;r!==null&&(r.lanes|=e),si(n.return,e,t)}function Di(n,e,t,r,a){var o=n.memoizedState;o===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=a)}function pc(n,e,t){var r=e.pendingProps,a=r.revealOrder,o=r.tail;if(Zn(n,e,r.children,t),r=jn.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&uc(n,t,e);else if(n.tag===19)uc(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}r&=1}if(fn(jn,r),(e.mode&1)===0)e.memoizedState=null;else switch(a){case"forwards":for(t=e.child,a=null;t!==null;)n=t.alternate,n!==null&&Ha(n)===null&&(a=t),t=t.sibling;t=a,t===null?(a=e.child,e.child=null):(a=t.sibling,t.sibling=null),Di(e,!1,a,t,o);break;case"backwards":for(t=null,a=e.child,e.child=null;a!==null;){if(n=a.alternate,n!==null&&Ha(n)===null){e.child=a;break}n=a.sibling,a.sibling=t,t=a,a=n}Di(e,!0,t,null,o);break;case"together":Di(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ka(n,e){(e.mode&1)===0&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ye(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),At|=e.lanes,(t&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(c(153));if(e.child!==null){for(n=e.child,t=St(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=St(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function wp(n,e,t){switch(e.tag){case 3:sc(e),er();break;case 5:Tl(e);break;case 1:oe(e.type)&&Ia(e);break;case 4:ui(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,a=e.memoizedProps.value;fn(qa,r._currentValue),r._currentValue=a;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fn(jn,jn.current&1),e.flags|=128,null):(t&e.child.childLanes)!==0?cc(n,e,t):(fn(jn,jn.current&1),n=Ye(n,e,t),n!==null?n.sibling:null);fn(jn,jn.current&1);break;case 19:if(r=(t&e.childLanes)!==0,(n.flags&128)!==0){if(r)return pc(n,e,t);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),fn(jn,jn.current),r)break;return null;case 22:case 23:return e.lanes=0,ac(n,e,t)}return Ye(n,e,t)}var dc,Ii,mc,gc;dc=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},Ii=function(){},mc=function(n,e,t,r){var a=n.memoizedProps;if(a!==r){n=e.stateNode,It(Je.current);var o=null;switch(t){case"input":a=Ge(n,a),r=Ge(n,r),o=[];break;case"select":a=M({},a,{value:void 0}),r=M({},r,{value:void 0}),o=[];break;case"textarea":a=et(n,a),r=et(n,r),o=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(n.onclick=Ma)}yr(t,r);var i;t=null;for(v in a)if(!r.hasOwnProperty(v)&&a.hasOwnProperty(v)&&a[v]!=null)if(v==="style"){var l=a[v];for(i in l)l.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else v!=="dangerouslySetInnerHTML"&&v!=="children"&&v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(A.hasOwnProperty(v)?o||(o=[]):(o=o||[]).push(v,null));for(v in r){var u=r[v];if(l=a!=null?a[v]:void 0,r.hasOwnProperty(v)&&u!==l&&(u!=null||l!=null))if(v==="style")if(l){for(i in l)!l.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in u)u.hasOwnProperty(i)&&l[i]!==u[i]&&(t||(t={}),t[i]=u[i])}else t||(o||(o=[]),o.push(v,t)),t=u;else v==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(o=o||[]).push(v,u)):v==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(v,""+u):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&(A.hasOwnProperty(v)?(u!=null&&v==="onScroll"&&yn("scroll",n),o||l===u||(o=[])):(o=o||[]).push(v,u))}t&&(o=o||[]).push("style",t);var v=o;(e.updateQueue=v)&&(e.flags|=4)}},gc=function(n,e,t,r){t!==r&&(e.flags|=4)};function Qr(n,e){if(!wn)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:r.sibling=null}}function Kn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,r=0;if(e)for(var a=n.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=n,a=a.sibling;else for(a=n.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=n,a=a.sibling;return n.subtreeFlags|=r,n.childLanes=t,e}function kp(n,e,t){var r=e.pendingProps;switch(ni(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kn(e),null;case 1:return oe(e.type)&&Da(),Kn(e),null;case 3:return r=e.stateNode,or(),xn(ae),xn($n),mi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(Oa(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,De!==null&&(Fi(De),De=null))),Ii(n,e),Kn(e),null;case 5:pi(e);var a=It(Gr.current);if(t=e.type,n!==null&&e.stateNode!=null)mc(n,e,t,r,a),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(c(166));return Kn(e),null}if(n=It(Je.current),Oa(e)){r=e.stateNode,t=e.type;var o=e.memoizedProps;switch(r[qe]=e,r[Jr]=o,n=(e.mode&1)!==0,t){case"dialog":yn("cancel",r),yn("close",r);break;case"iframe":case"object":case"embed":yn("load",r);break;case"video":case"audio":for(a=0;a<Or.length;a++)yn(Or[a],r);break;case"source":yn("error",r);break;case"img":case"image":case"link":yn("error",r),yn("load",r);break;case"details":yn("toggle",r);break;case"input":aa(r,o),yn("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},yn("invalid",r);break;case"textarea":oa(r,o),yn("invalid",r)}yr(t,o),a=null;for(var i in o)if(o.hasOwnProperty(i)){var l=o[i];i==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Pa(r.textContent,l,n),a=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Pa(r.textContent,l,n),a=["children",""+l]):A.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&yn("scroll",r)}switch(t){case"input":He(r),dr(r,o,!0);break;case"textarea":He(r),gr(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ma)}r=a,e.updateQueue=r,r!==null&&(e.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Bt(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=i.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof r.is=="string"?n=i.createElement(t,{is:r.is}):(n=i.createElement(t),t==="select"&&(i=n,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):n=i.createElementNS(n,t),n[qe]=e,n[Jr]=r,dc(n,e,!1,!1),e.stateNode=n;n:{switch(i=Mn(t,r),t){case"dialog":yn("cancel",n),yn("close",n),a=r;break;case"iframe":case"object":case"embed":yn("load",n),a=r;break;case"video":case"audio":for(a=0;a<Or.length;a++)yn(Or[a],n);a=r;break;case"source":yn("error",n),a=r;break;case"img":case"image":case"link":yn("error",n),yn("load",n),a=r;break;case"details":yn("toggle",n),a=r;break;case"input":aa(n,r),a=Ge(n,r),yn("invalid",n);break;case"option":a=r;break;case"select":n._wrapperState={wasMultiple:!!r.multiple},a=M({},r,{value:void 0}),yn("invalid",n);break;case"textarea":oa(n,r),a=et(n,r),yn("invalid",n);break;default:a=r}yr(t,a),l=a;for(o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="style"?vr(n,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ia(n,u)):o==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&kt(n,u):typeof u=="number"&&kt(n,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(A.hasOwnProperty(o)?u!=null&&o==="onScroll"&&yn("scroll",n):u!=null&&te(n,o,u,i))}switch(t){case"input":He(n),dr(n,r,!1);break;case"textarea":He(n),gr(n);break;case"option":r.value!=null&&n.setAttribute("value",""+Z(r.value));break;case"select":n.multiple=!!r.multiple,o=r.value,o!=null?xe(n,!!r.multiple,o,!1):r.defaultValue!=null&&xe(n,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(n.onclick=Ma)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break n;case"img":r=!0;break n;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Kn(e),null;case 6:if(n&&e.stateNode!=null)gc(n,e,n.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(c(166));if(t=It(Gr.current),It(Je.current),Oa(e)){if(r=e.stateNode,t=e.memoizedProps,r[qe]=e,(o=r.nodeValue!==t)&&(n=ge,n!==null))switch(n.tag){case 3:Pa(r.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Pa(r.nodeValue,t,(n.mode&1)!==0)}o&&(e.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[qe]=e,e.stateNode=r}return Kn(e),null;case 13:if(xn(jn),r=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(wn&&fe!==null&&(e.mode&1)!==0&&(e.flags&128)===0)vl(),er(),e.flags|=98560,o=!1;else if(o=Oa(e),r!==null&&r.dehydrated!==null){if(n===null){if(!o)throw Error(c(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(c(317));o[qe]=e}else er(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Kn(e),o=!1}else De!==null&&(Fi(De),De=null),o=!0;if(!o)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=t,e):(r=r!==null,r!==(n!==null&&n.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||(jn.current&1)!==0?Ln===0&&(Ln=3):Wi())),e.updateQueue!==null&&(e.flags|=4),Kn(e),null);case 4:return or(),Ii(n,e),n===null&&_r(e.stateNode.containerInfo),Kn(e),null;case 10:return ii(e.type._context),Kn(e),null;case 17:return oe(e.type)&&Da(),Kn(e),null;case 19:if(xn(jn),o=e.memoizedState,o===null)return Kn(e),null;if(r=(e.flags&128)!==0,i=o.rendering,i===null)if(r)Qr(o,!1);else{if(Ln!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(i=Ha(n),i!==null){for(e.flags|=128,Qr(o,!1),r=i.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=t,t=e.child;t!==null;)o=t,n=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=n,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,n=i.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return fn(jn,jn.current&1|2),e.child}n=n.sibling}o.tail!==null&&En()>cr&&(e.flags|=128,r=!0,Qr(o,!1),e.lanes=4194304)}else{if(!r)if(n=Ha(i),n!==null){if(e.flags|=128,r=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Qr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!wn)return Kn(e),null}else 2*En()-o.renderingStartTime>cr&&t!==1073741824&&(e.flags|=128,r=!0,Qr(o,!1),e.lanes=4194304);o.isBackwards?(i.sibling=e.child,e.child=i):(t=o.last,t!==null?t.sibling=i:e.child=i,o.last=i)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=En(),e.sibling=null,t=jn.current,fn(jn,r?t&1|2:t&1),e):(Kn(e),null);case 22:case 23:return Ui(),r=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(he&1073741824)!==0&&(Kn(e),e.subtreeFlags&6&&(e.flags|=8192)):Kn(e),null;case 24:return null;case 25:return null}throw Error(c(156,e.tag))}function jp(n,e){switch(ni(e),e.tag){case 1:return oe(e.type)&&Da(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return or(),xn(ae),xn($n),mi(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return pi(e),null;case 13:if(xn(jn),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(c(340));er()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return xn(jn),null;case 4:return or(),null;case 10:return ii(e.type._context),null;case 22:case 23:return Ui(),null;case 24:return null;default:return null}}var Xa=!1,Xn=!1,Tp=typeof WeakSet=="function"?WeakSet:Set,D=null;function sr(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Cn(n,e,r)}else t.current=null}function Li(n,e,t){try{t()}catch(r){Cn(n,e,r)}}var fc=!1;function Cp(n,e){if(Uo=va,n=Vs(),_o(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break n}var i=0,l=-1,u=-1,v=0,w=0,j=n,b=null;e:for(;;){for(var N;j!==t||a!==0&&j.nodeType!==3||(l=i+a),j!==o||r!==0&&j.nodeType!==3||(u=i+r),j.nodeType===3&&(i+=j.nodeValue.length),(N=j.firstChild)!==null;)b=j,j=N;for(;;){if(j===n)break e;if(b===t&&++v===a&&(l=i),b===o&&++w===r&&(u=i),(N=j.nextSibling)!==null)break;j=b,b=j.parentNode}j=N}t=l===-1||u===-1?null:{start:l,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(Wo={focusedElem:n,selectionRange:t},va=!1,D=e;D!==null;)if(e=D,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,D=n;else for(;D!==null;){e=D;try{var I=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var O=I.memoizedProps,Pn=I.memoizedState,f=e.stateNode,d=f.getSnapshotBeforeUpdate(e.elementType===e.type?O:Ie(e.type,O),Pn);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=e.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(C){Cn(e,e.return,C)}if(n=e.sibling,n!==null){n.return=e.return,D=n;break}D=e.return}return I=fc,fc=!1,I}function Kr(n,e,t){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var o=a.destroy;a.destroy=void 0,o!==void 0&&Li(e,t,o)}a=a.next}while(a!==r)}}function Ya(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}}function Ai(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function hc(n){var e=n.alternate;e!==null&&(n.alternate=null,hc(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[qe],delete e[Jr],delete e[Ko],delete e[lp],delete e[cp])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function vc(n){return n.tag===5||n.tag===3||n.tag===4}function yc(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||vc(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ri(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Ma));else if(r!==4&&(n=n.child,n!==null))for(Ri(n,e,t),n=n.sibling;n!==null;)Ri(n,e,t),n=n.sibling}function Oi(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(r!==4&&(n=n.child,n!==null))for(Oi(n,e,t),n=n.sibling;n!==null;)Oi(n,e,t),n=n.sibling}var Un=null,Le=!1;function ft(n,e,t){for(t=t.child;t!==null;)xc(n,e,t),t=t.sibling}function xc(n,e,t){if(_e&&typeof _e.onCommitFiberUnmount=="function")try{_e.onCommitFiberUnmount(pa,t)}catch{}switch(t.tag){case 5:Xn||sr(t,e);case 6:var r=Un,a=Le;Un=null,ft(n,e,t),Un=r,Le=a,Un!==null&&(Le?(n=Un,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Un.removeChild(t.stateNode));break;case 18:Un!==null&&(Le?(n=Un,t=t.stateNode,n.nodeType===8?Qo(n.parentNode,t):n.nodeType===1&&Qo(n,t),Pr(n)):Qo(Un,t.stateNode));break;case 4:r=Un,a=Le,Un=t.stateNode.containerInfo,Le=!0,ft(n,e,t),Un=r,Le=a;break;case 0:case 11:case 14:case 15:if(!Xn&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var o=a,i=o.destroy;o=o.tag,i!==void 0&&((o&2)!==0||(o&4)!==0)&&Li(t,e,i),a=a.next}while(a!==r)}ft(n,e,t);break;case 1:if(!Xn&&(sr(t,e),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){Cn(t,e,l)}ft(n,e,t);break;case 21:ft(n,e,t);break;case 22:t.mode&1?(Xn=(r=Xn)||t.memoizedState!==null,ft(n,e,t),Xn=r):ft(n,e,t);break;default:ft(n,e,t)}}function Sc(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Tp),e.forEach(function(r){var a=Rp.bind(null,n,r);t.has(r)||(t.add(r),r.then(a,a))})}}function Ae(n,e){var t=e.deletions;if(t!==null)for(var r=0;r<t.length;r++){var a=t[r];try{var o=n,i=e,l=i;n:for(;l!==null;){switch(l.tag){case 5:Un=l.stateNode,Le=!1;break n;case 3:Un=l.stateNode.containerInfo,Le=!0;break n;case 4:Un=l.stateNode.containerInfo,Le=!0;break n}l=l.return}if(Un===null)throw Error(c(160));xc(o,i,a),Un=null,Le=!1;var u=a.alternate;u!==null&&(u.return=null),a.return=null}catch(v){Cn(a,e,v)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)bc(e,n),e=e.sibling}function bc(n,e){var t=n.alternate,r=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ae(e,n),ze(n),r&4){try{Kr(3,n,n.return),Ya(3,n)}catch(O){Cn(n,n.return,O)}try{Kr(5,n,n.return)}catch(O){Cn(n,n.return,O)}}break;case 1:Ae(e,n),ze(n),r&512&&t!==null&&sr(t,t.return);break;case 5:if(Ae(e,n),ze(n),r&512&&t!==null&&sr(t,t.return),n.flags&32){var a=n.stateNode;try{kt(a,"")}catch(O){Cn(n,n.return,O)}}if(r&4&&(a=n.stateNode,a!=null)){var o=n.memoizedProps,i=t!==null?t.memoizedProps:o,l=n.type,u=n.updateQueue;if(n.updateQueue=null,u!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&wt(a,o),Mn(l,i);var v=Mn(l,o);for(i=0;i<u.length;i+=2){var w=u[i],j=u[i+1];w==="style"?vr(a,j):w==="dangerouslySetInnerHTML"?ia(a,j):w==="children"?kt(a,j):te(a,w,j,v)}switch(l){case"input":pr(a,o);break;case"textarea":mr(a,o);break;case"select":var b=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var N=o.value;N!=null?xe(a,!!o.multiple,N,!1):b!==!!o.multiple&&(o.defaultValue!=null?xe(a,!!o.multiple,o.defaultValue,!0):xe(a,!!o.multiple,o.multiple?[]:"",!1))}a[Jr]=o}catch(O){Cn(n,n.return,O)}}break;case 6:if(Ae(e,n),ze(n),r&4){if(n.stateNode===null)throw Error(c(162));a=n.stateNode,o=n.memoizedProps;try{a.nodeValue=o}catch(O){Cn(n,n.return,O)}}break;case 3:if(Ae(e,n),ze(n),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Pr(e.containerInfo)}catch(O){Cn(n,n.return,O)}break;case 4:Ae(e,n),ze(n);break;case 13:Ae(e,n),ze(n),a=n.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(Ji=En())),r&4&&Sc(n);break;case 22:if(w=t!==null&&t.memoizedState!==null,n.mode&1?(Xn=(v=Xn)||w,Ae(e,n),Xn=v):Ae(e,n),ze(n),r&8192){if(v=n.memoizedState!==null,(n.stateNode.isHidden=v)&&!w&&(n.mode&1)!==0)for(D=n,w=n.child;w!==null;){for(j=D=w;D!==null;){switch(b=D,N=b.child,b.tag){case 0:case 11:case 14:case 15:Kr(4,b,b.return);break;case 1:sr(b,b.return);var I=b.stateNode;if(typeof I.componentWillUnmount=="function"){r=b,t=b.return;try{e=r,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(O){Cn(r,t,O)}}break;case 5:sr(b,b.return);break;case 22:if(b.memoizedState!==null){jc(j);continue}}N!==null?(N.return=b,D=N):jc(j)}w=w.sibling}n:for(w=null,j=n;;){if(j.tag===5){if(w===null){w=j;try{a=j.stateNode,v?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=j.stateNode,u=j.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=hr("display",i))}catch(O){Cn(n,n.return,O)}}}else if(j.tag===6){if(w===null)try{j.stateNode.nodeValue=v?"":j.memoizedProps}catch(O){Cn(n,n.return,O)}}else if((j.tag!==22&&j.tag!==23||j.memoizedState===null||j===n)&&j.child!==null){j.child.return=j,j=j.child;continue}if(j===n)break n;for(;j.sibling===null;){if(j.return===null||j.return===n)break n;w===j&&(w=null),j=j.return}w===j&&(w=null),j.sibling.return=j.return,j=j.sibling}}break;case 19:Ae(e,n),ze(n),r&4&&Sc(n);break;case 21:break;default:Ae(e,n),ze(n)}}function ze(n){var e=n.flags;if(e&2){try{n:{for(var t=n.return;t!==null;){if(vc(t)){var r=t;break n}t=t.return}throw Error(c(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(kt(a,""),r.flags&=-33);var o=yc(n);Oi(n,o,a);break;case 3:case 4:var i=r.stateNode.containerInfo,l=yc(n);Ri(n,l,i);break;default:throw Error(c(161))}}catch(u){Cn(n,n.return,u)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Ep(n,e,t){D=n,wc(n)}function wc(n,e,t){for(var r=(n.mode&1)!==0;D!==null;){var a=D,o=a.child;if(a.tag===22&&r){var i=a.memoizedState!==null||Xa;if(!i){var l=a.alternate,u=l!==null&&l.memoizedState!==null||Xn;l=Xa;var v=Xn;if(Xa=i,(Xn=u)&&!v)for(D=a;D!==null;)i=D,u=i.child,i.tag===22&&i.memoizedState!==null?Tc(a):u!==null?(u.return=i,D=u):Tc(a);for(;o!==null;)D=o,wc(o),o=o.sibling;D=a,Xa=l,Xn=v}kc(n)}else(a.subtreeFlags&8772)!==0&&o!==null?(o.return=a,D=o):kc(n)}}function kc(n){for(;D!==null;){var e=D;if((e.flags&8772)!==0){var t=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Xn||Ya(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Xn)if(t===null)r.componentDidMount();else{var a=e.elementType===e.type?t.memoizedProps:Ie(e.type,t.memoizedProps);r.componentDidUpdate(a,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&jl(e,o,r);break;case 3:var i=e.updateQueue;if(i!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}jl(e,i,t)}break;case 5:var l=e.stateNode;if(t===null&&e.flags&4){t=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var v=e.alternate;if(v!==null){var w=v.memoizedState;if(w!==null){var j=w.dehydrated;j!==null&&Pr(j)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}Xn||e.flags&512&&Ai(e)}catch(b){Cn(e,e.return,b)}}if(e===n){D=null;break}if(t=e.sibling,t!==null){t.return=e.return,D=t;break}D=e.return}}function jc(n){for(;D!==null;){var e=D;if(e===n){D=null;break}var t=e.sibling;if(t!==null){t.return=e.return,D=t;break}D=e.return}}function Tc(n){for(;D!==null;){var e=D;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Ya(4,e)}catch(u){Cn(e,t,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var a=e.return;try{r.componentDidMount()}catch(u){Cn(e,a,u)}}var o=e.return;try{Ai(e)}catch(u){Cn(e,o,u)}break;case 5:var i=e.return;try{Ai(e)}catch(u){Cn(e,i,u)}}}catch(u){Cn(e,e.return,u)}if(e===n){D=null;break}var l=e.sibling;if(l!==null){l.return=e.return,D=l;break}D=e.return}}var Pp=Math.ceil,Za=kn.ReactCurrentDispatcher,_i=kn.ReactCurrentOwner,Te=kn.ReactCurrentBatchConfig,on=0,qn=null,Nn=null,Wn=0,he=0,lr=ut(0),Ln=0,Xr=null,At=0,no=0,qi=0,Yr=null,se=null,Ji=0,cr=1/0,Ze=null,eo=!1,Bi=null,ht=null,to=!1,vt=null,ro=0,Zr=0,zi=null,ao=-1,oo=0;function ne(){return(on&6)!==0?En():ao!==-1?ao:ao=En()}function yt(n){return(n.mode&1)===0?1:(on&2)!==0&&Wn!==0?Wn&-Wn:pp.transition!==null?(oo===0&&(oo=ys()),oo):(n=pn,n!==0||(n=window.event,n=n===void 0?16:Es(n.type)),n)}function Re(n,e,t,r){if(50<Zr)throw Zr=0,zi=null,Error(c(185));kr(n,t,r),((on&2)===0||n!==qn)&&(n===qn&&((on&2)===0&&(no|=t),Ln===4&&xt(n,Wn)),le(n,r),t===1&&on===0&&(e.mode&1)===0&&(cr=En()+500,La&&dt()))}function le(n,e){var t=n.callbackNode;pu(n,e);var r=ga(n,n===qn?Wn:0);if(r===0)t!==null&&fs(t),n.callbackNode=null,n.callbackPriority=0;else if(e=r&-r,n.callbackPriority!==e){if(t!=null&&fs(t),e===1)n.tag===0?up(Ec.bind(null,n)):dl(Ec.bind(null,n)),ip(function(){(on&6)===0&&dt()}),t=null;else{switch(xs(r)){case 1:t=So;break;case 4:t=hs;break;case 16:t=ua;break;case 536870912:t=vs;break;default:t=ua}t=Rc(t,Cc.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Cc(n,e){if(ao=-1,oo=0,(on&6)!==0)throw Error(c(327));var t=n.callbackNode;if(ur()&&n.callbackNode!==t)return null;var r=ga(n,n===qn?Wn:0);if(r===0)return null;if((r&30)!==0||(r&n.expiredLanes)!==0||e)e=io(n,r);else{e=r;var a=on;on|=2;var o=Mc();(qn!==n||Wn!==e)&&(Ze=null,cr=En()+500,Ot(n,e));do try{Dp();break}catch(l){Pc(n,l)}while(!0);oi(),Za.current=o,on=a,Nn!==null?e=0:(qn=null,Wn=0,e=Ln)}if(e!==0){if(e===2&&(a=bo(n),a!==0&&(r=a,e=Hi(n,a))),e===1)throw t=Xr,Ot(n,0),xt(n,r),le(n,En()),t;if(e===6)xt(n,r);else{if(a=n.current.alternate,(r&30)===0&&!Mp(a)&&(e=io(n,r),e===2&&(o=bo(n),o!==0&&(r=o,e=Hi(n,o))),e===1))throw t=Xr,Ot(n,0),xt(n,r),le(n,En()),t;switch(n.finishedWork=a,n.finishedLanes=r,e){case 0:case 1:throw Error(c(345));case 2:_t(n,se,Ze);break;case 3:if(xt(n,r),(r&130023424)===r&&(e=Ji+500-En(),10<e)){if(ga(n,0)!==0)break;if(a=n.suspendedLanes,(a&r)!==r){ne(),n.pingedLanes|=n.suspendedLanes&a;break}n.timeoutHandle=$o(_t.bind(null,n,se,Ze),e);break}_t(n,se,Ze);break;case 4:if(xt(n,r),(r&4194240)===r)break;for(e=n.eventTimes,a=-1;0<r;){var i=31-Me(r);o=1<<i,i=e[i],i>a&&(a=i),r&=~o}if(r=a,r=En()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Pp(r/1960))-r,10<r){n.timeoutHandle=$o(_t.bind(null,n,se,Ze),r);break}_t(n,se,Ze);break;case 5:_t(n,se,Ze);break;default:throw Error(c(329))}}}return le(n,En()),n.callbackNode===t?Cc.bind(null,n):null}function Hi(n,e){var t=Yr;return n.current.memoizedState.isDehydrated&&(Ot(n,e).flags|=256),n=io(n,e),n!==2&&(e=se,se=t,e!==null&&Fi(e)),n}function Fi(n){se===null?se=n:se.push.apply(se,n)}function Mp(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var a=t[r],o=a.getSnapshot;a=a.value;try{if(!Ne(o(),a))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xt(n,e){for(e&=~qi,e&=~no,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Me(e),r=1<<t;n[t]=-1,e&=~r}}function Ec(n){if((on&6)!==0)throw Error(c(327));ur();var e=ga(n,0);if((e&1)===0)return le(n,En()),null;var t=io(n,e);if(n.tag!==0&&t===2){var r=bo(n);r!==0&&(e=r,t=Hi(n,r))}if(t===1)throw t=Xr,Ot(n,0),xt(n,e),le(n,En()),t;if(t===6)throw Error(c(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,_t(n,se,Ze),le(n,En()),null}function Gi(n,e){var t=on;on|=1;try{return n(e)}finally{on=t,on===0&&(cr=En()+500,La&&dt())}}function Rt(n){vt!==null&&vt.tag===0&&(on&6)===0&&ur();var e=on;on|=1;var t=Te.transition,r=pn;try{if(Te.transition=null,pn=1,n)return n()}finally{pn=r,Te.transition=t,on=e,(on&6)===0&&dt()}}function Ui(){he=lr.current,xn(lr)}function Ot(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,op(t)),Nn!==null)for(t=Nn.return;t!==null;){var r=t;switch(ni(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Da();break;case 3:or(),xn(ae),xn($n),mi();break;case 5:pi(r);break;case 4:or();break;case 13:xn(jn);break;case 19:xn(jn);break;case 10:ii(r.type._context);break;case 22:case 23:Ui()}t=t.return}if(qn=n,Nn=n=St(n.current,null),Wn=he=e,Ln=0,Xr=null,qi=no=At=0,se=Yr=null,Dt!==null){for(e=0;e<Dt.length;e++)if(t=Dt[e],r=t.interleaved,r!==null){t.interleaved=null;var a=r.next,o=t.pending;if(o!==null){var i=o.next;o.next=a,r.next=i}t.pending=r}Dt=null}return n}function Pc(n,e){do{var t=Nn;try{if(oi(),Fa.current=Va,Ga){for(var r=Tn.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Ga=!1}if(Lt=0,_n=In=Tn=null,Ur=!1,Wr=0,_i.current=null,t===null||t.return===null){Ln=1,Xr=e,Nn=null;break}n:{var o=n,i=t.return,l=t,u=e;if(e=Wn,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var v=u,w=l,j=w.tag;if((w.mode&1)===0&&(j===0||j===11||j===15)){var b=w.alternate;b?(w.updateQueue=b.updateQueue,w.memoizedState=b.memoizedState,w.lanes=b.lanes):(w.updateQueue=null,w.memoizedState=null)}var N=Zl(i);if(N!==null){N.flags&=-257,nc(N,i,l,o,e),N.mode&1&&Yl(o,v,e),e=N,u=v;var I=e.updateQueue;if(I===null){var O=new Set;O.add(u),e.updateQueue=O}else I.add(u);break n}else{if((e&1)===0){Yl(o,v,e),Wi();break n}u=Error(c(426))}}else if(wn&&l.mode&1){var Pn=Zl(i);if(Pn!==null){(Pn.flags&65536)===0&&(Pn.flags|=256),nc(Pn,i,l,o,e),ri(ir(u,l));break n}}o=u=ir(u,l),Ln!==4&&(Ln=2),Yr===null?Yr=[o]:Yr.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var f=Kl(o,u,e);kl(o,f);break n;case 1:l=u;var d=o.type,h=o.stateNode;if((o.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ht===null||!ht.has(h)))){o.flags|=65536,e&=-e,o.lanes|=e;var C=Xl(o,l,e);kl(o,C);break n}}o=o.return}while(o!==null)}Dc(t)}catch(_){e=_,Nn===t&&t!==null&&(Nn=t=t.return);continue}break}while(!0)}function Mc(){var n=Za.current;return Za.current=Va,n===null?Va:n}function Wi(){(Ln===0||Ln===3||Ln===2)&&(Ln=4),qn===null||(At&268435455)===0&&(no&268435455)===0||xt(qn,Wn)}function io(n,e){var t=on;on|=2;var r=Mc();(qn!==n||Wn!==e)&&(Ze=null,Ot(n,e));do try{Np();break}catch(a){Pc(n,a)}while(!0);if(oi(),on=t,Za.current=r,Nn!==null)throw Error(c(261));return qn=null,Wn=0,Ln}function Np(){for(;Nn!==null;)Nc(Nn)}function Dp(){for(;Nn!==null&&!tu();)Nc(Nn)}function Nc(n){var e=Ac(n.alternate,n,he);n.memoizedProps=n.pendingProps,e===null?Dc(n):Nn=e,_i.current=null}function Dc(n){var e=n;do{var t=e.alternate;if(n=e.return,(e.flags&32768)===0){if(t=kp(t,e,he),t!==null){Nn=t;return}}else{if(t=jp(t,e),t!==null){t.flags&=32767,Nn=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Ln=6,Nn=null;return}}if(e=e.sibling,e!==null){Nn=e;return}Nn=e=n}while(e!==null);Ln===0&&(Ln=5)}function _t(n,e,t){var r=pn,a=Te.transition;try{Te.transition=null,pn=1,Ip(n,e,t,r)}finally{Te.transition=a,pn=r}return null}function Ip(n,e,t,r){do ur();while(vt!==null);if((on&6)!==0)throw Error(c(327));t=n.finishedWork;var a=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(c(177));n.callbackNode=null,n.callbackPriority=0;var o=t.lanes|t.childLanes;if(du(n,o),n===qn&&(Nn=qn=null,Wn=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||to||(to=!0,Rc(ua,function(){return ur(),null})),o=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||o){o=Te.transition,Te.transition=null;var i=pn;pn=1;var l=on;on|=4,_i.current=null,Cp(n,t),bc(t,n),Yu(Wo),va=!!Uo,Wo=Uo=null,n.current=t,Ep(t),ru(),on=l,pn=i,Te.transition=o}else n.current=t;if(to&&(to=!1,vt=n,ro=a),o=n.pendingLanes,o===0&&(ht=null),iu(t.stateNode),le(n,En()),e!==null)for(r=n.onRecoverableError,t=0;t<e.length;t++)a=e[t],r(a.value,{componentStack:a.stack,digest:a.digest});if(eo)throw eo=!1,n=Bi,Bi=null,n;return(ro&1)!==0&&n.tag!==0&&ur(),o=n.pendingLanes,(o&1)!==0?n===zi?Zr++:(Zr=0,zi=n):Zr=0,dt(),null}function ur(){if(vt!==null){var n=xs(ro),e=Te.transition,t=pn;try{if(Te.transition=null,pn=16>n?16:n,vt===null)var r=!1;else{if(n=vt,vt=null,ro=0,(on&6)!==0)throw Error(c(331));var a=on;for(on|=4,D=n.current;D!==null;){var o=D,i=o.child;if((D.flags&16)!==0){var l=o.deletions;if(l!==null){for(var u=0;u<l.length;u++){var v=l[u];for(D=v;D!==null;){var w=D;switch(w.tag){case 0:case 11:case 15:Kr(8,w,o)}var j=w.child;if(j!==null)j.return=w,D=j;else for(;D!==null;){w=D;var b=w.sibling,N=w.return;if(hc(w),w===v){D=null;break}if(b!==null){b.return=N,D=b;break}D=N}}}var I=o.alternate;if(I!==null){var O=I.child;if(O!==null){I.child=null;do{var Pn=O.sibling;O.sibling=null,O=Pn}while(O!==null)}}D=o}}if((o.subtreeFlags&2064)!==0&&i!==null)i.return=o,D=i;else n:for(;D!==null;){if(o=D,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Kr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,D=f;break n}D=o.return}}var d=n.current;for(D=d;D!==null;){i=D;var h=i.child;if((i.subtreeFlags&2064)!==0&&h!==null)h.return=i,D=h;else n:for(i=d;D!==null;){if(l=D,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:Ya(9,l)}}catch(_){Cn(l,l.return,_)}if(l===i){D=null;break n}var C=l.sibling;if(C!==null){C.return=l.return,D=C;break n}D=l.return}}if(on=a,dt(),_e&&typeof _e.onPostCommitFiberRoot=="function")try{_e.onPostCommitFiberRoot(pa,n)}catch{}r=!0}return r}finally{pn=t,Te.transition=e}}return!1}function Ic(n,e,t){e=ir(t,e),e=Kl(n,e,1),n=gt(n,e,1),e=ne(),n!==null&&(kr(n,1,e),le(n,e))}function Cn(n,e,t){if(n.tag===3)Ic(n,n,t);else for(;e!==null;){if(e.tag===3){Ic(e,n,t);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ht===null||!ht.has(r))){n=ir(t,n),n=Xl(e,n,1),e=gt(e,n,1),n=ne(),e!==null&&(kr(e,1,n),le(e,n));break}}e=e.return}}function Lp(n,e,t){var r=n.pingCache;r!==null&&r.delete(e),e=ne(),n.pingedLanes|=n.suspendedLanes&t,qn===n&&(Wn&t)===t&&(Ln===4||Ln===3&&(Wn&130023424)===Wn&&500>En()-Ji?Ot(n,0):qi|=t),le(n,e)}function Lc(n,e){e===0&&((n.mode&1)===0?e=1:(e=ma,ma<<=1,(ma&130023424)===0&&(ma=4194304)));var t=ne();n=Ke(n,e),n!==null&&(kr(n,e,t),le(n,t))}function Ap(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Lc(n,t)}function Rp(n,e){var t=0;switch(n.tag){case 13:var r=n.stateNode,a=n.memoizedState;a!==null&&(t=a.retryLane);break;case 19:r=n.stateNode;break;default:throw Error(c(314))}r!==null&&r.delete(e),Lc(n,t)}var Ac;Ac=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||ae.current)ie=!0;else{if((n.lanes&t)===0&&(e.flags&128)===0)return ie=!1,wp(n,e,t);ie=(n.flags&131072)!==0}else ie=!1,wn&&(e.flags&1048576)!==0&&ml(e,Ra,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ka(n,e),n=e.pendingProps;var a=Yt(e,$n.current);ar(e,t),a=hi(null,e,r,n,a,t);var o=vi();return e.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,oe(r)?(o=!0,Ia(e)):o=!1,e.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ci(e),a.updater=$a,e.stateNode=a,a._reactInternals=e,ki(e,r,n,t),e=Ei(null,e,r,!0,o,t)):(e.tag=0,wn&&o&&Zo(e),Zn(null,e,a,t),e=e.child),e;case 16:r=e.elementType;n:{switch(Ka(n,e),n=e.pendingProps,a=r._init,r=a(r._payload),e.type=r,a=e.tag=_p(r),n=Ie(r,n),a){case 0:e=Ci(null,e,r,n,t);break n;case 1:e=ic(null,e,r,n,t);break n;case 11:e=ec(null,e,r,n,t);break n;case 14:e=tc(null,e,r,Ie(r.type,n),t);break n}throw Error(c(306,r,""))}return e;case 0:return r=e.type,a=e.pendingProps,a=e.elementType===r?a:Ie(r,a),Ci(n,e,r,a,t);case 1:return r=e.type,a=e.pendingProps,a=e.elementType===r?a:Ie(r,a),ic(n,e,r,a,t);case 3:n:{if(sc(e),n===null)throw Error(c(387));r=e.pendingProps,o=e.memoizedState,a=o.element,wl(n,e),za(e,r,null,t);var i=e.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){a=ir(Error(c(423)),e),e=lc(n,e,r,t,a);break n}else if(r!==a){a=ir(Error(c(424)),e),e=lc(n,e,r,t,a);break n}else for(fe=ct(e.stateNode.containerInfo.firstChild),ge=e,wn=!0,De=null,t=Sl(e,null,r,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(er(),r===a){e=Ye(n,e,t);break n}Zn(n,e,r,t)}e=e.child}return e;case 5:return Tl(e),n===null&&ti(e),r=e.type,a=e.pendingProps,o=n!==null?n.memoizedProps:null,i=a.children,Vo(r,a)?i=null:o!==null&&Vo(r,o)&&(e.flags|=32),oc(n,e),Zn(n,e,i,t),e.child;case 6:return n===null&&ti(e),null;case 13:return cc(n,e,t);case 4:return ui(e,e.stateNode.containerInfo),r=e.pendingProps,n===null?e.child=tr(e,null,r,t):Zn(n,e,r,t),e.child;case 11:return r=e.type,a=e.pendingProps,a=e.elementType===r?a:Ie(r,a),ec(n,e,r,a,t);case 7:return Zn(n,e,e.pendingProps,t),e.child;case 8:return Zn(n,e,e.pendingProps.children,t),e.child;case 12:return Zn(n,e,e.pendingProps.children,t),e.child;case 10:n:{if(r=e.type._context,a=e.pendingProps,o=e.memoizedProps,i=a.value,fn(qa,r._currentValue),r._currentValue=i,o!==null)if(Ne(o.value,i)){if(o.children===a.children&&!ae.current){e=Ye(n,e,t);break n}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){i=o.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Xe(-1,t&-t),u.tag=2;var v=o.updateQueue;if(v!==null){v=v.shared;var w=v.pending;w===null?u.next=u:(u.next=w.next,w.next=u),v.pending=u}}o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),si(o.return,t,e),l.lanes|=t;break}u=u.next}}else if(o.tag===10)i=o.type===e.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(c(341));i.lanes|=t,l=i.alternate,l!==null&&(l.lanes|=t),si(i,t,e),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===e){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}Zn(n,e,a.children,t),e=e.child}return e;case 9:return a=e.type,r=e.pendingProps.children,ar(e,t),a=ke(a),r=r(a),e.flags|=1,Zn(n,e,r,t),e.child;case 14:return r=e.type,a=Ie(r,e.pendingProps),a=Ie(r.type,a),tc(n,e,r,a,t);case 15:return rc(n,e,e.type,e.pendingProps,t);case 17:return r=e.type,a=e.pendingProps,a=e.elementType===r?a:Ie(r,a),Ka(n,e),e.tag=1,oe(r)?(n=!0,Ia(e)):n=!1,ar(e,t),$l(e,r,a),ki(e,r,a,t),Ei(null,e,r,!0,n,t);case 19:return pc(n,e,t);case 22:return ac(n,e,t)}throw Error(c(156,e.tag))};function Rc(n,e){return gs(n,e)}function Op(n,e,t,r){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(n,e,t,r){return new Op(n,e,t,r)}function Vi(n){return n=n.prototype,!(!n||!n.isReactComponent)}function _p(n){if(typeof n=="function")return Vi(n)?1:0;if(n!=null){if(n=n.$$typeof,n===re)return 11;if(n===pe)return 14}return 2}function St(n,e){var t=n.alternate;return t===null?(t=Ce(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function so(n,e,t,r,a,o){var i=2;if(r=n,typeof n=="function")Vi(n)&&(i=1);else if(typeof n=="string")i=5;else n:switch(n){case zn:return qt(t.children,a,o,e);case Sn:i=8,a|=8;break;case ve:return n=Ce(12,t,e,a|2),n.elementType=ve,n.lanes=o,n;case Hn:return n=Ce(13,t,e,a),n.elementType=Hn,n.lanes=o,n;case ue:return n=Ce(19,t,e,a),n.elementType=ue,n.lanes=o,n;case vn:return lo(t,a,o,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ye:i=10;break n;case Ee:i=9;break n;case re:i=11;break n;case pe:i=14;break n;case Fn:i=16,r=null;break n}throw Error(c(130,n==null?n:typeof n,""))}return e=Ce(i,t,e,a),e.elementType=n,e.type=r,e.lanes=o,e}function qt(n,e,t,r){return n=Ce(7,n,r,e),n.lanes=t,n}function lo(n,e,t,r){return n=Ce(22,n,r,e),n.elementType=vn,n.lanes=t,n.stateNode={isHidden:!1},n}function $i(n,e,t){return n=Ce(6,n,null,e),n.lanes=t,n}function Qi(n,e,t){return e=Ce(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function qp(n,e,t,r,a){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wo(0),this.expirationTimes=wo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wo(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ki(n,e,t,r,a,o,i,l,u){return n=new qp(n,e,t,l,u),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Ce(3,null,null,e),n.current=o,o.stateNode=n,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ci(o),n}function Jp(n,e,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bn,key:r==null?null:""+r,children:n,containerInfo:e,implementation:t}}function Oc(n){if(!n)return pt;n=n._reactInternals;n:{if(Ct(n)!==n||n.tag!==1)throw Error(c(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break n;case 1:if(oe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break n}}e=e.return}while(e!==null);throw Error(c(171))}if(n.tag===1){var t=n.type;if(oe(t))return ul(n,t,e)}return e}function _c(n,e,t,r,a,o,i,l,u){return n=Ki(t,r,!0,n,a,o,i,l,u),n.context=Oc(null),t=n.current,r=ne(),a=yt(t),o=Xe(r,a),o.callback=e??null,gt(t,o,a),n.current.lanes=a,kr(n,a,r),le(n,r),n}function co(n,e,t,r){var a=e.current,o=ne(),i=yt(a);return t=Oc(t),e.context===null?e.context=t:e.pendingContext=t,e=Xe(o,i),e.payload={element:n},r=r===void 0?null:r,r!==null&&(e.callback=r),n=gt(a,e,i),n!==null&&(Re(n,a,i,o),Ba(n,a,i)),i}function uo(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function qc(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Xi(n,e){qc(n,e),(n=n.alternate)&&qc(n,e)}function Bp(){return null}var Jc=typeof reportError=="function"?reportError:function(n){console.error(n)};function Yi(n){this._internalRoot=n}po.prototype.render=Yi.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(c(409));co(n,e,null,null)},po.prototype.unmount=Yi.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Rt(function(){co(null,n,null,null)}),e[We]=null}};function po(n){this._internalRoot=n}po.prototype.unstable_scheduleHydration=function(n){if(n){var e=ws();n={blockedOn:null,target:n,priority:e};for(var t=0;t<it.length&&e!==0&&e<it[t].priority;t++);it.splice(t,0,n),t===0&&Ts(n)}};function Zi(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function mo(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Bc(){}function zp(n,e,t,r,a){if(a){if(typeof r=="function"){var o=r;r=function(){var v=uo(i);o.call(v)}}var i=_c(e,r,n,0,null,!1,!1,"",Bc);return n._reactRootContainer=i,n[We]=i.current,_r(n.nodeType===8?n.parentNode:n),Rt(),i}for(;a=n.lastChild;)n.removeChild(a);if(typeof r=="function"){var l=r;r=function(){var v=uo(u);l.call(v)}}var u=Ki(n,0,!1,null,null,!1,!1,"",Bc);return n._reactRootContainer=u,n[We]=u.current,_r(n.nodeType===8?n.parentNode:n),Rt(function(){co(e,u,t,r)}),u}function go(n,e,t,r,a){var o=t._reactRootContainer;if(o){var i=o;if(typeof a=="function"){var l=a;a=function(){var u=uo(i);l.call(u)}}co(e,i,n,a)}else i=zp(t,e,n,a,r);return uo(i)}Ss=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=wr(e.pendingLanes);t!==0&&(ko(e,t|1),le(e,En()),(on&6)===0&&(cr=En()+500,dt()))}break;case 13:Rt(function(){var r=Ke(n,1);if(r!==null){var a=ne();Re(r,n,1,a)}}),Xi(n,1)}},jo=function(n){if(n.tag===13){var e=Ke(n,134217728);if(e!==null){var t=ne();Re(e,n,134217728,t)}Xi(n,134217728)}},bs=function(n){if(n.tag===13){var e=yt(n),t=Ke(n,e);if(t!==null){var r=ne();Re(t,n,e,r)}Xi(n,e)}},ws=function(){return pn},ks=function(n,e){var t=pn;try{return pn=n,e()}finally{pn=t}},Oe=function(n,e,t){switch(e){case"input":if(pr(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var r=t[e];if(r!==n&&r.form===n.form){var a=Na(r);if(!a)throw Error(c(90));Fe(r),pr(r,a)}}}break;case"textarea":mr(n,t);break;case"select":e=t.value,e!=null&&xe(n,!!t.multiple,e,!1)}},Tt=Gi,la=Rt;var Hp={usingClientEntryPoint:!1,Events:[Br,Kt,Na,Ht,On,Gi]},na={findFiberByHostInstance:Et,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fp={bundleType:na.bundleType,version:na.version,rendererPackageName:na.rendererPackageName,rendererConfig:na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ds(n),n===null?null:n.stateNode},findFiberByHostInstance:na.findFiberByHostInstance||Bp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fo.isDisabled&&fo.supportsFiber)try{pa=fo.inject(Fp),_e=fo}catch{}}return ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hp,ce.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zi(e))throw Error(c(200));return Jp(n,e,null,t)},ce.createRoot=function(n,e){if(!Zi(n))throw Error(c(299));var t=!1,r="",a=Jc;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(a=e.onRecoverableError)),e=Ki(n,1,!1,null,null,t,!1,r,a),n[We]=e.current,_r(n.nodeType===8?n.parentNode:n),new Yi(e)},ce.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(c(188)):(n=Object.keys(n).join(","),Error(c(268,n)));return n=ds(e),n=n===null?null:n.stateNode,n},ce.flushSync=function(n){return Rt(n)},ce.hydrate=function(n,e,t){if(!mo(e))throw Error(c(200));return go(null,n,e,!0,t)},ce.hydrateRoot=function(n,e,t){if(!Zi(n))throw Error(c(405));var r=t!=null&&t.hydratedSources||null,a=!1,o="",i=Jc;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),e=_c(e,null,n,1,t??null,a,!1,o,i),n[We]=e.current,_r(n),r)for(n=0;n<r.length;n++)t=r[n],a=t._getVersion,a=a(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,a]:e.mutableSourceEagerHydrationData.push(t,a);return new po(e)},ce.render=function(n,e,t){if(!mo(e))throw Error(c(200));return go(null,n,e,!1,t)},ce.unmountComponentAtNode=function(n){if(!mo(n))throw Error(c(40));return n._reactRootContainer?(Rt(function(){go(null,null,n,!1,function(){n._reactRootContainer=null,n[We]=null})}),!0):!1},ce.unstable_batchedUpdates=Gi,ce.unstable_renderSubtreeIntoContainer=function(n,e,t,r){if(!mo(t))throw Error(c(200));if(n==null||n._reactInternals===void 0)throw Error(c(38));return go(n,e,t,!1,r)},ce.version="18.3.1-next-f1338f8080-20240426",ce}var $c;function Yp(){if($c)return ts.exports;$c=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(y){console.error(y)}}return p(),ts.exports=Xp(),ts.exports}var Qc;function Zp(){if(Qc)return ho;Qc=1;var p=Yp();return ho.createRoot=p.createRoot,ho.hydrateRoot=p.hydrateRoot,ho}var nd=Zp();const ed=Zc(nd),ta=[{lv:1,title:"🌱 见习勇者",need:0},{lv:2,title:"📖 语法学徒",need:100},{lv:3,title:"☕ 咖啡骑士",need:260},{lv:4,title:"🌿 Spring 侠客",need:480},{lv:5,title:"🗡️ 接口剑士",need:760},{lv:6,title:"🏰 项目建造师",need:1100},{lv:7,title:"🔮 源码解读者",need:1500},{lv:8,title:"👑 Java 大师",need:2e3}],U=p=>`https://liaoxuefeng.com/books/java/${p}`,td=[{d:1,tag:"快速入门",t:"Java 简介 + 安装 JDK",desc:"了解 Java 是什么、JDK/JRE/JVM 关系，装好 JDK 17 并验证 java -version。",xp:20,lesson:{points:["Java 三层结构：JDK（开发包）⊃ JRE（运行环境）⊃ JVM（虚拟机），开发装 JDK","javac 把 .java 编译成 .class 字节码，字节码跑在 JVM 上——'一次编写，到处运行'","Java 17 是 LTS 长期支持版，企业主流选择","验证安装：终端 java -version 和 javac -version 都有输出即成功"],code:`# 终端验证（装好后执行）
java -version
# openjdk version "17.0.x" 就对了

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`,analogy:"javac ≈ tsc（TS 编译器），JVM ≈ Node（运行时）。区别：TS 编译成 JS 到处能跑是因为有 Node，Java 编译成字节码到处能跑是因为每个平台都有 JVM。"},links:[{name:"廖雪峰：Java 简介",url:U("introduction/index.html"),type:"tutorial"},{name:"廖雪峰：安装 JDK",url:U("quick-start/dev-env/install-jdk/index.html"),type:"tutorial"},{name:"Adoptium 下载 JDK 17",url:"https://adoptium.net/temurin/releases/?version=17",type:"tool"}]},{d:2,tag:"快速入门",t:"第一个 Java 程序 + 使用 IDE",desc:"理解程序基本结构，IDEA 新建项目跑通 Hello World，认识 main 方法。",xp:20,lesson:{points:["类是 Java 最小单元：所有代码必须在 class 里（JS 可以裸写，Java 不行）","main 方法是入口：public static void main(String[] args) 固定写法，先背下来","文件名必须和 public 类名一致：Main.java 里是 public class Main","IDEA：New Project → src 右键 New Java Class → 绿色三角运行"],code:`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        System.out.print("不换行打印");
    }
}`,analogy:"main ≈ npm start 的入口脚本。System.out.println ≈ console.log， println 是 print line（带换行）。"},links:[{name:"廖雪峰：第一个 Java 程序",url:U("quick-start/dev-env/first-program/index.html"),type:"tutorial"},{name:"廖雪峰：使用 IDE",url:U("quick-start/dev-env/ide/index.html"),type:"tutorial"}]},{d:3,tag:"快速入门",t:"变量和数据类型",desc:"8 种基本类型、var、常量 final，体会静态类型与 JS 的差异。",xp:20,lesson:{points:["基本类型 8 种：int(4字节)/long(8字节，尾缀L)/double/boolean/char 等，JS 只有一个 number","必须先声明类型：int x = 10; 之后 x 永远只能装整数","var（Java 10+）：编译器推断类型，推断完锁死——还是静态类型","final 定义常量：final int MAX = 100; ≈ JS 的 const","整数除法截断小数：1/2=0，浮点有精度问题（0.1+0.2≠0.3，和 JS 一样）"],code:`int age = 25;
long big = 9_000_000_000L;   // L 后缀
double price = 3.14;
boolean ok = true;
char c = 'A';                 // 单引号！
var name = "Tom";             // 推断为 String
final int MAX = 100;          // 常量
System.out.println(1 / 2);        // 0
System.out.println(1.0 / 2);      // 0.5`,analogy:"Java = 出厂自带满级 TS。char 用单引号、String 用双引号，混了编译报错——比 TS 还严。"},links:[{name:"廖雪峰：变量和数据类型",url:U("quick-start/basic/var-type/index.html"),type:"tutorial"},{name:"廖雪峰：整数运算",url:U("quick-start/basic/integer/index.html"),type:"tutorial"}]},{d:4,tag:"快速入门",t:"浮点、布尔运算 + 字符和字符串",desc:"浮点精度、短路运算、String 不可变、引用类型 vs 基本类型。",xp:20,lesson:{points:["浮点数有误差：0.1+0.2≠0.3，精确计算用 BigDecimal","&& || 是短路运算（和 JS 一样）：false && 后面不执行","String 是引用类型，不可变：concat 返回新串","基本类型 == 比值；引用类型 == 比地址，内容比 equals","字符串连接用 +（编译器自动优化成 StringBuilder）"],code:`String s = "hello";
s.toUpperCase();          // 没用！返回新串被丢弃
String t = s.toUpperCase(); // ✅ 接住返回值
System.out.println(s);    // hello 不变

System.out.println(0.1 + 0.2 == 0.3);  // false 经典
System.out.println("a" + 1 + 2);       // a12
System.out.println('A' + 1);           // 66 char参与运算变int`,analogy:"String 不可变 = JS 里对字符串调方法返回新串一模一样。'A'+1=66 这个坑 JS 也有（字符串拼接 vs 数字运算的边界）。"},links:[{name:"廖雪峰：浮点数运算",url:U("quick-start/basic/float/index.html"),type:"tutorial"},{name:"廖雪峰：布尔运算",url:U("quick-start/basic/boolean/index.html"),type:"tutorial"},{name:"廖雪峰：字符和字符串",url:U("quick-start/basic/string/index.html"),type:"tutorial"}]},{d:5,tag:"快速入门",t:"数组类型 + 数组操作",desc:"定长数组、遍历、排序、多维数组、命令行参数。",xp:20,lesson:{points:["数组定长：int[] a = new int[5]; 创建后长度不变，元素默认 0","两种写法：int[] a = {1,2,3}（字面量）或 new int[5]（指定长度）","越界抛 ArrayIndexOutOfBoundsException（不是 undefined）","遍历：标准 for / for-each（for (int n : a)）≈ for...of","工具类：Arrays.toString(a)、Arrays.sort(a)（打印数组别直接 println）"],code:`import java.util.Arrays;

int[] a = {5, 2, 8, 1};
Arrays.sort(a);                    // [1, 2, 5, 8]
System.out.println(Arrays.toString(a));
int sum = 0;
for (int n : a) sum += n;          // for-each
int[][] grid = { {1,2}, {3,4} };   // 多维`,analogy:"定长数组 ≈ JS 的 Float32Array（TypedArray）。想要 push/pop 的自由，用 Day 8 的 ArrayList。"},links:[{name:"廖雪峰：数组类型",url:U("quick-start/basic/array/index.html"),type:"tutorial"},{name:"廖雪峰：数组操作",url:U("quick-start/array-op/index.html"),type:"tutorial"}]},{d:6,tag:"快速入门",t:"流程控制：if/switch/循环",desc:"输入输出、if 判断、switch、for/while、break/continue，和 JS 高度相似。",xp:20,lesson:{points:["if/else、while、do-while、for 语法和 JS 几乎一样，快速过","for-each：for (int x : arr) 只能遍历，不能改下标","break 跳出循环，continue 跳过本次——语义同 JS","switch 记得 break，Java 14+ 有箭头语法 → 更清爽","Scanner 读控制台输入（≈ 前端的 prompt）"],code:`import java.util.Scanner;

Scanner sc = new Scanner(System.in);
int n = sc.nextInt();          // 读整数

switch (n) {
    case 1 -> System.out.println("一");   // 箭头语法不用 break
    case 2 -> System.out.println("二");
    default -> System.out.println("其他");
}
for (int i = 0; i < 3; i++) {
    if (i == 1) continue;
    System.out.println(i);     // 0 2
}`,analogy:"这章你 15 分钟能扫完——所有控制流 JS 都有，唯一新面孔是 Scanner 和 switch 箭头语法。"},links:[{name:"廖雪峰：输入和输出",url:U("quick-start/flow/input-output/index.html"),type:"tutorial"},{name:"廖雪峰：if 判断",url:U("quick-start/flow/if/index.html"),type:"tutorial"},{name:"廖雪峰：for 循环",url:U("quick-start/flow/for/index.html"),type:"tutorial"}]},{d:7,tag:"⚔️ Boss 关",t:"BOSS 战：新手村试炼",desc:"Boss 测验（5 题）+ 综合练习：用变量/数组/循环/流程控制写'成绩统计器'。",xp:50,lesson:{points:["Boss 实战：int[] scores = {85, 92, 78, 60, 95}，求最高分/最低分/平均分","进阶：统计各分数段人数（90+ / 80-89 / 70-79 / 不及格）","要求全部用前 6 天的知识：数组 + 循环 + if","在 OnlineGDB 运行，对照预期输出"],code:`int[] scores = {85, 92, 78, 60, 95};
int max = scores[0], min = scores[0], sum = 0;
for (int s : scores) {
    if (s > max) max = s;
    if (s < min) min = s;
    sum += s;
}
System.out.println("平均: " + (double) sum / scores.length);
// 试试自己加分数段统计`,analogy:"这是你 Java 生涯第一个完整程序。打完这关，'Java 程序基本结构'章节毕业。"},links:[{name:"OnlineGDB 在线编译器",url:"https://www.onlinegdb.com/online_java_compiler",type:"tool"}]},{d:8,tag:"面向对象",t:"面向对象基础：类/字段/方法",desc:"class、字段、方法、构造方法，Java 的 class 是 ES6 class 完全体。",xp:20,lesson:{points:["class = 字段（数据）+ 方法（行为），所有代码必须住在类里","构造方法：与类同名、无返回类型；不写有默认无参构造，手写带参后默认的消失","this.name = name 区分字段和参数","方法重载 Overload：同名不同参数列表（如 print(int) 和 print(String)）",'new Student("Tom") 创建对象，字段有默认值（0/null/false）'],code:`class Student {
    String name;
    int age;

    Student(String name, int age) {   // 构造方法
        this.name = name;
        this.age = age;
    }
    void introduce() {                // 方法
        System.out.println(name + ", " + age);
    }
}
Student s = new Student("Tom", 20);
s.introduce();`,analogy:"ES6 class 的完全体：constructor 改名类名、private/public 真·访问控制、方法重载是 JS 没有的（JS 同名会覆盖）。"},links:[{name:"廖雪峰：面向对象基础",url:U("oop/basic/index.html"),type:"tutorial"},{name:"廖雪峰：构造方法",url:U("oop/basic/constructor/index.html"),type:"tutorial"},{name:"廖雪峰：方法重载",url:U("oop/basic/overload/index.html"),type:"tutorial"}]},{d:9,tag:"面向对象",t:"继承 / 多态 / 抽象类",desc:"extends、super、向上转型、动态绑定、abstract——Java 的灵魂。",xp:20,lesson:{points:["extends 单继承（一个爹），super 调父类方法/构造器","多态：Animal a = new Dog(); 编译看左边，运行看右边（动态绑定）","@Override 注解标记重写，写错方法名编译器会提醒","抽象类 abstract：不能 new，可以有抽象方法（子类必须实现）","重写规则：权限只能放大、异常只能更小"],code:`abstract class Animal {
    abstract void speak();            // 抽象方法无实现
}
class Dog extends Animal {
    @Override void speak() { System.out.println("汪"); }
}
Animal a = new Dog();
a.speak();                            // 汪 运行时看右边`,analogy:"多态 ≈ React 里接口约定 props、不同组件各自实现——调用方不用改代码。抽象类 = 只能被继承的'半成品模板'。"},links:[{name:"廖雪峰：继承",url:U("oop/basic/inherit/index.html"),type:"tutorial"},{name:"廖雪峰：多态",url:U("oop/basic/polymorphic/index.html"),type:"tutorial"},{name:"廖雪峰：抽象类",url:U("1252599548343744/125594373900946),"),type:"tutorial"}]},{d:10,tag:"面向对象",t:"接口 interface + 静态字段 + 包",desc:"interface、default 方法、static、包与 import、作用域。",xp:20,lesson:{points:["接口 = 能力契约：抽象方法 + default 默认方法（Java 8+）+ 常量","类 implements 多个接口（弥补单继承），接口之间可以 extends","static：属于类不属于实例，所有对象共享一份（如计数器）","包 package = 目录组织 ≈ 前端的文件夹分层，import 引入","作用域：private（本类）→ default（同包）→ protected（子类）→ public"],code:`interface Flyable {
    void fly();
    default void land() { System.out.println("降落"); } // 默认实现
}
class Bird implements Flyable {
    public void fly() { System.out.println("飞"); }
}
class Counter {
    static int count = 0;              // 全类共享
    Counter() { count++; }
}`,analogy:"TS interface 编译即消失，Java interface 是真类型且能跑 default 方法。package+import ≈ ESM 的 import，静态字段 ≈ 模块级共享变量。"},links:[{name:"廖雪峰：接口",url:U("oop/basic/interface/index.html"),type:"tutorial"},{name:"廖雪峰：静态字段和静态方法",url:U("oop/basic/static/index.html"),type:"tutorial"},{name:"廖雪峰：包",url:U("oop/basic/package/index.html"),type:"tutorial"}]},{d:11,tag:"Java核心类",t:"字符串和编码 + StringBuilder",desc:"String 常量池、== vs equals、StringBuilder/StringJoiner、编码概念。",xp:20,lesson:{points:["字符串不可变：所有'修改'方法返回新串，原串不变",'常量池：字面量 "ab" == "ab" 为 true；new String("ab") == "ab" 为 false',"内容比较永远用 equals()，忽略大小写用 equalsIgnoreCase()","循环拼接用 StringBuilder（可变），append 链式调用","StringJoiner 指定分隔符拼接 ≈ JS 的 array.join()"],code:`String a = "ab";
System.out.println(a == "ab");           // true 常量池
System.out.println(new String("ab") == "ab");  // false
System.out.println(a.equals("ab"));      // true

StringBuilder sb = new StringBuilder();
for (int i = 0; i < 3; i++) sb.append(i).append(",");
System.out.println(sb);                   // 0,1,2,`,analogy:"equals vs == 是前端转 Java 第一大坑，方向和 JS 相反：JS 的 == 乱比值，Java 的 == 只比地址。口诀：字符串一律 equals。"},links:[{name:"廖雪峰：字符串和编码",url:U("oop/core/string-encoding/index.html"),type:"tutorial"},{name:"廖雪峰：StringBuilder",url:U("oop/core/stringbuilder/index.html"),type:"tutorial"}]},{d:12,tag:"Java核心类",t:"包装类型 + JavaBean + 枚举 + BigInteger/BigDecimal",desc:"自动装箱、JavaBean 规范、enum、精确计算。",xp:20,lesson:{points:["包装类：int→Integer，让基本类型参与泛型和集合；自动装箱/拆箱","Integer 缓存 -128~127，这个范围内 == 是 true，超出是 false（超坑！）","JavaBean：private 字段 + public getter/setter 命名规范","枚举 enum：一组固定常量，类型安全（比 JS 常量字符串强）","BigDecimal 精确计算（金融必用），比较用 compareTo 不用 equals"],code:`Integer a = 127, b = 127;
System.out.println(a == b);    // true 缓存
Integer c = 128, d = 128;
System.out.println(c == d);    // false！新对象

enum Season { SPRING, SUMMER }

BigDecimal p = new BigDecimal("0.1");
System.out.println(p.add(new BigDecimal("0.2")));  // 0.3 精确`,analogy:"enum ≈ TS 的联合类型字面量（type S = 'spring'）但更强。BigDecimal ≈ 前端处理金额时的 big.js。"},links:[{name:"廖雪峰：包装类型",url:U("oop/core/wrapper/index.html"),type:"tutorial"},{name:"廖雪峰：枚举类",url:U("oop/core/enum/index.html"),type:"tutorial"},{name:"廖雪峰：BigInteger 和 BigDecimal",url:U("oop/core/biginteger/index.html"),type:"tutorial"}]},{d:13,tag:"⚔️ Boss 关",t:"BOSS 战：面向对象之影",desc:"Boss 测验（5 题）+ 实战：设计一个完整的 BankAccount 类体系。",xp:50,lesson:{points:["Boss 实战：抽象类 Account（字段 owner/balance，方法 deposit/withdraw 抽象）","SavingAccount 重写 withdraw（余额不足报错）、CreditAccount 支持透支","接口 Freezeable（freeze 方法），用 Account 引用数组操作不同子类——多态实战","静态字段统计开户总数"],code:`abstract class Account {
    static int total = 0;          // 开户数
    String owner; double balance;
    Account(String o) { owner = o; total++; }
    abstract void withdraw(double amt);
}
// 你来实现 SavingAccount / CreditAccount / 主类测试`,analogy:"这套题把 Day 8~12 全部串起来：抽象类、继承、多态、static。写完你会对'面向接口编程'有体感。"},links:[{name:"OnlineGDB 在线编译器",url:"https://www.onlinegdb.com/online_java_compiler",type:"tool"}]},{d:14,tag:"异常处理",t:"异常处理：try/catch/finally",desc:"异常体系、受检异常、自定义异常、日志（Logging）概念。",xp:25,lesson:{points:["异常父类 Throwable：Error（系统级不管）和 Exception（要处理）","受检异常（IOException）：编译器强制 catch 或 throws；非受检（RuntimeException）：不强制","finally 必执行（释放资源）；现代写法 try-with-resources 自动关闭","自定义异常：extends RuntimeException + 构造器传 message","日志：开发用 SLF4J + Logback，别再 System.out.println 调试"],code:`class BizException extends RuntimeException {
    BizException(String msg) { super(msg); }
}

try {
    int r = Integer.parseInt("abc");
} catch (NumberFormatException e) {
    System.out.println("捕获: " + e.getMessage());
} finally {
    System.out.println("总会执行");
}`,analogy:"受检异常 = 编译器强制你写 .catch() 的 Promise，逃不掉。自定义异常 ≈ 前端 class ApiError extends Error。"},links:[{name:"廖雪峰：Java 的异常",url:U("exception/index.html"),type:"tutorial"},{name:"廖雪峰：捕获异常",url:U("exception/try-catch/index.html"),type:"tutorial"}]},{d:15,tag:"泛型",t:"泛型：使用泛型 + 擦拭法",desc:"为什么需要泛型、泛型类/接口/方法、擦拭法原理。",xp:25,lesson:{points:["泛型 = 编译期类型检查：List<String> 装 int 直接编译报错——内置 TS","泛型类：class Pair<T, K>；泛型方法：<T> T pick(T... list)","擦拭法：泛型只存在编译期，运行时都是 Object（所以不能 new T()）","extends 通配符限制上界：List<? extends Number> 只读不写"],code:`class Pair<T, K> {
    T first; K second;
    Pair(T f, K s) { first = f; second = s; }
}

static <T> T firstOf(List<T> list) { return list.get(0); }

List<String> names = new ArrayList<>();
names.add("a");
// names.add(123);  ← 编译报错！泛型的意义`,analogy:"泛型 ≈ TS 泛型的运行时强执法。擦拭法解释了为什么 Java 不能 new T()——运行时根本不知道 T 是谁。"},links:[{name:"廖雪峰：什么是泛型",url:U("generics/what-is-generics/index.html"),type:"tutorial"},{name:"廖雪峰：使用泛型",url:U("generics/use-generics/index.html"),type:"tutorial"},{name:"廖雪峰：擦拭法",url:U("generics/type-erasure/index.html"),type:"tutorial"}]},{d:16,tag:"集合",t:"集合：List / Map / Set",desc:"集合框架总览、ArrayList、HashMap、HashSet 核心三件套。",xp:25,lesson:{points:["集合 = 可变长的对象容器，分两大派：Collection（单个装）和 Map（键值对）","List：有序可重复（ArrayList 常用）；Set：不重复（HashSet）；Map：键值对（HashMap）","遍历 List 用 for-each；Map 用 entrySet() 或 keySet()","重点方法：list.add/get/size、map.put/get/containsKey、set.add/contains","自定义对象放 Set/Map 的 key 要正确重写 equals 和 hashCode"],code:`Map<String, Integer> score = new HashMap<>();
score.put("Java", 90);
score.put("Vue", 95);
System.out.println(score.get("Java"));     // 90
for (var entry : score.entrySet()) {
    System.out.println(entry.getKey() + "=" + entry.getValue());
}
Set<String> tags = new HashSet<>();
tags.add("java"); tags.add("java");
System.out.println(tags.size());           // 1 去重`,analogy:"ArrayList≈Array、HashMap≈Map、HashSet≈Set——JS 集合全家桶强类型版。entrySet 遍历 ≈ Object.entries()。"},links:[{name:"廖雪峰：Java 集合简介",url:U("collection/quick-start/index.html"),type:"tutorial"},{name:"廖雪峰：使用 List",url:U("collection/list/index.html"),type:"tutorial"},{name:"廖雪峰：使用 Map",url:U("collection/map/index.html"),type:"tutorial"}]},{d:17,tag:"集合",t:"集合进阶：Properties/Stack/Iterator/Collections 工具",desc:"Collections 工具类、Iterator 迭代器、Stack/Queue 使用场景。",xp:25,lesson:{points:["Collections 工具类：sort/shuffle/reverse 一把梭（注意是复数）","Iterator 迭代器：统一遍历方式，遍历时删除元素必须用它（否则 ConcurrentModificationException）","Stack 栈（LIFO）push/pop，Queue 队列（FIFO）offer/poll","Properties：配置文件读写（key=value 文本），项目配置都用它"],code:`List<Integer> list = new ArrayList<>(List.of(3, 1, 2));
Collections.sort(list);           // [1,2,3]
Collections.reverse(list);        // [3,2,1]

Iterator<Integer> it = list.iterator();
while (it.hasNext()) {
    Integer n = it.next();
    if (n == 2) it.remove();      // 安全删除
}`,analogy:"Iterator 的'遍历时删除'规则 ≈ JS 里 forEach 不能 splice 数组的坑，Java 用迭代器正规解决。"},links:[{name:"廖雪峰：使用 Iterator",url:U("collection/iterator/index.html"),type:"tutorial"},{name:"廖雪峰：使用 Collections",url:U("collection/collections/index.html"),type:"tutorial"}]},{d:18,tag:"IO与日期",t:"IO：File/输入输出流 + Files 工具",desc:"File、字节流/字符流概念、Files 工具类简洁读写。",xp:25,lesson:{points:["File 对象 = 路径的抽象（不代表文件存在）","字节流 InputStream/OutputStream（万能），字符流 Reader/Writer（文本专用）","日常开发用 Files 工具类：一行读写整个文件","序列化：对象 ↔ 字节（实现 Serializable），网络传输的基础"],code:`import java.nio.file.*;

Path p = Path.of("demo.txt");
Files.writeString(p, "你好 Java");
String content = Files.readString(p);
System.out.println(content);
// 异常处理：Files 方法抛受检异常，需 try/catch`,analogy:"Files.readString ≈ Node 的 fs.readFileSync（UTF-8）。受检异常在这章真实出现：文件操作必须 try/catch。"},links:[{name:"廖雪峰：File 对象",url:U("io/file/index.html"),type:"tutorial"},{name:"廖雪峰：使用 Files",url:U("io/files/index.html"),type:"tutorial"}]},{d:19,tag:"IO与日期",t:"日期时间 LocalDateTime + 正则表达式",desc:"java.time 现代日期 API、格式化、正则基础。",xp:25,lesson:{points:["只用 java.time 包（LocalDateTime/DateTimeFormatter），Date 是老古董别用","LocalDateTime.now() 当前时间，of(2026, 1, 1) 指定时间","DateTimeFormatter 格式化/解析：yyyy-MM-dd HH:mm:ss","正则和 JS 语法基本一致：matches() 全串匹配，Pattern/Matcher 更细控"],code:`import java.time.*;
import java.time.format.*;

LocalDateTime now = LocalDateTime.now();
DateTimeFormatter f = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
System.out.println(now.format(f));

String phone = "13812345678";
System.out.println(phone.matches("1\\\\d{10}"));   // true`,analogy:"java.time ≈ JS 的 dayjs/date-fns（不可变设计）。format 字母：yyyy 年 MM 月 dd 日 HH 时 mm 分 ss 秒。"},links:[{name:"廖雪峰：LocalDateTime",url:U("datetime/local-datetime/index.html"),type:"tutorial"},{name:"廖雪峰：正则表达式",url:U("reg-exp/general/index.html"),type:"tutorial"}]},{d:20,tag:"⚔️ Boss 关",t:"BOSS 战：语言综合试炼",desc:"Boss 测验（5 题）+ 实战：命令行通讯录（集合 + 泛型 + IO + 异常综合）。",xp:60,lesson:{points:["Boss 实战：Contact 类（name/phone）+ List<Contact> 管理","功能：添加（校验手机号正则，不合法抛自定义异常）、按名字查、遍历打印","存盘：Files.writeString 序列化通讯录到 txt","这是语言阶段终极检验：类/集合/泛型/异常/IO 全用上"],code:`class Contact { String name; String phone; }
class BadPhoneException extends RuntimeException {
    BadPhoneException(String m) { super(m); }
}
// 添加时：if (!phone.matches("1\\\\d{10}")) throw new BadPhoneException(...);
// 查询：contacts.stream().filter(...) 或 for 循环`,analogy:"打赢这关，Java 语言篇毕业。你已经会'用 Java 写程序'了，接下来去学'用框架做工程'。"},links:[{name:"OnlineGDB 在线编译器",url:"https://www.onlinegdb.com/online_java_compiler",type:"tool"}]},{d:21,tag:"Maven与IDE",t:"Maven 基础 + IDEA 进阶",desc:"pom.xml、依赖管理、生命周期、IDEA 配置 Maven。",xp:25,lesson:{points:["Maven = 依赖管理 + 构建工具 ≈ npm + 脚本","pom.xml ≈ package.json：坐标 groupId:artifactId:version，dependencies 声明依赖","常用命令：mvn clean（清产物）、compile、package（打 jar）、install（装到本地仓库）","依赖范围 scope：compile（默认）/ test（只测试用）","settings.xml 可换国内镜像（阿里云）加速下载"],code:`<dependency>
    <groupId>com.google.code.gson</groupId>
    <artifactId>gson</artifactId>
    <version>2.10.1</version>
</dependency>

# 命令行
cd 项目目录 && mvn clean package`,analogy:"坐标 ≈ npm 的 @scope/name@version；本地仓库 ~/.m2 ≈ node_modules 的全局缓存版。"},links:[{name:"廖雪峰：Maven 基础",url:U("maven/basic/index.html"),type:"tutorial"},{name:"Maven Central 搜依赖",url:"https://central.sonatype.com/",type:"tool"}]},{d:22,tag:"Spring Boot",t:"Spring Boot 入门：第一个 Web 应用",desc:"Spring Boot 是什么、启动流程、写第一个 Controller。",xp:25,lesson:{points:["Spring Boot = 约定优于配置的 Spring：内嵌 Tomcat，java -jar 直接跑","start.spring.io 勾 Spring Web 生成骨架 ≈ npm create vite","@SpringBootApplication 三合一：自动配置 + 组件扫描 + 启动类",'@RestController + @GetMapping("/hi") = 你的第一个接口',"默认端口 8080，application.yml 改配置（server.port 等）"],code:`@SpringBootApplication
public class App {
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}

@RestController
class HiController {
    @GetMapping("/hi")
    public String hi() { return "hello spring"; }
}
// 访问 http://localhost:8080/hi`,analogy:"Spring Boot ≈ Java 界的 Next.js：约定优于配置、内嵌服务器、开箱即用。Controller ≈ Express 路由文件。"},links:[{name:"Spring 官方：构建 RESTful 服务指南",url:"https://spring.io/guides/gs/rest-service",type:"tutorial"},{name:"Spring Initializr",url:"https://start.spring.io/",type:"tool"}]},{d:23,tag:"Spring Boot",t:"REST 接口开发：参数/请求体/状态",desc:"@PathVariable/@RequestParam/@RequestBody、POST/PUT/DELETE 全动词。",xp:25,lesson:{points:["三兄弟分清楚：@PathVariable（路径 /users/{id}）、@RequestParam（查询 ?page=1）、@RequestBody（JSON 请求体）","REST 动词：@GetMapping/@PostMapping/@PutMapping/@DeleteMapping","返回对象自动转 JSON（Jackson 在干活）","开发期用 Postman/curl 测试接口，别只用浏览器（浏览器只能 GET）"],code:`@RestController
@RequestMapping("/users")
public class UserController {
    @GetMapping("/{id}")                    // GET /users/5
    public User get(@PathVariable Long id) { ... }

    @PostMapping                            // POST /users + JSON 体
    public User create(@RequestBody UserDTO dto) { ... }

    @GetMapping                             // GET /users?page=2
    public List<User> list(@RequestParam(defaultValue = "1") int page) { ... }
}`,analogy:"req.params ≈ @PathVariable、req.query ≈ @RequestParam、req.body ≈ @RequestBody——Express 的三件套映射。"},links:[{name:"廖雪峰：Spring 开发（Web MVC）",url:U("spring/web/mvc/index.html"),type:"tutorial"},{name:"Baeldung：@PathVariable vs @RequestParam",url:"https://www.baeldung.com/spring-pathvariable-vs-requestparam",type:"tutorial"}]},{d:24,tag:"Spring Boot",t:"依赖注入 IoC + 分层架构",desc:"Bean、@Service/@Component、构造器注入、Controller→Service→Mapper 分层。",xp:25,lesson:{points:["IoC：对象交给 Spring 容器创建和管理，你要谁声明就行（别自己 new）","@Component/@Service/@Repository/@Controller 本质相同，语义区分","构造器注入是官方推荐（final 字段、可测试、依赖显式）","三层架构：Controller（接待）→ Service（业务+事务）→ Mapper/DAO（数据）","分层本质 = 变化隔离，前端对应：组件 → 组合式函数 → API 模块"],code:`@Service
public class UserService {
    public User findUser(Long id) { ... }
}

@RestController
public class UserController {
    private final UserService userService;      // final！
    public UserController(UserService userService) {  // 构造器注入
        this.userService = userService;
    }
}`,analogy:"IoC ≈ 前端 DI（Vue provide/inject、React Context）的全自动版。Service 层 = 你的组合式函数，Mapper 层 = API 模块。"},links:[{name:"Spring 官方：IoC 容器",url:"https://docs.spring.io/spring-framework/reference/core/beans.html",type:"doc"},{name:"Baeldung：构造器注入",url:"https://www.baeldung.com/constructor-injection-in-spring",type:"tutorial"}]},{d:25,tag:"Spring Boot",t:"数据库访问：JDBC → MyBatis-Plus",desc:"数据源配置、实体映射、BaseMapper 白得 CRUD。",xp:25,lesson:{points:["application.yml 配数据源：url/username/password/driver-class-name","实体类：@TableName 表名、@TableId 主键、驼峰自动映射下划线列","Mapper 继承 BaseMapper<T> 白得 insert/selectById/updateById/deleteById","@TableLogic 逻辑删除：delete 自动变 UPDATE deleted=1","字段用包装类型 Integer（能区分 null 和 0）"],code:`spring:
  datasource:
    url: jdbc:mysql://localhost:3306/blog
    username: root
    password: \${DB_PASS}      # 环境变量！

@TableName("article")
public class Article {
    @TableId
    private Long id;
    private String title;
    @TableLogic
    private Integer deleted;
}`,analogy:"BaseMapper ≈ 封装到极致的 axios：常用操作全内置。密码走环境变量 ≈ 前端 .env 但更严格。"},links:[{name:"MyBatis-Plus 官方快速开始",url:"https://baomidou.com/guides/quick-start/",type:"doc"},{name:"廖雪峰：JDBC 基础（理解底层）",url:U("jdbc/basic/index.html"),type:"tutorial"}]},{d:26,tag:"Spring Boot",t:"分页/条件查询 + 统一返回 + 全局异常",desc:"分页插件、QueryWrapper、Result 统一结构、@RestControllerAdvice。",xp:25,lesson:{points:["分页：PaginationInnerInterceptor 插件 + Page<T>（pageNum, pageSize）","LambdaQueryWrapper：like/eq/orderByDesc，第一个参数布尔控制条件是否生效","统一返回 { code, msg, data }：业务成败看 code，HTTP 200 只代表请求通了","@RestControllerAdvice + @ExceptionHandler 全局捕获异常转统一格式","禁止内存分页（全查再截取）——数据量一大就是事故"],code:`Page<Article> p = new Page<>(pageNum, pageSize);
LambdaQueryWrapper<Article> w = new LambdaQueryWrapper<>();
w.like(StringUtils.hasText(kw), Article::getTitle, kw)
 .orderByDesc(Article::getCreateTime);
Page<Article> result = articleMapper.selectPage(p, w);

@RestControllerAdvice
class GlobalHandler {
    @ExceptionHandler(Exception.class)
    public Result<?> handle(Exception e) { return Result.fail(e.getMessage()); }
}`,analogy:"这个 { code, msg, data } 你对接了无数次，今天开始是你定义它。全局异常 ≈ React ErrorBoundary 但在服务端。"},links:[{name:"MyBatis-Plus：分页插件",url:"https://baomidou.com/plugins/pagination/",type:"doc"},{name:"Baeldung：REST 全局异常处理",url:"https://www.baeldung.com/exception-handling-for-rest-with-spring",type:"tutorial"}]},{d:27,tag:"⚔️ Boss 关",t:"BOSS 战：框架巨兽 + Todo API",desc:"Boss 测验（5 题）+ 实战：完整 Todo API（CRUD + 分页 + 校验 + 统一返回）。",xp:60,lesson:{points:["Boss 实战清单：Todo 实体 + Mapper + Service + Controller 四件套","接口：GET 列表（分页）/ GET /{id} 详情 / POST 新建 / PUT /{id} 更新 / DELETE /{id}","@Valid 参数校验 + 全局异常处理 + 统一 Result 返回","Postman 全部测通，截图留念——你的第一个完整后端 API"],code:`@RestController
@RequestMapping("/todos")
public class TodoController {
    // 5 个接口全部实现：
    // GET    /todos?page=1&size=10   → Result<Page<Todo>>
    // GET    /todos/{id}             → Result<Todo>
    // POST   /todos + @Valid 请求体   → Result<Todo>
    // PUT    /todos/{id}             → Result<Todo>
    // DELETE /todos/{id}             → Result<?>
}`,analogy:"框架巨兽被打服的标志：Postman 里 5 个接口全绿。前后端分离的服务端，你已经能独立交付了。"},links:[{name:"Postman 下载",url:"https://www.postman.com/downloads/",type:"tool"}]},{d:28,tag:"项目实战",t:"项目设计：个人博客后端（ER 图）",desc:"需求梳理、表设计、实体关系（多对一/多对多/一对多）。",xp:30,lesson:{points:["实体：user、category、article、tag、article_tag（中间表）、comment","关系：文章→分类多对一；文章↔标签多对多（中间表）；文章→评论一对多","每表标配：id 主键、create_time、update_time、deleted 逻辑删除","先画 ER 图再建表——表是地基，改地基 = 返工","工具：draw.io 或 dbdiagram.io 画图"],code:`user:      id, username, password(BCrypt哈希)
category:  id, name
article:   id, title, content, category_id, user_id
tag:       id, name
article_tag: article_id, tag_id     ← 多对多中间表
comment:   id, article_id, user_id, content`,analogy:"设计组件前先想 props 流向 = 设计表前先想实体关系。阿里《Java 开发手册》的表设计规约值得通读。"},links:[{name:"dbdiagram.io（在线画 ER 图）",url:"https://dbdiagram.io/",type:"tool"},{name:"阿里巴巴 Java 开发手册",url:"https://github.com/alibaba/p3c",type:"repo"}]},{d:29,tag:"项目实战",t:"建表 + 实体 + 基础 CRUD",desc:"SQL 建表、生成实体/Mapper/Service/Controller 四件套。",xp:30,lesson:{points:["建表 SQL：BIGINT 主键自增、VARCHAR 限长、TINYINT 存布尔、DATETIME 时间","每张表对应四件套：Entity → Mapper → Service → Controller","逻辑删除 @TableLogic，字段用包装类型","文章和分类的增删改查先跑通，联表下一步"],code:`CREATE TABLE article (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(200) NOT NULL,
  content TEXT,
  category_id BIGINT,
  user_id BIGINT,
  deleted TINYINT DEFAULT 0,
  create_time DATETIME DEFAULT NOW(),
  update_time DATETIME DEFAULT NOW() ON UPDATE NOW()
);`,analogy:"四件套复制上模块改名——你手动体会的这套'模板性'，就是若依代码生成器的原理（后面源码篇见）。"},links:[{name:"MySQL 8 官方手册：CREATE TABLE",url:"https://dev.mysql.com/doc/refman/8.0/en/create-table.html",type:"doc"}]},{d:30,tag:"项目实战",t:"JWT 登录 + 发文权限控制",desc:"BCrypt 密码、JWT 签发、拦截器、防越权。",xp:30,lesson:{points:["注册密码：BCrypt 加盐哈希存储，绝不明文","登录：校验密码 → 签发 JWT（Header.Payload.Signature，Base64 不是加密）","拦截器：统一验证 token，取 userId 存 ThreadLocal","防越权：发文 userId 从 token 取（不收前端参数），删除/查询都带 user_id 条件","JWT 过期返回 401，前端清 token 跳登录"],code:`// 签发
String token = Jwts.builder()
    .claim("userId", user.getId())
    .setExpiration(new Date(System.currentTimeMillis() + 7 * 86400000L))
    .signWith(key)
    .compact();
// 拦截器校验失败 → response.setStatus(401)`,analogy:"你写过无数次的 axios 拦截器带 token，发牌人今天换成你。越权（IDOR）是 owasp 常客：只验登录不验归属 = 裸奔。"},links:[{name:"jwt.io 官方介绍（可视化拆解）",url:"https://jwt.io/introduction",type:"doc"},{name:"Baeldung：Spring Boot 拦截器",url:"https://www.baeldung.com/spring-mvc-handlerinterceptor",type:"tutorial"}]},{d:31,tag:"项目实战",t:"联表查询 + 多对多 + 文件上传",desc:"JOIN 聚合防 N+1、中间表、MultipartFile 上传。",xp:30,lesson:{points:["多对多 = 中间表（article_id + tag_id），查询用 JOIN + GROUP BY","N+1 反模式：列表循环查关联（1+N 次 DB 往返），用聚合 JOIN 一次解决","上传：@RequestParam MultipartFile，UUID 重命名，库里存 URL","联表复杂时 MyBatis 写 XML SQL，简单场景继续用 Wrapper"],code:`SELECT a.*, COUNT(at.tag_id) AS tag_count
FROM article a
LEFT JOIN article_tag at ON a.id = at.article_id
GROUP BY a.id;

// 上传
@PostMapping("/upload")
public Result<String> upload(@RequestParam("file") MultipartFile file) {
    String name = UUID.randomUUID() + "." + 后缀(file.getOriginalFilename());
    file.transferTo(new File(dir, name));
    return Result.ok("/files/" + name);
}`,analogy:"N+1 ≈ 前端列表每项单独发请求的坑，合并批量是同一个道理，只是搬到了 SQL 层。"},links:[{name:"Spring 官方：文件上传指南",url:"https://spring.io/guides/gs/uploading-files",type:"tutorial"},{name:"Baeldung：N+1 问题",url:"https://www.baeldung.com/n-plus-1-queries",type:"tutorial"}]},{d:32,tag:"项目实战",t:"Vue 前端对接 + 联调",desc:"Vite proxy、axios 拦截器、页面三件套、全链路联调。",xp:30,lesson:{points:["vite.config.ts server.proxy：/api → localhost:8080，开发期免跨域","axios 请求拦截器带 token，响应拦截器统一判 code、401 跳登录","页面三件套：查询表单 + 表格 + 分页器","主场作战：前端全是老本行，新鲜感在'原来当年抱怨的接口是这么写的'"],code:`server: { proxy: { '/api': 'http://localhost:8080' } }

// axios 响应拦截器
if (res.code !== 0) {
  if (res.code === 401) router.push('/login')
  return Promise.reject(res.msg)
}`,analogy:"这一天你是真·全栈：接口不合意随手改后端，联调再也不是求人。左右手互搏的快感。"},links:[{name:"Vite：server.proxy 配置",url:"https://cn.vite.dev/config/server-options.html#server-proxy",type:"doc"},{name:"Axios 中文：拦截器",url:"https://www.axios-http.cn/docs/interceptors",type:"doc"}]},{d:33,tag:"⚔️ Boss 关",t:"BOSS 战：部署巨龙 + 公网上线",desc:"Boss 测验（5 题）+ 打包 jar、服务器部署、安全自检、公网访问。",xp:60,lesson:{points:["mvn clean package 打可执行 jar（内嵌 Tomcat）","后台运行：nohup java -jar & / systemd / docker run -d（SSH 断了不能死）","生产密码走环境变量，绝不进 git","安全自检：3306 不对公网开、Actuator 加保护、默认密码全改","进阶：Dockerfile 四行容器化"],code:`mvn clean package
nohup java -jar blog.jar --server.port=8080 &

# Dockerfile
FROM eclipse-temurin:17
COPY blog.jar /app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]`,analogy:"部署巨龙三板斧：打包、后台、安全。打赢它，你拥有了'代码 → 公网服务'的完整闭环，这就是全栈底气。"},links:[{name:"Spring 官方：打包部署",url:"https://docs.spring.io/spring-boot/reference/packaging.html",type:"doc"},{name:"Spring 官方：Docker 化指南",url:"https://spring.io/guides/gs/spring-boot-docker",type:"tutorial"}]},{d:34,tag:"读源码",t:"Clone 若依 RuoYi-Vue 并跑起来",desc:"搭建若依、理解脚手架定位、登录流程初探。",xp:35,lesson:{points:["RuoYi-Vue：Vue + Element 前端，Spring Boot + Security + MyBatis 后端","步骤：建库 ry-vue → 导入 sql/ 脚本 → 改 application-druid.yml → 启动 → 前端 npm run dev","默认账号 admin / admin123（登录后第一件事改密码）","到处点点，感受成熟后台的完整度：这将是接下来一周的'解剖对象'"],code:`git clone https://gitee.com/y_project/RuoYi-Vue.git
# 后端：RuoYiApplication 启动
# 前端：ruoyi-ui 目录 npm install && npm run dev`,analogy:"看别人装修好的全栈房子：你的博客项目是自建房，若依是精装样板房——对照着看差异最快。"},links:[{name:"若依官方文档",url:"https://doc.ruoyi.vip/ruoyi/",type:"doc"},{name:"RuoYi-Vue 源码",url:"https://gitee.com/y_project/RuoYi-Vue",type:"repo"}]},{d:35,tag:"读源码",t:"读登录链路 + 权限体系（RBAC）",desc:"从登录接口追调用链、五表权限模型、动态路由后端逻辑。",xp:35,lesson:{points:["追读路线：login.vue → SysLoginController → SysLoginService → Security 认证 → TokenService","RBAC 五表：sys_user / sys_role / sys_menu / sys_user_role / sys_role_menu","登录后 /getRouters 返回菜单树 → 前端动态生成路由","IDEA 读码双板斧：Ctrl+B 跳定义、Ctrl+Alt+← 返回","看不懂的类先看包名和类注释猜用途，别硬啃实现"],code:`SysLoginController.login()
  → SysLoginService.login()
    → 验证码校验 → AuthenticationManager.authenticate()
    → TokenService.createToken()   ← 和你 Day 30 写的对照`,analogy:"你前端写过的 v-permission 指令，后端就是五张表 + 一个接口。一条链路贯通比读十篇教程扎实。"},links:[{name:"若依官方：后台手册",url:"https://doc.ruoyi.vip/ruoyi/document/houduan.html",type:"doc"},{name:"IDEA 官方调试指南",url:"https://www.jetbrains.com/help/idea/debugging-code.html",type:"doc"}]},{d:36,tag:"读源码",t:"读业务模块全链路 + 代码生成器",desc:"三线对照读法、模块模板性、代码生成器原理（模板引擎）。",xp:35,lesson:{points:["三线对照：F12 看真实请求 → 前端代码看怎么发 → 后端代码看怎么接","所有模块同一模式：查询 DTO（条件+分页）→ TableDataInfo（total+rows）","代码生成器：读表结构元数据 → 填充 Velocity 模板 → 输出前后端全套代码","理解生成器 = 理解脚手架/低代码本质：约定 + 模板 + 元数据"],code:`// Velocity 模板片段
public class \${className} {
#foreach($column in $columns)
    private \${column.javaType} \${column.javaField};
#end
}`,analogy:"Day 29 你手动复制的四件套，生成器自动化了这件事。低代码不是魔法，是模板 + 元数据。"},links:[{name:"若依：代码生成说明",url:"https://doc.ruoyi.vip/ruoyi/document/houduan.html",type:"doc"},{name:"Velocity 用户指南",url:"https://velocity.apache.org/engine/devel/user-guide.html",type:"doc"}]},{d:37,tag:"读源码",t:"实战：给若依加一个公告模块",desc:"建表 → 代码生成 → 菜单挂载 → 角色授权 → 验证全流程。",xp:35,lesson:{points:["流程：建 notice 表 → 代码生成导入 → 下载代码放进项目 → 重启","菜单挂载：菜单管理新建（组件路径对应 views）→ 角色管理分配 → 重新登录","看不到页面排查：菜单配了？角色分了？组件路径对？缓存清了？","检验成果：你手写的博客四件套经验在生成器流程里全部对应"],code:`1. CREATE TABLE notice (id, title, content, status, create_time)
2. 系统管理 → 代码生成 → 导入表 → 编辑配置 → 生成
3. 代码放入项目对应目录 → 重启后端
4. 菜单管理新建菜单 → 角色授权 → 重新登录`,analogy:"照着乐高说明书拼新套装。'看得见'也是权限——RBAC 体系里菜单本身就是权限资源。"},links:[{name:"若依：新增模块指南",url:"https://doc.ruoyi.vip/ruoyi/document/houduan.html",type:"doc"}]},{d:38,tag:"进阶视野",t:"Redis 缓存 + 多线程初探",desc:"Redis 在项目中的定位、Cache Aside、线程与线程安全概念。",xp:35,lesson:{points:["Redis = 内存键值库：验证码、token、字典缓存等热点/临时数据","Cache Aside：读先缓存后库，写更新库再删缓存，过期时间兜底","多线程：线程共享堆内存 → 共享可变状态是万恶之源 → 需要同步","先理解问题（竞态、可见性），再学工具（synchronized、并发容器）","40 天只需建立概念框架，深入留给下一阶段"],code:`// Redis 典型用法（若依）
redisCache.setCacheObject("captcha:" + uuid, code, 2, MINUTES);
String saved = redisCache.getCacheObject("captcha:" + uuid);

// 多线程初探
Thread t = new Thread(() -> System.out.println("并行!"));
t.start();`,analogy:"Redis ≈ 服务端共享的内存 Map + TTL。线程 ≈ Web Worker，但 Java 里它们共享内存所以有坑。"},links:[{name:"廖雪峰：多线程基础",url:U("threading/basic/index.html"),type:"tutorial"},{name:"Redis 官方文档",url:"https://redis.io/docs/latest/",type:"doc"}]},{d:39,tag:"进阶视野",t:"单元测试 JUnit + 写技术博客",desc:"JUnit 基础、测试思维、输出倒逼输入。",xp:35,lesson:{points:["JUnit 5：@Test 方法 + 断言 assertEquals/assertTrue","测试 Service 层：mock Mapper 依赖，测业务逻辑不连真库","写博客选题：'全栈博客项目从 0 到部署'——有完整闭环就有读者","重点写踩坑：== vs equals、N+1、越权——细节决定含金量","讲不清楚 = 没学懂（费曼学习法）"],code:`@Test
void testAdd() {
    Calculator c = new Calculator();
    assertEquals(3, c.add(1, 2));
}

@Test
void testWithdrawInsufficient() {
    assertThrows(BizException.class, () -> account.withdraw(99999));
}`,analogy:"assertEquals ≈ vitest 的 expect().toBe()。测试思维前端就有：组件测试 → 单测，只是换了断言库。"},links:[{name:"廖雪峰：编写 JUnit 测试",url:U("unit-test/junit-test/index.html"),type:"tutorial"},{name:"掘金（发博客的中文社区）",url:"https://juejin.cn/",type:"tutorial"}]},{d:40,tag:"👑 终章",t:"最终 BOSS：毕业试炼 + 下一步规划",desc:"毕业测验（6 题）+ 制定下一个 40 天方向。",xp:100,lesson:{points:["毕业检验：能独立完成'设计表 → 接口 → 前端联调 → 部署公网'全链路","方向三选一：做透项目（推荐）/ 深入并发 / 学习微服务——深度 > 广度","持续输出：项目 + 笔记 + 博客，闭环才留得住知识","下一个 40 天：把博客做到作品集级（测试/文档/CI），或开新项目","面试素材：你的踩坑笔记 + Boss 战记录就是'项目难点'的答案库"],code:`// 毕业后推荐路线
1. 博客项目作品集化（测试/文档/CI/README）
2. 并发：线程池 → synchronized → JUC → ThreadLocal
3. Docker Compose 一键环境
4. 看源码：MyBatis → Spring（由简入繁）
5. 面试前：JavaGuide 过一遍八股`,analogy:"40 天前你连 JDK 都没装，今天你能独立交付全栈项目。毕业不是终点，是'知道怎么学'的起点。👑"},links:[{name:"JavaGuide（面试与进阶合集）",url:"https://github.com/Snailclimb/JavaGuide",type:"repo"},{name:"Dev.java 官方学习路径",url:"https://dev.java/learn/",type:"doc"}]}],rd=[{name:"阶段一 · Java 快速入门",from:1,to:7,items:["JDK 安装","第一个程序","变量与类型","字符串与数组","流程控制","新手村 Boss"]},{name:"阶段二 · 面向对象编程",from:8,to:13,items:["类与对象","继承多态","接口与包","核心类","枚举与 BigDecimal","OOP Boss"]},{name:"阶段三 · 异常/泛型/集合/IO",from:14,to:20,items:["异常处理","泛型","List/Map/Set","集合工具","IO 与日期","语言 Boss"]},{name:"阶段四 · Maven 与 Spring Boot",from:21,to:27,items:["Maven","第一个 Web 应用","REST 接口","IoC 与分层","数据库访问","统一返回","Todo API Boss"]},{name:"阶段五 · 项目实战",from:28,to:33,items:["博客设计","建表 CRUD","JWT 鉴权","联表上传","前端联调","部署 Boss"]},{name:"阶段六 · 源码与进阶",from:34,to:40,items:["若依上手","登录与权限","代码生成器","实战加模块","Redis 与多线程","单元测试","毕业"]}],vo=[{id:"first_day",icon:"🌱",name:"初次启程",desc:"完成第 1 天任务",condition:p=>p.doneTasks.includes(1),progress:p=>[Math.min(p.doneTasks.length,1),1]},{id:"streak_3",icon:"🔥",name:"三日之约",desc:"连续打卡 3 天",condition:p=>p.currentStreak>=3,progress:p=>[Math.min(p.currentStreak,3),3]},{id:"streak_7",icon:"☄️",name:"七日炼心",desc:"累计连续打卡 7 天",condition:p=>p.maxStreak>=7,progress:p=>[Math.min(p.maxStreak,7),7]},{id:"perfect_1",icon:"💯",name:"完美通关",desc:"一次测验全对",condition:p=>p.perfectQuizzes>=1,progress:p=>[Math.min(p.perfectQuizzes,1),1]},{id:"perfect_5",icon:"✨",name:"完美主义者",desc:"5 次测验全对",condition:p=>p.perfectQuizzes>=5,progress:p=>[Math.min(p.perfectQuizzes,5),5]},{id:"boss_1",icon:"⚔️",name:"初斩强敌",desc:"击败第一个 Boss",condition:p=>p.bossCleared.length>=1,progress:p=>[Math.min(p.bossCleared.length,1),1]},{id:"boss_4",icon:"🐉",name:"屠龙勇士",desc:"击败 4 个 Boss",condition:p=>p.bossCleared.length>=4,progress:p=>[Math.min(p.bossCleared.length,4),4]},{id:"quiz_30",icon:"🎯",name:"百步穿杨",desc:"答对 30 道题",condition:p=>p.quizCorrect>=30,progress:p=>[Math.min(p.quizCorrect,30),30]},{id:"quiz_60",icon:"🏹",name:"题海冲浪",desc:"答对 60 道题",condition:p=>p.quizCorrect>=60,progress:p=>[Math.min(p.quizCorrect,60),60]},{id:"village",icon:"🌱",name:"新手村出村",desc:"通关阶段一",condition:p=>Array.from({length:7},(y,c)=>c+1).every(y=>p.doneTasks.includes(y)),progress:p=>[Array.from({length:7},(y,c)=>c+1).filter(y=>p.doneTasks.includes(y)).length,7]},{id:"oop",icon:"☕",name:"面向对象大师",desc:"通关阶段二",condition:p=>Array.from({length:6},(y,c)=>c+8).every(y=>p.doneTasks.includes(y)),progress:p=>[Array.from({length:6},(y,c)=>c+8).filter(y=>p.doneTasks.includes(y)).length,6]},{id:"lang",icon:"📦",name:"语言修行完成",desc:"通关阶段三",condition:p=>Array.from({length:7},(y,c)=>c+14).every(y=>p.doneTasks.includes(y)),progress:p=>[Array.from({length:7},(y,c)=>c+14).filter(y=>p.doneTasks.includes(y)).length,7]},{id:"spring",icon:"🌿",name:"Spring 侠客",desc:"通关阶段四",condition:p=>Array.from({length:7},(y,c)=>c+21).every(y=>p.doneTasks.includes(y)),progress:p=>[Array.from({length:7},(y,c)=>c+21).filter(y=>p.doneTasks.includes(y)).length,7]},{id:"fullstack",icon:"🏰",name:"全栈建造师",desc:"通关阶段五",condition:p=>Array.from({length:6},(y,c)=>c+28).every(y=>p.doneTasks.includes(y)),progress:p=>[Array.from({length:6},(y,c)=>c+28).filter(y=>p.doneTasks.includes(y)).length,6]},{id:"graduate",icon:"👑",name:"出师！Java 勇者",desc:"完成全部 40 天修行",condition:p=>p.doneTasks.length>=40,progress:p=>[Math.min(p.doneTasks.length,40),40]},{id:"note_10",icon:"📝",name:"坑王之王",desc:"记下 10 条踩坑笔记",condition:p=>p.notes>=10,progress:p=>[Math.min(p.notes,10),10]},{id:"lv5",icon:"🗡️",name:"经验老到",desc:"等级达到 5 级",condition:p=>p.level>=5,progress:p=>[Math.min(p.level,5),5]}],ad={1:[{q:"JDK、JRE、JVM 的关系是？",options:["JDK ⊃ JRE ⊃ JVM","JVM ⊃ JRE ⊃ JDK","三者平级","JRE ⊃ JDK ⊃ JVM"],answer:0,explain:"JDK（开发包）包含 JRE（运行环境），JRE 包含 JVM（虚拟机）。开发要装最大的 JDK。"},{q:"javac 命令的作用是？",options:["运行 Java 程序","把 .java 编译成 .class 字节码","打包 jar","生成文档"],answer:1,explain:"javac ≈ tsc，编译器；java 命令才是运行。"}],2:[{q:"main 方法的标准签名是？",options:["public void main()","static void Main()","public static void main(String[] args)","def main()"],answer:2,explain:"固定写法，JVM 从这里进入，类似 npm start。"},{q:"文件名和类名的关系？",options:["随意","public 类名必须和文件名一致","必须小写","必须大写"],answer:1,explain:"Main.java 里必须是 public class Main，否则编译报错。"}],3:[{q:"int x = 3.5; 会发生什么？",options:["自动取整","编译报错","运行报错","变成 double"],answer:1,explain:"静态类型语言直接编译失败，比 JS 严格——这是特性不是 bug。"},{q:"1 / 2 在 Java 里结果是？",options:["0.5","0","1","报错"],answer:1,explain:"整数除法截断小数。要 0.5 得写 1.0 / 2。"}],4:[{q:"switch 适合什么场景？",options:["布尔判断","多值精确匹配","循环","异常处理"],answer:1,explain:"switch 是多路分支，if 更适合范围/布尔判断。"},{q:"while 和 do-while 的区别？",options:["没有区别","do-while 至少执行一次","while 至少执行一次","do-while 不能 break"],answer:1,explain:"do-while 先执行后判断，保底跑一次。"}],5:[{q:"增强 for（for-each）适合？",options:["需要下标时","只遍历不修改时","倒序时","跳着遍历时"],answer:1,explain:"for (int x : arr) 拿不到下标，纯遍历最方便。"},{q:"Arrays.sort(arr) 的作用是？",options:["反转数组","原地升序排序","复制数组","打印数组"],answer:1,explain:"原地排序，打印数组要用 Arrays.toString(arr)。"}],6:[{q:"方法重载（overload）是指？",options:["覆盖父类方法","同名方法参数不同","方法名不同","返回值不同"],answer:1,explain:"同名不同参，调用时编译器按参数类型自动选择。"},{q:"二维数组 int[][] grid = new int[3][4] 有多少元素？",options:["7","12","34","3"],answer:1,explain:"3 行 4 列 = 12 个，grid[0] 本身是个 int[4]。"}],7:[{q:"可变参数 sum(int... nums) 内部 nums 是？",options:["一个 int","int 数组","List","Map"],answer:1,explain:"本质就是数组，≈ JS 的 rest 参数 (...args)。"},{q:"递归必须有？",options:["循环","出口条件（边界）","static","try-catch"],answer:1,explain:"没有出口就是无限递归，StackOverflowError 安排上。"}],8:[{q:"String 是？",options:["基本类型","不可变对象","可变对象","数组"],answer:1,explain:"String 不可变，改字符串是创建新对象——所以高频拼接要用 StringBuilder。"},{q:"字符串比较应该用？",options:["==","equals()","=","==="],answer:1,explain:"== 比较引用地址，equals() 比较内容。JS 党的头号大坑！"}],9:[{q:"高频循环拼接字符串应该用？",options:["String +=","StringBuilder.append","数组","concat"],answer:1,explain:"String += 每次创建新对象，StringBuilder 是可变的，效率天差地别。"},{q:"String.format('%d 岁', 25) 输出？",options:["%d 岁","25 岁","报错","25%d"],answer:1,explain:"%d 占位整数、%s 字符串，类似 JS 模板字符串的手动版。"}],10:[{q:"Integer 是？",options:["基本类型","int 的包装类","关键字","运算符"],answer:1,explain:"包装类让基本类型拥有对象能力，自动装箱/拆箱在中间翻译。"},{q:"Integer a=127,b=127; a==b 结果？",options:["false","true","报错","不确定"],answer:1,explain:"缓存池 -128~127 内相同引用，所以 true；128 就变 false！比较包装类型永远用 equals。"}],11:[{q:"第一周 Boss：类的构造方法作用是？",options:["销毁对象","初始化对象","继承","排序"],answer:1,explain:"new 时自动调用，负责把字段初始化好。"},{q:"this.name = name 中的 this 指？",options:["全局变量","当前实例","类本身","父类"],answer:1,explain:"区分字段和同名参数，≈ JS 构造函数里的 this。"},{q:"private int[] scores; 属于？",options:["局部变量","实例字段（封装）","静态字段","参数"],answer:1,explain:"字段私有 + 公开方法 = 封装，不暴露内部状态。"},{q:"(double) sum / length 里的 (double) 是？",options:["注释","强制类型转换","泛型","断言"],answer:1,explain:"不转的话整数除法会把平均分截断成 0。"},{q:"printReport() 里调用 getAverage() 时省略了 this，等价于？",options:["this.getAverage()","super.getAverage()","报错","静态调用"],answer:0,explain:"方法内调用本类方法默认隐含 this。"}],12:[{q:"class Dog extends Animal 表示？",options:["Dog 实现接口","Dog 继承 Animal","Animal 继承 Dog","组合关系"],answer:1,explain:"extends 继承，子类自动拥有父类的非私有成员。"},{q:"Java 支持多重继承吗（一个类 extends 两个类）？",options:["支持","不支持","看版本","加 final 就行"],answer:1,explain:"不支持，避免菱形问题；多重能力用 interface 实现。"}],13:[{q:"Animal a = new Cat(); a.makeSound() 调用的是？",options:["Animal 的","Cat 的（多态）","报错","随机"],answer:1,explain:"运行时看实际类型——多态，≈ JS 原型链方法查找。"},{q:"@Override 注解的作用是？",options:["必须写","让编译器检查确实是重写","提升性能","生成文档"],answer:1,explain:"拼错方法名时编译器会报错，是免费的保险。"}],14:[{q:"抽象类能直接 new 吗？",options:["能","不能","加 static 能","看情况"],answer:1,explain:"抽象类是半成品图纸，只能被继承，由子类实现抽象方法。"},{q:"abstract double area(); 表示？",options:["空方法","抽象方法，子类必须实现","静态方法","final 方法"],answer:1,explain:"只有签名没有实现，强制子类接盘。"}],15:[{q:"接口里的方法默认是？",options:["private","public abstract","static","final"],answer:1,explain:"接口是能力契约，方法默认公开且必须实现。"},{q:"一个类可以实现几个接口？",options:["1 个","多个","0 个","最多 2 个"],answer:1,explain:"implements 多个接口绕开单继承限制，≈ JS 的混入 mixins。"}],16:[{q:"static 字段属于？",options:["每个实例一份","类（全体共享一份）","方法","包"],answer:1,explain:"静态字段全类共享，类似模块级变量。Counter.count 计数实例数就是经典用法。"},{q:"final int MAX = 10; MAX = 20; 会？",options:["成功","编译报错","运行报错","自动覆盖"],answer:1,explain:"final = 不可重新赋值，≈ JS const。"}],17:[{q:"String.split(',') 返回？",options:["String","String[]","List","Map"],answer:1,explain:"按分隔符切成数组，≈ JS 的 split，几乎一样好用。"},{q:"Objects.equals(a, b) 相比 a.equals(b) 的好处？",options:["更快","a 为 null 也不报错","能比较类型","没区别"],answer:1,explain:"null 安全，防 NullPointerException。"}],18:[{q:"10 / 0（整数除零）会？",options:["返回 0","ArithmeticException","返回 Infinity","编译报错"],answer:1,explain:"整数除零抛异常（浮点除零才是 Infinity）。try-catch 接住它。"},{q:"finally 块的特点是？",options:["可能不执行","无论是否异常都执行","只异常时执行","只成功时执行"],answer:1,explain:"收尾代码（关资源）的归宿，类似 React 的 cleanup。"}],19:[{q:"throw 和 throws 的区别？",options:["一样","throw 抛出异常对象 / throws 声明方法可能抛的异常","throws 抛出对象","都是关键字没区别"],answer:1,explain:"throw 在方法体内动手，throws 在方法签名上打预告。"},{q:"自定义异常通常继承？",options:["String","Exception 或 RuntimeException","Object","Throwable 只能直接"],answer:1,explain:"继承 Exception = 受检异常，强制调用方处理。"}],20:[{q:"生产项目最常用的日志门面是？",options:["System.out.println","SLF4J + Logback","System.err","printStackTrace"],answer:1,explain:"slf4j 是门面接口、Logback 是实现，可换实现不改代码。"},{q:"日志级别从低到高正确的排序是？",options:["INFO < DEBUG < ERROR","DEBUG < INFO < WARN < ERROR","ERROR < WARN < INFO","随机"],answer:1,explain:"DEBUG 调试细节 → INFO 常规 → WARN 警告 → ERROR 出事了。"}],21:[{q:"Boss：checked 异常和 unchecked 异常的区别？",options:["没区别","checked 强制 try-catch 或 throws 声明","checked 更快","unchecked 不能抛"],answer:1,explain:"Exception 及其子类（非 RuntimeException）是受检的，编译器逼你处理。"},{q:"BankAccount.withdraw 余额不足时正确做法是？",options:["打印错误继续","抛出异常让调用方处理","静默返回","return -1"],answer:1,explain:"异常是状态异常的标准表达，比返回魔法数字干净得多。"},{q:"IllegalArgumentException 属于？",options:["checked","unchecked（RuntimeException）","Error","Throwable 接口"],answer:1,explain:"参数不合法是编程错误，运行时异常，不强制捕获。"},{q:"封装的核心思想是？",options:["代码变长","隐藏内部状态，只暴露方法","多用 static","少写注释"],answer:1,explain:"字段 private + 方法校验，外部无法绕过规则直接改余额。"},{q:"finally 在有 return 的情况下？",options:["不执行","仍然执行","报错","看编译器"],answer:1,explain:"finally 连 return 都拦不住，收尾保证执行。"}],22:[{q:"List<String> 里写 List<int> 会？",options:["可以","编译报错（泛型要用包装类）","自动转换","运行报错"],answer:1,explain:"泛型只能用引用类型，int 要写 Integer，装箱自动发生。"},{q:"泛型的好处是？",options:["更快","编译期类型安全 + 一套代码多种类型","省内存","能装任意东西"],answer:1,explain:"List<String> 里塞不进 Integer，错误在编译期就暴露，≈ TS 泛型。"}],23:[{q:"ArrayList 和数组的区别？",options:["没区别","ArrayList 动态扩容","数组更快必然","ArrayList 不能遍历"],answer:1,explain:"数组长度固定，ArrayList 自动扩容，日常首选。"},{q:"List<String> list = new ArrayList<>(); 里 <> 的作用是？",options:["装饰","钻石操作符，类型推断","泛型擦除","必须写全类型"],answer:1,explain:"编译器从左边推断右边类型，少打一半字。"}],24:[{q:"Map 的 key 重复 put 会？",options:["报错","覆盖旧值","存两个","自动重命名"],answer:1,explain:"一个 key 对应一个 value，再 put 就是更新。"},{q:"getOrDefault(key, 0) 的意义是？",options:["报错","key 不存在时返回默认值而不是 null","删除 key","排序"],answer:1,explain:"省掉 if (map.containsKey) 的样板代码。"}],25:[{q:"两个内容相同的对象 == 比较结果是？",options:["true","false（比较引用）","报错","看运气"],answer:1,explain:"== 比地址，两个 new 出来的对象地址必然不同；比内容用重写过的 equals。"},{q:"重写 equals 时必须同时重写？",options:["toString","hashCode","getClass","clone"],answer:1,explain:"否则 HashMap/HashSet 会出 bug：相等对象必须等哈希。"}],26:[{q:"栈（Stack）的特性是？",options:["先进先出","后进先出","随机存取","按优先级"],answer:1,explain:"LIFO，≈ 浏览器历史回退。Java 推荐 Deque 接口代替老 Stack 类。"},{q:"队列（Queue）的特性是？",options:["先进先出","后进先出","只能看头","不能空"],answer:0,explain:"FIFO，≈ 消息队列排队处理。"}],27:[{q:"Files.writeString(p, s) 的作用是？",options:["读文件","写文件","删除文件","复制文件"],answer:1,explain:"Java 11+ 的一行式文件 API，告别 IO 流样板代码。"},{q:"Java 的 checked IO 异常意味着？",options:["可以忽略","必须 try-catch 或 throws 声明","自动处理","编译不检查"],answer:1,explain:"IOException 是受检异常，文件可能不存在，编译器逼你想清楚。"}],28:[{q:"处理日期时间推荐的 API 是？",options:["Date","Calendar","java.time（LocalDate 等）","SimpleDateFormat"],answer:2,explain:"Java 8+ 的 java.time 不可变且线程安全，老的 Date 一堆坑。"},{q:"DateTimeFormatter.ofPattern('yyyy-MM-dd') 的作用是？",options:["解析字符串","定义格式化模板","获取当前时间","时区转换"],answer:1,explain:"≈ dayjs 的 format('YYYY-MM-DD')，注意大小写规则不同！"}],29:[{q:"金额计算应该用？",options:["double","float","BigDecimal","int"],answer:2,explain:"double 有精度误差（0.1+0.2≠0.3），钱必须 BigDecimal，且用字符串构造。"},{q:"new BigDecimal(0.1) 和 new BigDecimal('0.1') 的区别？",options:["没区别","前者带着 double 的精度误差","后者报错","前者更快"],answer:1,explain:"浮点构造继承误差，字符串构造精确——面试高频题。"}],30:[{q:"Boss：Map<String, List<Integer>> 适合表达？",options:["一维数组","学生→多科成绩（一对多）","单个数字","排序结果"],answer:1,explain:"集合嵌套是日常业务建模的基本功，JSON 里也长这样。"},{q:"遍历 Map 推荐的方式是？",options:["for (entry : map.entrySet())","下标循环","while(true)","不能遍历"],answer:0,explain:"entrySet 一次拿到 key 和 value，效率也最好。"},{q:"List.of(90, 85) 创建的列表？",options:["可增删","不可变","是 Map","自动排序"],answer:1,explain:"不可变列表，适合固定数据；要增删用 new ArrayList。"},{q:"整数求和 sum / scores.size() 要得到小数应该？",options:["直接除","先把 sum 强转 double","乘 1.0 都行但强转更明确","B 或 C"],answer:3,explain:"整数除法截断，必须有一方是浮点。"},{q:"HashMap 遍历顺序是？",options:["插入顺序","无序","排序","倒序"],answer:1,explain:"要插入序用 LinkedHashMap，要排序用 TreeMap。"}],31:[{q:"Lambda 表达式 n -> n * 2 等价于？",options:["匿名内部类实现函数式接口","方法定义","变量","泛型"],answer:0,explain:"≈ JS 的箭头函数，但 Java 的 Lambda 只能实现单方法接口。"},{q:"System.out::println 里的 :: 是？",options:["作用域","方法引用","泛型","断言"],answer:1,explain:"方法引用是 Lambda 的简写，参数原样传给该方法。"}],32:[{q:"stream().filter(n -> n > 10) 的作用是？",options:["排序","过滤保留满足条件的元素","求和","去重"],answer:1,explain:"≈ JS 的 Array.filter，连名字都一样。"},{q:"Stream 的特点是？",options:["立即执行","惰性求值，终结操作才触发","修改原集合","只能用一次但每次都新建"],answer:1,explain:"中间操作惰性，collect/forEach 这类终结操作才真正计算，≈ RxJS 管道。"}],33:[{q:"启动线程的正确方式是？",options:["直接调 run()","调 start()","new Thread 就自动跑","main 里同步调用"],answer:1,explain:"run() 只是普通方法调用，start() 才开新线程——经典面试题。"},{q:"t.join() 的作用是？",options:["启动线程","等待该线程结束再继续","中断线程","合并线程"],answer:1,explain:"主线程在这里等子线程干完活，≈ Promise.all 的等待。"}],34:[{q:"两个线程同时 counter++ 1000 次结果可能？",options:["一定是 2000","小于 2000（竞态条件）","大于 2000","报错"],answer:1,explain:"++ 不是原子操作（读-改-写三步），互相覆盖就丢更新。"},{q:"AtomicInteger.incrementAndGet() 的特点是？",options:["更快但危险","原子操作，线程安全","加锁实现","自动重试"],answer:1,explain:"硬件级 CAS 指令保证不可分割，轻量于 synchronized。"}],35:[{q:"Maven 的 pom.xml 相当于前端的？",options:["tsconfig.json","package.json","vite.config.ts",".gitignore"],answer:1,explain:"依赖管理 + 构建配置都在里面，central 仓库 ≈ npm registry。"},{q:"Maven 坐标 groupId:artifactId:version 的作用是？",options:["装饰","唯一定位一个依赖包","加密","排序"],answer:1,explain:"≈ npm 的 @scope/name@version，从中央仓库精确定位。"}],36:[{q:"HTTP 200 表示？",options:["错误","成功","重定向","未找到"],answer:1,explain:"2xx 成功、3xx 重定向、4xx 客户端错、5xx 服务端错——前端老本行了。"},{q:"Spring MVC 的 @GetMapping('/users') 相当于 Express 的？",options:["app.use()","app.get('/users', ...)","app.listen()","res.send()"],answer:1,explain:"注解声明式路由 vs 回调式路由，思路一致。"}],37:[{q:"注解（@Override 等）本质是？",options:["注释","代码的元数据，可被框架读取处理","关键字","宏"],answer:1,explain:"给机器看的注释，Spring 的 @Service/@Autowired 全靠它。"},{q:"@Retention(RetentionPolicy.RUNTIME) 表示注解？",options:["只存源码","运行时可被反射读取","编译期丢弃","自动执行"],answer:1,explain:"想用反射读注解就必须 RUNTIME 级别。"}],38:[{q:"JUnit 测试方法的特点是？",options:["必须是 main","用 @Test 注解标记，独立运行","要手动调用","只能测私有方法"],answer:1,explain:"每个 @Test 方法独立跑、独立断言，≈ vitest 的 it()。"},{q:"单元测试应该测？",options:["私有实现细节","公开行为（给定输入→期望输出）","只测 UI","只测性能"],answer:1,explain:"测行为不测实现，重构时测试才不会碎一地。"}],39:[{q:"JDBC 的作用是？",options:["连浏览器","Java 连接数据库的标准接口","编译 SQL","渲染页面"],answer:1,explain:"所有 ORM（MyBatis 等）底层都是 JDBC，≈ 前端的 fetch 是 axios 的底层。"},{q:"SQL 注入的防护方式是？",options:["字符串拼接 SQL","PreparedStatement 参数化查询","过滤特殊字符","加密 SQL"],answer:1,explain:"参数化让输入永远当数据不当代码，拼接 = 裸奔。"}],40:[{q:"毕业 Boss：借书系统 borrowBook 书已借出时应该？",options:["静默成功","抛异常说明状态冲突","自动再买一本","返回 null"],answer:1,explain:"状态冲突用异常表达，调用方决定怎么提示用户。"},{q:"后端分层 Controller → Service → 对应前端？",options:["页面 → 组合式函数/API 层","CSS → HTML","路由 → 组件","没有对应"],answer:0,explain:"Controller 接请求 ≈ 页面组件，Service 管业务 ≈ 组合式函数，职责分离一个道理。"},{q:"学完 40 天后下一步最推荐？",options:["直接读 RuoYi 源码","用 Spring Boot 做个小项目练手","转行","重学一遍"],answer:1,explain:"做一个自己的小项目巩固，再读 RuoYi 源码看工业级写法。"},{q:"Java 后端的核心技术栈组合是？",options:["Spring Boot + MyBatis-Plus + MySQL","React + Redux","Vue + Pinia","Node + Express"],answer:0,explain:"国内后端标配全家桶，你 40 天学的都串起来了。"},{q:"👑 恭喜来到最后一题：Java 大师的标志是？",options:["背完所有 API","会用框架并理解底层原理，持续学习","写得快","年薪百万"],answer:1,explain:"工具会过时，理解底层 + 持续学习的能力才带你走到最后。毕业快乐！"}]},od={1:{prompt:"改写打招呼程序：声明 String name 和 int age 变量，用 + 拼接打印「我是XX，今年XX岁，开始学Java！」",starter:`public class Main {
    public static void main(String[] args) {
        // 声明变量并拼接打印
        
    }
}`,answer:`public class Main {
    public static void main(String[] args) {
        String name = "前端勇者";
        int age = 25;
        System.out.println("我是" + name + "，今年" + age + "岁，开始学Java！");
    }
}`,expected:"我是前端勇者，今年25岁，开始学Java！"},2:{prompt:'浮点陷阱实验：打印 0.1 + 0.2 的结果，再用 BigDecimal 算出精确的 0.3（提示：new BigDecimal("0.1").add(new BigDecimal("0.2"))）',starter:`import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        // 1. 直接算 0.1 + 0.2
        // 2. 用 BigDecimal 算精确的
        
    }
}`,answer:`import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        System.out.println(0.1 + 0.2);
        BigDecimal a = new BigDecimal("0.1");
        BigDecimal b = new BigDecimal("0.2");
        System.out.println(a.add(b));
    }
}`,expected:`0.30000000000000004（第一行）
0.3（第二行，BigDecimal 精确）`},3:{prompt:"布尔逻辑：int score = 85，写一个布尔表达式 isPass = score >= 60 && score < 100，打印它；再打印 score < 60 || score == 100 的结果",starter:`public class Main {
    public static void main(String[] args) {
        int score = 85;
        // 两个布尔表达式各打印一次
        
    }
}`,answer:`public class Main {
    public static void main(String[] args) {
        int score = 85;
        boolean isPass = score >= 60 && score < 100;
        System.out.println(isPass);
        System.out.println(score < 60 || score == 100);
    }
}`,expected:`true
false`},4:{prompt:"数组遍历：int[] scores = {90, 85, 77, 60, 45}，用 for 循环打印每个元素，并用 if 统计及格（>=60）人数，最后打印「及格X人」",starter:`public class Main {
    public static void main(String[] args) {
        int[] scores = {90, 85, 77, 60, 45};
        int pass = 0;
        // 遍历 + 统计
        
    }
}`,answer:`public class Main {
    public static void main(String[] args) {
        int[] scores = {90, 85, 77, 60, 45};
        int pass = 0;
        for (int i = 0; i < scores.length; i++) {
            System.out.println(scores[i]);
            if (scores[i] >= 60) {
                pass++;
            }
        }
        System.out.println("及格" + pass + "人");
    }
}`,expected:`90
85
77
60
45
及格4人`},5:{prompt:"排序练习：int[] arr = {5, 2, 8, 1}，先用 Arrays.sort() 排序打印，再自己手写冒泡排序排另一个数组 {9, 7, 5} 并打印",starter:`import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] a = {5, 2, 8, 1};
        int[] b = {9, 7, 5};
        // 1. Arrays.sort(a) 后打印
        // 2. 手写冒泡排 b 后打印
        
    }
}`,answer:`import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] a = {5, 2, 8, 1};
        Arrays.sort(a);
        System.out.println(Arrays.toString(a));
        int[] b = {9, 7, 5};
        for (int i = 0; i < b.length - 1; i++) {
            for (int j = 0; j < b.length - 1 - i; j++) {
                if (b[j] > b[j + 1]) {
                    int tmp = b[j];
                    b[j] = b[j + 1];
                    b[j + 1] = tmp;
                }
            }
        }
        System.out.println(Arrays.toString(b));
    }
}`,expected:`[1, 2, 5, 8]
[5, 7, 9]`},6:{prompt:"方法练习：写一个静态方法 static int add(int a, int b) 返回两数之和，在 main 里调用并打印 add(3, 5) 的结果；再写一个重载版本 add(double a, double b)",starter:`public class Main {
    // 在这里写 add 方法（int 版本）

    // 重载：double 版本

    public static void main(String[] args) {
        // 调用两个版本并打印
        
    }
}`,answer:`public class Main {
    static int add(int a, int b) {
        return a + b;
    }

    static double add(double a, double b) {
        return a + b;
    }

    public static void main(String[] args) {
        System.out.println(add(3, 5));
        System.out.println(add(1.5, 2.5));
    }
}`,expected:`8
4.0`},7:{prompt:"可变参数 + 递归：写 static int sum(int... nums) 用增强 for 求任意个数的和；再写 static int fib(int n) 用递归求斐波那契第 n 项，打印 fib(10)",starter:`public class Main {
    // sum 方法（可变参数）

    // fib 方法（递归）

    public static void main(String[] args) {
        // 打印 sum(1,2,3) 和 fib(10)
        
    }
}`,answer:`public class Main {
    static int sum(int... nums) {
        int total = 0;
        for (int n : nums) {
            total += n;
        }
        return total;
    }

    static int fib(int n) {
        if (n <= 1) return n;
        return fib(n - 1) + fib(n - 2);
    }

    public static void main(String[] args) {
        System.out.println(sum(1, 2, 3));
        System.out.println(fib(10));
    }
}`,expected:`6
55`},8:{prompt:'字符串处理：String s = " Hello,Java "; 去掉首尾空格，按逗号分割成数组，遍历打印每段（带序号），最后打印转大写后的结果',starter:`public class Main {
    public static void main(String[] args) {
        String s = " Hello,Java ";
        // trim → split → 遍历 → toUpperCase
        
    }
}`,answer:`public class Main {
    public static void main(String[] args) {
        String s = " Hello,Java ";
        String t = s.trim();
        String[] parts = t.split(",");
        for (int i = 0; i < parts.length; i++) {
            System.out.println(i + ": " + parts[i]);
        }
        System.out.println(t.toUpperCase());
    }
}`,expected:`0: Hello
1: Java
HELLO,JAVA`},9:{prompt:"StringBuilder 拼接：把 1~10 所有偶数用 StringBuilder 拼成「2,4,6,8,10」打印（注意最后一个数后面不要逗号）",starter:`public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        // 循环拼接，控制逗号
        
    }
}`,answer:`public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        for (int i = 2; i <= 10; i += 2) {
            if (i > 2) {
                sb.append(",");
            }
            sb.append(i);
        }
        System.out.println(sb.toString());
    }
}`,expected:"2,4,6,8,10"},10:{prompt:"包装类与拆装箱：Integer a = 127, b = 127; Integer c = 128, d = 128; 打印 a == b 和 c == d 的结果（体会 Integer 缓存 -128~127），再用 equals 比较 c 和 d",starter:`public class Main {
    public static void main(String[] args) {
        Integer a = 127, b = 127;
        Integer c = 128, d = 128;
        // 打印 a==b、c==d、c.equals(d)
        
    }
}`,answer:`public class Main {
    public static void main(String[] args) {
        Integer a = 127, b = 127;
        Integer c = 128, d = 128;
        System.out.println(a == b);
        System.out.println(c == d);
        System.out.println(c.equals(d));
    }
}`,expected:`true
false
true`},11:{prompt:"📅 Boss 战·第一周修炼总验收：写一个完整类 GradeAnalyzer，包含：构造方法接收 int[] 数组、getAverage() 求平均分（double）、getMax() 求最高分、printReport() 打印报告。main 里用 {88, 92, 75, 60} 测试全部方法",starter:`public class GradeAnalyzer {
    // 字段、构造方法

    // getAverage()

    // getMax()

    // printReport()

    public static void main(String[] args) {
        GradeAnalyzer ga = new GradeAnalyzer(new int[]{88, 92, 75, 60});
        // 调用三个方法
        
    }
}`,answer:`public class GradeAnalyzer {
    private int[] scores;

    public GradeAnalyzer(int[] scores) {
        this.scores = scores;
    }

    public double getAverage() {
        int sum = 0;
        for (int s : scores) {
            sum += s;
        }
        return (double) sum / scores.length;
    }

    public int getMax() {
        int max = scores[0];
        for (int s : scores) {
            if (s > max) max = s;
        }
        return max;
    }

    public void printReport() {
        System.out.println("平均分: " + getAverage());
        System.out.println("最高分: " + getMax());
    }

    public static void main(String[] args) {
        GradeAnalyzer ga = new GradeAnalyzer(new int[]{88, 92, 75, 60});
        ga.printReport();
    }
}`,expected:`平均分: 78.75
最高分: 92`},12:{prompt:"OOP 基础：写 class Dog，私有字段 name/age，构造方法初始化，getter 两个，bark() 打印「汪汪，我是name」。main 里 new 两只狗分别调用",starter:`class Dog {
    // 私有字段 + 构造方法 + getter + bark
}

public class Main {
    public static void main(String[] args) {
        // new 两只狗
        
    }
}`,answer:`class Dog {
    private String name;
    private int age;

    public Dog(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() { return name; }
    public int getAge() { return age; }

    public void bark() {
        System.out.println("汪汪，我是" + name);
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d1 = new Dog("旺财", 2);
        Dog d2 = new Dog("小黑", 3);
        d1.bark();
        d2.bark();
    }
}`,expected:`汪汪，我是旺财
汪汪，我是小黑`},13:{prompt:"继承与方法重写：class Animal 有 makeSound() 打印「...」；class Cat 继承它并重写为「喵」；main 里 Animal a = new Cat(); a.makeSound(); 观察多态",starter:`class Animal {
    // makeSound
}

class Cat extends Animal {
    // 重写
}

public class Main {
    public static void main(String[] args) {
        Animal a = new Cat();
        // 调用并观察
        
    }
}`,answer:`class Animal {
    public void makeSound() {
        System.out.println("...");
    }
}

class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("喵");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal a = new Cat();
        a.makeSound();
    }
}`,expected:"喵"},14:{prompt:"抽象类：写 abstract class Shape，抽象方法 double area()；子类 Circle（半径 3，area=3.14*r*r）和 Rectangle（3×4）。main 里用 Shape[] 数组循环打印各自面积",starter:`abstract class Shape {
    // 抽象方法 area
}

class Circle extends Shape { }
class Rectangle extends Shape { }

public class Main {
    public static void main(String[] args) {
        Shape[] shapes = { new Circle(3), new Rectangle(3, 4) };
        // 循环打印面积
        
    }
}`,answer:`abstract class Shape {
    public abstract double area();
}

class Circle extends Shape {
    private double r;
    public Circle(double r) { this.r = r; }
    public double area() { return 3.14 * r * r; }
}

class Rectangle extends Shape {
    private double w, h;
    public Rectangle(double w, double h) { this.w = w; this.h = h; }
    public double area() { return w * h; }
}

public class Main {
    public static void main(String[] args) {
        Shape[] shapes = { new Circle(3), new Rectangle(3, 4) };
        for (Shape s : shapes) {
            System.out.println(s.area());
        }
    }
}`,expected:`28.26
12.0`},15:{prompt:"接口：写 interface Flyable { void fly(); }，class Bird implements Flyable 实现 fly() 打印「我飞了」。接口里的字段默认是 public static final 的，试着打印 Flyable 的某个常量验证",starter:`interface Flyable {
    // fly 方法
}

class Bird implements Flyable { }

public class Main {
    public static void main(String[] args) {
        // new Bird 并调用 fly
        
    }
}`,answer:`interface Flyable {
    void fly();
}

class Bird implements Flyable {
    @Override
    public void fly() {
        System.out.println("我飞了");
    }
}

public class Main {
    public static void main(String[] args) {
        Flyable bird = new Bird();
        bird.fly();
    }
}`,expected:"我飞了"},16:{prompt:"static 与 final：写 class Counter，static int count 字段，每 new 一个 Counter 构造方法里 count++；main 里 new 三个对象，打印 Counter.count；再用 final int MAX = 10 试着赋值两次（注释掉报错那行）",starter:`class Counter {
    // static count + 构造方法
}

public class Main {
    public static void main(String[] args) {
        // new 三个 Counter，打印 Counter.count
        
    }
}`,answer:`class Counter {
    static int count = 0;
    public Counter() {
        count++;
    }
}

public class Main {
    public static void main(String[] args) {
        new Counter();
        new Counter();
        new Counter();
        System.out.println(Counter.count);
    }
}`,expected:"3"},17:{prompt:'核心类练习：写一个方法用 Scanner 思路处理字符串（这里简化为 split），String data = "alice,90,bob,85"; 每两个人一组打印「alice 的成绩是 90」这样的格式',starter:`public class Main {
    public static void main(String[] args) {
        String data = "alice,90,bob,85";
        // split 后两两分组打印
        
    }
}`,answer:`public class Main {
    public static void main(String[] args) {
        String data = "alice,90,bob,85";
        String[] parts = data.split(",");
        for (int i = 0; i < parts.length; i += 2) {
            System.out.println(parts[i] + " 的成绩是 " + parts[i + 1]);
        }
    }
}`,expected:`alice 的成绩是 90
bob 的成绩是 85`},18:{prompt:"异常处理：写 static int divide(int a, int b) 内部直接返回 a/b；main 里 try-catch 调用 divide(10, 0)，捕获 ArithmeticException 打印「除零警告」，finally 里打印「运算结束」",starter:`public class Main {
    static int divide(int a, int b) {
        return a / b;
    }

    public static void main(String[] args) {
        // try-catch-finally
        
    }
}`,answer:`public class Main {
    static int divide(int a, int b) {
        return a / b;
    }

    public static void main(String[] args) {
        try {
            System.out.println(divide(10, 0));
        } catch (ArithmeticException e) {
            System.out.println("除零警告");
        } finally {
            System.out.println("运算结束");
        }
    }
}`,expected:`除零警告
运算结束`},19:{prompt:'自定义异常：写 class AgeException extends Exception（构造方法接收消息）；写 static void checkAge(int age) throws AgeException，age<0 时 throw new AgeException("年龄不能为负"); main 里 try-catch 调用 checkAge(-5)',starter:`class AgeException extends Exception { }

public class Main {
    static void checkAge(int age) throws AgeException {
        // age < 0 时抛出
    }

    public static void main(String[] args) {
        // try-catch 调用
        
    }
}`,answer:`class AgeException extends Exception {
    public AgeException(String msg) {
        super(msg);
    }
}

public class Main {
    static void checkAge(int age) throws AgeException {
        if (age < 0) {
            throw new AgeException("年龄不能为负");
        }
        System.out.println("年龄正常: " + age);
    }

    public static void main(String[] args) {
        try {
            checkAge(-5);
        } catch (AgeException e) {
            System.out.println("捕获: " + e.getMessage());
        }
    }
}`,expected:"捕获: 年龄不能为负"},20:{prompt:"日志练习：用 System.out 模拟日志分级输出——写 static void log(String level, String msg) 打印「[LEVEL] msg」格式；依次调用 info/warn/error 打印三条日志",starter:`public class Main {
    static void log(String level, String msg) {
        // 格式化输出
    }

    public static void main(String[] args) {
        // 打印三条不同级别日志
        
    }
}`,answer:`public class Main {
    static void log(String level, String msg) {
        System.out.println("[" + level + "] " + msg);
    }

    public static void main(String[] args) {
        log("INFO", "应用启动");
        log("WARN", "内存偏高");
        log("ERROR", "数据库连接失败");
    }
}`,expected:`[INFO] 应用启动
[WARN] 内存偏高
[ERROR] 数据库连接失败`},21:{prompt:"📅 Boss 战·Java 语法篇大 Boss：综合写一个 BankAccount 类——私有余额 balance，deposit(double) 存款（负数抛 IllegalArgumentException）、withdraw(double) 取款（余额不足抛异常）、getBalance() 查询。main 里演示正常存取 + 两次异常被捕获",starter:`public class BankAccount {
    // balance 字段

    // deposit / withdraw / getBalance

    public static void main(String[] args) {
        // 演示存取 + 异常捕获
        
    }
}`,answer:`public class BankAccount {
    private double balance;

    public void deposit(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("存款必须为正");
        }
        balance += amount;
    }

    public void withdraw(double amount) {
        if (amount > balance) {
            throw new IllegalArgumentException("余额不足");
        }
        balance -= amount;
    }

    public double getBalance() {
        return balance;
    }

    public static void main(String[] args) {
        BankAccount acc = new BankAccount();
        acc.deposit(100);
        acc.withdraw(30);
        System.out.println("余额: " + acc.getBalance());
        try {
            acc.deposit(-50);
        } catch (IllegalArgumentException e) {
            System.out.println("捕获: " + e.getMessage());
        }
        try {
            acc.withdraw(999);
        } catch (IllegalArgumentException e) {
            System.out.println("捕获: " + e.getMessage());
        }
    }
}`,expected:`余额: 70.0
捕获: 存款必须为正
捕获: 余额不足`},22:{prompt:"泛型初体验：写一个泛型方法 static <T> T first(T[] arr) 返回数组第一个元素；用 String[] 和 Integer[] 各调用一次并打印（体会一套代码多种类型）",starter:`public class Main {
    // 泛型方法 first

    public static void main(String[] args) {
        // 两种类型各调用一次
        
    }
}`,answer:`public class Main {
    static <T> T first(T[] arr) {
        return arr[0];
    }

    public static void main(String[] args) {
        String[] names = {"Java", "Python"};
        Integer[] nums = {1, 2, 3};
        System.out.println(first(names));
        System.out.println(first(nums));
    }
}`,expected:`Java
1`},23:{prompt:"集合框架：List 练习——List<String> list = new ArrayList<>(); 添加 3 个城市名，遍历打印，然后删除第 2 个，再打印列表大小和是否包含第一个城市",starter:`import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        // add → 遍历 → remove → size/contains
        
    }
}`,answer:`import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("北京");
        list.add("上海");
        list.add("深圳");
        for (String city : list) {
            System.out.println(city);
        }
        list.remove("上海");
        System.out.println("大小: " + list.size());
        System.out.println("含北京: " + list.contains("北京"));
    }
}`,expected:`北京
上海
深圳
大小: 2
含北京: true`},24:{prompt:"Map 练习：Map<String, Integer> scores = new HashMap<>(); 放入 alice=90, bob=85；用 getOrDefault 查询 carol 的成绩（默认 0）打印；再用 keySet 遍历打印所有人成绩",starter:`import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        // put → getOrDefault → keySet 遍历
        
    }
}`,answer:`import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Map<String, Integer> scores = new HashMap<>();
        scores.put("alice", 90);
        scores.put("bob", 85);
        System.out.println("carol: " + scores.getOrDefault("carol", 0));
        for (String name : scores.keySet()) {
            System.out.println(name + " = " + scores.get(name));
        }
    }
}`,expected:`carol: 0
alice = 90
bob = 85`},25:{prompt:".equals 与 hashCode：写 class Point 有 x/y，重写 equals 和 hashCode（用 Objects.equals/hashCode）；main 里两个值相同的 Point 用 == 和 equals 分别比较并打印",starter:`import java.util.Objects;

class Point {
    int x, y;
    Point(int x, int y) { this.x = x; this.y = y; }
    // 重写 equals / hashCode
}

public class Main {
    public static void main(String[] args) {
        Point p1 = new Point(1, 2);
        Point p2 = new Point(1, 2);
        // == 和 equals 各打印一次
        
    }
}`,answer:`import java.util.Objects;

class Point {
    int x, y;
    Point(int x, int y) { this.x = x; this.y = y; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Point)) return false;
        Point p = (Point) o;
        return x == p.x && y == p.y;
    }

    @Override
    public int hashCode() {
        return Objects.hash(x, y);
    }
}

public class Main {
    public static void main(String[] args) {
        Point p1 = new Point(1, 2);
        Point p2 = new Point(1, 2);
        System.out.println(p1 == p2);
        System.out.println(p1.equals(p2));
    }
}`,expected:`false
true`},26:{prompt:"Stack 与 Queue：用 Deque<Integer>（ArrayDeque）当栈用：push 1,2,3 再 pop 两次打印；再当队列用：offer 4,5 再 poll 打印",starter:`import java.util.ArrayDeque;
import java.util.Deque;

public class Main {
    public static void main(String[] args) {
        Deque<Integer> stack = new ArrayDeque<>();
        // push/pop 演示

        Deque<Integer> queue = new ArrayDeque<>();
        // offer/poll 演示
        
    }
}`,answer:`import java.util.ArrayDeque;
import java.util.Deque;

public class Main {
    public static void main(String[] args) {
        Deque<Integer> stack = new ArrayDeque<>();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        System.out.println(stack.pop());
        System.out.println(stack.pop());

        Deque<Integer> queue = new ArrayDeque<>();
        queue.offer(4);
        queue.offer(5);
        System.out.println(queue.poll());
    }
}`,expected:`3
2
4`},27:{prompt:"IO 练习：用 Files.writeString 把「Java 学习笔记」写入临时文件，再用 Files.readString 读回来打印（一次体验写+读）",starter:`import java.nio.file.*;

public class Main {
    public static void main(String[] args) throws Exception {
        Path p = Path.of("note.txt");
        // writeString → readString → 打印
        
    }
}`,answer:`import java.nio.file.*;

public class Main {
    public static void main(String[] args) throws Exception {
        Path p = Path.of("note.txt");
        Files.writeString(p, "Java 学习笔记");
        String content = Files.readString(p);
        System.out.println(content);
    }
}`,expected:"Java 学习笔记"},28:{prompt:"日期时间：用 LocalDate 获取今天日期并打印；计算 2027-01-01 距今天数（ChronoUnit.DAYS.between）；用 DateTimeFormatter 把今天格式化为「yyyy年MM月dd日」打印",starter:`import java.time.*;
import java.time.temporal.ChronoUnit;
import java.time.format.DateTimeFormatter;

public class Main {
    public static void main(String[] args) {
        // today → between → format
        
    }
}`,answer:`import java.time.*;
import java.time.temporal.ChronoUnit;
import java.time.format.DateTimeFormatter;

public class Main {
    public static void main(String[] args) {
        LocalDate today = LocalDate.now();
        System.out.println(today);
        LocalDate newYear = LocalDate.of(2027, 1, 1);
        long days = ChronoUnit.DAYS.between(today, newYear);
        System.out.println("距2027元旦: " + days + "天");
        String formatted = today.format(DateTimeFormatter.ofPattern("yyyy年MM月dd日"));
        System.out.println(formatted);
    }
}`,expected:`（第一行是今天日期）
距2027元旦: XX天
2026年XX月XX日`},29:{prompt:"BigDecimal 实战：用 BigDecimal 计算 100 元分 3 人（divide 用 RoundingMode.HALF_UP 保留 2 位），打印每人金额和总和验证是否为 100",starter:`import java.math.BigDecimal;
import java.math.RoundingMode;

public class Main {
    public static void main(String[] args) {
        // 100 除以 3 → 每人金额 → 总和验证
        
    }
}`,answer:`import java.math.BigDecimal;
import java.math.RoundingMode;

public class Main {
    public static void main(String[] args) {
        BigDecimal total = new BigDecimal("100");
        BigDecimal per = total.divide(new BigDecimal("3"), 2, RoundingMode.HALF_UP);
        System.out.println("每人: " + per);
        System.out.println("总和: " + per.multiply(new BigDecimal("3")));
    }
}`,expected:`每人: 33.33
总和: 99.99`},30:{prompt:"📅 Boss 战·核心类库大 Boss：综合题——用 Map<String, List<Integer>> 存储学生多科成绩（alice: 90,85 / bob: 70,60），遍历计算每个学生的平均分并打印「alice 平均 87.5」格式",starter:`import java.util.*;

public class Main {
    public static void main(String[] args) {
        Map<String, List<Integer>> data = new HashMap<>();
        data.put("alice", List.of(90, 85));
        data.put("bob", List.of(70, 60));
        // 遍历计算平均分
        
    }
}`,answer:`import java.util.*;

public class Main {
    public static void main(String[] args) {
        Map<String, List<Integer>> data = new HashMap<>();
        data.put("alice", List.of(90, 85));
        data.put("bob", List.of(70, 60));
        for (Map.Entry<String, List<Integer>> entry : data.entrySet()) {
            List<Integer> scores = entry.getValue();
            int sum = 0;
            for (int s : scores) sum += s;
            double avg = (double) sum / scores.size();
            System.out.println(entry.getKey() + " 平均 " + avg);
        }
    }
}`,expected:`alice 平均 87.5
bob 平均 65.0`},31:{prompt:'函数式基础：List<String> names = List.of("alice", "bob", "carol"); 用 forEach + 方法引用（System.out::println）打印全部；再用 stream().map(String::toUpperCase) 收集成新 List 打印',starter:`import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<String> names = List.of("alice", "bob", "carol");
        // forEach → stream map → collect → 打印
        
    }
}`,answer:`import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<String> names = List.of("alice", "bob", "carol");
        names.forEach(System.out::println);
        List<String> upper = names.stream()
                .map(String::toUpperCase)
                .collect(Collectors.toList());
        System.out.println(upper);
    }
}`,expected:`alice
bob
carol
[ALICE, BOB, CAROL]`},32:{prompt:"Stream 流操作：List<Integer> nums = List.of(5, 12, 8, 20, 3); 用 stream 过滤出 >10 的，排序后收集打印；再用 stream 求全部数字之和（reduce 或 mapToInt）",starter:`import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<Integer> nums = List.of(5, 12, 8, 20, 3);
        // filter → sorted → collect；再求和
        
    }
}`,answer:`import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<Integer> nums = List.of(5, 12, 8, 20, 3);
        List<Integer> big = nums.stream()
                .filter(n -> n > 10)
                .sorted()
                .collect(Collectors.toList());
        System.out.println(big);
        int sum = nums.stream().mapToInt(Integer::intValue).sum();
        System.out.println("总和: " + sum);
    }
}`,expected:`[12, 20]
总和: 48`},33:{prompt:"多线程：创建一个 Thread 打印「子线程跑起来了」，main 里打印「主线程继续」后 join 等待子线程结束；体会两个线程的输出顺序",starter:`public class Main {
    public static void main(String[] args) throws InterruptedException {
        Thread t = new Thread(() -> {
            // 打印子线程消息
        });
        // start → 主线程打印 → join
        
    }
}`,answer:`public class Main {
    public static void main(String[] args) throws InterruptedException {
        Thread t = new Thread(() -> {
            System.out.println("子线程跑起来了");
        });
        t.start();
        System.out.println("主线程继续");
        t.join();
        System.out.println("子线程已结束");
    }
}`,expected:"主线程继续\\n子线程跑起来了\\n子线程已结束（前两行顺序可能互换，这就是多线程！）"},34:{prompt:"线程同步：多个线程对同一个 static int counter 各加 1000 次（不加锁），打印最终值看是否是 2000；再用 AtomicInteger 重做一遍对比",starter:`import java.util.concurrent.atomic.AtomicInteger;

public class Main {
    static int counter = 0;
    static AtomicInteger atomic = new AtomicInteger(0);

    public static void main(String[] args) throws InterruptedException {
        // 两个线程各加 1000 次，分别用 counter 和 atomic
        
    }
}`,answer:`import java.util.concurrent.atomic.AtomicInteger;

public class Main {
    static int counter = 0;
    static AtomicInteger atomic = new AtomicInteger(0);

    public static void main(String[] args) throws InterruptedException {
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                counter++;
                atomic.incrementAndGet();
            }
        });
        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                counter++;
                atomic.incrementAndGet();
            }
        });
        t1.start(); t2.start();
        t1.join(); t2.join();
        System.out.println("普通 int: " + counter);
        System.out.println("Atomic: " + atomic.get());
    }
}`,expected:`普通 int: 可能小于 2000（竞态条件！）
Atomic: 2000`},35:{prompt:"Maven 概念练习：手写一个最小 pom.xml（XML 格式打印到控制台模拟）：包含 modelVersion、groupId、artifactId、version 四个标签，用字符串拼接打印出来（体会 pom 结构，Day 36 在 IDEA 里建真的）",starter:`public class Main {
    public static void main(String[] args) {
        // 用 StringBuilder 拼出最小 pom.xml 内容并打印
        
    }
}`,answer:`public class Main {
    public static void main(String[] args) {
        StringBuilder pom = new StringBuilder();
        pom.append("<project>\\n");
        pom.append("  <modelVersion>4.0.0</modelVersion>\\n");
        pom.append("  <groupId>com.study</groupId>\\n");
        pom.append("  <artifactId>hello-maven</artifactId>\\n");
        pom.append("  <version>1.0.0</version>\\n");
        pom.append("</project>");
        System.out.println(pom);
    }
}`,expected:`<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.study</groupId>
  <artifactId>hello-maven</artifactId>
  <version>1.0.0</version>
</project>`},36:{prompt:`Web 概念热身：写一个简单的 HTTP 响应模拟器——static String response(int code, String body) 返回「HTTP/1.1 200 OK

{body}」格式的完整响应文本，打印 response(200, "你好") 和 response(404, "没找到")`,starter:`public class Main {
    static String response(int code, String body) {
        // 拼出 HTTP 响应格式
    }

    public static void main(String[] args) {
        // 打印两个响应
        
    }
}`,answer:`public class Main {
    static String response(int code, String body) {
        String status = code == 200 ? "OK" : "NOT_FOUND";
        return "HTTP/1.1 " + code + " " + status + "\\n\\n" + body;
    }

    public static void main(String[] args) {
        System.out.println(response(200, "你好"));
        System.out.println(response(404, "没找到"));
    }
}`,expected:`HTTP/1.1 200 OK

你好
HTTP/1.1 404 NOT_FOUND

没找到`},37:{prompt:'注解体会：写注解 @interface MyTodo { String value(); }，在方法上标注 @MyTodo("待实现")，再用反射读取该注解的 value 并打印（理解「注解是给机器看的注释」）',starter:`import java.lang.annotation.*;
import java.lang.reflect.Method;

@Retention(RetentionPolicy.RUNTIME)
@interface MyTodo {
    String value();
}

public class Main {
    @MyTodo("待实现")
    public void task() { }

    public static void main(String[] args) throws Exception {
        // 反射读取注解
        
    }
}`,answer:`import java.lang.annotation.*;
import java.lang.reflect.Method;

@Retention(RetentionPolicy.RUNTIME)
@interface MyTodo {
    String value();
}

public class Main {
    @MyTodo("待实现")
    public void task() { }

    public static void main(String[] args) throws Exception {
        Method m = Main.class.getMethod("task");
        MyTodo todo = m.getAnnotation(MyTodo.class);
        System.out.println("注解值: " + todo.value());
    }
}`,expected:"注解值: 待实现"},38:{prompt:"单元测试思维：写 static boolean isEven(int n)（n%2==0）；main 里写一个简易断言 static void check(boolean cond, String name)，对 isEven(4) 和 isEven(3) 分别 check，模拟 JUnit 的断言输出「PASS isEven(4)」「FAIL isEven(3)」",starter:`public class Main {
    static boolean isEven(int n) {
        // 实现
    }

    static void check(boolean cond, String name) {
        // PASS / FAIL 输出
    }

    public static void main(String[] args) {
        // 两个用例
        
    }
}`,answer:`public class Main {
    static boolean isEven(int n) {
        return n % 2 == 0;
    }

    static void check(boolean cond, String name) {
        System.out.println((cond ? "PASS" : "FAIL") + " " + name);
    }

    public static void main(String[] args) {
        check(isEven(4), "isEven(4)");
        check(isEven(3), "isEven(3)");
    }
}`,expected:`PASS isEven(4)
FAIL isEven(3)`},39:{prompt:"MySQL 概念模拟：用 Map 模拟一张 user 表（id→名字），写 static String queryById(Map<Integer,String> table, int id) 返回「SELECT 结果: xxx」或「404 未找到」——体会后端查库返回数据的逻辑",starter:`import java.util.*;

public class Main {
    static String queryById(Map<Integer, String> table, int id) {
        // 查询逻辑
    }

    public static void main(String[] args) {
        // 建表 → 查 1 → 查 99
        
    }
}`,answer:`import java.util.*;

public class Main {
    static String queryById(Map<Integer, String> table, int id) {
        String name = table.get(id);
        return name != null ? "SELECT 结果: " + name : "404 未找到";
    }

    public static void main(String[] args) {
        Map<Integer, String> table = new HashMap<>();
        table.put(1, "alice");
        table.put(2, "bob");
        System.out.println(queryById(table, 1));
        System.out.println(queryById(table, 99));
    }
}`,expected:`SELECT 结果: alice
404 未找到`},40:{prompt:"📅 终极 Boss·毕业实战：综合运用——写 Library 系统：class Book（title/borrowed 字段）、class Library（List<Book> 存储，addBook/borrowBook(找不到抛异常)/returnBook），main 里演示完整流程：加书 → 借书 → 再借同一本捕获异常 → 还书",starter:`class Book { }
class Library { }

public class Main {
    public static void main(String[] args) {
        // 完整流程演示
        
    }
}`,answer:`import java.util.*;

class Book {
    String title;
    boolean borrowed;
    Book(String title) { this.title = title; }
}

class Library {
    private List<Book> books = new ArrayList<>();

    public void addBook(String title) {
        books.add(new Book(title));
    }

    public void borrowBook(String title) {
        for (Book b : books) {
            if (b.title.equals(title) && !b.borrowed) {
                b.borrowed = true;
                System.out.println("借出: " + title);
                return;
            }
        }
        throw new IllegalStateException("无法借出: " + title);
    }

    public void returnBook(String title) {
        for (Book b : books) {
            if (b.title.equals(title) && b.borrowed) {
                b.borrowed = false;
                System.out.println("归还: " + title);
                return;
            }
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Library lib = new Library();
        lib.addBook("Java 核心技术");
        lib.borrowBook("Java 核心技术");
        try {
            lib.borrowBook("Java 核心技术");
        } catch (IllegalStateException e) {
            System.out.println("捕获: " + e.getMessage());
        }
        lib.returnBook("Java 核心技术");
    }
}`,expected:`借出: Java 核心技术
捕获: 无法借出: Java 核心技术
归还: Java 核心技术`}},E="https://liaoxuefeng.com/books/java",id={1:[{name:"📖 廖雪峰：Java 简介",url:`${E}/introduction/index.html`,type:"tutorial"},{name:"📖 廖雪峰：Java 快速入门",url:`${E}/quick-start/index.html`,type:"tutorial"},{name:"📖 廖雪峰：安装 JDK",url:`${E}/quick-start/dev-env/install-jdk/index.html`,type:"tutorial"}],2:[{name:"📖 廖雪峰：第一个 Java 程序",url:`${E}/quick-start/dev-env/first-program/index.html`,type:"tutorial"},{name:"📖 廖雪峰：变量和数据类型",url:`${E}/quick-start/basic/var-type/index.html`,type:"tutorial"},{name:"📖 廖雪峰：整数运算",url:`${E}/quick-start/basic/integer/index.html`,type:"tutorial"}],3:[{name:"📖 廖雪峰：浮点数运算",url:`${E}/quick-start/basic/float/index.html`,type:"tutorial"},{name:"📖 廖雪峰：布尔运算",url:`${E}/quick-start/basic/boolean/index.html`,type:"tutorial"},{name:"📖 廖雪峰：字符和字符串",url:`${E}/quick-start/basic/string/index.html`,type:"tutorial"}],4:[{name:"📖 廖雪峰：输入和输出",url:`${E}/quick-start/flow/input-output/index.html`,type:"tutorial"},{name:"📖 廖雪峰：if 判断 / switch",url:`${E}/quick-start/flow/if/index.html`,type:"tutorial"},{name:"📖 廖雪峰：while / do-while 循环",url:`${E}/quick-start/flow/while/index.html`,type:"tutorial"}],5:[{name:"📖 廖雪峰：for 循环 / break-continue",url:`${E}/quick-start/flow/for/index.html`,type:"tutorial"},{name:"📖 廖雪峰：遍历数组",url:`${E}/quick-start/array-op/loop/index.html`,type:"tutorial"},{name:"📖 廖雪峰：数组排序",url:`${E}/quick-start/array-op/sort/index.html`,type:"tutorial"}],6:[{name:"📖 廖雪峰：多维数组",url:`${E}/quick-start/array-op/multi-dim/index.html`,type:"tutorial"},{name:"📖 廖雪峰：方法（oop/basic/method）",url:`${E}/oop/basic/method/index.html`,type:"tutorial"},{name:"📖 廖雪峰：方法重载",url:`${E}/oop/basic/overload/index.html`,type:"tutorial"}],7:[{name:"📖 廖雪峰：可变参数",url:`${E}/oop/basic/method/index.html`,type:"tutorial"},{name:"📖 廖雪峰：作用域 / classpath 和 jar",url:`${E}/oop/basic/scope/index.html`,type:"tutorial"}],8:[{name:"📖 廖雪峰：字符串和编码",url:`${E}/oop/core/string-encoding/index.html`,type:"tutorial"}],9:[{name:"📖 廖雪峰：StringBuilder",url:`${E}/oop/core/stringbuilder/index.html`,type:"tutorial"},{name:"📖 廖雪峰：StringJoiner",url:`${E}/oop/core/stringjoiner/index.html`,type:"tutorial"}],10:[{name:"📖 廖雪峰：包装类型",url:`${E}/oop/core/wrapper/index.html`,type:"tutorial"},{name:"📖 廖雪峰：JavaBean / 枚举",url:`${E}/oop/core/javabean/index.html`,type:"tutorial"}],11:[{name:"📖 廖雪峰：Java 核心类目录",url:`${E}/oop/core/index.html`,type:"tutorial"},{name:"🔧 OnlineGDB 在线运行",url:"https://www.onlinegdb.com/",type:"tool"}],12:[{name:"📖 廖雪峰：面向对象基础",url:`${E}/oop/basic/index.html`,type:"tutorial"},{name:"📖 廖雪峰：构造方法",url:`${E}/oop/basic/constructor/index.html`,type:"tutorial"}],13:[{name:"📖 廖雪峰：继承",url:`${E}/oop/basic/inherit/index.html`,type:"tutorial"},{name:"📖 廖雪峰：多态",url:`${E}/oop/basic/polymorphic/index.html`,type:"tutorial"}],14:[{name:"📖 廖雪峰：抽象类",url:`${E}/oop/basic/abstract-class/index.html`,type:"tutorial"}],15:[{name:"📖 廖雪峰：接口",url:`${E}/oop/basic/interface/index.html`,type:"tutorial"},{name:"📖 廖雪峰：静态字段和静态方法",url:`${E}/oop/basic/static/index.html`,type:"tutorial"}],16:[{name:"📖 廖雪峰：包",url:`${E}/oop/basic/package/index.html`,type:"tutorial"},{name:"📖 廖雪峰：内部类",url:`${E}/oop/basic/inner-class/index.html`,type:"tutorial"}],17:[{name:"📖 廖雪峰：Java 核心类",url:`${E}/oop/core/index.html`,type:"tutorial"},{name:"📖 廖雪峰：BigInteger",url:`${E}/oop/core/biginteger/index.html`,type:"tutorial"}],18:[{name:"📖 廖雪峰：异常处理",url:`${E}/exception/index.html`,type:"tutorial"},{name:"📖 廖雪峰：捕获异常",url:`${E}/exception/try-catch/index.html`,type:"tutorial"}],19:[{name:"📖 廖雪峰：抛出异常",url:`${E}/exception/throw/index.html`,type:"tutorial"},{name:"📖 廖雪峰：自定义异常",url:`${E}/exception/custom-exception/index.html`,type:"tutorial"}],20:[{name:"📖 廖雪峰：使用 JDK Logging",url:`${E}/exception/jdk-logging/index.html`,type:"tutorial"},{name:"📖 廖雪峰：使用 SLF4J 和 Logback",url:`${E}/exception/slf4j-logback/index.html`,type:"tutorial"}],21:[{name:"📖 廖雪峰：断言",url:`${E}/exception/assert/index.html`,type:"tutorial"},{name:"🔧 OnlineGDB 在线运行",url:"https://www.onlinegdb.com/",type:"tool"}],22:[{name:"📖 廖雪峰：什么是泛型",url:`${E}/generics/what-is-generics/index.html`,type:"tutorial"},{name:"📖 廖雪峰：使用泛型",url:`${E}/generics/use-generics/index.html`,type:"tutorial"}],23:[{name:"📖 廖雪峰：Java 集合简介",url:`${E}/collection/quick-start/index.html`,type:"tutorial"},{name:"📖 廖雪峰：使用 List",url:`${E}/collection/list/index.html`,type:"tutorial"}],24:[{name:"📖 廖雪峰：使用 Map",url:`${E}/collection/map/index.html`,type:"tutorial"},{name:"📖 廖雪峰：使用 Properties",url:`${E}/collection/properties/index.html`,type:"tutorial"}],25:[{name:"📖 廖雪峰：编写 equals 方法",url:`${E}/collection/equals/index.html`,type:"tutorial"},{name:"📖 廖雪峰：编写 hashCode 方法",url:`${E}/collection/hashcode/index.html`,type:"tutorial"}],26:[{name:"📖 廖雪峰：使用 Stack",url:`${E}/collection/stack/index.html`,type:"tutorial"},{name:"📖 廖雪峰：使用 Deque / Queue",url:`${E}/collection/deque/index.html`,type:"tutorial"}],27:[{name:"📖 廖雪峰：使用 Files",url:`${E}/io/files/index.html`,type:"tutorial"},{name:"📖 廖雪峰：IO 目录",url:`${E}/io/index.html`,type:"tutorial"}],28:[{name:"📖 廖雪峰：LocalDateTime",url:`${E}/datetime/local-datetime/index.html`,type:"tutorial"},{name:"📖 廖雪峰：DateTimeFormatter",url:`${E}/datetime/datetime-formatter/index.html`,type:"tutorial"}],29:[{name:"📖 廖雪峰：BigDecimal",url:`${E}/oop/core/bigdecimal/index.html`,type:"tutorial"}],30:[{name:"📖 廖雪峰：集合目录",url:`${E}/collection/index.html`,type:"tutorial"},{name:"📖 廖雪峰：使用 Set / Iterator",url:`${E}/collection/set/index.html`,type:"tutorial"},{name:"🔧 OnlineGDB 在线运行",url:"https://www.onlinegdb.com/",type:"tool"}],31:[{name:"📖 廖雪峰：Lambda 基础",url:`${E}/functional/basic/index.html`,type:"tutorial"},{name:"📖 廖雪峰：方法引用",url:`${E}/functional/method-ref/index.html`,type:"tutorial"}],32:[{name:"📖 廖雪峰：使用 Stream",url:`${E}/functional/stream/index.html`,type:"tutorial"},{name:"📖 廖雪峰：map / filter / reduce",url:`${E}/functional/stream/map/index.html`,type:"tutorial"}],33:[{name:"📖 廖雪峰：多线程基础",url:`${E}/threading/basic/index.html`,type:"tutorial"},{name:"📖 廖雪峰：创建新线程",url:`${E}/threading/new-thread/index.html`,type:"tutorial"}],34:[{name:"📖 廖雪峰：线程同步",url:`${E}/threading/synchronize/index.html`,type:"tutorial"},{name:"📖 廖雪峰：使用 Atomic",url:`${E}/threading/synchronize/atomic/index.html`,type:"tutorial"}],35:[{name:"📖 廖雪峰：Maven 介绍",url:`${E}/maven/basic/index.html`,type:"tutorial"},{name:"📖 廖雪峰：依赖管理",url:`${E}/maven/dependency/index.html`,type:"tutorial"}],36:[{name:"📖 廖雪峰：Web 基础",url:`${E}/web/basic/index.html`,type:"tutorial"},{name:"📖 廖雪峰：HTTP 编程",url:`${E}/network/http/index.html`,type:"tutorial"}],37:[{name:"📖 廖雪峰：注解",url:`${E}/annotation/index.html`,type:"tutorial"},{name:"📖 廖雪峰：反射",url:`${E}/reflection/index.html`,type:"tutorial"}],38:[{name:"📖 廖雪峰：编写 JUnit 测试",url:`${E}/unit-test/junit-test/index.html`,type:"tutorial"},{name:"📖 JUnit 官方文档",url:"https://junit.org/junit5/",type:"doc"}],39:[{name:"📖 廖雪峰：JDBC 简介",url:`${E}/jdbc/basic/index.html`,type:"tutorial"},{name:"📖 廖雪峰：JDBC 查询",url:`${E}/jdbc/query/index.html`,type:"tutorial"},{name:"📖 MyBatis-Plus 中文文档",url:"https://baomidou.com/",type:"doc"}],40:[{name:"📖 廖雪峰：Spring Boot 第一个应用",url:`${E}/springboot/first-webapp/index.html`,type:"tutorial"},{name:"📖 廖雪峰：使用 REST",url:`${E}/spring/web/rest/index.html`,type:"tutorial"},{name:"🚀 RuoYi-Vue 源码（毕业下一步）",url:"https://github.com/yangzongzhuan/RuoYi-Vue",type:"repo"},{name:"🔧 OnlineGDB 在线运行",url:"https://www.onlinegdb.com/",type:"tool"}]},ss={doc:"官方文档",tutorial:"教程",tool:"工具",repo:"源码"},sd={tagline:"30 天从 TS 前端到 Go 后端：用你熟悉的前端思维啃下 Gopher 之路"},ld=[{d:1,tag:"工具链",t:"环境搭建与 Hello World",desc:"安装 Go、初始化 go.mod，写出第一个 main.go 并用 go run / go build 运行。",xp:30,lesson:{points:["go.mod 相当于 package.json：记录模块名和依赖版本，go get ≈ npm install。","程序入口固定为 main 包里的 main() 函数，等价于前端的 index.tsx。","go run main.go = 临时编译并执行；go build 产出单个二进制，部署时没有 node_modules。","gofmt / go vet 内置，相当于 ESLint + Prettier 官方开箱即用，且格式化风格全国统一。","多文件同属一个 package，导出标识符首字母大写即可（没有 export 关键字）。"],code:`package main

import "fmt"

func main() {
    fmt.Println("Hello, Gopher!")
}`,analogy:"go.mod ≈ package.json，go.sum ≈ package-lock.json，$GOPATH 时代的 PATH 遗留问题不用管。编译成单二进制 ≈ 你把整个 node 生态打包成一个可执行文件。"},links:[{name:"Download and install - go.dev",url:"https://go.dev/doc/install",type:"doc"},{name:"Go Playground 在线运行",url:"https://go.dev/play/",type:"playground"},{name:"Effective Go 入门",url:"https://go.dev/doc/effective_go",type:"doc"}]},{d:2,tag:"基础语法",t:"变量、常量与基本类型",desc:"var/:=/const、零值系统、iota 枚举，理解 Go 的类型默认零值。",xp:30,lesson:{points:["a := 1 短声明只能在函数内用，等价于 let a = 1（但类型固定不可再赋别的类型）。",'Go 没有未初始化的 undefined：int 零值是 0，string 是 ""，bool 是 false，指针是 nil。',"声明未使用的局部变量和未使用的 import 都会编译报错——编译器强制你写干净代码。","const 一组常量配合 iota 可以做枚举，类似 TS 的 enum 但底层只是常量。","float 统一推荐 float64；整型和 JS 不同没有 Number 的双精度模糊问题。"],code:`package main

import "fmt"

type Role int

const (
    Admin Role = iota // 0
    Editor            // 1
    Viewer            // 2
)

func main() {
    var count int      // 0
    name := "gopher"   // 短声明
    const version = "1.22"
    fmt.Println(count, name, version, Editor)
}`,analogy:":= 像 let + 类型推断；零值像你给每个 useState 都写了默认值；iota 枚举 ≈ TS 的 const enum，但没有运行时对象。"},links:[{name:"Tour of Go: Basics",url:"https://go.dev/tour/basics/1",type:"doc"},{name:"Go by Example: Variables",url:"https://gobyexample.com/variables",type:"article"}]},{d:3,tag:"基础语法",t:"控制流：if / for / switch",desc:"Go 只有一种 for 循环；if 和 switch 可以带初始化语句。",xp:30,lesson:{points:["没有 while，for i := 0; i < n; i++ / for cond / for {} 三种形态全覆盖。","遍历用 for i, v := range xs，同时拿到下标和值，像 Array.prototype.forEach 但能 break/continue。","if err != nil { ... } 是 Go 最高频的模式，先写好这个肌肉记忆。","if v := f(); v > 0 { } —— 条件前可带一条初始化语句，作用域限定在 if 块内。","switch 默认每 case 自动 break，要穿透写 fallthrough；case 可以是表达式甚至无 switch 变量（switch { case x > 0: ... }）。"],code:`package main

import "fmt"

func main() {
    xs := []string{"a", "b", "c"}
    for i, v := range xs {
        fmt.Println(i, v)
    }

    if n := len(xs); n > 2 {
        fmt.Println("够长了:", n)
    }

    switch {
    case n > 5:
        fmt.Println("很多")
    default:
        fmt.Println("一般")
    }
}`,analogy:"for...range ≈ for...of + entries() 合体；if 带初始化像把 const 临时变量放进 JSX 的 IIFE 里用完即弃。"},links:[{name:"Go by Example: For",url:"https://gobyexample.com/for",type:"article"},{name:"Go by Example: Switch",url:"https://gobyexample.com/switch",type:"article"}]},{d:4,tag:"静态类型",t:"类型系统与复合类型",desc:"强静态类型、数组与切片的区别、map 基本用法、类型别名 vs 定义类型。",xp:35,lesson:{points:["Go 是结构性弱一点的 nominal typing：type Meters float64 定义了新类型，不会自动和 float64 混用。","数组 [3]int 长度是类型的一部分，实际极少用；日常用切片 []int（类似动态数组）。","map[string]int 声明后必须 make 初始化才能写（nil map 只读不崩）。","不存在隐式类型转换：int + float64 编译报错，必须显式 float64(i)。","泛型（Go 1.18+）：func Map[T, U any](xs []T, f func(T) U) []U，类似 TS 的泛型函数。"],code:`package main

import "fmt"

func main() {
    var m map[string]int = make(map[string]int)
    m["views"] = 42

    scores := []int{90, 85, 70}
    total := 0
    for _, s := range scores {
        total += s
    }
    fmt.Println(m["views"], total/len(scores))
}`,analogy:"map ≈ Record<string, number> 的运行时真身；切片 ≈ Array，数组 ≈ 元组 tuple（固定长度还参与类型）。泛型约束 any ≈ unknown 的宽松版。"},links:[{name:"Go by Example: Slices",url:"https://gobyexample.com/slices",type:"article"},{name:"Go by Example: Maps",url:"https://gobyexample.com/maps",type:"article"},{name:"Go 泛型教程",url:"https://go.dev/blog/intro-generics",type:"article"}]},{d:5,tag:"静态类型",t:"指针、值语义与引用语义",desc:"Go 有指针但没有指针运算；理解方法该用值接收者还是指针接收者的前置知识。",xp:35,lesson:{points:["&x 取地址，*p 解引用；没有 -> 也没有指针算术，比 C 安全得多。","Go 函数传参全部是值拷贝：传结构体会复制整个结构体，和 JS 传引用完全不同！","想让函数修改外部数据就传指针 *T，类似你在 React 里 setState 替换而不是 mutate。","slice/map/channel 底层是含指针的结构，传值拷贝但仍共享底层数据——表现得像 JS 引用。","new(T) 返回 *T 零值指针，&T{} 更常用。"],code:`package main

import "fmt"

func bump(p *int) {
    *p++
}

func main() {
    n := 1
    bump(&n)
    fmt.Println(n) // 2

    s := []int{1, 2}
    m := map[string]int{"a": 1}
    mutate(s, m)   // 共享底层，会被改
    fmt.Println(s, m)
}

func mutate(s []int, m map[string]int) {
    s[0] = 99
    m["b"] = 2
}`,analogy:"基本类型传值 ≈ JS 的 number/string 拷贝；slice/map 共享底层 ≈ JS 对象数组传引用。指针 ≈ 拿到 MutableRef 而不是快照。"},links:[{name:"Go by Example: Pointers",url:"https://gobyexample.com/pointers",type:"article"},{name:"Tour of Go: Pointers",url:"https://go.dev/tour/moretypes/1",type:"doc"}]},{d:6,tag:"函数",t:"函数与多返回值",desc:"多返回值、命名返回值、可变参数、函数是一等公民。",xp:35,lesson:{points:["func div(a, b int) (int, error) —— 结果+错误双返回是 Go 的核心惯用法，没有异常语法。","命名返回值 (sum, avg int) 相当于提前声明变量，直接 return 会返回当前值（文档化用途，别滥用）。","defer 注册的调用在函数返回前执行（LIFO），最常用于解锁/关文件，像 finally 但更灵活。","参数可变 func sum(nums ...int) int，内部 nums 是切片，对应 TS 的 rest 参数。","函数是值，可以存变量、传参、当返回值；闭包行为和你熟悉的一样。"],code:`package main

import (
    "errors"
    "fmt"
)

func div(a, b int) (int, error) {
    if b == 0 {
        return 0, errors.New("除数不能为 0")
    }
    return a / b, nil
}

func main() {
    defer fmt.Println("最后执行（defer）")
    q, err := div(10, 2)
    if err != nil {
        fmt.Println("出错了:", err)
        return
    }
    fmt.Println(q)
}`,analogy:"多返回值 ≈ 返回 { value, error } 对象但解构免写；defer ≈ useEffect 的 cleanup，作用域是函数而不是组件；...int ≈ (...nums: number[])。"},links:[{name:"Go by Example: Multiple Return Values",url:"https://gobyexample.com/multiple-return-values",type:"article"},{name:"Go by Example: Defer",url:"https://gobyexample.com/defer",type:"article"}]},{d:7,tag:"切片",t:"切片进阶：append、扩容与共享底层数组",desc:"len/cap、append 返回新切片、copy、切片表达式引发的经典 bug。",xp:40,lesson:{points:["切片 = {指针, len, cap} 三元组；cap 是底层数组容量，append 超过 cap 会换新数组。","append 可能返回新切片，必须 s = append(s, x) 接住返回值，不能忽略。","xs[1:3] 共享底层数组！对子切片写会影响原切片——前端里 Array.prototype.slice 会拷贝，这里不会。","要独立拷贝用 copy(dst, src) 或 append([]T(nil), src...)。","make([]int, 0, 100) 预分配容量，避免反复扩容——热路径优化常识。"],code:`package main

import "fmt"

func main() {
    s := make([]int, 0, 4)
    s = append(s, 1, 2, 3)
    fmt.Println(len(s), cap(s))

    sub := s[0:2]      // 共享底层数组
    sub[0] = 99
    fmt.Println(s[0])  // 99 被影响了！

    cp := append([]int(nil), s...) // 深拷贝一层
    cp[0] = 0
    fmt.Println(s[0])  // 仍是 99
}`,analogy:"slice ≈ 一个带 length/capacity 的 TypedArray 视图；s[0:2] 更像 Buffer.subarray（共享内存）而不是 slice()（拷贝）。"},links:[{name:"Go Slices: usage and internals",url:"https://go.dev/blog/slices-intro",type:"article"},{name:"Go by Example: Range",url:"https://gobyexample.com/range",type:"article"}]},{d:8,tag:"映射",t:"map 深入：遍历顺序、存在性检查与删除",desc:"comma-ok 惯用法、map 不是并发安全、set 的模拟。",xp:40,lesson:{points:["v, ok := m[key] —— ok 表示 key 是否存在，零值歧义全靠它解决。","map 遍历顺序是随机化的（故意的，防止依赖顺序），要有序就先收集 key 再 sort。","map 本身无并发保护，多 goroutine 读写会直接 panic；并发场景用 sync.Map 或加锁。","delete(m, key) 删除；把值设为零值 ≠ 删除。","模拟 Set：map[string]struct{}（struct{} 零字节），惯用法。"],code:`package main

import "fmt"

func main() {
    tags := map[string]struct{}{"react": {}, "go": {}}

    if _, ok := tags["go"]; ok {
        fmt.Println("有 go 标签")
    }
    delete(tags, "react")

    keys := make([]string, 0, len(tags))
    for k := range tags {
        keys = append(keys, k)
    }
    fmt.Println(keys)
}`,analogy:"comma-ok ≈ TS 里区分 undefined 和不存在的 key（in 操作符）；map[string]struct{} ≈ new Set()；range map 乱序 ≈ Object.keys 在 Go 被官方洗牌。"},links:[{name:"Go by Example: Maps（含 comma-ok）",url:"https://gobyexample.com/maps",type:"article"},{name:"Go maps in action",url:"https://go.dev/blog/maps",type:"article"}]},{d:9,tag:"结构体",t:"结构体：Go 的“对象”",desc:"定义、字面量、嵌入（组合优于继承）、JSON tag。",xp:40,lesson:{points:["struct 是字段的集合，没有 class；行为挂在方法上（明天讲）。",'字面量必须带字段名 User{Name: "a"}，不写字段名的是"位置初始化"，lint 会骂。','嵌入 type Base struct{} 后 User{Base} 直接"继承"字段和方法——这是组合，没有 super 关键字。','json tag `json:"userName"` 控制序列化字段名，类比 TS 的 @Serialize 装饰器或 key 映射。',"结构体比较：字段全部可比较才可用 ==；含 slice/map 的结构体不能 ==。"],code:`package main

import (
    "encoding/json"
    "fmt"
)

type Base struct {
    ID        int
    CreatedAt string
}

type Post struct {
    Base
    Title string \`json:"title"\`
    Views int    \`json:"views,omitempty"\`
}

func main() {
    p := Post{Base: Base{ID: 1, CreatedAt: "today"}, Title: "hi"}
    fmt.Println(p.ID) // 直接访问嵌入字段
    b, _ := json.Marshal(p)
    fmt.Println(string(b))
}`,analogy:"struct ≈ interface + 实现合一的 TS 类型；嵌入 ≈ mixin 组合而非 extends；json tag ≈ zod schema 的字段映射/omit。"},links:[{name:"Go by Example: Structs",url:"https://gobyexample.com/structs",type:"article"},{name:"Go by Example: JSON",url:"https://gobyexample.com/json",type:"article"}]},{d:10,tag:"方法",t:"方法与接收者",desc:"值接收者 vs 指针接收者、构造函数惯例 NewXxx、方法即语法糖。",xp:40,lesson:{points:["func (u User) Rename() 是值接收者（拷贝副本），func (u *User) Rename() 是指针接收者（可改原值）。","规则：需要修改接收者、或结构体大、或已有一个指针接收者方法 → 全部用指针接收者，保持一致。","Go 没有 constructor，惯例是 func NewUser(name string) *User 工厂函数。","方法就是语法糖：u.Rename() ≈ Rename(&u)，方法值/方法表达式偶尔有用。","同包内不能对非本地类型定义方法——要扩展别人的类型只能组合或写函数。"],code:`package main

import "fmt"

type Counter struct {
    n int
}

func NewCounter() *Counter { return &Counter{} }

func (c *Counter) Inc() { c.n++ }
func (c Counter) Value() int { return c.n }

func main() {
    c := NewCounter()
    c.Inc()
    c.Inc()
    fmt.Println(c.Value()) // 2
}`,analogy:"值/指针接收者 ≈ useState 快照 vs useRef 持有可变对象；NewXxx ≈ 工厂函数 createXxx()，因为 Go 没有 new 关键字风格。"},links:[{name:"Go by Example: Methods",url:"https://gobyexample.com/methods",type:"article"},{name:"Tour of Go: Methods",url:"https://go.dev/tour/methods/1",type:"doc"}]},{d:11,tag:"接口",t:"接口：隐式实现的鸭子类型",desc:"小接口哲学、io.Reader/Writer、nil 接口陷阱。",xp:45,lesson:{points:["实现接口不需要 implements 声明——只要方法集匹配就自动满足，TypeScript 的结构化类型的运行时版。","接口越小越好：io.Reader 只有 Read 一个方法；std 接口大量组合（io.ReadWriteCloser）。","fmt.Stringer 接口（String() string）≈ JS 的 toString / Symbol.toStringTag。","经典陷阱：接口变量 == nil 需要类型和值都为 nil；把 *T(nil) 装进接口后接口不等于 nil。","类型断言 v, ok := i.(T)；switch i.(type) 做类型分支，类似 ts 的 narrow 但发生在运行时。"],code:`package main

import (
    "fmt"
    "strings"
)

type Greeter interface {
    Greet() string
}

type Dev struct{ Name string }

func (d Dev) Greet() string { return "hi " + d.Name }

func say(g Greeter) { fmt.Println(g.Greet()) }

func main() {
    say(Dev{Name: "gopher"})
    // strings.Reader 也满足 io.Reader —— 隐式实现
    var r = strings.NewReader("abc")
    buf := make([]byte, 2)
    n, _ := r.Read(buf)
    fmt.Println(n, string(buf))
}`,analogy:"隐式接口 ≈ TS structural typing 直接落地到运行时，不用写 implements；io.Reader ≈ 一个只有 read() 方法的最小接口契约，整个标准库围绕它组合。"},links:[{name:"Go by Example: Interfaces",url:"https://gobyexample.com/interfaces",type:"article"},{name:"The Laws of Reflection（接口底层）",url:"https://go.dev/blog/laws-of-reflection",type:"article"}]},{d:12,tag:"接口",t:"组合与依赖注入",desc:"接口做抽象层、组合接口、mock 测试的思路。",xp:45,lesson:{points:["接受接口，返回具体类型（Accept interfaces, return structs）——前端里就是组件 props 用 interface。","接口组合：type ReadWriter interface { io.Reader; io.Writer }，像 TS 的交叉类型。","函数里依赖接口而不是具体实现，测试时注入 fake —— 手写 DI，不需要装饰器容器。","空接口 any 能装一切（Go 1.18 后 interface{} 别名 any），等价于 unknown，尽量少用。",'标准库大量"先定义接口再组合"：http.Handler、sort.Interface（现在多被 slices 包替代）。'],code:`package main

import "fmt"

type Store interface {
    Get(key string) (string, bool)
}

type memStore map[string]string

func (m memStore) Get(k string) (string, bool) {
    v, ok := m[k]
    return v, ok
}

func serve(s Store, key string) {
    if v, ok := s.Get(key); ok {
        fmt.Println("found:", v)
    } else {
        fmt.Println("miss")
    }
}

func main() {
    serve(memStore{"a": "1"}, "a")
    serve(memStore{}, "a") // 测试时的 fake 实现
}`,analogy:"accept interfaces ≈ React 组件只依赖 props 类型而非实现；DI ≈ 你在测试里 mock fetch 传 fake 客户端，Go 版就是传 fake struct。"},links:[{name:"Go Code Review: 接口设计建议",url:"https://go.dev/wiki/CodeReviewComments#interfaces",type:"doc"},{name:"Go by Example: Struct Embedding",url:"https://gobyexample.com/struct-embedding",type:"article"}]},{d:13,tag:"错误处理",t:"error 接口、errors.Is/As 与 wrap",desc:"errors.New/fmt.Errorf、%w 包装、哨兵错误与自定义错误类型。",xp:45,lesson:{points:["error 是一个只有一个 Error() string 方法的接口，错误就是值，没有 try/catch。",'fmt.Errorf("load user %d: %w", id, err) 用 %w 包装错误保留链，类似给 Error 加 cause。',"errors.Is(err, ErrNotFound) 判断链上是否有哨兵错误；errors.As 提取自定义错误类型。",'哨兵错误：var ErrNotFound = errors.New("not found")，≈ 常量错误码，但可 ==/Is 比较。',"panic 只用于程序不可继续的 bug，不要当异常用；recover 只在 defer 里有效。"],code:`package main

import (
    "errors"
    "fmt"
)

var ErrNotFound = errors.New("not found")

func findUser(id int) (string, error) {
    if id != 1 {
        return "", fmt.Errorf("query user %d: %w", id, ErrNotFound)
    }
    return "gopher", nil
}

func main() {
    _, err := findUser(2)
    if errors.Is(err, ErrNotFound) {
        fmt.Println("是未找到错误:", err)
    }
}`,analogy:"error 是值 ≈ 你在 TS 里返回 Result<T, E> 而不是 throw；%w 包装 ≈ new Error(msg, { cause: err })；errors.Is ≈ if (e.code === NOT_FOUND)。"},links:[{name:"Go Blog: Error handling and Go",url:"https://go.dev/blog/errors-are-values",type:"article"},{name:"Go by Example: Errors",url:"https://gobyexample.com/errors",type:"article"}]},{d:14,tag:"并发",t:"goroutine 与 WaitGroup",desc:"go 关键字启动协程、sync.WaitGroup 等待、协程泄漏意识。",xp:50,lesson:{points:["go f() 启动 goroutine，极轻量（KB 级栈），开 10 万个都行——比 Web Worker 便宜几个数量级。","main 返回时所有 goroutine 直接被杀，所以需要 WaitGroup/通道同步。","wg.Add(1) 计数，goroutine 里 defer wg.Done()，wg.Wait() 阻塞到 0。","for 循环变量 Go 1.22 前是复用的，闭包捕获要小心（1.22+ 每次迭代新变量）。","无同步地并发写共享变量 = data race，用 go run -race 检测。"],code:`package main

import (
    "fmt"
    "sync"
)

func main() {
    var wg sync.WaitGroup
    for i := 1; i <= 5; i++ {
        wg.Add(1)
        go func(n int) {
            defer wg.Done()
            fmt.Println("worker", n)
        }(i)
    }
    wg.Wait()
    fmt.Println("全部完成")
}`,analogy:"goroutine ≈ 极廉价的 worker thread；WaitGroup ≈ Promise.all 的手动计数版：Add=创建 promise，Done=resolve，Wait=await all。"},links:[{name:"Go by Example: Goroutines",url:"https://gobyexample.com/goroutines",type:"article"},{name:"Go by Example: WaitGroups",url:"https://gobyexample.com/waitgroups",type:"article"}]},{d:15,tag:"并发",t:"channel：goroutine 之间的管道",desc:"无缓冲/有缓冲 channel、发送接收、关闭与 range、只读只写方向。",xp:50,lesson:{points:["ch := make(chan int)：无缓冲=同步交接（发送方阻塞到有人收）；make(chan int, 5) 有缓冲队列。","ch <- v 发送，v := <-ch 接收；向 nil channel 发送/接收永久阻塞，close(ch) 后接收返回零值。","v, ok := <-ch 的 ok=false 表示 channel 已关闭且排空——用它判断结束。","for v := range ch 循环接收直到关闭，像消费一个异步迭代器。","参数方向约束：func produce(ch chan<- int) 只能发，func consume(ch <-chan int) 只能收，编译期防止误用。"],code:`package main

import "fmt"

func produce(ch chan<- int) {
    for i := 1; i <= 3; i++ {
        ch <- i
    }
    close(ch)
}

func main() {
    ch := make(chan int)
    go produce(ch)
    for v := range ch { // 消费到 close
        fmt.Println(v)
    }
}`,analogy:"channel ≈ 一个自带背压的 Stream/Subject：无缓冲像同步 handoff，有缓冲像 buffer(5) 的队列；close+range ≈ async iterator 的 done。"},links:[{name:"Go by Example: Channels",url:"https://gobyexample.com/channels",type:"article"},{name:"Share Memory By Communicating",url:"https://go.dev/blog/codelab-share",type:"article"}]},{d:16,tag:"并发",t:"select 与并发模式",desc:"select 多路复用、超时、worker pool、pipeline、扇入扇出。",xp:50,lesson:{points:["select 同时等待多个 channel，谁就绪走谁；都阻塞时走 default（非阻塞尝试）。","超时模式：select + time.After(2*time.Second)，≈ Promise.race([task, timeout])。","worker pool：固定数量 goroutine 从 jobs channel 取任务写入 results channel。","done channel 或 context 用于通知退出，防止 goroutine 泄漏。","pipeline：生成者 -> 处理 -> 消费者 各自独立 goroutine 用 channel 串联。"],code:`package main

import (
    "fmt"
    "time"
)

func main() {
    ch := make(chan string)
    go func() {
        time.Sleep(time.Second)
        ch <- "慢结果"
    }()

    select {
    case v := <-ch:
        fmt.Println(v)
    case <-time.After(2 * time.Second):
        fmt.Println("超时了")
    }
}`,analogy:"select ≈ Promise.race 的常驻多路版 + case 语法；time.After 超时 ≈ AbortController+race；worker pool ≈ p-limit 并发限流。"},links:[{name:"Go by Example: Select",url:"https://gobyexample.com/select",type:"article"},{name:"Go Concurrency Patterns (Pike)",url:"https://go.dev/talks/2012/concurrency.slide",type:"article"}]},{d:17,tag:"sync",t:"sync 包：Mutex、Once、atomic",desc:"共享内存的锁保护、sync.Once 单例、race detector。",xp:50,lesson:{points:['Go 哲学："不要通过共享内存来通信，而要通过通信来共享内存"——channel 优先，锁兜底。',"var mu sync.Mutex；mu.Lock() / defer mu.Unlock() 保护临界区；RWMutex 读多写少时用。","sync.Once.Do(f) 全局只执行一次，≈ 模块级单例初始化。","sync.WaitGroup、sync.Map、atomic.AddInt64 都是并发原语；简单计数用 atomic 更快。","go test -race / go run -race 是查数据 race 的标配工具，CI 里必开。"],code:`package main

import (
    "fmt"
    "sync"
)

func main() {
    var (
        mu    sync.Mutex
        count int
        wg    sync.WaitGroup
    )
    for i := 0; i < 100; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            mu.Lock()
            count++
            mu.Unlock()
        }()
    }
    wg.Wait()
    fmt.Println(count) // 一定是 100
}`,analogy:"Mutex ≈ 你给 shared state 加的锁；sync.Once ≈ 单例惰性初始化（库里 getStore() 只建一次）；-race ≈ 给 JS 的 SharedArrayBuffer 开线程检查。"},links:[{name:"Go by Example: Mutexes",url:"https://gobyexample.com/mutexes",type:"article"},{name:"Introducing the Go Race Detector",url:"https://go.dev/blog/race-detector",type:"article"}]},{d:18,tag:"context",t:"context：取消、超时与请求作用域",desc:"Context 传递取消信号、WithTimeout/WithCancel、ctx 作为第一参数。",xp:50,lesson:{points:["context.Context 永远是函数第一个参数，命名 ctx，贯穿整条调用链。","ctx.Done() 返回一个 channel，取消或超时时关闭——配合 select 使用。","context.WithTimeout(parent, 3*time.Second) ≈ 给下游请求加 AbortSignal.timeout。","ctx.Err() 在取消后返回 context.DeadlineExceeded / Canceled。","WithValue 可以塞请求级数据（trace id），但只建议放元数据不放业务参数。"],code:`package main

import (
    "context"
    "fmt"
    "time"
)

func slowWork(ctx context.Context) error {
    select {
    case <-time.After(5 * time.Second):
        return nil
    case <-ctx.Done():
        return ctx.Err()
    }
}

func main() {
    ctx, cancel := context.WithTimeout(context.Background(), time.Second)
    defer cancel()
    if err := slowWork(ctx); err != nil {
        fmt.Println("中断:", err) // context deadline exceeded
    }
}`,analogy:"ctx ≈ AbortSignal + 请求作用域 store 合体；WithTimeout ≈ AbortSignal.timeout(3000)；ctx.Done() ≈ signal 的 abort 事件。"},links:[{name:"Go Blog: Context and structs",url:"https://go.dev/blog/context",type:"article"},{name:"Go by Example: Context",url:"https://gobyexample.com/context",type:"article"}]},{d:19,tag:"标准库",t:"net/http 服务端：Handler 与中间件",desc:"http.HandlerFunc、ServeMux 路由（1.22 新语法）、中间件即函数组合。",xp:55,lesson:{points:["任何 func(w http.ResponseWriter, r *http.Request) 都能当 handler——一个接口两个参数。",'http.HandleFunc("GET /api/users/{id}", h)：Go 1.22+ 内置方法匹配和路径参数，r.PathValue("id")。',"中间件 = func(next http.Handler) http.Handler，返回包了 next 的 Handler，洋葱模型和 Express/Koa 一样。",'http.ListenAndServe(":8080", mux) 一行起服务；生产用 http.Server{ReadTimeout: ...} 配置版。',"json.NewDecoder(r.Body).Decode(&v) 读请求体，json.NewEncoder(w).Encode(v) 写响应。"],code:`package main

import (
    "encoding/json"
    "log"
    "net/http"
)

func logging(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        log.Println(r.Method, r.URL.Path)
        next.ServeHTTP(w, r)
    })
}

func main() {
    mux := http.NewServeMux()
    mux.HandleFunc("GET /api/hello/{name}", func(w http.ResponseWriter, r *http.Request) {
        json.NewEncoder(w).Encode(map[string]string{
            "hi": r.PathValue("name"),
        })
    })
    log.Fatal(http.ListenAndServe(":8080", logging(mux)))
}`,analogy:'ServeMux ≈ Express 的 app.get("/api/:id")；中间件签名 func(next Handler) Handler ≈ Koa 的 compose 洋葱；Encode/Decode ≈ res.json() / body-parser。'},links:[{name:"Go by Example: HTTP Servers",url:"https://gobyexample.com/http-servers",type:"article"},{name:"Go 1.22 ServeMux 新路由",url:"https://go.dev/blog/routing-enhancements",type:"article"}]},{d:20,tag:"标准库",t:"net/http 客户端 + time/strings/strconv",desc:"http.Get 与 http.Client 超时、time 包、常用字符串/数字转换。",xp:55,lesson:{points:["http.Get 一把梭很方便，但生产必须用自定义 http.Client{Timeout: 5*time.Second}——默认无超时会挂死。","请求带 context：http.NewRequestWithContext(ctx, ...)，取消链路直通传输层。",'time.Now()、time.Since(t)、t.Format("2006-01-02")（参考时间记忆法）。',"strconv.Atoi / Itoa、strings.Fields/Split/Join/Builder——零碎工具一应俱全。","响应体必须 resp.Body.Close()，惯例 defer；io.ReadAll 读全量。"],code:`package main

import (
    "fmt"
    "io"
    "net/http"
    "time"
)

func main() {
    client := &http.Client{Timeout: 5 * time.Second}
    resp, err := client.Get("https://httpbin.org/get")
    if err != nil {
        fmt.Println("请求失败:", err)
        return
    }
    defer resp.Body.Close()
    b, _ := io.ReadAll(resp.Body)
    fmt.Println(resp.StatusCode, len(b))
}`,analogy:"http.Client ≈ fetch 封装好的 axios 实例（带 timeout）；defer resp.Body.Close() ≈ AbortController 清理；time.Format 参考时间 2006-01-02 是 Go 著名冷知识。"},links:[{name:"Go by Example: HTTP Clients",url:"https://gobyexample.com/http-clients",type:"article"},{name:"标准库文档 net/http",url:"https://pkg.go.dev/net/http",type:"doc"}]},{d:21,tag:"小项目",t:"实战：待办事项 REST API（上）",desc:"综合运用：struct + map 存储 + 路由 + JSON 校验，写出完整 CRUD。",xp:60,lesson:{points:["项目结构：main.go + store.go + handlers.go，同 package 但职责分离。","接口 TodoStore 抽象存储，先用内存 map 实现，之后可换数据库而 handler 不变。","请求体解码 + 字段校验，错误统一写 http.Error(w, msg, http.StatusBadRequest)。",'路径参数 r.PathValue("id") 转 int 后查存储，404/400 分别返回。',"记住所有响应写 Content-Type: application/json（用 w.Header().Set）。"],code:`package main

import (
    "encoding/json"
    "net/http"
    "sync"
)

type Todo struct {
    ID    int    \`json:"id"\`
    Title string \`json:"title"\`
    Done  bool   \`json:"done"\`
}

type TodoStore struct {
    mu     sync.Mutex
    nextID int
    items  map[int]Todo
}

func NewTodoStore() *TodoStore {
    return &TodoStore{nextID: 1, items: map[int]Todo{}}
}

func (s *TodoStore) Add(t Todo) Todo {
    s.mu.Lock()
    defer s.mu.Unlock()
    t.ID = s.nextID
    s.nextID++
    s.items[t.ID] = t
    return t
}

func (s *TodoStore) Get(id int) (Todo, bool) {
    s.mu.Lock()
    defer s.mu.Unlock()
    t, ok := s.items[id]
    return t, ok
}

func writeJSON(w http.ResponseWriter, v any) {
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(v)
}

func main() {
    store := NewTodoStore()
    mux := http.NewServeMux()
    mux.HandleFunc("POST /api/todos", func(w http.ResponseWriter, r *http.Request) {
        var t Todo
        if err := json.NewDecoder(r.Body).Decode(&t); err != nil || t.Title == "" {
            http.Error(w, "bad request", http.StatusBadRequest)
            return
        }
        writeJSON(w, store.Add(t))
    })
    http.ListenAndServe(":8080", mux)
}`,analogy:"TodoStore ≈ 你在 React 练习项目里的内存 mock 数据层；接口抽象 ≈ 以后换 Prisma 时 handler 不动的分层思想。"},links:[{name:"Learn Go with Tests（HTTP 章节）",url:"https://quii.gitbook.io/learn-go-with-tests/",type:"doc"},{name:"pkg.go.dev net/http",url:"https://pkg.go.dev/net/http",type:"doc"}]},{d:22,tag:"小项目",t:"实战：待办事项 REST API（下）",desc:"补全 PUT/DELETE、context 超时、优雅关停（graceful shutdown）。",xp:60,lesson:{points:["完整 CRUD：GET 列表/详情、POST 创建、PUT 更新、DELETE 删除，路由各自注册。","http.Server{Addr, Handler, ReadTimeout...} 结构化配置 + server.ListenAndServe()。","signal.NotifyContext(ctx, os.Interrupt) 监听 Ctrl+C，触发 server.Shutdown(ctx) 优雅关停。","Shutdown 会等活跃请求处理完，相当于给线上滚动发布一个缓冲期。","整个 main 的骨架：config -> store -> mux -> server -> signal -> shutdown。"],code:`package main

import (
    "context"
    "log"
    "net/http"
    "os/signal"
    "syscall"
    "time"
)

func main() {
    store := NewTodoStore()
    mux := http.NewServeMux()
    registerRoutes(mux, store) // Day 21 的 handlers

    srv := &http.Server{
        Addr:    ":8080",
        Handler: mux,
        ReadTimeout: 5 * time.Second,
    }

    ctx, stop := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
    defer stop()

    go func() {
        if err := srv.ListenAndServe(); err != http.ErrServerClosed {
            log.Fatal(err)
        }
    }()

    <-ctx.Done() // 等 Ctrl+C
    shutdownCtx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
    defer cancel()
    srv.Shutdown(shutdownCtx)
    log.Println("已优雅关停")
}`,analogy:'graceful shutdown ≈ PM2/Docker 的 SIGTERM 处理，让在途请求跑完再退；signal.NotifyContext ≈ process.on("SIGTERM") 的 context 化封装。'},links:[{name:"Graceful shutdown 示例",url:"https://pkg.go.dev/net/http#example-Server.Shutdown",type:"doc"},{name:"Learn Go with Tests: Context",url:"https://quii.gitbook.io/learn-go-with-tests/context-aware-reader",type:"doc"}]},{d:23,tag:"测试",t:"测试：testing 包与表驱动测试",desc:"go test、t.Run 子测试、表驱动是 Go 测试的灵魂。",xp:55,lesson:{points:["测试文件以 _test.go 结尾，函数签名 func TestXxx(t *testing.T)。","表驱动测试：定义 []struct{name, input, want} 切片，循环 t.Run(name, ...) —— 一个函数测所有 case。","t.Errorf / t.Fatalf 报告失败（Fatalf 立即终止当前子测试）。","go test ./... 跑全部包，-v 详细输出，-race 检测竞争。","测试内使用 t.Helper() 标记辅助函数、t.Cleanup 注册清理，≈ beforeEach/afterEach。"],code:`package math

import "testing"

func Add(a, b int) int { return a + b }

func TestAdd(t *testing.T) {
    tests := []struct {
        name string
        a, b int
        want int
    }{
        {"正数", 1, 2, 3},
        {"负数", -1, -2, -3},
        {"零", 0, 0, 0},
    }
    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            if got := Add(tt.a, tt.b); got != tt.want {
                t.Errorf("Add(%d,%d) = %d, want %d", tt.a, tt.b, got, tt.want)
            }
        })
    }
}`,analogy:"表驱动 ≈ describe/it 的参数化测试（Jest 的 test.each）；t.Run 子测试 ≈ it 嵌套；_test.go 与源码同包 ≈ 测试文件就在 src 旁边。"},links:[{name:"Go by Example: Testing",url:"https://gobyexample.com/testing",type:"article"},{name:"Learn Go with Tests",url:"https://quii.gitbook.io/learn-go-with-tests/",type:"doc"}]},{d:24,tag:"测试",t:"httptest 与基准测试",desc:"httptest.NewServer/Recorder 测 HTTP handler，Benchmark 基准。",xp:55,lesson:{points:["httptest.NewRecorder() 假装 ResponseWriter，直接调 handler 断言响应，不用真开端口。","httptest.NewServer(h) 起真服务器测 client 逻辑，测完 s.Close()。","BenchmarkXxx(b *testing.B)，go test -bench=. 运行；b.ResetTimer() 排除准备工作。","模糊测试 FuzzXxx（Go 1.18+）自动生成输入找崩溃，前端生态少见的利器。","覆盖率：go test -cover，HTML 报告 go tool cover -html。"],code:`package main

import (
    "net/http"
    "net/http/httptest"
    "testing"
)

func TestHello(t *testing.T) {
    req := httptest.NewRequest("GET", "/api/hello/gopher", nil)
    rec := httptest.NewRecorder()

    handler := http.HandlerFunc(helloHandler) // 你的 handler
    handler(rec, req)

    if rec.Code != http.StatusOK {
        t.Fatalf("status = %d", rec.Code)
    }
}

func BenchmarkAdd(b *testing.B) {
    for i := 0; i < b.N; i++ {
        _ = Add(1, 2)
    }
}`,analogy:"httptest.NewRecorder ≈ supertest 的假 res；NewServer ≈ msw/mock server 起真端口；Benchmark ≈ 你在浏览器里跑 performance.now() 循环测微基准。"},links:[{name:"pkg.go.dev net/http/httptest",url:"https://pkg.go.dev/net/http/httptest",type:"doc"},{name:"Go by Example: Testing",url:"https://gobyexample.com/testing",type:"article"}]},{d:25,tag:"工程化",t:"模块管理与依赖",desc:"go.mod 细节、语义化版本、多包项目结构。",xp:45,lesson:{points:["go mod init github.com/you/project —— 模块路径就是包的 import 前缀。","go get pkg@v1.2.3 精确版本、go get -u ./... 升级；最小版本选择（MVS）不需要 lock 文件博弈。","多包项目：internal/ 目录下的包外部无法 import，天然的私有边界。","包名惯例：短小写单词（http、json），目录名=包名，避免 util/common 这种垃圾抽屉。","go mod tidy 清理未用依赖，≈ depcheck 自动删 node_modules 引用。"],code:`// 项目结构示例：
// myapp/
// ├── go.mod            (module github.com/you/myapp)
// ├── main.go           (package main)
// ├── internal/
// │   └── store/
// │       └── store.go  (package store, 仅本项目可用)
// └── go.sum

import "github.com/you/myapp/internal/store"

var s = store.New()`,analogy:"go.mod ≈ package.json；go.sum ≈ lock 文件；internal/ ≈ 私有 package（npm 的 @scope 内部约定）；包名小写单数 ≈ 你把文件夹当命名空间。"},links:[{name:"Go Modules Reference",url:"https://go.dev/ref/mod",type:"doc"},{name:"Standard Project Layout（社区惯例）",url:"https://github.com/golang-standards/project-layout",type:"doc"}]},{d:26,tag:"工程化",t:"工具链全家桶",desc:"gofmt/vet、静态检查、golangci-lint、pprof 性能分析。",xp:45,lesson:{points:["gofmt -w . 统一格式化，goimports 自动管理 import 顺序（IDE 保存即触发）。","go vet 内置静态检查；golangci-lint 是社区 lint 聚合器 ≈ ESLint 生态的总和。","go test -bench + pprof：CPU/内存火焰图，pprof 是内置的性能分析器。",'go build -ldflags="-X main.version=1.2" 编译期注入版本号。',"交叉编译一行搞定：GOOS=linux GOARCH=arm64 go build，前端要配 docker 才能做到的事。"],code:`# 常用工具链命令
gofmt -w .
goimports -w .
go vet ./...
go test -race -cover ./...
golangci-lint run
GOOS=linux GOARCH=amd64 go build -o app
go tool pprof cpu.prof`,analogy:"gofmt ≈ prettier 官方唯一风格；vet+golangci-lint ≈ eslint 全家桶；pprof ≈ Chrome DevTools Performance 面板的命令行版；交叉编译 ≈ 一个环境变量替代整套 CI docker 构建。"},links:[{name:"golangci-lint",url:"https://golangci-lint.run/",type:"tool"},{name:"pprof 文档",url:"https://pkg.go.dev/runtime/pprof",type:"doc"}]},{d:27,tag:"部署",t:"部署：单二进制、交叉编译与 Docker",desc:"静态编译、容器极小化（distroless/scratch）、环境变量配置。",xp:55,lesson:{points:["Go 编译为静态二进制（CGO_ENABLED=0），扔进 FROM scratch 容器镜像只有几 MB——没有 node_modules、没有运行时安装。",'配置用环境变量：os.Getenv("PORT")，配合 12-factor app 惯例。',"go:embed 把静态文件编译进二进制：//go:embed dist 嵌入前端打包产物直接同进程服务。","健康检查接口 /healthz 是容器编排标配，返回 200 即可。","部署形态：裸二进制 + systemd、容器、或 serverless（冷启动极快）。"],code:`// main.go
package main

import (
    "embed"
    "net/http"
    "os"
)

//go:embed dist
var distFS embed.FS

func main() {
    port := os.Getenv("PORT")
    if port == "" {
        port = "8080"
    }
    http.Handle("/", http.FileServer(http.FS(distFS)))
    http.ListenAndServe(":"+port, nil)
}`,analogy:"单二进制 ≈ 打包好的 .exe；embed ≈ 把打包后的 dist/ 塞进 bundle；scratch 镜像 ≈ 比 alpine node 镜像小一个数量级，冷启动毫无负担。"},links:[{name:"go:embed 文档",url:"https://pkg.go.dev/embed",type:"doc"},{name:"Deploying Go servers",url:"https://go.dev/doc/deploying.html",type:"doc"}]},{d:28,tag:"进阶",t:"泛型与代码复用",desc:"泛型函数/类型、约束接口、和 TS 泛型的异同。",xp:50,lesson:{points:["func Map[T, U any](xs []T, f func(T) U) []U —— 语法和 TS 泛型像，但无 default、无条件类型。",'约束：type Number interface { ~int | ~float64 } 联合约束，~ 表示"包括底层类型"。',"slices/maps/cmp 标准库已提供通用工具（slices.Contains/Sort/Map 风格）。","泛型不是银弹：官方建议普通代码用接口，集合类/工具函数才用泛型。","Go 没有 extends 泛型继承，约束只能约束方法集和类型集。"],code:`package main

import (
    "fmt"
    "slices"
)

type Number interface {
    ~int | ~float64
}

func Sum[T Number](xs []T) T {
    var s T
    for _, x := range xs {
        s += x
    }
    return s
}

func main() {
    fmt.Println(Sum([]int{1, 2, 3}))      // 6
    fmt.Println(Sum([]float64{1.5, 2.5})) // 4
    fmt.Println(slices.Contains([]string{"go", "ts"}, "go"))
}`,analogy:"泛型 ≈ TS 泛型的运行时版，联合约束 ≈ T extends number | string；slices.Contains ≈ arr.includes；没有 conditional types 和 infer，简单很多。"},links:[{name:"An Introduction To Generics",url:"https://go.dev/blog/intro-generics",type:"article"},{name:"slices 包文档",url:"https://pkg.go.dev/slices",type:"doc"}]},{d:29,tag:"进阶",t:"反射、unsafe 与 Go 的边界",desc:"何时用 reflect（JSON 库内部）、性能代价、以及绝大多数时候你不需要它。",xp:50,lesson:{points:["reflect.TypeOf/ValueOf 在运行时检查类型，encoding/json 就是用它实现无侵入序列化。","反射慢 10-100 倍且丢失编译期检查，业务代码慎用——热路径用代码生成或手写。",'struct tag `json:"name"` 本质是反射读取的字符串元数据 ≈ TS 装饰器元数据。',"unsafe 包能绕过类型系统（指针转换），只有极少数底层库用。","实战建议：先想接口设计，再想泛型，最后才考虑反射。"],code:`package main

import (
    "fmt"
    "reflect"
)

type User struct {
    Name string \`json:"name"\`
    Age  int    \`json:"age,omitempty"\`
}

func main() {
    u := User{Name: "gopher"}
    t := reflect.TypeOf(u)
    for i := 0; i < t.NumField(); i++ {
        f := t.Field(i)
        fmt.Println(f.Name, f.Tag.Get("json"))
    }
}`,analogy:"reflect ≈ JS 的 Proxy/Object.entries 元编程能力但静态语言版；struct tag ≈ 元数据装饰器；unsafe ≈ as any + ArrayBuffer 越界操作的极端版。"},links:[{name:"The Laws of Reflection",url:"https://go.dev/blog/laws-of-reflection",type:"article"},{name:"pkg.go.dev reflect",url:"https://pkg.go.dev/reflect",type:"doc"}]},{d:30,tag:"毕业",t:"毕业项目：带测试的并发爬虫服务",desc:"综合全部所学：并发抓取 + context 超时 + 接口抽象 + 测试 + 交叉编译部署。",xp:100,lesson:{points:["需求：给一组 URL，worker pool 并发抓取，限流+超时，汇总标题输出 JSON。","架构：Fetcher 接口（便于 mock 测试）-> 并发调度（channel+WaitGroup）-> http 服务暴露结果。","必须覆盖：context 整体超时、每请求独立超时、错误收集而非中断。","交付清单：go test -race 全绿、golangci-lint 通过、GOOS=linux 交叉编译产物、README。","之后路线：数据库（database/sql 或 GORM）、gRPC、或直接读 std 源码进阶。"],code:`package main

import (
    "context"
    "fmt"
    "sync"
    "time"
)

type Fetcher interface {
    Title(ctx context.Context, url string) (string, error)
}

func Crawl(ctx context.Context, f Fetcher, urls []string, workers int) []string {
    jobs := make(chan string)
    titles := make(chan string, len(urls))
    var wg sync.WaitGroup

    for i := 0; i < workers; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            for u := range jobs {
                t, err := f.Title(ctx, u)
                if err == nil {
                    titles <- t
                }
            }
        }()
    }

    for _, u := range urls {
        jobs <- u
    }
    close(jobs)
    wg.Wait()
    close(titles)

    out := make([]string, 0, len(urls))
    for t := range titles {
        out = append(out, t)
    }
    return out
}

func main() {
    ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
    defer cancel()
    // f := NewHTTPFetcher(3 * time.Second)
    // fmt.Println(Crawl(ctx, f, []string{"https://go.dev"}, 4))
    fmt.Println("毕业快乐，勇者！")
}`,analogy:"这就是你 30 天学会的宇宙：Fetcher 接口 = 依赖注入，channel 调度 = 数据流，context = AbortSignal，测试 mock = supertest，交叉编译 = 部署自由。"},links:[{name:"Awesome Go 资源大全",url:"https://awesome-go.com/",type:"doc"},{name:"Go Wiki: Further reading",url:"https://go.dev/wiki/",type:"doc"}]}],cd={1:{prompt:'用短声明创建变量 name 和 age 并打印一行 "gopher: 18"。',starter:`package main

import "fmt"

func main() {
    // 在这里写你的代码
}`,answer:`package main

import "fmt"

func main() {
    name := "gopher"
    age := 18
    fmt.Println(name+":", age)
}`,expected:"gopher: 18"},2:{prompt:"定义常量组 Week，用 iota 让 Mon=1 到 Sun=7，打印 Sat。",starter:`package main

import "fmt"

// 定义 Week 常量组

func main() {
    fmt.Println(/* 你的答案 */)
}`,answer:`package main

import "fmt"

type Week int

const (
    Mon Week = iota + 1
    Tue
    Wed
    Thu
    Fri
    Sat
    Sun
)

func main() {
    fmt.Println(Sat) // 6
}`,expected:"6"},3:{prompt:"用 for...range 统计切片 [3, 1, 4, 1, 5] 中的最大值并打印。",starter:`package main

import "fmt"

func main() {
    nums := []int{3, 1, 4, 1, 5}
    // 求最大值
}`,answer:`package main

import "fmt"

func main() {
    nums := []int{3, 1, 4, 1, 5}
    max := nums[0]
    for _, n := range nums {
        if n > max {
            max = n
        }
    }
    fmt.Println(max)
}`,expected:"5"},4:{prompt:'创建 map[string]int 统计 "aabb" 中每个字符出现次数，打印结果。',starter:`package main

import "fmt"

func main() {
    s := "aabb"
    // 统计并打印
}`,answer:`package main

import "fmt"

func main() {
    s := "aabb"
    count := map[rune]int{}
    for _, c := range s {
        count[c]++
    }
    fmt.Println(count) // map[97:2 98:2]
}`,expected:"map[97:2 98:2]"},5:{prompt:"写函数 swap(a, b *int)，通过指针交换两个变量的值。",starter:`package main

import "fmt"

func swap(a, b *int) {
    // 你的代码
}

func main() {
    x, y := 1, 2
    swap(&x, &y)
    fmt.Println(x, y)
}`,answer:`package main

import "fmt"

func swap(a, b *int) {
    *a, *b = *b, *a
}

func main() {
    x, y := 1, 2
    swap(&x, &y)
    fmt.Println(x, y)
}`,expected:"2 1"},6:{prompt:"写函数 div(a, b int) (int, error)，b 为 0 时返回错误，main 中正确处理。",starter:`package main

import "fmt"

// 定义 div 并在 main 中调用处理错误

func main() {
    // 调用 div(10, 0) 和 div(10, 2)
}`,answer:`package main

import (
    "errors"
    "fmt"
)

func div(a, b int) (int, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}

func main() {
    if _, err := div(10, 0); err != nil {
        fmt.Println("err:", err)
    }
    q, _ := div(10, 2)
    fmt.Println("q:", q)
}`,expected:"err: division by zero\\nq: 5"},7:{prompt:"切片 s := []int{1,2,3,4,5}：取 s[1:3] 修改第一个元素，打印 s，验证共享底层。",starter:`package main

import "fmt"

func main() {
    s := []int{1, 2, 3, 4, 5}
    // 取子切片并修改
}`,answer:`package main

import "fmt"

func main() {
    s := []int{1, 2, 3, 4, 5}
    sub := s[1:3]
    sub[0] = 99
    fmt.Println(s) // [1 99 3 4 5]
}`,expected:"[1 99 3 4 5]"},8:{prompt:"用 map[string]struct{} 实现去重函数 unique(xs []string) []string（保持首次出现顺序）。",starter:`package main

import "fmt"

func unique(xs []string) []string {
    // 你的代码
    return nil
}

func main() {
    fmt.Println(unique([]string{"a", "b", "a", "c"}))
}`,answer:`package main

import "fmt"

func unique(xs []string) []string {
    seen := map[string]struct{}{}
    out := []string{}
    for _, x := range xs {
        if _, ok := seen[x]; !ok {
            seen[x] = struct{}{}
            out = append(out, x)
        }
    }
    return out
}

func main() {
    fmt.Println(unique([]string{"a", "b", "a", "c"}))
}`,expected:"[a b c]"},9:{prompt:"定义 User struct{Name string; Age int}，加 json tag，序列化后打印。",starter:`package main

import "fmt"

// 定义 User 并序列化

func main() {
}`,answer:`package main

import (
    "encoding/json"
    "fmt"
)

type User struct {
    Name string \`json:"name"\`
    Age  int    \`json:"age,omitempty"\`
}

func main() {
    b, _ := json.Marshal(User{Name: "gopher", Age: 18})
    fmt.Println(string(b))
}`,expected:'{"name":"gopher","age":18}'},10:{prompt:"给 Counter 加指针接收者方法 Add(n int) 和值接收者方法 Get() int，演示两者区别。",starter:`package main

import "fmt"

type Counter struct{ n int }

// 添加 Add 和 Get 方法

func main() {
    c := Counter{}
    // 调用后打印
}`,answer:`package main

import "fmt"

type Counter struct{ n int }

func (c *Counter) Add(n int) { c.n += n }
func (c Counter) Get() int   { return c.n }

func main() {
    c := Counter{}
    c.Add(3)
    c.Add(4)
    fmt.Println(c.Get()) // 7

    v := c
    v.Add(100)           // 值接收者拷贝副本，Go 自动取地址调用所以 c 会变
    fmt.Println(c.Get(), v.Get())
}`,expected:"7\\n107 107"}},ud={1:[{q:"go.mod 文件的作用最接近前端的哪个文件？",options:["tsconfig.json","package.json","vite.config.ts",".eslintrc"],answer:1,explain:"go.mod 声明模块名与依赖版本，go get 相当于 npm install；go.sum 才对应 package-lock.json。"},{q:"以下哪个命令会生成可直接部署的二进制文件？",options:["go run main.go","go build","go vet","gofmt"],answer:1,explain:"go run 是临时编译运行；go build 产出静态二进制，部署无需任何运行时依赖。"}],2:[{q:"var s string 声明后未赋值，s 的值是？",options:["undefined","nil",'""（空字符串）',"编译错误"],answer:2,explain:"Go 没有未初始化值，string 零值是空串；undefined 这个概念在 Go 中不存在。"},{q:"以下哪段代码能通过编译？",options:['x := 1; x = "a"',"const a = 1; a = 2","x := 1; y := x + 1.5","var x int = 1; x = 2"],answer:3,explain:"Go 类型固定：给 int 赋字符串、给常量重赋值、int+float64 混算都报错；只有同类型重赋值合法。"}],3:[{q:'Go 中实现"while (true)"无限循环应写？',options:["while true { }","loop { }","for { }","repeat { }"],answer:2,explain:"Go 只有 for 一种循环关键字，for {} 即无限循环。"},{q:"if v := f(); v > 0 { } 中 v 的作用域是？",options:["整个函数","仅 if 块（含 else）","整个文件","与 f 相同"],answer:1,explain:"if 的初始化语句变量作用域限定在 if/else 块内，用完即弃，避免污染外层。"}],4:[{q:'var m map[string]int 声明后直接 m["a"]=1 会怎样？',options:["正常写入","panic","静默失败","编译错误"],answer:1,explain:"nil map 可读不可写，写入会 panic；必须先 make 或用字面量初始化。"},{q:"数组和切片的核心区别是？",options:["数组可变长度，切片固定","数组长度是类型一部分且固定，切片是动态视图","切片存指针所以更慢且不能比较","没有区别，只是写法不同"],answer:1,explain:"[3]int 是完整类型（含长度），日常用 []T 切片：底层指向数组、带 len/cap、可 append。"}],5:[{q:"func modify(s []int) { s[0]=99 } 传入切片后，外部切片会变吗？",options:["会，因为切片共享底层数组","不会，Go 全是值传递","只有指针才变","取决于 cap"],answer:0,explain:"传参是值拷贝，但拷贝的是切片头（指针/len/cap），底层数组共享，所以元素修改可见。"},{q:"&x 和 *p 分别是？",options:["解引用和取地址","取地址和解引用","都是取地址","都是解引用"],answer:1,explain:"&x 取地址产生 *T 指针，*p 解引用读写指向的值。Go 指针没有算术运算。"}],6:[{q:"Go 中最惯用的错误处理方式是？",options:["try/catch","抛出异常","多返回值返回 error","panic 全部"],answer:2,explain:"返回值 + error 检查是核心惯例；panic 只用于不可恢复 bug，不是异常机制。"},{q:"defer 注册的函数执行时机是？",options:["注册后立即执行","当前 goroutine 结束时","所在函数 return 前（LIFO）","GC 时"],answer:2,explain:"defer 在函数返回前按后进先出执行，常用于 Unlock/Close，像作用域级 finally。"}],7:[{q:"append 追加超出 cap 时会发生什么？",options:["panic","原地扩展底层数组","分配更大新数组并返回新切片","静默丢失元素"],answer:2,explain:"扩容会分配新数组，append 返回指向新数组的切片——所以必须接住返回值。"},{q:"如何获得一个不与原切片共享底层的拷贝？",options:["src[0:len(src)]","append([]int(nil), src...)","copy 自身",":= 赋值"],answer:1,explain:"切片表达式和赋值都共享底层；append 到新 nil 切片或显式 copy 才是独立拷贝。"}],8:[{q:"for k := range m 两次遍历的顺序？",options:["插入顺序","字母序","随机化（故意的）","哈希值序"],answer:2,explain:"Go 官方故意随机化 map 遍历顺序，防止代码依赖实现细节；要有序须先排序 key。"},{q:"v, ok := m[key] 中 ok 的含义是？",options:["value 是否为零值","key 是否存在","map 是否为 nil","写入是否成功"],answer:1,explain:'comma-ok 区分"值是零值"和"key 不存在"，类似 JS 的 in 操作符。'}],9:[{q:'Go 中实现"继承"的推荐方式是？',options:["extends 关键字","struct 嵌入（组合）","prototype 链","复制粘贴"],answer:1,explain:"嵌入提供字段/方法的组合提升，没有继承层次和 super，官方哲学是组合优于继承。"},{q:'json tag `json:"userName"` 的作用是？',options:["运行时改名变量","控制序列化/反序列化时 JSON 字段名","生成数据库索引","给 IDE 看的注释"],answer:1,explain:"tag 是反射读取的元数据，控制 JSON 字段映射、omitempty 省略零值等。"}],10:[{q:"什么时候必须用指针接收者？",options:["方法需要修改接收者的字段","永远必须用","只有小结构体用","接口实现必须用"],answer:0,explain:"值接收者拿到的是副本，修改不影响原值；要改原值就必须指针接收者。"},{q:'Go 中创建"构造函数"的惯例是？',options:["new 关键字重载","NewXxx() 工厂函数","constructor 方法","init() 里写"],answer:1,explain:"没有 class 构造器语法，惯例导出 NewXxx 工厂函数返回 *T，内部可做默认值和校验。"}],11:[{q:"Go 接口的实现方式是？",options:["implements 声明","方法集自动匹配（隐式）","继承接口类","注册表注册"],answer:1,explain:"只要实现了接口的方法集就自动满足，无需声明——结构化类型的运行时体现。"},{q:"把一个值为 nil 的 *T 指针赋给接口变量后，接口 == nil 吗？",options:["等于 nil","不等于 nil","panic","视 T 而定"],answer:1,explain:"接口 = (类型, 值) 二元组；装入了 *T 类型后类型信息非空，接口不为 nil。这是经典陷阱。"}],12:[{q:"社区建议的接口设计原则是？",options:["大而全接口","接受接口，返回具体类型","一切用 any","接口越多越好"],answer:1,explain:"小接口易于组合与 mock；函数参数依赖接口、返回具体 struct，保持调用方简单。"},{q:"any 类型等价于 TS 的？",options:["never","unknown（宽松使用）","void","object"],answer:1,explain:"any 是 interface{} 的别名，能装任何值但放弃类型检查，语义上接近 unknown，应尽量少用。"}],13:[{q:"fmt.Errorf 的 %w 动词作用是？",options:["格式化字符串","包装底层错误保留错误链","输出宽度","转成 warning"],answer:1,explain:"%w 包装原错误，之后可用 errors.Is/As 沿链查找，相当于 JS Error 的 cause。"},{q:"errors.Is(err, ErrNotFound) 与 err == ErrNotFound 的区别是？",options:["完全等价","Is 会解包错误链逐层比较，== 只比较顶层","== 更快且推荐","Is 只能用于自定义错误"],answer:1,explain:"错误被 %w 包装后顶层不再等于哨兵值，Is 沿链 unwrap 比较，因此判错误一律用 errors.Is。"}],14:[{q:"main 函数返回后，还没跑完的 goroutine 会？",options:["等待完成","被直接终止","报错","成为僵尸进程"],answer:1,explain:"main 退出即进程退出，所有 goroutine 直接被杀；所以需要 WaitGroup/channel 做同步。"},{q:"sync.WaitGroup 的正确使用顺序是？",options:["Wait 后 Add，goroutine 里 Done","Add 后启动 goroutine，goroutine 内 defer Done，主线程 Wait","只 Wait 不 Add","Done 后 Add"],answer:1,explain:"Add 必须在 go 之前调用（避免竞态），goroutine 内 defer Done，Wait 阻塞到计数归零。"}],15:[{q:"向无缓冲 channel 发送数据时，如果没有接收者会？",options:["立即返回 false","阻塞直到有接收者","panic","数据丢失"],answer:1,explain:"无缓冲 channel 是同步交接：发送方阻塞到接收方就绪，天然形成同步点。"},{q:"for v := range ch 循环何时结束？",options:["channel 缓冲空了","接收到一个 nil","channel 被 close 且数据排空","永不结束"],answer:2,explain:"close 后先排空剩余值，然后循环结束（等价于 v, ok 中 ok=false）。"}],16:[{q:"select 中所有 case 都未就绪且有 default 分支时，会？",options:["阻塞等待","执行 default","随机等待","panic"],answer:1,explain:"default 使 select 变成非阻塞尝试，立即走 default，常用于轮询或避免卡死。"},{q:'实现"最多等 2 秒"的惯用法是？',options:["time.Sleep(2s) 后检查","select + time.After(2*time.Second)","channel 容量设为 2","goroutine 计数"],answer:1,explain:"select { case v := <-ch: ...; case <-time.After(2s): 超时 } ≈ Promise.race 超时模式。"}],17:[{q:"100 个 goroutine 并发 count++ 且无锁，结果会？",options:["一定正确","不确定，存在数据竞争","编译报错","自动加锁"],answer:1,explain:"并发读写共享变量是 data race，结果不确定；用 Mutex 或 atomic，且 go run -race 能检测。"},{q:"sync.Once.Do(f) 的保证是？",options:["每 goroutine 执行一次","整个程序生命周期只执行一次","每秒一次","失败了会重试"],answer:1,explain:"Once 提供全局单次初始化语义（即使并发调用），常用于单例/连接池懒加载。"}],18:[{q:"context.Context 作为参数的惯例位置是？",options:["最后一个参数","第一个参数，命名 ctx","全局变量","结构体字段"],answer:1,explain:"ctx 永远是第一个参数并贯穿调用链，官方约定，静态检查也会提示。"},{q:"context.WithTimeout 超时后，ctx.Done() 会？",options:["发送 true","关闭该 channel","panic","无变化"],answer:1,explain:"取消/超时时关闭 Done channel，使所有 select <-ctx.Done() 的等待方同时被唤醒。"}],19:[{q:'Go 1.22 的 mux.HandleFunc("GET /api/u/{id}", h) 中取路径参数的方式是？',options:['r.URL.Query().Get("id")','r.PathValue("id")','r.FormValue("id")','r.Header.Get("id")'],answer:1,explain:'1.22 新增路径参数语法，r.PathValue("id") 取值；Query() 只取 ?a=b 查询参数。'},{q:"HTTP 中间件在 Go 里的惯用形态是？",options:["class Middleware","func(next http.Handler) http.Handler","全局拦截器注解","修饰器语法糖"],answer:1,explain:"中间件是包装 Handler 的函数，内部处理前置/后置逻辑后调用 next.ServeHTTP，可自由组合。"}],20:[{q:"生产环境使用 http.Get 的主要问题是？",options:["不支持 HTTPS","默认 Client 无超时，可能永久挂起","不能带 header","性能太差"],answer:1,explain:"http.Get 用 DefaultClient，零超时；必须自定义 http.Client{Timeout: ...}。"},{q:'t.Format("2006-01-02") 这个奇怪写法的原因是？',options:["Go 的 bug","参考时间记忆法：1月2日下午3时4分5秒2006年，按数字顺序","仿照 Unix date","历史遗留的 C 惯例"],answer:1,explain:"Go 用固定参考时间 01/02 03:04:05PM 2006 (-0700) 的数字含义表达 layout，是著名冷知识。"}],21:[{q:"并发安全的内存存储 struct 应该组合哪个字段？",options:["sync.Once","sync.Mutex","context.Context","chan bool"],answer:1,explain:"map 并发读写会 panic，读写都需持锁；内存 CRUD 存储标配 embed 一个 sync.Mutex。"},{q:"解码请求体 JSON 的惯用写法是？",options:["json.Unmarshal([]byte(r.Body), &v)","json.NewDecoder(r.Body).Decode(&v)","r.Body.JSON(&v)","parse(r.Body)"],answer:1,explain:"Decoder 直接流式读 Body 并 Decode 到 &v；Unmarshal 需要先 io.ReadAll，多一步且占内存。"}],22:[{q:"优雅关停（graceful shutdown）的核心动作是？",options:["立刻 os.Exit(0)","监听信号后调用 server.Shutdown(ctx) 等在途请求完成","重启进程","丢弃所有连接"],answer:1,explain:"signal.NotifyContext 捕获 SIGTERM/SIGINT，Shutdown 让活跃请求处理完再退出，发布不丢请求。"},{q:"srv.ListenAndServe() 通常放在 goroutine 里运行，因为？",options:["它性能更好","它是阻塞调用，主线程要腾出来等信号","Go 强制要求","避免端口冲突"],answer:1,explain:"ListenAndServe 阻塞到出错，放 goroutine 让主 goroutine 阻塞在 <-ctx.Done() 等待退出信号。"}],23:[{q:"Go 的测试函数必须满足？",options:["在 main 包中，名字任意","文件以 _test.go 结尾，函数签名 TestXxx(t *testing.T)","继承 TestCase 类","使用 it() 全局函数"],answer:1,explain:"_test.go + Test 开头 + *testing.T 参数是 go test 的识别规则，无需测试框架。"},{q:"表驱动测试的核心好处是？",options:["运行更快","新增用例只需加一行数据，逻辑复用","自动生成覆盖率","可以并行跑所有包"],answer:1,explain:"用例即数据切片，t.Run 子测试逐条执行并独立报告，等价于 test.each 且更结构化。"}],24:[{q:"不启动真实端口就能测 HTTP handler 的工具是？",options:["httptest.NewRecorder","net.Listen","curl","mockhttp 包"],answer:0,explain:"NewRecorder 提供假的 ResponseWriter，直接调用 handler 后断言 Code/Body，快且稳定。"},{q:"BenchmarkXxx 中 b.N 的含义是？",options:["CPU 核数","框架自动调整的迭代次数","固定 1000 次","并发数"],answer:1,explain:"testing 框架动态调整 b.N 直到采样足够，你的代码循环 b.N 次，报告 ns/op。"}],25:[{q:"internal/ 目录下包的特殊性是？",options:["编译更快","只能被其父模块内的代码 import，外部不可见","自动内联优化","必须含 main 包"],answer:1,explain:"internal 是编译器强制的私有边界，比 npm 的 @scope/内部 约定更硬。"},{q:"go mod tidy 的作用是？",options:["升级所有依赖","增删依赖使 go.mod 与代码实际 import 一致","生成文档","格式化 go.mod"],answer:1,explain:"tidy 添加缺失、移除未用的依赖并刷新 go.sum，相当于依赖的死代码清除。"}],26:[{q:"交叉编译 linux/arm64 二进制的命令是？",options:["go build --target linux/arm64","GOOS=linux GOARCH=arm64 go build","go deploy --arch arm64","需要安装 docker"],answer:1,explain:"两个环境变量即可，无第三方工具——这是 Go 相对 Node 构建链的巨大优势。"},{q:"pprof 的用途是？",options:["包管理","CPU/内存性能剖析","格式化代码","生成 mock"],answer:1,explain:"pprof 采集 CPU/heap profile 并生成火焰图，≈ 命令行版 DevTools Performance。"}],27:[{q:"把前端打包产物嵌进 Go 二进制应使用？",options:["//go:embed 指令","fs.readFile","webpack 插件","http.FS 远程加载"],answer:0,explain:"go:embed 在编译期把文件/目录嵌入二进制，运行时用 http.FS 直接服务，单文件交付。"},{q:"FROM scratch 镜像能跑 Go 二进制的前提是？",options:["安装 golang 镜像层","CGO_ENABLED=0 静态编译","容器内联网","复制 /etc/passwd"],answer:1,explain:"静态编译（禁用 cgo）后二进制不依赖 libc，scratch 空镜像即可运行，镜像仅几 MB。"}],28:[{q:"泛型约束 type Number interface { ~int | ~float64 } 中 ~ 的含义是？",options:["取反","匹配底层类型相同的所有类型","指针类型","可空类型"],answer:1,explain:'~int 表示"底层类型为 int 的所有类型"（如 type Age int 也满足），比裸 int 更宽松。'},{q:"Go 泛型与 TS 泛型的重要差异是？",options:["Go 支持条件类型和 infer","Go 无条件类型/默认类型参数，约束仅限方法集与类型集","TS 泛型在运行时擦除，Go 不会","Go 泛型只能用于 struct"],answer:1,explain:"Go 泛型刻意保持简单：无 conditional types、无 default、无变型标注，复用靠接口组合。"}],29:[{q:"encoding/json 能序列化任意 struct 靠的是？",options:["代码生成","reflect 反射读取类型与 tag","unsafe 内存布局","编译器内建"],answer:1,explain:"json 包用 reflect 在运行时遍历字段和 tag，这正是反射在标准库中的典型应用。"},{q:"业务热路径代码应优先避免什么？",options:["接口","泛型","reflect 反射","goroutine"],answer:2,explain:"反射比直接调用慢一个数量级且丢失编译期检查；热路径用手写代码或代码生成。"}],30:[{q:"并发爬虫中给每个请求加独立超时的正确组合是？",options:["time.Sleep 检查","ctx 派生 WithTimeout + http.NewRequestWithContext","channel 容量","WaitGroup 计数"],answer:1,explain:"总 ctx 控制全局，派生 WithTimeout 控制单请求，context 直通 http 传输层实现取消。"},{q:"爬虫项目里 Fetcher 设计成接口的最大收益是？",options:["运行更快","测试时可注入 fake 抓取器，不依赖网络","支持反射","减少代码行数"],answer:1,explain:'接口抽象使 Crawl 逻辑可用 httptest/mock 测试，网络故障不进 CI——这就是"接受接口"哲学的落地。'}]},pd={1:[{name:"A Tour of Go（官方交互教程）",url:"https://go.dev/tour/",type:"doc"},{name:"Go Playground",url:"https://go.dev/play/",type:"playground"},{name:"Learn Go in Y Minutes",url:"https://learnxinyminutes.com/docs/go/",type:"article"}],2:[{name:"Go by Example",url:"https://gobyexample.com/",type:"article"},{name:"Tour of Go: Basic types",url:"https://go.dev/tour/basics/11",type:"doc"}],3:[{name:"Go by Example: Loops",url:"https://gobyexample.com/for",type:"article"},{name:"Tour of Go: Flow control",url:"https://go.dev/tour/flowcontrol/1",type:"doc"}],4:[{name:"Go Slices: usage and internals",url:"https://go.dev/blog/slices-intro",type:"article"},{name:"Go Maps in Action",url:"https://go.dev/blog/maps",type:"article"}],5:[{name:"Go by Example: Pointers",url:"https://gobyexample.com/pointers",type:"article"},{name:"Dave Cheney: 指针 vs 值",url:"https://dave.cheney.net/2017/08/09/optimize-go-interface-values",type:"article"}],6:[{name:"Go by Example: Functions",url:"https://gobyexample.com/functions",type:"article"},{name:"Defer, Panic, and Recover",url:"https://go.dev/blog/defer-panic-and-recover",type:"article"}],7:[{name:"Go Slices Internals（必读）",url:"https://go.dev/blog/slices-intro",type:"article"},{name:"Go by Example: Slices",url:"https://gobyexample.com/slices",type:"article"}],8:[{name:"Go maps in action",url:"https://go.dev/blog/maps",type:"article"},{name:"Go by Example: Maps",url:"https://gobyexample.com/maps",type:"article"}],9:[{name:"Go by Example: Structs",url:"https://gobyexample.com/structs",type:"article"},{name:"Go by Example: JSON",url:"https://gobyexample.com/json",type:"article"}],10:[{name:"Tour of Go: Methods and interfaces",url:"https://go.dev/tour/methods/1",type:"doc"},{name:"Go by Example: Methods",url:"https://gobyexample.com/methods",type:"article"}],11:[{name:"Go by Example: Interfaces",url:"https://gobyexample.com/interfaces",type:"article"},{name:"Sort Godoc: io.Reader 生态",url:"https://pkg.go.dev/io#Reader",type:"doc"}],12:[{name:"CodeReviewComments: Interfaces",url:"https://go.dev/wiki/CodeReviewComments",type:"doc"},{name:"Go by Example: Struct Embedding",url:"https://gobyexample.com/struct-embedding",type:"article"}],13:[{name:"Error handling and Go",url:"https://go.dev/blog/errors-are-values",type:"article"},{name:"Working with Errors in Go 1.13",url:"https://go.dev/blog/go1.13-errors",type:"article"}],14:[{name:"Go Concurrency Patterns: Pipelines",url:"https://go.dev/blog/pipelines",type:"article"},{name:"Go by Example: Goroutines",url:"https://gobyexample.com/goroutines",type:"article"}],15:[{name:"Go by Example: Channels",url:"https://gobyexample.com/channels",type:"article"},{name:"Share Memory By Communicating",url:"https://go.dev/blog/codelab-share",type:"article"}],16:[{name:"Go Concurrency Patterns (Rob Pike)",url:"https://go.dev/talks/2012/concurrency.slide",type:"article"},{name:"Go by Example: Select",url:"https://gobyexample.com/select",type:"article"}],17:[{name:"Go by Example: Mutexes",url:"https://gobyexample.com/mutexes",type:"article"},{name:"Race Detector",url:"https://go.dev/blog/race-detector",type:"article"}],18:[{name:"Go Concurrency Patterns: Context",url:"https://go.dev/blog/context",type:"article"},{name:"Go by Example: Context",url:"https://gobyexample.com/context",type:"article"}],19:[{name:"Routing Enhancements for Go 1.22",url:"https://go.dev/blog/routing-enhancements",type:"article"},{name:"Go by Example: HTTP Servers",url:"https://gobyexample.com/http-servers",type:"article"}],20:[{name:"pkg.go.dev net/http",url:"https://pkg.go.dev/net/http",type:"doc"},{name:"Go by Example: HTTP Clients",url:"https://gobyexample.com/http-clients",type:"article"}],21:[{name:"Learn Go with Tests: HTTP server",url:"https://quii.gitbook.io/learn-go-with-tests/build-an-application/http-server",type:"doc"},{name:"JSON and Go",url:"https://go.dev/blog/json",type:"article"}],22:[{name:"Server.Shutdown 示例",url:"https://pkg.go.dev/net/http#Server.Shutdown",type:"doc"},{name:"os/signal 文档",url:"https://pkg.go.dev/os/signal",type:"doc"}],23:[{name:"Learn Go with Tests（TDD 学 Go 神书）",url:"https://quii.gitbook.io/learn-go-with-tests/",type:"doc"},{name:"go test 命令文档",url:"https://pkg.go.dev/cmd/go#hdr-Test_packages",type:"doc"}],24:[{name:"pkg.go.dev httptest",url:"https://pkg.go.dev/net/http/httptest",type:"doc"},{name:"Go by Example: Testing and Benchmarking",url:"https://gobyexample.com/testing",type:"article"}],25:[{name:"Go Modules Reference",url:"https://go.dev/ref/mod",type:"doc"},{name:"Tutorial: Create a Go module",url:"https://go.dev/doc/tutorial/create-module",type:"doc"}],26:[{name:"golangci-lint 官网",url:"https://golangci-lint.run/",type:"tool"},{name:"Go Tools 文档",url:"https://go.dev/doc/tools",type:"doc"}],27:[{name:"pkg.go.dev embed",url:"https://pkg.go.dev/embed",type:"doc"},{name:"Building Docker images for Go",url:"https://docs.docker.com/language/golang/build-images/",type:"doc"}],28:[{name:"An Introduction To Generics",url:"https://go.dev/blog/intro-generics",type:"article"},{name:"When To Use Generics",url:"https://go.dev/blog/when-generics",type:"article"}],29:[{name:"The Laws of Reflection",url:"https://go.dev/blog/laws-of-reflection",type:"article"},{name:"pkg.go.dev reflect",url:"https://pkg.go.dev/reflect",type:"doc"}],30:[{name:"Awesome Go",url:"https://awesome-go.com/",type:"doc"},{name:"Go Developer Roadmap",url:"https://roadmap.sh/golang",type:"doc"},{name:"Go Project Layout",url:"https://github.com/golang-standards/project-layout",type:"doc"}]},dd={tagline:"给 Express 老手的 30 天 NestJS 进阶线：从 IoC 原理到 Docker 部署，用企业级架构重写你熟悉的 CRUD 世界。"},md=[{d:1,tag:"入门",t:"环境搭建与第一个 Controller",xp:100,desc:"用 Nest CLI 起项目，对比 Express 的 app.get 写出第一个 @Controller，理解“控制器类”取代“路由回调”的转变。",lesson:{points:["npm i -g @nestjs/cli && nest new app 一键生成：模块、controller、service、测试齐全，相当于 express-generator 的强化版。",'Controller 用 @Controller("cats") 声明路由前缀，方法用 @Get()/@Post() 装饰，等价于 app.get("/cats", handler)。',"路由方法参数不是 (req,res) 而是 @Param/@Query/@Body/@Req 装饰的独立参数，类型安全由 TS 保证。","方法直接 return 数据，Nest 自动序列化为 JSON，不需要 res.json()；Nest 自己接管了响应流。","启动入口 main.ts 里 NestFactory.create(AppModule) 代替 express() + app.listen()。"],code:`// cats.controller.ts —— 对比 Express: router.get('/cats', (req,res)=>res.json(...))
import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  private cats = ['Tom'];

  @Get()
  findAll(): string[] {
    return this.cats; // 直接 return，Nest 负责 JSON 序列化
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id, name: this.cats[Number(id)] ?? null };
  }

  @Post()
  create(@Body('name') name: string) {
    this.cats.push(name);
    return { created: name };
  }
}`,analogy:"把 Controller 想成 React 组件：路由（JSX 位置）由装饰器声明，参数（props）逐个注入，而不是从一个大 req 对象里手动取。"},links:[{name:"NestJS 中文文档 · 控制器",url:"https://docs.nestjs.cn/10/controllers",type:"docs"},{name:"Nest CLI 文档",url:"https://docs.nestjs.com/cli/overview",type:"docs"}]},{d:2,tag:"核心原理",t:"IoC 容器与依赖注入",xp:120,desc:"理解 Nest 的灵魂：控制反转。搞清楚 Provider、token、容器如何 new 出你的 Service 并自动注入。",lesson:{points:["没有 DI 时：new CatsService() 写死在 Controller 里，换实现、测试 mock 都要改源码——耦合。","DI：Controller 构造函数声明 constructor(private catsService: CatsService)，容器在实例化时自动传入。","@Injectable() 标记的类进入容器成为 Provider；@Module({ providers: [...] }) 把它们注册进 IoC 容器（类似一个全局的 service locator + 工厂）。","默认 token 就是类本身：@Inject(CatsService) 等价于按类引用查找；也可用字符串 token 注入普通值。","DI 最大的红利是测试：测试时传 new CatsServiceMock() 即可，不用改业务代码。"],code:`@Injectable()
export class CatsService {
  findAll() { return ['Tom']; }
}

@Controller('cats')
export class CatsController {
  // 容器看到构造参数类型，反射出 CatsService 并注入（需 emitDecoratorMetadata）
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll() { return this.catsService.findAll(); }
}

// 模块里注册
@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}`,analogy:"像 React 的 Context + useEffect 依赖数组：组件不自己 new 依赖，而是“声明需要什么”，上层负责供给。DI 容器就是全局 Provider。"},links:[{name:"NestJS 中文文档 · Providers",url:"https://docs.nestjs.cn/10/providers",type:"docs"},{name:"NestJS 官方 · Dependency Injection",url:"https://docs.nestjs.com/fundamentals/dependency-injection",type:"docs"}]},{d:3,tag:"核心原理",t:"装饰器原理：Nest 的魔法从哪来",xp:120,desc:"拆开装饰器这层“语法糖”：它只是高阶函数 + Reflect Metadata。理解后，@Controller/@Injectable 全部祛魅。",lesson:{points:["装饰器 = 接收类/方法/参数并返回或修改它的函数，tsconfig 必须 experimentalDecorators + emitDecoratorMetadata。",'类装饰器拿到 constructor，可以往类上塞元数据：Reflect.defineMetadata("path", "cats", cls)。',"Nest 启动时用 Reflect.getMetadata 扫描所有元数据，才知道每个 Controller 挂了哪些路由、每个参数取 req 的哪部分。","emitDecoratorMetadata 会自动写入参数的设计类型（design:type），这就是 @Injectable 按类型注入能工作的原因。","自己写一个装饰器试试：10 行代码做一个 @Auth() 或 @Roles()，是后面 RBAC 的地基。"],code:`// 手写一个迷你路由装饰器，理解 Nest 的机制
const ROUTES = Symbol('routes');
function Get(path: string): MethodDecorator {
  return (target, key) => {
    const routes = Reflect.getMetadata(ROUTES, target) ?? [];
    routes.push({ method: 'GET', path, handler: key });
    Reflect.defineMetadata(ROUTES, routes, target);
  };
}

class MiniController {
  @Get('/hello')
  hello() { return 'hi'; }
}

// 启动时反向扫描：Reflect.getMetadata(ROUTES, MiniController.prototype)
// 就能得到 [{ method:'GET', path:'/hello', handler:'hello' }] —— 这正是 Nest 注册路由的方式`,analogy:"React 高阶组件（HOC）和装饰器是亲戚：withAuth(Component) 包一层加能力；装饰器只是把 HOC 写成 @Auth class 这种更顺眼的语法。"},links:[{name:"TypeScript 官方 · Decorators",url:"https://www.typescriptlang.org/docs/handbook/decorators.html",type:"docs"},{name:"NestJS 中文文档 · 自定义装饰器",url:"https://docs.nestjs.cn/10/custom-decorators",type:"docs"}]},{d:4,tag:"架构",t:"模块系统：Nest 的组件树",xp:110,desc:"Feature Module、共享模块、全局模块。理解 AppModule 是根，模块像 React 组件一样组合。",lesson:{points:["每个 @Module() 声明四块：imports（引入其他模块）、controllers、providers、exports（对外提供的 Provider）。","Provider 默认模块私有：A 模块的 Service 想被 B 用，必须在 A 的 exports 里列出，B 再 imports A。","@Global() 模块（如配置）import 一次全局可用，但别滥用——显式依赖更可测。","组织惯例：一个业务域一个模块（UserModule/OrderModule），AppModule 只负责 import 它们，类似 React 的 App.tsx 组装页面。","forRoot()/forChild() 模式（如 TypeOrmModule.forRoot）是静态工厂，返回“配置化后的动态模块”。"],code:`@Module({
  imports: [TypeOrmModule.forFeature([Cat])], // 动态模块：带配置的工厂
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService], // 其他模块 import CatsModule 后可注入 CatsService
})
export class CatsModule {}

@Module({ imports: [CatsModule] })
export class ZooModule {} // 这里能注入 CatsService`,analogy:"模块 = React 的“组件 + props 边界”：imports 是父传子，exports 是子暴露的 props 接口；没有 export 就像没写进 return 的内部变量。"},links:[{name:"NestJS 中文文档 · 模块",url:"https://docs.nestjs.cn/10/modules",type:"docs"}]},{d:5,tag:"HTTP",t:"Controller 进阶：路由、状态码、请求对象",xp:100,desc:"子路由、@HttpCode、@Header、All 通配路由、访问原生 req/res——把 Express 的路由本领全部平移过来。",lesson:{points:['装饰器路径可叠加：@Controller("users") + @Get(":id/posts") => /users/1/posts。','@Post() @HttpCode(204) 修改默认 201 状态码；@Header("Cache-Control", "no-store") 设响应头。',"@All() 匹配所有方法；@Req()/@Res() 可拿原生对象，但注入 @Res 后 Nest 不再自动序列化，要手动 res.json()。","参数装饰器全家桶：@Param/@Query/@Body/@Headers/@Ip/@Session，比从 req 上挖属性更类型安全。","异步方法直接 async/await 或返回 Observable，Nest 都能处理。"],code:`@Controller('users')
export class UsersController {
  @Get(':id/posts/:postId')
  getPost(
    @Param('id') id: string,
    @Param('postId') postId: string,
    @Query('lang') lang = 'zh',
  ) {
    return { userId: id, postId, lang };
  }

  @Post()
  @HttpCode(204)
  @Header('X-Powered-By', 'nest')
  create(@Body() dto: CreateUserDto) {
    return; // 204 No Content
  }
}`,analogy:"装饰器参数之于 req，就像 React 解构 props 之于 this.props：显式声明用到的部分，签名即文档。"},links:[{name:"NestJS 中文文档 · 控制器",url:"https://docs.nestjs.cn/10/controllers",type:"docs"}]},{d:6,tag:"架构",t:"Provider 深入：自定义 Provider 与作用域",xp:130,desc:"useValue/useClass/useFactory 三种注入方式、异步工厂、请求级作用域（Scope.REQUEST）。",lesson:{points:["useValue：注入常量/配置对象，token 可为类或字符串 Symbol。","useClass：接口多实现切换，测试时用这个替换为 Mock。","useFactory：依赖其他 Provider 的工厂函数，支持 async（如建数据库连接），依赖用 inject: [Token] 声明。","默认 Singleton 作用域——所有请求共享实例，所以别在 Service 实例属性里存 per-request 数据！","Scope.REQUEST 每请求新建实例（有性能代价，且会向依赖链传染）；Scope.TRANSIENT 每次注入都新建。"],code:`@Module({
  providers: [
    { provide: 'CONFIG', useValue: { port: 3000 } },            // 常量
    { provide: 'Storage', useClass: S3Storage },                 // 可替换实现
    {                                                            // 异步工厂
      provide: 'DB_POOL',
      useFactory: async (config) => createPool(config),
      inject: ['CONFIG'],
    },
  ],
})
export class CoreModule {}

// 注入字符串 token 必须显式 @Inject
constructor(@Inject('DB_POOL') private pool: Pool) {}`,analogy:"useClass 切换实现 ≈ React 里通过 context 传组件实现（受控注入 UI 库）；Singleton 作用域 ≈ 模块级单例 module.exports，要警惕共享可变状态。"},links:[{name:"NestJS 中文文档 · 注入作用域",url:"https://docs.nestjs.cn/10/fundamentals/injection-scopes",type:"docs"}]},{d:7,tag:"数据校验",t:"DTO + class-validator + ValidationPipe",xp:120,desc:"声明式校验请求体：告别手写 if (!body.name)。这是 Nest 对 Express 开发者体验提升最大的一环。",lesson:{points:["DTO 是普通 class（必须 class，不能是 interface，运行时才拿得到元数据），字段上挂 @IsString() 等装饰器。","main.ts 里全局开启 ValidationPipe({ whitelist: true, transform: true })：多余字段剔除、payload 自动转成 DTO 实例。",'transform: true 让 @Param("id") 配合 @ParseIntPipe 直接得到 number，省去手写 Number()。',"校验失败自动抛 400 BadRequestException，message 里带具体哪个字段错了。","类比 React：DTO 装饰器就是 zod / formik 的 schema，但声明在类字段上，与 TS 类型天然同步。"],code:`import { IsString, IsInt, IsEmail, Min } from 'class-validator';

export class CreateUserDto {
  @IsString() name: string;
  @IsEmail() email: string;
  @IsInt() @Min(0) age: number;
}

// main.ts
app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

// controller
@Post()
create(@Body() dto: CreateUserDto) {
  return this.usersService.create(dto); // dto 已通过校验、字段已过滤
}`,analogy:"等于把 Express 里 30 行的手写校验 if 换成了 zod schema，而且 schema 本身就是 TS 类型。"},links:[{name:"NestJS 中文文档 · ValidationPipe 技术",url:"https://docs.nestjs.cn/10/techniques/validation",type:"docs"},{name:"class-validator 文档",url:"https://github.com/typestack/class-validator",type:"docs"}]},{d:8,tag:"错误处理",t:"异常过滤器：统一错误响应",xp:120,desc:"HttpException 家族 + @Catch 全局过滤器，把 Express 的错误中间件升级为强类型、可定制响应结构的异常层。",lesson:{points:['业务代码 throw new NotFoundException("cat not found")，Nest 自动转 404 JSON，无需 try/catch 传递。',"内置异常都带状态码：BadRequestException(400)、UnauthorizedException(401)、ForbiddenException(403)…","自定义响应结构用 @Catch() 装饰类实现 ExceptionFilter，@UseFilters(全局) 注册。","过滤器能拿到 host.switchToHttp().getResponse()，可完全接管响应体格式（如 { code, message, data }）。","未知异常统一 500 且生产环境隐藏细节——把 Express 的 error middleware 的 if/else 分支全部收进一个类。"],code:`@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    res.status(status).json({
      code: status,
      message: exception instanceof HttpException
        ? exception.message : 'Internal Server Error',
    });
  }
}

// main.ts: app.useGlobalFilters(new AllExceptionsFilter());`,analogy:"Express 里 app.use((err,req,res,next)=>{...}) 的地狱分支，在这里变成一个带类型的 catch-all，错误处理也有了 DI。"},links:[{name:"NestJS 中文文档 · 异常过滤器",url:"https://docs.nestjs.cn/10/exception-filters",type:"docs"}]},{d:9,tag:"中间件",t:"中间件：熟悉的 Express 味道",xp:100,desc:"Nest 中间件就是你写过的 Express 中间件，只是注册到模块上，还能依赖注入。",lesson:{points:["类中间件实现 NestMiddleware，@Injectable() 修饰，可以注入 Service——Express 中间件做不到（只能闭包传参）。",'在 Module 的 configure() 里 apply(...).forRoutes("cats") 按路由挂载，比 app.use 全局喷洒更精准。',"函数式中间件也支持：(req,res,next)=>{...}，与 Express 完全一致。","中间件、守卫、拦截器、管道、过滤器的执行顺序要背下来：Middleware → Guard → Interceptor(前) → Pipe → Handler → Interceptor(后) → ExceptionFilter。","第三方 Express 中间件（如 helmet、morgan）直接 app.use() 兼容——底层就是 Express（默认适配器）。"],code:`@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');
  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log(req.method + ' ' + req.originalUrl);
    next(); // 和 Express 一模一样
  }
}

@Module({ controllers: [CatsController] })
export class CatsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}`,analogy:"这是 30 天里最像 Express 的一天：next()、req/res 全都认识，区别只是注册写在了模块的 configure 里。"},links:[{name:"NestJS 中文文档 · 中间件",url:"https://docs.nestjs.cn/10/middleware",type:"docs"}]},{d:10,tag:"横切关注点",t:"拦截器：AOP 式的请求包装",xp:120,desc:"用 RxJS 的 map/tap 在响应前后做统一处理：响应包裹、日志、耗时统计、缓存。",lesson:{points:["拦截器 = 可注入的类实现 NestInterceptor，围绕 handler 前后执行，相当于“中间件但能改返回值”。","核心是 next.handle() 返回 Observable<Response>，用 RxJS 操作符加工：map 改响应体、tap 做副作用（日志）。","经典用法：TransformInterceptor 把所有响应包成 { code:0, data, ts }——配合 Day8 过滤器形成统一协议。","TimingInterceptor 用 tap + 计时打日志，取代 Express 里手写的耗时中间件。","拦截器绑定方式多样：@UseInterceptors() 方法级 / controller 级 / APP_INTERCEPTOR 全局 token。"],code:`@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(ctx: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => ({ code: 0, data, ts: Date.now() })),
    );
  }
}

@Injectable()
export class TimingInterceptor implements NestInterceptor {
  intercept(ctx: ExecutionContext, next: CallHandler) {
    const start = Date.now();
    return next.handle().pipe(
      tap(() => console.log('耗时', Date.now() - start, 'ms')),
    );
  }
}

@UseInterceptors(TimingInterceptor, TransformInterceptor)
@Controller('cats') {}`,analogy:"像 React 的 ErrorBoundary + HOC 组合：不侵入组件（handler）内部，就在外层包一层统一加工 props（响应）。RxJS 的 pipe 就是这个包装语法。"},links:[{name:"NestJS 中文文档 · 拦截器",url:"https://docs.nestjs.cn/10/interceptors",type:"docs"}]},{d:11,tag:"管道",t:"管道与自定义装饰器",xp:120,desc:"内置 ParseIntPipe/ParseUUIDPipe、自写 ValidationPipe 思路，再结合参数装饰器打造 @CurrentUser()。",lesson:{points:["管道在 handler 前对参数做转换（transform）或校验（返回异常即拦截），@Pipe() 绑定在参数/方法/全局。",'内置开箱即用：@Query("page", ParseIntPipe)、@Param("id", ParseUUIDPipe)，配合 Day7 的 transform 直接得到正确类型。',"自定义管道实现 PipeTransform，transform(value, metadata) 返回处理后的值——比如把逗号分隔串转数组。","自定义参数装饰器：createParamDecorator((data, ctx) => ...)，几行实现 @CurrentUser()。","装饰器 + 管道 + 反射组合是 Nest 的“框架扩展 API”，RBAC 的 @Roles() 也是这套东西。"],code:`export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => ctx.switchToHttp().getRequest().user,
);

// 用法：JWT 守卫验证后 user 挂在 req 上
@Get('me')
me(@CurrentUser() user: User) {
  return user;
}

// 自定义管道
@Injectable()
export class ParseArrayPipe implements PipeTransform {
  transform(value: string, meta: ArgumentMetadata): string[] {
    if (!value) throw new BadRequestException('param required');
    return value.split(',');
  }
}
// @Query('ids', ParseArrayPipe) ids: string[]`,analogy:"管道 ≈ Express 里 req.params 处理的链式中间件，但绑定在具体参数上；@CurrentUser() ≈ React 里 useUser() hook——一行声明取上下文。"},links:[{name:"NestJS 中文文档 · 管道",url:"https://docs.nestjs.cn/10/pipes",type:"docs"}]},{d:12,tag:"认证",t:"JWT 认证与 Guard",xp:140,desc:"用 @nestjs/jwt + Passport 实现登录签发 token、JwtGuard 保护路由——Nest 接入认证的标准姿势。",lesson:{points:["守卫（Guard）实现 CanActivate，返回 true 放行 / false 抛 403，在中间件之后、管道之前执行，专职鉴权。","流程：POST /auth/login 校验账号 → jwtService.sign(payload) 发 token；受保护路由被 JwtAuthGuard 拦截解析 Bearer token。","Passport 策略（passport-jwt）负责“怎么验”，Guard 负责“拦不拦”，Nest 官方组合两者。","@SetMetadata + 自定义 @Public() 装饰器可让个别路由跳过全局 JWT 守卫（配合 Reflector 读元数据）。","Access Token 短期有效，Refresh Token 换新——之后 Day13 的 RBAC 在 payload 里加 role。"],code:`@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {} // 基于 passport-jwt 策略

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({ jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get('JWT_SECRET') });
  }
  async validate(payload: { sub: number; role: string }) {
    return payload; // 结果挂到 req.user
  }
}

@Controller('profile')
@UseGuards(JwtAuthGuard)
export class ProfileController {
  @Get() me(@CurrentUser() user) { return user; }
}`,analogy:"Guard ≈ React Router 的 <RequireAuth> 包装组件：路由渲染前判断“让不让进”，验证逻辑（Strategy）与守卫（跳转）分层，概念一模一样。"},links:[{name:"NestJS 中文文档 · 守卫",url:"https://docs.nestjs.cn/10/guards",type:"docs"},{name:"NestJS 中文文档 · 认证",url:"https://docs.nestjs.cn/10/security/authentication",type:"docs"}]},{d:13,tag:"认证",t:"RBAC：基于角色的权限控制",xp:130,desc:'@Roles("admin") + RolesGuard，用 Reflector 读路由元数据实现声明式权限，这是 Nest 元数据机制的实战巅峰。',lesson:{points:['@SetMetadata("roles", ["admin"]) 或封装成 @Roles(...) 参数装饰器，把权限要求写在路由上。',"RolesGuard 用 Reflector.getAllAndOverride 读取 handler/class 上的 roles 元数据，和 req.user.role 比对。","Guard 全局注册（APP_GUARD token）+ @Public() 白名单，是生产项目的主流组合。","角色硬编码够用，复杂场景升级 Casl 库（ability-based），装饰器换 @CheckAbilities()，思路不变。","声明式权限的收益：路由文件一扫就知道谁能访问，无需在 handler 里散落 if (user.role !== ...)。"],code:`export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(ctx: ExecutionContext): boolean {
    const required = this.reflector.getAllAndOverride<string[]>('roles', [
      ctx.getHandler(), ctx.getClass(),
    ]);
    if (!required) return true;
    const { user } = ctx.switchToHttp().getRequest();
    return required.includes(user.role); // 不满足则自动 403
  }
}

@Roles('admin')
@Delete(':id')
remove(@Param('id') id: string) { return this.usersService.remove(id); }`,analogy:"@Roles 之于接口，就像 aria-hidden / disabled 之于按钮：能力约束写在声明处，运行时由统一守卫强制执行，不用每处手写检查。"},links:[{name:"NestJS 中文文档 · 授权",url:"https://docs.nestjs.cn/10/security/authorization",type:"docs"},{name:"Casl 集成文档",url:"https://docs.nestjs.cn/10/security/authorization",type:"docs"}]},{d:14,tag:"数据库",t:"TypeORM 集成与实体建模",xp:140,desc:"连接 PostgreSQL/MySQL，定义 Entity，用 Repository 模式替代 SQL 拼接，理解 Nest 里的数据层。",lesson:{points:["TypeOrmModule.forRoot({ type, host, entities, synchronize }) 连库；生产环境务必关闭 synchronize，用迁移管理表结构。","@Entity() 类 = 一张表；@Column() / @PrimaryGeneratedColumn() / @OneToMany() 声明字段与关系。","forFeature([Cat]) 注册 Repository，Service 里 @InjectRepository(Cat) 注入——数据访问也有 DI。","Repository 内置 findAll(findOne/save/delete)，复杂查询用 QueryBuilder，参数化天然防 SQL 注入。","与 Express + mysql2 的裸写对比：不用自己管连接池封装和手写 CRUD SQL，但代价是 ORM 心智负担。"],code:`@Entity()
export class Cat {
  @PrimaryGeneratedColumn() id: number;
  @Column() name: string;
  @Column({ default: 0 }) age: number;
  @CreateDateColumn() createdAt: Date;
}

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat) private repo: Repository<Cat>,
  ) {}
  findAll() { return this.repo.find(); }
  create(dto: CreateCatDto) { return this.repo.save(this.repo.create(dto)); }
  async findOne(id: number) {
    const cat = await this.repo.findOneBy({ id });
    if (!cat) throw new NotFoundException('Cat not found'); // 404 就地抛
    return cat;
  }
}`,analogy:"Entity ≈ React 组件的 props 类型 + Prisma model 的合体；Repository ≈ 现成的 useFetch 封装，常用操作开箱即用。"},links:[{name:"NestJS 中文文档 · TypeORM 集成",url:"https://docs.nestjs.cn/10/techniques/database",type:"docs"}]},{d:15,tag:"数据库",t:"Prisma：类型安全的现代替代",xp:120,desc:"Prisma schema 生成 TS 类型 + PrismaService 注入，对比 TypeORM 的取舍——很多新项目已从 TypeORM 迁到 Prisma。",lesson:{points:["schema.prisma 声明模型，npx prisma generate 生成带完整类型的 client——查询结果自动推断，比 TypeORM 的类型体验好一档。","PrismaService 继承 PrismaClient 并实现 OnModuleInit 里 $connect()，包一层就能被 Nest 容器管理。","prisma migrate dev 生成迁移文件并应用；无 synchronize 陷阱，schema 即唯一事实来源。","prisma.user.findMany({ where, include: { posts: true } }) 一条链完成关联查询，QueryBuilder 基本不需要。","取舍：Prisma 迁走了“手写 Entity 双份定义”的心智，但动态复杂 SQL 灵活性略低于 QueryBuilder。"],code:`// schema.prisma
// model Cat { id Int @id @default(autoincrement())
//   name String  age Int @default(0)  createdAt DateTime @default(now()) }

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() { await this.$connect(); }
}

@Injectable()
export class CatsService {
  constructor(private prisma: PrismaService) {}
  findAll() { return this.prisma.cat.findMany(); }
  create(data: CreateCatDto) { return this.prisma.cat.create({ data }); }
}`,analogy:"schema.prisma 之于数据库，就像 TS 类型文件之于前端项目：一处声明，处处自动补全，改字段即编译报错。"},links:[{name:"NestJS 官方 · Prisma 集成",url:"https://docs.nestjs.com/recipes/prisma",type:"docs"},{name:"Prisma 官方文档",url:"https://www.prisma.io/docs",type:"docs"}]},{d:16,tag:"配置",t:"配置管理与环境变量",xp:100,desc:"@nestjs/config 读取 .env，ConfigModule 全局化、类型安全校验（Joi/zod），告别 process.env 散落各处。",lesson:{points:['ConfigModule.forRoot({ isGlobal: true }) 加载 .env，任意处注入 ConfigService 读取 configService.get("JWT_SECRET")。','配置文件模式：写一个 configuration.ts 返回嵌套对象，configService.get("db.port") 更结构化。',"环境切换 NODE_ENV=development/production 加载不同 .env 文件；.env 务必进 .gitignore。","用 Joi（或 zod）做 env 校验：启动时缺变量直接报错，而不是上线后才炸。","类 React：.env ≈ Vite 的 import.meta.env，ConfigService ≈ 统一的 env.ts 访问层，注入让依赖显式化。"],code:`// configuration.ts
export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  db: { host: process.env.DB_HOST },
  jwt: { secret: process.env.JWT_SECRET },
});

// app.module.ts
ConfigModule.forRoot({
  isGlobal: true,
  load: [configuration],
  validationSchema: Joi.object({ PORT: Joi.number(), JWT_SECRET: Joi.string().required() }),
});

// 注入使用
constructor(private config: ConfigService) {}
const port = this.config.get<number>('port');`,analogy:"等价于前端把 import.meta.env 收口到一个 env.ts 里并跑一遍 zod 校验——启动即校验，坏配置活不过 build。"},links:[{name:"NestJS 中文文档 · 配置",url:"https://docs.nestjs.cn/10/techniques/configuration",type:"docs"}]},{d:17,tag:"文档",t:"Swagger 自动生成 API 文档",xp:100,desc:"接入 @nestjs/swagger，用 @ApiProperty 装饰 DTO，代码即文档——前端同事再也不来问你接口格式。",lesson:{points:['SwaggerModule.loadPluginMetadata / DocumentBuilder：build 标题版本 → createDocument → SwaggerModule.setup("docs")。',"DTO 字段加 @ApiProperty({ example }) 自动生成 schema；配合 ValidationPipe 的 whitelist，文档与校验同源。",'@ApiTags("cats") 给 controller 分组；@ApiOperation({ summary }) 描述接口；@ApiResponse({ status: 404 }) 声明错误。',"CLI 插件（@nestjs/swagger plugin）可在 tsconfig 配 plugins 后自动推断文档，免写装饰器。","访问 /docs 即得交互式 Swagger UI，可导出 OpenAPI JSON 给前端生成类型（openapi-typescript）。"],code:`// main.ts
const config = new DocumentBuilder()
  .setTitle('Cats API').setVersion('1.0').addBearerAuth().build();
const doc = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('docs', app, doc);

// dto
export class CreateCatDto {
  @ApiProperty({ example: 'Tom' })
  @IsString() name: string;
}`,analogy:"等于前端 Storybook 的后端版：真实代码自动产出可交互的接口文档，类型变了文档跟着变，不存在“文档过期”。"},links:[{name:"NestJS 中文文档 · OpenAPI(Swagger)",url:"https://docs.nestjs.cn/10/openapi/introduction",type:"docs"}]},{d:18,tag:"日志",t:"日志与可观测性",xp:110,desc:"内置 Logger、请求日志拦截器、接入 pino 结构化日志，让生产环境的问题可追溯。",lesson:{points:["Nest 自带 Logger：new Logger(ClassName.name)，logger.log/warn/error，带时间戳与上下文。","自定义 LoggerService 可以替换全局实现：app.useLogger(new MyLogger())，例如接 ELK/云日志。","生产推荐 nestjs-pino：JSON 结构化日志 + 请求日志自动记录（含耗时、状态码），性能远好于 console。","日志分级 debug/info/warn/error，通过 LOG_LEVEL 环境变量控制输出，开发细、生产精。","结构化日志的核心：一行 JSON 一条事件，字段可检索——console.log 文本串在排查时是灾难。"],code:`// main.ts —— pino 接入
app.useLogger(app.get(Logger)); // nestjs-pino
// app.module.ts
LoggerModule.forRoot({
  pinoHttp: {
    level: process.env.LOG_LEVEL ?? 'info',
    transport: process.env.NODE_ENV !== 'production'
      ? { target: 'pino-pretty' } : undefined, // 本地美化，生产纯 JSON
  },
});

// 业务里
@Injectable()
export class CatsService {
  private logger = new Logger(CatsService.name);
  create(dto: CreateCatDto) {
    this.logger.log({ msg: 'cat created', name: dto.name });
    return { id: 1 };
  }
}`,analogy:"console.log 之于结构化日志 ≈ alert 之于 Sentry：临时可用，长期排查必须可检索、可聚合。"},links:[{name:"NestJS 中文文档 · Logger",url:"https://docs.nestjs.cn/10/techniques/logger",type:"docs"},{name:"nestjs-pino",url:"https://github.com/iamolegga/nestjs-pino",type:"tool"}]},{d:19,tag:"缓存",t:"性能：缓存与压缩",xp:120,desc:"CacheModule（或 Redis）给热点接口加缓存、cache-manager 基础、响应压缩与 @CacheTTL 调优。",lesson:{points:["CacheModule.register() 内存缓存 + @UseInterceptors(CacheInterceptor) + @CacheTTL(60)：GET 响应自动缓存 60 秒。","需要主动控制时注入 CACHE_MANAGER：cacheManager.get/set/del，适合“写时失效”模式（更新数据后 del 缓存）。","生产用 Redis：CacheModule.registerAsync({ useFactory: () => ({ store: redisStore, ... }) })，多实例共享缓存。","app.use(compression()) 开 gzip 响应压缩，一行白赚传输量；静态资源交给 CDN。","缓存原则：只缓存幂等 GET、写操作后主动失效、考虑缓存击穿时给 key 加随机 TTL。"],code:`@Module({ imports: [CacheModule.register({ ttl: 60 })] })
export class CatsModule {}

@Controller('cats')
@UseInterceptors(CacheInterceptor) // 自动缓存所有 GET 响应
export class CatsController {
  constructor(@Inject(CACHE_MANAGER) private cache: Cache) {}

  @Get('expensive')
  @CacheTTL(300)
  expensive() { return heavyCompute(); }

  @Post()
  async create(@Body() dto: CreateCatDto) {
    await this.cache.del('cats_all'); // 写后失效
    return { ok: true };
  }
}`,analogy:"和 React Query 的 staleTime 缓存概念一致：TTL 内直接返回旧数据，mutation 成功后 invalidate 缓存键。"},links:[{name:"NestJS 中文文档 · Caching",url:"https://docs.nestjs.cn/10/techniques/caching",type:"docs"}]},{d:20,tag:"架构",t:"CQRS 概览：读写分离思想",xp:130,desc:"了解 @nestjs/cqrs：Command 负责写、Query 负责读、Event 解耦副作用。先懂思想，不必急着用。",lesson:{points:["CQRS = Command Query Responsibility Segregation：写操作走 CommandBus，读操作走 QueryBus，各自独立建模。","Handler 是 @CommandHandler(CreateCatCommand) 类，业务逻辑从 Service 的“上帝方法”拆成一个个独立小类。","EventBus 发布事件（如 CatCreatedEvent），多个 @EventsHandler 各自响应（发邮件、写审计）——写路径与副作用解耦。","适用场景：写读比例悬殊、业务复杂到单 Service 膨胀；简单 CRUD 上 CQRS 是过度设计，别为了架构而架构。","与 Express 对比：Express 没有这层抽象，事件解耦要自己搭 EventEmitter——Nest 给了现成的、带 DI 的实现。"],code:`export class CreateCatCommand { constructor(public readonly name: string) {} }

@CommandHandler(CreateCatCommand)
export class CreateCatHandler implements ICommandHandler<CreateCatCommand> {
  constructor(private repo: CatsRepository, private bus: EventBus) {}
  async execute(cmd: CreateCatCommand) {
    const cat = await this.repo.save(cmd.name);
    this.bus.publish(new CatCreatedEvent(cat.id)); // 副作用交给事件
    return cat;
  }
}

// controller
@Post()
create(@Body('name') name: string) {
  return this.commandBus.execute(new CreateCatCommand(name));
}`,analogy:"像前端从“一个大 reducer”拆成 Redux Toolkit 的独立 slice：每个 action 一个 reducer，事件广播让订阅者各自处理，写路径不再膨胀。"},links:[{name:"NestJS 中文文档 · CQRS",url:"https://docs.nestjs.cn/10/recipes/cqrs",type:"docs"}]},{d:21,tag:"测试",t:"单元测试：Jest + DI 的红利",xp:130,desc:"Test.createTestingModule 替换依赖为 mock，Service/Controller 单元测试快如闪电。",lesson:{points:["nest new 生成的 .spec.ts 就是 Jest 单测；npm run test 全量、test:watch 增量、test:cov 覆盖率。","核心 API：Test.createTestingModule({ controllers, providers: [{ provide: CatsService, useValue: mock }] }).compile()。","依赖注入让 mock 成为一等公民：useValue 直接换成 stub 对象，无需 monkey-patch require。","用 jest.fn() 记录调用断言：expect(spy).toHaveBeenCalledWith(dto)。","测试要覆盖的行为：正常路径、边界（空列表）、抛异常路径（NotFound），命中即足够，别追覆盖率数字。"],code:`describe('CatsController', () => {
  let controller: CatsController;
  const serviceMock = { findAll: jest.fn().mockResolvedValue(['Tom']) };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [{ provide: CatsService, useValue: serviceMock }],
    }).compile();
    controller = moduleRef.get(CatsController);
  });

  it('返回所有猫', async () => {
    expect(await controller.findAll()).toEqual(['Tom']);
    expect(serviceMock.findAll).toHaveBeenCalled();
  });
});`,analogy:"等于把 React Testing Library 的“注入 mock props”搬到了后端：依赖都是注入的，测试时给假的就行，无网络无数据库。"},links:[{name:"NestJS 中文文档 · 单元测试",url:"https://docs.nestjs.cn/10/fundamentals/testing",type:"docs"}]},{d:22,tag:"测试",t:"E2E 测试：真实的 HTTP 请求",xp:120,desc:"supertest 对编译好的 app 发真实请求，验证整条路由 + 管道 + 过滤器链路。",lesson:{points:["E2E 测试文件在 test/ 目录：createTestingModule 编译整个 AppModule，app.init() 后用 request(app.getHttpServer()) 发请求。","断言完整行为：expect(res.status).toBe(201) + expect(res.body).toMatchObject({...})。","E2E 需要隔离环境：独立测试数据库（或 testcontainers 起容器），beforeAll 建表 / afterAll 清理。","推荐测“黄金路径 + 一两个错误路径”的完整链路，跑在 CI 里，比堆单元测试更能防回归。","jest-e2e.json 配置区分单测与 E2E，npm run test:e2e 运行。"],code:`describe('Cats (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe()); // 与生产一致
    await app.init();
  });

  it('POST /cats 创建并回读', async () => {
    const res = await request(app.getHttpServer())
      .post('/cats').send({ name: 'Tom', age: 3 });
    expect(res.status).toBe(201);
    const got = await request(app.getHttpServer()).get('/cats');
    expect(got.body).toContainEqual(expect.objectContaining({ name: 'Tom' }));
  });

  it('校验失败返回 400', async () => {
    const res = await request(app.getHttpServer())
      .post('/cats').send({ name: 123 });
    expect(res.status).toBe(400);
  });
});`,analogy:"就是前端 Playwright/Cypress 的后端版：不开 UI，直接对 HTTP 边界做“用户视角”断言。"},links:[{name:"NestJS 中文文档 · E2E 测试",url:"https://docs.nestjs.cn/10/fundamentals/testing",type:"docs"},{name:"supertest",url:"https://github.com/ladjs/supertest",type:"tool"}]},{d:23,tag:"性能",t:"性能：N+1、连接池与负载",xp:130,desc:"排查 ORM 的 N+1 查询、启用连接池、理解 Node 单进程瓶颈与 PM2 多进程。",lesson:{points:["N+1 是最大杀手：循环里逐条查询。用 relations/join 预加载（TypeORM）或 include（Prisma）一次取回。","连接池是标配：TypeORM 连接自带池，Prisma 用 connection_limit 参数；池太小吞吐上不去，太大压垮数据库。","Node 是单进程：PM2 cluster 模式按 CPU 核数起多进程，或用容器多副本 + 负载均衡。","接口慢先量化：pino 请求日志耗时 → APM（如 OpenTelemetry）定位到具体 SQL，别凭感觉优化。","大列表必须分页（skip/take + count），排序字段建索引——这在任何框架里都成立。"],code:`// 反例：N+1
const cats = await repo.find();
for (const c of cats) c.owner = await ownerRepo.findOneBy({ id: c.ownerId });

// 正解：一次 join
const cats = await repo.find({ relations: { owner: true } });

// Prisma 等价
const cats = await prisma.cat.findMany({ include: { owner: true } });

// 分页
@Get()
async page(@Query('page', ParseIntPipe) page = 1,
           @Query('size', ParseIntPipe) size = 20) {
  const [items, total] = await this.repo.findAndCount({
    skip: (page - 1) * size, take: size,
    relations: { owner: true },
  });
  return { items, total, page, size };
}`,analogy:"N+1 之于 ORM ≈ React 里 map 里逐个 setState 触发多次重渲染：不合并批处理，渲染（查询）次数爆炸。"},links:[{name:"TypeORM 性能与连接池",url:"https://orkhan.gitbook.io/typeorm/docs/connection",type:"docs"}]},{d:24,tag:"部署",t:"Docker 容器化",xp:130,desc:"写多阶段构建的 Dockerfile：builder 装依赖编译，runner 只带 dist + 生产依赖，镜像从 1GB 瘦到 200MB。",lesson:{points:["多阶段构建：FROM node:20 AS builder 装全部依赖并 nest build；FROM node:20 AS runner 只拷 dist、node_modules(生产) 与 package.json。","runner 阶段 npm ci --omit=dev，并建非 root 用户运行（USER node），安全基线。",".dockerignore 排除 node_modules/dist/.git，避免缓存与体积爆炸。","配置全走环境变量（Day16 的 ConfigService）：容器无 .env 文件，docker run -e 或 compose env_file 注入。","docker-compose 编排 app + postgres + redis，depends_on + healthcheck 处理启动顺序。"],code:`# ---- builder ----
FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ---- runner ----
FROM node:20 AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --omit=dev && chown -R node:node /app
COPY --from=builder --chown=node:node /app/dist ./dist
USER node
CMD ["node", "dist/main.js"]`,analogy:"等价于前端 build 产物只部署 dist：builder 里的源码、devDeps 都不进最终镜像，产物最小化。"},links:[{name:"NestJS 中文文档 · Docker",url:"https://docs.nestjs.cn/10/deployment",type:"docs"}]},{d:25,tag:"部署",t:"CI/CD 与生产检查清单",xp:120,desc:"GitHub Actions 跑测试 → 构建镜像 → 部署；过一遍上线前的 Nest 项目检查清单。",lesson:{points:["CI 流水线：npm ci → lint → test → test:e2e → docker build → push registry → 部署（ssh/k8s/云平台）。","生产清单：synchronize:false + 迁移、全局 ValidationPipe、异常过滤器、helmet、CORS 白名单、rate-limit。","优雅停机：SIGTERM 时 app.close() + 数据库连接收尾（enableShutdownHooks），容器滚动更新不掉请求。","健康检查：@nestjs/terminus 暴露 /health（含 DB ping），供负载均衡探活。","环境隔离：staging 与 production 同一套镜像不同 env，配置注入不进代码——12-factor 原则。"],code:`// main.ts 生产加固
app.use(helmet());
app.enableCors({ origin: ['https://app.example.com'] });
app.enableShutdownHooks(); // SIGTERM -> app.close()

// 健康检查
@Controller('health')
export class HealthController {
  constructor(private health: HealthCheckService, private db: TypeOrmHealthIndicator) {}
  @Get()
  @HealthCheck()
  check() { return this.health.check([() => this.db.pingCheck('database')]); }
}`,analogy:"CI 流水线就像前端的 Vercel 自动部署，但多了测试门禁：测试不过连构建都不该发生。"},links:[{name:"NestJS 中文文档 · 健康检查(terminus)",url:"https://docs.nestjs.cn/10/recipes/terminus",type:"docs"},{name:"NestJS 官方 · Deployment",url:"https://docs.nestjs.com/deployment",type:"docs"}]},{d:26,tag:"进阶",t:"动态模块与 Nest 源码阅读",xp:140,desc:"手写一个 forRoot 风格的动态模块，顺带读懂 Nest 源码里 Container/Scanner 如何组装一切。",lesson:{points:["DynamicModule = { module, providers, exports } 的对象：静态方法 ConfigModule.forRoot(opts) 返回它，把调用时配置带进元数据。","经典范式：forRoot 全局注册连接，forFeature 按需注册各业务实体/仓库，两条套路撑起 TypeORM/Prisma 的模块 API。","源码入口：packages/core 包的 NestContainer + metadata-scanner——启动就是“收集元数据 → 建实例图 → 实例化”三步。","读懂源码后你能：写自己的集成库、排查循环依赖（forwardRef）与注入顺序问题。","AsyncProvider（useFactory async）是动态模块的常见搭档：连接数据库后才能注入的 provider 都靠它。"],code:`@Module({})
export class MySdkModule {
  static forRoot(opts: { apiKey: string }): DynamicModule {
    return {
      module: MySdkModule,
      providers: [
        { provide: 'SDK_OPTS', useValue: opts },
        { provide: SdkClient, useFactory: (o) => new SdkClient(o), inject: ['SDK_OPTS'] },
      ],
      exports: [SdkClient],
    };
  }
}

// 使用
@Module({ imports: [MySdkModule.forRoot({ apiKey: 'xxx' })] })
export class AppModule {}`,analogy:"forRoot ≈ 前端组件库的 <ThemeProvider theme={...}>：一次配置全局注入，forFeature 则是各处 useTheme() 按需取用。"},links:[{name:"NestJS 中文文档 · 动态模块",url:"https://docs.nestjs.cn/10/fundamentals/dynamic-modules",type:"docs"}]},{d:27,tag:"进阶",t:"WebSocket 与实时通信",xp:120,desc:"@nestjs/websockets + socket.io 网关：@SubscribeMessage 处理消息，与 HTTP 共享同一套 DI 与守卫。",lesson:{points:['WebSocketGateway({ cors }) 声明网关类，@SubscribeMessage("events") 处理客户端 emit，返回值即回执（ack）。',"handleConnection/handleDisconnect 生命周期钩子管理在线状态；@ConnectedSocket/@MessageBody 取参数。","网关也是 Provider：可注入 Service、可用 Guard 鉴权（WS 握手时校验 token，需要自定义 adapter）。","服务端主动推送：server.emit(...) 或 WsExceptionFilter 处理 WS 错误，机制与 HTTP 层一一对应。","横切组件（Guard/Pipe/Interceptor）在 WS 层同样适用——学一套概念吃下两种协议。"],code:`@WebSocketGateway({ cors: { origin: '*' } })
export class ChatGateway implements OnGatewayConnection {
  @WebSocketServer() server: Server;

  constructor(private chatService: ChatService) {}

  handleConnection(client: Socket) {
    this.server.emit('online', this.server.engine.clientsCount);
  }

  @SubscribeMessage('chat')
  async onChat(@MessageBody() dto: ChatDto, @ConnectedSocket() client: Socket) {
    const saved = await this.chatService.save(dto);
    this.server.emit('chat', saved); // 广播
    return saved; // ack 给发送者
  }
}`,analogy:"Gateway ≈ 组件里的事件订阅：@SubscribeMessage 像 onEvent，server.emit 像 emit 出去的事件总线，只是跑在服务端。"},links:[{name:"NestJS 中文文档 · WebSocket 网关",url:"https://docs.nestjs.cn/10/websockets/gateways",type:"docs"}]},{d:28,tag:"进阶",t:"任务调度、队列与微服务概览",xp:120,desc:"@nestjs/schedule 定时任务、BullMQ 队列削峰、@nestjs/microservices 传输器——后端三板斧补完。",lesson:{points:['@nestjs/schedule：@Cron("0 0 * * *") 定时、@Interval/@Timeout 固定间隔，注册在 providers 即可。','BullMQ（基于 Redis）处理耗时任务：@Processor("email") 消费者 + Queue.add 投递，请求秒回、任务后台跑。',"队列解决的本质问题：HTTP 请求不该等 30 秒的导出/发信；重试、限流、优先级都是队列送的。","@nestjs/microservices：@MessagePattern 换个传输器（TCP/Redis/Kafka）就是微服务，业务代码几乎不动。","选型直觉：单机够用就别上微服务；先队列后拆分，逐步演进。"],code:`@Injectable()
export class TasksService {
  @Cron('0 3 * * *') // 每天凌晨3点
  cleanup() { console.log('清理过期数据'); }
}

@Processor('email')
export class EmailProcessor extends WorkerHost {
  async process(job: Job<{ to: string }>) {
    await sendMail(job.data.to);
  }
}

@Injectable()
export class MailService {
  constructor(@InjectQueue('email') private queue: Queue) {}
  async send(to: string) { await this.queue.add('send', { to }); }
}`,analogy:"队列之于后端 ≈ requestIdleCallback / 消息通知之于前端 UI：耗时的活儿不阻塞主请求，后台慢慢消化。"},links:[{name:"NestJS 中文文档 · 任务调度",url:"https://docs.nestjs.cn/10/techniques/task-scheduling",type:"docs"},{name:"NestJS 中文文档 · 队列",url:"https://docs.nestjs.cn/10/techniques/queues",type:"docs"}]},{d:29,tag:"综合",t:"毕业项目：完整 Blog API",xp:200,desc:"整合 28 天所学：模块化 Blog API——JWT + RBAC、CRUD + 分页、校验、Swagger、日志、缓存、E2E 测试。",lesson:{points:["架构骨架：AppModule / AuthModule(JWT+RolesGuard) / UsersModule / PostsModule / PrismaModule + 全局 Pipe/Filter/Interceptor。","功能清单：注册登录、角色管理（admin 能删任意文章）、文章 CRUD + 分页搜索、评论归属校验、/health 探活。","质量底线：DTO 校验全覆盖、单测覆盖 Service、E2E 覆盖登录与 CRUD 主链路、统一响应与错误结构。","文档：Swagger 全接口可见、示例值齐全——把它当简历上的作品集链接。","做完这个项目，你已具备“Nest 后端工程师”的完整拼图，可自信应对从 0 到 1 的服务搭建。"],code:`// app.module.ts —— 毕业项目全景
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    ThrottlerModule.forRoot([{ ttl: 60000, limit: 100 }]),
    PrismaModule, AuthModule, UsersModule, PostsModule,
    BullModule.registerQueue({ name: 'email' }),
    ScheduleModule.forRoot(),
  ],
  providers: [
    { provide: APP_GUARD, useClass: ThrottlerGuard },
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
  ],
})
export class AppModule {}`,analogy:"这一步就像把你拆过的 React 组件拼回完整页面：每一块你都独立写过，现在考验的是组装与集成能力。"},links:[{name:"NestJS 官方示例仓库 nest/nest-sample",url:"https://github.com/nestjs/nest/tree/master/sample",type:"blog"}]},{d:30,tag:"综合",t:"复盘与后续路线",xp:100,desc:"30 天知识图谱复盘：三层架构、元数据编程、生命周期全览；给出 NestJS 之后的进阶方向。",lesson:{points:["知识主线回顾：IoC/装饰器(Day2-3) → 模块与组件(Day4-6) → 请求管线(Day7-11) → 安全(Day12-13) → 数据(Day14-15) → 质量与部署(Day21-25) → 进阶(Day26-29)。","请求生命周期再背一遍：Middleware → Guard → Interceptor(前) → Pipe → Handler → Interceptor(后) → Filter——面试高频。","进阶方向：GraphQL (@nestjs/graphql)、gRPC 微服务、OpenTelemetry 全链路追踪、Kubernetes 部署、Serverless 适配。","能力自检：能否 30 分钟从零起一个带鉴权+DB+Swagger 的服务？能，则出师。","持续学习：Nest 官方 samples 仓库 + awesome-nestjs 列表，源码是最好的老师。"],code:`// 请求生命周期速查（面试背这个）
// 1. Middleware      日志/CORS 等横切前置
// 2. Guards          鉴权（JWT/RBAC）
// 3. Interceptors(前)  拦截/包装
// 4. Pipes           参数校验与转换
// 5. Handler         业务逻辑
// 6. Interceptors(后)  响应包装(RxJS map)
// 7. ExceptionFilter 异常兜底
// 8. 响应序列化 -> 客户端`,analogy:"像学完 React 后的“心智模型复检”：Fiber 的调度顺序你未必天天用，但面试和排查问题时它决定你的上限。"},links:[{name:"NestJS 官方 samples",url:"https://github.com/nestjs/nest/tree/master/sample",type:"blog"},{name:"awesome-nestjs",url:"https://github.com/nestjs/awesome-nestjs",type:"blog"},{name:"NestJS 中文文档",url:"https://docs.nestjs.cn/10/",type:"docs"}]}],gd={1:{prompt:"写一个 BooksController：GET /books 返回数组，POST /books 添加一本。要求用装饰器声明路由，不写任何 app.get()。",starter:`@Controller('books')
export class BooksController {
  private books: string[] = [];

  // TODO: 补全两个路由方法
}`,answer:`@Controller('books')
export class BooksController {
  private books: string[] = [];

  @Get()
  findAll(): string[] {
    return this.books;
  }

  @Post()
  create(@Body('title') title: string) {
    this.books.push(title);
    return { created: title };
  }
}`,expected:'GET /books 返回 []；POST {"title":"三体"} 后 GET 返回 ["三体"]。'},2:{prompt:"让 BooksController 注入 BooksService：Service 提供 findAll/create，Controller 不自己存数据。补全构造函数与模块注册。",starter:`@Injectable()
export class BooksService {
  private books: string[] = [];
  findAll() { return this.books; }
  create(title: string) { this.books.push(title); }
}

@Controller('books')
export class BooksController {
  // TODO: 注入 BooksService 并实现路由
}`,answer:`@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll() { return this.booksService.findAll(); }

  @Post()
  create(@Body('title') title: string) {
    this.booksService.create(title);
    return { created: title };
  }
}

@Module({
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}`,expected:"app 启动后两个接口行为与 Day1 一致，但数据逻辑全部在 Service 中，构造函数无 new。"},3:{prompt:'手写一个 @Version("v1") 类装饰器，把版本号写进类的元数据，并提供 getVersion(cls) 函数读取。',starter:`function Version(v: string) {
  // TODO: 用 Reflect.defineMetadata 存元数据
}

function getVersion(cls: Function): string {
  // TODO: Reflect.getMetadata 读取
}`,answer:`import 'reflect-metadata';

const VERSION_KEY = 'route:version';

function Version(v: string): ClassDecorator {
  return (target) => {
    Reflect.defineMetadata(VERSION_KEY, v, target);
  };
}

function getVersion(cls: Function): string {
  return Reflect.getMetadata(VERSION_KEY, cls) ?? 'v0';
}

@Version('v1')
class BooksController {}
console.log(getVersion(BooksController)); // 'v1'`,expected:"控制台输出 'v1'。"},4:{prompt:"建立 CatsModule 与 DogsModule，CatsModule 导出 CatsService，DogsModule imports 后注入使用（如打印“狗也想撸猫”）。",starter:"// TODO: 补全两个模块，使 DogsService 能注入 CatsService",answer:`@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {}

@Module({
  imports: [CatsModule],
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule {}

@Injectable()
export class DogsService {
  constructor(private catsService: CatsService) {} // 来自 CatsModule
  meow() { return this.catsService.findAll(); }
}`,expected:"DogsModule 中能成功注入 CatsService；若 CatsModule 不 exports 则启动报错（可验证）。"},5:{prompt:"实现 GET /users/:uid/orders/:oid?verbose=1，返回 { uid, oid, verbose }，并让 POST /users 返回 204。",starter:`@Controller('users')
export class UsersController {
  // TODO: 补全路由
}`,answer:`@Controller('users')
export class UsersController {
  @Get(':uid/orders/:oid')
  getOrder(
    @Param('uid') uid: string,
    @Param('oid') oid: string,
    @Query('verbose') verbose?: string,
  ) {
    return { uid, oid, verbose: verbose === '1' };
  }

  @Post()
  @HttpCode(204)
  create() {
    return;
  }
}`,expected:'GET /users/7/orders/3?verbose=1 → {"uid":"7","oid":"3","verbose":true}；POST /users → 204。'},6:{prompt:'注册一个字符串 token 的 Provider："START_TIME"（useValue 为 Date.now()），并在 Controller 里注入打印服务已运行秒数。',starter:`@Module({
  providers: [
    // TODO: 提供 START_TIME
  ],
})
export class AppModule {}`,answer:`// app.module.ts
providers: [
  { provide: 'START_TIME', useValue: Date.now() },
],

// controller
@Controller('meta')
export class MetaController {
  constructor(@Inject('START_TIME') private start: number) {}

  @Get('uptime')
  uptime() {
    return { seconds: Math.floor((Date.now() - this.start) / 1000) };
  }
}`,expected:"GET /meta/uptime 返回递增的秒数，同一实例共享同一 START_TIME。"},7:{prompt:"给 CreateBookDto 加校验：title 必填字符串、year 是 1900-2100 的整数，开启全局 ValidationPipe 并过滤多余字段。",starter:`export class CreateBookDto {
  title: string;
  year: number;
}`,answer:`import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsInt()
  @Min(1900)
  @Max(2100)
  year: number;
}

// main.ts
app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));`,expected:'POST 传 {"title":"三体","year":2050,"hack":1} 时 hack 被剔除；year=1850 返回 400 并提示 year 校验失败。'},8:{prompt:"写 HttpExceptionFilter：捕获所有异常，响应体统一为 { code, path, message }，并注册为全局过滤器。",starter:`@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  // TODO: 实现 catch
}`,answer:`@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse();
    const req = ctx.getRequest();
    const status = exception instanceof HttpException
      ? exception.getStatus() : 500;
    res.status(status).json({
      code: status,
      path: req.url,
      message: exception instanceof HttpException
        ? exception.message : 'Internal Server Error',
    });
  }
}

// main.ts
app.useGlobalFilters(new HttpExceptionFilter());`,expected:'任意路由抛 NotFoundException("nope") 后，响应为 {"code":404,"path":"/xx","message":"nope"}。'},9:{prompt:"写一个函数式中间件，给所有 /api 路由的响应头加 X-Request-Id（随机 id），绑定到 ApiModule。",starter:`export function requestId(req: Request, res: Response, next: NextFunction) {
  // TODO
}`,answer:`import { randomUUID } from 'crypto';

export function requestId(req: Request, res: Response, next: NextFunction) {
  res.setHeader('X-Request-Id', randomUUID());
  next();
}

@Module({
  controllers: [ApiController],
})
export class ApiModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(requestId).forRoutes('api');
  }
}`,expected:"curl -i /api/anything 能看到 X-Request-Id 响应头，每次不同。"},10:{prompt:"写 LoggingInterceptor：打印每个请求的方法、路径、耗时，并把响应数据原样透传（不改变结构）。",starter:`@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  // TODO
}`,answer:`@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private logger = new Logger('HTTP');
  intercept(ctx: ExecutionContext, next: CallHandler): Observable<any> {
    const req = ctx.switchToHttp().getRequest();
    const start = Date.now();
    return next.handle().pipe(
      tap((data) => this.logger.log(
        req.method + ' ' + req.url + ' ' + (Date.now() - start) + 'ms')),
    );
  }
}

// main.ts
app.useGlobalInterceptors(new LoggingInterceptor());`,expected:'每个请求在控制台输出形如 "[HTTP] GET /cats 12ms" 的日志，响应体不受影响。'}},fd={1:[{q:"Nest Controller 方法中，如何接收 POST 请求体？",options:["函数第一个参数默认是 req，用 req.body","用 @Body() 装饰器修饰一个参数","必须继承 BaseBody 类",'只能通过 res.on("data") 读取'],answer:1,explain:"Nest 用参数装饰器声明式取值，@Body() 直接得到解析后的 JSON，类型由 DTO 保证。"},{q:"与 Express 相比，Nest 中返回 JSON 的方式是？",options:["必须 res.json(data)","必须 return new Response(data)","方法直接 return 数据即可","需要调用 next(data)"],answer:2,explain:"Nest 接管响应流，handler 直接 return，框架负责序列化；一旦注入 @Res 才需手动响应。"}],2:[{q:"Nest 中 @Injectable() 的作用是？",options:["让类变成单例页面组件","标记类为 Provider，可被 IoC 容器管理并注入","注册一个 HTTP 中间件","开启 TypeScript 严格模式"],answer:1,explain:"@Injectable 是进入 DI 容器的标记，配合模块的 providers 注册后即可在构造函数中注入。"},{q:"依赖注入对单元测试最大的好处是？",options:["让测试跑得更快因为不用网络","可以直接在测试中传入 mock 实现替换真实依赖","自动生成测试用例","测试代码不需要类型"],answer:1,explain:"DI 让依赖可替换：providers: [{ provide: X, useValue: mockX }] 即可，无需改业务代码。"}],3:[{q:"Nest 依赖装饰器能按“类型”自动注入，靠的是 tsconfig 的哪个选项？",options:["strict: true","emitDecoratorMetadata","esModuleInterop","resolveJsonModule"],answer:1,explain:"emitDecoratorMetadata 会写入 design:type 元数据，Nest 据此反射出构造参数类型完成注入。"},{q:"装饰器本质上是？",options:["一种新的类语法，编译器内置魔法","接收目标并修改/记录它的普通函数","只能在 React 中使用的 HOC","Node 原生模块"],answer:1,explain:"装饰器就是函数：类装饰器拿到 constructor，方法装饰器拿到原型与属性名，配合 Reflect Metadata 做记录。"}],4:[{q:"B 模块想注入 A 模块的 CatsService，必须满足？",options:["CatsService 加 @Global()","A 模块 exports: [CatsService] 且 B 模块 imports: [AModule]","把 CatsService 放到 AppModule","用 require 直接引入"],answer:1,explain:"Provider 默认模块私有，exports + imports 是显式的模块间依赖通道。"},{q:"TypeOrmModule.forRoot({...}) 这种模式叫？",options:["混入模式","动态模块：静态方法返回带配置的 DynamicModule","单例工厂","装饰器链"],answer:1,explain:"forRoot 返回 DynamicModule，把调用参数转成 providers 元数据，是 Nest 生态的标准扩展模式。"}],5:[{q:"在方法里注入了 @Res() res 后，最需要注意什么？",options:["响应会自动更快","Nest 不再自动序列化返回值，必须手动 res.json()/send()，否则请求挂起","必须返回 Observable","管道会失效"],answer:1,explain:"注入原生 res 即接管响应，return 的值会被忽略；不主动响应会一直 pending。"},{q:'@Controller("users") 内 @Get(":id/posts") 匹配的路径是？',options:["/id/posts","/users/:id/posts","/posts/:id","/users:id/posts"],answer:1,explain:"控制器前缀与方法路径拼接，冒号占位是 Nest 的动态路由参数（与 Express 同源）。"}],6:[{q:"useFactory 的异步工厂适合什么场景？",options:["让接口响应更快","需要先 await 连接/初始化再产出实例的 Provider（如数据库连接池）","替代拦截器","延迟编译 TypeScript"],answer:1,explain:"useFactory 支持 async，容器会等待 Promise resolve 后再注入，是连接类资源的标准做法。"},{q:"Nest Provider 默认作用域是？",options:["每个请求新建实例","单例：应用内共享一个实例","每次注入新建","每秒重建"],answer:1,explain:"默认 Singleton，因此 Service 的实例属性会被所有请求共享，不要存 per-request 状态。"}],7:[{q:"ValidationPipe 要生效，DTO 必须是？",options:["interface","type alias","class（装饰器是运行时元数据）","enum"],answer:2,explain:"class-validator 的装饰器写在类字段上，interface 编译后消失，运行时无校验信息。"},{q:"ValidationPipe({ whitelist: true }) 的效果是？",options:["只允许登录用户访问","剔除 DTO 中未声明的多余字段","给响应加白名单头","开启 CORS"],answer:1,explain:"whitelist 按 DTO 定义过滤 payload，防止恶意塞字段；配合 forbidNonWhitelisted 可直接报 400。"}],8:[{q:'throw new NotFoundException("x") 会发生什么？',options:["进程崩溃",'Nest 自动转成 404 响应，body 为 { statusCode:404, message:"x" }',"返回 500","被 try/catch 吞掉"],answer:1,explain:"内置 HttpException 家族由框架兜底转 HTTP 响应，业务代码无需层层 try/catch。"},{q:"自定义异常过滤器 @Catch() 不带参数意味着？",options:["只捕获 HttpException","捕获所有类型异常","不生效","只捕获异步异常"],answer:1,explain:"@Catch() 空参 = 捕获一切未处理异常；@Catch(HttpException) 则只捕获指定类型。"}],9:[{q:"请求进来后，正确的执行顺序是？",options:["Guard → Middleware → Pipe → Handler","Middleware → Guard → Interceptor → Pipe → Handler","Pipe → Handler → Guard","Handler → Guard → Pipe"],answer:1,explain:"顺序：中间件 → 守卫 → 拦截器(前) → 管道 → handler，面试高频，也是排查顺序问题的依据。"},{q:"第三方 Express 中间件（如 helmet）在 Nest 中如何用？",options:["必须改写成类","直接 app.use(helmet())，底层默认就是 Express 适配器","注册进 providers","不兼容，需要 fastify"],answer:1,explain:"Nest 默认跑在 Express 上，main.ts 里 app.use() 与 Express 写法完全一致。"}],10:[{q:"拦截器 next.handle() 返回的是？",options:["Promise","Response 对象","Observable（RxJS 流），可用 map/tap 加工响应","回调函数"],answer:2,explain:"拦截器基于 RxJS：pipe 里 map 改响应体、tap 做副作用，是 AOP 式包装的核心。"},{q:"想把所有响应统一包成 { code, data }，最佳位置是？",options:["每个 handler 手写包装","异常过滤器","全局拦截器 map 数据","中间件改 res.write"],answer:2,explain:"拦截器能看到并加工 handler 的返回值，一次注册全局生效，是最优雅的响应包装层。"}],11:[{q:'@Query("page", ParseIntPipe) 的效果是？',options:["page 保持字符串但校验格式","page 被转为 number，非法值抛 400","page 变成数组","page 自动有默认值 1"],answer:1,explain:"内置管道先校验再转换类型，省去手写 Number() 与 isNaN 判断。"},{q:"实现 @CurrentUser() 的正确 API 是？",options:['@Inject("user")',"createParamDecorator((data, ctx) => ctx.switchToHttp().getRequest().user)","继承 ParamDecorator 类","在 req 上用 Proxy"],answer:1,explain:"createParamDecorator 是自定义参数装饰器的官方 API，几行代码实现上下文取值。"}],12:[{q:"Nest Guard 的 canActivate 返回 false 时，框架会？",options:["重试一次","抛 ForbiddenException（403）并中断请求","跳过该路由继续下一个","返回 200 空体"],answer:1,explain:"守卫在管道之前运行，返回 false 即 403，鉴权失败不会进入 handler。"},{q:"passport-jwt 的 validate() 方法返回值会？",options:["直接返回给前端","被挂到 req.user，供后续 handler 与装饰器使用","写入数据库","作为响应头"],answer:1,explain:"策略校验 token 后，validate 的返回值成为 req.user，@CurrentUser() 就是从这取的。"}],13:[{q:"RolesGuard 如何知道路由要求哪些角色？",options:["读 JWT payload","用 Reflector 读取 @SetMetadata/@Roles 写入的元数据","查数据库权限表","请求头 X-Roles"],answer:1,explain:"装饰器声明 + Reflector 读取是 Nest 声明式权限的核心机制。"},{q:"全局注册 JWT Guard 后，想让某个路由公开访问，惯用做法是？",options:["删掉全局 Guard","自定义 @Public() 装饰器 + Guard 内用 Reflector 跳过","路由加 ?public=1","在 main.ts 排除路径"],answer:1,explain:"元数据白名单（@Public()）是官方推荐模式，默认安全、显式豁免。"}],14:[{q:"TypeORM 的 synchronize: true 在生产环境的正确处理是？",options:["保持开启省事","关闭，改用迁移（migration）管理表结构",'改成 synchronize: "auto"',"每个请求同步一次"],answer:1,explain:"synchronize 按实体自动改表，生产有丢数据风险；迁移文件才是可控可回滚的表结构管理。"},{q:"Service 中注入 Repository 用的是？",options:["@InjectRepository(Cat) + 模块 forFeature([Cat])","new Repository(Cat)","@Repository() 装饰实体类","全局变量"],answer:0,explain:"forFeature 在当前模块注册对应 Repository Provider，@InjectRepository 注入。"}],15:[{q:"与 TypeORM 相比，Prisma 最大的优势是？",options:["不用写 SQL","schema 生成完整 TS 类型，查询结果自动推断","自动做缓存","不需要连接字符串"],answer:1,explain:"prisma generate 产出的 client 类型完备，findMany 的返回值类型自动推断，DX 明显更好。"},{q:"Nest 中 PrismaService 通常如何接入生命周期？",options:["不管连接","继承 PrismaClient，在 onModuleInit 里 $connect()","在 main.ts 手动 connect","每个请求连接一次"],answer:1,explain:"实现 OnModuleInit 让容器在启动时连接，Service 正常注入 PrismaService 即可。"}],16:[{q:"用 Joi 校验环境变量的收益是？",options:["加快启动速度","启动时缺配置立即报错，而不是运行到某个接口才炸","加密 .env","自动部署"],answer:1,explain:"fail fast：配置不合法连服务都起不来，把配置错误拦截在部署环节。"},{q:"读取配置的正确姿势是？",options:["各处直接 process.env.X",'注入 ConfigService 并 config.get("db.port")',"用全局 JSON 文件 require","window.__ENV__"],answer:1,explain:"ConfigService 集中管理 + 嵌套配置 + 可 mock，是依赖显式化的做法。"}],17:[{q:"Swagger 文档中 DTO 的字段 schema 来自？",options:["手写 YAML 文件","@ApiProperty 装饰器（或 CLI 插件自动推断）","数据库表结构","TypeScript 接口自动导出"],answer:1,explain:"装饰器在运行时生成 OpenAPI schema，代码即文档。"},{q:"Swagger 对前端团队的额外价值是？",options:["能直接部署前端","导出 OpenAPI JSON 用 openapi-typescript 生成接口类型与请求代码","自动修 bug","替代接口联调"],answer:1,explain:"OpenAPI 产物可驱动前端类型生成，接口变更编译期可见。"}],18:[{q:"生产环境推荐的结构化日志格式是？",options:["console.log 拼字符串","每行一个 JSON 对象，字段可检索","纯文本分段","HTML"],answer:1,explain:"JSON 行日志能进 ELK/Loki 做聚合检索，字符串日志无法按字段过滤。"},{q:"nestjs-pino 相比内置 Logger 的核心优势是？",options:["彩色输出","高性能 JSON 日志 + 自动记录每个请求（含耗时状态码）","支持中文","不用安装依赖"],answer:1,explain:"pino 是 Node 生态最快的 logger 之一，且 pino-http 自动捕获请求级日志。"}],19:[{q:"@UseInterceptors(CacheInterceptor) 默认只缓存哪些请求？",options:["所有请求","GET 请求","POST 请求","带 Authorization 的请求"],answer:1,explain:"缓存拦截器只对幂等的 GET 生效，写操作必须穿透到业务层。"},{q:"更新数据后缓存里还有旧值，标准处理是？",options:["重启服务","写操作成功后主动 cacheManager.del 对应 key（写后失效）","缩短 TTL 到 1 秒","加随机前缀"],answer:1,explain:"cache-aside 模式：读缓存、写库后删缓存，下次读重建，一致性最好维护。"}],20:[{q:"CQRS 中 Command 与 Query 的分工是？",options:["Command 读、Query 写","Command 写、Query 读","都处理读写","Command 处理 HTTP、Query 处理 WS"],answer:1,explain:"C=写路径（含业务与副作用），Q=读路径，各自建模互不拖累。"},{q:"以下哪种场景最适合上 CQRS？",options:["简单 CRUD 后台","业务复杂、写读比悬殊、需要事件驱动副作用解耦的系统","纯静态页面","只有一个接口的服务"],answer:1,explain:"CQRS 有架构成本，简单 CRUD 上它属于过度设计。"}],21:[{q:"单元测试中替换 Service 依赖为 mock 的写法是？",options:["jest.mock 文件路径","providers: [{ provide: CatsService, useValue: mock }]","改环境变量","继承原类"],answer:1,explain:"DI 容器天然支持替换实现，useValue 即可注入 stub，无需 monkey-patch。"},{q:"moduleRef.get(CatsController) 的作用是？",options:["删除控制器","从测试容器中取出被实例化的对象用于断言","注册路由","读取环境变量"],answer:1,explain:"compile() 后容器就绪，get() 取出真实装配好的实例，直接调用方法断言。"}],22:[{q:"E2E 测试向应用发 HTTP 请求用的是？",options:["axios 直接打 localhost:3000","supertest 对 app.getHttpServer() 发请求","fetch 硬编码端口","curl 脚本"],answer:1,explain:"supertest 不占真实端口，直接对编译后的 Nest 应用发内存级请求，稳定快速。"},{q:"E2E 测试与单元测试最大的区别是？",options:["更快","覆盖完整请求链路（路由+管道+守卫+过滤器），需要隔离的数据库环境","不用写断言","只能在 CI 跑"],answer:1,explain:"E2E 验证的是“集成后的行为”，环境要独立，跑得慢但防回归能力强。"}],23:[{q:"ORM 的 N+1 问题指？",options:["数据库连接超过 N 个","查出 N 行后又对每行各发一次关联查询，共 1+N 次","每秒 N+1 个请求","索引失效"],answer:1,explain:"解法是 join/relations/include 一次取回；N+1 是接口慢的第一大原因。"},{q:"Node 服务压测 CPU 打满时，最直接的扩容方式是？",options:["加内存","PM2 cluster / 多副本按核数横向开进程","换数据库","压缩响应"],answer:1,explain:"Node 单进程吃不满多核，cluster 模式或多容器副本是标准扩容路径。"}],24:[{q:"Docker 多阶段构建里，runner 阶段为何要 npm ci --omit=dev？",options:["安装更快","最终镜像只带生产依赖，体积与攻击面都更小","devDependencies 会报错","为了缓存"],answer:1,explain:"builder 编译完产物后，运行时只需要 dist + 生产依赖，这是镜像瘦身关键。"},{q:"容器中运行 Node 进程的安全基线是？",options:["用 root 更稳","创建非 root 用户（USER node）运行","关闭所有日志","开放所有端口"],answer:1,explain:"最小权限原则：镜像内降权运行是容器安全的基本要求。"}],25:[{q:"enableShutdownHooks() 的作用是？",options:["允许强制杀进程","监听 SIGTERM，让 app.close() 与连接优雅收尾，滚动更新不掉请求","自动重启","开启调试"],answer:1,explain:"容器编排发 SIGTERM 后，优雅停机处理完在途请求再退出。"},{q:"@nestjs/terminus 的用途是？",options:["终止服务","暴露 /health 健康检查端点（可含 DB/RAM 探针）供 LB/K8s 探活","管理超时","限流"],answer:1,explain:"健康检查是编排系统路由流量的依据，DB 挂了应摘除实例。"}],26:[{q:"ConfigModule.forRoot(opts) 返回的是？",options:["ConfigService 实例","一个 DynamicModule 对象，携带 opts 转成的 providers","Promise","装饰器"],answer:1,explain:"静态方法 + 返回 DynamicModule = 动态模块模式，把调用时配置带进容器。"},{q:"Nest 启动的三步本质是？",options:["安装依赖→编译→运行","扫描元数据→构建依赖实例图→按序实例化 Provider","读 .env→建表→监听端口","加载 Swagger→连接 DB→启动"],answer:1,explain:"理解这三步就能看懂循环依赖、注入顺序等疑难杂症的根源。"}],27:[{q:'WS 网关里 @SubscribeMessage("chat") 处理的是？',options:["HTTP POST /chat",'客户端 socket.emit("chat", ...) 发来的消息',"定时消息","数据库变更"],answer:1,explain:"网关的事件名对应客户端 emit 的事件名，返回值作为 ack 回给发送者。"},{q:"Nest 的 Guard/Pipe/Interceptor 在 WebSocket 层？",options:["不可用","同样适用，一套横切概念覆盖 HTTP 与 WS","只能用中间件","需要改写成 Express 中间件"],answer:1,explain:"ExecutionContext 可区分 http/ws，横切组件复用是 Nest 统一抽象的价值。"}],28:[{q:"耗时任务（生成报表、发邮件）的正确姿势是？",options:["在 HTTP handler 里同步 await 完成","投递到 BullMQ 队列，@Processor 后台消费，请求秒回","用 setTimeout","开新线程"],answer:1,explain:"队列削峰 + 重试 + 可观测，是异步任务的标准解。"},{q:'@Cron("0 3 * * *") 表示？',options:["每 3 分钟","每天凌晨 3 点","每月 3 号","每周三"],answer:1,explain:"标准 cron 表达式：分 时 日 月 周，此处 0 分 3 时即每天 03:00。"}],29:[{q:"全局注册 Guard 的顺序（限流→JWT→RBAC）里，RBAC 放最后的原因是？",options:["无所谓顺序","RBAC 依赖 JWT 验证后的 req.user，必须在其后","性能原因","官方规定"],answer:1,explain:"角色判断需要已验证的身份，Guards 按注册顺序执行，依赖谁就排在谁后面。"},{q:"毕业项目里统一响应 { code, data } 与统一错误结构分别在__实现？",options:["每个 handler / 每个 catch","全局拦截器(map) / 全局异常过滤器","中间件 / 管道","DTO / Entity"],answer:1,explain:"成功包装在拦截器、失败兜底在过滤器，两层合起来就是完整协议。"}],30:[{q:"请求生命周期中，管道（Pipe）发生在？",options:["守卫之前","守卫之后、handler 之前","handler 之后","过滤器之后"],answer:1,explain:"顺序：Middleware → Guard → Interceptor(前) → Pipe → Handler → Interceptor(后) → Filter。"},{q:"学完 30 天后，最推荐的持续学习资源是？",options:["只看博客转载","Nest 官方 samples 仓库与 awesome-nestjs，源码即文档","停止学习","只刷面试题"],answer:1,explain:"官方 sample 覆盖所有集成场景，配源码阅读是进阶最快路径。"}]},hd={1:[{name:"NestJS 中文文档",url:"https://docs.nestjs.cn/10/",type:"docs"},{name:"NestJS 官方文档",url:"https://docs.nestjs.com/",type:"docs"},{name:"Nest CLI",url:"https://docs.nestjs.com/cli/overview",type:"tool"}],2:[{name:"Providers（中文）",url:"https://docs.nestjs.cn/10/providers",type:"docs"},{name:"Dependency Injection（官方）",url:"https://docs.nestjs.com/fundamentals/dependency-injection",type:"docs"}],3:[{name:"TypeScript Decorators",url:"https://www.typescriptlang.org/docs/handbook/decorators.html",type:"docs"},{name:"自定义装饰器（中文）",url:"https://docs.nestjs.cn/10/custom-decorators",type:"docs"}],4:[{name:"模块（中文）",url:"https://docs.nestjs.cn/10/modules",type:"docs"},{name:"Dynamic Modules（官方）",url:"https://docs.nestjs.com/fundamentals/dynamic-modules",type:"docs"}],5:[{name:"控制器（中文）",url:"https://docs.nestjs.cn/10/controllers",type:"docs"}],6:[{name:"注入作用域（中文）",url:"https://docs.nestjs.cn/10/fundamentals/injection-scopes",type:"docs"},{name:"Custom Providers（官方）",url:"https://docs.nestjs.com/fundamentals/custom-providers",type:"docs"}],7:[{name:"ValidationPipe（中文）",url:"https://docs.nestjs.cn/10/techniques/validation",type:"docs"},{name:"class-validator",url:"https://github.com/typestack/class-validator",type:"tool"},{name:"class-transformer",url:"https://github.com/typestack/class-transformer",type:"tool"}],8:[{name:"异常过滤器（中文）",url:"https://docs.nestjs.cn/10/exception-filters",type:"docs"}],9:[{name:"中间件（中文）",url:"https://docs.nestjs.cn/10/middleware",type:"docs"}],10:[{name:"拦截器（中文）",url:"https://docs.nestjs.cn/10/interceptors",type:"docs"},{name:"RxJS operators",url:"https://rxjs.dev/guide/operators",type:"docs"}],11:[{name:"管道（中文）",url:"https://docs.nestjs.cn/10/pipes",type:"docs"}],12:[{name:"认证（中文）",url:"https://docs.nestjs.cn/10/security/authentication",type:"docs"},{name:"守卫（中文）",url:"https://docs.nestjs.cn/10/guards",type:"docs"},{name:"passport-jwt",url:"https://github.com/mikenicholson/passport-jwt",type:"tool"}],13:[{name:"授权（中文）",url:"https://docs.nestjs.cn/10/security/authorization",type:"docs"},{name:"Casl + NestJS 集成",url:"https://docs.nestjs.com/security/authorization#integrating-casl",type:"docs"}],14:[{name:"TypeORM 集成（中文）",url:"https://docs.nestjs.cn/10/techniques/database",type:"docs"},{name:"TypeORM 文档",url:"https://orkhan.gitbook.io/typeorm/",type:"docs"}],15:[{name:"NestJS Prisma Recipe",url:"https://docs.nestjs.com/recipes/prisma",type:"docs"},{name:"Prisma 官方文档",url:"https://www.prisma.io/docs",type:"docs"}],16:[{name:"配置管理（中文）",url:"https://docs.nestjs.cn/10/techniques/configuration",type:"docs"},{name:"Joi 校验",url:"https://joi.dev/api/",type:"tool"}],17:[{name:"OpenAPI / Swagger（中文）",url:"https://docs.nestjs.cn/10/openapi/introduction",type:"docs"}],18:[{name:"Logger（中文）",url:"https://docs.nestjs.cn/10/techniques/logger",type:"docs"},{name:"nestjs-pino",url:"https://github.com/iamolegga/nestjs-pino",type:"tool"}],19:[{name:"Caching（中文）",url:"https://docs.nestjs.cn/10/techniques/caching",type:"docs"},{name:"cache-manager",url:"https://github.com/jaredwray/cacheable",type:"tool"}],20:[{name:"CQRS（中文）",url:"https://docs.nestjs.cn/10/recipes/cqrs",type:"docs"}],21:[{name:"单元测试（中文）",url:"https://docs.nestjs.cn/10/fundamentals/testing",type:"docs"},{name:"Jest 文档",url:"https://jestjs.io/docs/getting-started",type:"docs"}],22:[{name:"E2E 测试（中文）",url:"https://docs.nestjs.cn/10/fundamentals/testing#end-to-end-testing",type:"docs"},{name:"supertest",url:"https://github.com/ladjs/supertest",type:"tool"}],23:[{name:"TypeORM 连接池",url:"https://orkhan.gitbook.io/typeorm/docs/connection",type:"docs"},{name:"PM2 Cluster",url:"https://pm2.keymetrics.io/docs/usage/cluster-mode/",type:"docs"}],24:[{name:"NestJS Deployment（官方）",url:"https://docs.nestjs.com/deployment",type:"docs"},{name:"Docker 多阶段构建",url:"https://docs.docker.com/build/building/multi-stage/",type:"docs"}],25:[{name:"Terminus 健康检查（中文）",url:"https://docs.nestjs.cn/10/recipes/terminus",type:"docs"},{name:"helmet",url:"https://github.com/helmetjs/helmet",type:"tool"},{name:"The Twelve-Factor App",url:"https://12factor.net/zh_cn/",type:"blog"}],26:[{name:"动态模块（中文）",url:"https://docs.nestjs.cn/10/fundamentals/dynamic-modules",type:"docs"}],27:[{name:"WebSocket 网关（中文）",url:"https://docs.nestjs.cn/10/websockets/gateways",type:"docs"}],28:[{name:"任务调度（中文）",url:"https://docs.nestjs.cn/10/techniques/task-scheduling",type:"docs"},{name:"队列（中文）",url:"https://docs.nestjs.cn/10/techniques/queues",type:"docs"},{name:"微服务（中文）",url:"https://docs.nestjs.cn/10/microservices/basics",type:"docs"}],29:[{name:"NestJS 官方 samples",url:"https://github.com/nestjs/nest/tree/master/sample",type:"blog"},{name:"Throttler 限流（中文）",url:"https://docs.nestjs.cn/10/security/rate-limiting",type:"docs"}],30:[{name:"NestJS 中文文档",url:"https://docs.nestjs.cn/10/",type:"docs"},{name:"awesome-nestjs",url:"https://github.com/nestjs/awesome-nestjs",type:"blog"},{name:"NestJS Courses（官方付费课）",url:"https://courses.nestjs.com/",type:"video"}]},vd={tagline:'30 天从"会写 JS"到"看穿 JS"：事件循环、原型链、闭包、模块与性能的底层地图。'},yd=[{d:1,tag:"地基",t:"作用域、提升与 TDZ：var/let/const 到底差在哪",xp:100,desc:'搞清词法作用域、变量提升（hoisting）与 let/const 的暂时性死区，从此告别"为什么是 undefined"式玄学。',lesson:{points:['JS 是静态（词法）作用域：函数在哪里"定义"决定了它能看到什么变量，而不是在哪里调用。',"var 的声明和初始化都会被提升到函数顶部（值为 undefined）；let/const 也会提升，但初始化前处于 TDZ（暂时性死区），访问会抛 ReferenceError。",'const 只锁"绑定"不锁"内容"：const obj = {}; obj.a = 1 合法，obj = {} 报错。要真正不可变需要 Object.freeze。',"函数声明整体提升（可先调用后声明）；函数表达式只提升变量名本身。","现代规范视角：var 是历史包袱，默认用 const，需要重绑定时才用 let。"],code:`console.log(a); // undefined（var 提升并初始化）
// console.log(b); // ReferenceError: Cannot access 'b'（TDZ）
var a = 1;
let b = 2;

function hoisted() { return '已提升'; }
console.log(hoisted()); // 合法，函数声明整体提升

const arr = Object.freeze([1, 2]);
// arr.push(3); // TypeError`,analogy:'像 TS 的声明顺序敏感度：var 相当于编译器自动把声明前置成 `a?: undefined`，而 let/const 的 TDZ 就像 TS 的"used before being assigned"检查在运行时生效。'},links:[{name:"MDN · 作用域与函数",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions"},{name:"MDN · let（TDZ）",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let"},{name:"现代 JavaScript 教程 · 变量作用域与闭包",url:"https://zh.javascript.info/closure"}]},{d:2,tag:"地基",t:"类型系统与隐式转换：==、+、ToPrimitive 的判决书",xp:100,desc:"typeof/null/NaN 陷阱、Object.is 与 ===、以及对象到原始值的转换顺序（Symbol.toPrimitive → valueOf → toString）。",lesson:{points:["typeof null === 'object' 是历史 bug；判断 null 用 === null，判断数组用 Array.isArray。","=== 不做类型转换（但 NaN !== NaN，+0 === -0）；Object.is 用 SameValue 算法修复这两个边缘。","对象转原始值顺序：Symbol.toPrimitive(hint) 优先，否则 valueOf → toString（hint 为 string 时反之）。",'[1,2] + [3] === "1,23"：数组 valueOf 返回自身，退化为 toString 拼接。',"工程建议：永远用 === 与 Object.is 处理 NaN，用 ?? 兜底（0 和 '' 是有效值时不能只用 ||）。"],code:`typeof null; // 'object'（历史 bug）
Object.is(NaN, NaN); // true
Object.is(0, -0); // false

[1, 2] + [3]; // '1,23'
const weird = {
  [Symbol.toPrimitive](hint) { return hint === 'number' ? 42 : 'hi'; }
};
weird * 2; // 84
weird + ''; // 'hi'`,analogy:"就像 React 里 `value ?? fallback` 与 `value || fallback` 的区别：0、''、false 这些\"合法 falsy 状态\"只在 ToBoolean 视角才消失，业务上它们是真实数据。"},links:[{name:"MDN · 数据类型与数据结构",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures"},{name:"MDN · Symbol.toPrimitive",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive"},{name:"MDN · Object.is",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is"}]},{d:3,tag:"地基",t:"原型链与 new：class 只是原型糖",xp:120,desc:"从 [[Prototype]] 到 class 语法：constructor、super、instanceof、Object.create，看穿 React 之外的另一个对象世界。",lesson:{points:["每个对象都有 [[Prototype]] 内部槽，属性查找沿原型链向上冒泡，直到 Object.prototype 或 null。","new Foo() 做四件事：创建 {} → 接到 Foo.prototype → 调用 Foo 并绑定 this → 返回对象（若构造函数返回对象则覆盖）。","instanceof 检查的是右侧函数的 prototype 是否出现在左侧的原型链上，与构造函数无关，改 prototype 会影响结果。","class 是原型的语法糖：方法在.prototype 上且不可枚举，内部严格模式，没有提升。","Object.create(proto) 是最直接的原型链构建方式，比修改 __proto__ 干净得多。"],code:`class Animal {
  constructor(name) { this.name = name; }
  speak() { return \`\${this.name} 发声\`; }
}
class Dog extends Animal {
  speak() { return \`\${super.speak()}：汪\`; }
}

const d = new Dog('旺财');
Object.getPrototypeOf(d) === Dog.prototype; // true
Object.getPrototypeOf(Dog.prototype) === Animal.prototype; // true
Dog.prototype.speak === d.speak; // true（方法共享）
// 等价的非 class 写法：
const cat = Object.create(Animal.prototype);`,analogy:'原型链就是 JS 版的"属性 fallback 链"：像 React Context 沿组件树向上找 Provider，找不到就用默认值——只是链的终点是 Object.prototype 而不是 null。'},links:[{name:"MDN · 继承与原型链",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"},{name:"MDN · class",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes"},{name:"MDN · new 运算符",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new"}]},{d:4,tag:"地基",t:"this 全解：call/apply/bind 与箭头函数",xp:120,desc:'this 由调用方式决定而非定义位置；默认/隐式/显式/new 四种绑定规则与优先级，箭头函数为何能"锁死" this。',lesson:{points:["绑定优先级：new > 显式（call/apply/bind）> 隐式（obj.fn()）> 默认（独立调用，严格模式为 undefined）。","箭头函数没有自己的 this/arguments，捕获定义处词法 this——所以在 React class 时代用箭头函数解决 handler 绑定。","bind 返回硬绑定函数；call/apply 立即调用（call 逐个传参，apply 传数组）。",'DOM/Node 回调里 this 经常"丢"，常见修法：箭头函数、bind、或干脆改写成闭包变量。',"use strict 下独立调用的 this 是 undefined（不再指向 window），让错误更早暴露。"],code:`const counter = {
  n: 0,
  tick() { this.n++; return this.n; },
  // 箭头函数捕获定义处 this（即外层 this）
  arrow: null,
};
counter.arrow = () => counter.tick();

counter.tick(); // 1，隐式绑定
counter.arrow(); // 2
const fn = counter.tick.bind(counter);
fn(); // 3，硬绑定

function loose() { return this; }
loose(); // 严格模式：undefined；非严格：window/globalThis`,analogy:"像 React 的 handleClick 绑定问题：箭头函数属性 = 定义时锁 this（useCallback 闭包），bind = 在 constructor 里预绑定——你早就用过 this 的全部知识了。"},links:[{name:"MDN · this",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this"},{name:"MDN · Function.prototype.bind",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind"}]},{d:5,tag:"地基",t:"闭包：内存、循环变量与真实泄漏场景",xp:150,desc:"闭包是函数 + 它捕获的词法环境。理解它你就理解了 hooks 的闭包陷阱、事件监听器泄漏与节流防抖的实现。",lesson:{points:["闭包 = 函数 + 其创建时的词法环境引用。内层函数即使外层已返回，仍持有被引用变量的生命周期。",'捕获的是"变量绑定"而非"值的快照"——React useEffect 里 stale closure 的根源正是把"快照错觉"当成了现实。',"var + 循环 + 异步回调的经典 bug：只有一个函数级绑定；用 let（每轮迭代新绑定）或 IIFE 修复。","闭包泄漏：被闭包持有的 DOM 节点/大数组无法被 GC，配合 removeEventListener 或置 null 释放。","节流、防抖、once、memoize 本质都是用闭包存私有状态——你天天在用闭包。"],code:`function makeCounter() {
  let n = 0;          // 被闭包持有，外部无法直接访问
  return () => ++n;
}
const c = makeCounter();
c(); c(); // 2

// 经典循环 bug 与修复
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i));   // 3 3 3
}
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j));   // 0 1 2
}

function memoize(fn) {
  const cache = new Map();            // 闭包私有缓存
  return (k) => cache.has(k) ? cache.get(k) : (cache.set(k, fn(k)), cache.get(k));
}`,analogy:'useEffect 的 stale closure 和这里一模一样：React 每次渲染生成新词法环境，effect 捕获的是"那一次"的 props/state。清理函数 return () => clearInterval(timer) 就是在解除闭包对资源的持有。'},links:[{name:"MDN · 闭包",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures"},{name:"MDN · 内存管理",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_management"}]},{d:6,tag:"地基",t:"执行上下文、调用栈与堆栈追踪",xp:120,desc:"代码如何被执行：执行上下文、调用栈、栈帧，读懂 Error.stack 与 DevTools 的调用树。",lesson:{points:["每个函数调用创建一个执行上下文（词法环境 + this + 变量环境），压入调用栈；栈溢出就是递归没有终止条件。",'JS 是单线程同步执行模型：同一时刻只有一个栈帧在跑，"异步"靠事件循环排队（明天展开）。',"Error.captureStackTrace（V8）与 Error.stackTraceLimit 可控制堆栈信息量，Sentry 类工具的基础。","尾调用优化在规范中定义但浏览器几乎未实现（Safari 除外）——不要依赖递归改写省栈。","DevTools Performance 面板的火焰图就是调用栈的时间轴采样。"],code:`function a() { b(); }
function b() { throw new Error('boom'); }
try { a(); } catch (e) {
  console.log(e.stack);
  // Error: boom
  //   at b (...)
  //   at a (...)   ← 调用栈自顶向下
}

// 递归爆栈
function boom(n) { return n === 0 ? 0 : boom(n + 1); }
// boom(1e7); // RangeError: Maximum call stack size exceeded`,analogy:'调用栈就像 React 渲染树的同步"提交"阶段：一帧渲染里嵌套渲染子组件，栈帧进出就是 render 函数的调用与返回——这也是为什么渲染阶段不能做异步副作用。'},links:[{name:"MDN · 堆栈追踪",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_the_Error_object"},{name:"V8 · Error.captureStackTrace 相关",url:"https://v8.dev/docs/stack-trace-api"}]},{d:7,tag:"异步",t:"事件循环：宏任务、微任务与渲染时机",xp:200,desc:"单线程下的调度艺术：call stack → microtask → task → render 的完整循环，setTimeout 为何不精确。",lesson:{points:["一次事件循环 tick：清空调用栈 → 执行全部微任务（Promise.then、queueMicrotask、MutationObserver）→ 取一个宏任务（setTimeout、I/O、事件）→（浏览器）可能渲染。","微任务在渲染之前全部清空，所以 Promise 里疯狂追加微任务会饿死渲染（页面卡死但不报错）。",'setTimeout(fn, 0) 最少延迟约 1ms 且受"嵌套 5 层后最小 4ms"钳制；requestAnimationFrame 在渲染前、style/layout 计算前执行。',"JSV9000 这类可视化工具能把执行顺序看动画化，强烈建议手动推演一遍。"],code:`console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => {
  console.log('3');
  Promise.resolve().then(() => console.log('4')); // 微任务可以无限追加
});
queueMicrotask(() => console.log('5'));
console.log('6');
// 输出：1 6 3 4 5 2
// 同步 → 微任务清空(3,4,5) → 宏任务(2)`,analogy:'微任务 vs 宏任务就像 React 的 useLayoutEffect vs useEffect：前者在本帧渲染前同步清掉，后者排到渲染后——事件循环的"渲染时机"就是你已经熟悉的 commit 时机。'},links:[{name:"MDN · 事件循环",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Event_loop"},{name:"Jake Archibald · Tasks, microtasks, queues and schedules",url:"https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/"},{name:"JSV9000 · 事件循环可视化",url:"https://www.jsv9000.app/"}]},{d:8,tag:"异步",t:"Promise 深挖：状态机、then 链与常见误用",xp:180,desc:"Promise 三态不可逆、then 的微任务调度、错误穿透、Promise.all/allSettled/race/any 的选型。",lesson:{points:['Promise 只有 pending → fulfilled / rejected 三态，一旦落定不可逆；then 返回"新" Promise，这是链式调用的基础。',"then 的返回值决定链路：返回普通值 → resolve；返回 Promise → 展开；throw → reject。",'错误沿 then 链"穿透"直到被某个 catch/rejection handler 接住——finally 不改变结果。',"组合器选型：all 一损俱损（并发请求主选）、allSettled 全要结果、race 抢第一个落定（超时控制）、any 要第一个成功。","反模式：在 async 函数里 return await 通常是冗余（但 try/catch 包裹时除外）；忘记 return 导致链断裂最常见。"],code:`Promise.resolve(1)
  .then(v => v + 1)
  .then(v => { throw new Error(v); })
  .catch(e => e.message)      // 接住错误，链路恢复 fulfilled
  .then(v => console.log(v)); // '2'

// 超时控制
const withTimeout = (p, ms) => Promise.race([
  p,
  new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), ms)),
]);

// 全部结果
const rs = await Promise.allSettled([fetchA(), fetchB()]);
rs.filter(r => r.status === 'rejected').map(r => r.reason);`,analogy:"then 链就是 Promise 版的 Redux 中间件管道：每一环接收上一环的值，返回新值或新 Promise，任何一环 throw 都会被下游 catch 兜底。"},links:[{name:"MDN · Promise",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise"},{name:"MDN · 使用 Promise",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises"}]},{d:9,tag:"异步",t:"async/await 与异步演进史：从回调到 now",xp:180,desc:"回调地狱 → Promise → async/await 的演进逻辑，await 的执行语义、并行 vs 串行、以及 try/catch 的取舍。",lesson:{points:["演进逻辑：回调（控制反转、错误难处理）→ Promise（标准化错误通道、可组合）→ async/await（同步风格、可 try/catch、可调试单步）。",'await 暂停的是"函数"不是"线程"：它把后续代码包装成微任务，函数本身立即返回 Promise 给调用者。',"串行 await 两个独立请求是性能 bug：用 Promise.all 或先发起再用 await。","for...of + await 是真正的串行（限流场景正确姿势）；forEach + await 是假的并发错误写法。","顶层 await（ESM）让你在模块顶层直接等待，打包器/加载器会把它包装进隐式 async。"],code:`// ❌ 串行：总耗时 = a + b
const a = await fetchA();
const b = await fetchB();

// ✅ 并行：总耗时 = max(a, b)
const [a2, b2] = await Promise.all([fetchA(), fetchB()]);

// ✅ 有序串行（限流/依赖前值）
for (const url of urls) {
  const res = await fetch(url);
  results.push(res);
}
// ❌ forEach 不等待
// urls.forEach(async u => { await fetch(u); }); // 外层感知不到`,analogy:"async/await 之于 Promise，就像 JSX 之于 React.createElement：纯语法糖，编译后没有任何新能力，但可读性和调试体验质变。"},links:[{name:"MDN · async/await",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function"},{name:"MDN · Promise.all",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all"}]},{d:10,tag:"异步",t:"错误处理与调试：让异常成为系统的一部分",xp:150,desc:"Error 类型、自定义错误、全局兜底（unhandledrejection / window.onerror）、条件断点与 logpoint 工作流。",lesson:{points:["用 instanceof 分发错误类型：自定义 class HttpError extends Error 是工程标配（注意 target ES5 下 instanceof 失效的坑，ES2015+ 无碍）。","全站兜底：浏览器 window.addEventListener('unhandledrejection'/'error')；Node process.on('uncaughtException')（只能记录，不能恢复）。","async 函数的错误要 await 才能被 try/catch 接住；把 Promise 存进变量再 await 会绕过 catch。","DevTools 技巧：异常断点（Pause on exceptions）、条件断点、Logpoint（不打断的 console.log）。","不要吞错误：空 catch 是事故根源；要么处理、要么包装上下文后重抛、要么上报。"],code:`class HttpError extends Error {
  constructor(status, body) {
    super(\`HTTP \${status}\`);
    this.name = 'HttpError';
    this.status = status;
  }
}
try {
  await api();
} catch (e) {
  if (e instanceof HttpError && e.status === 401) return relogin();
  throw e; // 不认识的上抛
}

window.addEventListener('unhandledrejection', e => {
  report(e.reason); // 全局兜底上报
});`,analogy:"错误处理像 React 的 Error Boundary 分层：组件内 catch（局部降级）→ 页面级 Boundary（整页兜底）→ 全局 unhandledrejection（上报日志），粒度从细到粗。"},links:[{name:"MDN · Error",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error"},{name:"MDN · unhandledrejection 事件",url:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/unhandledrejection_event"}]},{d:11,tag:"语言深度",t:"迭代器与生成器：for...of 的底层协议",xp:180,desc:"Iterable/Iterator 协议、Symbol.iterator、生成器函数的惰性求值与协程式控制流。",lesson:{points:["可迭代协议 = 对象有 Symbol.iterator 方法返回迭代器；迭代器协议 = 有 next() 返回 { value, done }。","for...of、展开、解构、Array.from 全部走这个协议——给自定义类实现 Symbol.iterator 即可接入所有语法。",'function* 生成器：yield 暂停/恢复执行，是"可暂停的函数"，无限序列（斐波那契、分页游标）天然表达。',"yield* 委托子生成器；生成器返回的 iterator 也是 iterable（Symbol.iterator 返回自身）。",'生成器与 async/await 同源：await 就是基于"暂停点"的调度， redux-saga 用 yield 表达 effect 就是协程思想。'],code:`function* fib() {
  let [a, b] = [0, 1];
  while (true) { yield a; [a, b] = [b, a + b]; } // 无限惰性序列
}
const it = fib();
it.next().value; // 0
it.next().value; // 1
it.next().value; // 1

// 让自定义类支持 for...of / [...obj]
class Shelf {
  *[Symbol.iterator]() { yield* this.items ?? []; }
}

// 手动消费前 n 个
function* take(it, n) { let i = 0; for (const v of it) { if (i++ >= n) return; yield v; } }`,analogy:'Symbol.iterator 就是 JS 版的"协议接口"（类似 TS 的 interface）：for...of 只认协议不认类型，实现协议的对象自动获得全部迭代语法。'},links:[{name:"MDN · 迭代器与生成器",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators"},{name:"MDN · function*",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/function*"}]},{d:12,tag:"语言深度",t:"Proxy 与 Reflect：拦截一切操作",xp:200,desc:"Proxy 的 13 种 trap、Reflect 的镜像 API、Vue3 响应式与 immer 的实现原理。",lesson:{points:["Proxy(target, handler) 拦截对 target 的底层操作：get/set/has/deleteProperty/apply/construct…",'Reflect 是"默认行为"的镜像 API：trap 里 return Reflect.get(target, key, receiver) 就是"先放行"，且参数签名与 trap 一一对应。',"Proxy 能拦截新增属性和 delete，所以 Vue3 用它替代 Vue2 的 Object.defineProperty，不需要再 $set。","receiver 参数很重要：getter 里访问 this 应指向代理对象，否则嵌套依赖收集会漏。",'限制：Proxy 不能拦截 ===、typeof、Number() 等原始操作；无法"撤销"目标对象本身的操作只能 revoke。'],code:`function reactive(obj) {
  return new Proxy(obj, {
    get(t, key, receiver) {
      track(t, key);                    // 依赖收集
      const v = Reflect.get(t, key, receiver);
      return typeof v === 'object' && v ? reactive(v) : v; // 惰性深代理
    },
    set(t, key, val, receiver) {
      Reflect.set(t, key, val, receiver);
      trigger(t, key);                  // 派发更新
      return true;
    },
  });
}`,analogy:"Proxy trap 像 React 组件的拦截层（HOC/Context 分发）：get/set 前插逻辑（收集/触发），Reflect.* 就是调用 super 放行默认行为。Vue3 的响应式核心就是这十几行。"},links:[{name:"MDN · Proxy",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy"},{name:"MDN · Reflect",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect"}]},{d:13,tag:"语言深度",t:"ES2015+ 语法深挖：解构、展开、默认参数的隐藏语义",xp:130,desc:'不只"会用"：解构的模式匹配本质、展开运算符是浅拷贝、默认参数表达式惰性求值。',lesson:{points:["解构是模式匹配：支持嵌套、数组跳位、剩余元素、重命名与默认值（{ a = 1, b: c } 同行成立）。",'展开/剩余运算符对"可迭代对象"操作：[...str] 是逐码点（surrogate pair 安全）；{...obj} 只拷贝可枚举自有属性。','展开是浅拷贝：嵌套对象仍是同一引用—— immer 的"写时拷贝"就是在树路径上按需深拷贝。',"函数默认参数是表达式，惰性求值且能引用前面的参数：(a, b = a * 2) => …。",'参数按值传递，对象传"引用的值"——所以函数内重新赋值参数不影响外部，但修改属性影响。'],code:`const { data: { user: { name = 'anon' } = {} } = {}, ...rest } = res;

const s = '👍';
[...s].length;        // 1（码点安全）
s.length;             // 2（UTF-16 单元）

function options(timeout = 3000, retries = timeout / 300) { return { timeout, retries }; }
options(6000).retries; // 20

const nested = { a: { b: 1 } };
const copy = { ...nested };
copy.a === nested.a; // true，浅！`,analogy:'浅拷贝就是你在 React/Redux 里学的"不可变更新要展开到被改的那一层"：{...state, list: [...state.list, item]}——同一条规则。'},links:[{name:"MDN · 解构赋值",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"},{name:"MDN · 展开语法",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax"}]},{d:14,tag:"语言深度",t:"数组方法全谱系：可变性、返回值与性能",xp:140,desc:"map/filter/reduce/find/at/flat 的返回值心智模型、可变方法清单、十万级数据的性能差异。",lesson:{points:["心智模型按返回值分三类：返回新数组（map/filter/concat/slice/flat）、返回其他值（find/some/every/reduce/indexOf）、原地修改（push/splice/sort/reverse/fill）。","sort 默认按字符串比较！数字要 sort((a, b) => a - b)；sort/reverse 原地修改且现在会先拷贝再排（新规范）。","reduce 是最通用的一环：groupBy、pipeline、treeToFlat 都能写，但团队代码里可读性优先。","性能：for 循环 ≈ for...of > reduce > map/filter 链（每次链式调用都产生中间数组）；万级以内差异无感，大数据再优化。","Array.prototype.at(-1)、Object.groupBy（ES2024）让旧惯用法升级。"],code:`const nums = [5, 12, 8, 130];
nums.at(-1);                 // 130
[3, 1, 10].sort();           // [1, 10, 3] 字符串序！
[3, 1, 10].sort((a, b) => a - b); // [1, 3, 10]

// 一次遍历完成 filter+map（避免中间数组）
const good = nums.reduce((acc, n) => {
  if (n > 10) acc.push(n * 2);
  return acc;
}, []);

// ES2024 分组
Object.groupBy(nums, n => (n > 10 ? 'big' : 'small'));`,analogy:'数组链式方法 = RxJS 的管道：每次 map/filter 是一个新 observable（新数组），中间数组就是"未退订的中间流"——热路径上合并成一趟 reduce。'},links:[{name:"MDN · Array",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array"},{name:"MDN · Object.groupBy",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy"}]},{d:15,tag:"语言深度",t:"Map/Set/WeakMap/WeakRef：集合类型的正确选型",xp:150,desc:"什么时候 Map 优于对象、Set 去重与 O(1) 查询、WeakMap 如何避免元数据泄漏。",lesson:{points:['对象 vs Map：Map 键可以是任意值、有序、有 size、频繁增删性能更好；对象适合当"结构化记录"（JSON 友好）。',"Set/Map 的 has 是 O(1)（哈希）；用 includes/O(n) 查数组在热路径是反模式，数组转 Set 一次即可。",'WeakMap 键必须是对象且"弱引用"：不阻止 GC，是给外部对象挂私有/附加数据的正解（React 内部 fiber 缓存、事件元数据）。',"WeakRef + FinalizationRegistry 存在但慎用：GC 时机不确定，不能用于业务正确性逻辑，只做缓存类优化。","Map 迭代顺序即插入顺序；Symbol 是防碰撞键；structuredClone 深拷贝对象图（可处理循环引用）。"],code:`const seen = new Set(arr);        // O(1) 查询
seen.has(x);

const cache = new WeakMap();
function getMeta(node) {
  if (!cache.has(node)) cache.set(node, computeExpensive(node));
  return cache.get(node);          // node 被 GC 时缓存自动消失
}

const deep = structuredClone(data); // 深拷贝，支持循环引用
const uniq = [...new Set(list)];`,analogy:'WeakMap 就像 React 的 ref 存外部资源：挂在实例上但不参与渲染/生命周期，宿主销毁它跟着销毁——绝不因为"给 DOM 挂个标记"让整棵树无法回收。'},links:[{name:"MDN · Map",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map"},{name:"MDN · WeakMap",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap"},{name:"MDN · structuredClone",url:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/structuredClone"}]},{d:16,tag:"语言深度",t:"函数式惯用法：纯函数、柯里化与组合",xp:140,desc:"用 JS 表达函数式核心思想：引用透明、柯里化、compose/pipe，以及在 React 世界里的实际收益。",lesson:{points:["纯函数：相同输入恒定输出、无副作用——可测试、可 memo（React.memo/useMemo 的前提）。","柯里化 f(a)(b)(c)：固定参数生成特化函数，配合 Partial Application 写可复用的校验/请求构造器。","compose(f, g)(x) = f(g(x))；pipe 从左到右——数组 reduce 一行实现。",'副作用要"推到边缘"：核心逻辑保持纯函数，IO 集中在入口（对齐 React：组件纯渲染，副作用进 effect/handler）。',"不要教条：JS 是多范式语言，可读性与团队一致性优先于范式纯度。"],code:`const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const curry = f =>
  f.length === 0 ? f() : (...a) => a.length >= f.length ? f(...a) : curry(f.bind(null, ...a));

const trim = s => s.trim();
const upper = s => s.toUpperCase();
const normalize = pipe(trim, upper);
normalize('  hi '); // 'HI'

const fetchJSON = base => path => fetch(base + path).then(r => r.json());
const api = curry((base, path) => fetch(base + path));`,analogy:"pipe/compose 就是 RxJS pipe 或 Redux 中间件的起点：一个值流过一串纯函数变换。React 组件树本质也是 props 流过嵌套纯函数。"},links:[{name:"MDN · Arrow functions",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions"},{name:"Frimley · A gentle intro to functional JS",url:"https://jrsinclair.com/javascript/2016/gentle-introduction-to-functional-javascript-intro/"}]},{d:17,tag:"模块化",t:"模块演进史：从 IIFE 到 ESM",xp:160,desc:"命名空间 → CommonJS → AMD → UMD → ESM 的动机与取舍，以及 tree-shaking 为什么只对 ESM 有效。",lesson:{points:["IIFE + 全局对象是最早的隔离方案；CommonJS（Node）用 require 同步加载，适合服务端不适合浏览器。","AMD/RequireJS 异步加载解决浏览器问题，UMD 兼容两者——历史包袱，新代码不要再用。","ESM 是语言级标准：静态结构（import 在编译期可解析），支持循环引用（ live binding）、异步加载、顶层 await。","静态结构 → bundler 可以 tree-shaking：只保留被 import 的导出。CJS 的动态 require 让打包器无法确定依赖图。","package.json 的 exports 字段控制入口与子路径；type: module 决定 .js 的解释方式；浏览器端注意 defer 语义与 CORS。"],code:`// CJS：动态、同步、无 tree-shaking
const _ = require('lodash');
module.exports = { api };

// ESM：静态、可摇树、live binding
export const api = 1;
export default main;
import _ from 'lodash-es';

// 循环引用也安全：binding 是活的
import { counter } from './a.js';
setTimeout(() => console.log(counter), 0); // 拿到的是最终值`,analogy:"ESM 之于 CJS ≈ 静态分析之于动态运行时：像 TS 的类型可以在编译期算出 vs any 全靠运行时猜。静态依赖图就是 tree-shaking 的全部前提。"},links:[{name:"MDN · JavaScript modules",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules"},{name:"Node.js · ESM 文档",url:"https://nodejs.org/api/esm.html"}]},{d:18,tag:"浏览器与平台",t:"事件模型与 DOM：捕获、冒泡、委托",xp:130,desc:"三阶段事件流、stopPropagation vs preventDefault、事件委托与 passive listener。",lesson:{points:["事件三阶段：捕获（window→target）→ 目标 → 冒泡；addEventListener 第三参 { capture: true } 改变监听阶段。","stopPropagation 阻断传播但不阻止默认行为；preventDefault 只阻止默认行为（如链接跳转）；两者互不等价。","事件委托：父容器统一监听 + e.target 判定，把 N 个监听器降为 1 个——列表/表格场景的标准做法。","scroll/touchmove/wheel 要 { passive: true }：承诺不调 preventDefault，滚动不再等待 JS，掉帧救星。","React 的合成事件在 17+ 挂到 root 上（不再是 document），原生事件与合成事件的 stopPropagation 交互要小心。"],code:`document.querySelector('#list').addEventListener('click', e => {
  const item = (e.target as HTMLElement).closest('[data-id]');
  if (!item) return;
  openDetail(item.dataset.id!);   // 委托：一个监听器管整个列表
});

// 大量滚动的场景
window.addEventListener('scroll', onScroll, { passive: true });`,analogy:"事件委托像 React 把事件统一收敛到 root 的合成事件系统：不在每个节点上挂监听器，而是利用冒泡在顶层分发。"},links:[{name:"MDN · 事件介绍",url:"https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Building_blocks/Events"},{name:"MDN · passive 监听器",url:"https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener"}]},{d:19,tag:"浏览器与平台",t:"JS 内存模型与 GC：从 V8 视角看泄漏",xp:180,desc:"栈 vs 堆、可达性与分代 GC、Detached DOM 与定时器泄漏，用 Heap Snapshot 实战定位。",lesson:{points:['基本类型在栈、对象在堆；JS 无手动 free，GC 用"可达性"判定：从根（全局、当前栈）出发不可达即可回收。',"V8 分代回收：新生代（Scavenge，快、频繁）+ 老生代（Mark-Compact）；长命对象晋升老生代。","常见泄漏：被移除的 DOM 仍被 JS 变量/定时器/闭包持有（Detached DOM）、无清理的 setInterval、失控的事件监听、无限增长的 Map 缓存。","排查工具：Chrome DevTools Memory 面板 Allocation timeline + Heap Snapshot（比较三次快照找增长对象），保留路径（Retainers）看是谁拽着不放。",'WeakMap/WeakRef 是"不阻止回收"的正解；AbortController 解绑一次性场景。'],code:`let cache: Map<string, BigThing> = new Map();   // ❌ 只进不出
setInterval(() => {
  cache.set(Date.now() + '', new BigThing());
}, 1000);

// ✅ LRU + 上限 + 页面卸载清理
const lru = new Map();
function remember(k: string, v: BigThing) {
  lru.set(k, v);
  if (lru.size > 500) lru.delete(lru.keys().next().value);
}
window.addEventListener('pagehide', () => cache.clear());

const ac = new AbortController();
fetch(url, { signal: ac.signal }); // ac.abort() 一键解绑`,analogy:'可达性 GC 就是 React 的卸载模型：从 root 出发遍历 fiber 树，碰不到的组件整个子树销毁——任何"体外引用"都等于把组件偷偷挂到了一棵看不见的树上。'},links:[{name:"MDN · 内存管理",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_management"},{name:"Chrome DevTools · Memory",url:"https://developer.chrome.com/docs/devtools/memory-problems"}]},{d:20,tag:"性能",t:"性能工具链：Performance 面板、Lighthouse 与帧预算",xp:160,desc:'读火焰图、量化帧预算（16.7ms）、long task 与 INP，建立"先测量后优化"的工作流。',lesson:{points:["60fps = 每帧 16.7ms，现代高刷屏更紧；任何超过 50ms 的任务都是 Long Task，会拖累 INP（交互到下一帧绘制的指标）。","Performance 面板看三件事：主线程火焰图（长任务在哪）、FPS/帧率轨、内存轨；黄色 script vs 紫色 layout 一眼分层。","拆长任务手段：分批 + requestIdleCallback/setTimeout 让出主线程；scheduler.yield()（新 API）更优雅。","优化顺序铁律：测量 → 定位 → 改 → 再测量。凭直觉优化经常是负收益。","Lighthouse/WebPageTest 做 CI 化性能门禁，关注 LCP/CLS/INP 三大 Core Web Vitals。"],code:`// 长任务观测
new PerformanceObserver(list => {
  for (const e of list.getEntries()) {
    console.log('long task', e.duration);
  }
}).observe({ entryTypes: ['longtask'] });

// 分批处理，让出主线程
async function processAll(items: Item[]) {
  for (let i = 0; i < items.length; i += 100) {
    process(items.slice(i, i + 100));
    await new Promise(r => setTimeout(r, 0)); // 或 scheduler.yield()
  }
}`,analogy:'Profiler 之于性能 = React DevTools Profiler 之于渲染：先记录，找"最宽的火焰"（最长 commit / 最长 task），别猜。'},links:[{name:"web.dev · INP",url:"https://web.dev/articles/inp"},{name:"MDN · Performance API",url:"https://developer.mozilla.org/zh-CN/docs/Web/API/Performance"},{name:"Chrome DevTools · Performance",url:"https://developer.chrome.com/docs/devtools/performance"}]},{d:21,tag:"性能",t:"V8 引擎内幕：隐藏类、内联缓存与去优化",xp:200,desc:'为什么"形状一致的对象"更快：hidden classes、inline caching、JIT 的乐观假设与 deopt。',lesson:{points:['V8（JIT）基于"乐观假设"优化代码：假设对象形状不变、类型不变——假设被打破就 deopt（去优化），性能断崖。',"Hidden Class（Map）：相同属性添加顺序的对象共享形状；乱序添加/动态 delete 会分裂形状。",'Inline Cache：函数访问 obj.x 的位置会被缓成"形状 + 偏移"，单态最快、多态变慢、超态退化。',"实践：字段声明顺序一致、避免 delete（置 null/undefined）、数字类型别混（int/double）、热函数参数类型稳定。","数组：packed elements 最快，出现洞（稀疏）或类型混杂退化为字典模式。"],code:`// ❌ 形状分裂
const a = { x: 1 };
const b = { y: 2 };       // 不同形状
b.x = 1;                  // 又一种形状

// ✅ 统一构造路径
class Point {
  x = 0; y = 0;           // 声明全部字段，形状固定
  constructor(x: number, y: number) { this.x = x; this.y = y; }
}

const hot = (n: number) => n * 2; // 热函数，JIT 可单态优化`,analogy:'V8 的乐观优化像 React Compiler 的记忆化假设：假设输入不变就跳过重算，一旦被打破（mutable ref）就回退。写"形状稳定"的代码 = 给引擎留优化空间。'},links:[{name:"V8 · 源码博客（Shapes/IC）",url:"https://v8.dev/blog"},{name:"V8 · Ignition/TurboFan 概览",url:"https://v8.dev/docs"}]},{d:22,tag:"性能",t:"现代浏览器渲染管线与 JS 的位置",xp:150,desc:'JS 在"解析/编译/执行"中的成本、defer/async/module 的加载策略、requestAnimationFrame 与布局抖动。',lesson:{points:["下载 JS → 解析（字节码）→ 执行；大 bundle 的成本不止网络，还有解析与主线程执行时间。",'<script defer>：下载不阻塞、DOMContentLoaded 前按序执行；async：下载完立即执行（顺序不保证）；type="module" 默认 defer。',"渲染管线：Style → Layout → Paint → Composite；改 width/top 触发整条链，transform/opacity 只走 Composite，动画首选。","布局抖动（layout thrashing）：循环里交替读写布局属性强制同步 reflow——读写分离或用 FastDom 模式修复。","requestAnimationFrame 对齐渲染帧做动画；requestIdleCallback 处理低优先级任务（有超时风险，要有 fallback）。"],code:`// ❌ 读写交替 = N 次强制 reflow
for (const el of items) {
  const h = el.offsetHeight;   // 读（使前面写失效）
  el.style.height = h + 10 + 'px'; // 写
}
// ✅ 先全部读，再全部写
const hs = items.map(el => el.offsetHeight);
items.forEach((el, i) => (el.style.height = hs[i] + 10 + 'px'));

requestAnimationFrame(() => {
  box.style.transform = 'translateX(100px)'; // 只合成
});`,analogy:'Layout vs Composite 之于 CSS，正如重渲染 vs 重挂载之于 React：都改"值"，代价差一个数量级，关键是避开触发整条重建链的属性。'},links:[{name:"web.dev · 渲染性能",url:"https://web.dev/articles/rendering-performance"},{name:"MDN · script 元素（defer/async）",url:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script"}]},{d:23,tag:"语言深度",t:"ES2023/ES2024 新武器库",xp:140,desc:"toSorted/toReversed/with、findLast、Array.fromAsync、Object.groupBy、Promise.withResolvers、正则 v 标志。",lesson:{points:["ES2023 不可变数组方法：toSorted/toReversed/toSpliced/with——返回新数组不改原数组，React/不可变状态的救星。","findLast/findLastIndex 从尾部查找；ES2024 Object.groupBy / Map.groupBy 一行分组。",'Promise.withResolvers() 替代"手写 let resolve/reject 提到外面"的丑陋模式。',"Array.fromAsync 异步迭代器转数组（await for...of 的打包器）。","正则 v 标志（集合操作与字符类差集）与更清晰的 Unicode 处理；set 记号如 [[a-z]--aeiou]。"],code:`const arr = [3, 1, 2];
const sorted = arr.toSorted();      // 新数组，arr 不变
arr.with(0, 99);                    // [99,1,2]

const groups = Object.groupBy(users, u => u.city);

const { promise, resolve, reject } = Promise.withResolvers<string>();
setTimeout(() => resolve('done'), 100);

const pages = await Array.fromAsync(cursor); // 异步迭代收集`,analogy:'toSorted/with 之于 sort/splice，正如 immer 返回新 state 之于 mutate：语义是"不可变更新"，写起来却不用展开嵌套。'},links:[{name:"MDN · Array.prototype.toSorted",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted"},{name:"MDN · Promise.withResolvers",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/withResolvers"},{name:"MDN · Array.fromAsync",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fromAsync"}]},{d:24,tag:"语言深度",t:"异步迭代器与 for await...of：流式处理",xp:160,desc:"Symbol.asyncIterator、异步生成器、ReadableStream 的消费模式，处理分页与 SSE 的正确姿势。",lesson:{points:["异步迭代器：next() 返回 Promise<{ value, done }>；for await...of 逐个等待——分页拉取的标准写法。",'异步生成器 function* + async：yield 可以等待，把"多页请求"抽象成单个可迭代序列。',"fetch 的 response.body 是 ReadableStream，for await...of 直接消费 chunk，SSE/大文件/LLM 流式输出的基础。",'区别于 Promise.all：异步迭代是"背压友好"的逐项处理，内存占用恒定。',"TypeScript 3.6+ 对异步生成器有完整类型推断；target 需 ES2018+。"],code:`async function* paginate<T>(first: string): AsyncGenerator<T[]> {
  let url = first;
  while (url) {
    const res = await fetch(url);
    const data = await res.json();
    yield data.items;
    url = data.next;
  }
}
for await (const page of paginate('/api/list')) {
  render(page);   // 每页到达即处理，背压友好
}

// 流式读取响应体
for await (const chunk of (await fetch(url)).body!) {
  decode(chunk);
}`,analogy:'for await...of 之于 Promise.all，正如流式 LLM 输出之于"等全部生成"：一个是边到边处理（低延迟、恒定内存），一个是全量到手。'},links:[{name:"MDN · for await...of",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for-await...of"},{name:"MDN · 异步迭代器与生成器",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators"}]},{d:25,tag:"TS 协同",t:"JS 与 TS 的边界：类型体操之外的真实约束",xp:140,desc:"TS 类型在运行时不存在：类型收窄的真假、as 的边界、enum 的运行时代价、satisfies 与 zod 的互补。",lesson:{points:['TS 编译后类型全部消失：运行时安全靠"值检查"，as 断言只是骗编译器，不产生任何运行时保护。',"真值收窄的坑：if (arr.length) 之类把 0/'' 当 false；用显式比较代替隐式布尔。","enum 编译成对象（有运行时成本与怪癖），多数场景 const 对象 + as const 或 union type 更好。",'satisfies 让你"检查但不放宽"字面量类型；外部数据（API 响应）应配 zod/valibot 做运行时校验。','unique symbol、 branded types 可以在纯 TS 层面模拟"运行时不可混淆"的约束。'],code:`type Role = 'admin' | 'user';
const ROLES = { admin: 'admin', user: 'user' } as const satisfies Record<string, Role>;

// 外部数据必须运行时校验
import { z } from 'zod';
const User = z.object({ id: z.number(), name: z.string() });
const user = User.parse(await res.json()); // 编译期 + 运行时双保险

// branded type
type UserId = number & { __brand: 'UserId' };`,analogy:'TS 类型像 React 的 propTypes 思想的编译期版：只在"编译时"骂你。真正来自网络的脏数据要 zod 这种"运行时 Error Boundary"。'},links:[{name:"TypeScript 官方文档",url:"https://www.typescriptlang.org/docs/handbook/intro.html"},{name:"Zod 文档",url:"https://zod.dev/"}]},{d:26,tag:"TS 协同",t:"工程化实战：ESLint 规则、死代码与打包体积",xp:150,desc:"用工具守护 JS 质量：no-floating-promises、knip 死代码、source map、bundle 分析。",lesson:{points:['TS-ESLint 的 no-floating-promises 能抓住"忘记 await 的异步调用"——团队必开。',"knip / depcheck 找未使用导出与依赖；combined with tree-shaking 才是真实体积。","bundle 分析用 source-map-explorer / rollup-plugin-visualizer；体积异常常见元凶：重复依赖、误 import 整包（lodash → lodash-es 按需）。","sideEffects: false 声明让打包器放心摇树；动态 import() 做路由级代码分割。","source map 策略：生产隐藏但上传到 Sentry，出错能映射回源码。"],code:`// 代码分割
const Editor = lazy(() => import('./heavy-editor')); // 路由级分割

// 按需引入
import { debounce } from 'lodash-es';   // ✅ 可摇树
// import _ from 'lodash';              // ❌ 常把全包打进来

// package.json
// { "sideEffects": false }

new PerformanceObserver(() => {}).observe({ entryTypes: ['resource'] });`,analogy:'tree-shaking 依赖静态 ESM 就像 React Server Components 依赖静态可分析的组件边界：工具只能优化它能"看懂"的代码。'},links:[{name:"typescript-eslint 规则",url:"https://typescript-eslint.io/rules/"},{name:"web.dev · 优化 JS 体积",url:"https://web.dev/articles/optimize-javascript"}]},{d:27,tag:"并发与前沿",t:"Web Worker 与 SharedArrayBuffer：真正的并行",xp:170,desc:"单线程的逃生口：Worker 通信模型、Transferable 对象、SharedArrayBuffer 与 Atomics。",lesson:{points:["Web Worker = 真正的独立线程 + 独立全局；不能碰 DOM；与主线程靠消息传递（结构化克隆，深拷贝成本）。","大数据量传引用用 Transferable（ArrayBuffer 转移所有权，零拷贝但原线程失去访问）。","SharedArrayBuffer + Atomics 实现真共享内存与跨线程同步（需 COOP/COEP 安全头）。","适用场景：大 JSON 解析、图像处理、加密、diff 计算——凡 >50ms 的 CPU 密集任务都值得考虑移出主线程。","Comlink 库把 Worker 包装成 RPC（proxy 化的消息通信），体验接近本地调用。"],code:`const worker = new Worker(new URL('./calc.worker.ts', import.meta.url));
worker.postMessage({ type: 'parse', buf }, [buf]); // 转移所有权，零拷贝
worker.onmessage = e => console.log(e.data);

// worker 内
self.onmessage = e => {
  if (e.data.type === 'parse') self.postMessage(parse(e.data.buf));
};`,analogy:"Worker 通信像 Redux 单向数据流：状态不共享（消息传副本），主线程 dispatch、worker 返回结果——比加锁简单得多，这也是 JS 并发模型的哲学。"},links:[{name:"MDN · Web Workers API",url:"https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API"},{name:"Comlink",url:"https://github.com/GoogleChromeLabs/comlink"}]},{d:28,tag:"并发与前沿",t:"WebAssembly 与 JS 的边界",xp:150,desc:'WASM 是什么、何时值得用、JS↔WASM 数据交换的成本模型，以及"不要为 5% 的场景过度设计"。',lesson:{points:["WASM 是字节码目标：C/Rust/Go 编译到 wasm，在浏览器以接近原生速度跑；JS 负责胶水与 DOM（wasm 不直接访问 DOM）。",'成本模型：JS↔WASM 边界传数据要拷贝/序列化——频繁小调用会把性能优势吃光，适合"大输入、长计算"的任务。',"典型收益场景：图像/视频处理、密码学、游戏物理、esbuild/sql.js/ffmpeg.wasm 这类工具型移植。","与 Worker 常配合：wasm 放 worker 里算，主线程保持丝滑。","判断标准：先用 JS 做，Profiler 证明热点在纯计算且量级大，再考虑 wasm。"],code:`const wasm = await WebAssembly.instantiateStreaming(
  fetch('/math.wasm'),
);
const { sum_range } = wasm.instance.exports;
// 大计算一次调用，避免高频小调用穿越边界
const total = sum_range(0, 10_000_000) as number;
console.log(total);`,analogy:'JS↔WASM 边界像客户端与服务端 API：每次调用都有序列化成本，所以"一次传大包"胜过"一万次传小包"——批处理思维。'},links:[{name:"MDN · WebAssembly",url:"https://developer.mozilla.org/zh-CN/docs/WebAssembly"},{name:"V8 · WebAssembly 博客",url:"https://v8.dev/blog"}]},{d:29,tag:"综合",t:"设计模式在 JS 中的地道写法",xp:160,desc:'单例、观察者、发布订阅、策略、代理在 JS 的自然形态——很多语言模式在 JS 里是"语言特性"。',lesson:{points:["模块单例：ESM 模块本身天然单例（缓存实例化），不要再手写 getInstance。","观察者 = EventTarget/onChanges；发布订阅 = 自写 emitter（on/off/emit），Node EventEmitter 是参考实现。","策略模式 = 对象字面量 + 键查找，替代长 if/switch（map 而不是 switch）。","代理模式 = Proxy；装饰器 = 高阶函数包装（React HOC 的祖师爷）。",'节流/防抖是"行为模式"的经典：闭包存状态 + 定时器调度。'],code:`const strategies: Record<string, (x: number) => number> = {
  double: x => x * 2,
  square: x => x ** 2,
};
const apply = (name: string, x: number) => strategies[name]?.(x) ?? x; // 策略表

class Emitter {
  private map = new Map<string, Set<Fn>>();
  on(ev: string, fn: Fn) { (this.map.get(ev) ?? this.map.set(ev, new Set()).get(ev)!).add(fn); return () => this.off(ev, fn); }
  emit(ev: string, ...args: unknown[]) { this.map.get(ev)?.forEach(f => f(...args)); }
  off(ev: string, fn: Fn) { this.map.get(ev)?.delete(fn); }
}`,analogy:'很多 GoF 模式在 JS 里退化为"语言特性"：单例 = 模块缓存，策略 = 对象字面量，观察者 = onX 事件——先看语言给什么，再决定要不要"设计"。'},links:[{name:"MDN · EventTarget",url:"https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget"},{name:"Node.js · EventEmitter",url:"https://nodejs.org/api/events.html"}]},{d:30,tag:"综合",t:"终极试炼：手写核心库 + 知识体系收束",xp:300,desc:"综合 30 天所学：手写 Promise.all 限流版、深拷贝、事件总线、简易响应式，并把知识点织成体系图。",lesson:{points:["手写 Promise.all：计数器 + 索引保序 + 第一个 reject 立即 reject——同时考察闭包、异步、错误处理。","手写深拷贝：递归 + WeakMap 处理循环引用 + 类型分派（Date/RegExp/Map/Set）——考察引用模型与集合。","手写简易响应式：Proxy + 依赖桶（Map<target, Map<key, Set<effect>>>）+ 微任务批处理——Vue3 的最小核心。","知识体系收束：执行模型（栈/堆/GC）→ 调度（事件循环）→ 语言机制（原型/闭包/代理）→ 工程化（模块/打包/工具）。","持续学习地图：tc39 提案列表、V8 博客、web.dev——语言在演进，模型不变。"],code:`function promiseAll<T>(ps: Promise<T>[]): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const out: T[] = [];
    let done = 0;
    ps.forEach((p, i) => {
      Promise.resolve(p).then(v => {
        out[i] = v;                       // 索引保序
        if (++done === ps.length) resolve(out);
      }, reject);                          // 任一失败即失败
    });
  });
}

function deepClone<T>(obj: T, seen = new WeakMap<object, unknown>()): T {
  if (obj === null || typeof obj !== 'object') return obj;
  if (seen.has(obj as object)) return seen.get(obj as object) as T; // 循环引用
  const copy: any = Array.isArray(obj) ? [] : {};
  seen.set(obj as object, copy);
  for (const [k, v] of Object.entries(obj)) copy[k] = deepClone(v, seen);
  return copy;
}`,analogy:"30 天的地图就像 React 的分层：语言机制是 fiber 架构，事件循环是调度器，闭包是 hooks 的灵魂——理解了底层，框架的新花样只是不同形态。"},links:[{name:"TC39 提案看板",url:"https://github.com/tc39/proposals"},{name:"MDN · JavaScript 教程总览",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript"},{name:"现代 JavaScript 教程",url:"https://zh.javascript.info/"}]}],xd={1:{prompt:`预测下面代码输出，并用 TDZ 解释原因：
console.log(a); var a = 1; console.log(b); let b = 2;`,starter:`// 在这里写下你的预测与解释
`,answer:"var a 提升并初始化为 undefined，第一行输出 undefined；let b 提升但不初始化，处于暂时性死区，第二行抛 ReferenceError。完整输出：undefined，然后抛错。",expected:"undefined / ReferenceError"},2:{prompt:"实现一个 polyfill：Object.is2(a, b)，行为与 Object.is 一致（NaN 为 true、±0 为 false），不使用 Object.is。",starter:`function is2(a: unknown, b: unknown): boolean {
  // TODO
}
`,answer:`function is2(a: unknown, b: unknown): boolean {
  if (a === b) return a !== 0 || 1 / a === 1 / b; // 区分 +0/-0
  return a !== a && b !== b; // NaN 情形
}`,expected:"is2(NaN, NaN) === true；is2(0, -0) === false；is2(1, 1) === true"},3:{prompt:"不用 class，用 Object.create + 工厂函数实现 Dog 继承 Animal（speak 方法在原型上，只创建一次）。",starter:"const animalProto = { speak() { return `${this.name} 发声`; } };\nfunction createAnimal(name: string) { /* TODO */ }\nfunction createDog(name: string) { /* TODO：继承并添加 breed */ }\n",answer:`const animalProto = { speak() { return \`\${this.name} 发声\`; } };
function createAnimal(name: string) {
  return Object.create(animalProto, { name: { value: name, writable: true } });
}
const dogProto = Object.create(animalProto);
function createDog(name: string, breed: string) {
  const d = Object.create(dogProto);
  d.name = name; d.breed = breed;
  return d;
}`,expected:"createDog('旺财', '柴犬') 可调用 speak()，且原型链为 dog → dogProto → animalProto"},4:{prompt:"实现 objectCreate(obj)：模拟 new 的四步行为（创建对象、接原型、绑定 this 调用、按返回类型决定返回值）。",starter:`function objectCreate<T>(ctor: new (...args: any[]) => T, ...args: any[]): T {
  // TODO
}
`,answer:`function objectCreate<T>(ctor: new (...args: any[]) => T, ...args: any[]): T {
  const obj = Object.create(ctor.prototype);
  const ret = ctor.apply(obj, args);
  return (ret !== null && (typeof ret === 'object' || typeof ret === 'function')) ? ret : obj;
}`,expected:"objectCreate(Dog, '旺财') instanceof Dog === true"},5:{prompt:"实现 once(fn)：返回的函数只有第一次调用执行 fn，之后调用返回首次结果（用闭包，不修改 fn）。",starter:`function once<T extends (...args: any[]) => any>(fn: T): T {
  // TODO
}
`,answer:`function once<T extends (...args: any[]) => any>(fn: T): T {
  let called = false, result: unknown;
  return function (this: unknown, ...args: any[]) {
    if (!called) { called = true; result = fn.apply(this, args); }
    return result;
  } as T;
}`,expected:"重复调用只执行一次底层函数，返回首次结果"},6:{prompt:'写一个 willOverflow(n)：判断给定递归深度是否可能溢出调用栈，并给出一个"每次调用至少占 1 栈帧"的估算模型。',starter:`function willOverflow(depth: number): boolean {
  // TODO：用一个探测函数实测最大安全深度
}
`,answer:`function probe(): number {
  let depth = 0;
  try { (function rec() { depth++; rec(); })(); } catch { /* 溢出即停 */ }
  return depth;
}
function willOverflow(depth: number): boolean {
  return depth > probe(); // 典型 V8 栈深约 1 万量级，与参数个数/闭包大小有关
}`,expected:"返回布尔值；probe() 在同一环境内结果稳定"},7:{prompt:`以下代码输出顺序是什么？写出你的推导过程（不运行）。
setTimeout(()=>console.log('A'));
Promise.resolve().then(()=>console.log('B'));
console.log('C');
Promise.resolve().then(()=>setTimeout(()=>console.log('D')));`,starter:`// 你的推导：
`,answer:"同步 C 先输出；微任务队列清空：B（内层把 D 的 setTimeout 注册为宏任务）；然后宏任务：A（先注册）；最后 D。输出：C B A D。",expected:"C B A D"},8:{prompt:"实现 mapSeries(tasks: (() => Promise<T>)[])：按顺序执行（每个完成后再下一个），返回结果数组。",starter:`async function mapSeries<T>(tasks: (() => Promise<T>)[]): Promise<T[]> {
  // TODO
}
`,answer:`async function mapSeries<T>(tasks: (() => Promise<T>)[]): Promise<T[]> {
  const out: T[] = [];
  for (const task of tasks) out.push(await task());
  return out;
}`,expected:"结果顺序与输入一致；总耗时 ≈ 各任务耗时之和"},9:{prompt:"把回调风格的 readConfig(cb) 改造为返回 Promise 的版本（Promise 构造器手动包装，不使用 promisify 工具）。",starter:`function readConfig(cb: (err: Error | null, data?: string) => void) { /* ... */ }
function readConfigAsync(): Promise<string> {
  // TODO
}
`,answer:`function readConfigAsync(): Promise<string> {
  return new Promise((resolve, reject) => {
    readConfig((err, data) => err ? reject(err) : resolve(data!));
  });
}`,expected:"成功 resolve(data)，失败 reject(err)"},10:{prompt:"实现 retry<T>(fn: () => Promise<T>, times: number)：失败自动重试至多 times 次，全部失败抛出最后一次错误。",starter:`async function retry<T>(fn: () => Promise<T>, times: number): Promise<T> {
  // TODO
}
`,answer:`async function retry<T>(fn: () => Promise<T>, times: number): Promise<T> {
  let last: unknown;
  for (let i = 0; i < times; i++) {
    try { return await fn(); } catch (e) { last = e; }
  }
  throw last;
}`,expected:"fn 共被调用至多 times 次；最终成功返回值或抛出最后一次错误"}},Sd={1:[{q:"typeof let 声明的变量在 TDZ 内访问会怎样？",options:["返回 undefined","返回 null","抛 ReferenceError","返回 NaN"],answer:2,explain:"let/const 提升但未初始化，TDZ 内访问抛 ReferenceError；var 则返回 undefined。"},{q:"const arr = Object.freeze([1]) 后，以下哪个语句不会抛错？",options:["arr.push(2)","arr[0] = 99","arr.length = 5","let x = arr[0]"],answer:3,explain:"freeze 只让修改操作抛错（严格模式）或静默失败（非严格），读取永远合法。"}],2:[{q:"Object.is(NaN, NaN) 的结果？",options:["false","true","TypeError","undefined"],answer:1,explain:"Object.is 用 SameValue 算法，NaN === NaN 为 true；而 === 是 false。"},{q:"[1,2] + [3] 的结果？",options:["[1,2,3]","3","'1,23'","NaN"],answer:2,explain:"数组 valueOf 返回自身，走 toString：'1,2' + '3' = '1,23'。"}],3:[{q:"instanceof 的判定依据是？",options:["constructor 属性","右侧函数的 prototype 是否在左侧原型链上","对象自身的 type 标记","Symbol.hasInstance 之外无法判定"],answer:1,explain:"instanceof 沿左侧原型链查找右侧的 prototype（Symbol.hasInstance 可自定义行为，但默认即此）。"},{q:"class 声明会像函数声明一样整体提升吗？",options:["会","不会，进入 TDZ","会但初始化为 undefined","取决于严格模式"],answer:1,explain:"class 与 let 同类：提升绑定但不初始化，声明前访问抛 ReferenceError。"}],4:[{q:"this 绑定优先级最高的是？",options:["隐式绑定 obj.fn()","显式 bind","new 调用","默认调用"],answer:2,explain:"优先级：new > 显式（call/apply/bind）> 隐式 > 默认。"},{q:"箭头函数的 this 由什么决定？",options:["调用者","new 调用","定义处词法作用域","call 的第一个参数"],answer:2,explain:"箭头函数无自身 this，捕获定义处的词法 this，call/bind 均无法改变。"}],5:[{q:"闭包捕获的是？",options:["变量的值快照","变量的绑定（引用）","整个全局作用域副本","仅 const 变量"],answer:1,explain:"捕获词法环境中的变量绑定本身，外部变化闭包可见——stale closure 误解的根源。"},{q:"for (var i…) + setTimeout 的经典输出 3 3 3，正确的修复不包括？",options:["改用 let","用 IIFE 传参","setTimeout 第三参传 i","改用 const"],answer:3,explain:'const 不能在循环体重复赋值（每轮声明可以但 `const i` in for-head 是合法的——但此处说法错误的是"改用 const"对 var 变量无效；let/IIFE/额外参数均可）。'}],6:[{q:"JS 函数调用发生时，最先发生的是？",options:["创建微任务","压入新的执行上下文到调用栈","触发 GC","注册宏任务"],answer:1,explain:"每次调用创建执行上下文压栈，返回时弹栈；异步才涉及任务队列。"},{q:"RangeError: Maximum call stack size exceeded 的常见原因是？",options:["内存泄漏","无限递归/无终止条件","Promise 未 catch","事件循环阻塞"],answer:1,explain:"调用栈深度超限，典型是递归缺少终止条件或栈帧过大。"}],7:[{q:"微任务队列何时清空？",options:["每次宏任务后逐个执行","当前调用栈清空后、渲染前全部清空","每帧一次","渲染后"],answer:1,explain:"同步代码结束 → 全部微任务清空 → 取一个宏任务 →（可能）渲染。"},{q:"requestAnimationFrame 的回调执行时机是？",options:["微任务阶段","渲染前、样式计算前","渲染后","宏任务之后任意时刻"],answer:1,explain:"rAF 在下一帧渲染流程的早期（样式/布局计算前）执行，适合做视觉更新。"}],8:[{q:"then 链中 throw 之后，链路状态是？",options:["链路断裂","后续 catch 接住并恢复 fulfilled","Promise 变为 pending","进程崩溃"],answer:1,explain:"错误沿链穿透直到最近的 rejection handler，处理后的链恢复 fulfilled。"},{q:'需要"所有请求的结果，包括失败的"应使用？',options:["Promise.all","Promise.race","Promise.allSettled","Promise.any"],answer:2,explain:"allSettled 永不 reject，返回每个的 status/value|reason；all 遇第一个失败即失败。"}],9:[{q:"两个独立请求应如何并发？",options:["连续两个 await","Promise.all([a(), b()])","for await 循环","两个 try/catch"],answer:1,explain:"连续 await 是串行（总耗时相加）；Promise.all 并发（总耗时取最大值）。"},{q:"forEach 中使用 async 回调的实际行为是？",options:["自动串行等待","forEach 会等待全部完成","forEach 不等待，外层无法感知完成","直接报错"],answer:2,explain:'forEach 忽略返回的 Promise，异步回调"发后不管"；需要串行用 for...of + await。'}],10:[{q:"unhandledrejection 事件的作用是？",options:["阻止程序崩溃","捕获未被 catch 的 Promise 拒绝，用于兜底上报","替代 try/catch","同步错误的兜底"],answer:1,explain:'它兜底"没有被任何 handler 处理的 rejection"，用于监控上报而非业务恢复。'},{q:"以下哪种 catch 是反模式？",options:["catch 后按类型分发处理","catch 空块吞掉错误","catch 包装后重抛","catch 上报到监控"],answer:1,explain:"空 catch 让错误无声消失，是事故溯源的头号敌人。"}],11:[{q:"for...of 能遍历普通对象 {} 吗？",options:["能","不能，除非实现 Symbol.iterator","能但输出 undefined","只在严格模式"],answer:1,explain:"普通对象默认不可迭代；需要部署 Symbol.iterator 或用 Object.entries 转换。"},{q:"生成器函数第一次调用 it.next() 时，函数体执行到哪里？",options:["整个函数跑完","执行到第一个 yield 暂停","什么都不执行","只执行声明"],answer:1,explain:"next() 启动执行至最近的 yield 处暂停并返回其值；初始代码在首次 next 时才执行。"}],12:[{q:"Vue3 用 Proxy 替代 defineProperty 的关键收益是？",options:["性能必然更快","能拦截新增属性与 delete","兼容 IE","减少内存"],answer:1,explain:"defineProperty 只能劫持已知属性；Proxy 拦截整个对象操作层面，新增/删除无需特殊 API。"},{q:"Proxy 的 get trap 中访问默认行为应调用？",options:["Reflect.get(target, key, receiver)","target[key] 直接返回","Object.get","super.get"],answer:0,explain:'Reflect 方法与 trap 参数签名对应，且正确处理 receiver，是"放行默认行为"的规范写法。'}],13:[{q:"[...{ a: 1 }] 的结果？",options:["[{a:1}]","[1]","TypeError","[undefined]"],answer:2,explain:'展开"可迭代"语义，普通对象不可迭代，抛 TypeError；{...obj} 才是对象展开。'},{q:"函数默认参数可以引用？",options:["后面的参数","前面的参数","任何参数","只能字面量"],answer:1,explain:"默认参数按位置惰性求值，只能引用前面已声明的参数。"}],14:[{q:"[3,1,10].sort() 的返回？",options:["[1,3,10]","[1,10,3]","[10,3,1]","原数组"],answer:1,explain:"默认按字符串 Unicode 序比较：'10' < '3'，所以 10 排在 3 前。数字必须传比较器。"},{q:"以下哪个方法原地修改数组？",options:["map","slice","splice","concat"],answer:2,explain:"splice 原地增删；map/slice/concat 都返回新数组。"}],15:[{q:"WeakMap 的键的要求？",options:["任意值","必须对象（或未注册 symbol）且为弱引用","必须字符串","必须数字"],answer:1,explain:"键必须是可被 GC 的对象（或 registered symbol），WeakMap 不阻止其回收。"},{q:"判断元素是否存在的 O(1) 方案是？",options:["arr.includes","arr.indexOf","new Set(arr).has","arr.find"],answer:2,explain:"Set 哈希查询 O(1)；includes/indexOf/find 都是 O(n) 线性扫描。"}],16:[{q:"pipe(...fns)(x) 的执行顺序是？",options:["从右到左","从左到右","并行执行","由 fns 长度决定"],answer:1,explain:"pipe 从左到右依次把上一步输出作为下一步输入；compose 相反。"},{q:"柯里化的核心收益是？",options:["执行更快","参数复用与函数特化","减少内存","自动错误处理"],answer:1,explain:"柯里化把多参函数变成可逐步供给的函数链，便于生成特化版本。"}],17:[{q:"tree-shaking 的前提是？",options:["使用 ESM 静态 import/export","使用 CommonJS","开启严格模式","代码压缩"],answer:0,explain:"只有静态可分析的模块结构，打包器才能确定哪些导出未被使用。"},{q:"ESM 循环引用为何能工作？",options:["加载器自动重排",'导出的是"活绑定"，引用最终值',"循环引用被禁止并报错","因为延迟求值"],answer:1,explain:"ESM 导出绑定而非快照，模块求值完成后访问到的是最终值。"}],18:[{q:"preventDefault 与 stopPropagation 的关系是？",options:["等价","前者阻止默认行为，后者阻断传播","前者阻断传播，后者阻止默认行为","互斥不能同用"],answer:1,explain:"两者独立：阻止跳转用 preventDefault，阻止冒泡到父级用 stopPropagation。"},{q:"scroll 监听推荐配置？",options:["{ once: true }","{ capture: true }","{ passive: true }","{ signal }"],answer:2,explain:"passive 承诺不调用 preventDefault，浏览器可立即滚动，不再等 JS。"}],19:[{q:"JS 判定对象可回收的依据是？",options:["引用计数为零","从根出发不可达","超过存活时间","手动 delete"],answer:1,explain:"现代引擎以可达性为准，循环引用只要整体不可达也能回收。"},{q:"以下哪项不是常见内存泄漏源？",options:["未清理的 setInterval","被闭包持有的 Detached DOM","WeakMap 的键对象","无限增长的 Map 缓存"],answer:2,explain:"WeakMap 弱引用不阻止回收，恰恰是防泄漏工具；其余三项都是典型泄漏源。"}],20:[{q:"60fps 对应的每帧预算约为？",options:["33ms","16.7ms","50ms","8ms"],answer:1,explain:"1000ms / 60 ≈ 16.7ms，包含 JS 执行 + 样式 + 布局 + 绘制 + 合成全链路。"},{q:"超过多少毫秒的的任务被视为 Long Task？",options:["16ms","30ms","50ms","100ms"],answer:2,explain:"规范定义 >50ms 为 Long Task，会显著影响交互响应（INP）。"}],21:[{q:'V8 中"形状相同的对象"共享的机制叫？',options:["内联缓存","Hidden Class（Map）","分代 GC","Deopt"],answer:1,explain:"相同属性添加顺序的对象共享 hidden class，属性访问可走偏移量快速路径。"},{q:"以下哪种写法会破坏 hidden class 稳定性？",options:["统一构造函数初始化字段","运行时 delete obj.x","class 中声明所有字段","相同顺序赋值"],answer:1,explain:"动态删除属性会使形状退化；应置 null/undefined 或统一初始化。"}],22:[{q:'<script type="module"> 的默认加载行为类似？',options:["async","defer","blocking","preload"],answer:1,explain:"module 脚本默认 defer：不阻塞解析，按文档顺序在解析完成后执行。"},{q:"动画应优先修改哪些属性以避免重排？",options:["width/height","top/left","transform/opacity","margin/padding"],answer:2,explain:"transform/opacity 只触发合成（Composite），绕过 Layout 与 Paint。"}],23:[{q:"arr.toSorted() 与 arr.sort() 的区别是？",options:["无区别","toSorted 返回新数组不改原数组","toSorted 更快","toSorted 不支持比较器"],answer:1,explain:"toSorted/toReversed/toSpliced/with 是 ES2023 的不可变副本方法。"},{q:"Promise.withResolvers() 解决的问题是？",options:["Promise 竞态","手动在外部获取 resolve/reject 的样板代码","Promise 泄漏","超时控制"],answer:1,explain:"一行拿到 { promise, resolve, reject }，替代手写 let 提升变量的旧模式。"}],24:[{q:"for await...of 适用于遍历？",options:["普通对象","同步数组","异步可迭代对象","仅字符串"],answer:2,explain:"它等待每个 next() 返回的 Promise，遍历 AsyncGenerator/异步迭代器。"},{q:"ReadableStream 的 for await...of 消费优势是？",options:["更快解码","背压友好、内存占用恒定","自动重试","并发读取"],answer:1,explain:"逐 chunk 拉取处理，无需把整个响应缓存进内存。"}],25:[{q:"TS 的 as 断言在运行时的作用是？",options:["做类型校验","无任何作用，纯编译期","抛出类型错误","转换数据"],answer:1,explain:"类型编译后全部消失，as 不产生运行时检查；外部数据需 zod 等运行时校验。"},{q:"与 enum 相比更推荐的替代方案？",options:["namespace","const 对象 + as const + union type","any","class 静态成员"],answer:1,explain:"enum 有运行时对象生成与怪癖；as const + union 更轻且兼容 tree-shaking。"}],26:[{q:"typescript-eslint 的 no-floating-promises 防止？",options:["循环依赖","忘记 await/return 的 Promise 被静默丢弃","any 泛滥","未使用变量"],answer:1,explain:"悬浮 Promise 的错误不会被任何人接住，这条规则强制显式处理。"},{q:"声明 sideEffects: false 的作用是？",options:["关闭严格模式","告诉打包器未使用的模块导入可安全移除（提升摇树）","禁用热更新","开启 SSR"],answer:1,explain:'配合 ESM 让 tree-shaking 更激进，防止"为副作用保留"的误判。'}],27:[{q:"Web Worker 与主线程共享内存的方式是？",options:["全局变量","SharedArrayBuffer + Atomics","postMessage 深拷贝","DOM 节点"],answer:1,explain:"postMessage 是结构化克隆（拷贝）；真共享内存需 SharedArrayBuffer（且需 COOP/COEP）。"},{q:"Worker 中不能访问的是？",options:["fetch","DOM","setTimeout","IndexedDB"],answer:1,explain:"Worker 无 DOM/window，有自身的 globalThis（DedicatedWorkerGlobalScope），fetch/定时器可用。"}],28:[{q:"WASM 模块可以直接访问 DOM 吗？",options:["可以","不可以，需 JS 胶水层","仅 Firefox 可以","开启 flag 后可以"],answer:1,explain:"WASM 只操作线性内存与数值，DOM/Web API 通过 JS 互操作完成。"},{q:"JS↔WASM 调用的性能建议是？",options:["高频小调用","减少边界穿越，一次传大数据","尽量多用 Promise","所有逻辑迁入 WASM"],answer:1,explain:"边界有数据拷贝/转换成本，批处理式的大输入长计算才能兑现性能优势。"}],29:[{q:"ESM 模块为什么天然是单例？",options:["引擎加锁","模块实例被缓存，多次 import 得到同一实例","因为严格模式","globalThis 唯一"],answer:1,explain:"模块记录只求值一次，后续 import 共享同一命名空间对象。"},{q:"用对象字面量替代长 switch 属于哪种模式？",options:["单例","策略模式","观察者","装饰器"],answer:1,explain:"键查找表即策略表：新增行为只加键值对，符合开闭原则。"}],30:[{q:"手写 Promise.all 的关键细节不包括？",options:["索引保序","计数器判断完成数","任一失败立即 reject","限制并发数"],answer:3,explain:'标准 all 不限并发；限制并发是 all 的"限流变体"，属于扩展实现。'},{q:"手写深拷贝处理循环引用的标准手段是？",options:["JSON.stringify","WeakMap 记录已拷贝对象","递归深度限制","structuredClone 替代"],answer:1,explain:"WeakMap 以原对象为键记录副本，遇到已见对象直接返回副本，打破循环。"}]},bd={1:[{name:"MDN · JavaScript 指南：语法与类型",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types",type:"docs"},{name:"现代 JavaScript 教程 · 闭包/作用域",url:"https://zh.javascript.info/closure",type:"tutorial"}],2:[{name:"MDN · 相等性比较",url:"https://developer.mozilla.org/zh-CN/docs/Web/Equality_comparisons_and_sameness",type:"docs"},{name:"MDN · typeof",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof",type:"docs"}],3:[{name:"MDN · 继承与原型链",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain",type:"docs"},{name:"现代 JavaScript 教程 · 原型继承",url:"https://zh.javascript.info/prototype-inheritance",type:"tutorial"}],4:[{name:"MDN · this 完整指南",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this",type:"docs"},{name:"现代 JavaScript 教程 · 对象方法与 this",url:"https://zh.javascript.info/object-methods",type:"tutorial"}],5:[{name:"MDN · 闭包",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures",type:"docs"},{name:"MDN · 内存管理",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_management",type:"docs"}],6:[{name:"V8 · Stack Trace API",url:"https://v8.dev/docs/stack-trace-api",type:"docs"},{name:"MDN · Error 对象",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error",type:"docs"}],7:[{name:"Jake Archibald · Tasks, microtasks, queues and schedules",url:"https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/",type:"article"},{name:"JSV9000 事件循环可视化",url:"https://www.jsv9000.app/",type:"tool"}],8:[{name:"MDN · 使用 Promise",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises",type:"docs"},{name:"MDN · Promise 组合器一览",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise",type:"docs"}],9:[{name:"MDN · async 与 await",url:"https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Promises",type:"docs"},{name:"MDN · for...of 与异步",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for-await...of",type:"docs"}],10:[{name:"MDN · try...catch",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch",type:"docs"},{name:"Chrome DevTools · 调试技巧",url:"https://developer.chrome.com/docs/devtools/javascript",type:"tool"}],11:[{name:"MDN · 迭代协议",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols",type:"docs"},{name:"MDN · 生成器",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators",type:"docs"}],12:[{name:"MDN · Proxy",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy",type:"docs"},{name:"Vue 官方 · 深入响应式系统",url:"https://cn.vuejs.org/guide/extras/reactivity-in-depth.html",type:"article"}],13:[{name:"MDN · 解构赋值",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment",type:"docs"},{name:"MDN · Spread 语法",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax",type:"docs"}],14:[{name:"MDN · Array 方法总览",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array",type:"docs"},{name:"2ality · Array method cheatsheet",url:"https://2ality.com/2024/01/array-methods.html",type:"article"}],15:[{name:"MDN · 键控集合（Map/Set/WeakMap）",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Keyed_collections",type:"docs"},{name:"MDN · WeakRef 与 FinalizationRegistry",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakRef",type:"docs"}],16:[{name:"Reginald Braithwaite · Functional JS 系列",url:"https://raganwald.com/",type:"blog"},{name:"MDN · reduce",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce",type:"docs"}],17:[{name:"MDN · JavaScript 模块",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules",type:"docs"},{name:"Node.js · ESM 官方文档",url:"https://nodejs.org/api/esm.html",type:"docs"}],18:[{name:"MDN · 事件参考",url:"https://developer.mozilla.org/zh-CN/docs/Web/Events",type:"docs"},{name:"web.dev · 高性能滚动（passive）",url:"https://web.dev/articles/passive-event-listeners",type:"article"}],19:[{name:"Chrome DevTools · 内存问题",url:"https://developer.chrome.com/docs/devtools/memory-problems",type:"tool"},{name:"MDN · 内存管理",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_management",type:"docs"}],20:[{name:"web.dev · Core Web Vitals",url:"https://web.dev/articles/vitals",type:"article"},{name:"MDN · Performance API",url:"https://developer.mozilla.org/zh-CN/docs/Web/API/Performance",type:"docs"}],21:[{name:"V8 官方博客",url:"https://v8.dev/blog",type:"blog"},{name:"V8 · 设计文档",url:"https://v8.dev/docs",type:"docs"}],22:[{name:"web.dev · 渲染性能",url:"https://web.dev/articles/rendering-performance",type:"article"},{name:"MDN · script 的 defer/async",url:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script",type:"docs"}],23:[{name:"MDN · toSorted",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted",type:"docs"},{name:"2ality · ES2024 新特性",url:"https://2ality.com/2024/05/ecmascript-2024.html",type:"article"}],24:[{name:"MDN · 异步迭代协议",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols",type:"docs"},{name:"MDN · Streams API",url:"https://developer.mozilla.org/zh-CN/docs/Web/API/Streams_API",type:"docs"}],25:[{name:"TypeScript Handbook",url:"https://www.typescriptlang.org/docs/handbook/intro.html",type:"docs"},{name:"Zod · 运行时校验",url:"https://zod.dev/",type:"library"}],26:[{name:"typescript-eslint 规则集",url:"https://typescript-eslint.io/rules/",type:"docs"},{name:"web.dev · 优化 JavaScript",url:"https://web.dev/articles/optimize-javascript",type:"article"}],27:[{name:"MDN · Web Workers API",url:"https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API",type:"docs"},{name:"GoogleChromeLabs · Comlink",url:"https://github.com/GoogleChromeLabs/comlink",type:"library"}],28:[{name:"MDN · WebAssembly",url:"https://developer.mozilla.org/zh-CN/docs/WebAssembly",type:"docs"},{name:"webassembly.org 官网",url:"https://webassembly.org/",type:"docs"}],29:[{name:"Node.js · events 模块",url:"https://nodejs.org/api/events.html",type:"docs"},{name:"MDN · EventTarget",url:"https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget",type:"docs"}],30:[{name:"TC39 提案进度看板",url:"https://github.com/tc39/proposals",type:"repo"},{name:"现代 JavaScript 教程（全册）",url:"https://zh.javascript.info/",type:"tutorial"}]},wd={tagline:"从 TS/JS 通往编译型世界：指针、内存、RAII、模板与 STL 的 30 天远征"},kd=[{d:1,tag:"入门",t:"编译型思维：从解释执行到二进制",desc:'安装 g++/clang 与 VS Code，写下第一个程序，理解"源码→编译→链接→可执行文件"与 JS 引擎即时解释的本质区别。',xp:60,lesson:{points:['JS/TS：写完直接跑（引擎解释/JIT）；C++：必须先编译成机器码，错误在编译期暴露——相当于把 TS 的类型检查变成"强制的、更狠的版本"',"编译四步：预处理(#include 复制粘贴) → 编译(生成汇编) → 汇编(生成 .o 目标文件) → 链接(合并 .o 与库成可执行文件)",'#include 不是 import！它把头文件内容原样粘贴进来，这是"重定义错误"的根源',"main 函数是入口，返回 int（0 表示成功）——没有 main 就链接失败，相当于 npm 包没有 entry","用 g++ -std=c++20 -Wall main.cpp -o app 编译：-std 选标准，-Wall 开警告（等于把 ESLint 拉满）"],code:`#include <iostream>

int main() {
    std::cout << "Hello, Hero!\\n";  // << 是流插入，类比 console.log
    return 0;  // 退出码，echo $? 可见
}
// 编译：g++ -std=c++20 -Wall main.cpp -o hello && ./hello`,analogy:'TS 是"边跑边查"，C++ 是"出厂前全检"：编译器就是你的 lint+type-check 合体，警告都要当错误看。'},links:[{name:"learncpp.com 第 0 章（强烈推荐的系统教程）",url:"https://www.learncpp.com/cpp-tutorial/introduction-to-these-tutorials/",type:"tutorial"},{name:"cppreference 编译入门",url:"https://en.cppreference.com/w/cpp/language",type:"doc"},{name:"Compiler Explorer（在线看编译产物汇编）",url:"https://godbolt.org/",type:"tool"}]},{d:2,tag:"基础",t:"变量与类型：static typing 的完全体",desc:"掌握基本类型(int/double/bool/char)、字面量、const、auto 类型推导，对比 TS 的 number/string/any 体系。",xp:60,lesson:{points:['C++ 类型是"内存大小+解释方式"：int 4 字节、double 8 字节；TS 的 number 统一了它们，C++ 必须自己选',"整数有溢出（signed 溢出是未定义行为 UB！），浮点有精度——没有 Number.MAX_SAFE_INTEGER 保护你",'const 是编译期常量承诺，constexpr 更进一步："必须能在编译期算出"，类比 as const 但强制执行',"auto 让编译器推导类型（类似 TS 的隐式推断），但规则更细：auto 会丢掉引用和顶层 const","用 sizeof(T) 查字节数；std::string 才是字符串（别用 C 风格 char*）"],code:`#include <iostream>
#include <string>

int main() {
    int hp = 100;            // 4 字节整数
    double atk = 23.5;       // 8 字节浮点
    const int maxHp = 100;   // 编译期承诺不可改
    constexpr int ver = 2;   // 强制编译期求值
    auto level = 30;         // 推导为 int
    std::string name = "勇者";
    std::cout << sizeof(hp) << " " << name << "\\n";
}`,analogy:"TS: let n: number → JS 里都是 double。C++ 把 number 拆成 int/long/float/double/size_t…，选错类型 = 内存与溢出问题。"},links:[{name:"learncpp：变量、初始化与类型",url:"https://www.learncpp.com/cpp-tutorial/introduction-to-objects-and-variables/",type:"tutorial"},{name:"cppreference：类型",url:"https://en.cppreference.com/w/cpp/language/types",type:"doc"},{name:"C++ Core Guidelines：类型安全",url:"https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#S-numeric",type:"doc"}]},{d:3,tag:"基础",t:"函数、重载与默认参数",desc:"函数声明/定义分离、按值/按引用传参、函数重载，理解为什么头文件要声明、源文件要定义。",xp:60,lesson:{points:["声明(签名)放头文件 .h/.hpp，定义(实现)放 .cpp——类似 .d.ts 与实现的分离","按值传参会拷贝对象（大对象开销大），按引用传参 void f(const std::string& s) 零拷贝，类比传引用 vs structuredClone","重载：同名不同参，编译期按参数类型静态分发（TS  overload 只是类型标注，C++ 是真的生成多个函数）","默认参数和 TS 一样，但只能从右往左缺省","函数模板先放一放（Day 12），今天先吃透引用传参"],code:`#include <iostream>
#include <string>

void greet(const std::string& name) {      // const 引用：只读、零拷贝
    std::cout << "Hi, " << name << "\\n";
}
int add(int a, int b) { return a + b; }
double add(double a, double b) { return a + b; }  // 重载
int heal(int hp, int amount = 10) { return hp + amount; }  // 默认参数

int main() {
    greet("勇者");
    std::cout << add(1, 2) << add(1.5, 2.5) << heal(80) << "\\n";
}`,analogy:"按值传参 = structuredClone(obj)，按 const 引用传参 = 传只读代理。C++ 默认是前者，所以要显式写 &。"},links:[{name:"learncpp：函数与传参",url:"https://www.learncpp.com/cpp-tutorial/introduction-to-functions/",type:"tutorial"},{name:"cppreference：函数重载",url:"https://en.cppreference.com/w/cpp/language/overload_resolution",type:"doc"}]},{d:4,tag:"核心概念",t:"指针 vs 引用：本周最重要的概念",desc:"理解取地址 &、解引用 *、指针算术，以及引用与指针的差异；用 JS 引用语义做映射。",xp:80,lesson:{points:["对象 = 内存中一段字节。&x 取地址，*p 解引用（顺着地址找到对象）",'引用 T& 是"对象的别名"，必须初始化、不能为空、不能改绑——类比 TS 里非空的对象引用','指针 T* 是"存地址的变量"，可以为 nullptr、可以重新指向、可以做指针算术——类比可空的引用，且更底层',"空指针解引用 = 程序崩溃（段错误），编译器不拦你——没有 TypeError，只有 core dump",'现代 C++ 建议：能用引用就用引用；需要"可选/可重指"才用指针，且尽量用智能指针（Day 18-19）'],code:`#include <iostream>

void levelUp(int* hp) { *hp += 10; }   // 指针：可能为空，需解引用
void levelUpRef(int& hp) { hp += 10; } // 引用：必绑对象，直接当原变量用

int main() {
    int hp = 100;
    int* p = &hp;      // p 存 hp 的地址
    int& r = hp;       // r 是 hp 的别名
    levelUp(p);
    levelUpRef(hp);
    std::cout << hp << " " << *p << " " << r << "\\n";  // 120 120 120
}`,analogy:'JS 的对象变量本身就是"引用"，你从没见过地址；C++ 让你亲手拿地址：指针 = 拿着门牌号，引用 = 给房间起了个昵称。'},links:[{name:"learncpp：指针（重点章节）",url:"https://www.learncpp.com/cpp-tutorial/introduction-to-pointers/",type:"tutorial"},{name:"learncpp：引用",url:"https://www.learncpp.com/cpp-tutorial/references/",type:"tutorial"},{name:"cppreference：引用声明",url:"https://en.cppreference.com/w/cpp/language/reference",type:"doc"}]},{d:5,tag:"内存模型",t:"栈与堆：内存到底长什么样",desc:"理解栈帧、堆分配 new/delete、内存泄漏与悬空指针，画出程序内存布局图。",xp:80,lesson:{points:["栈：函数调用自动分配/回收，快但小（约几 MB），局部变量住这里——类比调用栈，出栈即回收","堆：new 手动申请、delete 手动释放，大而慢，忘了 delete = 内存泄漏（JS 有 GC，C++ 没有！）","悬空指针：delete 后继续用指针——JS 里对象没人引用就被 GC，C++ 里被你 delete 的内存还在那，踩了就炸","内存布局：代码段(函数体) / 全局区(static) / 栈(局部变量) / 堆(new 出来的)","数组退化为指针：int arr[5] 传参会丢长度信息，std::vector 才记得住（Day 15）"],code:`#include <iostream>

int main() {
    int stackVar = 1;                 // 栈：函数结束自动回收
    int* heapVar = new int(2);        // 堆：手动申请
    int* arr = new int[3]{4, 5, 6};   // 堆数组

    std::cout << *heapVar << " " << arr[1] << "\\n";
    delete heapVar;      // 忘了 = 内存泄漏
    delete[] arr;        // 数组用 delete[]
    heapVar = nullptr;   // 好习惯：置空防悬空
}`,analogy:"栈 = 递归调用栈上的临时变量，自动弹出；堆 = 你手动 new 出来的对象，但没有 GC——你就是 JS 引擎的内存管理模块本人。"},links:[{name:"learncpp：动态内存分配",url:"https://www.learncpp.com/cpp-tutorial/dynamic-memory-allocation-with-new-and-delete/",type:"tutorial"},{name:"cppreference：new 表达式",url:"https://en.cppreference.com/w/cpp/language/new",type:"doc"},{name:"Valgrind（内存泄漏检测工具）",url:"https://valgrind.org/",type:"tool"}]},{d:6,tag:"核心概念",t:"RAII：C++ 最伟大的思想",desc:"Resource Acquisition Is Initialization：用对象生命周期管理资源，理解析构函数如何替代 try/finally。",xp:80,lesson:{points:["RAII：资源（内存/文件/锁/连接）的获取放在构造函数，释放放在析构函数——对象出作用域析构自动执行","这就是为什么 C++ 没有 finally：析构函数就是 finally，而且是自动的、异常安全的","JS 里没有 RAII（有 GC 但没有确定性析构），所以需要手动 close/try-finally；C++ 作用域结束时保证调用 ~T()","RAII 是智能指针、lock_guard、fstream 一切的基础——先理解它，后面全是它的应用","规则：谁拥有谁释放；所有权(ownership)概念从今天开始贯穿全程"],code:`#include <iostream>

class Guard {
public:
    explicit Guard(std::string name) : name_(std::move(name)) {
        std::cout << "[" << name_ << "] 获得锁\\n";
    }
    ~Guard() { std::cout << "[" << name_ << "] 释放锁\\n"; }  // 出作用域自动调用
private:
    std::string name_;
};

int main() {
    {
        Guard g("战斗");   // 进入作用域：构造
        std::cout << "战斗中...\\n";
    }                    // 离开作用域：析构，绝不忘记
    std::cout << "安全返回城镇\\n";
}`,analogy:"JS: const conn = await open(); try {...} finally { await conn.close(); }。C++: { Conn c; ... } 析构自动 close，抛异常也不会漏。"},links:[{name:"learncpp：析构函数",url:"https://www.learncpp.com/cpp-tutorial/destructors/",type:"tutorial"},{name:"cppreference：RAII",url:"https://en.cppreference.com/w/cpp/language/raii",type:"doc"}]},{d:7,tag:"OOP",t:"类与封装：struct 的完全体",desc:"定义类、访问控制、成员函数、构造函数初始化列表；对比 TS class 的差异。",xp:80,lesson:{points:["class 成员默认 private，struct 默认 public——其余完全一样（JS class 是糖，C++ class 是内存布局+访问控制的合集）","成员函数定义在类内或类外(类名::函数)；this 是指针，用 this->member（JS 的 this 语义完全不同：没有动态绑定问题）","构造函数用初始化列表 : hp_(hp) 初始化，比函数体内赋值更高效、const 成员必须用它","没有 public/private/protected 之外的字段修饰如 readonly——用 const 成员表达","方法默认按值返回；返回 const std::string& 之类要小心悬空（返回局部变量的引用 = 大忌）"],code:`#include <iostream>
#include <string>

class Hero {
public:
    Hero(std::string name, int hp) : name_(std::move(name)), hp_(hp) {}  // 初始化列表

    void takeDamage(int dmg) { hp_ -= dmg; }        // 修改状态
    int hp() const { return hp_; }                  // const 方法：不修改 this
    const std::string& name() const { return name_; }

private:                                            // 默认 private
    std::string name_;
    int hp_;
};

int main() {
    Hero h("勇者", 100);
    h.takeDamage(30);
    std::cout << h.name() << " HP: " << h.hp() << "\\n";
}`,analogy:'TS class 像一张对象形状的"契约"，运行期还是普通对象；C++ class 决定了内存怎么排、哪些成员能被外界摸到，编译期全部确定。'},links:[{name:"learncpp：类（核心章节）",url:"https://www.learncpp.com/cpp-tutorial/introduction-to-classes/",type:"tutorial"},{name:"cppreference：类",url:"https://en.cppreference.com/w/cpp/language/classes",type:"doc"}]},{d:8,tag:"OOP",t:"拷贝、析构与三/五法则",desc:"拷贝构造、拷贝赋值、析构函数；Rule of Three/Five/Zero——深浅拷贝的 C++ 版。",xp:80,lesson:{points:['默认拷贝是"逐成员拷贝"（浅拷贝）：类里有裸指针时两个对象共享同一块堆内存 → 双重 delete 崩溃',"Rule of Three：需要自定义析构/拷贝构造/拷贝赋值之一，通常三个都要写（管理资源的类）","Rule of Five（C++11+）：再加移动构造、移动赋值（Day 20）","Rule of Zero：别自己管资源，用 std::vector/std::string/智能指针，让编译器生成的默认函数就正确——首选方案","拷贝构造 T(const T& other)、拷贝赋值 T& operator=(const T& other)，签名要背下来"],code:`#include <iostream>
#include <cstring>

class Buffer {
public:
    explicit Buffer(size_t n) : size_(n), data_(new int[n]{}) {}
    ~Buffer() { delete[] data_; }                                   // 1. 析构
    Buffer(const Buffer& o) : size_(o.size_), data_(new int[o.size_]) {  // 2. 拷贝构造：深拷贝
        std::memcpy(data_, o.data_, size_ * sizeof(int));
    }
    Buffer& operator=(const Buffer& o) {                            // 3. 拷贝赋值
        if (this != &o) { Buffer tmp(o); std::swap(size_, tmp.size_); std::swap(data_, tmp.data_); }
        return *this;                                               // copy-and-swap 惯用法
    }
    int& operator[](size_t i) { return data_[i]; }
private:
    size_t size_;
    int* data_;
};`,analogy:'TS 对象赋值本身就是引用共享（浅），没有"拷贝构造"这回事；C++ 每次赋值/传参都可能真的在复制字节，你要决定浅还是深。'},links:[{name:"learncpp：拷贝构造函数",url:"https://www.learncpp.com/cpp-tutorial/copy-constructors/",type:"tutorial"},{name:"Rule of Three/Five/Zero",url:"https://en.cppreference.com/w/cpp/language/rule_of_three",type:"doc"}]},{d:9,tag:"OOP",t:"运算符重载：让类型像内置类型",desc:"重载 +、==、<<、[] 等，理解 std::string 为什么能 s1 + s2。",xp:70,lesson:{points:["运算符本质是函数：a + b 就是 operator+(a, b)，重载只是给自定义类型定义这些函数","成员运算符(a += b) vs 自由运算符(a + b)：能对称转换的（如 Vector + 标量）用自由函数","operator<< 用于流输出，必须写成自由函数 friend ostream& operator<<(ostream&, const T&)","不要重载 &&、||、,、&——它们失去短路语义，社区公认禁忌","C++20 飞船运算符 <=>：一行搞定全部六种比较，类似实现 valueOf 后自动排序"],code:`#include <iostream>

class Vec2 {
public:
    Vec2(double x, double y) : x_(x), y_(y) {}
    Vec2 operator+(const Vec2& o) const { return {x_ + o.x_, y_ + o.y_}; }
    bool operator==(const Vec2& o) const { return x_ == o.x_ && y_ == o.y_; }
    double& operator[](int i) { return i == 0 ? x_ : y_; }   // v[0], v[1]
    friend std::ostream& operator<<(std::ostream& os, const Vec2& v) {
        return os << "(" << v.x_ << ", " << v.y_ << ")";
    }
private:
    double x_, y_;
};

int main() {
    Vec2 a(1, 2), b(3, 4);
    std::cout << a + b << "\\n";   // (4, 6)
}`,analogy:"JS 里 a + b 走 valueOf/Symbol.toPrimitive 这种运行期魔法；C++ 运算符重载是编译期直接生成函数调用，无魔法但有规则。"},links:[{name:"learncpp：运算符重载",url:"https://www.learncpp.com/cpp-tutorial/introduction-to-operator-overloading/",type:"tutorial"},{name:"cppreference：运算符重载",url:"https://en.cppreference.com/w/cpp/language/operators",type:"doc"}]},{d:10,tag:"OOP",t:"继承与多态：virtual 的世界",desc:"public 继承、虚函数、override、抽象类与纯虚函数；对比 TS interface + extends。",xp:80,lesson:{points:['class Enemy : public Character —— public 继承是"is-a"关系；C++ 还有多重继承（前端没见过，先慎用）',"TS 方法重写是运行期天然动态的；C++ 默认是静态绑定！必须写 virtual 才有运行期多态",'override 关键字（C++11）让编译器帮你检查"确实重写了"，相当于 TS 的 implements 检查',"纯虚函数 virtual void attack() = 0; 使类成为抽象类（不能实例化）≈ 抽象基类/interface",'多态必须通过指针或引用使用：Enemy& e = ...; 或 Enemy* —— 按值装进容器会发生"对象切片"(Day 11)'],code:`#include <iostream>
#include <memory>

class Enemy {
public:
    virtual ~Enemy() = default;            // 有虚函数的基类必须虚析构！
    virtual void attack() const = 0;       // 纯虚：抽象类
};

class Slime : public Enemy {
public:
    void attack() const override { std::cout << "史莱姆撞击！\\n"; }
};
class Dragon : public Enemy {
public:
    void attack() const override { std::cout << "龙息喷射！\\n"; }
};

int main() {
    std::unique_ptr<Enemy> e = std::make_unique<Dragon>();
    e->attack();   // 运行期决定调用哪个 attack：多态
}`,analogy:"TS 里 class implements interface 就自动多态；C++ 的 virtual 是你手动打开多态开关，忘了写 = 调用的永远是基类版本，还编译不报错。"},links:[{name:"learncpp：虚函数与多态",url:"https://www.learncpp.com/cpp-tutorial/virtual-functions/",type:"tutorial"},{name:"cppreference：虚函数",url:"https://en.cppreference.com/w/cpp/language/virtual",type:"doc"}]},{d:11,tag:"OOP",t:"虚函数表与对象切片",desc:"理解 vtable 如何实现动态分发、为什么按值传递/存储会切掉派生部分、虚析构的必要性。",xp:80,lesson:{points:["每个有虚函数的类有一张 vtable（函数指针表）；每个对象头部藏一个 vptr 指向它——调用虚函数 = 查表二次跳转（JS 的方法查找也是类似的运行期机制）",'这就是 C++ 的"动态 dispatch 也要付成本"，而普通函数是编译期直接内联的零成本',"对象切片：Enemy e = Dragon{}; 按值赋给基类，Dragon 独有字段被切掉，虚函数也只表现基类行为","基类析构必须 virtual：否则 delete 基类指针时派生类析构不被调用 → 资源泄漏（经典面试题）","容器里装多态对象：std::vector<std::unique_ptr<Enemy>>，或 std::vector<std::reference_wrapper<Enemy>>"],code:`#include <iostream>

class Base {
public:
    virtual ~Base() = default;
    virtual void who() const { std::cout << "Base\\n"; }
};
class Derived : public Base {
public:
    void who() const override { std::cout << "Derived\\n"; }
};

int main() {
    Derived d;
    Base sliced = d;      // 切片！只保留 Base 部分
    sliced.who();         // Base（静态拷贝，vptr 也是 Base 的）

    Base& ref = d;
    ref.who();            // Derived（查 vtable）
}`,analogy:'按值装基类 = 把 {type:"dragon", fire:true} 浅拷贝成 {type:"base"}，字段直接丢；引用/指针 = 拿着原对象的引用，类型信息完整。'},links:[{name:"learncpp：虚函数表",url:"https://www.learncpp.com/cpp-tutorial/virtual-function-tables/",type:"tutorial"},{name:"cppreference：delete 与虚析构相关",url:"https://en.cppreference.com/w/cpp/language/destructor",type:"doc"}]},{d:12,tag:"泛型",t:"模板基础：C++ 版的泛型",desc:"函数模板与类模板，对比 TS generics：编译期实例化 vs 类型擦除。",xp:80,lesson:{points:['template <typename T> T max(T a, T b) —— 调用时编译器按实际类型"盖章生成"一个新函数（monomorphization，TS 泛型擦除后只有一个函数）',"所以模板代码必须放头文件（实例化时编译器要看到完整定义），链接错误的常见来源","类模板 std::vector<int> 就是 template class 的产物；你也能写自己的 Box<T>",'模板没有"类型约束语法"，约束靠概念(concepts, C++20)或编译错误体现——TS 的 extends 约束在 C++20 前全靠报错文本几百行',"每个模板实例是不同类型：vector<int> 和 vector<double> 毫无关系，不能互换"],code:`#include <iostream>
#include <string>

template <typename T>
T maxOf(const T& a, const T& b) { return a > b ? a : b; }

template <typename T>
class Box {
public:
    explicit Box(T v) : v_(std::move(v)) {}
    const T& get() const { return v_; }
private:
    T v_;
};

int main() {
    std::cout << maxOf(3, 7) << " " << maxOf(std::string("剑"), std::string("盾")) << "\\n";
    Box<int> b(42);
    std::cout << b.get() << "\\n";
}`,analogy:"TS 泛型 = 编辑器里的类型体操，运行后消失；C++ 模板 = 编译器帮你复制粘贴生成 N 份代码（代码膨胀是代价，性能是回报）。"},links:[{name:"learncpp：函数模板",url:"https://www.learncpp.com/cpp-tutorial/introduction-to-function-templates/",type:"tutorial"},{name:"cppreference：模板",url:"https://en.cppreference.com/w/cpp/language/templates",type:"doc"}]},{d:13,tag:"泛型",t:"模板进阶：concepts、特化与变参",desc:"C++20 concepts 约束、模板特化、可变参数模板；看懂 STL 报错的能力。",xp:90,lesson:{points:['concepts 是"TS extends 约束"的正式版：template <std::integral T> —— 不满足直接报一行人话错误',"常用概念：std::integral, std::floating_point, std::same_as, std::convertible_to（<concepts> 头文件）","模板特化：为特定类型提供不同实现（template<> struct hash<MyKey>），类似给某个泛型调用写定制版","可变参数模板 template <typename... Args> 是参数个数也泛型化——STL 的 emplace/make_unique 全靠它",'实用主义：会读报错比会写高级模板重要；看到 "candidate function not viable" 先检查参数类型'],code:`#include <iostream>
#include <concepts>

template <typename T>
concept Addable = requires(T a, T b) {   // 类似 TS 的条件类型推断
    { a + b } -> std::convertible_to<T>;
};

template <Addable T>
T sum(T a, T b) { return a + b; }

// 为 const char* 特化
// template <> int sum<int>(int, int) { ... } 形式略

int main() {
    std::cout << sum(1, 2) << "\\n";
    // sum(std::string("a"), std::string("b"));  // OK：string 可相加
}`,analogy:'C++20 前：泛型约束全靠编译报错像论文一样长；concepts 之后终于有了 TS 那种 "Type X does not satisfy the constraint" 的一行报错。'},links:[{name:"cppreference：constraints 与 concepts",url:"https://en.cppreference.com/w/cpp/language/constraints",type:"doc"},{name:"learncpp：模板特化",url:"https://www.learncpp.com/cpp-tutorial/template-specialization/",type:"tutorial"}]},{d:14,tag:"STL",t:"STL 容器总览：选对数据结构",desc:"vector/list/deque/map/set/unordered_map 的选型心法，对应 JS 数组/Map/Set。",xp:80,lesson:{points:["std::vector ≈ JS Array（动态数组，绝大多数场景首选）；std::unordered_map ≈ JS Map（哈希表）；std::unordered_set ≈ Set","std::map/std::set 是红黑树（有序，O(log n)），按 key 排序遍历——JS 没有，需要有序字典时用它","std::list 是双向链表：日常几乎不用（缓存不友好），别按 JS/Java 习惯选它",'容器只装"值"：装类层次对象要装指针（unique_ptr），避免切片（Day 11）',"选型口诀：默认 vector；按键查且要有序 → map；只查快 → unordered_map；去重 → set/unordered_set"],code:`#include <iostream>
#include <vector>
#include <map>
#include <unordered_map>
#include <set>
#include <string>

int main() {
    std::vector<int> bag = {1, 2, 3};                    // JS: [1,2,3]
    bag.push_back(4);

    std::unordered_map<std::string, int> gold;           // JS: Map
    gold["城镇"] = 500;                                   // operator[] 不存在则插入 0

    std::map<int, std::string> sorted{{3, "c"}, {1, "a"}};  // 按 key 升序
    for (auto& [k, v] : sorted) std::cout << k << v << " ";  // 1a 3c

    std::set<int> uniq{3, 1, 3};                         // JS: Set，存 3,1
}`,analogy:'把 JS 的 Array/Map/Set 一一对应记牢，你已经会 70% 的 STL 选型；剩下的是"有序"和"连续内存"这两个 JS 没有的维度。'},links:[{name:"cppreference：容器库",url:"https://en.cppreference.com/w/cpp/container",type:"doc"},{name:"learncpp：容器总览",url:"https://www.learncpp.com/cpp-tutorial/introduction-to-the-standard-library/",type:"tutorial"}]},{d:15,tag:"STL",t:"vector 与 string 深入：连续内存的威力",desc:"扩容机制、reserve/resize、capacity、string 的常用操作；理解为什么 vector 是默认容器。",xp:80,lesson:{points:["vector 扩容 = 重新分配更大内存 + 搬迁所有元素（与 React 的 key 重建类似，开销大），reserve 一次预留可避免反复搬迁","size() 是元素数，capacity() 是已分配容量；push_back 均摊 O(1)，中间插入 O(n)","连续内存 = 缓存友好，遍历比链表快几个数量级——这是 Day 25 性能课的伏笔","std::string 就是 vector<char> + 字符串工具：substr(类似 slice)、find(类似 indexOf)、+=、size()","注意：push_back 可能使已有迭代器/引用失效（内存搬走了），搬迁后别再抓着旧地址不放"],code:`#include <iostream>
#include <vector>
#include <string>

int main() {
    std::vector<int> v;
    v.reserve(1000);                        // 预留，避免反复 realloc
    for (int i = 0; i < 1000; ++i) v.push_back(i);
    std::cout << "size=" << v.size() << " cap=" << v.capacity() << "\\n";

    v.erase(v.begin() + 2);                 // 类似 splice(2,1)
    v.insert(v.begin(), 0);                 // 头插 O(n)！

    std::string s = "Hello, Hero";
    std::cout << s.substr(7) << " " << s.find("Hero") << " " << s.size() << "\\n";
}`,analogy:"JS Array 看似随便 push，V8 内部也在做同样的扩容搬迁——C++ 只是把这个机制暴露给你手动优化。"},links:[{name:"cppreference：vector",url:"https://en.cppreference.com/w/cpp/container/vector",type:"doc"},{name:"cppreference：string",url:"https://en.cppreference.com/w/cpp/string/basic_string",type:"doc"}]},{d:16,tag:"STL",t:"迭代器与算法：STL 的灵魂",desc:"begin/end、输入/输出迭代器、sort/find/accumulate/transform 等常用算法；对比 JS 数组方法。",xp:80,lesson:{points:['迭代器是"泛化的指针"：begin() 指第一个元素，end() 指最后一个元素的下一个位置（左闭右开 [begin, end)）',"算法不依赖容器，只依赖迭代器区间：sort(v.begin(), v.end()) —— 与容器解耦的设计（相当于 JS 把方法抽成独立函数）","常用算法：sort、find_if(类似 find)、count_if、accumulate(类似 reduce)、transform(类似 map)、remove_if","erase-remove 惯用法：v.erase(std::remove_if(...), v.end()) 真正删除——C++20 用 std::erase_if(v, pred) 一步到位","lambda 谓词：[](int x) { return x % 2 == 0; }，与 JS 箭头函数几乎一一对应（捕获列表 [] 是多出来的概念，Day 21 细讲）"],code:`#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>

int main() {
    std::vector<int> v{5, 2, 8, 1, 9, 3};

    std::sort(v.begin(), v.end());                       // JS: v.sort((a,b)=>a-b)
    auto it = std::find(v.begin(), v.end(), 8);          // JS: indexOf
    int sum = std::accumulate(v.begin(), v.end(), 0);    // JS: reduce((a,b)=>a+b, 0)

    std::erase_if(v, [](int x) { return x % 2 != 0; });  // 只留偶数
    for (int x : v) std::cout << x << " ";               // range-for
    std::cout << "| sum=" << sum << "\\n";
}`,analogy:"JS: arr.map/filter/reduce 是数组上的方法；STL: 算法是独立函数 + 迭代器参数，任何容器都能用同一套 sort/filter。"},links:[{name:"cppreference：算法库",url:"https://en.cppreference.com/w/cpp/algorithm",type:"doc"},{name:"learncpp：迭代器与算法",url:"https://www.learncpp.com/cpp-tutorial/introduction-to-iterators/",type:"tutorial"}]},{d:17,tag:"STL",t:"map/set 深入与 string_view",desc:"operator[] 的陷阱、insert_or_assign、结构化绑定遍历、C++17 string_view 免拷贝。",xp:70,lesson:{points:['map[key] 的坑：key 不存在时会"自动插入默认值"——查询也变写入；只查用 .find() 或 .contains()',"结构化绑定 for (auto& [key, value] : m) 与 JS 的 for (const [k, v] of m) 一模一样","自定义类型做 key：需要提供 operator< （std::map）或 std::hash 特化（unordered_map）",'std::string_view 是"字符串的视图"（指针+长度）：substr 不再复制，类似零拷贝 slice；但它不拥有内存，别让被引用的字符串先死',"unordered_map 遍历顺序不确定——别依赖它，与 JS Map 的插入序不同"],code:`#include <iostream>
#include <map>
#include <string>
#include <string_view>

int main() {
    std::map<std::string, int> bag;
    bag["药水"] += 1;                          // 不存在则插入 0 再 +1，这里 OK
    if (bag.contains("圣剑")) { /* 查询别用 [] */ }
    bag.insert_or_assign("药水", 5);

    for (const auto& [item, count] : bag)
        std::cout << item << " x" << count << "\\n";

    std::string log = "2026-10-22,ERROR,crash";
    std::string_view level(log.data() + 11, 5);   // 零拷贝切出 "ERROR"
    std::cout << level << "\\n";
}`,analogy:"string_view 之于 string ≈ Buffer.subarray 之于 Buffer：只记指针和长度，零拷贝，但必须保证原缓冲活着。"},links:[{name:"cppreference：map",url:"https://en.cppreference.com/w/cpp/container/map",type:"doc"},{name:"cppreference：string_view",url:"https://en.cppreference.com/w/cpp/string/basic_string_view",type:"doc"}]},{d:18,tag:"现代C++",t:"unique_ptr：独占所有权",desc:"make_unique、所有权转移 std::move、为什么裸 new/delete 应该绝迹。",xp:90,lesson:{points:["std::unique_ptr<T> 是 RAII 的指针版：出作用域自动 delete——从此告别内存泄漏","独占所有权：不可拷贝、只能 std::move 转移——所有权概念第一次落地（谁 move 走了，原指针变 nullptr）","创建用 std::make_unique<T>(args...)（C++14）：异常安全 + 一行声明",'用法像指针：p.get()（借出不拥有）、*p、p->、if (p) 判空；函数签名用 T* 或 T& 表示"借用"',"规则：新代码 99% 场景 = vector/string + unique_ptr，禁止裸 new/delete（Core Guidelines 强制）"],code:`#include <iostream>
#include <memory>
#include <vector>

class Quest {
public:
    explicit Quest(std::string n) : name_(std::move(n)) { std::cout << "接取 " << name_ << "\\n"; }
    ~Quest() { std::cout << "完成/放弃 " << name_ << "\\n"; }
    void report() const { std::cout << "进行中: " << name_ << "\\n"; }
private:
    std::string name_;
};

void run(Quest* q) { q->report(); }          // 借用，不拥有

int main() {
    auto q = std::make_unique<Quest>("屠龙");
    run(q.get());                             // get() 出借
    auto taken = std::move(q);                // 转移所有权，q 变空
    if (!q) std::cout << "q 已移交\\n";
}   // taken 出作用域自动析构`,analogy:'unique_ptr = "这个对象归我，我离开时负责销毁"；std::move = 把引用从我的变量转到你的变量，同时我的变量被清空——JS 里 GC 帮你做的事，这里显式化。'},links:[{name:"learncpp：智能指针与 move",url:"https://www.learncpp.com/cpp-tutorial/move-semantics/",type:"tutorial"},{name:"cppreference：unique_ptr",url:"https://en.cppreference.com/w/cpp/memory/unique_ptr",type:"doc"}]},{d:19,tag:"现代C++",t:"shared_ptr 与 weak_ptr：共享所有权",desc:"引用计数、循环引用问题与 weak_ptr 破环；理解何时用 shared 何时用 unique。",xp:90,lesson:{points:["shared_ptr 用引用计数（类似 JS 的可达性 GC 但手动化）：最后一个 shared_ptr 析构时对象才销毁","std::make_shared<T>() 一次分配对象+控制块，比 shared_ptr<T>(new T) 高效","循环引用（A→B→A）计数永不归零 = 泄漏，正是 JS 引擎要解决的环引用问题——用 weak_ptr 打破环","weak_ptr 观察但不增加计数：用 .lock() 尝试升级为 shared_ptr，失败说明对象已死（安全版弱引用）","默认选 unique_ptr；确需共享才用 shared_ptr（它有原子计数开销）；父子/缓存关系用 weak_ptr"],code:`#include <iostream>
#include <memory>

class Party;
class Hero {
public:
    ~Hero() { std::cout << "Hero 离队\\n"; }
    std::weak_ptr<Party> party;              // weak 打破环！
};
class Party {
public:
    void join(std::shared_ptr<Hero> h) { hero_ = std::move(h); hero_->party = std::weak_ptr<Party>{}; }
    std::shared_ptr<Hero> hero_;
};

int main() {
    auto hero = std::make_shared<Hero>();
    std::cout << hero.use_count() << "\\n";   // 1

    std::shared_ptr<Hero> alias = hero;      // 计数 2
    hero.reset();                            // 计数 1，对象还活着
    if (std::shared_ptr<Hero> locked = alias) {
        std::cout << "还活着\\n";
    }
}`,analogy:"shared_ptr ≈ 手动实现引用计数 GC；weak_ptr ≈ WeakRef。循环引用你天天在 JS 里踩不着，是因为引擎帮你处理了——C++ 要你自己用 weak_ptr 破环。"},links:[{name:"cppreference：shared_ptr",url:"https://en.cppreference.com/w/cpp/memory/shared_ptr",type:"doc"},{name:"cppreference：weak_ptr",url:"https://en.cppreference.com/w/cpp/memory/weak_ptr",type:"doc"}]},{d:20,tag:"现代C++",t:"移动语义与右值引用：零拷贝的关键",desc:"左值/右值、移动构造、std::move 的真相；理解 string/vector 返回为什么不再慢。",xp:100,lesson:{points:["左值有名字可取地址；右值是临时对象（字面量、函数返回值）—— TS 没有这个分层",'T(T&& other) 移动构造：把对方的资源"偷"过来（指针接管），对方置空——比深拷贝便宜几个数量级',"std::move 并不移动任何东西！它只是把表达式转换成右值引用（类型转换 cast），真正移动的是构造函数",'移动后对象处于"有效但未指定"状态：能析构、能赋新值，别再读它的内容','RVO/NRVO：返回局部对象时编译器直接在返回位置构造，连移动都省了——所以"返回大对象"在现代 C++ 是便宜的'],code:`#include <iostream>
#include <string>
#include <utility>

class Sword {
public:
    explicit Sword(std::string n) : name_(std::move(n)) { std::cout << "锻造 " << name_ << "\\n"; }
    Sword(Sword&& o) noexcept : name_(std::move(o.name_)) {   // 移动构造：偷资源
        std::cout << "-> 传剑（原剑已空）\\n";
    }
    const std::string& name() const { return name_; }
private:
    std::string name_;
};

Sword forge() { return Sword("王者之剑"); }   // RVO：直接在外部构造

int main() {
    Sword s1("铁剑");
    Sword s2 = std::move(s1);    // 移动：s1 的名字被偷走
    Sword s3 = forge();          // RVO，无拷贝无移动
}`,analogy:'std::move = TS 里的类型断言 as，它只改"标签"；真正的搬家由移动构造函数完成。像把 Git 仓库的 ownership 转移：不是复制文件，是改 remote。'},links:[{name:"learncpp：移动语义（全系列）",url:"https://www.learncpp.com/cpp-tutorial/introduction-to-move-semantics/",type:"tutorial"},{name:"cppreference：std::move",url:"https://en.cppreference.com/w/cpp/utility/move",type:"doc"}]},{d:21,tag:"现代C++",t:"lambda、捕获与完美转发",desc:"lambda 捕获值/引用、泛型 lambda、mutable；std::forward 与转发引用一瞥。",xp:90,lesson:{points:["[捕获](参数) -> 返回类型 { 体 }；捕获是 C++ lambda 独有的：按值 [x] 拷贝一份，按引用 [&x] 绑定——JS 闭包永远是引用捕获","[=] 全按值、[&] 全按引用（危险：悬空引用，异步回调慎用——和 React stale closure 是亲戚问题）","泛型 lambda [](auto a, auto b) —— 一行写出的迷你模板；mutable 让按值捕获可修改","回调习惯：参数用函数类型 std::function<void(int)>（有开销）或模板参数（零开销）","std::forward + T&& 转发引用：包装函数时保留左右值属性——std::make_unique 就是这么转发的，今天能看懂即可"],code:`#include <iostream>
#include <functional>
#include <vector>
#include <algorithm>

int main() {
    int buff = 5;
    auto addBuff = [buff](int atk) { return atk + buff; };      // 按值拷贝
    auto drain = [&buff](int dmg) { buff -= dmg; return buff; }; // 按引用，改外部
    auto key = [](auto p) { return p.first; };                   // 泛型 lambda

    std::vector<std::pair<std::string, int>> items{{"剑", 3}, {"盾", 1}};
    std::sort(items.begin(), items.end(),
              [](auto& a, auto& b) { return a.second < b.second; });

    std::function<void(int)> log = [](int v) { std::cout << v << "\\n"; };
    log(addBuff(100));
}`,analogy:"JS 闭包只引用外部变量；C++ lambda 是个匿名类对象，捕获的变量是它的成员——按值捕获 = 拍快照，按引用捕获 = 拿着原变量地址（原变量死了就悬空）。"},links:[{name:"cppreference：lambda",url:"https://en.cppreference.com/w/cpp/language/lambda",type:"doc"},{name:"learncpp：lambda 捕获",url:"https://www.learncpp.com/cpp-tutorial/lambda-captures/",type:"tutorial"}]},{d:22,tag:"工程",t:"异常、错误处理与 noexcept",desc:"try/catch/throw、栈展开、异常安全；以及错误码/optional/expected 的取舍。",xp:80,lesson:{points:["throw 抛出 → 沿调用栈向上找 catch，途中析构所有局部对象（栈展开）——RAII 保证不泄漏，这就是 Day 6 的回报","catch (const std::exception& e) 按引用捕获；catch (...) 兜底——异常要按类型匹配，不是字符串",'noexcept 承诺"不抛"：移动构造标 noexcept 才能让 vector 扩容时选择移动而非拷贝（Day 20 的坑）',"现代风格：可预期的失败（查不到 key、文件不存在）用 std::optional / std::expected(C++23) 返回，异常留给真正的异常情况——类似 Rust 的 Result 心法","很多游戏/嵌入式团队干脆禁用异常（-fno-exceptions），错误码 + optional 是通行替代——看团队约定"],code:`#include <iostream>
#include <optional>
#include <stdexcept>
#include <string>

std::optional<int> parseHp(const std::string& s) {
    try { return std::stoi(s); }
    catch (const std::invalid_argument&) { return std::nullopt; }  // 可预期失败：不用异常传播
}

void enterDungeon(int level) {
    if (level < 10) throw std::runtime_error("等级不足");   // 真异常：中断流程
}

int main() {
    if (auto hp = parseHp("150")) std::cout << *hp << "\\n";   // optional 用法，类比 JS 的 null 检查
    try { enterDungeon(1); }
    catch (const std::exception& e) { std::cout << "Error: " << e.what() << "\\n"; }
}`,analogy:"optional<T> ≈ T | null；expected<T,E> ≈ Result<T,E>；异常 ≈ throw 但没有 async/await 的自动传播，全靠栈展开 + RAII 兜底。"},links:[{name:"cppreference：异常处理",url:"https://en.cppreference.com/w/cpp/language/exceptions",type:"doc"},{name:"cppreference：optional",url:"https://en.cppreference.com/w/cpp/utility/optional",type:"doc"}]},{d:23,tag:"并发",t:"std::thread 并发入门",desc:"创建/join/detach 线程、数据竞争的产生；对比 JS 单线程事件循环。",xp:100,lesson:{points:["JS 是单线程事件循环（worker 也是独立隔离的）；C++ std::thread 是真正的并行，多个线程同时读写同一内存","thread ctor 直接接受 lambda：std::thread t([]{...}); 必须 join() 或 detach()，否则析构时 std::terminate 崩溃","数据竞争：两个线程同时写同一变量 = UB，且不会报错，只是偶发数据错乱——最难调的 bug 类型","传参注意：thread 拷贝参数，std::ref(x) 才传引用；捕获局部变量按引用 + 线程生命周期错开 = 悬空引用",'join 是"等它结束"——类比 await，但它是真并行不是调度'],code:`#include <iostream>
#include <thread>
#include <vector>

int main() {
    std::vector<std::thread> workers;
    for (int i = 0; i < 4; ++i) {
        workers.emplace_back([i] {
            std::cout << "worker " << i << " 在真并行地打怪\\n";
        });
    }
    for (auto& t : workers) t.join();   // 等全部结束，类似 Promise.all
    std::cout << "战斗结束\\n";
}`,analogy:"JS: 一条车道，靠事件循环轮询；C++: 四条车道真并行，所以需要红绿灯（mutex）和不可变数据（const）来避免相撞。"},links:[{name:"cppreference：thread",url:"https://en.cppreference.com/w/cpp/thread/thread",type:"doc"},{name:"learncpp：move 与并发基础",url:"https://www.learncpp.com/cpp-tutorial/introduction-to-std-thread/",type:"tutorial"}]},{d:24,tag:"并发",t:"mutex、lock_guard 与 atomic",desc:"互斥量保护共享数据、lock_guard 的 RAII 用法、atomic 计数器；认识死锁。",xp:100,lesson:{points:["mutex.lock()/unlock() 手动加锁容易忘，必须用 std::lock_guard（RAII，Day 6 的实战版）或 std::scoped_lock","共享数据 + mutex 应封装成一个类，锁跟着数据走——保护的是数据不是代码","std::atomic<int> 无锁原子操作：计数器这种简单场景用它，比 mutex 便宜","死锁：两个线程互相等对方的锁——固定加锁顺序，或 std::scoped_lock(m1, m2) 一次性拿两把锁","数据竞争检测：g++ -fsanitize=thread 编译跑一遍（TSan），CI 里必开"],code:`#include <iostream>
#include <thread>
#include <mutex>
#include <atomic>
#include <vector>

std::mutex mtx;
long gold = 0;
std::atomic<int> hits{0};

int main() {
    std::vector<std::thread> ts;
    for (int i = 0; i < 4; ++i) ts.emplace_back([] {
        for (int j = 0; j < 10000; ++j) {
            std::lock_guard<std::mutex> lock(mtx);  // RAII 上锁
            gold += 1;
            hits.fetch_add(1, std::memory_order_relaxed);  // 原子，无需锁
        }
    });
    for (auto& t : ts) t.join();
    std::cout << gold << " " << hits << "\\n";   // 40000 40000，不会少
}`,analogy:'mutex = JS 里不存在的"代码段互斥"；lock_guard = try/finally 里 release 的自动版。JS 帮你避免了这些，C++ 让你亲手写红绿灯。'},links:[{name:"cppreference：mutex 与锁",url:"https://en.cppreference.com/w/cpp/thread/mutex",type:"doc"},{name:"cppreference：atomic",url:"https://en.cppreference.com/w/cpp/atomic/atomic",type:"doc"},{name:"ThreadSanitizer",url:"https://github.com/google/sanitizers",type:"tool"}]},{d:25,tag:"性能",t:"缓存友好与零开销抽象",desc:'为什么 vector 比 list 快、branch predictor、测量优先；理解 C++ 的"零开销"哲学。',xp:90,lesson:{points:["CPU 访问内存按缓存行(64B)批量加载：连续内存遍历时预取命中，链表节点散落堆上 = 每跳一次一次缓存未命中","所以 vector 快于 list 不是算法复杂度问题，是硬件问题——现代 C++ 性能优化第一课：数据布局","C++ 哲学：零开销抽象——你不用到的特性不付成本；virtual/lambda/std::function 各自的开销要心里有数","测量优先：用 perf / benchmark（Google Benchmark）说话，别猜","编译器优化等级 -O2/-O3 会内联、向量化——Debug 和 Release 性能差 10 倍是常态，性能测试必须用 Release"],code:`// 性能对比实验：连续 vs 跳跃访问
#include <chrono>
#include <iostream>
#include <vector>

using Clock = std::chrono::steady_clock;

int main() {
    constexpr int N = 10'000'000;   // 单引号数字分隔符
    std::vector<int> data(N, 1);

    auto t0 = Clock::now();
    long sum = 0;
    for (int x : data) sum += x;     // 顺序：缓存全命中，飞快
    auto t1 = Clock::now();

    std::cout << "sum=" << sum << " 耗时 "
              << std::chrono::duration_cast<std::chrono::milliseconds>(t1 - t0).count()
              << "ms（试试改成随机下标访问对比）\\n";
}`,analogy:"JS 引擎花 20 年优化的 hidden class / inline cache，就是为了让动态代码接近 C++ 的连续内存直读——C++ 里这些优化点直接由数据结构选择决定。"},links:[{name:"Google Benchmark",url:"https://github.com/google/benchmark",type:"tool"},{name:"C++ Core Guidelines：性能",url:"https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#S-performance",type:"doc"},{name:"perf profiling 教程",url:"https://www.brendangregg.com/perf.html",type:"tutorial"}]},{d:26,tag:"现代C++",t:"现代语法糖：结构化绑定、optional、ranges",desc:"C++17/20/23 让 C++ 写起来更像现代语言：结构化绑定、if 初始化、ranges 管道。",xp:80,lesson:{points:["if (auto it = m.find(k); it != m.end()) {...} —— if 内声明 + 判断，作用域收紧（TS 没有，但很香）","结构化绑定 auto [x, y] = point; 全函数可用，不只 for 循环","std::ranges（C++20）：ranges::sort(v) 免写 begin/end，v | views::filter(pred) | views::transform(f) 管道式 = JS 的 filter/map 链","std::variant + std::visit：类型安全 unions，类似可辨识联合 discriminated union","观点：现代 C++（20/23）写起来已接近 TS 的舒适度，老教程的写法（裸指针、手写循环）可以淘汰了"],code:`#include <iostream>
#include <map>
#include <ranges>
#include <vector>
#include <string>

int main() {
    std::map<std::string, int> bag{{"药水", 3}, {"卷轴", 1}, {"矿石", 9}};

    if (auto it = bag.find("药水"); it != bag.end()) {
        std::cout << it->second << "\\n";
    }

    auto potions = bag
        | std::views::filter([](auto& p) { return p.first.contains("药"); })
        | std::views::transform([](auto& p) { return p.first; });
    for (const auto& name : potions) std::cout << name << " ";
    std::cout << "\\n";

    auto [x, y] = std::pair{3, 4};   // 结构化绑定
}`,analogy:"ranges 管道 = items.filter(...).map(...)，只是方向用 | 从左到右；variant = TS 的联合类型 + 穷尽检查。"},links:[{name:"cppreference：ranges",url:"https://en.cppreference.com/w/cpp/ranges",type:"doc"},{name:"C++23 速览",url:"https://en.cppreference.com/w/cpp/23",type:"doc"}]},{d:27,tag:"工程",t:"CMake、包管理与工程化",desc:"用 CMake 组织多文件项目、引入第三方库（vcpkg/Conan）、配置测试与格式化。",xp:80,lesson:{points:["npm 有 package.json，C++ 有 CMakeLists.txt（构建系统）+ vcpkg/Conan（包管理）——生态碎片但已标准化很多","最小 CMake：cmake_minimum_required → project → add_executable → target_link_libraries，然后 cmake -B build && cmake --build build","target_link_libraries 给目标链接库；find_package 找系统/已安装的第三方库","测试框架 Catch2 / GoogleTest；格式化 clang-format（对应 prettier）+ clang-tidy（对应 eslint）","现代 CMake 指南：一切围绕 target 设置属性（include 路径、选项），不要全局变量式写法"],code:`# CMakeLists.txt
cmake_minimum_required(VERSION 3.20)
project(hero LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

add_executable(hero src/main.cpp src/hero.cpp)
target_include_directories(hero PRIVATE include)

# 引入第三方库（vcpkg 安装后）
# find_package(fmt CONFIG REQUIRED)
# target_link_libraries(hero PRIVATE fmt::fmt)

# 命令：
# cmake -B build -DCMAKE_BUILD_TYPE=Release
# cmake --build build`,analogy:"CMake ≈ 拿着 package.json + tsconfig + vite 配置合体；vcpkg ≈ npm；clang-format/tidy ≈ prettier/eslint。装好这套，工程体验立刻现代化。"},links:[{name:"Modern CMake（最好的入门书）",url:"https://cliutils.gitlab.io/modern-cmake/",type:"tutorial"},{name:"vcpkg 包管理器",url:"https://vcpkg.io/",type:"tool"},{name:"Catch2 测试框架",url:"https://github.com/catchorg/Catch2",type:"repo"}]},{d:28,tag:"项目",t:"小项目 I：JSON 解析器",desc:"手写迷你 JSON 解析器（递归下降），综合运用 variant、智能指针、string_view、错误处理。",xp:120,lesson:{points:["递归下降：json = object | array | string | number | true/false/null，每种一个函数，递归嵌套——把文法直接翻译成代码","用 std::variant<Null, Bool, double, std::string, Array, Object> 表示 JSON 值——Day 26 的 variant 实战","数组/对象用 vector<unique_ptr<Value>> 存储：观察 unique_ptr 如何在容器里管理多态对象","解析失败抛 std::runtime_error 带行列号，或返回 expected——两种风格都体验",'完成后与真实库 nlohmann/json 的 API 对比，体会"好用的 C++ 库长什么样"'],code:`// 骨架示意（完整版自己补齐）
#include <memory>
#include <string>
#include <variant>
#include <vector>

struct Value;
using Object = std::vector<std::pair<std::string, std::unique_ptr<Value>>>;
using Array = std::vector<std::unique_ptr<Value>>;

struct Value {
    std::variant<std::nullptr_t, bool, double, std::string,
                 Array, Object> data;
};

class Parser {
public:
    explicit Parser(std::string_view src) : src_(src) {}
    std::unique_ptr<Value> parse() { return parseValue(); }
private:
    std::unique_ptr<Value> parseValue();     // 按首字符分发：{ [ " 数字 t f n
    std::unique_ptr<Value> parseObject();
    std::unique_ptr<Value> parseArray();
    std::string_view src_;
    size_t pos_ = 0;
};`,analogy:"这相当于用 TS 手写一个 JSON.parse：思路一样，但你要亲自管理每个节点的内存（unique_ptr 托管），而不是靠 GC 兜底。"},links:[{name:"nlohmann/json（对标成品）",url:"https://github.com/nlohmann/json",type:"repo"},{name:"递归下降解析入门",url:"https://www.learncpp.com/cpp-tutorial/chapter-t-summary-and-quiz/",type:"tutorial"}]},{d:29,tag:"项目",t:"小项目 II：线程池",desc:"实现固定大小线程池（queue + mutex + condition_variable），吃透并发的经典套路。",xp:120,lesson:{points:["线程池 = 工作队列（task queue）+ N 个 worker 线程循环取任务执行——Node.js 的 libuv 线程池原理相同","std::queue 不是线程安全的：push 和 pop 都要锁；空队列时 worker 需要等待——condition_variable + predicate 循环",'std::condition_variable.wait(lock, pred)：等"队列非空"通知，类似 Promise 的挂起/唤醒，但更底层',"任务用 std::function<void()> 存队列（有类型擦除开销）；返回值版本要 std::future/packaged_task——进阶可做","提交 std::move(task) 进队列；析构时设置停止标志 + notify_all + join 所有 worker"],code:`// 核心骨架
#include <condition_variable>
#include <functional>
#include <mutex>
#include <queue>
#include <thread>
#include <vector>

class ThreadPool {
public:
    explicit ThreadPool(size_t n) {
        for (size_t i = 0; i < n; ++i)
            workers_.emplace_back([this] {
                for (;;) {
                    std::unique_lock<std::mutex> lock(mtx_);
                    cv_.wait(lock, [this] { return stop_ || !tasks_.empty(); });
                    if (stop_ && tasks_.empty()) return;
                    auto task = std::move(tasks_.front());
                    tasks_.pop();
                    lock.unlock();          // 执行任务时不要持锁！
                    task();
                }
            });
    }
    void submit(std::function<void()> t) {
        { std::lock_guard<std::mutex> lock(mtx_); tasks_.push(std::move(t)); }
        cv_.notify_one();
    }
    std::vector<std::thread> workers_;
    std::queue<std::function<void()>> tasks_;
    std::mutex mtx_;
    std::condition_variable cv_;
    bool stop_ = false;
};`,analogy:'这就是 libuv / Node worker_threads 的内脏：一个锁保护的任务队列 + 睡在条件变量上的工人。写完它，你对"JS 是怎么做到非阻塞的"会有肌肉记忆级的理解。'},links:[{name:"cppreference：condition_variable",url:"https://en.cppreference.com/w/cpp/thread/condition_variable",type:"doc"},{name:"C++ Concurrency in Action（书，进阶）",url:"https://www.manning.com/books/c-plus-plus-concurrency-in-action-second-edition",type:"doc"}]},{d:30,tag:"总结",t:"毕业：知识地图与下一步路线",desc:"回顾 30 天主线，整理 C++ 心智模型清单，规划后续方向（后端/游戏/嵌入式/开源）。",xp:100,lesson:{points:['心智模型清单：编译期 vs 运行期 / 所有权与 RAII / 栈与堆 / 值语义 vs 引用语义 / 零开销抽象——这五条是 C++ 的"第一性原理"',"前端 → C++ 最大迁移点：没有 GC（自己管所有权）、没有运行期类型自由（模板编译期决定）、真并行（需要锁）","你已经拥有前端优势：类型系统直觉（TS→concepts/模板）、异步思维（事件循环→线程池）、组件化思维（RAII 类设计）","下一步路线：读《Effective Modern C++》→ 做开源贡献（fmt/json/asio）→ 方向专精（游戏:Unreal/引擎；后端:asio/grpc；嵌入式:RTOS）","保持练习：LeetCode 用 C++ 刷题是性价比最高的肌肉记忆训练"],code:`// 30 天地图（按周回顾）
// W1: 编译/类型/指针/内存/RAII       ← 世界的地基
// W2: 类/拷贝/运算符/多态/vtable     ← OOP 的 C++ 版
// W3: 模板/STL/智能指针/移动语义     ← 现代武库
// W4: lambda/异常/并发/性能/工程化    ← 真实战场的模样
// W5: 两个小项目                      ← 综合演出
//
// 用 Compiler Explorer 复习：把任何疑问代码丢进 godbolt.org 看编译器怎么说
#include <iostream>
int main() { std::cout << "毕业快乐，勇者！\\n"; }`,analogy:'学 C++ 就像前端工程师第一次写汇编时代的引擎内部：Day 1 的"编译"到 Day 29 的"线程池"，你补齐的是从"用语言"到"懂机器"的那一层。'},links:[{name:"Effective Modern C++（进阶书）",url:"https://www.oreilly.com/library/view/effective-modern-c/9781491908419/",type:"doc"},{name:"Awesome C++（生态大全）",url:"https://github.com/fffaraz/awesome-cpp",type:"repo"},{name:"C++ Core Guidelines",url:"https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines",type:"doc"}]}],jd={1:{prompt:"修改 Day1 的 Hello 程序：输出你的名字和当前年份（年份用 constexpr 常量），编译运行成功。",starter:`#include <iostream>

int main() {
    // TODO: 定义 constexpr int year = 2026;
    // TODO: 输出 "你好, <你的名字>! 今年是 <year> 年"
    return 0;
}
`,answer:`#include <iostream>

int main() {
    constexpr int year = 2026;
    std::cout << "你好, 勇者! 今年是 " << year << " 年\\n";
    return 0;
}
`,expected:"你好, 勇者! 今年是 2026 年"},2:{prompt:"写一个程序：定义 int hp=100、double crit=2.5、const int maxHp=100；hp 恢复 30 后输出三者，并用 sizeof 打印 int 和 double 的字节数。",starter:`#include <iostream>

int main() {
    // TODO
}
`,answer:`#include <iostream>

int main() {
    int hp = 100;
    double crit = 2.5;
    const int maxHp = 100;
    hp += 30;
    std::cout << hp << " " << crit << " " << maxHp << "\\n";
    std::cout << sizeof(int) << " " << sizeof(double) << "\\n";
    return 0;
}
`,expected:"130 2.5 100\\n4 8"},3:{prompt:"实现重载函数 damage(int) 与 damage(double)：int 版减血并返回剩余，double 版按比例削减后取整返回；再用 const 引用传一个 std::string 打印技能名。",starter:`#include <iostream>
#include <string>

int damage(int hp, int dmg) {
    // TODO
}
double damage(int hp, double ratio) {
    // TODO: hp *= (1 - ratio) 后转 int 返回
}

int main() {
    // TODO: 调用两个重载并输出
}
`,answer:`#include <iostream>
#include <string>

int damage(int hp, int dmg) { return hp - dmg; }
double damage(int hp, double ratio) { return hp * (1 - ratio); }

void castSkill(const std::string& name) { std::cout << "施放: " << name << "\\n"; }

int main() {
    std::cout << damage(100, 30) << "\\n";    // 70
    std::cout << damage(100, 0.5) << "\\n";   // 50
    castSkill("烈焰斩");
    return 0;
}
`,expected:"70\\n50\\n施放: 烈焰斩"},4:{prompt:"写两个函数 swapByPointer(int*, int*) 和 swapByReference(int&, int&)，在 main 中分别交换两个变量，验证两种方式都生效。",starter:`#include <iostream>

void swapByPointer(int* a, int* b) {
    // TODO
}
void swapByReference(int& a, int& b) {
    // TODO
}

int main() {
    int x = 1, y = 2;
    // TODO: 分别调用并输出结果
}
`,answer:`#include <iostream>

void swapByPointer(int* a, int* b) {
    int tmp = *a; *a = *b; *b = tmp;
}
void swapByReference(int& a, int& b) {
    int tmp = a; a = b; b = tmp;
}

int main() {
    int x = 1, y = 2;
    swapByPointer(&x, &y);
    std::cout << x << y << "\\n";  // 21
    swapByReference(x, y);
    std::cout << x << y << "\\n";  // 12
    return 0;
}
`,expected:"21\\n12"},5:{prompt:"在堆上 new 一个 int 和一个长度为 4 的 int 数组并初始化，输出后正确 delete / delete[]，并把指针置为 nullptr。",starter:`#include <iostream>

int main() {
    // TODO: new int(42)
    // TODO: new int[4]{1,2,3,4}
    // 输出后释放，记得 delete[] 与置空
}
`,answer:`#include <iostream>

int main() {
    int* p = new int(42);
    int* arr = new int[4]{1, 2, 3, 4};
    std::cout << *p << " " << arr[2] << "\\n";
    delete p;
    delete[] arr;
    p = nullptr;
    arr = nullptr;
    return 0;
}
`,expected:"42 3"},6:{prompt:"写一个 RAII 的 Timer 类：构造时记录起点，析构时输出耗时（用 <chrono>）；在 main 的一个嵌套作用域里使用它。",starter:`#include <chrono>
#include <iostream>

class Timer {
    // TODO: 构造记录 start_，析构打印耗时
};

int main() {
    {
        Timer t;
        // 假装做了一些工作
    }  // TODO: 离开作用域应自动打印耗时
}
`,answer:`#include <chrono>
#include <iostream>

class Timer {
public:
    Timer() : start_(std::chrono::steady_clock::now()) {}
    ~Timer() {
        auto ms = std::chrono::duration_cast<std::chrono::microseconds>(
            std::chrono::steady_clock::now() - start_).count();
        std::cout << "耗时 " << ms << " 微秒\\n";
    }
private:
    std::chrono::steady_clock::time_point start_;
};

int main() {
    { Timer t; for (volatile int i = 0; i < 100000; ++i) {} }
    std::cout << "计时结束\\n";
    return 0;
}
`,expected:"耗时 <若干微秒> 微秒\\n计时结束"},7:{prompt:"定义 Hero 类：私有成员 name_（std::string）与 hp_（int），构造函数用初始化列表，const 方法 hp() 与 takeDamage(int)（血量不低于 0），在 main 中演示。",starter:`#include <iostream>
#include <string>

class Hero {
    // TODO
};

int main() {
    // TODO
}
`,answer:`#include <iostream>
#include <string>

class Hero {
public:
    Hero(std::string name, int hp) : name_(std::move(name)), hp_(hp) {}
    void takeDamage(int dmg) { hp_ = (hp_ > dmg) ? hp_ - dmg : 0; }
    int hp() const { return hp_; }
private:
    std::string name_;
    int hp_;
};

int main() {
    Hero h("勇者", 100);
    h.takeDamage(120);
    std::cout << h.hp() << "\\n";  // 0
    return 0;
}
`,expected:"0"},8:{prompt:"给 Day8 的 Buffer 类补齐拷贝构造与拷贝赋值（深拷贝），在 main 中验证：b2 = b1 之后修改 b1 不影响 b2。",starter:`#include <cstring>
#include <iostream>

class Buffer {
public:
    explicit Buffer(size_t n) : size_(n), data_(new int[n]{}) {}
    ~Buffer() { delete[] data_; }
    // TODO: 拷贝构造、拷贝赋值
    int& operator[](size_t i) { return data_[i]; }
private:
    size_t size_;
    int* data_;
};
`,answer:`#include <cstring>
#include <iostream>
#include <utility>

class Buffer {
public:
    explicit Buffer(size_t n) : size_(n), data_(new int[n]{}) {}
    ~Buffer() { delete[] data_; }
    Buffer(const Buffer& o) : size_(o.size_), data_(new int[o.size_]) {
        std::memcpy(data_, o.data_, size_ * sizeof(int));
    }
    Buffer& operator=(const Buffer& o) {
        if (this != &o) {
            Buffer tmp(o);
            std::swap(size_, tmp.size_);
            std::swap(data_, tmp.data_);
        }
        return *this;
    }
    int& operator[](size_t i) { return data_[i]; }
private:
    size_t size_;
    int* data_;
};

int main() {
    Buffer b1(4);
    b1[0] = 7;
    Buffer b2(2);
    b2 = b1;
    b1[0] = 100;
    std::cout << b2[0] << "\\n";  // 7，未被影响
    return 0;
}
`,expected:"7"},9:{prompt:"为 Vec2 类补充 operator+= （成员函数）与自由函数的 operator*（标量缩放，支持 2*v 形式），并重载 << 输出。",starter:`#include <iostream>

class Vec2 {
public:
    Vec2(double x, double y) : x_(x), y_(y) {}
    // TODO: +=, *, <<
private:
    double x_, y_;
};

int main() {
    Vec2 v(1, 1);
    // TODO: v += Vec2(2,3); 输出 (3,4)；再 2*v 输出 (6,8)
}
`,answer:`#include <iostream>

class Vec2 {
public:
    Vec2(double x, double y) : x_(x), y_(y) {}
    Vec2& operator+=(const Vec2& o) { x_ += o.x_; y_ += o.y_; return *this; }
    Vec2 operator*(double k) const { return {x_ * k, y_ * k}; }
    friend Vec2 operator*(double k, const Vec2& v) { return v * k; }
    friend std::ostream& operator<<(std::ostream& os, const Vec2& v) {
        return os << "(" << v.x_ << ", " << v.y_ << ")";
    }
private:
    double x_, y_;
};

int main() {
    Vec2 v(1, 1);
    v += Vec2(2, 3);
    std::cout << v << "\\n";
    std::cout << 2 * v << "\\n";
    return 0;
}
`,expected:"(3, 4)\\n(6, 8)"},10:{prompt:"定义抽象基类 Skill（纯虚 use() 与虚析构）及两个派生类，用 std::unique_ptr<Skill> 装入容器统一调用。",starter:`#include <iostream>
#include <memory>
#include <vector>

class Skill {
    // TODO: 纯虚 use()，虚析构
};

int main() {
    // TODO: vector<unique_ptr<Skill>>，遍历调用 use()
}
`,answer:`#include <iostream>
#include <memory>
#include <vector>

class Skill {
public:
    virtual ~Skill() = default;
    virtual void use() const = 0;
};
class Fireball : public Skill {
public:
    void use() const override { std::cout << "火球术!\\n"; }
};
class Heal : public Skill {
public:
    void use() const override { std::cout << "治疗术!\\n"; }
};

int main() {
    std::vector<std::unique_ptr<Skill>> skills;
    skills.push_back(std::make_unique<Fireball>());
    skills.push_back(std::make_unique<Heal>());
    for (const auto& s : skills) s->use();
    return 0;
}
`,expected:"火球术!\\n治疗术!"}},Td={1:[{q:"C++ 程序从源码到可执行文件经历的正确顺序是？",options:["编译→预处理→汇编→链接","预处理→编译→汇编→链接","预处理→汇编→编译→链接","链接→编译→预处理→汇编"],answer:1,explain:"先 #include 预处理粘贴头文件，再编译成汇编，汇编成目标文件，最后链接合并成可执行文件。"},{q:"#include 与 JS 的 import 最本质的区别是？",options:["#include 支持循环引用","#include 是把头文件内容原样复制进来","#include 在运行期加载模块","没有区别"],answer:1,explain:'#include 是预处理的"复制粘贴"，import 是语言级模块机制。这也是为什么头文件要加 include guard。'}],2:[{q:"signed int 溢出在 C++ 中会发生什么？",options:["自动回绕到最小值","抛出异常","未定义行为（UB），编译器可做任何假设","静默变成 double"],answer:2,explain:"有符号整数溢出是 UB，不像 Java 那样保证回绕。这也是编译器能激进优化的原因之一。"},{q:"constexpr int v = someRuntimeFn(); 会怎样？",options:["正常编译","v 变成运行期求值","编译错误（constexpr 要求编译期可求值）","警告但通过"],answer:2,explain:"constexpr 变量必须用编译期可求值的表达式初始化，否则直接编译失败。"}],3:[{q:"void f(std::string s) 与 void f(const std::string& s) 的关键区别是？",options:["没有区别","前者按值拷贝字符串（可能昂贵），后者零拷贝只读","后者可以修改字符串","前者更安全"],answer:1,explain:'按值传参会构造一个副本；const 引用是"只读别名"，大对象（string/vector）默认应传 const 引用。'},{q:"C++ 的函数重载与 TS 的 overload 声明的区别？",options:["完全一样","TS 重载只是类型标注，C++ 重载生成真正不同的函数并静态分发","C++ 重载在运行期分发","TS 重载生成多个函数"],answer:1,explain:"C++ 按参数类型在编译期选择具体实现；TS 的 overload 只是给一个函数写多个签名，JS 层面仍是一个函数。"}],4:[{q:"引用（T&）与指针（T*）的关键差异是？",options:["引用可以为空","引用必须初始化且不能改绑，指针可以","指针不能指向对象","引用占更多内存"],answer:1,explain:"引用是别名：必绑、非空、不可重绑；指针是存地址的变量：可空、可重指、可算术。"},{q:"解引用空指针会发生什么？",options:["抛出 NullPointerException","编译错误","运行期崩溃（段错误），编译器不拦截","返回默认值"],answer:2,explain:"C++ 没有 null 检查机制，解引用空指针是未定义行为，典型表现是段错误崩溃。"}],5:[{q:"栈与堆的主要差异是？",options:["堆更快","栈自动分配回收、快但小；堆手动管理、大但慢","栈在硬盘上","没有差异"],answer:1,explain:"栈随函数调用帧自动进出（几 MB 上限），堆由 new/delete 手动管理，忘了释放就泄漏。"},{q:"delete 之后继续使用该指针，这叫？",options:["双重释放","悬空指针，未定义行为","内存泄漏","正常的"],answer:1,explain:"悬空指针：内存已归还但指针还指着那里，读写都是 UB。泄漏则是忘了 delete。"}],6:[{q:"RAII 的核心思想是？",options:["资源获取靠垃圾回收","把资源生命周期绑定到对象生命周期：构造获取、析构释放","所有资源放全局变量","用 try/finally 管理资源"],answer:1,explain:"对象出作用域析构必然执行，资源释放因此自动且异常安全——这是 C++ 没有 finally 的原因。"},{q:"函数中途抛异常，已构造的局部 RAII 对象会怎样？",options:["资源泄漏","保持不变","栈展开时依次析构，资源自动释放","编译错误"],answer:2,explain:"栈展开会析构沿途局部对象，正是 RAII 保证异常安全的关键。"}],7:[{q:"class 与 struct 的区别是？",options:["struct 不能有成员函数","仅默认访问级别不同：class 默认 private，struct 默认 public","struct 不能继承","class 更快"],answer:1,explain:"除了默认 private/public（以及默认继承方式），两者完全等价。"},{q:"为什么构造函数要用初始化列表 hp_(hp) 而不是函数体内赋值？",options:["写法更短","初始化列表直接构造成员，const 成员和引用成员只能用它，也避免先默认构造再赋值","没有区别","函数体内不能访问成员"],answer:1,explain:"成员在进入函数体前已完成默认构造；初始化列表直接按目标值构造，且 const/引用成员只能在此初始化。"}],8:[{q:"类含裸指针成员时，默认拷贝会发生什么？",options:["深拷贝，安全","浅拷贝：两个对象共享同一块内存，析构时双重 delete","编译错误","自动调用 GC"],answer:1,explain:"默认逐成员拷贝只复制指针值，导致两个对象管理同一资源——所以需要 Rule of Three。"},{q:"Rule of Zero 指的是？",options:["不写任何类","用 vector/string/智能指针等 RAII 成员，不手写析构/拷贝函数，让默认函数天然正确","类不能有成员","写零个构造函数"],answer:1,explain:"成员本身是 RAII 类型时，编译器生成的默认拷贝/析构就是对的——这是现代 C++ 首选。"}],9:[{q:"为什么 operator<< 通常写成自由函数而不是成员函数？",options:["成员函数更快","因为左操作数是 ostream（流对象），不是你的类型，无法给 ostream 加成员","规定如此","为了支持重载"],answer:1,explain:"a << b 的左参是 std::ostream，你无法修改标准库类，所以用 friend/自由函数。"},{q:"下面哪个运算符重载是社区公认禁忌？",options:["operator+","operator==","operator&&（失去短路语义）","operator[]"],answer:2,explain:"重载 &&/|| 会把短路求值变成函数调用，两个操作数都会被求值，违背直觉。"}],10:[{q:"派生类重写基类方法，若基类方法没标 virtual，会怎样？",options:["自动多态","静态绑定：按指针/引用的静态类型调用基类版本","编译错误","运行期报错"],answer:1,explain:"C++ 默认静态绑定；没有 virtual 就没有运行期多态，且编译器不报错——经典坑。"},{q:"为什么有虚函数的基类析构函数要声明为 virtual？",options:["提升性能","否则通过基类指针 delete 派生类对象时，派生类析构不会被调用，造成资源泄漏","语法要求","避免切片"],answer:1,explain:"虚析构保证 delete 基类指针时走正确的析构链，是管理类层次的必修项。"}],11:[{q:"虚函数的动态分发机制依赖什么？",options:["运行时类型反射","对象内的 vptr 指向类的 vtable（函数指针表）","编译器硬编码 switch","RTTI 表"],answer:1,explain:"每个对象头部有 vptr，指向所属类的 vtable；虚调用 = 查表取函数指针再调用。"},{q:"Base b = Derived{}; 这种按值赋给基类的现象叫？",options:["向上转型","对象切片：Derived 独有部分被切掉","深拷贝","多态"],answer:1,explain:"按值只能装下 Base 大小的部分，派生字段丢失、vptr 归 Base——多态必须用引用/指针。"}],12:[{q:"模板与 TS 泛型的本质区别？",options:["没区别","模板在编译期按类型实例化出多份代码（单态化），TS 泛型擦除为一份","模板在运行期分发","TS 泛型生成多份代码"],answer:1,explain:"vector<int> 和 vector<double> 是编译期生成的两个完全独立的类型；TS 泛型运行期只是同一个函数。"},{q:"模板实现代码为什么要放头文件？",options:["习惯问题","实例化时编译器必须看到完整定义，否则链接错误","编译更快","模板不能放 .cpp"],answer:1,explain:"编译器在调用点实例化模板，需要看到完整定义；放 .cpp 会导致未定义引用。"}],13:[{q:"C++20 concepts 的作用是？",options:["运行期类型检查","给模板参数加编译期约束，报错更友好","替代虚函数","自动推导返回类型"],answer:1,explain:"concepts 相当于 TS 泛型约束 extends 的正式版：不满足约束时报一行人话错误而不是几百行模板报错。"},{q:"模板特化是指？",options:["模板编译失败","为特定类型提供专门实现，如 template<> 的定制版本","模板的运行期重载","删除模板"],answer:1,explain:"特化让你对某个具体类型走不同路径，例如为自定义 key 特化 std::hash。"}],14:[{q:"日常开发中 STL 容器的默认首选是？",options:["std::list","std::vector（连续内存，缓存友好）","std::deque","std::map"],answer:1,explain:"vector 是默认容器：连续内存、尾部增删 O(1)、遍历快。list 几乎只用于特定 splice 场景。"},{q:"需要按键查找且按 key 有序遍历，应选？",options:["unordered_map","std::map（红黑树，有序 O(log n)）","vector","set"],answer:1,explain:"map 是有序关联容器（红黑树）；unordered_map 更快但不保证顺序。"}],15:[{q:"vector 扩容时会发生什么？",options:["原地增长不搬数据","分配更大的新内存并搬迁所有元素，旧迭代器/引用失效","抛异常","链到新内存块"],answer:1,explain:"扩容 = realloc + 搬迁，因此 reserve 预留能避免反复搬迁；搬迁后旧地址全部失效。"},{q:"vector 的 size() 与 capacity() 的区别？",options:["同一个值","size 是元素个数，capacity 是已分配的容量（≥ size）","size 是容量","capacity 是元素上限"],answer:1,explain:"size 会随 push_back 增长，capacity 只在扩容时变大；reserve 直接调 capacity。"}],16:[{q:"STL 迭代器区间 [begin, end) 的 end 指向？",options:["最后一个元素","最后一个元素的下一个位置（哨兵）","容器外随机地址","第一个元素"],answer:1,explain:'左闭右开区间，end 是"越界哨兵"，遍历循环 while (it != end) 才能优雅终止。'},{q:'C++20 之前从 vector 中"真正删除"满足条件的元素，惯用法是？',options:["remove_if 就够了","erase(remove_if(...), end())（erase-remove 惯用法）","delete 关键字","filter"],answer:1,explain:'remove_if 只是"搬移+返回新逻辑末尾"，真正的删除要配合 erase；C++20 可直接 std::erase_if。'}],17:[{q:"map[key] 在 key 不存在时的行为是？",options:["抛异常","自动插入默认值并返回引用（查询变写入！）","返回 nullptr","编译错误"],answer:1,explain:"operator[] 有副作用；只查存在性用 find/contains，避免无意插入。"},{q:"string_view 的正确使用前提是？",options:["无需任何前提","被引用的底层字符串必须比视图活得久（小心悬空视图）","必须手动 delete","只能指向字面量"],answer:1,explain:"string_view 不拥有内存，只是指针+长度；原 string 销毁后视图悬空。"}],18:[{q:"unique_ptr 的核心特性是？",options:["可拷贝共享","独占所有权：不可拷贝，只能 std::move 转移，出作用域自动释放","引用计数","需要手动 delete"],answer:1,explain:"独占+自动释放是它替代裸 new/delete 的根本；转移后原指针变空。"},{q:'函数参数想"借用"但不拥有 unique_ptr 管理的对象，应传？',options:["unique_ptr<T> 按值（转移所有权）","T* 或 T&（裸指针/引用表示借用）","shared_ptr<T>","const unique_ptr<T>&"],answer:1,explain:'签名用 T*/T& 表达"我只借用"；接收 unique_ptr 按值意味着接管所有权，语义完全不同。'}],19:[{q:"shared_ptr 循环引用导致的问题是？",options:["编译错误","引用计数永不归零，对象泄漏——需 weak_ptr 打破环","线程死锁","自动解决"],answer:1,explain:"A、B 互相持 shared_ptr 计数都是 1，谁也释放不了；把其中一边改成 weak_ptr 即可。"},{q:"weak_ptr 的正确用法是？",options:["直接 -> 访问对象","先 .lock() 升级为 shared_ptr，失败说明对象已死","手动 delete","和 shared_ptr 一样"],answer:1,explain:"weak_ptr 不增加计数、不能直接访问；lock() 返回 shared_ptr 或空，是安全的弱引用。"}],20:[{q:"std::move(x) 实际做了什么？",options:["立刻搬移 x 的内存","只是把 x 转换成右值引用（一个 cast），真正的搬移由移动构造/赋值完成","复制 x","释放 x"],answer:1,explain:'std::move 不移动任何东西，它只是"贴上可移动的标签"；移动发生在接收方的移动构造函数里。'},{q:"返回局部大对象（如 vector）在现代 C++ 中性能如何？",options:["必然深拷贝，很慢","靠 RVO/NRVO 通常零拷贝，即使没有也走移动，代价极低","会泄漏","必须返回指针"],answer:1,explain:'返回值优化直接在调用方构造对象；C++11 起还有移动兜底——"返回值必须用指针"是老古董观念。'}],21:[{q:"[&] 按引用捕获 lambda 后，把 lambda 存起来异步执行，最可能的风险是？",options:["性能下降","被捕获的局部变量已析构，悬空引用（类似 JS 闭包但 JS 不会悬空）","编译错误","lambda 被复制"],answer:1,explain:"JS 闭包会延长变量生命周期；C++ 按引用捕获不延长，原变量死了引用就悬空——异步回调默认按值捕获。"},{q:"与 JS 箭头函数最接近的 C++ 写法？",options:["函数指针","lambda：[](args) { body }（泛型 lambda [](auto x) 更接近）","std::function 必须用","仿函数类"],answer:1,explain:"lambda 是匿名可调用对象；[] 捕获列表是 C++ 独有的（决定拷贝还是引用外部变量）。"}],22:[{q:"异常抛出后，控制流如何回到合适的 catch？",options:["返回错误码","栈展开：沿调用栈向上找匹配类型，途中析构局部对象","全局跳转表","重启程序"],answer:1,explain:"栈展开逐层退出函数并析构局部对象（RAII 兜底），直到找到类型匹配的 catch。"},{q:'"文件不存在"这类可预期的失败，现代风格推荐？',options:["抛异常","返回 std::optional / std::expected，让调用方显式处理","assert","静默返回默认值"],answer:1,explain:"可预期的失败用值传递错误（optional/expected ≈ T|null / Result），异常留给真正的异常情况。"}],23:[{q:"std::thread 对象析构前若未 join() 或 detach()，会发生？",options:["自动 join","std::terminate 直接终止程序","线程泄漏但无害","编译错误"],answer:1,explain:"可 join 的 thread 析构时程序直接 terminate——每个线程路径都必须显式 join/detach。"},{q:"C++ 多线程与 JS 并发模型的根本差异？",options:["C++ 更慢","C++ 是真并行共享内存（需锁），JS 是单线程事件循环（worker 隔离）","JS 也能共享内存随便读写","没有差异"],answer:1,explain:"JS 里你永远碰不到数据竞争；C++ 多线程默认共享内存，不加锁就有 race condition（UB）。"}],24:[{q:"保护共享数据的首选锁用法？",options:["手动 lock/unlock","std::lock_guard / scoped_lock（RAII 自动解锁）","atomic 包所有类型","不加锁靠运气"],answer:1,explain:"手动 unlock 在异常路径会漏；lock_guard 出作用域自动释放——又是 RAII。"},{q:"简单计数器在多线程下递增，最合适的方案？",options:["普通 int += 1","std::atomic<int> 的 fetch_add（无锁原子）","全局 mutex 才安全","volatile"],answer:1,explain:"普通 int += 1 是读-改-写三步，会丢更新；atomic 提供硬件级原子操作；volatile 与线程安全无关。"}],25:[{q:"遍历大数组时 vector 远快于 list 的根本原因？",options:["vector 算法更优","连续内存对 CPU 缓存友好（缓存行预取），list 节点散落导致缓存未命中","list 有锁","编译器偏爱 vector"],answer:1,explain:"硬件层面的差异：顺序访问命中缓存行，链表每次跳转可能一次内存访问——性能差可达数量级。"},{q:"关于 C++ 性能优化，正确的流程是？",options:["凭直觉改代码","用 Release 构建 + profiler（perf/Google Benchmark）测量后再优化","多加线程","全改指针"],answer:1,explain:"测量优先：Debug 和 Release 差 10 倍，没数据的优化大多是白费。"}],26:[{q:"if (auto it = m.find(k); it != m.end()) {...} 这个 if-init 语法的好处是？",options:["更快","变量作用域限制在 if/else 内，防止泄漏到外部","自动判空","等价于 try/catch"],answer:1,explain:"C++17 的 if 初始化语句：it 只在 if/else 中可见，减少名字污染——TS 里没有对应物。"},{q:"std::views::filter(...) | std::views::transform(...) 组合成的机制叫？",options:["回调地狱","ranges 管道（惰性求值），类似 JS 的 filter/map 链","模板特化","流式 IO"],answer:1,explain:"C++20 ranges 用 | 从左到右组合视图，惰性逐元素求值——是 JS 数组链式调用的零分配版。"}],27:[{q:"C++ 生态里与 npm 对应的包管理器是？",options:["CMake","vcpkg / Conan","make","clang-format"],answer:1,explain:"CMake 是构建系统（≈构建脚本+tsconfig），vcpkg/Conan 负责装第三方库（≈npm）。"},{q:"现代 CMake 的核心原则？",options:["全局设置变量","一切围绕 target 设置属性（include 路径、链接库、编译选项）","手写编译命令","只用 Makefile"],answer:1,explain:"target_link_libraries / target_include_directories 让依赖关系显式传播，替代老式的全局 include_directories。"}],28:[{q:'递归下降解析 JSON 时，遇到 "{" 字符应该？',options:["直接返回 null",'递归调用 parseObject，循环解析键值对直到 "}"',"跳过整行","抛异常结束"],answer:1,explain:"每个文法符号对应一个函数，嵌套结构递归调用——文法直接翻译成代码，这是解析器的通用模式。"},{q:"JSON 值类型（null/bool/number/string/array/object）最适合用哪个 C++ 结构表达？",options:["union","std::variant<...> + unique_ptr 存嵌套结构","虚基类只能这样","void*"],answer:1,explain:"variant 是类型安全的可辨识联合；嵌套的 array/object 需要堆分配，用 unique_ptr 管理生命周期。"}],29:[{q:"线程池中 worker 在队列为空时应该？",options:["忙等循环","condition_variable.wait(lock, pred) 挂起，等任务提交时被 notify 唤醒","退出线程","sleep(1)"],answer:1,explain:"cv.wait 带谓词的挂起/唤醒是标准套路：既不烧 CPU，也不会错过通知（谓词防虚假唤醒）。"},{q:"worker 从队列取出任务后为什么先解锁再执行任务？",options:["无所谓","持锁执行会让其他 worker 排队等待，锁应只保护队列操作本身","编译要求","防止内存泄漏"],answer:1,explain:"锁的粒度原则：只保护共享数据（队列），耗时任务在锁外执行，否则并发变串行。"}],30:[{q:"前端开发者转 C++ 最需要重建的心智是？",options:["语法差异","没有 GC 的所有权思维：谁创建谁释放、RAII、值语义 vs 引用语义","调试技巧","编辑器配置"],answer:1,explain:"所有权/生命周期是 C++ 的一切主线：RAII、智能指针、移动语义都是它的展开。"},{q:"30 天后性价比最高的继续练习方式？",options:["只读书不动手","用 C++ 刷 LeetCode + 把 godbolt 当 playground 看编译器行为","背标准","换一门语言"],answer:1,explain:"刷题积累肌肉记忆，Compiler Explorer 让你直观看到抽象背后的机器码——两者都在动手中学习。"}]},Cd={1:[{name:"cppreference（C++ 标准参考，圣经级）",url:"https://en.cppreference.com/w/",type:"doc"},{name:"learncpp.com（最好的免费系统教程）",url:"https://www.learncpp.com/",type:"tutorial"},{name:"Compiler Explorer 在线编译器",url:"https://godbolt.org/",type:"tool"}],2:[{name:"cppreference：Fundamental types",url:"https://en.cppreference.com/w/cpp/language/types",type:"doc"},{name:"C++ Core Guidelines",url:"https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines",type:"doc"}],3:[{name:"cppreference：Functions",url:"https://en.cppreference.com/w/cpp/language/functions",type:"doc"},{name:"learncpp：Pass by value/reference",url:"https://www.learncpp.com/cpp-tutorial/pass-by-lvalue-reference/",type:"tutorial"}],4:[{name:"learncpp：Pointers 全系列",url:"https://www.learncpp.com/cpp-tutorial/introduction-to-pointers/",type:"tutorial"},{name:"cppreference：Reference declaration",url:"https://en.cppreference.com/w/cpp/language/reference",type:"doc"}],5:[{name:"Valgrind 内存检测",url:"https://valgrind.org/",type:"tool"},{name:"AddressSanitizer 使用指南",url:"https://github.com/google/sanitizers",type:"tool"},{name:"learncpp：Dynamic allocation",url:"https://www.learncpp.com/cpp-tutorial/dynamic-memory-allocation-with-new-and-delete/",type:"tutorial"}],6:[{name:"cppreference：RAII",url:"https://en.cppreference.com/w/cpp/language/raii",type:"doc"},{name:"learncpp：Destructors",url:"https://www.learncpp.com/cpp-tutorial/destructors/",type:"tutorial"}],7:[{name:"cppreference：Classes",url:"https://en.cppreference.com/w/cpp/language/classes",type:"doc"},{name:"learncpp：Classes 全系列",url:"https://www.learncpp.com/cpp-tutorial/introduction-to-classes/",type:"tutorial"}],8:[{name:"cppreference：Rule of Three/Five/Zero",url:"https://en.cppreference.com/w/cpp/language/rule_of_three",type:"doc"},{name:"learncpp：Copy constructors",url:"https://www.learncpp.com/cpp-tutorial/copy-constructors/",type:"tutorial"}],9:[{name:"cppreference：Operator overloading",url:"https://en.cppreference.com/w/cpp/language/operators",type:"doc"},{name:"learncpp：Operator overloading",url:"https://www.learncpp.com/cpp-tutorial/introduction-to-operator-overloading/",type:"tutorial"}],10:[{name:"learncpp：Virtual functions",url:"https://www.learncpp.com/cpp-tutorial/virtual-functions/",type:"tutorial"},{name:"cppreference：Virtual",url:"https://en.cppreference.com/w/cpp/language/virtual",type:"doc"}],11:[{name:"learncpp：Virtual function tables",url:"https://www.learncpp.com/cpp-tutorial/virtual-function-tables/",type:"tutorial"},{name:"cppreference：Object slicing 相关（delete/析构）",url:"https://en.cppreference.com/w/cpp/language/destructor",type:"doc"}],12:[{name:"cppreference：Templates",url:"https://en.cppreference.com/w/cpp/language/templates",type:"doc"},{name:"learncpp：Function templates",url:"https://www.learncpp.com/cpp-tutorial/introduction-to-function-templates/",type:"tutorial"}],13:[{name:"cppreference：Constraints and concepts",url:"https://en.cppreference.com/w/cpp/language/constraints",type:"doc"},{name:"learncpp：Template specialization",url:"https://www.learncpp.com/cpp-tutorial/template-specialization/",type:"tutorial"}],14:[{name:"cppreference：Containers library",url:"https://en.cppreference.com/w/cpp/container",type:"doc"},{name:"learncpp：The standard library",url:"https://www.learncpp.com/cpp-tutorial/introduction-to-the-standard-library/",type:"tutorial"}],15:[{name:"cppreference：std::vector",url:"https://en.cppreference.com/w/cpp/container/vector",type:"doc"},{name:"cppreference：std::string",url:"https://en.cppreference.com/w/cpp/string/basic_string",type:"doc"}],16:[{name:"cppreference：Algorithms library",url:"https://en.cppreference.com/w/cpp/algorithm",type:"doc"},{name:"learncpp：Iterators",url:"https://www.learncpp.com/cpp-tutorial/introduction-to-iterators/",type:"tutorial"}],17:[{name:"cppreference：std::map",url:"https://en.cppreference.com/w/cpp/container/map",type:"doc"},{name:"cppreference：std::string_view",url:"https://en.cppreference.com/w/cpp/string/basic_string_view",type:"doc"}],18:[{name:"cppreference：unique_ptr",url:"https://en.cppreference.com/w/cpp/memory/unique_ptr",type:"doc"},{name:"learncpp：Move semantics（智能指针基础）",url:"https://www.learncpp.com/cpp-tutorial/move-semantics/",type:"tutorial"}],19:[{name:"cppreference：shared_ptr",url:"https://en.cppreference.com/w/cpp/memory/shared_ptr",type:"doc"},{name:"cppreference：weak_ptr",url:"https://en.cppreference.com/w/cpp/memory/weak_ptr",type:"doc"}],20:[{name:"learncpp：Introduction to move semantics",url:"https://www.learncpp.com/cpp-tutorial/introduction-to-move-semantics/",type:"tutorial"},{name:"cppreference：std::move",url:"https://en.cppreference.com/w/cpp/utility/move",type:"doc"}],21:[{name:"cppreference：Lambda expressions",url:"https://en.cppreference.com/w/cpp/language/lambda",type:"doc"},{name:"learncpp：Lambda captures",url:"https://www.learncpp.com/cpp-tutorial/lambda-captures/",type:"tutorial"}],22:[{name:"cppreference：Exceptions",url:"https://en.cppreference.com/w/cpp/language/exceptions",type:"doc"},{name:"cppreference：optional",url:"https://en.cppreference.com/w/cpp/utility/optional",type:"doc"}],23:[{name:"cppreference：std::thread",url:"https://en.cppreference.com/w/cpp/thread/thread",type:"doc"},{name:"learncpp：std::thread 入门",url:"https://www.learncpp.com/cpp-tutorial/introduction-to-std-thread/",type:"tutorial"}],24:[{name:"cppreference：Thread synchronization（mutex/atomic）",url:"https://en.cppreference.com/w/cpp/thread.html",type:"doc"},{name:"ThreadSanitizer（数据竞争检测）",url:"https://github.com/google/sanitizers",type:"tool"}],25:[{name:"Google Benchmark",url:"https://github.com/google/benchmark",type:"tool"},{name:"perf 性能分析教程",url:"https://www.brendangregg.com/perf.html",type:"tutorial"}],26:[{name:"cppreference：Ranges",url:"https://en.cppreference.com/w/cpp/ranges",type:"doc"},{name:"cppreference：C++23 features",url:"https://en.cppreference.com/w/cpp/23",type:"doc"}],27:[{name:"Modern CMake 入门书",url:"https://cliutils.gitlab.io/modern-cmake/",type:"tutorial"},{name:"vcpkg",url:"https://vcpkg.io/",type:"tool"},{name:"Catch2 测试框架",url:"https://github.com/catchorg/Catch2",type:"repo"}],28:[{name:"nlohmann/json",url:"https://github.com/nlohmann/json",type:"repo"},{name:"cppreference：variant",url:"https://en.cppreference.com/w/cpp/utility/variant",type:"doc"}],29:[{name:"cppreference：condition_variable",url:"https://en.cppreference.com/w/cpp/thread/condition_variable",type:"doc"},{name:"C++ Concurrency in Action（书）",url:"https://www.manning.com/books/c-plus-plus-concurrency-in-action-second-edition",type:"doc"}],30:[{name:"Awesome C++ 生态合集",url:"https://github.com/fffaraz/awesome-cpp",type:"repo"},{name:"C++ Core Guidelines",url:"https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines",type:"doc"},{name:"Compiler Explorer（常备 playground）",url:"https://godbolt.org/",type:"tool"}]},Ed={id:"java",name:"Java 勇者",icon:"☕",tagline:"前端转后端经典路线：Spring Boot 全栈通关",runner:"OnlineGDB (Java)",runnerUrl:"https://www.onlinegdb.com/online_java_compiler",tasks:td,exercises:od,quizzes:ad,resources:id},Pd={id:"go",name:"Go 勇者",icon:"🐹",tagline:sd.tagline,runner:"Go Playground",runnerUrl:"https://go.dev/play/",tasks:ld,exercises:cd,quizzes:ud,resources:pd},Md={id:"nestjs",name:"NestJS 勇者",icon:"🦁",tagline:dd.tagline,runner:"CodeSandbox (Node)",runnerUrl:"https://codesandbox.io/",tasks:md,exercises:gd,quizzes:fd,resources:hd},Nd={id:"js",name:"JavaScript 勇者",icon:"🟨",tagline:vd.tagline,runner:"浏览器控制台 / CodeSandbox",runnerUrl:"https://codesandbox.io/",tasks:yd,exercises:xd,quizzes:Sd,resources:bd},Dd={id:"cpp",name:"C++ 勇者",icon:"🔵",tagline:wd.tagline,runner:"OnlineGDB (C++)",runnerUrl:"https://www.onlinegdb.com/online_c++_compiler",tasks:kd,exercises:jd,quizzes:Td,resources:Cd},ls=[Ed,Nd,Dd,Pd,Md],yo="java",nu={1:[{t:"简介",u:"https://liaoxuefeng.com/books/java/introduction/",md:`# 简介

[  ](https://weibo.com/liaoxuefeng)

这是专门针对小白的零基础Java教程。

为什么要学Java？

因为Java是全球排名第一的编程语言，Java工程师也是市场需求最大的软件工程师，选择Java，就是选择了高薪。

### 为什么Java应用最广泛？

从互联网到企业平台，Java是应用最广泛的编程语言，原因在于：

- Java是基于JVM虚拟机的跨平台语言，一次编写，到处运行；
- Java程序易于编写，而且有内置垃圾收集，不必考虑内存管理；
- Java虚拟机拥有工业级的稳定性和高度优化的性能，且经过了长时期的考验；
- Java拥有最广泛的开源社区支持，各种高质量组件随时可用。
Java语言常年霸占着三大市场：

- 互联网和企业应用，这是Java EE的长期优势和市场地位；
- 大数据平台，主要有Hadoop、Spark、Flink等，他们都是Java或Scala（种运行于JVM的编程语言）开发的；
- Android移动平台。
这意味着Java拥有最广泛的就业市场。

### 教程特色

虽然是零基础Java教程，但是覆盖了从基础到高级的Java核心编程，学完后完全可以从小白成长为架构师，实现硬实力高薪就业！

还可以边学边练，而且可以在线练习！

并且，时刻更新至最新版Java！目前教程版本是：

# Java 22!

最重要的是：

# 免费！

不要犹豫了！现在开始学习Java，从入门到架构师！

---

---`},{t:"快速入门",u:"https://liaoxuefeng.com/books/java/quick-start/index.html",md:`*   [](https://liaoxuefeng.com/books/java/quick-start/index.html#0)
*   [](https://liaoxuefeng.com/)
*   [](https://liaoxuefeng.com/books/java/quick-start/index.html#0)

    *   [Java教程](https://liaoxuefeng.com/books/java/index.html)
    *   [Python教程](https://liaoxuefeng.com/books/python/index.html)
    *   [JavaScript教程](https://liaoxuefeng.com/books/javascript/index.html)
    *   [SQL教程](https://liaoxuefeng.com/books/sql/index.html)
    *   [手写Spring](https://liaoxuefeng.com/books/summerframework/index.html)
    *   [手写Tomcat](https://liaoxuefeng.com/books/jerrymouse/index.html)
    *   [区块链教程](https://liaoxuefeng.com/books/blockchain/index.html)
    *   [Git教程](https://liaoxuefeng.com/books/git/index.html)
    *   [Makefile教程](https://liaoxuefeng.com/books/makefile/index.html)
    *   [博客](https://liaoxuefeng.com/blogs/all/index.html)

*   [ 廖雪峰的官方网站](https://liaoxuefeng.com/)
*   [Java教程](https://liaoxuefeng.com/books/java/index.html)
*   [Python教程](https://liaoxuefeng.com/books/python/index.html)
*   [JavaScript教程](https://liaoxuefeng.com/books/javascript/index.html)
*   [SQL教程](https://liaoxuefeng.com/books/sql/index.html)
*   [手写Spring](https://liaoxuefeng.com/books/summerframework/index.html)
*   [手写Tomcat](https://liaoxuefeng.com/books/jerrymouse/index.html)
*   [区块链教程](https://liaoxuefeng.com/books/blockchain/index.html)
*   [Git教程](https://liaoxuefeng.com/books/git/index.html)
*   [Makefile教程](https://liaoxuefeng.com/books/makefile/index.html)
*   [博客](https://liaoxuefeng.com/blogs/all/index.html)
*   [](https://liaoxuefeng.com/books/java/quick-start/index.html#0)

    *   [Java教程](https://liaoxuefeng.com/books/java/index.html)
    *   [Python教程](https://liaoxuefeng.com/books/python/index.html)
    *   [JavaScript教程](https://liaoxuefeng.com/books/javascript/index.html)
    *   [SQL教程](https://liaoxuefeng.com/books/sql/index.html)
    *   [手写Spring](https://liaoxuefeng.com/books/summerframework/index.html)
    *   [手写Tomcat](https://liaoxuefeng.com/books/jerrymouse/index.html)
    *   [区块链教程](https://liaoxuefeng.com/books/blockchain/index.html)
    *   [Git教程](https://liaoxuefeng.com/books/git/index.html)
    *   [Makefile教程](https://liaoxuefeng.com/books/makefile/index.html)
    *   [博客](https://liaoxuefeng.com/blogs/all/index.html)

*   [](https://liaoxuefeng.com/books/java/quick-start/index.html#0)
*   [](https://liaoxuefeng.com/books/java/quick-start/index.html#0)
*   [](https://liaoxuefeng.com/books/java/quick-start/index.html#0)

### Java教程

[1.简介](https://liaoxuefeng.com/books/java/introduction/index.html)

[2.快速入门](https://liaoxuefeng.com/books/java/quick-start/index.html)

[2.1.Java历史](https://liaoxuefeng.com/books/java/quick-start/history/index.html)

[2.2.搭建开发环境](https://liaoxuefeng.com/books/java/quick-start/dev-env/index.html)

[2.2.1.安装JDK](https://liaoxuefeng.com/books/java/quick-start/dev-env/install-jdk/index.html)

[2.2.2.第一个Java程序](https://liaoxuefeng.com/books/java/quick-start/dev-env/first-program/index.html)

[2.2.3.使用IDE](https://liaoxuefeng.com/books/java/quick-start/dev-env/ide/index.html)

[2.3.Java程序基础](https://liaoxuefeng.com/books/java/quick-start/basic/index.html)

[2.3.1.Java程序基本结构](https://liaoxuefeng.com/books/java/quick-start/basic/program-structure/index.html)

[2.3.2.变量和数据类型](https://liaoxuefeng.com/books/java/quick-start/basic/var-type/index.html)

[2.3.3.整数运算](https://liaoxuefeng.com/books/java/quick-start/basic/integer/index.html)

[2.3.4.浮点数运算](https://liaoxuefeng.com/books/java/quick-start/basic/float/index.html)

[2.3.5.布尔运算](https://liaoxuefeng.com/books/java/quick-start/basic/boolean/index.html)

[2.3.6.字符和字符串](https://liaoxuefeng.com/books/java/quick-start/basic/string/index.html)

[2.3.7.数组类型](https://liaoxuefeng.com/books/java/quick-start/basic/array/index.html)

[2.4.流程控制](https://liaoxuefeng.com/books/java/quick-start/flow/index.html)

[2.4.1.输入和输出](https://liaoxuefeng.com/books/java/quick-start/flow/input-output/index.html)

[2.4.2.if条件判断](https://liaoxuefeng.com/books/java/quick-start/flow/if/index.html)

[2.4.3.switch多重选择](https://liaoxuefeng.com/books/java/quick-start/flow/switch/index.html)

[2.4.4.while循环](https://liaoxuefeng.com/books/java/quick-start/flow/while/index.html)

[2.4.5.do while循环](https://liaoxuefeng.com/books/java/quick-start/flow/do-while/index.html)

[2.4.6.for循环](https://liaoxuefeng.com/books/java/quick-start/flow/for/index.html)

[2.4.7.break和continue](https://liaoxuefeng.com/books/java/quick-start/flow/break-continue/index.html)

[2.5.数组操作](https://liaoxuefeng.com/books/java/quick-start/array-op/index.html)

[2.5.1.遍历数组](https://liaoxuefeng.com/books/java/quick-start/array-op/loop/index.html)

[2.5.2.数组排序](https://liaoxuefeng.com/books/java/quick-start/array-op/sort/index.html)

[2.5.3.多维数组](https://liaoxuefeng.com/books/java/quick-start/array-op/multi-dim/index.html)

[2.5.4.命令行参数](https://liaoxuefeng.com/books/java/quick-start/array-op/args/index.html)

[3.面向对象编程](https://liaoxuefeng.com/books/java/oop/index.html)

[3.1.面向对象基础](https://liaoxuefeng.com/books/java/oop/basic/index.html)

[3.1.1.方法](https://liaoxuefeng.com/books/java/oop/basic/method/index.html)

[3.1.2.构造方法](https://liaoxuefeng.com/books/java/oop/basic/constructor/index.html)

[3.1.3.方法重载](https://liaoxuefeng.com/books/java/oop/basic/overload/index.html)

[3.1.4.继承](https://liaoxuefeng.com/books/java/oop/basic/inherit/index.html)

[3.1.5.多态](https://liaoxuefeng.com/books/java/oop/basic/polymorphic/index.html)

[3.1.6.抽象类](https://liaoxuefeng.com/books/java/oop/basic/abstract-class/index.html)

[3.1.7.接口](https://liaoxuefeng.com/books/java/oop/basic/interface/index.html)

[3.1.8.静态字段和静态方法](https://liaoxuefeng.com/books/java/oop/basic/static/i

……（后文略）……`},{t:"安装JDK",u:"https://liaoxuefeng.com/books/java/quick-start/dev-env/install-jdk/",md:`# 安装JDK

[  ](https://weibo.com/liaoxuefeng)

因为Java程序必须运行在JVM之上，所以，我们第一件事情就是安装JDK。

搜索JDK 25，确保从[Oracle的官网](https://www.oracle.com/java/technologies/downloads/)下载最新的稳定版JDK：

\`\`\`
Java SE Development Kit 25 downloads

Linux  macOS  Windows
              -------

x64 Compressed Archive      Download
x64 Installer               Download
x64 MSI Installer           Download
\`\`\`

选择合适的操作系统与安装包，找到Java SE 25的下载链接\`Download\`，下载安装即可。Windows优先选\`x64 MSI Installer\`，Linux和macOS要根据自己电脑的CPU是ARM还是x86来选择合适的安装包。

### 设置环境变量

安装完JDK后，需要设置一个\`JAVA_HOME\`的环境变量，它指向JDK的安装目录。在Windows下，它是安装目录，类似：

\`\`\`plain
C:\\Program Files\\Java\\jdk-25
\`\`\`

在macOS下，它在\`~/.bash_profile\`或\`~/.zprofile\`里，它是：

\`\`\`plain
export JAVA_HOME=\`/usr/libexec/java_home -v 25\`
\`\`\`

然后，把\`JAVA_HOME\`的\`bin\`目录附加到系统环境变量\`PATH\`上。在Windows下，它长这样：

\`\`\`plain
Path=%JAVA_HOME%\\bin;<现有的其他路径>
\`\`\`

在macOS下，它在\`~/.bash_profile\`或\`~/.zprofile\`里，长这样：

\`\`\`plain
export PATH=$JAVA_HOME/bin:$PATH
\`\`\`

把\`JAVA_HOME\`的\`bin\`目录添加到\`PATH\`中是为了在任意文件夹下都可以运行\`java\`。打开PowerShell窗口，输入命令\`java -version\`，如果一切正常，你会看到如下输出：

\`\`\`
┌─────────────────────────────────────────────────────────┐
│Windows PowerShell                                 - □ x │
├─────────────────────────────────────────────────────────┤
│Windows PowerShell                                       │
│Copyright (C) Microsoft Corporation. All rights reserved.│
│                                                         │
│PS C:\\Users\\liaoxuefeng> java -version                   │
│java version "25" ...                                    │
│Java(TM) SE Runtime Environment                          │
│Java HotSpot(TM) 64-Bit Server VM                        │
│                                                         │
└─────────────────────────────────────────────────────────┘
\`\`\`

如果你看到的版本号不是\`25\`，而是\`15\`、\`1.8\`之类，说明系统存在多个JDK，且默认JDK不是JDK 25，需要把JDK 25提到\`PATH\`前面。

如果你得到一个错误输出：“无法将“java”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。”：

\`\`\`
┌─────────────────────────────────────────────────────────┐
│Windows PowerShell                                 - □ x │
├─────────────────────────────────────────────────────────┤
│Windows PowerShell                                       │
│Copyright (C) Microsoft Corporation. All rights reserved.│
│                                                         │
│PS C:\\Users\\liaoxuefeng> java -version                   │
│java : The term 'java' is not recognized as ...          │
│...                                                      │
│    + FullyQualifiedErrorId : CommandNotFoundException   │
│                                                         │
└─────────────────────────────────────────────────────────┘
\`\`\`

这是因为系统无法找到Java虚拟机的程序\`java.exe\`，需要检查\`JAVA_HOME\`和\`PATH\`的配置。

可以参考[如何设置或更改PATH系统变量](https://www.java.com/zh-CN/download/help/path.html)。

### JDK

细心的童鞋还可以在\`JAVA_HOME\`的\`bin\`目录下找到很多可执行文件：

- java：这个可执行程序其实就是JVM，运行Java程序，就是启动JVM，然后让JVM执行指定的编译后的代码；
- javac：这是Java的编译器，它用于把Java源码文件（以\`.java\`后缀结尾）编译为Java字节码文件（以\`.class\`后缀结尾）；
- jar：用于把一组\`.class\`文件打包成一个\`.jar\`文件，便于发布；
- javadoc：用于从Java源码中自动提取注释并生成文档；
- jdb：Java调试器，用于开发阶段的运行调试。

---

---`}],2:[{t:"第一个Java程序",u:"https://liaoxuefeng.com/books/java/quick-start/dev-env/first-program/",md:'# 第一个Java程序\n\n[  ](https://weibo.com/liaoxuefeng)\n\n我们来编写第一个Java程序。\n\n打开文本编辑器，输入以下代码：\n\n```java\npublic class Hello {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n```\n\n在一个Java程序中，你总能找到一个类似：\n\n```java\npublic class Hello {\n    ...\n}\n```\n\n的定义，这个定义被称为class（类），这里的类名是`Hello`，大小写敏感，`class`用来定义一个类，`public`表示这个类是公开的，`public`、`class`都是Java的关键字，必须小写，`Hello`是类的名字，按照习惯，首字母`H`要大写。而花括号`{}`中间则是类的定义。\n\n注意到类的定义中，我们定义了一个名为`main`的方法：\n\n```java\n    public static void main(String[] args) {\n        ...\n    }\n```\n\n方法是可执行的代码块，一个方法除了方法名`main`，还有用`()`括起来的方法参数，这里的`main`方法有一个参数，参数类型是`String[]`，参数名是`args`，`public`、`static`用来修饰方法，这里表示它是一个公开的静态方法，`void`是方法的返回类型，而花括号`{}`中间的就是方法的代码。\n\n方法的代码每一行用`;`结束，这里只有一行代码，就是：\n\n```java\n        System.out.println("Hello, world!");\n```\n\n它用来打印一个字符串到屏幕上。\n\nJava规定，某个类定义的`public static void main(String[] args)`是Java程序的固定入口方法，因此，Java程序总是从`main`方法开始执行。\n\n注意到Java源码的缩进不是必须的，但是用缩进后，格式好看，很容易看出代码块的开始和结束，缩进一般是4个空格或者一个tab。\n\n最后，当我们把代码保存为文件时，文件名必须是`Hello.java`，而且文件名也要注意大小写，因为要和我们定义的类名`Hello`完全保持一致。\n\n### 如何运行Java程序\n\nJava源码本质上是一个文本文件，我们需要先用`javac`把`Hello.java`编译成字节码文件`Hello.class`，然后，用`java`命令执行这个字节码文件：\n\n```\n┌──────────────────┐\n│    Hello.java    │◀── source code\n└──────────────────┘\n          │ compile\n          ▼\n┌──────────────────┐\n│   Hello.class    │◀── byte code\n└──────────────────┘\n          │ execute\n          ▼\n┌──────────────────┐\n│    Run on JVM    │\n└──────────────────┘\n```\n\n因此，可执行文件`javac`是编译器，而可执行文件`java`就是虚拟机。\n\n第一步，在保存`Hello.java`的目录下执行命令`javac Hello.java`：\n\n```plain\n$ javac Hello.java\n```\n\n如果源代码无误，上述命令不会有任何输出，而当前目录下会产生一个`Hello.class`文件：\n\n```plain\n$ ls\nHello.class	Hello.java\n```\n\n第二步，执行`Hello.class`，使用命令`java Hello`（注意不是`java Hello.class`）：\n\n```plain\n$ java Hello\nHello, world!\n```\n\n注意：给虚拟机传递的参数`Hello`是我们定义的类名，虚拟机自动查找对应的class文件并执行。\n\n如果执行`java Hello`报错：\n\n```plain\n$ java Hello\nError: Could not find or load main class Hello\nCaused by: java.lang.ClassNotFoundException: Hello\n```\n\n出现`ClassNotFoundException`信息，说明在当前目录下并没有`Hello.class`这个文件，请切换到`Hello.class`的目录，然后执行`java Hello`。\n\n有一些童鞋可能知道，直接运行`java Hello.java`也是可以的：\n\n```plain\n$ java Hello.java\nHello, world!\n```\n\n这是从Java 11开始新增的一个功能，它可以直接运行一个单文件源码！\n\n需要注意的是，在实际项目中，单个不依赖第三方库的Java源码是非常罕见的，所以，绝大多数情况下，我们无法直接运行一个Java源码文件，原因是它需要依赖其他的库。\n\n### 小结\n\n一个Java源码只能定义一个`public`类型的class，并且class名称和文件名要完全一致；\n\n使用`javac`可以将`.java`源码编译成`.class`字节码；\n\n使用`java`可以运行一个已编译的Java程序，参数是类名。\n\n---\n\n---'},{t:"变量和数据类型",u:"https://liaoxuefeng.com/books/java/quick-start/basic/var-type/",md:`# 变量和数据类型

[  ](https://weibo.com/liaoxuefeng)

### 变量

什么是变量？

变量就是初中数学的代数的概念，例如一个简单的方程，x，y都是变量：

在Java中，变量分为两种：基本类型的变量和引用类型的变量。

我们先讨论基本类型的变量。

在Java中，变量必须先定义后使用，在定义变量的时候，可以给它一个初始值。例如：

\`\`\`java
int x = 1;
\`\`\`

上述语句定义了一个整型\`int\`类型的变量，名称为\`x\`，初始值为\`1\`。

不写初始值，就相当于给它指定了默认值。默认值总是\`0\`。

来看一个完整的定义变量，然后打印变量值的例子：

\`\`\`java
// 定义并打印变量
public class Main {
    public static void main(String[] args) {
        int x = 100; // 定义int类型变量x，并赋予初始值100
        System.out.println(x); // 打印该变量的值
    }
}
\`\`\`

变量的一个重要特点是可以重新赋值。例如，对变量\`x\`，先赋值\`100\`，再赋值\`200\`，观察两次打印的结果：

\`\`\`java
// 重新赋值变量
public class Main {
    public static void main(String[] args) {
        int x = 100; // 定义int类型变量x，并赋予初始值100
        System.out.println(x); // 打印该变量的值，观察是否为100
        x = 200; // 重新赋值为200
        System.out.println(x); // 打印该变量的值，观察是否为200
    }
}
\`\`\`

注意到第一次定义变量\`x\`的时候，需要指定变量类型\`int\`，因此使用语句\`int x = 100;\`。而第二次重新赋值的时候，变量\`x\`已经存在了，不能再重复定义，因此不能指定变量类型\`int\`，必须使用语句\`x = 200;\`。

变量不但可以重新赋值，还可以赋值给其他变量。让我们来看一个例子：

\`\`\`java
// 变量之间的赋值
public class Main {
    public static void main(String[] args) {
        int n = 100; // 定义变量n，同时赋值为100
        System.out.println("n = " + n); // 打印n的值

        n = 200; // 变量n赋值为200
        System.out.println("n = " + n); // 打印n的值

        int x = n; // 变量x赋值为n（n的值为200，因此赋值后x的值也是200）
        System.out.println("x = " + x); // 打印x的值

        x = x + 100; // 变量x赋值为x+100（x的值为200，因此赋值后x的值是200+100=300）
        System.out.println("x = " + x); // 打印x的值
        System.out.println("n = " + n); // 再次打印n的值，n应该是200还是300？
   }
}
\`\`\`

我们一行一行地分析代码执行流程：

执行\`int n = 100;\`，该语句定义了变量\`n\`，同时赋值为\`100\`，因此，JVM在内存中为变量\`n\`分配一个“存储单元”，填入值\`100\`：

\`\`\`
      n
      │
      ▼
┌───┬───┬───┬───┬───┬───┬───┐
│   │100│   │   │   │   │   │
└───┴───┴───┴───┴───┴───┴───┘
\`\`\`

执行\`n = 200;\`时，JVM把\`200\`写入变量\`n\`的存储单元，因此，原有的值被覆盖，现在\`n\`的值为\`200\`：

\`\`\`
      n
      │
      ▼
┌───┬───┬───┬───┬───┬───┬───┐
│   │200│   │   │   │   │   │
└───┴───┴───┴───┴───┴───┴───┘
\`\`\`

执行\`int x = n;\`时，定义了一个新的变量\`x\`，同时对\`x\`赋值，因此，JVM需要*新分配*一个存储单元给变量\`x\`，并写入和变量\`n\`一样的值，结果是变量\`x\`的值也变为\`200\`：

\`\`\`
      n           x
      │           │
      ▼           ▼
┌───┬───┬───┬───┬───┬───┬───┐
│   │200│   │   │200│   │   │
└───┴───┴───┴───┴───┴───┴───┘
\`\`\`

执行\`x = x + 100;\`时，JVM首先计算等式右边的值\`x + 100\`，结果为\`300\`（因为此刻\`x\`的值为\`200\`），然后，将结果\`300\`写入\`x\`的存储单元，因此，变量\`x\`最终的值变为\`300\`：

\`\`\`
      n           x
      │           │
      ▼           ▼
┌───┬───┬───┬───┬───┬───┬───┐
│   │200│   │   │300│   │   │
└───┴───┴───┴───┴───┴───┴───┘
\`\`\`

可见，变量可以反复赋值。注意，等号\`=\`是赋值语句，不是数学意义上的相等，否则无法解释\`x = x + 100\`。

### 基本数据类型

基本数据类型是CPU可以直接进行运算的类型。Java定义了以下几种基本数据类型：

- 整数类型：byte，short，int，long
- 浮点数类型：float，double
- 字符类型：char
- 布尔类型：boolean
Java定义的这些基本数据类型有什么区别呢？要了解这些区别，我们就必须简单了解一下计算机内存的基本结构。

计算机内存的最小存储单元是字节（byte），一个字节就是一个8位二进制数，即8个bit。它的二进制表示范围从\`00000000\`~\`11111111\`，换算成十进制是0~255，换算成十六进制是\`00\`~\`ff\`。

内存单元从0开始编号，称为内存地址。每个内存单元可以看作一间房间，内存地址就是门牌号。

\`\`\`
  0   1   2   3   4   5   6  ...
┌───┬───┬───┬───┬───┬───┬───┐
│   │   │   │   │   │   │   │...
└───┴───┴───┴───┴───┴───┴───┘
\`\`\`

一个字节是1byte，1024字节是1K，1024K是1M，1024M是1G，1024G是1T。一个拥有4T内存的计算机的字节数量就是：

\`\`\`plain
4T = 4 x 1024G
   = 4 x 1024 x 1024M
   = 4 x 1024 x 1024 x 1024K
   = 4 x 1024 x 1024 x 1024 x 1024
   = 4398046511104
\`\`\`

不同的数据类型占用的字节数不一样。我们看一下Java基本数据类型占用的字节数：

\`\`\`
       ┌───┐
  byte │   │
       └───┘
       ┌───┬───┐
 short │   │   │
       └───┴───┘
       ┌───┬───┬───┬───┐
   int │   │   │   │   │
       └───┴───┴───┴───┘
       ┌───┬───┬───┬───┬───┬───┬───┬───┐
  long │   │   │   │   │   │   │   │   │
       └───┴───┴───┴───┴───┴───┴───┴───┘
       ┌───┬───┬───┬───┐
 float │   │   │   │   │
       └───┴───┴───┴───┘
       ┌───┬───┬───┬───┬───┬───┬───┬───┐
double │   │   │   │   │   │   │   │   │
       └───┴───┴───┴───┴───┴───┴───┴───┘
       ┌───┬───┐
  char │   │   │
       └───┴───┘
\`\`\`

\`byte\`恰好就是一个字节，而\`long\`和\`double\`需要8个字节。

### 整型

对于整型类型，Java只定义了带符号的整型，因此，最高位的bit表示符号位（0表示正数，1表示负数）。各种整型能表示的最大范围如下：

- byte：-128 ~ 127
- short: -32768 ~ 32767
- int: -2147483648 ~ 2147483647
- long: -9223372036854775808 ~ 9223372036854775807
我们来看定义整型的例子：

\`\`\`java
// 定义整型
public class Main {
    public static void main(String[] args) {
        int i = 2147483647;
        int i2 = -2147483648;
        int i3 = 2_000_000_000; // 加下划线更容易识别
        int i4 = 0xff0000; // 十六进制表示的16711680
        int i5 = 0b1000000000; // 二进制表示的512

        long n1 = 9000000000000000000L; // long型的结尾需要加L
        long n2 = 900; // 没有加L，此处900为int，但int类型可以赋值给long
        int i6 = 900L; // 错误：不能把long型赋值给int
    }
}
\`\`\`

特别注意：同一个数的不同进制的表示是完全相同的，例如\`15\`=\`0xf\`＝\`0b1111\`。

### 浮点型

浮点类型的数就是小数，因为小数用科学计数法表示的时候，小数点是可以“浮动”的，如1234.5可以表示成12.345x102，也可以表示成1.2345x103，所以称为浮点数。

下面是定义浮点数的例子：

\`\`\`java
float f1 = 3.14f;
float f2 = 3.14e38f; /

……（中间部分略）……

## 小结

Java提供了两种变量类型：基本类型和引用类型

基本类型包括整型，浮点型，布尔型，字符型。

变量可重新赋值，等号是赋值语句，不是数学意义的等号。

常量在初始化后不可重新赋值，使用常量便于理解程序意图。

---

---`}],3:[{t:"整数运算",u:"https://liaoxuefeng.com/books/java/quick-start/basic/integer/",md:`# 整数运算

[  ](https://weibo.com/liaoxuefeng)

Java的整数运算遵循四则运算规则，可以使用任意嵌套的小括号。四则运算规则和初等数学一致。例如：

\`\`\`java
// 四则运算
public class Main {
    public static void main(String[] args) {
        int i = (100 + 200) * (99 - 88); // 3300
        int n = 7 * (5 + (i - 9)); // 23072
        System.out.println(i);
        System.out.println(n);
    }
}
\`\`\`

整数的数值表示不但是精确的，而且整数运算永远是精确的，即使是除法也是精确的，因为两个整数相除只能得到结果的整数部分：

\`\`\`java
int x = 12345 / 67; // 184
\`\`\`

求余运算使用\`%\`：

\`\`\`java
int y = 12345 % 67; // 12345÷67的余数是17
\`\`\`

特别注意：整数的除法对于除数为0时运行时将报错，但编译不会报错。

### 溢出

要特别注意，整数由于存在范围限制，如果计算结果超出了范围，就会产生溢出，而溢出*不会出错*，却会得到一个奇怪的结果：

\`\`\`java
// 运算溢出
public class Main {
    public static void main(String[] args) {
        int x = 2147483640;
        int y = 15;
        int sum = x + y;
        System.out.println(sum); // -2147483641
    }
}
\`\`\`

要解释上述结果，我们把整数\`2147483640\`和\`15\`换成二进制做加法：

\`\`\`
  0111 1111 1111 1111 1111 1111 1111 1000
+ 0000 0000 0000 0000 0000 0000 0000 1111
-----------------------------------------
  1000 0000 0000 0000 0000 0000 0000 0111
\`\`\`

由于最高位计算结果为\`1\`，因此，加法结果变成了一个负数。

要解决上面的问题，可以把\`int\`换成\`long\`类型，由于\`long\`可表示的整型范围更大，所以结果就不会溢出：

\`\`\`java
long x = 2147483640;
long y = 15;
long sum = x + y;
System.out.println(sum); // 2147483655
\`\`\`

还有一种简写的运算符，即\`+=\`，\`-=\`，\`*=\`，\`/=\`，它们的使用方法如下：

\`\`\`java
n += 100; // 3409, 相当于 n = n + 100;
n -= 100; // 3309, 相当于 n = n - 100;
\`\`\`

### 自增/自减

Java还提供了\`++\`运算和\`--\`运算，它们可以对一个整数进行加1和减1的操作：

\`\`\`java
// 自增/自减运算
public class Main {
    public static void main(String[] args) {
        int n = 3300;
        n++; // 3301, 相当于 n = n + 1;
        n--; // 3300, 相当于 n = n - 1;
        int y = 100 + (++n); // 不要这么写
        System.out.println(y);
    }
}
\`\`\`

注意\`++\`写在前面和后面计算结果是不同的，\`++n\`表示先加1再引用n，\`n++\`表示先引用n再加1。不建议把\`++\`运算混入到常规运算中，容易自己把自己搞懵了。

### 移位运算

在计算机中，整数总是以二进制的形式表示。例如，\`int\`类型的整数\`7\`使用4字节表示的二进制如下：

\`\`\`
00000000 0000000 0000000 00000111
\`\`\`

可以对整数进行移位运算。对整数\`7\`左移1位将得到整数\`14\`，左移两位将得到整数\`28\`：

\`\`\`java
int n = 7;       // 00000000 00000000 00000000 00000111 = 7
int a = n << 1;  // 00000000 00000000 00000000 00001110 = 14
int b = n << 2;  // 00000000 00000000 00000000 00011100 = 28
int c = n << 28; // 01110000 00000000 00000000 00000000 = 1879048192
int d = n << 29; // 11100000 00000000 00000000 00000000 = -536870912
\`\`\`

左移29位时，由于最高位变成\`1\`，因此结果变成了负数。

类似的，对整数28进行右移，结果如下：

\`\`\`java
int n = 7;       // 00000000 00000000 00000000 00000111 = 7
int a = n >> 1;  // 00000000 00000000 00000000 00000011 = 3
int b = n >> 2;  // 00000000 00000000 00000000 00000001 = 1
int c = n >> 3;  // 00000000 00000000 00000000 00000000 = 0
\`\`\`

如果对一个负数进行右移，最高位的\`1\`不动，结果仍然是一个负数：

\`\`\`java
int n = -536870912;
int a = n >> 1;  // 11110000 00000000 00000000 00000000 = -268435456
int b = n >> 2;  // 11111000 00000000 00000000 00000000 = -134217728
int c = n >> 28; // 11111111 11111111 11111111 11111110 = -2
int d = n >> 29; // 11111111 11111111 11111111 11111111 = -1
\`\`\`

还有一种无符号的右移运算，使用\`>>>\`，它的特点是不管符号位，右移后高位总是补\`0\`，因此，对一个负数进行\`>>>\`右移，它会变成正数，原因是最高位的\`1\`变成了\`0\`：

\`\`\`java
int n = -536870912;
int a = n >>> 1;  // 01110000 00000000 00000000 00000000 = 1879048192
int b = n >>> 2;  // 00111000 00000000 00000000 00000000 = 939524096
int c = n >>> 29; // 00000000 00000000 00000000 00000111 = 7
int d = n >>> 31; // 00000000 00000000 00000000 00000001 = 1
\`\`\`

对\`byte\`和\`short\`类型进行移位时，会首先转换为\`int\`再进行位移。

仔细观察可发现，左移实际上就是不断地×2，右移实际上就是不断地÷2。

### 位运算

位运算是按位进行与、或、非和异或的运算。我们先来看看针对单个bit的位运算。

与运算的规则是，必须两个数同时为\`1\`，结果才为\`1\`：

\`\`\`java
n = 0 & 0; // 0
n = 0 & 1; // 0
n = 1 & 0; // 0
n = 1 & 1; // 1
\`\`\`

或运算的规则是，只要任意一个为\`1\`，结果就为\`1\`：

\`\`\`java
n = 0 | 0; // 0
n = 0 | 1; // 1
n = 1 | 0; // 1
n = 1 | 1; // 1
\`\`\`

非运算的规则是，\`0\`和\`1\`互换：

\`\`\`java
n = ~0; // 1
n = ~1; // 0
\`\`\`

异或运算的规则是，如果两个数不同，结果为\`1\`，否则为\`0\`：

\`\`\`java
n = 0 ^ 0; // 0
n = 0 ^ 1; // 1
n = 1 ^ 0; // 1
n = 1 ^ 1; // 0
\`\`\`

Java没有单个bit的数据类型。在Java中，对两个整数进行位运算，实际上就是按位对齐，然后依次对每一位进行运算。例如：

\`\`\`java
// 位运算
public class Main {
    public static void main(String[] args) {
        int i = 167776589; // 00001010 00000000 00010001 01001101
        int n = 167776512; // 00001010 00000000 00010001 00000000
                         // & -----------------------------------
                           // 00001010 00000000 00010001 00000000
        System.out.println(i & n); // 167776512
    }
}
\`\`\`

上述按位与运算实际上可以看作两个整数表示的IP地址\`10.0.17.77\`和\`10.0.17.0\`，通过与运算，可以快速判断一个IP是否在给定的网段内。

### 运算优先级

在Java的计算表达式中，运算优先级从高到低依次是：

- \`()\`
- \`!\` \`~\` \`++\` \`--\`
- \`*\` \`/\` \`%\`
- \`+\` \`-\`
- \`<<\` \`>>\` \`>>>\`
- \`&\`
- \`|\`
- \`+=\` \`-=\` \`*=\` \`/=\`
记不住也没关系，只需要加括号就可以保证运算的优先级正确。

### 类型自动提升与强制转型

在运算过程中，如果参与运算的两个数类型不一致，那么计算结果为较大类型的整型。例如，\`short\`和\`int\`计算，结果总是\`int\`，原因是\`short\`首先自动被转型为\`int\`：

\`\`\`java
// 类型自动提升与强制转型
public class Main {
    public static void main(String[] args) {
        short s = 1234;
        int i = 123456;
        int x = s + i; // s自动转型为int
        short y = s + i; // 编译错误!
    }
}
\`\`\`

也可以将结果强制转型，即将大范围的整数转型为小范围的整数。强制转型使用\`(类型)\`，例如，将\`int\`强制转型为\`short\`：

\`\`\`java
int i = 12345;
short s = (short) i; // 12345
\`\`\`

要注意，超出范围的强制转型会得到错误的结果，原因是转型时，\`int\`的两个高位字节直接被扔掉，仅保留了低位的两个字节：

\`\`\`java
// 强制转型
public class Main {
    public static void main(String[] args) {
        int i1 = 1234567;
        short s1 = (short) i1; // -10617
        System.out.println(s1);
        int i2 = 12345678;
        short s2 = (short) i2; // 24910
        System.out.println(s2);
    }
}
\`\`\`

因此，强制转型的结果很可能是错的。

### 练习

计算前N个自然数的和可以根据公式：

请根据公式计算前N个自然数的和：

\`\`\`java
// 计算前N个自然数的和
public class Main {
    public static void main(String[] args) {
        int n = 100;
        // TODO: sum = 1 + 2 + ... + n
        int sum = ???;
        System.out.println(sum);
        System.out.println(sum == 5050 ? "测试通过" : "测试失败");
    }
}
\`\`\`

### 小结

整数运算的结果永远是精确的；

运算结果会自动提升；

可以强制转型，但超出范围的强制转型会得到错误的结果；

应该选择合适范围的整型（\`int\`或\`long\`），没有必要为了节省内存而使用\`byte\`和\`short\`进行整数运算。

---

---`},{t:"浮点数运算",u:"https://liaoxuefeng.com/books/java/quick-start/basic/float/",md:`# 浮点数运算

[  ](https://weibo.com/liaoxuefeng)

浮点数运算和整数运算相比，只能进行加减乘除这些数值计算，不能做位运算和移位运算。

在计算机中，浮点数虽然表示的范围大，但是，浮点数有个非常重要的特点，就是浮点数常常无法精确表示。

举个例子：

浮点数\`0.1\`在计算机中就无法精确表示，因为十进制的\`0.1\`换算成二进制是一个无限循环小数，很显然，无论使用\`float\`还是\`double\`，都只能存储一个\`0.1\`的近似值。但是，\`0.5\`这个浮点数又可以精确地表示。

因为浮点数常常无法精确表示，因此，浮点数运算会产生误差：

\`\`\`java
// 浮点数运算误差
public class Main {
    public static void main(String[] args) {
        double x = 1.0 / 10;
        double y = 1 - 9.0 / 10;
        // 观察x和y是否相等:
        System.out.println(x);
        System.out.println(y);
    }
}
\`\`\`

由于浮点数存在运算误差，所以比较两个浮点数是否相等常常会出现错误的结果。正确的比较方法是判断两个浮点数之差的绝对值是否小于一个很小的数：

\`\`\`java
// 比较x和y是否相等，先计算其差的绝对值:
double r = Math.abs(x - y);
// 再判断绝对值是否足够小:
if (r < 0.00001) {
    // 可以认为相等
} else {
    // 不相等
}
\`\`\`

浮点数在内存的表示方法和整数比更加复杂。Java的浮点数完全遵循[IEEE-754](https://standards.ieee.org/ieee/754/6210/)标准，这也是绝大多数计算机平台都支持的浮点数标准表示方法。

### 类型提升

如果参与运算的两个数其中一个是整型，那么整型可以自动提升到浮点型：

\`\`\`java
// 类型提升
public class Main {
    public static void main(String[] args) {
        int n = 5;
        double d = 1.2 + 24.0 / n; // 6.0
        System.out.println(d);
    }
}
\`\`\`

需要特别注意，在一个复杂的四则运算中，两个整数的运算不会出现自动提升的情况。例如：

\`\`\`java
double d = 1.2 + 24 / 5; // 结果不是 6.0 而是 5.2
\`\`\`

计算结果为\`5.2\`，原因是编译器计算\`24 / 5\`这个子表达式时，按两个整数进行运算，结果仍为整数\`4\`。

要修复这个计算结果，可以将\`24 / 5\`改为\`24.0 / 5\`。由于\`24.0\`是浮点数，因此，计算除法时自动将\`5\`提升为浮点数。

### 溢出

整数运算在除数为\`0\`时会报错，而浮点数运算在除数为\`0\`时，不会报错，但会返回几个特殊值：

- \`NaN\`表示Not a Number
- \`Infinity\`表示无穷大
- \`-Infinity\`表示负无穷大
例如：

\`\`\`java
double d1 = 0.0 / 0; // NaN
double d2 = 1.0 / 0; // Infinity
double d3 = -1.0 / 0; // -Infinity
\`\`\`

这三种特殊值在实际运算中很少碰到，我们只需要了解即可。

### 强制转型

可以将浮点数强制转型为整数。在转型时，浮点数的小数部分会被丢掉。如果转型后超过了整型能表示的最大范围，将返回整型的最大值。例如：

\`\`\`java
int n1 = (int) 12.3; // 12
int n2 = (int) 12.7; // 12
int n3 = (int) -12.7; // -12
int n4 = (int) (12.7 + 0.5); // 13
int n5 = (int) 1.2e20; // 2147483647
\`\`\`

如果要进行四舍五入，可以对浮点数加上\`0.5\`再强制转型：

\`\`\`java
// 四舍五入
public class Main {
    public static void main(String[] args) {
        double d = 2.6;
        int n = (int) (d + 0.5);
        System.out.println(n);
    }
}
\`\`\`

### 练习

根据一元二次方程 的求根公式：

计算出一元二次方程的两个解：

\`\`\`java
// 一元二次方程
public class Main {
    public static void main(String[] args) {
        double a = 1.0;
        double b = 3.0;
        double c = -4.0;
        // 求平方根可用 Math.sqrt():
        // System.out.println(Math.sqrt(2)); ==> 1.414
        // TODO:
        double r1 = 0;
        double r2 = 0;
        System.out.println(r1);
        System.out.println(r2);
        System.out.println(r1 == 1 && r2 == -4 ? "测试通过" : "测试失败");
    }
}
\`\`\`

### 小结

浮点数常常无法精确表示，并且浮点数的运算结果可能有误差；

比较两个浮点数通常比较它们的差的绝对值是否小于一个特定值；

整型和浮点型运算时，整型会自动提升为浮点型；

可以将浮点型强制转为整型，但超出范围后将始终返回整型的最大值。

---

---`}],4:[{t:"布尔运算",u:"https://liaoxuefeng.com/books/java/quick-start/basic/boolean/",md:'# 布尔运算\n\n[  ](https://weibo.com/liaoxuefeng)\n\n对于布尔类型`boolean`，永远只有`true`和`false`两个值。\n\n布尔运算是一种关系运算，包括以下几类：\n\n- 比较运算符：`>`，`>=`，`<`，`<=`，`==`，`!=`\n- 与运算 `&&`\n- 或运算 `||`\n- 非运算 `!`\n下面是一些示例：\n\n```java\nboolean isGreater = 5 > 3; // true\nint age = 12;\nboolean isZero = age == 0; // false\nboolean isNonZero = !isZero; // true\nboolean isAdult = age >= 18; // false\nboolean isTeenager = age >6 && age <18; // true\n```\n\n关系运算符的优先级从高到低依次是：\n\n- `!`\n- `>`，`>=`，`<`，`<=`\n- `==`，`!=`\n- `&&`\n- `||`\n\n### 短路运算\n\n布尔运算的一个重要特点是短路运算。如果一个布尔运算的表达式能提前确定结果，则后续的计算不再执行，直接返回结果。\n\n因为`false && x`的结果总是`false`，无论`x`是`true`还是`false`，因此，与运算在确定第一个值为`false`后，不再继续计算，而是直接返回`false`。\n\n我们考察以下代码：\n\n```java\n// 短路运算\npublic class Main {\n    public static void main(String[] args) {\n        boolean b = 5 < 3;\n        boolean result = b && (5 / 0 > 0); // 此处 5 / 0 不会报错\n        System.out.println(result);\n    }\n}\n```\n\n如果没有短路运算，`&&`后面的表达式会由于除数为`0`而报错，但实际上该语句并未报错，原因在于与运算是短路运算符，提前计算出了结果`false`。\n\n如果变量`b`的值为`true`，则表达式变为`true && (5 / 0 > 0)`。因为无法进行短路运算，该表达式必定会由于除数为`0`而报错，可以自行测试。\n\n类似的，对于`||`运算，只要能确定第一个值为`true`，后续计算也不再进行，而是直接返回`true`：\n\n```java\nboolean result = true || (5 / 0 > 0); // true\n```\n\n### 三元运算符\n\nJava还提供一个三元运算符`b ? x : y`，它根据第一个布尔表达式的结果，分别返回后续两个表达式之一的计算结果。示例：\n\n```java\n// 三元运算\npublic class Main {\n    public static void main(String[] args) {\n        int n = -100;\n        int x = n >= 0 ? n : -n;\n        System.out.println(x);\n    }\n}\n```\n\n上述语句的意思是，判断`n >= 0`是否成立，如果为`true`，则返回`n`，否则返回`-n`。这实际上是一个求绝对值的表达式。\n\n注意到三元运算`b ? x : y`会首先计算`b`，如果`b`为`true`，则只计算`x`，否则，只计算`y`。此外，`x`和`y`的类型必须相同，因为返回值不是`boolean`，而是`x`和`y`之一。\n\n### 练习\n\n判断指定年龄是否是小学生（6～12岁）：\n\n```java\n// 布尔运算\npublic class Main {\n    public static void main(String[] args) {\n        int age = 7;\n        // primary student的定义: 6~12岁\n        boolean isPrimaryStudent = ???;\n        System.out.println(isPrimaryStudent ? "Yes" : "No");\n    }\n}\n```\n\n### 小结\n\n与运算和或运算是短路运算；\n\n三元运算`b ? x : y`后面的类型必须相同，三元运算也是“短路运算”，只计算`x`或`y`。\n\n---\n\n---'},{t:"字符和字符串",u:"https://liaoxuefeng.com/books/java/quick-start/basic/string/",md:`# 字符和字符串

[  ](https://weibo.com/liaoxuefeng)

在Java中，字符和字符串是两个不同的类型。

### 字符类型

字符类型\`char\`是基本数据类型，它是\`character\`的缩写。一个\`char\`保存一个Unicode字符：

\`\`\`java
char c1 = 'A';
char c2 = '中';
\`\`\`

因为Java在内存中总是使用Unicode表示字符，所以，一个英文字符和一个中文字符都用一个\`char\`类型表示，它们都占用两个字节。要显示一个字符的Unicode编码，只需将\`char\`类型直接赋值给\`int\`类型即可：

\`\`\`java
int n1 = 'A'; // 字母“A”的Unicodde编码是65
int n2 = '中'; // 汉字“中”的Unicode编码是20013
\`\`\`

还可以直接用转义字符\`\\u\`+Unicode编码来表示一个字符：

\`\`\`java
// 注意是十六进制:
char c3 = '\\u0041'; // 'A'，因为十六进制0041 = 十进制65
char c4 = '\\u4e2d'; // '中'，因为十六进制4e2d = 十进制20013
\`\`\`

### 字符串类型

和\`char\`类型不同，字符串类型\`String\`是引用类型，我们用双引号\`"..."\`表示字符串。一个字符串可以存储0个到任意个字符：

\`\`\`java
String s = ""; // 空字符串，包含0个字符
String s1 = "A"; // 包含一个字符
String s2 = "ABC"; // 包含3个字符
String s3 = "中文 ABC"; // 包含6个字符，其中有一个空格
\`\`\`

因为字符串使用双引号\`"..."\`表示开始和结束，那如果字符串本身恰好包含一个\`"\`字符怎么表示？例如，\`"abc"xyz"\`，编译器就无法判断中间的引号究竟是字符串的一部分还是表示字符串结束。这个时候，我们需要借助转义字符\`\\\`：

\`\`\`java
String s = "abc\\"xyz"; // 包含7个字符: a, b, c, ", x, y, z
\`\`\`

因为\`\\\`是转义字符，所以，两个\`\\\\\`表示一个\`\\\`字符：

\`\`\`java
String s = "abc\\\\xyz"; // 包含7个字符: a, b, c, \\, x, y, z
\`\`\`

常见的转义字符包括：

- \`\\"\` 表示字符\`"\`
- \`\\'\` 表示字符\`'\`
- \`\\\\\` 表示字符\`\\\`
- \`\\n\` 表示换行符
- \`\\r\` 表示回车符
- \`\\t\` 表示Tab
- \`\\u####\` 表示一个Unicode编码的字符
例如：

\`\`\`java
String s = "ABC\\n\\u4e2d\\u6587"; // 包含6个字符: A, B, C, 换行符, 中, 文
\`\`\`

### 字符串连接

Java的编译器对字符串做了特殊照顾，可以使用\`+\`连接任意字符串和其他数据类型，这样极大地方便了字符串的处理。例如：

\`\`\`java
// 字符串连接
public class Main {
    public static void main(String[] args) {
        String s1 = "Hello";
        String s2 = "world";
        String s = s1 + " " + s2 + "!";
        System.out.println(s); // Hello world!
    }
}
\`\`\`

如果用\`+\`连接字符串和其他数据类型，会将其他数据类型先自动转型为字符串，再连接：

\`\`\`java
// 字符串连接
public class Main {
    public static void main(String[] args) {
        int age = 25;
        String s = "age is " + age;
        System.out.println(s); // age is 25
    }
}
\`\`\`

### 多行字符串

如果我们要表示多行字符串，使用+号连接会非常不方便：

\`\`\`java
String s = "first line \\n"
         + "second line \\n"
         + "end";
\`\`\`

从Java 13开始，字符串可以用\`"""..."""\`表示多行字符串（Text Blocks）了。举个例子：

\`\`\`java
// 多行字符串
public class Main {
    public static void main(String[] args) {
        String s = """
                   SELECT * FROM
                     users
                   WHERE id > 100
                   ORDER BY name DESC
                   """;
        System.out.println(s);
    }
}
\`\`\`

上述多行字符串实际上是5行，在最后一个\`DESC\`后面还有一个\`\\n\`。如果我们不想在字符串末尾加一个\`\\n\`，就需要这么写：

\`\`\`java
String s = """
           SELECT * FROM
             users
           WHERE id > 100
           ORDER BY name DESC""";
\`\`\`

还需要注意到，多行字符串前面共同的空格会被去掉，即：

\`\`\`java
String s = """
...........SELECT * FROM
...........  users
...........WHERE id > 100
...........ORDER BY name DESC
...........""";
\`\`\`

用\`.\`标注的空格都会被去掉。

如果多行字符串的排版不规则，那么，去掉的空格就会变成这样：

\`\`\`java
String s = """
.........  SELECT * FROM
.........    users
.........WHERE id > 100
.........  ORDER BY name DESC
.........  """;
\`\`\`

即总是以最短的行首空格为基准。

### 不可变特性

Java的字符串除了是一个引用类型外，还有个重要特点，就是字符串不可变。考察以下代码：

\`\`\`java
// 字符串不可变
public class Main {
    public static void main(String[] args) {
        String s = "hello";
        System.out.println(s); // 显示 hello
        s = "world";
        System.out.println(s); // 显示 world
    }
}
\`\`\`

观察执行结果，难道字符串\`s\`变了吗？其实变的不是字符串，而是变量\`s\`的“指向”。

执行\`String s = "hello";\`时，JVM虚拟机先创建字符串\`"hello"\`，然后，把字符串变量\`s\`指向它：

\`\`\`
      s
      │
      ▼
┌───┬───────────┬───┐
│   │  "hello"  │   │
└───┴───────────┴───┘
\`\`\`

紧接着，执行\`s = "world";\`时，JVM虚拟机先创建字符串\`"world"\`，然后，把字符串变量\`s\`指向它：

\`\`\`
      s ──────────────┐
                      │
                      ▼
┌───┬───────────┬───┬───────────┬───┐
│   │  "hello"  │   │  "world"  │   │
└───┴───────────┴───┴───────────┴───┘
\`\`\`

原来的字符串\`"hello"\`还在，只是我们无法通过变量\`s\`访问它而已。因此，字符串的不可变是指字符串内容不可变。至于变量，可以一会指向字符串\`"hello"\`，一会指向字符串\`"world"\`。

理解了引用类型的“指向”后，试解释下面的代码输出：

\`\`\`java
// 字符串不可变
public class Main {
    public static void main(String[] args) {
        String s = "hello";
        String t = s;
        s = "world";
        System.out.println(t); // t是"hello"还是"world"?
    }
}
\`\`\`

### 空值null

引用类型的变量可以指向一个空值\`null\`，它表示不存在，即该变量不指向任何对象。例如：

\`\`\`java
String s1 = null; // s1是null
String s2 = s1; // s2也是null
String s3 = ""; // s3指向空字符串，不是null
\`\`\`

注意要区分空值\`null\`和空字符串\`""\`，空字符串是一个有效的字符串对象，它不等于\`null\`。

### 练习

请将一组int值视为字符的Unicode编码，然后将它们拼成一个字符串：

\`\`\`java
public class Main {
    public static void main(String[] args) {
        // 请将下面一组int值视为字符的Unicode码，把它们拼成一个字符串：
        int a = 72;
        int b = 105;
        int c = 65281;
        // FIXME:
        String s = a + b + c;
        System.out.println(s);
    }
}
\`\`\`

### 小结

Java的字符类型\`char\`是基本类型，字符串类型\`String\`是引用类型；

基本类型的变量是“持有”某个数值，引用类型的变量是“指向”某个对象；

引用类型的变量可以是空值\`null\`；

要区分空值\`null\`和空字符串\`""\`。

---

---`}],5:[{t:"if条件判断",u:"https://liaoxuefeng.com/books/java/quick-start/flow/if/",md:`# if条件判断

[  ](https://weibo.com/liaoxuefeng)

在Java程序中，如果要根据条件来决定是否执行某一段代码，就需要\`if\`语句。

\`if\`语句的基本语法是：

\`\`\`java
if (条件) {
    // 条件满足时执行
}
\`\`\`

根据\`if\`的计算结果（\`true\`还是\`false\`），JVM决定是否执行\`if\`语句块（即花括号{}包含的所有语句）。

让我们来看一个例子：

\`\`\`java
// 条件判断
public class Main {
    public static void main(String[] args) {
        int n = 70;
        if (n >= 60) {
            System.out.println("及格了");
        }
        System.out.println("END");
    }
}
\`\`\`

当条件\`n >= 60\`计算结果为\`true\`时，\`if\`语句块被执行，将打印\`"及格了"\`，否则，\`if\`语句块将被跳过。修改\`n\`的值可以看到执行效果。

注意到\`if\`语句包含的块可以包含多条语句：

\`\`\`java
// 条件判断
public class Main {
    public static void main(String[] args) {
        int n = 70;
        if (n >= 60) {
            System.out.println("及格了");
            System.out.println("恭喜你");
        }
        System.out.println("END");
    }
}
\`\`\`

当\`if\`语句块只有一行语句时，可以省略花括号{}：

\`\`\`java
// 条件判断
public class Main {
    public static void main(String[] args) {
        int n = 70;
        if (n >= 60)
            System.out.println("及格了");
        System.out.println("END");
    }
}
\`\`\`

但是，省略花括号并不总是一个好主意。假设某个时候，突然想给\`if\`语句块增加一条语句时：

\`\`\`java
// 条件判断
public class Main {
    public static void main(String[] args) {
        int n = 50;
        if (n >= 60)
            System.out.println("及格了");
            System.out.println("恭喜你"); // 注意这条语句不是if语句块的一部分
        System.out.println("END");
    }
}
\`\`\`

由于使用缩进格式，很容易把两行语句都看成\`if\`语句的执行块，但实际上只有第一行语句是\`if\`的执行块。在使用git这些版本控制系统自动合并时更容易出问题，所以不推荐忽略花括号的写法。

### else

\`if\`语句还可以编写一个\`else { ... }\`，当条件判断为\`false\`时，将执行\`else\`的语句块：

\`\`\`java
// 条件判断
public class Main {
    public static void main(String[] args) {
        int n = 70;
        if (n >= 60) {
            System.out.println("及格了");
        } else {
            System.out.println("挂科了");
        }
        System.out.println("END");
    }
}
\`\`\`

修改上述代码\`n\`的值，观察\`if\`条件为\`true\`或\`false\`时，程序执行的语句块。

注意，\`else\`不是必须的。

还可以用多个\`if ... else if ...\`串联。例如：

\`\`\`java
// 条件判断
public class Main {
    public static void main(String[] args) {
        int n = 70;
        if (n >= 90) {
            System.out.println("优秀");
        } else if (n >= 60) {
            System.out.println("及格了");
        } else {
            System.out.println("挂科了");
        }
        System.out.println("END");
    }
}
\`\`\`

串联的效果其实相当于：

\`\`\`java
if (n >= 90) {
    // n >= 90为true:
    System.out.println("优秀");
} else {
    // n >= 90为false:
    if (n >= 60) {
        // n >= 60为true:
        System.out.println("及格了");
    } else {
        // n >= 60为false:
        System.out.println("挂科了");
    }
}
\`\`\`

在串联使用多个\`if\`时，要*特别注意*判断顺序。观察下面的代码：

\`\`\`java
// 条件判断
public class Main {
    public static void main(String[] args) {
        int n = 100;
        if (n >= 60) {
            System.out.println("及格了");
        } else if (n >= 90) {
            System.out.println("优秀");
        } else {
            System.out.println("挂科了");
        }
    }
}
\`\`\`

执行发现，\`n = 100\`时，满足条件\`n >= 90\`，但输出的不是\`"优秀"\`，而是\`"及格了"\`，原因是\`if\`语句从上到下执行时，先判断\`n >= 60\`成功后，后续\`else\`不再执行，因此，\`if (n >= 90)\`没有机会执行了。

正确的方式是按照判断范围从大到小依次判断：

\`\`\`java
// 从大到小依次判断：
if (n >= 90) {
    // ...
} else if (n >= 60) {
    // ...
} else {
    // ...
}
\`\`\`

或者改写成从小到大依次判断：

\`\`\`java
// 从小到大依次判断：
if (n < 60) {
    // ...
} else if (n < 90) {
    // ...
} else {
    // ...
}
\`\`\`

使用\`if\`时，还要特别注意边界条件。例如：

\`\`\`java
// 条件判断
public class Main {
    public static void main(String[] args) {
        int n = 90;
        if (n > 90) {
            System.out.println("优秀");
        } else if (n >= 60) {
            System.out.println("及格了");
        } else {
            System.out.println("挂科了");
        }
    }
}
\`\`\`

假设我们期望90分或更高为“优秀”，上述代码输出的却是“及格”，原因是\`>\`和\`>=\`效果是不同的。

前面讲过了浮点数在计算机中常常无法精确表示，并且计算可能出现误差，因此，判断浮点数相等用\`==\`判断不靠谱：

\`\`\`java
// 条件判断
public class Main {
    public static void main(String[] args) {
        double x = 1 - 9.0 / 10;
        if (x == 0.1) {
            System.out.println("x is 0.1");
        } else {
            System.out.println("x is NOT 0.1");
        }
    }
}
\`\`\`

正确的方法是利用差值小于某个临界值来判断：

\`\`\`java
// 条件判断
public class Main {
    public static void main(String[] args) {
        double x = 1 - 9.0 / 10;
        if (Math.abs(x - 0.1) < 0.00001) {
            System.out.println("x is 0.1");
        } else {
            System.out.println("x is NOT 0.1");
        }
    }
}
\`\`\`

### 判断引用类型相等

在Java中，判断值类型的变量是否相等，可以使用\`==\`运算符。但是，判断引用类型的变量是否相等，\`==\`表示“引用是否相等”，或者说，是否指向同一个对象。例如，下面的两个String类型，它们的内容是相同的，但是，分别指向不同的对象，用\`==\`判断，结果为\`false\`：

\`\`\`java
// 条件判断
public class Main {
    public static void main(String[] args) {
        String s1 = "hello";
        String s2 = "HELLO".toLowerCase();
        System.out.println(s1);
        System.out.println(s2);
        if (s1 == s2) {
            System.

……（中间部分略）……

## 小结

\`if ... else\`可以做条件判断，\`else\`是可选的；

不推荐省略花括号\`{}\`；

多个\`if ... else\`串联要特别注意判断顺序；

要注意\`if\`的边界条件；

要注意浮点数判断相等不能直接用\`==\`运算符；

引用类型判断内容相等要使用\`equals()\`，注意避免\`NullPointerException\`。

---

---`},{t:"switch多重选择",u:"https://liaoxuefeng.com/books/java/quick-start/flow/switch/index.html",md:'# switch多重选择\n[](https://weibo.com/liaoxuefeng)\n[廖雪峰](https://weibo.com/liaoxuefeng) [](https://github.com/michaelliao) [](https://weibo.com/liaoxuefeng) [](https://zhihu.com/people/liaoxuefeng) [](https://twitter.com/liaoxuefeng)\n## 编译检查\n使用IDE时，可以自动检查是否漏写了 `break` 语句和 `default` 语句，方法是打开IDE的编译检查。\n在Eclipse中，选择 `Preferences` - `Java` - `Compiler` - `Errors/Warnings` - `Potential programming problems` ，将以下检查标记为Warning：\n* \'switch\' is missing \'default\' case：缺少 `default` 语句时警告；\n* \'switch\' case fall-through：某个 `case` 缺少 `break` 时警告。\n在Idea中，选择 `Preferences` - `Editor` - `Inspections` - `Java` - `Control flow issues` ，将以下检查标记为Warning：\n* \'switch\' statement without \'default\' branch：缺少 `default` 语句时警告；\n* Fallthrough in \'switch\' statement：某个 `case` 缺少 `break` 时警告。\n当 `switch` 语句存在问题时，即可在IDE中获得警告提示。\nswitch-note\n\n## switch表达式\n使用 `switch` 时，如果遗漏了 `break` ，就会造成严重的逻辑错误，而且不易在源代码中发现错误。从Java 12开始， `switch` 语句升级为更简洁的表达式语法，使用类似模式匹配（Pattern Matching）的方法，保证只有一种路径会被执行，并且不需要 `break` 语句：\n\n...\n\n注意新语法使用 `->` ，如果有多条语句，需要用 `{}` 括起来。不要写 `break` 语句，因为新语法只会执行匹配的语句， _没有_ 穿透效应。\n很多时候，我们还可能用 `switch` 语句给某个变量赋值。例如：\n```\nint  opt;\n switch  (fruit) {\n case "apple" :\n    opt =  1 ;\n     break ;\n case "pear" :\n case "mango" :\n    opt =  2 ;\n     break ;\n default :\n    opt =  0 ;\n     break ;\n}\n```\n使用新的 `switch` 语法，不但不需要 `break` ，还可以直接返回值。把上面的代码改写如下：\n```\n// switch public class Main  {\n     public static void main (String[] args)  {\n         String fruit = "apple" ;\n         int opt = switch  (fruit) {\n             case "apple"  ->  1 ;\n             case "pear" ,  "mango"  ->  2 ;\n             default  ->  0 ;\n        };  // 注意赋值语句要以;结束 \n        System.out.println( "opt = "  + opt);\n    }\n}\n```\n这样可以获得更简洁的代码。\n\n## yield\n大多数时候，在 `switch` 表达式内部，我们会返回简单的值。\n但是，如果需要复杂的语句，我们也可以写很多语句，放到 `{...}` 里，然后，用 `yield` 返回一个值作为 `switch` 语句的返回值：\n```\n// yield public class Main  {\n     public static void main (String[] args)  {\n         String fruit = "orange" ;\n         int opt = switch  (fruit) {\n             case "apple"  ->  1 ;\n             case "pear" ,  "mango"  ->  2 ;\n             default  -> {\n                 int code =  fruit.hashCode();\n                 yield  code;  // switch语句返回值 \n            }\n        };\n        System.out.println( "opt = "  + opt);\n    }\n}\n```\n\n## 练习\n使用 `switch` 实现一个简单的石头、剪子、布游戏。\n下载练习\n\n## 小结\n`switch` 语句可以做多重选择，然后执行匹配的 `case` 语句后续代码；\n`switch` 的计算结果必须是整型、字符串或枚举类型；\n注意千万不要漏写 `break` ，建议打开 `fall-through` 警告；\n总是写上 `default` ，建议打开 `missing default` 警告；\n从Java 14开始， `switch` 语句正式升级为表达式，不再需要 `break` ，并且允许使用 `yield` 返回值。\nif条件判断\nwhile循环'},{t:"while循环",u:"https://liaoxuefeng.com/books/java/quick-start/flow/while/index.html",md:`# while循环
[](https://weibo.com/liaoxuefeng)
[廖雪峰](https://weibo.com/liaoxuefeng) [](https://github.com/michaelliao) [](https://weibo.com/liaoxuefeng) [](https://zhihu.com/people/liaoxuefeng) [](https://twitter.com/liaoxuefeng)
## 小结
\`while\` 循环先判断循环条件是否满足，再执行循环语句；
\`while\` 循环可能一次都不执行；
编写循环时要注意循环条件，并避免死循环。
switch多重选择
do while循环`}],6:[{t:"for循环",u:"https://liaoxuefeng.com/books/java/quick-start/flow/for/index.html",md:`# for循环

[  ](https://weibo.com/liaoxuefeng)

除了\`while\`和\`do while\`循环，Java使用最广泛的是\`for\`循环。

\`for\`循环的功能非常强大，它使用计数器实现循环。\`for\`循环会先初始化计数器，然后，在每次循环前检测循环条件，在每次循环后更新计数器。计数器变量通常命名为\`i\`。

我们把1到100求和用\`for\`循环改写一下：

\`\`\`java
// for
public class Main {
    public static void main(String[] args) {
        int sum = 0;
        for (int i=1; i<=100; i++) {
            sum = sum + i;
        }
        System.out.println(sum);
    }
}
\`\`\`

在\`for\`循环执行前，会先执行初始化语句\`int i=1\`，它定义了计数器变量\`i\`并赋初始值为\`1\`，然后，循环前先检查循环条件\`i<=100\`，循环后自动执行\`i++\`，因此，和\`while\`循环相比，\`for\`循环把更新计数器的代码统一放到了一起。在\`for\`循环的循环体内部，不需要去更新变量\`i\`。

因此，\`for\`循环的用法是：

\`\`\`java
for (初始条件; 循环检测条件; 循环后更新计数器) {
    // 执行语句
}
\`\`\`

如果我们要对一个整型数组的所有元素求和，可以用\`for\`循环实现：

\`\`\`java
// for
public class Main {
    public static void main(String[] args) {
        int[] ns = { 1, 4, 9, 16, 25 };
        int sum = 0;
        for (int i=0; i<ns.length; i++) {
            System.out.println("i = " + i + ", ns[i] = " + ns[i]);
            sum = sum + ns[i];
        }
        System.out.println("sum = " + sum);
    }
}
\`\`\`

上面代码的循环条件是\`i<ns.length\`。因为\`ns\`数组的长度是\`5\`，因此，当循环\`5\`次后，\`i\`的值被更新为\`5\`，就不满足循环条件，因此\`for\`循环结束。

 思考

如果把循环条件改为i<=ns.length，会出现什么问题？

注意\`for\`循环的初始化计数器总是会被执行，并且\`for\`循环也可能循环0次。

使用\`for\`循环时，千万不要在循环体内修改计数器！在循环体中修改计数器常常导致莫名其妙的逻辑错误。对于下面的代码：

\`\`\`java
// for
public class Main {
    public static void main(String[] args) {
        int[] ns = { 1, 4, 9, 16, 25 };
        for (int i=0; i<ns.length; i++) {
            System.out.println(ns[i]);
            i = i + 1;
        }
    }
}
\`\`\`

虽然不会报错，但是，数组元素只打印了一半，原因是循环内部的\`i = i + 1\`导致了计数器变量每次循环实际上加了\`2\`（因为\`for\`循环还会自动执行\`i++\`）。因此，在\`for\`循环中，不要修改计数器的值。计数器的初始化、判断条件、每次循环后的更新条件统一放到\`for()\`语句中可以一目了然。

如果希望只访问索引号为偶数的数组元素，应该把\`for\`循环改写为：

\`\`\`java
int[] ns = { 1, 4, 9, 16, 25 };
for (int i=0; i<ns.length; i=i+2) {
    System.out.println(ns[i]);
}
\`\`\`

通过更新计数器的语句\`i=i+2\`就达到了这个效果，从而避免了在循环体内去修改变量\`i\`。

使用\`for\`循环时，计数器变量\`i\`要尽量定义在\`for\`循环中：

\`\`\`java
int[] ns = { 1, 4, 9, 16, 25 };
for (int i=0; i<ns.length; i++) {
    System.out.println(ns[i]);
}
// 无法访问i
int n = i; // compile error!
\`\`\`

如果变量\`i\`定义在\`for\`循环外：

\`\`\`java
int[] ns = { 1, 4, 9, 16, 25 };
int i;
for (i=0; i<ns.length; i++) {
    System.out.println(ns[i]);
}
// 仍然可以使用i
int n = i;
\`\`\`

那么，退出\`for\`循环后，变量\`i\`仍然可以被访问，这就破坏了变量应该把访问范围缩到最小的原则。

### 灵活使用for循环

\`for\`循环还可以缺少初始化语句、循环条件和每次循环更新语句，例如：

\`\`\`java
// 不设置结束条件:
for (int i=0; ; i++) {
    ...
}
\`\`\`

\`\`\`java
// 不设置结束条件和更新语句:
for (int i=0; ;) {
    ...
}
\`\`\`

\`\`\`java
// 什么都不设置:
for (;;) {
    ...
}
\`\`\`

通常不推荐这样写，但是，某些情况下，是可以省略\`for\`循环的某些语句的。

### for each循环

\`for\`循环经常用来遍历数组，因为通过计数器可以根据索引来访问数组的每个元素：

\`\`\`java
int[] ns = { 1, 4, 9, 16, 25 };
for (int i=0; i<ns.length; i++) {
    System.out.println(ns[i]);
}
\`\`\`

但是，很多时候，我们实际上真正想要访问的是数组每个元素的值。Java还提供了另一种\`for each\`循环，它可以更简单地遍历数组：

\`\`\`java
// for each
public class Main {
    public static void main(String[] args) {
        int[] ns = { 1, 4, 9, 16, 25 };
        for (int n : ns) {
            System.out.println(n);
        }
    }
}
\`\`\`

和\`for\`循环相比，\`for each\`循环的变量n不再是计数器，而是直接对应到数组的每个元素。\`for each\`循环的写法也更简洁。但是，\`for each\`循环无法指定遍历顺序，也无法获取数组的索引。

除了数组外，\`for each\`循环能够遍历所有“可迭代”的数据类型，包括后面会介绍的\`List\`、\`Map\`等。

### 练习1

给定一个数组，请用\`for\`循环倒序输出每一个元素：

\`\`\`java
// for
public class Main {
    public static void main(String[] args) {
        int[] ns = { 1, 4, 9, 16, 25 };
        for (int i=?; ???; ???) {
            System.out.println(ns[i]);
        }
    }
}
\`\`\`

### 练习2

利用\`for each\`循环对数组每个元素求和：

\`\`\`java
// for each
public class Main {
    public static void main(String[] args) {
        int[] ns = { 1, 4, 9, 16, 25 };
        int sum = 0;
        for (???) {
            // TODO
        }
        System.out.println(sum); // 55
    }
}
\`\`\`

### 练习3

圆周率π可以使用公式计算：

请利用\`for\`循环计算π：

\`\`\`java
// for
public class Main {
    public static void main(String[] args) {
        double pi = 0;
        for (???) {
            // TODO
        }
        System.out.println(pi);
    }
}
\`\`\`

### 小结

\`for\`循环通过计数器可以实现复杂循环；

\`for each\`循环可以直接遍历数组的每个元素；

最佳实践：计数器变量定义在\`for\`循环内部，循环体内部不修改计数器；

---

---`},{t:"break和continue",u:"https://liaoxuefeng.com/books/java/quick-start/flow/break-continue/index.html",md:'# break和continue\n[](https://weibo.com/liaoxuefeng)\n[廖雪峰](https://weibo.com/liaoxuefeng) [](https://github.com/michaelliao) [](https://weibo.com/liaoxuefeng) [](https://zhihu.com/people/liaoxuefeng) [](https://twitter.com/liaoxuefeng)\n## break\n在循环过程中，可以使用 `break` 语句跳出当前循环。我们来看一个例子：\n```\n// break public class Main  {\n     public static void main (String[] args)  {\n         int sum = 0 ;\n         for  ( int  i= 1 ; ; i++) {\n            sum = sum + i;\n             if  (i ==  100 ) {\n                 break ;\n            }\n        }\n        System.out.println(sum);\n    }\n}\n```\n使用 `for` 循环计算从1到100时，我们并没有在 `for()` 中设置循环退出的检测条件。但是，在循环内部，我们用 `if` 判断，如果 `i==100` ，就通过 `break` 退出循环。\n因此， `break` 语句通常都是配合 `if` 语句使用。要特别注意， `break` 语句总是跳出自己所在的那一层循环。例如：\n```\n// break public class Main  {\n     public static void main (String[] args)  {\n         for  ( int  i= 1 ; i<= 10 ; i++) {\n            System.out.println( "i = "  + i);\n             for  ( int  j= 1 ; j<= 10 ; j++) {\n                System.out.println( "j = "  + j);\n                 if  (j >= i) {\n                     break ;\n                }\n            }\n             // break跳到这里 \n            System.out.println( "breaked" );\n        }\n    }\n}\n```\n上面的代码是两个 `for` 循环嵌套。因为 `break` 语句位于内层的 `for` 循环，因此，它会跳出内层 `for` 循环，但不会跳出外层 `for` 循环。\n\n## continue\n`break` 会跳出当前循环，也就是整个循环都不会执行了。而 `continue` 则是提前结束本次循环，直接继续执行下次循环。我们看一个例子：\n\n...\n\n注意观察 `continue` 语句的效果。当 `i` 为奇数时，完整地执行了整个循环，因此，会打印 `begin i=1` 和 `end i=1` 。在i为偶数时， `continue` 语句会提前结束本次循环，因此，会打印 `begin i=2` 但不会打印 `end i=2` 。\n在多层嵌套的循环中， `continue` 语句同样是结束本次自己所在的循环。\n\n## 小结\n`break` 语句可以跳出当前循环；\n`break` 语句通常配合 `if` ，在满足条件时提前结束整个循环；\n`break` 语句总是跳出最近的一层循环；\n`continue` 语句可以提前结束本次循环；\n`continue` 语句通常配合 `if` ，在满足条件时提前结束本次循环。\nfor循环\n数组操作'},{t:"遍历数组",u:"https://liaoxuefeng.com/books/java/quick-start/array-op/loop/index.html",md:'# 遍历数组\n我们在Java程序基础里介绍了数组这种数据类型。有了数组，我们还需要来操作它。而数组最常见的一个操作就是遍历。\n通过 `for` 循环就可以遍历数组。因为数组的每个元素都可以通过索引来访问，因此，使用标准的 `for` 循环可以完成一个数组的遍历：\n```\n// 遍历数组 public class Main  {\n     public static void main (String[] args)  {\n         int [] ns = {  1 ,  4 ,  9 ,  16 ,  25  };\n         for  ( int  i= 0 ; i<ns.length; i++) {\n             int n =  ns[i];\n            System.out.println(n);\n        }\n    }\n}\n```\n为了实现 `for` 循环遍历，初始条件为 `i=0` ，因为索引总是从 `0` 开始，继续循环的条件为 `i<ns.length` ，因为当 `i=ns.length` 时， `i` 已经超出了索引范围（索引范围是 `0` ~ `ns.length-1` ），每次循环后， `i++` 。\n第二种方式是使用 `for each` 循环，直接迭代数组的每个元素：\n```\n// 遍历数组 public class Main  {\n     public static void main (String[] args)  {\n         int [] ns = {  1 ,  4 ,  9 ,  16 ,  25  };\n         for  ( int  n : ns) {\n            System.out.println(n);\n        }\n    }\n}\n```\n注意：在 `for (int n : ns)` 循环中，变量 `n` 直接拿到 `ns` 数组的元素，而不是索引。\n显然 `for each` 循环更加简洁。但是， `for each` 循环无法拿到数组的索引，因此，到底用哪一种 `for` 循环，取决于我们的需要。\n\n## 打印数组内容\n直接打印数组变量，得到的是数组在JVM中的引用地址：\n```\nint [] ns = {  1 ,  1 ,  2 ,  3 ,  5 ,  8  };\nSystem.out.println(ns);  // 类似 [I@7852e922\n```\n这并没有什么意义，因为我们希望打印的数组的元素内容。因此，使用 `for each` 循环来打印它：\n```\nint [] ns = {  1 ,  1 ,  2 ,  3 ,  5 ,  8  };\n for  ( int  n : ns) {\n    System.out.print(n +  ", " );\n}\n```\n使用 `for each` 循环打印也很麻烦。幸好Java标准库提供了 `Arrays.toString()` ，可以快速打印数组内容：\n```\n// 遍历数组 import  java.util.Arrays;\n\n public class Main  {\n     public static void main (String[] args)  {\n         int [] ns = {  1 ,  1 ,  2 ,  3 ,  5 ,  8  };\n        System.out.println(Arrays.toString(ns));\n    }\n}\n```\n\n## 练习\n请按倒序遍历数组并打印每个元素：\n```\npublic class Main  {\n     public static void main (String[] args)  {\n         int [] ns = {  1 ,  4 ,  9 ,  16 ,  25  };\n         // 倒序打印数组元素: for  (???) {\n            System.out.println(???);\n        }\n    }\n}\n```\n下载练习\n\n## 小结\n遍历数组可以使用 `for` 循环， `for` 循环可以访问数组索引， `for each` 循环直接迭代每个数组元素，但无法获取索引；\n使用 `Arrays.toString()` 可以快速获取数组内容。\n数组操作\n数组排序'}],7:[{t:"数组排序",u:"https://liaoxuefeng.com/books/java/quick-start/array-op/sort/index.html",md:`# 数组排序
\`\`\`
// 冒泡排序 import  java.util.Arrays;

 public class Main  {
     public static void main (String[] args)  {
         int [] ns = {  28 ,  12 ,  89 ,  73 ,  65 ,  18 ,  96 ,  50 ,  8 ,  36  };
         // 排序前: 
        System.out.println(Arrays.toString(ns));
         for  ( int i = 0 ; i < ns.length -  1 ; i++) {
             for  ( int j = 0 ; j < ns.length - i -  1 ; j++) {
                 if  (ns[j] > ns[j+ 1 ]) {
                     // 交换ns[j]和ns[j+1]: int tmp =  ns[j];
                    ns[j] = ns[j+ 1 ];
                    ns[j+ 1 ] = tmp;
                }
            }
        }
         // 排序后: 
        System.out.println(Arrays.toString(ns));
    }
}
\`\`\`

...

\`\`\`
// 排序 import  java.util.Arrays;

 public class Main  {
     public static void main (String[] args)  {
         int [] ns = {  28 ,  12 ,  89 ,  73 ,  65 ,  18 ,  96 ,  50 ,  8 ,  36  };
        Arrays.sort(ns);
        System.out.println(Arrays.toString(ns));
    }
}
\`\`\`

...

\`\`\`
      ┌───┬───┬───┬───┐
ns───▶│ 3 │ 5 │ 6 │ 9 │
      └───┴───┴───┴───┘
\`\`\`
即变量 \`ns\` 指向的数组内容已经被改变了。
如果对一个字符串数组进行排序，例如：
\`\`\`
String[] ns = {  "banana" ,  "apple" ,  "pear"  };
\`\`\`
排序前，这个数组在内存中表示如下：

...

## 练习
\`\`\`
// 降序排序 import  java.util.Arrays;

 public class Main  {
     public static void main (String[] args)  {
         int [] ns = {  28 ,  12 ,  89 ,  73 ,  65 ,  18 ,  96 ,  50 ,  8 ,  36  };
         // 排序前: 
        System.out.println(Arrays.toString(ns));
         //  TODO: // 排序后: 
        System.out.println(Arrays.toString(ns));
         if  (Arrays.toString(ns).equals( "[96, 89, 73, 65, 50, 36, 28, 18, 12, 8]" )) {
            System.out.println( "测试成功" );
        }  else  {
            System.out.println( "测试失败" );
        }
    }
}
\`\`\``},{t:"多维数组",u:"https://liaoxuefeng.com/books/java/quick-start/array-op/multi-dim/index.html",md:`# Java教程
[1. 简介](https://liaoxuefeng.com/books/java/introduction/index.html)
[2. 快速入门](https://liaoxuefeng.com/books/java/quick-start/index.html)
[2.1. Java历史](https://liaoxuefeng.com/books/java/quick-start/history/index.html)

...

[2.2.3. 使用IDE](https://liaoxuefeng.com/books/java/quick-start/dev-env/ide/index.html)
[2.3. Java程序基础](https://liaoxuefeng.com/books/java/quick-start/basic/index.html)
[2.3.1. Java程序基本结构](https://liaoxuefeng.com/books/java/quick-start/basic/program-structure/index.html)
[2.3.2. 变量和数据类型](https://liaoxuefeng.com/books/java/quick-start/basic/var-type/index.html)
[2.3.3. 整数运算](https://liaoxuefeng.com/books/java/quick-start/basic/integer/index.html)
[2.3.4. 浮点数运算](https://liaoxuefeng.com/books/java/quick-start/basic/float/index.html)
[2.3.5. 布尔运算](https://liaoxuefeng.com/books/java/quick-start/basic/boolean/index.html)
[2.3.6. 字符和字符串](https://liaoxuefeng.com/books/java/quick-start/basic/string/index.html)
[2.3.7. 数组类型](https://liaoxuefeng.com/books/java/quick-start/basic/array/index.html)

...

[2.4.3. switch多重选择](https://liaoxuefeng.com/books/java/quick-start/flow/switch/index.html)
[2.4.4. while循环](https://liaoxuefeng.com/books/java/quick-start/flow/while/index.html)
[2.4.5. do while循环](https://liaoxuefeng.com/books/java/quick-start/flow/do-while/index.html)
[2.4.6. for循环](https://liaoxuefeng.com/books/java/quick-start/flow/for/index.html)
[2.4.7. break和continue](https://liaoxuefeng.com/books/java/quick-start/flow/break-continue/index.html)
[2.5. 数组操作](https://liaoxuefeng.com/books/java/quick-start/array-op/index.html)
[2.5.1. 遍历数组](https://liaoxuefeng.com/books/java/quick-start/array-op/loop/index.html)
[2.5.2. 数组排序](https://liaoxuefeng.com/books/java/quick-start/array-op/sort/index.html)
[2.5.3. 多维数组](https://liaoxuefeng.com/books/java/quick-start/array-op/multi-dim/index.html)
[2.5.4. 命令行参数](https://liaoxuefeng.com/books/java/quick-start/array-op/args/index.html)
[3. 面向对象编程](https://liaoxuefeng.com/books/java/oop/index.html)
[3.1. 面向对象基础](https://liaoxuefeng.com/books/java/oop/basic/index.html)
[3.1.1. 方法](https://liaoxuefeng.com/books/java/oop/basic/method/index.html)
[3.1.2. 构造方法](https://liaoxuefeng.com/books/java/oop/basic/constructor/index.html)
[3.1.3. 方法重载](https://liaoxuefeng.com/books/java/oop/basic/overload/index.html)
[3.1.4. 继承](https://liaoxuefeng.com/books/java/oop/basic/inherit/index.html)
[3.1.5. 多态](https://liaoxuefeng.com/books/java/oop/basic/polymorphic/index.html)
[3.1.6. 抽象类](https://liaoxuefeng.com/books/java/oop/basic/abstract-class/index.html)
[3.1.7. 接口](https://liaoxuefeng.com/books/java/oop/basic/interface/index.html)
[3.1.8. 静态字段和静态方法](https://liaoxuefeng.com/books/java/oop/basic/static/index.html)
[3.1.9. 包](https://liaoxuefeng.com/books/java/oop/basic/package/index.html)
[3.1.10. 作用域](https://liaoxuefeng.com/books/java/oop/basic/scope/index.html)
[3.1.11. 内部类](https://liaoxuefeng.com/books/java/oop/basic/inner-class/index.html)
[3.1.12. classpath和jar](https://liaoxuefeng.com/books/java/oop/basic/classpath-jar/index.html)
[3.1.13. class版本](https://liaoxuefeng.com/books/java/oop/basic/class-version/index.html)
[3.1.14. 模块](https://liaoxuefeng.com/books/java/oop/basic/module/index.html)
[3.2. Java核心类](https://liaoxuefeng.com/books/java/oop/core/index.html)
[3.2.1. 字符串和编码](https://liaoxuefeng.com/books/java/oop/core/string-encoding/index.html)
[3.2.2. StringBuilder](https://liaoxuefeng.com/books/java/oop/core/string-builder/index.html)
[3.2.3. StringJoiner](https://liaoxuefeng.com/books/java/oop/core/string-joiner/index.html)
[3.2.4. 包装类型](https://liaoxuefeng.com/books/java/oop/core/wrapper/index.html)
[3.2.5. JavaBean](https://liaoxuefeng.com/books/java/oop/core/javabean/index.html)
[3.2.6. 枚举类](https://liaoxuefeng.com/books/java/oop/core/enum/index.html)
[3.2.7. 记录类](https://liaoxuefeng.com/books/java/oop/core/record/index.html)
[3.2.8. BigInteger](https://liaoxuefeng.com/books/java/oop/core/biginteger/index.html)
[3.2.9. BigDecimal](https://liaoxuefeng.com/books/java/oop/core/bigdecimal/index.html)
[3.2.10. 常用工具类](https://liaoxuefeng.com/books/java/oop/core/utils/index.html)
[4. 异常处理](https://liaoxuefeng.com/books/java/exception/index.html)
[4.1. Java的异常](https://liaoxuefeng.com/books/java/exception/java-exception/index.html)

...

[7.7. 泛型和反射](https://liaoxuefeng.com/books/java/generics/reflection/index.html)
[8. 集合](https://liaoxuefeng.com/books/java/collection/index.html)
[8.1. Java集合简介](https://liaoxuefeng.com/books/java/collection/quick-start/index.html)
[8.2. 使用List](https://liaoxuefeng.com/books/java/collection/list/index.html)
[8.3. 编写equals方法](https://liaoxuefeng.com/books/java/collection/equals/index.html)
[8.4. 使用Map](https://liaoxuefeng.com/books/java/collection/map/index.html)
[8.5. 编写hashCode方法](https://liaoxuefeng.com/books/java/collection/

……（中间部分略）……

## 小结
二维数组就是数组的数组，三维数组就是二维数组的数组；
多维数组的每个数组元素长度都不要求相同；
打印多维数组可以使用 \`Arrays.deepToString()\` ；
最常见的多维数组是二维数组，访问二维数组的一个元素使用 \`array[row][col]\` 。
[数组排序](https://liaoxuefeng.com/books/java/quick-start/array-op/sort/index.html)
[命令行参数](https://liaoxuefeng.com/books/java/quick-start/array-op/args/index.html)`}],8:[{t:"方法",u:"https://liaoxuefeng.com/books/java/oop/basic/method/index.html",md:`# Java教程
[1. 简介](https://liaoxuefeng.com/books/java/introduction/index.html)
[2. 快速入门](https://liaoxuefeng.com/books/java/quick-start/index.html)
[2.1. Java历史](https://liaoxuefeng.com/books/java/quick-start/history/index.html)
[2.2. 搭建开发环境](https://liaoxuefeng.com/books/java/quick-start/dev-env/index.html)
[2.2.1. 安装JDK](https://liaoxuefeng.com/books/java/quick-start/dev-env/install-jdk/index.html)
[2.2.2. 第一个Java程序](https://liaoxuefeng.com/books/java/quick-start/dev-env/first-program/index.html)
[2.2.3. 使用IDE](https://liaoxuefeng.com/books/java/quick-start/dev-env/ide/index.html)
[2.3. Java程序基础](https://liaoxuefeng.com/books/java/quick-start/basic/index.html)
[2.3.1. Java程序基本结构](https://liaoxuefeng.com/books/java/quick-start/basic/program-structure/index.html)
[2.3.2. 变量和数据类型](https://liaoxuefeng.com/books/java/quick-start/basic/var-type/index.html)
[2.3.3. 整数运算](https://liaoxuefeng.com/books/java/quick-start/basic/integer/index.html)
[2.3.4. 浮点数运算](https://liaoxuefeng.com/books/java/quick-start/basic/float/index.html)
[2.3.5. 布尔运算](https://liaoxuefeng.com/books/java/quick-start/basic/boolean/index.html)
[2.3.6. 字符和字符串](https://liaoxuefeng.com/books/java/quick-start/basic/string/index.html)
[2.3.7. 数组类型](https://liaoxuefeng.com/books/java/quick-start/basic/array/index.html)
[2.4. 流程控制](https://liaoxuefeng.com/books/java/quick-start/flow/index.html)
[2.4.1. 输入和输出](https://liaoxuefeng.com/books/java/quick-start/flow/input-output/index.html)
[2.4.2. if条件判断](https://liaoxuefeng.com/books/java/quick-start/flow/if/index.html)
[2.4.3. switch多重选择](https://liaoxuefeng.com/books/java/quick-start/flow/switch/index.html)
[2.4.4. while循环](https://liaoxuefeng.com/books/java/quick-start/flow/while/index.html)
[2.4.5. do while循环](https://liaoxuefeng.com/books/java/quick-start/flow/do-while/index.html)
[2.4.6. for循环](https://liaoxuefeng.com/books/java/quick-start/flow/for/index.html)
[2.4.7. break和continue](https://liaoxuefeng.com/books/java/quick-start/flow/break-continue/index.html)
[2.5. 数组操作](https://liaoxuefeng.com/books/java/quick-start/array-op/index.html)
[2.5.1. 遍历数组](https://liaoxuefeng.com/books/java/quick-start/array-op/loop/index.html)
[2.5.2. 数组排序](https://liaoxuefeng.com/books/java/quick-start/array-op/sort/index.html)
[2.5.3. 多维数组](https://liaoxuefeng.com/books/java/quick-start/array-op/multi-dim/index.html)
[2.5.4. 命令行参数](https://liaoxuefeng.com/books/java/quick-start/array-op/args/index.html)
[3. 面向对象编程](https://liaoxuefeng.com/books/java/oop/index.html)
[3.1. 面向对象基础](https://liaoxuefeng.com/books/java/oop/basic/index.html)
[3.1.1. 方法](https://liaoxuefeng.com/books/java/oop/basic/method/index.html)
[3.1.2. 构造方法](https://liaoxuefeng.com/books/java/oop/basic/constructor/index.html)
[3.1.3. 方法重载](https://liaoxuefeng.com/books/java/oop/basic/overload/index.html)
[3.1.4. 继承](https://liaoxuefeng.com/books/java/oop/basic/inherit/index.html)
[3.1.5. 多态](https://liaoxuefeng.com/books/java/oop/basic/polymorphic/index.html)
[3.1.6. 抽象类](https://liaoxuefeng.com/books/java/oop/basic/abstract-class/index.html)
[3.1.7. 接口](https://liaoxuefeng.com/books/java/oop/basic/interface/index.html)
[3.1.8. 静态字段和静态方法](https://liaoxuefeng.com/books/java/oop/basic/static/index.html)
[3.1.9. 包](https://liaoxuefeng.com/books/java/oop/basic/package/index.html)
[3.1.10. 作用域](https://liaoxuefeng.com/books/java/oop/basic/scope/index.html)
[3.1.11. 内部类](https://liaoxuefeng.com/books/java/oop/basic/inner-class/index.html)
[3.1.12. classpath和jar](https://liaoxuefeng.com/books/java/oop/basic/classpath-jar/index.html)
[3.1.13. class版本](https://liaoxuefeng.com/books/java/oop/basic/class-version/index.html)
[3.1.14. 模块](https://liaoxuefeng.com/books/java/oop/basic/module/index.html)
[3.2. Java核心类](https://liaoxuefeng.com/books/java/oop/core/index.html)
[3.2.1. 字符串和编码](https://liaoxuefeng.com/books/java/oop/core/string-encoding/index.html)
[3.2.2. StringBuilder](https://liaoxuefeng.com/books/java/oop/core/string-builder/index.html)
[3.2.3. StringJoiner](https://liaoxuefeng.com/books/java/oop/core/string-joiner/index.html)
[3.2.4. 包装类型](https://liaoxuefeng.com/books/java/oop/core/wrapper/index.html)
[3.2.5. JavaBean](https://liaoxuefeng.com/books/java/oop/core/javabean/index.html)
[3.2.6. 枚举类](https://liaoxuefeng.com/books/java/oop/core/enum/index.html)
[3.2.7. 记录类](https://liaoxuefeng.com/books/java/oop/core/record/index.html)
[3.2.8. BigInteger](https://liaoxuefeng.com/books/java/oop/core/biginteger/index.html)
[3.2.9. BigDecimal](https://liaoxuefeng.com/books/java/oop/core/bigdecimal/index.html)

...

[5. 反射](https://liaoxuefeng.com/books/java/reflection/index.html)
[5.1. Class类](https://liaoxuefeng.com/books/java/reflection/class/index.html)
[5.2. 访问字段](https://liaoxuefeng.com/books/java/reflection/field/index.html)
[5.3. 调用方法](https://liaoxuefeng

……（中间部分略）……

## 小结
* 方法可以让外部代码安全地访问实例字段；
* 方法是一组执行语句，并且可以执行任意逻辑；
* 方法内部遇到return时返回，void表示不返回任何值（注意和返回null不同）；
* 外部代码通过public方法操作实例，内部代码可以调用private方法；
* 理解方法的参数绑定。
[面向对象基础](https://liaoxuefeng.com/books/java/oop/basic/index.html)
[构造方法](https://liaoxuefeng.com/books/java/oop/basic/constructor/index.html)`},{t:"方法重载",u:"https://liaoxuefeng.com/books/java/oop/basic/overload/index.html",md:`# 方法重载
\`\`\`
class Hello  {
     public void hello ()  {
        System.out.println( "Hello, world!" );
    }

     public void hello (String name)  {
        System.out.println( "Hello, "  + name +  "!" );
    }

     public void hello (String name,  int  age)  {
         if  (age <  18 ) {
            System.out.println( "Hi, "  + name +  "!" );
        }  else  {
            System.out.println( "Hello, "  + name +  "!" );
        }
    }
}
\`\`\`
这种方法名相同，但各自的参数不同，称为方法重载（ \`Overload\` ）。
注意：方法重载的返回值类型通常都是相同的。
方法重载的目的是，功能类似的方法使用同一名字，更容易记住，因此，调用起来更简单。
举个例子， \`String\` 类提供了多个重载方法 \`indexOf()\` ，可以查找子串：
* \`int indexOf(int ch)\` ：根据字符的Unicode码查找；
* \`int indexOf(String str)\` ：根据字符串查找；
* \`int indexOf(int ch, int fromIndex)\` ：根据字符查找，但指定起始位置；
* \`int indexOf(String str, int fromIndex)\` 根据字符串查找，但指定起始位置。
试一试：
\`\`\`
// String.indexOf() public class Main  {
     public static void main (String[] args)  {
         String s = "Test string" ;
         int n1 =  s.indexOf( 't' );
         int n2 =  s.indexOf( "st" );
         int n3 =  s.indexOf( "st" ,  4 );
        System.out.println(n1);
        System.out.println(n2);
        System.out.println(n3);
    }
}
\`\`\`

## 练习
给 \`Person\` 增加重载方法 \`setName(String, String)\` ：
\`\`\`
public class Main  {
     public static void main (String[] args)  {
         Person ming = new Person ();
         Person hong = new Person ();
        ming.setName( "Xiao Ming" );
         //  TODO:  给Person增加重载方法setName(String, String): 
        hong.setName( "Xiao" ,  "Hong" );
        System.out.println(ming.getName());
        System.out.println(hong.getName());
    }
}

 class Person  {
     private  String name;

     public  String  getName ()  {
         return  name;
    }

     public void setName (String name)  {
         this .name = name;
    }
}
\`\`\`

...

## 小结
方法重载是指多个方法的方法名相同，但各自的参数不同；
重载方法应该完成类似的功能，参考 \`String\` 的 \`indexOf()\` ；
重载方法返回值类型应该相同。
构造方法
继承`}],9:[{t:"字符串和编码",u:"https://liaoxuefeng.com/books/java/oop/core/string-encoding/index.html",md:'# 字符串和编码\n## String\n在Java中， `String` 是一个引用类型，它本身也是一个 `class` 。但是，Java编译器对 `String` 有特殊处理，即可以直接用 `"..."` 来表示一个字符串：\n```\nString s1 = "Hello!" ;\n```\n实际上字符串在 `String` 内部是通过一个 `char[]` 数组表示的，因此，按下面的写法也是可以的：\n```\nString s2 = new String ( new char [] { \'H\' ,  \'e\' ,  \'l\' ,  \'l\' ,  \'o\' ,  \'!\' });\n```\n因为 `String` 太常用了，所以Java提供了 `"..."` 这种字符串字面量表示方法。\nJava字符串的一个重要特点就是字符串 _不可变_ 。这种不可变性是通过内部的 `private final char[]` 字段，以及没有任何修改 `char[]` 的方法实现的。\n我们来看一个例子：\n```\n// String public class Main  {\n     public static void main (String[] args)  {\n         String s = "Hello" ;\n        System.out.println(s);\n        s = s.toUpperCase();\n        System.out.println(s);\n    }\n}\n```\n根据上面代码的输出，试解释字符串内容是否改变。\n\n...\n\n## 字符串比较\n```\n"Hello" .indexOf( "l" );  // 2 "Hello" .lastIndexOf( "l" );  // 3 "Hello" .startsWith( "He" );  // true "Hello" .endsWith( "lo" );  // true\n```\n提取子串的例子：\n```\n"Hello" .substring( 2 );  // "llo" "Hello" .substring( 2 ,  4 );  "ll"\n```\n注意索引号是从 `0` 开始的。\n\n...\n\n## 替换子串\n要在字符串中替换子串，有两种方法。一种是根据字符或字符串替换：\n```\nString s = "hello" ;\ns.replace( \'l\' ,  \'w\' );  // "hewwo"，所有字符\'l\'被替换为\'w\' \ns.replace( "ll" ,  "~~" );  // "he~~o"，所有子串"ll"被替换为"~~"\n```\n另一种是通过正则表达式替换：\n```\nString s = "A,,B;C ,D" ;\ns.replaceAll( "[\\\\,\\\\;\\\\s]+" ,  "," );  // "A,B,C,D"\n```\n上面的代码通过正则表达式，把匹配的子串统一替换为 `","` 。关于正则表达式的用法我们会在后面详细讲解。\n\n## 分割字符串\n要分割字符串，使用 `split()` 方法，并且传入的也是正则表达式：\n```\nString s = "A,B,C,D" ;\nString[] ss = s.split( "\\\\," );  // {"A", "B", "C", "D"}\n```\n\n## 拼接字符串\n拼接字符串使用静态方法 `join()` ，它用指定的字符串连接字符串数组：\n```\nString[] arr = { "A" ,  "B" ,  "C" };\n String s =  String.join( "***" , arr);  // "A***B***C"\n```\n\n## 格式化字符串\n字符串提供了 `formatted()` 方法和 `format()` 静态方法，可以传入其他参数，替换占位符，然后生成新的字符串：\n```\n// String public class Main  {\n     public static void main (String[] args)  {\n         String s = "Hi %s, your score is %d!" ;\n        System.out.println(s.formatted( "Alice" ,  80 ));\n        System.out.println(String.format( "Hi %s, your score is %.2f!" ,  "Bob" ,  59.5 ));\n    }\n}\n```\n有几个占位符，后面就传入几个参数。参数类型要和占位符一致。我们经常用这个方法来格式化信息。常用的占位符有：\n* `%s` ：显示字符串；\n* `%d` ：显示整数；\n* `%x` ：显示十六进制整数；\n* `%f` ：显示浮点数。\n占位符还可以带格式，例如 `%.2f` 表示显示两位小数。如果你不确定用啥占位符，那就始终用 `%s` ，因为 `%s` 可以显示任何数据类型。要查看完整的格式化语法，请参考 [JDK文档](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Formatter.html) 。\n\n## 类型转换\n要把任意基本类型或引用类型转换为字符串，可以使用静态方法 `valueOf()` 。这是一个重载方法，编译器会根据参数自动选择合适的方法：\n```\nString.valueOf( 123 );  // "123" \nString.valueOf( 45.67 );  // "45.67" \nString.valueOf( true );  // "true" \nString.valueOf( new Object ());  // 类似java.lang.Object@636be97c\n```\n要把字符串转换为其他类型，就需要根据情况。例如，把字符串转换为 `int` 类型：\n```\nint n1 =  Integer.parseInt( "123" );  // 123 int n2 =  Integer.parseInt( "ff" ,  16 );  // 按十六进制转换，255\n```\n把字符串转换为 `boolean` 类型：\n```\nboolean b1 =  Boolean.parseBoolean( "true" );  // true boolean b2 =  Boolean.parseBoolean( "FALSE" );  // false\n```\n要特别注意， `Integer` 有个 `getInteger(String)` 方法，它不是将字符串转换为 `int` ，而是把该字符串对应的系统变量转换为 `Integer` ：\n```\nInteger.getInteger( "java.version" );  // 版本号，11\n```\n\n## 转换为char[]\n`String` 和 `char[]` 类型可以互相转换，方法是：\n```\nchar [] cs =  "Hello" .toCharArray();  // String -> char[] String s = new String (cs);  // char[] -> String\n```\n如果修改了 `char[]` 数组， `String` 并不会改变：\n```\n// String <-> char[] public class Main  {\n     public static void main (String[] args)  {\n         char [] cs =  "Hello" .toCharArray();\n         String s = new String (cs);\n        System.out.println(s);\n        cs[ 0 ] =  \'X\' ;\n        System.out.println(s);\n    }\n}\n```\n\n...\n\n```\n// int[] import  java.util.Arrays;\n\n public class Main  {\n     public static void main (String[] args)  {\n         int [] scores =  new int [] {  88 ,  77 ,  51 ,  66  };\n         Score s = new Score (scores);\n        s.printScores();\n        scores[ 2 ] =  99 ;\n        s.printScores();\n    }\n}\n\n class Score  {\n     private int [] scores;\n     public Score ( int [] scores)  {\n         this .scores = scores;\n    }\n\n     public void printScores ()  {\n        System.out.println(Arrays.toString(scores));\n    }\n}\n```\n\n...\n\n## 小结\nJava字符串 `String` 是不可变对象；\n字符串操作不改变原字符串内容，而是返回新字符串；\n常用的字符串操作：提取子串、查找、替换、大小写转换等；\nJava使用Unicode编码表示 `String` 和 `char` ；\n转换编码就是将 `String` 和 `byte[]` 转换，需要指定编码；\n转换为 `byte[]` 时，始终优先考虑 `UTF-8` 编码。\nJava核心类\nStringBuilder'}],10:[{t:"StringBuilder",u:"https://liaoxuefeng.com/books/java/oop/core/string-builder/index.html",md:`# StringBuilder
[](https://weibo.com/liaoxuefeng)
[廖雪峰](https://weibo.com/liaoxuefeng) [](https://github.com/michaelliao) [](https://weibo.com/liaoxuefeng) [](https://zhihu.com/people/liaoxuefeng) [](https://twitter.com/liaoxuefeng)
## 练习
请使用 \`StringBuilder\` 构造一个 \`INSERT\` 语句：
\`\`\`
public class Main  {
     public static void main (String[] args)  {
        String[] fields = {  "name" ,  "position" ,  "salary"  };
         String table = "employee" ;
         String insert =  buildInsertSql(table, fields);
        System.out.println(insert);
         String s = "INSERT INTO employee (name, position, salary) VALUES (?, ?, ?)" ;
        System.out.println(s.equals(insert) ?  "测试成功"  :  "测试失败" );
    }

     static  String  buildInsertSql (String table, String[] fields)  {
         //  TODO: return "" ;
    }
}
\`\`\`
下载练习

## 小结
\`StringBuilder\` 是可变对象，用来高效拼接字符串；
\`StringBuilder\` 可以支持链式操作，实现链式操作的关键是返回实例本身；
\`StringBuffer\` 是 \`StringBuilder\` 的线程安全版本，现在很少使用。
字符串和编码
StringJoiner`},{t:"StringJoiner",u:"https://liaoxuefeng.com/books/java/oop/core/string-joiner/index.html",md:`# StringJoiner

[  ](https://weibo.com/liaoxuefeng)

要高效拼接字符串，应该使用\`StringBuilder\`。

很多时候，我们拼接的字符串像这样：

\`\`\`java
// 输出: Hello Bob, Alice, Grace!
public class Main {
    public static void main(String[] args) {
        String[] names = {"Bob", "Alice", "Grace"};
        var sb = new StringBuilder();
        sb.append("Hello ");
        for (String name : names) {
            sb.append(name).append(", ");
        }
        // 注意去掉最后的", ":
        sb.delete(sb.length() - 2, sb.length());
        sb.append("!");
        System.out.println(sb.toString());
    }
}
\`\`\`

类似用分隔符拼接数组的需求很常见，所以Java标准库还提供了一个\`StringJoiner\`来干这个事：

\`\`\`java
import java.util.StringJoiner;
public class Main {
    public static void main(String[] args) {
        String[] names = {"Bob", "Alice", "Grace"};
        var sj = new StringJoiner(", ");
        for (String name : names) {
            sj.add(name);
        }
        System.out.println(sj.toString());
    }
}
\`\`\`

慢着！用\`StringJoiner\`的结果少了前面的\`"Hello "\`和结尾的\`"!"\`！遇到这种情况，需要给\`StringJoiner\`指定“开头”和“结尾”：

\`\`\`java
import java.util.StringJoiner;
public class Main {
    public static void main(String[] args) {
        String[] names = {"Bob", "Alice", "Grace"};
        var sj = new StringJoiner(", ", "Hello ", "!");
        for (String name : names) {
            sj.add(name);
        }
        System.out.println(sj.toString());
    }
}
\`\`\`

### String.join()

\`String\`还提供了一个静态方法\`join()\`，这个方法在内部使用了\`StringJoiner\`来拼接字符串，在不需要指定“开头”和“结尾”的时候，用\`String.join()\`更方便：

\`\`\`java
String[] names = {"Bob", "Alice", "Grace"};
var s = String.join(", ", names);
\`\`\`

### 练习

请使用\`StringJoiner\`构造一个\`SELECT\`语句：

\`\`\`java
import java.util.StringJoiner;

public class Main {
    public static void main(String[] args) {
        String[] fields = { "name", "position", "salary" };
        String table = "employee";
        String select = buildSelectSql(table, fields);
        System.out.println(select);
        System.out.println("SELECT name, position, salary FROM employee".equals(select) ? "测试成功" : "测试失败");
    }

    static String buildSelectSql(String table, String[] fields) {
        // TODO:
        return "";
    }
}
\`\`\`

### 小结

用指定分隔符拼接字符串数组时，使用\`StringJoiner\`或者\`String.join()\`更方便；

用\`StringJoiner\`拼接字符串时，还可以额外附加一个“开头”和“结尾”。

---

---`}],11:[{t:"包装类型",u:"https://liaoxuefeng.com/books/java/oop/core/wrapper/",md:'# 包装类型\n\n[  ](https://weibo.com/liaoxuefeng)\n\n我们已经知道，Java的数据类型分两种：\n\n- 基本类型：`byte`，`short`，`int`，`long`，`boolean`，`float`，`double`，`char`；\n- 引用类型：所有`class`和`interface`类型。\n引用类型可以赋值为`null`，表示空，但基本类型不能赋值为`null`：\n\n```java\nString s = null;\nint n = null; // compile error!\n```\n\n那么，如何把一个基本类型视为对象（引用类型）？\n\n比如，想要把`int`基本类型变成一个引用类型，我们可以定义一个`Integer`类，它只包含一个实例字段`int`，这样，`Integer`类就可以视为`int`的包装类（Wrapper Class）：\n\n```java\npublic class Integer {\n    private int value;\n\n    public Integer(int value) {\n        this.value = value;\n    }\n\n    public int intValue() {\n        return this.value;\n    }\n}\n```\n\n定义好了`Integer`类，我们就可以把`int`和`Integer`互相转换：\n\n```java\nInteger n = null;\nInteger n2 = new Integer(99);\nint n3 = n2.intValue();\n```\n\n实际上，因为包装类型非常有用，Java核心库为每种基本类型都提供了对应的包装类型：\n\n| 基本类型 | 对应的引用类型 |\n|---|---|\n| boolean | java.lang.Boolean |\n| byte | java.lang.Byte |\n| short | java.lang.Short |\n| int | java.lang.Integer |\n| long | java.lang.Long |\n| float | java.lang.Float |\n| double | java.lang.Double |\n| char | java.lang.Character |\n我们可以直接使用，并不需要自己去定义：\n\n```java\n// Integer:\npublic class Main {\n    public static void main(String[] args) {\n        int i = 100;\n        // 通过new操作符创建Integer实例(不推荐使用,会有编译警告):\n        Integer n1 = new Integer(i);\n        // 通过静态方法valueOf(int)创建Integer实例:\n        Integer n2 = Integer.valueOf(i);\n        // 通过静态方法valueOf(String)创建Integer实例:\n        Integer n3 = Integer.valueOf("100");\n        System.out.println(n3.intValue());\n    }\n}\n```\n\n### Auto Boxing\n\n因为`int`和`Integer`可以互相转换：\n\n```java\nint i = 100;\nInteger n = Integer.valueOf(i);\nint x = n.intValue();\n```\n\n所以，Java编译器可以帮助我们自动在`int`和`Integer`之间转型：\n\n```java\nInteger n = 100; // 编译器自动使用Integer.valueOf(int)\nint x = n; // 编译器自动使用Integer.intValue()\n```\n\n这种直接把`int`变为`Integer`的赋值写法，称为自动装箱（Auto Boxing），反过来，把`Integer`变为`int`的赋值写法，称为自动拆箱（Auto Unboxing）。\n\n 注意\n\n自动装箱和自动拆箱只发生在编译阶段，目的是为了少写代码。\n\n装箱和拆箱会影响代码的执行效率，因为编译后的`class`代码是严格区分基本类型和引用类型的。并且，自动拆箱执行时可能会报`NullPointerException`：\n\n```java\n// NullPointerException\npublic class Main {\n    public static void main(String[] args) {\n        Integer n = null;\n        int i = n;\n    }\n}\n```\n\n### 不变类\n\n所有的包装类型都是不变类。我们查看`Integer`的源码可知，它的核心代码如下：\n\n```java\npublic final class Integer {\n    private final int value;\n}\n```\n\n因此，一旦创建了`Integer`对象，该对象就是不变的。\n\n对两个`Integer`实例进行比较要特别注意：绝对不能用`==`比较，因为`Integer`是引用类型，必须使用`equals()`比较：\n\n```java\n// == or equals?\npublic class Main {\n    public static void main(String[] args) {\n        Integer x = 127;\n        Integer y = 127;\n        Integer m = 99999;\n        Integer n = 99999;\n        System.out.println("x == y: " + (x==y)); // true\n        System.out.println("m == n: " + (m==n)); // false\n        System.out.println("x.equals(y): " + x.equals(y)); // true\n        System.out.println("m.equals(n): " + m.equals(n)); // true\n    }\n}\n```\n\n仔细观察结果的童鞋可以发现，`==`比较，较小的两个相同的`Integer`返回`true`，较大的两个相同的`Integer`返回`false`，这是因为`Integer`是不变类，编译器把`Integer x = 127;`自动变为`Integer x = Integer.valueOf(127);`，为了节省内存，`Integer.valueOf()`对于较小的数，始终返回相同的实例，因此，`==`比较“恰好”为`true`，但我们*绝不能*因为Java标准库的`Integer`内部有缓存优化就用`==`比较，必须用`equals()`方法比较两个`Integer`。\n\n 最佳实践\n\n按照语义编程，而不是针对特定的底层实现去“优化”。\n\n因为`Integer.valueOf()`可能始终返回同一个`Integer`实例，因此，在我们自己创建`Integer`的时候，以下两种方法：\n\n- 方法1：`Integer n = new Integer(100);`\n- 方法2：`Integer n = Integer.valueOf(100);`\n方法2更好，因为方法1总是创建新的`Integer`实例，方法2把内部优化留给`Integer`的实现者去做，即使在当前版本没有优化，也有可能在下一个版本进行优化。\n\n我们把能创建“新”对象的静态方法称为静态工厂方法。`Integer.valueOf()`就是静态工厂方法，它尽可能地返回缓存的实例以节省内存。\n\n 最佳实践\n\n创建新对象时，优先选用静态工厂方法而不是new操作符。\n\n如果我们考察`Byte.valueOf()`方法的源码，可以看到，标准库返回的`Byte`实例全部是缓存实例，但调用者并不关心静态工厂方法以何种方式创建新实例还是直接返回缓存的实例。\n\n### 进制转换\n\n`Integer`类本身还提供了大量方法，例如，最常用的静态方法`parseInt()`可以把字符串解析成一个整数：\n\n```java\nint x1 = Integer.parseInt("100"); // 100\nint x2 = Integer.parseInt("100", 16); // 256,因为按16进制解析\n```\n\n`Integer`还可以把整数格式化为指定进制的字符串：\n\n```java\n// Integer:\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(Integer.toString(100)); // "100",表示为10进制\n        System.out.println(Integer.toString(100, 36)); // "2s",表示为36进制\n        System.out.println(Integer.toHexString(100)); // "64",表示为16进制\n        System.out.println(Integer.toOctalString(100)); // "144",表示为8进制\n        System.out.println(Integer.toBinaryString(100)); // "1100100",表示为2进制\n    }\n}\n```\n\n注意：上述方法的输出都是`String`，在计算机内存中，只用二进制表示，不存在十进制或十六进制的表示方法。`int n = 100`在内存中总是以4字节的二进制表示：\n\n```\n┌────────┬────────┬────────┬────────┐\n│00000000│00000000│00000000│01100100│\n└────────┴────────┴────────┴────────┘\n```\n\n我们经常使用的`System.out.println(n);`是依靠核心库自动把整数格式化为10进制输出并显示在屏幕上，使用`Integer.toHexString(n)`则通过核心库自动把整数格式化为16进制。\n\n这里我们注意到程序设计的一个重要原则：数据的存储和显示要分离。\n\nJava的包装类型还定义了一些有用的静态变量\n\n```java\n// boolean只有两个值true/false，其包装类型只需要引用Boolean提供的静态字段:\nBoolean t = Boolean.TRUE;\nBoolean f =\n\n……（中间部分略）……\n\n## 小结\n\nJava核心库提供的包装类型可以把基本类型包装为`class`；\n\n自动装箱和自动拆箱都是在编译期完成的（JDK>=1.5）；\n\n装箱和拆箱会影响执行效率，且拆箱时可能发生`NullPointerException`；\n\n包装类型的比较必须使用`equals()`；\n\n整数和浮点数的包装类型都继承自`Number`；\n\n包装类型提供了大量实用方法。\n\n---\n\n---'}],12:[{t:"面向对象基础",u:"https://liaoxuefeng.com/books/java/oop/basic/",md:`# 面向对象基础

[  ](https://weibo.com/liaoxuefeng)

面向对象编程，是一种通过对象的方式，把现实世界映射到计算机模型的一种编程方法。

现实世界中，我们定义了“人”这种抽象概念，而具体的人则是“小明”、“小红”、“小军”等一个个具体的人。所以，“人”可以定义为一个类（class），而具体的人则是实例（instance）：

| 现实世界 | 计算机模型 | Java代码 |
|---|---|---|
| 人 | 类 / class | class Person { } |
| 小明 | 实例 / ming | Person ming = new Person() |
| 小红 | 实例 / hong | Person hong = new Person() |
| 小军 | 实例 / jun | Person jun = new Person() |
同样的，“书”也是一种抽象的概念，所以它是类，而《Java核心技术》、《Java编程思想》、《Java学习笔记》则是实例：

| 现实世界 | 计算机模型 | Java代码 |
|---|---|---|
| 书 | 类 / class | class Book { } |
| Java核心技术 | 实例 / book1 | Book book1 = new Book() |
| Java编程思想 | 实例 / book2 | Book book2 = new Book() |
| Java学习笔记 | 实例 / book3 | Book book3 = new Book() |

### class和instance

所以，只要理解了class和instance的概念，基本上就明白了什么是面向对象编程。

class是一种对象模版，它定义了如何创建实例，因此，class本身就是一种数据类型：

而instance是对象实例，instance是根据class创建的实例，可以创建多个instance，每个instance类型相同，但各自属性可能不相同：

### 定义class

在Java中，创建一个类，例如，给这个类命名为\`Person\`，就是定义一个\`class\`：

\`\`\`java
class Person {
    public String name;
    public int age;
}
\`\`\`

一个\`class\`可以包含多个字段（\`field\`），字段用来描述一个类的特征。上面的\`Person\`类，我们定义了两个字段，一个是\`String\`类型的字段，命名为\`name\`，一个是\`int\`类型的字段，命名为\`age\`。因此，通过\`class\`，把一组数据汇集到一个对象上，实现了数据封装。

\`public\`是用来修饰字段的，它表示这个字段可以被外部访问。

我们再看另一个\`Book\`类的定义：

\`\`\`java
class Book {
    public String name;
    public String author;
    public String isbn;
    public double price;
}
\`\`\`

请指出\`Book\`类的各个字段。

### 创建实例

定义了class，只是定义了对象模版，而要根据对象模版创建出真正的对象实例，必须用new操作符。

new操作符可以创建一个实例，然后，我们需要定义一个引用类型的变量来指向这个实例：

\`\`\`java
Person ming = new Person();
\`\`\`

上述代码创建了一个Person类型的实例，并通过变量\`ming\`指向它。

注意区分\`Person ming\`是定义\`Person\`类型的变量\`ming\`，而\`new Person()\`是创建\`Person\`实例。

有了指向这个实例的变量，我们就可以通过这个变量来操作实例。访问实例变量可以用\`变量.字段\`，例如：

\`\`\`java
ming.name = "Xiao Ming"; // 对字段name赋值
ming.age = 12; // 对字段age赋值
System.out.println(ming.name); // 访问字段name

Person hong = new Person();
hong.name = "Xiao Hong";
hong.age = 15;
\`\`\`

上述两个变量分别指向两个不同的实例，它们在内存中的结构如下：

\`\`\`
            ┌──────────────────┐
ming ──────▶│Person instance   │
            ├──────────────────┤
            │name = "Xiao Ming"│
            │age = 12          │
            └──────────────────┘
            ┌──────────────────┐
hong ──────▶│Person instance   │
            ├──────────────────┤
            │name = "Xiao Hong"│
            │age = 15          │
            └──────────────────┘
\`\`\`

两个\`instance\`拥有\`class\`定义的\`name\`和\`age\`字段，且各自都有一份独立的数据，互不干扰。

 注意

一个Java源文件可以包含多个类的定义，但只能定义一个public类，且public类名必须与文件名一致。如果要定义多个public类，必须拆到多个Java源文件中。

### 练习

请定义一个City类，该class具有如下字段:

- name: 名称，String类型
- latitude: 纬度，double类型
- longitude: 经度，double类型
实例化几个City并赋值，然后打印。

\`\`\`java
// City
public class Main {
    public static void main(String[] args) {
        City bj = new City();
        bj.name = "Beijing";
        bj.latitude = 39.903;
        bj.longitude = 116.401;
        System.out.println(bj.name);
        System.out.println("location: " + bj.latitude + ", " + bj.longitude);
    }
}

class City {
    ???
}
\`\`\`

### 小结

在OOP中，\`class\`和\`instance\`是“模版”和“实例”的关系；

定义\`class\`就是定义了一种数据类型，对应的\`instance\`是这种数据类型的实例；

\`class\`定义的\`field\`，在每个\`instance\`都会拥有各自的\`field\`，且互不干扰；

通过\`new\`操作符创建新的\`instance\`，然后用变量指向它，即可通过变量来引用这个\`instance\`；

访问实例字段的方法是\`变量名.字段名\`；

指向\`instance\`的变量都是引用变量。

---

---`},{t:"构造方法",u:"https://liaoxuefeng.com/books/java/oop/basic/constructor/",md:`# 构造方法

[  ](https://weibo.com/liaoxuefeng)

创建实例的时候，我们经常需要同时初始化这个实例的字段，例如：

\`\`\`java
Person ming = new Person();
ming.setName("小明");
ming.setAge(12);
\`\`\`

初始化对象实例需要3行代码，而且，如果忘了调用\`setName()\`或者\`setAge()\`，这个实例内部的状态就是不正确的。

能否在创建对象实例时就把内部字段全部初始化为合适的值？

完全可以。

这时，我们就需要构造方法。

创建实例的时候，实际上是通过构造方法来初始化实例的。我们先来定义一个构造方法，能在创建\`Person\`实例的时候，一次性传入\`name\`和\`age\`，完成初始化：

\`\`\`java
// 构造方法
public class Main {
    public static void main(String[] args) {
        Person p = new Person("Xiao Ming", 15);
        System.out.println(p.getName());
        System.out.println(p.getAge());
    }
}

class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return this.name;
    }

    public int getAge() {
        return this.age;
    }
}
\`\`\`

由于构造方法是如此特殊，所以构造方法的名称就是类名。构造方法的参数没有限制，在方法内部，也可以编写任意语句。但是，和普通方法相比，构造方法没有返回值（也没有\`void\`），调用构造方法，必须用\`new\`操作符。

### 默认构造方法

是不是任何\`class\`都有构造方法？是的。

那前面我们并没有为\`Person\`类编写构造方法，为什么可以调用\`new Person()\`？

原因是如果一个类没有定义构造方法，编译器会自动为我们生成一个默认构造方法，它没有参数，也没有执行语句，类似这样：

\`\`\`java
class Person {
    public Person() {
    }
}
\`\`\`

要特别注意的是，如果我们自定义了一个构造方法，那么，编译器就*不再*自动创建默认构造方法：

\`\`\`java
// 构造方法
public class Main {
    public static void main(String[] args) {
        Person p = new Person(); // 编译错误:找不到这个构造方法
    }
}

class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return this.name;
    }

    public int getAge() {
        return this.age;
    }
}
\`\`\`

如果既要能使用带参数的构造方法，又想保留不带参数的构造方法，那么只能把两个构造方法都定义出来：

\`\`\`java
// 构造方法
public class Main {
    public static void main(String[] args) {
        Person p1 = new Person("Xiao Ming", 15); // 既可以调用带参数的构造方法
        Person p2 = new Person(); // 也可以调用无参数构造方法
    }
}

class Person {
    private String name;
    private int age;

    public Person() {
    }

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return this.name;
    }

    public int getAge() {
        return this.age;
    }
}
\`\`\`

没有在构造方法中初始化字段时，引用类型的字段默认是\`null\`，数值类型的字段用默认值，\`int\`类型默认值是\`0\`，布尔类型默认值是\`false\`：

\`\`\`java
class Person {
    private String name; // 默认初始化为null
    private int age; // 默认初始化为0

    public Person() {
    }
}
\`\`\`

也可以对字段直接进行初始化：

\`\`\`java
class Person {
    private String name = "Unamed";
    private int age = 10;
}
\`\`\`

那么问题来了：既对字段进行初始化，又在构造方法中对字段进行初始化：

\`\`\`java
class Person {
    private String name = "Unamed";
    private int age = 10;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
\`\`\`

当我们创建对象的时候，\`new Person("Xiao Ming", 12)\`得到的对象实例，字段的初始值是啥？

在Java中，创建对象实例的时候，按照如下顺序进行初始化：

1. 先初始化字段，例如，\`int age = 10;\`表示字段初始化为\`10\`，\`double salary;\`表示字段默认初始化为\`0\`，\`String s;\`表示引用类型字段默认初始化为\`null\`；
2. 执行构造方法的代码进行初始化。
因此，构造方法的代码由于后运行，所以，\`new Person("Xiao Ming", 12)\`的字段值最终由构造方法的代码确定。

### 多个构造方法

可以定义多个构造方法，在通过\`new\`操作符调用的时候，编译器通过构造方法的参数数量、位置和类型自动区分：

\`\`\`java
class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public Person(String name) {
        this.name = name;
        this.age = 12;
    }

    public Person() {
    }
}
\`\`\`

如果调用\`new Person("Xiao Ming", 20);\`，会自动匹配到构造方法\`public Person(String, int)\`。

如果调用\`new Person("Xiao Ming");\`，会自动匹配到构造方法\`public Person(String)\`。

如果调用\`new Person();\`，会自动匹配到构造方法\`public Person()\`。

一个构造方法可以调用其他构造方法，这样做的目的是便于代码复用。调用其他构造方法的语法是\`this(…)\`：

\`\`\`java
class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public Person(String name) {
        this(name, 18); // 调用另一个构造方法Person(String, int)
    }

    public Person() {
        this("Unnamed"); // 调用另一个构造方法Person(String)
    }
}
\`\`\`

### 练习

请给\`Person\`类增加\`(String, int)\`的构造方法：

\`\`\`java
public class Main {
    public static void main(String[] args) {
        // TODO: 给Person增加构造方法:
        Person ming = new Person("小明", 12);
        System.out.println(ming.getName());
        System.out.println(ming.getAge());
    }
}

class Person {
    private String name;
    private int age;

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
}
\`\`\`

### 小结

实例在创建时通过\`new\`操作符会调用其对应的构造方法，构造方法用于初始化实例；

没有定义构造方法时，编译器会自动创建一个默认的无参数构造方法；

可以定义多个构造方法，编译器根据参数自动判断；

可以在一个构造方法内部调用另一个构造方法，便于代码复用。

---

---`}],13:[{t:"继承",u:"https://liaoxuefeng.com/books/java/oop/basic/inherit/",md:`# 继承

[  ](https://weibo.com/liaoxuefeng)

在前面的章节中，我们已经定义了\`Person\`类：

\`\`\`java
class Person {
    private String name;
    private int age;

    public String getName() {...}
    public void setName(String name) {...}
    public int getAge() {...}
    public void setAge(int age) {...}
}
\`\`\`

现在，假设需要定义一个\`Student\`类，字段如下：

\`\`\`java
class Student {
    private String name;
    private int age;
    private int score;

    public String getName() {...}
    public void setName(String name) {...}
    public int getAge() {...}
    public void setAge(int age) {...}
    public int getScore() { … }
    public void setScore(int score) { … }
}
\`\`\`

仔细观察，发现\`Student\`类包含了\`Person\`类已有的字段和方法，只是多出了一个\`score\`字段和相应的\`getScore()\`、\`setScore()\`方法。

能不能在\`Student\`中不要写重复的代码？

这个时候，继承就派上用场了。

继承是面向对象编程中非常强大的一种机制，它首先可以复用代码。当我们让\`Student\`从\`Person\`继承时，\`Student\`就获得了\`Person\`的所有功能，我们只需要为\`Student\`编写新增的功能。

Java使用\`extends\`关键字来实现继承：

\`\`\`java
class Person {
    private String name;
    private int age;

    public String getName() {...}
    public void setName(String name) {...}
    public int getAge() {...}
    public void setAge(int age) {...}
}

class Student extends Person {
    // 不要重复name和age字段/方法,
    // 只需要定义新增score字段/方法:
    private int score;

    public int getScore() { … }
    public void setScore(int score) { … }
}
\`\`\`

可见，通过继承，\`Student\`只需要编写额外的功能，不再需要重复代码。

 注意

子类自动获得了父类的所有字段，严禁定义与父类重名的字段！

在OOP的术语中，我们把\`Person\`称为超类（super class），父类（parent class），基类（base class），把\`Student\`称为子类（subclass），扩展类（extended class）。

### 继承树

注意到我们在定义\`Person\`的时候，没有写\`extends\`。在Java中，没有明确写\`extends\`的类，编译器会自动加上\`extends Object\`。所以，任何类，除了\`Object\`，都会继承自某个类。下图是\`Person\`、\`Student\`的继承树：

\`\`\`
┌───────────┐
│  Object   │
└───────────┘
      ▲
      │
┌───────────┐
│  Person   │
└───────────┘
      ▲
      │
┌───────────┐
│  Student  │
└───────────┘
\`\`\`

Java只允许一个class继承自一个类，因此，一个类有且仅有一个父类。只有\`Object\`特殊，它没有父类。

类似的，如果我们定义一个继承自\`Person\`的\`Teacher\`，它们的继承树关系如下：

\`\`\`
       ┌───────────┐
       │  Object   │
       └───────────┘
             ▲
             │
       ┌───────────┐
       │  Person   │
       └───────────┘
          ▲     ▲
          │     │
          │     │
┌───────────┐ ┌───────────┐
│  Student  │ │  Teacher  │
└───────────┘ └───────────┘
\`\`\`

### protected

继承有个特点，就是子类无法访问父类的\`private\`字段或者\`private\`方法。例如，\`Student\`类就无法访问\`Person\`类的\`name\`和\`age\`字段：

\`\`\`java
class Person {
    private String name;
    private int age;
}

class Student extends Person {
    public String hello() {
        return "Hello, " + name; // 编译错误：无法访问name字段
    }
}
\`\`\`

这使得继承的作用被削弱了。为了让子类可以访问父类的字段，我们需要把\`private\`改为\`protected\`。用\`protected\`修饰的字段可以被子类访问：

\`\`\`java
class Person {
    protected String name;
    protected int age;
}

class Student extends Person {
    public String hello() {
        return "Hello, " + name; // OK!
    }
}
\`\`\`

因此，\`protected\`关键字可以把字段和方法的访问权限控制在继承树内部，一个\`protected\`字段和方法可以被其子类，以及子类的子类所访问，后面我们还会详细讲解。

### super

\`super\`关键字表示父类（超类）。子类引用父类的字段时，可以用\`super.fieldName\`。例如：

\`\`\`java
class Student extends Person {
    public String hello() {
        return "Hello, " + super.name;
    }
}
\`\`\`

实际上，这里使用\`super.name\`，或者\`this.name\`，或者\`name\`，效果都是一样的。编译器会自动定位到父类的\`name\`字段。

但是，在某些时候，就必须使用\`super\`。我们来看一个例子：

\`\`\`java
// super
public class Main {
    public static void main(String[] args) {
        Student s = new Student("Xiao Ming", 12, 89);
    }
}

class Person {
    protected String name;
    protected int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    protected int score;

    public Student(String name, int age, int score) {
        this.score = score;
    }
}
\`\`\`

运行上面的代码，会得到一个编译错误，大意是在\`Student\`的构造方法中，无法调用\`Person\`的构造方法。

这是因为在Java中，任何\`class\`的构造方法，第一行语句必须是调用父类的构造方法。如果没有明确地调用父类的构造方法，编译器会帮我们自动加一句\`super();\`，所以，\`Student\`类的构造方法实际上是这样：

\`\`\`java
class Student extends Person {
    protected int score;

    public Student(String name, int age, int score) {
        super(); // 自动调用父类的构造方法
        this.score = score;
    }
}
\`\`\`

但是，\`Person\`类并没有无参数的构造方法，因此，编译失败。

解决方法是调用\`Person\`类存在的某个构造方法。例如：

\`\`\`java
class Student extends Person {
    protected int score;

    public Student(String name, int age, int score) {
        super(name, age); // 调用父类的构造方法Person(String, int)
        this.score = score;
    }
}
\`\`\`

这样就可以正常编译了！

因此我们得出结论：如果父类没有默认的构造方法，子类就必须显式调用\`super()\`并给出参数以便让编译器定位到父类的一个合适的构造方法。

这里还顺带引出了另一个问题：即子类*不会继承*任何父类的构造方法。子类默认的构造方法是编译器自动生成的，不是继承的。

### 阻止继承

正常情况下，只要某个class没有\`final\`修饰符，那么任何类都可以从该class继承。

从Java 15开始，允许使用\`sealed\`修饰class，并通过\`permits\`明确写出能够从该class继承的子类名称。

例如，定义一个\`Shape\`类：

\`\`\`java
public sealed class Shape permits Rect, Circle, Triangle {
    ...
}
\`\`\`

上述\`Shape\`类就是一个\`sealed\`类，它只允许指定的3个类

……（中间部分略）……

## 小结

继承是面向对象编程的一种强大的代码复用方式；

Java只允许单继承，所有类最终的根类是\`Object\`；

\`protected\`允许子类访问父类的字段和方法；

子类的构造方法可以通过\`super()\`调用父类的构造方法；

可以安全地向上转型为更抽象的类型；

可以强制向下转型，最好借助\`instanceof\`判断；

子类和父类的关系是is，has关系不能用继承。

---

---`},{t:"多态",u:"https://liaoxuefeng.com/books/java/oop/basic/polymorphic/",md:`# 多态

[  ](https://weibo.com/liaoxuefeng)

在继承关系中，子类如果定义了一个与父类方法签名完全相同的方法，被称为覆写（Override）。

例如，在\`Person\`类中，我们定义了\`run()\`方法：

\`\`\`java
class Person {
    public void run() {
        System.out.println("Person.run");
    }
}
\`\`\`

在子类\`Student\`中，覆写这个\`run()\`方法：

\`\`\`java
class Student extends Person {
    @Override
    public void run() {
        System.out.println("Student.run");
    }
}
\`\`\`

Override和Overload不同的是，如果方法签名不同，就是Overload，Overload方法是一个新方法；如果方法签名相同，并且返回值也相同，就是\`Override\`。

 注意

方法名相同，方法参数相同，但方法返回值不同，也是不同的方法。在Java程序中，出现这种情况，编译器会报错。

\`\`\`java
class Person {
    public void run() { … }
}

class Student extends Person {
    // 不是Override，因为参数不同:
    public void run(String s) { … }
    // 不是Override，因为返回值不同:
    public int run() { … }
}
\`\`\`

加上\`@Override\`可以让编译器帮助检查是否进行了正确的覆写。希望进行覆写，但是不小心写错了方法签名，编译器会报错。

\`\`\`java
// override
public class Main {
    public static void main(String[] args) {
    }
}

class Person {
    public void run() {}
}

public class Student extends Person {
    @Override // Compile error!
    public void run(String s) {}
}
\`\`\`

但是\`@Override\`不是必需的。

在上一节中，我们已经知道，引用变量的声明类型可能与其实际类型不符，例如：

\`\`\`java
Person p = new Student();
\`\`\`

现在，我们考虑一种情况，如果子类覆写了父类的方法：

\`\`\`java
// override
public class Main {
    public static void main(String[] args) {
        Person p = new Student();
        p.run(); // 应该打印Person.run还是Student.run?
    }
}

class Person {
    public void run() {
        System.out.println("Person.run");
    }
}

class Student extends Person {
    @Override
    public void run() {
        System.out.println("Student.run");
    }
}
\`\`\`

那么，一个实际类型为\`Student\`，引用类型为\`Person\`的变量，调用其\`run()\`方法，调用的是\`Person\`还是\`Student\`的\`run()\`方法？

运行一下上面的代码就可以知道，实际上调用的方法是\`Student\`的\`run()\`方法。因此可得出结论：

Java的实例方法调用是基于运行时的实际类型的动态调用，而非变量的声明类型。

这个非常重要的特性在面向对象编程中称之为多态。它的英文拼写非常复杂：Polymorphic。

### 多态

多态是指，针对某个类型的方法调用，其真正执行的方法取决于运行时期实际类型的方法。例如：

\`\`\`java
Person p = new Student();
p.run(); // 无法确定运行时究竟调用哪个run()方法
\`\`\`

有同学会说，从上面的代码一看就明白，肯定调用的是\`Student\`的\`run()\`方法啊。

但是，假设我们编写这样一个方法：

\`\`\`java
public void runTwice(Person p) {
    p.run();
    p.run();
}
\`\`\`

它传入的参数类型是\`Person\`，我们是无法知道传入的参数实际类型究竟是\`Person\`，还是\`Student\`，还是\`Person\`的其他子类例如\`Teacher\`，因此，也无法确定调用的是不是\`Person\`类定义的\`run()\`方法。

所以，多态的特性就是，运行期才能动态决定调用的子类方法。对某个类型调用某个方法，执行的实际方法可能是某个子类的覆写方法。这种不确定性的方法调用，究竟有什么作用？

我们还是来举例子。

假设我们定义一种收入，需要给它报税，那么先定义一个\`Income\`类：

\`\`\`java
class Income {
    protected double income;
    public double getTax() {
        return income * 0.1; // 税率10%
    }
}
\`\`\`

对于工资收入，可以减去一个基数，那么我们可以从\`Income\`派生出\`SalaryIncome\`，并覆写\`getTax()\`：

\`\`\`java
class Salary extends Income {
    @Override
    public double getTax() {
        if (income <= 5000) {
            return 0;
        }
        return (income - 5000) * 0.2;
    }
}
\`\`\`

如果你享受国务院特殊津贴，那么按照规定，可以全部免税：

\`\`\`java
class StateCouncilSpecialAllowance extends Income {
    @Override
    public double getTax() {
        return 0;
    }
}
\`\`\`

现在，我们要编写一个报税的财务软件，对于一个人的所有收入进行报税，可以这么写：

\`\`\`java
public double totalTax(Income... incomes) {
    double total = 0;
    for (Income income: incomes) {
        total = total + income.getTax();
    }
    return total;
}
\`\`\`

来试一下：

\`\`\`java
// Polymorphic
public class Main {
    public static void main(String[] args) {
        // 给一个有普通收入、工资收入和享受国务院特殊津贴的小伙伴算税:
        Income[] incomes = new Income[] {
            new Income(3000),
            new Salary(7500),
            new StateCouncilSpecialAllowance(15000)
        };
        System.out.println(totalTax(incomes));
    }

    public static double totalTax(Income... incomes) {
        double total = 0;
        for (Income income: incomes) {
            total = total + income.getTax();
        }
        return total;
    }
}

class Income {
    protected double income;

    public Income(double income) {
        this.income = income;
    }

    public double getTax() {
        return income * 0.1; // 税率10%
    }
}

class Salary extends Income {
    public Salary(double income) {
        super(income);
    }

    @Override
    public double getTax() {
        if (income <= 5000) {
            return 0;
        }
        return (income - 5000) * 0.2;
    }
}

class StateCouncilSpecialAllowance extends Income {
    public StateCouncilSpecialAllowance(double income) {
        super(income);
    }

    @Override
    public double getTax() {
        return 0;
    }
}
\`\`\`

观察\`totalTax()\`方法：利用多态，\`totalTax()\`方法只需要和\`Income\`打交道，它完全不需要知道\`Salary\`和\`StateCouncilSpecialAllowance\`的存在，就可以正确计算出总的税。如果我们要新增一种稿费收入，只需要从\`Income\`派生，然后正确覆写\`getTax()\`方法就可以。把新的类型传入\`totalTax()\`，不需要修改任何代码。

可见，多态具有一个非常强大的功能，就是允许添加更多类型的子类实现功能扩展，却不需要修改基于父类的代码。

### 覆写Object方法

因为所有的\`class\`最终都继承自\`Object\`，而\`Object\`定义了几个重要的方法：

- \`toString()\`：把instance输出为\`String\`；
- \`equals()\`：判断两个

……（中间部分略）……

## 小结

子类可以覆写父类的方法（Override），覆写在子类中改变了父类方法的行为；

Java的方法调用总是作用于运行期对象的实际类型，这种行为称为多态；

\`final\`修饰符有多种作用：

- \`final\`修饰的方法可以阻止被覆写；
- \`final\`修饰的class可以阻止被继承；
- \`final\`修饰的field必须在创建对象时初始化，随后不可修改。

---

---`}],14:[{t:"抽象类",u:"https://liaoxuefeng.com/books/java/oop/basic/abstract-class/",md:`# 抽象类

[  ](https://weibo.com/liaoxuefeng)

由于多态的存在，每个子类都可以覆写父类的方法，例如：

\`\`\`java
class Person {
    public void run() { … }
}

class Student extends Person {
    @Override
    public void run() { … }
}

class Teacher extends Person {
    @Override
    public void run() { … }
}
\`\`\`

从\`Person\`类派生的\`Student\`和\`Teacher\`都可以覆写\`run()\`方法。

如果父类\`Person\`的\`run()\`方法没有实际意义，能否去掉方法的执行语句？

\`\`\`java
class Person {
    public void run(); // Compile Error!
}
\`\`\`

答案是不行，会导致编译错误，因为定义方法的时候，必须实现方法的语句。

能不能去掉父类的\`run()\`方法？

答案还是不行，因为去掉父类的\`run()\`方法，就失去了多态的特性。例如，\`runTwice()\`就无法编译：

\`\`\`java
public void runTwice(Person p) {
    p.run(); // Person没有run()方法，会导致编译错误
    p.run();
}
\`\`\`

如果父类的方法本身不需要实现任何功能，仅仅是为了定义方法签名，目的是让子类去覆写它，那么，可以把父类的方法声明为抽象方法：

\`\`\`java
class Person {
    public abstract void run();
}
\`\`\`

把一个方法声明为\`abstract\`，表示它是一个抽象方法，本身没有实现任何方法语句。因为这个抽象方法本身是无法执行的，所以，\`Person\`类也无法被实例化。编译器会告诉我们，无法编译\`Person\`类，因为它包含抽象方法。

必须把\`Person\`类本身也声明为\`abstract\`，才能正确编译它：

\`\`\`java
abstract class Person {
    public abstract void run();
}
\`\`\`

### 抽象类

如果一个\`class\`定义了方法，但没有具体执行代码，这个方法就是抽象方法，抽象方法用\`abstract\`修饰。

因为无法执行抽象方法，因此这个类也必须申明为抽象类（abstract class）。

使用\`abstract\`修饰的类就是抽象类。我们无法实例化一个抽象类：

\`\`\`java
Person p = new Person(); // 编译错误
\`\`\`

无法实例化的抽象类有什么用？

因为抽象类本身被设计成只能用于被继承，因此，抽象类可以强迫子类实现其定义的抽象方法，否则编译会报错。因此，抽象方法实际上相当于定义了“规范”。

例如，\`Person\`类定义了抽象方法\`run()\`，那么，在实现子类\`Student\`的时候，就必须覆写\`run()\`方法：

\`\`\`java
// abstract class
public class Main {
    public static void main(String[] args) {
        Person p = new Student();
        p.run();
    }
}

abstract class Person {
    public abstract void run();
}

class Student extends Person {
    @Override
    public void run() {
        System.out.println("Student.run");
    }
}
\`\`\`

### 面向抽象编程

当我们定义了抽象类\`Person\`，以及具体的\`Student\`、\`Teacher\`子类的时候，我们可以通过抽象类\`Person\`类型去引用具体的子类的实例：

\`\`\`java
Person s = new Student();
Person t = new Teacher();
\`\`\`

这种引用抽象类的好处在于，我们对其进行方法调用，并不关心\`Person\`类型变量的具体子类型：

\`\`\`java
// 不关心Person变量的具体子类型:
s.run();
t.run();
\`\`\`

同样的代码，如果引用的是一个新的子类，我们仍然不关心具体类型：

\`\`\`java
// 同样不关心新的子类是如何实现run()方法的：
Person e = new Employee();
e.run();
\`\`\`

这种尽量引用高层类型，避免引用实际子类型的方式，称之为面向抽象编程。

面向抽象编程的本质就是：

- 上层代码只定义规范（例如：\`abstract class Person\`）；
- 不需要子类就可以实现业务逻辑（正常编译）；
- 具体的业务逻辑由不同的子类实现，调用者并不关心。

### 练习

用抽象类给一个有工资收入和稿费收入的小伙伴算税。

### 小结

通过\`abstract\`定义的方法是抽象方法，它只有定义，没有实现。抽象方法定义了子类必须实现的接口规范；

定义了抽象方法的class必须被定义为抽象类，从抽象类继承的子类必须实现抽象方法；

如果不实现抽象方法，则该子类仍是一个抽象类；

面向抽象编程使得调用者只关心抽象方法的定义，不关心子类的具体实现。

---

---`}],15:[{t:"接口",u:"https://liaoxuefeng.com/books/java/oop/basic/interface/",md:`# 接口

[  ](https://weibo.com/liaoxuefeng)

在抽象类中，抽象方法本质上是定义接口规范：即规定高层类的接口，从而保证所有子类都有相同的接口实现，这样，多态就能发挥出威力。

如果一个抽象类没有字段，所有方法全部都是抽象方法：

\`\`\`java
abstract class Person {
    public abstract void run();
    public abstract String getName();
}
\`\`\`

就可以把该抽象类改写为接口：\`interface\`。

在Java中，使用\`interface\`可以声明一个接口：

\`\`\`java
interface Person {
    void run();
    String getName();
}
\`\`\`

所谓\`interface\`，就是比抽象类还要抽象的纯抽象接口，因为它连字段都不能有。因为接口定义的所有方法默认都是\`public abstract\`的，所以这两个修饰符不需要写出来（写不写效果都一样）。

当一个具体的\`class\`去实现一个\`interface\`时，需要使用\`implements\`关键字。举个例子：

\`\`\`java
class Student implements Person {
    private String name;

    public Student(String name) {
        this.name = name;
    }

    @Override
    public void run() {
        System.out.println(this.name + " run");
    }

    @Override
    public String getName() {
        return this.name;
    }
}
\`\`\`

我们知道，在Java中，一个类只能继承自另一个类，不能从多个类继承。但是，一个类可以实现多个\`interface\`，例如：

\`\`\`java
class Student implements Person, Hello { // 实现了两个interface
    ...
}
\`\`\`

### 术语

注意区分术语：

Java的接口特指\`interface\`的定义，表示一个接口类型和一组方法签名，而编程接口泛指接口规范，如方法签名，数据格式，网络协议等。

抽象类和接口的对比如下：

| | abstract class | interface |
|---|---|---|
| 继承 | 只能extends一个class | 可以implements多个interface |
| 字段 | 可以定义实例字段 | 不能定义实例字段 |
| 抽象方法 | 可以定义抽象方法 | 可以定义抽象方法 |
| 非抽象方法 | 可以定义非抽象方法 | 可以定义default方法 |

### 接口继承

一个\`interface\`可以继承自另一个\`interface\`。\`interface\`继承自\`interface\`使用\`extends\`，它相当于扩展了接口的方法。例如：

\`\`\`java
interface Hello {
    void hello();
}

interface Person extends Hello {
    void run();
    String getName();
}
\`\`\`

此时，\`Person\`接口继承自\`Hello\`接口，因此，\`Person\`接口现在实际上有3个抽象方法签名，其中一个来自继承的\`Hello\`接口。

### 继承关系

合理设计\`interface\`和\`abstract class\`的继承关系，可以充分复用代码。一般来说，公共逻辑适合放在\`abstract class\`中，具体逻辑放到各个子类，而接口层次代表抽象程度。可以参考Java的集合类定义的一组接口、抽象类以及具体子类的继承关系：

\`\`\`
┌───────────────┐
│   Iterable    │
└───────────────┘
        ▲                ┌───────────────────┐
        │                │      Object       │
┌───────────────┐        └───────────────────┘
│  Collection   │                  ▲
└───────────────┘                  │
        ▲     ▲          ┌───────────────────┐
        │     └──────────│AbstractCollection │
┌───────────────┐        └───────────────────┘
│     List      │                  ▲
└───────────────┘                  │
              ▲          ┌───────────────────┐
              └──────────│   AbstractList    │
                         └───────────────────┘
                                ▲     ▲
                                │     │
                                │     │
                     ┌────────────┐ ┌────────────┐
                     │ ArrayList  │ │ LinkedList │
                     └────────────┘ └────────────┘
\`\`\`

在使用的时候，实例化的对象永远只能是某个具体的子类，但总是通过接口去引用它，因为接口比抽象类更抽象：

\`\`\`java
List list = new ArrayList(); // 用List接口引用具体子类的实例
Collection coll = list; // 向上转型为Collection接口
Iterable it = coll; // 向上转型为Iterable接口
\`\`\`

### default方法

在接口中，可以定义\`default\`方法。例如，把\`Person\`接口的\`run()\`方法改为\`default\`方法：

\`\`\`java
// interface
public class Main {
    public static void main(String[] args) {
        Person p = new Student("Xiao Ming");
        p.run();
    }
}

interface Person {
    String getName();
    default void run() {
        System.out.println(getName() + " run");
    }
}

class Student implements Person {
    private String name;

    public Student(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }
}
\`\`\`

实现类可以不必覆写\`default\`方法。\`default\`方法的目的是，当我们需要给接口新增一个方法时，会涉及到修改全部子类。如果新增的是\`default\`方法，那么子类就不必全部修改，只需要在需要覆写的地方去覆写新增方法。

\`default\`方法和抽象类的普通方法是有所不同的。因为\`interface\`没有字段，\`default\`方法无法访问字段，而抽象类的普通方法可以访问实例字段。

### 练习

用接口给一个有工资收入和稿费收入的小伙伴算税。

### 小结

Java的接口（interface）定义了纯抽象规范，一个类可以实现多个接口；

接口也是数据类型，适用于向上转型和向下转型；

接口的所有方法都是抽象方法，接口不能定义实例字段；

接口可以定义\`default\`方法（JDK>=1.8）。

---

---`}],16:[{t:"静态字段和静态方法",u:"https://liaoxuefeng.com/books/java/oop/basic/static/",md:`# 静态字段和静态方法

[  ](https://weibo.com/liaoxuefeng)

在一个\`class\`中定义的字段，我们称之为实例字段。实例字段的特点是，每个实例都有独立的字段，各个实例的同名字段互不影响。

还有一种字段，是用\`static\`修饰的字段，称为静态字段：\`static field\`。

实例字段在每个实例中都有自己的一个独立“空间”，但是静态字段只有一个共享“空间”，所有实例都会共享该字段。举个例子：

\`\`\`java
class Person {
    public String name;
    public int age;
    // 定义静态字段number:
    public static int number;
}
\`\`\`

我们来看看下面的代码：

\`\`\`java
// static field
public class Main {
    public static void main(String[] args) {
        Person ming = new Person("Xiao Ming", 12);
        Person hong = new Person("Xiao Hong", 15);
        ming.number = 88;
        System.out.println(hong.number);
        hong.number = 99;
        System.out.println(ming.number);
    }
}

class Person {
    public String name;
    public int age;

    public static int number;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
\`\`\`

对于静态字段，无论修改哪个实例的静态字段，效果都是一样的：所有实例的静态字段都被修改了，原因是静态字段并不属于实例：

\`\`\`
        ┌──────────────────┐
ming ──▶│Person instance   │
        ├──────────────────┤
        │name = "Xiao Ming"│
        │age = 12          │
        │number ───────────┼──┐    ┌─────────────┐
        └──────────────────┘  │    │Person class │
                              │    ├─────────────┤
                              ├───▶│number = 99  │
        ┌──────────────────┐  │    └─────────────┘
hong ──▶│Person instance   │  │
        ├──────────────────┤  │
        │name = "Xiao Hong"│  │
        │age = 15          │  │
        │number ───────────┼──┘
        └──────────────────┘
\`\`\`

虽然实例可以访问静态字段，但是它们指向的其实都是\`Person class\`的静态字段。所以，所有实例共享一个静态字段。

因此，不推荐用\`实例变量.静态字段\`去访问静态字段，因为在Java程序中，实例对象并没有静态字段。在代码中，实例对象能访问静态字段只是因为编译器可以根据实例类型自动转换为\`类名.静态字段\`来访问静态对象。

推荐用类名来访问静态字段。可以把静态字段理解为描述\`class\`本身的字段。对于上面的代码，更好的写法是：

\`\`\`java
Person.number = 99;
System.out.println(Person.number);
\`\`\`

### 静态方法

有静态字段，就有静态方法。用\`static\`修饰的方法称为静态方法。

调用实例方法必须通过一个实例变量，而调用静态方法则不需要实例变量，通过类名就可以调用。静态方法类似其它编程语言的函数。例如：

\`\`\`java
// static method
public class Main {
    public static void main(String[] args) {
        Person.setNumber(99);
        System.out.println(Person.number);
    }
}

class Person {
    public static int number;

    public static void setNumber(int value) {
        number = value;
    }
}
\`\`\`

因为静态方法属于\`class\`而不属于实例，因此，静态方法内部，无法访问\`this\`变量，也无法访问实例字段，它只能访问静态字段。

通过实例变量也可以调用静态方法，但这只是编译器自动帮我们把实例改写成类名而已。

通常情况下，通过实例变量访问静态字段和静态方法，会得到一个编译警告。

静态方法经常用于工具类。例如：

- Arrays.sort()
- Math.random()
静态方法也经常用于辅助方法。注意到Java程序的入口\`main()\`也是静态方法。

### 接口的静态字段

因为\`interface\`是一个纯抽象类，所以它不能定义实例字段。但是，\`interface\`是可以有静态字段的，并且静态字段必须为\`final\`类型：

\`\`\`java
public interface Person {
    public static final int MALE = 1;
    public static final int FEMALE = 2;
}
\`\`\`

实际上，因为\`interface\`的字段只能是\`public static final\`类型，所以我们可以把这些修饰符都去掉，上述代码可以简写为：

\`\`\`java
public interface Person {
    // 编译器会自动加上public static final:
    int MALE = 1;
    int FEMALE = 2;
}
\`\`\`

编译器会自动把该字段变为\`public static final\`类型。

### 练习

给\`Person\`类增加一个静态字段\`count\`和静态方法\`getCount()\`，统计实例创建的个数。

### 小结

静态字段属于所有实例“共享”的字段，实际上是属于\`class\`的字段；

调用静态方法不需要实例，无法访问\`this\`，但可以访问静态字段和其他静态方法；

静态方法常用于工具类和辅助方法。

---

---`},{t:"包",u:"https://liaoxuefeng.com/books/java/oop/basic/package/index.html",md:'# 包\n[](https://weibo.com/liaoxuefeng)\n[廖雪峰](https://weibo.com/liaoxuefeng) [](https://github.com/michaelliao) [](https://weibo.com/liaoxuefeng) [](https://zhihu.com/people/liaoxuefeng) [](https://twitter.com/liaoxuefeng)\n## 包作用域\n位于同一个包的类，可以访问包作用域的字段和方法。不用 `public` 、 `protected` 、 `private` 修饰的字段和方法就是包作用域。例如， `Person` 类定义在 `hello` 包下面：\n```\npackage  hello;\n\n public class Person  {\n     // 包作用域: void hello ()  {\n        System.out.println( "Hello!" );\n    }\n}\n```\n`Main` 类也定义在 `hello` 包下面：\n```\npackage  hello;\n\n public class Main  {\n     public static void main (String[] args)  {\n         Person p = new Person ();\n        p.hello();  // 可以调用，因为Main和Person在同一个包 \n    }\n}\n```\n\n## import\n在一个 `class` 中，我们总会引用其他的 `class` 。例如，小明的 `ming.Person` 类，如果要引用小军的 `mr.jun.Arrays` 类，他有三种写法：\n第一种，直接写出完整类名，例如：\n```\n// Person.java package  ming;\n\n public class Person  {\n     public void run ()  {\n         // 写完整类名: mr.jun.Arrays \n        mr.jun. Arrays arrays = new mr .jun.Arrays();\n    }\n}\n```\n很显然，每次写完整类名比较痛苦。\n因此，第二种写法是用 `import` 语句，导入小军的 `Arrays` ，然后写简单类名：\n```\n// Person.java package  ming;\n\n // 导入完整类名: import  mr.jun.Arrays;\n\n public class Person  {\n     public void run ()  {\n         // 写简单类名: Arrays Arrays arrays = new Arrays ();\n    }\n}\n```\n在写 `import` 的时候，可以使用 `*` ，表示把这个包下面的所有 `class` 都导入进来（但不包括子包的 `class` ）：\n```\n// Person.java package  ming;\n\n // 导入mr.jun包的所有class: import  mr.jun.*;\n\n public class Person  {\n     public void run ()  {\n         Arrays arrays = new Arrays ();\n    }\n}\n```\n我们一般不推荐这种写法，因为在导入了多个包后，很难看出 `Arrays` 类属于哪个包。\n还有一种 `import static` 的语法，它可以导入一个类的静态字段和静态方法：\n```\npackage  main;\n\n // 导入System类的所有静态字段和静态方法: import static  java.lang.System.*;\n\n public class Main  {\n     public static void main (String[] args)  {\n         // 相当于调用System.out.println(…) \n        out.println( "Hello, world!" );\n    }\n}\n```\n`import static` 很少使用。\nJava编译器最终编译出的 `.class` 文件只使用 _完整类名_ ，因此，在代码中，当编译器遇到一个 `class` 名称时：\n* 如果是完整类名，就直接根据完整类名查找这个 `class` ；\n* 如果是简单类名，按下面的顺序依次查找：\n  + 查找当前 `package` 是否存在这个 `class` ；\n  + 查找 `import` 的包是否包含这个 `class` ；\n  + 查找 `java.lang` 包是否包含这个 `class` 。\n如果按照上面的规则还无法确定类名，则编译报错。\n我们来看一个例子：\n```\n// Main.java package  test;\n\n import  java.text.Format;\n\n public class Main  {\n     public static void main (String[] args)  {\n        java.util.List list;  // ok，使用完整类名 -> java.util.List Format format = null ;  // ok，使用import的类 -> java.text.Format String s = "hi" ;  // ok，使用java.lang包的String -> java.lang.String \n        System.out.println(s);  // ok，使用java.lang包的System -> java.lang.System MessageFormat mf = null ;  // 编译错误：无法找到MessageFormat: MessageFormat cannot be resolved to a type \n    }\n}\n```\n因此，编写class的时候，编译器会自动帮我们做两个import动作：\n* 默认自动 `import` 当前 `package` 的其他 `class` ；\n* 默认自动 `import java.lang.*` 。\n注意\n自动导入的是java.lang包，但类似java.lang.reflect这些包仍需要手动导入。\n如果有两个 `class` 名称相同，例如， `mr.jun.Arrays` 和 `java.util.Arrays` ，那么只能 `import` 其中一个，另一个必须写完整类名。\n\n## 最佳实践\n为了避免名字冲突，我们需要确定唯一的包名。推荐的做法是使用倒置的域名来确保唯一性。例如：\n* org.apache\n* org.apache.commons.log\n* com.liaoxuefeng.sample\n子包就可以根据功能自行命名。\n要注意不要和 `java.lang` 包的类重名，即自己的类不要使用这些名字：\n* String\n* System\n* Runtime\n* ...\n要注意也不要和JDK常用类重名：\n* java.util.List\n* java.text.Format\n* java.math.BigInteger\n* ...\n\n## 编译和运行\n假设我们创建了如下的目录结构：\n```\nwork\n├── bin\n└── src\n    └── com\n        └── itranswarp\n            ├── sample\n            │   └── Main.java\n            └── world\n                └── Person.java\n```\n其中， `bin` 目录用于存放编译后的 `class` 文件， `src` 目录按包结构存放Java源码，我们怎么一次性编译这些Java源码呢？\n首先，确保当前目录是 `work` 目录，即存放 `src` 和 `bin` 的父目录：\n```\n$ ls\nbin src\n```\n然后，编译 `src` 目录下的所有Java文件：\n```\n$ javac -d ./bin src/**/*.java\n```\n命令行 `-d` 指定输出的 `class` 文件存放 `bin` 目录，后面的参数 `src/**/*.java` 表示 `src` 目录下的所有 `.java` 文件，包括任意深度的子目录。\n注意：Windows不支持 `**` 这种搜索全部子目录的做法，所以在Windows下编译必须依次列出所有 `.java` 文件：\n```\nC:\\work> javac -d bin src\\com\\itranswarp\\sample\\Main.java src\\com\\itranswarp\\world\\Persion.java\n```\n使用Windows的PowerShell可以利用 `Get-ChildItem` 来列出指定目录下的所有 `.java` 文件：\n```\nPS C:\\work> (Get-ChildItem -Path .\\src -Recurse -Filter *.java).FullName\nC:\\work\\src\\com\\itranswarp\\sample\\Main.java\nC:\\work\\src\\com\\itranswarp\\world\\Person.java\n```\n因此，编译命令可写为：\n```\nPS C:\\work> javac -d .\\bin (Get-ChildItem -Path .\\src -Recurse -Filter *.java).FullName\n```\n\n...\n\n```\n$ java -cp bin com.itranswarp.sample.Main \nHello, world!\n```\n\n## 练习\n请按如下包结构创建工程项目：\n```\noop-package\n└── src\n    └── com\n        └── itranswarp\n            ├── sample\n            │   └── Main.java\n            └── world\n                └── Person.java\n```\n[下载练习](https://liaoxuefeng.com/books/java/oop/basic/package/oop-package.zip)\n\n## 小结\nJava内建的 `package` 机制是为了避免 `class` 命名冲突；\nJDK的核心类使用 `java.lang` 包，编译器会自动导入；\nJDK的其它常用类定义在 `java.util.*` ， `java.math.*` ， `java.text.*` ，……；\n包名推荐使用倒置的域名，例如 `org.apache` 。\n[静态字段和静态方法](https://liaoxuefeng.com/books/java/oop/basic/static/index.html)\n[作用域](https://liaoxuefeng.com/books/java/oop/basic/scope/index.html)'}],17:[{t:"BigInteger",u:"https://liaoxuefeng.com/books/java/oop/core/biginteger/index.html",md:"# BigInteger\n[](https://weibo.com/liaoxuefeng)\n[廖雪峰](https://weibo.com/liaoxuefeng) [](https://github.com/michaelliao) [](https://weibo.com/liaoxuefeng) [](https://zhihu.com/people/liaoxuefeng) [](https://twitter.com/liaoxuefeng)\n## 小结\n`BigInteger` 用于表示任意大小的整数；\n`BigInteger` 是不变类，并且继承自 `Number` ；\n将 `BigInteger` 转换成基本类型时可使用 `longValueExact()` 等方法保证结果准确。\n记录类\nBigDecimal"}],18:[{t:"Java的异常",u:"https://liaoxuefeng.com/books/java/exception/java-exception/index.html",md:`# Java的异常

[  ](https://weibo.com/liaoxuefeng)

在计算机程序运行的过程中，总是会出现各种各样的错误。

有一些错误是用户造成的，比如，希望用户输入一个\`int\`类型的年龄，但是用户的输入是\`abc\`：

\`\`\`java
// 假设用户输入了abc：
String s = "abc";
int n = Integer.parseInt(s); // NumberFormatException!
\`\`\`

程序想要读写某个文件的内容，但是用户已经把它删除了：

\`\`\`java
// 用户删除了该文件：
String t = readFile("C:\\\\abc.txt"); // FileNotFoundException!
\`\`\`

还有一些错误是随机出现，并且永远不可能避免的。比如：

- 网络突然断了，连接不到远程服务器；
- 内存耗尽，程序崩溃了；
- 用户点“打印”，但根本没有打印机；
- ……
所以，一个健壮的程序必须处理各种各样的错误。

所谓错误，就是程序调用某个函数的时候，如果失败了，就表示出错。

调用方如何获知调用失败的信息？有两种方法：

方法一：约定返回错误码。

例如，处理一个文件，如果返回\`0\`，表示成功，返回其他整数，表示约定的错误码：

\`\`\`java
int code = processFile("C:\\\\test.txt");
if (code == 0) {
    // ok:
} else {
    // error:
    switch (code) {
    case 1:
        // file not found:
    case 2:
        // no read permission:
    default:
        // unknown error:
    }
}
\`\`\`

因为使用\`int\`类型的错误码，想要处理就非常麻烦。这种方式常见于底层C函数。

方法二：在语言层面上提供一个异常处理机制。

Java内置了一套异常处理机制，总是使用异常来表示错误。

异常是一种\`class\`，因此它本身带有类型信息。异常可以在任何地方抛出，但只需要在上层捕获，这样就和方法调用分离了：

\`\`\`java
try {
    String s = processFile(“C:\\\\test.txt”);
    // ok:
} catch (FileNotFoundException e) {
    // file not found:
} catch (SecurityException e) {
    // no read permission:
} catch (IOException e) {
    // io error:
} catch (Exception e) {
    // other error:
}
\`\`\`

因为Java的异常是\`class\`，它的继承关系如下：

\`\`\`
                     ┌───────────┐
                     │  Object   │
                     └───────────┘
                           ▲
                           │
                     ┌───────────┐
                     │ Throwable │
                     └───────────┘
                           ▲
                 ┌─────────┴─────────┐
                 │                   │
           ┌───────────┐       ┌───────────┐
           │   Error   │       │ Exception │
           └───────────┘       └───────────┘
                 ▲                   ▲
         ┌───────┘              ┌────┴──────────┐
         │                      │               │
┌─────────────────┐    ┌─────────────────┐┌───────────┐
│OutOfMemoryError │... │RuntimeException ││IOException│...
└─────────────────┘    └─────────────────┘└───────────┘
                                ▲
                    ┌───────────┴─────────────┐
                    │                         │
         ┌─────────────────────┐ ┌─────────────────────────┐
         │NullPointerException │ │IllegalArgumentException │...
         └─────────────────────┘ └─────────────────────────┘
\`\`\`

从继承关系可知：\`Throwable\`是异常体系的根，它继承自\`Object\`。\`Throwable\`有两个体系：\`Error\`和\`Exception\`，\`Error\`表示严重的错误，程序对此一般无能为力，例如：

- \`OutOfMemoryError\`：内存耗尽
- \`NoClassDefFoundError\`：无法加载某个Class
- \`StackOverflowError\`：栈溢出
而\`Exception\`则是运行时的错误，它可以被捕获并处理。

某些异常是应用程序逻辑处理的一部分，应该捕获并处理。例如：

- \`NumberFormatException\`：数值类型的格式错误
- \`FileNotFoundException\`：未找到文件
- \`SocketException\`：读取网络失败
还有一些异常是程序逻辑编写不对造成的，应该修复程序本身。例如：

- \`NullPointerException\`：对某个\`null\`的对象调用方法或字段
- \`IndexOutOfBoundsException\`：数组索引越界
\`Exception\`又分为两大类：

1. \`RuntimeException\`以及它的子类；
2. 非\`RuntimeException\`（包括\`IOException\`、\`ReflectiveOperationException\`等等）
Java规定：

- 必须捕获的异常，包括\`Exception\`及其子类，但不包括\`RuntimeException\`及其子类，这种类型的异常称为Checked Exception。
- 不需要捕获的异常，包括\`Error\`及其子类，\`RuntimeException\`及其子类。
 注意

编译器对RuntimeException及其子类不做强制捕获要求，不是指应用程序本身不应该捕获并处理RuntimeException。是否需要捕获，具体问题具体分析。

### 捕获异常

捕获异常使用\`try...catch\`语句，把可能发生异常的代码放到\`try {...}\`中，然后使用\`catch\`捕获对应的\`Exception\`及其子类：

\`\`\`java
// try...catch
import java.io.UnsupportedEncodingException;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        byte[] bs = toGBK("中文");
        System.out.println(Arrays.toString(bs));
    }

    static byte[] toGBK(String s) {
        try {
            // 用指定编码转换String为byte[]:
            return s.getBytes("GBK");
        } catch (UnsupportedEncodingException e) {
            // 如果系统不支持GBK编码，会捕获到UnsupportedEncodingException:
            System.out.println(e); // 打印异常信息
            return s.getBytes(); // 尝试使用默认编码
        }
    }
}
\`\`\`

如果我们不捕获\`UnsupportedEncodingException\`，会出现编译失败的问题：

\`\`\`java
// try...catch
import java.io.UnsupportedEncodingException;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        byte[] bs = toGBK("中文");
        System.out.println(Arrays.toString(bs));
    }

    static byte[] toGBK(String s) {
        return s.getBytes("GBK");
    }
}
\`\`\`

编译器会报错，错误信息类似：unreported exception UnsupportedEncodingException; must be caught or declared to be thrown，并且准确地指出需要捕获的语句是\`return s.getBytes("GBK");\`。意思是说，像\`UnsupportedEncodingException\`这样的Checked Exception，必须被捕获。

这是因为\`String.getBytes(String)\`方法定义是：

\`\`\`java
public byte[] getBytes(String charsetName) throws UnsupportedEncodingException {
    ...
}
\`\`\`

在方法

……（中间部分略）……

## 小结

Java使用异常来表示错误，并通过\`try ... catch\`捕获异常；

Java的异常是\`class\`，并且从\`Throwable\`继承；

\`Error\`是无需捕获的严重错误，\`Exception\`是应该捕获的可处理的错误；

\`RuntimeException\`无需强制捕获，非\`RuntimeException\`（Checked Exception）需强制捕获，或者用\`throws\`声明；

不推荐捕获了异常但不进行任何处理。

---

---`},{t:"捕获异常",u:"https://liaoxuefeng.com/books/java/exception/catch-exception/index.html",md:`# 捕获异常
在Java中，凡是可能抛出异常的语句，都可以用 \`try ... catch\` 捕获。把可能发生异常的语句放在 \`try { ... }\` 中，然后使用 \`catch\` 捕获对应的 \`Exception\` 及其子类。

...

## 多catch语句
\`\`\`
public static void main (String[] args)  {
     try  {
        process1();
        process2();
        process3();
    }  catch  (IOException e) {
        System.out.println(e);
    }  catch  (NumberFormatException e) {
        System.out.println(e);
    }
}
\`\`\`

...

\`\`\`
public static void main (String[] args)  {
     try  {
        process1();
        process2();
        process3();
    }  catch  (IOException e) {
        System.out.println( "IO error" );
    }  catch  (UnsupportedEncodingException e) {  // 永远捕获不到 
        System.out.println( "Bad encoding" );
    }
}
\`\`\`

...

\`\`\`
public static void main (String[] args)  {
     try  {
        process1();
        process2();
        process3();
    }  catch  (UnsupportedEncodingException e) {
        System.out.println( "Bad encoding" );
    }  catch  (IOException e) {
        System.out.println( "IO error" );
    }
}
\`\`\`

...

## finally语句
\`\`\`
public static void main (String[] args)  {
     try  {
        process1();
        process2();
        process3();
        System.out.println( "END" );
    }  catch  (UnsupportedEncodingException e) {
        System.out.println( "Bad encoding" );
        System.out.println( "END" );
    }  catch  (IOException e) {
        System.out.println( "IO error" );
        System.out.println( "END" );
    }
}
\`\`\`

...

\`\`\`
public static void main (String[] args)  {
     try  {
        process1();
        process2();
        process3();
    }  catch  (UnsupportedEncodingException e) {
        System.out.println( "Bad encoding" );
    }  catch  (IOException e) {
        System.out.println( "IO error" );
    }  finally  {
        System.out.println( "END" );
    }
}
\`\`\`

...

## 捕获多种异常
\`\`\`
public static void main (String[] args)  {
     try  {
        process1();
        process2();
        process3();
    }  catch  (IOException e) {
        System.out.println( "Bad input" );
    }  catch  (NumberFormatException e) {
        System.out.println( "Bad input" );
    }  catch  (Exception e) {
        System.out.println( "Unknown error" );
    }
}
\`\`\`

...

\`\`\`
public static void main (String[] args)  {
     try  {
        process1();
        process2();
        process3();
    }  catch  (IOException | NumberFormatException e) {
         // IOException或NumberFormatException 
        System.out.println( "Bad input" );
    }  catch  (Exception e) {
        System.out.println( "Unknown error" );
    }
}
\`\`\``}],19:[{t:"抛出异常",u:"https://liaoxuefeng.com/books/java/exception/throw-exception/index.html",md:`# 抛出异常
## 异常的传播
当某个方法抛出了异常时，如果当前方法没有捕获异常，异常就会被抛到上层调用方法，直到遇到某个 \`try ... catch\` 被捕获为止：
\`\`\`
// exception public class Main  {
     public static void main (String[] args)  {
         try  {
            process1();
        }  catch  (Exception e) {
            e.printStackTrace();
        }
    }

     static void process1 ()  {
        process2();
    }

     static void process2 ()  {
        Integer.parseInt( null );  // 会抛出NumberFormatException 
    }
}
\`\`\`
通过 \`printStackTrace()\` 可以打印出方法的调用栈，类似：
\`\`\`
java.lang.NumberFormatException:  null 
    at java.base/java.lang.Integer.parseInt(Integer.java: 614 )
    at java.base/java.lang.Integer.parseInt(Integer.java: 770 )
    at Main.process2(Main.java: 16 )
    at Main.process1(Main.java: 12 )
    at Main.main(Main.java: 5 )
\`\`\`

...

1. \`main()\` 调用 \`process1()\` ；
2. \`process1()\` 调用 \`process2()\` ；
3. \`process2()\` 调用 \`Integer.parseInt(String)\` ；
4. \`Integer.parseInt(String)\` 调用 \`Integer.parseInt(String, int)\` 。
查看 \`Integer.java\` 源码可知，抛出异常的方法代码如下：
\`\`\`
public static int parseInt (String s,  int  radix) throws  NumberFormatException {
     if  (s ==  null ) {
         throw new NumberFormatException ( "null" );
    }
    ...
}
\`\`\`
并且，每层调用均给出了源代码的行号，可直接定位。

## 抛出异常
当发生错误时，例如，用户输入了非法的字符，我们就可以抛出异常。
如何抛出异常？参考 \`Integer.parseInt()\` 方法，抛出异常分两步：
1. 创建某个 \`Exception\` 的实例；
2. 用 \`throw\` 语句抛出。
下面是一个例子：
\`\`\`
void process2 (String s)  {
     if  (s== null ) {
         NullPointerException e = new NullPointerException ();
         throw  e;
    }
}
\`\`\`
实际上，绝大部分抛出异常的代码都会合并写成一行：
\`\`\`
void process2 (String s)  {
     if  (s== null ) {
         throw new NullPointerException ();
    }
}
\`\`\`
如果一个方法捕获了某个异常后，又在 \`catch\` 子句中抛出新的异常，就相当于把抛出的异常类型“转换”了：
\`\`\`
void process1 (String s)  {
     try  {
        process2();
    }  catch  (NullPointerException e) {
         throw new IllegalArgumentException ();
    }
}

 void process2 (String s)  {
     if  (s== null ) {
         throw new NullPointerException ();
    }
}
\`\`\`
当 \`process2()\` 抛出 \`NullPointerException\` 后，被 \`process1()\` 捕获，然后抛出 \`IllegalArgumentException()\` 。
如果在 \`main()\` 中捕获 \`IllegalArgumentException\` ，我们看看打印的异常栈：
\`\`\`
// exception public class Main  {
     public static void main (String[] args)  {
         try  {
            process1();
        }  catch  (Exception e) {
            e.printStackTrace();
        }
    }

     static void process1 ()  {
         try  {
            process2();
        }  catch  (NullPointerException e) {
             throw new IllegalArgumentException ();
        }
    }

     static void process2 ()  {
         throw new NullPointerException ();
    }
}
\`\`\`
打印出的异常栈类似：
\`\`\`
java.lang.IllegalArgumentException
    at Main.process1(Main.java:15)
    at Main.main(Main.java:5)
\`\`\`
这说明新的异常丢失了原始异常信息，我们已经看不到原始异常 \`NullPointerException\` 的信息了。
为了能追踪到完整的异常栈，在构造异常的时候，把原始的 \`Exception\` 实例传进去，新的 \`Exception\` 就可以持有原始 \`Exception\` 信息。对上述代码改进如下：
\`\`\`
// exception public class Main  {
     public static void main (String[] args)  {
         try  {
            process1();
        }  catch  (Exception e) {
            e.printStackTrace();
        }
    }

     static void process1 ()  {
         try  {
            process2();
        }  catch  (NullPointerException e) {
             throw new IllegalArgumentException (e);
        }
    }

     static void process2 ()  {
         throw new NullPointerException ();
    }
}
\`\`\`
运行上述代码，打印出的异常栈类似：
\`\`\`
java.lang.IllegalArgumentException: java.lang.NullPointerException
    at Main.process1(Main.java:15)
    at Main.main(Main.java:5)
Caused by: java.lang.NullPointerException
    at Main.process2(Main.java:20)
    at Main.process1(Main.java:13)
\`\`\`
注意到 \`Caused by: Xxx\` ，说明捕获的 \`IllegalArgumentException\` 并不是造成问题的根源，根源在于 \`NullPointerException\` ，是在 \`Main.process2()\` 方法抛出的。
在代码中获取原始异常可以使用 \`Throwable.getCause()\` 方法。如果返回 \`null\` ，说明已经是“根异常”了。
有了完整的异常栈的信息，我们才能快速定位并修复代码的问题。
最佳实践
捕获到异常并再次抛出时，一定要留住原始异常，否则很难定位第一案发现场！
如果我们在 \`try\` 或者 \`catch\` 语句块中抛出异常， \`finally\` 语句是否会执行？例如：
\`\`\`
// exception public class Main  {
     public static void main (String[] args)  {
         try  {
            Integer.parseInt( "abc" );
        }  catch  (Exception e) {
            System.out.println( "catched" );
             throw new RuntimeException (e);
        }  finally  {
            System.out.println( "finally" );
        }
    }
}
\`\`\`
上述代码执行结果如下：
\`\`\`
catched
finally
Exception in thread "main" java.lang.RuntimeException: java.lang.NumberFormatException: For input string: "abc"
    at Main.main(Main.java:8)
Caused by: java.lang.NumberFormatException: For input string: "abc"
    at ...
\`\`\`
第一行打印了 \`catched\` ，说明进入了 \`catch\` 语句块。第二行打印了 \`finally\` ，说明执行了 \`finally\` 语句块。
因此，在 \`catch\` 中抛出异常，不会影响 \`finally\` 的执行。JVM会先执行 \`finally\` ，然后抛出异常。

## 异常屏蔽
如果在执行 \`finally\` 语句时抛出异常，那么， \`catch\` 语句的异常还能否继续抛出？例如：
\`\`\`
// exception public class Main  {
     pub

……（中间部分略）……

## 小结
调用 \`printStackTrace()\` 可以打印异常的传播栈，对于调试非常有用；
捕获异常并再次抛出新的异常时，应该持有原始异常信息；
通常不要在 \`finally\` 中抛出异常。如果在 \`finally\` 中抛出异常，应该原始异常加入到原有异常中。调用方可通过 \`Throwable.getSuppressed()\` 获取所有添加的 \`Suppressed Exception\` 。
捕获异常
自定义异常`},{t:"自定义异常",u:"https://liaoxuefeng.com/books/java/exception/custom-exception/index.html",md:`# 自定义异常
[](https://weibo.com/liaoxuefeng)
[廖雪峰](https://weibo.com/liaoxuefeng) [](https://github.com/michaelliao) [](https://weibo.com/liaoxuefeng) [](https://zhihu.com/people/liaoxuefeng) [](https://twitter.com/liaoxuefeng)
## 小结
抛出异常时，尽量复用JDK已定义的异常类型；
自定义异常体系时，推荐从 \`RuntimeException\` 派生“根异常”，再派生出业务异常；
自定义异常时，应该提供多种构造方法。
抛出异常
NullPointerException`}],20:[{t:"使用JDK Logging",u:"https://liaoxuefeng.com/books/java/exception/jdk-logging/index.html",md:`# 使用JDK Logging
[](https://weibo.com/liaoxuefeng)
[廖雪峰](https://weibo.com/liaoxuefeng) [](https://github.com/michaelliao) [](https://weibo.com/liaoxuefeng) [](https://zhihu.com/people/liaoxuefeng) [](https://twitter.com/liaoxuefeng)
## 练习
使用 \`logger.severe()\` 打印异常：
\`\`\`
import  java.io.UnsupportedEncodingException;
 import  java.util.logging.Logger;

 public class Main  {
     public static void main (String[] args)  {
         Logger logger =  Logger.getLogger(Main.class.getName());
        logger.info( "Start process..." );
         try  {
             "" .getBytes( "invalidCharsetName" );
        }  catch  (UnsupportedEncodingException e) {
             //  TODO:  使用logger.severe()打印异常 
        }
        logger.info( "Process end." );
    }
}
\`\`\`
下载练习

## 小结
日志是为了替代 \`System.out.println()\` ，可以定义格式，重定向到文件等；
日志可以存档，便于追踪问题；
日志记录可以按级别分类，便于打开或关闭某些级别；
可以根据配置文件调整日志，无需修改代码；
Java标准库提供了 \`java.util.logging\` 来实现日志功能。
使用断言
使用Commons Logging`}],21:[{t:"使用断言",u:"https://liaoxuefeng.com/books/java/exception/assert/index.html",md:'# 使用断言\n语句 `assert x >= 0;` 即为断言，断言条件 `x >= 0` 预期为 `true` 。如果计算结果为 `false` ，则断言失败，抛出 `AssertionError` 。\n使用 `assert` 语句时，还可以添加一个可选的断言消息：\n```\nassert  x >=  0  :  "x must >= 0" ;\n```\n这样，断言失败的时候， `AssertionError` 会带上消息 `x must >= 0` ，更加便于调试。\nJava断言的特点是：断言失败时会抛出 `AssertionError` ，导致程序结束退出。因此，断言不能用于可恢复的程序错误，只应该用于开发和测试阶段。\n对于可恢复的程序错误，不应该使用断言。例如：\n```\nvoid sort ( int [] arr)  {\n     assert  arr !=  null ;\n}\n```\n应该抛出异常并在上层捕获：\n```\nvoid sort ( int [] arr)  {\n     if  (arr ==  null ) {\n         throw new IllegalArgumentException ( "array cannot be null" );\n    }\n}\n```\n当我们在程序中使用 `assert` 时，例如，一个简单的断言：\n\n...\n\n这是怎么回事？为什么 `assert` 语句不起作用？\n这是因为JVM默认关闭断言指令，即遇到 `assert` 语句就自动忽略了，不执行。\n要执行 `assert` 语句，必须给Java虚拟机传递 `-enableassertions` （可简写为 `-ea` ）参数启用断言。所以，上述程序必须在命令行下运行才有效果：\n```\n$ java -ea Main.java\nException in thread "main" java.lang.AssertionError\n	at Main.main(Main.java:5)\n```'}],22:[{t:"什么是泛型",u:"https://liaoxuefeng.com/books/java/generics/what-is-generics/index.html",md:"# 什么是泛型\n[](https://weibo.com/liaoxuefeng)\n[廖雪峰](https://weibo.com/liaoxuefeng) [](https://github.com/michaelliao) [](https://weibo.com/liaoxuefeng) [](https://zhihu.com/people/liaoxuefeng) [](https://twitter.com/liaoxuefeng)\n## 向上转型\n在Java标准库中的 `ArrayList<T>` 实现了 `List<T>` 接口，它可以向上转型为 `List<T>` ：\n```\npublic class ArrayList <T>  implements List <T> {\n    ...\n}\n\nList<String> list =  new ArrayList <String>();\n```\n即类型 `ArrayList<T>` 可以向上转型为 `List<T>` 。\n要 _特别注意_ ：不能把 `ArrayList<Integer>` 向上转型为 `ArrayList<Number>` 或 `List<Number>` 。\n这是为什么呢？假设 `ArrayList<Integer>` 可以向上转型为 `ArrayList<Number>` ，观察一下代码：\n\n...\n\n我们把一个 `ArrayList<Integer>` 转型为 `ArrayList<Number>` 类型后，这个 `ArrayList<Number>` 就可以接受 `Float` 类型，因为 `Float` 是 `Number` 的子类。但是， `ArrayList<Number>` 实际上和 `ArrayList<Integer>` 是同一个对象，也就是 `ArrayList<Integer>` 类型，它不可能接受 `Float` 类型，\n所以在获取 `Integer` 的时候将产生 `ClassCastException` 。\n实际上，编译器为了避免这种错误，根本就不允许把 `ArrayList<Integer>` 转型为 `ArrayList<Number>` 。\n特别注意\n`ArrayList<Integer>` 和 `ArrayList<Number>` 两者完全没有继承关系。\n用一个图来表示泛型的继承关系，就是 `T` 不变时，可以向上转型， `T` 本身不能向上转型：\n```\n  List<Integer>     ArrayList<Number>\n    ▲                            ▲\n    │                            │\n    │                            X\n    │                            │\nArrayList<Integer>  ArrayList<Integer>\n```\n\n## 小结\n泛型就是编写模板代码来适应任意类型；\n泛型的好处是使用时不必对类型进行强制转换，它通过编译器对类型进行检查；\n注意泛型的继承关系：可以把 `ArrayList<Integer>` 向上转型为 `List<Integer>` （ `T` 不能变！），但不能把 `ArrayList<Integer>` 向上转型为 `ArrayList<Number>` （ `T` 不能变成父类）。\n泛型\n使用泛型"},{t:"使用泛型",u:"https://liaoxuefeng.com/books/java/generics/use-generics/",md:`# 使用泛型

[  ](https://weibo.com/liaoxuefeng)

使用\`ArrayList\`时，如果不定义泛型类型时，泛型类型实际上就是\`Object\`：

\`\`\`java
// 编译器警告:
List list = new ArrayList();
list.add("Hello");
list.add("World");
String first = (String) list.get(0);
String second = (String) list.get(1);
\`\`\`

此时，只能把\`<T>\`当作\`Object\`使用，没有发挥泛型的优势。

当我们定义泛型类型\`<String>\`后，\`List<T>\`的泛型接口变为强类型\`List<String>\`：

\`\`\`java
// 无编译器警告:
List<String> list = new ArrayList<String>();
list.add("Hello");
list.add("World");
// 无强制转型:
String first = list.get(0);
String second = list.get(1);
\`\`\`

当我们定义泛型类型\`<Number>\`后，\`List<T>\`的泛型接口变为强类型\`List<Number>\`：

\`\`\`java
List<Number> list = new ArrayList<Number>();
list.add(new Integer(123));
list.add(new Double(12.34));
Number first = list.get(0);
Number second = list.get(1);
\`\`\`

编译器如果能自动推断出泛型类型，就可以省略后面的泛型类型。例如，对于下面的代码：

\`\`\`java
List<Number> list = new ArrayList<Number>();
\`\`\`

编译器看到泛型类型\`List<Number>\`就可以自动推断出后面的\`ArrayList<T>\`的泛型类型必须是\`ArrayList<Number>\`，因此，可以把代码简写为：

\`\`\`java
// 可以省略后面的Number，编译器可以自动推断泛型类型：
List<Number> list = new ArrayList<>();
\`\`\`

### 泛型接口

除了\`ArrayList<T>\`使用了泛型，还可以在接口中使用泛型。例如，\`Arrays.sort(Object[])\`可以对任意数组进行排序，但待排序的元素必须实现\`Comparable<T>\`这个泛型接口：

\`\`\`java
public interface Comparable<T> {
    /**
     * 返回负数: 当前实例比参数o小
     * 返回0: 当前实例与参数o相等
     * 返回正数: 当前实例比参数o大
     */
    int compareTo(T o);
}
\`\`\`

可以直接对\`String\`数组进行排序：

\`\`\`java
// sort
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        String[] ss = new String[] { "Orange", "Apple", "Pear" };
        Arrays.sort(ss);
        System.out.println(Arrays.toString(ss));
    }
}
\`\`\`

这是因为\`String\`本身已经实现了\`Comparable<String>\`接口。如果换成我们自定义的\`Person\`类型试试：

\`\`\`java
// sort
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Person[] ps = new Person[] {
            new Person("Bob", 61),
            new Person("Alice", 88),
            new Person("Lily", 75),
        };
        Arrays.sort(ps);
        System.out.println(Arrays.toString(ps));
    }
}

class Person {
    String name;
    int score;
    Person(String name, int score) {
        this.name = name;
        this.score = score;
    }
    public String toString() {
        return this.name + "," + this.score;
    }
}
\`\`\`

运行程序，我们会得到\`ClassCastException\`，即无法将\`Person\`转型为\`Comparable\`。我们修改代码，让\`Person\`实现\`Comparable<T>\`接口：

\`\`\`java
// sort
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Person[] ps = new Person[] {
            new Person("Bob", 61),
            new Person("Alice", 88),
            new Person("Lily", 75),
        };
        Arrays.sort(ps);
        System.out.println(Arrays.toString(ps));
    }
}

class Person implements Comparable<Person> {
    String name;
    int score;
    Person(String name, int score) {
        this.name = name;
        this.score = score;
    }
    public int compareTo(Person other) {
        return this.name.compareTo(other.name);
    }
    public String toString() {
        return this.name + "," + this.score;
    }
}
\`\`\`

运行上述代码，可以正确实现按\`name\`进行排序。

也可以修改比较逻辑，例如，按\`score\`从高到低排序。请自行修改测试。

### 小结

使用泛型时，把泛型参数\`<T>\`替换为需要的class类型，例如：\`ArrayList<String>\`，\`ArrayList<Number>\`等；

可以省略编译器能自动推断出的类型，例如：\`List<String> list = new ArrayList<>();\`；

不指定泛型参数类型时，编译器会给出警告，且只能将\`<T>\`视为\`Object\`类型；

可以在接口中定义泛型类型，实现此接口的类必须实现正确的泛型类型。

---

---`}],23:[{t:"Java集合简介",u:"https://liaoxuefeng.com/books/java/collection/quick-start/",md:'# Java集合简介\n\n[  ](https://weibo.com/liaoxuefeng)\n\n什么是集合（Collection）？集合就是“由若干个确定的元素所构成的整体”。例如，5只小兔构成的集合：\n\n```\n┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐\n\n│   (\\_(\\     (\\_/)     (\\_/)     (\\_/)      (\\(\\   │\n    ( -.-)    (•.•)     (>.<)     (^.^)     (=\'.\')\n│  C(")_(")  (")_(")   (")_(")   (")_(")   O(_")")  │\n\n└ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘\n```\n\n在数学中，我们经常遇到集合的概念。例如：\n\n- 有限集合：\n  - 一个班所有的同学构成的集合；\n  - 一个网站所有的商品构成的集合；\n  - ...\n- 无限集合：\n  - 全体自然数集合：1，2，3，……\n  - 有理数集合；\n  - 实数集合；\n  - ...\n为什么要在计算机中引入集合呢？这是为了便于处理一组类似的数据，例如：\n\n- 计算所有同学的总成绩和平均成绩；\n- 列举所有的商品名称和价格；\n- ……\n在Java中，如果一个Java对象可以在内部持有若干其他Java对象，并对外提供访问接口，我们把这种Java对象称为集合。很显然，Java的数组可以看作是一种集合：\n\n```java\nString[] ss = new String[10]; // 可以持有10个String对象\nss[0] = "Hello"; // 可以放入String对象\nString first = ss[0]; // 可以获取String对象\n```\n\n既然Java提供了数组这种数据类型，可以充当集合，那么，我们为什么还需要其他集合类？这是因为数组有如下限制：\n\n- 数组初始化后大小不可变；\n- 数组只能按索引顺序存取。\n因此，我们需要各种不同类型的集合类来处理不同的数据，例如：\n\n- 可变大小的顺序链表；\n- 保证无重复元素的集合；\n- ...\n\n### Collection\n\nJava标准库自带的`java.util`包提供了集合类：`Collection`，它是除`Map`外所有其他集合类的根接口。Java的`java.util`包主要提供了以下三种类型的集合：\n\n- `List`：一种有序列表的集合，例如，按索引排列的`Student`的`List`；\n- `Set`：一种保证没有重复元素的集合，例如，所有无重复名称的`Student`的`Set`；\n- `Map`：一种通过键值（key-value）查找的映射表集合，例如，根据`Student`的`name`查找对应`Student`的`Map`。\nJava集合的设计有几个特点：一是实现了接口和实现类相分离，例如，有序表的接口是`List`，具体的实现类有`ArrayList`，`LinkedList`等，二是支持泛型，我们可以限制在一个集合中只能放入同一种数据类型的元素，例如：\n\n```java\nList<String> list = new ArrayList<>(); // 只能放入String类型\n```\n\n最后，Java访问集合总是通过统一的方式——迭代器（Iterator）来实现，它最明显的好处在于无需知道集合内部元素是按什么方式存储的。\n\n由于Java的集合设计非常久远，中间经历过大规模改进，我们要注意到有一小部分集合类是遗留类，不应该继续使用：\n\n- `Hashtable`：一种线程安全的`Map`实现；\n- `Vector`：一种线程安全的`List`实现；\n- `Stack`：基于`Vector`实现的`LIFO`的栈。\n还有一小部分接口是遗留接口，也不应该继续使用：\n\n- `Enumeration<E>`：已被`Iterator<E>`取代。\n\n### 小结\n\nJava的集合类定义在`java.util`包中，支持泛型，主要提供了3种集合类，包括`List`，`Set`和`Map`。Java集合使用统一的`Iterator`遍历，尽量不要使用遗留接口。\n\n---\n\n---'},{t:"使用List",u:"https://liaoxuefeng.com/books/java/collection/list/",md:'# 使用List\n\n[  ](https://weibo.com/liaoxuefeng)\n\n在集合类中，`List`是最基础的一种集合：它是一种有序列表。\n\n`List`的行为和数组几乎完全相同：`List`内部按照放入元素的先后顺序存放，每个元素都可以通过索引确定自己的位置，`List`的索引和数组一样，从`0`开始。\n\n数组和`List`类似，也是有序结构，如果我们使用数组，在添加和删除元素的时候，会非常不方便。例如，从一个已有的数组`{\'A\', \'B\', \'C\', \'D\', \'E\'}`中删除索引为`2`的元素：\n\n```\n┌───┬───┬───┬───┬───┬───┐\n│ A │ B │ C │ D │ E │   │\n└───┴───┴───┴───┴───┴───┘\n              │   │\n          ┌───┘   │\n          │   ┌───┘\n          │   │\n          ▼   ▼\n┌───┬───┬───┬───┬───┬───┐\n│ A │ B │ D │ E │   │   │\n└───┴───┴───┴───┴───┴───┘\n```\n\n这个“删除”操作实际上是把`\'C\'`后面的元素依次往前挪一个位置，而“添加”操作实际上是把指定位置以后的元素都依次向后挪一个位置，腾出来的位置给新加的元素。这两种操作，用数组实现非常麻烦。\n\n因此，在实际应用中，需要增删元素的有序列表，我们使用最多的是`ArrayList`。实际上，`ArrayList`在内部使用了数组来存储所有元素。例如，一个`ArrayList`拥有5个元素，实际数组大小为`6`（即有一个空位）：\n\n```\nsize=5\n┌───┬───┬───┬───┬───┬───┐\n│ A │ B │ C │ D │ E │   │\n└───┴───┴───┴───┴───┴───┘\n```\n\n当添加一个元素并指定索引到`ArrayList`时，`ArrayList`自动移动需要移动的元素：\n\n```\nsize=5\n┌───┬───┬───┬───┬───┬───┐\n│ A │ B │   │ C │ D │ E │\n└───┴───┴───┴───┴───┴───┘\n```\n\n然后，往内部指定索引的数组位置添加一个元素，然后把`size`加`1`：\n\n```\nsize=6\n┌───┬───┬───┬───┬───┬───┐\n│ A │ B │ F │ C │ D │ E │\n└───┴───┴───┴───┴───┴───┘\n```\n\n继续添加元素，但是数组已满，没有空闲位置的时候，`ArrayList`先创建一个更大的新数组，然后把旧数组的所有元素复制到新数组，紧接着用新数组取代旧数组：\n\n```\nsize=6\n┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┐\n│ A │ B │ F │ C │ D │ E │   │   │   │   │   │   │\n└───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┘\n```\n\n现在，新数组就有了空位，可以继续添加一个元素到数组末尾，同时`size`加`1`：\n\n```\nsize=7\n┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┐\n│ A │ B │ F │ C │ D │ E │ G │   │   │   │   │   │\n└───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┘\n```\n\n可见，`ArrayList`把添加和删除的操作封装起来，让我们操作`List`类似于操作数组，却不用关心内部元素如何移动。\n\n我们考察`List<E>`接口，可以看到几个主要的接口方法：\n\n- 在末尾添加一个元素：`boolean add(E e)`\n- 在指定索引添加一个元素：`boolean add(int index, E e)`\n- 删除指定索引的元素：`E remove(int index)`\n- 删除某个元素：`boolean remove(Object e)`\n- 获取指定索引的元素：`E get(int index)`\n- 获取链表大小（包含元素的个数）：`int size()`\n但是，实现`List`接口并非只能通过数组（即`ArrayList`的实现方式）来实现，另一种`LinkedList`通过“链表”也实现了List接口。在`LinkedList`中，它的内部每个元素都指向下一个元素：\n\n```\n        ┌───┬───┐   ┌───┬───┐   ┌───┬───┐   ┌───┬───┐\nHEAD ──▶│ A │ ●─┼──▶│ B │ ●─┼──▶│ C │ ●─┼──▶│ D │   │\n        └───┴───┘   └───┴───┘   └───┴───┘   └───┴───┘\n```\n\n我们来比较一下`ArrayList`和`LinkedList`：\n\n| | ArrayList | LinkedList |\n|---|---|---|\n| 获取指定元素 | 速度很快 | 需要从头开始查找元素 |\n| 添加元素到末尾 | 速度很快 | 速度很快 |\n| 在指定位置添加/删除 | 需要移动元素 | 不需要移动元素 |\n| 内存占用 | 少 | 较大 |\n通常情况下，我们总是优先使用`ArrayList`。\n\n### List的特点\n\n使用`List`时，我们要关注`List`接口的规范。`List`接口允许我们添加重复的元素，即`List`内部的元素可以重复：\n\n```java\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = new ArrayList<>();\n        list.add("apple"); // size=1\n        list.add("pear"); // size=2\n        list.add("apple"); // 允许重复添加元素，size=3\n        System.out.println(list.size());\n    }\n}\n```\n\n`List`还允许添加`null`：\n\n```java\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = new ArrayList<>();\n        list.add("apple"); // size=1\n        list.add(null); // size=2\n        list.add("pear"); // size=3\n        String second = list.get(1); // null\n        System.out.println(second);\n    }\n}\n```\n\n### 创建List\n\n除了使用`ArrayList`和`LinkedList`，我们还可以通过`List`接口提供的`of()`方法，根据给定元素快速创建`List`：\n\n```java\nList<Integer> list = List.of(1, 2, 5);\n```\n\n但是`List.of()`方法不接受`null`值，如果传入`null`，会抛出`NullPointerException`异常。\n\n### 遍历List\n\n和数组类型类似，我们要遍历一个`List`，完全可以用`for`循环根据索引配合`get(int)`方法遍历：\n\n```java\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = List.of("apple", "pear", "banana");\n        for (int i=0; i<list.size(); i++) {\n            String s = list.get(i);\n            System.out.println(s);\n        }\n    }\n}\n```\n\n但这种方式并不推荐，一是代码复杂，二是因为`get(int)`方法只有`ArrayList`的实现是高效的，换成`LinkedList`后，索引越大，访问速度越慢。\n\n所以我们要始终坚持使用迭代器`Iterator`来访问`List`。`Iterator`本身也是一个对象，但它是由`List`的实例调用`iterator()`方法的时候创建的。`Iterator`对象知道如何遍历一个`List`，并且不同的`List`类型，返回的`Iterator`对象实现也是不同的，但总是具有最高的访问效率。\n\n`Iterator`对象有两个方法：`boolean hasNext()`判断是否有下一个元素，`E next()`返回下一个元素。因此，使用`Iterator`遍历`List`代码如下：\n\n```java\nimport java.util.Iterator;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = List.of("apple", "pear", "banana");\n        for (Iterator<String> it = list.iterator(); it.hasNext(); ) {\n            String s = it.next();\n            System.out.println(s);\n        }\n    }\n}\n```\n\n有童鞋可能觉得使用`Iterator`访问`List`的代码比使用索引更复杂。但是，要记住，通过`Iterator`遍历`List`永远是最高效的方式。并且，由于`Iterator`遍历是如此常用，所以，Java的`for each`循环本身就可以帮我们使用`Iterator`遍历。把上面的代码再改写如下：\n\n```java\nimport java.util.List;\n\npublic class Main {\n    public static void main(\n\n……（中间部分略）……\n\n## 小结\n\n`List`是按索引顺序访问的长度可变的有序表，优先使用`ArrayList`而不是`LinkedList`；\n\n可以直接使用`for each`遍历`List`；\n\n`List`可以和`Array`相互转换。\n\n---\n\n---'}],24:[{t:"使用Map",u:"https://liaoxuefeng.com/books/java/collection/map/",md:'# 使用Map\n\n[  ](https://weibo.com/liaoxuefeng)\n\n我们知道，`List`是一种顺序列表，如果有一个存储学生`Student`实例的`List`，要在`List`中根据`name`查找某个指定的`Student`的分数，应该怎么办？\n\n最简单的方法是遍历`List`并判断`name`是否相等，然后返回指定元素：\n\n```java\nList<Student> list = ...\nStudent target = null;\nfor (Student s : list) {\n    if ("Xiao Ming".equals(s.name)) {\n        target = s;\n        break;\n    }\n}\nSystem.out.println(target.score);\n```\n\n这种需求其实非常常见，即通过一个键去查询对应的值。使用`List`来实现存在效率非常低的问题，因为平均需要扫描一半的元素才能确定，而`Map`这种键值（key-value）映射表的数据结构，作用就是能高效通过`key`快速查找`value`（元素）。\n\n用`Map`来实现根据`name`查询某个`Student`的代码如下：\n\n```java\nimport java.util.HashMap;\nimport java.util.Map;\n\npublic class Main {\n    public static void main(String[] args) {\n        Student s = new Student("Xiao Ming", 99);\n        Map<String, Student> map = new HashMap<>();\n        map.put("Xiao Ming", s); // 将"Xiao Ming"和Student实例映射并关联\n        Student target = map.get("Xiao Ming"); // 通过key查找并返回映射的Student实例\n        System.out.println(target == s); // true，同一个实例\n        System.out.println(target.score); // 99\n        Student another = map.get("Bob"); // 通过另一个key查找\n        System.out.println(another); // 未找到返回null\n    }\n}\n\nclass Student {\n    public String name;\n    public int score;\n    public Student(String name, int score) {\n        this.name = name;\n        this.score = score;\n    }\n}\n```\n\n通过上述代码可知：`Map<K, V>`是一种键-值映射表，当我们调用`put(K key, V value)`方法时，就把`key`和`value`做了映射并放入`Map`。当我们调用`V get(K key)`时，就可以通过`key`获取到对应的`value`。如果`key`不存在，则返回`null`。和`List`类似，`Map`也是一个接口，最常用的实现类是`HashMap`。\n\n如果只是想查询某个`key`是否存在，可以调用`boolean containsKey(K key)`方法。\n\n如果我们在存储`Map`映射关系的时候，对同一个key调用两次`put()`方法，分别放入不同的`value`，会有什么问题呢？例如：\n\n```java\nimport java.util.HashMap;\nimport java.util.Map;\n\npublic class Main {\n    public static void main(String[] args) {\n        Map<String, Integer> map = new HashMap<>();\n        map.put("apple", 123);\n        map.put("pear", 456);\n        System.out.println(map.get("apple")); // 123\n        map.put("apple", 789); // 再次放入apple作为key，但value变为789\n        System.out.println(map.get("apple")); // 789\n    }\n}\n```\n\n重复放入`key-value`并不会有任何问题，但是一个`key`只能关联一个`value`。在上面的代码中，一开始我们把`key`对象`"apple"`映射到`Integer`对象`123`，然后再次调用`put()`方法把`"apple"`映射到`789`，这时，原来关联的`value`对象`123`就被“冲掉”了。实际上，`put()`方法的签名是`V put(K key, V value)`，如果放入的`key`已经存在，`put()`方法会返回被删除的旧的`value`，否则，返回`null`。\n\n 始终牢记\n\nMap中不存在重复的key，因为放入相同的key，只会把原有的key-value对应的value给替换掉。\n\n此外，在一个`Map`中，虽然`key`不能重复，但`value`是可以重复的：\n\n```java\nMap<String, Integer> map = new HashMap<>();\nmap.put("apple", 123);\nmap.put("pear", 123); // ok\n```\n\n### 遍历Map\n\n对`Map`来说，要遍历`key`可以使用`for each`循环遍历`Map`实例的`keySet()`方法返回的`Set`集合，它包含不重复的`key`的集合：\n\n```java\nimport java.util.HashMap;\nimport java.util.Map;\n\npublic class Main {\n    public static void main(String[] args) {\n        Map<String, Integer> map = new HashMap<>();\n        map.put("apple", 123);\n        map.put("pear", 456);\n        map.put("banana", 789);\n        for (String key : map.keySet()) {\n            Integer value = map.get(key);\n            System.out.println(key + " = " + value);\n        }\n    }\n}\n```\n\n同时遍历`key`和`value`可以使用`for each`循环遍历`Map`对象的`entrySet()`集合，它包含每一个`key-value`映射：\n\n```java\nimport java.util.HashMap;\nimport java.util.Map;\n\npublic class Main {\n    public static void main(String[] args) {\n        Map<String, Integer> map = new HashMap<>();\n        map.put("apple", 123);\n        map.put("pear", 456);\n        map.put("banana", 789);\n        for (Map.Entry<String, Integer> entry : map.entrySet()) {\n            String key = entry.getKey();\n            Integer value = entry.getValue();\n            System.out.println(key + " = " + value);\n        }\n    }\n}\n```\n\n`Map`和`List`不同的是，`Map`存储的是`key-value`的映射关系，并且，它*不保证顺序*。在遍历的时候，遍历的顺序既不一定是`put()`时放入的`key`的顺序，也不一定是`key`的排序顺序。使用`Map`时，任何依赖顺序的逻辑都是不可靠的。以`HashMap`为例，假设我们放入`"A"`，`"B"`，`"C"`这3个`key`，遍历的时候，每个`key`会保证被遍历一次且仅遍历一次，但顺序完全没有保证，甚至对于不同的JDK版本，相同的代码遍历的输出顺序都是不同的！\n\n 注意\n\n遍历Map时，不可假设输出的key是有序的！\n\n### 练习\n\n请编写一个根据`name`查找`score`的程序，并利用`Map`充当缓存，以提高查找效率：\n\n```java\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<Student> list = List.of(\n            new Student("Bob", 78),\n            new Student("Alice", 85),\n            new Student("Brush", 66),\n            new Student("Newton", 99));\n        var holder = new Students(list);\n        System.out.println(holder.getScore("Bob") == 78 ? "测试成功!" : "测试失败!");\n        System.out.println(holder.getScore("Alice") == 85 ? "测试成功!" : "测试失败!");\n        System.out.println(holder.getScore("Tom") == -1 ? "测试成功!" : "测试失败!");\n    }\n}\n\nclass Students {\n    List<Student> list;\n    Map<String, Integer> cache;\n\n    Students(List<Student> list) {\n        this.list = list;\n        cache = new HashMap<>();\n    }\n\n    /**\n     * 根据name查找score，找到返回score，未找到返回-1\n     */\n    int getScore(String name) {\n        // 先在Map中查找:\n        Integer score = this.cache.get(name);\n        if (score == null) {\n            // TODO:\n        }\n        return score == null ? -1 : score.intValue();\n    }\n\n    Integer findInList(String name) {\n        for (var ss : this.list) {\n            if (ss.name.equals(name)) {\n                return ss.score;\n            }\n        }\n        return null;\n    }\n}\n\nclass Student {\n    String name;\n    int score;\n\n    Student(String name, int score) {\n        this.name = name;\n        this.score = score;\n    }\n}\n```\n\n### 小结\n\n`Map`是一种映射表，可以通过`key`快速查找`value`；\n\n可以通过`for each`遍历`keySet()`，也可以通过`for each`遍历`entrySet()`，直接获取`key-value`；\n\n最常用的一种`Map`实现是`HashMap`。\n\n---\n\n---'}],25:[{t:"编写equals方法",u:"https://liaoxuefeng.com/books/java/collection/equals/",md:'# 编写equals方法\n\n[  ](https://weibo.com/liaoxuefeng)\n\n我们知道`List`是一种有序链表：`List`内部按照放入元素的先后顺序存放，并且每个元素都可以通过索引确定自己的位置。\n\n`List`还提供了`boolean contains(Object o)`方法来判断`List`是否包含某个指定元素。此外，`int indexOf(Object o)`方法可以返回某个元素的索引，如果元素不存在，就返回`-1`。\n\n我们来看一个例子：\n\n```java\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = List.of("A", "B", "C");\n        System.out.println(list.contains("C")); // true\n        System.out.println(list.contains("X")); // false\n        System.out.println(list.indexOf("C")); // 2\n        System.out.println(list.indexOf("X")); // -1\n    }\n}\n```\n\n这里我们注意一个问题，我们往`List`中添加的`"C"`和调用`contains("C")`传入的`"C"`是不是同一个实例？\n\n如果这两个`"C"`不是同一个实例，这段代码是否还能得到正确的结果？我们可以改写一下代码测试一下：\n\n```java\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = List.of("A", "B", "C");\n        System.out.println(list.contains(new String("C"))); // true or false?\n        System.out.println(list.indexOf(new String("C"))); // 2 or -1?\n    }\n}\n```\n\n因为我们传入的是`new String("C")`，所以一定是不同的实例。结果仍然符合预期，这是为什么呢？\n\n因为`List`内部并不是通过`==`判断两个元素是否相等，而是使用`equals()`方法判断两个元素是否相等，例如`contains()`方法可以实现如下：\n\n```java\npublic class ArrayList {\n    Object[] elementData;\n    public boolean contains(Object o) {\n        for (int i = 0; i < elementData.length; i++) {\n            if (o.equals(elementData[i])) {\n                return true;\n            }\n        }\n        return false;\n    }\n}\n```\n\n因此，要正确使用`List`的`contains()`、`indexOf()`这些方法，放入的实例必须正确覆写`equals()`方法，否则，放进去的实例，查找不到。我们之所以能正常放入`String`、`Integer`这些对象，是因为Java标准库定义的这些类已经正确实现了`equals()`方法。\n\n我们以`Person`对象为例，测试一下：\n\n```java\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<Person> list = List.of(\n            new Person("Xiao Ming"),\n            new Person("Xiao Hong"),\n            new Person("Bob")\n        );\n        System.out.println(list.contains(new Person("Bob"))); // false\n    }\n}\n\nclass Person {\n    String name;\n    public Person(String name) {\n        this.name = name;\n    }\n}\n```\n\n不出意外，虽然放入了`new Person("Bob")`，但是用另一个`new Person("Bob")`查询不到，原因就是`Person`类没有覆写`equals()`方法。\n\n### 编写equals\n\n如何正确编写`equals()`方法？`equals()`方法要求我们必须满足以下条件：\n\n- 自反性（Reflexive）：对于非`null`的`x`来说，`x.equals(x)`必须返回`true`；\n- 对称性（Symmetric）：对于非`null`的`x`和`y`来说，如果`x.equals(y)`为`true`，则`y.equals(x)`也必须为`true`；\n- 传递性（Transitive）：对于非`null`的`x`、`y`和`z`来说，如果`x.equals(y)`为`true`，`y.equals(z)`也为`true`，那么`x.equals(z)`也必须为`true`；\n- 一致性（Consistent）：对于非`null`的`x`和`y`来说，只要`x`和`y`状态不变，则`x.equals(y)`总是一致地返回`true`或者`false`；\n- 对`null`的比较：即`x.equals(null)`永远返回`false`。\n上述规则看上去似乎非常复杂，但其实代码实现`equals()`方法是很简单的，我们以`Person`类为例：\n\n```java\npublic class Person {\n    public String name;\n    public int age;\n}\n```\n\n首先，我们要定义“相等”的逻辑含义。对于`Person`类，如果`name`相等，并且`age`相等，我们就认为两个`Person`实例相等。\n\n因此，编写`equals()`方法如下：\n\n```java\npublic boolean equals(Object o) {\n    if (o instanceof Person p) {\n        return this.name.equals(p.name) && this.age == p.age;\n    }\n    return false;\n}\n```\n\n对于引用字段比较，我们使用`equals()`，对于基本类型字段的比较，我们使用`==`。\n\n如果`this.name`为`null`，那么`equals()`方法会报错，因此，需要继续改写如下：\n\n```java\npublic boolean equals(Object o) {\n    if (o instanceof Person p) {\n        boolean nameEquals = false;\n        if (this.name == null && p.name == null) {\n            nameEquals = true;\n        }\n        if (this.name != null) {\n            nameEquals = this.name.equals(p.name);\n        }\n        return nameEquals && this.age == p.age;\n    }\n    return false;\n}\n```\n\n如果`Person`有好几个引用类型的字段，上面的写法就太复杂了。要简化引用类型的比较，我们使用`Objects.equals()`静态方法：\n\n```java\npublic boolean equals(Object o) {\n    if (o instanceof Person p) {\n        return Objects.equals(this.name, p.name) && this.age == p.age;\n    }\n    return false;\n}\n```\n\n因此，我们总结一下`equals()`方法的正确编写方法：\n\n1. 先确定实例“相等”的逻辑，即哪些字段相等，就认为实例相等；\n2. 用`instanceof`判断传入的待比较的`Object`是不是当前类型，如果是，继续比较，否则，返回`false`；\n3. 对引用类型用`Objects.equals()`比较，对基本类型直接用`==`比较。\n使用`Objects.equals()`比较两个引用类型是否相等的目的是省去了判断`null`的麻烦。两个引用类型都是`null`时它们也是相等的。\n\n如果不调用`List`的`contains()`、`indexOf()`这些方法，那么放入的元素就不需要实现`equals()`方法。\n\n### 练习\n\n给Person类增加equals方法，使得调用indexOf()方法返回正常：\n\n```java\nimport java.util.List;\nimport java.util.Objects;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<Person> list = List.of(\n            new Person("Xiao", "Ming", 18),\n            new Person("Xiao", "Hong", 25),\n            new Person("Bob", "Smith", 20)\n        );\n        boolean exist = list.contains(new Person("Bob", "Smith", 20));\n        System.out.println(exist ? "测试成功!" : "测试失败!");\n    }\n}\n\nclass Person {\n    String firstName;\n    String lastName;\n    int age;\n    public Person(String firstName, String lastName, int age) {\n        this.firstName = firstName;\n        this.lastName = lastName;\n        this.age = age;\n    }\n}\n```\n\n### 小结\n\n在`List`中查找元素时，`List`的实现类通过元素的`equals()`方法比较两个元素是否相等，因此，放入的元素必须正确覆写`equals()`方法，Java标准库提供的`String`、`Integer`等已经覆写了`equals()`方法；\n\n编写`equals()`方法可借助`Objects.equals()`判断。\n\n如果不在`List`中查找元素，就不必覆写`equals()`方法。\n\n---\n\n---'},{t:"编写hashCode方法",u:"https://liaoxuefeng.com/books/java/collection/hashcode/",md:'# 编写hashCode方法\n\n[  ](https://weibo.com/liaoxuefeng)\n\n我们知道Map是一种键-值（key-value）映射表，可以通过key快速查找对应的value。\n\n以`HashMap`为例，观察下面的代码：\n\n```java\nMap<String, Person> map = new HashMap<>();\nmap.put("a", new Person("Xiao Ming"));\nmap.put("b", new Person("Xiao Hong"));\nmap.put("c", new Person("Xiao Jun"));\n\nmap.get("a"); // Person("Xiao Ming")\nmap.get("x"); // null\n```\n\n`HashMap`之所以能根据`key`直接拿到`value`，原因是它内部通过空间换时间的方法，用一个大数组存储所有`value`，并根据key直接计算出`value`应该存储在哪个索引：\n\n```\n  ┌───┐\n0 │   │\n  ├───┤\n1 │ ●─┼───▶ Person("Xiao Ming")\n  ├───┤\n2 │   │\n  ├───┤\n3 │   │\n  ├───┤\n4 │   │\n  ├───┤\n5 │ ●─┼───▶ Person("Xiao Hong")\n  ├───┤\n6 │ ●─┼───▶ Person("Xiao Jun")\n  ├───┤\n7 │   │\n  └───┘\n```\n\n如果`key`的值为`"a"`，计算得到的索引总是`1`，因此返回`value`为`Person("Xiao Ming")`，如果`key`的值为`"b"`，计算得到的索引总是`5`，因此返回`value`为`Person("Xiao Hong")`，这样，就不必遍历整个数组，即可直接读取`key`对应的`value`。\n\n当我们使用`key`存取`value`的时候，就会引出一个问题：\n\n我们放入`Map`的`key`是字符串`"a"`，但是，当我们获取`Map`的`value`时，传入的变量不一定就是放入的那个`key`对象。\n\n换句话讲，两个`key`应该是内容相同，但不一定是同一个对象。测试代码如下：\n\n```java\nimport java.util.HashMap;\nimport java.util.Map;\n\npublic class Main {\n    public static void main(String[] args) {\n        String key1 = "a";\n        Map<String, Integer> map = new HashMap<>();\n        map.put(key1, 123);\n\n        String key2 = new String("a");\n        map.get(key2); // 123\n\n        System.out.println(key1 == key2); // false\n        System.out.println(key1.equals(key2)); // true\n    }\n}\n```\n\n因为在`Map`的内部，对`key`做比较是通过`equals()`实现的，这一点和`List`查找元素需要正确覆写`equals()`是一样的，即正确使用`Map`必须保证：作为`key`的对象必须正确覆写`equals()`方法。\n\n我们经常使用`String`作为`key`，因为`String`已经正确覆写了`equals()`方法。但如果我们放入的`key`是一个自己写的类，就必须保证正确覆写了`equals()`方法。\n\n我们再思考一下`HashMap`为什么能通过`key`直接计算出`value`存储的索引。相同的`key`对象（使用`equals()`判断时返回`true`）必须要计算出相同的索引，否则，相同的`key`每次取出的`value`就不一定对。\n\n通过`key`计算索引的方式就是调用`key`对象的`hashCode()`方法，它返回一个`int`整数。`HashMap`正是通过这个方法直接定位`key`对应的`value`的索引，继而直接返回`value`。\n\n因此，正确使用`Map`必须保证：\n\n1. 作为`key`的对象必须正确覆写`equals()`方法，相等的两个`key`实例调用`equals()`必须返回`true`；\n2. 作为`key`的对象还必须正确覆写`hashCode()`方法，且`hashCode()`方法要严格遵循以下规范：\n  - 如果两个对象相等，则两个对象的`hashCode()`必须相等；\n  - 如果两个对象不相等，则两个对象的`hashCode()`尽量不要相等。\n即对应两个实例`a`和`b`：\n\n- 如果`a`和`b`相等，那么`a.equals(b)`一定为`true`，则`a.hashCode()`必须等于`b.hashCode()`；\n- 如果`a`和`b`不相等，那么`a.equals(b)`一定为`false`，则`a.hashCode()`和`b.hashCode()`尽量不要相等。\n上述第一条规范是正确性，必须保证实现，否则`HashMap`不能正常工作。\n\n而第二条如果尽量满足，则可以保证查询效率，因为不同的对象，如果返回相同的`hashCode()`，会造成`Map`内部存储冲突，使存取的效率下降。\n\n正确编写`equals()`的方法我们已经在[编写equals方法](../equals/index.html)一节中讲过了，以`Person`类为例：\n\n```java\npublic class Person {\n    String firstName;\n    String lastName;\n    int age;\n}\n```\n\n把需要比较的字段找出来：\n\n- firstName\n- lastName\n- age\n然后，引用类型使用`Objects.equals()`比较，基本类型使用`==`比较。\n\n在正确实现`equals()`的基础上，我们还需要正确实现`hashCode()`，即上述3个字段分别相同的实例，`hashCode()`返回的`int`必须相同：\n\n```java\npublic class Person {\n    String firstName;\n    String lastName;\n    int age;\n\n    @Override\n    int hashCode() {\n        int h = 0;\n        h = 31 * h + firstName.hashCode();\n        h = 31 * h + lastName.hashCode();\n        h = 31 * h + age;\n        return h;\n    }\n}\n```\n\n注意到`String`类已经正确实现了`hashCode()`方法，我们在计算`Person`的`hashCode()`时，反复使用`31*h`，这样做的目的是为了尽量把不同的`Person`实例的`hashCode()`均匀分布到整个`int`范围。\n\n和实现`equals()`方法遇到的问题类似，如果`firstName`或`lastName`为`null`，上述代码工作起来就会抛`NullPointerException`。为了解决这个问题，我们在计算`hashCode()`的时候，经常借助`Objects.hash()`来计算：\n\n```java\nint hashCode() {\n    return Objects.hash(firstName, lastName, age);\n}\n```\n\n所以，编写`equals()`和`hashCode()`遵循的原则是：\n\n`equals()`用到的用于比较的每一个字段，都必须在`hashCode()`中用于计算；`equals()`中没有使用到的字段，绝不可放在`hashCode()`中计算。\n\n另外注意，对于放入`HashMap`的`value`对象，没有任何要求。\n\n### 延伸阅读\n\n既然`HashMap`内部使用了数组，通过计算`key`的`hashCode()`直接定位`value`所在的索引，那么第一个问题来了：`hashCode()`返回的`int`范围高达±21亿，先不考虑负数，`HashMap`内部使用的数组得有多大？\n\n实际上`HashMap`初始化时默认的数组大小只有16，任何`key`，无论它的`hashCode()`有多大，都可以简单地通过：\n\n```java\nint index = key.hashCode() & 0xf; // 0xf = 15\n```\n\n把索引确定在0 ~ 15，即永远不会超出数组范围，上述算法只是一种最简单的实现。\n\n第二个问题：如果添加超过16个`key-value`到`HashMap`，数组不够用了怎么办？\n\n添加超过一定数量的`key-value`时，`HashMap`会在内部自动扩容，每次扩容一倍，即长度为16的数组扩展为长度32，相应地，需要重新确定`hashCode()`计算的索引位置。例如，对长度为32的数组计算`hashCode()`对应的索引，计算方式要改为：\n\n```java\nint index = key.hashCode() & 0x1f; // 0x1f = 31\n```\n\n由于扩容会导致重新分布已有的`key-value`，所以，频繁扩容对`HashMap`的性能影响很大。如果我们确定要使用一个容量为`10000`个`key-value`的`HashMap`，更好的方式是创建`HashMap`时就指定容量：\n\n```java\nMap<String, Integer> map = new HashMap<>(10000);\n```\n\n虽然指定容量是`10000`，但`HashMap`内部的数组长度总是2n，因此，实际数组长度被初始化为比`10000`大的`16384`（214）。\n\n最后一个问题：如果不同的两个`key`，例如`"a"`和`"b"`，它们的`hashCode()`恰好是相同的（这种情况是完全可能的，因为不相等的两个实例，只要求`hashCode()`尽量不相等），那么，当我们放入：\n\n```java\nmap.put("a", new Person("Xiao Ming"));\nmap.put("b", new Person("Xiao Hong"));\n```\n\n时，由于计算出的数组索引相同，后面放入的`"Xiao Hong"`会不会把`"Xiao Ming"`覆盖了？\n\n当然不会！使用`Map`的时候，只要`key`不相同，它们映射的`value`就互不干扰。但是，在`HashMap`内部，确实可能存在不同的`key`，映射到相同的`hashCode()`，即相同的数组索引上，肿么办？\n\n我们就假设`"a"`和`"b"`这两个`key`最终计算出的索引都是5，那么，在`HashMap`的数组中，实际存储的不是一个`Person`实例，而是一个`List`，它包含两个`Entry`，一个是`"a"`的映射，一个是`"b"`的映射：\n\n```\n  ┌───┐\n0 │   │\n  ├───┤\n1 │   │\n  ├───┤\n2 │   │\n  ├───┤\n3 │   │\n  ├───┤\n4 │   │\n  ├───┤\n5 │ ●─┼───▶ List<Entry<String, Person>>\n  ├───┤\n6 │   │\n  ├───┤\n7 │   │\n  └───┘\n```\n\n在查找的时候，例如：\n\n```java\nPerson p = map.get("a");\n```\n\n`HashMap`内部通过`"a"`找到的实际上是`List<Entry<String, Person>>`，它还需要遍历这个`List`，并找到一个`Entry`，它的`key`字段是`"a"`，才能返回对应的`Person`实例。\n\n我们把不同的`key`具有相同的`hashCode()`的情况称之为哈希冲突。在冲突的时候，一种最简单的解决办法是用`List`存储`hashCode()`相同的`key-value`。显然，如果冲突的概率越大，这个`List`就越长，`Map`的`get()`方法效率就越低，这就是为什么要尽量满足条件二：\n\n 提示\n\n如果两个对象不相等，则两个对象的hashCode()尽量不要相等。\n\n`hashCode()`方法编写得越好，`HashMap`工作的效率就越高。\n\n### 小结\n\n要正确使用`HashMap`，作为`key`的类必须正确覆写`equals()`和`hashCode()`方法；\n\n一个类如果覆写了`equals()`，就必须覆写`hashCode()`，并且覆写规则是：\n\n- 如果`equals()`返回`true`，则`hashCode()`返回值必须相等；\n- 如果`equals()`返回`false`，则`hashCode()`返回值尽量不要相等。\n实现`hashCode()`方法可以通过`Objects.hashCode()`辅助方法实现。\n\n---\n\n---'}],26:[{t:"使用Stack",u:"https://liaoxuefeng.com/books/java/collection/stack/",md:`# 使用Stack

[  ](https://weibo.com/liaoxuefeng)

栈（Stack）是一种后进先出（LIFO：Last In First Out）的数据结构。

什么是LIFO呢？我们先回顾一下\`Queue\`的特点FIFO：

\`\`\`
           ────────────────────────
  (\\(\\       (\\(\\    (\\(\\    (\\(\\       (\\(\\
 (='.') ──▶ (='.')  (='.')  (='.') ──▶ (='.')
O(_")")    O(_")") O(_")") O(_")")    O(_")")
           ────────────────────────
\`\`\`

所谓FIFO，是最先进队列的元素一定最早出队列，而LIFO是最后进\`Stack\`的元素一定最早出\`Stack\`。如何做到这一点呢？只需要把队列的一端封死：

\`\`\`
            ───────────────────────────────┐
  (\\(\\        (\\(\\    (\\(\\    (\\(\\    (\\(\\ │
 (='.') ◀──▶ (='.')  (='.')  (='.')  (='.')│
O(_")")     O(_")") O(_")") O(_")") O(_")")│
            ───────────────────────────────┘
\`\`\`

因此，\`Stack\`是这样一种数据结构：只能不断地往\`Stack\`中压入（push）元素，最后进去的必须最早弹出（pop）来：

\`Stack\`只有入栈和出栈的操作：

- 把元素压栈：\`push(E)\`；
- 把栈顶的元素“弹出”：\`pop()\`；
- 取栈顶元素但不弹出：\`peek()\`。
在Java中，我们用\`Deque\`可以实现\`Stack\`的功能：

- 把元素压栈：\`push(E)\`/\`addFirst(E)\`；
- 把栈顶的元素“弹出”：\`pop()\`/\`removeFirst()\`；
- 取栈顶元素但不弹出：\`peek()\`/\`peekFirst()\`。
为什么Java的集合类没有单独的\`Stack\`接口呢？因为有个遗留类名字就叫\`Stack\`，出于兼容性考虑，所以没办法创建\`Stack\`接口，只能用\`Deque\`接口来“模拟”一个\`Stack\`了。

当我们把\`Deque\`作为\`Stack\`使用时，注意只调用\`push()\`/\`pop()\`/\`peek()\`方法，不要调用\`addFirst()\`/\`removeFirst()\`/\`peekFirst()\`方法，这样代码更加清晰。

### Stack的作用

Stack在计算机中使用非常广泛，JVM在处理Java方法调用的时候就会通过栈这种数据结构维护方法调用的层次。例如：

\`\`\`java
static void main(String[] args) {
    foo(123);
}

static String foo(x) {
    return "F-" + bar(x + 1);
}

static int bar(int x) {
    return x << 2;
}
\`\`\`

JVM会创建方法调用栈，每调用一个方法时，先将参数压栈，然后执行对应的方法；当方法返回时，返回值压栈，调用方法通过出栈操作获得方法返回值。

因为方法调用栈有容量限制，嵌套调用过多会造成栈溢出，即引发\`StackOverflowError\`：

\`\`\`java
// 测试无限递归调用
public class Main {
    public static void main(String[] args) {
        increase(1);
    }

    static int increase(int x) {
        return increase(x) + 1;
    }
}
\`\`\`

我们再来看一个\`Stack\`的用途：对整数进行进制的转换就可以利用栈。

例如，我们要把一个\`int\`整数\`12500\`转换为十六进制表示的字符串，如何实现这个功能？

首先我们准备一个空栈：

\`\`\`
│   │
│   │
│   │
│   │
│   │
└───┘
\`\`\`

然后计算12500÷16=781…4，余数是\`4\`，把余数\`4\`压栈：

\`\`\`
│   │
│   │
│   │
│   │
│ 4 │
└───┘
\`\`\`

然后计算781÷16=48…13，余数是\`13\`，\`13\`的十六进制用字母\`D\`表示，把余数\`D\`压栈：

\`\`\`
│   │
│   │
│   │
│ D │
│ 4 │
└───┘
\`\`\`

然后计算48÷16=3…0，余数是\`0\`，把余数\`0\`压栈：

\`\`\`
│   │
│   │
│ 0 │
│ D │
│ 4 │
└───┘
\`\`\`

最后计算3÷16=0…3，余数是\`3\`，把余数\`3\`压栈：

\`\`\`
│   │
│ 3 │
│ 0 │
│ D │
│ 4 │
└───┘
\`\`\`

当商是\`0\`的时候，计算结束，我们把栈的所有元素依次弹出，组成字符串\`30D4\`，这就是十进制整数\`12500\`的十六进制表示的字符串。

### 计算中缀表达式

在编写程序的时候，我们使用的带括号的数学表达式实际上是中缀表达式，即运算符在中间，例如：\`1 + 2 * (9 - 5)\`。

但是计算机执行表达式的时候，它并不能直接计算中缀表达式，而是通过编译器把中缀表达式转换为后缀表达式，例如：\`1 2 9 5 - * +\`。

这个编译过程就会用到栈。我们先跳过编译这一步（涉及运算优先级，代码比较复杂），看看如何通过栈计算后缀表达式。

计算后缀表达式不考虑优先级，直接从左到右依次计算，因此计算起来简单。首先准备一个空的栈：

\`\`\`
│   │
│   │
│   │
│   │
│   │
└───┘
\`\`\`

然后我们依次扫描后缀表达式\`1 2 9 5 - * +\`，遇到数字\`1\`，就直接扔到栈里：

\`\`\`
│   │
│   │
│   │
│   │
│ 1 │
└───┘
\`\`\`

紧接着，遇到数字\`2\`，\`9\`，\`5\`，也扔到栈里：

\`\`\`
│   │
│ 5 │
│ 9 │
│ 2 │
│ 1 │
└───┘
\`\`\`

接下来遇到减号时，弹出栈顶的两个元素，并计算\`9-5=4\`，把结果\`4\`压栈：

\`\`\`
│   │
│   │
│ 4 │
│ 2 │
│ 1 │
└───┘
\`\`\`

接下来遇到\`*\`号时，弹出栈顶的两个元素，并计算\`2*4=8\`，把结果\`8\`压栈：

\`\`\`
│   │
│   │
│   │
│ 8 │
│ 1 │
└───┘
\`\`\`

接下来遇到\`+\`号时，弹出栈顶的两个元素，并计算\`1+8=9\`，把结果\`9\`压栈：

\`\`\`
│   │
│   │
│   │
│   │
│ 9 │
└───┘
\`\`\`

扫描结束后，没有更多的计算了，弹出栈的唯一一个元素，得到计算结果\`9\`。

### 练习

请利用Stack把一个给定的整数转换为十六进制：

\`\`\`java
// 转十六进制
import java.util.*;

public class Main {
    public static void main(String[] args) {
        String hex = toHex(12500);
        if (hex.equalsIgnoreCase("30D4")) {
            System.out.println("测试通过");
        } else {
            System.out.println("测试失败");
        }
    }

    static String toHex(int n) {
        return "";
    }
}
\`\`\`

进阶练习：

请利用Stack把字符串中缀表达式编译为后缀表达式，然后再利用栈执行后缀表达式获得计算结果：

\`\`\`java
// 高难度练习，慎重选择！
import java.util.*;

public class Main {
    public static void main(String[] args) {
        String exp = "1 + 2 * (9 - 5)";
        SuffixExpression se = compile(exp);
        int result = se.execute();
        System.out.println(exp + " = " + result + " " + (result == 1 + 2 * (9 - 5) ? "✓" : "✗"));
    }

    static SuffixExpression compile(String exp) {
        // TODO:
        return new SuffixExpression();
    }
}

class SuffixExpression {
    int execute() {
        // TODO:
        return 0;
    }
}
\`\`\`

进阶练习2：

请把带变量的中缀表达式编译为后缀表达式，执行后缀表达式时，传入变量的值并获得计算结果：

\`\`\`java
// 超高难度练习，慎重选择！
import java.util.*;

public class Main {
    public static void main(String[] args) {
        String exp = "x + 2 * (y - 5)";
        SuffixExpression se = compile(exp);
        Map<String, Integer> env = Map.of("x", 1, "y", 9);
        int result = se.execute(env);
        System.out.println(exp + " = " + result + " " + (result == 1 + 2 * (9 - 5) ? "✓" : "✗"));
    }

    static SuffixExpression compile(String exp) {
        // TODO:
        return new SuffixExpression();
    }
}

class SuffixExpression {
    int execute(Map<String, Integer> env) {
        // TODO:
        return 0;
    }
}
\`\`\`

### 小结

栈（Stack）是一种后进先出（LIFO）的数据结构，操作栈的元素的方法有：

- 把元素压栈：\`push(E)\`；
- 把栈顶的元素“弹出”：\`pop(E)\`；
- 取栈顶元素但不弹出：\`peek(E)\`。
在Java中，我们用\`Deque\`可以实现\`Stack\`的功能，注意只调用\`push()\`/\`pop()\`/\`peek()\`方法，避免调用\`Deque\`的其他方法；

不要使用遗留类\`Stack\`。

---

---`},{t:"使用Deque",u:"https://liaoxuefeng.com/books/java/collection/deque/",md:'# 使用Deque\n\n[  ](https://weibo.com/liaoxuefeng)\n\n我们知道，`Queue`是队列，只能一头进，另一头出。\n\n如果把条件放松一下，允许两头都进，两头都出，这种队列叫双端队列（Double Ended Queue），学名`Deque`。\n\nJava集合提供了接口`Deque`来实现一个双端队列，它的功能是：\n\n- 既可以添加到队尾，也可以添加到队首；\n- 既可以从队首获取，又可以从队尾获取。\n我们来比较一下`Queue`和`Deque`出队和入队的方法：\n\n| | Queue | Deque |\n|---|---|---|\n| 添加元素到队尾 | add(E e) / offer(E e) | addLast(E e) / offerLast(E e) |\n| 取队首元素并删除 | E remove() / E poll() | E removeFirst() / E pollFirst() |\n| 取队首元素但不删除 | E element() / E peek() | E getFirst() / E peekFirst() |\n| 添加元素到队首 | 无 | addFirst(E e) / offerFirst(E e) |\n| 取队尾元素并删除 | 无 | E removeLast() / E pollLast() |\n| 取队尾元素但不删除 | 无 | E getLast() / E peekLast() |\n对于添加元素到队尾的操作，`Queue`提供了`add()`/`offer()`方法，而`Deque`提供了`addLast()`/`offerLast()`方法。添加元素到队首、取队尾元素的操作在`Queue`中不存在，在`Deque`中由`addFirst()`/`removeLast()`等方法提供。\n\n注意到`Deque`接口实际上扩展自`Queue`：\n\n```java\npublic interface Deque<E> extends Queue<E> {\n    ...\n}\n```\n\n因此，`Queue`提供的`add()`/`offer()`方法在`Deque`中也可以使用，但是，使用`Deque`，最好不要调用`offer()`，而是调用`offerLast()`：\n\n```java\nimport java.util.Deque;\nimport java.util.LinkedList;\n\npublic class Main {\n    public static void main(String[] args) {\n        Deque<String> deque = new LinkedList<>();\n        deque.offerLast("A"); // A\n        deque.offerLast("B"); // A <- B\n        deque.offerFirst("C"); // C <- A <- B\n        System.out.println(deque.pollFirst()); // C, 剩下A <- B\n        System.out.println(deque.pollLast()); // B, 剩下A\n        System.out.println(deque.pollFirst()); // A\n        System.out.println(deque.pollFirst()); // null\n    }\n}\n```\n\n如果直接写`deque.offer()`，我们就需要思考，`offer()`实际上是`offerLast()`，我们明确地写上`offerLast()`，不需要思考就能一眼看出这是添加到队尾。\n\n因此，使用`Deque`，推荐总是明确调用`offerLast()`/`offerFirst()`或者`pollFirst()`/`pollLast()`方法。\n\n`Deque`是一个接口，它的实现类有`ArrayDeque`和`LinkedList`。\n\n我们发现`LinkedList`真是一个全能选手，它即是`List`，又是`Queue`，还是`Deque`。但是我们在使用的时候，总是用特定的接口来引用它，这是因为持有接口说明代码的抽象层次更高，而且接口本身定义的方法代表了特定的用途。\n\n```java\n// 不推荐的写法:\nLinkedList<String> d1 = new LinkedList<>();\nd1.offerLast("z");\n// 推荐的写法：\nDeque<String> d2 = new LinkedList<>();\nd2.offerLast("z");\n```\n\n可见面向抽象编程的一个原则就是：尽量持有接口，而不是具体的实现类。\n\n### 小结\n\n`Deque`实现了一个双端队列（Double Ended Queue），它可以：\n\n- 将元素添加到队尾或队首：`addLast()`/`offerLast()`/`addFirst()`/`offerFirst()`；\n- 从队首／队尾获取元素并删除：`removeFirst()`/`pollFirst()`/`removeLast()`/`pollLast()`；\n- 从队首／队尾获取元素但不删除：`getFirst()`/`peekFirst()`/`getLast()`/`peekLast()`；\n- 总是调用`xxxFirst()`/`xxxLast()`以便与`Queue`的方法区分开；\n- 避免把`null`添加到队列。\n\n---\n\n---'}],27:[{t:"使用Files",u:"https://liaoxuefeng.com/books/java/io/files/",md:`# 使用Files

[  ](https://weibo.com/liaoxuefeng)

从Java 7开始，提供了\`Files\`这个工具类，能极大地方便我们读写文件。

虽然\`Files\`是\`java.nio\`包里面的类，但他俩封装了很多读写文件的简单方法，例如，我们要把一个文件的全部内容读取为一个\`byte[]\`，可以这么写：

\`\`\`java
byte[] data = Files.readAllBytes(Path.of("/path/to/file.txt"));
\`\`\`

如果是文本文件，可以把一个文件的全部内容读取为\`String\`：

\`\`\`java
// 默认使用UTF-8编码读取:
String content1 = Files.readString(Path.of("/path/to/file.txt"));
// 可指定编码:
String content2 = Files.readString(Path.of("/path", "to", "file.txt"), StandardCharsets.ISO_8859_1);
// 按行读取并返回每行内容:
List<String> lines = Files.readAllLines(Path.of("/path/to/file.txt"));
\`\`\`

写入文件也非常方便：

\`\`\`java
// 写入二进制文件:
byte[] data = ...
Files.write(Path.of("/path/to/file.txt"), data);
// 写入文本并指定编码:
Files.writeString(Path.of("/path/to/file.txt"), "文本内容...", StandardCharsets.ISO_8859_1);
// 按行写入文本:
List<String> lines = ...
Files.write(Path.of("/path/to/file.txt"), lines);
\`\`\`

此外，\`Files\`工具类还有\`copy()\`、\`delete()\`、\`exists()\`、\`move()\`等快捷方法操作文件和目录。

最后需要特别注意的是，\`Files\`提供的读写方法，受内存限制，只能读写小文件，例如配置文件等，不可一次读入几个G的大文件。读写大型文件仍然要使用文件流，每次只读写一部分文件内容。

### 小结

对于简单的小文件读写操作，可以使用\`Files\`工具类简化代码。

---

---`}],28:[{t:"LocalDateTime",u:"https://liaoxuefeng.com/books/java/datetime/local-datetime/",md:`# LocalDateTime

[  ](https://weibo.com/liaoxuefeng)

从Java 8开始，\`java.time\`包提供了新的日期和时间API，主要涉及的类型有：

- 本地日期和时间：\`LocalDateTime\`，\`LocalDate\`，\`LocalTime\`；
- 带时区的日期和时间：\`ZonedDateTime\`；
- 时刻：\`Instant\`；
- 时区：\`ZoneId\`，\`ZoneOffset\`；
- 时间间隔：\`Duration\`。
以及一套新的用于取代\`SimpleDateFormat\`的格式化类型\`DateTimeFormatter\`。

和旧的API相比，新API严格区分了时刻、本地日期、本地时间和带时区的日期时间，并且，对日期和时间进行运算更加方便。

此外，新API修正了旧API不合理的常量设计：

- Month的范围用1~12表示1月到12月；
- Week的范围用1~7表示周一到周日。
最后，新API的类型几乎全部是不变类型（和String类似），可以放心使用不必担心被修改。

### LocalDateTime

我们首先来看最常用的\`LocalDateTime\`，它表示一个本地日期和时间：

\`\`\`java
import java.time.*;

public class Main {
    public static void main(String[] args) {
        LocalDate d = LocalDate.now(); // 当前日期
        LocalTime t = LocalTime.now(); // 当前时间
        LocalDateTime dt = LocalDateTime.now(); // 当前日期和时间
        System.out.println(d); // 严格按照ISO 8601格式打印
        System.out.println(t); // 严格按照ISO 8601格式打印
        System.out.println(dt); // 严格按照ISO 8601格式打印
    }
}
\`\`\`

本地日期和时间通过now()获取到的总是以当前默认时区返回的，和旧API不同，\`LocalDateTime\`、\`LocalDate\`和\`LocalTime\`默认严格按照[ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html)规定的日期和时间格式进行打印。

上述代码其实有一个小问题，在获取3个类型的时候，由于执行一行代码总会消耗一点时间，因此，3个类型的日期和时间很可能对不上（时间的毫秒数基本上不同）。为了保证获取到同一时刻的日期和时间，可以改写如下：

\`\`\`java
LocalDateTime dt = LocalDateTime.now(); // 当前日期和时间
LocalDate d = dt.toLocalDate(); // 转换到当前日期
LocalTime t = dt.toLocalTime(); // 转换到当前时间
\`\`\`

反过来，通过指定的日期和时间创建\`LocalDateTime\`可以通过\`of()\`方法：

\`\`\`java
// 指定日期和时间:
LocalDate d2 = LocalDate.of(2019, 11, 30); // 2019-11-30, 注意11=11月
LocalTime t2 = LocalTime.of(15, 16, 17); // 15:16:17
LocalDateTime dt2 = LocalDateTime.of(2019, 11, 30, 15, 16, 17);
LocalDateTime dt3 = LocalDateTime.of(d2, t2);
\`\`\`

因为严格按照ISO 8601的格式，因此，将字符串转换为\`LocalDateTime\`就可以传入标准格式：

\`\`\`java
LocalDateTime dt = LocalDateTime.parse("2019-11-19T15:16:17");
LocalDate d = LocalDate.parse("2019-11-19");
LocalTime t = LocalTime.parse("15:16:17");
\`\`\`

注意ISO 8601规定的日期和时间分隔符是\`T\`。标准格式如下：

- 日期：yyyy-MM-dd
- 时间：HH:mm:ss
- 带毫秒的时间：HH:mm:ss.SSS
- 日期和时间：yyyy-MM-dd'T'HH:mm:ss
- 带毫秒的日期和时间：yyyy-MM-dd'T'HH:mm:ss.SSS

### DateTimeFormatter

如果要自定义输出的格式，或者要把一个非ISO 8601格式的字符串解析成\`LocalDateTime\`，可以使用新的\`DateTimeFormatter\`：

\`\`\`java
import java.time.*;
import java.time.format.*;

public class Main {
    public static void main(String[] args) {
        // 自定义格式化:
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        System.out.println(dtf.format(LocalDateTime.now()));

        // 用自定义格式解析:
        LocalDateTime dt2 = LocalDateTime.parse("2019/11/30 15:16:17", dtf);
        System.out.println(dt2);
    }
}
\`\`\`

\`LocalDateTime\`提供了对日期和时间进行加减的非常简单的链式调用：

\`\`\`java
import java.time.*;

public class Main {
    public static void main(String[] args) {
        LocalDateTime dt = LocalDateTime.of(2019, 10, 26, 20, 30, 59);
        System.out.println(dt);
        // 加5天减3小时:
        LocalDateTime dt2 = dt.plusDays(5).minusHours(3);
        System.out.println(dt2); // 2019-10-31T17:30:59
        // 减1月:
        LocalDateTime dt3 = dt2.minusMonths(1);
        System.out.println(dt3); // 2019-09-30T17:30:59
    }
}
\`\`\`

注意到月份加减会自动调整日期，例如从\`2019-10-31\`减去1个月得到的结果是\`2019-09-30\`，因为9月没有31日。

对日期和时间进行调整则使用\`withXxx()\`方法，例如：\`withHour(15)\`会把\`10:11:12\`变为\`15:11:12\`：

- 调整年：withYear()
- 调整月：withMonth()
- 调整日：withDayOfMonth()
- 调整时：withHour()
- 调整分：withMinute()
- 调整秒：withSecond()
示例代码如下：

\`\`\`java
import java.time.*;

public class Main {
    public static void main(String[] args) {
        LocalDateTime dt = LocalDateTime.of(2019, 10, 26, 20, 30, 59);
        System.out.println(dt);
        // 日期变为31日:
        LocalDateTime dt2 = dt.withDayOfMonth(31);
        System.out.println(dt2); // 2019-10-31T20:30:59
        // 月份变为9:
        LocalDateTime dt3 = dt2.withMonth(9);
        System.out.println(dt3); // 2019-09-30T20:30:59
    }
}
\`\`\`

同样注意到调整月份时，会相应地调整日期，即把\`2019-10-31\`的月份调整为\`9\`时，日期也自动变为\`30\`。

实际上，\`LocalDateTime\`还有一个通用的\`with()\`方法允许我们做更复杂的运算。例如：

\`\`\`java
import java.time.*;
import java.time.temporal.*;

public class Main {
    public static void main(String[] args) {
        // 本月第一天0:00时刻:
        LocalDateTime firstDay = LocalDate.now().withDayOfMonth(1).atStartOfDay();
        System.out.println(firstDay);

        // 本月最后1天:
        LocalDate lastDay = LocalDate.now().with(TemporalAdjusters.lastDayOfMonth());
        System.out.println(lastDay);

        // 下月第1天:
        LocalDate nextMonthFirstDay = LocalDate.now().with(TemporalAdjusters.firstDayOfNextMonth());
        System.out.println(nextMonthFirstDay);

        // 本月第1个周一:
        LocalDate firstWeekday = LocalDate.now().with(TemporalAdjusters.firstInMonth(DayOfWeek.MONDAY));
        System.out.println(firstWeekday);
    }
}
\`\`\`

对于计算某个月第1个

……（中间部分略）……

## 小结

Java 8引入了新的日期和时间API，它们是不变类，默认按ISO 8601标准格式化和解析；

使用\`LocalDateTime\`可以非常方便地对日期和时间进行加减，或者调整日期和时间，它总是返回新对象；

使用\`isBefore()\`和\`isAfter()\`可以判断日期和时间的先后；

使用\`Duration\`和\`Period\`可以表示两个日期和时间的“区间间隔”。

---

---`},{t:"DateTimeFormatter",u:"https://liaoxuefeng.com/books/java/datetime/datetime-formatter/index.html",md:'# DateTimeFormatter\n使用旧的 `Date` 对象时，我们用 `SimpleDateFormat` 进行格式化显示。使用新的 `LocalDateTime` 或 `ZonedDateTime` 时，我们要进行格式化显示，就要使用 `DateTimeFormatter` 。\n和 `SimpleDateFormat` 不同的是， `DateTimeFormatter` 不但是不变对象，它还是线程安全的。线程的概念我们会在后面涉及到。现在我们只需要记住：因为 `SimpleDateFormat` 不是线程安全的，使用的时候，只能在方法内部创建新的局部变量。而 `DateTimeFormatter` 可以只创建一个实例，到处引用。\n创建 `DateTimeFormatter` 时，我们仍然通过传入格式化字符串实现：\n```\nDateTimeFormatter formatter =  DateTimeFormatter.ofPattern( "yyyy-MM-dd HH:mm" );\n```\n格式化字符串的使用方式与 `SimpleDateFormat` 完全一致。\n另一种创建 `DateTimeFormatter` 的方法是，传入格式化字符串时，同时指定 `Locale` ：\n```\nDateTimeFormatter formatter =  DateTimeFormatter.ofPattern( "E, yyyy-MMMM-dd HH:mm" , Locale.US);\n```\n这种方式可以按照 `Locale` 默认习惯格式化。我们来看实际效果：\n```\nimport  java.time.*;\n import  java.time.format.*;\n import  java.util.Locale;\n\n public class Main  {\n     public static void main (String[] args)  {\n         ZonedDateTime zdt =  ZonedDateTime.now();\n         var formatter =  DateTimeFormatter.ofPattern( "yyyy-MM-dd\'T\'HH:mm ZZZZ" );\n        System.out.println(formatter.format(zdt));\n\n         var zhFormatter =  DateTimeFormatter.ofPattern( "yyyy MMM dd EE HH:mm" , Locale.CHINA);\n        System.out.println(zhFormatter.format(zdt));\n\n         var usFormatter =  DateTimeFormatter.ofPattern( "E, MMMM/dd/yyyy HH:mm" , Locale.US);\n        System.out.println(usFormatter.format(zdt));\n    }\n}\n```\n在格式化字符串中，如果需要输出固定字符，可以用 `\'xxx\'` 表示。\n运行上述代码，分别以默认方式、中国地区和美国地区对当前时间进行显示，结果如下：\n```\n2019-09-15T23:16 GMT+08:00\n2019 9月 15 周日 23:16\nSun, September/15/2019 23:16\n```\n当我们直接调用 `System.out.println()` 对一个 `ZonedDateTime` 或者 `LocalDateTime` 实例进行打印的时候，实际上，调用的是它们的 `toString()` 方法，默认的 `toString()` 方法显示的字符串就是按照 `ISO 8601` 格式显示的，我们可以通过 `DateTimeFormatter` 预定义的几个静态变量来引用：\n```\nvar ldt =  LocalDateTime.now();\nSystem.out.println(DateTimeFormatter.ISO_DATE.format(ldt));\nSystem.out.println(DateTimeFormatter.ISO_DATE_TIME.format(ldt));\n```\n得到的输出和 `toString()` 类似：\n```\n2019-09-15\n2019-09-15T23:16:51.56217\n```\n\n## 小结\n对 `ZonedDateTime` 或 `LocalDateTime` 进行格式化，需要使用 `DateTimeFormatter` 类；\n`DateTimeFormatter` 可以通过格式化字符串和 `Locale` 对日期和时间进行定制输出。\nZonedDateTime\nInstant'}],29:[{t:"BigDecimal",u:"https://liaoxuefeng.com/books/java/oop/core/bigdecimal/index.html",md:'# BigDecimal\n[](https://weibo.com/liaoxuefeng)\n[廖雪峰](https://weibo.com/liaoxuefeng) [](https://github.com/michaelliao) [](https://weibo.com/liaoxuefeng) [](https://zhihu.com/people/liaoxuefeng) [](https://twitter.com/liaoxuefeng)\n## 比较BigDecimal\n在比较两个 `BigDecimal` 的值是否相等时，要特别注意，使用 `equals()` 方法不但要求两个 `BigDecimal` 的值相等，还要求它们的 `scale()` 相等：\n```\nBigDecimal d1 = new BigDecimal ( "123.456" );\n BigDecimal d2 = new BigDecimal ( "123.45600" );\nSystem.out.println(d1.equals(d2));  // false,因为scale不同 \nSystem.out.println(d1.equals(d2.stripTrailingZeros()));  // true,因为d2去除尾部0后scale变为3 \nSystem.out.println(d1.compareTo(d2));  // 0 = 相等, -1 = d1 < d2, 1 = d1 > d2\n```\n必须使用 `compareTo()` 方法来比较，它根据两个值的大小分别返回负数、正数和 `0` ，分别表示小于、大于和等于。\n注意\n总是使用compareTo()比较两个BigDecimal的值，不要使用equals()！\n如果查看 `BigDecimal` 的源码，可以发现，实际上一个 `BigDecimal` 是通过一个 `BigInteger` 和一个 `scale` 来表示的，即 `BigInteger` 表示一个完整的整数，而 `scale` 表示小数位数：\n```\npublic class BigDecimal extends Number implements Comparable <BigDecimal> {\n     private final  BigInteger intVal;\n     private final int  scale;\n}\n```\n`BigDecimal` 也是从 `Number` 继承的，也是不可变对象。\n\n## 小结\n`BigDecimal` 用于表示精确的小数，常用于财务计算；\n比较 `BigDecimal` 的值是否相等，必须使用 `compareTo()` 而不能使用 `equals()` 。\nBigInteger\n常用工具类'}],30:[{t:"使用Set",u:"https://liaoxuefeng.com/books/java/collection/set/index.html",md:`# 使用Set
我们知道， \`Map\` 用于存储key-value的映射，对于充当key的对象，是不能重复的，并且，不但需要正确覆写 \`equals()\` 方法，还要正确覆写 \`hashCode()\` 方法。
如果我们只需要存储不重复的key，并不需要存储映射的value，那么就可以使用 \`Set\` 。
\`Set\` 用于存储不重复的元素集合，它主要提供以下几个方法：
* 将元素添加进 \`Set<E>\` ： \`boolean add(E e)\`
* 将元素从 \`Set<E>\` 删除： \`boolean remove(Object e)\`
* 判断是否包含元素： \`boolean contains(Object e)\`
我们来看几个简单的例子：
\`\`\`
import  java.util.*;

 public class Main  {
     public static void main (String[] args)  {
        Set<String> set =  new HashSet <>();
        System.out.println(set.add( "abc" ));  // true 
        System.out.println(set.add( "xyz" ));  // true 
        System.out.println(set.add( "xyz" ));  // false，添加失败，因为元素已存在 
        System.out.println(set.contains( "xyz" ));  // true，元素存在 
        System.out.println(set.contains( "XYZ" ));  // false，元素不存在 
        System.out.println(set.remove( "hello" ));  // false，删除失败，因为元素不存在 
        System.out.println(set.size());  // 2，一共两个元素 
    }
}
\`\`\`
\`Set\` 实际上相当于只存储key、不存储value的 \`Map\` 。我们经常用 \`Set\` 用于去除重复元素。
因为放入 \`Set\` 的元素和 \`Map\` 的key类似，都要正确实现 \`equals()\` 和 \`hashCode()\` 方法，否则该元素无法正确地放入 \`Set\` 。
最常用的 \`Set\` 实现类是 \`HashSet\` ，实际上， \`HashSet\` 仅仅是对 \`HashMap\` 的一个简单封装，它的核心代码如下：
\`\`\`
public class HashSet <E>  implements Set <E> {
     // 持有一个HashMap: private  HashMap<E, Object> map =  new HashMap <>();

     // 放入HashMap的value: private static final Object PRESENT = new Object ();

     public boolean add (E e)  {
         return  map.put(e, PRESENT) ==  null ;
    }

     public boolean contains (Object o)  {
         return  map.containsKey(o);
    }

     public boolean remove (Object o)  {
         return  map.remove(o) == PRESENT;
    }
}
\`\`\`
\`Set\` 接口并不保证有序，而 \`SortedSet\` 接口则保证元素是有序的：
* \`HashSet\` 是无序的，因为它实现了 \`Set\` 接口，并没有实现 \`SortedSet\` 接口；
* \`TreeSet\` 是有序的，因为它实现了 \`SortedSet\` 接口。
用一张图表示：
\`\`\`
       ┌───┐
       │Set│
       └───┘
         ▲
    ┌────┴─────┐
    │          │
┌───────┐ ┌─────────┐
│HashSet│ │SortedSet│
└───────┘ └─────────┘
               ▲
               │
          ┌─────────┐
          │ TreeSet │
          └─────────┘
\`\`\`
我们来看 \`HashSet\` 的输出：
\`\`\`
import  java.util.*;

 public class Main  {
     public static void main (String[] args)  {
        Set<String> set =  new HashSet <>();
        set.add( "apple" );
        set.add( "banana" );
        set.add( "pear" );
        set.add( "orange" );
         for  (String s : set) {
            System.out.println(s);
        }
    }
}
\`\`\`
注意输出的顺序既不是添加的顺序，也不是 \`String\` 排序的顺序，在不同版本的JDK中，这个顺序也可能是不同的。
把 \`HashSet\` 换成 \`TreeSet\` ，在遍历 \`TreeSet\` 时，输出就是有序的，这个顺序是元素的排序顺序：
\`\`\`
import  java.util.*;

 public class Main  {
     public static void main (String[] args)  {
        Set<String> set =  new TreeSet <>();
        set.add( "apple" );
        set.add( "banana" );
        set.add( "pear" );
        set.add( "orange" );
         for  (String s : set) {
            System.out.println(s);
        }
    }
}
\`\`\`
使用 \`TreeSet\` 和使用 \`TreeMap\` 的要求一样，添加的元素必须正确实现 \`Comparable\` 接口，如果没有实现 \`Comparable\` 接口，那么创建 \`TreeSet\` 时必须传入一个 \`Comparator\` 对象。

## 练习
在聊天软件中，发送方发送消息时，遇到网络超时后就会自动重发，因此，接收方可能会收到重复的消息，在显示给用户看的时候，需要首先去重。请练习使用 \`Set\` 去除重复的消息：
\`\`\`
import  java.util.*;

 public class Main  {
     public static void main (String[] args)  {
        List<Message> received = List.of(
             new Message ( 1 ,  "Hello!" ),
             new Message ( 2 ,  "发工资了吗？" ),
             new Message ( 2 ,  "发工资了吗？" ),
             new Message ( 3 ,  "去哪吃饭？" ),
             new Message ( 3 ,  "去哪吃饭？" ),
             new Message ( 4 ,  "Bye" )
        );
        List<Message> displayMessages = process(received);
         for  (Message message : displayMessages) {
            System.out.println(message.text);
        }
    }

     static  List<Message>  process (List<Message> received)  {
         //  TODO:  按sequence去除重复消息 return  received;
    }
}

 class Message  {
     public final int  sequence;
     public final  String text;
     public Message ( int  sequence, String text)  {
         this .sequence = sequence;
         this .text = text;
    }
}
\`\`\`

## 小结
\`Set\` 用于存储不重复的元素集合：
* 放入 \`HashSet\` 的元素与作为 \`HashMap\` 的key要求相同；
* 放入 \`TreeSet\` 的元素与作为 \`TreeMap\` 的Key要求相同。
利用 \`Set\` 可以去除重复元素；
遍历 \`SortedSet\` 按照元素的排序顺序遍历，也可以自定义排序算法。
使用Properties
使用Queue`},{t:"使用Iterator",u:"https://liaoxuefeng.com/books/java/collection/iterator/index.html",md:'# 使用Iterator\nJava的集合类都可以使用 `for each` 循环， `List` 、 `Set` 和 `Queue` 会迭代每个元素， `Map` 会迭代每个key。以 `List` 为例：\n```\nList<String> list = List.of( "Apple" ,  "Orange" ,  "Pear" );\n for  (String s : list) {\n    System.out.println(s);\n}\n```\n实际上，Java编译器并不知道如何遍历 `List` 。上述代码能够编译通过，只是因为编译器把 `for each` 循环通过 `Iterator` 改写为了普通的 `for` 循环：\n```\nfor  (Iterator<String> it = list.iterator(); it.hasNext(); ) {\n      String s =  it.next();\n     System.out.println(s);\n}\n```\n我们把这种通过 `Iterator` 对象遍历集合的模式称为迭代器。\n使用迭代器的好处在于，调用方总是以统一的方式遍历各种集合类型，而不必关心它们内部的存储结构。\n例如，我们虽然知道 `ArrayList` 在内部是以数组形式存储元素，并且，它还提供了 `get(int)` 方法。虽然我们可以用 `for` 循环遍历：\n```\nfor  ( int  i= 0 ; i<list.size(); i++) {\n     Object value =  list.get(i);\n}\n```\n但是这样一来，调用方就必须知道集合的内部存储结构。并且，如果把 `ArrayList` 换成 `LinkedList` ， `get(int)` 方法耗时会随着index的增加而增加。如果把 `ArrayList` 换成 `Set` ，上述代码就无法编译，因为 `Set` 内部没有索引。\n用 `Iterator` 遍历就没有上述问题，因为 `Iterator` 对象是集合对象自己在内部创建的，它自己知道如何高效遍历内部的数据集合，调用方则获得了统一的代码，编译器才能把标准的 `for each` 循环自动转换为 `Iterator` 遍历。\n如果我们自己编写了一个集合类，想要使用 `for each` 循环，只需满足以下条件：\n* 集合类实现 `Iterable` 接口，该接口要求返回一个 `Iterator` 对象；\n* 用 `Iterator` 对象迭代集合内部数据。\n这里的关键在于，集合类通过调用 `iterator()` 方法，返回一个 `Iterator` 对象，这个对象必须自己知道如何遍历该集合。\n一个简单的 `Iterator` 示例如下，它总是以倒序遍历集合：\n```\n// Iterator import  java.util.*;\n\n public class Main  {\n     public static void main (String[] args)  {\n        ReverseList<String> rlist =  new ReverseList <>();\n        rlist.add( "Apple" );\n        rlist.add( "Orange" );\n        rlist.add( "Pear" );\n         for  (String s : rlist) {\n            System.out.println(s);\n        }\n    }\n}\n\n class ReverseList <T>  implements Iterable <T> {\n\n     private  List<T> list =  new ArrayList <>();\n\n     public void add (T t)  {\n        list.add(t);\n    }\n\n     @Override public  Iterator<T>  iterator ()  {\n         return new ReverseIterator (list.size());\n    }\n\n     class ReverseIterator implements Iterator <T> {\n         int  index;\n\n        ReverseIterator( int  index) {\n             this .index = index;\n        }\n\n         @Override public boolean hasNext ()  {\n             return  index >  0 ;\n        }\n\n         @Override public  T  next ()  {\n            index--;\n             return  ReverseList. this .list.get(index);\n        }\n    }\n}\n```\n虽然 `ReverseList` 和 `ReverseIterator` 的实现类稍微比较复杂，但是，注意到这是底层集合库，只需编写一次。而调用方则完全按 `for each` 循环编写代码，根本不需要知道集合内部的存储逻辑和遍历逻辑。\n在编写 `Iterator` 的时候，我们通常可以用一个内部类来实现 `Iterator` 接口，这个内部类可以直接访问对应的外部类的所有字段和方法。例如，上述代码中，内部类 `ReverseIterator` 可以用 `ReverseList.this` 获得当前外部类的 `this` 引用，然后，通过这个 `this` 引用就可以访问 `ReverseList` 的所有字段和方法。\n\n## 小结\n`Iterator` 是一种抽象的数据访问模型。使用 `Iterator` 模式进行迭代的好处有：\n* 对任何集合都采用同一种访问模型；\n* 调用者对集合内部结构一无所知；\n* 集合类返回的 `Iterator` 对象知道如何迭代。\nJava提供了标准的迭代器模型，即集合类实现 `java.util.Iterable` 接口，返回 `java.util.Iterator` 实例。\n使用Stack\n使用Collections'}],31:[{t:"Lambda基础",u:"https://liaoxuefeng.com/books/java/functional/basic/index.html",md:`# Lambda基础
Java的方法分为实例方法，例如 \`Integer\` 定义的 \`equals()\` 方法：
\`\`\`
public final class Integer  {
     boolean equals (Object o)  {
        ...
    }
}
\`\`\`
以及静态方法，例如 \`Integer\` 定义的 \`parseInt()\` 方法：
\`\`\`
public final class Integer  {
     public static int parseInt (String s)  {
        ...
    }
}
\`\`\`
无论是实例方法，还是静态方法，本质上都相当于过程式语言的函数。例如C函数：
\`\`\`
char *  strcpy ( char * dest,  char * src)
\`\`\`
只不过Java的实例方法隐含地传入了一个 \`this\` 变量，即实例方法总是有一个隐含参数 \`this\` 。
函数式编程（Functional Programming）是把函数作为基本运算单元，函数可以作为变量，可以接收函数，还可以返回函数。历史上研究函数式编程的理论是Lambda演算，所以我们经常把支持函数式编程的编码风格称为Lambda表达式。

## Lambda表达式
在Java程序中，我们经常遇到一大堆单方法接口，即一个接口只定义了一个方法：
* Comparator
* Runnable
* Callable
以 \`Comparator\` 为例，我们想要调用 \`Arrays.sort()\` 时，可以传入一个 \`Comparator\` 实例，以匿名类方式编写如下：
\`\`\`
String[] array = ...
Arrays.sort(array,  new Comparator <String>() {
     public int compare (String s1, String s2)  {
         return  s1.compareTo(s2);
    }
});
\`\`\`
上述写法非常繁琐。从Java 8开始，我们可以用Lambda表达式替换单方法接口。改写上述代码如下：

...

观察Lambda表达式的写法，它只需要写出方法定义：
\`\`\`
(s1, s2) -> {
     return  s1.compareTo(s2);
}
\`\`\`
其中，参数是 \`(s1, s2)\` ，参数类型可以省略，因为编译器可以自动推断出 \`String\` 类型。 \`-> { ... }\` 表示方法体，所有代码写在内部即可。Lambda表达式没有 \`class\` 定义，因此写法非常简洁。
如果只有一行 \`return xxx\` 的代码，完全可以用更简单的写法：

...

## FunctionalInterface
我们把只定义了单方法的接口称之为 \`FunctionalInterface\` ，用注解 \`@FunctionalInterface\` 标记。例如， \`Callable\` 接口：
\`\`\`
@FunctionalInterface public interface Callable <V> {
    V  call () throws  Exception;
}
\`\`\`
再来看 \`Comparator\` 接口：
\`\`\`
@FunctionalInterface public interface Comparator <T> {

     int compare (T o1, T o2) ;

     boolean equals (Object obj) ;

     default  Comparator<T>  reversed ()  {
         return  Collections.reverseOrder( this );
    }

     default  Comparator<T>  thenComparing (Comparator<?  super  T> other)  {
        ...
    }
    ...
}
\`\`\`

...

## 小结
单方法接口被称为 \`FunctionalInterface\` 。
接收 \`FunctionalInterface\` 作为参数的时候，可以把实例化的匿名类改写为Lambda表达式，能大大简化代码。
Lambda表达式的参数和返回值均可由编译器自动推断。
函数式编程
方法引用`},{t:"方法引用",u:"https://liaoxuefeng.com/books/java/functional/method-ref/index.html",md:`# 方法引用
[](https://weibo.com/liaoxuefeng)
[廖雪峰](https://weibo.com/liaoxuefeng) [](https://github.com/michaelliao) [](https://weibo.com/liaoxuefeng) [](https://zhihu.com/people/liaoxuefeng) [](https://twitter.com/liaoxuefeng)
## 构造方法引用
除了可以引用静态方法和实例方法，我们还可以引用构造方法。
我们来看一个例子：如果要把一个 \`List<String>\` 转换为 \`List<Person>\` ，应该怎么办？

...

\`\`\`
List<String> names = List.of( "Bob" ,  "Alice" ,  "Tim" );
List<Person> persons =  new ArrayList <>();
 for  (String name : names) {
    persons.add( new Person (name));
}
\`\`\`
要更简单地实现 \`String\` 到 \`Person\` 的转换，我们可以引用 \`Person\` 的构造方法：
\`\`\`
// 引用构造方法 import  java.util.*;
 import  java.util.stream.*;

 public class Main  {
     public static void main (String[] args)  {
        List<String> names = List.of( "Bob" ,  "Alice" ,  "Tim" );
        List<Person> persons = names.stream().map(Person:: new ).collect(Collectors.toList());
        System.out.println(persons);
    }
}

 class Person  {
    String name;
     public Person (String name)  {
         this .name = name;
    }
     public  String  toString ()  {
         return "Person:"  +  this .name;
    }
}
\`\`\`
后面我们会讲到 \`Stream\` 的 \`map()\` 方法。现在我们看到，这里的 \`map()\` 需要传入的FunctionalInterface的定义是：
\`\`\`
@FunctionalInterface public interface Function <T, R> {
    R  apply (T t) ;
}
\`\`\`
把泛型对应上就是方法签名 \`Person apply(String)\` ，即传入参数 \`String\` ，返回类型 \`Person\` 。而 \`Person\` 类的构造方法恰好满足这个条件，因为构造方法的参数是 \`String\` ，而构造方法虽然没有 \`return\` 语句，但它会隐式地返回 \`this\` 实例，类型就是 \`Person\` ，因此，此处可以引用构造方法。构造方法的引用写法是 \`类名::new\` ，因此，此处传入 \`Person::new\` 。

## 练习
使用方法引用实现忽略大小写排序。
下载练习

## 小结
\`FunctionalInterface\` 允许传入：
* 接口的实现类（传统写法，代码较繁琐）；
* Lambda表达式（只需列出参数名，由编译器推断类型）；
* 符合方法签名的静态方法；
* 符合方法签名的实例方法（实例类型被看做第一个参数类型）；
* 符合方法签名的构造方法（实例类型被看做返回类型）。
\`FunctionalInterface\` 不强制继承关系，不需要方法名称相同，只要求方法参数（类型和数量）与方法返回类型相同，即认为方法签名相同。
Lambda基础
使用Stream`}],32:[{t:"使用Stream",u:"https://liaoxuefeng.com/books/java/functional/stream/index.html",md:`# 使用Stream
[](https://weibo.com/liaoxuefeng)
[廖雪峰](https://weibo.com/liaoxuefeng) [](https://github.com/michaelliao) [](https://weibo.com/liaoxuefeng) [](https://zhihu.com/people/liaoxuefeng) [](https://twitter.com/liaoxuefeng)
## 小结
Stream API的特点是：
* Stream API提供了一套新的流式处理的抽象序列；
* Stream API支持函数式编程和链式操作；
* Stream可以表示无限序列，并且大多数情况下是惰性求值的。
[方法引用](https://liaoxuefeng.com/books/java/functional/method-ref/index.html)
[创建Stream](https://liaoxuefeng.com/books/java/functional/stream/create/index.html)`}],33:[{t:"多线程基础",u:"https://liaoxuefeng.com/books/java/threading/basic/index.html",md:`# 多线程基础
[](https://weibo.com/liaoxuefeng)
[廖雪峰](https://weibo.com/liaoxuefeng) [](https://github.com/michaelliao) [](https://weibo.com/liaoxuefeng) [](https://zhihu.com/people/liaoxuefeng) [](https://twitter.com/liaoxuefeng)
## 进程
在计算机中，我们把一个任务称为一个进程，浏览器就是一个进程，视频播放器是另一个进程，类似的，音乐播放器和Word都是进程。
某些进程内部还需要同时执行多个子任务。例如，我们在使用Word时，Word可以让我们一边打字，一边进行拼写检查，同时还可以在后台进行打印，我们把子任务称为线程。
进程和线程的关系就是：一个进程可以包含一个或多个线程，但至少会有一个线程。
\`\`\`
                        ┌──────────┐
                        │Process   │
                        │┌────────┐│
            ┌──────────┐││ Thread ││┌──────────┐
            │Process   ││└────────┘││Process   │
            │┌────────┐││┌────────┐││┌────────┐│
┌──────────┐││ Thread ││││ Thread ││││ Thread ││
│Process   ││└────────┘││└────────┘││└────────┘│
│┌────────┐││┌────────┐││┌────────┐││┌────────┐│
││ Thread ││││ Thread ││││ Thread ││││ Thread ││
│└────────┘││└────────┘││└────────┘││└────────┘│
└──────────┘└──────────┘└──────────┘└──────────┘
┌──────────────────────────────────────────────┐
│               Operating System               │
└──────────────────────────────────────────────┘
\`\`\`
操作系统调度的最小任务单位其实不是进程，而是线程。常用的Windows、Linux等操作系统都采用抢占式多任务，如何调度线程完全由操作系统决定，程序自己不能决定什么时候执行，以及执行多长时间。
因为同一个应用程序，既可以有多个进程，也可以有多个线程，因此，实现多任务的方法，有以下几种：
多进程模式（每个进程只有一个线程）：
\`\`\`
┌──────────┐ ┌──────────┐ ┌──────────┐
│Process   │ │Process   │ │Process   │
│┌────────┐│ │┌────────┐│ │┌────────┐│
││ Thread ││ ││ Thread ││ ││ Thread ││
│└────────┘│ │└────────┘│ │└────────┘│
└──────────┘ └──────────┘ └──────────┘
\`\`\`
多线程模式（一个进程有多个线程）：
\`\`\`
┌────────────────────┐
│Process             │
│┌────────┐┌────────┐│
││ Thread ││ Thread ││
│└────────┘└────────┘│
│┌────────┐┌────────┐│
││ Thread ││ Thread ││
│└────────┘└────────┘│
└────────────────────┘
\`\`\`
多进程＋多线程模式（复杂度最高）：
\`\`\`
┌──────────┐┌──────────┐┌──────────┐
│Process   ││Process   ││Process   │
│┌────────┐││┌────────┐││┌────────┐│
││ Thread ││││ Thread ││││ Thread ││
│└────────┘││└────────┘││└────────┘│
│┌────────┐││┌────────┐││┌────────┐│
││ Thread ││││ Thread ││││ Thread ││
│└────────┘││└────────┘││└────────┘│
└──────────┘└──────────┘└──────────┘
\`\`\`

## 进程 vs 线程
进程和线程是包含关系，但是多任务既可以由多进程实现，也可以由单进程内的多线程实现，还可以混合多进程＋多线程。
具体采用哪种方式，要考虑到进程和线程的特点。
和多线程相比，多进程的缺点在于：
* 创建进程比创建线程开销大，尤其是在Windows系统上；
* 进程间通信比线程间通信要慢，因为线程间通信就是读写同一个变量，速度很快。
而多进程的优点在于：
多进程稳定性比多线程高，因为在多进程的情况下，一个进程崩溃不会影响其他进程，而在多线程的情况下，任何一个线程崩溃会直接导致整个进程崩溃。

## 多线程
Java语言内置了多线程支持：一个Java程序实际上是一个JVM进程，JVM进程用一个主线程来执行 \`main()\` 方法，在 \`main()\` 方法内部，我们又可以启动多个线程。此外，JVM还有负责垃圾回收的其他工作线程等。
因此，对于大多数Java程序来说，我们说多任务，实际上是说如何使用多线程实现多任务。
和单线程相比，多线程编程的特点在于：多线程经常需要读写共享数据，并且需要同步。例如，播放电影时，就必须由一个线程播放视频，另一个线程播放音频，两个线程需要协调运行，否则画面和声音就不同步。因此，多线程编程的复杂度高，调试更困难。
Java多线程编程的特点又在于：
* 多线程模型是Java程序最基本的并发模型；
* 后续读写网络、数据库、Web开发等都依赖Java多线程模型。
因此，必须掌握Java多线程编程才能继续深入学习其他内容。
多线程
创建新线程`},{t:"创建新线程",u:"https://liaoxuefeng.com/books/java/threading/new-thread/index.html",md:`# 创建新线程
[](https://weibo.com/liaoxuefeng)
[廖雪峰](https://weibo.com/liaoxuefeng) [](https://github.com/michaelliao) [](https://weibo.com/liaoxuefeng) [](https://zhihu.com/people/liaoxuefeng) [](https://twitter.com/liaoxuefeng)
## 线程的优先级
可以对线程设定优先级，设定优先级的方法是：
\`\`\`
Thread.setPriority( int  n)  // 1~10, 默认值5
\`\`\`
JVM自动把1（低）~10（高）的优先级映射到操作系统实际优先级上（不同操作系统有不同的优先级数量）。优先级高的线程被操作系统调度的优先级较高，操作系统对高优先级线程可能调度更频繁，但我们决不能通过设置优先级来确保高优先级的线程一定会先执行。

## 练习
创建一个新线程。
下载练习

## 小结
Java用 \`Thread\` 对象表示一个线程，通过调用 \`start()\` 启动一个新线程；
一个线程对象只能调用一次 \`start()\` 方法；
线程的执行代码写在 \`run()\` 方法中；
线程调度由操作系统决定，程序本身无法决定调度顺序；
\`Thread.sleep()\` 可以把当前线程暂停一段时间。
多线程基础
线程的状态`}],34:[{t:"线程同步",u:"https://liaoxuefeng.com/books/java/threading/synchronize/index.html",md:`# 线程同步
[](https://weibo.com/liaoxuefeng)
[廖雪峰](https://weibo.com/liaoxuefeng) [](https://github.com/michaelliao) [](https://weibo.com/liaoxuefeng) [](https://zhihu.com/people/liaoxuefeng) [](https://twitter.com/liaoxuefeng)
## 不需要synchronized的操作
JVM规范定义了几种原子操作：
* 基本类型（ \`long\` 和 \`double\` 除外）赋值，例如： \`int n = m\` ；
* 引用类型赋值，例如： \`List<String> list = anotherList\` 。
\`long\` 和 \`double\` 是64位数据，JVM没有明确规定64位赋值操作是不是一个原子操作，不过在x64平台的JVM是把 \`long\` 和 \`double\` 的赋值作为原子操作实现的。
单条原子操作的语句不需要同步。例如：
\`\`\`
public void set ( int  m)  {
     synchronized (lock) {
         this .value = m;
    }
}
\`\`\`
就不需要同步。
对引用也是类似。例如：
\`\`\`
public void set (String s)  {
     this .value = s;
}
\`\`\`
上述赋值语句并不需要同步。
但是，如果是多行赋值语句，就必须保证是同步操作，例如：
\`\`\`
class Point  {
     int  x;
     int  y;
     public void set ( int  x,  int  y)  {
         synchronized ( this ) {
             this .x = x;
             this .y = y;
        }
    }
}
\`\`\`
提示
多线程连续读写多个变量时，同步的目的是为了保证程序逻辑正确！
不但写需要同步，读也需要同步：
\`\`\`
class Point  {
     int  x;
     int  y;

     public void set ( int  x,  int  y)  {
         synchronized ( this ) {
             this .x = x;
             this .y = y;
        }
    }

     public int [] get() {
         int [] copy =  new int [ 2 ];
        copy[ 0 ] = x;
        copy[ 1 ] = y;
    }
}
\`\`\`
假定当前坐标是 \`(100, 200)\` ，那么当设置新坐标为 \`(110, 220)\` 时，上述未同步的多线程读到的值可能有：
* (100, 200)：x，y更新前；
* (110, 200)：x更新后，y更新前；
* (110, 220)：x，y更新后。
如果读取到 \`(110, 200)\` ，即读到了更新后的x，更新前的y，那么可能会造成程序的逻辑错误，无法保证读取的多个变量状态保持一致。
有些时候，通过一些巧妙的转换，可以把非原子操作变为原子操作。例如，上述代码如果改造成：
\`\`\`
class Point  {
     int [] ps;
     public void set ( int  x,  int  y)  {
         int [] ps =  new int [] { x, y };
         this .ps = ps;
    }
}
\`\`\`
就不再需要写同步，因为 \`this.ps = ps\` 是引用赋值的原子操作。而语句：
\`\`\`
int [] ps =  new int [] { x, y };
\`\`\`
这里的 \`ps\` 是方法内部定义的局部变量，每个线程都会有各自的局部变量，互不影响，并且互不可见，并不需要同步。
不过要注意，读方法在复制 \`int[]\` 数组的过程中仍然需要同步。

## 不可变对象无需同步
如果多线程读写的是一个不可变对象，那么无需同步，因为不会修改对象的状态：
\`\`\`
class Data  {
    List<String> names;
     void set (String[] names)  {
         this .names = List.of(names);
    }
    List<String>  get ()  {
         return this .names;
    }
}
\`\`\`
注意到 \`set()\` 方法内部创建了一个不可变 \`List\` ，这个 \`List\` 包含的对象也是不可变对象 \`String\` ，因此，整个 \`List<String>\` 对象都是不可变的，因此读写均无需同步。
分析变量是否能被多线程访问时，首先要理清概念，多线程同时执行的是方法。对于下面这个例子：
\`\`\`
class Status  {
    List<String> names;
     int  x;
     int  y;
     void set (String[] names,  int  n)  {
        List<String> ns = List.of(names);
         this .names = ns;
         int step =  n *  10 ;
         this .x += step;
         this .y += step;
    }
    StatusRecord  get ()  {
         return new StatusRecord ( this .names,  this .x,  this .y);
    }
}
\`\`\`
如果有A、B两个线程，同时执行是指：
* 可能同时执行set()；
* 可能同时执行get()；
* 可能A执行set()，同时B执行get()。
类的成员变量 \`names\` 、 \`x\` 、 \`y\` 显然能被多线程同时读写，但局部变量（包括方法参数）如果没有“逃逸”，那么只有当前线程可见。局部变量 \`step\` 仅在 \`set()\` 方法内部使用，因此每个线程同时执行set时都有一份独立的step存储在线程的栈上，互不影响，但是局部变量 \`ns\` 虽然每个线程也各有一份，但后续赋值后对其他线程就变成可见了。对 \`set()\` 方法同步时，如果要最小化 \`synchronized\` 代码块，可以改写如下：
\`\`\`
void set (String[] names,  int  n)  {
     // 局部变量其他线程不可见: 
    List<String> ns = List.of(names);
     int step =  n *  10 ;
     synchronized ( this ) {
         this .names = ns;
         this .x += step;
         this .y += step;
    }
}
\`\`\`
因此，深入理解多线程还需理解变量在栈上的存储方式，基本类型和引用类型的存储方式也不同。

## 小结
多线程同时读写共享变量时，可能会造成逻辑错误，因此需要通过 \`synchronized\` 同步；
同步的本质就是给指定对象加锁，加锁后才能继续执行后续代码；
注意加锁对象必须是同一个实例；
对JVM定义的单个原子操作不需要同步。
守护线程
同步方法`}],35:[{t:"Maven介绍",u:"https://liaoxuefeng.com/books/java/maven/basic/",md:`# Maven介绍

[  ](https://weibo.com/liaoxuefeng)

在了解Maven之前，我们先来看看一个Java项目需要的东西。首先，我们需要确定引入哪些依赖包。例如，如果我们需要用到[commons logging](https://commons.apache.org/proper/commons-logging/)，我们就必须把commons logging的jar包放入classpath。如果我们还需要[log4j](https://logging.apache.org/log4j/)，就需要把log4j相关的jar包都放到classpath中。这些就是依赖包的管理。

其次，我们要确定项目的目录结构。例如，\`src\`目录存放Java源码，\`resources\`目录存放配置文件，\`bin\`目录存放编译生成的\`.class\`文件。

此外，我们还需要配置环境，例如JDK的版本，编译打包的流程，当前代码的版本号。

最后，除了使用Eclipse这样的IDE进行编译外，我们还必须能通过命令行工具进行编译，才能够让项目在一个独立的服务器上编译、测试、部署。

这些工作难度不大，但是非常琐碎且耗时。如果每一个项目都自己搞一套配置，肯定会一团糟。我们需要的是一个标准化的Java项目管理和构建工具。

Maven就是是专门为Java项目打造的管理和构建工具，它的主要功能有：

- 提供了一套标准化的项目结构；
- 提供了一套标准化的构建流程（编译，测试，打包，发布……）；
- 提供了一套依赖管理机制。

### Maven项目结构

一个使用Maven管理的普通的Java项目，它的目录结构默认如下：

\`\`\`
a-maven-project
├── pom.xml
├── src
│   ├── main
│   │   ├── java
│   │   └── resources
│   └── test
│       ├── java
│       └── resources
└── target
\`\`\`

项目的根目录\`a-maven-project\`是项目名，它有一个项目描述文件\`pom.xml\`，存放Java源码的目录是\`src/main/java\`，存放资源文件的目录是\`src/main/resources\`，存放测试源码的目录是\`src/test/java\`，存放测试资源的目录是\`src/test/resources\`，最后，所有编译、打包生成的文件都放在\`target\`目录里。这些就是一个Maven项目的标准目录结构。

所有的目录结构都是约定好的标准结构，我们千万不要随意修改目录结构。使用标准结构不需要做任何配置，Maven就可以正常使用。

我们再来看最关键的一个项目描述文件\`pom.xml\`，它的内容长得像下面：

\`\`\`xml
<project ...>
	<modelVersion>4.0.0</modelVersion>
	<groupId>com.itranswarp.learnjava</groupId>
	<artifactId>hello</artifactId>
	<version>1.0</version>
	<packaging>jar</packaging>
	<properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
		<maven.compiler.release>17</maven.compiler.release>
	</properties>
	<dependencies>
        <dependency>
            <groupId>org.slf4j</groupId>
            <artifactId>slf4j-simple</artifactId>
            <version>2.0.16</version>
        </dependency>
	</dependencies>
</project>
\`\`\`

其中，\`groupId\`类似于Java的包名，通常是公司或组织名称，\`artifactId\`类似于Java的类名，通常是项目名称，再加上\`version\`，一个Maven工程就是由\`groupId\`，\`artifactId\`和\`version\`作为唯一标识。

我们在引用其他第三方库的时候，也是通过这3个变量确定。例如，依赖\`org.slfj4:slf4j-simple:2.0.16\`：

\`\`\`xml
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-simple</artifactId>
    <version>2.0.16</version>
</dependency>
\`\`\`

使用\`<dependency>\`声明一个依赖后，Maven就会自动下载这个依赖包并把它放到classpath中。

另外，注意到\`<properties>\`定义了一些属性，常用的属性有：

- \`project.build.sourceEncoding\`：表示项目源码的字符编码，通常应设定为\`UTF-8\`；
- \`maven.compiler.release\`：表示使用的JDK版本，例如\`21\`；
- \`maven.compiler.source\`：表示Java编译器读取的源码版本；
- \`maven.compiler.target\`：表示Java编译器编译的Class版本。
从Java 9开始，推荐使用\`maven.compiler.release\`属性，保证编译时输入的源码和编译输出版本一致。如果源码和输出版本不同，则应该分别设置\`maven.compiler.source\`和\`maven.compiler.target\`。

通过\`<properties>\`定义的属性，就可以固定JDK版本，防止同一个项目的不同的开发者各自使用不同版本的JDK。

### 安装Maven

要安装Maven，可以从[Maven官网](https://maven.apache.org/)下载最新的Maven 3.9.x，然后在本地解压，设置几个环境变量：

\`\`\`plain
M2_HOME=/path/to/maven-3.9.x
PATH=$PATH:$M2_HOME/bin
\`\`\`

Windows可以把\`%M2_HOME%\\bin\`添加到系统Path变量中。

然后，打开命令行窗口，输入\`mvn -version\`，应该看到Maven的版本信息：

\`\`\`
┌─────────────────────────────────────────────────────────┐
│Windows PowerShell                                 - □ x │
├─────────────────────────────────────────────────────────┤
│Windows PowerShell                                       │
│Copyright (C) Microsoft Corporation. All rights reserved.│
│                                                         │
│PS C:\\Users\\liaoxuefeng> mvn -version                    │
│Apache Maven 3.9.x ...                                   │
│Maven home: C:\\Users\\liaoxuefeng\\maven                   │
│Java version: ...                                        │
│...                                                      │
│                                                         │
└─────────────────────────────────────────────────────────┘
\`\`\`

如果提示命令未找到，说明系统PATH路径有误，需要修复后再运行。

### 小结

Maven是一个Java项目的管理和构建工具：

- Maven使用\`pom.xml\`定义项目内容，并使用预设的目录结构；
- 在Maven中声明一个依赖项可以自动下载并导入classpath；
- Maven使用\`groupId\`，\`artifactId\`和\`version\`唯一定位一个依赖。

---

---`},{t:"依赖管理",u:"https://liaoxuefeng.com/books/java/maven/dependency/",md:`# 依赖管理

[  ](https://weibo.com/liaoxuefeng)

如果我们的项目依赖第三方的jar包，例如commons logging，那么问题来了：commons logging发布的jar包在哪下载？

如果我们还希望依赖log4j，那么使用log4j需要哪些jar包？

类似的依赖还包括：JUnit，JavaMail，MySQL驱动等等，一个可行的方法是通过搜索引擎搜索到项目的官网，然后手动下载zip包，解压，放入classpath。但是，这个过程非常繁琐。

Maven解决了依赖管理问题。例如，我们的项目依赖\`abc\`这个jar包，而\`abc\`又依赖\`xyz\`这个jar包：

\`\`\`
┌──────────────┐
│Sample Project│
└──────────────┘
        │
        ▼
┌──────────────┐
│     abc      │
└──────────────┘
        │
        ▼
┌──────────────┐
│     xyz      │
└──────────────┘
\`\`\`

当我们声明了\`abc\`的依赖时，Maven自动把\`abc\`和\`xyz\`都加入了我们的项目依赖，不需要我们自己去研究\`abc\`是否需要依赖\`xyz\`。

因此，Maven的第一个作用就是解决依赖管理。我们声明了自己的项目需要\`abc\`，Maven会自动导入\`abc\`的jar包，再判断出\`abc\`需要\`xyz\`，又会自动导入\`xyz\`的jar包，这样，最终我们的项目会依赖\`abc\`和\`xyz\`两个jar包。

我们来看一个复杂依赖示例：

\`\`\`xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <version>1.4.2.RELEASE</version>
</dependency>
\`\`\`

当我们声明一个\`spring-boot-starter-web\`依赖时，Maven会自动解析并判断最终需要大概二三十个其他依赖：

\`\`\`
spring-boot-starter-web
  spring-boot-starter
    spring-boot
    sprint-boot-autoconfigure
    spring-boot-starter-logging
      logback-classic
        logback-core
        slf4j-api
      jcl-over-slf4j
        slf4j-api
      jul-to-slf4j
        slf4j-api
      log4j-over-slf4j
        slf4j-api
    spring-core
    snakeyaml
  spring-boot-starter-tomcat
    tomcat-embed-core
    tomcat-embed-el
    tomcat-embed-websocket
      tomcat-embed-core
  jackson-databind
  ...
\`\`\`

如果我们自己去手动管理这些依赖是非常费时费力的，而且出错的概率很大。

### 依赖关系

Maven定义了几种依赖关系，分别是\`compile\`、\`test\`、\`runtime\`和\`provided\`：

| scope | 说明 | 示例 |
|---|---|---|
| compile | 编译时需要用到该jar包（默认） | commons-logging |
| test | 编译Test时需要用到该jar包 | junit |
| runtime | 编译时不需要，但运行时需要用到 | mysql |
| provided | 编译时需要用到，但运行时由JDK或某个服务器提供 | servlet-api |
其中，默认的\`compile\`是最常用的，Maven会把这种类型的依赖直接放入classpath。

\`test\`依赖表示仅在测试时使用，正常运行时并不需要。最常用的\`test\`依赖就是JUnit：

\`\`\`xml
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter-api</artifactId>
    <version>5.3.2</version>
    <scope>test</scope>
</dependency>
\`\`\`

\`runtime\`依赖表示编译时不需要，但运行时需要。最典型的\`runtime\`依赖是JDBC驱动，例如MySQL驱动：

\`\`\`xml
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>5.1.48</version>
    <scope>runtime</scope>
</dependency>
\`\`\`

\`provided\`依赖表示编译时需要，但运行时不需要。最典型的\`provided\`依赖是Servlet API，编译的时候需要，但是运行时，Servlet服务器内置了相关的jar，所以运行期不需要：

\`\`\`xml
<dependency>
    <groupId>jakarta.servlet</groupId>
    <artifactId>jakarta.servlet-api</artifactId>
    <version>4.0.0</version>
    <scope>provided</scope>
</dependency>
\`\`\`

最后一个问题是，Maven如何知道从何处下载所需的依赖？也就是相关的jar包？答案是Maven维护了一个中央仓库（[repo1.maven.org](https://repo1.maven.org/)），所有第三方库将自身的jar以及相关信息上传至中央仓库，Maven就可以从中央仓库把所需依赖下载到本地。

Maven并不会每次都从中央仓库下载jar包。一个jar包一旦被下载过，就会被Maven自动缓存在本地目录（用户主目录的\`.m2\`目录），所以，除了第一次编译时因为下载需要时间会比较慢，后续过程因为有本地缓存，并不会重复下载相同的jar包。

### 唯一ID

对于某个依赖，Maven只需要3个变量即可唯一确定某个jar包：

- groupId：属于组织的名称，类似Java的包名；
- artifactId：该jar包自身的名称，类似Java的类名；
- version：该jar包的版本。
通过上述3个变量，即可唯一确定某个jar包。Maven通过对jar包进行PGP签名确保任何一个jar包一经发布就无法修改。修改已发布jar包的唯一方法是发布一个新版本。

因此，某个jar包一旦被Maven下载过，即可永久地安全缓存在本地。

注：只有以\`-SNAPSHOT\`结尾的版本号会被Maven视为开发版本，开发版本每次都会重复下载，这种SNAPSHOT版本只能用于内部私有的Maven repo，公开发布的版本不允许出现SNAPSHOT。

 提示

后续我们在表示Maven依赖时，使用简写形式groupId:artifactId:version，例如：org.slf4j:slf4j-api:2.0.4。

### Maven镜像

除了可以从Maven的中央仓库下载外，还可以从Maven的镜像仓库下载。如果访问Maven的中央仓库非常慢，我们可以选择一个速度较快的Maven的镜像仓库。Maven镜像仓库定期从中央仓库同步：

\`\`\`
           slow    ┌───────────────────┐
    ┌─────────────▶│Maven Central Repo.│
    │              └───────────────────┘
    │                        │
    │                        │sync
    │                        ▼
┌───────┐  fast    ┌───────────────────┐
│ User  │─────────▶│Maven Mirror Repo. │
└───────┘          └───────────────────┘
\`\`\`

中国区用户可以使用阿里云提供的Maven镜像仓库。使用Maven镜像仓库需要一个配置，在用户主目录下进入\`.m2\`目录，创建一个\`settings.xml\`配置文件，内容如下：

\`\`\`xml
<settings>
    <mirrors>
        <mirror>
            <id>aliyun</id>
            <name>aliyun</name>
            <mirrorOf>central</mirrorOf>
            <!-- 国内推荐阿里云的Maven镜像 -->
            <url>https://maven.aliyun.com/repository/central</url>
        </mirror>
    </mirrors>
</settings>
\`\`\`

配置镜像仓库后，Maven的下载速度就会非常快。

### 搜索第三方组件

最后一个问题：如果我们要引用一个第三方组件，比如\`okhttp\`，如何确切地获得它的\`groupId\`、\`artifactId\`和\`version\`？方法是通过[search.maven.org](https://search.maven.org/)搜索关键字，找到对应的组件后，直接复制：

### 命令行编译

在命令中，进入到\`pom.xml\`所在目录，输入以下命令：

\`\`\`plain
$ mvn clean package
\`\`\`

如果一切顺利，即可在\`target\`目录下获得编译后自动打包的jar。

### 在IDE中使用Maven

几乎所有的IDE都内置了对Maven的支持。在Eclipse中，可以直接创建或导入Maven项目。如果导入后的Maven项目有错误，可以尝试选择项目后点击右键，选择Maven - Update Project...更新：

### 练习

使用Maven编译hello项目。

### 小结

Maven通过解析依赖关系确定项目所需的jar包，常用的4种\`scope\`有：\`compile\`（默认），\`test\`，\`runtime\`和\`provided\`；

Maven从中央仓库下载所需的jar包并缓存在本地；

可以通过镜像仓库加速下载。

---

---`}],36:[{t:"Web基础",u:"https://liaoxuefeng.com/books/java/web/basic/",md:`# Web基础

[  ](https://weibo.com/liaoxuefeng)

今天我们访问网站，使用App时，都是基于Web这种Browser/Server模式，简称BS架构，它的特点是，客户端只需要浏览器，应用程序的逻辑和数据都存储在服务器端。浏览器只需要请求服务器，获取Web页面，并把Web页面展示给用户即可。

Web页面具有极强的交互性。由于Web页面是用HTML编写的，而HTML具备超强的表现力，并且，服务器端升级后，客户端无需任何部署就可以使用到新的版本，因此，BS架构升级非常容易。

### HTTP协议

在Web应用中，浏览器请求一个URL，服务器就把生成的HTML网页发送给浏览器，而浏览器和服务器之间的传输协议是HTTP，所以：

- HTML是一种用来定义网页的文本，会HTML，就可以编写网页；
- HTTP是在网络上传输HTML的协议，用于浏览器和服务器的通信。
HTTP协议是一个基于TCP协议之上的请求-响应协议，它非常简单，我们先使用Chrome浏览器查看新浪首页，然后选择View - Developer - Inspect Elements就可以看到HTML：

切换到Network，重新加载页面，可以看到浏览器发出的每一个请求和响应：

对于Browser来说，请求页面的流程如下：

1. 与服务器建立TCP连接；
2. 发送HTTP请求；
3. 收取HTTP响应，然后把网页在浏览器中显示出来。
浏览器发送的HTTP请求如下：

\`\`\`plain
GET / HTTP/1.1
Host: www.sina.com.cn
User-Agent: Mozilla/5.0 xxx
Accept: */*
Accept-Language: zh-CN,zh;q=0.9,en-US;q=0.8
\`\`\`

其中，第一行表示使用\`GET\`请求获取路径为\`/\`的资源，并使用\`HTTP/1.1\`协议，从第二行开始，每行都是以\`Header: Value\`形式表示的HTTP头，比较常用的HTTP Header包括：

- Host: 表示请求的主机名，因为一个服务器上可能运行着多个网站，因此，Host表示浏览器正在请求的域名；
- User-Agent: 标识客户端本身，例如Chrome浏览器的标识类似\`Mozilla/5.0 ... Chrome/79\`，IE浏览器的标识类似\`Mozilla/5.0 (Windows NT ...) like Gecko\`；
- Accept：表示浏览器能接收的资源类型，如\`text/*\`，\`image/*\`或者\`*/*\`表示所有；
- Accept-Language：表示浏览器偏好的语言，服务器可以据此返回不同语言的网页；
- Accept-Encoding：表示浏览器可以支持的压缩类型，例如\`gzip, deflate, br\`。
服务器的响应如下：

\`\`\`plain
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 21932
Content-Encoding: gzip
Cache-Control: max-age=300

<html>...网页数据...
\`\`\`

服务器响应的第一行总是版本号+空格+数字+空格+文本，数字表示响应代码，其中\`2xx\`表示成功，\`3xx\`表示重定向，\`4xx\`表示客户端引发的错误，\`5xx\`表示服务器端引发的错误。数字是给程序识别，文本则是给开发者调试使用的。常见的响应代码有：

- 200 OK：表示成功；
- 301 Moved Permanently：表示该URL已经永久重定向；
- 302 Found：表示该URL需要临时重定向；
- 304 Not Modified：表示该资源没有修改，客户端可以使用本地缓存的版本；
- 400 Bad Request：表示客户端发送了一个错误的请求，例如参数无效；
- 401 Unauthorized：表示客户端因为身份未验证而不允许访问该URL；
- 403 Forbidden：表示服务器因为权限问题拒绝了客户端的请求；
- 404 Not Found：表示客户端请求了一个不存在的资源；
- 500 Internal Server Error：表示服务器处理时内部出错，例如因为无法连接数据库；
- 503 Service Unavailable：表示服务器此刻暂时无法处理请求。
从第二行开始，服务器每一行均返回一个HTTP头。服务器经常返回的HTTP Header包括：

- Content-Type：表示该响应内容的类型，例如\`text/html\`，\`image/jpeg\`；
- Content-Length：表示该响应内容的长度（字节数）；
- Content-Encoding：表示该响应压缩算法，例如\`gzip\`；
- Cache-Control：指示客户端应如何缓存，例如\`max-age=300\`表示可以最多缓存300秒。
HTTP请求和响应都由HTTP Header和HTTP Body构成，其中HTTP Header每行都以\`\\r\\n\`结束。如果遇到两个连续的\`\\r\\n\`，那么后面就是HTTP Body。浏览器读取HTTP Body，并根据Header信息中指示的\`Content-Type\`、\`Content-Encoding\`等解压后显示网页、图像或其他内容。

通常浏览器获取的第一个资源是HTML网页，在网页中，如果嵌入了JavaScript、CSS、图片、视频等其他资源，浏览器会根据资源的URL再次向服务器请求对应的资源。

关于HTTP协议的详细内容，请参考[HTTP权威指南](https://book.douban.com/subject/10746113/)一书，或者[Mozilla开发者网站](https://developer.mozilla.org/zh-CN/docs/Web/HTTP)。

我们在前面介绍的[HTTP编程](../../network/http/index.html)是以客户端的身份去请求服务器资源。现在，我们需要以服务器的身份响应客户端请求，编写服务器程序来处理客户端请求通常就称之为Web开发。

### 编写HTTP Server

我们来看一下如何编写HTTP Server。一个HTTP Server本质上是一个TCP服务器，我们先用[TCP编程](../../network/tcp/index.html)的多线程实现的服务器端框架：

\`\`\`java
public class Server {
    public static void main(String[] args) throws IOException {
        ServerSocket ss = new ServerSocket(8080); // 监听指定端口
        System.out.println("server is running...");
        for (;;) {
            Socket sock = ss.accept();
            System.out.println("connected from " + sock.getRemoteSocketAddress());
            Thread t = new Handler(sock);
            t.start();
        }
    }
}

class Handler extends Thread {
    Socket sock;

    public Handler(Socket sock) {
        this.sock = sock;
    }

    public void run() {
        try (InputStream input = this.sock.getInputStream()) {
            try (OutputStream output = this.sock.getOutputStream()) {
                handle(input, output);
            }
        } catch (Exception e) {
        } finally {
            try {
                this.sock.close();
            } catch (IOException ioe) {
            }
            System.out.println("client disconnected.");
        }
    }

    private void handle(InputStream input, OutputStream output) throws IOException {
        var reader = new BufferedReader(new InputStreamReader(input, StandardCharsets.UTF_8));
        var writer = new BufferedWriter(new OutputStreamWriter(output, StandardCharsets.UTF_8));
        // TODO: 处理HTTP请求
    }
}
\`\`\`

只需要在\`handle()\`方法中，用Reader读取HTTP请求，用Writer发送HTTP响应，即可实现一个最简单的HTTP服务器。编写代码如下：

\`\`\`java
private void handle(InputStream input, OutputStream output) throws IOException {
    System.out.println("Process new http request...");
    var reader = new BufferedReader(new InputStreamReader(input, StandardCharsets.UTF_8));
    var writer = new BufferedWriter(new OutputStreamWriter(output, StandardCharsets.UTF_8));
    // 读取HTTP请求:
    boolean requestOk = false;
    String first = reader.readLine();
    if (first.startsWith("GET / HTTP/1.")) {
        requestOk = true;
    }
    for (;;) {

……（中间部分略）……

## 小结

使用B/S架构时，总是通过HTTP协议实现通信；

Web开发通常是指开发服务器端的Web应用程序。

---

---`},{t:"HTTP编程",u:"https://liaoxuefeng.com/books/java/network/http/",md:`# HTTP编程

[  ](https://weibo.com/liaoxuefeng)

什么是HTTP？HTTP就是目前使用最广泛的Web应用程序使用的基础协议，例如，浏览器访问网站，手机App访问后台服务器，都是通过HTTP协议实现的。

HTTP是HyperText Transfer Protocol的缩写，翻译为超文本传输协议，它是基于TCP协议之上的一种请求-响应协议。

我们来看一下浏览器请求访问某个网站时发送的HTTP请求-响应。当浏览器希望访问某个网站时，浏览器和网站服务器之间首先建立TCP连接，且服务器总是使用\`80\`端口和加密端口\`443\`，然后，浏览器向服务器发送一个HTTP请求，服务器收到后，返回一个HTTP响应，并且在响应中包含了HTML的网页内容，这样，浏览器解析HTML后就可以给用户显示网页了。一个完整的HTTP请求-响应如下：

\`\`\`
            GET / HTTP/1.1
            Host: www.sina.com.cn
            User-Agent: Mozilla/5 MSIE
            Accept: */*                ┌────────┐
┌─────────┐ Accept-Language: zh-CN,en  │░░░░░░░░│
│O ░░░░░░░│───────────────────────────▶├────────┤
├─────────┤◀───────────────────────────│░░░░░░░░│
│         │ HTTP/1.1 200 OK            ├────────┤
│         │ Content-Type: text/html    │░░░░░░░░│
└─────────┘ Content-Length: 133251     └────────┘
  Browser   <!DOCTYPE html>              Server
            <html><body>
            <h1>Hello</h1>
            ...
\`\`\`

HTTP请求的格式是固定的，它由HTTP Header和HTTP Body两部分构成。第一行总是\`请求方法 路径 HTTP版本\`，例如，\`GET / HTTP/1.1\`表示使用\`GET\`请求，路径是\`/\`，版本是\`HTTP/1.1\`。

后续的每一行都是固定的\`Header: Value\`格式，我们称为HTTP Header，服务器依靠某些特定的Header来识别客户端请求，例如：

- Host：表示请求的域名，因为一台服务器上可能有多个网站，因此有必要依靠Host来识别请求是发给哪个网站的；
- User-Agent：表示客户端自身标识信息，不同的浏览器有不同的标识，服务器依靠User-Agent判断客户端类型是IE还是Chrome，是Firefox还是一个Python爬虫；
- Accept：表示客户端能处理的HTTP响应格式，\`*/*\`表示任意格式，\`text/*\`表示任意文本，\`image/png\`表示PNG格式的图片；
- Accept-Language：表示客户端接收的语言，多种语言按优先级排序，服务器依靠该字段给用户返回特定语言的网页版本。
如果是\`GET\`请求，那么该HTTP请求只有HTTP Header，没有HTTP Body。如果是\`POST\`请求，那么该HTTP请求带有Body，以一个空行分隔。一个典型的带Body的HTTP请求如下：

\`\`\`plain
POST /login HTTP/1.1
Host: www.example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 30

username=hello&password=123456
\`\`\`

\`POST\`请求通常要设置\`Content-Type\`表示Body的类型，\`Content-Length\`表示Body的长度，这样服务器就可以根据请求的Header和Body做出正确的响应。

此外，\`GET\`请求的参数必须附加在URL上，并以URLEncode方式编码，例如：\`http://www.example.com/?a=1&b=K%26R\`，参数分别是\`a=1\`和\`b=K&R\`。因为URL的长度限制，\`GET\`请求的参数不能太多，而\`POST\`请求的参数就没有长度限制，因为\`POST\`请求的参数必须放到Body中。并且，\`POST\`请求的参数不一定是URL编码，可以按任意格式编码，只需要在\`Content-Type\`中正确设置即可。常见的发送JSON的\`POST\`请求如下：

\`\`\`plain
POST /login HTTP/1.1
Content-Type: application/json
Content-Length: 38

{"username":"bob","password":"123456"}
\`\`\`

HTTP响应也是由Header和Body两部分组成，一个典型的HTTP响应如下：

\`\`\`plain
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 133251

<!DOCTYPE html>
<html><body>
<h1>Hello</h1>
</body></html>
\`\`\`

响应的第一行总是\`HTTP版本 响应代码 响应说明\`，例如，\`HTTP/1.1 200 OK\`表示版本是\`HTTP/1.1\`，响应代码是\`200\`，响应说明是\`OK\`。客户端只依赖响应代码判断HTTP响应是否成功。HTTP有固定的响应代码：

- 1xx：表示一个提示性响应，例如101表示将切换协议，常见于WebSocket连接；
- 2xx：表示一个成功的响应，例如200表示成功，206表示只发送了部分内容；
- 3xx：表示一个重定向的响应，例如301表示永久重定向，303表示客户端应该按指定路径重新发送请求；
- 4xx：表示一个因为客户端问题导致的错误响应，例如400表示因为Content-Type等各种原因导致的无效请求，404表示指定的路径不存在；
- 5xx：表示一个因为服务器问题导致的错误响应，例如500表示服务器内部故障，503表示服务器暂时无法响应。
当浏览器收到第一个HTTP响应后，它解析HTML后，又会发送一系列HTTP请求，例如，\`GET /logo.jpg HTTP/1.1\`请求一个图片，服务器响应图片请求后，会直接把二进制内容的图片发送给浏览器：

\`\`\`plain
HTTP/1.1 200 OK
Content-Type: image/jpeg
Content-Length: 18391

????JFIFHH??XExifMM?i&??X?...(二进制的JPEG图片)
\`\`\`

因此，服务器总是被动地接收客户端的一个HTTP请求，然后响应它。客户端则根据需要发送若干个HTTP请求。

对于最早期的HTTP/1.0协议，每次发送一个HTTP请求，客户端都需要先创建一个新的TCP连接，然后，收到服务器响应后，关闭这个TCP连接。由于建立TCP连接就比较耗时，因此，为了提高效率，HTTP/1.1协议允许在一个TCP连接中反复发送-响应，这样就能大大提高效率：

\`\`\`
                       ┌─────────┐
┌─────────┐            │░░░░░░░░░│
│O ░░░░░░░│            ├─────────┤
├─────────┤            │░░░░░░░░░│
│         │            ├─────────┤
│         │            │░░░░░░░░░│
└─────────┘            └─────────┘
     │      request 1       │
     │─────────────────────▶│
     │      response 1      │
     │◀─────────────────────│
     │      request 2       │
     │─────────────────────▶│
     │      response 2      │
     │◀─────────────────────│
     │      request 3       │
     │─────────────────────▶│
     │      response 3      │
     │◀─────────────────────│
     ▼                      ▼
\`\`\`

因为HTTP协议是一个请求-响应协议，客户端在发送了一个HTTP请求后，必须等待服务器响应后，才能发送下一个请求，这样一来，如果某个响应太慢，它就会堵住后面的请求。

所以，为了进一步提速，HTTP/2.0允许客户端在没有收到响应的时候，发送多个HTTP请求，服务器返回响应的时候，不一定按顺序返回，只要双方能识别出哪个响应对应哪个请求，就可以做到并行发送和接收：

\`\`\`
                       ┌─────────┐
┌─────────┐            │░░░░░░░░░│
│O ░░░░░░░│            ├─────────┤
├─────────┤            │░░░░░░░░░│
│         │            ├─────────┤
│         │            │░░░░░░░░░│
└─────────┘            └─────────┘
     │      request 1       │
     │─────────────────────▶│
     │      request 2       │
     │─────────────────────▶│
     │      response 1      │
     │◀─────────────────────│
     │      request 3       │
     │─────────────────────▶│
     │      response 3      │
     │◀─────────────────────│
     │      response 2      │
     │◀─────────────────────│
     ▼                      ▼
\`\`\`

可见，HTTP/2.0进一步提高了效率。

### HTTP编程

既然HTTP

……（中间部分略）……

## 小结

Java提供了\`HttpClient\`作为新的HTTP客户端编程接口用于取代老的\`HttpURLConnection\`接口；

\`HttpClient\`使用链式调用并通过内置的\`BodyPublishers\`和\`BodyHandlers\`来更方便地处理数据。

---

---`}],37:[{t:"注解",u:"https://liaoxuefeng.com/books/java/annotation/use-annotation/index.html",md:`# 使用注解

[  ](https://weibo.com/liaoxuefeng)

什么是注解（Annotation）？注解是放在Java源码的类、方法、字段、参数前的一种特殊“注释”：

\`\`\`java
// this is a component:
@Resource("hello")
public class Hello {
    @Inject
    int n;

    @PostConstruct
    public void hello(@Param String name) {
        System.out.println(name);
    }

    @Override
    public String toString() {
        return "Hello";
    }
}
\`\`\`

注释会被编译器直接忽略，注解则可以被编译器打包进入class文件，因此，注解是一种用作标注的“元数据”。

### 注解的作用

从JVM的角度看，注解本身对代码逻辑没有任何影响，如何使用注解完全由工具决定。

Java的注解可以分为三类：

第一类是由编译器使用的注解，例如：

- \`@Override\`：让编译器检查该方法是否正确地实现了覆写；
- \`@SuppressWarnings\`：告诉编译器忽略此处代码产生的警告。
这类注解不会被编译进入\`.class\`文件，它们在编译后就被编译器扔掉了。

第二类是由工具处理\`.class\`文件使用的注解，比如有些工具会在加载class的时候，对class做动态修改，实现一些特殊的功能。这类注解会被编译进入\`.class\`文件，但加载结束后并不会存在于内存中。这类注解只被一些底层库使用，一般我们不必自己处理。

第三类是在程序运行期能够读取的注解，它们在加载后一直存在于JVM中，这也是最常用的注解。例如，一个配置了\`@PostConstruct\`的方法会在调用构造方法后自动被调用（这是Java代码读取该注解实现的功能，JVM并不会识别该注解）。

定义一个注解时，还可以定义配置参数。配置参数可以包括：

- 所有基本类型；
- String；
- 枚举类型；
- 基本类型、String、Class以及枚举的数组。
因为配置参数必须是常量，所以，上述限制保证了注解在定义时就已经确定了每个参数的值。

注解的配置参数可以有默认值，缺少某个配置参数时将使用默认值。

此外，大部分注解会有一个名为\`value\`的配置参数，对此参数赋值，可以只写常量，相当于省略了value参数。

如果只写注解，相当于全部使用默认值。

举个栗子，对以下代码：

\`\`\`java
public class Hello {
    @Check(min=0, max=100, value=55)
    public int n;

    @Check(value=99)
    public int p;

    @Check(99) // @Check(value=99)
    public int x;

    @Check
    public int y;
}
\`\`\`

\`@Check\`就是一个注解。第一个\`@Check(min=0, max=100, value=55)\`明确定义了三个参数，第二个\`@Check(value=99)\`只定义了一个\`value\`参数，它实际上和\`@Check(99)\`是完全一样的。最后一个\`@Check\`表示所有参数都使用默认值。

### 小结

注解（Annotation）是Java语言用于工具处理的标注：

注解可以配置参数，没有指定配置的参数使用默认值；

如果参数名称是\`value\`，且只有一个参数，那么可以省略参数名称。

---

---`},{t:"反射",u:"https://liaoxuefeng.com/books/java/reflection/",md:`# 反射

[  ](https://weibo.com/liaoxuefeng)

什么是反射？

反射就是Reflection，Java的反射是指程序在运行期可以拿到一个对象的所有信息。

正常情况下，如果我们要调用一个对象的方法，或者访问一个对象的字段，通常会传入对象实例：

\`\`\`java
// Main.java
import com.itranswarp.learnjava.Person;

public class Main {
    String getFullName(Person p) {
        return p.getFirstName() + " " + p.getLastName();
    }
}
\`\`\`

但是，如果不能获得\`Person\`类，只有一个\`Object\`实例，比如这样：

\`\`\`java
String getFullName(Object obj) {
    return ???
}
\`\`\`

怎么办？有童鞋会说：强制转型啊！

\`\`\`java
String getFullName(Object obj) {
    Person p = (Person) obj;
    return p.getFirstName() + " " + p.getLastName();
}
\`\`\`

强制转型的时候，你会发现一个问题：编译上面的代码，仍然需要引用\`Person\`类。不然，去掉\`import\`语句，你看能不能编译通过？

所以，反射是为了解决在运行期，对某个实例一无所知的情况下，如何调用其方法。

---

---`}],38:[{t:"编写JUnit测试",u:"https://liaoxuefeng.com/books/java/unit-test/junit-test/",md:`# 编写JUnit测试

[  ](https://weibo.com/liaoxuefeng)

什么是单元测试呢？单元测试就是针对最小的功能单元编写测试代码。Java程序最小的功能单元是方法，因此，对Java程序进行单元测试就是针对单个Java方法的测试。

单元测试有什么好处呢？在学习单元测试前，我们可以先了解一下测试驱动开发。

所谓测试驱动开发，是指先编写接口，紧接着编写测试。编写完测试后，我们才开始真正编写实现代码。在编写实现代码的过程中，一边写，一边测，什么时候测试全部通过了，那就表示编写的实现完成了：

\`\`\`
    编写接口
     │
     ▼
    编写测试
     │
     ▼
┌─▶ 编写实现
│    │
│ N  ▼
└── 运行测试
     │ Y
     ▼
    任务完成
\`\`\`

这就是传说中的……

当然，这是一种理想情况。大部分情况是我们已经编写了实现代码，需要对已有的代码进行测试。

我们先通过一个示例来看如何编写测试。假定我们编写了一个计算阶乘的类，它只有一个静态方法来计算阶乘：

代码如下：

\`\`\`java
public class Factorial {
    public static long fact(long n) {
        long r = 1;
        for (long i = 1; i <= n; i++) {
            r = r * i;
        }
        return r;
    }
}
\`\`\`

要测试这个方法，一个很自然的想法是编写一个\`main()\`方法，然后运行一些测试代码：

\`\`\`java
public class Test {
    public static void main(String[] args) {
        if (fact(10) == 3628800) {
            System.out.println("pass");
        } else {
            System.out.println("fail");
        }
    }
}
\`\`\`

这样我们就可以通过运行\`main()\`方法来运行测试代码。

不过，使用\`main()\`方法测试有很多缺点：

一是只能有一个\`main()\`方法，不能把测试代码分离，二是没有打印出测试结果和期望结果，例如，\`expected: 3628800, but actual: 123456\`，三是很难编写一组通用的测试代码。

因此，我们需要一种测试框架，帮助我们编写测试。

### JUnit

JUnit是一个开源的Java语言的单元测试框架，专门针对Java设计，使用最广泛。JUnit是事实上的单元测试的标准框架，任何Java开发者都应当学习并使用JUnit编写单元测试。

使用JUnit编写单元测试的好处在于，我们可以非常简单地组织测试代码，并随时运行它们，JUnit就会给出成功的测试和失败的测试，还可以生成测试报告，不仅包含测试的成功率，还可以统计测试的代码覆盖率，即被测试的代码本身有多少经过了测试。对于高质量的代码来说，测试覆盖率应该在80%以上。

此外，几乎所有的IDE工具都集成了JUnit，这样我们就可以直接在IDE中编写并运行JUnit测试。JUnit目前最新版本是5。

以Eclipse为例，当我们已经编写了一个\`Factorial.java\`文件后，我们想对其进行测试，需要编写一个对应的\`FactorialTest.java\`文件，以\`Test\`为后缀是一个惯例，并分别将其放入\`src\`和\`test\`目录中。最后，在\`Project\` - \`Properties\` - \`Java Build Path\` - \`Libraries\`中添加\`JUnit 5\`的库：

整个项目结构如下：

我们来看一下\`FactorialTest.java\`的内容：

\`\`\`java
package com.itranswarp.learnjava;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class FactorialTest {

    @Test
    void testFact() {
        assertEquals(1, Factorial.fact(1));
        assertEquals(2, Factorial.fact(2));
        assertEquals(6, Factorial.fact(3));
        assertEquals(3628800, Factorial.fact(10));
        assertEquals(2432902008176640000L, Factorial.fact(20));
    }
}
\`\`\`

核心测试方法\`testFact()\`加上了\`@Test\`注解，这是JUnit要求的，它会把带有\`@Test\`的方法识别为测试方法。在测试方法内部，我们用\`assertEquals(1, Factorial.fact(1))\`表示，期望\`Factorial.fact(1)\`返回\`1\`。\`assertEquals(expected, actual)\`是最常用的测试方法，它在\`Assertion\`类中定义。\`Assertion\`还定义了其他断言方法，例如：

- \`assertTrue()\`: 期待结果为\`true\`
- \`assertFalse()\`: 期待结果为\`false\`
- \`assertNotNull()\`: 期待结果为非\`null\`
- \`assertArrayEquals()\`: 期待结果为数组并与期望数组每个元素的值均相等
- ...
运行单元测试非常简单。选中\`FactorialTest.java\`文件，点击\`Run\` - \`Run As\` - \`JUnit Test\`，Eclipse会自动运行这个JUnit测试，并显示结果：

如果测试结果与预期不符，\`assertEquals()\`会抛出异常，我们就会得到一个测试失败的结果：

在Failure Trace中，JUnit会告诉我们详细的错误结果：

\`\`\`plain
org.opentest4j.AssertionFailedError: expected: <3628800> but was: <362880>
	at org.junit.jupiter.api.AssertionUtils.fail(AssertionUtils.java:55)
	at org.junit.jupiter.api.AssertEquals.failNotEqual(AssertEquals.java:195)
	at org.junit.jupiter.api.AssertEquals.assertEquals(AssertEquals.java:168)
	at org.junit.jupiter.api.AssertEquals.assertEquals(AssertEquals.java:163)
	at org.junit.jupiter.api.Assertions.assertEquals(Assertions.java:611)
	at com.itranswarp.learnjava.FactorialTest.testFact(FactorialTest.java:14)
	at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at ...
\`\`\`

第一行的失败信息的意思是期待结果\`3628800\`但是实际返回是\`362880\`，此时，我们要么修正实现代码，要么修正测试代码，直到测试通过为止。

使用浮点数时，由于浮点数无法精确地进行比较，因此，我们需要调用\`assertEquals(double expected, double actual, double delta)\`这个重载方法，指定一个误差值：

\`\`\`java
assertEquals(0.1, Math.abs(1 - 9 / 10.0), 0.0000001);
\`\`\`

### 单元测试的好处

单元测试可以确保单个方法按照正确预期运行，如果修改了某个方法的代码，只需确保其对应的单元测试通过，即可认为改动正确。此外，测试代码本身就可以作为示例代码，用来演示如何调用该方法。

使用JUnit进行单元测试，我们可以使用断言（\`Assertion\`）来测试期望结果，可以方便地组织和运行测试，并方便地查看测试结果。此外，JUnit既可以直接在IDE中运行，也可以方便地集成到Maven这些自动化工具中运行。

在编写单元测试的时候，我们要遵循一定的规范：

一是单元测试代码本身必须非常简单，能一下看明白，决不能再为测试代码编写测试；

二是每个单元测试应当互相独立，不依赖运行的顺序；

三是测试时不但要覆盖常用测试用例，还要特别注意测试边界条件，例如输入为\`0\`，\`null\`，空字符串\`""\`等情况。

### 练习

使用JUnit编写测试代码。

### 小结

JUnit是一个单元测试框架，专门用于运行我们编写的单元测试：

一个JUnit测试包含若干\`@Test\`方法，并使用\`Assertions\`进行断言，注意浮点数\`assertEquals()\`要指定\`delta\`。

---

---`}],39:[{t:"JDBC简介",u:"https://liaoxuefeng.com/books/java/jdbc/basic/",md:`# JDBC简介

[  ](https://weibo.com/liaoxuefeng)

在介绍JDBC之前，我们先简单介绍一下关系数据库。

程序运行的时候，数据都是在内存中的。当程序终止的时候，通常都需要将数据保存到磁盘上，无论是保存到本地磁盘，还是通过网络保存到服务器上，最终都会将数据写入磁盘文件。

而如何定义数据的存储格式就是一个大问题。如果我们自己来定义存储格式，比如保存一个班级所有学生的成绩单：

| 名字 | 成绩 |
|---|---|
| Michael | 99 |
| Bob | 85 |
| Bart | 59 |
| Lisa | 87 |
你可以用一个文本文件保存，一行保存一个学生，用\`,\`隔开：

\`\`\`csv
Michael,99
Bob,85
Bart,59
Lisa,87
\`\`\`

你还可以用JSON格式保存，也是文本文件：

\`\`\`json
[
    {"name":"Michael","score":99},
    {"name":"Bob","score":85},
    {"name":"Bart","score":59},
    {"name":"Lisa","score":87}
]
\`\`\`

你还可以定义各种保存格式，但是问题来了：

存储和读取需要自己实现，JSON还是标准，自己定义的格式就各式各样了；

不能做快速查询，只有把数据全部读到内存中才能自己遍历，但有时候数据的大小远远超过了内存（比如蓝光电影，40GB的数据），根本无法全部读入内存。

为了便于程序保存和读取数据，而且，能直接通过条件快速查询到指定的数据，就出现了数据库（Database）这种专门用于集中存储和查询的软件。

数据库软件诞生的历史非常久远，早在1950年数据库就诞生了。经历了网状数据库，层次数据库，我们现在广泛使用的关系数据库是20世纪70年代基于关系模型的基础上诞生的。

关系模型有一套复杂的数学理论，但是从概念上是十分容易理解的。举个学校的例子：

假设某个XX省YY市ZZ县第一实验小学有3个年级，要表示出这3个年级，可以在Excel中用一个表格画出来：

每个年级又有若干个班级，要把所有班级表示出来，可以在Excel中再画一个表格：

这两个表格有个映射关系，就是根据Grade_ID可以在班级表中查找到对应的所有班级：

也就是Grade表的每一行对应Class表的多行，在关系数据库中，这种基于表（Table）的一对多的关系就是关系数据库的基础。

根据某个年级的ID就可以查找所有班级的行，这种查询语句在关系数据库中称为SQL语句，可以写成：

\`\`\`sql
SELECT * FROM classes WHERE grade_id = '1';
\`\`\`

结果也是一个表：

| grade_id | class_id | name |
|---|---|---|
| 1 | 11 | 一年级一班 |
| 1 | 12 | 一年级二班 |
| 1 | 13 | 一年级三班 |
类似的，Class表的一行记录又可以关联到Student表的多行记录：

由于本教程不涉及到关系数据库的详细内容，如果你想从零学习关系数据库和基本的SQL语句，请参考[SQL课程](../../../sql/index.html)。

### NoSQL

你也许还听说过NoSQL数据库，很多NoSQL宣传其速度和规模远远超过关系数据库，所以很多同学觉得有了NoSQL是否就不需要SQL了呢？千万不要被他们忽悠了，连SQL都不明白怎么可能搞明白NoSQL呢？

### 数据库类别

既然我们要使用关系数据库，就必须选择一个关系数据库。目前广泛使用的关系数据库也就这么几种：

付费的商用数据库：

- Oracle，典型的高富帅；
- SQL Server，微软自家产品，Windows定制专款；
- DB2，IBM的产品，听起来挺高端；
- Sybase，曾经跟微软是好基友，后来关系破裂，现在家境惨淡。
这些数据库都是不开源而且付费的，最大的好处是花了钱出了问题可以找厂家解决，不过在Web的世界里，常常需要部署成千上万的数据库服务器，当然不能把大把大把的银子扔给厂家，所以，无论是Google、Facebook，还是国内的BAT，无一例外都选择了免费的开源数据库：

- MySQL，大家都在用，一般错不了；
- PostgreSQL，学术气息有点重，其实挺不错，但知名度没有MySQL高；
- sqlite，嵌入式数据库，适合桌面和移动应用。
作为一个Java工程师，选择哪个免费数据库呢？当然是MySQL。因为MySQL普及率最高，出了错，可以很容易找到解决方法。而且，围绕MySQL有一大堆监控和运维的工具，安装和使用很方便。

### 安装MySQL

为了能继续后面的学习，你需要从MySQL官方网站下载并安装[MySQL Community Server](https://dev.mysql.com/downloads/mysql/)，这个版本是免费的，其他高级版本是要收钱的（请放心，收钱的功能我们用不上）。MySQL是跨平台的，选择对应的平台下载安装文件，安装即可。

安装时，MySQL会提示输入\`root\`用户的口令，请务必记清楚。如果怕记不住，就把口令设置为\`password\`。

在Windows上，安装时请选择\`UTF-8\`编码，以便正确地处理中文。

在Mac或Linux上，需要编辑MySQL的配置文件，把数据库默认的编码全部改为UTF-8。MySQL的配置文件默认存放在\`/etc/my.cnf\`或者\`/etc/mysql/my.cnf\`：

\`\`\`plain
[client]
default-character-set = utf8

[mysqld]
default-storage-engine = INNODB
character-set-server = utf8
collation-server = utf8_general_ci
\`\`\`

重启MySQL后，可以通过MySQL的客户端命令行检查编码：

\`\`\`plain
$ mysql -u root -p
Enter password:
Welcome to the MySQL monitor...
...

mysql> show variables like '%char%';
+--------------------------+--------------------------------------------------------+
| Variable_name            | Value                                                  |
+--------------------------+--------------------------------------------------------+
| character_set_client     | utf8                                                   |
| character_set_connection | utf8                                                   |
| character_set_database   | utf8                                                   |
| character_set_filesystem | binary                                                 |
| character_set_results    | utf8                                                   |
| character_set_server     | utf8                                                   |
| character_set_system     | utf8                                                   |
| character_sets_dir       | /usr/local/mysql-5.1.65-osx10.6-x86_64/share/charsets/ |
+--------------------------+--------------------------------------------------------+
8 rows in set (0.00 sec)
\`\`\`

看到\`utf8\`字样就表示编码设置正确。

*注*：如果MySQL的版本≥5.5.3，可以把编码设置为\`utf8mb4\`，\`utf8mb4\`和\`utf8\`完全兼容，但它支持最新的Unicode标准，可以显示emoji字符。

### JDBC

什么是JDBC？JDBC是Java DataBase Connectivity的缩写，它是Java程序访问数据库的标准接口。

使用Java程序访问数据库时，Java代码并不是直接通过TCP连接去访问数据库，而是通过JDBC接口来访问，而JDBC接口则通过JDBC驱动来实现真正对数据库的访问。

例如，我们在Java代码中如果要访问MySQL，那么必须编写代码操作JDBC接口。注意到JDBC接口是Java标准库自带的，所以可以直接编译。而具体的JDBC驱动是由数据库厂商提供的，例如，MySQL的JDBC驱动由Oracle提供。因此，访问某个具体的数据库，我们只需要引入该厂商提供的JDBC驱动，就可以通过JDBC接口来访问，这样保证了Java程序编写的是一套数据库访问代码，却可以访问各种不同的数据库，因为他们都提供了标准的JDBC驱动：

\`\`\`
┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐

│  ┌───────────────┐  │
   │   Java App    │
│  └───────────────┘  │
           │
│          ▼          │
   ┌───────────────┐
│  │JDBC Interface │◀─┼─── JDK
   └───────────────┘
│          │          │
           ▼
│  ┌───────────────┐  │
   │  JDBC Driver  │◀───── 

……（中间部分略）……

## 小结

使用JDBC的好处是：

- 各数据库厂商使用相同的接口，Java代码不需要针对不同数据库分别开发；
- Java程序编译期仅依赖java.sql包，不依赖具体数据库的jar包；
- 可随时替换底层数据库，访问数据库的Java代码基本不变。

---

---`},{t:"JDBC查询",u:"https://liaoxuefeng.com/books/java/jdbc/query/",md:`# JDBC查询

[  ](https://weibo.com/liaoxuefeng)

前面我们讲了Java程序要通过JDBC接口来查询数据库。JDBC是一套接口规范，它在哪呢？就在Java的标准库\`java.sql\`里放着，不过这里面大部分都是接口。接口并不能直接实例化，而是必须实例化对应的实现类，然后通过接口引用这个实例。那么问题来了：JDBC接口的实现类在哪？

因为JDBC接口并不知道我们要使用哪个数据库，所以，用哪个数据库，我们就去使用哪个数据库的“实现类”，我们把某个数据库实现了JDBC接口的jar包称为JDBC驱动。

因为我们选择了MySQL 5.x作为数据库，所以我们首先得找一个MySQL的JDBC驱动。所谓JDBC驱动，其实就是一个第三方jar包，我们直接添加一个Maven依赖就可以了：

\`\`\`xml
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>5.1.47</version>
    <scope>runtime</scope>
</dependency>
\`\`\`

注意到这里添加依赖的\`scope\`是\`runtime\`，因为编译Java程序并不需要MySQL的这个jar包，只有在运行期才需要使用。如果把\`runtime\`改成\`compile\`，虽然也能正常编译，但是在IDE里写程序的时候，会多出来一大堆类似\`com.mysql.jdbc.Connection\`这样的类，非常容易与Java标准库的JDBC接口混淆，所以坚决不要设置为\`compile\`。

有了驱动，我们还要确保MySQL在本机正常运行，并且还需要准备一点数据。这里我们用一个脚本创建数据库和表，然后插入一些数据：

\`\`\`sql
-- 创建数据库learjdbc:
DROP DATABASE IF EXISTS learnjdbc;
CREATE DATABASE learnjdbc;

-- 创建登录用户learn/口令learnpassword
CREATE USER IF NOT EXISTS learn@'%' IDENTIFIED BY 'learnpassword';
GRANT ALL PRIVILEGES ON learnjdbc.* TO learn@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

-- 创建表students:
USE learnjdbc;
CREATE TABLE students (
  id BIGINT AUTO_INCREMENT NOT NULL,
  name VARCHAR(50) NOT NULL,
  gender TINYINT(1) NOT NULL,
  grade INT NOT NULL,
  score INT NOT NULL,
  PRIMARY KEY(id)
) Engine=INNODB DEFAULT CHARSET=UTF8;

-- 插入初始数据:
INSERT INTO students (name, gender, grade, score) VALUES ('小明', 1, 1, 88);
INSERT INTO students (name, gender, grade, score) VALUES ('小红', 1, 1, 95);
INSERT INTO students (name, gender, grade, score) VALUES ('小军', 0, 1, 93);
INSERT INTO students (name, gender, grade, score) VALUES ('小白', 0, 1, 100);
INSERT INTO students (name, gender, grade, score) VALUES ('小牛', 1, 2, 96);
INSERT INTO students (name, gender, grade, score) VALUES ('小兵', 1, 2, 99);
INSERT INTO students (name, gender, grade, score) VALUES ('小强', 0, 2, 86);
INSERT INTO students (name, gender, grade, score) VALUES ('小乔', 0, 2, 79);
INSERT INTO students (name, gender, grade, score) VALUES ('小青', 1, 3, 85);
INSERT INTO students (name, gender, grade, score) VALUES ('小王', 1, 3, 90);
INSERT INTO students (name, gender, grade, score) VALUES ('小林', 0, 3, 91);
INSERT INTO students (name, gender, grade, score) VALUES ('小贝', 0, 3, 77);
\`\`\`

在控制台输入\`mysql -u root -p\`，输入\`root\`口令后以\`root\`身份，把上述SQL贴到控制台执行一遍就行。如果你运行的是最新版MySQL 8.x，需要调整一下\`CREATE USER\`语句。

### JDBC连接

使用JDBC时，我们先了解什么是Connection。Connection代表一个JDBC连接，它相当于Java程序到数据库的连接（通常是TCP连接）。打开一个Connection时，需要准备URL、用户名和口令，才能成功连接到数据库。

URL是由数据库厂商指定的格式，例如，MySQL的URL是：

\`\`\`plain
jdbc:mysql://<hostname>:<port>/<db>?key1=value1&key2=value2
\`\`\`

假设数据库运行在本机\`localhost\`，端口使用标准的\`3306\`，数据库名称是\`learnjdbc\`，那么URL如下：

\`\`\`plain
jdbc:mysql://localhost:3306/learnjdbc?useSSL=false&characterEncoding=utf8
\`\`\`

后面的两个参数表示不使用SSL加密，使用UTF-8作为字符编码（注意MySQL的UTF-8是\`utf8\`）。

要获取数据库连接，使用如下代码：

\`\`\`java
// JDBC连接的URL, 不同数据库有不同的格式:
String JDBC_URL = "jdbc:mysql://localhost:3306/test";
String JDBC_USER = "root";
String JDBC_PASSWORD = "password";
// 获取连接:
Connection conn = DriverManager.getConnection(JDBC_URL, JDBC_USER, JDBC_PASSWORD);
// TODO: 访问数据库...
// 关闭连接:
conn.close();
\`\`\`

核心代码是\`DriverManager\`提供的静态方法\`getConnection()\`。\`DriverManager\`会自动扫描classpath，找到所有的JDBC驱动，然后根据我们传入的URL自动挑选一个合适的驱动。

因为JDBC连接是一种昂贵的资源，所以使用后要及时释放。使用\`try (resource)\`来自动释放JDBC连接是一个好方法：

\`\`\`java
try (Connection conn = DriverManager.getConnection(JDBC_URL, JDBC_USER, JDBC_PASSWORD)) {
    ...
}
\`\`\`

### JDBC查询

获取到JDBC连接后，下一步我们就可以查询数据库了。查询数据库分以下几步：

第一步，通过\`Connection\`提供的\`createStatement()\`方法创建一个\`Statement\`对象，用于执行一个查询；

第二步，执行\`Statement\`对象提供的\`executeQuery("SELECT * FROM students")\`并传入SQL语句，执行查询并获得返回的结果集，使用\`ResultSet\`来引用这个结果集；

第三步，反复调用\`ResultSet\`的\`next()\`方法并读取每一行结果。

完整查询代码如下：

\`\`\`java
try (Connection conn = DriverManager.getConnection(JDBC_URL, JDBC_USER, JDBC_PASSWORD)) {
    try (Statement stmt = conn.createStatement()) {
        try (ResultSet rs = stmt.executeQuery("SELECT id, grade, name, gender FROM students WHERE gender=1")) {
            while (rs.next()) {
                long id = rs.getLong(1); // 注意：索引从1开始
                long grade = rs.getLong(2);
                String name = rs.getString(3);
                int gender = rs.getInt(4);
            }
        }
    }
}
\`\`\`

注意要点：

\`Statement\`和\`ResultSet\`都是需要关闭的资源，因此嵌套使用\`try (resource)\`确保及时关闭；

\`rs.next()\`用于判断是否有下一行记录，如果有，将自动把当前行移动到下一行（一开始获得\`ResultSet\`时当前行不是第一行）；

\`ResultSet\`获取列时，索引从\`1\`开始而不是\`0\`；

必须根据\`SELECT\`的列的对应位置来调用\`getLong(1)\`，\`getString(2)\`这些方法，否则对应位置的数据类型不对，将报错。

### SQL注入

使用\`Statement\`拼字符串非常容易引发SQL注入的问题，这是因为SQL参数往往是从方法参数传入的。

我们来看一个例子：假设用户登录的验证方法如下：

\`\`\`java
User login(String name, String pass) {
    ...
    stmt.executeQuery("SELECT * FROM user WHERE login='" + name + "' AND pass='" + pass +

……（中间部分略）……

## 小结

JDBC接口的\`Connection\`代表一个JDBC连接；

使用JDBC查询时，总是使用\`PreparedStatement\`进行查询而不是\`Statement\`；

查询结果总是\`ResultSet\`，即使使用聚合查询也不例外。

---

---`}],40:[{t:"第一个Spring Boot应用",u:"https://liaoxuefeng.com/books/java/springboot/first-webapp/",md:`# 第一个Spring Boot应用

[  ](https://weibo.com/liaoxuefeng)

要了解Spring Boot，我们先来编写第一个Spring Boot应用程序，看看与前面我们编写的Spring应用程序有何异同。

我们新建一个\`springboot-hello\`的工程，创建标准的Maven目录结构如下：

\`\`\`
springboot-hello
├── pom.xml
├── src
│   └── main
│       ├── java
│       └── resources
│           ├── application.yml
│           ├── logback-spring.xml
│           ├── static
│           └── templates
└── target
\`\`\`

其中，在\`src/main/resources\`目录下，注意到几个文件：

### application.yml

这是Spring Boot默认的配置文件，它采用[YAML](https://yaml.org/)格式而不是\`.properties\`格式，文件名必须是\`application.yml\`而不是其他名称。

YAML格式比\`key=value\`格式的\`.properties\`文件更易读。比较一下两者的写法：

使用\`.properties\`格式：

\`\`\`properties
# application.properties

spring.application.name=\${APP_NAME:unnamed}

spring.datasource.url=jdbc:hsqldb:file:testdb
spring.datasource.username=sa
spring.datasource.password=
spring.datasource.driver-class-name=org.hsqldb.jdbc.JDBCDriver

spring.datasource.hikari.auto-commit=false
spring.datasource.hikari.connection-timeout=3000
spring.datasource.hikari.validation-timeout=3000
spring.datasource.hikari.max-lifetime=60000
spring.datasource.hikari.maximum-pool-size=20
spring.datasource.hikari.minimum-idle=1
\`\`\`

使用YAML格式：

\`\`\`yaml
# application.yml

spring:
  application:
    name: \${APP_NAME:unnamed}
  datasource:
    url: jdbc:hsqldb:file:testdb
    username: sa
    password:
    driver-class-name: org.hsqldb.jdbc.JDBCDriver
    hikari:
      auto-commit: false
      connection-timeout: 3000
      validation-timeout: 3000
      max-lifetime: 60000
      maximum-pool-size: 20
      minimum-idle: 1
\`\`\`

可见，YAML是一种层级格式，它和\`.properties\`很容易互相转换，它的优点是去掉了大量重复的前缀，并且更加易读。

 提示

也可以使用application.properties作为配置文件，但不如YAML格式简单。

### 使用环境变量

在配置文件中，我们经常使用如下的格式对某个key进行配置：

\`\`\`yaml
app:
  db:
    host: \${DB_HOST:localhost}
    user: \${DB_USER:root}
    password: \${DB_PASSWORD:password}
\`\`\`

这种\`\${DB_HOST:localhost}\`意思是，首先从环境变量查找\`DB_HOST\`，如果环境变量定义了，那么使用环境变量的值，否则，使用默认值\`localhost\`。

这使得我们在开发和部署时更加方便，因为开发时无需设定任何环境变量，直接使用默认值即本地数据库，而实际线上运行的时候，只需要传入环境变量即可：

\`\`\`plain
$ DB_HOST=10.0.1.123 DB_USER=prod DB_PASSWORD=xxxx java -jar xxx.jar
\`\`\`

### logback-spring.xml

这是Spring Boot的logback配置文件名称（也可以使用\`logback.xml\`），一个标准的写法如下：

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <include resource="org/springframework/boot/logging/logback/defaults.xml" />

    <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>\${CONSOLE_LOG_PATTERN}</pattern>
            <charset>utf8</charset>
        </encoder>
    </appender>

    <appender name="APP_LOG" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <encoder>
            <pattern>\${FILE_LOG_PATTERN}</pattern>
            <charset>utf8</charset>
        </encoder>
          <file>app.log</file>
        <rollingPolicy class="ch.qos.logback.core.rolling.FixedWindowRollingPolicy">
            <maxIndex>1</maxIndex>
            <fileNamePattern>app.log.%i</fileNamePattern>
        </rollingPolicy>
        <triggeringPolicy class="ch.qos.logback.core.rolling.SizeBasedTriggeringPolicy">
            <MaxFileSize>1MB</MaxFileSize>
        </triggeringPolicy>
    </appender>

    <root level="INFO">
        <appender-ref ref="CONSOLE" />
        <appender-ref ref="APP_LOG" />
    </root>
</configuration>
\`\`\`

它主要通过\`<include resource="..." />\`引入了Spring Boot的一个缺省配置，这样我们就可以引用类似\`\${CONSOLE_LOG_PATTERN}\`这样的变量。上述配置定义了一个控制台输出和文件输出，可根据需要修改。

\`static\`是静态文件目录，\`templates\`是模板文件目录，注意它们不再存放在\`src/main/webapp\`下，而是直接放到\`src/main/resources\`这个classpath目录，因为在Spring Boot中已经不需要专门的webapp目录了。

以上就是Spring Boot的标准目录结构，它完全是一个基于Java应用的普通Maven项目。

我们再来看源码目录结构：

\`\`\`
src/main/java
└── com
    └── itranswarp
        └── learnjava
            ├── Application.java
            ├── entity
            │   └── User.java
            ├── service
            │   └── UserService.java
            └── web
                └── UserController.java
\`\`\`

在存放源码的\`src/main/java\`目录中，Spring Boot对Java包的层级结构有一个要求。注意到我们的根package是\`com.itranswarp.learnjava\`，下面还有\`entity\`、\`service\`、\`web\`等子package。Spring Boot要求\`main()\`方法所在的启动类必须放到根package下，命名不做要求，这里我们以\`Application.java\`命名，它的内容如下：

\`\`\`java
@SpringBootApplication
public class Application {
    public static void main(String[] args) throws Exception {
        SpringApplication.run(Application.class, args);
    }
}
\`\`\`

启动Spring Boot应用程序只需要一行代码加上一个注解\`@SpringBootApplication\`，该注解实际上又包含了：

- @SpringBootConfiguration
  - @Configuration
- @EnableAutoConfiguration
  - @AutoConfigurationPackage
- @ComponentScan
这样一个注解就相当于启动了自动配置和自动扫描。

我们再观察\`pom.xml\`，它的内容如下：

\`\`\`xml
<project ...>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
 

……（中间部分略）……

## 小结

Spring Boot是一个基于Spring提供了开箱即用的一组套件，它可以让我们基于很少的配置和代码快速搭建出一个完整的应用程序。

Spring Boot有非常强大的AutoConfiguration功能，它是通过自动扫描+条件装配实现的。

---

---

──────── [TRUNCATED] ────────
Showing 8,923 chars (head) + 2,991 chars (tail) of 13,877 total clean characters.
Full text saved to: /home/agentuser/.hermes/cache/web/liaoxuefeng.com-46d409696f.md
To read the omitted middle: read_file path="/home/agentuser/.hermes/cache/web/liaoxuefeng.com-46d409696f.md" offset=282 limit=200  (the file is the complete page; raise/lower offset to page through it).
─────────────────────────────`}]};function Id(p){const y=[],c=p.split(`
`);let x=0,A=0;for(;x<c.length;){const R=c[x];if(R.startsWith("```")){const q=[];for(x++;x<c.length&&!c[x].startsWith("```");)q.push(c[x]),x++;x++,y.push(s.jsx("pre",{className:"lxf-code",children:s.jsx("code",{children:q.join(`
`)})},A++));continue}R.startsWith("### ")?y.push(s.jsx("h4",{children:R.slice(4)},A++)):R.startsWith("## ")?y.push(s.jsx("h3",{children:R.slice(3)},A++)):R.startsWith("# ")?y.push(s.jsx("h3",{className:"lxf-title",children:R.slice(2)},A++)):/^[-*] /.test(R)?y.push(s.jsxs("div",{className:"lxf-li",children:["• ",Kc(R.slice(2))]},A++)):R.trim()===""||y.push(s.jsx("p",{children:Kc(R)},A++)),x++}return y}function Kc(p){const y=[],c=/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;let x=0,A,R=0;for(;A=c.exec(p);){A.index>x&&y.push(p.slice(x,A.index));const q=A[0];if(q.startsWith("**"))y.push(s.jsx("b",{children:q.slice(2,-2)},R++));else if(q.startsWith("`"))y.push(s.jsx("code",{className:"lxf-inline-code",children:q.slice(1,-1)},R++));else{const rn=q.match(/\[([^\]]+)\]\(([^)]+)\)/);rn&&y.push(s.jsxs("a",{href:rn[2],target:"_blank",rel:"noopener noreferrer",children:[rn[1]," ↗"]},R++))}x=A.index+q.length}return x<p.length&&y.push(p.slice(x)),y}function Ld({day:p}){const y=nu[p]||[],[c,x]=V.useState(0);if(!y.length)return null;const A=y[Math.min(c,y.length-1)];return s.jsxs("div",{className:"lxf-reader open",children:[s.jsxs("div",{className:"lxf-head",children:["📖 教程原文（廖雪峰 Java 教程 · 站内阅读",y.length>1?` · ${y.length} 个章节`:"","）"]}),y.length>1&&s.jsx("div",{className:"lxf-tabs",children:y.map((R,q)=>s.jsx("button",{className:"lxf-tab"+(q===c?" active":""),onClick:()=>x(q),children:R.t},q))}),s.jsx("div",{className:"lxf-content inline",children:Id(A.md)}),s.jsxs("div",{className:"lxf-footer",children:["原文：",s.jsxs("a",{href:A.u,target:"_blank",rel:"noopener noreferrer",children:[A.u," ↗"]}),s.jsx("span",{className:"lxf-credit",children:" · 廖雪峰的官方网站 · 版权归原作者所有"})]})]})}function Ad({day:p,value:y,onChange:c}){const[x,A]=V.useState(1),R=V.useRef(null),q=V.useRef(null),[rn,H]=V.useState(!0),en=V.useRef(null);V.useEffect(()=>{A(y.split(`
`).length)},[y]);const W=un=>{c(un),H(!1),en.current&&clearTimeout(en.current),en.current=setTimeout(()=>{localStorage.setItem("javaStudyWorkbench.v3.ex."+p,un),H(!0)},800)},nn=un=>{if(un.key==="Tab"){un.preventDefault();const gn=un.currentTarget,ln=gn.selectionStart,F=gn.selectionEnd,ee=y.slice(0,ln)+"    "+y.slice(F);W(ee),requestAnimationFrame(()=>{gn.selectionStart=gn.selectionEnd=ln+4})}},sn=()=>{q.current&&R.current&&(q.current.scrollTop=R.current.scrollTop)};return s.jsxs("div",{className:"editor-wrap",children:[s.jsxs("div",{className:"editor-head",children:[s.jsxs("span",{className:"editor-dots",children:[s.jsx("i",{}),s.jsx("i",{}),s.jsx("i",{})]}),s.jsxs("span",{className:"editor-title",children:["Main.java · Day ",p," 练习"]}),s.jsx("span",{className:"editor-save"+(rn?" ok":""),children:rn?"已保存 ✓":"编辑中…"})]}),s.jsxs("div",{className:"editor-body",children:[s.jsx("div",{className:"editor-gutter",ref:q,children:Array.from({length:x},(un,gn)=>s.jsx("div",{className:"gutter-line",children:gn+1},gn))}),s.jsx("textarea",{ref:R,className:"editor-ta",value:y,onChange:un=>W(un.target.value),onKeyDown:nn,onScroll:sn,spellCheck:!1,autoCapitalize:"off",autoCorrect:"off"})]})]})}const Rd=["cppreference.com","en.cppreference.com","zh.cppreference.com","go.dev","pkg.go.dev","prisma.io","docs.docker.com","spring.io","baeldung.com"];function Od(p){try{const y=new URL(p).hostname;return!Rd.some(c=>y===c||y.endsWith("."+c))}catch{return!1}}function _d({url:p,title:y,onClose:c}){const x=Od(p),[A,R]=V.useState(!0);return s.jsx("div",{className:"modal-mask",onClick:c,children:s.jsxs("div",{className:"modal res-reader-modal",onClick:q=>q.stopPropagation(),children:[s.jsxs("div",{className:"history-head",children:[s.jsxs("h2",{children:["📖 ",y]}),s.jsxs("div",{className:"res-reader-actions",children:[!x&&s.jsx("button",{className:"mini",onClick:()=>window.open(p,"_blank","noopener"),children:"↗ 新窗口打开（该站禁止内嵌）"}),s.jsx("button",{className:"mini",onClick:()=>window.open(p,"_blank","noopener"),children:"↗ 新窗口"}),s.jsx("span",{className:"history-close",onClick:c,children:"✕"})]})]}),x?s.jsxs("div",{className:"res-reader-frame-wrap",children:[A&&s.jsx("div",{className:"res-reader-loading",children:"加载中…（部分站点较慢）"}),s.jsx("iframe",{src:p,className:"res-reader-frame",title:y,onLoad:()=>R(!1),sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",referrerPolicy:"no-referrer"})]}):s.jsxs("div",{className:"res-reader-blocked",children:[s.jsx("div",{className:"res-reader-blocked-icon",children:"🚧"}),s.jsxs("p",{children:[s.jsx("b",{children:new URL(p).hostname})," 禁止被其他网站内嵌（X-Frame-Options 保护）。"]}),s.jsx("p",{children:"点右上角「新窗口打开」阅读，读完回来继续学习～"})]})]})})}function qd({day:p,track:y,onClose:c,openReader:x}){const A=y.tasks.find(W=>W.d===p),R=y.quizzes[p]??[],q=y.exercises[p],rn=localStorage.getItem("javaStudyWorkbench.v3.ex."+y.id+"."+p)??(q==null?void 0:q.starter)??"",[H,en]=V.useState("lesson");return A?s.jsx("div",{className:"modal-mask",onClick:c,children:s.jsxs("div",{className:"modal history-modal",onClick:W=>W.stopPropagation(),children:[s.jsxs("div",{className:"history-head",children:[s.jsxs("h2",{children:["📚 Day ",p," 回顾 ",s.jsx("span",{className:"small",children:A.tag})]}),s.jsx("span",{className:"history-close",onClick:c,children:"✕"})]}),s.jsxs("div",{className:"history-tabs",children:[s.jsx("button",{className:H==="lesson"?"active":"",onClick:()=>en("lesson"),children:"📖 课程"}),q&&s.jsx("button",{className:H==="exercise"?"active":"",onClick:()=>en("exercise"),children:"⌨️ 练习"}),s.jsxs("button",{className:H==="quiz"?"active":"",onClick:()=>en("quiz"),children:["🎯 测验 ",R.length," 题"]}),y.resources[p]&&s.jsx("button",{className:H==="res"?"active":"",onClick:()=>en("res"),children:"🔗 资料"})]}),s.jsxs("div",{className:"history-body",children:[H==="lesson"&&A.lesson&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"lesson-points",children:A.lesson.points.map((W,nn)=>s.jsxs("div",{className:"lesson-point",children:[s.jsx("span",{className:"lp-num",children:nn+1}),s.jsx("span",{children:W})]},nn))}),s.jsx("div",{className:"lesson-code-label",children:"代码示例"}),s.jsx("pre",{className:"lesson-code",children:s.jsx("code",{children:A.lesson.code})}),s.jsxs("div",{className:"lesson-analogy",children:[s.jsx("span",{className:"la-icon",children:"🧠"}),s.jsxs("div",{children:[s.jsx("b",{children:"前端类比"}),s.jsx("p",{children:A.lesson.analogy})]})]})]}),H==="exercise"&&q&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"ex-prompt",children:q.prompt}),s.jsx("div",{className:"lesson-code-label",children:"你当时写的代码（自动保存的）"}),s.jsx("pre",{className:"lesson-code",children:s.jsx("code",{children:rn})}),s.jsx("div",{className:"lesson-code-label",children:"参考答案"}),s.jsx("pre",{className:"lesson-code",children:s.jsx("code",{children:q.answer})}),s.jsx("div",{className:"lesson-code-label",children:"预期输出"}),s.jsx("pre",{className:"lesson-code expected",children:s.jsx("code",{children:q.expected})})]}),H==="res"&&y.resources[p]&&s.jsx("div",{className:"res-links",children:y.resources[p].map(W=>s.jsxs("button",{className:"res-link",onClick:()=>x({url:W.url,title:W.name}),children:[s.jsx("span",{className:"res-type t-"+W.type,children:ss[W.type]}),W.name," ⧉"]},W.url))}),H==="quiz"&&s.jsx("div",{className:"history-quiz-list",children:R.map((W,nn)=>s.jsxs("details",{className:"hq-item",children:[s.jsxs("summary",{children:[nn+1,". ",W.q]}),s.jsx("div",{className:"hq-opts",children:W.options.map((sn,un)=>s.jsxs("div",{className:"hq-opt"+(un===W.answer?" right":""),children:[String.fromCharCode(65+un),". ",sn,un===W.answer?" ✓":""]},un))}),s.jsx("div",{className:"explain",children:s.jsx("p",{children:W.explain})})]},nn))})]})]})}):null}const nt="javaStudyWorkbench.v3";function ra(){try{const p=localStorage.getItem(nt);if(p)return JSON.parse(p)}catch{}return{currentDay:1,doneTasks:[],notes:[],startDate:new Date().toDateString(),xp:0,quizCorrect:0,quizWrong:0,perfectQuizzes:0,bossCleared:[],maxStreak:0,wrongBook:[],lastDoneDate:""}}const Xc=()=>new Date().toLocaleDateString("zh-CN"),os=()=>new Date().toDateString();function Jd(p){const y=[];for(const c of p.tasks){const x=y[y.length-1];x&&x.name===c.tag?(x.to=c.d,x.items.push(c.t)):y.push({name:c.tag,from:c.d,to:c.d,items:[c.t]})}return y}function Bd(p){const y=p.trackId||yo;return ls.find(c=>c.id===y)||ls[0]}function is(p,y){var x;const c=(x=p.trackState)==null?void 0:x[y];return c?{...c,xp:c.xp??0}:{currentDay:p.currentDay??1,doneTasks:p.doneTasks??[],wrongBook:p.wrongBook??[],xp:y==="java"?p.xp??0:0}}function Yc(p){let y=ta[0],c=null;for(let x=0;x<ta.length;x++)p>=ta[x].need&&(y=ta[x],c=ta[x+1]??null);return{cur:y,next:c}}function zd({quiz:p,day:y,qi:c,onClose:x,onPass:A}){const[R,q]=V.useState(null),rn=R===p.answer;return s.jsx("div",{className:"modal-mask",onClick:x,children:s.jsxs("div",{className:"modal retake-modal",onClick:H=>H.stopPropagation(),children:[s.jsxs("h2",{children:["📕 错题重练 ",s.jsxs("span",{className:"small",children:["Day ",y]})]}),s.jsx("div",{className:"quiz-q",children:p.q}),s.jsx("div",{className:"quiz-opts",children:p.options.map((H,en)=>{const W=R!==null&&en===p.answer,nn=R===en&&en!==p.answer;return s.jsxs("div",{className:"quiz-opt"+(W?" right":"")+(nn?" wrong":""),onClick:()=>{R===null&&(q(en),en===p.answer&&A())},children:[String.fromCharCode(65+en),". ",H]},en)})}),R!==null&&s.jsxs("div",{className:"retake-result "+(rn?"good":"bad"),children:[rn?"🎉 答对了！这道题从错题本移除，+5 XP":"😅 又错了…再看看解析，稍后再来",s.jsxs("div",{className:"hq-explain",children:["💡 ",p.explain]}),s.jsx("button",{className:"primary",onClick:x,children:"知道了"})]}),R===null&&s.jsx("button",{onClick:x,children:"先不练了"})]})})}function Hd(){var br;const[p,y]=V.useState(ra),c=Bd(p),x=is(p,c.id),[A,R]=V.useState(!1),[q,rn]=V.useState(""),[H,en]=V.useState(null),[W,nn]=V.useState(""),[sn,un]=V.useState(1500),[gn,ln]=V.useState(!1),[F,ee]=V.useState(null),[hn,te]=V.useState(0),[kn,Yn]=V.useState(null),[Bn,zn]=V.useState(0),[Sn,ve]=V.useState(null),[ye,Ee]=V.useState(null),[re,Hn]=V.useState(0),[ue,pe]=V.useState([]),[Fn,vn]=V.useState(null),[P,z]=V.useState(""),[M,m]=V.useState(()=>localStorage.getItem(nt+".learned."+new Date().toDateString()+".d"+(ra().trackId||yo)+"."+ra().currentDay)==="1"),[S,$]=V.useState(""),[Q,tn]=V.useState(!1),[X,dn]=V.useState(()=>{try{return JSON.parse(localStorage.getItem(nt+".exDone."+(ra().trackId||yo))||"{}")}catch{return{}}}),[Z,mn]=V.useState(null),[Gn,He]=V.useState(null),[Fe,Jt]=V.useState(""),[Ge,aa]=V.useState(()=>localStorage.getItem(nt+".theme")||"dark");V.useEffect(()=>{document.documentElement.classList.toggle("light-theme",Ge==="light"),localStorage.setItem(nt+".theme",Ge)},[Ge]);const[wt,pr]=V.useState(25);V.useEffect(()=>{var k;const g=localStorage.getItem("javaStudyWorkbench.v3.ex."+c.id+"."+x.currentDay);$(g??((k=c.exercises[x.currentDay])==null?void 0:k.starter)??""),tn(!1)},[x.currentDay]);const dr=V.useState({lv:1})[0];V.useEffect(()=>{localStorage.setItem(nt,JSON.stringify(p));const{cur:g}=Yc(x.xp);g.lv>dr.lv&&(dr.lv=g.lv,Ee(`${g.title}`))},[p]),V.useEffect(()=>{if(!gn)return;const g=setInterval(()=>{un(k=>k<=1?(ln(!1),An(T=>({...T,pomodoros:(T.pomodoros||0)+1,xp:T.xp+3})),Vn({icon:"🍅",title:"番茄钟完成！",desc:"专注 +1，奖励 +3 XP，休息一下吧"}),wt*60):k-1)},1e3);return()=>clearInterval(g)},[gn,wt]),V.useEffect(()=>{document.title=gn?`⏳ ${xr} · 工作台`:"工作台"},[gn,sn]);const Vn=g=>{pe(k=>[...k,g]),setTimeout(()=>pe(k=>k.filter(T=>T!==g)),3500)},An=g=>y(k=>{const T=g({...k}),L=T.trackId||yo;return{...T,trackState:{...T.trackState||{},[L]:{currentDay:T.currentDay,doneTasks:T.doneTasks,wrongBook:T.wrongBook,xp:T.xp}}}}),{cur:xe,next:et}=Yc(x.xp),oa=et?Math.min(100,Math.round((x.xp-xe.need)/(et.need-xe.need)*100)):100,mr=(()=>{const g=new Set(x.doneTasks.map(T=>T));let k=0;for(let T=x.currentDay-1;T>=1&&g.has(T);T--)k++;return k})(),gr={doneTasks:x.doneTasks,quizCorrect:p.quizCorrect,quizWrong:p.quizWrong,perfectQuizzes:p.perfectQuizzes,bossCleared:p.bossCleared,currentStreak:mr,maxStreak:p.maxStreak,level:xe.lv,notes:p.notes.length},Bt=vo.filter(g=>g.condition(gr)),fr=()=>{localStorage.setItem(nt+".learned."+new Date().toDateString()+".d"+c.id+"."+x.currentDay,"1"),m(!0),An(g=>({...g,xp:g.xp+5})),Vn({icon:"📖",title:"学习完成！",desc:"获得 +5 学识 XP，练习和测验已解锁"})},zt=()=>{const g={...X,[x.currentDay]:!0};dn(g),localStorage.setItem(nt+".exDone."+c.id,JSON.stringify(g)),X[x.currentDay]||(An(k=>({...k,xp:k.xp+10})),Vn({icon:"⌨️",title:"练习完成！",desc:"获得 +10 实战 XP"}),On.type==="ex"&&!On.done&&Tt("ex"))},ia=()=>{M&&(zn(0),ee(x.currentDay),Hn(0),te(0),Yn(null),ve(null))},kt=g=>{if(kn!==null)return;Yn(g);const k=c.quizzes[F],T=g===k[hn].answer;if(T&&zn(L=>L+1),T){const L=re+1;Hn(L),L===3?Vn({icon:"🔥",title:"三连击！",desc:"连对 3 题，手感来了"}):L===5?Vn({icon:"⚡",title:"五连超凡！",desc:"连对 5 题，勇者威武"}):L>=8&&Vn({icon:"🌟",title:`${L} 连击 · 传说诞生`,desc:"这波题海被你冲烂了"})}else re>0&&(Hn(0),Vn({icon:"💨",title:`连击中断（${re}）`,desc:"稳住，下一题连回来"}));An(L=>({...L,quizCorrect:L.quizCorrect+(T?1:0),quizWrong:L.quizWrong+(T?0:1),wrongBook:T?L.wrongBook:[...L.wrongBook,[F,hn]]}))},jt=()=>{var Se,de;const g=c.quizzes[F];if(hn+1<g.length){te(hn+1),Yn(null);return}const k=Bn,T=g.length,L=((Se=c.tasks.find(Dn=>Dn.d===F))==null?void 0:Se.xp)??20,an=k===T?Math.round(L*.5):0,K=Math.round(L*(.6+.4*(k/T)))+an,bn=(((de=c.tasks.find(Dn=>Dn.d===F))==null?void 0:de.tag)??"").includes("Boss")||F===c.tasks.length;An(Dn=>{var ca;return{...Dn,xp:Dn.xp+K,doneTasks:Dn.doneTasks.includes(F)?Dn.doneTasks:[...Dn.doneTasks,F],perfectQuizzes:Dn.perfectQuizzes+(k===T?1:0),bossCleared:bn&&!Dn.bossCleared.includes(F)?[...Dn.bossCleared,F]:Dn.bossCleared,lastDoneDate:os(),doneDates:{...Dn.doneDates||{},[os()]:(((ca=Dn.doneDates)==null?void 0:ca[os()])||0)+1}}}),ve({correct:k,total:T,xpGained:K}),k===T&&Vn({icon:"💯",title:"完美通关！",desc:`额外奖励 +${an} XP`}),On.type==="quiz"&&!On.done&&Tt("quiz"),On.type==="perfect"&&k===T&&!On.done&&Tt("perfect")},sa=()=>{ve(null),ee(null),An(g=>({...g,currentDay:g.currentDay+1})),R(!1)},hr=()=>{const g=q.trim();g&&(An(k=>({...k,notes:[...k.notes,{id:Date.now().toString(36)+Math.random().toString(36).slice(2,6),text:g,date:Xc()}]})),rn(""),On.type==="note"&&!On.done&&Tt("note"))},vr=()=>{const g=W.trim();!g||!H||(An(k=>({...k,notes:k.notes.map(T=>T.id===H?{...T,text:g}:T)})),en(null))},xo=()=>{const g=new Blob([JSON.stringify(p,null,2)],{type:"application/json"}),k=document.createElement("a");k.href=URL.createObjectURL(g),k.download=`java-study-backup-${new Date().toISOString().slice(0,10)}.json`,k.click(),URL.revokeObjectURL(k.href)},yr=g=>{const k=new FileReader;k.onload=()=>{try{const T=JSON.parse(k.result);typeof T.currentDay=="number"&&Array.isArray(T.doneTasks)?(y({...ra(),...T}),alert("✅ 备份已恢复")):alert("文件格式不对哦")}catch{alert("文件解析失败")}},k.readAsText(g)},Mn=c.tasks.find(g=>g.d===x.currentDay),Ue=c.tasks.find(g=>g.d===x.currentDay+1),Pe=x.doneTasks.includes(x.currentDay),Oe=Mn?Mn.tag.includes("Boss")||Mn.tag.includes("终章"):!1,Rn=F?c.quizzes[F]:null,tt=Math.max(1,Math.floor((Date.now()-new Date(p.startDate).getTime())/864e5)+1),xr=`${String(Math.floor(sn/60)).padStart(2,"0")}:${String(sn%60).padStart(2,"0")}`,Ht=[{type:"quiz",icon:"🎯",desc:"完成 1 次通关测验",xp:5},{type:"perfect",icon:"💯",desc:"拿到 1 次完美通关",xp:8},{type:"ex",icon:"⌨️",desc:"完成 1 道代码练习",xp:5},{type:"note",icon:"🗒️",desc:"记 1 条踩坑笔记",xp:3}],On=(()=>{const g=new Date,k=`${g.getFullYear()}-${g.getMonth()+1}-${g.getDate()}`,T=(g.getFullYear()+g.getMonth()+g.getDate())%Ht.length,L=Ht[T],an=p.dailyChallenge,K=an&&an.date===k&&an.type===L.type?an.done:!1;return{...L,dateKey:k,done:K}})(),Tt=g=>{const k=Ht.find(T=>T.type===g);On.done||(An(T=>({...T,xp:T.xp+k.xp,dailyChallenge:{date:On.dateKey,type:g,done:!0}})),Vn({icon:k.icon,title:"每日挑战完成！",desc:`「${k.desc}」+${k.xp} XP`}))},la=(()=>{const g=p.doneDates||{},k=[],T=new Date,L=new Date(T);L.setDate(L.getDate()-83);const an=(L.getDay()+6)%7;L.setDate(L.getDate()-an);for(let K=0;K<12;K++){const bn=[];for(let Se=0;Se<7;Se++){const de=new Date(L);de.setDate(L.getDate()+K*7+Se);const Dn=de.toDateString();bn.push({date:de,count:g[Dn]||0})}k.push(bn)}return k})(),Sr=(()=>{const g=c.tasks.length-x.doneTasks.length;if(g<=0)return"已毕业 🎓";const k=tt/Math.max(1,x.doneTasks.length),T=Math.round(g*k);return`按当前节奏 · 预计 ${new Date(Date.now()+T*864e5).toLocaleDateString("zh-CN",{month:"long",day:"numeric"})} 毕业（还剩 ${T} 天）`})();return s.jsxs("div",{className:"wrap",children:[s.jsxs("header",{children:[s.jsxs("div",{className:"head-row",children:[s.jsxs("h1",{children:[s.jsx("span",{className:"bean",children:c.icon})," 工作台 ",s.jsxs("span",{className:"sub-tag",children:["多语言勇者修行 · ",c.name,"进行中"]})]}),s.jsx("button",{className:"theme-toggle",onClick:()=>aa(Ge==="dark"?"light":"dark"),title:"切换深浅色主题",children:Ge==="dark"?"🌙 深色":"☀️ 浅色"})]}),s.jsx("div",{className:"hall",children:ls.map(g=>{const k=is(p,g.id),T=g.tasks.length,L=k.doneTasks.length,an=g.id===c.id;return s.jsxs("button",{className:"hall-card"+(an?" active":""),onClick:()=>{if(an)return;const K=is(p,g.id);An(bn=>({...bn,trackId:g.id,currentDay:K.currentDay,doneTasks:K.doneTasks,wrongBook:K.wrongBook,xp:K.xp})),m(localStorage.getItem(nt+".learned."+new Date().toDateString()+".d"+g.id+"."+K.currentDay)==="1"),Vn({icon:g.icon,title:`切换到 ${g.name}`,desc:`进度 ${L}/${T} · ${g.tagline}`})},children:[s.jsx("span",{className:"hall-icon",children:g.icon}),s.jsx("span",{className:"hall-name",children:g.name}),s.jsxs("span",{className:"hall-prog",children:[L,"/",T]}),s.jsx("span",{className:"hall-bar",children:s.jsx("span",{style:{width:(T?Math.round(L/T*100):0)+"%"}})})]},g.id)})}),s.jsxs("div",{className:"level-bar-wrap",children:[s.jsxs("div",{className:"level-info",children:[s.jsxs("span",{className:"level-title",children:["Lv.",xe.lv," ",xe.title]}),s.jsxs("span",{className:"xp-num",children:[x.xp," XP",et?` · 距下一级还差 ${et.need-x.xp}`:" · 已满级！"]})]}),s.jsx("div",{className:"xp-bar",children:s.jsx("span",{style:{width:oa+"%"}})})]})]}),s.jsxs("section",{className:"stats",children:[s.jsxs("div",{className:"stat",children:[s.jsx("div",{className:"num",children:mr}),s.jsx("div",{className:"label",children:"连续打卡 🔥"})]}),s.jsxs("div",{className:"stat",children:[s.jsx("div",{className:"num",children:p.quizCorrect}),s.jsx("div",{className:"label",children:"答对题目 🎯"})]}),s.jsxs("div",{className:"stat",children:[s.jsx("div",{className:"num",children:p.bossCleared.length}),s.jsx("div",{className:"label",children:"Boss 已击败 ⚔️"})]}),s.jsxs("div",{className:"stat",children:[s.jsxs("div",{className:"num",children:[Bt.length,"/",vo.length]}),s.jsx("div",{className:"label",children:"成就徽章 🏆"})]})]}),s.jsxs("div",{className:"challenge-bar"+(On.done?" done":""),children:[s.jsx("span",{className:"ch-icon",children:On.icon}),s.jsxs("div",{className:"ch-body",children:[s.jsx("b",{children:"今日挑战"}),s.jsx("span",{children:On.desc})]}),On.done?s.jsx("span",{className:"ch-done",children:"✅ 已完成"}):s.jsxs("span",{className:"ch-xp",children:["+",On.xp," XP"]})]}),s.jsxs("div",{className:"card heatmap-card",children:[s.jsxs("h2",{children:["🗓️ 修行热力图 ",s.jsx("span",{className:"small",children:Sr})]}),s.jsx("div",{className:"heatmap",children:la.map((g,k)=>s.jsx("div",{className:"hm-col",children:g.map((T,L)=>s.jsx("div",{className:"hm-cell"+(T.count?" lv"+Math.min(4,T.count):""),title:`${T.date.toLocaleDateString("zh-CN")} · 完成 ${T.count} 项`},L))},k))}),s.jsxs("div",{className:"hm-legend",children:["少 ",s.jsx("span",{className:"hm-cell"}),s.jsx("span",{className:"hm-cell lv1"}),s.jsx("span",{className:"hm-cell lv2"}),s.jsx("span",{className:"hm-cell lv3"}),s.jsx("span",{className:"hm-cell lv4"})," 多"]})]}),s.jsxs("div",{className:"grid",children:[s.jsxs("div",{className:"col",children:[s.jsxs("div",{className:"card",children:[s.jsxs("h2",{children:[Oe?"👹 今日 BOSS 战":"📅 今日关卡"," ",s.jsxs("span",{className:"small",children:["Day ",x.currentDay," · ",Xc()]})]}),Mn?s.jsxs("div",{className:"task"+(Pe?" done":""),children:[s.jsx("div",{className:Oe?"boss-avatar":"task-avatar",children:Oe?"👹":"🗡️"}),s.jsxs("div",{children:[s.jsxs("div",{className:"t-title",children:[s.jsx("span",{className:"t-tag"+(Oe?" boss-tag":""),children:Mn.tag}),Mn.t,s.jsxs("span",{className:"xp-tag",children:["+",Mn.xp," XP"]})]}),s.jsx("div",{className:"t-desc",children:Mn.desc})]})]}):s.jsx("div",{className:"empty",children:"🎉 40 天修行圆满！Java 大师，去征服新大陆吧！"}),s.jsxs("div",{className:"btn-row",children:[!M&&Mn&&s.jsx("button",{className:"primary",onClick:()=>{var g;return(g=document.getElementById("lesson-panel"))==null?void 0:g.scrollIntoView({behavior:"smooth"})},children:"📖 开始学习"}),M&&!Pe&&Mn&&s.jsx("button",{className:"primary",onClick:ia,children:Oe?"⚔️ 挑战 BOSS":"🎯 开始今日测验"}),Pe&&s.jsxs("button",{className:"primary",onClick:sa,children:["➡️ 进入 Day ",x.currentDay+1]}),s.jsx("button",{onClick:()=>R(g=>!g),children:"👀 预习明天"})]}),M&&!Pe&&s.jsx("div",{className:"cleared-tip",children:"📖 已学习 · 测验已解锁，去证明你的理解吧！"}),!M&&!Pe&&s.jsx("div",{className:"cleared-tip",style:{color:"var(--muted)"},children:"🔒 先学习今日课程（下方），完成后再挑战测验"}),A&&Ue&&s.jsxs("div",{className:"tomorrow",children:[s.jsxs("div",{className:"t-title",children:["明天 Day ",Ue.d,"：",s.jsx("span",{className:"t-tag",children:Ue.tag}),Ue.t]}),s.jsx("div",{className:"t-desc",children:Ue.desc})]})]}),Mn&&!Pe&&Mn.lesson&&s.jsxs("div",{className:"card lesson-card",id:"lesson-panel",children:[s.jsxs("h2",{children:["📖 今日课程 ",s.jsx("span",{className:"small",children:Oe?"Boss 关也要先修课！":"学完才解锁测验"})]}),s.jsx("div",{className:"lesson-points",children:Mn.lesson.points.map((g,k)=>s.jsxs("div",{className:"lesson-point",children:[s.jsx("span",{className:"lp-num",children:k+1}),s.jsx("span",{children:g})]},k))}),s.jsx("div",{className:"lesson-code-label",children:"代码示例"}),s.jsx("pre",{className:"lesson-code",children:s.jsx("code",{children:Mn.lesson.code})}),s.jsxs("div",{className:"lesson-analogy",children:[s.jsx("span",{className:"la-icon",children:"🧠"}),s.jsxs("div",{children:[s.jsx("b",{children:"前端类比"}),s.jsx("p",{children:Mn.lesson.analogy})]})]}),c.resources[x.currentDay]&&s.jsxs("div",{className:"lesson-res",children:[s.jsx("div",{className:"lesson-code-label",children:"🔗 配套资料（点击跳转详细学习）"}),s.jsx("div",{className:"res-links",children:c.resources[x.currentDay].map(g=>s.jsxs("button",{className:"res-link",onClick:()=>He({url:g.url,title:g.name}),children:[s.jsx("span",{className:"res-type t-"+g.type,children:ss[g.type]}),g.name," ⧉"]},g.url))})]}),c.id==="java"&&nu[x.currentDay]&&s.jsx(Ld,{day:x.currentDay}),s.jsx("div",{className:"btn-row",children:M?s.jsx("span",{className:"learned-flag",children:"✅ 今日课程已完成 · 测验已解锁"}):s.jsx("button",{className:"primary",onClick:fr,children:"✅ 我学完了，解锁测验（+5 XP）"})})]}),Mn&&!Pe&&M&&c.exercises[x.currentDay]&&s.jsxs("div",{className:"card ex-card",id:"ex-panel",children:[s.jsxs("h2",{children:["⌨️ 代码练习 ",s.jsx("span",{className:"small",children:X[x.currentDay]?"已完成 ✓":"手敲完成 +10 XP"})]}),s.jsx("div",{className:"ex-prompt",children:c.exercises[x.currentDay].prompt}),s.jsx(Ad,{day:x.currentDay,value:S,onChange:$}),s.jsxs("div",{className:"btn-row",children:[s.jsx("button",{className:"primary",onClick:()=>{localStorage.setItem("javaStudyWorkbench.v3.ex."+c.id+"."+x.currentDay,S),window.open(c.runnerUrl,"_blank","noopener")&&Vn({icon:"🚀",title:"已打开"+c.runner,desc:"粘贴你的代码进去运行"})},children:"▶ 复制去在线运行（新窗口）"}),s.jsx("button",{onClick:()=>{var g;(g=navigator.clipboard)==null||g.writeText(S),Vn({icon:"📋",title:"已复制代码",desc:"去编译器 Ctrl+V"})},children:"📋 复制代码"}),s.jsx("button",{onClick:()=>tn(g=>!g),children:Q?"🙈 收起答案":"💡 看参考答案"}),!X[x.currentDay]&&s.jsx("button",{className:"primary",onClick:zt,children:"✅ 我写完并验证过了（+10 XP）"})]}),Q&&s.jsxs("div",{className:"ex-answer",children:[s.jsx("div",{className:"lesson-code-label",children:"参考答案（先自己写再看！)"}),s.jsx("pre",{className:"lesson-code",children:s.jsx("code",{children:c.exercises[x.currentDay].answer})}),s.jsx("div",{className:"lesson-code-label",children:"预期输出"}),s.jsx("pre",{className:"lesson-code expected",children:s.jsx("code",{children:c.exercises[x.currentDay].expected})})]}),s.jsxs("div",{className:"ex-tip",children:['💡 站内编辑器负责"手感"：行号、Tab 缩进、自动保存。真机运行点上面的按钮跳 ',c.runner,"，粘贴运行对照预期输出。"]})]}),F&&Rn&&!Sn&&s.jsxs("div",{className:"card quiz-card",children:[s.jsxs("h2",{children:["🎯 通关测验 ",s.jsxs("span",{className:"small",children:["Day ",F," · 第 ",hn+1,"/",Rn.length," 题"]})]}),s.jsx("div",{className:"quiz-q",children:Rn[hn].q}),s.jsx("div",{className:"quiz-opts",children:Rn[hn].options.map((g,k)=>{const T=kn!==null&&k===Rn[hn].answer,L=kn===k&&k!==Rn[hn].answer;return s.jsxs("button",{className:"quiz-opt"+(T?" right":"")+(L?" wrong":""),onClick:()=>kt(k),children:[String.fromCharCode(65+k),". ",g]},k)})}),kn!==null&&s.jsxs("div",{className:"explain"+(kn===Rn[hn].answer?"":" explain-wrong"),children:[s.jsx("b",{children:kn===Rn[hn].answer?"✅ 答对了！":"❌ 答错了，正确答案："+String.fromCharCode(65+Rn[hn].answer)}),s.jsx("p",{children:Rn[hn].explain}),s.jsx("button",{className:"primary",onClick:jt,children:hn+1<Rn.length?"下一题 ➡️":"查看战果 🏁"})]})]}),Sn&&s.jsxs("div",{className:"card quiz-card result-card",children:[s.jsx("div",{className:"result-icon",children:Sn.correct===Sn.total?"🏆":Sn.correct>=Sn.total/2?"🎉":"💪"}),s.jsx("h2",{style:{justifyContent:"center"},children:"战果揭晓"}),s.jsxs("div",{className:"result-line",children:["答对 ",s.jsx("b",{className:"coffee",children:Sn.correct})," / ",Sn.total," 题"]}),s.jsxs("div",{className:"result-line",children:["获得 ",s.jsxs("b",{className:"coffee",children:["+",Sn.xpGained," XP"]}),Sn.correct===Sn.total&&"（含完美通关奖励 ⭐）"]}),s.jsxs("div",{className:"result-line",children:["关卡 Day ",F," 已通关 ",(br=c.tasks.find(g=>g.d===F))!=null&&br.tag.includes("Boss")||F===c.tasks.length?"· 👹 BOSS 已被击败！":""]}),s.jsx("div",{className:"btn-row center",children:s.jsxs("button",{className:"primary",onClick:sa,children:["➡️ 进入 Day ",x.currentDay+1]})})]}),s.jsxs("div",{className:"card",children:[s.jsxs("h2",{children:["📓 踩坑笔记 ",s.jsxs("span",{className:"small",children:[p.notes.length," 条"]})]}),p.notes.length>3&&s.jsx("div",{className:"note-input note-search-row",children:s.jsx("input",{value:Fe,onChange:g=>Jt(g.target.value),className:"lib-search",placeholder:"🔍 搜笔记…（输入关键词，如 equals、Stream）"})}),s.jsxs("div",{className:"note-input",children:[s.jsx("input",{value:q,onChange:g=>rn(g.target.value),onKeyDown:g=>g.key==="Enter"&&hr(),placeholder:"记下今天踩的坑，比如：== 和 equals 的区别…",maxLength:120}),s.jsx("button",{className:"primary",onClick:hr,children:"记一笔"})]}),p.notes.length===0?s.jsx("div",{className:"empty",children:"还没有笔记，踩到坑就记一笔 📝（10 条解锁成就）"}):[...p.notes].reverse().filter(g=>!Fe||g.text.toLowerCase().includes(Fe.toLowerCase())).map(g=>s.jsx("div",{className:"note",children:H===g.id?s.jsxs(s.Fragment,{children:[s.jsx("input",{className:"note-edit",value:W,onChange:k=>nn(k.target.value),onKeyDown:k=>k.key==="Enter"&&vr(),autoFocus:!0}),s.jsx("button",{className:"mini",onClick:vr,children:"存"})]}):s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"note-text",children:g.text}),s.jsx("span",{className:"date",children:g.date}),s.jsx("span",{className:"del",onClick:()=>{en(g.id),nn(g.text)},children:"✎"}),s.jsx("span",{className:"del",onClick:()=>An(k=>({...k,notes:k.notes.filter(T=>T.id!==g.id)})),children:"✕"})]})},g.id)),Fe&&p.notes.filter(g=>g.text.toLowerCase().includes(Fe.toLowerCase())).length===0&&s.jsxs("div",{className:"empty",children:["没有匹配「",Fe,"」的笔记 🔍"]})]})]}),s.jsxs("div",{className:"col",children:[s.jsxs("div",{className:"card",children:[s.jsx("h2",{children:"🗺️ 修行地图"}),(c.id==="java"?rd:Jd(c)).map((g,k)=>{const T=g.to-g.from+1,L=c.tasks.filter(K=>K.d>=g.from&&K.d<=g.to&&x.doneTasks.includes(K.d)).length,an=Math.round(L/T*100);return s.jsxs("details",{className:"phase",open:k===0,children:[s.jsxs("summary",{children:[s.jsx("span",{className:"phase-name",children:g.name}),s.jsx("span",{className:"bar",children:s.jsx("span",{style:{width:an+"%"}})}),s.jsxs("span",{className:"pct",children:[L,"/",T]})]}),s.jsx("div",{className:"phase-body",children:c.tasks.filter(K=>K.d>=g.from&&K.d<=g.to).map(K=>{const bn=x.doneTasks.includes(K.d),Se=K.d===x.currentDay,de=bn||K.d<x.currentDay;return s.jsxs("div",{className:"map-node"+(bn?" cleared":"")+(Se?" current":"")+(de?" reviewable":""),onClick:()=>de&&vn(K.d),title:de?"点击回顾这一关的课程、练习和测验":"",children:[s.jsx("span",{className:"node-icon",children:bn?"✅":K.tag.includes("Boss")||K.tag.includes("终章")?"👹":"🗡️"}),s.jsxs("span",{className:"node-text",children:["Day ",K.d," ",K.t]}),de&&s.jsx("span",{className:"node-review",children:"📖"})]},K.d)})})]},k)})]}),s.jsxs("div",{className:"card",children:[s.jsxs("h2",{children:["🏆 成就徽章 ",s.jsxs("span",{className:"small",children:[Bt.length,"/",vo.length," · 进度实时可见"]})]}),s.jsx("div",{className:"badges-grid",children:vo.map(g=>{const k=Bt.some(an=>an.id===g.id),T=g.progress?g.progress(gr):null,L=T&&T[1]>0?Math.round(T[0]/T[1]*100):0;return s.jsxs("div",{className:"badge"+(k?" got":""),title:g.desc,children:[s.jsx("div",{className:"badge-icon",children:k?g.icon:"🔒"}),s.jsx("div",{className:"badge-name",children:g.name}),s.jsx("div",{className:"badge-desc",children:g.desc}),!k&&T&&s.jsxs("div",{className:"badge-prog",children:[s.jsx("div",{className:"badge-prog-bar",children:s.jsx("span",{style:{width:L+"%"}})}),s.jsxs("div",{className:"badge-prog-num",children:[T[0],"/",T[1]]})]})]},g.id)})})]}),x.wrongBook.length>0&&s.jsxs("div",{className:"card",children:[s.jsxs("h2",{children:["📕 错题本 ",s.jsxs("span",{className:"small",children:[x.wrongBook.length," 题 · 点题重练"]})]}),[...x.wrongBook].reverse().slice(0,8).map(([g,k],T)=>{var an;const L=(an=c.quizzes[g])==null?void 0:an[k];return L?s.jsxs("div",{className:"note wrong-note",onClick:()=>mn({day:g,qi:k}),title:"点击重练此题",children:[s.jsxs("span",{className:"note-text",children:["Day ",g," · ",L.q]}),s.jsx("span",{className:"wn-go",children:"重练 ↻"})]},T):null}),s.jsx("div",{className:"empty",children:"温故知新：答错的题都是你升级的路标 🧭"})]}),s.jsxs("div",{className:"card",children:[s.jsxs("h2",{children:["📚 资料库 ",s.jsx("span",{className:"small",children:"官方文档 · 优质教程"})]}),s.jsx("div",{className:"note-input",children:s.jsx("input",{className:"lib-search",value:P,onChange:g=>z(g.target.value),placeholder:"搜索资料名，如：JWT、若依、MyBatis…"})}),s.jsx("div",{className:"lib-list",children:(()=>{const g=P.trim().toLowerCase(),k=Object.entries(c.resources).map(([L,an])=>[Number(L),an]),T=g?k.filter(([,L])=>L.some(an=>an.name.toLowerCase().includes(g))):k.filter(([L])=>L<=x.currentDay+1);return T.length===0?s.jsx("div",{className:"empty",children:"没有匹配的资料，换个关键词试试"}):T.map(([L,an])=>{var K;return s.jsxs("details",{className:"lib-day",open:!!g||L===x.currentDay,children:[s.jsxs("summary",{children:["Day ",L," ",x.doneTasks.includes(L)?"✅":L===x.currentDay?"📍":"🔒",s.jsx("span",{className:"lib-day-title",children:(K=c.tasks.find(bn=>bn.d===L))==null?void 0:K.t.slice(0,16)})]}),s.jsx("div",{className:"res-links",style:{padding:"4px 10px 10px"},children:an.map(bn=>s.jsxs("button",{className:"res-link",onClick:()=>He({url:bn.url,title:bn.name}),children:[s.jsx("span",{className:"res-type t-"+bn.type,children:ss[bn.type]}),bn.name," ⧉"]},bn.url))})]},L)})})()}),s.jsx("div",{className:"ex-tip",children:"🔒 未解锁的关卡资料：搜索关键词可强制查看，或随进度自然解锁"})]}),s.jsxs("div",{className:"card",children:[s.jsx("h2",{children:"📊 学习数据"}),s.jsxs("div",{className:"stat-grid",children:[s.jsxs("div",{className:"sg-item",children:[s.jsx("b",{children:x.doneTasks.length}),s.jsx("span",{children:"已通关"})]}),s.jsxs("div",{className:"sg-item",children:[s.jsx("b",{children:Object.keys(X).length}),s.jsx("span",{children:"练过代码"})]}),s.jsxs("div",{className:"sg-item",children:[s.jsxs("b",{children:[p.quizCorrect,"/",p.quizCorrect+p.quizWrong]}),s.jsx("span",{children:"答题正确率"})]}),s.jsxs("div",{className:"sg-item",children:[s.jsx("b",{children:p.perfectQuizzes}),s.jsx("span",{children:"完美通关"})]})]}),p.quizCorrect+p.quizWrong>0&&s.jsx("div",{className:"acc-bar",children:s.jsx("span",{style:{width:Math.round(p.quizCorrect/(p.quizCorrect+p.quizWrong)*100)+"%"}})})]}),s.jsxs("div",{className:"card",children:[s.jsxs("h2",{children:["⏱️ 专注番茄钟 ",s.jsxs("span",{className:"small",children:["已完成 ",p.pomodoros||0," 个 🍅"]})]}),s.jsx("div",{className:"timer-num",children:xr}),s.jsx("div",{className:"pomo-presets",children:[15,25,45].map(g=>s.jsxs("button",{className:"pomo-btn"+(wt===g?" active":""),onClick:()=>{pr(g),un(g*60),ln(!1)},children:[g," 分钟"]},g))}),s.jsxs("div",{className:"btn-row center",children:[s.jsx("button",{className:"primary",onClick:()=>ln(g=>!g),children:gn?"⏸ 暂停":"▶ 开始"}),s.jsx("button",{onClick:()=>{ln(!1),un(wt*60)},children:"↺ 重置"})]}),s.jsx("div",{className:"ex-tip",children:"完成一个番茄钟 +3 XP，倒计时时标签页标题也会实时显示 ⏳"})]}),s.jsxs("div",{className:"card",children:[s.jsx("h2",{children:"💾 数据备份"}),s.jsxs("div",{className:"btn-row",children:[s.jsx("button",{onClick:xo,children:"导出备份"}),s.jsxs("label",{className:"file-btn",children:["导入备份",s.jsx("input",{type:"file",accept:".json",style:{display:"none"},onChange:g=>{var k;return((k=g.target.files)==null?void 0:k[0])&&yr(g.target.files[0])}})]})]}),s.jsx("div",{className:"ex-tip",children:"进度存在本机浏览器 · 换电脑前记得导出"})]})]})]}),Fn!==null&&s.jsx(qd,{day:Fn,track:c,onClose:()=>vn(null),openReader:He}),Z&&(()=>{var k;const g=(k=c.quizzes[Z.day])==null?void 0:k[Z.qi];return g?s.jsx(zd,{quiz:g,day:Z.day,qi:Z.qi,onClose:()=>mn(null),onPass:()=>An(T=>({...T,xp:T.xp+5,wrongBook:T.wrongBook.filter(([L,an])=>!(L===Z.day&&an===Z.qi))}))}):null})(),Gn&&s.jsx(_d,{url:Gn.url,title:Gn.title,onClose:()=>He(null)}),ye&&s.jsx("div",{className:"modal-mask",onClick:()=>Ee(null),children:s.jsxs("div",{className:"modal",onClick:g=>g.stopPropagation(),children:[s.jsx("div",{className:"levelup-icon",children:"🎊"}),s.jsx("h2",{children:"等级提升！"}),s.jsx("div",{className:"levelup-title",children:ye}),s.jsx("p",{className:"levelup-desc",children:"修为精进，离 Java 大师又近一步！"}),s.jsx("button",{className:"primary",onClick:()=>Ee(null),children:"继续修行 ⚔️"})]})}),s.jsx("div",{className:"toasts",children:ue.map((g,k)=>s.jsxs("div",{className:"toast",children:[s.jsx("span",{className:"toast-icon",children:g.icon}),s.jsxs("div",{children:[s.jsx("b",{children:g.title}),s.jsx("div",{className:"toast-desc",children:g.desc})]})]},k))}),s.jsx("footer",{children:"40 天任务 × 80+ 通关测验 × 15 枚成就徽章 · 完成测验才算通关，进度自动存"})]})}ed.createRoot(document.getElementById("root")).render(s.jsx($p.StrictMode,{children:s.jsx(Hd,{})}));
