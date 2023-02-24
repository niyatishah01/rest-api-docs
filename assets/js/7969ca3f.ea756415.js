"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6072],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=m(a),d=r,f=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var m=2;m<o;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3996:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n,r=a(3117),o=a(102),i=(a(7294),a(3905)),s=["components"],l={title:"Manage base formula objects",description:"Base formulas are mathematical expressions created using existing facts. They can be re-used to build any number of metrics. You can use REST\u202fAPI requests to retrieve, create, and update the base formula objects through the Modeling service."},m=void 0,p={unversionedId:"common-workflows/modeling/manage-base-formula-objects/manage-base-formula-objects",id:"common-workflows/modeling/manage-base-formula-objects/manage-base-formula-objects",title:"Manage base formula objects",description:"Base formulas are mathematical expressions created using existing facts. They can be re-used to build any number of metrics. You can use REST\u202fAPI requests to retrieve, create, and update the base formula objects through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-base-formula-objects/manage-base-formula-objects.md",sourceDirName:"common-workflows/modeling/manage-base-formula-objects",slug:"/common-workflows/modeling/manage-base-formula-objects/",permalink:"/rest-api-docs/common-workflows/modeling/manage-base-formula-objects/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-base-formula-objects/manage-base-formula-objects.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1677268684,formattedLastUpdatedAt:"Feb 24, 2023",frontMatter:{title:"Manage base formula objects",description:"Base formulas are mathematical expressions created using existing facts. They can be re-used to build any number of metrics. You can use REST\u202fAPI requests to retrieve, create, and update the base formula objects through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Update an attribute's relationships",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-relationships/update-an-attributes-relationships"},next:{title:"Retrieve a base formula's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-base-formula-objects/retrieve-a-base-formulas-definition"}},c={},u=[],d=(n="Available",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),f={toc:u};function b(e){var t=e.components,a=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(d,{since:"2021 Update 5",mdxType:"Available"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try these workflows with ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-cf953972-3d9d-4347-b253-5d89e40c088c?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"Base formulas are mathematical expressions created using existing facts. They can be re-used to build any number of metrics."),(0,i.kt)("p",null,"You can use REST\u202fAPI requests to retrieve, create, and update the base formula objects through the Modeling service:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-base-formula-objects/retrieve-a-base-formulas-definition"},"Retrieve a base formula's definition")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-base-formula-objects/retrieve-a-base-formulas-definition-within-a-changeset"},"Retrieve a base formula's definition within a changeset")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-base-formula-objects/create-a-base-formulas-definition-within-a-changeset"},"Create a base formula's definition within a changeset")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/manage-base-formula-objects/update-a-base-formulas-definition-within-a-changeset"},"Update a base formula's definition within a changeset"))),(0,i.kt)("p",null,"There are two important fields in the API response body defined for a base formula:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"information"),": Stores the basic information of a base formula's information including ",(0,i.kt)("inlineCode",{parentName:"p"},"dateCreated"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dateModified"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"versionId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"primaryLocale"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"objectId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"subType"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"."),(0,i.kt)("p",{parentName:"li"},"For a base formula, ",(0,i.kt)("inlineCode",{parentName:"p"},"subType")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"agg_metric"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"expression"),": Stored as simple base formulas without any dimensionality, conditionality, or subtotals. They can be reused to create any number of simple or complex metrics."),(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u2139\ufe0f ",(0,i.kt)("strong",{parentName:"p"},"Info")),(0,i.kt)("p",{parentName:"admonition"},"Tokens are a semi-structured representation of a MicroStrategy expression text that includes object references. When the base formula\u2019s expression is represented as tokens, the text is broken down into pieces, or tokens, with information about what these pieces represent in the metadata.")),(0,i.kt)("p",{parentName:"li"},"A base formula's \u201cexpression\" is presented in the following formats:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'"text": A human-readable, but non-parsable text, describing a base formula\'s expression.'),(0,i.kt)("li",{parentName:"ul"},'"tree": A tree data structure fully defining the base formula\'s expression.'),(0,i.kt)("li",{parentName:"ul"},'"tokens": A list of parsed tokens that define a base formula\'s expression. Generating tokens requires additional time.')),(0,i.kt)("p",{parentName:"li"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"showExpressionAs"),' is omitted, only "text" formats are returned.'),(0,i.kt)("p",{parentName:"li"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"showExpressionAs")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"tree"),', "text" and "tree" formats are returned.'),(0,i.kt)("p",{parentName:"li"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"showExpressionAs")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"tokens"),', "text" and "tokens" formats are returned.'))),(0,i.kt)("p",null,"For more information about the Modeling service, see ",(0,i.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/InstallConfig/en-us/Content/modeling_service.htm"},"Configuring the Modeling Service"),"."))}b.isMDXComponent=!0}}]);