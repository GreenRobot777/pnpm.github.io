(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{258:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(8),o=(n(0),n(395)),i={id:"outdated",title:"pnpm outdated",original_id:"outdated"},c={unversionedId:"cli/outdated",id:"version-4.x/cli/outdated",isDocsHomePage:!1,title:"pnpm outdated",description:"Check for outdated packages. The check can be limited to a subset of the installed packages by providing arguments (patterns are supported).",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-4.x/cli/outdated.md",slug:"/cli/outdated",permalink:"/ru/4.x/cli/outdated",editUrl:"https://crowdin.com/project/pnpm/ru",version:"4.x",sidebar:"version-4.x/docs",previous:{title:"pnpm list",permalink:"/ru/4.x/cli/list"},next:{title:"pnpm why",permalink:"/ru/4.x/cli/why"}},l=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]},{value:"--global",id:"--global",children:[]},{value:"--long",id:"--long",children:[]},{value:"--no-table",id:"--no-table",children:[]},{value:"--compatible",id:"--compatible",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--no-optional",id:"--no-optional",children:[]}]}],p={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Check for outdated packages. The check can be limited to a subset of the installed packages by providing arguments (patterns are supported)."),Object(o.b)("h2",{id:"synopsis"},"Synopsis"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"pnpm outdated [-r] [--filter <package selector>]\n              [<package pattern> ...]\n\npnpm recursive outdated [--filter <package selector>]\n                        [<package pattern> ...]\n")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"pnpm outdated\npnpm outdated gulp-* @babel/core\n")),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(o.b)("p",null,"Check for outdated dependencies in every package found in subdirectories or in every workspace package, when executed inside a workspace."),Object(o.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/ru/4.x/filtering"},"Read more about filtering.")),Object(o.b)("h3",{id:"--global"},"--global"),Object(o.b)("p",null,"List outdated global packages."),Object(o.b)("h3",{id:"--long"},"--long"),Object(o.b)("p",null,"Added in: v4.0.0"),Object(o.b)("p",null,"Print details."),Object(o.b)("h3",{id:"--no-table"},"--no-table"),Object(o.b)("p",null,"Added in: v4.0.0"),Object(o.b)("p",null,"Prints the outdated dependencies in a list, not in a table. Good for small consoles."),Object(o.b)("h3",{id:"--compatible"},"--compatible"),Object(o.b)("p",null,"Added in: v4.7.0"),Object(o.b)("p",null,"Prints only versions that satisfy specs in ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(o.b)("h3",{id:"--dev--d"},"--dev, -D"),Object(o.b)("p",null,"Added in: v4.7.0"),Object(o.b)("p",null,"Checks only ",Object(o.b)("inlineCode",{parentName:"p"},"devDependencies"),"."),Object(o.b)("h3",{id:"--prod--p"},"--prod, -P"),Object(o.b)("p",null,"Added in: v4.7.0"),Object(o.b)("p",null,"Checks only ",Object(o.b)("inlineCode",{parentName:"p"},"dependencies")," and ",Object(o.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),Object(o.b)("h3",{id:"--no-optional"},"--no-optional"),Object(o.b)("p",null,"Added in: v4.7.0"),Object(o.b)("p",null,"Doesn't check ",Object(o.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."))}d.isMDXComponent=!0},395:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),s=r,m=u["".concat(i,".").concat(s)]||u[s]||b[s]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);