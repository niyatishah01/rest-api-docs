"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6717],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=u(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(h,i(i({ref:e},p),{},{components:n})):r.createElement(h,i({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8261:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={title:"Sort Data",description:"When you use a REST API request to create a cube or report, you can sort the data that is returned. This is particularly helpful when you are using incremental fetch. You define the kind of sorting to apply in the body parameter of the request. You can apply sorting on all rows, columns, and pages."},l=void 0,u={unversionedId:"common-workflows/sort-data",id:"common-workflows/sort-data",title:"Sort Data",description:"When you use a REST API request to create a cube or report, you can sort the data that is returned. This is particularly helpful when you are using incremental fetch. You define the kind of sorting to apply in the body parameter of the request. You can apply sorting on all rows, columns, and pages.",source:"@site/docs/common-workflows/sort-data.md",sourceDirName:"common-workflows",slug:"/common-workflows/sort-data",permalink:"/rest-api-docs/common-workflows/sort-data",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/main/docs/common-workflows/sort-data.md",tags:[],version:"current",lastUpdatedBy:"Liang, Jiapei",lastUpdatedAt:1663189678,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"Sort Data",description:"When you use a REST API request to create a cube or report, you can sort the data that is returned. This is particularly helpful when you are using incremental fetch. You define the kind of sorting to apply in the body parameter of the request. You can apply sorting on all rows, columns, and pages."},sidebar:"tutorialSidebar",previous:{title:"Search for Objects",permalink:"/rest-api-docs/common-workflows/search-for-objects"},next:{title:"Filter Data",permalink:"/rest-api-docs/common-workflows/filter-data/"}},p={},d=[{value:"Sorting criteria that can be applied",id:"sorting-criteria-that-can-be-applied",level:2},{value:"Sample body parameter",id:"sample-body-parameter",level:3},{value:"Sample JSON output",id:"sample-json-output",level:3},{value:"Possible sorting errors",id:"possible-sorting-errors",level:3}],c={toc:d};function m(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-f01c3304-fd56-48bf-a13a-cae926afb2a5?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"When you use a REST API request to create a cube or report, you can sort the data that is returned. This is particularly helpful when you are using incremental fetch. You define the kind of sorting to apply in the body parameter of the request. You can apply sorting on all rows, columns, and pages."),(0,o.kt)("p",null,"You can sort the results of the following requests:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"POST /api/v2/reports/{reportId}/instances")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PUT /api/v2/reports/{reportId}/instances/{instanceId}")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"POST /api/v2/cubes/{cubeId}/instances")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PUT /api/v2/cubes/{reportId}/instances/{instanceId}"))),(0,o.kt)("p",null,"The requests do the same thing. They create a report instance (based on either a cube or a report), get the instance information, and return the results of the first paging. All endpoints support simple sorting and nested (or hierarchical) sorting. Simple sorting has only one sorting criteria; nested sorting has multiple sorting criteria, which are applied in the order in which they are listed. When sorting criteria are applied to the results of either request, it works the same for reports and cubes."),(0,o.kt)("p",null,"You can sort the results for reports that have attributes on rows and metrics on columns or even cross-tab reports. You can use derived elements in the sorting definition for both reports and cubes. Moreover, you can now set the subtotal positions on every sorting level."),(0,o.kt)("p",null,"You can sort the results for reports that have attributes on rows and metrics on columns or even cross-tab reports. You can also use derived elements in the sorting definition for both reports and cubes. Moreover, you can now set the subtotal positions on every sorting level."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#sorting-criteria-that-can-be-applied"},"Sorting criteria that can be applied"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#sample-body-parameter"},"Sample body parameter")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#sample-json-output"},"Sample JSON output")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#possible-sorting-errors"},"Possible sorting errors"))))),(0,o.kt)("p",null,"Describes the three ways that report results can be sorted\u2014by attribute form, by metric, and using the default attribute sort."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#sample-body-parameter"},"Sample body parameter"))),(0,o.kt)("p",null,"Provides the model for the body parameter of the request (with code for sorting shown in bold) and two versions of a sample body parameter with actual data."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#sample-json-output"},"Sample JSON output"))),(0,o.kt)("p",null,"Provides sample JSON output for the request (with code for the sorting definition shown in bold)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#possible-sorting-errors"},"Possible sorting errors"))),(0,o.kt)("p",null,"Provides possible errors that can be returned when sorting fails."),(0,o.kt)("h2",{id:"sorting-criteria-that-can-be-applied"},"Sorting criteria that can be applied"),(0,o.kt)("p",null,"There are four kinds of sorting, which can be applied in either ascending or descending order:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sorting by subtotals position")),(0,o.kt)("p",null,"This is a special kind of sorting that can be used to manipulate the subtotals' position on every axis. You can only apply subtotals position sorting as the first criteria on every axis. You specify a subtotals position whose value will be used to place the subtotals on the topmost level."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sorting by attribute form")),(0,o.kt)("p",null,"You specify an attribute form whose value will be used to sort the report contents; you provide the ID of the attribute and the ID of the attribute form. You also specify the order in which the contents will be sorted and the subtotals position in which subtotals will be placed in this sorting level."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sorting by metric")),(0,o.kt)("p",null,"You specify a metric whose value is used to sort the report contents. You also provide the ID of the metric. If the report is a cross-tabbed, you also need to provide the elements of the attributes on the opposite axis. Nevertheless, metric sort is not allowed on pages axis. You also specify the order in which the contents are sorted and the subtotals position in which subtotals are placed in this sorting level."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sorting using the default attribute sort")),(0,o.kt)("p",null,"In MicroStrategy Developer, you can set a default attribute sort property, which is saved in the metadata. To set this property, you specify an attribute form whose value will be used to sort the contents of any report that includes the attribute; you also specify whether the sort order will be ascending or descending. This default attribute sort property is automatically applied whenever the attribute is used in a report."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you are creating a report instance that includes an attribute whose form has the default attribute sort property set and it is the only sorting criteria that will be used in the report, you do not have to specify the sort. This is because the default attribute sort is automatically applied whenever the attribute is used in a report.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you are creating a report instance that includes an attribute whose form has the default attribute sort property set and it is one of the multiple sorting criteria that is used in the report, you must specify the sort in the hierarchical order where it should be applied. You provide the ID of the attribute. You do not have to specify the attribute form to use or the sort order because they are part of the default attribute sort property."))),(0,o.kt)("p",null,"You cannot set the default attribute sort property in MicroStrategy Web. It can only be set in MicroStrategy Developer."),(0,o.kt)("h3",{id:"sample-body-parameter"},"Sample body parameter"),(0,o.kt)("p",null,"You define the sorting criteria to apply in the body parameter of the request, together with other values that determine the data included in the report instance\u2014such as attribute values, metric values, and view filters. You can use derived elements in the sorting definition for both reports and cubes."),(0,o.kt)("p",null,"The model for the request body parameter is provided below, along with the code for sorting."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "requestedObjects": {\n    "attributes": [\n      {\n        "id": "string",\n        "name": "string"\n      }\n    ],\n    "metrics": [\n      {\n        "id": "string",\n        "name": "string"\n      }\n    ]\n  },\n  "viewFilter": {\n    "operator": "string"\n  },\n  "sorting": {\n    "rows": [\n      {\n        "type": "subtotalsPosition",\n        "subtotalsPosition": "string" // possible values: "first", "last", "inherit", default: "inherit"\n      },\n      {\n        "type": "attribute", // type is not required\n        "attribute": {\n          "id": "string",\n          "name": "string" // name is not required\n        } // no "order" and "subtotalsPosition"\n      },\n      {\n        "type": "form", // type is not required\n        "attribute": {\n          "id": "string",\n          "name": "string" // name is not required\n        },\n        "form": {\n          "id": "string",\n          "name": "string" // name is not required\n        },\n        "subtotalsPosition": "string", // possible values: "first", "last", "inherit", default: "inherit"\n        "order": "ascending"\n      },\n      {\n        "type": "metric", // type is not required\n        "metric": {\n          "id": "string",\n          "name": "string" // name is not required\n        },\n        "elements": [\n          // this field is optional depending on report is cross-tab or not\n          {\n            "formValues": [\n              // formValues is not required\n              "string"\n            ],\n            "id": "string" // attribute element id\n          }\n        ],\n        "subtotalsPosition": "string", // possible values: "first", "last", "mixed", "inherit", default: "inherit"\n        "order": "ascending"\n      }\n    ],\n    "columns": [\n      // the same as rows\n    ],\n    "pageBy": [\n      // sorting on page-by axis. for this axis, metric sort is not allowed\n      // the same as rows, except that metric sort is not allowed in this axis\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"The sorting code for a sample body parameter with actual data is shown below. This code includes all the properties for each kind of sorting."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sorting": {\n    "rows": [\n      {\n        "type": "attribute",\n        "attribute": {\n          "id": "8D679D4B11D3E4981000E787EC6DE8A4",\n          "name": "Region"\n        }\n      },\n      {\n        "type": "metric",\n        "metric": {\n          "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n          "name": "Cost"\n        },\n        "elements": [\n          {\n            "formValues": ["2014"],\n            "id": "h2014;8D679D5111D3E4981000E787EC6DE8A4" // 2014 element of Year\n          }\n        ],\n        "subtotalsPosition": "mixed",\n        "order": "descending"\n      }\n    ],\n    "columns": [\n      {\n        "type": "subtotalsPosition",\n        "subtotalsPosition": "last"\n      },\n      {\n        "type": "attribute",\n        "attribute": {\n          "id": "8D679D5111D3E4981000E787EC6DE8A4",\n          "name": "Year"\n        }\n      }\n    ],\n    "pageBy": [\n      {\n        "type": "attribute",\n        "attribute": {\n          "id": "8D679D3811D3E4981000E787EC6DE8A4",\n          "name": "Country"\n        }\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"Here is slightly different sorting code that produces the same results. This code does not include properties that are not required, such as type and name, but it produces the same JSON output as the previous code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sorting": {\n    "rows": [\n      {\n        "attribute": {\n          "id": "8D679D4B11D3E4981000E787EC6DE8A4"\n        }\n      },\n      {\n        "metric": {\n          "id": "7FD5B69611D5AC76C000D98A4CC5F24F"\n        },\n        "elements": [\n          {\n            "id": "h2014;8D679D5111D3E4981000E787EC6DE8A4"\n          }\n        ],\n        "subtotalsPosition": "mixed",\n        "order": "descending"\n      }\n    ],\n    "columns": [\n      {\n        "subtotalsPosition": "last"\n      },\n      {\n        "attribute": {\n          "id": "8D679D5111D3E4981000E787EC6DE8A4"\n        }\n      }\n    ],\n    "pageBy": [\n      {\n        "attribute": {\n          "id": "8D679D3811D3E4981000E787EC6DE8A4"\n        }\n      }\n    ]\n  }\n}\n')),(0,o.kt)("h3",{id:"sample-json-output"},"Sample JSON output"),(0,o.kt)("p",null,"When you use the sorting parameter in the request body, the output of the endpoint includes the sorting definition, which is shown in the JSON output shown below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "Demo Report",\n   "id": "D380293E4CC8AE5AACAC66B75F9C7999",\n   "instanceId": "F48AF33E11EB297ED2F20080EF05A058",\n   "status": 1,\n   "definition": {\n       "grid": {\n           "crossTab": true,\n           "metricsPosition": {\n               "axis": "columns",\n               "index": 2\n           },\n           "rows": [ ... ],\n           "columns": [ ... ],\n           "pageBy": [ ... ],\n           "subtotals": { ... },\n           "sorting": {\n               "rows": [\n                   {\n                       "type": "form",\n                       "attribute": {\n                           "id": "8D679D5111D3E4981000E787EC6DE8A4",\n                           "name": "Year"\n                       },\n                       "form": {\n                           "id": "45C11FA478E745FEA08D781CEA190FE5",\n                           "name": "ID"\n                       },\n                       "subtotalsPosition": "first",\n                       "order": "descending"\n                   },\n                   {\n                       "type": "metric",\n                       "metric": {\n                           "id": "4C051DB611D3E877C000B3B2D86C964F",\n                           "name": "Profit"\n                       },\n                       "elements": [\n                           {\n                               "formValues": [\n                                   "USA"\n                               ],\n                               "id": "h1;8D679D3811D3E4981000E787EC6DE8A4"\n                           },\n                           {\n                               "formValues": [\n                                   "Central"\n                               ],\n                               "id": "h4;8D679D4B11D3E4981000E787EC6DE8A4"\n                           }\n                       ],\n                       "subtotalsPosition": "mixed",\n                       "order": "ascending"\n                   }\n               ],\n               "columns": [\n                   {\n                       "type": "subtotalsPosition",\n                       "subtotalsPosition": "first",\n                       "order": "ascending"\n                   }\n               ],\n               "pageBy": [\n                   {\n                       "type": "form",\n                       "attribute": {\n                           "id": "8D679D3711D3E4981000E787EC6DE8A4",\n                           "name": "Category"\n                       },\n                       "form": {\n                           "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n                           "name": "DESC"\n                       },\n                       "subtotalsPosition": "inherit",\n                       "order": "ascending"\n                   }\n               ]\n           },\n           "thresholds": []\n       }\n   },\n   "data": { ... }\n}\n')),(0,o.kt)("h3",{id:"possible-sorting-errors"},"Possible sorting errors"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Invalid input"),(0,o.kt)("th",{parentName:"tr",align:null},"Error message"),(0,o.kt)("th",{parentName:"tr",align:null},"HTTP response code"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Metric ID is null or empty"),(0,o.kt)("td",{parentName:"tr",align:null},"Metric ID should not be null or empty in the sorting array","[i]"),(0,o.kt)("td",{parentName:"tr",align:null},"400")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Metric ID does not belong to the current cube"),(0,o.kt)("td",{parentName:"tr",align:null},"Failed to find the metric {metric id} in the template"),(0,o.kt)("td",{parentName:"tr",align:null},"400")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Attribute ID is null or empty"),(0,o.kt)("td",{parentName:"tr",align:null},"Attribute ID should not be null or empty in the sorting array","[i]"),(0,o.kt)("td",{parentName:"tr",align:null},"400")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Attribute ID does not belong to the current cube"),(0,o.kt)("td",{parentName:"tr",align:null},"Failed to find the attribute {attribute id} in the template"),(0,o.kt)("td",{parentName:"tr",align:null},"400")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Attribute form ID is null or empty"),(0,o.kt)("td",{parentName:"tr",align:null},"Attribute form ID should not be null or empty in the sorting array","[i]"),(0,o.kt)("td",{parentName:"tr",align:null},"400")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Attribute form ID does not belong to the current cube"),(0,o.kt)("td",{parentName:"tr",align:null},"Failed to find the attribute form {attribute form id} in the template"),(0,o.kt)("td",{parentName:"tr",align:null},"400")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Node type is incorrect"),(0,o.kt)("td",{parentName:"tr",align:null},"Incorrect node type. Supported node types are 'metric', 'form', 'attribute' and 'subtotalsPosition' currently."),(0,o.kt)("td",{parentName:"tr",align:null},"400")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Order or subtotals position cannot be set for attribute default sort"),(0,o.kt)("td",{parentName:"tr",align:null},"It is forbidden to set 'order' and 'subtotalsPosition' for attribute default sort."),(0,o.kt)("td",{parentName:"tr",align:null},"400")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Subtotals position sort can only be applied as the first sorting on axis"),(0,o.kt)("td",{parentName:"tr",align:null},"Subtotals position sort can be only applied as the first sorting in the axis, but found in index {0} of axis {1}"),(0,o.kt)("td",{parentName:"tr",align:null},"400")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"The elements of metric sort do not match the elements of attributes in the opposite axis."),(0,o.kt)("td",{parentName:"tr",align:null},"The elements of metric sort for metric id {metric id} in axis {axis name} does not match the attributes in axis {opposite axis name}."),(0,o.kt)("td",{parentName:"tr",align:null},"400")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Metric sort cannot be applied in page-by."),(0,o.kt)("td",{parentName:"tr",align:null},"Metric sort cannot be applied in page-by."),(0,o.kt)("td",{parentName:"tr",align:null},"400")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Subtotals position 'mixed' can only be applied in metric sort."),(0,o.kt)("td",{parentName:"tr",align:null},"Subtotals position 'mixed' cannot be applied for sort of type {sort type}."),(0,o.kt)("td",{parentName:"tr",align:null},"400")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Invalid subtotals position value."),(0,o.kt)("td",{parentName:"tr",align:null},"Unknown subtotals position value {0}."),(0,o.kt)("td",{parentName:"tr",align:null},"400")))))}m.isMDXComponent=!0}}]);