(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{395:function(n,e,t){"use strict";t.d(e,"a",(function(){return m})),t.d(e,"b",(function(){return d}));var r=t(0),i=t.n(r);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function p(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var u=i.a.createContext({}),l=function(n){var e=i.a.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},m=function(n){var e=l(n.components);return i.a.createElement(u.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return i.a.createElement(i.a.Fragment,{},e)}},f=i.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,p=n.parentName,u=c(n,["components","mdxType","originalType","parentName"]),m=l(t),f=r,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||o;return t?i.a.createElement(d,a(a({ref:e},u),{},{components:t})):i.a.createElement(d,a({ref:e},u))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,p=new Array(o);p[0]=f;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=n,a.mdxType="string"==typeof n?n:r,p[1]=a;for(var u=2;u<o;u++)p[u]=t[u];return i.a.createElement.apply(null,p)}return i.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},79:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return p})),t.d(e,"metadata",(function(){return a})),t.d(e,"toc",(function(){return c})),t.d(e,"default",(function(){return l}));var r=t(3),i=t(8),o=(t(0),t(395)),p={id:"pnpm-unlink",title:"pnpm unlink",original_id:"pnpm-unlink"},a={unversionedId:"pnpm-unlink",id:"version-4.x/pnpm-unlink",isDocsHomePage:!1,title:"pnpm unlink",description:"pnpm unlink",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-4.x/pnpm-unlink.md",slug:"/pnpm-unlink",permalink:"/ru/4.x/pnpm-unlink",editUrl:"https://crowdin.com/project/pnpm/ru",version:"4.x"},c=[{value:"pnpm unlink",id:"pnpm-unlink",children:[]}],u={toc:c};function l(n){var e=n.components,t=Object(i.a)(n,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"pnpm-unlink"},"pnpm unlink"),Object(o.b)("p",null,"Alias: ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm dislink")),Object(o.b)("p",null,"Unlinks a package. Like ",Object(o.b)("inlineCode",{parentName:"p"},"yarn unlink")," but pnpm re-installs the dependency after removing the external link."))}l.isMDXComponent=!0}}]);