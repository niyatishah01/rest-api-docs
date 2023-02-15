"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[372],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return p}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(t),p=r,h=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return t?n.createElement(h,i(i({ref:a},c),{},{components:t})):n.createElement(h,i({ref:a},c))}));function p(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4179:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var n=t(3117),r=t(102),o=(t(7294),t(3905)),i=["components"],l={title:"Make external data available using the Push Data API",description:"The Push Data API, which belongs to the Dataset API family, lets you make external data easily available for analysis in MicroStrategy. You use REST APIs to create and modify datasets using external data uploaded directly to the Intelligence Server."},s=void 0,d={unversionedId:"common-workflows/analytics/manage-datasets/make-external-data-available/make-external-data-available",id:"common-workflows/analytics/manage-datasets/make-external-data-available/make-external-data-available",title:"Make external data available using the Push Data API",description:"The Push Data API, which belongs to the Dataset API family, lets you make external data easily available for analysis in MicroStrategy. You use REST APIs to create and modify datasets using external data uploaded directly to the Intelligence Server.",source:"@site/docs/common-workflows/analytics/manage-datasets/make-external-data-available/make-external-data-available.md",sourceDirName:"common-workflows/analytics/manage-datasets/make-external-data-available",slug:"/common-workflows/analytics/manage-datasets/make-external-data-available/",permalink:"/rest-api-docs/common-workflows/analytics/manage-datasets/make-external-data-available/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/manage-datasets/make-external-data-available/make-external-data-available.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1676479687,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{title:"Make external data available using the Push Data API",description:"The Push Data API, which belongs to the Dataset API family, lets you make external data easily available for analysis in MicroStrategy. You use REST APIs to create and modify datasets using external data uploaded directly to the Intelligence Server."},sidebar:"tutorialSidebar",previous:{title:"Update a cube definition",permalink:"/rest-api-docs/common-workflows/analytics/manage-datasets/manage-cube-objects/update-a-cube-definition"},next:{title:"Create and modify a dataset with one request",permalink:"/rest-api-docs/common-workflows/analytics/manage-datasets/make-external-data-available/create-a-dataset-with-one-request/workflow-create-and-modify-a-dataset-with-one-request"}},c={},u=[],m={toc:u};function p(e){var a=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out these workflows at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-724e8a71-2d94-4887-af80-f57d62503f46?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"The Push Data API, which belongs to the Dataset API family, lets you make external data easily available for analysis in MicroStrategy. You use REST APIs to create and modify datasets using external data uploaded directly to the Intelligence Server."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"By providing a simpler, quicker way to get data out and add data back in, the Push Data API makes it easier to use MicroStrategy as a high-performance data storage and retrieval mechanism and supports predictive workflow by machine learning, artificial intelligence, and data scientist teams."),(0,o.kt)("li",{parentName:"ul"},"The ability to make external data easily available extends MicroStrategy's reach to new and complex data sources where code, rather than end-users, manages the data modeling/mapping flow."),(0,o.kt)("li",{parentName:"ul"},"The Push Data API supports close integration with the ecosystem of third-party ETL tools because it allows them to push data directly into MicroStrategy while allowing the most optimal utilization of MicroStrategy's cube capabilities. The Push Data API provides these tools, whether they are analyst or IT-oriented, with the option to create and update datasets on the MicroStrategy Intelligence Server without requiring an intermediate step of pushing the data into a warehouse.")),(0,o.kt)("p",null,"When the Push Data API was introduced in MicroStrategy 10.11, it supported only a single table and data was uploaded and published in the same request. This single request workflow works well for small, simple dataset creation scenarios, but a newer multiple request workflow supports more complex scenarios where a large number of columns/metrics need to be managed at a different update/load/refresh schedule. This workflow separates dataset definition, data upload, and dataset creation, using multiple requests to incrementally add data before publication."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/analytics/manage-datasets/make-external-data-available/create-a-dataset-with-one-request/workflow-create-and-modify-a-dataset-with-one-request"},"Creating a dataset with one request")),(0,o.kt)("p",{parentName:"li"},"If you have only a small amount of data, you can upload and publish data to the Intelligence Server at the same time. This method is quick and simple, but it has limitations such as only supporting a single table.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/analytics/manage-datasets/make-external-data-available/create-a-dataset-incrementally-with-multiple-requests/"},"Creating a dataset with multiple requests")),(0,o.kt)("p",{parentName:"li"},"If you have a large amount of data, you can incrementally upload data to the Intelligence Server and publish it whenever you want. This method is more complex, but it supports multiple tables, is scalable, and allows you to schedule your uploads and publication for better performance."))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To improve performance, follow the recommendations below for chunking data:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"If the data size <= 50MB, the recommended practice is to put data into one chunk."),(0,o.kt)("li",{parentName:"ul"},"If the data size > 50MB, the recommended practice is to put data into separate chunks. The chunk size should range from 50-200MB, with an ideal chunk size of 100MB."))),(0,o.kt)("p",null,"Once you create a dataset and publish it to the Intelligence Server with either workflow, developers can use the Cube API or Report API to manipulate the data and users can create dashboards to analyze and present the data."))}p.isMDXComponent=!0}}]);