(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{196:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(8),o=(t(0),t(394)),i={id:"hooks",title:"Hooks",original_id:"hooks"},l={unversionedId:"hooks",id:"version-2.x/hooks",isDocsHomePage:!1,title:"Hooks",description:"pnpm allows to step directly into the installation process via special functions called hooks.",source:"@site/versioned_docs/version-2.x/hooks.md",slug:"/hooks",permalink:"/2.x/hooks",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/versioned_docs/version-2.x/hooks.md",version:"2.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615077826,formattedLastUpdatedAt:"3/7/2021",sidebar:"version-2.x/docs",previous:{title:"Configuring",permalink:"/2.x/configuring"},next:{title:"Aliases",permalink:"/2.x/aliases"}},c=[{value:"tl;dr",id:"tldr",children:[]},{value:"<code>hooks.readPackage(pkg, context): pkg</code>",id:"hooksreadpackagepkg-context-pkg",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Usage",id:"usage",children:[]}]},{value:"<code>hooks.afterAllResolved(shrinkwrap, context): shrinkwrap</code>",id:"hooksafterallresolvedshrinkwrap-context-shrinkwrap",children:[{value:"Arguments",id:"arguments-1",children:[]},{value:"Usage",id:"usage-1",children:[]}]}],s={toc:c};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"pnpm allows to step directly into the installation process via special functions called ",Object(o.b)("em",{parentName:"p"},"hooks"),".\nHooks can be declared in a file called ",Object(o.b)("inlineCode",{parentName:"p"},"pnpmfile.js"),". ",Object(o.b)("inlineCode",{parentName:"p"},"pnpmfile.js")," should live in the root of the project."),Object(o.b)("h2",{id:"tldr"},"tl;dr"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Option"),Object(o.b)("th",{parentName:"tr",align:null},"Meaning"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"hooks.readPackage(pkg, context): pkg")),Object(o.b)("td",{parentName:"tr",align:null},"Allows to mutate every dependency's ",Object(o.b)("inlineCode",{parentName:"td"},"package.json"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"hooks.afterAllResolved(shrinkwrap, context): shrinkwrap")),Object(o.b)("td",{parentName:"tr",align:null},"Is called after resolution stage. Allows to mutate the shrinkwrap object.")))),Object(o.b)("h2",{id:"hooksreadpackagepkg-context-pkg"},Object(o.b)("inlineCode",{parentName:"h2"},"hooks.readPackage(pkg, context): pkg")),Object(o.b)("p",null,"Allows to mutate every dependency's ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),".\nAn example of a ",Object(o.b)("inlineCode",{parentName:"p"},"pnpmfile.js")," that changes the dependencies field of a dependency:\nYou will need to delete the ",Object(o.b)("inlineCode",{parentName:"p"},"shrinkwrap.yaml")," if you have already resolved the dependency you want change."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  hooks: {\n    readPackage\n  }\n}\n\nfunction readPackage (pkg, context) {\n  // Override the manifest of foo@1 after downloading it from the registry\n  // Replace all dependencies with bar@2\n  if (pkg.name === 'foo' && pkg.version.startsWith('1.')) {\n    pkg.dependencies = {\n      bar: '^2.0.0'\n    }\n    context.log('bar@1 => bar@2 in dependencies of foo')\n  }\n  \n  // This will fix any dependencies on baz to 1.2.3\n  if (pkg.dependencies && pkg.dependencies.baz === '*') {\n    pkg.dependencies.baz = '1.2.3';\n  }\n  \n  return pkg\n}\n")),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pkg")," - ",Object(o.b)("em",{parentName:"li"},"Manifest")," - The manifest of the package. Either the response from the registry or the ",Object(o.b)("inlineCode",{parentName:"li"},"package.json")," content."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"context.log(msg)")," - ",Object(o.b)("em",{parentName:"li"},"Function")," - Allows to log messages.")),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("h4",{id:"substitute-a-package-with-your-fork"},"Substitute a package with your fork"),Object(o.b)("p",null,"Lets' suppose you forked a package with an important fix and you want the fixed\nversion installed."),Object(o.b)("p",null,"The following hook substitutes ",Object(o.b)("inlineCode",{parentName:"p"},"resolve")," with ",Object(o.b)("inlineCode",{parentName:"p"},"@zkochan"),"'s fork."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"'use strict'\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n\nfunction readPackage (pkg) {\n  if (pkg.dependencies && pkg.dependencies.resolve) {\n    pkg.dependencies.resolve = 'zkochan/node-resolve'\n  }\n\n  return pkg\n}\n")),Object(o.b)("h4",{id:"packages-validation"},"Packages validation"),Object(o.b)("p",null,"You want only packages with MIT license in your ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules"),"? Check the licenses\nand throw an exception if you don't like the package's license:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"'use strict'\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n\nfunction readPackage (pkg) {\n  if (pkg.license !== 'MIT') {\n    throw new Error('Invalid license!')\n  }\n\n  return pkg\n}\n")),Object(o.b)("h4",{id:"renaming-bins"},"Renaming bins"),Object(o.b)("p",null,"You want to rename a package's bin? Just replace it:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"'use strict'\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n\nfunction readPackage (pkg) {\n  if (pkg.name === 'eslint') {\n    pkg.bin = {jslint: pkg.bin}\n  }\n\n  return pkg\n}\n")),Object(o.b)("p",null,"Now you can run ",Object(o.b)("inlineCode",{parentName:"p"},"jslint fix")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"eslint fix"),"."),Object(o.b)("h2",{id:"hooksafterallresolvedshrinkwrap-context-shrinkwrap"},Object(o.b)("inlineCode",{parentName:"h2"},"hooks.afterAllResolved(shrinkwrap, context): shrinkwrap")),Object(o.b)("p",null,"Added in: v1.41.0"),Object(o.b)("p",null,"Is called after resolution stage. Allows to mutate the shrinkwrap object."),Object(o.b)("h3",{id:"arguments-1"},"Arguments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"shrinkwrap")," - ",Object(o.b)("em",{parentName:"li"},"object")," - The object that is saved to ",Object(o.b)("inlineCode",{parentName:"li"},"shrinkwrap.yaml"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"context.log(msg)")," - ",Object(o.b)("em",{parentName:"li"},"Function")," - Allows to log messages.")),Object(o.b)("h3",{id:"usage-1"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  hooks: {\n    afterAllResolved\n  }\n}\n\nfunction afterAllResolved (shrinkwrap, context) {\n  // ...\n  return shrinkwrap\n}\n")))}p.isMDXComponent=!0},394:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return t?r.a.createElement(m,l(l({ref:n},s),{},{components:t})):r.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);