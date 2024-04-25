"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5319],{87932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>T,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(74848),a=n(28453);const o={title:"Retrieve applicable properties of an incremental refresh report",sidebar_label:"Retrieve an IRR's applicable properties",description:"This workflow sample demonstrates how to retrieve applicable properties of an incremental refresh report using REST APIs."},i=void 0,s={id:"common-workflows/analytics/manage-reports/manage-incremental-refresh-report/retrieve-applicable-properties-of-an-incremental-refresh-report",title:"Retrieve applicable properties of an incremental refresh report",description:"This workflow sample demonstrates how to retrieve applicable properties of an incremental refresh report using REST APIs.",source:"@site/docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/retrieve-applicable-properties-of-an-incremental-refresh-report.md",sourceDirName:"common-workflows/analytics/manage-reports/manage-incremental-refresh-report",slug:"/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/retrieve-applicable-properties-of-an-incremental-refresh-report",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/retrieve-applicable-properties-of-an-incremental-refresh-report",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/retrieve-applicable-properties-of-an-incremental-refresh-report.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1714063612,formattedLastUpdatedAt:"Apr 25, 2024",frontMatter:{title:"Retrieve applicable properties of an incremental refresh report",sidebar_label:"Retrieve an IRR's applicable properties",description:"This workflow sample demonstrates how to retrieve applicable properties of an incremental refresh report using REST APIs."},sidebar:"tutorialSidebar",previous:{title:"Update IRR advanced properties",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/update-irr-advanced-properties"},next:{title:"Manage documents",permalink:"/rest-api-docs/common-workflows/analytics/manage-documents/"}},l={},p=[{value:"Retrieve applicable properties of an incremental refresh report",id:"retrieve-applicable-properties-of-an-incremental-refresh-report",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components},{Available:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{since:"2021 Update 6"}),"\n",(0,r.jsx)(t.p,{children:"You can use REST APIs to retrieve all the applicable properties of an incremental refresh report through the Modeling service. The workflow includes the following REST APIs requests."}),"\n",(0,r.jsx)(t.p,{children:'The incremental refresh report object ID is 01234567890123456789012345678912. The incremental refresh report is in the project "MicroStrategy Tutorial", and the project ID is B7CA92F04B9FAE8D941C3E9B7E0CD754.'}),"\n",(0,r.jsxs)(t.admonition,{type:"info",children:[(0,r.jsx)(t.p,{children:"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence Server and creates a unique authorization token for the client."}),(0,r.jsxs)(t.p,{children:["Get the authorization token needed to execute the request with ",(0,r.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,r.jsxs)(t.p,{children:["Get the project ID from ",(0,r.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,r.jsx)(t.p,{children:"The response can change based on the request parameters provided by the caller. Use the following parameters:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Location"}),(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"header"}),(0,r.jsx)(t.td,{children:"X-MSTR-authToken"}),(0,r.jsx)(t.td,{children:"The authorization token."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"header"}),(0,r.jsx)(t.td,{children:"X-MSTR-ProjectID"}),(0,r.jsx)(t.td,{children:"The project ID."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"retrieve-applicable-properties-of-an-incremental-refresh-report",children:"Retrieve applicable properties of an incremental refresh report"}),"\n",(0,r.jsxs)(t.p,{children:["Endpoint: ",(0,r.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/ms-getIncrementalRefreshVldbProperties",children:"GET /api/model/incrementalRefresh/{irrId}/applicableVldbProperties"})]}),"\n",(0,r.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/incrementalRefresh/01234567890123456789012345678912/applicableVldbProperties' \\\n  -H 'accept: application/json' \\\n  -H 'X-MSTR-AuthToken: l9vig1id3rh2q42g0452pf1jiu' \\\n  -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\n"})}),"\n",(0,r.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "propertyCount": 5,\n  "applicableProperties": {\n    "[VLDB Select].[Allow Cartesian Join]": {\n      "name": "Allow Cartesian Join",\n      "groupId": 1,\n      "groupName": "Joins",\n      "maxValue": 2,\n      "displayType": "options",\n      "displayName": "Cartesian Join Governing",\n      "showSqlPreview": true,\n      "options": [\n        {\n          "value": "Choosing this option keeps the backward compatibility with MicroStrategy 2019 where SQL queries are governed by \\"Cartesian Join Warning\\" VLDB setting.",\n          "sqlPreview": "OBSOLETE - Keep backward compatibility with MicroStrategy 2019."\n        },\n        {\n          "value": "Cancel execution of cartesian join for SQL, MDX, In-Memory queries.",\n          "sqlPreview": "<font face=\\"Times Roman\\" size=\\"3\\"><dt><b>Note: This VLDB setting only works for Data Engine Version 2020 or above. Please click <a href=\\"https://www2.microstrategy.com/producthelp/Current/UpgradeGuide/en-us/Content/analytical_engine_version.htm\\"  target=\\"_blank\\">here</a> to know how to change the Data Engine Version.</b></dt><br/><dt>Choosing this option disallows cross join execution for SQL, MDX and In-Memory queries.</dt><br/><dt>This option overrides existing \\"Cartesian Join Warning\\" VLDB setting.</dt></font>"\n        },\n        {\n          "value": "Execute cartesian join for SQL, MDX, In-Memory queries.",\n          "sqlPreview": "<font face=\\"Times Roman\\" size=\\"3\\"><dt><b>Note: This VLDB setting only works for Data Engine Version 2020 or above. Please click <a href=\\"https://www2.microstrategy.com/producthelp/Current/UpgradeGuide/en-us/Content/analytical_engine_version.htm\\"  target=\\"_blank\\">here</a> to know how to change the Data Engine Version.</b></dt><br/><dt>Choosing this option allows cross join execution for SQL, MDX and In-Memory queries.</dt><br/><dt>This option overrides existing \\"Cartesian Join Warning\\" VLDB setting.</dt></font>"\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 0\n    },\n    "[VLDB Select].[Base Table Join for Template]": {\n      "name": "Base Table Join for Template",\n      "groupId": 1,\n      "groupName": "Joins",\n      "maxValue": 1,\n      "displayType": "options",\n      "displayName": "Base Table Join for Template",\n      "showSqlPreview": true,\n      "options": [\n        {\n          "value": "Temp table join",\n          "sqlPreview": "\\n                \\n                    create table TEMP1 as\\n                    select a21.DEPARTMENT_NBR DEPARTMENT_NBR,\\n                    a21.MARKET_NBR MARKET_NBR,\\n                    sum(a21.COST_AMT) WJXBFS1\\n                    from COST_MARKET_DEP a21\\n                    join LOOKUP_DAY a22\\n                    on (a21.CUR_TRN_DT = a22.CUR_TRN_DT)\\n                    where a22.MONTH_ID = 199411\\n                    group by a21.DEPARTMENT_NBR, a21.MARKET_NBR\\n                    \\n                    create table TEMP2 as\\n                    select a21.DEPARTMENT_NBR DEPARTMENT_NBR,\\n                    a21.MARKET_NBR MARKET_NBR,\\n                    sum(a21.TOT_SLS_DLR) WJXBFS1,\\n                    sum(a21.TOT_SLS_DLR) WJXBFS2\\n                    from MARKET_DEPARTMENT a21\\n                    join LOOKUP_DAY a22\\n                    on (a21.CUR_TRN_DT = a22.CUR_TRN_DT)\\n                    where a22.MONTH_ID = 199411\\n                    group by a21.DEPARTMENT_NBR,\\n                    a21.MARKET_NBR\\n                    \\n                    select a21.MARKET_NBR MARKET_NBR,\\n                    a21.DEPARTMENT_NBR DEPARTMENT_NBR,\\n                    ((a22.WJXBFS1 - a21.WJXBFS1) / a22.WJXBFS2) WJXBFS1\\n                    from TEMP1 a21\\n                    join TEMP2 a22\\n                    on (a21.DEPARTMENT_NBR = a22.DEPARTMENT_NBR and\\n                    a21.MARKET_NBR = a22.MARKET_NBR)\\n                \\n            "\n        },\n        {\n          "value": "Fact table join",\n          "sqlPreview": "\\n                \\n                    select a21.MARKET_NBR MARKET_NBR,\\n                    a21.DEPARTMENT_NBR DEPARTMENT_NBR,\\n                    ((sum(a22.TOT_SLS_DLR) - sum(a21.COST_AMT)) / sum(a22.TOT_SLS_DLR)) WJXBFS1\\n                    from COST_MARKET_DEP a21\\n                    join MARKET_DEPARTMENT a22\\n                    on (a21.CUR_TRN_DT = a22.CUR_TRN_DT and\\n                    a21.DEPARTMENT_NBR = a22.DEPARTMENT_NBR and\\n                    a21.MARKET_NBR = a22.MARKET_NBR)\\n                    join LOOKUP_DAY a23\\n                    on (a21.CUR_TRN_DT = a23.CUR_TRN_DT)\\n                    where a23.MONTH_ID = 199411\\n                    group by a21.MARKET_NBR,\\n                    a21.DEPARTMENT_NBR\\n                \\n            "\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 0\n    },\n    "[VLDB Select].[Cross Join Order]": {\n      "name": "Cross Join Order",\n      "groupId": 1,\n      "groupName": "Joins",\n      "maxValue": 1,\n      "displayType": "options",\n      "displayName": "Cartesian Join Evaluation",\n      "showSqlPreview": true,\n      "options": [\n        {\n          "value": "Do not reevaluate cartesian joins.",\n          "sqlPreview": "\\n                \\n                    select a12.ATTR1_ID ATTR1_ID,\\n                    max(a12.ATTR1_DESC) ATTR1_DESC,\\n                    a13.ATTR2_ID ATTR2_ID,\\n                    max(a13.ATTR2_DESC) ATTR2_DESC,\\n                    count(a11.FACT_ID) METRIC\\n                    from FACTTABLE a11\\n                    cross join LU_TABLE1 a12\\n                    join LU_TABLE2 a13\\n                    on (a11.ATTR3_ID = a13.ATTR3_ID and\\n                    a12.ATTR1_ID = a13.ATTR1_CD)\\n                    group by a12.ATTR1_ID,\\n                    a13.ATTR2_ID\\n                \\n            "\n        },\n        {\n          "value": "Reevaluate cartesian joins.",\n          "sqlPreview": "\\n                \\n                    select a12.ATTR1_ID ATTR1_ID,\\n                    max(a12.ATTR1_DESC) ATTR1_DESC,\\n                    a13.ATTR2_ID ATTR2_ID,\\n                    max(a13.ATTR2_DESC) ATTR2_DESC,\\n                    count(a11.FACT_ID) METRIC\\n                    from FACTTABLE a11\\n                    join LU_TABLE2 a13\\n                    on (a11.ATTR3_ID = a13.ATTR3_ID)\\n                    join LU_TABLE1 a12\\n                    on (a12.ATTR1_ID = a13.ATTR1_CD)\\n                    group by a12.ATTR1_ID,\\n                    a13.ATTR2_ID\\n                \\n            "\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 0\n    },\n    "[VLDB Select].[DSS Star Join]": {\n      "name": "DSS Star Join",\n      "groupId": 1,\n      "groupName": "Joins",\n      "maxValue": 1,\n      "displayType": "options",\n      "displayName": "DSS Star Join",\n      "showSqlPreview": true,\n      "options": [\n        {\n          "value": "No star join",\n          "sqlPreview": "\\n                \\n                    select a21.CUR_TRN_DT CUR_TRN_DT,\\n                    a22.STORE_NBR STORE_NBR,\\n                    max(a22.STORE_DESC) STORE_DESC,\\n                    sum(a21.REG_SLS_DLR) WJXBFS1\\n                    from STORE_DIVISION a21\\n                    join LOOKUP_STORE a22\\n                    on (a21.STORE_NBR = a22.STORE_NBR)\\n                    group by a21.CUR_TRN_DT,\\n                    a22.STORE_NBR\\n                \\n            "\n        },\n        {\n          "value": "Partial star join",\n          "sqlPreview": "\\n                \\n                    select a23.STORE_NBR STORE_NBR,\\n                    max(a23.STORE_DESC) STORE_DESC,\\n                    a22.CUR_TRN_DT CUR_TRN_DT,\\n                    sum(a21.REG_SLS_DLR) WJXBFS1\\n                    from STORE_DIVISION a21,\\n                    LOOKUP_DAY a22,\\n                    LOOKUP_STORE a23\\n                    where a21.CUR_TRN_DT = a22.CUR_TRN_DT and\\n                    a21.STORE_NBR = a23.STORE_NBR\\n                    group by a23.STORE_NBR,\\n                    a22.CUR_TRN_DT\\n                \\n            "\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 0\n    },\n    "[VLDB Select].[Downward Outer Join]": {\n      "name": "Downward Outer Join",\n      "groupId": 1,\n      "groupName": "Joins",\n      "maxValue": 4,\n      "displayType": "options",\n      "displayName": "Downward Outer Join Option",\n      "showSqlPreview": true,\n      "options": [\n        {\n          "value": "Do not preserve all the rows for metrics higher than template level",\n          "sqlPreview": "This is the behavior of SQL Engine in Version 6.x and earlier. The outer join flag on metrics higher than template level will be ignored."\n        },\n        {\n          "value": "Preserve all the rows for metrics higher than template level without report filter",\n          "sqlPreview": "For metrics that are at higher level than template level, this setting value will do downward adjustment in order to partition outer join (keep all the rows), without applying report filter"\n        },\n        {\n          "value": "Preserve all the rows for metrics higher than template level with report filter",\n          "sqlPreview": "For metrics that are at higher level than template level, this setting value will do downward adjustment in order to partition outer join, (keep all the rows) applying report filter"\n        },\n        {\n          "value": "Do not do downward outer join for database that support full outer join",\n          "sqlPreview": "For databases that support full outer join, preserve all the rows for metrics higher than template level without doing downward join pass. Instead, do outer join directly in the final pass. Do not use this option for database that does not support full outer join."\n        },\n        {\n          "value": "Do not do downward outer join for database that support full outer join, and order temp tables in last pass by dimensionality",\n          "sqlPreview": "For databases that support full outer join, preserve all the rows for metrics higher than template level without doing downward join pass. Instead, do outer join directly in the final pass. Do not use this option for database that does not support full outer join.The tables in the last pass will be ordered according to the dimensionality, with lowest first."\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 0\n    }\n  },\n  "sqlDynamicPreview": "[VLDB Report].[Report PreStatement 1]\\n[VLDB Report].[Report PreStatement 2]\\n[VLDB Report].[Report PreStatement 3]\\n[VLDB Report].[Report PreStatement 4]\\n[VLDB Report].[Report PreStatement 5]\\n\\n[VLDB Create].[Table PreStatement 1]\\n[VLDB Create].[Table PreStatement 2]\\n[VLDB Create].[Table PreStatement 3]\\n[VLDB Create].[Table PreStatement 4]\\n[VLDB Create].[Table PreStatement 5]\\n\\ncreate [VLDB Create].[Table Qualifier] table [VLDB Create].[Table Descriptor] [VLDB Create].[Table Prefix] TABLENAME [VLDB Create].[Table\\nOption] (ATTRIBUTE_COL1 VARCHAR(20) [VLDB Create].[Attribute ID Constraint] , FORM_COL2 CHAR(20), [Attribute non-ID Constraint] FACT_COL3\\nFLOAT) [VLDB Create].[Table Space]\\nprimary index (ATTRIBUTE_COL1, FORM_COL2) [VLDB Create].[Create PostString]\\n\\n[VLDB Insert].[Insert PreStatement 1]\\n[VLDB Insert].[Insert PreStatement 2]\\n[VLDB Insert].[Insert PreStatement 3]\\n[VLDB Insert].[Insert PreStatement 4]\\n[VLDB Insert].[Insert PreStatement 5]\\n\\n[VLDB Insert].[Bulk Insert String] insert into TABLENAME [VLDB Insert].[Insert Table Option] select [VLDB Select].[SQL Hint] A1.COL1 [VLDB\\nSyntax].[Mid Name Alias Pattern] COLUMN1ALIAS, A2.COL2 [VLDB Syntax].[Mid Name Alias Pattern] COLUMN2ALIAS, A3.COL3 [VLDB Syntax].[Mid Name\\nAlias Pattern] COLUMN3ALIAS from TABLE1 A1, TABLE2 A2, TABLE3 A3 where A1.COL1 = A2.COL1 and A2.COL4=A3.COL5 [VLDB Insert].[Post Insert\\nString]\\n\\n[VLDB Insert].[Insert MidStatement 1]\\n[VLDB Insert].[Insert MidStatement 2]\\n[VLDB Insert].[Insert MidStatement 3]\\n[VLDB Insert].[Insert MidStatement 4]\\n[VLDB Insert].[Insert MidStatement 5]\\n\\n[VLDB Insert].[Bulk Insert String] insert into TABLENAME [VLDB Insert].[Insert Table Option] select [VLDB Select].[SQL Hint] A1.COL1 [VLDB\\nSyntax].[Mid Name Alias Pattern] COLUMN1ALIAS, A2.COL2 [VLDB Syntax].[Mid Name Alias Pattern] COLUMN2ALIAS, A3.COL3 [VLDB Syntax].[Mid Name\\nAlias Pattern] COLUMN3ALIAS from TABLE4 A1, TABLE5 A2, TABLE6 A3 where A1.COL1 = A2.COL1 and A2.COL4=A3.COL5 [VLDB Insert].[Post Insert\\nString]\\n\\n[VLDB Insert].[Insert PostStatement 1]\\n[VLDB Insert].[Insert PostStatement 2]\\n[VLDB Insert].[Insert PostStatement 3]\\n[VLDB Insert].[Insert PostStatement 4]\\n[VLDB Insert].[Insert PostStatement 5]\\n\\ncreate [VLDB Create].[Index Qualifier] index [VLDB Create].[Index Prefix] IDX_TEMP1(STORE_ID, STORE_DESC) [VLDB Create].[Index PostString]\\n\\n[VLDB Create].[Table PostStatement 1]\\n[VLDB Create].[Table PostStatement 2]\\n[VLDB Create].[Table PostStatement 3]\\n[VLDB Create].[Table PostStatement 4]\\n[VLDB Create].[Table PostStatement 5]\\n\\nselect [VLDB Select].[SQL Hint] A1.STORE_NBR [VLDB Syntax].[Mid Name Alias Pattern] STORE_NBR, max(A1.STORE_DESC) [VLDB Syntax].[Mid Name\\nAlias Pattern] METRICALIAS from LOOKUP_STORE A1 A1.STORE_NBR = 1 group by A1.STORE_NBR [VLDB Select].[SELECT PostString]\\n\\n[VLDB Report].[Report PostStatement 1]\\n[VLDB Report].[Report PostStatement 2]\\n[VLDB Report].[Report PostStatement 3]\\n[VLDB Report].[Report PostStatement 4]\\n[VLDB Report].[Report PostStatement 5]\\n[Drop Table PreStatement 1]\\n\\ndrop table TABLENAME\\n\\n[Drop Table PostStatement 1]\\n[VLDB Drop].[Post Cleanup Statement 1]\\n[VLDB Drop].[Post Cleanup Statement 2]\\n[VLDB Drop].[Post Cleanup Statement 3]\\n[VLDB Drop].[Post Cleanup Statement 4]\\n[VLDB Drop].[Post Cleanup Statement 5]"\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"Sample Response Code: 200 (The list of applicable properties for the given incremental refresh report is returned successfully.)"})]})}function T(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var r=n(96540);const a={},o=r.createContext(a);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);