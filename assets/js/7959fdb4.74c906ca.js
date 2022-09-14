"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5802],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4309:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return d}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],p={title:"Workflow Sample - Update and Incremental Refresh Report Advanced Properties",sidebar_label:"Update IRR Advanced Properties",description:"This topic covers several workflows for updating an Incremental Refresh Report advanced properties through the Modeling service."},s=void 0,l={unversionedId:"common-workflows/manage-incremental-refresh-report/update-irr-advanced-properties",id:"common-workflows/manage-incremental-refresh-report/update-irr-advanced-properties",title:"Workflow Sample - Update and Incremental Refresh Report Advanced Properties",description:"This topic covers several workflows for updating an Incremental Refresh Report advanced properties through the Modeling service.",source:"@site/docs/common-workflows/manage-incremental-refresh-report/update-irr-advanced-properties.md",sourceDirName:"common-workflows/manage-incremental-refresh-report",slug:"/common-workflows/manage-incremental-refresh-report/update-irr-advanced-properties",permalink:"/rest-api-docs/common-workflows/manage-incremental-refresh-report/update-irr-advanced-properties",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/main/docs/common-workflows/manage-incremental-refresh-report/update-irr-advanced-properties.md",tags:[],version:"current",lastUpdatedBy:"Liang, Jiapei",lastUpdatedAt:1663189678,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"Workflow Sample - Update and Incremental Refresh Report Advanced Properties",sidebar_label:"Update IRR Advanced Properties",description:"This topic covers several workflows for updating an Incremental Refresh Report advanced properties through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create an IRR with Advanced Properties",permalink:"/rest-api-docs/common-workflows/manage-incremental-refresh-report/create-an-irr-with-advanced-properties"},next:{title:"Manage Security Filter Objects",permalink:"/rest-api-docs/common-workflows/manage-security-filter-objects/"}},c={},d=[{value:"Update the Incremental Refresh Report using PUT /api/model/incrementalRefresh/{incrementalRefreshReportId}",id:"update-the-incremental-refresh-report-using-put-apimodelincrementalrefreshincrementalrefreshreportid",level:2}],m={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This topic covers several workflows for updating an Incremental Refresh Report advanced properties through the Modeling service."),(0,o.kt)("p",null,"You want to create a new Incremental Refresh Report and name it ",(0,o.kt)("inlineCode",{parentName:"p"},"YearInList_Insert")," in the destination folder of ",(0,o.kt)("inlineCode",{parentName:"p"},"8A1831FF494F528D02A4A8BF5FB73459"),". The target cube of Incremental Refresh Report is called ",(0,o.kt)("inlineCode",{parentName:"p"},"Year_Country_Category_3")," with the object ID of ",(0,o.kt)("inlineCode",{parentName:"p"},"F71F4C0E4B8F73B143B0DD83EEB47F43"),". The project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),". You also want to set some advanced properties of ",(0,o.kt)("strong",{parentName:"p"},"Metric Join Type")," and ",(0,o.kt)("strong",{parentName:"p"},"Attribute Join Type"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client."),(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("h2",{id:"update-the-incremental-refresh-report-using-put-apimodelincrementalrefreshincrementalrefreshreportid"},"Update the Incremental Refresh Report using ",(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/put_api_model_incrementalRefresh__incrementalRefreshReportId_"},"PUT /api/model/incrementalRefresh/{incrementalRefreshReportId}")),(0,o.kt)("p",null,"To update the Incremental Refresh Report, you must submit the request body with the correct information."),(0,o.kt)("p",null,"The response can change based on the request parameters provided by the caller. Use the following parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Header: ",(0,o.kt)("inlineCode",{parentName:"li"},"X-MSTR-authToken")," - The authorization token"),(0,o.kt)("li",{parentName:"ul"},"Header: ",(0,o.kt)("inlineCode",{parentName:"li"},"X-MSTR-ProjectID")," - The ID of the project"),(0,o.kt)("li",{parentName:"ul"},"Parameter: ",(0,o.kt)("inlineCode",{parentName:"li"},"showFilterTokens"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Specify whether the Incremental Refresh Report ",(0,o.kt)("inlineCode",{parentName:"li"},"filter")," is returned in ",(0,o.kt)("inlineCode",{parentName:"li"},"tokens")," format, along with ",(0,o.kt)("inlineCode",{parentName:"li"},"text")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"tree")," formats."),(0,o.kt)("li",{parentName:"ul"},"If omitted or ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),", only ",(0,o.kt)("inlineCode",{parentName:"li"},"text")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"tree")," formats are returned."),(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),", all ",(0,o.kt)("inlineCode",{parentName:"li"},"text"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"tree"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"tokens")," formats are returned.")))),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "advancedProperties": {\n    "metricJoinTypes": {\n      "7FD5B69611D5AC76C000D98A4CC5F24F": {\n        "metric": {\n          "objectId": "7FD5B69611D5AC76C000D98A4CC5F24F",\n          "subType": "metric",\n          "name": "Cost"\n        },\n        "joinType": "inner",\n        "resolvedLocation": "report_target"\n      }\n    },\n    "attributeJoinTypes": {\n      "8D679D5111D3E4981000E787EC6DE8A4": {\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "noParticipationInPreserveRow": true,\n        "resolvedLocation": "report_target"\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "http://10.23.36.118:8080/MicroStrategyLibrary/api/model/incrementalRefresh/BC95299E4447D23A6EA4E9B1049F4221?showAdvancedProperties=true" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: nmrptgf9iuto1akvjv6vujs6g4" \\\n-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" \\\n-H "Content-Type: application/json" \\\n-d \'{"advancedProperties":{"metricJoinTypes":{"7FD5B69611D5AC76C000D98A4CC5F24F":{"metric":{"objectId":"7FD5B69611D5AC76C000D98A4CC5F24F","subType":"metric","name":"Cost"},"joinType":"inner","resolvedLocation":"report_target"}},"attributeJoinTypes":{"8D679D5111D3E4981000E787EC6DE8A4":{"attribute":{"objectId":"8D679D5111D3E4981000E787EC6DE8A4","subType":"attribute","name":"Year"},"noParticipationInPreserveRow":true,"resolvedLocation":"report_target"}}}}\'\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,"You can view the Incremental Refresh Report definition in the body of the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-06-10T07:17:20.563Z",\n    "dateModified": "2022-06-10T07:41:09.509Z",\n    "versionId": "96287309412CD7FA1BB89C993CF028D3",\n    "primaryLocale": "en-US",\n    "objectId": "BC95299E4447D23A6EA4E9B1049F4221",\n    "subType": "report_increment_refresh",\n    "name": "Original Test",\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459"\n  },\n  "targetCube": {\n    "objectId": "946C0C0142C5210D01FEA1AA6B83F202",\n    "subType": "report_cube",\n    "name": "IC01"\n  },\n  "incrementType": "filter",\n  "refreshType": "update",\n  "filter": {\n    "text": "Year = 2016, 2017, 2015",\n    "tree": {\n      "type": "predicate_element_list",\n      "predicateId": "0B3E24AD3F0B47FAAD99CC1DE696ED03",\n      "predicateTree": {\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "elements": [\n          {\n            "display": "2016",\n            "elementId": "h2016"\n          },\n          {\n            "display": "2017",\n            "elementId": "h2017"\n          },\n          {\n            "display": "2015",\n            "elementId": "h2015"\n          }\n        ],\n        "function": "in"\n      }\n    }\n  },\n  "advancedProperties": {\n    "vldbProperties": {\n      "[AnalyticalEngineProperties].[ConsolidationSubtotal]": {\n        "name": "ConsolidationSubtotal",\n        "value": "true",\n        "type": "boolean",\n        "resolvedLocation": "default"\n      },\n      "[MDX Syntax].[MDX Add Fake Measure]": {\n        "name": "MDX Add Fake Measure",\n        "value": "1",\n        "type": "int32",\n        "resolvedLocation": "default"\n      }\n    },\n    "metricJoinTypes": {\n      "7FD5B69611D5AC76C000D98A4CC5F24F": {\n        "metric": {\n          "objectId": "7FD5B69611D5AC76C000D98A4CC5F24F",\n          "subType": "metric",\n          "name": "Cost"\n        },\n        "joinType": "inner",\n        "resolvedLocation": "report_target"\n      },\n      "4C051DB611D3E877C000B3B2D86C964F": {\n        "metric": {\n          "objectId": "4C051DB611D3E877C000B3B2D86C964F",\n          "subType": "metric",\n          "name": "Profit"\n        },\n        "joinType": "inner",\n        "resolvedLocation": "default"\n      }\n    },\n    "attributeJoinTypes": {\n      "8D679D5111D3E4981000E787EC6DE8A4": {\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "noParticipationInPreserveRow": true,\n        "resolvedLocation": "report_target"\n      },\n      "8D679D3711D3E4981000E787EC6DE8A4": {\n        "attribute": {\n          "objectId": "8D679D3711D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Category"\n        },\n        "noParticipationInPreserveRow": false,\n        "resolvedLocation": "default"\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Response Code: 200 (Incremental Refresh Report's definition is returned successfully.)"))}u.isMDXComponent=!0}}]);