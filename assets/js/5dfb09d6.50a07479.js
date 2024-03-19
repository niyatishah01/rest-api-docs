"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[7663],{79684:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=i(74848),a=i(28453);const s={title:"Retrieve a list of all available table definitions",sidebar_label:"Retrieve a list of all available table definitions",description:"You can use REST APIs to retrieve the definitions for a list of all available tables through the Modeling service."},o=void 0,l={id:"common-workflows/modeling/manage-table-objects/retrieve-a-list-of-all-available-table-definitions",title:"Retrieve a list of all available table definitions",description:"You can use REST APIs to retrieve the definitions for a list of all available tables through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-table-objects/retrieve-a-list-of-all-available-table-definitions.md",sourceDirName:"common-workflows/modeling/manage-table-objects",slug:"/common-workflows/modeling/manage-table-objects/retrieve-a-list-of-all-available-table-definitions",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/retrieve-a-list-of-all-available-table-definitions",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-table-objects/retrieve-a-list-of-all-available-table-definitions.md",tags:[],version:"current",lastUpdatedBy:"AugLychee",lastUpdatedAt:1710818077,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{title:"Retrieve a list of all available table definitions",sidebar_label:"Retrieve a list of all available table definitions",description:"You can use REST APIs to retrieve the definitions for a list of all available tables through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Manage table objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/"},next:{title:"Retrieve a table's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/retrieve-a-tables-definition"}},r={},d=[{value:"Retrieve a list of all available tables&#39; definitions",id:"retrieve-a-list-of-all-available-tables-definitions",level:2},{value:"Retrieve a list of available tables&#39; definitions within a changeset",id:"retrieve-a-list-of-available-tables-definitions-within-a-changeset",level:3},{value:"Retrieve a table&#39;s definition with only specified fields",id:"retrieve-a-tables-definition-with-only-specified-fields",level:3},{value:"Retrieve a sliced array of tables&#39; definitions",id:"retrieve-a-sliced-array-of-tables-definitions",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Available:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{since:"2021 Update 1"}),"\n",(0,n.jsx)(t.p,{children:"You can use REST APIs to retrieve the definitions for a list of all available tables through the Modeling service."}),"\n",(0,n.jsx)(t.h2,{id:"retrieve-a-list-of-all-available-tables-definitions",children:"Retrieve a list of all available tables' definitions"}),"\n",(0,n.jsxs)(t.p,{children:["In this workflow sample, you want to get the definitions of all available tables in the project schema. Use the MicroStrategy Tutorial project. Its project ID is ",(0,n.jsx)(t.code,{children:"B19DEDCC11D4E0EFC000EB9495D0F44F"}),"."]}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsxs)(t.p,{children:["Get the authorization token needed to execute the request with ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,n.jsxs)(t.p,{children:["Get the project ID from ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,n.jsxs)(t.p,{children:["Retrieve a list of all available tables' definitions using ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableList",children:"GET /api/model/tables"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "lmiouhsue1osvl8uf2vuvlbcfp"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n'})}),"\n",(0,n.jsx)(t.p,{children:"Sample Request Body: Empty"}),"\n",(0,n.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl -X GET "http://10.23.9.111:8080/MicroStrategyLibrary/api/model/tables" -H "accept: application/json" -H "X-MSTR-AuthToken: lmiouhsue1osvl8uf2vuvlbcfp" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"\n'})}),"\n",(0,n.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,n.jsx)(t.p,{children:"You can view the tables' definitions in the body of the response."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "offset": 0,\n  "limit": -1,\n  "total": 73,\n  "tables": [\n    {\n      "information": {\n        "dateCreated": "2001-01-02T20:47:18.000Z",\n        "dateModified": "2012-06-06T12:13:04.000Z",\n        "versionId": "256D148442065F43BDC42FBB79438A3F",\n        "primaryLocale": "en-US",\n        "objectId": "8D67932011D3E4981000E787EC6DE8A4",\n        "subType": "table_partition_wh",\n        "name": "PMT_INVENTORY"\n      }\n    },\n    {\n      "information": {\n        "dateCreated": "2001-01-02T20:47:10.000Z",\n        "dateModified": "2012-06-06T12:12:35.000Z",\n        "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n        "primaryLocale": "en-US",\n        "objectId": "8D67932C11D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "INVENTORY_ORDERS"\n      }\n    },\n    {\n      "information": {\n        "dateCreated": "2001-01-02T20:47:09.000Z",\n        "dateModified": "2012-06-06T12:12:35.000Z",\n        "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n        "primaryLocale": "en-US",\n        "objectId": "8D67933211D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_CALL_CTR"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"Response Code: 200 (The tables' definitions are returned successfully.)"}),"\n",(0,n.jsx)(t.h3,{id:"retrieve-a-list-of-available-tables-definitions-within-a-changeset",children:"Retrieve a list of available tables' definitions within a changeset"}),"\n",(0,n.jsxs)(t.p,{children:["In this workflow sample, you want to get the definitions of all available tables in the project schema. Use the MicroStrategy Tutorial project. Its project ID is ",(0,n.jsx)(t.code,{children:"B19DEDCC11D4E0EFC000EB9495D0F44F"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,n.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/changesets",children:"Changesets"}),". If you plan to use the response of ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableList",children:"GET /api/model/tables"})," to create a new table or update a specific table's definitions, you should associate all requests with one changeset."]})}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsxs)(t.p,{children:["Get the authorization token needed to execute the request with ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,n.jsxs)(t.p,{children:["Get the project ID from ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,n.jsxs)(t.p,{children:["Get the tables' definitions within a changeset using ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableDetails",children:"GET /api/model/tables/{TableId}"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Sample Request Header"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n'})}),"\n",(0,n.jsx)(t.p,{children:"Sample Request Body: Empty"}),"\n",(0,n.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl -X GET "http://10.23.9.111:8080/MicroStrategyLibrary/api/model/tables/862780DC499A14D74FEC7EB2EF317DA2" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n'})}),"\n",(0,n.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,n.jsx)(t.p,{children:"You can view the tables' definitions in the body of the response."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "offset": 0,\n  "limit": -1,\n  "total": 73,\n  "tables": [\n    {\n      "information": {\n        "dateCreated": "2001-01-02T20:47:18.000Z",\n        "dateModified": "2012-06-06T12:13:04.000Z",\n        "versionId": "256D148442065F43BDC42FBB79438A3F",\n        "primaryLocale": "en-US",\n        "objectId": "8D67932011D3E4981000E787EC6DE8A4",\n        "subType": "table_partition_wh",\n        "name": "PMT_INVENTORY"\n      }\n    },\n    {\n      "information": {\n        "dateCreated": "2001-01-02T20:47:10.000Z",\n        "dateModified": "2012-06-06T12:12:35.000Z",\n        "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n        "primaryLocale": "en-US",\n        "objectId": "8D67932C11D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "INVENTORY_ORDERS"\n      }\n    },\n    {\n      "information": {\n        "dateCreated": "2001-01-02T20:47:09.000Z",\n        "dateModified": "2012-06-06T12:12:35.000Z",\n        "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n        "primaryLocale": "en-US",\n        "objectId": "8D67933211D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_CALL_CTR"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"Response Code: 200 (The tables' definitions are returned successfully.)"}),"\n",(0,n.jsx)(t.h3,{id:"retrieve-a-tables-definition-with-only-specified-fields",children:"Retrieve a table's definition with only specified fields"}),"\n",(0,n.jsxs)(t.p,{children:["In this workflow sample, you use the ",(0,n.jsx)(t.code,{children:"fields"})," parameter to retrieve specific fields. If the ",(0,n.jsx)(t.code,{children:"fields"})," parameter is not specified, the API only returns the ",(0,n.jsx)(t.code,{children:'"information"'})," field by default."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"Multiple field values are separated by a comma."})}),"\n",(0,n.jsxs)(t.p,{children:["Retrieve the tables' definitions using ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableList",children:"GET /api/model/tables"}),", along with ",(0,n.jsx)(t.code,{children:"fields=physicalTable"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl -X GET "https://10.23.9.111:8080/MicroStrategyLibrary/api/model/tables/862780DC499A14D74FEC7EB2EF317DA2?fields=physicalTable" -H "accept: application/json" -H "X-MSTR-AuthToken: mcgi1hfofet0f1nhs3u3kjurah" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"\n'})}),"\n",(0,n.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,n.jsxs)(t.p,{children:["You can view the returned tables' definitions in the body of the response. Notice that only the ",(0,n.jsx)(t.code,{children:'"physicalTable"'})," field is returned."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "offset": 0,\n  "limit": -1,\n  "total": 73,\n  "tables": [\n    {\n      "physicalTable": {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:54.000Z",\n          "dateModified": "2012-06-06T12:12:35.000Z",\n          "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n          "primaryLocale": "en-US",\n          "objectId": "8D6790F811D3E4981000E787EC6DE8A4",\n          "subType": "physical_table",\n          "name": "INVENTORY_ORDERS"\n        },\n        "tableName": "INVENTORY_ORDERS",\n        "namespace": "",\n        "tablePrefix": "",\n        "type": "normal"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"Sample Response Code: 200 (The tables' definitions are returned successfully.)"}),"\n",(0,n.jsx)(t.h3,{id:"retrieve-a-sliced-array-of-tables-definitions",children:"Retrieve a sliced array of tables' definitions"}),"\n",(0,n.jsx)(t.p,{children:"In this workflow sample, you retrieve a sliced array of the tables' definitions using the following parameters:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"limit"})," indicates the maximum number of objects that can be returned by this method."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"offset"})," indicates the number of leading objects to omit from the response to this method."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Retrieve the tables' definitions using ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableList",children:"GET /api/model/tables"}),", along with ",(0,n.jsx)(t.code,{children:"limit=1&offset=10"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/tables?limit=1&offset=10" -H "accept: application/json" -H "X-MSTR-AuthToken: mcgi1hfofet0f1nhs3u3kjurah" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"\n'})}),"\n",(0,n.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,n.jsxs)(t.p,{children:["You can view the returned tables' definitions in the body of the response. By default, only the ",(0,n.jsx)(t.code,{children:'"information"'})," field is returned."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "offset": 10,\n  "limit": 1,\n  "total": 73,\n  "tables": [\n    {\n      "information": {\n        "dateCreated": "2001-01-02T20:47:07.000Z",\n        "dateModified": "2012-06-06T12:12:35.000Z",\n        "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n        "primaryLocale": "en-US",\n        "objectId": "8D67936811D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_EMPLOYEE"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"Sample Response Code: 200 (The tables' definitions are returned successfully.)"})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>l});var n=i(96540);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);