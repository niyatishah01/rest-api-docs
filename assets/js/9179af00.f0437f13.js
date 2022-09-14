"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[9474],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(a),u=o,h=d["".concat(i,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var l=2;l<r;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7984:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return m}});var n=a(3117),o=a(102),r=(a(7294),a(3905)),s=["components"],p={title:"Workflow Sample - Update a Prompt of an SAP HANA Table With Input Parameters",sidebar_label:"Update a Prompt of an SAP HANA Table",description:"You can use REST APIs to update a prompt of a table through the Modeling service."},i=void 0,l={unversionedId:"common-workflows/manage-table-objects/update-a-prompt-of-an-sap-hana-table",id:"common-workflows/manage-table-objects/update-a-prompt-of-an-sap-hana-table",title:"Workflow Sample - Update a Prompt of an SAP HANA Table With Input Parameters",description:"You can use REST APIs to update a prompt of a table through the Modeling service.",source:"@site/docs/common-workflows/manage-table-objects/update-a-prompt-of-an-sap-hana-table.md",sourceDirName:"common-workflows/manage-table-objects",slug:"/common-workflows/manage-table-objects/update-a-prompt-of-an-sap-hana-table",permalink:"/rest-api-docs/common-workflows/manage-table-objects/update-a-prompt-of-an-sap-hana-table",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/main/docs/common-workflows/manage-table-objects/update-a-prompt-of-an-sap-hana-table.md",tags:[],version:"current",lastUpdatedBy:"Liang, Jiapei",lastUpdatedAt:1663189678,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"Workflow Sample - Update a Prompt of an SAP HANA Table With Input Parameters",sidebar_label:"Update a Prompt of an SAP HANA Table",description:"You can use REST APIs to update a prompt of a table through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a Prompt of an SAP HANA Table",permalink:"/rest-api-docs/common-workflows/manage-table-objects/retrieve-a-prompt-of-an-sap-hana-table"},next:{title:"Update SAP HANA Parameters",permalink:"/rest-api-docs/common-workflows/manage-table-objects/update-sap-hana-parameters"}},c={},m=[{value:"Workflow",id:"workflow",level:2},{value:"Step 1: Create a changeset using POST /api/model/changesets",id:"step-1-create-a-changeset-using-post-apimodelchangesets",level:3},{value:"Step 2: Update a table prompt with PUT /api/model/tables/{tableId}/prompts/{promptId}",id:"step-2-update-a-table-prompt-with-put-apimodeltablestableidpromptspromptid",level:3},{value:"Step 3: Commit a changeset using POST /api/model/changesets/{ChangesetId}/commit",id:"step-3-commit-a-changeset-using-post-apimodelchangesetschangesetidcommit",level:3},{value:"Step 4: Delete a changeset using DELETE /api/model/changeset/{ChangesetId}",id:"step-4-delete-a-changeset-using-delete-apimodelchangesetchangesetid",level:3}],d={toc:m};function u(e){var t=e.components,a=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-e3e4974a-dc93-4f79-9ea6-259a1693dc0d?ctx=documentation"},"REST API Playground"),"."),(0,r.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,r.kt)("p",null,"Starting in MicroStrategy 2021 Update 6, you can use REST APIs to update a prompt of a table through the Modeling service."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This workflow applies only to SAP HANA tables with input parameters because only these tables have prompts, and one input parameters corresponds to one prompt. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://community.microstrategy.com/s/article/Support-for-SAP-HANA-calculation-views-with-input-parameters?language=en_US"},"KB48437: Support for SAP HANA calculation views with input parameters"),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You should at least have ",(0,r.kt)("strong",{parentName:"p"},"read access")," to the table to successfully complete this workflow. If the prompt you want to update is a managed object, ",(0,r.kt)("strong",{parentName:"p"},"write access")," to the table is also required. The managed prompts of an SAP HANA table with input parameters are automatically created by MicroStrategy by default. However, you can choose to replace these managed prompts with standalone ones by following the steps in ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/manage-table-objects/update-sap-hana-parameters"},"Workflow Sample: Update SAP HANA Parameters for an SAP HANA Table with Input Parameters"),". For more information on managed objects, see ",(0,r.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/MDXCubeReporting/WebHelp/Lang_1033/Content/About_managed_objects.htm"},"About Managed Objects"),".")),(0,r.kt)("p",null,"You want to update the prompt of a table. The object ID of the table is ",(0,r.kt)("inlineCode",{parentName:"p"},"84AF2517E662417D9924FD678B44591A"),". The table is in the MicroStrategy Tutorial Advanced project and its ID is ",(0,r.kt)("inlineCode",{parentName:"p"},"6AB8DFFE4B99B7F6FB0E94AD176C4A28"),". The object ID of the current prompt is ",(0,r.kt)("inlineCode",{parentName:"p"},"339585B03F354D11AE8760C4489160F1")," and you want to update fields of the prompt, for example, the name and default answers."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"A changeset is required for creating, and/or updating objects such as filters, facts, attributes, and so on through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"schemaEdit")," is required to be ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if this changeset ID is used to create or update schema objects through the corresponding APIs (tables, facts, attributes, hierarchies, transformation, partitions, and functions).")),(0,r.kt)("h2",{id:"workflow"},"Workflow"),(0,r.kt)("h3",{id:"step-1-create-a-changeset-using-post-apimodelchangesets"},"Step 1: Create a changeset using ",(0,r.kt)("a",{parentName:"h3",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset"},"POST /api/model/changesets")),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "sidv53fj5kagqnl544j8krdl05"\n"X-MSTR-ProjectID": "6AB8DFFE4B99B7F6FB0E94AD176C4A28"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST 'http://10.23.38.62:8080/MicroStrategyLibrary/api/model/changesets?schemaEdit=true' \\\n-H 'Content-Type: application/json' \\\n-H 'X-MSTR-ProjectID: 6AB8DFFE4B99B7F6FB0E94AD176C4A28' \\\n-H 'X-MSTR-AuthToken: sidv53fj5kagqnl544j8krdl05' \\\n-H 'Cookie: JSESSIONID=1D94C2B7A595054194E6342EED4B2E29; iSession=sidv53fj5kagqnl544j8krdl05' \\\n--data-raw ''\n")),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "EC74E082B9A4428BACB5A33970312311",\n  "type": "metadata",\n  "dateCreated": "2022-06-08T05:33:36.613900Z",\n  "dateModified": "2022-06-08T05:33:36.613918Z",\n  "status": "Ready",\n  "schemaEdit": true,\n  "mstrUserId": "54F3D26011D2896560009A8E67019608",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US",\n  "userDisplayLocale": "en-US",\n  "mstrProjectId": "6AB8DFFE4B99B7F6FB0E94AD176C4A28",\n  "userName": "Administrator"\n}\n')),(0,r.kt)("p",null,"Sample Response Code: 201 (A new changeset is created successfully.)"),(0,r.kt)("h3",{id:"step-2-update-a-table-prompt-with-put-apimodeltablestableidpromptspromptid"},"Step 2: Update a table prompt with ",(0,r.kt)("a",{parentName:"h3",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables/ms-putTablePrompt"},"PUT /api/model/tables/{tableId}/prompts/{promptId}")),(0,r.kt)("p",null,"The prompt you are updating must already be in the prompt list of the current table."),(0,r.kt)("p",null,"You must use ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/model/tables/{tableId}")," and check the ",(0,r.kt)("inlineCode",{parentName:"p"},"sapHanaParameters")," field to view the list of existing prompts."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "sidv53fj5kagqnl544j8krdl05"\n"X-MSTR-MS-Changeset": "6AB8DFFE4B99B7F6FB0E94AD176C4A28"\n')),(0,r.kt)("p",null,"Sample Request Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "subType": "prompt_string",\n    "name": "newName",\n    "description": "a new prompt definition"\n  },\n  "title": "a new static list",\n  "instruction": "a new static list",\n  "defaultAnswer": {\n    "value": "111,222"\n  },\n  "restriction": {\n    "required": true,\n    "allowPersonalAnswers": "none"\n  }\n}\n')),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "http://10.23.38.62:8080/MicroStrategyLibrary/api/model/tables/84AF2517E662417D9924FD678B44591A/prompts/339585B03F354D11AE8760C4489160F1" \\\n-H "X-MSTR-MS-Changeset: 6AB8DFFE4B99B7F6FB0E94AD176C4A28" \\\n-H "Content-Type: application/json" \\\n-H "X-MSTR-AuthToken: sidv53fj5kagqnl544j8krdl05" \\\n-H "Cookie: JSESSIONID=3374D7CF489BEAC87C495CE5BB0BD7ED; iSession=62i31bvfoctesonlukpo8r83th" \\\n--data-raw \'{"information": {"subType": "prompt_string", "name": "newName", "description": "a new prompt definition"}, "title": "a new static list", "instruction": "a new static list", "defaultAnswer": {"value": "111,222"}, "restriction": {"required": true, "allowPersonalAnswers": "none"}}\'\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("p",null,"You can view the new prompt definition in the body of the response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-04-19T06:25:44.000Z",\n    "dateModified": "2022-06-08T09:29:08.875Z",\n    "versionId": "5821E67A4847D914ABA627BB4F9DBB08",\n    "primaryLocale": "en-US",\n    "objectId": "339585B03F354D11AE8760C4489160F1",\n    "subType": "prompt_string",\n    "name": "newName",\n    "description": "a new prompt definition"\n  },\n  "title": "a new static list",\n  "instruction": "a new static list",\n  "defaultAnswer": {\n    "value": "111,222"\n  },\n  "restriction": {\n    "required": true,\n    "allowPersonalAnswers": "none"\n  }\n}\n')),(0,r.kt)("p",null,"Response Code: 201 (The prompt of the table is updated successfully in the changeset.)"),(0,r.kt)("h3",{id:"step-3-commit-a-changeset-using-post-apimodelchangesetschangesetidcommit"},"Step 3: Commit a changeset using ",(0,r.kt)("a",{parentName:"h3",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset"},"POST /api/model/changesets/{ChangesetId}/commit")),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "sidv53fj5kagqnl544j8krdl05"\n')),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST 'http://10.23.38.62:8080/MicroStrategyLibrary/api/model/changesets/EC74E082B9A4428BACB5A33970312311/commit' \\\n-H 'X-MSTR-AuthToken: sidv53fj5kagqnl544j8krdl05' \\\n-H 'Cookie: JSESSIONID=1D94C2B7A595054194E6342EED4B2E29; iSession=sidv53fj5kagqnl544j8krdl05'\n")),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "EC74E082B9A4428BACB5A33970312311",\n  "type": "metadata",\n  "dateCreated": "2022-06-08T05:33:36.613900Z",\n  "dateModified": "2022-06-08T05:41:58.543362Z",\n  "status": "Ready",\n  "schemaEdit": true,\n  "mstrUserId": "54F3D26011D2896560009A8E67019608",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US",\n  "userDisplayLocale": "en-US",\n  "mstrProjectId": "6AB8DFFE4B99B7F6FB0E94AD176C4A28",\n  "userName": "Administrator"\n}\n')),(0,r.kt)("p",null,"Sample Response Code: 201 (The changeset is committed successfully.)"),(0,r.kt)("h3",{id:"step-4-delete-a-changeset-using-delete-apimodelchangesetchangesetid"},"Step 4: Delete a changeset using ",(0,r.kt)("a",{parentName:"h3",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset"},"DELETE /api/model/changeset/{ChangesetId}")),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "sidv53fj5kagqnl544j8krdl05"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X DELETE 'http://10.23.38.62:8080/MicroStrategyLibrary/api/model/changesets/EC74E082B9A4428BACB5A33970312311' \\\n-H 'X-MSTR-AuthToken: sidv53fj5kagqnl544j8krdl05' \\\n-H 'Cookie: JSESSIONID=1D94C2B7A595054194E6342EED4B2E29; iSession=sidv53fj5kagqnl544j8krdl05'\n")),(0,r.kt)("p",null,"Sample Response Body: Empty"),(0,r.kt)("p",null,"Sample Response Code: 204 (The changeset has been deleted successfully.)"))}u.isMDXComponent=!0}}]);