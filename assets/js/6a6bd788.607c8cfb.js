"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1075],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2461:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={sidebar_label:"Folder browsing",title:"Workflow sample - Folder browsing",description:"The workflow for browsing folders in the metadata includes the following sequence of REST API requests."},l=void 0,p={unversionedId:"common-workflows/folder-browsing",id:"common-workflows/folder-browsing",title:"Workflow sample - Folder browsing",description:"The workflow for browsing folders in the metadata includes the following sequence of REST API requests.",source:"@site/docs/common-workflows/folder-browsing.md",sourceDirName:"common-workflows",slug:"/common-workflows/folder-browsing",permalink:"/rest-api-docs/common-workflows/folder-browsing",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/folder-browsing.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1668189866,formattedLastUpdatedAt:"Nov 11, 2022",frontMatter:{sidebar_label:"Folder browsing",title:"Workflow sample - Folder browsing",description:"The workflow for browsing folders in the metadata includes the following sequence of REST API requests."},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/rest-api-docs/common-workflows/authentication"},next:{title:"Search for objects",permalink:"/rest-api-docs/common-workflows/search-for-objects"}},d={},c=[{value:"Log in",id:"log-in",level:2},{value:"Get project list",id:"get-project-list",level:2},{value:"Browse to the Shared Reports folder",id:"browse-to-the-shared-reports-folder",level:2},{value:"Log out",id:"log-out",level:2}],u={toc:c};function m(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-01bcf62f-9d6f-4ddf-9f63-064d875ddae2?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"The workflow for browsing folders in the metadata includes the following sequence of REST API requests."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#log-in"},"Log in")," User authenticates into the environment with ",(0,o.kt)("inlineCode",{parentName:"li"},"POST /api/auth/login")," and standard authentication"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#get-project-list"},"Get project list")," User obtains the project list from ",(0,o.kt)("inlineCode",{parentName:"li"},"GET /api/projects")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#browse-to-the-shared-reports-folder"},"Browse to the Shared Reports folder")," User calls ",(0,o.kt)("inlineCode",{parentName:"li"},"GET /api/folders/preDefined")," to perform folder browsing to the Shared Reports folder (may be multiple requests)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#log-out"},"Log out")," User calls ",(0,o.kt)("inlineCode",{parentName:"li"},"POST /api/logout")," to close the session")),(0,o.kt)("p",null,"A detailed explanation of each step is provided below:"),(0,o.kt)("h2",{id:"log-in"},"Log in"),(0,o.kt)("p",null,"End Point: ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login")),(0,o.kt)("p",null,"This endpoint allows the caller to authenticate with the MicroStrategy REST Server. You provide the information used to create the session in the body of the request. In this example, you use standard authentication so you need to provide username, password, and loginMode (which specifies the authentication mode to use). If you omit an optional field, the REST Server uses the default value. If the call is successful, the resulting HTTP response returns an HTTP status code 204 and a response header containing X-MSTR-AuthToken, the authorization token that will be used in subsequent requests."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"swagger_POST_auth_login",src:n(9566).Z,width:"1276",height:"648"})),(0,o.kt)("p",null,"REST API Explorer: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Authentication/postLogin"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Authentication/postLogin")),(0,o.kt)("p",null,"Sample Request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Headers"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},"'Content-Type: application/json'\n'Accept: application/json'\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Body"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "loginMode": 1,\n  "username": "administrator",\n  "password": ""\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Curl"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/login" --header \'Content-Type: application/json\' --header \'Accept: application/json\' -d \'{ \\\n  "loginMode":1, \\\n  "username": "administrator", \\\n  "password": "" \\\n  }\'\n')))),(0,o.kt)("p",null,"Sample Response"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Headers"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pragma": "no-cache",\n  "x-mstr-authtoken": "nllmm5lpmkjdsj4d4etgdikc6c",\n  "cache-control": "no-cache, no-store, max-age=0, must-revalidate",\n  "date": "Thur, 5 July 2018 01:42:31 GMT",\n  "expires": "0",\n  "content-type": null\n}\n')),(0,o.kt)("p",{parentName:"li"},'The authorization token "x-mstr-authtoken" is returned in the response header. It is used in other endpoints to authenticate the user.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Body: Empty")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Code: 204 (Success: No Content)"))),(0,o.kt)("h2",{id:"get-project-list"},"Get project list"),(0,o.kt)("p",null,"End Point: ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/projects")),(0,o.kt)("p",null,"This endpoint allows the caller to get the list of projects with the MicroStrategy REST Server. In this example, you get the list of projects in the MicroStrategy Tutorial metadata. You use the authorization token returned during login as the value for the header parameter, X-MSTR-AuthToken. If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a response body containing a list of the active projects that the user session has access to."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"swagger_GET_projects",src:n(3121).Z,width:"1279",height:"749"})),(0,o.kt)("p",null,"REST API Explorer: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#!/Projects/getProjects"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#!/Projects/getProjects")),(0,o.kt)("p",null,"Sample Request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Headers"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Body: Empty")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Curl"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET \"https://demo.microstrategy.com/MicroStrategyLibrary/api/projects\" --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n")))),(0,o.kt)("p",null,"Sample Response"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Body"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},'[\n  {\n    "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n    "name": "MicroStrategy Tutorial",\n    "alias": "",\n    "description": "MicroStrategy Tutorial project and application set designed to illustrate the platform\'s rich functionality. The theme is an Electronics, Books, Movies and Music store. Employees, Inventory, Finance, Product Sales and Suppliers are analyzed.",\n    "status": 0\n  },\n  {\n    "id": "AF09B3E3458F78B4FBE4DEB68528BF7B",\n    "name": "Human Resources Analysis Module",\n    "alias": "",\n    "description": "The Human Resources Analysis Module analyses workforce headcount, trends and profiles, employee attrition and recruitment, compensation and benefit costs and employee qualifications, performance and satisfaction.",\n    "status": 0\n  }\n]\n')))),(0,o.kt)("p",null,"The response body contains information for each project that is returned, including the project ID that you use in later endpoints."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Response Code: 204 (Success: OK)")),(0,o.kt)("h2",{id:"browse-to-the-shared-reports-folder"},"Browse to the Shared Reports folder"),(0,o.kt)("p",null,"End Point: ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/folders/preDefined/{folderType}")),(0,o.kt)("p",null,'This endpoint allows the caller to get the objects under a predefined folder with the MicroStrategy REST Server. In this example, you get the objects under Shared Reports in the "MicroStrategy Tutorial". You use the authorization token returned by ',(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login")," as the value for X-MSTR-AuthToken and a project ID returned by ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/projects")," as the value for X-MSTR-ProjectID. You provide a value for folderType from the ",(0,o.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLFolderNames.html"},"EnumDSSXMLFolderNames"),' enumeration. In this example, you use the value "7" , which specifies the predefined "Shared Reports" folder under the "Public Objects" folder. If the call is successful, the resulting HTTP response returns an HTTP status 200 and a list of metadata objects under the Shared Reports folder.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"swagger_GET_folders_preDefined",src:n(5382).Z,width:"1280",height:"1061"})),(0,o.kt)("p",null,"REST API Explorer: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Browsing/getPreDefinedFolder"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Browsing/getPreDefinedFolder")),(0,o.kt)("p",null,"Sample Request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Parameters"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"swagger_GET_folders_preDefined_Parameters",src:n(417).Z,width:"1280",height:"344"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Headers"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Curl"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET \"https://demo.microstrategy.com/MicroStrategyLibrary/api/folders/preDefined/7?limit=-1\" --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c' --header 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\n")))),(0,o.kt)("p",null,"Sample Response"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Response Body"),(0,o.kt)("p",{parentName:"li"},"You can find detail definitions of each parameter in the Response body for this endpoint on the MicroStrategy REST API Explorer page, under Response Class -> Model."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "name": "Business Roles",\n    "id": "032A5E114A59D28267BDD8B6D9E58B22",\n    "type": 8,\n    "description": "These folders contain reports that are appropriate for individuals in different organizational roles.",\n    "subtype": 2048,\n    "dateCreated": "2005-05-06T17:48:43.000-0400",\n    "dateModified": "2007-03-04T11:42:01.000-0500",\n    "version": "3940C5CB4136F3B1DB4F5ABD9541F4B8",\n    "acg": 255,\n    "owner": {\n      "name": "Administrator",\n      "id": "54F3D26011D2896560009A8E67019608"\n    }\n  },\n  {\n    "name": "Documents and Scorecards",\n    "id": "F025A94B4C03B6DCEE0F5D9DA825DA67",\n    "type": 8,\n    "description": "This folder contains several examples of dashboards.",\n    "subtype": 2048,\n    "dateCreated": "2007-01-13T17:39:22.000-0500",\n    "dateModified": "2015-05-04T17:50:35.000-0400",\n    "version": "123CF8A84FCD6FA5B2496E96E5915CAA",\n    "acg": 255,\n    "owner": {\n      "name": "Administrator",\n      "id": "54F3D26011D2896560009A8E67019608"\n    }\n  },\n  {\n    "name": "Enterprise Reporting Documents",\n    "id": "92ADD0F84D07AC532AD03BA0F92A836B",\n    "type": 8,\n    "description": "This folder contains various types of documents such as scorecards and dashboards, managed metrics reports, production and operational reports, invoices and statements, and business reports.",\n    "subtype": 2048,\n    "dateCreated": "2003-09-08T16:35:27.000-0400",\n    "dateModified": "2012-03-29T10:49:01.000-0400",\n    "version": "51FF405E46B8C3400027D6896CC8AA4F",\n    "acg": 255,\n    "owner": {\n      "name": "Administrator",\n      "id": "54F3D26011D2896560009A8E67019608"\n    }\n  },\n  {\n    "name": "MicroStrategy Platform Capabilities",\n    "id": "D64C532E4E7FBA74D29A7CA3576F39CF",\n    "type": 8,\n    "description": "This folder contains examples of many of the sophisticated capabilities within the MicroStrategy platform.",\n    "subtype": 2048,\n    "dateCreated": "2006-05-23T04:55:20.000-0400",\n    "dateModified": "2012-05-17T05:00:38.000-0400",\n    "version": "9E78732646B926BB161F32B5E96581D3",\n    "acg": 255,\n    "owner": {\n      "name": "Administrator",\n      "id": "54F3D26011D2896560009A8E67019608"\n    }\n  },\n  {\n    "name": "Sample Dashboards",\n    "id": "C6C5ECF0B571448A9C31C653AB1D5E51",\n    "type": 8,\n    "hidden": true,\n    "subtype": 2048,\n    "dateCreated": "2014-10-20T14:13:39.000-0400",\n    "dateModified": "2017-02-16T03:46:16.000-0500",\n    "version": "25798DEE4C5CFC61B54BE8A6E60AF208",\n    "acg": 255,\n    "owner": {\n      "name": "Administrator",\n      "id": "54F3D26011D2896560009A8E67019608"\n    }\n  },\n  {\n    "name": "Subject Areas",\n    "id": "5B68C5AE433C728679340A91DC8F809C",\n    "type": 8,\n    "description": "This folder contains reports that are categorized by topic. Topics include Customer Analysis, Enterprise Performance Management, Human Resource Analysis, Inventory and Supply Chain Analysis, Sales and Profitability Analysis, and Supplier Analysis.",\n    "subtype": 2048,\n    "dateCreated": "2006-05-22T11:42:06.000-0400",\n    "dateModified": "2010-04-08T07:13:16.000-0400",\n    "version": "D07DA02D455910C463F928ACBDE6AC9D",\n    "acg": 255,\n    "owner": {\n      "name": "Administrator",\n      "id": "54F3D26011D2896560009A8E67019608"\n    }\n  }\n')),(0,o.kt)("p",{parentName:"li"},'The REST server returns all the object information under "Shared Reports".'))),(0,o.kt)("h2",{id:"log-out"},"Log out"),(0,o.kt)("p",null,"End Point: ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/logout")),(0,o.kt)("p",null,"This endpoint allows the caller to log out for the authenticated user with the MicroStrategy REST Server. In this example, you close the active user session by providing the authorization token, X-MSTR-AuthToken, generated during login. If the call is successful, the resulting HTTP response returns an HTTP status code 204."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"swagger_POST_auth_logout",src:n(1280).Z,width:"1275",height:"283"})),(0,o.kt)("p",null,"REST API Explorer: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Authentication/postLogout"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Authentication/postLogout")),(0,o.kt)("p",null,"Sample Request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Headers"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Request Body: Empty")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Curl"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST -i -c ~/cookie-jar.txt --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'  https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/logout'\n")))),(0,o.kt)("p",null,"Sample Response"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Response code: 204")))}m.isMDXComponent=!0},5382:function(e,t,n){t.Z=n.p+"assets/images/swagger_GET_folders_preDefined-a3063c50c0a28962db4d001e5ae1c030.png"},417:function(e,t,n){t.Z=n.p+"assets/images/swagger_GET_folders_preDefined_Parameters-9e6fe2c19f787f37ca91b0684209db07.png"},3121:function(e,t,n){t.Z=n.p+"assets/images/swagger_GET_projects-e798412113caebe7ad46c376cb194f5e.png"},9566:function(e,t,n){t.Z=n.p+"assets/images/swagger_POST_auth_login-2be51e6b11363604a15e87b5c142688e.png"},1280:function(e,t,n){t.Z=n.p+"assets/images/swagger_POST_auth_logout-8df2db0375b9c25a2d75451ebff23993.png"}}]);