(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{114:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||r;return a?o.a.createElement(m,c(c({ref:t},b),{},{components:a})):o.a.createElement(m,c({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var b=2;b<r;b++)i[b]=a[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},115:function(e,t,a){"use strict";function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},116:function(e,t,a){"use strict";var n=a(0),o=a(117);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},117:function(e,t,a){"use strict";var n=a(0),o=Object(n.createContext)(void 0);t.a=o},118:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(116),i=a(115),c=a(53),l=a.n(c),b=37,s=39;t.a=function(e){var t=e.lazy,a=e.block,c=e.children,p=e.defaultValue,d=e.values,u=e.groupId,m=e.className,h=Object(r.a)(),O=h.tabGroupChoices,j=h.setTabGroupChoices,f=Object(n.useState)(p),N=f[0],y=f[1];if(null!=u){var w=O[u];null!=w&&w!==N&&d.some((function(e){return e.value===w}))&&y(w)}var g=function(e){y(e),null!=u&&j(u,e)},v=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},m)},d.map((function(e){var t=e.value,a=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":N===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":N===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case s:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(v,e.target,e)},onFocus:function(){return g(t)},onClick:function(){g(t)}},a)}))),t?Object(n.cloneElement)(c.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},c.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},119:function(e,t,a){"use strict";var n=a(3),o=a(0),r=a.n(o);t.a=function(e){var t=e.children,a=e.hidden,o=e.className;return r.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:o}),t)}},68:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),o=(a(0),a(114)),r=a(118),i=a(119);const c={id:"webhooks-guide",title:"Webhooks",sidebar_label:"Webhooks"},l={unversionedId:"tutorials/webhooks-guide",id:"tutorials/webhooks-guide",isDocsHomePage:!1,title:"Webhooks",description:"Deta Micros make it extremely easy to deploy webhook servers.",source:"@site/docs/tutorials/webhooks.md",slug:"/tutorials/webhooks-guide",permalink:"/docs/tutorials/webhooks-guide",editUrl:"https://github.com/g3thq/docs/tree/master/docs/tutorials/webhooks.md",version:"current",sidebar_label:"Webhooks"},b=[],s={rightToc:b};function p({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/micros/about"}),"Deta Micros")," make it extremely easy to deploy webhook servers. "),Object(o.b)("p",null,"Each Deta Micro has a unique HTTPS endpoint which can be used as the webhook URL. "),Object(o.b)("p",null,"You can use your favorite web application framework for your webhook server."),Object(o.b)("p",null,"The guide assumes you have already signed up for Deta and have the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/cli/install"}),"Deta CLI")," installed."),Object(o.b)(r.a,{groupId:"preferred-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"js",mdxType:"TabItem"},Object(o.b)("p",null,"We are going to use ",Object(o.b)("inlineCode",{parentName:"p"},"express")," with our Deta Micro and deploy a simple ",Object(o.b)("inlineCode",{parentName:"p"},"nodejs")," webhook server.  "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a directory ",Object(o.b)("inlineCode",{parentName:"p"},"express-webhook")," and change the current directory to it."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ mkdir express-webhook && cd express-webhook\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create an empty ",Object(o.b)("inlineCode",{parentName:"p"},"index.js")," file (we will add the code that handles the logic later).")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Initialize a ",Object(o.b)("inlineCode",{parentName:"p"},"nodejs")," project with ",Object(o.b)("inlineCode",{parentName:"p"},"npm init")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ npm init -y\n")),Object(o.b)("p",{parentName:"li"},"You can skip the ",Object(o.b)("inlineCode",{parentName:"p"},"-y")," flag, if you want to fill the details about the package interactively through npm's wizard.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install ",Object(o.b)("inlineCode",{parentName:"p"},"express")," locally for your project."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ npm install express\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a new ",Object(o.b)("inlineCode",{parentName:"p"},"nodejs")," micro with ",Object(o.b)("inlineCode",{parentName:"p"},"deta new"),". This will create a new ",Object(o.b)("inlineCode",{parentName:"p"},"nodejs")," micro for you and automatically install ",Object(o.b)("inlineCode",{parentName:"p"},"express")," as a dependency."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'$ deta new\nSuccessfully created a new micro\n{\n    "name": "express-webhook",\n    "runtime": "nodejs12.x",\n    "endpoint": "https://{micro_name}.deta.dev",\n    "visor": "enabled",\n    "http_auth": "enabled"\n}\nAdding dependencies...\n\n+ express@4.17.1\nadded 50 packages from 37 contributors and audited 50 packages in 1.967s\nfound 0 vulnerabilities\n')),Object(o.b)("p",{parentName:"li"},"Your micro's ",Object(o.b)("inlineCode",{parentName:"p"},"endpoint")," will be different from the output shown above. This ",Object(o.b)("inlineCode",{parentName:"p"},"endpoint")," will be the webhook URL when you set up your webhooks.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"You can also see that the ",Object(o.b)("inlineCode",{parentName:"p"},"http_auth")," is ",Object(o.b)("inlineCode",{parentName:"p"},"enabled")," by default. We will disable the ",Object(o.b)("inlineCode",{parentName:"p"},"http_auth")," so that webhook events can be sent to the micro. "),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ deta auth disable\nSuccessfully disabled http auth\n")),Object(o.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Usually for security, a secret token is shared between the sender and the receiver and a hmac signature is calculated from the payload and the shared secret. The algorithm to calculate the signature varies based on the sender. You should consult the documentation of how the signature is calculated for the system you are receiving events from.")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add a ",Object(o.b)("inlineCode",{parentName:"p"},"POST")," route to ",Object(o.b)("inlineCode",{parentName:"p"},"index.js"),". Most webhook callbacks send a ",Object(o.b)("inlineCode",{parentName:"p"},"POST")," request on the webhook URL with the payload containing information about the event that triggered the webhook. "),Object(o.b)("p",{parentName:"li"},"Open ",Object(o.b)("inlineCode",{parentName:"p"},"index.js")," and add the handler to handle webhook events."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const express = require('express');\n\nconst app = express(); \n\n// a POST route for our webhook events\napp.post('/', (req, res) => {\n    // verify signature if needed\n    // add your logic to handle the request\n    res.send(\"ok\");\n});\n\n// you only need to export your app for the deta micro. You don't need to start the server on a port.\nmodule.exports = app;\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Deploy your changes with ",Object(o.b)("inlineCode",{parentName:"p"},"deta deploy"),"."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ deta deploy\nSuccessfully deployed changes\n")))),Object(o.b)("p",null,"Your micro will now trigger on ",Object(o.b)("inlineCode",{parentName:"p"},"POST")," requests to the micro's endpoint. Use your micro's endpoint as the webhook URL when you set up your webhooks elsewhere."),Object(o.b)("p",null,"In order to see the logs when the webhook is triggered, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"deta visor")," to see real-time logs of your application. You can also replay your webhook events from ",Object(o.b)("inlineCode",{parentName:"p"},"deta visor")," to debug any issues. "),Object(o.b)("p",null,"You can open your visor page with the command ",Object(o.b)("inlineCode",{parentName:"p"},"deta visor open")," from the cli.")),Object(o.b)(i.a,{value:"py",mdxType:"TabItem"},Object(o.b)("p",null,"We are going to use ",Object(o.b)("inlineCode",{parentName:"p"},"fastapi")," with our Deta Micro and deploy a simple ",Object(o.b)("inlineCode",{parentName:"p"},"python")," webhook server.  "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a directory ",Object(o.b)("inlineCode",{parentName:"p"},"fastapi-webhook")," and change the current directory to it."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ mkdir fastapi-webhook && cd fastapi-webhook\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create an empty ",Object(o.b)("inlineCode",{parentName:"p"},"main.py")," file (we will add the code that handles the logic later).")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a ",Object(o.b)("inlineCode",{parentName:"p"},"requirements.txt")," file and add ",Object(o.b)("inlineCode",{parentName:"p"},"fastapi")," as a dependency."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"fastapi\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a new ",Object(o.b)("inlineCode",{parentName:"p"},"python")," micro with ",Object(o.b)("inlineCode",{parentName:"p"},"deta new"),". This will create a new ",Object(o.b)("inlineCode",{parentName:"p"},"python")," micro for you and automatically install ",Object(o.b)("inlineCode",{parentName:"p"},"fastapi")," as a dependency."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'$ deta new\nSuccessfully created a new micro\n{\n    "name": "fastapi-webhook",\n    "runtime": "python3.7",\n    "endpoint": "https://{micro_name}.deta.dev",\n    "visor": "enabled",\n    "http_auth": "enabled"\n}\nAdding dependencies...\nCollecting fastapi\n...\nSuccessfully installed fastapi-0.61.1 pydantic-1.6.1 starlette-0.13.6\n')),Object(o.b)("p",{parentName:"li"},"Your micro's ",Object(o.b)("inlineCode",{parentName:"p"},"endpoint")," will be different from the output shown above. This ",Object(o.b)("inlineCode",{parentName:"p"},"endpoint")," will be the webhook URL when you set up your webhooks.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"You can also see that the ",Object(o.b)("inlineCode",{parentName:"p"},"http_auth")," is ",Object(o.b)("inlineCode",{parentName:"p"},"enabled")," by default. We will disable the ",Object(o.b)("inlineCode",{parentName:"p"},"http_auth")," so that webhook events can be sent to the micro. "),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ deta auth disable\nSuccessfully disabled http auth\n")),Object(o.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Usually for security, a secret token is shared between the sender and the receiver and a hmac signature is calculated from the payload and the shared secret. The algorithm to calculate the signature varies based on the sender. You should consult the documentation of how the signature is calculated for the system you are receiving events from.")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add a ",Object(o.b)("inlineCode",{parentName:"p"},"POST")," route to ",Object(o.b)("inlineCode",{parentName:"p"},"main.py"),". Most webhook callbacks send a ",Object(o.b)("inlineCode",{parentName:"p"},"POST")," request on the webhook URL with the payload containing information about the event that triggered the webhook. "),Object(o.b)("p",{parentName:"li"},"Open ",Object(o.b)("inlineCode",{parentName:"p"},"main.py")," and add the handler to handle webhook events."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'from fastapi import FastAPI, Request\n\napp = FastAPI()\n\n# a POST route for our webhook events\n@app.post("/")\ndef webhook_handler(req: Request):\n    # verify signature if needed\n    # add logic to handle the request\n    return "ok"\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Deploy your changes with ",Object(o.b)("inlineCode",{parentName:"p"},"deta deploy"),"."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ deta deploy\nSuccessfully deployed changes\n")))),Object(o.b)("p",null,"Your micro will now trigger on ",Object(o.b)("inlineCode",{parentName:"p"},"POST")," requests to the micro's endpoint. Use your micro's endpoint as the webhook URL when you set up your webhooks elsewhere."),Object(o.b)("p",null,"In order to see the logs of when the webhook is triggered, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"deta visor")," to see real-time logs of your application. You can also replay your webhook events from ",Object(o.b)("inlineCode",{parentName:"p"},"deta visor")," to debug any issues. "),Object(o.b)("p",null,"You can open your visor page with the command ",Object(o.b)("inlineCode",{parentName:"p"},"deta visor open")," from the cli."))))}p.isMDXComponent=!0}}]);