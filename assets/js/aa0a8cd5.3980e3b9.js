"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1294],{17491:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=t(74848),r=t(28453);const s={title:"Retrieve a filter's definition",sidebar_label:"Retrieve a filter's definition",description:"This topic covers several workflows for retrieving a filter's definition."},o=void 0,a={id:"common-workflows/modeling/manage-filter-objects/retrieve-a-filters-definition",title:"Retrieve a filter's definition",description:"This topic covers several workflows for retrieving a filter's definition.",source:"@site/docs/common-workflows/modeling/manage-filter-objects/retrieve-a-filters-definition.md",sourceDirName:"common-workflows/modeling/manage-filter-objects",slug:"/common-workflows/modeling/manage-filter-objects/retrieve-a-filters-definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-filter-objects/retrieve-a-filters-definition",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-filter-objects/retrieve-a-filters-definition.md",tags:[],version:"current",lastUpdatedBy:"AugLychee",lastUpdatedAt:1710818077,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{title:"Retrieve a filter's definition",sidebar_label:"Retrieve a filter's definition",description:"This topic covers several workflows for retrieving a filter's definition."},sidebar:"tutorialSidebar",previous:{title:"Manage filter objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-filter-objects/"},next:{title:"Retrieve a filter's definition within a changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-filter-objects/retrieve-a-filters-definition-within-a-changeset"}},l={},d=[{value:"Retrieve a filter&#39;s definition",id:"retrieve-a-filters-definition",level:2},{value:"Retrieve a filter&#39;s definition in tokens format",id:"retrieve-a-filters-definition-in-tokens-format",level:2},{value:"Retrieve a filter&#39;s definition with custom expressions in tree and tokens formats",id:"retrieve-a-filters-definition-with-custom-expressions-in-tree-and-tokens-formats",level:2},{value:"Retrieve a filter&#39;s definition that contains inline custom expressions, with the expression in tree and tokens formats",id:"retrieve-a-filters-definition-that-contains-inline-custom-expressions-with-the-expression-in-tree-and-tokens-formats",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Available:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{since:"2021"}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["You can try out this workflow at ",(0,i.jsx)(n.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-c532ccd7-317b-4f18-9a37-1388740cbab5?ctx=documentation",children:"REST API Playground"}),"."]}),(0,i.jsxs)(n.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,i.jsx)(n.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,i.jsx)(n.p,{children:"This topic covers several workflows for retrieving a filter's definition:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#retrieve-a-filters-definition",children:"Retrieve a filter's definition"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#retrieve-a-filters-definition-in-tokens-format",children:"Retrieve a filter's definition in tokens format"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#retrieve-a-filters-definition-with-custom-expressions-in-tree-and-tokens-formats",children:"Retrieve a filter's definition with custom expressions in tree and tokens formats"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#retrieve-a-filters-definition-that-contains-inline-custom-expressions-with-the-expression-in-tree-and-tokens-formats",children:"Retrieve a filter's definition that contains inline custom expressions, with the expression in tree and tokens formats"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"retrieve-a-filters-definition",children:"Retrieve a filter's definition"}),"\n",(0,i.jsx)(n.p,{children:"This workflow sample demonstrates how to retrieve the definition of a filter through the Modeling service."}),"\n",(0,i.jsxs)(n.p,{children:['You want to get the definition of the "Year > 2015" filter object. The object ID of the filter is ',(0,i.jsx)(n.code,{children:"8018C24FEBC4406CB9E36838C01C82D1"})," in the MicroStrategy Tutorial project. The project ID is ",(0,i.jsx)(n.code,{children:"B7CA92F04B9FAE8D941C3E9B7E0CD754"}),"."]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["Get the authorization token needed to execute the request with ",(0,i.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,i.jsxs)(n.p,{children:["Get the project ID from ",(0,i.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,i.jsxs)(n.p,{children:["Retrieve the filter's definition using ",(0,i.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Filters/ms-getFilterDetails",children:"GET /api/model/filters/{filterId}"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Body: Empty"}),"\n",(0,i.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/filters/8018C24FEBC4406CB9E36838C01C82D1" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,i.jsx)(n.p,{children:"You can view the filter's definition in the body of the response."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2020-11-17T16:42:39.776Z",\n    "dateModified": "2020-11-17T16:42:57.268Z",\n    "versionId": "F253FD1211EB28F32AE10080EFC56102",\n    "primaryLocale": "en-US",\n    "objectId": "8018C24FEBC4406CB9E36838C01C82D1",\n    "subType": "filter",\n    "name": "Year > 2015"\n  },\n  "qualification": {\n    "text": "Year (ID) > 2015",\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateId": "62EE53C755F64508BAEE99989E9EACCC",\n      "predicateText": "Year (ID) > 2015",\n      "predicateTree": {\n        "function": "greater",\n        "parameters": [\n          {\n            "parameterType": "constant",\n            "constant": {\n              "type": "double",\n              "value": "2015.0"\n            }\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Response Code: 200 (The filter's definition was returned successfully.)"}),"\n",(0,i.jsx)(n.h2,{id:"retrieve-a-filters-definition-in-tokens-format",children:"Retrieve a filter's definition in tokens format"}),"\n",(0,i.jsxs)(n.p,{children:['In this workflow sample, you want to get the definition of the "Year < 2015" filter object. The object ID of the filter is ',(0,i.jsx)(n.code,{children:"8018C24FEBC4406CB9E36838C01C82D1"}),". Unlike the first workflow, we want to enable the showFilterTokens parameter to retrieve the filter's definition in tokens format as well."]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:'Tokens are a semi-structured representation of MicroStrategy expression text that includes object references. For example, let\u2019s say a filter expression is "Revenue > Cost". When the filter expression is represented as tokens, the text is broken down into pieces (tokens) with information about what these pieces represent in the metadata: ("Revenue", Revenue_ID), (">", GreaterThan_ID), ("Cost", Cost_ID).'}),(0,i.jsx)(n.p,{children:'A filter\'s "qualification" is presented in the following formats:'}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'"text": A human-readable, but non-parsable text, describing a filter\'s qualification.'}),"\n",(0,i.jsx)(n.li,{children:'"tree": A tree data structure fully defining the filter\'s qualification.'}),"\n",(0,i.jsx)(n.li,{children:'"tokens": A list of parsed tokens that define a filter\'s qualification. Be aware that generating tokens requires additional time.'}),"\n"]}),(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"showFilterTokens"})," is omitted or ",(0,i.jsx)(n.code,{children:"false"}),', only "text" and "tree" formats are returned.']}),(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"showFilterTokens"})," is ",(0,i.jsx)(n.code,{children:"true"}),', all "text", "tree" and "tokens" formats are returned.']})]}),"\n",(0,i.jsxs)(n.p,{children:["This workflow sample is similar to ",(0,i.jsx)(n.a,{href:"#retrieve-a-filters-definition",children:"Retrieve a filter's definition"}),", except with ",(0,i.jsx)(n.code,{children:"showFilterTokens=true"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X GET "https://demo.cloud.microstrategy.com/MicroStrategyLibrary/api/model/filters/5B64A6A6E5B1466497D9D4D35328D91B?showFilterTokens=true" -H "accept: application/json" -H "X-MSTR-AuthToken: mcgi1hfofet0f1nhs3u3kjurah" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Sample Response Body: You can view the filter\u2019s definition in the body of the response. If you compare this to ",(0,i.jsx)(n.a,{href:"#retrieve-a-filters-definition",children:"Retrieve a filter's definition"}),', "qualification" has an extra field of "tokens".']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2020-11-30T12:56:01.400Z",\n    "dateModified": "2020-11-30T12:56:01.400Z",\n    "versionId": "6602277211EB330B01430080EF051B59",\n    "primaryLocale": "en-US",\n    "objectId": "5B64A6A6E5B1466497D9D4D35328D91B",\n    "subType": "filter",\n    "name": "Year > 2015"\n  },\n  "qualification": {\n    "text": "Year (ID) > 2015",\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateId": "A0D326D440304DC4B07F12DA6631447F",\n      "predicateText": "Year (ID) > 2015",\n      "predicateTree": {\n        "function": "greater",\n        "parameters": [\n          {\n            "parameterType": "constant",\n            "constant": {\n              "type": "double",\n              "value": "2015.0"\n            }\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    },\n    "tokens": [\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "%",\n        "type": "character"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "Year@ID",\n        "type": "object_at_form",\n        "target": {\n          "dateCreated": "2001-01-02T20:48:10.000Z",\n          "dateModified": "2012-01-27T12:00:32.000Z",\n          "versionId": "24CEEC7044C6C7008EE0DF96565E9459",\n          "primaryLocale": "en-US",\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "attributeForm": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5"\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": ">",\n        "type": "character",\n        "target": {\n          "dateCreated": "2001-01-02T20:47:41.000Z",\n          "dateModified": "2018-01-29T21:13:06.000Z",\n          "versionId": "332E00E411E8053925F00080EF7500C5",\n          "primaryLocale": "en-US",\n          "objectId": "8107C317DD9911D3B98100C04F2233EA",\n          "subType": "function",\n          "name": ">",\n          "description": "Returns TRUE if the first value is greater than the second value."\n        }\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "2015.0",\n        "type": "integer"\n      },\n      {\n        "level": "resolved",\n        "state": "initial",\n        "value": "",\n        "type": "end_of_text"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"retrieve-a-filters-definition-with-custom-expressions-in-tree-and-tokens-formats",children:"Retrieve a filter's definition with custom expressions in tree and tokens formats"}),"\n",(0,i.jsxs)(n.p,{children:['In this workflow sample, you want to get the definition of a filter that contains the custom expression, "Year@ID > 2015", with the expression returned in tree and tokens formats. The object ID of the filter is ',(0,i.jsx)(n.code,{children:"B4B9AE1411EB3309268D0080EFE5DA56"}),". The following is a screenshot of what the filter looks like in the Filter editor."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"filter_editor",src:t(33497).A+"",width:"1993",height:"1524"})}),"\n",(0,i.jsx)(n.p,{children:"If custom expressions are used in a filter, this parameter specifies the format in which they are returned in the response."}),"\n",(0,i.jsx)(n.p,{children:"Custom expressions are presented in the following formats:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'"text": A human-readable, but non-parsable text, describing the expression. This is the default format that is always returned in the response.'}),"\n",(0,i.jsx)(n.li,{children:'"tree": A tree data structure fully defining the expression. This format can be used if you want to examine and modify the expression programmatically.'}),"\n",(0,i.jsx)(n.li,{children:'"tokens": A list of parsed tokens. This format can be used if you want to examine and modify the expression using the parser component. Be aware that generating tokens requires additional time.'}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'Tokens are a semi-structured representation of MicroStrategy expression text that includes object references. For example, let\u2019s say a filter expression is "Revenue > Cost". When the filter expression is represented as tokens, the text is broken down into pieces (tokens) with information about what these pieces represent in the metadata: ("Revenue", Revenue_ID), (">", GreaterThan_ID), ("Cost", Cost_ID).'}),"\n",(0,i.jsx)(n.p,{children:'If omitted, the custom expression is returned in "text" format.'}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"tree"}),', the custom expression is returned in "text" and "tree" format.']}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"tokens"}),', the custom expression is returned in "text" and "tokens" format.']}),"\n",(0,i.jsxs)(n.p,{children:["This workflow is similar to ",(0,i.jsx)(n.a,{href:"#retrieve-a-filters-definition",children:"Retrieve a filter's definition"}),", except with ",(0,i.jsx)(n.code,{children:"showExpressionAs=tree"})," and ",(0,i.jsx)(n.code,{children:"showExpressionAs=tokens"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X GET "https://demo.cloud.microstrategy.com/MicroStrategyLibrary/api/model/filters/B4B9AE1411EB3309268D0080EFE5DA56?showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: mcgi1hfofet0f1nhs3u3kjurah" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Sample Response Body: You can view the filter\u2019s definition in the body of the response. Notice that, ",(0,i.jsx)(n.code,{children:"['qualification']['tree']['PredicateTree']['expression']"}),' contains the fields "tree" and "tokens", representing the customer expression in ',(0,i.jsx)(n.code,{children:"tree"})," and ",(0,i.jsx)(n.code,{children:"tokens"})," format respectively."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2020-11-30T12:56:18.228Z",\n    "dateModified": "2020-11-30T19:36:32.103Z",\n    "versionId": "596C793011EB334357FA0080EF7579B5",\n    "primaryLocale": "en-US",\n    "objectId": "B4B9AE1411EB3309268D0080EFE5DA56",\n    "subType": "filter",\n    "name": "Year@ID > 2015"\n  },\n  "qualification": {\n    "text": "Year (ID) > 2015",\n    "tree": {\n      "type": "predicate_custom",\n      "predicateId": "A6CBA8F104FD4194B4727AE74DE8F721",\n      "predicateText": "Year (ID) > 2015",\n      "predicateTree": {\n        "expression": {\n          "text": "Year (ID) > 2015",\n          "tree": {\n            "function": "greater",\n            "children": [\n              {\n                "attribute": {\n                  "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n                  "subType": "attribute",\n                  "name": "Year"\n                },\n                "form": {\n                  "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n                  "subType": "attribute_form_system",\n                  "name": "ID"\n                },\n                "type": "form_shortcut"\n              },\n              {\n                "type": "constant",\n                "variant": {\n                  "type": "int32",\n                  "value": "2015"\n                }\n              }\n            ],\n            "levelType": "metric_level",\n            "type": "operator"\n          },\n          "tokens": [\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "%",\n              "type": "character"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "Year@ID",\n              "type": "object_at_form",\n              "target": {\n                "dateCreated": "2001-01-02T20:48:10.000Z",\n                "dateModified": "2012-01-27T12:00:32.000Z",\n                "versionId": "24CEEC7044C6C7008EE0DF96565E9459",\n                "primaryLocale": "en-US",\n                "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n                "subType": "attribute",\n                "name": "Year"\n              },\n              "attributeForm": {\n                "objectId": "45C11FA478E745FEA08D781CEA190FE5"\n              }\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": ">",\n              "type": "character",\n              "target": {\n                "dateCreated": "2001-01-02T20:47:41.000Z",\n                "dateModified": "2018-01-29T21:13:06.000Z",\n                "versionId": "332E00E411E8053925F00080EF7500C5",\n                "primaryLocale": "en-US",\n                "objectId": "8107C317DD9911D3B98100C04F2233EA",\n                "subType": "function",\n                "name": ">",\n                "description": "Returns TRUE if the first value is greater than the second value."\n              }\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "2015",\n              "type": "integer"\n            },\n            {\n              "level": "resolved",\n              "state": "initial",\n              "value": "",\n              "type": "end_of_text"\n            }\n          ]\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sample Response Code: 200 (Filter's definition is returned successfully.)"}),"\n",(0,i.jsx)(n.h2,{id:"retrieve-a-filters-definition-that-contains-inline-custom-expressions-with-the-expression-in-tree-and-tokens-formats",children:"Retrieve a filter's definition that contains inline custom expressions, with the expression in tree and tokens formats"}),"\n",(0,i.jsxs)(n.p,{children:["In this workflow sample, you want to get the definition of a filter that contains an inline custom expression, with the expression returned in tree and tokens format. The object ID of the filter is ",(0,i.jsx)(n.code,{children:"B488A1B711EB330926FF0080EFB57956"}),". The following is a screenshot of what the filter looks like in the Filter editor."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"filter_editor_custom_expressions",src:t(26763).A+"",width:"1231",height:"938"})}),"\n",(0,i.jsx)(n.p,{children:"Get filter\u2019s definition with its inline custom expression in tree and tokens format."}),"\n",(0,i.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X GET "https://demo.cloud.microstrategy.com/MicroStrategyLibrary/api/model/filters/B488A1B711EB330926FF0080EFB57956?showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: mcgi1hfofet0f1nhs3u3kjurah" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Sample Response Body: You can view the filter\u2019s definition in the body of the response. Notice that, ",(0,i.jsx)(n.code,{children:"['qualification']['tree']['PredicateTree']['expression']"}),' contains the fields "tree" and "tokens", representing the customer expression in ',(0,i.jsx)(n.code,{children:"tree"})," and ",(0,i.jsx)(n.code,{children:"tokens"})," format respectively."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2020-11-30T12:56:40.479Z",\n    "dateModified": "2020-11-30T19:36:49.829Z",\n    "versionId": "63FD317811EB334357BA0080EF5539B5",\n    "primaryLocale": "en-US",\n    "objectId": "B488A1B711EB330926FF0080EFB57956",\n    "subType": "filter",\n    "name": "Year > Current Year - 5"\n  },\n  "qualification": {\n    "text": "Year (ID) > (Year(CurrentDate) - 5)",\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateId": "C7ACD6179CC44F219A663E95D236583F",\n      "predicateText": "Year (ID) > (Year(CurrentDate) - 5)",\n      "predicateTree": {\n        "function": "greater",\n        "parameters": [\n          {\n            "parameterType": "expression",\n            "expression": {\n              "text": "(Year(CurrentDate) - 5)",\n              "tree": {\n                "function": "minus",\n                "children": [\n                  {\n                    "function": "year",\n                    "children": [\n                      {\n                        "function": "current_date",\n                        "type": "operator"\n                      }\n                    ],\n                    "type": "operator"\n                  },\n                  {\n                    "type": "constant",\n                    "variant": {\n                      "type": "int32",\n                      "value": "5"\n                    }\n                  }\n                ],\n                "type": "operator"\n              },\n              "tokens": [\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "(",\n                  "type": "character"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "Year",\n                  "type": "function",\n                  "target": {\n                    "dateCreated": "2001-11-09T15:47:55.000Z",\n                    "dateModified": "2018-01-29T21:13:05.000Z",\n                    "versionId": "32737F3011E8053925F00080EF7500C5",\n                    "primaryLocale": "en-US",\n                    "objectId": "6F7DF5F8449111D5BEA300B0D01A55EF",\n                    "subType": "function",\n                    "name": "Year",\n                    "description": "Returns the year of the input date."\n                  }\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "(",\n                  "type": "character"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "CurrentDate",\n                  "type": "function",\n                  "target": {\n                    "dateCreated": "2001-11-09T15:47:54.000Z",\n                    "dateModified": "2018-01-29T21:13:05.000Z",\n                    "versionId": "32363DBE11E8053925F00080EF7500C5",\n                    "primaryLocale": "en-US",\n                    "objectId": "6F7DF5F1449111D5BEA300B0D01A55EF",\n                    "subType": "function",\n                    "name": "CurrentDate",\n                    "description": "Returns the current date based on the database timer. This function takes no input parameters."\n                  }\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "(",\n                  "type": "character"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": ")",\n                  "type": "character"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": ")",\n                  "type": "character"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "-",\n                  "type": "character",\n                  "target": {\n                    "dateCreated": "2001-01-02T20:47:41.000Z",\n                    "dateModified": "2018-01-29T21:13:06.000Z",\n                    "versionId": "330711DC11E8053925F00080EF7500C5",\n                    "primaryLocale": "en-US",\n                    "objectId": "8107C311DD9911D3B98100C04F2233EA",\n                    "subType": "function",\n                    "name": "-",\n                    "description": "Returns the difference between two values."\n                  }\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": "5",\n                  "type": "integer"\n                },\n                {\n                  "level": "resolved",\n                  "state": "initial",\n                  "value": ")",\n                  "type": "character"\n                }\n              ]\n            }\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    }\n  }\n}\n'})})]})}function f(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},33497:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/filter_editor-5b97eb7c86e2934a607947ca9d19ca98.png"},26763:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/filter_editor_custom_expressions-e326cd8d8179ef8e0b5a7fd731f9a22b.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);