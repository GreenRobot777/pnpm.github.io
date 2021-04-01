(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{376:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return a})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(8),i=(t(0),t(395)),c={id:"prune",title:"pnpm prune"},p={unversionedId:"cli/prune",id:"version-5.x/cli/prune",isDocsHomePage:!1,title:"pnpm prune",description:"Removes unnecessary packages.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-5.x/cli/prune.md",slug:"/cli/prune",permalink:"/ru/cli/prune",editUrl:"https://crowdin.com/project/pnpm/ru",version:"5.x",sidebar:"version-5.x/docs",previous:{title:"pnpm rebuild",permalink:"/ru/cli/rebuild"},next:{title:"pnpm install-test",permalink:"/ru/cli/install-test"}},a=[{value:"Options",id:"options",children:[{value:"--prod",id:"--prod",children:[]},{value:"--no-optional",id:"--no-optional",children:[]}]}],u={toc:a};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Removes unnecessary packages."),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("h3",{id:"--prod"},"--prod"),Object(i.b)("p",null,"Remove the packages specified in ",Object(i.b)("inlineCode",{parentName:"p"},"devDependencies"),"."),Object(i.b)("h3",{id:"--no-optional"},"--no-optional"),Object(i.b)("p",null,"Remove the packages specified in ",Object(i.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."))}l.isMDXComponent=!0},395:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=l(t),f=r,b=s["".concat(c,".").concat(f)]||s[f]||d[f]||i;return t?o.a.createElement(b,p(p({ref:n},u),{},{components:t})):o.a.createElement(b,p({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=f;var p={};for(var a in n)hasOwnProperty.call(n,a)&&(p[a]=n[a]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var u=2;u<i;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);