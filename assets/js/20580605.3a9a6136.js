"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[447],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7061:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var a,o=n(3117),r=n(102),i=(n(7294),n(3905)),s=["components"],c={title:"Create a fact object",sidebar_label:"Create a fact object",description:"This workflow sample demonstrates how to create a fact object through the Modeling service."},l=void 0,p={unversionedId:"common-workflows/modeling/manage-fact-objects/create-a-fact-object",id:"common-workflows/modeling/manage-fact-objects/create-a-fact-object",title:"Create a fact object",description:"This workflow sample demonstrates how to create a fact object through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-fact-objects/create-a-fact-object.md",sourceDirName:"common-workflows/modeling/manage-fact-objects",slug:"/common-workflows/modeling/manage-fact-objects/create-a-fact-object",permalink:"/rest-api-docs/common-workflows/modeling/manage-fact-objects/create-a-fact-object",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-fact-objects/create-a-fact-object.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1676308226,formattedLastUpdatedAt:"Feb 13, 2023",frontMatter:{title:"Create a fact object",sidebar_label:"Create a fact object",description:"This workflow sample demonstrates how to create a fact object through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a fact's definition within a changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-fact-objects/retrieve-a-facts-definition-within-a-changeset"},next:{title:"Update a fact object",permalink:"/rest-api-docs/common-workflows/modeling/manage-fact-objects/update-a-fact-object"}},m={},d=[{value:"Create a fact object",id:"create-a-fact-object",level:2},{value:"More samples",id:"more-samples",level:2},{value:"Multiple expressions",id:"multiple-expressions",level:3},{value:"Expressions in &quot;tree&quot; format",id:"expressions-in-tree-format",level:3}],u=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),f={toc:d};function b(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(u,{since:"2021 Update 1",mdxType:"Available"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-11d116e7-cf31-451a-848e-0d2be6fa3041?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"This workflow sample demonstrates how to create a fact object through the Modeling service."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a changeset"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#create-a-fact-object"},"Create a fact object")),(0,i.kt)("li",{parentName:"ol"},"Commit the changeset"),(0,i.kt)("li",{parentName:"ol"},"Delete the changeset")),(0,i.kt)("p",null,'You want to create a "Profit" fact object under the Public Objects folder in the MicroStrategy Tutorial project. The folder object ID is ',(0,i.kt)("inlineCode",{parentName:"p"},"98FE182C2A10427EACE0CD30B6768258"),". The project ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets see ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),".")),(0,i.kt)("h2",{id:"create-a-fact-object"},"Create a fact object"),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Facts/ms-postFact"},"POST /api/model/facts")),(0,i.kt)("p",null,'You want to create a fact named "Profit" with one expression ',(0,i.kt)("inlineCode",{parentName:"p"},'"TOT_DOLLAR_SALES - TOT_COST"'),' in "tokens" format. This expression will be used in the two tables ',(0,i.kt)("inlineCode",{parentName:"p"},'"CITY_MNTH_SLS"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"CUSTOMER_SLS"'),". More examples of creating a new fact are listed below."),(0,i.kt)("p",null,'To create a fact, in the request body, "expressions" contains a list of fact expressions. Each fact contains "expression" and "tables".'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'"expression": Must be in either "tree" or "tokens" format.'),(0,i.kt)("p",{parentName:"li"},'Tokens are a semi-structured representation of MicroStrategy expression text that includes object references. For example, let\u2019s say a fact expression is "Revenue - Cost". When the fact expression is represented as tokens, the text is broken down into pieces (tokens) with information about what these pieces represent in the metadata: ("Revenue", Revenue_ID), ("-", Minus_ID), ("Cost", Cost_ID).')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'"tables": A list of tables that the "expression" applies to.'),(0,i.kt)("p",{parentName:"li"},'"dataType" is optional. If omitted, it calculates based on the first fact expression.'),(0,i.kt)("p",{parentName:"li"},"Sample Request Header:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "o0ak9privdo27nfo798j40m8aa"\n"X-MSTR-MS-Changeset": "805C5F3FB78A436FAE37C943471C24AD"\n')),(0,i.kt)("p",{parentName:"li"},"Construct the expression."),(0,i.kt)("p",{parentName:"li"},'Make a copy of the following "tokens" format template and modify the ',(0,i.kt)("inlineCode",{parentName:"p"},'"fact_expression"')," to construct an expression."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"expression":{\n  "tokens":[\n    {\n      "value":"<fact_expression>"\n    }\n  ]\n}\n\nSample Request Body:\n\n{\n   "information":{\n      "subType":"fact",\n      "name":"Profit",\n      "destinationFolderId":"98FE182C2A10427EACE0CD30B6768258"\n   },\n   "expressions":[\n      {\n         "expression":{\n            "tokens":[\n               {\n                  "value":"TOT_DOLLAR_SALES - TOT_COST"\n               }\n            ]\n         },\n         "tables":[\n            {\n               "objectId":"9A28CFCC42DB8E9627D547975958C138",\n               "subType":"logical_table",\n               "name":"CITY_MNTH_SLS"\n            },\n            {\n               "objectId":"54D82D5B4BD115DA313C03A5742900AE",\n               "subType":"logical_table",\n               "name":"CUSTOMER_SLS"\n            }\n         ]\n      }\n   ],\n   "entryLevel":[\n   ]\n}\n')),(0,i.kt)("p",{parentName:"li"},"Sample Curl:"),(0,i.kt)("p",{parentName:"li"},"In this sample workflow, you want to return the newly created fact with its expression in all formats. Therefore, you should set ",(0,i.kt)("inlineCode",{parentName:"p"},"showExpressionAs=tree")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"showExpressionsAs=tokens"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/facts?showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" -H "X-MSTR-MS-Changeset: 805C5F3FB78A436FAE37C943471C24AD" -H "Content-Type: application/json" -d "{\\\\"information\\\\":{\\\\"subType\\\\":\\\\"fact\\\\",\\\\"name\\\\":\\\\"Profit_tree\\\\",\\\\"destinationFolderId\\\\":\\\\"A0DC38971F48DFD941780DBE549A1F28\\\\"},\\\\"expressions\\\\":[{\\\\"expression\\\\":{\\\\"tree\\\\":{\\\\"function\\\\":\\\\"minus\\\\",\\\\"children\\\\":[{\\\\"type\\\\":\\\\"column_reference\\\\",\\\\"columnName\\\\":\\\\"TOT_DOLLAR_SALES\\\\",\\\\"objectId\\\\":\\\\"8D6792A011D3E4981000E787EC6DE8A4\\\\"},{\\\\"type\\\\":\\\\"column_reference\\\\",\\\\"columnName\\\\":\\\\"TOT_COST\\\\",\\\\"objectId\\\\":\\\\"7A4ABDFD11D5AC6FC000D98A4CC5F24F\\\\"}],\\\\"type\\\\":\\\\"operator\\\\"}},\\\\"tables\\\\":[{\\\\"objectId\\\\":\\\\"9A28CFCC42DB8E9627D547975958C138\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"CITY_MNTH_SLS\\\\"},{\\\\"objectId\\\\":\\\\"54D82D5B4BD115DA313C03A5742900AE\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"CUSTOMER_SLS\\\\"}]}],\\\\"entryLevel\\\\":[]}"\n')),(0,i.kt)("p",{parentName:"li"},"Sample Response Body:"),(0,i.kt)("p",{parentName:"li"},"You can view the new fact's definition in the body of the response."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "versionId": "F897A7472295406C922304B760691DCE",\n    "primaryLocale": "en-US",\n    "objectId": "504800FA17A743E48855A603D64E9077",\n    "subType": "fact",\n    "name": "Profit",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "dataType": {\n    "type": "double",\n    "precision": 0,\n    "scale": -1\n  },\n  "expressions": [\n    {\n      "expressionId": "5640F70F676B4279A12E754F9EFE88F3",\n      "expression": {\n        "text": "TOT_DOLLAR_SALES - TOT_COST",\n        "tree": {\n          "function": "minus",\n          "children": [\n            {\n              "type": "column_reference",\n              "columnName": "TOT_DOLLAR_SALES",\n              "objectId": "8D6792A011D3E4981000E787EC6DE8A4"\n            },\n            {\n              "type": "column_reference",\n              "columnName": "TOT_COST",\n              "objectId": "7A4ABDFD11D5AC6FC000D98A4CC5F24F"\n            }\n          ],\n          "type": "operator"\n        },\n        "tokens": [\n          {\n            "level": "resolved",\n            "state": "initial",\n            "value": "TOT_DOLLAR_SALES",\n            "type": "column_reference",\n            "target": {\n              "dateCreated": "2001-01-02T20:48:35.000Z",\n              "dateModified": "2016-08-18T19:20:24.000Z",\n              "versionId": "CFE0642A11E66578144C0080EF557A15",\n              "primaryLocale": "en-US",\n              "objectId": "8D6792A011D3E4981000E787EC6DE8A4",\n              "subType": "column",\n              "name": "TOT_DOLLAR_SALES"\n            }\n          },\n          {\n            "level": "resolved",\n            "state": "initial",\n            "value": "-",\n            "type": "character",\n            "target": {\n              "dateCreated": "2001-01-02T20:47:41.000Z",\n              "dateModified": "2021-03-09T15:22:04.454Z",\n              "versionId": "3417594811EB80EB25D80080EF25AB1A",\n              "primaryLocale": "en-US",\n              "objectId": "8107C311DD9911D3B98100C04F2233EA",\n              "subType": "function",\n              "name": "-",\n              "description": "Returns the difference between two values."\n            }\n          },\n          {\n            "level": "resolved",\n            "state": "initial",\n            "value": "TOT_COST",\n            "type": "column_reference",\n            "target": {\n              "dateCreated": "2001-09-18T19:59:30.000Z",\n              "dateModified": "2016-08-18T19:20:24.000Z",\n              "versionId": "CFE0642A11E66578144C0080EF557A15",\n              "primaryLocale": "en-US",\n              "objectId": "7A4ABDFD11D5AC6FC000D98A4CC5F24F",\n              "subType": "column",\n              "name": "TOT_COST"\n            }\n          },\n          {\n            "level": "resolved",\n            "state": "initial",\n            "value": "",\n            "type": "end_of_text"\n          }\n        ]\n      },\n      "tables": [\n        {\n          "objectId": "9A28CFCC42DB8E9627D547975958C138",\n          "subType": "logical_table",\n          "name": "CITY_MNTH_SLS"\n        },\n        {\n          "objectId": "54D82D5B4BD115DA313C03A5742900AE",\n          "subType": "logical_table",\n          "name": "CUSTOMER_SLS"\n        }\n      ]\n    }\n  ],\n  "entryLevel": []\n}\n')),(0,i.kt)("p",{parentName:"li"},"Response Code: 201 (A new fact is created successfully in the changeset.)"))),(0,i.kt)("h2",{id:"more-samples"},"More samples"),(0,i.kt)("p",null,"The following are additional examples for creating a fact object."),(0,i.kt)("h3",{id:"multiple-expressions"},"Multiple expressions"),(0,i.kt)("p",null,"You can create a fact object with multiple expressions."),(0,i.kt)("p",null,'In this sample, you want to create a fact named "Profit" with two expressions: 1) ',(0,i.kt)("inlineCode",{parentName:"p"},'"TOT_DOLLAR_SALES - TOT_COST"')," used in the tables ",(0,i.kt)("inlineCode",{parentName:"p"},'"CITY_MNTH_SLS"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"CUSTOMER_SLS"'),", and 2) ",(0,i.kt)("inlineCode",{parentName:"p"},'"ORDER_AMT - ORDER_COST"')," used in the table ",(0,i.kt)("inlineCode",{parentName:"p"},'"ORDER_FACT"'),"."),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "fact",\n    "name": "Profit",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "expressions": [\n    {\n      "expression": {\n        "tokens": [\n          {\n            "value": "ORDER_AMT - ORDER_COST"\n          }\n        ]\n      },\n      "tables": [\n        {\n          "objectId": "8D6793D411D3E4981000E787EC6DE8A4",\n          "subType": "logical_table",\n          "name": "ORDER_FACT"\n        }\n      ]\n    },\n    {\n      "expression": {\n        "tokens": [\n          {\n            "value": "TOT_DOLLAR_SALES - TOT_COST"\n          }\n        ]\n      },\n      "tables": [\n        {\n          "objectId": "9A28CFCC42DB8E9627D547975958C138",\n          "subType": "logical_table",\n          "name": "CITY_MNTH_SLS"\n        },\n        {\n          "objectId": "54D82D5B4BD115DA313C03A5742900AE",\n          "subType": "logical_table",\n          "name": "CUSTOMER_SLS"\n        }\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("h3",{id:"expressions-in-tree-format"},'Expressions in "tree" format'),(0,i.kt)("p",null,'In this sample, you want to create a fact named "Profit" with one expression ',(0,i.kt)("inlineCode",{parentName:"p"},'"TOT_DOLLAR_SLS - TOT-COST"'),' in "tree" format. This expression will be used in the two tables ',(0,i.kt)("inlineCode",{parentName:"p"},'"CITY_MNTH_SLS"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"CUSTOMER_SLS"'),"."),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "fact",\n    "name": "Profit",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "expressions": [\n    {\n      "expression": {\n        "tree": {\n          "function": "minus",\n          "children": [\n            {\n              "type": "column_reference",\n              "columnName": "TOT_DOLLAR_SALES",\n              "objectId": "8D6792A011D3E4981000E787EC6DE8A4"\n            },\n            {\n              "type": "column_reference",\n              "columnName": "TOT_COST",\n              "objectId": "7A4ABDFD11D5AC6FC000D98A4CC5F24F"\n            }\n          ],\n          "type": "operator"\n        }\n      },\n      "tables": [\n        {\n          "objectId": "9A28CFCC42DB8E9627D547975958C138",\n          "subType": "logical_table",\n          "name": "CITY_MNTH_SLS"\n        },\n        {\n          "objectId": "54D82D5B4BD115DA313C03A5742900AE",\n          "subType": "logical_table",\n          "name": "CUSTOMER_SLS"\n        }\n      ]\n    }\n  ]\n}\n')))}b.isMDXComponent=!0}}]);