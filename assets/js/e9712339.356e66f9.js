"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1620],{58273:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var n=s(74848),o=s(28453);const i={sidebar_label:"Ask a bot instance for suggested questions",title:"Ask a bot instance for suggested questions",description:"This workflow sample demonstrates how to ask a bot instance for suggested questions"},a=void 0,r={id:"common-workflows/analytics/use-bot-api/ask-bot-instance-suggested-question",title:"Ask a bot instance for suggested questions",description:"This workflow sample demonstrates how to ask a bot instance for suggested questions",source:"@site/docs/common-workflows/analytics/use-bot-api/ask-bot-instance-suggested-question.md",sourceDirName:"common-workflows/analytics/use-bot-api",slug:"/common-workflows/analytics/use-bot-api/ask-bot-instance-suggested-question",permalink:"/rest-api-docs/common-workflows/analytics/use-bot-api/ask-bot-instance-suggested-question",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/use-bot-api/ask-bot-instance-suggested-question.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1714063612,formattedLastUpdatedAt:"Apr 25, 2024",frontMatter:{sidebar_label:"Ask a bot instance for suggested questions",title:"Ask a bot instance for suggested questions",description:"This workflow sample demonstrates how to ask a bot instance for suggested questions"},sidebar:"tutorialSidebar",previous:{title:"Create a bot instance",permalink:"/rest-api-docs/common-workflows/analytics/use-bot-api/create-a-bot-instance"},next:{title:"Ask the bot instance a question",permalink:"/rest-api-docs/common-workflows/analytics/use-bot-api/ask-bot-instance-question"}},c={},d=[{value:"Ask a bot instance for suggested questions",id:"ask-a-bot-instance-for-suggested-questions",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components},{Available:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{since:"MicroStrategy ONE (March 2024)"}),"\n",(0,n.jsx)(t.p,{children:"This workflow sample demonstrates how to ask a bot instance for suggested questions."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Obtain the authorization token needed to execute the request using ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"ask-a-bot-instance-for-suggested-questions",children:"Ask a bot instance for suggested questions"}),"\n",(0,n.jsxs)(t.p,{children:["Endpoint: ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/AI%20Chatbot/createSuggestions",children:"POST /api/bots/{botId}/instances/{instanceId}/suggestions"})]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Replace ",(0,n.jsx)(t.code,{children:"{botId}"})," in ",(0,n.jsx)(t.code,{children:"POST /api/bots/{botId}/instances/{instanceId}/suggestions"})," with the chatbot ID and ",(0,n.jsx)(t.code,{children:"{instanceId}"})," with your bot instance ID created with ",(0,n.jsx)(t.code,{children:"POST /api/bots/{botId}/instances"})," in your environment."]})}),"\n",(0,n.jsx)(t.p,{children:"Sample Request Body:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "count": 1\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl 'https://demo.microstrategy.com/MicroStrategyLibrary/api/bots/6C6D314E4C881C01BFD79084DD5B2D42/instances/5B1EB48585F04384A97F3D831D7C7416/suggestions' \\\n-X 'POST'\n--header 'X-MSTR-AuthToken: t40ltbk411923ipk85r8r0tace' \\\n--header 'X-MSTR-ProjectID: FCC1924411EAABC39C6C0080EFA54501' \\\n--header 'Content-Type: application/json' \\\n--data '{\n    \"count\": 4\n}'\n"})}),"\n",(0,n.jsx)(t.p,{children:"Sample Response:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Response Code"}),(0,n.jsx)(t.th,{children:"Status"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"200"}),(0,n.jsx)(t.td,{children:"Successfully return the bot instance's suggested questions"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"400"}),(0,n.jsx)(t.td,{children:"Error in generating the bot instance's suggested questions"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"401"}),(0,n.jsx)(t.td,{children:"Authorization failed"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"404"}),(0,n.jsx)(t.td,{children:"Bot or bot instance does not exist"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Sample Response Body on success:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "suggestions": [\n    {\n      "text": "What is the revenue for year 2023"\n    }\n  ]\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>r});var n=s(96540);const o={},i=n.createContext(o);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);