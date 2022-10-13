"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6865],{3905:function(e,a,t){t.d(a,{Zo:function(){return s},kt:function(){return m}});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},s=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=c(t),m=o,u=k["".concat(l,".").concat(m)]||k[m]||d[m]||r;return t?n.createElement(u,p(p({ref:a},s),{},{components:t})):n.createElement(u,p({ref:a},s))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,p=new Array(r);p[0]=k;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<r;c++)p[c]=t[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},2985:function(e,a,t){t.r(a),t.d(a,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var n=t(3117),o=t(102),r=(t(7294),t(3905)),p=["components"],i={title:"Workflow sample - View content from an uploaded package",sidebar_label:"View content from an uploaded package",description:"This workflow sample demonstrates how to view an uploaded migration package using REST APIs."},l=void 0,c={unversionedId:"common-workflows/create-and-import-migration-packages/view-uploaded-package",id:"common-workflows/create-and-import-migration-packages/view-uploaded-package",title:"Workflow sample - View content from an uploaded package",description:"This workflow sample demonstrates how to view an uploaded migration package using REST APIs.",source:"@site/docs/common-workflows/create-and-import-migration-packages/view-uploaded-package.md",sourceDirName:"common-workflows/create-and-import-migration-packages",slug:"/common-workflows/create-and-import-migration-packages/view-uploaded-package",permalink:"/rest-api-docs/common-workflows/create-and-import-migration-packages/view-uploaded-package",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/create-and-import-migration-packages/view-uploaded-package.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1665689550,formattedLastUpdatedAt:"Oct 13, 2022",frontMatter:{title:"Workflow sample - View content from an uploaded package",sidebar_label:"View content from an uploaded package",description:"This workflow sample demonstrates how to view an uploaded migration package using REST APIs."},sidebar:"tutorialSidebar",previous:{title:"View content from a newly created package",permalink:"/rest-api-docs/common-workflows/create-and-import-migration-packages/view-newly-created-package"},next:{title:"Manage content group packages",permalink:"/rest-api-docs/common-workflows/create-and-import-migration-packages/manage-content-group-packages"}},s={},d=[{value:"Create an empty package",id:"create-an-empty-package",level:2},{value:"Upload a package binary file",id:"upload-a-package-binary-file",level:2},{value:"Get the package definition",id:"get-the-package-definition",level:2},{value:"Get the package detailed definition",id:"get-the-package-detailed-definition",level:2},{value:"Delete the package",id:"delete-the-package",level:2}],k={toc:d};function m(e){var a=e.components,t=(0,o.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This workflow sample demonstrates how to view an uploaded migration package using REST APIs."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#create-an-empty-package"},"Create an empty package")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#upload-a-package-binary-file"},"Upload a package binary file")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#get-the-package-definition"},"Get the package definition")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#get-the-package-detailed-definition"},"Get the package detailed definition")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#delete-the-package"},"Delete the package"))),(0,r.kt)("p",null,"You have a project package that contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"Year")," object, with an attribute object ID of ",(0,r.kt)("inlineCode",{parentName:"p"},"8D679D5111D3E4981000E787EC6DE8A4"),", and all its dependents in the MicroStrategy Tutorial project. You want to view the readable definitions of objects from this package for this project. The project ID is ",(0,r.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),". You are also using the ",(0,r.kt)("inlineCode",{parentName:"p"},'"Demo Project"'),", which has a project ID of ",(0,r.kt)("inlineCode",{parentName:"p"},"B19DEDCC11D4E0EFC000EB9495D0F44F"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,r.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),"."),(0,r.kt)("p",{parentName:"admonition"},"You must have the Create Package and Import Package privileges.")),(0,r.kt)("h2",{id:"create-an-empty-package"},"Create an empty package"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/createEmptyPackage"},"POST /api/packages")," to create an empty package. The destination project ID is required in the request header."),(0,r.kt)("p",null,"An empty package is required for creating or importing packages through REST APIs. An empty package holds all content and its status in memory. For performance reasons, you can only create one package instance in each user session. Make sure to delete the package when it is no longer used. Otherwise, it lives along with the user session."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/packages"  -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MzY3NDRCQjUxQjRDMTRDOENERTBDQUE4MTRGQUEzOTE=",\n  "status": "EMPTY"\n}\n')),(0,r.kt)("p",null,"Sample Response Code: 201 (A new empty package is created successfully.)"),(0,r.kt)("h2",{id:"upload-a-package-binary-file"},"Upload a package binary file"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/uploadPackageBinary"},"PUT /api/packages/{packageId}/binary")," to upload a package binary file."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "multipart/form-data"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X PUT \"https://demo.microstrategy.com/MicroStrategyLibrary/api/packages/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6RUQ4MTJGNjFDNTQ4RjVDNzRFN0NCMkFDNDYyMUU4RUI=/binary\" -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F' -H 'X-MSTR-AuthToken: i4heb6cpcskop2dgn518e6ch67' -F 'file=@\"/path/to/packageName.mmp\"'\n")),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MkJFODMyQjE5NjQxRDREMEYzRUMyN0E2OUQwMzU5NTU=",\n  "status": "READY"\n}\n')),(0,r.kt)("p",null,"Sample Response Code: 200 (The package is uploaded successfully)."),(0,r.kt)("h2",{id:"get-the-package-definition"},"Get the package definition"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/get"},"GET /api/packages/{packageId}")," to get the package definition. This call is optional and is used to get the status or full definition of the package."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "k2023jpr443b3hdo1fma1flpr"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET \"https://demo.microstrategy.com/MicroStrategyLibrary/api/packages/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MDk2NjgxM0VBNzQ5Q0Y3MjZEMzI2NEJEMTg1Qjk4RDM=?showContent=true\" -H 'Content-Type: application/json' -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F' -H 'X-MSTR-AuthToken: k2023jpr443b3hdo1fma1flpr\n")),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MDk2NjgxM0VBNzQ5Q0Y3MjZEMzI2NEJEMTg1Qjk4RDM=",\n  "status": "READY",\n  "settings": {\n    "updateSchema": ["recal_table_logical_size", "recal_table_keys_fact_entry_level"],\n    "aclOnReplacingObjects": "use_existing",\n    "aclOnNewObjects": ["keep_acl_as_source_object"],\n    "defaultAction": "replace"\n  },\n  "content": [\n    {\n      "id": "8D679D5111D3E4981000E787EC6DE8A4",\n      "name": "Year",\n      "version": "2215B50211EB7C9D8F150080EF651EEA",\n      "type": 12,\n      "owner": {\n        "id": "54F3D26011D2896560009A8E67019608"\n      },\n      "dateCreated": "2001-01-02T20:48:10.000+0000",\n      "dateModified": "2021-03-04T03:53:09.000+0000",\n      "action": "replace",\n      "level": "project_object"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Sample Response Code: 200 (The package definition is uploaded successfully.)"),(0,r.kt)("h2",{id:"get-the-package-detailed-definition"},"Get the package detailed definition"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/getPackageObjectDetail"},"GET /api/packages/{packageId}/objects")," to get the objects' detailed definition in a package."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},'In MicroStrategy 2021 Update 3, only the following types of objects are supported in the project package: "Attribute(12)", "Fact(13)", "Hierarchy(14)", and "Table(15)". The configuration package is not currently supported.')),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET \"http://demo.microstrategy.com/MicroStrategyLibrary/api/packages/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MzY3NDRCQjUxQjRDMTRDOENERTBDQUE4MTRGQUEzOTE=/objects?id=8D679D5111D3E4981000E787EC6DE8A4\" -H 'Content-Type: application/json' -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' -H 'X-MSTR-AuthToken: 657im8d8ol5hbn6q42ddgobg01'\n")),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "objects": [\n    {\n      "id": "8D679D5111D3E4981000E787EC6DE8A4",\n      "type": 12,\n      "definition": {\n        "information": {\n          "dateCreated": "2001-01-02T20:48:10.000Z",\n          "dateModified": "2012-01-27T12:00:32.000Z",\n          "versionId": "24CEEC7044C6C7008EE0DF96565E9459",\n          "primaryLocale": "en-US",\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "forms": [\n          {\n            "id": "45C11FA478E745FEA08D781CEA190FE5",\n            "name": "ID",\n            "description": "Year ID",\n            "category": "ID",\n            "type": "system",\n            "displayFormat": "number",\n            "dataType": {\n              "type": "integer",\n              "precision": 2,\n              "scale": -2147483648\n            },\n            "alias": "YEAR_ID",\n            "lookupTable": {\n              "objectId": "8D6793C211D3E4981000E787EC6DE8A4"\n            }\n          },\n          {\n            "id": "4B97DFC611D5AEDAC000E38A4CC5F24F",\n            "name": "DATE",\n            "description": "Year Start Date",\n            "category": "DATE",\n            "type": "system",\n            "displayFormat": "date",\n            "dataType": {\n              "type": "time_stamp",\n              "precision": 0,\n              "scale": -2147483648\n            },\n            "alias": "YEAR_DATE",\n            "lookupTable": {\n              "objectId": "8D6793C211D3E4981000E787EC6DE8A4"\n            }\n          }\n        ],\n        "attributeLookupTable": {\n          "objectId": "8D6793C211D3E4981000E787EC6DE8A4"\n        },\n        "keyForm": {\n          "id": "45C11FA478E745FEA08D781CEA190FE5",\n          "name": "ID"\n        },\n        "sorts": {}\n      }\n    }\n  ],\n  "versions": {\n    "webVersion": "11.3.0300.10300J",\n    "modelingVersion": "11.3.0300.5996",\n    "iServerVersion": "11.3.0300.10924"\n  }\n}\n')),(0,r.kt)("p",null,"Sample Response Code: 200 (The detailed readable definition of the objects was retrieved successfully.)"),(0,r.kt)("h2",{id:"delete-the-package"},"Delete the package"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages/deletePackageAsync"},"DELETE /api/packages/{packageId}")," to delete the package."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"Content-Type": "application/json"\n"Prefer": "respond-async"\n"X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X DELETE \"https://demo.microstrategy.com/MicroStrategyLibrary/api/packages/QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MjJGNzUwM0Y5NzREN0VGREFCRTk2QzgyMzFCNzk5OTk=\" -H 'Content-Type: application/json' -H 'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754' -H 'X-MSTR-AuthToken: jmm09h37g6fot3oeqncj20s1nk' -H 'Prefer: respond-async'\n")),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "QjE5REVEQ0MxMUQ0RTBFRkMwMDBFQjk0OTVEMEY0NEY6MjJGNzUwM0Y5NzREN0VGREFCRTk2QzgyMzFCNzk5OTk=",\n  "status": "DELETING"\n}\n')),(0,r.kt)("p",null,"Sample Response Code: 202 (The package is being deleted.)"))}m.isMDXComponent=!0}}]);