"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3951],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return c}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),p=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(m.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=p(a),c=r,g=u["".concat(m,".").concat(c)]||u[c]||s[c]||l;return a?n.createElement(g,i(i({ref:e},d),{},{components:a})):n.createElement(g,i({ref:e},d))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5632:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),i=["components"],o={title:"Workflow sample - Update a metric's definition within a changeset",sidebar_label:"Update a metric's definition within a changeset",description:"This workflow sample demonstrates how to update a base formula's definition through the Modeling service."},m=void 0,p={unversionedId:"common-workflows/manage-metric-objects/update-a-metrics-definition-within-a-changeset",id:"common-workflows/manage-metric-objects/update-a-metrics-definition-within-a-changeset",title:"Workflow sample - Update a metric's definition within a changeset",description:"This workflow sample demonstrates how to update a base formula's definition through the Modeling service.",source:"@site/docs/common-workflows/manage-metric-objects/update-a-metrics-definition-within-a-changeset.md",sourceDirName:"common-workflows/manage-metric-objects",slug:"/common-workflows/manage-metric-objects/update-a-metrics-definition-within-a-changeset",permalink:"/rest-api-docs/common-workflows/manage-metric-objects/update-a-metrics-definition-within-a-changeset",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-metric-objects/update-a-metrics-definition-within-a-changeset.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1671571075,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{title:"Workflow sample - Update a metric's definition within a changeset",sidebar_label:"Update a metric's definition within a changeset",description:"This workflow sample demonstrates how to update a base formula's definition through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a metric within a changeset",permalink:"/rest-api-docs/common-workflows/manage-metric-objects/create-a-metric-within-a-changeset"},next:{title:"Manage object's translations",permalink:"/rest-api-docs/common-workflows/manage-object-translations/"}},d={},s=[{value:"Update the metric&#39;s definition using PUT /api/model/metrics/{metricId}",id:"update-the-metrics-definition-using-put-apimodelmetricsmetricid",level:2}],u={toc:s};function c(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,l.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-cd346c9a-019b-401a-9470-6097a5d9b24a?ctx=documentation"},"REST API Playground"),"."),(0,l.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,l.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,l.kt)("p",null,"This workflow sample demonstrates how to update a base formula's definition through the Modeling service."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.")),(0,l.kt)("p",null,"You want to update the definition of the ",(0,l.kt)("inlineCode",{parentName:"p"},'"base_sum(Cost)"')," base formula with object ID ",(0,l.kt)("inlineCode",{parentName:"p"},"1116B53103FC4A72BBACBAED388243D6")," to achieve the below changes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Modify the expression to ",(0,l.kt)("inlineCode",{parentName:"li"},"\u201csum(Profit)-sum(Cost)\u201c")),(0,l.kt)("li",{parentName:"ul"},"Move it to another objects folder with the ID of ",(0,l.kt)("inlineCode",{parentName:"li"},"8AF48B3D4685C1717B3BDA9804CD1036")),(0,l.kt)("li",{parentName:"ul"},"Rename the base formula to ",(0,l.kt)("inlineCode",{parentName:"li"},'"Revenue"'))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,l.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,l.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets see ",(0,l.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/changesets"},"Changesets"),".")),(0,l.kt)("h2",{id:"update-the-metrics-definition-using-put-apimodelmetricsmetricid"},"Update the metric's definition using ",(0,l.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Metrics/ms-putMetric"},"PUT /api/model/metrics/{metricId}")),(0,l.kt)("p",null,'"subType" cannot be modified through REST API .'),(0,l.kt)("p",null,"Sample Request Header:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "b4e54r86h5aja3inksrklee4d7"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n"X-MSTR-MS-Changeset": "EB3A4F66E6A8413E9C36633533D0BA31"\n"Content-Type": "application/json"\n')),(0,l.kt)("p",null,"Sample Request Body:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": { "name": "Cost" },\n  "dimty": {\n    "dimtyUnits": [\n      {\n        "dimtyUnitType": "report_base_level",\n        "aggregation": "normal",\n        "filtering": "apply",\n        "groupBy": true\n      }\n    ],\n    "excludeAttribute": false,\n    "allowAddingUnit": true,\n    "subtotalFromBase": true\n  },\n  "dataType": { "type": "double", "precision": 0, "scale": 0 }\n}\n')),(0,l.kt)("p",null,"Sample Curl:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "http://demo.microstrategy.com/MicroStrategyLibrary/api//model/metrics/A349A2D143F64F5ED6654696A31FAC63" -H "accept: application/json" -H "X-MSTR-AuthToken: vou86a0sjelh4abm2oh274ghos" -H "X-MSTR-MS-Changeset: E839A2FE06AF4BCB947B678A6E8E6EAA" -H "Content-Type: application/json" -d "{\\"information\\":{\\"name\\":\\"Cost\\"},\\"dimty\\":{\\"dimtyUnits\\":[{\\"dimtyUnitType\\":\\"report_base_level\\",\\"aggregation\\":\\"normal\\",\\"filtering\\":\\"apply\\",\\"groupBy\\":true}],\\"excludeAttribute\\":false,\\"allowAddingUnit\\":true},\\"dataType\\":{\\"type\\":\\"double\\",\\"precision\\":0,\\"scale\\":0}}"\n')),(0,l.kt)("p",null,"Sample Response Body:"),(0,l.kt)("p",null,"You can view the updated metric's definition in the body of the response."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{  "information": {    "dateCreated": "2022-03-17T09:03:23.096Z",    "dateModified": "2022-03-17T09:03:23.096Z",    "versionId": "C009C064453C6AAD2E12F79861D69A9B",    "primaryLocale": "en-US",    "objectId": "A349A2D143F64F5ED6654696A31FAC63",    "subType": "metric",    "name": "Cost"  },  "expression": {    "text": "Sum(Cost)"  },  "dimty": {    "dimtyUnits": [      {        "dimtyUnitType": "report_base_level",        "aggregation": "normal",        "filtering": "apply",        "groupBy": true      }    ],    "excludeAttribute": false,    "allowAddingUnit": true  },  "conditionality": {    "filter": {      "objectId": "E638359211D5C49EC0000C881FDA1A4F",      "subType": "filter",      "name": "Select a Quarter"    },    "embedMethod": "metric_into_report_filter",    "removeElements": true  },  "metricSubtotals": [    {      "definition": {        "objectId": "96C487AF4D12472A910C1ACACFB56EFB",        "subType": "system_subtotal",        "name": "Total"      },      "implementation": {        "objectId": "B328C60462634223B2387D4ADABEEB53",        "subType": "system_subtotal",        "name": "Average"      }    },    {      "definition": {        "objectId": "078C50834B484EE29948FA9DD5300ADF",        "subType": "system_subtotal",        "name": "Count"      }    },    {      "definition": {        "objectId": "B328C60462634223B2387D4ADABEEB53",        "subType": "system_subtotal",        "name": "Average"      }    },    {      "definition": {        "objectId": "00B7BFFF967F42C4B71A4B53D90FB095",        "subType": "system_subtotal",        "name": "Minimum"      }    },    {      "definition": {        "objectId": "B1F4AA7DE683441BA559AA6453C5113E",        "subType": "system_subtotal",        "name": "Maximum"      }    },    {      "definition": {        "objectId": "F225147A4CA0BB97368A5689D9675E73",        "subType": "system_subtotal",        "name": "Aggregation"      },      "implementation": {        "objectId": "078C50834B484EE29948FA9DD5300ADF",        "subType": "system_subtotal",        "name": "Count"      }    }  ],  "aggregateFromBase": false,  "formulaJoinType": "inner",  "smartTotal": "decomposable_false",  "dataType": {    "type": "double",    "precision": 0,    "scale": 0  },  "format": {    "header": [      {        "type": "number_category",        "value": "0"      },      {        "type": "number_decimal_places",        "value": "2"      },      {        "type": "number_thousand_separator",        "value": "true"      },      {        "type": "number_currency_symbol",        "value": "$"      },      {        "type": "number_currency_position",        "value": "0"      },      {        "type": "number_format",        "value": "#,##0.00;(#,##0.00)"      },      {        "type": "number_negative_numbers",        "value": "3"      },      {        "type": "background_fill_color",        "value": "3355443"      },      {        "type": "background_pattern_style",        "value": "1"      },      {        "type": "background_fill_style",        "value": "0"      },      {        "type": "background_gradient_angle",        "value": "0"      },      {        "type": "background_gradient_x_offset",        "value": "0"      },      {        "type": "series_fill_style",        "value": "0"      },      {        "type": "series_fill_color",        "value": "8388608"      },      {        "type": "series_gradient_angle",        "value": "0"      },      {        "type": "series_gradient_x_offset",        "value": "0"      }    ],    "values": [      {        "type": "number_category",        "value": "0"      },      {        "type": "number_decimal_places",        "value": "0"      },      {        "type": "number_format",        "value": "#,##0;(#,##0)"      }    ]  },  "subtotalFromBase": true,  "columnNameAlias": "test",  "metricFormatType": "reserved",  "thresholds": []}Response headers\n')),(0,l.kt)("p",null,"Response Code: 200 (The Metric's definition is updated successfully in the changeset.)"),(0,l.kt)("p",null,"The model for the definition of a metric can be updated with the following fields:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Fields"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"information"),(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the metric. This is the most user-friendly value that can be used to identify the metric."),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"destinationFolderId"),(0,l.kt)("td",{parentName:"tr",align:null},"Folder ID where the new metric is saved."),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expression"),(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"A human readable, but non-parsable text, describing the expression."),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tree"),(0,l.kt)("td",{parentName:"tr",align:null},"A tree data structure fully defining the expression."),(0,l.kt)("td",{parentName:"tr",align:null},"List","<","ObjectInfoReference",">"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tokens"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of parsed tokens."),(0,l.kt)("td",{parentName:"tr",align:null},"List","<","ObjectInfoReference",">"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dimty"),(0,l.kt)("td",{parentName:"tr",align:null},"dimtyUnits"),(0,l.kt)("td",{parentName:"tr",align:null},"Dimty contains a list of DimtyUnit, which describes the level that the metric can be calculated."),(0,l.kt)("td",{parentName:"tr",align:null},"List","<","ObjectInfoReference",">"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"excludeAttribute"),(0,l.kt)("td",{parentName:"tr",align:null},"If true, exclude attributes absent in report or level. If false, do not exclude."),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allowAddingUnit"),(0,l.kt)("td",{parentName:"tr",align:null},"This setting allows other users to add extra units to this definition."),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prompt"),(0,l.kt)("td",{parentName:"tr",align:null},"This points to the level prompt."),(0,l.kt)("td",{parentName:"tr",align:null},"ObjectInfoReference"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"conditionality"),(0,l.kt)("td",{parentName:"tr",align:null},"filter"),(0,l.kt)("td",{parentName:"tr",align:null},"The reference to a filter."),(0,l.kt)("td",{parentName:"tr",align:null},"ObjectInfoReference"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prompt"),(0,l.kt)("td",{parentName:"tr",align:null},"The reference to an object prompt."),(0,l.kt)("td",{parentName:"tr",align:null},"ObjectInfoReference"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"embedMethod"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates the embedding method for the filter with report filter."),(0,l.kt)("td",{parentName:"tr",align:null},"EnumDSSEmbedMethod"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"removeElements"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates whether to remove related report filter elements. True to remove."),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metricSubtotals"),(0,l.kt)("td",{parentName:"tr",align:null},"definition"),(0,l.kt)("td",{parentName:"tr",align:null},"An object reference which reference to the subtotal object."),(0,l.kt)("td",{parentName:"tr",align:null},"ObjectInfoReference"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes, if metricSubtotals is provided .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"implementation"),(0,l.kt)("td",{parentName:"tr",align:null},"When the total subtotal function is set to one object, this field will reference to that object only when the definition field references to Total.",(0,l.kt)("br",null),(0,l.kt)("br",null),"When the dynamic aggregation function is set to one object, this field will reference to that object only when the definition field references to Aggregation.",(0,l.kt)("br",null),(0,l.kt)("br",null),"For subtotals except Total and Aggregation, this field should be empty."),(0,l.kt)("td",{parentName:"tr",align:null},"ObjectInfoReference"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aggregateFromBase"),(0,l.kt)("td",{parentName:"tr",align:null},"aggregateFromBase"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates the aggregation type. True to aggregate from base."),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FormulaJoinType"),(0,l.kt)("td",{parentName:"tr",align:null},"formulaJoinType"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates formula join type with three options: Default, Inner, or Outer"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data type"),(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates the data type."),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"precision"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates the precision."),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scale"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates the scale."),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"smartTotal"),(0,l.kt)("td",{parentName:"tr",align:null},"smartTotal"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates the calculation type of total."),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"format"),(0,l.kt)("td",{parentName:"tr",align:null},"format"),(0,l.kt)("td",{parentName:"tr",align:null},"Contains the header format and value format."),(0,l.kt)("td",{parentName:"tr",align:null},"Format"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subtotalFromBase"),(0,l.kt)("td",{parentName:"tr",align:null},"subtotalFromBase"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates the subtotal type. True to subtotal from base."),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"columnNameAlias"),(0,l.kt)("td",{parentName:"tr",align:null},"columnNameAlias"),(0,l.kt)("td",{parentName:"tr",align:null},"This name is used in SQL generation."),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metricFormatType"),(0,l.kt)("td",{parentName:"tr",align:null},"metricFormatType"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates the metric format type."),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"thresholds"),(0,l.kt)("td",{parentName:"tr",align:null},"format"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of FormatProperty that defines the format."),(0,l.kt)("td",{parentName:"tr",align:null},"List","<","FormatProperty",">"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"condition"),(0,l.kt)("td",{parentName:"tr",align:null},"The filter expression for the threshold."),(0,l.kt)("td",{parentName:"tr",align:null},"Expression"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes, if thresholds is provided."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the threshold."),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"replaceText"),(0,l.kt)("td",{parentName:"tr",align:null},"The text used to replace the metric value."),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"semantics"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates the semantics used by the threshold."),(0,l.kt)("td",{parentName:"tr",align:null},"EnumDSSBaseFormType"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scope"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates the scope applied by the threshold."),(0,l.kt)("td",{parentName:"tr",align:null},"EnumDSSBaseFormType"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enable"),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value that indicates whether this threshold is enabled."),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);