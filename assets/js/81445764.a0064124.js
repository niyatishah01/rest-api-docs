"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[2020],{45494:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>n,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=r(74848),i=r(28453);const o={title:"Modify a security filter's member",sidebar_label:"Modify a security filter's member",description:"This workflow sample demonstrates how to modify the users and user groups that a specified security filter is applied to."},n=void 0,a={id:"common-workflows/modeling/manage-security-filter-objects/modify-a-security-filters-member",title:"Modify a security filter's member",description:"This workflow sample demonstrates how to modify the users and user groups that a specified security filter is applied to.",source:"@site/docs/common-workflows/modeling/manage-security-filter-objects/modify-a-security-filters-member.md",sourceDirName:"common-workflows/modeling/manage-security-filter-objects",slug:"/common-workflows/modeling/manage-security-filter-objects/modify-a-security-filters-member",permalink:"/rest-api-docs/common-workflows/modeling/manage-security-filter-objects/modify-a-security-filters-member",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-security-filter-objects/modify-a-security-filters-member.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1714063612,formattedLastUpdatedAt:"Apr 25, 2024",frontMatter:{title:"Modify a security filter's member",sidebar_label:"Modify a security filter's member",description:"This workflow sample demonstrates how to modify the users and user groups that a specified security filter is applied to."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a security filter's member",permalink:"/rest-api-docs/common-workflows/modeling/manage-security-filter-objects/retrieve-a-security-filters-member"},next:{title:"Manage subtotal objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-subtotal-objects/"}},c={},d=[{value:"1. Remove the users and user groups using PATCH /api/securityFilters/{id}/members",id:"1-remove-the-users-and-user-groups-using-patch-apisecurityfiltersidmembers",level:2},{value:"2. Add the users and user groups using PATCH /api/securityFilters/{id}/members",id:"2-add-the-users-and-user-groups-using-patch-apisecurityfiltersidmembers",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{Available:r}=s;return r||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{since:"2021 Update 1"}),"\n",(0,t.jsxs)(s.admonition,{type:"tip",children:[(0,t.jsxs)(s.p,{children:["You can try out this workflow at ",(0,t.jsx)(s.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-b39c86ac-1a16-4100-a96d-b1a6d2f74b9c?ctx=documentation",children:"REST API Playground"}),"."]}),(0,t.jsxs)(s.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,t.jsx)(s.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,t.jsxs)(s.p,{children:["This workflow sample demonstrates how to modify the users and user groups that a specified security filter is applied to. The object ID of the security filter is ",(0,t.jsx)(s.code,{children:"8018C24FEBC4406CB9E36838C01C82D1"}),"."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsxs)(s.a,{href:"#1-remove-the-users-and-user-groups-using-patch-apisecurityfiltersidmembers",children:["1. Remove the users and user groups using ",(0,t.jsx)(s.code,{children:"PATCH /api/securityFilters/{id}/members"})]})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsxs)(s.a,{href:"#2-add-the-users-and-user-groups-using-patch-apisecurityfiltersidmembers",children:["2. Add the users and user groups using ",(0,t.jsx)(s.code,{children:"PATCH /api/securityFilters/{id}/members"})]})}),"\n"]}),"\n",(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsxs)(s.p,{children:["Get the authorization token needed to execute the request with ",(0,t.jsx)(s.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,t.jsxs)(s.p,{children:["Get the project ID from ",(0,t.jsx)(s.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,t.jsxs)(s.h2,{id:"1-remove-the-users-and-user-groups-using-patch-apisecurityfiltersidmembers",children:["1. Remove the users and user groups using ",(0,t.jsx)(s.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Security%20Filters/updatePartialSecurityFilter",children:"PATCH /api/securityFilters/{id}/members"})]}),"\n",(0,t.jsx)(s.p,{children:"Sample Request Header:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "pamr302kmu0q1l0c22jeb13s2q"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,t.jsx)(s.p,{children:"Sample Request Body:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "operationList": [\n    {\n      "op": "removeElements",\n      "path": "/members",\n      "value": ["D09773F94699124B4D75B48F1B358327", "54F3D26011D2896560009A8E67019608"]\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(s.p,{children:"Sample Curl:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'curl -X PATCH "http://demo.microstrategy.com/MicroStrategyLibrary/api/securityFilters/06648A0711D50131C00051916B98494F/members" -H "accept: */*" -H "X-MSTR-AuthToken: pamr302kmu0q1l0c22jeb13s2q" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" -H "Content-Type: application/json" -d \'{"operationList":[{"op":"removeElements","path":"/members","value":["D09773F94699124B4D75B48F1B358327","54F3D26011D2896560009A8E67019608"]}]}\'\n'})}),"\n",(0,t.jsx)(s.p,{children:"Sample Response Body: Empty"}),"\n",(0,t.jsx)(s.p,{children:"Response Code: 204 (The security filter's member is modified successfully.)"}),"\n",(0,t.jsxs)(s.h2,{id:"2-add-the-users-and-user-groups-using-patch-apisecurityfiltersidmembers",children:["2. Add the users and user groups using ",(0,t.jsx)(s.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Security%20Filters/updatePartialSecurityFilter",children:"PATCH /api/securityFilters/{id}/members"})]}),"\n",(0,t.jsx)(s.p,{children:"Sample Request Header:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "pamr302kmu0q1l0c22jeb13s2q"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,t.jsx)(s.p,{children:"Sample Request Body:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "operationList": [\n    {\n      "op": "addElements",\n      "path": "/members",\n      "value": ["D09773F94699124B4D75B48F1B358327", "54F3D26011D2896560009A8E67019608"]\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(s.p,{children:"Sample Curl:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'curl -X PATCH "http://demo.microstrategy.com/MicroStrategyLibrary/api/securityFilters/06648A0711D50131C00051916B98494F/members" -H "accept: */*" -H "X-MSTR-AuthToken: pamr302kmu0q1l0c22jeb13s2q" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" -H "Content-Type: application/json" -d \'{"operationList":[{"op":"addElements","path":"/members","value":["D09773F94699124B4D75B48F1B358327","54F3D26011D2896560009A8E67019608"]}]}\'\n'})}),"\n",(0,t.jsx)(s.p,{children:"Sample Response Body: Empty"}),"\n",(0,t.jsx)(s.p,{children:"Response Code: 200 (The security filter's member is modified successfully.)"})]})}function m(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>n,x:()=>a});var t=r(96540);const i={},o=t.createContext(i);function n(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);