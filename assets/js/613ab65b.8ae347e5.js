"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1921],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=m(n),u=o,h=d["".concat(p,".").concat(u)]||d[u]||l[u]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var m=2;m<i;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1683:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return l}});var a=n(3117),o=n(102),i=(n(7294),n(3905)),r=["components"],s={title:"Retrieve a timezone's definition",description:"You can use REST APIs to retrieve the definition for a timezone through the Modeling service. This topic includes the following workflows."},p=void 0,m={unversionedId:"common-workflows/manage-time-zone-objects/retrieve-a-time-zones-definition",id:"common-workflows/manage-time-zone-objects/retrieve-a-time-zones-definition",title:"Retrieve a timezone's definition",description:"You can use REST APIs to retrieve the definition for a timezone through the Modeling service. This topic includes the following workflows.",source:"@site/docs/common-workflows/manage-time-zone-objects/retrieve-a-time-zones-definition.md",sourceDirName:"common-workflows/manage-time-zone-objects",slug:"/common-workflows/manage-time-zone-objects/retrieve-a-time-zones-definition",permalink:"/rest-api-docs/common-workflows/manage-time-zone-objects/retrieve-a-time-zones-definition",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-time-zone-objects/retrieve-a-time-zones-definition.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1667514843,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{title:"Retrieve a timezone's definition",description:"You can use REST APIs to retrieve the definition for a timezone through the Modeling service. This topic includes the following workflows."}},c={},l=[{value:"Retrieve a timezone&#39;s definition",id:"retrieve-a-timezones-definition",level:2},{value:"Retrieve a timezone&#39;s definition within a changset",id:"retrieve-a-timezones-definition-within-a-changset",level:2}],d={toc:l};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-4845cf11-1e66-4530-b33f-730143143498?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"You can use REST APIs to retrieve the definition for a timezone through the Modeling service. This topic includes the following workflows."),(0,i.kt)("h2",{id:"retrieve-a-timezones-definition"},"Retrieve a timezone's definition"),(0,i.kt)("p",null,"You want to get the definition of a system timezone. The object ID of the timezone is ",(0,i.kt)("inlineCode",{parentName:"p"},"1D18D39B4594CFAF60A6C1B2F48164E8"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Since timezone objects are configuration objects, you must set the project ID as an empty string.")),(0,i.kt)("p",null,"Get the timezone's definition using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Timezones"},"GET /api/model/timezones/{timezoneId}"),"."),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "lmiouhsue1osvl8uf2vuvlbcfp"\n"X-MSTR-ProjectID": ""\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/timezones/1D18D39B4594CFAF60A6C1B2F48164E8" -H "accept: application/json" -H "X-MSTR-AuthToken: lmiouhsue1osvl8uf2vuvlbcfp" -H "X-MSTR-ProjectID: "\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,"You can view the timezone's definition in the body of the response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2021-10-21T08:41:51.349Z",\n    "dateModified": "2021-12-13T11:30:02.340Z",\n    "versionId": "2D54462A4BC579B910BC59A10F60354C",\n    "primaryLocale": "en-US",\n    "objectId": "1D18D39B4594CFAF60A6C1B2F48164E8",\n    "subType": "timezone_system",\n    "name": "America New York time",\n    "description": "The state of New York uses the Eastern Timezone (UTC-05:00) with daylight saving time (UTC-04:00)."\n  },\n  "currentOffset": -18000\n}\n')),(0,i.kt)("p",null,"Response Code: 200 (The timezone's definition is returned successfully.)"),(0,i.kt)("h2",{id:"retrieve-a-timezones-definition-within-a-changset"},"Retrieve a timezone's definition within a changset"),(0,i.kt)("p",null,"You want the definition of a custom timezone object. That object ID of the timezone is ",(0,i.kt)("inlineCode",{parentName:"p"},"E99B4F7692564D36A5B324A7956CB84F"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Since timezone objects are configuration objects, you must set the project ID as an empty string.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"A changeset maintains an indivisible group of creations or modifications on modeling objects. If you plan to use the response of ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/model/timezones")," to create a new timezone or update the custom timezone's definitions, it is recommended to associate all requests to one changeset.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a changeset using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset"},"POST /api/model/changesets"),"."),(0,i.kt)("p",{parentName:"li"},"Sample Request Header:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-ProjectID": ""\n')),(0,i.kt)("p",{parentName:"li"},"Sample Request Body: Empty"),(0,i.kt)("p",{parentName:"li"},"Sample Curl:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-ProjectID: "\n')),(0,i.kt)("p",{parentName:"li"},"Sample Response Body:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "0E9F01172ECF4BA2BB510F7B9FB4F6E8",\n  "dateCreated": "2020-11-17T16:38:09.825650Z",\n  "dateModified": "2020-11-17T16:38:09.825665Z",\n  "status": "Ready",\n  "schemaEdit": false,\n  "userName": "MSTR User",\n  "mstrProjectId": "38A062302D4411D28E71006008960167",\n  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US"\n}\n')),(0,i.kt)("p",{parentName:"li"},"Sample Response Code: 201 (A new changeset is created successfully.)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Get the timezone's definition within a changeset using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api/model/timezones/862780DC499A14D74FEC7EB2EF317DA2"},"GET /api/model/timezones/{timezoneId}"),"."),(0,i.kt)("p",{parentName:"li"},"Sample Request Header"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,i.kt)("p",{parentName:"li"},"Sample Request Body: Empty"),(0,i.kt)("p",{parentName:"li"},"Sample Curl:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/timezones/E99B4F7692564D36A5B324A7956CB84F" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,i.kt)("p",{parentName:"li"},"Sample Response Body:"),(0,i.kt)("p",{parentName:"li"},"You can view the timezone's definition in the body of the response."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2021-12-08T08:54:07.114Z",\n    "dateModified": "2021-12-08T08:54:07.114Z",\n    "versionId": "12F1BE5E4B1FE0965E9BA7933985187C",\n    "primaryLocale": "en-US",\n    "objectId": "E99B4F7692564D36A5B324A7956CB84F",\n    "subType": "timezone_custom",\n    "name": "Asia Shanghai time"\n  },\n  "baseTimezone": {\n    "objectId": "0B4AC9E54E016BF00EAA99929C2B4E5C",\n    "subType": "timezone_system",\n    "name": "Asia Shanghai time"\n  },\n  "currentOffset": 28800\n}\n')),(0,i.kt)("p",{parentName:"li"},"Response Code: 200 (timezone's definition is returned successfully)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Delete a changeset using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#//Changesets/ms-dehttps://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changeset/ms-deleteChangeset"},"DELETE /api/model/changesets/{changesetId}"),"."),(0,i.kt)("p",{parentName:"li"},"Sample Request Header:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,i.kt)("p",{parentName:"li"},"Sample Request Body: Empty"),(0,i.kt)("p",{parentName:"li"},"Sample Curl:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/0E9F01172ECF4BA2BB510F7B9FB4F6E8" -H "accept: */*" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,i.kt)("p",{parentName:"li"},"Sample Response Body: Empty"),(0,i.kt)("p",{parentName:"li"},"Sample Response Code: 204 (The changeset has been deleted successfully.)"))))}u.isMDXComponent=!0}}]);