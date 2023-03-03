"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[202],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=m(n),c=r,g=u["".concat(p,".").concat(c)]||u[c]||d[c]||l;return n?a.createElement(g,i(i({ref:e},s),{},{components:n})):a.createElement(g,i({ref:e},s))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},27644:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return d}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],o={title:"Metric expression prompts",description:'A metric expression element prompt is one of the most commonly used prompt types. It allows the caller to provide an expression to filter the data in a report or dossier. For example, you define a prompt as "Get data when Avg Revenue per Customer is greater than 10".'},p=void 0,m={unversionedId:"common-workflows/modeling/manage-prompt-objects/prompt-types/metric-expression-prompts",id:"common-workflows/modeling/manage-prompt-objects/prompt-types/metric-expression-prompts",title:"Metric expression prompts",description:'A metric expression element prompt is one of the most commonly used prompt types. It allows the caller to provide an expression to filter the data in a report or dossier. For example, you define a prompt as "Get data when Avg Revenue per Customer is greater than 10".',source:"@site/docs/common-workflows/modeling/manage-prompt-objects/prompt-types/metric-expression-prompts.md",sourceDirName:"common-workflows/modeling/manage-prompt-objects/prompt-types",slug:"/common-workflows/modeling/manage-prompt-objects/prompt-types/metric-expression-prompts",permalink:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/prompt-types/metric-expression-prompts",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-prompt-objects/prompt-types/metric-expression-prompts.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1677861063,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{title:"Metric expression prompts",description:'A metric expression element prompt is one of the most commonly used prompt types. It allows the caller to provide an expression to filter the data in a report or dossier. For example, you define a prompt as "Get data when Avg Revenue per Customer is greater than 10".'},sidebar:"tutorialSidebar",previous:{title:"Hierarchy qualification prompts",permalink:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/prompt-types/hierarchy-qualification-prompts"},next:{title:"Object prompts",permalink:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/prompt-types/object-prompts"}},s={},d=[{value:"Create a new prompt",id:"create-a-new-prompt",level:2},{value:"Update an existing prompt",id:"update-an-existing-prompt",level:2}],u={toc:d};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,l.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-bca657c1-687a-4ba4-9050-3b45b4a5ce39?ctx=documentation"},"REST API Playground"),"."),(0,l.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,l.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,l.kt)("p",null,"A metric expression element prompt is one of the most commonly used prompt types. It allows the caller to provide an expression to filter the data in a report or dossier. For example, you define a prompt as ",(0,l.kt)("inlineCode",{parentName:"p"},'"Get data when Avg Revenue per Customer is greater than 10"'),"."),(0,l.kt)("p",null,"Use REST APIs to perform the following actions on metric expression prompts:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/retrieve-a-prompts-definition"},"Retrieve a prompt's definition")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#create-a-new-prompt"},"Create a new prompt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#update-an-existing-prompt"},"Update an existing prompt"))),(0,l.kt)("h2",{id:"create-a-new-prompt"},"Create a new prompt"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"To create a metric expression prompt, you must enter the required fields with the correct information, using ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-postPrompt"},"POST /api/model/prompts"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The response can change based on the request parameters provided by the caller. Use the following parameters."),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Location"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"X-MSTR-authToken"),(0,l.kt)("td",{parentName:"tr",align:null},"The authorization token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"X-MSTR-ProjectID"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the project")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"X-MSTR-MS-Changeset"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the changeset")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"showExpressionAs"),(0,l.kt)("td",{parentName:"tr",align:null},"The parameter that specifies the format in which the response is returned."))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'The model for the definition of a metric expression prompt can be represented using the fields below. "objectID", "dateCreated", "dateModified", and "versionId" are automatically generated.'),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Fields"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"information"),(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the prompt. This should be a user-friendly name for identifying the prompt."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"information"),(0,l.kt)("td",{parentName:"tr",align:null},"subType"),(0,l.kt)("td",{parentName:"tr",align:null},'The type of prompt. The "subType" for a metric expression prompt is "prompt_expression".'),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"information"),(0,l.kt)("td",{parentName:"tr",align:null},"destinationFolderId"),(0,l.kt)("td",{parentName:"tr",align:null},"The folder ID where the new prompt is saved."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expressionType"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'Differentiates between the three expression types for an expression prompt. This field is required when the "subType" in "information" is "prompt_expression". This field should be "metric" for metric expression prompts.'),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The title of the prompt."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"instruction"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The instruction on how to apply the prompt."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"question"),(0,l.kt)("td",{parentName:"tr",align:null},"predefinedObjects"),(0,l.kt)("td",{parentName:"tr",align:null},'A list of predefined metrics with "objectId", "subType", and "name".'),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"question"),(0,l.kt)("td",{parentName:"tr",align:null},"search"),(0,l.kt)("td",{parentName:"tr",align:null},'A standalone search object with "objectId", "subType", and "name". "search" and "predefinedObjects" should have an XOR relationship, since only one of them has a value.'),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultAnswer"),(0,l.kt)("td",{parentName:"tr",align:null},"qualification"),(0,l.kt)("td",{parentName:"tr",align:null},'A qualification set used to define the default answer. It follows the "tree" format of the qualification in the filter request.'),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"An indicator that specifies whether a prompt answer is required or not."),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"maxElementPerSelection"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum number of elements per selection"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"allowPersonalAnswers"),(0,l.kt)("td",{parentName:"tr",align:null},'An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple".'),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"min"),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum number of qualifications that can be added."),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"max"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum number of qualifications that can be added."),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",{parentName:"li"},"Sample code for creating a metric expression prompt's definition is provided below."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n    "subType": "prompt_expression",\n    "name": "Metric Prompt with Custom Expression"\n  },\n  "title": "Metric qualification",\n  "instruction": "Choose a metric to begin building a qualification.",\n  "expressionType": "metric",\n  "question": {\n    "predefinedObjects": [\n      {\n        "objectId": "7FD5B69611D5AC76C000D98A4CC5F24F",\n        "subType": "metric",\n        "name": "Cost"\n      },\n      {\n        "objectId": "381980B211D40BC8C000C8906B98494F",\n        "subType": "metric",\n        "name": "Discount"\n      }\n    ]\n  },\n  "defaultAnswer": {\n    "qualification": {\n      "text": "Cost = Discount + 4",\n      "tree": {\n        "type": "predicate_metric_qualification",\n        "predicateId": "8126CF7F22C847AE8A112F3ABA5A27DA",\n        "predicateText": "Cost = Discount + 4",\n        "predicateTree": {\n          "function": "equals",\n          "parameters": [\n            {\n              "parameterType": "expression",\n              "expression": {\n                "text": "Discount + 4"\n              }\n            }\n          ],\n          "levelType": "none",\n          "metric": {\n            "objectId": "7FD5B69611D5AC76C000D98A4CC5F24F",\n            "subType": "metric",\n            "name": "Cost"\n          },\n          "metricFunction": "value",\n          "isIndependent": 0,\n          "nullInclude": 0\n        }\n      }\n    }\n  },\n  "restriction": {\n    "required": false,\n    "allowPersonalAnswers": "none",\n    "min": 3,\n    "max": 10\n  }\n}\n')))),(0,l.kt)("h2",{id:"update-an-existing-prompt"},"Update an existing prompt"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Update the definition of a metric expression prompt using ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-putPrompt"},"PUT /api/model/prompts/{promptId}"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Provide the following headers in the request:"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Location"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"X-MSTR-authToken"),(0,l.kt)("td",{parentName:"tr",align:null},"The authorization token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"X-MSTR-ProjectID"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the project")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"X-MSTR-MS-Changeset"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the changeset"))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In addition to the above header, you should also provide the ID of the prompt you want to update.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"You can modify the fields shown below. The ",(0,l.kt)("inlineCode",{parentName:"p"},'"subType"')," field is not included below since it cannot be modified through this REST API."),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Fields"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"information"),(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the prompt. This should be a user-friendly name for identifying the prompt."),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"information"),(0,l.kt)("td",{parentName:"tr",align:null},"destinationFolderId"),(0,l.kt)("td",{parentName:"tr",align:null},"The folder ID where the new prompt is saved."),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expressionType"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'Differentiates between the three expression types for an expression prompt. This field is required when the "subType" in "information" is "prompt_expression". This field should be "metric" for metric expression prompts.'),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The title of the prompt."),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"instruction"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The instruction on how to apply the prompt."),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"question"),(0,l.kt)("td",{parentName:"tr",align:null},"predefinedObjects"),(0,l.kt)("td",{parentName:"tr",align:null},'A list of predefined metrics with "objectId", "subType", and "name".'),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"question"),(0,l.kt)("td",{parentName:"tr",align:null},"search"),(0,l.kt)("td",{parentName:"tr",align:null},'A standalone search object with "objectId", "subType", and "name". "search" and "predefinedObjects" should have an XOR relationship, since only one of them has a value.'),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultAnswer"),(0,l.kt)("td",{parentName:"tr",align:null},"qualification"),(0,l.kt)("td",{parentName:"tr",align:null},'A qualification set used to define the default answer. It follows the "tree" format of the qualification in the filter request.'),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"An indicator that specifies whether a prompt answer is required or not."),(0,l.kt)("td",{parentName:"tr",align:null},"boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"maxElementPerSelection"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum number of elements per selection"),(0,l.kt)("td",{parentName:"tr",align:null},"integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"allowPersonalAnswers"),(0,l.kt)("td",{parentName:"tr",align:null},'An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple".'),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"min"),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum number of qualifications that can be added."),(0,l.kt)("td",{parentName:"tr",align:null},"integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"max"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum number of qualifications that can be added."),(0,l.kt)("td",{parentName:"tr",align:null},"integer")))))))}c.isMDXComponent=!0}}]);