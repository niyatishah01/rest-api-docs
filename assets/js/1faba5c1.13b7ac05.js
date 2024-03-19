"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6601],{85436:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=t(74848),i=t(28453);const s={title:"Logic for creating a dataset incrementally",sidebar_label:"Logic for creating a dataset incrementally",description:"Separating the action of defining the dataset from the actual creation of the dataset allows you to add data in an incremental fashion. Making publishing the dataset another separate step allows you to schedule publication at any time after all the data has been added. This incremental approach has a beneficial impact on performance and is very important when you are working with very large datasets."},o=void 0,r={id:"common-workflows/analytics/manage-datasets/make-external-data-available/create-a-dataset-incrementally-with-multiple-requests/logic-for-creating-a-dataset-incrementally",title:"Logic for creating a dataset incrementally",description:"Separating the action of defining the dataset from the actual creation of the dataset allows you to add data in an incremental fashion. Making publishing the dataset another separate step allows you to schedule publication at any time after all the data has been added. This incremental approach has a beneficial impact on performance and is very important when you are working with very large datasets.",source:"@site/docs/common-workflows/analytics/manage-datasets/make-external-data-available/create-a-dataset-incrementally-with-multiple-requests/logic-for-creating-a-dataset-incrementally.md",sourceDirName:"common-workflows/analytics/manage-datasets/make-external-data-available/create-a-dataset-incrementally-with-multiple-requests",slug:"/common-workflows/analytics/manage-datasets/make-external-data-available/create-a-dataset-incrementally-with-multiple-requests/logic-for-creating-a-dataset-incrementally",permalink:"/rest-api-docs/common-workflows/analytics/manage-datasets/make-external-data-available/create-a-dataset-incrementally-with-multiple-requests/logic-for-creating-a-dataset-incrementally",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/manage-datasets/make-external-data-available/create-a-dataset-incrementally-with-multiple-requests/logic-for-creating-a-dataset-incrementally.md",tags:[],version:"current",lastUpdatedBy:"AugLychee",lastUpdatedAt:1710818077,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{title:"Logic for creating a dataset incrementally",sidebar_label:"Logic for creating a dataset incrementally",description:"Separating the action of defining the dataset from the actual creation of the dataset allows you to add data in an incremental fashion. Making publishing the dataset another separate step allows you to schedule publication at any time after all the data has been added. This incremental approach has a beneficial impact on performance and is very important when you are working with very large datasets."},sidebar:"tutorialSidebar",previous:{title:"Benefits of creating a dataset incrementally with multiple requests",permalink:"/rest-api-docs/common-workflows/analytics/manage-datasets/make-external-data-available/create-a-dataset-incrementally-with-multiple-requests/benefits"},next:{title:"Create a dataset incrementally with multiple requests",permalink:"/rest-api-docs/common-workflows/analytics/manage-datasets/make-external-data-available/create-a-dataset-incrementally-with-multiple-requests/workflow-create-a-dataset-incrementally-with-multiple-requests"}},l={},c=[];function d(a){const e={img:"img",p:"p",...(0,i.R)(),...a.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:"The diagram below illustrates the basic workflow to create a new dataset and add data to it, modify an existing dataset, and publish a new or existing dataset. Separating the action of defining the dataset from the actual creation of the dataset allows you to add data in an incremental fashion. Making publishing the dataset another separate step allows you to schedule publication at any time after all the data has been added. This incremental approach has a beneficial impact on performance and is very important when you are working with very large datasets."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"PushDataAPIv2_workflowDiagram",src:t(6576).A+"",width:"1030",height:"667"})}),"\n",(0,n.jsx)(e.p,{children:"This workflow allows you to upload large amounts of data to the Intelligence Server incrementally to manage the impact on performance. You can vary the amount of data and the timing to fit the needs of your environment. As illustrated in the diagram, you first create the model for the dataset and then create an upload session on the Intelligence Server. After the upload session has been created, you can make multiple requests to add data to the session. Once all of the data has been uploaded, you are ready to publish the dataset. You can get the publishing status of the dataset at any time. If the dataset has already been published, it is available for use. If the dataset has not been published, it is not yet ready for use; if you want to cancel the publish action, you can delete the upload session at any point before publication is complete."})]})}function m(a={}){const{wrapper:e}={...(0,i.R)(),...a.components};return e?(0,n.jsx)(e,{...a,children:(0,n.jsx)(d,{...a})}):d(a)}},6576:(a,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/PushDataAPIv2_workflowDiagram-c2c69c5c57d308ea2c4e0dbce8399974.jpg"},28453:(a,e,t)=>{t.d(e,{R:()=>o,x:()=>r});var n=t(96540);const i={},s=n.createContext(i);function o(a){const e=n.useContext(s);return n.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function r(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(i):a.components||i:o(a.components),n.createElement(s.Provider,{value:e},a.children)}}}]);