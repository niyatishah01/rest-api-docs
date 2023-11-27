"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5208],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,u=d["".concat(l,".").concat(m)]||d[m]||f[m]||a;return n?r.createElement(u,o(o({ref:t},p),{},{components:n})):r.createElement(u,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59426:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r,i=n(83117),a=n(80102),o=(n(67294),n(3905)),s=["components"],l={title:"Retrieve a filter's definition within a changeset",sidebar_label:"Retrieve a filter's definition within a changeset",description:"This workflow sample demonstrates how to retrieve a filter's definition within a changeset."},c=void 0,p={unversionedId:"common-workflows/modeling/manage-filter-objects/retrieve-a-filters-definition-within-a-changeset",id:"common-workflows/modeling/manage-filter-objects/retrieve-a-filters-definition-within-a-changeset",title:"Retrieve a filter's definition within a changeset",description:"This workflow sample demonstrates how to retrieve a filter's definition within a changeset.",source:"@site/docs/common-workflows/modeling/manage-filter-objects/retrieve-a-filters-definition-within-a-changeset.md",sourceDirName:"common-workflows/modeling/manage-filter-objects",slug:"/common-workflows/modeling/manage-filter-objects/retrieve-a-filters-definition-within-a-changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-filter-objects/retrieve-a-filters-definition-within-a-changeset",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-filter-objects/retrieve-a-filters-definition-within-a-changeset.md",tags:[],version:"current",lastUpdatedBy:"kezhou-mstr",lastUpdatedAt:1701121876,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"Retrieve a filter's definition within a changeset",sidebar_label:"Retrieve a filter's definition within a changeset",description:"This workflow sample demonstrates how to retrieve a filter's definition within a changeset."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a filter's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-filter-objects/retrieve-a-filters-definition"},next:{title:"Create a filter object",permalink:"/rest-api-docs/common-workflows/modeling/manage-filter-objects/create-a-filter-object"}},f={},d=[{value:"Get a filter definition within a changeset",id:"get-a-filter-definition-within-a-changeset",level:2}],m=(r="Available",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),u={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(m,{since:"2021",mdxType:"Available"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-67e58dfc-a902-47a6-9166-a26e308ef644?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"This workflow sample demonstrates how to retrieve a filter's definition within a changeset."),(0,o.kt)("p",null,"Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),". If you plan to use the response of ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/model/filters/{filterId}")," to create a new filter or update the filter's definition, it is recommended to associate all requests to one changeset."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a changeset."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#get-a-filter-definition-within-a-changeset"},"Get the filter's definition within a changeset.")),(0,o.kt)("li",{parentName:"ol"},"Delete the changeset.")),(0,o.kt)("p",null,'You want to get the definition of the "Year > 2015" filter object. The object ID of the filter is ',(0,o.kt)("inlineCode",{parentName:"p"},"8018C24FEBC4406CB9E36838C01C82D1")," in the MicroStrategy Tutorial project. The project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),".")),(0,o.kt)("h2",{id:"get-a-filter-definition-within-a-changeset"},"Get a filter definition within a changeset"),(0,o.kt)("p",null,"Endpoint: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Filters/ms-getFilterDetails"},"GET /api/model/filters/{filterId}")),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/filters/8018C24FEBC4406CB9E36838C01C82D1" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,"You can view the filter's definition in the body of the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2020-11-17T16:42:39.776Z",\n    "dateModified": "2020-11-17T16:42:57.268Z",\n    "versionId": "F253FD1211EB28F32AE10080EFC56102",\n    "primaryLocale": "en-US",\n    "objectId": "8018C24FEBC4406CB9E36838C01C82D1",\n    "subType": "filter",\n    "name": "Year > 2015"\n  },\n  "qualification": {\n    "text": "Year (ID) > 2015",\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateId": "62EE53C755F64508BAEE99989E9EACCC",\n      "predicateText": "Year (ID) > 2015",\n      "predicateTree": {\n        "function": "greater",\n        "parameters": [\n          {\n            "parameterType": "constant",\n            "constant": {\n              "type": "double",\n              "value": "2015.0"\n            }\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Response Code: 200 (The filter's definition is returned successfully.)"))}h.isMDXComponent=!0}}]);