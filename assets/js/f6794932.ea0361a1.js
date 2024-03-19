"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1597],{43760:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=t(74848),r=t(28453);const a={title:"Create a filter object",sidebar_label:"Create a filter object",description:"This workflow sample demonstrates how to create a new filter object through the Modeling service."},o=void 0,s={id:"common-workflows/modeling/manage-filter-objects/create-a-filter-object",title:"Create a filter object",description:"This workflow sample demonstrates how to create a new filter object through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-filter-objects/create-a-filter-object.md",sourceDirName:"common-workflows/modeling/manage-filter-objects",slug:"/common-workflows/modeling/manage-filter-objects/create-a-filter-object",permalink:"/rest-api-docs/common-workflows/modeling/manage-filter-objects/create-a-filter-object",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-filter-objects/create-a-filter-object.md",tags:[],version:"current",lastUpdatedBy:"AugLychee",lastUpdatedAt:1710818077,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{title:"Create a filter object",sidebar_label:"Create a filter object",description:"This workflow sample demonstrates how to create a new filter object through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a filter's definition within a changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-filter-objects/retrieve-a-filters-definition-within-a-changeset"},next:{title:"Create a filter object with a custom expression",permalink:"/rest-api-docs/common-workflows/modeling/manage-filter-objects/create-a-filter-object-with-a-custom-expression"}},l={},c=[{value:"Create a new filter",id:"create-a-new-filter",level:2},{value:"More samples",id:"more-samples",level:2},{value:"Attribute form qualifications",id:"attribute-form-qualifications",level:3},{value:"Attribute element list qualification",id:"attribute-element-list-qualification",level:3},{value:"Metric set qualification",id:"metric-set-qualification",level:3},{value:"Relationship set qualification",id:"relationship-set-qualification",level:3},{value:"Shortcut-to-a-report qualification",id:"shortcut-to-a-report-qualification",level:3},{value:"Shortcut-to-a-filter qualification",id:"shortcut-to-a-filter-qualification",level:3},{value:"Shortcut-to-a-prompt qualification",id:"shortcut-to-a-prompt-qualification",level:3},{value:"Attribute joint element list qualification",id:"attribute-joint-element-list-qualification",level:3},{value:"Custom expression qualification",id:"custom-expression-qualification",level:3},{value:"Logic operators",id:"logic-operators",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Available:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{since:"2021"}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["You can try out this workflow at ",(0,i.jsx)(n.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-5bb60de6-52e2-43c4-87bc-b404125f96ad?ctx=documentation",children:"REST API Playground"}),"."]}),(0,i.jsxs)(n.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,i.jsx)(n.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,i.jsx)(n.p,{children:"This workflow sample demonstrates how to create a new filter object through the Modeling service."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Create a changeset"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#create-a-new-filter",children:"Create a filter definition"})}),"\n",(0,i.jsx)(n.li,{children:"Commit the changeset"}),"\n",(0,i.jsx)(n.li,{children:"Delete the changeset"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You want to create a new \u201cYear>2015\u201c filter object under the Public Objects folder in the MicroStrategy Tutorial project. The folder object ID is ",(0,i.jsx)(n.code,{children:"98FE182C2A10427EACE0CD30B6768258"}),". The project ID is ",(0,i.jsx)(n.code,{children:"B7CA92F04B9FAE8D941C3E9B7E0CD754"}),"."]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["Get the authorization token needed to execute the request with ",(0,i.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,i.jsxs)(n.p,{children:["Get the project ID from ",(0,i.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,i.jsxs)(n.p,{children:["Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,i.jsx)(n.a,{href:"/rest-api-docs/common-workflows/modeling/changesets",children:"Changesets"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"create-a-new-filter",children:"Create a new filter"}),"\n",(0,i.jsxs)(n.p,{children:["Endpoint: ",(0,i.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Filters/ms-postFilter",children:"POST /api/model/filters"}),"."]}),"\n",(0,i.jsx)(n.p,{children:'You want to create the filter using the \u201ctree\u201d format for the "qualifications\u201d. More examples of creating a new filter are listed below.'}),"\n",(0,i.jsx)(n.p,{children:'To create a filter, in the request body, the filter\u2019s "qualification" needs to be in either "tree" or "tokens" format. If both are provided, only "tree" is used.'}),"\n",(0,i.jsx)(n.p,{children:"When creating an attribute element list qualification, only the \u201ctree\u201c format is supported."}),"\n",(0,i.jsx)(n.p,{children:'If the \'tree\' format is used, the custom expressions, "expression" needs to be in either "tree" or "tokens" format. If both are provided, only "tree" is used.'}),"\n",(0,i.jsx)(n.p,{children:'When creating a qualification with inline custom expressions, only the "tree" format is supported.'}),"\n",(0,i.jsxs)(n.p,{children:["If you are constructing the POST filter request body based on the response of the GET filter call of an existing filter, be aware that any embedded objects (",(0,i.jsx)(n.code,{children:'"isEmbedded":true"'}),") cannot be used to create a new filter, as the embedded objects are only \u201clocal\u201c to its owner (the existing filter)."]}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:'   "accept": "application/json"\n   "X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n   "X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "filter",\n    "name": "Year > 2015",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateTree": {\n        "function": "greater",\n        "parameters": [\n          {\n            "parameterType": "constant",\n            "constant": {\n              "type": "double",\n              "value": "2015.0"\n            }\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -djectId\\\\":\\\\"45C11FA478E745FEA08D781CEA190FE5\\\\",\\\\"subType\\\\":\\\\"attribute_form_system\\\\",\\\\"name\\\\":\\\\"ID\\\\"}}}}}"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sample Response Body: You can view the new filter's definition in the body of the response."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "versionId": "88DF4A68957941EBBBC69B975B2D011F",\n    "primaryLocale": "en-US",\n    "objectId": "A3EFA30AFC6D4A6C89D0D1F967BD505D",\n    "subType": "filter",\n    "name": "Year > 2015",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "text": "Year (ID) > 2015",\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateId": "43F6594B23BF4510A090F5AB3C44358F",\n      "predicateText": "Year (ID) > 2015",\n      "predicateTree": {\n        "function": "greater",\n        "parameters": [\n          {\n            "parameterType": "constant",\n            "constant": {\n              "type": "double",\n              "value": "2015.0"\n            }\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Response Code: 201 (A new filter is created successfully in the changeset.)"}),"\n",(0,i.jsx)(n.h2,{id:"more-samples",children:"More samples"}),"\n",(0,i.jsx)(n.p,{children:"A filter takes the form of an expression tree over data structures known as predicates. Each predicate represents a single restriction on the available data. The filter expression tree combines predicates together using logical operators."}),"\n",(0,i.jsx)(n.p,{children:"The following are sample JSON request bodies for creating filters of each type of predicates, and filters combining predicates using logic operators."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Create a changeset"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#create-a-new-filter",children:"Create a new filter"})}),"\n",(0,i.jsx)(n.li,{children:"Commit the changeset"}),"\n",(0,i.jsx)(n.li,{children:"Delete the changeset"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#more-samples",children:"More samples"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#attribute-form-qualifications",children:"Attribute form qualifications"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#attribute-element-list-qualification",children:"Attribute element list qualification"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#metric-set-qualification",children:"Metric set qualification"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#relationship-set-qualification",children:"Relationship set qualification"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#shortcut-to-a-report-qualification",children:"Shortcut-to-a-report qualification"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#shortcut-to-a-filter-qualification",children:"Shortcut-to-a-filter qualification"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#shortcut-to-a-prompt-qualification",children:"Shortcut-to-a-prompt qualification"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#attribute-joint-element-list-qualification",children:"Attribute joint element list qualification"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#custom-expression-qualification",children:"Custom expression qualification"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#logic-operators",children:"Logic operators"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"attribute-form-qualifications",children:"Attribute form qualifications"}),"\n",(0,i.jsx)(n.p,{children:"Create a filter based on attribute forms."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:'"type"'}),": ",(0,i.jsx)(n.code,{children:'"predicate_form_qualification"'})]}),"\n",(0,i.jsx)(n.p,{children:'Example 1: You want to create a new "Year@ID>2015" filter.'}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "filter",\n    "name": "Year > 2015",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateTree": {\n        "function": "greater",\n        "parameters": [\n          {\n            "parameterType": "constant",\n            "constant": {\n              "type": "double",\n              "value": "2015.0"\n            }\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:'Example 2: You want to create a new filter, "Year@ID in list (2015, 2017)", with Year@ID in the list of (2015, 2017).'}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "filter",\n    "name": "Year@ID in list (2015, 2017)",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateTree": {\n        "function": "in",\n        "parameters": [\n          {\n            "parameterType": "array",\n            "constantsType": "double",\n            "constants": ["2015.0", "2017.0"]\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"attribute-element-list-qualification",children:"Attribute element list qualification"}),"\n",(0,i.jsx)(n.p,{children:"Create a filter based on attribute elements."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:'"type"'}),": ",(0,i.jsx)(n.code,{children:'"predicate_element_list"'})]}),"\n",(0,i.jsx)(n.p,{children:"Example: You want to create a new filter with Category in Books and Electronics."}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "filter",\n    "name": "Category in Books and Electronics",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_element_list",\n      "predicateTree": {\n        "attribute": {\n          "objectId": "8D679D3711D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Category"\n        },\n        "elements": [\n          {\n            "display": "Electronics",\n            "elementId": "h2"\n          },\n          {\n            "display": "Books",\n            "elementId": "h1"\n          }\n        ],\n        "function": "in"\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"metric-set-qualification",children:"Metric set qualification"}),"\n",(0,i.jsx)(n.p,{children:"Create a filter based on a metric value or rank."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:'"type"'}),": ",(0,i.jsx)(n.code,{children:'"predicate_metric_qualification"'})]}),"\n",(0,i.jsx)(n.p,{children:'Example 1: You want to create a new "Cost>1K" filter, with Cost larger than 1000.'}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "filter",\n    "name": "Cost > 1K",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_metric_qualification",\n      "predicateText": "Cost > 1000",\n      "predicateTree": {\n        "function": "greater",\n        "parameters": [\n          {\n            "parameterType": "constant",\n            "constant": {\n              "type": "double",\n              "value": "1000.0"\n            }\n          }\n        ],\n        "levelType": "none",\n        "metric": {\n          "objectId": "7FD5B69611D5AC76C000D98A4CC5F24F",\n          "subType": "metric",\n          "name": "Cost"\n        },\n        "metricFunction": "value",\n        "isIndependent": 1,\n        "nullInclude": 0\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Example 2: You want to create a new filter that returns the top 5 Revenue."}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "filter",\n    "name": "Revenue Top 5",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_metric_qualification",\n      "predicateTree": {\n        "function": "less_equal",\n        "parameters": [\n          {\n            "parameterType": "constant",\n            "constant": {\n              "type": "int32",\n              "value": "5"\n            }\n          }\n        ],\n        "levelType": "none",\n        "metric": {\n          "objectId": "4C05177011D3E877C000B3B2D86C964F",\n          "subType": "metric",\n          "name": "Revenue"\n        },\n        "metricFunction": "rank_descend",\n        "isIndependent": 1,\n        "nullInclude": 0\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"relationship-set-qualification",children:"Relationship set qualification"}),"\n",(0,i.jsx)(n.p,{children:"Create a filter based on relationships between attributes."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:'"type"'}),": ",(0,i.jsx)(n.code,{children:'"predicate_relationship"'})]}),"\n",(0,i.jsx)(n.p,{children:"Example: You want to create a new filter to return Customers with Age between 25 and 35."}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "filter",\n    "name": "Customer between 25-35",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_relationship",\n      "predicateTree": {\n        "level": [\n          {\n            "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",\n            "subType": "attribute",\n            "name": "Customer"\n          }\n        ],\n        "guide": null,\n        "isIndependent": 1\n      },\n      "children": [\n        {\n          "type": "predicate_form_qualification",\n          "predicateTree": {\n            "function": "between",\n            "parameters": [\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "25.0"\n                }\n              },\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "35.0"\n                }\n              }\n            ],\n            "attribute": {\n              "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",\n              "subType": "attribute",\n              "name": "Customer Age"\n            },\n            "form": {\n              "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n              "subType": "attribute_form_system",\n              "name": "ID"\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"shortcut-to-a-report-qualification",children:"Shortcut-to-a-report qualification"}),"\n",(0,i.jsx)(n.p,{children:"Create a filter based on the results of an existing report."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:'"type"'}),": ",(0,i.jsx)(n.code,{children:'"predicate_report_qualification"'})]}),"\n",(0,i.jsx)(n.p,{children:"Example: You want to create a new filter using an existing report as a qualification."}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "filter",\n    "name": "Shortcut to a report",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_report_qualification",\n      "predicateTree": {\n        "report": {\n          "objectId": "62C8D5494DC4CDBE7C24568D4B687C31",\n          "subType": "report_grid",\n          "name": "Report Object"\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"shortcut-to-a-filter-qualification",children:"Shortcut-to-a-filter qualification"}),"\n",(0,i.jsx)(n.p,{children:"Create a filter based on an existing filter."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:'"type"'}),": ",(0,i.jsx)(n.code,{children:'"predicate_filter_qualification"'})]}),"\n",(0,i.jsx)(n.p,{children:"Example: You want to create a new filter using an existing filter as a qualification."}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "filter",\n    "name": "Shortcut To Filter",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_filter_qualification",\n      "predicateTree": {\n        "filter": {\n          "objectId": "320081BF47ECD3DEB07529B1BEF4271B",\n          "subType": "filter",\n          "name": "Filter Object"\n        },\n        "isIndependent": 1\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"shortcut-to-a-prompt-qualification",children:"Shortcut-to-a-prompt qualification"}),"\n",(0,i.jsx)(n.p,{children:"Create a filter based on an existing qualification prompt."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:'"type"'}),": ",(0,i.jsx)(n.code,{children:'"predicate_prompt_qualification"'})]}),"\n",(0,i.jsx)(n.p,{children:"Example: You want to create a new filter using an existing qualification prompt."}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "filter",\n    "name": "Shortcut To Prompt",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_prompt_qualification",\n      "predicateTree": {\n        "prompt": {\n          "objectId": "BC56872248A40C03B020C8B847537C6F",\n          "subType": "prompt_expression",\n          "name": "Prompt Qualification on Customer Age"\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"attribute-joint-element-list-qualification",children:"Attribute joint element list qualification"}),"\n",(0,i.jsx)(n.p,{children:"Create a filter based on attribute elements from different attributes."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:'"type"'}),": ",(0,i.jsx)(n.code,{children:'"predicate_joint_element_list"'})]}),"\n",(0,i.jsx)(n.p,{children:"Example: You want to create a new filter that returns the data for Books in the Northeast, and Electronics in the Southwest."}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "filter",\n    "name": "Category & Region",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_joint_element_list",\n      "predicateTree": {\n        "level": [\n          {\n            "objectId": "8D679D3711D3E4981000E787EC6DE8A4",\n            "subType": "attribute",\n            "name": "Category"\n          },\n          {\n            "objectId": "8D679D4B11D3E4981000E787EC6DE8A4",\n            "subType": "attribute",\n            "name": "Region"\n          }\n        ],\n        "tuples": [\n          [\n            {\n              "display": "Books",\n              "elementId": "h1"\n            },\n            {\n              "display": "Northeast",\n              "elementId": "h1"\n            }\n          ],\n          [\n            {\n              "display": "Electronics",\n              "elementId": "h2"\n            },\n            {\n              "display": "Southwest",\n              "elementId": "h7"\n            }\n          ]\n        ]\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"custom-expression-qualification",children:"Custom expression qualification"}),"\n",(0,i.jsx)(n.p,{children:"Create a filter based on a custom expression."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:'"type"'}),": ",(0,i.jsx)(n.code,{children:'"predicate_custom"'})]}),"\n",(0,i.jsxs)(n.p,{children:["Please refer to ",(0,i.jsx)(n.a,{href:"/rest-api-docs/common-workflows/modeling/manage-filter-objects/create-a-filter-object-with-a-custom-expression",children:"Create a new filter object using a custom expression"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"logic-operators",children:"Logic operators"}),"\n",(0,i.jsx)(n.p,{children:"Create a filter using logic operators to combine multiple predicates."}),"\n",(0,i.jsx)(n.p,{children:"Example: You want to create a new filter that returns the data for female customers of all ages, and males between the ages of 25 and 35."}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "subType": "filter",\n    "name": "Females & Males(25-35)",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "function": "or",\n      "children": [\n        {\n          "type": "predicate_form_qualification",\n          "predicateTree": {\n            "function": "equals",\n            "parameters": [\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "string",\n                  "value": "Female"\n                }\n              }\n            ],\n            "attribute": {\n              "objectId": "4151F1304F00A51EB13BCF84283396BE",\n              "subType": "attribute",\n              "name": "Customer Gender"\n            },\n            "form": {\n              "objectId": "CCFBE2A5EADB4F50941FB879CCF1721C",\n              "subType": "attribute_form_system",\n              "name": "DESC"\n            },\n            "dataLocale": "en-US"\n          }\n        },\n        {\n          "function": "and",\n          "children": [\n            {\n              "type": "predicate_form_qualification",\n              "predicateTree": {\n                "function": "between",\n                "parameters": [\n                  {\n                    "parameterType": "constant",\n                    "constant": {\n                      "type": "double",\n                      "value": "25.0"\n                    }\n                  },\n                  {\n                    "parameterType": "constant",\n                    "constant": {\n                      "type": "double",\n                      "value": "35.0"\n                    }\n                  }\n                ],\n                "attribute": {\n                  "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",\n                  "subType": "attribute",\n                  "name": "Customer Age"\n                },\n                "form": {\n                  "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n                  "subType": "attribute_form_system",\n                  "name": "ID"\n                }\n              }\n            },\n            {\n              "type": "predicate_form_qualification",\n              "predicateTree": {\n                "function": "equals",\n                "parameters": [\n                  {\n                    "parameterType": "constant",\n                    "constant": {\n                      "type": "string",\n                      "value": "Male"\n                    }\n                  }\n                ],\n                "attribute": {\n                  "objectId": "4151F1304F00A51EB13BCF84283396BE",\n                  "subType": "attribute",\n                  "name": "Customer Gender"\n                },\n                "form": {\n                  "objectId": "CCFBE2A5EADB4F50941FB879CCF1721C",\n                  "subType": "attribute_form_system",\n                  "name": "DESC"\n                },\n                "dataLocale": "en-US"\n              }\n            }\n          ],\n          "type": "operator"\n        }\n      ],\n      "type": "operator"\n    }\n  }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var i=t(96540);const r={},a=i.createContext(r);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);