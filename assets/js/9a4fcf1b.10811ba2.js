"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3810],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),p=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,b=c["".concat(u,".").concat(d)]||c[d]||l[d]||r;return n?o.createElement(b,i(i({ref:t},m),{},{components:n})):o.createElement(b,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},55667:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return C},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return c}});var o,a=n(83117),r=n(80102),i=(n(67294),n(3905)),s=["components"],u={title:"Create a custom group object",sidebar_label:"Create a custom group object",description:"This workflow sample demonstrates how to create a new custom group object through the Modeling service."},p=void 0,m={unversionedId:"common-workflows/modeling/manage-custom-group-objects/create-a-custom-group-object",id:"common-workflows/modeling/manage-custom-group-objects/create-a-custom-group-object",title:"Create a custom group object",description:"This workflow sample demonstrates how to create a new custom group object through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-custom-group-objects/create-a-custom-group-object.md",sourceDirName:"common-workflows/modeling/manage-custom-group-objects",slug:"/common-workflows/modeling/manage-custom-group-objects/create-a-custom-group-object",permalink:"/rest-api-docs/common-workflows/modeling/manage-custom-group-objects/create-a-custom-group-object",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-custom-group-objects/create-a-custom-group-object.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1680880277,formattedLastUpdatedAt:"Apr 7, 2023",frontMatter:{title:"Create a custom group object",sidebar_label:"Create a custom group object",description:"This workflow sample demonstrates how to create a new custom group object through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a custom group's definition within a changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-custom-group-objects/retrieve-a-custom-groups-definition-within-a-changeset"},next:{title:"Create a custom group object with filter elements using custom expressions",permalink:"/rest-api-docs/common-workflows/modeling/manage-custom-group-objects/create-a-custom-group-object-with-filter-elements-using-custom-expressions"}},l={},c=[{value:"More samples",id:"more-samples",level:2},{value:"Custom group with band count",id:"custom-group-with-band-count",level:3},{value:"Custom group with band size",id:"custom-group-with-band-size",level:3},{value:"Custom group with banding points",id:"custom-group-with-banding-points",level:3},{value:"Custom group with metric value banding",id:"custom-group-with-metric-value-banding",level:3}],d=(o="Available",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),b={toc:c};function C(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(d,{since:"2021 Update 2",mdxType:"Available"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-3c57732e-0689-406a-a6ad-c73ece5960c2?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"This workflow sample demonstrates how to create a new custom group object through the Modeling service."),(0,i.kt)("p",null,"You want to create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"\u201cAge Group\u201c")," custom group object under the Public Objects folder in the MicroStrategy Tutorial project. The folder object ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"98FE182C2A10427EACE0CD30B6768258"),". The project ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),".")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a custom group object using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Custom%20Groups/ms-postCustomGroup"},"POST /api/model/customGroups")),(0,i.kt)("p",{parentName:"li"},"You want to create the custom group with filter elements using the ",(0,i.kt)("inlineCode",{parentName:"p"},"\u201ctree\u201d")," format for the ",(0,i.kt)("inlineCode",{parentName:"p"},'"qualifications\u201d'),". More examples of creating a custom group are listed below."))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},'To create a custom group with filter elements, in the request body, the filter elements\' "qualification" needs to be in either "tree" or "tokens" format. If both are provided, only "tree" is used.'),(0,i.kt)("p",{parentName:"admonition"},"When creating an attribute element list qualification, only the \u201ctree\u201c format is supported."),(0,i.kt)("p",{parentName:"admonition"},"When creating a metric qualification with output level, only the \u201ctree\u201c format is supported.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},'If the \'tree\' format is used, the custom expressions, "expression", needs to be in either "tree" or "tokens" format. If both are provided, only "tree" is used.'),(0,i.kt)("p",{parentName:"admonition"},'When creating a qualification with inline custom expressions, only the "tree" format is supported.')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you are constructing the POST custom group request body based on the response of the GET custom group call of an existing custom group, note that any embedded objects (",(0,i.kt)("inlineCode",{parentName:"p"},'"isEmbedded":true"'),") cannot be used to create a new custom group, as the embedded objects are only \u201clocal\u201c to its owner (the existing custom group).")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "2pe4p1s51uihq7p9fa5svblv59"\n"X-MSTR-MS-Changeset": "56E9618A3D954783A2ABDE6E7F4ED4EC"\n')),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "custom_group",\n    "name": "Age Groups",\n    "description": "Custom group defined with attribute qualification on Customer Age.",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "options": {\n    "hierarchyDisplay": true,\n    "subtotalsDisplay": false,\n    "elementHeaderAboveChild": true\n  },\n  "elements": [\n    {\n      "name": "< 25",\n      "displayOption": "element",\n      "qualification": {\n        "text": "({Customer Age} (ID) < 25)",\n        "tree": {\n          "type": "predicate_form_qualification",\n          "predicateText": "({Customer Age} (ID) < 25)",\n          "predicateTree": {\n            "function": "less",\n            "parameters": [\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "25.0"\n                }\n              }\n            ],\n            "attribute": {\n              "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",\n              "subType": "attribute",\n              "name": "Customer Age"\n            },\n            "form": {\n              "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n              "subType": "attribute_form_system",\n              "name": "ID"\n            }\n          }\n        }\n      }\n    },\n    {\n      "name": "25-35",\n      "displayOption": "element",\n      "qualification": {\n        "text": "({Customer Age} (ID) Between 25 and 35)",\n        "tree": {\n          "type": "predicate_form_qualification",\n          "predicateText": "({Customer Age} (ID) Between 25 and 35)",\n          "predicateTree": {\n            "function": "between",\n            "parameters": [\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "25.0"\n                }\n              },\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "35.0"\n                }\n              }\n            ],\n            "attribute": {\n              "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",\n              "subType": "attribute",\n              "name": "Customer Age"\n            },\n            "form": {\n              "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n              "subType": "attribute_form_system",\n              "name": "ID"\n            }\n          }\n        }\n      }\n    },\n    {\n      "name": "36-50",\n      "displayOption": "element",\n      "qualification": {\n        "text": "({Customer Age} (ID) Between 36 and 50)",\n        "tree": {\n          "type": "predicate_form_qualification",\n          "predicateText": "({Customer Age} (ID) Between 36 and 50)",\n          "predicateTree": {\n            "function": "between",\n            "parameters": [\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "36.0"\n                }\n              },\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "50.0"\n                }\n              }\n            ],\n            "attribute": {\n              "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",\n              "subType": "attribute",\n              "name": "Customer Age"\n            },\n            "form": {\n              "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n              "subType": "attribute_form_system",\n              "name": "ID"\n            }\n          }\n        }\n      }\n    },\n    {\n      "name": "51-60",\n      "displayOption": "element",\n      "qualification": {\n        "text": "({Customer Age} (ID) Between 51 and 60)",\n        "tree": {\n          "type": "predicate_form_qualification",\n          "predicateText": "({Customer Age} (ID) Between 51 and 60)",\n          "predicateTree": {\n            "function": "between",\n            "parameters": [\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "51.0"\n                }\n              },\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "60.0"\n                }\n              }\n            ],\n            "attribute": {\n              "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",\n              "subType": "attribute",\n              "name": "Customer Age"\n            },\n            "form": {\n              "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n              "subType": "attribute_form_system",\n              "name": "ID"\n            }\n          }\n        }\n      }\n    },\n    {\n      "name": "> 60",\n      "displayOption": "element",\n      "qualification": {\n        "text": "({Customer Age} (ID) > 60)",\n        "tree": {\n          "type": "predicate_form_qualification",\n          "predicateText": "({Customer Age} (ID) > 60)",\n          "predicateTree": {\n            "function": "greater",\n            "parameters": [\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "60.0"\n                }\n              }\n            ],\n            "attribute": {\n              "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",\n              "subType": "attribute",\n              "name": "Customer Age"\n            },\n            "form": {\n              "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n              "subType": "attribute_form_system",\n              "name": "ID"\n            }\n          }\n        }\n      }\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/customGroups" -H "accept: application/json" -H "X-MSTR-AuthToken: 2pe4p1s51uihq7p9fa5svblv59" -H "X-MSTR-MS-Changeset: 56E9618A3D954783A2ABDE6E7F4ED4EC" -H "Content-Type: application/json" -d "{\\"information\\":{\\"subType\\":\\"custom_group\\",\\"name\\":\\"Age Groups\\",\\"description\\":\\"Custom group defined with attribute qualification on Customer Age.\\",\\"destinationFolderId\\":\\"98FE182C2A10427EACE0CD30B6768258\\"},\\"options\\":{\\"hierarchyDisplay\\":true,\\"subtotalsDisplay\\":false,\\"elementHeaderAboveChild\\":true},\\"elements\\":[{\\"name\\":\\"< 25\\",\\"displayOption\\":\\"element\\",\\"qualification\\":{\\"text\\":\\"({Customer Age} (ID) < 25)\\",\\"tree\\":{\\"type\\":\\"predicate_form_qualification\\",\\"predicateText\\":\\"({Customer Age} (ID) < 25)\\",\\"predicateTree\\":{\\"function\\":\\"less\\",\\"parameters\\":[{\\"parameterType\\":\\"constant\\",\\"constant\\":{\\"type\\":\\"double\\",\\"value\\":\\"25.0\\"}}],\\"attribute\\":{\\"objectId\\":\\"6E069E4C11D3E4E41000E887EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Customer Age\\"},\\"form\\":{\\"objectId\\":\\"45C11FA478E745FEA08D781CEA190FE5\\",\\"subType\\":\\"attribute_form_system\\",\\"name\\":\\"ID\\"}}}}},{\\"name\\":\\"25-35\\",\\"displayOption\\":\\"element\\",\\"qualification\\":{\\"text\\":\\"({Customer Age} (ID) Between 25 and 35)\\",\\"tree\\":{\\"type\\":\\"predicate_form_qualification\\",\\"predicateText\\":\\"({Customer Age} (ID) Between 25 and 35)\\",\\"predicateTree\\":{\\"function\\":\\"between\\",\\"parameters\\":[{\\"parameterType\\":\\"constant\\",\\"constant\\":{\\"type\\":\\"double\\",\\"value\\":\\"25.0\\"}},{\\"parameterType\\":\\"constant\\",\\"constant\\":{\\"type\\":\\"double\\",\\"value\\":\\"35.0\\"}}],\\"attribute\\":{\\"objectId\\":\\"6E069E4C11D3E4E41000E887EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Customer Age\\"},\\"form\\":{\\"objectId\\":\\"45C11FA478E745FEA08D781CEA190FE5\\",\\"subType\\":\\"attribute_form_system\\",\\"name\\":\\"ID\\"}}}}},{\\"name\\":\\"36-50\\",\\"displayOption\\":\\"element\\",\\"qualification\\":{\\"text\\":\\"({Customer Age} (ID) Between 36 and 50)\\",\\"tree\\":{\\"type\\":\\"predicate_form_qualification\\",\\"predicateText\\":\\"({Customer Age} (ID) Between 36 and 50)\\",\\"predicateTree\\":{\\"function\\":\\"between\\",\\"parameters\\":[{\\"parameterType\\":\\"constant\\",\\"constant\\":{\\"type\\":\\"double\\",\\"value\\":\\"36.0\\"}},{\\"parameterType\\":\\"constant\\",\\"constant\\":{\\"type\\":\\"double\\",\\"value\\":\\"50.0\\"}}],\\"attribute\\":{\\"objectId\\":\\"6E069E4C11D3E4E41000E887EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Customer Age\\"},\\"form\\":{\\"objectId\\":\\"45C11FA478E745FEA08D781CEA190FE5\\",\\"subType\\":\\"attribute_form_system\\",\\"name\\":\\"ID\\"}}}}},{\\"name\\":\\"51-60\\",\\"displayOption\\":\\"element\\",\\"qualification\\":{\\"text\\":\\"({Customer Age} (ID) Between 51 and 60)\\",\\"tree\\":{\\"type\\":\\"predicate_form_qualification\\",\\"predicateText\\":\\"({Customer Age} (ID) Between 51 and 60)\\",\\"predicateTree\\":{\\"function\\":\\"between\\",\\"parameters\\":[{\\"parameterType\\":\\"constant\\",\\"constant\\":{\\"type\\":\\"double\\",\\"value\\":\\"51.0\\"}},{\\"parameterType\\":\\"constant\\",\\"constant\\":{\\"type\\":\\"double\\",\\"value\\":\\"60.0\\"}}],\\"attribute\\":{\\"objectId\\":\\"6E069E4C11D3E4E41000E887EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Customer Age\\"},\\"form\\":{\\"objectId\\":\\"45C11FA478E745FEA08D781CEA190FE5\\",\\"subType\\":\\"attribute_form_system\\",\\"name\\":\\"ID\\"}}}}},{\\"name\\":\\"> 60\\",\\"displayOption\\":\\"element\\",\\"qualification\\":{\\"text\\":\\"({Customer Age} (ID) > 60)\\",\\"tree\\":{\\"type\\":\\"predicate_form_qualification\\",\\"predicateText\\":\\"({Customer Age} (ID) > 60)\\",\\"predicateTree\\":{\\"function\\":\\"greater\\",\\"parameters\\":[{\\"parameterType\\":\\"constant\\",\\"constant\\":{\\"type\\":\\"double\\",\\"value\\":\\"60.0\\"}}],\\"attribute\\":{\\"objectId\\":\\"6E069E4C11D3E4E41000E887EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Customer Age\\"},\\"form\\":{\\"objectId\\":\\"45C11FA478E745FEA08D781CEA190FE5\\",\\"subType\\":\\"attribute_form_system\\",\\"name\\":\\"ID\\"}}}}}]}"\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,"You can view the new custom group's definition in the body of the response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "versionId": "BA3053F1F7C948E087E1CB19173BB3C9",\n    "primaryLocale": "en-US",\n    "objectId": "B805ADAFF8394F35BB41DDC270B5B33E",\n    "subType": "custom_group",\n    "name": "Age Groups",\n    "description": "Custom group defined with attribute qualification on Customer Age.",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "options": {\n    "hierarchyDisplay": true,\n    "subtotalsDisplay": false,\n    "elementHeaderAboveChild": true\n  },\n  "elements": [\n    {\n      "id": "484A215D285348739BD509BE49FCEDD7",\n      "name": "< 25",\n      "displayOption": "element",\n      "qualification": {\n        "text": "({Customer Age} (ID) < 25)",\n        "tree": {\n          "type": "predicate_form_qualification",\n          "predicateId": "484A215D285348739BD509BE49FCEDD7",\n          "predicateText": "({Customer Age} (ID) < 25)",\n          "predicateTree": {\n            "function": "less",\n            "parameters": [\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "25.0"\n                }\n              }\n            ],\n            "attribute": {\n              "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",\n              "subType": "attribute",\n              "name": "Customer Age"\n            },\n            "form": {\n              "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n              "subType": "attribute_form_system",\n              "name": "ID"\n            }\n          }\n        }\n      }\n    },\n    {\n      "id": "F8778C92067447698C9C30A5C9ED2D31",\n      "name": "25-35",\n      "displayOption": "element",\n      "qualification": {\n        "text": "({Customer Age} (ID) Between 25 and 35)",\n        "tree": {\n          "type": "predicate_form_qualification",\n          "predicateId": "F8778C92067447698C9C30A5C9ED2D31",\n          "predicateText": "({Customer Age} (ID) Between 25 and 35)",\n          "predicateTree": {\n            "function": "between",\n            "parameters": [\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "25.0"\n                }\n              },\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "35.0"\n                }\n              }\n            ],\n            "attribute": {\n              "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",\n              "subType": "attribute",\n              "name": "Customer Age"\n            },\n            "form": {\n              "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n              "subType": "attribute_form_system",\n              "name": "ID"\n            }\n          }\n        }\n      }\n    },\n    {\n      "id": "B43DA5CE369648CAAC84586079F0BC6D",\n      "name": "36-50",\n      "displayOption": "element",\n      "qualification": {\n        "text": "({Customer Age} (ID) Between 36 and 50)",\n        "tree": {\n          "type": "predicate_form_qualification",\n          "predicateId": "B43DA5CE369648CAAC84586079F0BC6D",\n          "predicateText": "({Customer Age} (ID) Between 36 and 50)",\n          "predicateTree": {\n            "function": "between",\n            "parameters": [\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "36.0"\n                }\n              },\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "50.0"\n                }\n              }\n            ],\n            "attribute": {\n              "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",\n              "subType": "attribute",\n              "name": "Customer Age"\n            },\n            "form": {\n              "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n              "subType": "attribute_form_system",\n              "name": "ID"\n            }\n          }\n        }\n      }\n    },\n    {\n      "id": "68B1A3FA73FC4DE6BAEB197888AB6E40",\n      "name": "51-60",\n      "displayOption": "element",\n      "qualification": {\n        "text": "({Customer Age} (ID) Between 51 and 60)",\n        "tree": {\n          "type": "predicate_form_qualification",\n          "predicateId": "68B1A3FA73FC4DE6BAEB197888AB6E40",\n          "predicateText": "({Customer Age} (ID) Between 51 and 60)",\n          "predicateTree": {\n            "function": "between",\n            "parameters": [\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "51.0"\n                }\n              },\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "60.0"\n                }\n              }\n            ],\n            "attribute": {\n              "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",\n              "subType": "attribute",\n              "name": "Customer Age"\n            },\n            "form": {\n              "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n              "subType": "attribute_form_system",\n              "name": "ID"\n            }\n          }\n        }\n      }\n    },\n    {\n      "id": "730CFDA3004A42AFA16D0359C78D2968",\n      "name": "> 60",\n      "displayOption": "element",\n      "qualification": {\n        "text": "({Customer Age} (ID) > 60)",\n        "tree": {\n          "type": "predicate_form_qualification",\n          "predicateId": "730CFDA3004A42AFA16D0359C78D2968",\n          "predicateText": "({Customer Age} (ID) > 60)",\n          "predicateTree": {\n            "function": "greater",\n            "parameters": [\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "60.0"\n                }\n              }\n            ],\n            "attribute": {\n              "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",\n              "subType": "attribute",\n              "name": "Customer Age"\n            },\n            "form": {\n              "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n              "subType": "attribute_form_system",\n              "name": "ID"\n            }\n          }\n        }\n      }\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Response Code: 201 (A new custom group is created successfully in the changeset.)"),(0,i.kt)("h2",{id:"more-samples"},"More samples"),(0,i.kt)("p",null,"The following are additional examples for creating a custom group object."),(0,i.kt)("p",null,"Creating a custom group filter element is similar to creating a filter. The sample JSON can be found in ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/manage-filter-objects/create-a-filter-object"},"Create a filter object"),". The following are sample JSONs for creating a custom group with banding elements."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Each custom group element can contain either one or more filter qualification predicates, or one banding predicate."),(0,i.kt)("p",{parentName:"admonition"},"For custom group filter elements, an output level is required for a metric qualification.")),(0,i.kt)("h3",{id:"custom-group-with-band-count"},"Custom group with band count"),(0,i.kt)("p",null,"Create a custom group with a band count element."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'"type"'),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"predicate_banding_count"')),(0,i.kt)("p",null,"In this sample, you want to create a custom group with a band element that slices metric ",(0,i.kt)("inlineCode",{parentName:"p"},"\u201cRunning Revenue Contribution to All Customers Abs.\u201c")," values into 5 equal bands for the range of ","[0,1]"," and appear as rows on a report. You define the range by setting the start at and stop at values. You also set the band count, which is the number of bands to use."),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "custom_group",\n    "name": "Customers Value Band Count",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "options": {\n    "hierarchyDisplay": true,\n    "subtotalsDisplay": false,\n    "elementHeaderAboveChild": true\n  },\n  "elements": [\n    {\n      "name": "All Customers",\n      "displayOption": "element",\n      "qualification": {\n        "text": "Set of  Customer where BandingC({Running Revenue Contribution to All Customers Abs.},0,1,5)",\n        "tree": {\n          "type": "predicate_banding_count",\n          "predicateText": "Set of  Customer where BandingC({Running Revenue Contribution to All Customers Abs.},0,1,5)",\n          "predicateTree": {\n            "level": [\n              {\n                "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",\n                "subType": "attribute",\n                "name": "Customer"\n              }\n            ],\n            "metric": {\n              "objectId": "4C051BCD11D3E877C000B3B2D86C964F",\n              "subType": "metric",\n              "name": "Running Revenue Contribution to All Customers Abs."\n            },\n            "bandMetricFunction": "value",\n            "bandNames": [\n              "Top Quintile",\n              "Second Quintile",\n              "Third Quintile",\n              "Fourth Quintile",\n              "Bottom Quintile"\n            ],\n            "start": {\n              "type": "double",\n              "value": "0.0"\n            },\n            "stop": {\n              "type": "double",\n              "value": "1.0"\n            },\n            "count": {\n              "type": "double",\n              "value": "5.0"\n            }\n          }\n        }\n      }\n    }\n  ]\n}\n')),(0,i.kt)("h3",{id:"custom-group-with-band-size"},"Custom group with band size"),(0,i.kt)("p",null,"Create a custom group with a band size element."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'"type"'),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"predicate_banding_size"')),(0,i.kt)("p",null,"In this sample, you want to create a custom group with a band element that slices a range of metric ",(0,i.kt)("inlineCode",{parentName:"p"},"\u201cRunning Revenue Contribution to All Customers Abs.\u201c")," values into a number of bands that appear as rows on a report. You define the range by setting the start at and stop at values. You also set the step size, which is the size of each band."),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "custom_group",\n    "name": "Customers Value Band Size",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "options": {\n    "hierarchyDisplay": true,\n    "subtotalsDisplay": false,\n    "elementHeaderAboveChild": true\n  },\n  "elements": [\n    {\n      "name": "All Customers",\n      "displayOption": "element",\n      "qualification": {\n        "text": "Set of  Customer where Banding({Running Revenue Contribution to All Customers Abs.},0,1,0.2)",\n        "tree": {\n          "type": "predicate_banding_size",\n          "predicateText": "Set of  Customer where Banding({Running Revenue Contribution to All Customers Abs.},0,1,0.2)",\n          "predicateTree": {\n            "level": [\n              {\n                "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",\n                "subType": "attribute",\n                "name": "Customer"\n              }\n            ],\n            "metric": {\n              "objectId": "4C051BCD11D3E877C000B3B2D86C964F",\n              "subType": "metric",\n              "name": "Running Revenue Contribution to All Customers Abs."\n            },\n            "bandMetricFunction": "value",\n            "bandNames": [\n              "Top Quintile",\n              "Second Quintile",\n              "Third Quintile",\n              "Fourth Quintile",\n              "Bottom Quintile"\n            ],\n            "start": {\n              "type": "double",\n              "value": "0.0"\n            },\n            "stop": {\n              "type": "double",\n              "value": "1.0"\n            },\n            "size": {\n              "type": "double",\n              "value": "0.2"\n            }\n          }\n        }\n      }\n    }\n  ]\n}\n')),(0,i.kt)("h3",{id:"custom-group-with-banding-points"},"Custom group with banding points"),(0,i.kt)("p",null,"Create a custom group with a banding points element."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'"type"'),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"predicate_banding_points"')," In this sample, you want to create a custom group with a band element that slices a range of metric ",(0,i.kt)("inlineCode",{parentName:"p"},"\u201cRunning Revenue Contribution to All Customers Abs.\u201c")," values into a number of bands that appear as rows on a report. You manually define each band, which allows you to produce bands of varying sizes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "custom_group",\n    "name": "Customers Value Points Banding",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "options": {\n    "hierarchyDisplay": true,\n    "subtotalsDisplay": false,\n    "elementHeaderAboveChild": true\n  },\n  "elements": [\n    {\n      "name": "All Customers",\n      "displayOption": "element",\n      "qualification": {\n        "text": "Set of  Customer where BandingP({Running Revenue Contribution to All Customers Abs.},0,0.2,0.4,0.6,0.8,1)",\n        "tree": {\n          "type": "predicate_banding_points",\n          "predicateText": "Set of  Customer where BandingP({Running Revenue Contribution to All Customers Abs.},0,0.2,0.4,0.6,0.8,1)",\n          "predicateTree": {\n            "level": [\n              {\n                "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",\n                "subType": "attribute",\n                "name": "Customer"\n              }\n            ],\n            "metric": {\n              "objectId": "4C051BCD11D3E877C000B3B2D86C964F",\n              "subType": "metric",\n              "name": "Running Revenue Contribution to All Customers Abs."\n            },\n            "bandMetricFunction": "value",\n            "bandNames": ["bottom 20%", "20%-40%", "40%-60%", "60%-80%", "Top 20%"],\n            "points": [0, 0.2, 0.4, 0.6, 0.8, 1]\n          }\n        }\n      }\n    }\n  ]\n}\n')),(0,i.kt)("h3",{id:"custom-group-with-metric-value-banding"},"Custom group with metric value banding"),(0,i.kt)("p",null,"Create a custom group with a metric value banding element."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'"type"'),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"predicate_banding_distinct"')),(0,i.kt)("p",null,"In this sample, you want to create a custom group with a band element that creates a separate band for each metric ",(0,i.kt)("inlineCode",{parentName:"p"},"\u201cRunning Revenue Contribution to All Customers Abs.\u201c")," value. The bands appear as rows on a report."),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "custom_group",\n    "name": "Customers Value Metric Value Banding",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "options": {\n    "hierarchyDisplay": true,\n    "subtotalsDisplay": false,\n    "elementHeaderAboveChild": true\n  },\n  "elements": [\n    {\n      "name": "All customer",\n      "displayOption": "element",\n      "qualification": {\n        "text": "Set of  Customer where BandingM({Running Revenue Contribution to All Customers Abs.})",\n        "tree": {\n          "type": "predicate_banding_distinct",\n          "predicateText": "Set of  Customer where BandingM({Running Revenue Contribution to All Customers Abs.})",\n          "predicateTree": {\n            "level": [\n              {\n                "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",\n                "subType": "attribute",\n                "name": "Customer"\n              }\n            ],\n            "metric": {\n              "objectId": "4C051BCD11D3E877C000B3B2D86C964F",\n              "subType": "metric",\n              "name": "Running Revenue Contribution to All Customers Abs."\n            },\n            "bandMetricFunction": "value"\n          }\n        }\n      }\n    }\n  ]\n}\n')))}C.isMDXComponent=!0}}]);