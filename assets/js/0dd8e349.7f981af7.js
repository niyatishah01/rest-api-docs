"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8016],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=o.createContext({}),s=function(t){var e=o.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},u=function(t){var e=s(t.components);return o.createElement(i.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,i=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||l[m]||a;return n?o.createElement(f,c(c({ref:e},u),{},{components:n})):o.createElement(f,c({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,c=new Array(a);c[0]=d;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:r,c[1]=p;for(var s=2;s<a;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8939:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return l}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),c=["components"],p={title:"Update contents of a content group",description:"You can use REST APIs to update contents of a content group."},i=void 0,s={unversionedId:"common-workflows/manage-content-group-objects/update-contents-of-an-existing-content-group",id:"common-workflows/manage-content-group-objects/update-contents-of-an-existing-content-group",title:"Update contents of a content group",description:"You can use REST APIs to update contents of a content group.",source:"@site/docs/common-workflows/manage-content-group-objects/update-contents-of-an-existing-content-group.md",sourceDirName:"common-workflows/manage-content-group-objects",slug:"/common-workflows/manage-content-group-objects/update-contents-of-an-existing-content-group",permalink:"/rest-api-docs/common-workflows/manage-content-group-objects/update-contents-of-an-existing-content-group",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-content-group-objects/update-contents-of-an-existing-content-group.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1667514843,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{title:"Update contents of a content group",description:"You can use REST APIs to update contents of a content group."},sidebar:"tutorialSidebar",previous:{title:"Retrieve contents of a content group",permalink:"/rest-api-docs/common-workflows/manage-content-group-objects/retrieve-contents-of-an-existing-content-group"},next:{title:"MicroStrategy REST API samples",permalink:"/rest-api-docs/microstrategy-rest-api-samples/"}},u={},l=[],d={toc:l};function m(t){var e=t.components,n=(0,r.Z)(t,c);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can use REST APIs to update contents of a content group by id."),(0,a.kt)("p",null,"In this sample workflow, we want to add a dossier as the contents to an existing content group with id ",(0,a.kt)("inlineCode",{parentName:"p"},"D35FC0B04BD79E95612DDB907C4CCDF6"),". The dossier id is ",(0,a.kt)("inlineCode",{parentName:"p"},"1182F0264D49467A43D9198D6E1331F2"),", and it's in the project ",(0,a.kt)("inlineCode",{parentName:"p"},"235853DC4B79DABCE8C6FFB26B7D8DC3"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,a.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,a.kt)("p",null,"Endpoint: ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Content%20Groups/updateContentGroupContent"},"PATCH /api/contentGroups/{id}/contents")),(0,a.kt)("p",null,"Sample Request Header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "evvk84kcucn8abon6c1qfbud7"\n')),(0,a.kt)("p",null,"Sample Request Body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "operationList": [\n    {\n      "op": "add",\n      "path": "/235853DC4B79DABCE8C6FFB26B7D8DC3",\n      "value": [\n        {\n          "id": "1182F0264D49467A43D9198D6E1331F2",\n          "type": 55\n        }\n      ],\n      "id": 1\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"Sample Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X \'PATCH\' \\\n  \'https://demo.microstrategy.com/MicroStrategyLibrary/api/contentGroups/D35FC0B04BD79E95612DDB907C4CCDF6/contents\' \\\n  -H \'accept: */*\' \\\n  -H \'X-MSTR-AuthToken: q9j2dck33c53s7g98go6iig876\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "operationList": [{\n        "op": "add",\n        "path": "/235853DC4B79DABCE8C6FFB26B7D8DC3",\n        "value": [{\n            "id": "1182F0264D49467A43D9198D6E1331F2",\n            "type": 55\n        }],\n        "id": 1\n    }]\n}\'\n')),(0,a.kt)("p",null,"Sample Response Body: N/A"),(0,a.kt)("p",null,"Sample Response Code: 204 (The contents are added to the content group successfully.)"))}m.isMDXComponent=!0}}]);