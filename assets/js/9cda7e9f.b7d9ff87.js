"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[2258],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),m=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return o.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||l[d]||r;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var m=2;m<r;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33693:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return l}});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),i=["components"],s={title:"Create a custom timezone object",sidebar_label:"Create a custom timezone object",description:"This workflow demonstrates how to create a new custom object through the Modeling service."},c=void 0,m={unversionedId:"common-workflows/modeling/manage-time-zone-objects/create-a-time-zone-object",id:"common-workflows/modeling/manage-time-zone-objects/create-a-time-zone-object",title:"Create a custom timezone object",description:"This workflow demonstrates how to create a new custom object through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-time-zone-objects/create-a-time-zone-object.md",sourceDirName:"common-workflows/modeling/manage-time-zone-objects",slug:"/common-workflows/modeling/manage-time-zone-objects/create-a-time-zone-object",permalink:"/rest-api-docs/common-workflows/modeling/manage-time-zone-objects/create-a-time-zone-object",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-time-zone-objects/create-a-time-zone-object.md",tags:[],version:"current",lastUpdatedBy:"kezhou-mstr",lastUpdatedAt:1701121876,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"Create a custom timezone object",sidebar_label:"Create a custom timezone object",description:"This workflow demonstrates how to create a new custom object through the Modeling service."}},p={},l=[{value:"Create a new custom timezone using POST /api/model/timezones",id:"create-a-new-custom-timezone-using-post-apimodeltimezones",level:2}],u={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-0bea31ca-d010-4214-8ad6-19c1906fbd5a?ctx=documentation"},"REST API Playground"),"."),(0,r.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,r.kt)("p",null,"This workflow demonstrates how to create a new custom object through the Modeling service."),(0,r.kt)("p",null,"You want to create a new custom timezone named ",(0,r.kt)("inlineCode",{parentName:"p"},'"New York"')," under the ",(0,r.kt)("inlineCode",{parentName:"p"},"Custom Timezones")," folder in the configuration."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,r.kt)("p",{parentName:"admonition"},"Since timezone objects are configuration objects, you must set the project ID as an empty string.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),".")),(0,r.kt)("h2",{id:"create-a-new-custom-timezone-using-post-apimodeltimezones"},"Create a new custom timezone using ",(0,r.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Timezones/ms-postTimezone"},"POST /api/model/timezones")),(0,r.kt)("p",null,"You want to create the timezone by providing its name and base timezone."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"'name' is not required to create a new timezone. If 'name' is not provided, the new timezone will be named using the base timezone's name. If the base timezone's name already exists in the folder, the suffix like ",(0,r.kt)("inlineCode",{parentName:"p"},"(1)"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"(2)"),", and so on will be appended.")),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json""X-MSTR-AuthToken": "ns42kvi9lb36ae7g3scphn0ga9""X-MSTR-MS-Changeset": "8DF1659E9D74484D9D47B9478D4C7D00"\n')),(0,r.kt)("p",null,"Sample Request Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": { "name": "New York" },\n  "baseTimezone": { "objectId": "1D18D39B4594CFAF60A6C1B2F48164E8" }\n}\n')),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/timezones" -H "accept: application/json" -H "X-MSTR-AuthToken: ns42kvi9lb36ae7g3scphn0ga9" -H "X-MSTR-MS-Changeset: 8DF1659E9D74484D9D47B9478D4C7D00" -H "Content-Type: application/json" -d "{\\"information\\": {\\"name\\": \\"New York\\"},\\"baseTimezone\\": {\\"objectId\\": \\"1D18D39B4594CFAF60A6C1B2F48164E8\\"}}"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("p",null,"You can view the new timezone's definition in the body of the response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2021-12-08T08:54:07.114Z",\n    "dateModified": "2021-12-08T08:54:07.114Z",\n    "versionId": "12F1BE5E4B1FE0965E9BA7933985187C",\n    "primaryLocale": "en-US",\n    "objectId": "1A083C6D70DC40488B6F7D8F91FE266C",\n    "subType": "timezone_custom",\n    "name": "New York"\n  },\n  "baseTimezone": {\n    "objectId": "1D18D39B4594CFAF60A6C1B2F48164E8",\n    "subType": "timezone_system",\n    "name": "America New York time"\n  },\n  "currentOffset": -18000\n}\n')),(0,r.kt)("p",null,"Response Code: 201 (A new timezone is created successfully in the changeset.)"))}d.isMDXComponent=!0}}]);