"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3447],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),s=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,h=c["".concat(d,".").concat(u)]||c[u]||p[u]||r;return n?i.createElement(h,o(o({ref:t},m),{},{components:n})):i.createElement(h,o({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6110:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var i=n(3117),a=n(102),r=(n(7294),n(3905)),o=["components"],l={title:"Workflow sample - Retrieve a derived element's definition",sidebar_label:"Retrieve a derived element's definition",description:"You can use REST APIs to retrieve the definition for a derived element through the Modeling service."},d=void 0,s={unversionedId:"common-workflows/manage-derived-element-objects/retrieve-a-derived-elements-definition",id:"common-workflows/manage-derived-element-objects/retrieve-a-derived-elements-definition",title:"Workflow sample - Retrieve a derived element's definition",description:"You can use REST APIs to retrieve the definition for a derived element through the Modeling service.",source:"@site/docs/common-workflows/manage-derived-element-objects/retrieve-a-derived-elements-definition.md",sourceDirName:"common-workflows/manage-derived-element-objects",slug:"/common-workflows/manage-derived-element-objects/retrieve-a-derived-elements-definition",permalink:"/rest-api-docs/common-workflows/manage-derived-element-objects/retrieve-a-derived-elements-definition",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-derived-element-objects/retrieve-a-derived-elements-definition.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1668189866,formattedLastUpdatedAt:"Nov 11, 2022",frontMatter:{title:"Workflow sample - Retrieve a derived element's definition",sidebar_label:"Retrieve a derived element's definition",description:"You can use REST APIs to retrieve the definition for a derived element through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Manage derived element objects",permalink:"/rest-api-docs/common-workflows/manage-derived-element-objects/"},next:{title:"Create a derived element",permalink:"/rest-api-docs/common-workflows/manage-derived-element-objects/create-a-derived-element"}},m={},p=[{value:"Retrieve a derived element&#39;s definition",id:"retrieve-a-derived-elements-definition",level:2},{value:"Retrieve the definition of a derived element within a changeset",id:"retrieve-the-definition-of-a-derived-element-within-a-changeset",level:2},{value:"Create a changeset",id:"create-a-changeset",level:3},{value:"Get the derived element&#39;s definition within a changeset",id:"get-the-derived-elements-definition-within-a-changeset",level:3}],c={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-d4a5b7c7-3dba-46fc-acce-0683a23bb1fe?ctx=documentation"},"REST API Playground"),"."),(0,r.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,r.kt)("p",null,"You can use REST APIs to retrieve the definition for a derived element through the Modeling service. This topic includes the following workflows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#retrieve-a-derived-elements-definition"},"Retrieve a derived element's definition")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#retrieve-the-definition-of-a-derived-element-within-a-changeset"},"Retrieve a derived element's definition within a changeset"))),(0,r.kt)("h2",{id:"retrieve-a-derived-elements-definition"},"Retrieve a derived element's definition"),(0,r.kt)("p",null,"You want to get the definition of a derived element that is defined by a list. The object ID of the derived element is ",(0,r.kt)("inlineCode",{parentName:"p"},"610B9CC14AD9DCB69F094C89D3B5480B")," in the MicroStrategy Tutorial project. The project ID is ",(0,r.kt)("inlineCode",{parentName:"p"},"B19DEDCC11D4E0EFC000EB9495D0F44F"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,r.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,r.kt)("p",null,"Get the derived element's definition using ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/DerivedElements/ms-getDerivedElement"},"GET /api/model/derivedElements/{DerivedElementId}"),"."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "lmiouhsue1osvl8uf2vuvlbcfp"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "http://10.23.9.111:8080/MicroStrategyLibrary/api/model/derivedElements/610B9CC14AD9DCB69F094C89D3B5480B" -H "accept: application/json" -H "X-MSTR-AuthToken: lmiouhsue1osvl8uf2vuvlbcfp" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("p",null,"You can view the derived element's definition in the body of the response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2021-02-20T09:18:18.240Z",\n    "dateModified": "2021-02-20T09:18:18.240Z",\n    "versionId": "FCE28B2C4D9B9B502221089FF2718E77",\n    "primaryLocale": "en-US",\n    "objectId": "610B9CC14AD9DCB69F094C89D3B5480B",\n    "subType": "consolidation_element",\n    "name": "Region DE"\n  },\n  "attribute": {\n    "objectId": "8D679D4B11D3E4981000E787EC6DE8A4",\n    "subType": "attribute",\n    "name": "Region"\n  },\n  "elements": [\n    {\n      "id": "2F68CA1344F2B566F32FEAAFCB2B3462",\n      "name": "East Coast",\n      "type": "list",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "options": {\n        "display": "this_element",\n        "subtotal": "this_element",\n        "includeIndividual": false\n      },\n      "text": "Mid-Atlantic, Northeast, Southeast",\n      "elements": [\n        {\n          "display": "Mid-Atlantic",\n          "elementId": "h2"\n        },\n        {\n          "display": "Northeast",\n          "elementId": "h1"\n        },\n        {\n          "display": "Southeast",\n          "elementId": "h3"\n        }\n      ]\n    },\n    {\n      "id": "1B6A9F774B08328E02A4288878A4E956",\n      "name": "West Coast",\n      "type": "list",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "options": {\n        "display": "this_element",\n        "subtotal": "this_element",\n        "includeIndividual": false\n      },\n      "text": "Northwest, Southwest",\n      "elements": [\n        {\n          "display": "Northwest",\n          "elementId": "h6"\n        },\n        {\n          "display": "Southwest",\n          "elementId": "h7"\n        }\n      ]\n    },\n    {\n      "id": "3DA2B7A74DB433E39677B9B5FFEECACE",\n      "name": "Central and South",\n      "type": "list",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "options": {\n        "display": "this_element",\n        "subtotal": "this_element",\n        "includeIndividual": false\n      },\n      "text": "Central, South",\n      "elements": [\n        {\n          "display": "Central",\n          "elementId": "h4"\n        },\n        {\n          "display": "South",\n          "elementId": "h5"\n        }\n      ]\n    },\n    {\n      "id": "06DC5F5B4BE0F51D89259F89F4135F6B",\n      "name": "Web",\n      "type": "all_other",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "options": {\n        "display": "individual_items",\n        "subtotal": "this_element"\n      }\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Response Code: 200 (The derived element's definition is returned successfully.)"),(0,r.kt)("h2",{id:"retrieve-the-definition-of-a-derived-element-within-a-changeset"},"Retrieve the definition of a derived element within a changeset"),(0,r.kt)("p",null,"You want to get the definition of the derived element object, ",(0,r.kt)("inlineCode",{parentName:"p"},'"groupDerivedElement"'),". The object ID of the derived element is ",(0,r.kt)("inlineCode",{parentName:"p"},"610B9CC14AD9DCB69F094C89D3B5480B")," in the MicroStrategy Tutorial project. The project ID is ",(0,r.kt)("inlineCode",{parentName:"p"},"B19DEDCC11D4E0EFC000EB9495D0F44F"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),"."),(0,r.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/projects"),".")),(0,r.kt)("h3",{id:"create-a-changeset"},"Create a changeset"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset"},"POST /api/model/changesets"),"."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://10.23.9.111:8080/MicroStrategyLibrary/api/model/changesets" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "0E9F01172ECF4BA2BB510F7B9FB4F6E8",\n  "dateCreated": "2020-11-17T16:38:09.825650Z",\n  "dateModified": "2020-11-17T16:38:09.825665Z",\n  "status": "Ready",\n  "schemaEdit": false,\n  "userName": "MSTR User",\n  "mstrProjectId": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US"\n}\n')),(0,r.kt)("p",null,"Sample Response Code: 200 (A new changeset is created successfully.)"),(0,r.kt)("h3",{id:"get-the-derived-elements-definition-within-a-changeset"},"Get the derived element's definition within a changeset"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Derived%20Elements/ms-getDerivedElement"},"GET /api/model/derivedElements/{DerivedElementId}"),"."),(0,r.kt)("p",null,"Sample Request Header"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "http://10.23.9.111:8080/MicroStrategyLibrary/api/model/derivedElements/610B9CC14AD9DCB69F094C89D3B5480B" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("p",null,"You can view the derived element's definition in the body of the response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2021-02-20T09:18:18.240Z",\n    "dateModified": "2021-02-20T09:18:18.240Z",\n    "versionId": "FCE28B2C4D9B9B502221089FF2718E77",\n    "primaryLocale": "en-US",\n    "objectId": "610B9CC14AD9DCB69F094C89D3B5480B",\n    "subType": "consolidation_element",\n    "name": "Region DE"\n  },\n  "attribute": {\n    "objectId": "8D679D4B11D3E4981000E787EC6DE8A4",\n    "subType": "attribute",\n    "name": "Region"\n  },\n  "elements": [\n    {\n      "id": "2F68CA1344F2B566F32FEAAFCB2B3462",\n      "name": "East Coast",\n      "type": "list",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "options": {\n        "display": "this_element",\n        "subtotal": "this_element",\n        "includeIndividual": false\n      },\n      "text": "Mid-Atlantic, Northeast, Southeast",\n      "elements": [\n        {\n          "display": "Mid-Atlantic",\n          "elementId": "h2"\n        },\n        {\n          "display": "Northeast",\n          "elementId": "h1"\n        },\n        {\n          "display": "Southeast",\n          "elementId": "h3"\n        }\n      ]\n    },\n    {\n      "id": "1B6A9F774B08328E02A4288878A4E956",\n      "name": "West Coast",\n      "type": "list",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "options": {\n        "display": "this_element",\n        "subtotal": "this_element",\n        "includeIndividual": false\n      },\n      "text": "Northwest, Southwest",\n      "elements": [\n        {\n          "display": "Northwest",\n          "elementId": "h6"\n        },\n        {\n          "display": "Southwest",\n          "elementId": "h7"\n        }\n      ]\n    },\n    {\n      "id": "3DA2B7A74DB433E39677B9B5FFEECACE",\n      "name": "Central and South",\n      "type": "list",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "options": {\n        "display": "this_element",\n        "subtotal": "this_element",\n        "includeIndividual": false\n      },\n      "text": "Central, South",\n      "elements": [\n        {\n          "display": "Central",\n          "elementId": "h4"\n        },\n        {\n          "display": "South",\n          "elementId": "h5"\n        }\n      ]\n    },\n    {\n      "id": "06DC5F5B4BE0F51D89259F89F4135F6B",\n      "name": "Web",\n      "type": "all_other",\n      "format": {\n        "header": [],\n        "values": []\n      },\n      "options": {\n        "display": "individual_items",\n        "subtotal": "this_element"\n      }\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Response Code: 200 (The derived element's definition is returned successfully.)"))}u.isMDXComponent=!0}}]);