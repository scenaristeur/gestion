if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const l=e=>n(e,r),u={module:{uri:r},exports:t,require:l};s[r]=Promise.all(i.map((e=>u[e]||l(e)))).then((e=>(o(...e),t)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"gestion"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/gestion/css/app.8d8bdb4f.css",revision:null},{url:"/gestion/css/chunk-vendors.6516fab7.css",revision:null},{url:"/gestion/index.html",revision:"669014dc7903185775ace5a6129b89f0"},{url:"/gestion/js/34.871349d1.js",revision:null},{url:"/gestion/js/about.a00453e4.js",revision:null},{url:"/gestion/js/app.727fd98e.js",revision:null},{url:"/gestion/js/chunk-vendors.a14a97df.js",revision:null},{url:"/gestion/manifest.json",revision:"d75c9f1baac639d196667cc30ef4bbf1"},{url:"/gestion/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map