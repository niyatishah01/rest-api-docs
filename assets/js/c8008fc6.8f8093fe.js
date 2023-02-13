"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8550],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(n),m=r,d=h["".concat(p,".").concat(m)]||h[m]||u[m]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3461:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return h}});var a,r=n(3117),i=n(102),o=(n(7294),n(3905)),s=["components"],p={title:"Retrieve an attribute's relationships within a changeset",sidebar_label:"Retrieve an attribute's relationships within a changeset",description:"This workflow sample demonstrates how to retrieve an attribute's relationships within a changeset."},l=void 0,c={unversionedId:"common-workflows/modeling/manage-attribute-relationships/retrieve-an-attributes-relationships-within-a-changeset",id:"common-workflows/modeling/manage-attribute-relationships/retrieve-an-attributes-relationships-within-a-changeset",title:"Retrieve an attribute's relationships within a changeset",description:"This workflow sample demonstrates how to retrieve an attribute's relationships within a changeset.",source:"@site/docs/common-workflows/modeling/manage-attribute-relationships/retrieve-an-attributes-relationships-within-a-changeset.md",sourceDirName:"common-workflows/modeling/manage-attribute-relationships",slug:"/common-workflows/modeling/manage-attribute-relationships/retrieve-an-attributes-relationships-within-a-changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-relationships/retrieve-an-attributes-relationships-within-a-changeset",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-attribute-relationships/retrieve-an-attributes-relationships-within-a-changeset.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1676308226,formattedLastUpdatedAt:"Feb 13, 2023",frontMatter:{title:"Retrieve an attribute's relationships within a changeset",sidebar_label:"Retrieve an attribute's relationships within a changeset",description:"This workflow sample demonstrates how to retrieve an attribute's relationships within a changeset."},sidebar:"tutorialSidebar",previous:{title:"Retrieve an attribute's relationships",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-relationships/retrieve-an-attributes-relationships"},next:{title:"Update an attribute's relationships",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-relationships/update-an-attributes-relationships"}},u={},h=[{value:"Get an attribute&#39;s relationships within a changeset",id:"get-an-attributes-relationships-within-a-changeset",level:2}],m=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),d={toc:h};function b(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(m,{since:"2021 Update 1",mdxType:"Available"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-8b42c446-de96-4899-b3c1-005f25702596?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"This workflow sample demonstrates how to retrieve an attribute's relationships within a changeset."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets see ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),".")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a changeset."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#get-an-attributes-relationships-within-a-changeset"},"Get an attribute's relationships within a changeset.")),(0,o.kt)("li",{parentName:"ol"},"Delete the changeset.")),(0,o.kt)("p",null,"You want to get the relationships of the ",(0,o.kt)("inlineCode",{parentName:"p"},'"Month"')," attribute object. The object ID of the attribute is ",(0,o.kt)("inlineCode",{parentName:"p"},"8D679D4411D3E4981000E787EC6DE8A4")," in the MicroStrategy Tutorial project. The project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("h2",{id:"get-an-attributes-relationships-within-a-changeset"},"Get an attribute's relationships within a changeset"),(0,o.kt)("p",null,"Use ","[GET /api/model/systemHierarchy/attributes/{attributeId}/relationships]","(",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System")," Hierarchy/ms-getAttributeRelationships)."),(0,o.kt)("p",null,"You want to get the relationship of the ",(0,o.kt)("inlineCode",{parentName:"p"},'"Month"')," attribute object. The object ID of the attribute is ",(0,o.kt)("inlineCode",{parentName:"p"},"8D679D4411D3E4981000E787EC6DE8A4")," in the MicroStrategy Tutorial project. The project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "ouddou5qdd421ndfpjqd6ssman"\n"X-MSTR-MS-Changeset": "FA282B2D8EFD4327A652FE09B32A439D"\n')),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/systemHierarchy/attributes/8D679D4411D3E4981000E787EC6DE8A4/relationships" -H "accept: application/json" -H "X-MSTR-AuthToken: ouddou5qdd421ndfpjqd6ssman" -H "X-MSTR-MS-Changeset: FA282B2D8EFD4327A652FE09B32A439D"\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,"You can view the attribute's relationship in the body of the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "relationships": [\n    {\n      "parent": {\n        "objectId": "8D679D4511D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month of Year"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      },\n      "relationshipTable": {\n        "objectId": "8D67938011D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_MONTH"\n      },\n      "relationshipType": "one_to_many"\n    },\n    {\n      "parent": {\n        "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Quarter"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      },\n      "relationshipTable": {\n        "objectId": "8D67938011D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_MONTH"\n      },\n      "relationshipType": "one_to_many"\n    },\n    {\n      "parent": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      },\n      "child": {\n        "objectId": "96ED3EC811D5B117C000E78A4CC5F24F",\n        "subType": "attribute",\n        "name": "Day"\n      },\n      "relationshipTable": {\n        "objectId": "24C30AD611D5AEC9C000E38A4CC5F24F",\n        "subType": "logical_table",\n        "name": "LU_DAY"\n      },\n      "relationshipType": "one_to_many"\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Response Code: 200 (The attribute's relationships are returned successfully.)"))}b.isMDXComponent=!0}}]);