"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[587],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||l[d]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3e3:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var r,o=n(3117),a=n(102),i=(n(7294),n(3905)),c=["components"],p={title:"Retrieve a content group",description:"You can use REST APIs to retrieve a content group."},u=void 0,s={unversionedId:"common-workflows/administration/manage-content-group-objects/retrieve-a-content-group",id:"common-workflows/administration/manage-content-group-objects/retrieve-a-content-group",title:"Retrieve a content group",description:"You can use REST APIs to retrieve a content group.",source:"@site/docs/common-workflows/administration/manage-content-group-objects/retrieve-a-content-group.md",sourceDirName:"common-workflows/administration/manage-content-group-objects",slug:"/common-workflows/administration/manage-content-group-objects/retrieve-a-content-group",permalink:"/rest-api-docs/common-workflows/administration/manage-content-group-objects/retrieve-a-content-group",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/manage-content-group-objects/retrieve-a-content-group.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1677268684,formattedLastUpdatedAt:"Feb 24, 2023",frontMatter:{title:"Retrieve a content group",description:"You can use REST APIs to retrieve a content group."},sidebar:"tutorialSidebar",previous:{title:"Manage content group objects",permalink:"/rest-api-docs/common-workflows/administration/manage-content-group-objects/"},next:{title:"Retrieve all content groups",permalink:"/rest-api-docs/common-workflows/administration/manage-content-group-objects/retrieve-all-content-groups"}},l={},m=[],d=(r="Available",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),f={toc:m};function g(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(d,{since:"2021 Update 4",mdxType:"Available"}),(0,i.kt)("p",null,"You can use REST APIs to retrieve a content group definition by id."),(0,i.kt)("p",null,"In this sample workflow, we want to retrieve an existing content group with id ",(0,i.kt)("inlineCode",{parentName:"p"},"D35FC0B04BD79E95612DDB907C4CCDF6"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),".")),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Content%20Groups/getContentGroup"},"GET /api/contentGroups/{id}")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "evvk84kcucn8abon6c1qfbud7"\n')),(0,i.kt)("p",null,"Sample Request Body: N/A"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'GET' \\\n  'https://demo.microstrategy.com/MicroStrategyLibrary/api/contentGroups/D35FC0B04BD79E95612DDB907C4CCDF6' \\\n  -H 'accept: application/json' \\\n  -H 'X-MSTR-AuthToken: evvk84kcucn8abon6c1qfbud7'\n")),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "D35FC0B04BD79E95612DDB907C4CCDF6",\n  "name": "Finance",\n  "color": 0,\n  "opacity": 50,\n  "emailEnabled": true,\n  "dateCreated": "2022-10-25T10:10:57.446+0000",\n  "dateModified": "2022-10-25T10:10:57.446+0000",\n  "owner": {\n    "name": "Administrator",\n    "id": "54F3D26011D2896560009A8E67019608"\n  },\n  "type": 77,\n  "recipients": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator",\n      "abbreviation": "Administrator",\n      "group": false\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Sample Response Code: 200 (The content group is returned successfully.)"))}g.isMDXComponent=!0}}]);