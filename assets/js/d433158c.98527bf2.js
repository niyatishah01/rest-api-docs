"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5537],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,b=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(b,r(r({ref:t},c),{},{components:n})):a.createElement(b,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66308:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var a,i=n(83117),o=n(80102),r=(n(67294),n(3905)),l=["components"],p={title:"Retrieve a partition mapping table's definition",sidebar_label:"Retrieve a partition mapping table's definition",description:"You can use REST APIs to retrieve the definition for a partition mapping table through the Modeling service."},s=void 0,c={unversionedId:"common-workflows/modeling/manage-table-objects/retrieve-a-partition-mapping-tables-definition",id:"common-workflows/modeling/manage-table-objects/retrieve-a-partition-mapping-tables-definition",title:"Retrieve a partition mapping table's definition",description:"You can use REST APIs to retrieve the definition for a partition mapping table through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-table-objects/retrieve-a-partition-mapping-tables-definition.md",sourceDirName:"common-workflows/modeling/manage-table-objects",slug:"/common-workflows/modeling/manage-table-objects/retrieve-a-partition-mapping-tables-definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/retrieve-a-partition-mapping-tables-definition",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-table-objects/retrieve-a-partition-mapping-tables-definition.md",tags:[],version:"current",lastUpdatedBy:"kezhou-mstr",lastUpdatedAt:1701121876,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"Retrieve a partition mapping table's definition",sidebar_label:"Retrieve a partition mapping table's definition",description:"You can use REST APIs to retrieve the definition for a partition mapping table through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Update SAP HANA parameters",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/update-sap-hana-parameters"},next:{title:"Create a new partition mapping table object",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/create-a-new-partition-mapping-table-object"}},d={},m=[{value:"Retrieve a WHPM table&#39;s definition",id:"retrieve-a-whpm-tables-definition",level:2},{value:"Retrieve a MDPM table&#39;s definition",id:"retrieve-a-mdpm-tables-definition",level:2}],u=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)}),b={toc:m};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(u,{since:"2021 Update 9",mdxType:"Available"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can try this workflow with ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-43769ee1-7480-4413-990a-13b50119b384"},"REST API Playground"),"."),(0,r.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,r.kt)("p",null,"You can use REST APIs to retrieve the definition for a partition mapping table through the Modeling service. A brief introduction of partition mapping is provided in this documentation. To learn more about partition mapping, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/ProjectDesignGuide/WebHelp/Lang_1033/Content/Dividing_tables_to_increase_performance__Partition.htm"},"Microstrategy Community"),"."),(0,r.kt)("p",null,'The partitioning feature improves query performance when working with large data volumes. Partitioning "breaks" the data into different (ideally balanced) portions, and each portion is called a partition base table (PBT), or a partition table. In other words, a partition table is a warehouse table that contains one part of a larger set of data. To manage which partition table to use for a given query, partition mapping is introduced by MicroStrategy to identify and keep track of the partitioned base tables as part of a logical whole. MicroStrategy supports two types of partition mapping:'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Warehouse partition mapping (WHPM)"),": uses a specialized warehouse table (WHPM table) to determine which table to access"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Metadata partition mapping (MDPM)"),": stores the mapping information in the project metadata as a MDPM table"),(0,r.kt)("p",null,"Workflows for retrieving the WHPM and MDPM tables are provided so you can see the slight differences between partition mapping tables and other tables. Workflows for retrieving a partition mapping table's definition within a changeset or with specific fields is the same as ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/manage-table-objects/retrieve-a-tables-definition"},"Retrieve a table's definition"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,r.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,r.kt)("h2",{id:"retrieve-a-whpm-tables-definition"},"Retrieve a WHPM table's definition"),(0,r.kt)("p",null,"Use this workflow sample to get the definition of a WHPM table. The object ID of the table is ",(0,r.kt)("inlineCode",{parentName:"p"},"569A89E78FA1455687F4E327B259B3FB"),". The table is in the MicroStrategy Tutorial project and its project ID is ",(0,r.kt)("inlineCode",{parentName:"p"},"B19DEDCC11D4E0EFC000EB9495D0F44F"),"."),(0,r.kt)("p",null,"Get the table's definition with ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableDetails"},"GET /api/model/tables/{TableId}"),"."),(0,r.kt)("p",null,"Sample Request Header"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "lmiouhsue1osvl8uf2vuvlbcfp"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://10.23.33.32:8080/MicroStrategyLibrary/api/model/tables/569A89E78FA1455687F4E327B259B3FB" -H "accept: application/json" -H "X-MSTR-AuthToken: lmiouhsue1osvl8uf2vuvlbcfp" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("p",null,'You can view the WHPM table\'s definition in the body of the response. The subtype is "table_partition_wh", the subtype of the physical table is "db_table_pmt", and the "partitionTables" field contains PBTs.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "versionId": "87C72A1A8E1947888C469E21F6C5969F",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "569A89E78FA1455687F4E327B259B3FB",\n    "subType": "table_partition_wh",\n    "name": "my_pmta",\n    "destinationFolderId": "CC582EC35C0C481E826E6D6B40BE4905"\n  },\n  "physicalTable": {\n    "information": {\n      "versionId": "C45CBE94B36049BEB279347EB36315DE",\n      "acg": 255,\n      "primaryLocale": "en-US",\n      "objectId": "A7FEA781BA6946719FDBA42EB5F26C4A",\n      "subType": "db_table_pmt",\n      "name": "pmt_inventory_01",\n      "destinationFolderId": "EA0EF6D11D3845C8B66D326B54605BF1"\n    },\n    "tableName": "pmt_inventory_01",\n    "columns": [\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:29.000Z",\n          "dateModified": "2020-08-25T02:49:02.000Z",\n          "versionId": "B3ADE0394CE4ABBA8853069EA98EDC86",\n          "acg": 255,\n          "primaryLocale": "en-US",\n          "objectId": "8D67914311D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "pbtname"\n        },\n        "dataType": {\n          "type": "fixed_length_string",\n          "precision": 50,\n          "scale": -2147483648\n        },\n        "columnName": "pbtname"\n      },\n      {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:31.000Z",\n          "dateModified": "2020-08-25T02:49:03.000Z",\n          "versionId": "762834024049247CC40B2B99E1538DBC",\n          "acg": 255,\n          "primaryLocale": "en-US",\n          "objectId": "8D67914211D3E4981000E787EC6DE8A4",\n          "subType": "column",\n          "name": "quarter_id"\n        },\n        "dataType": {\n          "type": "integer",\n          "precision": 2,\n          "scale": -2147483648\n        },\n        "columnName": "quarter_id"\n      }\n    ],\n    "namespace": "public",\n    "tablePrefix": "",\n    "type": "warehouse_partition"\n  },\n  "logicalSize": 0,\n  "isLogicalSizeLocked": false,\n  "isTrueKey": true,\n  "isPartOfPartition": false,\n  "partitionTables": [\n    {\n      "information": {\n        "versionId": "6DD8D51A96B04897AD945947674AC3C4",\n        "acg": 255,\n        "primaryLocale": "en-US",\n        "objectId": "0772760204B146D1BB02CC594C67F282",\n        "subType": "logical_table",\n        "name": "pmt_inventory_01_FactTable",\n        "destinationFolderId": "A23B009F4F4E40039B13F0B0FACC4FF5"\n      },\n      "physicalTable": {\n        "information": {\n          "versionId": "223A6960730C4534BBB3C1F468A2275F",\n          "acg": 255,\n          "primaryLocale": "en-US",\n          "objectId": "75469C9FEE934E02B893B72DE28E1A9E",\n          "subType": "physical_table",\n          "name": "pmt_inventory_01_FactTable",\n          "destinationFolderId": "EA0EF6D11D3845C8B66D326B54605BF1"\n        },\n        "tableName": "pmt_inventory_01_FactTable",\n        "columns": [\n          {\n            "information": {\n              "dateCreated": "2001-01-02T20:48:31.000Z",\n              "dateModified": "2019-10-15T19:47:55.000Z",\n              "versionId": "ADF938E811E9EF8470330080EF45D340",\n              "acg": 255,\n              "primaryLocale": "en-US",\n              "objectId": "8D67916011D3E4981000E787EC6DE8A4",\n              "subType": "column",\n              "name": "boh_qty"\n            },\n            "dataType": {\n              "type": "decimal",\n              "precision": 0,\n              "scale": -2147483648\n            },\n            "columnName": "boh_qty"\n          },\n          {\n            "information": {\n              "dateCreated": "2020-07-17T05:59:22.000Z",\n              "dateModified": "2020-08-24T03:29:35.000Z",\n              "versionId": "B60210AE4910694BD8A502982FE9DA1B",\n              "acg": 255,\n              "primaryLocale": "en-US",\n              "objectId": "FA1618C246B3DEAEB6E930A449E8147E",\n              "subType": "column",\n              "name": "eoh_qty"\n            },\n            "dataType": {\n              "type": "decimal",\n              "precision": 0,\n              "scale": -2147483648\n            },\n            "columnName": "eoh_qty"\n          },\n          {\n            "information": {\n              "dateCreated": "2001-01-02T20:48:29.000Z",\n              "dateModified": "2020-08-25T02:49:04.000Z",\n              "versionId": "C40D4D87495D26CE5EF913960AC781DE",\n              "acg": 255,\n              "primaryLocale": "en-US",\n              "objectId": "8D67915C11D3E4981000E787EC6DE8A4",\n              "subType": "column",\n              "name": "item_id"\n            },\n            "dataType": {\n              "type": "integer",\n              "precision": 2,\n              "scale": -2147483648\n            },\n            "columnName": "item_id"\n          },\n          {\n            "information": {\n              "dateCreated": "2001-01-02T20:48:44.000Z",\n              "dateModified": "2019-10-15T19:47:55.000Z",\n              "versionId": "AE0645BA11E9EF8400400080EF75B4B2",\n              "acg": 255,\n              "primaryLocale": "en-US",\n              "objectId": "8D6791E011D3E4981000E787EC6DE8A4",\n              "subType": "column",\n              "name": "month_id"\n            },\n            "dataType": {\n              "type": "integer",\n              "precision": 4,\n              "scale": -2147483648\n            },\n            "columnName": "month_id"\n          }\n        ],\n        "namespace": "",\n        "tablePrefix": "",\n        "type": "normal"\n      },\n      "logicalSize": 0,\n      "isLogicalSizeLocked": false,\n      "isTrueKey": true,\n      "isPartOfPartition": true\n    }\n  ],\n  "primaryDataSource": {\n    "objectId": "F0C9E02B4C56D68F9D8176A7FBADCFF3",\n    "subType": "db_role_import",\n    "name": "WH_partition"\n  },\n  "secondaryDataSources": []\n}\n')),(0,r.kt)("p",null,"Response Code: 200 (The WHPM table's definition is returned successfully.)"),(0,r.kt)("h2",{id:"retrieve-a-mdpm-tables-definition"},"Retrieve a MDPM table's definition"),(0,r.kt)("p",null,"Use this workflow sample to get the definition of an MDPM table. The object ID of the table is ",(0,r.kt)("inlineCode",{parentName:"p"},"473718A30DA84A9A814424537879778F"),". The table is in the MicroStrategy Tutorial project and its project ID is ",(0,r.kt)("inlineCode",{parentName:"p"},"B19DEDCC11D4E0EFC000EB9495D0F44F"),'. The API usage is the same as retrieving a WHPM table. Unlike all other tables, you can use "showExpressionAs" and "showFilterTokens" to customize partition filter representation.'),(0,r.kt)("p",null,"Get the table's definition with ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-getTableDetails"},"GET /api/model/tables/{TableId}"),"."),(0,r.kt)("p",null,"Sample Request Header"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "lmiouhsue1osvl8uf2vuvlbcfp"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET \'10.23.33.32:8080/MicroStrategyLibrary/api/model/tables/473718A30DA84A9A814424537879778F?showExpressionAs=tree&showFilterTokens=false\' -H "accept: application/json" -H "X-MSTR-AuthToken: lmiouhsue1osvl8uf2vuvlbcfp" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("p",null,'You can view the MDPM table\'s definition in the body of the response. The subtype is "table_partition_md". It does not have a "physicalTable" field. It has a "partitionTables" field that contains PBTs and each PBT has a partition filter.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-12-26T09:33:01.000Z",\n    "dateModified": "2022-12-26T09:33:01.000Z",\n    "versionId": "5438A6604932356237C080B8B9F80F01",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "473718A30DA84A9A814424537879778F",\n    "subType": "table_partition_md",\n    "name": "PMT"\n  },\n  "logicalSize": 0,\n  "isLogicalSizeLocked": false,\n  "partitionLevel": [\n    {\n      "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",\n      "subType": "attribute",\n      "name": "Customer"\n    },\n    {\n      "objectId": "8D679D3511D3E4981000E787EC6DE8A4",\n      "subType": "attribute",\n      "name": "Call Center"\n    }\n  ],\n  "partitionTables": [\n    {\n      "information": {\n        "dateCreated": "2022-12-01T06:39:42.000Z",\n        "dateModified": "2022-12-27T08:55:22.000Z",\n        "versionId": "C254AFDE488EF05AB0AA5F9E2CFCCA09",\n        "acg": 255,\n        "primaryLocale": "en-US",\n        "objectId": "29FD5283476B99E55016208A088328C6",\n        "subType": "logical_table",\n        "name": "pbt1"\n      },\n      "partitionLevel": [\n        {\n          "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Customer"\n        }\n      ],\n      "partitionFilter": {\n        "qualification": {\n          "text": "IsNotNull(Customer (ID))",\n          "tree": {\n            "type": "predicate_form_qualification",\n            "predicateId": "DFDAE37911944DC38E317627B867CCE9",\n            "predicateText": "IsNotNull(Customer (ID))",\n            "predicateTree": {\n              "function": "is_not_null",\n              "parameters": [],\n              "attribute": {\n                "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",\n                "subType": "attribute",\n                "name": "Customer"\n              },\n              "form": {\n                "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n                "subType": "attribute_form_system",\n                "name": "ID"\n              },\n              "dataLocale": ""\n            }\n          }\n        }\n      }\n    },\n    {\n      "information": {\n        "dateCreated": "2022-12-01T06:47:05.000Z",\n        "dateModified": "2022-12-27T08:55:14.000Z",\n        "versionId": "BB4D26894541764295BF52B97AAB4425",\n        "acg": 255,\n        "primaryLocale": "en-US",\n        "objectId": "061F17C1443E1D56F3F0C4BC33CA54A7",\n        "subType": "logical_table",\n        "name": "pbt2"\n      },\n      "partitionLevel": [\n        {\n          "objectId": "8D679D3511D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Call Center"\n        }\n      ],\n      "partitionFilter": {\n        "qualification": {\n          "text": "IsNotNull({Call Center} (ID))",\n          "tree": {\n            "type": "predicate_form_qualification",\n            "predicateId": "CEAEF3F3DB6C40A38FC14418F93C957A",\n            "predicateText": "IsNotNull({Call Center} (ID))",\n            "predicateTree": {\n              "function": "is_not_null",\n              "parameters": [],\n              "attribute": {\n                "objectId": "8D679D3511D3E4981000E787EC6DE8A4",\n                "subType": "attribute",\n                "name": "Call Center"\n              },\n              "form": {\n                "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n                "subType": "attribute_form_system",\n                "name": "ID"\n              },\n              "dataLocale": ""\n            }\n          }\n        }\n      }\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Response Code: 200 (The MDPM table's definition is returned successfully.)"))}f.isMDXComponent=!0}}]);