if(!self.define){let e,r={};const f=(f,n)=>(f=new URL(f+".js",n).href,r[f]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=f,e.onload=r,document.head.appendChild(e)}else e=f,importScripts(f),r()})).then((()=>{let e=r[f];if(!e)throw new Error(`Module ${f} didn’t register its module`);return e})));self.define=(n,i)=>{const u=e||("document"in self?document.currentScript.src:"")||location.href;if(r[u])return;let s={};const a=e=>f(e,u),l={module:{uri:u},exports:s,require:a};r[u]=Promise.all(n.map((e=>l[e]||a(e)))).then((e=>(i(...e),s)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"burdah-fe-vue"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/burdah-fe/css/app.2c527d92.css",revision:null},{url:"/burdah-fe/css/chunk-vendors.06760f3c.css",revision:null},{url:"/burdah-fe/fonts/fa-brands-400.5f7c5bb7.ttf",revision:null},{url:"/burdah-fe/fonts/fa-brands-400.9210030c.woff2",revision:null},{url:"/burdah-fe/fonts/fa-regular-400.02ad4ff9.woff2",revision:null},{url:"/burdah-fe/fonts/fa-regular-400.570a165b.ttf",revision:null},{url:"/burdah-fe/fonts/fa-solid-900.0b5caff7.ttf",revision:null},{url:"/burdah-fe/fonts/fa-solid-900.3eae9857.woff2",revision:null},{url:"/burdah-fe/fonts/fa-v4compatibility.92dce52f.ttf",revision:null},{url:"/burdah-fe/img/art-arabic-1.a7f3d2b1.png",revision:null},{url:"/burdah-fe/img/art-arabic-2.3a723f81.png",revision:null},{url:"/burdah-fe/img/bg-arabic-1.4bc1aba4.png",revision:null},{url:"/burdah-fe/img/bg-arabic-2.13f7893f.png",revision:null},{url:"/burdah-fe/index.html",revision:"068feb6845751d5cfa362575bf741af2"},{url:"/burdah-fe/js/app.aaf20f59.js",revision:null},{url:"/burdah-fe/js/chunk-vendors.1da6e23e.js",revision:null},{url:"/burdah-fe/manifest.json",revision:"1bc23f514a7b9cef91cb1d264fa24340"},{url:"/burdah-fe/manifest.webmanifest",revision:"8978c2a865fa04b763296798d6a3c654"},{url:"/burdah-fe/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map