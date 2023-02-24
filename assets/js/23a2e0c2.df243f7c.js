"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1452],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=u(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(g,i(i({ref:e},c),{},{components:n})):r.createElement(g,i({ref:e},c))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},934:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],s={title:"MicroStrategy REST API Playground",description:"MicroStrategy REST API Playground is a place you can see live demos of our REST API, API specifications, and code examples. You can also play with it without writing a single line of code."},l=void 0,u={unversionedId:"getting-started/playground",id:"getting-started/playground",title:"MicroStrategy REST API Playground",description:"MicroStrategy REST API Playground is a place you can see live demos of our REST API, API specifications, and code examples. You can also play with it without writing a single line of code.",source:"@site/docs/getting-started/playground.md",sourceDirName:"getting-started",slug:"/getting-started/playground",permalink:"/rest-api-docs/getting-started/playground",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/getting-started/playground.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1677268684,formattedLastUpdatedAt:"Feb 24, 2023",frontMatter:{title:"MicroStrategy REST API Playground",description:"MicroStrategy REST API Playground is a place you can see live demos of our REST API, API specifications, and code examples. You can also play with it without writing a single line of code."},sidebar:"tutorialSidebar",previous:{title:"MicroStrategy REST API Explorer",permalink:"/rest-api-docs/getting-started/microstrategy-rest-api-explorer"},next:{title:"Using REST API with Embedding SDK",permalink:"/rest-api-docs/getting-started/embedding-sdk"}},c={},p=[{value:"What is the playground?",id:"what-is-the-playground",level:2},{value:"Other useful information",id:"other-useful-information",level:2},{value:"How to contribute?",id:"how-to-contribute",level:2}],d={toc:p};function m(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-the-playground"},"What is the playground?"),(0,a.kt)("p",null,"MicroStrategy REST API Playground is a place you can see live demos of our REST API, API specifications, and code examples. You can also play with it without writing a single line of code."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/MicroStrategy/rest-api-playground"},"This GitHub Page")," provides the instructions for you to set up and start to use it. You can access the playground at ",(0,a.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk"},"https://www.postman.com/microstrategysdk"),". If you are not familiar Postman interface, be sure to check out ",(0,a.kt)("a",{parentName:"p",href:"https://learning.postman.com/docs/getting-started/introduction/"},"the documentation")," on Postman's learning center."),(0,a.kt)("p",null,"There are two collections in the workspace:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MicroStrategy REST API: Use it as API Documentation. It contains examples and built-in scripts to save the context information after some requests, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"authToken"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"userId"),"."),(0,a.kt)("li",{parentName:"ul"},"MicroStrategy REST API Workflows: It contains workflow examples. You can pick a folder and run all the requests.")),(0,a.kt)("p",null,"You need to pick an environment to run the requests. There are two environments shipped:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"demo.microstrategy.com: It contains the connection information to the demo environment. A guest user only has limited assess to the environment, hence not all requests will pass."),(0,a.kt)("li",{parentName:"ul"},"A template for cloud environment. You can make a copy and change the connection information.")),(0,a.kt)("h2",{id:"other-useful-information"},"Other useful information"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you are interested in Embedded Analytics solutions, play with our Embedding SDK Playground at ",(0,a.kt)("a",{parentName:"li",href:"https://playground.microstrategy.com"},"https://playground.microstrategy.com"),"."),(0,a.kt)("li",{parentName:"ul"},"You can also visit our ",(0,a.kt)("a",{parentName:"li",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html"},"Swagger API-Docs page")," or in your Library environment."),(0,a.kt)("li",{parentName:"ul"},"Check out more examples and demos ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/MicroStrategy"},"here"),".")),(0,a.kt)("h2",{id:"how-to-contribute"},"How to contribute?"),(0,a.kt)("p",null,"You can be a part of the playground project in the following ways."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reporting issues in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/MicroStrategy/rest-api-playground/issues"},"Github / Issues"),"."),(0,a.kt)("li",{parentName:"ul"},"Sending feedback and questions in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/MicroStrategy/rest-api-playground/discussions"},"Github / Discussions"),"."),(0,a.kt)("li",{parentName:"ul"},"Fixing bugs in Postman scripts or adding new workflows using Postman's Pull Request feature.")))}m.isMDXComponent=!0}}]);