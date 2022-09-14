"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1461],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,d=u["".concat(s,".").concat(h)]||u[h]||p[h]||a;return n?o.createElement(d,c(c({ref:t},m),{},{components:n})):o.createElement(d,c({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5762:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),c=["components"],i={title:"Retrieve the Schema Lock",description:"This workflow sample demonstrates how to retrieve the schema lock."},s=void 0,l={unversionedId:"common-workflows/manage-the-schema/retrieve-the-schema-lock",id:"common-workflows/manage-the-schema/retrieve-the-schema-lock",title:"Retrieve the Schema Lock",description:"This workflow sample demonstrates how to retrieve the schema lock.",source:"@site/docs/common-workflows/manage-the-schema/retrieve-the-schema-lock.md",sourceDirName:"common-workflows/manage-the-schema",slug:"/common-workflows/manage-the-schema/retrieve-the-schema-lock",permalink:"/rest-api-docs/common-workflows/manage-the-schema/retrieve-the-schema-lock",draft:!1,editUrl:"https://github.com/MicroStrategy/restapi-docs/tree/main/docs/common-workflows/manage-the-schema/retrieve-the-schema-lock.md",tags:[],version:"current",lastUpdatedBy:"Liang, Jiapei",lastUpdatedAt:1663187922,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"Retrieve the Schema Lock",description:"This workflow sample demonstrates how to retrieve the schema lock."},sidebar:"tutorialSidebar",previous:{title:"Manage the Schema",permalink:"/rest-api-docs/common-workflows/manage-the-schema/"},next:{title:"Lock the Schema",permalink:"/rest-api-docs/common-workflows/manage-the-schema/lock-the-schema"}},m={},p=[],u={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This workflow sample demonstrates how to retrieve the schema lock."),(0,a.kt)("p",null,"You want to get the schema lock status of the MicroStrategy Tutorial project. The project ID is ",(0,a.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,a.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"In the response, the ",(0,a.kt)("inlineCode",{parentName:"p"},'"lockType"')," can be:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"absolute_individual"'),": Place using the POST schema lock API. When placed, no one, including the administrator, can perform changes on the schema objects. The purpose of this lock is to prevent accidental modifications to the schema in a project."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"exclusive_constituent"'),": When the changeset is created with ",(0,a.kt)("inlineCode",{parentName:"li"},'"schemaEdit" = true'),", an ",(0,a.kt)("inlineCode",{parentName:"li"},'"exclusive_constituent"')," lock is placed on the schema. It is a lock exclusive to the changeset holding the lock; only that changeset can change the schema or its constituents (tables, attributes, etc.)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"absolute_constituent"'),": Not in use."))),(0,a.kt)("p",null,"Retrieve the schema lock using ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Schema/ms-getLock"},"GET /api/model/schema/lock"),"."),(0,a.kt)("p",null,"Sample Request Header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "ouddou5qdd421ndfpjqd6ssman"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754\n')),(0,a.kt)("p",null,"Sample Request Body: Empty"),(0,a.kt)("p",null,"Sample Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/schema/lock" -H "accept: application/json" -H "X-MSTR-AuthToken: ouddou5qdd421ndfpjqd6ssman" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,a.kt)("p",null,"Sample Response Body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "lockType": "exclusive_constituent",\n  "dateCreated": "2021-03-24T01:39:04",\n  "comment": "<COMMENTS><PRODUCT>MicroStrategy Modeling Service</PRODUCT><COMPONENT>MicroStrategy Modeling Service</COMPONENT><LOCKID>E723124CEE0E481FBC8AC539D89C6A67</LOCKID></COMMENTS>",\n  "machineName": "env-247993laiouse1",\n  "ownerName": "MSTR User",\n  "ownerId": "7FC05A65473CE2FD845CE6A1D3F13233"\n}\n')),(0,a.kt)("p",null,"Response Code: 200 (The lock status of the schema is returned successfully.)"))}h.isMDXComponent=!0}}]);