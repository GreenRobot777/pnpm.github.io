(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{411:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,f=m["".concat(a,".").concat(d)]||m[d]||s[d]||i;return t?o.a.createElement(f,p(p({ref:n},l),{},{components:t})):o.a.createElement(f,p({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},88:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),i=(t(0),t(411)),a={id:"import",title:"pnpm import",original_id:"import"},p={unversionedId:"cli/import",id:"version-5.x/cli/import",isDocsHomePage:!1,title:"pnpm import",description:"Added in: v2.15.0",source:"@site/versioned_docs/version-5.x/cli/import.md",slug:"/cli/import",permalink:"/cli/import",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-5.x/cli/import.md",version:"5.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615068835,sidebar:"version-5.x/docs",previous:{title:"pnpm unlink",permalink:"/cli/unlink"},next:{title:"pnpm rebuild",permalink:"/cli/rebuild"}},c=[],l={toc:c};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Added in: v2.15.0"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"pnpm import")," generates a ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," from an npm ",Object(i.b)("inlineCode",{parentName:"p"},"package-lock.json")," (or\n",Object(i.b)("inlineCode",{parentName:"p"},"npm-shrinkwrap.json"),") file."))}u.isMDXComponent=!0}}]);