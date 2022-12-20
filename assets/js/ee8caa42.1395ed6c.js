"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[630],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,f=c["".concat(p,".").concat(u)]||c[u]||d[u]||l;return a?n.createElement(f,i(i({ref:t},m),{},{components:a})):n.createElement(f,i({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3388:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),i=["components"],o={title:"Workflow sample - Create a drill map",sidebar_label:"Create a drill map",description:"This workflow sample demonstrates how to create a new drill map object through the Modeling service."},p=void 0,s={unversionedId:"common-workflows/manage-drill-maps/create-a-drill-map",id:"common-workflows/manage-drill-maps/create-a-drill-map",title:"Workflow sample - Create a drill map",description:"This workflow sample demonstrates how to create a new drill map object through the Modeling service.",source:"@site/docs/common-workflows/manage-drill-maps/create-a-drill-map.md",sourceDirName:"common-workflows/manage-drill-maps",slug:"/common-workflows/manage-drill-maps/create-a-drill-map",permalink:"/rest-api-docs/common-workflows/manage-drill-maps/create-a-drill-map",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-drill-maps/create-a-drill-map.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1671571075,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{title:"Workflow sample - Create a drill map",sidebar_label:"Create a drill map",description:"This workflow sample demonstrates how to create a new drill map object through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a drill map definition",permalink:"/rest-api-docs/common-workflows/manage-drill-maps/retrieve-a-drill-map-definition"},next:{title:"Update a drill map",permalink:"/rest-api-docs/common-workflows/manage-drill-maps/update-a-drill-map"}},m={},d=[{value:"Workflow",id:"workflow",level:2},{value:"Create a new drill map using POST /api/model/drillMaps",id:"create-a-new-drill-map-using-post-apimodeldrillmaps",level:3},{value:"More examples",id:"more-examples",level:2}],c={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,l.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-2b7a0f0c-2172-418a-93ec-e0f0a13fa741?ctx=documentation"},"REST API Playground"),"."),(0,l.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,l.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,l.kt)("p",null,"This workflow sample demonstrates how to create a new drill map object through the Modeling service."),(0,l.kt)("p",null,"The drill map is under the Public Objects folder in the MicroStrategy Tutorial project. The folder object ID is ",(0,l.kt)("inlineCode",{parentName:"p"},"98FE182C2A10427EACE0CD30B6768258"),". The project ID is ",(0,l.kt)("inlineCode",{parentName:"p"},"091B51154B22036C53CFBB9958B2E8FC"),"."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,l.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets see ",(0,l.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/changesets"},"Changesets"),".")),(0,l.kt)("h2",{id:"workflow"},"Workflow"),(0,l.kt)("h3",{id:"create-a-new-drill-map-using-post-apimodeldrillmaps"},"Create a new drill map using ",(0,l.kt)("a",{parentName:"h3",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/DrillMaps/ms-postDrillMap"},"POST /api/model/drillMaps")),(0,l.kt)("p",null,"In this step, you are creating a new drill map with a drill path based on the ",(0,l.kt)("inlineCode",{parentName:"p"},"Year")," attribute in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Up")," field and setting the drill path to a ",(0,l.kt)("inlineCode",{parentName:"p"},"high")," priority, along with some other properties. You can find more examples in the following sections on this page. You can find ",(0,l.kt)("a",{parentName:"p",href:"#more-examples"},"More examples")," at the bottom of this page."),(0,l.kt)("p",null,"Sample Request Header:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,l.kt)("p",null,"Sample Request Body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "name": "Drill Map for Demo",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "drillPaths": [\n    {\n      "displayName": "Year\'s Display Name",\n      "type": "up",\n      "target": {\n        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Year"\n      },\n      "priority": "high",\n      "options": {\n        "keepParent": false,\n        "keepThresholds": false,\n        "keepPageBy": false,\n        "keepBaseTemplate": false,\n        "applyUserFilter": false,\n        "applyReportFilter": true\n      }\n    }\n  ]\n}\n')),(0,l.kt)("p",null,"Sample Curl:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST \"https://demo.microstrategy.com/MicroStrategyLibrary/api/model/drillMaps\" \\\n-H \"accept: application/json\" -H \"X-MSTR-AuthToken: 9rlq0e1dgg3rp237hiddruqcd0\" \\\n-H \"X-MSTR-MS-Changeset: EE48CD8879C44A03B18660AE7AFC8F68\" \\\n-H \"Content-Type: application/json\" -d \"{ 'information ':{ 'name ': 'Drill Map for Demo ', 'destinationFolderId ': '98FE182C2A10427EACE0CD30B6768258 '}, 'drillPaths ':[{ 'displayName ': 'Year's Display Name ', 'type ': 'up ', 'target ':{ 'objectId ': '8D679D5111D3E4981000E787EC6DE8A4 ', 'subType ': 'attribute ', 'name ': 'Year '}, 'priority ': 'high ', 'options ':{ 'keepParent ':false, 'keepThresholds ':false, 'keepPageBy ':false, 'keepBaseTemplate ':false, 'applyUserFilter ':false, 'applyReportFilter ':true}}]}\"\n")),(0,l.kt)("p",null,"Sample Response Body:"),(0,l.kt)("p",null,"You can view the new drill map definition in the body of the response."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-01-24T10:42:27.000Z",\n    "dateModified": "2022-01-30T12:32:52.961Z",\n    "versionId": "DAC1E08E49F511D58A0D678D2ACD1BF9",\n    "primaryLocale": "en-US",\n    "objectId": "CC2E6AA3421EFF5C41C2D0939750BB24",\n    "subType": "drill_map",\n    "name": "Drill Map for Demo",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "drillPaths": [\n    {\n      "displayName": "Year\'s Display Name",\n      "type": "up",\n      "target": {\n        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Year"\n      },\n      "priority": "high",\n      "options": {\n        "keepParent": false,\n        "keepThresholds": false,\n        "keepPageBy": false,\n        "keepBaseTemplate": false,\n        "applyUserFilter": false,\n        "applyReportFilter": true\n      }\n    }\n  ]\n}\n')),(0,l.kt)("p",null,"Sample Response Code: 201 (A new drill map is created successfully in the changeset.)"),(0,l.kt)("h2",{id:"more-examples"},"More examples"),(0,l.kt)("p",null,"In the above example, the drill map has only one drill path. However, a drill map can have multiple drill paths."),(0,l.kt)("p",null,"You want to create a drill map with the following drill paths:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add a ",(0,l.kt)("inlineCode",{parentName:"li"},"Call Center Analysis")," template to the ",(0,l.kt)("inlineCode",{parentName:"li"},"Template")," field with a ",(0,l.kt)("inlineCode",{parentName:"li"},"medium")," priority."),(0,l.kt)("li",{parentName:"ul"},"Add a ",(0,l.kt)("inlineCode",{parentName:"li"},"Year")," attribute to the ",(0,l.kt)("inlineCode",{parentName:"li"},"Across")," field with a ",(0,l.kt)("inlineCode",{parentName:"li"},"high")," priority."),(0,l.kt)("li",{parentName:"ul"},"Add an ",(0,l.kt)("inlineCode",{parentName:"li"},"Age Groups")," custom group to the ",(0,l.kt)("inlineCode",{parentName:"li"},"Up")," field with a ",(0,l.kt)("inlineCode",{parentName:"li"},"medium")," priority."),(0,l.kt)("li",{parentName:"ul"},"Add a ",(0,l.kt)("inlineCode",{parentName:"li"},"Customer Geography")," consolidation to the ",(0,l.kt)("inlineCode",{parentName:"li"},"Down")," field with a ",(0,l.kt)("inlineCode",{parentName:"li"},"low")," priority"),(0,l.kt)("li",{parentName:"ul"},"Add a ",(0,l.kt)("inlineCode",{parentName:"li"},"Products")," hierarchy to the ",(0,l.kt)("inlineCode",{parentName:"li"},"Down")," field with a ",(0,l.kt)("inlineCode",{parentName:"li"},"medium")," priority."),(0,l.kt)("li",{parentName:"ul"},"Add a ",(0,l.kt)("inlineCode",{parentName:"li"},"Status Drill Map")," drill map to the ",(0,l.kt)("inlineCode",{parentName:"li"},"Drill Map")," field with a ",(0,l.kt)("inlineCode",{parentName:"li"},"medium")," priority.")),(0,l.kt)("p",null,"Sample Response Body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258",\n    "name": "Create Consolidation"\n  },\n  "drillPaths": [\n    {\n      "displayName": "Call Center Analysis",\n      "type": "template",\n      "target": {\n        "objectId": "D4C7C978490A443715E6ECB689F9CEAF",\n        "subType": "template",\n        "name": "Call Center Analysis"\n      },\n      "priority": "medium",\n      "options": {\n        "setName": "Test SetName 1",\n        "inheritVLDB": false,\n        "keepPageBy": false,\n        "keepBaseTemplate": false,\n        "applyUserFilter": true,\n        "applyReportFilter": true,\n        "includeOtherFilter": "default",\n        "displayMode": "default"\n      }\n    },\n    {\n      "displayName": "Year",\n      "type": "across",\n      "target": {\n        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Year"\n      },\n      "priority": "high",\n      "options": {\n        "keepParent": false,\n        "keepThresholds": false,\n        "keepPageBy": false,\n        "keepBaseTemplate": false,\n        "applyUserFilter": false,\n        "applyReportFilter": true\n      }\n    },\n    {\n      "displayName": "Age Groups",\n      "type": "up",\n      "target": {\n        "objectId": "085CBF314703A71E926EA187C2002969",\n        "subType": "custom_group",\n        "name": "Age Groups"\n      },\n      "priority": "medium",\n      "options": {\n        "keepParent": false,\n        "keepThresholds": false,\n        "keepPageBy": false,\n        "keepBaseTemplate": false,\n        "applyUserFilter": true,\n        "applyReportFilter": true,\n        "includeOtherFilter": "default"\n      }\n    },\n    {\n      "displayName": "Customer Geography",\n      "type": "down",\n      "target": {\n        "objectId": "B9E7FD5911D3E936C000B3B2D86C964F",\n        "subType": "consolidation",\n        "name": "Customer Geography"\n      },\n      "priority": "low",\n      "options": {\n        "keepParent": false,\n        "keepThresholds": false,\n        "keepPageBy": false,\n        "keepBaseTemplate": false,\n        "applyUserFilter": true,\n        "applyReportFilter": true,\n        "includeOtherFilter": "default"\n      }\n    },\n    {\n      "displayName": "Products",\n      "type": "down",\n      "target": {\n        "objectId": "B793B56811D3E4E51000E887EC6DE8A4",\n        "subType": "dimension_user",\n        "name": "Products"\n      },\n      "priority": "medium"\n    },\n    {\n      "type": "drill_map",\n      "target": {\n        "objectId": "A3EEC92948DB0216FA585D83F2633A2B",\n        "subType": "drill_map",\n        "name": "Status Drill Map"\n      },\n      "priority": "medium"\n    }\n  ]\n}\n')))}u.isMDXComponent=!0}}]);