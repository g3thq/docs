(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{117:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),b=a,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?r.a.createElement(m,l(l({ref:t},p),{},{components:n})):r.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},118:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},119:function(e,t,n){"use strict";var a=n(0),r=n(120);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},120:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},121:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(119),o=n(118),l=n(53),c=n.n(l),p=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.children,u=e.defaultValue,d=e.values,b=e.groupId,m=e.className,f=Object(i.a)(),g=f.tabGroupChoices,O=f.setTabGroupChoices,h=Object(a.useState)(u),j=h[0],v=h[1];if(null!=b){var y=g[b];null!=y&&y!==j&&d.some((function(e){return e.value===y}))&&v(y)}var w=function(e){v(e),null!=b&&O(b,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(a.cloneElement)(l.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},l.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},122:function(e,t,n){"use strict";var a=n(3),r=n(0),i=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(117)),o=(n(121),n(122),{id:"py_tutorial",title:"Python Tutorial"}),l={unversionedId:"drive/py_tutorial",id:"drive/py_tutorial",isDocsHomePage:!1,title:"Python Tutorial",description:"Building a Simple Image Server with Deta Drive",source:"@site/docs/drive/py_tutorial.md",slug:"/drive/py_tutorial",permalink:"/docs/drive/py_tutorial",editUrl:"https://github.com/g3thq/docs/tree/master/docs/drive/py_tutorial.md",version:"current"},c=[{value:"Building a Simple Image Server with Deta Drive",id:"building-a-simple-image-server-with-deta-drive",children:[{value:"Setup",id:"setup",children:[]},{value:"Uploading Images",id:"uploading-images",children:[]},{value:"Downloading images",id:"downloading-images",children:[]},{value:"Running the server",id:"running-the-server",children:[]}]}],p={rightToc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"building-a-simple-image-server-with-deta-drive"},"Building a Simple Image Server with Deta Drive"),Object(i.b)("h3",{id:"setup"},"Setup"),Object(i.b)("p",null,"To get started, create a directory ",Object(i.b)("inlineCode",{parentName:"p"},"image-server")," and change the current directory into it."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ mkdir image-server && cd image-server\n")),Object(i.b)("p",null,"Before we begin, let's install all the necessary dependencies for this project. Create a ",Object(i.b)("inlineCode",{parentName:"p"},"requirements.txt")," with the following lines:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),"fastapi\nuvicorn\ndeta\npython-multipart\n")),Object(i.b)("p",null,"We are using ",Object(i.b)("inlineCode",{parentName:"p"},"FastAPI")," to build our simple image server, and ",Object(i.b)("inlineCode",{parentName:"p"},"python-multipart")," allows us access the uploaded files. "),Object(i.b)("p",null,"Run the following command to install the dependencies."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ pip install -r requirements.txt\n")),Object(i.b)("p",null,"To configure the app, import the dependencies and instantiate drive in ",Object(i.b)("inlineCode",{parentName:"p"},"main.py")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from fastapi import FastAPI, File, UploadFile\nfrom fastapi.responses import HTMLResponse, StreamingResponse\nfrom deta import Deta\n\napp = FastAPI()\ndeta = Deta("Project_Key")  # configure your Deta project \ndrive = deta.Drive("images") # access to your drive\n')),Object(i.b)("p",null,"We have everything we need to \ud83d\ude80"),Object(i.b)("h3",{id:"uploading-images"},"Uploading Images"),Object(i.b)("p",null,"First, we need to render a HTML snippet to display the file upload interface."),Object(i.b)("p",null,"We'll expose a function that renders the HTML snippet on the base route ",Object(i.b)("inlineCode",{parentName:"p"},"/")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'@app.get("/", response_class=HTMLResponse)\ndef render():\n    return """\n    <form action="/upload" enctype="multipart/form-data" method="post">\n        <input name="file" type="file">\n        <input type="submit">\n    </form>\n    """\n')),Object(i.b)("p",null,"We are simply rendering a form that sends a HTTP ",Object(i.b)("inlineCode",{parentName:"p"},"POST")," request to the route ",Object(i.b)("inlineCode",{parentName:"p"},"/upload")," with file data."),Object(i.b)("p",null,"Let's complete file upload by creating a function to handle ",Object(i.b)("inlineCode",{parentName:"p"},"/upload")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'@app.post("/upload")\ndef upload_img(file: UploadFile = File(...)):\n    name = file.filename\n    f = file.file\n    res = drive.put(name, f)\n    return res\n')),Object(i.b)("p",null,"Thanks to the amazing tools from FastAPI, we can simply wrap the input around ",Object(i.b)("inlineCode",{parentName:"p"},"UploadFile")," and ",Object(i.b)("inlineCode",{parentName:"p"},"File")," to access the image data. We can retrieve the name as well as bytes from ",Object(i.b)("inlineCode",{parentName:"p"},"file")," and store it in Drive. "),Object(i.b)("h3",{id:"downloading-images"},"Downloading images"),Object(i.b)("p",null,"To download images, we can simply use ",Object(i.b)("inlineCode",{parentName:"p"},"drive.get(name)")),Object(i.b)("p",null,"If we tie a ",Object(i.b)("inlineCode",{parentName:"p"},"GET")," request to the ",Object(i.b)("inlineCode",{parentName:"p"},"/download")," path with a param giving a name (i.e ",Object(i.b)("inlineCode",{parentName:"p"},"/download/space.png"),"), we can return the image over HTTP."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'@app.get("/download/{name}")\ndef download_img(name: str):\n    res = drive.get(name)\n    return StreamingResponse(res.iter_chunks(1024), media_type="image/png")\n')),Object(i.b)("p",null,"You can learn more about ",Object(i.b)("inlineCode",{parentName:"p"},"StreamingResponse")," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://fastapi.tiangolo.com/advanced/custom-response/#streamingresponse"}),"here"),"."),Object(i.b)("h3",{id:"running-the-server"},"Running the server"),Object(i.b)("p",null,"To run the server locally, navigate to the terminal in the project directory (",Object(i.b)("inlineCode",{parentName:"p"},"image-server"),") and run the following command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ uvicorn main:app\n")),Object(i.b)("p",null,"Your image server is now ready! You can interact with it at ",Object(i.b)("inlineCode",{parentName:"p"},"/")," and check it out!"),Object(i.b)("img",{src:"/img/drive/drive-py-tut.png",alt:"/"}),Object(i.b)("img",{src:"/img/drive/drive-py-tut-1.png",alt:"/download/tut.jpg"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"\ncurl -X 'POST' \\\n  'http://127.0.0.1:8000/upload' \\\n  -H 'accept: application/json' \\\n  -H 'Content-Type: multipart/form-data' \\\n  -F 'file=@space.png;type=image/png'\n\nResponse \n\"space.png\"\n\n\ncurl -X 'GET' \\\n  'http://127.0.0.1:8000/download/space.png' \\\n  -H 'accept: application/json'\n\nResponse \nThe server should respond with the image.\n")))}s.isMDXComponent=!0}}]);