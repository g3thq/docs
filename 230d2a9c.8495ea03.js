(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},115:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},116:function(e,t,n){"use strict";var a=n(0),r=n(117);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},117:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},118:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(116),o=n(115),c=n(53),l=n.n(c),s=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.children,u=e.defaultValue,d=e.values,b=e.groupId,m=e.className,f=Object(i.a)(),g=f.tabGroupChoices,v=f.setTabGroupChoices,O=Object(a.useState)(u),j=O[0],h=O[1];if(null!=b){var y=g[b];null!=y&&y!==j&&d.some((function(e){return e.value===y}))&&h(y)}var w=function(e){h(e),null!=b&&v(b,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(a.cloneElement)(c.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},c.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},119:function(e,t,n){"use strict";var a=n(3),r=n(0),i=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=(n(0),n(114));n(118),n(119);const i={id:"node_tutorial",title:"Node Tutorial"},o={unversionedId:"drive/node_tutorial",id:"drive/node_tutorial",isDocsHomePage:!1,title:"Node Tutorial",description:"Building a Simple Image Server with Deta Drive",source:"@site/docs/drive/node_tutorial.md",slug:"/drive/node_tutorial",permalink:"/docs/drive/node_tutorial",editUrl:"https://github.com/g3thq/docs/tree/master/docs/drive/node_tutorial.md",version:"current"},c=[{value:"Building a Simple Image Server with Deta Drive",id:"building-a-simple-image-server-with-deta-drive",children:[{value:"Setup",id:"setup",children:[]},{value:"Uploading Images",id:"uploading-images",children:[]},{value:"Downloading Images",id:"downloading-images",children:[]},{value:"Running the server",id:"running-the-server",children:[]}]}],l={rightToc:c};function s({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"building-a-simple-image-server-with-deta-drive"},"Building a Simple Image Server with Deta Drive"),Object(r.b)("h3",{id:"setup"},"Setup"),Object(r.b)("p",null,"To get started, create a directory ",Object(r.b)("inlineCode",{parentName:"p"},"image-server")," and change the current directory into it."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ mkdir image-server && cd image-server\n")),Object(r.b)("p",null,"Before we begin, let's install all the necessary dependencies for this project. "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ npm install deta express express-fileupload \n")),Object(r.b)("p",null,"In this tutorial, we are using ",Object(r.b)("inlineCode",{parentName:"p"},"express")," to build our server, and ",Object(r.b)("inlineCode",{parentName:"p"},"express-fileupload")," allows us to access the uploaded file data. "),Object(r.b)("p",null,"To configure the app, import the dependencies and instantiate drive in ",Object(r.b)("inlineCode",{parentName:"p"},"index.js")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const { Deta } = require("deta");\nconst express = require("express");\nconst upload = require("express-fileupload");\n\nconst app = express();\n\napp.use(upload());\n\nconst deta = Deta("Project_Key");\nconst drive = deta.Drive("images");\n')),Object(r.b)("p",null,"We have everything we need to \ud83d\ude80"),Object(r.b)("h3",{id:"uploading-images"},"Uploading Images"),Object(r.b)("p",null,"First, we need to render a HTML snippet to display the file upload interface."),Object(r.b)("p",null,"We'll expose a function that renders the HTML snippet on the base route ",Object(r.b)("inlineCode",{parentName:"p"},"/")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'app.get(\'/\', (req, res) => {\n    res.send(`\n    <form action="/upload" enctype="multipart/form-data" method="post">\n      <input type="file" name="file">\n      <input type="submit" value="Upload">\n    </form>`);\n});\n')),Object(r.b)("p",null,"We are simply rendering a HTML form that sends a HTTP ",Object(r.b)("inlineCode",{parentName:"p"},"POST")," request to the route ",Object(r.b)("inlineCode",{parentName:"p"},"/upload")," with file data."),Object(r.b)("p",null,"Let's complete file upload by creating a function to handle ",Object(r.b)("inlineCode",{parentName:"p"},"/upload")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'app.post("/upload", async (req, res) => {\n    const name = req.files.file.name;\n    const contents = req.files.file.data;\n    const img = await drive.put(name, {data: contents});\n    res.send(img);\n});\n')),Object(r.b)("p",null,"We can access the image details from ",Object(r.b)("inlineCode",{parentName:"p"},"req")," and store it in Drive. "),Object(r.b)("h3",{id:"downloading-images"},"Downloading Images"),Object(r.b)("p",null,"To download images, we can simply use ",Object(r.b)("inlineCode",{parentName:"p"},"drive.get(name)")),Object(r.b)("p",null,"If we tie a ",Object(r.b)("inlineCode",{parentName:"p"},"GET")," request to the ",Object(r.b)("inlineCode",{parentName:"p"},"/download")," path with a param giving a name (i.e ",Object(r.b)("inlineCode",{parentName:"p"},"/download/space.png"),"), we can return the image over HTTP."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'app.get("/download/:name", async (req, res) => {\n    const name = req.params.name;\n    const img = await drive.get(name);\n    res.send(img);\n}); \n\napp.listen(3000);\n')),Object(r.b)("h3",{id:"running-the-server"},"Running the server"),Object(r.b)("p",null,"To run the server locally, navigate to the terminal in the project directory (",Object(r.b)("inlineCode",{parentName:"p"},"image-server"),") and run the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ node index.js\n")),Object(r.b)("img",{src:"/img/drive/drive-py-tut.png",alt:"/"}),Object(r.b)("img",{src:"/img/drive/drive-py-tut-1.png",alt:"/download/tut.jpg"}),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl -X 'POST' \\\n  'http://127.0.0.1:3000/upload' \\\n  -H 'accept: application/json' \\\n  -H 'Content-Type: multipart/form-data' \\\n  -F 'file=@space.png;type=image/png'\n\nResponse \n\"space.png\"\n\ncurl -X 'GET' \\\n  'http://127.0.0.1:3000/download/space.png' \\\n  -H 'accept: application/json'\n\nResponse \nThe server should respond with the image. \n")))}s.isMDXComponent=!0}}]);