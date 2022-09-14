"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5732],{3905:function(e,t,i){i.d(t,{Zo:function(){return d},kt:function(){return f}});var r=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(i),f=a,m=c["".concat(s,".").concat(f)]||c[f]||u[f]||n;return i?r.createElement(m,o(o({ref:t},d),{},{components:i})):r.createElement(m,o({ref:t},d))}));function f(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,o=new Array(n);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<n;p++)o[p]=i[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}c.displayName="MDXCreateElement"},2571:function(e,t,i){i.r(t),i.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=i(3117),a=i(102),n=(i(7294),i(3905)),o=["components"],l={title:"Return the Attribute-Based View Filter Criteria Applied Prior to Aggregation",description:"A view filter specifies a set of attribute or metric-based filtering criteria. In dossiers, a view filter is applied to a visualization-level dataset before metrics are aggregated. Because view filters are applied at the visualization-level, they can dynamically restrict the data being displayed without re-executing the underlying dataset against the warehouse."},s=void 0,p={unversionedId:"common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-attribute-based-view-filters",id:"common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-attribute-based-view-filters",title:"Return the Attribute-Based View Filter Criteria Applied Prior to Aggregation",description:"A view filter specifies a set of attribute or metric-based filtering criteria. In dossiers, a view filter is applied to a visualization-level dataset before metrics are aggregated. Because view filters are applied at the visualization-level, they can dynamically restrict the data being displayed without re-executing the underlying dataset against the warehouse.",source:"@site/docs/common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-attribute-based-view-filters.md",sourceDirName:"common-workflows/filter-data/retrieve-filters-applied-to-a-visualization",slug:"/common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-attribute-based-view-filters",permalink:"/rest-api-docs/common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-attribute-based-view-filters",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/main/docs/common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-attribute-based-view-filters.md",tags:[],version:"current",lastUpdatedBy:"Liang, Jiapei",lastUpdatedAt:1663189678,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"Return the Attribute-Based View Filter Criteria Applied Prior to Aggregation",description:"A view filter specifies a set of attribute or metric-based filtering criteria. In dossiers, a view filter is applied to a visualization-level dataset before metrics are aggregated. Because view filters are applied at the visualization-level, they can dynamically restrict the data being displayed without re-executing the underlying dataset against the warehouse."},sidebar:"tutorialSidebar",previous:{title:"Return the Metric-Based View Filter Criteria Applied Prior to Aggregation",permalink:"/rest-api-docs/common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-metric-based-view-filters"},next:{title:"Return the Template Limit Criteria Applied Prior to Aggregation",permalink:"/rest-api-docs/common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-template-limit-criteria"}},d={},u=[],c={toc:u};function f(e){var t=e.components,i=(0,a.Z)(e,o);return(0,n.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A view filter specifies a set of attribute or metric-based filtering criteria. In dossiers, a view filter is applied to a visualization-level dataset before metrics are aggregated. Because view filters are applied at the visualization-level, they can dynamically restrict the data being displayed without re-executing the underlying dataset against the warehouse."),(0,n.kt)("p",null,"You create an attribute-based view filter by selecting the attributes that you want to use as filters in the Filter Editor. Attribute-based view filters are one of three kinds of filters that can be applied to visualizations before metrics are aggregated; the other two are ",(0,n.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-metric-based-view-filters"},"metric-based view filters")," and ",(0,n.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-template-limit-criteria"},"template limits"),". There is one kind of filter that can be applied after metrics are aggregated\u2014",(0,n.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-metric-limit-criteria"},"metric limits"),"."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Drilling is treated as a view filter. If you set drilling, you will get the drill content in the view filter summary.")),(0,n.kt)("p",null,"You use the following REST API endpoint to return information about the view filters that were applied before metric aggregation."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GET /api/dossiers/{dossierId}/instances/{instanceId}/chapters/{chapterKey/visualizations/{visualizationKey}"))),(0,n.kt)("p",null,"An example of the JSON data that is returned for view filters is shown below. If you applied multiple view filters, all of the filter criteria is combined, using the logical operators that you specified when you created the filters."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "W110",\n\n  "name": "Visualization 1",\n\n  "result": {\n    "definition": {\n      // view filter definition\n      "viewFilterSummary": "(Category = Books, Electronics) And (Profit > 11111)"\n    }\n  }\n}\n')),(0,n.kt)("p",null,"Attribute-based view filters can be applied in a number of ways. For example, they can be applied in Workstation as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Choose ",(0,n.kt)("strong",{parentName:"li"},"Edit Filter")," from the dropdown in the top right corner of the visualization panel."),(0,n.kt)("li",{parentName:"ol"},"On the Advanced Filter Editor dialog, click",(0,n.kt)("strong",{parentName:"li"},"Add New Qualification"),"."),(0,n.kt)("li",{parentName:"ol"},"On the New Qualification dialog:",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"In Based On, choose one or more attribute."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"OK"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save"),".")))),(0,n.kt)("p",null,"Refer to the MicroStrategy product manuals for a detailed explanation of attribute-based view filters and how they can be applied."))}f.isMDXComponent=!0}}]);