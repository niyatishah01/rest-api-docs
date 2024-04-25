"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[7776],{92896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var r=n(74848),i=n(28453);const s={title:"Update a user hierarchy's definition",sidebar_label:"Update a user hierarchy's definition",description:"This workflow sample demonstrates how to update an user hierarchy's definition through the Modeling service."},a=void 0,o={id:"common-workflows/modeling/manage-user-hierarchy-objects/update-a-user-hierarchys-definition",title:"Update a user hierarchy's definition",description:"This workflow sample demonstrates how to update an user hierarchy's definition through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-user-hierarchy-objects/update-a-user-hierarchys-definition.md",sourceDirName:"common-workflows/modeling/manage-user-hierarchy-objects",slug:"/common-workflows/modeling/manage-user-hierarchy-objects/update-a-user-hierarchys-definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-user-hierarchy-objects/update-a-user-hierarchys-definition",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-user-hierarchy-objects/update-a-user-hierarchys-definition.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1714063612,formattedLastUpdatedAt:"Apr 25, 2024",frontMatter:{title:"Update a user hierarchy's definition",sidebar_label:"Update a user hierarchy's definition",description:"This workflow sample demonstrates how to update an user hierarchy's definition through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a user hierarchy",permalink:"/rest-api-docs/common-workflows/modeling/manage-user-hierarchy-objects/create-a-user-hierarchy"},next:{title:"Retrieve a list of available user hierarchies",permalink:"/rest-api-docs/common-workflows/modeling/manage-user-hierarchy-objects/retrieve-a-list-of-available-user-hierarchies"}},d={},h=[{value:"Update the user hierarchy&#39;s definition",id:"update-the-user-hierarchys-definition",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Available:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{since:"2021 Update 2"}),"\n",(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsxs)(t.p,{children:["You can try out this workflow at ",(0,r.jsx)(t.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-c257416e-ee2c-46fc-9a71-f2ea390c8452?ctx=documentation",children:"REST API Playground"}),"."]}),(0,r.jsxs)(t.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,r.jsx)(t.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,r.jsx)(t.p,{children:"This workflow sample demonstrates how to update an user hierarchy's definition through the Modeling service."}),"\n",(0,r.jsx)(t.p,{children:"You want to update the definition of the Time user hierarchy with following changes:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Remove the Day attribute and its relationship."}),"\n",(0,r.jsxs)(t.li,{children:["Move it to an object folder with an ID of ",(0,r.jsx)(t.code,{children:"8A1831FF494F528D02A4A8BF5FB73459"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"Rename the user hierarchy to TimeToMonth."}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client."})}),"\n",(0,r.jsxs)(t.admonition,{type:"info",children:[(0,r.jsxs)(t.p,{children:["Get the authorization token needed to execute the request with ",(0,r.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,r.jsxs)(t.p,{children:["Get the project ID from ",(0,r.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]}),(0,r.jsxs)(t.p,{children:["Obtain the user hierarchy ID from ",(0,r.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Hierarchies/ms-getHierarchies",children:"GET /api/model/hierarchies"}),"."]})]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,r.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/changesets",children:"Changesets"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"update-the-user-hierarchys-definition",children:"Update the user hierarchy's definition"}),"\n",(0,r.jsxs)(t.p,{children:["Endpoint: ",(0,r.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Hierarchies/ms-updateHiearchy",children:"PATCH /api/model/hierarchies/{hierarchyId}"}),"."]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Provide the following headers in the request."}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Location"}),(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"header"}),(0,r.jsx)(t.td,{children:"X-MSTR-authToken"}),(0,r.jsx)(t.td,{children:"The authorization token"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"header"}),(0,r.jsx)(t.td,{children:"X-MSTR-ProjectID"}),(0,r.jsx)(t.td,{children:"The ID of the project"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"header"}),(0,r.jsx)(t.td,{children:"X-MSTR-MS-Changeset"}),(0,r.jsx)(t.td,{children:"The ID of the changeset"})]})]})]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Provide the ID of the user hierarchy you want to update."}),"\n",(0,r.jsx)(t.li,{children:'You can modify the fields shown below. The "subType" field is not included since it cannot be modified through this REST API.'}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Fields"}),(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Data Type"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"information"}),(0,r.jsx)(t.td,{children:"name"}),(0,r.jsx)(t.td,{children:"The name of the user hierarchy. This should be a user-friendly name for identifying the user hierarchy."}),(0,r.jsx)(t.td,{children:"string"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"information"}),(0,r.jsx)(t.td,{children:"destinationFolderId"}),(0,r.jsx)(t.td,{children:"The folder ID where the new user hierarchy is saved."}),(0,r.jsx)(t.td,{children:"string"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"useAsDrillHierarchy"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Indicates the user hierarchy subtype"}),(0,r.jsx)(t.td,{children:"Boolean"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"attributes"}),(0,r.jsx)(t.td,{children:"objectId"}),(0,r.jsx)(t.td,{children:"The ID of the attribute in the user hierarchy."}),(0,r.jsx)(t.td,{children:"string"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"attributes"}),(0,r.jsx)(t.td,{children:"name"}),(0,r.jsx)(t.td,{children:"The name of the attribute."}),(0,r.jsx)(t.td,{children:"string"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"attributes"}),(0,r.jsx)(t.td,{children:"entryPoint"}),(0,r.jsx)(t.td,{children:"Indicates whether the current attribute is a single entry point attribute."}),(0,r.jsx)(t.td,{children:"Boolean"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"attributes"}),(0,r.jsx)(t.td,{children:"elementDisplayOption"}),(0,r.jsx)(t.td,{children:"Indicates the element display type of the specified attribute."}),(0,r.jsx)(t.td,{children:"string"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"attributes"}),(0,r.jsx)(t.td,{children:"filter"}),(0,r.jsx)(t.td,{children:'A list of standalone filter objects with "objectId", "subType", and "name" that apply to the specified attribute.'}),(0,r.jsxs)(t.td,{children:["List",(0,r.jsx)(t.code,{children:"<ObjectInfoReference>"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"attributes"}),(0,r.jsx)(t.td,{children:"limit"}),(0,r.jsx)(t.td,{children:"The number of elements to display. Required for limited_elements with a range of [1, 1000000]."}),(0,r.jsx)(t.td,{children:"integer"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"relationships"}),(0,r.jsx)(t.td,{children:"parent"}),(0,r.jsx)(t.td,{children:"The parent attribute of the relationship."}),(0,r.jsx)(t.td,{children:"ObjectInfoReference"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"relationships"}),(0,r.jsx)(t.td,{children:"child"}),(0,r.jsx)(t.td,{children:"The child attribute of the relationship."}),(0,r.jsx)(t.td,{children:"ObjectInfoReference"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Sample Request Header:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "b4e54r86h5aja3inksrklee4d7"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n"X-MSTR-MS-Changeset": "EB3A4F66E6A8413E9C36633533D0BA31"\n"Content-Type": "application/json"\n'})}),"\n",(0,r.jsx)(t.p,{children:"Sample Request Body:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n    "subType": "dimension_user",\n    "name": "TimeToMonth"\n  },\n  "useAsDrillHierarchy": true,\n  "attributes": [\n    {\n      "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n      "name": "Month",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    },\n    {\n      "objectId": "8D679D4511D3E4981000E787EC6DE8A4",\n      "name": "Month of Year",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    },\n    {\n      "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",\n      "name": "Quarter",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    },\n    {\n      "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n      "name": "Year",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    }\n  ],\n  "relationships": [\n    {\n      "parent": {\n        "objectId": "8D679D4511D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month of Year"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      }\n    },\n    {\n      "parent": {\n        "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Quarter"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      }\n    },\n    {\n      "parent": {\n        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Year"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      }\n    },\n    {\n      "parent": {\n        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Year"\n      },\n      "child": {\n        "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Quarter"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'curl -X PUT "http://10.23.7.118:8080/MicroStrategyLibrary/api/model/hierarchies/B793B55C11D3E4E51000E887EC6DE8A4" -H "accept: application/json" -H "X-MSTR-AuthToken: b4e54r86h5aja3inksrklee4d7" -H "X-MSTR-MS-Changeset: EB3A4F66E6A8413E9C36633533D0BA31" -H "Content-Type: application/json" -d "{\\"information\\":{\\"destinationFolderId\\":\\"8A1831FF494F528D02A4A8BF5FB73459\\",\\"subType\\":\\"dimension_user\\",\\"name\\":\\"TimeToMonth\\"},\\"useAsDrillHierarchy\\":true,\\"attributes\\":[{\\"objectId\\":\\"8D679D4411D3E4981000E787EC6DE8A4\\",\\"name\\":\\"Month\\",\\"entryPoint\\":true,\\"elementDisplayOption\\":\\"all_elements\\"},{\\"objectId\\":\\"8D679D4511D3E4981000E787EC6DE8A4\\",\\"name\\":\\"Month of Year\\",\\"entryPoint\\":true,\\"elementDisplayOption\\":\\"all_elements\\"},{\\"objectId\\":\\"8D679D4A11D3E4981000E787EC6DE8A4\\",\\"name\\":\\"Quarter\\",\\"entryPoint\\":true,\\"elementDisplayOption\\":\\"all_elements\\"},{\\"objectId\\":\\"8D679D5111D3E4981000E787EC6DE8A4\\",\\"name\\":\\"Year\\",\\"entryPoint\\":true,\\"elementDisplayOption\\":\\"all_elements\\"}],\\"relationships\\":[{\\"parent\\":{\\"objectId\\":\\"8D679D4511D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Month of Year\\"},\\"child\\":{\\"objectId\\":\\"8D679D4411D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Month\\"}},{\\"parent\\":{\\"objectId\\":\\"8D679D4A11D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Quarter\\"},\\"child\\":{\\"objectId\\":\\"8D679D4411D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Month\\"}},{\\"parent\\":{\\"objectId\\":\\"8D679D5111D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Year\\"},\\"child\\":{\\"objectId\\":\\"8D679D4411D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Month\\"}},{\\"parent\\":{\\"objectId\\":\\"8D679D5111D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Year\\"},\\"child\\":{\\"objectId\\":\\"8D679D4A11D3E4981000E787EC6DE8A4\\",\\"subType\\":\\"attribute\\",\\"name\\":\\"Quarter\\"}}]}"\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Sample Response Body: You can view the updated user hierarchy's definition in the body of the response. See ",(0,r.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/manage-user-hierarchy-objects/user-hierarchy-import-parameters",children:"User hierarchy import parameters"})," for more information about the import parameters that define the user hierarchy."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2001-01-02T20:47:24.000Z",\n    "dateModified": "2009-06-12T18:43:44.000Z",\n    "versionId": "8951A91F41520C9A19E23CB22CF594B4",\n    "primaryLocale": "en-US",\n    "objectId": "B793B55C11D3E4E51000E887EC6DE8A4",\n    "subType": "dimension_user",\n    "name": "TimeToMonth",\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459"\n  },\n  "useAsDrillHierarchy": true,\n  "attributes": [\n    {\n      "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n      "name": "Month",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    },\n    {\n      "objectId": "8D679D4511D3E4981000E787EC6DE8A4",\n      "name": "Month of Year",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    },\n    {\n      "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",\n      "name": "Quarter",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    },\n    {\n      "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n      "name": "Year",\n      "entryPoint": true,\n      "elementDisplayOption": "all_elements"\n    }\n  ],\n  "relationships": [\n    {\n      "parent": {\n        "objectId": "8D679D4511D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month of Year"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      }\n    },\n    {\n      "parent": {\n        "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Quarter"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      }\n    },\n    {\n      "parent": {\n        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Year"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      }\n    },\n    {\n      "parent": {\n        "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Year"\n      },\n      "child": {\n        "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Quarter"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"Response Code: 200 (The user hierarchy's definition is updated successfully in the changeset.)"})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(96540);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);