"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8450],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||l[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3140:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return u}});var r,a=n(3117),o=n(102),i=(n(7294),n(3905)),s=["components"],c={title:"Get datasource definition and advanced properties",description:"The workflow involves getting datasource definition along with its advanced properties"},p=void 0,d={unversionedId:"common-workflows/administration/datasource-management/get-datasource-with-advanced-properties",id:"common-workflows/administration/datasource-management/get-datasource-with-advanced-properties",title:"Get datasource definition and advanced properties",description:"The workflow involves getting datasource definition along with its advanced properties",source:"@site/docs/common-workflows/administration/datasource-management/get-datasource-with-advanced-properties.md",sourceDirName:"common-workflows/administration/datasource-management",slug:"/common-workflows/administration/datasource-management/get-datasource-with-advanced-properties",permalink:"/rest-api-docs/common-workflows/administration/datasource-management/get-datasource-with-advanced-properties",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/datasource-management/get-datasource-with-advanced-properties.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1676308226,formattedLastUpdatedAt:"Feb 13, 2023",frontMatter:{title:"Get datasource definition and advanced properties",description:"The workflow involves getting datasource definition along with its advanced properties"},sidebar:"tutorialSidebar",previous:{title:"Get applicable properties for a datasource",permalink:"/rest-api-docs/common-workflows/administration/datasource-management/get-datasource-applicable-advanced-properties"},next:{title:"Modify value of an advanced property",permalink:"/rest-api-docs/common-workflows/administration/datasource-management/update-datasource-advanced-property"}},l={},u=[],m=(r="Available",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),f={toc:u};function g(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(m,{since:"2021 Update 8",mdxType:"Available"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-ef4e5e88-1bc6-4c9a-a15a-6fef6d399bb8?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"This workflow sample demonstrates how to retrieve datasource's definition and its advanced properties."),(0,i.kt)("p",null,"You want to get the applicable properties of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Amazon Athena")," datasource object. The object ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"31B4EC39D7F94875AB4E2785C8BBA26E"),". :::info"),(0,i.kt)("p",null,"Obtain the authorization token needed to execute the request using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",null,"Obtain the project ID from ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),"."),(0,i.kt)("p",null,":::"),(0,i.kt)("p",null,"Retrieve the advanced properties using ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/model/datasources/{datasourceId}?showAdvancedProperties=true"),"."),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "cs0intmf1fgij7ao0v2v0j48e5"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/datasources/31B4EC39D7F94875AB4E2785C8BBA26E?showAdvancedProperties=true" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: cs0intmf1fgij7ao0v2v0j48e5" \\\n-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,"You can view datasource's definition and its advanced properties in the response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2007-11-01T18:59:13.000Z",\n    "dateModified": "2022-02-10T13:24:12.000Z",\n    "versionId": "440000474A61382839A0829F1E0FD189",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "31B4EC39D7F94875AB4E2785C8BBA26E",\n    "subType": "db_role",\n    "name": "Amazon Athena"\n  },\n  "advancedProperties": {\n    "vldbProperties": {\n      "[DatamartProperties].[Insert SQLs]": {\n        "name": "Insert SQLs",\n        "type": "string",\n        "value": "",\n        "resolvedLocation": "default",\n        "isInherited": true\n      },\n      "[DatamartProperties].[Post SQLs]": {\n        "name": "Post SQLs",\n        "type": "string",\n        "value": "",\n        "resolvedLocation": "default",\n        "isInherited": true\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Response Code: 200 (The datasource's definition and its advanced properties were returned successfully.)"))}g.isMDXComponent=!0}}]);