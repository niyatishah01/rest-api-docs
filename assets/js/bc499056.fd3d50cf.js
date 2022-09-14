"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[460],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,u=d["".concat(p,".").concat(f)]||d[f]||c[f]||o;return n?a.createElement(u,i(i({ref:t},m),{},{components:n})):a.createElement(u,i({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3990:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],s={title:"Workflow Sample - Retrieve a Transformation's Definition",sidebar_label:"Retrieve a Transformation's Definition",description:"This topic covers the following workflows for retrieving an transformation\u2019s definition."},p=void 0,l={unversionedId:"common-workflows/manage-transformation-objects/retrieve-a-transformations-definition",id:"common-workflows/manage-transformation-objects/retrieve-a-transformations-definition",title:"Workflow Sample - Retrieve a Transformation's Definition",description:"This topic covers the following workflows for retrieving an transformation\u2019s definition.",source:"@site/docs/common-workflows/manage-transformation-objects/retrieve-a-transformations-definition.md",sourceDirName:"common-workflows/manage-transformation-objects",slug:"/common-workflows/manage-transformation-objects/retrieve-a-transformations-definition",permalink:"/rest-api-docs/common-workflows/manage-transformation-objects/retrieve-a-transformations-definition",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/main/docs/common-workflows/manage-transformation-objects/retrieve-a-transformations-definition.md",tags:[],version:"current",lastUpdatedBy:"Liang, Jiapei",lastUpdatedAt:1663189678,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"Workflow Sample - Retrieve a Transformation's Definition",sidebar_label:"Retrieve a Transformation's Definition",description:"This topic covers the following workflows for retrieving an transformation\u2019s definition."},sidebar:"tutorialSidebar",previous:{title:"Manage Transformation Objects",permalink:"/rest-api-docs/common-workflows/manage-transformation-objects/"},next:{title:"Create a Transformation Object",permalink:"/rest-api-docs/common-workflows/manage-transformation-objects/create-a-transformation-object"}},m={},c=[{value:"Retrieve a Transformation&#39;s Definition",id:"retrieve-a-transformations-definition",level:2},{value:"Retrieve a Transformation&#39;s Definition within a Changeset",id:"retrieve-a-transformations-definition-within-a-changeset",level:2},{value:"Retrieve a Transformation&#39;s Definition with Transformation Attribute Form Expressions in Tree and Tokens Formats",id:"retrieve-a-transformations-definition-with-transformation-attribute-form-expressions-in-tree-and-tokens-formats",level:2}],d={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-3fa0dd24-d717-46ba-831c-29cbfe75c3ba?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"This topic covers the following workflows for retrieving an transformation\u2019s definition."),(0,o.kt)("h2",{id:"retrieve-a-transformations-definition"},"Retrieve a Transformation's Definition"),(0,o.kt)("p",null,"In this workflow sample, you want to get the definition of the ",(0,o.kt)("inlineCode",{parentName:"p"},'"2 Weeks Ago"')," transformation object. The object ID of the transformation is ",(0,o.kt)("inlineCode",{parentName:"p"},"6CB9ABB711D3E4F11000E887EC6DE8A4"),". The transformation is in the MicroStrategy Tutorial project and its project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B19DEDCC11D4E0EFC000EB9495D0F44F"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},(0,o.kt)("inlineCode",{parentName:"a"},"POST /api/auth/login")),"."),(0,o.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},(0,o.kt)("inlineCode",{parentName:"a"},"GET /api/projects")),".")),(0,o.kt)("p",null,"Retrieve the transformation\u2019s definition using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Transformations/ms-getTransformation"},(0,o.kt)("inlineCode",{parentName:"a"},"GET /api/model/transformations/{transformationId}")),"."),(0,o.kt)("p",null,"Sample Request Header"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "1gnndh2h7su0lsapta8ru4h4ul"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/transformations/6CB9ABB711D3E4F11000E887EC6DE8A4" -H "accept: application/json" -H "X-MSTR-AuthToken: 1gnndh2h7su0lsapta8ru4h4ul" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,"You can view the transformation's definition in the body of the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2001-01-02T20:47:18.000Z",\n    "dateModified": "2022-02-16T08:18:55.645Z",\n    "versionId": "C6C93EDF42867E98F22182BF251F1259",\n    "primaryLocale": "en-US",\n    "objectId": "6CB9ABB711D3E4F11000E887EC6DE8A4",\n    "subType": "role_transformation",\n    "name": "2 Weeks Ago",\n    "description": "Transforms Day to 2 Weeks Ago Day"\n  },\n  "attributes": [\n    {\n      "id": "96ED42A511D5B117C000E78A4CC5F24F",\n      "baseAttribute": {\n        "objectId": "96ED3EC811D5B117C000E78A4CC5F24F",\n        "subType": "attribute",\n        "name": "Day"\n      },\n      "forms": [\n        {\n          "id": "45C11FA478E745FEA08D781CEA190FE5",\n          "name": "ID",\n          "lookupTable": {\n            "objectId": "24C30AD611D5AEC9C000E38A4CC5F24F",\n            "subType": "logical_table",\n            "name": "LU_DAY"\n          },\n          "expression": { "text": "ApplySimple(\\"#0-14\\",DAY_DATE)" }\n        }\n      ]\n    }\n  ],\n  "mappingType": "one_to_one"\n}\n')),(0,o.kt)("p",null,"Response Code: 200 (The transformation's definition is returned successfully.)"),(0,o.kt)("h2",{id:"retrieve-a-transformations-definition-within-a-changeset"},"Retrieve a Transformation's Definition within a Changeset"),(0,o.kt)("p",null,"In this workflow sample, you want to get the definition of the same transformation object mentioned in ",(0,o.kt)("a",{parentName:"p",href:"#retrieve-a-transformations-definition"},"Retrieve a Transformation's Definition"),", while within a changeset. The object ID of the transformation is ",(0,o.kt)("inlineCode",{parentName:"p"},"6CB9ABB711D3E4F11000E887EC6DE8A4"),". The transformation is in the MicroStrategy Tutorial project and its project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B19DEDCC11D4E0EFC000EB9495D0F44F"),"."),(0,o.kt)("p",null,"A changeset maintains an indivisible group of creations or modifications on modeling objects. If you plan to use the response of GET /api/model/transformations/{transformationId} to create a new table or update a specific table's definitions, you should associate all requests with one changeset."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},(0,o.kt)("inlineCode",{parentName:"a"},"POST /api/auth/login")),"."),(0,o.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},(0,o.kt)("inlineCode",{parentName:"a"},"GET /api/projects")),".")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a changeset using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset"},(0,o.kt)("inlineCode",{parentName:"a"},"POST /api/model/changesets")),"."),(0,o.kt)("p",{parentName:"li"},"Sample Request Header:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},' "accept": "application/json"\n "X-MSTR-AuthToken": "9mh6k91u1mdfe710ppbd78apof"\n "X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,o.kt)("p",{parentName:"li"},"Sample Request Body: Empty"),(0,o.kt)("p",{parentName:"li"},"Sample Curl:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},' curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets" -H "accept: application/json" -H "X-MSTR-AuthToken: 9mh6k91u1mdfe710ppbd78apof" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,o.kt)("p",{parentName:"li"},"Sample Response Body:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "9B7550F181D0463CAF8DA70408E88363",\n  "type": "metadata",\n  "dateCreated": "2022-03-04T06:22:10.626286100Z",\n  "dateModified": "2022-03-04T06:22:10.626286100Z",\n  "status": "Ready",\n  "schemaEdit": false,\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US",\n  "mstrProjectId": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n  "mstrUserId": "668B60B14EE194EDD56CD6BF374E1F8D",\n  "userName": "MSTR User"\n}\n')),(0,o.kt)("p",{parentName:"li"},"Sample Response Code: 201 (A new changeset is created successfully.)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Get a transformation\u2019s definition within a changeset using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Transformations/ms-getTransformation"},(0,o.kt)("inlineCode",{parentName:"a"},"GET api/model/transformations/{transformationId}")),"."),(0,o.kt)("p",{parentName:"li"},"Sample Request Header:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},' "accept": "application/json"\n "X-MSTR-AuthToken": "9mh6k91u1mdfe710ppbd78apof"\n "X-MSTR-MS-Changeset": 9B7550F181D0463CAF8DA70408E88363`\n')),(0,o.kt)("p",{parentName:"li"},"Sample Request Body: Empty"),(0,o.kt)("p",{parentName:"li"},"Sample Curl:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},' curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/transformations/6CB9ABB711D3E4F11000E887EC6DE8A4" -H "accept: application/json" -H "X-MSTR-AuthToken: 9mh6k91u1mdfe710ppbd78apof" -H "X-MSTR-MS-Changeset: 9B7550F181D0463CAF8DA70408E88363"\n')),(0,o.kt)("p",{parentName:"li"},"Sample Response Body:"),(0,o.kt)("p",{parentName:"li"},"You can view the transformation's definition in the body of the response."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2001-01-02T20:47:18.000Z",\n    "dateModified": "2022-02-16T08:18:55.645Z",\n    "versionId": "C6C93EDF42867E98F22182BF251F1259",\n    "primaryLocale": "en-US",\n    "objectId": "6CB9ABB711D3E4F11000E887EC6DE8A4",\n    "subType": "role_transformation",\n    "name": "2 Weeks Ago",\n    "description": "Transforms Day to 2 Weeks Ago Day"\n  },\n  "attributes": [\n    {\n      "id": "96ED42A511D5B117C000E78A4CC5F24F",\n      "baseAttribute": {\n        "objectId": "96ED3EC811D5B117C000E78A4CC5F24F",\n        "subType": "attribute",\n        "name": "Day"\n      },\n      "forms": [\n        {\n          "id": "45C11FA478E745FEA08D781CEA190FE5",\n          "name": "ID",\n          "lookupTable": {\n            "objectId": "24C30AD611D5AEC9C000E38A4CC5F24F",\n            "subType": "logical_table",\n            "name": "LU_DAY"\n          },\n          "expression": { "text": "ApplySimple(\\"#0-14\\",DAY_DATE)" }\n        }\n      ]\n    }\n  ],\n  "mappingType": "one_to_one"\n}\n')),(0,o.kt)("p",{parentName:"li"},"Sample Response Code: 200 (The transformation's definition is returned successfully.)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Delete a changeset using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset"},(0,o.kt)("inlineCode",{parentName:"a"},"DELETE /api/model/changesets/{changesetId}")),"."),(0,o.kt)("p",{parentName:"li"},"Sample Request Header:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},' "accept": "application/json"\n "X-MSTR-AuthToken": "9mh6k91u1mdfe710ppbd78apof"\n "X-MSTR-MS-Changeset": 9B7550F181D0463CAF8DA70408E88363\n')),(0,o.kt)("p",{parentName:"li"},"Sample Request Body: Empty"),(0,o.kt)("p",{parentName:"li"},"Sample Curl:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},' curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/9B7550F181D0463CAF8DA70408E88363" -H "accept: */*" -H "X-MSTR-AuthToken: 9mh6k91u1mdfe710ppbd78apof" -H "X-MSTR-MS-Changeset: 9B7550F181D0463CAF8DA70408E88363"\n')),(0,o.kt)("p",{parentName:"li"},"Sample Response Body: Empty"),(0,o.kt)("p",{parentName:"li"},"Sample Response Code: 204 (The changeset is deleted successfully.)"))),(0,o.kt)("h2",{id:"retrieve-a-transformations-definition-with-transformation-attribute-form-expressions-in-tree-and-tokens-formats"},"Retrieve a Transformation's Definition with Transformation Attribute Form Expressions in Tree and Tokens Formats"),(0,o.kt)("p",null,"In this sample workflow, you want to get the definition of the ",(0,o.kt)("inlineCode",{parentName:"p"},'"2 Weeks Ago"')," transformation object, with its transformation attribute form expressions returned in tree and tokens formats. The object ID of the transformation is ",(0,o.kt)("inlineCode",{parentName:"p"},"6CB9ABB711D3E4F11000E887EC6DE8A4"),". The transformation is in the MicroStrategy Tutorial project and its project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B19DEDCC11D4E0EFC000EB9495D0F44F"),"."),(0,o.kt)("p",null,"Expressions are presented in the following formats:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"text": A human-readable, but non-parsable text, describing the expression. This is the default format that is always returned in the response.'),(0,o.kt)("li",{parentName:"ul"},'"tree": A tree data structure fully defining the expression. This format can be used if you want to examine and modify the expression programmatically.'),(0,o.kt)("li",{parentName:"ul"},'"tokens": A list of parsed tokens. This format can be used if you want to examine and modify the expression using the parser component. Be aware that generating tokens requires additional time. Tokens are a semi-structured representation of MicroStrategy expression text that includes object references. For example, let\u2019s say a filter expression is "Revenue > Cost". When the fact expression is represented as tokens, the text is broken down into pieces (tokens) with information about what these pieces represent in the metadata: ("Revenue", Revenue_ID), ("-", ',(0,o.kt)("inlineCode",{parentName:"li"},'(">"'),", ",(0,o.kt)("inlineCode",{parentName:"li"},"GreaterThan_ID"),"), (",(0,o.kt)("inlineCode",{parentName:"li"},'"Cost"'),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Cost_ID"),").")),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"showExpressionAs"),' is omitted, the expression is returned in "text" format.'),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"showExpressionAs")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"tree"),', the expression is returned in "text" and "tree" formats.'),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"showExpressionAs")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"tokens"),', the expression is returned in "text" and "tokens" formats.'),(0,o.kt)("p",null,"The workflow sample is similar to ",(0,o.kt)("a",{parentName:"p",href:"#retrieve-a-transformations-definition"},"Retrieve a Transformation's Definition"),", except with ",(0,o.kt)("inlineCode",{parentName:"p"},"showExpressionAs=tree")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"showExpressionAs=tokens"),"."),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},' "accept": "application/json"\n "X-MSTR-AuthToken": "ino4r9h9nvjv2beivbj99n0ia3"\n "X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'    curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/transformations/6CB9ABB711D3E4F11000E887EC6DE8A4?showExpressionAs=tokens&showExpressionAs=tree" -H "accept: application/json" -H "X-MSTR-AuthToken: ino4r9h9nvjv2beivbj99n0ia3" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,'You can view the transformation\'s definition in the body of the response. Notice that, each transformation attribute form expression contains the "tree" and "tokens" fields, representing the expression in ',(0,o.kt)("inlineCode",{parentName:"p"},"tree")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tokens")," format respectively."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2001-01-02T20:47:18.000Z",\n    "dateModified": "2022-02-16T08:18:55.645Z",\n    "versionId": "C6C93EDF42867E98F22182BF251F1259",\n    "primaryLocale": "en-US",\n    "objectId": "6CB9ABB711D3E4F11000E887EC6DE8A4",\n    "subType": "role_transformation",\n    "name": "2 Weeks Ago",\n    "description": "Transforms Day to 2 Weeks Ago Day"\n  },\n  "attributes": [\n    {\n      "id": "96ED42A511D5B117C000E78A4CC5F24F",\n      "baseAttribute": {\n        "objectId": "96ED3EC811D5B117C000E78A4CC5F24F",\n        "subType": "attribute",\n        "name": "Day"\n      },\n      "forms": [\n        {\n          "id": "45C11FA478E745FEA08D781CEA190FE5",\n          "name": "ID",\n          "lookupTable": {\n            "objectId": "24C30AD611D5AEC9C000E38A4CC5F24F",\n            "subType": "logical_table",\n            "name": "LU_DAY"\n          },\n          "expression": {\n            "text": "ApplySimple(\\"#0-14\\",DAY_DATE)",\n            "tree": {\n              "function": "apply_simple",\n              "children": [\n                {\n                  "type": "constant",\n                  "variant": { "type": "string", "value": "#0-14" }\n                },\n                {\n                  "type": "column_reference",\n                  "columnName": "DAY_DATE",\n                  "objectId": "24C30A7F11D5AEC9C000E38A4CC5F24F"\n                }\n              ],\n              "type": "operator"\n            },\n            "tokens": [\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "ApplySimple",\n                "type": "function",\n                "target": {\n                  "dateCreated": "1900-01-01T00:00:00.000Z",\n                  "dateModified": "2015-03-16T02:50:54.000Z",\n                  "versionId": "E18028324AB1D44D3F82EF839D51B22D",\n                  "primaryLocale": "en-US",\n                  "objectId": "8107C340DD9911D3B98100C04F2233EA",\n                  "subType": "function",\n                  "name": "ApplySimple",\n                  "description": "ApplySimple is a \\"pass-through\\" function that builds a SQL expression based on the input string of database-specific SQL syntax.  Arguments may be substituted into the specified SQL pattern. This is a single-value function."\n                }\n              },\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "(",\n                "type": "character"\n              },\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "\\"#0-14\\"",\n                "type": "string_literal"\n              },\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": ",",\n                "type": "character"\n              },\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "DAY_DATE",\n                "type": "column_reference",\n                "target": {\n                  "dateCreated": "2001-09-21T20:21:51.000Z",\n                  "dateModified": "2022-02-09T03:43:09.000Z",\n                  "versionId": "BAEE731B446EC1A133A480B6E064A25C",\n                  "primaryLocale": "en-US",\n                  "objectId": "24C30A7F11D5AEC9C000E38A4CC5F24F",\n                  "subType": "column",\n                  "name": "DAY_DATE"\n                }\n              },\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": ")",\n                "type": "character"\n              },\n              {\n                "level": "resolved",\n                "state": "initial",\n                "value": "",\n                "type": "end_of_text"\n              }\n            ]\n          }\n        }\n      ]\n    }\n  ],\n  "mappingType": "one_to_one"\n}\n')),(0,o.kt)("p",null,"Sample Response Code: 200 (The transformation's definition is returned successfully.)"))}f.isMDXComponent=!0}}]);