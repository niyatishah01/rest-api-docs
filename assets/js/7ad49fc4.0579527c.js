"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[9655],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,b=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(b,i(i({ref:t},d),{},{components:n})):r.createElement(b,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18251:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var r,a=n(83117),o=n(80102),i=(n(67294),n(3905)),p=["components"],s={title:"Get attribute along with its advanced properties",sidebar_label:"Get attribute definition and advanced properties",description:"Get attribute definition and advanced properties."},l=void 0,d={unversionedId:"common-workflows/modeling/manage-attribute-objects/get-attribute-with-advanced-properties",id:"common-workflows/modeling/manage-attribute-objects/get-attribute-with-advanced-properties",title:"Get attribute along with its advanced properties",description:"Get attribute definition and advanced properties.",source:"@site/docs/common-workflows/modeling/manage-attribute-objects/get-attribute-with-advanced-properties.md",sourceDirName:"common-workflows/modeling/manage-attribute-objects",slug:"/common-workflows/modeling/manage-attribute-objects/get-attribute-with-advanced-properties",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/get-attribute-with-advanced-properties",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-attribute-objects/get-attribute-with-advanced-properties.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1677861063,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{title:"Get attribute along with its advanced properties",sidebar_label:"Get attribute definition and advanced properties",description:"Get attribute definition and advanced properties."},sidebar:"tutorialSidebar",previous:{title:"Get applicable properties for an attribute",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/get-attribute-applicable-advanced-properties"},next:{title:"Modify value of an advanced property of the attribute",permalink:"/rest-api-docs/common-workflows/modeling/manage-attribute-objects/update-attribute-advanced-property"}},c={},u=[],m=(r="Available",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),b={toc:u};function g(e){var t=e.components,n=(0,o.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(m,{since:"2021 Update 9",mdxType:"Available"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-df3dd3da-b225-4637-93dd-c41579ce1074?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"This workflow sample demonstrates how to retrieve an attribute's definition and its advanced properties."),(0,i.kt)("p",null,"To get the advanced properties of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Age Range")," attribute, the object ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"5603951E4FE1BC04A44E44B85BBB8ED2"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Get the authorization token to execute the request with ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Get the project ID with ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,i.kt)("p",null,"Retrieve the advanced properties with ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/model/attributes/{attributeId}?showAdvancedProperties=true"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"showAdvancedProperty=true")," query parameter is mandatory for the API to return the list of advanced properties. When ",(0,i.kt)("inlineCode",{parentName:"p"},'"showAdvancedProperty"')," query parameter is not provided or is set to ",(0,i.kt)("inlineCode",{parentName:"p"},'"false"'),", the list of advanced property won't be included in the API response."),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "5u349u1en5igufluj1tfbp71t0"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/attributes/5603951E4FE1BC04A44E44B85BBB8ED2?showAdvancedProperties=true" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: 5u349u1en5igufluj1tfbp71t0" \\\n-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,"You can see the attribute and its advanced properties in the response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2006-11-30T23:59:56.000Z",\n    "dateModified": "2023-02-06T11:49:40.206Z",\n    "versionId": "5574CA56624FE746076270BDA248A420",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "5603951E4FE1BC04A44E44B85BBB8ED2",\n    "subType": "attribute",\n    "name": "Age Range"\n  },\n  "forms": [\n    {\n      "id": "45C11FA478E745FEA08D781CEA190FE5",\n      "name": "ID",\n      "category": "ID",\n      "type": "system",\n      "displayFormat": "number",\n      "dataType": {\n        "type": "integer",\n        "precision": 4,\n        "scale": -2147483648\n      },\n      "expressions": [\n        {\n          "expressionId": "A8E63C9AC5D848CC9686C59078FB0BD0",\n          "expression": {\n            "text": "agerange_id"\n          },\n          "tables": [\n            {\n              "objectId": "ED8A34EC483EA8946D2A248FEF9A116B",\n              "subType": "logical_table",\n              "name": "LU_AGERANGE"\n            },\n            {\n              "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n              "subType": "logical_table",\n              "name": "LU_CUSTOMER"\n            }\n          ]\n        }\n      ],\n      "alias": "agerange_id",\n      "lookupTable": {\n        "objectId": "ED8A34EC483EA8946D2A248FEF9A116B",\n        "subType": "logical_table",\n        "name": "LU_AGERANGE"\n      }\n    },\n    {\n      "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n      "name": "DESC",\n      "category": "DESC",\n      "type": "system",\n      "isMultilingual": true,\n      "displayFormat": "text",\n      "dataType": {\n        "type": "fixed_length_string",\n        "precision": 20,\n        "scale": -2147483648\n      },\n      "expressions": [\n        {\n          "expressionId": "D4DB40D9A6FF4643974271E72C92CB4F",\n          "expression": {\n            "text": "agerange_desc"\n          },\n          "tables": [\n            {\n              "objectId": "ED8A34EC483EA8946D2A248FEF9A116B",\n              "subType": "logical_table",\n              "name": "LU_AGERANGE"\n            }\n          ]\n        }\n      ],\n      "alias": "agerange_desc",\n      "lookupTable": {\n        "objectId": "ED8A34EC483EA8946D2A248FEF9A116B",\n        "subType": "logical_table",\n        "name": "LU_AGERANGE"\n      }\n    }\n  ],\n  "attributeLookupTable": {\n    "objectId": "ED8A34EC483EA8946D2A248FEF9A116B",\n    "subType": "logical_table",\n    "name": "LU_AGERANGE"\n  },\n  "keyForm": {\n    "id": "45C11FA478E745FEA08D781CEA190FE5",\n    "name": "ID"\n  },\n  "displays": {\n    "reportDisplays": [\n      {\n        "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n        "name": "DESC"\n      }\n    ],\n    "browseDisplays": [\n      {\n        "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n        "name": "DESC"\n      }\n    ]\n  },\n  "sorts": {},\n  "relationships": [\n    {\n      "parent": {\n        "objectId": "5603951E4FE1BC04A44E44B85BBB8ED2",\n        "subType": "attribute",\n        "name": "Age Range"\n      },\n      "child": {\n        "objectId": "8D679D3C11D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Customer"\n      },\n      "relationshipTable": {\n        "objectId": "8D67935611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_CUSTOMER"\n      },\n      "relationshipType": "one_to_many"\n    }\n  ],\n  "advancedProperties": {\n    "vldbProperties": {\n      "[VLDB Create].[Attribute ID Constraint]": {\n        "name": "Attribute ID Constraint",\n        "type": "string",\n        "value": "",\n        "resolvedLocation": "default",\n        "isInherited": true\n      },\n      "[VLDB Select].[Do Case Insensitive Comparison for Strings in Filters]": {\n        "name": "Do Case Insensitive Comparison for Strings in Filters",\n        "type": "int32",\n        "value": "0",\n        "resolvedLocation": "default",\n        "isInherited": true\n      },\n      "[VLDB Select].[Incomplete Lookup Table]": {\n        "name": "Incomplete Lookup Table",\n        "type": "int32",\n        "value": "0",\n        "resolvedLocation": "default",\n        "isInherited": true\n      },\n      "[VLDB Select].[No Nulls All In Lookup In Attribute For Cube Reuse]": {\n        "name": "No Nulls All In Lookup In Attribute For Cube Reuse",\n        "type": "int32",\n        "value": "0",\n        "resolvedLocation": "default",\n        "isInherited": true\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Response Code: 200 (The attribute's definition and its advanced properties were returned successfully.)"))}g.isMDXComponent=!0}}]);