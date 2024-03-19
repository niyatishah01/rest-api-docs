"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1003],{6657:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>n,metadata:()=>l,toc:()=>o});var r=s(74848),d=s(28453);const n={title:"Supported operators for view filters",description:"The supported operators for view filters."},i=void 0,l={id:"common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-operators",title:"Supported operators for view filters",description:"The supported operators for view filters.",source:"@site/docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-operators.md",sourceDirName:"common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters",slug:"/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-operators",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-operators",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-operators.md",tags:[],version:"current",lastUpdatedBy:"AugLychee",lastUpdatedAt:1710818077,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{title:"Supported operators for view filters",description:"The supported operators for view filters."},sidebar:"tutorialSidebar",previous:{title:"General guidelines for using view filters",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/general-guidelines"},next:{title:"Supported constant data types for view filters",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-constant-data-types"}},c={},o=[{value:"Attributes",id:"attributes",level:2},{value:"Metrics",id:"metrics",level:2}];function x(t){const e={a:"a",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"The table below lists the operators/functions that can be used to define view filters when you are creating reports and cube instances with REST APIs (sometimes referred to as JSON Data API)."}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/code-sample",children:"Code samples"})," are provided to illustrate how to use some of these operators. For operators without code samples, you can use the samples that are provided as a model for how to write your own code."]}),"\n",(0,r.jsx)(e.h2,{id:"attributes",children:"Attributes"}),"\n",(0,r.jsx)(e.p,{children:"The following are the supported operators for attributes."}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"Operator"}),(0,r.jsx)(e.th,{children:"Function Alias"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Attribute element"}),(0,r.jsx)(e.td,{children:"In"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"In list"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"NotIn"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Not in list"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Attribute form [ID / DESC]"}),(0,r.jsx)(e.td,{children:"Equals"}),(0,r.jsx)(e.td,{children:"="}),(0,r.jsx)(e.td,{children:"Exactly"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"NotEqual"}),(0,r.jsx)(e.td,{children:"!="}),(0,r.jsx)(e.td,{children:"Different from"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Greater"}),(0,r.jsx)(e.td,{children:">"}),(0,r.jsx)(e.td,{children:"Greater than"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Less"}),(0,r.jsx)(e.td,{children:"<"}),(0,r.jsx)(e.td,{children:"Less than"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"GreaterEqual"}),(0,r.jsx)(e.td,{children:">="}),(0,r.jsx)(e.td,{children:"Greater than or equal to"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"LessEqual"}),(0,r.jsx)(e.td,{children:"<="}),(0,r.jsx)(e.td,{children:"Less than or equal to"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Between"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Between"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"NotBetween"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Not between"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"IsNull"}),(0,r.jsx)(e.td,{children:"null"}),(0,r.jsx)(e.td,{children:"Is null"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"IsNotNull"}),(0,r.jsx)(e.td,{children:"notnull"}),(0,r.jsx)(e.td,{children:"Is not null"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Attribute form [DESC]"}),(0,r.jsx)(e.td,{children:"Like"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"NotLike"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Contains"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"NotContains"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"BeginsWith"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"NotBeginsWith"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"EndsWith"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"NotEndsWith"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"metrics",children:"Metrics"}),"\n",(0,r.jsx)(e.p,{children:"The following are the supported operators for metrics."}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"Operator"}),(0,r.jsx)(e.th,{children:"Function Alias"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Basic function"}),(0,r.jsx)(e.td,{children:"Equals"}),(0,r.jsx)(e.td,{children:"="})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"NotEqual"}),(0,r.jsx)(e.td,{children:"!="})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Greater"}),(0,r.jsx)(e.td,{children:">"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Less"}),(0,r.jsx)(e.td,{children:"<"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"GreaterEqual"}),(0,r.jsx)(e.td,{children:">="})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"LessEqual"}),(0,r.jsx)(e.td,{children:"<="})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Between"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"NotBetween"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"IsNull"}),(0,r.jsx)(e.td,{children:"null"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"IsNotNull"}),(0,r.jsx)(e.td,{children:"notnull"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.strong,{children:"Rank"})," [descending order]"]}),(0,r.jsx)(e.td,{children:"Rank.Equals"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Rank.DifferentFrom"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Rank.Between"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Rank.NotBetween"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Rank.Top"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Rank.Bottom"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Rank.ExcludeTop"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Rank.ExcludeBottom"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.strong,{children:"Percent"})," [descending order]"]}),(0,r.jsx)(e.td,{children:"Percent.Equals"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Percent.DifferentFrom"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Percent.Between"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Percent.NotBetween"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Percent.Top"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Percent.Bottom"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Percent.ExcludeTop"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Percent.ExcludeBottom"}),(0,r.jsx)(e.td,{})]})]})]})]})}function j(t={}){const{wrapper:e}={...(0,d.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(x,{...t})}):x(t)}},28453:(t,e,s)=>{s.d(e,{R:()=>i,x:()=>l});var r=s(96540);const d={},n=r.createContext(d);function i(t){const e=r.useContext(n);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(d):t.components||d:i(t.components),r.createElement(n.Provider,{value:e},t.children)}}}]);