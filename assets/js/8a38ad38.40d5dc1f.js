"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[4893],{2808:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=t(74848),r=t(28453);const a={title:"Project merge between environments",description:"You can create migrations to merge all objects in a source project into another target project."},s=void 0,o={id:"common-workflows/administration/migrations/migrations-in-workstation/project-merge-between-environments",title:"Project merge between environments",description:"You can create migrations to merge all objects in a source project into another target project.",source:"@site/docs/common-workflows/administration/migrations/migrations-in-workstation/project-merge-between-environments.md",sourceDirName:"common-workflows/administration/migrations/migrations-in-workstation",slug:"/common-workflows/administration/migrations/migrations-in-workstation/project-merge-between-environments",permalink:"/rest-api-docs/common-workflows/administration/migrations/migrations-in-workstation/project-merge-between-environments",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/migrations/migrations-in-workstation/project-merge-between-environments.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1714063612,formattedLastUpdatedAt:"Apr 25, 2024",frontMatter:{title:"Project merge between environments",description:"You can create migrations to merge all objects in a source project into another target project."},sidebar:"tutorialSidebar",previous:{title:"Object migration between environments",permalink:"/rest-api-docs/common-workflows/administration/migrations/migrations-in-workstation/object-migration-between-environments"},next:{title:"Validate migrations",permalink:"/rest-api-docs/common-workflows/administration/migrations/migrations-in-workstation/validate-migrations"}},c={},l=[{value:"APIs",id:"apis",level:2},{value:"Privileges and authorization",id:"privileges-and-authorization",level:2},{value:"Use scenario",id:"use-scenario",level:2},{value:"Create migration",id:"create-migration",level:2},{value:"Step 1: Use the <code>POST /api/migrations</code> API call to the source Library",id:"step-1-use-the-post-apimigrations-api-call-to-the-source-library",level:3},{value:"Step 2: Use the <code>GET /api/migrations/{migrationId}</code> API call to the source Library",id:"step-2-use-the-get-apimigrationsmigrationid-api-call-to-the-source-library",level:3},{value:"Step 3: Use the <code>PATCH /api/migrations/{migrationId}</code> API call to the source Library",id:"step-3-use-the-patch-apimigrationsmigrationid-api-call-to-the-source-library",level:3},{value:"Step 4: Use the <code>GET /api/migrations/{migrationId}?showContent=all</code> API call to the source Library",id:"step-4-use-the-get-apimigrationsmigrationidshowcontentall-api-call-to-the-source-library",level:3},{value:"Step 5: Use the <code>PUT /api/migrations/{migrationId}</code> API call to the target Library",id:"step-5-use-the-put-apimigrationsmigrationid-api-call-to-the-target-library",level:3},{value:"Step 6 (optional): Use the <code>GET /api/migrations/{migrationId}</code> API call to the target Library",id:"step-6-optional-use-the-get-apimigrationsmigrationid-api-call-to-the-target-library",level:3},{value:"Undo migration",id:"undo-migration",level:2},{value:"Step 1: Use the <code>PATCH /api/migrations/{migrationId}</code> API call to the target Library",id:"step-1-use-the-patch-apimigrationsmigrationid-api-call-to-the-target-library",level:3},{value:"Step 2: Use the <code>PATCH /api/migrations/{migrationId}</code> API call to the target Library",id:"step-2-use-the-patch-apimigrationsmigrationid-api-call-to-the-target-library",level:3},{value:"Step 3 (optional): Use the <code>GET /api/migrations/{migrationId}</code> API call to the target Library",id:"step-3-optional-use-the-get-apimigrationsmigrationid-api-call-to-the-target-library",level:3},{value:"Delete package",id:"delete-package",level:2},{value:"Step 1: Use the <code>DELETE /api/migrations?packageId={packageId}</code> API call to the source Library",id:"step-1-use-the-delete-apimigrationspackageidpackageid-api-call-to-the-source-library",level:3},{value:"Step 2: Use the <code>DELETE /api/migrations?packageId={{packageId}}</code> API call to the target Library",id:"step-2-use-the-delete-apimigrationspackageidpackageid-api-call-to-the-target-library",level:3},{value:"Performance",id:"performance",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Suggestions",id:"suggestions",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Available:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{since:"2021 Update 6"}),"\n",(0,i.jsx)(n.p,{children:"Starting in MicroStrategy 2021 Update 6, you can create migrations to merge all objects in a source project into another target project."}),"\n",(0,i.jsxs)(n.p,{children:["You must ",(0,i.jsx)(n.a,{href:"https://www2.microstrategy.com/producthelp/Current/Workstation/WebHelp/Lang_1033/Content/storage_service_config_workstation.htm",children:"configure the package storage location in Workstation"})," to use this feature."]}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://community.microstrategy.com/s/article/KB485558-Troubleshoot-Project-Merge-Issues",children:"KB485558: Troubleshoot Project Merge Issues When Using Migration Packages"})," to troubleshoot issues that may occur."]}),"\n",(0,i.jsx)(n.h2,{id:"apis",children:"APIs"}),"\n",(0,i.jsxs)(n.p,{children:["When you merge projects, you use the same set of REST APIs as when ",(0,i.jsx)(n.a,{href:"/rest-api-docs/common-workflows/administration/migrations/migrations-in-workstation/object-migration-between-environments",children:"migrating objects"}),". You choose whether you want to create an object migration process or merge projects by passing different request bodies in these APIs."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Migrations/createMigration",children:"POST /api/migrations"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Migrations/triggerImport_1",children:"PUT /api/migrations/{migrationId}"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Migrations/updateMigration_1",children:"PATCH /api/migrations/{migrationId}"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Migrations/getMigration",children:"GET /api/migrations/{migrationId}"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Migrations/getMigrationList",children:"GET /api/migrations"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Migrations/deletePackage_1",children:"DELETE /api/migrations?packageId={{packageId}}"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"privileges-and-authorization",children:"Privileges and authorization"}),"\n",(0,i.jsx)(n.p,{children:"You need the following privileges for both the source and target environments:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Bypass all objects security check"}),"\n",(0,i.jsx)(n.li,{children:"Create package"}),"\n",(0,i.jsx)(n.li,{children:"Apply package"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To execute the API, you must get the authorization token by executing the ",(0,i.jsx)(n.code,{children:"POST /api/auth/login"})," request, and get a token as ",(0,i.jsx)(n.code,{children:'"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"'})," in the response body. Keep the token value. It is required to execute the REST API. See ",(0,i.jsx)(n.a,{href:"/rest-api-docs/getting-started/authentication",children:"Authentication"})," for more information."]}),"\n",(0,i.jsx)(n.h2,{id:"use-scenario",children:"Use scenario"}),"\n",(0,i.jsx)(n.p,{children:"The best practice scenario is when Workstation uses one Library server as a source and another Library server as a target. The source and target environments can be the same."}),"\n",(0,i.jsx)(n.h2,{id:"create-migration",children:"Create migration"}),"\n",(0,i.jsxs)(n.h3,{id:"step-1-use-the-post-apimigrations-api-call-to-the-source-library",children:["Step 1: Use the ",(0,i.jsx)(n.code,{children:"POST /api/migrations"})," API call to the source Library"]}),"\n",(0,i.jsxs)(n.p,{children:["This call triggers the package creation of a project merge package. The project package settings can be defined in ",(0,i.jsx)(n.code,{children:"packageInfo.tocView.settings"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F" // required for creating project package\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,i.jsxs)(n.p,{children:["To create a migration for a project merge, you need to explicitly specify the ",(0,i.jsx)(n.code,{children:"packageInfo.purpose"})," to ",(0,i.jsx)(n.code,{children:"project_merge"}),". Otherwise, the migration is used for object migration."]}),"\n",(0,i.jsxs)(n.p,{children:["Provide the correct ",(0,i.jsx)(n.code,{children:"environment"})," and ",(0,i.jsx)(n.code,{children:"project"})," in ",(0,i.jsx)(n.code,{children:"packageInfo"})," of the request body."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "packageInfo": {\n    "type": "project",\n    "purpose": "project_merge",\n    "name": "ProjectMerge_success",\n    "environment": {\n      "id": "Source environment URL",\n      "name": "Source environment name"\n    },\n    "tocView": {\n      "settings": {\n        "updateSchema": [\n          "recal_table_logical_size",\n          "recal_table_keys_fact_entry_level",\n          "update_schema_logical_info"\n        ],\n        "aclOnReplacingObjects": "use_existing",\n        "aclOnNewObjects": ["keep_acl_as_source_object"],\n        "validateDependencies": true,\n        "defaultAction": "use_existing",\n        "folderActions": [\n          {\n            "id": "8D679D5111D3E4981000E787EC6DE8A4",\n            "action": "use_existing"\n          }\n        ],\n        "objectTypeActions": [\n          {\n            "type": 1,\n            "subtype": 256,\n            "action": "use_existing"\n          }\n        ],\n        "objectActions": [\n          {\n            "id": "8D679D5111D3E4981000E787EC6DE8A4",\n            "action": "replace"\n          }\n        ],\n        "translationAction": "existing"\n      }\n    },\n    "treeView": {}\n  },\n  "importInfo": {\n    "environment": {\n      "id": "Target environment URL",\n      "name": "Target environment name"\n    },\n    "project": {\n      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n      "name": "MicroStrategy Tutorial"\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "35958BEB7C56491C9A43F7661501E177:B71E7ECF60104A62BA15625C444A623F",\n  "packageInfo": {\n    "id": "35958BEB7C56491C9A43F7661501E177",\n    "status": "creating",\n    "progress": 0\n  },\n  "importInfo": {\n    "id": "B71E7ECF60104A62BA15625C444A623F",\n    "status": "pending",\n    "importRequestStatus": "pending",\n    "undoRequestStatus": "pending",\n    "progress": 0\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"step-2-use-the-get-apimigrationsmigrationid-api-call-to-the-source-library",children:["Step 2: Use the ",(0,i.jsx)(n.code,{children:"GET /api/migrations/{migrationId}"})," API call to the source Library"]}),"\n",(0,i.jsxs)(n.p,{children:["Since the package creation is asynchronously processing, this call checks the creation status. It is usually ",(0,i.jsx)(n.code,{children:"creating"}),", ",(0,i.jsx)(n.code,{children:"created"}),", or ",(0,i.jsx)(n.code,{children:"create_failed"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Repeat this step until the ",(0,i.jsx)(n.code,{children:"packageInfo.status"})," from the response is ",(0,i.jsx)(n.code,{children:"created"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:["The value of ",(0,i.jsx)(n.code,{children:"packageInfo.status"})," could be ",(0,i.jsx)(n.code,{children:"creating"}),", and you should keep pulling the GET until you get ",(0,i.jsx)(n.code,{children:"created"}),"."]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"creating"})," value usually associates with a progress percentage number under ",(0,i.jsx)(n.code,{children:"packageInfo.progress"}),"."]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "35958BEB7C56491C9A43F7661501E177:B71E7ECF60104A62BA15625C444A623F",\n  "packageInfo": {\n    "id": "35958BEB7C56491C9A43F7661501E177",\n    "replicated": false,\n    "type": "project",\n    "purpose": "project_merge",\n    "name": "ProjectMerge_success",\n    "creator": {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator"\n    },\n    "creationDate": "2022-03-16T07:38:40.125+0000",\n    "lastUpdatedDate": "2022-03-16T07:39:09.254+0000",\n    "environment": {\n      "id": "Source environment URL",\n      "name": "Source environment name"\n    },\n    "storage": {\n      "size": 1421139,\n      "path": "mstr/shared/migrations/packages/2022-03-16/9A838E0F9C9E4910AF57344299327DF9.mmp"\n    },\n    "project": {\n      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n      "name": "MicroStrategy Tutorial"\n    },\n    "status": "created",\n    "message": "",\n    "progress": 100,\n    "deleted": false,\n    "existing": true\n  },\n  "importInfo": {\n    "id": "B71E7ECF60104A62BA15625C444A623F",\n    "creator": {},\n    "creationDate": "2022-03-16T07:38:40.126+0000",\n    "lastUpdatedDate": "2022-03-16T07:38:40.126+0000",\n    "environment": {\n      "id": "Target environment URL",\n      "name": "Target environment name"\n    },\n    "status": "pending",\n    "importRequestStatus": "pending",\n    "undoRequestStatus": "pending",\n    "progress": 0,\n    "message": "",\n    "undoStorage": {},\n    "project": {\n      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n      "name": "MicroStrategy Tutorial"\n    },\n    "deleted": false\n  },\n  "version": "2"\n}\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"step-3-use-the-patch-apimigrationsmigrationid-api-call-to-the-source-library",children:["Step 3: Use the ",(0,i.jsx)(n.code,{children:"PATCH /api/migrations/{migrationId}"})," API call to the source Library"]}),"\n",(0,i.jsx)(n.p,{children:"This call requests and approves the import migration."}),"\n",(0,i.jsxs)(n.p,{children:["First, change the import request status to ",(0,i.jsx)(n.code,{children:"requested"}),", then change it to ",(0,i.jsx)(n.code,{children:"approved"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "importInfo": {\n    "importRequestStatus": "requested"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "35958BEB7C56491C9A43F7661501E177:B71E7ECF60104A62BA15625C444A623F",\n  "packageInfo": {\n    "id": "35958BEB7C56491C9A43F7661501E177",\n    "status": "created",\n    "progress": 100\n  },\n  "importInfo": {\n    "id": "B71E7ECF60104A62BA15625C444A623F",\n    "status": "pending",\n    "importRequestStatus": "requested",\n    "undoRequestStatus": "pending",\n    "progress": 0\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["You must successfully PATCH the ",(0,i.jsx)(n.code,{children:'"importRequestStatus": "requested"'}),", then make another PATCH call as ",(0,i.jsx)(n.code,{children:'"importRequestStatus": "approved"'}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "importInfo": {\n    "importRequestStatus": "approved"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "35958BEB7C56491C9A43F7661501E177:B71E7ECF60104A62BA15625C444A623F",\n  "packageInfo": {\n    "id": "35958BEB7C56491C9A43F7661501E177",\n    "status": "locked",\n    "progress": 100\n  },\n  "importInfo": {\n    "id": "B71E7ECF60104A62BA15625C444A623F",\n    "status": "pending",\n    "importRequestStatus": "approved",\n    "undoRequestStatus": "pending",\n    "progress": 0\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"step-4-use-the-get-apimigrationsmigrationidshowcontentall-api-call-to-the-source-library",children:["Step 4: Use the ",(0,i.jsx)(n.code,{children:"GET /api/migrations/{migrationId}?showContent=all"})," API call to the source Library"]}),"\n",(0,i.jsx)(n.p,{children:"This call gets the full definition of the migration to prepare the import call."}),"\n",(0,i.jsxs)(n.p,{children:["This is similar to step 2, but with the ",(0,i.jsx)(n.code,{children:"showContent=all"})," query parameter, save the response body and use it for the next step."]}),"\n",(0,i.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "35958BEB7C56491C9A43F7661501E177:B71E7ECF60104A62BA15625C444A623F",\n  "packageInfo": {\n    "id": "35958BEB7C56491C9A43F7661501E177",\n    "replicated": false,\n    "type": "project",\n    "purpose": "project_merge",\n    "name": "ProjectMerge_success",\n    "creator": {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator"\n    },\n    "creationDate": "2022-03-16T07:38:40.125+0000",\n    "lastUpdatedDate": "2022-03-16T07:39:09.254+0000",\n    "environment": {\n      "id": "Source environment URL",\n      "name": "Source environment name"\n    },\n    "storage": {\n      "size": 1421139,\n      "path": "mstr/shared/migrations/packages/2022-03-16/9A838E0F9C9E4910AF57344299327DF9.mmp"\n    },\n    "project": {\n      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n      "name": "MicroStrategy Tutorial"\n    },\n    "status": "locked",\n    "message": "",\n    "progress": 100,\n    "deleted": false,\n    "existing": true,\n    "tocView": {\n      "settings": {\n        "updateSchema": [\n          "recal_table_logical_size",\n          "recal_table_keys_fact_entry_level",\n          "update_schema_logical_info"\n        ],\n        "aclOnReplacingObjects": "use_existing",\n        "aclOnNewObjects": ["keep_acl_as_source_object"],\n        "validateDependencies": true,\n        "defaultAction": "use_existing",\n        "folderActions": [\n          {\n            "id": "8D679D5111D3E4981000E787EC6DE8A4",\n            "action": "use_existing"\n          }\n        ],\n        "objectTypeActions": [\n          {\n            "type": 1,\n            "subtype": 256,\n            "action": "use_existing"\n          }\n        ],\n        "objectActions": [\n          {\n            "id": "8D679D5111D3E4981000E787EC6DE8A4",\n            "action": "replace"\n          }\n        ],\n        "translationAction": "existing"\n      }\n    },\n    "treeView": {}\n  },\n  "importInfo": {\n    "id": "B71E7ECF60104A62BA15625C444A623F",\n    "creator": {},\n    "creationDate": "2022-03-16T07:38:40.126+0000",\n    "lastUpdatedDate": "2022-03-16T07:38:40.126+0000",\n    "environment": {\n      "id": "Target environment URL",\n      "name": "Target environment name"\n    },\n    "status": "pending",\n    "importRequestStatus": "pending",\n    "undoRequestStatus": "pending",\n    "progress": 0,\n    "message": "",\n    "undoStorage": {},\n    "project": {\n      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n      "name": "MicroStrategy Tutorial"\n    },\n    "deleted": false\n  },\n  "version": "2"\n}\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"step-5-use-the-put-apimigrationsmigrationid-api-call-to-the-target-library",children:["Step 5: Use the ",(0,i.jsx)(n.code,{children:"PUT /api/migrations/{migrationId}"})," API call to the target Library"]}),"\n",(0,i.jsx)(n.p,{children:"This call triggers the package import."}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Header:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F" // required for creating project package\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sample Request Body:"}),"\n",(0,i.jsxs)(n.p,{children:["Copy the response body from step 4 and change ",(0,i.jsx)(n.code,{children:'"replicated": false"'}),", to ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "35958BEB7C56491C9A43F7661501E177:B71E7ECF60104A62BA15625C444A623F",\n  "packageInfo": {\n    "id": "35958BEB7C56491C9A43F7661501E177",\n    "replicated": true,\n    "type": "project",\n    "purpose": "project_merge",\n    "name": "ProjectMerge_success",\n    "creator": {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator"\n    },\n    "creationDate": "2022-03-16T07:38:40.125+0000",\n    "lastUpdatedDate": "2022-03-16T07:39:09.254+0000",\n    "environment": {\n      "id": "Source environment URL",\n      "name": "Source environment name"\n    },\n    "storage": {\n      "size": 1421139,\n      "path": "mstr/shared/migrations/packages/2022-03-16/9A838E0F9C9E4910AF57344299327DF9.mmp"\n    },\n    "project": {\n      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n      "name": "MicroStrategy Tutorial"\n    },\n    "status": "locked",\n    "message": "",\n    "progress": 100,\n    "deleted": false,\n    "existing": true,\n    "tocView": {\n      "settings": {\n        "updateSchema": [\n          "recal_table_logical_size",\n          "recal_table_keys_fact_entry_level",\n          "update_schema_logical_info"\n        ],\n        "aclOnReplacingObjects": "use_existing",\n        "aclOnNewObjects": ["keep_acl_as_source_object"],\n        "validateDependencies": true,\n        "defaultAction": "use_existing",\n        "folderActions": [\n          {\n            "id": "8D679D5111D3E4981000E787EC6DE8A4",\n            "action": "use_existing"\n          }\n        ],\n        "objectTypeActions": [\n          {\n            "type": 1,\n            "subtype": 256,\n            "action": "use_existing"\n          }\n        ],\n        "objectActions": [\n          {\n            "id": "8D679D5111D3E4981000E787EC6DE8A4",\n            "action": "replace"\n          }\n        ],\n        "translationAction": "existing"\n      }\n    },\n    "treeView": {}\n  },\n  "importInfo": {\n    "id": "B71E7ECF60104A62BA15625C444A623F",\n    "creator": {},\n    "creationDate": "2022-03-16T07:38:40.126+0000",\n    "lastUpdatedDate": "2022-03-16T07:38:40.126+0000",\n    "environment": {\n      "id": "Target environment URL",\n      "name": "Target environment name"\n    },\n    "status": "pending",\n    "importRequestStatus": "pending",\n    "undoRequestStatus": "pending",\n    "progress": 0,\n    "message": "",\n    "undoStorage": {},\n    "project": {\n      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n      "name": "MicroStrategy Tutorial"\n    },\n    "deleted": false\n  },\n  "version": "2"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sample Response Body:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "35958BEB7C56491C9A43F7661501E177:B71E7ECF60104A62BA15625C444A623F",\n  "packageInfo": {\n    "id": "35958BEB7C56491C9A43F7661501E177",\n    "status": "locked",\n    "progress": 100\n  },\n  "importInfo": {\n    "id": "B71E7ECF60104A62BA15625C444A623F",\n    "status": "importing",\n    "importRequestStatus": "approved",\n    "undoRequestStatus": "pending",\n    "progress": 0\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"step-6-optional-use-the-get-apimigrationsmigrationid-api-call-to-the-target-library",children:["Step 6 (optional): Use the ",(0,i.jsx)(n.code,{children:"GET /api/migrations/{migrationId}"})," API call to the target Library"]}),"\n",(0,i.jsxs)(n.p,{children:["Since the package import is asynchronously processing, this call checks the import status. It is usually ",(0,i.jsx)(n.code,{children:"importing"}),", ",(0,i.jsx)(n.code,{children:"imported"}),", or ",(0,i.jsx)(n.code,{children:"import_failed"}),"."]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:["The value of ",(0,i.jsx)(n.code,{children:"packageInfo.status"})," could be ",(0,i.jsx)(n.code,{children:"creating"}),", and you should keep pulling the GET until you get ",(0,i.jsx)(n.code,{children:"created"}),"."]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"creating"})," value usually associates with a progress percentage number under ",(0,i.jsx)(n.code,{children:"packageInfo.progress"}),"."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "35958BEB7C56491C9A43F7661501E177:B71E7ECF60104A62BA15625C444A623F",\n  "packageInfo": {\n    "id": "35958BEB7C56491C9A43F7661501E177",\n    "replicated": false,\n    "type": "project",\n    "purpose": "project_merge",\n    "name": "ProjectMerge_success",\n    "creator": {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator"\n    },\n    "creationDate": "2022-03-16T07:38:40.125+0000",\n    "lastUpdatedDate": "2022-03-16T07:39:09.254+0000",\n    "environment": {\n      "id": "Source environment URL",\n      "name": "Source environment name"\n    },\n    "storage": {\n      "size": 1421139,\n      "path": "mstr/shared/migrations/packages/2022-03-16/9A838E0F9C9E4910AF57344299327DF9.mmp"\n    },\n    "project": {\n      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n      "name": "MicroStrategy Tutorial"\n    },\n    "status": "created",\n    "message": "",\n    "progress": 100,\n    "deleted": false,\n    "existing": true,\n    "tocView": {\n      "settings": {\n        "updateSchema": [\n          "recal_table_logical_size",\n          "recal_table_keys_fact_entry_level",\n          "update_schema_logical_info"\n        ],\n        "aclOnReplacingObjects": "use_existing",\n        "aclOnNewObjects": ["keep_acl_as_source_object"],\n        "validateDependencies": true,\n        "defaultAction": "use_existing",\n        "folderActions": [\n          {\n            "id": "8D679D5111D3E4981000E787EC6DE8A4",\n            "action": "use_existing"\n          }\n        ],\n        "objectTypeActions": [\n          {\n            "type": 1,\n            "subtype": 256,\n            "action": "use_existing"\n          }\n        ],\n        "objectActions": [\n          {\n            "id": "8D679D5111D3E4981000E787EC6DE8A4",\n            "action": "replace"\n          }\n        ],\n        "translationAction": "existing"\n      }\n    },\n    "treeView": {}\n  },\n  "importInfo": {\n    "id": "B71E7ECF60104A62BA15625C444A623F",\n    "creator": {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator"\n    },\n    "creationDate": "2022-03-16T08:50:13.150+0000",\n    "lastUpdatedDate": "2022-03-16T08:50:28.666+0000",\n    "environment": {\n      "id": "Target environment URL",\n      "name": "Target environment name"\n    },\n    "status": "imported",\n    "importRequestStatus": "importing",\n    "undoRequestStatus": "pending",\n    "progress": 50,\n    "message": "",\n    "undoStorage": {\n      "size": 205,\n      "path": "mstr/shared/migrations/undo/35958BEB7C56491C9A43F7661501E177/B71E7ECF60104A62BA15625C444A623F.mmp"\n    },\n    "project": {\n      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n      "name": "MicroStrategy Tutorial"\n    },\n    "deleted": false\n  },\n  "version": "2"\n}\n'})}),(0,i.jsx)(n.h2,{id:"undo-migration",children:"Undo migration"}),(0,i.jsx)(n.p,{children:"After the project merge process finishes successfully, an undo package is automatically generated. You can start an undo process in the target environment to undo the project merge and restore the target project to the state before the project merge."}),(0,i.jsxs)(n.h3,{id:"step-1-use-the-patch-apimigrationsmigrationid-api-call-to-the-target-library",children:["Step 1: Use the ",(0,i.jsx)(n.code,{children:"PATCH /api/migrations/{migrationId}"})," API call to the target Library"]}),(0,i.jsx)(n.p,{children:"This call requests a package undo."}),(0,i.jsxs)(n.p,{children:["Patch the migration by setting ",(0,i.jsx)(n.code,{children:'"undoRequestStatus": "requested"'})]}),(0,i.jsx)(n.p,{children:"Sample Request Header:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.\n'})}),(0,i.jsx)(n.p,{children:"Sample Request Body:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "importInfo": {\n    "undoRequestStatus": "requested"\n  }\n}\n'})}),(0,i.jsx)(n.p,{children:"Sample Response Body:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "35958BEB7C56491C9A43F7661501E177:B71E7ECF60104A62BA15625C444A623F",\n  "packageInfo": {\n    "id": "35958BEB7C56491C9A43F7661501E177",\n    "status": "locked",\n    "progress": 100\n  },\n  "importInfo": {\n    "id": "B71E7ECF60104A62BA15625C444A623F",\n    "status": "imported",\n    "importRequestStatus": "approved",\n    "undoRequestStatus": "requested",\n    "progress": 100\n  }\n}\n'})}),(0,i.jsxs)(n.h3,{id:"step-2-use-the-patch-apimigrationsmigrationid-api-call-to-the-target-library",children:["Step 2: Use the ",(0,i.jsx)(n.code,{children:"PATCH /api/migrations/{migrationId}"})," API call to the target Library"]}),(0,i.jsx)(n.p,{children:"This call approves the package undo and triggers the undo process."}),(0,i.jsxs)(n.p,{children:["When triggering an undo, ",(0,i.jsx)(n.code,{children:"X-MSTR-ProjectID"})," is required in header."]}),(0,i.jsx)(n.p,{children:"Sample Request Header:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F" // Target Project ID\n'})}),(0,i.jsx)(n.p,{children:"Sample Request Body:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "importInfo": {\n    "undoRequestStatus": "approved"\n  }\n}\n'})}),(0,i.jsx)(n.p,{children:"Sample Response Body:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "35958BEB7C56491C9A43F7661501E177:B71E7ECF60104A62BA15625C444A623F",\n  "packageInfo": {\n    "id": "35958BEB7C56491C9A43F7661501E177",\n    "status": "locked",\n    "progress": 100\n  },\n  "importInfo": {\n    "id": "B71E7ECF60104A62BA15625C444A623F",\n    "status": "undoing",\n    "importRequestStatus": "approved",\n    "undoRequestStatus": "approved",\n    "progress": 100\n  }\n}\n'})}),(0,i.jsxs)(n.h3,{id:"step-3-optional-use-the-get-apimigrationsmigrationid-api-call-to-the-target-library",children:["Step 3 (optional): Use the ",(0,i.jsx)(n.code,{children:"GET /api/migrations/{migrationId}"})," API call to the target Library"]}),(0,i.jsxs)(n.p,{children:["Since the package undo is asynchronously processing, this call checks the undo status. Usually it is ",(0,i.jsx)(n.code,{children:"undoing"}),", ",(0,i.jsx)(n.code,{children:"undo_success"}),", or ",(0,i.jsx)(n.code,{children:"undo_failed"}),"."]}),(0,i.jsx)(n.h2,{id:"delete-package",children:"Delete package"}),(0,i.jsx)(n.p,{children:"Make sure to delete migrations from the source and target one by one."}),(0,i.jsxs)(n.h3,{id:"step-1-use-the-delete-apimigrationspackageidpackageid-api-call-to-the-source-library",children:["Step 1: Use the ",(0,i.jsx)(n.code,{children:"DELETE /api/migrations?packageId={packageId}"})," API call to the source Library"]}),(0,i.jsx)(n.p,{children:"This call deletes a package from it."}),(0,i.jsx)(n.p,{children:"Sample Request Header:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.\n'})}),(0,i.jsxs)(n.h3,{id:"step-2-use-the-delete-apimigrationspackageidpackageid-api-call-to-the-target-library",children:["Step 2: Use the ",(0,i.jsx)(n.code,{children:"DELETE /api/migrations?packageId={{packageId}}"})," API call to the target Library"]}),(0,i.jsx)(n.p,{children:"This call deletes a package from it."}),(0,i.jsx)(n.p,{children:"Sample Request Header:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"  // auth token from Authorization response.\n'})}),(0,i.jsx)(n.h2,{id:"performance",children:"Performance"}),(0,i.jsx)(n.p,{children:"For performance concerns, MicroStrategy suggests you create or import one package per session and time."}),(0,i.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),(0,i.jsx)(n.p,{children:"A package created in an earlier platform version can be imported to a newer platform version, but not vice versa."}),(0,i.jsx)(n.h2,{id:"suggestions",children:"Suggestions"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The user should have admin privileges in both source and target environments."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Due to databases being distributed across environments, make sure to connect to both the target and source environments during the import or deletion of packages and when viewing migration status."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Environment and project information should be provided in the request body when starting the migrations."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Use the unique ",(0,i.jsx)(n.code,{children:"environment URL"})," as the unique environment ID. Make sure to use the same environment ID when you connect to it in Workstation."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Conflict rules:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"use_existing"}),": No change is made to the destination object. The source object is not copied."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"replace"}),": The destination object is replaced with the source object."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"keep_both"}),": No change is made to the destination object. The source object is duplicated if the destination object does not exist. However, if the destination object exists with the same ID and version, the source object is ignored. If the destination object exists with the same ID and a different version, the source object is saved as a new object."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"use_newer"}),": If the source object modification time is more recent than the destination object modification time, the Replace action is used. Otherwise, the Use existing action is used."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"use_older"}),": If the source object modification time is more recent than the destination object modification time, the Use existing action is used. Otherwise, the Replace action is used."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The maximum size of the package is 2 GB. If it is larger, the creation fails."}),"\n"]}),"\n"]}),(0,i.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If the Library Server cannot connect to the database, you may receive the following error response:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The API requires MicroStrategy Storage Service. Please contact your administrator."}),"\n",(0,i.jsxs)(n.li,{children:["This can occur due to the following reasons:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Database not running"}),"\n",(0,i.jsx)(n.li,{children:"Database version is lower than required"}),"\n",(0,i.jsxs)(n.li,{children:["Database configuration is missing or invalid in ",(0,i.jsx)(n.code,{children:"configOverride.properties"})," file"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If your storage location is not configured property, you may receive the following message:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The Storage Service is not configured properly, please contact your administrator to configure Storage Service"}),"\n",(0,i.jsxs)(n.li,{children:["See ",(0,i.jsx)(n.a,{href:"https://www2.microstrategy.com/producthelp/Current/Workstation/WebHelp/Lang_1033/Content/storage_service_config_workstation.htm",children:"Configure the Storage Service via Workstation"})," for more information."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If the undo package is not generated when the import finishes successfully in the target environment, check if you set any of the conflict rules as ",(0,i.jsx)(n.code,{children:"keep_both"})," in the source environment. The undo functionality is not supported if you use ",(0,i.jsx)(n.code,{children:"keep_both"})," in any conflict rules. To ensure that the undo package can be generated and used to roll back the project merge, you need to ensure that no the ",(0,i.jsx)(n.code,{children:"keep_both"})," rule is used in the package settings of the source environment."]}),"\n"]}),"\n"]})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(96540);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);