"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3289],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,f=d["".concat(l,".").concat(c)]||d[c]||u[c]||o;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6748:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return d}});var a,r=n(3117),o=n(102),i=(n(7294),n(3905)),s=["components"],l={title:"Retrieve a base formula's definition",sidebar_label:"Retrieve a base formula's definition",description:"This topic covers several workflows for retrieving a filter's definition."},p=void 0,m={unversionedId:"common-workflows/modeling/manage-base-formula-objects/retrieve-a-base-formulas-definition",id:"common-workflows/modeling/manage-base-formula-objects/retrieve-a-base-formulas-definition",title:"Retrieve a base formula's definition",description:"This topic covers several workflows for retrieving a filter's definition.",source:"@site/docs/common-workflows/modeling/manage-base-formula-objects/retrieve-a-base-formulas-definition.md",sourceDirName:"common-workflows/modeling/manage-base-formula-objects",slug:"/common-workflows/modeling/manage-base-formula-objects/retrieve-a-base-formulas-definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-base-formula-objects/retrieve-a-base-formulas-definition",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-base-formula-objects/retrieve-a-base-formulas-definition.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1677268684,formattedLastUpdatedAt:"Feb 24, 2023",frontMatter:{title:"Retrieve a base formula's definition",sidebar_label:"Retrieve a base formula's definition",description:"This topic covers several workflows for retrieving a filter's definition."},sidebar:"tutorialSidebar",previous:{title:"Manage base formula objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-base-formula-objects/"},next:{title:"Retrieve a base formula's definition within a changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-base-formula-objects/retrieve-a-base-formulas-definition-within-a-changeset"}},u={},d=[{value:"Retrieve a base formula&#39;s definition",id:"retrieve-a-base-formulas-definition",level:2},{value:"Retrieve a base formula\u2019s definition in tree format",id:"retrieve-a-base-formulas-definition-in-tree-format",level:2},{value:"Retrieve a base formula\u2019s definition in tokens format",id:"retrieve-a-base-formulas-definition-in-tokens-format",level:2}],c=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),f={toc:d};function b(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(c,{since:"2021 Update 5",mdxType:"Available"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-7bcc16b2-2864-4980-b2b1-77681174827a?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"This topic covers several workflows for retrieving a filter's definition:"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.")),(0,i.kt)("p",null,"You want to get the definition of the ",(0,i.kt)("inlineCode",{parentName:"p"},'"Cost"')," related base formula object, which is defined as ",(0,i.kt)("inlineCode",{parentName:"p"},"\u201dSum(Cost)\u201d")," and named as ",(0,i.kt)("inlineCode",{parentName:"p"},"\u201cbase_sum(Cost)\u201c"),". The object ID of the base formula is ",(0,i.kt)("inlineCode",{parentName:"p"},"594A680CB5894B25BD3AE8BB47AAF424")," \u202fin the MicroStrategy Tutorial project. The project ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,i.kt)("p",null,"Retrieve the base formula's definition using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Base%20Formulas/ms-getFormulaDetails"},"GET /api/model/Formulas/{FormulaId}"),"."),(0,i.kt)("p",null,"The response can change based on the request parameters provided by the caller. Use the following parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Location"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"header"),(0,i.kt)("td",{parentName:"tr",align:null},"X-MSTR-authToken"),(0,i.kt)("td",{parentName:"tr",align:null},"The authorization token")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"header"),(0,i.kt)("td",{parentName:"tr",align:null},"X-MSTR-ProjectID"),(0,i.kt)("td",{parentName:"tr",align:null},"The ID of the project")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"params"),(0,i.kt)("td",{parentName:"tr",align:null},"showExpressionAs"),(0,i.kt)("td",{parentName:"tr",align:null},"Omitted, tree, or tokens:",(0,i.kt)("br",null),"- If omitted, the expression is returned in only \u201ctext\u201c formats.",(0,i.kt)("br",null),"- If ",(0,i.kt)("inlineCode",{parentName:"td"},"tree"),', the expression is returned in "text" and "tree" formats.',(0,i.kt)("br",null),"- If ",(0,i.kt)("inlineCode",{parentName:"td"},"tokens"),', the expression is returned in "text" and "tokens" formats.')))),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("p",null,"With the above parameters, you can retrieve a base formula in different formats."),(0,i.kt)("h2",{id:"retrieve-a-base-formulas-definition"},"Retrieve a base formula's definition"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/formulas/594A680CB5894B25BD3AE8BB47AAF424" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,"You can view the base formula's definition in the body of the response. The following is an example of an expression in \u201ctext\u201c formats."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-03-03T03:36:08.382Z",\n    "dateModified": "2022-03-03T03:36:08.382Z",\n    "versionId": "CAF77F9B432CD7FE85F2F390621F38F2",\n    "primaryLocale": "en-US",\n    "objectId": "594A680CB5894B25BD3AE8BB47AAF424",\n    "subType": "agg_metric",\n    "name": "base_sum(Cost)"\n  },\n  "expression": { "text": "Sum(Cost)" }\n}\n')),(0,i.kt)("p",null,"Response Code: 200 (Base Formula's definition is returned successfully.)"),(0,i.kt)("h2",{id:"retrieve-a-base-formulas-definition-in-tree-format"},"Retrieve a base formula\u2019s definition in tree format"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/formulas/594A680CB5894B25BD3AE8BB47AAF424?showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,'You can view the base formula\'s definition in the body of the response, including the information and expression of this specified base formula. The following is an example of an expression in "text" and \u201ctree\u201c formats.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-03-03T03:36:08.382Z",\n    "dateModified": "2022-03-03T03:36:08.382Z",\n    "versionId": "CAF77F9B432CD7FE85F2F390621F38F2",\n    "primaryLocale": "en-US",\n    "objectId": "594A680CB5894B25BD3AE8BB47AAF424",\n    "subType": "agg_metric",\n    "name": "base_sum(Cost)"\n  },\n  "expression": {\n    "text": "Sum(Cost)",\n    "tree": {\n      "function": "sum",\n      "functionProperties": [\n        {\n          "name": "UseLookupForAttributes",\n          "value": { "type": "boolean", "value": "false" }\n        }\n      ],\n      "children": [\n        {\n          "type": "object_reference",\n          "target": {\n            "objectId": "7A4ABE9111D5AC6FC000D98A4CC5F24F",\n            "subType": "fact",\n            "name": "Cost"\n          },\n          "isIndependent": 0\n        }\n      ],\n      "text": "Sum(Cost)",\n      "type": "operator"\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Response Code: 200 (Base Formula's definition is returned successfully.)"),(0,i.kt)("h2",{id:"retrieve-a-base-formulas-definition-in-tokens-format"},"Retrieve a base formula\u2019s definition in tokens format"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/formulas/594A680CB5894B25BD3AE8BB47AAF424?showExpressionAs=tokens" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,"You can view the base formula's definition in the body of the response, including the information and expression of this specified base formula. The following is an example of an expression in \u201ctext\u201c and \u201ctokens\u201c formats."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-03-03T03:36:08.382Z",\n    "dateModified": "2022-03-03T03:36:08.382Z",\n    "versionId": "CAF77F9B432CD7FE85F2F390621F38F2",\n    "primaryLocale": "en-US",\n    "objectId": "594A680CB5894B25BD3AE8BB47AAF424",\n    "subType": "agg_metric",\n    "name": "base_sum(Cost)"\n  },\n  "expression": {\n    "text": "Sum(Cost)",\n    "tokens": [\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Sum",\n        "type": "function",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:35.000Z",\n          "dateModified": "2021-02-26T03:18:39.843Z",\n          "versionId": "93B1FFD040F7CBECF3C3378D5391AA35",\n          "primaryLocale": "en-US",\n          "objectId": "8107C31BDD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": "Sum",\n          "description": "Returns the sum of all values in the ValueList.  This is a group-value function."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "<",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "UseLookupForAttributes",\n        "type": "identifier"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "=",\n        "type": "function"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "False",\n        "type": "boolean"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ">",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "(",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Cost",\n        "type": "object_reference",\n        "target": {\n          "dateCreated": "2001-09-18T20:21:56.000Z",\n          "dateModified": "2022-02-17T05:04:23.255Z",\n          "versionId": "DE098494437C76DA4BBDA688812CDFB2",\n          "primaryLocale": "en-US",\n          "objectId": "7A4ABE9111D5AC6FC000D98A4CC5F24F",\n          "subType": "fact",\n          "name": "Cost"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ")",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "",\n        "type": "end_of_text"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"Response Code: 200 (Base Formula's definition is returned successfully.)"))}b.isMDXComponent=!0}}]);