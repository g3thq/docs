(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(121)),i={id:"foundations",title:"Ghost Foundations",sidebar_label:"Foundations"},c={unversionedId:"team/foundations",id:"team/foundations",isDocsHomePage:!1,title:"Ghost Foundations",description:"Ghost is built on the foundations of several commonly used open source projects",source:"@site/docs/team/foundations.md",slug:"/team/foundations",permalink:"/docs/team/foundations",editUrl:"https://github.com/g3thq/docs/tree/master/docs/team/foundations.md",version:"current",sidebar_label:"Foundations"},s=[{value:"MongoDB",id:"mongodb",children:[]},{value:"FastAPI",id:"fastapi",children:[]},{value:"Trivy",id:"trivy",children:[]},{value:"Terrascan",id:"terrascan",children:[]}],u={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Ghost is built on the foundations of several commonly used open source projects"),Object(a.b)("h3",{id:"mongodb"},"MongoDB"),Object(a.b)("p",null,"We currently use ",Object(a.b)("a",{href:"https://www.mongodb.com/"},"MongoDB")," to host our vulnDB."),Object(a.b)("h3",{id:"fastapi"},"FastAPI"),Object(a.b)("p",null,"Many aspects of Ghost's cloud is built on ",Object(a.b)("a",{href:"https://fastapi.tiangolo.com/"},"FastAPI"),"."),Object(a.b)("h3",{id:"trivy"},"Trivy"),Object(a.b)("p",null,"Ghost uses ",Object(a.b)("a",{href:"https://github.com/aquasecurity/trivy"},"Trivy")," for container image and git repo package enumeration. "),Object(a.b)("h3",{id:"terrascan"},"Terrascan"),Object(a.b)("p",null,"Ghost is working on integrating ",Object(a.b)("a",{href:"https://github.com/accurics/terrascan"},"Terrascan")," to detect compliance and security violations across Infrastructure as Code."))}l.isMDXComponent=!0},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(b,c(c({ref:t},u),{},{components:n})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);