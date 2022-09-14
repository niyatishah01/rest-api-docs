"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[23],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2805:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],o={title:"Workflow Sample - Update a Base Formula's Definition within a Changeset",sidebar_label:"Update a Base Formula's Definition within a Changeset",description:"This workflow sample demonstrates how to update a base formula's definition through the Modeling service."},s=void 0,d={unversionedId:"common-workflows/manage-base-formula-objects/update-a-base-formulas-definition-within-a-changeset",id:"common-workflows/manage-base-formula-objects/update-a-base-formulas-definition-within-a-changeset",title:"Workflow Sample - Update a Base Formula's Definition within a Changeset",description:"This workflow sample demonstrates how to update a base formula's definition through the Modeling service.",source:"@site/docs/common-workflows/manage-base-formula-objects/update-a-base-formulas-definition-within-a-changeset.md",sourceDirName:"common-workflows/manage-base-formula-objects",slug:"/common-workflows/manage-base-formula-objects/update-a-base-formulas-definition-within-a-changeset",permalink:"/rest-api-docs/common-workflows/manage-base-formula-objects/update-a-base-formulas-definition-within-a-changeset",draft:!1,editUrl:"https://github.com/MicroStrategy/restapi-docs/tree/main/docs/common-workflows/manage-base-formula-objects/update-a-base-formulas-definition-within-a-changeset.md",tags:[],version:"current",lastUpdatedBy:"Liang, Jiapei",lastUpdatedAt:1663187922,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"Workflow Sample - Update a Base Formula's Definition within a Changeset",sidebar_label:"Update a Base Formula's Definition within a Changeset",description:"This workflow sample demonstrates how to update a base formula's definition through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a Base Formula's Definition within a Changeset",permalink:"/rest-api-docs/common-workflows/manage-base-formula-objects/create-a-base-formulas-definition-within-a-changeset"},next:{title:"Manage Subtotal Objects",permalink:"/rest-api-docs/common-workflows/manage-subtotal-objects/"}},u={},p=[{value:"1. Create a changeset using <code>POST /api/model/changesets</code>",id:"1-create-a-changeset-using-post-apimodelchangesets",level:2},{value:"2. Update the base formula&#39;s definition using <code>PUT /api/model/formulas/{formulaId}</code>",id:"2-update-the-base-formulas-definition-using-put-apimodelformulasformulaid",level:2},{value:"3. Commit a changeset using <code>POST /api/model/changesets/{ChangesetId}/commit</code>",id:"3-commit-a-changeset-using-post-apimodelchangesetschangesetidcommit",level:2},{value:"4. Delete a changeset using <code>DELETE /api/model/changesets/{ChangesetId}</code>",id:"4-delete-a-changeset-using-delete-apimodelchangesetschangesetid",level:2}],c={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-bfe3c7f0-372a-44ef-a687-0f694deda59b?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"This workflow sample demonstrates how to update a base formula's definition through the Modeling service."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.")),(0,i.kt)("p",null,"You want to update the definition of the ",(0,i.kt)("inlineCode",{parentName:"p"},'"base_sum(Cost)"')," base formula with object ID ",(0,i.kt)("inlineCode",{parentName:"p"},"1116B53103FC4A72BBACBAED388243D6")," to achieve the below changes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Modify the expression to ",(0,i.kt)("inlineCode",{parentName:"li"},"\u201csum(Profit)-sum(Cost)\u201c")),(0,i.kt)("li",{parentName:"ul"},"Move it to another objects folder with the ID of ",(0,i.kt)("inlineCode",{parentName:"li"},"8AF48B3D4685C1717B3BDA9804CD1036")),(0,i.kt)("li",{parentName:"ul"},"Rename the base formula to ",(0,i.kt)("inlineCode",{parentName:"li"},'"Revenue"'))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},(0,i.kt)("inlineCode",{parentName:"a"},"POST /api/auth/login")),"."),(0,i.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},(0,i.kt)("inlineCode",{parentName:"a"},"GET /api/projects")),".")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"A changeset is required for creating, and/or updating objects such as filters, facts, attributes, and so on through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether.")),(0,i.kt)("h2",{id:"1-create-a-changeset-using-post-apimodelchangesets"},"1. Create a changeset using ",(0,i.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset"},(0,i.kt)("inlineCode",{parentName:"a"},"POST /api/model/changesets"))),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "2A131744C91B4915B54A61FFDC528F62",\n  "dateCreated": "2021-06-15T03:04:56.613866Z",\n  "dateModified": "2021-06-15T03:04:56.613916Z",\n  "status": "Ready",\n  "schemaEdit": false,\n  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n  "mstrUserId": "4bb7n1dhjo860e7tlpchg57hl",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US",\n  "userName": "Administrator"\n}\n')),(0,i.kt)("p",null,"Sample Response Code: 200 (A new changeset is created successfully.)"),(0,i.kt)("h2",{id:"2-update-the-base-formulas-definition-using-put-apimodelformulasformulaid"},"2. Update the base formula's definition using ",(0,i.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Formulas/ms-putFormula"},(0,i.kt)("inlineCode",{parentName:"a"},"PUT /api/model/formulas/{formulaId}"))),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "b4e54r86h5aja3inksrklee4d7"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n"X-MSTR-MS-Changeset": "EB3A4F66E6A8413E9C36633533D0BA31"\n"Content-Type": "application/json"\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Location"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"header"),(0,i.kt)("td",{parentName:"tr",align:null},"X-MSTR-authToken"),(0,i.kt)("td",{parentName:"tr",align:null},"The authorization token")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"header"),(0,i.kt)("td",{parentName:"tr",align:null},"X-MSTR-ProjectID"),(0,i.kt)("td",{parentName:"tr",align:null},"The ID of the project")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"header"),(0,i.kt)("td",{parentName:"tr",align:null},"X-MSTR-MS-Changeset"),(0,i.kt)("td",{parentName:"tr",align:null},"The ID of the changeset")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"params"),(0,i.kt)("td",{parentName:"tr",align:null},"showExpressionAs"),(0,i.kt)("td",{parentName:"tr",align:null},"Omitted, tree, or tokens:",(0,i.kt)("br",null),"- If omitted, the expression is returned in only \u201ctext\u201c formats.",(0,i.kt)("br",null),"- If ",(0,i.kt)("inlineCode",{parentName:"td"},"tree"),', the expression is returned in "text" and "tree" formats.',(0,i.kt)("br",null),"- If ",(0,i.kt)("inlineCode",{parentName:"td"},"tokens"),', the expression is returned in "text" and "tokens" formats.')))),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "destinationFolderId": "8AF48B3D4685C1717B3BDA9804CD1036",\n    "subType": "agg_metric",\n    "name": "Revenue"\n  },\n  "expression": {\n    "text": "Sum(Profit) - Sum(Cost)",\n    "tokens": [\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Sum",\n        "type": "function",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:35.000Z",\n          "dateModified": "2021-02-26T03:18:39.843Z",\n          "versionId": "93B1FFD040F7CBECF3C3378D5391AA35",\n          "primaryLocale": "en-US",\n          "objectId": "8107C31BDD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": "Sum",\n          "description": "Returns the sum of all values in the ValueList.  This is a group-value function."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "<",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "UseLookupForAttributes",\n        "type": "identifier"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "=",\n        "type": "function"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "False",\n        "type": "boolean"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ">",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "(",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Profit",\n        "type": "object_reference",\n        "target": {\n          "dateCreated": "2001-09-18T19:50:09.000Z",\n          "dateModified": "2022-02-17T03:47:14.966Z",\n          "versionId": "1F04706E441FF9C3C69DF5AC3C118FC3",\n          "primaryLocale": "en-US",\n          "objectId": "F30CB66411D5AC5FC000D98A4CC5F24F",\n          "subType": "fact",\n          "name": "Profit"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ")",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "-",\n        "type": "character",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:41.000Z",\n          "dateModified": "2021-02-26T03:18:34.045Z",\n          "versionId": "21E9227B421DBAD67EA60A929E595E67",\n          "primaryLocale": "en-US",\n          "objectId": "8107C311DD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": "-",\n          "description": "Returns the difference between two values."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Sum",\n        "type": "function",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:35.000Z",\n          "dateModified": "2021-02-26T03:18:39.843Z",\n          "versionId": "93B1FFD040F7CBECF3C3378D5391AA35",\n          "primaryLocale": "en-US",\n          "objectId": "8107C31BDD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": "Sum",\n          "description": "Returns the sum of all values in the ValueList.  This is a group-value function."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "<",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "UseLookupForAttributes",\n        "type": "identifier"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "=",\n        "type": "function"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "False",\n        "type": "boolean"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ">",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "(",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Cost",\n        "type": "object_reference",\n        "target": {\n          "dateCreated": "2001-09-18T20:21:56.000Z",\n          "dateModified": "2022-02-17T05:04:23.255Z",\n          "versionId": "DE098494437C76DA4BBDA688812CDFB2",\n          "primaryLocale": "en-US",\n          "objectId": "7A4ABE9111D5AC6FC000D98A4CC5F24F",\n          "subType": "fact",\n          "name": "Cost"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ")",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "",\n        "type": "end_of_text"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/formulas/1116B53103FC4A72BBACBAED388243D6" -H "accept: application/json" -H "X-MSTR-AuthToken: b4e54r86h5aja3inksrklee4d7" -H "X-MSTR-MS-Changeset: EB3A4F66E6A8413E9C36633533D0BA31" -H "Content-Type: application/json" -d "{\\"information\\":{\\"versionId\\":\\"F8748568ACD64683A888E928B0E3A3BC\\",\\"primaryLocale\\":\\"en-US\\",\\"objectId\\":\\"1116B53103FC4A72BBACBAED388243D6\\",\\"subType\\":\\"agg_metric\\",\\"name\\":\\"Revenue\\",\\"destinationFolderId\\":\\"8AF48B3D4685C1717B3BDA9804CD1036\\"},\\"expression\\":{\\"text\\":\\"Sum(Profit) - Sum(Cost)\\",\\"tokens\\":[{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"Sum\\",\\"type\\":\\"function\\",\\"target\\":{\\"dateCreated\\":\\"2001-01-02T20:47:35.000Z\\",\\"dateModified\\":\\"2021-02-26T03:18:39.843Z\\",\\"versionId\\":\\"93B1FFD040F7CBECF3C3378D5391AA35\\",\\"primaryLocale\\":\\"en-US\\",\\"objectId\\":\\"8107C31BDD9911D3B98100C04F2233EA\\",\\"subType\\":\\"function\\",\\"name\\":\\"Sum\\",\\"description\\":\\"Returns the sum of all values in the ValueList. This is a group-value function.\\"}},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"<\\",\\"type\\":\\"character\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"UseLookupForAttributes\\",\\"type\\":\\"identifier\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"=\\",\\"type\\":\\"function\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"False\\",\\"type\\":\\"boolean\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\">\\",\\"type\\":\\"character\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"(\\",\\"type\\":\\"character\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"Profit\\",\\"type\\":\\"object_reference\\",\\"target\\":{\\"dateCreated\\":\\"2001-09-18T19:50:09.000Z\\",\\"dateModified\\":\\"2022-02-17T03:47:14.966Z\\",\\"versionId\\":\\"1F04706E441FF9C3C69DF5AC3C118FC3\\",\\"primaryLocale\\":\\"en-US\\",\\"objectId\\":\\"F30CB66411D5AC5FC000D98A4CC5F24F\\",\\"subType\\":\\"fact\\",\\"name\\":\\"Profit\\"}},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\")\\",\\"type\\":\\"character\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"-\\",\\"type\\":\\"character\\",\\"target\\":{\\"dateCreated\\":\\"2001-01-02T20:47:41.000Z\\",\\"dateModified\\":\\"2021-02-26T03:18:34.045Z\\",\\"versionId\\":\\"21E9227B421DBAD67EA60A929E595E67\\",\\"primaryLocale\\":\\"en-US\\",\\"objectId\\":\\"8107C311DD9911D3B98100C04F2233EA\\",\\"subType\\":\\"function\\",\\"name\\":\\"-\\",\\"description\\":\\"Returns the difference between two values.\\"}},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"Sum\\",\\"type\\":\\"function\\",\\"target\\":{\\"dateCreated\\":\\"2001-01-02T20:47:35.000Z\\",\\"dateModified\\":\\"2021-02-26T03:18:39.843Z\\",\\"versionId\\":\\"93B1FFD040F7CBECF3C3378D5391AA35\\",\\"primaryLocale\\":\\"en-US\\",\\"objectId\\":\\"8107C31BDD9911D3B98100C04F2233EA\\",\\"subType\\":\\"function\\",\\"name\\":\\"Sum\\",\\"description\\":\\"Returns the sum of all values in the ValueList. This is a group-value function.\\"}},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"<\\",\\"type\\":\\"character\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"UseLookupForAttributes\\",\\"type\\":\\"identifier\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"=\\",\\"type\\":\\"function\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"False\\",\\"type\\":\\"boolean\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\">\\",\\"type\\":\\"character\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"(\\",\\"type\\":\\"character\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"Cost\\",\\"type\\":\\"object_reference\\",\\"target\\":{\\"dateCreated\\":\\"2001-09-18T20:21:56.000Z\\",\\"dateModified\\":\\"2022-02-17T05:04:23.255Z\\",\\"versionId\\":\\"DE098494437C76DA4BBDA688812CDFB2\\",\\"primaryLocale\\":\\"en-US\\",\\"objectId\\":\\"7A4ABE9111D5AC6FC000D98A4CC5F24F\\",\\"subType\\":\\"fact\\",\\"name\\":\\"Cost\\"}},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\")\\",\\"type\\":\\"character\\"},{\\"level\\":\\"resolved\\",\\"state\\":\\"initial\\",\\"value\\":\\"\\",\\"type\\":\\"end_of_text\\"}]}}"\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,"You can view the updated base formula's definition in the body of the response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "versionId": "F8748568ACD64683A888E928B0E3A3BC",\n    "primaryLocale": "en-US",\n    "objectId": "1116B53103FC4A72BBACBAED388243D6",\n    "subType": "agg_metric",\n    "name": "Revenue",\n    "destinationFolderId": "8AF48B3D4685C1717B3BDA9804CD1036"\n  },\n  "expression": {\n    "text": "Sum(Profit) - Sum(Cost)",\n    "tokens": [\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Sum",\n        "type": "function",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:35.000Z",\n          "dateModified": "2021-02-26T03:18:39.843Z",\n          "versionId": "93B1FFD040F7CBECF3C3378D5391AA35",\n          "primaryLocale": "en-US",\n          "objectId": "8107C31BDD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": "Sum",\n          "description": "Returns the sum of all values in the ValueList.  This is a group-value function."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "<",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "UseLookupForAttributes",\n        "type": "identifier"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "=",\n        "type": "function"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "False",\n        "type": "boolean"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ">",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "(",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Profit",\n        "type": "object_reference",\n        "target": {\n          "dateCreated": "2001-09-18T19:50:09.000Z",\n          "dateModified": "2022-02-17T03:47:14.966Z",\n          "versionId": "1F04706E441FF9C3C69DF5AC3C118FC3",\n          "primaryLocale": "en-US",\n          "objectId": "F30CB66411D5AC5FC000D98A4CC5F24F",\n          "subType": "fact",\n          "name": "Profit"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ")",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "-",\n        "type": "character",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:41.000Z",\n          "dateModified": "2021-02-26T03:18:34.045Z",\n          "versionId": "21E9227B421DBAD67EA60A929E595E67",\n          "primaryLocale": "en-US",\n          "objectId": "8107C311DD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": "-",\n          "description": "Returns the difference between two values."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Sum",\n        "type": "function",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:35.000Z",\n          "dateModified": "2021-02-26T03:18:39.843Z",\n          "versionId": "93B1FFD040F7CBECF3C3378D5391AA35",\n          "primaryLocale": "en-US",\n          "objectId": "8107C31BDD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": "Sum",\n          "description": "Returns the sum of all values in the ValueList.  This is a group-value function."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "<",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "UseLookupForAttributes",\n        "type": "identifier"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "=",\n        "type": "function"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "False",\n        "type": "boolean"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ">",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "(",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Cost",\n        "type": "object_reference",\n        "target": {\n          "dateCreated": "2001-09-18T20:21:56.000Z",\n          "dateModified": "2022-02-17T05:04:23.255Z",\n          "versionId": "DE098494437C76DA4BBDA688812CDFB2",\n          "primaryLocale": "en-US",\n          "objectId": "7A4ABE9111D5AC6FC000D98A4CC5F24F",\n          "subType": "fact",\n          "name": "Cost"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ")",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "",\n        "type": "end_of_text"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"Response Code: 200 (The Base Formula's definition is updated successfully in the changeset.)"),(0,i.kt)("h2",{id:"3-commit-a-changeset-using-post-apimodelchangesetschangesetidcommit"},"3. Commit a changeset using ",(0,i.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset"},(0,i.kt)("inlineCode",{parentName:"a"},"POST /api/model/changesets/{ChangesetId}/commit"))),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "bbjpsjos3b7ebokq9jdfvknska"\n"X-MSTR-MS-Changeset": "4E830DF576A24E4B9120455EE576EB51"\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00/commit" -H "accept: application/json" -H "X-MSTR-AuthToken: bbjpsjos3b7ebokq9jdfvknska" -H "X-MSTR-MS-Changeset: 4E830DF576A24E4B9120455EE576EB51"\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "4E830DF576A24E4B9120455EE576EB51",\n  "dateCreated": "2021-02-23T10:51:04.336913300Z",\n  "dateModified": "2021-02-23T10:51:18.780285700Z",\n  "status": "Ready",\n  "schemaEdit": false,\n  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n  "mstrUserId": "CFC4E856492FEF1A2BB6F1BC37ABFD06",\n  "userMetadataLocale": "en-US",\n  "userDateNumberLocale": "en-US",\n  "userWarehouseLocale": "en-US",\n  "userName": "MS"\n}\n')),(0,i.kt)("p",null,"Sample Response: 201 (The changeset is committed successfully.)"),(0,i.kt)("h2",{id:"4-delete-a-changeset-using-delete-apimodelchangesetschangesetid"},"4. Delete a changeset using ",(0,i.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset"},(0,i.kt)("inlineCode",{parentName:"a"},"DELETE /api/model/changesets/{ChangesetId}"))),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "frbicqfk7btoggg5bnu450hrqt"\n"X-MSTR-MS-Changeset": "4E830DF576A24E4B9120455EE576EB51"\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00" -H "accept: */*" -H "X-MSTR-AuthToken: frbicqfk7btoggg5bnu450hrqt" -H "X-MSTR-MS-Changeset: 4E830DF576A24E4B9120455EE576EB51"\n')),(0,i.kt)("p",null,"Sample Response Body: Empty"),(0,i.kt)("p",null,"Sample Response Code: 204 (The changeset has been deleted successfully.)"),(0,i.kt)("p",null,"The model for the definition of a base formula can be represented with the following fields:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Fields"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"information"),(0,i.kt)("td",{parentName:"tr",align:null},"objectID"),(0,i.kt)("td",{parentName:"tr",align:null},"ID of the base formula you want to edit."),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"destinationFolderId"),(0,i.kt)("td",{parentName:"tr",align:null},"Folder ID where you want to move the base formula."),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the base formula you want to edit."),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"expression"),(0,i.kt)("td",{parentName:"tr",align:null},"text"),(0,i.kt)("td",{parentName:"tr",align:null},"The text you want to modify."),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"tree"),(0,i.kt)("td",{parentName:"tr",align:null},"The tree structure you want to modify."),(0,i.kt)("td",{parentName:"tr",align:null},"List","<","ObjectInfoReference",">"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"tokens"),(0,i.kt)("td",{parentName:"tr",align:null},"The list of parsed tokens you want to modify."),(0,i.kt)("td",{parentName:"tr",align:null},"List","<","ObjectInfoReference",">"),(0,i.kt)("td",{parentName:"tr",align:null},"No")))))}m.isMDXComponent=!0}}]);