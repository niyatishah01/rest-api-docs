"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5663],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return g}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),c=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=c(r),g=a,f=d["".concat(l,".").concat(g)]||d[g]||u[g]||i;return r?n.createElement(f,o(o({ref:e},p),{},{components:r})):n.createElement(f,o({ref:e},p))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},56668:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),o=["components"],s={title:"Getting started",description:"The following topics are designed to help you get started using the MicroStrategy REST API."},l=void 0,c={unversionedId:"getting-started/getting-started",id:"getting-started/getting-started",title:"Getting started",description:"The following topics are designed to help you get started using the MicroStrategy REST API.",source:"@site/docs/getting-started/getting-started.md",sourceDirName:"getting-started",slug:"/getting-started/",permalink:"/rest-api-docs/getting-started/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/getting-started/getting-started.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1677861063,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{title:"Getting started",description:"The following topics are designed to help you get started using the MicroStrategy REST API."},sidebar:"tutorialSidebar",previous:{title:"What's new",permalink:"/rest-api-docs/whats-new"},next:{title:"REST API architecture",permalink:"/rest-api-docs/getting-started/rest-api-architecture"}},p={},u=[],d={toc:u};function g(t){var e=t.components,r=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To get started, view the following topics to know the basics of the MicroStrategy REST API:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/getting-started/rest-api-architecture"},"REST API architecture")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/getting-started/rest-api-families"},"REST API families"))),(0,i.kt)("p",null,"After learning the basics, view the following topics to understand some general topics that apply to the REST API:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/getting-started/authentication"},"Authentication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/getting-started/configure-clustered-environments"},"Configure clustered environments")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/getting-started/improve-performance-by-working-with-partial-resources/"},"Improve performance by working with partial resources")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/getting-started/handle-rest-api-exceptions"},"Handle REST API exceptions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/getting-started/embedding-sdk"},"Using REST API with Embedding SDK"))),(0,i.kt)("p",null,"You can use the REST API Explorer and Playground as tools to learn more and run live REST API calls:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/getting-started/microstrategy-rest-api-explorer"},"MicroStrategy REST API Explorer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/getting-started/playground"},"MicroStrategy REST API Playground"))),(0,i.kt)("p",null,"For more specific REST API topics, view the ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/"},"common workflows"),"."))}g.isMDXComponent=!0}}]);