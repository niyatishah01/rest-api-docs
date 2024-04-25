"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[4337],{37661:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=a(74848),n=a(28453);const o={title:"Workflow sample - Retrieve a gateway's definition",sidebar_label:"Retrieve a gateway's definition",description:"This workflow sample demonstrates how to retrieve a gateway's definition."},r=void 0,s={id:"common-workflows/administration/manage-gateways/retrieve-a-gateway-definition",title:"Workflow sample - Retrieve a gateway's definition",description:"This workflow sample demonstrates how to retrieve a gateway's definition.",source:"@site/docs/common-workflows/administration/manage-gateways/retrieve-a-gateway-definition.md",sourceDirName:"common-workflows/administration/manage-gateways",slug:"/common-workflows/administration/manage-gateways/retrieve-a-gateway-definition",permalink:"/rest-api-docs/common-workflows/administration/manage-gateways/retrieve-a-gateway-definition",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/manage-gateways/retrieve-a-gateway-definition.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1714063612,formattedLastUpdatedAt:"Apr 25, 2024",frontMatter:{title:"Workflow sample - Retrieve a gateway's definition",sidebar_label:"Retrieve a gateway's definition",description:"This workflow sample demonstrates how to retrieve a gateway's definition."},sidebar:"tutorialSidebar",previous:{title:"Retrieve all gateways' definitions",permalink:"/rest-api-docs/common-workflows/administration/manage-gateways/retrieve-gateways"},next:{title:"Manage licensing",permalink:"/rest-api-docs/common-workflows/administration/manage-licensing/"}},d={},c=[{value:"Retrieve a gateway&#39;s definition GET /api/gateways/{id}",id:"retrieve-a-gateways-definition-get-apigatewaysid",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Available:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a,{since:"2021 Update 9"}),"\n",(0,i.jsx)(t.p,{children:"This workflow sample demonstrates how to retrieve a gateway's definition."}),"\n",(0,i.jsxs)(t.admonition,{type:"tip",children:[(0,i.jsxs)(t.p,{children:["Obtain the authorization token needed to execute the request using ",(0,i.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,i.jsxs)(t.p,{children:["Obtain the gateway ID needed to execute the request using ",(0,i.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Gateways/getGateways",children:"GET /api/gateways"}),"."]})]}),"\n",(0,i.jsxs)(t.h2,{id:"retrieve-a-gateways-definition-get-apigatewaysid",children:["Retrieve a gateway's definition ",(0,i.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Gateways/getGatewayById",children:"GET /api/gateways/{id}"})]}),"\n",(0,i.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n'})}),"\n",(0,i.jsx)(t.p,{children:"Sample Request Body: Empty"}),"\n",(0,i.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'curl -X "GET" \\\n  "http://demo.microstrategy.com/MicroStrategyLibrary/api/gateways/EAD0E3D84E8B47D1A1A860CEF66FE602" \\\n  -H "accept: application/json" \\\n  -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch"\n'})}),"\n",(0,i.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,i.jsx)(t.p,{children:"You can get the gateway's definition in the body of the response."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "name": "Microsoft SQL Server 2012",\n  "id": "EAD0E3D84E8B47D1A1A860CEF66FE602",\n  "type": "Relational",\n  "certifiedAsGateway": true,\n  "dbType": "sql_server"\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Sample Response Code: 200"})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>s});var i=a(96540);const n={},o=i.createContext(n);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);