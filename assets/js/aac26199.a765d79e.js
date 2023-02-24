"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[9387],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(n),u=a,f=p["".concat(s,".").concat(u)]||p[u]||d[u]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6454:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r,a=n(3117),i=n(102),o=(n(7294),n(3905)),l=["components"],s={title:"Manage metric objects",description:"You can use REST\u202fAPI requests to retrieve, create, and update metric objects through the Modeling service."},m=void 0,c={unversionedId:"common-workflows/modeling/manage-metric-objects/manage-metric-objects",id:"common-workflows/modeling/manage-metric-objects/manage-metric-objects",title:"Manage metric objects",description:"You can use REST\u202fAPI requests to retrieve, create, and update metric objects through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-metric-objects/manage-metric-objects.md",sourceDirName:"common-workflows/modeling/manage-metric-objects",slug:"/common-workflows/modeling/manage-metric-objects/",permalink:"/rest-api-docs/common-workflows/modeling/manage-metric-objects/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-metric-objects/manage-metric-objects.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1677268684,formattedLastUpdatedAt:"Feb 24, 2023",frontMatter:{title:"Manage metric objects",description:"You can use REST\u202fAPI requests to retrieve, create, and update metric objects through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Update a filter's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-filter-objects/update-a-filters-definition"},next:{title:"Retrieve a metric's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-metric-objects/retrieve-a-metrics-definition"}},d={},p=[],u=(r="Available",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),f={toc:p};function k(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u,{since:"2021 Update 5",mdxType:"Available"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try these workflows with ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-e7563dc0-b691-44bd-bba9-a7ff60faeb19?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"You can use REST\u202fAPI requests to retrieve, create, and update metric objects through the Modeling service:"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Training metrics, extreme metric, reference line metrics, and relationship metrics are not allowed to be retrieved, created, or updated through the metric REST API.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-metric-objects/retrieve-a-metrics-definition"},"Retrieve a Metric's Definition")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-metric-objects/retrieve-a-metrics-definition-within-a-changeset"},"Retrieve a Metric's Definition within a Changeset")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-metric-objects/create-a-metric-within-a-changeset"},"Create a Metric within a Changset")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-metric-objects/update-a-metrics-definition-within-a-changeset"},"Update a Metric's Definition within a Changeset"))),(0,o.kt)("p",null,"The following table lists important fields in the API response body defined for a metric:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"information"),(0,o.kt)("td",{parentName:"tr",align:null},"Stores the basic subtotal information including ",(0,o.kt)("inlineCode",{parentName:"td"},"dateCreated"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"dateModified"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"versionId"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"primaryLocale"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"objectId"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"subType"),", and ",(0,o.kt)("inlineCode",{parentName:"td"},"name"),". For a metric, ",(0,o.kt)("inlineCode",{parentName:"td"},"subType")," is ",(0,o.kt)("inlineCode",{parentName:"td"},"metric"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"expression"),(0,o.kt)("td",{parentName:"tr",align:null},"Stores the aggregation types and targets defined in the metric either using single-value functions or group-value functions.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Tokens are a semi-structured representation of a MicroStrategy expression text that includes object references. When the metric\u2019s expression is represented as tokens, the text is broken down into pieces, or tokens, with information about what these pieces represent in the metadata.",(0,o.kt)("br",null),(0,o.kt)("br",null),"A metric's \u201cexpression\" is presented in the following formats:",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("em",{parentName:"td"},'"text": A human-readable, but non-parsable text, describing a metric\'s expression.',(0,o.kt)("br",null)," ",(0,o.kt)("br",null)),' "tree": A tree data structure fully defining the metric\'s expression.',(0,o.kt)("br",null)," ",(0,o.kt)("br",null),' "tokens": A list of parsed tokens that define a metric\'s expression. Generating tokens requires additional time.',(0,o.kt)("br",null)," ",(0,o.kt)("br",null),(0,o.kt)("br",null),"If ",(0,o.kt)("inlineCode",{parentName:"td"},"showExpressionAs"),' is omitted, only "text" formats are returned.',(0,o.kt)("br",null),(0,o.kt)("br",null),"If ",(0,o.kt)("inlineCode",{parentName:"td"},"showExpressionAs")," is ",(0,o.kt)("inlineCode",{parentName:"td"},"tree"),', "text" and "tree" formats are returned.',(0,o.kt)("br",null),(0,o.kt)("br",null),"If ",(0,o.kt)("inlineCode",{parentName:"td"},"showExpressionAs")," is ",(0,o.kt)("inlineCode",{parentName:"td"},"tokens"),', "text" and "tokens" formats are returned.')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dimty"),(0,o.kt)("td",{parentName:"tr",align:null},"Contains a list of ",(0,o.kt)("inlineCode",{parentName:"td"},"DimtyUnit"),", which describes the level at which the metrics can be calculated.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"conditionality"),(0,o.kt)("td",{parentName:"tr",align:null},"Contains a filter that needs to apply to the metric.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"metricSubtotals"),(0,o.kt)("td",{parentName:"tr",align:null},"Contains a vector that needs to apply to the metric.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"aggregateFromBase"),(0,o.kt)("td",{parentName:"tr",align:null},"Contains a vector of subtotals to apply to the metric.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"formulaJoinType"),(0,o.kt)("td",{parentName:"tr",align:null},"Indicates the formula join type for the metric.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dataType"),(0,o.kt)("td",{parentName:"tr",align:null},"Indicates the data type for the metric.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"smartTotal"),(0,o.kt)("td",{parentName:"tr",align:null},"Indicates the total calculation type.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"format"),(0,o.kt)("td",{parentName:"tr",align:null},"Contains the header format and value format.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"subtotalFromBase"),(0,o.kt)("td",{parentName:"tr",align:null},"Indicates the subtotal type for the metric.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"columnNameAlias"),(0,o.kt)("td",{parentName:"tr",align:null},"Contains the name used in SQL generation.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"metricFormatType"),(0,o.kt)("td",{parentName:"tr",align:null},"Indicates the format type for the metric.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"thresholds"),(0,o.kt)("td",{parentName:"tr",align:null},"Contains a list of thresholds applied to the metric.")))),(0,o.kt)("p",null,"For more information about the Modeling service, see ",(0,o.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/InstallConfig/en-us/Content/modeling_service.htm"},"Configuring the Modeling Service"),"."))}k.isMDXComponent=!0}}]);