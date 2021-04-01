(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{318:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(8),p=(t(0),t(395)),o={id:"pnpm-vs-npm",title:"pnpm vs npm",original_id:"pnpm-vs-npm"},i={unversionedId:"pnpm-vs-npm",id:"version-2.x/pnpm-vs-npm",isDocsHomePage:!1,title:"pnpm vs npm",description:"npm's flat tree",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-2.x/pnpm-vs-npm.md",slug:"/pnpm-vs-npm",permalink:"/ru/2.x/pnpm-vs-npm",editUrl:"https://crowdin.com/project/pnpm/ru",version:"2.x"},s=[{value:"npm&#39;s flat tree",id:"npms-flat-tree",children:[]},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",children:[]},{value:"Directory dependencies",id:"directory-dependencies",children:[]}],c={toc:s};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(p.b)("h2",{id:"npms-flat-tree"},"npm's flat tree"),Object(p.b)("p",null,"npm maintains a ",Object(p.b)("a",{parentName:"p",href:"https://github.com/npm/npm/issues/6912"},"flattened dependency tree")," as of version 3. This leads to less disk space bloat, with a messy ",Object(p.b)("inlineCode",{parentName:"p"},"node_modules")," directory as a side effect."),Object(p.b)("p",null,"On the other hand, pnpm manages ",Object(p.b)("inlineCode",{parentName:"p"},"node_modules")," as an addressable storage in its ",Object(p.b)("a",{parentName:"p",href:"/ru/2.x/about-package-store"},"store layout"),". This nets you the benefits of less disk space usage, while keeping your ",Object(p.b)("inlineCode",{parentName:"p"},"node_modules")," clean."),Object(p.b)("p",null,"The good thing about pnpm's proper ",Object(p.b)("inlineCode",{parentName:"p"},"node_modules")," structure is that it ",Object(p.b)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/pnpms-strictness-helps-to-avoid-silly-bugs.html"},"helps to avoid silly bugs")," by making it impossible to use modules that are not specified in the project's ",Object(p.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(p.b)("h2",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"),Object(p.b)("p",null,"pnpm does not allow installations of packages without saving them to ",Object(p.b)("inlineCode",{parentName:"p"},"package.json"),". If no parameters are passed to ",Object(p.b)("inlineCode",{parentName:"p"},"pnpm install"),", packages are saved as regular dependencies. Like with npm, ",Object(p.b)("inlineCode",{parentName:"p"},"--save-dev")," and ",Object(p.b)("inlineCode",{parentName:"p"},"--save-optional")," can be used to install packages as dev or optional dependencies."),Object(p.b)("p",null,"As a consequence of this limitation, projects won't have any extraneous packages when they use pnpm. That's why pnpm's implementation of the ",Object(p.b)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/prune"},"prune command")," does not have the possibility of prunning specific packages. pnpm's prune always removes all the extraneous packages."),Object(p.b)("h2",{id:"directory-dependencies"},"Directory dependencies"),Object(p.b)("p",null,"Directory dependencies are the ones that start with the ",Object(p.b)("inlineCode",{parentName:"p"},"file:")," prefix and point to a directory in the filesystem. Like npm, pnpm symlinks those dependencies. Unlike npm, pnpm does not perform installation for the file dependencies. So if you have package ",Object(p.b)("inlineCode",{parentName:"p"},"foo")," (in ",Object(p.b)("inlineCode",{parentName:"p"},"home/src/foo"),"), that has a dependency ",Object(p.b)("inlineCode",{parentName:"p"},"bar@file:../bar"),", pnpm won't perform installation in ",Object(p.b)("inlineCode",{parentName:"p"},"/home/src/bar"),"."),Object(p.b)("p",null,"If you need to run installations in several packages at the same time (maybe you have a monorepo), you might want to use ",Object(p.b)("a",{parentName:"p",href:"https://github.com/pnpm/pnpmr"},"pnpmr"),". pnpmr searches for packages and runs ",Object(p.b)("inlineCode",{parentName:"p"},"pnpm install")," for them in the correct order."))}l.isMDXComponent=!0},395:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),l=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=l(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=r,b=m["".concat(o,".").concat(u)]||m[u]||d[u]||p;return t?a.a.createElement(b,i(i({ref:n},c),{},{components:t})):a.a.createElement(b,i({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,o=new Array(p);o[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<p;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);