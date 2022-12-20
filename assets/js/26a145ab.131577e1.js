"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3025],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,s(s({ref:t},u),{},{components:n})):a.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},942:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),s=["components"],o={title:"Workflow sample - Create a security filter object using a custom expression",sidebar_label:"Create a security filter object using a custom expression",description:"This workflow sample demonstrates how to create a security filter definition through the Modeling service using a custom expression."},l=void 0,c={unversionedId:"common-workflows/manage-security-filter-objects/create-a-security-filter-object-using-a-custom-expression",id:"common-workflows/manage-security-filter-objects/create-a-security-filter-object-using-a-custom-expression",title:"Workflow sample - Create a security filter object using a custom expression",description:"This workflow sample demonstrates how to create a security filter definition through the Modeling service using a custom expression.",source:"@site/docs/common-workflows/manage-security-filter-objects/create-a-security-filter-object-using-a-custom-expression.md",sourceDirName:"common-workflows/manage-security-filter-objects",slug:"/common-workflows/manage-security-filter-objects/create-a-security-filter-object-using-a-custom-expression",permalink:"/rest-api-docs/common-workflows/manage-security-filter-objects/create-a-security-filter-object-using-a-custom-expression",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-security-filter-objects/create-a-security-filter-object-using-a-custom-expression.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1671571075,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{title:"Workflow sample - Create a security filter object using a custom expression",sidebar_label:"Create a security filter object using a custom expression",description:"This workflow sample demonstrates how to create a security filter definition through the Modeling service using a custom expression."},sidebar:"tutorialSidebar",previous:{title:"Update a security filter definition",permalink:"/rest-api-docs/common-workflows/manage-security-filter-objects/update-a-security-filter-definition"},next:{title:"Retrieve a security filter's member",permalink:"/rest-api-docs/common-workflows/manage-security-filter-objects/retrieve-a-security-filters-member"}},u={},p=[{value:"1. Create a changeset using POST /api/model/changesets",id:"1-create-a-changeset-using-post-apimodelchangesets",level:2},{value:"2. Create a security filter using a custom expression with POST /api/model/securityFilters",id:"2-create-a-security-filter-using-a-custom-expression-with-post-apimodelsecurityfilters",level:2},{value:"3. Commit the changeset using POST /api/model/changesets/{changesetId}/commit",id:"3-commit-the-changeset-using-post-apimodelchangesetschangesetidcommit",level:2},{value:"4. Delete the changeset using DELETE /api/model/changesets/{changesetId}",id:"4-delete-the-changeset-using-delete-apimodelchangesetschangesetid",level:2},{value:"More samples",id:"more-samples",level:2},{value:"Escape sequences for full paths",id:"escape-sequences-for-full-paths",level:3},{value:"Escape sequences for double quotes",id:"escape-sequences-for-double-quotes",level:3},{value:"Escape sequences for the ApplyComparison function",id:"escape-sequences-for-the-applycomparison-function",level:3},{value:"Parsed tokens",id:"parsed-tokens",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This workflow sample demonstrates how to create a security filter definition through the Modeling service using a custom expression."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Create a changeset using ",(0,i.kt)("inlineCode",{parentName:"li"},"POST /api/model/changesets")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#2-create-a-security-filter-using-a-custom-expression-with-post-apimodelsecurityfilters"},"2. Create a security filter using a custom expression with ",(0,i.kt)("inlineCode",{parentName:"a"},"POST /api/model/securityFilters"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:3},(0,i.kt)("li",{parentName:"ol"},"Commit the changeset using ",(0,i.kt)("inlineCode",{parentName:"li"},"POST /api/model/changesets/{changesetId}/commit")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:4},(0,i.kt)("li",{parentName:"ol"},"Delete the changeset using ",(0,i.kt)("inlineCode",{parentName:"li"},"DELETE /api/model/changesets/{changesetId}")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#more-samples"},"More samples"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#escape-sequences-for-full-paths"},"Escape sequences for full paths")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#escape-sequences-for-double-quotes"},"Escape sequences for double quotes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#escape-sequences-for-the-applycomparison-function"},"Escape sequences for the applycomparison function")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#parsed-tokens"},"Parsed tokens"))))),(0,i.kt)("p",null,"Additional examples are provided in ",(0,i.kt)("a",{parentName:"p",href:"#more-samples"},"More samples"),"."),(0,i.kt)("p",null,"In this workflow sample, you want to create a new security filter object to qualification for the last five years. The custom expression is ",(0,i.kt)("inlineCode",{parentName:"p"},"\u201c(Year(CurrentDate()) - 5)< Year@ID\u201d"),". Save the security filter under the Public Objects folder in the MicroStrategy Tutorial project. The folder ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"98FE182C2A10427EACE0CD30B6768258"),". The MicroStrategy Tutorial project ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,i.kt)("h2",{id:"1-create-a-changeset-using-post-apimodelchangesets"},"1. Create a changeset using ",(0,i.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset"},"POST /api/model/changesets")),(0,i.kt)("h2",{id:"2-create-a-security-filter-using-a-custom-expression-with-post-apimodelsecurityfilters"},"2. Create a security filter using a custom expression with ",(0,i.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Security%20Filters/postSecurityFilter"},"POST /api/model/securityFilters")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,i.kt)("p",null,"Construct the Request Body:"),(0,i.kt)("p",null,"Make a copy of the template below and modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"<filter_name>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<destination_folder_id>"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"<custom_expression>")," to construct the request body."),(0,i.kt)("a",{name:"template_file"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "md_security_filter",\n    "name": "<filter_name>",\n    "destinationFolderId": "<destination_folder_id>"\n  },\n  "qualification": {\n    "tokens": [\n      {\n        "value": "%",\n        "type": "character"\n      },\n      {\n        "value": "<custom_expression>"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "md_security_filter",\n    "name": "filter_for_last_5_years",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tokens": [\n      {\n        "value": "%",\n        "type": "character"\n      },\n      {\n        "value": "(Year(CurrentDate()) - 5)< Year@ID"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("p",null,"In this workflow sample, you want to return the newly created security filter and its custom expression in all formats. Therefore, you set ",(0,i.kt)("inlineCode",{parentName:"p"},"showFilterTokens=true"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"showExpressionAs=tree"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"showExpressionAs=tokens"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/securityFilters?showFilterTokens=true&showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" -d \'{"information":{"subType":"filter","name":"last_5_years_3","destinationFolderId":"98FE182C2A10427EACE0CD30B6768258"},"qualification":{"tokens":[{"value":"%","type":"character"},{"value":"(Year(CurrentDate()) - 5)< Year@ID"}]}}\'\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,"You can view the new security filter's definition in the body of the response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "versionId": "C181D36B086346A885CD2C7F77A06BFA",\n    "primaryLocale": "en-US",\n    "objectId": "F31F4B055D7C408EA7847FF5728EE767",\n    "subType": "md_security_filter",\n    "name": "filter_for_last_5_years",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "text": "(Year(CurrentDate) - 5) < Year (ID)",\n    "tree": {\n      "type": "predicate_custom",\n      "predicateId": "2A2870D13AE04C21A7CE053453BF7A38",\n      "predicateText": "(Year(CurrentDate) - 5) < Year (ID)",\n      "predicateTree": {\n        "expression": {\n          "text": "(Year(CurrentDate) - 5) < Year (ID)",\n          "tree": {\n            "function": "less",\n            "children": [\n              {\n                "function": "minus",\n                "children": [\n                  {\n                    "function": "year",\n                    "children": [\n                      {\n                        "function": "current_date",\n                        "levelType": "metric_level",\n                        "type": "operator"\n                      }\n                    ],\n                    "levelType": "metric_level",\n                    "type": "operator"\n                  },\n                  {\n                    "type": "constant",\n                    "variant": {\n                      "type": "int32",\n                      "value": "5"\n                    }\n                  }\n                ],\n                "levelType": "metric_level",\n                "type": "operator"\n              },\n              {\n                "attribute": {\n                  "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n                  "subType": "attribute",\n                  "name": "Year"\n                },\n                "form": {\n                  "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n                  "subType": "attribute_form_system",\n                  "name": "ID"\n                },\n                "type": "form_shortcut"\n              }\n            ],\n            "levelType": "metric_level",\n            "type": "operator"\n          },\n          "tokens": [\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "%",\n              "type": "character"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "(",\n              "type": "character"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "Year",\n              "type": "function",\n              "target": {\n                "dateCreated": "2001-11-09T15:47:55.000Z",\n                "dateModified": "2018-01-29T21:13:05.000Z",\n                "versionId": "32737F3011E8053925F00080EF7500C5",\n                "primaryLocale": "en-US",\n                "objectId": "6F7DF5F8449111D5BEA300B0D01A55EF",\n                "subType": "function",\n                "name": "Year",\n                "description": "Returns the year of the input date."\n              }\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "(",\n              "type": "character"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "CurrentDate",\n              "type": "function",\n              "target": {\n                "dateCreated": "2001-11-09T15:47:54.000Z",\n                "dateModified": "2018-01-29T21:13:05.000Z",\n                "versionId": "32363DBE11E8053925F00080EF7500C5",\n                "primaryLocale": "en-US",\n                "objectId": "6F7DF5F1449111D5BEA300B0D01A55EF",\n                "subType": "function",\n                "name": "CurrentDate",\n                "description": "Returns the current date based on the database timer. This function takes no input parameters."\n              }\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "(",\n              "type": "character"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": ")",\n              "type": "character"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": ")",\n              "type": "character"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "-",\n              "type": "character",\n              "target": {\n                "dateCreated": "2001-01-02T20:47:41.000Z",\n                "dateModified": "2018-01-29T21:13:06.000Z",\n                "versionId": "330711DC11E8053925F00080EF7500C5",\n                "primaryLocale": "en-US",\n                "objectId": "8107C311DD9911D3B98100C04F2233EA",\n                "subType": "function",\n                "name": "-",\n                "description": "Returns the difference between two values."\n              }\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "5",\n              "type": "integer"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": ")",\n              "type": "character"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "<",\n              "type": "character",\n              "target": {\n                "dateCreated": "2001-01-02T20:47:39.000Z",\n                "dateModified": "2018-01-29T21:13:07.000Z",\n                "versionId": "3333B30411E8053925F00080EF7500C5",\n                "primaryLocale": "en-US",\n                "objectId": "8107C318DD9911D3B98100C04F2233EA",\n                "subType": "function",\n                "name": "<",\n                "description": "Returns TRUE if the first value is lesser than the second value."\n              }\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "Year@ID",\n              "type": "object_at_form",\n              "target": {\n                "dateCreated": "2001-01-02T20:48:10.000Z",\n                "dateModified": "2012-01-27T12:00:32.000Z",\n                "versionId": "24CEEC7044C6C7008EE0DF96565E9459",\n                "primaryLocale": "en-US",\n                "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n                "subType": "attribute",\n                "name": "Year"\n              },\n              "attributeForm": {\n                "objectId": "45C11FA478E745FEA08D781CEA190FE5"\n              }\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "",\n              "type": "end_of_text"\n            }\n          ]\n        }\n      }\n    },\n    "tokens": [\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "%",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "(",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Year",\n        "type": "function",\n        "target": {\n          "dateCreated": "2001-11-09T15:47:55.000Z",\n          "dateModified": "2018-01-29T21:13:05.000Z",\n          "versionId": "32737F3011E8053925F00080EF7500C5",\n          "primaryLocale": "en-US",\n          "objectId": "6F7DF5F8449111D5BEA300B0D01A55EF",\n          "subType": "function",\n          "name": "Year",\n          "description": "Returns the year of the input date."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "(",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "CurrentDate",\n        "type": "function",\n        "target": {\n          "dateCreated": "2001-11-09T15:47:54.000Z",\n          "dateModified": "2018-01-29T21:13:05.000Z",\n          "versionId": "32363DBE11E8053925F00080EF7500C5",\n          "primaryLocale": "en-US",\n          "objectId": "6F7DF5F1449111D5BEA300B0D01A55EF",\n          "subType": "function",\n          "name": "CurrentDate",\n          "description": "Returns the current date based on the database timer. This function takes no input parameters."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "(",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ")",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ")",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "-",\n        "type": "character",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:41.000Z",\n          "dateModified": "2018-01-29T21:13:06.000Z",\n          "versionId": "330711DC11E8053925F00080EF7500C5",\n          "primaryLocale": "en-US",\n          "objectId": "8107C311DD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": "-",\n          "description": "Returns the difference between two values."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "5",\n        "type": "integer"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ")",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "<",\n        "type": "character",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:39.000Z",\n          "dateModified": "2018-01-29T21:13:07.000Z",\n          "versionId": "3333B30411E8053925F00080EF7500C5",\n          "primaryLocale": "en-US",\n          "objectId": "8107C318DD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": "<",\n          "description": "Returns TRUE if the first value is lesser than the second value."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Year@ID",\n        "type": "object_at_form",\n        "target": {\n          "dateCreated": "2001-01-02T20:48:10.000Z",\n          "dateModified": "2012-01-27T12:00:32.000Z",\n          "versionId": "24CEEC7044C6C7008EE0DF96565E9459",\n          "primaryLocale": "en-US",\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "attributeForm": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "",\n        "type": "end_of_text"\n      }\n    ]\n  },\n  "topLevel": [],\n  "bottomLevel": []\n}\n')),(0,i.kt)("p",null,"Response Code: 201 (A new security filter is created successfully in the changeset.)"),(0,i.kt)("h2",{id:"3-commit-the-changeset-using-post-apimodelchangesetschangesetidcommit"},"3. Commit the changeset using ",(0,i.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset"},"POST /api/model/changesets/{changesetId}/commit")),(0,i.kt)("h2",{id:"4-delete-the-changeset-using-delete-apimodelchangesetschangesetid"},"4. Delete the changeset using ",(0,i.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset"},"DELETE /api/model/changesets/{changesetId}")),(0,i.kt)("h2",{id:"more-samples"},"More samples"),(0,i.kt)("p",null,"Here are more samples you can use to replace ",(0,i.kt)("inlineCode",{parentName:"p"},"<custom expression>")," in the ",(0,i.kt)("a",{parentName:"p",href:"#template_file"},"template file"),"."),(0,i.kt)("h3",{id:"escape-sequences-for-full-paths"},"Escape sequences for full paths"),(0,i.kt)("p",null,"Use full paths to the object to avoid ambiguity. Make sure to use escape sequences for any backslashes in the expression."),(0,i.kt)("p",null,"The sample request body shown below contains escape sequences for the backslashes in the following expression:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\\Schema Objects\\Attributes\\Geography\\Region]@ID=1")),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "md_security_filter",\n    "name": "<filter_name>",\n    "destinationFolderId": "<destination_folder_id>"\n  },\n  "qualification": {\n    "tokens": [\n      {\n        "value": "%",\n        "type": "character"\n      },\n      {\n        "value": "\\\\Schema Objects\\\\Attributes\\\\Geography\\\\Region]@ID=1"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("h3",{id:"escape-sequences-for-double-quotes"},"Escape sequences for double quotes"),(0,i.kt)("p",null,"Make sure to use escape sequences for any double quotes in the expression."),(0,i.kt)("p",null,"The sample request body shown below contains escape sequences for double quotes in the following expression:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'Promotion@DESC in ("Valentine\'s Day", "Summer Fun")')),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "md_security_filter",\n    "name": "<filter_name>",\n    "destinationFolderId": "<destination_folder_id>"\n  },\n  "qualification": {\n    "tokens": [\n      {\n        "value": "%",\n        "type": "character"\n      },\n      {\n        "value": "Promotion@DESC in (\\"Valentine\'s Day\\", \\"Summer Fun\\")"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("h3",{id:"escape-sequences-for-the-applycomparison-function"},"Escape sequences for the ApplyComparison function"),(0,i.kt)("p",null,"If you use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ApplyComparison")," function in an expression, make sure to use escape sequences for the double quotes."),(0,i.kt)("p",null,"The sample request body shown below contains escape sequences for double quotes within the following ",(0,i.kt)("inlineCode",{parentName:"p"},"ApplyComparison")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'ApplyComparison ("#0 between #1 and #2",? [Value Prompt Date], [Order Date]@ID, [Ship Date]@ID)\n')),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "md_security_filter",\n    "name": "<filter_name>",\n    "destinationFolderId": "<destination_folder_id>"\n  },\n  "qualification": {\n    "tokens": [\n      {\n        "value": "%",\n        "type": "character"\n      },\n      {\n        "value": "ApplyComparison (\\"#0 between #1 and #2\\",? [Value Prompt Date], [Order Date]@ID, [Ship Date]@ID)"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("h3",{id:"parsed-tokens"},"Parsed tokens"),(0,i.kt)("p",null,"Use a full format of tokens (a parsed token) to retrieve data using the GET method or construct them yourself."),(0,i.kt)("p",null,"The sample request body shown below uses the following expression:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Year@ID > 2015")),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "md_security_filter",\n    "name": "Year > 2015",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tokens": [\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "%",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Year@ID",\n        "type": "object_at_form",\n        "target": {\n          "dateCreated": "2001-01-02T20:48:10.000Z",\n          "dateModified": "2020-03-05T01:54:23.000Z",\n          "versionId": "3C99BB6811EA5E8412670080EF556E6D",\n          "primaryLocale": "en-US",\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "attributeForm": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ">",\n        "type": "character",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:41.000Z",\n          "dateModified": "2017-09-05T16:03:39.000Z",\n          "versionId": "9670ED6241357E96A07331A963928C53",\n          "primaryLocale": "en-US",\n          "objectId": "8107C317DD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": ">",\n          "description": "Returns TRUE if the first value is greater than the second value."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "2015.0",\n        "type": "integer"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "",\n        "type": "end_of_text"\n      }\n    ]\n  },\n  "topLevel": [\n    {\n      "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n      "subType": "attribute",\n      "name": "Year"\n    }\n  ],\n  "bottomLevel": []\n}\n')))}m.isMDXComponent=!0}}]);