"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[611],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4006:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return f}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],s={title:"Retrieve the list of fences",description:"This workflow sample demonstrates how to retrieve the list of all existing user and workload fences."},l=void 0,c={unversionedId:"common-workflows/manage-fences/retrieve-list-of-fences",id:"common-workflows/manage-fences/retrieve-list-of-fences",title:"Retrieve the list of fences",description:"This workflow sample demonstrates how to retrieve the list of all existing user and workload fences.",source:"@site/docs/common-workflows/manage-fences/retrieve-list-of-fences.md",sourceDirName:"common-workflows/manage-fences",slug:"/common-workflows/manage-fences/retrieve-list-of-fences",permalink:"/rest-api-docs/common-workflows/manage-fences/retrieve-list-of-fences",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-fences/retrieve-list-of-fences.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1667514843,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{title:"Retrieve the list of fences",description:"This workflow sample demonstrates how to retrieve the list of all existing user and workload fences."},sidebar:"tutorialSidebar",previous:{title:"Manage user and workload fences",permalink:"/rest-api-docs/common-workflows/manage-fences/"},next:{title:"Retrieve a specific fence",permalink:"/rest-api-docs/common-workflows/manage-fences/retrieve-specific-fence"}},p={},f=[{value:"Get information of all existing user and workload fences",id:"get-information-of-all-existing-user-and-workload-fences",level:2}],u={toc:f};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You want to get the details of all existing user and workload fences."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesConfigureServerBasic"},"DssXmlPrivilegesConfigureServerBasic")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesUseClusterMonitor"},"DssXmlPrivilegesUseClusterMonitor")," privileges are required to retrieve the list of all existing fences."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST\xa0/api/auth/login"),".")),(0,a.kt)("h2",{id:"get-information-of-all-existing-user-and-workload-fences"},"Get information of all existing user and workload fences"),(0,a.kt)("p",null,"Endpoint: ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System%20Administration/getFences"},"GET /api/iserver/fences"),"."),(0,a.kt)("p",null,"Sample Request Header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "g97nfc2l7icgsb37vjdh4b6gcu"\n')),(0,a.kt)("p",null,"Sample Request Body: Empty"),(0,a.kt)("p",null,"Sample Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET \\\n'https://demo.microstrategy.com/MicroStrategyLibrary/api/iserver/fences' \\\n-H 'accept: application/json' \\\n-H 'X-MSTR-AuthToken: g97nfc2l7icgsb37vjdh4b6gcu'\n")),(0,a.kt)("p",null,"Sample Response Body: You can view the details of all existing user and workload fences in the body of the response. The detailed information includes ",(0,a.kt)("inlineCode",{parentName:"p"},"rank"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," and reserved ",(0,a.kt)("inlineCode",{parentName:"p"},"nodes"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "fences": [\n    {\n      "rank": "1",\n      "name": "administrator_user_fence",\n      "type": "user_fence",\n      "nodes": ["env-296739laio1use1"]\n    },\n    {\n      "rank": "2",\n      "name": "subscription_workload_fence",\n      "type": "workload_fence",\n      "nodes": ["296739laio2use1"]\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"Response Code: 200 (Details of all existing user and workload fences are returned successfully.)"))}m.isMDXComponent=!0}}]);