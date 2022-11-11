"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3214],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),l=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=l(a),u=n,f=s["".concat(d,".").concat(u)]||s[u]||m[u]||o;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=s;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},1088:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return m}});var r=a(3117),n=a(102),o=(a(7294),a(3905)),i=["components"],p={title:"Manage datamart objects",description:"You can use REST\u202fAPI requests retrieve, create, and update the datamart objects through the Modeling Service"},d=void 0,l={unversionedId:"common-workflows/manage-datamart-objects/manage-datamart-objects",id:"common-workflows/manage-datamart-objects/manage-datamart-objects",title:"Manage datamart objects",description:"You can use REST\u202fAPI requests retrieve, create, and update the datamart objects through the Modeling Service",source:"@site/docs/common-workflows/manage-datamart-objects/manage-datamart-objects.md",sourceDirName:"common-workflows/manage-datamart-objects",slug:"/common-workflows/manage-datamart-objects/",permalink:"/rest-api-docs/common-workflows/manage-datamart-objects/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-datamart-objects/manage-datamart-objects.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1668189866,formattedLastUpdatedAt:"Nov 11, 2022",frontMatter:{title:"Manage datamart objects",description:"You can use REST\u202fAPI requests retrieve, create, and update the datamart objects through the Modeling Service"},sidebar:"tutorialSidebar",previous:{title:"Create subscription with prompted content",permalink:"/rest-api-docs/common-workflows/manage-subscriptions/create-subscription-with-prompted-content"},next:{title:"Create a datamart from a source report",permalink:"/rest-api-docs/common-workflows/manage-datamart-objects/create-a-datamart-from-a-source-report"}},c={},m=[{value:"Important fields",id:"important-fields",level:2},{value:"<code>information</code>",id:"information",level:3},{value:"<code>sourceType</code>",id:"sourcetype",level:3},{value:"<code>dataSource</code>",id:"datasource",level:3},{value:"<code>datamartOptions</code>",id:"datamartoptions",level:3},{value:"<code>timezone</code>",id:"timezone",level:3},{value:"<code>advancedProperties</code>",id:"advancedproperties",level:3},{value:"Out of scope for 11.3.7",id:"out-of-scope-for-1137",level:2}],s={toc:m};function u(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Starting in MicroStrategy 2021 Update 7, you can use REST\u202fAPI requests retrieve, create, and update the datamart objects through the Modeling service."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/manage-datamart-objects/create-a-datamart-from-a-source-report"},"Create a datamart from a source report")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/manage-datamart-objects/create-a-datamart-from-scratch"},"Create a datamart from scratch")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/manage-datamart-objects/update-a-datamart-definition"},"Update a datamart definition")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/manage-datamart-objects/retrieve-a-datamart-definition"},"Retrieve a datamart definition"))),(0,o.kt)("h2",{id:"important-fields"},"Important fields"),(0,o.kt)("p",null,"This section outlines the important fields in the API response body defined for an Incremental Refresh Report."),(0,o.kt)("h3",{id:"information"},(0,o.kt)("inlineCode",{parentName:"h3"},"information")),(0,o.kt)("p",null,"Stores the basic information for the datamart including, ",(0,o.kt)("inlineCode",{parentName:"p"},"dateCreated"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dateModified"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"versionId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"primaryLocale"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"objectId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"subType"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"destinationFolder"),"."),(0,o.kt)("p",null,"For datamart, the ",(0,o.kt)("inlineCode",{parentName:"p"},"subType")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"report_datamart"),"."),(0,o.kt)("h3",{id:"sourcetype"},(0,o.kt)("inlineCode",{parentName:"h3"},"sourceType")),(0,o.kt)("p",null,"Stores the report type for the source report that datamart is created on top of. It could be ",(0,o.kt)("inlineCode",{parentName:"p"},"normal")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"custom_sql_free_form"),"."),(0,o.kt)("h3",{id:"datasource"},(0,o.kt)("inlineCode",{parentName:"h3"},"dataSource")),(0,o.kt)("p",null,"Specifies the design of datamart, including the units on ",(0,o.kt)("inlineCode",{parentName:"p"},"dataTemplate"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"filter"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"table")," (only if ",(0,o.kt)("inlineCode",{parentName:"p"},"sourceType")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"custom_sql_free_form"),")."),(0,o.kt)("h3",{id:"datamartoptions"},(0,o.kt)("inlineCode",{parentName:"h3"},"datamartOptions")),(0,o.kt)("p",null,"Contains all the configuration settings of datamart, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"append"),": Indicates whether to create a new table or append to the existing table every time report runs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"targetSource"),": The db instance where the table will be placed into.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"tableName"),": The name of the inserting table.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"placeholderIncluded"),": The supported placeholders on table name. Details can be referred ",(0,o.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/ReportDesigner/WebHelp/Lang_1033/Content/datamart_reports.htm"},"here"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"datamartProperties"),": The properties that are used to configure the table in warehouse, like advanced settings of datamart and SQL statement related configurations."))),(0,o.kt)("h3",{id:"timezone"},(0,o.kt)("inlineCode",{parentName:"h3"},"timezone")),(0,o.kt)("p",null,"Stores the information for timezone that\u2019s applied on the source report."),(0,o.kt)("h3",{id:"advancedproperties"},(0,o.kt)("inlineCode",{parentName:"h3"},"advancedProperties")),(0,o.kt)("p",null,"Store the information of all the available advanced properties for the datamart."),(0,o.kt)("h2",{id:"out-of-scope-for-1137"},"Out of scope for 11.3.7"),(0,o.kt)("p",null,"User can\u2019t create datamart on top of Query builder report or get/update datamart based on query build/mdx type, since this type of report is not supported in Modeling service yet."),(0,o.kt)("p",null,"The normal report of MDX type is not supported to create datamart as this type of normal report is not supported in Modeling service yet."),(0,o.kt)("p",null,"For more information about the Modeling service, see ",(0,o.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/InstallConfig/en-us/Content/modeling_service.htm"},"Configuring the Modeling Service"),"."))}u.isMDXComponent=!0}}]);