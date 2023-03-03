"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3113],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(a),m=o,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},31821:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var n=a(83117),o=a(80102),r=(a(67294),a(3905)),i=["components"],c={title:"Delete a datasource",description:"The workflow for deleting and cleaning up a datasource includes the following sequence of REST API requests."},s=void 0,l={unversionedId:"common-workflows/administration/datasource-management/delete-a-datasource",id:"common-workflows/administration/datasource-management/delete-a-datasource",title:"Delete a datasource",description:"The workflow for deleting and cleaning up a datasource includes the following sequence of REST API requests.",source:"@site/docs/common-workflows/administration/datasource-management/delete-a-datasource.md",sourceDirName:"common-workflows/administration/datasource-management",slug:"/common-workflows/administration/datasource-management/delete-a-datasource",permalink:"/rest-api-docs/common-workflows/administration/datasource-management/delete-a-datasource",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/datasource-management/delete-a-datasource.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1677861063,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{title:"Delete a datasource",description:"The workflow for deleting and cleaning up a datasource includes the following sequence of REST API requests."},sidebar:"tutorialSidebar",previous:{title:"Update job priorities for datasource",permalink:"/rest-api-docs/common-workflows/administration/datasource-management/update-job-priorities-for-datasource"},next:{title:"Get applicable properties for a datasource",permalink:"/rest-api-docs/common-workflows/administration/datasource-management/get-datasource-applicable-advanced-properties"}},d={},u=[{value:"Delete a datasource",id:"delete-a-datasource",level:2},{value:"Delete a datasource connection",id:"delete-a-datasource-connection",level:2},{value:"Delete a datasource login",id:"delete-a-datasource-login",level:2}],p={toc:u};function m(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The workflow for deleting and cleaning up a datasource includes the following sequence of REST API requests."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#delete-a-datasource"},"Delete a datasource")," ",(0,r.kt)("inlineCode",{parentName:"li"},"DELETE /api/datasources/{datasourceId}")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#delete-a-datasource-connection"},"Delete a datasource connection")," ",(0,r.kt)("inlineCode",{parentName:"li"},"DELETE /api/datasources/connections/{connectionId}")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#delete-a-datasource-login"},"Delete a datasource login")," ",(0,r.kt)("inlineCode",{parentName:"li"},"DELETE /api/datasources/logins/{loginId}"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-2da893be-a6e9-449a-95ae-749b5906bb27?ctx=documentation"},"REST API Playground"),"."),(0,r.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,r.kt)("h2",{id:"delete-a-datasource"},"Delete a datasource"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,r.kt)("p",{parentName:"admonition"},"You can obtain the datasource ID from searching for the datasource by name with the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/datasources"),".")),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datasource%20Management/deleteDatasource"},"DELETE /api/datasources/{datasourceId}")),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location -g --request DELETE 'https://demo.microstrategy.com/MicroStrategyLibrary/api/datasources/604F7EB2AF4E8CCB93F0C48071A3F466' \\\n--header 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch'\n")),(0,r.kt)("p",null,"Sample Response Body: Empty"),(0,r.kt)("p",null,"Sample Response Code: 204 (A database source is deleted successfully.)"),(0,r.kt)("h2",{id:"delete-a-datasource-connection"},"Delete a datasource connection"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,r.kt)("p",{parentName:"admonition"},"You can obtain the connection ID from searching for datasource connections with the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/datasources/connections"),".")),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datasource%20Management/deleteDatabaseConnectionById"},"DELETE /api/datasources/connections/{connectionId}")),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location -g --request DELETE 'https://demo.microstrategy.com/MicroStrategyLibrary/api/datasources/connections/CDCBE48C1342CBC68FCE4393AF33A1CC' \\\n--header 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' \\\n")),(0,r.kt)("p",null,"Sample Response Body: Empty"),(0,r.kt)("p",null,"Sample Response Code: 204 (Datasource connection is deleted successfully.)"),(0,r.kt)("h2",{id:"delete-a-datasource-login"},"Delete a datasource login"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,r.kt)("p",{parentName:"admonition"},"You can obtain the login ID from viewing datasource logins with the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/datasources/logins"),".")),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datasource%20Management/deleteDatasource"},"DELETE /api/datasources/{datasourceId}")),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location -g --request DELETE 'https://demo.microstrategy.com/MicroStrategyLibrary/api/datasources/logins/34B407AA6B43C17B8286A3AEEA775DB3' \\\n--header 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' \\\n")),(0,r.kt)("p",null,"Sample Response Body: Empty"),(0,r.kt)("p",null,"Sample Response Code: 204 (Datasource login is deleted successfully.)"))}m.isMDXComponent=!0}}]);