"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1561],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4815:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],s={title:"Error messages for metric limits",description:"The error messages for metric limits."},l=void 0,c={unversionedId:"common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/error-messages",id:"common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/error-messages",title:"Error messages for metric limits",description:"The error messages for metric limits.",source:"@site/docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/error-messages.md",sourceDirName:"common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits",slug:"/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/error-messages",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/error-messages",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/error-messages.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1676479687,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{title:"Error messages for metric limits",description:"The error messages for metric limits."},sidebar:"tutorialSidebar",previous:{title:"Code sample - Filter reports and cubes using metric limits",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/code-sample"},next:{title:"Filter report and cube instances using requestedObjects",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-requested-objects/"}},m={},p=[],u={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When you use a metric limit to filter the data that is returned in a report or cube instance, you may receive HTTP 400 response code and the following error messages:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Invalid Input"),(0,i.kt)("th",{parentName:"tr",align:null},"Error Message"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Metric ID invalid"),(0,i.kt)("td",{parentName:"tr",align:null},"Invalid metric id - {metric ID}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Metric limit's target object is not a metric"),(0,i.kt)("td",{parentName:"tr",align:null},"In metric limits, target object must be metric, please check object in all first operand is metric in the limit expression with corresponding key {0}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Metric limit's target object ID is not the same as the corresponding key"),(0,i.kt)("td",{parentName:"tr",align:null},"In metric limits, the metric id {0} is in a first operand and should be same with corresponding key {1}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Metric limit's target object ID is not in the report or cube"),(0,i.kt)("td",{parentName:"tr",align:null},"Failed to find the metric {0} in the report or cube.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Operator is wrong"),(0,i.kt)("td",{parentName:"tr",align:null},"Invalid operator - {}(through reference chain: com.microstrategy.rest.model.report.RequestConfig",'["viewFilter"]',")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Operands's count does not match corresponding operator"),(0,i.kt)("td",{parentName:"tr",align:null},"There should be {operands's count} operands for operator - {operator}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Operand's type is invalid"),(0,i.kt)("td",{parentName:"tr",align:null},"Jackson validation error such as: Could not resolve type id 'attribute2' as a subtype of ","[simple type, class com.microstrategy.rest.model.filter.viewfilter.Node]",": known type ids = ","[attribute, constant, constants, elements, form, metric]"," (for POJO property 'operands') at ","[Source: (org.glassfish.jersey.message.internal.ReaderInterceptorExecutor$UnCloseableInputStream); line: 6, column: 17]"," (through reference chain: com.microstrategy.rest.model.report.RequestConfig",'["viewFilter"]',"->com.microstrategy.rest.model.filter.viewfilter.LeafExpression",'["operands"]',"\u2192java.util.ArrayList","[index]",") (")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Operator cannot match the operands"),(0,i.kt)("td",{parentName:"tr",align:null},"The operands type combination of {operands' types} is not supported for operator - {input operator}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Datatype for metric is invalid"),(0,i.kt)("td",{parentName:"tr",align:null},"Invalid constant data type for metric qualification - {dataType}")))))}d.isMDXComponent=!0}}]);