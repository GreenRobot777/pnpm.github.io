(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{384:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return c}));var a=t(3),o=t(8),r=(t(0),t(394)),p={title:"Flat node_modules is not the only way",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://pbs.twimg.com/profile_images/1143606083262586880/EW2GCFKK_400x400.jpg"},s={permalink:"/blog/2020/05/27/flat-node-modules-is-not-the-only-way",source:"@site/blog/2020-05-27-flat-node-modules-is-not-the-only-way.md",description:"New users of pnpm frequently ask me about the weird structure of node_modules that pnpm creates. Why is it not flat? Where are all the sub-dependencies?",date:"2020-05-27T00:00:00.000Z",formattedDate:"May 27, 2020",tags:[],title:"Flat node_modules is not the only way",readingTime:2.72,truncated:!0,prevItem:{title:"Node-Modules configuration options with pnpm",permalink:"/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},l=[],i={toc:l};function c(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"New users of pnpm frequently ask me about the weird structure of ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," that pnpm creates. Why is it not flat? Where are all the sub-dependencies?"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"I am going to assume that readers of the article are already familiar with flat ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," created by npm and Yarn. If you don't understand why npm 3 had to start using flat ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," in v3, you can find some prehistory in ",Object(r.b)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/why-should-we-use-pnpm.html"},"Why should we use pnpm?"),".")),Object(r.b)("p",null,"So why is pnpm's ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," unusual? Let's create two directories and run ",Object(r.b)("inlineCode",{parentName:"p"},"npm add express")," in one of them and ",Object(r.b)("inlineCode",{parentName:"p"},"pnpm add express")," in the other one. Here's the top of what you get in the first directory's ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},".bin\naccepts\narray-flatten\nbody-parser\nbytes\ncontent-disposition\ncookie-signature\ncookie\ndebug\ndepd\ndestroy\nee-first\nencodeurl\nescape-html\netag\nexpress\n")),Object(r.b)("p",null,"You can see the whole directory ",Object(r.b)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/npm-example/node_modules"},"here"),"."),Object(r.b)("p",null,"And this is what you get in the ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," created by pnpm:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},".pnpm\n.modules.yaml\nexpress\n")),Object(r.b)("p",null,"You can check it ",Object(r.b)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules"},"here"),"."),Object(r.b)("p",null,"So where are all the dependencies? There is only one folder in the ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," called ",Object(r.b)("inlineCode",{parentName:"p"},".pnpm")," and a symlink called ",Object(r.b)("inlineCode",{parentName:"p"},"express"),". Well, we installed only ",Object(r.b)("inlineCode",{parentName:"p"},"express"),", so that is the only package that your application has to have access to "),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Read more about why pnpm's strictness is a good thing ",Object(r.b)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpms-strictness-helps-to-avoid-silly-bugs-9a15fb306308"},"here"))),Object(r.b)("p",null,"Let's see what is inside ",Object(r.b)("inlineCode",{parentName:"p"},"express"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"\u25be node_modules\n  \u25b8 .pnpm\n  \u25be express\n    \u25b8 lib\n      History.md\n      index.js\n      LICENSE\n      package.json\n      Readme.md\n    .modules.yaml\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"express")," has no ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules"),"? Where are all the dependencies of ",Object(r.b)("inlineCode",{parentName:"p"},"express"),"?"),Object(r.b)("p",null,"The trick is that ",Object(r.b)("inlineCode",{parentName:"p"},"express")," is just a symlink. When Node.js resolves dependencies, it uses their real locations, so it does not preserve symlinks. But where is the real location of ",Object(r.b)("inlineCode",{parentName:"p"},"express"),", you might ask?"),Object(r.b)("p",null,"Here: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules/express"},"node_modules/.pnpm/express@4.17.1/node_modules/express"),"."),Object(r.b)("p",null,"OK, so now we know the purpose of the ",Object(r.b)("inlineCode",{parentName:"p"},".pnpm/")," folder. ",Object(r.b)("inlineCode",{parentName:"p"},".pnpm/")," stores all the packages in a flat folder structure, so every package can be found in a folder named by this pattern:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},".pnpm/<name>@<version>/node_modules/<name>\n")),Object(r.b)("p",null,"We call it the virtual store directory."),Object(r.b)("p",null,"This flat structure avoids the long path issues that were caused by the nested ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," created by npm v2 but keeps packages isolated unlike the flat ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," created by npm v3,4,5,6 or Yarn v1."),Object(r.b)("p",null,"Now let's look into the real location of ",Object(r.b)("inlineCode",{parentName:"p"},"express"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"  \u25be express\n    \u25b8 lib\n      History.md\n      index.js\n      LICENSE\n      package.json\n      Readme.md\n")),Object(r.b)("p",null,"Is it a scam? It still lacks ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules"),"! The second trick of pnpm's ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," structure is that the dependencies of packages are on the same directory level on which the real location of the dependent package. So dependencies of ",Object(r.b)("inlineCode",{parentName:"p"},"express")," are not in ",Object(r.b)("inlineCode",{parentName:"p"},".pnpm/express@4.17.1/node_modules/express/node_modules/")," but in ",Object(r.b)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules"},".pnpm/express@4.17.1/node_modules/"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"\u25be node_modules\n  \u25be .pnpm\n    \u25b8 accepts@1.3.5\n    \u25b8 array-flatten@1.1.1\n    ...\n    \u25be express@4.16.3\n      \u25be node_modules\n        \u25b8 accepts\n        \u25b8 array-flatten\n        \u25b8 body-parser\n        \u25b8 content-disposition\n        ...\n        \u25b8 etag\n        \u25be express\n          \u25b8 lib\n            History.md\n            index.js\n            LICENSE\n            package.json\n            Readme.md\n")),Object(r.b)("p",null,"All the dependencies of ",Object(r.b)("inlineCode",{parentName:"p"},"express")," are symlinks to appropriate directories in ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules/.pnpm/"),". Placing dependencies of ",Object(r.b)("inlineCode",{parentName:"p"},"express")," one level up allows avoiding circular symlinks."),Object(r.b)("p",null,"So as you can see, even though pnpm's ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," structure seems unusual at first:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"it is completely Node.js compatible"),Object(r.b)("li",{parentName:"ol"},"packages are nicely grouped with their dependencies")),Object(r.b)("p",null,"The structure is a little bit ",Object(r.b)("a",{parentName:"p",href:"https://pnpm.js.org/en/how-peers-are-resolved.html"},"more complex")," for packages with peer dependencies but the idea is the same: using symlinks to create a nesting with a flat directory structure."))}c.isMDXComponent=!0},394:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),c=function(e){var n=o.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return o.a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,b=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return t?o.a.createElement(b,s(s({ref:n},i),{},{components:t})):o.a.createElement(b,s({ref:n},i))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,p=new Array(r);p[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var i=2;i<r;i++)p[i]=t[i];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);