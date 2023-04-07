"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3129],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=l(n),u=o,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||r;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},69773:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return d}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),i=["components"],p={title:"Update a prompt's definition within a changeset",sidebar_label:"Update a prompt's definition within a changeset",description:"This workflow demonstrates how to update a prompt's definition through the Modeling service."},s=void 0,l={unversionedId:"common-workflows/modeling/manage-prompt-objects/update-a-prompts-definition-within-a-changeset",id:"common-workflows/modeling/manage-prompt-objects/update-a-prompts-definition-within-a-changeset",title:"Update a prompt's definition within a changeset",description:"This workflow demonstrates how to update a prompt's definition through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-prompt-objects/update-a-prompts-definition-within-a-changeset.md",sourceDirName:"common-workflows/modeling/manage-prompt-objects",slug:"/common-workflows/modeling/manage-prompt-objects/update-a-prompts-definition-within-a-changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/update-a-prompts-definition-within-a-changeset",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-prompt-objects/update-a-prompts-definition-within-a-changeset.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1680880277,formattedLastUpdatedAt:"Apr 7, 2023",frontMatter:{title:"Update a prompt's definition within a changeset",sidebar_label:"Update a prompt's definition within a changeset",description:"This workflow demonstrates how to update a prompt's definition through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a prompt within a changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/create-a-prompt-within-a-changeset"},next:{title:"Prompt types for managing prompt objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/prompt-types/"}},m={},d=[{value:"Update the prompt&#39;s definition",id:"update-the-prompts-definition",level:2}],c={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-3952eb54-479d-4930-aac5-64cf1c1dfdaf?ctx=documentation"},"REST API Playground"),"."),(0,r.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,r.kt)("p",null,"This workflow demonstrates how to update a prompt's definition through the Modeling service."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a changeset."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#update-the-prompts-definition-using-put-apimodelpromptspromptid"},"Update a prompt's definition.")),(0,r.kt)("li",{parentName:"ol"},"Commit a changeset."),(0,r.kt)("li",{parentName:"ol"},"Delete a changeset.")),(0,r.kt)("p",null,"You want to update the definition of the ",(0,r.kt)("inlineCode",{parentName:"p"},'"Call Center in USA"')," prompt with the following changes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Change the filter to ",(0,r.kt)("inlineCode",{parentName:"li"},'"Call Center in France"')," with an ID of ",(0,r.kt)("inlineCode",{parentName:"li"},"84BEEA764540690980D5E388755B39B2"),"."),(0,r.kt)("li",{parentName:"ul"},"Move the filter to another Objects folder with an ID of ",(0,r.kt)("inlineCode",{parentName:"li"},"8A1831FF494F528D02A4A8BF5FB73459"),"."),(0,r.kt)("li",{parentName:"ul"},"Rename the prompt to ",(0,r.kt)("inlineCode",{parentName:"li"},'"Call Center in France"'),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client."),(0,r.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,r.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),"."),(0,r.kt)("p",{parentName:"admonition"},"Obtain the prompt ID from ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-getPromptDetails"},"GET /api/model/prompts/{promptId}"),".")),(0,r.kt)("h2",{id:"update-the-prompts-definition"},"Update the prompt's definition"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts/ms-putPrompt"},"PUT /api/model/prompts/{promptId}"),"."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "b4e54r86h5aja3inksrklee4d7"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n"X-MSTR-MS-Changeset": "4E830DF576A24E4B9120455EE576EB51"\n"Content-Type": "application/json"\n')),(0,r.kt)("p",null,"Sample Request Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n    "subType": "prompt_elements",\n    "name": "Call Center in France"\n  },\n  "title": "Call Center In France",\n  "instruction": "Choose elements of Call Center.",\n  "question": {\n    "attribute": {\n      "objectId": "8D679D3511D3E4981000E787EC6DE8A4",\n      "subType": "attribute",\n      "name": "Call Center"\n    },\n    "listAllElements": false,\n    "filter": {\n      "objectId": "84BEEA764540690980D5E388755B39B2",\n      "subType": "filter",\n      "name": "Country In France"\n    }\n  },\n  "defaultAnswer": {\n    "elements": [\n      {\n        "display": "Atlanta",\n        "elementId": "h1"\n      },\n      {\n        "display": "Washington, DC",\n        "elementId": "h5"\n      },\n      {\n        "display": "Salt Lake City",\n        "elementId": "h6"\n      }\n    ]\n  },\n  "restriction": {\n    "required": false,\n    "allowPersonalAnswers": "none",\n    "min": 2,\n    "max": 5\n  }\n}\n')),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "http://10.23.7.118:8080/MicroStrategyLibrary/api/model/prompts/2804B5284AFF95E8E0EEB4AC09B5B972" -H "accept: application/json" -H "X-MSTR-AuthToken: b4e54r86h5aja3inksrklee4d7" -H "X-MSTR-MS-Changeset: 4E830DF576A24E4B9120455EE576EB51" -H "Content-Type: application/json" -d \'{"information":{"destinationFolderId":"8A1831FF494F528D02A4A8BF5FB73459","subType":"prompt_elements","name":"Call Center in France"},"title":"Call Center In France","instruction":"Choose elements of Call Center.","question":{"attribute":{"objectId":"8D679D3511D3E4981000E787EC6DE8A4","subType":"attribute","name":"Call Center"},"listAllElements":false,"filter":{"objectId":"84BEEA764540690980D5E388755B39B2","subType":"filter","name":"Country In France"}},"defaultAnswer":{"elements":[{"display":"Atlanta","elementId":"h1"},{"display":"Washington, DC","elementId":"h5"},{"display":"Salt Lake City","elementId":"h6"}]},"restriction":{"required":false,"allowPersonalAnswers":"none","min":2,"max":5}}\'\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("p",null,"You can view the updated prompt's definition in the body of the response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2021-02-19T09:04:10.693Z",\n    "dateModified": "2021-02-19T09:05:09.833Z",\n    "versionId": "6AACDA444F24436837E717AC1AB54F58",\n    "primaryLocale": "en-US",\n    "objectId": "2804B5284AFF95E8E0EEB4AC09B5B972",\n    "subType": "prompt_elements",\n    "name": "Call Center in France",\n    "destinationFolderId": "32AF83EA450604021518A284126776E5"\n  },\n  "title": "Call Center In France",\n  "instruction": "Choose elements of Call Center.",\n  "question": {\n    "attribute": {\n      "objectId": "8D679D3511D3E4981000E787EC6DE8A4",\n      "subType": "attribute",\n      "name": "Call Center"\n    },\n    "listAllElements": false,\n    "filter": {\n      "objectId": "84BEEA764540690980D5E388755B39B2",\n      "subType": "filter",\n      "name": "USA in France"\n    }\n  },\n  "defaultAnswer": {\n    "elements": [\n      {\n        "display": "Atlanta",\n        "elementId": "h1"\n      },\n      {\n        "display": "Washington, DC",\n        "elementId": "h5"\n      },\n      {\n        "display": "Salt Lake City",\n        "elementId": "h6"\n      }\n    ]\n  },\n  "restriction": {\n    "required": false,\n    "allowPersonalAnswers": "none",\n    "min": 2,\n    "max": 5\n  }\n}\n')),(0,r.kt)("p",null,"Response Code: 200 (The prompt's definition is updated successfully in the changeset.)"))}u.isMDXComponent=!0}}]);