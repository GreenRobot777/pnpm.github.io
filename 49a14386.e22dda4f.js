(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{173:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return d}));var r=t(3),a=t(7),o=(t(0),t(411)),i={id:"how-peers-are-resolved",title:"How peers are resolved",original_id:"how-peers-are-resolved"},p={unversionedId:"how-peers-are-resolved",id:"version-4.x/how-peers-are-resolved",isDocsHomePage:!1,title:"How peers are resolved",description:"One of the very great features of pnpm is that in one project, a specific version of a package will always have",source:"@site/versioned_docs/version-4.x/how-peers-are-resolved.md",slug:"/how-peers-are-resolved",permalink:"/4.x/how-peers-are-resolved",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-4.x/how-peers-are-resolved.md",version:"4.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615068835,sidebar:"version-4.x/docs",previous:{title:"Symlinked `node_modules` structure",permalink:"/4.x/symlinked-node-modules-structure"}},s=[],c={toc:s};function d(e){var n=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,i,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"One of the very great features of pnpm is that in one project, a specific version of a package will always have\none set of dependencies. There is one exclusion from it though - packages with ",Object(o.b)("a",{parentName:"p",href:"https://docs.npmjs.com/files/package.json#peerdependencies"},"peer dependencies"),"."),Object(o.b)("p",null,"Peer dependencies are resolved from dependencies installed higher in the dependency graph.\nThat means if ",Object(o.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," has two peers (",Object(o.b)("inlineCode",{parentName:"p"},"bar@^1")," and ",Object(o.b)("inlineCode",{parentName:"p"},"baz@^1"),") then it might have different sets of dependencies\nin the same project."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"- foo-parent-1\n  - bar@1.0.0\n  - baz@1.0.0\n  - foo@1.0.0\n- foo-parent-2\n  - bar@1.0.0\n  - baz@1.1.0\n  - foo@1.0.0\n")),Object(o.b)("p",null,"In the example above, ",Object(o.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," is installed for ",Object(o.b)("inlineCode",{parentName:"p"},"foo-parent-1")," and ",Object(o.b)("inlineCode",{parentName:"p"},"foo-parent-2"),". Both packages have ",Object(o.b)("inlineCode",{parentName:"p"},"bar")," and ",Object(o.b)("inlineCode",{parentName:"p"},"baz"),"as well, but\nthey depend on different versions of ",Object(o.b)("inlineCode",{parentName:"p"},"baz"),". As a result, ",Object(o.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," has two different sets of dependencies: one with ",Object(o.b)("inlineCode",{parentName:"p"},"baz@1.0.0"),"\nand the other one with ",Object(o.b)("inlineCode",{parentName:"p"},"baz@1.1.0"),". To support these use cases, pnpm has to hard link ",Object(o.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," as many times as many different dependency sets it has."),Object(o.b)("p",null,"Normally, if a package does not have peer dependencies, it is hard linked to a ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," folder next to symlinks of its dependencies."),Object(o.b)("p",null,Object(o.b)("img",{src:t(431).default})),Object(o.b)("p",null,"However, if ",Object(o.b)("inlineCode",{parentName:"p"},"foo")," has peer dependencies, there cannot be one single set of dependencies for it, so\nwe create different sets, for different peer dependency resolutions:"),Object(o.b)("p",null,Object(o.b)("img",{src:t(432).default})),Object(o.b)("p",null,"We create symlinks either to the ",Object(o.b)("inlineCode",{parentName:"p"},"foo")," that is inside ",Object(o.b)("inlineCode",{parentName:"p"},"bar@1.0.0+baz@1.0.0/node_modules")," or to the one in ",Object(o.b)("inlineCode",{parentName:"p"},"bar@1.0.0+baz@1.1.0/node_modules"),".\nAs a consequence, the Node.js module resolver algorithm will find the correct peers."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"If a package has no peer dependencies but has dependencies with peers that are resolved higher in the graph"),", then\nthat transitive package can appear in the project with different sets of dependencies. For instance, there's package ",Object(o.b)("inlineCode",{parentName:"p"},"a@1.0.0"),"\nwith a single dependency ",Object(o.b)("inlineCode",{parentName:"p"},"framework@1.0.0"),". ",Object(o.b)("inlineCode",{parentName:"p"},"framework@1.0.0")," has a peer dependency ",Object(o.b)("inlineCode",{parentName:"p"},"plugin@^1"),". ",Object(o.b)("inlineCode",{parentName:"p"},"a@1.0.0")," will never resolve the\npeers of ",Object(o.b)("inlineCode",{parentName:"p"},"framework@1.0.0"),", so it becomes dependent from the peers of ",Object(o.b)("inlineCode",{parentName:"p"},"framework@1.0.0")," as well."),Object(o.b)("p",null,"Here's how it will look like in ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules/.registry.npmjs.org"),", in case if ",Object(o.b)("inlineCode",{parentName:"p"},"a@1.0.0")," will need to appear twice in the project's\n",Object(o.b)("inlineCode",{parentName:"p"},"node_modules"),", once resolved with ",Object(o.b)("inlineCode",{parentName:"p"},"plugin@1.0.0")," and once with ",Object(o.b)("inlineCode",{parentName:"p"},"plugin@1.1.0"),"."),Object(o.b)("p",null,Object(o.b)("img",{src:t(433).default})))}d.isMDXComponent=!0},411:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return h}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),d=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},l=function(e){var n=d(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=d(t),b=r,h=l["".concat(i,".").concat(b)]||l[b]||f[b]||o;return t?a.a.createElement(h,p(p({ref:n},c),{},{components:t})):a.a.createElement(h,p({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},431:function(e,n,t){"use strict";t.r(n),n.default="data:image/png;base64,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"},432:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/2-80a306f4339a59b3dd08a5e733b38ae0.png"},433:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/4-2f6ecd1bd10cdc275d17969e8a7639f7.png"}}]);