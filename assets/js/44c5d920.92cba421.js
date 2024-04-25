"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8004],{45748:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=t(74848),o=t(28453);const s={title:"Update an attribute's definition",sidebar_label:"Update an attribute's definition",description:"This workflow sample demonstrates how to update an attribute's definition through the Modeling service."},i=void 0,r={id:"common-workflows/modeling/manage-attribute-objects/update-an-attributes-definition",title:"Update an attribute's definition",description:"This workflow sample demonstrates how to update an attribute's definition through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-attribute-objects/update-an-attributes-definition.md",sourceDirName:"common-workflows/modeling/manage-attribute-objects",slug:"/common-workflows/modeling/manage-attribute-objects/update-an-attributes-definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/update-an-attributes-definition",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-attribute-objects/update-an-attributes-definition.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1714063612,formattedLastUpdatedAt:"Apr 25, 2024",frontMatter:{title:"Update an attribute's definition",sidebar_label:"Update an attribute's definition",description:"This workflow sample demonstrates how to update an attribute's definition through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create an attribute object",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/create-an-attribute-object"},next:{title:"Get applicable properties for an attribute",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/get-attribute-applicable-advanced-properties"}},l={},d=[{value:"Update the attribute&#39;s definition",id:"update-the-attributes-definition",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Available:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{since:"2021 Update 1"}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["You can try out this workflow at ",(0,a.jsx)(n.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-0c9c449c-883d-4112-af6d-f14656ed5d30?ctx=documentation",children:"REST API Playground"}),"."]}),(0,a.jsxs)(n.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,a.jsx)(n.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,a.jsx)(n.p,{children:"This workflow sample demonstrates how to update an attribute's definition through the Modeling service."}),"\n",(0,a.jsxs)(n.p,{children:['You want to update the definition of the "Customer" attribute object under the Public Objects folder in the MicroStrategy Tutorial project. The attribute object ID is ',(0,a.jsx)(n.code,{children:"5D6C76C3A3F548A0B9ADE5F9D2AA65C6"})," in the MicroStrategy Tutorial project. The project ID is ",(0,a.jsx)(n.code,{children:"B7CA92F04B9FAE8D941C3E9B7E0CD754"}),"."]}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.p,{children:["Get the authorization token needed to execute the request with ",(0,a.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,a.jsxs)(n.p,{children:["Get the project ID from ",(0,a.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,a.jsx)(n.a,{href:"/rest-api-docs/common-workflows/modeling/changesets",children:"Changesets"}),"."]})}),"\n",(0,a.jsx)(n.h2,{id:"update-the-attributes-definition",children:"Update the attribute's definition"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Attributes/ms-updateAttribute",children:"PATCH /api/model/attributes/{attributeId}"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:['You want to update the definition of the "Customer" attribute object under the Public Objects folder in the MicroStrategy Tutorial project by ungrouping the "Name" form group and adding a new form group "Email". The attribute object ID is ',(0,a.jsx)(n.code,{children:"5D6C76C3A3F548A0B9ADE5F9D2AA65C6"})," in the MicroStrategy Tutorial project."]}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsx)(n.p,{children:'To update an attribute, in the request body, "forms" contains the detailed definition of a list of attribute forms. Each attribute contains one or more attribute forms. Each attribute form contains:'}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:'"expressions": A list of attribute form expressions. An attribute form contains one or more attribute form expressions. Each attribute form expression contains "expression" and "tables".'}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:'"expression": Must be in either "tree" or "tokens" format.'}),"\n",(0,a.jsx)(n.p,{children:'Tokens are a semi-structured representation of MicroStrategy expression text that includes object references. For example, let\u2019s say an attribute form expression is "Year - 10". When the attribute form expression is represented as tokens, the text is broken down into pieces (tokens) with information about what these pieces represent in the metadata: ("Year_ID", Year_column_ID), ("-", Minus_ID), ("10", Constant).'}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:'"tables": A list of tables that the "expression" applies to. Warehouse partition base tables and metadata partition mapping tables are not allowed here.'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:'"dataType" and "alias" are optional. If omitted, they can be calculated based on the first attribute form expression.'}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:'"childForms" is specific to a form group, which contains the reference for child forms.'}),"\n"]}),"\n"]}),(0,a.jsx)(n.p,{children:'Provide a lookup table on either the attribute level or attribute form level, as it is required for the object to be committed to the metadata. A lookup table can be defined on the attribute level using "attributeLookupTable", or the attribute form level using "lookupTable". If "LookupTable" is defined at the attribute form level, it is used, or it falls back to "attributeLookupTable". Warehouse partition base tables and metadata partition mapping tables are not allowed to use in the lookup table.'}),(0,a.jsx)(n.p,{children:'Provide "keyForm" and "displays", as they are required for the attribute to be committed to the metadata.'}),(0,a.jsx)(n.p,{children:'Provide "destinationFolderId" in "information", as it is required for the attribute to be committed to the metadata.'})]}),"\n",(0,a.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "o0ak9privdo27nfo798j40m8aa"\n"X-MSTR-MS-Changeset": "F768352DC66E40F2BCD9A3F050ECDE9B"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Construct the expression."}),"\n",(0,a.jsxs)(n.p,{children:["Make a copy of the following ",(0,a.jsx)(n.code,{children:'"tokens"'})," format template and modify the ",(0,a.jsx)(n.code,{children:'"attribute_form_expression"'})," to construct an expression."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'"expression":{\n  "tokens":[\n    {\n      "value":"<attribute_form_expression>"\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "attribute",\n    "name": "Customer"\n  },\n  "forms": [\n    {\n      "name": "ID",\n      "description": "Customer ID",\n      "category": "ID",\n      "displayFormat": "number",\n      "expressions": [\n        {\n          "expression": {\n            "tokens": [\n              {\n                "value": "CUSTOMER_ID"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_CUSTOMER"\n            }\n          ]\n        }\n      ],\n      "alias": "CUSTOMER_ID",\n      "lookupTable": {\n        "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_CUSTOMER"\n      }\n    },\n    {\n      "name": "Last Name",\n      "description": "Customer Last Name",\n      "category": "Customer DESC (1)",\n      "displayFormat": "text",\n      "expressions": [\n        {\n          "expression": {\n            "tokens": [\n              {\n                "value": "CUST_LAST_NAME"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_CUSTOMER"\n            }\n          ]\n        }\n      ],\n      "alias": "CUST_LAST_NAME",\n      "lookupTable": {\n        "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_CUSTOMER"\n      }\n    },\n    {\n      "name": "First Name",\n      "description": "Customer First Name",\n      "category": "Customer DESC (2)",\n      "displayFormat": "text",\n      "expressions": [\n        {\n          "expression": {\n            "tokens": [\n              {\n                "value": "CUST_FIRST_NAME"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_CUSTOMER"\n            }\n          ]\n        }\n      ],\n      "alias": "CUST_FIRST_NAME",\n      "lookupTable": {\n        "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_CUSTOMER"\n      }\n    },\n    {\n      "name": "Email",\n      "category": "Customer Email None",\n      "displayFormat": "text",\n      "expressions": [\n        {\n          "expressionId": "8A29B203463142E586DF10CD572701A6",\n          "expression": {\n            "tokens": [\n              {\n                "value": "EMAIL"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_CUSTOMER"\n            }\n          ]\n        }\n      ],\n      "alias": "EMAIL",\n      "lookupTable": {\n        "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_CUSTOMER"\n      }\n    }\n  ],\n  "attributeLookupTable": {\n    "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n    "subType": "logical_table",\n    "name": "LU_CUSTOMER"\n  },\n  "keyForm": {\n    "name": "ID"\n  },\n  "displays": {\n    "reportDisplays": [\n      {\n        "name": "Last Name"\n      },\n      {\n        "name": "First Name"\n      }\n    ],\n    "browseDisplays": [\n      {\n        "name": "Last Name"\n      },\n      {\n        "name": "First Name"\n      }\n    ]\n  },\n  "sorts": {\n    "reportSorts": [\n      {\n        "form": {\n          "name": "Last Name"\n        },\n        "ascending": true\n      }\n    ],\n    "browseSorts": [\n      {\n        "form": {\n          "name": "Last Name"\n        },\n        "ascending": true\n      }\n    ]\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,a.jsxs)(n.p,{children:["In this sample workflow, you want to return the newly created attribute with its expression in all formats. Therefore, you should set ",(0,a.jsx)(n.code,{children:"showExpressionAs=tree"})," and ",(0,a.jsx)(n.code,{children:"showExpressionsAs=tokens"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X PATCH "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/attributes/5D6C76C3A3F548A0B9ADE5F9D2AA65C6?showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" -H "X-MSTR-MS-Changeset: F768352DC66E40F2BCD9A3F050ECDE9B" -H "Content-Type: application/json" -d "{\\\\"information\\\\":{\\\\"subType\\\\":\\\\"attribute\\\\",\\\\"name\\\\":\\\\"Customer2 PATCH\\\\"},\\\\"forms\\\\":[{\\\\"name\\\\":\\\\"ID\\\\",\\\\"description\\\\":\\\\"Customer ID\\\\",\\\\"category\\\\":\\\\"ID\\\\",\\\\"displayFormat\\\\":\\\\"number\\\\",\\\\"expressions\\\\":[{\\\\"expression\\\\":{\\\\"tokens\\\\":[{\\\\"value\\\\":\\\\"CUSTOMER_ID\\\\"}]},\\\\"tables\\\\":[{\\\\"objectId\\\\":\\\\"8D67935611D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"LU_CUSTOMER\\\\"}]}],\\\\"alias\\\\":\\\\"CUSTOMER_ID\\\\",\\\\"lookupTable\\\\":{\\\\"objectId\\\\":\\\\"8D67935611D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"LU_CUSTOMER\\\\"}},{\\\\"name\\\\":\\\\"Last Name\\\\",\\\\"description\\\\":\\\\"Customer Last Name\\\\",\\\\"category\\\\":\\\\"Customer DESC (1)\\\\",\\\\"displayFormat\\\\":\\\\"text\\\\",\\\\"expressions\\\\":[{\\\\"expression\\\\":{\\\\"tokens\\\\":[{\\\\"value\\\\":\\\\"CUST_LAST_NAME\\\\"}]},\\\\"tables\\\\":[{\\\\"objectId\\\\":\\\\"8D67935611D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"LU_CUSTOMER\\\\"}]}],\\\\"alias\\\\":\\\\"CUST_LAST_NAME\\\\",\\\\"lookupTable\\\\":{\\\\"objectId\\\\":\\\\"8D67935611D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"LU_CUSTOMER\\\\"}},{\\\\"name\\\\":\\\\"First Name\\\\",\\\\"description\\\\":\\\\"Customer First Name\\\\",\\\\"category\\\\":\\\\"Customer DESC (2)\\\\",\\\\"displayFormat\\\\":\\\\"text\\\\",\\\\"expressions\\\\":[{\\\\"expression\\\\":{\\\\"tokens\\\\":[{\\\\"value\\\\":\\\\"CUST_FIRST_NAME\\\\"}]},\\\\"tables\\\\":[{\\\\"objectId\\\\":\\\\"8D67935611D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"LU_CUSTOMER\\\\"}]}],\\\\"alias\\\\":\\\\"CUST_FIRST_NAME\\\\",\\\\"lookupTable\\\\":{\\\\"objectId\\\\":\\\\"8D67935611D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"LU_CUSTOMER\\\\"}},{\\\\"name\\\\":\\\\"Email\\\\",\\\\"category\\\\":\\\\"Customer Email None\\\\",\\\\"displayFormat\\\\":\\\\"text\\\\",\\\\"expressions\\\\":[{\\\\"expressionId\\\\":\\\\"8A29B203463142E586DF10CD572701A6\\\\",\\\\"expression\\\\":{\\\\"tokens\\\\":[{\\\\"value\\\\":\\\\"EMAIL\\\\"}]},\\\\"tables\\\\":[{\\\\"objectId\\\\":\\\\"8D67935611D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"LU_CUSTOMER\\\\"}]}],\\\\"alias\\\\":\\\\"EMAIL\\\\",\\\\"lookupTable\\\\":{\\\\"objectId\\\\":\\\\"8D67935611D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"LU_CUSTOMER\\\\"}}],\\\\"attributeLookupTable\\\\":{\\\\"objectId\\\\":\\\\"8D67935611D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"LU_CUSTOMER\\\\"},\\\\"keyForm\\\\":{\\\\"name\\\\":\\\\"ID\\\\"},\\\\"displays\\\\":{\\\\"reportDisplays\\\\":[{\\\\"name\\\\":\\\\"Last Name\\\\"},{\\\\"name\\\\":\\\\"First Name\\\\"}],\\\\"browseDisplays\\\\":[{\\\\"name\\\\":\\\\"Last Name\\\\"},{\\\\"name\\\\":\\\\"First Name\\\\"}]},\\\\"sorts\\\\":{\\\\"reportSorts\\\\":[{\\\\"form\\\\":{\\\\"name\\\\":\\\\"Last Name\\\\"},\\\\"ascending\\\\":true}],\\\\"browseSorts\\\\":[{\\\\"form\\\\":{\\\\"name\\\\":\\\\"Last Name\\\\"},\\\\"ascending\\\\":true}]}}"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,a.jsx)(n.p,{children:"You can view the attribute's new definition in the body of the response."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2021-03-23T12:34:42.637Z",\n    "dateModified": "2021-03-23T12:34:42.637Z",\n    "versionId": "3BC114F23A4DD92CFAB05CB66CAD3DA3",\n    "primaryLocale": "en-US",\n    "objectId": "5D6C76C3A3F548A0B9ADE5F9D2AA65C6",\n    "subType": "attribute",\n    "name": "Customer2 PATCH"\n  },\n  "forms": [\n    {\n      "id": "45C11FA478E745FEA08D781CEA190FE5",\n      "name": "ID",\n      "description": "Customer ID",\n      "category": "ID",\n      "type": "system",\n      "displayFormat": "number",\n      "dataType": {\n        "type": "integer",\n        "precision": 4,\n        "scale": -2147483648\n      },\n      "expressions": [\n        {\n          "expressionId": "AA920D4EF8594C9486886A41ED958161",\n          "expression": {\n            "text": "CUSTOMER_ID",\n            "tree": {\n              "type": "column_reference",\n              "columnName": "CUSTOMER_ID",\n              "objectId": "BCC632AE4CDF6B07DCC33F8D39C2E06C"\n            },\n            "tokens": [\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "CUSTOMER_ID",\n                "type": "column_reference",\n                "target": {\n                  "dateCreated": "2015-07-09T15:22:56.000Z",\n                  "dateModified": "2016-11-21T01:24:00.000Z",\n                  "versionId": "2DEFC44811E6AF890ED50080EF55920E",\n                  "primaryLocale": "en-US",\n                  "objectId": "BCC632AE4CDF6B07DCC33F8D39C2E06C",\n                  "subType": "column",\n                  "name": "CUSTOMER_ID"\n                }\n              },\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "",\n                "type": "end_of_text"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_CUSTOMER"\n            }\n          ]\n        }\n      ],\n      "alias": "CUSTOMER_ID",\n      "lookupTable": {\n        "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_CUSTOMER"\n      }\n    },\n    {\n      "id": "C18164FC4FDE4A4090A39CDBF5B8F91D",\n      "name": "Last Name",\n      "description": "Customer Last Name",\n      "category": "Customer DESC (1)",\n      "type": "system",\n      "displayFormat": "text",\n      "dataType": {\n        "type": "n_var_char",\n        "precision": 255,\n        "scale": -2147483648\n      },\n      "expressions": [\n        {\n          "expressionId": "46130C090C8048D9A38C694FD9AD930B",\n          "expression": {\n            "text": "CUST_LAST_NAME",\n            "tree": {\n              "type": "column_reference",\n              "columnName": "CUST_LAST_NAME",\n              "objectId": "348C2C5848A48C788A0F50B424515880"\n            },\n            "tokens": [\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "CUST_LAST_NAME",\n                "type": "column_reference",\n                "target": {\n                  "dateCreated": "2015-07-09T15:22:56.000Z",\n                  "dateModified": "2015-07-09T15:23:34.000Z",\n                  "versionId": "13435FD5471D669840A02BAF676BA1CE",\n                  "primaryLocale": "en-US",\n                  "objectId": "348C2C5848A48C788A0F50B424515880",\n                  "subType": "column",\n                  "name": "CUST_LAST_NAME"\n                }\n              },\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "",\n                "type": "end_of_text"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_CUSTOMER"\n            }\n          ]\n        }\n      ],\n      "alias": "CUST_LAST_NAME",\n      "lookupTable": {\n        "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_CUSTOMER"\n      }\n    },\n    {\n      "id": "F12239D79AD04005B109B481AA5DDA81",\n      "name": "First Name",\n      "description": "Customer First Name",\n      "category": "Customer DESC (2)",\n      "type": "system",\n      "displayFormat": "text",\n      "dataType": {\n        "type": "n_var_char",\n        "precision": 255,\n        "scale": -2147483648\n      },\n      "expressions": [\n        {\n          "expressionId": "CC474C8A56144057A51E187F60978587",\n          "expression": {\n            "text": "CUST_FIRST_NAME",\n            "tree": {\n              "type": "column_reference",\n              "columnName": "CUST_FIRST_NAME",\n              "objectId": "16239103447AA820899DF59BFF610798"\n            },\n            "tokens": [\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "CUST_FIRST_NAME",\n                "type": "column_reference",\n                "target": {\n                  "dateCreated": "2015-07-09T15:22:56.000Z",\n                  "dateModified": "2015-07-09T15:23:34.000Z",\n                  "versionId": "A2F2ED7E4689BB3846D7D2ABFD631903",\n                  "primaryLocale": "en-US",\n                  "objectId": "16239103447AA820899DF59BFF610798",\n                  "subType": "column",\n                  "name": "CUST_FIRST_NAME"\n                }\n              },\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "",\n                "type": "end_of_text"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_CUSTOMER"\n            }\n          ]\n        }\n      ],\n      "alias": "CUST_FIRST_NAME",\n      "lookupTable": {\n        "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_CUSTOMER"\n      }\n    },\n    {\n      "id": "27057DA7B0B7435A875108E38D2DD914",\n      "name": "Email",\n      "category": "Customer Email None",\n      "type": "system",\n      "displayFormat": "text",\n      "dataType": {\n        "type": "n_var_char",\n        "precision": 50,\n        "scale": -2147483648\n      },\n      "expressions": [\n        {\n          "expressionId": "627C94DFA84B450095484D6BA04D05B7",\n          "expression": {\n            "text": "EMAIL",\n            "tree": {\n              "type": "column_reference",\n              "columnName": "EMAIL",\n              "objectId": "1BE9C93F4FB40E92E23B8FAAC574C7A9"\n            },\n            "tokens": [\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "EMAIL",\n                "type": "column_reference",\n                "target": {\n                  "dateCreated": "2015-07-09T15:22:56.000Z",\n                  "dateModified": "2016-08-18T19:29:48.000Z",\n                  "versionId": "20099C2C11E6657A08D00080EF75BA15",\n                  "primaryLocale": "en-US",\n                  "objectId": "1BE9C93F4FB40E92E23B8FAAC574C7A9",\n                  "subType": "column",\n                  "name": "EMAIL"\n                }\n              },\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "",\n                "type": "end_of_text"\n              }\n            ]\n          },\n          "tables": [\n            {\n              "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_CUSTOMER"\n            }\n          ]\n        }\n      ],\n      "alias": "EMAIL",\n      "lookupTable": {\n        "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_CUSTOMER"\n      }\n    }\n  ],\n  "attributeLookupTable": {\n    "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n    "subType": "logical_table",\n    "name": "LU_CUSTOMER"\n  },\n  "keyForm": {\n    "id": "45C11FA478E745FEA08D781CEA190FE5",\n    "name": "ID"\n  },\n  "displays": {\n    "reportDisplays": [\n      {\n        "id": "C18164FC4FDE4A4090A39CDBF5B8F91D",\n        "name": "Last Name"\n      },\n      {\n        "id": "F12239D79AD04005B109B481AA5DDA81",\n        "name": "First Name"\n      }\n    ],\n    "browseDisplays": [\n      {\n        "id": "C18164FC4FDE4A4090A39CDBF5B8F91D",\n        "name": "Last Name"\n      },\n      {\n        "id": "F12239D79AD04005B109B481AA5DDA81",\n        "name": "First Name"\n      }\n    ]\n  },\n  "sorts": {\n    "reportSorts": [\n      {\n        "form": {\n          "id": "C18164FC4FDE4A4090A39CDBF5B8F91D",\n          "name": "Last Name"\n        },\n        "ascending": true\n      }\n    ],\n    "browseSorts": [\n      {\n        "form": {\n          "id": "C18164FC4FDE4A4090A39CDBF5B8F91D",\n          "name": "Last Name"\n        },\n        "ascending": true\n      }\n    ]\n  },\n  "relationships": []\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Response Code: 200 (The attribute's definition is updated successfully in the changeset.)"})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var a=t(96540);const o={},s=a.createContext(o);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);