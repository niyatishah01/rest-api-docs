"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[2743],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5818:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],s={title:"Create subscription for multi content",description:"This workflow sample demonstrates how to create email subscriptions with multiple types of content contained within them."},l=void 0,p={unversionedId:"common-workflows/administration/distribution-services/manage-subscriptions/create-subscription-for-multi-content",id:"common-workflows/administration/distribution-services/manage-subscriptions/create-subscription-for-multi-content",title:"Create subscription for multi content",description:"This workflow sample demonstrates how to create email subscriptions with multiple types of content contained within them.",source:"@site/docs/common-workflows/administration/distribution-services/manage-subscriptions/create-subscription-for-multi-content.md",sourceDirName:"common-workflows/administration/distribution-services/manage-subscriptions",slug:"/common-workflows/administration/distribution-services/manage-subscriptions/create-subscription-for-multi-content",permalink:"/rest-api-docs/common-workflows/administration/distribution-services/manage-subscriptions/create-subscription-for-multi-content",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/distribution-services/manage-subscriptions/create-subscription-for-multi-content.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1676479687,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{title:"Create subscription for multi content",description:"This workflow sample demonstrates how to create email subscriptions with multiple types of content contained within them."},sidebar:"tutorialSidebar",previous:{title:"Create and get a subscription",permalink:"/rest-api-docs/common-workflows/administration/distribution-services/manage-subscriptions/create-and-get-a-subscription"},next:{title:"Create subscription with prompted content",permalink:"/rest-api-docs/common-workflows/administration/distribution-services/manage-subscriptions/create-subscription-with-prompted-content"}},c={},u=[{value:"Get a list of available schedules",id:"get-a-list-of-available-schedules",level:2},{value:"Create a user email",id:"create-a-user-email",level:2},{value:"Create a multi-content subscription",id:"create-a-multi-content-subscription",level:2},{value:"Delete the subscription",id:"delete-the-subscription",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-b83f6f30-6232-4e88-9d90-aee4837da5e7?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"This workflow sample demonstrates how to create email subscriptions with multiple types of content contained within them."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#get-a-list-of-available-schedules"},"Get a list of schedules.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#create-a-user-email"},"Create user email.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#create-a-multi-content-subscription"},"Create multi-content subscription.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#delete-the-subscription"},"Delete subscription."))),(0,i.kt)("p",null,"A detailed description of the critical steps in this workflow are listed down below. For a full list of API calls in the workflow, you can look at the workflow in the MicroStrategy POSTMAN collection."),(0,i.kt)("h2",{id:"get-a-list-of-available-schedules"},"Get a list of available schedules"),(0,i.kt)("p",null,"End Point: ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/schedules")),(0,i.kt)("p",null,"This endpoint allows the user to retrieve a list of all schedules that they have access to. This endpoint returns the name, ID, and other information about schedules. You obtain the authorization token needed to execute the request using ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),". You pass the authorization token in the request header. If the call is successful, the resulting HTTP response returns an HTTP status code of 200 and a response body containing all schedules the user has access to."),(0,i.kt)("p",null,"Sample Request"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Headers"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: vciua745frf6tmcnbme77tc8o7'\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Body: None")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Curl"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET -b ~/cookie-jar.txt --header 'Accept: application/json' --header 'X-MSTR-AuthToken: vciua745frf6tmcnbme77tc8o7' https://demo.microstrategy.com/MicroStrategyLibrary/api/schedules\n")))),(0,i.kt)("p",null,"Sample Response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response Body"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schedules": [\n    {\n      "name": "All the Time",\n      "id": "FF7BB3C811D501F0C00051916B98494F",\n      "description": "Starts Friday, January 01, 2010 and ends Sunday, May 30, 2010. The schedule will be triggered every day. 1 hours, 0 minutes",\n      "scheduleType": "time_based",\n      "scheduleNextDelivery": "2021-08-04T14:00:00+0000",\n      "startDate": "2009-12-31",\n      "time": {\n        "recurrencePattern": "daily",\n        "execution": {\n          "executionPattern": "repeat",\n          "startTime": "00:00:00",\n          "stopTime": "23:59:00",\n          "repeatInterval": 60\n        },\n        "daily": {\n          "dailyPattern": "day",\n          "repeatInterval": 1\n        }\n      },\n      "expired": false,\n      "acg": 255\n    }\n  ]\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response Code: 200 (Success)"))),(0,i.kt)("h2",{id:"create-a-user-email"},"Create a user email"),(0,i.kt)("p",null,"End Point: ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/v2/users/{id}/addresses")),(0,i.kt)("p",null,"This endpoint allows you to create a new address for a specific user. You obtain the authorization token needed to execute the request using ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),"; you pass the authorization token in the request header. You identify the user by specifying the user ID in the path of the request; the user ID can be obtained by using ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/users"),". You provide the information used to create the new user address in the body parameter of the request - including the name and actual value for the address, whether it is the default address, and the type of delivery and content style. If the call is successful, the resulting HTTP response returns an HTTP status code of 200 and a response body containing all the information on the newly created address."),(0,i.kt)("p",null,"Sample Request"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Headers"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: vciua745frf6tmcnbme77tc8o7'\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Body"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "default_email",\n  "deliveryMode": "EMAIL",\n  "device": "GENERIC_EMAIL",\n  "value": "google@8.8.8.8",\n  "isDefault": true\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Curl"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -i -c ~/cookie-jar.txt --header \'Accept: application/json\' --header\n\'X-MSTR-AuthToken: vciua745frf6tmcnbme77tc8o7\' -d \'{\n    "name": "default_email",\n    "deliveryMode": "EMAIL",\n    "device": "GENERIC_EMAIL",\n    "value": "google@8.8.8.8",\n    "isDefault": true\n}\' https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/users/C1E141E611D603A2100086B3A5E8F8A4/addresses\n')))),(0,i.kt)("p",null,"Sample Response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response Body"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "addresses": [\n    {\n      "id": "4AC10E164A4F71200E836B8768231559",\n      "name": "default_email",\n      "deliveryMode": "EMAIL",\n      "deviceId": "1D2E6D168A7711D4BE8100B0D04B6F0B",\n      "value": "google@8.8.8.8",\n      "isDefault": true\n    },\n    {\n      "id": "DAB285532C1D4659B89C9E224CA8E8E2",\n      "name": "Office Address",\n      "deliveryMode": "EMAIL",\n      "deviceId": "719D165ADFFE4A4D804E93D7A0C6CDE7",\n      "value": "user@yourorganization.com",\n      "isDefault": false\n    },\n    {\n      "id": "593571F4551E437A8D8A9358AB5CD7C4",\n      "name": "Shared Drive",\n      "deliveryMode": "EMAIL",\n      "deviceId": "18F9613B681E4E4FA671D1AED6B7B375",\n      "value": "C:\\\\Program Files\\\\MicroStrategy\\\\Analytics Modules",\n      "isDefault": true\n    }\n  ]\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response Code: 200 (Success)"))),(0,i.kt)("h2",{id:"create-a-multi-content-subscription"},"Create a multi-content subscription"),(0,i.kt)("p",null,"End Point: ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/subscriptions")),(0,i.kt)("p",null,"This endpoint allows you to create a subscription containing multiple pieces of content. You obtain the authorization token needed to execute the request using ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login")," and you obtain the project ID using ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/projects"),"; you pass these values in the request headers. If the call is successful, the resulting HTTP response returns an HTTP status code of 201 and a response body containing all the information on the newly created multi-content subscription."),(0,i.kt)("p",null,"Sample Request"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Headers"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: vciua745frf6tmcnbme77tc8o7'\n'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Body"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "create_email_subscription_multi_content_reports",\n  "sendNow": true,\n  "multipleContents": true,\n  "schedules": [\n    {\n      "id": "{{schedulesId}}"\n    }\n  ],\n  "contents": [\n    {\n      "id": "C9594161446CBF1137FE4783A51B6B8A",\n      "name": "Category Subcategory Revenue (Report Drill Map)",\n      "type": "report",\n      "personalization": {\n        "compressed": false,\n        "formatMode": "CURRENT_PAGE",\n        "viewMode": "GRID",\n        "formatType": "PLAIN_TEXT",\n        "delimiter": ","\n      }\n    },\n    {\n      "id": "74065ED8403137215C1F01B4EAE7EDF9",\n      "name": "Profit Margin by Region - Drill on Metrics",\n      "type": "report",\n      "personalization": {\n        "compressed": false,\n        "formatMode": "CURRENT_PAGE",\n        "viewMode": "GRID",\n        "formatType": "CSV"\n      }\n    },\n    {\n      "id": "E2DEA25E11D3EAD7C000B4B2D86C964F",\n      "name": "Sales by Age Groups - Drill on custom group",\n      "type": "report",\n      "personalization": {\n        "compressed": true,\n        "formatMode": "CURRENT_PAGE",\n        "viewMode": "BOTH",\n        "formatType": "EXCEL"\n      }\n    },\n    {\n      "id": "BEC722A6406320A3E67DBFBAB2F033CB",\n      "name": "Category Sales Report",\n      "type": "report",\n      "personalization": {\n        "compressed": true,\n        "formatMode": "CURRENT_PAGE",\n        "viewMode": "BOTH",\n        "formatType": "PDF"\n      }\n    },\n    {\n      "id": "3B75A0454B2D5F9D5A76778723777502",\n      "name": "Report Display Options - Alias and Null Values",\n      "type": "report",\n      "personalization": {\n        "compressed": false,\n        "formatMode": "CURRENT_PAGE",\n        "viewMode": "BOTH",\n        "formatType": "HTML"\n      }\n    }\n  ],\n  "recipients": [\n    {\n      "id": "{{userId}}",\n      "type": "user",\n      "includeType": "TO"\n    }\n  ],\n  "delivery": {\n    "mode": "EMAIL",\n    "expiration": "2050-12-01",\n    "contactSecurity": false,\n    "email": {\n      "subject": "create_email_subscription_MultiContent_Reports",\n      "message": "This subscription contains 5 reports delivered in different format. Event_based schedule, no advanced settings, compressed true and false, send content as data, spaceDelimiter is ;",\n      "sendContentAs": "data",\n      "spaceDelimiter": ";",\n      "overwriteOlderVersion": true\n    }\n  }\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Curl"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST -i -c ~/cookie-jar.txt --header 'Accept: application/json' --header 'X-MSTR-AuthToken: vciua745frf6tmcnbme77tc8o7' --header 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' -d '{ ... }' https://demo.microstrategy.com/MicroStrategyLibrary/api/subscriptions\n")))),(0,i.kt)("p",null,"Sample Response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response Body"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "04338C95B7472072FE13E9A8113D7E1A",\n  "multipleContents": true,\n  "name": "create_email_subscription_multi_content_reports",\n  "editable": true,\n  "allowDeliveryChanges": false,\n  "allowPersonalizationChanges": false,\n  "allowUnsubscribe": false,\n  "dateCreated": "2021-08-04T13:20:54+0000",\n  "dateModified": "2021-08-04T13:20:54+0000",\n  "owner": {\n    "id": "7FC05A65473CE2FD845CE6A1D3F13233",\n    "name": "MSTR User"\n  },\n  "schedules": [\n    {\n      "id": "3450AE6F4E29E9A6E1075DA93B7062AA",\n      "name": "Books Closed",\n      "type": "event_based",\n      "expired": false\n    }\n  ],\n  "contents": [\n    {\n      "id": "C9594161446CBF1137FE4783A51B6B8A",\n      "name": "Category Subcategory Revenue (Report Drill Map)",\n      "type": "report",\n      "personalization": {\n        "compressed": false,\n        "formatMode": "CURRENT_PAGE",\n        "viewMode": "GRID",\n        "formatType": "PLAIN_TEXT",\n        "delimiter": ","\n      }\n    },\n    {\n      "id": "74065ED8403137215C1F01B4EAE7EDF9",\n      "name": "Profit Margin by Region - Drill on Metrics",\n      "type": "report",\n      "personalization": {\n        "compressed": false,\n        "formatMode": "CURRENT_PAGE",\n        "viewMode": "GRID",\n        "formatType": "CSV"\n      }\n    },\n    {\n      "id": "E2DEA25E11D3EAD7C000B4B2D86C964F",\n      "name": "Sales by Age Groups - Drill on custom group",\n      "type": "report",\n      "personalization": {\n        "compressed": false,\n        "formatMode": "CURRENT_PAGE",\n        "viewMode": "BOTH",\n        "formatType": "EXCEL"\n      }\n    },\n    {\n      "id": "BEC722A6406320A3E67DBFBAB2F033CB",\n      "name": "Category Sales Report",\n      "type": "report",\n      "personalization": {\n        "compressed": false,\n        "formatMode": "CURRENT_PAGE",\n        "viewMode": "BOTH",\n        "formatType": "PDF"\n      }\n    },\n    {\n      "id": "3B75A0454B2D5F9D5A76778723777502",\n      "name": "Report Display Options - Alias and Null Values",\n      "type": "report",\n      "personalization": {\n        "compressed": false,\n        "formatMode": "CURRENT_PAGE",\n        "viewMode": "BOTH",\n        "formatType": "HTML"\n      }\n    }\n  ],\n  "recipients": [\n    {\n      "id": "C1E141E611D603A2100086B3A5E8F8A4",\n      "name": "MicroStrategy Web User",\n      "isGroup": false,\n      "type": "user",\n      "includeType": "TO",\n      "childSubscriptionId": "254737F84E4D307690BBB480C24BDEEE"\n    }\n  ],\n  "delivery": {\n    "mode": "EMAIL",\n    "expiration": "2050-12-01",\n    "contactSecurity": false,\n    "email": {\n      "subject": "create_email_subscription_MultiContent_Reports",\n      "message": "This subscription contains 5 reports delivered in different format. Event_based schedule, no advanced settings, compressed true and false, send content as data, spaceDelimiter is ;",\n      "sendContentAs": "data",\n      "overwriteOlderVersion": true\n    }\n  }\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response Code: 201 (Created)"))),(0,i.kt)("h2",{id:"delete-the-subscription"},"Delete the subscription"),(0,i.kt)("p",null,"End Point: ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE /api/subscriptions")),(0,i.kt)("p",null,"This endpoint allows you to delete/unsubscribe from the specified subscription. You obtain the authorization token needed to execute the request using ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),", you obtain the project ID using ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/projects"),", and you obtain the subscription ID through ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/subscriptions"),". You delete the subscription by specifying the subscription ID in the path of the request. If the call is successful, the resulting HTTP response returns an HTTP status code of 204 and an empty response body."),(0,i.kt)("p",null,"Sample Request"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Headers"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: vciua745frf6tmcnbme77tc8o7'\n'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Body: None")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Curl"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X DELETE -i -c ~/cookie-jar.txt --header 'Accept: application/json' --header\n'X-MSTR-AuthToken: vciua745frf6tmcnbme77tc8o7' --header 'X-MSTR-ProjectID:\nB7CA92F04B9FAE8D941C3E9B7E0CD754' https://demo.microstrategy.com/MicroStrategyLibrary/api/subscriptions/04338C95B7472072FE13E9A8113D7E1A\n")))),(0,i.kt)("p",null,"Sample Response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response Body: None")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response Code: 204 (No Content)"))))}m.isMDXComponent=!0}}]);