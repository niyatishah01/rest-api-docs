"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[4449],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,g=d["".concat(i,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7926:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),s=["components"],l={title:"Manage Project Load Settings on Intelligence Server Startup",description:"A high-level workflow sample for loading project settings at the startup of the Intelligence Server is shown below."},i=void 0,p={unversionedId:"common-workflows/manage-project-load-settings-on-server-startup",id:"common-workflows/manage-project-load-settings-on-server-startup",title:"Manage Project Load Settings on Intelligence Server Startup",description:"A high-level workflow sample for loading project settings at the startup of the Intelligence Server is shown below.",source:"@site/docs/common-workflows/manage-project-load-settings-on-server-startup.md",sourceDirName:"common-workflows",slug:"/common-workflows/manage-project-load-settings-on-server-startup",permalink:"/rest-api-docs/common-workflows/manage-project-load-settings-on-server-startup",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/main/docs/common-workflows/manage-project-load-settings-on-server-startup.md",tags:[],version:"current",lastUpdatedBy:"Liang, Jiapei",lastUpdatedAt:1663189678,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"Manage Project Load Settings on Intelligence Server Startup",description:"A high-level workflow sample for loading project settings at the startup of the Intelligence Server is shown below."},sidebar:"tutorialSidebar",previous:{title:"Project Administration",permalink:"/rest-api-docs/common-workflows/project-administration"},next:{title:"Manage Project Settings",permalink:"/rest-api-docs/common-workflows/manage-project-settings"}},u={},c=[{value:"Log in",id:"log-in",level:2},{value:"Sample Request",id:"sample-request",level:3},{value:"Sample Response",id:"sample-response",level:3},{value:"Get the Current Project Load Settings on Intelligence Server Startup",id:"get-the-current-project-load-settings-on-intelligence-server-startup",level:2},{value:"Sample Request",id:"sample-request-1",level:3},{value:"Sample Response",id:"sample-response-1",level:3},{value:"Update the Project Load Settings on Intelligence Server Startup",id:"update-the-project-load-settings-on-intelligence-server-startup",level:2},{value:"Sample Request",id:"sample-request-2",level:3},{value:"Sample Response",id:"sample-response-2",level:3},{value:"Log Out",id:"log-out",level:2},{value:"Sample Request",id:"sample-request-3",level:3},{value:"Sample Response",id:"sample-response-3",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-a5485e49-f3a6-4f14-bc79-b5c0d716f6db?ctx=documentation"},"REST API Playground"),"."),(0,r.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,r.kt)("p",null,"A high-level workflow sample for loading project settings at the startup of the Intelligence Server is shown below."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#log-in"},"Log in"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#sample-request"},"Sample Request")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#sample-response"},"Sample Response")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#get-the-current-project-load-settings-on-intelligence-server-startup"},"Get the Current Project Load Settings on Intelligence Server Startup"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#sample-request-1"},"Sample Request")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#sample-response-1"},"Sample Response")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#update-the-project-load-settings-on-intelligence-server-startup"},"Update the Project Load Settings on Intelligence Server Startup"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#sample-request-2"},"Sample Request")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#sample-response-2"},"Sample Response")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#log-out"},"Log Out"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#sample-request-3"},"Sample Request")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#sample-response-3"},"Sample Response"))))),(0,r.kt)("p",null,"A detailed explanation of each step is provided below."),(0,r.kt)("h2",{id:"log-in"},"Log in"),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Authentication/postLogin"},"POST /api/auth/login")),(0,r.kt)("p",null,"This endpoint allows the user to authenticate with the MicroStrategy REST Server. You can provide the information used to create the session in the body of the request. In this example, you can use standard authentication, so you need to provide the username, password, and loginMode (which specifies the authentication mode to use). If you omit an optional field, the REST Server uses the default value. If the call is successful, the resulting HTTP response returns an HTTP status code of 204 and a response header containing X-MSTR-AuthToken. This authorization token is used by all subsequent requests."),(0,r.kt)("h3",{id:"sample-request"},"Sample Request"),(0,r.kt)("p",null,"Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"Content-Type: application/json\nAccept: application/json\n")),(0,r.kt)("p",null,"Request Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "loginMode": 1,\n  "username": "rv",\n  "password": ""\n}\n')),(0,r.kt)("p",null,"Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -H \'Content-Type: application/json\' -H \'Accept: application/json\' -d \'{"loginMode":1, "username": "rv", "password": "" }\' \'https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/login\'\n')),(0,r.kt)("h3",{id:"sample-response"},"Sample Response"),(0,r.kt)("p",null,"Response Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"pragma: no-cache\nx-mstr-authtoken: 6ksnde5dr2mij718ibouu8fgjj\ncache-control: no-cache, no-store, max-age=0, must-revalidate\ndate: Tue22 Sept 2020 17:58:29 GMT\nserver: MicroStrategy\nexpires: 0\ncontent-type: null\n")),(0,r.kt)("p",null,"Response Code: 204 (Success)"),(0,r.kt)("h2",{id:"get-the-current-project-load-settings-on-intelligence-server-startup"},"Get the Current Project Load Settings on Intelligence Server Startup"),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjectLoadSettings"},"GET /api/projects/settings/onStartup")),(0,r.kt)("p",null,"Get a list of applications along with the nodes on which they would be available when the Intelligence Server starts up. You must specify an authorization token in the request header, which can be obtained from POST /api/auth/login during ",(0,r.kt)("a",{parentName:"p",href:"#log-in"},"login"),"."),(0,r.kt)("h3",{id:"sample-request-1"},"Sample Request"),(0,r.kt)("p",null,"Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"Accept: application/json\nX-MSTR-AuthToken: 6ksnde5dr2mij718ibouu8fgjj\n")),(0,r.kt)("p",null,"Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/projects/settings/onStartup" -H "accept: application/json" -H "X-MSTR-AuthToken: 6ksnde5dr2mij718ibouu8fgjj"\n')),(0,r.kt)("h3",{id:"sample-response-1"},"Sample Response"),(0,r.kt)("p",null,"Response Body:"),(0,r.kt)("p",null,"This is the response of a clustered Intelligence Server, and thus, contains many values in the node array. For a non-clustered Intelligence Server, the node array would contain at most one value, being the canonical name of the Intelligence Server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "projects": {\n    "B7CA92F04B9FAE8D941C3E9B7E0CD754": {\n      "name": "MicroStrategy Tutorial",\n      "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n      "nodes": ["env-220285laio2use1"]\n    },\n    "CE52831411E696C8BD2F0080EFD5AF44": {\n      "name": "Consolidated Education Project",\n      "id": "CE52831411E696C8BD2F0080EFD5AF44",\n      "nodes": ["env-220285laio1use1"]\n    },\n    "B3FEE61A11E696C8BD0F0080EFC58F44": {\n      "name": "Hierarchies Project",\n      "id": "B3FEE61A11E696C8BD0F0080EFC58F44",\n      "nodes": []\n    },\n    "4BAE16A340B995CAD24193AA3AC15D29": {\n      "name": "Human Resources Analysis Module",\n      "id": "4BAE16A340B995CAD24193AA3AC15D29",\n      "nodes": ["env-220285laio2use1", "env-220285laio1use1"]\n    },\n    "4C09350211E69712BAEE0080EFB56D41": {\n      "name": "Relationships Project",\n      "id": "4C09350211E69712BAEE0080EFB56D41",\n      "nodes": ["env-220285laio2use1", "env-220285laio1use1"]\n    },\n    "FD4EC87011EAB3629B7A0080EF35AD22": {\n      "name": "Platform Analytics",\n      "id": "FD4EC87011EAB3629B7A0080EF35AD22",\n      "nodes": ["env-220285laio2use1", "env-220285laio1use1"]\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Response Code: 200 (OK)"),(0,r.kt)("h2",{id:"update-the-project-load-settings-on-intelligence-server-startup"},"Update the Project Load Settings on Intelligence Server Startup"),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/patchProjectLoadSettings"},"PATCH /api/projects/settings/onStartup")),(0,r.kt)("p",null,"Update the status of applications on the Intelligence Server nodes at startup. You must specify an authorization token in the request header, which can be obtained from POST /api/auth/login during ",(0,r.kt)("a",{parentName:"p",href:"#log-in"},"login"),". You can obtain the existing settings for the applications, along with the list of nodes, using GET /api/settings/onStartup. You must provide the request body as a list of replace operations to be performed on the value of array of nodes with the URI path containing the corresponding project ID that needs to be updated."),(0,r.kt)("h3",{id:"sample-request-2"},"Sample Request"),(0,r.kt)("p",null,"Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"Accept: application/json\nX-MSTR-AuthToken: 6ksnde5dr2mij718ibouu8fgjj\n")),(0,r.kt)("p",null,"Request Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "operationList": [\n    {\n      "op": "replace",\n      "path": "/projects/B7CA92F04B9FAE8D941C3E9B7E0CD754/nodes",\n      "value": ["env-220285laio2use1", "env-220285laio1use1"]\n    },\n    {\n      "op": "replace",\n      "path": "/projects/B3FEE61A11E696C8BD0F0080EFC58F44/nodes",\n      "value": ["env-220285laio1use1"]\n    },\n    {\n      "op": "replace",\n      "path": "/projects/4C09350211E69712BAEE0080EFB56D41/nodes",\n      "value": []\n    },\n    {\n      "op": "replace",\n      "path": "/projects/FD4EC87011EAB3629B7A0080EF35AD22/nodes",\n      "value": ["env-220285laio1use1"]\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH "https://demo.microstrategy.com/MicroStrategyLibrary/api/projects/settings/onStartup" -H "accept: application/json" -H "X-MSTR-AuthToken: 6ksnde5dr2mij718ibouu8fgjj" -H "Content-Type: application/json" -d \'{ "operationList":[ { "op":"replace", "path":"/projects/B7CA92F04B9FAE8D941C3E9B7E0CD754/nodes", "value": ["env-220285laio2use1","env-220285laio1use1"] }, { "op":"replace", "path":"/projects/B3FEE61A11E696C8BD0F0080EFC58F44/nodes", "value":["env-220285laio1use1"] }, { "op":"replace", "path":"/projects/4C09350211E69712BAEE0080EFB56D41/nodes", "value":[] }, { "op":"replace","path":"/projects/FD4EC87011EAB3629B7A0080EF35AD22/nodes", "value":["env-220285laio1use1"] } ]}\'\n')),(0,r.kt)("h3",{id:"sample-response-2"},"Sample Response"),(0,r.kt)("p",null,"Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "projects": {\n    "B7CA92F04B9FAE8D941C3E9B7E0CD754": {\n      "name": "MicroStrategy Tutorial",\n      "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n      "nodes": ["env-220285laio2use1", "env-220285laio1use1"]\n    },\n    "CE52831411E696C8BD2F0080EFD5AF44": {\n      "name": "Consolidated Education Project",\n      "id": "CE52831411E696C8BD2F0080EFD5AF44",\n      "nodes": ["env-220285laio1use1"]\n    },\n    "B3FEE61A11E696C8BD0F0080EFC58F44": {\n      "name": "Hierarchies Project",\n      "id": "B3FEE61A11E696C8BD0F0080EFC58F44",\n      "nodes": ["env-220285laio1use1"]\n    },\n    "4BAE16A340B995CAD24193AA3AC15D29": {\n      "name": "Human Resources Analysis Module",\n      "id": "4BAE16A340B995CAD24193AA3AC15D29",\n      "nodes": ["env-220285laio2use1", "env-220285laio1use1"]\n    },\n    "4C09350211E69712BAEE0080EFB56D41": {\n      "name": "Relationships Project",\n      "id": "4C09350211E69712BAEE0080EFB56D41",\n      "nodes": []\n    },\n    "FD4EC87011EAB3629B7A0080EF35AD22": {\n      "name": "Platform Analytics",\n      "id": "FD4EC87011EAB3629B7A0080EF35AD22",\n      "nodes": ["env-220285laio1use1"]\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Response Code: 200 (OK)"),(0,r.kt)("h2",{id:"log-out"},"Log Out"),(0,r.kt)("p",null,"End Point: ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogout"},"POST /api/auth/logout")),(0,r.kt)("p",null,"This endpoint allows the caller to log out the authenticated user from the MicroStrategy REST server. In this example, you close the active user session by providing the X-MSTR-AuthToken authorization token, which is generated by POST /api/auth/login during ",(0,r.kt)("a",{parentName:"p",href:"#log-in"},"login"),". If the call is successful, the resulting HTTP response returns a HTTP status code of 204."),(0,r.kt)("h3",{id:"sample-request-3"},"Sample Request"),(0,r.kt)("p",null,"Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"Accept: application/json\nX-MSTR-AuthToken: 6ksnde5dr2mij718ibouu8fgjj\n")),(0,r.kt)("p",null,"Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/logout" -H "accept: application/json" -H "X-MSTR-AuthToken: 6ksnde5dr2mij718ibouu8fgjj"\n')),(0,r.kt)("h3",{id:"sample-response-3"},"Sample Response"),(0,r.kt)("p",null,"Response Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"cache-control: no-cacheno-storemax-age=0\nmust-revalidate\ndate: Tue22 Sep 2020 04:51:11 GMT\nexpires: 0\npragma: no-cache\nserver: MicroStrategy\nstatus: 204\n")),(0,r.kt)("p",null,"Response Code: 204 (No Content)"))}m.isMDXComponent=!0}}]);