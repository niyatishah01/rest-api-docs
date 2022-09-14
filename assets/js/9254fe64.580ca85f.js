"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1470],{3905:function(e,a,n){n.d(a,{Zo:function(){return c},kt:function(){return u}});var t=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},c=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,b=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return n?t.createElement(b,i(i({ref:a},c),{},{components:n})):t.createElement(b,i({ref:a},c))}));function u(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4235:function(e,a,n){n.r(a),n.d(a,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var t=n(3117),o=n(102),r=(n(7294),n(3905)),i=["components"],l={title:"Workflow Sample - Create a New Table Object",sidebar_label:"Create a New Table Object",description:"This workflow sample demonstrates how to create a new table object through the Modeling service."},s=void 0,p={unversionedId:"common-workflows/manage-table-objects/create-a-new-table-object",id:"common-workflows/manage-table-objects/create-a-new-table-object",title:"Workflow Sample - Create a New Table Object",description:"This workflow sample demonstrates how to create a new table object through the Modeling service.",source:"@site/docs/common-workflows/manage-table-objects/create-a-new-table-object.md",sourceDirName:"common-workflows/manage-table-objects",slug:"/common-workflows/manage-table-objects/create-a-new-table-object",permalink:"/rest-api-docs/common-workflows/manage-table-objects/create-a-new-table-object",draft:!1,editUrl:"https://github.com/MicroStrategy/restapi-docs/tree/main/docs/common-workflows/manage-table-objects/create-a-new-table-object.md",tags:[],version:"current",lastUpdatedBy:"Liang, Jiapei",lastUpdatedAt:1663187922,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"Workflow Sample - Create a New Table Object",sidebar_label:"Create a New Table Object",description:"This workflow sample demonstrates how to create a new table object through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a Table's Definition",permalink:"/rest-api-docs/common-workflows/manage-table-objects/retrieve-a-tables-definition"},next:{title:"Update a Table's Definition",permalink:"/rest-api-docs/common-workflows/manage-table-objects/update-a-tables-definition"}},c={},m=[{value:"Create a New Table Object",id:"create-a-new-table-object",level:2},{value:"More Examples",id:"more-examples",level:2},{value:"Create a Freeform SQL Table",id:"create-a-freeform-sql-table",level:3},{value:"Create a Table Alias",id:"create-a-table-alias",level:3}],d={toc:m};function u(e){var a=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-69df2b48-9b7c-4f35-9b80-15c9066d48b0?ctx=documentation"},"REST API Playground"),"."),(0,r.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,r.kt)("p",null,"This workflow sample demonstrates how to create a new table object through the Modeling service."),(0,r.kt)("h2",{id:"create-a-new-table-object"},"Create a New Table Object"),(0,r.kt)("p",null,"In this workflow sample, you create a new ",(0,r.kt)("inlineCode",{parentName:"p"},'"CITY_CTR_SLS"')," table object in the MicroStrategy Tutorial project. The project ID is ",(0,r.kt)("inlineCode",{parentName:"p"},"B19DEDCC11D4E0EFC000EB9495D0F44F"),". All schema tables are created under the objects/tables folder schema."),(0,r.kt)("p",null,"Obtain the authorization token needed to execute the request using ","[POST /api/auth/login]","(",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"),"."),(0,r.kt)("p",null,"Obtain the project ID from ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),"."),(0,r.kt)("p",null,"A changeset is required for creating, and/or updating objects such as filters, facts, attributes, and so on through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a changeset using ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset"},"POST /api/model/changesets"),", along with ",(0,r.kt)("inlineCode",{parentName:"p"},"schemaEdit=true")," to commit a changeset with schema manipulations."),(0,r.kt)("p",{parentName:"li"},"Sample Request Header:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,r.kt)("p",{parentName:"li"},"Sample Request Body: Empty"),(0,r.kt)("p",{parentName:"li"},"Sample Curl:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets?schemaEdit=true" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,r.kt)("p",{parentName:"li"},"Sample Response Body:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "8DF1659E9D74484D9D47B9478D4C7D00",\n  "dateCreated": "2020-11-17T17:36:31.187294Z",\n  "dateModified": "2020-11-17T17:36:31.187308Z",\n  "status": "Ready",\n  "schemaEdit": true,\n  "userName": "MSTR User",\n  "mstrProjectId": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US"\n}\n')),(0,r.kt)("p",{parentName:"li"},"Sample Response Code: 201 (A new changeset is created successfully.)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new table by defining its physical table with a normal warehouse table using ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/tables/ms-ms-posttable"},"POST /api/model/tables"),"."),(0,r.kt)("p",{parentName:"li"},"Here are some other approaches to creating a table:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can create a table by defining the physical table with either a normal warehouse table or freeform SQL statement and columns information. The former is called a normal table, while the latter is called a freeform SQL table. When ",(0,r.kt)("a",{parentName:"li",href:"#create-a-freeform-sql-table"},"creating a freeform SQL table"),", the type in the ",(0,r.kt)("inlineCode",{parentName:"li"},"physicalTable")," field must be specified as ",(0,r.kt)("inlineCode",{parentName:"li"},"'sql'"),"."),(0,r.kt)("li",{parentName:"ul"},"If the ",(0,r.kt)("inlineCode",{parentName:"li"},"checkSecondaryDataSourceTable")," query parameter is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", the API finds compatible tables in the project. If a compatible table is found, the compatible table object information is returned. Use ",(0,r.kt)("a",{parentName:"li",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-patchTableDetails"},"PATCH /api/model/tables/{tableID}")," to set the ",(0,r.kt)("inlineCode",{parentName:"li"},"secondaryDatasource")," to the compatible table. If no compatible table is found, a new table is created.")),(0,r.kt)("p",{parentName:"li"},"If this parameter is set to ",(0,r.kt)("inlineCode",{parentName:"p"},'"false"'),", a new table is created."),(0,r.kt)("p",{parentName:"li"},"This parameter has no effect on creating a freeform SQL table."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"columnMergeOption")," query parameter is used to define column merge options. For example, let's say a project includes a table named Table1 with a C1 column, whose data type is char(1). When adding a new table named Table2 with a C1 column and a data type of char(4), columns' data types are modified in the following ways to keep things consistent:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"reuse_any"),": Updates the column data type to use the most recent column definition. In the example above, the column data type for C1 is changed to char(4) since Table2 was added after Table1.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"reuse_compatible_data_type"),": Updates the column data type to use the data type with the largest precision or scale. In the example above, the column data type for C1 is changed to char(4), as defined in Table2.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"reuse_matched_data_type"),": Renames the column in the newly added table to allow it to have different data types. In the example above, column C1 uses char(1) for Table1. Column C1 in Table2 is defined as a separate copy of C1 and uses char(4). This option can cause unwanted schema changes and should be used only when necessary. If this value is not set, use the option that is set on the warehouse catalog setting.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"tablePrefixOption")," query parameter defines the table prefix. This parameter has no effect on a freeform SQL table. Otherwise, use one of the following options:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"none"),": Does not set the table prefix.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"add_default_prefix"),": Applies the default prefix setting on the warehouse catalog.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"add_namespace"),": Creates a prefix that is the same as the namespace."))),(0,r.kt)("p",{parentName:"li"},"Sample Request Header:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,r.kt)("p",{parentName:"li"},"Sample Request Body:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "name": "new Table"\n  },\n  "primaryDataSource": {\n    "objectId": "8FB036244C375FC9CE3FCABF45ECC5A8"\n  },\n  "physicalTable": {\n    "tableName": "CITY_CTR_SLS",\n    "namespace": "dbo"\n  }\n}\n')),(0,r.kt)("p",{parentName:"li"},"Sample Curl:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/tables" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" -d "{\\"information\\": {\\"name\\": \\"new Table\\"},\\"primaryDataSource\\": {\\"objectId\\": \\"8FB036244C375FC9CE3FCABF45ECC5A8\\"},\\"physicalTable\\": {\\"tableName\\": \\"CITY_CTR_SLS\\",\\"namespace\\": \\"dbo\\"}}"\n')),(0,r.kt)("p",{parentName:"li"},"Sample Response Body:"),(0,r.kt)("p",{parentName:"li"},"You can view the new table's definition in the body of the response."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "versionId": "EF55258A468A4D05A22BA61E62AD795C",\n    "primaryLocale": "en-US",\n    "objectId": "0D8C36BB48E0462DB6EFE4CE9313072E",\n    "subType": "logical_table",\n    "name": "new Table",\n    "destinationFolderId": "F37EE9EF6BC24D67BA7A001CDBC501E3"\n  },\n  "physicalTable": {\n    "information": {\n      "versionId": "5D19EFC6137B45E39E4FC97E4D271CD7",\n      "primaryLocale": "en-US",\n      "objectId": "162A8096CF344F6CB8D03F72049F2882",\n      "subType": "physical_table",\n      "name": "CITY_CTR_SLS",\n      "destinationFolderId": "EA0EF6D11D3845C8B66D326B54605BF1"\n    },\n    "tableName": "CITY_CTR_SLS",\n    "columns": [\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:30.000Z",\n          "dateModified": "2012-06-06T12:12:35.000Z",\n          "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n          "primaryLocale": "en-US",\n          "objectId": "8D6791B211D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "CUST_CITY_ID"\n        },\n        "dataType": {\n          "type": "integer",\n          "precision": 2,\n          "scale": -2147483648\n        },\n        "columnName": "CUST_CITY_ID"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:32.000Z",\n          "dateModified": "2012-06-06T12:12:35.000Z",\n          "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n          "primaryLocale": "en-US",\n          "objectId": "8D67917E11D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "CALL_CTR_ID"\n        },\n        "dataType": {\n          "type": "unsigned",\n          "precision": 1,\n          "scale": -2147483648\n        },\n        "columnName": "CALL_CTR_ID"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:35.000Z",\n          "dateModified": "2012-06-06T12:13:04.000Z",\n          "versionId": "256D148442065F43BDC42FBB79438A3F",\n          "primaryLocale": "en-US",\n          "objectId": "8D6792A011D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "TOT_DOLLAR_SALES"\n        },\n        "dataType": {\n          "type": "real",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "TOT_DOLLAR_SALES"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:34.000Z",\n          "dateModified": "2012-06-06T12:13:04.000Z",\n          "versionId": "256D148442065F43BDC42FBB79438A3F",\n          "primaryLocale": "en-US",\n          "objectId": "8D67929F11D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "TOT_UNIT_SALES"\n        },\n        "dataType": {\n          "type": "real",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "TOT_UNIT_SALES"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-09-18T19:59:30.000Z",\n          "dateModified": "2012-06-06T12:13:04.000Z",\n          "versionId": "256D148442065F43BDC42FBB79438A3F",\n          "primaryLocale": "en-US",\n          "objectId": "7A4ABDFD11D5AC6FC000D98A4CC5F24F",\n          "subType": "column",\n          "name": "TOT_COST"\n        },\n        "dataType": {\n          "type": "real",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "TOT_COST"\n      },\n      {\n        "information": {\n          "dateCreated": "2007-01-08T12:22:02.000Z",\n          "dateModified": "2012-06-06T12:12:35.000Z",\n          "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n          "primaryLocale": "en-US",\n          "objectId": "E50524EE420B2F1F441EFE9752DFBD7A",\n          "subType": "column",\n          "name": "New GROSS_DOLLAR_SALES (2)"\n        },\n        "dataType": {\n          "type": "float",\n          "precision": 53,\n          "scale": -1\n        },\n        "columnName": "GROSS_DOLLAR_SALES"\n      }\n    ],\n    "namespace": "dbo",\n    "tablePrefix": "",\n    "type": "normal"\n  },\n  "logicalSize": 0,\n  "isLogicalSizeLocked": false,\n  "isTrueKey": true,\n  "isPartOfPartition": false,\n  "primaryDataSource": {\n    "objectId": "8FB036244C375FC9CE3FCABF45ECC5A8",\n    "subType": "db_role_import",\n    "name": "MTDIWHSQL1"\n  },\n  "secondaryDataSources": []\n}\n')),(0,r.kt)("p",{parentName:"li"},"Response Code: 201 (A new table is created successfully in the changeset.)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Commit a changeset using ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset"},"POST /api/model/changesets/{ChangesetId}/commit"),"."),(0,r.kt)("p",{parentName:"li"},"Sample Request Header"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,r.kt)("p",{parentName:"li"},"Sample Curl:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00/commit" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,r.kt)("p",{parentName:"li"},"Sample Response Body:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "8DF1659E9D74484D9D47B9478D4C7D00",\n  "dateCreated": "2020-11-17T17:42:13.312629Z",\n  "dateModified": "2020-11-17T17:44:30.814816Z",\n  "status": "Ready",\n  "schemaEdit": true,\n  "userName": "MSTR User",\n  "mstrProjectId": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US"\n}\n')),(0,r.kt)("p",{parentName:"li"},"Sample Response Code: 201 (The changeset is committed successfully.)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete a changeset using ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/tables/ms-deleteChangeset"},"DELETE /api/model/changesets/{ChangesetId}"),"."),(0,r.kt)("p",{parentName:"li"},"Sample Request Header:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,r.kt)("p",{parentName:"li"},"Sample Request Body: Empty"),(0,r.kt)("p",{parentName:"li"},"Sample Curl:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/8DF1659E9D74484D9D47B9478D4C7D00" -H "accept: */*" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,r.kt)("p",{parentName:"li"},"Sample Response Body: Empty"),(0,r.kt)("p",{parentName:"li"},"Sample Response Code: 204 (The changeset has been deleted successfully.)"))),(0,r.kt)("h2",{id:"more-examples"},"More Examples"),(0,r.kt)("h3",{id:"create-a-freeform-sql-table"},"Create a Freeform SQL Table"),(0,r.kt)("p",null,"Besides defining the physical table field via a warehouse table, using the table name and namespace, you can also define the physical table field using a freeform SQL statement and column information. This is called a freeform SQL table. The type must be specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},'"physicalTable"')," field as ",(0,r.kt)("inlineCode",{parentName:"p"},'"type": "sql"'),"."),(0,r.kt)("p",null,"Sample Request Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "physicalTable": {\n    "sqlStatement": "select CUST_CITY_ID, TOT_COST from dbo.CUST_CTR_SLS",\n    "columns": [\n      {\n        "dataType": {\n          "type": "integer",\n          "precision": 2,\n          "scale": 0\n        },\n        "columnName": "CUST_CITY_ID"\n      },\n      {\n        "dataType": {\n          "type": "double",\n          "precision": 0,\n          "scale": 0\n        },\n        "columnName": "TOT_COST"\n      }\n    ],\n    "type": "sql"\n  },\n  "primaryDataSource": {\n    "objectId": "8FB036244C375FC9CE3FCABF45ECC5A8"\n  },\n  "encloseSqlInParentheses": false\n}\n')),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/tables" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" -d "{\\"physicalTable\\":{\\"sqlStatement\\":\\"selectCUST_CITY_ID,TOT_COSTfromdbo.CUST_CTR_SLS\\",\\"columns\\":[{\\"dataType\\":{\\"type\\":\\"integer\\",\\"precision\\":2,\\"scale\\":0},\\"columnName\\":\\"CUST_CITY_ID\\"},{\\"dataType\\":{\\"type\\":\\"double\\",\\"precision\\":0,\\"scale\\":0},\\"columnName\\":\\"TOT_COST\\"}],\\"type\\":\\"sql\\"},\\"primaryDataSource\\":{\\"objectId\\":\\"8FB036244C375FC9CE3FCABF45ECC5A8\\"},\\"encloseSqlInParentheses\\":false}"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("p",null,"You can view the new table's definition in the body of the response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "versionId": "6B9F7B1CED6946C995FF137DD1EFB55B",\n    "primaryLocale": "en-US",\n    "objectId": "AA18CDDC112C4FEDB9F5E87FC05671FD",\n    "subType": "logical_table",\n    "name": "New Custom Sql",\n    "destinationFolderId": "F37EE9EF6BC24D67BA7A001CDBC501E3"\n  },\n  "physicalTable": {\n    "information": {\n      "versionId": "98DA2FCE948B4CF38F680201BDC206E4",\n      "primaryLocale": "en-US",\n      "objectId": "05FD3124B0D045CF9BC6666084072021",\n      "subType": "physical_table",\n      "name": "New Custom Sql",\n      "destinationFolderId": "EA0EF6D11D3845C8B66D326B54605BF1"\n    },\n    "columns": [\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:30.000Z",\n          "dateModified": "2012-06-06T12:12:35.000Z",\n          "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n          "primaryLocale": "en-US",\n          "objectId": "8D6791B211D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "CUST_CITY_ID"\n        },\n        "dataType": {\n          "type": "integer",\n          "precision": 2,\n          "scale": 0\n        },\n        "columnName": "CUST_CITY_ID"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-09-18T19:59:30.000Z",\n          "dateModified": "2012-06-06T12:13:04.000Z",\n          "versionId": "256D148442065F43BDC42FBB79438A3F",\n          "primaryLocale": "en-US",\n          "objectId": "7A4ABDFD11D5AC6FC000D98A4CC5F24F",\n          "subType": "column",\n          "name": "TOT_COST"\n        },\n        "dataType": {\n          "type": "double",\n          "precision": 0,\n          "scale": 0\n        },\n        "columnName": "TOT_COST"\n      }\n    ],\n    "sqlStatement": "select CUST_CITY_ID, TOT_COST from dbo.CUST_CTR_SLS",\n    "type": "sql"\n  },\n  "logicalSize": 0,\n  "isLogicalSizeLocked": false,\n  "isTrueKey": true,\n  "isPartOfPartition": false,\n  "encloseSqlInParentheses": false,\n  "primaryDataSource": {\n    "objectId": "8FB036244C375FC9CE3FCABF45ECC5A8",\n    "subType": "db_role_import",\n    "name": "MTDIWHSQL1"\n  }\n}\n')),(0,r.kt)("h3",{id:"create-a-table-alias"},"Create a Table Alias"),(0,r.kt)("p",null,"You can also create a table by reusing an existing physical table. This is called a table alias."),(0,r.kt)("p",null,"Sample Request Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "physicalTable": {\n    "information": {\n      "objectId": "E278D17342991E49710D6F90E2A7BF2C"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/tables" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" -d "{\\"physicalTable\\":{\\"information\\":{\\"objectId\\":\\"E278D17342991E49710D6F90E2A7BF2C\\"}}}"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("p",null,"You can view the new table's definition in the body of the response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "versionId": "C2CD11A17FD544C7B98A00B9127D86C1",\n    "primaryLocale": "en-US",\n    "objectId": "5D1A4D4148DE4A438925620222674136",\n    "subType": "logical_table",\n    "name": "CITY_CTR_SLS (1)",\n    "destinationFolderId": "F37EE9EF6BC24D67BA7A001CDBC501E3"\n  },\n  "physicalTable": {\n    "information": {\n      "dateCreated": "2002-02-14T23:04:18.000Z",\n      "dateModified": "2012-06-06T12:12:35.000Z",\n      "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n      "primaryLocale": "en-US",\n      "objectId": "E278D17342991E49710D6F90E2A7BF2C",\n      "subType": "physical_table",\n      "name": "CITY_CTR_SLS"\n    },\n    "tableName": "CITY_CTR_SLS",\n    "columns": [\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:30.000Z",\n          "dateModified": "2012-06-06T12:12:35.000Z",\n          "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n          "primaryLocale": "en-US",\n          "objectId": "8D6791B211D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "CUST_CITY_ID"\n        },\n        "dataType": {\n          "type": "integer",\n          "precision": 2,\n          "scale": -2147483648\n        },\n        "columnName": "CUST_CITY_ID"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:32.000Z",\n          "dateModified": "2012-06-06T12:12:35.000Z",\n          "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n          "primaryLocale": "en-US",\n          "objectId": "8D67917E11D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "CALL_CTR_ID"\n        },\n        "dataType": {\n          "type": "integer",\n          "precision": 2,\n          "scale": -2147483648\n        },\n        "columnName": "CALL_CTR_ID"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:35.000Z",\n          "dateModified": "2012-06-06T12:13:04.000Z",\n          "versionId": "256D148442065F43BDC42FBB79438A3F",\n          "primaryLocale": "en-US",\n          "objectId": "8D6792A011D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "TOT_DOLLAR_SALES"\n        },\n        "dataType": {\n          "type": "double",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "TOT_DOLLAR_SALES"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:34.000Z",\n          "dateModified": "2012-06-06T12:13:04.000Z",\n          "versionId": "256D148442065F43BDC42FBB79438A3F",\n          "primaryLocale": "en-US",\n          "objectId": "8D67929F11D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "TOT_UNIT_SALES"\n        },\n        "dataType": {\n          "type": "double",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "TOT_UNIT_SALES"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-09-18T19:59:30.000Z",\n          "dateModified": "2012-06-06T12:13:04.000Z",\n          "versionId": "256D148442065F43BDC42FBB79438A3F",\n          "primaryLocale": "en-US",\n          "objectId": "7A4ABDFD11D5AC6FC000D98A4CC5F24F",\n          "subType": "column",\n          "name": "TOT_COST"\n        },\n        "dataType": {\n          "type": "double",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "TOT_COST"\n      },\n      {\n        "information": {\n          "dateCreated": "2007-01-08T12:22:02.000Z",\n          "dateModified": "2012-06-06T12:12:35.000Z",\n          "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n          "primaryLocale": "en-US",\n          "objectId": "E50524EE420B2F1F441EFE9752DFBD7A",\n          "subType": "column",\n          "name": "New GROSS_DOLLAR_SALES (2)"\n        },\n        "dataType": {\n          "type": "double",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "GROSS_DOLLAR_SALES"\n      }\n    ],\n    "namespace": "",\n    "tablePrefix": "",\n    "type": "normal"\n  },\n  "logicalSize": 0,\n  "isLogicalSizeLocked": false,\n  "isTrueKey": true,\n  "isPartOfPartition": false,\n  "primaryDataSource": {\n    "objectId": "37BE16AB11D3E48C1000E787EC6DE8A4",\n    "subType": "db_role",\n    "name": "Tutorial Data"\n  },\n  "secondaryDataSources": []\n}\n')))}u.isMDXComponent=!0}}]);