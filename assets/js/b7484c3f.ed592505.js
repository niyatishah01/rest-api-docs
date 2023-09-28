"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8755],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return l}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),m=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=m(a),l=n,f=u["".concat(c,".").concat(l)]||u[l]||p[l]||o;return a?r.createElement(f,i(i({ref:t},d),{},{components:a})):r.createElement(f,i({ref:t},d))}));function l(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var m=2;m<o;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},12649:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return u}});var r,n=a(83117),o=a(80102),i=(a(67294),a(3905)),s=["components"],c={title:"Datasource management",description:"You can use REST API requests to manage datasources."},m=void 0,d={unversionedId:"common-workflows/administration/datasource-management/datasource-management",id:"common-workflows/administration/datasource-management/datasource-management",title:"Datasource management",description:"You can use REST API requests to manage datasources.",source:"@site/docs/common-workflows/administration/datasource-management/datasource-management.md",sourceDirName:"common-workflows/administration/datasource-management",slug:"/common-workflows/administration/datasource-management/",permalink:"/rest-api-docs/common-workflows/administration/datasource-management/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/datasource-management/datasource-management.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1695919031,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{title:"Datasource management",description:"You can use REST API requests to manage datasources."},sidebar:"tutorialSidebar",previous:{title:"Create subscription with prompted content",permalink:"/rest-api-docs/common-workflows/administration/distribution-services/manage-subscriptions/create-subscription-with-prompted-content"},next:{title:"Create a datasource",permalink:"/rest-api-docs/common-workflows/administration/datasource-management/create-a-datasource"}},p={},u=[],l=(r="Available",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),f={toc:u};function g(e){var t=e.components,a=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try these workflows with ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-fe63e329-ca17-40e6-9263-8f451b95e06e?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"You can use REST API requests to manage datasources."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/administration/datasource-management/create-a-datasource"},"Create a datasource")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/administration/datasource-management/update-a-datasource"},"Update a datasource")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/administration/datasource-management/add-and-remove-datasource-from-project"},"Add and remove datasource from project")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/administration/datasource-management/update-job-priorities-for-datasource"},"Update job priorities for datasource")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/administration/datasource-management/delete-a-datasource"},"Delete a datasource")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/administration/datasource-management/get-datasource-applicable-advanced-properties"},"Get datasource's applicable advanced properties")," ",(0,i.kt)(l,{since:"2021 Update 8",inline:!0,mdxType:"Available"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/administration/datasource-management/get-datasource-with-advanced-properties"},"Get datasource's definition and advanced properties")," ",(0,i.kt)(l,{since:"2021 Update 8",inline:!0,mdxType:"Available"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/administration/datasource-management/update-datasource-advanced-property"},"Update datasource's advanced property")," ",(0,i.kt)(l,{since:"2021 Update 8",inline:!0,mdxType:"Available"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/administration/datasource-management/convert-connection-string-from-dsn-to-dsnless-for-a-datasource"},"Convert connection string from data source name(DSN) to DSN-less for a datasource")," ",(0,i.kt)(l,{since:"2021 Update 8",inline:!0,mdxType:"Available"}))))}g.isMDXComponent=!0}}]);