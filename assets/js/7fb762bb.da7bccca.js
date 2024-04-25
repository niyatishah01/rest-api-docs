"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1733],{20303:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=t(74848),r=t(28453);const s={title:"General guidelines for using view filters",description:"The general guidelines for using view filters."},a=void 0,o={id:"common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/general-guidelines",title:"General guidelines for using view filters",description:"The general guidelines for using view filters.",source:"@site/docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/general-guidelines.md",sourceDirName:"common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters",slug:"/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/general-guidelines",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/general-guidelines",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/general-guidelines.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1714063612,formattedLastUpdatedAt:"Apr 25, 2024",frontMatter:{title:"General guidelines for using view filters",description:"The general guidelines for using view filters."},sidebar:"tutorialSidebar",previous:{title:"Filter report and cube instances using view filters",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/"},next:{title:"Supported operators for view filters",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-operators"}},l={},c=[];function d(e){const n={a:"a",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"When you use a view filter to refine the data returned in a report or cube instance, please note the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For each filter qualification, you specify the operands (the values to be compared) and the operator (the kind of comparison to make). The operands can be metrics, attribute forms, or constant values. The operators can be one of many ",(0,i.jsx)(n.a,{href:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-operators",children:"supported operators"}),', such as "greater than", "equal to", or "top 20%". An example of an attribute qualification might be ',(0,i.jsx)(n.strong,{children:"Category equal to Music"}),". An example of a metric qualification might be ",(0,i.jsx)(n.strong,{children:"Profit greater than $200,000"})," or ",(0,i.jsx)(n.strong,{children:"Revenue less than Profit"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Metric qualification"})}),"\n",(0,i.jsx)(n.p,{children:'Metrics typically have numeric values, though some special metrics can be of Date type. Other data types are not supported."Real" is generally sufficient as a data type. However, if you know the metric is calculated with a special precision, such as "BigDecimal/Int64", you can specify it.'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Attribute form qualification"})}),"\n",(0,i.jsx)(n.p,{children:"You can qualify on one or more attribute forms. If you want to qualify on multiple forms, use the AND operator to add another qualification on a different form. Instead of manually entering the data type for an attribute form, the recommended practice is to copy it from the JSON definition section of the report or cube results, as shown in bold in the code sample below:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "4ACD9EEE4154BB87CE3F9DA279A733FB",\n  "name": "Report - Derived Metric",\n  "result": {\n    "definition": {\n      "availableObjects": {\n        "attributes": [\n          {\n            "name": "Year_number&date",\n            "id": "573FF5AB482CA58FDFF1F95AF53690D42",\n            "type": "Attribute",\n            "forms": [\n              {\n                "id": "45C11FA478E745FEA08D781CEA190FE5",\n                "name": "ID",\n                "dataType": "Real"\n              }\n            ]\n          }\n        ]\n      }\n    }\n  }\n}\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"View filters are applied on report objects, instead of on grid objects (that is, they are applied before aggregation). For example, if a report has (Year, Category, Revenue) in the report objects, but only (Year, Revenue) on the grid, a filter on Revenue is applied on the (Year, Category) level, instead of on the (Year) level. To achieve the desired result, you may want to put all report objects on the grid so the filtering level is the same as the display level."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"All Rank and Percent functions are descending. For example, Percent.Top means the largest 10%, and Rank.Equals 5 means the 5th largest."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'For the value of Percent operators, you can use either percentage ("20%") or the equivalent real number ("0.2").'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Operators, operand types, and data types are all case sensitive and should be written exactly as in the examples."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The following are not currently supported:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Page by"}),"\n",(0,i.jsx)(n.li,{children:"Prompt"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Features that may not work well with view filters include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Derived elements and other objects that cannot be qualified on in MicroStrategy Web"}),"\n",(0,i.jsx)(n.li,{children:"Other REST API unsupported features"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Attribute / element / form / metric IDs must be valid, which means:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ID is syntactically correct."}),"\n",(0,i.jsx)(n.li,{children:"Attribute/element/form/metric exists in the report/cube."}),"\n",(0,i.jsx)(n.li,{children:"Element/form ID matches the corresponding attribute ID."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If the ID is invalid, you may get undesired behavior, including but not limited to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"An error message is returned."}),"\n",(0,i.jsx)(n.li,{children:"The qualification is considered ALWAYS UNSATISFIED."}),"\n",(0,i.jsx)(n.li,{children:"The qualification is IGNORED."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For example, if the ",(0,i.jsx)(n.strong,{children:"Customer"})," attribute in a cube has no ",(0,i.jsx)(n.strong,{children:"LastName"})," form, but the view filter includes an expression such as Customer@LastName ",(0,i.jsx)(n.code,{children:"BeginsWith"}),' "B", no data is returned. No Customer meets this qualification because the Last Name does not exist, but you do not get an error message explaining why this happened.']}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);