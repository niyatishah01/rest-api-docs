"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8661],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},95032:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a,r=n(83117),i=n(80102),o=(n(67294),n(3905)),s=["components"],l={title:"Manage server settings",description:"A high-level workflow sample for managing server settings is shown below. The sequence of REST API requests in the following procedure allows an administrative user to manage the Intelligence Server settings."},p=void 0,u={unversionedId:"common-workflows/administration/server-management/manage-server-settings",id:"common-workflows/administration/server-management/manage-server-settings",title:"Manage server settings",description:"A high-level workflow sample for managing server settings is shown below. The sequence of REST API requests in the following procedure allows an administrative user to manage the Intelligence Server settings.",source:"@site/docs/common-workflows/administration/server-management/manage-server-settings.md",sourceDirName:"common-workflows/administration/server-management",slug:"/common-workflows/administration/server-management/manage-server-settings",permalink:"/rest-api-docs/common-workflows/administration/server-management/manage-server-settings",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/server-management/manage-server-settings.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1680880277,formattedLastUpdatedAt:"Apr 7, 2023",frontMatter:{title:"Manage server settings",description:"A high-level workflow sample for managing server settings is shown below. The sequence of REST API requests in the following procedure allows an administrative user to manage the Intelligence Server settings."},sidebar:"tutorialSidebar",previous:{title:"Manage Watch KPI and Insight service privileges",permalink:"/rest-api-docs/common-workflows/administration/server-management/server-level-privileges/watch-kpi-insight-service-privileges"},next:{title:"Manage user and workload fences",permalink:"/rest-api-docs/common-workflows/administration/server-management/manage-fences/"}},m={},c=[{value:"Log in",id:"log-in",level:2},{value:"Sample request",id:"sample-request",level:3},{value:"Sample response",id:"sample-response",level:3},{value:"Get the Intelligence Server setting configurations",id:"get-the-intelligence-server-setting-configurations",level:2},{value:"Sample request",id:"sample-request-1",level:3},{value:"Sample response",id:"sample-response-1",level:3},{value:"Get the Intelligence Server setting values",id:"get-the-intelligence-server-setting-values",level:2},{value:"Sample request",id:"sample-request-2",level:3},{value:"Sample response",id:"sample-response-2",level:3},{value:"Update a part of the Intelligence Server setting values",id:"update-a-part-of-the-intelligence-server-setting-values",level:2},{value:"Sample request",id:"sample-request-3",level:3},{value:"Sample response",id:"sample-response-3",level:3},{value:"Update all Intelligence Server setting values",id:"update-all-intelligence-server-setting-values",level:2},{value:"Sample request",id:"sample-request-4",level:3},{value:"Sample response",id:"sample-response-4",level:3},{value:"Log out",id:"log-out",level:2},{value:"Sample request",id:"sample-request-5",level:3},{value:"Sample response",id:"sample-response-5",level:3}],d=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),g={toc:c};function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(d,{since:"2021",mdxType:"Available"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-f79f1c3f-2313-4f26-8c5c-7b38a686c921?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"A high-level workflow sample for managing server settings is shown below. The sequence of REST API requests in the following procedure allows an administrative user to manage the Intelligence Server settings."),(0,o.kt)("p",null,"A detailed explanation of each step is provided below."),(0,o.kt)("h2",{id:"log-in"},"Log in"),(0,o.kt)("p",null,"Endpoint: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login")),(0,o.kt)("p",null,"This endpoint allows the user to authenticate with the MicroStrategy REST Server. You can provide the information used to create the session in the body of the request. In this example, you can use standard authentication, so you need to provide the username and password. If the call is successful, the resulting response returns a status code of 204 and a response header containing X-MSTR-AuthToken. This authorization token is used by all subsequent requests."),(0,o.kt)("p",null,"In the following example, standard authentication uses a username of administrator and a blank password."),(0,o.kt)("h3",{id:"sample-request"},"Sample request"),(0,o.kt)("p",null,"Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "administrator",\n  "password": "yourPassword"\n}\n')),(0,o.kt)("p",null,"Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/login" -H "accept: application/json" -H "Content-Type: application/json" -d "{\\\\"username\\\\":\\\\"administrator\\\\",\\\\"password\\\\":\\\\"yourPassword\\\\"}"\n')),(0,o.kt)("h3",{id:"sample-response"},"Sample response"),(0,o.kt)("p",null,"Response Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},"cache-control: no-cache, no-store, max-age=0, must-revalidate\ndate: Mon, 28 Oct 2019 17:38:15 GMT\nexpires: 0\npragma: no-cache\nx-mstr-authtoken: f34qc7evsntsks0qe6hfcgt0ur\n")),(0,o.kt)("p",null,"Response Code: 204 (Success: No Content)"),(0,o.kt)("h2",{id:"get-the-intelligence-server-setting-configurations"},"Get the Intelligence Server setting configurations"),(0,o.kt)("p",null,"Endpoint: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System%20Administration/getIserverSettingsProperties"},"GET /api/v2/iserver/settings/config")),(0,o.kt)("p",null,"This endpoint allows the user to retrieve information on all Intelligence Server settings that are available in MicroStrategy REST API. The information includes the setting description, type, options, unit, minimum value, maximum value, and reboot rule. You must specify an authorization token in the request header, which can be obtained from ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login")," during ",(0,o.kt)("a",{parentName:"p",href:"#log-in"},"login"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This operation requires the Web User privilege.")),(0,o.kt)("h3",{id:"sample-request-1"},"Sample request"),(0,o.kt)("p",null,"Request Parameter:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken")),(0,o.kt)("p",null,"The authorization token generated by `POST /api/auth/login.``"),(0,o.kt)("p",null,"Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/iserver/settings/config" -H "accept: application/json" -H "X-MSTR-AuthToken: 562f9s80514s26mm7qhi47o96f"\n')),(0,o.kt)("h3",{id:"sample-response-1"},"Sample response"),(0,o.kt)("p",null,"Response Body:"),(0,o.kt)("p",null,"The following sample is part of the complete response body."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "maxUserConnectionPerServer": {\n    "description": "Maximum number of user sessions",\n    "type": "number",\n    "max_value": 1000,\n    "min_value": 0,\n    "multi_select": false,\n    "options": [\n      {\n        "name": "No Limit",\n        "value": -1\n      }\n    ]\n  },\n  "maxUserConnectionIdleTime": {\n    "description": "Tools session idle time (sec)",\n    "type": "number",\n    "unit": "second",\n    "reboot_rule": {\n      "rule": "changed",\n      "precondition": "reboot_iserver",\n      "description": "The setting will take effect after restart Intelligence Server"\n    },\n    "max_value": 999999,\n    "min_value": 0,\n    "multi_select": false,\n    "options": [\n      {\n        "name": "No Limit",\n        "value": -1\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"Response Code: 200 (Success: OK)"),(0,o.kt)("h2",{id:"get-the-intelligence-server-setting-values"},"Get the Intelligence Server setting values"),(0,o.kt)("p",null,"Endpoint: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System%20Administration/getIserverSettings"},"GET /api/v2/iserver/settings")),(0,o.kt)("p",null,"This endpoint allows you to retrieve all Intelligence Server setting values that are available in MicroStrategy REST API. You must specify an authorization token in the request header, which can be obtained from ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login")," during ",(0,o.kt)("a",{parentName:"p",href:"#log-in"},"login"),"."),(0,o.kt)("h3",{id:"sample-request-2"},"Sample request"),(0,o.kt)("p",null,"Request Parameter:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken")),(0,o.kt)("p",null,"The authorization token generated by ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),"."),(0,o.kt)("p",null,"Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/iserver/settings/config" -H\n')),(0,o.kt)("h3",{id:"sample-response-2"},"Sample response"),(0,o.kt)("p",null,"Response Body:"),(0,o.kt)("p",null,"The following sample is part of the complete response body."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "maxUsedVirtualByte": {\n    "value": 99\n  },\n  "importSAPUser": {\n    "value": false\n  },\n  "maxInboxMsgLifeTime": {\n    "value": -1\n  },\n  "hashIterations": {\n    "value": 10000\n  },\n  "tokenTTL": {\n    "value": 1440\n  },\n  "loadBalanceMode": {\n    "value": false\n  }\n}\n')),(0,o.kt)("p",null,"Response Code: 200 (Success: OK)"),(0,o.kt)("h2",{id:"update-a-part-of-the-intelligence-server-setting-values"},"Update a part of the Intelligence Server setting values"),(0,o.kt)("p",null,"Endpoint: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System%20Administration/setIserverSettings"},"PATCH /api/v2/iserver/settings")),(0,o.kt)("p",null,"This endpoint allows you to modify part of the project settings exposed in REST API via ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/v2/iserver/settings/config"),". You must specify an authorization token in the request header, which can be obtained from ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login")," during ",(0,o.kt)("a",{parentName:"p",href:"#log-in"},"login"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Depending on the setting you are modifying, the response body will tell you which privilege is required for the operation.")),(0,o.kt)("h3",{id:"sample-request-3"},"Sample request"),(0,o.kt)("p",null,"Request Parameter:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken")),(0,o.kt)("p",null,"The authorization token generated by ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),"."),(0,o.kt)("p",null,"Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "maxUsedVirtualByte": {\n    "value": 98\n  },\n  "importSAPUser": {\n    "value": true\n  }\n}\n')),(0,o.kt)("p",null,"Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH "https://demo.cloud.microstrategy.com/MicroStrategyLibrary/api/v2/iserver/settings" -H "accept: application/json" -H "X-MSTR-AuthToken: 562f9s80514s26mm7qhi47o96f" -H "Content-Type: application/json" -d "{\\\\"maxUsedVirtualByte\\\\":{\\\\"value\\\\":98},\\\\"importSAPUser\\\\":{\\\\"value\\\\":true}}"\n')),(0,o.kt)("h3",{id:"sample-response-3"},"Sample response"),(0,o.kt)("p",null,"Response Body:"),(0,o.kt)("p",null,"The following sample is part of the complete response body. A complete list of Intelligence Server setting values with the modified values should be returned."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "maxUsedVirtualByte": {\n    "value": 98\n  },\n  "importSAPUser": {\n    "value": true\n  },\n  "maxInboxMsgLifeTime": {\n    "value": -1\n  },\n  "hashIterations": {\n    "value": 10000\n  },\n  "tokenTTL": {\n    "value": 1440\n  }\n}\n')),(0,o.kt)("p",null,"Response Code: 200 (Success: OK)"),(0,o.kt)("h2",{id:"update-all-intelligence-server-setting-values"},"Update all Intelligence Server setting values"),(0,o.kt)("p",null,"Endpoint: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System%20Administration/setAllIserverSettings"},"PUT /api/v2/iserver/settings")),(0,o.kt)("p",null,"This endpoint allows you to access all of the Intelligence Server setting values that are available in MicroStrategy REST API. In this endpoint, you must provide a complete list of Intelligence Server settings, which is the different from the ",(0,o.kt)("inlineCode",{parentName:"p"},"PATCH /api/v2/iserver/settings")," endpoint. You can find a list of Intelligence Server settings exposed in REST API via ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/v2/iserver/settings/config"),". You must specify an authorization token in the request header, which can be obtained from ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login")," during ",(0,o.kt)("a",{parentName:"p",href:"#log-in"},"login"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This operation requires the following privileges:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Configure Server Basic"),(0,o.kt)("li",{parentName:"ul"},"Configure Governing"),(0,o.kt)("li",{parentName:"ul"},"Configure History Lists"),(0,o.kt)("li",{parentName:"ul"},"Configure Security Settings"),(0,o.kt)("li",{parentName:"ul"},"Configure Statistics"),(0,o.kt)("li",{parentName:"ul"},"Configure Caches"),(0,o.kt)("li",{parentName:"ul"},"Create and Edit Database Instances and Connections"))),(0,o.kt)("h3",{id:"sample-request-4"},"Sample request"),(0,o.kt)("p",null,"Request Parameter:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken")),(0,o.kt)("p",null,"The authorization token generated by ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),"."),(0,o.kt)("p",null,"Request Body:"),(0,o.kt)("p",null,"The following sample is part of the complete request body. The complete request body must contain all Intelligence Server settings."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "maxUsedVirtualByte": {\n    "value": 99\n  },\n  "importSAPUser": {\n    "value": false\n  },\n  "maxInboxMsgLifeTime": {\n    "value": -1\n  },\n  "hashIterations": {\n    "value": 10000\n  },\n  "tokenTTL": {\n    "value": 1440\n  },\n  "loadBalanceMode": {\n    "value": false\n  }\n}\n')),(0,o.kt)("p",null,"Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/iserver/settings" -H "accept: application/json" -H "X-MSTR-AuthToken: 562f9s80514s26mm7qhi47o96f" -H "Content-Type: application/json" -d "{\\\\"maxUsedVirtualByte\\\\":{\\\\"value\\\\":99},\\\\"importSAPUser\\\\":{\\\\"value\\\\":false},\\\\"maxInboxMsgLifeTime\\\\":{\\\\"value\\\\":-1},\\\\"hashIterations\\\\":{\\\\"value\\\\":10000},\\\\"tokenTTL\\\\":{\\\\"value\\\\":1440},\\\\"loadBalanceMode\\\\":{\\\\"value\\\\":false},...}"\n')),(0,o.kt)("h3",{id:"sample-response-4"},"Sample response"),(0,o.kt)("p",null,"Response Body:"),(0,o.kt)("p",null,"The following sample is part of the complete response body. A complete list of Intelligence Server setting values with the modified values should be returned."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "maxUsedVirtualByte": {\n    "value": 99\n  },\n  "importSAPUser": {\n    "value": false\n  },\n  "maxInboxMsgLifeTime": {\n    "value": -1\n  },\n  "hashIterations": {\n    "value": 10000\n  },\n  "tokenTTL": {\n    "value": 1440\n  },\n  "loadBalanceMode": {\n    "value": false\n  }\n}\n')),(0,o.kt)("p",null,"Response Code: 200 (Success: OK)"),(0,o.kt)("h2",{id:"log-out"},"Log out"),(0,o.kt)("p",null,"Endpoint: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogout"},"POST /api/auth/logout")),(0,o.kt)("p",null,"This endpoint allows the caller to log out the authenticated user from the MicroStrategy REST server. In this example, you close the active user session by providing the ",(0,o.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken")," authorization token, which is generated by ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),". If the call is successful, the resulting response returns a status code of 204."),(0,o.kt)("h3",{id:"sample-request-5"},"Sample request"),(0,o.kt)("p",null,"Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https:// demo.microstrategy.com/MicroStrategyLibrary/api/auth/logout" -H "accept: application/json" -H "X-MSTR-AuthToken: c8afkjurl1r9qk2k7puj2hs9cu"\n')),(0,o.kt)("h3",{id:"sample-response-5"},"Sample response"),(0,o.kt)("p",null,"Response Code: 204 (Accepted)"))}h.isMDXComponent=!0}}]);