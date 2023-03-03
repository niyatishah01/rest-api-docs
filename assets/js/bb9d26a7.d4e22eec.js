"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3473],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11689:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),s=["components"],i={title:"Supported features and considerations",description:"The JSON Data API supports the following features - Reports and published cubes as data sources, Attributes on rows and Metrics on columns."},u=void 0,l={unversionedId:"common-workflows/analytics/retrieve-data-from-the-intelligence-server/supported-features-and-considerations",id:"common-workflows/analytics/retrieve-data-from-the-intelligence-server/supported-features-and-considerations",title:"Supported features and considerations",description:"The JSON Data API supports the following features - Reports and published cubes as data sources, Attributes on rows and Metrics on columns.",source:"@site/docs/common-workflows/analytics/retrieve-data-from-the-intelligence-server/supported-features-and-considerations.md",sourceDirName:"common-workflows/analytics/retrieve-data-from-the-intelligence-server",slug:"/common-workflows/analytics/retrieve-data-from-the-intelligence-server/supported-features-and-considerations",permalink:"/rest-api-docs/common-workflows/analytics/retrieve-data-from-the-intelligence-server/supported-features-and-considerations",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/retrieve-data-from-the-intelligence-server/supported-features-and-considerations.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1677861063,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{title:"Supported features and considerations",description:"The JSON Data API supports the following features - Reports and published cubes as data sources, Attributes on rows and Metrics on columns."},sidebar:"tutorialSidebar",previous:{title:"Retrieve data from the Intelligence Server",permalink:"/rest-api-docs/common-workflows/analytics/retrieve-data-from-the-intelligence-server/workflow-retrieve-data-from-the-intelligence-server"},next:{title:"Asynchronous execution of reports and cubes",permalink:"/rest-api-docs/common-workflows/analytics/retrieve-data-from-the-intelligence-server/asynchronous-execution-of-reports-and-cubes"}},c={},p=[{value:"Considerations",id:"considerations",level:2},{value:"Non-supported features",id:"non-supported-features",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The JSON Data API supports the following features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reports and published cubes as data sources"),(0,a.kt)("li",{parentName:"ul"},"Attributes on rows"),(0,a.kt)("li",{parentName:"ul"},"Metrics on columns")),(0,a.kt)("h2",{id:"considerations"},"Considerations"),(0,a.kt)("p",null,"If you request that all report data be returned (that is, you set ",(0,a.kt)("inlineCode",{parentName:"p"},"limit")," to ",(0,a.kt)("inlineCode",{parentName:"p"},'"\\-1"')," in the request), you need to compare the values for ",(0,a.kt)("inlineCode",{parentName:"p"},"current")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"total")," in the results. If the value of current is less than the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"total"),", you need to send a subsequent request with the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"offset")," equal to the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"current")," to get the next set of data."),(0,a.kt)("h2",{id:"non-supported-features"},"Non-supported features"),(0,a.kt)("p",null,"The JSON Data API does not currently support:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Incremental refresh reports"),(0,a.kt)("li",{parentName:"ul"},"Reports with the following definitions: dimensions, subtotals, prompts, consolidations, custom groups, compound attributes, and hierarchies"),(0,a.kt)("li",{parentName:"ul"},"Reports that include a running sum metric and a break-by unit and at least one break-by unit that is not in the view template"),(0,a.kt)("li",{parentName:"ul"},"Page by information in the JSON output"),(0,a.kt)("li",{parentName:"ul"},"Direct Data Access cubes as data sources")))}f.isMDXComponent=!0}}]);