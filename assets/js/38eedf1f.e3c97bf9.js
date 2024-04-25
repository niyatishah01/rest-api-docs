"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3103],{55316:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=n(74848),o=n(28453);const i={sidebar_label:"Get a chat bot's question",title:"Get a bot's question",description:"This workflow sample demonstrates how to get a chat bot's question."},r=void 0,a={id:"common-workflows/analytics/use-bot-api/get-a-bot-question",title:"Get a bot's question",description:"This workflow sample demonstrates how to get a chat bot's question.",source:"@site/docs/common-workflows/analytics/use-bot-api/get-a-bot-question.md",sourceDirName:"common-workflows/analytics/use-bot-api",slug:"/common-workflows/analytics/use-bot-api/get-a-bot-question",permalink:"/rest-api-docs/common-workflows/analytics/use-bot-api/get-a-bot-question",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/use-bot-api/get-a-bot-question.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1714063612,formattedLastUpdatedAt:"Apr 25, 2024",frontMatter:{sidebar_label:"Get a chat bot's question",title:"Get a bot's question",description:"This workflow sample demonstrates how to get a chat bot's question."},sidebar:"tutorialSidebar",previous:{title:"Ask the bot instance a question",permalink:"/rest-api-docs/common-workflows/analytics/use-bot-api/ask-bot-instance-question"},next:{title:"Delete a bot instance",permalink:"/rest-api-docs/common-workflows/analytics/use-bot-api/delete-a-bot-instance"}},c={},d=[{value:"Get a chat bot&#39;s question",id:"get-a-chat-bots-question",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components},{Available:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{since:"MicroStrategy ONE (March 2024)"}),"\n",(0,s.jsx)(t.p,{children:"This workflow sample demonstrates how to get a chat bot's question."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Obtain the authorization token needed to execute the request using ",(0,s.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"get-a-chat-bots-question",children:"Get a chat bot's question"}),"\n",(0,s.jsxs)(t.p,{children:["Endpoint: ",(0,s.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/AI%20Chatbot/queryMessage",children:"GET /api/bots/{botId}/questions/{questionId}"})]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Replace ",(0,s.jsx)(t.code,{children:"{botId}"})," in ",(0,s.jsx)(t.code,{children:"GET /api/bots/{botId}/questions/{questionId}"})," with the chatbot ID and ",(0,s.jsx)(t.code,{children:"{questionId}"})," with your question ID in your environment."]})}),"\n",(0,s.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-http",children:'"X-MSTR-AuthToken": "evvk84kcucn8abon6c1qfbud7"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,s.jsx)(t.p,{children:"Sample Request Body:\nNo request body."}),"\n",(0,s.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl 'https://demo.microstrategy.com/MicroStrategyLibrary/api/bots/6C6D314E4C881C01BFD79084DD5B2D42/questions/5B1EB48585F04384A97F3D831D7C7416' \\\n-H 'accept: */*' \\\n-H 'X-MSTR-AuthToken: evvk84kcucn8abon6c1qfbud7' \\\n-H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\n"})}),"\n",(0,s.jsx)(t.p,{children:"Sample Response:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Response Code"}),(0,s.jsx)(t.th,{children:"Status"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"200"}),(0,s.jsx)(t.td,{children:"Successfully return the bot question that has been answered"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"202"}),(0,s.jsx)(t.td,{children:"Successfully return the bot question this is still being processed"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"400"}),(0,s.jsx)(t.td,{children:"Error in getting the bot question"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"401"}),(0,s.jsx)(t.td,{children:"Authorization failed"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"404"}),(0,s.jsx)(t.td,{children:"Bot or bot question does not exist"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Sample Response Body on success:"}),"\n",(0,s.jsx)(t.p,{children:"The response is the question in a chat bot."}),"\n",(0,s.jsx)(t.p,{children:"If the question is being processed, the answers list is empty and the HTTP response status is 202 Accepted. Keep calling this API to check the status of the question."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "id": "5B1EB48585F04384A97F3D831D7C7416",\n  "text": "Analyze the distribution of cooking times for recipes",\n  "answers": [],\n  "creationDate": "2024-03-08T09:01:43.154+0000"\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"If the question's answer is successfully generated, the response is:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "id": "5B1EB48585F04384A97F3D831D7C7416",\n  "text": "Analyze the distribution of cooking times for recipes",\n  "answers": [\n    {\n      "text": "The distribution of cooking times for recipes is as follows:\\n- The shortest cooking time is -1 minute.\\n- The majority of recipes have cooking times ranging from 2 to 60 minutes.\\n- There are a few recipes with longer cooking times, such as 75, 90, 120, and 720 minutes.\\n- The exact distribution of cooking times can be seen in the visualization result.",\n      "type": "visualization",\n      "data": {\n        "id": "583793FBA2394DD4A3154F2177982F9F"\n      }\n    }\n  ],\n  "creationDate": "2024-03-08T09:01:43.154+0000"\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"If the question encounters an error when generating the answer, the answer is:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "id": "5B1EB48585F04384A97F3D831D7C7416",\n  "text": "Analyze the distribution of cooking times for recipes",\n  "answers": [\n    {\n      "text": "Something is wrong. Please try again.",\n      "detailError": "Something is wrong. Please try again.",\n      "type": "error"\n    }\n  ],\n  "creationDate": "2024-03-08T09:01:43.154+0000"\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(96540);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);