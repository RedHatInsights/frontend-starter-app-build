/*! For license information please see SamplePage.1668783282957.4e88fd907c07099610c4.js.LICENSE.txt */
(self.webpackChunkfrontend_starter_app=self.webpackChunkfrontend_starter_app||[]).push([[807],{3754:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(3264);const a=r.n(n)().createContext("light")},4748:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(5893),a=r(3264),i=r.n(a),o=r(4184),c=r.n(o),l=r(8216),s=r(3754),p=function(){return p=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},p.apply(this,arguments)},u=function(e,t,r){if(r||2===arguments.length)for(var n,a=0,i=t.length;a<i;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))};const f=(0,l.$j)((function(e){var t=e.routerData;return{params:t&&t.params,path:t&&t.path}}),(function(){return{}}))((function(e){var t=e.path,r=e.params,a=void 0===r?{}:r,o=e.children,l=e.className,f=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["path","params","children","className"]),m=function(){var e,r,n;if(null===(n=null===(r=null===(e=null===window||void 0===window?void 0:window.insights)||void 0===e?void 0:e.chrome)||void 0===r?void 0:r.$internal)||void 0===n?void 0:n.store){var i=window.insights.chrome.$internal.store.getState();if(t&&i)return t.split("/").reduce((function(e,t){var r,n;return 0===t.indexOf(":")?e.dynamic=p(p({},e.dynamic),((r={})["data-".concat((n=t.substr(1),n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()))]=a[t.substr(1)],r)):e.staticPart=u(u([],e.staticPart,!0),""!==t?[t]:[],!0),e}),{staticPart:[i.chrome.appId],dynamic:{}})}return{staticPart:[],dynamic:void 0}}(),h=m.dynamic,d=m.staticPart;return(0,n.jsx)(s.Z.Consumer,{children:function(e){var t;void 0===e&&(e="light");var r=c()(((t={})["pf-m-".concat(e)]="dark"===e,t));return{dark:(0,n.jsx)("section",p({},f,h,{"page-type":d.join("-"),className:"".concat(c()(l,"pf-l-page__main-section pf-c-page__main-section")," ").concat(r)},{children:i().Children.map(o,(function(e){return i().cloneElement(e,{className:"pf-m-dark"})}))})),light:(0,n.jsx)("section",p({},f,h,{"page-type":d.join("-"),className:"".concat(c()(l,"pf-l-page__main-section pf-c-page__main-section"))},{children:o}))}[e]}})}))},4184:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var o=a.apply(null,r);o&&e.push(o)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},7418:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var o,c,l=a(e),s=1;s<arguments.length;s++){for(var p in o=Object(arguments[s]))r.call(o,p)&&(l[p]=o[p]);if(t){c=t(o);for(var u=0;u<c.length;u++)n.call(o,c[u])&&(l[c[u]]=o[c[u]])}}return l}},5251:(e,t,r)=>{"use strict";r(7418);var n=r(3264),a=60103;if("function"==typeof Symbol&&Symbol.for){var i=Symbol.for;a=i("react.element"),i("react.fragment")}var o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,i={},s=null,p=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(p=t.ref),t)c.call(t,n)&&!l.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:a,type:e,key:s,ref:p,props:i,_owner:o.current}}t.jsx=s,t.jsxs=s},5893:(e,t,r)=>{"use strict";e.exports=r(5251)},5486:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>O});var n=r(3264),a=r.n(n),i=r(6530),o=r(8216),c=r(1242),l=r(4748),s=r(5893),p=r(4184),u=r.n(p),f=r(3754),m=function(){return m=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},m.apply(this,arguments)};const h=function(e){var t=e.className,r=e.children,n=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["className","children"]),a=u()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,s.jsx)(f.Z.Consumer,{children:function(e){var t,i;void 0===e&&(e="light");var o=u()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((i={})["pf-m-light"]="light"===e,i));return(0,s.jsx)("section",m({},n,{className:"".concat(a," ").concat(o),"widget-type":"InsightsPageHeader"},{children:r}))}})};var d=function(){return d=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},d.apply(this,arguments)};const v=function(e){var t=e.className,r=e.title,n=u()(t);return(0,s.jsx)(c.Title,d({headingLevel:"h1",size:"2xl",className:n,"widget-type":"InsightsPageHeaderTitle"},{children:r}))};var y=r(3215),g=(0,n.lazy)((function(){return r.e(228).then(r.bind(r,8228))}));const O=(0,i.withRouter)((function(){var e=(0,o.I0)();return(0,n.useEffect)((function(){var e,t;null===(t=null===(e=null===insights||void 0===insights?void 0:insights.chrome)||void 0===e?void 0:e.appAction)||void 0===t||t.call(e,"sample-page")}),[]),a().createElement(a().Fragment,null,a().createElement(h,null,a().createElement(v,{title:"Sample Insights App"}),a().createElement("p",null," This is page header text ")),a().createElement(l.Z,null,a().createElement(c.Stack,{hasGutter:!0},a().createElement(c.StackItem,null,a().createElement(c.Title,{headingLevel:"h2",size:"3xl"}," ","Alerts"," "),a().createElement(c.Button,{variant:"primary",onClick:function(){e((0,y.wN)({variant:"success",title:"Notification title",description:"notification description"}))}}," ","Dispatch alert"," ")),a().createElement(c.StackItem,null,a().createElement(n.Suspense,{fallback:a().createElement(c.Spinner,null)},a().createElement(g,null))),a().createElement(c.StackItem,null,a().createElement(c.Stack,{hasGutter:!0},a().createElement(c.StackItem,null,a().createElement(c.Title,{headingLevel:"h2",size:"3xl"}," ","Links"," ")),a().createElement(c.StackItem,null,a().createElement(i.Link,{to:"/oops"}," How to handle 500s in app ")),a().createElement(c.StackItem,null,a().createElement(i.Link,{to:"/no-permissions"}," How to handle 403s in app ")))))))}))}}]);
//# sourceMappingURL=../sourcemaps/SamplePage.b70a8712339f758df30673008a001f5a.js.map