"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8540],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5698:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),i=["components"],s={title:"Create a new fence",description:"This workflow sample demonstrates how to create a new user or workload fence."},c=void 0,p={unversionedId:"common-workflows/manage-fences/create-fence",id:"common-workflows/manage-fences/create-fence",title:"Create a new fence",description:"This workflow sample demonstrates how to create a new user or workload fence.",source:"@site/docs/common-workflows/manage-fences/create-fence.md",sourceDirName:"common-workflows/manage-fences",slug:"/common-workflows/manage-fences/create-fence",permalink:"/rest-api-docs/common-workflows/manage-fences/create-fence",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/main/docs/common-workflows/manage-fences/create-fence.md",tags:[],version:"current",lastUpdatedBy:"Liang, Jiapei",lastUpdatedAt:1663189678,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"Create a new fence",description:"This workflow sample demonstrates how to create a new user or workload fence."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a specific fence",permalink:"/rest-api-docs/common-workflows/manage-fences/retrieve-specific-fence"},next:{title:"Update specific fence",permalink:"/rest-api-docs/common-workflows/manage-fences/update-specific-fence"}},l={},m=[{value:"Create a new fence",id:"create-a-new-fence",level:2}],u={toc:m};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-5aef5846-6a6a-4d65-a91d-b3ebf5d96520?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"You want to create an ",(0,o.kt)("inlineCode",{parentName:"p"},"administrator_user_fence")," user fence which reserves ",(0,o.kt)("inlineCode",{parentName:"p"},"env-296739laio1use1")," node and configured for ",(0,o.kt)("inlineCode",{parentName:"p"},"Administrator")," user/usergroups."),(0,o.kt)("p",null,"The user ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"54F3D26011D2896560009A8E67019608"),". The usergroup ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"E96685CD4E60068559F7DFAC7C2AA851"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesConfigureServerBasic"},"DssXmlPrivilegesConfigureServerBasic")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesUseClusterMonitor"},"DssXmlPrivilegesUseClusterMonitor")," privileges are required to create a new user fence."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST\xa0/api/auth/login"),".")),(0,o.kt)("h2",{id:"create-a-new-fence"},"Create a new fence"),(0,o.kt)("p",null,"Endpoint: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System%20Administration/createFence"},"POST /api/iserver/fences"),"."),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "g97nfc2l7icgsb37vjdh4b6gcu"\n')),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"rank")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"nodes")," are mandatory fields for both types of fences. The ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"usergroup")," information is mandatory for the user fence only.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "rank": 1,\n  "name": "administrator_user_fence",\n  "type": "user_fence",\n  "nodes": ["env-296739laio1use1"],\n  "users": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator"\n    }\n  ],\n  "usergroups": [\n    {\n      "id": "E96685CD4E60068559F7DFAC7C2AA851",\n      "name": "Administrator"\n    }\n  ],\n  "projects": [\n    {\n      "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n      "name": "MicroStrategy Tutorial"\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n\'https://demo.microstrategy.com/MicroStrategyLibrary/api/iserver/fences\' \\\n-H \'accept: application/json\' \\\n-H \'X-MSTR-AuthToken: g97nfc2l7icgsb37vjdh4b6gcu\' \\\n-H \'Content-Type: application/json\' \\\n-d \'{\n  "rank": 1,\n  "name": "administrator_user_fence",\n  "type": "user_fence",\n  "nodes": ["env-296739laio1use1"],\n  "users": [\n    {\n     "id": "54F3D26011D2896560009A8E67019608",\n     "name": "Administrator"\n    }\n  ],\n  "usergroups": [\n    {\n     "id": "E96685CD4E60068559F7DFAC7C2AA851",\n     "name": "Administrator"\n    }\n  ],\n  "projects": [\n    {\n     "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n     "name": "MicroStrategy Tutorial"\n    }\n  ]\n}\'\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"users")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"usergroups")," can be configured only for user fence, therefore the response body for workload fence should contain empty ",(0,o.kt)("inlineCode",{parentName:"p"},"users")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"usergroups")," fields.")),(0,o.kt)("p",null,"You can view the detailed information of new created ",(0,o.kt)("inlineCode",{parentName:"p"},"administrator_user_fence")," user fence in the body of the response. The detailed information includes ",(0,o.kt)("inlineCode",{parentName:"p"},"rank"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),", reserved ",(0,o.kt)("inlineCode",{parentName:"p"},"nodes"),", configured ",(0,o.kt)("inlineCode",{parentName:"p"},"users"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"usergroups")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"projects"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "rank": 1,\n  "name": "administrator_user_fence",\n  "type": "user_fence",\n  "nodes": ["env-296739laio1use1"],\n  "users": [\n    {\n      "id": "54F3D26011D2896560009A8E67019608",\n      "name": "Administrator"\n    }\n  ],\n  "usergroups": [\n    {\n      "id": "E96685CD4E60068559F7DFAC7C2AA851",\n      "name": "Administrator"\n    }\n  ],\n  "projects": [\n    {\n      "id": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n      "name": "MicroStrategy Tutorial"\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Response Code: 201 (The new user fence is created successfully.)"))}d.isMDXComponent=!0}}]);