"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[9441],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return l}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=u(a),l=n,f=d["".concat(i,".").concat(l)]||d[l]||p[l]||o;return a?r.createElement(f,c(c({ref:t},m),{},{components:a})):r.createElement(f,c({ref:t},m))}));function l(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var u=2;u<o;u++)c[u]=a[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3427:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return l},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=a(3117),n=a(102),o=(a(7294),a(3905)),c=["components"],s={title:"Datasource Management",description:"You can use REST API requests to manage datasources."},i=void 0,u={unversionedId:"common-workflows/datasource-management/datasource-management",id:"common-workflows/datasource-management/datasource-management",title:"Datasource Management",description:"You can use REST API requests to manage datasources.",source:"@site/docs/common-workflows/datasource-management/datasource-management.md",sourceDirName:"common-workflows/datasource-management",slug:"/common-workflows/datasource-management/",permalink:"/rest-api-docs/common-workflows/datasource-management/",draft:!1,editUrl:"https://github.com/MicroStrategy/restapi-docs/tree/main/docs/common-workflows/datasource-management/datasource-management.md",tags:[],version:"current",lastUpdatedBy:"Liang, Jiapei",lastUpdatedAt:1663187922,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"Datasource Management",description:"You can use REST API requests to manage datasources."},sidebar:"tutorialSidebar",previous:{title:"Validate Migrations",permalink:"/rest-api-docs/common-workflows/migrations-in-workstation/validate-migrations"},next:{title:"Create a datasource",permalink:"/rest-api-docs/common-workflows/datasource-management/create-a-datasource"}},m={},p=[],d={toc:p};function l(e){var t=e.components,a=(0,n.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out these workflows at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-03cf3beb-6d88-4270-9630-c41a989c0db8?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"You can use REST API requests to manage datasources."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/datasource-management/create-a-datasource"},"Create a datasource")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/datasource-management/update-a-datasource"},"Update a datasource")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/datasource-management/add-and-remove-datasource-from-project"},"Add and Remove Datasource from Project")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/datasource-management/update-job-priorities-for-datasource"},"Update Job Priorities for Datasource")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/datasource-management/delete-a-datasource"},"Delete a datasource"))))}l.isMDXComponent=!0}}]);