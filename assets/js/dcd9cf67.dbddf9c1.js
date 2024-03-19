"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[9023],{73288:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=a(74848),n=a(28453);const i={title:"Manage table objects",description:"You can use REST API requests to retrieve, create, and update table objects through the Modeling service."},s=void 0,r={id:"common-workflows/modeling/manage-table-objects/manage-table-objects",title:"Manage table objects",description:"You can use REST API requests to retrieve, create, and update table objects through the Modeling service.",source:"@site/docs/common-workflows/modeling/manage-table-objects/manage-table-objects.md",sourceDirName:"common-workflows/modeling/manage-table-objects",slug:"/common-workflows/modeling/manage-table-objects/",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-table-objects/manage-table-objects.md",tags:[],version:"current",lastUpdatedBy:"AugLychee",lastUpdatedAt:1710818077,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{title:"Manage table objects",description:"You can use REST API requests to retrieve, create, and update table objects through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Update a subtotal within a changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-subtotal-objects/update-a-subtotal-within-a-changeset"},next:{title:"Retrieve a list of all available table definitions",permalink:"/rest-api-docs/common-workflows/modeling/manage-table-objects/retrieve-a-list-of-all-available-table-definitions"}},l={},c=[];function d(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components},{Available:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a,{since:"2021 Update 1"}),"\n",(0,o.jsxs)(t.admonition,{type:"tip",children:[(0,o.jsxs)(t.p,{children:["You can try these workflows with ",(0,o.jsx)(t.a,{href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-43769ee1-7480-4413-990a-13b50119b384?ctx=documentation",children:"REST API Playground"}),"."]}),(0,o.jsxs)(t.p,{children:["Learn more about MicroStrategy REST API Playground ",(0,o.jsx)(t.a,{href:"/rest-api-docs/getting-started/playground",children:"here"}),"."]})]}),"\n",(0,o.jsx)(t.p,{children:"You can use REST API requests to retrieve, create, and update table objects through the Modeling service."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/manage-table-objects/retrieve-a-list-of-all-available-table-definitions",children:"Retrieve a list of all available table definitions"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/manage-table-objects/retrieve-a-tables-definition",children:"Retrieve a table's definition"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/manage-table-objects/create-a-new-table-object",children:"Create a new table object"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/manage-table-objects/update-a-tables-definition",children:"Update a table's definition"})}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/manage-table-objects/retrieve-a-prompt-of-an-sap-hana-table",children:"Retrieve a prompt of an SAP HANA table with input parameters"})," ",(0,o.jsx)(a,{since:"2021 Update 6",inline:!0})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/manage-table-objects/update-a-prompt-of-an-sap-hana-table",children:"Update a prompt of an SAP HANA table with input parameters"})," ",(0,o.jsx)(a,{since:"2021 Update 6",inline:!0})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/manage-table-objects/update-sap-hana-parameters",children:"Update SAP HANA parameters for an SAP HANA table with input parameters"})," ",(0,o.jsx)(a,{since:"2021 Update 6",inline:!0})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/manage-table-objects/retrieve-a-partition-mapping-tables-definition",children:"Retrieve a partition mapping table's definition"})," ",(0,o.jsx)(a,{since:"2021 Update 9",inline:!0})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/manage-table-objects/create-a-new-partition-mapping-table-object",children:"Create a new partition mapping table object"})," ",(0,o.jsx)(a,{since:"2021 Update 9",inline:!0})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/manage-table-objects/update-a-partition-mapping-tables-definition",children:"Update a partition mapping table's definition"})," ",(0,o.jsx)(a,{since:"2021 Update 9",inline:!0})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/rest-api-docs/common-workflows/modeling/manage-table-objects/update-a-tables-physical-table-structure",children:"Update a table's physical table structure"})," ",(0,o.jsx)(a,{since:"2021 Update 11",inline:!0})]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["For more information about the Modeling service, see ",(0,o.jsx)(t.a,{href:"https://www2.microstrategy.com/producthelp/Current/InstallConfig/en-us/Content/modeling_service.htm",children:"Configuring the Modeling Service"}),"."]})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>r});var o=a(96540);const n={},i=o.createContext(n);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);