"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6030],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(b,o(o({ref:n},p),{},{components:t})):a.createElement(b,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8534:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a,r=t(83117),i=t(80102),o=(t(67294),t(3905)),c=["components"],l={title:"Update a cube's definition and publish it",sidebar_label:"Update a cube definition",description:"This workflow sample demonstrates how to update a cube\u2019s definition through the Modeling service and Publish it through Library Server."},s=void 0,p={unversionedId:"common-workflows/analytics/manage-datasets/manage-cube-objects/update-a-cube-definition",id:"common-workflows/analytics/manage-datasets/manage-cube-objects/update-a-cube-definition",title:"Update a cube's definition and publish it",description:"This workflow sample demonstrates how to update a cube\u2019s definition through the Modeling service and Publish it through Library Server.",source:"@site/docs/common-workflows/analytics/manage-datasets/manage-cube-objects/update-a-cube-definition.md",sourceDirName:"common-workflows/analytics/manage-datasets/manage-cube-objects",slug:"/common-workflows/analytics/manage-datasets/manage-cube-objects/update-a-cube-definition",permalink:"/rest-api-docs/common-workflows/analytics/manage-datasets/manage-cube-objects/update-a-cube-definition",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/manage-datasets/manage-cube-objects/update-a-cube-definition.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1680880277,formattedLastUpdatedAt:"Apr 7, 2023",frontMatter:{title:"Update a cube's definition and publish it",sidebar_label:"Update a cube definition",description:"This workflow sample demonstrates how to update a cube\u2019s definition through the Modeling service and Publish it through Library Server."},sidebar:"tutorialSidebar",previous:{title:"Create a cube object",permalink:"/rest-api-docs/common-workflows/analytics/manage-datasets/manage-cube-objects/create-a-cube-object"},next:{title:"Make external data available using the Push Data API",permalink:"/rest-api-docs/common-workflows/analytics/manage-datasets/make-external-data-available/"}},u={},d=[{value:"Update a cube definition",id:"update-a-cube-definition",level:2},{value:"Update a cube object using PUT /api/model/cubes/{cubeId}",id:"update-a-cube-object-using-put-apimodelcubescubeid",level:3},{value:"Update the cube&#39;s advanced properties using PUT /api/model/cubes/{cubeId} with <code>showAdvancedProperties=true</code>",id:"update-the-cubes-advanced-properties-using-put-apimodelcubescubeid-with-showadvancedpropertiestrue",level:3},{value:"Publish the cube",id:"publish-the-cube",level:2},{value:"Publish the cube using POST /api/v2/cubes/{cubeId}",id:"publish-the-cube-using-post-apiv2cubescubeid",level:3}],m=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),b={toc:d};function y(e){var n=e.components,t=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(m,{since:"2021 Update 5",mdxType:"Available"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-ef6003b3-abe9-40ee-abf7-ff72de088f22?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"This workflow sample demonstrates how to update a cube\u2019s definition through the Modeling service and Publish it through Library Server."),(0,o.kt)("p",null,"You want to update the ",(0,o.kt)("inlineCode",{parentName:"p"},"Year, Category Analysis")," cube object definition in the MicroStrategy Tutorial project. The cube ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"2F15C95D934175CBC9B915915D485B0E"),". The project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("h2",{id:"update-a-cube-definition"},"Update a cube definition"),(0,o.kt)("h3",{id:"update-a-cube-object-using-put-apimodelcubescubeid"},"Update a cube object using ",(0,o.kt)("a",{parentName:"h3",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/ms-replaceCube"},"PUT /api/model/cubes/{cubeId}")),(0,o.kt)(m,{since:"2021 Update 5",mdxType:"Available"}),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "lph8795fem9k70tnp0ftdrnvi2"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "report_cube",\n    "name": "Year, Category Analysis3",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "template": {\n    "rows": [\n      {\n        "id": "8D679D5111D3E4981000E787EC6DE8A4",\n        "name": "Year",\n        "type": "attribute"\n      },\n      {\n        "id": "8D679D3711D3E4981000E787EC6DE8A4",\n        "name": "Category",\n        "type": "attribute"\n      }\n    ],\n    "columns": [\n      {\n        "type": "metrics",\n        "elements": [\n          {\n            "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n            "name": "Cost",\n            "subType": "metric"\n          },\n          {\n            "id": "4C051DB611D3E877C000B3B2D86C964F",\n            "name": "Profit",\n            "subType": "metric"\n          }\n        ]\n      }\n    ],\n    "pageBy": []\n  },\n  "filter": {\n    "text": "(Subcategory = Art & Architecture, Business, Computers, Electronics - Miscellaneous) And (Revenue > 100000)",\n    "tree": {\n      "function": "and",\n      "children": [\n        {\n          "type": "predicate_element_list",\n          "predicateId": "34BD0D556AC6423CB8061BB90A0C1AB2",\n          "predicateTree": {\n            "attribute": {\n              "objectId": "8D679D4F11D3E4981000E787EC6DE8A4",\n              "subType": "attribute",\n              "name": "Subcategory"\n            },\n            "elements": [\n              {\n                "display": "Art & Architecture",\n                "elementId": "h11"\n              },\n              {\n                "display": "Business",\n                "elementId": "h12"\n              },\n              {\n                "display": "Computers",\n                "elementId": "h23"\n              },\n              {\n                "display": "Electronics - Miscellaneous",\n                "elementId": "h24"\n              }\n            ],\n            "function": "in"\n          }\n        },\n        {\n          "type": "predicate_metric_qualification",\n          "predicateId": "EF616BAECDED4AE0A91C6A4A5092ED92",\n          "predicateText": "(Revenue > 100000)",\n          "predicateTree": {\n            "function": "greater",\n            "parameters": [\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "100000.0"\n                }\n              }\n            ],\n            "levelType": "none",\n            "metric": {\n              "objectId": "4C05177011D3E877C000B3B2D86C964F",\n              "subType": "metric",\n              "name": "Revenue"\n            },\n            "metricFunction": "value",\n            "isIndependent": 0,\n            "nullInclude": 0\n          }\n        }\n      ],\n      "type": "operator"\n    }\n  },\n  "options": {\n    "dataLanguages": {\n      "dataLanguageType": "project_default"\n    },\n    "dataRefresh": "replace",\n    "dataPartition": {\n      "partitionAttribute": {},\n      "numberOfPartitions": 0,\n      "fetchDataSlicesInParallel": false\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/cubes/2F15C95D934175CBC9B915915D485B0E" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: lph8795fem9k70tnp0ftdrnvi2" \\\n-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" \\\n-H "Content-Type: application/json" \\\n-d \'{"information":{"subType":"report_cube","name":"Year, Category Analysis3","destinationFolderId":"98FE182C2A10427EACE0CD30B6768258"},"template":{"rows":[{"id":"8D679D5111D3E4981000E787EC6DE8A4","name":"Year","type":"attribute"},{"id":"8D679D3711D3E4981000E787EC6DE8A4","name":"Category","type":"attribute"}],"columns":[{"type":"metrics","elements":[{"id":"7FD5B69611D5AC76C000D98A4CC5F24F","name":"Cost","subType":"metric"},{"id":"4C051DB611D3E877C000B3B2D86C964F","name":"Profit","subType":"metric"}]}],"pageBy":[]},"filter":{"text":"(Subcategory = Art & Architecture, Business, Computers, Electronics - Miscellaneous) And (Revenue > 100000)","tree":{"function":"and","children":[{"type":"predicate_element_list","predicateId":"34BD0D556AC6423CB8061BB90A0C1AB2","predicateTree":{"attribute":{"objectId":"8D679D4F11D3E4981000E787EC6DE8A4","subType":"attribute","name":"Subcategory"},"elements":[{"display":"Art & Architecture","elementId":"h11"},{"display":"Business","elementId":"h12"},{"display":"Computers","elementId":"h23"},{"display":"Electronics - Miscellaneous","elementId":"h24"}],"function":"in"}},{"type":"predicate_metric_qualification","predicateId":"EF616BAECDED4AE0A91C6A4A5092ED92","predicateText":"(Revenue > 100000)","predicateTree":{"function":"greater","parameters":[{"parameterType":"constant","constant":{"type":"double","value":"100000.0"}}],"levelType":"none","metric":{"objectId":"4C05177011D3E877C000B3B2D86C964F","subType":"metric","name":"Revenue"},"metricFunction":"value","isIndependent":0,"nullInclude":0}}],"type":"operator"}},"options":{"dataLanguages":{"dataLanguageType":"project_default"},"dataRefresh":"replace","dataPartition":{"partitionAttribute":{},"numberOfPartitions":0,"fetchDataSlicesInParallel":false}}}\'\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-03-18T20:52:06.593Z",\n    "dateModified": "2022-03-18T21:31:28.050Z",\n    "versionId": "D13B1118594931A7E8D7679B792B3724",\n    "primaryLocale": "en-US",\n    "objectId": "2F15C95D934175CBC9B915915D485B0E",\n    "subType": "report_cube",\n    "name": "Year, Category Analysis3",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "template": {\n    "rows": [\n      {\n        "id": "8D679D5111D3E4981000E787EC6DE8A4",\n        "name": "Year",\n        "type": "attribute"\n      },\n      {\n        "id": "8D679D3711D3E4981000E787EC6DE8A4",\n        "name": "Category",\n        "type": "attribute"\n      }\n    ],\n    "columns": [\n      {\n        "type": "metrics",\n        "elements": [\n          {\n            "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n            "name": "Cost",\n            "subType": "metric"\n          },\n          {\n            "id": "4C051DB611D3E877C000B3B2D86C964F",\n            "name": "Profit",\n            "subType": "metric"\n          }\n        ]\n      }\n    ],\n    "pageBy": []\n  },\n  "filter": {\n    "text": "(Subcategory = Art & Architecture, Business, Computers, Electronics - Miscellaneous) And (Revenue > 100000)",\n    "tree": {\n      "function": "and",\n      "children": [\n        {\n          "type": "predicate_element_list",\n          "predicateId": "FAB934D7BBFB403C9FDFC68575A90249",\n          "predicateTree": {\n            "attribute": {\n              "objectId": "8D679D4F11D3E4981000E787EC6DE8A4",\n              "subType": "attribute",\n              "name": "Subcategory"\n            },\n            "elements": [\n              {\n                "display": "Art & Architecture",\n                "elementId": "h11"\n              },\n              {\n                "display": "Business",\n                "elementId": "h12"\n              },\n              {\n                "display": "Computers",\n                "elementId": "h23"\n              },\n              {\n                "display": "Electronics - Miscellaneous",\n                "elementId": "h24"\n              }\n            ],\n            "function": "in"\n          }\n        },\n        {\n          "type": "predicate_metric_qualification",\n          "predicateId": "D75DD897784547FE81B63C575A6ADE46",\n          "predicateText": "(Revenue > 100000)",\n          "predicateTree": {\n            "function": "greater",\n            "parameters": [\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "100000.0"\n                }\n              }\n            ],\n            "levelType": "none",\n            "metric": {\n              "objectId": "4C05177011D3E877C000B3B2D86C964F",\n              "subType": "metric",\n              "name": "Revenue"\n            },\n            "metricFunction": "value",\n            "isIndependent": 0,\n            "nullInclude": 0\n          }\n        }\n      ],\n      "type": "operator"\n    }\n  },\n  "options": {\n    "dataLanguages": {\n      "dataLanguageType": "project_default"\n    },\n    "dataRefresh": "replace",\n    "dataPartition": {\n      "partitionAttribute": {},\n      "numberOfPartitions": 0,\n      "fetchDataSlicesInParallel": false\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Sample Response Code: 200 (The cube's definition is updated successfully.)"),(0,o.kt)("h3",{id:"update-the-cubes-advanced-properties-using-put-apimodelcubescubeid-with-showadvancedpropertiestrue"},"Update the cube's advanced properties using ",(0,o.kt)("a",{parentName:"h3",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/ms-replaceCube"},"PUT /api/model/cubes/{cubeId}")," with ",(0,o.kt)("inlineCode",{parentName:"h3"},"showAdvancedProperties=true")),(0,o.kt)(m,{since:"2021 Update 6",mdxType:"Available"}),(0,o.kt)("p",null,"You want to update the value of advanced properties of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Actual vs Forecast Performance Cube")," cube object. The object ID of the cube is ",(0,o.kt)("inlineCode",{parentName:"p"},"CC02C5C24AE2803ABF14EDA5038159D4")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"MicroStrategy Tutorial")," project. The project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "http://10.23.33.10:8080/MicroStrategyLibrary/api/model/cubes/CC02C5C24AE2803ABF14EDA5038159D4?showAdvancedProperties=true" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: ggolv032n47gtkb0ggdocgfi23" \\\n-H "X-MSTR-ProjectID: 6F2026DB4172DC4B219ADC914FF944BB" \\\n-H "Content-Type: application/json" \\\n-d \'{"advancedProperties":{"vldbProperties":{"[AnalyticalEngineProperties].[EvaluationOrdering]":{"name":"EvaluationOrdering","value":"1","type":"int32","resolvedLocation":"default"},"[AnalyticalEngineProperties].[NullCheckingForAnalyticalEngine]":{"name":"NullCheckingForAnalyticalEngine","value":"2","type":"int32","resolvedLocation":"default"},"[GeneralReportProperties].[LoadIntelligentCubesImmediately]":{"name":"LoadIntelligentCubesImmediately","value":null,"type":"int32","resolvedLocation":"default"}}}}\'\n')),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "advancedProperties": {\n    "vldbProperties": {\n      "[AnalyticalEngineProperties].[EvaluationOrdering]": {\n        "name": "EvaluationOrdering",\n        "value": "1",\n        "type": "int32",\n        "resolvedLocation": "default"\n      },\n      "[AnalyticalEngineProperties].[NullCheckingForAnalyticalEngine]": {\n        "name": "NullCheckingForAnalyticalEngine",\n        "value": "2",\n        "type": "int32",\n        "resolvedLocation": "default"\n      },\n      "[GeneralReportProperties].[LoadIntelligentCubesImmediately]": {\n        "name": "LoadIntelligentCubesImmediately",\n        "value": null,\n        "type": "int32",\n        "resolvedLocation": "default"\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Sample Response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2009-04-15T20:24:53.000Z",\n    "dateModified": "2010-04-14T15:05:00.000Z",\n    "versionId": "9C75BDF245B413DAEB7681807F6DEEFC",\n    "primaryLocale": "en-US",\n    "objectId": "CC02C5C24AE2803ABF14EDA5038159D4",\n    "subType": "report_cube",\n    "name": "Actual vs Forecast Performance Cube"\n  },\n  "template": {\n    "rows": [\n      {\n        "id": "8D679D4411D3E4981000E787EC6DE8A4",\n        "name": "Month",\n        "type": "attribute"\n      },\n      {\n        "id": "8D679D5111D3E4981000E787EC6DE8A4",\n        "name": "Year",\n        "type": "attribute"\n      }\n    ],\n    "columns": [\n      {\n        "type": "metrics",\n        "elements": [\n          {\n            "id": "4C051DB611D3E877C000B3B2D86C964F",\n            "name": "Profit",\n            "subType": "metric"\n          },\n          {\n            "id": "4C05177011D3E877C000B3B2D86C964F",\n            "name": "Revenue",\n            "subType": "metric"\n          }\n        ]\n      }\n    ],\n    "pageBy": []\n  },\n  "filter": {},\n  "options": {\n    "dataLanguages": {\n      "dataLanguageType": "all_project_data_language"\n    },\n    "dataRefresh": "replace",\n    "dataPartition": {\n      "partitionAttribute": {},\n      "numberOfPartitions": 0,\n      "fetchDataSlicesInParallel": false\n    }\n  },\n  "advancedProperties": {\n    "vldbProperties": {\n      "[AnalyticalEngineProperties].[EvaluationOrdering]": {\n        "name": "EvaluationOrdering",\n        "value": "1",\n        "type": "int32",\n        "resolvedLocation": "report"\n      },\n      "[AnalyticalEngineProperties].[NullCheckingForAnalyticalEngine]": {\n        "name": "NullCheckingForAnalyticalEngine",\n        "value": "2",\n        "type": "int32",\n        "resolvedLocation": "report"\n      }\n    },\n    "metricJoinTypes": {\n      "4C051DB611D3E877C000B3B2D86C964F": {\n        "metric": {\n          "objectId": "4C051DB611D3E877C000B3B2D86C964F",\n          "subType": "metric",\n          "name": "Profit"\n        },\n        "joinType": "inner",\n        "resolvedLocation": "default"\n      },\n      "4C05177011D3E877C000B3B2D86C964F": {\n        "metric": {\n          "objectId": "4C05177011D3E877C000B3B2D86C964F",\n          "subType": "metric",\n          "name": "Revenue"\n        },\n        "joinType": "inner",\n        "resolvedLocation": "default"\n      }\n    },\n    "attributeJoinTypes": {\n      "8D679D4411D3E4981000E787EC6DE8A4": {\n        "attribute": {\n          "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Month"\n        },\n        "noParticipationInPreserveRow": false,\n        "resolvedLocation": "default"\n      },\n      "8D679D5111D3E4981000E787EC6DE8A4": {\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "noParticipationInPreserveRow": false,\n        "resolvedLocation": "default"\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Sample Response Code: 200 (The cube definition is updated successfully.)"),(0,o.kt)("h2",{id:"publish-the-cube"},"Publish the cube"),(0,o.kt)("h3",{id:"publish-the-cube-using-post-apiv2cubescubeid"},"Publish the cube using ",(0,o.kt)("a",{parentName:"h3",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/publishCube_2"},"POST /api/v2/cubes/{cubeId}")),(0,o.kt)(m,{since:"2021 Update 5",mdxType:"Available"}),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "lph8795fem9k70tnp0ftdrnvi2"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/cubes/2F15C95D934175CBC9B915915D485B0E" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: lph8795fem9k70tnp0ftdrnvi2" \\\n-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "490:RU5WLTI4MjA0MExBSU9VU0Ux",\n  "jobId": 490\n}\n')),(0,o.kt)("p",null,"Sample Response Code: 202 (Request accepted for processing.)"))}y.isMDXComponent=!0}}]);