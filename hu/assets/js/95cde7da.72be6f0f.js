(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{263:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var a=t(3),r=t(8),i=(t(0),t(395)),o={id:"package_json",title:"package.json"},p={unversionedId:"package_json",id:"package_json",isDocsHomePage:!1,title:"package.json",description:"The manifest file of a package. It contains all the package's metadata, including dependencies, title, author, et cetera. This is a standard preserved across all major Node.JS package managers, including pnpm.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/package_json.md",slug:"/package_json",permalink:"/hu/next/package_json",editUrl:"https://crowdin.com/project/pnpm/hu",version:"current",sidebar:"docs",previous:{title:"pnpm store",permalink:"/hu/next/cli/store"},next:{title:".npmrc",permalink:"/hu/next/npmrc"}},c=[{value:"Fields",id:"fields",children:[{value:"engines",id:"engines",children:[]},{value:"peerDependenciesMeta",id:"peerdependenciesmeta",children:[]},{value:"publishConfig",id:"publishconfig",children:[]},{value:"pnpm.overrides",id:"pnpmoverrides",children:[]},{value:"pnpm.neverBuiltDependencies",id:"pnpmneverbuiltdependencies",children:[]}]}],s={toc:c};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The manifest file of a package. It contains all the package's metadata, including dependencies, title, author, et cetera. This is a standard preserved across all major Node.JS package managers, including pnpm."),Object(i.b)("h2",{id:"fields"},"Fields"),Object(i.b)("h3",{id:"engines"},"engines"),Object(i.b)("p",null,"You can specify the version of Node and pnpm that your software works on:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "engines": {\n        "node": ">=10",\n        "pnpm": ">=3"\n    }\n}\n')),Object(i.b)("p",null,"During local development, pnpm will always fail with an error message if its version does not match the one specified in the ",Object(i.b)("inlineCode",{parentName:"p"},"engines")," field."),Object(i.b)("p",null,"Unless the user has set the ",Object(i.b)("inlineCode",{parentName:"p"},"engine-strict")," config flag (see ",Object(i.b)("a",{parentName:"p",href:"/hu/next/npmrc#engine-strict"},".npmrc"),"), this field is advisory only and will only produce warnings when your package is installed as a dependency."),Object(i.b)("h3",{id:"peerdependenciesmeta"},"peerDependenciesMeta"),Object(i.b)("p",null,"This field lists some extra information related to the dependencies listed in the ",Object(i.b)("inlineCode",{parentName:"p"},"peerDependencies")," field."),Object(i.b)("h4",{id:"peerdependenciesmetaoptional"},"peerDependenciesMeta.*.optional"),Object(i.b)("p",null,"If this is set to true, the selected peer dependency will be marked as optional by the package manager. Therefore, the consumer omitting it will no longer be reported as an error."),Object(i.b)("p",null,"For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "peerDependencies": {\n        "foo": "1"\n    },\n    "peerDependenciesMeta": {\n        "foo": {\n            "optional": true\n        },\n        "bar": {\n            "optional": true\n        }\n    }\n}\n')),Object(i.b)("p",null,"Note that even though ",Object(i.b)("inlineCode",{parentName:"p"},"bar")," was not specified in ",Object(i.b)("inlineCode",{parentName:"p"},"peerDependencies"),", it is marked as optional. pnpm will therefore assume that any version of bar is fine. However, ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," is optional, but only to the required version specification."),Object(i.b)("h3",{id:"publishconfig"},"publishConfig"),Object(i.b)("p",null,"Added in: v3.4.0"),Object(i.b)("p",null,"It is possible to override some fields in the manifest before the package is packed. The following fields may be overridden: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#bin"},Object(i.b)("inlineCode",{parentName:"a"},"bin")),", ",Object(i.b)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#main"},Object(i.b)("inlineCode",{parentName:"a"},"main")),", ",Object(i.b)("a",{parentName:"p",href:"https://nodejs.org/api/esm.html#esm_package_exports"},Object(i.b)("inlineCode",{parentName:"a"},"exports")),", ",Object(i.b)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#types"},Object(i.b)("inlineCode",{parentName:"a"},"types")," or ",Object(i.b)("inlineCode",{parentName:"a"},"typings")),", ",Object(i.b)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#module"},Object(i.b)("inlineCode",{parentName:"a"},"module")),", ",Object(i.b)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#browser"},Object(i.b)("inlineCode",{parentName:"a"},"browser")),", ",Object(i.b)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#esnext"},Object(i.b)("inlineCode",{parentName:"a"},"esnext")),", ",Object(i.b)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#es2015"},Object(i.b)("inlineCode",{parentName:"a"},"es2015")),", ",Object(i.b)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#unpkg-1"},Object(i.b)("inlineCode",{parentName:"a"},"unpkg"))," and ",Object(i.b)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#microbundle"},Object(i.b)("inlineCode",{parentName:"a"},"umd:main")),"."),Object(i.b)("p",null,"To override a field, add the publish version of the field to ",Object(i.b)("inlineCode",{parentName:"p"},"publishConfig"),"."),Object(i.b)("p",null,"For instance, the following ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "src/index.ts",\n    "publishConfig": {\n        "main": "lib/index.js",\n        "typings": "lib/index.d.ts"\n    }\n}\n')),Object(i.b)("p",null,"Will be published as:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "lib/index.js",\n    "typings": "lib/index.d.ts"\n}\n')),Object(i.b)("h3",{id:"pnpmoverrides"},"pnpm.overrides"),Object(i.b)("p",null,"Added in: v5.10.1"),Object(i.b)("p",null,"This field allows you to instruct pnpm to override any dependency in the dependency graph. This is useful to enforce all your packages to use a single version of a dependency, backport a fix, or replace a dependency with a fork."),Object(i.b)("p",null,"Note that the overrides field can only be set at the root of the project."),Object(i.b)("p",null,"An example of the ",Object(i.b)("inlineCode",{parentName:"p"},'"pnpm"."overrides"')," field:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "overrides": {\n      "foo": "^1.0.0",\n      "bar@^2.1.0": "3.0.0",\n      "qar@1>zoo": "2"\n    }\n  }\n}\n')),Object(i.b)("p",null,'You may specify the package the overriden dependency belongs to by separating the package selector from the dependency selector with a ">", for example ',Object(i.b)("inlineCode",{parentName:"p"},"qar@1>zoo")," will only override the ",Object(i.b)("inlineCode",{parentName:"p"},"zoo")," dependency of ",Object(i.b)("inlineCode",{parentName:"p"},"qar@1"),", not for any other dependencies."),Object(i.b)("h3",{id:"pnpmneverbuiltdependencies"},"pnpm.neverBuiltDependencies"),Object(i.b)("p",null,"Added in: v5.16.0"),Object(i.b)("p",null,"This field allows to ignore the builds of specific dependencies."),Object(i.b)("p",null,"An example of the ",Object(i.b)("inlineCode",{parentName:"p"},'"pnpm"."neverBuiltDependencies"')," field:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "neverBuiltDependencies": ["fsevents", "level"]\n  }\n}\n')))}l.isMDXComponent=!0},395:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),l=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},b=function(e){var n=l(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(t),u=a,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return t?r.a.createElement(m,p(p({ref:n},s),{},{components:t})):r.a.createElement(m,p({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);