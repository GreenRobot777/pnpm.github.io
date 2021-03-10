(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{143:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return i})),a.d(n,"metadata",(function(){return p})),a.d(n,"toc",(function(){return c})),a.d(n,"default",(function(){return l}));var r=a(3),t=a(8),o=(a(0),a(394)),i={id:"workspace",title:"Workspace",original_id:"workspace"},p={unversionedId:"workspace",id:"version-2.x/workspace",isDocsHomePage:!1,title:"Workspace",description:"pnpm supports concurrent actions in multi-package repositories (workspaces).",source:"@site/versioned_docs/version-2.x/workspace.md",slug:"/workspace",permalink:"/2.x/workspace",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/versioned_docs/version-2.x/workspace.md",version:"2.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615077826,formattedLastUpdatedAt:"3/7/2021",sidebar:"version-2.x/docs",previous:{title:"Continuous Integration",permalink:"/2.x/continuous-integration"},next:{title:"Benchmark",permalink:"/2.x/benchmark"}},c=[{value:"Linking packages inside a workspace",id:"linking-packages-inside-a-workspace",children:[]},{value:"Using a shared <code>shrinkwrap.yaml</code>",id:"using-a-shared-shrinkwrapyaml",children:[]}],s={toc:c};function l(e){var n=e.components,a=Object(t.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,a,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"pnpm supports concurrent actions in multi-package repositories (workspaces)."),Object(o.b)("p",null,"By default, when you run the ",Object(o.b)("a",{parentName:"p",href:"pnpm-recursive"},Object(o.b)("inlineCode",{parentName:"a"},"pnpm recursive [action]"))," commands,\nall the directories are searched for packages (directories with ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file).\nFrom ",Object(o.b)("inlineCode",{parentName:"p"},"v1.35.0"),", you can control what directories are searched by passing an array of globs to ",Object(o.b)("inlineCode",{parentName:"p"},"packages")," in ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml"),"."),Object(o.b)("p",null,"An example of a ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  # the root package.json\n  - '.'\n  # all packages in subdirs of packages/ and components/\n  - 'packages/**'\n  - 'components/**'\n  # exclude packages that are inside test/ directories\n  - '!**/test/**'\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml")," should be in the root of the workspace."),Object(o.b)("h2",{id:"linking-packages-inside-a-workspace"},"Linking packages inside a workspace"),Object(o.b)("p",null,"(This example will work with pnpm v2.14.0 or newer)"),Object(o.b)("p",null,"When working inside a workspace, you want your dependencies to be linked from the monorepo but declared as regular dependencies.\nLet's suppose that you have this workspace:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},".\n\u251c\u2500 pnpm-workspace.yaml\n\u2514\u2500 packages\n   \u251c\u2500 car\n   \u2514\u2500 garage\n")),Object(o.b)("p",null,"If you create a ",Object(o.b)("inlineCode",{parentName:"p"},".npmrc")," file in the root of your repository and set the value of ",Object(o.b)("inlineCode",{parentName:"p"},"link-workspace-packages")," to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", the install\ncommand will try to find packages in the repository before resolving them from the registry."),Object(o.b)("p",null,"So when you run ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm install car")," in ",Object(o.b)("inlineCode",{parentName:"p"},"/packages/garage"),", pnpm will link ",Object(o.b)("inlineCode",{parentName:"p"},"car")," to ",Object(o.b)("inlineCode",{parentName:"p"},"garage/node_modules/car")," from ",Object(o.b)("inlineCode",{parentName:"p"},"packages/car"),".\nEven though ",Object(o.b)("inlineCode",{parentName:"p"},"car")," will be linked, it will be added as a regular semver dependency to the dependencies of ",Object(o.b)("inlineCode",{parentName:"p"},"garage"),". So if the version of ",Object(o.b)("inlineCode",{parentName:"p"},"car")," in the workspace is ",Object(o.b)("inlineCode",{parentName:"p"},"1.0.0")," then this is\nhow the ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," of ",Object(o.b)("inlineCode",{parentName:"p"},"garage")," will look like after running ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm install car"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "garage",\n  "version": "1.0.0",\n  "dependencies": {\n    "car": "^1.0.0"\n  }\n}\n')),Object(o.b)("h2",{id:"using-a-shared-shrinkwrapyaml"},"Using a shared ",Object(o.b)("inlineCode",{parentName:"h2"},"shrinkwrap.yaml")),Object(o.b)("p",null,"As of v2, pnpm creates a dedicated ",Object(o.b)("inlineCode",{parentName:"p"},"shrinkwrap.yaml")," and ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," folder for each workspace package by default.\nBut from ",Object(o.b)("inlineCode",{parentName:"p"},"v2.17.0"),", it is possible to add ",Object(o.b)("a",{parentName:"p",href:"pnpm-recursive#shared-workspace-shrinkwrap"},"shared-workspace-shrinkwrap=true")," to the root ",Object(o.b)("inlineCode",{parentName:"p"},".npmrc")," of your monorepo.\nWhen and ",Object(o.b)("inlineCode",{parentName:"p"},"shared-workspace-shrinkwrap")," is ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", packages use a single ",Object(o.b)("inlineCode",{parentName:"p"},"shrinkwrap.yaml")," in the root of the monorepo.\nThis config will be ",Object(o.b)("inlineCode",{parentName:"p"},"true")," by default from pnpm v3."))}l.isMDXComponent=!0},394:function(e,n,a){"use strict";a.d(n,"a",(function(){return d})),a.d(n,"b",(function(){return u}));var r=a(0),t=a.n(r);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=t.a.createContext({}),l=function(e){var n=t.a.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},d=function(e){var n=l(e.components);return t.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},m=t.a.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,u=d["".concat(i,".").concat(m)]||d[m]||b[m]||o;return a?t.a.createElement(u,p(p({ref:n},s),{},{components:a})):t.a.createElement(u,p({ref:n},s))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return t.a.createElement.apply(null,i)}return t.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);