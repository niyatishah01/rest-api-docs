"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[2980],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(t),m=o,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return t?a.createElement(f,i(i({ref:n},l),{},{components:t})):a.createElement(f,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},40220:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return u}});var a=t(83117),o=t(80102),r=(t(67294),t(3905)),i=["components"],c={title:"Create a datasource",description:"The workflow for creating a datasource includes the following sequence of REST API requests."},s=void 0,d={unversionedId:"common-workflows/administration/datasource-management/create-a-datasource",id:"common-workflows/administration/datasource-management/create-a-datasource",title:"Create a datasource",description:"The workflow for creating a datasource includes the following sequence of REST API requests.",source:"@site/docs/common-workflows/administration/datasource-management/create-a-datasource.md",sourceDirName:"common-workflows/administration/datasource-management",slug:"/common-workflows/administration/datasource-management/create-a-datasource",permalink:"/rest-api-docs/common-workflows/administration/datasource-management/create-a-datasource",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/datasource-management/create-a-datasource.md",tags:[],version:"current",lastUpdatedBy:"kezhou-mstr",lastUpdatedAt:1701121876,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"Create a datasource",description:"The workflow for creating a datasource includes the following sequence of REST API requests."},sidebar:"tutorialSidebar",previous:{title:"Datasource management",permalink:"/rest-api-docs/common-workflows/administration/datasource-management/"},next:{title:"Update a datasource",permalink:"/rest-api-docs/common-workflows/administration/datasource-management/update-a-datasource"}},l={},u=[{value:"Create datasource login",id:"create-datasource-login",level:2},{value:"Create a datasource connection",id:"create-a-datasource-connection",level:2},{value:"Create a database source",id:"create-a-database-source",level:2}],p={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The workflow for creating a datasource includes the following sequence of REST API requests."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#create-datasource-login"},"Create a datasource login")," ",(0,r.kt)("inlineCode",{parentName:"li"},"POST /api/datasources/logins")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#create-a-datasource-connection"},"Create a datasource connection")," ",(0,r.kt)("inlineCode",{parentName:"li"},"POST /api/datasources/connections")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#create-a-database-source"},"Create a database source")," ",(0,r.kt)("inlineCode",{parentName:"li"},"POST /api/datasources"))),(0,r.kt)("p",null,"A detailed description of each step of this request is listed down below."),(0,r.kt)("h2",{id:"create-datasource-login"},"Create datasource login"),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datasource%20Management/createDatasourceLogin"},"POST /api/datasources/logins")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),".")),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n')),(0,r.kt)("p",null,"Sample Request Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Test_Snow_Login",\n  "password": "mstr",\n  "username": "mstr",\n  "description": ""\n}\n')),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'https://demo.microstrategy.com/MicroStrategyLibrary/api/datasources/logins\' \\\n--header \'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "name": "Test_Snow_Login",\n    "password": "mstr",\n    "username": "mstr",\n    "description": ""\n}\'\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Test_Snow_Login",\n  "id": "34B407AA6B43C17B8286A3AEEA775DB3",\n  "description": "",\n  "dateCreated": "2021-08-04T15:44:35.000+0000",\n  "dateModified": "2021-08-04T15:44:35.000+0000",\n  "acg": 255,\n  "username": "mstr"\n}\n')),(0,r.kt)("p",null,"Sample Response Code: 201 (Datasource login is created successfully.)"),(0,r.kt)("h2",{id:"create-a-datasource-connection"},"Create a datasource connection"),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datasource%20Management/createDatabaseConnection"},"POST /api/datasources/connections")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,r.kt)("p",{parentName:"admonition"},"Obtain the datasource login id from the response body of the previous call. From our example, it is ",(0,r.kt)("inlineCode",{parentName:"p"},'"34B407AA6B43C17B8286A3AEEA775DB3"'))),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n')),(0,r.kt)("p",null,"Sample Request Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Test_Snow_Connection",\n  "description": "",\n  "executionMode": "synchronous",\n  "maxCancelAttemptTime": 60,\n  "maxQueryExeTime": 0,\n  "maxConnectionAttemptTime": 60,\n  "connectionLifetime": 36000,\n  "connectionIdleTimeout": 60000,\n  "charEncodingWindows": "multibyte",\n  "charEncodingUnix": "utf8",\n  "tablePrefix": "",\n  "connectionString": "DSN=SNOWFLAKE_DSN",\n  "parameterizedQueries": true,\n  "extendedFetch": false,\n  "database": {\n    "login": {\n      "id": "{datasource_login_id}",\n      "name": "Test_snow_login"\n    },\n    "type": "snow_flake",\n    "version": "snowflake_1x"\n  },\n  "driverType": "odbc",\n  "oauthParameter": ""\n}\n')),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'https://demo.microstrategy.com/MicroStrategyLibrary/api/datasources/connections\' \\\n--header \'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "name": "Test_Snow_Connection",\n    "description": "",\n    "executionMode": "synchronous",\n    "maxCancelAttemptTime": 60,\n    "maxQueryExeTime": 0,\n    "maxConnectionAttemptTime": 60,\n    "connectionLifetime": 36000,\n    "connectionIdleTimeout": 60000,\n    "charEncodingWindows": "multibyte",\n    "charEncodingUnix": "utf8",\n    "tablePrefix": "",\n    "connectionString": "DSN=SNOWFLAKE_DSN",\n    "parameterizedQueries": true,\n    "extendedFetch": false,\n    "database": {\n        "login": {\n            "id": "34B407AA6B43C17B8286A3AEEA775DB3",\n            "name": "Test_snow_login"\n        },\n        "type": "snow_flake",\n        "version": "snowflake_1x"\n\n    },\n    "driverType": "odbc",\n    "oauthParameter": ""\n}\'\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Test_Snow_Connection",\n  "id": "CDCBE48C1342CBC68FCE4393AF33A1CC",\n  "description": "",\n  "acg": 0,\n  "executionMode": "synchronous",\n  "maxCancelAttemptTime": 60,\n  "maxQueryExeTime": 0,\n  "maxConnectionAttemptTime": 60,\n  "connectionLifetime": 36000,\n  "connectionIdleTimeout": 60000,\n  "charEncodingWindows": "multibyte",\n  "charEncodingUnix": "utf8",\n  "tablePrefix": "",\n  "connectionString": "DSN=SNOWFLAKE_DSN",\n  "parameterizedQueries": true,\n  "extendedFetch": false,\n  "database": {\n    "login": {\n      "id": "34B407AA6B43C17B8286A3AEEA775DB3",\n      "name": "Test_Snow_Login"\n    },\n    "type": "snow_flake",\n    "version": "snowflake_1x"\n  },\n  "driverType": "odbc",\n  "oauthParameter": ""\n}\n')),(0,r.kt)("p",null,"Sample Response Code: 201 (Datasource connection is created successfully.)"),(0,r.kt)("h2",{id:"create-a-database-source"},"Create a database source"),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datasource%20Management/createDatasource"},"POST /api/datasources")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,r.kt)("p",{parentName:"admonition"},"Obtain the datasource connection id from the response body of the previous call. From our example, it is ",(0,r.kt)("inlineCode",{parentName:"p"},'"CDCBE48C1342CBC68FCE4393AF33A1CC"'))),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datasource%20Management/createDatasource"},"POST /api/datasources")),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n')),(0,r.kt)("p",null,"Sample Request Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Test_Snow_Source",\n  "description": "",\n  "datasourceType": "normal",\n  "database": {\n    "connection": {\n      "id": "{connectionId}"\n    }\n  },\n  "tablePrefix": "",\n  "odbcVersion": "version3x",\n  "intermediateStoreDbName": "",\n  "intermediateStoreTableSpaceName": "",\n  "dbms": {\n    "id": "86AC7FD44D2B4B0FB65AE948EF19BDD0"\n  }\n}\n')),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'https://demo.microstrategy.com/MicroStrategyLibrary/api/datasources\' \\\n--header \'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "name": "Test_Snow_Source",\n    "description": "",\n    "datasourceType": "normal",\n    "database": {\n        "connection": {\n            "id": "{{connectionId}}"\n        }\n    },\n    "tablePrefix": "",\n    "odbcVersion": "version3x",\n    "intermediateStoreDbName": "",\n    "intermediateStoreTableSpaceName": "",\n    "dbms": {\n        "id": "86AC7FD44D2B4B0FB65AE948EF19BDD0"\n    }\n}\'\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "604F7EB2AF4E8CCB93F0C48071A3F466",\n  "name": "Test_Snow_Source",\n  "description": "",\n  "dateCreated": "2021-08-03T20:58:56.000+0000",\n  "dateModified": "2021-08-03T20:58:56.000+0000",\n  "acg": 255,\n  "datasourceType": "normal",\n  "database": {\n    "type": "snow_flake",\n    "version": "snowflake_1x",\n    "connection": {\n      "name": "Test_Snow_Connection",\n      "id": "1E6897CFC14887C5A1B7D19E0D023DDF",\n      "isEmbedded": false\n    }\n  },\n  "tablePrefix": "",\n  "odbcVersion": "version3x",\n  "intermediateStoreDbName": "",\n  "intermediateStoreTableSpaceName": "",\n  "dbms": {\n    "name": "Snowflake",\n    "id": "86AC7FD44D2B4B0FB65AE948EF19BDD0"\n  },\n  "owner": {\n    "name": "MSTR User",\n    "id": "7FC05A65473CE2FD845CE6A1D3F13233"\n  }\n}\n')),(0,r.kt)("p",null,"Sample Response Code: 201 (A new database source is created successfully.)"))}m.isMDXComponent=!0}}]);