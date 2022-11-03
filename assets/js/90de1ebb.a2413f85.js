"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[7114],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9422:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),s=["components"],i={title:"Workflow sample - Update a consolidation object",sidebar_label:"Update a consolidation object",description:"This workflow sample demonstrates how to replace an existing consolidation object through the Modeling service."},l=void 0,c={unversionedId:"common-workflows/manage-consolidation-objects/update-a-consolidation-object",id:"common-workflows/manage-consolidation-objects/update-a-consolidation-object",title:"Workflow sample - Update a consolidation object",description:"This workflow sample demonstrates how to replace an existing consolidation object through the Modeling service.",source:"@site/docs/common-workflows/manage-consolidation-objects/update-a-consolidation-object.md",sourceDirName:"common-workflows/manage-consolidation-objects",slug:"/common-workflows/manage-consolidation-objects/update-a-consolidation-object",permalink:"/rest-api-docs/common-workflows/manage-consolidation-objects/update-a-consolidation-object",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-consolidation-objects/update-a-consolidation-object.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1667514843,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{title:"Workflow sample - Update a consolidation object",sidebar_label:"Update a consolidation object",description:"This workflow sample demonstrates how to replace an existing consolidation object through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a consolidation",permalink:"/rest-api-docs/common-workflows/manage-consolidation-objects/create-a-consolidation-object"},next:{title:"Manage language objects",permalink:"/rest-api-docs/common-workflows/manage-languages"}},p={},d=[{value:"Create a changeset",id:"create-a-changeset",level:2},{value:"Replace an existing consolidation",id:"replace-an-existing-consolidation",level:2},{value:"Commit the changeset",id:"commit-the-changeset",level:2},{value:"Delete the changeset",id:"delete-the-changeset",level:2}],m={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-cd93cd32-2391-4f2f-9308-9f47783540bf?ctx=documentation"},"REST API Playground"),"."),(0,r.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,r.kt)("p",null,"This workflow sample demonstrates how to replace an existing consolidation object through the Modeling service."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#create-a-changeset"},"Create a changeset.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#replace-an-existing-consolidation"},"Replace an existing consolidation.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#commit-the-changeset"},"Commit the changeset.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#delete-the-changeset"},"Delete the changeset."))),(0,r.kt)("p",null,"You want to replace the existing consolidation object Customer Geography in the MicroStrategy Tutorial project. The consolidation object ID is ",(0,r.kt)("inlineCode",{parentName:"p"},"B9E7FD5911D3E936C000B3B2D86C964F"),". The project ID is ",(0,r.kt)("inlineCode",{parentName:"p"},"B19DEDCC11D4E0EFC000EB9495D0F44F"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,r.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"A changeset is required for creating and updating objects (such as filters, facts, attributes, etc...) through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether.")),(0,r.kt)("h2",{id:"create-a-changeset"},"Create a changeset"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset"},"POST /api/model/changesets"),"."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://10.23.10.77:8443/MicroStrategyLibrary/api/model/changesets?schemaEdit=true" -H "accept: application/json" -H "X-MSTR-AuthToken: agei7vi3q4nn0i6r547r495vaf" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "0E9F01172ECF4BA2BB510F7B9FB4F6E8",\n  "dateCreated": "2020-11-17T16:38:09.825650Z",\n  "dateModified": "2020-11-17T16:38:09.825665Z",\n  "status": "Ready",\n  "schemaEdit": false,\n  "userName": "MSTR User",\n  "mstrProjectId": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US"\n}\n')),(0,r.kt)("p",null,"Sample Response Code: 201 (A new changeset is created successfully.)"),(0,r.kt)("h2",{id:"replace-an-existing-consolidation"},"Replace an existing consolidation"),(0,r.kt)("p",null,"Use PUT ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/model/consolidations/{consolidationId}"),"."),(0,r.kt)("p",null,'The type of elements inside the consolidation must be "calculation". In this example, you want to replace the existing ',(0,r.kt)("inlineCode",{parentName:"p"},"Customer Geography")," consolidation object with a consolidation that has one element, and the expression of this element is ",(0,r.kt)("inlineCode",{parentName:"p"},"({Customer Age=20 AND Customer=Aaby:Alen} + {Customer City=Addison})"),"."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,r.kt)("p",null,"Sample Request Body:"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more details on how to set format properties, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/manage-derived-element-objects/format-samples"},"Format samples for derived elements"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258",\n    "name": "Create Consolidation"\n  },\n  "elements": [\n    {\n      "name": "Example",\n      "type": "calculation",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "expression": {\n        "tree": {\n          "function": "plus",\n          "children": [\n            {\n              "type": "elements_object",\n              "elements": [\n                {\n                  "display": "20",\n                  "elementId": "h20",\n                  "attribute": {\n                    "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",\n                    "subType": "attribute",\n                    "name": "Customer Age"\n                  }\n                },\n                {\n                  "display": "Aaby:Alen",\n                  "elementId": "h7796",\n                  "attribute": {\n                    "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",\n                    "subType": "attribute",\n                    "name": "Customer"\n                  }\n                }\n              ]\n            },\n            {\n              "type": "elements_object",\n              "elements": [\n                {\n                  "display": "Addison",\n                  "elementId": "h1",\n                  "attribute": {\n                    "objectId": "8D679D3A11D3E4981000E787EC6DE8A4",\n                    "subType": "attribute",\n                    "name": "Customer City"\n                  }\n                }\n              ]\n            }\n          ],\n          "type": "operator"\n        }\n      }\n    }\n  ],\n  "subtotal": "disable"\n}\n')),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/consolidations" -H "accept: application/json" -H "X-MSTR-AuthToken: 9rlq0e1dgg3rp237hiddruqcd0" -H "X-MSTR-MS-Changeset: EE48CD8879C44A03B18660AE7AFC8F68" -H "Content-Type: application/json" -d "{\\"information\\":{\\"destinationFolderId\\":\\"98FE182C2A10427EACE0CD30B6768258\\",\\"name\\":\\"Create Consolidation\\"},\\"elements\\":[{\\"id\\":\\"6A4A4FAF4A9D868F53754FB3417A3CC1\\",\\"name\\":\\"Example\\",\\"type\\":\\"calculation\\",\\"format\\":{\\"header\\":[],\\"values\\":[]},\\"expression\\":{\\"text\\":\\"20, Aaby:Alen + Addison\\",\\"tree\\":{\\"function\\":\\"plus\\",\\"children\\":[{\\"type\\":\\"elements_object\\",\\"elements\\":[{\\"display\\":\\"20\\",\\"elementId\\":\\"h20\\",\\"attribute\\":{\\"objectId\\":\\"6E069E4C11D3E4E41000E887EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Customer Age\\"}},{\\"display\\":\\"Aaby:Alen\\",\\"elementId\\":\\"h7796\\",\\"attribute\\":{\\"objectId\\":\\"8D679D3C11D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Customer\\"}}]},{\\"type\\":\\"elements_object\\",\\"elements\\":[{\\"display\\":\\"Addison\\",\\"elementId\\":\\"h1\\",\\"attribute\\":{\\"objectId\\":\\"8D679D3A11D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Customer City\\"}}]}],\\"type\\":\\"operator\\"}}}],\\"subtotal\\":\\"disable\\"}"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("p",null,"You can view the new consolidation's definition in the body of the response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "versionId": "9E355E1F98C74D47B7EA30C4160FD625",\n    "primaryLocale": "en-US",\n    "objectId": "BE0FAD624A1A48BC9EFCE80F23C2D6C3",\n    "subType": "consolidation",\n    "name": "Create Consolidation",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "elements": [\n    {\n      "id": "9360AEF0C38341E1ADA498692C4257C8",\n      "name": "Example",\n      "type": "calculation",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "expression": {\n        "text": "20, Aaby:Alen + Addison",\n        "tree": {\n          "function": "plus",\n          "children": [\n            {\n              "type": "elements_object",\n              "elements": [\n                {\n                  "display": "20",\n                  "elementId": "h20",\n                  "attribute": {\n                    "objectId": "6E069E4C11D3E4E41000E887EC6DE8A4",\n                    "subType": "attribute",\n                    "name": "Customer Age"\n                  }\n                },\n                {\n                  "display": "Aaby:Alen",\n                  "elementId": "h7796",\n                  "attribute": {\n                    "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",\n                    "subType": "attribute",\n                    "name": "Customer"\n                  }\n                }\n              ]\n            },\n            {\n              "type": "elements_object",\n              "elements": [\n                {\n                  "display": "Addison",\n                  "elementId": "h1",\n                  "attribute": {\n                    "objectId": "8D679D3A11D3E4981000E787EC6DE8A4",\n                    "subType": "attribute",\n                    "name": "Customer City"\n                  }\n                }\n              ]\n            }\n          ],\n          "type": "operator"\n        }\n      }\n    }\n  ],\n  "subtotal": "disable"\n}\n')),(0,r.kt)("p",null,"Response Code: 201 (The Customer Geography consolidation is replaced successfully in the changeset.)"),(0,r.kt)("h2",{id:"commit-the-changeset"},"Commit the changeset"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset"},"POST /api/model/changesets/{changesetId}/commit"),"."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00/commit" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "0E9F01172ECF4BA2BB510F7B9FB4F6E8",\n  "dateCreated": "2020-11-17T17:42:13.312629Z",\n  "dateModified": "2020-11-17T17:44:30.814816Z",\n  "status": "Ready",\n  "schemaEdit": false,\n  "userName": "MSTR User",\n  "mstrProjectId": "091B51154B22036C53CFBB9958B2E8FC",\n  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US"\n}\n')),(0,r.kt)("p",null,"Sample Response Code: 201 (The changeset is committed successfully.)"),(0,r.kt)("h2",{id:"delete-the-changeset"},"Delete the changeset"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset"},"DELETE /api/model/changesets/{changesetId}"),"."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00" -H "accept: */*" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,r.kt)("p",null,"Sample Response Body: Empty"),(0,r.kt)("p",null,"Sample Response Code: 204 (The changeset is deleted successfully.)"))}u.isMDXComponent=!0}}]);