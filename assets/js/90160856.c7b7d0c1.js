"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8244],{3764:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var s=r(74848),n=r(28453);const t={title:"User hierarchy import parameters",description:"The following import parameters in the API response body define a user hierarchy."},o=void 0,l={id:"common-workflows/modeling/manage-user-hierarchy-objects/user-hierarchy-import-parameters",title:"User hierarchy import parameters",description:"The following import parameters in the API response body define a user hierarchy.",source:"@site/docs/common-workflows/modeling/manage-user-hierarchy-objects/user-hierarchy-import-parameters.md",sourceDirName:"common-workflows/modeling/manage-user-hierarchy-objects",slug:"/common-workflows/modeling/manage-user-hierarchy-objects/user-hierarchy-import-parameters",permalink:"/rest-api-docs/common-workflows/modeling/manage-user-hierarchy-objects/user-hierarchy-import-parameters",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-user-hierarchy-objects/user-hierarchy-import-parameters.md",tags:[],version:"current",lastUpdatedBy:"AugLychee",lastUpdatedAt:1710818077,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{title:"User hierarchy import parameters",description:"The following import parameters in the API response body define a user hierarchy."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a list of available user hierarchies",permalink:"/rest-api-docs/common-workflows/modeling/manage-user-hierarchy-objects/retrieve-a-list-of-available-user-hierarchies"},next:{title:"Administration",permalink:"/rest-api-docs/common-workflows/administration/"}},c={},a=[{value:"Information",id:"information",level:2},{value:"UseAsDrillHierarchy",id:"useasdrillhierarchy",level:2},{value:"Attributes",id:"attributes",level:2},{value:"ElementDisplayOption",id:"elementdisplayoption",level:2},{value:"Relationships",id:"relationships",level:2}];function h(e){const i={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components},{Available:r}=i;return r||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{since:"2021 Update 2"}),"\n",(0,s.jsx)(i.p,{children:"The following import parameters in the API response body define a user hierarchy:"}),"\n",(0,s.jsx)(i.h2,{id:"information",children:"Information"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"Information"})," stores the basic user hierarchy information including:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"dateCreated"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"dateModified"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"versionId"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"primaryLocale"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"objectId"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"subType"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"name"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"User hierarchies have different subtypes. Currently, we support the following two subtypes:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"dimension_user"})," This user hierarchy is for drilling."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"dimension_user_hierarchy"})," This user hierarchy is for browsing."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"useasdrillhierarchy",children:"UseAsDrillHierarchy"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"UseAsDrillHierarchy"}),": This Boolean field indicates the user hierarchy subtype. ",(0,s.jsx)(i.code,{children:"False"})," means the subtype is ",(0,s.jsx)(i.code,{children:"dimension_user_hierarchy"}),"; otherwise, it is ",(0,s.jsx)(i.code,{children:"dimension_user"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"attributes",children:"Attributes"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"Attributes"}),": Stores the hierarchy attributes for the user hierarchy in a list, which is required. Each hierarchy attribute contains following properties:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"objectId"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"name"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"entryPoint"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"filters"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"elementDisplayOption"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"limit"})}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"elementdisplayoption",children:"ElementDisplayOption"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"ElementDisplayOption"})," contains the following values:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"all_elements"})," This attribute shows all elements when browsing."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"no_elements"})," This attribute does not show any elements when browsing."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"limited_elements"})," This attribute shows limited elements when browsing, within a defined limit. The limit field is only required for ",(0,s.jsx)(i.code,{children:"limited_elements"}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Each user hierarchy should have at least one entry point."}),"\n",(0,s.jsx)(i.h2,{id:"relationships",children:"Relationships"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"Relationships"}),": Stores the hierarchy relationships for the user hierarchy in a list. The relationship is not required. You can create a hierarchy with no relationship."]}),"\n",(0,s.jsxs)(i.p,{children:["Each hierarchy relationship contains a parent and child. Both parent and child contain ",(0,s.jsx)(i.code,{children:"objectId"}),", ",(0,s.jsx)(i.code,{children:"subType"}),", and ",(0,s.jsx)(i.code,{children:"name"}),". ",(0,s.jsx)(i.code,{children:"subType"})," must be an attribute."]})]})}function d(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,i,r)=>{r.d(i,{R:()=>o,x:()=>l});var s=r(96540);const n={},t=s.createContext(n);function o(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);