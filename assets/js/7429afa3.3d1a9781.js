"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8130],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},798:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),s=["components"],i={title:"Create subscription with prompted content",description:"This workflow sample demonstrates how to create a prompted subscription."},l=void 0,p={unversionedId:"common-workflows/manage-subscriptions/create-subscription-with-prompted-content",id:"common-workflows/manage-subscriptions/create-subscription-with-prompted-content",title:"Create subscription with prompted content",description:"This workflow sample demonstrates how to create a prompted subscription.",source:"@site/docs/common-workflows/manage-subscriptions/create-subscription-with-prompted-content.md",sourceDirName:"common-workflows/manage-subscriptions",slug:"/common-workflows/manage-subscriptions/create-subscription-with-prompted-content",permalink:"/rest-api-docs/common-workflows/manage-subscriptions/create-subscription-with-prompted-content",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-subscriptions/create-subscription-with-prompted-content.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1671571075,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{title:"Create subscription with prompted content",description:"This workflow sample demonstrates how to create a prompted subscription."},sidebar:"tutorialSidebar",previous:{title:"Create subscription for multi content",permalink:"/rest-api-docs/common-workflows/manage-subscriptions/create-subscription-for-multi-content"},next:{title:"Manage datamart objects",permalink:"/rest-api-docs/common-workflows/manage-datamart-objects/"}},u={},c=[{value:"Log in",id:"log-in",level:2},{value:"Get a list of available projects",id:"get-a-list-of-available-projects",level:2},{value:"Create a report instance and answer its prompts",id:"create-a-report-instance-and-answer-its-prompts",level:2},{value:"Get info for user",id:"get-info-for-user",level:2},{value:"Create a user email address",id:"create-a-user-email-address",level:2},{value:"Create a new subscription",id:"create-a-new-subscription",level:2},{value:"Send the specified subscription immediately",id:"send-the-specified-subscription-immediately",level:2},{value:"Delete the subscription",id:"delete-the-subscription",level:2},{value:"Delete the user address",id:"delete-the-user-address",level:2},{value:"Close existing session and logout",id:"close-existing-session-and-logout",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-4fce986e-f37b-4fb8-94ff-b0978d1ef849?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"This workflow sample demonstrates how to create a prompted subscription."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#log-in"},"Log in.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#get-a-list-of-available-projects"},"Get projects.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#create-a-report-instance-and-answer-its-prompts"},"Create a report instance and answer prompts.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#get-info-for-user"},"Get user's ID.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#create-a-user-email-address"},"Create user's email.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#create-a-new-subscription"},"Create subscription.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#send-the-specified-subscription-immediately"},"Send subscription now.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#delete-the-subscription"},"Delete the subscription.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#delete-the-user-address"},"Delete the email.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#close-existing-session-and-logout"},"Logout."))),(0,o.kt)("p",null,"A detailed description of each step of this workflow is listed down below."),(0,o.kt)("h2",{id:"log-in"},"Log in"),(0,o.kt)("p",null,"End Point: ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login")),(0,o.kt)("p",null,"This endpoint allows the caller to authenticate with the MicroStrategy REST Server. You provide the information used to create the session in the body of the request. In this example, you use standard authentication so you need to provide username, password, and loginMode (which specifies the authentication mode to use). If you omit an optional field, the REST Server uses the default value. If the call is successful, the resulting HTTP response returns an HTTP status code 204 and a response header containing ",(0,o.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),", the authorization token that will be used in subsequent requests."),(0,o.kt)("p",null,"Sample Request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Request Headers")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},"'Content-Type: application/json'\n'Accept: application/json'\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Request Body")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "loginMode": 1,\n  "username": "administrator",\n  "password": ""\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Curl")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -i -c ~/cookie-jar.txt --header \'Content-Type: application/json\' --header \'Accept: application/json\' -d \'{ \\\\\n"loginMode":1, \\\\\n"username": "administrator", \\\\\n"password": "" \\\\\n}\' https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/login\n')),(0,o.kt)("p",null,"Sample Response"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Response Headers")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pragma": "no-cache",\n  "x-mstr-authtoken": "{AuthToken}",\n  "cache-control": "no-cache, no-store, max-age=0, must-revalidate",\n  "date": "Wed, 16 Aug 2017 01:42:31 GMT",\n  "expires": "0",\n  "content-type": null\n}\n')),(0,o.kt)("p",null,'The authorization token "',(0,o.kt)("inlineCode",{parentName:"p"},"x-mstr-authtoken"),'" is returned in the response header. It is used in other endpoints to authenticate the user.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Body: Empty")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Code: 204 (Success: No Content)"))),(0,o.kt)("h2",{id:"get-a-list-of-available-projects"},"Get a list of available projects"),(0,o.kt)("p",null,"End Point: ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/projects")),(0,o.kt)("p",null,"This endpoint allows the caller to get the list of projects with the MicroStrategy REST Server. In this example, you get the list of projects in the MicroStrategy Tutorial metadata. You use the authorization token returned during login as the value for ",(0,o.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),". If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a response body containing a list of the active projects that the user session has access to."),(0,o.kt)("p",null,"Sample Request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Headers"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: {AuthToken}'\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Body: Empty")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Curl"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET -b ~/cookie-jar.txt --header 'Accept: application/json' --header 'X-MSTR-AuthToken: {AuthToken}'  https://demo.microstrategy.com/MicroStrategyLibrary/api/projects\n")))),(0,o.kt)("p",null,"Sample Response"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Body"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n    "name": "MicroStrategy Tutorial",\n    "alias": "",\n    "description": "MicroStrategy Tutorial project and application set designed to illustrate the platform\'s rich functionality. The theme is an Electronics, Books, Movies and Music store. Employees, Inventory, Finance, Product Sales and Suppliers are analyzed.",\n    "status": 0\n  },\n  {\n    "id": "AF09B3E3458F78B4FBE4DEB68528BF7B",\n    "name": "Human Resources Analysis Module",\n    "alias": "",\n    "description": "The Human Resources Analysis Module analyses workforce headcount, trends and profiles, employee attrition and recruitment, compensation and benefit costs and employee qualifications, performance and satisfaction.",\n    "status": 0\n  }\n]\n')),(0,o.kt)("p",{parentName:"li"},"The response body contains information for each project that is returned, including the project ID that you will use in later endpoints."))),(0,o.kt)("h2",{id:"create-a-report-instance-and-answer-its-prompts"},"Create a report instance and answer its prompts"),(0,o.kt)("p",null,"This workflow is covered in detail under /Common-Workflows/Manage-Prompt-Objects/Prompt-Types/. We will find a prompted report, instantiate it, and answer its prompts for use in a subscription. We use the Auth Token, obtained from ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login")," along with the project id of the tutorial project obtained from ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/projects")," to search for a report."),(0,o.kt)("p",null,"Find a report: ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/searches/results?name=Actual%20vs.%20Forecast&type=3")," Create report instance: ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/reports/{reportId}/instances")," Get prompts associated with report instance: ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/reports/{reportId}/instances/{instanceId}/prompts")," Get available answers for first prompt: ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/reports/{reportId}/instances/{instanceId}/prompts/{promptKey}/elements")," Get available answers for second prompt: ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/reports/{reportId}/instances/{instanceId}/prompts/{promptKey}/elements")," Answer the prompts: ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/reports/{reportId}/instances")),(0,o.kt)("p",null,"Save the report id and instance id for use with the subscription."),(0,o.kt)("h2",{id:"get-info-for-user"},"Get info for user"),(0,o.kt)("p",null,"End Point: ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/users")),(0,o.kt)("p",null,"This endpoint allows you to retrieve information for a specific set of users. You obtain the authorization token needed to execute the request using ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),"; you pass the authorization token in the request header. You identify the set of users to be returned with query parameters that specify the characters that the user name or abbreviation must begin with. You can use other query parameters to limit the results that are returned by specifying a starting point within the results and the maximum number of results that should be returned. If the call is successful, the resulting HTTP response returns an HTTP status code of 200 and a response body containing all users that meet the query parameters."),(0,o.kt)("p",null,"Sample Request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Headers"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: {AuthToken}'\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Body: Empty")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Curl"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET -b ~/cookie-jar.txt --header 'Accept: application/json'\n--header 'X-MSTR-AuthToken: {AuthToken}' https://demo.microstrategy.com/MicroStrategyLibrary/api/users?nameBegins=MicroStrategy Web User&fields=name,id\n")))),(0,o.kt)("p",null,"Sample Response"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Body"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "",\n    "name": "MicroStrategy Web User"\n  }\n]\n')))),(0,o.kt)("h2",{id:"create-a-user-email-address"},"Create a user email address"),(0,o.kt)("p",null,"End Point: ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/users/{id}/addresses")),(0,o.kt)("p",null,"This endpoint allows you to create a new address for a specific user. You obtain the authorization token needed to execute the request using ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),"; you pass the authorization token in the request header. You identify the user by specifying the user ID in the path of the request. You provide the information used to create the new user address in the body parameter of the request - including the name and actual value for the address, whether it is the default address, and the type of delivery and content style. If the call is successful, the resulting HTTP response returns an HTTP status code of 200 and a response body containing all the information on the newly created address."),(0,o.kt)("p",null,"Sample Request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Headers"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: {AuthToken}'\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Body"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "default_email",\n  "deliveryMode": "EMAIL",\n  "device": "GENERIC_EMAIL",\n  "value": "user@test.email.com",\n  "isDefault": true\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Curl"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -i -t ~/cookie-jar.txt \'https://demo.microstrategy.com/MicroStrategyLibrary/api/users/{userId}/addresses\' \\ --header \'X-MSTR-AuthToken: {AuthToken}\' \\ --header \'Content-Type: application/json\' \\ --data-raw \'{ "name": "default_email", "deliveryMode": "EMAIL", "device": "GENERIC_EMAIL", "value": "user@test.email.com", "isDefault": true }\'\n')))),(0,o.kt)("p",null,"Sample Response"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Body"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "addresses": [\n    {\n      "id": "DE83FC6FBA49338EDF075DA65B46A5A5",\n      "name": "default_email",\n      "deliveryMode": "EMAIL",\n      "deviceId": "1D2E6D168A7711D4BE8100B0D04B6F0B",\n      "value": "user@test.email.com",\n      "isDefault": true\n    },\n    {\n      "id": "DAB285532C1D4659B89C9E224CA8E8E2",\n      "name": "Office Address",\n      "deliveryMode": "EMAIL",\n      "deviceId": "719D165ADFFE4A4D804E93D7A0C6CDE7",\n      "value": "user@yourorganization.com",\n      "isDefault": false\n    },\n    {\n      "id": "593571F4551E437A8D8A9358AB5CD7C4",\n      "name": "Shared Drive",\n      "deliveryMode": "EMAIL",\n      "deviceId": "18F9613B681E4E4FA671D1AED6B7B375",\n      "value": "C:\\\\Program Files\\\\MicroStrategy\\\\Analytics Modules",\n      "isDefault": true\n    }\n  ]\n}\n')))),(0,o.kt)("h2",{id:"create-a-new-subscription"},"Create a new subscription"),(0,o.kt)("p",null,"End Point: ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/subscriptions")),(0,o.kt)("p",null,"This endpoint allows you to create a new subscription for a given project. You obtain the authorization token needed to execute the request using ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),"; you obtain the project ID using ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/projects"),". You provide the information used to create a subscription in the body parameter of the request. If the call is successful, the resulting HTTP response returns an HTTP status code of 201 and a response body containing all the information on the newly created subscription."),(0,o.kt)("p",null,"Sample Request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Headers"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: {AuthToken}'\n'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Body"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Prompt Example Subscription",\n  "editable": true,\n  "allowDeliveryChanges": false,\n  "allowPersonalizationChanges": false,\n  "allowUnsubscribe": false,\n  "schedules": [\n    {\n      "id": "3450AE6F4E29E9A6E1075DA93B7062AA"\n    }\n  ],\n  "contents": [\n    {\n      "id": "{{reportId}}",\n      "type": "report",\n      "personalization": {\n        "compressed": false,\n        "formatMode": "CURRENT_PAGE",\n        "viewMode": "BOTH",\n        "formatType": "HTML",\n        "prompt": {\n          "enabled": true,\n          "instanceId": "{{instanceId}}"\n        }\n      }\n    }\n  ],\n  "recipients": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "type": "user",\n      "includeType": "TO"\n    }\n  ],\n  "delivery": {\n    "mode": "EMAIL",\n    "contactSecurity": false,\n    "email": {\n      "subject": "Actual vs. Forecast Performance",\n      "filename": "Actual vs. Forecast Performance",\n      "sendContentAs": "data",\n      "overwriteOlderVersion": false\n    }\n  }\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Curl"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -i -t ~/cookie-jar.txt \'https://demo.microstrategy.com/MicroStrategyLibrary/api/subscriptions\' \\\n    --header \'X-MSTR-AuthToken: {AuthToken}\' \\\n    --header \'Content-Type: application/json\' \\\n    --data-raw \'{ "name": "Prompt Example Subscription", "editable": true,\n    "allowDeliveryChanges": false, "allowPersonalizationChanges": false,\n    "allowUnsubscribe": false, "schedules": [ { "id":\n    "3450AE6F4E29E9A6E1075DA93B7062AA" } ], "contents": [ { "id": "{{reportId}}",\n    "type": "report", "personalization": { "compressed": false, "formatMode":\n    "CURRENT_PAGE", "viewMode": "BOTH", "formatType": "HTML", "prompt": {\n    "enabled": true, "instanceId": "{{instanceId}}" } }\n\n        }\n    ],\n    "recipients": [\n        {\n            "id": "54F3D26011D2896560009A8E67019608",\n            "type": "user",\n            "includeType":"TO"\n\n        }\n    ],\n    "delivery": {\n        "mode": "EMAIL",\n        "contactSecurity": false,\n        "email": {\n            "subject": "Actual vs. Forecast Performance",\n            "filename": "Actual vs. Forecast Performance",\n            "sendContentAs": "data",\n            "overwriteOlderVersion": false\n        }\n    }\n    }\'\n')),(0,o.kt)("p",null,"Sample Response"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Body"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "06BB2E9E8E4494F124253AA377AECC1E",\n  "multipleContents": false,\n  "name": "Prompt Example Subscription",\n  "editable": true,\n  "allowDeliveryChanges": false,\n  "allowPersonalizationChanges": false,\n  "allowUnsubscribe": false,\n  "dateCreated": "2021-08-03T20:37:31+0000",\n  "dateModified": "2021-08-03T20:37:31+0000",\n  "owner": {\n    "id": "7FC05A65473CE2FD845CE6A1D3F13233",\n    "name": "MSTR User"\n  },\n  "schedules": [\n    {\n      "id": "3450AE6F4E29E9A6E1075DA93B7062AA",\n      "name": "Books Closed",\n      "type": "event_based",\n      "expired": false\n    }\n  ],\n  "contents": [\n    {\n      "id": "9B5802154BB9F7E388B04480F882F6CF",\n      "name": "Actual vs. Forecast Performance",\n      "type": "report",\n      "personalization": {\n        "compressed": false,\n        "formatMode": "CURRENT_PAGE",\n        "viewMode": "BOTH",\n        "formatType": "HTML",\n        "prompt": {\n          "enabled": true\n        }\n      }\n    }\n  ],\n  "recipients": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator",\n      "isGroup": false,\n      "type": "user",\n      "includeType": "TO",\n      "childSubscriptionId": "8C1F55751145A6DEBC36ECA879025BC5"\n    }\n  ],\n  "delivery": {\n    "mode": "EMAIL",\n    "contactSecurity": false,\n    "email": {\n      "subject": "Actual vs. Forecast Performance",\n      "filename": "Actual vs. Forecast Performance",\n      "sendContentAs": "data",\n      "overwriteOlderVersion": false\n    }\n  }\n}\n')))),(0,o.kt)("h2",{id:"send-the-specified-subscription-immediately"},"Send the specified subscription immediately"),(0,o.kt)("p",null,"End Point: ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/subscriptions/{id}/send")),(0,o.kt)("p",null,"This endpoint sends the specified subscription immediately. You obtain the authorization token needed to execute the request using ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),"; you obtain the project ID using ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/projects"),". You identify the subscription by specifying the subscription ID in the request, you provide the information to send the subscription ID in the path parameter of the request. If the content is prompted and the user wants to update the answers, the user can answer the prompts and then provide content id and instance id as the request body of the call. If the call is successful, the resulting HTTP response returns an HTTP status code of 202 and an empty response body."),(0,o.kt)("p",null,"Sample Request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Headers"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},"'X-MSTR-AuthToken: {AuthToken}'\n'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\n'Content-Type: application/json'\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Body"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "contentId": "{reportId}",\n  "instanceId": "{instanceId}"\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Curl"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST -i -t ~/cookie-jar.txt 'https://demo.microstrategy.com/MicroStrategyLibrary/api/subscriptions/{subId}/send' \\ --header 'X-MSTR-AuthToken: {AuthToken}' \\ --header 'Content-Type: application/json' \\ --data-raw ' { \"contentId\": \"{reportId}\", \"instanceId\": \"{instanceId}\" }'\n")))),(0,o.kt)("p",null,"Sample Response"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Body"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "06BB2E9E8E4494F124253AA377AECC1E",\n  "multipleContents": false,\n  "name": "Prompt Example Subscription",\n  "editable": true,\n  "allowDeliveryChanges": false,\n  "allowPersonalizationChanges": false,\n  "allowUnsubscribe": false,\n  "dateCreated": "2021-08-03T20:37:31+0000",\n  "dateModified": "2021-08-03T20:37:31+0000",\n  "owner": {\n    "id": "7FC05A65473CE2FD845CE6A1D3F13233",\n    "name": "MSTR User"\n  },\n  "schedules": [\n    {\n      "id": "3450AE6F4E29E9A6E1075DA93B7062AA",\n      "name": "Books Closed",\n      "type": "event_based",\n      "expired": false\n    }\n  ],\n  "contents": [\n    {\n      "id": "9B5802154BB9F7E388B04480F882F6CF",\n      "name": "Actual vs. Forecast Performance",\n      "type": "report",\n      "personalization": {\n        "compressed": false,\n        "formatMode": "CURRENT_PAGE",\n        "viewMode": "BOTH",\n        "formatType": "HTML",\n        "prompt": {\n          "enabled": true\n        }\n      }\n    }\n  ],\n  "recipients": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator",\n      "isGroup": false,\n      "type": "user",\n      "includeType": "TO",\n      "childSubscriptionId": "8C1F55751145A6DEBC36ECA879025BC5"\n    }\n  ],\n  "delivery": {\n    "mode": "EMAIL",\n    "contactSecurity": false,\n    "email": {\n      "subject": "Actual vs. Forecast Performance",\n      "filename": "Actual vs. Forecast Performance",\n      "sendContentAs": "data",\n      "overwriteOlderVersion": false\n    }\n  }\n}\n')))),(0,o.kt)("h2",{id:"delete-the-subscription"},"Delete the subscription"),(0,o.kt)("p",null,"End Point: ",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE /api/subscriptions/{id}")),(0,o.kt)("p",null,"This endpoint allows you to delete/unsubscribe from the specified subscription. You obtain the authorization token needed to execute the request using ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),"; you obtain the project ID using ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/projects"),". You delete the subscription by specifying the subscription ID in the path of the request. If the call is successful, the resulting HTTP response returns an HTTP status code of 204 and an empty response body."),(0,o.kt)("p",null,"Sample Request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Headers"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},"'X-MSTR-AuthToken: {AuthToken}'\n'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\n'Accept: application/json'\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Body"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},"  No content\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Curl"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X DELETE -i -t ~/cookie-jar.txt 'https://demo.microstrategy.com/MicroStrategyLibrary/api/subscriptions/{subId}' \\ --header 'X-MSTR-AuthToken: {AuthToken}' \\ --header 'Accept: application/json'\n")))),(0,o.kt)("p",null,"Sample Response"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Body"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},"  No content\n")))),(0,o.kt)("h2",{id:"delete-the-user-address"},"Delete the user address"),(0,o.kt)("p",null,"End Point: ",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE /api/users/{userId}/addresses/{addressId}")),(0,o.kt)("p",null,"This endpoint allows you to delete the specified user address. You obtain the authorization token needed to execute the request using ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),"; you obtain the project ID using ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/projects"),". You delete the address by specifying the user ID and address ID in the path of the request. If the call is successful, the resulting HTTP response returns an HTTP status code of 204 and an empty response body."),(0,o.kt)("p",null,"Sample Request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Headers"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},"'X-MSTR-AuthToken: {AuthToken}'\n'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754'\n'Accept: application/json'\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Body"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},"  No content\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Curl"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X DELETE -i -t ~/cookie-jar.txt 'https://demo.microstrategy.com/MicroStrategyLibrary/api/users/{userId}/addresses/{addressId}' \\ --header 'X-MSTR-AuthToken: {AuthToken}' \\ --header 'Accept: application/json'\n")))),(0,o.kt)("p",null,"Sample Response"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Body"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},"  No content\n")))),(0,o.kt)("h2",{id:"close-existing-session-and-logout"},"Close existing session and logout"),(0,o.kt)("p",null,"End Point: ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/logout")),(0,o.kt)("p",null,"This endpoint closes all existing sessions for the authenticated user and logs them out. You obtain the authorization token needed to execute the request using ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),"; you pass the authorization token in the request header. If the call is successful, the resulting HTTP response returns an HTTP status code of 204 and an empty response body and the authorization token is no longer valid."),(0,o.kt)("p",null,"Sample Request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Headers"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},"'X-MSTR-AuthToken: {AuthToken}'\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Body"),(0,o.kt)("p",{parentName:"li"},"No content")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Curl"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request POST 'https://env-260240.customer.cloud.microstrategy.com/MicroStrategyLibrary/api/auth/logout' \\ --header 'Content-Type: application/json' \\ --header 'X-MSTR-AuthToken: {AuthToken}'\n")))),(0,o.kt)("p",null,"Sample Response"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Body"),(0,o.kt)("p",{parentName:"li"},"No content"))))}m.isMDXComponent=!0}}]);