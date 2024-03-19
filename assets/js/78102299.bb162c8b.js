"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[4399],{14477:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(74848),i=n(28453);const s={title:"Code sample - Filter reports and cubes using metric limits",description:"The code sample for filter reports and cubes using metric limits."},a=void 0,o={id:"common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/code-sample",title:"Code sample - Filter reports and cubes using metric limits",description:"The code sample for filter reports and cubes using metric limits.",source:"@site/docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/code-sample.md",sourceDirName:"common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits",slug:"/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/code-sample",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/code-sample",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/code-sample.md",tags:[],version:"current",lastUpdatedBy:"AugLychee",lastUpdatedAt:1710818077,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{title:"Code sample - Filter reports and cubes using metric limits",description:"The code sample for filter reports and cubes using metric limits."},sidebar:"tutorialSidebar",previous:{title:"Supported operators for metric limits",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/supported-operators"},next:{title:"Error messages for metric limits",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/error-messages"}},c={},l=[];function d(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"metricLimits"})," parameter can include multiple metric filters. Each filter includes the ID of the metric and the filter expression for that metric. The filter expression is made up a ",(0,r.jsx)(t.a,{href:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/supported-operators",children:"supported operator"})," and two operands."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "metricLimits": {\n    "metricId1": {\n      // expression1\n    },\n\n    "metricId2": {\n      // expression2\n    },\n    // ...\n    "metricIdN": {\n      // expressionN\n    }\n  }\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["The code sample below illustrates sample ",(0,r.jsx)(t.code,{children:"body"}),' parameter input for metric limits. It assumes that you are using a report or cube that has Cost and Profit metrics. The filter criteria are "Cost < 300000" and "Profit < 160000 or Profit > 200000".']}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "requestedObjects": {\n    // ...\n  },\n  "viewFilter": {\n    // ...\n  },\n  "metricLimits": {\n    // Here are the metric limits: Cost < 300000, Profit < 160000 or Profit > 200000\n    "7FD5B69611D5AC76C000D98A4CC5F24F": {\n      "operator": "<",\n      "operands": [\n        {\n          "type": "metric",\n          "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n          "name": "Cost"\n        },\n        {\n          "type": "constant",\n          "value": "300000",\n          "dataType": "Real"\n        }\n      ]\n    },\n    "4C051DB611D3E877C000B3B2D86C964F": {\n      "operator": "|",\n      "operands": [\n        {\n          "operator": "<",\n          "operands": [\n            {\n              "type": "metric",\n              "id": "4C051DB611D3E877C000B3B2D86C964F",\n              "name": "Profit"\n            },\n            {\n              "type": "constant",\n              "value": "160000",\n              "dataType": "Real"\n            }\n          ]\n        },\n        {\n          "operator": ">",\n          "operands": [\n            {\n              "type": "metric",\n              "id": "4C051DB611D3E877C000B3B2D86C964F",\n              "name": "Profit"\n            },\n            {\n              "type": "constant",\n              "value": "200000",\n              "dataType": "Real"\n            }\n          ]\n        }\n      ]\n    }\n  },\n  "sorting": [\n    // ...\n  ]\n}\n'})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(96540);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);