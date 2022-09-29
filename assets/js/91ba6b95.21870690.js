"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[4244],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7902:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),s=["components"],i={title:"Workflow sample - Create a filter object with a custom expression",sidebar_label:"Create a filter object with a custom expression",description:"This workflow sample demonstrates how to create a new filter object using a custom expression through the Modeling service."},l=void 0,c={unversionedId:"common-workflows/manage-filter-objects/create-a-filter-object-with-a-custom-expression",id:"common-workflows/manage-filter-objects/create-a-filter-object-with-a-custom-expression",title:"Workflow sample - Create a filter object with a custom expression",description:"This workflow sample demonstrates how to create a new filter object using a custom expression through the Modeling service.",source:"@site/docs/common-workflows/manage-filter-objects/create-a-filter-object-with-a-custom-expression.md",sourceDirName:"common-workflows/manage-filter-objects",slug:"/common-workflows/manage-filter-objects/create-a-filter-object-with-a-custom-expression",permalink:"/rest-api-docs/common-workflows/manage-filter-objects/create-a-filter-object-with-a-custom-expression",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-filter-objects/create-a-filter-object-with-a-custom-expression.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1664463721,formattedLastUpdatedAt:"Sep 29, 2022",frontMatter:{title:"Workflow sample - Create a filter object with a custom expression",sidebar_label:"Create a filter object with a custom expression",description:"This workflow sample demonstrates how to create a new filter object using a custom expression through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a filter object",permalink:"/rest-api-docs/common-workflows/manage-filter-objects/create-a-filter-object"},next:{title:"Update a filter's definition",permalink:"/rest-api-docs/common-workflows/manage-filter-objects/update-a-filters-definition"}},p={},u=[{value:"Create a changeset using POST /api/model/changesets",id:"create-a-changeset-using-post-apimodelchangesets",level:2},{value:"Create a new filter using a custom expression with POST /api/model/filters.",id:"create-a-new-filter-using-a-custom-expression-with-post-apimodelfilters",level:2},{value:"Commit the changeset using POST /api/model/changesets/{changesetId}/commit",id:"commit-the-changeset-using-post-apimodelchangesetschangesetidcommit",level:2},{value:"Delete the changeset using DELETE /api/model/changesets/{changesetId}",id:"delete-the-changeset-using-delete-apimodelchangesetschangesetid",level:2},{value:"More samples",id:"more-samples",level:2},{value:"Escape sequences for full paths",id:"escape-sequences-for-full-paths",level:3},{value:"Escape sequences for double quotes",id:"escape-sequences-for-double-quotes",level:3},{value:"Escape sequences for the <code>ApplyComparison</code> function",id:"escape-sequences-for-the-applycomparison-function",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-b6421792-16ec-4d68-9af9-8fc38eb35b7e?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"This workflow sample demonstrates how to create a new filter object using a custom expression through the Modeling service"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#create-a-changeset-using-post-apimodelchangesets"},"1. Create a changeset using `POST /api/model/changesets"),"`"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#create-a-new-filter-using-a-custom-expression-with-post-apimodelfilters"},"2. Create a new filter using a custom expression with ",(0,o.kt)("inlineCode",{parentName:"a"},"POST /api/model/filters"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#commit-the-changeset-using-post-apimodelchangesetschangesetidcommit"},"3. Commit the changeset using `POST /api/model/changesets/{changesetId}/commit"),"`"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#delete-the-changeset-using-delete-apimodelchangesetschangesetid"},"4. Delete the changeset using `DELETE /api/model/changesets/{changesetId}"),"`"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#more-samples"},"More Samples"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#escape-sequences-for-full-paths"},"Escape Sequences for Full Paths")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#escape-sequences-for-double-quotes"},"Escape Sequences for Double Quotes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#escape-sequences-for-the-applycomparison-function"},"Escape Sequences for the ApplyComparison Function"))))),(0,o.kt)("p",null,"Additional samples are provided in ",(0,o.kt)("a",{parentName:"p",href:"#more-samples"},"More Samples"),"."),(0,o.kt)("p",null,'You want to create a new "(Year(CurrentDate()) - 5)< Year@ID" filter object under the Public Objects folder in the MicroStrategy Tutorial project. The folder object ID is ',(0,o.kt)("inlineCode",{parentName:"p"},"98FE182C2A10427EACE0CD30B6768258"),". The project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("p",null,"A changeset is required for creating and updating objects (such as filters, facts, attributes, etc...) through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether."),(0,o.kt)("h2",{id:"create-a-changeset-using-post-apimodelchangesets"},"Create a changeset using ",(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset"},"POST /api/model/changesets")),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "8DF1659E9D74484D9D47B9478D4C7D00",\n  "dateCreated": "2020-11-17T17:36:31.187294Z",\n  "dateModified": "2020-11-17T17:36:31.187308Z",\n  "status": "Ready",\n  "schemaEdit": false,\n  "userName": "MSTR User",\n  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US"\n}\n')),(0,o.kt)("p",null,"Sample Response Code: 201 (A new changeset is created successfully.)"),(0,o.kt)("h2",{id:"create-a-new-filter-using-a-custom-expression-with-post-apimodelfilters"},"Create a new filter using a custom expression with ",(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Filters/ms-ms-postFilter"},"POST /api/model/filters.")),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,o.kt)("p",null,"Construct the Request Body:"),(0,o.kt)("p",null,"Make a copy of the input template and modify ",(0,o.kt)("inlineCode",{parentName:"p"},"<filter_name>"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<destination_folder_id>"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"<custom_expression>")," accordingly to construct the request body. The template looks like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "filter",\n    "name": "<filter_name>",\n    "destinationFolderId": "<destination_folder_id>"\n  },\n  "qualification": {\n    "tokens": [\n      {\n        "value": "%",\n        "type": "character"\n      },\n      {\n        "value": "<custom_expression>"\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "filter",\n    "name": "filter_for_last_5_years",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tokens": [\n      {\n        "value": "%",\n        "type": "character"\n      },\n      {\n        "value": "(Year(CurrentDate()) - 5)< Year@ID"\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("p",null,"In this sample workflow, you want to return the newly created filter and its custom expression in all formats. Thus, you should set ",(0,o.kt)("inlineCode",{parentName:"p"},"showFilterTokens=true"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"showExpressionAs=tree"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"showExpressionAs=tokens"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/filters?showFilterTokens=true&showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" -d \'{"information":{"subType":"filter","name":"filter_for_last_5_years","destinationFolderId":"98FE182C2A10427EACE0CD30B6768258"},"qualification":{"tokens":[{"value":"%","type":"character"},{"value":"(Year(CurrentDate()) - 5)< Year@ID"}]}}\'\n')),(0,o.kt)("p",null,"Sample Response Body: You can view the new filter's definition in the body of the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "versionId": "C181D36B086346A885CD2C7F77A06BFA",\n    "primaryLocale": "en-US",\n    "objectId": "F31F4B055D7C408EA7847FF5728EE767",\n    "subType": "filter",\n    "name": "filter_for_last_5_years",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "text": "(Year(CurrentDate) - 5) < Year (ID)",\n    "tree": {\n      "type": "predicate_custom",\n      "predicateId": "2A2870D13AE04C21A7CE053453BF7A38",\n      "predicateText": "(Year(CurrentDate) - 5) < Year (ID)",\n      "predicateTree": {\n        "expression": {\n          "text": "(Year(CurrentDate) - 5) < Year (ID)",\n          "tree": {\n            "function": "less",\n            "children": [\n              {\n                "function": "minus",\n                "children": [\n                  {\n                    "function": "year",\n                    "children": [\n                      {\n                        "function": "current_date",\n                        "levelType": "metric_level",\n                        "type": "operator"\n                      }\n                    ],\n                    "levelType": "metric_level",\n                    "type": "operator"\n                  },\n                  {\n                    "type": "constant",\n                    "variant": {\n                      "type": "int32",\n                      "value": "5"\n                    }\n                  }\n                ],\n                "levelType": "metric_level",\n                "type": "operator"\n              },\n              {\n                "attribute": {\n                  "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n                  "subType": "attribute",\n                  "name": "Year"\n                },\n                "form": {\n                  "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n                  "subType": "attribute_form_system",\n                  "name": "ID"\n                },\n                "type": "form_shortcut"\n              }\n            ],\n            "levelType": "metric_level",\n            "type": "operator"\n          },\n          "tokens": [\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "%",\n              "type": "character"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "(",\n              "type": "character"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "Year",\n              "type": "function",\n              "target": {\n                "dateCreated": "2001-11-09T15:47:55.000Z",\n                "dateModified": "2018-01-29T21:13:05.000Z",\n                "versionId": "32737F3011E8053925F00080EF7500C5",\n                "primaryLocale": "en-US",\n                "objectId": "6F7DF5F8449111D5BEA300B0D01A55EF",\n                "subType": "function",\n                "name": "Year",\n                "description": "Returns the year of the input date."\n              }\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "(",\n              "type": "character"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "CurrentDate",\n              "type": "function",\n              "target": {\n                "dateCreated": "2001-11-09T15:47:54.000Z",\n                "dateModified": "2018-01-29T21:13:05.000Z",\n                "versionId": "32363DBE11E8053925F00080EF7500C5",\n                "primaryLocale": "en-US",\n                "objectId": "6F7DF5F1449111D5BEA300B0D01A55EF",\n                "subType": "function",\n                "name": "CurrentDate",\n                "description": "Returns the current date based on the database timer. This function takes no input parameters."\n              }\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "(",\n              "type": "character"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": ")",\n              "type": "character"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": ")",\n              "type": "character"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "-",\n              "type": "character",\n              "target": {\n                "dateCreated": "2001-01-02T20:47:41.000Z",\n                "dateModified": "2018-01-29T21:13:06.000Z",\n                "versionId": "330711DC11E8053925F00080EF7500C5",\n                "primaryLocale": "en-US",\n                "objectId": "8107C311DD9911D3B98100C04F2233EA",\n                "subType": "function",\n                "name": "-",\n                "description": "Returns the difference between two values."\n              }\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "5",\n              "type": "integer"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": ")",\n              "type": "character"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "<",\n              "type": "character",\n              "target": {\n                "dateCreated": "2001-01-02T20:47:39.000Z",\n                "dateModified": "2018-01-29T21:13:07.000Z",\n                "versionId": "3333B30411E8053925F00080EF7500C5",\n                "primaryLocale": "en-US",\n                "objectId": "8107C318DD9911D3B98100C04F2233EA",\n                "subType": "function",\n                "name": "<",\n                "description": "Returns TRUE if the first value is lesser than the second value."\n              }\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "Year@ID",\n              "type": "object_at_form",\n              "target": {\n                "dateCreated": "2001-01-02T20:48:10.000Z",\n                "dateModified": "2012-01-27T12:00:32.000Z",\n                "versionId": "24CEEC7044C6C7008EE0DF96565E9459",\n                "primaryLocale": "en-US",\n                "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n                "subType": "attribute",\n                "name": "Year"\n              },\n              "attributeForm": {\n                "objectId": "45C11FA478E745FEA08D781CEA190FE5"\n              }\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "",\n              "type": "end_of_text"\n            }\n          ]\n        }\n      }\n    },\n    "tokens": [\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "%",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "(",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Year",\n        "type": "function",\n        "target": {\n          "dateCreated": "2001-11-09T15:47:55.000Z",\n          "dateModified": "2018-01-29T21:13:05.000Z",\n          "versionId": "32737F3011E8053925F00080EF7500C5",\n          "primaryLocale": "en-US",\n          "objectId": "6F7DF5F8449111D5BEA300B0D01A55EF",\n          "subType": "function",\n          "name": "Year",\n          "description": "Returns the year of the input date."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "(",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "CurrentDate",\n        "type": "function",\n        "target": {\n          "dateCreated": "2001-11-09T15:47:54.000Z",\n          "dateModified": "2018-01-29T21:13:05.000Z",\n          "versionId": "32363DBE11E8053925F00080EF7500C5",\n          "primaryLocale": "en-US",\n          "objectId": "6F7DF5F1449111D5BEA300B0D01A55EF",\n          "subType": "function",\n          "name": "CurrentDate",\n          "description": "Returns the current date based on the database timer. This function takes no input parameters."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "(",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ")",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ")",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "-",\n        "type": "character",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:41.000Z",\n          "dateModified": "2018-01-29T21:13:06.000Z",\n          "versionId": "330711DC11E8053925F00080EF7500C5",\n          "primaryLocale": "en-US",\n          "objectId": "8107C311DD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": "-",\n          "description": "Returns the difference between two values."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "5",\n        "type": "integer"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ")",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "<",\n        "type": "character",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:39.000Z",\n          "dateModified": "2018-01-29T21:13:07.000Z",\n          "versionId": "3333B30411E8053925F00080EF7500C5",\n          "primaryLocale": "en-US",\n          "objectId": "8107C318DD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": "<",\n          "description": "Returns TRUE if the first value is lesser than the second value."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Year@ID",\n        "type": "object_at_form",\n        "target": {\n          "dateCreated": "2001-01-02T20:48:10.000Z",\n          "dateModified": "2012-01-27T12:00:32.000Z",\n          "versionId": "24CEEC7044C6C7008EE0DF96565E9459",\n          "primaryLocale": "en-US",\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "attributeForm": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "",\n        "type": "end_of_text"\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"Response Code: 201 (A new filter is created successfully in the changeset.)"),(0,o.kt)("h2",{id:"commit-the-changeset-using-post-apimodelchangesetschangesetidcommit"},"Commit the changeset using ",(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset"},"POST /api/model/changesets/{changesetId}/commit")),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00/commit" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "8DF1659E9D74484D9D47B9478D4C7D00",\n  "dateCreated": "2020-11-17T17:42:13.312629Z",\n  "dateModified": "2020-11-17T17:44:30.814816Z",\n  "status": "Ready",\n  "schemaEdit": false,\n  "userName": "MSTR User",\n  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US"\n}\n')),(0,o.kt)("p",null,"Sample Response Code: 201 (The changeset is committed successfully.)"),(0,o.kt)("h2",{id:"delete-the-changeset-using-delete-apimodelchangesetschangesetid"},"Delete the changeset using ",(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset"},"DELETE /api/model/changesets/{changesetId}")),(0,o.kt)("p",null,"Sample Request Header"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00" -H "accept: */*" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,o.kt)("p",null,"Sample Response Body: Empty"),(0,o.kt)("p",null,"Sample Response Code: 204 (The changeset is deleted successfully.)"),(0,o.kt)("h2",{id:"more-samples"},"More samples"),(0,o.kt)("p",null,"The following are additional examples to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<custom expression>")," from the input template."),(0,o.kt)("h3",{id:"escape-sequences-for-full-paths"},"Escape sequences for full paths"),(0,o.kt)("p",null,"Use full paths to the object to avoid ambiguity. Make sure to use escape sequences for any backslashes in the expression."),(0,o.kt)("p",null,"The sample request body shown below contains escape sequences for the backslashes in the following expression:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"\\Schema Objects\\Attributes\\Geography\\Region]@ID=1")),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "filter",\n    "name": "<filter_name>",\n    "destinationFolderId": "<destination_folder_id>"\n  },\n  "qualification": {\n    "tokens": [\n      {\n        "value": "%",\n        "type": "character"\n      },\n      {\n        "value": "[\\\\Schema Objects\\\\Attributes\\\\Geography\\\\Region]@ID=1"\n      }\n    ]\n  }\n}\n')),(0,o.kt)("h3",{id:"escape-sequences-for-double-quotes"},"Escape sequences for double quotes"),(0,o.kt)("p",null,"Make sure to use escape sequences for any double quotes in the expression."),(0,o.kt)("p",null,"The sample request body shown below contains escape sequences for double quotes in the following expression:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'Promotion@DESC in ("Valentine\'s Day", "Summer Fun")')),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "filter",\n    "name": "<filter_name>",\n    "destinationFolderId": "<destination_folder_id>"\n  },\n  "qualification": {\n    "tokens": [\n      {\n        "value": "%",\n        "type": "character"\n      },\n      {\n        "value": "Promotion@DESC in (\\"Valentine\'s Day\\", \\"Summer Fun\\")"\n      }\n    ]\n  }\n}\n')),(0,o.kt)("h3",{id:"escape-sequences-for-the-applycomparison-function"},"Escape sequences for the ",(0,o.kt)("inlineCode",{parentName:"h3"},"ApplyComparison")," function"),(0,o.kt)("p",null,"If you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ApplyComparison")," function in an expression, make sure to use escape sequences for the double quotes."),(0,o.kt)("p",null,"The sample request body shown below contains escape sequences for double quotes within the following ",(0,o.kt)("inlineCode",{parentName:"p"},"ApplyComparison")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'ApplyComparison (\\"#0 between #1 and #2\\",? [Value Prompt Date], [Order Date]@ID, [Ship Date]@ID)\n')),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "filter",\n    "name": "<filter_name>",\n    "destinationFolderId": "<destination_folder_id>"\n  },\n  "qualification": {\n    "tokens": [\n      {\n        "value": "%",\n        "type": "character"\n      },\n      {\n        "value": "ApplyComparison (\\"#0 between #1 and #2\\",? [Value Prompt Date], [Order Date]@ID, [Ship Date]@ID)"\n      }\n    ]\n  }\n}\n')))}m.isMDXComponent=!0}}]);