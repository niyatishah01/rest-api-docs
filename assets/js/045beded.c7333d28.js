"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1511],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84391:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var r,i=n(83117),a=n(80102),o=(n(67294),n(3905)),s=["components"],c={title:"Update a security filter definition",sidebar_label:"Update a security filter definition",description:"This workflow sample demonstrates how to update a security filter definition through the Modeling service."},l=void 0,p={unversionedId:"common-workflows/modeling/manage-security-filter-objects/update-a-security-filter-definition",id:"common-workflows/modeling/manage-security-filter-objects/update-a-security-filter-definition",title:"Update a security filter definition",description:"This workflow sample demonstrates how to update a security filter definition through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-security-filter-objects/update-a-security-filter-definition.md",sourceDirName:"common-workflows/modeling/manage-security-filter-objects",slug:"/common-workflows/modeling/manage-security-filter-objects/update-a-security-filter-definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-security-filter-objects/update-a-security-filter-definition",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-security-filter-objects/update-a-security-filter-definition.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1680286823,formattedLastUpdatedAt:"Mar 31, 2023",frontMatter:{title:"Update a security filter definition",sidebar_label:"Update a security filter definition",description:"This workflow sample demonstrates how to update a security filter definition through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a security filter object",permalink:"/rest-api-docs/common-workflows/modeling/manage-security-filter-objects/create-a-security-filter-object"},next:{title:"Create a security filter object using a custom expression",permalink:"/rest-api-docs/common-workflows/modeling/manage-security-filter-objects/create-a-security-filter-object-using-a-custom-expression"}},u={},d=[{value:"2. Update the security filter&#39;s definition using PUT /api/model/securityFilters/{securityFilterId}",id:"2-update-the-security-filters-definition-using-put-apimodelsecurityfilterssecurityfilterid",level:2}],m=(r="Available",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),f={toc:d};function y(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(m,{since:"2021 Update 1",mdxType:"Available"}),(0,o.kt)("p",null,"This workflow sample demonstrates how to update a security filter definition through the Modeling service."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Create a changeset using ",(0,o.kt)("inlineCode",{parentName:"li"},"POST /api/model/changesets")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#2-update-the-security-filters-definition-using-put-apimodelsecurityfilterssecurityfilterid"},"2. Update the security filter's definition using ",(0,o.kt)("inlineCode",{parentName:"a"},"PUT /api/model/securityFilters/{securityFilterId}"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li",start:3},(0,o.kt)("li",{parentName:"ol"},"Commit the changeset using ",(0,o.kt)("inlineCode",{parentName:"li"},"POST /api/model/changesets/{changesetId}/commit"),"](#3-commit-the-changeset-using-post-apimodelchangesetschangesetidcommit)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li",start:4},(0,o.kt)("li",{parentName:"ol"},"Delete the changeset using ",(0,o.kt)("inlineCode",{parentName:"li"},"DELETE /api/model/changesets/{changesetId}"))))),(0,o.kt)("p",null,"You want to update the definition of the ",(0,o.kt)("inlineCode",{parentName:"p"},'"Year > 2015"')," security filter object with a new definition of ",(0,o.kt)("inlineCode",{parentName:"p"},'"Year@ID > 2020"')," and a new object name of ",(0,o.kt)("inlineCode",{parentName:"p"},'"Year > 2020"'),". The object ID of the security filter is ",(0,o.kt)("inlineCode",{parentName:"p"},"8018C24FEBC4406CB9E36838C01C82D1"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("p",null,"Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),"."),(0,o.kt)("h2",{id:"2-update-the-security-filters-definition-using-put-apimodelsecurityfilterssecurityfilterid"},"2. Update the security filter's definition using ",(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Security%20Filters/ms-postSecurityFilter"},"PUT /api/model/securityFilters/{securityFilterId}")),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "frbicqfk7btoggg5bnu450hrqt"\n"X-MSTR-MS-Changeset": "C4F6B0E4C87F46EF9B6C5690DFFF87C1"\n')),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "name": "Year > 2020"\n  },\n  "qualification": {\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateTree": {\n        "function": "greater",\n        "parameters": [\n          {\n            "parameterType": "constant",\n            "constant": {\n              "type": "double",\n              "value": "2020"\n            }\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "https://demo.cloud.microstrategy.com/MicroStrategyLibrary/api/model/securityFilters/8018C24FEBC4406CB9E36838C01C82D1" -H "accept: application/json" -H "X-MSTR-AuthToken: frbicqfk7btoggg5bnu450hrqt" -H "X-MSTR-MS-Changeset: C4F6B0E4C87F46EF9B6C5690DFFF87C1" -H "Content-Type: application/json" -d \'{"information":{"name":"Year > 2020"},"qualification":{"tree":{"type":"predicate_form_qualification","predicateTree":{"function":"greater","parameters":[{"parameterType":"constant","constant":{"type":"double","value":"2020"}}],"attribute":{"objectId":"8D679D5111D3E4981000E787EC6DE8A4","subType":"attribute","name":"Year"},"form":{"objectId":"45C11FA478E745FEA08D781CEA190FE5","subType":"attribute_form_system","name":"ID"}}}}}\'\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,"You can view the security filter's definition in the body of the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2020-11-17T17:37:35.858Z",\n    "dateModified": "2020-11-17T17:43:23.784Z",\n    "versionId": "63E6667411EB28FC2AC10080EFB54002",\n    "primaryLocale": "en-US",\n    "objectId": "8018C24FEBC4406CB9E36838C01C82D1",\n    "subType": "filter",\n    "name": "Year > 2020"\n  },\n  "qualification": {\n    "text": "Year (ID) > 2020",\n    "tree": {\n      "type": "predicate_form_qualification",\n      "predicateId": "89AECC7DAB354B4A933E83E33928C670",\n      "predicateText": "Year (ID) > 2020",\n      "predicateTree": {\n        "function": "greater",\n        "parameters": [\n          {\n            "parameterType": "constant",\n            "constant": {\n              "type": "double",\n              "value": "2020.0"\n            }\n          }\n        ],\n        "attribute": {\n          "objectId": "8D679D5111D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Year"\n        },\n        "form": {\n          "objectId": "45C11FA478E745FEA08D781CEA190FE5",\n          "subType": "attribute_form_system",\n          "name": "ID"\n        }\n      }\n    }\n  },\n  "topLevel": [],\n  "bottomLevel": []\n}\n')),(0,o.kt)("p",null,"Response Code: 200 (The security filter's definition is updated successfully in the changeset.)"))}y.isMDXComponent=!0}}]);