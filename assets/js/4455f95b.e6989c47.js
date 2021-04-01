(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{163:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(8),a=(r(0),r(395)),l={id:"server",title:"pnpm server"},i={unversionedId:"cli/server",id:"cli/server",isDocsHomePage:!1,title:"pnpm server",description:"Added in: v1.30.0",source:"@site/docs/cli/server.md",slug:"/cli/server",permalink:"/next/cli/server",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/cli/server.md",version:"current",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615065083,formattedLastUpdatedAt:"3/6/2021",sidebar:"docs",previous:{title:"pnpm recursive",permalink:"/next/cli/recursive"},next:{title:"pnpm store",permalink:"/next/cli/store"}},c=[{value:"Commands",id:"commands",children:[{value:"pnpm server start",id:"pnpm-server-start",children:[]},{value:"pnpm server stop",id:"pnpm-server-stop",children:[]},{value:"pnpm server status",id:"pnpm-server-status",children:[]}]},{value:"Options",id:"options",children:[{value:"--background",id:"--background",children:[]},{value:"--network-concurrency",id:"--network-concurrency",children:[]},{value:"--protocol",id:"--protocol",children:[]},{value:"--port",id:"--port",children:[]},{value:"--store-dir",id:"--store-dir",children:[]},{value:"--no-lock",id:"--no-lock",children:[]},{value:"--ignore-stop-requests",id:"--ignore-stop-requests",children:[]},{value:"--ignore-upload-requests",id:"--ignore-upload-requests",children:[]}]}],s={toc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Added in: v1.30.0"),Object(a.b)("p",null,"Manage a store server."),Object(a.b)("h2",{id:"commands"},"Commands"),Object(a.b)("h3",{id:"pnpm-server-start"},"pnpm server start"),Object(a.b)("p",null,"Starts a server that performs all interactions with the store.\nOther commands will delegate any store-related tasks to this server."),Object(a.b)("h3",{id:"pnpm-server-stop"},"pnpm server stop"),Object(a.b)("p",null,"Stops the store server."),Object(a.b)("h3",{id:"pnpm-server-status"},"pnpm server status"),Object(a.b)("p",null,"Prints information about the running server."),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("h3",{id:"--background"},"--background"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default: ",Object(a.b)("strong",{parentName:"li"},"false")),Object(a.b)("li",{parentName:"ul"},"Type: ",Object(a.b)("strong",{parentName:"li"},"Boolean"))),Object(a.b)("p",null,"Runs the server in the background, similar to daemonizing on UNIX systems."),Object(a.b)("h3",{id:"--network-concurrency"},"--network-concurrency"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default: ",Object(a.b)("strong",{parentName:"li"},"null")),Object(a.b)("li",{parentName:"ul"},"Type: ",Object(a.b)("strong",{parentName:"li"},"Number"))),Object(a.b)("p",null,"The maximum number of network requests to process simultaneously."),Object(a.b)("h3",{id:"--protocol"},"--protocol"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default: ",Object(a.b)("strong",{parentName:"li"},"auto")),Object(a.b)("li",{parentName:"ul"},"Type: ",Object(a.b)("strong",{parentName:"li"},"auto"),", ",Object(a.b)("strong",{parentName:"li"},"tcp"),", ",Object(a.b)("strong",{parentName:"li"},"ipc"))),Object(a.b)("p",null,"The communication protocol used by the server.\nWhen this is set to ",Object(a.b)("inlineCode",{parentName:"p"},"auto"),", IPC is used on all systems except for Windows,\nwhich uses TCP."),Object(a.b)("h3",{id:"--port"},"--port"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default: ",Object(a.b)("strong",{parentName:"li"},"5813")),Object(a.b)("li",{parentName:"ul"},"Type: ",Object(a.b)("strong",{parentName:"li"},"port number"))),Object(a.b)("p",null,"The port number to use when TCP is used for communication.\nIf a port is specified and the protocol is set to ",Object(a.b)("inlineCode",{parentName:"p"},"auto"),", regardless of system\ntype, the protocol is automatically set to use TCP."),Object(a.b)("h3",{id:"--store-dir"},"--store-dir"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default: ",Object(a.b)("strong",{parentName:"li"},"<","home",">","/.pnpm-store")),Object(a.b)("li",{parentName:"ul"},"Type: ",Object(a.b)("strong",{parentName:"li"},"Path"))),Object(a.b)("p",null,"Added in: v1 as ",Object(a.b)("inlineCode",{parentName:"p"},"store")),Object(a.b)("p",null,"The directory to use for the content addressable store."),Object(a.b)("h3",{id:"--no-lock"},"--","[no-]","lock"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default: ",Object(a.b)("strong",{parentName:"li"},"false")),Object(a.b)("li",{parentName:"ul"},"Type: ",Object(a.b)("strong",{parentName:"li"},"Boolean"))),Object(a.b)("p",null,"Set whether to make the package store immutable to external processes while\nthe server is running or not."),Object(a.b)("h3",{id:"--ignore-stop-requests"},"--ignore-stop-requests"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default: ",Object(a.b)("strong",{parentName:"li"},"false")),Object(a.b)("li",{parentName:"ul"},"Type: ",Object(a.b)("strong",{parentName:"li"},"Boolean"))),Object(a.b)("p",null,"Prevents you from stopping the server using ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm server stop"),"."),Object(a.b)("h3",{id:"--ignore-upload-requests"},"--ignore-upload-requests"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default: ",Object(a.b)("strong",{parentName:"li"},"false")),Object(a.b)("li",{parentName:"ul"},"Type: ",Object(a.b)("strong",{parentName:"li"},"Boolean"))),Object(a.b)("p",null,"Prevents creating a new side effect cache during install."))}p.isMDXComponent=!0},395:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,d=u["".concat(l,".").concat(m)]||u[m]||b[m]||a;return r?o.a.createElement(d,i(i({ref:t},s),{},{components:r})):o.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);