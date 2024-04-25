"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6184],{89944:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(74848),r=n(28453);const a={title:"Create a security filter object",sidebar_label:"Create a security filter object",description:"This workflow sample demonstrates how to create a new security filter object through the Modeling service."},o=void 0,s={id:"common-workflows/modeling/manage-security-filter-objects/create-a-security-filter-object",title:"Create a security filter object",description:"This workflow sample demonstrates how to create a new security filter object through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-security-filter-objects/create-a-security-filter-object.md",sourceDirName:"common-workflows/modeling/manage-security-filter-objects",slug:"/common-workflows/modeling/manage-security-filter-objects/create-a-security-filter-object",permalink:"/rest-api-docs/common-workflows/modeling/manage-security-filter-objects/create-a-security-filter-object",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-security-filter-objects/create-a-security-filter-object.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1714063612,formattedLastUpdatedAt:"Apr 25, 2024",frontMatter:{title:"Create a security filter object",sidebar_label:"Create a security filter object",description:"This workflow sample demonstrates how to create a new security filter object through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a security filter definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-security-filter-objects/retrieve-a-security-filter-definition"},next:{title:"Update a security filter definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-security-filter-objects/update-a-security-filter-definition"}},l={},c=[{value:"Create a security filter",id:"create-a-security-filter",level:2},{value:"More samples",id:"more-samples",level:2},{value:"Attribute form qualification",id:"attribute-form-qualification",level:3},{value:"Attribute element list qualification",id:"attribute-element-list-qualification",level:3},{value:"Shortcut-to-a-filter qualification",id:"shortcut-to-a-filter-qualification",level:3},{value:"Attribute join element list qualification",id:"attribute-join-element-list-qualification",level:3},{value:"Custom expression qualification",id:"custom-expression-qualification",level:3},{value:"Logic operators",id:"logic-operators",level:3},{value:"Attribute form qualification with top/bottom level",id:"attribute-form-qualification-with-topbottom-level",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Available:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{since:"2021 Update 1"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["You can try out this workflow at ",(0,i.jsx)(t.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-bcd7feb9-e96b-45db-aa51-a206d7842524?ctx=documentation",children:"REST API Playground"}),"."]})}),"\n",(0,i.jsx)(t.p,{children:"This workflow sample demonstrates how to create a new security filter object through the Modeling service."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Create a changeset."}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#create-a-security-filter",children:"Create a security filter."})}),"\n",(0,i.jsx)(t.li,{children:"Commit a changeset."}),"\n",(0,i.jsx)(t.li,{children:"Delete the changeset."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Additional samples are provided in ",(0,i.jsx)(t.a,{href:"#more-samples",children:"More samples"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:['In this workflow sample, you want to create a "Year > 2015" security filter object under the Public Objects folder in the MicroStrategy Tutorial project. The folder ID is ',(0,i.jsx)(t.code,{children:"98FE182C2A10427EACE0CD30B6768258"}),". The MicroStrategy Tutorial project ID is ",(0,i.jsx)(t.code,{children:"B7CA92F04B9FAE8D941C3E9B7E0CD754"}),"."]}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsxs)(t.p,{children:["Get the authorization token needed to execute the request with ",(0,i.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,i.jsxs)(t.p,{children:["Get the project ID from ",(0,i.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,i.jsxs)(t.p,{children:["Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,i.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/changesets",children:"Changesets"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"create-a-security-filter",children:"Create a security filter"}),"\n",(0,i.jsxs)(t.p,{children:["Use ",(0,i.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Security%20Filters/ms-postSecurityFilter",children:"POST /api/model/securityFilters"})," with ",(0,i.jsx)(t.code,{children:'"tree"'})," format for the ",(0,i.jsx)(t.code,{children:'"qualifications"'}),". ",(0,i.jsx)(t.a,{href:"#more-samples",children:"More examples"})," of creating a new security filter are listed further below"]}),"\n",(0,i.jsx)(t.p,{children:'To create a security filter, in the request body, the security filter\u2019s "qualification" needs to be in either "tree" or "tokens" format. If both are provided, only "tree" is used.'}),"\n",(0,i.jsx)(t.p,{children:"When creating an attribute element list qualification, only the \u201ctree\u201c format is supported."}),"\n",(0,i.jsx)(t.p,{children:'When creating a qualification with inline custom expressions, only the "tree" format is supported.'}),"\n",(0,i.jsxs)(t.p,{children:["Any embedded objects (",(0,i.jsx)(t.code,{children:'"isEmbedded":true"'}),") cannot be used to create a new security filter."]}),"\n",(0,i.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"\n'})}),"\n",(0,i.jsx)(t.p,{children:"Sample Request Body:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "md_security_filter",\n    "name": "Year > 2015",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateTree": {\n        "function": "greater",\n        "parameters": [\n          {\n            "parameterType": "constant",\n            "constant": {\n              "type": "double",\n              "value": "2015.0"\n            }\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    }\n  },\n  "topLevel": [],\n  "bottomLevel": []\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/securityFilters" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" -d \'{"information":{"subType":"filter","name":"Year > 2015","destinationFolderId":"98FE182C2A10427EACE0CD30B6768258"},"qualification":{"tree":{"type":"predicate_form_qualification","predicateTree":{"function":"greater","parameters":[{"parameterType":"constant","constant":{"type":"double","value":"2015.0"}}],"attribute":{"objectId":"8D679D5111D3E4981000E787EC6DE8A4","subType":"attribute","name":"Year"},"form":{"objectId":"45C11FA478E745FEA08D781CEA190FE5","subType":"attribute_form_system","name":"ID"}}}}}\'\n'})}),"\n",(0,i.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,i.jsx)(t.p,{children:"You can view the new filter's definition in the body of the response."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "versionId": "88DF4A68957941EBBBC69B975B2D011F",\n    "primaryLocale": "en-US",\n    "objectId": "A3EFA30AFC6D4A6C89D0D1F967BD505D",\n    "subType": "md_security_filter",\n    "name": "Year > 2015",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "text": "Year (ID) > 2015",\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateId": "43F6594B23BF4510A090F5AB3C44358F",\n      "predicateText": "Year (ID) > 2015",\n      "predicateTree": {\n        "function": "greater",\n        "parameters": [\n          {\n            "parameterType": "constant",\n            "constant": {\n              "type": "double",\n              "value": "2015.0"\n            }\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    }\n  },\n  "topLevel": [],\n  "bottomLevel": []\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Response Code: 201 (A new security filter is created successfully in the changeset.)"}),"\n",(0,i.jsx)(t.h2,{id:"more-samples",children:"More samples"}),"\n",(0,i.jsx)(t.p,{children:"A security filter takes the form of an expression tree over data structures known as predicates. Each predicate represents a single restriction on the available data. The security filter expression tree combines predicates together using logical operators."}),"\n",(0,i.jsx)(t.p,{children:"In this section we provide sample request body JSON for creating security filters of each predicate type. Security filters combine predicates using logic operators."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Create a changeset using ",(0,i.jsx)(t.code,{children:"POST /api/model/changesets"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsxs)(t.a,{href:"#create-a-security-filter",children:["2. Create a security filter using ",(0,i.jsx)(t.code,{children:"POST /api/model/securityFilters"})," with ",(0,i.jsx)(t.code,{children:'"tree"'})," format for the ",(0,i.jsx)(t.code,{children:'"qualifications"'}),"."]})}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:["Commit a changeset using ",(0,i.jsx)(t.code,{children:"POST /api/model/changesets/{changesetId}/commit"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.ol,{start:"4",children:["\n",(0,i.jsxs)(t.li,{children:["Delete the changeset using ",(0,i.jsx)(t.code,{children:"DELETE /api/model/changesets/{changesetId}"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["More Samples","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#attribute-form-qualification",children:"Attribute form qualification"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#attribute-element-list-qualification",children:"Attribute element list qualification"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#shortcut-to-a-filter-qualification",children:"Shortcut-to-a-Filter qualification"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#attribute-join-element-list-qualification",children:"Attribute join element list qualification"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#custom-expression-qualification",children:"Custom expression qualification"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#logic-operators",children:"Logic operators"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#attribute-form-qualification-with-topbottom-level",children:"Attribute form qualification with top/bottom level"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"attribute-form-qualification",children:"Attribute form qualification"}),"\n",(0,i.jsxs)(t.p,{children:["You can create a security filter based on attribute forms using ",(0,i.jsx)(t.code,{children:'"type": "predicate_form_qualification"'}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The following example demonstrates creating a new security filter where Year@ID > 2015."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "md_security_filter",\n    "name": "Year > 2015",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateTree": {\n        "function": "greater",\n        "parameters": [\n          {\n            "parameterType": "constant",\n            "constant": {\n              "type": "double",\n              "value": "2015.0"\n            }\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    }\n  },\n  "topLevel": [],\n  "bottomLevel": []\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"The following example demonstrates creating a new security filter where Year@ID is one of the items in the [2015, 2017] list."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "md_security_filter",\n    "name": "Year@ID in list (2015, 2017)",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateTree": {\n        "function": "in",\n        "parameters": [\n          {\n            "parameterType": "array",\n            "constantsType": "double",\n            "constants": ["2015.0", "2017.0"]\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    }\n  },\n  "topLevel": [],\n  "bottomLevel": []\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"attribute-element-list-qualification",children:"Attribute element list qualification"}),"\n",(0,i.jsxs)(t.p,{children:["You can create a security filter based on attribute elements using ",(0,i.jsx)(t.code,{children:'"type": "predicate_element_list"'}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The following example demonstrates creating a new security filter with Category in Books and Electronics."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "md_security_filter",\n    "name": "Category in Books and Electronics",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_element_list",\n      "predicateTree": {\n        "attribute": {\n          "objectId": "8D679D3711D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Category"\n        },\n        "elements": [\n          {\n            "display": "Electronics",\n            "elementId": "h2"\n          },\n          {\n            "display": "Books",\n            "elementId": "h1"\n          }\n        ],\n        "function": "in"\n      }\n    }\n  },\n  "topLevel": [],\n  "bottomLevel": []\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"shortcut-to-a-filter-qualification",children:"Shortcut-to-a-filter qualification"}),"\n",(0,i.jsxs)(t.p,{children:["You can create a security filter based on an existing filter using ",(0,i.jsx)(t.code,{children:'"type": "predicate_filter_qualification"'}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The following example demonstrates creating a new security filter using an existing filter as a qualification."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "md_security_filter",\n    "name": "Shortcut To Filter",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_filter_qualification",\n      "predicateTree": {\n        "filter": {\n          "objectId": "320081BF47ECD3DEB07529B1BEF4271B",\n          "subType": "filter",\n          "name": "Filter Object"\n        },\n        "isIndependent": 1\n      }\n    }\n  },\n  "topLevel": [],\n  "bottomLevel": []\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"attribute-join-element-list-qualification",children:"Attribute join element list qualification"}),"\n",(0,i.jsxs)(t.p,{children:["You can create a security filter based on attribute elements from different attributes using ",(0,i.jsx)(t.code,{children:'"type": "predicate_joint_element_list"'}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The following example demonstrates creating a new security filter that returns the data for Books in the Northeast and Electronics in the Southwest."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "md_security_filter",\n    "name": "Category & Region",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_joint_element_list",\n      "predicateTree": {\n        "level": [\n          {\n            "objectId": "8D679D3711D3E4981000E787EC6DE8A4",\n            "subType": "attribute",\n            "name": "Category"\n          },\n          {\n            "objectId": "8D679D4B11D3E4981000E787EC6DE8A4",\n            "subType": "attribute",\n            "name": "Region"\n          }\n        ],\n        "tuples": [\n          [\n            {\n              "display": "Books",\n              "elementId": "h1"\n            },\n            {\n              "display": "Northeast",\n              "elementId": "h1"\n            }\n          ],\n          [\n            {\n              "display": "Electronics",\n              "elementId": "h2"\n            },\n            {\n              "display": "Southwest",\n              "elementId": "h7"\n            }\n          ]\n        ]\n      }\n    }\n  },\n  "topLevel": [],\n  "bottomLevel": []\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"custom-expression-qualification",children:"Custom expression qualification"}),"\n",(0,i.jsxs)(t.p,{children:["You can create a security filter based on a custom expression using ",(0,i.jsx)(t.code,{children:'"type": "predicate_custom"'}),". See ",(0,i.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/manage-security-filter-objects/create-a-security-filter-object-using-a-custom-expression",children:"Create a security filter object using a custom expression"})," for more information."]}),"\n",(0,i.jsx)(t.h3,{id:"logic-operators",children:"Logic operators"}),"\n",(0,i.jsx)(t.p,{children:"You can create a security filter using logic operators to combine multiple predicates."}),"\n",(0,i.jsx)(t.p,{children:"The following example demonstrates creating a new security filter that returns the data for all females and males between the ages of 25-35."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "md_security_filter",\n    "name": "Females & Males(25-35)",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "function": "or",\n      "children": [\n        {\n          "type": "predicate_form_qualification",\n          "predicateTree": {\n            "function": "equals",\n            "parameters": [\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "string",\n                  "value": "Female"\n                }\n              }\n            ],\n            "attribute": {\n              "objectId": "4151F1304F00A51EB13BCF84283396BE",\n              "subType": "attribute",\n              "name": "Customer Gender"\n            },\n            "form": {\n              "objectId": "CCFBE2A5EADB4F50941FB879CCF1721C",\n              "subType": "attribute_form_system",\n              "name": "DESC"\n            },\n            "dataLocale": "en-US"\n          }\n        },\n        {\n          "function": "and",\n          "children": [\n            {\n              "type": "predicate_form_qualification",\n              "predicateTree": {\n                "function": "between",\n                "parameters": [\n                  {\n                    "parameterType": "constant",\n                    "constant": {\n                      "type": "double",\n                      "value": "25.0"\n                    }\n                  },\n                  {\n                    "parameterType": "constant",\n                    "constant": {\n                      "type": "double",\n                      "value": "35.0"\n                    }\n                  }\n                ],\n                "attribute": {\n                  "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",\n                  "subType": "attribute",\n                  "name": "Customer Age"\n                },\n                "form": {\n                  "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n                  "subType": "attribute_form_system",\n                  "name": "ID"\n                }\n              }\n            },\n            {\n              "type": "predicate_form_qualification",\n              "predicateTree": {\n                "function": "equals",\n                "parameters": [\n                  {\n                    "parameterType": "constant",\n                    "constant": {\n                      "type": "string",\n                      "value": "Male"\n                    }\n                  }\n                ],\n                "attribute": {\n                  "objectId": "4151F1304F00A51EB13BCF84283396BE",\n                  "subType": "attribute",\n                  "name": "Customer Gender"\n                },\n                "form": {\n                  "objectId": "CCFBE2A5EADB4F50941FB879CCF1721C",\n                  "subType": "attribute_form_system",\n                  "name": "DESC"\n                },\n                "dataLocale": "en-US"\n              }\n            }\n          ],\n          "type": "operator"\n        }\n      ],\n      "type": "operator"\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"attribute-form-qualification-with-topbottom-level",children:"Attribute form qualification with top/bottom level"}),"\n",(0,i.jsx)(t.p,{children:"Top and bottom range attributes place aggregation ceilings and floors on metrics used on a report. If neither a top nor a bottom range attribute is specified, the security filter is applied to every level of analysis."}),"\n",(0,i.jsx)(t.p,{children:"The following example demonstrates creating a new security filter that includes all years greater than 2015."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "md_security_filter",\n    "name": "Year > 2015",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateTree": {\n        "function": "greater",\n        "parameters": [\n          {\n            "parameterType": "constant",\n            "constant": {\n              "type": "double",\n              "value": "2015.0"\n            }\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    }\n  },\n  "topLevel": [\n    {\n      "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n      "subType": "attribute",\n      "name": "Year"\n    }\n  ],\n  "bottomLevel": []\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var i=n(96540);const r={},a=i.createContext(r);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);