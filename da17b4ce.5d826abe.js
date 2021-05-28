(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=(n(0),n(117));const o={id:"advanced",title:"Advanced Micro Usage",sidebar_label:"Advanced Usage"},i={unversionedId:"micros/advanced",id:"micros/advanced",isDocsHomePage:!1,title:"Advanced Micro Usage",description:"Summary",source:"@site/docs/micros/advanced.md",slug:"/micros/advanced",permalink:"/docs/micros/advanced",editUrl:"https://github.com/g3thq/docs/tree/master/docs/micros/advanced.md",version:"current",sidebar_label:"Advanced Usage"},c=[{value:"Summary",id:"summary",children:[]},{value:"Pre-set Environment Variables",id:"pre-set-environment-variables",children:[]},{value:"Using API Keys",id:"using-api-keys",children:[]},{value:"Visor",id:"visor",children:[]}],l={rightToc:c};function b({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"summary"},"Summary"),Object(a.b)("p",null,"Ready to take your Micro usage to the next level? Have a look at the following advanced features offered by Micros:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/micros/advanced/#pre-set-environment-variables"}),"Pre-set Environment Variables")," - learn about the environment variables pre-set in your Micro."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/micros/advanced/#using-api-keys"}),"Using API Keys")," - Learn how to secure your Micro and use an API key to authenticate therewith."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/micros/advanced/#visor"}),"Visor")," - find and use Visor, a troubleshooting and testing tool.")),Object(a.b)("h3",{id:"pre-set-environment-variables"},"Pre-set Environment Variables"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"DETA_PATH")," and ",Object(a.b)("inlineCode",{parentName:"p"},"DETA_RUNTIME")," environent variables are set in every Micro's environment. "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"DETA_PATH")," contains an identifying string for your Micro.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"If your ",Object(a.b)("inlineCode",{parentName:"li"},"DETA_PATH")," contaied a value of ",Object(a.b)("inlineCode",{parentName:"li"},"sdgfh")," then your Micro is accessible at ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://sdgfh.deta.dev"}),"https://sdgfh.deta.dev"),"."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"DETA_RUNTIME")," is a boolean that tells a script if it's running on a Micro or not.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"When accessing this variable in a Micro, expect to get a ",Object(a.b)("inlineCode",{parentName:"li"},"True")," from it. ")))),Object(a.b)("h3",{id:"using-api-keys"},"Using API Keys"),Object(a.b)("p",null,"Want to really lock your Micro down? Here's how!"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Run ",Object(a.b)("inlineCode",{parentName:"li"},"deta auth enable")," from the root of the source code directory you've deployed to your Micro.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"This enables authentication for every request that is to be processed."))),Object(a.b)("li",{parentName:"ol"},"Run ",Object(a.b)("inlineCode",{parentName:"li"},"deta auth create-key")," to create a new key to be used to authenticate your requests with your Micro.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"You need to specify a name for this key and we recommend that you give it a description too. "),Object(a.b)("li",{parentName:"ul"},"For more info on creating keys, check out the ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/cli/commands/#deta-auth-create-api-key"}),"relevant docs"),"."))),Object(a.b)("li",{parentName:"ol"},"Add this key to the header of every request you'd like the Micro to process! ",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Use the ",Object(a.b)("inlineCode",{parentName:"li"},"X-API-Key")," key to do so!"),Object(a.b)("li",{parentName:"ul"},"An example of this could look like: ",Object(a.b)("inlineCode",{parentName:"li"},'deta auth create-api-key --name agent1 --desc "api key for agent 1"')))),Object(a.b)("li",{parentName:"ol"},"Profit!",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\ud83e\udd11")))),Object(a.b)("h3",{id:"visor"},"Visor"),Object(a.b)("p",null,"Something not working? Use Visor to see a live view of the result of every request processed! Using Visor, you can also test your endpoints by sending your Micro requests!"),Object(a.b)("p",null,"Open Visor by going to your Deta console before clicking on the ",Object(a.b)("em",{parentName:"p"},'"Open Visor"')," tab. You could also open the visor by running ",Object(a.b)("inlineCode",{parentName:"p"},"deta visor open")," in your terminal from the source code root of the project you have deployed to your Micro."),Object(a.b)("p",null,"We made a video about it too: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=kAwV7-bEtb0"}),"https://www.youtube.com/watch?v=kAwV7-bEtb0")))}b.isMDXComponent=!0},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=s(n),p=r,m=u["".concat(i,".").concat(p)]||u[p]||d[p]||o;return n?a.a.createElement(m,c(c({ref:t},b),{},{components:n})):a.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);