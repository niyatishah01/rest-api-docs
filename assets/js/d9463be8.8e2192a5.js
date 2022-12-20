"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[9899],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),i=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=i(e.components);return o.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,g=d["".concat(u,".").concat(m)]||d[m]||l[m]||a;return n?o.createElement(g,p(p({ref:t},s),{},{components:n})):o.createElement(g,p({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var i=2;i<a;i++)p[i]=n[i];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7069:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return l}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),p=["components"],c={title:"Update a content group",description:"You can use REST APIs to update a content group."},u=void 0,i={unversionedId:"common-workflows/manage-content-group-objects/update-a-content-group",id:"common-workflows/manage-content-group-objects/update-a-content-group",title:"Update a content group",description:"You can use REST APIs to update a content group.",source:"@site/docs/common-workflows/manage-content-group-objects/update-a-content-group.md",sourceDirName:"common-workflows/manage-content-group-objects",slug:"/common-workflows/manage-content-group-objects/update-a-content-group",permalink:"/rest-api-docs/common-workflows/manage-content-group-objects/update-a-content-group",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-content-group-objects/update-a-content-group.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1671571075,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{title:"Update a content group",description:"You can use REST APIs to update a content group."},sidebar:"tutorialSidebar",previous:{title:"Create a content group",permalink:"/rest-api-docs/common-workflows/manage-content-group-objects/create-a-content-group"},next:{title:"Retrieve contents of a content group",permalink:"/rest-api-docs/common-workflows/manage-content-group-objects/retrieve-contents-of-an-existing-content-group"}},s={},l=[],d={toc:l};function m(e){var t=e.components,n=(0,r.Z)(e,p);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can use REST APIs to update a content group definition by id."),(0,a.kt)("p",null,"In this sample workflow, we want to update an existing content group with id ",(0,a.kt)("inlineCode",{parentName:"p"},"D35FC0B04BD79E95612DDB907C4CCDF6"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),".")),(0,a.kt)("p",null,"Endpoint: ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Content%20Groups/updateContentGroup"},"PATCH /api/contentGroups/{id}")),(0,a.kt)("p",null,"Sample Request Header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "evvk84kcucn8abon6c1qfbud7"\n')),(0,a.kt)("p",null,"Sample Request Body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "operationList": [\n    {\n      "op": "replace",\n      "path": "/name",\n      "value": "Finance-2",\n      "id": 1\n    },\n    {\n      "op": "replace",\n      "path": "/color",\n      "value": 10327726,\n      "id": 2\n    },\n    {\n      "op": "replace",\n      "path": "/opacity",\n      "value": 80,\n      "id": 3\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"Sample Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X \'PATCH\' \\\n  \'https://demo.microstrategy.com/MicroStrategyLibrary/api/contentGroups/D35FC0B04BD79E95612DDB907C4CCDF6\' \\\n  -H \'accept: */*\' \\\n  -H \'X-MSTR-AuthToken: evvk84kcucn8abon6c1qfbud7\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "operationList": [\n        {\n            "op": "replace",\n            "path": "/name",\n            "value": "Finance-2",\n            "id": 1\n        },\n        {\n            "op": "replace",\n            "path": "/color",\n            "value": 10327726,\n            "id": 2\n        },\n        {\n            "op": "replace",\n            "path": "/opacity",\n            "value": 80,\n            "id": 3\n        }\n    ]\n}\'\n')),(0,a.kt)("p",null,"Sample Response Body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "operations": [\n    {\n      "id": 3,\n      "status": 204\n    },\n    {\n      "id": 2,\n      "status": 204\n    },\n    {\n      "id": 1,\n      "status": 204\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"Sample Response Code: 200 (All the operations have been done successfully.)"))}m.isMDXComponent=!0}}]);