(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return b}));var n=a(3),r=(a(0),a(114)),o=a(118),i=a(119);const l={id:"form-endpoints-guide",title:"Form Endpoints",sidebar_label:"Form Endpoints"},c={unversionedId:"tutorials/form-endpoints-guide",id:"tutorials/form-endpoints-guide",isDocsHomePage:!1,title:"Form Endpoints",description:"Deta Micros can be used to easily deploy form endpoints and the form data can be stored easily with Deta Base.",source:"@site/docs/tutorials/forms.md",slug:"/tutorials/form-endpoints-guide",permalink:"/docs/tutorials/form-endpoints-guide",editUrl:"https://github.com/g3thq/docs/tree/master/docs/tutorials/forms.md",version:"current",sidebar_label:"Form Endpoints"},p=[],s={rightToc:p};function b({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/micros/about"}),"Deta Micros")," can be used to easily deploy form endpoints and the form data can be stored easily with ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/base/about"}),"Deta Base"),"."),Object(r.b)("p",null,"In this guide, we are going to deploy a Deta Micro that offers a form endpoint for a simple contact form and stores the information in a Deta Base. "),Object(r.b)("p",null,"The guide assumes you have already signed up for Deta and have the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/cli/install"}),"Deta CLI")," installed."),Object(r.b)("p",null,"The contact form will store a ",Object(r.b)("inlineCode",{parentName:"p"},"name"),", ",Object(r.b)("inlineCode",{parentName:"p"},"email")," and a ",Object(r.b)("inlineCode",{parentName:"p"},"message"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "name": str,\n    "email": str,\n    "message": str\n}\n')),Object(r.b)(o.a,{groupId:"preferred-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"js",mdxType:"TabItem"},Object(r.b)("p",null,"We are going to deploy an ",Object(r.b)("inlineCode",{parentName:"p"},"express")," app for the form endpoint. "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create a directory ",Object(r.b)("inlineCode",{parentName:"p"},"express-form")," and change the current directory to it."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ mkdir express-form && cd express-form\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create an empty ",Object(r.b)("inlineCode",{parentName:"p"},"index.js")," file (we will add the code that handles the logic later).")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Initialize a ",Object(r.b)("inlineCode",{parentName:"p"},"nodejs")," project with ",Object(r.b)("inlineCode",{parentName:"p"},"npm init"),"."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ npm init -y\n")),Object(r.b)("p",{parentName:"li"},"You can skip the ",Object(r.b)("inlineCode",{parentName:"p"},"-y")," flag, if you want to fill the details about the pacakge interactively through npm's wizard.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Install ",Object(r.b)("inlineCode",{parentName:"p"},"express")," locally for your project."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ npm install express\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create a new ",Object(r.b)("inlineCode",{parentName:"p"},"nodejs")," micro with ",Object(r.b)("inlineCode",{parentName:"p"},"deta new"),". This will create a new ",Object(r.b)("inlineCode",{parentName:"p"},"nodejs")," micro for you and automatically install ",Object(r.b)("inlineCode",{parentName:"p"},"express")," as a dependecy."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'$ deta new\nSuccessfully created a new micro\n{\n    "name": "express-form",\n    "runtime": "nodejs12.x",\n    "endpoint": "https://{micro_name}.deta.dev",\n    "visor": "enabled",\n    "http_auth": "enabled"\n}\nAdding dependencies...\n\n+ express@4.17.1\nadded 50 packages from 37 contributors and audited 50 packages in 1.967s\nfound 0 vulnerabilities\n')),Object(r.b)("p",{parentName:"li"},"Your micro's ",Object(r.b)("inlineCode",{parentName:"p"},"endpoint")," will be different from the output shown above. This ",Object(r.b)("inlineCode",{parentName:"p"},"endpoint")," will be the form endpoint.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"You can also see that the ",Object(r.b)("inlineCode",{parentName:"p"},"http_auth")," is ",Object(r.b)("inlineCode",{parentName:"p"},"enabled")," by default. We will disable the ",Object(r.b)("inlineCode",{parentName:"p"},"http_auth")," so that form data can be sent to the micro. "),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ deta auth disable\nSuccessfully disabled http auth\n")),Object(r.b)("p",{parentName:"li"},"This is only for the tutorial, we recommended that you protect your endpoint with some authentication.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Open ",Object(r.b)("inlineCode",{parentName:"p"},"index.js")," and add a ",Object(r.b)("inlineCode",{parentName:"p"},"POST")," endpoint for the form using ",Object(r.b)("inlineCode",{parentName:"p"},"express"),"."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const express = require('express');\n\n// express app\nconst app = express();\n\n// parse application/x-www-form-urlencoded \napp.use(express.urlencoded());\n\napp.post(\"/\", (req, res)=>{\n    const body = req.body;\n\n    // validate input\n    if (!body.name || !body.email || !body.message){\n        return res.status(400).send('Bad request: missing some required values');\n    }\n\n    // TODO: save the data\n    return res.send('ok');\n});\n\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Update ",Object(r.b)("inlineCode",{parentName:"p"},"index.js")," to add logic to save the form data to a Deta Base. "),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const express = require('express');\nconst { Deta } = require('deta');\n\n// express app\nconst app = express();\n\n// contact form base\nconst formDB = Deta().Base(\"contact-form\");\n\n// parse application/x-www-form-urlencoded \napp.use(express.urlencoded());\n\napp.post(\"/\", (req, res)=>{\n    const body = req.body;\n\n    // validate input\n    if (!body.name || !body.email || !body.message){\n        return res.status(400).send('Bad request: missing some required values')\n    }\n\n    // save form data\n    formDB.put({\n        name: body.name,\n        email: body.email,\n        message: body.message\n    });\n    \n    return res.status(201).send('ok');\n}); \n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Deploy the changes with ",Object(r.b)("inlineCode",{parentName:"p"},"deta deploy")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ deta deploy\nSuccessfully deployed changes\n")))),Object(r.b)("p",null,"Your endpoint will now accept form ",Object(r.b)("inlineCode",{parentName:"p"},"POST")," data and save it to a database. "),Object(r.b)("p",null,"You can use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"../base/base_ui"}),"Deta Base's UI")," to easily see what data has been stored in the database. Navigate to your ",Object(r.b)("inlineCode",{parentName:"p"},"project")," and click on your base name under ",Object(r.b)("inlineCode",{parentName:"p"},"bases")," in your browser to use the Base UI."),Object(r.b)("p",null,"Here's an example view of the UI."),Object(r.b)("img",{src:"/img/quickstart/contact_form.png",width:"1000"})),Object(r.b)(i.a,{value:"py",mdxType:"TabItem"},Object(r.b)("p",null,"We are going to deploy a ",Object(r.b)("inlineCode",{parentName:"p"},"flask")," app for the form endpoint. "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create a directory ",Object(r.b)("inlineCode",{parentName:"p"},"flask-form")," and change the current directory to it."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ mkdir flask-form && cd flask-form\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create an empty ",Object(r.b)("inlineCode",{parentName:"p"},"main.py")," file (we will add the code that handles the logic later).")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create a ",Object(r.b)("inlineCode",{parentName:"p"},"requirements.txt")," file and add ",Object(r.b)("inlineCode",{parentName:"p"},"flask")," as a dependency for your project."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"flask\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create a new ",Object(r.b)("inlineCode",{parentName:"p"},"python")," micro with ",Object(r.b)("inlineCode",{parentName:"p"},"deta new"),". This will create a new ",Object(r.b)("inlineCode",{parentName:"p"},"python")," micro for you and automatically install ",Object(r.b)("inlineCode",{parentName:"p"},"flask")," as a dependecy."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'$ deta new\nSuccessfully created a new micro\n{\n    "name": "flask-form",\n    "runtime": "python3.7",\n    "endpoint": "https://{micro_name}.deta.dev",\n    "visor": "enabled",\n    "http_auth": "enabled"\n}\nAdding dependencies...\nCollecting flask\n...\nInstalling collected packages: Werkzeug, itsdangerous, MarkupSafe, Jinja2, click, flask\n')),Object(r.b)("p",{parentName:"li"},"Your micro's ",Object(r.b)("inlineCode",{parentName:"p"},"endpoint")," will be different from the output shown above. This ",Object(r.b)("inlineCode",{parentName:"p"},"endpoint")," will be the form endpoint.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"You can also see that the ",Object(r.b)("inlineCode",{parentName:"p"},"http_auth")," is ",Object(r.b)("inlineCode",{parentName:"p"},"enabled")," by default. We will disable the ",Object(r.b)("inlineCode",{parentName:"p"},"http_auth")," so that form data can be sent to the micro. "),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ deta auth disable\nSuccessfully disabled http auth\n")),Object(r.b)("p",{parentName:"li"},"This is only for the tutorial, we recommended that you protect your endpoint with some authentication.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Open ",Object(r.b)("inlineCode",{parentName:"p"},"main.py")," and add a ",Object(r.b)("inlineCode",{parentName:"p"},"POST")," endpoint for the form using ",Object(r.b)("inlineCode",{parentName:"p"},"flask"),"."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'from flask import Flask, request\n\n#flask app\napp = Flask(__name__)\n\n@app.route("/", methods=["POST"])\ndef save_form_data():\n    # TODO: save data\n    return "ok"\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Update ",Object(r.b)("inlineCode",{parentName:"p"},"main.py")," to add logic to save the form data to a Deta Base. "),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'from flask import Flask, request\nfrom deta import Deta\n\n# flask app\napp = Flask(__name__)\n\n# contact form base\nform_db = Deta().Base("contact-form")\n\n@app.route("/", methods=["POST"])\ndef save_form_data():\n    form_db.put({\n        # flask sends a 400 automatically if there is a KeyError \n        "name": request.form["name"],\n        "email": request.form["email"],\n        "message": request.form["message"]\n    })\n    return "ok", 201\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Deploy the changes with ",Object(r.b)("inlineCode",{parentName:"p"},"deta deploy"),"."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ deta deploy\nSuccessfully deployed changes\n")))),Object(r.b)("p",null,"Your endpoint will now accept form ",Object(r.b)("inlineCode",{parentName:"p"},"POST")," data and save it to a database. "),Object(r.b)("p",null,"You can use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"../base/base_ui"}),"Deta Base's UI")," to easily see what data has been stored in the database. Navigate to your ",Object(r.b)("inlineCode",{parentName:"p"},"project")," and click on your base name under ",Object(r.b)("inlineCode",{parentName:"p"},"bases")," in your browser to use the Base UI."),Object(r.b)("p",null,"Here's an example view of the UI."),Object(r.b)("img",{src:"/img/quickstart/contact_form.png",width:"1000"}))))}b.isMDXComponent=!0},114:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(a),m=n,u=b["".concat(i,".").concat(m)]||b[m]||d[m]||o;return a?r.a.createElement(u,l(l({ref:t},p),{},{components:a})):r.a.createElement(u,l({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},115:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},116:function(e,t,a){"use strict";var n=a(0),r=a(117);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},117:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},118:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(116),i=a(115),l=a(53),c=a.n(l),p=37,s=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.children,b=e.defaultValue,d=e.values,m=e.groupId,u=e.className,f=Object(o.a)(),O=f.tabGroupChoices,j=f.setTabGroupChoices,h=Object(n.useState)(b),N=h[0],y=h[1];if(null!=m){var g=O[m];null!=g&&g!==N&&d.some((function(e){return e.value===g}))&&y(g)}var v=function(e){y(e),null!=m&&j(m,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},u)},d.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":N===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":N===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case s:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},a)}))),t?Object(n.cloneElement)(l.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},l.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},119:function(e,t,a){"use strict";var n=a(3),r=a(0),o=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return o.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}}}]);