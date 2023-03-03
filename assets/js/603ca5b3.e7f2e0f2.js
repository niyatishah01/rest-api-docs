"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3291],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=m(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||s[c]||l;return n?a.createElement(k,o(o({ref:e},d),{},{components:n})):a.createElement(k,o({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23037:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return s}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),o=["components"],i={title:"Object prompts",description:"An object prompt allows the caller to supply a list of objects, such as attributes, metrics, hierarchies, and so on from which a selection is made. Folder objects cannot be used in object prompts."},p=void 0,m={unversionedId:"common-workflows/modeling/manage-prompt-objects/prompt-types/object-prompts",id:"common-workflows/modeling/manage-prompt-objects/prompt-types/object-prompts",title:"Object prompts",description:"An object prompt allows the caller to supply a list of objects, such as attributes, metrics, hierarchies, and so on from which a selection is made. Folder objects cannot be used in object prompts.",source:"@site/docs/common-workflows/modeling/manage-prompt-objects/prompt-types/object-prompts.md",sourceDirName:"common-workflows/modeling/manage-prompt-objects/prompt-types",slug:"/common-workflows/modeling/manage-prompt-objects/prompt-types/object-prompts",permalink:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/prompt-types/object-prompts",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-prompt-objects/prompt-types/object-prompts.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1677861063,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{title:"Object prompts",description:"An object prompt allows the caller to supply a list of objects, such as attributes, metrics, hierarchies, and so on from which a selection is made. Folder objects cannot be used in object prompts."},sidebar:"tutorialSidebar",previous:{title:"Metric expression prompts",permalink:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/prompt-types/metric-expression-prompts"},next:{title:"Value prompts",permalink:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/prompt-types/value-prompts"}},d={},s=[{value:"Create a new prompt",id:"create-a-new-prompt",level:2},{value:"Update an existing prompt",id:"update-an-existing-prompt",level:2}],u={toc:s};function c(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,l.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-10f21f1c-3d27-4459-80ba-729a44b945a7?ctx=documentation"},"REST API Playground"),"."),(0,l.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,l.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,l.kt)("p",null,"An object prompt allows the caller to supply a list of objects, such as attributes, metrics, hierarchies, and so on from which a selection is made. Folder objects cannot be used in object prompts."),(0,l.kt)("p",null,"Use REST APIs to perform the following actions on object prompts:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/retrieve-a-prompts-definition"},"Retrieve a prompt's definition")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#create-a-new-prompt"},"Create a new prompt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#update-an-existing-prompt"},"Update an existing prompt"))),(0,l.kt)("h2",{id:"create-a-new-prompt"},"Create a new prompt"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"To create an object prompt, you must enter the required fields with the correct information, using ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-postPrompt"},"POST /api/model/prompts"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The response can change based on the request parameters provided by the caller. Use the following parameters."),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Location"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"X-MSTR-authToken"),(0,l.kt)("td",{parentName:"tr",align:null},"The authorization token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"X-MSTR-ProjectID"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the project")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"X-MSTR-MS-Changeset"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the changeset")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"showExpressionAs"),(0,l.kt)("td",{parentName:"tr",align:null},"The parameter that specifies the format in which the response is returned."))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'The model for the definition of an object prompt can be represented using the fields shown below. "objectID", "dateCreated", "dateModified", and "versionId" are automatically generated.'),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Fields"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"information"),(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the prompt. This should be a user-friendly name for identifying the prompt."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"information"),(0,l.kt)("td",{parentName:"tr",align:null},"subType"),(0,l.kt)("td",{parentName:"tr",align:null},'The type of prompt. The "subType" for an object prompt is "prompt_objects".'),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"information"),(0,l.kt)("td",{parentName:"tr",align:null},"destinationFolderId"),(0,l.kt)("td",{parentName:"tr",align:null},"The folder ID where the new prompt is saved."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The title of the prompt."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"instruction"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The instruction on how to apply the prompt."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"question"),(0,l.kt)("td",{parentName:"tr",align:null},"predefinedObjects"),(0,l.kt)("td",{parentName:"tr",align:null},'A list of predefined metrics with "objectId", "subType", and "name".'),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"question"),(0,l.kt)("td",{parentName:"tr",align:null},"search"),(0,l.kt)("td",{parentName:"tr",align:null},'A standalone search object with "objectId", "subType", and "name". "search" and "predefinedObjects" should have an XOR relationship, since only one of them has a value.'),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultAnswer"),(0,l.kt)("td",{parentName:"tr",align:null},"objects"),(0,l.kt)("td",{parentName:"tr",align:null},'A list of objects used to define the default answer. Each object should include "objectId", "subType", and "name".'),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"An indicator that specifies whether a prompt answer is required or not."),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"allowPersonalAnswers"),(0,l.kt)("td",{parentName:"tr",align:null},'An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple".'),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"min"),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum number of objects that can be selected."),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"max"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum number of objects that can be selected."),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",{parentName:"li"},'Sample code for creating an object prompt\'s definition is provided below. "objectID", "dateCreated", "dateModified", and "versionId" are automatically generated.'),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n    "subType": "prompt_objects",\n    "name": "Search all"\n  },\n  "title": "Objects",\n  "instruction": "Choose objects from the list.",\n  "question": {\n    "search": {\n      "objectId": "4E583DB34D3BE82E7356E0966962CEF0",\n      "subType": "search",\n      "name": "Search for all objects"\n    }\n  },\n  "restriction": {\n    "required": false,\n    "allowPersonalAnswers": "none",\n    "min": 2\n  }\n}\n')))),(0,l.kt)("h2",{id:"update-an-existing-prompt"},"Update an existing prompt"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Update the definition of an object prompt using ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-putPrompt"},"PUT /api/model/prompts/{promptId}"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Provide the following headers in the request:"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Location"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"X-MSTR-authToken"),(0,l.kt)("td",{parentName:"tr",align:null},"The authorization token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"X-MSTR-ProjectID"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the project")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"X-MSTR-MS-Changeset"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the changeset"))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In addition to the above header, you should also provide the ID of the prompt you want to update.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"You can modify the fields shown below. The ",(0,l.kt)("inlineCode",{parentName:"p"},'"subType"')," field is not included below since it cannot be modified through this REST API."),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Fields"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"information"),(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the prompt. This should be a user-friendly name for identifying the prompt."),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"information"),(0,l.kt)("td",{parentName:"tr",align:null},"destinationFolderId"),(0,l.kt)("td",{parentName:"tr",align:null},"The folder ID where the new prompt is saved."),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The title of the prompt."),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"instruction"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The instruction on how to apply the prompt."),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"question"),(0,l.kt)("td",{parentName:"tr",align:null},"predefinedObjects"),(0,l.kt)("td",{parentName:"tr",align:null},'A list of predefined metrics with "objectId", "subType", and "name".'),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"question"),(0,l.kt)("td",{parentName:"tr",align:null},"search"),(0,l.kt)("td",{parentName:"tr",align:null},'A standalone search object with "objectId", "subType", and "name". "search" and "predefinedObjects" should have an XOR relationship, since only one of them has a value.'),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultAnswer"),(0,l.kt)("td",{parentName:"tr",align:null},"objects"),(0,l.kt)("td",{parentName:"tr",align:null},'A list of objects used to define the default answer. Each object should include "objectId", "subType", and "name".'),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"An indicator that specifies whether a prompt answer is required or not."),(0,l.kt)("td",{parentName:"tr",align:null},"boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"allowPersonalAnswers"),(0,l.kt)("td",{parentName:"tr",align:null},'An indicator that specifies whether personal answers are allowed. It can be set to "none", "single", or "multiple".'),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"min"),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum number of objects that can be selected."),(0,l.kt)("td",{parentName:"tr",align:null},"integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"max"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum number of objects that can be selected."),(0,l.kt)("td",{parentName:"tr",align:null},"integer")))))))}c.isMDXComponent=!0}}]);