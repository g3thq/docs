(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{117:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,u=p["".concat(l,".").concat(m)]||p[m]||d[m]||b;return a?r.a.createElement(u,i(i({ref:t},o),{},{components:a})):r.a.createElement(u,i({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var o=2;o<b;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},118:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},119:function(e,t,a){"use strict";var n=a(0),r=a(120);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},120:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},121:function(e,t,a){"use strict";var n=a(0),r=a.n(n),b=a(119),l=a(118),i=a(53),c=a.n(i),o=37,s=39;t.a=function(e){var t=e.lazy,a=e.block,i=e.children,p=e.defaultValue,d=e.values,m=e.groupId,u=e.className,j=Object(b.a)(),O=j.tabGroupChoices,h=j.setTabGroupChoices,N=Object(n.useState)(p),g=N[0],y=N[1];if(null!=m){var f=O[m];null!=f&&f!==g&&d.some((function(e){return e.value===f}))&&y(f)}var v=function(e){y(e),null!=m&&h(m,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":a},u)},d.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case s:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},a)}))),t?Object(n.cloneElement)(i.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},i.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},122:function(e,t,a){"use strict";var n=a(3),r=a(0),b=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return b.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}},65:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"Bubble",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),r=(a(0),a(117)),b=a(121),l=a(122);const i={id:"http",title:"HTTP API",sidebar_label:"HTTP API"},c={unversionedId:"base/http",id:"base/http",isDocsHomePage:!1,title:"HTTP API",description:"return (",source:"@site/docs/base/HTTP.md",slug:"/base/http",permalink:"/docs/base/http",editUrl:"https://github.com/g3thq/docs/tree/master/docs/base/HTTP.md",version:"current",sidebar_label:"HTTP API"},o=[{value:"General &amp; Auth",id:"general--auth",children:[{value:"Root URL",id:"root-url",children:[]},{value:"Auth",id:"auth",children:[]},{value:"Content Type",id:"content-type",children:[]}]},{value:"Endpoints",id:"endpoints",children:[{value:"Put Item",id:"put-item",children:[]},{value:"Get Item",id:"get-item",children:[]},{value:"Delete Item",id:"delete-item",children:[]},{value:"Insert Item",id:"insert-item",children:[]},{value:"Update Item",id:"update-item",children:[]},{value:"Query Items",id:"query-items",children:[]}]},{value:"Contact",id:"contact",children:[]}];let s=({item:e})=>Object(r.b)("div",null,Object(r.b)("div",{style:{display:"flex",fontFamily:"monospace",borderRadius:"3px",backgroundColor:"#ddd",display:"inline",padding:"5px"}},e),Object(r.b)("div",{className:"twentypx"}));const p={rightToc:o,Bubble:s};function d({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"general--auth"},"General & Auth"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You can get your ",Object(r.b)("strong",{parentName:"p"},"Project Key")," and your ",Object(r.b)("strong",{parentName:"p"},"Project ID")," from your ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://web.deta.sh"}),"Deta dashboard"),". You need these to talk with the Deta API."))),Object(r.b)("h3",{id:"root-url"},"Root URL"),Object(r.b)("p",null,"This URL is the base for all your HTTP requests:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"https://database.deta.sh/v1/{project_id}/{base_name}"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"base_name")," is the name given to your database. If you already have a ",Object(r.b)("strong",{parentName:"p"},"Base"),", then you can go ahead and provide it's name here. Additionally, you could provide any name here when doing any ",Object(r.b)("inlineCode",{parentName:"p"},"PUT")," or ",Object(r.b)("inlineCode",{parentName:"p"},"POST"),' request and our backend will automatically create a new base for you if it does not exist. There is no limit on how many "Bases" you can create.')),Object(r.b)("h3",{id:"auth"},"Auth"),Object(r.b)("p",null,"A ",Object(r.b)("strong",{parentName:"p"},"Project Key")," ",Object(r.b)("em",{parentName:"p"},"must")," to be provided in the request ",Object(r.b)("strong",{parentName:"p"},"headers")," as a value for the ",Object(r.b)("inlineCode",{parentName:"p"},"X-API-Key")," key for authentication. This is how we authorize your requests."),Object(r.b)("p",null,"Example ",Object(r.b)("inlineCode",{parentName:"p"},"'X-API-Key: a0abcyxz_aSecretValue'"),"."),Object(r.b)("h3",{id:"content-type"},"Content Type"),Object(r.b)("p",null,"We only accept JSON payloads. Make sure you set the headers correctly: ",Object(r.b)("inlineCode",{parentName:"p"},"'Content-Type: application/json'")),Object(r.b)("h2",{id:"endpoints"},"Endpoints"),Object(r.b)("h3",{id:"put-item"},"Put Item"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"PUT /items"))),Object(r.b)("p",null,"Stores multiple items in a single request. This request overwrites an item if the key already exists."),Object(r.b)(b.a,{defaultValue:"request",values:[{label:"Request",value:"request"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"request",mdxType:"TabItem"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"JSON Payload"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"items")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"array")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An array of items ",Object(r.b)("inlineCode",{parentName:"td"},"object")," to be stored.")))),Object(r.b)("h4",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n   // array of items to put\n   "items": [\n        {\n            "key": {key}, // optional, a random key is generated if not provided\n            "field1": "value1",\n            // rest of item\n        },\n        // rest of items\n    ]\n}\n\n'))),Object(r.b)(l.a,{value:"response",mdxType:"TabItem"},Object(r.b)("h4",{id:"207-multi-status"},Object(r.b)("inlineCode",{parentName:"h4"},"207 Multi Status")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'{\n    "processed": {\n        "items": [\n            // items which were stored \n        ]\n    },\n    "failed": {\n       "items": [\n           // items failed because of internal processing\n       ]\n    }\n}\n')),Object(r.b)("h4",{id:"client-errors"},"Client errors"),Object(r.b)("p",null,"In case of client errors, ",Object(r.b)("strong",{parentName:"p"},"no items")," in the request are stored."),Object(r.b)("h4",{id:"400-bad-request"},Object(r.b)("inlineCode",{parentName:"h4"},"400 Bad Request")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'{\n    "errors" : [\n       // error messages\n    ] \n}\n')),Object(r.b)("p",null,"Bad requests occur in the following cases: "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"if an item has a non-string key"),Object(r.b)("li",{parentName:"ul"},"if the number of items in the requests exceeds 25"),Object(r.b)("li",{parentName:"ul"},"if total request size exceeds 16 MB"),Object(r.b)("li",{parentName:"ul"},"if any individual item exceeds 400KB"),Object(r.b)("li",{parentName:"ul"},"if there are two items with identical keys "),Object(r.b)("li",{parentName:"ul"},"if any item does not follow the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#naming-constraints"}),"naming constraints"))))),Object(r.b)("h3",{id:"get-item"},"Get Item"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"GET /items/{key}"))),Object(r.b)("p",null,"Get a stored item."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If the ",Object(r.b)("em",{parentName:"p"},"key")," contains url unsafe or reserved characters, make sure to url-encode the ",Object(r.b)("em",{parentName:"p"},"key"),". Otherwise, it will lead to unexpected behavior."))),Object(r.b)(b.a,{defaultValue:"request",values:[{label:"Request",value:"request"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"request",mdxType:"TabItem"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"URL Parameter"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"key")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The key (aka. ID) of the item you want to retrieve"))))),Object(r.b)(l.a,{value:"response",mdxType:"TabItem"},Object(r.b)("h4",{id:"200-ok"},Object(r.b)("inlineCode",{parentName:"h4"},"200 OK")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'{\n  "key": {key},\n  // the rest of the item\n}\n')),Object(r.b)("h4",{id:"404-not-found"},Object(r.b)("inlineCode",{parentName:"h4"},"404 Not Found")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'{\n  "key": {key}\n}\n')))),Object(r.b)("h3",{id:"delete-item"},"Delete Item"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"DELETE /items/{key}"))),Object(r.b)("p",null,"Delete a stored item."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If the ",Object(r.b)("em",{parentName:"p"},"key")," contains url unsafe or reserved characters, make sure to url-encode the ",Object(r.b)("em",{parentName:"p"},"key"),". Otherwise, it will lead to unexpected behavior."))),Object(r.b)(b.a,{defaultValue:"request",values:[{label:"Request",value:"request"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"request",mdxType:"TabItem"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"URL Parameter"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"key")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The key (aka. ID) of the item you want to delete."))))),Object(r.b)(l.a,{value:"response",mdxType:"TabItem"},Object(r.b)("p",null,"The server will always return ",Object(r.b)("inlineCode",{parentName:"p"},"200")," regardless if an item with that ",Object(r.b)("inlineCode",{parentName:"p"},"key")," existed or not."),Object(r.b)("h4",{id:"200-ok-1"},Object(r.b)("inlineCode",{parentName:"h4"},"200 OK")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "key": {key}\n}\n')))),Object(r.b)("h3",{id:"insert-item"},"Insert Item"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"POST /items"))),Object(r.b)("p",null,"Creates a new item only if no item with the same ",Object(r.b)("inlineCode",{parentName:"p"},"key")," exists. "),Object(r.b)(b.a,{defaultValue:"request",values:[{label:"Request",value:"request"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"request",mdxType:"TabItem"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"JSON Payload"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"item")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The item to be stored.")))),Object(r.b)("h4",{id:"example-1"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "item": {\n        "key": {key}, // optional\n        // rest of item\n    }\n}\n'))),Object(r.b)(l.a,{value:"response",mdxType:"TabItem"},Object(r.b)("h4",{id:"201-created"},Object(r.b)("inlineCode",{parentName:"h4"},"201 Created")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "key": {key}, // auto generated key if key was not provided in the request\n  "field1": "value1",\n  // the rest of the item\n}\n')),Object(r.b)("h4",{id:"client-errors-1"},"Client errors"),Object(r.b)("h4",{id:"409-conflict-if-key-already-exists"},Object(r.b)("inlineCode",{parentName:"h4"},"409 Conflict")," (if key already exists)"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "errors": ["Key already exists"] \n}\n')),Object(r.b)("h4",{id:"400-bad-request-1"},Object(r.b)("inlineCode",{parentName:"h4"},"400 Bad Request")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "errors": [\n     // error messages\n  ]\n}\n')),Object(r.b)("p",null,"Bad requests occur in the following cases: "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"if the item has a non-string key"),Object(r.b)("li",{parentName:"ul"},"if size of the item exceeds 400KB"),Object(r.b)("li",{parentName:"ul"},"if the item does not follow the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#naming-constraints"}),"naming constraints"))))),Object(r.b)("h3",{id:"update-item"},"Update Item"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"PATCH /items/{key}"))),Object(r.b)("p",null,"Updates an item only if an item with ",Object(r.b)("inlineCode",{parentName:"p"},"key")," exists. "),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If the ",Object(r.b)("em",{parentName:"p"},"key")," contains url unsafe or reserved characters, make sure to url-encode the ",Object(r.b)("em",{parentName:"p"},"key"),". Otherwise, it will lead to unexpected behavior."))),Object(r.b)(b.a,{defaultValue:"request",values:[{label:"Request",value:"request"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"request",mdxType:"TabItem"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"JSON Payload"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"set")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The attributes to be updated or created.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"increment")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The attributes to be incremented. Increment value can be negative.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"append")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The attributes to append a value to. Appended value must be a list.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"prepend")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The attributes to prepend a value to. Prepended value must be a list.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"delete")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string array")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The attributes to be deleted.")))),Object(r.b)("h4",{id:"example-2"},"Example"),Object(r.b)("p",null,"If the following item exists in the database"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "key": "user-a",\n  "username": "jimmy",\n  "profile": {\n    "age": 32,\n    "active": false,\n    "hometown": "pittsburgh" \n  },\n  "on_mobile": true,\n  "likes": ["anime"],\n  "purchases": 1\n}\n')),Object(r.b)("p",null,"Then the request"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n   "set" : {\n     // change ages to 33\n     "profile.age": 33, \n     // change active to true\n     "profile.active": true, \n     // add a new attribute `profile.email`\n     "profile.email": "jimmy@deta.sh"\n   },\n\n   "increment" :{\n     // increment purchases by 2\n     "purchases": 2\n   },\n\n   "append": {\n     // append to \'likes\' \n     "likes": ["ramen"]\n   },\n\n   // remove attributes \'profile.hometown\' and \'on_mobile\'\n   "delete": ["profile.hometown", "on_mobile"]\n}\n')),Object(r.b)("p",null,"results in the following item in the database:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "key": "user-a",\n  "username": "jimmy",\n  "profile": {\n    "age": 33,\n    "active": true,\n    "email": "jimmy@deta.sh"\n  },\n  "likes": ["anime", "ramen"],\n  "purchases": 3\n}\n'))),Object(r.b)(l.a,{value:"response",mdxType:"TabItem"},Object(r.b)("h4",{id:"200-ok-2"},Object(r.b)("inlineCode",{parentName:"h4"},"200 OK")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n   "key": {key},\n   "set": {\n     // identical to the request\n   },\n   "delete": ["field1", ..] // identical to the request \n}\n')),Object(r.b)("h4",{id:"client-errors-2"},"Client errors"),Object(r.b)("h4",{id:"404-not-found-if-key-does-not-exist"},Object(r.b)("inlineCode",{parentName:"h4"},"404 Not Found")," (if key does not exist)"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "errors": ["Key not found"] \n}\n')),Object(r.b)("h4",{id:"400-bad-request-2"},Object(r.b)("inlineCode",{parentName:"h4"},"400 Bad Request")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "errors": [\n     // error messages\n  ]\n}\n')),Object(r.b)("p",null,"Bad requests occur in the following cases: "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"if you're updating or deleting the ",Object(r.b)("inlineCode",{parentName:"li"},"key"),"  "),Object(r.b)("li",{parentName:"ul"},"if ",Object(r.b)("inlineCode",{parentName:"li"},"set")," and ",Object(r.b)("inlineCode",{parentName:"li"},"delete")," have conflicting attributes "),Object(r.b)("li",{parentName:"ul"},"if you're setting a hierarchical attribute but an upper level attribute does not exist, for eg. ",Object(r.b)("inlineCode",{parentName:"li"},'{"set": {"user.age": 22}}')," but ",Object(r.b)("inlineCode",{parentName:"li"},"user")," is not an attribute of the item. "),Object(r.b)("li",{parentName:"ul"},"if attributes in ",Object(r.b)("inlineCode",{parentName:"li"},"set")," do not follow the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#naming_constraints"}),"naming constraints"))))),Object(r.b)("h3",{id:"query-items"},"Query Items"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"POST /query"))),Object(r.b)("p",null,"List items that match a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"./sdk#queries"}),"query"),"."),Object(r.b)(b.a,{defaultValue:"request",values:[{label:"Request",value:"request"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"request",mdxType:"TabItem"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"JSON Payload"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"query")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"list")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"a ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"./sdk#queries"}),"query"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"limit")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"int")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no of items to return. min value 1 if used")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"last")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"last key seen in a previous paginated response")))),Object(r.b)("h4",{id:"example-3"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n   "query": [\n        // separate objects in the list are ORed\n        // query evaluetes to list all users whose hometown is Berlin and is active OR all users who age less than 40\n        {"user.hometown": "Berlin", "user.active": true},\n        {"user.age?lt": 40}\n   ],\n   "limit": 5,\n   "last": "afsefasd" // last key if applicable\n}\n'))),Object(r.b)(l.a,{value:"response",mdxType:"TabItem"},Object(r.b)("p",null,"The response is paginated if the reponse size exceeds 1 MB or the total number of items matching the ",Object(r.b)("inlineCode",{parentName:"p"},"query")," exceeds the ",Object(r.b)("inlineCode",{parentName:"p"},"limit")," provided in the request."),Object(r.b)("p",null,"For paginated responses, ",Object(r.b)("inlineCode",{parentName:"p"},"last")," will return the last key seen in the response. You must use this ",Object(r.b)("inlineCode",{parentName:"p"},"key")," in the following request to continue retreival of items. If the response does not have the ",Object(r.b)("inlineCode",{parentName:"p"},"last")," key, then no further items are to be retreived."),Object(r.b)("h4",{id:"200-ok-3"},Object(r.b)("inlineCode",{parentName:"h4"},"200 OK")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "paging": {\n        "size": 5, // size of items returned\n        "last": "adfjie" // last key seen if paginated, provide this key in the following request\n    },\n    "items": [\n       {\n         "key": {key},\n         // rest of the item\n       },\n       // rest of the items\n   ]\n}\n')),Object(r.b)("h4",{id:"client-errors-3"},"Client Errors"),Object(r.b)("h4",{id:"400-bad-request-3"},Object(r.b)("inlineCode",{parentName:"h4"},"400 Bad Request")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "errors": [\n    // error messages\n  ]\n}\n')),Object(r.b)("p",null,"Bad requests occur in the following cases:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"if a query is made on the ",Object(r.b)("inlineCode",{parentName:"li"},"key")),Object(r.b)("li",{parentName:"ul"},"if a query is not of the right format"),Object(r.b)("li",{parentName:"ul"},"if ",Object(r.b)("inlineCode",{parentName:"li"},"limit")," is provided in the request and is less than 1")))),Object(r.b)("h2",{id:"contact"},"Contact"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"team@deta.sh")))}d.isMDXComponent=!0}}]);