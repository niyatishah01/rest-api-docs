"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6579],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),l=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,E=d["".concat(u,".").concat(m)]||d[m]||p[m]||r;return n?i.createElement(E,o(o({ref:t},c),{},{components:n})):i.createElement(E,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7937:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var i,a=n(3117),r=n(102),o=(n(7294),n(3905)),s=["components"],u={title:"Retrieve visualization query details",sidebar_label:"Retrieve visualization query details",description:"This workflow sample demonstrates how to retrieve the query details of visualizations in a dossier instance."},l=void 0,c={unversionedId:"common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-visualization-query-details",id:"common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-visualization-query-details",title:"Retrieve visualization query details",description:"This workflow sample demonstrates how to retrieve the query details of visualizations in a dossier instance.",source:"@site/docs/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-visualization-query-details.md",sourceDirName:"common-workflows/analytics/retrieve-sql-statements-and-query-details",slug:"/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-visualization-query-details",permalink:"/rest-api-docs/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-visualization-query-details",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-visualization-query-details.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1676479687,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{title:"Retrieve visualization query details",sidebar_label:"Retrieve visualization query details",description:"This workflow sample demonstrates how to retrieve the query details of visualizations in a dossier instance."},sidebar:"tutorialSidebar",previous:{title:"Retrieve the SQL statement of datasets in a document or dossier instance",permalink:"/rest-api-docs/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-dataset-sql"},next:{title:"Retrieve grid or graph query details",permalink:"/rest-api-docs/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-grid-or-graph-query-details"}},p={},d=[{value:"Create a dossier instance",id:"create-a-dossier-instance",level:2},{value:"Get the query details of visualizations in the dossier instance",id:"get-the-query-details-of-visualizations-in-the-dossier-instance",level:2},{value:"If both <code>chapterKey</code> and <code>visualizationKey</code> are null, the return query details all visualizations in all chapters",id:"if-both-chapterkey-and-visualizationkey-are-null-the-return-query-details-all-visualizations-in-all-chapters",level:3},{value:"If <code>chapterKey</code> is not null and <code>visualizationKey</code> is null, the return query details visualizations in a specific chapter",id:"if-chapterkey-is-not-null-and-visualizationkey-is-null-the-return-query-details-visualizations-in-a-specific-chapter",level:3},{value:"If both <code>chapterKey</code> and <code>visualizationKey</code> are not null, the return query details a single specific visualization",id:"if-both-chapterkey-and-visualizationkey-are-not-null-the-return-query-details-a-single-specific-visualization",level:3}],m=(i="Available",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),E={toc:d};function y(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(m,{since:"2021 Update 2",mdxType:"Available"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-5d5e523d-6a02-45a1-9537-bc0d37f9c10c"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"This workflow sample demonstrates how to retrieve the query details of visualizations in a dossier instance."),(0,o.kt)("p",null,"You want to view the query details of visualizations in the Cost Analysis Dossier in the MicroStrategy Tutorial project. The object ID of the dossier is ",(0,o.kt)("inlineCode",{parentName:"p"},"D14F30994A4B97AD8EF6AEA5F589E30B"),". The project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("h2",{id:"create-a-dossier-instance"},"Create a dossier instance"),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/createDossierInstance_1"},"POST /api/dossiers/{id}/instances")),(0,o.kt)("p",null,"Sample Request Header"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "http://hostname:8080/MicroStrategyLibrary/api/dossiers/D14F30994A4B97AD8EF6AEA5F589E30B/instances" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,o.kt)("p",null,"Sample Response Code: 201 (A new dossier instance is created successfully.)"),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "mid": "50454FC6DA48C798E8EDA28C46726F5B",\n  "status": 1\n}\n')),(0,o.kt)("h2",{id:"get-the-query-details-of-visualizations-in-the-dossier-instance"},"Get the query details of visualizations in the dossier instance"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/dossiers/{id}/instances/{instanceId}/queryDetails")),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-MS-Changeset": "2A131744C91B4915B54A61FFDC528F62"\n')),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "http://hostname:8080/MicroStrategyLibrary/api/dossiers/D14F30994A4B97AD8EF6AEA5F589E30B/instances/50454FC6DA48C798E8EDA28C46726F5B/queryDetails" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"visualizationKey")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"chapterKey")," query parameters to control which visualization\u2019s query details are returned in the response."),(0,o.kt)("h3",{id:"if-both-chapterkey-and-visualizationkey-are-null-the-return-query-details-all-visualizations-in-all-chapters"},"If both ",(0,o.kt)("inlineCode",{parentName:"h3"},"chapterKey")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"visualizationKey")," are null, the return query details all visualizations in all chapters"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "chapters": [\n    {\n      "key": "K36",\n      "name": "Chapter 1",\n      "visualizations": [\n        {\n          "key": "K52",\n          "name": "Visualization 1",\n          "queryDetails": "\\n*********   Visualization Summary Start  **********\\nTime Spent: 0.004 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\\nQuery Execution End Time: 6/4/2021 8:03:26 AM\\n\\nNote: The total \'Time Spent\' above may be greater than the summation of the individual step execution times below.\\nThere are preparation tasks for each step that are not individually measured.\\n*********   Visualization Summary End    **********\\n\\n\\n\\n************   Individual Step Start   ************\\nNumber of Rows Returned: 8\\nTime Spent: 0.001 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\\nQuery Execution End Time: 6/4/2021 8:03:26 AM\\n\\nselect\\t[Quarter]@[Quarter_ID],\\n\\t[Quarter]@[QUARTER_DESC],\\n\\t[Year]@[Year_ID],\\n\\tsum([Cost])@{[Quarter]}\\nfrom\\tNew Dataset 1\\nto\\tEx1_tempcube0\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nNumber of Rows Returned: 15\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\\nQuery Execution End Time: 6/4/2021 8:03:26 AM\\n\\nselect\\t[Call Center]@[CALL_CTR_ID],\\n\\t[Call Center]@[CENTER_NAME],\\n\\t[Profit]\\nfrom\\tNew Dataset 1\\nto\\tEx1_tempcube1\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nNumber of Rows Returned: 120\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\\nQuery Execution End Time: 6/4/2021 8:03:26 AM\\n\\nselect\\t*\\t\\nfrom\\tCross Join(\\n\\t           Ex1_tempcube0, \\n\\t           Ex1_tempcube1\\n\\t          )\\nto\\tEx1_tempcube2\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\\nQuery Execution End Time: 6/4/2021 8:03:26 AM\\n\\nDrop\\tEx1_tempcube0\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\\nQuery Execution End Time: 6/4/2021 8:03:26 AM\\n\\nDrop\\tEx1_tempcube1\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nNumber of Rows Returned: 120\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\\nQuery Execution End Time: 6/4/2021 8:03:26 AM\\n\\nselect\\t[Call Center]@[CALL_CTR_ID],\\n\\t[Call Center]@[CENTER_NAME],\\n\\t[Quarter]@[Quarter_ID],\\n\\t[Quarter]@[QUARTER_DESC],\\n\\t[Year]@[Year_ID],\\n\\t[Profit],\\n\\t[Cost]\\nfrom\\tEx1_tempcube2\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\\nQuery Execution End Time: 6/4/2021 8:03:26 AM\\n\\nDrop\\tEx1_tempcube2\\n************   Individual Step End     ************\\n\\n\\n",\n          "sql": "select\\t[Quarter]@[Quarter_ID],\\n\\t[Quarter]@[QUARTER_DESC],\\n\\t[Year]@[Year_ID],\\n\\tsum([Cost])@{[Quarter]}\\nfrom\\tNew Dataset 1\\nto\\tEx1_tempcube0\\n\\nselect\\t[Call Center]@[CALL_CTR_ID],\\n\\t[Call Center]@[CENTER_NAME],\\n\\t[Profit]\\nfrom\\tNew Dataset 1\\nto\\tEx1_tempcube1\\n\\nselect\\t*\\t\\nfrom\\tCross Join(\\n\\t           Ex1_tempcube0, \\n\\t           Ex1_tempcube1\\n\\t          )\\nto\\tEx1_tempcube2\\n\\nDrop\\tEx1_tempcube0\\n\\nDrop\\tEx1_tempcube1\\n\\nselect\\t[Call Center]@[CALL_CTR_ID],\\n\\t[Call Center]@[CENTER_NAME],\\n\\t[Quarter]@[Quarter_ID],\\n\\t[Quarter]@[QUARTER_DESC],\\n\\t[Year]@[Year_ID],\\n\\t[Profit],\\n\\t[Cost]\\nfrom\\tEx1_tempcube2\\n\\nDrop\\tEx1_tempcube2\\n\\n"\n        }\n      ]\n    },\n    {\n      "key": "W62",\n      "name": "Chapter 2",\n      "visualizations": [\n        {\n          "key": "K86",\n          "name": "Visualization 1",\n          "queryDetails": "\\n*********   Visualization Summary Start  **********\\nTime Spent: 0.005 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\\nQuery Execution End Time: 6/4/2021 8:03:26 AM\\n\\nNote: The total \'Time Spent\' above may be greater than the summation of the individual step execution times below.\\nThere are preparation tasks for each step that are not individually measured.\\n*********   Visualization Summary End    **********\\n\\n\\n\\n************   Individual Step Start   ************\\nNumber of Rows Returned: 2\\nTime Spent: 0.001 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\\nQuery Execution End Time: 6/4/2021 8:03:26 AM\\n\\nselect\\t[Year]@[Year_ID],\\n\\tsum([Cost])@{[Year]}\\nfrom\\tNew Dataset 1\\nto\\tEx0_tempcube0\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nNumber of Rows Returned: 8\\nTime Spent: 0.001 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\\nQuery Execution End Time: 6/4/2021 8:03:26 AM\\n\\nselect\\t[Country]@[COUNTRY_ID],\\n\\t[Country]@[COUNTRY_NAME],\\n\\t[Region]@[REGION_ID],\\n\\t[Region]@[REGION_NAME],\\n\\tsum([Revenue])@{[Region]}\\nfrom\\tNew Dataset 1\\nto\\tEx0_tempcube1\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nNumber of Rows Returned: 16\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\\nQuery Execution End Time: 6/4/2021 8:03:26 AM\\n\\nselect\\t*\\t\\nfrom\\tCross Join(\\n\\t           Ex0_tempcube0, \\n\\t           Ex0_tempcube1\\n\\t          )\\nto\\tEx0_tempcube2\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\\nQuery Execution End Time: 6/4/2021 8:03:26 AM\\n\\nDrop\\tEx0_tempcube0\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\\nQuery Execution End Time: 6/4/2021 8:03:26 AM\\n\\nDrop\\tEx0_tempcube1\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nNumber of Rows Returned: 16\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\\nQuery Execution End Time: 6/4/2021 8:03:26 AM\\n\\nselect\\t[Country]@[COUNTRY_ID],\\n\\t[Country]@[COUNTRY_NAME],\\n\\t[Region]@[REGION_ID],\\n\\t[Region]@[REGION_NAME],\\n\\t[Year]@[Year_ID],\\n\\t[Revenue],\\n\\t[Cost]\\nfrom\\tEx0_tempcube2\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\\nQuery Execution End Time: 6/4/2021 8:03:26 AM\\n\\nDrop\\tEx0_tempcube2\\n************   Individual Step End     ************\\n\\n\\n",\n          "sql": "select\\t[Year]@[Year_ID],\\n\\tsum([Cost])@{[Year]}\\nfrom\\tNew Dataset 1\\nto\\tEx0_tempcube0\\n\\nselect\\t[Country]@[COUNTRY_ID],\\n\\t[Country]@[COUNTRY_NAME],\\n\\t[Region]@[REGION_ID],\\n\\t[Region]@[REGION_NAME],\\n\\tsum([Revenue])@{[Region]}\\nfrom\\tNew Dataset 1\\nto\\tEx0_tempcube1\\n\\nselect\\t*\\t\\nfrom\\tCross Join(\\n\\t           Ex0_tempcube0, \\n\\t           Ex0_tempcube1\\n\\t          )\\nto\\tEx0_tempcube2\\n\\nDrop\\tEx0_tempcube0\\n\\nDrop\\tEx0_tempcube1\\n\\nselect\\t[Country]@[COUNTRY_ID],\\n\\t[Country]@[COUNTRY_NAME],\\n\\t[Region]@[REGION_ID],\\n\\t[Region]@[REGION_NAME],\\n\\t[Year]@[Year_ID],\\n\\t[Revenue],\\n\\t[Cost]\\nfrom\\tEx0_tempcube2\\n\\nDrop\\tEx0_tempcube2\\n\\n"\n        }\n      ]\n    }\n  ]\n}\n')),(0,o.kt)("h3",{id:"if-chapterkey-is-not-null-and-visualizationkey-is-null-the-return-query-details-visualizations-in-a-specific-chapter"},"If ",(0,o.kt)("inlineCode",{parentName:"h3"},"chapterKey")," is not null and ",(0,o.kt)("inlineCode",{parentName:"h3"},"visualizationKey")," is null, the return query details visualizations in a specific chapter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "chapters": [\n    {\n      "key": "K36",\n      "name": "Chapter 1",\n      "visualizations": [\n        {\n          "key": "K52",\n          "name": "Visualization 1",\n          "queryDetails": "\\n*********   Visualization Summary Start  **********\\nTime Spent: 0.004 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\\nQuery Execution End Time: 6/4/2021 8:03:26 AM\\n\\nNote: The total \'Time Spent\' above may be greater than the summation of the individual step execution times below.\\nThere are preparation tasks for each step that are not individually measured.\\n*********   Visualization Summary End    **********\\n\\n\\n\\n************   Individual Step Start   ************\\nNumber of Rows Returned: 8\\nTime Spent: 0.001 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\\nQuery Execution End Time: 6/4/2021 8:03:26 AM\\n\\nselect\\t[Quarter]@[Quarter_ID],\\n\\t[Quarter]@[QUARTER_DESC],\\n\\t[Year]@[Year_ID],\\n\\tsum([Cost])@{[Quarter]}\\nfrom\\tNew Dataset 1\\nto\\tEx1_tempcube0\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nNumber of Rows Returned: 15\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\\nQuery Execution End Time: 6/4/2021 8:03:26 AM\\n\\nselect\\t[Call Center]@[CALL_CTR_ID],\\n\\t[Call Center]@[CENTER_NAME],\\n\\t[Profit]\\nfrom\\tNew Dataset 1\\nto\\tEx1_tempcube1\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nNumber of Rows Returned: 120\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\\nQuery Execution End Time: 6/4/2021 8:03:26 AM\\n\\nselect\\t*\\t\\nfrom\\tCross Join(\\n\\t           Ex1_tempcube0, \\n\\t           Ex1_tempcube1\\n\\t          )\\nto\\tEx1_tempcube2\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\\nQuery Execution End Time: 6/4/2021 8:03:26 AM\\n\\nDrop\\tEx1_tempcube0\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\\nQuery Execution End Time: 6/4/2021 8:03:26 AM\\n\\nDrop\\tEx1_tempcube1\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nNumber of Rows Returned: 120\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\\nQuery Execution End Time: 6/4/2021 8:03:26 AM\\n\\nselect\\t[Call Center]@[CALL_CTR_ID],\\n\\t[Call Center]@[CENTER_NAME],\\n\\t[Quarter]@[Quarter_ID],\\n\\t[Quarter]@[QUARTER_DESC],\\n\\t[Year]@[Year_ID],\\n\\t[Profit],\\n\\t[Cost]\\nfrom\\tEx1_tempcube2\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\\nQuery Execution End Time: 6/4/2021 8:03:26 AM\\n\\nDrop\\tEx1_tempcube2\\n************   Individual Step End     ************\\n\\n\\n",\n          "sql": "select\\t[Quarter]@[Quarter_ID],\\n\\t[Quarter]@[QUARTER_DESC],\\n\\t[Year]@[Year_ID],\\n\\tsum([Cost])@{[Quarter]}\\nfrom\\tNew Dataset 1\\nto\\tEx1_tempcube0\\n\\nselect\\t[Call Center]@[CALL_CTR_ID],\\n\\t[Call Center]@[CENTER_NAME],\\n\\t[Profit]\\nfrom\\tNew Dataset 1\\nto\\tEx1_tempcube1\\n\\nselect\\t*\\t\\nfrom\\tCross Join(\\n\\t           Ex1_tempcube0, \\n\\t           Ex1_tempcube1\\n\\t          )\\nto\\tEx1_tempcube2\\n\\nDrop\\tEx1_tempcube0\\n\\nDrop\\tEx1_tempcube1\\n\\nselect\\t[Call Center]@[CALL_CTR_ID],\\n\\t[Call Center]@[CENTER_NAME],\\n\\t[Quarter]@[Quarter_ID],\\n\\t[Quarter]@[QUARTER_DESC],\\n\\t[Year]@[Year_ID],\\n\\t[Profit],\\n\\t[Cost]\\nfrom\\tEx1_tempcube2\\n\\nDrop\\tEx1_tempcube2\\n\\n"\n        }\n      ]\n    }\n  ]\n}\n')),(0,o.kt)("h3",{id:"if-both-chapterkey-and-visualizationkey-are-not-null-the-return-query-details-a-single-specific-visualization"},"If both ",(0,o.kt)("inlineCode",{parentName:"h3"},"chapterKey")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"visualizationKey")," are not null, the return query details a single specific visualization"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "chapters": [\n    {\n      "key": "W62",\n      "name": "Chapter 2",\n      "visualizations": [\n        {\n          "key": "K86",\n          "name": "Visualization 1",\n          "queryDetails": "\\n*********   Visualization Summary Start  **********\\nTime Spent: 0.005 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\\nQuery Execution End Time: 6/4/2021 8:03:26 AM\\n\\nNote: The total \'Time Spent\' above may be greater than the summation of the individual step execution times below.\\nThere are preparation tasks for each step that are not individually measured.\\n*********   Visualization Summary End    **********\\n\\n\\n\\n************   Individual Step Start   ************\\nNumber of Rows Returned: 2\\nTime Spent: 0.001 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\\nQuery Execution End Time: 6/4/2021 8:03:26 AM\\n\\nselect\\t[Year]@[Year_ID],\\n\\tsum([Cost])@{[Year]}\\nfrom\\tNew Dataset 1\\nto\\tEx0_tempcube0\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nNumber of Rows Returned: 8\\nTime Spent: 0.001 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\\nQuery Execution End Time: 6/4/2021 8:03:26 AM\\n\\nselect\\t[Country]@[COUNTRY_ID],\\n\\t[Country]@[COUNTRY_NAME],\\n\\t[Region]@[REGION_ID],\\n\\t[Region]@[REGION_NAME],\\n\\tsum([Revenue])@{[Region]}\\nfrom\\tNew Dataset 1\\nto\\tEx0_tempcube1\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nNumber of Rows Returned: 16\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\\nQuery Execution End Time: 6/4/2021 8:03:26 AM\\n\\nselect\\t*\\t\\nfrom\\tCross Join(\\n\\t           Ex0_tempcube0, \\n\\t           Ex0_tempcube1\\n\\t          )\\nto\\tEx0_tempcube2\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\\nQuery Execution End Time: 6/4/2021 8:03:26 AM\\n\\nDrop\\tEx0_tempcube0\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\\nQuery Execution End Time: 6/4/2021 8:03:26 AM\\n\\nDrop\\tEx0_tempcube1\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nNumber of Rows Returned: 16\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\\nQuery Execution End Time: 6/4/2021 8:03:26 AM\\n\\nselect\\t[Country]@[COUNTRY_ID],\\n\\t[Country]@[COUNTRY_NAME],\\n\\t[Region]@[REGION_ID],\\n\\t[Region]@[REGION_NAME],\\n\\t[Year]@[Year_ID],\\n\\t[Revenue],\\n\\t[Cost]\\nfrom\\tEx0_tempcube2\\n************   Individual Step End     ************\\n\\n\\n\\n************   Individual Step Start   ************\\nTime Spent: 0.000 sec(s)\\nQuery Execution Start Time: 6/4/2021 8:03:26 AM\\nQuery Execution End Time: 6/4/2021 8:03:26 AM\\n\\nDrop\\tEx0_tempcube2\\n************   Individual Step End     ************\\n\\n\\n",\n          "sql": "select\\t[Year]@[Year_ID],\\n\\tsum([Cost])@{[Year]}\\nfrom\\tNew Dataset 1\\nto\\tEx0_tempcube0\\n\\nselect\\t[Country]@[COUNTRY_ID],\\n\\t[Country]@[COUNTRY_NAME],\\n\\t[Region]@[REGION_ID],\\n\\t[Region]@[REGION_NAME],\\n\\tsum([Revenue])@{[Region]}\\nfrom\\tNew Dataset 1\\nto\\tEx0_tempcube1\\n\\nselect\\t*\\t\\nfrom\\tCross Join(\\n\\t           Ex0_tempcube0, \\n\\t           Ex0_tempcube1\\n\\t          )\\nto\\tEx0_tempcube2\\n\\nDrop\\tEx0_tempcube0\\n\\nDrop\\tEx0_tempcube1\\n\\nselect\\t[Country]@[COUNTRY_ID],\\n\\t[Country]@[COUNTRY_NAME],\\n\\t[Region]@[REGION_ID],\\n\\t[Region]@[REGION_NAME],\\n\\t[Year]@[Year_ID],\\n\\t[Revenue],\\n\\t[Cost]\\nfrom\\tEx0_tempcube2\\n\\nDrop\\tEx0_tempcube2\\n\\n"\n        }\n      ]\n    }\n  ]\n}\n')))}y.isMDXComponent=!0}}]);