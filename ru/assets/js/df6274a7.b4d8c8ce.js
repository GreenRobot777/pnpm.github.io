(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{355:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return c}));var l=n(3),a=n(8),r=(n(0),n(395)),i={id:"pnpm-install",title:"pnpm install",original_id:"pnpm-install"},b={unversionedId:"pnpm-install",id:"version-2.x/pnpm-install",isDocsHomePage:!1,title:"pnpm install",description:"pnpm install \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0432\u0441\u0435\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u043f\u0440\u043e\u0435\u043a\u0442\u0430.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-2.x/pnpm-install.md",slug:"/pnpm-install",permalink:"/ru/2.x/pnpm-install",editUrl:"https://crowdin.com/project/pnpm/ru",version:"2.x",sidebar:"version-2.x/docs",previous:{title:"Aliases",permalink:"/ru/2.x/aliases"},next:{title:"pnpm install <pkg>",permalink:"/ru/2.x/pnpm-install-pkg"}},o=[{value:"tl;dr",id:"tldr",children:[]},{value:"store",id:"store",children:[]},{value:"offline",id:"offline",children:[]},{value:"prefer-offline",id:"prefer-offline",children:[]},{value:"network-concurrency",id:"network-concurrency",children:[]},{value:"child-concurrency",id:"child-concurrency",children:[]},{value:"lock",id:"lock",children:[]},{value:"ignore-pnpmfile",id:"ignore-pnpmfile",children:[]},{value:"pnpmfile",id:"pnpmfile",children:[]},{value:"global-pnpmfile",id:"global-pnpmfile",children:[]},{value:"independent-leaves",id:"independent-leaves",children:[]},{value:"verify-store-integrity",id:"verify-store-integrity",children:[]},{value:"package-import-method",id:"package-import-method",children:[]},{value:"shrinkwrap",id:"shrinkwrap",children:[]},{value:"shrinkwrap-only",id:"shrinkwrap-only",children:[]},{value:"frozen-shrinkwrap",id:"frozen-shrinkwrap",children:[]},{value:"prefer-frozen-shrinkwrap",id:"prefer-frozen-shrinkwrap",children:[]},{value:"reporter",id:"reporter",children:[]},{value:"use-store-server",id:"use-store-server",children:[]},{value:"use-running-store-server",id:"use-running-store-server",children:[]},{value:"side-effects-cache",id:"side-effects-cache",children:[]},{value:"side-effects-cache-readonly",id:"side-effects-cache-readonly",children:[]},{value:"shamefully-flatten",id:"shamefully-flatten",children:[]},{value:"strict-peer-dependencies",id:"strict-peer-dependencies",children:[]}],p={toc:o};function c(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(l.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"pnpm install")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0432\u0441\u0435\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u043f\u0440\u043e\u0435\u043a\u0442\u0430."),Object(r.b)("p",null,Object(r.b)("img",{src:n(400).default})),Object(r.b)("h2",{id:"tldr"},"tl;dr"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Command"),Object(r.b)("th",{parentName:"tr",align:null},"Meaning"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i --offline")),Object(r.b)("td",{parentName:"tr",align:null},"no network requests")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i --frozen-shrinkwrap")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"shrinkwrap.yaml")," is not updated")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i --prefer-frozen-shrinkwrap")),Object(r.b)("td",{parentName:"tr",align:null},"when possible, ",Object(r.b)("inlineCode",{parentName:"td"},"shrinkwrap.yaml")," is not updated")))),Object(r.b)("h2",{id:"store"},"store"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"~/.pnpm-store")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"path"))),Object(r.b)("p",null,"The location where all the packages are saved on the disk."),Object(r.b)("p",null,"The store should be always on the same disk on which installation is happening. So there will be one store per disk. If there is a home directory on the current disk, then the store is created in ",Object(r.b)("inlineCode",{parentName:"p"},"<home dir>/.pnpm-store"),". If there is no homedir on the disk, then the store is created in the root. For example, if installation is happening on disk ",Object(r.b)("inlineCode",{parentName:"p"},"D")," then the store will be created in ",Object(r.b)("inlineCode",{parentName:"p"},"D:\\.pnpm-store"),"."),Object(r.b)("p",null,"It is possible to set a store from a different disk but in that case pnpm will copy, not link, packages from the store. Hard links are possible only inside a filesystem."),Object(r.b)("h2",{id:"offline"},"offline"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043e, pnpm \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0430\u043a\u0435\u0442\u044b, \u0443\u0436\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u0432 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435. \u0415\u0441\u043b\u0438 \u043f\u0430\u043a\u0435\u0442 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043d\u0430\u0439\u0434\u0435\u043d \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0441\u044f \u043d\u0435\u0443\u0434\u0430\u0447\u043d\u043e."),Object(r.b)("h2",{id:"prefer-offline"},"prefer-offline"),Object(r.b)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v1.28.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"If true, staleness checks for cached data will be bypassed, but missing data will be requested from the server. To force full offline mode, use ",Object(r.b)("inlineCode",{parentName:"p"},"--offline"),"."),Object(r.b)("h2",{id:"network-concurrency"},"network-concurrency"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"16")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Number"))),Object(r.b)("p",null,"Controls the maximum number of HTTP requests that can be done simultaneously."),Object(r.b)("h2",{id:"child-concurrency"},"child-concurrency"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"5")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Number"))),Object(r.b)("p",null,"Controls the number of child processes run parallelly to build node modules."),Object(r.b)("h2",{id:"lock"},"lock"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"true")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"Dangerous! If false, the store is not locked. It means that several installations using the same store can run simultaneously."),Object(r.b)("p",null,"Can be passed in via a CLI option. ",Object(r.b)("inlineCode",{parentName:"p"},"--no-lock")," to set it to false. E.g.: ",Object(r.b)("inlineCode",{parentName:"p"},"pnpm install --no-lock"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If you experience issues similar to the ones described in ",Object(r.b)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/594"},"#594"),", use this option to disable locking. In the meanwhile, we'll try to find a solution that will make locking work for everyone.")),Object(r.b)("h2",{id:"ignore-pnpmfile"},"ignore-pnpmfile"),Object(r.b)("p",null,"Added in: v1.25.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"pnpmfile.js")," will be ignored. Useful together with ",Object(r.b)("inlineCode",{parentName:"p"},"--ignore-scripts")," when you want to make sure that no script gets executed during install."),Object(r.b)("h2",{id:"pnpmfile"},"pnpmfile"),Object(r.b)("p",null,"Added in: v1.39.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"pnpmfile.js")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"path")),Object(r.b)("li",{parentName:"ul"},"Example: ",Object(r.b)("strong",{parentName:"li"},".pnpm/pnpmfile.js"))),Object(r.b)("p",null,"The location of the local pnpmfile."),Object(r.b)("h2",{id:"global-pnpmfile"},"global-pnpmfile"),Object(r.b)("p",null,"Added in: v1.39.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"null")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"path")),Object(r.b)("li",{parentName:"ul"},"Example: ",Object(r.b)("strong",{parentName:"li"},"~/.pnpm/global_pnpmfile.js"))),Object(r.b)("p",null,"The location of a global pnpmfile. A global pnpmfile is used by all projects during installation."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE:")," It is recommended to use local pnpmfiles. Only use a global pnpmfile, if you use pnpm on projects that don't use pnpm as the primary package manager."),Object(r.b)("h2",{id:"independent-leaves"},"independent-leaves"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"If true, symlinks leaf dependencies directly from the global store. Leaf dependencies are packages that have no dependencies of their own. Setting this config to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," might break some packages that rely on location but gives an average of ",Object(r.b)("strong",{parentName:"p"},"8% installation speed improvement"),"."),Object(r.b)("h2",{id:"verify-store-integrity"},"verify-store-integrity"),Object(r.b)("p",null,"Added in: v1.8.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"true")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"If false, doesn't check whether packages in the store were mutated."),Object(r.b)("h2",{id:"package-import-method"},"package-import-method"),Object(r.b)("p",null,"Added in: v1.25.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"auto")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"auto"),", ",Object(r.b)("strong",{parentName:"li"},"hardlink"),", ",Object(r.b)("strong",{parentName:"li"},"copy"),", ",Object(r.b)("strong",{parentName:"li"},"reflink"))),Object(r.b)("p",null,"Controls the way packages are imported from the store."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"auto")," - try to hardlink packages from the store. If it fails, fallback to copy"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hardlink")," - hardlink packages from the store"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"copy")," - copy packages from the store"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"reflink")," - reflink (aka copy-on-write) packages from the store")),Object(r.b)("h2",{id:"shrinkwrap"},"shrinkwrap"),Object(r.b)("p",null,"Added in: v1.32.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"true")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"When set to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),", pnpm won't read or generate a ",Object(r.b)("inlineCode",{parentName:"p"},"shrinkwrap.yaml")," file."),Object(r.b)("h2",{id:"shrinkwrap-only"},"shrinkwrap-only"),Object(r.b)("p",null,"Added in: v1.26.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"When used, only updates ",Object(r.b)("inlineCode",{parentName:"p"},"shrinkwrap.yaml")," and ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," instead of checking ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," and downloading dependencies."),Object(r.b)("h2",{id:"frozen-shrinkwrap"},"frozen-shrinkwrap"),Object(r.b)("p",null,"Added in: v1.37.1"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", pnpm doesn't generate a shrinkwrap file and fails if an update is needed."),Object(r.b)("h2",{id:"prefer-frozen-shrinkwrap"},"prefer-frozen-shrinkwrap"),Object(r.b)("p",null,"Added in: v1.37.1"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"true")," (from v1.38.0)"),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"When ",Object(r.b)("inlineCode",{parentName:"p"},"true")," and the available ",Object(r.b)("inlineCode",{parentName:"p"},"shrinkwrap.yaml")," satisfies the ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," then a headless installation is performed. A headless installation is faster than a regular one because it skips dependencies resolution and peers resolution."),Object(r.b)("h2",{id:"reporter"},"reporter"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"For TTY stdout: ",Object(r.b)("strong",{parentName:"li"},"default")),Object(r.b)("li",{parentName:"ul"},"For non-TTY stdout: ",Object(r.b)("strong",{parentName:"li"},"append-only")))),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"default"),", ",Object(r.b)("strong",{parentName:"li"},"append-only"),", ",Object(r.b)("strong",{parentName:"li"},"ndjson"),", ",Object(r.b)("strong",{parentName:"li"},"silent"))),Object(r.b)("p",null,"Allows to choose the reporter that will print info about the installation progress."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"silent")," - no output is logged to the console, except fatal errors"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"default")," - the default reporter when the stdout is TTY"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"append-only")," (Added in v1.29.1) - the output is always appended to the end. No cursor manipulations are performed"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"ndjson")," - the most verbose reporter. Prints all logs in ",Object(r.b)("a",{parentName:"li",href:"http://ndjson.org/"},"ndjson")," format")),Object(r.b)("h2",{id:"use-store-server"},"use-store-server"),Object(r.b)("p",null,"Added in: v1.30.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"Starts a store server in the background. The store server will keep running after installation is done. To stop the store server, run ",Object(r.b)("inlineCode",{parentName:"p"},"pnpm server stop")),Object(r.b)("h2",{id:"use-running-store-server"},"use-running-store-server"),Object(r.b)("p",null,"Added in: v2.5.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"Only allows installation with a store server. If no store server is running, installation will fail."),Object(r.b)("h2",{id:"side-effects-cache"},"side-effects-cache"),Object(r.b)("p",null,"Added in: v1.31.0"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Stability: Experimental")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"Use and cache the results of (pre/post)install hooks."),Object(r.b)("h2",{id:"side-effects-cache-readonly"},"side-effects-cache-readonly"),Object(r.b)("p",null,"Added in: v1.31.0"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Stability: Experimental")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"Only use the side effects cache if present, do not create it for new packages."),Object(r.b)("h2",{id:"shamefully-flatten"},"shamefully-flatten"),Object(r.b)("p",null,"Added in: v1.34.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"If true, pnpm creates a flat ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," that look almost like a ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," created by npm or Yarn. Please only use this option when there is no other way to make a project work with pnpm. The strict ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," created by pnpm should always work, if it does not, most likely a dependency is missing from ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),". Use this config only as a temporary fix."),Object(r.b)("h2",{id:"strict-peer-dependencies"},"strict-peer-dependencies"),Object(r.b)("p",null,"Added in: v2.15.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"If true, commands fail on missing or invalid peer dependencies."))}c.isMDXComponent=!0},395:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var l=n(0),a=n.n(l);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),c=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=c(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(n),d=l,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||r;return n?a.a.createElement(m,b(b({ref:t},p),{},{components:n})):a.a.createElement(m,b({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:l,i[1]=b;for(var p=2;p<r;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},400:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pnpm-install-922fbb8bb4d96b8f602a40e6cd07ee13.svg"}}]);