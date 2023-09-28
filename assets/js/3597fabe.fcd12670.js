"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6261],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},18230:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var n,a=r(83117),o=r(80102),i=(r(67294),r(3905)),l=["components"],p={title:"Delete a derived element in report",description:"This workflow sample demonstrates how to delete a derived element in report using REST APIs."},s=void 0,c={unversionedId:"common-workflows/analytics/manage-reports/manage-report-objects/delete-a-derived-element-in-report",id:"common-workflows/analytics/manage-reports/manage-report-objects/delete-a-derived-element-in-report",title:"Delete a derived element in report",description:"This workflow sample demonstrates how to delete a derived element in report using REST APIs.",source:"@site/docs/common-workflows/analytics/manage-reports/manage-report-objects/delete-a-derived-element-in-report.md",sourceDirName:"common-workflows/analytics/manage-reports/manage-report-objects",slug:"/common-workflows/analytics/manage-reports/manage-report-objects/delete-a-derived-element-in-report",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-report-objects/delete-a-derived-element-in-report",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/manage-reports/manage-report-objects/delete-a-derived-element-in-report.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1695919031,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{title:"Delete a derived element in report",description:"This workflow sample demonstrates how to delete a derived element in report using REST APIs."},sidebar:"tutorialSidebar",previous:{title:"Create a derived element in report",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-report-objects/create-a-derived-element-in-report"},next:{title:"Execute report",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-report-objects/execute-report"}},d={},m=[{value:"Delete a derived element in report",id:"delete-a-derived-element-in-report",level:2},{value:"1. Create a report instance",id:"1-create-a-report-instance",level:3},{value:"2. Delete an existing derived element in report",id:"2-delete-an-existing-derived-element-in-report",level:3},{value:"3. Save the report instance",id:"3-save-the-report-instance",level:3},{value:"4. Delete the report instance",id:"4-delete-the-report-instance",level:3}],u=(n="Available",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),k={toc:m};function g(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(u,{since:"2021 Update 7",mdxType:"Available"}),(0,i.kt)("p",null,"This workflow sample demonstrates how to delete an existing derived element in report. Please be noted that if standalone derived element is referred in report, this API will not delete the standalone derived element, but clear its reference on report."),(0,i.kt)("h2",{id:"delete-a-derived-element-in-report"},"Delete a derived element in report"),(0,i.kt)("p",null,"You want to delete the existing derived element in report. The report object ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"9B9ADA7F464E63CE0D0B709B03BD9370"),". The derived element object ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"610B9CC14AD9DCB69F094C89D3B5480B"),". The project ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"B19DEDCC11D4E0EFC000EB9495D0F44F"),"."),(0,i.kt)("p",null,"Obtain the authorization token needed to execute the request using ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),". Obtain the project ID from ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/projects"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"A report instance is required for getting, creating, updating, deleting derived elements in report. A report instance maintains an indivisible group of creations or modifications on a report. It is similar to the changeset concept in Modeling service, but the scope is limited to report related objects.")),(0,i.kt)("h3",{id:"1-create-a-report-instance"},"1. Create a report instance"),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-createReportInstance"},"POST /api/model/reports/{reportId}/instances")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/instances' -H 'accept: application/json' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\n")),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "95DB57A54ACCCF292F0C0E9689EDF0A4"\n}\n')),(0,i.kt)("p",null,"Sample Response Code: 201 (A new report instance is created successfully.)"),(0,i.kt)("h3",{id:"2-delete-an-existing-derived-element-in-report"},"2. Delete an existing derived element in report"),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-deleteReportDerivedElement"},"DELETE /api/model/reports/{reportId}/derivedElements/{derivedElementId}")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Instance": "95DB57A54ACCCF292F0C0E9689EDF0A4"\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X DELETE 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/derivedElements/610B9CC14AD9DCB69F094C89D3B5480B' -H 'accept: application/json' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-MS-Instance: 95DB57A54ACCCF292F0C0E9689EDF0A4' -H 'Content-Type: application/json'\n")),(0,i.kt)("p",null,"Sample Response Body: Empty"),(0,i.kt)("p",null,"Response Code: 204 (The derived element is deleted from report.)"),(0,i.kt)("h3",{id:"3-save-the-report-instance"},"3. Save the report instance"),(0,i.kt)("p",null,"The delete operation will take effect on metadata once the report instance is saved.."),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-saveReportInstance"},"POST /api/model/reports/{reportId}/instances/save")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Instance": "95DB57A54ACCCF292F0C0E9689EDF0A4"\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/instances/save' -H 'accept: application/json' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-MS-Instance: 95DB57A54ACCCF292F0C0E9689EDF0A4'\n")),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "objectId": "9B9ADA7F464E63CE0D0B709B03BD9370"\n}\n')),(0,i.kt)("p",null,"Sample Response Code: 201 (The report is saved successfully.)"),(0,i.kt)("h3",{id:"4-delete-the-report-instance"},"4. Delete the report instance"),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-deleteReportInstance"},"DELETE /api/model/reports/{reportId}/instances")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Instance": "95DB57A54ACCCF292F0C0E9689EDF0A4"\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X DELETE 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/instances' -H 'accept: */*' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-MS-Instance: 95DB57A54ACCCF292F0C0E9689EDF0A4'\n")),(0,i.kt)("p",null,"Sample Response Body: Empty"),(0,i.kt)("p",null,"Sample Response Code: 204 (The report instance has been deleted successfully.)"))}g.isMDXComponent=!0}}]);