"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1368],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6560:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var n=a(3117),o=a(102),r=(a(7294),a(3905)),i=["components"],p={title:"Export to PDF",description:"The workflow for exporting a document to PDF includes the following sequence of REST API requests."},s=void 0,l={unversionedId:"common-workflows/export-to-pdf",id:"common-workflows/export-to-pdf",title:"Export to PDF",description:"The workflow for exporting a document to PDF includes the following sequence of REST API requests.",source:"@site/docs/common-workflows/export-to-pdf.md",sourceDirName:"common-workflows",slug:"/common-workflows/export-to-pdf",permalink:"/rest-api-docs/common-workflows/export-to-pdf",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/main/docs/common-workflows/export-to-pdf.md",tags:[],version:"current",lastUpdatedBy:"Liang, Jiapei",lastUpdatedAt:1663189678,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"Export to PDF",description:"The workflow for exporting a document to PDF includes the following sequence of REST API requests."},sidebar:"tutorialSidebar",previous:{title:"Manage Page-By Information",permalink:"/rest-api-docs/common-workflows/manage-page-by-information"},next:{title:"Manage the Schema",permalink:"/rest-api-docs/common-workflows/manage-the-schema/"}},c={},u=[{value:"Log In",id:"log-in",level:2},{value:"Get project list",id:"get-project-list",level:2},{value:"Create a document instance",id:"create-a-document-instance",level:2},{value:"Export a document to PDF",id:"export-a-document-to-pdf",level:2},{value:"Log out",id:"log-out",level:2}],d={toc:u};function m(e){var t=e.components,p=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-3835f147-fc3e-4e94-bc73-af51f57f7e83?ctx=documentation"},"REST API Playground"),"."),(0,r.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,r.kt)("p",null,"The workflow for exporting a document to PDF includes the following sequence of REST API requests."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#log-in"},"Log in")," User authenticates into the environment with ",(0,r.kt)("inlineCode",{parentName:"li"},"POST /api/auth/login")," and standard authentication"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#get-project-list"},"Get project list")," User obtains the project list from ",(0,r.kt)("inlineCode",{parentName:"li"},"GET /api/projects")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#create-a-document-instance"},"Create a document instance")," User executes a specific document in a specific project and creates a document instance"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#export-a-document-to-pdf"},"Export a document to PDF")," User exports the document to a PDF file"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#log-out"},"Log out")," User calls ",(0,r.kt)("inlineCode",{parentName:"li"},"POST /api/logout")," to close the session")),(0,r.kt)("p",null,"A detailed explanation of each step is provided below:"),(0,r.kt)("h2",{id:"log-in"},"Log In"),(0,r.kt)("p",null,"End Point: ",(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login")),(0,r.kt)("p",null,"This endpoint allows the caller to authenticate with the MicroStrategy REST Server. You provide the information used to create the session in the body of the request. In this example, you use standard authentication so you need to provide username, password, and loginMode (which specifies the authentication mode to use). If you omit an optional field, the REST Server uses the default value. If the call is successful, the resulting HTTP response returns an HTTP status code 204 and a response header containing ",(0,r.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),", the authorization token that will be used in subsequent requests."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"swagger_POST_auth_login",src:a(9566).Z,width:"1276",height:"648"})),(0,r.kt)("p",null,"REST API Explorer: ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Authentication/postLogin"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Authentication/postLogin")),(0,r.kt)("p",null,"Sample Request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Headers"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-http"},"'Content-Type: application/json'\n'Accept: application/json'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Body"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "loginMode": 1,\n  "username": "administrator",\n  "password": ""\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Curl"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -i -c ~/cookie-jar.txt --header \'Content-Type: application/json\' --header \'Accept: application/json\' -d \'{ \\\n"loginMode":1, \\\n"username": "administrator", \\\n"password": "" \\\n}\' https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/login\'\n')))),(0,r.kt)("p",null,"Sample Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response Headers"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pragma": "no-cache",\n  "x-mstr-authtoken": "nllmm5lpmkjdsj4d4etgdikc6c",\n  "cache-control": "no-cache, no-store, max-age=0, must-revalidate",\n  "date": "Wed, 16 Aug 2017 01:42:31 GMT",\n  "expires": "0",\n  "content-type": null\n}\n')),(0,r.kt)("p",{parentName:"li"},"The authorization token ",(0,r.kt)("inlineCode",{parentName:"p"},'"x-mstr-authtoken"')," is returned in the response header. It is used in other endpoints to authenticate the user.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response Body: Empty")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response Code: 204 (Success: No Content)"))),(0,r.kt)("h2",{id:"get-project-list"},"Get project list"),(0,r.kt)("p",null,"End Point: ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/projects")),(0,r.kt)("p",null,"This endpoint allows the caller to get the list of projects with the MicroStrategy REST Server. In this example, you get the list of projects in the MicroStrategy Tutorial metadata. You use the authorization token returned during login as the value for ",(0,r.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),". If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a response body containing a list of the active projects that the user session has access to."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"swagger_GET_projects",src:a(3121).Z,width:"1279",height:"749"})),(0,r.kt)("p",null,"REST API Explorer: ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#!/Projects/getProjects"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#!/Projects/getProjects")),(0,r.kt)("p",null,"Sample Request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Headers"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Body: Empty")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Curl"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET -b ~/cookie-jar.txt --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'  https://demo.microstrategy.com/MicroStrategyLibrary/api/projects'\n")))),(0,r.kt)("p",null,"Sample Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response Body"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n    "name": "MicroStrategy Tutorial",\n    "alias": "",\n    "description": "MicroStrategy Tutorial project and application set designed to illustrate the platform\'s rich functionality. The theme is an Electronics, Books, Movies and Music store. Employees, Inventory, Finance, Product Sales and Suppliers are analyzed.",\n    "status": 0\n  },\n  {\n    "id": "AF09B3E3458F78B4FBE4DEB68528BF7B",\n    "name": "Human Resources Analysis Module",\n    "alias": "",\n    "description": "The Human Resources Analysis Module analyses workforce headcount, trends and profiles, employee attrition and recruitment, compensation and benefit costs and employee qualifications, performance and satisfaction.",\n    "status": 0\n  }\n]\n')),(0,r.kt)("p",{parentName:"li"},"The response body contains information for each project that is returned, including the project ID that you use in later endpoints."))),(0,r.kt)("h2",{id:"create-a-document-instance"},"Create a document instance"),(0,r.kt)("p",null,"End Point: ",(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/documents/{id}/instances")),(0,r.kt)("p",null,'This endpoint allows the caller to execute a specific document in a specific project and create an instance of that document. In this example, you execute a document called "Casino Analysis" (located in MicroStrategy Tutorial>Shared Reports>MicroStrategy Platform Capabilities>MicroStrategy Report Services>Visual Insight). You use the authorization token returned in step 1 as the value for ',(0,r.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),' and provide the project ID and the document ID. In this example, you leave the request body empty. The resulting HTTP response returns an HTTP status 201 and a JSON object containing the instance ID ("mid") of the document.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"swagger_POST_documents",src:a(4732).Z,width:"1152",height:"907"})),(0,r.kt)("p",null,"REST API Explorer: ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Dossiers_and_Documents/createDocumentInstance"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Dossiers_and_Documents/createDocumentInstance")),(0,r.kt)("p",null,"Sample Request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Parameters"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"swagger_POST_documents_parameters",src:a(8128).Z,width:"1280",height:"497"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Headers"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Body: Empty")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Curl"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST -i -c ~/cookie-jar.txt --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c' --header 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F' -d '{}' 'http://demo.microstrategy.com/MicroStrategyLibrary/335FFA9640B5F1C1E0C0F3A469E627A8/instances'\n")))),(0,r.kt)("p",null,"Sample Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response Body"),(0,r.kt)("p",{parentName:"li"},'The REST server returns the instance ID of the document as the value of "mid".'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 0,\n  "mid": "0ADDDAF34260EBA5D5FB73BFE5852AC3"\n}\n')),(0,r.kt)("p",{parentName:"li"},"You can find the detailed parameter definitions in the Response Body on the Swagger page under Response Class -> Model.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response Code: 201 (Success: Created)"))),(0,r.kt)("h2",{id:"export-a-document-to-pdf"},"Export a document to PDF"),(0,r.kt)("p",null,"End Point: ",(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/documents/{id}/instances/{instanceId}/pdf")),(0,r.kt)("p",null,"This endpoint allows the caller to export the document to a PDF file (in the form of binary data with Base64 encoding) using the instance ID and object ID of the document. In this example, you export the document to a PDF file using the instance ID you created in the previous step. You provide the authorization token generated during login and the project ID in the request header, and the document ID and the instance ID of the document in the request path. In the request body, you specify in JSON how to format the PDF file that you are exporting. If the call is successful, the resulting HTTP response returns a response body in either ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"application/octet-stream")," format, depending on the Response Content Type you choose. If you choose ",(0,r.kt)("inlineCode",{parentName:"p"},"application/octet-stream")," format, the data will be returned in PDF format; if you choose a",(0,r.kt)("inlineCode",{parentName:"p"},"pplication/json"),", the data will be returned as Base64-encoded binary data and you will have to decode it. You can ",(0,r.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/downloads/RESTSDK/ConvertToPDF.zip"},"download sample Java code")," that converts the output of the endpoint to a PDF file."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"swagger_POST_documents_PDF",src:a(4195).Z,width:"1024",height:"904"})),(0,r.kt)("p",null,"REST API Explorer: ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#!/Dossiers_and_Documents/exportDashboardToPDF"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#!/Dossiers_and_Documents/exportDashboardToPDF")),(0,r.kt)("p",null,"Sample Request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Parameters"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"swagger_POST_documents_PDF_parameters",src:a(430).Z,width:"1280",height:"609"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Headers"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Body:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pageHeight": 11.69,\n  "pageWidth": 8.27,\n  "orientation": "AUTO",\n  "pageOption": "ALL",\n  "includeOverview": true,\n  "includeDetailedPages": true,\n  "waitingTimeBeforeExport": 0,\n  "includeHeader": true,\n  "includeFooter": true\n}\n')),(0,r.kt)("p",{parentName:"li"},"In the request body above, you specify the formatting options:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You set the page height to be 11.69 inches and the page width to be 8.27 inches, which is the size of A4 paper."),(0,r.kt)("li",{parentName:"ul"},'You set the exporting orientation to "AUTO", which means that the height and width of the PDF can be swapped to optimize exporting.'),(0,r.kt)("li",{parentName:"ul"},"You set the ",(0,r.kt)("inlineCode",{parentName:"li"},"pageOption")," to ALL, which means that you want to export all of the pages of the document."),(0,r.kt)("li",{parentName:"ul"},"You set ",(0,r.kt)("inlineCode",{parentName:"li"},"includeOverview")," to specify that you want the exported PDF to have an overview of the document."),(0,r.kt)("li",{parentName:"ul"},"You set ",(0,r.kt)("inlineCode",{parentName:"li"},"includeDetailedPages")," to specify that you want each visualization printed on an individual page."),(0,r.kt)("li",{parentName:"ul"},"You set ",(0,r.kt)("inlineCode",{parentName:"li"},"includeHeader")," to specify that you want the header to be printed on each page."),(0,r.kt)("li",{parentName:"ul"},"You set ",(0,r.kt)("inlineCode",{parentName:"li"},"includeFooter")," to specify that you want the footer to be printed on each page."),(0,r.kt)("li",{parentName:"ul"},"You set the ",(0,r.kt)("inlineCode",{parentName:"li"},"waitingTimeBefore Export"),' to "0" second to specify that export the document immediately.'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Curl"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST -i -c ~/cookie-jar.txt --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c' --header 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F' -d '{}' 'https://demo.microstrategy.com/MicroStrategyLibrary/api/documents/335FFA9640B5F1C1E0C0F3A469E627A8/instances/0ADDDAF34260EBA5D5FB73BFE5852AC3/pdf'\n")))),(0,r.kt)("p",null,"Sample Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response Body"),(0,r.kt)("p",{parentName:"li"},'The REST server returns a JSON object containing the "data" property which includes the PDF data in Base64-encoded binary. A sample Base64-encoded binary data file for the document can be viewed in the ',(0,r.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/downloads/RESTSDK/RESTAPIs/data.txt"},"data.txt")," file. A sample PDF file for the document can be viewed in the ",(0,r.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/downloads/RESTSDK/RESTAPIs/output.pdf"},"output.pdf")," file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": "JVBERi0xL..."\n}\n')),(0,r.kt)("p",{parentName:"li"},"You can find the detailed parameter definitions in the Response Body on the Swagger page under Response Class -> Model.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response Code: 200 (Success: OK)"))),(0,r.kt)("h2",{id:"log-out"},"Log out"),(0,r.kt)("p",null,"End Point: ",(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/auth/logout")),(0,r.kt)("p",null,"This endpoint allows the caller to log out for the authenticated user with the MicroStrategy REST Server. In this example, you close the active user session by providing the authorization token, ",(0,r.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),", generated during login. If the call is successful, the resulting HTTP response returns an HTTP status code 204."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"swagger_POST_auth_logout",src:a(1280).Z,width:"1275",height:"283"})),(0,r.kt)("p",null,"REST API Explorer: ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Authentication/postLogout"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Authentication/postLogout")),(0,r.kt)("p",null,"Sample Request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Headers"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Body: Empty")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Curl"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST -i -c ~/cookie-jar.txt --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'  https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/logout'\n")))),(0,r.kt)("p",null,"Sample Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Response code: 204")))}m.isMDXComponent=!0},3121:function(e,t,a){t.Z=a.p+"assets/images/swagger_GET_projects-e798412113caebe7ad46c376cb194f5e.png"},9566:function(e,t,a){t.Z=a.p+"assets/images/swagger_POST_auth_login-2be51e6b11363604a15e87b5c142688e.png"},1280:function(e,t,a){t.Z=a.p+"assets/images/swagger_POST_auth_logout-8df2db0375b9c25a2d75451ebff23993.png"},4732:function(e,t,a){t.Z=a.p+"assets/images/swagger_POST_documents-b899f2f4eb8323a1375778fa5e6677bc.png"},4195:function(e,t,a){t.Z=a.p+"assets/images/swagger_POST_documents_PDF-e0e2b1f7d00745cb8e8401382bbc24ac.png"},430:function(e,t,a){t.Z=a.p+"assets/images/swagger_POST_documents_PDF_parameters-6c9d486d48aacc4a850b594302df3e3a.png"},8128:function(e,t,a){t.Z=a.p+"assets/images/swagger_POST_documents_parameters-99f2507f0c0c42bb865f80b8811ac5f2.png"}}]);