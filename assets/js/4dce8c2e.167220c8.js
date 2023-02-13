"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[9906],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=o,b=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return t?a.createElement(b,i(i({ref:n},c),{},{components:t})):a.createElement(b,i({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2157:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a,o=t(3117),r=t(102),i=(t(7294),t(3905)),l=["components"],s={title:"Update a table's definition",sidebar_label:"Update a table's definition",description:"This workflow sample demonstrates how to update an existing table through the Modeling service."},p=void 0,c={unversionedId:"common-workflows/modeling/manage-table-objects/update-a-tables-definition",id:"common-workflows/modeling/manage-table-objects/update-a-tables-definition",title:"Update a table's definition",description:"This workflow sample demonstrates how to update an existing table through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-table-objects/update-a-tables-definition.md",sourceDirName:"common-workflows/modeling/manage-table-objects",slug:"/common-workflows/modeling/manage-table-objects/update-a-tables-definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/update-a-tables-definition",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-table-objects/update-a-tables-definition.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1676308226,formattedLastUpdatedAt:"Feb 13, 2023",frontMatter:{title:"Update a table's definition",sidebar_label:"Update a table's definition",description:"This workflow sample demonstrates how to update an existing table through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a new table object",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/create-a-new-table-object"},next:{title:"Retrieve a prompt of an SAP HANA table",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/retrieve-a-prompt-of-an-sap-hana-table"}},m={},d=[],u=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),b={toc:d};function f(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(u,{since:"2021 Update 1",mdxType:"Available"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-95d4124f-c4e5-48ce-986e-a05c6d47069f?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"This workflow sample demonstrates how to update an existing table through the Modeling service."),(0,i.kt)("p",null,"In this workflow sample, you update an existing ",(0,i.kt)("inlineCode",{parentName:"p"},'"CITY_CTR_SLS"')," table object in the MicroStrategy Tutorial project. The project ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"B19DEDCC11D4E0EFC000EB9495D0F44F"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets see ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),".")),(0,i.kt)("p",null,"Update the ",(0,i.kt)("inlineCode",{parentName:"p"},'"CITY_CTR_SLS"')," table, as well as its name and prefix using [PATCH /api/model/tables/",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-patchTableDetails"},"tableId}"),". The object ID of the table is ",(0,i.kt)("inlineCode",{parentName:"p"},"862780DC499A14D74FEC7EB2EF317DA2"),"."),(0,i.kt)("p",null,"Here are the fields that should be updated for normal versus freeform SQL tables:"),(0,i.kt)("p",null,"For a normal table, you can update the logical table name in the ",(0,i.kt)("inlineCode",{parentName:"p"},"information")," field, ",(0,i.kt)("inlineCode",{parentName:"p"},"isTrueKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"logicalSize"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"isLogicalSizeLocked"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"primaryDatasource"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"secondaryDatasource")," field, physical table object name, physical table name, and table prefix in ",(0,i.kt)("inlineCode",{parentName:"p"},"physicalTable")," field. When the ",(0,i.kt)("inlineCode",{parentName:"p"},"primaryDatasource")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"secondaryDatasource")," of this logical table is updated, the related ",(0,i.kt)("inlineCode",{parentName:"p"},"primaryDatasource")," or secondaryDatasource of all other logical tables that share the same physical table with this logical table are also updated."),(0,i.kt)("p",null,"For a freeform sql table, you can update the logical table name in the ",(0,i.kt)("inlineCode",{parentName:"p"},"information")," field, ",(0,i.kt)("inlineCode",{parentName:"p"},"isTrueKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"logicalSize"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"isLogicalSizeLocked"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"primaryDatasource"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"encloseSqlInParentheses")," field, physical table object name, ",(0,i.kt)("inlineCode",{parentName:"p"},"sqlStatement"),", and columns in ",(0,i.kt)("inlineCode",{parentName:"p"},"physicalTable")," field. The ",(0,i.kt)("inlineCode",{parentName:"p"},"primaryDatasource")," change does not affect other logical tables that share the same physical table with this logical table."),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "name": "newTableName"\n  },\n  "physicalTable": {\n    "tablePrefix": "newTablePrefix."\n  }\n}\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/tables/862780DC499A14D74FEC7EB2EF317DA2" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" -d "{\\"information\\":{\\"name\\":\\"newTableName\\"},\\"physicalTable\\":{\\"tablePrefix\\":\\"newTablePrefix\\"}}"\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,"You can view the new table's definition in the body of the response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2002-02-14T23:06:02.000Z",\n    "dateModified": "2012-06-06T12:12:35.000Z",\n    "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n    "primaryLocale": "en-US",\n    "objectId": "862780DC499A14D74FEC7EB2EF317DA2",\n    "subType": "logical_table",\n    "name": "newTableName"\n  },\n  "physicalTable": {\n    "information": {\n      "dateCreated": "2002-02-14T23:04:18.000Z",\n      "dateModified": "2012-06-06T12:12:35.000Z",\n      "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n      "primaryLocale": "en-US",\n      "objectId": "E278D17342991E49710D6F90E2A7BF2C",\n      "subType": "physical_table",\n      "name": "CITY_CTR_SLS"\n    },\n    "tableName": "CITY_CTR_SLS",\n    "columns": [\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:30.000Z",\n          "dateModified": "2012-06-06T12:12:35.000Z",\n          "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n          "primaryLocale": "en-US",\n          "objectId": "8D6791B211D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "CUST_CITY_ID"\n        },\n        "dataType": {\n          "type": "integer",\n          "precision": 2,\n          "scale": -2147483648\n        },\n        "columnName": "CUST_CITY_ID"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:32.000Z",\n          "dateModified": "2012-06-06T12:12:35.000Z",\n          "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n          "primaryLocale": "en-US",\n          "objectId": "8D67917E11D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "CALL_CTR_ID"\n        },\n        "dataType": {\n          "type": "integer",\n          "precision": 2,\n          "scale": -2147483648\n        },\n        "columnName": "CALL_CTR_ID"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:35.000Z",\n          "dateModified": "2012-06-06T12:13:04.000Z",\n          "versionId": "256D148442065F43BDC42FBB79438A3F",\n          "primaryLocale": "en-US",\n          "objectId": "8D6792A011D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "TOT_DOLLAR_SALES"\n        },\n        "dataType": {\n          "type": "double",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "TOT_DOLLAR_SALES"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:34.000Z",\n          "dateModified": "2012-06-06T12:13:04.000Z",\n          "versionId": "256D148442065F43BDC42FBB79438A3F",\n          "primaryLocale": "en-US",\n          "objectId": "8D67929F11D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "TOT_UNIT_SALES"\n        },\n        "dataType": {\n          "type": "double",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "TOT_UNIT_SALES"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-09-18T19:59:30.000Z",\n          "dateModified": "2012-06-06T12:13:04.000Z",\n          "versionId": "256D148442065F43BDC42FBB79438A3F",\n          "primaryLocale": "en-US",\n          "objectId": "7A4ABDFD11D5AC6FC000D98A4CC5F24F",\n          "subType": "column",\n          "name": "TOT_COST"\n        },\n        "dataType": {\n          "type": "double",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "TOT_COST"\n      },\n      {\n        "information": {\n          "dateCreated": "2007-01-08T12:22:02.000Z",\n          "dateModified": "2012-06-06T12:12:35.000Z",\n          "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n          "primaryLocale": "en-US",\n          "objectId": "E50524EE420B2F1F441EFE9752DFBD7A",\n          "subType": "column",\n          "name": "New GROSS_DOLLAR_SALES (2)"\n        },\n        "dataType": {\n          "type": "double",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "GROSS_DOLLAR_SALES"\n      }\n    ],\n    "namespace": "",\n    "tablePrefix": "newTablePrefix.",\n    "type": "normal"\n  },\n  "logicalSize": 15,\n  "isLogicalSizeLocked": false,\n  "isTrueKey": true,\n  "isPartOfPartition": false,\n  "tableKey": [\n    {\n      "objectId": "8D679D3511D3E4981000E787EC6DE8A4",\n      "subType": "attribute",\n      "name": "Call Center"\n    },\n    {\n      "objectId": "8D679D3A11D3E4981000E787EC6DE8A4",\n      "subType": "attribute",\n      "name": "Customer City"\n    }\n  ],\n  "attributes": [\n    {\n      "information": {\n        "objectId": "8D679D3511D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Call Center"\n      },\n      "forms": [\n        {\n          "formCategory": {\n            "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n            "subType": "attribute_form_system",\n            "name": "ID"\n          },\n          "name": "ID",\n          "dataFormat": "number",\n          "expression": {\n            "text": "CALL_CTR_ID"\n          }\n        },\n        {\n          "formCategory": {\n            "objectId": "035E890A4157E9828414E8A0E13E2998",\n            "subType": "attribute_form_custom",\n            "name": "Call Center None"\n          },\n          "name": "Hyperlink",\n          "dataFormat": "number",\n          "expression": {\n            "text": "ApplySimple(\\"\'<a href=Main.aspx?evt=4001&src=Main.aspx.4001&reportID=B4DEFC04457E9CBE0CA79FB692BE0C5E&elementsPromptAnswers=8D679D3511D3E4981000E787EC6DE8A4;8D679D3511D3E4981000E787EC6DE8A4%3A\'&#0&\' target=_blank>Details</a>\'\\",CALL_CTR_ID)"\n          }\n        }\n      ]\n    },\n    {\n      "information": {\n        "objectId": "8D679D3A11D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Customer City"\n      },\n      "forms": [\n        {\n          "formCategory": {\n            "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n            "subType": "attribute_form_system",\n            "name": "ID"\n          },\n          "name": "ID",\n          "dataFormat": "number",\n          "expression": {\n            "text": "CUST_CITY_ID"\n          }\n        }\n      ]\n    }\n  ],\n  "facts": [\n    {\n      "information": {\n        "objectId": "7A4ABE9111D5AC6FC000D98A4CC5F24F",\n        "subType": "fact",\n        "name": "Cost"\n      },\n      "expression": {\n        "text": "TOT_COST"\n      }\n    },\n    {\n      "information": {\n        "objectId": "F30CB66411D5AC5FC000D98A4CC5F24F",\n        "subType": "fact",\n        "name": "Profit"\n      },\n      "expression": {\n        "text": "TOT_DOLLAR_SALES - TOT_COST"\n      }\n    },\n    {\n      "information": {\n        "objectId": "8D67958411D3E4981000E787EC6DE8A4",\n        "subType": "fact",\n        "name": "Revenue"\n      },\n      "expression": {\n        "text": "TOT_DOLLAR_SALES"\n      }\n    },\n    {\n      "information": {\n        "objectId": "8D67958511D3E4981000E787EC6DE8A4",\n        "subType": "fact",\n        "name": "Units Sold"\n      },\n      "expression": {\n        "text": "TOT_UNIT_SALES"\n      }\n    },\n    {\n      "information": {\n        "objectId": "6EA98A164E62D247C14B3EBFA4866411",\n        "subType": "fact",\n        "name": "Gross Revenue"\n      },\n      "expression": {\n        "text": "GROSS_DOLLAR_SALES"\n      }\n    }\n  ],\n  "primaryDataSource": {\n    "objectId": "37BE16AB11D3E48C1000E787EC6DE8A4",\n    "subType": "db_role",\n    "name": "Tutorial Data"\n  },\n  "secondaryDataSources": [\n    {\n      "objectId": "8FB036244C375FC9CE3FCABF45ECC5A8",\n      "subType": "db_role",\n      "name": "MTDIWHSQL1"\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Response Code: 201 (A new table is created successfully in the changeset.)"))}f.isMDXComponent=!0}}]);