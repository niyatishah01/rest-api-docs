"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5688],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},24383:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var r,a=n(83117),o=n(80102),i=(n(67294),n(3905)),l=["components"],s={title:"Put a derived element in report",description:"This workflow sample demonstrates how to put a derived element in report using REST APIs."},p=void 0,d={unversionedId:"common-workflows/analytics/manage-reports/manage-report-objects/put-a-derived-element-in-report",id:"common-workflows/analytics/manage-reports/manage-report-objects/put-a-derived-element-in-report",title:"Put a derived element in report",description:"This workflow sample demonstrates how to put a derived element in report using REST APIs.",source:"@site/docs/common-workflows/analytics/manage-reports/manage-report-objects/put-a-derived-element-in-report.md",sourceDirName:"common-workflows/analytics/manage-reports/manage-report-objects",slug:"/common-workflows/analytics/manage-reports/manage-report-objects/put-a-derived-element-in-report",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-report-objects/put-a-derived-element-in-report",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/manage-reports/manage-report-objects/put-a-derived-element-in-report.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1680880277,formattedLastUpdatedAt:"Apr 7, 2023",frontMatter:{title:"Put a derived element in report",description:"This workflow sample demonstrates how to put a derived element in report using REST APIs."},sidebar:"tutorialSidebar",previous:{title:"Execute report",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-report-objects/execute-report"},next:{title:"Retrieve applicable properties of a report",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-report-objects/retrieve-applicable-properties-of-a-report"}},m={},c=[{value:"Put a derived element in report",id:"put-a-derived-element-in-report",level:2},{value:"1. Create a report instance",id:"1-create-a-report-instance",level:3},{value:"2. Replace an existing derived element in report",id:"2-replace-an-existing-derived-element-in-report",level:3},{value:"3. Save the report instance",id:"3-save-the-report-instance",level:3},{value:"4. Delete the report instance",id:"4-delete-the-report-instance",level:3}],u=(r="Available",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),h={toc:c};function y(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(u,{since:"2021 Update 7",mdxType:"Available"}),(0,i.kt)("p",null,"This workflow sample demonstrates how to replace an existing derived element in report. Please be noted that standalone derived element referred in report cannot be updated using this API. Please use ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT /api/model/derivedElements/{derivedElementId}")," instead."),(0,i.kt)("h2",{id:"put-a-derived-element-in-report"},"Put a derived element in report"),(0,i.kt)("p",null,"You want to replace the existing derived element in report. The report object ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"9B9ADA7F464E63CE0D0B709B03BD9370"),". The derived element object ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"610B9CC14AD9DCB69F094C89D3B5480B"),". The project ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"B19DEDCC11D4E0EFC000EB9495D0F44F"),"."),(0,i.kt)("p",null,"Obtain the authorization token needed to execute the request using ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),". Obtain the project ID from ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/projects"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"A report instance is required for getting, creating, updating, deleting derived elements in report. A report instance maintains an indivisible group of creations or modifications on a report. It is similar to the changeset concept in Modeling service, but the scope is limited to report related objects.")),(0,i.kt)("h3",{id:"1-create-a-report-instance"},"1. Create a report instance"),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-createReportInstance"},"POST /api/model/reports/{reportId}/instances")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\nSample Request Body: Empty\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/instances' -H 'accept: application/json' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\n")),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "95DB57A54ACCCF292F0C0E9689EDF0A4"\n}\n')),(0,i.kt)("p",null,"Sample Response Code: 201 (A new report instance is created successfully.)"),(0,i.kt)("h3",{id:"2-replace-an-existing-derived-element-in-report"},"2. Replace an existing derived element in report"),(0,i.kt)("p",null,'The embedded elements in a derived element can be "list", "filter", "calculation" or "all_other". In this example, you are replacing the existing ',(0,i.kt)("inlineCode",{parentName:"p"},"Region DE"),' derived element with an embedded "list" element and an "all_other" element.'),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-putReportDerivedElement"},"PUT /api/model/reports/{reportId}/derivedElements/{derivedElementId}")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Instance": "95DB57A54ACCCF292F0C0E9689EDF0A4"\n')),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For more details on how to set format properties, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/manage-derived-element-objects/format-samples"},"Format samples"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "name": "Replaced Region DE"\n  },\n  "attribute": {\n    "objectId": "8D679D4B11D3E4981000E787EC6DE8A4",\n    "name": "Region"\n  },\n  "elements": [\n    {\n      "name": "offline",\n      "type": "list",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "options": {\n        "display": "this_element",\n        "subtotal": "this_element",\n        "includeIndividual": false\n      },\n      "text": "Mid-Atlantic, Northeast, Southeast, Northwest, Sourthwest, Central, South",\n      "elements": [\n        {\n          "display": "Mid-Atlantic",\n          "elementId": "h2"\n        },\n        {\n          "display": "Northeast",\n          "elementId": "h1"\n        },\n        {\n          "display": "Southeast",\n          "elementId": "h3"\n        },\n        {\n          "display": "Northwest",\n          "elementId": "h4"\n        },\n        {\n          "display": "Southwest",\n          "elementId": "h5"\n        },\n        {\n          "display": "Central",\n          "elementId": "h6"\n        },\n        {\n          "display": "South",\n          "elementId": "h7"\n        }\n      ]\n    },\n    {\n      "name": "Web",\n      "type": "all_other",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "options": {\n        "display": "individual_items",\n        "subtotal": "this_element"\n      }\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT \'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/derivedElements/610B9CC14AD9DCB69F094C89D3B5480B\' -H "accept: application/json" -H \'X-MSTR-MS-Instance: 95DB57A54ACCCF292F0C0E9689EDF0A4\' -H \'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch\' -H \'Content-Type: application/json\' -d \'{\n  "information": {\n    "name": "Replaced Region DE"\n  },\n  "attribute": {\n    "objectId": "8D679D4B11D3E4981000E787EC6DE8A4",\n    "name": "Region"\n  },\n  "elements": [\n    {\n      "name": "offline",\n      "type": "list",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "options": {\n        "display": "this_element",\n        "subtotal": "this_element",\n        "includeIndividual": false\n      },\n      "text": "Mid-Atlantic, Northeast, Southeast, Northwest, Sourthwest, Central, South",\n      "elements": [\n        {\n          "display": "Mid-Atlantic",\n          "elementId": "h2"\n        },\n        {\n          "display": "Northeast",\n          "elementId": "h1"\n        },\n        {\n          "display": "Southeast",\n          "elementId": "h3"\n        },\n        {\n          "display": "Northwest",\n          "elementId": "h4"\n        },\n        {\n          "display": "Southwest",\n          "elementId": "h5"\n        },\n        {\n          "display": "Central",\n          "elementId": "h6"\n        },\n        {\n          "display": "South",\n          "elementId": "h7"\n        }\n      ]\n    },\n    {\n      "name": "Web",\n      "type": "all_other",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "options": {\n        "display": "individual_items",\n        "subtotal": "this_element"\n      }\n    }\n  ]\n}\'\n')),(0,i.kt)("p",null,"Sample Response Body: You can view the new derived element\u2019s definition in the body of the response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2021-02-20T09:18:18.000Z",\n    "dateModified": "2021-02-20T09:40:14.000Z",\n    "versionId": "325929D9432F9D23C7CEDFA473E70D7F",\n    "primaryLocale": "en-US",\n    "objectId": "610B9CC14AD9DCB69F094C89D3B5480B",\n    "subType": "consolidation_element",\n    "name": "Replaced Region DE"\n  },\n  "attribute": {\n    "objectId": "8D679D4B11D3E4981000E787EC6DE8A4",\n    "subType": "attribute",\n    "name": "Region"\n  },\n  "elements": [\n    {\n      "id": "26785E245237495E908D9F620F81E02F",\n      "name": "offline",\n      "type": "list",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "options": {\n        "display": "this_element",\n        "subtotal": "this_element",\n        "includeIndividual": false\n      },\n      "text": "Mid-Atlantic, Northeast, Southeast, Northwest, Southwest, Central, South",\n      "elements": [\n        {\n          "display": "Mid-Atlantic",\n          "elementId": "h2"\n        },\n        {\n          "display": "Northeast",\n          "elementId": "h1"\n        },\n        {\n          "display": "Southeast",\n          "elementId": "h3"\n        },\n        {\n          "display": "Northwest",\n          "elementId": "h4"\n        },\n        {\n          "display": "Southwest",\n          "elementId": "h5"\n        },\n        {\n          "display": "Central",\n          "elementId": "h6"\n        },\n        {\n          "display": "South",\n          "elementId": "h7"\n        }\n      ]\n    },\n    {\n      "id": "33686BC5418B4CFDAEC01298E5201E53",\n      "name": "Web",\n      "type": "all_other",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "options": {\n        "display": "individual_items",\n        "subtotal": "this_element"\n      }\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Response Code: 201 (The derived element is replaced successfully in the report.)"),(0,i.kt)("h3",{id:"3-save-the-report-instance"},"3. Save the report instance"),(0,i.kt)("p",null,"The derived element will be saved together with report using save report instance API."),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-saveReportInstance"},"POST /api/model/reports/{reportId}/instances/save")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Instance": "95DB57A54ACCCF292F0C0E9689EDF0A4"\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/instances/save' -H 'accept: application/json' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-MS-Instance: 95DB57A54ACCCF292F0C0E9689EDF0A4'\n")),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "objectId": "9B9ADA7F464E63CE0D0B709B03BD9370"\n}\n')),(0,i.kt)("p",null,"Sample Response Code: 201 (The report is saved successfully.)"),(0,i.kt)("h3",{id:"4-delete-the-report-instance"},"4. Delete the report instance"),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-deleteReportInstance"},"DELETE /api/model/reports/{reportId}/instances")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Instance": "95DB57A54ACCCF292F0C0E9689EDF0A4"\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X DELETE 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/instances' -H 'accept: */*' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-MS-Instance: 95DB57A54ACCCF292F0C0E9689EDF0A4'\n")),(0,i.kt)("p",null,"Sample Response Body: Empty"),(0,i.kt)("p",null,"Sample Response Code: 204 (The report instance has been deleted successfully.)"))}y.isMDXComponent=!0}}]);