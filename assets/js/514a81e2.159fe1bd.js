"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6890],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return p}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(r),p=i,m=u["".concat(l,".").concat(p)]||u[p]||f[p]||a;return r?n.createElement(m,s(s({ref:t},d),{},{components:r})):n.createElement(m,s({ref:t},d))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},84134:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return f}});var n=r(83117),i=r(80102),a=(r(67294),r(3905)),s=["components"],o={title:"Filter dossier instances",description:"You can use the following REST APIs to filter the data that is returned when you create or update an instance of a dossier, including clearing the filter selections."},l=void 0,c={unversionedId:"common-workflows/analytics/filter-data/filter-dossier-instances/filter-dossier-instances",id:"common-workflows/analytics/filter-data/filter-dossier-instances/filter-dossier-instances",title:"Filter dossier instances",description:"You can use the following REST APIs to filter the data that is returned when you create or update an instance of a dossier, including clearing the filter selections.",source:"@site/docs/common-workflows/analytics/filter-data/filter-dossier-instances/filter-dossier-instances.md",sourceDirName:"common-workflows/analytics/filter-data/filter-dossier-instances",slug:"/common-workflows/analytics/filter-data/filter-dossier-instances/",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-dossier-instances/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/filter-data/filter-dossier-instances/filter-dossier-instances.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1677861063,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{title:"Filter dossier instances",description:"You can use the following REST APIs to filter the data that is returned when you create or update an instance of a dossier, including clearing the filter selections."},sidebar:"tutorialSidebar",previous:{title:"Code sample - Filter reports and cubes using requestedObjects",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-requested-objects/code-sample"},next:{title:"Apply filters to a dossier",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-dossier-instances/apply-filters-to-a-dossier"}},d={},f=[],u={toc:f};function p(e){var t=e.components,r=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can use the following REST APIs to filter the data that is returned when you create or update an instance of a dossier, including clearing the filter selections."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"POST /api/dossiers/{dossierId}/instances")," Create an instance of a specific dossier with the existing filter applied, including clearing all of the current filter selections."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PUT /api/dossiers/{dossierId}/instances/{instanceId}/filters")," Execute an existing dossier instance with new filter selections, including clearing all of the current filter selections.")),(0,a.kt)("p",null,"We have provided a ",(0,a.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/analytics/filter-data/filter-dossier-instances/apply-filters-to-a-dossier"},"workflow sample")," that illustrates how to create an instance of a dossier with an existing filter applied, and then re-execute the same dossier instance with updated selections for the same filter."),(0,a.kt)("p",null,"For detailed information about filtering data in dossiers, see the ",(0,a.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/current/MSTRWeb/WebHelp/Lang_1033/Content/filter_data.htm"},"MicroStrategy product help"),"."))}p.isMDXComponent=!0}}]);