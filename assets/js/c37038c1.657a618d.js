"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[4570],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80311:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var a,r=n(83117),o=n(80102),i=(n(67294),n(3905)),s=["components"],l={sidebar_label:"Folder browsing",title:"Folder browsing",description:"The workflow for browsing folders in the metadata includes the following sequence of REST API requests."},p=void 0,d={unversionedId:"common-workflows/analytics/object-discovery/folder-browsing",id:"common-workflows/analytics/object-discovery/folder-browsing",title:"Folder browsing",description:"The workflow for browsing folders in the metadata includes the following sequence of REST API requests.",source:"@site/docs/common-workflows/analytics/object-discovery/folder-browsing.md",sourceDirName:"common-workflows/analytics/object-discovery",slug:"/common-workflows/analytics/object-discovery/folder-browsing",permalink:"/rest-api-docs/common-workflows/analytics/object-discovery/folder-browsing",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/object-discovery/folder-browsing.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1695919031,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{sidebar_label:"Folder browsing",title:"Folder browsing",description:"The workflow for browsing folders in the metadata includes the following sequence of REST API requests."},sidebar:"tutorialSidebar",previous:{title:"Object discovery",permalink:"/rest-api-docs/common-workflows/analytics/object-discovery/"},next:{title:"Search for objects",permalink:"/rest-api-docs/common-workflows/analytics/object-discovery/search-for-objects"}},c={},m=[{value:"Log in",id:"log-in",level:2},{value:"Get project list",id:"get-project-list",level:2},{value:"Browse to the Shared Reports folder",id:"browse-to-the-shared-reports-folder",level:2},{value:"Get the Shared Reports and My Reports folder objects (optional)",id:"get-the-shared-reports-and-my-reports-folder-objects-optional",level:3},{value:"Browse to a folder by ID",id:"browse-to-a-folder-by-id",level:2},{value:"Filter the folder contents",id:"filter-the-folder-contents",level:3},{value:"Log out",id:"log-out",level:2}],u=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),h={toc:m};function f(e){var t=e.components,a=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-01bcf62f-9d6f-4ddf-9f63-064d875ddae2?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"The workflow for browsing folders in the metadata includes the following sequence of REST API requests."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#log-in"},"Log in")," Authenticate into the environment with ",(0,i.kt)("inlineCode",{parentName:"li"},"POST /api/auth/login")," and standard authentication."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#get-project-list"},"Get project list")," Obtain the project list from ",(0,i.kt)("inlineCode",{parentName:"li"},"GET /api/projects"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#browse-to-the-shared-reports-folder"},"Browse to the Shared Reports folder")," Call ",(0,i.kt)("inlineCode",{parentName:"li"},"GET /api/folders/preDefined")," to perform folder browsing to the Shared Reports folder (may be multiple requests).",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#get-the-shared-reports-and-my-reports-folder-objects-optional"},"Get the Shared Reports and My Reports folder objects (optional)")," ",(0,i.kt)(u,{since:"2021\xa0Update\xa010",inline:!0,mdxType:"Available"})))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#browse-to-a-folder-by-id"},"Browse to a folder by ID")," Call ",(0,i.kt)("inlineCode",{parentName:"li"},"GET /api/folders/{id}")," to perform folder browsing to a child folder under Shared Reports."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#log-out"},"Log out")," Call ",(0,i.kt)("inlineCode",{parentName:"li"},"POST /api/logout")," to close the session.")),(0,i.kt)("p",null,"A detailed explanation of each step is provided below:"),(0,i.kt)("h2",{id:"log-in"},"Log in"),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login")),(0,i.kt)("p",null,"This endpoint allows the caller to authenticate with the MicroStrategy REST server. You provide the information used to create the session in the body of the request. In this example, you use standard authentication so you need to provide username, password, and loginMode (which specifies the authentication mode to use). If you omit an optional field, the REST server uses the default value. If the call is successful, the resulting HTTP response returns an HTTP status code 204 and a response header containing ",(0,i.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),", the authorization token that will be used in subsequent requests."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"swagger_POST_auth_login",src:n(19566).Z,width:"1276",height:"648"})),(0,i.kt)("p",null,"REST API Explorer: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin")),(0,i.kt)("p",null,"Sample Request"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Headers"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-http"},"'Content-Type: application/json'\n'Accept: application/json'\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Body"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "loginMode": 1,\n  "username": "administrator",\n  "password": ""\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Curl"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/login" --header \'Content-Type: application/json\' --header \'Accept: application/json\' -d \'{ \\\n  "loginMode":1, \\\n  "username": "administrator", \\\n  "password": "" \\\n  }\'\n')))),(0,i.kt)("p",null,"Sample Response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response Headers"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pragma": "no-cache",\n  "x-mstr-authtoken": "nllmm5lpmkjdsj4d4etgdikc6c",\n  "cache-control": "no-cache, no-store, max-age=0, must-revalidate",\n  "date": "Thur, 5 July 2018 01:42:31 GMT",\n  "expires": "0",\n  "content-type": null\n}\n')),(0,i.kt)("p",{parentName:"li"},'The authorization token "x-mstr-authtoken" is returned in the response header. It is used in other endpoints to authenticate the user.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response Body: Empty")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response Code: 204 (Success: No Content)"))),(0,i.kt)("h2",{id:"get-project-list"},"Get project list"),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects")),(0,i.kt)("p",null,"This endpoint allows the caller to get the list of projects with the MicroStrategy REST server. In this example, you get the list of projects in the MicroStrategy Tutorial metadata. You use the authorization token returned during login as the value for the header parameter, ",(0,i.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),". If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a response body containing a list of the active projects that the user session has access to."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"swagger_GET_projects",src:n(53121).Z,width:"1279",height:"749"})),(0,i.kt)("p",null,"REST API Explorer: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects")),(0,i.kt)("p",null,"Sample Request"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Headers"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Body: Empty")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Curl"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET \"https://demo.microstrategy.com/MicroStrategyLibrary/api/projects\" --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n")))),(0,i.kt)("p",null,"Sample Response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response Body"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-http"},'[\n  {\n    "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n    "name": "MicroStrategy Tutorial",\n    "alias": "",\n    "description": "MicroStrategy Tutorial project and application set designed to illustrate the platform\'s rich functionality. The theme is an Electronics, Books, Movies and Music store. Employees, Inventory, Finance, Product Sales and Suppliers are analyzed.",\n    "status": 0\n  },\n  {\n    "id": "AF09B3E3458F78B4FBE4DEB68528BF7B",\n    "name": "Human Resources Analysis Module",\n    "alias": "",\n    "description": "The Human Resources Analysis Module analyses workforce headcount, trends and profiles, employee attrition and recruitment, compensation and benefit costs and employee qualifications, performance and satisfaction.",\n    "status": 0\n  }\n]\n')))),(0,i.kt)("p",null,"The response body contains information for each project that is returned, including the project ID that you use in later endpoints."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Response Code: 204 (Success: OK)")),(0,i.kt)("h2",{id:"browse-to-the-shared-reports-folder"},"Browse to the Shared Reports folder"),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Browsing/getPreDefinedFolder"},"GET /api/folders/preDefined/{folderType}")),(0,i.kt)("p",null,'This endpoint allows the caller to get the objects under a predefined folder with the MicroStrategy REST server. In this example, you get the objects under "Shared Reports" in the "MicroStrategy Tutorial" project. You use the authorization token returned by ',(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login")," as the value for ",(0,i.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken")," and a project ID returned by ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/projects")," as the value for ",(0,i.kt)("inlineCode",{parentName:"p"},"X-MSTR-ProjectID"),". You provide a value for ",(0,i.kt)("inlineCode",{parentName:"p"},"folderType")," from the ",(0,i.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLFolderNames.html"},"EnumDSSXMLFolderNames"),' enumeration. In this example, you use the value "7" , which specifies the predefined "Shared Reports" folder under the "Public Objects" folder. If the call is successful, the resulting HTTP response returns an HTTP status 200 and a list of metadata objects under the "Shared Reports" folder.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"swagger_GET_folders_preDefined",src:n(72355).Z,width:"1280",height:"1061"})),(0,i.kt)("p",null,"REST API Explorer: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Browsing/getPreDefinedFolder"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Browsing/getPreDefinedFolder")),(0,i.kt)("p",null,"Sample Request"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Parameters"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"swagger_GET_folders_preDefined_Parameters",src:n(10417).Z,width:"1280",height:"344"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Headers"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Curl"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET \"https://demo.microstrategy.com/MicroStrategyLibrary/api/folders/preDefined/7?limit=-1\" --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c' --header 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\n")))),(0,i.kt)("p",null,"Sample Response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response Body"),(0,i.kt)("p",{parentName:"li"},"You can find detail definitions of each parameter in the Response body for this endpoint on the MicroStrategy REST API Explorer page, under Response Class -> Model."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "name": "Business Roles",\n    "id": "032A5E114A59D28267BDD8B6D9E58B22",\n    "type": 8,\n    "description": "These folders contain reports that are appropriate for individuals in different organizational roles.",\n    "subtype": 2048,\n    "dateCreated": "2005-05-06T17:48:43.000-0400",\n    "dateModified": "2007-03-04T11:42:01.000-0500",\n    "version": "3940C5CB4136F3B1DB4F5ABD9541F4B8",\n    "acg": 255,\n    "owner": {\n      "name": "Administrator",\n      "id": "54F3D26011D2896560009A8E67019608"\n    }\n  },\n  {\n    "name": "Documents and Scorecards",\n    "id": "F025A94B4C03B6DCEE0F5D9DA825DA67",\n    "type": 8,\n    "description": "This folder contains several examples of dashboards.",\n    "subtype": 2048,\n    "dateCreated": "2007-01-13T17:39:22.000-0500",\n    "dateModified": "2015-05-04T17:50:35.000-0400",\n    "version": "123CF8A84FCD6FA5B2496E96E5915CAA",\n    "acg": 255,\n    "owner": {\n      "name": "Administrator",\n      "id": "54F3D26011D2896560009A8E67019608"\n    }\n  },\n  {\n    "name": "Enterprise Reporting Documents",\n    "id": "92ADD0F84D07AC532AD03BA0F92A836B",\n    "type": 8,\n    "description": "This folder contains various types of documents such as scorecards and dashboards, managed metrics reports, production and operational reports, invoices and statements, and business reports.",\n    "subtype": 2048,\n    "dateCreated": "2003-09-08T16:35:27.000-0400",\n    "dateModified": "2012-03-29T10:49:01.000-0400",\n    "version": "51FF405E46B8C3400027D6896CC8AA4F",\n    "acg": 255,\n    "owner": {\n      "name": "Administrator",\n      "id": "54F3D26011D2896560009A8E67019608"\n    }\n  },\n  {\n    "name": "MicroStrategy Platform Capabilities",\n    "id": "D64C532E4E7FBA74D29A7CA3576F39CF",\n    "type": 8,\n    "description": "This folder contains examples of many of the sophisticated capabilities within the MicroStrategy platform.",\n    "subtype": 2048,\n    "dateCreated": "2006-05-23T04:55:20.000-0400",\n    "dateModified": "2012-05-17T05:00:38.000-0400",\n    "version": "9E78732646B926BB161F32B5E96581D3",\n    "acg": 255,\n    "owner": {\n      "name": "Administrator",\n      "id": "54F3D26011D2896560009A8E67019608"\n    }\n  },\n  {\n    "name": "Sample Dashboards",\n    "id": "C6C5ECF0B571448A9C31C653AB1D5E51",\n    "type": 8,\n    "hidden": true,\n    "subtype": 2048,\n    "dateCreated": "2014-10-20T14:13:39.000-0400",\n    "dateModified": "2017-02-16T03:46:16.000-0500",\n    "version": "25798DEE4C5CFC61B54BE8A6E60AF208",\n    "acg": 255,\n    "owner": {\n      "name": "Administrator",\n      "id": "54F3D26011D2896560009A8E67019608"\n    }\n  },\n  {\n    "name": "Subject Areas",\n    "id": "5B68C5AE433C728679340A91DC8F809C",\n    "type": 8,\n    "description": "This folder contains reports that are categorized by topic. Topics include Customer Analysis, Enterprise Performance Management, Human Resource Analysis, Inventory and Supply Chain Analysis, Sales and Profitability Analysis, and Supplier Analysis.",\n    "subtype": 2048,\n    "dateCreated": "2006-05-22T11:42:06.000-0400",\n    "dateModified": "2010-04-08T07:13:16.000-0400",\n    "version": "D07DA02D455910C463F928ACBDE6AC9D",\n    "acg": 255,\n    "owner": {\n      "name": "Administrator",\n      "id": "54F3D26011D2896560009A8E67019608"\n    }\n  }\n')),(0,i.kt)("p",{parentName:"li"},'The REST server returns all the object information under "Shared Reports".'))),(0,i.kt)("h3",{id:"get-the-shared-reports-and-my-reports-folder-objects-optional"},"Get the Shared Reports and My Reports folder objects (optional)"),(0,i.kt)(u,{since:"2021 Update 10",mdxType:"Available"}),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Browsing/getPreDefinedFolders"},"GET /api/folders/preDefined?folderType={folderType}")),(0,i.kt)("p",null,'This endpoint allows the caller to get the folder object of one or more predefined folders with the MicroStrategy REST server. In this example, you get the "Shared Reports" and "My Reports" folder objects in the "MicroStrategy Tutorial" project. You use the authorization token returned by ',(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login")," as the value for ",(0,i.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken")," and a project ID returned by ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/projects")," as the value for ",(0,i.kt)("inlineCode",{parentName:"p"},"X-MSTR-ProjectID"),". You provide a value for ",(0,i.kt)("inlineCode",{parentName:"p"},"folderType")," from the ",(0,i.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLFolderNames.html"},"EnumDSSXMLFolderNames"),' enumeration. You may specify multiple folder types as a comma separated list. In this example, you use the value "7,20", where "7" specifies the predefined "Shared Reports" folder under the "Public Objects" folder, and "20" specifies the "My Reports" folder under the profile folder of the active user. If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a list of the folder objects requested.'),(0,i.kt)("p",null,"Sample Request"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Parameters"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken")),(0,i.kt)("p",{parentName:"li"},"The authorization token generated by ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"X-MSTR-ProjectID")),(0,i.kt)("p",{parentName:"li"},"The ID of the project that the folders being requested belong to.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"folderType")),(0,i.kt)("p",{parentName:"li"},"The pre-defined folder type, from ",(0,i.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLFolderNames.html"},"EnumDSSXMLFolderNames"),". You may specify multiple folder types as a comma separated list.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Headers"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Curl"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET \"https://demo.microstrategy.com/MicroStrategyLibrary/api/folders/preDefined?folderType=7,20\" --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c' --header 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\n")))),(0,i.kt)("p",null,"Sample Response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response Body"),(0,i.kt)("p",{parentName:"li"},'The REST server returns a list containing the object information of the requested folders. Note that the folder with the name "Reports" is the Shared Reports folder.'),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "preDefined": [\n    {\n      "name": "Reports",\n      "id": "D3C7D461F69C4610AA6BAA5EF51F4125",\n      "type": 8,\n      "subtype": 2048,\n      "dateCreated": "2010-06-11T18:38:55.000+0000",\n      "dateModified": "2023-02-10T18:07:21.000+0000",\n      "version": "C4849006E34EA7DA6D811F8CBD319C50",\n      "acg": 255,\n      "owner": {\n        "name": "Administrator",\n        "id": "54F3D26011D2896560009A8E67019608"\n      },\n      "extType": 0,\n      "folderType": 7\n    },\n    {\n      "name": "My Reports",\n      "id": "E287FE0E11E5B55F03C70080EF555BA1",\n      "type": 8,\n      "subtype": 2048,\n      "dateCreated": "2016-01-07T16:58:33.000+0000",\n      "dateModified": "2023-03-08T21:32:18.000+0000",\n      "version": "784CAF8370496D2510CF91A7AD72941B",\n      "acg": 255,\n      "owner": {\n        "name": "Administrator",\n        "id": "54F3D26011D2896560009A8E67019608"\n      },\n      "extType": 0,\n      "folderType": 20\n    }\n  ]\n}\n')))),(0,i.kt)("h2",{id:"browse-to-a-folder-by-id"},"Browse to a folder by ID"),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Browsing/getFolder"},"GET /api/folders/{id}")),(0,i.kt)("p",null,"This endpoint allows the caller to get the objects under a folder with the MicroStrategy REST server using the folder ID. You use the authorization token returned by ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login")," as the value for ",(0,i.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken")," and a project ID returned by ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/projects")," as the value for ",(0,i.kt)("inlineCode",{parentName:"p"},"X-MSTR-ProjectID"),". You provide a value for the ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),' path parameter with the ID of the folder you want to browse to. In this example, the value "032A5E114A59D28267BDD8B6D9E58B22" is used, which is the ID of the "Business Roles" folder under "Shared Reports" that was returned by ',(0,i.kt)("a",{parentName:"p",href:"#browse-to-the-shared-reports-folder"},"GET /api/folders/preDefined/7"),". If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a list of metadata objects under the folder."),(0,i.kt)("p",null,"Sample Request"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Parameters"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken")),(0,i.kt)("p",{parentName:"li"},"The authorization token generated by ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"X-MSTR-ProjectID")),(0,i.kt)("p",{parentName:"li"},"The ID of the project that the folder being requested belongs to.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"id")),(0,i.kt)("p",{parentName:"li"},"The folder ID.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Headers"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Curl"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET \"https://demo.microstrategy.com/MicroStrategyLibrary/api/folders/032A5E114A59D28267BDD8B6D9E58B22\" --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c' --header 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\n")))),(0,i.kt)("p",null,"Sample Response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response Body"),(0,i.kt)("p",{parentName:"li"},'The REST server returns all the object information under the "Business Roles" folder.'),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "Billing Managers",\n    "id": "7A83FC5245C894A2FD0B0BA20801E3F8",\n    "type": 8,\n    "description": "This folder contains reports that are appropriate for Billing Managers, including a customer invoice and a customer transaction report.",\n    "subtype": 2048,\n    "dateCreated": "2005-05-06T21:49:08.000+0000",\n    "dateModified": "2016-08-12T19:32:56.000+0000",\n    "version": "ECEBEF8448F5E57B189AD6A19C839133",\n    "acg": 255,\n    "owner": {\n      "name": "Administrator",\n      "id": "54F3D26011D2896560009A8E67019608"\n    },\n    "extType": 0\n  },\n  {\n    "name": "Brand Managers",\n    "id": "8B1A934F46393111029F40A9CB4FE0C6",\n    "type": 8,\n    "description": "This folder contains brand sales and profitability analyses.",\n    "subtype": 2048,\n    "dateCreated": "2005-05-06T21:49:14.000+0000",\n    "dateModified": "2016-08-12T19:32:56.000+0000",\n    "version": "ECEBEF8448F5E57B189AD6A19C839133",\n    "acg": 255,\n    "owner": {\n      "name": "Administrator",\n      "id": "54F3D26011D2896560009A8E67019608"\n    },\n    "extType": 0\n  },\n  {\n    "name": "Category Managers",\n    "id": "9B6F439640C1BEDB30EF74939A43F286",\n    "type": 8,\n    "description": "This folder contains category sales and profitability analyses.",\n    "subtype": 2048,\n    "dateCreated": "2005-05-06T21:49:24.000+0000",\n    "dateModified": "2016-08-12T19:32:56.000+0000",\n    "version": "ECEBEF8448F5E57B189AD6A19C839133",\n    "acg": 255,\n    "owner": {\n      "name": "Administrator",\n      "id": "54F3D26011D2896560009A8E67019608"\n    },\n    "extType": 0\n  },\n  {\n    "name": "Company Executives",\n    "id": "0065ED414DC05BC9E4E7E6AC2C6AA81F",\n    "type": 8,\n    "description": "This folder contains executive dashboards that summarize corporate and regional performance.",\n    "subtype": 2048,\n    "dateCreated": "2006-05-23T08:56:12.000+0000",\n    "dateModified": "2016-08-12T19:32:56.000+0000",\n    "version": "ECEBEF8448F5E57B189AD6A19C839133",\n    "acg": 255,\n    "owner": {\n      "name": "Administrator",\n      "id": "54F3D26011D2896560009A8E67019608"\n    },\n    "extType": 0\n  },\n  {\n    "name": "District Sales Managers",\n    "id": "5105902A4446ACC07467C79BF19FC47C",\n    "type": 8,\n    "description": "This folder contains analyzes of store-level performance.",\n    "subtype": 2048,\n    "dateCreated": "2005-05-06T21:49:36.000+0000",\n    "dateModified": "2016-08-12T19:32:56.000+0000",\n    "version": "ECEBEF8448F5E57B189AD6A19C839133",\n    "acg": 255,\n    "owner": {\n      "name": "Administrator",\n      "id": "54F3D26011D2896560009A8E67019608"\n    },\n    "extType": 0\n  },\n  {\n    "name": "Operations Managers",\n    "id": "A81BEFB44F7EE6F522AC85814B3BDCC6",\n    "type": 8,\n    "description": "This folder contains documents analyzing sales transactions at the city and state levels, as well as an analysis of the timeliness of outbound shipments.",\n    "subtype": 2048,\n    "dateCreated": "2006-07-20T13:20:01.000+0000",\n    "dateModified": "2016-08-12T19:32:56.000+0000",\n    "version": "ECEBEF8448F5E57B189AD6A19C839133",\n    "acg": 255,\n    "owner": {\n      "name": "Administrator",\n      "id": "54F3D26011D2896560009A8E67019608"\n    },\n    "extType": 0\n  },\n  {\n    "name": "Regional Sales Managers",\n    "id": "E62347FB419BF6C847A712AB40148E6A",\n    "type": 8,\n    "description": "This folder contains analyses of customer income, sales by employee, and revenue trends.",\n    "subtype": 2048,\n    "dateCreated": "2005-05-06T21:49:46.000+0000",\n    "dateModified": "2016-08-12T19:32:56.000+0000",\n    "version": "ECEBEF8448F5E57B189AD6A19C839133",\n    "acg": 255,\n    "owner": {\n      "name": "Administrator",\n      "id": "54F3D26011D2896560009A8E67019608"\n    },\n    "extType": 0\n  },\n  {\n    "name": "Suppliers",\n    "id": "AD0985064D8912292E0D07AE1F86866F",\n    "type": 8,\n    "description": "This folder contains a report analyzing sales by supplier by customer region, item, and month.",\n    "subtype": 2048,\n    "dateCreated": "2006-05-23T08:56:48.000+0000",\n    "dateModified": "2016-08-12T19:32:56.000+0000",\n    "version": "ECEBEF8448F5E57B189AD6A19C839133",\n    "acg": 255,\n    "owner": {\n      "name": "Administrator",\n      "id": "54F3D26011D2896560009A8E67019608"\n    },\n    "extType": 0\n  }\n]\n')))),(0,i.kt)("h3",{id:"filter-the-folder-contents"},"Filter the folder contents"),(0,i.kt)(u,{since:"2021 Update 10",mdxType:"Available"}),(0,i.kt)("p",null,"When calling ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/folders/{id}"),", you can use the optional query parameters ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"hidden")," to filter the objects that are included in the response."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type"),": Filter the folder contents based on the ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," property of objects. If this query parameter is passed, then only objects of the type(s) specified are included in the response. If not passed, no filtering is applied. You may specify multiple values as a comma separated list. Possible values are defined in ",(0,i.kt)("a",{parentName:"li",href:"https://www2.microstrategy.com/producthelp/2021/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLObjectTypes.html"},"EnumDSSXMLObjectTypes"),". For example, ",(0,i.kt)("inlineCode",{parentName:"li"},"type=3,8,55")," only includes objects in the folder that have a type of ",(0,i.kt)("inlineCode",{parentName:"li"},"3")," (reports), ",(0,i.kt)("inlineCode",{parentName:"li"},"8")," (folders), or ",(0,i.kt)("inlineCode",{parentName:"li"},"55")," (dossiers and documents)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hidden"),": Filter the result based on the ",(0,i.kt)("inlineCode",{parentName:"li"},"hidden")," property of objects. If this query parameter is not passed, then no filtering is applied (both hidden and unhidden objects are returned). If you pass ",(0,i.kt)("inlineCode",{parentName:"li"},"hidden=false")," then only objects that are ",(0,i.kt)("em",{parentName:"li"},"not")," hidden are returned. If you pass ",(0,i.kt)("inlineCode",{parentName:"li"},"hidden=true")," then only objects that are hidden are returned.")),(0,i.kt)("h2",{id:"log-out"},"Log out"),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogout"},"POST /api/auth/logout")),(0,i.kt)("p",null,"This endpoint allows the caller to log out for the authenticated user with the MicroStrategy REST server. In this example, you close the active user session by providing the ",(0,i.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken")," authorization token generated during login. If the call is successful, the resulting HTTP response returns an HTTP status code 204."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"swagger_POST_auth_logout",src:n(61280).Z,width:"1275",height:"283"})),(0,i.kt)("p",null,"REST API Explorer: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogout"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogout")),(0,i.kt)("p",null,"Sample Request"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Headers"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request Body: Empty")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Curl"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST -i -c ~/cookie-jar.txt --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'  https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/logout'\n")))),(0,i.kt)("p",null,"Sample Response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Response code: 204")))}f.isMDXComponent=!0},72355:function(e,t,n){t.Z=n.p+"assets/images/swagger_GET_folders_preDefined-a3063c50c0a28962db4d001e5ae1c030.png"},10417:function(e,t,n){t.Z=n.p+"assets/images/swagger_GET_folders_preDefined_Parameters-9e6fe2c19f787f37ca91b0684209db07.png"},53121:function(e,t,n){t.Z=n.p+"assets/images/swagger_GET_projects-e798412113caebe7ad46c376cb194f5e.png"},19566:function(e,t,n){t.Z=n.p+"assets/images/swagger_POST_auth_login-2be51e6b11363604a15e87b5c142688e.png"},61280:function(e,t,n){t.Z=n.p+"assets/images/swagger_POST_auth_logout-8df2db0375b9c25a2d75451ebff23993.png"}}]);