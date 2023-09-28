"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[732],{3905:function(n,e,t){t.d(e,{Zo:function(){return l},kt:function(){return u}});var r=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var p=r.createContext({}),c=function(n){var e=r.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},l=function(n){var e=c(n.components);return r.createElement(p.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,p=n.parentName,l=s(n,["components","mdxType","originalType","parentName"]),d=c(t),u=a,y=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return t?r.createElement(y,i(i({ref:e},l),{},{components:t})):r.createElement(y,i({ref:e},l))}));function u(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=n,s.mdxType="string"==typeof n?n:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6411:function(n,e,t){t.r(e),t.d(e,{assets:function(){return m},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return d}});var r,a=t(83117),o=t(80102),i=(t(67294),t(3905)),s=["components"],p={title:"Retrieve a transaction report's definition",description:"This workflow sample demonstrates how to retrieve a transaction report's definition."},c=void 0,l={unversionedId:"common-workflows/analytics/manage-reports/manage-transaction-report-objects/retrieve-transaction-report-definition",id:"common-workflows/analytics/manage-reports/manage-transaction-report-objects/retrieve-transaction-report-definition",title:"Retrieve a transaction report's definition",description:"This workflow sample demonstrates how to retrieve a transaction report's definition.",source:"@site/docs/common-workflows/analytics/manage-reports/manage-transaction-report-objects/retrieve-transaction-report-definition.md",sourceDirName:"common-workflows/analytics/manage-reports/manage-transaction-report-objects",slug:"/common-workflows/analytics/manage-reports/manage-transaction-report-objects/retrieve-transaction-report-definition",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-transaction-report-objects/retrieve-transaction-report-definition",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/manage-reports/manage-transaction-report-objects/retrieve-transaction-report-definition.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1695919031,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{title:"Retrieve a transaction report's definition",description:"This workflow sample demonstrates how to retrieve a transaction report's definition."},sidebar:"tutorialSidebar",previous:{title:"Manage transaction report objects",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-transaction-report-objects/"},next:{title:"Create a transaction report",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-transaction-report-objects/create-a-transaction-report"}},m={},d=[],u=(r="Available",function(n){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",n)}),y={toc:d};function f(n){var e=n.components,t=(0,o.Z)(n,s);return(0,i.kt)("wrapper",(0,a.Z)({},y,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)(u,{since:"2021 Update 8",mdxType:"Available"}),(0,i.kt)("p",null,"This workflow sample demonstrates how to retrieve an existing transaction report's definition."),(0,i.kt)("p",null,'You want to get the definition of the "Insert Sales Opportunity Action" transaction report. The object ID of the transaction report is ',(0,i.kt)("inlineCode",{parentName:"p"},"34D6AC79420AF8365B176480D411C3A9"),' in the "MicroStrategy Tutorial" project. The project ID is ',(0,i.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),". You also need to fetch authorization token to send correct request."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence Server and creates a unique authorization token for the client."),(0,i.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Transaction%20Reports/ms-getTransactionReport"},"GET /api/model/transactionReports/{transactionReportId}")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"accept": "application/json"\n"X-MSTR-AuthToken": "hiq010aleeadhllq0lodq7r6hb"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET '10.23.33.32:8080/MicroStrategyLibrary/api/model/transactionReports/34D6AC79420AF8365B176480D411C3A9' -H 'X-MSTR-AuthToken: hiq010aleeadhllq0lodq7r6hb' -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' -H 'Cookie: JSESSIONID=73DAD31EF81161B92DE36CEC3B266F5C; iSession=hiq010aleeadhllq0lodq7r6hb'\n")),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,"You can view the transaction SQL report's definition in the body of the response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2012-02-08T15:31:56.000Z",\n    "dateModified": "2016-08-12T19:33:37.000Z",\n    "versionId": "38056ADF4E34060FC452978075E52405",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "34D6AC79420AF8365B176480D411C3A9",\n    "subType": "report_transaction",\n    "name": "Insert Sales Opportunity Action"\n  },\n  "table": {\n    "physicalTable": {\n      "columns": [\n        {\n          "id": "1C591D1E49135023BF563889131620C8",\n          "name": "Opportunity (ID)",\n          "dataType": {\n            "type": "integer",\n            "precision": 4,\n            "scale": 0\n          },\n          "required": true\n        },\n        {\n          "id": "576B04A54450ABD49383CEB49F9A23CC",\n          "name": "Action (ID)",\n          "dataType": {\n            "type": "integer",\n            "precision": 4,\n            "scale": 0\n          },\n          "required": true\n        },\n        {\n          "id": "746A76B24F43297F8FCCE292F2635048",\n          "name": "Action (DESC)",\n          "dataType": {\n            "type": "fixed_length_string",\n            "precision": 255,\n            "scale": 0\n          },\n          "required": true\n        },\n        {\n          "id": "05FA15DB4F6B8F7E81685FB480B877F1",\n          "name": "Opportunity Status (ID)",\n          "dataType": {\n            "type": "fixed_length_string",\n            "precision": 255,\n            "scale": 0\n          },\n          "required": true\n        },\n        {\n          "id": "F0C9155541F904CB9BDADB8EAC5E7612",\n          "name": "Action Date (ID)",\n          "dataType": {\n            "type": "time_stamp",\n            "precision": 6,\n            "scale": 0\n          },\n          "required": true\n        }\n      ],\n      "sqlExpression": {\n        "tree": {\n          "function": "concat_no_blank",\n          "children": [\n            {\n              "function": "repeat",\n              "functionProperties": [\n                {\n                  "name": "Distinct",\n                  "value": {\n                    "type": "boolean",\n                    "value": "true"\n                  }\n                }\n              ],\n              "children": [\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": " \\r\\n\\r\\nINSERT INTO F_SALES_ACTIONS\\r\\nVALUES\\r\\n("\n                  }\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": "#0"\n                  }\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": ", "\n                  }\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": "#1"\n                  }\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": ", "\n                  }\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": "#2"\n                  }\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": ", "\n                  }\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": "#3"\n                  }\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": ", "\n                  }\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": "#4"\n                  }\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": ")\\r\\n\\r\\n"\n                  }\n                }\n              ],\n              "type": "operator"\n            }\n          ],\n          "type": "operator"\n        }\n      }\n    },\n    "attributes": [\n      {\n        "id": "82E57B1D48B416E10CD0CAB07A1D5613",\n        "name": "Opportunity",\n        "forms": [\n          {\n            "id": "45C11FA478E745FEA08D781CEA190FE5",\n            "category": "ID",\n            "type": "system",\n            "displayFormat": "number",\n            "expression": {\n              "tree": {\n                "type": "column_reference",\n                "objectId": "1C591D1E49135023BF563889131620C8",\n                "name": "Opportunity (ID)"\n              }\n            }\n          }\n        ]\n      },\n      {\n        "id": "B11D0DB949462D5576E61A82D73C4594",\n        "name": "Action",\n        "forms": [\n          {\n            "id": "45C11FA478E745FEA08D781CEA190FE5",\n            "category": "ID",\n            "type": "system",\n            "displayFormat": "number",\n            "expression": {\n              "tree": {\n                "type": "column_reference",\n                "objectId": "576B04A54450ABD49383CEB49F9A23CC",\n                "name": "Action (ID)"\n              }\n            }\n          },\n          {\n            "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n            "name": "DESC",\n            "category": "DESC",\n            "type": "system",\n            "displayFormat": "text",\n            "expression": {\n              "tree": {\n                "type": "column_reference",\n                "objectId": "746A76B24F43297F8FCCE292F2635048",\n                "name": "Action (DESC)"\n              }\n            }\n          }\n        ]\n      },\n      {\n        "id": "BA6A970D4EFB4D39CA4848A97C4301D7",\n        "name": "Opportunity Status",\n        "forms": [\n          {\n            "id": "45C11FA478E745FEA08D781CEA190FE5",\n            "category": "ID",\n            "type": "system",\n            "displayFormat": "text",\n            "expression": {\n              "tree": {\n                "type": "column_reference",\n                "objectId": "05FA15DB4F6B8F7E81685FB480B877F1",\n                "name": "Opportunity Status (ID)"\n              }\n            }\n          }\n        ]\n      },\n      {\n        "id": "6D3C7BF94F042D9DB6B65A84EBB59D5A",\n        "name": "Action Date",\n        "forms": [\n          {\n            "id": "45C11FA478E745FEA08D781CEA190FE5",\n            "category": "ID",\n            "type": "system",\n            "displayFormat": "date_time",\n            "expression": {\n              "tree": {\n                "type": "column_reference",\n                "objectId": "F0C9155541F904CB9BDADB8EAC5E7612",\n                "name": "Action Date (ID)"\n              }\n            }\n          }\n        ]\n      }\n    ],\n    "metrics": [],\n    "dataSource": {\n      "objectId": "BCB3836D4C70EDF53CB706ABA556B44B",\n      "subType": "db_role",\n      "name": "Operational Datamart"\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Response Code: 200 (The transaction report's definition is returned successfully.)"))}f.isMDXComponent=!0}}]);