"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[4180],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,g=c["".concat(l,".").concat(u)]||c[u]||d[u]||r;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9410:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=["components"],s={title:"Validate migrations",description:"You can validate migrations between environments within Workstation. When you validate a migration, you are performing all merges without committing any changes to the metadata. If a migration fails to be validated in a target environment, the migration also fails when being migrated to the same target. Administrator users can only validate migrations prior to migration."},l=void 0,p={unversionedId:"common-workflows/migrations-in-workstation/validate-migrations",id:"common-workflows/migrations-in-workstation/validate-migrations",title:"Validate migrations",description:"You can validate migrations between environments within Workstation. When you validate a migration, you are performing all merges without committing any changes to the metadata. If a migration fails to be validated in a target environment, the migration also fails when being migrated to the same target. Administrator users can only validate migrations prior to migration.",source:"@site/docs/common-workflows/migrations-in-workstation/validate-migrations.md",sourceDirName:"common-workflows/migrations-in-workstation",slug:"/common-workflows/migrations-in-workstation/validate-migrations",permalink:"/rest-api-docs/common-workflows/migrations-in-workstation/validate-migrations",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/migrations-in-workstation/validate-migrations.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1671571075,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{title:"Validate migrations",description:"You can validate migrations between environments within Workstation. When you validate a migration, you are performing all merges without committing any changes to the metadata. If a migration fails to be validated in a target environment, the migration also fails when being migrated to the same target. Administrator users can only validate migrations prior to migration."},sidebar:"tutorialSidebar",previous:{title:"Project merge between environments",permalink:"/rest-api-docs/common-workflows/migrations-in-workstation/project-merge-between-environments"},next:{title:"Object migration groups between environments",permalink:"/rest-api-docs/common-workflows/migrations-in-workstation/object-migration-groups-between-environments"}},m={},d=[{value:"APIs",id:"apis",level:2},{value:"Privileges and authorization",id:"privileges-and-authorization",level:2},{value:"Use scenarios",id:"use-scenarios",level:2},{value:"Validate migration",id:"validate-migration",level:2},{value:"Step 1: Use the <code>PATCH /api/migrations/{migrationId}</code> API call to the source Library",id:"step-1-use-the-patch-apimigrationsmigrationid-api-call-to-the-source-library",level:3},{value:"Step 2: Use the <code>GET /api/migrations/{migrationId}</code> API call to the source Library",id:"step-2-use-the-get-apimigrationsmigrationid-api-call-to-the-source-library",level:3},{value:"Step 3: Use the <code>PUT /api/migrations/{migrationId}/validation</code> API call to the target Library",id:"step-3-use-the-put-apimigrationsmigrationidvalidation-api-call-to-the-target-library",level:3},{value:"Step 4: Use the <code>PATCH /api/migrations/{migrationId}</code> API call to the source Library",id:"step-4-use-the-patch-apimigrationsmigrationid-api-call-to-the-source-library",level:3},{value:"Step 5: Use the <code>GET /api/migrations/{migrationId}</code> API call to the source Library until the validation status becomes <code>validated</code> or <code>validation_failed</code>",id:"step-5-use-the-get-apimigrationsmigrationid-api-call-to-the-source-library-until-the-validation-status-becomes-validated-or-validation_failed",level:3},{value:"Performance",id:"performance",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Suggestions",id:"suggestions",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],c={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Starting in MicroStrategy 2021 Update 6, you can validate migrations between environments within Workstation. When you validate a migration, you are performing all merges without committing any changes to the metadata. If a migration fails to be validated in a target environment, the migration also fails when being migrated to the same target. Administrator users can only validate migrations prior to migration."),(0,r.kt)("p",null,"You must ",(0,r.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/Workstation/WebHelp/Lang_1033/Content/storage_service_config_workstation.htm"},"configure the package storage location in Workstation")," to use this feature."),(0,r.kt)("h2",{id:"apis"},"APIs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?#/Migrations/updateMigration"},"PATCH /api/migrations/{migrationId}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?#/Migrations/getMigration"},"GET /api/migrations/{migrationId}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?#/Migrations/triggerValidate"},"PUT /api/migrations/{migrationId}/validation"))),(0,r.kt)("h2",{id:"privileges-and-authorization"},"Privileges and authorization"),(0,r.kt)("p",null,"Only Administrator users can validate migrations. Administrators must have the following privileges:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create package"),(0,r.kt)("li",{parentName:"ul"},"Apply package"),(0,r.kt)("li",{parentName:"ul"},"Bypass all objects security check")),(0,r.kt)("p",null,"To execute the API, you must get the authorization token by executing the ",(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login")," request, and get a token as ",(0,r.kt)("inlineCode",{parentName:"p"},'"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"')," in the response body. Keep the token value. It is required to execute the REST API. See ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/authentication"},"Workflow sample: Authentication")," for more information."),(0,r.kt)("h2",{id:"use-scenarios"},"Use scenarios"),(0,r.kt)("p",null,"The best practice scenario is when Workstation uses one Library server as a source and another Library server as a target. The source and target environments can be the same."),(0,r.kt)("p",null,"For migrations, the validation action can only occur after the corresponding package is created and before migrating. This means the package status should be created."),(0,r.kt)("h2",{id:"validate-migration"},"Validate migration"),(0,r.kt)("h3",{id:"step-1-use-the-patch-apimigrationsmigrationid-api-call-to-the-source-library"},"Step 1: Use the ",(0,r.kt)("inlineCode",{parentName:"h3"},"PATCH /api/migrations/{migrationId}")," API call to the source Library"),(0,r.kt)("p",null,"This call sets the target environment."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9" // authtoken from Authorization response.\n')),(0,r.kt)("p",null,"Sample Request Body:"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"importInfo.project")," field is optional.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "importInfo": {\n    "environment": {\n      "id": "sss",\n      "name": "sss"\n    },\n    "project": {\n      "id": "id",\n      "name": "name"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "packageId:importId",\n  "packageInfo": {\n    "id": "packageId",\n    "status": "created",\n    "progress": 100\n  },\n  "importInfo": {\n    "id": "importId",\n    "status": "pending",\n    "importRequestStatus": "pending",\n    "undoRequestStatus": "pending",\n    "progress": 0\n  }\n}\n')),(0,r.kt)("h3",{id:"step-2-use-the-get-apimigrationsmigrationid-api-call-to-the-source-library"},"Step 2: Use the ",(0,r.kt)("inlineCode",{parentName:"h3"},"GET /api/migrations/{migrationId}")," API call to the source Library"),(0,r.kt)("p",null,"This call gets the content of the migration to prepare the request body for the validation call."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9" // authtoken from Authorization response.\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "35958BEB7C56491C9A43F7661501E177:B71E7ECF60104A62BA15625C444A623F",\n  "packageInfo": {\n    "id": "35958BEB7C56491C9A43F7661501E177",\n    "replicated": false,\n    "type": "project",\n    "purpose": "object_migration",\n    "name": "sample",\n    "creator": {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator"\n    },\n    "creationDate": "2022-03-16T07:38:40.125+0000",\n    "lastUpdatedDate": "2022-03-16T07:39:09.254+0000",\n    "environment": {\n      "id": "Source environment URL",\n      "name": "Source environment name"\n    },\n    "storage": {\n      "size": 1421139,\n      "path": "mstr/shared/migrations/packages/2022-03-16/9A838E0F9C9E4910AF57344299327DF9.mmp"\n    },\n    "project": {\n      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n      "name": "MicroStrategy Tutorial"\n    },\n    "status": "created",\n    "message": "",\n    "progress": 100,\n    "deleted": false,\n    "existing": true\n  },\n  "importInfo": {\n    "id": "B71E7ECF60104A62BA15625C444A623F",\n    "creator": {},\n    "creationDate": "2022-03-16T07:38:40.126+0000",\n    "lastUpdatedDate": "2022-03-16T07:38:40.126+0000",\n    "environment": {\n      "id": "Target environment URL",\n      "name": "Target environment name"\n    },\n    "status": "pending",\n    "importRequestStatus": "pending",\n    "undoRequestStatus": "pending",\n    "progress": 0,\n    "message": "",\n    "undoStorage": {},\n    "project": {\n      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n      "name": "MicroStrategy Tutorial"\n    },\n    "deleted": false\n  },\n  "validation": {\n    "status": "validated",\n    "progress": 100,\n    "creationDate": "2022-03-30T19:54:07.205+0000",\n    "lastUpdatedDate": "2022-03-30T19:54:27.205+0000",\n    "message": ""\n  },\n  "version": "1"\n}\n')),(0,r.kt)("h3",{id:"step-3-use-the-put-apimigrationsmigrationidvalidation-api-call-to-the-target-library"},"Step 3: Use the ",(0,r.kt)("inlineCode",{parentName:"h3"},"PUT /api/migrations/{migrationId}/validation")," API call to the target Library"),(0,r.kt)("p",null,"This call triggers the migration validation in the target. This API can only be called by an Administrator user when a package is ",(0,r.kt)("inlineCode",{parentName:"p"},"created"),"."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9" // authtoken from Authorization response.\n')),(0,r.kt)("p",null,"Sample Request Body:"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"All the fields are required other than ",(0,r.kt)("inlineCode",{parentName:"p"},"packageInfo.project")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"importInfo.project"),", which depends on the package type.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "xxx:xxxxx",\n  "packageInfo": {\n    "id": "xxxx",\n    "type": "project",\n    "environment": {\n      "id": "sss",\n      "name": "sss"\n    },\n    "storage": {\n      "size": 10000,\n      "path": "xxxx"\n    },\n    "project": {\n      "id": "id",\n      "name": "name"\n    },\n    "status": "locked"\n  },\n  "importInfo": {\n    "id": "xxxx",\n    "environment": {\n      "id": "sss",\n      "name": "sss"\n    },\n    "project": {\n      "id": "id",\n      "name": "name"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"No response body."),(0,r.kt)("h3",{id:"step-4-use-the-patch-apimigrationsmigrationid-api-call-to-the-source-library"},"Step 4: Use the ",(0,r.kt)("inlineCode",{parentName:"h3"},"PATCH /api/migrations/{migrationId}")," API call to the source Library"),(0,r.kt)("p",null,"This call informs the source library that the validation is beginning in the target. This API can only be called by an Administrator user when the package is ",(0,r.kt)("inlineCode",{parentName:"p"},"created"),"."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9" // authtoken from Authorization response.\n')),(0,r.kt)("p",null,"Sample Request Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "validation": {\n    "status": "validating"\n  }\n}\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "packageId:importId",\n  "packageInfo": {\n    "id": "packageId",\n    "status": "created",\n    "progress": 100\n  },\n  "importInfo": {\n    "id": "importId",\n    "status": "pending",\n    "importRequestStatus": "pending",\n    "undoRequestStatus": "pending",\n    "progress": 0\n  },\n  "validation": {\n    "status": "validating",\n    "progress": 0\n  }\n}\n')),(0,r.kt)("h3",{id:"step-5-use-the-get-apimigrationsmigrationid-api-call-to-the-source-library-until-the-validation-status-becomes-validated-or-validation_failed"},"Step 5: Use the ",(0,r.kt)("inlineCode",{parentName:"h3"},"GET /api/migrations/{migrationId}")," API call to the source Library until the validation status becomes ",(0,r.kt)("inlineCode",{parentName:"h3"},"validated")," or ",(0,r.kt)("inlineCode",{parentName:"h3"},"validation_failed")),(0,r.kt)("p",null,"Since the validation is asynchronously processing, this call updates the validation status. It is usually ",(0,r.kt)("inlineCode",{parentName:"p"},"validating"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"validated"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"validation_failed"),"."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9" // authtoken from Authorization response.\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "35958BEB7C56491C9A43F7661501E177:B71E7ECF60104A62BA15625C444A623F",\n  "packageInfo": {\n    "id": "35958BEB7C56491C9A43F7661501E177",\n    "replicated": false,\n    "type": "project",\n    "purpose": "object_migration",\n    "name": "sample",\n    "creator": {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator"\n    },\n    "creationDate": "2022-03-16T07:38:40.125+0000",\n    "lastUpdatedDate": "2022-03-16T07:39:09.254+0000",\n    "environment": {\n      "id": "Source environment URL",\n      "name": "Source environment name"\n    },\n    "storage": {\n      "size": 1421139,\n      "path": "mstr/shared/migrations/packages/2022-03-16/9A838E0F9C9E4910AF57344299327DF9.mmp"\n    },\n    "project": {\n      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n      "name": "MicroStrategy Tutorial"\n    },\n    "status": "created",\n    "message": "",\n    "progress": 100,\n    "deleted": false,\n    "existing": true\n  },\n  "importInfo": {\n    "id": "B71E7ECF60104A62BA15625C444A623F",\n    "creator": {},\n    "creationDate": "2022-03-16T07:38:40.126+0000",\n    "lastUpdatedDate": "2022-03-16T07:38:40.126+0000",\n    "environment": {\n      "id": "Target environment URL",\n      "name": "Target environment name"\n    },\n    "status": "pending",\n    "importRequestStatus": "pending",\n    "undoRequestStatus": "pending",\n    "progress": 0,\n    "message": "",\n    "undoStorage": {},\n    "project": {\n      "id": "B19DEDCC11D4E0EFC000EB9495D0F44F",\n      "name": "MicroStrategy Tutorial"\n    },\n    "deleted": false\n  },\n  "validation": {\n    "status": "validation_failed",\n    "progress": 0,\n    "creationDate": "2022-03-30T19:54:07.205+0000",\n    "lastUpdatedDate": "2022-03-30T19:56:27.205+0000",\n    "message": ""\n  },\n  "version": "1"\n}\n')),(0,r.kt)("h2",{id:"performance"},"Performance"),(0,r.kt)("p",null,"For performance concerns, MicroStrategy suggests you validate one package per session and time."),(0,r.kt)("h2",{id:"compatibility"},"Compatibility"),(0,r.kt)("p",null,"A package validated in an earlier platform version can be validated to a newer platform version, but not vice versa.However, validation failures are more likely to occur between platforms with different versions."),(0,r.kt)("h2",{id:"suggestions"},"Suggestions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The user should have admin privileges in both source and target environments."),(0,r.kt)("li",{parentName:"ul"},"Due to databases being distributed across environments, make sure to connect to both the target and source environments during the validation."),(0,r.kt)("li",{parentName:"ul"},"Target environment information should be provided in the request body when starting the validation."),(0,r.kt)("li",{parentName:"ul"},"Use the unique ",(0,r.kt)("inlineCode",{parentName:"li"},"environment URL")," as the unique environment ID. Make sure to use the same environment ID when you connect to it in Workstation.")),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the Library Server cannot connect to the database, you may receive the following error response:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The API requires MicroStrategy Storage Service. Please contact your administrator."),(0,r.kt)("li",{parentName:"ul"},"This can occur due to the following reasons:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Database not running"),(0,r.kt)("li",{parentName:"ul"},"Database version is lower than required"),(0,r.kt)("li",{parentName:"ul"},"Database configuration is missing or invalid in ",(0,r.kt)("inlineCode",{parentName:"li"},"configOverride.properties")," file"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If your storage location is not configured property, you may receive the following message:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The Storage Service is not configured properly, please contact your administrator to configure Storage Service"),(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"https://www2.microstrategy.com/producthelp/Current/Workstation/WebHelp/Lang_1033/Content/storage_service_config_workstation.htm"},"Configure the Storage Service via Workstation")," for more information."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The validation is carried out in the target Library, but the validation status is saved to the source Library. This means the validation status is synchronized from target to source and shared files are levered to achieve this. As a result, you may receive the following error messages:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Cannot create or modify the shared file. It may be temporarily unavailable for accessing the storage location."),(0,r.kt)("li",{parentName:"ul"},"The shared file cannot be accessed. It may be deleted or the storage location cannot be accessed."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MicroStrategy advises setting the ",(0,r.kt)("strong",{parentName:"p"},"Maximum tolerance for computer clock synchronization")," to a value of five minutes. See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/maximum-tolerance-for-computer-clock-synchronization"},"Maximum tolerance for computer clock synchronization")," on the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/"},"Microsoft technical documentation")," site for more information about modifying this setting. After making this change, if your environment times differ by more than five minutes, you receive the following message:"),(0,r.kt)("p",{parentName:"li"},"The time difference between the source and target environments should be five minutes or less. Please modify the environment system time and try again."))))}u.isMDXComponent=!0}}]);