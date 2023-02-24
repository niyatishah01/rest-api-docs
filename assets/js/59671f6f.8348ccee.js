"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5218],{3905:function(n,e,t){t.d(e,{Zo:function(){return l},kt:function(){return u}});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var p=a.createContext({}),c=function(n){var e=a.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},l=function(n){var e=c(n.components);return a.createElement(p.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,p=n.parentName,l=s(n,["components","mdxType","originalType","parentName"]),d=c(t),u=r,y=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return t?a.createElement(y,i(i({ref:e},l),{},{components:t})):a.createElement(y,i({ref:e},l))}));function u(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=n,s.mdxType="string"==typeof n?n:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},317:function(n,e,t){t.r(e),t.d(e,{assets:function(){return m},contentTitle:function(){return c},default:function(){return E},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return d}});var a,r=t(3117),o=t(102),i=(t(7294),t(3905)),s=["components"],p={title:"Create a transaction report",description:"This workflow sample demonstrates how to create a new transaction report object from scratch."},c=void 0,l={unversionedId:"common-workflows/analytics/manage-reports/manage-transaction-report-objects/create-a-transaction-report",id:"common-workflows/analytics/manage-reports/manage-transaction-report-objects/create-a-transaction-report",title:"Create a transaction report",description:"This workflow sample demonstrates how to create a new transaction report object from scratch.",source:"@site/docs/common-workflows/analytics/manage-reports/manage-transaction-report-objects/create-a-transaction-report.md",sourceDirName:"common-workflows/analytics/manage-reports/manage-transaction-report-objects",slug:"/common-workflows/analytics/manage-reports/manage-transaction-report-objects/create-a-transaction-report",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-transaction-report-objects/create-a-transaction-report",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/manage-reports/manage-transaction-report-objects/create-a-transaction-report.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1677268684,formattedLastUpdatedAt:"Feb 24, 2023",frontMatter:{title:"Create a transaction report",description:"This workflow sample demonstrates how to create a new transaction report object from scratch."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a transaction report's definition",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-transaction-report-objects/retrieve-transaction-report-definition"},next:{title:"Update a transaction report's definition",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-transaction-report-objects/update-transaction-report-definition"}},m={},d=[],u=(a="Available",function(n){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",n)}),y={toc:d};function E(n){var e=n.components,t=(0,o.Z)(n,s);return(0,i.kt)("wrapper",(0,r.Z)({},y,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)(u,{since:"2021 Update 8",mdxType:"Available"}),(0,i.kt)("p",null,"This workflow sample demonstrates how to create a new transaction report object. Before following this workflow, you need to obtain authorization token and project ID."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence Server and creates a unique authorization token for the client."),(0,i.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,i.kt)("p",null,"You want to create a new transaction SQL report and name it as ",(0,i.kt)("inlineCode",{parentName:"p"},"New Transaction SQL Report")," in the destination folder of ",(0,i.kt)("inlineCode",{parentName:"p"},"D3C7D461F69C4610AA6BAA5EF51F4125"),". The project ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),". You want to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Operational Datamart")," as the datasource, whose ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"BCB3836D4C70EDF53CB706ABA556B44B"),". You want to update the ",(0,i.kt)("inlineCode",{parentName:"p"},"F_INVENTORY_ORDERS")," table of that datasource."),(0,i.kt)("p",null,"You want to update column ",(0,i.kt)("inlineCode",{parentName:"p"},"PRIORITY_FLAG")," using an existing metric ",(0,i.kt)("inlineCode",{parentName:"p"},"Priority_Flag"),", and update column ",(0,i.kt)("inlineCode",{parentName:"p"},"DELEVERY_DATE")," using existing metric ",(0,i.kt)("inlineCode",{parentName:"p"},"Delivery_Date"),". The update is restricted under condition column ",(0,i.kt)("inlineCode",{parentName:"p"},"MONTH_KEY")," equals the ",(0,i.kt)("inlineCode",{parentName:"p"},"ID")," form of an existing attribute ",(0,i.kt)("inlineCode",{parentName:"p"},"Month_I"),", and column ",(0,i.kt)("inlineCode",{parentName:"p"},"ITEM_KEY")," equals a newly created attribute ",(0,i.kt)("inlineCode",{parentName:"p"},"Item_I"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"ID")," form. Note that in the request body, a managed metric or attribute will be created automatically if you don't provide metric or attribute ID. You can use any existing attribute, while only managed metrics are allowed to use. The SQL expression below helps you to understand the workflow:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"Begin Transaction\n\nUPDATE F_INVENTORY_ORDERS\nSET\nPRIORITY_FLAG=[Priority_Flag],\nDELIVERY_DATE=[Delivery_Date]\nWHERE\nMONTH_KEY=[Month_I@ID]\nAND ITEM_KEY=[Item_I@ID]\n\nEnd Transaction\n")),(0,i.kt)("p",null,"You need to translate the SQL expression to tree form in the later request body."),(0,i.kt)("p",null,"You don't want to update ",(0,i.kt)("inlineCode",{parentName:"p"},"DELIVERY_DATE")," for every transaction, because sometimes there will be no data provided from the metric ",(0,i.kt)("inlineCode",{parentName:"p"},"Delivery_Date"),". In this case, you can set the ",(0,i.kt)("inlineCode",{parentName:"p"},"required")," field of ",(0,i.kt)("inlineCode",{parentName:"p"},"Delivery_Date")," column to be ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", and use ",(0,i.kt)("inlineCode",{parentName:"p"},"apply_optional")," function over ",(0,i.kt)("inlineCode",{parentName:"p"},",\\r\\nDELIVERY_DATE =#3 \\r\\n")," (check the request body below for details). Note that you need to include the comma before the ",(0,i.kt)("inlineCode",{parentName:"p"},"Delivery_Date")," so that this whole part can be correctly neglect when no data is provided from the metric."),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Transaction%20Reports/ms-postTransactionReport"},"POST /api/model/transactionReports")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"accept": "application/json"\n"X-MSTR-AuthToken": "a513l5d5dmoi3q73ebdif6bm8n"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "name": "New Transaction SQL Report",\n    "destinationFolderId": "D3C7D461F69C4610AA6BAA5EF51F4125"\n  },\n  "table": {\n    "physicalTable": {\n      "columns": [\n        {\n          "name": "Month_I (ID)",\n          "dataType": {\n            "type": "integer",\n            "precision": 4,\n            "scale": 0\n          },\n          "required": true\n        },\n        {\n          "name": "Item_I (ID)",\n          "dataType": {\n            "type": "integer",\n            "precision": 4,\n            "scale": 0\n          },\n          "required": true\n        },\n        {\n          "name": "Priority_Flag",\n          "dataType": {\n            "type": "fixed_length_string",\n            "precision": 255,\n            "scale": 0\n          },\n          "required": true\n        },\n        {\n          "name": "Delivery_Date",\n          "dataType": {\n            "type": "date",\n            "precision": 6,\n            "scale": 0\n          },\n          "required": false\n        }\n      ],\n      "sqlExpression": {\n        "tree": {\n          "function": "concat_no_blank",\n          "children": [\n            {\n              "function": "repeat",\n              "functionProperties": [\n                {\n                  "name": "Distinct",\n                  "value": {\n                    "type": "boolean",\n                    "value": "true"\n                  }\n                }\n              ],\n              "children": [\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": " \\r\\n\\r\\nUPDATE F_INVENTORY_ORDERS\\r\\nSET\\r\\nPRIORITY_FLAG = "\n                  }\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": "#2"\n                  }\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": ",\\r\\n"\n                  }\n                },\n                {\n                  "function": "apply_optional",\n                  "children": [\n                    {\n                      "type": "constant",\n                      "variant": {\n                        "type": "string",\n                        "value": "DELIVERY_DATE =#3 \\r\\n"\n                      }\n                    }\n                  ],\n                  "type": "operator"\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": "WHERE\\r\\nMONTH_KEY = "\n                  }\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": "#0"\n                  }\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": "\\r\\nAND ITEM_KEY = "\n                  }\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": "#1"\n                  }\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": "\\r\\n\\r\\n"\n                  }\n                }\n              ],\n              "type": "operator"\n            }\n          ],\n          "type": "operator"\n        }\n      }\n    },\n    "attributes": [\n      {\n        "id": "B70B6F2B493F50026A21FDA043C63247",\n        "name": "Month_I",\n        "forms": [\n          {\n            "id": "45C11FA478E745FEA08D781CEA190FE5",\n            "category": "ID",\n            "type": "system",\n            "displayFormat": "number",\n            "expression": {\n              "tree": {\n                "type": "column_reference",\n                "name": "Month_I (ID)"\n              }\n            }\n          }\n        ]\n      },\n      {\n        "name": "Item_I",\n        "forms": [\n          {\n            "id": "45C11FA478E745FEA08D781CEA190FE5",\n            "category": "ID",\n            "type": "system",\n            "displayFormat": "number",\n            "expression": {\n              "tree": {\n                "type": "column_reference",\n                "name": "Item_I (ID)"\n              }\n            }\n          }\n        ]\n      }\n    ],\n    "metrics": [\n      {\n        "id": "A1A0A7834AA1A0C79393E692E18C5369",\n        "name": "Priority_Flag",\n        "dataType": {\n          "type": "fixed_length_string",\n          "precision": 0,\n          "scale": 0\n        },\n        "expression": {\n          "tree": {\n            "type": "column_reference",\n            "name": "Priority_Flag"\n          }\n        }\n      },\n      {\n        "id": "D48B3EE94649A881B28C9FB967BE3B14",\n        "name": "Delivery_Date",\n        "dataType": {\n          "type": "date",\n          "precision": 0,\n          "scale": 0\n        },\n        "expression": {\n          "tree": {\n            "type": "column_reference",\n            "name": "Delivery_Date"\n          }\n        }\n      }\n    ],\n    "dataSource": {\n      "objectId": "BCB3836D4C70EDF53CB706ABA556B44B",\n      "subType": "db_role",\n      "name": "Operational Datamart"\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/transactionReports\' -H \'accept: application/json\' -H \'X-MSTR-AuthToken: a513l5d5dmoi3q73ebdif6bm8n\' -H \'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754\' -H \'Content-Type: application/json\' --data-raw \'{\n    "information": {\n        "name": "New Transaction SQL Report",\n        "destinationFolderId": "D3C7D461F69C4610AA6BAA5EF51F4125"\n    },\n    "table": {\n        "physicalTable": {\n            "columns": [\n                {\n                    "name": "Month_I (ID)",\n                    "dataType": {\n                        "type": "integer",\n                        "precision": 4,\n                        "scale": 0\n                    },\n                    "required": true\n                },\n                {\n                    "name": "Item_I (ID)",\n                    "dataType": {\n                        "type": "integer",\n                        "precision": 4,\n                        "scale": 0\n                    },\n                    "required": true\n                },\n                {\n                    "name": "Priority_Flag",\n                    "dataType": {\n                        "type": "fixed_length_string",\n                        "precision": 255,\n                        "scale": 0\n                    },\n                    "required": true\n                },\n                {\n                    "name": "Delivery_Date",\n                    "dataType": {\n                        "type": "date",\n                        "precision": 6,\n                        "scale": 0\n                    },\n                    "required": false\n                }\n            ],\n            "sqlExpression": {\n                "tree": {\n                    "function": "concat_no_blank",\n                    "children": [\n                        {\n                            "function": "repeat",\n                            "functionProperties": [\n                                {\n                                    "name": "Distinct",\n                                    "value": {\n                                        "type": "boolean",\n                                        "value": "true"\n                                    }\n                                }\n                            ],\n                            "children": [\n                                {\n                                    "type": "constant",\n                                    "variant": {\n                                        "type": "string",\n                                        "value": " \\r\\n\\r\\nUPDATE F_INVENTORY_ORDERS\\r\\nSET\\r\\nPRIORITY_FLAG = "\n                                    }\n                                },\n                                {\n                                    "type": "constant",\n                                    "variant": {\n                                        "type": "string",\n                                        "value": "#2"\n                                    }\n                                },\n                                {\n                                    "type": "constant",\n                                    "variant": {\n                                        "type": "string",\n                                        "value": ",\\r\\n"\n                                    }\n                                },\n                                {\n                                    "function": "apply_optional",\n                                    "children": [\n                                        {\n                                            "type": "constant",\n                                            "variant": {\n                                                "type": "string",\n                                                "value": "DELIVERY_DATE =#3 \\r\\n"\n                                            }\n                                        }\n                                    ],\n                                    "type": "operator"\n                                },\n                                {\n                                    "type": "constant",\n                                    "variant": {\n                                        "type": "string",\n                                        "value": "WHERE\\r\\nMONTH_KEY = "\n                                    }\n                                },\n                                {\n                                    "type": "constant",\n                                    "variant": {\n                                        "type": "string",\n                                        "value": "#0"\n                                    }\n                                },\n                                {\n                                    "type": "constant",\n                                    "variant": {\n                                        "type": "string",\n                                        "value": "\\r\\nAND ITEM_KEY = "\n                                    }\n                                },\n                                {\n                                    "type": "constant",\n                                    "variant": {\n                                        "type": "string",\n                                        "value": "#1"\n                                    }\n                                },\n                                {\n                                    "type": "constant",\n                                    "variant": {\n                                        "type": "string",\n                                        "value": "\\r\\n\\r\\n"\n                                    }\n                                }\n                            ],\n                            "type": "operator"\n                        }\n                    ],\n                    "type": "operator"\n                }\n            }\n        },\n        "attributes": [\n            {\n                "id": "B70B6F2B493F50026A21FDA043C63247",\n                "name": "Month_I",\n                "forms": [\n                    {\n                        "id": "45C11FA478E745FEA08D781CEA190FE5",\n                        "category": "ID",\n                        "type": "system",\n                        "displayFormat": "number",\n                        "expression": {\n                            "tree": {\n                                "type": "column_reference",\n                                "name": "Month_I (ID)"\n                            }\n                        }\n                    }\n                ]\n            },\n            {\n                "name": "Item_I",\n                "forms": [\n                    {\n                        "id": "45C11FA478E745FEA08D781CEA190FE5",\n                        "category": "ID",\n                        "type": "system",\n                        "displayFormat": "number",\n                        "expression": {\n                            "tree": {\n                                "type": "column_reference",\n                                "name": "Item_I (ID)"\n                            }\n                        }\n                    }\n                ]\n            }\n        ],\n        "metrics": [\n            {\n                "id": "A1A0A7834AA1A0C79393E692E18C5369",\n                "name": "Priority_Flag",\n                "dataType": {\n                    "type": "fixed_length_string",\n                    "precision": 0,\n                    "scale": 0\n                },\n                "expression": {\n                    "tree": {\n                        "type": "column_reference",\n                        "name": "Priority_Flag"\n                    }\n                }\n            },\n            {\n                "id": "D48B3EE94649A881B28C9FB967BE3B14",\n                "name": "Delivery_Date",\n                "dataType": {\n                    "type": "date",\n                    "precision": 0,\n                    "scale": 0\n                },\n                "expression": {\n                    "tree": {\n                        "type": "column_reference",\n                        "name": "Delivery_Date"\n                    }\n                }\n            }\n        ],\n        "dataSource": {\n            "objectId": "BCB3836D4C70EDF53CB706ABA556B44B",\n            "subType": "db_role",\n            "name": "Operational Datamart"\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,"You can view the new transaction report's definition in the body of the response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-11-11T08:33:05.159Z",\n    "dateModified": "2022-11-11T08:33:05.159Z",\n    "versionId": "E10BA9CA4161C046AFA701BBAFCC0B2D",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "B35AA06E4E4B87F327383F9D49289A2B",\n    "subType": "report_transaction",\n    "name": "New Transaction SQL Report"\n  },\n  "table": {\n    "physicalTable": {\n      "columns": [\n        {\n          "id": "6EDE818EEB504D568D1058FE4FE50CD9",\n          "name": "Month_I (ID)",\n          "dataType": {\n            "type": "integer",\n            "precision": 4,\n            "scale": 0\n          },\n          "required": true\n        },\n        {\n          "id": "E113DA634EB04EC8A0D53C8BAF264626",\n          "name": "Item_I (ID)",\n          "dataType": {\n            "type": "integer",\n            "precision": 4,\n            "scale": 0\n          },\n          "required": true\n        },\n        {\n          "id": "DF6F7DED128A4A629CE541217E44D91A",\n          "name": "Priority_Flag",\n          "dataType": {\n            "type": "fixed_length_string",\n            "precision": 255,\n            "scale": 0\n          },\n          "required": true\n        },\n        {\n          "id": "F32A843613FD450EBFC8DBE8CBE03663",\n          "name": "Delivery_Date",\n          "dataType": {\n            "type": "date",\n            "precision": 6,\n            "scale": 0\n          },\n          "required": false\n        }\n      ],\n      "sqlExpression": {\n        "tree": {\n          "function": "concat_no_blank",\n          "children": [\n            {\n              "function": "repeat",\n              "functionProperties": [\n                {\n                  "name": "Distinct",\n                  "value": {\n                    "type": "boolean",\n                    "value": "true"\n                  }\n                }\n              ],\n              "children": [\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": " \\r\\n\\r\\nUPDATE F_INVENTORY_ORDERS\\r\\nSET\\r\\nPRIORITY_FLAG = "\n                  }\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": "#2"\n                  }\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": ",\\r\\n"\n                  }\n                },\n                {\n                  "function": "apply_optional",\n                  "children": [\n                    {\n                      "type": "constant",\n                      "variant": {\n                        "type": "string",\n                        "value": "DELIVERY_DATE =#3 \\r\\n"\n                      }\n                    }\n                  ],\n                  "type": "operator"\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": "WHERE\\r\\nMONTH_KEY = "\n                  }\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": "#0"\n                  }\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": "\\r\\nAND ITEM_KEY = "\n                  }\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": "#1"\n                  }\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": "\\r\\n\\r\\n"\n                  }\n                }\n              ],\n              "type": "operator"\n            }\n          ],\n          "type": "operator"\n        }\n      }\n    },\n    "attributes": [\n      {\n        "id": "B70B6F2B493F50026A21FDA043C63247",\n        "name": "Month_I",\n        "forms": [\n          {\n            "id": "45C11FA478E745FEA08D781CEA190FE5",\n            "category": "ID",\n            "type": "system",\n            "displayFormat": "number",\n            "expression": {\n              "tree": {\n                "type": "column_reference",\n                "objectId": "6EDE818EEB504D568D1058FE4FE50CD9",\n                "name": "Month_I (ID)"\n              }\n            }\n          }\n        ]\n      },\n      {\n        "id": "0EB1405452394FFABC1D4399DC662216",\n        "name": "Item_I",\n        "forms": [\n          {\n            "id": "45C11FA478E745FEA08D781CEA190FE5",\n            "name": "ID",\n            "category": "ID",\n            "type": "system",\n            "displayFormat": "number",\n            "expression": {\n              "tree": {\n                "type": "column_reference",\n                "objectId": "E113DA634EB04EC8A0D53C8BAF264626",\n                "name": "Item_I (ID)"\n              }\n            }\n          }\n        ]\n      }\n    ],\n    "metrics": [\n      {\n        "id": "A1A0A7834AA1A0C79393E692E18C5369",\n        "name": "Priority_Flag",\n        "dataType": {\n          "type": "fixed_length_string",\n          "precision": 0,\n          "scale": 0\n        },\n        "expression": {\n          "tree": {\n            "type": "column_reference",\n            "objectId": "DF6F7DED128A4A629CE541217E44D91A",\n            "name": "Priority_Flag"\n          }\n        }\n      },\n      {\n        "id": "D48B3EE94649A881B28C9FB967BE3B14",\n        "name": "Delivery_Date",\n        "dataType": {\n          "type": "date",\n          "precision": 0,\n          "scale": 0\n        },\n        "expression": {\n          "tree": {\n            "type": "column_reference",\n            "objectId": "F32A843613FD450EBFC8DBE8CBE03663",\n            "name": "Delivery_Date"\n          }\n        }\n      }\n    ],\n    "dataSource": {\n      "objectId": "BCB3836D4C70EDF53CB706ABA556B44B",\n      "subType": "db_role",\n      "name": "Operational Datamart"\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Response Code: 201 (A transaction report is created successfully.)"))}E.isMDXComponent=!0}}]);