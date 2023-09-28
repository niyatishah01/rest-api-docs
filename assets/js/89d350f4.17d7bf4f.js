"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[9718],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8981:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var a,o=n(83117),r=n(80102),i=(n(67294),n(3905)),l=["components"],s={title:"Modify a KPI object",description:"This workflow sample demonstrates how to modify a KPI object owned by a user."},p=void 0,d={unversionedId:"common-workflows/analytics/manage-insights/modify-kpi",id:"common-workflows/analytics/manage-insights/modify-kpi",title:"Modify a KPI object",description:"This workflow sample demonstrates how to modify a KPI object owned by a user.",source:"@site/docs/common-workflows/analytics/manage-insights/modify-kpi.md",sourceDirName:"common-workflows/analytics/manage-insights",slug:"/common-workflows/analytics/manage-insights/modify-kpi",permalink:"/rest-api-docs/common-workflows/analytics/manage-insights/modify-kpi",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/manage-insights/modify-kpi.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1695919031,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{title:"Modify a KPI object",description:"This workflow sample demonstrates how to modify a KPI object owned by a user."},sidebar:"tutorialSidebar",previous:{title:"Get KPI objects",permalink:"/rest-api-docs/common-workflows/analytics/manage-insights/get-kpi"},next:{title:"Delete a KPI object",permalink:"/rest-api-docs/common-workflows/analytics/manage-insights/delete-kpi"}},c={},m=[{value:"1. Get KPI id and project id",id:"1-get-kpi-id-and-project-id",level:2},{value:"2. Modify KPI",id:"2-modify-kpi",level:2}],u=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),f={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(u,{since:"2021 Update 10",mdxType:"Available"}),(0,i.kt)("p",null,"This workflow sample demonstrates how to modify a KPI object owned by a user."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),".")),(0,i.kt)("h2",{id:"1-get-kpi-id-and-project-id"},"1. Get KPI id and project id"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/analytics/manage-insights/get-kpi#get-all-kpis"},"Get KPIs for user")," to get all KPIs that belong to a user."),(0,i.kt)("p",null,"From the response body, get the KPI ID and project ID of the KPI object that you want to modify."),(0,i.kt)("h2",{id:"2-modify-kpi"},"2. Modify KPI"),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Insight%20Engine%20-%20KPIs/modifyKPI"},"PATCH /api/insight/KPIs/{id}")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"X-MSTR-AuthToken": "evvk84kcucn8abon6c1qfbud7"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("p",null,"This API only supports ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"configString")," modifications. See ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/analytics/manage-insights/get-kpi#kpi-fields-explanation"},"KPI fields explanation")," for detailed explanations of these two fields."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "New KPI name",\n  "configString": "{\\"reversedPalette\\":false,\\"selectedDataCompare\\":\\"1d\\"}"\n}\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"{id}")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"PATCH /api/insight/KPIs/{id}")," with the KPI ID from ",(0,i.kt)("inlineCode",{parentName:"p"},"step 1"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X \'PATCH\' \\\n  \'https://demo.microstrategy.com/MicroStrategyLibrary/api/insight/KPIs/BB3FD5B6AC410B389F2AEDB379856BED\' \\\n  -H \'accept: */*\' \\\n  -H \'X-MSTR-AuthToken: evvk84kcucn8abon6c1qfbud7\' \\\n  -H \'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754\' \\\n  -d \'{\n    "name": "New KPI name",\n    "configString": "{\\"reversedPalette\\":false,\\"selectedDataCompare\\":\\"1d\\"}"\n}\'\n')),(0,i.kt)("p",null,"Sample Response:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Response Code"),(0,i.kt)("th",{parentName:"tr",align:null},"Status"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"200"),(0,i.kt)("td",{parentName:"tr",align:null},"KPI deleted successfully.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"404"),(0,i.kt)("td",{parentName:"tr",align:null},"Cannot find the KPI object with given id and project id.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"400"),(0,i.kt)("td",{parentName:"tr",align:null},"Error in modifying KPI, e.g., another KPI object with same name already exists.")))),(0,i.kt)("p",null,"Sample Response Body on success:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "6769BB1E41AEB9B14008B5A0F205E6C2",\n  "name": "New KPI name",\n  "dateCreated": "2023-02-28T09:03:23.792Z",\n  "dateModified": "2023-02-28T09:28:52.865Z",\n  "schedule": {\n    "id": "CA5683F942AD1F8529627D945B254A4A",\n    "name": null,\n    "recurrenceIntervalInHour": 1\n  },\n  "content": {\n    "id": "859CD270446ABFB6F7DDC5AD4481EE78",\n    "type": 55,\n    "name": "Test1"\n  },\n  "configString": "{\\"reversedPalette\\":false,\\"selectedDataCompare\\":\\"1d\\"}",\n  "disabled": false,\n  "bookmarkId": "910B225245513DA9617A0A9FFC8E1E0E",\n  "subscriptionId": "75D225054A4A9A528D0B2DB98FDE5E85",\n  "kpiTarget": {\n    "chapterKey": "K36",\n    "pageKey": "K53",\n    "nodeKey": "K52",\n    "kpiObjects": [\n      {\n        "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n        "type": 4,\n        "name": "Cost"\n      }\n    ],\n    "elements": []\n  },\n  "hashInfo": {\n    "defn": {\n      "id": "f352e1353fc90cc4df89debd4d36c9dee48e7882a650f9b761c921e196a8302f",\n      "validUntil": null\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Sample Response Body on Error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "-2147217373",\n  "message": "(An object with name \'New KPI name\' and type \'KPI\' already exists in the destination folder.)"\n}\n')))}k.isMDXComponent=!0}}]);