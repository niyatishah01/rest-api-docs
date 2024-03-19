"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[7701],{31421:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=s(74848),n=s(28453);const r={title:"Retrieve a list of objects associated with a drill map",sidebar_label:"Retrieve a list of objects",description:"This workflow sample demonstrates how to get the list of objects associated with a specific drill map."},i=void 0,o={id:"common-workflows/modeling/manage-drill-maps/retrieve-a-list-of-objects",title:"Retrieve a list of objects associated with a drill map",description:"This workflow sample demonstrates how to get the list of objects associated with a specific drill map.",source:"@site/docs/common-workflows/modeling/manage-drill-maps/retrieve-a-list-of-objects.md",sourceDirName:"common-workflows/modeling/manage-drill-maps",slug:"/common-workflows/modeling/manage-drill-maps/retrieve-a-list-of-objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-drill-maps/retrieve-a-list-of-objects",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-drill-maps/retrieve-a-list-of-objects.md",tags:[],version:"current",lastUpdatedBy:"AugLychee",lastUpdatedAt:1710818077,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{title:"Retrieve a list of objects associated with a drill map",sidebar_label:"Retrieve a list of objects",description:"This workflow sample demonstrates how to get the list of objects associated with a specific drill map."},sidebar:"tutorialSidebar",previous:{title:"Update a drill map",permalink:"/rest-api-docs/common-workflows/modeling/manage-drill-maps/update-a-drill-map"},next:{title:"Manage fact objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-fact-objects/"}},c={},l=[{value:"Workflow",id:"workflow",level:2},{value:"Step 1: Create a search using POST /api/metadataSearches/result",id:"step-1-create-a-search-using-post-apimetadatasearchesresult",level:3},{value:"Step 2: Get search results using GET /api/metadataSearches/results",id:"step-2-get-search-results-using-get-apimetadatasearchesresults",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Available:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s,{since:"2021 Update 6"}),"\n",(0,a.jsx)(t.p,{children:"This workflow sample demonstrates how to get the list of objects associated with a specific drill map."}),"\n",(0,a.jsxs)(t.p,{children:["You want to get the list of objects associated with the ",(0,a.jsx)(t.code,{children:"Drill Map for Demo"})," drill map object in the MicroStrategy Tutorial project. The project ID is ",(0,a.jsx)(t.code,{children:"091B51154B22036C53CFBB9958B2E8FC"}),". The drill map ID is ",(0,a.jsx)(t.code,{children:"CC2E6AA3421EFF5C41C2D0939750BB24"}),"."]}),"\n",(0,a.jsxs)(t.admonition,{type:"tip",children:[(0,a.jsxs)(t.p,{children:["Get the authorization token needed to execute the request with ",(0,a.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,a.jsxs)(t.p,{children:["Get the project ID from ",(0,a.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,a.jsx)(t.h2,{id:"workflow",children:"Workflow"}),"\n",(0,a.jsxs)(t.h3,{id:"step-1-create-a-search-using-post-apimetadatasearchesresult",children:["Step 1: Create a search using ",(0,a.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Browsing/createSearch",children:"POST /api/metadataSearches/result"})]}),"\n",(0,a.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-ProjectID": "091B51154B22036C53CFBB9958B2E8FC"\n'})}),"\n",(0,a.jsx)(t.p,{children:"Sample Request Body: Empty"}),"\n",(0,a.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/metadataSearches/results?usesObject=CC2E6AA3421EFF5C41C2D0939750BB24;56&type=2&type=47&type=257&type=3072&type=3078&type=3" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: agei7vi3q4nn0i6r547r495vaf" \\\n-H "X-MSTR-ProjectID: 091B51154B22036C53CFBB9958B2E8FC"\n'})}),"\n",(0,a.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,a.jsx)(t.p,{children:"You can get the search ID in the body of the response."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n  "id": "29A63ACA49DDAB5A886AD4B7BB51AF3C",\n  "totalItems": 8\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"Sample Response Code: 200 (A search job is triggered successfully.)"}),"\n",(0,a.jsxs)(t.h3,{id:"step-2-get-search-results-using-get-apimetadatasearchesresults",children:["Step 2: Get search results using ",(0,a.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Browsing/searchObjectList",children:"GET /api/metadataSearches/results"})]}),"\n",(0,a.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-ProjectID": "091B51154B22036C53CFBB9958B2E8FC"\n'})}),"\n",(0,a.jsx)(t.p,{children:"Sample Request Body: Empty"}),"\n",(0,a.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/metadataSearches/results?searchId=29A63ACA49DDAB5A886AD4B7BB51AF3C" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: agei7vi3q4nn0i6r547r495vaf" \\\n-H "X-MSTR-ProjectID: 091B51154B22036C53CFBB9958B2E8FC"\n'})}),"\n",(0,a.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,a.jsx)(t.p,{children:"You can get the list of objects associated with the specific drill map in the body of the response."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'[\n  {\n    "name": "Employee",\n    "id": "8D679D3F11D3E4981000E787EC6DE8A4",\n    "type": 12,\n    "subtype": 3072,\n    "dateCreated": "2001-01-02T20:48:03.000+0000",\n    "dateModified": "2022-02-24T09:53:15.000+0000",\n    "version": "60C4656C4932BF664B144C86D7095DA3",\n    "acg": 255,\n    "owner": {\n      "name": "Administrator",\n      "id": "54F3D26011D2896560009A8E67019608"\n    },\n    "acl": [\n      {\n        "deny": true,\n        "type": 1,\n        "rights": 251,\n        "trusteeId": "0B8000CD44ED1451162C9D9EF842AAED",\n        "trusteeName": "Fei Liang",\n        "trusteeType": 34,\n        "trusteeSubtype": 8704,\n        "inheritable": false\n      },\n      {\n        "deny": false,\n        "type": 1,\n        "rights": 4,\n        "trusteeId": "0B8000CD44ED1451162C9D9EF842AAED",\n        "trusteeName": "Fei Liang",\n        "trusteeType": 34,\n        "trusteeSubtype": 8704,\n        "inheritable": false\n      }\n    ],\n    "extType": 0\n  },\n  {\n    "name": "OLAP Cube",\n    "id": "0659B5D64E993AA473FA0688E8D9D1CD",\n    "type": 3,\n    "subtype": 776,\n    "dateCreated": "2022-01-26T10:31:48.000+0000",\n    "dateModified": "2022-02-24T09:53:15.000+0000",\n    "version": "60C4656C4932BF664B144C86D7095DA3",\n    "acg": 255,\n    "owner": {\n      "name": "Administrator",\n      "id": "54F3D26011D2896560009A8E67019608"\n    },\n    "acl": [\n      {\n        "deny": false,\n        "type": 1,\n        "rights": 199,\n        "trusteeId": "294DEDC011D2F1D56000D98E67019608",\n        "trusteeName": "Public / Guest",\n        "trusteeType": 34,\n        "trusteeSubtype": 8705,\n        "inheritable": false\n      },\n      {\n        "deny": false,\n        "type": 1,\n        "rights": 255,\n        "trusteeId": "C1E1419F11D603A2100086B3A5E8F8A4",\n        "trusteeName": "Developers",\n        "trusteeType": 34,\n        "trusteeSubtype": 8705,\n        "inheritable": false\n      }\n    ],\n    "extType": 1,\n    "viewMedia": 134217728,\n    "certifiedInfo": {\n      "certified": false\n    }\n  }\n]\n'})}),"\n",(0,a.jsx)(t.p,{children:"Sample Response Code: 200 (The objects associated with the drill map are returned successfully.)"})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>o});var a=s(96540);const n={},r=a.createContext(n);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);