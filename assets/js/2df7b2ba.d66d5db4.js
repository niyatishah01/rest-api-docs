"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[4119],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),d=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(m.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=d(n),c=r,g=u["".concat(m,".").concat(c)]||u[c]||s[c]||l;return n?a.createElement(g,i(i({ref:e},p),{},{components:n})):a.createElement(g,i({ref:e},p))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8247:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return u}});var a,r=n(3117),l=n(102),i=(n(7294),n(3905)),o=["components"],m={title:"Update a metric's definition within a changeset",sidebar_label:"Update a metric's definition within a changeset",description:"This workflow sample demonstrates how to update a base formula's definition through the Modeling service."},d=void 0,p={unversionedId:"common-workflows/modeling/manage-metric-objects/update-a-metrics-definition-within-a-changeset",id:"common-workflows/modeling/manage-metric-objects/update-a-metrics-definition-within-a-changeset",title:"Update a metric's definition within a changeset",description:"This workflow sample demonstrates how to update a base formula's definition through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-metric-objects/update-a-metrics-definition-within-a-changeset.md",sourceDirName:"common-workflows/modeling/manage-metric-objects",slug:"/common-workflows/modeling/manage-metric-objects/update-a-metrics-definition-within-a-changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-metric-objects/update-a-metrics-definition-within-a-changeset",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-metric-objects/update-a-metrics-definition-within-a-changeset.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1676479687,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{title:"Update a metric's definition within a changeset",sidebar_label:"Update a metric's definition within a changeset",description:"This workflow sample demonstrates how to update a base formula's definition through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Create a metric within a changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-metric-objects/create-a-metric-within-a-changeset"},next:{title:"Manage prompt objects",permalink:"/rest-api-docs/common-workflows/modeling/manage-prompt-objects/"}},s={},u=[{value:"Update the metric&#39;s definition using PUT /api/model/metrics/{metricId}",id:"update-the-metrics-definition-using-put-apimodelmetricsmetricid",level:2}],c=(a="Available",function(t){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}),g={toc:u};function k(t){var e=t.components,n=(0,l.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)(c,{since:"2021 Update 5",mdxType:"Available"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-cd346c9a-019b-401a-9470-6097a5d9b24a?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"This workflow sample demonstrates how to update a base formula's definition through the Modeling service."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.")),(0,i.kt)("p",null,"You want to update the definition of the ",(0,i.kt)("inlineCode",{parentName:"p"},'"base_sum(Cost)"')," base formula with object ID ",(0,i.kt)("inlineCode",{parentName:"p"},"1116B53103FC4A72BBACBAED388243D6")," to achieve the below changes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Modify the expression to ",(0,i.kt)("inlineCode",{parentName:"li"},"\u201csum(Profit)-sum(Cost)\u201c")),(0,i.kt)("li",{parentName:"ul"},"Move it to another objects folder with the ID of ",(0,i.kt)("inlineCode",{parentName:"li"},"8AF48B3D4685C1717B3BDA9804CD1036")),(0,i.kt)("li",{parentName:"ul"},"Rename the base formula to ",(0,i.kt)("inlineCode",{parentName:"li"},'"Revenue"'))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Changesets are used in this workflow. For information on how to create and use changesets see ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),".")),(0,i.kt)("h2",{id:"update-the-metrics-definition-using-put-apimodelmetricsmetricid"},"Update the metric's definition using ",(0,i.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Metrics/ms-putMetric"},"PUT /api/model/metrics/{metricId}")),(0,i.kt)("p",null,'"subType" cannot be modified through REST API .'),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "b4e54r86h5aja3inksrklee4d7"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n"X-MSTR-MS-Changeset": "EB3A4F66E6A8413E9C36633533D0BA31"\n"Content-Type": "application/json"\n')),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": { "name": "Cost" },\n  "dimty": {\n    "dimtyUnits": [\n      {\n        "dimtyUnitType": "report_base_level",\n        "aggregation": "normal",\n        "filtering": "apply",\n        "groupBy": true\n      }\n    ],\n    "excludeAttribute": false,\n    "allowAddingUnit": true,\n    "subtotalFromBase": true\n  },\n  "dataType": { "type": "double", "precision": 0, "scale": 0 }\n}\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "http://demo.microstrategy.com/MicroStrategyLibrary/api//model/metrics/A349A2D143F64F5ED6654696A31FAC63" -H "accept: application/json" -H "X-MSTR-AuthToken: vou86a0sjelh4abm2oh274ghos" -H "X-MSTR-MS-Changeset: E839A2FE06AF4BCB947B678A6E8E6EAA" -H "Content-Type: application/json" -d "{\\"information\\":{\\"name\\":\\"Cost\\"},\\"dimty\\":{\\"dimtyUnits\\":[{\\"dimtyUnitType\\":\\"report_base_level\\",\\"aggregation\\":\\"normal\\",\\"filtering\\":\\"apply\\",\\"groupBy\\":true}],\\"excludeAttribute\\":false,\\"allowAddingUnit\\":true},\\"dataType\\":{\\"type\\":\\"double\\",\\"precision\\":0,\\"scale\\":0}}"\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,"You can view the updated metric's definition in the body of the response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{  "information": {    "dateCreated": "2022-03-17T09:03:23.096Z",    "dateModified": "2022-03-17T09:03:23.096Z",    "versionId": "C009C064453C6AAD2E12F79861D69A9B",    "primaryLocale": "en-US",    "objectId": "A349A2D143F64F5ED6654696A31FAC63",    "subType": "metric",    "name": "Cost"  },  "expression": {    "text": "Sum(Cost)"  },  "dimty": {    "dimtyUnits": [      {        "dimtyUnitType": "report_base_level",        "aggregation": "normal",        "filtering": "apply",        "groupBy": true      }    ],    "excludeAttribute": false,    "allowAddingUnit": true  },  "conditionality": {    "filter": {      "objectId": "E638359211D5C49EC0000C881FDA1A4F",      "subType": "filter",      "name": "Select a Quarter"    },    "embedMethod": "metric_into_report_filter",    "removeElements": true  },  "metricSubtotals": [    {      "definition": {        "objectId": "96C487AF4D12472A910C1ACACFB56EFB",        "subType": "system_subtotal",        "name": "Total"      },      "implementation": {        "objectId": "B328C60462634223B2387D4ADABEEB53",        "subType": "system_subtotal",        "name": "Average"      }    },    {      "definition": {        "objectId": "078C50834B484EE29948FA9DD5300ADF",        "subType": "system_subtotal",        "name": "Count"      }    },    {      "definition": {        "objectId": "B328C60462634223B2387D4ADABEEB53",        "subType": "system_subtotal",        "name": "Average"      }    },    {      "definition": {        "objectId": "00B7BFFF967F42C4B71A4B53D90FB095",        "subType": "system_subtotal",        "name": "Minimum"      }    },    {      "definition": {        "objectId": "B1F4AA7DE683441BA559AA6453C5113E",        "subType": "system_subtotal",        "name": "Maximum"      }    },    {      "definition": {        "objectId": "F225147A4CA0BB97368A5689D9675E73",        "subType": "system_subtotal",        "name": "Aggregation"      },      "implementation": {        "objectId": "078C50834B484EE29948FA9DD5300ADF",        "subType": "system_subtotal",        "name": "Count"      }    }  ],  "aggregateFromBase": false,  "formulaJoinType": "inner",  "smartTotal": "decomposable_false",  "dataType": {    "type": "double",    "precision": 0,    "scale": 0  },  "format": {    "header": [      {        "type": "number_category",        "value": "0"      },      {        "type": "number_decimal_places",        "value": "2"      },      {        "type": "number_thousand_separator",        "value": "true"      },      {        "type": "number_currency_symbol",        "value": "$"      },      {        "type": "number_currency_position",        "value": "0"      },      {        "type": "number_format",        "value": "#,##0.00;(#,##0.00)"      },      {        "type": "number_negative_numbers",        "value": "3"      },      {        "type": "background_fill_color",        "value": "3355443"      },      {        "type": "background_pattern_style",        "value": "1"      },      {        "type": "background_fill_style",        "value": "0"      },      {        "type": "background_gradient_angle",        "value": "0"      },      {        "type": "background_gradient_x_offset",        "value": "0"      },      {        "type": "series_fill_style",        "value": "0"      },      {        "type": "series_fill_color",        "value": "8388608"      },      {        "type": "series_gradient_angle",        "value": "0"      },      {        "type": "series_gradient_x_offset",        "value": "0"      }    ],    "values": [      {        "type": "number_category",        "value": "0"      },      {        "type": "number_decimal_places",        "value": "0"      },      {        "type": "number_format",        "value": "#,##0;(#,##0)"      }    ]  },  "subtotalFromBase": true,  "columnNameAlias": "test",  "metricFormatType": "reserved",  "thresholds": []}Response headers\n')),(0,i.kt)("p",null,"Response Code: 200 (The Metric's definition is updated successfully in the changeset.)"),(0,i.kt)("p",null,"The model for the definition of a metric can be updated with the following fields:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Fields"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"information"),(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the metric. This is the most user-friendly value that can be used to identify the metric."),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"destinationFolderId"),(0,i.kt)("td",{parentName:"tr",align:null},"Folder ID where the new metric is saved."),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"expression"),(0,i.kt)("td",{parentName:"tr",align:null},"text"),(0,i.kt)("td",{parentName:"tr",align:null},"A human readable, but non-parsable text, describing the expression."),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tree"),(0,i.kt)("td",{parentName:"tr",align:null},"A tree data structure fully defining the expression."),(0,i.kt)("td",{parentName:"tr",align:null},"List","<","ObjectInfoReference",">"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokens"),(0,i.kt)("td",{parentName:"tr",align:null},"A list of parsed tokens."),(0,i.kt)("td",{parentName:"tr",align:null},"List","<","ObjectInfoReference",">"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"dimty"),(0,i.kt)("td",{parentName:"tr",align:null},"dimtyUnits"),(0,i.kt)("td",{parentName:"tr",align:null},"Dimty contains a list of DimtyUnit, which describes the level that the metric can be calculated."),(0,i.kt)("td",{parentName:"tr",align:null},"List","<","ObjectInfoReference",">"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"excludeAttribute"),(0,i.kt)("td",{parentName:"tr",align:null},"If true, exclude attributes absent in report or level. If false, do not exclude."),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"allowAddingUnit"),(0,i.kt)("td",{parentName:"tr",align:null},"This setting allows other users to add extra units to this definition."),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"prompt"),(0,i.kt)("td",{parentName:"tr",align:null},"This points to the level prompt."),(0,i.kt)("td",{parentName:"tr",align:null},"ObjectInfoReference"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"conditionality"),(0,i.kt)("td",{parentName:"tr",align:null},"filter"),(0,i.kt)("td",{parentName:"tr",align:null},"The reference to a filter."),(0,i.kt)("td",{parentName:"tr",align:null},"ObjectInfoReference"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"prompt"),(0,i.kt)("td",{parentName:"tr",align:null},"The reference to an object prompt."),(0,i.kt)("td",{parentName:"tr",align:null},"ObjectInfoReference"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"embedMethod"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates the embedding method for the filter with report filter."),(0,i.kt)("td",{parentName:"tr",align:null},"EnumDSSEmbedMethod"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"removeElements"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates whether to remove related report filter elements. True to remove."),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"metricSubtotals"),(0,i.kt)("td",{parentName:"tr",align:null},"definition"),(0,i.kt)("td",{parentName:"tr",align:null},"An object reference which reference to the subtotal object."),(0,i.kt)("td",{parentName:"tr",align:null},"ObjectInfoReference"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes, if metricSubtotals is provided .")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"implementation"),(0,i.kt)("td",{parentName:"tr",align:null},"When the total subtotal function is set to one object, this field will reference to that object only when the definition field references to Total.",(0,i.kt)("br",null),(0,i.kt)("br",null),"When the dynamic aggregation function is set to one object, this field will reference to that object only when the definition field references to Aggregation.",(0,i.kt)("br",null),(0,i.kt)("br",null),"For subtotals except Total and Aggregation, this field should be empty."),(0,i.kt)("td",{parentName:"tr",align:null},"ObjectInfoReference"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"aggregateFromBase"),(0,i.kt)("td",{parentName:"tr",align:null},"aggregateFromBase"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates the aggregation type. True to aggregate from base."),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"FormulaJoinType"),(0,i.kt)("td",{parentName:"tr",align:null},"formulaJoinType"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates formula join type with three options: Default, Inner, or Outer"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"data type"),(0,i.kt)("td",{parentName:"tr",align:null},"type"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates the data type."),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"precision"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates the precision."),(0,i.kt)("td",{parentName:"tr",align:null},"Integer"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"scale"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates the scale."),(0,i.kt)("td",{parentName:"tr",align:null},"Integer"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"smartTotal"),(0,i.kt)("td",{parentName:"tr",align:null},"smartTotal"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates the calculation type of total."),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"format"),(0,i.kt)("td",{parentName:"tr",align:null},"format"),(0,i.kt)("td",{parentName:"tr",align:null},"Contains the header format and value format."),(0,i.kt)("td",{parentName:"tr",align:null},"Format"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"subtotalFromBase"),(0,i.kt)("td",{parentName:"tr",align:null},"subtotalFromBase"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates the subtotal type. True to subtotal from base."),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"columnNameAlias"),(0,i.kt)("td",{parentName:"tr",align:null},"columnNameAlias"),(0,i.kt)("td",{parentName:"tr",align:null},"This name is used in SQL generation."),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"metricFormatType"),(0,i.kt)("td",{parentName:"tr",align:null},"metricFormatType"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates the metric format type."),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"thresholds"),(0,i.kt)("td",{parentName:"tr",align:null},"format"),(0,i.kt)("td",{parentName:"tr",align:null},"A list of FormatProperty that defines the format."),(0,i.kt)("td",{parentName:"tr",align:null},"List","<","FormatProperty",">"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"condition"),(0,i.kt)("td",{parentName:"tr",align:null},"The filter expression for the threshold."),(0,i.kt)("td",{parentName:"tr",align:null},"Expression"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes, if thresholds is provided."),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the threshold."),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"replaceText"),(0,i.kt)("td",{parentName:"tr",align:null},"The text used to replace the metric value."),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"semantics"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates the semantics used by the threshold."),(0,i.kt)("td",{parentName:"tr",align:null},"EnumDSSBaseFormType"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"scope"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates the scope applied by the threshold."),(0,i.kt)("td",{parentName:"tr",align:null},"EnumDSSBaseFormType"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"enable"),(0,i.kt)("td",{parentName:"tr",align:null},"A boolean value that indicates whether this threshold is enabled."),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null})))))}k.isMDXComponent=!0}}]);