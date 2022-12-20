"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[4457],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,h=c["".concat(s,".").concat(u)]||c[u]||p[u]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4861:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],l={title:"Workflow sample - Replace an existing derived element",sidebar_label:"Replace an existing derived element",description:"This workflow sample demonstrates how to replace an existing derived element object through the Modeling service."},s=void 0,d={unversionedId:"common-workflows/manage-derived-element-objects/replace-an-existing-element",id:"common-workflows/manage-derived-element-objects/replace-an-existing-element",title:"Workflow sample - Replace an existing derived element",description:"This workflow sample demonstrates how to replace an existing derived element object through the Modeling service.",source:"@site/docs/common-workflows/manage-derived-element-objects/replace-an-existing-element.md",sourceDirName:"common-workflows/manage-derived-element-objects",slug:"/common-workflows/manage-derived-element-objects/replace-an-existing-element",permalink:"/rest-api-docs/common-workflows/manage-derived-element-objects/replace-an-existing-element",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-derived-element-objects/replace-an-existing-element.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1671571075,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{title:"Workflow sample - Replace an existing derived element",sidebar_label:"Replace an existing derived element",description:"This workflow sample demonstrates how to replace an existing derived element object through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a derived element",permalink:"/rest-api-docs/common-workflows/manage-derived-element-objects/create-a-derived-element"},next:{title:"Format samples for derived elements",permalink:"/rest-api-docs/common-workflows/manage-derived-element-objects/format-samples"}},m={},p=[{value:"Replace an existing derived element",id:"replace-an-existing-derived-element",level:2}],c={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-d4a5b7c7-3dba-46fc-acce-0683a23bb1fe?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"This workflow sample demonstrates how to replace an existing derived element object through the Modeling service."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a changeset."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#replace-an-existing-derived-element"},"Replace an existing derived element.")),(0,o.kt)("li",{parentName:"ol"},"Commit the changeset."),(0,o.kt)("li",{parentName:"ol"},"Delete the changeset.")),(0,o.kt)("p",null,"You want to replace the existing ",(0,o.kt)("inlineCode",{parentName:"p"},'"Region DE"')," derived element object in the MicroStrategy Tutorial project. The derived element object ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"610B9CC14AD9DCB69F094C89D3B5480B"),". The project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B19DEDCC11D4E0EFC000EB9495D0F44F"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets see ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/changesets"},"Changesets"),".")),(0,o.kt)("h2",{id:"replace-an-existing-derived-element"},"Replace an existing derived element"),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Derived%20Elements/ms-putDerivedElement"},"PUT /api/model/derivedElements/{derivedElementId}")),(0,o.kt)("p",null,"The embedded elements in a derived element can be ",(0,o.kt)("inlineCode",{parentName:"p"},'"list"'),", ",(0,o.kt)("inlineCode",{parentName:"p"},'"filter"'),", ",(0,o.kt)("inlineCode",{parentName:"p"},'"calculation"')," or ",(0,o.kt)("inlineCode",{parentName:"p"},'"all_other"'),". In this example, you are replacing the existing ",(0,o.kt)("inlineCode",{parentName:"p"},'"Region DE"')," derived element with an embedded ",(0,o.kt)("inlineCode",{parentName:"p"},'"list"')," element and an ",(0,o.kt)("inlineCode",{parentName:"p"},'"all_other"')," element."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Each derived element must have exactly one ",(0,o.kt)("inlineCode",{parentName:"p"},'"all_other"')," element.")),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For more details on how to set format properties, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/manage-derived-element-objects/format-samples"},"Format samples for derived elements"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "name": "Replaced Region DE"\n  },\n  "attribute": {\n    "objectId": "8D679D4B11D3E4981000E787EC6DE8A4",\n    "name": "Region"\n  },\n  "elements": [\n    {\n      "name": "offline",\n      "type": "list",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "options": {\n        "display": "this_element",\n        "subtotal": "this_element",\n        "includeIndividual": false\n      },\n      "text": "Mid-Atlantic, Northeast, Southeast, Northwest, Southwest, Central, South",\n      "elements": [\n        {\n          "display": "Mid-Atlantic",\n          "elementId": "h2"\n        },\n        {\n          "display": "Northeast",\n          "elementId": "h1"\n        },\n        {\n          "display": "Southeast",\n          "elementId": "h3"\n        },\n        {\n          "display": "Northwest",\n          "elementId": "h4"\n        },\n        {\n          "display": "Southwest",\n          "elementId": "h5"\n        },\n        {\n          "display": "Central",\n          "elementId": "h6"\n        },\n        {\n          "display": "South",\n          "elementId": "h7"\n        }\n      ]\n    },\n    {\n      "name": "Web",\n      "type": "all_other",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "options": {\n        "display": "individual_items",\n        "subtotal": "this_element"\n      }\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "http://10.23.9.111:8080/MicroStrategyLibrary/api/model/derivedElements" -H "accept: application/json" -H "X-MSTR-AuthToken: 9rlq0e1dgg3rp237hiddruqcd0" -H "X-MSTR-MS-Changeset: EE48CD8879C44A03B18660AE7AFC8F68" -H "Content-Type: application/json" -d "{\\"elements\\":[{\\"name\\":\\"offline\\",\\"type\\":\\"list\\",\\"format\\":{\\"header\\":[],\\"values\\":[]},\\"options\\":{\\"display\\":\\"this_element\\",\\"subtotal\\":\\"this_element\\",\\"includeIndividual\\":false},\\"text\\":\\"Mid-Atlantic,Northeast,Southeast,Northwest,Southwest,Central,South\\",\\"elements\\":[{\\"display\\":\\"Mid-Atlantic\\",\\"elementId\\":\\"h2\\"},{\\"display\\":\\"Northeast\\",\\"elementId\\":\\"h1\\"},{\\"display\\":\\"Southeast\\",\\"elementId\\":\\"h3\\"},{\\"display\\":\\"Northwest\\",\\"elementId\\":\\"h4\\"},{\\"display\\":\\"Southwest\\",\\"elementId\\":\\"h5\\"},{\\"display\\":\\"Central\\",\\"elementId\\":\\"h6\\"},{\\"display\\":\\"South\\",\\"elementId\\":\\"h7\\"}]},{\\"name\\":\\"Web\\",\\"type\\":\\"all_other\\",\\"format\\":{\\"header\\":[],\\"values\\":[]},\\"options\\":{\\"display\\":\\"individual_items\\",\\"subtotal\\":\\"this_element\\"}}]}"\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,"You can view he new derived element's definition in the body of the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2021-02-20T09:18:18.000Z",\n    "dateModified": "2021-02-20T09:40:14.000Z",\n    "versionId": "325929D9432F9D23C7CEDFA473E70D7F",\n    "primaryLocale": "en-US",\n    "objectId": "610B9CC14AD9DCB69F094C89D3B5480B",\n    "subType": "consolidation_element",\n    "name": "Replaced Region DE"\n  },\n  "attribute": {\n    "objectId": "8D679D4B11D3E4981000E787EC6DE8A4",\n    "subType": "attribute",\n    "name": "Region"\n  },\n  "elements": [\n    {\n      "id": "26785E245237495E908D9F620F81E02F",\n      "name": "offline",\n      "type": "list",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "options": {\n        "display": "this_element",\n        "subtotal": "this_element",\n        "includeIndividual": false\n      },\n      "text": "Mid-Atlantic, Northeast, Southeast, Northwest, Southwest, Central, South",\n      "elements": [\n        {\n          "display": "Mid-Atlantic",\n          "elementId": "h2"\n        },\n        {\n          "display": "Northeast",\n          "elementId": "h1"\n        },\n        {\n          "display": "Southeast",\n          "elementId": "h3"\n        },\n        {\n          "display": "Northwest",\n          "elementId": "h4"\n        },\n        {\n          "display": "Southwest",\n          "elementId": "h5"\n        },\n        {\n          "display": "Central",\n          "elementId": "h6"\n        },\n        {\n          "display": "South",\n          "elementId": "h7"\n        }\n      ]\n    },\n    {\n      "id": "33686BC5418B4CFDAEC01298E5201E53",\n      "name": "Web",\n      "type": "all_other",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "options": {\n        "display": "individual_items",\n        "subtotal": "this_element"\n      }\n    }\n  ]\n}\n')),(0,o.kt)("p",null,'Response Code: 201 (The "Region DE" derived element is replaced successfully in the changeset.)'))}u.isMDXComponent=!0}}]);