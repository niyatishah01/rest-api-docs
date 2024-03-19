"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5659],{31479:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=n(74848),s=n(28453);const i={title:"Update contents of a content group",description:"You can use REST APIs to update contents of a content group."},r=void 0,a={id:"common-workflows/administration/manage-content-group-objects/update-contents-of-an-existing-content-group",title:"Update contents of a content group",description:"You can use REST APIs to update contents of a content group.",source:"@site/docs/common-workflows/administration/manage-content-group-objects/update-contents-of-an-existing-content-group.md",sourceDirName:"common-workflows/administration/manage-content-group-objects",slug:"/common-workflows/administration/manage-content-group-objects/update-contents-of-an-existing-content-group",permalink:"/rest-api-docs/common-workflows/administration/manage-content-group-objects/update-contents-of-an-existing-content-group",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/manage-content-group-objects/update-contents-of-an-existing-content-group.md",tags:[],version:"current",lastUpdatedBy:"AugLychee",lastUpdatedAt:1710818077,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{title:"Update contents of a content group",description:"You can use REST APIs to update contents of a content group."},sidebar:"tutorialSidebar",previous:{title:"Retrieve contents of a content group",permalink:"/rest-api-docs/common-workflows/administration/manage-content-group-objects/retrieve-contents-of-an-existing-content-group"},next:{title:"Migrations in Workstation",permalink:"/rest-api-docs/common-workflows/administration/migrations/migrations-in-workstation/"}},c={},d=[];function p(t){const e={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,s.R)(),...t.components},{Available:n}=e;return n||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{since:"2021 Update 4"}),"\n",(0,o.jsx)(e.p,{children:"You can use REST APIs to update contents of a content group by id."}),"\n",(0,o.jsxs)(e.p,{children:["In this sample workflow, we want to add a dashboard as the contents to an existing content group with id ",(0,o.jsx)(e.code,{children:"D35FC0B04BD79E95612DDB907C4CCDF6"}),". The dashboard id is ",(0,o.jsx)(e.code,{children:"1182F0264D49467A43D9198D6E1331F2"}),", and it's in the project ",(0,o.jsx)(e.code,{children:"235853DC4B79DABCE8C6FFB26B7D8DC3"}),"."]}),"\n",(0,o.jsxs)(e.admonition,{type:"info",children:[(0,o.jsxs)(e.p,{children:["Get the authorization token needed to execute the request with ",(0,o.jsx)(e.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,o.jsxs)(e.p,{children:["Get the project ID from ",(0,o.jsx)(e.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,o.jsx)(e.admonition,{type:"info",children:(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.a,{href:"https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesManageContentBundle",children:"DssXmlPrivilegesManageContentBundle"})," privilege is required to update the contents of a content group."]})}),"\n",(0,o.jsxs)(e.p,{children:["Endpoint: ",(0,o.jsx)(e.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Content%20Groups/updateContentGroupContent",children:"PATCH /api/contentGroups/{id}/contents"})]}),"\n",(0,o.jsx)(e.p,{children:"Sample Request Header:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "evvk84kcucn8abon6c1qfbud7"\n'})}),"\n",(0,o.jsx)(e.p,{children:"Sample Request Body:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-json",children:'{\n  "operationList": [\n    {\n      "op": "add",\n      "path": "/235853DC4B79DABCE8C6FFB26B7D8DC3",\n      "value": [\n        {\n          "id": "1182F0264D49467A43D9198D6E1331F2",\n          "type": 55\n        }\n      ],\n      "id": 1\n    }\n  ]\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"Sample Curl:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:'curl -X \'PATCH\' \\\n  \'https://demo.microstrategy.com/MicroStrategyLibrary/api/contentGroups/D35FC0B04BD79E95612DDB907C4CCDF6/contents\' \\\n  -H \'accept: */*\' \\\n  -H \'X-MSTR-AuthToken: q9j2dck33c53s7g98go6iig876\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "operationList": [{\n        "op": "add",\n        "path": "/235853DC4B79DABCE8C6FFB26B7D8DC3",\n        "value": [{\n            "id": "1182F0264D49467A43D9198D6E1331F2",\n            "type": 55\n        }],\n        "id": 1\n    }]\n}\'\n'})}),"\n",(0,o.jsx)(e.p,{children:"Sample Response Body: N/A"}),"\n",(0,o.jsx)(e.p,{children:"Sample Response Code: 204 (The contents are added to the content group successfully.)"})]})}function u(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(p,{...t})}):p(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>a});var o=n(96540);const s={},i=o.createContext(s);function r(t){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),o.createElement(i.Provider,{value:e},t.children)}}}]);