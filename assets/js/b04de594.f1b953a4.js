"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[143],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,h=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},154:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return d}});var a,r=n(3117),i=n(102),o=(n(7294),n(3905)),l=["components"],s={title:"Create a user hierarchy",sidebar_label:"Create a user hierarchy",description:"This workflow sample demonstrates how to create a user hierarchy object through the Modeling service."},p=void 0,m={unversionedId:"common-workflows/modeling/manage-user-hierarchy-objects/create-a-user-hierarchy",id:"common-workflows/modeling/manage-user-hierarchy-objects/create-a-user-hierarchy",title:"Create a user hierarchy",description:"This workflow sample demonstrates how to create a user hierarchy object through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-user-hierarchy-objects/create-a-user-hierarchy.md",sourceDirName:"common-workflows/modeling/manage-user-hierarchy-objects",slug:"/common-workflows/modeling/manage-user-hierarchy-objects/create-a-user-hierarchy",permalink:"/rest-api-docs/common-workflows/modeling/manage-user-hierarchy-objects/create-a-user-hierarchy",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-user-hierarchy-objects/create-a-user-hierarchy.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1677268684,formattedLastUpdatedAt:"Feb 24, 2023",frontMatter:{title:"Create a user hierarchy",sidebar_label:"Create a user hierarchy",description:"This workflow sample demonstrates how to create a user hierarchy object through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a user hierarchy's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-user-hierarchy-objects/retrieve-a-user-hierarchys-definition"},next:{title:"Update a user hierarchy's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-user-hierarchy-objects/update-a-user-hierarchys-definition"}},u={},d=[{value:"Create a user hierarchy",id:"create-a-user-hierarchy",level:2}],c=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),h={toc:d};function y(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c,{since:"2021 Update 2",mdxType:"Available"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-c257416e-ee2c-46fc-9a71-f2ea390c8452?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"This workflow sample demonstrates how to create a user hierarchy object through the Modeling service."),(0,o.kt)("p",null,"You want to create a Time user hierarchy object, in the MicroStrategy Tutorial project, which contains the relationship between the Year, Month of Year, Quarter, Month, and Day attributes. The folder object ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"8A1831FF494F528D02A4A8BF5FB73459"),". The project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),".")),(0,o.kt)("h2",{id:"create-a-user-hierarchy"},"Create a user hierarchy"),(0,o.kt)("p",null,"Endpoint: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Hierarchies/ms-createHierarchy"},"POST /api/model/hierarchies"),". You must enter the required fields with the correct information."),(0,o.kt)("p",null,"The response can change based on the request parameters provided by the caller. Use the following parameters."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Location"),(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"header"),(0,o.kt)("td",{parentName:"tr",align:null},"X-MSTR-authToken"),(0,o.kt)("td",{parentName:"tr",align:null},"The authorization token")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"header"),(0,o.kt)("td",{parentName:"tr",align:null},"X-MSTR-ProjectID"),(0,o.kt)("td",{parentName:"tr",align:null},"The ID of the project")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"header"),(0,o.kt)("td",{parentName:"tr",align:null},"X-MSTR-MS-Changeset"),(0,o.kt)("td",{parentName:"tr",align:null},"The ID of the changeset")))),(0,o.kt)("p",null,"To create a time user hierarchy with specific attributes and relationships, submit the request body with the correct information. In ",(0,o.kt)("inlineCode",{parentName:"p"},'"information"'),", provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"destinationFolderID")," for the user hierarchy you want to create. The model for the definition of a user hierarchy is represented with the following fields:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Fields"),(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"information"),(0,o.kt)("td",{parentName:"tr",align:null},"name"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the user hierarchy. This should be a user-friendly name for identifying the user hierarchy."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"information"),(0,o.kt)("td",{parentName:"tr",align:null},"subType"),(0,o.kt)("td",{parentName:"tr",align:null},'The type of user hierarchy. The "subType" is ignored if it conflicts with the "useAsDrillHierarchy" field.'),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"information"),(0,o.kt)("td",{parentName:"tr",align:null},"destinationFolderId"),(0,o.kt)("td",{parentName:"tr",align:null},"The folder ID where the new user hierarchy is saved."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"useAsDrillHierarchy"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Indicates the user hierarchy subtype"),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"attributes"),(0,o.kt)("td",{parentName:"tr",align:null},"objectId"),(0,o.kt)("td",{parentName:"tr",align:null},"The ID of the attribute in the user hierarchy."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"attributes"),(0,o.kt)("td",{parentName:"tr",align:null},"name"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the attribute."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"attributes"),(0,o.kt)("td",{parentName:"tr",align:null},"entryPoint"),(0,o.kt)("td",{parentName:"tr",align:null},"Indicates whether the current attribute is a single entry point attribute."),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"attributes"),(0,o.kt)("td",{parentName:"tr",align:null},"elementDisplayOption"),(0,o.kt)("td",{parentName:"tr",align:null},"Indicates the element display type of the specified attribute."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"attributes"),(0,o.kt)("td",{parentName:"tr",align:null},"filter"),(0,o.kt)("td",{parentName:"tr",align:null},'A list of standalone filter objects with "objectId", "subType", and "name" that apply to the specified attribute.'),(0,o.kt)("td",{parentName:"tr",align:null},"List",(0,o.kt)("inlineCode",{parentName:"td"},"<ObjectInfoReference>")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"attributes"),(0,o.kt)("td",{parentName:"tr",align:null},"limit"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of elements to display. Required for limited_elements with a range of ","[1, 1000000]","."),(0,o.kt)("td",{parentName:"tr",align:null},"integer"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"relationships"),(0,o.kt)("td",{parentName:"tr",align:null},"parent"),(0,o.kt)("td",{parentName:"tr",align:null},"The parent attribute of the relationship."),(0,o.kt)("td",{parentName:"tr",align:null},"ObjectInfoReference"),(0,o.kt)("td",{parentName:"tr",align:null},"yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"relationships"),(0,o.kt)("td",{parentName:"tr",align:null},"child"),(0,o.kt)("td",{parentName:"tr",align:null},"The child attribute of the relationship."),(0,o.kt)("td",{parentName:"tr",align:null},"ObjectInfoReference"),(0,o.kt)("td",{parentName:"tr",align:null},"yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"objectID"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dateCreated"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dateModified")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"versionId")," are generated automatically. Currently only ",(0,o.kt)("inlineCode",{parentName:"p"},"en-US")," is available for ",(0,o.kt)("inlineCode",{parentName:"p"},"primaryLocale"),".")),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "bbjpsjos3b7ebokq9jdfvknska"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n"X-MSTR-MS-Changeset": "4E830DF576A24E4B9120455EE576EB51"\n"Content-Type": "application/json"\n')),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n    "subType": "dimension_user",\n    "name": "Time_New"\n  },\n  "useAsDrillHierarchy": true,\n  "attributes": [\n    {\n      "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n      "name": "Month",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    },\n    {\n      "objectId": "8D679D4511D3E4981000E787EC6DE8A4",\n      "name": "Month of Year",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    },\n    {\n      "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",\n      "name": "Quarter",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    },\n    {\n      "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n      "name": "Year",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    },\n    {\n      "objectId": "96ED3EC811D5B117C000E78A4CC5F24F",\n      "name": "Day",\n      "entryPoint": true,\n      "elementDisplayOption": "limited_elements",\n      "limit": 50\n    }\n  ],\n  "relationships": [\n    {\n      "parent": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      },\n      "child": {\n        "objectId": "96ED3EC811D5B117C000E78A4CC5F24F",\n        "subType": "attribute",\n        "name": "Day"\n      }\n    },\n    {\n      "parent": {\n        "objectId": "8D679D4511D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month of Year"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      }\n    },\n    {\n      "parent": {\n        "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Quarter"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      }\n    },\n    {\n      "parent": {\n        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Year"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      }\n    },\n    {\n      "parent": {\n        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Year"\n      },\n      "child": {\n        "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Quarter"\n      }\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "http://10.23.7.118:8080/MicroStrategyLibrary/api/model/hierarchies" -H "accept: application/json" -H "X-MSTR-AuthToken: bbjpsjos3b7ebokq9jdfvknska" -H "X-MSTR-MS-Changeset: 4E830DF576A24E4B9120455EE576EB51" -H "Content-Type: application/json" -d "{\\"information\\":{\\"destinationFolderId\\":\\"8A1831FF494F528D02A4A8BF5FB73459\\",\\"subType\\":\\"dimension_user\\",\\"name\\":\\"Time_New\\"},\\"useAsDrillHierarchy\\":true,\\"attributes\\":[{\\"objectId\\":\\"8D679D4411D3E4981000E787EC6DE8A4\\",\\"name\\":\\"Month\\",\\"entryPoint\\":true,\\"elementDisplayOption\\":\\"all_elements\\"},{\\"objectId\\":\\"8D679D4511D3E4981000E787EC6DE8A4\\",\\"name\\":\\"Month of Year\\",\\"entryPoint\\":true,\\"elementDisplayOption\\":\\"all_elements\\"},{\\"objectId\\":\\"8D679D4A11D3E4981000E787EC6DE8A4\\",\\"name\\":\\"Quarter\\",\\"entryPoint\\":true,\\"elementDisplayOption\\":\\"all_elements\\"},{\\"objectId\\":\\"8D679D5111D3E4981000E787EC6DE8A4\\",\\"name\\":\\"Year\\",\\"entryPoint\\":true,\\"elementDisplayOption\\":\\"all_elements\\"},{\\"objectId\\":\\"96ED3EC811D5B117C000E78A4CC5F24F\\",\\"name\\":\\"Day\\",\\"entryPoint\\":true,\\"elementDisplayOption\\":\\"limited_elements\\",\\"limit\\":50}],\\"relationships\\":[{\\"parent\\":{\\"objectId\\":\\"8D679D4411D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Month\\"},\\"child\\":{\\"objectId\\":\\"96ED3EC811D5B117C000E78A4CC5F24F\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Day\\"}},{\\"parent\\":{\\"objectId\\":\\"8D679D4511D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Month of Year\\"},\\"child\\":{\\"objectId\\":\\"8D679D4411D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Month\\"}},{\\"parent\\":{\\"objectId\\":\\"8D679D4A11D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Quarter\\"},\\"child\\":{\\"objectId\\":\\"8D679D4411D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Month\\"}},{\\"parent\\":{\\"objectId\\":\\"8D679D5111D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Year\\"},\\"child\\":{\\"objectId\\":\\"8D679D4411D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Month\\"}},{\\"parent\\":{\\"objectId\\":\\"8D679D5111D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Year\\"},\\"child\\":{\\"objectId\\":\\"8D679D4A11D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Quarter\\"}}]}"\n')),(0,o.kt)("p",null,"Sample Response Body: You can view the user hierarchy's definition in the body of the response. See ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/manage-user-hierarchy-objects/user-hierarchy-import-parameters"},"User hierarchy import parameters")," for more information about the import parameters that define the user hierarchy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "versionId": "00F6F79E85044441BDE5025B8EC39B34",\n    "primaryLocale": "en-US",\n    "objectId": "86907CCB32ED4B629541116C7F912963",\n    "subType": "dimension_user",\n    "name": "Time_New",\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459"\n  },\n  "useAsDrillHierarchy": true,\n  "attributes": [\n    {\n      "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n      "name": "Month",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    },\n    {\n      "objectId": "8D679D4511D3E4981000E787EC6DE8A4",\n      "name": "Month of Year",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    },\n    {\n      "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",\n      "name": "Quarter",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    },\n    {\n      "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n      "name": "Year",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    },\n    {\n      "objectId": "96ED3EC811D5B117C000E78A4CC5F24F",\n      "name": "Day",\n      "entryPoint": true,\n      "elementDisplayOption": "limited_elements",\n      "limit": 50\n    }\n  ],\n  "relationships": [\n    {\n      "parent": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      },\n      "child": {\n        "objectId": "96ED3EC811D5B117C000E78A4CC5F24F",\n        "subType": "attribute",\n        "name": "Day"\n      }\n    },\n    {\n      "parent": {\n        "objectId": "8D679D4511D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month of Year"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      }\n    },\n    {\n      "parent": {\n        "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Quarter"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      }\n    },\n    {\n      "parent": {\n        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Year"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      }\n    },\n    {\n      "parent": {\n        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Year"\n      },\n      "child": {\n        "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Quarter"\n      }\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Response Code: 201 (A new user hierarchy is created successfully in the changeset.)"))}y.isMDXComponent=!0}}]);