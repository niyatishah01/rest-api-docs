"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6525],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return u}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),m=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=m(t.components);return r.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),p=m(n),u=a,f=p["".concat(s,".").concat(u)]||p[u]||d[u]||o;return n?r.createElement(f,i(i({ref:e},c),{},{components:n})):r.createElement(f,i({ref:e},c))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2562:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return d}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={title:"Manage metric objects",description:"You can use REST\u202fAPI requests to retrieve, create, and update metric objects through the Modeling service."},s=void 0,m={unversionedId:"common-workflows/manage-metric-objects/manage-metric-objects",id:"common-workflows/manage-metric-objects/manage-metric-objects",title:"Manage metric objects",description:"You can use REST\u202fAPI requests to retrieve, create, and update metric objects through the Modeling service.",source:"@site/docs/common-workflows/manage-metric-objects/manage-metric-objects.md",sourceDirName:"common-workflows/manage-metric-objects",slug:"/common-workflows/manage-metric-objects/",permalink:"/rest-api-docs/common-workflows/manage-metric-objects/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-metric-objects/manage-metric-objects.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1667514843,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{title:"Manage metric objects",description:"You can use REST\u202fAPI requests to retrieve, create, and update metric objects through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Update a transformation's definition",permalink:"/rest-api-docs/common-workflows/manage-transformation-objects/update-a-transformations-definition"},next:{title:"Retrieve a metric's definition",permalink:"/rest-api-docs/common-workflows/manage-metric-objects/retrieve-a-metrics-definition"}},c={},d=[],p={toc:d};function u(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out these workflows at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-e7563dc0-b691-44bd-bba9-a7ff60faeb19?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"You can use REST\u202fAPI requests to retrieve, create, and update metric objects through the Modeling service:"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Training metrics, extreme metric, reference line metrics, and relationship metrics are not allowed to be retrieved, created, or updated through the metric REST API.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/manage-metric-objects/retrieve-a-metrics-definition"},"Retrieve a Metric's Definition")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/manage-metric-objects/retrieve-a-metrics-definition-within-a-changeset"},"Retrieve a Metric's Definition within a Changeset")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/manage-metric-objects/create-a-metric-within-a-changeset"},"Create a Metric within a Changset")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/manage-metric-objects/update-a-metrics-definition-within-a-changeset"},"Update a Metric's Definition within a Changeset")),(0,o.kt)("p",null,"The following table lists important fields in the API response body defined for a metric:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"information"),(0,o.kt)("td",{parentName:"tr",align:null},"Stores the basic subtotal information including ",(0,o.kt)("inlineCode",{parentName:"td"},"dateCreated"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"dateModified"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"versionId"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"primaryLocale"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"objectId"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"subType"),", and ",(0,o.kt)("inlineCode",{parentName:"td"},"name"),". For a metric, ",(0,o.kt)("inlineCode",{parentName:"td"},"subType")," is ",(0,o.kt)("inlineCode",{parentName:"td"},"metric"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"expression"),(0,o.kt)("td",{parentName:"tr",align:null},"Stores the aggregation types and targets defined in the metric either using single-value functions or group-value functions.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Tokens are a semi-structured representation of a MicroStrategy expression text that includes object references. When the metric\u2019s expression is represented as tokens, the text is broken down into pieces, or tokens, with information about what these pieces represent in the metadata.",(0,o.kt)("br",null),(0,o.kt)("br",null),"A metric's \u201cexpression\" is presented in the following formats:",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("em",{parentName:"td"},'"text": A human-readable, but non-parsable text, describing a metric\'s expression.',(0,o.kt)("br",null)," ",(0,o.kt)("br",null)),' "tree": A tree data structure fully defining the metric\'s expression.',(0,o.kt)("br",null)," ",(0,o.kt)("br",null),' "tokens": A list of parsed tokens that define a metric\'s expression. Generating tokens requires additional time.',(0,o.kt)("br",null)," ",(0,o.kt)("br",null),(0,o.kt)("br",null),"If ",(0,o.kt)("inlineCode",{parentName:"td"},"showExpressionAs"),' is omitted, only "text" formats are returned.',(0,o.kt)("br",null),(0,o.kt)("br",null),"If ",(0,o.kt)("inlineCode",{parentName:"td"},"showExpressionAs")," is ",(0,o.kt)("inlineCode",{parentName:"td"},"tree"),', "text" and "tree" formats are returned.',(0,o.kt)("br",null),(0,o.kt)("br",null),"If ",(0,o.kt)("inlineCode",{parentName:"td"},"showExpressionAs")," is ",(0,o.kt)("inlineCode",{parentName:"td"},"tokens"),', "text" and "tokens" formats are returned.')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dimty"),(0,o.kt)("td",{parentName:"tr",align:null},"Contains a list of ",(0,o.kt)("inlineCode",{parentName:"td"},"DimtyUnit"),", which describes the level at which the metrics can be calculated.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"conditionality"),(0,o.kt)("td",{parentName:"tr",align:null},"Contains a filter that needs to apply to the metric.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"metricSubtotals"),(0,o.kt)("td",{parentName:"tr",align:null},"Contains a vector that needs to apply to the metric.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"aggregateFromBase"),(0,o.kt)("td",{parentName:"tr",align:null},"Contains a vector of subtotals to apply to the metric.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"formulaJoinType"),(0,o.kt)("td",{parentName:"tr",align:null},"Indicates the formula join type for the metric.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dataType"),(0,o.kt)("td",{parentName:"tr",align:null},"Indicates the data type for the metric.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"smartTotal"),(0,o.kt)("td",{parentName:"tr",align:null},"Indicates the total calculation type.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"format"),(0,o.kt)("td",{parentName:"tr",align:null},"Contains the header format and value format.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"subtotalFromBase"),(0,o.kt)("td",{parentName:"tr",align:null},"Indicates the subtotal type for the metric.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"columnNameAlias"),(0,o.kt)("td",{parentName:"tr",align:null},"Contains the name used in SQL generation.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"metricFormatType"),(0,o.kt)("td",{parentName:"tr",align:null},"Indicates the format type for the metric.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"thresholds"),(0,o.kt)("td",{parentName:"tr",align:null},"Contains a list of thresholds applied to the metric.")))),(0,o.kt)("p",null,"For more information about the Modeling service, see ",(0,o.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/InstallConfig/en-us/Content/modeling_service.htm"},"Configuring the Modeling Service"),"."))}u.isMDXComponent=!0}}]);