"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6068],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),l=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=l(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),h=l(n),m=r,d=h["".concat(p,".").concat(m)]||h[m]||u[m]||i;return n?a.createElement(d,o(o({ref:e},c),{},{components:n})):a.createElement(d,o({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6366:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],s={title:"Workflow sample - Retrieve an attribute's relationships within a changeset",sidebar_label:"Retrieve an attribute's relationships within a changeset",description:"This workflow sample demonstrates how to retrieve an attribute's relationships within a changeset."},p=void 0,l={unversionedId:"common-workflows/manage-attribute-relationships/retrieve-an-attributes-relationships-within-a-changeset",id:"common-workflows/manage-attribute-relationships/retrieve-an-attributes-relationships-within-a-changeset",title:"Workflow sample - Retrieve an attribute's relationships within a changeset",description:"This workflow sample demonstrates how to retrieve an attribute's relationships within a changeset.",source:"@site/docs/common-workflows/manage-attribute-relationships/retrieve-an-attributes-relationships-within-a-changeset.md",sourceDirName:"common-workflows/manage-attribute-relationships",slug:"/common-workflows/manage-attribute-relationships/retrieve-an-attributes-relationships-within-a-changeset",permalink:"/rest-api-docs/common-workflows/manage-attribute-relationships/retrieve-an-attributes-relationships-within-a-changeset",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-attribute-relationships/retrieve-an-attributes-relationships-within-a-changeset.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1668189866,formattedLastUpdatedAt:"Nov 11, 2022",frontMatter:{title:"Workflow sample - Retrieve an attribute's relationships within a changeset",sidebar_label:"Retrieve an attribute's relationships within a changeset",description:"This workflow sample demonstrates how to retrieve an attribute's relationships within a changeset."},sidebar:"tutorialSidebar",previous:{title:"Retrieve an attribute's relationships",permalink:"/rest-api-docs/common-workflows/manage-attribute-relationships/retrieve-an-attributes-relationships"},next:{title:"Update an attribute's relationships",permalink:"/rest-api-docs/common-workflows/manage-attribute-relationships/update-an-attributes-relationships"}},c={},u=[{value:"Get an attribute&#39;s relationships within a changeset",id:"get-an-attributes-relationships-within-a-changeset",level:2}],h={toc:u};function m(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-8b42c446-de96-4899-b3c1-005f25702596?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"This workflow sample demonstrates how to retrieve an attribute's relationships within a changeset."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets see ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/changesets"},"Changesets"),".")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a changeset."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#get-an-attributes-relationships-within-a-changeset"},"Get an attribute's relationships within a changeset.")),(0,i.kt)("li",{parentName:"ol"},"Delete the changeset.")),(0,i.kt)("p",null,"You want to get the relationships of the ",(0,i.kt)("inlineCode",{parentName:"p"},'"Month"')," attribute object. The object ID of the attribute is ",(0,i.kt)("inlineCode",{parentName:"p"},"8D679D4411D3E4981000E787EC6DE8A4")," in the MicroStrategy Tutorial project. The project ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,i.kt)("h2",{id:"get-an-attributes-relationships-within-a-changeset"},"Get an attribute's relationships within a changeset"),(0,i.kt)("p",null,"Use ","[GET /api/model/systemHierarchy/attributes/{attributeId}/relationships]","(",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System")," Hierarchy/ms-getAttributeRelationships)."),(0,i.kt)("p",null,"You want to get the relationship of the ",(0,i.kt)("inlineCode",{parentName:"p"},'"Month"')," attribute object. The object ID of the attribute is ",(0,i.kt)("inlineCode",{parentName:"p"},"8D679D4411D3E4981000E787EC6DE8A4")," in the MicroStrategy Tutorial project. The project ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "ouddou5qdd421ndfpjqd6ssman"\n"X-MSTR-MS-Changeset": "FA282B2D8EFD4327A652FE09B32A439D"\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/systemHierarchy/attributes/8D679D4411D3E4981000E787EC6DE8A4/relationships" -H "accept: application/json" -H "X-MSTR-AuthToken: ouddou5qdd421ndfpjqd6ssman" -H "X-MSTR-MS-Changeset: FA282B2D8EFD4327A652FE09B32A439D"\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,"You can view the attribute's relationship in the body of the response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "relationships": [\n    {\n      "parent": {\n        "objectId": "8D679D4511D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month of Year"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      },\n      "relationshipTable": {\n        "objectId": "8D67938011D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_MONTH"\n      },\n      "relationshipType": "one_to_many"\n    },\n    {\n      "parent": {\n        "objectId": "8D679D4A11D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Quarter"\n      },\n      "child": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      },\n      "relationshipTable": {\n        "objectId": "8D67938011D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_MONTH"\n      },\n      "relationshipType": "one_to_many"\n    },\n    {\n      "parent": {\n        "objectId": "8D679D4411D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Month"\n      },\n      "child": {\n        "objectId": "96ED3EC811D5B117C000E78A4CC5F24F",\n        "subType": "attribute",\n        "name": "Day"\n      },\n      "relationshipTable": {\n        "objectId": "24C30AD611D5AEC9C000E38A4CC5F24F",\n        "subType": "logical_table",\n        "name": "LU_DAY"\n      },\n      "relationshipType": "one_to_many"\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Response Code: 200 (The attribute's relationships are returned successfully.)"))}m.isMDXComponent=!0}}]);