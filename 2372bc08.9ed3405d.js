(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{114:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),u=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,m=p["".concat(s,".").concat(d)]||p[d]||b[d]||o;return t?r.a.createElement(m,c(c({ref:n},l),{},{components:t})):r.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},115:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},116:function(e,n,t){"use strict";var a=t(0),r=t(117);n.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},117:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)(void 0);n.a=r},118:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(116),s=t(115),c=t(53),i=t.n(c),l=37,u=39;n.a=function(e){var n=e.lazy,t=e.block,c=e.children,p=e.defaultValue,b=e.values,d=e.groupId,m=e.className,j=Object(o.a)(),O=j.tabGroupChoices,g=j.setTabGroupChoices,h=Object(a.useState)(p),f=h[0],y=h[1];if(null!=d){var v=O[d];null!=v&&v!==f&&b.some((function(e){return e.value===v}))&&y(v)}var w=function(e){y(e),null!=d&&g(d,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t},m)},b.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===n,className:Object(s.a)("tabs__item",i.a.tabItem,{"tabs__item--active":f===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case u:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case l:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(N,e.target,e)},onFocus:function(){return w(n)},onClick:function(){w(n)}},t)}))),n?Object(a.cloneElement)(c.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},c.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==f})}))))}},119:function(e,n,t){"use strict";var a=t(3),r=t(0),o=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:r}),n)}},77:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return l}));var a=t(3),r=(t(0),t(114));t(118),t(119);const o={id:"node_tutorial",title:"Node.js Tutorial"},s={unversionedId:"base/node_tutorial",id:"base/node_tutorial",isDocsHomePage:!1,title:"Node.js Tutorial",description:"Building a Simple CRUD with Deta Base",source:"@site/docs/base/node_tutorial.md",slug:"/base/node_tutorial",permalink:"/docs/base/node_tutorial",editUrl:"https://github.com/g3thq/docs/tree/master/docs/base/node_tutorial.md",version:"current"},c=[{value:"Building a Simple CRUD with Deta Base",id:"building-a-simple-crud-with-deta-base",children:[{value:"Setup",id:"setup",children:[]},{value:"Creating Records",id:"creating-records",children:[]},{value:"Reading Records",id:"reading-records",children:[]},{value:"Updating Records",id:"updating-records",children:[]},{value:"Deleting Records",id:"deleting-records",children:[]}]}],i={rightToc:c};function l({components:e,...n}){return Object(r.b)("wrapper",Object(a.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"building-a-simple-crud-with-deta-base"},"Building a Simple CRUD with Deta Base"),Object(r.b)("h3",{id:"setup"},"Setup"),Object(r.b)("p",null,"Two dependencies are needed for this project, ",Object(r.b)("inlineCode",{parentName:"p"},"deta")," and ",Object(r.b)("inlineCode",{parentName:"p"},"express"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"npm install deta express\n")),Object(r.b)("p",null,"To configure the app, import the dependencies and instantiate your database."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const express = require('express');\nconst { Deta } = require('deta');\n\nconst deta = Deta('myProjectKey'); // configure your Deta project\nconst db = deta.Base('simpleDB');  // access your DB\n\n\nconst app = express(); // instantiate express\n\napp.use(express.json()) // for parsing application/json bodies\n")),Object(r.b)("h3",{id:"creating-records"},"Creating Records"),Object(r.b)("p",null,"For our database we are going to store records of users under a unique ",Object(r.b)("inlineCode",{parentName:"p"},"key"),". Users can have three properties:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n    "name": "string",\n    "age": number,\n    "hometown": "string"\n}\n\n')),Object(r.b)("p",null,"We'll expose a function that creates user records to HTTP ",Object(r.b)("inlineCode",{parentName:"p"},"POST")," requests on the route ",Object(r.b)("inlineCode",{parentName:"p"},"/users"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"app.post('/users', async (req, res) => {\n    const { name, age, hometown } = req.body;\n    const toCreate = { name, age, hometown};\n    const insertedUser = await db.put(toCreate); // put() will autogenerate a key for us\n    res.status(201).json(insertedUser);\n});\n")),Object(r.b)("h4",{id:"request"},"Request"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"POST")," a payload to the endpoint:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "name": "Beverly",\n    "age": 44,\n    "hometown": "Copernicus City"\n}\n')),Object(r.b)("h4",{id:"response"},"Response"),Object(r.b)("p",null,"Our server should respond with a status of ",Object(r.b)("inlineCode",{parentName:"p"},"201")," and a body of:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "key": "dl9e6w6859a9",\n    "name": "Beverly",\n    "age": 44,\n    "hometown": "Copernicus City"\n}\n')),Object(r.b)("h3",{id:"reading-records"},"Reading Records"),Object(r.b)("p",null,"To read records, we can simply use ",Object(r.b)("inlineCode",{parentName:"p"},"Base.get(key)"),". "),Object(r.b)("p",null,"If we tie a ",Object(r.b)("inlineCode",{parentName:"p"},"GET")," request to the ",Object(r.b)("inlineCode",{parentName:"p"},"/users")," path with a path param giving a user id (i.e. ",Object(r.b)("inlineCode",{parentName:"p"},"/users/dl9e6w6859a9"),"), we can return a record of the user over HTTP."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'app.get(\'/users/:id\', async (req, res) => {\n    const { id } = req.params;\n    const user = await db.get(id);\n    if (user) {\n        res.json(user);\n    } else {\n        res.status(404).json({"message": "user not found"});\n    }\n});\n')),Object(r.b)("p",null,"Another option would to use ",Object(r.b)("inlineCode",{parentName:"p"},"Base.fetch(query)")," to search for records to return, like so:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"app.get('/search-by-age/:age, async (req, res) => {\n    const { age } = req.params;\n    return (await db.fetch({'age': age}).next()).value;\n});\n")),Object(r.b)("h4",{id:"request-1"},"Request"),Object(r.b)("p",null,"Let's try reading the record we just created."),Object(r.b)("p",null,"Make a ",Object(r.b)("inlineCode",{parentName:"p"},"GET")," to the path ",Object(r.b)("inlineCode",{parentName:"p"},"/users/dl9e6w6859a9"),"."),Object(r.b)("h4",{id:"response-1"},"Response"),Object(r.b)("p",null,"The server should return the same record:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "key": "dl9e6w6859a9",\n    "name": "Beverly",\n    "age": 44,\n    "hometown": "Copernicus City"\n}\n')),Object(r.b)("h3",{id:"updating-records"},"Updating Records"),Object(r.b)("p",null,"To update records under a given ",Object(r.b)("inlineCode",{parentName:"p"},"key"),", we can use ",Object(r.b)("inlineCode",{parentName:"p"},"Base.put()"),", which will replace the record under a given key."),Object(r.b)("p",null,"We can tie a ",Object(r.b)("inlineCode",{parentName:"p"},"PUT")," request to the path ",Object(r.b)("inlineCode",{parentName:"p"},"/users/{id}")," to update a given user record over HTTP."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"app.put('/users/:id', async (req, res) => {\n    const { id } = req.params;\n    const { name, age, hometown } = req.body;\n    const toPut = { key: id, name, age, hometown };\n    const newItem = await db.put(toPut);\n    return res.json(newItem)\n});\n")),Object(r.b)("h4",{id:"request-2"},"Request"),Object(r.b)("p",null,"We can update the record by passing a ",Object(r.b)("inlineCode",{parentName:"p"},"PUT")," to the path ",Object(r.b)("inlineCode",{parentName:"p"},"/users/dl9e6w6859a9")," with the following payload:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "name": "Wesley",\n    "age": 24,\n    "hometown": "San Francisco"\n}\n')),Object(r.b)("h4",{id:"response-2"},"Response"),Object(r.b)("p",null,"Our server should respond with the new body of:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "key": "dl9e6w6859a9",\n    "name": "Wesley",\n    "age": 24,\n    "hometown": "San Francisco"\n}\n')),Object(r.b)("h3",{id:"deleting-records"},"Deleting Records"),Object(r.b)("p",null,"To delete records under a given ",Object(r.b)("inlineCode",{parentName:"p"},"key"),", we can use ",Object(r.b)("inlineCode",{parentName:"p"},"Base.delete(key)"),", which will remove the record under a given key."),Object(r.b)("p",null,"We can tie a ",Object(r.b)("inlineCode",{parentName:"p"},"DELETE")," request to the path ",Object(r.b)("inlineCode",{parentName:"p"},"/users/{id}")," to delete a given user record over HTTP."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'app.delete(\'/users/:id\', async (req, res) => {\n    const { id } = req.params;\n    await db.delete(id);\n    res.json({"message": "deleted"})\n});\n')),Object(r.b)("h4",{id:"request-3"},"Request"),Object(r.b)("p",null,"We can delete the record by passing a ",Object(r.b)("inlineCode",{parentName:"p"},"DELETE")," to the path ",Object(r.b)("inlineCode",{parentName:"p"},"/users/dl9e6w6859a9"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "name": "Wesley",\n    "age": 24,\n    "hometown": "San Francisco"\n}\n')),Object(r.b)("h4",{id:"response-3"},"Response"),Object(r.b)("p",null,"Our server should respond with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "message": "deleted"\n}\n')))}l.isMDXComponent=!0}}]);