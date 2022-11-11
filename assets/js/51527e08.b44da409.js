"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6459],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,d=u["".concat(s,".").concat(h)]||u[h]||p[h]||r;return n?o.createElement(d,c(c({ref:t},m),{},{components:n})):o.createElement(d,c({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8706:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var o=n(3117),a=n(102),r=(n(7294),n(3905)),c=["components"],i={title:"Lock the schema",description:"This workflow sample demonstrates how to lock the schema."},s=void 0,l={unversionedId:"common-workflows/manage-the-schema/lock-the-schema",id:"common-workflows/manage-the-schema/lock-the-schema",title:"Lock the schema",description:"This workflow sample demonstrates how to lock the schema.",source:"@site/docs/common-workflows/manage-the-schema/lock-the-schema.md",sourceDirName:"common-workflows/manage-the-schema",slug:"/common-workflows/manage-the-schema/lock-the-schema",permalink:"/rest-api-docs/common-workflows/manage-the-schema/lock-the-schema",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-the-schema/lock-the-schema.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1668189866,formattedLastUpdatedAt:"Nov 11, 2022",frontMatter:{title:"Lock the schema",description:"This workflow sample demonstrates how to lock the schema."},sidebar:"tutorialSidebar",previous:{title:"Retrieve the schema lock",permalink:"/rest-api-docs/common-workflows/manage-the-schema/retrieve-the-schema-lock"},next:{title:"Unlock the schema",permalink:"/rest-api-docs/common-workflows/manage-the-schema/unlock-the-schema"}},m={},p=[],u={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,c);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-c3ac84b3-bce5-495d-94d5-941305fc1def?ctx=documentation"},"REST API Playground"),"."),(0,r.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,r.kt)("p",null,"This workflow sample demonstrates how to lock the schema."),(0,r.kt)("p",null,"You want to lock the schema in the MicroStrategy Tutorial project with an ",(0,r.kt)("inlineCode",{parentName:"p"},"\u201cabsolute_individual\u201c")," lock. The project ID is ",(0,r.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,r.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In the response, the ",(0,r.kt)("inlineCode",{parentName:"p"},'"lockType"')," can be:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"absolute_individual"'),": Place using the POST schema lock API. When placed, no one, including the administrator, can perform changes on the schema objects. The purpose of this lock is to prevent accidental modifications to the schema in a project."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"exclusive_constituent"'),": When the changeset is created with ",(0,r.kt)("inlineCode",{parentName:"li"},'"schemaEdit" = true'),", an ",(0,r.kt)("inlineCode",{parentName:"li"},'"exclusive_constituent"')," lock is placed on the schema. It is a lock exclusive to the changeset holding the lock; only that changeset can change the schema or its constituents (tables, attributes, etc.)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"absolute_constituent"'),": Not in use."))),(0,r.kt)("p",null,"Lock the schema using ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Schema/ms-postLock"},"POST /api/model/schema/lock"),"."),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "ouddou5qdd421ndfpjqd6ssman"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754\n')),(0,r.kt)("p",null,"Sample Request Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "lockType": "absolute_individual"\n}\n')),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/schema/lock" \\\n-H "accept: */*" \\\n-H "X-MSTR-AuthToken: ouddou5qdd421ndfpjqd6ssman" \\\n-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" \\\n-H "Content-Type: application/json"\n-d \'{"lockType":"absolute_individual"}\'\n')),(0,r.kt)("p",null,"Sample Response Body: Empty"),(0,r.kt)("p",null,"Response Code 201 (The schema is locked successfully.)"))}h.isMDXComponent=!0}}]);