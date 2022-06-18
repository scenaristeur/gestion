(function(){"use strict";var e={6683:function(e,n,t){t(6992),t(8674),t(9601),t(7727);var r=t(8935),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("nav",[t("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),t("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),t("router-view"),e._m(0)],1)},u=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("small",[t("i",[e._v("0.0.1 - resource form")])])}],i=t(1001),c={},a=(0,i.Z)(c,o,u,!1,null,null,null),s=a.exports,l=t(563);(0,l.z)("".concat("/gestion/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),alert("This app has been updated, please, close and reopen.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t(1539),t(8783),t(3948);var f=t(2809),d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("HelloWorld")],1)},p=[],v=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"hello"},[t("b-input",{attrs:{placeholder:"resource name"},model:{value:e.resource.name,callback:function(n){e.$set(e.resource,"name",n)},expression:"resource.name"}}),t("b-button",{on:{click:e.create}},[e._v(" Create a resource")])],1)},m=[],h=t(7906),g=t(6198),b=(t(8862),t(8819)),y=t(5982),w={name:"HelloWorld",data:function(){return{resource:{}}},methods:{create:function(){var e=this;return(0,g.Z)((0,h.Z)().mark((function n(){var t,r,o,u,i;return(0,h.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=Date.now(),e.resource.created=t,e.resource.updated=t,console.log(e.resource),r="https://spoggy-test8.solidcommunity.net/public/gestion/",o=r+t,u=JSON.stringify(e.resource),n.prev=7,n.next=10,(0,b._u)(o,u,{contentType:"application/json"});case 10:i=n.sent,console.log("File saved at ".concat((0,y.LH)(i))),n.next=17;break;case 14:n.prev=14,n.t0=n["catch"](7),console.error(n.t0);case 17:case"end":return n.stop()}}),n,null,[[7,14]])})))()}}},_=w,k=(0,i.Z)(_,v,m,!1,null,"f1abd8a0",null),O=k.exports,j={name:"HomeView",components:{HelloWorld:O}},x=j,E=(0,i.Z)(x,d,p,!1,null,null,null),P=E.exports;r["default"].use(f.Z);var C=[{path:"/",name:"home",component:P},{path:"/about",name:"about",component:function(){return t.e(443).then(t.bind(t,5830))}}],T=new f.Z({mode:"history",base:"/gestion/",routes:C}),Z=T,A=t(4665);r["default"].use(A.ZP);var N=new A.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),S=t(8262),H=t(3266);t(44);r["default"].use(S.XG7),r["default"].use(H.A7),r["default"].config.productionTip=!1,new r["default"]({router:Z,store:N,render:function(e){return e(s)}}).$mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var u=n[r]={exports:{}};return e[r].call(u.exports,u,u.exports,t),u.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,u){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],u=e[l][2];for(var c=!0,a=0;a<r.length;a++)(!1&u||i>=u)&&Object.keys(t.O).every((function(e){return t.O[e](r[a])}))?r.splice(a--,1):(c=!1,u<i&&(i=u));if(c){e.splice(l--,1);var s=o();void 0!==s&&(n=s)}}return n}u=u||0;for(var l=e.length;l>0&&e[l-1][2]>u;l--)e[l]=e[l-1];e[l]=[r,o,u]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){var e,n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};t.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var u=Object.create(null);t.r(u);var i={};e=e||[null,n({}),n([]),n(n)];for(var c=2&o&&r;"object"==typeof c&&!~e.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((function(e){i[e]=function(){return r[e]}}));return i["default"]=function(){return r},t.d(u,i),u}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+(443===e?"about":e)+"-legacy."+{34:"6d013e07",443:"a00453e4"}[e]+".js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="gestion:";t.l=function(r,o,u,i){if(e[r])e[r].push(o);else{var c,a;if(void 0!==u)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==n+u){c=f;break}}c||(a=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+u),c.src=r),e[r]=[o];var d=function(n,t){c.onerror=c.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),a&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/gestion/"}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var u=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=u);var i=t.p+t.u(n),c=new Error,a=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var u=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+n+" failed.\n("+u+": "+i+")",c.name="ChunkLoadError",c.type=u,c.request=i,o[1](c)}};t.l(i,a,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,u,i=r[0],c=r[1],a=r[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(o in c)t.o(c,o)&&(t.m[o]=c[o]);if(a)var l=a(t)}for(n&&n(r);s<i.length;s++)u=i[s],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(l)},r=self["webpackChunkgestion"]=self["webpackChunkgestion"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(6683)}));r=t.O(r)})();
//# sourceMappingURL=app-legacy.16c8013a.js.map