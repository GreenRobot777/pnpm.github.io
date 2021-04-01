(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{110:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(3),i=t(8),a=(t(0),t(395)),l={id:"list",title:"pnpm list",original_id:"list"},o={unversionedId:"cli/list",id:"version-4.x/cli/list",isDocsHomePage:!1,title:"pnpm list",description:"Aliases: ls",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-4.x/cli/list.md",slug:"/cli/list",permalink:"/zh/4.x/cli/list",editUrl:"https://crowdin.com/project/pnpm/zh-CN",version:"4.x",sidebar:"version-4.x/docs",previous:{title:"pnpm audit",permalink:"/zh/4.x/cli/audit"},next:{title:"pnpm outdated",permalink:"/zh/4.x/cli/outdated"}},p=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--json",id:"--json",children:[]},{value:"--long",id:"--long",children:[]},{value:"--parseable",id:"--parseable",children:[]},{value:"--global",id:"--global",children:[]},{value:"--depth &lt;number&gt;",id:"--depth-number",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--no-optional",id:"--no-optional",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],c={toc:p};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Aliases: ",Object(a.b)("inlineCode",{parentName:"p"},"ls")),Object(a.b)("p",null,"This command will print to stdout all the versions of packages that are installed, as well as their dependencies, in a tree-structure."),Object(a.b)("p",null,"Positional arguments are ",Object(a.b)("inlineCode",{parentName:"p"},"name-pattern@version-range")," identifiers, which will limit the results to only the packages named. For example, ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm list babel-* eslint-* semver@5")),Object(a.b)("h2",{id:"synopsis"},"Synopsis"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"pnpm list [-r] [--filter <package selector>] [--depth <number>]\n          [<package pattern> ...]\n\npnpm recursive list [--filter <package selector>] [--depth <number>]\n                    [<package pattern> ...]\n")),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(a.b)("p",null,"Perform command on every package in subdirectories or on every workspace package, when executed inside a workspace."),Object(a.b)("h3",{id:"--json"},"--json"),Object(a.b)("p",null,"Added in: 3.7.0"),Object(a.b)("p",null,"Show information in JSON format."),Object(a.b)("h3",{id:"--long"},"--long"),Object(a.b)("p",null,"Show extended information."),Object(a.b)("h3",{id:"--parseable"},"--parseable"),Object(a.b)("p",null,"Show parseable output instead of tree view."),Object(a.b)("h3",{id:"--global"},"--global"),Object(a.b)("p",null,"List packages in the global install directory instead of in the current project."),Object(a.b)("h3",{id:"--depth-number"},"--depth ","<","number>"),Object(a.b)("p",null,"Max display depth of the dependency tree."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"pnpm ls --depth 0")," will list direct dependencies only. ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm ls --depth -1")," will list projects only. Useful inside a workspace when used with the ",Object(a.b)("inlineCode",{parentName:"p"},"-r")," option."),Object(a.b)("h3",{id:"--prod--p"},"--prod, -P"),Object(a.b)("p",null,"Display only the dependency graph for packages in ",Object(a.b)("inlineCode",{parentName:"p"},"dependencies")," and ",Object(a.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),Object(a.b)("h3",{id:"--dev--d"},"--dev, -D"),Object(a.b)("p",null,"Display only the dependency graph for packages in ",Object(a.b)("inlineCode",{parentName:"p"},"devDependencies"),"."),Object(a.b)("h3",{id:"--no-optional"},"--no-optional"),Object(a.b)("p",null,"Don't display packages from ",Object(a.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),Object(a.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/zh/4.x/filtering"},"Read more about filtering.")))}s.isMDXComponent=!0},395:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),s=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),u=r,m=d["".concat(l,".").concat(u)]||d[u]||b[u]||a;return t?i.a.createElement(m,o(o({ref:n},c),{},{components:t})):i.a.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<a;c++)l[c]=t[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);