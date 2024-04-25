"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[7527],{58933:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=t(74848),i=t(28453);const r={title:"Manage project settings",description:"A high-level workflow sample for managing project settings is shown below. The sequence of REST API requests in the following procedure allows an administrative user to manage the project settings."},o=void 0,a={id:"common-workflows/analytics/project-management/manage-project-settings",title:"Manage project settings",description:"A high-level workflow sample for managing project settings is shown below. The sequence of REST API requests in the following procedure allows an administrative user to manage the project settings.",source:"@site/docs/common-workflows/analytics/project-management/manage-project-settings.md",sourceDirName:"common-workflows/analytics/project-management",slug:"/common-workflows/analytics/project-management/manage-project-settings",permalink:"/rest-api-docs/common-workflows/analytics/project-management/manage-project-settings",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/project-management/manage-project-settings.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1714063612,formattedLastUpdatedAt:"Apr 25, 2024",frontMatter:{title:"Manage project settings",description:"A high-level workflow sample for managing project settings is shown below. The sequence of REST API requests in the following procedure allows an administrative user to manage the project settings."},sidebar:"tutorialSidebar",previous:{title:"Manage project load settings on Intelligence Server startup",permalink:"/rest-api-docs/common-workflows/analytics/project-management/manage-project-load-settings-on-server-startup"},next:{title:"Manage project advanced properties",permalink:"/rest-api-docs/common-workflows/analytics/project-management/project-advanced-properties-management/"}},l={},c=[{value:"Log in",id:"log-in",level:2},{value:"Sample request",id:"sample-request",level:3},{value:"Sample response",id:"sample-response",level:3},{value:"Get the project setting configurations",id:"get-the-project-setting-configurations",level:2},{value:"Sample request",id:"sample-request-1",level:3},{value:"Sample response",id:"sample-response-1",level:3},{value:"Get the setting values for a specific project",id:"get-the-setting-values-for-a-specific-project",level:2},{value:"Sample request",id:"sample-request-2",level:3},{value:"Sample response",id:"sample-response-2",level:3},{value:"Update a part of the setting values for a specific project",id:"update-a-part-of-the-setting-values-for-a-specific-project",level:2},{value:"Sample request",id:"sample-request-3",level:3},{value:"Sample response",id:"sample-response-3",level:3},{value:"Update all project setting values",id:"update-all-project-setting-values",level:2},{value:"Sample request",id:"sample-request-4",level:3},{value:"Sample response",id:"sample-response-4",level:3},{value:"Log out",id:"log-out",level:2},{value:"Sample request",id:"sample-request-5",level:3},{value:"Sample response",id:"sample-response-5",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{Available:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{since:"2021"}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["You can try out this workflow at ",(0,s.jsx)(n.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-d30bab86-7c75-4b05-88d2-35ca2091e983?ctx=documentation",children:"REST API Playground"}),"."]}),(0,s.jsxs)(n.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,s.jsx)(n.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,s.jsx)(n.p,{children:"A high-level workflow sample for managing project settings is shown below. The sequence of REST API requests in the following procedure allows an administrative user to manage the project settings."}),"\n",(0,s.jsx)(n.h2,{id:"log-in",children:"Log in"}),"\n",(0,s.jsxs)(n.p,{children:["Endpoint: ",(0,s.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"})]}),"\n",(0,s.jsx)(n.p,{children:"This endpoint allows the user to authenticate with the MicroStrategy REST Server. You can provide the information used to create the session in the body of the request. In this example, you can use standard authentication, so you need to provide the username and password. If the call is successful, the resulting response returns a status code of 204 and a response header containing X-MSTR-AuthToken. This authorization token is used by all subsequent requests."}),"\n",(0,s.jsx)(n.p,{children:"In the following example, standard authentication uses a username of administrator and a blank password."}),"\n",(0,s.jsx)(n.h3,{id:"sample-request",children:"Sample request"}),"\n",(0,s.jsx)(n.p,{children:"Request Body:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "username": "administrator",\n  "password": "yourPassword"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Curl:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/login" -H "accept: application/json" -H "Content-Type: application/json" -d "{\\\\"username\\\\":\\\\"administrator\\\\",\\\\"password\\\\":\\\\"yourPassword\\\\"}"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sample-response",children:"Sample response"}),"\n",(0,s.jsx)(n.p,{children:"Response Header:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-http",children:"cache-control: no-cache, no-store, max-age=0, must-revalidate\ndate: Mon, 28 Oct 2019 17:38:15 GMT\nexpires: 0\npragma: no-cache\nx-mstr-authtoken: f34qc7evsntsks0qe6hfcgt0ur\n"})}),"\n",(0,s.jsx)(n.p,{children:"Response Code: 204 (Success: No Content)"}),"\n",(0,s.jsx)(n.h2,{id:"get-the-project-setting-configurations",children:"Get the project setting configurations"}),"\n",(0,s.jsxs)(n.p,{children:["Endpoint: ",(0,s.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getServerSettingProperties",children:"GET /api/v2/projects/{projectId}/settings/config"})]}),"\n",(0,s.jsxs)(n.p,{children:["This endpoint allows the user to retrieve information on all project settings that are available in MicroStrategy REST API. The information includes the setting description, type, options, unit, minimum value, maximum value, and reboot rule. You must specify an authorization token in the request header, which can be obtained from ",(0,s.jsx)(n.code,{children:"POST /api/auth/login"})," during ",(0,s.jsx)(n.a,{href:"#log-in",children:"login"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"This operation requires the Web User privilege."})}),"\n",(0,s.jsx)(n.h3,{id:"sample-request-1",children:"Sample request"}),"\n",(0,s.jsx)(n.p,{children:"Request Parameter:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"X-MSTR-AuthToken"})}),"\n",(0,s.jsxs)(n.p,{children:["The authorization token generated by ",(0,s.jsx)(n.code,{children:"POST /api/auth/login."})]}),"\n",(0,s.jsx)(n.p,{children:"Curl:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/projects/{projectId}/settings/config" -H "accept: application/json" -H "X-MSTR-AuthToken: hhl9cvevf3gqcvjadojen0p45j"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sample-response-1",children:"Sample response"}),"\n",(0,s.jsx)(n.p,{children:"Response Body:"}),"\n",(0,s.jsx)(n.p,{children:"The following sample is part of the complete response body."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "maxReportResultRowCount": {\n    "description": "Maximum report result rows",\n    "type": "number",\n    "max_value": 999999999,\n    "min_value": 0,\n    "options": [\n      {\n        "name": "No Limit",\n        "value": -1\n      }\n    ]\n  },\n  "maxReportExecutionTime": {\n    "description": "Maximum report execution time for interactive reports (sec)",\n    "type": "number",\n    "max_value": 999999,\n    "min_value": 0,\n    "options": [\n      {\n        "name": "No Limit",\n        "value": -1\n      }\n    ]\n  },\n  "maxJobPerUserAccount": {\n    "description": "Maximum jobs per user account",\n    "type": "number",\n    "max_value": 999999,\n    "min_value": 0,\n    "options": [\n      {\n        "name": "No Limit",\n        "value": -1\n      }\n    ]\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Response Code: 200 (Success: OK)"}),"\n",(0,s.jsx)(n.h2,{id:"get-the-setting-values-for-a-specific-project",children:"Get the setting values for a specific project"}),"\n",(0,s.jsxs)(n.p,{children:["Endpoint: ",(0,s.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getServerSettings_3",children:"GET /api/v2/projects/{projectId}/settings"})]}),"\n",(0,s.jsxs)(n.p,{children:["This endpoint allows you to retrieve all project setting values that are available in MicroStrategy REST API. You must specify an authorization token in the request header, which can be obtained from ",(0,s.jsx)(n.code,{children:"POST /api/auth/login"})," during ",(0,s.jsx)(n.a,{href:"#log-in",children:"login"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"This operation requires the Web User privilege."})}),"\n",(0,s.jsx)(n.h3,{id:"sample-request-2",children:"Sample request"}),"\n",(0,s.jsx)(n.p,{children:"Request Parameter:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"X-MSTR-AuthToken"})}),"\n",(0,s.jsxs)(n.p,{children:["The authorization token generated by ",(0,s.jsx)(n.code,{children:"POST /api/auth/login."})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"projectId"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ID"})," of the project."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Curl:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/projects/{projectId}/settings" -H "accept: application/json" -H "X-MSTR-AuthToken: ks6ehab41hkleoj03qvamq3bk4"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sample-response-2",children:"Sample response"}),"\n",(0,s.jsx)(n.p,{children:"Response Body:"}),"\n",(0,s.jsx)(n.p,{children:"The following sample is part of the complete response body."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "enableDeleteObjectDependencies": {\n    "value": false\n  },\n  "appendInfoForEmailDelivery": {\n    "value": [\n      "recipient_name",\n      "owner_name",\n      "report_document_name",\n      "project_name",\n      "delivery_method",\n      "schedule",\n      "subscription_name",\n      "delivery_status",\n      "date",\n      "time",\n      "email_address",\n      "error_message"\n    ]\n  },\n  "cacheEncryptionLevel": {\n    "value": 0\n  },\n  "maxEmailSubscriptionCount": {\n    "value": -1\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Response Code: 200 (Success: OK)"}),"\n",(0,s.jsx)(n.h2,{id:"update-a-part-of-the-setting-values-for-a-specific-project",children:"Update a part of the setting values for a specific project"}),"\n",(0,s.jsxs)(n.p,{children:["Endpoint: ",(0,s.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/setServerSettings_2",children:"PATCH /api/v2/projects/{projectId}/settings"})]}),"\n",(0,s.jsxs)(n.p,{children:["This endpoint allows you to modify part of the project settings exposed in REST API via ",(0,s.jsx)(n.code,{children:"GET /api/v2/projects/{projectId}/settings/config"}),". You must specify an authorization token in the request header, which can be obtained from ",(0,s.jsx)(n.code,{children:"POST /api/auth/login"})," during ",(0,s.jsx)(n.a,{href:"#log-in",children:"login"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Depending on the setting you are modifying, the response body will tell you which privilege is required for the operation."})}),"\n",(0,s.jsx)(n.h3,{id:"sample-request-3",children:"Sample request"}),"\n",(0,s.jsx)(n.p,{children:"Request Parameter:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"X-MSTR-AuthToken"})}),"\n",(0,s.jsxs)(n.p,{children:["The authorization token generated by ",(0,s.jsx)(n.code,{children:"POST /api/auth/login"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"projectId"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ID"})," of the project."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Request Body:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "enableDeleteObjectDependencies": {\n    "value": true\n  },\n  "cacheEncryptionLevel": {\n    "value": 1\n  },\n  "maxEmailSubscriptionCount": {\n    "value": 200\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Curl:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X PATCH "https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/projects/{projectId}/settings" -H "accept: application/json" -H "X-MSTR-AuthToken: b3q75vgt84er8ektbvhbpt9qoh" -H "Content-Type: application/json" -d "{\\\\"enableDeleteObjectDependencies\\\\":{\\\\"value\\\\":true},\\\\"cacheEncryptionLevel\\\\":{\\\\"value\\\\":1},\\\\"maxEmailSubscriptionCount\\\\":{\\\\"value\\\\":200}}"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sample-response-3",children:"Sample response"}),"\n",(0,s.jsx)(n.p,{children:"Response Body:"}),"\n",(0,s.jsx)(n.p,{children:"The following sample is part of the complete response body. A complete list of project setting values with the modified values should be returned."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "enableDeleteObjectDependencies": {\n    "value": true\n  },\n  "appendInfoForEmailDelivery": {\n    "value": [\n      "recipient_name",\n      "owner_name",\n      "report_document_name",\n      "project_name",\n      "delivery_method",\n      "schedule",\n      "subscription_name",\n      "delivery_status",\n      "date",\n      "time",\n      "email_address",\n      "error_message"\n    ]\n  },\n  "cacheEncryptionLevel": {\n    "value": 1\n  },\n  "maxEmailSubscriptionCount": {\n    "value": 200\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Response Code: 200 (Success: OK)"}),"\n",(0,s.jsx)(n.h2,{id:"update-all-project-setting-values",children:"Update all project setting values"}),"\n",(0,s.jsxs)(n.p,{children:["Endpoint: ",(0,s.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/setAllServerSettings",children:"PUT /api/v2/projects/{projectId}/settings"})]}),"\n",(0,s.jsxs)(n.p,{children:["This endpoint allows you to access all of the setting values that are available in MicroStrategy REST API. In this endpoint, you must provide a complete list of project settings, which is the different from the ",(0,s.jsx)(n.code,{children:"PATCH /api/v2/projects/{projectId}/settings"})," endpoint. You can find a list of project settings exposed in REST API via ",(0,s.jsx)(n.code,{children:"GET /api/v2/projects/{projectId}/settings/config"}),". You must specify an authorization token in the request header, which can be obtained from ",(0,s.jsx)(n.code,{children:"POST /api/auth/login"})," during ",(0,s.jsx)(n.a,{href:"#log-in",children:"login"}),"."]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"This operation requires the following privileges:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Web User"}),"\n",(0,s.jsx)(n.li,{children:"Configure Server Basic"}),"\n",(0,s.jsx)(n.li,{children:"Configure Caches"}),"\n",(0,s.jsx)(n.li,{children:"Configure Subscription Setting"}),"\n",(0,s.jsx)(n.li,{children:"Configure Governing"}),"\n",(0,s.jsx)(n.li,{children:"Configure Project Basic"}),"\n",(0,s.jsx)(n.li,{children:"Configure Statistics"}),"\n",(0,s.jsx)(n.li,{children:"Configure History Lists"}),"\n"]})]}),"\n",(0,s.jsx)(n.h3,{id:"sample-request-4",children:"Sample request"}),"\n",(0,s.jsx)(n.p,{children:"Request Parameter:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"X-MSTR-AuthToken"})}),"\n",(0,s.jsxs)(n.p,{children:["The authorization token generated by ",(0,s.jsx)(n.code,{children:"POST /api/auth/login"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"projectId"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ID"})," of the project."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Request Body:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'The following sample is part of the complete request body. The complete request body must contain all project settings.\n\n{\n  "enableDeleteObjectDependencies": {\n    "value": true\n  },\n  "appendInfoForEmailDelivery": {\n    "value": [\n      "recipient_name",\n      "owner_name",\n      "report_document_name",\n      "project_name",\n      "delivery_method",\n      "schedule",\n     "subscription_name",\n      "delivery_status",\n      "date",\n      "time",\n      "email_address",\n      "error_message"\n    ]\n  },\n  "cacheEncryptionLevel": {\n    "value": 1\n  },\n  "maxEmailSubscriptionCount": {\n    "value": 200\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Curl:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/projects/{projectId}/settings" -H "accept: application/json" -H "X-MSTR-AuthToken: 9kdr8gbhtt60crk0mulbma4msp" -H "Content-Type: application/json" -d "{\\\\"enableDeleteObjectDependencies\\\\":{\\\\"value\\\\":true},\\\\"appendInfoForEmailDelivery\\\\":{\\\\"value\\\\":[\\\\"recipient_name\\\\",\\\\"owner_name\\\\",\\\\"report_document_name\\\\",\\\\"project_name\\\\",\\\\"delivery_method\\\\",\\\\"schedule\\\\",\\\\"subscription_name\\\\",\\\\"delivery_status\\\\",\\\\"date\\\\",\\\\"time\\\\",\\\\"email_address\\\\",\\\\"error_message\\\\"]},\\\\"cacheEncryptionLevel\\\\":{\\\\"value\\\\":1},\\\\"maxEmailSubscriptionCount\\\\":{\\\\"value\\\\":200},...}"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sample-response-4",children:"Sample response"}),"\n",(0,s.jsx)(n.p,{children:"Response Body:"}),"\n",(0,s.jsx)(n.p,{children:"The following sample is part of the complete response body. A complete list of project setting values with the modified values should be returned."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "enableDeleteObjectDependencies": {\n    "value": true\n  },\n  "appendInfoForEmailDelivery": {\n    "value": [\n      "recipient_name",\n      "owner_name",\n      "report_document_name",\n      "project_name",\n      "delivery_method",\n      "schedule",\n      "subscription_name",\n      "delivery_status",\n      "date",\n      "time",\n      "email_address",\n      "error_message"\n    ]\n  },\n  "cacheEncryptionLevel": {\n    "value": 1\n  },\n  "maxEmailSubscriptionCount": {\n    "value": 200\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Response Code: 200 (Success: OK)"}),"\n",(0,s.jsx)(n.h2,{id:"log-out",children:"Log out"}),"\n",(0,s.jsxs)(n.p,{children:["Endpoint: ",(0,s.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogout",children:"POST /api/auth/logout"})]}),"\n",(0,s.jsxs)(n.p,{children:["This endpoint allows the caller to log out the authenticated user from the MicroStrategy REST server. In this example, you close the active user session by providing the ",(0,s.jsx)(n.code,{children:"X-MSTR-AuthToken"})," authorization token, which is generated by ",(0,s.jsx)(n.code,{children:"POST /api/auth/login"}),". If the call is successful, the resulting response returns a status code of 204."]}),"\n",(0,s.jsx)(n.h3,{id:"sample-request-5",children:"Sample request"}),"\n",(0,s.jsx)(n.p,{children:"Curl:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST "https:// demo.microstrategy.com/MicroStrategyLibrary/api/auth/logout" -H "accept: application/json" -H "X-MSTR-AuthToken: c8afkjurl1r9qk2k7puj2hs9cu"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sample-response-5",children:"Sample response"}),"\n",(0,s.jsx)(n.p,{children:"Response Code: 204 (Accepted)"})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);