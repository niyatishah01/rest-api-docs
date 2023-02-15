"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[7606],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2730:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),l=["components"],i={title:"Code sample - Filter reports and cubes using view filters",description:"The code sample for filter reports and cubes using view filters."},s=void 0,p={unversionedId:"common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/code-sample",id:"common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/code-sample",title:"Code sample - Filter reports and cubes using view filters",description:"The code sample for filter reports and cubes using view filters.",source:"@site/docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/code-sample.md",sourceDirName:"common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters",slug:"/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/code-sample",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/code-sample",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/code-sample.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1676479687,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{title:"Code sample - Filter reports and cubes using view filters",description:"The code sample for filter reports and cubes using view filters."},sidebar:"tutorialSidebar",previous:{title:"Supported constant data types for view filters",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-constant-data-types"},next:{title:"Error messages for view filters",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/error-messages"}},u={},c=[{value:"Filter on attribute elements",id:"filter-on-attribute-elements",level:2},{value:"Filter on attribute forms",id:"filter-on-attribute-forms",level:2},{value:"Multiple filters on attribute forms",id:"multiple-filters-on-attribute-forms",level:2},{value:"Filter on metrics",id:"filter-on-metrics",level:2},{value:"Combine filters",id:"combine-filters",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"viewLimits")," parameter can include multiple filters, with both metric and attribute qualifications, and these filters can be nested to support more complex filtering logic. Each filter includes a ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-operators"},"supported operator")," and two operands. The first operand specifies the attribute element, attribute form, or metric that will be evaluated, and the second operand specifies the attribute element, metric or constant that it will be qualified against."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"viewFilter": {\n  "operator": "string",\n  "operands": [\n    {\n      "operator": "string",\n      "operands": []\n    },\n    {\n    "operator": "string",\n    "operands": []\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Code samples are provided for the following view filter scenarios:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#filter-on-attribute-elements"},"Filter on attribute elements")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#filter-on-attribute-forms"},"Filter on attribute forms")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#multiple-filters-on-attribute-forms"},"Multiple filters on attribute forms")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#filter-on-metrics"},"Filter on metrics"))),(0,o.kt)("p",null,"There are several code samples for metric filtering, using different operators. There is also a code sample for ",(0,o.kt)("a",{parentName:"p",href:"#combine-filters"},"combining filters"),"."),(0,o.kt)("p",null,"Each code sample assumes that you are using a report or cube with the following data:"),(0,o.kt)("p",null,"Attributes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Category"),(0,o.kt)("li",{parentName:"ul"},"Item"),(0,o.kt)("li",{parentName:"ul"},"Region"),(0,o.kt)("li",{parentName:"ul"},"Year"),(0,o.kt)("li",{parentName:"ul"},"Quarter")),(0,o.kt)("p",null,"Metrics"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Units Sold"),(0,o.kt)("li",{parentName:"ul"},"Cost"),(0,o.kt)("li",{parentName:"ul"},"Revenue"),(0,o.kt)("li",{parentName:"ul"},"Profit")),(0,o.kt)("p",null,"Each code sample returns only the subset of data defined by the specific view filter for that sample."),(0,o.kt)("h2",{id:"filter-on-attribute-elements"},"Filter on attribute elements"),(0,o.kt)("p",null,"Requested data: Get all report or cube data for Electronics"),(0,o.kt)("p",null,"Filter definition: ",(0,o.kt)("strong",{parentName:"p"},"Category in Electronics")),(0,o.kt)("p",null,"Operator used: ",(0,o.kt)("strong",{parentName:"p"},"In")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "viewFilter": {\n    "operator": "In",\n    "operands": [\n      {\n        "type": "attribute",\n        "id": "8D679D3711D3E4981000E787EC6DE8A4",\n        "name": "Category"\n      },\n      {\n        "type": "elements",\n        "elements": [\n          {\n            "id": "8D679D3711D3E4981000E787EC6DE8A4:2",\n            "name": "Electronics"\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,o.kt)("h2",{id:"filter-on-attribute-forms"},"Filter on attribute forms"),(0,o.kt)("p",null,"Requested data: Get all report or cube data where the ID form of Category is between 1 and 3"),(0,o.kt)("p",null,"Filter definition: ",(0,o.kt)("strong",{parentName:"p"},"Category@ID between 1 and 3")),(0,o.kt)("p",null,"Operator used: ",(0,o.kt)("strong",{parentName:"p"},"Between")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "viewFilter": {\n    "operator": "Between",\n    "operands": [\n      {\n        "type": "form",\n        "attribute": {\n          "id": "8D679D3711D3E4981000E787EC6DE8A4",\n          "name": "Category"\n        },\n        "form": {\n          "id": "45C11FA478E745FEA08D781CEA190FE5",\n          "name": "ID"\n        }\n      },\n      {\n        "type": "constant",\n        "dataType": "Real",\n\n        "value": "1"\n      },\n      {\n        "type": "constant",\n        "dataType": "Real",\n        "value": "3"\n      }\n    ]\n  }\n}\n')),(0,o.kt)("h2",{id:"multiple-filters-on-attribute-forms"},"Multiple filters on attribute forms"),(0,o.kt)("p",null,"Requested data: Get all report or cube data where the value of items are The Painted Word and Hirschfeld on Line."),(0,o.kt)("p",null,"Filter definition: ",(0,o.kt)("strong",{parentName:"p"},"DESC@ID of The Painted Word and Hirschfeld on Line")),(0,o.kt)("p",null,"Operator used: ",(0,o.kt)("strong",{parentName:"p"},"In")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "viewFilter": {\n    "operator": "In",\n    "operands": [\n      {\n        "type": "form",\n        "attribute": {\n          "id": "8D679D4211D3E4981000E787EC6DE8A4"\n        },\n        "form": {\n          "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n          "name": "DESC"\n        }\n      },\n      {\n        "type": "constants",\n        "dataType": "Char",\n        "values": ["The Painted Word", "Hirschfeld on Line"]\n      }\n    ]\n  }\n}\n')),(0,o.kt)("h2",{id:"filter-on-metrics"},"Filter on metrics"),(0,o.kt)("p",null,"Requested data: Get report or cube data with revenue less than cost (i.e., cost greater than revenue)"),(0,o.kt)("p",null,"Filter definition: ",(0,o.kt)("strong",{parentName:"p"},"Cost > Revenue")),(0,o.kt)("p",null,"Operator used: ",(0,o.kt)("strong",{parentName:"p"},"Greater")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "viewFilter": {\n    "operator": "Greater",\n    "operands": [\n      {\n        "type": "metric",\n        "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n        "name": "Cost"\n      },\n      {\n        "type": "metric",\n        "id": "4C05177011D3E877C000B3B2D86C964F",\n        "name": "Revenue"\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"Requested data: Get report or cube data with cost between $200,000 and $400,000"),(0,o.kt)("p",null,"Filter definition: ",(0,o.kt)("strong",{parentName:"p"},"200000 < Cost < 400000")),(0,o.kt)("p",null,"Operator used: ",(0,o.kt)("strong",{parentName:"p"},"Between")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "viewFilter": {\n    "operator": "Between",\n    "operands": [\n      {\n        "type": "metric",\n        "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n        "name": "Cost"\n      },\n      {\n        "type": "constant",\n        "dataType": "Real",\n        "value": "200000"\n      },\n      {\n        "type": "constant",\n        "dataType": "Real",\n        "value": "400000"\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"Requested data: Get report or cube data with cost greater than or equal to $500,000"),(0,o.kt)("p",null,"Filter : ",(0,o.kt)("strong",{parentName:"p"},"Cost >= 500000")),(0,o.kt)("p",null,"Operator used: ",(0,o.kt)("strong",{parentName:"p"},"GreaterEqual")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "viewFilter": {\n    "operator": "GreaterEqual",\n    "operands": [\n      {\n        "type": "metric",\n        "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n        "name": "Cost"\n      },\n      {\n        "type": "constant",\n        "dataType": "Real",\n        "value": "500000"\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"Requested data: Get report or cube data with the top 20% of Cost"),(0,o.kt)("p",null,"Filter definition: ",(0,o.kt)("strong",{parentName:"p"},"Top 20 percent (Cost)")),(0,o.kt)("p",null,"Operator used: ",(0,o.kt)("strong",{parentName:"p"},"Percent.Top")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "viewFilter": {\n    "operator": "Percent.Top",\n    "operands": [\n      {\n        "type": "metric",\n        "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n        "name": "Cost"\n      },\n      {\n        "type": "constant",\n        "dataType": "Real",\n        "value": "20%"\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"Requested data: Get report or cube data with the top three Cost values"),(0,o.kt)("p",null,"Filter definition: ",(0,o.kt)("strong",{parentName:"p"},"Top 3 (Cost)")),(0,o.kt)("p",null,"Operator used: ",(0,o.kt)("strong",{parentName:"p"},"Rank.Top")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "viewFilter": {\n    "operator": "Rank.Top",\n\n    "operands": [\n      {\n        "type": "metric",\n        "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n        "name": "Cost"\n      },\n      {\n        "type": "constant",\n        "dataType": "Real",\n        "value": "3"\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"Requested data: Get report or cube data with Revenue percentage rank equal to 50%"),(0,o.kt)("p",null,"Filter definition: ",(0,o.kt)("strong",{parentName:"p"},"Revenue percentage rank equal to 50 percent")),(0,o.kt)("p",null,"Operator used: ",(0,o.kt)("strong",{parentName:"p"},"Percent.Equals")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "viewFilter": {\n    "operator": "Percent.Equals",\n    "operands": [\n      {\n        "type": "metric",\n        "id": "2FBA0F9B416EFE38DCF22F8CFE4AA75C",\n        "name": "Revenue"\n      },\n      {\n        "type": "constant",\n        "dataType": "Real",\n        "value": "0.5"\n      }\n    ]\n  }\n}\n')),(0,o.kt)("h2",{id:"combine-filters"},"Combine filters"),(0,o.kt)("p",null,"Requested data: Get Cost and Revenue for Electronics for the Northeast and Northwest"),(0,o.kt)("p",null,"Filter definition: ",(0,o.kt)("strong",{parentName:"p"},"(Region in Northeast, Northwest) and (Category in Electronics)")),(0,o.kt)("p",null,"Operators: ",(0,o.kt)("strong",{parentName:"p"},"And"),",",(0,o.kt)("strong",{parentName:"p"},"In")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "viewFilter": {\n    "operator": "And",\n    "operands": [\n      {\n        "operator": "In",\n        "operands": [\n          {\n            "type": "attribute",\n            "id": "8D679D4B11D3E4981000E787EC6DE8A4",\n            "name": "Region"\n          },\n          {\n            "type": "elements",\n            "elements": [\n              {\n                "id": "h1;8D679D4B11D3E4981000E787EC6DE8A4",\n                "name": "Northeast"\n              },\n              {\n                "id": "h6;8D679D4B11D3E4981000E787EC6DE8A4",\n                "name": "Northwest"\n              }\n            ]\n          }\n        ]\n      },\n      {\n        "operator": "In",\n        "operands": [\n          {\n            "type": "attribute",\n            "id": "8D679D3711D3E4981000E787EC6DE8A4",\n            "name": "Category"\n          },\n          {\n            "type": "elements",\n            "elements": [\n              {\n                "id": "8D679D3711D3E4981000E787EC6DE8A4:2",\n                "name": "Electronics"\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"Requested data: Get all report or cube data for the Northeast and Northwest or with cost greater than or equal to $500,"),(0,o.kt)("p",null,"Filter definition: ",(0,o.kt)("strong",{parentName:"p"},"(Region in Northeast, Northwest) or (Cost >= $500,000)")),(0,o.kt)("p",null,"Operators: ",(0,o.kt)("strong",{parentName:"p"},"Or"),", ",(0,o.kt)("strong",{parentName:"p"},"In"),", ",(0,o.kt)("strong",{parentName:"p"},"GreaterEqual")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "viewFilter": {\n    "operator": "Or",\n    "operands": [\n      {\n        "operator": "In",\n        "operands": [\n          {\n            "type": "attribute",\n            "id": "8D679D4B11D3E4981000E787EC6DE8A4",\n            "name": "Region"\n          },\n          {\n            "type": "elements",\n            "elements": [\n              {\n                "id": "h1;8D679D4B11D3E4981000E787EC6DE8A4",\n                "name": "Northeast"\n              },\n              {\n                "id": "h6;8D679D4B11D3E4981000E787EC6DE8A4",\n                "name": "Northwest"\n              }\n            ]\n          }\n        ]\n      },\n      {\n        "operator": "GreaterEqual",\n        "operands": [\n          {\n            "type": "metric",\n            "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n            "name": "Cost"\n          },\n          {\n            "type": "constant",\n            "dataType": "Real",\n            "value": "500000"\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"Requested data: Get all report or cube data with cost not between $200,000 and $400,"),(0,o.kt)("p",null,"Filter definition: ",(0,o.kt)("strong",{parentName:"p"},"Not 200000 < Cost < 400000")),(0,o.kt)("p",null,"Operators: ",(0,o.kt)("strong",{parentName:"p"},"Not, Between")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "viewFilter": {\n    "operator": "Not",\n    "operands": [\n      {\n        "operator": "Between",\n        "operands": [\n          {\n            "type": "metric",\n            "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n            "name": "Cost"\n          },\n          {\n            "type": "constant",\n            "dataType": "Real",\n            "value": "200000"\n          },\n          {\n            "type": "constant",\n            "dataType": "Real",\n            "value": "400000"\n          }\n        ]\n      }\n    ]\n  }\n}\n')))}m.isMDXComponent=!0}}]);