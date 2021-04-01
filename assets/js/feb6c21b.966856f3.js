(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{389:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),i=(n(0),n(395)),l={id:"filtering",title:"Filtering",original_id:"filtering"},c={unversionedId:"filtering",id:"version-4.x/filtering",isDocsHomePage:!1,title:"Filtering",description:"Added in: v2.13.0",source:"@site/versioned_docs/version-4.x/filtering.md",slug:"/filtering",permalink:"/4.x/filtering",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/versioned_docs/version-4.x/filtering.md",version:"4.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615077826,formattedLastUpdatedAt:"3/7/2021",sidebar:"version-4.x/docs",previous:{title:"Configuring",permalink:"/4.x/configuring"},next:{title:"pnpm add <pkg>",permalink:"/4.x/cli/add"}},p=[{value:"--filter &lt;package_name&gt;",id:"--filter-package_name",children:[]},{value:"--filter &lt;package_name&gt;...",id:"--filter-package_name-1",children:[]},{value:"--filter &lt;package_name&gt;^...",id:"--filter-package_name-2",children:[]},{value:"--filter ...&lt;package_name&gt;",id:"--filter-package_name-3",children:[]},{value:"--filter ...^&lt;package_name&gt;",id:"--filter-package_name-4",children:[]},{value:"--filter ./&lt;directory&gt;",id:"--filter-directory",children:[]},{value:"--filter {&lt;directory&gt;}",id:"--filter-directory-1",children:[]},{value:"--filter <since>",id:"--filter-since",children:[]}],o={toc:p};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Added in: v2.13.0"),Object(i.b)("p",null,"Filtering allows to restrict commands to subsets of packages."),Object(i.b)("p",null,"pnpm supports a rich selector syntax for picking packages by name\nor by relation."),Object(i.b)("p",null,"Selectors may be specified via the ",Object(i.b)("inlineCode",{parentName:"p"},"--filter")," flag:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm <command> --filter <package_selector>\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"An article that compares Lerna's filtering to pnpm's: ",Object(i.b)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-vs-lerna-filtering-in-a-multi-package-repository-1f68bc644d6a"},"https://medium.com/pnpm/pnpm-vs-lerna-filtering-in-a-multi-package-repository-1f68bc644d6a"))),Object(i.b)("h2",{id:"--filter-package_name"},"--filter ","<","package_name>"),Object(i.b)("p",null,"Added in: v2.13.0"),Object(i.b)("p",null,"To select an exact package, just specify its name (",Object(i.b)("inlineCode",{parentName:"p"},"@babel/core"),") or use a pattern\nto select a set of packages (",Object(i.b)("inlineCode",{parentName:"p"},"@babel/*"),")."),Object(i.b)("p",null,"Usage examples:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm test --filter @babel/core\npnpm test --filter @babel/*\npnpm test --filter *core\n")),Object(i.b)("h2",{id:"--filter-package_name-1"},"--filter ","<","package_name>..."),Object(i.b)("p",null,"Added in: v2.13.0"),Object(i.b)("p",null,"To select a package and its dependencies (direct and non-direct), suffix the package name with 3 dots: ",Object(i.b)("inlineCode",{parentName:"p"},"<package_name>..."),".\nFor instance, the next command will run installation in all dependencies of ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," and in ",Object(i.b)("inlineCode",{parentName:"p"},"foo"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm install --filter foo...\n")),Object(i.b)("p",null,'You may use a pattern to select a set of "root" packages:'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm install --filter @babel/preset-*...\n")),Object(i.b)("h2",{id:"--filter-package_name-2"},"--filter ","<","package_name>^..."),Object(i.b)("p",null,"Added in: v4.4.0"),Object(i.b)("p",null,"Selects dependencies of a package (both direct and non-direct). For instance:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm install --filter foo^...\n")),Object(i.b)("h2",{id:"--filter-package_name-3"},"--filter ...","<","package_name>"),Object(i.b)("p",null,"Added in: v2.14.0"),Object(i.b)("p",null,"To select a package and its dependent packages (direct and non-direct), prefix the package name with 3 dots: ",Object(i.b)("inlineCode",{parentName:"p"},"...<package_name>"),".\nFor instance, the next command will run installation in all dependents of ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," and in ",Object(i.b)("inlineCode",{parentName:"p"},"foo"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm install --filter ...foo\n")),Object(i.b)("p",null,"When packages in the workspace are filtered, every package is taken that matches at least one of\nthe selectors. You can use as many filters as you want:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm install --filter ...foo --filter bar --filter qar...\n")),Object(i.b)("h2",{id:"--filter-package_name-4"},"--filter ...^","<","package_name>"),Object(i.b)("p",null,"Added in: v4.4.0"),Object(i.b)("p",null,"Selects dependent of a package (both direct and non-direct). For instance:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm install --filter ...^foo\n")),Object(i.b)("h2",{id:"--filter-directory"},"--filter ./","<","directory>"),Object(i.b)("p",null,"Added in: v2.15.0"),Object(i.b)("h2",{id:"--filter-directory-1"},"--filter {","<","directory>}"),Object(i.b)("p",null,"Added in: v4.7.0"),Object(i.b)("p",null,"Includes all projects that are under the specified directory."),Object(i.b)("p",null,'It may be used with "..." to select dependents/dependencies as well:'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm <cmd> --filter ...{<directory>}\npnpm <cmd> --filter {<directory>}...\npnpm <cmd> --filter ...{<directory>}...\n")),Object(i.b)("p",null,"It may be combined with ",Object(i.b)("inlineCode",{parentName:"p"},"[<since>]"),". For instance, to select all changed projects\ninside a directory:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm <cmd> --filter {packages}[origin/master]\npnpm <cmd> --filter ...{packages}[origin/master]\npnpm <cmd> --filter {packages}[origin/master]...\npnpm <cmd> --filter ...{packages}[origin/master]...\n")),Object(i.b)("p",null,"Or you may select all packages from a directory with names matching the given pattern:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm <cmd> --filter @babel/*{components}\npnpm <cmd> --filter @babel/*{components}[origin/master]\npnpm <cmd> --filter ...@babel/*{components}[origin/master]\n")),Object(i.b)("h2",{id:"--filter-since"},"--filter ","[<","since>]"),Object(i.b)("p",null,"Added in: v4.6.0"),Object(i.b)("p",null,"Selects all the packages changed since the specified commit/branch. May be\nsuffixed or prefixed with ",Object(i.b)("inlineCode",{parentName:"p"},"...")," to include dependencies/dependents."),Object(i.b)("p",null,"For example, the next command will run tests in all changed packages since\n",Object(i.b)("inlineCode",{parentName:"p"},"master")," and on any dependent packages:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm test --filter ...[origin/master]\n")))}d.isMDXComponent=!0},395:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),b=d(n),m=a,f=b["".concat(l,".").concat(m)]||b[m]||s[m]||i;return n?r.a.createElement(f,c(c({ref:t},o),{},{components:n})):r.a.createElement(f,c({ref:t},o))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<i;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);