"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3519],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7250:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var r=a(3117),n=a(102),o=(a(7294),a(3905)),i=["components"],l={title:"Make external data available using the Push Data API",description:"The Push Data API, which belongs to the Dataset API family, lets you make external data easily available for analysis in MicroStrategy. You use REST APIs to create and modify datasets using external data uploaded directly to the Intelligence Server."},s=void 0,d={unversionedId:"common-workflows/make-external-data-available/make-external-data-available",id:"common-workflows/make-external-data-available/make-external-data-available",title:"Make external data available using the Push Data API",description:"The Push Data API, which belongs to the Dataset API family, lets you make external data easily available for analysis in MicroStrategy. You use REST APIs to create and modify datasets using external data uploaded directly to the Intelligence Server.",source:"@site/docs/common-workflows/make-external-data-available/make-external-data-available.md",sourceDirName:"common-workflows/make-external-data-available",slug:"/common-workflows/make-external-data-available/",permalink:"/rest-api-docs/common-workflows/make-external-data-available/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/make-external-data-available/make-external-data-available.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1671571075,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{title:"Make external data available using the Push Data API",description:"The Push Data API, which belongs to the Dataset API family, lets you make external data easily available for analysis in MicroStrategy. You use REST APIs to create and modify datasets using external data uploaded directly to the Intelligence Server."},sidebar:"tutorialSidebar",previous:{title:"Create security roles",permalink:"/rest-api-docs/common-workflows/manage-user-and-user-groups/create-security-roles"},next:{title:"Create and modify a dataset with one request",permalink:"/rest-api-docs/common-workflows/make-external-data-available/create-a-dataset-with-one-request/workflow-create-and-modify-a-dataset-with-one-request"}},u={},c=[],p={toc:c};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out these workflows at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-2f45d89b-a009-455b-b181-f5e529be9121?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"The Push Data API, which belongs to the Dataset API family, lets you make external data easily available for analysis in MicroStrategy. You use REST APIs to create and modify datasets using external data uploaded directly to the Intelligence Server."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"By providing a simpler, quicker way to get data out and add data back in, the Push Data API makes it easier to use MicroStrategy as a high-performance data storage and retrieval mechanism and supports predictive workflow by machine learning, artificial intelligence, and data scientist teams."),(0,o.kt)("li",{parentName:"ul"},"The ability to make external data easily available extends MicroStrategy's reach to new and complex data sources where code, rather than end-users, manages the data modeling/mapping flow."),(0,o.kt)("li",{parentName:"ul"},"The Push Data API supports close integration with the ecosystem of third-party ETL tools because it allows them to push data directly into MicroStrategy while allowing the most optimal utilization of MicroStrategy's cube capabilities. The Push Data API provides these tools, whether they are analyst or IT-oriented, with the option to create and update datasets on the MicroStrategy Intelligence Server without requiring an intermediate step of pushing the data into a warehouse.")),(0,o.kt)("p",null,"When the Push Data API was introduced in MicroStrategy 10.11, it supported only a single table and data was uploaded and published in the same request. This single request workflow works well for small, simple dataset creation scenarios, but a newer multiple request workflow supports more complex scenarios where a large number of columns/metrics need to be managed at a different update/load/refresh schedule. This workflow separates dataset definition, data upload, and dataset creation, using multiple requests to incrementally add data before publication."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/make-external-data-available/create-a-dataset-with-one-request/workflow-create-and-modify-a-dataset-with-one-request"},"Creating a dataset with one request")),(0,o.kt)("p",{parentName:"li"},"If you have only a small amount of data, you can upload and publish data to the Intelligence Server at the same time. This method is quick and simple, but it has limitations such as only supporting a single table.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/make-external-data-available/create-a-dataset-incrementally-with-multiple-requests/"},"Creating a dataset with multiple requests")),(0,o.kt)("p",{parentName:"li"},"If you have a large amount of data, you can incrementally upload data to the Intelligence Server and publish it whenever you want. This method is more complex, but it supports multiple tables, is scalable, and allows you to schedule your uploads and publication for better performance."))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To improve performance, follow the recommendations below for chunking data:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"If the data size <= 50MB, the recommended practice is to put data into one chunk."),(0,o.kt)("li",{parentName:"ul"},"If the data size > 50MB, the recommended practice is to put data into separate chunks. The chunk size should range from 50-200MB, with an ideal chunk size of 100MB."))),(0,o.kt)("p",null,"Once you create a dataset and publish it to the Intelligence Server with either workflow, developers can use the Cube API or Report API to manipulate the data and users can create dashboards to analyze and present the data."))}m.isMDXComponent=!0}}]);