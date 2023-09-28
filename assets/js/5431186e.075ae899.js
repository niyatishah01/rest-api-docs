"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8690],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},56530:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n,o=a(83117),r=a(80102),i=(a(67294),a(3905)),s=["components"],l={title:"Manage subtotal objects",description:"Subtotals allow you to dynamically control the computation and display of report data within desired groupings. Subtotals are applied to report metrics to calculate totals and for dynamic aggregation."},p=void 0,c={unversionedId:"common-workflows/modeling/manage-subtotal-objects/manage-subtotal-objects",id:"common-workflows/modeling/manage-subtotal-objects/manage-subtotal-objects",title:"Manage subtotal objects",description:"Subtotals allow you to dynamically control the computation and display of report data within desired groupings. Subtotals are applied to report metrics to calculate totals and for dynamic aggregation.",source:"@site/docs/common-workflows/modeling/manage-subtotal-objects/manage-subtotal-objects.md",sourceDirName:"common-workflows/modeling/manage-subtotal-objects",slug:"/common-workflows/modeling/manage-subtotal-objects/",permalink:"/rest-api-docs/common-workflows/modeling/manage-subtotal-objects/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-subtotal-objects/manage-subtotal-objects.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1695919031,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{title:"Manage subtotal objects",description:"Subtotals allow you to dynamically control the computation and display of report data within desired groupings. Subtotals are applied to report metrics to calculate totals and for dynamic aggregation."},sidebar:"tutorialSidebar",previous:{title:"Modify a security filter's member",permalink:"/rest-api-docs/common-workflows/modeling/manage-security-filter-objects/modify-a-security-filters-member"},next:{title:"Retrieve a subtotal's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-subtotal-objects/retrieve-a-subtotals-definition"}},m={},u=[],d=(n="Available",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),f={toc:u};function b(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(d,{since:"2021 Update 5",mdxType:"Available"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try these workflows with ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-0e8e2533-03d6-4235-8aa0-6aef1cc2e723?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"Subtotals allow you to dynamically control the computation and display of report data within desired groupings. Subtotals are applied to report metrics to calculate totals and for dynamic aggregation."),(0,i.kt)("p",null,"You can use REST\u202fAPI requests retrieve, create, and update the subtotal objects through the Modeling service:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-subtotal-objects/retrieve-a-subtotals-definition"},"Retrieve a Subtotal's Definition")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-subtotal-objects/retrieve-a-subtotals-definition-within-a-changeset"},"Retrieve a Subtotal's Definition within a Changeset")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-subtotal-objects/create-a-subtotal-within-a-changeset"},"Create a Subtotal within a Changeset")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-subtotal-objects/update-a-subtotal-within-a-changeset"},"Update a Subtotal within a Changeset"))),(0,i.kt)("p",null,"There are three important fields in the API response body defined for a subtotal:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"information"),": Stores the basic subtotal information include ",(0,i.kt)("inlineCode",{parentName:"p"},"dateCreated"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dateModified"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"versionId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"primaryLocale"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"objectId"),",",(0,i.kt)("inlineCode",{parentName:"p"},"subType"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"."),(0,i.kt)("p",{parentName:"li"},"For a subtotal, ",(0,i.kt)("inlineCode",{parentName:"p"},"subType")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"metric_subtotal"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"expression"),": Stores the aggregation types and targets defined in the subtotal either using single-value functions or group-value functions."),(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u2139\ufe0f ",(0,i.kt)("strong",{parentName:"p"},"Info")),(0,i.kt)("p",{parentName:"admonition"},"Tokens are a semi-structured representation of a MicroStrategy expression text that includes object references. When the subtotal\u2019s expression is represented as tokens, the text is broken down into pieces, or tokens, with information about what these pieces represent in the metadata.")),(0,i.kt)("p",{parentName:"li"},"A subtotal's \u201cexpression\" is presented in the following formats:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'"text": A human-readable, but non-parsable text, describing a subtotal\'s expression.'),(0,i.kt)("li",{parentName:"ul"},'"tree": A tree data structure fully defining the subtotal\'s expression.'),(0,i.kt)("li",{parentName:"ul"},'"tokens": A list of parsed tokens that define a subtotal\'s expression. Generating tokens requires additional time.')),(0,i.kt)("p",{parentName:"li"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"showExpressionAs"),' is omitted, only "text" formats are returned.'),(0,i.kt)("p",{parentName:"li"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"showExpressionAs")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"tree"),', "text" and "tree" formats are returned.'),(0,i.kt)("p",{parentName:"li"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"showExpressionAs")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"tokens"),', "text" and "tokens" formats are returned.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"dimty"),": Contains a list of ",(0,i.kt)("inlineCode",{parentName:"p"},"DimtyUnit"),", which describes the level at which the subtotal can be calculated."))),(0,i.kt)("p",null,"For more information about the Modeling service, see ",(0,i.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/InstallConfig/en-us/Content/modeling_service.htm"},"Configuring the Modeling Service"),"."))}b.isMDXComponent=!0}}]);