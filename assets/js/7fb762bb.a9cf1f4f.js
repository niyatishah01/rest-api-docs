"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6630],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,d=f["".concat(s,".").concat(m)]||f[m]||c[m]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5915:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],l={title:"General guidelines for using view filters",description:"The general guidelines for using view filters."},s=void 0,u={unversionedId:"common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/general-guidelines",id:"common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/general-guidelines",title:"General guidelines for using view filters",description:"The general guidelines for using view filters.",source:"@site/docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/general-guidelines.md",sourceDirName:"common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters",slug:"/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/general-guidelines",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/general-guidelines",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/general-guidelines.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1676308226,formattedLastUpdatedAt:"Feb 13, 2023",frontMatter:{title:"General guidelines for using view filters",description:"The general guidelines for using view filters."},sidebar:"tutorialSidebar",previous:{title:"Filter report and cube instances using view filters",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/"},next:{title:"Supported operators for view filters",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-operators"}},p={},c=[],f={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When you use a view filter to refine the data returned in a report or cube instance, please note the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For each filter qualification, you specify the operands (the values to be compared) and the operator (the kind of comparison to make). The operands can be metrics, attribute forms, or constant values. The operators can be one of many ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-operators"},"supported operators"),', such as "greater than", "equal to", or "top 20%". An example of an attribute qualification might be ',(0,i.kt)("strong",{parentName:"p"},"Category equal to Music"),". An example of a metric qualification might be ",(0,i.kt)("strong",{parentName:"p"},"Profit greater than $200,000")," or ",(0,i.kt)("strong",{parentName:"p"},"Revenue less than Profit"),"."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Metric qualification")),(0,i.kt)("p",{parentName:"li"},'Metrics typically have numeric values, though some special metrics can be of Date type. Other data types are not supported."Real" is generally sufficient as a data type. However, if you know the metric is calculated with a special precision, such as "BigDecimal/Int64", you can specify it.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Attribute form qualification")),(0,i.kt)("p",{parentName:"li"},"You can qualify on one or more attribute forms. If you want to qualify on multiple forms, use the AND operator to add another qualification on a different form. Instead of manually entering the data type for an attribute form, the recommended practice is to copy it from the JSON definition section of the report or cube results, as shown in bold in the code sample below:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "4ACD9EEE4154BB87CE3F9DA279A733FB",\n  "name": "Report - Derived Metric",\n  "result": {\n    "definition": {\n      "availableObjects": {\n        "attributes": [\n          {\n            "name": "Year_number&date",\n            "id": "573FF5AB482CA58FDFF1F95AF53690D42",\n            "type": "Attribute",\n            "forms": [\n              {\n                "id": "45C11FA478E745FEA08D781CEA190FE5",\n                "name": "ID",\n                "dataType": "Real"\n              }\n            ]\n          }\n        ]\n      }\n    }\n  }\n}\n'))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"View filters are applied on report objects, instead of on grid objects (that is, they are applied before aggregation). For example, if a report has (Year, Category, Revenue) in the report objects, but only (Year, Revenue) on the grid, a filter on Revenue is applied on the (Year, Category) level, instead of on the (Year) level. To achieve the desired result, you may want to put all report objects on the grid so the filtering level is the same as the display level.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"All Rank and Percent functions are descending. For example, Percent.Top means the largest 10%, and Rank.Equals 5 means the 5th largest.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'For the value of Percent operators, you can use either percentage ("20%") or the equivalent real number ("0.2").')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Operators, operand types, and data types are all case sensitive and should be written exactly as in the examples.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The following are not currently supported:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Page by"),(0,i.kt)("li",{parentName:"ul"},"Prompt"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Features that may not work well with view filters include:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Derived elements and other objects that cannot be qualified on in MicroStrategy Web"),(0,i.kt)("li",{parentName:"ul"},"Other REST API unsupported features"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Attribute / element / form / metric IDs must be valid, which means:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"ID is syntactically correct."),(0,i.kt)("li",{parentName:"ul"},"Attribute/element/form/metric exists in the report/cube."),(0,i.kt)("li",{parentName:"ul"},"Element/form ID matches the corresponding attribute ID.")),(0,i.kt)("p",{parentName:"li"},"If the ID is invalid, you may get undesired behavior, including but not limited to:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"An error message is returned."),(0,i.kt)("li",{parentName:"ul"},"The qualification is considered ALWAYS UNSATISFIED."),(0,i.kt)("li",{parentName:"ul"},"The qualification is IGNORED.")),(0,i.kt)("p",{parentName:"li"},"For example, if the ",(0,i.kt)("strong",{parentName:"p"},"Customer")," attribute in a cube has no ",(0,i.kt)("strong",{parentName:"p"},"LastName")," form, but the view filter includes an expression such as Customer@LastName ",(0,i.kt)("inlineCode",{parentName:"p"},"BeginsWith"),' "B", no data is returned. No Customer meets this qualification because the Last Name does not exist, but you do not get an error message explaining why this happened.'))))}m.isMDXComponent=!0}}]);