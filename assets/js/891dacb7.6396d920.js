(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{245:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return c}));var r=t(3),i=t(8),o=(t(0),t(394)),a={id:"limitations",title:"Limitations"},l={unversionedId:"limitations",id:"version-5.x/limitations",isDocsHomePage:!1,title:"Limitations",description:"1. npm-shrinkwrap.json and package-lock.json are ignored. Unlike pnpm, npm",source:"@site/versioned_docs/version-5.x/limitations.md",slug:"/limitations",permalink:"/limitations",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/versioned_docs/version-5.x/limitations.md",version:"5.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615336009,formattedLastUpdatedAt:"3/10/2021",sidebar:"version-5.x/docs",previous:{title:"Benchmark",permalink:"/benchmark"},next:{title:"Symlinked `node_modules` structure",permalink:"/symlinked-node-modules-structure"}},s=[],p={toc:s};function c(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")," and ",Object(o.b)("inlineCode",{parentName:"li"},"package-lock.json")," are ignored. Unlike pnpm, npm\ncan install the same ",Object(o.b)("inlineCode",{parentName:"li"},"name@version")," multiple times and with different sets of\ndependencies. npm's lockfile is designed to reflect the flat ",Object(o.b)("inlineCode",{parentName:"li"},"node_modules"),"\nlayout, however, as pnpm cannot create a similar layout, it cannot respect\nnpm's lockfile format. See ",Object(o.b)("a",{parentName:"li",href:"cli/import"},"pnpm import")," if you wish to convert a lockfile to\npnpm's format, though."),Object(o.b)("li",{parentName:"ol"},"pnpm can't publish npm packages with ",Object(o.b)("inlineCode",{parentName:"li"},"bundledDependencies"),". Currently, there\nare no plans to add support for ",Object(o.b)("inlineCode",{parentName:"li"},"bundledDependencies")," either, as they do not\nwork very consistently in publishing, even on npm. Instead, we recommend you use\nan actual package bundler, like webpack, rollup, or ESBuild."),Object(o.b)("li",{parentName:"ol"},"Binstubs (files in ",Object(o.b)("inlineCode",{parentName:"li"},"node_modules/.bin"),") are always shell files, not\nsymlinks to JS files. The shell files are created to help pluggable CLI apps\nin finding their plugins in the unusual ",Object(o.b)("inlineCode",{parentName:"li"},"node_modules")," structure. This is very\nrarely an issue and if you expect the file to be a JS file, reference the\noriginal file directly instead, as described in ",Object(o.b)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/736"},"#736"),"."),Object(o.b)("li",{parentName:"ol"},"Node's ",Object(o.b)("a",{parentName:"li",href:"https://nodejs.org/api/cli.html#cli_preserve_symlinks"},"--preserve-symlinks")," flag does not work when executed in a project\nthat uses pnpm.")),Object(o.b)("p",null,"Got an idea for workarounds for these issues?\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/new"},"Share them.")))}c.isMDXComponent=!0},394:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),c=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,b=u["".concat(a,".").concat(d)]||u[d]||m[d]||o;return t?i.a.createElement(b,l(l({ref:n},p),{},{components:t})):i.a.createElement(b,l({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);