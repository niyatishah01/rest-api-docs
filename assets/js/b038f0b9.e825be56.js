"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1136],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=c(t),u=o,b=d["".concat(l,".").concat(u)]||d[u]||s[u]||r;return t?a.createElement(b,i(i({ref:n},m),{},{components:t})):a.createElement(b,i({ref:n},m))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},36031:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return d}});var a,o=t(83117),r=t(80102),i=(t(67294),t(3905)),p=["components"],l={title:"Create a new partition mapping table object",sidebar_label:"Create a new partition mapping table object",description:"This workflow sample demonstrates how to create a new partition mapping table object through the Modeling service."},c=void 0,m={unversionedId:"common-workflows/modeling/manage-table-objects/create-a-new-partition-mapping-table-object",id:"common-workflows/modeling/manage-table-objects/create-a-new-partition-mapping-table-object",title:"Create a new partition mapping table object",description:"This workflow sample demonstrates how to create a new partition mapping table object through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-table-objects/create-a-new-partition-mapping-table-object.md",sourceDirName:"common-workflows/modeling/manage-table-objects",slug:"/common-workflows/modeling/manage-table-objects/create-a-new-partition-mapping-table-object",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/create-a-new-partition-mapping-table-object",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-table-objects/create-a-new-partition-mapping-table-object.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1680286823,formattedLastUpdatedAt:"Mar 31, 2023",frontMatter:{title:"Create a new partition mapping table object",sidebar_label:"Create a new partition mapping table object",description:"This workflow sample demonstrates how to create a new partition mapping table object through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a partition mapping table's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/retrieve-a-partition-mapping-tables-definition"},next:{title:"Update a partition mapping table's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/update-a-partition-mapping-tables-definition"}},s={},d=[{value:"Create a WHPM table",id:"create-a-whpm-table",level:2},{value:"Create a MDPM table",id:"create-a-mdpm-table",level:2}],u=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),b={toc:d};function y(e){var n=e.components,t=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,o.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(u,{since:"2021 Update 9",mdxType:"Available"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try this workflow with ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-43769ee1-7480-4413-990a-13b50119b384"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"This workflow sample demonstrates how to create a new partition mapping table object through the Modeling service. Both the warehouse partition mapping (WHPM) and metadata partition mapping (MDPM) are supported. Refer to ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/manage-table-objects/retrieve-a-partition-mapping-tables-definition"},"Retrieve a partition mapping table's definition")," for a brief introduction on partition mapping."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ","[POST /api/auth/login]","(",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"),"."),(0,i.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),".")),(0,i.kt)("h2",{id:"create-a-whpm-table"},"Create a WHPM table"),(0,i.kt)("p",null,'To use this workflow sample, create a new WHPM table called "my_pmta". The physical table of the partition mapping table (PMT) is called "pmt_inventory_01" from the public namespace of the data source (ID: F0C9E02B4C56D68F9D8176A7FBADCFF3).'),(0,i.kt)("p",null,"For WHPM, the physical table of the partition mapping table that contains partition base table (PBT) information, must already exist . Refer to ",(0,i.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/ProjectDesignGuide/WebHelp/Lang_1033/Content/Warehouse_partition_mapping.htm"},"Warehouse partition mapping")," for details if you are not familiar with warehouse partitioning."),(0,i.kt)("p",null,"Create a new table with ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-addTable"},"POST /api/model/tables"),"."),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "name": "my_pmta"\n  },\n  "primaryDataSource": {\n    "objectId": "F0C9E02B4C56D68F9D8176A7FBADCFF3"\n  },\n  "physicalTable": {\n    "tableName": "pmt_inventory_01",\n    "namespace": "public"\n  }\n}\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/tables\' -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" --data-raw \'{\n    "information": {\n        "name": "my_pmta"\n    },\n    "primaryDataSource": {\n        "objectId": "F0C9E02B4C56D68F9D8176A7FBADCFF3"\n    },\n    "physicalTable": {\n        "tableName": "pmt_inventory_01",\n        "namespace": "public"\n    }\n}\'\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "versionId": "CB30C734A3DD4D48A96EB7F38D0C409B",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "A9217F1666554F7BBD47568A62ECFD97",\n    "subType": "table_partition_wh",\n    "name": "my_pmta",\n    "destinationFolderId": "CC582EC35C0C481E826E6D6B40BE4905"\n  },\n  "physicalTable": {\n    "information": {\n      "versionId": "54C7EBCEFBFB42DBAC3270A9299F5ECB",\n      "acg": 255,\n      "primaryLocale": "en-US",\n      "objectId": "47EA98B51AF64DF3BECF81238DC79C79",\n      "subType": "db_table_pmt",\n      "name": "pmt_inventory_01",\n      "destinationFolderId": "EA0EF6D11D3845C8B66D326B54605BF1"\n    },\n    "tableName": "pmt_inventory_01",\n    "columns": [\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:29.000Z",\n          "dateModified": "2023-01-06T06:52:49.000Z",\n          "versionId": "55732C70425DE154CBD33A83492636A0",\n          "acg": 255,\n          "primaryLocale": "en-US",\n          "objectId": "8D67914311D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "PBTNAME"\n        },\n        "dataType": {\n          "type": "fixed_length_string",\n          "precision": 50,\n          "scale": -2147483648\n        },\n        "columnName": "pbtname"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:31.000Z",\n          "dateModified": "2023-01-06T06:52:49.000Z",\n          "versionId": "2A34D0E7430F27EC7184449598773E0B",\n          "acg": 255,\n          "primaryLocale": "en-US",\n          "objectId": "8D67914211D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "QUARTER_ID"\n        },\n        "dataType": {\n          "type": "integer",\n          "precision": 2,\n          "scale": -2147483648\n        },\n        "columnName": "quarter_id"\n      }\n    ],\n    "namespace": "public",\n    "tablePrefix": "",\n    "type": "warehouse_partition"\n  },\n  "logicalSize": 0,\n  "isLogicalSizeLocked": false,\n  "isTrueKey": true,\n  "isPartOfPartition": false,\n  "partitionTables": [\n    {\n      "information": {\n        "versionId": "C2DD7F50D74B4D21BAC2A864FDE33B1B",\n        "acg": 255,\n        "primaryLocale": "en-US",\n        "objectId": "7E43C57150404C10B1370D3AD2A46246",\n        "subType": "logical_table",\n        "name": "pmt_inventory_01_FactTable",\n        "destinationFolderId": "A23B009F4F4E40039B13F0B0FACC4FF5"\n      },\n      "physicalTable": {\n        "information": {\n          "versionId": "DEA39D43397C409CBE90465D4CE46189",\n          "acg": 255,\n          "primaryLocale": "en-US",\n          "objectId": "9A85406A7B1F4964A67CBED56443A9D4",\n          "subType": "physical_table",\n          "name": "pmt_inventory_01_FactTable",\n          "destinationFolderId": "EA0EF6D11D3845C8B66D326B54605BF1"\n        },\n        "tableName": "pmt_inventory_01_FactTable",\n        "columns": [\n          {\n            "information": {\n              "dateCreated": "2020-11-03T06:42:39.000Z",\n              "dateModified": "2023-01-06T06:52:49.000Z",\n              "versionId": "437073A34CE825C5B836899D64A2B02F",\n              "acg": 255,\n              "primaryLocale": "en-US",\n              "objectId": "6C276C1B41242E3CED503FB7E51693BE",\n              "subType": "column",\n              "name": "boh_qty"\n            },\n            "dataType": {\n              "type": "decimal",\n              "precision": 0,\n              "scale": -2147483648\n            },\n            "columnName": "boh_qty"\n          },\n          {\n            "information": {\n              "dateCreated": "2001-01-02T20:48:32.000Z",\n              "dateModified": "2019-10-15T19:48:11.000Z",\n              "versionId": "B7B62B9811E9EF8470330080EF753340",\n              "acg": 255,\n              "primaryLocale": "en-US",\n              "objectId": "8D67916111D3E4981000E787EC6DE8A4",\n              "subType": "column",\n              "name": "eoh_qty"\n            },\n            "dataType": {\n              "type": "decimal",\n              "precision": 0,\n              "scale": -2147483648\n            },\n            "columnName": "eoh_qty"\n          },\n          {\n            "information": {\n              "dateCreated": "2001-01-02T20:48:29.000Z",\n              "dateModified": "2023-01-06T06:52:49.000Z",\n              "versionId": "FEC6ABCF4BD19F3B9A3D2193A84B88A4",\n              "acg": 255,\n              "primaryLocale": "en-US",\n              "objectId": "8D67915C11D3E4981000E787EC6DE8A4",\n              "subType": "column",\n              "name": "ITEM_ID"\n            },\n            "dataType": {\n              "type": "integer",\n              "precision": 2,\n              "scale": -2147483648\n            },\n            "columnName": "item_id"\n          },\n          {\n            "information": {\n              "dateCreated": "2001-01-02T20:48:44.000Z",\n              "dateModified": "2023-01-06T06:52:49.000Z",\n              "versionId": "A6C281D84C434795C03F0E80EDEDD9E2",\n              "acg": 255,\n              "primaryLocale": "en-US",\n              "objectId": "8D6791E011D3E4981000E787EC6DE8A4",\n              "subType": "column",\n              "name": "month_id"\n            },\n            "dataType": {\n              "type": "integer",\n              "precision": 4,\n              "scale": -2147483648\n            },\n            "columnName": "month_id"\n          }\n        ],\n        "namespace": "",\n        "tablePrefix": "",\n        "type": "normal"\n      },\n      "logicalSize": 0,\n      "isLogicalSizeLocked": false,\n      "isTrueKey": true,\n      "isPartOfPartition": true\n    }\n  ],\n  "primaryDataSource": {\n    "objectId": "F0C9E02B4C56D68F9D8176A7FBADCFF3",\n    "subType": "db_role_import",\n    "name": "WH_partition"\n  },\n  "secondaryDataSources": []\n}\n')),(0,i.kt)("p",null,"Response Code: 201 (A new WHPM table is created successfully in the changeset.)"),(0,i.kt)("h2",{id:"create-a-mdpm-table"},"Create a MDPM table"),(0,i.kt)("p",null,'In this workflow sample, create a new MDPM table called "my_pmt" and add two PBTs. Their IDs are 16F7047017563FD9541179744D001250 and 16F7047017563FD957E139264D1C2686. For the former PBT, qualify on the ID form of the "Country" attribute. For the latter PBT, qualify on the ID form of the "Category" attribute.'),(0,i.kt)("p",null,"For MDPM, you can use any logical table as one of the PBTs, and any standalone attribute to construct your partition filter. You can only use attribute form qualifications and element list qualifications with the partition filter. Refer to ",(0,i.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/ProjectDesignGuide/WebHelp/Lang_1033/Content/Metadata_partition_mapping.htm"},"Metadata partition mapping")," for details if you are not familiar with metadata partitioning."),(0,i.kt)("p",null,"Create the new table with ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-addTable"},"POST /api/model/tables"),"."),(0,i.kt)("p",null,"Sample Request Header"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "table_partition_md",\n    "name": "my_pmt"\n  },\n  "partitionTables": [\n    {\n      "information": {\n        "objectId": "16F7047017563FD9541179744D001250"\n      },\n      "partitionFilter": {\n        "qualification": {\n          "tree": {\n            "type": "predicate_form_qualification",\n            "predicateTree": {\n              "function": "is_not_null",\n              "parameters": [],\n              "attribute": {\n                "objectId": "8D679D3811D3E4981000E787EC6DE8A4",\n                "subType": "attribute",\n                "name": "Country"\n              },\n              "form": {\n                "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n                "subType": "attribute_form_system",\n                "name": "ID"\n              },\n              "dataLocale": ""\n            }\n          }\n        }\n      }\n    },\n    {\n      "information": {\n        "objectId": "16F7047017563FD957E139264D1C2686"\n      },\n      "partitionFilter": {\n        "qualification": {\n          "tree": {\n            "type": "predicate_form_qualification",\n            "predicateTree": {\n              "function": "is_not_null",\n              "parameters": [],\n              "attribute": {\n                "objectId": "8D679D3711D3E4981000E787EC6DE8A4",\n                "subType": "attribute",\n                "name": "Category"\n              },\n              "form": {\n                "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n                "subType": "attribute_form_system",\n                "name": "ID"\n              },\n              "dataLocale": ""\n            }\n          }\n        }\n      }\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/tables\' -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" --data-raw \'{ "information": { "subType": "table_partition_md", "name": "my_pmt" }, "partitionTables": [ { "information": { "objectId": "16F7047017563FD9541179744D001250" }, "partitionFilter": { "qualification": { "tree": { "type": "predicate_form_qualification", "predicateTree": { "function": "is_not_null", "parameters": [], "attribute": { "objectId": "8D679D3811D3E4981000E787EC6DE8A4", "subType": "attribute", "name": "Country" }, "form": { "objectId": "45C11FA478E745FEA08D781CEA190FE5", "subType": "attribute_form_system", "name": "ID" }, "dataLocale": "" } } } } }, { "information": { "objectId": "16F7047017563FD957E139264D1C2686" }, "partitionFilter": { "qualification": { "tree": { "type": "predicate_form_qualification", "predicateTree": { "function": "is_not_null", "parameters": [], "attribute": { "objectId": "8D679D3711D3E4981000E787EC6DE8A4", "subType": "attribute", "name": "Category" }, "form": { "objectId": "45C11FA478E745FEA08D781CEA190FE5", "subType": "attribute_form_system", "name": "ID" }, "dataLocale": "" } } } } } ] }\'\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "versionId": "44E1EFD369464F1EB2EFEB518DBD5C70",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "2033B6ED1CA642E6A55CB377B3DFC2B4",\n    "subType": "table_partition_md",\n    "name": "my_pmt"\n  },\n  "logicalSize": 0,\n  "isLogicalSizeLocked": false,\n  "partitionLevel": [\n    {\n      "objectId": "8D679D3811D3E4981000E787EC6DE8A4",\n      "subType": "attribute",\n      "name": "Country"\n    },\n    {\n      "objectId": "8D679D3711D3E4981000E787EC6DE8A4",\n      "subType": "attribute",\n      "name": "Category"\n    }\n  ],\n  "partitionTables": [\n    {\n      "information": {\n        "dateCreated": "2020-10-26T08:19:54.000Z",\n        "dateModified": "2023-01-11T10:55:49.000Z",\n        "versionId": "7726D623454692EAB0028BBC97E0F17F",\n        "acg": 255,\n        "primaryLocale": "en-US",\n        "objectId": "16F7047017563FD9541179744D001250",\n        "subType": "logical_table",\n        "name": "inventory_q1_2012"\n      },\n      "partitionLevel": [\n        {\n          "objectId": "8D679D3811D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Country"\n        }\n      ],\n      "partitionFilter": {\n        "qualification": {\n          "text": "IsNotNull(Country (ID))",\n          "tree": {\n            "type": "predicate_form_qualification",\n            "predicateId": "94185280E89C4AE3B40964B8CA0044EE",\n            "predicateText": "IsNotNull(Country (ID))",\n            "predicateTree": {\n              "function": "is_not_null",\n              "parameters": [],\n              "attribute": {\n                "objectId": "8D679D3811D3E4981000E787EC6DE8A4",\n                "subType": "attribute",\n                "name": "Country"\n              },\n              "form": {\n                "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n                "subType": "attribute_form_system",\n                "name": "ID"\n              },\n              "dataLocale": ""\n            }\n          }\n        }\n      }\n    },\n    {\n      "information": {\n        "dateCreated": "2020-10-26T08:19:54.000Z",\n        "dateModified": "2023-01-11T10:56:41.000Z",\n        "versionId": "EAAD29F3484FBF55459DF294C85C19F4",\n        "acg": 255,\n        "primaryLocale": "en-US",\n        "objectId": "16F7047017563FD957E139264D1C2686",\n        "subType": "logical_table",\n        "name": "inventory_q3_2012"\n      },\n      "partitionLevel": [\n        {\n          "objectId": "8D679D3711D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Category"\n        }\n      ],\n      "partitionFilter": {\n        "qualification": {\n          "text": "IsNotNull(Category (ID))",\n          "tree": {\n            "type": "predicate_form_qualification",\n            "predicateId": "B4B8523258BA44C6A40641CAE8CB607E",\n            "predicateText": "IsNotNull(Category (ID))",\n            "predicateTree": {\n              "function": "is_not_null",\n              "parameters": [],\n              "attribute": {\n                "objectId": "8D679D3711D3E4981000E787EC6DE8A4",\n                "subType": "attribute",\n                "name": "Category"\n              },\n              "form": {\n                "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n                "subType": "attribute_form_system",\n                "name": "ID"\n              },\n              "dataLocale": ""\n            }\n          }\n        }\n      }\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Response Code: 201 (A new MDPM table is created successfully in the changeset.)"))}y.isMDXComponent=!0}}]);