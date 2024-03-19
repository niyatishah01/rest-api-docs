"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8857],{65965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(74848),l=n(28453);const i={title:"Update a drill map",sidebar_label:"Update a drill map",description:"This workflow sample demonstrates how to update an existing drill map object through the Modeling service."},r=void 0,o={id:"common-workflows/modeling/manage-drill-maps/update-a-drill-map",title:"Update a drill map",description:"This workflow sample demonstrates how to update an existing drill map object through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-drill-maps/update-a-drill-map.md",sourceDirName:"common-workflows/modeling/manage-drill-maps",slug:"/common-workflows/modeling/manage-drill-maps/update-a-drill-map",permalink:"/rest-api-docs/common-workflows/modeling/manage-drill-maps/update-a-drill-map",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-drill-maps/update-a-drill-map.md",tags:[],version:"current",lastUpdatedBy:"AugLychee",lastUpdatedAt:1710818077,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{title:"Update a drill map",sidebar_label:"Update a drill map",description:"This workflow sample demonstrates how to update an existing drill map object through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a drill map",permalink:"/rest-api-docs/common-workflows/modeling/manage-drill-maps/create-a-drill-map"},next:{title:"Retrieve a list of objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-drill-maps/retrieve-a-list-of-objects"}},s={},d=[{value:"Workflow",id:"workflow",level:2},{value:"Update an existing drill map using <code>PUT /api/model/drillMaps/{drillMapId}</code>",id:"update-an-existing-drill-map-using-put-apimodeldrillmapsdrillmapid",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components},{Available:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{since:"2021 Update 6"}),"\n",(0,a.jsxs)(t.admonition,{type:"tip",children:[(0,a.jsxs)(t.p,{children:["You can try out this workflow at ",(0,a.jsx)(t.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-2b7a0f0c-2172-418a-93ec-e0f0a13fa741?ctx=documentation",children:"REST API Playground"}),"."]}),(0,a.jsxs)(t.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,a.jsx)(t.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,a.jsx)(t.p,{children:"This workflow sample demonstrates how to update an existing drill map object through the Modeling service."}),"\n",(0,a.jsxs)(t.p,{children:["You want to update the existing ",(0,a.jsx)(t.code,{children:"Drill Map for Demo"})," drill map object in the MicroStrategy Tutorial project. The project ID is ",(0,a.jsx)(t.code,{children:"091B51154B22036C53CFBB9958B2E8FC"}),"). The drill map ID is ",(0,a.jsx)(t.code,{children:"CC2E6AA3421EFF5C41C2D0939750BB24"}),"."]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,a.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/changesets",children:"Changesets"}),"."]})}),"\n",(0,a.jsxs)(t.admonition,{type:"tip",children:[(0,a.jsxs)(t.p,{children:["Get the authorization token needed to execute the request with ",(0,a.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,a.jsxs)(t.p,{children:["Get the project ID from ",(0,a.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,a.jsx)(t.h2,{id:"workflow",children:"Workflow"}),"\n",(0,a.jsxs)(t.h3,{id:"update-an-existing-drill-map-using-put-apimodeldrillmapsdrillmapid",children:["Update an existing drill map using ",(0,a.jsx)(t.code,{children:"PUT /api/model/drillMaps/{drillMapId}"})]}),"\n",(0,a.jsx)(t.p,{children:"In this step, you are:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Modifying the existing drill path\u2019s priority to ",(0,a.jsx)(t.code,{children:"low"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Adding a new drill path based on the ",(0,a.jsx)(t.code,{children:"Call Center Analysis"})," template in the ",(0,a.jsx)(t.code,{children:"Template"})," field and setting the drill path to ",(0,a.jsx)(t.code,{children:"high"})," priority, along with an additional filter and other properties."]}),"\n",(0,a.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n'})}),"\n",(0,a.jsx)(t.p,{children:"Sample Request Body:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "name": "Drill Map for Demo",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "drillPaths": [\n    {\n      "displayName": "Year\'s Display Name",\n      "type": "up",\n      "target": {\n        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Year"\n      },\n      "priority": "low",\n      "options": {\n        "keepParent": false,\n        "keepThresholds": false,\n        "keepPageBy": false,\n        "keepBaseTemplate": false,\n        "applyUserFilter": false,\n        "applyReportFilter": true\n      }\n    },\n    {\n      "displayName": "Call Center Analysis",\n      "type": "template",\n      "target": {\n        "objectId": "D4C7C978490A443715E6ECB689F9CEAF",\n        "subType": "template",\n        "name": "Call Center Analysis"\n      },\n      "priority": "high",\n      "options": {\n        "setName": "Test SetName 1",\n        "inheritVLDB": false,\n        "keepPageBy": false,\n        "keepBaseTemplate": false,\n        "applyUserFilter": true,\n        "applyReportFilter": true,\n        "includeOtherFilter": "default",\n        "displayMode": "default",\n        "additionalFilter": {\n          "objectId": "8827905B11D3EB22C000B4B2D86C964F",\n          "subType": "filter",\n          "name": "by age"\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/drillMaps/CC2E6AA3421EFF5C41C2D0939750BB24" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: 9rlq0e1dgg3rp237hiddruqcd0" \\\n-H "X-MSTR-MS-Changeset: EE48CD8879C44A03B18660AE7AFC8F68" \\\n-H "Content-Type: application/json" \\\n-d \'{"information":{"name":"Drill Map for Demo","destinationFolderId":"98FE182C2A10427EACE0CD30B6768258"},"drillPaths":[{"displayName":"Year"s Display Name","type":"up","target":{"objectId":"8D679D5111D3E4981000E787EC6DE8A4","subType":"attribute","name":"Year"},"priority":"low","options":{"keepParent":false,"keepThresholds":false,"keepPageBy":false,"keepBaseTemplate":false,"applyUserFilter":false,"applyReportFilter":true}},{"displayName":"Call Center Analysis","type":"template","target":{"objectId":"D4C7C978490A443715E6ECB689F9CEAF","subType":"template","name":"Call Center Analysis"},"priority":"high","options":{"setName":"Test Set Name 1","inheritVLDB":false,"keepPageBy":false,"keepBaseTemplate":false,"applyUserFilter":true,"applyReportFilter":true,"includeOtherFilter":"default","displayMode":"default","additionalFilter":{"objectId":"8827905B11D3EB22C000B4B2D86C964F","subType":"filter","name":"by age"}}}]}\'\n'})}),"\n",(0,a.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,a.jsx)(t.p,{children:"You can view the updated drill map definition in the body of the response."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2022-01-24T10:42:27.000Z",\n    "dateModified": "2022-01-30T12:32:52.961Z",\n    "versionId": "DAC1E08E49F511D58A0D678D2ACD1BF9",\n    "primaryLocale": "en-US",\n    "objectId": "CC2E6AA3421EFF5C41C2D0939750BB24",\n    "subType": "drill_map",\n    "name": "Drill Map for Demo",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "drillPaths": [\n    {\n      "displayName": "Year\'s Display Name",\n      "type": "up",\n      "target": {\n        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Year"\n      },\n      "priority": "low",\n      "options": {\n        "keepParent": false,\n        "keepThresholds": false,\n        "keepPageBy": false,\n        "keepBaseTemplate": false,\n        "applyUserFilter": false,\n        "applyReportFilter": true\n      }\n    },\n    {\n      "displayName": "Call Center Analysis",\n      "type": "template",\n      "target": {\n        "objectId": "D4C7C978490A443715E6ECB689F9CEAF",\n        "subType": "template",\n        "name": "Call Center Analysis"\n      },\n      "priority": "high",\n      "options": {\n        "setName": "Test SetName 1",\n        "inheritVLDB": false,\n        "keepPageBy": false,\n        "keepBaseTemplate": false,\n        "applyUserFilter": true,\n        "applyReportFilter": true,\n        "includeOtherFilter": "default",\n        "displayMode": "default",\n        "additionalFilter": {\n          "objectId": "8827905B11D3EB22C000B4B2D86C964F",\n          "subType": "filter",\n          "name": "by age"\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Sample Response Code: 200 (The ",(0,a.jsx)(t.code,{children:"Drill Map for Demo"})," drill map object is updated successfully in the changeset.)"]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var a=n(96540);const l={},i=a.createContext(l);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);