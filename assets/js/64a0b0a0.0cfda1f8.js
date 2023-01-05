"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3070],{3905:function(e,t,i){i.d(t,{Zo:function(){return c},kt:function(){return d}});var r=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(i),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||n;return i?r.createElement(f,o(o({ref:t},c),{},{components:i})):r.createElement(f,o({ref:t},c))}));function d(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,o=new Array(n);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<n;p++)o[p]=i[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},627:function(e,t,i){i.r(t),i.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=i(3117),a=i(102),n=(i(7294),i(3905)),o=["components"],l={title:"Return the template limit criteria applied prior to aggregation",description:"A template limit specifies a set of attribute or metric-based filtering criteria. In dossiers, a template limit is applied to a visualization-level dataset before metrics are aggregated. Because template limits are applied at the visualization-level, they can dynamically restrict the data being displayed without re-executing the underlying dataset against the warehouse."},s=void 0,p={unversionedId:"common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-template-limit-criteria",id:"common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-template-limit-criteria",title:"Return the template limit criteria applied prior to aggregation",description:"A template limit specifies a set of attribute or metric-based filtering criteria. In dossiers, a template limit is applied to a visualization-level dataset before metrics are aggregated. Because template limits are applied at the visualization-level, they can dynamically restrict the data being displayed without re-executing the underlying dataset against the warehouse.",source:"@site/docs/common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-template-limit-criteria.md",sourceDirName:"common-workflows/filter-data/retrieve-filters-applied-to-a-visualization",slug:"/common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-template-limit-criteria",permalink:"/rest-api-docs/common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-template-limit-criteria",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-template-limit-criteria.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1672953042,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{title:"Return the template limit criteria applied prior to aggregation",description:"A template limit specifies a set of attribute or metric-based filtering criteria. In dossiers, a template limit is applied to a visualization-level dataset before metrics are aggregated. Because template limits are applied at the visualization-level, they can dynamically restrict the data being displayed without re-executing the underlying dataset against the warehouse."},sidebar:"tutorialSidebar",previous:{title:"Return the attribute-based view filter criteria applied prior to aggregation",permalink:"/rest-api-docs/common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-attribute-based-view-filters"},next:{title:"Return the metric limit criteria applied prior to aggregation",permalink:"/rest-api-docs/common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-metric-limit-criteria"}},c={},u=[],m={toc:u};function d(e){var t=e.components,i=(0,a.Z)(e,o);return(0,n.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A template limit specifies a set of attribute or metric-based filtering criteria. In dossiers, a template limit is applied to a visualization-level dataset before metrics are aggregated. Because template limits are applied at the visualization-level, they can dynamically restrict the data being displayed without re-executing the underlying dataset against the warehouse."),(0,n.kt)("p",null,"You create a template limit by specifying the attributes or metrics that you want to keep or exclude. If you specify an attribute, you exclude or keep only that attribute element; if you specify a metric, you exclude or keep all of the conditions around that metric. Template limits are one of three kinds of filters that can be applied to visualizations before metrics are aggregated; the other two are ",(0,n.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-attribute-based-view-filters"},"attribute-based view filters")," and ",(0,n.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-metric-based-view-filters"},"metric-based view filters"),". There is one kind of filter that can be applied after metrics are aggregated\u2014",(0,n.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-metric-limit-criteria"},"metric limits"),"."),(0,n.kt)("p",null,"You use the following REST API endpoint to return information about the template limit that was applied before metric aggregation."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GET /api/dossiers/{dossierId}/instances/{instanceId}/chapters/{chapterKey/visualizations/{visualizationKey}"))),(0,n.kt)("p",null,"Template limits correspond to Keep Only and Exclude filters in MicroStrategy Web. They can include multiple criteria, joined by the AND and OR operators. Complex template limit filtering criteria might look like this:"),(0,n.kt)("p",null,"AND ","[((Accounts = Property, Plant, Equipment) Or (Accounts = Construction In Progress) Or (Accounts = Leasehold Improvements) Or (Accounts = Office Furniture & Equipment) Or (Accounts = Machinery & Equipment) Or (Accounts = Buildings & Improvements) Or (Accounts = Land & Improvements)) And (Departments = Sales and Marketing)]"),(0,n.kt)("p",null,"An example of the JSON data that is returned for a simple template limit is shown below."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "W110",\n  "name": "Visualization 1",\n  "result": {\n    "definition": {\n      // template limit definition\n      "templateLimitSummary": "((Category = Electronics) Or (Category = Books))"\n    }\n  }\n}\n')),(0,n.kt)("p",null,"Template limits can be applied in a number of ways. For example, they can be applied in Workstation as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Right-click an attribute or metric in the visualization."),(0,n.kt)("li",{parentName:"ol"},"Choose ",(0,n.kt)("strong",{parentName:"li"},"Keep Only")," or Exclude from the drop-down menu.")),(0,n.kt)("p",null,"Refer to the MicroStrategy product manuals for a detailed explanation of template limits and how they can be applied."))}d.isMDXComponent=!0}}]);