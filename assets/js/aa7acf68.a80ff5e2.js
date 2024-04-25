"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[4260],{96913:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(74848),r=t(28453);const i={title:"Create a cube object and publish it",sidebar_label:"Create a cube object",description:"This workflow sample demonstrates how to create a new cube object through the Modeling service and publish it through Library server."},o=void 0,s={id:"common-workflows/analytics/manage-datasets/manage-cube-objects/create-a-cube-object",title:"Create a cube object and publish it",description:"This workflow sample demonstrates how to create a new cube object through the Modeling service and publish it through Library server.",source:"@site/docs/common-workflows/analytics/manage-datasets/manage-cube-objects/create-a-cube-object.md",sourceDirName:"common-workflows/analytics/manage-datasets/manage-cube-objects",slug:"/common-workflows/analytics/manage-datasets/manage-cube-objects/create-a-cube-object",permalink:"/rest-api-docs/common-workflows/analytics/manage-datasets/manage-cube-objects/create-a-cube-object",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/manage-datasets/manage-cube-objects/create-a-cube-object.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1714063612,formattedLastUpdatedAt:"Apr 25, 2024",frontMatter:{title:"Create a cube object and publish it",sidebar_label:"Create a cube object",description:"This workflow sample demonstrates how to create a new cube object through the Modeling service and publish it through Library server."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a cube's definition",permalink:"/rest-api-docs/common-workflows/analytics/manage-datasets/manage-cube-objects/retrieve-a-cube-definition"},next:{title:"Update a cube definition",permalink:"/rest-api-docs/common-workflows/analytics/manage-datasets/manage-cube-objects/update-a-cube-definition"}},c={},l=[{value:"Create a cube object",id:"create-a-cube-object",level:2},{value:"Create a cube object using POST /api/model/cubes",id:"create-a-cube-object-using-post-apimodelcubes",level:3},{value:"Create a cube object using POST /api/model/cubes using <code>showAdvancedProperties=true</code>",id:"create-a-cube-object-using-post-apimodelcubes-using-showadvancedpropertiestrue",level:3},{value:"Create a FFSQL cube object using POST /api/model/cubes",id:"create-a-ffsql-cube-object-using-post-apimodelcubes",level:3},{value:"Publish the cube",id:"publish-the-cube",level:2},{value:"Publish the cube using POST /api/v2/cubes/{cubeId}",id:"publish-the-cube-using-post-apiv2cubescubeid",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Available:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{since:"2021 Update 5"}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["You can try out this workflow at ",(0,a.jsx)(n.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-ef6003b3-abe9-40ee-abf7-ff72de088f22?ctx=documentation",children:"REST API Playground"}),"."]}),(0,a.jsxs)(n.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,a.jsx)(n.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,a.jsx)(n.p,{children:"This workflow sample demonstrates how to create a new cube object through the Modeling service and publish it through Library server."}),"\n",(0,a.jsxs)(n.p,{children:["You want to create a new ",(0,a.jsx)(n.code,{children:"Year, Category Analysis"})," cube object under the Public Objects folder in the MicroStrategy Tutorial project. The folder object ID is ",(0,a.jsx)(n.code,{children:"98FE182C2A10427EACE0CD30B6768258"}),". The project ID is ",(0,a.jsx)(n.code,{children:"B7CA92F04B9FAE8D941C3E9B7E0CD754"}),"."]}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.p,{children:["Get the authorization token needed to execute the request with ",(0,a.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,a.jsxs)(n.p,{children:["Get the project ID from ",(0,a.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,a.jsx)(n.h2,{id:"create-a-cube-object",children:"Create a cube object"}),"\n",(0,a.jsxs)(n.h3,{id:"create-a-cube-object-using-post-apimodelcubes",children:["Create a cube object using ",(0,a.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/ms-createCube",children:"POST /api/model/cubes"})]}),"\n",(0,a.jsx)(t,{since:"2021 Update 5"}),"\n",(0,a.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "cs0intmf1fgij7ao0v2v0j48e5"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "report_cube",\n    "name": "Year, Category Analysis",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "template": {\n    "rows": [\n      {\n        "id": "8D679D5111D3E4981000E787EC6DE8A4",\n        "name": "Year",\n        "type": "attribute"\n      },\n      {\n        "id": "8D679D3711D3E4981000E787EC6DE8A4",\n        "name": "Category",\n        "type": "attribute"\n      }\n    ],\n    "columns": [\n      {\n        "type": "metrics",\n        "elements": [\n          {\n            "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n            "name": "Cost",\n            "subType": "metric"\n          },\n          {\n            "id": "4C051DB611D3E877C000B3B2D86C964F",\n            "name": "Profit",\n            "subType": "metric"\n          }\n        ]\n      }\n    ],\n    "pageBy": []\n  },\n  "filter": {\n    "text": "(Subcategory = Art & Architecture, Business, Computers, Electronics - Miscellaneous) And (Revenue > 100000)",\n    "tree": {\n      "function": "and",\n      "children": [\n        {\n          "type": "predicate_element_list",\n          "predicateId": "34BD0D556AC6423CB8061BB90A0C1AB2",\n          "predicateTree": {\n            "attribute": {\n              "objectId": "8D679D4F11D3E4981000E787EC6DE8A4",\n              "subType": "attribute",\n              "name": "Subcategory"\n            },\n            "elements": [\n              {\n                "display": "Art & Architecture",\n                "elementId": "h11"\n              },\n              {\n                "display": "Business",\n                "elementId": "h12"\n              },\n              {\n                "display": "Computers",\n                "elementId": "h23"\n              },\n              {\n                "display": "Electronics - Miscellaneous",\n                "elementId": "h24"\n              }\n            ],\n            "function": "in"\n          }\n        },\n        {\n          "type": "predicate_metric_qualification",\n          "predicateId": "EF616BAECDED4AE0A91C6A4A5092ED92",\n          "predicateText": "(Revenue > 100000)",\n          "predicateTree": {\n            "function": "greater",\n            "parameters": [\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "100000.0"\n                }\n              }\n            ],\n            "levelType": "none",\n            "metric": {\n              "objectId": "4C05177011D3E877C000B3B2D86C964F",\n              "subType": "metric",\n              "name": "Revenue"\n            },\n            "metricFunction": "value",\n            "isIndependent": 0,\n            "nullInclude": 0\n          }\n        }\n      ],\n      "type": "operator"\n    }\n  },\n  "options": {\n    "dataLanguages": {\n      "dataLanguageType": "project_default"\n    },\n    "dataRefresh": "replace",\n    "dataPartition": {\n      "partitionAttribute": {},\n      "numberOfPartitions": 0,\n      "fetchDataSlicesInParallel": false\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/cubes" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: cs0intmf1fgij7ao0v2v0j48e5" \\\n-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" \\\n-H "Content-Type: application/json" \\\n-d \'{"information":{"subType":"report_cube","name":"Year, Category Analysis2","destinationFolderId":"98FE182C2A10427EACE0CD30B6768258"},"template":{"rows":[{"id":"8D679D5111D3E4981000E787EC6DE8A4","name":"Year","type":"attribute"},{"id":"8D679D3711D3E4981000E787EC6DE8A4","name":"Category","type":"attribute"}],"columns":[{"type":"metrics","elements":[{"id":"7FD5B69611D5AC76C000D98A4CC5F24F","name":"Cost","subType":"metric"},{"id":"4C051DB611D3E877C000B3B2D86C964F","name":"Profit","subType":"metric"}]}],"pageBy":[]},"filter":{"text":"(Subcategory = Art & Architecture, Business, Computers, Electronics - Miscellaneous) And (Revenue > 100000)","tree":{"function":"and","children":[{"type":"predicate_element_list","predicateId":"34BD0D556AC6423CB8061BB90A0C1AB2","predicateTree":{"attribute":{"objectId":"8D679D4F11D3E4981000E787EC6DE8A4","subType":"attribute","name":"Subcategory"},"elements":[{"display":"Art & Architecture","elementId":"h11"},{"display":"Business","elementId":"h12"},{"display":"Computers","elementId":"h23"},{"display":"Electronics - Miscellaneous","elementId":"h24"}],"function":"in"}},{"type":"predicate_metric_qualification","predicateId":"EF616BAECDED4AE0A91C6A4A5092ED92","predicateText":"(Revenue > 100000)","predicateTree":{"function":"greater","parameters":[{"parameterType":"constant","constant":{"type":"double","value":"100000.0"}}],"levelType":"none","metric":{"objectId":"4C05177011D3E877C000B3B2D86C964F","subType":"metric","name":"Revenue"},"metricFunction":"value","isIndependent":0,"nullInclude":0}}],"type":"operator"}},"options":{"dataLanguages":{"dataLanguageType":"project_default"},"dataRefresh":"replace","dataPartition":{"partitionAttribute":{},"numberOfPartitions":0,"fetchDataSlicesInParallel":false}}}\'\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2022-03-18T20:52:06.593Z",\n    "dateModified": "2022-03-18T20:52:06.593Z",\n    "versionId": "F77DA8EB194CD4784D38A684CAD2F852",\n    "primaryLocale": "en-US",\n    "objectId": "2F15C95D934175CBC9B915915D485B0E",\n    "subType": "report_cube",\n    "name": "Year, Category Analysis2"\n  },\n  "template": {\n    "rows": [\n      {\n        "id": "8D679D5111D3E4981000E787EC6DE8A4",\n        "name": "Year",\n        "type": "attribute"\n      },\n      {\n        "id": "8D679D3711D3E4981000E787EC6DE8A4",\n        "name": "Category",\n        "type": "attribute"\n      }\n    ],\n    "columns": [\n      {\n        "type": "metrics",\n        "elements": [\n          {\n            "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n            "name": "Cost",\n            "subType": "metric"\n          },\n          {\n            "id": "4C051DB611D3E877C000B3B2D86C964F",\n            "name": "Profit",\n            "subType": "metric"\n          }\n        ]\n      }\n    ],\n    "pageBy": []\n  },\n  "filter": {\n    "text": "(Subcategory = Art & Architecture, Business, Computers, Electronics - Miscellaneous) And (Revenue > 100000)",\n    "tree": {\n      "function": "and",\n      "children": [\n        {\n          "type": "predicate_element_list",\n          "predicateId": "973167FF74AD4B42ABB86382A8397655",\n          "predicateTree": {\n            "attribute": {\n              "objectId": "8D679D4F11D3E4981000E787EC6DE8A4",\n              "subType": "attribute",\n              "name": "Subcategory"\n            },\n            "elements": [\n              {\n                "display": "Art & Architecture",\n                "elementId": "h11"\n              },\n              {\n                "display": "Business",\n                "elementId": "h12"\n              },\n              {\n                "display": "Computers",\n                "elementId": "h23"\n              },\n              {\n                "display": "Electronics - Miscellaneous",\n                "elementId": "h24"\n              }\n            ],\n            "function": "in"\n          }\n        },\n        {\n          "type": "predicate_metric_qualification",\n          "predicateId": "BAB9A5D62B7A4A9692041F2451EBD1E3",\n          "predicateText": "(Revenue > 100000)",\n          "predicateTree": {\n            "function": "greater",\n            "parameters": [\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "100000.0"\n                }\n              }\n            ],\n            "levelType": "none",\n            "metric": {\n              "objectId": "4C05177011D3E877C000B3B2D86C964F",\n              "subType": "metric",\n              "name": "Revenue"\n            },\n            "metricFunction": "value",\n            "isIndependent": 0,\n            "nullInclude": 0\n          }\n        }\n      ],\n      "type": "operator"\n    }\n  },\n  "options": {\n    "dataLanguages": {\n      "dataLanguageType": "project_default"\n    },\n    "dataRefresh": "replace",\n    "dataPartition": {\n      "partitionAttribute": {},\n      "numberOfPartitions": 0,\n      "fetchDataSlicesInParallel": false\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Response Code: 201 (A cube is created successfully.)"}),"\n",(0,a.jsxs)(n.h3,{id:"create-a-cube-object-using-post-apimodelcubes-using-showadvancedpropertiestrue",children:["Create a cube object using ",(0,a.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/ms-createCube",children:"POST /api/model/cubes"})," using ",(0,a.jsx)(n.code,{children:"showAdvancedProperties=true"})]}),"\n",(0,a.jsx)(t,{since:"2021 Update 6"}),"\n",(0,a.jsxs)(n.p,{children:["You want to create a new ",(0,a.jsx)(n.code,{children:"Actual vs Forecast Performance Cube"})," cube object under the ",(0,a.jsx)(n.code,{children:"Public Objects"})," folder in the ",(0,a.jsx)(n.code,{children:"MicroStrategy Tutorial"})," project. The folder object ID is ",(0,a.jsx)(n.code,{children:"98FE182C2A10427EACE0CD30B6768258"}),". The project ID is ",(0,a.jsx)(n.code,{children:"B7CA92F04B9FAE8D941C3E9B7E0CD754"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://10.23.33.10:8080/MicroStrategyLibrary/api/model/cubes?showAdvancedProperties=true" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: ll16k38bt7e6i9f0pb2p7mcs85" \\\n-H "X-MSTR-ProjectID: 6F2026DB4172DC4B219ADC914FF944BB" \\\n-H "Content-Type: application/json" \\\n-d \'{"information":{"subType":"report_cube","name":"Actual vs Forecast Performance Cube","destinationFolderId":"98FE182C2A10427EACE0CD30B6768258"},"template":{},"filter":{},"options":{"dataLanguages":{"dataLanguageType":"all_project_data_language"},"dataRefresh":"replace","dataPartition":{"partitionAttribute":{},"numberOfPartitions":0,"fetchDataSlicesInParallel":false}},"advancedProperties":{"vldbProperties":{"[AnalyticalEngineProperties].[EvaluationOrdering]":{"name":"EvaluationOrdering","value":"1","type":"int32","resolvedLocation":"default"},"[AnalyticalEngineProperties].[NullCheckingForAnalyticalEngine]":{"name":"NullCheckingForAnalyticalEngine","value":"1","type":"int32","resolvedLocation":"default"}},"metricJoinTypes":{"4C051DB611D3E877C000B3B2D86C964F":{"metric":{"objectId":"4C051DB611D3E877C000B3B2D86C964F","subType":"metric","name":"Profit"},"joinType":"inner","resolvedLocation":"default"},"4C05177011D3E877C000B3B2D86C964F":{"metric":{"objectId":"4C05177011D3E877C000B3B2D86C964F","subType":"metric","name":"Revenue"},"joinType":"inner","resolvedLocation":"default"},"8D7D59C144AB891C57FEFA873ABE1C92":{"metric":{"objectId":"8D7D59C144AB891C57FEFA873ABE1C92","subType":"metric","name":"Revenue Forecast"},"joinType":"inner","resolvedLocation":"default"},"1FAF96994873E7CEFC71BDB269522636":{"metric":{"objectId":"1FAF96994873E7CEFC71BDB269522636","subType":"metric","name":"Profit Forecast"},"joinType":"inner","resolvedLocation":"default"},"381980B211D40BC8C000C8906B98494F":{"metric":{"objectId":"381980B211D40BC8C000C8906B98494F","subType":"metric","name":"Discount"},"joinType":"inner","resolvedLocation":"default"},"2680DF9E11D5C3FEC0000B881FDA1A4F":{"metric":{"objectId":"2680DF9E11D5C3FEC0000B881FDA1A4F","subType":"metric","name":"Profit Margin"},"joinType":"inner","resolvedLocation":"default"},"89219DD247681F5E87BDE69E4C6E871E":{"metric":{"objectId":"89219DD247681F5E87BDE69E4C6E871E","subType":"metric","name":"Discount Growth"},"joinType":"inner","resolvedLocation":"default"}},"attributeJoinTypes":{"8D679D4411D3E4981000E787EC6DE8A4":{"attribute":{"objectId":"8D679D4411D3E4981000E787EC6DE8A4","subType":"attribute","name":"Month"},"noParticipationInPreserveRow":false,"resolvedLocation":"default"},"8D679D5111D3E4981000E787EC6DE8A4":{"attribute":{"objectId":"8D679D5111D3E4981000E787EC6DE8A4","subType":"attribute","name":"Year"},"noParticipationInPreserveRow":false,"resolvedLocation":"default"},"8D679D3511D3E4981000E787EC6DE8A4":{"attribute":{"objectId":"8D679D3511D3E4981000E787EC6DE8A4","subType":"attribute","name":"Call Center"},"noParticipationInPreserveRow":false,"resolvedLocation":"default"},"8D679D4B11D3E4981000E787EC6DE8A4":{"attribute":{"objectId":"8D679D4B11D3E4981000E787EC6DE8A4","subType":"attribute","name":"Region"},"noParticipationInPreserveRow":false,"resolvedLocation":"default"},"8D679D3711D3E4981000E787EC6DE8A4":{"attribute":{"objectId":"8D679D3711D3E4981000E787EC6DE8A4","subType":"attribute","name":"Category"},"noParticipationInPreserveRow":false,"resolvedLocation":"default"},"8D679D4F11D3E4981000E787EC6DE8A4":{"attribute":{"objectId":"8D679D4F11D3E4981000E787EC6DE8A4","subType":"attribute","name":"Subcategory"},"noParticipationInPreserveRow":false,"resolvedLocation":"default"}}}}\'\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "report_cube",\n    "name": "Actual vs Forecast Performance Cube",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "template": {},\n  "filter": {},\n  "options": {\n    "dataLanguages": {\n      "dataLanguageType": "all_project_data_language"\n    },\n    "dataRefresh": "replace",\n    "dataPartition": {\n      "partitionAttribute": {},\n      "numberOfPartitions": 0,\n      "fetchDataSlicesInParallel": false\n    }\n  },\n  "advancedProperties": {\n    "vldbProperties": {\n      "[AnalyticalEngineProperties].[EvaluationOrdering]": {\n        "name": "EvaluationOrdering",\n        "value": "1",\n        "type": "int32",\n        "resolvedLocation": "default"\n      },\n      "[AnalyticalEngineProperties].[NullCheckingForAnalyticalEngine]": {\n        "name": "NullCheckingForAnalyticalEngine",\n        "value": "1",\n        "type": "int32",\n        "resolvedLocation": "default"\n      }\n    },\n    "metricJoinTypes": {\n      "4C051DB611D3E877C000B3B2D86C964F": {\n        "metric": {\n          "objectId": "4C051DB611D3E877C000B3B2D86C964F",\n          "subType": "metric",\n          "name": "Profit"\n        },\n        "joinType": "inner",\n        "resolvedLocation": "default"\n      },\n      "4C05177011D3E877C000B3B2D86C964F": {\n        "metric": {\n          "objectId": "4C05177011D3E877C000B3B2D86C964F",\n          "subType": "metric",\n          "name": "Revenue"\n        },\n        "joinType": "inner",\n        "resolvedLocation": "default"\n      }\n    },\n    "attributeJoinTypes": {\n      "8D679D4411D3E4981000E787EC6DE8A4": {\n        "attribute": {\n          "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Month"\n        },\n        "noParticipationInPreserveRow": false,\n        "resolvedLocation": "default"\n      },\n      "8D679D5111D3E4981000E787EC6DE8A4": {\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "noParticipationInPreserveRow": false,\n        "resolvedLocation": "default"\n      }\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Response:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2022-06-15T10:44:23.465Z",\n    "dateModified": "2022-06-15T10:44:23.465Z",\n    "versionId": "CE4F514D41AA77B5A6C883BCA4F688E2",\n    "primaryLocale": "en-US",\n    "objectId": "3A5363B04D61B77515B3D48D53671CEC",\n    "subType": "report_cube",\n    "name": "Actual vs Forecast Performance Cube"\n  },\n  "template": {\n    "rows": [],\n    "columns": [],\n    "pageBy": []\n  },\n  "filter": {},\n  "options": {\n    "dataLanguages": {\n      "dataLanguageType": "all_project_data_language"\n    },\n    "dataRefresh": "replace",\n    "dataPartition": {\n      "partitionAttribute": {},\n      "numberOfPartitions": 0,\n      "fetchDataSlicesInParallel": false\n    }\n  },\n  "advancedProperties": {\n    "vldbProperties": {\n      "[AnalyticalEngineProperties].[EvaluationOrdering]": {\n        "name": "EvaluationOrdering",\n        "value": "1",\n        "type": "int32",\n        "resolvedLocation": "report"\n      },\n      "[AnalyticalEngineProperties].[NullCheckingForAnalyticalEngine]": {\n        "name": "NullCheckingForAnalyticalEngine",\n        "value": "1",\n        "type": "int32",\n        "resolvedLocation": "report"\n      }\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Response Code: 201 (A cube is created successfully.)"}),"\n",(0,a.jsxs)(n.h3,{id:"create-a-ffsql-cube-object-using-post-apimodelcubes",children:["Create a FFSQL cube object using ",(0,a.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/ms-createCube",children:"POST /api/model/cubes"})]}),"\n",(0,a.jsxs)(n.p,{children:["We also support creating a FFSQL cube, which is a cube that is based on a custom SQL query, and map the columns to attributes and metrics. Compared to normal cubes, ",(0,a.jsx)(n.code,{children:"filter"})," field is not applicable, and we have an extra ",(0,a.jsx)(n.code,{children:"table"})," field. The attributes and metrics on the table should be put on the cube template. If we don't provide the template in the request body, the will be generated automatically based on the table."]}),"\n",(0,a.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "4jegqhpiulqarq0js6b0gt9lon"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "name": "Year, Category Analysis",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "sourceType": "custom_sql_free_form",\n  "table": {\n    "physicalTable": {\n      "columns": [\n        {\n          "name": "ffsqlIdV1",\n          "dataType": {\n            "type": "integer",\n            "precision": 4,\n            "scale": 0\n          }\n        },\n        {\n          "name": "ffsqlNameV1",\n          "dataType": {\n            "type": "fixed_length_string",\n            "precision": 255,\n            "scale": 0\n          }\n        },\n        {\n          "name": "ffsqlAgeV1",\n          "dataType": {\n            "type": "integer",\n            "precision": 4,\n            "scale": 0\n          }\n        },\n        {\n          "name": "ffsqlScoreV1",\n          "dataType": {\n            "type": "integer",\n            "precision": 4,\n            "scale": 0\n          }\n        }\n      ],\n      "sqlExpression": {\n        "tree": {\n          "function": "concat_no_blank",\n          "children": [\n            {\n              "type": "constant",\n              "variant": {\n                "type": "string",\n                "value": "SELECT id, name, age, score FROM hackathon.mytest;"\n              }\n            }\n          ],\n          "type": "operator"\n        }\n      }\n    },\n    "attributes": [\n      {\n        "name": "ffsqlIdV1",\n        "forms": [\n          {\n            "id": "45C11FA478E745FEA08D781CEA190FE5",\n            "category": "ID",\n            "type": "system",\n            "displayFormat": "number",\n            "expression": {\n              "tree": {\n                "type": "column_reference",\n                "name": "ffsqlIdV1"\n              }\n            }\n          }\n        ]\n      },\n      {\n        "name": "ffsqlNameV1",\n        "forms": [\n          {\n            "id": "45C11FA478E745FEA08D781CEA190FE5",\n            "category": "ID",\n            "type": "system",\n            "displayFormat": "text",\n            "expression": {\n              "tree": {\n                "type": "column_reference",\n                "name": "ffsqlNameV1"\n              }\n            }\n          }\n        ]\n      }\n    ],\n    "metrics": [\n      {\n        "name": "ffsqlAgeV1",\n        "dataType": {\n          "type": "numeric",\n          "precision": 0,\n          "scale": 0\n        },\n        "expression": {\n          "tree": {\n            "type": "column_reference",\n            "name": "ffsqlAgeV1"\n          }\n        }\n      },\n      {\n        "name": "ffsqlScoreV1",\n        "dataType": {\n          "type": "numeric",\n          "precision": 0,\n          "scale": 0\n        },\n        "expression": {\n          "tree": {\n            "type": "column_reference",\n            "name": "ffsqlScoreV1"\n          }\n        }\n      }\n    ],\n    "dataSource": {\n      "objectId": "A528E3A1436D9C08318735BC915FCF13",\n      "subType": "db_role_import",\n      "name": "tutorial_wh"\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl --location \'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/cubes\' \\\n--header \'X-MSTR-AuthToken: 4jegqhpiulqarq0js6b0gt9lon\' \\\n--header \'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Cookie: JSESSIONID=9F0BCEF1DC1DC915565555F36AC0DEFA; iSession=4jegqhpiulqarq0js6b0gt9lon\' \\\n--data \'{\n    "information": {\n        "name": "Year, Category Analysis",\n        "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n    },\n    "sourceType": "custom_sql_free_form",\n    "table": {\n        "physicalTable": {\n            "columns": [\n                {\n                    "name": "ffsqlIdV1",\n                    "dataType": {\n                        "type": "integer",\n                        "precision": 4,\n                        "scale": 0\n                    }\n                },\n                {\n                    "name": "ffsqlNameV1",\n                    "dataType": {\n                        "type": "fixed_length_string",\n                        "precision": 255,\n                        "scale": 0\n                    }\n                },\n                {\n                    "name": "ffsqlAgeV1",\n                    "dataType": {\n                        "type": "integer",\n                        "precision": 4,\n                        "scale": 0\n                    }\n                },\n                {\n                    "name": "ffsqlScoreV1",\n                    "dataType": {\n                        "type": "integer",\n                        "precision": 4,\n                        "scale": 0\n                    }\n                }\n            ],\n            "sqlExpression": {\n                "tree": {\n                    "function": "concat_no_blank",\n                    "children": [\n                        {\n                            "type": "constant",\n                            "variant": {\n                                "type": "string",\n                                "value": "SELECT id, name, age, score FROM hackathon.mytest;"\n                            }\n                        }\n                    ],\n                    "type": "operator"\n                }\n            }\n        },\n        "attributes": [\n            {\n                "name": "ffsqlIdV1",\n                "forms": [\n                    {\n                        "id": "45C11FA478E745FEA08D781CEA190FE5",\n                        "category": "ID",\n                        "type": "system",\n                        "displayFormat": "number",\n                        "expression": {\n                            "tree": {\n                                "type": "column_reference",\n                                "name": "ffsqlIdV1"\n                            }\n                        }\n                    }\n                ]\n            },\n            {\n                "name": "ffsqlNameV1",\n                "forms": [\n                    {\n                        "id": "45C11FA478E745FEA08D781CEA190FE5",\n                        "category": "ID",\n                        "type": "system",\n                        "displayFormat": "text",\n                        "expression": {\n                            "tree": {\n                                "type": "column_reference",\n                                "name": "ffsqlNameV1"\n                            }\n                        }\n                    }\n                ]\n            }\n        ],\n        "metrics": [\n            {\n                "name": "ffsqlAgeV1",\n                "dataType": {\n                    "type": "numeric",\n                    "precision": 0,\n                    "scale": 0\n                },\n                "expression": {\n                    "tree": {\n                        "type": "column_reference",\n                        "name": "ffsqlAgeV1"\n                    }\n                }\n            },\n            {\n                "name": "ffsqlScoreV1",\n                "dataType": {\n                    "type": "numeric",\n                    "precision": 0,\n                    "scale": 0\n                },\n                "expression": {\n                    "tree": {\n                        "type": "column_reference",\n                        "name": "ffsqlScoreV1"\n                    }\n                }\n            }\n        ],\n        "dataSource": {\n            "objectId": "A528E3A1436D9C08318735BC915FCF13",\n            "subType": "db_role_import",\n            "name": "tutorial_wh"\n        }\n    }\n}\'\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2024-01-24T06:48:55.213Z",\n    "dateModified": "2024-01-24T06:48:55.213Z",\n    "versionId": "8669F17C45F02D454A409EA9FF77B9A4",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "E2AD7C9E4954660D5A5BDBBFD751F6CC",\n    "subType": "report_cube",\n    "name": "Year, Category Analysis"\n  },\n  "template": {\n    "rows": [\n      {\n        "id": "FF816775FB784C75B3BA2B63BAECDE96",\n        "name": "ffsqlIdV1",\n        "type": "attribute",\n        "forms": [\n          {\n            "id": "45C11FA478E745FEA08D781CEA190FE5",\n            "name": "ID"\n          }\n        ]\n      },\n      {\n        "id": "FB045BB2C57D45488879EC303B76C129",\n        "name": "ffsqlNameV1",\n        "type": "attribute",\n        "forms": [\n          {\n            "id": "45C11FA478E745FEA08D781CEA190FE5",\n            "name": "ID"\n          }\n        ]\n      }\n    ],\n    "columns": [\n      {\n        "type": "metrics",\n        "elements": [\n          {\n            "id": "FA1A75DDC3BF4864932E8C20BF17801D",\n            "name": "ffsqlAgeV1",\n            "subType": "metric"\n          },\n          {\n            "id": "398954E92D7D4395894DAC4B18E7B453",\n            "name": "ffsqlScoreV1",\n            "subType": "metric"\n          }\n        ]\n      }\n    ],\n    "pageBy": []\n  },\n  "options": {\n    "dataRefresh": "replace",\n    "dataPartition": {\n      "partitionAttribute": {},\n      "numberOfPartitions": 0,\n      "fetchDataSlicesInParallel": false\n    }\n  },\n  "timeBased": {\n    "timezone": null,\n    "calendar": null,\n    "enableTimezoneAndCalendarReporting": true\n  },\n  "sourceType": "custom_sql_free_form",\n  "table": {\n    "physicalTable": {\n      "columns": [\n        {\n          "id": "186F0F9D63C94E12A129296F94970A7E",\n          "name": "ffsqlIdV1",\n          "dataType": {\n            "type": "integer",\n            "precision": 4,\n            "scale": 0\n          }\n        },\n        {\n          "id": "E8F67F57C68B463390209166D5679F79",\n          "name": "ffsqlNameV1",\n          "dataType": {\n            "type": "fixed_length_string",\n            "precision": 255,\n            "scale": 0\n          }\n        },\n        {\n          "id": "D7A48B699698415E9D9E816B7C8C9ABC",\n          "name": "ffsqlAgeV1",\n          "dataType": {\n            "type": "integer",\n            "precision": 4,\n            "scale": 0\n          }\n        },\n        {\n          "id": "6E3B8DBA172E4943BA1614ABB2AC5AC4",\n          "name": "ffsqlScoreV1",\n          "dataType": {\n            "type": "integer",\n            "precision": 4,\n            "scale": 0\n          }\n        }\n      ],\n      "sqlExpression": {\n        "tree": {\n          "function": "concat_no_blank",\n          "children": [\n            {\n              "type": "constant",\n              "variant": {\n                "type": "string",\n                "value": "SELECT id, name, age, score FROM hackathon.mytest;"\n              }\n            }\n          ],\n          "type": "operator"\n        }\n      }\n    },\n    "attributes": [\n      {\n        "id": "FF816775FB784C75B3BA2B63BAECDE96",\n        "name": "ffsqlIdV1",\n        "forms": [\n          {\n            "id": "45C11FA478E745FEA08D781CEA190FE5",\n            "name": "ID",\n            "category": "ID",\n            "type": "system",\n            "displayFormat": "number",\n            "expression": {\n              "tree": {\n                "type": "column_reference",\n                "objectId": "186F0F9D63C94E12A129296F94970A7E",\n                "name": "ffsqlIdV1"\n              }\n            }\n          }\n        ]\n      },\n      {\n        "id": "FB045BB2C57D45488879EC303B76C129",\n        "name": "ffsqlNameV1",\n        "forms": [\n          {\n            "id": "45C11FA478E745FEA08D781CEA190FE5",\n            "name": "ID",\n            "category": "ID",\n            "type": "system",\n            "displayFormat": "text",\n            "expression": {\n              "tree": {\n                "type": "column_reference",\n                "objectId": "E8F67F57C68B463390209166D5679F79",\n                "name": "ffsqlNameV1"\n              }\n            }\n          }\n        ]\n      }\n    ],\n    "metrics": [\n      {\n        "id": "FA1A75DDC3BF4864932E8C20BF17801D",\n        "name": "ffsqlAgeV1",\n        "dataType": {\n          "type": "numeric",\n          "precision": 0,\n          "scale": 0\n        },\n        "expression": {\n          "tree": {\n            "type": "column_reference",\n            "objectId": "D7A48B699698415E9D9E816B7C8C9ABC",\n            "name": "ffsqlAgeV1"\n          }\n        }\n      },\n      {\n        "id": "398954E92D7D4395894DAC4B18E7B453",\n        "name": "ffsqlScoreV1",\n        "dataType": {\n          "type": "numeric",\n          "precision": 0,\n          "scale": 0\n        },\n        "expression": {\n          "tree": {\n            "type": "column_reference",\n            "objectId": "6E3B8DBA172E4943BA1614ABB2AC5AC4",\n            "name": "ffsqlScoreV1"\n          }\n        }\n      }\n    ],\n    "dataSource": {\n      "objectId": "A528E3A1436D9C08318735BC915FCF13",\n      "subType": "db_role_import",\n      "name": "tutorial_wh"\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Response Code: 201 (A cube is created successfully.)"}),"\n",(0,a.jsx)(n.h2,{id:"publish-the-cube",children:"Publish the cube"}),"\n",(0,a.jsxs)(n.h3,{id:"publish-the-cube-using-post-apiv2cubescubeid",children:["Publish the cube using ",(0,a.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/publishCube_2",children:"POST /api/v2/cubes/{cubeId}"})]}),"\n",(0,a.jsx)(t,{since:"2021 Update 5"}),"\n",(0,a.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "cs0intmf1fgij7ao0v2v0j48e5"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Request Body: Empty"}),"\n",(0,a.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/cubes/2F15C95D934175CBC9B915915D485B0E" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: cs0intmf1fgij7ao0v2v0j48e5" \\\n-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "id": "478:RU5WLTI4MjA0MExBSU9VU0Ux",\n  "jobId": 478\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Response Code: 202 (Request accepted for processing.)"})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var a=t(96540);const r={},i=a.createContext(r);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);