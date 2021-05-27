(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),i=n(7),r=(n(0),n(114)),o={id:"static-files-guide",title:"Deploy Static Files (Including static React, Vue, Svelte apps)",sidebar_label:"Static Files"},c={unversionedId:"tutorials/static-files-guide",id:"tutorials/static-files-guide",isDocsHomePage:!1,title:"Deploy Static Files (Including static React, Vue, Svelte apps)",description:"You can deploy static React, Vue, Svelte, or just Vanilla JavaScript apps on Deta very easily by wraping it around a simple python snippet.",source:"@site/docs/tutorials/static_files.md",slug:"/tutorials/static-files-guide",permalink:"/docs/tutorials/static-files-guide",editUrl:"https://github.com/g3thq/docs/tree/master/docs/tutorials/static_files.md",version:"current",sidebar_label:"Static Files"},l=[{value:"Setup",id:"setup",children:[]},{value:"Updating code",id:"updating-code",children:[]},{value:"Updating dependencies",id:"updating-dependencies",children:[]},{value:"Deploying Local Changes",id:"deploying-local-changes",children:[]},{value:"Visiting our endpoint",id:"visiting-our-endpoint",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"You can deploy static React, Vue, Svelte, or just Vanilla JavaScript apps on Deta very easily by wraping it around a simple python snippet."),Object(r.b)("p",null,"The guide assumes you have a ",Object(r.b)("inlineCode",{parentName:"p"},"build")," folder with your static app and have the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/cli/install"}),"Deta CLI")," installed."),Object(r.b)("h3",{id:"setup"},"Setup"),Object(r.b)("p",null,"Create a directory ",Object(r.b)("inlineCode",{parentName:"p"},"static-app")," and change the current directory to it."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ mkdir static-app && static-app\n")),Object(r.b)("p",null,"Copy your ",Object(r.b)("inlineCode",{parentName:"p"},"build")," folder into the ",Object(r.b)("inlineCode",{parentName:"p"},"static-app")," directory."),Object(r.b)("h3",{id:"updating-code"},"Updating code"),Object(r.b)("p",null,"Create a ",Object(r.b)("inlineCode",{parentName:"p"},"main.py")," file with the following snippet:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'import os\nfrom starlette.applications import Starlette\nfrom starlette.routing import Mount\nfrom starlette.staticfiles import StaticFiles\nfrom starlette.types import Receive, Scope, Send\nclass CustomStatic(StaticFiles):\n  async def __call__(self, scope: Scope, receive: Receive, send: Send) -> None:\n      """\n      The ASGI entry point.\n      """\n      assert scope["type"] == "http"\n      if not self.config_checked:\n          await self.check_config()\n          self.config_checked = True\n      path = self.get_path(scope)\n      response = await self.get_response(path, scope)\n      await response(scope, receive, send)\nroutes = [\n  Mount(\'/\', app=CustomStatic(directory=\'build\', html=True), name="static"),\n]\napp = Starlette(routes=routes)\n')),Object(r.b)("p",null,"We are mounting the build folder, and serving the files using ",Object(r.b)("inlineCode",{parentName:"p"},"Starlette"),"."),Object(r.b)("h3",{id:"updating-dependencies"},"Updating dependencies"),Object(r.b)("p",null,"Now create a ",Object(r.b)("inlineCode",{parentName:"p"},"requirements.txt")," with the following lines:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"starlette\naiofiles\n")),Object(r.b)("p",null,"Here is a look at the folder structure at the end:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"static-app/\n    \u251c\u2500\u2500 main.py\n    \u251c\u2500\u2500 requirements.txt \n    \u2514\u2500\u2500 build/...\n")),Object(r.b)("h3",{id:"deploying-local-changes"},"Deploying Local Changes"),Object(r.b)("p",null,"Deploy your application with ",Object(r.b)("inlineCode",{parentName:"p"},"deta new")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'$ deta new\nSuccessfully created a new micro\n{\n        "name": "static-app",\n        "runtime": "python3.7",\n        "endpoint": "https://{micro_subdomain}.deta.dev",\n        "visor": "enabled",\n        "http_auth": "enabled"\n}\nAdding dependencies...\n  Downloading aiofiles-0.6.0-py3-none-any.whl (11 kB)\nCollecting starlette\n  Downloading starlette-0.14.2-py3-none-any.whl (60 kB)\nInstalling collected packages: starlette, aiofiles\nSuccessfully installed aiofiles-0.6.0 starlette-0.14.2\n')),Object(r.b)("h3",{id:"visiting-our-endpoint"},"Visiting our endpoint"),Object(r.b)("p",null,"We now have a static web application running on Deta using a simple python snippet."),Object(r.b)("p",null,"If you visit the ",Object(r.b)("inlineCode",{parentName:"p"},"endpoint")," shown in the output (your endpoint will be different from this one) in your browser, you should see your application. "))}s.isMDXComponent=!0},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=a,f=u["".concat(o,".").concat(b)]||u[b]||d[b]||r;return n?i.a.createElement(f,c(c({ref:t},p),{},{components:n})):i.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<r;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);