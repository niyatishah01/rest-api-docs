"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6893],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(t),u=r,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||i;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8856:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var a,r=t(3117),i=t(102),o=(t(7294),t(3905)),l=["components"],s={title:"Retrieve a list of calendars' definitions",description:"You can use REST APIs to retrieve definitions for a list of available calendars through the Modeling service. This topic includes the following workflows."},d=void 0,c={unversionedId:"common-workflows/modeling/manage-calendar-objects/retrieve-a-list-of-calendars-definitions",id:"common-workflows/modeling/manage-calendar-objects/retrieve-a-list-of-calendars-definitions",title:"Retrieve a list of calendars' definitions",description:"You can use REST APIs to retrieve definitions for a list of available calendars through the Modeling service. This topic includes the following workflows.",source:"@site/docs/common-workflows/modeling/manage-calendar-objects/retrieve-a-list-of-calendars-definitions.md",sourceDirName:"common-workflows/modeling/manage-calendar-objects",slug:"/common-workflows/modeling/manage-calendar-objects/retrieve-a-list-of-calendars-definitions",permalink:"/rest-api-docs/common-workflows/modeling/manage-calendar-objects/retrieve-a-list-of-calendars-definitions",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-calendar-objects/retrieve-a-list-of-calendars-definitions.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1677268684,formattedLastUpdatedAt:"Feb 24, 2023",frontMatter:{title:"Retrieve a list of calendars' definitions",description:"You can use REST APIs to retrieve definitions for a list of available calendars through the Modeling service. This topic includes the following workflows."},sidebar:"tutorialSidebar",previous:{title:"Manage calendar objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-calendar-objects/"},next:{title:"Retrieve a calendar's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-calendar-objects/retrieve-a-calendar-definition"}},p={},m=[{value:"1. Retrieve a list of calendars&#39; definitions",id:"1-retrieve-a-list-of-calendars-definitions",level:2},{value:"2. Retrieve a list of calendars&#39; definitions within a changeset",id:"2-retrieve-a-list-of-calendars-definitions-within-a-changeset",level:2},{value:"Get the calendars&#39; definitions within a changeset",id:"get-the-calendars-definitions-within-a-changeset",level:3},{value:"3. Retrieve a list of calendars&#39; definitions with a specified SubType",id:"3-retrieve-a-list-of-calendars-definitions-with-a-specified-subtype",level:2}],u=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),f={toc:m};function h(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(u,{since:"2021 Update 7",mdxType:"Available"}),(0,o.kt)("p",null,"You can use REST APIs to retrieve definitions for a list of available calendars through the Modeling service. This topic includes the following workflows."),(0,o.kt)("h2",{id:"1-retrieve-a-list-of-calendars-definitions"},"1. Retrieve a list of calendars' definitions"),(0,o.kt)("p",null,"You want to get the definitions of all available calendars in the configuration project."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Since calendar objects are configuration objects, you must set the project ID as an empty string.")),(0,o.kt)("p",null,"Get the calendars' definitions within a changeset using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Calendars"},"GET /api/model/calendars"),"."),(0,o.kt)("p",null,"The response can change based on the request parameters provided by the caller. Use the following request parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"information.subType")),(0,o.kt)("td",{parentName:"tr",align:null},"The subType of calendars If it is ",(0,o.kt)("inlineCode",{parentName:"td"},"calendar_custom"),", it would return the list of all the custom calendars. If it is ",(0,o.kt)("inlineCode",{parentName:"td"},"calendar_system"),", it would return the list of all the system calendars.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"limit")),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum number of objects that can be returned by this method. If this property is not provided, all available objects are returned.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"offset")),(0,o.kt)("td",{parentName:"tr",align:null},"Use this parameter to page through large result lists. Setting it to 0 (or not providing the parameter) starts at the beginning of the object list.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"fields")),(0,o.kt)("td",{parentName:"tr",align:null},"A whitelist of top-level fields separated by commas. This parameter allows the client to selectively retrieve fields in the response")))),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "p1r57o8160jqo6f9pgbbkblh0i"\n"X-MSTR-ProjectID": ""\n')),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'GET' \\\n  'https://env-294821.customer.cloud.microstrategy.com/MicroStrategyLibrary/api/model/calendars?limit=2&offset=1' \\\n  -H 'accept: application/json' \\\n  -H 'X-MSTR-AuthToken: p1r57o8160jqo6f9pgbbkblh0i'\n")),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,"You can view the calendars' definitions in the body of the response. In this sample, two system calendars are returned."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "offset": 1,\n  "limit": 2,\n  "total": 1457,\n  "calendars": [\n    {\n      "information": {\n        "dateCreated": "2022-07-15T10:58:05.000Z",\n        "dateModified": "2022-07-15T10:58:05.000Z",\n        "versionId": "10D9CB67416792BDF417079964A3F582",\n        "acg": 255,\n        "primaryLocale": "en-US",\n        "objectId": "2AD679C54C569506AADE6596A1A479ED",\n        "subType": "calendar_system",\n        "name": "system-calendar-3",\n        "ownerId": "54F3D26011D2896560009A8E67019608",\n        "description": "Gregorian Calendar"\n      },\n      "tablePrefix": "",\n      "calendarBegin": {\n        "staticYear": "1899"\n      },\n      "calendarEnd": {\n        "staticYear": "1899"\n      },\n      "weekStartDay": "Sunday"\n    },\n    {\n      "information": {\n        "dateCreated": "2022-07-15T10:58:05.000Z",\n        "dateModified": "2022-07-15T10:58:05.000Z",\n        "versionId": "10D9CB67416792BDF417079964A3F582",\n        "acg": 255,\n        "primaryLocale": "en-US",\n        "objectId": "60982033470322BFF023B188C7DE4E30",\n        "subType": "calendar_system",\n        "name": "system-calendar-2",\n        "ownerId": "54F3D26011D2896560009A8E67019608",\n        "description": "Gregorian Calendar"\n      },\n      "tablePrefix": "",\n      "calendarBegin": {\n        "staticYear": "1899"\n      },\n      "calendarEnd": {\n        "staticYear": "1899"\n      },\n      "weekStartDay": "Sunday"\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Response Code: 200 (calendars' definitions are returned successfully.)"),(0,o.kt)("h2",{id:"2-retrieve-a-list-of-calendars-definitions-within-a-changeset"},"2. Retrieve a list of calendars' definitions within a changeset"),(0,o.kt)("p",null,"You want the definitions of all available calendars in the configuration project."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Since calendar objects are configuration objects, you must set the project ID as an empty string.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),". If you plan to use the response of GET /api/model/calendars to create a new calendar or update the calendars' definitions, it is recommended to associate all requests to one changeset.")),(0,o.kt)("h3",{id:"get-the-calendars-definitions-within-a-changeset"},"Get the calendars' definitions within a changeset"),(0,o.kt)("p",null,"Endpoint: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Calendars/ms-getCalendars"},"GET /api/model/calendars")),(0,o.kt)("p",null,"Sample Request Header"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-MS-Changeset": "2A131744C91B4915B54A61FFDC528F62"\n')),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'GET' \\\n'https://env-294821.customer.cloud.microstrategy.com/MicroStrategyLibrary/api/model/calendars?limit=3' \\\n-H 'accept: application/json' \\\n-H 'X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl' \\\n-H 'X-MSTR-MS-Changeset: 2A131744C91B4915B54A61FFDC528F62'\n")),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,"You can view the calendars' definitions in the body of the response. In this sample, three system calendars are returned."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "offset": 0,\n  "limit": 3,\n  "total": 1457,\n  "calendars": [\n    {\n      "information": {\n        "dateCreated": "2022-07-15T10:58:05.000Z",\n        "dateModified": "2022-07-15T10:58:05.000Z",\n        "versionId": "10D9CB67416792BDF417079964A3F582",\n        "acg": 255,\n        "primaryLocale": "en-US",\n        "objectId": "1414DF67F20B4E4F910E418C8DCE7274",\n        "subType": "calendar_system",\n        "name": "Gregorian Calendar",\n        "ownerId": "54F3D26011D2896560009A8E67019608",\n        "description": "Gregorian Calendar"\n      },\n      "tablePrefix": "",\n      "calendarBegin": {\n        "staticYear": "1899"\n      },\n      "calendarEnd": {\n        "staticYear": "1899"\n      },\n      "weekStartDay": "Sunday"\n    },\n    {\n      "information": {\n        "dateCreated": "2022-07-15T10:58:05.000Z",\n        "dateModified": "2022-07-15T10:58:05.000Z",\n        "versionId": "10D9CB67416792BDF417079964A3F582",\n        "acg": 255,\n        "primaryLocale": "en-US",\n        "objectId": "2AD679C54C569506AADE6596A1A479ED",\n        "subType": "calendar_system",\n        "name": "system-calendar-3",\n        "ownerId": "54F3D26011D2896560009A8E67019608",\n        "description": "Gregorian Calendar"\n      },\n      "tablePrefix": "",\n      "calendarBegin": {\n        "staticYear": "1899"\n      },\n      "calendarEnd": {\n        "staticYear": "1899"\n      },\n      "weekStartDay": "Sunday"\n    },\n    {\n      "information": {\n        "dateCreated": "2022-07-15T10:58:05.000Z",\n        "dateModified": "2022-07-15T10:58:05.000Z",\n        "versionId": "10D9CB67416792BDF417079964A3F582",\n        "acg": 255,\n        "primaryLocale": "en-US",\n        "objectId": "60982033470322BFF023B188C7DE4E30",\n        "subType": "calendar_system",\n        "name": "system-calendar-2",\n        "ownerId": "54F3D26011D2896560009A8E67019608",\n        "description": "Gregorian Calendar"\n      },\n      "tablePrefix": "",\n      "calendarBegin": {\n        "staticYear": "1899"\n      },\n      "calendarEnd": {\n        "staticYear": "1899"\n      },\n      "weekStartDay": "Sunday"\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Response Code: 200 (calendars' definitions are returned successfully)"),(0,o.kt)("h2",{id:"3-retrieve-a-list-of-calendars-definitions-with-a-specified-subtype"},"3. Retrieve a list of calendars' definitions with a specified SubType"),(0,o.kt)("p",null,"You want to enable the ",(0,o.kt)("inlineCode",{parentName:"p"},"information.subType")," parameter to retrieve only system calendars or custom calendars."),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"information.subType")," parameter is not specified, the API will return all available calendars."),(0,o.kt)("p",null,"Get the calendars' definitions using ",(0,o.kt)("inlineCode",{parentName:"p"},"information.subType=calendar_custom"),"."),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'GET' \\\n  'https://env-294821.customer.cloud.microstrategy.com/MicroStrategyLibrary/api/model/calendars?information.subType=calendar_custom&limit=3' \\\n  -H 'accept: application/json' \\\n  -H 'X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl'\n")),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,"Three custom calendars are returned."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "offset": 0,\n  "limit": 3,\n  "total": 1453,\n  "calendars": [\n    {\n      "information": {\n        "dateCreated": "2022-07-22T02:21:04.000Z",\n        "dateModified": "2022-07-27T01:52:18.000Z",\n        "versionId": "8D045DA17F44C5F21C096F9C3F59AA86",\n        "acg": 255,\n        "primaryLocale": "en-US",\n        "objectId": "0006DE423B014DD58EF78FC8A4B29AF6",\n        "subType": "calendar_custom",\n        "name": "be7a4691-0d4e-11ed-9c0e-005056980365",\n        "ownerId": "7E7D7CAA4F1F36CAE1DC01B7220EE3C1",\n        "description": "custom calendar"\n      },\n      "baseCalendar": {\n        "objectId": "65FEF83B427D10404A6549B313619557",\n        "subType": "calendar_system",\n        "name": "system-calendar-1"\n      },\n      "tablePrefix": "be7a4692-0d4e-11ed-9c90-005056980365",\n      "calendarBegin": {\n        "staticYear": "26476"\n      },\n      "calendarEnd": {\n        "staticYear": "58649"\n      },\n      "weekStartDay": "Friday"\n    },\n    {\n      "information": {\n        "dateCreated": "2022-07-21T17:43:31.000Z",\n        "dateModified": "2022-07-26T14:26:49.000Z",\n        "versionId": "2ABA084BAB4CAB168AD587BB3AD3212D",\n        "acg": 255,\n        "primaryLocale": "en-US",\n        "objectId": "00080C7766F549409A2CC8C413EE29E2",\n        "subType": "calendar_custom",\n        "name": "fc021949-0cee-11ed-872f-005056980365",\n        "ownerId": "7E7D7CAA4F1F36CAE1DC01B7220EE3C1",\n        "description": "custom calendar"\n      },\n      "baseCalendar": {\n        "objectId": "2AD679C54C569506AADE6596A1A479ED",\n        "subType": "calendar_system",\n        "name": "system-calendar-3"\n      },\n      "tablePrefix": "fc02194a-0cee-11ed-81fa-005056980365",\n      "calendarBegin": {\n        "staticYear": "16446"\n      },\n      "calendarEnd": {\n        "staticYear": "45925"\n      },\n      "weekStartDay": "Monday"\n    },\n    {\n      "information": {\n        "dateCreated": "2022-07-21T09:00:54.000Z",\n        "dateModified": "2022-07-27T01:50:17.000Z",\n        "versionId": "B7E60128654AA6C3539E1198FCF1B085",\n        "acg": 255,\n        "primaryLocale": "en-US",\n        "objectId": "000C965A2ED4419986F2C59F456122CE",\n        "subType": "calendar_custom",\n        "name": "7652a9bd-0d4e-11ed-94ae-005056980365",\n        "ownerId": "7E7D7CAA4F1F36CAE1DC01B7220EE3C1",\n        "description": "custom calendar"\n      },\n      "baseCalendar": {\n        "objectId": "1414DF67F20B4E4F910E418C8DCE7274",\n        "subType": "calendar_system",\n        "name": "Gregorian Calendar"\n      },\n      "tablePrefix": "7652a9be-0d4e-11ed-ae09-005056980365",\n      "calendarBegin": {\n        "dynamicYearOffset": 456\n      },\n      "calendarEnd": {\n        "dynamicYearOffset": 602\n      },\n      "weekStartDay": "Thursday"\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Sample Response Code: 200 (calendars' definitions are returned successfully.)"))}h.isMDXComponent=!0}}]);