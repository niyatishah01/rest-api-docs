"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3545],{3905:function(e,a,t){t.d(a,{Zo:function(){return l},kt:function(){return m}});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},l=function(e){var a=p(e.components);return n.createElement(c.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return t?n.createElement(k,i(i({ref:a},l),{},{components:t})):n.createElement(k,i({ref:a},l))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},74725:function(e,a,t){t.r(a),t.d(a,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var n=t(83117),o=t(80102),r=(t(67294),t(3905)),i=["components"],s={title:"Update a datasource",description:"This workflow sample demonstrates how to update a database source, datasource connection, and datasource login."},c=void 0,p={unversionedId:"common-workflows/administration/datasource-management/update-a-datasource",id:"common-workflows/administration/datasource-management/update-a-datasource",title:"Update a datasource",description:"This workflow sample demonstrates how to update a database source, datasource connection, and datasource login.",source:"@site/docs/common-workflows/administration/datasource-management/update-a-datasource.md",sourceDirName:"common-workflows/administration/datasource-management",slug:"/common-workflows/administration/datasource-management/update-a-datasource",permalink:"/rest-api-docs/common-workflows/administration/datasource-management/update-a-datasource",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/datasource-management/update-a-datasource.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1680880277,formattedLastUpdatedAt:"Apr 7, 2023",frontMatter:{title:"Update a datasource",description:"This workflow sample demonstrates how to update a database source, datasource connection, and datasource login."},sidebar:"tutorialSidebar",previous:{title:"Create a datasource",permalink:"/rest-api-docs/common-workflows/administration/datasource-management/create-a-datasource"},next:{title:"Add and remove datasource from project",permalink:"/rest-api-docs/common-workflows/administration/datasource-management/add-and-remove-datasource-from-project"}},l={},d=[{value:"Update a database source",id:"update-a-database-source",level:2},{value:"Update a datasource connection",id:"update-a-datasource-connection",level:2},{value:"Update a datasource login",id:"update-a-datasource-login",level:2}],u={toc:d};function m(e){var a=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This workflow sample demonstrates how to update a database source, datasource connection, and datasource login."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#update-a-database-source"},"Update database source.")," ",(0,r.kt)("inlineCode",{parentName:"li"},"PATCH /api/datasources/{datasourceId}")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#update-a-datasource-connection"},"Update datasource connection.")," ",(0,r.kt)("inlineCode",{parentName:"li"},"PATCH /api/datasources/connections/{connectionId}")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#update-a-datasource-login"},"Update datasource login.")," ",(0,r.kt)("inlineCode",{parentName:"li"},"PATCH /api/datasources/logins/{loginId}"))),(0,r.kt)("p",null,"A detailed description of each step of this request is listed down below."),(0,r.kt)("h2",{id:"update-a-database-source"},"Update a database source"),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datasource%20Management/updateDatasource"},"PATCH /api/datasources/{datasourceId}")),(0,r.kt)("p",null,"This endpoint allows the caller to update a database source with the MicroStrategy REST Server. You use the authorization token returned during login as the value for ",(0,r.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),". You can find the datasourceId using the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/datasources"),". If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a response body containing a info for the updated database source."),(0,r.kt)("p",null,"Sample Request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Headers"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Body:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "operationList": [\n    {\n      "op": "replace",\n      "path": "/description",\n      "value": "Test snowflake database source"\n    }\n  ]\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Curl"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location -g --request PATCH \'https://demo.microstrategy.com/MicroStrategyLibrary/api/datasources/{{datasourceId}}\' \\\n--header \'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "operationList": [\n        {\n            "op": "replace",\n            "path": "/description",\n            "value": "Test snowflake database source"\n        }\n    ]\n}\'\n')))),(0,r.kt)("p",null,"Sample Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response Body"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "D6C2B40858421FAF457501A620908C00",\n  "name": "Test_Snow_Source",\n  "description": "Test snowflake database source",\n  "dateCreated": "2021-08-03T20:04:56.000+0000",\n  "dateModified": "2021-08-03T20:05:15.000+0000",\n  "acg": 255,\n  "datasourceType": "normal",\n  "database": {\n    "type": "snow_flake",\n    "version": "snowflake_1x",\n    "connection": {\n      "name": "Test_Snow_Connection",\n      "id": "00FBD7497E42AB6BCDDDD8A986BFBFF2",\n      "isEmbedded": false\n    }\n  },\n  "tablePrefix": "",\n  "odbcVersion": "version3x",\n  "intermediateStoreDbName": "",\n  "intermediateStoreTableSpaceName": "",\n  "dbms": {\n    "name": "Snowflake",\n    "id": "86AC7FD44D2B4B0FB65AE948EF19BDD0"\n  },\n  "owner": {\n    "name": "MSTR User",\n    "id": "7FC05A65473CE2FD845CE6A1D3F13233"\n  }\n}\n')),(0,r.kt)("p",{parentName:"li"},"Sample Response Code: 200 (Update database source.)"))),(0,r.kt)("h2",{id:"update-a-datasource-connection"},"Update a datasource connection"),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datasource%20Management/updateDatasourceConnection"},"PATCH /api/datasources/connections/{connectionId}")),(0,r.kt)("p",null,"This endpoint allows the caller to update a datasource connection with the MicroStrategy REST Server. You use the authorization token returned during login as the value for ",(0,r.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),". You can find the connectionId using the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/datasources/connections"),". If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a response body containing info for the updated datasource connection."),(0,r.kt)("p",null,"Sample Request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Headers"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Body:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "operationList": [\n    {\n      "op": "replace",\n      "path": "/description",\n      "value": "Test Snowflake Connection"\n    }\n  ]\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Curl"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location -g --request PATCH \'https://demo.microstrategy.com/MicroStrategyLibrary/api/datasources/connections/{{connectionId}}\' \\\n--header \'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "operationList": [\n        {\n            "op": "replace",\n            "path": "/description",\n            "value": "Test Snowflake Connection"\n        }\n    ]\n}\'\n')))),(0,r.kt)("p",null,"Sample Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response Body"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Test_Snow_Connection",\n  "id": "00FBD7497E42AB6BCDDDD8A986BFBFF2",\n  "description": "Test Snowflake Connection",\n  "acg": 255,\n  "executionMode": "synchronous",\n  "maxCancelAttemptTime": 60,\n  "maxQueryExeTime": 0,\n  "maxConnectionAttemptTime": 60,\n  "connectionLifetime": 36000,\n  "connectionIdleTimeout": 60000,\n  "charEncodingWindows": "multibyte",\n  "charEncodingUnix": "utf8",\n  "tablePrefix": "",\n  "connectionString": "DSN=SNOWFLAKE_DSN",\n  "parameterizedQueries": true,\n  "extendedFetch": false,\n  "database": {\n    "login": {\n      "id": "E0A644366147B08B570B6DB4E15119EF",\n      "name": "Test_Snow_Login"\n    },\n    "type": "snow_flake",\n    "version": "snowflake_1x"\n  },\n  "driverType": "odbc",\n  "oauthParameter": ""\n}\n')),(0,r.kt)("p",{parentName:"li"},"Sample Response Code: 200 (Update datasource connection.)"))),(0,r.kt)("h2",{id:"update-a-datasource-login"},"Update a datasource login"),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datasource%20Management/updateDatasourceLogin"},"PATCH /api/datasources/logins/{loginId}")),(0,r.kt)("p",null,"This endpoint allows the caller to update a datasource login with the MicroStrategy REST Server. You use the authorization token returned during login as the value for ",(0,r.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),". You can find the loginId using the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/datasources/logins"),". If the call is successful, the resulting HTTP response returns an HTTP status code 200 and a response body containing info for the updated datasource login."),(0,r.kt)("p",null,"Sample Request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Headers"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Body:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "operationList": [\n    {\n      "op": "replace",\n      "path": "/username",\n      "value": "USERNAME_NEW"\n    }\n  ]\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Curl"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location -g --request PATCH \'https://demo.microstrategy.com/MicroStrategyLibrary/api/datasources/logins/{{loginId}}\' \\\n--header \'X-MSTR-AuthToken: nllmm5lpmkjdsj4d4etgdikc6c\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "operationList": [\n        {\n            "op": "replace",\n            "path": "/username",\n            "value": "USERNAME_NEW"\n        }\n    ]\n}\'\n')))),(0,r.kt)("p",null,"Sample Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Response Body"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Test_Snow_Login",\n  "id": "E0A644366147B08B570B6DB4E15119EF",\n  "description": "",\n  "dateCreated": "2021-08-03T20:03:33.000+0000",\n  "dateModified": "2021-08-03T20:03:33.000+0000",\n  "acg": 255,\n  "username": "USERNAME_NEW"\n}\n')),(0,r.kt)("p",{parentName:"li"},"Sample Response Code: 200 (Update datasource login.)"))))}m.isMDXComponent=!0}}]);