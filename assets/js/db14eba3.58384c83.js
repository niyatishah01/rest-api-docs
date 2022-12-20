"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8826],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),m=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=m(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=m(n),u=a,f=d["".concat(p,".").concat(u)]||d[u]||c[u]||r;return n?o.createElement(f,i(i({ref:t},l),{},{components:n})):o.createElement(f,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var m=2;m<r;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6859:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return c}});var o=n(3117),a=n(102),r=(n(7294),n(3905)),i=["components"],s={title:"Workflow sample - Update a transformation's definition",sidebar_label:"Update a transformation's definition",description:"This workflow sample demonstrates how to update an existing transformation through the Modeling service."},p=void 0,m={unversionedId:"common-workflows/manage-transformation-objects/update-a-transformations-definition",id:"common-workflows/manage-transformation-objects/update-a-transformations-definition",title:"Workflow sample - Update a transformation's definition",description:"This workflow sample demonstrates how to update an existing transformation through the Modeling service.",source:"@site/docs/common-workflows/manage-transformation-objects/update-a-transformations-definition.md",sourceDirName:"common-workflows/manage-transformation-objects",slug:"/common-workflows/manage-transformation-objects/update-a-transformations-definition",permalink:"/rest-api-docs/common-workflows/manage-transformation-objects/update-a-transformations-definition",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-transformation-objects/update-a-transformations-definition.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1671571075,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{title:"Workflow sample - Update a transformation's definition",sidebar_label:"Update a transformation's definition",description:"This workflow sample demonstrates how to update an existing transformation through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a transformation object",permalink:"/rest-api-docs/common-workflows/manage-transformation-objects/create-a-transformation-object"},next:{title:"Manage metric objects",permalink:"/rest-api-docs/common-workflows/manage-metric-objects/"}},l={},c=[{value:"Update the transformation\u2019s definition using PATCH /api/model/transformations/{transformationId}",id:"update-the-transformations-definition-using-patch-apimodeltransformationstransformationid",level:2}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-ad947705-6f6c-433c-ae10-cfe90ba9a364?ctx=documentation"},"REST API Playground"),"."),(0,r.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,r.kt)("p",null,"This workflow sample demonstrates how to update an existing transformation through the Modeling service."),(0,r.kt)("p",null,"In this workflow sample, you update an existing ",(0,r.kt)("inlineCode",{parentName:"p"},'"Last year\u2019s"')," transformation object under the My Personal Objects/My Objects (MSTR User/My Objects) folder in the MicroStrategy Tutorial project. The folder object ID is ",(0,r.kt)("inlineCode",{parentName:"p"},"9B25D45A4834A213A70C10B1703D4A77"),". The project ID is ",(0,r.kt)("inlineCode",{parentName:"p"},"B19DEDCC11D4E0EFC000EB9495D0F44F"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,r.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,r.kt)("p",null,"Changesets are used in this workflow. For information on how to create and use changesets see ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/changesets"},"Changesets"),"."),(0,r.kt)("h2",{id:"update-the-transformations-definition-using-patch-apimodeltransformationstransformationid"},"Update the transformation\u2019s definition using ",(0,r.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Transformations/ms-updateTransformation"},"PATCH /api/model/transformations/{transformationId}")),(0,r.kt)("p",null,"You want to update the definition of the ",(0,r.kt)("inlineCode",{parentName:"p"},'"Last year\u2019s"')," transformation so that its attribute has a new ",(0,r.kt)("inlineCode",{parentName:"p"},'"PREV_YEAR_ID"')," form expression. The transformation object ID is ",(0,r.kt)("inlineCode",{parentName:"p"},"49713ED26BC94DB3A68964A5A085E2FC"),"."),(0,r.kt)("p",null,"To update a transformation, in the request body, the supported property changes are the same as those used when creating a transformation using ",(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/model/transformations"),"."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "6n2qjpmf1hqm31mvqqvqo7ccj8"\n"X-MSTR-MS-Changeset": "10C098B3394941A39E66856DE614834A"\n')),(0,r.kt)("p",null,"Construct the transformation attribute form's expression."),(0,r.kt)("p",null,"Make a copy of the following ",(0,r.kt)("inlineCode",{parentName:"p"},'"tokens"')," format template and modify the ",(0,r.kt)("inlineCode",{parentName:"p"},'"form_expression"')," to construct an expression."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "expression": { "tokens": [{ "value": "<form_expression>" }] } }\n')),(0,r.kt)("p",null,"Sample Request Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": { "name": "Last year\'s" },\n  "attributes": [\n    {\n      "id": "61DF5BACFEAF4245A3C7BD667A0D44F1",\n      "baseAttribute": { "objectId": "8D679D5111D3E4981000E787EC6DE8A4" },\n      "forms": [\n        {\n          "id": "45C11FA478E745FEA08D781CEA190FE5",\n          "lookupTable": { "objectId": "8D6793C211D3E4981000E787EC6DE8A4" },\n          "expression": { "tokens": [{ "value": "PREV_YEAR_ID" }] }\n        }\n      ]\n    }\n  ],\n  "mappingType": "one_to_one"\n}\n')),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("p",null,"In this sample workflow, you want to return the updated transformation with its attribute form expression in all formats. Therefore, you should set ",(0,r.kt)("inlineCode",{parentName:"p"},"showExpressionAs=tree")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"showExpressionAs=tokens"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/transformations/49713ED26BC94DB3A68964A5A085E2FC?showExpressionAs=tree&showExpressionAs=tokens" -H "X-MSTR-MS-Changeset: 10C098B3394941A39E66856DE614834A" -H "X-MSTR-AuthToken: 6n2qjpmf1hqm31mvqqvqo7ccj8" -H "Content-Type: application/json" -H "accept: application/json" -d "{\\"information\\": {\\"name\\": \\"Last year\'s\\"},\\"attributes\\": [{\\"id\\": \\"61DF5BACFEAF4245A3C7BD667A0D44F1\\",\\"baseAttribute\\": {\\"objectId\\": \\"8D679D5111D3E4981000E787EC6DE8A4\\"},\\"forms\\": [{\\"id\\": \\"45C11FA478E745FEA08D781CEA190FE5\\",\\"lookupTable\\": {\\"objectId\\": \\"8D6793C211D3E4981000E787EC6DE8A4\\"},\\"expression\\": {\\"tokens\\": [{\\"value\\": \\"PREV_YEAR_ID\\"}]}}]}],\\"mappingType\\": \\"one_to_one\\"}"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("p",null,"You can view the transformation\u2019s new definition in the body of the response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-03-07T10:28:53.040Z",\n    "dateModified": "2022-03-07T10:28:53.040Z",\n    "versionId": "09C7D4466B4C414FBE929551B7F76B64",\n    "primaryLocale": "en-US",\n    "objectId": "49713ED26BC94DB3A68964A5A085E2FC",\n    "subType": "role_transformation",\n    "name": "Last year\'s"\n  },\n  "attributes": [\n    {\n      "id": "61DF5BACFEAF4245A3C7BD667A0D44F1",\n      "baseAttribute": {\n        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Year"\n      },\n      "forms": [\n        {\n          "id": "45C11FA478E745FEA08D781CEA190FE5",\n          "name": "ID",\n          "lookupTable": {\n            "objectId": "8D6793C211D3E4981000E787EC6DE8A4",\n            "subType": "logical_table",\n            "name": "LU_YEAR"\n          },\n          "expression": {\n            "text": "PREV_YEAR_ID",\n            "tree": {\n              "type": "column_reference",\n              "columnName": "PREV_YEAR_ID",\n              "objectId": "8EDB6B2411D5AEC0C000E38A4CC5F24F"\n            },\n            "tokens": [\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "PREV_YEAR_ID",\n                "type": "column_reference",\n                "target": {\n                  "dateCreated": "2001-09-21T19:03:05.000Z",\n                  "dateModified": "2012-06-06T12:13:04.000Z",\n                  "versionId": "256D148442065F43BDC42FBB79438A3F",\n                  "primaryLocale": "en-US",\n                  "objectId": "8EDB6B2411D5AEC0C000E38A4CC5F24F",\n                  "subType": "column",\n                  "name": "PREV_YEAR_ID"\n                }\n              },\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "",\n                "type": "end_of_text"\n              }\n            ]\n          }\n        }\n      ]\n    }\n  ],\n  "mappingType": "one_to_one"\n}\n')),(0,r.kt)("p",null,"Response Code: 200 (The transformation\u2019s definition is updated successfully in the changeset.)"))}u.isMDXComponent=!0}}]);