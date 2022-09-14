"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3196],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),h=r,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||o;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4529:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),i=["components"],s={title:"Workflow Sample - Update an Attribute's Relationships",sidebar_label:"Update an Attribute's Relationships",description:"This workflow sample demonstrates how to update an attribute's relationship through the Modeling service."},l=void 0,p={unversionedId:"common-workflows/manage-attribute-relationships/update-an-attributes-relationships",id:"common-workflows/manage-attribute-relationships/update-an-attributes-relationships",title:"Workflow Sample - Update an Attribute's Relationships",description:"This workflow sample demonstrates how to update an attribute's relationship through the Modeling service.",source:"@site/docs/common-workflows/manage-attribute-relationships/update-an-attributes-relationships.md",sourceDirName:"common-workflows/manage-attribute-relationships",slug:"/common-workflows/manage-attribute-relationships/update-an-attributes-relationships",permalink:"/rest-api-docs/common-workflows/manage-attribute-relationships/update-an-attributes-relationships",draft:!1,editUrl:"https://github.com/MicroStrategy/restapi-docs/tree/main/docs/common-workflows/manage-attribute-relationships/update-an-attributes-relationships.md",tags:[],version:"current",lastUpdatedBy:"Liang, Jiapei",lastUpdatedAt:1663187922,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"Workflow Sample - Update an Attribute's Relationships",sidebar_label:"Update an Attribute's Relationships",description:"This workflow sample demonstrates how to update an attribute's relationship through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Retrieve an Attribute's Relationships within a Changeset",permalink:"/rest-api-docs/common-workflows/manage-attribute-relationships/retrieve-an-attributes-relationships-within-a-changeset"},next:{title:"Manage Transformation Objects",permalink:"/rest-api-docs/common-workflows/manage-transformation-objects/"}},c={},u=[{value:"Create a changeset",id:"create-a-changeset",level:2},{value:"Update the attribute&#39;s relationship",id:"update-the-attributes-relationship",level:2},{value:"Commit a changeset",id:"commit-a-changeset",level:2},{value:"Delete the changeset",id:"delete-the-changeset",level:2},{value:"Example",id:"example",level:2}],m={toc:u};function h(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-a1ebd204-40ea-42e0-9ccc-21f391c797fb?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"This workflow sample demonstrates how to update an attribute's relationship through the Modeling service."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#create-a-changeset"},"Create a changeset.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#update-the-attributes-relationship"},"Update the attribute's relationship.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#commit-a-changeset"},"Commit the changeset.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#delete-the-changeset"},"Delete the changeset."))),(0,o.kt)("p",null,"You want to update the relationship for the ",(0,o.kt)("inlineCode",{parentName:"p"},"\u201cSubcategory\u201c")," attribute object with ID ",(0,o.kt)("inlineCode",{parentName:"p"},"E8C034036E4EE6404513A6B12FAE9481")," in the MicroStrategy Tutorial project. The project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},(0,o.kt)("inlineCode",{parentName:"a"},"POST /api/auth/login")),"."),(0,o.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},(0,o.kt)("inlineCode",{parentName:"a"},"GET /api/projects")),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"A changeset is required for creating, and/or updating objects such as filters, facts, attributes, and so on through the modeling APIs. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually, the changes in the changeset should be either committed as one transaction or abandoned altogether.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'"schemaEdit"')," is required to be ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if this changeset ID is used to create or update schema objects through the corresponding APIs (tables, facts, attributes, hierarchies, transformation, partitions, and functions)."),(0,o.kt)("h2",{id:"create-a-changeset"},"Create a changeset"),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset"},"POST /api/model/changesets")),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "o0ak9privdo27nfo798j40m8aa"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets?schemaEdit=true" -H "accept: application/json" -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "F768352DC66E40F2BCD9A3F050ECDE9B",\n  "dateCreated": "2021-03-22T20:29:39.253573Z",\n  "dateModified": "2021-03-22T20:29:39.253608Z",\n  "status": "Ready",\n  "schemaEdit": true,\n  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US",\n  "userName": "MSTR User"\n}\n')),(0,o.kt)("p",null,"Sample Response Code: 201 (A new changeset is created successfully.)"),(0,o.kt)("h2",{id:"update-the-attributes-relationship"},"Update the attribute's relationship"),(0,o.kt)("p",null,"Use ","[PUT /api/model/systemHierarchy/attributes/{attributeId}/relationships]","(",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System"},"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System")," Hierarchy/ms-putAttributeRelationships)."),(0,o.kt)("p",null,'You want to update the relationship of the "Subcategory" attribute object by adding relationships between "Category" and "Subcategory", and "Subcategory" and "Item". The object ID of the "Subcategory" attribute is ',(0,o.kt)("inlineCode",{parentName:"p"},"E8C034036E4EE6404513A6B12FAE9481")," in the MicroStrategy Tutorial project. The project ID is ",(0,o.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,o.kt)("p",null,"The following screenshot shows how these relationships are shown in the editor."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"attribute_relationship_editor",src:a(8513).Z,width:"800",height:"896"})),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "o0ak9privdo27nfo798j40m8aa"\n"X-MSTR-MS-Changeset": "F768352DC66E40F2BCD9A3F050ECDE9B"\n')),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "relationships": [\n    {\n      "parent": {\n        "objectId": "E8C034036E4EE6404513A6B12FAE9481",\n        "subType": "attribute",\n        "name": "Subcategory"\n      },\n      "child": {\n        "objectId": "8D679D4211D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Item"\n      },\n      "relationshipTable": {\n        "objectId": "8D67937411D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_ITEM"\n      },\n      "relationshipType": "one_to_many"\n    },\n    {\n      "parent": {\n        "objectId": "8D679D3711D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Category"\n      },\n      "child": {\n        "objectId": "E8C034036E4EE6404513A6B12FAE9481",\n        "subType": "attribute",\n        "name": "Subcategory"\n      },\n      "relationshipTable": {\n        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_SUBCATEG"\n      },\n      "relationshipType": "one_to_many"\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/systemHierarchy/attributes/E8C034036E4EE6404513A6B12FAE9481/relationships" -H "accept: application/json" -H "X-MSTR-AuthToken: o0ak9privdo27nfo798j40m8aa" -H "X-MSTR-MS-Changeset: F768352DC66E40F2BCD9A3F050ECDE9B" -H "Content-Type: application/json" -d "{\\\\"relationships\\\\":[{\\\\"parent\\\\":{\\\\"objectId\\\\":\\\\"E8C034036E4EE6404513A6B12FAE9481\\\\",\\\\"subType\\\\":\\\\"attribute\\\\",\\\\"name\\\\":\\\\"Subcategory\\\\"},\\\\"child\\\\":{\\\\"objectId\\\\":\\\\"8D679D4211D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"attribute\\\\",\\\\"name\\\\":\\\\"Item\\\\"},\\\\"relationshipTable\\\\":{\\\\"objectId\\\\":\\\\"8D67937411D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"LU_ITEM\\\\"},\\\\"relationshipType\\\\":\\\\"one_to_many\\\\"},{\\\\"parent\\\\":{\\\\"objectId\\\\":\\\\"8D679D3711D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"attribute\\\\",\\\\"name\\\\":\\\\"Category\\\\"},\\\\"child\\\\":{\\\\"objectId\\\\":\\\\"E8C034036E4EE6404513A6B12FAE9481\\\\",\\\\"subType\\\\":\\\\"attribute\\\\",\\\\"name\\\\":\\\\"Subcategory\\\\"},\\\\"relationshipTable\\\\":{\\\\"objectId\\\\":\\\\"8D6793B611D3E4981000E787EC6DE8A4\\\\",\\\\"subType\\\\":\\\\"logical_table\\\\",\\\\"name\\\\":\\\\"LU_SUBCATEG\\\\"},\\\\"relationshipType\\\\":\\\\"one_to_many\\\\"}]}"\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,"You can view the new attribute relationships in the body of the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "relationships": [\n    {\n      "parent": {\n        "objectId": "E8C034036E4EE6404513A6B12FAE9481",\n        "subType": "attribute",\n        "name": "Subcategory"\n      },\n      "child": {\n        "objectId": "8D679D4211D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Item"\n      },\n      "relationshipTable": {\n        "objectId": "8D67937411D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_ITEM"\n      },\n      "relationshipType": "one_to_many"\n    },\n    {\n      "parent": {\n        "objectId": "8D679D3711D3E4981000E787EC6DE8A4",\n        "subType": "attribute",\n        "name": "Category"\n      },\n      "child": {\n        "objectId": "E8C034036E4EE6404513A6B12FAE9481",\n        "subType": "attribute",\n        "name": "Subcategory"\n      },\n      "relationshipTable": {\n        "objectId": "8D6793B611D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "LU_SUBCATEG"\n      },\n      "relationshipType": "one_to_many"\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Response Code: 200 (The attribute's relationships are updated successfully in the changeset.)"),(0,o.kt)("h2",{id:"commit-a-changeset"},"Commit a changeset"),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-commitChangeset"},"POST /api/model/changesets/{changesetId}/commit"),"."),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "t1ldkqth8vt0k64vkoajmoqrs4"\n"X-MSTR-MS-Changeset": "F768352DC66E40F2BCD9A3F050ECDE9B"\n')),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/F768352DC66E40F2BCD9A3F050ECDE9B/commit" -H "accept: application/json" -H "X-MSTR-AuthToken: t1ldkqth8vt0k64vkoajmoqrs4" -H "X-MSTR-MS-Changeset: F768352DC66E40F2BCD9A3F050ECDE9B"\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "F768352DC66E40F2BCD9A3F050ECDE9B",\n  "dateCreated": "2021-03-22T20:29:39.253573Z",\n  "dateModified": "2021-03-22T20:41:38.286927Z",\n  "status": "Ready",\n  "schemaEdit": true,\n  "mstrProjectId": "B7CA92F04B9FAE8D941C3E9B7E0CD754",\n  "mstrUserId": "7FC05A65473CE2FD845CE6A1D3F13233",\n  "userDateNumberLocale": "en-US",\n  "userMetadataLocale": "en-US",\n  "userWarehouseLocale": "en-US",\n  "userName": "MSTR User"\n}\n')),(0,o.kt)("p",null,"Sample Response Code: 201 (The changeset is committed successfully.)"),(0,o.kt)("h2",{id:"delete-the-changeset"},"Delete the changeset"),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-deleteChangeset"},"`DELETE /api/model/changesets/{changesetId}"),"`"),(0,o.kt)("p",null,"Sample Request Header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "applications/json"\n"X-MSTR-AuthToken: t1ldkqth8vt0k64vkoajmoqrs4"\n"X-MSTR-MS-Changeset: F768352DC66E40F2BCD9A3F050ECDE9B"\n')),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/changesets/F768352DC66E40F2BCD9A3F050ECDE9B" -H "accept: \\*/\\*" -H "X-MSTR-AuthToken: t1ldkqth8vt0k64vkoajmoqrs4" -H "X-MSTR-MS-Changeset: F768352DC66E40F2BCD9A3F050ECDE9B"\n')),(0,o.kt)("p",null,"Sample Request Body: Empty"),(0,o.kt)("p",null,"Sample Response Code: 204 (The changeset has been deleted successfully.)"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,'You want to update the relationship for the "Promotion" attribute object with ID "6E6E867115400A10F71D979E00325F4A" by adding a joint relationship with "Day" and "Item" as the join-child of "Promotion".'),(0,o.kt)("p",null,"The following screenshot shows how this relationship is shown in the editor."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"attribute_relationship_editor_2",src:a(880).Z,width:"800",height:"535"})),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "relationships": [\n    {\n      "parent": {\n        "objectId": "6E6E867115400A10F71D979E00325F4A",\n        "subType": "attribute",\n        "name": "Promotion"\n      },\n      "jointChild": [\n        {\n          "objectId": "96ED3EC811D5B117C000E78A4CC5F24F",\n          "subType": "attribute",\n          "name": "Day"\n        },\n        {\n          "objectId": "8D679D4211D3E4981000E787EC6DE8A4",\n          "subType": "attribute",\n          "name": "Item"\n        }\n      ],\n      "relationshipTable": {\n        "objectId": "8D6793CE11D3E4981000E787EC6DE8A4",\n        "subType": "logical_table",\n        "name": "ORDER_DETAIL"\n      },\n      "relationshipType": "one_to_many"\n    }\n  ]\n}\n')))}h.isMDXComponent=!0},8513:function(e,t,a){t.Z=a.p+"assets/images/attribute_relationship_editor-d5d14ede3fc664a702f3b8e654de8be6.png"},880:function(e,t,a){t.Z=a.p+"assets/images/attribute_relationship_editor_2-e5d85685b6b09430f90e52ccb5963034.png"}}]);