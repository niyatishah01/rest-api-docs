"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8828],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(r),d=a,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(h,p(p({ref:t},c),{},{components:r})):n.createElement(h,p({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var i=2;i<o;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2400:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n,a=r(3117),o=r(102),p=(r(7294),r(3905)),s=["components"],l={title:"Execute report",description:"This workflow sample demonstrates how to execute report using REST APIs."},i=void 0,c={unversionedId:"common-workflows/analytics/manage-reports/manage-report-objects/execute-report",id:"common-workflows/analytics/manage-reports/manage-report-objects/execute-report",title:"Execute report",description:"This workflow sample demonstrates how to execute report using REST APIs.",source:"@site/docs/common-workflows/analytics/manage-reports/manage-report-objects/execute-report.md",sourceDirName:"common-workflows/analytics/manage-reports/manage-report-objects",slug:"/common-workflows/analytics/manage-reports/manage-report-objects/execute-report",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-report-objects/execute-report",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/manage-reports/manage-report-objects/execute-report.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1676308226,formattedLastUpdatedAt:"Feb 13, 2023",frontMatter:{title:"Execute report",description:"This workflow sample demonstrates how to execute report using REST APIs."},sidebar:"tutorialSidebar",previous:{title:"Delete a derived element in report",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-report-objects/delete-a-derived-element-in-report"},next:{title:"Put a derived element in report",permalink:"/rest-api-docs/common-workflows/analytics/manage-reports/manage-report-objects/put-a-derived-element-in-report"}},m={},u=[{value:"Get SQL view of a report with prompts",id:"get-sql-view-of-a-report-with-prompts",level:2},{value:"1. Create a report instance with execution stage",id:"1-create-a-report-instance-with-execution-stage",level:3},{value:"2. Answer the prompt",id:"2-answer-the-prompt",level:3},{value:"3. Get the SQL view",id:"3-get-the-sql-view",level:3},{value:"4. Delete the report instance",id:"4-delete-the-report-instance",level:3},{value:"Execute report and get the data",id:"execute-report-and-get-the-data",level:2},{value:"1. Create a report instance with execution stage",id:"1-create-a-report-instance-with-execution-stage-1",level:3},{value:"2. Answer the prompt (skip this step if report has no prompts)",id:"2-answer-the-prompt-skip-this-step-if-report-has-no-prompts",level:3},{value:"3. Get report data",id:"3-get-report-data",level:3},{value:"4. Delete the report instance",id:"4-delete-the-report-instance-1",level:3}],d=(n="Available",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,p.kt)("div",e)}),h={toc:u};function k(e){var t=e.components,r=(0,o.Z)(e,s);return(0,p.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)(d,{since:"2021 Update 7",mdxType:"Available"}),(0,p.kt)("p",null,"This workflow sample demonstrates how to execute a report through modeling service."),(0,p.kt)("p",null,"The report object ID is ",(0,p.kt)("inlineCode",{parentName:"p"},"9B9ADA7F464E63CE0D0B709B03BD9370"),". The project ID is ",(0,p.kt)("inlineCode",{parentName:"p"},"B19DEDCC11D4E0EFC000EB9495D0F44F"),"."),(0,p.kt)("p",null,"Obtain the authorization token needed to execute the request using ",(0,p.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login"),". Obtain the project ID from ",(0,p.kt)("inlineCode",{parentName:"p"},"GET /api/projects"),"."),(0,p.kt)("h2",{id:"get-sql-view-of-a-report-with-prompts"},"Get SQL view of a report with prompts"),(0,p.kt)("p",null,"You want to get the SQL view of a report with prompts. You can create a report instance and set the executionStage to resolve_prompts. Then after answering the prompts, the SQL view will be available."),(0,p.kt)("h3",{id:"1-create-a-report-instance-with-execution-stage"},"1. Create a report instance with execution stage"),(0,p.kt)("p",null,"Endpoint: ",(0,p.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-createReportInstance"},"POST /api/model/reports/{reportId}/instances")," with executionStage=resolve_prompts"),(0,p.kt)("p",null,"Sample Request Header:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,p.kt)("p",null,"Sample Request Body: Empty"),(0,p.kt)("p",null,"Sample Curl:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/instances?executionStage=resolve_prompts' -H 'accept: application/json' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\n")),(0,p.kt)("p",null,"Sample Response Body:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "95DB57A54ACCCF292F0C0E9689EDF0A4"\n}\n')),(0,p.kt)("p",null,"Sample Response Code: 201 (A new report instance is created successfully.)"),(0,p.kt)("h3",{id:"2-answer-the-prompt"},"2. Answer the prompt"),(0,p.kt)("p",null,"Endpoint: ",(0,p.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/answerPrompts_2"},"PUT /api/reports/{reportId}/instances/{reportInstance}/prompts/answers")),(0,p.kt)("p",null,"Sample Request Header:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,p.kt)("p",null,"Sample Request Body:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "prompts": [\n    {\n      "name": "Elements of Country",\n      "type": "ELEMENTS",\n      "required": true,\n      "closed": false,\n      "source": {\n        "id": "8D679D3811D3E4981000E787EC6DE8A4",\n        "type": 12\n      },\n      "defaultAnswer": [],\n      "answers": [\n        {\n          "name": "USA"\n        },\n        {\n          "name": "England"\n        }\n      ]\n    }\n  ]\n}\n')),(0,p.kt)("p",null,"Sample Response Body: Empty"),(0,p.kt)("p",null,"Sample Response Code: 204 (Prompt has been answered.)"),(0,p.kt)("h3",{id:"3-get-the-sql-view"},"3. Get the SQL view"),(0,p.kt)("p",null,"Endpoint: ",(0,p.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/getReportSqlView"},"GET /api/v2/reports/{reportId}/instances/{reportInstance}/sqlView")),(0,p.kt)("p",null,"Sample Request Header:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\nSample Request Body: Empty\n')),(0,p.kt)("p",null,"Sample Response Body:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sqlStatement": "your sql"\n}\n')),(0,p.kt)("p",null,"Sample Response Code: 200 (SQL has been returned.)"),(0,p.kt)("h3",{id:"4-delete-the-report-instance"},"4. Delete the report instance"),(0,p.kt)("p",null,"Endpoint: ",(0,p.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-deleteReportInstance"},"DELETE /api/model/reports/{reportId}/instances")),(0,p.kt)("p",null,"Sample Request Header:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Instance": "95DB57A54ACCCF292F0C0E9689EDF0A4"\n')),(0,p.kt)("p",null,"Sample Request Body: Empty"),(0,p.kt)("p",null,"Sample Curl:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X DELETE 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/instances' -H 'accept: */*' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-MS-Instance: 95DB57A54ACCCF292F0C0E9689EDF0A4'\n")),(0,p.kt)("p",null,"Sample Response Body: Empty"),(0,p.kt)("p",null,"Sample Response Code: 204 (The report instance has been deleted successfully.)"),(0,p.kt)("h2",{id:"execute-report-and-get-the-data"},"Execute report and get the data"),(0,p.kt)("h3",{id:"1-create-a-report-instance-with-execution-stage-1"},"1. Create a report instance with execution stage"),(0,p.kt)("p",null,'Execute report may take a while. You can set "prefer" to "respond-async" in header to run the report asynchronously.'),(0,p.kt)("p",null,"Endpoint: ",(0,p.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-createReportInstance"},"POST /api/model/reports/{reportId}/instances")," with executionStage=execute_data"),(0,p.kt)("p",null,"Sample Request Header:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n"prefer": "respond-async"       # Optional, run report in asynchronous mode\n')),(0,p.kt)("p",null,"Sample Request Body: Empty"),(0,p.kt)("p",null,"Sample Curl:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/instances?executionStage=execute_data' -H 'accept: application/json' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F'\n")),(0,p.kt)("p",null,"Sample Response Body:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "95DB57A54ACCCF292F0C0E9689EDF0A4"\n}\n')),(0,p.kt)("p",null,"Sample Response Code: 201 (A new report instance is created successfully.)"),(0,p.kt)("h3",{id:"2-answer-the-prompt-skip-this-step-if-report-has-no-prompts"},"2. Answer the prompt (skip this step if report has no prompts)"),(0,p.kt)("p",null,"Please refer to Workflow 1 Step 2."),(0,p.kt)("h3",{id:"3-get-report-data"},"3. Get report data"),(0,p.kt)("p",null,"Endpoint: ",(0,p.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/executeReport_1"},"GET /api/v2/reports/{reportId}/instances/{reportInstance}")),(0,p.kt)("p",null,"Sample Request Header:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n')),(0,p.kt)("p",null,"Sample Request Body: Empty"),(0,p.kt)("p",null,"Sample Response Body: See details in ",(0,p.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/executeReport_1"},"MicroStrategy REST")),(0,p.kt)("p",null,"Sample Response Code: 200 (Report data has been returned.)"),(0,p.kt)("h3",{id:"4-delete-the-report-instance-1"},"4. Delete the report instance"),(0,p.kt)("p",null,"Endpoint: ",(0,p.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/ms-deleteReportInstance"},"DELETE /api/model/reports/{reportId}/instances")),(0,p.kt)("p",null,"Sample Request Header:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Instance": "95DB57A54ACCCF292F0C0E9689EDF0A4"\n')),(0,p.kt)("p",null,"Sample Request Body: Empty"),(0,p.kt)("p",null,"Sample Curl:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X DELETE 'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/reports/9B9ADA7F464E63CE0D0B709B03BD9370/instances' -H 'accept: */*' -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch' -H 'X-MSTR-MS-Instance: 95DB57A54ACCCF292F0C0E9689EDF0A4'\n")),(0,p.kt)("p",null,"Sample Response Body: Empty"),(0,p.kt)("p",null,"Sample Response Code: 204 (The report instance has been deleted successfully.)"))}k.isMDXComponent=!0}}]);