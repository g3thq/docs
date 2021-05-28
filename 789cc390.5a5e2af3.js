(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{117:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return f}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),u=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=u(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),l=u(a),p=r,f=l["".concat(c,".").concat(p)]||l[p]||d[p]||o;return a?n.a.createElement(f,s(s({ref:t},b),{},{components:a})):n.a.createElement(f,s({ref:t},b))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var b=2;b<o;b++)c[b]=a[b];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},90:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),o=(a(0),a(117)),c={id:"about",title:"About Deta Base",sidebar_label:"About"},s={unversionedId:"base/about",id:"base/about",isDocsHomePage:!1,title:"About Deta Base",description:"Deta Base is a fully-managed, fast, scalable and secure NoSQL database with a focus on end-user simplicity. It offers a UI through which you can easily see, query, update and delete records in the database.",source:"@site/docs/base/about.md",slug:"/base/about",permalink:"/docs/base/about",editUrl:"https://github.com/g3thq/docs/tree/master/docs/base/about.md",version:"current",sidebar_label:"About"},i=[{value:"What can Deta Base be used for?",id:"what-can-deta-base-be-used-for",children:[]},{value:"Is my data secure?",id:"is-my-data-secure",children:[]},{value:"How do I start?",id:"how-do-i-start",children:[]}],b={rightToc:i};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Deta Base is a fully-managed, fast, scalable and secure NoSQL database with a focus on end-user simplicity. It offers a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./base_ui"}),"UI")," through which you can easily see, query, update and delete records in the database."),Object(o.b)("h2",{id:"what-can-deta-base-be-used-for"},"What can Deta Base be used for?"),Object(o.b)("p",null,"Deta Base is great for projects where configuring and maintaining a database is overkill. "),Object(o.b)("p",null,"Examples:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Serverless Applications"),Object(o.b)("li",{parentName:"ul"},"Internal Tools"),Object(o.b)("li",{parentName:"ul"},"Stateful Integrations "),Object(o.b)("li",{parentName:"ul"},"Hackathons and Side Projects"),Object(o.b)("li",{parentName:"ul"},"Prototyping")),Object(o.b)("h2",{id:"is-my-data-secure"},"Is my data secure?"),Object(o.b)("p",null,"Your data is encrypted and stored safely on AWS. Encryption keys are managed by AWS; AWS manages Exabytes of the world's most sensitive data."),Object(o.b)("h2",{id:"how-do-i-start"},"How do I start?"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Log in to ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://web.deta.sh"}),"Deta"),"."),Object(o.b)("li",{parentName:"ol"},"Grab your ",Object(o.b)("strong",{parentName:"li"},"Project Key")," and your ",Object(o.b)("strong",{parentName:"li"},"Project ID")," and start writing code in ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/base/sdk"}),"Python"),", ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/base/sdk"}),"Node.js"),", or over ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/base/http"}),"HTTP")," wherever you need persistent data storage.")))}u.isMDXComponent=!0}}]);