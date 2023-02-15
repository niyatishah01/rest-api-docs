"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1029],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8267:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var a,r=n(3117),i=n(102),o=(n(7294),n(3905)),l=["components"],s={title:"Create a filter object",sidebar_label:"Create a filter object",description:"This workflow sample demonstrates how to create a new filter object through the Modeling service."},p=void 0,c={unversionedId:"common-workflows/modeling/manage-filter-objects/create-a-filter-object",id:"common-workflows/modeling/manage-filter-objects/create-a-filter-object",title:"Create a filter object",description:"This workflow sample demonstrates how to create a new filter object through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-filter-objects/create-a-filter-object.md",sourceDirName:"common-workflows/modeling/manage-filter-objects",slug:"/common-workflows/modeling/manage-filter-objects/create-a-filter-object",permalink:"/rest-api-docs/common-workflows/modeling/manage-filter-objects/create-a-filter-object",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-filter-objects/create-a-filter-object.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1676479687,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{title:"Create a filter object",sidebar_label:"Create a filter object",description:"This workflow sample demonstrates how to create a new filter object through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a filter's definition within a changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-filter-objects/retrieve-a-filters-definition-within-a-changeset"},next:{title:"Create a filter object with a custom expression",permalink:"/rest-api-docs/common-workflows/modeling/manage-filter-objects/create-a-filter-object-with-a-custom-expression"}},u={},m=[{value:"Create a new filter",id:"create-a-new-filter",level:2},{value:"More samples",id:"more-samples",level:2},{value:"Attribute form qualifications",id:"attribute-form-qualifications",level:3},{value:"Attribute element list qualification",id:"attribute-element-list-qualification",level:3},{value:"Metric set qualification",id:"metric-set-qualification",level:3},{value:"Relationship set qualification",id:"relationship-set-qualification",level:3},{value:"Shortcut-to-a-report qualification",id:"shortcut-to-a-report-qualification",level:3},{value:"Shortcut-to-a-filter qualification",id:"shortcut-to-a-filter-qualification",level:3},{value:"Shortcut-to-a-prompt qualification",id:"shortcut-to-a-prompt-qualification",level:3},{value:"Attribute joint element list qualification",id:"attribute-joint-element-list-qualification",level:3},{value:"Custom expression qualification",id:"custom-expression-qualification",level:3},{value:"Logic operators",id:"logic-operators",level:3}],d=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),f={toc:m};function b(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(d,{since:"2021",mdxType:"Available"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-5bb60de6-52e2-43c4-87bc-b404125f96ad?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"This workflow sample demonstrates how to create a new filter object through the Modeling service."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a changeset"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#create-a-new-filter"},"Create a filter definition")),(0,o.kt)("li",{parentName:"ol"},"Commit the changeset"),(0,o.kt)("li",{parentName:"ol"},"Delete the changeset")),(0,o.kt)("p",null,"You want to create a new \u201cYear>2015\u201c filter object under the Public Objects folder in the MicroStrategy Tutorial project. The folder object ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"98FE182C2A10427EACE0CD30B6768258"),". The project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("p",null,"Changesets are used in this workflow. For information on how to create and use changesets see ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),"."),(0,o.kt)("h2",{id:"create-a-new-filter"},"Create a new filter"),(0,o.kt)("p",null,"Endpoint: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Filters/ms-postFilter"},"POST /api/model/filters"),"."),(0,o.kt)("p",null,'You want to create the filter using the \u201ctree\u201d format for the "qualifications\u201d. More examples of creating a new filter are listed below.'),(0,o.kt)("p",null,'To create a filter, in the request body, the filter\u2019s "qualification" needs to be in either "tree" or "tokens" format. If both are provided, only "tree" is used.'),(0,o.kt)("p",null,"When creating an attribute element list qualification, only the \u201ctree\u201c format is supported."),(0,o.kt)("p",null,'If the \'tree\' format is used, the custom expressions, "expression" needs to be in either "tree" or "tokens" format. If both are provided, only "tree" is used.'),(0,o.kt)("p",null,'When creating a qualification with inline custom expressions, only the "tree" format is supported.'),(0,o.kt)("p",null,"If you are constructing the POST filter request body based on the response of the GET filter call of an existing filter, be aware that any embedded objects (",(0,o.kt)("inlineCode",{parentName:"p"},'"isEmbedded":true"'),") cannot be used to create a new filter, as the embedded objects are only \u201clocal\u201c to its owner (the existing filter)."),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'   "accept": "application/json"\n   "X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n   "X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "filter",\n    "name": "Year > 2015",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateTree": {\n        "function": "greater",\n        "parameters": [\n          {\n            "parameterType": "constant",\n            "constant": {\n              "type": "double",\n              "value": "2015.0"\n            }\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -djectId\\\\":\\\\"45C11FA478E745FEA08D781CEA190FE5\\\\",\\\\"subType\\\\":\\\\"attribute_form_system\\\\",\\\\"name\\\\":\\\\"ID\\\\"}}}}}"\n')),(0,o.kt)("p",null,"Sample Response Body: You can view the new filter's definition in the body of the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "versionId": "88DF4A68957941EBBBC69B975B2D011F",\n    "primaryLocale": "en-US",\n    "objectId": "A3EFA30AFC6D4A6C89D0D1F967BD505D",\n    "subType": "filter",\n    "name": "Year > 2015",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "text": "Year (ID) > 2015",\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateId": "43F6594B23BF4510A090F5AB3C44358F",\n      "predicateText": "Year (ID) > 2015",\n      "predicateTree": {\n        "function": "greater",\n        "parameters": [\n          {\n            "parameterType": "constant",\n            "constant": {\n              "type": "double",\n              "value": "2015.0"\n            }\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Response Code: 201 (A new filter is created successfully in the changeset.)"),(0,o.kt)("h2",{id:"more-samples"},"More samples"),(0,o.kt)("p",null,"A filter takes the form of an expression tree over data structures known as predicates. Each predicate represents a single restriction on the available data. The filter expression tree combines predicates together using logical operators."),(0,o.kt)("p",null,"The following are sample JSON request bodies for creating filters of each type of predicates, and filters combining predicates using logic operators."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a changeset"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#create-a-new-filter"},"Create a new filter")),(0,o.kt)("li",{parentName:"ul"},"Commit the changeset"),(0,o.kt)("li",{parentName:"ul"},"Delete the changeset"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#more-samples"},"More samples"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#attribute-form-qualifications"},"Attribute form qualifications")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#attribute-element-list-qualification"},"Attribute element list qualification")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#metric-set-qualification"},"Metric set qualification")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#relationship-set-qualification"},"Relationship set qualification")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#shortcut-to-a-report-qualification"},"Shortcut-to-a-report qualification")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#shortcut-to-a-filter-qualification"},"Shortcut-to-a-filter qualification")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#shortcut-to-a-prompt-qualification"},"Shortcut-to-a-prompt qualification")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#attribute-joint-element-list-qualification"},"Attribute joint element list qualification")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#custom-expression-qualification"},"Custom expression qualification")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#logic-operators"},"Logic operators"))))),(0,o.kt)("h3",{id:"attribute-form-qualifications"},"Attribute form qualifications"),(0,o.kt)("p",null,"Create a filter based on attribute forms."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'"type"'),": ",(0,o.kt)("inlineCode",{parentName:"p"},'"predicate_form_qualification"')),(0,o.kt)("p",null,'Example 1: You want to create a new "Year@ID>2015" filter.'),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "filter",\n    "name": "Year > 2015",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateTree": {\n        "function": "greater",\n        "parameters": [\n          {\n            "parameterType": "constant",\n            "constant": {\n              "type": "double",\n              "value": "2015.0"\n            }\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,'Example 2: You want to create a new filter, "Year@ID in list (2015, 2017)", with Year@ID in the list of (2015, 2017).'),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "filter",\n    "name": "Year@ID in list (2015, 2017)",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateTree": {\n        "function": "in",\n        "parameters": [\n          {\n            "parameterType": "array",\n            "constantsType": "double",\n            "constants": ["2015.0", "2017.0"]\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"attribute-element-list-qualification"},"Attribute element list qualification"),(0,o.kt)("p",null,"Create a filter based on attribute elements."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'"type"'),": ",(0,o.kt)("inlineCode",{parentName:"p"},'"predicate_element_list"')),(0,o.kt)("p",null,"Example: You want to create a new filter with Category in Books and Electronics."),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "filter",\n    "name": "Category in Books and Electronics",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_element_list",\n      "predicateTree": {\n        "attribute": {\n          "objectId": "8D679D3711D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Category"\n        },\n        "elements": [\n          {\n            "display": "Electronics",\n            "elementId": "h2"\n          },\n          {\n            "display": "Books",\n            "elementId": "h1"\n          }\n        ],\n        "function": "in"\n      }\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"metric-set-qualification"},"Metric set qualification"),(0,o.kt)("p",null,"Create a filter based on a metric value or rank."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'"type"'),": ",(0,o.kt)("inlineCode",{parentName:"p"},'"predicate_metric_qualification"')),(0,o.kt)("p",null,'Example 1: You want to create a new "Cost>1K" filter, with Cost larger than 1000.'),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "filter",\n    "name": "Cost > 1K",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_metric_qualification",\n      "predicateText": "Cost > 1000",\n      "predicateTree": {\n        "function": "greater",\n        "parameters": [\n          {\n            "parameterType": "constant",\n            "constant": {\n              "type": "double",\n              "value": "1000.0"\n            }\n          }\n        ],\n        "levelType": "none",\n        "metric": {\n          "objectId": "7FD5B69611D5AC76C000D98A4CC5F24F",\n          "subType": "metric",\n          "name": "Cost"\n        },\n        "metricFunction": "value",\n        "isIndependent": 1,\n        "nullInclude": 0\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Example 2: You want to create a new filter that returns the top 5 Revenue."),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "filter",\n    "name": "Revenue Top 5",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_metric_qualification",\n      "predicateTree": {\n        "function": "less_equal",\n        "parameters": [\n          {\n            "parameterType": "constant",\n            "constant": {\n              "type": "int32",\n              "value": "5"\n            }\n          }\n        ],\n        "levelType": "none",\n        "metric": {\n          "objectId": "4C05177011D3E877C000B3B2D86C964F",\n          "subType": "metric",\n          "name": "Revenue"\n        },\n        "metricFunction": "rank_descend",\n        "isIndependent": 1,\n        "nullInclude": 0\n      }\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"relationship-set-qualification"},"Relationship set qualification"),(0,o.kt)("p",null,"Create a filter based on relationships between attributes."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'"type"'),": ",(0,o.kt)("inlineCode",{parentName:"p"},'"predicate_relationship"')),(0,o.kt)("p",null,"Example: You want to create a new filter to return Customers with Age between 25 and 35."),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "filter",\n    "name": "Customer between 25-35",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_relationship",\n      "predicateTree": {\n        "level": [\n          {\n            "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",\n            "subType": "attribute",\n            "name": "Customer"\n          }\n        ],\n        "guide": null,\n        "isIndependent": 1\n      },\n      "children": [\n        {\n          "type": "predicate_form_qualification",\n          "predicateTree": {\n            "function": "between",\n            "parameters": [\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "25.0"\n                }\n              },\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "double",\n                  "value": "35.0"\n                }\n              }\n            ],\n            "attribute": {\n              "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",\n              "subType": "attribute",\n              "name": "Customer Age"\n            },\n            "form": {\n              "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n              "subType": "attribute_form_system",\n              "name": "ID"\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"shortcut-to-a-report-qualification"},"Shortcut-to-a-report qualification"),(0,o.kt)("p",null,"Create a filter based on the results of an existing report."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'"type"'),": ",(0,o.kt)("inlineCode",{parentName:"p"},'"predicate_report_qualification"')),(0,o.kt)("p",null,"Example: You want to create a new filter using an existing report as a qualification."),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "filter",\n    "name": "Shortcut to a report",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_report_qualification",\n      "predicateTree": {\n        "report": {\n          "objectId": "62C8D5494DC4CDBE7C24568D4B687C31",\n          "subType": "report_grid",\n          "name": "Report Object"\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"shortcut-to-a-filter-qualification"},"Shortcut-to-a-filter qualification"),(0,o.kt)("p",null,"Create a filter based on an existing filter."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'"type"'),": ",(0,o.kt)("inlineCode",{parentName:"p"},'"predicate_filter_qualification"')),(0,o.kt)("p",null,"Example: You want to create a new filter using an existing filter as a qualification."),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "filter",\n    "name": "Shortcut To Filter",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_filter_qualification",\n      "predicateTree": {\n        "filter": {\n          "objectId": "320081BF47ECD3DEB07529B1BEF4271B",\n          "subType": "filter",\n          "name": "Filter Object"\n        },\n        "isIndependent": 1\n      }\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"shortcut-to-a-prompt-qualification"},"Shortcut-to-a-prompt qualification"),(0,o.kt)("p",null,"Create a filter based on an existing qualification prompt."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'"type"'),": ",(0,o.kt)("inlineCode",{parentName:"p"},'"predicate_prompt_qualification"')),(0,o.kt)("p",null,"Example: You want to create a new filter using an existing qualification prompt."),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "filter",\n    "name": "Shortcut To Prompt",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_prompt_qualification",\n      "predicateTree": {\n        "prompt": {\n          "objectId": "BC56872248A40C03B020C8B847537C6F",\n          "subType": "prompt_expression",\n          "name": "Prompt Qualification on Customer Age"\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"attribute-joint-element-list-qualification"},"Attribute joint element list qualification"),(0,o.kt)("p",null,"Create a filter based on attribute elements from different attributes."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'"type"'),": ",(0,o.kt)("inlineCode",{parentName:"p"},'"predicate_joint_element_list"')),(0,o.kt)("p",null,"Example: You want to create a new filter that returns the data for Books in the Northeast, and Electronics in the Southwest."),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "filter",\n    "name": "Category & Region",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_joint_element_list",\n      "predicateTree": {\n        "level": [\n          {\n            "objectId": "8D679D3711D3E4981000E787EC6DE8A4",\n            "subType": "attribute",\n            "name": "Category"\n          },\n          {\n            "objectId": "8D679D4B11D3E4981000E787EC6DE8A4",\n            "subType": "attribute",\n            "name": "Region"\n          }\n        ],\n        "tuples": [\n          [\n            {\n              "display": "Books",\n              "elementId": "h1"\n            },\n            {\n              "display": "Northeast",\n              "elementId": "h1"\n            }\n          ],\n          [\n            {\n              "display": "Electronics",\n              "elementId": "h2"\n            },\n            {\n              "display": "Southwest",\n              "elementId": "h7"\n            }\n          ]\n        ]\n      }\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"custom-expression-qualification"},"Custom expression qualification"),(0,o.kt)("p",null,"Create a filter based on a custom expression."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'"type"'),": ",(0,o.kt)("inlineCode",{parentName:"p"},'"predicate_custom"')),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/manage-filter-objects/create-a-filter-object-with-a-custom-expression"},"Create a new filter object using a custom expression"),"."),(0,o.kt)("h3",{id:"logic-operators"},"Logic operators"),(0,o.kt)("p",null,"Create a filter using logic operators to combine multiple predicates."),(0,o.kt)("p",null,"Example: You want to create a new filter that returns the data for female customers of all ages, and males between the ages of 25 and 35."),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "filter",\n    "name": "Females & Males(25-35)",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "function": "or",\n      "children": [\n        {\n          "type": "predicate_form_qualification",\n          "predicateTree": {\n            "function": "equals",\n            "parameters": [\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "string",\n                  "value": "Female"\n                }\n              }\n            ],\n            "attribute": {\n              "objectId": "4151F1304F00A51EB13BCF84283396BE",\n              "subType": "attribute",\n              "name": "Customer Gender"\n            },\n            "form": {\n              "objectId": "CCFBE2A5EADB4F50941FB879CCF1721C",\n              "subType": "attribute_form_system",\n              "name": "DESC"\n            },\n            "dataLocale": "en-US"\n          }\n        },\n        {\n          "function": "and",\n          "children": [\n            {\n              "type": "predicate_form_qualification",\n              "predicateTree": {\n                "function": "between",\n                "parameters": [\n                  {\n                    "parameterType": "constant",\n                    "constant": {\n                      "type": "double",\n                      "value": "25.0"\n                    }\n                  },\n                  {\n                    "parameterType": "constant",\n                    "constant": {\n                      "type": "double",\n                      "value": "35.0"\n                    }\n                  }\n                ],\n                "attribute": {\n                  "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",\n                  "subType": "attribute",\n                  "name": "Customer Age"\n                },\n                "form": {\n                  "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n                  "subType": "attribute_form_system",\n                  "name": "ID"\n                }\n              }\n            },\n            {\n              "type": "predicate_form_qualification",\n              "predicateTree": {\n                "function": "equals",\n                "parameters": [\n                  {\n                    "parameterType": "constant",\n                    "constant": {\n                      "type": "string",\n                      "value": "Male"\n                    }\n                  }\n                ],\n                "attribute": {\n                  "objectId": "4151F1304F00A51EB13BCF84283396BE",\n                  "subType": "attribute",\n                  "name": "Customer Gender"\n                },\n                "form": {\n                  "objectId": "CCFBE2A5EADB4F50941FB879CCF1721C",\n                  "subType": "attribute_form_system",\n                  "name": "DESC"\n                },\n                "dataLocale": "en-US"\n              }\n            }\n          ],\n          "type": "operator"\n        }\n      ],\n      "type": "operator"\n    }\n  }\n}\n')))}b.isMDXComponent=!0}}]);