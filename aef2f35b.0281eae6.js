(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{117:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=d(a),s=n,j=p["".concat(b,".").concat(s)]||p[s]||m[s]||c;return a?r.a.createElement(j,i(i({ref:t},l),{},{components:a})):r.a.createElement(j,i({ref:t},l))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var l=2;l<c;l++)b[l]=a[l];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},99:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return l}));var n=a(3),r=(a(0),a(117));const c={id:"commands",title:"Deta CLI Reference",sidebar_label:"Command Reference"},b={unversionedId:"cli/commands",id:"cli/commands",isDocsHomePage:!1,title:"Deta CLI Reference",description:"Summary",source:"@site/docs/cli/commands.md",slug:"/cli/commands",permalink:"/docs/cli/commands",editUrl:"https://github.com/g3thq/docs/tree/master/docs/cli/commands.md",version:"current",sidebar_label:"Command Reference"},i=[{value:"Summary",id:"summary",children:[]},{value:"deta login",id:"deta-login",children:[]},{value:"deta version",id:"deta-version",children:[{value:"deta version upgrade",id:"deta-version-upgrade",children:[]}]},{value:"deta projects",id:"deta-projects",children:[]},{value:"deta new",id:"deta-new",children:[]},{value:"deta deploy",id:"deta-deploy",children:[]},{value:"deta details",id:"deta-details",children:[]},{value:"deta watch",id:"deta-watch",children:[]},{value:"deta auth",id:"deta-auth",children:[{value:"deta auth disable",id:"deta-auth-disable",children:[]},{value:"deta auth enable",id:"deta-auth-enable",children:[]},{value:"deta auth create-api-key",id:"deta-auth-create-api-key",children:[]},{value:"deta auth delete-api-key",id:"deta-auth-delete-api-key",children:[]}]},{value:"deta pull",id:"deta-pull",children:[]},{value:"deta clone",id:"deta-clone",children:[]},{value:"deta update",id:"deta-update",children:[]},{value:"deta visor",id:"deta-visor",children:[{value:"deta visor open",id:"deta-visor-open",children:[]},{value:"deta visor enable",id:"deta-visor-enable",children:[]},{value:"deta visor disable",id:"deta-visor-disable",children:[]}]},{value:"deta run",id:"deta-run",children:[]},{value:"deta cron",id:"deta-cron",children:[{value:"deta cron set",id:"deta-cron-set",children:[]},{value:"deta cron remove",id:"deta-cron-remove",children:[]}]}],o={rightToc:i};function l({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"summary"},"Summary"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"deta")," is a CLI for managing ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/micros/about"}),"Deta Micros"),"."),Object(r.b)("p",null,"To install the CLI, check out ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"install"}),"Installing the CLI"),"."),Object(r.b)("h4",{id:"commands"},"Commands"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#deta-login"}),Object(r.b)("inlineCode",{parentName:"a"},"deta login")),"\t - Trigger the login process for the Deta CLI."),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#deta-version"}),Object(r.b)("inlineCode",{parentName:"a"},"deta version")),"\t - Print the Deta version"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#deta-projects"}),Object(r.b)("inlineCode",{parentName:"a"},"deta projects"))," - List Deta projects"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#deta-new"}),Object(r.b)("inlineCode",{parentName:"a"},"deta new")),"\t - Create a new Deta Micro"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#deta-deploy"}),Object(r.b)("inlineCode",{parentName:"a"},"deta deploy")),"\t - Deploy new code to a Deta micro"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#deta-details"}),Object(r.b)("inlineCode",{parentName:"a"},"deta details")),"\t - Get detailed information about a Deta Micro"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#deta-watch"}),Object(r.b)("inlineCode",{parentName:"a"},"deta watch")),"\t - Auto-deploy local changes in real time to your Micro"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#deta-auth"}),Object(r.b)("inlineCode",{parentName:"a"},"deta auth")),"\t - Change auth settings for a Deta Micro (public access, api keys)"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#deta-pull"}),Object(r.b)("inlineCode",{parentName:"a"},"deta pull")),"\t - Pull the live code from a Deta Micro onto your local machine"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#deta-clone"}),Object(r.b)("inlineCode",{parentName:"a"},"deta clone")),"\t - Clone a Deta Micro onto your local machine"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#deta-update"}),Object(r.b)("inlineCode",{parentName:"a"},"deta update")),"\t - Update a Deta Micro"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#deta-visor"}),Object(r.b)("inlineCode",{parentName:"a"},"deta visor")),"\t - Change the Visor settings for a Deta Micro"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#deta-run"}),Object(r.b)("inlineCode",{parentName:"a"},"deta run"))," - Run a deta micro from the cli"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#deta-cron"}),Object(r.b)("inlineCode",{parentName:"a"},"deta cron"))," - Change cron settings for a Deta Micro"),Object(r.b)("h2",{id:"deta-login"},"deta login"),Object(r.b)("p",null,"Login to deta via the CLI. This is necessary before using any other commands."),Object(r.b)("h4",{id:"command"},"Command"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"deta login [flags]\n")),Object(r.b)("h4",{id:"flags"},"Flags"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"  -h, --help   help for login\n")),Object(r.b)("h2",{id:"deta-version"},"deta version"),Object(r.b)("p",null,"Print the Deta version"),Object(r.b)("h4",{id:"command-1"},"Command"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"deta version [flags] \ndeta version [command]\n")),Object(r.b)("h4",{id:"flags-1"},"Flags"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"  -h, --help   help for version\n")),Object(r.b)("h4",{id:"version-commands"},"Version commands"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"  upgrade\n")),Object(r.b)("h3",{id:"deta-version-upgrade"},"deta version upgrade"),Object(r.b)("p",null,"Upgrade deta cli version"),Object(r.b)("h4",{id:"command-2"},"Command"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"  deta version upgrade [--version <version>]\n")),Object(r.b)("h4",{id:"flags-2"},"Flags"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"  -h, --help             help for upgrade\n  -v, --version string   version number\n")),Object(r.b)("h4",{id:"examples"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"1. deta version upgrade\n\nUpgrade cli to latest version.\n\n2. deta version upgrade --version v1.0.0\n\nUpgrade cli to version 'v1.0.0'.\n")),Object(r.b)("h2",{id:"deta-projects"},"deta projects"),Object(r.b)("p",null,"List deta projects"),Object(r.b)("h4",{id:"command-3"},"Command"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"deta projects [flags]\n")),Object(r.b)("h4",{id:"flags-3"},"Flags"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"  -h, --help   help for projects\n")),Object(r.b)("h2",{id:"deta-new"},"deta new"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"deta new")," creates a new Micro(server) from the Deta cli"),Object(r.b)("h4",{id:"command-4"},"Command"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"deta new [flags] [path]\n")),Object(r.b)("h4",{id:"flags-4"},"Flags"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"  -h, --help             help for new\n      --name string      name of the new micro\n  -n, --node             create a micro with node runtime\n      --project string   project to create the micro under\n  -p, --python           create a micro with python runtime\n")),Object(r.b)("h4",{id:"examples-1"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"1. deta new\n\nCreate a new deta micro from the current directory with an entrypoint file (either 'main.py' or 'index.js') already present in the directory.\n\n2. deta new my-micro\n\nCreate a new deta micro from './my-micro' directory with an entrypoint file (either 'main.py' or 'index.js') already present in the directory.\n\n2. deta new --node my-node-micro\n\nCreate a new deta micro with the node runtime in the directory './my-node-micro'.\n'./my-node-micro' must not contain a python entrypoint file ('main.py') if directory is already present. \n\n3. deta new --python --name my-github-webhook webhooks/github-deta\n\nCreate a new deta micro with the python runtime, name 'my-github-webhook' and in directory 'webhooks/github-deta'. \n'./my-node-micro' must not contain a node entrypoint file ('index.js') if directory is already present. \n")),Object(r.b)("h4",{id:"notes"},"Notes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"path")," defaults to the current working directory if not provided.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"deta new")," will first check ",Object(r.b)("inlineCode",{parentName:"p"},"path")," for a ",Object(r.b)("inlineCode",{parentName:"p"},"main.py")," or ",Object(r.b)("inlineCode",{parentName:"p"},"index.js")," file. If one is found, ",Object(r.b)("inlineCode",{parentName:"p"},"deta new")," will bootstrap the Micro runtime based on the local file. If ",Object(r.b)("inlineCode",{parentName:"p"},"path")," is an empty directory, a runtime (with ",Object(r.b)("inlineCode",{parentName:"p"},"--node")," or ",Object(r.b)("inlineCode",{parentName:"p"},"--python"),") must be provided and ",Object(r.b)("inlineCode",{parentName:"p"},"deta")," will create a starter app in ",Object(r.b)("inlineCode",{parentName:"p"},"path"),". ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If ",Object(r.b)("inlineCode",{parentName:"p"},"path")," is not an empty directory and does not have an entrypoint file (either ",Object(r.b)("inlineCode",{parentName:"p"},"main.py")," or ",Object(r.b)("inlineCode",{parentName:"p"},"index.js"),") a ",Object(r.b)("inlineCode",{parentName:"p"},"name")," must be provided, under which ",Object(r.b)("inlineCode",{parentName:"p"},"deta")," will create a micro with a starter app."))),Object(r.b)("h2",{id:"deta-deploy"},"deta deploy"),Object(r.b)("p",null,"Deploy your local code (and dependencies) to your Deta Micro."),Object(r.b)("h4",{id:"command-5"},"Command"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"deta deploy [flags] [path]\n")),Object(r.b)("h4",{id:"flags-5"},"Flags"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"  -h, --help   help for deploy\n")),Object(r.b)("h4",{id:"examples-2"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"1. deta deploy\n\nDeploy a deta micro rooted in the current directory.\n\n2. deta deploy micros/my-micro-1\n\nDeploy a deta micro rooted in 'micros/my-micro-1' directory.\n")),Object(r.b)("h4",{id:"notes-1"},"Notes"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"deta deploy")," will ignore the following files and folders when deploying a micro:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"all files and folders with names starting with a ",Object(r.b)("inlineCode",{parentName:"li"},".")," (both in unix and windows systems) "),Object(r.b)("li",{parentName:"ul"},"all files and folders with ",Object(r.b)("em",{parentName:"li"},"hidden")," attribute in windows systems"),Object(r.b)("li",{parentName:"ul"},"vim swap files"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"node_modules")," directory for ",Object(r.b)("inlineCode",{parentName:"li"},"node")," runtime  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"__pycache__")," directory for ",Object(r.b)("inlineCode",{parentName:"li"},"python")," runtime"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".pyc")," and ",Object(r.b)("inlineCode",{parentName:"li"},".rst")," files for ",Object(r.b)("inlineCode",{parentName:"li"},"python")," runtimes ")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"deta deploy")," does not respect ",Object(r.b)("inlineCode",{parentName:"p"},".gitignore"),"."),Object(r.b)("h2",{id:"deta-details"},"deta details"),Object(r.b)("p",null,"Get detailed information about a specific Deta micro."),Object(r.b)("h4",{id:"command-6"},"Command"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"deta details [flags] [path]\n")),Object(r.b)("h4",{id:"flags-6"},"Flags"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"  -h, --help   help for details\n")),Object(r.b)("h2",{id:"deta-watch"},"deta watch"),Object(r.b)("p",null,"Auto-deploy locally saved changes in real time to your Deta micro."),Object(r.b)("h4",{id:"command-7"},"Command"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"deta watch [path] [flags]\n")),Object(r.b)("h4",{id:"flags-7"},"Flags"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"  -h, --help   help for watch\n")),Object(r.b)("h2",{id:"deta-auth"},"deta auth"),Object(r.b)("p",null,"Change auth settings for a Deta Micro"),Object(r.b)("h4",{id:"command-8"},"Command"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"deta auth [auth_command] [flags]\n")),Object(r.b)("h4",{id:"auth-commands"},"Auth Commands"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"  disable, enable, create-api-key, delete-api-key\n")),Object(r.b)("h4",{id:"flags-8"},"Flags"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"  -h, --help   help for auth\n")),Object(r.b)("h3",{id:"deta-auth-disable"},"deta auth disable"),Object(r.b)("p",null,"Disable Deta's ",Object(r.b)("em",{parentName:"p"},"Http Auth")," for a Deta Micro (this makes the HTTP endpoint publicly accesible)."),Object(r.b)("h4",{id:"command-9"},"Command"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"deta auth disable [flags]\n")),Object(r.b)("h4",{id:"flags-9"},"Flags"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"  -h, --help   help for disable\n")),Object(r.b)("h3",{id:"deta-auth-enable"},"deta auth enable"),Object(r.b)("p",null,"Enable Deta's ",Object(r.b)("em",{parentName:"p"},"Http Auth")," for a Deta Micro (a Micro's endpoint will require authenticated access or via a valid api key)."),Object(r.b)("h4",{id:"command-10"},"Command"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"deta auth enable [flags]\n")),Object(r.b)("h4",{id:"flags-10"},"Flags"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"  -h, --help   help for enable\n")),Object(r.b)("h3",{id:"deta-auth-create-api-key"},"deta auth create-api-key"),Object(r.b)("p",null,"Create an API key for a Deta Micro"),Object(r.b)("h4",{id:"command-11"},"Command"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"deta auth create-api-key [flags]\n")),Object(r.b)("h4",{id:"flags-11"},"Flags"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"  -d, --desc string      api-key description\n  -h, --help             help for create-api-key\n  -n, --name string      api-key name, required\n  -o, --outfile string   file to save the api-key\n")),Object(r.b)("h4",{id:"examples-3"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"1. deta auth create-api-key --name agent1 --desc \"api key for agent 1\"\n\nCreate an api key with name 'agent1' and description 'api key for agent 1'\n\n2. deta auth create-api-key --name agent1 --outfile agent_1_key.txt\n\nCreate an api key with name 'agent1' and save it to file 'agent_1_key.txt'\n")),Object(r.b)("h3",{id:"deta-auth-delete-api-key"},"deta auth delete-api-key"),Object(r.b)("p",null,"Delete an API key for a Deta Micro"),Object(r.b)("h4",{id:"command-12"},"Command"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"deta auth delete-api-key [flags]\n")),Object(r.b)("h4",{id:"flags-12"},"Flags"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"  -d, --desc string   api-key description\n  -h, --help          help for delete-api-key\n  -n, --name string   api-key name, required\n")),Object(r.b)("h4",{id:"examples-4"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"1. deta auth delete-api-key --name agent1\n\nDelete api key with name 'agent1'\n")),Object(r.b)("h2",{id:"deta-pull"},"deta pull"),Object(r.b)("p",null,"Pull the latest deployed code of a Deta Micro to your local machine."),Object(r.b)("h4",{id:"command-13"},"Command"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"deta pull [flags]\n")),Object(r.b)("h4",{id:"flags-13"},"Flags"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"  -f, --force   force overwrite of existing files\n  -h, --help    help for pull\n")),Object(r.b)("h4",{id:"examples-5"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"1. deta pull\n\nPull latest changes of deta micro present in the current directory. \nAsks for approval before overwriting the files in the current directory.\n\n2. deta pull --force\n\nForce pull latest changes of deta micro present in the current directory.\nOverwrites the files present in the current directory.\n")),Object(r.b)("h2",{id:"deta-clone"},"deta clone"),Object(r.b)("p",null,"Clone a deta micro"),Object(r.b)("h4",{id:"command-14"},"Command"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"deta clone [path] [flags]\n")),Object(r.b)("h4",{id:"flags-14"},"Flags"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"  -h, --help             help for clone\n      --name string      deta micro name\n      --project string   deta project\n")),Object(r.b)("h4",{id:"examples-6"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"1. deta clone --name my-micro\n\nClone latest deployment of micro 'my-micro' from 'default' project to directory './my-micro'.\n\n2. deta clone --name my-micro --project my-project micros/my-micro-dir\n\nClone latest deployment of micro 'my-micro' from project 'my-project' to directory './micros/my-micro-dir'.\n'./micros/my-micro-dir' must be an empty directory if it already exists. \n")),Object(r.b)("h2",{id:"deta-update"},"deta update"),Object(r.b)("p",null,"Update a deta micro"),Object(r.b)("h4",{id:"command-15"},"Command"),Object(r.b)("p",null,"Update a Deta Micro's name or environment variables."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"deta update [flags]\n")),Object(r.b)("h4",{id:"flags-15"},"Flags"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"  -e, --env string    path to env file\n  -h, --help          help for update\n  -n, --name string   new name of the micro\n")),Object(r.b)("h4",{id:"examples-7"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"1. deta update --name a-new-name\n\nUpdate the name of a deta micro with a new name \"a-new-name\".\n\n2. deta update --env env-file\n\nUpdate the enviroment variables of a deta micro from the file 'env-file'. \nFile 'env-file' must have env vars of format 'key=value'.\n")),Object(r.b)("h2",{id:"deta-visor"},"deta visor"),Object(r.b)("p",null,"Change the Visor settings for a Deta Micro. "),Object(r.b)("p",null,"If ",Object(r.b)("em",{parentName:"p"},"Deta Visor")," is enabled, Deta will log all incoming requests to and responses from a Deta Micro, letting you inspect, edit, and replay these request / response pairs."),Object(r.b)("p",null,"To access a Micro's visor, navigate to:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"https://web.deta.sh/home/:username/:projectName/micros/:microName/visor")),Object(r.b)("h4",{id:"command-16"},"Command"),Object(r.b)("p",null,"Change visor settings for a deta micro"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"deta visor [visor_command] [flags]\n")),Object(r.b)("h4",{id:"visor-commands"},"Visor Commands"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"  open, enable, disable\n")),Object(r.b)("h4",{id:"flags-16"},"Flags"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"  -h, --help   help for visor\n")),Object(r.b)("h3",{id:"deta-visor-open"},"deta visor open"),Object(r.b)("p",null,"Open Micro's visor page in the browser."),Object(r.b)("h4",{id:"command-17"},"Command"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"deta visor open [flags]\n")),Object(r.b)("h4",{id:"flags-17"},"Flags"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"  -h, --help help for open\n")),Object(r.b)("h3",{id:"deta-visor-enable"},"deta visor enable"),Object(r.b)("p",null,"Enable Visor for a Deta Micro"),Object(r.b)("h4",{id:"command-18"},"Command"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"deta visor enable [flags]\n")),Object(r.b)("h4",{id:"flags-18"},"Flags"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"  -h, --help   help for enable\n")),Object(r.b)("h3",{id:"deta-visor-disable"},"deta visor disable"),Object(r.b)("p",null,"Disable Visor for a deta micro"),Object(r.b)("h4",{id:"command-19"},"Command"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"deta visor disable [flags]\n")),Object(r.b)("h4",{id:"flags-19"},"Flags"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"  -h, --help   help for disable\n")),Object(r.b)("h2",{id:"deta-run"},"deta run"),Object(r.b)("p",null,"Run a Deta Micro from the cli"),Object(r.b)("h4",{id:"command-20"},"Command"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"deta run [flags] [action] [-- <input args>]\n")),Object(r.b)("h4",{id:"flags-20"},"Flags"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"  -h, --help   help for run\n  -l, --logs   show micro logs\n")),Object(r.b)("h4",{id:"examples-8"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'1. deta run -- --name Jimmy --age 33 -active\n\nRun deta micro with the following input:\n{\n    "name": "Jimmy",\n    "age": "33",\n    "active": true\n}\n\n2. deta run --logs test -- --username admin\n\nRun deta micro and show micro logs with action \'test\' and the following input:\n{\n    "username": "admin"\n}\n\n3. deta run delete -- --emails jimmy@deta.sh --emails joe@deta.sh\n\nRun deta micro with action \'delete\' and the following input:\n{\n    "emails": ["jimmy@deta.sh", "joe@deta.sh"]\n}  \n\nSee https://docs.deta.sh for more examples and details. \n\n')),Object(r.b)("h2",{id:"deta-cron"},"deta cron"),Object(r.b)("p",null,"Change cron settings for a deta micro"),Object(r.b)("h4",{id:"command-21"},"Command"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"deta cron [cron_command] [flags]\n")),Object(r.b)("h4",{id:"cron-commands"},"Cron Commands"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"  set, remove\n")),Object(r.b)("h4",{id:"flags-21"},"Flags"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"  -h, --help   help for cron\n")),Object(r.b)("h3",{id:"deta-cron-set"},"deta cron set"),Object(r.b)("p",null,"Set deta micro to run on a schedule"),Object(r.b)("h4",{id:"command-22"},"Command"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"deta cron set [path] <expression> [flags]\n")),Object(r.b)("h4",{id:"flags-22"},"Flags"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"  -h, --help   help for set\n")),Object(r.b)("h4",{id:"examples-9"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'Rate:\n\n1. deta cron set "1 minute" : run every minute\n2. deta cron set "5 hours" : run every five hours\n\nCron expressions:\n\n1. deta cron set "0 10 * * ? *" : run at 10:00 am(UTC) every day\n2. deta cron set "30 18 ? * MON-FRI *" : run at 6:00 pm(UTC) Monday through Friday\n3. deta cron set "0/5 8-17 ? * MON-FRI *" : run every 5 minutes Monday through Friday between 8:00 am and 5:55 pm(UTC)\n')),Object(r.b)("h3",{id:"deta-cron-remove"},"deta cron remove"),Object(r.b)("p",null,"Remove a schedule from a deta micro"),Object(r.b)("h4",{id:"command-23"},"Command"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"deta cron remove [path] [flags]\n")),Object(r.b)("h4",{id:"flags-23"},"Flags"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"  -h, --help   help for remove\n")))}l.isMDXComponent=!0}}]);