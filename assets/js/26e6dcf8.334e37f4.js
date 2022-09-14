"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[7948],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,k=m["".concat(d,".").concat(u)]||m[u]||c[u]||o;return a?n.createElement(k,s(s({ref:t},l),{},{components:a})):n.createElement(k,s({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6998:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),s=["components"],i={title:"Add and Remove Datasource From Project",description:"This workflow sample demonstrates how to add a datasource to a project."},d=void 0,p={unversionedId:"common-workflows/datasource-management/add-and-remove-datasource-from-project",id:"common-workflows/datasource-management/add-and-remove-datasource-from-project",title:"Add and Remove Datasource From Project",description:"This workflow sample demonstrates how to add a datasource to a project.",source:"@site/docs/common-workflows/datasource-management/add-and-remove-datasource-from-project.md",sourceDirName:"common-workflows/datasource-management",slug:"/common-workflows/datasource-management/add-and-remove-datasource-from-project",permalink:"/rest-api-docs/common-workflows/datasource-management/add-and-remove-datasource-from-project",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/main/docs/common-workflows/datasource-management/add-and-remove-datasource-from-project.md",tags:[],version:"current",lastUpdatedBy:"Liang, Jiapei",lastUpdatedAt:1663189678,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"Add and Remove Datasource From Project",description:"This workflow sample demonstrates how to add a datasource to a project."},sidebar:"tutorialSidebar",previous:{title:"Update a datasource",permalink:"/rest-api-docs/common-workflows/datasource-management/update-a-datasource"},next:{title:"Update Job Priorities for Datasource",permalink:"/rest-api-docs/common-workflows/datasource-management/update-job-priorities-for-datasource"}},l={},c=[{value:"Get list of datasources based on project",id:"get-list-of-datasources-based-on-project",level:2},{value:"Add datasource to project",id:"add-datasource-to-project",level:2},{value:"Remove datasource to project",id:"remove-datasource-to-project",level:2}],m={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This workflow sample demonstrates how to add a datasource to a project. To see how to remove a project please click ",(0,o.kt)("a",{parentName:"p",href:"#remove-datasource-to-project"},"here"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#get-list-of-datasources-based-on-project"},"Get list of datasources based on project.")," ",(0,o.kt)("inlineCode",{parentName:"li"},"GET /api/projects/{projectId}/datasources")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#add-datasource-to-project"},"Add a datasource to a project.")," ",(0,o.kt)("inlineCode",{parentName:"li"},"PATCH /api/projects/{projectId}/datasources"))),(0,o.kt)("p",null,"A detailed description of each step of this request is listed down below. For this sample we are using the MicroStrategy Tutorial project with project ID B7CA92F04B9FAE8D941C3E9B7E0CD754. You can obtain the project ID from ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/projects"),"."),(0,o.kt)("h2",{id:"get-list-of-datasources-based-on-project"},"Get list of datasources based on project"),(0,o.kt)("p",null,"End Point: ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/projects/{projectId}/datasources")),(0,o.kt)("p",null,"This endpoint allows the caller to get the datasources associated with a specific project with the MicroStrategy REST Server. You use the authorization token returned during login as the value for ",(0,o.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),". If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a response body containing the datasources for a project."),(0,o.kt)("p",null,"Sample Request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Headers"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},"'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Body: Empty")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Curl"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location -g --request GET 'https://demo.microstrategy.com/MicroStrategyLibrary/api/projects/{{projectId}}/datasources' \\\n--header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n")))),(0,o.kt)("p",null,"Sample Response"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Body"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "datasources": [\n    {\n      "id": "A23BBC514D336D5B4FCE919FE19661A3",\n      "name": "Tutorial Postgres",\n      "description": "",\n      "dateCreated": "2015-06-15T17:44:06.000+0000",\n      "dateModified": "2021-07-28T16:53:43.000+0000",\n      "acg": 255,\n      "datasourceType": "normal",\n      "database": {\n        "type": "postgre_sql",\n        "version": "postgre_sql_90",\n        "connection": {\n          "name": "TutorialWHLinux",\n          "id": "A7543BCC4AC0AE818ED0F4B4357D2A61",\n          "isEmbedded": false\n        }\n      },\n      "tablePrefix": "public.",\n      "odbcVersion": "version3x",\n      "intermediateStoreDbName": "",\n      "intermediateStoreTableSpaceName": "",\n      "dbms": {\n        "name": "PostgreSQL",\n        "id": "702780F3E3594D95AD4C85CE8F803306"\n      },\n      "owner": {\n        "name": "Administrator",\n        "id": "54F3D26011D2896560009A8E67019608"\n      },\n      "isAllowToRemove": false\n    },\n    {\n      "id": "BCB3836D4C70EDF53CB706ABA556B44B",\n      "name": "Operational Datamart",\n      "description": "Operational Datamart",\n      "dateCreated": "2006-08-10T14:37:07.000+0000",\n      "dateModified": "2021-07-28T16:53:44.000+0000",\n      "acg": 255,\n      "datasourceType": "normal",\n      "database": {\n        "type": "postgre_sql",\n        "version": "postgre_sql_90",\n        "connection": {\n          "name": "OpWHLinux",\n          "id": "2D95429243FACC237B23A9AD06417E77",\n          "isEmbedded": false\n        }\n      },\n      "tablePrefix": "public.",\n      "odbcVersion": "version3x",\n      "intermediateStoreDbName": "",\n      "intermediateStoreTableSpaceName": "",\n      "dbms": {\n        "name": "PostgreSQL",\n        "id": "702780F3E3594D95AD4C85CE8F803306"\n      },\n      "owner": {\n        "name": "Administrator",\n        "id": "54F3D26011D2896560009A8E67019608"\n      },\n      "isAllowToRemove": false\n    }\n  ]\n}\n')),(0,o.kt)("p",{parentName:"li"},"Sample Response Code: 200 (Get list of datasources.)"))),(0,o.kt)("h2",{id:"add-datasource-to-project"},"Add datasource to project"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-d70fe450-32f0-44a2-b648-6fdc04ff4eb3?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"End Point: ",(0,o.kt)("inlineCode",{parentName:"p"},"PATCH /api/projects/{projectId}/datasources")),(0,o.kt)("p",null,"This endpoint allows the caller to add and remove a datasource to a specific project with the MicroStrategy REST Server. In this request we will add a datasource. You use the authorization token returned during login as the value for ",(0,o.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),". For this sample we will be adding the Act! Essentials datasource to the MicroStrategy Tutorial project. You can find the datasourceId using the endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/datasources")," and the projectId using ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/projects"),". If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a list of the project's datasources."),(0,o.kt)("p",null,"Sample Request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Headers"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},"'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Body"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "operationList": [\n    {\n      "op": "add",\n      "path": "/id",\n      "value": "FE0D1FDD7EA146DB954056FD72F04310"\n    }\n  ]\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Curl"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location -g --request PATCH \'https://demo.microstrategy.com/MicroStrategyLibrary/api/projects/{{projectId}}/datasources\' \\\n--header \'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "operationList": [\n        {\n            "op": "add",\n            "path": "/id",\n            "value": "FE0D1FDD7EA146DB954056FD72F04310"\n        }\n    ]\n}\'\n')))),(0,o.kt)("p",null,"Sample Response"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Response Body:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "datasources": [\n    {\n      "id": "A23BBC514D336D5B4FCE919FE19661A3",\n      "name": "Tutorial Postgres",\n      "description": "",\n      "dateCreated": "2015-06-15T17:44:06.000+0000",\n      "dateModified": "2021-07-28T16:53:43.000+0000",\n      "acg": 255,\n      "datasourceType": "normal",\n      "database": {\n        "type": "postgre_sql",\n        "version": "postgre_sql_90",\n        "connection": {\n          "name": "TutorialWHLinux",\n          "id": "A7543BCC4AC0AE818ED0F4B4357D2A61",\n          "isEmbedded": false\n        }\n      },\n      "tablePrefix": "public.",\n      "odbcVersion": "version3x",\n      "intermediateStoreDbName": "",\n      "intermediateStoreTableSpaceName": "",\n      "dbms": {\n        "name": "PostgreSQL",\n        "id": "702780F3E3594D95AD4C85CE8F803306"\n      },\n      "owner": {\n        "name": "Administrator",\n        "id": "54F3D26011D2896560009A8E67019608"\n      },\n      "isAllowToRemove": false\n    },\n    {\n      "id": "FE0D1FDD7EA146DB954056FD72F04310",\n      "name": "Act! Essentials",\n      "description": "actessentialsoauth",\n      "dateCreated": "2018-08-16T20:34:43.000+0000",\n      "dateModified": "2021-07-28T16:53:40.000+0000",\n      "acg": 255,\n      "datasourceType": "normal",\n      "database": {\n        "type": "cloud_element",\n        "version": "default",\n        "connection": {\n          "name": "",\n          "id": "E1A9CB3D246441B4A6BD9B78B4BF022A",\n          "isEmbedded": true\n        }\n      },\n      "tablePrefix": "",\n      "odbcVersion": "version3x",\n      "intermediateStoreDbName": "",\n      "intermediateStoreTableSpaceName": "",\n      "dbms": {\n        "name": "CloudElement",\n        "id": "AD3FCA53A5B84DD49542BF2E1AE4847C"\n      },\n      "owner": {\n        "name": "Administrator",\n        "id": "54F3D26011D2896560009A8E67019608"\n      },\n      "isAllowToRemove": true\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Sample Response Code: 200 (Add datasource to project.)"),(0,o.kt)("h2",{id:"remove-datasource-to-project"},"Remove datasource to project"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-3bf7d98a-eaac-44bc-8a0d-71894ff2bcc0?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"End Point: ",(0,o.kt)("inlineCode",{parentName:"p"},"PATCH /api/projects/{projectId}/datasources")),(0,o.kt)("p",null,"This endpoint allows the caller to add and remove a datasource to a specific project with the MicroStrategy REST Server. In this request we will remove a datasource. You use the authorization token returned during login as the value for ",(0,o.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),". For this sample we will be removing the Act! Essentials datasource from the MicroStrategy Tutorial project. You can find the datasourceId using the endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/datasources")," and the projectId using ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/projects"),". If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a list of the project's datasources."),(0,o.kt)("p",null,"Sample Request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Headers"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},"'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Body"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "operationList": [\n    {\n      "op": "remove",\n      "path": "/id",\n      "value": "FE0D1FDD7EA146DB954056FD72F04310"\n    }\n  ]\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Curl"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location -g --request PATCH \'https://demo.microstrategy.com/MicroStrategyLibrary/api/projects/{{projectId}}/datasources\' \\\n--header \'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "operationList": [\n        {\n            "op": "remove",\n            "path": "/id",\n            "value": "FE0D1FDD7EA146DB954056FD72F04310"\n        }\n    ]\n}\'\n')))),(0,o.kt)("p",null,"Sample Response"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Response Body:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "datasources": [\n    {\n      "id": "A23BBC514D336D5B4FCE919FE19661A3",\n      "name": "Tutorial Postgres",\n      "description": "",\n      "dateCreated": "2015-06-15T17:44:06.000+0000",\n      "dateModified": "2021-07-28T16:53:43.000+0000",\n      "acg": 255,\n      "datasourceType": "normal",\n      "database": {\n        "type": "postgre_sql",\n        "version": "postgre_sql_90",\n        "connection": {\n          "name": "TutorialWHLinux",\n          "id": "A7543BCC4AC0AE818ED0F4B4357D2A61",\n          "isEmbedded": false\n        }\n      },\n      "tablePrefix": "public.",\n      "odbcVersion": "version3x",\n      "intermediateStoreDbName": "",\n      "intermediateStoreTableSpaceName": "",\n      "dbms": {\n        "name": "PostgreSQL",\n        "id": "702780F3E3594D95AD4C85CE8F803306"\n      },\n      "owner": {\n        "name": "Administrator",\n        "id": "54F3D26011D2896560009A8E67019608"\n      },\n      "isAllowToRemove": false\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Sample Response Code: 200 (Remove datasource from project.)"))}u.isMDXComponent=!0}}]);