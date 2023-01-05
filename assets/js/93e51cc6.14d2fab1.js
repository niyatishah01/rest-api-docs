"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[4602],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var o=r(7294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,p=function(e,t){if(null==e)return{};var r,o,p={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var i=o.createContext({}),m=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=m(e.components);return o.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,p=e.mdxType,n=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=m(r),f=p,d=u["".concat(i,".").concat(f)]||u[f]||l[f]||n;return r?o.createElement(d,s(s({ref:t},c),{},{components:r})):o.createElement(d,s({ref:t},c))}));function f(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var n=r.length,s=new Array(n);s[0]=u;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:p,s[1]=a;for(var m=2;m<n;m++)s[m]=r[m];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2530:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var o,p=r(3117),n=r(102),s=(r(7294),r(3905)),a=["components"],i={title:"Prompt types",description:"There are several different prompt types in the MicroStrategy platform. Each prompt type is defined by a specific set of parameters and corresponds to a value in EnumDSSXMLPromptType."},m=void 0,c={unversionedId:"common-workflows/use-prompts-objects/prompt-types/prompt-types",id:"common-workflows/use-prompts-objects/prompt-types/prompt-types",title:"Prompt types",description:"There are several different prompt types in the MicroStrategy platform. Each prompt type is defined by a specific set of parameters and corresponds to a value in EnumDSSXMLPromptType.",source:"@site/docs/common-workflows/use-prompts-objects/prompt-types/prompt-types.md",sourceDirName:"common-workflows/use-prompts-objects/prompt-types",slug:"/common-workflows/use-prompts-objects/prompt-types/",permalink:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/use-prompts-objects/prompt-types/prompt-types.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1672953042,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{title:"Prompt types",description:"There are several different prompt types in the MicroStrategy platform. Each prompt type is defined by a specific set of parameters and corresponds to a value in EnumDSSXMLPromptType."},sidebar:"tutorialSidebar",previous:{title:"Get prompt information",permalink:"/rest-api-docs/common-workflows/use-prompts-objects/get-prompt-information/workflow-get-prompt-information"},next:{title:"Attribute element prompts",permalink:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/attribute-element-prompts"}},l={},u=[],f=(o="Available",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}),d={toc:u};function y(e){var t=e.components,r=(0,n.Z)(e,a);return(0,s.kt)("wrapper",(0,p.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(f,{since:"2021 Update 1",mdxType:"Available"}),(0,s.kt)("p",null,"There are several different prompt types in the MicroStrategy platform. Each prompt type is defined by a specific set of parameters and corresponds to a value in ",(0,s.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPromptType.html"},"EnumDSSXMLPromptType"),"."),(0,s.kt)("p",null,"For the following prompt types, you can perform prompt actions supported by REST APIs. This includes getting prompt definitions, providing specific prompt answers, specifying that default prompt answers should be used, closing prompts without supplying answers for optional prompts, or resetting prompts."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/attribute-element-prompts"},"Attribute element prompts")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/attribute-qualification-prompts"},"Attribute qualification prompts")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/object-prompts"},"Object prompts")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/value-prompts"},"Value prompts")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/metric-expression-prompts"},"Metric expression prompts")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/hierarchy-qualification-prompts"},"Hierarchy qualification prompts")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/level-prompts"},"Level prompts"))))}y.isMDXComponent=!0}}]);