"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[9730],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),m=p(n),c=r,g=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(g,i(i({ref:e},d),{},{components:n})):a.createElement(g,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6534:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],l={title:"Workflow sample - Update a subtotal within a changeset",sidebar_label:"Update a subtotal within a changeset",description:"This workflow sample demonstrates how to update a subtotal's definition through the Modeling service."},s=void 0,p={unversionedId:"common-workflows/manage-subtotal-objects/update-a-subtotal-within-a-changeset",id:"common-workflows/manage-subtotal-objects/update-a-subtotal-within-a-changeset",title:"Workflow sample - Update a subtotal within a changeset",description:"This workflow sample demonstrates how to update a subtotal's definition through the Modeling service.",source:"@site/docs/common-workflows/manage-subtotal-objects/update-a-subtotal-within-a-changeset.md",sourceDirName:"common-workflows/manage-subtotal-objects",slug:"/common-workflows/manage-subtotal-objects/update-a-subtotal-within-a-changeset",permalink:"/rest-api-docs/common-workflows/manage-subtotal-objects/update-a-subtotal-within-a-changeset",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-subtotal-objects/update-a-subtotal-within-a-changeset.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1668189866,formattedLastUpdatedAt:"Nov 11, 2022",frontMatter:{title:"Workflow sample - Update a subtotal within a changeset",sidebar_label:"Update a subtotal within a changeset",description:"This workflow sample demonstrates how to update a subtotal's definition through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a subtotal within a changeset",permalink:"/rest-api-docs/common-workflows/manage-subtotal-objects/create-a-subtotal-within-a-changeset"},next:{title:"Manage selectors",permalink:"/rest-api-docs/common-workflows/manage-selectors/"}},d={},u=[{value:"Update the metric&#39;s definition using PUT /api/model/subtotals/{subtotalId}",id:"update-the-metrics-definition-using-put-apimodelsubtotalssubtotalid",level:2}],m={toc:u};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-0054ca44-40a6-4387-b766-35fc5f00e428?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"This workflow sample demonstrates how to update a subtotal's definition through the Modeling service."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.")),(0,o.kt)("p",null,"You want to update the definition of the max subtotal with object ID ",(0,o.kt)("inlineCode",{parentName:"p"},"77C1228E42FCD8EF5CA7779988763A35")," to achieve the below changes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add a calculated level of \u201cCustomer Region\u201c"),(0,o.kt)("li",{parentName:"ul"},"Move it to another objects folder with the ID of ",(0,o.kt)("inlineCode",{parentName:"li"},"8A1831FF494F528D02A4A8BF5FB73459")),(0,o.kt)("li",{parentName:"ul"},"Rename the subtotal to ",(0,o.kt)("inlineCode",{parentName:"li"},'"Average at Customer Region"'))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets see ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/changesets"},"Changesets"),".")),(0,o.kt)("h2",{id:"update-the-metrics-definition-using-put-apimodelsubtotalssubtotalid"},"Update the metric's definition using ",(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Subtotals/ms-putSubtotal"},"PUT /api/model/subtotals/{subtotalId}")),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "b4e54r86h5aja3inksrklee4d7"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n"X-MSTR-MS-Changeset": "EB3A4F66E6A8413E9C36633533D0BA31"\n"Content-Type": "application/json"\n')),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n    "subType": "metric_subtotal",\n    "name": "Average at Customer Region"\n  },\n  "expression": {\n    "text": "Revenue",\n    "tokens": [\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Revenue",\n        "type": "object_reference",\n        "target": {\n          "dateCreated": "2001-01-02T20:42:52.000Z",\n          "dateModified": "2007-03-04T16:43:12.000Z",\n          "versionId": "CBFF0429433BF148C21DEF8E9BCB851F",\n          "primaryLocale": "en-US",\n          "objectId": "4C05176211D3E877C000B3B2D86C964F",\n          "subType": "agg_metric",\n          "name": "Revenue"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "{",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "@",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ",",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "[Customer Region]",\n        "type": "object_reference",\n        "target": {\n          "dateCreated": "2001-01-02T20:48:07.000Z",\n          "dateModified": "2021-02-26T03:18:48.000Z",\n          "versionId": "989B300749981E32FFC00886259028BC",\n          "primaryLocale": "en-US",\n          "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Customer Region"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "+",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "}",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "",\n        "type": "end_of_text"\n      }\n    ]\n  },\n  "dimty": {\n    "dimtyUnits": [\n      { "dimtyUnitType": "report_level", "relativePosition": 0 },\n      {\n        "dimtyUnitType": "attribute",\n        "target": {\n          "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Customer Region"\n        }\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/subtotals/77C1228E42FCD8EF5CA7779988763A35?showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: mtl3j38atj8tmrfip3vofrjes6" -H "X-MSTR-MS-Changeset: 038AB22B5A8D4E5A9749D74B77712C50 " -H "Content-Type: application/json" -d "{\\"information\\":{\\"destinationFolderId\\":\\"8A1831FF494F528D02A4A8BF5FB73459\\",\\"subType\\":\\"metric_subtotal\\",\\"name\\":\\"Average at Customer Region\\"},\\"expression\\":{\\"text\\":\\"Avg(Revenue)\\",\\"tree\\":{\\"type\\":\\"object_reference\\",\\"target\\":{\\"objectId\\":\\"EE5BF65E4E565AE84587468203AF8237\\",\\"subType\\":\\"agg_metric\\",\\"isEmbedded\\":true},\\"isIndependent\\":0}},\\"dimty\\":{\\"dimtyUnits\\":[{\\"dimtyUnitType\\":\\"report_level\\",\\"relativePosition\\":0},{\\"dimtyUnitType\\":\\"attribute\\",\\"target\\":{\\"objectId\\":\\"8D679D3B11D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Customer Region\\"}}]}}"\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,"You can view the updated subtotal's definition in the body of the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-03-10T09:00:50.991Z",\n    "dateModified": "2022-03-10T09:01:55.226Z",\n    "versionId": "2BCB1BC246EDA06088DC7E92C4794DF4",\n    "primaryLocale": "en-US",\n    "objectId": "77C1228E42FCD8EF5CA7779988763A35",\n    "subType": "metric_subtotal",\n    "name": "Average at Customer Region"\n  },\n  "expression": {\n    "text": "Avg(Revenue)",\n    "tree": {\n      "type": "object_reference",\n      "target": {\n        "objectId": "EE5BF65E4E565AE84587468203AF8237",\n        "subType": "agg_metric",\n        "isEmbedded": true\n      },\n      "isIndependent": 0\n    }\n  },\n  "dimty": {\n    "dimtyUnits": [\n      { "dimtyUnitType": "report_level", "relativePosition": 0 },\n      {\n        "dimtyUnitType": "attribute",\n        "target": {\n          "objectId": "8D679D3B11D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Customer Region"\n        }\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"Response Code: 200 (The subtotal's definition is updated successfully in the changeset.)"),(0,o.kt)("p",null,"The model for the definition of a subtotal can be updated with the following fields:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Fields"),(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"information"),(0,o.kt)("td",{parentName:"tr",align:null},"name"),(0,o.kt)("td",{parentName:"tr",align:null},"Name of the subtotal. This is the most user-friendly value that can be used to identify the subtotal."),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"subtype"),(0,o.kt)("td",{parentName:"tr",align:null},"For the subtotal, ",(0,o.kt)("inlineCode",{parentName:"td"},"subType")," is ",(0,o.kt)("inlineCode",{parentName:"td"},"metric_subtotal"),"."),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"destinationFolderId"),(0,o.kt)("td",{parentName:"tr",align:null},"Folder ID where the new metric is saved."),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"expression"),(0,o.kt)("td",{parentName:"tr",align:null},"text"),(0,o.kt)("td",{parentName:"tr",align:null},"A human readable, but non-parsable text, describing the expression."),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"tree"),(0,o.kt)("td",{parentName:"tr",align:null},"A tree data structure fully defining the expression."),(0,o.kt)("td",{parentName:"tr",align:null},"List","<","ObjectInfoReference",">"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"tokens"),(0,o.kt)("td",{parentName:"tr",align:null},"A list of parsed tokens."),(0,o.kt)("td",{parentName:"tr",align:null},"List","<","ObjectInfoReference",">"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dimty"),(0,o.kt)("td",{parentName:"tr",align:null},"dimtyUnits"),(0,o.kt)("td",{parentName:"tr",align:null},"Dimty contains a list of DimtyUnit, which describes the level that the metric can be calculated."),(0,o.kt)("td",{parentName:"tr",align:null},"List","<","ObjectInfoReference",">"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"allowAddingUnit"),(0,o.kt)("td",{parentName:"tr",align:null},"This setting allows other users to add extra units to this definition."),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"No")))))}c.isMDXComponent=!0}}]);