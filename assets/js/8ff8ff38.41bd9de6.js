"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8786],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=i,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(f,r(r({ref:t},c),{},{components:a})):n.createElement(f,r({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1715:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var n=a(3117),i=a(102),o=(a(7294),a(3905)),r=["components"],l={title:"Workflow Sample - Retrieve a List of All Available Table Definitions",sidebar_label:"Retrieve a List of All Available Table Definitions",description:"You can use REST APIs to retrieve the definitions for a list of all available tables through the Modeling service."},s=void 0,p={unversionedId:"common-workflows/manage-table-objects/retrieve-a-list-of-all-available-table-definitions",id:"common-workflows/manage-table-objects/retrieve-a-list-of-all-available-table-definitions",title:"Workflow Sample - Retrieve a List of All Available Table Definitions",description:"You can use REST APIs to retrieve the definitions for a list of all available tables through the Modeling service.",source:"@site/docs/common-workflows/manage-table-objects/retrieve-a-list-of-all-available-table-definitions.md",sourceDirName:"common-workflows/manage-table-objects",slug:"/common-workflows/manage-table-objects/retrieve-a-list-of-all-available-table-definitions",permalink:"/rest-api-docs/common-workflows/manage-table-objects/retrieve-a-list-of-all-available-table-definitions",draft:!1,editUrl:"https://github.com/MicroStrategy/restapi-docs/tree/main/docs/common-workflows/manage-table-objects/retrieve-a-list-of-all-available-table-definitions.md",tags:[],version:"current",lastUpdatedBy:"Liang, Jiapei",lastUpdatedAt:1663187922,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"Workflow Sample - Retrieve a List of All Available Table Definitions",sidebar_label:"Retrieve a List of All Available Table Definitions",description:"You can use REST APIs to retrieve the definitions for a list of all available tables through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Manage Table Objects",permalink:"/rest-api-docs/common-workflows/manage-table-objects/"},next:{title:"Retrieve a Table's Definition",permalink:"/rest-api-docs/common-workflows/manage-table-objects/retrieve-a-tables-definition"}},c={},m=[{value:"Retrieve a List of All Available Tables&#39; Definitions",id:"retrieve-a-list-of-all-available-tables-definitions",level:2},{value:"Retrieve a List of Available Tables&#39; Definitions within a Changeset",id:"retrieve-a-list-of-available-tables-definitions-within-a-changeset",level:3},{value:"Retrieve a Table&#39;s Definition with Only Specified Fields",id:"retrieve-a-tables-definition-with-only-specified-fields",level:3},{value:"Retrieve a Sliced Array of Tables&#39; Definitions",id:"retrieve-a-sliced-array-of-tables-definitions",level:3}],d={toc:m};function u(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can use REST APIs to retrieve the definitions for a list of all available tables through the Modeling service."),(0,o.kt)("h2",{id:"retrieve-a-list-of-all-available-tables-definitions"},"Retrieve a List of All Available Tables' Definitions"),(0,o.kt)("p",null,"In this workflow sample, you want to get the definitions of all available tables in the project schema. Use the MicroStrategy Tutorial project. Its project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B19DEDCC11D4E0EFC000EB9495D0F44F"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("p",null,"Retrieve a list of all available tables' definitions using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableList"},"GET /api/model/tables"),"."),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "lmiouhsue1osvl8uf2vuvlbcfp"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "http://10.23.9.111:8080/MicroStrategyLibrary/api/model/tables" -H "accept: application/json" -H "X-MSTR-AuthToken: lmiouhsue1osvl8uf2vuvlbcfp" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,"You can view the tables' definitions in the body of the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "offset": 0,\n  "limit": -1,\n  "total": 73,\n  "tables": [\n    {\n      "information": {\n        "dateCreated": "2001-01-02T20:47:18.000Z",\n        "dateModified": "2012-06-06T12:13:04.000Z",\n        "versionId": "256D148442065F43BDC42FBB79438A3F",\n        "primaryLocale": "en-US",\n        "objectId": "8D67932011D3E4981000E787EC6DE8A4",\n        "subType": "table_partition_wh",\n        "name": "PMT_INVENTORY"\n      }\n    },\n    {\n      "information": {\n        "dateCreated": "2001-01-02T20:47:10.000Z",\n        "dateModified": "2012-06-06T12:12:35.000Z",\n        "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n        "primaryLocale": "en-US",\n        "objectId": "8D67932C11D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "INVENTORY_ORDERS"\n      }\n    },\n    {\n      "information": {\n        "dateCreated": "2001-01-02T20:47:09.000Z",\n        "dateModified": "2012-06-06T12:12:35.000Z",\n        "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n        "primaryLocale": "en-US",\n        "objectId": "8D67933211D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_CALL_CTR"\n      }\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Response Code: 200 (The tables' definitions are returned successfully.)"),(0,o.kt)("h3",{id:"retrieve-a-list-of-available-tables-definitions-within-a-changeset"},"Retrieve a List of Available Tables' Definitions within a Changeset"),(0,o.kt)("p",null,"In this workflow sample, you want to get the definitions of all available tables in the project schema. Use the MicroStrategy Tutorial project. Its project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B19DEDCC11D4E0EFC000EB9495D0F44F"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"A changeset maintains an indivisible group of creations or modifications on modeling objects. If you plan to use the response of ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableList"},"GET /api/model/tables")," to create a new table or update a specific table's definitions, you should associate all requests with one changeset.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a changeset using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset"},"POST /api/model/changesets"),"."),(0,o.kt)("p",{parentName:"li"},"Sample Request Header:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,o.kt)("p",{parentName:"li"},"Sample Request Body: Empty"),(0,o.kt)("p",{parentName:"li"},"Sample Curl:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://10.23.9.111:8080/MicroStrategyLibrary/api/model/changesets" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,o.kt)("p",{parentName:"li"},"Sample Response Body"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "0E9F01172ECF4BA2BB510F7B9FB4F6E8",\n  "dateCreated": "2020-11-17T16:38:09.825650Z",\n  "dateModified": "2020-11-17T16:38:09.825665Z",\n  "status": "Ready",\n  "schemaEdit": false,\n  "userName": "MSTR User",\n  "mstrProjectId": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US"\n}\n')),(0,o.kt)("p",{parentName:"li"},"Sample Response Code: 201 (A new changeset is created successfully.)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Get the tables' definitions within a changeset using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableDetails"},"GET api/model/tables/{TableId}"),"."),(0,o.kt)("p",{parentName:"li"},"Sample Request Header"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,o.kt)("p",{parentName:"li"},"Sample Request Body: Empty"),(0,o.kt)("p",{parentName:"li"},"Sample Curl:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "http://10.23.9.111:8080/MicroStrategyLibrary/api/model/tables/862780DC499A14D74FEC7EB2EF317DA2" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,o.kt)("p",{parentName:"li"},"Sample Response Body:"),(0,o.kt)("p",{parentName:"li"},"You can view the tables' definitions in the body of the response."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "offset": 0,\n  "limit": -1,\n  "total": 73,\n  "tables": [\n    {\n      "information": {\n        "dateCreated": "2001-01-02T20:47:18.000Z",\n        "dateModified": "2012-06-06T12:13:04.000Z",\n        "versionId": "256D148442065F43BDC42FBB79438A3F",\n        "primaryLocale": "en-US",\n        "objectId": "8D67932011D3E4981000E787EC6DE8A4",\n        "subType": "table_partition_wh",\n        "name": "PMT_INVENTORY"\n      }\n    },\n    {\n      "information": {\n        "dateCreated": "2001-01-02T20:47:10.000Z",\n        "dateModified": "2012-06-06T12:12:35.000Z",\n        "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n        "primaryLocale": "en-US",\n        "objectId": "8D67932C11D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "INVENTORY_ORDERS"\n      }\n    },\n    {\n      "information": {\n        "dateCreated": "2001-01-02T20:47:09.000Z",\n        "dateModified": "2012-06-06T12:12:35.000Z",\n        "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n        "primaryLocale": "en-US",\n        "objectId": "8D67933211D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_CALL_CTR"\n      }\n    }\n  ]\n}\n')),(0,o.kt)("p",{parentName:"li"},"Response Code: 200 (The tables' definitions are returned successfully.)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Delete a changeset using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset"},"DELETE /api/model/changesets/{ChangesetId}"),"."),(0,o.kt)("p",{parentName:"li"},"Sample Request Header:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,o.kt)("p",{parentName:"li"},"Sample Request Body: Empty"),(0,o.kt)("p",{parentName:"li"},"Sample Curl:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE "https://10.23.9.111:8080/MicroStrategyLibrary/api/model/changesets/0E9F01172ECF4BA2BB510F7B9FB4F6E8" -H "accept: */*" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,o.kt)("p",{parentName:"li"},"Sample Response Body: Empty"),(0,o.kt)("p",{parentName:"li"},"Sample Response Code: 204 (The changeset has been deleted successfully.)"))),(0,o.kt)("h3",{id:"retrieve-a-tables-definition-with-only-specified-fields"},"Retrieve a Table's Definition with Only Specified Fields"),(0,o.kt)("p",null,"In this workflow sample, you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"fields")," parameter to retrieve specific fields. If the ",(0,o.kt)("inlineCode",{parentName:"p"},"fields")," parameter is not specified, the API only returns the ",(0,o.kt)("inlineCode",{parentName:"p"},'"information"')," field by default."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Multiple field values are separated by a comma.")),(0,o.kt)("p",null,"Retrieve the tables' definitions using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableList"},"GET /api/model/tables"),", along with ",(0,o.kt)("inlineCode",{parentName:"p"},"fields=physicalTable"),"."),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://10.23.9.111:8080/MicroStrategyLibrary/api/model/tables/862780DC499A14D74FEC7EB2EF317DA2?fields=physicalTable" -H "accept: application/json" -H "X-MSTR-AuthToken: mcgi1hfofet0f1nhs3u3kjurah" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,"You can view the returned tables' definitions in the body of the response. Notice that only the ",(0,o.kt)("inlineCode",{parentName:"p"},'"physicalTable"')," field is returned."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "offset": 0,\n  "limit": -1,\n  "total": 73,\n  "tables": [\n    {\n      "physicalTable": {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:54.000Z",\n          "dateModified": "2012-06-06T12:12:35.000Z",\n          "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n          "primaryLocale": "en-US",\n          "objectId": "8D6790F811D3E4981000E787EC6DE8A4",\n          "subType": "physical_table",\n          "name": "INVENTORY_ORDERS"\n        },\n        "tableName": "INVENTORY_ORDERS",\n        "namespace": "",\n        "tablePrefix": "",\n        "type": "normal"\n      }\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Sample Response Code: 200 (The tables' definitions are returned successfully.)"),(0,o.kt)("h3",{id:"retrieve-a-sliced-array-of-tables-definitions"},"Retrieve a Sliced Array of Tables' Definitions"),(0,o.kt)("p",null,"In this workflow sample, you retrieve a sliced array of the tables' definitions using the following parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"limit")," indicates the maximum number of objects that can be returned by this method."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"offset")," indicates the number of leading objects to omit from the response to this method.")),(0,o.kt)("p",null,"Retrieve the tables' definitions using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableList"},"GET /api/model/tables"),", along with ",(0,o.kt)("inlineCode",{parentName:"p"},"limit=1&offset=10"),"."),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/tables?limit=1&offset=10" -H "accept: application/json" -H "X-MSTR-AuthToken: mcgi1hfofet0f1nhs3u3kjurah" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,"You can view the returned tables' definitions in the body of the response. By default, only the ",(0,o.kt)("inlineCode",{parentName:"p"},'"information"')," field is returned."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "offset": 10,\n  "limit": 1,\n  "total": 73,\n  "tables": [\n    {\n      "information": {\n        "dateCreated": "2001-01-02T20:47:07.000Z",\n        "dateModified": "2012-06-06T12:12:35.000Z",\n        "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n        "primaryLocale": "en-US",\n        "objectId": "8D67936811D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_EMPLOYEE"\n      }\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Sample Response Code: 200 (The tables' definitions are returned successfully.)"))}u.isMDXComponent=!0}}]);