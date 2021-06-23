(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{123:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},g=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),g=r,f=u["".concat(i,".").concat(g)]||u[g]||d[g]||a;return t?o.a.createElement(f,c(c({ref:n},l),{},{components:t})):o.a.createElement(f,c({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=g;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},91:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),a=(t(0),t(123)),i={id:"docker",title:"Dockerfile Usage Cheatsheet",sidebar_label:"Dockerfile"},c={unversionedId:"usage/docker",id:"usage/docker",isDocsHomePage:!1,title:"Dockerfile Usage Cheatsheet",description:"With Ghost you can leverage OPA policy to implement Dockerfile best practice checks.",source:"@site/docs/usage/docker.md",slug:"/usage/docker",permalink:"/docs/usage/docker",editUrl:"https://github.com/g3thq/docs/tree/master/docs/usage/docker.md",version:"current",sidebar_label:"Dockerfile",sidebar:"someSidebar",previous:{title:"Repo Usage Cheatsheet",permalink:"/docs/usage/repo"},next:{title:"Ghost Casper",permalink:"/docs/k8s/admission"}},s=[{value:"General Scanning",id:"general-scanning",children:[]},{value:"Example Policy",id:"example-policy",children:[]}],l={rightToc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"With Ghost you can leverage OPA policy to implement Dockerfile best practice checks.",Object(a.b)("br",null),"\nSimply point the ghost binary at your docker file and pass in policy checks as a rego file."),Object(a.b)("h3",{id:"general-scanning"},"General Scanning"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"ghost df --rego-file df.rego Dockerfile\n")),Object(a.b)("h3",{id:"example-policy"},"Example Policy"),Object(a.b)("p",null,"Here is a sample policy. Don't forget to check out ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/g3thq/the-patch"}),"the patch")," for more examples."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'package ghost_dockerfile\n\nghost_image_result["allowed"] =  count(image_violations) == 0\nghost_image_result["reason"] = image_violations\nghost_image_result["package"] = "ghost_dockerfile"\nghost_image_result["policy"] = "ghost-dockerfile-policy"\n\nbad_users = [\n    "root",\n    "ROOT",\n    "0"\n]\n\nsuspicious_env_keys = [\n    "passwd",\n    "password",\n    "secret",\n    "key",\n    "access",\n    "api_key",\n    "apikey",\n    "token",\n]\n\nimage_violations[reason] {\n    input.nodes[i].value == "add"\n    reason := sprintf("Use COPY instead of ADD, original command %s", [input.nodes[i].original])\n}\n\nimage_violations[reason] {\n    contains(input.nodes[i].original, bad_users[_])\n    reason := sprintf("Do not use root as user, original command: %s", [input.nodes[i].original])\n}\n\nimage_violations[reason] {\n    input.nodes[i].value == "env"\n    contains(lower(input.nodes[i].next), suspicious_env_keys[_])\n    reason := sprintf("Suspicious ENV key found: %s", [input.nodes[i].original])\n}\n')))}p.isMDXComponent=!0}}]);