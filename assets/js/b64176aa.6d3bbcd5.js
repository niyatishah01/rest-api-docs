"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[4781],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,h=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8096:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return c}});var r,a=n(3117),i=n(102),o=(n(7294),n(3905)),l=["components"],p={title:'Retrieve a drill map definition"',sidebar_label:"Retrieve a drill map definition",description:"You can use REST API requests to retrieve, create, and update drill map objects through the Modeling service."},s=void 0,d={unversionedId:"common-workflows/modeling/manage-drill-maps/retrieve-a-drill-map-definition",id:"common-workflows/modeling/manage-drill-maps/retrieve-a-drill-map-definition",title:'Retrieve a drill map definition"',description:"You can use REST API requests to retrieve, create, and update drill map objects through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-drill-maps/retrieve-a-drill-map-definition.md",sourceDirName:"common-workflows/modeling/manage-drill-maps",slug:"/common-workflows/modeling/manage-drill-maps/retrieve-a-drill-map-definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-drill-maps/retrieve-a-drill-map-definition",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-drill-maps/retrieve-a-drill-map-definition.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1676479687,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{title:'Retrieve a drill map definition"',sidebar_label:"Retrieve a drill map definition",description:"You can use REST API requests to retrieve, create, and update drill map objects through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Manage drill maps",permalink:"/rest-api-docs/common-workflows/modeling/manage-drill-maps/"},next:{title:"Create a drill map",permalink:"/rest-api-docs/common-workflows/modeling/manage-drill-maps/create-a-drill-map"}},m={},c=[{value:"Retrieve a drill map definition",id:"retrieve-a-drill-map-definition",level:2},{value:"Sample request header",id:"sample-request-header",level:3},{value:"Sample request body",id:"sample-request-body",level:3},{value:"Sample curl",id:"sample-curl",level:3},{value:"Sample response body",id:"sample-response-body",level:3},{value:"Response code",id:"response-code",level:3},{value:"Retrieve a drill map definition within a changeset",id:"retrieve-a-drill-map-definition-within-a-changeset",level:2},{value:"Get the drill map definition within the changeset using GET /api/model/drillMaps/{drillMapId}",id:"get-the-drill-map-definition-within-the-changeset-using-get-apimodeldrillmapsdrillmapid",level:3}],u=(r="Available",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),h={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u,{since:"2021 Update 6",mdxType:"Available"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-2b7a0f0c-2172-418a-93ec-e0f0a13fa741?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"You can use REST APIs to retrieve the definition of a drill map through the Modeling service. This workflow includes the following REST API requests."),(0,o.kt)("h2",{id:"retrieve-a-drill-map-definition"},"Retrieve a drill map definition"),(0,o.kt)("p",null,"You want to get the definition of a drill map object. The object ID of the drill map is ",(0,o.kt)("inlineCode",{parentName:"p"},"CC2E6AA3421EFF5C41C2D0939750BB24")," in the MicroStrategy Tutorial project. The project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("p",null,"Retrieve the drill map\u2019s definition using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Drill%20Maps/ms-getDrillMap"},"GET /api/model/drillMaps/{drillMapId}"),"."),(0,o.kt)("h3",{id:"sample-request-header"},"Sample request header"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "lmiouhsue1osvl8uf2vuvlbcfp"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,o.kt)("h3",{id:"sample-request-body"},"Sample request body"),(0,o.kt)("p",null,"Empty"),(0,o.kt)("h3",{id:"sample-curl"},"Sample curl"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/drillMaps/CC2E6AA3421EFF5C41C2D0939750BB24" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: lmiouhsue1osvl8uf2vuvlbcfp" \\\n-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,o.kt)("h3",{id:"sample-response-body"},"Sample response body"),(0,o.kt)("p",null,"You can view the drill map definition in the body of the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-01-24T10:42:27.000Z",\n    "dateModified": "2022-02-14T04:29:54.000Z",\n    "versionId": "BA73E0DF421BB0A7C726C090F38AC5AE",\n    "primaryLocale": "en-US",\n    "objectId": "CC2E6AA3421EFF5C41C2D0939750BB24",\n    "subType": "drill_map",\n    "name": "Sample Drill Map"\n  },\n  "drillPaths": [\n    {\n      "displayName": "Call Center Analysis",\n      "type": "template",\n      "target": {\n        "objectId": "D4C7C978490A443715E6ECB689F9CEAF",\n        "subType": "template",\n        "name": "Call Center Analysis"\n      },\n      "priority": "medium",\n      "options": {\n        "setName": "Test SetName 1",\n        "inheritVLDB": false,\n        "keepPageBy": false,\n        "keepBaseTemplate": false,\n        "applyUserFilter": true,\n        "applyReportFilter": true,\n        "includeOtherFilter": "default",\n        "displayMode": "default"\n      }\n    },\n    {\n      "displayName": "Year",\n      "type": "across",\n      "target": {\n        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Year"\n      },\n      "priority": "high",\n      "options": {\n        "keepParent": false,\n        "keepThresholds": false,\n        "keepPageBy": false,\n        "keepBaseTemplate": false,\n        "applyUserFilter": false,\n        "applyReportFilter": true\n      }\n    },\n    {\n      "displayName": "Age Groups",\n      "type": "up",\n      "target": {\n        "objectId": "085CBF314703A71E926EA187C2002969",\n        "subType": "custom_group",\n        "name": "Age Groups"\n      },\n      "priority": "medium",\n      "options": {\n        "keepParent": false,\n        "keepThresholds": false,\n        "keepPageBy": false,\n        "keepBaseTemplate": false,\n        "applyUserFilter": true,\n        "applyReportFilter": true,\n        "includeOtherFilter": "default"\n      }\n    },\n    {\n      "displayName": "Customer Geography",\n      "type": "down",\n      "target": {\n        "objectId": "B9E7FD5911D3E936C000B3B2D86C964F",\n        "subType": "consolidation",\n        "name": "Customer Geography"\n      },\n      "priority": "medium",\n      "options": {\n        "keepParent": false,\n        "keepThresholds": false,\n        "keepPageBy": false,\n        "keepBaseTemplate": false,\n        "applyUserFilter": true,\n        "applyReportFilter": true,\n        "includeOtherFilter": "default"\n      }\n    },\n    {\n      "displayName": "Products",\n      "type": "down",\n      "target": {\n        "objectId": "B793B56811D3E4E51000E887EC6DE8A4",\n        "subType": "dimension_user",\n        "name": "Products"\n      },\n      "priority": "medium"\n    },\n    {\n      "type": "across",\n      "target": {\n        "objectId": "B793B55011D3E4E51000E887EC6DE8A4",\n        "subType": "dimension_user",\n        "name": "Geography"\n      },\n      "priority": "medium"\n    },\n    {\n      "type": "drill_map",\n      "target": {\n        "objectId": "A3EEC92948DB0216FA585D83F2633A2B",\n        "subType": "drill_map",\n        "name": "Status Drill Map"\n      },\n      "priority": "medium"\n    }\n  ]\n}\n')),(0,o.kt)("h3",{id:"response-code"},"Response code"),(0,o.kt)("p",null,"200 (The drill map definition is returned successfully.)"),(0,o.kt)("h2",{id:"retrieve-a-drill-map-definition-within-a-changeset"},"Retrieve a drill map definition within a changeset"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets see ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),". If you plan to use the response of ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableList"},"GET /api/model/drillMaps/{drillMapId}")," to create a new drill map or update a drill map definition, you should associate all requests with one changeset.")),(0,o.kt)("p",null,"You want to get the definition of the Sample Drill Map drill map object. The object ID of this drill map is ",(0,o.kt)("inlineCode",{parentName:"p"},"CC2E6AA3421EFF5C41C2D0939750BB24")," in the MicroStrategy Tutorial project. The project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("h3",{id:"get-the-drill-map-definition-within-the-changeset-using-get-apimodeldrillmapsdrillmapid"},"Get the drill map definition within the changeset using ",(0,o.kt)("a",{parentName:"h3",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Drill%20Maps/ms-getDrillMap"},"GET /api/model/drillMaps/{drillMapId}")),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/drillMpas/CC2E6AA3421EFF5C41C2D0939750BB24" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" \\\n-H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#sample-response-body"},"Sample Response Body")),(0,o.kt)("p",null,"Response Code: 200"))}f.isMDXComponent=!0}}]);