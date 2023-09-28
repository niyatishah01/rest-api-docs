"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[9537],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},31973:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var n=a(83117),i=a(80102),r=(a(67294),a(3905)),s=["components"],o={title:"Apply filters to a dossier",sidebar_label:"Apply filters to a dossier",description:"In this workflow, you create an instance of a dossier using the filter selections originally defined for the dossier. You then change the values for the filter selections and re-execute the dossier instance with the new values. As a way to see the results of each filter, you export the dossier instance to PDF."},l=void 0,p={unversionedId:"common-workflows/analytics/filter-data/filter-dossier-instances/apply-filters-to-a-dossier",id:"common-workflows/analytics/filter-data/filter-dossier-instances/apply-filters-to-a-dossier",title:"Apply filters to a dossier",description:"In this workflow, you create an instance of a dossier using the filter selections originally defined for the dossier. You then change the values for the filter selections and re-execute the dossier instance with the new values. As a way to see the results of each filter, you export the dossier instance to PDF.",source:"@site/docs/common-workflows/analytics/filter-data/filter-dossier-instances/apply-filters-to-a-dossier.md",sourceDirName:"common-workflows/analytics/filter-data/filter-dossier-instances",slug:"/common-workflows/analytics/filter-data/filter-dossier-instances/apply-filters-to-a-dossier",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-dossier-instances/apply-filters-to-a-dossier",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/filter-data/filter-dossier-instances/apply-filters-to-a-dossier.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1695919031,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{title:"Apply filters to a dossier",sidebar_label:"Apply filters to a dossier",description:"In this workflow, you create an instance of a dossier using the filter selections originally defined for the dossier. You then change the values for the filter selections and re-execute the dossier instance with the new values. As a way to see the results of each filter, you export the dossier instance to PDF."},sidebar:"tutorialSidebar",previous:{title:"Filter dossier instances",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-dossier-instances/"},next:{title:"Retrieve filters applied to dossier chapters",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-dossier-chapters"}},d={},c=[{value:"Log in",id:"log-in",level:2},{value:"Get project list",id:"get-project-list",level:2},{value:"Get a list of dossiers",id:"get-a-list-of-dossiers",level:2},{value:"Get definition of a dossier, including the filter applied",id:"get-definition-of-a-dossier-including-the-filter-applied",level:2},{value:"Create a dossier instance with the existing filter applied",id:"create-a-dossier-instance-with-the-existing-filter-applied",level:2},{value:"Export the dossier instance to PDF",id:"export-the-dossier-instance-to-pdf",level:2},{value:"Update the dossier instance, with a revised filter definition applied",id:"update-the-dossier-instance-with-a-revised-filter-definition-applied",level:2},{value:"Update the filter definition",id:"update-the-filter-definition",level:3},{value:"Clear all selections for a filter",id:"clear-all-selections-for-a-filter",level:3},{value:"Export the dossier instance to PDF again",id:"export-the-dossier-instance-to-pdf-again",level:2},{value:"Log out",id:"log-out",level:2}],u={toc:c};function m(e){var t=e.components,o=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-d6462995-9003-4187-b121-47a5fb31436a?ctx=documentation"},"REST API Playground"),"."),(0,r.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,r.kt)("p",null,"Use the following sequence of REST API requests to see the results when you change the values for the filter selections applied to a dossier instance. In this workflow, you create an instance of a dossier using the filter selections originally defined for the dossier. You then change the values for the filter selections and re-execute the dossier instance with the new values. As a way to see the results of each filter, you export the dossier instance to PDF."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In the workflow below, there are both dossier and document endpoints. A dossier and a document have the same base object so dossier actions can be executed with document endpoints. A dossier is simply a different view of a document.")),(0,r.kt)("p",null,"A detailed explanation of each step is provided below:"),(0,r.kt)("h2",{id:"log-in"},"Log in"),(0,r.kt)("p",null,"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login")," to authenticate into the environment with standard authentication."),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login")),(0,r.kt)("p",null,"This endpoint allows the caller to authenticate with the MicroStrategy REST Server. You provide the information used to create the session in the body of the request. In this example, you use standard authentication so you need to provide username, password, and loginMode (which specifies the authentication mode to use). If you omit an optional field, the REST Server uses the default value. If the call is successful, the resulting HTTP response returns an HTTP status code 204 and a response header containing ",(0,r.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),", the authorization token that will be used in subsequent requests."),(0,r.kt)("p",null,"Sample Request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Headers"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-http"},"'Content-Type: application/json'\n'Accept: application/json'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Body"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "loginMode": 1,\n  "username": "administrator",\n  "password": ""\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Curl"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -i -c --header \'Content-Type: application/json\' --header \'Accept: application/json\' -d \'{ \\\\\n"loginMode":1, \\\\\n"username": "administrator", \\\\\n"password": "" \\\\\n}\' https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/login\'\n')))),(0,r.kt)("p",null,"Sample Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response Headers"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pragma": "no-cache",\n  "x-mstr-authtoken": "nllmm5lpmkjdsj4d4etgdikc6c",\n  "cache-control": "no-cache, no-store, max-age=0, must-revalidate",\n  "date": "Wed, 22 Aug 2018 17:58:29 GMT",\n  "expires": "0",\n  "content-type": null\n}\n')),(0,r.kt)("p",{parentName:"li"},"The authorization token x-mstr-authtoken is returned in the response header. It is used by the other endpoints in the workflow to authenticate the user.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response Body: no content")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response Code: 204 (Success: No Content)"))),(0,r.kt)("h2",{id:"get-project-list"},"Get project list"),(0,r.kt)("p",null,"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/projects")," to obtain the list of available projects."),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects")),(0,r.kt)("p",null,"This endpoint allows the caller to get the list of projects that the user session has access to. You use the authorization token returned during login as the value for ",(0,r.kt)("strong",{parentName:"p"},"X-MSTR-AuthToken"),". If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a response body containing a list of the active projects that the user session has access to. The information returned for each project includes the project ID, which will be used by a later endpoint. In this example, you get the list of projects in the MicroStrategy Tutorial metadata."),(0,r.kt)("p",null,"To execute this API, you need to provide the value for the following parameter in the request header:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"X-MSTR-AuthToken")," Authorization token generated by ",(0,r.kt)("inlineCode",{parentName:"li"},"POST /api/auth/login"))),(0,r.kt)("p",null,"Sample Request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Headers"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Parameters"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"swagger_GET_Projects_Params",src:a(98013).Z,width:"950",height:"97"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Body: Empty")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Curl"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET -b --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'  https://demo.microstrategy.com/MicroStrategyLibrary/api/projects'\n")))),(0,r.kt)("p",null,"Sample Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response Body"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n    "name": "MicroStrategy Tutorial",\n    "alias": "",\n    "description": "MicroStrategy Tutorial project and application set designed to illustrate the platform\'s rich functionality. The theme is an Electronics, Books, Movies and Music store. Employees, Inventory, Finance, Product Sales and Suppliers are analyzed.",\n    "status": 0\n  },\n  {\n    "id": "AF09B3E3458F78B4FBE4DEB68528BF7B",\n    "name": "Human Resources Analysis Module",\n    "alias": "",\n    "description": "The Human Resources Analysis Module analyses workforce headcount, trends and profiles, employee attrition and recruitment, compensation and benefit costs and employee qualifications, performance and satisfaction.",\n    "status": 0\n  }\n]\n')),(0,r.kt)("p",{parentName:"li"},"The response body contains information for each project that is returned, including the project ID that is used by other endpoints.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response code: 200 (OK)"))),(0,r.kt)("h2",{id:"get-a-list-of-dossiers"},"Get a list of dossiers"),(0,r.kt)("p",null,"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/dossiers")," to obtain a list of dossiers that meet specific search criteria."),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/searchForDossiers"},"GET /api/dossiers")),(0,r.kt)("p",null,"This endpoint allows the caller to get a list of dossiers in a specific project that meet specific search criteria. You use the authorization token returned during login as the value for ",(0,r.kt)("strong",{parentName:"p"},"X-MSTR-AuthToken"),". You use a project ID returned by GET /api/projects as the value for ",(0,r.kt)("strong",{parentName:"p"},"X-MSTR-ProjectID"),". You specify the search criteria using query parameters in the request; criteria can include the root folder ID, a search searchPattern such as Begins With or Exactly, and the certified status of the dossier."),(0,r.kt)("p",null,"To execute this API, you need to provide values for the following parameters in the request header:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"X-MSTR-AuthToken")," Authorization token generated by ",(0,r.kt)("inlineCode",{parentName:"li"},"POST /api/auth/login")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"X-MSTR-ProjectID")," Project ID generated by ",(0,r.kt)("inlineCode",{parentName:"li"},"GET /api/projects"))),(0,r.kt)("p",null,"Sample Request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Headers"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Parameters"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"swagger_GET_Dossiers_Params",src:a(94378).Z,width:"950",height:"692"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Body: Empty")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Curl"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET -b --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'  https://demo.microstrategy.com/MicroStrategyLibrary/api/projects'\n")))),(0,r.kt)("p",null,"Sample Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response Body"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "Dossier ID",\n    "name": "Dossier name",\n    "type": "Dossier type"\n  },\n  {\n    "id": "Dossier ID",\n    "name": "Dossier name",\n    "type": "Dossier type"\n  }\n]\n')),(0,r.kt)("p",{parentName:"li"},"The response body contains information for each dossier that is returned, including the dossier ID that is used by later endpoints.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response code: 200 (OK)"))),(0,r.kt)("h2",{id:"get-definition-of-a-dossier-including-the-filter-applied"},"Get definition of a dossier, including the filter applied"),(0,r.kt)("p",null,"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/dossiers/{dossierId}/definition")," to obtain the definition of the filter applied to a specific dossier, including the key and name of the filter."),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/getVisualizationList"},"GET /api/dossiers/{dossierId}/definition")),(0,r.kt)("p",null,"This endpoint allows the caller to get the definition of the filter applied to a specific dossier in a specific project. You use the authorization token returned during login as the value for ",(0,r.kt)("strong",{parentName:"p"},"X-MSTR-AuthToken"),". You use a project ID returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/projects")," as the value for ",(0,r.kt)("strong",{parentName:"p"},"X-MSTR-ProjectID"),". You use the dossier ID returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/dossiers")," in the path of the request URL. The response contains the hierarchy of the dossier, which includes the key, name, and summary of the filter applied to the dossier. This is the filter that is applied to the dossier when it is executed. It is also the filter that you will update in a later step."),(0,r.kt)("p",null,"To execute this API, you need to provide values for the following parameters in the request header:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"X-MSTR-AuthToken")," Authorization token generated by ",(0,r.kt)("inlineCode",{parentName:"li"},"POST /api/auth/login")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"X-MSTR-ProjectID")," Project ID generated by ",(0,r.kt)("inlineCode",{parentName:"li"},"GET /api/projects"))),(0,r.kt)("p",null,"Sample Request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Headers"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Parameters"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"swagger_GET_Dossiers_Def_Params",src:a(73939).Z,width:"950",height:"171"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Body: Empty"))),(0,r.kt)("p",null,"Sample response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response Body"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "string",\n  "name": "string",\n  "chapters": [\n    {\n      "key": "string",\n      "name": "string",\n      "pages": [\n        {\n          "key": "string",\n          "name": "string",\n          "visualizations": [\n            {\n              "key": "string",\n              "name": "string",\n              "units": {\n                "attributes": [\n                  {\n                    "id": "string",\n                    "type": 0,\n                    "name": "string"\n                  }\n                ],\n                "metrics": [\n                  {\n                    "id": "string",\n                    "type": 0,\n                    "name": "string"\n                  }\n                ]\n              }\n            }\n          ]\n        }\n      ],\n      "filters": [\n        {\n          "key": "string",\n          "name": "string",\n          "summary": "string",\n          "source": {\n            "id": "string",\n            "type": 0\n          }\n        }\n      ],\n      "filtersPanelStack": {\n        "key": "string"\n      }\n    }\n  ]\n}\n')),(0,r.kt)("p",{parentName:"li"},"The response body contains information about the specified dossier, including the filter ID, name, and definition that is used to update the filter in a later endpoint.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response code: 200 (OK)"))),(0,r.kt)("h2",{id:"create-a-dossier-instance-with-the-existing-filter-applied"},"Create a dossier instance with the existing filter applied"),(0,r.kt)("p",null,"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/dossiers/{dossierId}/instances")," to create an instance of a specific dossier with the existing filter applied."),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/createDossierInstance_2"},"POST /api/dossiers/{dossierId}/instances")),(0,r.kt)("p",null,"This endpoint allows the caller to execute a specific dossier in a specific project and create an instance of that dossier. The existing filter for the dossier will be applied when the dossier instance is created; this is the filter that was returned in the previous step. To execute this API, you need to provide values for the following request parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"X-MSTR-AuthToken")," Authorization token generated by ",(0,r.kt)("inlineCode",{parentName:"li"},"POST /api/auth/login")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"X-MSTR-ProjectID")," Project ID generated by ",(0,r.kt)("inlineCode",{parentName:"li"},"GET /api/projects")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"id")," Dossier ID generated by ",(0,r.kt)("inlineCode",{parentName:"li"},"GET /api/dossiers dossiers/{dossierId}/definition")," or other endpoints"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"body")," Filter definition for the filter key/name generated by ",(0,r.kt)("inlineCode",{parentName:"li"},"GET /api/dossiers dossiers/{dossierId}/definition"))),(0,r.kt)("p",null,'In this example, you execute a dossier called "Filters" (located in MicroStrategy Tutorial>Shared Reports. You use the authorization token returned by ',(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login")," as the value for X-MSTR-AuthToken, a project ID returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/projects"),", a dossier ID returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/dossiers"),', and a filter definition. The request body contains the definition of the existing filter that was created for the dossier; it is applied when the dossier is executed. The resulting HTTP response returns an HTTP status 201, indicating that the dossier instance has been created, and a JSON object containing the instance ID ("mid") of the dossier.'),(0,r.kt)("p",null,"Sample Request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Headers"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Parameters"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"swagger_POST_documents_parameters",src:a(28128).Z,width:"1280",height:"497"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Body: Empty")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Curl"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST -i -c --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c' --header 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F' -d '{}' 'http://demo.microstrategy.com/MicroStrategyLibrary/335FFA9640B5F1C1E0C0F3A469E627A8/instances'\n")))),(0,r.kt)("p",null,"Sample Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response Body"),(0,r.kt)("p",{parentName:"li"},"The REST server returns the instance ID of the dossier as the value of ",(0,r.kt)("inlineCode",{parentName:"p"},'"mid"'),". This value will be used by a later endpoint when an updated filter definition is applied to the dossier instance. The HTTP response code 201 indicates that the dossier instance has been created and is ready for additional actions to be performed."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "mid": "0ADDDAF34260EBA5D5FB73BFE5852AC3"\n  // ...\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response Code: 201 (Success: Created)"))),(0,r.kt)("h2",{id:"export-the-dossier-instance-to-pdf"},"Export the dossier instance to PDF"),(0,r.kt)("p",null,"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/documents/{id}/instances/{instanceId}/pdf")," to export the dossier to a PDF file. This allows you to see the results when the existing filter was applied."),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/exportDashboardToPdf"},"POST /api/documents/{id}/instances/{instanceId}/pdf")),(0,r.kt)("p",null,"This endpoint allows the caller to export a dossier instance to a PDF file using the instance ID and object ID of the dossier. In this example, you export the dossier to a PDF file using the dossier ID and the instance ID you created in previous steps. You provide the authorization token generated during login and the project ID in the request header, and the dossier ID and the instance ID in the request path. In the request body, you specify in JSON how to format the PDF file that you are exporting. If the call is successful, the resulting HTTP response returns a response body in either application/json or application/octet-stream format."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This endpoint is used only to allow you to view the results when the filter was applied. It is used again after an updated filter definition has been applied so that you can compare the two results and confirm that the results are different when the updated filter is applied.")),(0,r.kt)("p",null,"Sample Request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Headers"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Parameters"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"swagger_POST_documents_PDF_parameters",src:a(90430).Z,width:"1280",height:"609"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Body:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pageHeight": 11.69,\n  "pageWidth": 8.27,\n  "orientation": "AUTO",\n  "pageOption": "ALL",\n  "includeOverview": true,\n  "includeDetailedPages": true,\n  "waitingTimeBeforeExport": 0,\n  "includeHeader": true,\n  "includeFooter": true,\n  "filterSummary": "ALL"\n}\n')),(0,r.kt)("p",{parentName:"li"},"In the request body above, you specify the formatting options. You can change the formatting as desired.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Curl"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST -i -c --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c' --header 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F' -d '{}' 'https://demo.microstrategy.com/MicroStrategyLibrary/api/documents/335FFA9640B5F1C1E0C0F3A469E627A8/instances/0ADDDAF34260EBA5D5FB73BFE5852AC3/pdf'\n")))),(0,r.kt)("p",null,"Sample Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response Body"),(0,r.kt)("p",{parentName:"li"},'The REST server returns a JSON object containing the "data" property which includes the PDF data in Base64-encoded binary. To see a sample Base64-encoded binary data file or PDF file for the document, refer to the ',(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/analytics/export-to-pdf"},"Export to PDF")," topic."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": "JVBERi0xL..."\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response Code: 200 (Success: OK)"))),(0,r.kt)("h2",{id:"update-the-dossier-instance-with-a-revised-filter-definition-applied"},"Update the dossier instance, with a revised filter definition applied"),(0,r.kt)("h3",{id:"update-the-filter-definition"},"Update the filter definition"),(0,r.kt)("p",null,"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT /api/dossiers/{dossierId}/instances/{instanceId}/filters")," to execute the dossier instance with a revised definition for the existing filter applied."),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/setFilters"},"PUT /api/dossiers/{dossierId}/instances/{instanceId}/filters")),(0,r.kt)("p",null,"This endpoint allows the caller to execute a specific dossier instance with an updated filter definition. It updates the instance of the dossier with the new filter definition applied. To execute this API, you need to provide the following as values for the request parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Authorization token generated by ",(0,r.kt)("inlineCode",{parentName:"li"},"POST /api/auth/login")),(0,r.kt)("li",{parentName:"ul"},"Project ID generated by ",(0,r.kt)("inlineCode",{parentName:"li"},"GET /api/projects")),(0,r.kt)("li",{parentName:"ul"},"Dossier ID generated by ",(0,r.kt)("inlineCode",{parentName:"li"},"GET /api/dossiers dossiers/{dossierId}/definition")," or other endpoints"),(0,r.kt)("li",{parentName:"ul"},"Dossier instance ID generated by ",(0,r.kt)("inlineCode",{parentName:"li"},"POST /api/dossiers/{dossierId}/instances")),(0,r.kt)("li",{parentName:"ul"},"Filter definition in the body request parameter")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This has to be the same filter that was originally applied, but with different values.")),(0,r.kt)("p",null,'In this example, you execute a dossier called "Filters" (located in MicroStrategy Tutorial>Shared Reports. You use the authorization token returned during login as the value for ',(0,r.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken")," and provide the project ID, dossier ID, dossier instance ID, and filter definition. In the request body, you modify the values for the filter to be applied to the dossier when it is executed. The resulting HTTP response returns an HTTP status 204."),(0,r.kt)("p",null,"Sample Request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Parameters"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"swagger_POST_documents_parameters",src:a(28128).Z,width:"1280",height:"497"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Headers"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Body"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "key": "WF31A639ECE9E4193AC374F45892DFDB4",\n    "name": "cost",\n    "qualifier": "Between",\n    "constants": ["15000", "20000"],\n    "dataType": "Real"\n  }\n]\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Curl"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT --header \'Content-Type: application/json\' --header \'Accept: application/json\' --header \'X-MSTR-AuthToken: 70ui9meikiiqgh9u617tnflfcq\' --header \'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F\' -d \'[\n {\n  "key": "WF31A639ECE9E4193AC374F45892DFDB4",\n  "name": "cost",\n  "qualifier": "Between",\n  "constants": ["15000", "20000"],\n  "dataType": "Real"\n }\n]\' \'http://localhost:8282/consume-dev/api/dossiers/D04C958044B392149FCA7C8ECCFB0330/instances/A48B947B40E97E8A5298499CDE6A774A/filters\'\n/335FFA9640B5F1C1E0C0F3A469E627A8/instances\'\n')))),(0,r.kt)("h3",{id:"clear-all-selections-for-a-filter"},"Clear all selections for a filter"),(0,r.kt)("p",null,"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/dossiers/{dossierId}/instances")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT /api/dossiers/{dossierId}/instances/{instanceId}/filters")," to clear all of the current filter selections for an individual filter."),(0,r.kt)("p",null,"To clear all of the current filter selections for an individual filter, you call one of the following APIs and provide nothing but the filter name or ID:"),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/createDossierInstance_2"},"POST /api/dossiers/{dossierId}/instances")),(0,r.kt)("p",null,"Sample code for clearing filter selections using the filter ID:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "filters": [\n    {\n      "key": "WC8587FF21995453CBE5F0B66702BF56F"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Sample code for clearing filter selections using the filter name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "filters": [\n    {\n      "name": "Brand"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/setFilters"},"PUT /api/dossiers/{dossierId}/instances/{instanceId}/filters")),(0,r.kt)("p",null,"Sample code for clearing filter selections using the filter ID:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "key": "WC8587FF21995453CBE5F0B66702BF56F"\n  }\n]\n')),(0,r.kt)("p",null,"Sample code for clearing filter selections using the filter name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "Brand"\n  }\n]\n')),(0,r.kt)("h2",{id:"export-the-dossier-instance-to-pdf-again"},"Export the dossier instance to PDF again"),(0,r.kt)("p",null,"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/documents/{id}/instances/{instanceId}/pdf")," again to export the dossier to a PDF file. This allows you to see the results with a revised definition for the existing filter applied."),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/exportDashboardToPdf"},"POST /api/documents/{id}/instances/{instanceId}/pdf")),(0,r.kt)("p",null,"Just like step 6, this endpoint allows the caller to export the dossier instance to a PDF file using the instance ID and object ID of the dossier. However, the results are now different, based on the new filter definition that was applied when the dossier instance was executed in the previous step."),(0,r.kt)("h2",{id:"log-out"},"Log out"),(0,r.kt)("p",null,"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/logout")," to close the session."),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogout"},"POST /api/auth/logout")),(0,r.kt)("p",null,"This endpoint allows the caller to log out for the authenticated user with the MicroStrategy REST Server. In this example, you close the active user session by providing the authorization token, ",(0,r.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),", generated during login. If the call is successful, the resulting HTTP response returns an HTTP status code 204."),(0,r.kt)("p",null,"Sample Request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Headers"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Body: Empty")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Curl"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST -i -c --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'  https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/logout'\n")))),(0,r.kt)("p",null,"Sample Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Response code: 204 (Success: No Content)")))}m.isMDXComponent=!0},73939:function(e,t,a){t.Z=a.p+"assets/images/swagger_GET_Dossiers_Def_Params-f4d7a4a6b106e699a5bae6d655aa59ce.jpg"},94378:function(e,t,a){t.Z=a.p+"assets/images/swagger_GET_Dossiers_Params-7eef4fd62af68e895fe4dad5a7674293.jpg"},98013:function(e,t,a){t.Z=a.p+"assets/images/swagger_GET_Projects_Params-446d5ec557e4810c2d2d36cda7feccfd.jpg"},90430:function(e,t,a){t.Z=a.p+"assets/images/swagger_POST_documents_PDF_parameters-6c9d486d48aacc4a850b594302df3e3a.png"},28128:function(e,t,a){t.Z=a.p+"assets/images/swagger_POST_documents_parameters-99f2507f0c0c42bb865f80b8811ac5f2.png"}}]);