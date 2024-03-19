"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[187],{39844:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=t(74848),i=t(28453);const a={title:"Retrieve a selector's definition",description:"The workflow to retrieve a selector's definition."},r=void 0,l={id:"common-workflows/analytics/manage-selectors/retrieve-a-selectors-definition",title:"Retrieve a selector's definition",description:"The workflow to retrieve a selector's definition.",source:"@site/docs/common-workflows/analytics/manage-selectors/retrieve-a-selectors-definition.md",sourceDirName:"common-workflows/analytics/manage-selectors",slug:"/common-workflows/analytics/manage-selectors/retrieve-a-selectors-definition",permalink:"/rest-api-docs/common-workflows/analytics/manage-selectors/retrieve-a-selectors-definition",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/manage-selectors/retrieve-a-selectors-definition.md",tags:[],version:"current",lastUpdatedBy:"AugLychee",lastUpdatedAt:1710818077,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{title:"Retrieve a selector's definition",description:"The workflow to retrieve a selector's definition."},sidebar:"tutorialSidebar",previous:{title:"Manage selectors",permalink:"/rest-api-docs/common-workflows/analytics/manage-selectors/"},next:{title:"Set selector type",permalink:"/rest-api-docs/common-workflows/analytics/manage-selectors/set-selector-type"}},o={},c=[{value:"API: GET /api/v2/dossiers/{dossierId}/definition",id:"api-get-apiv2dossiersdossieriddefinition",level:2},{value:"Parameters",id:"parameters",level:3},{value:"API: GET /api/v2/dossiers/{dossierId}/instances/{instanceId}/definition",id:"api-get-apiv2dossiersdossieridinstancesinstanceiddefinition",level:2},{value:"Parameters",id:"parameters-1",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"You can retrieve a selector's definition using the following APIs."}),"\n",(0,s.jsxs)(n.h2,{id:"api-get-apiv2dossiersdossieriddefinition",children:["API: ",(0,s.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/getVisualizationList_1",children:"GET /api/v2/dossiers/{dossierId}/definition"})]}),"\n",(0,s.jsx)(n.p,{children:"This endpoint fetches a selector's definition and dataset information of a dashboard (without executing it). The following details are returned:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Current chapter key"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Dataset information:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Available object information"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Output example for a dashboard and dashboard instance definition"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ "id": "D29DC6464099A518DE19FEA4C25D346B", "name": "temp Dossier", "hasPrompt": false, "chapters": [ { "key": "K36", "name": "Chapter 1", "pages": [ { "key": "K53", "name": "Page 1", "visualizations": [ { "key": "K52", "name": "Visualization 1", "filteredTargetVisualizations": [ { "key": "W65" } ] }, { "key": "W62", "name": "Visualization 2" }, { "key": "W65", "name": "Visualization 3" } ], "inCanvasSelectors": [] } ], "filters": [ { "key": "W134", "name": "Cost", "summary": "((Cost Between 5707743.0 And 21191039.0))", "source": { "id": "7FD5B69611D5AC76C000D98A4CC5F24F", "type": 4 }, "synchronizedAcrossChapter":false "unset": false, "include": true, "multiSelected": true, "hasAllOption": true, "expression": { "operator": "And", "operands": [ { "operator": "Between", "operands": [ { "type": "metric", "id": "7FD5B69611D5AC76C000D98A4CC5F24F", "name": "Cost" }, { "type": "constant", "dataType": "Real", "value": "5707743" }, { "type": "constant", "dataType": "Real", "value": "21191039" } ] } ] }, "selections": [] }, { "key": "W138", "name": "Category", "summary": "Category In List Electronics", "source": { "id": "8D679D3711D3E4981000E787EC6DE8A4", "type": 12 }, "unset": false, "include": true, "multiSelected": true, "hasAllOption": true, "selections": [ { "id": "h2;8D679D3711D3E4981000E787EC6DE8A4", "name": "Electronics" } ] } ] } ], "datasets": [ { "name": "8DFA1ABC41C2F43530645FA90B80C745", "id": "New Dataset 1", "availableObjects": [ { "id": "8D679D3711D3E4981000E787EC6DE8A4", "name": "Category", "type": "attribute", "forms": [ { "id": "CCFBE2A5EADB4F50941FB879CCF1721C", "name": "DESC" } ] }, { "id": "7FD5B69611D5AC76C000D98A4CC5F24F", "name": "Cost", "type": "metric" } ] } ] }\n'})})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Filter definition:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Element list selector (in chapter-level, in canvas)"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Output examples for an element list selector definition"}),(0,s.jsx)(n.p,{children:"Common attribute element list:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "key": "W228",\n  "name": "Category",\n  "summary": "Category In List Books, Movies",\n  "source": {\n    "id": "8D679D3711D3E4981000E787EC6DE8A4",\n    "name": "Category",\n    "type": 12\n  },\n  "synchronizedAcrossChapter": false,\n  "selectorType": "attribute_element_list",\n  "displayStyle": "check_boxes",\n  "hasAllOption": true,\n  "targets": [],\n  "multiSelectionAllowed": true,\n  "currentSelection": {\n    "selectionStatus": "included",\n    "allSelected": false,\n    "elements": [\n      { "id": "h1;8D679D3711D3E4981000E787EC6DE8A4", "name": "Books" },\n      { "id": "h3;8D679D3711D3E4981000E787EC6DE8A4", "name": "Movies" }\n    ]\n  }\n}\n'})}),(0,s.jsx)(n.p,{children:"Dynamic selection applied:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "key": "W77",\n  "name": "Year",\n  "summary": "",\n  "source": {\n    "id": "8D679D5111D3E4981000E787EC6DE8A4",\n    "name": "Year",\n    "type": 12\n  },\n  "synchronizedAcrossChapter": false,\n  "selectorType": "attribute_element_list",\n  "displayStyle": "check_boxes",\n  "hasAllOption": true,\n  "targets": [],\n  "multiSelectionAllowed": true,\n  "currentSelection": {\n    "selectionStatus": "included",\n    "dynamicSelectionApplied": true,\n    "allSelected": false,\n    "elements": []\n  },\n  "defaultDynamicSelection": { "status": "first_elements", "quantity": 1 }\n}\n'})})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Attribute qualification selector (in chapter-level, in canvas)"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Output example for an attribute qualification selector definition"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "key": "W230",\n  "name": "Daytime",\n  "summary": "((Daytime@ID Between \'1/1/2014 12:00:14 AM\' And \'12/31/2016 11:59:59 PM\'))",\n  "source": {\n    "id": "664D1AC647064FE9B35FF8A09780BC48",\n    "name": "Daytime",\n    "type": 12\n  },\n  "synchronizedAcrossChapter": false,\n  "selectorType": "attribute_qualification",\n  "displayStyle": "attribute_qualification",\n  "hasAllOption": true,\n  "targets": [],\n  "multiSelectionAllowed": true,\n  "currentSelection": {\n    "selectionStatus": "included",\n    "expression": {\n      "operator": "Between",\n      "operands": [\n        {\n          "type": "form",\n          "attribute": {\n            "id": "664D1AC647064FE9B35FF8A09780BC48",\n            "name": "Daytime"\n          },\n          "form": { "id": "45C11FA478E745FEA08D781CEA190FE5", "name": "ID" }\n        },\n        {\n          "type": "constant",\n          "dataType": "TimeStamp",\n          "value": "1/1/2014 12:00:14 AM"\n        },\n        {\n          "type": "constant",\n          "dataType": "TimeStamp",\n          "value": "12/31/2016 11:59:59 PM"\n        }\n      ]\n    }\n  }\n}\n'})})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Metric qualification selector (in chapter-level, in canvas)"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Output examples for a metric qualification selector definition"}),(0,s.jsx)(n.p,{children:'"Greater than" case:'}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "key": "W232",\n  "name": "Cost",\n  "summary": "Cost >= 1000.0",\n  "source": {\n    "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n    "name": "Cost",\n    "type": 4\n  },\n  "synchronizedAcrossChapter": false,\n  "selectorType": "metric_qualification",\n  "displayStyle": "metric_qualification",\n  "hasAllOption": true,\n  "targets": [],\n  "multiSelectionAllowed": true,\n  "currentSelection": {\n    "selectionStatus": "included",\n    "expression": {\n      "operator": "GreaterEqual",\n      "operands": [\n        {\n          "type": "metric",\n          "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n          "name": "Cost"\n        },\n        { "type": "constant", "dataType": "Real", "value": "1000" }\n      ]\n    }\n  }\n}\n'})}),(0,s.jsx)(n.p,{children:'"Not in" case:'}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "key": "W232",\n  "name": "Cost",\n  "summary": "Cost [Not In] (1000.0,2000.0,3000.0)",\n  "source": {\n    "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n    "name": "Cost",\n    "type": 4\n  },\n  "synchronizedAcrossChapter": false,\n  "selectorType": "metric_qualification",\n  "displayStyle": "metric_qualification",\n  "hasAllOption": true,\n  "targets": [],\n  "multiSelectionAllowed": true,\n  "currentSelection": {\n    "selectionStatus": "included",\n    "expression": {\n      "operator": "NotIn",\n      "operands": [\n        {\n          "type": "metric",\n          "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n          "name": "Cost"\n        },\n        {\n          "type": "constants",\n          "dataType": "Real",\n          "values": ["1000", "2000", "3000"]\n        }\n      ]\n    }\n  }\n}\n'})}),(0,s.jsx)(n.p,{children:'"Highest rank" case:'}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "key": "W234",\n  "name": "Revenue",\n  "summary": "Rank&lt;ASC=False , ByValue=False &gt;(Revenue) <= 0.4",\n  "source": {\n    "id": "4C05177011D3E877C000B3B2D86C964F",\n    "name": "Revenue",\n    "type": 4\n  },\n  "synchronizedAcrossChapter": false,\n  "selectorType": "metric_qualification",\n  "displayStyle": "metric_qualification",\n  "hasAllOption": true,\n  "targets": [],\n  "multiSelectionAllowed": true,\n  "currentSelection": {\n    "selectionStatus": "included",\n    "expression": {\n      "operator": "Percent.Top",\n      "operands": [\n        {\n          "type": "metric",\n          "id": "4C05177011D3E877C000B3B2D86C964F",\n          "name": "Revenue"\n        },\n        { "type": "constant", "dataType": "Real", "value": "40%" }\n      ]\n    }\n  }\n}\n'})})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Object replacement selector (in-canvas)"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Output example for an object replacement selector definition"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "key": "W203",\n  "name": "Selector 2",\n  "summary": "Selector 2 In List Cost",\n  "selectorType": "object_replacement",\n  "displayStyle": "hyper_links",\n  "hasAllOption": false,\n  "targets": [{ "key": "K52" }],\n  "multiSelectionAllowed": false,\n  "currentSelection": {\n    "selectionStatus": "included",\n    "objectItems": [\n      {\n        "id": "i7FD5B69611D5AC76C000D98A4CC5F24F;7FD5B69611D5AC76C000D98A4CC5F24F",\n        "name": "Cost"\n      }\n    ]\n  },\n  "availableObjectItems": [\n    {\n      "id": "i7FD5B69611D5AC76C000D98A4CC5F24F;7FD5B69611D5AC76C000D98A4CC5F24F",\n      "name": "Cost"\n    },\n    {\n      "id": "i381980B211D40BC8C000C8906B98494F;381980B211D40BC8C000C8906B98494F",\n      "name": "Discount"\n    },\n    {\n      "id": "i4C051DB611D3E877C000B3B2D86C964F;4C051DB611D3E877C000B3B2D86C964F",\n      "name": "Profit"\n    }\n  ]\n}\n'})})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Set visualization as filter"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Output example for a visualization as filter definition"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "visualizationKey": "W217",\n  "selectorType": "visualization_as_filter",\n  "targets": [{ "key": "W188" }, { "key": "W193" }],\n  "currentSelection": {\n    "selectionStatus": "included",\n    "expression": {\n      "operator": "Or",\n      "operands": [\n        {\n          "operator": "In",\n          "operands": [\n            {\n              "type": "attribute",\n              "id": "8D679D5111D3E4981000E787EC6DE8A4",\n              "name": "Year"\n            },\n            {\n              "type": "elements",\n              "elements": [\n                {\n                  "id": "8D679D5111D3E4981000E787EC6DE8A4:2014",\n                  "name": "2014"\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  }\n}\n'})})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Parameter Type"}),(0,s.jsx)(n.th,{children:"Data Type"}),(0,s.jsx)(n.th,{children:"Required?"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"X-MSTR-AuthToken"}),(0,s.jsx)(n.td,{children:"Authorization token"}),(0,s.jsx)(n.td,{children:"header"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"true"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"X-MSTR-ProjectId"}),(0,s.jsx)(n.td,{children:"Project Id"}),(0,s.jsx)(n.td,{children:"header"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"true"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dossierId"}),(0,s.jsx)(n.td,{children:"dossier id"}),(0,s.jsx)(n.td,{children:"path"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"true"})]})]})]}),"\n",(0,s.jsxs)(n.h2,{id:"api-get-apiv2dossiersdossieridinstancesinstanceiddefinition",children:["API: ",(0,s.jsx)(n.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/getVisualizationList_2",children:"GET /api/v2/dossiers/{dossierId}/instances/{instanceId}/definition"})]}),"\n",(0,s.jsx)(n.p,{children:"This endpoint fetches a selector's definition and dataset information from an executed dashboard. The following details are returned:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Current chapter key"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Dataset information:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Available object information"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Output example for a dashboard and dashboard instance definition"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ "id": "D29DC6464099A518DE19FEA4C25D346B", "name": "temp Dossier", "hasPrompt": false, "chapters": [ { "key": "K36", "name": "Chapter 1", "pages": [ { "key": "K53", "name": "Page 1", "visualizations": [ { "key": "K52", "name": "Visualization 1", "filteredTargetVisualizations": [ { "key": "W65" } ] }, { "key": "W62", "name": "Visualization 2" }, { "key": "W65", "name": "Visualization 3" } ], "inCanvasSelectors": [] } ], "filters": [ { "key": "W134", "name": "Cost", "summary": "((Cost Between 5707743.0 And 21191039.0))", "source": { "id": "7FD5B69611D5AC76C000D98A4CC5F24F", "type": 4 }, "synchronizedAcrossChapter":false "unset": false, "include": true, "multiSelected": true, "hasAllOption": true, "expression": { "operator": "And", "operands": [ { "operator": "Between", "operands": [ { "type": "metric", "id": "7FD5B69611D5AC76C000D98A4CC5F24F", "name": "Cost" }, { "type": "constant", "dataType": "Real", "value": "5707743" }, { "type": "constant", "dataType": "Real", "value": "21191039" } ] } ] }, "selections": [] }, { "key": "W138", "name": "Category", "summary": "Category In List Electronics", "source": { "id": "8D679D3711D3E4981000E787EC6DE8A4", "type": 12 }, "unset": false, "include": true, "multiSelected": true, "hasAllOption": true, "selections": [ { "id": "h2;8D679D3711D3E4981000E787EC6DE8A4", "name": "Electronics" } ] } ] } ], "datasets": [ { "name": "8DFA1ABC41C2F43530645FA90B80C745", "id": "New Dataset 1", "availableObjects": [ { "id": "8D679D3711D3E4981000E787EC6DE8A4", "name": "Category", "type": "attribute", "forms": [ { "id": "CCFBE2A5EADB4F50941FB879CCF1721C", "name": "DESC" } ] }, { "id": "7FD5B69611D5AC76C000D98A4CC5F24F", "name": "Cost", "type": "metric" } ] } ] }\n'})})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Filter definition:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Element list selector (in chapter-level, in canvas)"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Output examples for an element list selector definition"}),(0,s.jsx)(n.p,{children:"Common attribute element list:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "key": "W228",\n  "name": "Category",\n  "summary": "Category In List Books, Movies",\n  "source": {\n    "id": "8D679D3711D3E4981000E787EC6DE8A4",\n    "name": "Category",\n    "type": 12\n  },\n  "synchronizedAcrossChapter": false,\n  "selectorType": "attribute_element_list",\n  "displayStyle": "check_boxes",\n  "hasAllOption": true,\n  "targets": [],\n  "multiSelectionAllowed": true,\n  "currentSelection": {\n    "selectionStatus": "included",\n    "allSelected": false,\n    "elements": [\n      { "id": "h1;8D679D3711D3E4981000E787EC6DE8A4", "name": "Books" },\n      { "id": "h3;8D679D3711D3E4981000E787EC6DE8A4", "name": "Movies" }\n    ]\n  }\n}\n'})}),(0,s.jsx)(n.p,{children:"Dynamic selection applied:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "key": "W77",\n  "name": "Year",\n  "summary": "",\n  "source": {\n    "id": "8D679D5111D3E4981000E787EC6DE8A4",\n    "name": "Year",\n    "type": 12\n  },\n  "synchronizedAcrossChapter": false,\n  "selectorType": "attribute_element_list",\n  "displayStyle": "check_boxes",\n  "hasAllOption": true,\n  "targets": [],\n  "multiSelectionAllowed": true,\n  "currentSelection": {\n    "selectionStatus": "included",\n    "dynamicSelectionApplied": true,\n    "allSelected": false,\n    "elements": []\n  },\n  "defaultDynamicSelection": { "status": "first_elements", "quantity": 1 }\n}\n'})})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Attribute qualification selector (in chapter-level, in canvas)"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Output example for an attribute qualification selector definition"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "key": "W230",\n  "name": "Daytime",\n  "summary": "((Daytime@ID Between \'1/1/2014 12:00:14 AM\' And \'12/31/2016 11:59:59 PM\'))",\n  "source": {\n    "id": "664D1AC647064FE9B35FF8A09780BC48",\n    "name": "Daytime",\n    "type": 12\n  },\n  "synchronizedAcrossChapter": false,\n  "selectorType": "attribute_qualification",\n  "displayStyle": "attribute_qualification",\n  "hasAllOption": true,\n  "targets": [],\n  "multiSelectionAllowed": true,\n  "currentSelection": {\n    "selectionStatus": "included",\n    "expression": {\n      "operator": "Between",\n      "operands": [\n        {\n          "type": "form",\n          "attribute": {\n            "id": "664D1AC647064FE9B35FF8A09780BC48",\n            "name": "Daytime"\n          },\n          "form": { "id": "45C11FA478E745FEA08D781CEA190FE5", "name": "ID" }\n        },\n        {\n          "type": "constant",\n          "dataType": "TimeStamp",\n          "value": "1/1/2014 12:00:14 AM"\n        },\n        {\n          "type": "constant",\n          "dataType": "TimeStamp",\n          "value": "12/31/2016 11:59:59 PM"\n        }\n      ]\n    }\n  }\n}\n'})})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Metric qualification selector (in chapter-level, in canvas)"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Output examples for a metric qualification selector definition"}),(0,s.jsx)(n.p,{children:'"Greater than" case:'}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "key": "W232",\n  "name": "Cost",\n  "summary": "Cost >= 1000.0",\n  "source": {\n    "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n    "name": "Cost",\n    "type": 4\n  },\n  "synchronizedAcrossChapter": false,\n  "selectorType": "metric_qualification",\n  "displayStyle": "metric_qualification",\n  "hasAllOption": true,\n  "targets": [],\n  "multiSelectionAllowed": true,\n  "currentSelection": {\n    "selectionStatus": "included",\n    "expression": {\n      "operator": "GreaterEqual",\n      "operands": [\n        {\n          "type": "metric",\n          "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n          "name": "Cost"\n        },\n        { "type": "constant", "dataType": "Real", "value": "1000" }\n      ]\n    }\n  }\n}\n'})}),(0,s.jsx)(n.p,{children:'"Not in" case:'}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "key": "W232",\n  "name": "Cost",\n  "summary": "Cost [Not In] (1000.0,2000.0,3000.0)",\n  "source": {\n    "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n    "name": "Cost",\n    "type": 4\n  },\n  "synchronizedAcrossChapter": false,\n  "selectorType": "metric_qualification",\n  "displayStyle": "metric_qualification",\n  "hasAllOption": true,\n  "targets": [],\n  "multiSelectionAllowed": true,\n  "currentSelection": {\n    "selectionStatus": "included",\n    "expression": {\n      "operator": "NotIn",\n      "operands": [\n        {\n          "type": "metric",\n          "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n          "name": "Cost"\n        },\n        {\n          "type": "constants",\n          "dataType": "Real",\n          "values": ["1000", "2000", "3000"]\n        }\n      ]\n    }\n  }\n}\n'})}),(0,s.jsx)(n.p,{children:'"Highest rank" case:'}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "key": "W234",\n  "name": "Revenue",\n  "summary": "Rank&lt;ASC=False , ByValue=False &gt;(Revenue) <= 0.4",\n  "source": {\n    "id": "4C05177011D3E877C000B3B2D86C964F",\n    "name": "Revenue",\n    "type": 4\n  },\n  "synchronizedAcrossChapter": false,\n  "selectorType": "metric_qualification",\n  "displayStyle": "metric_qualification",\n  "hasAllOption": true,\n  "targets": [],\n  "multiSelectionAllowed": true,\n  "currentSelection": {\n    "selectionStatus": "included",\n    "expression": {\n      "operator": "Percent.Top",\n      "operands": [\n        {\n          "type": "metric",\n          "id": "4C05177011D3E877C000B3B2D86C964F",\n          "name": "Revenue"\n        },\n        { "type": "constant", "dataType": "Real", "value": "40%" }\n      ]\n    }\n  }\n}\n'})})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Object replacement selector (in-canvas)"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Output example for an object replacement selector definition"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "key": "W203",\n  "name": "Selector 2",\n  "summary": "Selector 2 In List Cost",\n  "selectorType": "object_replacement",\n  "displayStyle": "hyper_links",\n  "hasAllOption": false,\n  "targets": [{ "key": "K52" }],\n  "multiSelectionAllowed": false,\n  "currentSelection": {\n    "selectionStatus": "included",\n    "objectItems": [\n      {\n        "id": "i7FD5B69611D5AC76C000D98A4CC5F24F;7FD5B69611D5AC76C000D98A4CC5F24F",\n        "name": "Cost"\n      }\n    ]\n  },\n  "availableObjectItems": [\n    {\n      "id": "i7FD5B69611D5AC76C000D98A4CC5F24F;7FD5B69611D5AC76C000D98A4CC5F24F",\n      "name": "Cost"\n    },\n    {\n      "id": "i381980B211D40BC8C000C8906B98494F;381980B211D40BC8C000C8906B98494F",\n      "name": "Discount"\n    },\n    {\n      "id": "i4C051DB611D3E877C000B3B2D86C964F;4C051DB611D3E877C000B3B2D86C964F",\n      "name": "Profit"\n    }\n  ]\n}\n'})})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Set visualization as filter"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Output example for a visualization as filter definition"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "visualizationKey": "W217",\n  "selectorType": "visualization_as_filter",\n  "targets": [{ "key": "W188" }, { "key": "W193" }],\n  "currentSelection": {\n    "selectionStatus": "included",\n    "expression": {\n      "operator": "Or",\n      "operands": [\n        {\n          "operator": "In",\n          "operands": [\n            {\n              "type": "attribute",\n              "id": "8D679D5111D3E4981000E787EC6DE8A4",\n              "name": "Year"\n            },\n            {\n              "type": "elements",\n              "elements": [\n                {\n                  "id": "8D679D5111D3E4981000E787EC6DE8A4:2014",\n                  "name": "2014"\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  }\n}\n'})})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Parameter Type"}),(0,s.jsx)(n.th,{children:"Data Type"}),(0,s.jsx)(n.th,{children:"Required?"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"X-MSTR-AuthToken"}),(0,s.jsx)(n.td,{children:"Authorization token"}),(0,s.jsx)(n.td,{children:"header"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"true"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"X-MSTR-ProjectId"}),(0,s.jsx)(n.td,{children:"Project Id"}),(0,s.jsx)(n.td,{children:"header"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"true"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dossierId"}),(0,s.jsx)(n.td,{children:"dossier id"}),(0,s.jsx)(n.td,{children:"path"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"true"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"instanceId"}),(0,s.jsx)(n.td,{children:"dossier instance id"}),(0,s.jsx)(n.td,{children:"path"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"true"})]})]})]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(96540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);