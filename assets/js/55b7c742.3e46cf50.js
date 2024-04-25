"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[776],{91486:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var r=i(74848),n=i(28453);const s={title:"Attribute qualification prompts",description:"An attribute qualification prompt is a restrictive type prompt that allows you to filter the data of a report or document based on the qualification of multiple attributes. For example, you determine a single attribute or a list of attributes from which each user can select elements to define their report filter."},d=void 0,o={id:"common-workflows/modeling/manage-prompt-objects/prompt-types/attribute-qualification-prompts",title:"Attribute qualification prompts",description:"An attribute qualification prompt is a restrictive type prompt that allows you to filter the data of a report or document based on the qualification of multiple attributes. For example, you determine a single attribute or a list of attributes from which each user can select elements to define their report filter.",source:"@site/docs/common-workflows/modeling/manage-prompt-objects/prompt-types/attribute-qualification-prompts.md",sourceDirName:"common-workflows/modeling/manage-prompt-objects/prompt-types",slug:"/common-workflows/modeling/manage-prompt-objects/prompt-types/attribute-qualification-prompts",permalink:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/prompt-types/attribute-qualification-prompts",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-prompt-objects/prompt-types/attribute-qualification-prompts.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1714063612,formattedLastUpdatedAt:"Apr 25, 2024",frontMatter:{title:"Attribute qualification prompts",description:"An attribute qualification prompt is a restrictive type prompt that allows you to filter the data of a report or document based on the qualification of multiple attributes. For example, you determine a single attribute or a list of attributes from which each user can select elements to define their report filter."},sidebar:"tutorialSidebar",previous:{title:"Attribute element prompts",permalink:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/prompt-types/attribute-element-prompts"},next:{title:"Hierarchy qualification prompts",permalink:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/prompt-types/hierarchy-qualification-prompts"}},l={},a=[{value:"Create a new prompt",id:"create-a-new-prompt",level:2},{value:"Update an existing prompt",id:"update-an-existing-prompt",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsxs)(t.p,{children:["You can try out this workflow at ",(0,r.jsx)(t.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-ac7cde77-bb20-4c51-86e3-a457f5b8f43f?ctx=documentation",children:"REST API Playground"}),"."]}),(0,r.jsxs)(t.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,r.jsx)(t.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,r.jsx)(t.p,{children:"An attribute qualification prompt is a restrictive type prompt that allows you to filter the data of a report or document based on the qualification of multiple attributes. For example, you determine a single attribute or a list of attributes from which each user can select elements to define their report filter."}),"\n",(0,r.jsx)(t.p,{children:"Use REST APIs to perform the following actions on attribute qualification prompts:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/retrieve-a-prompts-definition",children:"Retrieve a prompt's definition"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#create-a-new-prompt",children:"Create a new prompt"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#update-an-existing-prompt",children:"Update an existing prompt"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"create-a-new-prompt",children:"Create a new prompt"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["To create an attribute qualification prompt, you must enter the required fields with the correct information, using ",(0,r.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-postPrompt",children:"POST /api/model/prompts"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"The response can change based on the request parameters provided by the caller. Use the following parameters."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Location"}),(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"header"}),(0,r.jsx)(t.td,{children:"X-MSTR-authToken"}),(0,r.jsx)(t.td,{children:"The authorization token"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"header"}),(0,r.jsx)(t.td,{children:"X-MSTR-ProjectID"}),(0,r.jsx)(t.td,{children:"The ID of the project"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"header"}),(0,r.jsx)(t.td,{children:"X-MSTR-MS-Changeset"}),(0,r.jsx)(t.td,{children:"The ID of the changeset"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"query"}),(0,r.jsx)(t.td,{children:"showExpressionAs"}),(0,r.jsx)(t.td,{children:"The parameter that specifies the format in which the response is returned."})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:'The model for the definition of an attribute qualification prompt can be represented using the fields shown below. "objectID", "dateCreated", "dateModified", and "versionId" are automatically generated.'}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Fields"}),(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Data Type"}),(0,r.jsx)(t.th,{children:"Required?"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"information"}),(0,r.jsx)(t.td,{children:"name"}),(0,r.jsx)(t.td,{children:"The name of the prompt. This should be a user-friendly name for identifying the prompt."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"\u2714\ufe0f"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"information"}),(0,r.jsx)(t.td,{children:"subType"}),(0,r.jsx)(t.td,{children:'The type of prompt. The "subType" for an attribute qualification prompt is "prompt_expression".'}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"\u2714\ufe0f"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"information"}),(0,r.jsx)(t.td,{children:"destinationFolderId"}),(0,r.jsx)(t.td,{children:"The folder ID where the new prompt is saved."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"\u2714\ufe0f"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"expressionType"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:'Differentiates between the three expression types for an expression prompt. This field is required when the "subType" in "information" is "prompt_expression". This field should be "attribute" for attribute qualification prompts.'}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"\u2714\ufe0f"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"title"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"The title of the prompt."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"instruction"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"The instruction on how to apply the prompt."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"question"}),(0,r.jsx)(t.td,{children:"displayform"}),(0,r.jsx)(t.td,{children:"The displayed forms for the attribute."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"question"}),(0,r.jsx)(t.td,{children:"customForms"}),(0,r.jsx)(t.td,{children:"Custom forms are only available for attribute qualification prompts defined on one attribute."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"question"}),(0,r.jsx)(t.td,{children:"predefinedObjects"}),(0,r.jsx)(t.td,{children:'A list of predefined attributes with "objectId", "subType", and "name".'}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"question"}),(0,r.jsx)(t.td,{children:"search"}),(0,r.jsx)(t.td,{children:'A standalone search object with "objectId", "subType", and "name". When "listAllElements" is False, "search" and "predefinedObjects" should have an XOR relationship, since only one of them has a value.'}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"defaultAnswer"}),(0,r.jsx)(t.td,{children:"qualification"}),(0,r.jsx)(t.td,{children:'A qualification set used to define the default answer. It follows the "tree" format of the qualification in the filter request.'}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"restriction"}),(0,r.jsx)(t.td,{children:"required"}),(0,r.jsx)(t.td,{children:"An indicator that specifies whether a prompt answer is required or not."}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"restriction"}),(0,r.jsx)(t.td,{children:"maxElementPerSelection"}),(0,r.jsx)(t.td,{children:"The maximum number of elements per selection"}),(0,r.jsx)(t.td,{children:"integer"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"restriction"}),(0,r.jsx)(t.td,{children:"allowPersonalAnswers"}),(0,r.jsx)(t.td,{children:'An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple".'}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"restriction"}),(0,r.jsx)(t.td,{children:"min"}),(0,r.jsx)(t.td,{children:"The minimum number of qualifications that can be added."}),(0,r.jsx)(t.td,{children:"integer"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"restriction"}),(0,r.jsx)(t.td,{children:"max"}),(0,r.jsx)(t.td,{children:"The maximum number of qualifications that can be added."}),(0,r.jsx)(t.td,{children:"integer"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Sample code for creating an attribute qualification prompt's definition is provided below."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n    "subType": "prompt_expression",\n    "name": "Prompt on Customer"\n  },\n  "title": "Prompt on Customer",\n  "instruction": "Qualify on Customer",\n  "expressionType": "attribute",\n  "question": {\n    "predefinedObjects": [\n      {\n        "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Customer"\n      }\n    ],\n    "displayForms": "custom_forms",\n    "customForms": [\n      {\n        "objectId": "8D67A35B11D3E4981000E787EC6DE8A4",\n        "subType": "attribute_form_system",\n        "name": "Customer DESC 1"\n      },\n      {\n        "objectId": "8D67A35F11D3E4981000E787EC6DE8A4",\n        "subType": "attribute_form_system",\n        "name": "Customer DESC 2"\n      }\n    ]\n  },\n  "restriction": {\n    "required": false,\n    "allowPersonalAnswers": "single",\n    "min": 1,\n    "max": 5\n  }\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"update-an-existing-prompt",children:"Update an existing prompt"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Update the definition of the attribute qualification prompt using ",(0,r.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-putPrompt",children:"PUT /api/model/prompts/{promptId}"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Provide the following headers in the request:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Location"}),(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"header"}),(0,r.jsx)(t.td,{children:"X-MSTR-authToken"}),(0,r.jsx)(t.td,{children:"The authorization token"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"header"}),(0,r.jsx)(t.td,{children:"X-MSTR-ProjectID"}),(0,r.jsx)(t.td,{children:"The ID of the project"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"header"}),(0,r.jsx)(t.td,{children:"X-MSTR-MS-Changeset"}),(0,r.jsx)(t.td,{children:"The ID of the changeset"})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"In addition to the above header, you should also provide the ID of the prompt you want to update."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["You can modify the fields shown below. The ",(0,r.jsx)(t.code,{children:'"subType"'})," field is not included since it cannot be modified through this REST API."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Fields"}),(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Data Type"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"information"}),(0,r.jsx)(t.td,{children:"name"}),(0,r.jsx)(t.td,{children:"The name of the prompt. This should be a user-friendly name for identifying the prompt."}),(0,r.jsx)(t.td,{children:"string"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"information"}),(0,r.jsx)(t.td,{children:"destinationFolderId"}),(0,r.jsx)(t.td,{children:"The folder ID where the new prompt is saved."}),(0,r.jsx)(t.td,{children:"string"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"expressionType"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:'Differentiates between the three expression types for an expression prompt. This field is required when the "subType" in "information" is "prompt_expression". This field should be "attribute" for attribute qualification prompts.'}),(0,r.jsx)(t.td,{children:"string"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"title"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"The title of the prompt."}),(0,r.jsx)(t.td,{children:"string"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"instruction"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"The instruction on how to apply the prompt."}),(0,r.jsx)(t.td,{children:"string"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"question"}),(0,r.jsx)(t.td,{children:"displayform"}),(0,r.jsx)(t.td,{children:"The displayed forms for the attribute."}),(0,r.jsx)(t.td,{children:"string"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"question"}),(0,r.jsx)(t.td,{children:"customForms"}),(0,r.jsx)(t.td,{children:"Custom forms are only available for attribute qualification prompts defined on one attribute."}),(0,r.jsx)(t.td,{children:"string"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"question"}),(0,r.jsx)(t.td,{children:"predefinedObjects"}),(0,r.jsx)(t.td,{children:'A list of predefined attributes with "objectId", "subType", and "name".'}),(0,r.jsx)(t.td,{children:"string"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"question"}),(0,r.jsx)(t.td,{children:"search"}),(0,r.jsx)(t.td,{children:'A standalone search object with "objectId", "subType", and "name". When "listAllElements" is False, "search" and "predefinedObjects" should have an XOR relationship, since only one of them has a value.'}),(0,r.jsx)(t.td,{children:"string"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"defaultAnswer"}),(0,r.jsx)(t.td,{children:"qualification"}),(0,r.jsx)(t.td,{children:'A qualification set used to define the default answer. It follows the "tree" format of the qualification in the filter request.'}),(0,r.jsx)(t.td,{children:"string"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"restriction"}),(0,r.jsx)(t.td,{children:"required"}),(0,r.jsx)(t.td,{children:"An indicator that specifies whether a prompt answer is required or not."}),(0,r.jsx)(t.td,{children:"Boolean"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"restriction"}),(0,r.jsx)(t.td,{children:"maxElementPerSelection"}),(0,r.jsx)(t.td,{children:"The maximum number of elements per selection"}),(0,r.jsx)(t.td,{children:"integer"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"restriction"}),(0,r.jsx)(t.td,{children:"allowPersonalAnswers"}),(0,r.jsx)(t.td,{children:'An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple".'}),(0,r.jsx)(t.td,{children:"string"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"restriction"}),(0,r.jsx)(t.td,{children:"min"}),(0,r.jsx)(t.td,{children:"The minimum number of qualifications that can be added."}),(0,r.jsx)(t.td,{children:"integer"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"restriction"}),(0,r.jsx)(t.td,{children:"max"}),(0,r.jsx)(t.td,{children:"The maximum number of qualifications that can be added."}),(0,r.jsx)(t.td,{children:"integer"})]})]})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>d,x:()=>o});var r=i(96540);const n={},s=r.createContext(n);function d(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);