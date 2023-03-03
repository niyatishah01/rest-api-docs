"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[7502],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),i=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),u=i(n),h=a,d=u["".concat(s,".").concat(h)]||u[h]||p[h]||r;return n?o.createElement(d,c(c({ref:t},l),{},{components:n})):o.createElement(d,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=u;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m.mdxType="string"==typeof e?e:a,c[1]=m;for(var i=2;i<r;i++)c[i]=n[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55168:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var o,a=n(83117),r=n(80102),c=(n(67294),n(3905)),m=["components"],s={title:"Manage the schema",description:"You can use REST API requests to retrieve the schema lock, lock and unlock the schema, and reload (update) the schema."},i=void 0,l={unversionedId:"common-workflows/modeling/common-object-management/manage-the-schema/manage-the-schema",id:"common-workflows/modeling/common-object-management/manage-the-schema/manage-the-schema",title:"Manage the schema",description:"You can use REST API requests to retrieve the schema lock, lock and unlock the schema, and reload (update) the schema.",source:"@site/docs/common-workflows/modeling/common-object-management/manage-the-schema/manage-the-schema.md",sourceDirName:"common-workflows/modeling/common-object-management/manage-the-schema",slug:"/common-workflows/modeling/common-object-management/manage-the-schema/",permalink:"/rest-api-docs/common-workflows/modeling/common-object-management/manage-the-schema/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/common-object-management/manage-the-schema/manage-the-schema.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1677861063,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{title:"Manage the schema",description:"You can use REST API requests to retrieve the schema lock, lock and unlock the schema, and reload (update) the schema."},sidebar:"tutorialSidebar",previous:{title:"Update object's translations",permalink:"/rest-api-docs/common-workflows/modeling/common-object-management/manage-object-translations/update-object-translations"},next:{title:"Retrieve the schema lock",permalink:"/rest-api-docs/common-workflows/modeling/common-object-management/manage-the-schema/retrieve-the-schema-lock"}},p={},u=[],h=(o="Available",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,c.kt)("div",e)}),d={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,m);return(0,c.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)(h,{since:"2021 Update 1",mdxType:"Available"}),(0,c.kt)("admonition",{type:"tip"},(0,c.kt)("p",{parentName:"admonition"},"You can try these workflows with ",(0,c.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-8f48dce2-e826-4f45-98fb-c3ceed64b670?ctx=documentation"},"REST API Playground"),"."),(0,c.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,c.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,c.kt)("p",null,"You can use REST API requests to retrieve the schema lock, lock and unlock the schema, and reload (update) the schema."),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/common-object-management/manage-the-schema/retrieve-the-schema-lock"},"Retrieve the schema lock")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/common-object-management/manage-the-schema/lock-the-schema"},"Lock the schema")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/common-object-management/manage-the-schema/unlock-the-schema"},"Unlock the schema")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/common-object-management/manage-the-schema/reload-the-schema-synchronously"},"Reload the schema synchronously")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/common-object-management/manage-the-schema/reload-the-schema-asynchronously"},"Reload the schema asynchronously"))))}f.isMDXComponent=!0}}]);