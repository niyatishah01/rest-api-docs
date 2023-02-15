"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8985],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3726:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var a=r(3117),n=r(102),o=(r(7294),r(3905)),i=["components"],l={title:"Handle REST API errors",description:"This page provides a guidance on designing exception workflows when using MicroStrategy REST API."},s=void 0,d={unversionedId:"getting-started/handle-rest-api-exceptions",id:"getting-started/handle-rest-api-exceptions",title:"Handle REST API errors",description:"This page provides a guidance on designing exception workflows when using MicroStrategy REST API.",source:"@site/docs/getting-started/handle-rest-api-exceptions.md",sourceDirName:"getting-started",slug:"/getting-started/handle-rest-api-exceptions",permalink:"/rest-api-docs/getting-started/handle-rest-api-exceptions",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/getting-started/handle-rest-api-exceptions.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1676479687,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{title:"Handle REST API errors",description:"This page provides a guidance on designing exception workflows when using MicroStrategy REST API."},sidebar:"tutorialSidebar",previous:{title:"Field selection for data API v2 result-fetching endpoints",permalink:"/rest-api-docs/getting-started/improve-performance-by-working-with-partial-resources/field-selection-for-data-api-v2-result-fetching-endpoints"},next:{title:"MicroStrategy REST API Explorer",permalink:"/rest-api-docs/getting-started/microstrategy-rest-api-explorer"}},c={},u=[{value:"1. Understand the status code",id:"1-understand-the-status-code",level:2},{value:"2. Look for more information in payload",id:"2-look-for-more-information-in-payload",level:2},{value:"3. Error code in the response body",id:"3-error-code-in-the-response-body",level:2},{value:"4. IServer error code",id:"4-iserver-error-code",level:2},{value:"Status code explained",id:"status-code-explained",level:2},{value:"200 level status code",id:"200-level-status-code",level:3},{value:"200 OK",id:"200-ok",level:4},{value:"201 Created",id:"201-created",level:4},{value:"202 Accepted",id:"202-accepted",level:4},{value:"204 No Content",id:"204-no-content",level:4},{value:"400 level status code",id:"400-level-status-code",level:3},{value:"400 Bad Request",id:"400-bad-request",level:4},{value:"401 Unauthorized",id:"401-unauthorized",level:4},{value:"403 Forbidden",id:"403-forbidden",level:4},{value:"404 Not Found",id:"404-not-found",level:4},{value:"500 level status code",id:"500-level-status-code",level:3},{value:"500 Internal Server Error",id:"500-internal-server-error",level:4},{value:"501 Not Implemented",id:"501-not-implemented",level:4},{value:"502 Bad Gateway",id:"502-bad-gateway",level:4},{value:"503 Service Unavailable",id:"503-service-unavailable",level:4}],p={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When developers use MicroStrategy REST APIs to build dynamic applications, they need to add code to handle error conditions. The instructions below are designed to provide a guidance on designing exception workflows when using MicroStrategy REST API."),(0,o.kt)("h2",{id:"1-understand-the-status-code"},"1. Understand the status code"),(0,o.kt)("p",null,"Determine whether the REST API request succeeded or failed, based on the HTTP status response code returned."),(0,o.kt)("p",null,"The HTTP status response code returned by the REST API call indicates whether the request succeeded or failed."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"HTTP status response code"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"2xx (Successful)"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The request was successfully received, understood, and accepted")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"3xx (Redirection)"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Further action needs to be taken in order to complete the request")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"4xx (Client error)"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The request contains bad syntax or cannot be fulfilled (bad request, authorization issue, etc.)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"5xx (Server error)"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The server failed to fulfill an apparently valid request")))),(0,o.kt)("p",null,"We follow RFC standards to define our HTTP status codes. You can refer to ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"},"HTTP response status code")," to understand the meaning of each status code."),(0,o.kt)("h2",{id:"2-look-for-more-information-in-payload"},"2. Look for more information in payload"),(0,o.kt)("p",null,"If the REST API request failed and the response is ",(0,o.kt)("inlineCode",{parentName:"p"},"application/json"),", there is more information in the response body in JSON format."),(0,o.kt)("h2",{id:"3-error-code-in-the-response-body"},"3. Error code in the response body"),(0,o.kt)("p",null,"Look for the error code in response body to determine if it provides insight into what caused the exception and use that insight to create meaningful text for the error message."),(0,o.kt)("p",null,"When you encounter REST API error, you may receive an error message that looks like the sample code below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "ERR001",\n  "message": "MicroStrategy Intelligence Server is not configured to support LDAP authentication.",\n  "iServerCode": -214720549\n}\n')),(0,o.kt)("p",null,"The value of ",(0,o.kt)("inlineCode",{parentName:"p"},"code")," is a MicroStrategy REST API Server code. The table below provides a general description of each error code. Use the error code to create meaningful text for the error message that will help users when they encounter errors."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Error code"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"ERR001"),(0,o.kt)("td",{parentName:"tr",align:"left"},"General application issue")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"ERR002"),(0,o.kt)("td",{parentName:"tr",align:"left"},"IServer error")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"ERR003"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Authentication error")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"ERR004"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Resource not found")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"ERR005"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Missing required information")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"ERR006"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Invalid input")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"ERR007"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Missing required field")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"ERR008"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Inbox message not ready")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"ERR009"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Session invalid or timeout")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"ERR0010"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Not supported")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"ERR0013"),(0,o.kt)("td",{parentName:"tr",align:"left"},"IServer unreachable")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"ERR0014"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Insufficient privileges")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"ERR0015"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Object already exists")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"ERR0016"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Service not available")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"ERR0017"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Insufficient permission")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"ERR0020"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Dashboard prompt not supported")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"ERR0021"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Invalid configuration property")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"ERR0R22"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Service TLS validation issue")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"ERR0023"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Secret Key configuration issue")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"ERR0024"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Trust store configuration issue")))),(0,o.kt)("h2",{id:"4-iserver-error-code"},"4. IServer error code"),(0,o.kt)("p",null,"The MicroStrategy error message may also contain an integer value for ",(0,o.kt)("inlineCode",{parentName:"p"},"iServerCode"),". This integer value maps to a constant value in the ",(0,o.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/ReferenceFiles/reference/com/microstrategy/utils/localization/WebAPIErrorCodes.html"},"WebAPIErrorCodes")," class. There are many error codes in this class. You should look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"iServerCode")," error and decide if you think it provides meaningful context. If so, you may want to handle it in your code."),(0,o.kt)("p",null,"If needed, you can also find more information in the Library Sever's error log, such as stack traces."),(0,o.kt)("h2",{id:"status-code-explained"},"Status code explained"),(0,o.kt)("h3",{id:"200-level-status-code"},"200 level status code"),(0,o.kt)("h4",{id:"200-ok"},"200 OK"),(0,o.kt)("p",null,"A 200 status code means the request is succeeded. The response body varies based on the request. Please see the ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html"},"REST API docs")," for examples."),(0,o.kt)("h4",{id:"201-created"},"201 Created"),(0,o.kt)("p",null,"A 201 status code means a new resource was created as a result. You typically can find the resource ID in the response body or the response headers. The response body varies based on the request."),(0,o.kt)("h4",{id:"202-accepted"},"202 Accepted"),(0,o.kt)("p",null,'A 202 status code means the request has been received but not yet acted upon. It is used for asynchronous execution requests. You typically will get an ID that you can use a different API to fetch the result or check the status of the execution. We only support asynchronous execution on requests that might take a long time to execute. When it is supported, a request header "Prefer" with the value "respond-async" can be used. Please check the ',(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html"},"REST API docs")," for examples."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For creating an instance of report, document, cube, and dossier, you can use the instance ID to fetch the status and get the result."),(0,o.kt)("li",{parentName:"ul"},"For reloading schema, you will get a task ID."),(0,o.kt)("li",{parentName:"ul"},"For exporting to PDF, you will get a result ID.")),(0,o.kt)("h4",{id:"204-no-content"},"204 No Content"),(0,o.kt)("p",null,"A 204 status code means the request is succeeded, but there is no data in the response body."),(0,o.kt)("h3",{id:"400-level-status-code"},"400 level status code"),(0,o.kt)("h4",{id:"400-bad-request"},"400 Bad Request"),(0,o.kt)("p",null,"A 400 error means the server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing)."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "ERR006",\n  "message": "Invalid JSON",\n  "ticketId": "b722e689f6104202972f7675563b9f97"\n}\n')),(0,o.kt)("h4",{id:"401-unauthorized"},"401 Unauthorized"),(0,o.kt)("p",null,"A 401 error means you don't have a valid session state in the request or the session state has expired."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "ERR003",\n  "message": "Login failed",\n  "ticketId": "07c12ef604c54902a5f03d66a75992f4"\n}\n')),(0,o.kt)("h4",{id:"403-forbidden"},"403 Forbidden"),(0,o.kt)("p",null,"A 403 error means you have a valid auth token, but you don't have sufficient permissions to perform the action."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "ERR017",\n  "iServerCode": -2147214568,\n  "message": "(User \'Guest\' does not have Read and Write access to the User object \'Public / Guest\' in Project \'Configuration\' with ID \'38A062302D4411D28E71006008960167\'.)",\n  "ticketId": "6c37df9f617d4cb9a7c50ce9138331c8"\n}\n')),(0,o.kt)("h4",{id:"404-not-found"},"404 Not Found"),(0,o.kt)("p",null,"A 404 error means the requested endpoint doesn't exist, or the endpoint is valid but the resource does not exist. You might not always get a response JSON for this status code depending on your URL. MicroStrategy REST API also uses this status code for not supported HTTP methods."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "ERR004",\n  "message": "HTTP 404 Not Found",\n  "ticketId": "1cc703db10a34141b60209827e988676"\n}\n')),(0,o.kt)("h3",{id:"500-level-status-code"},"500 level status code"),(0,o.kt)("p",null,"If you receive 500 level status code, you may not receive a JSON response body."),(0,o.kt)("h4",{id:"500-internal-server-error"},"500 Internal Server Error"),(0,o.kt)("p",null,"With a 500 error code, you will get a JSON in the response body. You can check REST API Server or Intelligence Server error log for more information."),(0,o.kt)("h4",{id:"501-not-implemented"},"501 Not Implemented"),(0,o.kt)("p",null,"A 501 error means the request method is not supported by the server and cannot be handled."),(0,o.kt)("h4",{id:"502-bad-gateway"},"502 Bad Gateway"),(0,o.kt)("p",null,"A 502 error means the client is having difficulty connecting to the server. Your cloud infrastructure might not be working correctly."),(0,o.kt)("h4",{id:"503-service-unavailable"},"503 Service Unavailable"),(0,o.kt)("p",null,"A 503 error means your server is down or overloaded. Your cloud infrastructure might not be working correctly."))}m.isMDXComponent=!0}}]);