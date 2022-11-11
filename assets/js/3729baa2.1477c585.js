"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5830],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2024:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={title:"Manage incremental refresh reports",description:"You can use REST\u202fAPI requests retrieve, create, and update the Incremental Refresh Report (IRR) objects through the Modeling service."},p=void 0,s={unversionedId:"common-workflows/manage-incremental-refresh-report/manage-incremental-refresh-report",id:"common-workflows/manage-incremental-refresh-report/manage-incremental-refresh-report",title:"Manage incremental refresh reports",description:"You can use REST\u202fAPI requests retrieve, create, and update the Incremental Refresh Report (IRR) objects through the Modeling service.",source:"@site/docs/common-workflows/manage-incremental-refresh-report/manage-incremental-refresh-report.md",sourceDirName:"common-workflows/manage-incremental-refresh-report",slug:"/common-workflows/manage-incremental-refresh-report/",permalink:"/rest-api-docs/common-workflows/manage-incremental-refresh-report/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-incremental-refresh-report/manage-incremental-refresh-report.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1668189866,formattedLastUpdatedAt:"Nov 11, 2022",frontMatter:{title:"Manage incremental refresh reports",description:"You can use REST\u202fAPI requests retrieve, create, and update the Incremental Refresh Report (IRR) objects through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Retrieve all runtimes",permalink:"/rest-api-docs/common-workflows/manage-runtime-objects/retrieve-all-runtimes"},next:{title:"Retrieve an IRR definition",permalink:"/rest-api-docs/common-workflows/manage-incremental-refresh-report/retrieve-an-irr-definition"}},c={},m=[{value:"Important fields",id:"important-fields",level:2},{value:"<code>information</code>",id:"information",level:3},{value:"<code>targetCube</code>",id:"targetcube",level:3},{value:"<code>incrementType</code>",id:"incrementtype",level:3},{value:"<code>refreshType</code>",id:"refreshtype",level:3},{value:"<code>filter</code>",id:"filter",level:3},{value:"<code>template</code>",id:"template",level:3}],d={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out these workflows at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-bc4cbadd-29e6-4426-85ff-30bcc0f20d60?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"Starting in MicroStrategy 2021 Update 6, you can use REST\u202fAPI requests retrieve, create, and update the Incremental Refresh Report (IRR) objects through the Modeling service."),(0,i.kt)("h2",{id:"important-fields"},"Important fields"),(0,i.kt)("p",null,"This section outlines the important fields in the API response body defined for an Incremental Refresh Report."),(0,i.kt)("h3",{id:"information"},(0,i.kt)("inlineCode",{parentName:"h3"},"information")),(0,i.kt)("p",null,"Stores the basic information for the Incremental Refresh Report including ",(0,i.kt)("inlineCode",{parentName:"p"},"dateCreated"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dateModified"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"versionId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"primaryLocale"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"objectId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"subType"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"."),(0,i.kt)("p",null,"For Incremental Refresh Report, ",(0,i.kt)("inlineCode",{parentName:"p"},"subType")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"report_increment_refresh"),"."),(0,i.kt)("h3",{id:"targetcube"},(0,i.kt)("inlineCode",{parentName:"h3"},"targetCube")),(0,i.kt)("p",null,"Stores the ",(0,i.kt)("inlineCode",{parentName:"p"},"objectId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"subType"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," for the target cube that the Incremental Refresh Report is built on. This is required when creating a new Incremental Refresh Report."),(0,i.kt)("p",null,"For target cube, ",(0,i.kt)("inlineCode",{parentName:"p"},"subType")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"report_cube"),"."),(0,i.kt)("h3",{id:"incrementtype"},(0,i.kt)("inlineCode",{parentName:"h3"},"incrementType")),(0,i.kt)("p",null,"Specifies the incremental type for an Incremental Refresh Report, which can only be ",(0,i.kt)("inlineCode",{parentName:"p"},"filter")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"report"),"."),(0,i.kt)("h3",{id:"refreshtype"},(0,i.kt)("inlineCode",{parentName:"h3"},"refreshType")),(0,i.kt)("p",null,"Specifies the refresh type for an Incremental Refresh Report, which can only be ",(0,i.kt)("inlineCode",{parentName:"p"},"update"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"insert"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"delete"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"update_only"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"replace"),"."),(0,i.kt)("p",null,"The replace ",(0,i.kt)("inlineCode",{parentName:"p"},"refreshType")," is only supported for the ",(0,i.kt)("inlineCode",{parentName:"p"},"incrementType")," filter of the Incremental Refresh Report."),(0,i.kt)("h3",{id:"filter"},(0,i.kt)("inlineCode",{parentName:"h3"},"filter")),(0,i.kt)("p",null,"Stores the information for the filter used in the Incremental Refresh Report, which has the same structure as a filter object."),(0,i.kt)("p",null,"An Incremental Refresh Report filter is presented in the following formats:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"text"),": A human readable, but non-parsable text, describing a filter's qualification."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tree"),": A tree data structure fully defining the filter's qualification."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tokens"),": A list of parsed tokens that define a filter's qualification. Note that generating tokens requires additional time.")),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"showFilterTokens")," is omitted or ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", only ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tree")," formats are returned."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"showFilterTokens")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", all ",(0,i.kt)("inlineCode",{parentName:"p"},"text"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tree"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"tokens")," formats are returned."),(0,i.kt)("h3",{id:"template"},(0,i.kt)("inlineCode",{parentName:"h3"},"template")),(0,i.kt)("p",null,"Stores the information of the template used in the Incremental Refresh Report, which includes rows, columns and pageBy."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"incrementType")," of the Incremental Refresh Report is ",(0,i.kt)("inlineCode",{parentName:"p"},"filter"),", it\u2019s not allowed to modify the template."),(0,i.kt)("p",null,"For more information about the Modeling service, see ",(0,i.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/InstallConfig/en-us/Content/modeling_service.htm"},"Configuring the Modeling Service"),"."))}u.isMDXComponent=!0}}]);