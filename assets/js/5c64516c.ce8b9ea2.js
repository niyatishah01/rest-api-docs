"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[7499],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return m}});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=u(a),m=o,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||n;return a?r.createElement(f,i(i({ref:t},l),{},{components:a})):r.createElement(f,i({ref:t},l))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<n;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7379:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=a(3117),o=a(102),n=(a(7294),a(3905)),i=["components"],s={title:"Update Job Priorities for Datasource",description:"This workflow sample demonstrates how to update job priorities for a datasource."},p=void 0,u={unversionedId:"common-workflows/datasource-management/update-job-priorities-for-datasource",id:"common-workflows/datasource-management/update-job-priorities-for-datasource",title:"Update Job Priorities for Datasource",description:"This workflow sample demonstrates how to update job priorities for a datasource.",source:"@site/docs/common-workflows/datasource-management/update-job-priorities-for-datasource.md",sourceDirName:"common-workflows/datasource-management",slug:"/common-workflows/datasource-management/update-job-priorities-for-datasource",permalink:"/rest-api-docs/common-workflows/datasource-management/update-job-priorities-for-datasource",draft:!1,editUrl:"https://github.com/MicroStrategy/restapi-docs/tree/main/docs/common-workflows/datasource-management/update-job-priorities-for-datasource.md",tags:[],version:"current",lastUpdatedBy:"Liang, Jiapei",lastUpdatedAt:1663187922,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"Update Job Priorities for Datasource",description:"This workflow sample demonstrates how to update job priorities for a datasource."},sidebar:"tutorialSidebar",previous:{title:"Add and Remove Datasource From Project",permalink:"/rest-api-docs/common-workflows/datasource-management/add-and-remove-datasource-from-project"},next:{title:"Delete a datasource",permalink:"/rest-api-docs/common-workflows/datasource-management/delete-a-datasource"}},l={},d=[{value:"Get job prioritization info for a database source",id:"get-job-prioritization-info-for-a-database-source",level:2},{value:"Update job prioritization info for a database source",id:"update-job-prioritization-info-for-a-database-source",level:2}],c={toc:d};function m(e){var t=e.components,a=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,n.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-505d98ef-0c01-4754-b6ff-704ab2284118?ctx=documentation"},"REST API Playground"),"."),(0,n.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,n.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,n.kt)("p",null,"This workflow sample demonstrates how to update job priorities for a datasource."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#get-job-prioritization-info-for-a-database-source"},"Get job prioritization info for a database source.")," ",(0,n.kt)("inlineCode",{parentName:"li"},"GET /api/datasources/{datasourceId}/jobPriorities")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#update-job-prioritization-info-for-a-database-source"},"Update job prioritization info for a database source.")," ",(0,n.kt)("inlineCode",{parentName:"li"},"PATCH /api/datasources/{datasourceId}/jobPriorities"))),(0,n.kt)("p",null,"A detailed description of each step of this request is listed down below."),(0,n.kt)("h2",{id:"get-job-prioritization-info-for-a-database-source"},"Get job prioritization info for a database source"),(0,n.kt)("p",null,"End Point: ",(0,n.kt)("inlineCode",{parentName:"p"},"GET /api/datasources/{datasourceId}/jobPriorities")),(0,n.kt)("p",null,"This endpoint allows the caller to get job prioritization info for a specific database source with the MicroStrategy REST Server. You use the authorization token returned during login as the value for ",(0,n.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),". You can find the datasourceId using the endpoint ",(0,n.kt)("inlineCode",{parentName:"p"},"GET /api/datasources"),". If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a response body containing info regarding the job priorities for the datasource."),(0,n.kt)("p",null,"Sample Request"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Request Headers"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-http"},"'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Request Body: Empty")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Curl"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location -g --request GET 'https://demo.microstrategy.com/MicroStrategyLibrary/api/datasources/{{datasourceId}}/jobPriorities' \\\n--header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n")))),(0,n.kt)("p",null,"Sample Response"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Response Body"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Warehouse",\n  "lowerBound": 0,\n  "upperBound": 0,\n  "threadCount": 0,\n  "maxThreadCount": -1,\n  "minThreadCount": -1,\n  "jobQueues": [\n    {\n      "name": "HIGH",\n      "lowerBound": 0,\n      "upperBound": 333,\n      "threadCount": 0,\n      "maxThreadCount": 2,\n      "minThreadCount": 2,\n      "jobQueues": [],\n      "members": {\n        "elements": [],\n        "defaultPriority": -1\n      }\n    },\n    {\n      "name": "MEDIUM",\n      "lowerBound": 333,\n      "upperBound": 667,\n      "threadCount": 0,\n      "maxThreadCount": 2,\n      "minThreadCount": 2,\n      "jobQueues": [],\n      "members": {\n        "elements": [],\n        "defaultPriority": -1\n      }\n    },\n    {\n      "name": "LOW",\n      "lowerBound": 667,\n      "upperBound": 1000,\n      "threadCount": 0,\n      "maxThreadCount": 2,\n      "minThreadCount": 2,\n      "jobQueues": [],\n      "members": {\n        "elements": [],\n        "defaultPriority": -1\n      }\n    }\n  ],\n  "members": {\n    "elements": [],\n    "defaultPriority": -1\n  }\n}\n')),(0,n.kt)("p",{parentName:"li"},"Sample Response Code: 200 (Get job priorities.)"))),(0,n.kt)("h2",{id:"update-job-prioritization-info-for-a-database-source"},"Update job prioritization info for a database source"),(0,n.kt)("p",null,"End Point: ",(0,n.kt)("inlineCode",{parentName:"p"},"PATCH /api/datasources/{datasourceId}/jobPriorities")),(0,n.kt)("p",null,"This endpoint allows the caller to update job prioritization info for a specific database source with the MicroStrategy REST Server. You use the authorization token returned during login as the value for ",(0,n.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),". You can find the datasourceId using the endpoint ",(0,n.kt)("inlineCode",{parentName:"p"},"GET /api/datasources"),". If the call is successful, the resulting HTTP response returns an HTTP status code 204 and a empty response body."),(0,n.kt)("p",null,"Sample Request"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Request Headers"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Request Body"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "operationList": [\n    {\n      "op": "replace",\n      "path": "/jobQueues/HIGH/threadCount",\n      "value": 8\n    }\n  ]\n}\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Curl"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location -g --request PATCH \'https://demo.microstrategy.com/MicroStrategyLibrary/api/datasources/{{datasourceId}}/jobPriorities\' \\\n--header \'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n"operationList": [\n                    {\n                        "op": "replace",\n                        "path": "/jobQueues/HIGH/threadCount",\n                        "value": 8\n                    }\n                ]\n}\'\n')))),(0,n.kt)("p",null,"Sample Response"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Response Body: Empty Sample Response Code: 201 (Update job priorities for datasource.)")))}m.isMDXComponent=!0}}]);