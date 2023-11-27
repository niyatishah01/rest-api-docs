"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6849],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),p=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},l=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,g=l["".concat(u,".").concat(d)]||l[d]||m[d]||i;return n?o.createElement(g,a(a({ref:t},c),{},{components:n})):o.createElement(g,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=l;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}l.displayName="MDXCreateElement"},44539:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return l}});var o,r=n(83117),i=n(80102),a=(n(67294),n(3905)),s=["components"],u={title:"Update a custom group's definition",sidebar_label:"Update a custom group's definition",description:"This workflow sample demonstrates how to update a custom group\u2019s definition through the Modeling service."},p=void 0,c={unversionedId:"common-workflows/modeling/manage-custom-group-objects/update-a-custom-groups-definition",id:"common-workflows/modeling/manage-custom-group-objects/update-a-custom-groups-definition",title:"Update a custom group's definition",description:"This workflow sample demonstrates how to update a custom group\u2019s definition through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-custom-group-objects/update-a-custom-groups-definition.md",sourceDirName:"common-workflows/modeling/manage-custom-group-objects",slug:"/common-workflows/modeling/manage-custom-group-objects/update-a-custom-groups-definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-custom-group-objects/update-a-custom-groups-definition",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-custom-group-objects/update-a-custom-groups-definition.md",tags:[],version:"current",lastUpdatedBy:"kezhou-mstr",lastUpdatedAt:1701121876,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"Update a custom group's definition",sidebar_label:"Update a custom group's definition",description:"This workflow sample demonstrates how to update a custom group\u2019s definition through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a custom group object with filter elements using custom expressions",permalink:"/rest-api-docs/common-workflows/modeling/manage-custom-group-objects/create-a-custom-group-object-with-filter-elements-using-custom-expressions"},next:{title:"Manage datamart objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-datamart-objects/"}},m={},l=[{value:"Update the filter&#39;s definition",id:"update-the-filters-definition",level:2}],d=(o="Available",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)}),g={toc:l};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(d,{since:"2021 Update 2",mdxType:"Available"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,a.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-3c57732e-0689-406a-a6ad-c73ece5960c2?ctx=documentation"},"REST API Playground"),"."),(0,a.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,a.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,a.kt)("p",null,"This workflow sample demonstrates how to update a custom group\u2019s definition through the Modeling service."),(0,a.kt)("p",null,'You want to update the definition of the "Customers Value Metric Value Banding" custom group and rename it to "Customers Value Points Banding". The custom group is in the MicroStrategy Tutorial project. The object ID of the custom group is C4E98C9B4BACB6D57CCF58BD95672BF4. The project ID is B7CA92F04B9FAE8D941C3E9B7E0CD754.'),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,a.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,a.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),".")),(0,a.kt)("h2",{id:"update-the-filters-definition"},"Update the filter's definition"),(0,a.kt)("p",null,"Endpoint: ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Custom%20Groups/ms-putCustomGroup"},"PUT /api/model/customGroups/{CustomGroupId}"),"."),(0,a.kt)("p",null,"Sample Request Header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "bkf2bee310a9olr23h68dhgsvb"\n"X-MSTR-MS-Changeset": "0187393B5F524C8781B7CF86A1A70FB9"\n')),(0,a.kt)("p",null,"Sample Request Body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "custom_group",\n    "name": "Customers Value Points Banding",\n    "destinationFolderId": "98FE182C2A10427EACE0CD30B6768258"\n  },\n  "options": {\n    "hierarchyDisplay": true,\n    "subtotalsDisplay": false,\n    "elementHeaderAboveChild": true\n  },\n  "elements": [\n    {\n      "name": "All Customers",\n      "displayOption": "element",\n      "qualification": {\n        "text": "Set of  Customer where BandingP({Running Revenue Contribution to All Customers Abs.},0,0.2,0.4,0.6,0.8,1)",\n        "tree": {\n          "type": "predicate_banding_points",\n          "predicateText": "Set of  Customer where BandingP({Running Revenue Contribution to All Customers Abs.},0,0.2,0.4,0.6,0.8,1)",\n          "predicateTree": {\n            "level": [\n              {\n                "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",\n                "subType": "attribute",\n                "name": "Customer"\n              }\n            ],\n            "metric": {\n              "objectId": "4C051BCD11D3E877C000B3B2D86C964F",\n              "subType": "metric",\n              "name": "Running Revenue Contribution to All Customers Abs."\n            },\n            "bandMetricFunction": "value",\n            "bandNames": ["bottom 20%", "20%-40%", "40%-60%", "60%-80%", "Top 20%"],\n            "points": [0, 0.2, 0.4, 0.6, 0.8, 1]\n          }\n        }\n      }\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"Sample Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/customGroups/C4E98C9B4BACB6D57CCF58BD95672BF4" -H "accept: application/json" -H "X-MSTR-AuthToken: bkf2bee310a9olr23h68dhgsvb" -H "X-MSTR-MS-Changeset: 0187393B5F524C8781B7CF86A1A70FB9" -H "Content-Type: application/json" -d "{\\"information\\":{\\"name\\":\\"Customers Value Points Banding\\"},\\"options\\":{\\"hierarchyDisplay\\":true,\\"subtotalsDisplay\\":false,\\"elementHeaderAboveChild\\":true},\\"elements\\":[{\\"name\\":\\"All Customers\\",\\"displayOption\\":\\"element\\",\\"qualification\\":{\\"text\\":\\"Set of Customer where BandingP({Running Revenue Contribution to All Customers Abs.},0,0.2,0.4,0.6,0.8,1)\\",\\"tree\\":{\\"type\\":\\"predicate_banding_points\\",\\"predicateText\\":\\"Set of Customer where BandingP({Running Revenue Contribution to All Customers Abs.},0,0.2,0.4,0.6,0.8,1)\\",\\"predicateTree\\":{\\"level\\":[{\\"objectId\\":\\"8D679D3C11D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Customer\\"}],\\"metric\\":{\\"objectId\\":\\"4C051BCD11D3E877C000B3B2D86C964F\\",\\"subType\\":\\"metric\\",\\"name\\":\\"Running Revenue Contribution to All Customers Abs.\\"},\\"bandMetricFunction\\":\\"value\\",\\"bandNames\\":[\\"bottom 20%\\",\\"20%-40%\\",\\"40%-60%\\",\\"60%-80%\\",\\"Top 20%\\"],\\"points\\":[0,0.2,0.4,0.6,0.8,1]}}}}]}"\n')),(0,a.kt)("p",null,"Sample Response Body: You can view the custom group's new definition in the body of the response."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2021-06-17T12:18:16.462Z",\n    "dateModified": "2021-06-17T12:18:24.204Z",\n    "versionId": "E24959DD554D98FE656EA898E332103E",\n    "primaryLocale": "en-US",\n    "objectId": "C4E98C9B4BACB6D57CCF58BD95672BF4",\n    "subType": "custom_group",\n    "name": "Customers Value Points Banding",\n    "description": "Custom group defined with metric banding on Running Revenue Contribution to all Customers Abs."\n  },\n  "options": {\n    "hierarchyDisplay": true,\n    "subtotalsDisplay": false,\n    "elementHeaderAboveChild": true\n  },\n  "elements": [\n    {\n      "id": "040A250F4DFD4052B918A1F2A42D02C9",\n      "name": "All Customers",\n      "displayOption": "element",\n      "qualification": {\n        "text": "Set of  Customer where BandingP({Running Revenue Contribution to All Customers Abs.},0,0.2,0.4,0.6,0.8,1)",\n        "tree": {\n          "type": "predicate_banding_points",\n          "predicateId": "040A250F4DFD4052B918A1F2A42D02C9",\n          "predicateText": "Set of  Customer where BandingP({Running Revenue Contribution to All Customers Abs.},0,0.2,0.4,0.6,0.8,1)",\n          "predicateTree": {\n            "level": [\n              {\n                "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",\n                "subType": "attribute",\n                "name": "Customer"\n              }\n            ],\n            "metric": {\n              "objectId": "4C051BCD11D3E877C000B3B2D86C964F",\n              "subType": "metric",\n              "name": "Running Revenue Contribution to All Customers Abs."\n            },\n            "bandMetricFunction": "value",\n            "bandNames": ["bottom 20%", "20%-40%", "40%-60%", "60%-80%", "Top 20%"],\n            "points": [0, 0.2, 0.4, 0.6, 0.8, 1]\n          }\n        }\n      }\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"Response Code: 200 (The custom group's definition is updated successfully in the changeset.)"))}f.isMDXComponent=!0}}]);