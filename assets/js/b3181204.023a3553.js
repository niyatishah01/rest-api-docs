"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[9123],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,f=d["".concat(l,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3667:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return d}});var a,o=n(3117),r=n(102),i=(n(7294),n(3905)),s=["components"],l={title:"Create a transformation object",sidebar_label:"Create a transformation object",description:"The workflow to create a transformation object."},p=void 0,m={unversionedId:"common-workflows/modeling/manage-transformation-objects/create-a-transformation-object",id:"common-workflows/modeling/manage-transformation-objects/create-a-transformation-object",title:"Create a transformation object",description:"The workflow to create a transformation object.",source:"@site/docs/common-workflows/modeling/manage-transformation-objects/create-a-transformation-object.md",sourceDirName:"common-workflows/modeling/manage-transformation-objects",slug:"/common-workflows/modeling/manage-transformation-objects/create-a-transformation-object",permalink:"/rest-api-docs/common-workflows/modeling/manage-transformation-objects/create-a-transformation-object",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-transformation-objects/create-a-transformation-object.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1676308226,formattedLastUpdatedAt:"Feb 13, 2023",frontMatter:{title:"Create a transformation object",sidebar_label:"Create a transformation object",description:"The workflow to create a transformation object."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a transformation's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-transformation-objects/retrieve-a-transformations-definition"},next:{title:"Update a transformation's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-transformation-objects/update-a-transformations-definition"}},c={},d=[{value:"Create a transformation object",id:"create-a-transformation-object",level:2},{value:"Create a transformation object using POST /api/model/transformations",id:"create-a-transformation-object-using-post-apimodeltransformations",level:3},{value:"More examples",id:"more-examples",level:2},{value:"Multiple transformation attributes",id:"multiple-transformation-attributes",level:3},{value:"Transformation attribute form\u2019s expression in \u201ctree\u201d format",id:"transformation-attribute-forms-expression-in-tree-format",level:3}],u=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),f={toc:d};function b(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(u,{since:"2021 Update 5",mdxType:"Available"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-ad947705-6f6c-433c-ae10-cfe90ba9a364?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("h2",{id:"create-a-transformation-object"},"Create a transformation object"),(0,i.kt)("p",null,"In this workflow sample, you want to create a ",(0,i.kt)("inlineCode",{parentName:"p"},'"Last year\u2019s"')," transformation object under the My Personal Objects/My Objects (MSTR User/My Objects) folder in the MicroStrategy Tutorial project. The folder object ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"9B25D45A4834A213A70C10B1703D4A77"),". The project ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"B19DEDCC11D4E0EFC000EB9495D0F44F"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,i.kt)("p",null,"Changesets are used in this workflow. For information on how to create and use changesets see ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),"."),(0,i.kt)("h3",{id:"create-a-transformation-object-using-post-apimodeltransformations"},"Create a transformation object using ",(0,i.kt)("a",{parentName:"h3",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Transformations/ms-createTransformation"},"POST /api/model/transformations")),(0,i.kt)("p",null,"You want to create a ",(0,i.kt)("inlineCode",{parentName:"p"},'"Last year\u2019s"')," transformation object with a transformation attribute based on a normal ",(0,i.kt)("inlineCode",{parentName:"p"},'"Year"')," attribute. This transformation attribute has a form with a ",(0,i.kt)("inlineCode",{parentName:"p"},'"YEAR_ID - 1"')," expression in \u201ctokens\u201d format and a ",(0,i.kt)("inlineCode",{parentName:"p"},'"LU_YEAR"')," lookup table. The transformation\u2019s mapping type is ",(0,i.kt)("inlineCode",{parentName:"p"},'"one_to_one"'),". You must define the ",(0,i.kt)("inlineCode",{parentName:"p"},'"destinationFolderId"')," as ",(0,i.kt)("inlineCode",{parentName:"p"},"9B25D45A4834A213A70C10B1703D4A77")," to save this transformation in the desired folder when you commit the changeset later."),(0,i.kt)("p",null,"To create a transformation, in the request body, ",(0,i.kt)("inlineCode",{parentName:"p"},'"attributes"')," contains a list of transformation attributes. Each transformation attribute contains ",(0,i.kt)("inlineCode",{parentName:"p"},'"baseAttribute"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"forms"'),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'"baseAttribute"'),": Refers to the normal attribute the transformation attribute is based on."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'"forms"'),": A list of transformation attribute forms, which are generated according to the base attribute key form. Each transformation attribute form contains a ",(0,i.kt)("inlineCode",{parentName:"p"},'"lookupTable"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"expression"'),". The ",(0,i.kt)("inlineCode",{parentName:"p"},'"expression"')," needs to be in either ",(0,i.kt)("inlineCode",{parentName:"p"},'"tree"')," or ",(0,i.kt)("inlineCode",{parentName:"p"},'"tokens"')," format."),(0,i.kt)("p",null,"Tokens are a semi-structured representation of a MicroStrategy expression text including object references. For example, let\u2019s say a filter expression is ",(0,i.kt)("inlineCode",{parentName:"p"},'"Revenue > Cost"'),". When represented as tokens, the text is broken down into pieces (tokens) with information of what these parts represent in the metadata: (",(0,i.kt)("inlineCode",{parentName:"p"},'"Revenue"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Revenue_ID"),"), (",(0,i.kt)("inlineCode",{parentName:"p"},'">"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},"GreaterThan_ID"),"), (",(0,i.kt)("inlineCode",{parentName:"p"},'"Cost"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Cost_ID"),")"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'"mappingType"'),": Defines a mapping relationship. This can be either ",(0,i.kt)("inlineCode",{parentName:"p"},"\u201cone_to_one\u201d")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"\u201cmany_to_many\u201d"),"."),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},' "accept": "application/json"\n "X-MSTR-AuthToken": "u8pcsrhnuluouca9q7cfhsnonb"\n "X-MSTR-MS-Changeset": "7D530B05774048C2A8F0ADA91C54914A"\n')),(0,i.kt)("p",null,"Construct the transformation attribute form's expression."),(0,i.kt)("p",null,"Make a copy of the following ",(0,i.kt)("inlineCode",{parentName:"p"},'"tokens'),'" format template and modify the ',(0,i.kt)("inlineCode",{parentName:"p"},'"form_expression"')," to construct an expression."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "expression": {\n    "tokens": [\n      {\n        "value": "<form_expression>"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "name": "Last year\'s",\n    "destinationFolderId": "9B25D45A4834A213A70C10B1703D4A77"\n  },\n  "attributes": [\n    {\n      "baseAttribute": { "objectId": "8D679D5111D3E4981000E787EC6DE8A4" },\n      "forms": [\n        {\n          "id": "45C11FA478E745FEA08D781CEA190FE5",\n          "lookupTable": { "objectId": "8D6793C211D3E4981000E787EC6DE8A4" },\n          "expression": { "tokens": [{ "value": "YEAR_ID - 1" }] }\n        }\n      ]\n    }\n  ],\n  "mappingType": "one_to_one"\n}\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("p",null,"In this sample workflow, you want to return the newly created transformation with its attribute form expression in all formats. Therefore, you should set ",(0,i.kt)("inlineCode",{parentName:"p"},"showExpressionAs=tree")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"showExpressionAs=tokens"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},' curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/transformations?showExpressionAs=tokens&showExpressionAs=tree" -H "X-MSTR-MS-Changeset: 7D530B05774048C2A8F0ADA91C54914A" -H "X-MSTR-AuthToken: u8pcsrhnuluouca9q7cfhsnonb" -H "Content-Type: application/json" -H "accept: application/json" -d "{\\"information\\": {\\"name\\": \\"Last year\'s\\",\\"destinationFolderId\\": \\"9B25D45A4834A213A70C10B1703D4A77\\"},\\"attributes\\": [{\\"baseAttribute\\": {\\"objectId\\": \\"8D679D5111D3E4981000E787EC6DE8A4\\"},\\"forms\\": [{\\"id\\": \\"45C11FA478E745FEA08D781CEA190FE5\\",\\"lookupTable\\": {\\"objectId\\": \\"8D6793C211D3E4981000E787EC6DE8A4\\"},\\"expression\\": {\\"tokens\\": [{\\"value\\": \\"YEAR_ID - 1\\"}]}}]}],\\"mappingType\\": \\"one_to_one\\"}"\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,"You can view the new transformation\u2019s definition in the body of the response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "versionId": "F80506EC91FC4483B17BC8952BB68D2C",\n    "primaryLocale": "en-US",\n    "objectId": "49713ED26BC94DB3A68964A5A085E2FC",\n    "subType": "role_transformation",\n    "name": "Last year\'s",\n    "destinationFolderId": "9B25D45A4834A213A70C10B1703D4A77"\n  },\n  "attributes": [\n    {\n      "id": "61DF5BACFEAF4245A3C7BD667A0D44F1",\n      "baseAttribute": {\n        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Year"\n      },\n      "forms": [\n        {\n          "id": "45C11FA478E745FEA08D781CEA190FE5",\n          "name": "ID",\n          "lookupTable": {\n            "objectId": "8D6793C211D3E4981000E787EC6DE8A4",\n            "subType": "logical_table",\n            "name": "LU_YEAR"\n          },\n          "expression": {\n            "text": "YEAR_ID - 1",\n            "tree": {\n              "function": "minus",\n              "children": [\n                {\n                  "type": "column_reference",\n                  "columnName": "YEAR_ID",\n                  "objectId": "8D6791E111D3E4981000E787EC6DE8A4"\n                },\n                {\n                  "type": "constant",\n                  "variant": { "type": "int32", "value": "1" }\n                }\n              ],\n              "type": "operator"\n            },\n            "tokens": [\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "YEAR_ID",\n                "type": "column_reference",\n                "target": {\n                  "dateCreated": "2001-01-02T20:48:44.000Z",\n                  "dateModified": "2012-06-06T12:13:04.000Z",\n                  "versionId": "256D148442065F43BDC42FBB79438A3F",\n                  "primaryLocale": "en-US",\n                  "objectId": "8D6791E111D3E4981000E787EC6DE8A4",\n                  "subType": "column",\n                  "name": "YEAR_ID"\n                }\n              },\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "-",\n                "type": "character",\n                "target": {\n                  "dateCreated": "2001-01-02T20:47:41.000Z",\n                  "dateModified": "2015-03-16T02:51:18.000Z",\n                  "versionId": "B0D63F80427C856DA6A8649CB6E0CF93",\n                  "primaryLocale": "en-US",\n                  "objectId": "8107C311DD9911D3B98100C04F2233EA",\n                  "subType": "function",\n                  "name": "-",\n                  "description": "Returns the difference between two values."\n                }\n              },\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "1",\n                "type": "integer"\n              },\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "",\n                "type": "end_of_text"\n              }\n            ]\n          }\n        }\n      ]\n    }\n  ],\n  "mappingType": "one_to_one"\n}\n')),(0,i.kt)("p",null,"Response Code: 201 (A new transformation is created successfully in the changeset.)"),(0,i.kt)("h2",{id:"more-examples"},"More examples"),(0,i.kt)("p",null,"Use the following additional examples for creating a transformation object."),(0,i.kt)("h3",{id:"multiple-transformation-attributes"},"Multiple transformation attributes"),(0,i.kt)("p",null,"You can create a transformation object with multiple attributes."),(0,i.kt)("p",null,"In this sample, you want to create a ",(0,i.kt)("inlineCode",{parentName:"p"},'"Last year\u2019s"')," transformation with two transformation attributes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"One based on a normal ",(0,i.kt)("inlineCode",{parentName:"li"},'"Year"')," attribute. This transformation attribute has a form with an ",(0,i.kt)("inlineCode",{parentName:"li"},'"YEAR_ID - 1"')," attribute in ",(0,i.kt)("inlineCode",{parentName:"li"},'"tokens"')," format and a ",(0,i.kt)("inlineCode",{parentName:"li"},'"LU_YEAR"')," lookup table."),(0,i.kt)("li",{parentName:"ul"},"A second based on a normal ",(0,i.kt)("inlineCode",{parentName:"li"},"\u201cQuarter"),"\u201d attribute. This transformation attribute has a form with an ",(0,i.kt)("inlineCode",{parentName:"li"},'\u201cLY_QUARTER_ID"')," expression in ",(0,i.kt)("inlineCode",{parentName:"li"},"\u201ctokens\u201d")," format and a ",(0,i.kt)("inlineCode",{parentName:"li"},'"LU_QUARTER"')," lookup table .")),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "name": "Last year\'s",\n    "destinationFolderId": "9B25D45A4834A213A70C10B1703D4A77"\n  },\n  "attributes": [\n    {\n      "baseAttribute": { "objectId": "8D679D5111D3E4981000E787EC6DE8A4" },\n      "forms": [\n        {\n          "id": "45C11FA478E745FEA08D781CEA190FE5",\n          "lookupTable": { "objectId": "8D6793C211D3E4981000E787EC6DE8A4" },\n          "expression": { "tokens": [{ "value": "YEAR_ID - 1" }] }\n        }\n      ]\n    },\n    {\n      "baseAttribute": { "objectId": "8D679D4A11D3E4981000E787EC6DE8A4" },\n      "forms": [\n        {\n          "id": "45C11FA478E745FEA08D781CEA190FE5",\n          "lookupTable": { "objectId": "8D6793A411D3E4981000E787EC6DE8A4" },\n          "expression": { "tokens": [{ "value": "LY_QUARTER_ID" }] }\n        }\n      ]\n    }\n  ],\n  "mappingType": "one_to_one"\n}\n')),(0,i.kt)("h3",{id:"transformation-attribute-forms-expression-in-tree-format"},"Transformation attribute form\u2019s expression in \u201ctree\u201d format"),(0,i.kt)("p",null,"In this example, you want to create a ",(0,i.kt)("inlineCode",{parentName:"p"},'"Last year\u2019s"')," transformation with a transformation attribute based on a normal ",(0,i.kt)("inlineCode",{parentName:"p"},'"Year"')," attribute. This transformation attribute has a form with a ",(0,i.kt)("inlineCode",{parentName:"p"},'"YEAR_ID - 1"')," expression in ",(0,i.kt)("inlineCode",{parentName:"p"},'"tree"')," format and a ",(0,i.kt)("inlineCode",{parentName:"p"},'"LU_YEAR"')," lookup table ."),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "name": "Last year\'s",\n    "destinationFolderId": "9B25D45A4834A213A70C10B1703D4A77"\n  },\n  "attributes": [\n    {\n      "baseAttribute": { "objectId": "8D679D5111D3E4981000E787EC6DE8A4" },\n      "forms": [\n        {\n          "id": "45C11FA478E745FEA08D781CEA190FE5",\n          "lookupTable": { "objectId": "8D6793C211D3E4981000E787EC6DE8A4" },\n          "expression": {\n            "tree": {\n              "function": "minus",\n              "children": [\n                {\n                  "type": "column_reference",\n                  "columnName": "YEAR_ID",\n                  "objectId": "8D6791E111D3E4981000E787EC6DE8A4"\n                },\n                {\n                  "type": "constant",\n                  "variant": { "type": "int32", "value": "1" }\n                }\n              ],\n              "type": "operator"\n            }\n          }\n        }\n      ]\n    }\n  ],\n  "mappingType": "one_to_one"\n}\n')))}b.isMDXComponent=!0}}]);