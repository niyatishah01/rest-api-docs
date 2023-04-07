"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6919],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return t?a.createElement(f,i(i({ref:n},d),{},{components:t})):a.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},74662:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var a,r=t(83117),o=t(80102),i=(t(67294),t(3905)),c=["components"],l={title:"Retrieve a calendar's definition",description:"You can use REST APIs to retrieve the definition for a calendar through the Modeling service. This topic includes the following workflows."},s=void 0,d={unversionedId:"common-workflows/modeling/manage-calendar-objects/retrieve-a-calendar-definition",id:"common-workflows/modeling/manage-calendar-objects/retrieve-a-calendar-definition",title:"Retrieve a calendar's definition",description:"You can use REST APIs to retrieve the definition for a calendar through the Modeling service. This topic includes the following workflows.",source:"@site/docs/common-workflows/modeling/manage-calendar-objects/retrieve-a-calendar-definition.md",sourceDirName:"common-workflows/modeling/manage-calendar-objects",slug:"/common-workflows/modeling/manage-calendar-objects/retrieve-a-calendar-definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-calendar-objects/retrieve-a-calendar-definition",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-calendar-objects/retrieve-a-calendar-definition.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1680880277,formattedLastUpdatedAt:"Apr 7, 2023",frontMatter:{title:"Retrieve a calendar's definition",description:"You can use REST APIs to retrieve the definition for a calendar through the Modeling service. This topic includes the following workflows."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a list of calendars' definitions",permalink:"/rest-api-docs/common-workflows/modeling/manage-calendar-objects/retrieve-a-list-of-calendars-definitions"},next:{title:"Create a custom calendar object",permalink:"/rest-api-docs/common-workflows/modeling/manage-calendar-objects/create-a-calendar-object"}},p={},u=[{value:"Retrieve a calendar&#39;s definition",id:"retrieve-a-calendars-definition",level:2},{value:"Retrieve a calendar&#39;s definition within a changset",id:"retrieve-a-calendars-definition-within-a-changset",level:2},{value:"Get the calendar&#39;s definition within a changeset",id:"get-the-calendars-definition-within-a-changeset",level:3}],m=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),f={toc:u};function h(e){var n=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(m,{since:"2021 Update 7",mdxType:"Available"}),(0,i.kt)("p",null,"You can use REST APIs to retrieve the definition for a calendar through the Modeling service. This topic includes the following workflows."),(0,i.kt)("h2",{id:"retrieve-a-calendars-definition"},"Retrieve a calendar's definition"),(0,i.kt)("p",null,"You want to view the definition of a specific custom calendar with the ObjectId of 015FB8D4CF30413DAF120DCDE4C2F85C."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Since calendar objects are configuration objects, you must set the project ID as an empty string.")),(0,i.kt)("p",null,"Get the calendar's definition using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Calendars"},"GET /api/model/calendars/{calendarId}"),"."),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "4lk1khfj9efv7bhav0q68ucn8c"\n"X-MSTR-ProjectID": ""\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'GET' \\\n  'https://env-294821.customer.cloud.microstrategy.com/MicroStrategyLibrary/api/model/calendars/015FB8D4CF30413DAF120DCDE4C2F85C' \\\n  -H 'accept: application/json' \\\n  -H 'X-MSTR-AuthToken: 4lk1khfj9efv7bhav0q68ucn8c'\n")),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,"You can view the calendar's definition in the body of the response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-07-22T04:44:03.000Z",\n    "dateModified": "2022-08-03T06:46:42.019Z",\n    "versionId": "0CA4BAE39B44F1212BD6F8B843E736B6",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "015FB8D4CF30413DAF120DCDE4C2F85C",\n    "subType": "calendar_custom",\n    "name": "new calendar_tjin",\n    "ownerId": "7E7D7CAA4F1F36CAE1DC01B7220EE3C1",\n    "description": "custom calendar",\n    "destinationFolderId": "636200232691438EA7CA6CB26CCDB4EF"\n  },\n  "baseCalendar": {\n    "objectId": "1414DF67F20B4E4F910E418C8DCE7274",\n    "subType": "calendar_system",\n    "name": "Gregorian Calendar"\n  },\n  "tablePrefix": "MSTR_",\n  "calendarBegin": {\n    "staticYear": "2022"\n  },\n  "calendarEnd": {\n    "dynamicYearOffset": 5\n  },\n  "weekStartDay": "Saturday"\n}\n')),(0,i.kt)("p",null,"Response Code: 200 (Upon success, the API returns a full definition of the specified calendar.)"),(0,i.kt)("h2",{id:"retrieve-a-calendars-definition-within-a-changset"},"Retrieve a calendar's definition within a changset"),(0,i.kt)("p",null,"You want to view the definition of a specific custom calendar with the ObjectId of 015FB8D4CF30413DAF120DCDE4C2F85C."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Since calendar objects are configuration objects, you must set the project ID as an empty string.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),". If you plan to use the response of GET /api/model/calendars to create a new calendar or update the custom calendar's definitions, it is recommended to associate all requests to one changeset.")),(0,i.kt)("h3",{id:"get-the-calendars-definition-within-a-changeset"},"Get the calendar's definition within a changeset"),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Calendars"},"GET /api/model/calendars/{calendarId}")),(0,i.kt)("p",null,"Sample Request Header"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "4lk1khfj9efv7bhav0q68ucn8c"\n"X-MSTR-MS-Changeset": "A3F2C7EC43FB44C0BEDEDF63DA039D52"\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'GET' \\\n'https://env-294821.customer.cloud.microstrategy.com/MicroStrategyLibrary/api/model/calendars/015FB8D4CF30413DAF120DCDE4C2F85C' \\\n-H 'accept: application/json' \\\n-H 'X-MSTR-AuthToken: 4lk1khfj9efv7bhav0q68ucn8c' \\\n-H 'X-MSTR-MS-Changeset: A3F2C7EC43FB44C0BEDEDF63DA039D52'\n")),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,"You can view the calendar's definition in the body of the response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-07-22T04:44:03.000Z",\n    "dateModified": "2022-08-03T06:46:42.019Z",\n    "versionId": "0CA4BAE39B44F1212BD6F8B843E736B6",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "015FB8D4CF30413DAF120DCDE4C2F85C",\n    "subType": "calendar_custom",\n    "name": "new calendar_tjin",\n    "ownerId": "7E7D7CAA4F1F36CAE1DC01B7220EE3C1",\n    "description": "custom calendar",\n    "destinationFolderId": "636200232691438EA7CA6CB26CCDB4EF"\n  },\n  "baseCalendar": {\n    "objectId": "1414DF67F20B4E4F910E418C8DCE7274",\n    "subType": "calendar_system",\n    "name": "Gregorian Calendar"\n  },\n  "tablePrefix": "MSTR_",\n  "calendarBegin": {\n    "staticYear": "2022"\n  },\n  "calendarEnd": {\n    "dynamicYearOffset": 5\n  },\n  "weekStartDay": "Saturday"\n}\n')),(0,i.kt)("p",null,"Response Code: 200 (Upon success, the API returns a full definition of the specified calendar.)"))}h.isMDXComponent=!0}}]);