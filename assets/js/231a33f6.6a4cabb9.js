"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[4630],{67703:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=n(74848),o=n(28453);const i={sidebar_label:"Ask the bot instance a question",title:"Ask the bot instance a question",description:"This workflow sample demonstrates how to ask the bot instance a question."},a=void 0,r={id:"common-workflows/analytics/use-bot-api/ask-bot-instance-question",title:"Ask the bot instance a question",description:"This workflow sample demonstrates how to ask the bot instance a question.",source:"@site/docs/common-workflows/analytics/use-bot-api/ask-bot-instance-question.md",sourceDirName:"common-workflows/analytics/use-bot-api",slug:"/common-workflows/analytics/use-bot-api/ask-bot-instance-question",permalink:"/rest-api-docs/common-workflows/analytics/use-bot-api/ask-bot-instance-question",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/use-bot-api/ask-bot-instance-question.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1714063612,formattedLastUpdatedAt:"Apr 25, 2024",frontMatter:{sidebar_label:"Ask the bot instance a question",title:"Ask the bot instance a question",description:"This workflow sample demonstrates how to ask the bot instance a question."},sidebar:"tutorialSidebar",previous:{title:"Ask a bot instance for suggested questions",permalink:"/rest-api-docs/common-workflows/analytics/use-bot-api/ask-bot-instance-suggested-question"},next:{title:"Get a chat bot's question",permalink:"/rest-api-docs/common-workflows/analytics/use-bot-api/get-a-bot-question"}},c={},d=[{value:"Ask the bot instance a question",id:"ask-the-bot-instance-a-question",level:2}];function l(t){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...t.components},{Available:n}=e;return n||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{since:"MicroStrategy ONE (March 2024)"}),"\n",(0,s.jsx)(e.p,{children:"This workflow sample demonstrates how to ask the bot instance a question."}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsxs)(e.p,{children:["Obtain the authorization token needed to execute the request using ",(0,s.jsx)(e.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]})}),"\n",(0,s.jsx)(e.h2,{id:"ask-the-bot-instance-a-question",children:"Ask the bot instance a question"}),"\n",(0,s.jsxs)(e.p,{children:["Endpoint: ",(0,s.jsx)(e.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/AI%20Chatbot/postQuestion",children:"POST /api/bots/{botId}/instances/{instanceId}/questions"})]}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsxs)(e.p,{children:["Replace ",(0,s.jsx)(e.code,{children:"{botId}"})," in ",(0,s.jsx)(e.code,{children:"POST /api/bots/{botId}/instances/{instanceId}/questions"})," with the chatbot ID and ",(0,s.jsx)(e.code,{children:"{instanceId}"})," with your bot instance ID created with ",(0,s.jsx)(e.code,{children:"POST /api/bots/{botId}/instances"})," in your environment."]})}),"\n",(0,s.jsx)(e.p,{children:"Sample Request Body:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "text": "What is the average revenue for year 2023"\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"Sample Curl:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"curl 'https://demo.microstrategy.com/MicroStrategyLibrary/api/bots/6C6D314E4C881C01BFD79084DD5B2D42/instances/5B1EB48585F04384A97F3D831D7C7416/questions' \\\n-X 'POST' \\\n--header 'X-MSTR-AuthToken: t40ltbk411923ipk85r8r0tace' \\\n--header 'X-MSTR-ProjectID: FCC1924411EAABC39C6C0080EFA54501' \\\n--header 'Prefer: respond-async' \\\n--header 'Content-Type: application/json' \\\n--data '{\n    \"text\": \"What is the average revenue for year 2023\"\n}'\n"})}),"\n",(0,s.jsx)(e.p,{children:"Sample Response:"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Response Code"}),(0,s.jsx)(e.th,{children:"Status"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"201"}),(0,s.jsx)(e.td,{children:"Successfully accept the bot question"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"400"}),(0,s.jsx)(e.td,{children:"Error in accepting the bot question"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"401"}),(0,s.jsx)(e.td,{children:"Authorization failed"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"404"}),(0,s.jsx)(e.td,{children:"Bot or bot instance does not exist"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"Sample Response Body on success:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "id": "5B1EB48585F04384A97F3D831D7C7416"\n}\n'})})]})}function h(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(l,{...t})}):l(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>a,x:()=>r});var s=n(96540);const o={},i=s.createContext(o);function a(t){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:a(t.components),s.createElement(i.Provider,{value:e},t.children)}}}]);