"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8849],{31512:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(74848),s=r(28453);const a={title:"Retrieve report or card SQL",sidebar_label:"Retrieve report or card SQL",description:"You can retrieve a report or card instance\u2019s SQL statement. In this workflow sample, a document with a report object is used. However, the same workflow applies to card objects."},o=void 0,i={id:"common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-report-or-card-sql",title:"Retrieve report or card SQL",description:"You can retrieve a report or card instance\u2019s SQL statement. In this workflow sample, a document with a report object is used. However, the same workflow applies to card objects.",source:"@site/docs/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-report-or-card-sql.md",sourceDirName:"common-workflows/analytics/retrieve-sql-statements-and-query-details",slug:"/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-report-or-card-sql",permalink:"/rest-api-docs/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-report-or-card-sql",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-report-or-card-sql.md",tags:[],version:"current",lastUpdatedBy:"AugLychee",lastUpdatedAt:1710818077,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{title:"Retrieve report or card SQL",sidebar_label:"Retrieve report or card SQL",description:"You can retrieve a report or card instance\u2019s SQL statement. In this workflow sample, a document with a report object is used. However, the same workflow applies to card objects."},sidebar:"tutorialSidebar",previous:{title:"Retrieve SQL statements and query details",permalink:"/rest-api-docs/common-workflows/analytics/retrieve-sql-statements-and-query-details/"},next:{title:"Retrieve the SQL statement of datasets in a document or dashboard instance",permalink:"/rest-api-docs/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-dataset-sql"}},c={},l=[{value:"Create a report instance",id:"create-a-report-instance",level:2},{value:"Get the SQL statement of the report instance using <code>GET /api/v2/reports/{id}/instances/{instanceId}/sqlView</code>",id:"get-the-sql-statement-of-the-report-instance-using-get-apiv2reportsidinstancesinstanceidsqlview",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Available:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r,{since:"2021 Update 2"}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsxs)(t.p,{children:["You can try out this workflow at ",(0,n.jsx)(t.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-c962ed90-f4e6-4934-8b65-4480bf45746e?ctx=documentation",children:"REST API Playground"}),"."]}),(0,n.jsxs)(t.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,n.jsx)(t.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,n.jsx)(t.p,{children:"You can retrieve a report or card instance\u2019s SQL statement. In this workflow sample, a document with a report object is used. However, the same workflow applies to card objects."}),"\n",(0,n.jsxs)(t.p,{children:["You want to get the definition of the SQL statement from the Cost Analysis Report in the MicroStrategy Tutorial project. The object ID of the report is ",(0,n.jsx)(t.code,{children:"CA8E4E2C6F4AC30B0DDE2195998B82DC"}),". The project ID is ",(0,n.jsx)(t.code,{children:"B7CA92F04B9FAE8D941C3E9B7E0CD754"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client."})}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsxs)(t.p,{children:["Get the authorization token needed to execute the request with ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,n.jsxs)(t.p,{children:["Get the project ID from ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesWebReportSQL",children:"DssXmlPrivilegesWebReportSQL"})," privilege is required to get the SQL view of a report instance."]})}),"\n",(0,n.jsx)(t.h2,{id:"create-a-report-instance",children:"Create a report instance"}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/createReportInstance_1",children:"POST /api/v2/reports/{id}/instances"})]}),"\n",(0,n.jsxs)(t.p,{children:["To retrieve the SQL statement of a report or card, it is ",(0,n.jsx)(t.em,{children:"not"})," necessary to execute the report to retrieve data. If you don\u2019t want to execute the report, thereby reducing the wait time for report instance creation, pass the ",(0,n.jsx)(t.code,{children:"\u201cresolve_prompts\u201d"})," value for the ",(0,n.jsx)(t.code,{children:"\u201cexecutionStage\u201d"})," query parameter."]}),"\n",(0,n.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,n.jsx)(t.p,{children:"Sample Request Body: Empty"}),"\n",(0,n.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl -X POST "http://hostname:8080/MicroStrategyLibrary/api/v2/reports/CA8E4E2C6F4AC30B0DDE2195998B82DC/instances?executionStage=resolve_prompts" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,n.jsx)(t.p,{children:"Sample Response Code: 200 (A new report instance is created successfully.)"}),"\n",(0,n.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "id": "CA8E4E2C6F4AC30B0DDE2195998B82DC",\n  "status": 1,\n  "instanceId": "DE90B87ED6423AED89CB00A12AE5B203"\n}\n'})}),"\n",(0,n.jsxs)(t.h2,{id:"get-the-sql-statement-of-the-report-instance-using-get-apiv2reportsidinstancesinstanceidsqlview",children:["Get the SQL statement of the report instance using ",(0,n.jsx)(t.code,{children:"GET /api/v2/reports/{id}/instances/{instanceId}/sqlView"})]}),"\n",(0,n.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-MS-Changeset": "2A131744C91B4915B54A61FFDC528F62"\n'})}),"\n",(0,n.jsx)(t.p,{children:"Sample Request Body: Empty"}),"\n",(0,n.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl -X GET "http://hostname:8080/MicroStrategyLibrary/api/v2/reports/CA8E4E2C6F4AC30B0DDE2195998B82DC/instances/DE90B87ED6423AED89CB00A12AE5B203/sqlView" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,n.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,n.jsx)(t.p,{children:"You can view the SQL statement in the body of the response."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "sqlStatement": "select\\t`a12`.`Year_ID`  `Year_ID`,\\n\\t`a12`.`MONTH_OF_YEAR`  `MONTH_OF_YEAR`,\\n\\tmax(`a14`.`MONTH_OF_YEAR_NAME`)  `MONTH_OF_YEAR_NAME0`,\\n\\t`a13`.`COUNTRY_ID`  `COUNTRY_ID`,\\n\\tmax(`a16`.`COUNTRY_NAME`)  `COUNTRY_NAME0`,\\n\\t`a13`.`REGION_ID`  `REGION_ID`,\\n\\tmax(`a15`.`REGION_NAME`)  `REGION_NAME`,\\n\\tsum(`a11`.`TOT_DOLLAR_SALES`)  `Revenue`,\\n\\tsum(`a11`.`TOT_COST`)  `WJXBFS1`\\nfrom\\t`SUBCATEG_MNTH_CTR_SLS`\\t`a11`\\n\\tjoin\\t`LU_MONTH`\\t`a12`\\n\\t  on \\t(`a11`.`MONTH_ID` = `a12`.`MONTH_ID`)\\n\\tjoin\\t`LU_CALL_CTR`\\t`a13`\\n\\t  on \\t(`a11`.`CALL_CTR_ID` = `a13`.`CALL_CTR_ID`)\\n\\tjoin\\t`LU_MONTH_OF_YEAR`\\t`a14`\\n\\t  on \\t(`a12`.`MONTH_OF_YEAR` = `a14`.`MONTH_OF_YEAR`)\\n\\tjoin\\t`LU_REGION`\\t`a15`\\n\\t  on \\t(`a13`.`COUNTRY_ID` = `a15`.`COUNTRY_ID` and \\n\\t`a13`.`REGION_ID` = `a15`.`REGION_ID`)\\n\\tjoin\\t`LU_COUNTRY`\\t`a16`\\n\\t  on \\t(`a13`.`COUNTRY_ID` = `a16`.`COUNTRY_ID`)\\ngroup by\\t`a12`.`Year_ID`,\\n\\t`a12`.`MONTH_OF_YEAR`,\\n\\t`a13`.`COUNTRY_ID`,\\n\\t`a13`.`REGION_ID`\\n\\n[Analytical engine calculation steps:\\n\\t1.  Perform cross-tabbing\\n]\\n"\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"Response Code: 200 (The SQL statement of the report instance is returned successfully.)"})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var n=r(96540);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);