"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[4748],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=l(a),u=o,b=d["".concat(s,".").concat(u)]||d[u]||c[u]||n;return a?r.createElement(b,i(i({ref:t},m),{},{components:a})):r.createElement(b,i({ref:t},m))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<n;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7078:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return d}});var r,o=a(3117),n=a(102),i=(a(7294),a(3905)),p=["components"],s={title:"Retrieve a prompt of an SAP HANA table with input parameters",sidebar_label:"Retrieve a prompt of an SAP HANA table",description:"You can use REST APIs to retrieve a prompt of a table through the Modeling service, if you have read access to the table."},l=void 0,m={unversionedId:"common-workflows/modeling/manage-table-objects/retrieve-a-prompt-of-an-sap-hana-table",id:"common-workflows/modeling/manage-table-objects/retrieve-a-prompt-of-an-sap-hana-table",title:"Retrieve a prompt of an SAP HANA table with input parameters",description:"You can use REST APIs to retrieve a prompt of a table through the Modeling service, if you have read access to the table.",source:"@site/docs/common-workflows/modeling/manage-table-objects/retrieve-a-prompt-of-an-sap-hana-table.md",sourceDirName:"common-workflows/modeling/manage-table-objects",slug:"/common-workflows/modeling/manage-table-objects/retrieve-a-prompt-of-an-sap-hana-table",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/retrieve-a-prompt-of-an-sap-hana-table",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-table-objects/retrieve-a-prompt-of-an-sap-hana-table.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1676479687,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{title:"Retrieve a prompt of an SAP HANA table with input parameters",sidebar_label:"Retrieve a prompt of an SAP HANA table",description:"You can use REST APIs to retrieve a prompt of a table through the Modeling service, if you have read access to the table."},sidebar:"tutorialSidebar",previous:{title:"Update a table's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/update-a-tables-definition"},next:{title:"Update a prompt of an SAP HANA table",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/update-a-prompt-of-an-sap-hana-table"}},c={},d=[{value:"Retrieve a prompt of a table",id:"retrieve-a-prompt-of-a-table",level:2},{value:"Retrieve a table prompt within a changeset",id:"retrieve-a-table-prompt-within-a-changeset",level:2},{value:"Get a table&#39;s prompt within a changeset using GET /api/model/tables/{tableId}/prompts/{promptId}",id:"get-a-tables-prompt-within-a-changeset-using-get-apimodeltablestableidpromptspromptid",level:3}],u=(r="Available",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),b={toc:d};function h(e){var t=e.components,a=(0,n.Z)(e,p);return(0,i.kt)("wrapper",(0,o.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(u,{since:"2021 Update 6",mdxType:"Available"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-6ddc138b-b2ab-4c53-8172-b2af26f4586d?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"Starting in MicroStrategy 2021 Update 6, you can use REST APIs to retrieve a prompt of a table through the Modeling service, if you have read access to the table."),(0,i.kt)("p",null,"This workflow applies only to SAP HANA tables with input parameters because only these tables have prompts, and one input parameters corresponds to one prompt. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"https://community.microstrategy.com/s/article/Support-for-SAP-HANA-calculation-views-with-input-parameters?language=en_US"},"KB48437: Support for SAP HANA calculation views with input parameters"),"."),(0,i.kt)("h2",{id:"retrieve-a-prompt-of-a-table"},"Retrieve a prompt of a table"),(0,i.kt)("p",null,"This workflow sample demonstrates how to retrieve an existing prompt of an SAP HANA table."),(0,i.kt)("p",null,"The object ID of the table is ",(0,i.kt)("inlineCode",{parentName:"p"},"84AF2517E662417D9924FD678B44591A")," and the object ID of the prompt is ",(0,i.kt)("inlineCode",{parentName:"p"},"339585B03F354D11AE8760C4489160F1"),". The table is in the MicroStrategy Tutorial Advanced project and its project ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"6AB8DFFE4B99B7F6FB0E94AD176C4A28"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,i.kt)("p",null,"Retrieve the table prompt using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTablePromptDetails"},"GET /api/model/tables/{tableId}/prompts/{promptId}"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The prompt you are retrieving must already be in the prompt list of the current table."),(0,i.kt)("p",{parentName:"admonition"},"You must use ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableDetails"},"GET /api/model/tables/{tableId}")," and check the ",(0,i.kt)("inlineCode",{parentName:"p"},"sapHanaParameters")," field to view the list of existing prompts.")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "qu6j11maseap1gc67mrsf7ivdq"\n"X-MSTR-ProjectID": "6AB8DFFE4B99B7F6FB0E94AD176C4A28"\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET 'http://10.23.38.62:8080/MicroStrategyLibrary/api/model/tables/84AF2517E662417D9924FD678B44591A/prompts/339585B03F354D11AE8760C4489160F1' \\\n-H 'X-MSTR-AuthToken: qu6j11maseap1gc67mrsf7ivdq' \\\n-H 'X-MSTR-ProjectID: 6AB8DFFE4B99B7F6FB0E94AD176C4A28' \\\n-H 'Cookie: JSESSIONID=741610581756E9B5B624E71E7FA84DD3; iSession=qu6j11maseap1gc67mrsf7ivdq'\n")),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,"You can view the table's prompt in the body of the response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-04-19T06:25:44.000Z",\n    "dateModified": "2022-05-11T08:29:50.000Z",\n    "versionId": "9018A1D54F5D4E602850B1B2BD0B9B12",\n    "primaryLocale": "en-US",\n    "objectId": "339585B03F354D11AE8760C4489160F1",\n    "subType": "prompt_string",\n    "name": "IP_Static_List",\n    "description": "a static list"\n  },\n  "title": "a static list",\n  "instruction": "a static list",\n  "defaultAnswer": {\n    "value": "1500211138,1501014825"\n  },\n  "restriction": {\n    "required": true,\n    "allowPersonalAnswers": "none"\n  }\n}\n')),(0,i.kt)("p",null,"Response Code: 200 (Table's prompt is returned successfully.)"),(0,i.kt)("h2",{id:"retrieve-a-table-prompt-within-a-changeset"},"Retrieve a table prompt within a changeset"),(0,i.kt)("p",null,"You want to get the prompt of the same table object mentioned in ",(0,i.kt)("a",{parentName:"p",href:"#retrieve-a-prompt-of-a-table"},"Retrieve a prompt of a table"),", while within a changeset. The object ID of the table is ",(0,i.kt)("inlineCode",{parentName:"p"},"84AF2517E662417D9924FD678B44591A"),". The table is in the MicroStrategy Tutorial Advanced project and its project ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"6AB8DFFE4B99B7F6FB0E94AD176C4A28"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets see ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),". If you plan to use the response of ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTablePromptDetails"},"GET /api/model/tables/{tableId}/prompts/{promptId}")," to update the table\u2019s prompts, it is recommended to associate all requests to one changeset.")),(0,i.kt)("h3",{id:"get-a-tables-prompt-within-a-changeset-using-get-apimodeltablestableidpromptspromptid"},"Get a table's prompt within a changeset using ",(0,i.kt)("a",{parentName:"h3",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTablePromptDetails"},"GET /api/model/tables/{tableId}/prompts/{promptId}")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "qu6j11maseap1gc67mrsf7ivdq"\n"X-MSTR-MS-Changeset": "99B0CDA74BD6480DAA4C164FC361F4F0"\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("p",null,"Sample Request Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET 'http://10.23.38.62:8080/MicroStrategyLibrary/api/model/tables/84AF2517E662417D9924FD678B44591A/prompts/339585B03F354D11AE8760C4489160F1' \\\n-H 'X-MSTR-MS-Changeset: 99B0CDA74BD6480DAA4C164FC361F4F0' \\\n-H 'X-MSTR-AuthToken: qu6j11maseap1gc67mrsf7ivdq' \\\n-H 'Cookie: JSESSIONID=741610581756E9B5B624E71E7FA84DD3; iSession=qu6j11maseap1gc67mrsf7ivdq'\n")),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,"You can view the table\u2019s definition in the body of the response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-04-19T06:25:44.000Z",\n    "dateModified": "2022-05-11T08:29:50.000Z",\n    "versionId": "9018A1D54F5D4E602850B1B2BD0B9B12",\n    "primaryLocale": "en-US",\n    "objectId": "339585B03F354D11AE8760C4489160F1",\n    "subType": "prompt_string",\n    "name": "IP_Static_List",\n    "description": "a static list"\n  },\n  "title": "a static list",\n  "instruction": "a static list",\n  "defaultAnswer": {\n    "value": "1500211138,1501014825"\n  },\n  "restriction": {\n    "required": true,\n    "allowPersonalAnswers": "none"\n  }\n}\n')),(0,i.kt)("p",null,"Sample Response Code: 200 (Table's prompt is returned successfully.)"))}h.isMDXComponent=!0}}]);