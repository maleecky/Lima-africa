"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[673],{9673:function(e,t,n){let r;n.d(t,{x8:function(){return e5},VY:function(){return e1},dk:function(){return e3},aV:function(){return e0},h_:function(){return eQ},fC:function(){return eG},Dx:function(){return e2},xz:function(){return eJ}});var o,a,c,u,i,l,d,s=n(2988),f=n(2265),p=n(8149),v=n(1584),m=n(8324),h=n(3201),g=n(1715),E=n(2358),y=n(5171),b=n(5137);let w="focusScope.autoFocusOnMount",C="focusScope.autoFocusOnUnmount",R={bubbles:!1,cancelable:!0},S=(0,f.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:a,...c}=e,[u,i]=(0,f.useState)(null),l=(0,b.W)(o),d=(0,b.W)(a),p=(0,f.useRef)(null),m=(0,v.e)(t,e=>i(e)),h=(0,f.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,f.useEffect)(()=>{if(r){function e(e){if(h.paused||!u)return;let t=e.target;u.contains(t)?p.current=t:k(p.current,{select:!0})}function t(e){if(h.paused||!u)return;let t=e.relatedTarget;null===t||u.contains(t)||k(p.current,{select:!0})}document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&k(u)});return u&&n.observe(u,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,u,h.paused]),(0,f.useEffect)(()=>{if(u){A.add(h);let e=document.activeElement;if(!u.contains(e)){let t=new CustomEvent(w,R);u.addEventListener(w,l),u.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(k(r,{select:t}),document.activeElement!==n)return}(D(u).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&k(u))}return()=>{u.removeEventListener(w,l),setTimeout(()=>{let t=new CustomEvent(C,R);u.addEventListener(C,d),u.dispatchEvent(t),t.defaultPrevented||k(null!=e?e:document.body,{select:!0}),u.removeEventListener(C,d),A.remove(h)},0)}}},[u,l,d,h]);let g=(0,f.useCallback)(e=>{if(!n&&!r||h.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,a]=function(e){let t=D(e);return[M(t,e),M(t.reverse(),e)]}(t);r&&a?e.shiftKey||o!==a?e.shiftKey&&o===r&&(e.preventDefault(),n&&k(a,{select:!0})):(e.preventDefault(),n&&k(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,h.paused]);return(0,f.createElement)(y.WV.div,(0,s.Z)({tabIndex:-1},c,{ref:m,onKeyDown:g}))});function D(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function M(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function k(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let A=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=_(r,e)).unshift(e)},remove(e){var t;null===(t=(r=_(r,e))[0])||void 0===t||t.resume()}});function _(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var T=n(6935),O=n(1383);let x=0;function N(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var I=function(){return(I=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function L(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}"function"==typeof SuppressedError&&SuppressedError;var F="right-scroll-bar-position",P="width-before-scroll-bar";function W(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var Z="undefined"!=typeof window?f.useLayoutEffect:f.useEffect,j=new WeakMap,B=(void 0===o&&(o={}),(void 0===a&&(a=function(e){return e}),c=[],u=!1,i={read:function(){if(u)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return c.length?c[c.length-1]:null},useMedium:function(e){var t=a(e,u);return c.push(t),function(){c=c.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(u=!0;c.length;){var t=c;c=[],t.forEach(e)}c={push:function(t){return e(t)},filter:function(){return c}}},assignMedium:function(e){u=!0;var t=[];if(c.length){var n=c;c=[],n.forEach(e),t=c}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),c={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),c}}}}).options=I({async:!0,ssr:!1},o),i),K=function(){},V=f.forwardRef(function(e,t){var n,r,o,a,c=f.useRef(null),u=f.useState({onScrollCapture:K,onWheelCapture:K,onTouchMoveCapture:K}),i=u[0],l=u[1],d=e.forwardProps,s=e.children,p=e.className,v=e.removeScrollBar,m=e.enabled,h=e.shards,g=e.sideCar,E=e.noIsolation,y=e.inert,b=e.allowPinchZoom,w=e.as,C=L(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),R=(n=[c,t],r=function(e){return n.forEach(function(t){return W(t,e)})},(o=(0,f.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,a=o.facade,Z(function(){var e=j.get(a);if(e){var t=new Set(e),r=new Set(n),o=a.current;t.forEach(function(e){r.has(e)||W(e,null)}),r.forEach(function(e){t.has(e)||W(e,o)})}j.set(a,n)},[n]),a),S=I(I({},C),i);return f.createElement(f.Fragment,null,m&&f.createElement(g,{sideCar:B,removeScrollBar:v,shards:h,noIsolation:E,inert:y,setCallbacks:l,allowPinchZoom:!!b,lockRef:c}),d?f.cloneElement(f.Children.only(s),I(I({},S),{ref:R})):f.createElement(void 0===w?"div":w,I({},S,{className:p,ref:R}),s))});V.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},V.classNames={fullWidth:P,zeroRight:F};var X=function(e){var t=e.sideCar,n=L(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return f.createElement(r,I({},n))};X.isSideCarExport=!0;var Y=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=d||n.nc;return t&&e.setAttribute("nonce",t),e}())){var o,a;(o=t).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),a=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(a)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},z=function(){var e=Y();return function(t,n){f.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},H=function(){var e=z();return function(t){return e(t.styles,t.dynamic),null}},U={left:0,top:0,right:0,gap:0},q=function(e){return parseInt(e||"",10)||0},$=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[q(n),q(r),q(o)]},G=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return U;var t=$(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},J=H(),Q="data-scroll-locked",ee=function(e,t,n,r){var o=e.left,a=e.top,c=e.right,u=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body[").concat(Q,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(c,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(F," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(P," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(F," .").concat(F," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(P," .").concat(P," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(Q,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(u,"px;\n  }\n")},et=function(){var e=parseInt(document.body.getAttribute(Q)||"0",10);return isFinite(e)?e:0},en=function(){f.useEffect(function(){return document.body.setAttribute(Q,(et()+1).toString()),function(){var e=et()-1;e<=0?document.body.removeAttribute(Q):document.body.setAttribute(Q,e.toString())}},[])},er=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;en();var a=f.useMemo(function(){return G(o)},[o]);return f.createElement(J,{styles:ee(a,!t,o,n?"":"!important")})},eo=!1;if("undefined"!=typeof window)try{var ea=Object.defineProperty({},"passive",{get:function(){return eo=!0,!0}});window.addEventListener("test",ea,ea),window.removeEventListener("test",ea,ea)}catch(e){eo=!1}var ec=!!eo&&{passive:!1},eu=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},ei=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),el(e,n)){var r=ed(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},el=function(e,t){return"v"===e?eu(t,"overflowY"):eu(t,"overflowX")},ed=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},es=function(e,t,n,r,o){var a,c=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),u=c*r,i=n.target,l=t.contains(i),d=!1,s=u>0,f=0,p=0;do{var v=ed(e,i),m=v[0],h=v[1]-v[2]-c*m;(m||h)&&el(e,i)&&(f+=h,p+=m),i=i.parentNode}while(!l&&i!==document.body||l&&(t.contains(i)||t===i));return s&&(o&&0===f||!o&&u>f)?d=!0:!s&&(o&&0===p||!o&&-u>p)&&(d=!0),d},ef=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},ep=function(e){return[e.deltaX,e.deltaY]},ev=function(e){return e&&"current"in e?e.current:e},em=0,eh=[],eg=(l=function(e){var t=f.useRef([]),n=f.useRef([0,0]),r=f.useRef(),o=f.useState(em++)[0],a=f.useState(function(){return H()})[0],c=f.useRef(e);f.useEffect(function(){c.current=e},[e]),f.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(ev),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var u=f.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!c.current.allowPinchZoom;var o,a=ef(e),u=n.current,i="deltaX"in e?e.deltaX:u[0]-a[0],l="deltaY"in e?e.deltaY:u[1]-a[1],d=e.target,s=Math.abs(i)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===s&&"range"===d.type)return!1;var f=ei(s,d);if(!f)return!0;if(f?o=s:(o="v"===s?"h":"v",f=ei(s,d)),!f)return!1;if(!r.current&&"changedTouches"in e&&(i||l)&&(r.current=o),!o)return!0;var p=r.current||o;return es(p,t,e,"h"===p?i:l,!0)},[]),i=f.useCallback(function(e){if(eh.length&&eh[eh.length-1]===a){var n="deltaY"in e?ep(e):ef(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(c.current.shards||[]).map(ev).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?u(e,o[0]):!c.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),l=f.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),d=f.useCallback(function(e){n.current=ef(e),r.current=void 0},[]),s=f.useCallback(function(t){l(t.type,ep(t),t.target,u(t,e.lockRef.current))},[]),p=f.useCallback(function(t){l(t.type,ef(t),t.target,u(t,e.lockRef.current))},[]);f.useEffect(function(){return eh.push(a),e.setCallbacks({onScrollCapture:s,onWheelCapture:s,onTouchMoveCapture:p}),document.addEventListener("wheel",i,ec),document.addEventListener("touchmove",i,ec),document.addEventListener("touchstart",d,ec),function(){eh=eh.filter(function(e){return e!==a}),document.removeEventListener("wheel",i,ec),document.removeEventListener("touchmove",i,ec),document.removeEventListener("touchstart",d,ec)}},[]);var v=e.removeScrollBar,m=e.inert;return f.createElement(f.Fragment,null,m?f.createElement(a,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,v?f.createElement(er,{gapMode:"margin"}):null)},B.useMedium(l),X),eE=f.forwardRef(function(e,t){return f.createElement(V,I({},e,{ref:t,sideCar:eg}))});eE.classNames=V.classNames;var ey=new WeakMap,eb=new WeakMap,ew={},eC=0,eR=function(e){return e&&(e.host||eR(e.parentNode))},eS=function(e,t,n,r){var o=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=eR(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});ew[n]||(ew[n]=new WeakMap);var a=ew[n],c=[],u=new Set,i=new Set(o),l=function(e){!e||u.has(e)||(u.add(e),l(e.parentNode))};o.forEach(l);var d=function(e){!e||i.has(e)||Array.prototype.forEach.call(e.children,function(e){if(u.has(e))d(e);else try{var t=e.getAttribute(r),o=null!==t&&"false"!==t,i=(ey.get(e)||0)+1,l=(a.get(e)||0)+1;ey.set(e,i),a.set(e,l),c.push(e),1===i&&o&&eb.set(e,!0),1===l&&e.setAttribute(n,"true"),o||e.setAttribute(r,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return d(t),u.clear(),eC++,function(){c.forEach(function(e){var t=ey.get(e)-1,o=a.get(e)-1;ey.set(e,t),a.set(e,o),t||(eb.has(e)||e.removeAttribute(r),eb.delete(e)),o||e.removeAttribute(n)}),--eC||(ey=new WeakMap,ey=new WeakMap,eb=new WeakMap,ew={})}},eD=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),eS(r,o,n,"aria-hidden")):function(){return null}},eM=n(1538);let ek="Dialog",[eA,e_]=(0,m.b)(ek),[eT,eO]=eA(ek),ex=(0,f.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=eO("DialogTrigger",n),a=(0,v.e)(t,o.triggerRef);return(0,f.createElement)(y.WV.button,(0,s.Z)({type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":eU(o.open)},r,{ref:a,onClick:(0,p.M)(e.onClick,o.onOpenToggle)}))}),eN="DialogPortal",[eI,eL]=eA(eN,{forceMount:void 0}),eF="DialogOverlay",eP=(0,f.forwardRef)((e,t)=>{let n=eL(eF,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=eO(eF,e.__scopeDialog);return a.modal?(0,f.createElement)(O.z,{present:r||a.open},(0,f.createElement)(eW,(0,s.Z)({},o,{ref:t}))):null}),eW=(0,f.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=eO(eF,n);return(0,f.createElement)(eE,{as:eM.g7,allowPinchZoom:!0,shards:[o.contentRef]},(0,f.createElement)(y.WV.div,(0,s.Z)({"data-state":eU(o.open)},r,{ref:t,style:{pointerEvents:"auto",...r.style}})))}),eZ="DialogContent",ej=(0,f.forwardRef)((e,t)=>{let n=eL(eZ,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=eO(eZ,e.__scopeDialog);return(0,f.createElement)(O.z,{present:r||a.open},a.modal?(0,f.createElement)(eB,(0,s.Z)({},o,{ref:t})):(0,f.createElement)(eK,(0,s.Z)({},o,{ref:t})))}),eB=(0,f.forwardRef)((e,t)=>{let n=eO(eZ,e.__scopeDialog),r=(0,f.useRef)(null),o=(0,v.e)(t,n.contentRef,r);return(0,f.useEffect)(()=>{let e=r.current;if(e)return eD(e)},[]),(0,f.createElement)(eV,(0,s.Z)({},e,{ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,p.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,p.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,p.M)(e.onFocusOutside,e=>e.preventDefault())}))}),eK=(0,f.forwardRef)((e,t)=>{let n=eO(eZ,e.__scopeDialog),r=(0,f.useRef)(!1),o=(0,f.useRef)(!1);return(0,f.createElement)(eV,(0,s.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var a,c;null===(a=e.onCloseAutoFocus)||void 0===a||a.call(e,t),t.defaultPrevented||(r.current||null===(c=n.triggerRef.current)||void 0===c||c.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{var a,c;null===(a=e.onInteractOutside)||void 0===a||a.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));let u=t.target;(null===(c=n.triggerRef.current)||void 0===c?void 0:c.contains(u))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}}))}),eV=(0,f.forwardRef)((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:a,...c}=e,u=eO(eZ,n),i=(0,f.useRef)(null),l=(0,v.e)(t,i);return(0,f.useEffect)(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:N()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:N()),x++,()=>{1===x&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),x--}},[]),(0,f.createElement)(f.Fragment,null,(0,f.createElement)(S,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:a},(0,f.createElement)(E.XB,(0,s.Z)({role:"dialog",id:u.contentId,"aria-describedby":u.descriptionId,"aria-labelledby":u.titleId,"data-state":eU(u.open)},c,{ref:l,onDismiss:()=>u.onOpenChange(!1)}))),!1)}),eX="DialogTitle",eY=(0,f.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=eO(eX,n);return(0,f.createElement)(y.WV.h2,(0,s.Z)({id:o.titleId},r,{ref:t}))}),ez=(0,f.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=eO("DialogDescription",n);return(0,f.createElement)(y.WV.p,(0,s.Z)({id:o.descriptionId},r,{ref:t}))}),eH=(0,f.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=eO("DialogClose",n);return(0,f.createElement)(y.WV.button,(0,s.Z)({type:"button"},r,{ref:t,onClick:(0,p.M)(e.onClick,()=>o.onOpenChange(!1))}))});function eU(e){return e?"open":"closed"}let[eq,e$]=(0,m.k)("DialogTitleWarning",{contentName:eZ,titleName:eX,docsSlug:"dialog"}),eG=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:a,modal:c=!0}=e,u=(0,f.useRef)(null),i=(0,f.useRef)(null),[l=!1,d]=(0,g.T)({prop:r,defaultProp:o,onChange:a});return(0,f.createElement)(eT,{scope:t,triggerRef:u,contentRef:i,contentId:(0,h.M)(),titleId:(0,h.M)(),descriptionId:(0,h.M)(),open:l,onOpenChange:d,onOpenToggle:(0,f.useCallback)(()=>d(e=>!e),[d]),modal:c},n)},eJ=ex,eQ=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,a=eO(eN,t);return(0,f.createElement)(eI,{scope:t,forceMount:n},f.Children.map(r,e=>(0,f.createElement)(O.z,{present:n||a.open},(0,f.createElement)(T.h,{asChild:!0,container:o},e))))},e0=eP,e1=ej,e2=eY,e3=ez,e5=eH},3201:function(e,t,n){n.d(t,{M:function(){return i}});var r,o=n(2265),a=n(4211);let c=(r||(r=n.t(o,2)))["useId".toString()]||(()=>void 0),u=0;function i(e){let[t,n]=o.useState(c());return(0,a.b)(()=>{e||n(e=>null!=e?e:String(u++))},[e]),e||(t?`radix-${t}`:"")}}}]);