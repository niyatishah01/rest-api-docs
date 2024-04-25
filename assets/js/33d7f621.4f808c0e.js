"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3337],{11660:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=t(74848),i=t(28453);const o={title:"Workflow sample - Retrieve all gateways' definitions",sidebar_label:"Retrieve all gateways' definitions",description:"This workflow sample demonstrates how to list all available gateways."},s=void 0,r={id:"common-workflows/administration/manage-gateways/retrieve-gateways",title:"Workflow sample - Retrieve all gateways' definitions",description:"This workflow sample demonstrates how to list all available gateways.",source:"@site/docs/common-workflows/administration/manage-gateways/retrieve-gateways.md",sourceDirName:"common-workflows/administration/manage-gateways",slug:"/common-workflows/administration/manage-gateways/retrieve-gateways",permalink:"/rest-api-docs/common-workflows/administration/manage-gateways/retrieve-gateways",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/manage-gateways/retrieve-gateways.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1714063612,formattedLastUpdatedAt:"Apr 25, 2024",frontMatter:{title:"Workflow sample - Retrieve all gateways' definitions",sidebar_label:"Retrieve all gateways' definitions",description:"This workflow sample demonstrates how to list all available gateways."},sidebar:"tutorialSidebar",previous:{title:"Manage gateways",permalink:"/rest-api-docs/common-workflows/administration/manage-gateways/"},next:{title:"Retrieve a gateway's definition",permalink:"/rest-api-docs/common-workflows/administration/manage-gateways/retrieve-a-gateway-definition"}},l={},d=[{value:"Retrieve all gateways&#39; definitions GET /api/gateways",id:"retrieve-all-gateways-definitions-get-apigateways",level:2}];function c(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Available:t}=a;return t||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t,{since:"2021 Update 9"}),"\n",(0,n.jsx)(a.p,{children:"This workflow sample demonstrates how to list all available gateways."}),"\n",(0,n.jsx)(a.admonition,{type:"tip",children:(0,n.jsxs)(a.p,{children:["Obtain the authorization token needed to execute the request using ",(0,n.jsx)(a.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]})}),"\n",(0,n.jsxs)(a.h2,{id:"retrieve-all-gateways-definitions-get-apigateways",children:["Retrieve all gateways' definitions ",(0,n.jsx)(a.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Gateways/getGateways",children:"GET /api/gateways"})]}),"\n",(0,n.jsx)(a.p,{children:"Sample Request Header:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n'})}),"\n",(0,n.jsx)(a.p,{children:"Sample Request Body: Empty"}),"\n",(0,n.jsx)(a.p,{children:"Sample Curl:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'curl -X "GET" \\\n  "http://demo.microstrategy.com/MicroStrategyLibrary/api/gateways" \\\n  -H "accept: application/json" \\\n  -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch"\n'})}),"\n",(0,n.jsx)(a.p,{children:"Sample Response Body:"}),"\n",(0,n.jsx)(a.p,{children:"You can get all available gateways' definition in the body of the response."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-json",children:'{\n  "gateways": {\n    "D649DA37F4514289AA44D93B128F3BD5": {\n      "name": "Cloud Gateway ADLS2",\n      "id": "D649DA37F4514289AA44D93B128F3BD5",\n      "type": "S3",\n      "certifiedAsGateway": true,\n      "dbType": "cloud_gateway_azure_adls_2"\n    },\n    "EAD0E3D84E8B47D1A1A860CEF66FE602": {\n      "name": "Microsoft SQL Server 2012",\n      "id": "EAD0E3D84E8B47D1A1A860CEF66FE602",\n      "type": "Relational",\n      "certifiedAsGateway": true,\n      "dbType": "sql_server"\n    }\n  }\n}\n'})}),"\n",(0,n.jsx)(a.p,{children:"Sample Response Code: 200"})]})}function p(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>s,x:()=>r});var n=t(96540);const i={},o=n.createContext(i);function s(e){const a=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:a},e.children)}}}]);