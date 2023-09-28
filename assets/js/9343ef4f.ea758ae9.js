"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[2875],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,u=m["".concat(s,".").concat(f)]||m[f]||d[f]||i;return n?r.createElement(u,o(o({ref:t},c),{},{components:n})):r.createElement(u,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46657:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r,a=n(83117),i=n(80102),o=(n(67294),n(3905)),p=["components"],s={title:"Retrieve the incremental refresh report definition with advanced properties",sidebar_label:"Retrieve an IRR definition with advanced properties",description:"This topic covers several workflows to retrieve the definition for an Incremental Refresh Report with an advanced property value."},l=void 0,c={unversionedId:"common-workflows/analytics/manage-reports/manage-incremental-refresh-report/retrieve-an-irr-definition-with-advanced-properties",id:"common-workflows/analytics/manage-reports/manage-incremental-refresh-report/retrieve-an-irr-definition-with-advanced-properties",title:"Retrieve the incremental refresh report definition with advanced properties",description:"This topic covers several workflows to retrieve the definition for an Incremental Refresh Report with an advanced property value.",source:"@site/docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/retrieve-an-irr-definition-with-advanced-properties.md",sourceDirName:"common-workflows/analytics/manage-reports/manage-incremental-refresh-report",slug:"/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/retrieve-an-irr-definition-with-advanced-properties",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/retrieve-an-irr-definition-with-advanced-properties",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/retrieve-an-irr-definition-with-advanced-properties.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1695919031,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{title:"Retrieve the incremental refresh report definition with advanced properties",sidebar_label:"Retrieve an IRR definition with advanced properties",description:"This topic covers several workflows to retrieve the definition for an Incremental Refresh Report with an advanced property value."},sidebar:"tutorialSidebar",previous:{title:"Update an IRR definition",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/update-an-irr-definition"},next:{title:"Create an IRR with advanced properties",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/create-an-irr-with-advanced-properties"}},d={},m=[{value:"Get the definition of the specified incremental refresh report with advanced properties using GET /api/model/incrementalRefresh/{incrementalRefreshReportId}",id:"get-the-definition-of-the-specified-incremental-refresh-report-with-advanced-properties-using-get-apimodelincrementalrefreshincrementalrefreshreportid",level:2}],f=(r="Available",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),u={toc:m};function h(e){var t=e.components,n=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(f,{since:"2021 Update 6",mdxType:"Available"}),(0,o.kt)("p",null,"This topic covers several workflows to retrieve the definition for an Incremental Refresh Report with an advanced property value."),(0,o.kt)("p",null,"The object ID of the Incremental Refresh Report is \u202f",(0,o.kt)("inlineCode",{parentName:"p"},"B17F066940FA684A00C1D9AC5FC95754")," in the MicroStrategy Tutorial project. The project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client."),(0,o.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("h2",{id:"get-the-definition-of-the-specified-incremental-refresh-report-with-advanced-properties-using-get-apimodelincrementalrefreshincrementalrefreshreportid"},"Get the definition of the specified incremental refresh report with advanced properties using ",(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/ms-getIncrementalRefreshReport"},"GET /api/model/incrementalRefresh/{incrementalRefreshReportId}")),(0,o.kt)("p",null,"The response can change based on the request parameters provided by the caller. Use the following parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Header: ",(0,o.kt)("inlineCode",{parentName:"li"},"X-MSTR-authToken")," - The authorization token"),(0,o.kt)("li",{parentName:"ul"},"Header: ",(0,o.kt)("inlineCode",{parentName:"li"},"X-MSTR-ProjectID")," - The ID of the project"),(0,o.kt)("li",{parentName:"ul"},"Parameter: ",(0,o.kt)("inlineCode",{parentName:"li"},"showFilterTokens"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Specify whether the Incremental Refresh Report ",(0,o.kt)("inlineCode",{parentName:"li"},"filter")," is returned in ",(0,o.kt)("inlineCode",{parentName:"li"},"tokens")," format, along with ",(0,o.kt)("inlineCode",{parentName:"li"},"text")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"tree")," formats."),(0,o.kt)("li",{parentName:"ul"},"If omitted or ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),", only ",(0,o.kt)("inlineCode",{parentName:"li"},"text")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"tree")," formats are returned."),(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),", all ",(0,o.kt)("inlineCode",{parentName:"li"},"text"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"tree"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"tokens")," formats are returned.")))),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "http://10.23.36.118:8080/MicroStrategyLibrary/api/model/incrementalRefresh/B17F066940FA684A00C1D9AC5FC95754?showAdvancedProperties=true" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: fg8fimprk63ige5d83054oopkd" \\\n-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,"You can view the Incremental Refresh Report definition in the body of the response. Below is an example of a filter in ",(0,o.kt)("inlineCode",{parentName:"p"},"\u201ctext\u201c")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"\u201ctree\u201c")," formats."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-06-10T03:39:43.694Z",\n    "dateModified": "2022-06-10T03:39:43.694Z",\n    "versionId": "D67D158B457FA8563B4EF9AC9DE3F859",\n    "primaryLocale": "en-US",\n    "objectId": "B17F066940FA684A00C1D9AC5FC95754",\n    "subType": "report_increment_refresh",\n    "name": "IRR_IC01_report"\n  },\n  "targetCube": {\n    "objectId": "9878A08A41A93506FCBA9B91B2665D88",\n    "subType": "report_cube",\n    "name": "IC01_VLDB_all_4_change"\n  },\n  "incrementType": "report",\n  "refreshType": "update",\n  "template": {\n    "rows": [\n      {\n        "id": "8D679D5111D3E4981000E787EC6DE8A4",\n        "name": "Year",\n        "type": "attribute"\n      },\n      {\n        "id": "8D679D3711D3E4981000E787EC6DE8A4",\n        "name": "Category",\n        "type": "attribute"\n      }\n    ],\n    "columns": [\n      {\n        "type": "metrics",\n        "elements": [\n          {\n            "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n            "name": "Cost",\n            "subType": "metric"\n          },\n          {\n            "id": "4C051DB611D3E877C000B3B2D86C964F",\n            "name": "Profit",\n            "subType": "metric"\n          }\n        ]\n      }\n    ],\n    "pageBy": []\n  },\n  "filter": {\n    "text": "Year = 2016, 2017",\n    "tree": {\n      "type": "predicate_element_list",\n      "predicateId": "C3CD0B2575C24F639C4E9DCD16722B70",\n      "predicateTree": {\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "elements": [\n          {\n            "display": "2016",\n            "elementId": "h2016"\n          },\n          {\n            "display": "2017",\n            "elementId": "h2017"\n          }\n        ],\n        "function": "in"\n      }\n    }\n  },\n  "advancedProperties": {\n    "vldbProperties": {\n      "[AnalyticalEngineProperties].[ConsolidationSubtotal]": {\n        "name": "ConsolidationSubtotal",\n        "value": "true",\n        "type": "boolean",\n        "resolvedLocation": "default"\n      },\n      "[MDX Syntax].[MDX Add Fake Measure]": {\n        "name": "MDX Add Fake Measure",\n        "value": "1",\n        "type": "int32",\n        "resolvedLocation": "default"\n      }\n    },\n    "metricJoinTypes": {\n      "7FD5B69611D5AC76C000D98A4CC5F24F": {\n        "metric": {\n          "objectId": "7FD5B69611D5AC76C000D98A4CC5F24F",\n          "subType": "metric",\n          "name": "Cost"\n        },\n        "joinType": "inner",\n        "resolvedLocation": "report_target"\n      },\n      "4C051DB611D3E877C000B3B2D86C964F": {\n        "metric": {\n          "objectId": "4C051DB611D3E877C000B3B2D86C964F",\n          "subType": "metric",\n          "name": "Profit"\n        },\n        "joinType": "inner",\n        "resolvedLocation": "default"\n      }\n    },\n    "attributeJoinTypes": {\n      "8D679D5111D3E4981000E787EC6DE8A4": {\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "noParticipationInPreserveRow": true,\n        "resolvedLocation": "report_target"\n      },\n      "8D679D3711D3E4981000E787EC6DE8A4": {\n        "attribute": {\n          "objectId": "8D679D3711D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Category"\n        },\n        "noParticipationInPreserveRow": false,\n        "resolvedLocation": "default"\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Response Code: 200 (Incremental Refresh Report's definition is returned successfully.)"))}h.isMDXComponent=!0}}]);