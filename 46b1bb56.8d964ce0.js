(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{165:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),o=(r(0),r(411)),i={id:"outdated",title:"pnpm outdated",original_id:"outdated"},c={unversionedId:"cli/outdated",id:"version-3.x/cli/outdated",isDocsHomePage:!1,title:"pnpm outdated",description:"Check for outdated packages. The check can be limited to a subset of the installed",source:"@site/versioned_docs/version-3.x/cli/outdated.md",slug:"/cli/outdated",permalink:"/3.x/cli/outdated",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-3.x/cli/outdated.md",version:"3.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615068835,sidebar:"version-3.x/docs",previous:{title:"pnpm list",permalink:"/3.x/cli/list"},next:{title:"pnpm run",permalink:"/3.x/cli/run"}},l=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]},{value:"--global",id:"--global",children:[]}]}],p={toc:l};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Check for outdated packages. The check can be limited to a subset of the installed\npackages by providing arguments (patterns are supported)."),Object(o.b)("h2",{id:"synopsis"},"Synopsis"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"pnpm outdated [-r] [--filter <package selector>]\n              [<package pattern> ...]\n\npnpm recursive outdated [--filter <package selector>]\n                        [<package pattern> ...]\n")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"pnpm outdated\npnpm outdated gulp-* @babel/core\n")),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(o.b)("p",null,"Check for outdated dependencies in every package found in subdirectories\nor in every workspace package, when executed inside a workspace."),Object(o.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"../filtering"},"Read more about filtering.")),Object(o.b)("h3",{id:"--global"},"--global"),Object(o.b)("p",null,"List outdated global packages."))}d.isMDXComponent=!0},411:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(r),b=n,f=u["".concat(i,".").concat(b)]||u[b]||s[b]||o;return r?a.a.createElement(f,c(c({ref:t},p),{},{components:r})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);