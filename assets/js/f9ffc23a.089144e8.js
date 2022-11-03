"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6624],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,h=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return a?n.createElement(h,p(p({ref:t},m),{},{components:a})):n.createElement(h,p({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var s=2;s<o;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3123:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),p=["components"],i={title:"Workflow sample - Update SAP HANA parameters for an SAP HANA table with input parameters",sidebar_label:"Update SAP HANA parameters",description:"You can use REST APIs to update a prompt of a table through the Modeling service."},l=void 0,s={unversionedId:"common-workflows/manage-table-objects/update-sap-hana-parameters",id:"common-workflows/manage-table-objects/update-sap-hana-parameters",title:"Workflow sample - Update SAP HANA parameters for an SAP HANA table with input parameters",description:"You can use REST APIs to update a prompt of a table through the Modeling service.",source:"@site/docs/common-workflows/manage-table-objects/update-sap-hana-parameters.md",sourceDirName:"common-workflows/manage-table-objects",slug:"/common-workflows/manage-table-objects/update-sap-hana-parameters",permalink:"/rest-api-docs/common-workflows/manage-table-objects/update-sap-hana-parameters",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-table-objects/update-sap-hana-parameters.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1667514843,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{title:"Workflow sample - Update SAP HANA parameters for an SAP HANA table with input parameters",sidebar_label:"Update SAP HANA parameters",description:"You can use REST APIs to update a prompt of a table through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Update a prompt of an SAP HANA table",permalink:"/rest-api-docs/common-workflows/manage-table-objects/update-a-prompt-of-an-sap-hana-table"},next:{title:"Manage objects",permalink:"/rest-api-docs/common-workflows/manage-objects"}},m={},c=[{value:"Workflow",id:"workflow",level:2},{value:"Step 1: Create a changeset using POST /api/model/changesets",id:"step-1-create-a-changeset-using-post-apimodelchangesets",level:3},{value:"Step 2: Update an existing table using PATCH /api/model/tables/{tableId}",id:"step-2-update-an-existing-table-using-patch-apimodeltablestableid",level:3},{value:"Step 3: Commit a changeset using POST /api/model/changesets/{changesetId}/commit",id:"step-3-commit-a-changeset-using-post-apimodelchangesetschangesetidcommit",level:3},{value:"Step 4: Delete a changeset using DELETE /api/model/changeset/{changesetId}",id:"step-4-delete-a-changeset-using-delete-apimodelchangesetchangesetid",level:3}],u={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/manage-table-objects/update-a-prompt-of-an-sap-hana-table"},"Workflow sample: Update a prompt of an SAP HANA table with input parameters"),", you can use REST APIs to update the table definition through the Modeling service starting in MicroStrategy 2021 Update 6."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"SAP HANA tables may have input parameters and one input parameter corresponds to one prompt. Thus, if you have an SAP HANA table with input parameters, you can follow this workflow to update the ",(0,o.kt)("inlineCode",{parentName:"p"},"sapHanaParameters")," field to replace the current prompts of the input parameters. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://community.microstrategy.com/s/article/Support-for-SAP-HANA-calculation-views-with-input-parameters?language=en_US"},"KB48437: Support for SAP HANA calculation views with input parameters"),".")),(0,o.kt)("h2",{id:"workflow"},"Workflow"),(0,o.kt)("h3",{id:"step-1-create-a-changeset-using-post-apimodelchangesets"},"Step 1: Create a changeset using ",(0,o.kt)("a",{parentName:"h3",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset"},"POST /api/model/changesets")),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "ffj9a71c85rrejbbakmvqrqn6d"\n"X-MSTR-ProjectID": "6AB8DFFE4B99B7F6FB0E94AD176C4A28"\n')),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST 'http://10.23.38.62:8080/MicroStrategyLibrary/api/model/changesets?schemaEdit=true' \\\n-H 'Content-Type: application/json' -H 'X-MSTR-ProjectID: 6AB8DFFE4B99B7F6FB0E94AD176C4A28' \\\n-H 'X-MSTR-AuthToken: ffj9a71c85rrejbbakmvqrqn6d' \\\n-H 'Cookie: JSESSIONID=FDC0FB1DA99E49C87345CBFD5548E54B; iSession=ffj9a71c85rrejbbakmvqrqn6d' \\\n--data-raw ''\n")),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "E04BCEDD47BC4BBC95B7E95197D18A9D",\n  "type": "metadata",\n  "dateCreated": "2022-06-09T01:35:17.949169Z",\n  "dateModified": "2022-06-09T01:35:17.949215Z",\n  "status": "Ready",\n  "schemaEdit": true,\n  "mstrUserId": "54F3D26011D2896560009A8E67019608",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US",\n  "userDisplayLocale": "en-US",\n  "mstrProjectId": "6AB8DFFE4B99B7F6FB0E94AD176C4A28",\n  "userName": "Administrator"\n}\n')),(0,o.kt)("p",null,"Sample Response Code: 201 (A new changeset is created successfully.)"),(0,o.kt)("h3",{id:"step-2-update-an-existing-table-using-patch-apimodeltablestableid"},"Step 2: Update an existing table using ",(0,o.kt)("a",{parentName:"h3",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-patchTableDetails"},"PATCH /api/model/tables/{tableId}")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The format of the list of SAP HANA parameters to update is shown below. The parameters' number and names must strictly tally the existing ones. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/model/tables/{tableId}")," and check the ",(0,o.kt)("inlineCode",{parentName:"p"},"sapHanaParameters")," field to view the list of existing prompts."),(0,o.kt)("p",{parentName:"admonition"},"There are three types of update operations for you to choose:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Keep the current prompt by using the original prompt ID"),(0,o.kt)("li",{parentName:"ul"},"Replace the current prompt with a standalone prompt by using the ID of a standalone prompt. The same prompt can be used by different SAP HANA parameters."),(0,o.kt)("li",{parentName:"ul"},"Reset the current prompt by using ",(0,o.kt)("inlineCode",{parentName:"li"},'""')," or null on the ",(0,o.kt)("inlineCode",{parentName:"li"},"objectId")," field")),(0,o.kt)("p",{parentName:"admonition"},"To replace the current prompt with a standalone prompt, the prompt must either be a value prompt or an attribute element prompt.")),(0,o.kt)("p",null,"The object ID of the table is ",(0,o.kt)("inlineCode",{parentName:"p"},"84AF2517E662417D9924FD678B44591A"),". The table is in the MicroStrategy Tutorial Advanced project and its ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"6AB8DFFE4B99B7F6FB0E94AD176C4A28"),". Different operations on different SAP HANA parameters are done:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Keep ",(0,o.kt)("inlineCode",{parentName:"li"},"IP_Column_Hier_Value_Help")," the same"),(0,o.kt)("li",{parentName:"ul"},"Reset ",(0,o.kt)("inlineCode",{parentName:"li"},"IP_Static_List")),(0,o.kt)("li",{parentName:"ul"},"Replace the current prompt of ",(0,o.kt)("inlineCode",{parentName:"li"},"IP_Derived_From_Table")," with a value prompt, ",(0,o.kt)("inlineCode",{parentName:"li"},"B0489F7947A71A18EEAE03A65EE33137")),(0,o.kt)("li",{parentName:"ul"},"Replace current prompts of ",(0,o.kt)("inlineCode",{parentName:"li"},"IP_Derived_From_Function")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"IP_Using_Conversion_Function")," with an attribute element prompt, ",(0,o.kt)("inlineCode",{parentName:"li"},"38FB260A4099305D4220B485B927D84E"))),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "ffj9a71c85rrejbbakmvqrqn6d"\n"X-MSTR-ProjectID": "6AB8DFFE4B99B7F6FB0E94AD176C4A28"\n')),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sapHanaParameters": [\n    {\n      "name": "IP_Column_Hier_Value_Help",\n      "prompt": {\n        "objectId": "AA1E3898B82D47329BC6BFB44379362D"\n      }\n    },\n    {\n      "name": "IP_Static_List",\n      "prompt": {\n        "objectId": ""\n      }\n    },\n    {\n      "name": "IP_Derived_From_Table",\n      "prompt": {\n        "objectId": "B0489F7947A71A18EEAE03A65EE33137"\n      }\n    },\n    {\n      "name": "IP_Derived_From_Function",\n      "prompt": {\n        "objectId": "38FB260A4099305D4220B485B927D84E"\n      }\n    },\n    {\n      "name": "IP_Using_Conversion_Function",\n      "prompt": {\n        "objectId": "38FB260A4099305D4220B485B927D84E"\n      }\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH \'http://10.23.38.62:8080/MicroStrategyLibrary/api/model/tables/84AF2517E662417D9924FD678B44591A\' \\\n-H \'X-MSTR-MS-Changeset: E04BCEDD47BC4BBC95B7E95197D18A9D\' \\\n-H \'Content-Type: application/json\' \\\n-H \'X-MSTR-AuthToken: ffj9a71c85rrejbbakmvqrqn6d\' \\\n-H \'Cookie: JSESSIONID=FDC0FB1DA99E49C87345CBFD5548E54B; iSession=ffj9a71c85rrejbbakmvqrqn6d\' --\\\ndata-raw \'{"sapHanaParameters": [{"name": "IP_Column_Hier_Value_Help", "prompt": {"objectId": "AA1E3898B82D47329BC6BFB44379362D"}}, {"name": "IP_Static_List", "prompt": {"objectId": ""}}, {"name": "IP_Derived_From_Table", "prompt": {"objectId": "B0489F7947A71A18EEAE03A65EE33137"}}, {"name": "IP_Derived_From_Function", "prompt": {"objectId": "38FB260A4099305D4220B485B927D84E"}}, {"name": "IP_Using_Conversion_Function", "prompt": {"objectId": "38FB260A4099305D4220B485B927D84E"}}]}\'\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,"You can view the new table definition in the body of the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-04-19T06:25:44.000Z",\n    "dateModified": "2022-05-11T08:29:50.000Z",\n    "versionId": "9018A1D54F5D4E602850B1B2BD0B9B12",\n    "primaryLocale": "en-US",\n    "objectId": "84AF2517E662417D9924FD678B44591A",\n    "subType": "logical_table",\n    "name": "BI.certification::INPUTPARAMETERS"\n  },\n  "physicalTable": {\n    "information": {\n      "dateCreated": "2022-04-19T06:25:44.000Z",\n      "dateModified": "2022-05-11T08:29:50.000Z",\n      "versionId": "9018A1D54F5D4E602850B1B2BD0B9B12",\n      "primaryLocale": "en-US",\n      "objectId": "8E6C19512C6A4FB1A5A8ADBE5F237D82",\n      "subType": "physical_table",\n      "name": "BI.certification::INPUTPARAMETERS"\n    },\n    "tableName": "BI.certification::INPUTPARAMETERS",\n    "columns": [\n      {\n        "information": {\n          "dateCreated": "2022-04-19T06:25:44.000Z",\n          "dateModified": "2022-05-11T08:29:50.000Z",\n          "versionId": "9018A1D54F5D4E602850B1B2BD0B9B12",\n          "primaryLocale": "en-US",\n          "objectId": "4F98B51974684640867FBD998701828B",\n          "subType": "column",\n          "name": "BillingStatus"\n        },\n        "dataType": {\n          "type": "n_var_char",\n          "precision": 1,\n          "scale": -2147483648\n        },\n        "columnName": "BillingStatus"\n      },\n      {\n        "information": {\n          "dateCreated": "2022-04-19T06:25:44.000Z",\n          "dateModified": "2022-05-11T08:29:50.000Z",\n          "versionId": "9018A1D54F5D4E602850B1B2BD0B9B12",\n          "primaryLocale": "en-US",\n          "objectId": "D85782A680F84521893EC4EB16E4EB82",\n          "subType": "column",\n          "name": "City"\n        },\n        "dataType": {\n          "type": "n_var_char",\n          "precision": 40,\n          "scale": -2147483648\n        },\n        "columnName": "City"\n      }\n    ],\n    "namespace": "BICERT_MSTR",\n    "tablePrefix": "",\n    "type": "normal",\n    "sapHanaVariables": [\n      {\n        "variableName": "IP_Column_Hier_Value_Help",\n        "columnSqlType": "NVARCHAR(10)",\n        "valueType": "attribute_value",\n        "valueAttribute": "ProductId",\n        "selectionType": "default",\n        "multiline": false,\n        "mandatory": true,\n        "modelElementName": "",\n        "placeholderName": "$$IP_Column_Hier_Value_Help$$",\n        "defaultValue": "",\n        "description": "hierarchical value help",\n        "columnDataType": "n_var_char"\n      },\n      {\n        "variableName": "IP_Static_List",\n        "columnSqlType": "VARCHAR(13)",\n        "valueType": "static_list",\n        "valueAttribute": "",\n        "selectionType": "default",\n        "multiline": true,\n        "mandatory": true,\n        "modelElementName": "",\n        "placeholderName": "$$IP_Static_List$$",\n        "defaultValue": "1500211138,1501014825",\n        "description": "a static list",\n        "columnDataType": "fixed_length_string"\n      }\n    ],\n    "sapHanaTableType": "sap_hana_calculation"\n  },\n  "logicalSize": 0,\n  "isLogicalSizeLocked": false,\n  "isTrueKey": true,\n  "isPartOfPartition": false,\n  "sapHanaParameters": [\n    {\n      "name": "IP_Column_Hier_Value_Help",\n      "prompt": {\n        "objectId": "AA1E3898B82D47329BC6BFB44379362D",\n        "subType": "prompt_string",\n        "name": "IP_Column_Hier_Value_Help"\n      }\n    },\n    {\n      "name": "IP_Static_List",\n      "prompt": {\n        "objectId": "B8E99D1CDC754E01B4C3304415E72CBC",\n        "subType": "prompt_string",\n        "name": "IP_Static_List"\n      }\n    }\n  ],\n  "primaryDataSource": {\n    "objectId": "C384DC324EE9450D049410B3A7BCB35E",\n    "subType": "db_role_import",\n    "name": "SAPXSA2"\n  },\n  "secondaryDataSources": []\n}\n')),(0,o.kt)("p",null,"Sample Response Code: 201 (SAP HANA parameters are updated successfully in the changeset.)"),(0,o.kt)("h3",{id:"step-3-commit-a-changeset-using-post-apimodelchangesetschangesetidcommit"},"Step 3: Commit a changeset using ",(0,o.kt)("a",{parentName:"h3",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset"},"POST /api/model/changesets/{changesetId}/commit")),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "ffj9a71c85rrejbbakmvqrqn6d"\n')),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST 'http://10.23.38.62:8080/MicroStrategyLibrary/api/model/changesets/E04BCEDD47BC4BBC95B7E95197D18A9D/commit' \\\n-H 'X-MSTR-AuthToken: ffj9a71c85rrejbbakmvqrqn6d' \\\n-H 'Cookie: JSESSIONID=FDC0FB1DA99E49C87345CBFD5548E54B; iSession=ffj9a71c85rrejbbakmvqrqn6d'\n")),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "E04BCEDD47BC4BBC95B7E95197D18A9D",\n  "type": "metadata",\n  "dateCreated": "2022-06-09T01:35:17.949169Z",\n  "dateModified": "2022-06-09T01:46:20.153642Z",\n  "status": "Ready",\n  "schemaEdit": true,\n  "mstrUserId": "54F3D26011D2896560009A8E67019608",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US",\n  "userDisplayLocale": "en-US",\n  "mstrProjectId": "6AB8DFFE4B99B7F6FB0E94AD176C4A28",\n  "userName": "Administrator"\n}\n')),(0,o.kt)("p",null,"Sample Response Code: 201 (The changeset is committed successfully.)"),(0,o.kt)("h3",{id:"step-4-delete-a-changeset-using-delete-apimodelchangesetchangesetid"},"Step 4: Delete a changeset using ",(0,o.kt)("a",{parentName:"h3",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset"},"DELETE /api/model/changeset/{changesetId}")),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken: ffj9a71c85rrejbbakmvqrqn6d"\n')),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X DELETE 'http://10.23.38.62:8080/MicroStrategyLibrary/api/model/changesets/EC74E082B9A4428BACB5A33970312311' \\\n-H 'X-MSTR-AuthToken: sidv53fj5kagqnl544j8krdl05' \\\n-H 'Cookie: JSESSIONID=1D94C2B7A595054194E6342EED4B2E29; iSession=sidv53fj5kagqnl544j8krdl05'\n")),(0,o.kt)("p",null,"Sample Response Body: Empty"),(0,o.kt)("p",null,"Sample Response Code: 204 (The changeset has been deleted successfully.)"))}d.isMDXComponent=!0}}]);