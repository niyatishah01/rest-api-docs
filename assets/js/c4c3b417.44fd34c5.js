"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[389],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(r),d=a,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},69274:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),o=["components"],s={title:"Filter report and cube instances",description:"You can filter data that is returned by the following REST API requests when you create an instance of a report or cube. You can also define how the results will be filtered in the body parameter of the request."},c=void 0,l={unversionedId:"common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances",id:"common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances",title:"Filter report and cube instances",description:"You can filter data that is returned by the following REST API requests when you create an instance of a report or cube. You can also define how the results will be filtered in the body parameter of the request.",source:"@site/docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances.md",sourceDirName:"common-workflows/analytics/filter-data/filter-report-and-cube-instances",slug:"/common-workflows/analytics/filter-data/filter-report-and-cube-instances/",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1677861063,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{title:"Filter report and cube instances",description:"You can filter data that is returned by the following REST API requests when you create an instance of a report or cube. You can also define how the results will be filtered in the body parameter of the request."},sidebar:"tutorialSidebar",previous:{title:"Filter data",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/"},next:{title:"Filter report and cube instances using view filters",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/"}},p={},u=[],f={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try these workflows with ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-aba744e4-751e-410a-b5c1-4ad7d0db7b67?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"You can filter data that is returned by the following REST API requests when you create an instance of a report or cube:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/reports/{reportId}/instances")),(0,i.kt)("p",{parentName:"li"},"Reports must have attributes on rows and metrics on columns. Otherwise, filtering is not applied.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/cubes/{cubeId}/instances")),(0,i.kt)("p",{parentName:"li"},"You can filter all types of cubes \u2014 normal cubes, DDA cubes, and MDX cubes."))),(0,i.kt)("p",null,"You define how the results will be filtered in the body parameter of the request."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/"},"Using view filters")),(0,i.kt)("p",{parentName:"li"},"With view filters, you can apply both attribute and metric filtering criteria. View filters are applied before data aggregation.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/"},"Using metric limits")),(0,i.kt)("p",{parentName:"li"},"With metric limits, you can apply only metric filtering criteria. Metric limits are applied after data aggregation.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-requested-objects/"},"Using ",(0,i.kt)("inlineCode",{parentName:"a"},"requestedObjects"))),(0,i.kt)("p",{parentName:"li"},"With requestedObjects, you specify exactly which attributes and metrics you want to include in the report or cube instance."))))}d.isMDXComponent=!0}}]);