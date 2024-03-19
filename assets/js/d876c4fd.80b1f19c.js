"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8763],{74379:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(74848),s=a(28453);const r={title:"Retrieve the SQL statement of datasets in a document or dashboard instance",sidebar_label:"Retrieve the SQL statement of datasets in a document or dashboard instance",description:"You can retrieve the SQL statements of all datasets in a document or dashboard instance. In this workflow sample, a dashboard instance is used. However, the same workflow applies to a document instance."},i=void 0,o={id:"common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-dataset-sql",title:"Retrieve the SQL statement of datasets in a document or dashboard instance",description:"You can retrieve the SQL statements of all datasets in a document or dashboard instance. In this workflow sample, a dashboard instance is used. However, the same workflow applies to a document instance.",source:"@site/docs/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-dataset-sql.md",sourceDirName:"common-workflows/analytics/retrieve-sql-statements-and-query-details",slug:"/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-dataset-sql",permalink:"/rest-api-docs/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-dataset-sql",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-dataset-sql.md",tags:[],version:"current",lastUpdatedBy:"AugLychee",lastUpdatedAt:1710818077,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{title:"Retrieve the SQL statement of datasets in a document or dashboard instance",sidebar_label:"Retrieve the SQL statement of datasets in a document or dashboard instance",description:"You can retrieve the SQL statements of all datasets in a document or dashboard instance. In this workflow sample, a dashboard instance is used. However, the same workflow applies to a document instance."},sidebar:"tutorialSidebar",previous:{title:"Retrieve report or card SQL",permalink:"/rest-api-docs/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-report-or-card-sql"},next:{title:"Retrieve visualization query details",permalink:"/rest-api-docs/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-visualization-query-details"}},d={},c=[{value:"Create a dashboard instance",id:"create-a-dashboard-instance",level:2},{value:"Get the SQL statements of datasets in document or dashboard instances using <code>GET /api/dossiers/{id}/instances/{instanceId}/datasets/sqlView</code>",id:"get-the-sql-statements-of-datasets-in-document-or-dashboard-instances-using-get-apidossiersidinstancesinstanceiddatasetssqlview",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Available:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a,{since:"2021 Update 2"}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsxs)(t.p,{children:["You can try out this workflow at ",(0,n.jsx)(t.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-5d5e523d-6a02-45a1-9537-bc0d37f9c10c",children:"REST API Playground"}),"."]}),(0,n.jsxs)(t.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,n.jsx)(t.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,n.jsx)(t.p,{children:"You can retrieve the SQL statements of all datasets in a document or dashboard instance. In this workflow sample, a dashboard instance is used. However, the same workflow applies to a document instance."}),"\n",(0,n.jsxs)(t.p,{children:["You want to view the SQL statement of every dataset in the Cost Analysis Dashboard in the MicroStrategy Tutorial project. The object ID of the dashboard is ",(0,n.jsx)(t.code,{children:"D14F30994A4B97AD8EF6AEA5F589E30B"}),". The project ID is ",(0,n.jsx)(t.code,{children:"B7CA92F04B9FAE8D941C3E9B7E0CD754"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client."})}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsxs)(t.p,{children:["Get the authorization token needed to execute the request with ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,n.jsxs)(t.p,{children:["Get the project ID from ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesWebReportSQL",children:"DssXmlPrivilegesWebReportSQL"})," privilege is required to get the SQL view of a report instance."]})}),"\n",(0,n.jsx)(t.h2,{id:"create-a-dashboard-instance",children:"Create a dashboard instance"}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/createDossierInstance_2",children:"POST /api/dossiers/{id}/instances"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,n.jsx)(t.p,{children:"Sample Request Body: Empty"}),"\n",(0,n.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl -X POST "http://hostname:8080/MicroStrategyLibrary/api/dossiers/D14F30994A4B97AD8EF6AEA5F589E30B/instances" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,n.jsx)(t.p,{children:"Sample Response Code: 201 (A new dashboard instance is created successfully.)"}),"\n",(0,n.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "mid": "50454FC6DA48C798E8EDA28C46726F5B",\n  "status": 1\n}\n'})}),"\n",(0,n.jsxs)(t.h2,{id:"get-the-sql-statements-of-datasets-in-document-or-dashboard-instances-using-get-apidossiersidinstancesinstanceiddatasetssqlview",children:["Get the SQL statements of datasets in document or dashboard instances using ",(0,n.jsx)(t.code,{children:"GET /api/dossiers/{id}/instances/{instanceId}/datasets/sqlView"})]}),"\n",(0,n.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-MS-Changeset": "2A131744C91B4915B54A61FFDC528F62"\n'})}),"\n",(0,n.jsx)(t.p,{children:"Sample Request Body: Empty"}),"\n",(0,n.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl -X POST "http://hostname:8080/MicroStrategyLibrary/api/dossiers/D14F30994A4B97AD8EF6AEA5F589E30B/instances/50454FC6DA48C798E8EDA28C46726F5B/datasets/sqlView" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,n.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,n.jsx)(t.p,{children:"You can view the SQL statement of every dataset in the body of the response."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "datasets": [\n    {\n      "name": "New Dataset 1",\n      "id": "53789FDF1C4378D8EBDAD8AF41E0C95F",\n      "sqlStatement": "select\\tdistinct `pa11`.`MONTH_OF_YEAR`  `MONTH_OF_YEAR`,\\n\\t`a14`.`MONTH_OF_YEAR_NAME`  `MONTH_OF_YEAR_NAME0`,\\n\\t`pa11`.`Quarter_ID`  `Quarter_ID`,\\n\\t`a13`.`QUARTER_DESC`  `QUARTER_DESC0`,\\n\\t`a13`.`Year_ID`  `Year_ID`,\\n\\t`pa11`.`WJXBFS1`  `WJXBFS1`,\\n\\t`pa11`.`WJXBFS2`  `WJXBFS2`,\\n\\t`pa12`.`WJXBFS1`  `WJXBFS3`\\nfrom\\t(select\\t`a12`.`Quarter_ID`  `Quarter_ID`,\\n\\t\\t`a13`.`MONTH_OF_YEAR`  `MONTH_OF_YEAR`,\\n\\t\\tsum((`a11`.`QTY_SOLD` * `a11`.`UNIT_COST`))  `WJXBFS1`,\\n\\t\\tsum((`a11`.`QTY_SOLD` * `a11`.`DISCOUNT`))  `WJXBFS2`\\n\\tfrom\\t`ORDER_DETAIL`\\t`a11`\\n\\t\\tjoin\\t`LU_DAY`\\t`a12`\\n\\t\\t  on \\t(`a11`.`ORDER_DATE` = `a12`.`DAY_DATE`)\\n\\t\\tjoin\\t`LU_MONTH`\\t`a13`\\n\\t\\t  on \\t(`a12`.`MONTH_ID` = `a13`.`MONTH_ID`)\\n\\tgroup by\\t`a12`.`Quarter_ID`,\\n\\t\\t`a13`.`MONTH_OF_YEAR`\\n\\t)\\t`pa11`\\n\\tjoin\\t(select\\t`a13`.`Quarter_ID`  `Quarter_ID`,\\n\\t\\t`a12`.`MONTH_OF_YEAR`  `MONTH_OF_YEAR`,\\n\\t\\tsum(`a11`.`TOT_COST`)  `WJXBFS1`\\n\\tfrom\\t`STATE_SUBCATEG_MNTH_SLS`\\t`a11`\\n\\t\\tjoin\\t`LU_MONTH`\\t`a12`\\n\\t\\t  on \\t(`a11`.`MONTH_ID` = `a12`.`MONTH_ID`)\\n\\t\\tjoin\\t`LU_QUARTER`\\t`a13`\\n\\t\\t  on \\t(`a12`.`Quarter_ID` = `a13`.`LY_QUARTER_ID`)\\n\\tgroup by\\t`a13`.`Quarter_ID`,\\n\\t\\t`a12`.`MONTH_OF_YEAR`\\n\\t)\\t`pa12`\\n\\t  on \\t(`pa11`.`MONTH_OF_YEAR` = `pa12`.`MONTH_OF_YEAR` and \\n\\t`pa11`.`Quarter_ID` = `pa12`.`Quarter_ID`)\\n\\tjoin\\t`LU_QUARTER`\\t`a13`\\n\\t  on \\t(`pa11`.`Quarter_ID` = `a13`.`Quarter_ID`)\\n\\tjoin\\t`LU_MONTH_OF_YEAR`\\t`a14`\\n\\t  on \\t(`pa11`.`MONTH_OF_YEAR` = `a14`.`MONTH_OF_YEAR`)\\n\\n[Analytical engine calculation steps:\\n\\t1.  Calculate metric: <Cost Growth>\\n\\t2.  Perform cross-tabbing\\n]\\n"\n    },\n    {\n      "name": "New Dataset 1",\n      "id": "C50B684A7D4C9FA8D30F50B6BFCBA7EA",\n      "sqlStatement": "select\\tdistinct `pa12`.`CALL_CTR_ID`  `CALL_CTR_ID`,\\n\\t`a13`.`CENTER_NAME`  `CENTER_NAME`,\\n\\t`a13`.`COUNTRY_ID`  `COUNTRY_ID`,\\n\\t`a15`.`COUNTRY_NAME`  `COUNTRY_NAME0`,\\n\\t`a13`.`REGION_ID`  `REGION_ID`,\\n\\t`a14`.`REGION_NAME`  `REGION_NAME`,\\n\\t`pa12`.`WJXBFS1`  `WJXBFS1`\\n\\t`pa12`.`Revenue`  `Revenue`\\nfrom\\t(select\\t`a12`.`CALL_CTR_ID`  `CALL_CTR_ID`,\\n\\t\\tsum((`a11`.`TOT_DOLLAR_SALES` - `a11`.`TOT_COST`))  `WJXBFS1`,\\n\\t\\tsum(`a11`.`TOT_DOLLAR_SALES`)  `Revenue`\\n\\tfrom\\t`ITEM_EMP_SLS`\\t`a11`\\n\\t\\tjoin\\t`LU_EMPLOYEE`\\t`a12`\\n\\t\\t  on \\t(`a11`.`EMP_ID` = `a12`.`EMP_ID`)\\n\\tgroup by\\t`a12`.`CALL_CTR_ID`\\n\\t)\\t`pa12`\\n\\tjoin\\t`LU_CALL_CTR`\\t`a13`\\n\\t  on \\t(`pa12`.`CALL_CTR_ID` = `a13`.`CALL_CTR_ID`)\\n\\tjoin\\t`LU_REGION`\\t`a14`\\n\\t  on \\t(`a13`.`COUNTRY_ID` = `a14`.`COUNTRY_ID` and \\n\\t`a13`.`REGION_ID` = `a14`.`REGION_ID`)\\n\\tjoin\\t`LU_COUNTRY`\\t`a15`\\n\\t  on \\t(`a13`.`COUNTRY_ID` = `a15`.`COUNTRY_ID`)\\n\\n[Analytical engine calculation steps:\\n\\t1.  Calculate metric: <Profit Margin>\\n\\t2.  Calculate metric: <Profit Percent Growth>\\n\\t3.  Perform cross-tabbing\\n]\\n"\n    }\n  ]\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"Response Code: 200 (The SQL statement of the dashboard instance's dataset is returned successfully.)"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>o});var n=a(96540);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);