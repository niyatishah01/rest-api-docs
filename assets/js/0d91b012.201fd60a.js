"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5529],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5298:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],l={title:"Field selection for data API v2 result-fetching endpoints",description:"For Data API v2 result-fetching endpoints, the MicroStrategy REST API provides a specialized flavor of field selection support. It is tailored for Data API specific use cases using a similar syntax."},s=void 0,p={unversionedId:"common-workflows/improve-performance-by-working-with-partial-resources/field-selection-for-data-api-v2-result-fetching-endpoints",id:"common-workflows/improve-performance-by-working-with-partial-resources/field-selection-for-data-api-v2-result-fetching-endpoints",title:"Field selection for data API v2 result-fetching endpoints",description:"For Data API v2 result-fetching endpoints, the MicroStrategy REST API provides a specialized flavor of field selection support. It is tailored for Data API specific use cases using a similar syntax.",source:"@site/docs/common-workflows/improve-performance-by-working-with-partial-resources/field-selection-for-data-api-v2-result-fetching-endpoints.md",sourceDirName:"common-workflows/improve-performance-by-working-with-partial-resources",slug:"/common-workflows/improve-performance-by-working-with-partial-resources/field-selection-for-data-api-v2-result-fetching-endpoints",permalink:"/rest-api-docs/common-workflows/improve-performance-by-working-with-partial-resources/field-selection-for-data-api-v2-result-fetching-endpoints",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/improve-performance-by-working-with-partial-resources/field-selection-for-data-api-v2-result-fetching-endpoints.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1671571075,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{title:"Field selection for data API v2 result-fetching endpoints",description:"For Data API v2 result-fetching endpoints, the MicroStrategy REST API provides a specialized flavor of field selection support. It is tailored for Data API specific use cases using a similar syntax."},sidebar:"tutorialSidebar",previous:{title:"Improve performance by working with partial resources",permalink:"/rest-api-docs/common-workflows/improve-performance-by-working-with-partial-resources/"},next:{title:"Data lineage analysis via REST APIs",permalink:"/rest-api-docs/common-workflows/data-lineage-analysis-via-rest-apis"}},c={},u=[{value:"Background",id:"background",level:2},{value:"General usage",id:"general-usage",level:2},{value:"Supported rule: Filtering metric value representations and other per metric-cell information",id:"supported-rule-filtering-metric-value-representations-and-other-per-metric-cell-information",level:2},{value:"Example",id:"example",level:3}],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-a6457d75-f616-4092-9485-e6007627b73d?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"For Data API v2 result-fetching endpoints, the MicroStrategy REST API provides a specialized flavor of field selection support. It is tailored for Data API specific use cases using a similar syntax."),(0,i.kt)("p",null,"The endpoints are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"POST /api/v2/reports/{reportId}/instances")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PUT /api/v2/reports/{reportId}/instances/{instanceId}")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /api/v2/reports/{reportId}/instances/{instanceId}")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"POST /api/v2/cubes/{cubeId}/instances")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /api/v2/cubes/{cubeId}/instances/{instanceId}")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /api/v2/dossiers/{dossierId}/instances/{instanceId}/chapters/{chapterKey}/visualizations/{visualizationKey}"))),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("p",null,"Keep in the mind the following specific considerations for Data API v2 result-fetching endpoints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When performance is a concern, we encourage reducing computations. Rather than just transferring data to the client, use existing ",(0,i.kt)("a",{parentName:"li",href:"../filter-data/"},"filter functionality"),", such as ",(0,i.kt)("inlineCode",{parentName:"li"},"requestedObjects"),", view filters, and metric limits."),(0,i.kt)("li",{parentName:"ul"},"General top-level field selection has been supported since the MicroStrategy 2020 release. However, for the Data API, you rarely exclude top-level fields. If the client only needs a definition, and not data, it is simpler to use the Get Definition endpoints instead."),(0,i.kt)("li",{parentName:"ul"},"Using field selection instead of the recommended ways above, while reducing data transfer size, may lead to unused computations and unnecessary post-computation filtering costs. This is suboptimal in terms of performance.")),(0,i.kt)("p",null,"Therefore, general field selection is designed to not apply to these endpoints. On the other hand, we are also aware of valid client use cases and make them possible through field selection syntax in a disciplined way."),(0,i.kt)("h2",{id:"general-usage"},"General usage"),(0,i.kt)("p",null,"You can specify one or more comma-separated rules through the well-known fields param."),(0,i.kt)("p",null,"POST /api/v2/reports/07E7A82B4E44D13892842AB3FEE26D24/instances?fields=-data.metricValues.formatted,-data.metricValues.extras"),(0,i.kt)("p",null,"Some things to keep in mind:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The specified fields value only applies to the specific HTTP request. It does not apply to subsequent requests against the same instance."),(0,i.kt)("li",{parentName:"ul"},"Field selection rules are closely related to response models and this topic reflects the status as of 2020 Update 2 release.")),(0,i.kt)("h2",{id:"supported-rule-filtering-metric-value-representations-and-other-per-metric-cell-information"},"Supported rule: Filtering metric value representations and other per metric-cell information"),(0,i.kt)("p",null,"MicroStrategy Library Server 2020 Update 2 and above"),(0,i.kt)("p",null,"MicroStrategy Intelligence Server 2020 Update 2 and above"),(0,i.kt)("p",null,"By default, metric values are returned in both raw representation (data.metricValues.raw) and formatted representation (",(0,i.kt)("inlineCode",{parentName:"p"},"data.metricValues.formatted"),"). Other metric cell information under extras, such as optional thresholds, are returned as well."),(0,i.kt)("p",null,"Clients can request part of these fields by using the following exclusion rules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"-",(0,i.kt)("inlineCode",{parentName:"li"},"data.metricValues.raw"),": Excludes raw values."),(0,i.kt)("li",{parentName:"ul"},"-",(0,i.kt)("inlineCode",{parentName:"li"},"data.metricValues.formatted"),": Excludes formatted values."),(0,i.kt)("li",{parentName:"ul"},"-",(0,i.kt)("inlineCode",{parentName:"li"},"data.metricValues.extras"),": Excludes other per metric-cell information.")),(0,i.kt)("p",null,"Exclusion rules can significantly improve the performance of certain clients, such as the ones mentioned below, roughly halving the size of data transfers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Frontend apps and exporters that render results similarly as MicroStrategy client products, by focusing on human-reader formatted values that can be rendered directly. These frontend apps and exporters may need extras for determining advanced formatting.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Data connectors that focus on raw values are compact and easily parsed and post-processed."))),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"To obtain data in a raw metric value format, request data excluding formatted and extras."),(0,i.kt)("p",null,"Report:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Attribute: Category"),(0,i.kt)("li",{parentName:"ul"},"Metrics: Units Sold (numeric), Profit (currency), Profit Margin (percentage with threshold)")),(0,i.kt)("p",null,"Request:"),(0,i.kt)("p",null,"POST /api/v2/reports/07E7A82B4E44D13892842AB3FEE26D24/instances?fields=-data.metricValues.formatted,-data.metricValues.extras"),(0,i.kt)("p",null,"Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // ...\n  "data": {\n    // ...\n    "metricValues": {\n      "raw": [\n        [192668, 569278.3519999967, 0.215628025],\n        [83734, 4289602.7975999959, 0.1758660792],\n        [287517, 254698.4764999972, 0.0621375922],\n        [283554, 180044.0035000003, 0.0462437743]\n      ]\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Response without field section:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "metricValues": {\n      "raw": [\n        [192668, 569278.3519999967, 0.215628025],\n        [83734, 4289602.7975999959, 0.1758660792],\n        [287517, 254698.4764999972, 0.0621375922],\n        [283554, 180044.0035000003, 0.0462437743]\n      ],\n      "formatted": [\n        ["192,668", "$569,278", "21.56%"],\n        ["83,734", "$4,289,603", "17.59%"],\n        ["287,517", "$254,698", "6.21%"],\n        ["283,554", "$180,044", "4.62%"]\n      ],\n      "extras": [\n        [{}, {}, { "ti": 0 }],\n        [{}, {}, { "ti": 0 }],\n        [{}, {}, {}],\n        [{}, {}, {}]\n      ]\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);