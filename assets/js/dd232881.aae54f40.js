"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1496],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,b=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return t?o.createElement(b,i(i({ref:n},p),{},{components:t})):o.createElement(b,i({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6870:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var o=t(3117),a=t(102),r=(t(7294),t(3905)),i=["components"],s={title:"Workflow sample - Create a consolidation",sidebar_label:"Create a consolidation",description:"This workflow sample demonstrates how to create a new consolidation object through the Modeling service."},l=void 0,c={unversionedId:"common-workflows/manage-consolidation-objects/create-a-consolidation-object",id:"common-workflows/manage-consolidation-objects/create-a-consolidation-object",title:"Workflow sample - Create a consolidation",description:"This workflow sample demonstrates how to create a new consolidation object through the Modeling service.",source:"@site/docs/common-workflows/manage-consolidation-objects/create-a-consolidation-object.md",sourceDirName:"common-workflows/manage-consolidation-objects",slug:"/common-workflows/manage-consolidation-objects/create-a-consolidation-object",permalink:"/rest-api-docs/common-workflows/manage-consolidation-objects/create-a-consolidation-object",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-consolidation-objects/create-a-consolidation-object.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1668189866,formattedLastUpdatedAt:"Nov 11, 2022",frontMatter:{title:"Workflow sample - Create a consolidation",sidebar_label:"Create a consolidation",description:"This workflow sample demonstrates how to create a new consolidation object through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a consolidation's definition",permalink:"/rest-api-docs/common-workflows/manage-consolidation-objects/retrieve-a-consolidations-definition"},next:{title:"Update a consolidation object",permalink:"/rest-api-docs/common-workflows/manage-consolidation-objects/update-a-consolidation-object"}},p={},m=[{value:"Create a new consolidation",id:"create-a-new-consolidation",level:2},{value:"Example: Create a consolidation with two elements",id:"example-create-a-consolidation-with-two-elements",level:2}],d={toc:m};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-cd93cd32-2391-4f2f-9308-9f47783540bf?ctx=documentation"},"REST API Playground"),"."),(0,r.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,r.kt)("p",null,"This workflow sample demonstrates how to create a new consolidation object through the Modeling service."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a changeset."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#create-a-new-consolidation"},"Create a new consolidation.")),(0,r.kt)("li",{parentName:"ol"},"Commit a changeset."),(0,r.kt)("li",{parentName:"ol"},"Delete a changeset.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#example-create-a-consolidation-with-two-elements"},"More Example: Create a consolidation with two elements.")),(0,r.kt)("p",null,'You want to create a new consolidation with the expression "({Customer Age=20 AND Customer=Aaby:Alen} + {Customer City=Addison})" under the Public Objects folder in the MicroStrategy Tutorial project. The folder object ID is 98FE182C2A10427EACE0CD30B6768258. The project ID is 091B51154B22036C53CFBB9958B2E8FC.'),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),".",(0,r.kt)("br",null)," Obtain the project ID from ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets see ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/changesets"},"Changesets"),".")),(0,r.kt)("h2",{id:"create-a-new-consolidation"},"Create a new consolidation"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/model/consolidation")),(0,r.kt)("p",null,'The type of elements inside the consolidation must be "calculation". An ',(0,r.kt)("a",{parentName:"p",href:"#example-create-a-consolidation-with-two-elements"},"example")," for creating a new consolidation with two elements is described below."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,r.kt)("p",null,"Sample Request Body:"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more details on setting format properties, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/manage-derived-element-objects/format-samples"},"Format samples"),". The format for consolidations is the same as derived elements.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258",\n    "name": "Create Consolidation"\n  },\n  "elements": [\n    {\n      "name": "Example",\n      "type": "calculation",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "expression": {\n        "tree": {\n          "function": "plus",\n          "children": [\n            {\n              "type": "elements_object",\n              "elements": [\n                {\n                  "display": "20",\n                  "elementId": "h20",\n                  "attribute": {\n                    "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",\n                    "subType": "attribute",\n                    "name": "Customer Age"\n                  }\n                },\n                {\n                  "display": "Aaby:Alen",\n                  "elementId": "h7796",\n                  "attribute": {\n                    "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",\n                    "subType": "attribute",\n                    "name": "Customer"\n                  }\n                }\n              ]\n            },\n            {\n              "type": "elements_object",\n              "elements": [\n                {\n                  "display": "Addison",\n                  "elementId": "h1",\n                  "attribute": {\n                    "objectId": "8D679D3A11D3E4981000E787EC6DE8A4",\n                    "subType": "attribute",\n                    "name": "Customer City"\n                  }\n                }\n              ]\n            }\n          ],\n          "type": "operator"\n        }\n      }\n    }\n  ],\n  "subtotal": "disable"\n}\n')),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/consolidations" -H "accept: application/json" -H "X-MSTR-AuthToken: 9rlq0e1dgg3rp237hiddruqcd0" -H "X-MSTR-MS-Changeset: EE48CD8879C44A03B18660AE7AFC8F68" -H "Content-Type: application/json" -d "{\\"information\\":{\\"destinationFolderId\\":\\"98FE182C2A10427EACE0CD30B6768258\\",\\"name\\":\\"Create Consolidation\\"},\\"elements\\":[{\\"id\\":\\"6A4A4FAF4A9D868F53754FB3417A3CC1\\",\\"name\\":\\"Example\\",\\"type\\":\\"calculation\\",\\"format\\":{\\"header\\":[],\\"values\\":[]},\\"expression\\":{\\"text\\":\\"20, Aaby:Alen + Addison\\",\\"tree\\":{\\"function\\":\\"plus\\",\\"children\\":[{\\"type\\":\\"elements_object\\",\\"elements\\":[{\\"display\\":\\"20\\",\\"elementId\\":\\"h20\\",\\"attribute\\":{\\"objectId\\":\\"6E069E4C11D3E4E41000E887EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Customer Age\\"}},{\\"display\\":\\"Aaby:Alen\\",\\"elementId\\":\\"h7796\\",\\"attribute\\":{\\"objectId\\":\\"8D679D3C11D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Customer\\"}}]},{\\"type\\":\\"elements_object\\",\\"elements\\":[{\\"display\\":\\"Addison\\",\\"elementId\\":\\"h1\\",\\"attribute\\":{\\"objectId\\":\\"8D679D3A11D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Customer City\\"}}]}],\\"type\\":\\"operator\\"}}}],\\"subtotal\\":\\"disable\\"}"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("p",null,"You can view the new consolidation's definition in the body of the response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "versionId": "9E355E1F98C74D47B7EA30C4160FD625",\n    "primaryLocale": "en-US",\n    "objectId": "BE0FAD624A1A48BC9EFCE80F23C2D6C3",\n    "subType": "consolidation",\n    "name": "Create Consolidation",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "elements": [\n    {\n      "id": "9360AEF0C38341E1ADA498692C4257C8",\n      "name": "Example",\n      "type": "calculation",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "expression": {\n        "text": "20, Aaby:Alen + Addison",\n        "tree": {\n          "function": "plus",\n          "children": [\n            {\n              "type": "elements_object",\n              "elements": [\n                {\n                  "display": "20",\n                  "elementId": "h20",\n                  "attribute": {\n                    "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",\n                    "subType": "attribute",\n                    "name": "Customer Age"\n                  }\n                },\n                {\n                  "display": "Aaby:Alen",\n                  "elementId": "h7796",\n                  "attribute": {\n                    "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",\n                    "subType": "attribute",\n                    "name": "Customer"\n                  }\n                }\n              ]\n            },\n            {\n              "type": "elements_object",\n              "elements": [\n                {\n                  "display": "Addison",\n                  "elementId": "h1",\n                  "attribute": {\n                    "objectId": "8D679D3A11D3E4981000E787EC6DE8A4",\n                    "subType": "attribute",\n                    "name": "Customer City"\n                  }\n                }\n              ]\n            }\n          ],\n          "type": "operator"\n        }\n      }\n    }\n  ],\n  "subtotal": "disable"\n}\n')),(0,r.kt)("p",null,"Response Code: 201 (A new consolidation is created successfully in the changeset.)"),(0,r.kt)("h2",{id:"example-create-a-consolidation-with-two-elements"},"Example: Create a consolidation with two elements"),(0,r.kt)("p",null,"In the above example, the consolidation has only one element. However, it can have multiple elements, and an element can be referred by other elements."),(0,r.kt)("p",null,"In this example, you want to create a consolidation with two elements. The expression of element_a is ",(0,r.kt)("inlineCode",{parentName:"p"},"({Customer Age=20 AND Customer=Aaby:Alen} + {Customer City=Addison})")," and the expression of element_b is ",(0,r.kt)("inlineCode",{parentName:"p"},"element_a + 1"),"."),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258",\n    "name": "Create Consolidation"\n  },\n  "elements": [\n    {\n      "name": "element_a",\n      "type": "calculation",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "expression": {\n        "tree": {\n          "function": "plus",\n          "children": [\n            {\n              "type": "elements_object",\n              "elements": [\n                {\n                  "display": "20",\n                  "elementId": "h20",\n                  "attribute": {\n                    "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",\n                    "subType": "attribute",\n                    "name": "Customer Age"\n                  }\n                },\n                {\n                  "display": "Aaby:Alen",\n                  "elementId": "h7796",\n                  "attribute": {\n                    "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",\n                    "subType": "attribute",\n                    "name": "Customer"\n                  }\n                }\n              ]\n            },\n            {\n              "type": "elements_object",\n              "elements": [\n                {\n                  "display": "Addison",\n                  "elementId": "h1",\n                  "attribute": {\n                    "objectId": "8D679D3A11D3E4981000E787EC6DE8A4",\n                    "subType": "attribute",\n                    "name": "Customer City"\n                  }\n                }\n              ]\n            }\n          ],\n          "type": "operator"\n        }\n      }\n    },\n    {\n      "name": "element_b",\n      "type": "calculation",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "expression": {\n        "tree": {\n          "function": "plus",\n          "children": [\n            {\n              "type": "object_reference",\n              "target": {\n                "name": "element_a"\n              },\n              "isIndependent": 0\n            },\n            {\n              "type": "constant",\n              "variant": {\n                "type": "double",\n                "value": "1.0"\n              }\n            }\n          ],\n          "type": "operator"\n        }\n      }\n    }\n  ],\n  "subtotal": "disable"\n}\n')))}u.isMDXComponent=!0}}]);