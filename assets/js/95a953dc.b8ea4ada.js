"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[9196],{15587:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(74848),s=r(28453);const i={title:"Metric expression prompts",description:'A metric expression element prompt is one of the most commonly used prompt types. It allows the caller to provide an expression to filter the data in a report or dashboard. For example, you define a prompt as "Get data when Avg Revenue per Customer is greater than 10".'},d=void 0,o={id:"common-workflows/modeling/manage-prompt-objects/prompt-types/metric-expression-prompts",title:"Metric expression prompts",description:'A metric expression element prompt is one of the most commonly used prompt types. It allows the caller to provide an expression to filter the data in a report or dashboard. For example, you define a prompt as "Get data when Avg Revenue per Customer is greater than 10".',source:"@site/docs/common-workflows/modeling/manage-prompt-objects/prompt-types/metric-expression-prompts.md",sourceDirName:"common-workflows/modeling/manage-prompt-objects/prompt-types",slug:"/common-workflows/modeling/manage-prompt-objects/prompt-types/metric-expression-prompts",permalink:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/prompt-types/metric-expression-prompts",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-prompt-objects/prompt-types/metric-expression-prompts.md",tags:[],version:"current",lastUpdatedBy:"AugLychee",lastUpdatedAt:1710818077,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{title:"Metric expression prompts",description:'A metric expression element prompt is one of the most commonly used prompt types. It allows the caller to provide an expression to filter the data in a report or dashboard. For example, you define a prompt as "Get data when Avg Revenue per Customer is greater than 10".'},sidebar:"tutorialSidebar",previous:{title:"Hierarchy qualification prompts",permalink:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/prompt-types/hierarchy-qualification-prompts"},next:{title:"Object prompts",permalink:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/prompt-types/object-prompts"}},c={},l=[{value:"Create a new prompt",id:"create-a-new-prompt",level:2},{value:"Update an existing prompt",id:"update-an-existing-prompt",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsxs)(t.p,{children:["You can try out this workflow at ",(0,n.jsx)(t.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-bca657c1-687a-4ba4-9050-3b45b4a5ce39?ctx=documentation",children:"REST API Playground"}),"."]}),(0,n.jsxs)(t.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,n.jsx)(t.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,n.jsxs)(t.p,{children:["A metric expression element prompt is one of the most commonly used prompt types. It allows the caller to provide an expression to filter the data in a report or dashboard. For example, you define a prompt as ",(0,n.jsx)(t.code,{children:'"Get data when Avg Revenue per Customer is greater than 10"'}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Use REST APIs to perform the following actions on metric expression prompts:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/retrieve-a-prompts-definition",children:"Retrieve a prompt's definition"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#create-a-new-prompt",children:"Create a new prompt"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#update-an-existing-prompt",children:"Update an existing prompt"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"create-a-new-prompt",children:"Create a new prompt"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["To create a metric expression prompt, you must enter the required fields with the correct information, using ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-postPrompt",children:"POST /api/model/prompts"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"The response can change based on the request parameters provided by the caller. Use the following parameters."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Location"}),(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"header"}),(0,n.jsx)(t.td,{children:"X-MSTR-authToken"}),(0,n.jsx)(t.td,{children:"The authorization token"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"header"}),(0,n.jsx)(t.td,{children:"X-MSTR-ProjectID"}),(0,n.jsx)(t.td,{children:"The ID of the project"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"header"}),(0,n.jsx)(t.td,{children:"X-MSTR-MS-Changeset"}),(0,n.jsx)(t.td,{children:"The ID of the changeset"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"query"}),(0,n.jsx)(t.td,{children:"showExpressionAs"}),(0,n.jsx)(t.td,{children:"The parameter that specifies the format in which the response is returned."})]})]})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:'The model for the definition of a metric expression prompt can be represented using the fields below. "objectID", "dateCreated", "dateModified", and "versionId" are automatically generated.'}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Fields"}),(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Data Type"}),(0,n.jsx)(t.th,{children:"Required?"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"information"}),(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"The name of the prompt. This should be a user-friendly name for identifying the prompt."}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"\u2714\ufe0f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"information"}),(0,n.jsx)(t.td,{children:"subType"}),(0,n.jsx)(t.td,{children:'The type of prompt. The "subType" for a metric expression prompt is "prompt_expression".'}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"\u2714\ufe0f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"information"}),(0,n.jsx)(t.td,{children:"destinationFolderId"}),(0,n.jsx)(t.td,{children:"The folder ID where the new prompt is saved."}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"\u2714\ufe0f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"expressionType"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:'Differentiates between the three expression types for an expression prompt. This field is required when the "subType" in "information" is "prompt_expression". This field should be "metric" for metric expression prompts.'}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"\u2714\ufe0f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"title"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"The title of the prompt."}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"instruction"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"The instruction on how to apply the prompt."}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"question"}),(0,n.jsx)(t.td,{children:"predefinedObjects"}),(0,n.jsx)(t.td,{children:'A list of predefined metrics with "objectId", "subType", and "name".'}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"question"}),(0,n.jsx)(t.td,{children:"search"}),(0,n.jsx)(t.td,{children:'A standalone search object with "objectId", "subType", and "name". "search" and "predefinedObjects" should have an XOR relationship, since only one of them has a value.'}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"defaultAnswer"}),(0,n.jsx)(t.td,{children:"qualification"}),(0,n.jsx)(t.td,{children:'A qualification set used to define the default answer. It follows the "tree" format of the qualification in the filter request.'}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"restriction"}),(0,n.jsx)(t.td,{children:"required"}),(0,n.jsx)(t.td,{children:"An indicator that specifies whether a prompt answer is required or not."}),(0,n.jsx)(t.td,{children:"boolean"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"restriction"}),(0,n.jsx)(t.td,{children:"maxElementPerSelection"}),(0,n.jsx)(t.td,{children:"The maximum number of elements per selection"}),(0,n.jsx)(t.td,{children:"integer"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"restriction"}),(0,n.jsx)(t.td,{children:"allowPersonalAnswers"}),(0,n.jsx)(t.td,{children:'An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple".'}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"restriction"}),(0,n.jsx)(t.td,{children:"min"}),(0,n.jsx)(t.td,{children:"The minimum number of qualifications that can be added."}),(0,n.jsx)(t.td,{children:"integer"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"restriction"}),(0,n.jsx)(t.td,{children:"max"}),(0,n.jsx)(t.td,{children:"The maximum number of qualifications that can be added."}),(0,n.jsx)(t.td,{children:"integer"}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Sample code for creating a metric expression prompt's definition is provided below."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n    "subType": "prompt_expression",\n    "name": "Metric Prompt with Custom Expression"\n  },\n  "title": "Metric qualification",\n  "instruction": "Choose a metric to begin building a qualification.",\n  "expressionType": "metric",\n  "question": {\n    "predefinedObjects": [\n      {\n        "objectId": "7FD5B69611D5AC76C000D98A4CC5F24F",\n        "subType": "metric",\n        "name": "Cost"\n      },\n      {\n        "objectId": "381980B211D40BC8C000C8906B98494F",\n        "subType": "metric",\n        "name": "Discount"\n      }\n    ]\n  },\n  "defaultAnswer": {\n    "qualification": {\n      "text": "Cost = Discount + 4",\n      "tree": {\n        "type": "predicate_metric_qualification",\n        "predicateId": "8126CF7F22C847AE8A112F3ABA5A27DA",\n        "predicateText": "Cost = Discount + 4",\n        "predicateTree": {\n          "function": "equals",\n          "parameters": [\n            {\n              "parameterType": "expression",\n              "expression": {\n                "text": "Discount + 4"\n              }\n            }\n          ],\n          "levelType": "none",\n          "metric": {\n            "objectId": "7FD5B69611D5AC76C000D98A4CC5F24F",\n            "subType": "metric",\n            "name": "Cost"\n          },\n          "metricFunction": "value",\n          "isIndependent": 0,\n          "nullInclude": 0\n        }\n      }\n    }\n  },\n  "restriction": {\n    "required": false,\n    "allowPersonalAnswers": "none",\n    "min": 3,\n    "max": 10\n  }\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"update-an-existing-prompt",children:"Update an existing prompt"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Update the definition of a metric expression prompt using ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-putPrompt",children:"PUT /api/model/prompts/{promptId}"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Provide the following headers in the request:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Location"}),(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"header"}),(0,n.jsx)(t.td,{children:"X-MSTR-authToken"}),(0,n.jsx)(t.td,{children:"The authorization token"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"header"}),(0,n.jsx)(t.td,{children:"X-MSTR-ProjectID"}),(0,n.jsx)(t.td,{children:"The ID of the project"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"header"}),(0,n.jsx)(t.td,{children:"X-MSTR-MS-Changeset"}),(0,n.jsx)(t.td,{children:"The ID of the changeset"})]})]})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"In addition to the above header, you should also provide the ID of the prompt you want to update."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["You can modify the fields shown below. The ",(0,n.jsx)(t.code,{children:'"subType"'})," field is not included below since it cannot be modified through this REST API."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Fields"}),(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Data Type"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"information"}),(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"The name of the prompt. This should be a user-friendly name for identifying the prompt."}),(0,n.jsx)(t.td,{children:"string"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"information"}),(0,n.jsx)(t.td,{children:"destinationFolderId"}),(0,n.jsx)(t.td,{children:"The folder ID where the new prompt is saved."}),(0,n.jsx)(t.td,{children:"string"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"expressionType"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:'Differentiates between the three expression types for an expression prompt. This field is required when the "subType" in "information" is "prompt_expression". This field should be "metric" for metric expression prompts.'}),(0,n.jsx)(t.td,{children:"string"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"title"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"The title of the prompt."}),(0,n.jsx)(t.td,{children:"string"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"instruction"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"The instruction on how to apply the prompt."}),(0,n.jsx)(t.td,{children:"string"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"question"}),(0,n.jsx)(t.td,{children:"predefinedObjects"}),(0,n.jsx)(t.td,{children:'A list of predefined metrics with "objectId", "subType", and "name".'}),(0,n.jsx)(t.td,{children:"string"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"question"}),(0,n.jsx)(t.td,{children:"search"}),(0,n.jsx)(t.td,{children:'A standalone search object with "objectId", "subType", and "name". "search" and "predefinedObjects" should have an XOR relationship, since only one of them has a value.'}),(0,n.jsx)(t.td,{children:"string"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"defaultAnswer"}),(0,n.jsx)(t.td,{children:"qualification"}),(0,n.jsx)(t.td,{children:'A qualification set used to define the default answer. It follows the "tree" format of the qualification in the filter request.'}),(0,n.jsx)(t.td,{children:"string"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"restriction"}),(0,n.jsx)(t.td,{children:"required"}),(0,n.jsx)(t.td,{children:"An indicator that specifies whether a prompt answer is required or not."}),(0,n.jsx)(t.td,{children:"boolean"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"restriction"}),(0,n.jsx)(t.td,{children:"maxElementPerSelection"}),(0,n.jsx)(t.td,{children:"The maximum number of elements per selection"}),(0,n.jsx)(t.td,{children:"integer"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"restriction"}),(0,n.jsx)(t.td,{children:"allowPersonalAnswers"}),(0,n.jsx)(t.td,{children:'An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple".'}),(0,n.jsx)(t.td,{children:"string"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"restriction"}),(0,n.jsx)(t.td,{children:"min"}),(0,n.jsx)(t.td,{children:"The minimum number of qualifications that can be added."}),(0,n.jsx)(t.td,{children:"integer"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"restriction"}),(0,n.jsx)(t.td,{children:"max"}),(0,n.jsx)(t.td,{children:"The maximum number of qualifications that can be added."}),(0,n.jsx)(t.td,{children:"integer"})]})]})]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>o});var n=r(96540);const s={},i=n.createContext(s);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);