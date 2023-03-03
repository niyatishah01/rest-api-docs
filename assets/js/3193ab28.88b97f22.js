"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8617],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=o.createContext({}),c=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,m=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,f=u["".concat(m,".").concat(d)]||u[d]||l[d]||r;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},62584:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var o=n(83117),i=n(80102),r=(n(67294),n(3905)),a=["components"],s={title:"Retrieve a timezone's definition",description:"You can use REST APIs to retrieve the definition for a timezone through the Modeling service. This topic includes the following workflows."},m=void 0,c={unversionedId:"common-workflows/modeling/manage-time-zone-objects/retrieve-a-time-zones-definition",id:"common-workflows/modeling/manage-time-zone-objects/retrieve-a-time-zones-definition",title:"Retrieve a timezone's definition",description:"You can use REST APIs to retrieve the definition for a timezone through the Modeling service. This topic includes the following workflows.",source:"@site/docs/common-workflows/modeling/manage-time-zone-objects/retrieve-a-time-zones-definition.md",sourceDirName:"common-workflows/modeling/manage-time-zone-objects",slug:"/common-workflows/modeling/manage-time-zone-objects/retrieve-a-time-zones-definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-time-zone-objects/retrieve-a-time-zones-definition",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-time-zone-objects/retrieve-a-time-zones-definition.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1677861063,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{title:"Retrieve a timezone's definition",description:"You can use REST APIs to retrieve the definition for a timezone through the Modeling service. This topic includes the following workflows."}},p={},l=[{value:"Retrieve a timezone&#39;s definition",id:"retrieve-a-timezones-definition",level:2},{value:"Retrieve a timezone&#39;s definition within a changset",id:"retrieve-a-timezones-definition-within-a-changset",level:2}],u={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-4845cf11-1e66-4530-b33f-730143143498?ctx=documentation"},"REST API Playground"),"."),(0,r.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,r.kt)("p",null,"You can use REST APIs to retrieve the definition for a timezone through the Modeling service. This topic includes the following workflows."),(0,r.kt)("h2",{id:"retrieve-a-timezones-definition"},"Retrieve a timezone's definition"),(0,r.kt)("p",null,"You want to get the definition of a system timezone. The object ID of the timezone is ",(0,r.kt)("inlineCode",{parentName:"p"},"1D18D39B4594CFAF60A6C1B2F48164E8"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,r.kt)("p",{parentName:"admonition"},"Since timezone objects are configuration objects, you must set the project ID as an empty string.")),(0,r.kt)("p",null,"Get the timezone's definition using ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Timezones"},"GET /api/model/timezones/{timezoneId}"),"."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "lmiouhsue1osvl8uf2vuvlbcfp"\n"X-MSTR-ProjectID": ""\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/timezones/1D18D39B4594CFAF60A6C1B2F48164E8" -H "accept: application/json" -H "X-MSTR-AuthToken: lmiouhsue1osvl8uf2vuvlbcfp" -H "X-MSTR-ProjectID: "\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("p",null,"You can view the timezone's definition in the body of the response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2021-10-21T08:41:51.349Z",\n    "dateModified": "2021-12-13T11:30:02.340Z",\n    "versionId": "2D54462A4BC579B910BC59A10F60354C",\n    "primaryLocale": "en-US",\n    "objectId": "1D18D39B4594CFAF60A6C1B2F48164E8",\n    "subType": "timezone_system",\n    "name": "America New York time",\n    "description": "The state of New York uses the Eastern Timezone (UTC-05:00) with daylight saving time (UTC-04:00)."\n  },\n  "currentOffset": -18000\n}\n')),(0,r.kt)("p",null,"Response Code: 200 (The timezone's definition is returned successfully.)"),(0,r.kt)("h2",{id:"retrieve-a-timezones-definition-within-a-changset"},"Retrieve a timezone's definition within a changset"),(0,r.kt)("p",null,"You want the definition of a custom timezone object. That object ID of the timezone is ",(0,r.kt)("inlineCode",{parentName:"p"},"E99B4F7692564D36A5B324A7956CB84F"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,r.kt)("p",{parentName:"admonition"},"Since timezone objects are configuration objects, you must set the project ID as an empty string.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),". If you plan to use the response of ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/model/timezones")," to create a new timezone or update the custom timezone's definitions, it is recommended to associate all requests to one changeset.")),(0,r.kt)("p",null,"Get the timezone's definition within a changeset using ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api/model/timezones/862780DC499A14D74FEC7EB2EF317DA2"},"GET /api/model/timezones/{timezoneId}"),"."),(0,r.kt)("p",null,"Sample Request Header"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/timezones/E99B4F7692564D36A5B324A7956CB84F" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("p",null,"You can view the timezone's definition in the body of the response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2021-12-08T08:54:07.114Z",\n    "dateModified": "2021-12-08T08:54:07.114Z",\n    "versionId": "12F1BE5E4B1FE0965E9BA7933985187C",\n    "primaryLocale": "en-US",\n    "objectId": "E99B4F7692564D36A5B324A7956CB84F",\n    "subType": "timezone_custom",\n    "name": "Asia Shanghai time"\n  },\n  "baseTimezone": {\n    "objectId": "0B4AC9E54E016BF00EAA99929C2B4E5C",\n    "subType": "timezone_system",\n    "name": "Asia Shanghai time"\n  },\n  "currentOffset": 28800\n}\n')),(0,r.kt)("p",null,"Response Code: 200 (timezone's definition is returned successfully)"))}d.isMDXComponent=!0}}]);