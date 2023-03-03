"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6078],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(b,i(i({ref:t},l),{},{components:r})):n.createElement(b,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},57329:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var n,a=r(83117),o=r(80102),i=(r(67294),r(3905)),c=["components"],s={title:"Manage attribute objects",description:"You can use REST API requests to retrieve, create and update attribute objects through the Modeling service."},u=void 0,l={unversionedId:"common-workflows/modeling/manage-attribute-objects/manage-attribute-objects",id:"common-workflows/modeling/manage-attribute-objects/manage-attribute-objects",title:"Manage attribute objects",description:"You can use REST API requests to retrieve, create and update attribute objects through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-attribute-objects/manage-attribute-objects.md",sourceDirName:"common-workflows/modeling/manage-attribute-objects",slug:"/common-workflows/modeling/manage-attribute-objects/",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-attribute-objects/manage-attribute-objects.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1677861063,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{title:"Manage attribute objects",description:"You can use REST API requests to retrieve, create and update attribute objects through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Changesets",permalink:"/rest-api-docs/common-workflows/modeling/changesets"},next:{title:"Retrieve an attribute's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/retrieve-an-attributes-definition"}},p={},m=[],d=(n="Available",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),b={toc:m};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(d,{since:"2021 Update 1",mdxType:"Available"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try these workflows with ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-df3dd3da-b225-4637-93dd-c41579ce1074?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"You can use REST API requests to retrieve, create and update attribute objects through the Modeling service:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/retrieve-an-attributes-definition"},"Retrieve an attribute's definition")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/retrieve-an-attributes-definition-within-a-changeset"},"Retrieve an attribute's definition within a changeset")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/create-an-attribute-object"},"Create an attribute object")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/update-an-attributes-definition"},"Update an attribute's definition")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/get-attribute-applicable-advanced-properties"},"Get attribute's applicable advanced properties")," ",(0,i.kt)(d,{since:"2021 Update 9",inline:!0,mdxType:"Available"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/get-attribute-with-advanced-properties"},"Get attribute's definition and advanced properties")," ",(0,i.kt)(d,{since:"2021 Update 9",inline:!0,mdxType:"Available"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/update-attribute-advanced-property"},"Update attribute's advanced property")," ",(0,i.kt)(d,{since:"2021 Update 9",inline:!0,mdxType:"Available"}))),(0,i.kt)("p",null,"For more information about the Modeling service, see ",(0,i.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/InstallConfig/en-us/Content/modeling_service.htm"},"Configuring the Modeling Service"),"."))}f.isMDXComponent=!0}}]);