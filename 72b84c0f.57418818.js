(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||s[d]||o;return n?r.a.createElement(m,l(l({ref:t},b),{},{components:n})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var b=2;b<o;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},112:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},113:function(e,t,n){"use strict";var a=n(0),r=n(114);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},114:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},115:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(113),i=n(112),l=n(53),c=n.n(l),b=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.children,p=e.defaultValue,s=e.values,d=e.groupId,m=e.className,j=Object(o.a)(),O=j.tabGroupChoices,h=j.setTabGroupChoices,f=Object(a.useState)(p),y=f[0],N=f[1];if(null!=d){var v=O[d];null!=v&&v!==y&&s.some((function(e){return e.value===v}))&&N(v)}var g=function(e){N(e),null!=d&&h(d,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},s.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return g(t)},onClick:function(){g(t)}},n)}))),t?Object(a.cloneElement)(l.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},l.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},116:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(111)),i=n(115),l=n(116),c={id:"cron",title:"Cron",sidebar_lable:"Run"},b={unversionedId:"micros/cron",id:"micros/cron",isDocsHomePage:!1,title:"Cron",description:"Deta Cron",source:"@site/docs/micros/cron.md",slug:"/micros/cron",permalink:"/docs/micros/cron",editUrl:"https://github.com/g3thq/docs/tree/master/docs/micros/cron.md",version:"current"},u=[{value:"Deta Cron",id:"deta-cron",children:[]},{value:"Set Cron",id:"set-cron",children:[]},{value:"Code",id:"code",children:[]},{value:"Events",id:"events",children:[]},{value:"Remove Cron",id:"remove-cron",children:[]},{value:"Cron and HTTP",id:"cron-and-http",children:[]},{value:"Cron and Run",id:"cron-and-run",children:[]}],p={rightToc:u};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"deta-cron"},"Deta Cron"),Object(o.b)("p",null,"A Deta Micro can be set to run on a schedule from the ",Object(o.b)("inlineCode",{parentName:"p"},"deta cli")," using the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../cli/commands#deta-cron-set"}),"deta cron set")," command."),Object(o.b)("p",null,"In order to set a micro to run on a schedule, the micro's code needs to define a function that will be run on the schedule with the help of our library ",Object(o.b)("inlineCode",{parentName:"p"},"deta"),"."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"deta")," library is pre-installed on a micro and can just be imported directly."),Object(o.b)("h3",{id:"set-cron"},"Set Cron"),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"deta cron set")," to schedule the micro."),Object(o.b)("p",null,"You can set the cron in two ways:"),Object(o.b)("h4",{id:"rate"},"Rate"),Object(o.b)("p",null,"You can define the ",Object(o.b)("inlineCode",{parentName:"p"},"rate")," at which a micro should run. It is comprised of a ",Object(o.b)("inlineCode",{parentName:"p"},"value")," and ",Object(o.b)("inlineCode",{parentName:"p"},"unit"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"value"),": is a non-zero positive integer"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"unit"),": unit of time, can be ",Object(o.b)("inlineCode",{parentName:"li"},"minute, minutes, hour, hours, day, days"),". If the ",Object(o.b)("inlineCode",{parentName:"li"},"value")," is ",Object(o.b)("inlineCode",{parentName:"li"},"1")," the unit must be ",Object(o.b)("inlineCode",{parentName:"li"},"minute"),", ",Object(o.b)("inlineCode",{parentName:"li"},"hour")," or ",Object(o.b)("inlineCode",{parentName:"li"},"day"),".")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'deta cron set "1 minute"')," : Run every minute"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'deta cron set "2 hours"')," : Run every two hours"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'deta cron set "5 days"')," : Run every five days")),Object(o.b)("h4",{id:"cron-expressions"},"Cron expressions"),Object(o.b)("p",null,"Cron expressions allow you more flexibility and precision when setting a cron job. Cron expressions have six required fields, which are separated by white space."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Field"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Values"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Wildcards"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Minutes"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0-59"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),",-*/")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Hours"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0-23"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),",-*/")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Day-of-month"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1-31"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),",-*?/LW")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Month"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1-12 or JAN-DEC"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),",-*/")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Day-of-week"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1-7 or SUN-SAT"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),",-*?L#")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Year"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1970-2199"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),",-*/")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Wildcards")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The , (comma) wildcard includes additional values. In the Month field, JAN,FEB,MAR would include January, February, and March.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The - (dash) wildcard specifies ranges. In the Day field, 1-15 would include days 1 through 15 of the specified month.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The ",Object(o.b)("em",{parentName:"p"}," (asterisk) wildcard includes all values in the field. In the Hours field, ")," would include every hour. You cannot use * in both the Day-of-month and Day-of-week fields. If you use it in one, you must use ? in the other.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The / (forward slash) wildcard specifies increments. In the Minutes field, you could enter 1/10 to specify every tenth minute, starting from the first minute of the hour (for example, the 11th, 21st, and 31st minute, and so on).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The ? (question mark) wildcard specifies one or another. In the Day-of-month field you could enter 7 and if you didn't care what day of the week the 7th was, you could enter ? in the Day-of-week field.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The L wildcard in the Day-of-month or Day-of-week fields specifies the last day of the month or week.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The W wildcard in the Day-of-month field specifies a weekday. In the Day-of-month field, 3W specifies the weekday closest to the third day of the month.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The # wildcard in the Day-of-week field specifies a certain instance of the specified day of the week within a month. For example, 3#2 would be the second Tuesday of the month: the 3 refers to Tuesday because it is the third day of each week, and the 2 refers to the second day of that type within the month."))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Limits")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"You can't specify the Day-of-month and Day-of-week fields in the same cron expression. If you specify a value (or a *) in one of the fields, you must use a ? (question mark) in the other.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Cron expressions that lead to rates faster than 1 minute are not supported."))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'deta cron set "0 10 * * ? *"')," : Run at 10:00 am(UTC) every day"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'deta cron set "15 12 * * ? *"')," : Run at 12:15 pm(UTC) every day"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'deta cron set "0 18 ? * MON-FRI *"')," : Run at 6:00 pm(UTC) every Monday through Friday"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'deta cron set "0 8 1 * ? *"')," : Run at 8:00 am(UTC) every 1st day of the month"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'deta cron set "0/15 * * * ? *"')," : Run every 15 minutes"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'deta cron set "0/5 8-17 ? * MON-FRI *"')," : Run every 5 minutes Monday through Friday between 8:00 am and 5:55 pm(UTC)")),Object(o.b)("h3",{id:"code"},"Code"),Object(o.b)(i.a,{groupId:"preferred-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"python"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { app } = require('deta');\n\n// define a function to run on a schedule \n// the function must take an event as an argument\napp.lib.cron(event => \"running on a schedule\");\n\nmodule.exports = app;\n"))),Object(o.b)(l.a,{value:"python",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from deta import app\n\n# define a function to run on a schedule\n# the function must take an event as an argument\n@app.lib.cron()\ndef cron_job(event):\n    return "running on a schedule"\n')))),Object(o.b)("p",null,"With this code deployed on a deta micro, the ",Object(o.b)("inlineCode",{parentName:"p"},"deta cron set")," commands will execute the function based on the cron rate or expression. For example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'$ deta cron set "10 minutes"\n')),Object(o.b)("p",null,"will set the function to run every 10 minutes. In order to see the execution logs, you can use the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./visor"}),"visor")),Object(o.b)("h3",{id:"events"},"Events"),Object(o.b)("p",null,"A function that is triggered from the cron must take an ",Object(o.b)("inlineCode",{parentName:"p"},"event")," as the only argument. The ",Object(o.b)("inlineCode",{parentName:"p"},"event")," will have the following attribute."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"event.type"),": ",Object(o.b)("inlineCode",{parentName:"li"},"string")," type of an event, will be ",Object(o.b)("inlineCode",{parentName:"li"},"cron")," when triggered by a cron event")),Object(o.b)("h3",{id:"remove-cron"},"Remove Cron"),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"deta cron remove")," to remove a schedule from the micro."),Object(o.b)("h3",{id:"cron-and-http"},"Cron and HTTP"),Object(o.b)("p",null,"You can combine both cron and HTTP triggers in the same deta micro. For this you need to instantiate your app using the ",Object(o.b)("inlineCode",{parentName:"p"},"deta")," library that is pre-installed on a micro.   "),Object(o.b)(i.a,{groupId:"preferred-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"python"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { App } = require('deta');\nconst express = require('express');\n\nconst app = App(express());\n\napp.get('/', async(req, res) => {\n    res.send('Hello Deta, I am running with HTTP');\n});\n\napp.lib.cron(event => {\n    return 'Hello Deta, I am a cron job';\n});\n\nmodule.exports = app;\n"))),Object(o.b)(l.a,{value:"python",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from deta import App\nfrom fastapi import FastAPI\n\napp = App(FastAPI())\n\n@app.get("/")\ndef http():\n    return "Hello Deta, I am running with HTTP"\n\n@app.lib.cron()\ndef cron_job(event):\n    return "Hello Deta, I am a cron job"\n')))),Object(o.b)("h3",{id:"cron-and-run"},"Cron and Run"),Object(o.b)("p",null,"You can use both cron and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./run"}),"run")," triggers in the same deta micro. You can also stack run and cron triggers for the same function."),Object(o.b)(i.a,{groupId:"preferred-language",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"python"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { app } = require('deta');\n\nconst sayHello = event => 'hello Deta';\nconst printTime = event => `it is ${(new Data).toTimeString()}`;\n\n// only run\napp.lib.run(sayHello);\n\n// stacking run and cron\napp.lib.run(printTime, 'time'); // action 'time'\napp.lib.cron(printTime);\n\nmodule.exports = app;\n"))),Object(o.b)(l.a,{value:"python",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from deta import app\nfrom datetime import datetime\n\n# only run\n@app.lib.run()\ndef say_hello(event):\n    return \"hello deta\"\n\n# stacking run and cron\n@app.lib.run(action='time') # action 'time'\n@app.lib.cron()\ndef print_time(event):\n    return f\"it is {datetime.now()}\" \n")))))}s.isMDXComponent=!0}}]);