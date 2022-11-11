"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[286],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var a=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,p=e.parentName,m=n(e,["components","mdxType","originalType","parentName"]),l=u(r),d=s,f=l["".concat(p,".").concat(d)]||l[d]||c[d]||i;return r?a.createElement(f,o(o({ref:t},m),{},{components:r})):a.createElement(f,o({ref:t},m))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,o=new Array(i);o[0]=l;var n={};for(var p in t)hasOwnProperty.call(t,p)&&(n[p]=t[p]);n.originalType=e,n.mdxType="string"==typeof e?e:s,o[1]=n;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},8260:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return n},metadata:function(){return u},toc:function(){return c}});var a=r(3117),s=r(102),i=(r(7294),r(3905)),o=["components"],n={title:"Workflow sample - Modify a security filter's member",sidebar_label:"Modify a security filter's member",description:"This workflow sample demonstrates how to modify the users and user groups that a specified security filter is applied to."},p=void 0,u={unversionedId:"common-workflows/manage-security-filter-objects/modify-a-security-filters-member",id:"common-workflows/manage-security-filter-objects/modify-a-security-filters-member",title:"Workflow sample - Modify a security filter's member",description:"This workflow sample demonstrates how to modify the users and user groups that a specified security filter is applied to.",source:"@site/docs/common-workflows/manage-security-filter-objects/modify-a-security-filters-member.md",sourceDirName:"common-workflows/manage-security-filter-objects",slug:"/common-workflows/manage-security-filter-objects/modify-a-security-filters-member",permalink:"/rest-api-docs/common-workflows/manage-security-filter-objects/modify-a-security-filters-member",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-security-filter-objects/modify-a-security-filters-member.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1668189866,formattedLastUpdatedAt:"Nov 11, 2022",frontMatter:{title:"Workflow sample - Modify a security filter's member",sidebar_label:"Modify a security filter's member",description:"This workflow sample demonstrates how to modify the users and user groups that a specified security filter is applied to."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a security filter's member",permalink:"/rest-api-docs/common-workflows/manage-security-filter-objects/retrieve-a-security-filters-member"},next:{title:"Manage user hierarchy objects",permalink:"/rest-api-docs/common-workflows/manage-user-hierarchy-objects/"}},m={},c=[{value:"1. Remove the users and user groups using PATCH /api/securityFilters/{id}/members",id:"1-remove-the-users-and-user-groups-using-patch-apisecurityfiltersidmembers",level:2},{value:"2. Add the users and user groups using PATCH /api/securityFilters/{id}/members",id:"2-add-the-users-and-user-groups-using-patch-apisecurityfiltersidmembers",level:2}],l={toc:c};function d(e){var t=e.components,r=(0,s.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-b39c86ac-1a16-4100-a96d-b1a6d2f74b9c?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"This workflow sample demonstrates how to modify the users and user groups that a specified security filter is applied to. The object ID of the security filter is ",(0,i.kt)("inlineCode",{parentName:"p"},"8018C24FEBC4406CB9E36838C01C82D1"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#1-remove-the-users-and-user-groups-using-patch-apisecurityfiltersidmembers"},"1. Remove the users and user groups using ",(0,i.kt)("inlineCode",{parentName:"a"},"PATCH /api/securityFilters/{id}/members"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#2-add-the-users-and-user-groups-using-patch-apisecurityfiltersidmembers"},"2. Add the users and user groups using ",(0,i.kt)("inlineCode",{parentName:"a"},"PATCH /api/securityFilters/{id}/members")))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,i.kt)("h2",{id:"1-remove-the-users-and-user-groups-using-patch-apisecurityfiltersidmembers"},"1. Remove the users and user groups using ",(0,i.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Security%20Filters/updatePartialSecurityFilter"},"PATCH /api/securityFilters/{id}/members")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pamr302kmu0q1l0c22jeb13s2q"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "operationList": [\n    {\n      "op": "removeElements",\n      "path": "/members",\n      "value": ["D09773F94699124B4D75B48F1B358327", "54F3D26011D2896560009A8E67019608"]\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH "http://demo.microstrategy.com/MicroStrategyLibrary/api/securityFilters/06648A0711D50131C00051916B98494F/members" -H "accept: */*" -H "X-MSTR-AuthToken: pamr302kmu0q1l0c22jeb13s2q" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" -H "Content-Type: application/json" -d \'{"operationList":[{"op":"removeElements","path":"/members","value":["D09773F94699124B4D75B48F1B358327","54F3D26011D2896560009A8E67019608"]}]}\'\n')),(0,i.kt)("p",null,"Sample Response Body: Empty"),(0,i.kt)("p",null,"Response Code: 204 (The security filter's member is modified successfully.)"),(0,i.kt)("h2",{id:"2-add-the-users-and-user-groups-using-patch-apisecurityfiltersidmembers"},"2. Add the users and user groups using ",(0,i.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Security%20Filters/updatePartialSecurityFilter"},"PATCH /api/securityFilters/{id}/members")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "pamr302kmu0q1l0c22jeb13s2q"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "operationList": [\n    {\n      "op": "addElements",\n      "path": "/members",\n      "value": ["D09773F94699124B4D75B48F1B358327", "54F3D26011D2896560009A8E67019608"]\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH "http://demo.microstrategy.com/MicroStrategyLibrary/api/securityFilters/06648A0711D50131C00051916B98494F/members" -H "accept: */*" -H "X-MSTR-AuthToken: pamr302kmu0q1l0c22jeb13s2q" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754" -H "Content-Type: application/json" -d \'{"operationList":[{"op":"addElements","path":"/members","value":["D09773F94699124B4D75B48F1B358327","54F3D26011D2896560009A8E67019608"]}]}\'\n')),(0,i.kt)("p",null,"Sample Response Body: Empty"),(0,i.kt)("p",null,"Response Code: 200 (The security filter's member is modified successfully.)"))}d.isMDXComponent=!0}}]);