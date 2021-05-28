(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(3),r=(n(0),n(121)),l=n(125),i=n(126);const o={id:"install",title:"Installing the Deta CLI",sidebar_label:"Install the Deta CLI"},c={unversionedId:"cli/install",id:"cli/install",isDocsHomePage:!1,title:"Installing the Deta CLI",description:"Installing & Configuring the Deta CLI",source:"@site/docs/cli/install.md",slug:"/cli/install",permalink:"/docs/cli/install",editUrl:"https://github.com/g3thq/docs/tree/master/docs/cli/install.md",version:"current",sidebar_label:"Install the Deta CLI"},u=[{value:"Installing &amp; Configuring the Deta CLI",id:"installing--configuring-the-deta-cli",children:[]},{value:"Logging into Deta via the CLI",id:"logging-into-deta-via-the-cli",children:[]}],s={rightToc:u};function b({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"installing--configuring-the-deta-cli"},"Installing & Configuring the Deta CLI"),Object(r.b)(l.a,{defaultValue:"mac",values:[{label:"Mac",value:"mac"},{label:"Linux",value:"linux"},{label:"Windows",value:"win"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"mac",mdxType:"TabItem"},Object(r.b)("p",null,"To install the Deta CLI, open a Terminal and enter:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl -fsSL https://get.deta.dev/cli.sh | sh\n"))),Object(r.b)(i.a,{value:"linux",mdxType:"TabItem"},Object(r.b)("p",null,"To install the Deta CLI, open a Terminal and enter:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl -fsSL https://get.deta.dev/cli.sh | sh\n"))),Object(r.b)(i.a,{value:"win",mdxType:"TabItem"},Object(r.b)("p",null,"To install the Deta CLI, open PowerShell and enter:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"iwr https://get.deta.dev/cli.ps1 -useb | iex\n")))),Object(r.b)("p",null,"This will download the binary which contains the CLI code. It will try to export the ",Object(r.b)("inlineCode",{parentName:"p"},"deta")," command to your path. If it does not succeed, follow the directions outputted by the install script to export ",Object(r.b)("inlineCode",{parentName:"p"},"deta")," to your path."),Object(r.b)("h3",{id:"logging-into-deta-via-the-cli"},"Logging into Deta via the CLI"),Object(r.b)("p",null,"Once you have successfully installed the Deta CLI, you'll need to log in to Deta."),Object(r.b)("p",null,"From a Terminal, type ",Object(r.b)("inlineCode",{parentName:"p"},"deta login"),"."),Object(r.b)("p",null,"This command will open your browser and authenticate your CLI through Deta's web application."),Object(r.b)("p",null,"Upon a successful log-in, you are ready to start building ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/micros/about"}),"Micros"),"."))}b.isMDXComponent=!0},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,f=b["".concat(i,".").concat(d)]||b[d]||p[d]||l;return n?r.a.createElement(f,o(o({ref:t},u),{},{components:n})):r.a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},122:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},123:function(e,t,n){"use strict";var a=n(0),r=n(124);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},124:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},125:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(123),i=n(122),o=n(53),c=n.n(o),u=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.children,b=e.defaultValue,p=e.values,d=e.groupId,f=e.className,m=Object(l.a)(),h=m.tabGroupChoices,g=m.setTabGroupChoices,O=Object(a.useState)(b),v=O[0],y=O[1];if(null!=d){var j=h[d];null!=j&&j!==v&&p.some((function(e){return e.value===j}))&&y(j)}var w=function(e){y(e),null!=d&&g(d,e)},C=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},f)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(a.cloneElement)(o.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},o.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},126:function(e,t,n){"use strict";var a=n(3),r=n(0),l=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return l.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);