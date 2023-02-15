"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6767],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return u}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=d(r),u=o,f=p["".concat(l,".").concat(u)]||p[u]||s[u]||a;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1362:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return p}});var n,o=r(3117),a=r(102),i=(r(7294),r(3905)),c=["components"],l={title:"Manage derived element objects",description:"You can use REST API requests to retrieve, create, and replace derived element objects through the Modeling service."},d=void 0,m={unversionedId:"common-workflows/modeling/manage-derived-element-objects/manage-derived-element-objects",id:"common-workflows/modeling/manage-derived-element-objects/manage-derived-element-objects",title:"Manage derived element objects",description:"You can use REST API requests to retrieve, create, and replace derived element objects through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-derived-element-objects/manage-derived-element-objects.md",sourceDirName:"common-workflows/modeling/manage-derived-element-objects",slug:"/common-workflows/modeling/manage-derived-element-objects/",permalink:"/rest-api-docs/common-workflows/modeling/manage-derived-element-objects/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-derived-element-objects/manage-derived-element-objects.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1676479687,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{title:"Manage derived element objects",description:"You can use REST API requests to retrieve, create, and replace derived element objects through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Retrieve applicable properties of a datamart",permalink:"/rest-api-docs/common-workflows/modeling/manage-datamart-objects/retrieve-applicable-properties-of-a-datamart"},next:{title:"Retrieve a derived element's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-derived-element-objects/retrieve-a-derived-elements-definition"}},s={},p=[],u=(n="Available",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),f={toc:p};function g(e){var t=e.components,r=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(u,{since:"2021 Update 1",mdxType:"Available"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out these workflows at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-45044f1d-938d-4f1a-872d-6b3577c73416?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"You can use REST API requests to retrieve, create, and replace derived element objects through the Modeling service."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-derived-element-objects/retrieve-a-derived-elements-definition"},"Retrieve a derived element's definition")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-derived-element-objects/create-a-derived-element"},"Create a derived element")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-derived-element-objects/replace-an-existing-element"},"Replace an existing derived element")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-derived-element-objects/format-samples"},"Format samples"))),(0,i.kt)("p",null,"For more information about the Modeling service, see ",(0,i.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/InstallConfig/en-us/Content/modeling_service.htm"},"Configuring the Modeling Service"),"."))}g.isMDXComponent=!0}}]);