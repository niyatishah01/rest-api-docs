"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6434],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return u}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=n,d=m["".concat(c,".").concat(u)]||m[u]||h[u]||i;return r?a.createElement(d,o(o({ref:t},p),{},{components:r})):a.createElement(d,o({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4266:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var a,n=r(83117),i=r(80102),o=(r(67294),r(3905)),s=["components"],c={title:"Retrieve a list of available user hierarchies",sidebar_label:"Retrieve a list of available user hierarchies",description:"This workflow sample demonstrates how to retrieve the list of available user hierarchies in one project\u202fwithin a changeset."},l=void 0,p={unversionedId:"common-workflows/modeling/manage-user-hierarchy-objects/retrieve-a-list-of-available-user-hierarchies",id:"common-workflows/modeling/manage-user-hierarchy-objects/retrieve-a-list-of-available-user-hierarchies",title:"Retrieve a list of available user hierarchies",description:"This workflow sample demonstrates how to retrieve the list of available user hierarchies in one project\u202fwithin a changeset.",source:"@site/docs/common-workflows/modeling/manage-user-hierarchy-objects/retrieve-a-list-of-available-user-hierarchies.md",sourceDirName:"common-workflows/modeling/manage-user-hierarchy-objects",slug:"/common-workflows/modeling/manage-user-hierarchy-objects/retrieve-a-list-of-available-user-hierarchies",permalink:"/rest-api-docs/common-workflows/modeling/manage-user-hierarchy-objects/retrieve-a-list-of-available-user-hierarchies",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-user-hierarchy-objects/retrieve-a-list-of-available-user-hierarchies.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1680880277,formattedLastUpdatedAt:"Apr 7, 2023",frontMatter:{title:"Retrieve a list of available user hierarchies",sidebar_label:"Retrieve a list of available user hierarchies",description:"This workflow sample demonstrates how to retrieve the list of available user hierarchies in one project\u202fwithin a changeset."},sidebar:"tutorialSidebar",previous:{title:"Update a user hierarchy's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-user-hierarchy-objects/update-a-user-hierarchys-definition"},next:{title:"User hierarchy import parameters",permalink:"/rest-api-docs/common-workflows/modeling/manage-user-hierarchy-objects/user-hierarchy-import-parameters"}},h={},m=[],u=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),d={toc:m};function f(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u,{since:"2021 Update 2",mdxType:"Available"}),(0,o.kt)("p",null,"This workflow sample demonstrates how to retrieve the list of available user hierarchies in one project\u202fwithin a changeset."),(0,o.kt)("p",null,"You want to get all available user hierarchies\u202fin the MicroStrategy Tutorial project. The project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),".")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Get the list of available user hierarchies within the changeset using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Hierarchies/ms-getHierarchies"},"GET /api/model/hierarchies"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'Sample Request Header:\n\n"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-MS-Changeset": "2A131744C91B4915B54A61FFDC528F62"\n')),(0,o.kt)("p",{parentName:"li"},"Sample Request Body: Empty"),(0,o.kt)("p",{parentName:"li"},"Sample Curl:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "http://10.23.7.118:8080/MicroStrategyLibrary/api/model/hierarchies" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-MS-Changeset: 2A131744C91B4915B54A61FFDC528F62"\n')),(0,o.kt)("p",{parentName:"li"},"Sample Response Body: You can view the user hierarchy's definition in the body of the response. This includes the object ID, subtype, and name of each available user hierarchy in the specified project. See ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/manage-user-hierarchy-objects/user-hierarchy-import-parameters"},"User hierarchy import parameters")," for more information about the import parameters that define the user hierarchy."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "offset": 0,\n  "limit": -1,\n  "total": 6,\n  "hierarchies": [\n    {\n      "objectId": "B793B55011D3E4E51000E887EC6DE8A4",\n      "subType": "dimension_user",\n      "name": "Geography"\n    },\n    {\n      "objectId": "B793B55611D3E4E51000E887EC6DE8A4",\n      "subType": "dimension_user",\n      "name": "Customers"\n    },\n    {\n      "objectId": "B793B55C11D3E4E51000E887EC6DE8A4",\n      "subType": "dimension_user",\n      "name": "Time"\n    },\n    {\n      "objectId": "B793B56811D3E4E51000E887EC6DE8A4",\n      "subType": "dimension_user",\n      "name": "Products"\n    },\n    {\n      "objectId": "AF76BA4D11D424EEC000D8906B98494F",\n      "subType": "dimension_user_hierarchy",\n      "name": "Product Hierarchy"\n    },\n    {\n      "objectId": "13053CBE402A948E22DD9CB05648FBC8",\n      "subType": "dimension_user_hierarchy",\n      "name": "User-Defined Time Hierarchy"\n    }\n  ]\n}\n')),(0,o.kt)("p",{parentName:"li"},"Response Code: 200 (Upon success, the API returns a list of user hierarchies with specific field information.)"))))}f.isMDXComponent=!0}}]);