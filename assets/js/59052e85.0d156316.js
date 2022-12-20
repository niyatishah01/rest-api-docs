"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3196],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),h=r,d=m["".concat(p,".").concat(h)]||m[h]||c[h]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4529:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],s={title:"Workflow sample - Update an attribute's relationships",sidebar_label:"Update an attribute's relationships",description:"This workflow sample demonstrates how to update an attribute's relationship through the Modeling service."},p=void 0,l={unversionedId:"common-workflows/manage-attribute-relationships/update-an-attributes-relationships",id:"common-workflows/manage-attribute-relationships/update-an-attributes-relationships",title:"Workflow sample - Update an attribute's relationships",description:"This workflow sample demonstrates how to update an attribute's relationship through the Modeling service.",source:"@site/docs/common-workflows/manage-attribute-relationships/update-an-attributes-relationships.md",sourceDirName:"common-workflows/manage-attribute-relationships",slug:"/common-workflows/manage-attribute-relationships/update-an-attributes-relationships",permalink:"/rest-api-docs/common-workflows/manage-attribute-relationships/update-an-attributes-relationships",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-attribute-relationships/update-an-attributes-relationships.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1671571075,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{title:"Workflow sample - Update an attribute's relationships",sidebar_label:"Update an attribute's relationships",description:"This workflow sample demonstrates how to update an attribute's relationship through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Retrieve an attribute's relationships within a changeset",permalink:"/rest-api-docs/common-workflows/manage-attribute-relationships/retrieve-an-attributes-relationships-within-a-changeset"},next:{title:"Manage transformation objects",permalink:"/rest-api-docs/common-workflows/manage-transformation-objects/"}},u={},c=[{value:"Update the attribute&#39;s relationship",id:"update-the-attributes-relationship",level:2},{value:"Example",id:"example",level:2}],m={toc:c};function h(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-a1ebd204-40ea-42e0-9ccc-21f391c797fb?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"This workflow sample demonstrates how to update an attribute's relationship through the Modeling service."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a changeset."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#update-the-attributes-relationship"},"Update the attribute's relationship.")),(0,o.kt)("li",{parentName:"ol"},"Commit the changeset."),(0,o.kt)("li",{parentName:"ol"},"Delete the changeset.")),(0,o.kt)("p",null,"You want to update the relationship for the ",(0,o.kt)("inlineCode",{parentName:"p"},"\u201cSubcategory\u201c")," attribute object with ID ",(0,o.kt)("inlineCode",{parentName:"p"},"E8C034036E4EE6404513A6B12FAE9481")," in the MicroStrategy Tutorial project. The project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets see ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/changesets"},"Changesets"),".")),(0,o.kt)("h2",{id:"update-the-attributes-relationship"},"Update the attribute's relationship"),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html?#/System%20Hierarchy/ms-putAttributeRelationships"},"PUT /api/model/systemHierarchy/attributes/{attributeId}/relationships"),"."),(0,o.kt)("p",null,'You want to update the relationship of the "Subcategory" attribute object by adding relationships between "Category" and "Subcategory", and "Subcategory" and "Item". The object ID of the "Subcategory" attribute is ',(0,o.kt)("inlineCode",{parentName:"p"},"E8C034036E4EE6404513A6B12FAE9481")," in the MicroStrategy Tutorial project. The project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,o.kt)("p",null,"The following screenshot shows how these relationships are shown in the editor."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"attribute_relationship_editor",src:n(8513).Z,width:"800",height:"896"})),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "o0ak9privdo27nfo798j40m8aa"\n"X-MSTR-MS-Changeset": "F768352DC66E40F2BCD9A3F050ECDE9B"\n')),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "relationships": [\n    {\n      "parent": {\n        "objectId": "E8C034036E4EE6404513A6B12FAE9481",\n        "subType": "attribute",\n        "name": "Subcategory"\n      },\n      "child": {\n        "objectId": "8D679D4211D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Item"\n      },\n      "relationshipTable": {\n        "objectId": "8D67937411D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_ITEM"\n      },\n      "relationshipType": "one_to_many"\n    },\n    {\n      "parent": {\n        "objectId": "8D679D3711D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Category"\n      },\n      "child": {\n        "objectId": "E8C034036E4EE6404513A6B12FAE9481",\n        "subType": "attribute",\n        "name": "Subcategory"\n      },\n      "relationshipTable": {\n        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_SUBCATEG"\n      },\n      "relationshipType": "one_to_many"\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/systemHierarchy/attributes/E8C034036E4EE6404513A6B12FAE9481/relationships" -H "accept: application/json" -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" -H "X-MSTR-MS-Changeset: F768352DC66E40F2BCD9A3F050ECDE9B" -H "Content-Type: application/json" -d "{\\\\"relationships\\\\":[{\\\\"parent\\\\":{\\\\"objectId\\\\":\\\\"E8C034036E4EE6404513A6B12FAE9481\\\\",\\\\"subType\\\\":\\\\"attribute\\\\",\\\\"name\\\\":\\\\"Subcategory\\\\"},\\\\"child\\\\":{\\\\"objectId\\\\":\\\\"8D679D4211D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"attribute\\\\",\\\\"name\\\\":\\\\"Item\\\\"},\\\\"relationshipTable\\\\":{\\\\"objectId\\\\":\\\\"8D67937411D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"LU_ITEM\\\\"},\\\\"relationshipType\\\\":\\\\"one_to_many\\\\"},{\\\\"parent\\\\":{\\\\"objectId\\\\":\\\\"8D679D3711D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"attribute\\\\",\\\\"name\\\\":\\\\"Category\\\\"},\\\\"child\\\\":{\\\\"objectId\\\\":\\\\"E8C034036E4EE6404513A6B12FAE9481\\\\",\\\\"subType\\\\":\\\\"attribute\\\\",\\\\"name\\\\":\\\\"Subcategory\\\\"},\\\\"relationshipTable\\\\":{\\\\"objectId\\\\":\\\\"8D6793B611D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"LU_SUBCATEG\\\\"},\\\\"relationshipType\\\\":\\\\"one_to_many\\\\"}]}"\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,"You can view the new attribute relationships in the body of the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "relationships": [\n    {\n      "parent": {\n        "objectId": "E8C034036E4EE6404513A6B12FAE9481",\n        "subType": "attribute",\n        "name": "Subcategory"\n      },\n      "child": {\n        "objectId": "8D679D4211D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Item"\n      },\n      "relationshipTable": {\n        "objectId": "8D67937411D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_ITEM"\n      },\n      "relationshipType": "one_to_many"\n    },\n    {\n      "parent": {\n        "objectId": "8D679D3711D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Category"\n      },\n      "child": {\n        "objectId": "E8C034036E4EE6404513A6B12FAE9481",\n        "subType": "attribute",\n        "name": "Subcategory"\n      },\n      "relationshipTable": {\n        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_SUBCATEG"\n      },\n      "relationshipType": "one_to_many"\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Response Code: 200 (The attribute's relationships are updated successfully in the changeset.)"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,'You want to update the relationship for the "Promotion" attribute object with ID "6E6E867115400A10F71D979E00325F4A" by adding a joint relationship with "Day" and "Item" as the join-child of "Promotion".'),(0,o.kt)("p",null,"The following screenshot shows how this relationship is shown in the editor."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"attribute_relationship_editor_2",src:n(880).Z,width:"800",height:"535"})),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "relationships": [\n    {\n      "parent": {\n        "objectId": "6E6E867115400A10F71D979E00325F4A",\n        "subType": "attribute",\n        "name": "Promotion"\n      },\n      "jointChild": [\n        {\n          "objectId": "96ED3EC811D5B117C000E78A4CC5F24F",\n          "subType": "attribute",\n          "name": "Day"\n        },\n        {\n          "objectId": "8D679D4211D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Item"\n        }\n      ],\n      "relationshipTable": {\n        "objectId": "8D6793CE11D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "ORDER_DETAIL"\n      },\n      "relationshipType": "one_to_many"\n    }\n  ]\n}\n')))}h.isMDXComponent=!0},8513:function(e,t,n){t.Z=n.p+"assets/images/attribute_relationship_editor-d5d14ede3fc664a702f3b8e654de8be6.png"},880:function(e,t,n){t.Z=n.p+"assets/images/attribute_relationship_editor_2-e5d85685b6b09430f90e52ccb5963034.png"}}]);