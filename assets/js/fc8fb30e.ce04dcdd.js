"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[4226],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,f=d["".concat(p,".").concat(u)]||d[u]||l[u]||o;return t?r.createElement(f,i(i({ref:n},m),{},{components:t})):r.createElement(f,i({ref:n},m))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3660:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return d}});var r,a=t(3117),o=t(102),i=(t(7294),t(3905)),s=["components"],p={title:"Update specific fence",description:"This workflow sample demonstrates how to update a specific fence."},c=void 0,m={unversionedId:"common-workflows/administration/server-management/manage-fences/update-specific-fence",id:"common-workflows/administration/server-management/manage-fences/update-specific-fence",title:"Update specific fence",description:"This workflow sample demonstrates how to update a specific fence.",source:"@site/docs/common-workflows/administration/server-management/manage-fences/update-specific-fence.md",sourceDirName:"common-workflows/administration/server-management/manage-fences",slug:"/common-workflows/administration/server-management/manage-fences/update-specific-fence",permalink:"/rest-api-docs/common-workflows/administration/server-management/manage-fences/update-specific-fence",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/server-management/manage-fences/update-specific-fence.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1676479687,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{title:"Update specific fence",description:"This workflow sample demonstrates how to update a specific fence."},sidebar:"tutorialSidebar",previous:{title:"Create a new fence",permalink:"/rest-api-docs/common-workflows/administration/server-management/manage-fences/create-fence"},next:{title:"Delete a specific fence",permalink:"/rest-api-docs/common-workflows/administration/server-management/manage-fences/delete-specific-fence"}},l={},d=[{value:"Update a specific fence",id:"update-a-specific-fence",level:2}],u=(r="Available",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),f={toc:d};function g(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(u,{since:"2021 Update 6",mdxType:"Available"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-2b48c198-0938-4578-ae8c-9ab957f046f2?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"You want to update the ",(0,i.kt)("inlineCode",{parentName:"p"},"nodes")," reserved by ",(0,i.kt)("inlineCode",{parentName:"p"},"administrator_user_fence")," user fence, which is configured for ",(0,i.kt)("inlineCode",{parentName:"p"},"Administrator")," user/usergroups."),(0,i.kt)("p",null,"The updated node is ",(0,i.kt)("inlineCode",{parentName:"p"},"296739laio3use1"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesConfigureServerBasic"},"DssXmlPrivilegesConfigureServerBasic")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesUseClusterMonitor"},"DssXmlPrivilegesUseClusterMonitor")," privileges are required to update an existing user fence."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST\xa0/api/auth/login"),".")),(0,i.kt)("h2",{id:"update-a-specific-fence"},"Update a specific fence"),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System%20Administration/updateFence"},"PATCH /api/iserver/fences/{name}"),"."),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "g97nfc2l7icgsb37vjdh4b6gcu"\n')),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"A patch that tries to pass an empty user and usergroup for a user fence, or a patch with an empty node list for either fence types, will not be allowed."),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"User Fence"))),(0,i.kt)("p",{parentName:"admonition"},"Valid Paths:\xa0\xa0/nodes, /users, /usergroups, /rank, /projects."),(0,i.kt)("p",{parentName:"admonition"},"Valid Operations:\xa0replace"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Workload Fence"))),(0,i.kt)("p",{parentName:"admonition"},"Valid Paths:\xa0\xa0/nodes, /rank, /projects."),(0,i.kt)("p",{parentName:"admonition"},"Valid Operations:\xa0replace")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "operationList": [\n    {\n      "op": "replace",\n      "path": "/nodes",\n      "value": ["env-296739laio3use1"]\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH \\\n\'https://demo.microstrategy.com/MicroStrategyLibrary/api/iserver/fences/administrator_user_fence\' \\\n-H \'accept: application/json\' \\\n-H \'X-MSTR-AuthToken: g97nfc2l7icgsb37vjdh4b6gcu\' \\\n-H \'Content-Type: application/json\' \\\n-d \'{\n   "operationList": [\n     {\n      "op": "replace",\n       "path": "/nodes",\n       "value": ["env-296739laio3use1"]\n     }\n   ]\n}\'\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"users")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"usergroups")," can be configured only for user fence, therefore the response body for workload fence should contain empty ",(0,i.kt)("inlineCode",{parentName:"p"},"users")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"usergroups")," fields.")),(0,i.kt)("p",null,"You can view the detailed information of updated ",(0,i.kt)("inlineCode",{parentName:"p"},"administrator_user_fence")," user fence in the body of the response. The detailed information includes ",(0,i.kt)("inlineCode",{parentName:"p"},"rank"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),", reserved ",(0,i.kt)("inlineCode",{parentName:"p"},"nodes"),", configured ",(0,i.kt)("inlineCode",{parentName:"p"},"users"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"usergroups")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"projects"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "rank": 1,\n  "name": "administrator_user_fence",\n  "type": "user_fence",\n  "nodes": ["296739laio3use1"],\n  "users": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator"\n    }\n  ],\n  "usergroups": [\n    {\n      "id": "E96685CD4E60068559F7DFAC7C2AA851",\n      "name": "Administrator"\n    }\n  ],\n  "projects": [\n    {\n      "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n      "name": "MicroStrategy Tutorials"\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Response Code: 200 (The given fence is updated successfully.)"))}g.isMDXComponent=!0}}]);