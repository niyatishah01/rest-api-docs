"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8440],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return u}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(t),u=i,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||a;return t?n.createElement(f,o(o({ref:r},c),{},{components:t})):n.createElement(f,o({ref:r},c))}));function u(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},61978:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var n,i=t(83117),a=t(80102),o=(t(67294),t(3905)),s=["components"],l={title:"Workflow sample - Retrieve all drivers' definitions",sidebar_label:"Retrieve all drivers' definitions",description:"This workflow sample demonstrates how to list all drivers' definitions in metadata."},d=void 0,c={unversionedId:"common-workflows/administration/manage-drivers/retrieve-drivers",id:"common-workflows/administration/manage-drivers/retrieve-drivers",title:"Workflow sample - Retrieve all drivers' definitions",description:"This workflow sample demonstrates how to list all drivers' definitions in metadata.",source:"@site/docs/common-workflows/administration/manage-drivers/retrieve-drivers.md",sourceDirName:"common-workflows/administration/manage-drivers",slug:"/common-workflows/administration/manage-drivers/retrieve-drivers",permalink:"/rest-api-docs/common-workflows/administration/manage-drivers/retrieve-drivers",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/manage-drivers/retrieve-drivers.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1680286823,formattedLastUpdatedAt:"Mar 31, 2023",frontMatter:{title:"Workflow sample - Retrieve all drivers' definitions",sidebar_label:"Retrieve all drivers' definitions",description:"This workflow sample demonstrates how to list all drivers' definitions in metadata."},sidebar:"tutorialSidebar",previous:{title:"Manage drivers",permalink:"/rest-api-docs/common-workflows/administration/manage-drivers/"},next:{title:"Retrieve a driver's definition",permalink:"/rest-api-docs/common-workflows/administration/manage-drivers/retrieve-a-driver-definition"}},p={},m=[{value:"Retrieve all drivers&#39; definitions GET /api/drivers",id:"retrieve-all-drivers-definitions-get-apidrivers",level:2}],u=(n="Available",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),f={toc:m};function v(e){var r=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)(u,{since:"2021 Update 9",mdxType:"Available"}),(0,o.kt)("p",null,"This workflow sample demonstrates how to list all drivers' definitions in metadata."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),".")),(0,o.kt)("h2",{id:"retrieve-all-drivers-definitions-get-apidrivers"},"Retrieve all drivers' definitions ",(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Drivers/getDrivers_1"},"GET /api/drivers")),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n')),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X "GET" \\\n  "http://demo.microstrategy.com/MicroStrategyLibrary/api/drivers" \\\n  -H "accept: application/json" \\\n  -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch"\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,"You can get all the driver objects in the body of the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "drivers": {\n    "39A3AC385545FE26E6DA33E3636B162D": {\n      "enabled": true,\n      "id": "39A3AC385545FE26E6DA33E3636B162D",\n      "isODBC": false,\n      "name": "com.microstrategy.jdbc.db2.DB2Driver"\n    },\n    "43A37DAC2A79A629643FBF30636B162D": {\n      "enabled": true,\n      "id": "43A37DAC2A79A629643FBF30636B162D",\n      "isODBC": true,\n      "name": "Teradata Database ODBC Driver 17.20"\n    },\n    "43A6758EF9CE9BBB12AD13C2636B162D": {\n      "enabled": true,\n      "id": "43A6758EF9CE9BBB12AD13C2636B162D",\n      "isODBC": true,\n      "name": "MicroStrategy ODBC Driver for SQL Server Wire Protocol"\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Sample Response Code: 200"))}v.isMDXComponent=!0}}]);