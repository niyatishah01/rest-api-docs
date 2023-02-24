"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[437],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(y,p(p({ref:t},s),{},{components:n})):a.createElement(y,p({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5612:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var a,r=n(3117),o=n(102),p=(n(7294),n(3905)),i=["components"],c={title:"Modify value of an advanced property",description:"The workflow involves modifying project's advanced properties values"},l=void 0,s={unversionedId:"common-workflows/analytics/project-management/project-advanced-properties-management/update-project-advanced-property",id:"common-workflows/analytics/project-management/project-advanced-properties-management/update-project-advanced-property",title:"Modify value of an advanced property",description:"The workflow involves modifying project's advanced properties values",source:"@site/docs/common-workflows/analytics/project-management/project-advanced-properties-management/update-project-advanced-property.md",sourceDirName:"common-workflows/analytics/project-management/project-advanced-properties-management",slug:"/common-workflows/analytics/project-management/project-advanced-properties-management/update-project-advanced-property",permalink:"/rest-api-docs/common-workflows/analytics/project-management/project-advanced-properties-management/update-project-advanced-property",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/project-management/project-advanced-properties-management/update-project-advanced-property.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1677268684,formattedLastUpdatedAt:"Feb 24, 2023",frontMatter:{title:"Modify value of an advanced property",description:"The workflow involves modifying project's advanced properties values"},sidebar:"tutorialSidebar",previous:{title:"Get project definition and advanced properties",permalink:"/rest-api-docs/common-workflows/analytics/project-management/project-advanced-properties-management/get-project-with-advanced-properties"},next:{title:"Manage report objects",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-report-objects/"}},d={},u=[{value:"Update project&#39;s advanced property value",id:"update-projects-advanced-property-value",level:2},{value:"Set property value back to default",id:"set-property-value-back-to-default",level:3}],m=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,p.kt)("div",e)}),y={toc:u};function v(e){var t=e.components,n=(0,o.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)(m,{since:"2021 Update 8",mdxType:"Available"}),(0,p.kt)("admonition",{type:"tip"},(0,p.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,p.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-804b24e1-dccb-48c1-bfde-0a132163e409?ctx=documentation"},"REST API Playground"),"."),(0,p.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,p.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,p.kt)("h2",{id:"update-projects-advanced-property-value"},"Update project's advanced property value"),(0,p.kt)("p",null,"This workflow sample demonstrates how to update project's advanced property value"),(0,p.kt)("p",null,"You want to get update an advanced property of the ",(0,p.kt)("inlineCode",{parentName:"p"},"MicroStrategy Tutorial")," Project object. The object ID is ",(0,p.kt)("inlineCode",{parentName:"p"},"6851110C470AF40EB46B559D5098F309"),"."),(0,p.kt)("admonition",{type:"info"},(0,p.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,p.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,p.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,p.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,p.kt)("p",null,"Update a property using ",(0,p.kt)("inlineCode",{parentName:"p"},"PUT /api/model/projects/{projectId}?showAdvancedProperties=true"),"."),(0,p.kt)("p",null,"Sample Request Header:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "cs0intmf1fgij7ao0v2v0j48e5"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,p.kt)("p",null,"Sample Request Body:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "advancedProperties": {\n    "vldbProperties": {\n      "[AnalyticalEngineProperties].[ConsolidationSubtotal]": {\n        "value": false\n      }\n    }\n  }\n}\n')),(0,p.kt)("p",null,"Sample Curl:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/projects/6851110C470AF40EB46B559D5098F309?showAdvancedProperties=true" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: cs0intmf1fgij7ao0v2v0j48e5" \\\n-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,p.kt)("p",null,"Sample Response Body:"),(0,p.kt)("p",null,"You can view list of advanced properties including updated property in the response."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2021-05-27T01:59:49.000Z",\n    "dateModified": "2022-11-15T13:36:45.627Z",\n    "versionId": "08725E361F499117604F26BA8230223C",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "6851110C470AF40EB46B559D5098F309",\n    "subType": "project",\n    "name": "MicroStrategy Tutorial",\n    "description": "MicroStrategy Tutorial project and application set designed to illustrate the platform\'s rich functionality. The theme is an Electronics, Books, Movies and Music store. Employees, Inventory, Finance, Product Sales and Suppliers are analyzed."\n  },\n  "advancedProperties": {\n    "vldbProperties": {\n      "[AnalyticalEngineProperties].[ConsolidationSubtotal]": {\n        "name": "ConsolidationSubtotal",\n        "type": "boolean",\n        "value": "false",\n        "resolvedLocation": "project",\n        "isInherited": false,\n        "nextValue": true,\n        "nextResolvedLocation": "default"\n      },\n      "[AnalyticalEngineProperties].[CustomGroupDisplayForJointElments]": {\n        "name": "CustomGroupDisplayForJointElments",\n        "type": "boolean",\n        "value": "false",\n        "resolvedLocation": "default",\n        "isInherited": true\n      }\n    }\n  }\n}\n')),(0,p.kt)("p",null,"Response Code: 200 (The project's definition and its advanced properties were updated successfully.)"),(0,p.kt)("h3",{id:"set-property-value-back-to-default"},"Set property value back to default"),(0,p.kt)("p",null,"This is an example to reset the property value to default."),(0,p.kt)("p",null,":::"),(0,p.kt)("p",null,"Update a property using ",(0,p.kt)("inlineCode",{parentName:"p"},"PUT /api/model/projects/{projectId}?showAdvancedProperties=true"),"."),(0,p.kt)("p",null,"Sample Request Header:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "cs0intmf1fgij7ao0v2v0j48e5"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,p.kt)("p",null,"Sample Request Body:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "advancedProperties": {\n    "vldbProperties": {\n      "[AnalyticalEngineProperties].[ConsolidationSubtotal]": {\n        "value": null\n      }\n    }\n  }\n}\n')),(0,p.kt)("p",null,"Sample Curl:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/projects/6851110C470AF40EB46B559D5098F309?showAdvancedProperties=true" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: cs0intmf1fgij7ao0v2v0j48e5" \\\n-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,p.kt)("p",null,"Sample Response Body:"),(0,p.kt)("p",null,"You can view list of advanced properties including updated property in the response."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2021-05-27T01:59:49.000Z",\n    "dateModified": "2022-11-15T13:36:45.627Z",\n    "versionId": "08725E361F499117604F26BA8230223C",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "6851110C470AF40EB46B559D5098F309",\n    "subType": "project",\n    "name": "MicroStrategy Tutorial",\n    "description": "MicroStrategy Tutorial project and application set designed to illustrate the platform\'s rich functionality. The theme is an Electronics, Books, Movies and Music store. Employees, Inventory, Finance, Product Sales and Suppliers are analyzed."\n  },\n  "advancedProperties": {\n    "vldbProperties": {\n      "[AnalyticalEngineProperties].[ConsolidationSubtotal]": {\n        "name": "ConsolidationSubtotal",\n        "type": "boolean",\n        "value": true,\n        "resolvedLocation": "default",\n        "isInherited": true\n      },\n      "[AnalyticalEngineProperties].[CustomGroupDisplayForJointElments]": {\n        "name": "CustomGroupDisplayForJointElments",\n        "type": "boolean",\n        "value": "false",\n        "resolvedLocation": "default",\n        "isInherited": true\n      }\n    }\n  }\n}\n')),(0,p.kt)("p",null,"Response Code: 200 (The project's definition and its advanced properties were updated successfully.)"))}v.isMDXComponent=!0}}]);