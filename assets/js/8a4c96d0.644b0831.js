"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8652],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=c(n),m=a,E=l["".concat(u,".").concat(m)]||l[m]||d[m]||i;return n?r.createElement(E,o(o({ref:t},p),{},{components:n})):r.createElement(E,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=l;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},9848:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],s={title:"Workflow Sample - Retrieve Grid or Graph Query Details",sidebar_label:"Retrieve Grid or Graph Query Details",description:"This workflow sample demonstrates how to retrieve the query details of grids and graphs in a document instance."},u=void 0,c={unversionedId:"common-workflows/retrieve-sql-statements-and-query-details/retrieve-grid-or-graph-query-details",id:"common-workflows/retrieve-sql-statements-and-query-details/retrieve-grid-or-graph-query-details",title:"Workflow Sample - Retrieve Grid or Graph Query Details",description:"This workflow sample demonstrates how to retrieve the query details of grids and graphs in a document instance.",source:"@site/docs/common-workflows/retrieve-sql-statements-and-query-details/retrieve-grid-or-graph-query-details.md",sourceDirName:"common-workflows/retrieve-sql-statements-and-query-details",slug:"/common-workflows/retrieve-sql-statements-and-query-details/retrieve-grid-or-graph-query-details",permalink:"/rest-api-docs/common-workflows/retrieve-sql-statements-and-query-details/retrieve-grid-or-graph-query-details",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/main/docs/common-workflows/retrieve-sql-statements-and-query-details/retrieve-grid-or-graph-query-details.md",tags:[],version:"current",lastUpdatedBy:"Liang, Jiapei",lastUpdatedAt:1663189678,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"Workflow Sample - Retrieve Grid or Graph Query Details",sidebar_label:"Retrieve Grid or Graph Query Details",description:"This workflow sample demonstrates how to retrieve the query details of grids and graphs in a document instance."},sidebar:"tutorialSidebar",previous:{title:"Retrieve Visualization Query Details",permalink:"/rest-api-docs/common-workflows/retrieve-sql-statements-and-query-details/retrieve-visualization-query-details"},next:{title:"Create and Import Migration Packages",permalink:"/rest-api-docs/common-workflows/create-and-import-migration-packages/"}},p={},d=[{value:"Create a document instance using <code>POST /api/documents/{id}/instances</code>",id:"create-a-document-instance-using-post-apidocumentsidinstances",level:2},{value:"Get the query details of grids and graphs in a document instance using <code>GET /api/documents/{id}/instances/{instanceId}/queryDetails</code>",id:"get-the-query-details-of-grids-and-graphs-in-a-document-instance-using-get-apidocumentsidinstancesinstanceidquerydetails",level:2}],l={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-b0ee6146-bd68-4aae-adfb-ef186d9e26ee?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"This workflow sample demonstrates how to retrieve the query details of grids and graphs in a document instance."),(0,i.kt)("p",null,"You want to view query details of grids and graphs in the Cost Analysis Document in the MicroStrategy Tutorial project. The object ID of the document is ",(0,i.kt)("inlineCode",{parentName:"p"},"D14F30994A4B97AD8EF6AEA5F589E30B"),". The project ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,i.kt)("h2",{id:"create-a-document-instance-using-post-apidocumentsidinstances"},"Create a document instance using ",(0,i.kt)("inlineCode",{parentName:"h2"},"POST /api/documents/{id}/instances")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "http://hostname:8080/MicroStrategyLibrary/api/documents/D14F30994A4B97AD8EF6AEA5F589E30B/instances" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Response Code: 201 (A new document instance is created successfully.)"),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 1,\n  "mid": "F4D88ADA0A4DF7B860BF3DA04418DBEA"\n}\n')),(0,i.kt)("h2",{id:"get-the-query-details-of-grids-and-graphs-in-a-document-instance-using-get-apidocumentsidinstancesinstanceidquerydetails"},"Get the query details of grids and graphs in a document instance using ",(0,i.kt)("inlineCode",{parentName:"h2"},"GET /api/documents/{id}/instances/{instanceId}/queryDetails")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-MS-Changeset": "2A131744C91B4915B54A61FFDC528F62"\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "http://hostname:8080/MicroStrategyLibrary/api/documents/F4D88ADA0A4DF7B860BF3DA04418DBEA/instances/50454FC6DA48C798E8EDA28C46726F5B/queryDetails" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "layouts": [\n    {\n      "key": "K36",\n      "name": "Chapter 1",\n      "gridGraphs": [\n        {\n          "key": "K52",\n          "rawName": "Visualization 1",\n          "name": "Visualization 1",\n          "queryDetails": "\\n*********   Visualization Summary Start  **********\\nTime Spent: 0.008 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\\nQuery Execution End Time: 6/4/2021 8:53:05 AM\\n\\nNote: The total \'Time Spent\' above may be greater than the summation of the individual step execution times below.\\nThere are preparation tasks for each step that are not individually measured.\\n*********   Visualization Summary End    **********\\n\\n\\n\\n************   Individual Step Start   ************\\nNumber of Rows Returned: 8\\nTime Spent: 0.001 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\\nQuery Execution End Time: 6/4/2021 8:53:05 AM\\n\\nselect\\t[Quarter]@[Quarter_ID],\\n\\t[Quarter]@[QUARTER_DESC],\\n\\t[Year]@[Year_ID],\\n\\tsum([Cost])@{[Quarter]}\\nfrom\\tNew Dataset 1\\nto\\tEx3_tempcube0\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nNumber of Rows Returned: 15\\nTime Spent: 0.001 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\\nQuery Execution End Time: 6/4/2021 8:53:05 AM\\n\\nselect\\t[Call Center]@[CALL_CTR_ID],\\n\\t[Call Center]@[CENTER_NAME],\\n\\t[Profit]\\nfrom\\tNew Dataset 1\\nto\\tEx3_tempcube1\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nNumber of Rows Returned: 120\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\\nQuery Execution End Time: 6/4/2021 8:53:05 AM\\n\\nselect\\t*\\t\\nfrom\\tCross Join(\\n\\t           Ex3_tempcube0, \\n\\t           Ex3_tempcube1\\n\\t          )\\nto\\tEx3_tempcube2\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nTime Spent: 0.001 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\\nQuery Execution End Time: 6/4/2021 8:53:05 AM\\n\\nDrop\\tEx3_tempcube0\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\\nQuery Execution End Time: 6/4/2021 8:53:05 AM\\n\\nDrop\\tEx3_tempcube1\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nNumber of Rows Returned: 120\\nTime Spent: 0.001 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\\nQuery Execution End Time: 6/4/2021 8:53:05 AM\\n\\nselect\\t[Call Center]@[CALL_CTR_ID],\\n\\t[Call Center]@[CENTER_NAME],\\n\\t[Quarter]@[Quarter_ID],\\n\\t[Quarter]@[QUARTER_DESC],\\n\\t[Year]@[Year_ID],\\n\\t[Profit],\\n\\t[Cost]\\nfrom\\tEx3_tempcube2\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\\nQuery Execution End Time: 6/4/2021 8:53:05 AM\\n\\nDrop\\tEx3_tempcube2\\n************   Individual Step End     ************\\n\\n\\n",\n          "sql": "select\\t[Quarter]@[Quarter_ID],\\n\\t[Quarter]@[QUARTER_DESC],\\n\\t[Year]@[Year_ID],\\n\\tsum([Cost])@{[Quarter]}\\nfrom\\tNew Dataset 1\\nto\\tEx3_tempcube0\\n\\nselect\\t[Call Center]@[CALL_CTR_ID],\\n\\t[Call Center]@[CENTER_NAME],\\n\\t[Profit]\\nfrom\\tNew Dataset 1\\nto\\tEx3_tempcube1\\n\\nselect\\t*\\t\\nfrom\\tCross Join(\\n\\t           Ex3_tempcube0, \\n\\t           Ex3_tempcube1\\n\\t          )\\nto\\tEx3_tempcube2\\n\\nDrop\\tEx3_tempcube0\\n\\nDrop\\tEx3_tempcube1\\n\\nselect\\t[Call Center]@[CALL_CTR_ID],\\n\\t[Call Center]@[CENTER_NAME],\\n\\t[Quarter]@[Quarter_ID],\\n\\t[Quarter]@[QUARTER_DESC],\\n\\t[Year]@[Year_ID],\\n\\t[Profit],\\n\\t[Cost]\\nfrom\\tEx3_tempcube2\\n\\nDrop\\tEx3_tempcube2\\n\\n"\n        }\n      ]\n    },\n    {\n      "key": "W62",\n      "name": "Chapter 2",\n      "gridGraphs": [\n        {\n          "key": "K86",\n          "rawName": "Visualization 1",\n          "name": "Visualization 1",\n          "queryDetails": "\\n*********   Visualization Summary Start  **********\\nTime Spent: 0.008 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\\nQuery Execution End Time: 6/4/2021 8:53:05 AM\\n\\nNote: The total \'Time Spent\' above may be greater than the summation of the individual step execution times below.\\nThere are preparation tasks for each step that are not individually measured.\\n*********   Visualization Summary End    **********\\n\\n\\n\\n************   Individual Step Start   ************\\nNumber of Rows Returned: 2\\nTime Spent: 0.002 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\\nQuery Execution End Time: 6/4/2021 8:53:05 AM\\n\\nselect\\t[Year]@[Year_ID],\\n\\tsum([Cost])@{[Year]}\\nfrom\\tNew Dataset 1\\nto\\tEx2_tempcube0\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nNumber of Rows Returned: 8\\nTime Spent: 0.001 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\\nQuery Execution End Time: 6/4/2021 8:53:05 AM\\n\\nselect\\t[Country]@[COUNTRY_ID],\\n\\t[Country]@[COUNTRY_NAME],\\n\\t[Region]@[REGION_ID],\\n\\t[Region]@[REGION_NAME],\\n\\tsum([Revenue])@{[Region]}\\nfrom\\tNew Dataset 1\\nto\\tEx2_tempcube1\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nNumber of Rows Returned: 16\\nTime Spent: 0.001 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\\nQuery Execution End Time: 6/4/2021 8:53:05 AM\\n\\nselect\\t*\\t\\nfrom\\tCross Join(\\n\\t           Ex2_tempcube0, \\n\\t           Ex2_tempcube1\\n\\t          )\\nto\\tEx2_tempcube2\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\\nQuery Execution End Time: 6/4/2021 8:53:05 AM\\n\\nDrop\\tEx2_tempcube0\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\\nQuery Execution End Time: 6/4/2021 8:53:05 AM\\n\\nDrop\\tEx2_tempcube1\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nNumber of Rows Returned: 16\\nTime Spent: 0.001 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\\nQuery Execution End Time: 6/4/2021 8:53:05 AM\\n\\nselect\\t[Country]@[COUNTRY_ID],\\n\\t[Country]@[COUNTRY_NAME],\\n\\t[Region]@[REGION_ID],\\n\\t[Region]@[REGION_NAME],\\n\\t[Year]@[Year_ID],\\n\\t[Revenue],\\n\\t[Cost]\\nfrom\\tEx2_tempcube2\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:53:05 AM\\nQuery Execution End Time: 6/4/2021 8:53:05 AM\\n\\nDrop\\tEx2_tempcube2\\n************   Individual Step End     ************\\n\\n\\n",\n          "sql": "select\\t[Year]@[Year_ID],\\n\\tsum([Cost])@{[Year]}\\nfrom\\tNew Dataset 1\\nto\\tEx2_tempcube0\\n\\nselect\\t[Country]@[COUNTRY_ID],\\n\\t[Country]@[COUNTRY_NAME],\\n\\t[Region]@[REGION_ID],\\n\\t[Region]@[REGION_NAME],\\n\\tsum([Revenue])@{[Region]}\\nfrom\\tNew Dataset 1\\nto\\tEx2_tempcube1\\n\\nselect\\t*\\t\\nfrom\\tCross Join(\\n\\t           Ex2_tempcube0, \\n\\t           Ex2_tempcube1\\n\\t          )\\nto\\tEx2_tempcube2\\n\\nDrop\\tEx2_tempcube0\\n\\nDrop\\tEx2_tempcube1\\n\\nselect\\t[Country]@[COUNTRY_ID],\\n\\t[Country]@[COUNTRY_NAME],\\n\\t[Region]@[REGION_ID],\\n\\t[Region]@[REGION_NAME],\\n\\t[Year]@[Year_ID],\\n\\t[Revenue],\\n\\t[Cost]\\nfrom\\tEx2_tempcube2\\n\\nDrop\\tEx2_tempcube2\\n\\n"\n        }\n      ]\n    }\n  ]\n}\n')))}m.isMDXComponent=!0}}]);