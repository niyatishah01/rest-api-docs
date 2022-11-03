"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[2374],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(n),u=o,d=f["".concat(s,".").concat(u)]||f[u]||m[u]||a;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7878:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],c={title:"Delete a specific fence",description:"This workflow sample demonstrates how to delete a specific user or workload fence."},s=void 0,p={unversionedId:"common-workflows/manage-fences/delete-specific-fence",id:"common-workflows/manage-fences/delete-specific-fence",title:"Delete a specific fence",description:"This workflow sample demonstrates how to delete a specific user or workload fence.",source:"@site/docs/common-workflows/manage-fences/delete-specific-fence.md",sourceDirName:"common-workflows/manage-fences",slug:"/common-workflows/manage-fences/delete-specific-fence",permalink:"/rest-api-docs/common-workflows/manage-fences/delete-specific-fence",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-fences/delete-specific-fence.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1667514843,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{title:"Delete a specific fence",description:"This workflow sample demonstrates how to delete a specific user or workload fence."},sidebar:"tutorialSidebar",previous:{title:"Update specific fence",permalink:"/rest-api-docs/common-workflows/manage-fences/update-specific-fence"},next:{title:"Manage filter objects",permalink:"/rest-api-docs/common-workflows/manage-filter-objects/"}},l={},m=[{value:"Delete an existing fence",id:"delete-an-existing-fence",level:2}],f={toc:m};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,a.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-977138df-2f06-40ae-87f3-8af880b7a336?ctx=documentation"},"REST API Playground"),"."),(0,a.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,a.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,a.kt)("p",null,"You want to delete an ",(0,a.kt)("inlineCode",{parentName:"p"},"administrator_user_fence")," user fence by fence name, which reserves ",(0,a.kt)("inlineCode",{parentName:"p"},"env-296739laio1use1")," node and configured for ",(0,a.kt)("inlineCode",{parentName:"p"},"Administrator")," user/usergroups."),(0,a.kt)("p",null,"The user ID is ",(0,a.kt)("inlineCode",{parentName:"p"},"54F3D26011D2896560009A8E67019608"),". The usergroup ID is ",(0,a.kt)("inlineCode",{parentName:"p"},"E96685CD4E60068559F7DFAC7C2AA851"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesConfigureServerBasic"},"DssXmlPrivilegesConfigureServerBasic")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesUseClusterMonitor"},"DssXmlPrivilegesUseClusterMonitor")," privileges are required to delete an existing fence."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST\xa0/api/auth/login"),".")),(0,a.kt)("h2",{id:"delete-an-existing-fence"},"Delete an existing fence"),(0,a.kt)("p",null,"Endpoint: ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System%20Administration/deleteFence"},"DELETE /api/iserver/fences/{name}"),"."),(0,a.kt)("p",null,"Sample Request Header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "g97nfc2l7icgsb37vjdh4b6gcu"\n')),(0,a.kt)("p",null,"Sample Request Body: Empty"),(0,a.kt)("p",null,"Sample Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X DELETE \\\n'demo.microstrategy.com/MicroStrategyLibrary/api/iserver/fences/administrator_user_fence' \\\n-H 'accept: */*' \\\n-H 'X-MSTR-AuthToken: 27tm0ok3pno1qb9nd4opt7qq07'\n")),(0,a.kt)("p",null,"Sample Response Body: Empty"),(0,a.kt)("p",null,"Response Code: 204 (User fence is deleted successfully.)"))}u.isMDXComponent=!0}}]);