"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1890],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return u}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(r),u=o,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3148:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],p={title:"Delete a derived element in report",description:"This workflow sample demonstrates how to delete a derived element in report using REST APIs."},l=void 0,s={unversionedId:"common-workflows/manage-report-objects/delete-a-derived-element-in-report",id:"common-workflows/manage-report-objects/delete-a-derived-element-in-report",title:"Delete a derived element in report",description:"This workflow sample demonstrates how to delete a derived element in report using REST APIs.",source:"@site/docs/common-workflows/manage-report-objects/delete-a-derived-element-in-report.md",sourceDirName:"common-workflows/manage-report-objects",slug:"/common-workflows/manage-report-objects/delete-a-derived-element-in-report",permalink:"/rest-api-docs/common-workflows/manage-report-objects/delete-a-derived-element-in-report",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-report-objects/delete-a-derived-element-in-report.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1667514843,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{title:"Delete a derived element in report",description:"This workflow sample demonstrates how to delete a derived element in report using REST APIs."},sidebar:"tutorialSidebar",previous:{title:"Create a derived element in report",permalink:"/rest-api-docs/common-workflows/manage-report-objects/create-a-derived-element-in-report"},next:{title:"Execute report",permalink:"/rest-api-docs/common-workflows/manage-report-objects/execute-report"}},c={},d=[{value:"Delete a derived element in report",id:"delete-a-derived-element-in-report",level:2},{value:"1. Create a report instance",id:"1-create-a-report-instance",level:3},{value:"2. Delete an existing derived element in report",id:"2-delete-an-existing-derived-element-in-report",level:3},{value:"3. Save the report instance",id:"3-save-the-report-instance",level:3},{value:"4. Delete the report instance",id:"4-delete-the-report-instance",level:3}],m={toc:d};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This workflow sample demonstrates how to delete an existing derived element in report. Please be noted that if standalone derived element is referred in report, this API will not delete the standalone derived element, but clear its reference on report."),(0,a.kt)("h2",{id:"delete-a-derived-element-in-report"},"Delete a derived element in report"),(0,a.kt)("p",null,"You want to delete the existing derived element in report. The report object ID is ",(0,a.kt)("inlineCode",{parentName:"p"},"9B9ADA7F464E63CE0D0B709B03BD9370"),". The derived element object ID is ",(0,a.kt)("inlineCode",{parentName:"p"},"610B9CC14AD9DCB69F094C89D3B5480B"),". The project ID is ",(0,a.kt)("inlineCode",{parentName:"p"},"B19DEDCC11D4E0EFC000EB9495D0F44F"),"."),(0,a.kt)("p",null,"Obtain the authorization token needed to execute the request using ",(0,a.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),". Obtain the project ID from ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /api/projects"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"A report instance is required for getting, creating, updating, deleting derived elements in report. A report instance maintains an indivisible group of creations or modifications on a report. It is similar to the changeset concept in Modeling service, but the scope is limited to report related objects.")),(0,a.kt)("h3",{id:"1-create-a-report-instance"},"1. Create a report instance"),(0,a.kt)("p",null,"Endpoint: ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-createReportInstance"},"POST /api/model/reports/{reportId}/instances")),(0,a.kt)("p",null,"Sample Request Header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,a.kt)("p",null,"Sample Request Body: Empty"),(0,a.kt)("p",null,"Sample Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/instances' -H 'accept: application/json' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\n")),(0,a.kt)("p",null,"Sample Response Body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "95DB57A54ACCCF292F0C0E9689EDF0A4"\n}\n')),(0,a.kt)("p",null,"Sample Response Code: 201 (A new report instance is created successfully.)"),(0,a.kt)("h3",{id:"2-delete-an-existing-derived-element-in-report"},"2. Delete an existing derived element in report"),(0,a.kt)("p",null,"Endpoint: ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-deleteReportDerivedElement"},"DELETE /api/model/reports/{reportId}/derivedElements/{derivedElementId}")),(0,a.kt)("p",null,"Sample Request Header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Instance": "95DB57A54ACCCF292F0C0E9689EDF0A4"\n')),(0,a.kt)("p",null,"Sample Request Body: Empty"),(0,a.kt)("p",null,"Sample Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X DELETE 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/derivedElements/610B9CC14AD9DCB69F094C89D3B5480B' -H 'accept: application/json' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-MS-Instance: 95DB57A54ACCCF292F0C0E9689EDF0A4' -H 'Content-Type: application/json'\n")),(0,a.kt)("p",null,"Sample Response Body: Empty"),(0,a.kt)("p",null,"Response Code: 204 (The derived element is deleted from report.)"),(0,a.kt)("h3",{id:"3-save-the-report-instance"},"3. Save the report instance"),(0,a.kt)("p",null,"The delete operation will take effect on metadata once the report instance is saved.."),(0,a.kt)("p",null,"Endpoint: ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/post_api_model_reports__reportId__instances_save"},"POST /api/model/reports/{reportId}/instances/save")),(0,a.kt)("p",null,"Sample Request Header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Instance": "95DB57A54ACCCF292F0C0E9689EDF0A4"\n')),(0,a.kt)("p",null,"Sample Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/instances/save' -H 'accept: application/json' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-MS-Instance: 95DB57A54ACCCF292F0C0E9689EDF0A4'\n")),(0,a.kt)("p",null,"Sample Response Body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "objectId": "9B9ADA7F464E63CE0D0B709B03BD9370"\n}\n')),(0,a.kt)("p",null,"Sample Response Code: 201 (The report is saved successfully.)"),(0,a.kt)("h3",{id:"4-delete-the-report-instance"},"4. Delete the report instance"),(0,a.kt)("p",null,"Endpoint: ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-deleteReportInstance"},"DELETE /api/model/reports/{reportId}/instances")),(0,a.kt)("p",null,"Sample Request Header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Instance": "95DB57A54ACCCF292F0C0E9689EDF0A4"\n')),(0,a.kt)("p",null,"Sample Request Body: Empty"),(0,a.kt)("p",null,"Sample Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X DELETE 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/instances' -H 'accept: */*' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-MS-Instance: 95DB57A54ACCCF292F0C0E9689EDF0A4'\n")),(0,a.kt)("p",null,"Sample Response Body: Empty"),(0,a.kt)("p",null,"Sample Response Code: 204 (The report instance has been deleted successfully.)"))}u.isMDXComponent=!0}}]);