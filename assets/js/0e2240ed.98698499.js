"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6957],{3905:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return u}});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var s=a.createContext({}),l=function(n){var e=a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},c=function(n){var e=l(n.components);return a.createElement(s.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,s=n.parentName,c=p(n,["components","mdxType","originalType","parentName"]),m=l(t),u=r,y=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return t?a.createElement(y,i(i({ref:e},c),{},{components:t})):a.createElement(y,i({ref:e},c))}));function u(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=n,p.mdxType="string"==typeof n?n:r,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9636:function(n,e,t){t.r(e),t.d(e,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var a,r=t(3117),o=t(102),i=(t(7294),t(3905)),p=["components"],s={title:"Update a transaction report's definition",description:"This workflow sample demonstrates how to update a transaction report's definition."},l=void 0,c={unversionedId:"common-workflows/analytics/manage-reports/manage-transaction-report-objects/update-transaction-report-definition",id:"common-workflows/analytics/manage-reports/manage-transaction-report-objects/update-transaction-report-definition",title:"Update a transaction report's definition",description:"This workflow sample demonstrates how to update a transaction report's definition.",source:"@site/docs/common-workflows/analytics/manage-reports/manage-transaction-report-objects/update-transaction-report-definition.md",sourceDirName:"common-workflows/analytics/manage-reports/manage-transaction-report-objects",slug:"/common-workflows/analytics/manage-reports/manage-transaction-report-objects/update-transaction-report-definition",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-transaction-report-objects/update-transaction-report-definition",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/manage-reports/manage-transaction-report-objects/update-transaction-report-definition.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1676308226,formattedLastUpdatedAt:"Feb 13, 2023",frontMatter:{title:"Update a transaction report's definition",description:"This workflow sample demonstrates how to update a transaction report's definition."},sidebar:"tutorialSidebar",previous:{title:"Create a transaction report",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-transaction-report-objects/create-a-transaction-report"},next:{title:"Manage incremental refresh reports",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/"}},d={},m=[],u=(a="Available",function(n){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",n)}),y={toc:m};function f(n){var e=n.components,t=(0,o.Z)(n,p);return(0,i.kt)("wrapper",(0,r.Z)({},y,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)(u,{since:"2021 Update 8",mdxType:"Available"}),(0,i.kt)("p",null,"This workflow sample demonstrates how to update an existing transaction report's definition. You are allowed to modify the following parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"information")," field;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"name"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"dataType")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"required")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"columns")," field. If you don't provide the ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),", a new column will be created, and don't forget to delete the reference ",(0,i.kt)("inlineCode",{parentName:"li"},"objectId")," field of the attribute form or metric that is mapped to this column;"),(0,i.kt)("li",{parentName:"ul"},"SQL tree in the ",(0,i.kt)("inlineCode",{parentName:"li"},"sqlExpression")," field;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," (if ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," is provided, name changing will not take effect), ",(0,i.kt)("inlineCode",{parentName:"li"},"forms")," and column reference of attributes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," (if ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," is provided, name changing will not take effect), and column reference of metrics.")),(0,i.kt)("p",null,"In the previous workflow ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-transaction-report-objects/create-a-transaction-report"},"Create a transaction report"),", we have successfully created a new transaction report, now we can use this API to do some modifications. You don't want to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"MONTH_KEY")," column anymore, so you delete this column in ",(0,i.kt)("inlineCode",{parentName:"p"},"columns")," field, ",(0,i.kt)("inlineCode",{parentName:"p"},"sqlExpression")," field, and delete the mapped attribute form ",(0,i.kt)("inlineCode",{parentName:"p"},"Month_I@ID")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"attributes")," field. You also want to use a new managed attribute's ID form to map to ",(0,i.kt)("inlineCode",{parentName:"p"},"Item_I (ID)")," column, so you delete the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," field of the attribute ",(0,i.kt)("inlineCode",{parentName:"p"},"Item_I"),". Check the request body in the example for more details. Before using this API, you need to fetch authorization token to send correct request."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence Server and creates a unique authorization token for the client."),(0,i.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Transaction%20Reports/ms-putTransactionReport"},"PUT /api/model/transactionReports/{transactionReportId}")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"accept": "application/json"\n"X-MSTR-AuthToken": "3alafjm0of25n86ku28vnubft1"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-11-16T02:31:21.691Z",\n    "dateModified": "2022-11-16T02:31:21.691Z",\n    "versionId": "089090544E85201798426BA82FAEA928",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "D2D43808411EE9CD8BC615AB8A0D61D1",\n    "subType": "report_transaction",\n    "name": "New Transaction SQL Report"\n  },\n  "table": {\n    "physicalTable": {\n      "columns": [\n        {\n          "id": "D550FCD9B3104023935842866B48D81E",\n          "name": "Item_I (ID)",\n          "dataType": {\n            "type": "integer",\n            "precision": 4,\n            "scale": 0\n          },\n          "required": true\n        },\n        {\n          "id": "2CB365E8E1434E09BD8266B2FE9AFB82",\n          "name": "Priority_Flag",\n          "dataType": {\n            "type": "fixed_length_string",\n            "precision": 255,\n            "scale": 0\n          },\n          "required": true\n        },\n        {\n          "id": "4E66C04A89064C18B348240660036A93",\n          "name": "Delivery_Date",\n          "dataType": {\n            "type": "date",\n            "precision": 6,\n            "scale": 0\n          },\n          "required": false\n        }\n      ],\n      "sqlExpression": {\n        "tree": {\n          "function": "concat_no_blank",\n          "children": [\n            {\n              "function": "repeat",\n              "functionProperties": [\n                {\n                  "name": "Distinct",\n                  "value": {\n                    "type": "boolean",\n                    "value": "true"\n                  }\n                }\n              ],\n              "children": [\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": " \\r\\n\\r\\nUPDATE F_INVENTORY_ORDERS\\r\\nSET\\r\\nPRIORITY_FLAG = "\n                  }\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": "#1"\n                  }\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": ",\\r\\n"\n                  }\n                },\n                {\n                  "function": "apply_optional",\n                  "children": [\n                    {\n                      "type": "constant",\n                      "variant": {\n                        "type": "string",\n                        "value": "DELIVERY_DATE =#2 \\r\\n"\n                      }\n                    }\n                  ],\n                  "type": "operator"\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": "WHERE\\r\\n"\n                  }\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": "ITEM_KEY = "\n                  }\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": "#0"\n                  }\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": "\\r\\n\\r\\n"\n                  }\n                }\n              ],\n              "type": "operator"\n            }\n          ],\n          "type": "operator"\n        }\n      }\n    },\n    "attributes": [\n      {\n        "name": "Item_I",\n        "forms": [\n          {\n            "id": "45C11FA478E745FEA08D781CEA190FE5",\n            "name": "ID",\n            "category": "ID",\n            "type": "system",\n            "displayFormat": "number",\n            "expression": {\n              "tree": {\n                "type": "column_reference",\n                "objectId": "D550FCD9B3104023935842866B48D81E",\n                "name": "Item_I (ID)"\n              }\n            }\n          }\n        ]\n      }\n    ],\n    "metrics": [\n      {\n        "id": "A1A0A7834AA1A0C79393E692E18C5369",\n        "name": "Priority_Flag",\n        "dataType": {\n          "type": "fixed_length_string",\n          "precision": 0,\n          "scale": 0\n        },\n        "expression": {\n          "tree": {\n            "type": "column_reference",\n            "objectId": "2CB365E8E1434E09BD8266B2FE9AFB82",\n            "name": "Priority_Flag"\n          }\n        }\n      },\n      {\n        "id": "D48B3EE94649A881B28C9FB967BE3B14",\n        "name": "Delivery_Date",\n        "dataType": {\n          "type": "date",\n          "precision": 0,\n          "scale": 0\n        },\n        "expression": {\n          "tree": {\n            "type": "column_reference",\n            "objectId": "4E66C04A89064C18B348240660036A93",\n            "name": "Delivery_Date"\n          }\n        }\n      }\n    ],\n    "dataSource": {\n      "objectId": "BCB3836D4C70EDF53CB706ABA556B44B",\n      "subType": "db_role",\n      "name": "Operational Datamart"\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT \'10.23.33.32:8080/MicroStrategyLibrary/api/model/transactionReports/D2D43808411EE9CD8BC615AB8A0D61D1\' -H \'X-MSTR-AuthToken: 3alafjm0of25n86ku28vnubft1\' -H \'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754\' -H \'Content-Type: application/json\' -H \'Cookie: JSESSIONID=F13B1C3F6CAC20D4A37680C58AD0BB5D; iSession=3alafjm0of25n86ku28vnubft1\' --data-raw \'{\n    "information": {\n        "dateCreated": "2022-11-16T02:31:21.691Z",\n        "dateModified": "2022-11-16T02:31:21.691Z",\n        "versionId": "089090544E85201798426BA82FAEA928",\n        "acg": 255,\n        "primaryLocale": "en-US",\n        "objectId": "D2D43808411EE9CD8BC615AB8A0D61D1",\n        "subType": "report_transaction",\n        "name": "New Transaction SQL Report"\n    },\n    "table": {\n        "physicalTable": {\n            "columns": [\n                {\n                    "id": "D550FCD9B3104023935842866B48D81E",\n                    "name": "Item_I (ID)",\n                    "dataType": {\n                        "type": "integer",\n                        "precision": 4,\n                        "scale": 0\n                    },\n                    "required": true\n                },\n                {\n                    "id": "2CB365E8E1434E09BD8266B2FE9AFB82",\n                    "name": "Priority_Flag",\n                    "dataType": {\n                        "type": "fixed_length_string",\n                        "precision": 255,\n                        "scale": 0\n                    },\n                    "required": true\n                },\n                {\n                    "id": "4E66C04A89064C18B348240660036A93",\n                    "name": "Delivery_Date",\n                    "dataType": {\n                        "type": "date",\n                        "precision": 6,\n                        "scale": 0\n                    },\n                    "required": false\n                }\n            ],\n            "sqlExpression": {\n                "tree": {\n                    "function": "concat_no_blank",\n                    "children": [\n                        {\n                            "function": "repeat",\n                            "functionProperties": [\n                                {\n                                    "name": "Distinct",\n                                    "value": {\n                                        "type": "boolean",\n                                        "value": "true"\n                                    }\n                                }\n                            ],\n                            "children": [\n                                {\n                                    "type": "constant",\n                                    "variant": {\n                                        "type": "string",\n                                        "value": " \\r\\n\\r\\nUPDATE F_INVENTORY_ORDERS\\r\\nSET\\r\\nPRIORITY_FLAG = "\n                                    }\n                                },\n                                {\n                                    "type": "constant",\n                                    "variant": {\n                                        "type": "string",\n                                        "value": "#1"\n                                    }\n                                },\n                                {\n                                    "type": "constant",\n                                    "variant": {\n                                        "type": "string",\n                                        "value": ",\\r\\n"\n                                    }\n                                },\n                                {\n                                    "function": "apply_optional",\n                                    "children": [\n                                        {\n                                            "type": "constant",\n                                            "variant": {\n                                                "type": "string",\n                                                "value": "DELIVERY_DATE =#2 \\r\\n"\n                                            }\n                                        }\n                                    ],\n                                    "type": "operator"\n                                },\n                                {\n                                    "type": "constant",\n                                    "variant": {\n                                        "type": "string",\n                                        "value": "WHERE\\r\\n"\n                                    }\n                                },\n                                {\n                                    "type": "constant",\n                                    "variant": {\n                                        "type": "string",\n                                        "value": "ITEM_KEY = "\n                                    }\n                                },\n                                {\n                                    "type": "constant",\n                                    "variant": {\n                                        "type": "string",\n                                        "value": "#0"\n                                    }\n                                },\n                                {\n                                    "type": "constant",\n                                    "variant": {\n                                        "type": "string",\n                                        "value": "\\r\\n\\r\\n"\n                                    }\n                                }\n                            ],\n                            "type": "operator"\n                        }\n                    ],\n                    "type": "operator"\n                }\n            }\n        },\n        "attributes": [\n            {\n                "name": "Item_I",\n                "forms": [\n                    {\n                        "id": "45C11FA478E745FEA08D781CEA190FE5",\n                        "name": "ID",\n                        "category": "ID",\n                        "type": "system",\n                        "displayFormat": "number",\n                        "expression": {\n                            "tree": {\n                                "type": "column_reference",\n                                "objectId": "D550FCD9B3104023935842866B48D81E",\n                                "name": "Item_I (ID)"\n                            }\n                        }\n                    }\n                ]\n            }\n        ],\n        "metrics": [\n            {\n                "id": "A1A0A7834AA1A0C79393E692E18C5369",\n                "name": "Priority_Flag",\n                "dataType": {\n                    "type": "fixed_length_string",\n                    "precision": 0,\n                    "scale": 0\n                },\n                "expression": {\n                    "tree": {\n                        "type": "column_reference",\n                        "objectId": "2CB365E8E1434E09BD8266B2FE9AFB82",\n                        "name": "Priority_Flag"\n                    }\n                }\n            },\n            {\n                "id": "D48B3EE94649A881B28C9FB967BE3B14",\n                "name": "Delivery_Date",\n                "dataType": {\n                    "type": "date",\n                    "precision": 0,\n                    "scale": 0\n                },\n                "expression": {\n                    "tree": {\n                        "type": "column_reference",\n                        "objectId": "4E66C04A89064C18B348240660036A93",\n                        "name": "Delivery_Date"\n                    }\n                }\n            }\n        ],\n        "dataSource": {\n            "objectId": "BCB3836D4C70EDF53CB706ABA556B44B",\n            "subType": "db_role",\n            "name": "Operational Datamart"\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,"You can view the transaction report's definition in the body of the response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-11-16T02:31:21.691Z",\n    "dateModified": "2022-11-16T09:27:12.187Z",\n    "versionId": "2CFFB4954DE48837DEEEDA8D585345CC",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "D2D43808411EE9CD8BC615AB8A0D61D1",\n    "subType": "report_transaction",\n    "name": "New Transaction SQL Report",\n    "description": "heihei",\n    "destinationFolderId": "D3C7D461F69C4610AA6BAA5EF51F4125"\n  },\n  "table": {\n    "physicalTable": {\n      "columns": [\n        {\n          "id": "D550FCD9B3104023935842866B48D81E",\n          "name": "Item_I (ID)",\n          "dataType": {\n            "type": "integer",\n            "precision": 4,\n            "scale": 0\n          },\n          "required": true\n        },\n        {\n          "id": "2CB365E8E1434E09BD8266B2FE9AFB82",\n          "name": "Priority_Flag",\n          "dataType": {\n            "type": "fixed_length_string",\n            "precision": 255,\n            "scale": 0\n          },\n          "required": true\n        },\n        {\n          "id": "4E66C04A89064C18B348240660036A93",\n          "name": "Delivery_Date",\n          "dataType": {\n            "type": "date",\n            "precision": 6,\n            "scale": 0\n          },\n          "required": false\n        }\n      ],\n      "sqlExpression": {\n        "tree": {\n          "function": "concat_no_blank",\n          "children": [\n            {\n              "function": "repeat",\n              "functionProperties": [\n                {\n                  "name": "Distinct",\n                  "value": {\n                    "type": "boolean",\n                    "value": "true"\n                  }\n                }\n              ],\n              "children": [\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": " \\r\\n\\r\\nUPDATE F_INVENTORY_ORDERS\\r\\nSET\\r\\nPRIORITY_FLAG = "\n                  }\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": "#1"\n                  }\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": ",\\r\\n"\n                  }\n                },\n                {\n                  "function": "apply_optional",\n                  "children": [\n                    {\n                      "type": "constant",\n                      "variant": {\n                        "type": "string",\n                        "value": "DELIVERY_DATE =#2 \\r\\n"\n                      }\n                    }\n                  ],\n                  "type": "operator"\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": "WHERE\\r\\n"\n                  }\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": "ITEM_KEY = "\n                  }\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": "#0"\n                  }\n                },\n                {\n                  "type": "constant",\n                  "variant": {\n                    "type": "string",\n                    "value": "\\r\\n\\r\\n"\n                  }\n                }\n              ],\n              "type": "operator"\n            }\n          ],\n          "type": "operator"\n        }\n      }\n    },\n    "attributes": [\n      {\n        "id": "8C79A47F197C43C79E313A40A35950D4",\n        "name": "Item_I",\n        "forms": [\n          {\n            "id": "45C11FA478E745FEA08D781CEA190FE5",\n            "name": "ID",\n            "category": "ID",\n            "type": "system",\n            "displayFormat": "number",\n            "expression": {\n              "tree": {\n                "type": "column_reference",\n                "objectId": "D550FCD9B3104023935842866B48D81E",\n                "name": "Item_I (ID)"\n              }\n            }\n          }\n        ]\n      }\n    ],\n    "metrics": [\n      {\n        "id": "A1A0A7834AA1A0C79393E692E18C5369",\n        "name": "Priority_Flag",\n        "dataType": {\n          "type": "fixed_length_string",\n          "precision": 0,\n          "scale": 0\n        },\n        "expression": {\n          "tree": {\n            "type": "column_reference",\n            "objectId": "2CB365E8E1434E09BD8266B2FE9AFB82",\n            "name": "Priority_Flag"\n          }\n        }\n      },\n      {\n        "id": "D48B3EE94649A881B28C9FB967BE3B14",\n        "name": "Delivery_Date",\n        "dataType": {\n          "type": "date",\n          "precision": 0,\n          "scale": 0\n        },\n        "expression": {\n          "tree": {\n            "type": "column_reference",\n            "objectId": "4E66C04A89064C18B348240660036A93",\n            "name": "Delivery_Date"\n          }\n        }\n      }\n    ],\n    "dataSource": {\n      "objectId": "BCB3836D4C70EDF53CB706ABA556B44B",\n      "subType": "db_role",\n      "name": "Operational Datamart"\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Response Code: 200 (The transaction report's definition is updated successfully.)"))}f.isMDXComponent=!0}}]);