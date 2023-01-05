"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3186],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return d}});var o=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=o.createContext({}),p=function(t){var e=o.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},u=function(t){var e=p(t.components);return o.createElement(s.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(r),d=n,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||a;return r?o.createElement(f,c(c({ref:e},u),{},{components:r})):o.createElement(f,c({ref:e},u))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9957:function(t,e,r){r.r(e),r.d(e,{assets:function(){return l},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var o,n=r(3117),a=r(102),c=(r(7294),r(3905)),i=["components"],s={title:"Manage transaction report objects",description:"You can use REST\u202fAPI requests to retrieve, create, and update the transaction report objects."},p=void 0,u={unversionedId:"common-workflows/manage-transaction-report-objects/manage-transaction-report-objects",id:"common-workflows/manage-transaction-report-objects/manage-transaction-report-objects",title:"Manage transaction report objects",description:"You can use REST\u202fAPI requests to retrieve, create, and update the transaction report objects.",source:"@site/docs/common-workflows/manage-transaction-report-objects/manage-transaction-report-objects.md",sourceDirName:"common-workflows/manage-transaction-report-objects",slug:"/common-workflows/manage-transaction-report-objects/",permalink:"/rest-api-docs/common-workflows/manage-transaction-report-objects/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-transaction-report-objects/manage-transaction-report-objects.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1672953042,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{title:"Manage transaction report objects",description:"You can use REST\u202fAPI requests to retrieve, create, and update the transaction report objects."},sidebar:"tutorialSidebar",previous:{title:"Retrieve applicable properties of a report",permalink:"/rest-api-docs/common-workflows/manage-report-objects/retrieve-applicable-properties-of-a-report"},next:{title:"Create a transaction report",permalink:"/rest-api-docs/common-workflows/manage-transaction-report-objects/create-a-transaction-report"}},l={},m=[],d=(o="Available",function(t){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,c.kt)("div",t)}),f={toc:m};function b(t){var e=t.components,r=(0,a.Z)(t,i);return(0,c.kt)("wrapper",(0,n.Z)({},f,r,{components:e,mdxType:"MDXLayout"}),(0,c.kt)(d,{since:"2021 Update 8",mdxType:"Available"}),(0,c.kt)("admonition",{type:"tip"},(0,c.kt)("p",{parentName:"admonition"},"You can try out these workflows at ",(0,c.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-f0b4a18d-227b-4f84-b000-92d56e8fcf9b?ctx=documentation"},"REST API Playground"),"."),(0,c.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,c.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,c.kt)("p",null,"Starting in MicroStrategy 2021 Update 8, you can use REST\u202fAPI requests to retrieve, create, and update the transaction reports."),(0,c.kt)("p",null,"Transaction reports can be used to write-back data to the datasource. Similar to FFSQL reports, you can map an attribute form or a metric to a column of a table in the datasource. These columns will be updated once you start the transaction."),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/manage-transaction-report-objects/create-a-transaction-report"},"Create a transaction report")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/manage-transaction-report-objects/retrieve-transaction-report-definition"},"Retrieve a transaction report's definition")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/manage-transaction-report-objects/update-transaction-report-definition"},"Update a transaction report's definition"))))}b.isMDXComponent=!0}}]);