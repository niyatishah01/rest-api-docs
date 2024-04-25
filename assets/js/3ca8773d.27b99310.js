"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8901],{14299:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=r(74848),t=r(28453);const o={title:"Create a new fence",description:"This workflow sample demonstrates how to create a new user or workload fence."},i=void 0,a={id:"common-workflows/administration/server-management/manage-fences/create-fence",title:"Create a new fence",description:"This workflow sample demonstrates how to create a new user or workload fence.",source:"@site/docs/common-workflows/administration/server-management/manage-fences/create-fence.md",sourceDirName:"common-workflows/administration/server-management/manage-fences",slug:"/common-workflows/administration/server-management/manage-fences/create-fence",permalink:"/rest-api-docs/common-workflows/administration/server-management/manage-fences/create-fence",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/server-management/manage-fences/create-fence.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1714063612,formattedLastUpdatedAt:"Apr 25, 2024",frontMatter:{title:"Create a new fence",description:"This workflow sample demonstrates how to create a new user or workload fence."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a specific fence",permalink:"/rest-api-docs/common-workflows/administration/server-management/manage-fences/retrieve-specific-fence"},next:{title:"Update specific fence",permalink:"/rest-api-docs/common-workflows/administration/server-management/manage-fences/update-specific-fence"}},c={},d=[{value:"Create a new fence",id:"create-a-new-fence",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components},{Available:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{since:"2021 Update 6"}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["You can try out this workflow at ",(0,s.jsx)(n.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-5aef5846-6a6a-4d65-a91d-b3ebf5d96520?ctx=documentation",children:"REST API Playground"}),"."]}),(0,s.jsxs)(n.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,s.jsx)(n.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,s.jsxs)(n.p,{children:["You want to create an ",(0,s.jsx)(n.code,{children:"administrator_user_fence"})," user fence which reserves ",(0,s.jsx)(n.code,{children:"env-296739laio1use1"})," node and configured for ",(0,s.jsx)(n.code,{children:"Administrator"})," user/usergroups."]}),"\n",(0,s.jsxs)(n.p,{children:["The user ID is ",(0,s.jsx)(n.code,{children:"54F3D26011D2896560009A8E67019608"}),". The usergroup ID is ",(0,s.jsx)(n.code,{children:"E96685CD4E60068559F7DFAC7C2AA851"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesConfigureServerBasic",children:"DssXmlPrivilegesConfigureServerBasic"})," and ",(0,s.jsx)(n.a,{href:"https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesUseClusterMonitor",children:"DssXmlPrivilegesUseClusterMonitor"})," privileges are required to create a new user fence."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Obtain the authorization token needed to execute the request using ",(0,s.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST\xa0/api/auth/login"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"create-a-new-fence",children:"Create a new fence"}),"\n",(0,s.jsxs)(n.p,{children:["Endpoint: ",(0,s.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System%20Administration/createFence_1",children:"POST /api/v2/iserver/fences"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "g97nfc2l7icgsb37vjdh4b6gcu"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"name"}),", ",(0,s.jsx)(n.code,{children:"rank"})," and ",(0,s.jsx)(n.code,{children:"nodes"})," are mandatory fields for both types of fences. The ",(0,s.jsx)(n.code,{children:"user"})," or ",(0,s.jsx)(n.code,{children:"usergroup"})," information is mandatory for the user fence only."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "rank": 1,\n  "name": "administrator_user_fence",\n  "type": "user_fence",\n  "nodes": ["env-296739laio1use1"],\n  "users": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator"\n    }\n  ],\n  "usergroups": [\n    {\n      "id": "E96685CD4E60068559F7DFAC7C2AA851",\n      "name": "Administrator"\n    }\n  ],\n  "projects": [\n    {\n      "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n      "name": "MicroStrategy Tutorial"\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST \\\n\'https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/iserver/fences\' \\\n-H \'accept: application/json\' \\\n-H \'X-MSTR-AuthToken: g97nfc2l7icgsb37vjdh4b6gcu\' \\\n-H \'Content-Type: application/json\' \\\n-d \'{\n  "rank": 1,\n  "name": "administrator_user_fence",\n  "type": "user_fence",\n  "nodes": ["env-296739laio1use1"],\n  "users": [\n    {\n     "id": "54F3D26011D2896560009A8E67019608",\n     "name": "Administrator"\n    }\n  ],\n  "usergroups": [\n    {\n     "id": "E96685CD4E60068559F7DFAC7C2AA851",\n     "name": "Administrator"\n    }\n  ],\n  "projects": [\n    {\n     "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n     "name": "MicroStrategy Tutorial"\n    }\n  ]\n}\'\n'})}),"\n",(0,s.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"users"})," and ",(0,s.jsx)(n.code,{children:"usergroups"})," can be configured only for user fence, therefore the response body for workload fence should contain empty ",(0,s.jsx)(n.code,{children:"users"})," and ",(0,s.jsx)(n.code,{children:"usergroups"})," fields."]})}),"\n",(0,s.jsxs)(n.p,{children:["You can view the detailed information of new created ",(0,s.jsx)(n.code,{children:"administrator_user_fence"})," user fence in the body of the response. The detailed information includes ",(0,s.jsx)(n.code,{children:"rank"}),", ",(0,s.jsx)(n.code,{children:"name"}),", ",(0,s.jsx)(n.code,{children:"type"}),", reserved ",(0,s.jsx)(n.code,{children:"nodes"}),", configured ",(0,s.jsx)(n.code,{children:"users"}),", ",(0,s.jsx)(n.code,{children:"usergroups"})," and ",(0,s.jsx)(n.code,{children:"projects"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "rank": 1,\n  "name": "administrator_user_fence",\n  "type": "user_fence",\n  "nodes": ["env-296739laio1use1"],\n  "users": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator"\n    }\n  ],\n  "usergroups": [\n    {\n      "id": "E96685CD4E60068559F7DFAC7C2AA851",\n      "name": "Administrator"\n    }\n  ],\n  "projects": [\n    {\n      "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n      "name": "MicroStrategy Tutorial"\n    }\n  ],\n  "id": "YWRtaW5pc3RyYXRvcl91c2VyX2ZlbmNl"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Response Code: 201 (The new user fence is created successfully.)"})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var s=r(96540);const t={},o=s.createContext(t);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);