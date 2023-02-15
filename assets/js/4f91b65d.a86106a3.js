"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5502],{3905:function(e,t,o){o.d(t,{Zo:function(){return l},kt:function(){return d}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function m(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},l=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),u=i(o),d=r,h=u["".concat(s,".").concat(d)]||u[d]||p[d]||a;return o?n.createElement(h,c(c({ref:t},l),{},{components:o})):n.createElement(h,c({ref:t},l))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,c=new Array(a);c[0]=u;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m.mdxType="string"==typeof e?e:r,c[1]=m;for(var i=2;i<a;i++)c[i]=o[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},370:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n,r=o(3117),a=o(102),c=(o(7294),o(3905)),m=["components"],s={title:"Unlock the schema",description:"This workflow sample demonstrates how to unlock the schema."},i=void 0,l={unversionedId:"common-workflows/modeling/common-object-management/manage-the-schema/unlock-the-schema",id:"common-workflows/modeling/common-object-management/manage-the-schema/unlock-the-schema",title:"Unlock the schema",description:"This workflow sample demonstrates how to unlock the schema.",source:"@site/docs/common-workflows/modeling/common-object-management/manage-the-schema/unlock-the-schema.md",sourceDirName:"common-workflows/modeling/common-object-management/manage-the-schema",slug:"/common-workflows/modeling/common-object-management/manage-the-schema/unlock-the-schema",permalink:"/rest-api-docs/common-workflows/modeling/common-object-management/manage-the-schema/unlock-the-schema",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/common-object-management/manage-the-schema/unlock-the-schema.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1676479687,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{title:"Unlock the schema",description:"This workflow sample demonstrates how to unlock the schema."},sidebar:"tutorialSidebar",previous:{title:"Lock the schema",permalink:"/rest-api-docs/common-workflows/modeling/common-object-management/manage-the-schema/lock-the-schema"},next:{title:"Reload the schema synchronously",permalink:"/rest-api-docs/common-workflows/modeling/common-object-management/manage-the-schema/reload-the-schema-synchronously"}},p={},u=[],d=(n="Available",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,c.kt)("div",e)}),h={toc:u};function f(e){var t=e.components,o=(0,a.Z)(e,m);return(0,c.kt)("wrapper",(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,c.kt)(d,{since:"2021 Update 1",mdxType:"Available"}),(0,c.kt)("admonition",{type:"tip"},(0,c.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,c.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-c3ac84b3-bce5-495d-94d5-941305fc1def?ctx=documentation"},"REST API Playground"),"."),(0,c.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,c.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,c.kt)("p",null,"This workflow sample demonstrates how to unlock the schema."),(0,c.kt)("p",null,"You want to unlock the schema in the MicroStrategy Tutorial project. The project ID is ",(0,c.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,c.kt)("admonition",{type:"info"},(0,c.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,c.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,c.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,c.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,c.kt)("p",null,"Unlock the schema using ",(0,c.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Schema/ms-deleteLock"},"DELETE /api/model/schema/lock"),"."),(0,c.kt)("p",null,"Sample Request Header:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "ouddou5qdd421ndfpjqd6ssman"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754\n')),(0,c.kt)("p",null,"Sample Request Body: Empty"),(0,c.kt)("p",null,"Sample Curl:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/schema/lock?lockType=absolute_individual" -H "accept: */*" -H "X-MSTR-AuthToken: ouddou5qdd421ndfpjqd6ssman" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,c.kt)("p",null,"Sample Response Body: Empty"),(0,c.kt)("p",null,"Response Code: 201 (The schema is unlocked successfully.)"))}f.isMDXComponent=!0}}]);