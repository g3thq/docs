(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{117:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var b=c.a.createContext({}),s=function(e){var t=c.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return c.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},u=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||r;return n?c.a.createElement(m,o(o({ref:t},b),{},{components:n})):c.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var b=2;b<r;b++)i[b]=n[b];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n(3),c=(n(0),n(117));const r={id:"auth",title:"Authentication",sidebar_label:"Authentication"},i={unversionedId:"cli/auth",id:"cli/auth",isDocsHomePage:!1,title:"Authentication",description:"The deta cli authenticates in two ways:",source:"@site/docs/cli/auth.md",slug:"/cli/auth",permalink:"/docs/cli/auth",editUrl:"https://github.com/g3thq/docs/tree/master/docs/cli/auth.md",version:"current",sidebar_label:"Authentication"},o=[{value:"Login From The Browser",id:"login-from-the-browser",children:[]},{value:"Deta Access Tokens",id:"deta-access-tokens",children:[]}],l={rightToc:o};function b({components:e,...t}){return Object(c.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The deta cli authenticates in two ways:"),Object(c.b)("h3",{id:"login-from-the-browser"},"Login From The Browser"),Object(c.b)("p",null,"Use deta command ",Object(c.b)("inlineCode",{parentName:"p"},"deta login")," to login from the web browser. It will open the login page in a web browser. "),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"If the login page could not be opened automatically for some reason, the cli will display the login url. Open the link in a browser for the login to complete."))),Object(c.b)("h3",{id:"deta-access-tokens"},"Deta Access Tokens"),Object(c.b)("p",null,"The deta cli also authenticates with deta access tokens. You can create an access token under the ",Object(c.b)("inlineCode",{parentName:"p"},"Settings")," view at ",Object(c.b)("inlineCode",{parentName:"p"},"https://web.deta.sh/home/:your_username/")," (also accessible by clicking the blue left caret ",Object(c.b)("inlineCode",{parentName:"p"},"<")," from the nav bar in a project's view). The access tokens are ",Object(c.b)("strong",{parentName:"p"},"valid for a year"),"."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"The access token can only be retreived once after creation. Please, store it in a safe place after the token has been created."))),Object(c.b)("h4",{id:"token-provider-chain"},"Token Provider Chain"),Object(c.b)("p",null,"The access token (called ",Object(c.b)("em",{parentName:"p"},"Access Token")," when you create the token from the UI) can be set up to be used by the cli in the following ways in order of preference:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"DETA_ACCESS_TOKEN")," environment variable: "),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"provide the access token through the cli's environment under the environment variable ",Object(c.b)("inlineCode",{parentName:"li"},"DETA_ACCESS_TOKEN")))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"$HOME/.deta/tokens")," file:"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"create a file called ",Object(c.b)("inlineCode",{parentName:"p"},"tokens")," in ",Object(c.b)("inlineCode",{parentName:"p"},"$HOME/.deta/"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"provide the token in the field ",Object(c.b)("inlineCode",{parentName:"p"},"deta_access_token")," in the file as ",Object(c.b)("em",{parentName:"p"},"json")," :"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "deta_access_token": "your_access_token"\n}\n')))))),Object(c.b)("h4",{id:"using-deta-in-gitpod-with-access-tokens"},"Using Deta in GitPod with Access Tokens"),Object(c.b)("p",null,"To use the Deta CLI in GitPod, first install the Deta CLI to your GitPod terminal:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl -fsSL https://get.deta.dev/cli.sh | sh\n")),Object(c.b)("p",null,"Then add the ",Object(c.b)("inlineCode",{parentName:"p"},"deta")," command to the path of the Gitpod environment:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"source ~/.bashrc\n")),Object(c.b)("p",null,"Finally, add your authentication token to the GitPod environment, which will authenticate the Deta CLI commands against our backend:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"export DETA_ACCESS_TOKEN=<access_token_here>\n")),Object(c.b)("p",null,"You are now free to use the ",Object(c.b)("inlineCode",{parentName:"p"},"deta")," command within GitPod!"),Object(c.b)("h4",{id:"using-deta-in-github-actions-with-access-tokens"},"Using Deta in GitHub Actions with Access Tokens"),Object(c.b)("p",null,"Use this ready-to-use ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/marketplace/actions/deploy-to-deta"}),"GitHub action")," to deploy your app to Deta."))}b.isMDXComponent=!0}}]);