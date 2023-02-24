"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3505],{3905:function(t,e,r){r.d(e,{Zo:function(){return m},kt:function(){return d}});var o=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,o,a=function(t,e){if(null==t)return{};var r,o,a={},n=Object.keys(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=o.createContext({}),c=function(t){var e=o.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},m=function(t){var e=c(t.components);return o.createElement(p.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var r=t.components,a=t.mdxType,n=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(p,".").concat(d)]||u[d]||l[d]||n;return r?o.createElement(f,s(s({ref:e},m),{},{components:r})):o.createElement(f,s({ref:e},m))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var n=r.length,s=new Array(n);s[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,s[1]=i;for(var c=2;c<n;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3993:function(t,e,r){r.r(e),r.d(e,{assets:function(){return l},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return u}});var o,a=r(3117),n=r(102),s=(r(7294),r(3905)),i=["components"],p={title:"Use prompts objects",description:"Prompts are a platform capability of MicroStrategy that refine the data displayed in reports, documents, and dossiers. The system poses the prompt as a question during execution of a dossier, document, or report, and the answer determines the data that is returned. A prompt is similar to a filter; both are applied at runtime and customize the results of data that is returned from a data source. The actual prompt definition cannot be changed at runtime, but the answers to the prompt can be changed dynamically. Together with filtering, prompts allow you to build feature-rich applications by leveraging core MicroStrategy platform capabilities."},c=void 0,m={unversionedId:"common-workflows/analytics/use-prompts-objects/use-prompts-objects",id:"common-workflows/analytics/use-prompts-objects/use-prompts-objects",title:"Use prompts objects",description:"Prompts are a platform capability of MicroStrategy that refine the data displayed in reports, documents, and dossiers. The system poses the prompt as a question during execution of a dossier, document, or report, and the answer determines the data that is returned. A prompt is similar to a filter; both are applied at runtime and customize the results of data that is returned from a data source. The actual prompt definition cannot be changed at runtime, but the answers to the prompt can be changed dynamically. Together with filtering, prompts allow you to build feature-rich applications by leveraging core MicroStrategy platform capabilities.",source:"@site/docs/common-workflows/analytics/use-prompts-objects/use-prompts-objects.md",sourceDirName:"common-workflows/analytics/use-prompts-objects",slug:"/common-workflows/analytics/use-prompts-objects/",permalink:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/use-prompts-objects/use-prompts-objects.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1677268684,formattedLastUpdatedAt:"Feb 24, 2023",frontMatter:{title:"Use prompts objects",description:"Prompts are a platform capability of MicroStrategy that refine the data displayed in reports, documents, and dossiers. The system poses the prompt as a question during execution of a dossier, document, or report, and the answer determines the data that is returned. A prompt is similar to a filter; both are applied at runtime and customize the results of data that is returned from a data source. The actual prompt definition cannot be changed at runtime, but the answers to the prompt can be changed dynamically. Together with filtering, prompts allow you to build feature-rich applications by leveraging core MicroStrategy platform capabilities."},sidebar:"tutorialSidebar",previous:{title:"Return the metric limit criteria applied prior to aggregation",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/return-metric-limit-criteria"},next:{title:"Get prompt information",permalink:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/get-prompt-information/"}},l={},u=[],d=(o="Available",function(t){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)}),f={toc:u};function h(t){var e=t.components,r=(0,n.Z)(t,i);return(0,s.kt)("wrapper",(0,a.Z)({},f,r,{components:e,mdxType:"MDXLayout"}),(0,s.kt)(d,{since:"2021 Update 1",mdxType:"Available"}),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,s.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-c22a4c1c-85a3-4f3b-8b34-ffeebd05e795?ctx=documentation"},"REST API Playground"),"."),(0,s.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,s.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,s.kt)("p",null,"Prompts are a platform capability of MicroStrategy that refine the data displayed in reports, documents, and dossiers. The system poses the prompt as a question during execution of a dossier, document, or report, and the answer determines the data that is returned. A prompt is similar to a ",(0,s.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/analytics/filter-data/"},"filter"),"; both are applied at runtime and customize the results of data that is returned from a data source. The actual prompt definition cannot be changed at runtime, but the answers to the prompt can be changed dynamically. Together with filtering, prompts allow you to build feature-rich applications by leveraging core MicroStrategy platform capabilities."),(0,s.kt)("p",null,"Prompts are applied directly to reports and stored with the dataset for the report. Prompts are applied to dossiers and documents more indirectly. When you use a prompted report as a dataset for a dossier or document, the prompts stored with the dataset are automatically applied to the document or dossier."),(0,s.kt)("p",null,"You can use REST APIs to integrate prompts into your application workflow. You can provide prompt answers to dossiers, documents, and reports, and you can get information about the prompts that have been applied to a dossier, document or report object or instance."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/get-prompt-information/"},"Getting information about prompts")," You can use REST APIs to get information about prompts applied to dossiers, documents, and reports\u2014both objects in the metadata and instances of those objects. You can get a list of the prompts that have been applied to a dossier, document or report, together with the definition of those prompts."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/"},"Prompt types")," REST APIs can be used with all prompt types, but the actions that can be performed vary depending on the prompt type. For all prompt types, you can get prompt definitions, answer prompts with default answers, close prompts by providing no answers, or reset prompts. For some, but not all, of the prompt types, you can provide specific answers for prompts."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/answer-prompts"},"Answering prompts")," You can use REST APIs to provide prompt answers to dossiers, documents, and reports, to customize the data that is returned. Because prompts are stored with the dataset, you cannot add or change a prompt definition at runtime, but you can change the answers to the prompt. You can use REST APIs to provide new prompt answers, use the default prompt answers, or close optional prompts without providing an answer."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-execution-errors"},"Prompt execution errors")," Numerous errors can occur during prompt execution. Some errors are the result of incorrect input, while others are caused by issues in the workflow. Certain errors occur for all types of prompts, while others occur only for specific types of prompts.")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"For general information about prompts, see the ",(0,s.kt)("a",{parentName:"p",href:"https://doc-archives.microstrategy.com/producthelp/10.5/basicreporting/webhelp/lang_1033/content/basicreporting/Asking_for_user_input__Prompts.htm#brcreatingquery_2014045409_1076748"},"MicroStrategy product help"),". For information on using prompts in data displayed on a mobile device, see the MicroStrategy Mobile Design and Administration Guide.")))}h.isMDXComponent=!0}}]);