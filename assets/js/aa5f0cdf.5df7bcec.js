"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6233],{39685:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var t=a(74848),o=a(28453);const s={title:"Update a custom calendar object",sidebar_label:"Update a custom calendar object",description:"This workflow sample demonstrates how to update an existing custom calendar object through the Modeling service."},r=void 0,c={id:"common-workflows/modeling/manage-calendar-objects/update-a-calendar-object",title:"Update a custom calendar object",description:"This workflow sample demonstrates how to update an existing custom calendar object through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-calendar-objects/update-a-calendar-object.md",sourceDirName:"common-workflows/modeling/manage-calendar-objects",slug:"/common-workflows/modeling/manage-calendar-objects/update-a-calendar-object",permalink:"/rest-api-docs/common-workflows/modeling/manage-calendar-objects/update-a-calendar-object",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-calendar-objects/update-a-calendar-object.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1714063612,formattedLastUpdatedAt:"Apr 25, 2024",frontMatter:{title:"Update a custom calendar object",sidebar_label:"Update a custom calendar object",description:"This workflow sample demonstrates how to update an existing custom calendar object through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a custom calendar object",permalink:"/rest-api-docs/common-workflows/modeling/manage-calendar-objects/create-a-calendar-object"},next:{title:"Manage consolidation objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-consolidation-objects/"}},d={},i=[{value:"Update an existing custom calendar",id:"update-an-existing-custom-calendar",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Available:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a,{since:"2021 Update 7"}),"\n",(0,t.jsx)(n.p,{children:"This workflow sample demonstrates how to update an existing custom calendar object through the Modeling service."}),"\n",(0,t.jsx)(n.p,{children:"You want to update the existing Custom Calendar with object ID 66FBD8D81F254B63B3C74B599EC7BB47 with the following changes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Modify the weekStartDay to Monday"}),"\n",(0,t.jsx)(n.li,{children:'Rename the calendar to "Chinese Calendar"'}),"\n",(0,t.jsx)(n.li,{children:"Modify the calendarEnd to 20"}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["Obtain the authorization token needed to execute the request using ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,t.jsx)(n.p,{children:"Since calendar objects are configuration objects, you must set the project ID as an empty string."})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,t.jsx)(n.a,{href:"/rest-api-docs/common-workflows/modeling/changesets",children:"Changesets"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"update-an-existing-custom-calendar",children:"Update an existing custom calendar"}),"\n",(0,t.jsxs)(n.p,{children:["Endpoint: ",(0,t.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Calendars",children:"PUT /api/model/calendars/{calendarId}"})]}),"\n",(0,t.jsx)(n.p,{children:"System calendars cannot be updated through API."}),"\n",(0,t.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "qr56qbrjb59oq5m193v8avjsdv"\n"X-MSTR-MS-Changeset": "46FB9631EB134C9F992BC2F9E92DDC50"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "name": "Chinese Calendar",\n    "subType": "calendar_custom"\n  },\n  "baseCalendar": {\n    "objectId": "1414DF67F20B4E4F910E418C8DCE7274",\n    "subType": "calendar_system"\n  },\n  "tablePrefix": "MSTR_",\n  "calendarBegin": {\n    "staticYear": "2022"\n  },\n  "calendarEnd": {\n    "dynamicYearOffset": 20\n  },\n  "weekStartDay": "Monday"\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Sample Curl:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X \'PUT\' \\\n  \'https://env-294821.customer.cloud.microstrategy.com/MicroStrategyLibrary/api/model/calendars/015FB8D4CF30413DAF120DCDE4C2F85C\' \\\n  -H \'accept: application/json\' \\\n  -H \'X-MSTR-AuthToken: qr56qbrjb59oq5m193v8avjsdv\' \\\n  -H \'X-MSTR-MS-Changeset: 46FB9631EB134C9F992BC2F9E92DDC50\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "information": {\n    "name": "Chinese Calendar",\n    "subType": "calendar_custom"\n  },\n  "baseCalendar": {\n    "objectId": "1414DF67F20B4E4F910E418C8DCE7274",\n    "subType": "calendar_system"\n  },\n  "tablePrefix": "MSTR_",\n  "calendarBegin": {\n    "staticYear": "2022"\n  },\n  "calendarEnd": {\n    "dynamicYearOffset": 20\n  },\n  "weekStartDay": "Monday"\n}\'\n'})}),"\n",(0,t.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,t.jsx)(n.p,{children:"You can view the new calendar's definition in the body of the response."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "information": {\n    "dateCreated": "2022-07-22T04:44:03.000Z",\n    "dateModified": "2022-08-03T06:46:42.019Z",\n    "versionId": "0CA4BAE39B44F1212BD6F8B843E736B6",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "015FB8D4CF30413DAF120DCDE4C2F85C",\n    "subType": "calendar_custom",\n    "name": "Chinese Calendar",\n    "ownerId": "7E7D7CAA4F1F36CAE1DC01B7220EE3C1",\n    "description": "custom calendar",\n    "destinationFolderId": "636200232691438EA7CA6CB26CCDB4EF"\n  },\n  "baseCalendar": {\n    "objectId": "1414DF67F20B4E4F910E418C8DCE7274",\n    "subType": "calendar_system",\n    "name": "Gregorian Calendar"\n  },\n  "tablePrefix": "MSTR_",\n  "calendarBegin": {\n    "staticYear": "2022"\n  },\n  "calendarEnd": {\n    "dynamicYearOffset": 20\n  },\n  "weekStartDay": "Monday"\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Response Code: 200 (Calendar is successfully updated in the changeset.)"}),"\n",(0,t.jsx)(n.p,{children:"The following fields of a custom calendar could be updated using PUT API."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"information.name"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"baseCalendar.objectId"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"tablePrefix"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"calendarBegin"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"calendarEnd"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"weekStartDay"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>c});var t=a(96540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);