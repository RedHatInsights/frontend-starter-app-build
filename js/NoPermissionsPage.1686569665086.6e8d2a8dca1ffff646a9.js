/*! For license information please see NoPermissionsPage.1686569665086.6e8d2a8dca1ffff646a9.js.LICENSE.txt */
(self.webpackChunkfrontend_starter_app=self.webpackChunkfrontend_starter_app||[]).push([[452],{3754:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var r=n(3264);const a=n.n(r)().createContext("light")},4748:(t,e,n)=>{"use strict";n.d(e,{Z:()=>f});var r=n(5893),a=n(3264),o=n.n(a),i=n(4184),c=n.n(i),s=n(8928),l=n(3754),p=function(){return p=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},p.apply(this,arguments)},u=function(t,e,n){if(n||2===arguments.length)for(var r,a=0,o=e.length;a<o;a++)!r&&a in e||(r||(r=Array.prototype.slice.call(e,0,a)),r[a]=e[a]);return t.concat(r||Array.prototype.slice.call(e))};const f=(0,s.$j)((function(t){var e=t.routerData;return{params:e&&e.params,path:e&&e.path}}),(function(){return{}}))((function(t){var e=t.path,n=t.params,a=void 0===n?{}:n,i=t.children,s=t.className,f=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n}(t,["path","params","children","className"]),d=function(){var t,n,r;if(null===(r=null===(n=null===(t=null===window||void 0===window?void 0:window.insights)||void 0===t?void 0:t.chrome)||void 0===n?void 0:n.$internal)||void 0===r?void 0:r.store){var o=window.insights.chrome.$internal.store.getState();if(e&&o)return e.split("/").reduce((function(t,e){var n,r;return 0===e.indexOf(":")?t.dynamic=p(p({},t.dynamic),((n={})["data-".concat((r=e.substr(1),r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()))]=a[e.substr(1)],n)):t.staticPart=u(u([],t.staticPart,!0),""!==e?[e]:[],!0),t}),{staticPart:[o.chrome.appId],dynamic:{}})}return{staticPart:[],dynamic:void 0}}(),v=d.dynamic,h=d.staticPart;return(0,r.jsx)(l.Z.Consumer,{children:function(t){var e;void 0===t&&(t="light");var n=c()(((e={})["pf-m-".concat(t)]="dark"===t,e));return{dark:(0,r.jsx)("section",p({},f,v,{"page-type":h.join("-"),className:"".concat(c()(s,"pf-l-page__main-section pf-c-page__main-section")," ").concat(n)},{children:o().Children.map(i,(function(t){return o().cloneElement(t,{className:"pf-m-dark"})}))})),light:(0,r.jsx)("section",p({},f,v,{"page-type":h.join("-"),className:"".concat(c()(s,"pf-l-page__main-section pf-c-page__main-section"))},{children:i}))}[t]}})}))},4184:(t,e)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var o=typeof n;if("string"===o||"number"===o)t.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&t.push(i)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var c in n)r.call(n,c)&&n[c]&&t.push(c);else t.push(n.toString())}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(n=function(){return a}.apply(e,[]))||(t.exports=n)}()},6319:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>d});var r=n(3264),a=n.n(r),o=n(4748),i=n(5893),c=n(1242);const s=(0,n(400).IU)({name:"LockIcon",height:512,width:448,svgPath:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z",yOffset:0,xOffset:0});var l=function(){return l=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},l.apply(this,arguments)},p=function(){return(0,i.jsxs)(a().Fragment,{children:["Contact your organization administrator(s) for more information or visit ",(0,i.jsx)("a",l({href:"./settings/my-user-access"},{children:"My User Access"})),"  to learn more about your permissions."]})};const u=function(t){var e=t.prevPageButtonText,n=void 0===e?"Return to previous page":e,r=t.toLandingPageText,a=void 0===r?"Go to landing page":r,o=t.title,u=t.actions,f=void 0===u?null:u,d=t.serviceName,v=t.icon,h=void 0===v?s:v,m=t.description,y=void 0===m?(0,i.jsx)(p,{}):m,g=t.showReturnButton,j=void 0===g||g,O=t.className,b=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n}(t,["prevPageButtonText","toLandingPageText","title","actions","serviceName","icon","description","showReturnButton","className"]),x=o||"You do not have access to ".concat(d);return(0,i.jsxs)(c.EmptyState,l({variant:c.EmptyStateVariant.full,className:"ins-c-not-authorized ".concat(O||"")},b,{children:[(0,i.jsx)(c.EmptyStateIcon,{icon:h}),(0,i.jsx)(c.Title,l({headingLevel:"h5",size:"lg"},{children:x})),(0,i.jsx)(c.EmptyStateBody,{children:y}),f,j&&(document.referrer?(0,i.jsx)(c.Button,l({variant:"primary",onClick:function(){return history.back()}},{children:n})):(0,i.jsx)(c.Button,l({variant:"primary",component:"a",href:"."},{children:a})))]}))};var f=n(5140);const d=function(){var t=(0,f.Z)().appAction;return(0,r.useEffect)((function(){t("no-permissions")}),[]),a().createElement(o.Z,null,a().createElement(u,{serviceName:"Sample app"}))}}}]);
//# sourceMappingURL=../sourcemaps/NoPermissionsPage.251ea71567076b1cb71e2d8f75aa02bb.js.map