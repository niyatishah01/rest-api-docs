"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[4436],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return b}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(t),b=o,d=c["".concat(l,".").concat(b)]||c[b]||u[b]||r;return t?a.createElement(d,i(i({ref:n},m),{},{components:t})):a.createElement(d,i({ref:n},m))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},16443:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return E},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return c}});var a,o=t(83117),r=t(80102),i=(t(67294),t(3905)),s=["components"],l={title:"Create an attribute object",sidebar_label:"Create an attribute object",description:"This workflow sample demonstrates how to create an attribute object through the Modeling service."},p=void 0,m={unversionedId:"common-workflows/modeling/manage-attribute-objects/create-an-attribute-object",id:"common-workflows/modeling/manage-attribute-objects/create-an-attribute-object",title:"Create an attribute object",description:"This workflow sample demonstrates how to create an attribute object through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-attribute-objects/create-an-attribute-object.md",sourceDirName:"common-workflows/modeling/manage-attribute-objects",slug:"/common-workflows/modeling/manage-attribute-objects/create-an-attribute-object",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/create-an-attribute-object",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-attribute-objects/create-an-attribute-object.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1695919031,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{title:"Create an attribute object",sidebar_label:"Create an attribute object",description:"This workflow sample demonstrates how to create an attribute object through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Retrieve an attribute's definition within a changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/retrieve-an-attributes-definition-within-a-changeset"},next:{title:"Update an attribute's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/update-an-attributes-definition"}},u={},c=[{value:"Create an attribute object",id:"create-an-attribute-object",level:2},{value:"More samples",id:"more-samples",level:2},{value:"Attribute form mapped to multiple expressions",id:"attribute-form-mapped-to-multiple-expressions",level:3},{value:"Attribute with a form group",id:"attribute-with-a-form-group",level:3},{value:"Compound attribute",id:"compound-attribute",level:3},{value:"Expressions in &quot;tree&quot; format",id:"expressions-in-tree-format",level:3},{value:"Use warehouse partition mapping tables or metadata partition base tables in expressions",id:"use-warehouse-partition-mapping-tables-or-metadata-partition-base-tables-in-expressions",level:3}],b=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),d={toc:c};function E(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(b,{since:"2021 Update 1",mdxType:"Available"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-fc30f1d1-7f8e-4bbb-8f27-7b66c67e6db6?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"This workflow sample demonstrates how to create an attribute object through the Modeling service."),(0,i.kt)("p",null,'You want to create a "Subcategory" attribute object under the Public Objects folder in the MicroStrategy Tutorial project. The folder object ID of the attribute is ',(0,i.kt)("inlineCode",{parentName:"p"},"98FE182C2A10427EACE0CD30B6768258")," in the MicroStrategy Tutorial project. The project ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),".")),(0,i.kt)("h2",{id:"create-an-attribute-object"},"Create an attribute object"),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Attributes/ms-createAttribute"},"POST /api/model/attributes"),"."),(0,i.kt)("p",null,'You want to create a "Subcategory" attribute object with ID form and DESC form.'),(0,i.kt)("p",null,'To create an attribute, in the request body, "forms" contains the detailed definition of a list of attribute forms. Each attribute contains one or more attribute forms. Each attribute form contains:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'"expressions": A list of attribute form expressions. An attribute form contains one or more attribute form expressions. Each attribute form expression contains "expression" and "tables".')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'"expression": Must be in either "tree" or "tokens" format.'),(0,i.kt)("p",{parentName:"li"},'Tokens are a semi-structured representation of MicroStrategy expression text that includes object references. For example, let\u2019s say a fact expression is "Revenue - Cost". When the fact expression is represented as tokens, the text is broken down into pieces (tokens) with information about what these pieces represent in the metadata: ("Revenue", Revenue_ID), ("-", Minus_ID), ("Cost", Cost_ID).')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'"tables": A list of tables that the "expression" applies to. Warehouse partition base tables and metadata partition mapping tables are not allowed here.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'"dataType" and "alias" are optional. If omitted, they can be calculated based on the first attribute form expression.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'"childForms" is specific to a form group, which contains the reference for child forms.'),(0,i.kt)("p",{parentName:"li"},'Provide a lookup table on either the attribute level or attribute form level, as it is required for the object to be committed to the metadata. A lookup table can be defined on the attribute level using "attributeLookupTable", or the attribute form level using "lookupTable". If "LookupTable" is defined at the attribute form level, it is used, or it falls back to "attributeLookupTable". Warehouse partition base tables and metadata partition mapping tables are not allowed to use in the lookup table.'),(0,i.kt)("p",{parentName:"li"},'Provide "keyForm" and "displays", as they are required for the attribute to be committed to the metadata.'),(0,i.kt)("p",{parentName:"li"},'Provide "destinationFolderId" in "information", as it is required for the attribute to be committed to the metadata.'))),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "o0ak9privdo27nfo798j40m8aa"\n"X-MSTR-MS-Changeset": "805C5F3FB78A436FAE37C943471C24AD"\n')),(0,i.kt)("p",null,"Construct the expression."),(0,i.kt)("p",null,'Make a copy of the following "tokens" format template and modify the ',(0,i.kt)("inlineCode",{parentName:"p"},'"attribute_form_expression"')," to construct an expression."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "expression": {\n    "tokens": [\n      {\n        "value": "<attribute_form_expression>"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "attribute",\n    "name": "Subcategory",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "forms": [\n    {\n      "name": "ID",\n      "description": "Subcategory ID",\n      "category": "ID",\n      "displayFormat": "number",\n      "expressions": [\n        {\n          "expression": {\n            "tokens": [\n              {\n                "value": "SUBCAT_ID"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "76C6FEAB49D08F57BC6FC9B644743EEF",\n              "subType": "logical_table",\n              "name": "CITY_SUBCATEG_SLS"\n            },\n            {\n              "objectId": "8D67937411D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_ITEM"\n            },\n            {\n              "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_SUBCATEG"\n            }\n          ]\n        }\n      ],\n      "alias": "SUBCAT_ID",\n      "lookupTable": {\n        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_SUBCATEG"\n      }\n    },\n    {\n      "name": "DESC",\n      "description": "Subcategory Name",\n      "category": "DESC",\n      "isMultilingual": true,\n      "displayFormat": "text",\n      "expressions": [\n        {\n          "expression": {\n            "tokens": [\n              {\n                "value": "SUBCAT_DESC"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_SUBCATEG"\n            }\n          ]\n        }\n      ],\n      "alias": "SUBCAT_DESC",\n      "lookupTable": {\n        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_SUBCATEG"\n      }\n    }\n  ],\n  "attributeLookupTable": {\n    "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n    "subType": "logical_table",\n    "name": "LU_SUBCATEG"\n  },\n  "keyForm": {\n    "name": "ID"\n  },\n  "displays": {\n    "reportDisplays": [\n      {\n        "name": "DESC"\n      }\n    ],\n    "browseDisplays": [\n      {\n        "name": "DESC"\n      }\n    ]\n  },\n  "sorts": {\n    "reportSorts": [\n      {\n        "form": {\n          "name": "DESC"\n        },\n        "ascending": true\n      }\n    ],\n    "browseSorts": [\n      {\n        "form": {\n          "name": "DESC"\n        },\n        "ascending": true\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("p",null,"In this sample workflow, you want to return the newly created attribute with its expression in all formats. Therefore, you should set ",(0,i.kt)("inlineCode",{parentName:"p"},"showExpressionAs=tree")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"showExpressionsAs=tokens"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/attributes?showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" -H "X-MSTR-MS-Changeset: B7CA92F04B9FAE8D941C3E9B7E0CD754" -H "Content-Type: application/json" -d "{\\\\"information\\\\":{\\\\"subType\\\\":\\\\"attribute\\\\",\\\\"name\\\\":\\\\"Subcategory\\\\",\\\\"destinationFolderId\\\\":\\\\"98FE182C2A10427EACE0CD30B6768258\\\\"},\\\\"forms\\\\":[{\\\\"name\\\\":\\\\"ID\\\\",\\\\"description\\\\":\\\\"Subcategory ID\\\\",\\\\"category\\\\":\\\\"ID\\\\",\\\\"displayFormat\\\\":\\\\"number\\\\",\\\\"expressions\\\\":[{\\\\"expression\\\\":{\\\\"tokens\\\\":[{\\\\"value\\\\":\\\\"SUBCAT_ID\\\\"}]},\\\\"tables\\\\":[{\\\\"objectId\\\\":\\\\"76C6FEAB49D08F57BC6FC9B644743EEF\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"CITY_SUBCATEG_SLS\\\\"},{\\\\"objectId\\\\":\\\\"8D67937411D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"LU_ITEM\\\\"},{\\\\"objectId\\\\":\\\\"8D6793B611D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"LU_SUBCATEG\\\\"}]}],\\\\"alias\\\\":\\\\"SUBCAT_ID\\\\",\\\\"lookupTable\\\\":{\\\\"objectId\\\\":\\\\"8D6793B611D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"LU_SUBCATEG\\\\"}},{\\\\"name\\\\":\\\\"DESC\\\\",\\\\"description\\\\":\\\\"Subcategory Name\\\\",\\\\"category\\\\":\\\\"DESC\\\\",\\\\"isMultilingual\\\\":true,\\\\"displayFormat\\\\":\\\\"text\\\\",\\\\"expressions\\\\":[{\\\\"expression\\\\":{\\\\"tokens\\\\":[{\\\\"value\\\\":\\\\"SUBCAT_DESC\\\\"}]},\\\\"tables\\\\":[{\\\\"objectId\\\\":\\\\"8D6793B611D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"LU_SUBCATEG\\\\"}]}],\\\\"alias\\\\":\\\\"SUBCAT_DESC\\\\",\\\\"lookupTable\\\\":{\\\\"objectId\\\\":\\\\"8D6793B611D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"LU_SUBCATEG\\\\"}}],\\\\"attributeLookupTable\\\\":{\\\\"objectId\\\\":\\\\"8D6793B611D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"LU_SUBCATEG\\\\"},\\\\"keyForm\\\\":{\\\\"name\\\\":\\\\"ID\\\\"},\\\\"displays\\\\":{\\\\"reportDisplays\\\\":[{\\\\"name\\\\":\\\\"DESC\\\\"}],\\\\"browseDisplays\\\\":[{\\\\"name\\\\":\\\\"DESC\\\\"}]},\\\\"sorts\\\\":{\\\\"reportSorts\\\\":[{\\\\"form\\\\":{\\\\"name\\\\":\\\\"DESC\\\\"},\\\\"ascending\\\\":true}],\\\\"browseSorts\\\\":[{\\\\"form\\\\":{\\\\"name\\\\":\\\\"DESC\\\\"},\\\\"ascending\\\\":true}]}}"\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,"You can view the new attribute's definition in the body of the response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "versionId": "45E696C357BC4BE882ED945E3EEDFE09",\n    "primaryLocale": "en-US",\n    "objectId": "27DA76BDDD8B4EEEA890B76F9BC77C9D",\n    "subType": "attribute",\n    "name": "Subcategory",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "forms": [\n    {\n      "id": "45C11FA478E745FEA08D781CEA190FE5",\n      "name": "ID",\n      "description": "Subcategory ID",\n      "category": "ID",\n      "type": "system",\n      "displayFormat": "number",\n      "dataType": {\n        "type": "integer",\n        "precision": 2,\n        "scale": -2147483648\n      },\n      "expressions": [\n        {\n          "expressionId": "B8AAB62201C44E349D3CE80CEC36200E",\n          "expression": {\n            "text": "SUBCAT_ID",\n            "tree": {\n              "type": "column_reference",\n              "columnName": "SUBCAT_ID",\n              "objectId": "8D67921711D3E4981000E787EC6DE8A4"\n            },\n            "tokens": [\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "SUBCAT_ID",\n                "type": "column_reference",\n                "target": {\n                  "dateCreated": "2001-01-02T20:48:47.000Z",\n                  "dateModified": "2012-06-06T12:13:04.000Z",\n                  "versionId": "256D148442065F43BDC42FBB79438A3F",\n                  "primaryLocale": "en-US",\n                  "objectId": "8D67921711D3E4981000E787EC6DE8A4",\n                  "subType": "column",\n                  "name": "SUBCAT_ID"\n                }\n              },\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "",\n                "type": "end_of_text"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "76C6FEAB49D08F57BC6FC9B644743EEF",\n              "subType": "logical_table",\n              "name": "CITY_SUBCATEG_SLS"\n            },\n            {\n              "objectId": "8D67937411D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_ITEM"\n            },\n            {\n              "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_SUBCATEG"\n            }\n          ]\n        }\n      ],\n      "alias": "SUBCAT_ID",\n      "lookupTable": {\n        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_SUBCATEG"\n      }\n    },\n    {\n      "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n      "name": "DESC",\n      "description": "Subcategory Name",\n      "category": "DESC",\n      "type": "system",\n      "isMultilingual": true,\n      "displayFormat": "text",\n      "dataType": {\n        "type": "n_var_char",\n        "precision": 50,\n        "scale": -2147483648\n      },\n      "expressions": [\n        {\n          "expressionId": "41C08B7CE11440569CA7AE54A28DCC55",\n          "expression": {\n            "text": "SUBCAT_DESC",\n            "tree": {\n              "type": "column_reference",\n              "columnName": "SUBCAT_DESC",\n              "objectId": "8D67928711D3E4981000E787EC6DE8A4"\n            },\n            "tokens": [\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "SUBCAT_DESC",\n                "type": "column_reference",\n                "target": {\n                  "dateCreated": "2001-01-02T20:48:34.000Z",\n                  "dateModified": "2012-06-06T12:13:04.000Z",\n                  "versionId": "256D148442065F43BDC42FBB79438A3F",\n                  "primaryLocale": "en-US",\n                  "objectId": "8D67928711D3E4981000E787EC6DE8A4",\n                  "subType": "column",\n                  "name": "SUBCAT_DESC"\n                }\n              },\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "",\n                "type": "end_of_text"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_SUBCATEG"\n            }\n          ]\n        }\n      ],\n      "alias": "SUBCAT_DESC",\n      "lookupTable": {\n        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_SUBCATEG"\n      }\n    }\n  ],\n  "attributeLookupTable": {\n    "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n    "subType": "logical_table",\n    "name": "LU_SUBCATEG"\n  },\n  "keyForm": {\n    "id": "45C11FA478E745FEA08D781CEA190FE5",\n    "name": "ID"\n  },\n  "displays": {\n    "reportDisplays": [\n      {\n        "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n        "name": "DESC"\n      }\n    ],\n    "browseDisplays": [\n      {\n        "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n        "name": "DESC"\n      }\n    ]\n  },\n  "sorts": {\n    "reportSorts": [\n      {\n        "form": {\n          "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n          "name": "DESC"\n        },\n        "ascending": true\n      }\n    ],\n    "browseSorts": [\n      {\n        "form": {\n          "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n          "name": "DESC"\n        },\n        "ascending": true\n      }\n    ]\n  },\n  "relationships": []\n}\n')),(0,i.kt)("p",null,"Response Code: 201 (A new attribute is created successfully in the changeset.)"),(0,i.kt)("h2",{id:"more-samples"},"More samples"),(0,i.kt)("p",null,"The following are additional examples for creating an attribute object."),(0,i.kt)("h3",{id:"attribute-form-mapped-to-multiple-expressions"},"Attribute form mapped to multiple expressions"),(0,i.kt)("p",null,'You can create an attribute with attribute forms mapped to multiple expressions. In this sample, you want to create an attribute named "Day" with ID form maps to two expressions: 1) ',(0,i.kt)("inlineCode",{parentName:"p"},'"DAY_DATE"')," used in the tables ",(0,i.kt)("inlineCode",{parentName:"p"},'"DAY_CTR_SLS"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"LU_DAY"')," and 2) ",(0,i.kt)("inlineCode",{parentName:"p"},'"ORDER_DATE"')," used in the table ",(0,i.kt)("inlineCode",{parentName:"p"},'"ORDER_FACT"'),"."),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "attribute",\n    "name": "Day",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "forms": [\n    {\n      "name": "ID",\n      "category": "ID",\n      "displayFormat": "date",\n      "dataType": {\n        "type": "time_stamp",\n        "precision": 0,\n        "scale": -2147483648\n      },\n      "expressions": [\n        {\n          "expression": {\n            "tokens": [\n              {\n                "value": "DAY_DATE"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "6F4FF0C84F271FC9851E9F8F502FF1C0",\n              "subType": "logical_table",\n              "name": "DAY_CTR_SLS"\n            },\n            {\n              "objectId": "24C30AD611D5AEC9C000E38A4CC5F24F",\n              "subType": "logical_table",\n              "name": "LU_DAY"\n            }\n          ]\n        },\n        {\n          "expression": {\n            "tokens": [\n              {\n                "value": "ORDER_DATE"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "8D6793D411D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "ORDER_FACT"\n            }\n          ]\n        }\n      ],\n      "alias": "DAY_DATE",\n      "lookupTable": {\n        "objectId": "24C30AD611D5AEC9C000E38A4CC5F24F",\n        "subType": "logical_table",\n        "name": "LU_DAY"\n      }\n    }\n  ],\n  "attributeLookupTable": {\n    "objectId": "24C30AD611D5AEC9C000E38A4CC5F24F",\n    "subType": "logical_table",\n    "name": "LU_DAY"\n  },\n  "keyForm": {\n    "name": "ID"\n  },\n  "displays": {\n    "reportDisplays": [\n      {\n        "name": "ID"\n      }\n    ],\n    "browseDisplays": [\n      {\n        "name": "ID"\n      }\n    ]\n  },\n  "sorts": {}\n}\n')),(0,i.kt)("h3",{id:"attribute-with-a-form-group"},"Attribute with a form group"),(0,i.kt)("p",null,"You can create an attribute with a form group. In this sample, you want to create an attribute named ",(0,i.kt)("inlineCode",{parentName:"p"},'"Customer"'),' that contains the form group "Name" with "First Name" and "Last Name".'),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "attribute",\n    "name": "Customer",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "forms": [\n    {\n      "name": "ID",\n      "description": "Customer ID",\n      "category": "ID",\n      "displayFormat": "number",\n      "expressions": [\n        {\n          "expression": {\n            "tokens": [\n              {\n                "value": "CUSTOMER_ID"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_CUSTOMER"\n            }\n          ]\n        }\n      ],\n      "alias": "CUSTOMER_ID",\n      "lookupTable": {\n        "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_CUSTOMER"\n      }\n    },\n    {\n      "name": "Name",\n      "description": "Customer Full Name",\n      "category": "DESC",\n      "isFormGroup": true,\n      "childForms": [\n        {\n          "name": "Last Name"\n        },\n        {\n          "name": "First Name"\n        }\n      ]\n    },\n    {\n      "name": "Last Name",\n      "description": "Customer Last Name",\n      "category": "Customer DESC (1)",\n      "displayFormat": "text",\n      "expressions": [\n        {\n          "expression": {\n            "tokens": [\n              {\n                "value": "CUST_LAST_NAME"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_CUSTOMER"\n            }\n          ]\n        }\n      ],\n      "alias": "CUST_LAST_NAME",\n      "lookupTable": {\n        "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_CUSTOMER"\n      }\n    },\n    {\n      "name": "First Name",\n      "description": "Customer First Name",\n      "category": "Customer DESC (2)",\n      "displayFormat": "text",\n      "expressions": [\n        {\n          "expression": {\n            "tokens": [\n              {\n                "value": "CUST_FIRST_NAME"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_CUSTOMER"\n            }\n          ]\n        }\n      ],\n      "alias": "CUST_FIRST_NAME",\n      "lookupTable": {\n        "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_CUSTOMER"\n      }\n    }\n  ],\n  "attributeLookupTable": {\n    "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n    "subType": "logical_table",\n    "name": "LU_CUSTOMER"\n  },\n  "keyForm": {\n    "name": "ID"\n  },\n  "displays": {\n    "reportDisplays": [\n      {\n        "name": "Last Name"\n      },\n      {\n        "name": "First Name"\n      }\n    ],\n    "browseDisplays": [\n      {\n        "name": "Last Name"\n      },\n      {\n        "name": "First Name"\n      }\n    ]\n  },\n  "sorts": {\n    "reportSorts": [\n      {\n        "form": {\n          "name": "Last Name"\n        },\n        "ascending": true\n      }\n    ],\n    "browseSorts": [\n      {\n        "form": {\n          "name": "Last Name"\n        },\n        "ascending": true\n      }\n    ]\n  }\n}\n')),(0,i.kt)("h3",{id:"compound-attribute"},"Compound attribute"),(0,i.kt)("p",null,'You can create a compound attribute. In this sample, you want to create an attribute named "Distribution Center" that contains the compound keys "COUNTRY_ID" and "DIST_CTR_ID".'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "attribute",\n    "name": "Distribution Center",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "forms": [\n    {\n      "name": "ID",\n      "description": "Distribution Center Compound ID",\n      "category": "ID",\n      "isFormGroup": true,\n      "childForms": [\n        {\n          "name": "ID (1)"\n        },\n        {\n          "name": "ID (2)"\n        }\n      ]\n    },\n    {\n      "name": "ID (1)",\n      "description": "Distribution Center ID1",\n      "category": "Distribution Center ID_1",\n      "displayFormat": "number",\n      "expressions": [\n        {\n          "expression": {\n            "tokens": [\n              {\n                "value": "COUNTRY_ID"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "8D67933211D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_CALL_CTR"\n            },\n            {\n              "objectId": "8D67934411D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_COUNTRY"\n            },\n            {\n              "objectId": "8D67936211D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_DIST_CTR"\n            }\n          ]\n        }\n      ],\n      "alias": "COUNTRY_ID",\n      "lookupTable": {\n        "objectId": "8D67936211D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_DIST_CTR"\n      }\n    },\n    {\n      "name": "ID (2)",\n      "description": "Distribution Center ID2",\n      "category": "Distribution Center ID_2",\n      "displayFormat": "number",\n      "expressions": [\n        {\n          "expressionId": "8D679FA4E49811D387E70010A4E86DEC",\n          "expression": {\n            "tokens": [\n              {\n                "value": "DIST_CTR_ID"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "8D67933211D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_CALL_CTR"\n            },\n            {\n              "objectId": "8D67936211D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_DIST_CTR"\n            }\n          ]\n        }\n      ],\n      "alias": "DIST_CTR_ID",\n      "lookupTable": {\n        "objectId": "8D67936211D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_DIST_CTR"\n      }\n    },\n    {\n      "name": "DESC",\n      "description": "Distribution Center Name",\n      "category": "DESC",\n      "displayFormat": "text",\n      "dataType": {\n        "type": "n_var_char",\n        "precision": 50,\n        "scale": -2147483648\n      },\n      "expressions": [\n        {\n          "expression": {\n            "tokens": [\n              {\n                "value": "DIST_CTR_NAME"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "8D67936211D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_DIST_CTR"\n            }\n          ]\n        }\n      ],\n      "alias": "DIST_CTR_NAME",\n      "lookupTable": {\n        "objectId": "8D67936211D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_DIST_CTR"\n      }\n    }\n  ],\n  "attributeLookupTable": {\n    "objectId": "8D67936211D3E4981000E787EC6DE8A4",\n    "subType": "logical_table",\n    "name": "LU_DIST_CTR"\n  },\n  "keyForm": {\n    "name": "ID"\n  },\n  "displays": {\n    "reportDisplays": [\n      {\n        "name": "DESC"\n      }\n    ],\n    "browseDisplays": [\n      {\n        "name": "DESC"\n      }\n    ]\n  },\n  "sorts": {}\n}\n')),(0,i.kt)("h3",{id:"expressions-in-tree-format"},'Expressions in "tree" format'),(0,i.kt)("p",null,'You can create an attribute with expressions in "tree" format.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "attribute",\n    "name": "Subcategory_tree",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "forms": [\n    {\n      "name": "ID",\n      "description": "Subcategory ID",\n      "category": "ID",\n      "displayFormat": "number",\n      "expressions": [\n        {\n          "expression": {\n            "tree": {\n              "type": "column_reference",\n              "columnName": "SUBCAT_ID",\n              "objectId": "8D67921711D3E4981000E787EC6DE8A4"\n            }\n          },\n          "tables": [\n            {\n              "objectId": "76C6FEAB49D08F57BC6FC9B644743EEF",\n              "subType": "logical_table",\n              "name": "CITY_SUBCATEG_SLS"\n            },\n            {\n              "objectId": "8D67937411D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_ITEM"\n            },\n            {\n              "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_SUBCATEG"\n            }\n          ]\n        }\n      ],\n      "alias": "SUBCAT_ID",\n      "lookupTable": {\n        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_SUBCATEG"\n      }\n    },\n    {\n      "name": "DESC",\n      "description": "Subcategory Name",\n      "category": "DESC",\n      "isMultilingual": true,\n      "displayFormat": "text",\n      "expressions": [\n        {\n          "expression": {\n            "tree": {\n              "type": "column_reference",\n              "columnName": "SUBCAT_DESC",\n              "objectId": "8D67928711D3E4981000E787EC6DE8A4"\n            }\n          },\n          "tables": [\n            {\n              "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_SUBCATEG"\n            }\n          ]\n        }\n      ],\n      "alias": "SUBCAT_DESC",\n      "lookupTable": {\n        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_SUBCATEG"\n      }\n    }\n  ],\n  "attributeLookupTable": {\n    "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n    "subType": "logical_table",\n    "name": "LU_SUBCATEG"\n  },\n  "keyForm": {\n    "name": "ID"\n  },\n  "displays": {\n    "reportDisplays": [\n      {\n        "name": "DESC"\n      }\n    ],\n    "browseDisplays": [\n      {\n        "name": "DESC"\n      }\n    ]\n  },\n  "sorts": {\n    "reportSorts": [\n      {\n        "form": {\n          "name": "DESC"\n        },\n        "ascending": true\n      }\n    ],\n    "browseSorts": [\n      {\n        "form": {\n          "name": "DESC"\n        },\n        "ascending": true\n      }\n    ]\n  }\n}\n')),(0,i.kt)("h3",{id:"use-warehouse-partition-mapping-tables-or-metadata-partition-base-tables-in-expressions"},"Use warehouse partition mapping tables or metadata partition base tables in expressions"),(0,i.kt)("p",null,"In this sample, you want to create an attribute named ",(0,i.kt)("inlineCode",{parentName:"p"},'"Item"')," that references ",(0,i.kt)("inlineCode",{parentName:"p"},'"item_id"')," column of the warehouse partition mapping table ",(0,i.kt)("inlineCode",{parentName:"p"},'"whpmt"'),", and ",(0,i.kt)("inlineCode",{parentName:"p"},'"year_id"')," column of the metadata partition base table ",(0,i.kt)("inlineCode",{parentName:"p"},'"LU_MONTH"'),"."),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "name": "Item"\n  },\n  "forms": [\n    {\n      "name": "ID",\n      "description": "Item",\n      "displayFormat": "number",\n      "dataType": {\n        "type": "integer",\n        "precision": 2,\n        "scale": -2147483648\n      },\n      "expressions": [\n        {\n          "expression": {\n            "text": "item_id",\n            "tree": {\n              "type": "column_reference",\n              "dependenceType": "default",\n              "columnName": "item_id",\n              "objectId": "8D67915C11D3E4981000E787EC6DE8A4"\n            }\n          },\n          "tables": [\n            {\n              "objectId": "A05E98A407DD407DAA076FC06C6E464F",\n              "subType": "table_partition_wh",\n              "name": "whpmt"\n            }\n          ]\n        },\n        {\n          "expression": {\n            "text": "year_id",\n            "tree": {\n              "type": "column_reference",\n              "dependenceType": "default",\n              "columnName": "year_id",\n              "objectId": "8D6791E111D3E4981000E787EC6DE8A4"\n            }\n          },\n          "tables": [\n            {\n              "objectId": "8D67938011D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_MONTH"\n            }\n          ]\n        }\n      ],\n      "alias": "item_id",\n      "lookupTable": {\n        "objectId": "A05E98A407DD407DAA076FC06C6E464F",\n        "subType": "table_partition_wh",\n        "name": "pmt_tc86967_01"\n      }\n    }\n  ],\n  "attributeLookupTable": {\n    "objectId": "A05E98A407DD407DAA076FC06C6E464F",\n    "subType": "table_partition_wh",\n    "name": "pmt_tc86967_01"\n  },\n  "keyForm": {\n    "name": "ID"\n  },\n  "displays": {\n    "reportDisplays": [\n      {\n        "name": "ID"\n      }\n    ],\n    "browseDisplays": [\n      {\n        "name": "ID"\n      }\n    ]\n  }\n}\n')))}E.isMDXComponent=!0}}]);