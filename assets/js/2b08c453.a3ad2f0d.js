"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1238],{44310:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var n=s(74848),r=s(28453);const l={title:"Level prompts",description:"The level prompt is one of the most popular prompt types. It allows callers to specify the calculation level of a metric. For example, users can define a level prompt at the country level and apply it to a cost fact, as shown below, to generate a new **Cost_Level_Prompt** metric that aggregates the sum of **Cost** at the country level."},i=void 0,o={id:"common-workflows/analytics/use-prompts-objects/prompt-types/level-prompts",title:"Level prompts",description:"The level prompt is one of the most popular prompt types. It allows callers to specify the calculation level of a metric. For example, users can define a level prompt at the country level and apply it to a cost fact, as shown below, to generate a new **Cost_Level_Prompt** metric that aggregates the sum of **Cost** at the country level.",source:"@site/docs/common-workflows/analytics/use-prompts-objects/prompt-types/level-prompts.md",sourceDirName:"common-workflows/analytics/use-prompts-objects/prompt-types",slug:"/common-workflows/analytics/use-prompts-objects/prompt-types/level-prompts",permalink:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/level-prompts",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/use-prompts-objects/prompt-types/level-prompts.md",tags:[],version:"current",lastUpdatedBy:"AugLychee",lastUpdatedAt:1710818077,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{title:"Level prompts",description:"The level prompt is one of the most popular prompt types. It allows callers to specify the calculation level of a metric. For example, users can define a level prompt at the country level and apply it to a cost fact, as shown below, to generate a new **Cost_Level_Prompt** metric that aggregates the sum of **Cost** at the country level."},sidebar:"tutorialSidebar",previous:{title:"Hierarchy qualification prompts",permalink:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/hierarchy-qualification-prompts"},next:{title:"Answer prompts",permalink:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/answer-prompts"}},d={},a=[{value:"Answer a level prompt",id:"answer-a-level-prompt",level:2},{value:"Get the level prompt&#39;s available answers",id:"get-the-level-prompts-available-answers",level:2},{value:"Get the level prompt&#39;s definition",id:"get-the-level-prompts-definition",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Available:l}=t;return l||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{since:"2021 Update 1"}),"\n",(0,n.jsxs)(t.p,{children:["The level prompt is one of the most popular prompt types. It allows callers to specify the calculation level of a metric. For example, users can define a level prompt at the country level and apply it to a cost fact, as shown below, to generate a new ",(0,n.jsx)(t.strong,{children:"Cost_Level_Prompt"})," metric that aggregates the sum of ",(0,n.jsx)(t.strong,{children:"Cost"})," at the country level."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"level_prompt",src:s(24124).A+"",width:"918",height:"308"})}),"\n",(0,n.jsx)(t.p,{children:"Use REST APIs to perform the following actions on level prompts:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#answer-a-level-prompt",children:"Answer a level prompt"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#get-the-level-prompts-available-answers",children:"Get the level prompt's available answers"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#get-the-level-prompts-definition",children:"Get the level prompt's definition"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"answer-a-level-prompt",children:"Answer a level prompt"}),"\n",(0,n.jsx)(t.p,{children:"Use the following REST APIs to answer a level prompt for a report, document, or dashboard:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Reports"}),"\n",(0,n.jsxs)(t.p,{children:["PUT ",(0,n.jsx)(t.code,{children:"/api/reports/{id}/instances/{instanceId}/prompts/answers"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Documents or Dashboards"}),"\n",(0,n.jsxs)(t.p,{children:["PUT ",(0,n.jsx)(t.code,{children:"/api/documents/{id}/instances/{instanceId}/prompts/answers"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"All available parameters for the prompt definition are shown below."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Location"}),(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Data Type"}),(0,n.jsx)(t.th,{children:"Required?"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"header"}),(0,n.jsx)(t.td,{children:"X-MSTR-AuthToken"}),(0,n.jsx)(t.td,{children:"The authorization token"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"yes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"header"}),(0,n.jsx)(t.td,{children:"project id"}),(0,n.jsx)(t.td,{children:"The ID of the project"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"yes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"query"}),(0,n.jsx)(t.td,{children:"id"}),(0,n.jsx)(t.td,{children:"The ID of the report, document, or dashboard"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"yes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"query"}),(0,n.jsx)(t.td,{children:"instance id"}),(0,n.jsx)(t.td,{children:"The ID of the instance"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"yes"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"The sample code below answers a level prompt."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "prompts": [\n    {\n      "key": "753C65EB402C44D3A991F285D3CB7F6D@0@10",\n      "type": "LEVEL", // Required\n      "answers": {\n        "canContinue": true, // Optional, default value:  true\n        "filterRest": true, // Optional, default value:  true\n        "units": [\n          {\n            "id": "15969E6C4B5037A647A7F9AF80EAAB53",\n            "type": "DEFAULT", // Optional, default value:  "DEFAULT"\n            "filtering": "STANDARD", // Optional, default value:  "STANDARD"\n            "groupBy": true, // Optional, default value:  true\n            "grouping": "STANDARD" // Optional, default value:  "STANDARD"\n          }\n        ]\n      }\n    }\n  ]\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"get-the-level-prompts-available-answers",children:"Get the level prompt's available answers"}),"\n",(0,n.jsx)(t.p,{children:"Use the following REST APIs to get a level prompt's available answers for a report, document, or dashboard:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Reports"}),"\n",(0,n.jsxs)(t.p,{children:["GET ",(0,n.jsx)(t.code,{children:"/api/reports/{id}/instances/{instanceId}/prompts/{id}/objects"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Documents or Dashboards"}),"\n",(0,n.jsxs)(t.p,{children:["GET ",(0,n.jsx)(t.code,{children:"/api/documents/{id}/instances/{instanceId}/prompts/{id}/objects"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"All available parameters for getting the level prompt's available answers are shown below."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Location"}),(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Data Type"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"header"}),(0,n.jsx)(t.td,{children:"X-MSTR-AuthToken"}),(0,n.jsx)(t.td,{children:"The authorization token."}),(0,n.jsx)(t.td,{children:"string"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"header"}),(0,n.jsx)(t.td,{children:"project id"}),(0,n.jsx)(t.td,{children:"The project ID."}),(0,n.jsx)(t.td,{children:"string"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"query"}),(0,n.jsx)(t.td,{children:"report id"}),(0,n.jsx)(t.td,{children:"The ID of the report."}),(0,n.jsx)(t.td,{children:"string"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"query"}),(0,n.jsx)(t.td,{children:"instance id"}),(0,n.jsx)(t.td,{children:"The ID of the instance."}),(0,n.jsx)(t.td,{children:"string"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"query"}),(0,n.jsx)(t.td,{children:"prompt id"}),(0,n.jsx)(t.td,{children:"The ID of the prompt."}),(0,n.jsx)(t.td,{children:"string"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"query"}),(0,n.jsx)(t.td,{children:"offset"}),(0,n.jsx)(t.td,{children:"Returns the element beginning at this offset in the list. This value is zero-based and the default is zero."}),(0,n.jsx)(t.td,{children:"int"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"query"}),(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"Limits the number of matching elements returned. The default value is 1000. Enter -1 to use unlimited numbers. The max value is Integer.Max."}),(0,n.jsx)(t.td,{children:"int"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"query"}),(0,n.jsx)(t.td,{children:"search pattern"}),(0,n.jsx)(t.td,{children:"Sets a search pattern for level prompt answer searches. The search pattern can be used for search keywords."}),(0,n.jsx)(t.td,{children:"string"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"The sample code below gets the level prompt's available answers."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "objects": [\n    {\n      "id": "8D679D3C11D3E4981000E787EC6DE8A4",\n      "name": "Year",\n      "type": "ATTRIBUTE"\n    },\n    {\n      "id": "C11D3E4981000E8D679D3787EC6DE8A4",\n      "name": "Hierarchy Account",\n      "type": "DIMENSION"\n    }\n  ]\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"get-the-level-prompts-definition",children:"Get the level prompt's definition"}),"\n",(0,n.jsx)(t.p,{children:"Use the following REST APIs to get a the level prompt's definition for a report, document, or dashboard:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Reports"}),"\n",(0,n.jsxs)(t.p,{children:["GET ",(0,n.jsx)(t.code,{children:"/api/reports/{id}/prompts"})]}),"\n",(0,n.jsxs)(t.p,{children:["GET ",(0,n.jsx)(t.code,{children:"/api/reports/{id}/instances/{instanceId}/prompts"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Documents or Dashboards"}),"\n",(0,n.jsxs)(t.p,{children:["GET ",(0,n.jsx)(t.code,{children:"/api/documents/{id}/prompts"})]}),"\n",(0,n.jsxs)(t.p,{children:["GET ",(0,n.jsx)(t.code,{children:"/api/documents/{id}/instances/{instanceId}/prompts"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"All available parameters for getting the level prompt's definition are shown below."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Location"}),(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Data Type"}),(0,n.jsx)(t.th,{children:"Required?"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"header"}),(0,n.jsx)(t.td,{children:"X-MSTR-AuthToken"}),(0,n.jsx)(t.td,{children:"The authorization token."}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"yes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"header"}),(0,n.jsx)(t.td,{children:"project id"}),(0,n.jsx)(t.td,{children:"The project ID."}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"yes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"query"}),(0,n.jsx)(t.td,{children:"id"}),(0,n.jsx)(t.td,{children:"The ID of the report, document, or dashboard."}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"yes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"query"}),(0,n.jsx)(t.td,{children:"instance id"}),(0,n.jsx)(t.td,{children:"The ID of the instance."}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"yes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"query"}),(0,n.jsx)(t.td,{children:"closed"}),(0,n.jsx)(t.td,{children:"Filter the closed field by this parameter. If this value is null the filter does nothing."}),(0,n.jsx)(t.td,{children:"boolean"}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"The sample code below gets the level prompt's definition."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:' {\n    "key": "12FF3D5D43A6A17E8847FB9304FEA1E1@0@10",\n    "name": "Choose from a list of attributes/hierarchies to define level.",\n    "title": "Choose from a list of attributes/hierarchies to define level.",,\n    "type": "LEVEL",\n    "closed": false,\n    "required": true,\n    "max": 2,\n    "min": 1,\n    "defaultAnswer": {\n      "canContinue": true,           // Allow other users to add extra units to this definition\n        "filterRest": true,            // Filter setting: uncheck to exclude attributes absent in report or level(dimensionality)\n        "units":[{\n            "name": "year",\n            "id": "15969E6C4B5037A647A7F9AF80EAAB53",\n            "type": "ATTRIBUTE",\n            "filtering": "STANDARD",\n            "groupBy": true,\n            "grouping": "STANDARD"\n        }]\n    },\n    "answers":{\n      "canContinue": true,\n        "filterRest": true,\n        "units":[{\n            "name": "Report Level",\n            "id": "-4",\n            "type": "DEFAULT",\n            "filtering": "STANDARD",\n            "groupBy": true,\n            "grouping": "STANDARD"\n        }]\n    },\n  }\n'})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},24124:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/level_prompt-3ae9c5f11e6d143fe4d09b096bef99b4.png"},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>o});var n=s(96540);const r={},l=n.createContext(r);function i(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);