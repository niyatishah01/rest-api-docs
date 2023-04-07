"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[7014],{3905:function(e,n,a){a.d(n,{Zo:function(){return p},kt:function(){return u}});var t=a(67294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=t.createContext({}),c=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),u=o,b=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return a?t.createElement(b,l(l({ref:n},p),{},{components:a})):t.createElement(b,l({ref:n},p))}));function u(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},92509:function(e,n,a){a.r(n),a.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return C},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var t,o=a(83117),r=a(80102),l=(a(67294),a(3905)),i=["components"],s={title:"Create a new table object",sidebar_label:"Create a new table object",description:"This workflow sample demonstrates how to create a new table object through the Modeling service."},c=void 0,p={unversionedId:"common-workflows/modeling/manage-table-objects/create-a-new-table-object",id:"common-workflows/modeling/manage-table-objects/create-a-new-table-object",title:"Create a new table object",description:"This workflow sample demonstrates how to create a new table object through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-table-objects/create-a-new-table-object.md",sourceDirName:"common-workflows/modeling/manage-table-objects",slug:"/common-workflows/modeling/manage-table-objects/create-a-new-table-object",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/create-a-new-table-object",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-table-objects/create-a-new-table-object.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1680880277,formattedLastUpdatedAt:"Apr 7, 2023",frontMatter:{title:"Create a new table object",sidebar_label:"Create a new table object",description:"This workflow sample demonstrates how to create a new table object through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a table's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/retrieve-a-tables-definition"},next:{title:"Update a table's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/update-a-tables-definition"}},m={},d=[{value:"Create a new table object",id:"create-a-new-table-object",level:2},{value:"More examples",id:"more-examples",level:2},{value:"Create a freeform SQL table",id:"create-a-freeform-sql-table",level:3},{value:"Create a table alias",id:"create-a-table-alias",level:3}],u=(t="Available",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),b={toc:d};function C(e){var n=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,o.Z)({},b,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)(u,{since:"2021 Update 1",mdxType:"Available"}),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can try this workflow with ",(0,l.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-69df2b48-9b7c-4f35-9b80-15c9066d48b0?ctx=documentation"},"REST API Playground"),"."),(0,l.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,l.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,l.kt)("p",null,"This workflow sample demonstrates how to create a new table object through the Modeling service."),(0,l.kt)("h2",{id:"create-a-new-table-object"},"Create a new table object"),(0,l.kt)("p",null,"In this workflow sample, you create a new ",(0,l.kt)("inlineCode",{parentName:"p"},'"CITY_CTR_SLS"')," table object in the MicroStrategy Tutorial project. The project ID is ",(0,l.kt)("inlineCode",{parentName:"p"},"B19DEDCC11D4E0EFC000EB9495D0F44F"),". All schema tables are created under the objects/tables folder schema."),(0,l.kt)("p",null,"Get the authorization token needed to execute the request with ","[POST /api/auth/login]","(",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"),"."),(0,l.kt)("p",null,"Get the project ID from ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),"."),(0,l.kt)("p",null,"Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,l.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),"."),(0,l.kt)("p",null,"Create a new table by defining its physical table with a normal warehouse table using ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-addTable"},"POST /api/model/tables"),"."),(0,l.kt)("p",null,"The following are alternate methods to create a table:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You can create a table by defining the physical table with either a normal warehouse table or freeform SQL statement and columns information. The former is called a normal table, while the latter is called a freeform SQL table. When ",(0,l.kt)("a",{parentName:"li",href:"#create-a-freeform-sql-table"},"creating a freeform SQL table"),", the type in the ",(0,l.kt)("inlineCode",{parentName:"li"},"physicalTable")," field must be specified as ",(0,l.kt)("inlineCode",{parentName:"li"},"'sql'"),"."),(0,l.kt)("li",{parentName:"ul"},"If the ",(0,l.kt)("inlineCode",{parentName:"li"},"checkSecondaryDataSourceTable")," query parameter is set to ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),", the API finds compatible tables in the project. If a compatible table is found, the compatible table object information is returned. Use ",(0,l.kt)("a",{parentName:"li",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-patchTableDetails"},"PATCH /api/model/tables/{tableID}")," to set the ",(0,l.kt)("inlineCode",{parentName:"li"},"secondaryDatasource")," to the compatible table. If no compatible table is found, a new table is created.")),(0,l.kt)("p",null,"If this parameter is set to ",(0,l.kt)("inlineCode",{parentName:"p"},'"false"'),", a new table is created."),(0,l.kt)("p",null,"This parameter has no effect on creating a freeform SQL table."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"columnMergeOption")," query parameter is used to define column merge options. For example, a project includes a table named Table1 with a C1 column and a char(1) data type. When you add a new table named Table2 with a C1 column and char(4) data type, the column data types are modified in the following ways for consistency:")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"reuse_any"),": Updates the column data type to use the most recent column definition. In the example above, the column data type for C1 is updated to char(4) because Table2 was added after Table1.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"reuse_compatible_data_type"),": Updates the column data type to use the data type with the largest precision or scale. In the example above, the column data type for C1 is updated to char(4), as defined in Table2.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"reuse_matched_data_type"),": Renames the column in the newly added table to allow it to have different data types. In the example above, column C1 uses char(1) for Table1. Column C1 in Table2 is defined as a separate copy of C1 and uses char(4). This option can cause unwanted schema changes and should only be used when necessary. If this value is not set, use the option that is applied on the warehouse catalog setting.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"tablePrefixOption")," query parameter defines the table prefix. This parameter has no effect on a freeform SQL table. Otherwise, use one of the following options:")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"none"),": Does not set the table prefix.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"add_default_prefix"),": Applies the default prefix setting on the warehouse catalog.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"add_namespace"),": Creates a prefix that is the same as the namespace."))),(0,l.kt)("p",null,"Sample Request Header:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,l.kt)("p",null,"Sample Request Body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "name": "new Table"\n  },\n  "primaryDataSource": {\n    "objectId": "8FB036244C375FC9CE3FCABF45ECC5A8"\n  },\n  "physicalTable": {\n    "tableName": "CITY_CTR_SLS",\n    "namespace": "dbo"\n  }\n}\n')),(0,l.kt)("p",null,"Sample Curl:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/tables" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" -d "{\\"information\\": {\\"name\\": \\"new Table\\"},\\"primaryDataSource\\": {\\"objectId\\": \\"8FB036244C375FC9CE3FCABF45ECC5A8\\"},\\"physicalTable\\": {\\"tableName\\": \\"CITY_CTR_SLS\\",\\"namespace\\": \\"dbo\\"}}"\n')),(0,l.kt)("p",null,"Sample Response Body:"),(0,l.kt)("p",null,"You can view the new table's definition in the body of the response."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "versionId": "EF55258A468A4D05A22BA61E62AD795C",\n    "primaryLocale": "en-US",\n    "objectId": "0D8C36BB48E0462DB6EFE4CE9313072E",\n    "subType": "logical_table",\n    "name": "new Table",\n    "destinationFolderId": "F37EE9EF6BC24D67BA7A001CDBC501E3"\n  },\n  "physicalTable": {\n    "information": {\n      "versionId": "5D19EFC6137B45E39E4FC97E4D271CD7",\n      "primaryLocale": "en-US",\n      "objectId": "162A8096CF344F6CB8D03F72049F2882",\n      "subType": "physical_table",\n      "name": "CITY_CTR_SLS",\n      "destinationFolderId": "EA0EF6D11D3845C8B66D326B54605BF1"\n    },\n    "tableName": "CITY_CTR_SLS",\n    "columns": [\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:30.000Z",\n          "dateModified": "2012-06-06T12:12:35.000Z",\n          "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n          "primaryLocale": "en-US",\n          "objectId": "8D6791B211D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "CUST_CITY_ID"\n        },\n        "dataType": {\n          "type": "integer",\n          "precision": 2,\n          "scale": -2147483648\n        },\n        "columnName": "CUST_CITY_ID"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:32.000Z",\n          "dateModified": "2012-06-06T12:12:35.000Z",\n          "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n          "primaryLocale": "en-US",\n          "objectId": "8D67917E11D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "CALL_CTR_ID"\n        },\n        "dataType": {\n          "type": "unsigned",\n          "precision": 1,\n          "scale": -2147483648\n        },\n        "columnName": "CALL_CTR_ID"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:35.000Z",\n          "dateModified": "2012-06-06T12:13:04.000Z",\n          "versionId": "256D148442065F43BDC42FBB79438A3F",\n          "primaryLocale": "en-US",\n          "objectId": "8D6792A011D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "TOT_DOLLAR_SALES"\n        },\n        "dataType": {\n          "type": "real",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "TOT_DOLLAR_SALES"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:34.000Z",\n          "dateModified": "2012-06-06T12:13:04.000Z",\n          "versionId": "256D148442065F43BDC42FBB79438A3F",\n          "primaryLocale": "en-US",\n          "objectId": "8D67929F11D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "TOT_UNIT_SALES"\n        },\n        "dataType": {\n          "type": "real",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "TOT_UNIT_SALES"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-09-18T19:59:30.000Z",\n          "dateModified": "2012-06-06T12:13:04.000Z",\n          "versionId": "256D148442065F43BDC42FBB79438A3F",\n          "primaryLocale": "en-US",\n          "objectId": "7A4ABDFD11D5AC6FC000D98A4CC5F24F",\n          "subType": "column",\n          "name": "TOT_COST"\n        },\n        "dataType": {\n          "type": "real",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "TOT_COST"\n      },\n      {\n        "information": {\n          "dateCreated": "2007-01-08T12:22:02.000Z",\n          "dateModified": "2012-06-06T12:12:35.000Z",\n          "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n          "primaryLocale": "en-US",\n          "objectId": "E50524EE420B2F1F441EFE9752DFBD7A",\n          "subType": "column",\n          "name": "New GROSS_DOLLAR_SALES (2)"\n        },\n        "dataType": {\n          "type": "float",\n          "precision": 53,\n          "scale": -1\n        },\n        "columnName": "GROSS_DOLLAR_SALES"\n      }\n    ],\n    "namespace": "dbo",\n    "tablePrefix": "",\n    "type": "normal"\n  },\n  "logicalSize": 0,\n  "isLogicalSizeLocked": false,\n  "isTrueKey": true,\n  "isPartOfPartition": false,\n  "primaryDataSource": {\n    "objectId": "8FB036244C375FC9CE3FCABF45ECC5A8",\n    "subType": "db_role_import",\n    "name": "MTDIWHSQL1"\n  },\n  "secondaryDataSources": []\n}\n')),(0,l.kt)("p",null,"Response Code: 201 (A new table is created successfully in the changeset.)"),(0,l.kt)("h2",{id:"more-examples"},"More examples"),(0,l.kt)("h3",{id:"create-a-freeform-sql-table"},"Create a freeform SQL table"),(0,l.kt)("p",null,"You can also define a physical table field using a freeform SQL statement and column information. This is called a freeform SQL table. The type must be ",(0,l.kt)("inlineCode",{parentName:"p"},'"type": "sql"')," in the ",(0,l.kt)("inlineCode",{parentName:"p"},'"physicalTable"')," field."),(0,l.kt)("p",null,"Sample Request Body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "physicalTable": {\n    "sqlStatement": "select CUST_CITY_ID, TOT_COST from dbo.CUST_CTR_SLS",\n    "columns": [\n      {\n        "dataType": {\n          "type": "integer",\n          "precision": 2,\n          "scale": 0\n        },\n        "columnName": "CUST_CITY_ID"\n      },\n      {\n        "dataType": {\n          "type": "double",\n          "precision": 0,\n          "scale": 0\n        },\n        "columnName": "TOT_COST"\n      }\n    ],\n    "type": "sql"\n  },\n  "primaryDataSource": {\n    "objectId": "8FB036244C375FC9CE3FCABF45ECC5A8"\n  },\n  "encloseSqlInParentheses": false\n}\n')),(0,l.kt)("p",null,"Sample Curl:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/tables" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" -d "{\\"physicalTable\\":{\\"sqlStatement\\":\\"selectCUST_CITY_ID,TOT_COSTfromdbo.CUST_CTR_SLS\\",\\"columns\\":[{\\"dataType\\":{\\"type\\":\\"integer\\",\\"precision\\":2,\\"scale\\":0},\\"columnName\\":\\"CUST_CITY_ID\\"},{\\"dataType\\":{\\"type\\":\\"double\\",\\"precision\\":0,\\"scale\\":0},\\"columnName\\":\\"TOT_COST\\"}],\\"type\\":\\"sql\\"},\\"primaryDataSource\\":{\\"objectId\\":\\"8FB036244C375FC9CE3FCABF45ECC5A8\\"},\\"encloseSqlInParentheses\\":false}"\n')),(0,l.kt)("p",null,"Sample Response Body:"),(0,l.kt)("p",null,"You can view the new table's definition in the body of the response."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "versionId": "6B9F7B1CED6946C995FF137DD1EFB55B",\n    "primaryLocale": "en-US",\n    "objectId": "AA18CDDC112C4FEDB9F5E87FC05671FD",\n    "subType": "logical_table",\n    "name": "New Custom Sql",\n    "destinationFolderId": "F37EE9EF6BC24D67BA7A001CDBC501E3"\n  },\n  "physicalTable": {\n    "information": {\n      "versionId": "98DA2FCE948B4CF38F680201BDC206E4",\n      "primaryLocale": "en-US",\n      "objectId": "05FD3124B0D045CF9BC6666084072021",\n      "subType": "physical_table",\n      "name": "New Custom Sql",\n      "destinationFolderId": "EA0EF6D11D3845C8B66D326B54605BF1"\n    },\n    "columns": [\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:30.000Z",\n          "dateModified": "2012-06-06T12:12:35.000Z",\n          "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n          "primaryLocale": "en-US",\n          "objectId": "8D6791B211D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "CUST_CITY_ID"\n        },\n        "dataType": {\n          "type": "integer",\n          "precision": 2,\n          "scale": 0\n        },\n        "columnName": "CUST_CITY_ID"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-09-18T19:59:30.000Z",\n          "dateModified": "2012-06-06T12:13:04.000Z",\n          "versionId": "256D148442065F43BDC42FBB79438A3F",\n          "primaryLocale": "en-US",\n          "objectId": "7A4ABDFD11D5AC6FC000D98A4CC5F24F",\n          "subType": "column",\n          "name": "TOT_COST"\n        },\n        "dataType": {\n          "type": "double",\n          "precision": 0,\n          "scale": 0\n        },\n        "columnName": "TOT_COST"\n      }\n    ],\n    "sqlStatement": "select CUST_CITY_ID, TOT_COST from dbo.CUST_CTR_SLS",\n    "type": "sql"\n  },\n  "logicalSize": 0,\n  "isLogicalSizeLocked": false,\n  "isTrueKey": true,\n  "isPartOfPartition": false,\n  "encloseSqlInParentheses": false,\n  "primaryDataSource": {\n    "objectId": "8FB036244C375FC9CE3FCABF45ECC5A8",\n    "subType": "db_role_import",\n    "name": "MTDIWHSQL1"\n  }\n}\n')),(0,l.kt)("h3",{id:"create-a-table-alias"},"Create a table alias"),(0,l.kt)("p",null,"You can also create a table by reusing an existing physical table. This is called a table alias."),(0,l.kt)("p",null,"Sample Request Body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "physicalTable": {\n    "information": {\n      "objectId": "E278D17342991E49710D6F90E2A7BF2C"\n    }\n  }\n}\n')),(0,l.kt)("p",null,"Sample Curl:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/tables" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" -d "{\\"physicalTable\\":{\\"information\\":{\\"objectId\\":\\"E278D17342991E49710D6F90E2A7BF2C\\"}}}"\n')),(0,l.kt)("p",null,"Sample Response Body:"),(0,l.kt)("p",null,"You can view the new table's definition in the body of the response."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "versionId": "C2CD11A17FD544C7B98A00B9127D86C1",\n    "primaryLocale": "en-US",\n    "objectId": "5D1A4D4148DE4A438925620222674136",\n    "subType": "logical_table",\n    "name": "CITY_CTR_SLS (1)",\n    "destinationFolderId": "F37EE9EF6BC24D67BA7A001CDBC501E3"\n  },\n  "physicalTable": {\n    "information": {\n      "dateCreated": "2002-02-14T23:04:18.000Z",\n      "dateModified": "2012-06-06T12:12:35.000Z",\n      "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n      "primaryLocale": "en-US",\n      "objectId": "E278D17342991E49710D6F90E2A7BF2C",\n      "subType": "physical_table",\n      "name": "CITY_CTR_SLS"\n    },\n    "tableName": "CITY_CTR_SLS",\n    "columns": [\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:30.000Z",\n          "dateModified": "2012-06-06T12:12:35.000Z",\n          "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n          "primaryLocale": "en-US",\n          "objectId": "8D6791B211D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "CUST_CITY_ID"\n        },\n        "dataType": {\n          "type": "integer",\n          "precision": 2,\n          "scale": -2147483648\n        },\n        "columnName": "CUST_CITY_ID"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:32.000Z",\n          "dateModified": "2012-06-06T12:12:35.000Z",\n          "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n          "primaryLocale": "en-US",\n          "objectId": "8D67917E11D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "CALL_CTR_ID"\n        },\n        "dataType": {\n          "type": "integer",\n          "precision": 2,\n          "scale": -2147483648\n        },\n        "columnName": "CALL_CTR_ID"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:35.000Z",\n          "dateModified": "2012-06-06T12:13:04.000Z",\n          "versionId": "256D148442065F43BDC42FBB79438A3F",\n          "primaryLocale": "en-US",\n          "objectId": "8D6792A011D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "TOT_DOLLAR_SALES"\n        },\n        "dataType": {\n          "type": "double",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "TOT_DOLLAR_SALES"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:34.000Z",\n          "dateModified": "2012-06-06T12:13:04.000Z",\n          "versionId": "256D148442065F43BDC42FBB79438A3F",\n          "primaryLocale": "en-US",\n          "objectId": "8D67929F11D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "TOT_UNIT_SALES"\n        },\n        "dataType": {\n          "type": "double",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "TOT_UNIT_SALES"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-09-18T19:59:30.000Z",\n          "dateModified": "2012-06-06T12:13:04.000Z",\n          "versionId": "256D148442065F43BDC42FBB79438A3F",\n          "primaryLocale": "en-US",\n          "objectId": "7A4ABDFD11D5AC6FC000D98A4CC5F24F",\n          "subType": "column",\n          "name": "TOT_COST"\n        },\n        "dataType": {\n          "type": "double",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "TOT_COST"\n      },\n      {\n        "information": {\n          "dateCreated": "2007-01-08T12:22:02.000Z",\n          "dateModified": "2012-06-06T12:12:35.000Z",\n          "versionId": "215230EB4F7089CD0261C1AD12D621AD",\n          "primaryLocale": "en-US",\n          "objectId": "E50524EE420B2F1F441EFE9752DFBD7A",\n          "subType": "column",\n          "name": "New GROSS_DOLLAR_SALES (2)"\n        },\n        "dataType": {\n          "type": "double",\n          "precision": 0,\n          "scale": -2147483648\n        },\n        "columnName": "GROSS_DOLLAR_SALES"\n      }\n    ],\n    "namespace": "",\n    "tablePrefix": "",\n    "type": "normal"\n  },\n  "logicalSize": 0,\n  "isLogicalSizeLocked": false,\n  "isTrueKey": true,\n  "isPartOfPartition": false,\n  "primaryDataSource": {\n    "objectId": "37BE16AB11D3E48C1000E787EC6DE8A4",\n    "subType": "db_role",\n    "name": "Tutorial Data"\n  },\n  "secondaryDataSources": []\n}\n')))}C.isMDXComponent=!0}}]);