"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6762],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=i,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1717:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var a,i=n(83117),o=n(80102),r=(n(67294),n(3905)),s=["components"],p={title:"Object migration between environments",description:"You can move packages of objects between environments within Workstation."},l=void 0,c={unversionedId:"common-workflows/administration/migrations/migrations-in-workstation/object-migration-between-environments",id:"common-workflows/administration/migrations/migrations-in-workstation/object-migration-between-environments",title:"Object migration between environments",description:"You can move packages of objects between environments within Workstation.",source:"@site/docs/common-workflows/administration/migrations/migrations-in-workstation/object-migration-between-environments.md",sourceDirName:"common-workflows/administration/migrations/migrations-in-workstation",slug:"/common-workflows/administration/migrations/migrations-in-workstation/object-migration-between-environments",permalink:"/rest-api-docs/common-workflows/administration/migrations/migrations-in-workstation/object-migration-between-environments",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/migrations/migrations-in-workstation/object-migration-between-environments.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1677861063,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{title:"Object migration between environments",description:"You can move packages of objects between environments within Workstation."},sidebar:"tutorialSidebar",previous:{title:"Migrations in Workstation",permalink:"/rest-api-docs/common-workflows/administration/migrations/migrations-in-workstation/"},next:{title:"Project merge between environments",permalink:"/rest-api-docs/common-workflows/administration/migrations/migrations-in-workstation/project-merge-between-environments"}},m={},d=[{value:"APIs",id:"apis",level:2},{value:"Privileges and authorization",id:"privileges-and-authorization",level:2},{value:"Use scenario",id:"use-scenario",level:2},{value:"Create migration",id:"create-migration",level:2},{value:"Step 1: Use the <code>POST /api/migrations</code> API call to the source Library",id:"step-1-use-the-post-apimigrations-api-call-to-the-source-library",level:3},{value:"Step 2: Use the <code>GET /api/migrations/{migrationId}</code> API call to the source Library",id:"step-2-use-the-get-apimigrationsmigrationid-api-call-to-the-source-library",level:3},{value:"Step 3: Use the <code>PATCH /api/migrations/{migrationId}</code> API call to the source Library",id:"step-3-use-the-patch-apimigrationsmigrationid-api-call-to-the-source-library",level:3},{value:"Step 4: Use the <code>GET /api/migrations/{migrationId}?showContent=all</code> API call to the source Library",id:"step-4-use-the-get-apimigrationsmigrationidshowcontentall-api-call-to-the-source-library",level:3},{value:"Step 5: Use the <code>PUT /api/migrations/{migrationId}</code> API call to the target Library",id:"step-5-use-the-put-apimigrationsmigrationid-api-call-to-the-target-library",level:3},{value:"Step 6 (optional): Use the <code>GET /api/migrations/{migrationId}</code> API call to the target Library",id:"step-6-optional-use-the-get-apimigrationsmigrationid-api-call-to-the-target-library",level:3},{value:"Undo migration",id:"undo-migration",level:2},{value:"Step 1: Use the <code>PATCH /api/migrations/{migrationId}</code> API call to the target Library",id:"step-1-use-the-patch-apimigrationsmigrationid-api-call-to-the-target-library",level:3},{value:"Step 2: Use the <code>PATCH /api/migrations/{migrationId}</code> API call to the target Library",id:"step-2-use-the-patch-apimigrationsmigrationid-api-call-to-the-target-library",level:3},{value:"Step 3 (optional): Use the <code>GET /api/migrations/{migrationId}</code> API call to the target Library",id:"step-3-optional-use-the-get-apimigrationsmigrationid-api-call-to-the-target-library",level:3},{value:"Delete package",id:"delete-package",level:2},{value:"Step 1: Use the <code>DELETE /api/migrations?packageId={{packageId}}</code> API call to the source Library",id:"step-1-use-the-delete-apimigrationspackageidpackageid-api-call-to-the-source-library",level:3},{value:"Step 2: Use the <code>DELETE /api/migrations?packageId={{packageId}}</code> API call to the target Library",id:"step-2-use-the-delete-apimigrationspackageidpackageid-api-call-to-the-target-library",level:3},{value:"Performance",id:"performance",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Suggestions",id:"suggestions",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],u=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)}),g={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(u,{since:"2021 Update 6",mdxType:"Available"}),(0,r.kt)("p",null,"Starting in MicroStrategy 2021 Update 6, you can move packages of objects between environments within Workstation. These packages are all maintained by the ",(0,r.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/Workstation/WebHelp/Lang_1033/Content/storage_service.htm"},"MicroStrategy Storage Service"),", instead of you having to manage the packages yourself."),(0,r.kt)("p",null,"You must ",(0,r.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/Workstation/WebHelp/Lang_1033/Content/storage_service_config_workstation.htm"},"configure the package storage location in Workstation")," to use this feature."),(0,r.kt)("h2",{id:"apis"},"APIs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Migrations/createMigration"},"POST /api/migrations")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Migrations/triggerImport_1"},"PUT /api/migrations/{migrationId}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Migrations/updateMigration_1"},"PATCH /api/migrations/{migrationId}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Migrations/getMigration"},"GET /api/migrations/{migrationId}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Migrations/getMigrationList"},"GET /api/migrations")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Migrations/deletePackage_1"},"DELETE /api/migrations?packageId={{packageId}}"))),(0,r.kt)("h2",{id:"privileges-and-authorization"},"Privileges and authorization"),(0,r.kt)("p",null,"You need the following privileges for both the source and target environments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bypass all objects security check"),(0,r.kt)("li",{parentName:"ul"},"Create package"),(0,r.kt)("li",{parentName:"ul"},"Apply package")),(0,r.kt)("p",null,"To execute the API, you must get the authorization token by executing the ",(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login")," request, and get a token as ",(0,r.kt)("inlineCode",{parentName:"p"},'"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"')," in the response body. Keep the token value. It is required to execute the REST API. See ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/authentication"},"Authentication")," for more information."),(0,r.kt)("h2",{id:"use-scenario"},"Use scenario"),(0,r.kt)("p",null,"The best practice scenario is when Workstation uses one Library server as a source and another Library server as a target. The source and target environments can be the same."),(0,r.kt)("h2",{id:"create-migration"},"Create migration"),(0,r.kt)("h3",{id:"step-1-use-the-post-apimigrations-api-call-to-the-source-library"},"Step 1: Use the ",(0,r.kt)("inlineCode",{parentName:"h3"},"POST /api/migrations")," API call to the source Library"),(0,r.kt)("p",null,"This call triggers the package creation. Package settings and content are defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"packageInfo")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"tocView"),"."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F" // required for creating project package\n')),(0,r.kt)("p",null,"There are two types of supported migration packages: ",(0,r.kt)("inlineCode",{parentName:"p"},"project package")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"configuration package"),". For ",(0,r.kt)("inlineCode",{parentName:"p"},"project package"),", the related ",(0,r.kt)("inlineCode",{parentName:"p"},"X-MSTR-ProjectID")," project ID is required in the request header of each endpoint. For ",(0,r.kt)("inlineCode",{parentName:"p"},"configuration package"),", the project ID should not be used in the request header."),(0,r.kt)("p",null,"Provide the correct ",(0,r.kt)("inlineCode",{parentName:"p"},"environment")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"project")," information in the request body."),(0,r.kt)("p",null,"Sample Request Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "packageInfo": {\n    "type": "project",\n    "name": "ProjectMigration_success",\n    "environment": {\n      "id": "Source Environment URL",\n      "name": "environment name"\n    },\n    "tocView": {\n      "settings": {\n        "updateSchema": ["recal_table_logical_size"],\n        "aclOnReplacingObjects": "replace",\n        "aclOnNewObjects": ["inherit_acl_as_dest_folder"],\n        "defaultAction": "replace"\n      },\n      "content": [\n        {\n          "id": "8D679D5111D3E4981000E787EC6DE8A4",\n          "name": "Year",\n          "type": 12,\n          "action": "replace",\n          "includeDependents": true\n        }\n      ]\n    },\n    "treeView": {}\n  },\n  "importInfo": {\n    "environment": {\n      "id": "Target Environment URL",\n      "name": "environment name"\n    },\n    "project": {\n      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n      "name": "MicroStrategy Tutorial"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "35958BEB7C56491C9A43F7661501E177:B71E7ECF60104A62BA15625C444A623F",\n  "packageInfo": {\n    "id": "35958BEB7C56491C9A43F7661501E177",\n    "status": "creating",\n    "progress": 0\n  },\n  "importInfo": {\n    "id": "B71E7ECF60104A62BA15625C444A623F",\n    "status": "pending",\n    "importRequestStatus": "pending",\n    "undoRequestStatus": "pending",\n    "progress": 0\n  }\n}\n')),(0,r.kt)("h3",{id:"step-2-use-the-get-apimigrationsmigrationid-api-call-to-the-source-library"},"Step 2: Use the ",(0,r.kt)("inlineCode",{parentName:"h3"},"GET /api/migrations/{migrationId}")," API call to the source Library"),(0,r.kt)("p",null,"Since the package creation is asynchronously processing, this call checks the creation status, which is ",(0,r.kt)("inlineCode",{parentName:"p"},"usually creating"),", created, or ",(0,r.kt)("inlineCode",{parentName:"p"},"create_failed"),"."),(0,r.kt)("p",null,"Repeat this step until you get ",(0,r.kt)("inlineCode",{parentName:"p"},"packageInfo")," as ",(0,r.kt)("inlineCode",{parentName:"p"},'"status": "created"'),"."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "35958BEB7C56491C9A43F7661501E177:B71E7ECF60104A62BA15625C444A623F",\n  "packageInfo": {\n    "id": "35958BEB7C56491C9A43F7661501E177",\n    "replicated": false,\n    "type": "project",\n    "name": "ProjectMigration_success",\n    "creator": {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator"\n    },\n    "creationDate": "2022-03-16T07:38:40.125+0000",\n    "lastUpdatedDate": "2022-03-16T07:39:09.254+0000",\n    "environment": {\n      "id": "Environment URL",\n      "name": "environment name"\n    },\n    "storage": {\n      "size": 1421139,\n      "path": "mstr/shared/migrations/packages/2022-03-16/9A838E0F9C9E4910AF57344299327DF9.mmp"\n    },\n    "project": {\n      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n      "name": "MicroStrategy Tutorial"\n    },\n    "status": "created",\n    "message": "",\n    "progress": 100,\n    "deleted": false,\n    "existing": true\n  },\n  "importInfo": {\n    "id": "B71E7ECF60104A62BA15625C444A623F",\n    "creator": {},\n    "creationDate": "2022-03-16T07:38:40.126+0000",\n    "lastUpdatedDate": "2022-03-16T07:38:40.126+0000",\n    "environment": {\n      "id": "Environment URL",\n      "name": "environment name"\n    },\n    "status": "pending",\n    "importRequestStatus": "pending",\n    "undoRequestStatus": "pending",\n    "progress": 0,\n    "message": "",\n    "undoStorage": {},\n    "project": {\n      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n      "name": "MicroStrategy Tutorial"\n    },\n    "deleted": false\n  },\n  "version": "1"\n}\n')),(0,r.kt)("h3",{id:"step-3-use-the-patch-apimigrationsmigrationid-api-call-to-the-source-library"},"Step 3: Use the ",(0,r.kt)("inlineCode",{parentName:"h3"},"PATCH /api/migrations/{migrationId}")," API call to the source Library"),(0,r.kt)("p",null,"This call requests and approves the import migration."),(0,r.kt)("p",null,"First, change the import request status to ",(0,r.kt)("inlineCode",{parentName:"p"},"requested"),", then change it to ",(0,r.kt)("inlineCode",{parentName:"p"},"approved"),"."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.\n')),(0,r.kt)("p",null,"Sample Request Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "importInfo": {\n    "importRequestStatus": "requested"\n  }\n}\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "35958BEB7C56491C9A43F7661501E177:B71E7ECF60104A62BA15625C444A623F",\n  "packageInfo": {\n    "id": "35958BEB7C56491C9A43F7661501E177",\n    "status": "created",\n    "progress": 100\n  },\n  "importInfo": {\n    "id": "B71E7ECF60104A62BA15625C444A623F",\n    "status": "pending",\n    "importRequestStatus": "requested",\n    "undoRequestStatus": "pending",\n    "progress": 0\n  }\n}\n')),(0,r.kt)("p",null,"You must successfully PATCH the ",(0,r.kt)("inlineCode",{parentName:"p"},'"importRequestStatus": "requested"'),". Then make another PATCH call of ",(0,r.kt)("inlineCode",{parentName:"p"},'"importRequestStatus": "approved"'),"."),(0,r.kt)("p",null,"Sample Request Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "importInfo": {\n    "importRequestStatus": "approved"\n  }\n}\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "35958BEB7C56491C9A43F7661501E177:B71E7ECF60104A62BA15625C444A623F",\n  "packageInfo": {\n    "id": "35958BEB7C56491C9A43F7661501E177",\n    "status": "locked",\n    "progress": 100\n  },\n  "importInfo": {\n    "id": "B71E7ECF60104A62BA15625C444A623F",\n    "status": "pending",\n    "importRequestStatus": "approved",\n    "undoRequestStatus": "pending",\n    "progress": 0\n  }\n}\n')),(0,r.kt)("h3",{id:"step-4-use-the-get-apimigrationsmigrationidshowcontentall-api-call-to-the-source-library"},"Step 4: Use the ",(0,r.kt)("inlineCode",{parentName:"h3"},"GET /api/migrations/{migrationId}?showContent=all")," API call to the source Library"),(0,r.kt)("p",null,"This call gets the full content of the migration to prepare the import call."),(0,r.kt)("p",null,"This is similar to step 2, but with the ",(0,r.kt)("inlineCode",{parentName:"p"},"showContent=all")," query parameter , save the response body and use it for the next step."),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"packageInfo.replicated")," field will be changed to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in next step PUT call.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "35958BEB7C56491C9A43F7661501E177:B71E7ECF60104A62BA15625C444A623F",\n  "packageInfo": {\n    "id": "35958BEB7C56491C9A43F7661501E177",\n    "replicated": false,\n    "type": "project",\n    "name": "ProjectMigration_success",\n    "creator": {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator"\n    },\n    "creationDate": "2022-03-16T07:38:40.125+0000",\n    "lastUpdatedDate": "2022-03-16T08:23:01.763+0000",\n    "environment": {\n      "id": "Environment URL",\n      "name": "environment name"\n    },\n    "storage": {\n      "size": 1421139,\n      "path": "mstr/shared/migrations/packages/2022-03-16/9A838E0F9C9E4910AF57344299327DF9.mmp"\n    },\n    "project": {\n      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n      "name": "MicroStrategy Tutorial"\n    },\n    "status": "locked",\n    "message": "",\n    "progress": 100,\n    "deleted": false,\n    "existing": true,\n    "tocView": {}\n  }\n}\n')),(0,r.kt)("h3",{id:"step-5-use-the-put-apimigrationsmigrationid-api-call-to-the-target-library"},"Step 5: Use the ",(0,r.kt)("inlineCode",{parentName:"h3"},"PUT /api/migrations/{migrationId}")," API call to the target Library"),(0,r.kt)("p",null,"This call triggers the package import."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F" // required for creating project package\n')),(0,r.kt)("p",null,"Sample Request Body:"),(0,r.kt)("p",null,"Copy the response body from step 4 and change ",(0,r.kt)("inlineCode",{parentName:"p"},'"replicated": false'),", to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"packageInfo.replicated")," field has changed to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "35958BEB7C56491C9A43F7661501E177:B71E7ECF60104A62BA15625C444A623F",\n  "packageInfo": {\n    "id": "35958BEB7C56491C9A43F7661501E177",\n    "replicated": true, // Changed to true\n    "type": "project",\n    "name": "ProjectMigration_success",\n    "creator": {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator"\n    },\n    "creationDate": "2022-03-16T07:38:40.125+0000",\n    "lastUpdatedDate": "2022-03-16T08:23:01.763+0000",\n    "environment": {\n      "id": "Environment URL",\n      "name": "environment name"\n    },\n    "storage": {\n      "size": 1421139,\n      "path": "mstr/shared/migrations/packages/2022-03-16/9A838E0F9C9E4910AF57344299327DF9.mmp"\n    },\n    "project": {\n      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n      "name": "MicroStrategy Tutorial"\n    },\n    "status": "locked",\n    "message": "",\n    "progress": 100,\n    "deleted": false,\n    "existing": true,\n    "tocView": {}\n  }\n}\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "35958BEB7C56491C9A43F7661501E177:B71E7ECF60104A62BA15625C444A623F",\n  "packageInfo": {\n    "id": "35958BEB7C56491C9A43F7661501E177",\n    "status": "locked",\n    "progress": 100\n  },\n  "importInfo": {\n    "id": "B71E7ECF60104A62BA15625C444A623F",\n    "status": "importing",\n    "importRequestStatus": "approved",\n    "undoRequestStatus": "pending",\n    "progress": 0\n  }\n}\n')),(0,r.kt)("h3",{id:"step-6-optional-use-the-get-apimigrationsmigrationid-api-call-to-the-target-library"},"Step 6 (optional): Use the ",(0,r.kt)("inlineCode",{parentName:"h3"},"GET /api/migrations/{migrationId}")," API call to the target Library"),(0,r.kt)("p",null,"Since the package import is asynchronously processing, this call checks the import status. It is usually ",(0,r.kt)("inlineCode",{parentName:"p"},"importing"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"imported"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"import_failed"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "importInfo": {\n    "id": "B71E7ECF60104A62BA15625C444A623F",\n    "creator": {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator"\n    },\n    "creationDate": "2022-03-16T08:50:13.150+0000",\n    "lastUpdatedDate": "2022-03-16T08:50:28.666+0000",\n    "environment": {\n      "id": "Environment URL",\n      "name": "environment name"\n    },\n    "status": "imported",\n    "importRequestStatus": "approved",\n    "undoRequestStatus": "pending",\n    "progress": 100,\n    "message": "",\n    "undoStorage": {\n      "size": 205,\n      "path": "mstr/shared/migrations/undo/35958BEB7C56491C9A43F7661501E177/B71E7ECF60104A62BA15625C444A623F.mmp"\n    },\n    "project": {\n      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n      "name": "MicroStrategy Tutorial"\n    },\n    "deleted": false\n  }\n}\n')),(0,r.kt)("h2",{id:"undo-migration"},"Undo migration"),(0,r.kt)("h3",{id:"step-1-use-the-patch-apimigrationsmigrationid-api-call-to-the-target-library"},"Step 1: Use the ",(0,r.kt)("inlineCode",{parentName:"h3"},"PATCH /api/migrations/{migrationId}")," API call to the target Library"),(0,r.kt)("p",null,"This call requests a package undo."),(0,r.kt)("p",null,"Patch the ",(0,r.kt)("inlineCode",{parentName:"p"},'"undoRequestStatus": "requested"'),"."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.\n')),(0,r.kt)("p",null,"Sample Request Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "importInfo": {\n    "undoRequestStatus": "requested"\n  }\n}\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "35958BEB7C56491C9A43F7661501E177:B71E7ECF60104A62BA15625C444A623F",\n  "packageInfo": {\n    "id": "35958BEB7C56491C9A43F7661501E177",\n    "status": "locked",\n    "progress": 100\n  },\n  "importInfo": {\n    "id": "B71E7ECF60104A62BA15625C444A623F",\n    "status": "imported",\n    "importRequestStatus": "approved",\n    "undoRequestStatus": "requested",\n    "progress": 100\n  }\n}\n')),(0,r.kt)("h3",{id:"step-2-use-the-patch-apimigrationsmigrationid-api-call-to-the-target-library"},"Step 2: Use the ",(0,r.kt)("inlineCode",{parentName:"h3"},"PATCH /api/migrations/{migrationId}")," API call to the target Library"),(0,r.kt)("p",null,"This call approves the package undo and triggers the undo process."),(0,r.kt)("p",null,"When triggering Undo, X-MSTR-ProjectID is required in the header."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F" // Target Project ID\n')),(0,r.kt)("p",null,"Sample Request Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "importInfo": {\n    "undoRequestStatus": "approved"\n  }\n}\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "35958BEB7C56491C9A43F7661501E177:B71E7ECF60104A62BA15625C444A623F",\n  "packageInfo": {\n    "id": "35958BEB7C56491C9A43F7661501E177",\n    "status": "locked",\n    "progress": 100\n  },\n  "importInfo": {\n    "id": "B71E7ECF60104A62BA15625C444A623F",\n    "status": "undoing",\n    "importRequestStatus": "approved",\n    "undoRequestStatus": "approved",\n    "progress": 100\n  }\n}\n')),(0,r.kt)("h3",{id:"step-3-optional-use-the-get-apimigrationsmigrationid-api-call-to-the-target-library"},"Step 3 (optional): Use the ",(0,r.kt)("inlineCode",{parentName:"h3"},"GET /api/migrations/{migrationId}")," API call to the target Library"),(0,r.kt)("p",null,"Since the package undo is asynchronously processing, this call checks the undo status. Usually it is ",(0,r.kt)("inlineCode",{parentName:"p"},"undoing"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"undo_success"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"undo_failed"),"."),(0,r.kt)("h2",{id:"delete-package"},"Delete package"),(0,r.kt)("p",null,"Make sure to delete migrations from the source and target one by one."),(0,r.kt)("h3",{id:"step-1-use-the-delete-apimigrationspackageidpackageid-api-call-to-the-source-library"},"Step 1: Use the ",(0,r.kt)("inlineCode",{parentName:"h3"},"DELETE /api/migrations?packageId={{packageId}}")," API call to the source Library"),(0,r.kt)("p",null,"This call deletes a package from it."),(0,r.kt)("p",null,"Sample Request Header"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.\n')),(0,r.kt)("h3",{id:"step-2-use-the-delete-apimigrationspackageidpackageid-api-call-to-the-target-library"},"Step 2: Use the ",(0,r.kt)("inlineCode",{parentName:"h3"},"DELETE /api/migrations?packageId={{packageId}}")," API call to the target Library"),(0,r.kt)("p",null,"This call deletes a package from it."),(0,r.kt)("p",null,"Sample Request Header"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.\n')),(0,r.kt)("h2",{id:"performance"},"Performance"),(0,r.kt)("p",null,"For performance concerns, MicroStrategy suggests you create or import one package per session and time."),(0,r.kt)("h2",{id:"compatibility"},"Compatibility"),(0,r.kt)("p",null,"A package created in an earlier platform version can be imported to a newer platform version, but not vice versa."),(0,r.kt)("h2",{id:"suggestions"},"Suggestions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The user should have admin privileges in both source and target environments.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Due to databases being distributed across environments, make sure to connect to both the target and source environments during the import or deletion of packages and when viewing migration status.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Environment and project information should be provided in the request body when starting the migrations.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use the unique ",(0,r.kt)("inlineCode",{parentName:"p"},"environment URL")," as the unique environment ID. Make sure to use the same environment ID when you connect to it in Workstation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If possible, include all dependencies during the package creation. If not, there could be small differences between the source and destination environments that cause migration failure")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Conflict rules:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"use_existing"),": No change is made to the destination object. The source object is not copied.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"replace"),": The destination object is replaced with the source object.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"keep_both"),": No change is made to the destination object. The source object is duplicated if the destination object does not exist. However, if the destination object exists with the same ID and version, the source object is ignored. If the destination object exists with the same ID and a different version, the source object is saved as a new object.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"use_newer"),": If the source object modification time is more recent than the destination object modification time, the Replace action is used. Otherwise, the Use existing action is used.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"use_older"),": If the source object modification time is more recent than the destination object modification time, the Use existing action is used. Otherwise, the Replace action is used.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"force_replace"),": Replace the object in the destination project with the version of the object in the update package, even if both versions of the object have the same version ID.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"delete"),": Delete the object from the destination project. The version of the object in the update package is not imported into the destination project."),(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If the object in the destination has any used-by dependencies when you import the update package, the import fails."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Here are some principles for solving conflicts between source and destination environments."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the conflict type is Exists identically except for path, or Exists identically except for Distribution Services objects, the destination object is updated to reflect the path or Distribution Services addresses and contacts of the source object."),(0,r.kt)("li",{parentName:"ul"},"Replace moves the object into the same parent folder as the source object. If the parent path is the same between source and destination, but the grandparent path is different, Replace may appear to do nothing since the object is put into the same parent path."),(0,r.kt)("li",{parentName:"ul"},"Non-empty folders in the destination location never have the same version ID and modification time as the source. This is because the folder is copied first and objects are added to it, thus changing the version ID and modification times during the copy process."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The maximum size of the package is 2 GB. If it is larger, the creation fails."))),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the Library Server cannot connect to the database, you may receive the following error response:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The API requires MicroStrategy Storage Service. Please contact your administrator."),(0,r.kt)("li",{parentName:"ul"},"This can occur due to the following reasons:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Database not running"),(0,r.kt)("li",{parentName:"ul"},"Database version is lower than required"),(0,r.kt)("li",{parentName:"ul"},"Database configuration is missing or invalid in ",(0,r.kt)("inlineCode",{parentName:"li"},"configOverride.properties")," file"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If your storage location is not configured property, you may receive the following message:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The Storage Service is not configured properly, please contact your administrator to configure Storage Service"),(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"https://www2.microstrategy.com/producthelp/Current/Workstation/WebHelp/Lang_1033/Content/storage_service_config_workstation.htm"},"Configure the Storage Service via Workstation")," for more information."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the undo package is not generated when the import finishes successfully in the target environment, check if you set any of the conflict rules as ",(0,r.kt)("inlineCode",{parentName:"p"},"keep_both")," in the source environment. The undo functionality is not supported if you use ",(0,r.kt)("inlineCode",{parentName:"p"},"keep_both")," in any conflict rules. To ensure that the undo package can be generated and used to roll back the project merge, you need to ensure that no the ",(0,r.kt)("inlineCode",{parentName:"p"},"keep_both")," rule is used in the package settings of the source environment."))))}h.isMDXComponent=!0}}]);