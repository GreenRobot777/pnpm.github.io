(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{357:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return p})),r.d(n,"toc",(function(){return a})),r.d(n,"default",(function(){return l}));var t=r(3),o=r(8),i=(r(0),r(395)),c={id:"prune",title:"pnpm prune",original_id:"prune"},p={unversionedId:"cli/prune",id:"version-3.x/cli/prune",isDocsHomePage:!1,title:"pnpm prune",description:"Removes extraneous packages",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-3.x/cli/prune.md",slug:"/cli/prune",permalink:"/hu/3.x/cli/prune",editUrl:"https://crowdin.com/project/pnpm/hu",version:"3.x",sidebar:"version-3.x/docs",previous:{title:"pnpm rebuild",permalink:"/hu/3.x/cli/rebuild"},next:{title:"pnpm install-test",permalink:"/hu/3.x/cli/install-test"}},a=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[{value:"--prod, --production",id:"--prod---production",children:[]}]}],u={toc:a};function l(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Removes extraneous packages"),Object(i.b)("h2",{id:"synopsis"},"Synopsis"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm prune [--production | --prod]\n")),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("h3",{id:"--prod---production"},"--prod, --production"),Object(i.b)("p",null,"Remove the packages specified in ",Object(i.b)("inlineCode",{parentName:"p"},"devDependencies"),"."))}l.isMDXComponent=!0},395:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return b}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},s=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=l(r),f=t,b=s["".concat(c,".").concat(f)]||s[f]||d[f]||i;return r?o.a.createElement(b,p(p({ref:n},u),{},{components:r})):o.a.createElement(b,p({ref:n},u))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,c=new Array(i);c[0]=f;var p={};for(var a in n)hasOwnProperty.call(n,a)&&(p[a]=n[a]);p.originalType=e,p.mdxType="string"==typeof e?e:t,c[1]=p;for(var u=2;u<i;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);