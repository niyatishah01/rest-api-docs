"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5067],{23242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=n(74848),r=n(28453);const i={title:"Retrieve documents",Description:"Retrieve a list of documents using the MicroStrategy REST API."},d=void 0,c={id:"common-workflows/analytics/manage-documents/get-document-list/get-document-list",title:"Retrieve documents",description:"This workflow sample demonstrates how to retrieve a list of documents using the MicroStrategy REST API.",source:"@site/docs/common-workflows/analytics/manage-documents/get-document-list/get-document-list.md",sourceDirName:"common-workflows/analytics/manage-documents/get-document-list",slug:"/common-workflows/analytics/manage-documents/get-document-list/",permalink:"/rest-api-docs/common-workflows/analytics/manage-documents/get-document-list/",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/manage-documents/get-document-list/get-document-list.md",tags:[],version:"current",lastUpdatedBy:"AugLychee",lastUpdatedAt:1710818077,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{title:"Retrieve documents",Description:"Retrieve a list of documents using the MicroStrategy REST API."},sidebar:"tutorialSidebar",previous:{title:"Manage documents",permalink:"/rest-api-docs/common-workflows/analytics/manage-documents/"},next:{title:"Retrieve the hierarchy of document",permalink:"/rest-api-docs/common-workflows/analytics/manage-documents/retrieve-document/retrieve-the-hierarchy-of-a-document"}},o={},a=[{value:"GET /api/documents",id:"get-apidocuments",level:2},{value:"Request URL",id:"request-url",level:3},{value:"Sample Curl Request",id:"sample-curl-request",level:3},{value:"Request Headers",id:"request-headers",level:3},{value:"Query Parameters",id:"query-parameters",level:3},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4},{value:"HTTP Status Codes",id:"http-status-codes",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{Available:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Available",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{since:"2021 Update 10"}),"\n",(0,s.jsx)(t.p,{children:"This workflow sample demonstrates how to retrieve a list of documents using the MicroStrategy REST API."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Obtain the authorization token needed to execute the request using ",(0,s.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"get-apidocuments",children:"GET /api/documents"}),"\n",(0,s.jsx)(t.p,{children:"Retrieve a list of documents in a specific project that meet specific search criteria."}),"\n",(0,s.jsx)(t.h3,{id:"request-url",children:"Request URL"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"GET /api/documents\n"})}),"\n",(0,s.jsx)(t.h3,{id:"sample-curl-request",children:"Sample Curl Request"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -X 'GET' 'http://demo.microstrategy.com/MicroStrategyLibrary/api/documents?searchTerm=ipad&searchPattern=CONTAINS_ANY_WORD&offset=0&limit=-1&certifiedStatus=ALL' \\\n-H 'accept: application/json' \\\n-H 'X-MSTR-AuthToken: p3itnh1510c2j7kg29t29ju5us' \\\n-H 'X-MSTR-ProjectID: 9DE876B611E7C33BF65B0080EF45D3E8'\n"})}),"\n",(0,s.jsx)(t.h3,{id:"request-headers",children:"Request Headers"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"X-MSTR-AuthToken"})}),(0,s.jsx)(t.td,{children:"Header"}),(0,s.jsx)(t.td,{children:"Authorization token"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"X-MSTR-ProjectID"})}),(0,s.jsx)(t.td,{children:"Header"}),(0,s.jsx)(t.td,{children:"Project ID"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"query-parameters",children:"Query Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"searchTerm"})}),(0,s.jsx)(t.td,{children:"Query"}),(0,s.jsxs)(t.td,{children:["The value of the search ",(0,s.jsx)(t.code,{children:"searchPattern"}),". This parameter is used with the ",(0,s.jsx)(t.code,{children:"searchPattern"})," parameter."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"searchPattern"})}),(0,s.jsx)(t.td,{children:"Query"}),(0,s.jsx)(t.td,{children:'The search pattern that will be applied to the search. Possible search patterns include "Begins with", "Begins with phrase", "Contains", etc.'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"offset"})}),(0,s.jsx)(t.td,{children:"Query"}),(0,s.jsx)(t.td,{children:"The starting point in a collection of returned search results. This parameter is used to control paging behavior."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"limit"})}),(0,s.jsx)(t.td,{children:"Query"}),(0,s.jsx)(t.td,{children:"The maximum number of items returned for a single request. This parameter is used to control paging behavior."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"certifiedStatus"})}),(0,s.jsx)(t.td,{children:"Query"}),(0,s.jsx)(t.td,{children:"Defines a search criteria of the certified status of the object."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"fields"})}),(0,s.jsx)(t.td,{children:"Query"}),(0,s.jsx)(t.td,{children:"A comma-separated, top-level field whitelist that allows the client to selectively retrieve part of the response model."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"response",children:"Response"}),"\n",(0,s.jsxs)(t.p,{children:["If successful, this API call returns a ",(0,s.jsx)(t.code,{children:"200 OK"})," status code and the list of documents in the response body. The response body follows the ",(0,s.jsx)(t.code,{children:"SearchResultInfo"})," schema."]}),"\n",(0,s.jsx)(t.h4,{id:"sample-response",children:"Sample Response"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "totalItems": 2,\n  "result": [\n    {\n      "name": "iPad Landscape",\n      "id": "036C946741BB821F9DE3BE82C19FA45A",\n      "type": 55,\n      "description": "Use this template to create dashboards for iPad in landscape mode.",\n      "subtype": 14081,\n      "dateCreated": "2010-06-12T18:55:38.000+0000",\n      "dateModified": "2015-01-12T13:53:09.000+0000",\n      "version": "AC1BFF4741F061028A1500AFACF1ACD5",\n      "acg": 255,\n      "owner": {\n        "name": "Administrator",\n        "id": "54F3D26011D2896560009A8E67019608"\n      },\n      "hidden": true,\n      "extType": 0,\n      "viewMedia": 268435711,\n      "certifiedInfo": {\n        "certified": false\n      },\n      "templateInfo": {\n        "template": false,\n        "lastModifiedBy": {}\n      },\n      "projectId": "9DE876B611E7C33BF65B0080EF45D3E8"\n    },\n    {\n      "name": "iPad Portrait",\n      "id": "24C6A93740053621A3A9FFBE66D51F98",\n      "type": 55,\n      "description": "Use this template to create dashboards for iPad in portrait mode.",\n      "subtype": 14081,\n      "dateCreated": "2010-06-12T18:58:52.000+0000",\n      "dateModified": "2015-01-12T13:53:52.000+0000",\n      "version": "4BBE365743ACBB0927C087AFCF736367",\n      "acg": 255,\n      "owner": {\n        "name": "Administrator",\n        "id": "54F3D26011D2896560009A8E67019608"\n      },\n      "hidden": true,\n      "extType": 0,\n      "viewMedia": 268435711,\n      "certifiedInfo": {\n        "certified": false\n      },\n      "templateInfo": {\n        "template": false,\n        "lastModifiedBy": {}\n      },\n      "projectId": "9DE876B611E7C33BF65B0080EF45D3E8"\n    }\n  ]\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"result"})," field contains an array of document objects, where each object represents a document and includes properties such as ",(0,s.jsx)(t.code,{children:"id"}),", ",(0,s.jsx)(t.code,{children:"name"}),", ",(0,s.jsx)(t.code,{children:"createdBy"}),", ",(0,s.jsx)(t.code,{children:"createdTime"}),", and ",(0,s.jsx)(t.code,{children:"certified"}),". The ",(0,s.jsx)(t.code,{children:"totalCount"})," field indicates the total number of documents found based on the search criteria."]}),"\n",(0,s.jsx)(t.h3,{id:"http-status-codes",children:"HTTP Status Codes"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Status Code"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"200"}),(0,s.jsx)(t.td,{children:"OK"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"400"}),(0,s.jsx)(t.td,{children:"Bad Request"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"500"}),(0,s.jsx)(t.td,{children:"Internal Server Error"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>c});var s=n(96540);const r={},i=s.createContext(r);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);