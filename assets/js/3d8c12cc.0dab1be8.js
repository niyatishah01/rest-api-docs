"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1882],{19089:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=t(74848),i=t(28453);const s={title:"Update the incremental refresh report definition",sidebar_label:"Update an IRR definition",description:"This workflow sample demonstrates how to update an Incremental Refresh Report definition through the Modeling service."},o=void 0,a={id:"common-workflows/analytics/manage-reports/manage-incremental-refresh-report/update-an-irr-definition",title:"Update the incremental refresh report definition",description:"This workflow sample demonstrates how to update an Incremental Refresh Report definition through the Modeling service.",source:"@site/docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/update-an-irr-definition.md",sourceDirName:"common-workflows/analytics/manage-reports/manage-incremental-refresh-report",slug:"/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/update-an-irr-definition",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/update-an-irr-definition",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/update-an-irr-definition.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1714063612,formattedLastUpdatedAt:"Apr 25, 2024",frontMatter:{title:"Update the incremental refresh report definition",sidebar_label:"Update an IRR definition",description:"This workflow sample demonstrates how to update an Incremental Refresh Report definition through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create an IRR",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/create-an-irr"},next:{title:"Retrieve an IRR definition with advanced properties",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-incremental-refresh-report/retrieve-an-irr-definition-with-advanced-properties"}},c={},l=[{value:"Update the incremental refresh report using PUT /api/model/incrementalRefresh/{incrementalRefreshReportId}",id:"update-the-incremental-refresh-report-using-put-apimodelincrementalrefreshincrementalrefreshreportid",level:2},{value:"Update the FFSQL incremental refresh report using PUT /api/model/incrementalRefresh/{incrementalRefreshReportId}",id:"update-the-ffsql-incremental-refresh-report-using-put-apimodelincrementalrefreshincrementalrefreshreportid",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{Available:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{since:"2021 Update 6"}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["You can try out this workflow at ",(0,r.jsx)(n.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-54f5b582-05ac-4f2d-88f9-98f36dd8373c?ctx=documentation",children:"REST API Playground"}),"."]}),(0,r.jsxs)(n.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,r.jsx)(n.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,r.jsx)(n.p,{children:"This workflow sample demonstrates how to update an Incremental Refresh Report definition through the Modeling service."}),"\n",(0,r.jsxs)(n.p,{children:["You want to update the definition of the ",(0,r.jsx)(n.code,{children:"YearInList_Insert"})," Incremental Refresh Report with the changes listed below. The object ID is ",(0,r.jsx)(n.code,{children:"5A7282CC41E6C9B5DE2772A16B073B21"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Modify the destination folder to another one."}),"\n",(0,r.jsx)(n.li,{children:"Change the target cube to another one."}),"\n",(0,r.jsx)(n.li,{children:"Modify the element list of the filter."}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client."}),(0,r.jsxs)(n.p,{children:["Get the authorization token needed to execute the request with ",(0,r.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,r.jsxs)(n.p,{children:["Get the project ID from ",(0,r.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,r.jsxs)(n.h2,{id:"update-the-incremental-refresh-report-using-put-apimodelincrementalrefreshincrementalrefreshreportid",children:["Update the incremental refresh report using ",(0,r.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/ms-putIncrementalRefreshReport",children:"PUT /api/model/incrementalRefresh/{incrementalRefreshReportId}"})]}),"\n",(0,r.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "b4e54r86h5aja3inksrklee4d7"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n"Content-Type": "application/json"\n'})}),"\n",(0,r.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n    "name": "YearInList_Insert"\n  },\n  "targetCube": {\n    "objectId": "1154C0014435FB4E3C69ABA7BDC8E8D8",\n    "subType": "report_cube",\n    "name": "IC02_Year+Country+Category+3Metrics"\n  },\n  "filter": {\n    "text": "Year <> 2014",\n    "tree": {\n      "type": "predicate_element_list",\n      "predicateId": "DFADE548DBD144079C2F3AFE7CDE3AE1",\n      "predicateTree": {\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "elements": [\n          {\n            "display": "2014",\n            "elementId": "h2014"\n          }\n        ],\n        "function": "not_in"\n      }\n    },\n    "tokens": [\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "%",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Year",\n        "type": "object_reference",\n        "target": {\n          "dateCreated": "2001-01-02T20:48:10.000Z",\n          "dateModified": "2022-05-09T09:37:11.000Z",\n          "versionId": "05BB3D284698B0542866C6A5DBA355BC",\n          "primaryLocale": "en-US",\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "[Not In]",\n        "type": "function",\n        "target": {\n          "dateCreated": "1900-01-01T00:00:00.000Z",\n          "dateModified": "2021-02-26T03:18:34.000Z",\n          "versionId": "A3808F5B4E6620E24102E48D99550BB2",\n          "primaryLocale": "en-US",\n          "objectId": "8107C348DD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": "Not In",\n          "description": "Returns TRUE if Arg1 is not in Arg2."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "{Year=2014}",\n        "type": "elements"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "",\n        "type": "end_of_text"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X PUT "http://10.23.36.118:8080/MicroStrategyLibrary/api/model/incrementalRefresh/5A7282CC41E6C9B5DE2772A16B073B21" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: k2o767js136lqdr8fm6j6kbm9o" \\\n-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" -\\\nH "Content-Type: application/json" \\\n-d \'{"information":{"destinationFolderId":"8A1831FF494F528D02A4A8BF5FB73459","name":"YearInList_Insert_test"},"targetCube":{"objectId":"1154C0014435FB4E3C69ABA7BDC8E8D8","subType":"report_cube","name":"Copy of IC01_Year+Country+Category+3Metrics"},"filter":{"text":"Year <> 2014","tree":{"type":"predicate_element_list","predicateId":"DFADE548DBD144079C2F3AFE7CDE3AE1","predicateTree":{"attribute":{"objectId":"8D679D5111D3E4981000E787EC6DE8A4","subType":"attribute","name":"Year"},"elements":[{"display":"2014","elementId":"h2014"}],"function":"not_in"}},"tokens":[{"level":"resolved","state":"initial","value":"%","type":"character"},{"level":"resolved","state":"initial","value":"Year","type":"object_reference","target":{"dateCreated":"2001-01-02T20:48:10.000Z","dateModified":"2022-05-09T09:37:11.000Z","versionId":"05BB3D284698B0542866C6A5DBA355BC","primaryLocale":"en-US","objectId":"8D679D5111D3E4981000E787EC6DE8A4","subType":"attribute","name":"Year"}},{"level":"resolved","state":"initial","value":"[Not In]","type":"function","target":{"dateCreated":"1900-01-01T00:00:00.000Z","dateModified":"2021-02-26T03:18:34.000Z","versionId":"A3808F5B4E6620E24102E48D99550BB2","primaryLocale":"en-US","objectId":"8107C348DD9911D3B98100C04F2233EA","subType":"function","name":"Not In","description":"Returns TRUE if Arg1 is not in Arg2."}},{"level":"resolved","state":"initial","value":"{Year=2014}","type":"elements"},{"level":"resolved","state":"initial","value":"","type":"end_of_text"}]}}\'\n'})}),"\n",(0,r.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,r.jsx)(n.p,{children:"You can view the updated Incremental Refresh Report definition in the body of the response."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2022-06-08T07:41:37.939Z",\n    "dateModified": "2022-06-08T08:12:30.611Z",\n    "versionId": "50C2A0804F78CA721EA8A7B408C36FEA",\n    "primaryLocale": "en-US",\n    "objectId": "5A7282CC41E6C9B5DE2772A16B073B21",\n    "subType": "report_increment_refresh",\n    "name": "YearInList_Insert_test",\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459"\n  },\n  "targetCube": {\n    "objectId": "1154C0014435FB4E3C69ABA7BDC8E8D8",\n    "subType": "report_cube",\n    "name": "Copy of IC01_Year+Country+Category+3Metrics"\n  },\n  "incrementType": "filter",\n  "refreshType": "insert",\n  "filter": {\n    "text": "Year <> 2014",\n    "tree": {\n      "type": "predicate_element_list",\n      "predicateId": "99D9C22039A54FA787791A297AB4B534",\n      "predicateTree": {\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "elements": [\n          {\n            "display": "2014",\n            "elementId": "h2014"\n          }\n        ],\n        "function": "not_in"\n      }\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Response Code: 200 (The incremental refresh report's definition is updated successfully.)"}),"\n",(0,r.jsx)(n.p,{children:"The model for the definition of the Incremental Refresh Report can be represented with the following fields."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"subType"})," cannot be modified through REST API."]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"information"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"name"})," (",(0,r.jsx)(n.code,{children:"String"}),") - Name of the IRR. This is the most user-friendly value that can be used to identify the IRR."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"destinationFolderId"})," (",(0,r.jsx)(n.code,{children:"String"}),") - Folder ID where the new IRR is saved."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"targetCube"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"objectID"})," (",(0,r.jsx)(n.code,{children:"String"}),") - The object ID of the target cube that the IRR is built on."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"name"})," (",(0,r.jsx)(n.code,{children:"String"}),") - The name of the target cube."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"incrementType"})," (",(0,r.jsx)(n.code,{children:"String"}),") - The incremental type for IRR, which can only be a filter and report."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"refreshType"})," (",(0,r.jsx)(n.code,{children:"String"}),") - The refresh type for IRR, which can only be ",(0,r.jsx)(n.code,{children:"update"}),", ",(0,r.jsx)(n.code,{children:"insert"}),", ",(0,r.jsx)(n.code,{children:"delete"}),", ",(0,r.jsx)(n.code,{children:"update_only"}),", and ",(0,r.jsx)(n.code,{children:"replace"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"filter"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"text"})," (",(0,r.jsx)(n.code,{children:"String"}),") - The text of the filter name."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"tree"})," (",(0,r.jsx)(n.code,{children:"ExpressionNode"}),") - A tree data structure fully defining the filter."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"tokens"})," (",(0,r.jsx)(n.code,{children:"List<ExpressionToken>"}),") - A list of parsed tokens for the filter."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"template"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"rows"})," (",(0,r.jsx)(n.code,{children:"List<Objects>"}),") - A list of objects on the row of IRR template."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"columns"})," (",(0,r.jsx)(n.code,{children:"List<Objects>"}),") - A list of objects on the column of IRR template."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pageby"})," (",(0,r.jsx)(n.code,{children:"List<Objects>"}),") - A list of objects on the pageby of IRR template."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"update-the-ffsql-incremental-refresh-report-using-put-apimodelincrementalrefreshincrementalrefreshreportid",children:["Update the FFSQL incremental refresh report using ",(0,r.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes/ms-putIncrementalRefreshReport",children:"PUT /api/model/incrementalRefresh/{incrementalRefreshReportId}"})]}),"\n",(0,r.jsxs)(n.p,{children:["For FFSQL incremental refresh report, we can also update the ",(0,r.jsx)(n.code,{children:"table"})," field."]}),"\n",(0,r.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "56l4jqkr73dlj7o27n5uvlbd5b"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n"Content-Type": "application/json"\n'})}),"\n",(0,r.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "table": {\n    "physicalTable": {\n      "columns": [\n        {\n          "name": "aaa",\n          "dataType": {\n            "type": "integer",\n            "precision": 4,\n            "scale": 0\n          }\n        },\n        {\n          "name": "bbb",\n          "dataType": {\n            "type": "integer",\n            "precision": 4,\n            "scale": 0\n          }\n        },\n        {\n          "name": "ccc",\n          "dataType": {\n            "type": "double",\n            "precision": 18,\n            "scale": 0\n          }\n        }\n      ],\n      "sqlExpression": {\n        "tree": {\n          "function": "concat_no_blank",\n          "children": [\n            {\n              "type": "constant",\n              "variant": {\n                "type": "string",\n                "value": "SELECT cust_city_id, call_ctr_id, tot_cost FROM tutorial.city_ctr_sls WHERE gross_dollar_sales > 0;"\n              }\n            }\n          ],\n          "type": "operator"\n        }\n      }\n    },\n    "attributes": [\n      {\n        "name": "my_cust_city",\n        "forms": [\n          {\n            "id": "45C11FA478E745FEA08D781CEA190FE5",\n            "category": "ID",\n            "type": "system",\n            "displayFormat": "number",\n            "expression": {\n              "tree": {\n                "type": "column_reference",\n                "name": "ccc"\n              }\n            }\n          }\n        ]\n      },\n      {\n        "name": "my_call_ctr",\n        "forms": [\n          {\n            "id": "45C11FA478E745FEA08D781CEA190FE5",\n            "category": "ID",\n            "type": "system",\n            "displayFormat": "number",\n            "expression": {\n              "tree": {\n                "type": "column_reference",\n                "name": "bbb"\n              }\n            }\n          }\n        ]\n      }\n    ],\n    "metrics": [\n      {\n        "name": "my_tot_cost",\n        "dataType": {\n          "type": "numeric",\n          "precision": 0,\n          "scale": 0\n        },\n        "expression": {\n          "tree": {\n            "type": "column_reference",\n            "name": "aaa"\n          }\n        }\n      }\n    ],\n    "dataSource": {\n      "objectId": "A528E3A1436D9C08318735BC915FCF13",\n      "subType": "db_role_import",\n      "name": "tutorial_wh"\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl --location --request PUT \'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/incrementalRefresh/CFF589424FD33336512FFD88AE541A93\' \\\n--header \'X-MSTR-AuthToken: 56l4jqkr73dlj7o27n5uvlbd5b\' \\\n--header \'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Cookie: JSESSIONID=F7A455DE2F7CB7F1F8C7D377B7CFBE1D; iSession=56l4jqkr73dlj7o27n5uvlbd5b\' \\\n--data \'{\n    "table": {\n        "physicalTable": {\n            "columns": [\n                {\n                    "name": "aaa",\n                    "dataType": {\n                        "type": "integer",\n                        "precision": 4,\n                        "scale": 0\n                    }\n                },\n                {\n                    "name": "bbb",\n                    "dataType": {\n                        "type": "integer",\n                        "precision": 4,\n                        "scale": 0\n                    }\n                },\n                {\n                    "name": "ccc",\n                    "dataType": {\n                        "type": "double",\n                        "precision": 18,\n                        "scale": 0\n                    }\n                }\n            ],\n            "sqlExpression": {\n                "tree": {\n                    "function": "concat_no_blank",\n                    "children": [\n                        {\n                            "type": "constant",\n                            "variant": {\n                                "type": "string",\n                                "value": "SELECT cust_city_id, call_ctr_id, tot_cost FROM tutorial.city_ctr_sls WHERE gross_dollar_sales > 0;"\n                            }\n                        }\n                    ],\n                    "type": "operator"\n                }\n            }\n        },\n        "attributes": [\n            {\n                "name": "my_cust_city",\n                "forms": [\n                    {\n                        "id": "45C11FA478E745FEA08D781CEA190FE5",\n                        "category": "ID",\n                        "type": "system",\n                        "displayFormat": "number",\n                        "expression": {\n                            "tree": {\n                                "type": "column_reference",\n                                "name": "ccc"\n                            }\n                        }\n                    }\n                ]\n            },\n            {\n                "name": "my_call_ctr",\n                "forms": [\n                    {\n                        "id": "45C11FA478E745FEA08D781CEA190FE5",\n                        "category": "ID",\n                        "type": "system",\n                        "displayFormat": "number",\n                        "expression": {\n                            "tree": {\n                                "type": "column_reference",\n                                "name": "bbb"\n                            }\n                        }\n                    }\n                ]\n            }\n        ],\n        "metrics": [\n            {\n                "name": "my_tot_cost",\n                "dataType": {\n                    "type": "numeric",\n                    "precision": 0,\n                    "scale": 0\n                },\n                "expression": {\n                    "tree": {\n                        "type": "column_reference",\n                        "name": "aaa"\n                    }\n                }\n            }\n        ],\n        "dataSource": {\n            "objectId": "A528E3A1436D9C08318735BC915FCF13",\n            "subType": "db_role_import",\n            "name": "tutorial_wh"\n        }\n    }\n}\'\n'})}),"\n",(0,r.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,r.jsx)(n.p,{children:"You can view the updated FFSQL Incremental Refresh Report definition in the body of the response."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2024-01-24T08:02:33.015Z",\n    "dateModified": "2024-01-24T08:03:33.686Z",\n    "versionId": "D6FBFBFA40DC124A4445D5A3147C1505",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "CFF589424FD33336512FFD88AE541A93",\n    "subType": "report_increment_refresh",\n    "name": "ffsql_irr_test"\n  },\n  "targetCube": {\n    "objectId": "1B1CD04E4494F4FD9711FC8E162FE574",\n    "subType": "report_cube",\n    "name": "ffsql_cube"\n  },\n  "incrementType": "report",\n  "refreshType": "update",\n  "template": {\n    "rows": [\n      {\n        "id": "83CE3EF5F7834DA39B2E7CC38A60A2BF",\n        "name": "my_cust_city",\n        "type": "attribute",\n        "forms": [\n          {\n            "id": "45C11FA478E745FEA08D781CEA190FE5",\n            "name": "ID"\n          }\n        ]\n      },\n      {\n        "id": "BC99738E1DEA43C384E89D836905BE03",\n        "name": "my_call_ctr",\n        "type": "attribute",\n        "forms": [\n          {\n            "id": "45C11FA478E745FEA08D781CEA190FE5",\n            "name": "ID"\n          }\n        ]\n      }\n    ],\n    "columns": [\n      {\n        "type": "metrics",\n        "elements": [\n          {\n            "id": "AD9D7EC2F3ED47ACB08587AF3B1C114E",\n            "name": "my_tot_cost",\n            "subType": "metric"\n          }\n        ]\n      }\n    ],\n    "pageBy": []\n  },\n  "table": {\n    "physicalTable": {\n      "columns": [\n        {\n          "id": "2F386866162B4E2D84457B164EFE18C5",\n          "name": "aaa",\n          "dataType": {\n            "type": "integer",\n            "precision": 4,\n            "scale": 0\n          }\n        },\n        {\n          "id": "0E7ACDA79FC94A208C0CD94ED1821D3B",\n          "name": "bbb",\n          "dataType": {\n            "type": "integer",\n            "precision": 4,\n            "scale": 0\n          }\n        },\n        {\n          "id": "3E8E344EC3944D1C87A8B3535250E134",\n          "name": "ccc",\n          "dataType": {\n            "type": "double",\n            "precision": 18,\n            "scale": 0\n          }\n        }\n      ],\n      "sqlExpression": {\n        "tree": {\n          "function": "concat_no_blank",\n          "children": [\n            {\n              "type": "constant",\n              "variant": {\n                "type": "string",\n                "value": "SELECT cust_city_id, call_ctr_id, tot_cost FROM tutorial.city_ctr_sls WHERE gross_dollar_sales > 0;"\n              }\n            }\n          ],\n          "type": "operator"\n        }\n      }\n    },\n    "attributes": [\n      {\n        "id": "83CE3EF5F7834DA39B2E7CC38A60A2BF",\n        "name": "my_cust_city",\n        "forms": [\n          {\n            "id": "45C11FA478E745FEA08D781CEA190FE5",\n            "name": "ID",\n            "category": "ID",\n            "type": "system",\n            "displayFormat": "number",\n            "expression": {\n              "tree": {\n                "type": "column_reference",\n                "objectId": "3E8E344EC3944D1C87A8B3535250E134",\n                "name": "ccc"\n              }\n            }\n          }\n        ]\n      },\n      {\n        "id": "BC99738E1DEA43C384E89D836905BE03",\n        "name": "my_call_ctr",\n        "forms": [\n          {\n            "id": "45C11FA478E745FEA08D781CEA190FE5",\n            "name": "ID",\n            "category": "ID",\n            "type": "system",\n            "displayFormat": "number",\n            "expression": {\n              "tree": {\n                "type": "column_reference",\n                "objectId": "0E7ACDA79FC94A208C0CD94ED1821D3B",\n                "name": "bbb"\n              }\n            }\n          }\n        ]\n      }\n    ],\n    "metrics": [\n      {\n        "id": "AD9D7EC2F3ED47ACB08587AF3B1C114E",\n        "name": "my_tot_cost",\n        "dataType": {\n          "type": "numeric",\n          "precision": 0,\n          "scale": 0\n        },\n        "expression": {\n          "tree": {\n            "type": "column_reference",\n            "objectId": "2F386866162B4E2D84457B164EFE18C5",\n            "name": "aaa"\n          }\n        }\n      }\n    ],\n    "dataSource": {\n      "objectId": "A528E3A1436D9C08318735BC915FCF13",\n      "subType": "db_role_import",\n      "name": "tutorial_wh"\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Response Code: 200 (The incremental refresh report's definition is updated successfully.)"}),"\n",(0,r.jsx)(n.p,{children:"The model for the definition of the Incremental Refresh Report can be represented with the following fields."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"subType"})," cannot be modified through REST API."]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"information"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"name"})," (",(0,r.jsx)(n.code,{children:"String"}),") - Name of the IRR. This is the most user-friendly value that can be used to identify the IRR."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"destinationFolderId"})," (",(0,r.jsx)(n.code,{children:"String"}),") - Folder ID where the new IRR is saved."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"targetCube"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"objectID"})," (",(0,r.jsx)(n.code,{children:"String"}),") - The object ID of the target cube that the IRR is built on."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"name"})," (",(0,r.jsx)(n.code,{children:"String"}),") - The name of the target cube."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"incrementType"})," (",(0,r.jsx)(n.code,{children:"String"}),") - The incremental type for IRR, which can only be a filter and report."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"refreshType"})," (",(0,r.jsx)(n.code,{children:"String"}),") - The refresh type for IRR, which can only be ",(0,r.jsx)(n.code,{children:"update"}),", ",(0,r.jsx)(n.code,{children:"insert"}),", ",(0,r.jsx)(n.code,{children:"delete"}),", ",(0,r.jsx)(n.code,{children:"update_only"}),", and ",(0,r.jsx)(n.code,{children:"replace"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"filter"})," (Not applicable when the target cube is a FFSQL cube)","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"text"})," (",(0,r.jsx)(n.code,{children:"String"}),") - The text of the filter name."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"tree"})," (",(0,r.jsx)(n.code,{children:"ExpressionNode"}),") - A tree data structure fully defining the filter."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"tokens"})," (",(0,r.jsx)(n.code,{children:"List<ExpressionToken>"}),") - A list of parsed tokens for the filter."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"template"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"rows"})," (",(0,r.jsx)(n.code,{children:"List<Objects>"}),") - A list of objects on the row of IRR template."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"columns"})," (",(0,r.jsx)(n.code,{children:"List<Objects>"}),") - A list of objects on the column of IRR template."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pageby"})," (",(0,r.jsx)(n.code,{children:"List<Objects>"}),") - A list of objects on the pageby of IRR template."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"table"})," (Only applicable when the target cube is a FFSQL cube)","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"physicalTable"})," (",(0,r.jsx)(n.code,{children:"Object"}),") - The physical table containing the columns information and FFSQL expression."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"attributes"})," (",(0,r.jsx)(n.code,{children:"List<Objects>"}),") - The list of attributes of the table."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"metrics"})," (",(0,r.jsx)(n.code,{children:"List<Objects>"}),") - The list of metrics of the table."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"dataSource"})," (",(0,r.jsx)(n.code,{children:"ObjectInfoRefrence"}),") - The data source of the table."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);