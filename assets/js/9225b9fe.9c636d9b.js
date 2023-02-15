"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8392],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=i,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8395:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var n,i=a(3117),r=a(102),o=(a(7294),a(3905)),l=["components"],s={title:"Upload and download migration packages",description:"You can upload and download migration packages in Workstation."},p=void 0,c={unversionedId:"common-workflows/administration/migrations/migrations-in-workstation/upload-and-download-migration-packages",id:"common-workflows/administration/migrations/migrations-in-workstation/upload-and-download-migration-packages",title:"Upload and download migration packages",description:"You can upload and download migration packages in Workstation.",source:"@site/docs/common-workflows/administration/migrations/migrations-in-workstation/upload-and-download-migration-packages.md",sourceDirName:"common-workflows/administration/migrations/migrations-in-workstation",slug:"/common-workflows/administration/migrations/migrations-in-workstation/upload-and-download-migration-packages",permalink:"/rest-api-docs/common-workflows/administration/migrations/migrations-in-workstation/upload-and-download-migration-packages",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/migrations/migrations-in-workstation/upload-and-download-migration-packages.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1676479687,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{title:"Upload and download migration packages",description:"You can upload and download migration packages in Workstation."},sidebar:"tutorialSidebar",previous:{title:"Object migration groups between environments",permalink:"/rest-api-docs/common-workflows/administration/migrations/migrations-in-workstation/object-migration-groups-between-environments"},next:{title:"Create and import migration packages",permalink:"/rest-api-docs/common-workflows/administration/migrations/create-and-import-migration-packages/"}},d={},m=[{value:"APIs",id:"apis",level:2},{value:"Privileges and authorization",id:"privileges-and-authorization",level:2},{value:"Use scenario",id:"use-scenario",level:2},{value:"Upload and import migration package",id:"upload-and-import-migration-package",level:2},{value:"Step 1: Use the <code>GET /api/migrations/packages/{packageId}/binary</code> API call to the source Library",id:"step-1-use-the-get-apimigrationspackagespackageidbinary-api-call-to-the-source-library",level:3},{value:"Step 2: Use the <code>POST /api/mstrServices/library/storage/sharedFileStore/files</code> API call to the target Library",id:"step-2-use-the-post-apimstrserviceslibrarystoragesharedfilestorefiles-api-call-to-the-target-library",level:3},{value:"Step 3: Use the <code>PUT /api/mstrServices/library/storage/sharedFileStore/files/{fileId}/binary</code> API call to the target Library",id:"step-3-use-the-put-apimstrserviceslibrarystoragesharedfilestorefilesfileidbinary-api-call-to-the-target-library",level:3},{value:"Step 4: Use the <code>POST /api/migrations</code> API call to the target Library",id:"step-4-use-the-post-apimigrations-api-call-to-the-target-library",level:3},{value:"Step 5: Use the <code>GET /api/migrations/{migrationid}</code> API call to the target Library",id:"step-5-use-the-get-apimigrationsmigrationid-api-call-to-the-target-library",level:3},{value:"Delete uploaded migration package",id:"delete-uploaded-migration-package",level:2},{value:"Step 1: Use the <code>DELETE /api/mstrServices/library/storage/sharedFileStore/files/{fileId}</code> API call to the source Library",id:"step-1-use-the-delete-apimstrserviceslibrarystoragesharedfilestorefilesfileid-api-call-to-the-source-library",level:3},{value:"Step 2: Use the <code>DELETE /api/migrations?packageId={packageId}</code> API call to the target Library",id:"step-2-use-the-delete-apimigrationspackageidpackageid-api-call-to-the-target-library",level:3},{value:"Performance",id:"performance",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Suggestions",id:"suggestions",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],u=(n="Available",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),g={toc:m};function h(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u,{since:"2021 Update 7",mdxType:"Available"}),(0,o.kt)("p",null,"Starting in MicroStrategy 2021 Update 7, you can upload and download migration packages in Workstation. These packages are all maintained by the ",(0,o.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/Workstation/WebHelp/Lang_1033/Content/storage_service.htm"},"MicroStrategy Storage Service"),", users can download these packages from one storage service and then upload to another the storage service."),(0,o.kt)("p",null,"This feature is usually used in the following two scenarios:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Objects need to be migrated between the two environments which cannot be configured with the same storage service. With this feature, the user who has the privileges of both environments can download the package from the source environment and then upload and import it to the target environments."),(0,o.kt)("li",{parentName:"ol"},"Objects need to be migrated between the two environments, but no user has the privileges of both environments. With this feature, one user who has the privilege of the source environment can download the package from the source environment and then another user who has the privilege of the target environment can upload and import it to the target environments.")),(0,o.kt)("p",null,"In other cases, you should prefer the normal migration feature."),(0,o.kt)("p",null,"You must ",(0,o.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/Workstation/WebHelp/Lang_1033/Content/storage_service_config_workstation.htm"},"configure the package storage location in Workstation")," to use this feature."),(0,o.kt)("h2",{id:"apis"},"APIs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Shared%20File%20Store/createSharedFileMeta"},"POST /api/mstrServices/library/storage/sharedFileStore/files")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Shared%20File%20Store/uploadSharedFileBinary"},"PUT /api/mstrServices/library/storage/sharedFileStore/files/{fileId}/binary")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Migrations/createMigration"},"POST /api/migrations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?#/Migrations/getMigration"},"GET /api/migrations/{migrationId}")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Migrations/downloadPackageBinary"},"GET /api/migrations/packages/{packageId}/binary")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Shared%20File%20Store/downloadSharedFileBinary"},"GET /api/mstrServices/library/storage/sharedFileStore/files/{fileId}/binary")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Shared%20File%20Store/getMigrationList_1"},"GET /api/mstrServices/library/storage/sharedFileStore/files?type=migrations.packages&&offset={offset}&&limit={limit}")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Shared%20File%20Store/deleteSharedFile"},"DELETE /api/mstrServices/library/storage/sharedFileStore/files/{fileId}")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Migrations/deletePackage_1"},"DELETE /api/migrations?packageId={packageId}"))),(0,o.kt)("h2",{id:"privileges-and-authorization"},"Privileges and authorization"),(0,o.kt)("p",null,"You need the following privileges for the environments where you download migration packages from:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Manage Migration Packages")),(0,o.kt)("p",null,"You need the following privileges for the environments where you upload migration packages to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Manage Migration Packages"),(0,o.kt)("li",{parentName:"ul"},"Environment Administrator")),(0,o.kt)("p",null,"You need the following privileges for the environments where you migrate migration packages to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Manage Migration Packages"),(0,o.kt)("li",{parentName:"ul"},"Create Package"),(0,o.kt)("li",{parentName:"ul"},"Bypass all objects security check")),(0,o.kt)("p",null,"To execute the API, you must get the authorization token by executing the ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login")," request, and get a token as ",(0,o.kt)("inlineCode",{parentName:"p"},'"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"')," in the response header. Keep the token value. It is required when executing the REST API. See ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/authentication"},"Authentication")," for more information."),(0,o.kt)("h2",{id:"use-scenario"},"Use scenario"),(0,o.kt)("p",null,"The best practice scenario is when users are working on movement between different environments, an admin of old environments maybe has not been given access to the new platform, to which they want to move objects to. They can download the packages from the old environment and let another user, who has privilege on the new environment, to upload the packages."),(0,o.kt)("h2",{id:"upload-and-import-migration-package"},"Upload and import migration package"),(0,o.kt)("h3",{id:"step-1-use-the-get-apimigrationspackagespackageidbinary-api-call-to-the-source-library"},"Step 1: Use the ",(0,o.kt)("inlineCode",{parentName:"h3"},"GET /api/migrations/packages/{packageId}/binary")," API call to the source Library"),(0,o.kt)("p",null,"This call can download the ",(0,o.kt)("inlineCode",{parentName:"p"},"Object Migration")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Project Merge")," package file from the storage service."),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n')),(0,o.kt)("p",null,"The response body is the binary data of the migration package."),(0,o.kt)("p",null,"If you want to download the uploaded migration package, you should use the ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/mstrServices/library/storage/sharedFileStore/files/{fileId}/binary")," API. It has the same header and response formats as the ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/migrations/packages/{packageId}/binary")," API does."),(0,o.kt)("h3",{id:"step-2-use-the-post-apimstrserviceslibrarystoragesharedfilestorefiles-api-call-to-the-target-library"},"Step 2: Use the ",(0,o.kt)("inlineCode",{parentName:"h3"},"POST /api/mstrServices/library/storage/sharedFileStore/files")," API call to the target Library"),(0,o.kt)("p",null,"This call will create a package metadata file on the storage service."),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," of uploaded file should be ",(0,o.kt)("inlineCode",{parentName:"p"},"migrations.packages")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"extension")," of this file should be ",(0,o.kt)("inlineCode",{parentName:"p"},"mmp")," in this feature. The ",(0,o.kt)("inlineCode",{parentName:"p"},"size")," of the file should be equal to or less than 2GB."),(0,o.kt)("p",null,"Provide the correct file information in the request body, e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"sha256"),". The package information, namely ",(0,o.kt)("inlineCode",{parentName:"p"},"packageType")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"packagePurpose"),", are defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"extraInfo"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"packageType")," can be ",(0,o.kt)("inlineCode",{parentName:"p"},"project"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"project_security")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"configuration"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"packagePurpose")," can be ",(0,o.kt)("inlineCode",{parentName:"p"},"object_migration")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"project_merge"),"."),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "ProjectMigration_success_upload",\n  "type": "migrations.packages",\n  "size": 600,\n  "sha256": "f392221a7d188949c19a9c8a8b5c991135ea31269658d946ebc424c74a3b5dc6",\n  "extension": "mmp",\n  "environment": {\n    "id": "Source environment URL",\n    "name": "Source environment name"\n  },\n  "extraInfo": {\n    "packageType": "project",\n    "packagePurpose": "object_migration"\n  }\n}\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "bWlncmF0aW9ucy5wYWNrYWdlczpDNEVGOEQyMjk0ODA0NzI1OUYyRkQzQkMzNTE2RkI2RA==",\n  "type": "migrations.packages",\n  "name": "ProjectMigration_success_upload",\n  "path": "mstr/shared/migrations/packages/2022-09-07/C4EF8D22948047259F2FD3BC3516FB6D.mmp",\n  "sha256": "f392221a7d188949c19a9c8a8b5c991135ea31269658d946ebc424c74a3b5dc6",\n  "existing": false,\n  "size": 600,\n  "extension": "mmp",\n  "creator": {\n    "id": "54F3D26011D2896560009A8E67019608",\n    "name": "Administrator"\n  },\n  "environment": {\n    "id": "Source environment URL",\n    "name": "Source environment name"\n  },\n  "creationDate": "2022-09-07T06:30:01.537+0000",\n  "lastUpdatedDate": "2022-09-07T06:30:01.537+0000",\n  "extraInfo": {\n    "packageId": "C337C6D1FAC94E1998DB162B20D6B95E",\n    "packageType": "project",\n    "packagePurpose": "object_migration"\n  }\n}\n')),(0,o.kt)("h3",{id:"step-3-use-the-put-apimstrserviceslibrarystoragesharedfilestorefilesfileidbinary-api-call-to-the-target-library"},"Step 3: Use the ",(0,o.kt)("inlineCode",{parentName:"h3"},"PUT /api/mstrServices/library/storage/sharedFileStore/files/{fileId}/binary")," API call to the target Library"),(0,o.kt)("p",null,"Since the migration package file metadata is created successfully, thie call will upload the package file to the storage service."),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "multipart/form-data"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n')),(0,o.kt)("p",null,"The request body contains the binary data of the package file with key ",(0,o.kt)("inlineCode",{parentName:"p"},"file"),"."),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "bWlncmF0aW9ucy5wYWNrYWdlczpDNEVGOEQyMjk0ODA0NzI1OUYyRkQzQkMzNTE2RkI2RA==",\n  "type": "migrations.packages",\n  "name": "ProjectMigration_success_upload",\n  "path": "mstr/shared/migrations/packages/2022-09-07/C4EF8D22948047259F2FD3BC3516FB6D.mmp",\n  "sha256": "f392221a7d188949c19a9c8a8b5c991135ea31269658d946ebc424c74a3b5dc6",\n  "existing": true,\n  "size": 600,\n  "extension": "mmp",\n  "creator": {\n    "id": "54F3D26011D2896560009A8E67019608",\n    "name": "Administrator"\n  },\n  "environment": {\n    "id": "Source environment URL",\n    "name": "Source environment name"\n  },\n  "creationDate": "2022-09-07T06:30:01.537+0000",\n  "lastUpdatedDate": "2022-09-07T07:33:03.652+0000",\n  "extraInfo": {\n    "packageId": "C337C6D1FAC94E1998DB162B20D6B95E",\n    "packageType": "project",\n    "packagePurpose": "object_migration"\n  }\n}\n')),(0,o.kt)("h3",{id:"step-4-use-the-post-apimigrations-api-call-to-the-target-library"},"Step 4: Use the ",(0,o.kt)("inlineCode",{parentName:"h3"},"POST /api/migrations")," API call to the target Library"),(0,o.kt)("p",null,"This call will trigger the uploaded package migration. Package File id is defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"packageInfo")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"storage")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"sharedFileStore")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"file"),"."),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,o.kt)("p",null,"There are two types of supported migration packages: ",(0,o.kt)("inlineCode",{parentName:"p"},"project package")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"configuration package"),". For ",(0,o.kt)("inlineCode",{parentName:"p"},"project package"),", the related ",(0,o.kt)("inlineCode",{parentName:"p"},"X-MSTR-ProjectID")," project ID is required in the request header of each endpoint. For ",(0,o.kt)("inlineCode",{parentName:"p"},"configuration package"),", the project ID should not be used in the request header."),(0,o.kt)("p",null,"Provide the correct ",(0,o.kt)("inlineCode",{parentName:"p"},"environment")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"project")," information in the request body."),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "packageInfo": {\n    "storage": {\n      "sharedFileStore": {\n        "files": {\n          "id": "{{fileId}}"\n        }\n      }\n    },\n    "purpose": "migration_from_shared_file_store"\n  },\n  "importInfo": {\n    "environment": {\n      "id": "https://env-295736.customer.cloud.microstrategy.com/consume-upload-delta-fix/",\n      "name": "upload-aws"\n    },\n    "project": {\n      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n      "name": "MicroStrategy Tutorial"\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "C337C6D1FAC94E1998DB162B20D6B95E:C5B8D2D7B76641E1817496B1D77EE09A",\n  "packageInfo": {\n    "id": "C337C6D1FAC94E1998DB162B20D6B95E",\n    "status": "locked",\n    "progress": 100.0\n  },\n  "importInfo": {\n    "id": "C5B8D2D7B76641E1817496B1D77EE09A",\n    "status": "importing",\n    "importRequestStatus": "approved",\n    "undoRequestStatus": "pending",\n    "progress": 0.0\n  }\n}\n')),(0,o.kt)("h3",{id:"step-5-use-the-get-apimigrationsmigrationid-api-call-to-the-target-library"},"Step 5: Use the ",(0,o.kt)("inlineCode",{parentName:"h3"},"GET /api/migrations/{migrationid}")," API call to the target Library"),(0,o.kt)("p",null,"Since the package migration is asynchronously processing, this call checks the migration status, which is usually ",(0,o.kt)("inlineCode",{parentName:"p"},"importing"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"imported"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"import_failed"),"."),(0,o.kt)("p",null,"Repeat this step until you get ",(0,o.kt)("inlineCode",{parentName:"p"},"importInfo")," as ",(0,o.kt)("inlineCode",{parentName:"p"},'"status": "imported"'),"."),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "C337C6D1FAC94E1998DB162B20D6B95E:C5B8D2D7B76641E1817496B1D77EE09A",\n  "packageInfo": {\n    "id": "C337C6D1FAC94E1998DB162B20D6B95E",\n    "name": "ProjectMigration_success_upload",\n    "replicated": true,\n    "purpose": "migration_from_shared_file_store",\n    "type": "project",\n    "creator": {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator"\n    },\n    "creationDate": "2022-09-07T06:30:01.537+0000",\n    "lastUpdatedDate": "2022-09-07T07:33:03.652+0000",\n    "storage": {\n      "size": 600,\n      "path": "mstr/shared/migrations/packages/2022-09-07/C4EF8D22948047259F2FD3BC3516FB6D.mmp"\n    },\n    "status": "locked",\n    "message": "",\n    "progress": 100.0,\n    "deleted": false,\n    "existing": true\n  },\n  "importInfo": {\n    "id": "C5B8D2D7B76641E1817496B1D77EE09A",\n    "creator": {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator"\n    },\n    "creationDate": "2022-09-07T08:03:04.130+0000",\n    "lastUpdatedDate": "2022-09-07T08:03:23.745+0000",\n    "environment": {\n      "id": "https://env-295736.customer.cloud.microstrategy.com/consume-upload-delta-fix/",\n      "name": "upload-aws"\n    },\n    "status": "imported",\n    "importRequestStatus": "approved",\n    "undoRequestStatus": "pending",\n    "progress": 100.0,\n    "message": "",\n    "undoStorage": {\n      "size": 15622,\n      "path": "mstr/shared/migrations/undo/C337C6D1FAC94E1998DB162B20D6B95E/C5B8D2D7B76641E1817496B1D77EE09A.mmp"\n    },\n    "project": {\n      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n      "name": "MicroStrategy Tutorial"\n    },\n    "deleted": false\n  },\n  "version": "2"\n}\n')),(0,o.kt)("h2",{id:"delete-uploaded-migration-package"},"Delete uploaded migration package"),(0,o.kt)("p",null,"Make sure to delete uploaded package metadata first then delete the migration import record in the target environment."),(0,o.kt)("h3",{id:"step-1-use-the-delete-apimstrserviceslibrarystoragesharedfilestorefilesfileid-api-call-to-the-source-library"},"Step 1: Use the ",(0,o.kt)("inlineCode",{parentName:"h3"},"DELETE /api/mstrServices/library/storage/sharedFileStore/files/{fileId}")," API call to the source Library"),(0,o.kt)("p",null,"This call deletes the metadata and binary file of the uploaded package."),(0,o.kt)("p",null,"Sample Request Header"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n')),(0,o.kt)("h3",{id:"step-2-use-the-delete-apimigrationspackageidpackageid-api-call-to-the-target-library"},"Step 2: Use the ",(0,o.kt)("inlineCode",{parentName:"h3"},"DELETE /api/migrations?packageId={packageId}")," API call to the target Library"),(0,o.kt)("p",null,"This call deletes the uploaded package migration record in the target environment."),(0,o.kt)("p",null,"Sample Request Header"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n')),(0,o.kt)("h2",{id:"performance"},"Performance"),(0,o.kt)("p",null,"For performance concerns, the number of uploaded packages should less than 1000, which can be configured in the ",(0,o.kt)("inlineCode",{parentName:"p"},"configOverride.properties")," with the field ",(0,o.kt)("inlineCode",{parentName:"p"},"storage.sharedFileStore.migrations.packages.maxNumber"),". Of course, the best practice is actively deleting unused objects."),(0,o.kt)("h2",{id:"compatibility"},"Compatibility"),(0,o.kt)("p",null,"A package created in an earlier platform version can be downloaded, uploaded and imported to a newer platform version, but can not be validated."),(0,o.kt)("h2",{id:"suggestions"},"Suggestions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The user should have admin privileges in target environments."),(0,o.kt)("li",{parentName:"ul"},"Due to databases being distributed across environments, make sure both target and source environments are connected during the import or deletion of packages and when viewing migration status."),(0,o.kt)("li",{parentName:"ul"},"Environment and project information should be provided in the request body when starting the migrations."),(0,o.kt)("li",{parentName:"ul"},"Use the unique ",(0,o.kt)("inlineCode",{parentName:"li"},"environment URL")," as the unique environment ID. Make sure that you use the same environment ID when connecting to it in Workstation."),(0,o.kt)("li",{parentName:"ul"},"The maximum size of the package is 2 GB. If it is larger, the uploading fails.")),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the Library Server cannot connect to the database, you may receive the following error responses:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The API requires MicroStrategy Storage Service. Please contact your administrator."),(0,o.kt)("li",{parentName:"ul"},"This can occur due to the following reasons:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Database version is lower than required"),(0,o.kt)("li",{parentName:"ul"},"Database configuration is missing or invalid in ",(0,o.kt)("inlineCode",{parentName:"li"},"configOverride.properties")," file"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If your storage location is not configured property, you may receive the following message:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The Storage Service is not configured properly, please contact your administrator to configure Storage Service"),(0,o.kt)("li",{parentName:"ul"},"See ",(0,o.kt)("a",{parentName:"li",href:"https://www2.microstrategy.com/producthelp/Current/Workstation/WebHelp/Lang_1033/Content/storage_service_config_workstation.htm"},"Configure the Storage Service via Workstation")," for more information."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the undo package is not generated while the import finishes successfully in the target environment, check if you set any of the conflict rules as ",(0,o.kt)("inlineCode",{parentName:"p"},"keep_both")," in the source environment. The undo functionality is not supported if you use ",(0,o.kt)("inlineCode",{parentName:"p"},"keep_both")," in any conflict rules. To ensure that the undo package can be generated and used to roll back the project merge, you need to ensure that no ",(0,o.kt)("inlineCode",{parentName:"p"},"keep_both")," rule is used in the package settings of the source environment."))))}h.isMDXComponent=!0}}]);