"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[9095],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=i,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3186:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var r,i=n(3117),o=n(102),a=(n(7294),n(3905)),s=["components"],p={title:"Retrieve a report's definition",description:"You can use REST APIs to retrieve the definition of a report through Modeling service."},l=void 0,c={unversionedId:"common-workflows/analytics/manage-reports/manage-report-objects/retrieve-a-reports-definition",id:"common-workflows/analytics/manage-reports/manage-report-objects/retrieve-a-reports-definition",title:"Retrieve a report's definition",description:"You can use REST APIs to retrieve the definition of a report through Modeling service.",source:"@site/docs/common-workflows/analytics/manage-reports/manage-report-objects/retrieve-a-reports-definition.md",sourceDirName:"common-workflows/analytics/manage-reports/manage-report-objects",slug:"/common-workflows/analytics/manage-reports/manage-report-objects/retrieve-a-reports-definition",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-report-objects/retrieve-a-reports-definition",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/manage-reports/manage-report-objects/retrieve-a-reports-definition.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1676479687,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{title:"Retrieve a report's definition",description:"You can use REST APIs to retrieve the definition of a report through Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Manage report objects",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-report-objects/"},next:{title:"Create a new report",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-report-objects/create-a-new-report"}},d={},m=[{value:"Retrieve a report&#39;s definition directly",id:"retrieve-a-reports-definition-directly",level:2},{value:"Retrieve a report&#39;s definition within a report instance",id:"retrieve-a-reports-definition-within-a-report-instance",level:2},{value:"1. Create a report instance",id:"1-create-a-report-instance",level:3},{value:"2. Get a report&#39;s definition within the instance",id:"2-get-a-reports-definition-within-the-instance",level:3},{value:"3. Delete report instance",id:"3-delete-report-instance",level:3}],u=(r="Available",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)}),f={toc:m};function y(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(u,{since:"2021 Update 7",mdxType:"Available"}),(0,a.kt)("p",null,"You can use REST APIs to retrieve the definition of a report through Modeling service. This topic includes the following workflows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#retrieve-a-reports-definition-directly"},"Retrieve a report's definition directly")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#retrieve-a-reports-definition-within-a-report-instance"},"Retrieve a report's definition within a report instance"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#1-create-a-report-instance"},"1. Create a report instance")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#2-get-a-reports-definition-within-the-instance"},"2. Get a report's definition within the instance")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#3-delete-report-instance"},"3. Delete report instance"))))),(0,a.kt)("p",null,"In both sample workflows, we want to retrieve a report\u2019s definition from \u201cMicroStrategy Tutorial\u201c project. The report ID is ",(0,a.kt)("inlineCode",{parentName:"p"},"FFDAB82F4CA397073ABD4196FCBCD918"),". The project ID is ",(0,a.kt)("inlineCode",{parentName:"p"},"B19DEDCC11D4E0EFC000EB9495D0F44F"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,a.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,a.kt)("h2",{id:"retrieve-a-reports-definition-directly"},"Retrieve a report's definition directly"),(0,a.kt)("p",null,"By using this workflow, you can quickly get the report\u2019s definition, but you still need to create a report instance to do any further modification."),(0,a.kt)("p",null,"Endpoint: ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-getReport"},"GET /api/model/reports/{reportId}")),(0,a.kt)("p",null,"Sample Request Header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "5vcpml6ds4pe9g13c0oevqnmae"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,a.kt)("p",null,"Sample Request Body: Empty"),(0,a.kt)("p",null,"Sample Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/FFDAB82F4CA397073ABD4196FCBCD918?showExpressionAs=tree' -H 'X-MSTR-AuthToken: 5vcpml6ds4pe9g13c0oevqnmae' -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F' -H 'Cookie: JSESSIONID=0FAABB8353719758660C07AF715CA12C; iSession=5vcpml6ds4pe9g13c0oevqnmae'\n")),(0,a.kt)("p",null,"Sample Response Body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2003-10-17T18:09:11.000Z",\n    "dateModified": "2016-08-12T19:33:32.000Z",\n    "versionId": "0DDDEEF04A42DE7AB4C752A146D7F446",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "FFDAB82F4CA397073ABD4196FCBCD918",\n    "subType": "report_grid",\n    "name": "Units Sold Analysis"\n  },\n  "sourceType": "normal",\n  "dataSource": {\n    "dataTemplate": {\n      "units": [\n        {\n          "type": "metrics",\n          "elements": [\n            {\n              "id": "803BE0704085BDE65FEA55B03E83D43B",\n              "name": "Units Sold Status",\n              "subType": "metric"\n            },\n            {\n              "id": "5B3114084613C45EF079279122DD0DDE",\n              "name": "Units Sold Forecast",\n              "subType": "metric"\n            },\n            {\n              "id": "4C05190A11D3E877C000B3B2D86C964F",\n              "name": "Units Sold",\n              "subType": "metric"\n            }\n          ]\n        }\n      ]\n    },\n    "filter": {\n      "text": "Month = Dec 2016",\n      "tree": {\n        "type": "predicate_filter_qualification",\n        "predicateId": "9F9A0054208D43BCB89678B9E93C26D4",\n        "predicateText": "Month = Dec 2016",\n        "predicateTree": {\n          "filter": {\n            "objectId": "87989C374DF0A7B20BFCDFB9E6E042F1",\n            "subType": "filter",\n            "name": "Fixed month selection - December current year"\n          },\n          "isIndependent": 0\n        }\n      }\n    }\n  },\n  "grid": {\n    "viewTemplate": {\n      "rows": {\n        "units": [],\n        "sorts": []\n      },\n      "columns": {\n        "units": [\n          {\n            "type": "metrics",\n            "elements": [\n              {\n                "id": "803BE0704085BDE65FEA55B03E83D43B",\n                "name": "Units Sold Status",\n                "subType": "metric",\n                "thresholds": [\n                  {\n                    "format": [\n                      {\n                        "type": "alignment_horizontal",\n                        "value": "3"\n                      },\n                      {\n                        "type": "font_name",\n                        "value": "Wingdings"\n                      }\n                    ],\n                    "condition": {\n                      "text": "{Units Sold} > {Units Sold Forecast}",\n                      "tree": {\n                        "type": "predicate_metric_qualification",\n                        "predicateId": "3F7973B48873456ABDC742B7CAB7872D",\n                        "predicateText": "{Units Sold} > {Units Sold Forecast}",\n                        "predicateTree": {\n                          "function": "greater",\n                          "parameters": [\n                            {\n                              "parameterType": "object_reference",\n                              "target": {\n                                "objectId": "5B3114084613C45EF079279122DD0DDE",\n                                "subType": "metric",\n                                "name": "Units Sold Forecast"\n                              }\n                            }\n                          ],\n                          "levelType": "metric_level",\n                          "metric": {\n                            "objectId": "4C05190A11D3E877C000B3B2D86C964F",\n                            "subType": "metric",\n                            "name": "Units Sold"\n                          },\n                          "metricFunction": "value",\n                          "isIndependent": 0,\n                          "nullInclude": 0\n                        }\n                      }\n                    },\n                    "name": "Positive",\n                    "replaceText": "4",\n                    "semantics": "symbol",\n                    "scope": "metric_only",\n                    "enable": true\n                  }\n                ]\n              },\n              {\n                "id": "5B3114084613C45EF079279122DD0DDE",\n                "name": "Units Sold Forecast",\n                "subType": "metric"\n              },\n              {\n                "id": "4C05190A11D3E877C000B3B2D86C964F",\n                "name": "Units Sold",\n                "subType": "metric"\n              }\n            ]\n          }\n        ],\n        "sorts": []\n      },\n      "pageBy": {\n        "units": [],\n        "sorts": []\n      }\n    },\n    "viewFilter": {}\n  }\n}\n')),(0,a.kt)("p",null,"Response Code: 200 (The report's definition is returned successfully.)"),(0,a.kt)("h2",{id:"retrieve-a-reports-definition-within-a-report-instance"},"Retrieve a report's definition within a report instance"),(0,a.kt)("p",null,"By using this workflow, you can do modifications after the report instance has been created. A series of modifications and creations will be set to the metadata when you save the report."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"A report instance is required for getting, creating, updating, deleting derived elements in report. A report instance maintains an indivisible group of creations or modifications on a report. It is similar to the changeset concept in Modeling service, but the scope is limited to report related objects.")),(0,a.kt)("h3",{id:"1-create-a-report-instance"},"1. Create a report instance"),(0,a.kt)("p",null,"Endpoint: ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-createReportInstance"},"POST /api/model/reports/{reportId}/instances")),(0,a.kt)("p",null,"Sample Request Header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "vslb4k2o4api370rf2jq2htbm2"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,a.kt)("p",null,"Sample Request Body: Empty"),(0,a.kt)("p",null,"Sample Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/FFDAB82F4CA397073ABD4196FCBCD918/instances' -H 'accept: application/json' -H 'X-MSTR-AuthToken: vslb4k2o4api370rf2jq2htbm2' -H 'X-MSTR-ProjectId: B19DEDCC11D4E0EFC000EB9495D0F44F'\n")),(0,a.kt)("p",null,"Sample Response Body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "25114D344481A2EA0400A1AD21450BED"\n}\n')),(0,a.kt)("p",null,"Sample Response Code: 201 (A new report instance is created successfully.)"),(0,a.kt)("h3",{id:"2-get-a-reports-definition-within-the-instance"},"2. Get a report's definition within the instance"),(0,a.kt)("p",null,"Endpoint: ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-getReport"},"GET /api/model/reports/{reportId}")),(0,a.kt)("p",null,"Sample Request Header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "5vcpml6ds4pe9g13c0oevqnmae"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,a.kt)("p",null,"Sample Request Body: Empty"),(0,a.kt)("p",null,"Sample Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/FFDAB82F4CA397073ABD4196FCBCD918' -H 'X-MSTR-MS-Instance: 25114D344481A2EA0400A1AD21450BED' -H 'X-MSTR-AuthToken: 5vcpml6ds4pe9g13c0oevqnmae' -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F' -H 'Cookie: JSESSIONID=12F90A04AD40EC78CEBEE570A1E496E4; iSession=ldk7lv4emfrqs6rmtfniq1tpfq'\n")),(0,a.kt)("p",null,"Sample Response Body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2003-10-17T18:09:11.000Z",\n    "dateModified": "2016-08-12T19:33:32.000Z",\n    "versionId": "0DDDEEF04A42DE7AB4C752A146D7F446",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "FFDAB82F4CA397073ABD4196FCBCD918",\n    "subType": "report_grid",\n    "name": "Units Sold Analysis"\n  },\n  "sourceType": "normal",\n  "dataSource": {\n    "dataTemplate": {\n      "units": [\n        {\n          "type": "metrics",\n          "elements": [\n            {\n              "id": "803BE0704085BDE65FEA55B03E83D43B",\n              "name": "Units Sold Status",\n              "subType": "metric"\n            },\n            {\n              "id": "5B3114084613C45EF079279122DD0DDE",\n              "name": "Units Sold Forecast",\n              "subType": "metric"\n            },\n            {\n              "id": "4C05190A11D3E877C000B3B2D86C964F",\n              "name": "Units Sold",\n              "subType": "metric"\n            }\n          ]\n        }\n      ]\n    },\n    "filter": {\n      "text": "Month = Dec 2016",\n      "tree": {\n        "type": "predicate_filter_qualification",\n        "predicateId": "9F9A0054208D43BCB89678B9E93C26D4",\n        "predicateText": "Month = Dec 2016",\n        "predicateTree": {\n          "filter": {\n            "objectId": "87989C374DF0A7B20BFCDFB9E6E042F1",\n            "subType": "filter",\n            "name": "Fixed month selection - December current year"\n          },\n          "isIndependent": 0\n        }\n      }\n    }\n  },\n  "grid": {\n    "viewTemplate": {\n      "rows": {\n        "units": [],\n        "sorts": []\n      },\n      "columns": {\n        "units": [\n          {\n            "type": "metrics",\n            "elements": [\n              {\n                "id": "803BE0704085BDE65FEA55B03E83D43B",\n                "name": "Units Sold Status",\n                "subType": "metric",\n                "thresholds": [\n                  {\n                    "format": [\n                      {\n                        "type": "alignment_horizontal",\n                        "value": "3"\n                      },\n                      {\n                        "type": "font_name",\n                        "value": "Wingdings"\n                      },\n                      {\n                        "type": "font_color",\n                        "value": "32768"\n                      },\n                      {\n                        "type": "font_script",\n                        "value": "2"\n                      },\n                      {\n                        "type": "background_fill_style",\n                        "value": "0"\n                      }\n                    ],\n                    "condition": {\n                      "text": "{Units Sold} > {Units Sold Forecast}",\n                      "tree": {\n                        "type": "predicate_metric_qualification",\n                        "predicateId": "3F7973B48873456ABDC742B7CAB7872D",\n                        "predicateText": "{Units Sold} > {Units Sold Forecast}",\n                        "predicateTree": {\n                          "function": "greater",\n                          "parameters": [\n                            {\n                              "parameterType": "object_reference",\n                              "target": {\n                                "objectId": "5B3114084613C45EF079279122DD0DDE",\n                                "subType": "metric",\n                                "name": "Units Sold Forecast"\n                              }\n                            }\n                          ],\n                          "levelType": "metric_level",\n                          "metric": {\n                            "objectId": "4C05190A11D3E877C000B3B2D86C964F",\n                            "subType": "metric",\n                            "name": "Units Sold"\n                          },\n                          "metricFunction": "value",\n                          "isIndependent": 0,\n                          "nullInclude": 0\n                        }\n                      }\n                    },\n                    "name": "Positive",\n                    "replaceText": "4",\n                    "semantics": "symbol",\n                    "scope": "metric_only",\n                    "enable": true\n                  }\n                ]\n              },\n              {\n                "id": "5B3114084613C45EF079279122DD0DDE",\n                "name": "Units Sold Forecast",\n                "subType": "metric"\n              },\n              {\n                "id": "4C05190A11D3E877C000B3B2D86C964F",\n                "name": "Units Sold",\n                "subType": "metric"\n              }\n            ]\n          }\n        ],\n        "sorts": []\n      },\n      "pageBy": {\n        "units": [],\n        "sorts": []\n      }\n    },\n    "viewFilter": {}\n  }\n}\n')),(0,a.kt)("p",null,"Response Code: 200 (The report's definition is returned successfully.)"),(0,a.kt)("h3",{id:"3-delete-report-instance"},"3. Delete report instance"),(0,a.kt)("p",null,"Endpoint: ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-deleteReportInstance"},"DELETE /api/model/reports/{reportId}/instances")),(0,a.kt)("p",null,"Sample Request Header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "vslb4k2o4api370rf2jq2htbm2"\n"X-MSTR-MS-Instance": "25114D344481A2EA0400A1AD21450BED"\n')),(0,a.kt)("p",null,"Sample Request Body: Empty"),(0,a.kt)("p",null,"Sample Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X DELETE 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/FFDAB82F4CA397073ABD4196FCBCD918/instances' -H 'X-MSTR-MS-Instance: 25114D344481A2EA0400A1AD21450BED' -H 'X-MSTR-AuthToken: vslb4k2o4api370rf2jq2htbm2' -H 'Cookie: JSESSIONID=DFCB945B0A0DD959D26BA05F9AE20B3B; iSession=vslb4k2o4api370rf2jq2htbm2'\n")),(0,a.kt)("p",null,"Sample Response Body: Empty"),(0,a.kt)("p",null,"Sample Response Code: 204 (The report instance has been deleted successfully.)"))}y.isMDXComponent=!0}}]);