"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[9535],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||l[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},807:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return l}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],p={title:"Get project definition and advanced properties",description:"The workflow involves getting project definition along with its advanced properties"},c=void 0,s={unversionedId:"common-workflows/project-advanced-properties-management/get-project-with-advanced-properties",id:"common-workflows/project-advanced-properties-management/get-project-with-advanced-properties",title:"Get project definition and advanced properties",description:"The workflow involves getting project definition along with its advanced properties",source:"@site/docs/common-workflows/project-advanced-properties-management/get-project-with-advanced-properties.md",sourceDirName:"common-workflows/project-advanced-properties-management",slug:"/common-workflows/project-advanced-properties-management/get-project-with-advanced-properties",permalink:"/rest-api-docs/common-workflows/project-advanced-properties-management/get-project-with-advanced-properties",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/project-advanced-properties-management/get-project-with-advanced-properties.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1671571075,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{title:"Get project definition and advanced properties",description:"The workflow involves getting project definition along with its advanced properties"},sidebar:"tutorialSidebar",previous:{title:"Get applicable properties for a project",permalink:"/rest-api-docs/common-workflows/project-advanced-properties-management/get-project-applicable-advanced-properties"},next:{title:"Modify value of an advanced property",permalink:"/rest-api-docs/common-workflows/project-advanced-properties-management/update-project-advanced-property"}},d={},l=[],u={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,a.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-ef4e5e88-1bc6-4c9a-a15a-6fef6d399bb8?ctx=documentation"},"REST API Playground"),"."),(0,a.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,a.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,a.kt)("p",null,"This workflow sample demonstrates how to retrieve project's definition and its advanced properties."),(0,a.kt)("p",null,"You want to get the advanced properties of the ",(0,a.kt)("inlineCode",{parentName:"p"},"MicroStrategy Tutorial")," Project object. The object ID is ",(0,a.kt)("inlineCode",{parentName:"p"},"6851110C470AF40EB46B559D5098F309"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,a.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,a.kt)("p",null,"Retrieve the advanced properties using ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /api/model/projects/{projectId}?showAdvancedProperties=true"),"."),(0,a.kt)("p",null,"Sample Request Header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "cs0intmf1fgij7ao0v2v0j48e5"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,a.kt)("p",null,"Sample Request Body: Empty"),(0,a.kt)("p",null,"Sample Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/projects/6851110C470AF40EB46B559D5098F309?showAdvancedProperties=true" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: cs0intmf1fgij7ao0v2v0j48e5" \\\n-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,a.kt)("p",null,"Sample Response Body:"),(0,a.kt)("p",null,"You can view project's definition and its advanced properties in the response."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2021-05-27T01:59:49.000Z",\n    "dateModified": "2022-11-15T13:36:45.627Z",\n    "versionId": "08725E361F499117604F26BA8230223C",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "6851110C470AF40EB46B559D5098F309",\n    "subType": "project",\n    "name": "MicroStrategy Tutorial",\n    "description": "MicroStrategy Tutorial project and application set designed to illustrate the platform\'s rich functionality. The theme is an Electronics, Books, Movies and Music store. Employees, Inventory, Finance, Product Sales and Suppliers are analyzed."\n  },\n  "advancedProperties": {\n    "vldbProperties": {\n      "[AnalyticalEngineProperties].[ConsolidationSubtotal]": {\n        "name": "ConsolidationSubtotal",\n        "type": "boolean",\n        "value": "true",\n        "resolvedLocation": "default",\n        "isInherited": true\n      },\n      "[AnalyticalEngineProperties].[CustomGroupDisplayForJointElments]": {\n        "name": "CustomGroupDisplayForJointElments",\n        "type": "boolean",\n        "value": "false",\n        "resolvedLocation": "default",\n        "isInherited": true\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Response Code: 200 (The project's definition and its advanced properties were returned successfully.)"))}m.isMDXComponent=!0}}]);