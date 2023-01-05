"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5513],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(t),m=o,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return t?n.createElement(d,s(s({ref:r},p),{},{components:t})):n.createElement(d,s({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=f;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7234:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return f}});var n,o=t(3117),a=t(102),s=(t(7294),t(3905)),i=["components"],c={title:"Manage user and workload fences",description:"Within a cluster, fences allows an administrator or a user with DssXmlPrivilegesConfigureServerBasic and DssXmlPrivilegesUseClusterMonitor privileges to reserve specific nodes for use by certain users or certain workloads during normal operations."},l=void 0,p={unversionedId:"common-workflows/manage-fences/manage-fences",id:"common-workflows/manage-fences/manage-fences",title:"Manage user and workload fences",description:"Within a cluster, fences allows an administrator or a user with DssXmlPrivilegesConfigureServerBasic and DssXmlPrivilegesUseClusterMonitor privileges to reserve specific nodes for use by certain users or certain workloads during normal operations.",source:"@site/docs/common-workflows/manage-fences/manage-fences.md",sourceDirName:"common-workflows/manage-fences",slug:"/common-workflows/manage-fences/",permalink:"/rest-api-docs/common-workflows/manage-fences/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-fences/manage-fences.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1672953042,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{title:"Manage user and workload fences",description:"Within a cluster, fences allows an administrator or a user with DssXmlPrivilegesConfigureServerBasic and DssXmlPrivilegesUseClusterMonitor privileges to reserve specific nodes for use by certain users or certain workloads during normal operations."},sidebar:"tutorialSidebar",previous:{title:"Update a fact object",permalink:"/rest-api-docs/common-workflows/manage-fact-objects/update-a-fact-object"},next:{title:"Retrieve the list of fences",permalink:"/rest-api-docs/common-workflows/manage-fences/retrieve-list-of-fences"}},u={},f=[],m=(n="Available",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}),d={toc:f};function g(e){var r=e.components,t=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,o.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)(m,{since:"2021 Update 6",mdxType:"Available"}),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"You can try out these workflows at ",(0,s.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-2564e447-4b77-42c9-99a4-97d7979b348c?ctx=documentation"},"REST API Playground"),"."),(0,s.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,s.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,s.kt)("p",null,"Within a cluster, fences allows an administrator or a user with ",(0,s.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesConfigureServerBasic"},"DssXmlPrivilegesConfigureServerBasic")," and ",(0,s.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesUseClusterMonitor"},"DssXmlPrivilegesUseClusterMonitor")," privileges to reserve specific nodes for use by certain users or certain workloads during normal operations. There are two types of fences:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"User Fence"),": Used to process requests from a list of specified Users or User Groups. User fences can be further limited by specifying applicable projects.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Workload Fence"),": Used to run subscriptions triggered by an event or time-based schedules for specified projects. On-demand event subscriptions such as run immediately, preview, or personal view are not included."))),(0,s.kt)("p",null,"A user fence could be configured for users who require more processing power or high availability. Conversely, a workload fence could be configured to limit the resources for lower-priority subscriptions."),(0,s.kt)("p",null,"The majority of the nodes in a cluster will not be part of a fence, making them available for general use. All configured fences are defined in a single list ordered by precedence. When a request is received, the ordered list of all fences and their configurations are assessed to determine if the request matches any fence configuration. A request will be processed by the first fence found with an available node in the ordered list where the request matches the fence criteria."),(0,s.kt)("p",null,"When all nodes in the cluster are part of the fence list, the request will be sent to a node in the last fence in the ordered list"),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Manage User and Workload Fences REST APIs were released in 2021 Update 6")),(0,s.kt)("p",null,"You can use REST\xa0API\xa0requests to retrieve, create, update, and delete the user and workload fences with ",(0,s.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesConfigureServerBasic"},"DssXmlPrivilegesConfigureServerBasic")," and ",(0,s.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesUseClusterMonitor"},"DssXmlPrivilegesUseClusterMonitor")," privileges across all nodes without restarting the clustered MicroStrategy Intelligence Servers."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/manage-fences/create-fence"},"Create a new fence")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/manage-fences/retrieve-list-of-fences"},"Retrieve the list of fences")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/manage-fences/retrieve-specific-fence"},"Retrieve a specific fence")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/manage-fences/update-specific-fence"},"Update a specific fence")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/manage-fences/delete-specific-fence"},"Delete a specific fence"))),(0,s.kt)("p",null,"For more information about fences, see ",(0,s.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/SystemAdmin/WebHelp/Lang_1033/Content/Work_Fences.htm"},"Reserving Nodes with Work Fences"),"."))}g.isMDXComponent=!0}}]);