"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[4670],{66747:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>d,toc:()=>c});var r=i(74848),s=i(28453);const n={title:"Supported constant data types for view filters",description:"The supported constant data types for view filters."},a=void 0,d={id:"common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-constant-data-types",title:"Supported constant data types for view filters",description:"The supported constant data types for view filters.",source:"@site/docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-constant-data-types.md",sourceDirName:"common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters",slug:"/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-constant-data-types",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-constant-data-types",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-constant-data-types.md",tags:[],version:"current",lastUpdatedBy:"AugLychee",lastUpdatedAt:1710818077,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{title:"Supported constant data types for view filters",description:"The supported constant data types for view filters."},sidebar:"tutorialSidebar",previous:{title:"Supported operators for view filters",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-operators"},next:{title:"Code sample - Filter reports and cubes using view filters",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/code-sample"}},o={},c=[{value:"Supported data types for numeric values",id:"supported-data-types-for-numeric-values",level:2},{value:"Supported data types for date and time",id:"supported-data-types-for-date-and-time",level:2},{value:"Supported data types for text",id:"supported-data-types-for-text",level:2}];function l(t){const e={a:"a",admonition:"admonition",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"When a constant is used in a view filter qualification, you need to explicitly specify the data type. The table below lists the constant data types that are supported for view filters."}),"\n",(0,r.jsx)(e.h2,{id:"supported-data-types-for-numeric-values",children:"Supported data types for numeric values"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Type"}),(0,r.jsx)(e.th,{children:"Support qualification Attribute"}),(0,r.jsx)(e.th,{children:"Support qualification Form"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Real"}),(0,r.jsx)(e.td,{children:"Y"}),(0,r.jsx)(e.td,{children:"Y"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Single-precision_floating-point_format",children:"IEEE 754 32-bit single-precision floating point number"}),"."]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"BigDecimal"}),(0,r.jsx)(e.td,{children:"Y"}),(0,r.jsx)(e.td,{children:"Y"}),(0,r.jsx)(e.td,{children:"Arbitrary-precision singed big decimal number. Range: Unlimited digits before and after decimal point"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Int64"}),(0,r.jsx)(e.td,{children:"Y"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"64-bit signed integer. Range: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807."})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"supported-data-types-for-date-and-time",children:"Supported data types for date and time"}),"\n",(0,r.jsx)(e.admonition,{type:"info",children:(0,r.jsx)(e.p,{children:"Date and time are written as session-locale-specific string."})}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Type"}),(0,r.jsx)(e.th,{children:"Support qualification Attribute"}),(0,r.jsx)(e.th,{children:"Support qualification Form"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Date"}),(0,r.jsx)(e.td,{children:"Y"}),(0,r.jsx)(e.td,{children:"Y"}),(0,r.jsx)(e.td,{children:"Date. Range: 1899/12/30~65535/12/31"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Time"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Y"}),(0,r.jsx)(e.td,{children:"Time of day, precision in milliseconds."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"TimeStamp"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Y"}),(0,r.jsx)(e.td,{children:"Date + Time (an absolute point of time)"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"supported-data-types-for-text",children:"Supported data types for text"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Type"}),(0,r.jsx)(e.th,{children:"Support qualification Attribute"}),(0,r.jsx)(e.th,{children:"Support qualification Form"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Char"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Y"}),(0,r.jsx)(e.td,{children:"String"})]})})]})]})}function p(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(l,{...t})}):l(t)}},28453:(t,e,i)=>{i.d(e,{R:()=>a,x:()=>d});var r=i(96540);const s={},n=r.createContext(s);function a(t){const e=r.useContext(n);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:a(t.components),r.createElement(n.Provider,{value:e},t.children)}}}]);