"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1473],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),g=s(n),d=o,m=g["".concat(p,".").concat(d)]||g[d]||u[d]||r;return n?a.createElement(m,c(c({ref:t},l),{},{components:n})):a.createElement(m,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<r;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9958:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return g}});var a,o=n(3117),r=n(102),c=(n(7294),n(3905)),i=["components"],p={title:"Manage content group packages",description:"How to manage content group packages in different cases."},s=void 0,l={unversionedId:"common-workflows/administration/migrations/create-and-import-migration-packages/manage-content-group-packages",id:"common-workflows/administration/migrations/create-and-import-migration-packages/manage-content-group-packages",title:"Manage content group packages",description:"How to manage content group packages in different cases.",source:"@site/docs/common-workflows/administration/migrations/create-and-import-migration-packages/manage-content-group-packages.md",sourceDirName:"common-workflows/administration/migrations/create-and-import-migration-packages",slug:"/common-workflows/administration/migrations/create-and-import-migration-packages/manage-content-group-packages",permalink:"/rest-api-docs/common-workflows/administration/migrations/create-and-import-migration-packages/manage-content-group-packages",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/migrations/create-and-import-migration-packages/manage-content-group-packages.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1676308226,formattedLastUpdatedAt:"Feb 13, 2023",frontMatter:{title:"Manage content group packages",description:"How to manage content group packages in different cases."},sidebar:"tutorialSidebar",previous:{title:"View content from an uploaded package",permalink:"/rest-api-docs/common-workflows/administration/migrations/create-and-import-migration-packages/view-uploaded-package"},next:{title:"MicroStrategy REST API samples",permalink:"/rest-api-docs/microstrategy-rest-api-samples/"}},u={},g=[{value:"Migrate content group objects, recipient list, and content",id:"migrate-content-group-objects-recipient-list-and-content",level:2},{value:"Object package requirements",id:"object-package-requirements",level:2},{value:"Case 1: You want to migrate the content group object and its recipients, but not content",id:"case-1-you-want-to-migrate-the-content-group-object-and-its-recipients-but-not-content",level:3},{value:"Case 2: You want to migrate the content group object, its recipient, and all content and dependencies in project A",id:"case-2-you-want-to-migrate-the-content-group-object-its-recipient-and-all-content-and-dependencies-in-project-a",level:3},{value:"Case 3: You want to migrate the content group object, its recipient, and all content and dependencies in all the projects",id:"case-3-you-want-to-migrate-the-content-group-object-its-recipient-and-all-content-and-dependencies-in-all-the-projects",level:3}],d=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,c.kt)("div",e)}),m={toc:g};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,c.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)(d,{since:"2021 Update 2",mdxType:"Available"}),(0,c.kt)("h2",{id:"migrate-content-group-objects-recipient-list-and-content"},"Migrate content group objects, recipient list, and content"),(0,c.kt)("p",null,"See ",(0,c.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/administration/migrations/create-and-import-migration-packages/"},"Create and import migration packages")," to manage object migration."),(0,c.kt)("p",null,"Create a content group package using REST APIs:"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"In the source metadata, create a configuration package where the input is the content group object. This package includes the content group object and recipient list."),(0,c.kt)("li",{parentName:"ol"},"In the source metadata, create a project package, where the input is the content group object, for each project. This project package includes the configuration content bundle object as well as its contents (dossiers, documents, and reports that are included in the content group in this project)."),(0,c.kt)("li",{parentName:"ol"},"In the destination metadata, first import the configuration package and then the project package, one by one."),(0,c.kt)("li",{parentName:"ol"},"In MicroStrategy Workstation, enable the content bundle feature. If the user in the destination metadata has the same GUID with the source metadata, then the recipient (user or user group) link will migrate over. However, if the user has the same name with a different GUID, then the recipient link will not migrate anymore.")),(0,c.kt)("h2",{id:"object-package-requirements"},"Object package requirements"),(0,c.kt)("p",null,"The number of required object packages that need to be created for a content group varies based on requirements. The following are examples of different cases."),(0,c.kt)("h3",{id:"case-1-you-want-to-migrate-the-content-group-object-and-its-recipients-but-not-content"},"Case 1: You want to migrate the content group object and its recipients, but not content"),(0,c.kt)("p",null,"In this case, you need to create one configuration package with the content group as the input."),(0,c.kt)("p",null,"Sample request:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "configuration",\n  "settings": {\n    "updateSchema": null,\n    "aclOnReplacingObjects": "use_existing",\n    "aclOnNewObjects": ["keep_acl_as_source_object"],\n    "defaultAction": "replace"\n  },\n  "content": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "admin_group",\n      "type": 77,\n      "action": "replace",\n      "includeDependents": true\n    }\n  ]\n}\n')),(0,c.kt)("h3",{id:"case-2-you-want-to-migrate-the-content-group-object-its-recipient-and-all-content-and-dependencies-in-project-a"},"Case 2: You want to migrate the content group object, its recipient, and all content and dependencies in project A"),(0,c.kt)("p",null,"In this case, you need to create one configuration package with all the dependencies, and one project package for Project A with the content group as the input. This will package the content and dependencies into the project package."),(0,c.kt)("p",null,"Sample request of the configuration package:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "configuration",\n  "settings": {\n    "updateSchema": null,\n    "aclOnReplacingObjects": "use_existing",\n    "aclOnNewObjects": ["keep_acl_as_source_object"],\n    "defaultAction": "replace"\n  },\n  "content": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "admin_group",\n      "type": 77,\n      "action": "replace",\n      "includeDependents": true\n    }\n  ]\n}\n')),(0,c.kt)("p",null,"Sample request of the project package:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "project",\n  "settings": {\n    "updateSchema": ["recal_table_logical_size", "recal_table_keys_fact_entry_level"],\n    "aclOnReplacingObjects": "use_existing",\n    "aclOnNewObjects": ["keep_acl_as_source_object"],\n    "defaultAction": "replace"\n  },\n  "content": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "admin_group",\n      "type": 77,\n      "action": "replace",\n      "includeDependents": true\n    }\n  ]\n}\n')),(0,c.kt)("h3",{id:"case-3-you-want-to-migrate-the-content-group-object-its-recipient-and-all-content-and-dependencies-in-all-the-projects"},"Case 3: You want to migrate the content group object, its recipient, and all content and dependencies in all the projects"),(0,c.kt)("p",null,"In this case, you need to create one configuration package with all the dependencies and project packages, which is the same number as projects - one project package for each project."),(0,c.kt)("p",null,"Sample request of the configuration package:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "configuration",\n  "settings": {\n    "updateSchema": null,\n    "aclOnReplacingObjects": "use_existing",\n    "aclOnNewObjects": ["keep_acl_as_source_object"],\n    "defaultAction": "replace"\n  },\n  "content": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "admin_group",\n      "type": 77,\n      "action": "replace",\n      "includeDependents": true\n    }\n  ]\n}\n')),(0,c.kt)("p",null,"Sample request of the project package:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "project",\n  "settings": {\n    "updateSchema": ["recal_table_logical_size", "recal_table_keys_fact_entry_level"],\n    "aclOnReplacingObjects": "use_existing",\n    "aclOnNewObjects": ["keep_acl_as_source_object"],\n    "defaultAction": "replace"\n  },\n  "content": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "admin_group",\n      "type": 77,\n      "action": "replace",\n      "includeDependents": true\n    }\n  ]\n}\n')))}f.isMDXComponent=!0}}]);