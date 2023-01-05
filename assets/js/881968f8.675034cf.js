"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8633],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=r,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||i;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9393:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var a,r=n(3117),i=n(102),o=(n(7294),n(3905)),l=["components"],s={title:"Workflow sample - Create a security filter object",sidebar_label:"Create a security filter object",description:"This workflow sample demonstrates how to create a new security filter object through the Modeling service."},c=void 0,u={unversionedId:"common-workflows/manage-security-filter-objects/create-a-security-filter-object",id:"common-workflows/manage-security-filter-objects/create-a-security-filter-object",title:"Workflow sample - Create a security filter object",description:"This workflow sample demonstrates how to create a new security filter object through the Modeling service.",source:"@site/docs/common-workflows/manage-security-filter-objects/create-a-security-filter-object.md",sourceDirName:"common-workflows/manage-security-filter-objects",slug:"/common-workflows/manage-security-filter-objects/create-a-security-filter-object",permalink:"/rest-api-docs/common-workflows/manage-security-filter-objects/create-a-security-filter-object",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-security-filter-objects/create-a-security-filter-object.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1672953042,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{title:"Workflow sample - Create a security filter object",sidebar_label:"Create a security filter object",description:"This workflow sample demonstrates how to create a new security filter object through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a security filter definition",permalink:"/rest-api-docs/common-workflows/manage-security-filter-objects/retrieve-a-security-filter-definition"},next:{title:"Update a security filter definition",permalink:"/rest-api-docs/common-workflows/manage-security-filter-objects/update-a-security-filter-definition"}},p={},m=[{value:"Create a security filter",id:"create-a-security-filter",level:2},{value:"More samples",id:"more-samples",level:2},{value:"Attribute form qualification",id:"attribute-form-qualification",level:3},{value:"Attribute element list qualification",id:"attribute-element-list-qualification",level:3},{value:"Shortcut-to-a-filter qualification",id:"shortcut-to-a-filter-qualification",level:3},{value:"Attribute join element list qualification",id:"attribute-join-element-list-qualification",level:3},{value:"Custom expression qualification",id:"custom-expression-qualification",level:3},{value:"Logic operators",id:"logic-operators",level:3},{value:"Attribute form qualification with top/bottom level",id:"attribute-form-qualification-with-topbottom-level",level:3}],f=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),d={toc:m};function b(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(f,{since:"2021 Update 1",mdxType:"Available"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-bcd7feb9-e96b-45db-aa51-a206d7842524?ctx=documentation"},"REST API Playground"),".")),(0,o.kt)("p",null,"This workflow sample demonstrates how to create a new security filter object through the Modeling service."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a changeset."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#create-a-security-filter"},"Create a security filter.")),(0,o.kt)("li",{parentName:"ol"},"Commit a changeset."),(0,o.kt)("li",{parentName:"ol"},"Delete the changeset.")),(0,o.kt)("p",null,"Additional samples are provided in ",(0,o.kt)("a",{parentName:"p",href:"#more-samples"},"More samples"),"."),(0,o.kt)("p",null,'In this workflow sample, you want to create a "Year > 2015" security filter object under the Public Objects folder in the MicroStrategy Tutorial project. The folder ID is ',(0,o.kt)("inlineCode",{parentName:"p"},"98FE182C2A10427EACE0CD30B6768258"),". The MicroStrategy Tutorial project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("p",null,"Changesets are used in this workflow. For information on how to create and use changesets see ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/changesets"},"Changesets"),"."),(0,o.kt)("h2",{id:"create-a-security-filter"},"Create a security filter"),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Security%20Filters/postSecurityFilter"},"POST /api/model/securityFilters")," with ",(0,o.kt)("inlineCode",{parentName:"p"},'"tree"')," format for the ",(0,o.kt)("inlineCode",{parentName:"p"},'"qualifications"'),". ",(0,o.kt)("a",{parentName:"p",href:"#more-samples"},"More examples")," of creating a new security filter are listed further below"),(0,o.kt)("p",null,'To create a security filter, in the request body, the security filter\u2019s "qualification" needs to be in either "tree" or "tokens" format. If both are provided, only "tree" is used.'),(0,o.kt)("p",null,"When creating an attribute element list qualification, only the \u201ctree\u201c format is supported."),(0,o.kt)("p",null,'When creating a qualification with inline custom expressions, only the "tree" format is supported.'),(0,o.kt)("p",null,"Any embedded objects (",(0,o.kt)("inlineCode",{parentName:"p"},'"isEmbedded":true"'),") cannot be used to create a new security filter."),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "md_security_filter",\n    "name": "Year > 2015",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateTree": {\n        "function": "greater",\n        "parameters": [\n          {\n            "parameterType": "constant",\n            "constant": {\n              "type": "double",\n              "value": "2015.0"\n            }\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    }\n  },\n  "topLevel": [],\n  "bottomLevel": []\n}\n')),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/securityFilters" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" -d \'{"information":{"subType":"filter","name":"Year > 2015","destinationFolderId":"98FE182C2A10427EACE0CD30B6768258"},"qualification":{"tree":{"type":"predicate_form_qualification","predicateTree":{"function":"greater","parameters":[{"parameterType":"constant","constant":{"type":"double","value":"2015.0"}}],"attribute":{"objectId":"8D679D5111D3E4981000E787EC6DE8A4","subType":"attribute","name":"Year"},"form":{"objectId":"45C11FA478E745FEA08D781CEA190FE5","subType":"attribute_form_system","name":"ID"}}}}}\'\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,"You can view the new filter's definition in the body of the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "versionId": "88DF4A68957941EBBBC69B975B2D011F",\n    "primaryLocale": "en-US",\n    "objectId": "A3EFA30AFC6D4A6C89D0D1F967BD505D",\n    "subType": "md_security_filter",\n    "name": "Year > 2015",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "text": "Year (ID) > 2015",\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateId": "43F6594B23BF4510A090F5AB3C44358F",\n      "predicateText": "Year (ID) > 2015",\n      "predicateTree": {\n        "function": "greater",\n        "parameters": [\n          {\n            "parameterType": "constant",\n            "constant": {\n              "type": "double",\n              "value": "2015.0"\n            }\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    }\n  },\n  "topLevel": [],\n  "bottomLevel": []\n}\n')),(0,o.kt)("p",null,"Response Code: 201 (A new security filter is created successfully in the changeset.)"),(0,o.kt)("h2",{id:"more-samples"},"More samples"),(0,o.kt)("p",null,"A security filter takes the form of an expression tree over data structures known as predicates. Each predicate represents a single restriction on the available data. The security filter expression tree combines predicates together using logical operators."),(0,o.kt)("p",null,"In this section we provide sample request body JSON for creating security filters of each predicate type. Security filters combine predicates using logic operators."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Create a changeset using ",(0,o.kt)("inlineCode",{parentName:"li"},"POST /api/model/changesets")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#create-a-security-filter"},"2. Create a security filter using ",(0,o.kt)("inlineCode",{parentName:"a"},"POST /api/model/securityFilters")," with ",(0,o.kt)("inlineCode",{parentName:"a"},'"tree"')," format for the ",(0,o.kt)("inlineCode",{parentName:"a"},'"qualifications"'),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li",start:3},(0,o.kt)("li",{parentName:"ol"},"Commit a changeset using ",(0,o.kt)("inlineCode",{parentName:"li"},"POST /api/model/changesets/{changesetId}/commit")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li",start:4},(0,o.kt)("li",{parentName:"ol"},"Delete the changeset using ",(0,o.kt)("inlineCode",{parentName:"li"},"DELETE /api/model/changesets/{changesetId}")))),(0,o.kt)("li",{parentName:"ul"},"More Samples",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#attribute-form-qualification"},"Attribute form qualification")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#attribute-element-list-qualification"},"Attribute element list qualification")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#shortcut-to-a-filter-qualification"},"Shortcut-to-a-Filter qualification")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#attribute-join-element-list-qualification"},"Attribute join element list qualification")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#custom-expression-qualification"},"Custom expression qualification")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#logic-operators"},"Logic operators")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#attribute-form-qualification-with-topbottom-level"},"Attribute form qualification with top/bottom level"))))),(0,o.kt)("h3",{id:"attribute-form-qualification"},"Attribute form qualification"),(0,o.kt)("p",null,"You can create a security filter based on attribute forms using ",(0,o.kt)("inlineCode",{parentName:"p"},'"type": "predicate_form_qualification"'),"."),(0,o.kt)("p",null,"The following example demonstrates creating a new security filter where Year@ID > 2015."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "md_security_filter",\n    "name": "Year > 2015",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateTree": {\n        "function": "greater",\n        "parameters": [\n          {\n            "parameterType": "constant",\n            "constant": {\n              "type": "double",\n              "value": "2015.0"\n            }\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    }\n  },\n  "topLevel": [],\n  "bottomLevel": []\n}\n')),(0,o.kt)("p",null,"The following example demonstrates creating a new security filter where Year@ID is one of the items in the ","[2015, 2017]"," list."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "md_security_filter",\n    "name": "Year@ID in list (2015, 2017)",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateTree": {\n        "function": "in",\n        "parameters": [\n          {\n            "parameterType": "array",\n            "constantsType": "double",\n            "constants": ["2015.0", "2017.0"]\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    }\n  },\n  "topLevel": [],\n  "bottomLevel": []\n}\n')),(0,o.kt)("h3",{id:"attribute-element-list-qualification"},"Attribute element list qualification"),(0,o.kt)("p",null,"You can create a security filter based on attribute elements using ",(0,o.kt)("inlineCode",{parentName:"p"},'"type": "predicate_element_list"'),"."),(0,o.kt)("p",null,"The following example demonstrates creating a new security filter with Category in Books and Electronics."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "md_security_filter",\n    "name": "Category in Books and Electronics",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_element_list",\n      "predicateTree": {\n        "attribute": {\n          "objectId": "8D679D3711D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Category"\n        },\n        "elements": [\n          {\n            "display": "Electronics",\n            "elementId": "h2"\n          },\n          {\n            "display": "Books",\n            "elementId": "h1"\n          }\n        ],\n        "function": "in"\n      }\n    }\n  },\n  "topLevel": [],\n  "bottomLevel": []\n}\n')),(0,o.kt)("h3",{id:"shortcut-to-a-filter-qualification"},"Shortcut-to-a-filter qualification"),(0,o.kt)("p",null,"You can create a security filter based on an existing filter using ",(0,o.kt)("inlineCode",{parentName:"p"},'"type": "predicate_filter_qualification"'),"."),(0,o.kt)("p",null,"The following example demonstrates creating a new security filter using an existing filter as a qualification."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "md_security_filter",\n    "name": "Shortcut To Filter",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_filter_qualification",\n      "predicateTree": {\n        "filter": {\n          "objectId": "320081BF47ECD3DEB07529B1BEF4271B",\n          "subType": "filter",\n          "name": "Filter Object"\n        },\n        "isIndependent": 1\n      }\n    }\n  },\n  "topLevel": [],\n  "bottomLevel": []\n}\n')),(0,o.kt)("h3",{id:"attribute-join-element-list-qualification"},"Attribute join element list qualification"),(0,o.kt)("p",null,"You can create a security filter based on attribute elements from different attributes using ",(0,o.kt)("inlineCode",{parentName:"p"},'"type": "predicate_joint_element_list"'),"."),(0,o.kt)("p",null,"The following example demonstrates creating a new security filter that returns the data for Books in the Northeast and Electronics in the Southwest."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "md_security_filter",\n    "name": "Category & Region",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_joint_element_list",\n      "predicateTree": {\n        "level": [\n          {\n            "objectId": "8D679D3711D3E4981000E787EC6DE8A4",\n            "subType": "attribute",\n            "name": "Category"\n          },\n          {\n            "objectId": "8D679D4B11D3E4981000E787EC6DE8A4",\n            "subType": "attribute",\n            "name": "Region"\n          }\n        ],\n        "tuples": [\n          [\n            {\n              "display": "Books",\n              "elementId": "h1"\n            },\n            {\n              "display": "Northeast",\n              "elementId": "h1"\n            }\n          ],\n          [\n            {\n              "display": "Electronics",\n              "elementId": "h2"\n            },\n            {\n              "display": "Southwest",\n              "elementId": "h7"\n            }\n          ]\n        ]\n      }\n    }\n  },\n  "topLevel": [],\n  "bottomLevel": []\n}\n')),(0,o.kt)("h3",{id:"custom-expression-qualification"},"Custom expression qualification"),(0,o.kt)("p",null,"You can create a security filter based on a custom expression using ",(0,o.kt)("inlineCode",{parentName:"p"},'"type": "predicate_custom"'),". See ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/manage-security-filter-objects/create-a-security-filter-object-using-a-custom-expression"},"Workflow sample: Create a security filter object using a custom expression")," for more information."),(0,o.kt)("h3",{id:"logic-operators"},"Logic operators"),(0,o.kt)("p",null,"You can create a security filter using logic operators to combine multiple predicates."),(0,o.kt)("p",null,"The following example demonstrates creating a new security filter that returns the data for all females and males between the ages of 25-35."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "md_security_filter",\n    "name": "Females & Males(25-35)",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "function": "or",\n      "children": [\n        {\n          "type": "predicate_form_qualification",\n          "predicateTree": {\n            "function": "equals",\n            "parameters": [\n              {\n                "parameterType": "constant",\n                "constant": {\n                  "type": "string",\n                  "value": "Female"\n                }\n              }\n            ],\n            "attribute": {\n              "objectId": "4151F1304F00A51EB13BCF84283396BE",\n              "subType": "attribute",\n              "name": "Customer Gender"\n            },\n            "form": {\n              "objectId": "CCFBE2A5EADB4F50941FB879CCF1721C",\n              "subType": "attribute_form_system",\n              "name": "DESC"\n            },\n            "dataLocale": "en-US"\n          }\n        },\n        {\n          "function": "and",\n          "children": [\n            {\n              "type": "predicate_form_qualification",\n              "predicateTree": {\n                "function": "between",\n                "parameters": [\n                  {\n                    "parameterType": "constant",\n                    "constant": {\n                      "type": "double",\n                      "value": "25.0"\n                    }\n                  },\n                  {\n                    "parameterType": "constant",\n                    "constant": {\n                      "type": "double",\n                      "value": "35.0"\n                    }\n                  }\n                ],\n                "attribute": {\n                  "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",\n                  "subType": "attribute",\n                  "name": "Customer Age"\n                },\n                "form": {\n                  "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n                  "subType": "attribute_form_system",\n                  "name": "ID"\n                }\n              }\n            },\n            {\n              "type": "predicate_form_qualification",\n              "predicateTree": {\n                "function": "equals",\n                "parameters": [\n                  {\n                    "parameterType": "constant",\n                    "constant": {\n                      "type": "string",\n                      "value": "Male"\n                    }\n                  }\n                ],\n                "attribute": {\n                  "objectId": "4151F1304F00A51EB13BCF84283396BE",\n                  "subType": "attribute",\n                  "name": "Customer Gender"\n                },\n                "form": {\n                  "objectId": "CCFBE2A5EADB4F50941FB879CCF1721C",\n                  "subType": "attribute_form_system",\n                  "name": "DESC"\n                },\n                "dataLocale": "en-US"\n              }\n            }\n          ],\n          "type": "operator"\n        }\n      ],\n      "type": "operator"\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"attribute-form-qualification-with-topbottom-level"},"Attribute form qualification with top/bottom level"),(0,o.kt)("p",null,"Top and bottom range attributes place aggregation ceilings and floors on metrics used on a report. If neither a top nor a bottom range attribute is specified, the security filter is applied to every level of analysis."),(0,o.kt)("p",null,"The following example demonstrates creating a new security filter that includes all years greater than 2015."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "md_security_filter",\n    "name": "Year > 2015",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateTree": {\n        "function": "greater",\n        "parameters": [\n          {\n            "parameterType": "constant",\n            "constant": {\n              "type": "double",\n              "value": "2015.0"\n            }\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    }\n  },\n  "topLevel": [\n    {\n      "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n      "subType": "attribute",\n      "name": "Year"\n    }\n  ],\n  "bottomLevel": []\n}\n')))}b.isMDXComponent=!0}}]);