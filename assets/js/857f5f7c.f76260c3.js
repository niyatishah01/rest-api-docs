"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5694],{93629:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=t(74848),s=t(28453);const r={title:"Retrieve an insight",description:"You can use REST APIs to retrieve an insight."},a=void 0,o={id:"common-workflows/analytics/manage-insights/retrieve-an-insight",title:"Retrieve an insight",description:"You can use REST APIs to retrieve an insight.",source:"@site/docs/common-workflows/analytics/manage-insights/retrieve-an-insight.md",sourceDirName:"common-workflows/analytics/manage-insights",slug:"/common-workflows/analytics/manage-insights/retrieve-an-insight",permalink:"/rest-api-docs/common-workflows/analytics/manage-insights/retrieve-an-insight",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/manage-insights/retrieve-an-insight.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1714063612,formattedLastUpdatedAt:"Apr 25, 2024",frontMatter:{title:"Retrieve an insight",description:"You can use REST APIs to retrieve an insight."},sidebar:"tutorialSidebar",previous:{title:"Delete a KPI object",permalink:"/rest-api-docs/common-workflows/analytics/manage-insights/delete-kpi"},next:{title:"Retrieve all insights",permalink:"/rest-api-docs/common-workflows/analytics/manage-insights/retrieve-all-insights"}},c={},d=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Available:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{since:"2021 Update 10"}),"\n",(0,i.jsx)(n.p,{children:"You can use REST APIs to retrieve an insight by ID."}),"\n",(0,i.jsxs)(n.p,{children:["This workflow sample retrieves an existing insight with ID ",(0,i.jsx)(n.code,{children:"4028f2df86340c5f018634c2f945000e"})," and project id ",(0,i.jsx)(n.code,{children:"B7CA92F04B9FAE8D941C3E9B7E0CD754"}),"."]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["Obtain the authorization token needed to execute the request using ",(0,i.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,i.jsxs)(n.p,{children:["Obtain the project ID from ",(0,i.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,i.jsxs)(n.p,{children:["Endpoint: ",(0,i.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Insight%20Engine%20-%20Insights/getInsightCard",children:"GET /api/insight/insightCards/{id}"})]}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "5f8qohkckd5d4tm18c9etbe0vd"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Body: N/A"}),"\n",(0,i.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'https://demo.microstrategy.com/MicroStrategyLibrary/api/insight/insightCards/4028f2df86340c5f018634c2f945000e' \\\n  -H 'accept: */*' \\\n  -H 'X-MSTR-AuthToken: 5f8qohkckd5d4tm18c9etbe0vd' \\\n  -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\n"})}),"\n",(0,i.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "4028f2df86340c5f018634c2f945000e",\n  "projectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n  "kpiId": "82B43E695D4C08AF3236E3AE886700F8",\n  "type": "OUTLIER",\n  "read": false,\n  "generatedTimestamp": "2023-02-09T06:00:38.466Z",\n  "results": [\n    {\n      "insightDataPoints": [\n        {\n          "rawValue": 5135661.126100001,\n          "formattedValue": "$5,135,661",\n          "timestamp": "2023-02-09T06:00:23.000Z",\n          "slope": 0\n        }\n      ],\n      "insightDataTrends": [],\n      "seasonalityPresence": false,\n      "seasonalities": [],\n      "lowerBoundary": [1.3956862745098038],\n      "upperBoundary": [8.518039215686276],\n      "score": 0,\n      "templateKey": "UNEXPECTED_HIGH",\n      "template": null,\n      "templatePropertySet": {\n        "timestamp": "2023-02-09T06:00:23.000Z",\n        "value": "5135661.126100001",\n        "lowerBoundary": "1.3956862745098038",\n        "upperBoundary": "8.518039215686276"\n      },\n      "models": [0, 1, 0]\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sample Response Code: 200 (The insight is returned successfully.)"})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);