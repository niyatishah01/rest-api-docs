"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1690],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return u}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=p(r),u=i,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||a;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91434:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var n,i=r(83117),a=r(80102),o=(r(67294),r(3905)),d=["components"],s={title:"Workflow sample - Update a driver's definition",sidebar_label:"Update a driver's definition",description:"This workflow sample demonstrates how to update a driver's definition"},p=void 0,l={unversionedId:"common-workflows/administration/manage-drivers/update-a-driver-definition",id:"common-workflows/administration/manage-drivers/update-a-driver-definition",title:"Workflow sample - Update a driver's definition",description:"This workflow sample demonstrates how to update a driver's definition",source:"@site/docs/common-workflows/administration/manage-drivers/update-a-driver-definition.md",sourceDirName:"common-workflows/administration/manage-drivers",slug:"/common-workflows/administration/manage-drivers/update-a-driver-definition",permalink:"/rest-api-docs/common-workflows/administration/manage-drivers/update-a-driver-definition",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/manage-drivers/update-a-driver-definition.md",tags:[],version:"current",lastUpdatedBy:"kezhou-mstr",lastUpdatedAt:1701121876,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"Workflow sample - Update a driver's definition",sidebar_label:"Update a driver's definition",description:"This workflow sample demonstrates how to update a driver's definition"},sidebar:"tutorialSidebar",previous:{title:"Retrieve a driver's definition",permalink:"/rest-api-docs/common-workflows/administration/manage-drivers/retrieve-a-driver-definition"},next:{title:"Manage runtimes",permalink:"/rest-api-docs/common-workflows/administration/manage-runtime-objects/manage-runtimes"}},c={},m=[{value:"Update a driver&#39;s definition PATCH /api/drivers/{id}",id:"update-a-drivers-definition-patch-apidriversid",level:2}],u=(n="Available",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),f={toc:m};function v(e){var t=e.components,r=(0,a.Z)(e,d);return(0,o.kt)("wrapper",(0,i.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u,{since:"2021 Update 9",mdxType:"Available"}),(0,o.kt)("p",null,"This workflow sample demonstrates how to update a driver's definition."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Obtain the driver's ID needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Drivers/getDrivers_1"},"GET /api/drivers"),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},'To use this API, the user should have the privilege of "Create configuration objects" and "Configure gateways and drivers".'),(0,o.kt)("p",{parentName:"admonition"},'Currently, we only support updating a driver\'s "enabled" status.')),(0,o.kt)("h2",{id:"update-a-drivers-definition-patch-apidriversid"},"Update a driver's definition ",(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Drivers/patchDriverById"},"PATCH /api/drivers/{id}")),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n')),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "operationList": [\n    {\n      "op": "replace",\n      "path": "/enabled",\n      "value": true\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  curl -X 'PATCH' \\\n  'https://demo.microstrategy.com/MicroStrategyLibrary/api/drivers/7358B0B8264A4B6198520B2BC0B6248B' \\\n  -H 'accept: application/json' \\\n  -H 'X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch ' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n  \"operationList\": [\n    {\n      \"op\": \"replace\",\n      \"path\": \"/enabled\",\n      \"value\": false\n    }\n  ]\n}'\n")),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,"You can get the updated driver's definition."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "enabled": false,\n  "id": "7358B0B8264A4B6198520B2BC0B6248B",\n  "isODBC": false,\n  "name": "com.microstrategy.jdbc.db2.TestDriver"\n}\n')),(0,o.kt)("p",null,"Sample Response Code: 200"))}v.isMDXComponent=!0}}]);