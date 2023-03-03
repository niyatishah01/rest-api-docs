"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[579],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96617:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var r,a=n(83117),i=n(80102),o=(n(67294),n(3905)),s=["components"],l={title:"Update a filter's definition",sidebar_label:"Update a filter's definition",description:"This workflow sample demonstrates how to update a filter's definition through the Modeling service."},p=void 0,c={unversionedId:"common-workflows/modeling/manage-filter-objects/update-a-filters-definition",id:"common-workflows/modeling/manage-filter-objects/update-a-filters-definition",title:"Update a filter's definition",description:"This workflow sample demonstrates how to update a filter's definition through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-filter-objects/update-a-filters-definition.md",sourceDirName:"common-workflows/modeling/manage-filter-objects",slug:"/common-workflows/modeling/manage-filter-objects/update-a-filters-definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-filter-objects/update-a-filters-definition",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-filter-objects/update-a-filters-definition.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1677861063,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{title:"Update a filter's definition",sidebar_label:"Update a filter's definition",description:"This workflow sample demonstrates how to update a filter's definition through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a filter object with a custom expression",permalink:"/rest-api-docs/common-workflows/modeling/manage-filter-objects/create-a-filter-object-with-a-custom-expression"},next:{title:"Manage metric objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-metric-objects/"}},d={},m=[{value:"Update the filter&#39;s definition using PUT /api/model/filters/{FilterId}",id:"update-the-filters-definition-using-put-apimodelfiltersfilterid",level:2}],u=(r="Available",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),f={toc:m};function g(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u,{since:"2021",mdxType:"Available"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-5bb60de6-52e2-43c4-87bc-b404125f96ad?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"This workflow sample demonstrates how to update a filter's definition through the Modeling service."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a changeset using ",(0,o.kt)("inlineCode",{parentName:"li"},"POST /api/model/changesets")),(0,o.kt)("li",{parentName:"ol"},"Update the filter's definition using ",(0,o.kt)("a",{parentName:"li",href:"#update-the-filters-definition-using-put-apimodelfiltersfilterid"},(0,o.kt)("inlineCode",{parentName:"a"},"PUT /api/model/filters/{FilterId}"))),(0,o.kt)("li",{parentName:"ol"},"Commit the changeset using ",(0,o.kt)("inlineCode",{parentName:"li"},"POST /api/model/changesets/{changesetId}/commit")),(0,o.kt)("li",{parentName:"ol"},"Delete the changeset using ",(0,o.kt)("inlineCode",{parentName:"li"},"DELETE /api/model/changesets/{changesetId}"))),(0,o.kt)("p",null,'You want to update the definition of the "Year > 2015" filter and rename it to "Year > 2020". The filter is in the MicroStrategy Tutorial project. The object ID of the filter is 8018C24FEBC4406CB9E36838C01C82D1. The project ID is B7CA92F04B9FAE8D941C3E9B7E0CD754'),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("p",null,"Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),"."),(0,o.kt)("h2",{id:"update-the-filters-definition-using-put-apimodelfiltersfilterid"},"Update the filter's definition using ",(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Filters/ms-postFilter"},"PUT /api/model/filters/{FilterId}")),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "frbicqfk7btoggg5bnu450hrqt"\n"X-MSTR-MS-Changeset": "C4F6B0E4C87F46EF9B6C5690DFFF87C1"\n')),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "name": "Year > 2020"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateTree": {\n        "function": "greater",\n        "parameters": [\n          {\n            "parameterType": "constant",\n            "constant": {\n              "type": "double",\n              "value": "2020"\n            }\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "https://demo.cloud.microstrategy.com/MicroStrategyLibrary/api/model/filters/8018C24FEBC4406CB9E36838C01C82D1" -H "accept: application/json" -H "X-MSTR-AuthToken: frbicqfk7btoggg5bnu450hrqt" -H "X-MSTR-MS-Changeset: C4F6B0E4C87F46EF9B6C5690DFFF87C1" -H "Content-Type: application/json" -d \'{"information":{"name":"Year > 2020"},"qualification":{"tree":{"type":"predicate_form_qualification","predicateTree":{"function":"greater","parameters":[{"parameterType":"constant","constant":{"type":"double","value":"2020"}}],"attribute":{"objectId":"8D679D5111D3E4981000E787EC6DE8A4","subType":"attribute","name":"Year"},"form":{"objectId":"45C11FA478E745FEA08D781CEA190FE5","subType":"attribute_form_system","name":"ID"}}}}}\'\n')),(0,o.kt)("p",null,"Sample Response Body: You can view the filter's new definition in the body of the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2020-11-17T17:37:35.858Z",\n    "dateModified": "2020-11-17T17:43:23.784Z",\n    "versionId": "63E6667411EB28FC2AC10080EFB54002",\n    "primaryLocale": "en-US",\n    "objectId": "8018C24FEBC4406CB9E36838C01C82D1",\n    "subType": "filter",\n    "name": "Year > 2020"\n  },\n  "qualification": {\n    "text": "Year (ID) > 2020",\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateId": "89AECC7DAB354B4A933E83E33928C670",\n      "predicateText": "Year (ID) > 2020",\n      "predicateTree": {\n        "function": "greater",\n        "parameters": [\n          {\n            "parameterType": "constant",\n            "constant": {\n              "type": "double",\n              "value": "2020.0"\n            }\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Response Code: 200 (The filter's definition is updated successfully in the changeset.)"))}g.isMDXComponent=!0}}]);