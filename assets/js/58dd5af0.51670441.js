"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6827],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),c=l(a),u=n,f=c["".concat(p,".").concat(u)]||c[u]||s[u]||o;return a?r.createElement(f,i(i({ref:t},m),{},{components:a})):r.createElement(f,i({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:n,i[1]=d;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},65467:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return c}});var r,n=a(83117),o=a(80102),i=(a(67294),a(3905)),d=["components"],p={title:"Manage datamart objects",description:"You can use REST\u202fAPI requests to retrieve, create, and update datamart objects through the Modeling Service"},l=void 0,m={unversionedId:"common-workflows/modeling/manage-datamart-objects/manage-datamart-objects",id:"common-workflows/modeling/manage-datamart-objects/manage-datamart-objects",title:"Manage datamart objects",description:"You can use REST\u202fAPI requests to retrieve, create, and update datamart objects through the Modeling Service",source:"@site/docs/common-workflows/modeling/manage-datamart-objects/manage-datamart-objects.md",sourceDirName:"common-workflows/modeling/manage-datamart-objects",slug:"/common-workflows/modeling/manage-datamart-objects/",permalink:"/rest-api-docs/common-workflows/modeling/manage-datamart-objects/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-datamart-objects/manage-datamart-objects.md",tags:[],version:"current",lastUpdatedBy:"kezhou-mstr",lastUpdatedAt:1701121876,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"Manage datamart objects",description:"You can use REST\u202fAPI requests to retrieve, create, and update datamart objects through the Modeling Service"},sidebar:"tutorialSidebar",previous:{title:"Update a custom group's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-custom-group-objects/update-a-custom-groups-definition"},next:{title:"Retrieve a datamart definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-datamart-objects/retrieve-a-datamart-definition"}},s={},c=[{value:"Important fields",id:"important-fields",level:2},{value:"<code>information</code>",id:"information",level:3},{value:"<code>sourceType</code>",id:"sourcetype",level:3},{value:"<code>dataSource</code>",id:"datasource",level:3},{value:"<code>datamartOptions</code>",id:"datamartoptions",level:3},{value:"<code>timezone</code>",id:"timezone",level:3},{value:"<code>advancedProperties</code>",id:"advancedproperties",level:3},{value:"Out of scope for 11.3.7",id:"out-of-scope-for-1137",level:2}],u=(r="Available",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),f={toc:c};function k(e){var t=e.components,a=(0,o.Z)(e,d);return(0,i.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(u,{since:"2021 Update 7",mdxType:"Available"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try these workflows with ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-1f302e4e-e863-4247-a360-802794a8d8a5?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"Starting in MicroStrategy 2021 Update 7, you can use REST\u202fAPI requests retrieve, create, and update datamart objects through the Modeling service."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-datamart-objects/retrieve-a-datamart-definition"},"Retrieve a datamart definition")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-datamart-objects/create-a-datamart-from-a-source-report"},"Create a datamart from a source report")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-datamart-objects/create-a-datamart-from-scratch"},"Create a datamart from scratch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-datamart-objects/update-a-datamart-definition"},"Update a datamart definition")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-datamart-objects/execute-a-datamart"},"Execute a datamart")," ",(0,i.kt)(u,{since:"2021 Update 9",inline:!0,mdxType:"Available"}))),(0,i.kt)("h2",{id:"important-fields"},"Important fields"),(0,i.kt)("p",null,"This section outlines the important fields in the API response body defined for an Incremental Refresh Report."),(0,i.kt)("h3",{id:"information"},(0,i.kt)("inlineCode",{parentName:"h3"},"information")),(0,i.kt)("p",null,"Stores the basic information for the datamart including, ",(0,i.kt)("inlineCode",{parentName:"p"},"dateCreated"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dateModified"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"versionId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"primaryLocale"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"objectId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"subType"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"destinationFolder"),"."),(0,i.kt)("p",null,"For datamart, the ",(0,i.kt)("inlineCode",{parentName:"p"},"subType")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"report_datamart"),"."),(0,i.kt)("h3",{id:"sourcetype"},(0,i.kt)("inlineCode",{parentName:"h3"},"sourceType")),(0,i.kt)("p",null,"Stores the report type for the source report that datamart is created on top of. The report type is ",(0,i.kt)("inlineCode",{parentName:"p"},"normal")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"custom_sql_free_form"),"."),(0,i.kt)("h3",{id:"datasource"},(0,i.kt)("inlineCode",{parentName:"h3"},"dataSource")),(0,i.kt)("p",null,"Specifies the design of datamart, including the units on ",(0,i.kt)("inlineCode",{parentName:"p"},"dataTemplate"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"filter"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"table")," (only if ",(0,i.kt)("inlineCode",{parentName:"p"},"sourceType")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"custom_sql_free_form"),")."),(0,i.kt)("h3",{id:"datamartoptions"},(0,i.kt)("inlineCode",{parentName:"h3"},"datamartOptions")),(0,i.kt)("p",null,"Contains all the configuration settings of datamart, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"append"),": Indicates whether to create a new table or append to the existing table every time a report runs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"targetSource"),": The db instance where the table is placed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"tableName"),": The name of the table.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"placeholderIncluded"),": The supported placeholders in the table name. You can see more information ",(0,i.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/ReportDesigner/WebHelp/Lang_1033/Content/datamart_reports.htm"},"here"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"datamartProperties"),": The properties that are used to configure the table in warehouse. For example, datamart advanced settings and SQL statement related configurations."))),(0,i.kt)("h3",{id:"timezone"},(0,i.kt)("inlineCode",{parentName:"h3"},"timezone")),(0,i.kt)("p",null,"Stores the information for the timezone applied to the source report."),(0,i.kt)("h3",{id:"advancedproperties"},(0,i.kt)("inlineCode",{parentName:"h3"},"advancedProperties")),(0,i.kt)("p",null,"Stores the information of all available advanced properties for the datamart."),(0,i.kt)("h2",{id:"out-of-scope-for-1137"},"Out of scope for 11.3.7"),(0,i.kt)("p",null,"Users can\u2019t create a datamart on top of a Query builder report or get/update a datamart based on query build/mdx type. These report types are not yet supported by the Modeling service."),(0,i.kt)("p",null,"The normal report of MDX type is not supported to create datamart. This normal report type is not yet supported by the Modeling service."),(0,i.kt)("p",null,"For more information about the Modeling service, see ",(0,i.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/InstallConfig/en-us/Content/modeling_service.htm"},"Configuring the Modeling Service"),"."))}k.isMDXComponent=!0}}]);