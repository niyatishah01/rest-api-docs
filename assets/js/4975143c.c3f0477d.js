"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6895],{91723:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=i(74848),a=i(28453);const s={title:"Filter data",description:"You can use REST API requests to filter data that is returned and to retrieve information about filters that were applied."},n=void 0,o={id:"common-workflows/analytics/filter-data/filter-data",title:"Filter data",description:"You can use REST API requests to filter data that is returned and to retrieve information about filters that were applied.",source:"@site/docs/common-workflows/analytics/filter-data/filter-data.md",sourceDirName:"common-workflows/analytics/filter-data",slug:"/common-workflows/analytics/filter-data/",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/filter-data/filter-data.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1714063612,formattedLastUpdatedAt:"Apr 25, 2024",frontMatter:{title:"Filter data",description:"You can use REST API requests to filter data that is returned and to retrieve information about filters that were applied."},sidebar:"tutorialSidebar",previous:{title:"Sort data",permalink:"/rest-api-docs/common-workflows/analytics/sort-data"},next:{title:"Filter report and cube instances",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/"}},l={},d=[{value:"Filter report and cube instances",id:"filter-report-and-cube-instances",level:2},{value:"Filter dashboard instances",id:"filter-dashboard-instances",level:3},{value:"Retrieve filters applied in dashboard chapters",id:"retrieve-filters-applied-in-dashboard-chapters",level:3},{value:"Retrieve filters applied to a visualization in a dashboard",id:"retrieve-filters-applied-to-a-visualization-in-a-dashboard",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsxs)(t.p,{children:["You can try these workflows with ",(0,r.jsx)(t.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-b0a16367-8997-447d-8731-2d6281d4f9bc?ctx=documentation",children:"REST API Playground"}),"."]}),(0,r.jsxs)(t.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,r.jsx)(t.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,r.jsx)(t.p,{children:"You can use REST API requests to filter data that is returned and to retrieve information about filters that were applied:"}),"\n",(0,r.jsx)(t.h2,{id:"filter-report-and-cube-instances",children:"Filter report and cube instances"}),"\n",(0,r.jsxs)(t.p,{children:["You can use the following REST APIs to filter the data that is returned when you ",(0,r.jsx)(t.a,{href:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/",children:"create an instance of a report or cube"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"POST /api/reports/{reportId}/instances"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"POST /api/cubes/{cubeId}/instances"})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Because these filters are applied to instances, they are not persisted."}),"\n",(0,r.jsx)(t.p,{children:"You define how the data should be filtered in the body parameter of the request. You can filter the data that is returned in the following ways:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/",children:"Using view filters"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/",children:"Using metric limits"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-requested-objects/",children:"Using requested objects"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["If you use both a viewFilter and a ",(0,r.jsx)(t.code,{children:"requestedObjects"})," parameter in the HTTP request, the view filter will be applied first. The requested objects definition will then be applied to the filtered results (a subset of the cube data), rather than to the cube data itself."]}),"\n",(0,r.jsx)(t.h3,{id:"filter-dashboard-instances",children:"Filter dashboard instances"}),"\n",(0,r.jsxs)(t.p,{children:["You can use the following REST APIs to ",(0,r.jsx)(t.a,{href:"/rest-api-docs/common-workflows/analytics/filter-data/filter-dossier-instances/",children:"filter the data that is returned when you create or update an instance of a dashboard"}),", including clearing the filter selections."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"POST /api/dossiers/{dossierId}/instances"})," Create an instance of a specific dashboard with the existing filter applied, including clearing all of the current filter selections."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"PUT /api/dossiers/{dossierId}/instances/{instanceId}/filters"})," Execute an existing dashboard instance with new filter selections, including clearing all of the current filter selections."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["We have provided a ",(0,r.jsx)(t.a,{href:"/rest-api-docs/common-workflows/analytics/filter-data/filter-dossier-instances/apply-filters-to-a-dossier",children:"workflow sample"})," that illustrates how to create an instance of a dashboard with an existing filter applied, and then re-execute the same dashboard instance with updated selections for the same filter."]}),"\n",(0,r.jsxs)(t.p,{children:["For detailed information about filtering data in dashboards, see the ",(0,r.jsx)(t.a,{href:"https://www2.microstrategy.com/producthelp/Current/MSTRWeb/WebHelp/Lang_1033/Content/filter_data.htm",children:"MicroStrategy product help"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"retrieve-filters-applied-in-dashboard-chapters",children:"Retrieve filters applied in dashboard chapters"}),"\n",(0,r.jsxs)(t.p,{children:["You can use the following REST API to get information about the ",(0,r.jsx)(t.a,{href:"/rest-api-docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-dossier-chapters",children:"filter applied in each chapter in a specific dashboard"}),", including the key and name of the filter, a text summary of the filter expression, and information for the filter source."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"GET /api/dossiers/{dossierId}/definition"})}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"retrieve-filters-applied-to-a-visualization-in-a-dashboard",children:"Retrieve filters applied to a visualization in a dashboard"}),"\n",(0,r.jsxs)(t.p,{children:["You can use the following REST API request to return information about the ",(0,r.jsx)(t.a,{href:"/rest-api-docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/",children:"filters that were applied to a visualization in a dashboard"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"GET /api/dossiers/{dossierId}/instances/{instanceId}/chapters/{chapterKey/visualizations/{visualizationKey}"})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"The following types of filters are applied at specific points in the data aggregation process."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/rest-api-docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/return-metric-based-view-filters",children:"Metric-based view filter"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/rest-api-docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/return-attribute-based-view-filters",children:"Attribute-based view filter"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/rest-api-docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/return-template-limit-criteria",children:"Template limit"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/rest-api-docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/return-metric-limit-criteria",children:"Metric limit"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>o});var r=i(96540);const a={},s=r.createContext(a);function n(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);