"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[2216],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||n;return r?i.createElement(f,o(o({ref:t},p),{},{components:r})):i.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<n;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},31926:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var i=r(83117),a=r(80102),n=(r(67294),r(3905)),o=["components"],s={title:"Manage selectors",description:"The MicroStrategy RESTful server supports different types of selectors, similar to the function in MicroStrategy Library Web."},l=void 0,c={unversionedId:"common-workflows/analytics/manage-selectors/manage-selectors",id:"common-workflows/analytics/manage-selectors/manage-selectors",title:"Manage selectors",description:"The MicroStrategy RESTful server supports different types of selectors, similar to the function in MicroStrategy Library Web.",source:"@site/docs/common-workflows/analytics/manage-selectors/manage-selectors.md",sourceDirName:"common-workflows/analytics/manage-selectors",slug:"/common-workflows/analytics/manage-selectors/",permalink:"/rest-api-docs/common-workflows/analytics/manage-selectors/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/manage-selectors/manage-selectors.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1680880277,formattedLastUpdatedAt:"Apr 7, 2023",frontMatter:{title:"Manage selectors",description:"The MicroStrategy RESTful server supports different types of selectors, similar to the function in MicroStrategy Library Web."},sidebar:"tutorialSidebar",previous:{title:"Prompt execution errors",permalink:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-execution-errors"},next:{title:"Retrieve a selector's definition",permalink:"/rest-api-docs/common-workflows/analytics/manage-selectors/retrieve-a-selectors-definition"}},p={},u=[{value:"Compatibility",id:"compatibility",level:2},{value:"Compatibility prior to MicroStrategy 2021 Update 1",id:"compatibility-prior-to-microstrategy-2021-update-1",level:3},{value:"Compatibility on and after MicroStrategy 2021 Update 1",id:"compatibility-on-and-after-microstrategy-2021-update-1",level:3},{value:"How to use selector consumption APIs",id:"how-to-use-selector-consumption-apis",level:2}],m={toc:u};function d(e){var t=e.components,s=(0,a.Z)(e,o);return(0,n.kt)("wrapper",(0,i.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The MicroStrategy RESTful server supports different types of selectors, similar to the function in MicroStrategy Library Web."),(0,n.kt)("p",null,"The following five selector types are supported:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Attribute qualification selector"),(0,n.kt)("li",{parentName:"ul"},"Attribute element list selector"),(0,n.kt)("li",{parentName:"ul"},"Metric qualification selector"),(0,n.kt)("li",{parentName:"ul"},"Object replacement selector"),(0,n.kt)("li",{parentName:"ul"},"Visualization as filter")),(0,n.kt)("p",null,"You can use the following APIs to set the different types of selectors and view selector definitions:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"API"),(0,n.kt)("th",{parentName:"tr",align:null},"Functionality"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/setFilters"},"PUT /api/dossiers/{dossierId}/instances/{instanceId}/filters")),(0,n.kt)("td",{parentName:"tr",align:null},"Set selectors in the current chapter based on an existing dossier instance")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/createDossierInstance_2"},"POST /api/dossiers/instances")),(0,n.kt)("td",{parentName:"tr",align:null},"Set selectors in the current chapter based on a new dossier instance")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/getVisualizationList_2"},"GET /api/v2/dossiers/{dossierId}/instances/{instanceId}/definition")),(0,n.kt)("td",{parentName:"tr",align:null},"Return selector definition (status, selected answer, key, name), dataset information, and the current chapter key in an existing dossier instance")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/getVisualizationList_1"},"GET /api/v2/dossiers/{dossierId}/definition")),(0,n.kt)("td",{parentName:"tr",align:null},"Return selectors definition (status, selected answer, key, name), dataset information, and the current chapter key in a dossier")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/getDossierDatasetFilterElements"},"GET /api/dossiers/{dossierId}/instances/{instanceId}/elements")),(0,n.kt)("td",{parentName:"tr",align:null},"Fetch suggested answers or elements for attribute elements selector (include search box functionality)")))),(0,n.kt)("h2",{id:"compatibility"},"Compatibility"),(0,n.kt)("p",null,"The enhancement for the setting dossier filter API does not break compatibility since the existing selection setting API is enhanced to support two filter selection json formats: the old format and new format."),(0,n.kt)("p",null,"The existing setting dossier filter API is shown below. However, it is suggested that you use the new format of the filter setting body input. This new format is consistent with the filter definition in the output for the GET dossier definition APIs."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/setFilters"},"PUT /api/dossiers/{dossierId}/instances/{instanceId}/filters")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/createDossierInstance_2"},"POST /api/dossiers/{dossierId}/instances"))),(0,n.kt)("p",null,"The following section outlines a summary of the compatibility."),(0,n.kt)("h3",{id:"compatibility-prior-to-microstrategy-2021-update-1"},"Compatibility prior to MicroStrategy 2021 Update 1"),(0,n.kt)("p",null,"For library versions prior to MicroStrategy 2021 Update 1:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The behavior remains the same for all Intelligence Server versions."),(0,n.kt)("li",{parentName:"ul"},"The expected behavior for the GET Filter API is that the fetched filter definition json returns the chapter-level selector key, name, and summary."),(0,n.kt)("li",{parentName:"ul"},"The expected behavior for the Setting Filter API is that it supports old filter setting format for setting the following two selector types:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Attribute element list filter"),(0,n.kt)("li",{parentName:"ul"},"Metric qualification selector")))),(0,n.kt)("h3",{id:"compatibility-on-and-after-microstrategy-2021-update-1"},"Compatibility on and after MicroStrategy 2021 Update 1"),(0,n.kt)("p",null,"For library versions on and after MicroStrategy 2021 Update 1, the behavior changes based on the Intelligence Server version."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For Intelligence Server versions prior to MicroStrategy 2021 Update 1",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The expected behavior for the GET filter API is that the fetched filter definition json is missing information for visualization as filter and dataset name for dataset. Returns the definition of the following selector types:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Attribute element list selector"),(0,n.kt)("li",{parentName:"ul"},"Attribute qualification selector"),(0,n.kt)("li",{parentName:"ul"},"Metric qualification selector"),(0,n.kt)("li",{parentName:"ul"},"Object replacement selector(Attribute/metric selector)"))),(0,n.kt)("li",{parentName:"ul"},"The expected behavior for the Setting Filter API is that it supports old and new filter setting formats for setting the following five selector types:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Attribute element list selector"),(0,n.kt)("li",{parentName:"ul"},"Attribute qualification selector"),(0,n.kt)("li",{parentName:"ul"},"Metric qualification selector"),(0,n.kt)("li",{parentName:"ul"},"Object replacement selector(Attribute/metric selector)"),(0,n.kt)("li",{parentName:"ul"},"Visualization as filter"))))),(0,n.kt)("li",{parentName:"ul"},"For Intelligence Server versions on and after MicroStrategy 2021 Update 1",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The expected behavior for the GET filter API is that the fetched filter definition json is complete and returns the definition of the following selector types:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Attribute element list selector"),(0,n.kt)("li",{parentName:"ul"},"Attribute qualification selector"),(0,n.kt)("li",{parentName:"ul"},"Metric qualification selector"),(0,n.kt)("li",{parentName:"ul"},"Object replacement selector(Attribute/metric selector)"),(0,n.kt)("li",{parentName:"ul"},"Visualization as filter"))),(0,n.kt)("li",{parentName:"ul"},"The expected behavior for the Setting Filter API is that it supports old and new filter setting formats for setting the following five selector types:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Attribute element list selector"),(0,n.kt)("li",{parentName:"ul"},"Attribute qualification selector"),(0,n.kt)("li",{parentName:"ul"},"Metric qualification selector"),(0,n.kt)("li",{parentName:"ul"},"Object replacement selector(Attribute/metric selector)"),(0,n.kt)("li",{parentName:"ul"},"Visualization as filter")))))),(0,n.kt)("h2",{id:"how-to-use-selector-consumption-apis"},"How to use selector consumption APIs"),(0,n.kt)("p",null,"The diagrams below outlines common workflows for using APIs for dossier selector functionalities."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Selector Workflow Diagram",src:r(46308).Z,width:"1153",height:"728"})))}d.isMDXComponent=!0},46308:function(e,t,r){t.Z=r.p+"assets/images/selector_workflow_diagram-544c4befc8e5d3e884f494d6099dbc6a.png"}}]);