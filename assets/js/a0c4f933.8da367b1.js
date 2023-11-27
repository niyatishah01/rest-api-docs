"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8323],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66819:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var n,o=r(83117),i=r(80102),a=(r(67294),r(3905)),s=["components"],c={title:"Retrieve a security filter's member",sidebar_label:"Retrieve a security filter's member",description:"This workflow sample demonstrates how to get the users and user groups that the specified security filter is applied to."},l=void 0,p={unversionedId:"common-workflows/modeling/manage-security-filter-objects/retrieve-a-security-filters-member",id:"common-workflows/modeling/manage-security-filter-objects/retrieve-a-security-filters-member",title:"Retrieve a security filter's member",description:"This workflow sample demonstrates how to get the users and user groups that the specified security filter is applied to.",source:"@site/docs/common-workflows/modeling/manage-security-filter-objects/retrieve-a-security-filters-member.md",sourceDirName:"common-workflows/modeling/manage-security-filter-objects",slug:"/common-workflows/modeling/manage-security-filter-objects/retrieve-a-security-filters-member",permalink:"/rest-api-docs/common-workflows/modeling/manage-security-filter-objects/retrieve-a-security-filters-member",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-security-filter-objects/retrieve-a-security-filters-member.md",tags:[],version:"current",lastUpdatedBy:"kezhou-mstr",lastUpdatedAt:1701121876,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"Retrieve a security filter's member",sidebar_label:"Retrieve a security filter's member",description:"This workflow sample demonstrates how to get the users and user groups that the specified security filter is applied to."},sidebar:"tutorialSidebar",previous:{title:"Create a security filter object using a custom expression",permalink:"/rest-api-docs/common-workflows/modeling/manage-security-filter-objects/create-a-security-filter-object-using-a-custom-expression"},next:{title:"Modify a security filter's member",permalink:"/rest-api-docs/common-workflows/modeling/manage-security-filter-objects/modify-a-security-filters-member"}},u={},m=[],d=(n="Available",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)}),f={toc:m};function y(e){var t=e.components,r=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(d,{since:"2021 Update 1",mdxType:"Available"}),(0,a.kt)("p",null,"This workflow sample demonstrates how to get the users and user groups that the specified security filter is applied to. The object ID of the security filter is ",(0,a.kt)("inlineCode",{parentName:"p"},"8018C24FEBC4406CB9E36838C01C82D1"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,a.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,a.kt)("p",null,"Retrieve the security filter's member using ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /api/securityFilters/{id}/members"),"."),(0,a.kt)("p",null,"Sample Request Header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,a.kt)("p",null,"Sample Request Body: Empty"),(0,a.kt)("p",null,"Sample Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/securityFilters/8018C24FEBC4406CB9E36838C01C82D1/members" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,a.kt)("p",null,"Sample Response Body:"),(0,a.kt)("p",null,"You can view the filter's definition in the body of the response."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "users": [\n    {\n      "name": "Katharine Shearn",\n      "id": "E96A79E011D4BBCE10004694316DE8A4",\n      "type": 34,\n      "abbreviation": "kshearn",\n      "subtype": 8704,\n      "dateCreated": "2001-01-02T20:42:34.000+0000",\n      "dateModified": "2019-12-04T16:53:47.000+0000",\n      "version": "A3930CAE11EA16B600000080EF359083",\n      "acg": 255,\n      "owner": {\n        "name": "Administrator",\n        "id": "54F3D26011D2896560009A8E67019608"\n      },\n      "extType": 0,\n      "username": "kshearn",\n      "fullName": "Katharine Shearn",\n      "initials": "KS"\n    }\n  ],\n  "totalUsers": 1,\n  "totalUserGroups": 0\n}\n')),(0,a.kt)("p",null,"Response Code 200: (The security filter's member is returned successfully.)"))}y.isMDXComponent=!0}}]);