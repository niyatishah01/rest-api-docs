"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8176],{92629:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>r,toc:()=>p});var a=t(74848),o=t(28453);const c={title:"Manage content group packages",description:"How to manage content group packages in different cases."},i=void 0,r={id:"common-workflows/administration/migrations/create-and-import-migration-packages/manage-content-group-packages",title:"Manage content group packages",description:"How to manage content group packages in different cases.",source:"@site/docs/common-workflows/administration/migrations/create-and-import-migration-packages/manage-content-group-packages.md",sourceDirName:"common-workflows/administration/migrations/create-and-import-migration-packages",slug:"/common-workflows/administration/migrations/create-and-import-migration-packages/manage-content-group-packages",permalink:"/rest-api-docs/common-workflows/administration/migrations/create-and-import-migration-packages/manage-content-group-packages",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/migrations/create-and-import-migration-packages/manage-content-group-packages.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1714063612,formattedLastUpdatedAt:"Apr 25, 2024",frontMatter:{title:"Manage content group packages",description:"How to manage content group packages in different cases."},sidebar:"tutorialSidebar",previous:{title:"View content from an uploaded package",permalink:"/rest-api-docs/common-workflows/administration/migrations/create-and-import-migration-packages/view-uploaded-package"},next:{title:"MicroStrategy REST API samples",permalink:"/rest-api-docs/microstrategy-rest-api-samples/"}},s={},p=[{value:"Migrate content group objects, recipient list, and content",id:"migrate-content-group-objects-recipient-list-and-content",level:2},{value:"Object package requirements",id:"object-package-requirements",level:2},{value:"Case 1: You want to migrate the content group object and its recipients, but not content",id:"case-1-you-want-to-migrate-the-content-group-object-and-its-recipients-but-not-content",level:3},{value:"Case 2: You want to migrate the content group object, its recipient, and all content and dependencies in project A",id:"case-2-you-want-to-migrate-the-content-group-object-its-recipient-and-all-content-and-dependencies-in-project-a",level:3},{value:"Case 3: You want to migrate the content group object, its recipient, and all content and dependencies in all the projects",id:"case-3-you-want-to-migrate-the-content-group-object-its-recipient-and-all-content-and-dependencies-in-all-the-projects",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Available:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{since:"2021 Update 2"}),"\n",(0,a.jsx)(n.h2,{id:"migrate-content-group-objects-recipient-list-and-content",children:"Migrate content group objects, recipient list, and content"}),"\n",(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)(n.a,{href:"/rest-api-docs/common-workflows/administration/migrations/create-and-import-migration-packages/",children:"Create and import migration packages"})," to manage object migration."]}),"\n",(0,a.jsx)(n.p,{children:"Create a content group package using REST APIs:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"In the source metadata, create a configuration package where the input is the content group object. This package includes the content group object and recipient list."}),"\n",(0,a.jsx)(n.li,{children:"In the source metadata, create a project package, where the input is the content group object, for each project. This project package includes the configuration content bundle object as well as its contents (dashboards, documents, and reports that are included in the content group in this project)."}),"\n",(0,a.jsx)(n.li,{children:"In the destination metadata, first import the configuration package and then the project package, one by one."}),"\n",(0,a.jsx)(n.li,{children:"In MicroStrategy Workstation, enable the content bundle feature. If the user in the destination metadata has the same GUID with the source metadata, then the recipient (user or user group) link will migrate over. However, if the user has the same name with a different GUID, then the recipient link will not migrate anymore."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"object-package-requirements",children:"Object package requirements"}),"\n",(0,a.jsx)(n.p,{children:"The number of required object packages that need to be created for a content group varies based on requirements. The following are examples of different cases."}),"\n",(0,a.jsx)(n.h3,{id:"case-1-you-want-to-migrate-the-content-group-object-and-its-recipients-but-not-content",children:"Case 1: You want to migrate the content group object and its recipients, but not content"}),"\n",(0,a.jsx)(n.p,{children:"In this case, you need to create one configuration package with the content group as the input."}),"\n",(0,a.jsx)(n.p,{children:"Sample request:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "type": "configuration",\n  "settings": {\n    "updateSchema": null,\n    "aclOnReplacingObjects": "use_existing",\n    "aclOnNewObjects": ["keep_acl_as_source_object"],\n    "defaultAction": "replace"\n  },\n  "content": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "admin_group",\n      "type": 77,\n      "action": "replace",\n      "includeDependents": true\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"case-2-you-want-to-migrate-the-content-group-object-its-recipient-and-all-content-and-dependencies-in-project-a",children:"Case 2: You want to migrate the content group object, its recipient, and all content and dependencies in project A"}),"\n",(0,a.jsx)(n.p,{children:"In this case, you need to create one configuration package with all the dependencies, and one project package for Project A with the content group as the input. This will package the content and dependencies into the project package."}),"\n",(0,a.jsx)(n.p,{children:"Sample request of the configuration package:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "type": "configuration",\n  "settings": {\n    "updateSchema": null,\n    "aclOnReplacingObjects": "use_existing",\n    "aclOnNewObjects": ["keep_acl_as_source_object"],\n    "defaultAction": "replace"\n  },\n  "content": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "admin_group",\n      "type": 77,\n      "action": "replace",\n      "includeDependents": true\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample request of the project package:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "type": "project",\n  "settings": {\n    "updateSchema": ["recal_table_logical_size", "recal_table_keys_fact_entry_level"],\n    "aclOnReplacingObjects": "use_existing",\n    "aclOnNewObjects": ["keep_acl_as_source_object"],\n    "defaultAction": "replace"\n  },\n  "content": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "admin_group",\n      "type": 77,\n      "action": "replace",\n      "includeDependents": true\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"case-3-you-want-to-migrate-the-content-group-object-its-recipient-and-all-content-and-dependencies-in-all-the-projects",children:"Case 3: You want to migrate the content group object, its recipient, and all content and dependencies in all the projects"}),"\n",(0,a.jsx)(n.p,{children:"In this case, you need to create one configuration package with all the dependencies and project packages, which is the same number as projects - one project package for each project."}),"\n",(0,a.jsx)(n.p,{children:"Sample request of the configuration package:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "type": "configuration",\n  "settings": {\n    "updateSchema": null,\n    "aclOnReplacingObjects": "use_existing",\n    "aclOnNewObjects": ["keep_acl_as_source_object"],\n    "defaultAction": "replace"\n  },\n  "content": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "admin_group",\n      "type": 77,\n      "action": "replace",\n      "includeDependents": true\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Sample request of the project package:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "type": "project",\n  "settings": {\n    "updateSchema": ["recal_table_logical_size", "recal_table_keys_fact_entry_level"],\n    "aclOnReplacingObjects": "use_existing",\n    "aclOnNewObjects": ["keep_acl_as_source_object"],\n    "defaultAction": "replace"\n  },\n  "content": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "admin_group",\n      "type": 77,\n      "action": "replace",\n      "includeDependents": true\n    }\n  ]\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var a=t(96540);const o={},c=a.createContext(o);function i(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);