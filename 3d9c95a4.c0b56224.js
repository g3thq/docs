(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?o.a.createElement(f,i(i({ref:t},l),{},{components:n})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(121)),c={id:"home",title:"Home"},i={unversionedId:"home",id:"home",isDocsHomePage:!1,title:"Home",description:"Welcome to the Ghost Project",source:"@site/docs/home.md",slug:"/home",permalink:"/docs/home",editUrl:"https://github.com/g3thq/docs/tree/master/docs/home.md",version:"current",sidebar:"someSidebar",next:{title:"Downloads",permalink:"/docs/downloads"}},s=[{value:"Welcome to the Ghost Project",id:"welcome-to-the-ghost-project",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"welcome-to-the-ghost-project"},"Welcome to the Ghost Project"),Object(a.b)("p",null,"Ghost (g3t) is a early stage research project and security toolkit in the areas of vulnerability managment, container image assurance, and IaC.\nOur mission is to provide an open community approach to vuln findings in these areas."),Object(a.b)("p",null,"g3t's initial focus is on providing a fast and flexible container vulnerability scanner. For platform specific binaries check out the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/downloads"}),"downloads")," page.",Object(a.b)("br",null),Object(a.b)("br",null),"\nOther initatives also include ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/k8s/admission"}),"Casper")," our k8s admission webhook and the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/interface/pumpkin"}),"Pumpkin")," vuln\nfindings UI component framework."))}p.isMDXComponent=!0}}]);