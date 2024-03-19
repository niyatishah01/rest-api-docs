"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[4728],{27143:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var o=s(74848),n=s(28453);const i={sidebar_label:"Get a chat bot's question list",title:"Get a bot's question list",description:"This workflow sample demonstrates how to get a chat bot's question list."},a=void 0,r={id:"common-workflows/analytics/use-bot-api/get-bot-question-list",title:"Get a bot's question list",description:"This workflow sample demonstrates how to get a chat bot's question list.",source:"@site/docs/common-workflows/analytics/use-bot-api/get-bot-question-list.md",sourceDirName:"common-workflows/analytics/use-bot-api",slug:"/common-workflows/analytics/use-bot-api/get-bot-question-list",permalink:"/rest-api-docs/common-workflows/analytics/use-bot-api/get-bot-question-list",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/use-bot-api/get-bot-question-list.md",tags:[],version:"current",lastUpdatedBy:"AugLychee",lastUpdatedAt:1710818077,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{sidebar_label:"Get a chat bot's question list",title:"Get a bot's question list",description:"This workflow sample demonstrates how to get a chat bot's question list."},sidebar:"tutorialSidebar",previous:{title:"Get a chat bot's configuration",permalink:"/rest-api-docs/common-workflows/analytics/use-bot-api/get-bot-configuration"},next:{title:"Create a bot instance",permalink:"/rest-api-docs/common-workflows/analytics/use-bot-api/create-a-bot-instance"}},c={},l=[{value:"Get a chat bot&#39;s question list",id:"get-a-chat-bots-question-list",level:2}];function d(t){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...t.components},{Available:s}=e;return s||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s,{since:"MicroStrategy ONE (March 2024)"}),"\n",(0,o.jsx)(e.p,{children:"This workflow sample demonstrates how to get a chat bot's question list."}),"\n",(0,o.jsx)(e.admonition,{type:"info",children:(0,o.jsxs)(e.p,{children:["Obtain the authorization token needed to execute the request using ",(0,o.jsx)(e.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]})}),"\n",(0,o.jsx)(e.h2,{id:"get-a-chat-bots-question-list",children:"Get a chat bot's question list"}),"\n",(0,o.jsxs)(e.p,{children:["Endpoint: ",(0,o.jsx)(e.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/AI%20Chatbot/queryMessages",children:"GET /api/bots/{botId}/questions"})]}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsxs)(e.p,{children:["Replace ",(0,o.jsx)(e.code,{children:"{botId}"})," in ",(0,o.jsx)(e.code,{children:"GET /api/bots/{botId}/questions"})," with the chatbot ID in your environment."]})}),"\n",(0,o.jsx)(e.p,{children:"Sample Request Header:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-http",children:'"X-MSTR-AuthToken": "evvk84kcucn8abon6c1qfbud7"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,o.jsx)(e.p,{children:"Sample Request Body:\nNo request body."}),"\n",(0,o.jsx)(e.p,{children:"Sample Curl:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"curl 'https://demo.microstrategy.com/MicroStrategyLibrary/api/bots/6C6D314E4C881C01BFD79084DD5B2D42/questions' \\\n-H 'accept: */*' \\\n-H 'X-MSTR-AuthToken: evvk84kcucn8abon6c1qfbud7' \\\n-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\n"})}),"\n",(0,o.jsx)(e.p,{children:"Sample Response:"}),"\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{children:"Response Code"}),(0,o.jsx)(e.th,{children:"Status"})]})}),(0,o.jsxs)(e.tbody,{children:[(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"200"}),(0,o.jsx)(e.td,{children:"Successfully return the bot's question list"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"400"}),(0,o.jsx)(e.td,{children:"Error in getting the bot's question list"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"401"}),(0,o.jsx)(e.td,{children:"Authorization failed"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"404"}),(0,o.jsx)(e.td,{children:"The bot does not exist"})]})]})]}),"\n",(0,o.jsx)(e.p,{children:"Sample Response Body on success:"}),"\n",(0,o.jsxs)(e.p,{children:["The response is the question list in a chat bot. See ",(0,o.jsx)(e.a,{href:"/rest-api-docs/common-workflows/analytics/use-bot-api/get-a-bot-question",children:"Get a question in chat bot"})," for more details about a bot question's fields."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-json",children:'{\n  "questions": [\n    {\n      "id": "5B1EB48585F04384A97F3D831D7C7416",\n      "text": "Analyze the distribution of cooking times for recipes",\n      "answers": [\n        {\n          "text": "The distribution of cooking times for recipes is as follows:\\n- The shortest cooking time is -1 minute.\\n- The majority of recipes have cooking times ranging from 2 to 60 minutes.\\n- There are a few recipes with longer cooking times, such as 75, 90, 120, and 720 minutes.\\n- The exact distribution of cooking times can be seen in the visualization result.",\n          "type": "visualization",\n          "data": {\n            "id": "583793FBA2394DD4A3154F2177982F9F"\n          }\n        }\n      ],\n      "creationDate": "2024-03-08T09:01:43.154+0000"\n    }\n  ]\n}\n'})})]})}function h(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}},28453:(t,e,s)=>{s.d(e,{R:()=>a,x:()=>r});var o=s(96540);const n={},i=o.createContext(n);function a(t){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:a(t.components),o.createElement(i.Provider,{value:e},t.children)}}}]);