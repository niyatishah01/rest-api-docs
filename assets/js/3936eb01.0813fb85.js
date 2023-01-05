"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[4359],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},T={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,d=c["".concat(l,".").concat(u)]||c[u]||T[u]||o;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},685:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return T}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],s={title:"Retrieve applicable properties of a datamart",description:"This workflow sample demonstrates how to retrieve applicable properties of a datamart using REST APIs."},l=void 0,p={unversionedId:"common-workflows/manage-datamart-objects/retrieve-applicable-properties-of-a-datamart",id:"common-workflows/manage-datamart-objects/retrieve-applicable-properties-of-a-datamart",title:"Retrieve applicable properties of a datamart",description:"This workflow sample demonstrates how to retrieve applicable properties of a datamart using REST APIs.",source:"@site/docs/common-workflows/manage-datamart-objects/retrieve-applicable-properties-of-a-datamart.md",sourceDirName:"common-workflows/manage-datamart-objects",slug:"/common-workflows/manage-datamart-objects/retrieve-applicable-properties-of-a-datamart",permalink:"/rest-api-docs/common-workflows/manage-datamart-objects/retrieve-applicable-properties-of-a-datamart",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-datamart-objects/retrieve-applicable-properties-of-a-datamart.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1672953042,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{title:"Retrieve applicable properties of a datamart",description:"This workflow sample demonstrates how to retrieve applicable properties of a datamart using REST APIs."},sidebar:"tutorialSidebar",previous:{title:"Update the datamart definition",permalink:"/rest-api-docs/common-workflows/manage-datamart-objects/update-a-datamart-definition"},next:{title:"Manage report objects",permalink:"/rest-api-docs/common-workflows/manage-report-objects/"}},m={},T=[{value:"Retrieve applicable properties of a datamart",id:"retrieve-applicable-properties-of-a-datamart",level:2}],c={toc:T};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can use REST APIs to retrieve all the applicable properties of a datamart through the Modeling service. The workflow includes the following REST APIs requests."),(0,o.kt)("p",null,'The datamart object ID is 0DC7208C43B65E0DA10B26A6273F5067. The datamart is in the project "MicroStrategy Tutorial", and the project ID is B7CA92F04B9FAE8D941C3E9B7E0CD754.'),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence Server and creates a unique authorization token for the client."),(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("p",null,"The response can change based on the request parameters provided by the caller. Use the following parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Location"),(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"header"),(0,o.kt)("td",{parentName:"tr",align:null},"X-MSTR-authToken"),(0,o.kt)("td",{parentName:"tr",align:null},"The authorization token.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"header"),(0,o.kt)("td",{parentName:"tr",align:null},"X-MSTR-ProjectID"),(0,o.kt)("td",{parentName:"tr",align:null},"The ID of the project.")))),(0,o.kt)("h2",{id:"retrieve-applicable-properties-of-a-datamart"},"Retrieve applicable properties of a datamart"),(0,o.kt)("p",null,"Endpoint: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datamarts/get_api_model_datamarts__datamartId__applicableVldbProperties"},"GET/api/model/datamarts/{datamartId}/applicableVldbProperties")),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'GET' \\\n  'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/datamarts/0DC7208C43B65E0DA10B26A6273F5067/applicableVldbProperties' \\\n  -H 'accept: application/json' \\\n  -H 'X-MSTR-AuthToken: l9vig1id3rh2q42g0452pf1jiu' \\\n  -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\n")),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "propertyCount": 175,\n  "applicableProperties": {\n    "[VLDB Select].[Allow Cartesian Join]": {\n      "name": "Allow Cartesian Join",\n      "groupId": 1,\n      "groupName": "Joins",\n      "maxValue": 2,\n      "displayType": "options",\n      "displayName": "Cartesian Join Governing",\n      "showSqlPreview": true,\n      "options": [\n        {\n          "value": "Choosing this option keeps the backward compatibility with MicroStrategy 2019 where SQL queries are governed by \\"Cartesian Join Warning\\" VLDB setting.",\n          "sqlPreview": "OBSOLETE - Keep backward compatibility with MicroStrategy 2019."\n        },\n        {\n          "value": "Cancel execution of cartesian join for SQL, MDX, In-Memory queries.",\n          "sqlPreview": "<font face=\\"Times Roman\\" size=\\"3\\"><dt><b>Note: This VLDB setting only works for Data Engine Version 2020 or above. Please click <a href=\\"https://www2.microstrategy.com/producthelp/Current/UpgradeGuide/en-us/Content/analytical_engine_version.htm\\"  target=\\"_blank\\">here</a> to know how to change the Data Engine Version.</b></dt><br/><dt>Choosing this option disallows cross join execution for SQL, MDX and In-Memory queries.</dt><br/><dt>This option overrides existing \\"Cartesian Join Warning\\" VLDB setting.</dt></font>"\n        },\n        {\n          "value": "Execute cartesian join for SQL, MDX, In-Memory queries.",\n          "sqlPreview": "<font face=\\"Times Roman\\" size=\\"3\\"><dt><b>Note: This VLDB setting only works for Data Engine Version 2020 or above. Please click <a href=\\"https://www2.microstrategy.com/producthelp/Current/UpgradeGuide/en-us/Content/analytical_engine_version.htm\\"  target=\\"_blank\\">here</a> to know how to change the Data Engine Version.</b></dt><br/><dt>Choosing this option allows cross join execution for SQL, MDX and In-Memory queries.</dt><br/><dt>This option overrides existing \\"Cartesian Join Warning\\" VLDB setting.</dt></font>"\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 0\n    },\n    "[VLDB Select].[Base Table Join for Template]": {\n      "name": "Base Table Join for Template",\n      "groupId": 1,\n      "groupName": "Joins",\n      "maxValue": 1,\n      "displayType": "options",\n      "displayName": "Base Table Join for Template",\n      "showSqlPreview": true,\n      "options": [\n        {\n          "value": "Temp table join",\n          "sqlPreview": "\\n                \\n                    create table TEMP1 as\\n                    select a21.DEPARTMENT_NBR DEPARTMENT_NBR,\\n                    a21.MARKET_NBR MARKET_NBR,\\n                    sum(a21.COST_AMT) WJXBFS1\\n                    from COST_MARKET_DEP a21\\n                    join LOOKUP_DAY a22\\n                    on (a21.CUR_TRN_DT = a22.CUR_TRN_DT)\\n                    where a22.MONTH_ID = 199411\\n                    group by a21.DEPARTMENT_NBR, a21.MARKET_NBR\\n                    \\n                    create table TEMP2 as\\n                    select a21.DEPARTMENT_NBR DEPARTMENT_NBR,\\n                    a21.MARKET_NBR MARKET_NBR,\\n                    sum(a21.TOT_SLS_DLR) WJXBFS1,\\n                    sum(a21.TOT_SLS_DLR) WJXBFS2\\n                    from MARKET_DEPARTMENT a21\\n                    join LOOKUP_DAY a22\\n                    on (a21.CUR_TRN_DT = a22.CUR_TRN_DT)\\n                    where a22.MONTH_ID = 199411\\n                    group by a21.DEPARTMENT_NBR,\\n                    a21.MARKET_NBR\\n                    \\n                    select a21.MARKET_NBR MARKET_NBR,\\n                    a21.DEPARTMENT_NBR DEPARTMENT_NBR,\\n                    ((a22.WJXBFS1 - a21.WJXBFS1) / a22.WJXBFS2) WJXBFS1\\n                    from TEMP1 a21\\n                    join TEMP2 a22\\n                    on (a21.DEPARTMENT_NBR = a22.DEPARTMENT_NBR and\\n                    a21.MARKET_NBR = a22.MARKET_NBR)\\n                \\n            "\n        },\n        {\n          "value": "Fact table join",\n          "sqlPreview": "\\n                \\n                    select a21.MARKET_NBR MARKET_NBR,\\n                    a21.DEPARTMENT_NBR DEPARTMENT_NBR,\\n                    ((sum(a22.TOT_SLS_DLR) - sum(a21.COST_AMT)) / sum(a22.TOT_SLS_DLR)) WJXBFS1\\n                    from COST_MARKET_DEP a21\\n                    join MARKET_DEPARTMENT a22\\n                    on (a21.CUR_TRN_DT = a22.CUR_TRN_DT and\\n                    a21.DEPARTMENT_NBR = a22.DEPARTMENT_NBR and\\n                    a21.MARKET_NBR = a22.MARKET_NBR)\\n                    join LOOKUP_DAY a23\\n                    on (a21.CUR_TRN_DT = a23.CUR_TRN_DT)\\n                    where a23.MONTH_ID = 199411\\n                    group by a21.MARKET_NBR,\\n                    a21.DEPARTMENT_NBR\\n                \\n            "\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 0\n    },\n    "[VLDB Select].[Cross Join Order]": {\n      "name": "Cross Join Order",\n      "groupId": 1,\n      "groupName": "Joins",\n      "maxValue": 1,\n      "displayType": "options",\n      "displayName": "Cartesian Join Evaluation",\n      "showSqlPreview": true,\n      "options": [\n        {\n          "value": "Do not reevaluate cartesian joins.",\n          "sqlPreview": "\\n                \\n                    select a12.ATTR1_ID ATTR1_ID,\\n                    max(a12.ATTR1_DESC) ATTR1_DESC,\\n                    a13.ATTR2_ID ATTR2_ID,\\n                    max(a13.ATTR2_DESC) ATTR2_DESC,\\n                    count(a11.FACT_ID) METRIC\\n                    from FACTTABLE a11\\n                    cross join LU_TABLE1 a12\\n                    join LU_TABLE2 a13\\n                    on (a11.ATTR3_ID = a13.ATTR3_ID and\\n                    a12.ATTR1_ID = a13.ATTR1_CD)\\n                    group by a12.ATTR1_ID,\\n                    a13.ATTR2_ID\\n                \\n            "\n        },\n        {\n          "value": "Reevaluate cartesian joins.",\n          "sqlPreview": "\\n                \\n                    select a12.ATTR1_ID ATTR1_ID,\\n                    max(a12.ATTR1_DESC) ATTR1_DESC,\\n                    a13.ATTR2_ID ATTR2_ID,\\n                    max(a13.ATTR2_DESC) ATTR2_DESC,\\n                    count(a11.FACT_ID) METRIC\\n                    from FACTTABLE a11\\n                    join LU_TABLE2 a13\\n                    on (a11.ATTR3_ID = a13.ATTR3_ID)\\n                    join LU_TABLE1 a12\\n                    on (a12.ATTR1_ID = a13.ATTR1_CD)\\n                    group by a12.ATTR1_ID,\\n                    a13.ATTR2_ID\\n                \\n            "\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 0\n    },\n    // Here we omit some applicableProperties to shorten the response body\n    // You can send the request in practice to get a full list of the applicableProperties\n    "[VLDB Function].[Missing Display]": {\n      "name": "Missing Display",\n      "groupId": 15,\n      "groupName": "Null Display",\n      "displayType": "one_line_text_box",\n      "displayName": "Missing object null display",\n      "showSqlPreview": false,\n      "options": [],\n      "type": "string",\n      "defaultValue": ""\n    },\n    "[VLDB Function].[Null Display]": {\n      "name": "Null Display",\n      "groupId": 15,\n      "groupName": "Null Display",\n      "displayType": "n_text_box",\n      "displayName": "Null Display for Warehouse, Cross-tabulation",\n      "showSqlPreview": false,\n      "options": [\n        {\n          "value": "Null Display for Warehouse",\n          "sqlPreview": ""\n        },\n        {\n          "value": "Null Display for Cross-tabulation",\n          "sqlPreview": ""\n        }\n      ],\n      "type": "string",\n      "defaultValue": "",\n      "valueSeparator": ","\n    }\n  },\n  "sqlDynamicPreview": "[VLDB Report].[Report PreStatement 1]\\n[VLDB Report].[Report PreStatement 2]\\n[VLDB Report].[Report PreStatement 3]\\n[VLDB Report].[Report PreStatement 4]\\n[VLDB Report].[Report PreStatement 5]\\n\\n[VLDB Create].[Table PreStatement 1]\\n[VLDB Create].[Table PreStatement 2]\\n[VLDB Create].[Table PreStatement 3]\\n[VLDB Create].[Table PreStatement 4]\\n[VLDB Create].[Table PreStatement 5]\\n\\ncreate [VLDB Create].[Table Qualifier] table [VLDB Create].[Table Descriptor] [VLDB Create].[Table Prefix] TABLENAME [VLDB Create].[Table\\nOption] (ATTRIBUTE_COL1 VARCHAR(20) [VLDB Create].[Attribute ID Constraint] , FORM_COL2 CHAR(20), [Attribute non-ID Constraint] FACT_COL3\\nFLOAT) [VLDB Create].[Table Space]\\nprimary index (ATTRIBUTE_COL1, FORM_COL2) [VLDB Create].[Create PostString]\\n\\n[VLDB Insert].[Insert PreStatement 1]\\n[VLDB Insert].[Insert PreStatement 2]\\n[VLDB Insert].[Insert PreStatement 3]\\n[VLDB Insert].[Insert PreStatement 4]\\n[VLDB Insert].[Insert PreStatement 5]\\n\\n[VLDB Insert].[Bulk Insert String] insert into TABLENAME [VLDB Insert].[Insert Table Option] select [VLDB Select].[SQL Hint] A1.COL1 [VLDB\\nSyntax].[Mid Name Alias Pattern] COLUMN1ALIAS, A2.COL2 [VLDB Syntax].[Mid Name Alias Pattern] COLUMN2ALIAS, A3.COL3 [VLDB Syntax].[Mid Name\\nAlias Pattern] COLUMN3ALIAS from TABLE1 A1, TABLE2 A2, TABLE3 A3 where A1.COL1 = A2.COL1 and A2.COL4=A3.COL5 [VLDB Insert].[Post Insert\\nString]\\n\\n[VLDB Insert].[Insert MidStatement 1]\\n[VLDB Insert].[Insert MidStatement 2]\\n[VLDB Insert].[Insert MidStatement 3]\\n[VLDB Insert].[Insert MidStatement 4]\\n[VLDB Insert].[Insert MidStatement 5]\\n\\n[VLDB Insert].[Bulk Insert String] insert into TABLENAME [VLDB Insert].[Insert Table Option] select [VLDB Select].[SQL Hint] A1.COL1 [VLDB\\nSyntax].[Mid Name Alias Pattern] COLUMN1ALIAS, A2.COL2 [VLDB Syntax].[Mid Name Alias Pattern] COLUMN2ALIAS, A3.COL3 [VLDB Syntax].[Mid Name\\nAlias Pattern] COLUMN3ALIAS from TABLE4 A1, TABLE5 A2, TABLE6 A3 where A1.COL1 = A2.COL1 and A2.COL4=A3.COL5 [VLDB Insert].[Post Insert\\nString]\\n\\n[VLDB Insert].[Insert PostStatement 1]\\n[VLDB Insert].[Insert PostStatement 2]\\n[VLDB Insert].[Insert PostStatement 3]\\n[VLDB Insert].[Insert PostStatement 4]\\n[VLDB Insert].[Insert PostStatement 5]\\n\\ncreate [VLDB Create].[Index Qualifier] index [VLDB Create].[Index Prefix] IDX_TEMP1(STORE_ID, STORE_DESC) [VLDB Create].[Index PostString]\\n\\n[VLDB Create].[Table PostStatement 1]\\n[VLDB Create].[Table PostStatement 2]\\n[VLDB Create].[Table PostStatement 3]\\n[VLDB Create].[Table PostStatement 4]\\n[VLDB Create].[Table PostStatement 5]\\n\\nselect [VLDB Select].[SQL Hint] A1.STORE_NBR [VLDB Syntax].[Mid Name Alias Pattern] STORE_NBR, max(A1.STORE_DESC) [VLDB Syntax].[Mid Name\\nAlias Pattern] METRICALIAS from LOOKUP_STORE A1 A1.STORE_NBR = 1 group by A1.STORE_NBR [VLDB Select].[SELECT PostString]\\n\\n[VLDB Report].[Report PostStatement 1]\\n[VLDB Report].[Report PostStatement 2]\\n[VLDB Report].[Report PostStatement 3]\\n[VLDB Report].[Report PostStatement 4]\\n[VLDB Report].[Report PostStatement 5]\\n[Drop Table PreStatement 1]\\n\\ndrop table TABLENAME\\n\\n[Drop Table PostStatement 1]\\n[VLDB Drop].[Post Cleanup Statement 1]\\n[VLDB Drop].[Post Cleanup Statement 2]\\n[VLDB Drop].[Post Cleanup Statement 3]\\n[VLDB Drop].[Post Cleanup Statement 4]\\n[VLDB Drop].[Post Cleanup Statement 5]"\n}\n')),(0,o.kt)("p",null,"Sample Response Code: 200 (The list of applicable properties for the given datamart is returned successfully.)"))}u.isMDXComponent=!0}}]);