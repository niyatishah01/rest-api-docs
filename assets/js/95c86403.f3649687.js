"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[2581],{3905:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return m}});var o=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,o,i=function(n,e){if(null==n)return{};var t,o,i={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var d=o.createContext({}),l=function(n){var e=o.useContext(d),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},c=function(n){var e=l(n.components);return o.createElement(d.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,d=n.parentName,c=s(n,["components","mdxType","originalType","parentName"]),u=l(t),m=i,b=u["".concat(d,".").concat(m)]||u[m]||p[m]||a;return t?o.createElement(b,r(r({ref:e},c),{},{components:t})):o.createElement(b,r({ref:e},c))}));function m(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,r=new Array(a);r[0]=u;var s={};for(var d in e)hasOwnProperty.call(e,d)&&(s[d]=e[d]);s.originalType=n,s.mdxType="string"==typeof n?n:i,r[1]=s;for(var l=2;l<a;l++)r[l]=t[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},85083:function(n,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return D},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return u}});var o,i=t(83117),a=t(80102),r=(t(67294),t(3905)),s=["components"],d={title:"Retrieve a consolidation's definition",sidebar_label:"Retrieve a consolidation's definition",description:"You can use REST APIs to retrieve the definition for a consolidation through the Modeling service."},l=void 0,c={unversionedId:"common-workflows/modeling/manage-consolidation-objects/retrieve-a-consolidations-definition",id:"common-workflows/modeling/manage-consolidation-objects/retrieve-a-consolidations-definition",title:"Retrieve a consolidation's definition",description:"You can use REST APIs to retrieve the definition for a consolidation through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-consolidation-objects/retrieve-a-consolidations-definition.md",sourceDirName:"common-workflows/modeling/manage-consolidation-objects",slug:"/common-workflows/modeling/manage-consolidation-objects/retrieve-a-consolidations-definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-consolidation-objects/retrieve-a-consolidations-definition",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-consolidation-objects/retrieve-a-consolidations-definition.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1677861063,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{title:"Retrieve a consolidation's definition",sidebar_label:"Retrieve a consolidation's definition",description:"You can use REST APIs to retrieve the definition for a consolidation through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Manage consolidation objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-consolidation-objects/"},next:{title:"Create a consolidation",permalink:"/rest-api-docs/common-workflows/modeling/manage-consolidation-objects/create-a-consolidation-object"}},p={},u=[{value:"Retrieve a consolidation&#39;s definition",id:"retrieve-a-consolidations-definition",level:2},{value:"Retrieve a consolidation&#39;s definition within a changeset",id:"retrieve-a-consolidations-definition-within-a-changeset",level:2}],m=(o="Available",function(n){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)}),b={toc:u};function D(n){var e=n.components,t=(0,a.Z)(n,s);return(0,r.kt)("wrapper",(0,i.Z)({},b,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(m,{since:"2021 Update 2",mdxType:"Available"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-d0ad5e63-76a5-47c8-b185-1f5781a443f6?ctx=documentation"},"REST API Playground"),"."),(0,r.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,r.kt)("p",null,"You can use REST APIs to retrieve the definition for a consolidation through the Modeling service. This topic includes the following workflows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#retrieve-a-consolidations-definition"},"Retrieve a consolidation's definition")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#retrieve-a-consolidations-definition-within-a-changeset"},"Retrieve a consolidation's definition within a changeset"))),(0,r.kt)("h2",{id:"retrieve-a-consolidations-definition"},"Retrieve a consolidation's definition"),(0,r.kt)("p",null,"You want to get the definition of a consolidation object. The object ID of the consolidation is B9E7FD5911D3E936C000B3B2D86C964F in the MicroStrategy Tutorial project. The project ID is ",(0,r.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,r.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,r.kt)("p",null,"Get the consolidation's definition using ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Consolidations/ms-getConsolidation"},"GET /api/model/consolidations/{consolidationId}"),"."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "lmiouhsue1osvl8uf2vuvlbcfp"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Consolidations/ms-getConsolidation" -H "accept: application/json" -H "X-MSTR-AuthToken: lmiouhsue1osvl8uf2vuvlbcfp" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("p",null,"You can view the consolidation's definition in the body of the response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2001-01-02T20:42:45.000Z",\n    "dateModified": "2021-05-24T12:12:07.425Z",\n    "versionId": "AE56DC0C4D219076865D2E8E9539278C",\n    "primaryLocale": "en-US",\n    "objectId": "B9E7FD5911D3E936C000B3B2D86C964F",\n    "subType": "consolidation",\n    "name": "Customer Geography",\n    "description": "Consolidation based on Customer Regions"\n  },\n  "elements": [\n    {\n      "id": "B9E7FD7111D3E936C000B3B2D86C964F",\n      "name": "Northeast",\n      "type": "calculation",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "expression": {\n        "text": "Northeast",\n        "tree": {\n          "type": "elements_object",\n          "elements": [\n            {\n              "display": "Northeast",\n              "elementId": "h1",\n              "attribute": {\n                "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",\n                "subType": "attribute",\n                "name": "Customer Region"\n              }\n            }\n          ]\n        }\n      }\n    },\n    {\n      "id": "B9E7FD7011D3E936C000B3B2D86C964F",\n      "name": "South",\n      "type": "calculation",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "expression": {\n        "text": "(South + Southeast) + Mid-Atlantic",\n        "tree": {\n          "function": "plus",\n          "children": [\n            {\n              "function": "plus",\n              "children": [\n                {\n                  "type": "elements_object",\n                  "elements": [\n                    {\n                      "display": "South",\n                      "elementId": "h5",\n                      "attribute": {\n                        "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",\n                        "subType": "attribute",\n                        "name": "Customer Region"\n                      }\n                    }\n                  ]\n                },\n                {\n                  "type": "elements_object",\n                  "elements": [\n                    {\n                      "display": "Southeast",\n                      "elementId": "h3",\n                      "attribute": {\n                        "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",\n                        "subType": "attribute",\n                        "name": "Customer Region"\n                      }\n                    }\n                  ]\n                }\n              ],\n              "type": "operator"\n            },\n            {\n              "type": "elements_object",\n              "elements": [\n                {\n                  "display": "Mid-Atlantic",\n                  "elementId": "h2",\n                  "attribute": {\n                    "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",\n                    "subType": "attribute",\n                    "name": "Customer Region"\n                  }\n                }\n              ]\n            }\n          ],\n          "type": "operator"\n        }\n      }\n    },\n    {\n      "id": "B9E7FD6D11D3E936C000B3B2D86C964F",\n      "name": "Central",\n      "type": "calculation",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "expression": {\n        "text": "Central",\n        "tree": {\n          "type": "elements_object",\n          "elements": [\n            {\n              "display": "Central",\n              "elementId": "h4",\n              "attribute": {\n                "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",\n                "subType": "attribute",\n                "name": "Customer Region"\n              }\n            }\n          ]\n        }\n      }\n    },\n    {\n      "id": "B9E7FD6C11D3E936C000B3B2D86C964F",\n      "name": "West",\n      "type": "calculation",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "expression": {\n        "text": "Northwest + Southwest",\n        "tree": {\n          "function": "plus",\n          "children": [\n            {\n              "type": "elements_object",\n              "elements": [\n                {\n                  "display": "Northwest",\n                  "elementId": "h6",\n                  "attribute": {\n                    "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",\n                    "subType": "attribute",\n                    "name": "Customer Region"\n                  }\n                }\n              ]\n            },\n            {\n              "type": "elements_object",\n              "elements": [\n                {\n                  "display": "Southwest",\n                  "elementId": "h7",\n                  "attribute": {\n                    "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",\n                    "subType": "attribute",\n                    "name": "Customer Region"\n                  }\n                }\n              ]\n            }\n          ],\n          "type": "operator"\n        }\n      }\n    },\n    {\n      "id": "B9E7FD6A11D3E936C000B3B2D86C964F",\n      "name": "US",\n      "type": "calculation",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "expression": {\n        "text": "((Northeast + South) + Central) + West",\n        "tree": {\n          "function": "plus",\n          "children": [\n            {\n              "function": "plus",\n              "children": [\n                {\n                  "function": "plus",\n                  "children": [\n                    {\n                      "type": "object_reference",\n                      "target": {\n                        "objectId": "B9E7FD7111D3E936C000B3B2D86C964F",\n                        "subType": "consolidation_element",\n                        "name": "Northeast",\n                        "isEmbedded": true\n                      },\n                      "isIndependent": 1\n                    },\n                    {\n                      "type": "object_reference",\n                      "target": {\n                        "objectId": "B9E7FD7011D3E936C000B3B2D86C964F",\n                        "subType": "consolidation_element",\n                        "name": "South",\n                        "isEmbedded": true\n                      },\n                      "isIndependent": 1\n                    }\n                  ],\n                  "type": "operator"\n                },\n                {\n                  "type": "object_reference",\n                  "target": {\n                    "objectId": "B9E7FD6D11D3E936C000B3B2D86C964F",\n                    "subType": "consolidation_element",\n                    "name": "Central",\n                    "isEmbedded": true\n                  },\n                  "isIndependent": 1\n                }\n              ],\n              "type": "operator"\n            },\n            {\n              "type": "object_reference",\n              "target": {\n                "objectId": "B9E7FD6C11D3E936C000B3B2D86C964F",\n                "subType": "consolidation_element",\n                "name": "West",\n                "isEmbedded": true\n              },\n              "isIndependent": 1\n            }\n          ],\n          "type": "operator"\n        }\n      }\n    },\n    {\n      "id": "B9E7FD6511D3E936C000B3B2D86C964F",\n      "name": "Northeast / US",\n      "type": "calculation",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "expression": {\n        "text": "Northeast / US",\n        "tree": {\n          "function": "divide",\n          "children": [\n            {\n              "type": "object_reference",\n              "target": {\n                "objectId": "B9E7FD7111D3E936C000B3B2D86C964F",\n                "subType": "consolidation_element",\n                "name": "Northeast",\n                "isEmbedded": true\n              },\n              "isIndependent": 1\n            },\n            {\n              "type": "object_reference",\n              "target": {\n                "objectId": "B9E7FD6A11D3E936C000B3B2D86C964F",\n                "subType": "consolidation_element",\n                "name": "US",\n                "isEmbedded": true\n              },\n              "isIndependent": 1\n            }\n          ],\n          "type": "operator"\n        }\n      }\n    },\n    {\n      "id": "B9E7FD5F11D3E936C000B3B2D86C964F",\n      "name": "South / US",\n      "type": "calculation",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "expression": {\n        "text": "South / US",\n        "tree": {\n          "function": "divide",\n          "children": [\n            {\n              "type": "object_reference",\n              "target": {\n                "objectId": "B9E7FD7011D3E936C000B3B2D86C964F",\n                "subType": "consolidation_element",\n                "name": "South",\n                "isEmbedded": true\n              },\n              "isIndependent": 1\n            },\n            {\n              "type": "object_reference",\n              "target": {\n                "objectId": "B9E7FD6A11D3E936C000B3B2D86C964F",\n                "subType": "consolidation_element",\n                "name": "US",\n                "isEmbedded": true\n              },\n              "isIndependent": 1\n            }\n          ],\n          "type": "operator"\n        }\n      }\n    },\n    {\n      "id": "B9E7FD6211D3E936C000B3B2D86C964F",\n      "name": "Central / US",\n      "type": "calculation",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "expression": {\n        "text": "Central / US",\n        "tree": {\n          "function": "divide",\n          "children": [\n            {\n              "type": "object_reference",\n              "target": {\n                "objectId": "B9E7FD6D11D3E936C000B3B2D86C964F",\n                "subType": "consolidation_element",\n                "name": "Central",\n                "isEmbedded": true\n              },\n              "isIndependent": 1\n            },\n            {\n              "type": "object_reference",\n              "target": {\n                "objectId": "B9E7FD6A11D3E936C000B3B2D86C964F",\n                "subType": "consolidation_element",\n                "name": "US",\n                "isEmbedded": true\n              },\n              "isIndependent": 1\n            }\n          ],\n          "type": "operator"\n        }\n      }\n    },\n    {\n      "id": "B9E7FD5C11D3E936C000B3B2D86C964F",\n      "name": "West / US",\n      "type": "calculation",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "expression": {\n        "text": "West / US",\n        "tree": {\n          "function": "divide",\n          "children": [\n            {\n              "type": "object_reference",\n              "target": {\n                "objectId": "B9E7FD6C11D3E936C000B3B2D86C964F",\n                "subType": "consolidation_element",\n                "name": "West",\n                "isEmbedded": true\n              },\n              "isIndependent": 1\n            },\n            {\n              "type": "object_reference",\n              "target": {\n                "objectId": "B9E7FD6A11D3E936C000B3B2D86C964F",\n                "subType": "consolidation_element",\n                "name": "US",\n                "isEmbedded": true\n              },\n              "isIndependent": 1\n            }\n          ],\n          "type": "operator"\n        }\n      }\n    }\n  ],\n  "subtotal": "disable"\n}\n')),(0,r.kt)("p",null,"Response Code: 200 (The consolidation's definition is returned successfully.)"),(0,r.kt)("h2",{id:"retrieve-a-consolidations-definition-within-a-changeset"},"Retrieve a consolidation's definition within a changeset"),(0,r.kt)("p",null,'You want the definition of the consolidation object "Customer Geography". The object ID of the consolidation is B9E7FD5911D3E936C000B3B2D86C964F in the MicroStrategy Tutorial project. The project ID is B7CA92F04B9FAE8D941C3E9B7E0CD754.'),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),"."),(0,r.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/projects"),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),". If you plan to use the response of ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/model/consolidation/{consolidationId}")," to create a new consolidation or update the consolidation's definition, it is recommended to associate all requests to one changeset.")),(0,r.kt)("p",null,"Get the consolidation's definition within a changeset using ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Consolidations/ms-getConsolidation"},"GET /api/model/consolidations/{consolidationId}"),"."),(0,r.kt)("p",null,"Sample Request Header"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Consolidations/ms-getConsolidation" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2001-01-02T20:42:45.000Z",\n    "dateModified": "2021-05-24T12:12:07.425Z",\n    "versionId": "AE56DC0C4D219076865D2E8E9539278C",\n    "primaryLocale": "en-US",\n    "objectId": "B9E7FD5911D3E936C000B3B2D86C964F",\n    "subType": "consolidation",\n    "name": "Customer Geography",\n    "description": "Consolidation based on Customer Regions"\n  },\n  "elements": [\n    {\n      "id": "B9E7FD7111D3E936C000B3B2D86C964F",\n      "name": "Northeast",\n      "type": "calculation",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "expression": {\n        "text": "Northeast",\n        "tree": {\n          "type": "elements_object",\n          "elements": [\n            {\n              "display": "Northeast",\n              "elementId": "h1",\n              "attribute": {\n                "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",\n                "subType": "attribute",\n                "name": "Customer Region"\n              }\n            }\n          ]\n        }\n      }\n    },\n    {\n      "id": "B9E7FD7011D3E936C000B3B2D86C964F",\n      "name": "South",\n      "type": "calculation",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "expression": {\n        "text": "(South + Southeast) + Mid-Atlantic",\n        "tree": {\n          "function": "plus",\n          "children": [\n            {\n              "function": "plus",\n              "children": [\n                {\n                  "type": "elements_object",\n                  "elements": [\n                    {\n                      "display": "South",\n                      "elementId": "h5",\n                      "attribute": {\n                        "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",\n                        "subType": "attribute",\n                        "name": "Customer Region"\n                      }\n                    }\n                  ]\n                },\n                {\n                  "type": "elements_object",\n                  "elements": [\n                    {\n                      "display": "Southeast",\n                      "elementId": "h3",\n                      "attribute": {\n                        "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",\n                        "subType": "attribute",\n                        "name": "Customer Region"\n                      }\n                    }\n                  ]\n                }\n              ],\n              "type": "operator"\n            },\n            {\n              "type": "elements_object",\n              "elements": [\n                {\n                  "display": "Mid-Atlantic",\n                  "elementId": "h2",\n                  "attribute": {\n                    "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",\n                    "subType": "attribute",\n                    "name": "Customer Region"\n                  }\n                }\n              ]\n            }\n          ],\n          "type": "operator"\n        }\n      }\n    },\n    {\n      "id": "B9E7FD6D11D3E936C000B3B2D86C964F",\n      "name": "Central",\n      "type": "calculation",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "expression": {\n        "text": "Central",\n        "tree": {\n          "type": "elements_object",\n          "elements": [\n            {\n              "display": "Central",\n              "elementId": "h4",\n              "attribute": {\n                "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",\n                "subType": "attribute",\n                "name": "Customer Region"\n              }\n            }\n          ]\n        }\n      }\n    },\n    {\n      "id": "B9E7FD6C11D3E936C000B3B2D86C964F",\n      "name": "West",\n      "type": "calculation",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "expression": {\n        "text": "Northwest + Southwest",\n        "tree": {\n          "function": "plus",\n          "children": [\n            {\n              "type": "elements_object",\n              "elements": [\n                {\n                  "display": "Northwest",\n                  "elementId": "h6",\n                  "attribute": {\n                    "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",\n                    "subType": "attribute",\n                    "name": "Customer Region"\n                  }\n                }\n              ]\n            },\n            {\n              "type": "elements_object",\n              "elements": [\n                {\n                  "display": "Southwest",\n                  "elementId": "h7",\n                  "attribute": {\n                    "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",\n                    "subType": "attribute",\n                    "name": "Customer Region"\n                  }\n                }\n              ]\n            }\n          ],\n          "type": "operator"\n        }\n      }\n    },\n    {\n      "id": "B9E7FD6A11D3E936C000B3B2D86C964F",\n      "name": "US",\n      "type": "calculation",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "expression": {\n        "text": "((Northeast + South) + Central) + West",\n        "tree": {\n          "function": "plus",\n          "children": [\n            {\n              "function": "plus",\n              "children": [\n                {\n                  "function": "plus",\n                  "children": [\n                    {\n                      "type": "object_reference",\n                      "target": {\n                        "objectId": "B9E7FD7111D3E936C000B3B2D86C964F",\n                        "subType": "consolidation_element",\n                        "name": "Northeast",\n                        "isEmbedded": true\n                      },\n                      "isIndependent": 1\n                    },\n                    {\n                      "type": "object_reference",\n                      "target": {\n                        "objectId": "B9E7FD7011D3E936C000B3B2D86C964F",\n                        "subType": "consolidation_element",\n                        "name": "South",\n                        "isEmbedded": true\n                      },\n                      "isIndependent": 1\n                    }\n                  ],\n                  "type": "operator"\n                },\n                {\n                  "type": "object_reference",\n                  "target": {\n                    "objectId": "B9E7FD6D11D3E936C000B3B2D86C964F",\n                    "subType": "consolidation_element",\n                    "name": "Central",\n                    "isEmbedded": true\n                  },\n                  "isIndependent": 1\n                }\n              ],\n              "type": "operator"\n            },\n            {\n              "type": "object_reference",\n              "target": {\n                "objectId": "B9E7FD6C11D3E936C000B3B2D86C964F",\n                "subType": "consolidation_element",\n                "name": "West",\n                "isEmbedded": true\n              },\n              "isIndependent": 1\n            }\n          ],\n          "type": "operator"\n        }\n      }\n    },\n    {\n      "id": "B9E7FD6511D3E936C000B3B2D86C964F",\n      "name": "Northeast / US",\n      "type": "calculation",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "expression": {\n        "text": "Northeast / US",\n        "tree": {\n          "function": "divide",\n          "children": [\n            {\n              "type": "object_reference",\n              "target": {\n                "objectId": "B9E7FD7111D3E936C000B3B2D86C964F",\n                "subType": "consolidation_element",\n                "name": "Northeast",\n                "isEmbedded": true\n              },\n              "isIndependent": 1\n            },\n            {\n              "type": "object_reference",\n              "target": {\n                "objectId": "B9E7FD6A11D3E936C000B3B2D86C964F",\n                "subType": "consolidation_element",\n                "name": "US",\n                "isEmbedded": true\n              },\n              "isIndependent": 1\n            }\n          ],\n          "type": "operator"\n        }\n      }\n    },\n    {\n      "id": "B9E7FD5F11D3E936C000B3B2D86C964F",\n      "name": "South / US",\n      "type": "calculation",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "expression": {\n        "text": "South / US",\n        "tree": {\n          "function": "divide",\n          "children": [\n            {\n              "type": "object_reference",\n              "target": {\n                "objectId": "B9E7FD7011D3E936C000B3B2D86C964F",\n                "subType": "consolidation_element",\n                "name": "South",\n                "isEmbedded": true\n              },\n              "isIndependent": 1\n            },\n            {\n              "type": "object_reference",\n              "target": {\n                "objectId": "B9E7FD6A11D3E936C000B3B2D86C964F",\n                "subType": "consolidation_element",\n                "name": "US",\n                "isEmbedded": true\n              },\n              "isIndependent": 1\n            }\n          ],\n          "type": "operator"\n        }\n      }\n    },\n    {\n      "id": "B9E7FD6211D3E936C000B3B2D86C964F",\n      "name": "Central / US",\n      "type": "calculation",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "expression": {\n        "text": "Central / US",\n        "tree": {\n          "function": "divide",\n          "children": [\n            {\n              "type": "object_reference",\n              "target": {\n                "objectId": "B9E7FD6D11D3E936C000B3B2D86C964F",\n                "subType": "consolidation_element",\n                "name": "Central",\n                "isEmbedded": true\n              },\n              "isIndependent": 1\n            },\n            {\n              "type": "object_reference",\n              "target": {\n                "objectId": "B9E7FD6A11D3E936C000B3B2D86C964F",\n                "subType": "consolidation_element",\n                "name": "US",\n                "isEmbedded": true\n              },\n              "isIndependent": 1\n            }\n          ],\n          "type": "operator"\n        }\n      }\n    },\n    {\n      "id": "B9E7FD5C11D3E936C000B3B2D86C964F",\n      "name": "West / US",\n      "type": "calculation",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "expression": {\n        "text": "West / US",\n        "tree": {\n          "function": "divide",\n          "children": [\n            {\n              "type": "object_reference",\n              "target": {\n                "objectId": "B9E7FD6C11D3E936C000B3B2D86C964F",\n                "subType": "consolidation_element",\n                "name": "West",\n                "isEmbedded": true\n              },\n              "isIndependent": 1\n            },\n            {\n              "type": "object_reference",\n              "target": {\n                "objectId": "B9E7FD6A11D3E936C000B3B2D86C964F",\n                "subType": "consolidation_element",\n                "name": "US",\n                "isEmbedded": true\n              },\n              "isIndependent": 1\n            }\n          ],\n          "type": "operator"\n        }\n      }\n    }\n  ],\n  "subtotal": "disable"\n}\n')),(0,r.kt)("p",null,"Response Code: 200"))}D.isMDXComponent=!0}}]);