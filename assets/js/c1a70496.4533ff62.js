"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6422],{21860:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=r(74848),t=r(28453);const s={title:"Retrieve a specific fence",description:"This workflow sample demonstrates how to retrieve a specific user or workload fence."},o=void 0,c={id:"common-workflows/administration/server-management/manage-fences/retrieve-specific-fence",title:"Retrieve a specific fence",description:"This workflow sample demonstrates how to retrieve a specific user or workload fence.",source:"@site/docs/common-workflows/administration/server-management/manage-fences/retrieve-specific-fence.md",sourceDirName:"common-workflows/administration/server-management/manage-fences",slug:"/common-workflows/administration/server-management/manage-fences/retrieve-specific-fence",permalink:"/rest-api-docs/common-workflows/administration/server-management/manage-fences/retrieve-specific-fence",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/server-management/manage-fences/retrieve-specific-fence.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1714063612,formattedLastUpdatedAt:"Apr 25, 2024",frontMatter:{title:"Retrieve a specific fence",description:"This workflow sample demonstrates how to retrieve a specific user or workload fence."},sidebar:"tutorialSidebar",previous:{title:"Retrieve the list of fences",permalink:"/rest-api-docs/common-workflows/administration/server-management/manage-fences/retrieve-list-of-fences"},next:{title:"Create a new fence",permalink:"/rest-api-docs/common-workflows/administration/server-management/manage-fences/create-fence"}},a={},d=[{value:"Get the detailed information of a specific fence",id:"get-the-detailed-information-of-a-specific-fence",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components},{Available:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{since:"2021 Update 6"}),"\n",(0,i.jsxs)(n.p,{children:["You want to get the detailed information of user fence ",(0,i.jsx)(n.code,{children:"administrator_user_fence"})," having id YWRtaW5pc3RyYXRvcl91c2VyX2ZlbmNl, which reserves ",(0,i.jsx)(n.code,{children:"env-296739laio1use1"})," node and configured for ",(0,i.jsx)(n.code,{children:"Administrator"})," user/usergroups."]}),"\n",(0,i.jsxs)(n.p,{children:["The user ID is ",(0,i.jsx)(n.code,{children:"54F3D26011D2896560009A8E67019608"}),". The usergroup ID is ",(0,i.jsx)(n.code,{children:"E96685CD4E60068559F7DFAC7C2AA851"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesConfigureServerBasic",children:"DssXmlPrivilegesConfigureServerBasic"})," and ",(0,i.jsx)(n.a,{href:"https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesUseClusterMonitor",children:"DssXmlPrivilegesUseClusterMonitor"})," privileges are required to retrieve a specific user fence."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Obtain the authorization token needed to execute the request using ",(0,i.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST\xa0/api/auth/login"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"get-the-detailed-information-of-a-specific-fence",children:"Get the detailed information of a specific fence"}),"\n",(0,i.jsxs)(n.p,{children:["Endpoint: ",(0,i.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System%20Administration/getFence_1",children:"GET /api/v2/iserver/fences/{id}"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "g97nfc2l7icgsb37vjdh4b6gcu"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Body: Empty"}),"\n",(0,i.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -X GET \\\n'https://demo.microstrategy.com/MicroStrategyLibrary/api/iserver/fences/YWRtaW5pc3RyYXRvcl91c2VyX2ZlbmNl' \\\n-H 'accept: application/json' \\\n-H 'X-MSTR-AuthToken: g97nfc2l7icgsb37vjdh4b6gcu'\n"})}),"\n",(0,i.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"users"})," and ",(0,i.jsx)(n.code,{children:"usergroups"})," can be configured only for user fence, therefore the response body for workload fence should contain empty ",(0,i.jsx)(n.code,{children:"users"})," and ",(0,i.jsx)(n.code,{children:"usergroups"})," fields."]})}),"\n",(0,i.jsxs)(n.p,{children:["You can view the detailed information of ",(0,i.jsx)(n.code,{children:"administrator_user_fence"})," user fence in the body of the response. The detailed information includes ",(0,i.jsx)(n.code,{children:"rank"}),", ",(0,i.jsx)(n.code,{children:"name"}),", ",(0,i.jsx)(n.code,{children:"type"}),", reserved ",(0,i.jsx)(n.code,{children:"nodes"}),", configured ",(0,i.jsx)(n.code,{children:"users"}),", ",(0,i.jsx)(n.code,{children:"usergroups"})," and ",(0,i.jsx)(n.code,{children:"projects"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "rank": 1,\n  "name": "administrator_user_fence",\n  "type": "user_fence",\n  "nodes": ["env-295232laiouse1"],\n  "users": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator"\n    }\n  ],\n  "usergroups": [\n    {\n      "id": "E96685CD4E60068559F7DFAC7C2AA851",\n      "name": "Administrator"\n    }\n  ],\n  "projects": [\n    {\n      "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n      "name": "MicroStrategy Tutorial"\n    }\n  ],\n  "id": "YWRtaW5pc3RyYXRvcl91c2VyX2ZlbmNl"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Response Code: 200 (The detailed information of a given fence is returned successfully.)"})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var i=r(96540);const t={},s=i.createContext(t);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);