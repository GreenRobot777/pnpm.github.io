(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{159:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(8),o=(t(0),t(395)),i={id:"aliases",title:"Aliases"},l={unversionedId:"aliases",id:"version-5.x/aliases",isDocsHomePage:!1,title:"Aliases",description:"Aliases let you install packages with custom names.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-5.x/aliases.md",slug:"/aliases",permalink:"/zh/aliases",editUrl:"https://crowdin.com/project/pnpm/zh-CN",version:"5.x",sidebar:"version-5.x/docs",previous:{title:"Workspace",permalink:"/zh/workspaces"},next:{title:"Command line tab-completion",permalink:"/zh/completion"}},s=[],c={toc:s};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Aliases let you install packages with custom names."),Object(o.b)("p",null,"Let's assume you use ",Object(o.b)("inlineCode",{parentName:"p"},"lodash")," all over your project. There is a bug in ",Object(o.b)("inlineCode",{parentName:"p"},"lodash")," that breaks your project. You have a fix but ",Object(o.b)("inlineCode",{parentName:"p"},"lodash")," won't merge it. Normally you would either install ",Object(o.b)("inlineCode",{parentName:"p"},"lodash")," from your fork directly (as a git-hosted dependency) or publish it with a different name. If you use the second solution you have to replace all the requires in your project with the new dependency name (",Object(o.b)("inlineCode",{parentName:"p"},"require('lodash')")," => ",Object(o.b)("inlineCode",{parentName:"p"},"require('awesome-lodash')"),"). With aliases, you have a third option."),Object(o.b)("p",null,"Publish a new package called ",Object(o.b)("inlineCode",{parentName:"p"},"awesome-lodash")," and install it using ",Object(o.b)("inlineCode",{parentName:"p"},"lodash")," as its alias:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"pnpm add lodash@npm:awesome-lodash\n")),Object(o.b)("p",null,"No changes in code are needed. All the requires of ",Object(o.b)("inlineCode",{parentName:"p"},"lodash")," will now resolve to ",Object(o.b)("inlineCode",{parentName:"p"},"awesome-lodash"),"."),Object(o.b)("p",null,"Sometimes you'll want to use two different versions of a package in your project. Easy:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"pnpm add lodash1@npm:lodash@1\npnpm add lodash2@npm:lodash@2\n")),Object(o.b)("p",null,"Now you can require the first version of lodash via ",Object(o.b)("inlineCode",{parentName:"p"},"require('lodash1')")," and the second via ",Object(o.b)("inlineCode",{parentName:"p"},"require('lodash2')"),"."),Object(o.b)("p",null,"This gets even more powerful when combined with hooks. Maybe you want to replace ",Object(o.b)("inlineCode",{parentName:"p"},"lodash")," with ",Object(o.b)("inlineCode",{parentName:"p"},"awesome-lodash")," in all the packages in ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules"),". You can easily achieve that with the following ",Object(o.b)("inlineCode",{parentName:"p"},"pnpmfile.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"function readPackage(pkg) {\n  if (pkg.dependencies && pkg.dependencies.lodash) {\n    pkg.dependencies.lodash = 'npm:awesome-lodash@^1.0.0'\n  }\n  return pkg\n}\n\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n")))}p.isMDXComponent=!0},395:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),b=a,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return t?r.a.createElement(m,l(l({ref:n},c),{},{components:t})):r.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=b;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);