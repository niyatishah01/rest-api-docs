"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[2848],{98188:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>d,toc:()=>l});var o=t(74848),a=t(28453);const n={title:"Apply dashboard themes",sidebar_label:"Apply dashboard themes",description:"A workflow sample for applying a dashboard theme to a dashboard instance is provided below."},r=void 0,d={id:"common-workflows/modeling/manage-dossier-themes/apply-dossier-theme",title:"Apply dashboard themes",description:"A workflow sample for applying a dashboard theme to a dashboard instance is provided below.",source:"@site/docs/common-workflows/modeling/manage-dossier-themes/apply-dossier-theme.md",sourceDirName:"common-workflows/modeling/manage-dossier-themes",slug:"/common-workflows/modeling/manage-dossier-themes/apply-dossier-theme",permalink:"/rest-api-docs/common-workflows/modeling/manage-dossier-themes/apply-dossier-theme",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-dossier-themes/apply-dossier-theme.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1714063612,formattedLastUpdatedAt:"Apr 25, 2024",frontMatter:{title:"Apply dashboard themes",sidebar_label:"Apply dashboard themes",description:"A workflow sample for applying a dashboard theme to a dashboard instance is provided below."},sidebar:"tutorialSidebar",previous:{title:"Get dashboard theme json",permalink:"/rest-api-docs/common-workflows/modeling/manage-dossier-themes/get-dossier-theme-json"},next:{title:"Manage drill maps",permalink:"/rest-api-docs/common-workflows/modeling/manage-drill-maps/"}},i={},l=[{value:"Apply a theme to dashboard instance",id:"apply-a-theme-to-dashboard-instance",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Available:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{since:"2021 Update 10"}),"\n",(0,o.jsxs)(s.p,{children:["This workflow sample demonstrates how to apply a theme to a dashboard instance through ",(0,o.jsx)(s.code,{children:"POST /api/v2/dossiers/{dossierId}/instances/{instanceId}/themes/{themeId}"})]}),"\n",(0,o.jsxs)(s.admonition,{type:"tip",children:[(0,o.jsxs)(s.p,{children:["Get the authorization token needed to execute the request with ",(0,o.jsx)(s.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),(0,o.jsxs)(s.p,{children:["Get the project ID from ",(0,o.jsx)(s.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]})]}),"\n",(0,o.jsx)(s.h2,{id:"apply-a-theme-to-dashboard-instance",children:"Apply a theme to dashboard instance"}),"\n",(0,o.jsxs)(s.p,{children:["Endpoint: ",(0,o.jsx)(s.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents/applyTheme",children:"POST /api/v2/dossiers/{dossierId}/instances/{instanceId}/themes/{themeId}"})]}),"\n",(0,o.jsx)(s.p,{children:"Sample path parameters:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"dossierId"}),": the object ID of the dashboard;"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"instanceId"}),": the ID of dashboard instance;"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"themeId"}),": the object ID of the theme"]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Sample Request Header:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-http",children:'"accept": "application/json"\n"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"\n"X-MSTR-ProjectID": "B19DEDCC11D4E0EFC000EB9495D0F44F"\n'})}),"\n",(0,o.jsx)(s.p,{children:"Sample Request Body: None"}),"\n",(0,o.jsx)(s.p,{children:"Sample Curl:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'http://localhost:8282/consume-dev/api/v2/dossiers/119DEDCC11D4E0EFC000EB9495D0F444/instances/4A2F9667C842E3BB9D0CFFABE6F3ED53/themes/4A2F9667C842E3BB9D0CFFABE6F3ED5B' \\\n  -H 'accept: */*' \\\n  -H 'X-MSTR-AuthToken: mni11f26j5acml4opgf0gckmnk' \\\n  -H 'X-MSTR-ProjectID: B19DEDCC11D4E0EFC000EB9495D0F44F' \\\n  -d ''\n"})}),"\n",(0,o.jsx)(s.p,{children:"Sample Response Body: N/A"}),"\n",(0,o.jsx)(s.p,{children:"Sample Response Code: 201 (Dashboard theme instance is saved to metadata.)"})]})}function p(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>d});var o=t(96540);const a={},n=o.createContext(a);function r(e){const s=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(n.Provider,{value:s},e.children)}}}]);