/*! For license information please see main.3ae3f9b2.js.LICENSE.txt */
(()=>{var e={470:(e,t,n)=>{"use strict";var r=n(390),a=n(124);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,l={};function u(e,t){s(e,t),s(e+"Capture",t)}function s(e,t){for(l[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function m(e,t,n,r,a,o,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}function y(e,t,n,r){var a=g.hasOwnProperty(t)?g[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!d.call(h,e)||!d.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(v,b);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(v,b);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(v,b);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var w=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),x=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),P=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),j=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var R=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var L=Symbol.iterator;function I(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=L&&e[L]||e["@@iterator"])?e:null}var M,D=Object.assign;function A(e){if(void 0===M)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);M=t&&t[1]||""}return"\n"+M+e}var F=!1;function U(e,t){if(!e||F)return"";F=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var r=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){r=s}e.call(t.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&"string"===typeof s.stack){for(var a=s.stack.split("\n"),o=r.stack.split("\n"),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(1!==i||1!==l)do{if(i--,0>--l||a[i]!==o[l]){var u="\n"+a[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=i&&0<=l);break}}}finally{F=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?A(e):""}function W(e){switch(e.tag){case 5:return A(e.type);case 16:return A("Lazy");case 13:return A("Suspense");case 19:return A("SuspenseList");case 0:case 2:case 15:return e=U(e.type,!1);case 11:return e=U(e.type.render,!1);case 1:return e=U(e.type,!0);default:return""}}function H(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case x:return"Portal";case E:return"Profiler";case _:return"StrictMode";case N:return"Suspense";case T:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case P:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case z:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case O:return null!==(t=e.displayName||null)?t:H(e.type)||"Memo";case j:t=e._payload,e=e._init;try{return H(e(t))}catch(n){}}return null}function B(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return H(t);case 8:return t===_?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function V(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function $(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Q(e){e._valueTracker||(e._valueTracker=function(e){var t=$(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Y(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function q(e,t){var n=t.checked;return D({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function X(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=V(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function G(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function J(e,t){G(e,t);var n=V(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,V(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Y(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+V(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return D({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:V(n)}}function oe(e,t){var n=V(t.value),r=V(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ie(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ue(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var se,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((se=se||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=se.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ce(e,t)}))}:ce);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(pe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var ve=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function be(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function ye(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var we=null;function ke(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var xe=null,Se=null,_e=null;function Ee(e){if(e=ya(e)){if("function"!==typeof xe)throw Error(o(280));var t=e.stateNode;t&&(t=ka(t),xe(e.stateNode,e.type,t))}}function Ce(e){Se?_e?_e.push(e):_e=[e]:Se=e}function Pe(){if(Se){var e=Se,t=_e;if(_e=Se=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function ze(e,t){return e(t)}function Ne(){}var Te=!1;function Oe(e,t,n){if(Te)return e(t,n);Te=!0;try{return ze(e,t,n)}finally{Te=!1,(null!==Se||null!==_e)&&(Ne(),Pe())}}function je(e,t){var n=e.stateNode;if(null===n)return null;var r=ka(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Re=!1;if(c)try{var Le={};Object.defineProperty(Le,"passive",{get:function(){Re=!0}}),window.addEventListener("test",Le,Le),window.removeEventListener("test",Le,Le)}catch(ce){Re=!1}function Ie(e,t,n,r,a,o,i,l,u){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(c){this.onError(c)}}var Me=!1,De=null,Ae=!1,Fe=null,Ue={onError:function(e){Me=!0,De=e}};function We(e,t,n,r,a,o,i,l,u){Me=!1,De=null,Ie.apply(Ue,arguments)}function He(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Be(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Ve(e){if(He(e)!==e)throw Error(o(188))}function $e(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=He(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var i=a.alternate;if(null===i){if(null!==(r=a.return)){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return Ve(a),e;if(i===r)return Ve(a),t;i=i.sibling}throw Error(o(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,u=a.child;u;){if(u===n){l=!0,n=a,r=i;break}if(u===r){l=!0,r=a,n=i;break}u=u.sibling}if(!l){for(u=i.child;u;){if(u===n){l=!0,n=i,r=a;break}if(u===r){l=!0,r=i,n=a;break}u=u.sibling}if(!l)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e))?Qe(e):null}function Qe(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Qe(e);if(null!==t)return t;e=e.sibling}return null}var Ke=a.unstable_scheduleCallback,Ye=a.unstable_cancelCallback,qe=a.unstable_shouldYield,Xe=a.unstable_requestPaint,Ge=a.unstable_now,Je=a.unstable_getCurrentPriorityLevel,Ze=a.unstable_ImmediatePriority,et=a.unstable_UserBlockingPriority,tt=a.unstable_NormalPriority,nt=a.unstable_LowPriority,rt=a.unstable_IdlePriority,at=null,ot=null;var it=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/ut|0)|0},lt=Math.log,ut=Math.LN2;var st=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,i=268435455&n;if(0!==i){var l=i&~a;0!==l?r=dt(l):0!==(o&=i)&&(r=dt(o))}else 0!==(i=n&~a)?r=dt(i):0!==o&&(r=dt(o));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(o=t&-t)||16===a&&0!==(4194240&o)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-it(t)),r|=e[n],t&=~a;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=st;return 0===(4194240&(st<<=1))&&(st=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-it(t)]=n}function bt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var yt=0;function wt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var kt,xt,St,_t,Et,Ct=!1,Pt=[],zt=null,Nt=null,Tt=null,Ot=new Map,jt=new Map,Rt=[],Lt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function It(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Nt=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":Ot.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jt.delete(t.pointerId)}}function Mt(e,t,n,r,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},null!==t&&(null!==(t=ya(t))&&xt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Dt(e){var t=ba(e.target);if(null!==t){var n=He(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Be(n)))return e.blockedOn=t,void Et(e.priority,(function(){St(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function At(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ya(n))&&xt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);we=r,n.target.dispatchEvent(r),we=null,t.shift()}return!0}function Ft(e,t,n){At(e)&&n.delete(t)}function Ut(){Ct=!1,null!==zt&&At(zt)&&(zt=null),null!==Nt&&At(Nt)&&(Nt=null),null!==Tt&&At(Tt)&&(Tt=null),Ot.forEach(Ft),jt.forEach(Ft)}function Wt(e,t){e.blockedOn===t&&(e.blockedOn=null,Ct||(Ct=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Ut)))}function Ht(e){function t(t){return Wt(t,e)}if(0<Pt.length){Wt(Pt[0],e);for(var n=1;n<Pt.length;n++){var r=Pt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==zt&&Wt(zt,e),null!==Nt&&Wt(Nt,e),null!==Tt&&Wt(Tt,e),Ot.forEach(t),jt.forEach(t),n=0;n<Rt.length;n++)(r=Rt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&null===(n=Rt[0]).blockedOn;)Dt(n),null===n.blockedOn&&Rt.shift()}var Bt=w.ReactCurrentBatchConfig,Vt=!0;function $t(e,t,n,r){var a=yt,o=Bt.transition;Bt.transition=null;try{yt=1,Kt(e,t,n,r)}finally{yt=a,Bt.transition=o}}function Qt(e,t,n,r){var a=yt,o=Bt.transition;Bt.transition=null;try{yt=4,Kt(e,t,n,r)}finally{yt=a,Bt.transition=o}}function Kt(e,t,n,r){if(Vt){var a=qt(e,t,n,r);if(null===a)Vr(e,t,r,Yt,n),It(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return zt=Mt(zt,e,t,n,r,a),!0;case"dragenter":return Nt=Mt(Nt,e,t,n,r,a),!0;case"mouseover":return Tt=Mt(Tt,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return Ot.set(o,Mt(Ot.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,jt.set(o,Mt(jt.get(o)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(It(e,r),4&t&&-1<Lt.indexOf(e)){for(;null!==a;){var o=ya(a);if(null!==o&&kt(o),null===(o=qt(e,t,n,r))&&Vr(e,t,r,Yt,n),o===a)break;a=o}null!==a&&r.stopPropagation()}else Vr(e,t,r,null,n)}}var Yt=null;function qt(e,t,n,r){if(Yt=null,null!==(e=ba(e=ke(r))))if(null===(t=He(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Be(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yt=e,null}function Xt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Gt=null,Jt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Jt,r=n.length,a="value"in Gt?Gt.value:Gt.textContent,o=a.length;for(e=0;e<r&&n[e]===a[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===a[o-t];t++);return Zt=a.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,a,o){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(a):a[i]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,ln,un,sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=an(sn),dn=D({},sn,{view:0,detail:0}),fn=an(dn),pn=D({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:En,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==un&&(un&&"mousemove"===e.type?(on=e.screenX-un.screenX,ln=e.screenY-un.screenY):ln=on=0,un=e),on)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),hn=an(pn),mn=an(D({},pn,{dataTransfer:0})),gn=an(D({},dn,{relatedTarget:0})),vn=an(D({},sn,{animationName:0,elapsedTime:0,pseudoElement:0})),bn=D({},sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yn=an(bn),wn=an(D({},sn,{data:0})),kn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _n(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function En(){return _n}var Cn=D({},dn,{key:function(e){if(e.key){var t=kn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?xn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:En,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Pn=an(Cn),zn=an(D({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Nn=an(D({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:En})),Tn=an(D({},sn,{propertyName:0,elapsedTime:0,pseudoElement:0})),On=D({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jn=an(On),Rn=[9,13,27,32],Ln=c&&"CompositionEvent"in window,In=null;c&&"documentMode"in document&&(In=document.documentMode);var Mn=c&&"TextEvent"in window&&!In,Dn=c&&(!Ln||In&&8<In&&11>=In),An=String.fromCharCode(32),Fn=!1;function Un(e,t){switch(e){case"keyup":return-1!==Rn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Hn=!1;var Bn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Bn[e.type]:"textarea"===t}function $n(e,t,n,r){Ce(r),0<(t=Qr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qn=null,Kn=null;function Yn(e){Ar(e,0)}function qn(e){if(K(wa(e)))return e}function Xn(e,t){if("change"===e)return t}var Gn=!1;if(c){var Jn;if(c){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Jn=Zn}else Jn=!1;Gn=Jn&&(!document.documentMode||9<document.documentMode)}function tr(){Qn&&(Qn.detachEvent("onpropertychange",nr),Kn=Qn=null)}function nr(e){if("value"===e.propertyName&&qn(Kn)){var t=[];$n(t,Kn,e,ke(e)),Oe(Yn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Kn=n,(Qn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ar(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return qn(Kn)}function or(e,t){if("click"===e)return qn(t)}function ir(e,t){if("input"===e||"change"===e)return qn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function ur(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!d.call(t,a)||!lr(e[a],t[a]))return!1}return!0}function sr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=sr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=sr(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=Y();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Y((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(r.start,a);r=void 0===r.end?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=cr(n,o);var i=cr(n,r);a&&i&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=c&&"documentMode"in document&&11>=document.documentMode,gr=null,vr=null,br=null,yr=!1;function wr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;yr||null==gr||gr!==Y(r)||("selectionStart"in(r=gr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},br&&ur(br,r)||(br=r,0<(r=Qr(vr,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xr={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},Sr={},_r={};function Er(e){if(Sr[e])return Sr[e];if(!xr[e])return e;var t,n=xr[e];for(t in n)if(n.hasOwnProperty(t)&&t in _r)return Sr[e]=n[t];return e}c&&(_r=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);var Cr=Er("animationend"),Pr=Er("animationiteration"),zr=Er("animationstart"),Nr=Er("transitionend"),Tr=new Map,Or="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(e,t){Tr.set(e,t),u(t,[e])}for(var Rr=0;Rr<Or.length;Rr++){var Lr=Or[Rr];jr(Lr.toLowerCase(),"on"+(Lr[0].toUpperCase()+Lr.slice(1)))}jr(Cr,"onAnimationEnd"),jr(Pr,"onAnimationIteration"),jr(zr,"onAnimationStart"),jr("dblclick","onDoubleClick"),jr("focusin","onFocus"),jr("focusout","onBlur"),jr(Nr,"onTransitionEnd"),s("onMouseEnter",["mouseout","mouseover"]),s("onMouseLeave",["mouseout","mouseover"]),s("onPointerEnter",["pointerout","pointerover"]),s("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));function Dr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,i,l,u,s){if(We.apply(this,arguments),Me){if(!Me)throw Error(o(198));var c=De;Me=!1,De=null,Ae||(Ae=!0,Fe=c)}}(r,t,void 0,e),e.currentTarget=null}function Ar(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],u=l.instance,s=l.currentTarget;if(l=l.listener,u!==o&&a.isPropagationStopped())break e;Dr(a,l,s),o=u}else for(i=0;i<r.length;i++){if(u=(l=r[i]).instance,s=l.currentTarget,l=l.listener,u!==o&&a.isPropagationStopped())break e;Dr(a,l,s),o=u}}}if(Ae)throw e=Fe,Ae=!1,Fe=null,e}function Fr(e,t){var n=t[ma];void 0===n&&(n=t[ma]=new Set);var r=e+"__bubble";n.has(r)||(Br(t,e,2,!1),n.add(r))}function Ur(e,t,n){var r=0;t&&(r|=4),Br(n,e,r,t)}var Wr="_reactListening"+Math.random().toString(36).slice(2);function Hr(e){if(!e[Wr]){e[Wr]=!0,i.forEach((function(t){"selectionchange"!==t&&(Mr.has(t)||Ur(t,!1,e),Ur(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Wr]||(t[Wr]=!0,Ur("selectionchange",!1,t))}}function Br(e,t,n,r){switch(Xt(t)){case 1:var a=$t;break;case 4:a=Qt;break;default:a=Kt}n=a.bind(null,t,n,e),a=void 0,!Re||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Vr(e,t,n,r,a){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===i)for(i=r.return;null!==i;){var u=i.tag;if((3===u||4===u)&&((u=i.stateNode.containerInfo)===a||8===u.nodeType&&u.parentNode===a))return;i=i.return}for(;null!==l;){if(null===(i=ba(l)))return;if(5===(u=i.tag)||6===u){r=o=i;continue e}l=l.parentNode}}r=r.return}Oe((function(){var r=o,a=ke(n),i=[];e:{var l=Tr.get(e);if(void 0!==l){var u=cn,s=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":u=Pn;break;case"focusin":s="focus",u=gn;break;case"focusout":s="blur",u=gn;break;case"beforeblur":case"afterblur":u=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":u=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":u=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":u=Nn;break;case Cr:case Pr:case zr:u=vn;break;case Nr:u=Tn;break;case"scroll":u=fn;break;case"wheel":u=jn;break;case"copy":case"cut":case"paste":u=yn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":u=zn}var c=0!==(4&t),d=!c&&"scroll"===e,f=c?null!==l?l+"Capture":null:l;c=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&(null!=(m=je(h,f))&&c.push($r(h,m,p)))),d)break;h=h.return}0<c.length&&(l=new u(l,s,null,n,a),i.push({event:l,listeners:c}))}}if(0===(7&t)){if(u="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===we||!(s=n.relatedTarget||n.fromElement)||!ba(s)&&!s[ha])&&(u||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,u?(u=r,null!==(s=(s=n.relatedTarget||n.toElement)?ba(s):null)&&(s!==(d=He(s))||5!==s.tag&&6!==s.tag)&&(s=null)):(u=null,s=r),u!==s)){if(c=hn,m="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=zn,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==u?l:wa(u),p=null==s?l:wa(s),(l=new c(m,h+"leave",u,n,a)).target=d,l.relatedTarget=p,m=null,ba(a)===r&&((c=new c(f,h+"enter",s,n,a)).target=p,c.relatedTarget=d,m=c),d=m,u&&s)e:{for(f=s,h=0,p=c=u;p;p=Kr(p))h++;for(p=0,m=f;m;m=Kr(m))p++;for(;0<h-p;)c=Kr(c),h--;for(;0<p-h;)f=Kr(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break e;c=Kr(c),f=Kr(f)}c=null}else c=null;null!==u&&Yr(i,l,u,c,!1),null!==s&&null!==d&&Yr(i,d,s,c,!0)}if("select"===(u=(l=r?wa(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===u&&"file"===l.type)var g=Xn;else if(Vn(l))if(Gn)g=ir;else{g=ar;var v=rr}else(u=l.nodeName)&&"input"===u.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=or);switch(g&&(g=g(e,r))?$n(i,g,n,a):(v&&v(e,l,r),"focusout"===e&&(v=l._wrapperState)&&v.controlled&&"number"===l.type&&ee(l,"number",l.value)),v=r?wa(r):window,e){case"focusin":(Vn(v)||"true"===v.contentEditable)&&(gr=v,vr=r,br=null);break;case"focusout":br=vr=gr=null;break;case"mousedown":yr=!0;break;case"contextmenu":case"mouseup":case"dragend":yr=!1,wr(i,n,a);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":wr(i,n,a)}var b;if(Ln)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Hn?Un(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(Dn&&"ko"!==n.locale&&(Hn||"onCompositionStart"!==y?"onCompositionEnd"===y&&Hn&&(b=en()):(Jt="value"in(Gt=a)?Gt.value:Gt.textContent,Hn=!0)),0<(v=Qr(r,y)).length&&(y=new wn(y,e,null,n,a),i.push({event:y,listeners:v}),b?y.data=b:null!==(b=Wn(n))&&(y.data=b))),(b=Mn?function(e,t){switch(e){case"compositionend":return Wn(t);case"keypress":return 32!==t.which?null:(Fn=!0,An);case"textInput":return(e=t.data)===An&&Fn?null:e;default:return null}}(e,n):function(e,t){if(Hn)return"compositionend"===e||!Ln&&Un(e,t)?(e=en(),Zt=Jt=Gt=null,Hn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Qr(r,"onBeforeInput")).length&&(a=new wn("onBeforeInput","beforeinput",null,n,a),i.push({event:a,listeners:r}),a.data=b))}Ar(i,t)}))}function $r(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qr(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,o=a.stateNode;5===a.tag&&null!==o&&(a=o,null!=(o=je(e,n))&&r.unshift($r(e,o,a)),null!=(o=je(e,t))&&r.push($r(e,o,a))),e=e.return}return r}function Kr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Yr(e,t,n,r,a){for(var o=t._reactName,i=[];null!==n&&n!==r;){var l=n,u=l.alternate,s=l.stateNode;if(null!==u&&u===r)break;5===l.tag&&null!==s&&(l=s,a?null!=(u=je(n,o))&&i.unshift($r(n,u,l)):a||null!=(u=je(n,o))&&i.push($r(n,u,l))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var qr=/\r\n?/g,Xr=/\u0000|\uFFFD/g;function Gr(e){return("string"===typeof e?e:""+e).replace(qr,"\n").replace(Xr,"")}function Jr(e,t,n){if(t=Gr(t),Gr(e)!==t&&n)throw Error(o(425))}function Zr(){}var ea=null,ta=null;function na(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ra="function"===typeof setTimeout?setTimeout:void 0,aa="function"===typeof clearTimeout?clearTimeout:void 0,oa="function"===typeof Promise?Promise:void 0,ia="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof oa?function(e){return oa.resolve(null).then(e).catch(la)}:ra;function la(e){setTimeout((function(){throw e}))}function ua(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void Ht(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);Ht(t)}function sa(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ca(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var da=Math.random().toString(36).slice(2),fa="__reactFiber$"+da,pa="__reactProps$"+da,ha="__reactContainer$"+da,ma="__reactEvents$"+da,ga="__reactListeners$"+da,va="__reactHandles$"+da;function ba(e){var t=e[fa];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ha]||n[fa]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ca(e);null!==e;){if(n=e[fa])return n;e=ca(e)}return t}n=(e=n).parentNode}return null}function ya(e){return!(e=e[fa]||e[ha])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function wa(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function ka(e){return e[pa]||null}var xa=[],Sa=-1;function _a(e){return{current:e}}function Ea(e){0>Sa||(e.current=xa[Sa],xa[Sa]=null,Sa--)}function Ca(e,t){Sa++,xa[Sa]=e.current,e.current=t}var Pa={},za=_a(Pa),Na=_a(!1),Ta=Pa;function Oa(e,t){var n=e.type.contextTypes;if(!n)return Pa;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,o={};for(a in n)o[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ja(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Ra(){Ea(Na),Ea(za)}function La(e,t,n){if(za.current!==Pa)throw Error(o(168));Ca(za,t),Ca(Na,n)}function Ia(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(o(108,B(e)||"Unknown",a));return D({},n,r)}function Ma(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pa,Ta=za.current,Ca(za,e),Ca(Na,Na.current),!0}function Da(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Ia(e,t,Ta),r.__reactInternalMemoizedMergedChildContext=e,Ea(Na),Ea(za),Ca(za,e)):Ea(Na),Ca(Na,n)}var Aa=null,Fa=!1,Ua=!1;function Wa(e){null===Aa?Aa=[e]:Aa.push(e)}function Ha(){if(!Ua&&null!==Aa){Ua=!0;var e=0,t=yt;try{var n=Aa;for(yt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Aa=null,Fa=!1}catch(a){throw null!==Aa&&(Aa=Aa.slice(e+1)),Ke(Ze,Ha),a}finally{yt=t,Ua=!1}}return null}var Ba=[],Va=0,$a=null,Qa=0,Ka=[],Ya=0,qa=null,Xa=1,Ga="";function Ja(e,t){Ba[Va++]=Qa,Ba[Va++]=$a,$a=e,Qa=t}function Za(e,t,n){Ka[Ya++]=Xa,Ka[Ya++]=Ga,Ka[Ya++]=qa,qa=e;var r=Xa;e=Ga;var a=32-it(r)-1;r&=~(1<<a),n+=1;var o=32-it(t)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,Xa=1<<32-it(t)+a|n<<a|r,Ga=o+e}else Xa=1<<o|n<<a|r,Ga=e}function eo(e){null!==e.return&&(Ja(e,1),Za(e,1,0))}function to(e){for(;e===$a;)$a=Ba[--Va],Ba[Va]=null,Qa=Ba[--Va],Ba[Va]=null;for(;e===qa;)qa=Ka[--Ya],Ka[Ya]=null,Ga=Ka[--Ya],Ka[Ya]=null,Xa=Ka[--Ya],Ka[Ya]=null}var no=null,ro=null,ao=!1,oo=null;function io(e,t){var n=js(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function lo(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,no=e,ro=sa(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,no=e,ro=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==qa?{id:Xa,overflow:Ga}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=js(18,null,null,0)).stateNode=t,n.return=e,e.child=n,no=e,ro=null,!0);default:return!1}}function uo(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function so(e){if(ao){var t=ro;if(t){var n=t;if(!lo(e,t)){if(uo(e))throw Error(o(418));t=sa(n.nextSibling);var r=no;t&&lo(e,t)?io(r,n):(e.flags=-4097&e.flags|2,ao=!1,no=e)}}else{if(uo(e))throw Error(o(418));e.flags=-4097&e.flags|2,ao=!1,no=e}}}function co(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;no=e}function fo(e){if(e!==no)return!1;if(!ao)return co(e),ao=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!na(e.type,e.memoizedProps)),t&&(t=ro)){if(uo(e))throw po(),Error(o(418));for(;t;)io(e,t),t=sa(t.nextSibling)}if(co(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ro=sa(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ro=null}}else ro=no?sa(e.stateNode.nextSibling):null;return!0}function po(){for(var e=ro;e;)e=sa(e.nextSibling)}function ho(){ro=no=null,ao=!1}function mo(e){null===oo?oo=[e]:oo.push(e)}var go=w.ReactCurrentBatchConfig;function vo(e,t){if(e&&e.defaultProps){for(var n in t=D({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}var bo=_a(null),yo=null,wo=null,ko=null;function xo(){ko=wo=yo=null}function So(e){var t=bo.current;Ea(bo),e._currentValue=t}function _o(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Eo(e,t){yo=e,ko=wo=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(wl=!0),e.firstContext=null)}function Co(e){var t=e._currentValue;if(ko!==e)if(e={context:e,memoizedValue:t,next:null},null===wo){if(null===yo)throw Error(o(308));wo=e,yo.dependencies={lanes:0,firstContext:e}}else wo=wo.next=e;return t}var Po=null;function zo(e){null===Po?Po=[e]:Po.push(e)}function No(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,zo(t)):(n.next=a.next,a.next=n),t.interleaved=n,To(e,r)}function To(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Oo=!1;function jo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ro(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Lo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Io(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Nu)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,To(e,n)}return null===(a=r.interleaved)?(t.next=t,zo(r)):(t.next=a.next,a.next=t),r.interleaved=t,To(e,n)}function Mo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}function Do(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?a=o=i:o=o.next=i,n=n.next}while(null!==n);null===o?a=o=t:o=o.next=t}else a=o=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ao(e,t,n,r){var a=e.updateQueue;Oo=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var u=l,s=u.next;u.next=null,null===i?o=s:i.next=s,i=u;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==i&&(null===l?c.firstBaseUpdate=s:l.next=s,c.lastBaseUpdate=u))}if(null!==o){var d=a.baseState;for(i=0,c=s=u=null,l=o;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(f=t,p=n,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=m.payload)?h.call(p,d,f):h)||void 0===f)break e;d=D({},d,f);break e;case 2:Oo=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=a.effects)?a.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(s=c=p,u=d):c=c.next=p,i|=f;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(f=l).next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}if(null===c&&(u=d),a.baseState=u,a.firstBaseUpdate=s,a.lastBaseUpdate=c,null!==(t=a.shared.interleaved)){a=t;do{i|=a.lane,a=a.next}while(a!==t)}else null===o&&(a.shared.lanes=0);Du|=i,e.lanes=i,e.memoizedState=d}}function Fo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!==typeof a)throw Error(o(191,a));a.call(r)}}}var Uo=(new r.Component).refs;function Wo(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:D({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var Ho={isMounted:function(e){return!!(e=e._reactInternals)&&He(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ts(),a=ns(e),o=Lo(r,a);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Io(e,o,a))&&(rs(t,e,a,r),Mo(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ts(),a=ns(e),o=Lo(r,a);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Io(e,o,a))&&(rs(t,e,a,r),Mo(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ts(),r=ns(e),a=Lo(n,r);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=Io(e,a,r))&&(rs(t,e,r,n),Mo(t,e,r))}};function Bo(e,t,n,r,a,o,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,i):!t.prototype||!t.prototype.isPureReactComponent||(!ur(n,r)||!ur(a,o))}function Vo(e,t,n){var r=!1,a=Pa,o=t.contextType;return"object"===typeof o&&null!==o?o=Co(o):(a=ja(t)?Ta:za.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?Oa(e,a):Pa),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=Ho,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function $o(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ho.enqueueReplaceState(t,t.state,null)}function Qo(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=Uo,jo(e);var o=t.contextType;"object"===typeof o&&null!==o?a.context=Co(o):(o=ja(t)?Ta:za.current,a.context=Oa(e,o)),a.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(Wo(e,t,o,n),a.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&Ho.enqueueReplaceState(a,a.state,null),Ao(e,n,a,r),a.state=e.memoizedState),"function"===typeof a.componentDidMount&&(e.flags|=4194308)}function Ko(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var a=r,i=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===i?t.ref:(t=function(e){var t=a.refs;t===Uo&&(t=a.refs={}),null===e?delete t[i]:t[i]=e},t._stringRef=i,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function Yo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qo(e){return(0,e._init)(e._payload)}function Xo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=Ls(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function u(e,t,n,r){return null===t||6!==t.tag?((t=As(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function s(e,t,n,r){var o=n.type;return o===S?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===j&&qo(o)===t.type)?((r=a(t,n.props)).ref=Ko(e,t,n),r.return=e,r):((r=Is(n.type,n.key,n.props,null,e.mode,r)).ref=Ko(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Fs(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Ms(n,e.mode,r,o)).return=e,t):((t=a(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=As(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case k:return(n=Is(t.type,t.key,t.props,null,e.mode,n)).ref=Ko(e,null,t),n.return=e,n;case x:return(t=Fs(t,e.mode,n)).return=e,t;case j:return f(e,(0,t._init)(t._payload),n)}if(te(t)||I(t))return(t=Ms(t,e.mode,n,null)).return=e,t;Yo(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==a?null:u(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case k:return n.key===a?s(e,t,n,r):null;case x:return n.key===a?c(e,t,n,r):null;case j:return p(e,t,(a=n._init)(n._payload),r)}if(te(n)||I(n))return null!==a?null:d(e,t,n,r,null);Yo(e,n)}return null}function h(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r)return u(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case k:return s(t,e=e.get(null===r.key?n:r.key)||null,r,a);case x:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case j:return h(e,t,n,(0,r._init)(r._payload),a)}if(te(r)||I(r))return d(t,e=e.get(n)||null,r,a,null);Yo(t,r)}return null}function m(a,o,l,u){for(var s=null,c=null,d=o,m=o=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=p(a,d,l[m],u);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(a,d),o=i(v,o,m),null===c?s=v:c.sibling=v,c=v,d=g}if(m===l.length)return n(a,d),ao&&Ja(a,m),s;if(null===d){for(;m<l.length;m++)null!==(d=f(a,l[m],u))&&(o=i(d,o,m),null===c?s=d:c.sibling=d,c=d);return ao&&Ja(a,m),s}for(d=r(a,d);m<l.length;m++)null!==(g=h(d,a,m,l[m],u))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),o=i(g,o,m),null===c?s=g:c.sibling=g,c=g);return e&&d.forEach((function(e){return t(a,e)})),ao&&Ja(a,m),s}function g(a,l,u,s){var c=I(u);if("function"!==typeof c)throw Error(o(150));if(null==(u=c.call(u)))throw Error(o(151));for(var d=c=null,m=l,g=l=0,v=null,b=u.next();null!==m&&!b.done;g++,b=u.next()){m.index>g?(v=m,m=null):v=m.sibling;var y=p(a,m,b.value,s);if(null===y){null===m&&(m=v);break}e&&m&&null===y.alternate&&t(a,m),l=i(y,l,g),null===d?c=y:d.sibling=y,d=y,m=v}if(b.done)return n(a,m),ao&&Ja(a,g),c;if(null===m){for(;!b.done;g++,b=u.next())null!==(b=f(a,b.value,s))&&(l=i(b,l,g),null===d?c=b:d.sibling=b,d=b);return ao&&Ja(a,g),c}for(m=r(a,m);!b.done;g++,b=u.next())null!==(b=h(m,a,g,b.value,s))&&(e&&null!==b.alternate&&m.delete(null===b.key?g:b.key),l=i(b,l,g),null===d?c=b:d.sibling=b,d=b);return e&&m.forEach((function(e){return t(a,e)})),ao&&Ja(a,g),c}return function e(r,o,i,u){if("object"===typeof i&&null!==i&&i.type===S&&null===i.key&&(i=i.props.children),"object"===typeof i&&null!==i){switch(i.$$typeof){case k:e:{for(var s=i.key,c=o;null!==c;){if(c.key===s){if((s=i.type)===S){if(7===c.tag){n(r,c.sibling),(o=a(c,i.props.children)).return=r,r=o;break e}}else if(c.elementType===s||"object"===typeof s&&null!==s&&s.$$typeof===j&&qo(s)===c.type){n(r,c.sibling),(o=a(c,i.props)).ref=Ko(r,c,i),o.return=r,r=o;break e}n(r,c);break}t(r,c),c=c.sibling}i.type===S?((o=Ms(i.props.children,r.mode,u,i.key)).return=r,r=o):((u=Is(i.type,i.key,i.props,null,r.mode,u)).ref=Ko(r,o,i),u.return=r,r=u)}return l(r);case x:e:{for(c=i.key;null!==o;){if(o.key===c){if(4===o.tag&&o.stateNode.containerInfo===i.containerInfo&&o.stateNode.implementation===i.implementation){n(r,o.sibling),(o=a(o,i.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Fs(i,r.mode,u)).return=r,r=o}return l(r);case j:return e(r,o,(c=i._init)(i._payload),u)}if(te(i))return m(r,o,i,u);if(I(i))return g(r,o,i,u);Yo(r,i)}return"string"===typeof i&&""!==i||"number"===typeof i?(i=""+i,null!==o&&6===o.tag?(n(r,o.sibling),(o=a(o,i)).return=r,r=o):(n(r,o),(o=As(i,r.mode,u)).return=r,r=o),l(r)):n(r,o)}}var Go=Xo(!0),Jo=Xo(!1),Zo={},ei=_a(Zo),ti=_a(Zo),ni=_a(Zo);function ri(e){if(e===Zo)throw Error(o(174));return e}function ai(e,t){switch(Ca(ni,t),Ca(ti,e),Ca(ei,Zo),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ue(null,"");break;default:t=ue(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ea(ei),Ca(ei,t)}function oi(){Ea(ei),Ea(ti),Ea(ni)}function ii(e){ri(ni.current);var t=ri(ei.current),n=ue(t,e.type);t!==n&&(Ca(ti,e),Ca(ei,n))}function li(e){ti.current===e&&(Ea(ei),Ea(ti))}var ui=_a(0);function si(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ci=[];function di(){for(var e=0;e<ci.length;e++)ci[e]._workInProgressVersionPrimary=null;ci.length=0}var fi=w.ReactCurrentDispatcher,pi=w.ReactCurrentBatchConfig,hi=0,mi=null,gi=null,vi=null,bi=!1,yi=!1,wi=0,ki=0;function xi(){throw Error(o(321))}function Si(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function _i(e,t,n,r,a,i){if(hi=i,mi=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fi.current=null===e||null===e.memoizedState?ll:ul,e=n(r,a),yi){i=0;do{if(yi=!1,wi=0,25<=i)throw Error(o(301));i+=1,vi=gi=null,t.updateQueue=null,fi.current=sl,e=n(r,a)}while(yi)}if(fi.current=il,t=null!==gi&&null!==gi.next,hi=0,vi=gi=mi=null,bi=!1,t)throw Error(o(300));return e}function Ei(){var e=0!==wi;return wi=0,e}function Ci(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===vi?mi.memoizedState=vi=e:vi=vi.next=e,vi}function Pi(){if(null===gi){var e=mi.alternate;e=null!==e?e.memoizedState:null}else e=gi.next;var t=null===vi?mi.memoizedState:vi.next;if(null!==t)vi=t,gi=e;else{if(null===e)throw Error(o(310));e={memoizedState:(gi=e).memoizedState,baseState:gi.baseState,baseQueue:gi.baseQueue,queue:gi.queue,next:null},null===vi?mi.memoizedState=vi=e:vi=vi.next=e}return vi}function zi(e,t){return"function"===typeof t?t(e):t}function Ni(e){var t=Pi(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=gi,a=r.baseQueue,i=n.pending;if(null!==i){if(null!==a){var l=a.next;a.next=i.next,i.next=l}r.baseQueue=a=i,n.pending=null}if(null!==a){i=a.next,r=r.baseState;var u=l=null,s=null,c=i;do{var d=c.lane;if((hi&d)===d)null!==s&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===s?(u=s=f,l=r):s=s.next=f,mi.lanes|=d,Du|=d}c=c.next}while(null!==c&&c!==i);null===s?l=r:s.next=u,lr(r,t.memoizedState)||(wl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{i=a.lane,mi.lanes|=i,Du|=i,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ti(e){var t=Pi(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{i=e(i,l.action),l=l.next}while(l!==a);lr(i,t.memoizedState)||(wl=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Oi(){}function ji(e,t){var n=mi,r=Pi(),a=t(),i=!lr(r.memoizedState,a);if(i&&(r.memoizedState=a,wl=!0),r=r.queue,Vi(Ii.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||null!==vi&&1&vi.memoizedState.tag){if(n.flags|=2048,Fi(9,Li.bind(null,n,r,a,t),void 0,null),null===Tu)throw Error(o(349));0!==(30&hi)||Ri(n,t,a)}return a}function Ri(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=mi.updateQueue)?(t={lastEffect:null,stores:null},mi.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Li(e,t,n,r){t.value=n,t.getSnapshot=r,Mi(t)&&Di(e)}function Ii(e,t,n){return n((function(){Mi(t)&&Di(e)}))}function Mi(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function Di(e){var t=To(e,1);null!==t&&rs(t,e,1,-1)}function Ai(e){var t=Ci();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:e},t.queue=e,e=e.dispatch=nl.bind(null,mi,e),[t.memoizedState,e]}function Fi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=mi.updateQueue)?(t={lastEffect:null,stores:null},mi.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ui(){return Pi().memoizedState}function Wi(e,t,n,r){var a=Ci();mi.flags|=e,a.memoizedState=Fi(1|t,n,void 0,void 0===r?null:r)}function Hi(e,t,n,r){var a=Pi();r=void 0===r?null:r;var o=void 0;if(null!==gi){var i=gi.memoizedState;if(o=i.destroy,null!==r&&Si(r,i.deps))return void(a.memoizedState=Fi(t,n,o,r))}mi.flags|=e,a.memoizedState=Fi(1|t,n,o,r)}function Bi(e,t){return Wi(8390656,8,e,t)}function Vi(e,t){return Hi(2048,8,e,t)}function $i(e,t){return Hi(4,2,e,t)}function Qi(e,t){return Hi(4,4,e,t)}function Ki(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Yi(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Hi(4,4,Ki.bind(null,t,e),n)}function qi(){}function Xi(e,t){var n=Pi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Si(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Gi(e,t){var n=Pi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Si(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ji(e,t,n){return 0===(21&hi)?(e.baseState&&(e.baseState=!1,wl=!0),e.memoizedState=n):(lr(n,t)||(n=mt(),mi.lanes|=n,Du|=n,e.baseState=!0),t)}function Zi(e,t){var n=yt;yt=0!==n&&4>n?n:4,e(!0);var r=pi.transition;pi.transition={};try{e(!1),t()}finally{yt=n,pi.transition=r}}function el(){return Pi().memoizedState}function tl(e,t,n){var r=ns(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rl(e))al(t,n);else if(null!==(n=No(e,t,n,r))){rs(n,e,r,ts()),ol(n,t,r)}}function nl(e,t,n){var r=ns(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rl(e))al(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=o(i,n);if(a.hasEagerState=!0,a.eagerState=l,lr(l,i)){var u=t.interleaved;return null===u?(a.next=a,zo(t)):(a.next=u.next,u.next=a),void(t.interleaved=a)}}catch(s){}null!==(n=No(e,t,a,r))&&(rs(n,e,r,a=ts()),ol(n,t,r))}}function rl(e){var t=e.alternate;return e===mi||null!==t&&t===mi}function al(e,t){yi=bi=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ol(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}var il={readContext:Co,useCallback:xi,useContext:xi,useEffect:xi,useImperativeHandle:xi,useInsertionEffect:xi,useLayoutEffect:xi,useMemo:xi,useReducer:xi,useRef:xi,useState:xi,useDebugValue:xi,useDeferredValue:xi,useTransition:xi,useMutableSource:xi,useSyncExternalStore:xi,useId:xi,unstable_isNewReconciler:!1},ll={readContext:Co,useCallback:function(e,t){return Ci().memoizedState=[e,void 0===t?null:t],e},useContext:Co,useEffect:Bi,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Wi(4194308,4,Ki.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wi(4,2,e,t)},useMemo:function(e,t){var n=Ci();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ci();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=tl.bind(null,mi,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Ci().memoizedState=e},useState:Ai,useDebugValue:qi,useDeferredValue:function(e){return Ci().memoizedState=e},useTransition:function(){var e=Ai(!1),t=e[0];return e=Zi.bind(null,e[1]),Ci().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=mi,a=Ci();if(ao){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===Tu)throw Error(o(349));0!==(30&hi)||Ri(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Bi(Ii.bind(null,r,i,e),[e]),r.flags|=2048,Fi(9,Li.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ci(),t=Tu.identifierPrefix;if(ao){var n=Ga;t=":"+t+"R"+(n=(Xa&~(1<<32-it(Xa)-1)).toString(32)+n),0<(n=wi++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=ki++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ul={readContext:Co,useCallback:Xi,useContext:Co,useEffect:Vi,useImperativeHandle:Yi,useInsertionEffect:$i,useLayoutEffect:Qi,useMemo:Gi,useReducer:Ni,useRef:Ui,useState:function(){return Ni(zi)},useDebugValue:qi,useDeferredValue:function(e){return Ji(Pi(),gi.memoizedState,e)},useTransition:function(){return[Ni(zi)[0],Pi().memoizedState]},useMutableSource:Oi,useSyncExternalStore:ji,useId:el,unstable_isNewReconciler:!1},sl={readContext:Co,useCallback:Xi,useContext:Co,useEffect:Vi,useImperativeHandle:Yi,useInsertionEffect:$i,useLayoutEffect:Qi,useMemo:Gi,useReducer:Ti,useRef:Ui,useState:function(){return Ti(zi)},useDebugValue:qi,useDeferredValue:function(e){var t=Pi();return null===gi?t.memoizedState=e:Ji(t,gi.memoizedState,e)},useTransition:function(){return[Ti(zi)[0],Pi().memoizedState]},useMutableSource:Oi,useSyncExternalStore:ji,useId:el,unstable_isNewReconciler:!1};function cl(e,t){try{var n="",r=t;do{n+=W(r),r=r.return}while(r);var a=n}catch(o){a="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:a,digest:null}}function dl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function fl(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var pl="function"===typeof WeakMap?WeakMap:Map;function hl(e,t,n){(n=Lo(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){$u||($u=!0,Qu=r),fl(0,t)},n}function ml(e,t,n){(n=Lo(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){fl(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(n.callback=function(){fl(0,t),"function"!==typeof r&&(null===Ku?Ku=new Set([this]):Ku.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function gl(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new pl;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Cs.bind(null,e,t,n),t.then(e,e))}function vl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function bl(e,t,n,r,a){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Lo(-1,1)).tag=2,Io(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var yl=w.ReactCurrentOwner,wl=!1;function kl(e,t,n,r){t.child=null===e?Jo(t,null,n,r):Go(t,e.child,n,r)}function xl(e,t,n,r,a){n=n.render;var o=t.ref;return Eo(t,a),r=_i(e,t,n,r,o,a),n=Ei(),null===e||wl?(ao&&n&&eo(t),t.flags|=1,kl(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,$l(e,t,a))}function Sl(e,t,n,r,a){if(null===e){var o=n.type;return"function"!==typeof o||Rs(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Is(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,_l(e,t,o,r,a))}if(o=e.child,0===(e.lanes&a)){var i=o.memoizedProps;if((n=null!==(n=n.compare)?n:ur)(i,r)&&e.ref===t.ref)return $l(e,t,a)}return t.flags|=1,(e=Ls(o,r)).ref=t.ref,e.return=t,t.child=e}function _l(e,t,n,r,a){if(null!==e){var o=e.memoizedProps;if(ur(o,r)&&e.ref===t.ref){if(wl=!1,t.pendingProps=r=o,0===(e.lanes&a))return t.lanes=e.lanes,$l(e,t,a);0!==(131072&e.flags)&&(wl=!0)}}return Pl(e,t,n,r,a)}function El(e,t,n){var r=t.pendingProps,a=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ca(Lu,Ru),Ru|=n;else{if(0===(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ca(Lu,Ru),Ru|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,Ca(Lu,Ru),Ru|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ca(Lu,Ru),Ru|=r;return kl(e,t,a,n),t.child}function Cl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pl(e,t,n,r,a){var o=ja(n)?Ta:za.current;return o=Oa(t,o),Eo(t,a),n=_i(e,t,n,r,o,a),r=Ei(),null===e||wl?(ao&&r&&eo(t),t.flags|=1,kl(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,$l(e,t,a))}function zl(e,t,n,r,a){if(ja(n)){var o=!0;Ma(t)}else o=!1;if(Eo(t,a),null===t.stateNode)Vl(e,t),Vo(t,n,r),Qo(t,n,r,a),r=!0;else if(null===e){var i=t.stateNode,l=t.memoizedProps;i.props=l;var u=i.context,s=n.contextType;"object"===typeof s&&null!==s?s=Co(s):s=Oa(t,s=ja(n)?Ta:za.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof i.getSnapshotBeforeUpdate;d||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==r||u!==s)&&$o(t,i,r,s),Oo=!1;var f=t.memoizedState;i.state=f,Ao(t,r,i,a),u=t.memoizedState,l!==r||f!==u||Na.current||Oo?("function"===typeof c&&(Wo(t,n,c,r),u=t.memoizedState),(l=Oo||Bo(t,n,l,r,f,u,s))?(d||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=s,r=l):("function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Ro(e,t),l=t.memoizedProps,s=t.type===t.elementType?l:vo(t.type,l),i.props=s,d=t.pendingProps,f=i.context,"object"===typeof(u=n.contextType)&&null!==u?u=Co(u):u=Oa(t,u=ja(n)?Ta:za.current);var p=n.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==d||f!==u)&&$o(t,i,r,u),Oo=!1,f=t.memoizedState,i.state=f,Ao(t,r,i,a);var h=t.memoizedState;l!==d||f!==h||Na.current||Oo?("function"===typeof p&&(Wo(t,n,p,r),h=t.memoizedState),(s=Oo||Bo(t,n,s,r,f,h,u)||!1)?(c||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,h,u),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,h,u)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),i.props=r,i.state=h,i.context=u,r=s):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Nl(e,t,n,r,o,a)}function Nl(e,t,n,r,a,o){Cl(e,t);var i=0!==(128&t.flags);if(!r&&!i)return a&&Da(t,n,!1),$l(e,t,o);r=t.stateNode,yl.current=t;var l=i&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&i?(t.child=Go(t,e.child,null,o),t.child=Go(t,null,l,o)):kl(e,t,l,o),t.memoizedState=r.state,a&&Da(t,n,!0),t.child}function Tl(e){var t=e.stateNode;t.pendingContext?La(0,t.pendingContext,t.pendingContext!==t.context):t.context&&La(0,t.context,!1),ai(e,t.containerInfo)}function Ol(e,t,n,r,a){return ho(),mo(a),t.flags|=256,kl(e,t,n,r),t.child}var jl,Rl,Ll,Il,Ml={dehydrated:null,treeContext:null,retryLane:0};function Dl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Al(e,t,n){var r,a=t.pendingProps,i=ui.current,l=!1,u=0!==(128&t.flags);if((r=u)||(r=(null===e||null!==e.memoizedState)&&0!==(2&i)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(i|=1),Ca(ui,1&i),null===e)return so(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(u=a.children,e=a.fallback,l?(a=t.mode,l=t.child,u={mode:"hidden",children:u},0===(1&a)&&null!==l?(l.childLanes=0,l.pendingProps=u):l=Ds(u,a,0,null),e=Ms(e,a,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Dl(n),t.memoizedState=Ml,e):Fl(t,u));if(null!==(i=e.memoizedState)&&null!==(r=i.dehydrated))return function(e,t,n,r,a,i,l){if(n)return 256&t.flags?(t.flags&=-257,Ul(e,t,l,r=dl(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Ds({mode:"visible",children:r.children},a,0,null),(i=Ms(i,a,l,null)).flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,0!==(1&t.mode)&&Go(t,e.child,null,l),t.child.memoizedState=Dl(l),t.memoizedState=Ml,i);if(0===(1&t.mode))return Ul(e,t,l,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var u=r.dgst;return r=u,Ul(e,t,l,r=dl(i=Error(o(419)),r,void 0))}if(u=0!==(l&e.childLanes),wl||u){if(null!==(r=Tu)){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(r.suspendedLanes|l))?0:a)&&a!==i.retryLane&&(i.retryLane=a,To(e,a),rs(r,e,a,-1))}return gs(),Ul(e,t,l,r=dl(Error(o(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=zs.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,ro=sa(a.nextSibling),no=t,ao=!0,oo=null,null!==e&&(Ka[Ya++]=Xa,Ka[Ya++]=Ga,Ka[Ya++]=qa,Xa=e.id,Ga=e.overflow,qa=t),t=Fl(t,r.children),t.flags|=4096,t)}(e,t,u,a,r,i,n);if(l){l=a.fallback,u=t.mode,r=(i=e.child).sibling;var s={mode:"hidden",children:a.children};return 0===(1&u)&&t.child!==i?((a=t.child).childLanes=0,a.pendingProps=s,t.deletions=null):(a=Ls(i,s)).subtreeFlags=14680064&i.subtreeFlags,null!==r?l=Ls(r,l):(l=Ms(l,u,n,null)).flags|=2,l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,u=null===(u=e.child.memoizedState)?Dl(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},l.memoizedState=u,l.childLanes=e.childLanes&~n,t.memoizedState=Ml,a}return e=(l=e.child).sibling,a=Ls(l,{mode:"visible",children:a.children}),0===(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Fl(e,t){return(t=Ds({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Ul(e,t,n,r){return null!==r&&mo(r),Go(t,e.child,null,n),(e=Fl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Wl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),_o(e.return,t,n)}function Hl(e,t,n,r,a){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function Bl(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(kl(e,t,r.children,n),0!==(2&(r=ui.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Wl(e,n,t);else if(19===e.tag)Wl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ca(ui,r),0===(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===si(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Hl(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===si(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Hl(t,!0,n,null,o);break;case"together":Hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $l(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Du|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Ls(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ls(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Ql(e,t){if(!ao)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Kl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Yl(e,t,n){var r=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kl(t),null;case 1:case 17:return ja(t.type)&&Ra(),Kl(t),null;case 3:return r=t.stateNode,oi(),Ea(Na),Ea(za),di(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(fo(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==oo&&(ls(oo),oo=null))),Rl(e,t),Kl(t),null;case 5:li(t);var a=ri(ni.current);if(n=t.type,null!==e&&null!=t.stateNode)Ll(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Kl(t),null}if(e=ri(ei.current),fo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[fa]=t,r[pa]=i,e=0!==(1&t.mode),n){case"dialog":Fr("cancel",r),Fr("close",r);break;case"iframe":case"object":case"embed":Fr("load",r);break;case"video":case"audio":for(a=0;a<Ir.length;a++)Fr(Ir[a],r);break;case"source":Fr("error",r);break;case"img":case"image":case"link":Fr("error",r),Fr("load",r);break;case"details":Fr("toggle",r);break;case"input":X(r,i),Fr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Fr("invalid",r);break;case"textarea":ae(r,i),Fr("invalid",r)}for(var u in be(n,i),a=null,i)if(i.hasOwnProperty(u)){var s=i[u];"children"===u?"string"===typeof s?r.textContent!==s&&(!0!==i.suppressHydrationWarning&&Jr(r.textContent,s,e),a=["children",s]):"number"===typeof s&&r.textContent!==""+s&&(!0!==i.suppressHydrationWarning&&Jr(r.textContent,s,e),a=["children",""+s]):l.hasOwnProperty(u)&&null!=s&&"onScroll"===u&&Fr("scroll",r)}switch(n){case"input":Q(r),Z(r,i,!0);break;case"textarea":Q(r),ie(r);break;case"select":case"option":break;default:"function"===typeof i.onClick&&(r.onclick=Zr)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{u=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=u.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=u.createElement(n,{is:r.is}):(e=u.createElement(n),"select"===n&&(u=e,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):e=u.createElementNS(e,n),e[fa]=t,e[pa]=r,jl(e,t,!1,!1),t.stateNode=e;e:{switch(u=ye(n,r),n){case"dialog":Fr("cancel",e),Fr("close",e),a=r;break;case"iframe":case"object":case"embed":Fr("load",e),a=r;break;case"video":case"audio":for(a=0;a<Ir.length;a++)Fr(Ir[a],e);a=r;break;case"source":Fr("error",e),a=r;break;case"img":case"image":case"link":Fr("error",e),Fr("load",e),a=r;break;case"details":Fr("toggle",e),a=r;break;case"input":X(e,r),a=q(e,r),Fr("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=D({},r,{value:void 0}),Fr("invalid",e);break;case"textarea":ae(e,r),a=re(e,r),Fr("invalid",e)}for(i in be(n,a),s=a)if(s.hasOwnProperty(i)){var c=s[i];"style"===i?ge(e,c):"dangerouslySetInnerHTML"===i?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===i?"string"===typeof c?("textarea"!==n||""!==c)&&fe(e,c):"number"===typeof c&&fe(e,""+c):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(l.hasOwnProperty(i)?null!=c&&"onScroll"===i&&Fr("scroll",e):null!=c&&y(e,i,c,u))}switch(n){case"input":Q(e),Z(e,r,!1);break;case"textarea":Q(e),ie(e);break;case"option":null!=r.value&&e.setAttribute("value",""+V(r.value));break;case"select":e.multiple=!!r.multiple,null!=(i=r.value)?ne(e,!!r.multiple,i,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Kl(t),null;case 6:if(e&&null!=t.stateNode)Il(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(n=ri(ni.current),ri(ei.current),fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[fa]=t,(i=r.nodeValue!==n)&&null!==(e=no))switch(e.tag){case 3:Jr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(r.nodeValue,n,0!==(1&e.mode))}i&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fa]=t,t.stateNode=r}return Kl(t),null;case 13:if(Ea(ui),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ao&&null!==ro&&0!==(1&t.mode)&&0===(128&t.flags))po(),ho(),t.flags|=98560,i=!1;else if(i=fo(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(o(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(o(317));i[fa]=t}else ho(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Kl(t),i=!1}else null!==oo&&(ls(oo),oo=null),i=!0;if(!i)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ui.current)?0===Iu&&(Iu=3):gs())),null!==t.updateQueue&&(t.flags|=4),Kl(t),null);case 4:return oi(),Rl(e,t),null===e&&Hr(t.stateNode.containerInfo),Kl(t),null;case 10:return So(t.type._context),Kl(t),null;case 19:if(Ea(ui),null===(i=t.memoizedState))return Kl(t),null;if(r=0!==(128&t.flags),null===(u=i.rendering))if(r)Ql(i,!1);else{if(0!==Iu||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(u=si(e))){for(t.flags|=128,Ql(i,!1),null!==(r=u.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(i=n).flags&=14680066,null===(u=i.alternate)?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=u.childLanes,i.lanes=u.lanes,i.child=u.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=u.memoizedProps,i.memoizedState=u.memoizedState,i.updateQueue=u.updateQueue,i.type=u.type,e=u.dependencies,i.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ca(ui,1&ui.current|2),t.child}e=e.sibling}null!==i.tail&&Ge()>Bu&&(t.flags|=128,r=!0,Ql(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=si(u))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Ql(i,!0),null===i.tail&&"hidden"===i.tailMode&&!u.alternate&&!ao)return Kl(t),null}else 2*Ge()-i.renderingStartTime>Bu&&1073741824!==n&&(t.flags|=128,r=!0,Ql(i,!1),t.lanes=4194304);i.isBackwards?(u.sibling=t.child,t.child=u):(null!==(n=i.last)?n.sibling=u:t.child=u,i.last=u)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ge(),t.sibling=null,n=ui.current,Ca(ui,r?1&n|2:1&n),t):(Kl(t),null);case 22:case 23:return fs(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Ru)&&(Kl(t),6&t.subtreeFlags&&(t.flags|=8192)):Kl(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function ql(e,t){switch(to(t),t.tag){case 1:return ja(t.type)&&Ra(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return oi(),Ea(Na),Ea(za),di(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return li(t),null;case 13:if(Ea(ui),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));ho()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ea(ui),null;case 4:return oi(),null;case 10:return So(t.type._context),null;case 22:case 23:return fs(),null;default:return null}}jl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Rl=function(){},Ll=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,ri(ei.current);var o,i=null;switch(n){case"input":a=q(e,a),r=q(e,r),i=[];break;case"select":a=D({},a,{value:void 0}),r=D({},r,{value:void 0}),i=[];break;case"textarea":a=re(e,a),r=re(e,r),i=[];break;default:"function"!==typeof a.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(c in be(n,r),n=null,a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&null!=a[c])if("style"===c){var u=a[c];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(l.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(u=null!=a?a[c]:void 0,r.hasOwnProperty(c)&&s!==u&&(null!=s||null!=u))if("style"===c)if(u){for(o in u)!u.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&u[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(i||(i=[]),i.push(c,n)),n=s;else"dangerouslySetInnerHTML"===c?(s=s?s.__html:void 0,u=u?u.__html:void 0,null!=s&&u!==s&&(i=i||[]).push(c,s)):"children"===c?"string"!==typeof s&&"number"!==typeof s||(i=i||[]).push(c,""+s):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(l.hasOwnProperty(c)?(null!=s&&"onScroll"===c&&Fr("scroll",e),i||u===s||(i=[])):(i=i||[]).push(c,s))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}},Il=function(e,t,n,r){n!==r&&(t.flags|=4)};var Xl=!1,Gl=!1,Jl="function"===typeof WeakSet?WeakSet:Set,Zl=null;function eu(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Es(e,t,r)}else n.current=null}function tu(e,t,n){try{n()}catch(r){Es(e,t,r)}}var nu=!1;function ru(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,void 0!==o&&tu(t,n,o)}a=a.next}while(a!==r)}}function au(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ou(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function iu(e){var t=e.alternate;null!==t&&(e.alternate=null,iu(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fa],delete t[pa],delete t[ma],delete t[ga],delete t[va])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lu(e){return 5===e.tag||3===e.tag||4===e.tag}function uu(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||lu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function su(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(su(e,t,n),e=e.sibling;null!==e;)su(e,t,n),e=e.sibling}function cu(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cu(e,t,n),e=e.sibling;null!==e;)cu(e,t,n),e=e.sibling}var du=null,fu=!1;function pu(e,t,n){for(n=n.child;null!==n;)hu(e,t,n),n=n.sibling}function hu(e,t,n){if(ot&&"function"===typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(at,n)}catch(l){}switch(n.tag){case 5:Gl||eu(n,t);case 6:var r=du,a=fu;du=null,pu(e,t,n),fu=a,null!==(du=r)&&(fu?(e=du,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):du.removeChild(n.stateNode));break;case 18:null!==du&&(fu?(e=du,n=n.stateNode,8===e.nodeType?ua(e.parentNode,n):1===e.nodeType&&ua(e,n),Ht(e)):ua(du,n.stateNode));break;case 4:r=du,a=fu,du=n.stateNode.containerInfo,fu=!0,pu(e,t,n),du=r,fu=a;break;case 0:case 11:case 14:case 15:if(!Gl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var o=a,i=o.destroy;o=o.tag,void 0!==i&&(0!==(2&o)||0!==(4&o))&&tu(n,t,i),a=a.next}while(a!==r)}pu(e,t,n);break;case 1:if(!Gl&&(eu(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Es(n,t,l)}pu(e,t,n);break;case 21:pu(e,t,n);break;case 22:1&n.mode?(Gl=(r=Gl)||null!==n.memoizedState,pu(e,t,n),Gl=r):pu(e,t,n);break;default:pu(e,t,n)}}function mu(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Jl),t.forEach((function(t){var r=Ns.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function gu(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,l=t,u=l;e:for(;null!==u;){switch(u.tag){case 5:du=u.stateNode,fu=!1;break e;case 3:case 4:du=u.stateNode.containerInfo,fu=!0;break e}u=u.return}if(null===du)throw Error(o(160));hu(i,l,a),du=null,fu=!1;var s=a.alternate;null!==s&&(s.return=null),a.return=null}catch(c){Es(a,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)vu(t,e),t=t.sibling}function vu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gu(t,e),bu(e),4&r){try{ru(3,e,e.return),au(3,e)}catch(g){Es(e,e.return,g)}try{ru(5,e,e.return)}catch(g){Es(e,e.return,g)}}break;case 1:gu(t,e),bu(e),512&r&&null!==n&&eu(n,n.return);break;case 5:if(gu(t,e),bu(e),512&r&&null!==n&&eu(n,n.return),32&e.flags){var a=e.stateNode;try{fe(a,"")}catch(g){Es(e,e.return,g)}}if(4&r&&null!=(a=e.stateNode)){var i=e.memoizedProps,l=null!==n?n.memoizedProps:i,u=e.type,s=e.updateQueue;if(e.updateQueue=null,null!==s)try{"input"===u&&"radio"===i.type&&null!=i.name&&G(a,i),ye(u,l);var c=ye(u,i);for(l=0;l<s.length;l+=2){var d=s[l],f=s[l+1];"style"===d?ge(a,f):"dangerouslySetInnerHTML"===d?de(a,f):"children"===d?fe(a,f):y(a,d,f,c)}switch(u){case"input":J(a,i);break;case"textarea":oe(a,i);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var h=i.value;null!=h?ne(a,!!i.multiple,h,!1):p!==!!i.multiple&&(null!=i.defaultValue?ne(a,!!i.multiple,i.defaultValue,!0):ne(a,!!i.multiple,i.multiple?[]:"",!1))}a[pa]=i}catch(g){Es(e,e.return,g)}}break;case 6:if(gu(t,e),bu(e),4&r){if(null===e.stateNode)throw Error(o(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(g){Es(e,e.return,g)}}break;case 3:if(gu(t,e),bu(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ht(t.containerInfo)}catch(g){Es(e,e.return,g)}break;case 4:default:gu(t,e),bu(e);break;case 13:gu(t,e),bu(e),8192&(a=e.child).flags&&(i=null!==a.memoizedState,a.stateNode.isHidden=i,!i||null!==a.alternate&&null!==a.alternate.memoizedState||(Hu=Ge())),4&r&&mu(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Gl=(c=Gl)||d,gu(t,e),Gl=c):gu(t,e),bu(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(Zl=e,d=e.child;null!==d;){for(f=Zl=d;null!==Zl;){switch(h=(p=Zl).child,p.tag){case 0:case 11:case 14:case 15:ru(4,p,p.return);break;case 1:eu(p,p.return);var m=p.stateNode;if("function"===typeof m.componentWillUnmount){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Es(r,n,g)}}break;case 5:eu(p,p.return);break;case 22:if(null!==p.memoizedState){xu(f);continue}}null!==h?(h.return=p,Zl=h):xu(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{a=f.stateNode,c?"function"===typeof(i=a.style).setProperty?i.setProperty("display","none","important"):i.display="none":(u=f.stateNode,l=void 0!==(s=f.memoizedProps.style)&&null!==s&&s.hasOwnProperty("display")?s.display:null,u.style.display=me("display",l))}catch(g){Es(e,e.return,g)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){Es(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:gu(t,e),bu(e),4&r&&mu(e);case 21:}}function bu(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(lu(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(fe(a,""),r.flags&=-33),cu(e,uu(e),a);break;case 3:case 4:var i=r.stateNode.containerInfo;su(e,uu(e),i);break;default:throw Error(o(161))}}catch(l){Es(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function yu(e,t,n){Zl=e,wu(e,t,n)}function wu(e,t,n){for(var r=0!==(1&e.mode);null!==Zl;){var a=Zl,o=a.child;if(22===a.tag&&r){var i=null!==a.memoizedState||Xl;if(!i){var l=a.alternate,u=null!==l&&null!==l.memoizedState||Gl;l=Xl;var s=Gl;if(Xl=i,(Gl=u)&&!s)for(Zl=a;null!==Zl;)u=(i=Zl).child,22===i.tag&&null!==i.memoizedState?Su(a):null!==u?(u.return=i,Zl=u):Su(a);for(;null!==o;)Zl=o,wu(o,t,n),o=o.sibling;Zl=a,Xl=l,Gl=s}ku(e)}else 0!==(8772&a.subtreeFlags)&&null!==o?(o.return=a,Zl=o):ku(e)}}function ku(e){for(;null!==Zl;){var t=Zl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Gl||au(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Gl)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:vo(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;null!==i&&Fo(t,i,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Fo(t,l,n)}break;case 5:var u=t.stateNode;if(null===n&&4&t.flags){n=u;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Ht(f)}}}break;default:throw Error(o(163))}Gl||512&t.flags&&ou(t)}catch(p){Es(t,t.return,p)}}if(t===e){Zl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Zl=n;break}Zl=t.return}}function xu(e){for(;null!==Zl;){var t=Zl;if(t===e){Zl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Zl=n;break}Zl=t.return}}function Su(e){for(;null!==Zl;){var t=Zl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{au(4,t)}catch(u){Es(t,n,u)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(u){Es(t,a,u)}}var o=t.return;try{ou(t)}catch(u){Es(t,o,u)}break;case 5:var i=t.return;try{ou(t)}catch(u){Es(t,i,u)}}}catch(u){Es(t,t.return,u)}if(t===e){Zl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Zl=l;break}Zl=t.return}}var _u,Eu=Math.ceil,Cu=w.ReactCurrentDispatcher,Pu=w.ReactCurrentOwner,zu=w.ReactCurrentBatchConfig,Nu=0,Tu=null,Ou=null,ju=0,Ru=0,Lu=_a(0),Iu=0,Mu=null,Du=0,Au=0,Fu=0,Uu=null,Wu=null,Hu=0,Bu=1/0,Vu=null,$u=!1,Qu=null,Ku=null,Yu=!1,qu=null,Xu=0,Gu=0,Ju=null,Zu=-1,es=0;function ts(){return 0!==(6&Nu)?Ge():-1!==Zu?Zu:Zu=Ge()}function ns(e){return 0===(1&e.mode)?1:0!==(2&Nu)&&0!==ju?ju&-ju:null!==go.transition?(0===es&&(es=mt()),es):0!==(e=yt)?e:e=void 0===(e=window.event)?16:Xt(e.type)}function rs(e,t,n,r){if(50<Gu)throw Gu=0,Ju=null,Error(o(185));vt(e,n,r),0!==(2&Nu)&&e===Tu||(e===Tu&&(0===(2&Nu)&&(Au|=n),4===Iu&&us(e,ju)),as(e,r),1===n&&0===Nu&&0===(1&t.mode)&&(Bu=Ge()+500,Fa&&Ha()))}function as(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-it(o),l=1<<i,u=a[i];-1===u?0!==(l&n)&&0===(l&r)||(a[i]=pt(l,t)):u<=t&&(e.expiredLanes|=l),o&=~l}}(e,t);var r=ft(e,e===Tu?ju:0);if(0===r)null!==n&&Ye(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ye(n),1===t)0===e.tag?function(e){Fa=!0,Wa(e)}(ss.bind(null,e)):Wa(ss.bind(null,e)),ia((function(){0===(6&Nu)&&Ha()})),n=null;else{switch(wt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Ts(n,os.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function os(e,t){if(Zu=-1,es=0,0!==(6&Nu))throw Error(o(327));var n=e.callbackNode;if(Ss()&&e.callbackNode!==n)return null;var r=ft(e,e===Tu?ju:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=vs(e,r);else{t=r;var a=Nu;Nu|=2;var i=ms();for(Tu===e&&ju===t||(Vu=null,Bu=Ge()+500,ps(e,t));;)try{ys();break}catch(u){hs(e,u)}xo(),Cu.current=i,Nu=a,null!==Ou?t=0:(Tu=null,ju=0,t=Iu)}if(0!==t){if(2===t&&(0!==(a=ht(e))&&(r=a,t=is(e,a))),1===t)throw n=Mu,ps(e,0),us(e,r),as(e,Ge()),n;if(6===t)us(e,r);else{if(a=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!lr(o(),a))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=vs(e,r))&&(0!==(i=ht(e))&&(r=i,t=is(e,i))),1===t))throw n=Mu,ps(e,0),us(e,r),as(e,Ge()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:xs(e,Wu,Vu);break;case 3:if(us(e,r),(130023424&r)===r&&10<(t=Hu+500-Ge())){if(0!==ft(e,0))break;if(((a=e.suspendedLanes)&r)!==r){ts(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ra(xs.bind(null,e,Wu,Vu),t);break}xs(e,Wu,Vu);break;case 4:if(us(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-it(r);i=1<<l,(l=t[l])>a&&(a=l),r&=~i}if(r=a,10<(r=(120>(r=Ge()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Eu(r/1960))-r)){e.timeoutHandle=ra(xs.bind(null,e,Wu,Vu),r);break}xs(e,Wu,Vu);break;default:throw Error(o(329))}}}return as(e,Ge()),e.callbackNode===n?os.bind(null,e):null}function is(e,t){var n=Uu;return e.current.memoizedState.isDehydrated&&(ps(e,t).flags|=256),2!==(e=vs(e,t))&&(t=Wu,Wu=n,null!==t&&ls(t)),e}function ls(e){null===Wu?Wu=e:Wu.push.apply(Wu,e)}function us(e,t){for(t&=~Fu,t&=~Au,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function ss(e){if(0!==(6&Nu))throw Error(o(327));Ss();var t=ft(e,0);if(0===(1&t))return as(e,Ge()),null;var n=vs(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=is(e,r))}if(1===n)throw n=Mu,ps(e,0),us(e,t),as(e,Ge()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xs(e,Wu,Vu),as(e,Ge()),null}function cs(e,t){var n=Nu;Nu|=1;try{return e(t)}finally{0===(Nu=n)&&(Bu=Ge()+500,Fa&&Ha())}}function ds(e){null!==qu&&0===qu.tag&&0===(6&Nu)&&Ss();var t=Nu;Nu|=1;var n=zu.transition,r=yt;try{if(zu.transition=null,yt=1,e)return e()}finally{yt=r,zu.transition=n,0===(6&(Nu=t))&&Ha()}}function fs(){Ru=Lu.current,Ea(Lu)}function ps(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,aa(n)),null!==Ou)for(n=Ou.return;null!==n;){var r=n;switch(to(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Ra();break;case 3:oi(),Ea(Na),Ea(za),di();break;case 5:li(r);break;case 4:oi();break;case 13:case 19:Ea(ui);break;case 10:So(r.type._context);break;case 22:case 23:fs()}n=n.return}if(Tu=e,Ou=e=Ls(e.current,null),ju=Ru=t,Iu=0,Mu=null,Fu=Au=Du=0,Wu=Uu=null,null!==Po){for(t=0;t<Po.length;t++)if(null!==(r=(n=Po[t]).interleaved)){n.interleaved=null;var a=r.next,o=n.pending;if(null!==o){var i=o.next;o.next=a,r.next=i}n.pending=r}Po=null}return e}function hs(e,t){for(;;){var n=Ou;try{if(xo(),fi.current=il,bi){for(var r=mi.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}bi=!1}if(hi=0,vi=gi=mi=null,yi=!1,wi=0,Pu.current=null,null===n||null===n.return){Iu=1,Mu=t,Ou=null;break}e:{var i=e,l=n.return,u=n,s=t;if(t=ju,u.flags|=32768,null!==s&&"object"===typeof s&&"function"===typeof s.then){var c=s,d=u,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=vl(l);if(null!==h){h.flags&=-257,bl(h,l,u,0,t),1&h.mode&&gl(i,c,t),s=c;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(s),t.updateQueue=g}else m.add(s);break e}if(0===(1&t)){gl(i,c,t),gs();break e}s=Error(o(426))}else if(ao&&1&u.mode){var v=vl(l);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),bl(v,l,u,0,t),mo(cl(s,u));break e}}i=s=cl(s,u),4!==Iu&&(Iu=2),null===Uu?Uu=[i]:Uu.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t,Do(i,hl(0,s,t));break e;case 1:u=s;var b=i.type,y=i.stateNode;if(0===(128&i.flags)&&("function"===typeof b.getDerivedStateFromError||null!==y&&"function"===typeof y.componentDidCatch&&(null===Ku||!Ku.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t,Do(i,ml(i,u,t));break e}}i=i.return}while(null!==i)}ks(n)}catch(w){t=w,Ou===n&&null!==n&&(Ou=n=n.return);continue}break}}function ms(){var e=Cu.current;return Cu.current=il,null===e?il:e}function gs(){0!==Iu&&3!==Iu&&2!==Iu||(Iu=4),null===Tu||0===(268435455&Du)&&0===(268435455&Au)||us(Tu,ju)}function vs(e,t){var n=Nu;Nu|=2;var r=ms();for(Tu===e&&ju===t||(Vu=null,ps(e,t));;)try{bs();break}catch(a){hs(e,a)}if(xo(),Nu=n,Cu.current=r,null!==Ou)throw Error(o(261));return Tu=null,ju=0,Iu}function bs(){for(;null!==Ou;)ws(Ou)}function ys(){for(;null!==Ou&&!qe();)ws(Ou)}function ws(e){var t=_u(e.alternate,e,Ru);e.memoizedProps=e.pendingProps,null===t?ks(e):Ou=t,Pu.current=null}function ks(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Yl(n,t,Ru)))return void(Ou=n)}else{if(null!==(n=ql(n,t)))return n.flags&=32767,void(Ou=n);if(null===e)return Iu=6,void(Ou=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Ou=t);Ou=t=e}while(null!==t);0===Iu&&(Iu=5)}function xs(e,t,n){var r=yt,a=zu.transition;try{zu.transition=null,yt=1,function(e,t,n,r){do{Ss()}while(null!==qu);if(0!==(6&Nu))throw Error(o(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-it(n),o=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~o}}(e,i),e===Tu&&(Ou=Tu=null,ju=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Yu||(Yu=!0,Ts(tt,(function(){return Ss(),null}))),i=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||i){i=zu.transition,zu.transition=null;var l=yt;yt=1;var u=Nu;Nu|=4,Pu.current=null,function(e,t){if(ea=Vt,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(k){n=null;break e}var l=0,u=-1,s=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==a&&3!==f.nodeType||(u=l+a),f!==i||0!==r&&3!==f.nodeType||(s=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++c===a&&(u=l),p===i&&++d===r&&(s=l),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===u||-1===s?null:{start:u,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ta={focusedElem:e,selectionRange:n},Vt=!1,Zl=t;null!==Zl;)if(e=(t=Zl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Zl=e;else for(;null!==Zl;){t=Zl;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,b=t.stateNode,y=b.getSnapshotBeforeUpdate(t.elementType===t.type?g:vo(t.type,g),v);b.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(o(163))}}catch(k){Es(t,t.return,k)}if(null!==(e=t.sibling)){e.return=t.return,Zl=e;break}Zl=t.return}m=nu,nu=!1}(e,n),vu(n,e),hr(ta),Vt=!!ea,ta=ea=null,e.current=n,yu(n,e,a),Xe(),Nu=u,yt=l,zu.transition=i}else e.current=n;if(Yu&&(Yu=!1,qu=e,Xu=a),i=e.pendingLanes,0===i&&(Ku=null),function(e){if(ot&&"function"===typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(at,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),as(e,Ge()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if($u)throw $u=!1,e=Qu,Qu=null,e;0!==(1&Xu)&&0!==e.tag&&Ss(),i=e.pendingLanes,0!==(1&i)?e===Ju?Gu++:(Gu=0,Ju=e):Gu=0,Ha()}(e,t,n,r)}finally{zu.transition=a,yt=r}return null}function Ss(){if(null!==qu){var e=wt(Xu),t=zu.transition,n=yt;try{if(zu.transition=null,yt=16>e?16:e,null===qu)var r=!1;else{if(e=qu,qu=null,Xu=0,0!==(6&Nu))throw Error(o(331));var a=Nu;for(Nu|=4,Zl=e.current;null!==Zl;){var i=Zl,l=i.child;if(0!==(16&Zl.flags)){var u=i.deletions;if(null!==u){for(var s=0;s<u.length;s++){var c=u[s];for(Zl=c;null!==Zl;){var d=Zl;switch(d.tag){case 0:case 11:case 15:ru(8,d,i)}var f=d.child;if(null!==f)f.return=d,Zl=f;else for(;null!==Zl;){var p=(d=Zl).sibling,h=d.return;if(iu(d),d===c){Zl=null;break}if(null!==p){p.return=h,Zl=p;break}Zl=h}}}var m=i.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Zl=i}}if(0!==(2064&i.subtreeFlags)&&null!==l)l.return=i,Zl=l;else e:for(;null!==Zl;){if(0!==(2048&(i=Zl).flags))switch(i.tag){case 0:case 11:case 15:ru(9,i,i.return)}var b=i.sibling;if(null!==b){b.return=i.return,Zl=b;break e}Zl=i.return}}var y=e.current;for(Zl=y;null!==Zl;){var w=(l=Zl).child;if(0!==(2064&l.subtreeFlags)&&null!==w)w.return=l,Zl=w;else e:for(l=y;null!==Zl;){if(0!==(2048&(u=Zl).flags))try{switch(u.tag){case 0:case 11:case 15:au(9,u)}}catch(x){Es(u,u.return,x)}if(u===l){Zl=null;break e}var k=u.sibling;if(null!==k){k.return=u.return,Zl=k;break e}Zl=u.return}}if(Nu=a,Ha(),ot&&"function"===typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(at,e)}catch(x){}r=!0}return r}finally{yt=n,zu.transition=t}}return!1}function _s(e,t,n){e=Io(e,t=hl(0,t=cl(n,t),1),1),t=ts(),null!==e&&(vt(e,1,t),as(e,t))}function Es(e,t,n){if(3===e.tag)_s(e,e,n);else for(;null!==t;){if(3===t.tag){_s(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Ku||!Ku.has(r))){t=Io(t,e=ml(t,e=cl(n,e),1),1),e=ts(),null!==t&&(vt(t,1,e),as(t,e));break}}t=t.return}}function Cs(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ts(),e.pingedLanes|=e.suspendedLanes&n,Tu===e&&(ju&n)===n&&(4===Iu||3===Iu&&(130023424&ju)===ju&&500>Ge()-Hu?ps(e,0):Fu|=n),as(e,t)}function Ps(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=ts();null!==(e=To(e,t))&&(vt(e,t,n),as(e,n))}function zs(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Ps(e,n)}function Ns(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),Ps(e,n)}function Ts(e,t){return Ke(e,t)}function Os(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function js(e,t,n,r){return new Os(e,t,n,r)}function Rs(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ls(e,t){var n=e.alternate;return null===n?((n=js(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Is(e,t,n,r,a,i){var l=2;if(r=e,"function"===typeof e)Rs(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case S:return Ms(n.children,a,i,t);case _:l=8,a|=8;break;case E:return(e=js(12,n,t,2|a)).elementType=E,e.lanes=i,e;case N:return(e=js(13,n,t,a)).elementType=N,e.lanes=i,e;case T:return(e=js(19,n,t,a)).elementType=T,e.lanes=i,e;case R:return Ds(n,a,i,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case C:l=10;break e;case P:l=9;break e;case z:l=11;break e;case O:l=14;break e;case j:l=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=js(l,n,t,a)).elementType=e,t.type=r,t.lanes=i,t}function Ms(e,t,n,r){return(e=js(7,e,r,t)).lanes=n,e}function Ds(e,t,n,r){return(e=js(22,e,r,t)).elementType=R,e.lanes=n,e.stateNode={isHidden:!1},e}function As(e,t,n){return(e=js(6,e,null,t)).lanes=n,e}function Fs(e,t,n){return(t=js(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Us(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ws(e,t,n,r,a,o,i,l,u){return e=new Us(e,t,n,l,u),1===t?(t=1,!0===o&&(t|=8)):t=0,o=js(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jo(o),e}function Hs(e){if(!e)return Pa;e:{if(He(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ja(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(ja(n))return Ia(e,n,t)}return t}function Bs(e,t,n,r,a,o,i,l,u){return(e=Ws(n,r,!0,e,0,o,0,l,u)).context=Hs(null),n=e.current,(o=Lo(r=ts(),a=ns(n))).callback=void 0!==t&&null!==t?t:null,Io(n,o,a),e.current.lanes=a,vt(e,a,r),as(e,r),e}function Vs(e,t,n,r){var a=t.current,o=ts(),i=ns(a);return n=Hs(n),null===t.context?t.context=n:t.pendingContext=n,(t=Lo(o,i)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Io(a,t,i))&&(rs(e,a,i,o),Mo(e,a,i)),i}function $s(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Qs(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Ks(e,t){Qs(e,t),(e=e.alternate)&&Qs(e,t)}_u=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Na.current)wl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return wl=!1,function(e,t,n){switch(t.tag){case 3:Tl(t),ho();break;case 5:ii(t);break;case 1:ja(t.type)&&Ma(t);break;case 4:ai(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Ca(bo,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ca(ui,1&ui.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Al(e,t,n):(Ca(ui,1&ui.current),null!==(e=$l(e,t,n))?e.sibling:null);Ca(ui,1&ui.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Bl(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ca(ui,ui.current),r)break;return null;case 22:case 23:return t.lanes=0,El(e,t,n)}return $l(e,t,n)}(e,t,n);wl=0!==(131072&e.flags)}else wl=!1,ao&&0!==(1048576&t.flags)&&Za(t,Qa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vl(e,t),e=t.pendingProps;var a=Oa(t,za.current);Eo(t,n),a=_i(null,t,r,e,a,n);var i=Ei();return t.flags|=1,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ja(r)?(i=!0,Ma(t)):i=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,jo(t),a.updater=Ho,t.stateNode=a,a._reactInternals=t,Qo(t,r,e,n),t=Nl(null,t,r,!0,i,n)):(t.tag=0,ao&&i&&eo(t),kl(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vl(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"===typeof e)return Rs(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===z)return 11;if(e===O)return 14}return 2}(r),e=vo(r,e),a){case 0:t=Pl(null,t,r,e,n);break e;case 1:t=zl(null,t,r,e,n);break e;case 11:t=xl(null,t,r,e,n);break e;case 14:t=Sl(null,t,r,vo(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,Pl(e,t,r,a=t.elementType===r?a:vo(r,a),n);case 1:return r=t.type,a=t.pendingProps,zl(e,t,r,a=t.elementType===r?a:vo(r,a),n);case 3:e:{if(Tl(t),null===e)throw Error(o(387));r=t.pendingProps,a=(i=t.memoizedState).element,Ro(e,t),Ao(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=Ol(e,t,r,n,a=cl(Error(o(423)),t));break e}if(r!==a){t=Ol(e,t,r,n,a=cl(Error(o(424)),t));break e}for(ro=sa(t.stateNode.containerInfo.firstChild),no=t,ao=!0,oo=null,n=Jo(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ho(),r===a){t=$l(e,t,n);break e}kl(e,t,r,n)}t=t.child}return t;case 5:return ii(t),null===e&&so(t),r=t.type,a=t.pendingProps,i=null!==e?e.memoizedProps:null,l=a.children,na(r,a)?l=null:null!==i&&na(r,i)&&(t.flags|=32),Cl(e,t),kl(e,t,l,n),t.child;case 6:return null===e&&so(t),null;case 13:return Al(e,t,n);case 4:return ai(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=Go(t,null,r,n):kl(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,xl(e,t,r,a=t.elementType===r?a:vo(r,a),n);case 7:return kl(e,t,t.pendingProps,n),t.child;case 8:case 12:return kl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,l=a.value,Ca(bo,r._currentValue),r._currentValue=l,null!==i)if(lr(i.value,l)){if(i.children===a.children&&!Na.current){t=$l(e,t,n);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var u=i.dependencies;if(null!==u){l=i.child;for(var s=u.firstContext;null!==s;){if(s.context===r){if(1===i.tag){(s=Lo(-1,n&-n)).tag=2;var c=i.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?s.next=s:(s.next=d.next,d.next=s),c.pending=s}}i.lanes|=n,null!==(s=i.alternate)&&(s.lanes|=n),_o(i.return,n,t),u.lanes|=n;break}s=s.next}}else if(10===i.tag)l=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(l=i.return))throw Error(o(341));l.lanes|=n,null!==(u=l.alternate)&&(u.lanes|=n),_o(l,n,t),l=i.sibling}else l=i.child;if(null!==l)l.return=i;else for(l=i;null!==l;){if(l===t){l=null;break}if(null!==(i=l.sibling)){i.return=l.return,l=i;break}l=l.return}i=l}kl(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Eo(t,n),r=r(a=Co(a)),t.flags|=1,kl(e,t,r,n),t.child;case 14:return a=vo(r=t.type,t.pendingProps),Sl(e,t,r,a=vo(r.type,a),n);case 15:return _l(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:vo(r,a),Vl(e,t),t.tag=1,ja(r)?(e=!0,Ma(t)):e=!1,Eo(t,n),Vo(t,r,a),Qo(t,r,a,n),Nl(null,t,r,!0,e,n);case 19:return Bl(e,t,n);case 22:return El(e,t,n)}throw Error(o(156,t.tag))};var Ys="function"===typeof reportError?reportError:function(e){console.error(e)};function qs(e){this._internalRoot=e}function Xs(e){this._internalRoot=e}function Gs(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Js(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Zs(){}function ec(e,t,n,r,a){var o=n._reactRootContainer;if(o){var i=o;if("function"===typeof a){var l=a;a=function(){var e=$s(i);l.call(e)}}Vs(t,i,e,a)}else i=function(e,t,n,r,a){if(a){if("function"===typeof r){var o=r;r=function(){var e=$s(i);o.call(e)}}var i=Bs(t,r,e,0,null,!1,0,"",Zs);return e._reactRootContainer=i,e[ha]=i.current,Hr(8===e.nodeType?e.parentNode:e),ds(),i}for(;a=e.lastChild;)e.removeChild(a);if("function"===typeof r){var l=r;r=function(){var e=$s(u);l.call(e)}}var u=Ws(e,0,!1,null,0,!1,0,"",Zs);return e._reactRootContainer=u,e[ha]=u.current,Hr(8===e.nodeType?e.parentNode:e),ds((function(){Vs(t,u,n,r)})),u}(n,t,e,a,r);return $s(i)}Xs.prototype.render=qs.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Vs(e,t,null,null)},Xs.prototype.unmount=qs.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;ds((function(){Vs(null,e,null,null)})),t[ha]=null}},Xs.prototype.unstable_scheduleHydration=function(e){if(e){var t=_t();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&0!==t&&t<Rt[n].priority;n++);Rt.splice(n,0,e),0===n&&Dt(e)}},kt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(bt(t,1|n),as(t,Ge()),0===(6&Nu)&&(Bu=Ge()+500,Ha()))}break;case 13:ds((function(){var t=To(e,1);if(null!==t){var n=ts();rs(t,e,1,n)}})),Ks(e,1)}},xt=function(e){if(13===e.tag){var t=To(e,134217728);if(null!==t)rs(t,e,134217728,ts());Ks(e,134217728)}},St=function(e){if(13===e.tag){var t=ns(e),n=To(e,t);if(null!==n)rs(n,e,t,ts());Ks(e,t)}},_t=function(){return yt},Et=function(e,t){var n=yt;try{return yt=e,t()}finally{yt=n}},xe=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=ka(r);if(!a)throw Error(o(90));K(r),J(r,a)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},ze=cs,Ne=ds;var tc={usingClientEntryPoint:!1,Events:[ya,wa,ka,Ce,Pe,cs]},nc={findFiberByHostInstance:ba,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},rc={bundleType:nc.bundleType,version:nc.version,rendererPackageName:nc.rendererPackageName,rendererConfig:nc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=$e(e))?null:e.stateNode},findFiberByHostInstance:nc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{at=ac.inject(rc),ot=ac}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tc,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Gs(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:x,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Gs(e))throw Error(o(299));var n=!1,r="",a=Ys;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=Ws(e,1,!1,null,0,n,0,r,a),e[ha]=t.current,Hr(8===e.nodeType?e.parentNode:e),new qs(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=$e(t))?null:e.stateNode},t.flushSync=function(e){return ds(e)},t.hydrate=function(e,t,n){if(!Js(t))throw Error(o(200));return ec(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Gs(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,a=!1,i="",l=Ys;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Bs(t,null,e,1,null!=n?n:null,a,0,i,l),e[ha]=t.current,Hr(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Xs(t)},t.render=function(e,t,n){if(!Js(t))throw Error(o(200));return ec(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Js(e))throw Error(o(40));return!!e._reactRootContainer&&(ds((function(){ec(null,null,e,!1,(function(){e._reactRootContainer=null,e[ha]=null}))})),!0)},t.unstable_batchedUpdates=cs,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Js(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return ec(e,t,n,!1,r)},t.version="18.2.0-next-9e3b772b8-20220608"},254:(e,t,n)=>{"use strict";var r=n(599);t.s=r.createRoot,r.hydrateRoot},599:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(470)},511:(e,t,n)=>{"use strict";var r=n(390),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,o={},s=null,c=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!u.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:s,ref:c,props:o,_owner:l.current}}t.Fragment=o,t.jsx=s,t.jsxs=s},23:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function b(){}function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var w=y.prototype=new b;w.constructor=y,m(w,v.prototype),w.isPureReactComponent=!0;var k=Array.isArray,x=Object.prototype.hasOwnProperty,S={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var a,o={},i=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)x.call(t,a)&&!_.hasOwnProperty(a)&&(o[a]=t[a]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var s=Array(u),c=0;c<u;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(a in u=e.defaultProps)void 0===o[a]&&(o[a]=u[a]);return{$$typeof:n,type:e,key:i,ref:l,props:o,_owner:S.current}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function z(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function N(e,t,a,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var u=!1;if(null===e)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0}}if(u)return i=i(u=e),e=""===o?"."+z(u,0):o,k(i)?(a="",null!=e&&(a=e.replace(P,"$&/")+"/"),N(i,t,a,"",(function(e){return e}))):null!=i&&(C(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(u=0,o=""===o?".":o+":",k(e))for(var s=0;s<e.length;s++){var c=o+z(l=e[s],s);u+=N(l,t,a,c,i)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),s=0;!(l=e.next()).done;)u+=N(l=l.value,t,a,c=o+z(l,s++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function T(e,t,n){if(null==e)return e;var r=[],a=0;return N(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var j={current:null},R={transition:null},L={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:R,ReactCurrentOwner:S};t.Children={map:T,forEach:function(e,t,n){T(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=a,t.Profiler=i,t.PureComponent=y,t.StrictMode=o,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=m({},e.props),o=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=S.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)x.call(t,s)&&!_.hasOwnProperty(s)&&(a[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){u=Array(s);for(var c=0;c<s;c++)u[c]=arguments[c+2];a.children=u}return{$$typeof:n,type:e.type,key:o,ref:i,props:a,_owner:l}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=R.transition;R.transition={};try{e()}finally{R.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return j.current.useCallback(e,t)},t.useContext=function(e){return j.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return j.current.useDeferredValue(e)},t.useEffect=function(e,t){return j.current.useEffect(e,t)},t.useId=function(){return j.current.useId()},t.useImperativeHandle=function(e,t,n){return j.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return j.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return j.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return j.current.useMemo(e,t)},t.useReducer=function(e,t,n){return j.current.useReducer(e,t,n)},t.useRef=function(e){return j.current.useRef(e)},t.useState=function(e){return j.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return j.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return j.current.useTransition()},t.version="18.2.0"},390:(e,t,n)=>{"use strict";e.exports=n(23)},559:(e,t,n)=>{"use strict";e.exports=n(511)},17:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<o(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var l=2*(r+1)-1,u=e[l],s=l+1,c=e[s];if(0>o(u,n))s<a&&0>o(c,u)?(e[r]=c,e[s]=n,r=s):(e[r]=u,e[l]=n,r=l);else{if(!(s<a&&0>o(c,n)))break e;e[r]=c,e[s]=n,r=s}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,u=l.now();t.unstable_now=function(){return l.now()-u}}var s=[],c=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(s,t)}t=r(c)}}function k(e){if(g=!1,w(e),!m)if(null!==r(s))m=!0,R(x);else{var t=r(c);null!==t&&L(k,t.startTime-e)}}function x(e,n){m=!1,g&&(g=!1,b(C),C=-1),h=!0;var o=p;try{for(w(n),f=r(s);null!==f&&(!(f.expirationTime>n)||e&&!N());){var i=f.callback;if("function"===typeof i){f.callback=null,p=f.priorityLevel;var l=i(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?f.callback=l:f===r(s)&&a(s),w(n)}else a(s);f=r(s)}if(null!==f)var u=!0;else{var d=r(c);null!==d&&L(k,d.startTime-n),u=!1}return u}finally{f=null,p=o,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,_=!1,E=null,C=-1,P=5,z=-1;function N(){return!(t.unstable_now()-z<P)}function T(){if(null!==E){var e=t.unstable_now();z=e;var n=!0;try{n=E(!0,e)}finally{n?S():(_=!1,E=null)}}else _=!1}if("function"===typeof y)S=function(){y(T)};else if("undefined"!==typeof MessageChannel){var O=new MessageChannel,j=O.port2;O.port1.onmessage=T,S=function(){j.postMessage(null)}}else S=function(){v(T,0)};function R(e){E=e,_||(_=!0,S())}function L(e,n){C=v((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,R(x))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(s)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,o){var i=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?i+o:i:o=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>i?(e.sortIndex=o,n(c,e),null===r(s)&&e===r(c)&&(g?(b(C),C=-1):g=!0,L(k,o-i))):(e.sortIndex=l,n(s,e),m||h||(m=!0,R(x))),e},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},124:(e,t,n)=>{"use strict";e.exports=n(17)},679:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),u=0;u<o.length;u++){var s=o[u];if(!l(s))return!1;var c=e[s],d=t[s];if(!1===(a=n?n.call(r,c,d,s):void 0)||void 0===a&&c!==d)return!1}return!0}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="/Portfolio-site/",n.nc=void 0,(()=>{"use strict";var e=n(390),t=n(254);var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};Object.create;function a(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;var o=n(679),i=n.n(o),l="-ms-",u="-moz-",s="-webkit-",c="comm",d="rule",f="decl",p="@import",h="@keyframes",m="@layer",g=Math.abs,v=String.fromCharCode,b=Object.assign;function y(e){return e.trim()}function w(e,t){return(e=t.exec(e))?e[0]:e}function k(e,t,n){return e.replace(t,n)}function x(e,t,n){return e.indexOf(t,n)}function S(e,t){return 0|e.charCodeAt(t)}function _(e,t,n){return e.slice(t,n)}function E(e){return e.length}function C(e){return e.length}function P(e,t){return t.push(e),e}function z(e,t){return e.filter((function(e){return!w(e,t)}))}var N=1,T=1,O=0,j=0,R=0,L="";function I(e,t,n,r,a,o,i,l){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:N,column:T,length:i,return:"",siblings:l}}function M(e,t){return b(I("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function D(e){for(;e.root;)e=M(e.root,{children:[e]});P(e,e.siblings)}function A(){return R=j>0?S(L,--j):0,T--,10===R&&(T=1,N--),R}function F(){return R=j<O?S(L,j++):0,T++,10===R&&(T=1,N++),R}function U(){return S(L,j)}function W(){return j}function H(e,t){return _(L,e,t)}function B(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function V(e){return N=T=1,O=E(L=e),j=0,[]}function $(e){return L="",e}function Q(e){return y(H(j-1,q(91===e?e+2:40===e?e+1:e)))}function K(e){for(;(R=U())&&R<33;)F();return B(e)>2||B(R)>3?"":" "}function Y(e,t){for(;--t&&F()&&!(R<48||R>102||R>57&&R<65||R>70&&R<97););return H(e,W()+(t<6&&32==U()&&32==F()))}function q(e){for(;F();)switch(R){case e:return j;case 34:case 39:34!==e&&39!==e&&q(R);break;case 40:41===e&&q(e);break;case 92:F()}return j}function X(e,t){for(;F()&&e+R!==57&&(e+R!==84||47!==U()););return"/*"+H(t,j-1)+"*"+v(47===e?e:F())}function G(e){for(;!B(U());)F();return H(e,j)}function J(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Z(e,t,n,r){switch(e.type){case m:if(e.children.length)break;case p:case f:return e.return=e.return||e.value;case c:return"";case h:return e.return=e.value+"{"+J(e.children,r)+"}";case d:if(!E(e.value=e.props.join(",")))return""}return E(n=J(e.children,r))?e.return=e.value+"{"+n+"}":""}function ee(e,t,n){switch(function(e,t){return 45^S(e,0)?(((t<<2^S(e,0))<<2^S(e,1))<<2^S(e,2))<<2^S(e,3):0}(e,t)){case 5103:return s+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return s+e+e;case 4789:return u+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return s+e+u+e+l+e+e;case 5936:switch(S(e,t+11)){case 114:return s+e+l+k(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return s+e+l+k(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return s+e+l+k(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return s+e+l+e+e;case 6165:return s+e+l+"flex-"+e+e;case 5187:return s+e+k(e,/(\w+).+(:[^]+)/,s+"box-$1$2"+l+"flex-$1$2")+e;case 5443:return s+e+l+"flex-item-"+k(e,/flex-|-self/g,"")+(w(e,/flex-|baseline/)?"":l+"grid-row-"+k(e,/flex-|-self/g,""))+e;case 4675:return s+e+l+"flex-line-pack"+k(e,/align-content|flex-|-self/g,"")+e;case 5548:return s+e+l+k(e,"shrink","negative")+e;case 5292:return s+e+l+k(e,"basis","preferred-size")+e;case 6060:return s+"box-"+k(e,"-grow","")+s+e+l+k(e,"grow","positive")+e;case 4554:return s+k(e,/([^-])(transform)/g,"$1"+s+"$2")+e;case 6187:return k(k(k(e,/(zoom-|grab)/,s+"$1"),/(image-set)/,s+"$1"),e,"")+e;case 5495:case 3959:return k(e,/(image-set\([^]*)/,s+"$1$`$1");case 4968:return k(k(e,/(.+:)(flex-)?(.*)/,s+"box-pack:$3"+l+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+s+e+e;case 4200:if(!w(e,/flex-|baseline/))return l+"grid-column-align"+_(e,t)+e;break;case 2592:case 3360:return l+k(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,w(e.props,/grid-\w+-end/)}))?~x(e+(n=n[t].value),"span",0)?e:l+k(e,"-start","")+e+l+"grid-row-span:"+(~x(n,"span",0)?w(n,/\d+/):+w(n,/\d+/)-+w(e,/\d+/))+";":l+k(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return w(e.props,/grid-\w+-start/)}))?e:l+k(k(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return k(e,/(.+)-inline(.+)/,s+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(E(e)-1-t>6)switch(S(e,t+1)){case 109:if(45!==S(e,t+4))break;case 102:return k(e,/(.+:)(.+)-([^]+)/,"$1"+s+"$2-$3$1"+u+(108==S(e,t+3)?"$3":"$2-$3"))+e;case 115:return~x(e,"stretch",0)?ee(k(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return k(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,a,o,i,u){return l+n+":"+r+u+(a?l+n+"-span:"+(o?i:+i-+r)+u:"")+e}));case 4949:if(121===S(e,t+6))return k(e,":",":"+s)+e;break;case 6444:switch(S(e,45===S(e,14)?18:11)){case 120:return k(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+s+(45===S(e,14)?"inline-":"")+"box$3$1"+s+"$2$3$1"+l+"$2box$3")+e;case 100:return k(e,":",":"+l)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return k(e,"scroll-","scroll-snap-")+e}return e}function te(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case f:return void(e.return=ee(e.value,e.length,n));case h:return J([M(e,{value:k(e.value,"@","@"+s)})],r);case d:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(w(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":D(M(e,{props:[k(t,/:(read-\w+)/,":"+u+"$1")]})),D(M(e,{props:[t]})),b(e,{props:z(n,r)});break;case"::placeholder":D(M(e,{props:[k(t,/:(plac\w+)/,":"+s+"input-$1")]})),D(M(e,{props:[k(t,/:(plac\w+)/,":"+u+"$1")]})),D(M(e,{props:[k(t,/:(plac\w+)/,l+"input-$1")]})),D(M(e,{props:[t]})),b(e,{props:z(n,r)})}return""}))}}function ne(e){return $(re("",null,null,null,[""],e=V(e),0,[0],e))}function re(e,t,n,r,a,o,i,l,u){for(var s=0,c=0,d=i,f=0,p=0,h=0,m=1,b=1,y=1,w=0,_="",C=a,z=o,N=r,T=_;b;)switch(h=w,w=F()){case 40:if(108!=h&&58==S(T,d-1)){-1!=x(T+=k(Q(w),"&","&\f"),"&\f",g(s?l[s-1]:0))&&(y=-1);break}case 34:case 39:case 91:T+=Q(w);break;case 9:case 10:case 13:case 32:T+=K(h);break;case 92:T+=Y(W()-1,7);continue;case 47:switch(U()){case 42:case 47:P(oe(X(F(),W()),t,n,u),u);break;default:T+="/"}break;case 123*m:l[s++]=E(T)*y;case 125*m:case 59:case 0:switch(w){case 0:case 125:b=0;case 59+c:-1==y&&(T=k(T,/\f/g,"")),p>0&&E(T)-d&&P(p>32?ie(T+";",r,n,d-1,u):ie(k(T," ","")+";",r,n,d-2,u),u);break;case 59:T+=";";default:if(P(N=ae(T,t,n,s,c,a,l,_,C=[],z=[],d,o),o),123===w)if(0===c)re(T,t,N,N,C,o,d,l,z);else switch(99===f&&110===S(T,3)?100:f){case 100:case 108:case 109:case 115:re(e,N,N,r&&P(ae(e,N,N,0,0,a,l,_,a,C=[],d,z),z),a,z,d,l,r?C:z);break;default:re(T,N,N,N,[""],z,0,l,z)}}s=c=p=0,m=y=1,_=T="",d=i;break;case 58:d=1+E(T),p=h;default:if(m<1)if(123==w)--m;else if(125==w&&0==m++&&125==A())continue;switch(T+=v(w),w*m){case 38:y=c>0?1:(T+="\f",-1);break;case 44:l[s++]=(E(T)-1)*y,y=1;break;case 64:45===U()&&(T+=Q(F())),f=U(),c=d=E(_=T+=G(W())),w++;break;case 45:45===h&&2==E(T)&&(m=0)}}return o}function ae(e,t,n,r,a,o,i,l,u,s,c,f){for(var p=a-1,h=0===a?o:[""],m=C(h),v=0,b=0,w=0;v<r;++v)for(var x=0,S=_(e,p+1,p=g(b=i[v])),E=e;x<m;++x)(E=y(b>0?h[x]+" "+S:k(S,/&\f/g,h[x])))&&(u[w++]=E);return I(e,t,n,0===a?d:l,u,s,c,f)}function oe(e,t,n,r){return I(e,t,n,c,v(R),_(e,2,-2),0,r)}function ie(e,t,n,r,a){return I(e,t,n,f,_(e,0,r),_(e,r+1,-1),r,a)}const le={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var ue="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Portfolio-site",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/Portfolio-site",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/Portfolio-site",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",se="active",ce="data-styled-version",de="6.1.6",fe="/*!sc*/\n",pe="undefined"!=typeof window&&"HTMLElement"in window,he=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Portfolio-site",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Portfolio-site",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/Portfolio-site",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/Portfolio-site",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/Portfolio-site",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Portfolio-site",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Portfolio-site",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/Portfolio-site",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/Portfolio-site",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/Portfolio-site",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),me={},ge=(new Set,Object.freeze([])),ve=Object.freeze({});function be(e,t,n){return void 0===n&&(n=ve),e.theme!==n.theme&&e.theme||t||n.theme}var ye=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),we=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ke=/(^-|-$)/g;function xe(e){return e.replace(we,"-").replace(ke,"")}var Se=/(a)(d)/gi,_e=52,Ee=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ce(e){var t,n="";for(t=Math.abs(e);t>_e;t=t/_e|0)n=Ee(t%_e)+n;return(Ee(t%_e)+n).replace(Se,"$1-$2")}var Pe,ze=5381,Ne=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Te=function(e){return Ne(ze,e)};function Oe(e){return Ce(Te(e)>>>0)}function je(e){return e.displayName||e.name||"Component"}function Re(e){return"string"==typeof e&&!0}var Le="function"==typeof Symbol&&Symbol.for,Ie=Le?Symbol.for("react.memo"):60115,Me=Le?Symbol.for("react.forward_ref"):60112,De={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ae={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Fe={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ue=((Pe={})[Me]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Pe[Ie]=Fe,Pe);function We(e){return("type"in(t=e)&&t.type.$$typeof)===Ie?Fe:"$$typeof"in e?Ue[e.$$typeof]:De;var t}var He=Object.defineProperty,Be=Object.getOwnPropertyNames,Ve=Object.getOwnPropertySymbols,$e=Object.getOwnPropertyDescriptor,Qe=Object.getPrototypeOf,Ke=Object.prototype;function Ye(e,t,n){if("string"!=typeof t){if(Ke){var r=Qe(t);r&&r!==Ke&&Ye(e,r,n)}var a=Be(t);Ve&&(a=a.concat(Ve(t)));for(var o=We(e),i=We(t),l=0;l<a.length;++l){var u=a[l];if(!(u in Ae||n&&n[u]||i&&u in i||o&&u in o)){var s=$e(t,u);try{He(e,u,s)}catch(e){}}}}return e}function qe(e){return"function"==typeof e}function Xe(e){return"object"==typeof e&&"styledComponentId"in e}function Ge(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Je(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ze(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function et(e,t,n){if(void 0===n&&(n=!1),!n&&!Ze(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=et(e[r],t[r]);else if(Ze(t))for(var r in t)e[r]=et(e[r],t[r]);return e}function tt(e,t){Object.defineProperty(e,"toString",{value:t})}function nt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var rt=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw nt(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var o=r;o<a;o++)this.groupSizes[o]=0}for(var i=this.indexOfGroup(e+1),l=(o=0,t.length);o<l;o++)this.tag.insertRule(i,t[o])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,o=r;o<a;o++)t+="".concat(this.tag.getRule(o)).concat(fe);return t},e}(),at=new Map,ot=new Map,it=1,lt=function(e){if(at.has(e))return at.get(e);for(;ot.has(it);)it++;var t=it++;return at.set(e,t),ot.set(t,e),t},ut=function(e,t){it=t+1,at.set(e,t),ot.set(t,e)},st="style[".concat(ue,"][").concat(ce,'="').concat(de,'"]'),ct=new RegExp("^".concat(ue,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),dt=function(e,t,n){for(var r,a=n.split(","),o=0,i=a.length;o<i;o++)(r=a[o])&&e.registerName(t,r)},ft=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(fe),a=[],o=0,i=r.length;o<i;o++){var l=r[o].trim();if(l){var u=l.match(ct);if(u){var s=0|parseInt(u[1],10),c=u[2];0!==s&&(ut(c,s),dt(e,c,u[3]),e.getTag().insertRules(s,a)),a.length=0}else a.push(l)}}};function pt(){return n.nc}var ht=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(ue,"]")));return t[t.length-1]}(n),o=void 0!==a?a.nextSibling:null;r.setAttribute(ue,se),r.setAttribute(ce,de);var i=pt();return i&&r.setAttribute("nonce",i),n.insertBefore(r,o),r},mt=function(){function e(e){this.element=ht(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}throw nt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),gt=function(){function e(e){this.element=ht(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),vt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),bt=pe,yt={isServer:!pe,useCSSOMInjection:!he},wt=function(){function e(e,t,n){void 0===e&&(e=ve),void 0===t&&(t={});var a=this;this.options=r(r({},yt),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&pe&&bt&&(bt=!1,function(e){for(var t=document.querySelectorAll(st),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(ue)!==se&&(ft(e,a),a.parentNode&&a.parentNode.removeChild(a))}}(this)),tt(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return ot.get(e)}(n);if(void 0===a)return"continue";var o=e.names.get(a),i=t.getGroup(n);if(void 0===o||0===i.length)return"continue";var l="".concat(ue,".g").concat(n,'[id="').concat(a,'"]'),u="";void 0!==o&&o.forEach((function(e){e.length>0&&(u+="".concat(e,","))})),r+="".concat(i).concat(l,'{content:"').concat(u,'"}').concat(fe)},o=0;o<n;o++)a(o);return r}(a)}))}return e.registerId=function(e){return lt(e)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(r(r({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new vt(n):t?new mt(n):new gt(n)}(this.options),new rt(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(lt(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(lt(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(lt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),kt=/&/g,xt=/^\s*\/\/.*$/gm;function St(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=St(e.children,t)),e}))}function _t(e){var t,n,r,a=void 0===e?ve:e,o=a.options,i=void 0===o?ve:o,l=a.plugins,u=void 0===l?ge:l,s=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},c=u.slice();c.push((function(e){e.type===d&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(kt,n).replace(r,s))})),i.prefix&&c.push(te),c.push(Z);var f=function(e,a,o,l){void 0===a&&(a=""),void 0===o&&(o=""),void 0===l&&(l="&"),t=l,n=a,r=new RegExp("\\".concat(n,"\\b"),"g");var u=e.replace(xt,""),s=ne(o||a?"".concat(o," ").concat(a," { ").concat(u," }"):u);i.namespace&&(s=St(s,i.namespace));var d,f=[];return J(s,function(e){var t=C(e);return function(n,r,a,o){for(var i="",l=0;l<t;l++)i+=e[l](n,r,a,o)||"";return i}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return f.hash=u.length?u.reduce((function(e,t){return t.name||nt(15),Ne(e,t.name)}),ze).toString():"",f}var Et=new wt,Ct=_t(),Pt=e.createContext({shouldForwardProp:void 0,styleSheet:Et,stylis:Ct}),zt=(Pt.Consumer,e.createContext(void 0));function Nt(){return(0,e.useContext)(Pt)}function Tt(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],a=n[1],o=Nt().styleSheet,l=(0,e.useMemo)((function(){var e=o;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,o]),u=(0,e.useMemo)((function(){return _t({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})}),[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)((function(){i()(r,t.stylisPlugins)||a(t.stylisPlugins)}),[t.stylisPlugins]);var s=(0,e.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:l,stylis:u}}),[t.shouldForwardProp,l,u]);return e.createElement(Pt.Provider,{value:s},e.createElement(zt.Provider,{value:u},t.children))}var Ot=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Ct);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,tt(this,(function(){throw nt(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Ct),this.name+e.hash},e}(),jt=function(e){return e>="A"&&e<="Z"};function Rt(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;jt(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Lt=function(e){return null==e||!1===e||""===e},It=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Lt(i)&&(Array.isArray(i)&&i.isCss||qe(i)?r.push("".concat(Rt(o),":"),i,";"):Ze(i)?r.push.apply(r,a(a(["".concat(o," {")],It(i),!1),["}"],!1)):r.push("".concat(Rt(o),": ").concat((t=o,null==(n=i)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in le||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Mt(e,t,n,r){return Lt(e)?[]:Xe(e)?[".".concat(e.styledComponentId)]:qe(e)?!qe(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:Mt(e(t),t,n,r):e instanceof Ot?n?(e.inject(n,r),[e.getName(r)]):[e]:Ze(e)?It(e):Array.isArray(e)?Array.prototype.concat.apply(ge,e.map((function(e){return Mt(e,t,n,r)}))):[e.toString()];var a}function Dt(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(qe(n)&&!Xe(n))return!1}return!0}var At=Te(de),Ft=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Dt(e),this.componentId=t,this.baseHash=Ne(At,t),this.baseStyle=n,wt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Ge(r,this.staticRulesId);else{var a=Je(Mt(this.rules,e,t,n)),o=Ce(Ne(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,o)){var i=n(a,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,i)}r=Ge(r,o),this.staticRulesId=o}else{for(var l=Ne(this.baseHash,n.hash),u="",s=0;s<this.rules.length;s++){var c=this.rules[s];if("string"==typeof c)u+=c;else if(c){var d=Je(Mt(c,e,t,n));l=Ne(l,d+s),u+=d}}if(u){var f=Ce(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(u,".".concat(f),void 0,this.componentId)),r=Ge(r,f)}}return r},e}(),Ut=e.createContext(void 0);Ut.Consumer;function Wt(t){var n=e.useContext(Ut),a=(0,e.useMemo)((function(){return function(e,t){if(!e)throw nt(14);if(qe(e))return e(t);if(Array.isArray(e)||"object"!=typeof e)throw nt(8);return t?r(r({},t),e):e}(t.theme,n)}),[t.theme,n]);return t.children?e.createElement(Ut.Provider,{value:a},t.children):null}var Ht={};new Set;function Bt(t,n,a){var o=Xe(t),i=t,l=!Re(t),u=n.attrs,s=void 0===u?ge:u,c=n.componentId,d=void 0===c?function(e,t){var n="string"!=typeof e?"sc":xe(e);Ht[n]=(Ht[n]||0)+1;var r="".concat(n,"-").concat(Oe(de+n+Ht[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,f=n.displayName,p=void 0===f?function(e){return Re(e)?"styled.".concat(e):"Styled(".concat(je(e),")")}(t):f,h=n.displayName&&n.componentId?"".concat(xe(n.displayName),"-").concat(n.componentId):n.componentId||d,m=o&&i.attrs?i.attrs.concat(s).filter(Boolean):s,g=n.shouldForwardProp;if(o&&i.shouldForwardProp){var v=i.shouldForwardProp;if(n.shouldForwardProp){var b=n.shouldForwardProp;g=function(e,t){return v(e,t)&&b(e,t)}}else g=v}var y=new Ft(a,h,o?i.componentStyle:void 0);function w(t,n){return function(t,n,a){var o=t.attrs,i=t.componentStyle,l=t.defaultProps,u=t.foldedComponentIds,s=t.styledComponentId,c=t.target,d=e.useContext(Ut),f=Nt(),p=t.shouldForwardProp||f.shouldForwardProp,h=be(n,d,l)||ve,m=function(e,t,n){for(var a,o=r(r({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var l=qe(a=e[i])?a(o):a;for(var u in l)o[u]="className"===u?Ge(o[u],l[u]):"style"===u?r(r({},o[u]),l[u]):l[u]}return t.className&&(o.className=Ge(o.className,t.className)),o}(o,n,h),g=m.as||c,v={};for(var b in m)void 0===m[b]||"$"===b[0]||"as"===b||"theme"===b&&m.theme===h||("forwardedAs"===b?v.as=m.forwardedAs:p&&!p(b,g)||(v[b]=m[b]));var y=function(e,t){var n=Nt();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,m),w=Ge(u,s);return y&&(w+=" "+y),m.className&&(w+=" "+m.className),v[Re(g)&&!ye.has(g)?"class":"className"]=w,v.ref=a,(0,e.createElement)(g,v)}(k,t,n)}w.displayName=p;var k=e.forwardRef(w);return k.attrs=m,k.componentStyle=y,k.displayName=p,k.shouldForwardProp=g,k.foldedComponentIds=o?Ge(i.foldedComponentIds,i.styledComponentId):"",k.styledComponentId=h,k.target=o?i.target:t,Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)et(e,a[r],!0);return e}({},i.defaultProps,e):e}}),tt(k,(function(){return".".concat(k.styledComponentId)})),l&&Ye(k,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),k}function Vt(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var $t=function(e){return Object.assign(e,{isCss:!0})};function Qt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(qe(e)||Ze(e))return $t(Mt(Vt(ge,a([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Mt(r):$t(Mt(Vt(r,t)))}function Kt(e,t,n){if(void 0===n&&(n=ve),!t)throw nt(1,t);var o=function(r){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,n,Qt.apply(void 0,a([r],o,!1)))};return o.attrs=function(a){return Kt(e,t,r(r({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},o.withConfig=function(a){return Kt(e,t,r(r({},n),a))},o}var Yt=function(e){return Kt(Bt,e)},qt=Yt;ye.forEach((function(e){qt[e]=Yt(e)}));var Xt=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Dt(e),wt.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var a=r(Je(Mt(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&wt.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function Gt(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];var i=Qt.apply(void 0,a([t],n,!1)),l="sc-global-".concat(Oe(JSON.stringify(i))),u=new Xt(i,l),s=function(t){var n=Nt(),r=e.useContext(Ut),a=e.useRef(n.styleSheet.allocateGSInstance(l)).current;return n.styleSheet.server&&c(a,t,n.styleSheet,r,n.stylis),e.useLayoutEffect((function(){if(!n.styleSheet.server)return c(a,t,n.styleSheet,r,n.stylis),function(){return u.removeStyles(a,n.styleSheet)}}),[a,t,n.styleSheet,r,n.stylis]),null};function c(e,t,n,a,o){if(u.isStatic)u.renderStyles(e,me,n,o);else{var i=r(r({},t),{theme:be(t,a,s.defaultProps)});u.renderStyles(e,i,n,o)}}return e.memo(s)}function Jt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Je(Qt.apply(void 0,a([e],t,!1))),o=Oe(r);return new Ot(o,r)}(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString(),n=pt(),r=Je([n&&'nonce="'.concat(n,'"'),"".concat(ue,'="true"'),"".concat(ce,'="').concat(de,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw nt(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw nt(2);var a=((n={})[ue]="",n[ce]=de,n.dangerouslySetInnerHTML={__html:t.instance.toString()},n),o=pt();return o&&(a.nonce=o),[e.createElement("style",r({},a,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new wt({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw nt(2);return e.createElement(Tt,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw nt(3)}})(),"__sc-".concat(ue,"__");var Zt=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},en=Qt(nn||(nn=Zt(["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"],["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"]))),tn=Gt(rn||(rn=Zt(["",""],["",""])),en);var nn,rn;const an="600px",on="900px",ln=function(){return Qt`
    @media (max-width: ${an}) {
      ${Qt(...arguments)}
    }
  `},un=function(){return Qt`
    @media (max-width: ${on}) {
      ${Qt(...arguments)}
    }
  `},sn=qt.header`
  background-color: var(--color-main-background);
  color: var(--font-main-white);
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 10rem;
  box-sizing: border-box;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  z-index: 1;

  ${un`
    padding: 0 2rem;
    font-size: 1.5rem;
  `}

  .header__content {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 15rem 0;

    ${un`
    display: flex;
    padding: 10rem 0;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 90%;
      `}

    ${ln`
      padding: 7rem 0;
      `}
  }

  .header__title,
  .header__name,
  .header__profession,
  .header__description,
  .header__link {
    transition: var(--transition);
    width: 100%;
  }

  .header__title {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;

    ${un`
    font-size: 2.75rem;
      `}
  }

  .header__name {
    font-size: 4.5rem;
    color: var(--main-color-blue);
    margin-bottom: 1.5rem;

    ${un`
    font-size: 3.75rem;
      `}
  }

  .header__profession {
    font-size: 3.25rem;
    margin-bottom: 2rem;

    ${un`
    font-size: 3rem;
      `}
  }

  .header__description {
    font-size: 2.25rem;
    max-width: 50ch;
    margin-bottom: 2.5rem;

    ${un`
    font-size: 2rem;
      `}

    ${ln`
    font-size: 2rem;
      `}
  }

  .header__speciality {
    color: var(--main-color-blue);
  }

  .header__link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: max-content;
    background-color: var(--main-color-blue);
    color: var(--font-main-white);
    padding: 1rem 2rem;
    border-radius: var(--border-radius);
    text-decoration: none;
    font-size: 2.25rem;
    transition: var(--transition) ease;
    border: 3px solid var(--main-color-blue);

    &:hover,
    &:focus {
      background-color: darken(var(--main-color-blue), 10%);
      border: 3px solid var(--main-color-blue);
      color: var(--font-main-white);
    }

    &:active {
      background-color: lighten(var(--main-color-blue), 10%);
      border-color: lighten(var(--main-color-blue), 10%);
      transform: translateY(2px);
    }

    ${un`
    font-size: 2rem;
  `}

    ${ln`
    padding: 0.5rem 0.75rem;
    font-size: 1.5rem;
  `}
  }

  .header__link--icon {
    margin-left: 0.5rem auto;
    width: 50px;
    height: 50px;
    fill: var(--font-main-white);
    transition: all 0.3s ease;
    padding-left: 0.75rem;

    ${un`
    width: 36px;
    height: 36px;
    `}

    ${ln`
    width: 26px;
    height: 26px;
    `}

    .header__link:hover & {
      fill: var(--font-main-white);
    }
  }

  ${ln`
    padding: 1rem 0;
    text-align: left;
    
    .header__title {
      font-size: 2rem;
    }
    .header__name {
      font-size: 2.2rem;
    }
    .header__profession {
      font-size: 1.75rem;
    }
    .header__description {
      font-size: 1.1rem;
    }
    .header__link {
      font-size: 1.1rem;
    }
  `}
`,cn=Jt`
0%{
   transform: translateX(0);
} 
100%{
   transform: translateX(-50%);
}
`,dn=Jt`
   0% {
   transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`,fn=Jt`
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(5deg);
  }
  20% {
    transform: rotate(-5deg);
  }
  30% {
    transform: rotate(5deg);
  }
  40% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(5deg);
  }
  60% {
    transform: rotate(-5deg);
  }
  70% {
    transform: rotate(5deg);
  }
  80% {
    transform: rotate(-5deg);
  }
  90% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(0deg);
  }
`,pn=Jt`
0% {
    box-shadow: 0 0 4px var(--main-color-blue);
  }
  50% {
    box-shadow: 0 0 12px var(--main-color-blue);
  }
  100% {
    box-shadow: 0 0 4px var(--main-color-blue);
  }
`,hn=qt.nav`
  padding: 1rem 5rem;
  width: 100%;
  box-sizing: border-box;
  background-color: var(--color-navbar-background);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: var(--font-main-white);
  height: 6rem;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1000;

  ${un`
  height: 5rem;
  padding: 1rem 1.5rem;
    `}

  ${ln`
  background-color: transparent;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  height: 0;
  padding: 0 0;
    `}

  .navbar__container {
    max-width: var(--max-width);
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .navbar__toggle-icon {
    display: none;
    cursor: pointer;
    position: fixed;
    top: 1rem;
    right: 1rem;
    filter: var(--icon-color-white);
    z-index: 999;
    width: 40px;
    height: 40px;
    transition: var(--transition), transform 0.3s ease;
    animation: ${fn} 2s ease-in-out;
    ${ln`
      display: block;
    `}

    &:hover, &:focus {
      filter: var(--icon-color-blue);
      transform: rotate(15deg);
    }

    &:active {
      transform: scale(0.9);
    }

    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .navbar__links {
    max-width: 1500px;
    display: flex;
    gap: 2.5rem;
    align-items: center;
    transition: var(--transition) ease-in-out;
    transform: translateX(0%);
    opacity: 1;
    visibility: visible;

    ${un`
      gap: 1.5rem;
    `}

    ${ln`
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      position: fixed;
      padding: 1rem 2.5rem;
      gap: 3rem;
      top: 0;
      right: 0;
      height: 100vh;
      width: 40vw;
      min-width: min-content;
      background-color: var(--color-navbar-background);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      z-index: 1;
      padding-top: 6rem;
      align-items: flex-start;
      display: flex;
      transform: ${e=>e.open?"translateX(0%)":"translateX(100%)"};
      opacity: ${e=>e.open?"1":"0"};
      visibility: ${e=>e.open?"visible":"hidden"};
      transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out, visibility 0s linear ${e=>e.open?"0s":"0.5s"};
    `}
  }

  .navbar__link {
    position: relative;
    color: var(--font-main-white);
    text-decoration: none;
    font-size: 2rem;
    transition: var(--transition);
    padding-bottom: 0.5rem;
    white-space: nowrap;

    ${un`
      font-size: 1.5rem

    `}

    ${ln`
      font-size: 1.5rem
    `}

    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 3px;
      bottom: 0;
      right: 0;
      background-color: var(--main-color-blue);
      transition: width 0.4s ease;
    }

    &:hover::after {
      width: 100%;
      left: 0;
      right: auto;
    }

    &:hover {
      color: var(--main-color-blue);
    }
  }
`;var mn;function gn(){return gn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gn.apply(this,arguments)}function vn(t,n){let{title:r,titleId:a,...o}=t;return e.createElement("svg",gn({xmlns:"http://www.w3.org/2000/svg",height:16,width:14,viewBox:"0 0 448 512",ref:n,"aria-labelledby":a},o),r?e.createElement("title",{id:a},r):null,mn||(mn=e.createElement("path",{opacity:1,fill:"#1E3050",d:"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"})))}const bn=e.forwardRef(vn);n.p;var yn;function wn(){return wn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wn.apply(this,arguments)}function kn(t,n){let{title:r,titleId:a,...o}=t;return e.createElement("svg",wn({xmlns:"http://www.w3.org/2000/svg",height:16,width:12,viewBox:"0 0 384 512",ref:n,"aria-labelledby":a},o),r?e.createElement("title",{id:a},r):null,yn||(yn=e.createElement("path",{opacity:1,fill:"#1E3050",d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"})))}const xn=e.forwardRef(kn),Sn=(n.p,qt.div`
  .arrow-up-icon {
    position: fixed;
    bottom: 1%;
    right: 1%;
    width: 90px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    cursor: pointer;
    z-index: 1000;
    filter: var(--icon-color-white);
    transition: var(--transition), transform 0.3s ease;
    animation: ${dn} 2s infinite ease-in-out;

    ${un`
    width: 60px;
    height: 60px;
    `}

    &:hover,
    &:focus {
      filter: var(--icon-color-blue);
    }

    &:active {
      transform: scale(0.9);
    }

    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`);var _n;function En(){return En=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},En.apply(this,arguments)}function Cn(t,n){let{title:r,titleId:a,...o}=t;return e.createElement("svg",En({width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":a},o),r?e.createElement("title",{id:a},r):null,_n||(_n=e.createElement("path",{d:"M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z",fill:"#0F0F0F"})))}const Pn=e.forwardRef(Cn);n.p;var zn=n(559);const Nn=()=>{const[t,n]=(0,e.useState)(!1);(0,e.useEffect)((()=>{const e=()=>{window.pageYOffset>100?n(!0):n(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]);return t&&(0,zn.jsx)(Sn,{onClick:()=>{window.scrollTo({top:0})},children:(0,zn.jsx)(Pn,{className:"arrow-up-icon"})})},Tn=()=>{const[t,n]=(0,e.useState)(!1),r=(0,e.useRef)(),a=e=>{n(!t)};(0,e.useEffect)((()=>{const e=e=>{r.current&&!r.current.contains(e.target)&&t&&n(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[t]);const o=(e,t)=>{t.preventDefault(),n(!1);const a=document.getElementById(e);if(a){const e=r.current?r.current.offsetHeight:0,t=a.getBoundingClientRect().top+window.pageYOffset-e;window.scrollTo({top:t})}};return(0,zn.jsxs)(zn.Fragment,{children:[(0,zn.jsx)(hn,{open:t,ref:r,children:(0,zn.jsxs)("div",{ref:r,className:"navbar__container",children:[t?(0,zn.jsx)(xn,{"aria-label":"Close navigation",tabIndex:"0",className:"navbar__toggle-icon",onClick:a,role:"button"}):(0,zn.jsx)(bn,{"aria-label":"Open navigation",tabIndex:"0",className:"navbar__toggle-icon",onClick:a,role:"button"}),(0,zn.jsxs)("div",{className:"navbar__links",children:[(0,zn.jsx)("a",{className:"navbar__link",href:"#about",onClick:e=>o("about",e),children:"About"}),(0,zn.jsx)("a",{className:"navbar__link",href:"#techStack",onClick:e=>o("techStack",e),children:"Tech stack"}),(0,zn.jsx)("a",{className:"navbar__link",href:"#projects",onClick:e=>o("projects",e),children:"Projects"}),(0,zn.jsx)("a",{className:"navbar__link",href:"#contact",onClick:e=>o("contact",e),children:"Contact"})]})]})}),(0,zn.jsx)(Nn,{})]})};var On;function jn(){return jn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jn.apply(this,arguments)}function Rn(t,n){let{title:r,titleId:a,...o}=t;return e.createElement("svg",jn({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24px",height:"24px",ref:n,"aria-labelledby":a},o),r?e.createElement("title",{id:a},r):null,On||(On=e.createElement("path",{d:"M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"})))}const Ln=e.forwardRef(Rn),In=(n.p,qt.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: -1;
`),Mn=()=>{const t=(0,e.useRef)(null);return(0,e.useEffect)((()=>{const e=t.current,n=e.getContext("2d");e.width=window.innerWidth,e.height=window.innerHeight;let r=[];const a={mobile:parseInt(an,10),tablet:parseInt(on,10)};class o{constructor(e,t){this.x=e,this.y=t}}function i(){r=[];const t=function(){const e=window.innerWidth;return e<=a.mobile?35:e<=a.tablet?55:120}();for(let n=0;n<t;n++)r.push(new o(Math.random()*e.width,Math.random()*e.height))}function l(){n.clearRect(0,0,e.width,e.height),n.beginPath(),r.forEach(((e,t)=>{r.slice(t+1).forEach((t=>{Math.hypot(e.x-t.x,e.y-t.y)<150&&(n.moveTo(e.x,e.y),n.lineTo(t.x,t.y))}))})),n.strokeStyle="#05494A",n.stroke()}const u=e=>{if(!t.current)return;const n=t.current.getBoundingClientRect(),a=t.current.width/n.width,i=t.current.height/n.height,u=(e.clientX-n.left)*a,s=(e.clientY-n.top)*i;u>=0&&s>=0&&u<=t.current.width&&s<=t.current.height&&(r.push(new o(u,s)),l(),r.pop())};function s(){window.innerWidth>a.mobile?window.addEventListener("mousemove",u):window.removeEventListener("mousemove",u)}const c=()=>{window.innerWidth>a.mobile&&(e.width=window.innerWidth,e.height=window.innerHeight,i(),l()),s()};return window.addEventListener("resize",c),s(),i(),l(),()=>{window.removeEventListener("mousemove",u),window.removeEventListener("resize",c)}}),[]),(0,zn.jsx)(In,{ref:t})},Dn=Mn,An=()=>(0,zn.jsxs)(sn,{children:[(0,zn.jsx)(Tn,{}),(0,zn.jsxs)("div",{className:"header__content",children:[(0,zn.jsx)(Dn,{}),(0,zn.jsx)("h1",{className:"header__title",children:"Hi, my name is"}),(0,zn.jsx)("h2",{className:"header__name",children:"Maciej N\u0119cka"}),(0,zn.jsx)("h3",{className:"header__profession",children:"I'm a Front-End developer."}),(0,zn.jsxs)("p",{className:"header__description",children:["I build things for the web. I specialize in"," ",(0,zn.jsx)("span",{className:"header__speciality",children:"React.js"}),". Currently focused on finding opportunities to gain professional experience."]}),(0,zn.jsxs)("a",{className:"header__link",target:"_blank",rel:"noreferrer",href:"https://github.com/Maciejnecka",type:"button",children:["Check out my GitHub ",(0,zn.jsx)(Ln,{className:"header__link--icon"})]})]})]}),Fn=qt.section`
  background-color: var(--color-main-background);
  color: var(--font-main-white);
  padding: 3rem 5rem;
  box-sizing: border-box;
  margin: 0 auto;

  ${un`
    padding: 5rem 2rem;
  `}

  ${ln`
    padding: 6rem 1rem;
  `}

  .aboutme__title {
    width: 100%;
    text-align: center;
    color: var(--main-color-blue);
    font-weight: bold;
    font-size: 4rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    margin-bottom: 3rem;

    ${un`
      font-size: 2.5rem;
    `}

    ${ln`
      font-size: 2.2rem;
      margin-bottom: 1.5rem;

    `}
  }

  .aboutme__content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: var(--max-width);
    margin: 0 auto;

    ${ln`
      flex-direction: column-reverse;
      align-items: center;
    `}
  }

  .aboutme__text {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

    ${un`
      font-size: 1.2rem;
    `}

    ${ln`
      font-size: 1.1rem;
      order: 1;
    `}
  }

  .aboutme__paragraph {
    line-height: 1.6;
    padding: 1rem;
    text-align: left;
    font-size: 1.8rem;
    border-radius: var(--border-radius);

    ${un`
    font-size: 1.3rem;
    line-height: 1.5;
    `}

    ${ln`
    font-size: 1.1rem;
    max-width: 90vw
    `}
  }

  .aboutme__image {
    position: relative;
    margin-top: 2rem;
    width: 40%;
    height: 40%;
    display: flex;
    align-items: center;

    ${un`
    max-width: 50%
    `}

    ${ln`
     justify-content: center
     width: 90%;
     order: 2;
    `}
  }

  .aboutme__text,
  .aboutme__image {
    flex: 1;
    min-width: 0;
  }

  .aboutme__photo {
    width: auto;
    height: auto;
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    border: 3px solid var(--color-main-background);
    transition: var(--transition);
    filter: grayscale(35%) brightness(95%);

    &:hover {
      transform: scale(0.95);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
      border: 3px solid var(--main-color-blue);
      filter: grayscale(0%) brightness(100%);
    }

    ${ln`
    max-height: 500px;
    margin-bottom: 1.5rem;
    `}
  }
`,Un=n.p+"static/media/ProfileDesktop.a4e7fd290aef452aefe7.png",Wn=n.p+"static/media/ProfileTablet.64c2814cea2f32d9ec2a.png",Hn=qt.span`
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--main-color-blue);
    transition: all 0.3s ease-in-out;
    animation: ${pn} 1.5s infinite ease-in-out;
  }

  &:hover:after {
    height: 6px;
    background-color: darken(var(--main-color-blue), 10%);
  }
`,Bn=e=>{let{children:t,...n}=e;return(0,zn.jsx)(Hn,{...n,children:t})},Vn=()=>(0,zn.jsxs)(Fn,{id:"about",children:[(0,zn.jsx)("h2",{className:"aboutme__title",children:(0,zn.jsx)(Bn,{children:"About Me"})}),(0,zn.jsxs)("div",{className:"aboutme__content",children:[(0,zn.jsx)("div",{className:"aboutme__text",children:(0,zn.jsx)("p",{className:"aboutme__paragraph",children:"I am an enthusiastic front-end developer who has been continuously expanding knowledge and skills in the fascinating world of user interface creation. I have been learning programming for 1.5 year and plan on changing the profession. My passions include coding, technological innovations, and the world of MMORPG games."})}),(0,zn.jsx)("div",{className:"aboutme__image",children:(0,zn.jsxs)("picture",{children:[(0,zn.jsx)("source",{srcSet:"data:image/png;base64,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",media:"(max-width: 600px)"}),(0,zn.jsx)("source",{srcSet:Wn,media:"(max-width: 900px)"}),(0,zn.jsx)("img",{src:Un,alt:"Maciej N\u0119cka profile picture",className:"aboutme__photo",width:"800",height:"600"})]})})]})]}),$n=qt.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 3rem 2rem;
  color: var(--font-main-white);

  ${un`
  margin-top: -7rem;
  padding: 0rem 1rem;
    `}

  .techstack__header {
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .techstack__title {
    width: 100%;
    text-align: center;
    color: var(--main-color-blue);
    font-weight: bold;
    font-size: 4rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    margin: 5rem 0;

    ${un`
    font-size: 2.5rem;
    `}

    ${ln`
      font-size: 2.2rem;
      margin: 4rem 0;
    `}
  }

  .techstack__paragraph {
    line-height: 1.6;
    padding: 1rem;
    text-align: center;
    font-size: 1.8rem;
    border-radius: var(--border-radius);

    ${un`
    font-size: 1.3rem;
    line-height: 1.5;
    `}

    ${ln`
    font-size: 1.1rem;
    max-width: 90vw
    `}
  }
  .techstack {
    max-width: var(--max-width);
    background: var(--icons-carousel-backgroud);
    overflow: hidden;
    width: 95%;
    padding: 60px 0;
    margin: 4rem auto;
    position: relative;
    white-space: nowrap;
    border-radius: var(--border-radius);

    ${un`
    margin: 2rem auto;
    padding: 45px 0;
    `}

    ${ln`
    padding: 35px 0;
    margin: 1rem auto;
    `}

    &:hover {
      cursor: pointer;
    }

    &:before,
    &:after {
      content: '';
      pointer-events: none;
      position: absolute;
      top: 0;
      width: 250px;
      height: 100%;

      ${un`
      width: 150px;
    `}

      ${ln`
      width: 75px;
    `}
    }

    &:before {
      left: 0;
      background: linear-gradient(
        to left,
        rgba(255, 255, 255, 0),
        var(--main-color-blue)
      );
    }

    &:after {
      right: 0;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        var(--main-color-blue)
      );
    }

    &:hover .techstack__carousel-track {
      animation-play-state: paused;
    }
  }

  .techstack__carousel {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  .techstack__carousel-track {
    display: flex;
    animation: ${cn} 15s linear infinite;
  }

  .techstack__icon {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 40px;
    transition: transform 0.3s ease;

    ${un`
    margin: 0 20px;
    `}

    &:hover {
      transform: scale(0.9);
    }

    .techstack__icon-img {
      height: 75px;
      width: 75px;
      object-fit: contain;

      ${un`
      height: 50px;
      width: 50px;
    `}

      ${ln`
      height: 30px;
      width: 30px;
    `}
    }

    .techstack__icon-name {
      font-size: 1.5rem;
      margin-top: 0.5rem;
      font-weight: bold;
      color: var(--font-main-black);

      ${un`
      font-size: 1.2rem;
    `}
      ${ln`
      font-size: 1rem;

    `}
    }
  }
`;const Qn=n.p+"static/media/js-logo.c6c0a7260c58209b2403b638b2da4ff0.svg";const Kn=n.p+"static/media/html-logo.b52d17a157cb57802080c19b3bd0a9c2.svg";const Yn=n.p+"static/media/css-logo.ff6ee3d75fe4687eae2d2c7beafd88ae.svg";const qn=n.p+"static/media/react-logo.2a4fe4c2e1c04549db6527cb1907482f.svg";const Xn=n.p+"static/media/npm-logo.b6254c173d3117022d6e47665c97c336.svg";const Gn=n.p+"static/media/api-logo.082c06b8cbb08f92fefc319d97ac061a.svg";const Jn=n.p+"static/media/babel-logo.a64fc9b31d9270c13b0316738f8a59bf.svg";const Zn=n.p+"static/media/git-logo.f72f4618d4b9936940d05347047447a1.svg";const er=n.p+"static/media/sass-logo.757dd92880996870562408126e62f27c.svg";const tr=n.p+"static/media/webpack-logo.8919a9df8794110dc2407e6255f9b476.svg",nr=qt.div`
  .resume__heading {
    color: var(--font-main-white);
    font-size: 2.5rem;
    text-align: center;
    margin: 3rem auto;
    margin-bottom: 5rem;
    line-height: 1.4;
    max-width: var(--max-width);

    ${un`
      font-size: 1.75rem;
      margin-bottom: 3rem;

    `}

    ${ln`
      font-size: 1.25rem;
      margin-bottom: 2rem;

    `}
  }

  .resume__show-btn,
  .resume__download-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.2rem;
    letter-spacing: 1.5px;
    font-weight: bold;
    padding: 1.75rem 7rem;
    background-color: var(--main-color-blue);
    color: var(--font-main-white);
    margin: 5rem auto;
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: background-color 0.3s;
    border: 3px solid var(--main-color-blue);

    &:hover {
      background-color: var(--hover-color-blue);
      border: 3px solid var(--main-color-blue);
    }

    ${un`
      font-size: 1.5rem;
      padding: 1rem 3rem;
    `}

    ${ln`
      margin: 3rem auto;
      font-size: 1.2rem;
      padding: 0.6rem 1.7rem;
    `}
  }

  .resume__download-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 2rem;
    letter-spacing: 1px;
    max-width: 55%;
  }
  .resume__download-btn--icon {
    filter: var(--icon-color-white);
    color: var(--font-main-white);
    font-weight: bold;
    height: 25px;
    width: 25px;
    padding-left: 1rem;
  }

  .resume__backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--backdrop-bg-color);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  .resume__cv-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--cv-container-bg-color);
    padding: 20px;
    border-radius: var(--border-radius);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    position: relative;
    width: 80%;
    max-width: 800px;
    height: 80%;

    ${un`
      padding: 15px;
      width: 85%;
      max-width: 700px;
      height: 85%;
    `}

    ${ln`
      padding: 10px;
      width: 90%;
      max-width: 600px;
      height: 80%;
    `}
  }

  .resume__close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    filter: var(--icon-color-blue);
    border: none;
    height: 50px;
    width: 50px;
    cursor: pointer;
    transition: var(--transition), transform 0.3s ease;

    ${un`
    height: 60px;
    width: 60px;
    `}

    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .resume__iframe {
    width: 90%;
    height: 100%;
    border: none;
    ${un`
    width: 100%;
    height: 100%;
    `}
  }
`,rr=n.p+"static/media/CV.fc83c6e9ddf1db89c5fa.pdf";var ar,or;function ir(){return ir=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ir.apply(this,arguments)}function lr(t,n){let{title:r,titleId:a,...o}=t;return e.createElement("svg",ir({width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":a},o),r?e.createElement("title",{id:a},r):null,ar||(ar=e.createElement("path",{d:"M12 3V16M12 16L16 11.625M12 16L8 11.625",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),or||(or=e.createElement("path",{d:"M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487",stroke:"#1C274C",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}const ur=e.forwardRef(lr),sr=(n.p,()=>{const[t,n]=(0,e.useState)(!1),r=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);return(0,e.useEffect)((()=>{const e=e=>{"backdrop"===e.target.id&&n(!1)};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)}),[]),(0,zn.jsxs)(nr,{children:[(0,zn.jsx)("h2",{className:"resume__heading",children:"I also invite you to view my CV"}),!r()&&(0,zn.jsx)("button",{className:"resume__show-btn",onClick:()=>n(!t),children:"Show my CV"}),t&&(0,zn.jsx)("div",{className:"resume__backdrop",id:"backdrop",children:(0,zn.jsxs)("div",{className:"resume__cv-container",children:[(0,zn.jsx)(xn,{className:"resume__close-btn","aria-label":"Close navigation",tabIndex:"0",onClick:()=>n(!1),role:"button"}),(0,zn.jsx)("iframe",{className:"resume__iframe",src:rr,title:"My CV"})]})}),r()&&(0,zn.jsxs)("a",{href:rr,className:"resume__download-btn",download:"My_CV.pdf",children:["Download CV ",(0,zn.jsx)(ur,{className:"resume__download-btn--icon"})]})]})}),cr=()=>{const e=[{label:"React",src:qn,name:"React"},{label:"JS",src:Qn,name:"JavaScript"},{label:"HTML",src:Kn,name:"HTML"},{label:"CSS",src:Yn,name:"CSS"},{label:"API",src:Gn,name:"Rest API"},{label:"Babel",src:Jn,name:"Babel"},{label:"Git",src:Zn,name:"Git"},{label:"Sass",src:er,name:"Sass"},{label:"Webpack",src:tr,name:"Webpack"},{label:"npm",src:Xn,name:"Npm"}];return(0,zn.jsxs)($n,{id:"techStack",children:[(0,zn.jsxs)("div",{className:"techstack__header",children:[(0,zn.jsx)("h2",{className:"techstack__title",children:(0,zn.jsx)(Bn,{children:"Tech stack"})}),(0,zn.jsx)("p",{className:"techstack__paragraph",children:"Each icon below represents a technology I've mastered as part of my development toolkit."})]}),(0,zn.jsx)("div",{className:"techstack",children:(0,zn.jsx)("div",{className:"techstack__carousel",children:(0,zn.jsx)("div",{className:"techstack__carousel-track",children:e.concat(e).map(((e,t)=>(0,zn.jsxs)("div",{className:"techstack__icon",children:[(0,zn.jsx)("img",{className:"techstack__icon-img",src:e.src,alt:e.label}),(0,zn.jsx)("p",{className:"techstack__icon-name",children:e.name})]},t)))})})}),(0,zn.jsx)(sr,{})]})},dr=qt.section`
  padding: 7rem 10rem;
  background-color: var(--color-main-background);
  color: var(--font-main-white);
  max-width: var(--max-width);
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  z-index: 0;

  ${un`
    padding: 5rem 2rem;
  `}

  ${ln`
    padding: 5rem 1rem;
  `}

  .projects__title {
    font-size: 4rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 4rem;
    color: var(--main-color-blue);

    ${un`
      font-size: 2.5rem;
    `}

    ${ln`
      font-size: 2.2rem;
      margin-bottom: 5rem;
    `}
  }

  .projects__introduction {
    line-height: 1.6;
    padding: 1rem;
    text-align: center;
    font-size: 1.8rem;
    border-radius: var(--border-radius);
    margin-bottom: 5rem;

    ${un`
    font-size: 1.3rem;
    line-height: 1.5;
    `}

    ${ln`
    font-size: 1.1rem;
    max-width: 90vw
    `}
  }
  .project {
    display: flex;
    margin-bottom: 10rem;
    align-items: center;
    justify-content: center;

    &:nth-child(odd) {
      flex-direction: row;

      ${un`
      flex-direction:column-reverse;
    `}
      .project__details {
        text-align: center;
        margin-left: 2rem;
        ${un`
        width: 85%;
        margin-left: 0
        `}
        ${ln`
          margin: 0 auto;  
    `}
      }
    }
    &:nth-child(even) {
      flex-direction: row-reverse;

      ${un`
      flex-direction:column-reverse;
    `}
      .project__details {
        text-align: center;
        margin-right: 2rem;
        ${un`
        width: 90%;
        margin-right: 0
        `}
        ${ln`
          margin: 0 auto;  
    `}
      }
    }
  }

  .project__image-container {
    text-align: center;
    position: relative;
    ${un`
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.60);
        border-radius: var(--border-radius);
      }
    `}
  }

  .project__image {
    width: 100%;
    max-width: 100%;
    min-width: 23rem;
    height: auto;
    border-radius: var(--border-radius);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .project__details {
    text-align: center;
    ${un`
      text-align: center;
      position: absolute;
    `};
  }

  .project__name {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--main-color-blue);

    ${un`
    color: var(--main-color-white);
      font-size: 3rem;
      margin-bottom: 2rem;
      font-weight: bold;
    `}
    ${ln`
      font-size: 2rem;
      margin-bottom: 1rem;
    `};
  }

  .project__description {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    max-width: 50ch;
    background-color: var(--project-description-background);
    padding: 2rem;
    border-radius: var(--border-radius);
    line-height: 1.1;

    ${un`
    background-color: transparent;
      font-size: 1.4rem;
      line-height: 1.4;
    `};
    ${ln`
      font-size: 1rem;
      line-height: 1.1;
      margin-bottom: .5rem;
    `};
  }

  .project__link-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    ${ln`
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
    `}
  }
  .project__link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: max-content;
    background-color: var(--main-color-dark);
    color: var(--font-main-white);
    font-size: 1.35rem;
    padding: 1rem 2rem;
    border-radius: var(--border-radius);
    text-decoration: none;
    transition: var(--transition) ease;
    border: 3px solid var(--main-color-dark);

    &:hover,
    &:focus {
      background-color: darken(var(--main-color-dark), 10%);
      color: var(--font-main-white);
    }

    &:active {
      background-color: lighten(var(--main-color-dark), 10%);
      border-color: lighten(var(--main-color-dark), 10%);
      transform: translateY(2px);
    }

    ${un`
      padding: 0.8rem 1.6rem;
      font-size: 1.5rem;
    `}

    ${ln`
      padding: 0.5rem 1rem;
      font-size: 1.2rem;
    `}

    .project__link--external-icon, 
    .project__link--github-icon {
      height: 1.75rem;
      width: 1.75rem;
      padding-left: 1rem;
      filter: var(--icon-color-white);
    }
  }
`,fr=n.p+"static/media/TaskManagerLow.713446eeb68411e68e63.avif",pr=n.p+"static/media/AppLabLow.3f9a39d2deccdfac7b97.avif",hr=n.p+"static/media/MeetingFormLow.59628e92075e51cf7100.avif";var mr;function gr(){return gr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gr.apply(this,arguments)}function vr(t,n){let{title:r,titleId:a,...o}=t;return e.createElement("svg",gr({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24px",height:"24px",ref:n,"aria-labelledby":a},o),r?e.createElement("title",{id:a},r):null,mr||(mr=e.createElement("path",{d:"M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"})))}const br=e.forwardRef(vr),yr=(n.p,[{name:"Task manager",srcLink:"https://maciejnecka.github.io/Task-manager/",srcGH:"https://github.com/Maciejnecka/Task-manager",screenshot:fr,description:"A simple React application for effective task management. It allows users to add, start/stop, complete, and delete tasks. The application also tracks the time dedicated to each task."},{name:"AppLab-RWD",srcLink:"https://maciejnecka.github.io/AppLab-RWD/",srcGH:"https://github.com/Maciejnecka/AppLab-RWD",screenshot:pr,description:"A modern, responsive website template. It includes various sections such as a navigation menu, header, main features, pricing, and customer reviews. The primary goal of this project was to use only HTML and CSS to create a responsive design."},{name:"Meeting Form",srcLink:"https://maciejnecka.github.io/Meeting-Form/",srcGH:"https://github.com/Maciejnecka/Meeting-Form",screenshot:hr,description:"An application built using React that serves the purpose of managing meetings. It assists users in organizing and tracking their meetings."}]),wr=()=>(0,zn.jsxs)(dr,{id:"projects",children:[(0,zn.jsx)(Dn,{}),(0,zn.jsx)("h1",{className:"projects__title",children:(0,zn.jsx)(Bn,{children:"My projects"})}),(0,zn.jsx)("p",{className:"projects__introduction",children:"Here you'll find a collection of my recent work, showcasing my skills in web development. Throughout my learning journey, I have completed over 120 tasks and 20 projects. From these, I have selected the following to present to you."}),yr.map(((e,t)=>(0,zn.jsxs)("div",{className:"project",children:[(0,zn.jsx)("div",{className:"project__image-container",children:(0,zn.jsx)("img",{src:e.screenshot,alt:e.name,className:"project__image",width:"800",height:"600"})}),(0,zn.jsxs)("div",{className:"project__details",children:[(0,zn.jsx)("h2",{className:"project__name",children:e.name}),(0,zn.jsx)("p",{className:"project__description",children:e.description}),(0,zn.jsxs)("div",{className:"project__link-container",children:[(0,zn.jsxs)("a",{className:"project__link",href:e.srcLink,target:"_blank",rel:"noreferrer",type:"button",children:["Site",(0,zn.jsx)(br,{className:"project__link--external-icon"})]}),(0,zn.jsxs)("a",{className:"project__link",href:e.srcGH,target:"_blank",rel:"noreferrer",type:"button",children:["Github",(0,zn.jsx)(Ln,{className:"project__link--github-icon"})]})]})]})]},t)))]}),kr=qt.div`
  .contact__info {
    color: var(--font-main-white);
    text-align: center;
    margin: 3rem auto;
    max-width: var(--max-width);
    line-height: 1.4;

    .contact__heading {
      font-size: 4rem;
      font-weight: bold;
      margin-bottom: 3rem;
      color: var(--main-color-blue);

      ${un`
        font-size: 2.5rem;
      `}

      ${ln`
        font-size: 2.2rem;
      margin-bottom: 2rem;
      `}
    }

    .contact__paragraph {
      font-size: 1.8rem;
      margin: 0 auto;
      width: 80%;
      text-align: center;
      ${un`
        font-size: 1.3rem;
        line-height: 1.5
      `};
      ${ln`
        font-size: 1.1rem;
      `};
    }
  }

  .contact__button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.2rem;
    letter-spacing: 2px;
    width: max-content;
    padding: 1.75rem 3rem;
    background-color: var(--main-color-blue);
    color: var(--font-main-white);
    margin: 5rem auto;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s;
    text-decoration: none;
    border: 3px solid var(--main-color-blue);

    &:hover {
      background-color: transparent;
      border-color: var(--main-color-blue);
    }

    ${un`
      font-size: 1.25rem;
      padding: 1rem 3rem;
    `}

    ${ln`
      font-size: 1.5rem;
      padding: 0.5rem 1.5rem;
      margin: 3rem auto;
    `}

    .contact__button--icon {
      margin-left: 2rem;
      width: 26px;
      height: 26px;
      filter: var(--icon-color-white);

      ${un`
      margin-left: 1.25rem;
      font-size: 1.1rem;
      width: 18px;
      height: 18px;
    `}

      ${ln`
      font-size: 1rem;
      margin-left: 1rem;
    `}
    }
  }
`;var xr;function Sr(){return Sr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Sr.apply(this,arguments)}function _r(t,n){let{title:r,titleId:a,...o}=t;return e.createElement("svg",Sr({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",ref:n,"aria-labelledby":a},o),r?e.createElement("title",{id:a},r):null,xr||(xr=e.createElement("path",{d:"M255.4 48.2c.2-.1 .4-.2 .6-.2s.4 .1 .6 .2L460.6 194c2.1 1.5 3.4 3.9 3.4 6.5v13.6L291.5 355.7c-20.7 17-50.4 17-71.1 0L48 214.1V200.5c0-2.6 1.2-5 3.4-6.5L255.4 48.2zM48 276.2L190 392.8c38.4 31.5 93.7 31.5 132 0L464 276.2V456c0 4.4-3.6 8-8 8H56c-4.4 0-8-3.6-8-8V276.2zM256 0c-10.2 0-20.2 3.2-28.5 9.1L23.5 154.9C8.7 165.4 0 182.4 0 200.5V456c0 30.9 25.1 56 56 56H456c30.9 0 56-25.1 56-56V200.5c0-18.1-8.7-35.1-23.4-45.6L284.5 9.1C276.2 3.2 266.2 0 256 0z"})))}const Er=e.forwardRef(_r),Cr=(n.p,()=>(0,zn.jsx)(kr,{id:"contact",children:(0,zn.jsxs)("div",{className:"contact__info",children:[(0,zn.jsx)("h2",{className:"contact__heading",children:(0,zn.jsx)(Bn,{children:"Let's connect!"})}),(0,zn.jsx)("p",{className:"contact__paragraph",children:"If you're interested in my work and think we could create something great together, don't hestiate to reach out."}),(0,zn.jsxs)("a",{href:"mailto:macieknecka@gmail.com",className:"contact__button",type:"button",children:["Contact me ",(0,zn.jsx)(Er,{className:"contact__button--icon"})]})]})})),Pr=qt.footer`
  background-color: var(--project-description-background);
  padding: 3rem 0;
  text-align: center;
  ${un`
     padding: 2rem 0;

  `}

  .footer__container {
    max-width: var(--max-width);
    margin: 0 auto;
  }
  .footer__paragraph {
    color: var(--icons-carousel-backgroud);
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    white-space: wrap;

    ${un`
    font-size: 0.9rem;
  `}

    ${ln`
    font-size: 0.8rem;
  `}
  }
`,zr=()=>(0,zn.jsx)(Pr,{children:(0,zn.jsx)("div",{className:"footer__container",children:(0,zn.jsx)("h1",{className:"footer__paragraph",children:"Built by Maciej N\u0119cka."})})});class Nr extends e.Component{render(){return(0,zn.jsxs)(zn.Fragment,{children:[(0,zn.jsx)(An,{}),(0,zn.jsx)(Vn,{}),(0,zn.jsx)(cr,{}),(0,zn.jsx)(wr,{}),(0,zn.jsx)(Cr,{}),(0,zn.jsx)(zr,{})]})}}const Tr=Gt`
  ${[{family:"RobotoRegular",ttf:n.p+"static/media/RobotoMonoRegular.94ffabb10cbc81ee42ba.ttf"},{family:"RobotoBold",ttf:n.p+"static/media/RobotoMonoBold.7211ab61a8b83177865a.ttf",style:"bold"},{family:"RobotoLight",ttf:n.p+"static/media/RobotoMonoLight.234f40fa88a810bad5e4.ttf"},{family:"RobotoItalic",ttf:n.p+"static/media/RobotoMonoLightItalic.967bee7c12d18800b9b3.ttf",style:"italic"}].map((e=>{let{family:t,ttf:n,style:r}=e;return`\n  @font-face {\n    font-family: '${t}';\n    src: local('${t}'), url('${n}') format('truetype');\n    font-style: ${r||"normal"};\n    font-display: swap;\n  }\n`})).join("\n")}

body{
   font-family: 'RobotoRegular', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`,Or=Gt`
:root{
   --color-main-background: #1A1A20; 
   --color-navbar-background: rgba(26, 26, 32, 0.55);
   --backdrop-bg-color: rgba(0, 0, 0, 0.5);
   --cv-container-bg-color: white;


   --border-radius: 10px;

   --font-main-white: #FFFFFF;
   --font-main-gray: #A3A3A2;
   --font-main-black: #1A1A20;

   --main-color-blue: #20A0A1;
   --main-color-dark: #05494A;

   --icons-carousel-backgroud: #6fb9bb;
   --project-description-background: #272726;


   --icon-color-white: invert(100%) sepia(49%) saturate(2%) hue-rotate(110deg) brightness(108%) contrast(100%);
   --icon-color-gray: invert(69%) sepia(11%) saturate(0%) hue-rotate(136deg)
      brightness(94%) contrast(93%);
   --icon-color-blue: invert(30%) sepia(75%) saturate(2068%) hue-rotate(159deg) brightness(92%) contrast(88%);

   --transition: all 0.5s;

   --max-width: 1700px;
}
html{
   scroll-behavior: smooth; 
}

body{
   background-color: var(--color-main-background);
   color: var(--font-main-gray);
}

`,jr={};(0,t.s)(document.querySelector("#root")).render((0,zn.jsxs)(zn.Fragment,{children:[(0,zn.jsx)(tn,{}),(0,zn.jsx)(Tr,{}),(0,zn.jsx)(Or,{}),(0,zn.jsx)(Wt,{theme:jr,children:(0,zn.jsx)(e.StrictMode,{children:(0,zn.jsx)(Nr,{})})})]}))})()})();
//# sourceMappingURL=main.3ae3f9b2.js.map