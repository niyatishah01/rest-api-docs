"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[9340],{3038:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=s(74848),n=s(28453);const i={title:"Filter report and cube instances using requestedObjects",description:"How to filter report and cube instances using requestedObjects."},a=void 0,c={id:"common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-requested-objects/filter-report-and-cube-instances-using-requested-objects",title:"Filter report and cube instances using requestedObjects",description:"How to filter report and cube instances using requestedObjects.",source:"@site/docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-requested-objects/filter-report-and-cube-instances-using-requested-objects.md",sourceDirName:"common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-requested-objects",slug:"/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-requested-objects/",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-requested-objects/",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-requested-objects/filter-report-and-cube-instances-using-requested-objects.md",tags:[],version:"current",lastUpdatedBy:"AugLychee",lastUpdatedAt:1710818077,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{title:"Filter report and cube instances using requestedObjects",description:"How to filter report and cube instances using requestedObjects."},sidebar:"tutorialSidebar",previous:{title:"Error messages for metric limits",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/error-messages"},next:{title:"General guidelines for using requestedObjects",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-requested-objects/general-guidelines"}},o={},d=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsxs)(t.p,{children:["You can try out this workflow at ",(0,r.jsx)(t.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-2650c93b-4797-4fa7-86cc-f38d0c43971e?ctx=documentation",children:"REST API Playground"}),"."]}),(0,r.jsxs)(t.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,r.jsx)(t.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,r.jsxs)(t.p,{children:["When you create a MicroStrategy report or cube instance using the following REST API endpoints, you can use a parameter called ",(0,r.jsx)(t.code,{children:"requestedObjects"})," in the body parameter of the request to specify the data that should be returned:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"POST /api/cubes/{cubeId}/instances"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"POST /api/reports/{reportId}/instances"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.code,{children:"requestedObjects"})," parameter, you specify the name and ID of each attribute and metric to include in the report or cube instance. If you use both a viewFilter and a ",(0,r.jsx)(t.code,{children:"requestedObjects"})," parameter in the request, the view filter will be applied first. The ",(0,r.jsx)(t.code,{children:"requestedObjects"})," definition will then be applied to the filtered results (a subset of the cube data), rather than to the cube data itself."]}),"\n",(0,r.jsxs)(t.p,{children:["The following topics are designed to help you understand and use ",(0,r.jsx)(t.code,{children:"requestedObjects"}),"."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-requested-objects/general-guidelines",children:"General guidelines"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-requested-objects/code-sample",children:"Code sample"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>c});var r=s(96540);const n={},i=r.createContext(n);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);