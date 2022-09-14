"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8584],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=m(n),u=o,f=d["".concat(s,".").concat(u)]||d[u]||c[u]||a;return n?r.createElement(f,p(p({ref:t},l),{},{components:n})):r.createElement(f,p({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var m=2;m<a;m++)p[m]=n[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8730:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return c}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),p=["components"],i={title:"Workflow Sample - Get Prompt Information",sidebar_label:"Get Prompt Information"},s=void 0,m={unversionedId:"common-workflows/use-prompts-objects/get-prompt-information/workflow-get-prompt-information",id:"common-workflows/use-prompts-objects/get-prompt-information/workflow-get-prompt-information",title:"Workflow Sample - Get Prompt Information",description:"You can use REST APIs to get a list of the prompts that have been applied to a dossier, document or report, together with the definition of each prompt. A workflow sample for using REST APIs to obtain information about prompts:",source:"@site/docs/common-workflows/use-prompts-objects/get-prompt-information/workflow-get-prompt-information.md",sourceDirName:"common-workflows/use-prompts-objects/get-prompt-information",slug:"/common-workflows/use-prompts-objects/get-prompt-information/workflow-get-prompt-information",permalink:"/rest-api-docs/common-workflows/use-prompts-objects/get-prompt-information/workflow-get-prompt-information",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/main/docs/common-workflows/use-prompts-objects/get-prompt-information/workflow-get-prompt-information.md",tags:[],version:"current",lastUpdatedBy:"Liang, Jiapei",lastUpdatedAt:1663189678,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"Workflow Sample - Get Prompt Information",sidebar_label:"Get Prompt Information"},sidebar:"tutorialSidebar",previous:{title:"Get Prompt Information",permalink:"/rest-api-docs/common-workflows/use-prompts-objects/get-prompt-information/"},next:{title:"Prompt Types",permalink:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/"}},l={},c=[{value:"Create an instance of a dossier, document or report",id:"create-an-instance-of-a-dossier-document-or-report",level:2},{value:"Get prompt information",id:"get-prompt-information",level:2}],d={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can use REST APIs to get a list of the prompts that have been applied to a dossier, document or report, together with the definition of each prompt. A workflow sample for using REST APIs to obtain information about prompts:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"#create-an-instance-of-a-dossier-document-or-report"},"Create an instance of a dossier, document or report")),(0,a.kt)("p",{parentName:"li"},"For a prompted dossier or document, the data is not returned when the instance is created. Only the instance ID and the prompt status are returned. For a prompted report, the instance ID, prompts status, and data are currently returned."),(0,a.kt)("p",{parentName:"li"},"For unprompted dossiers, documents, and reports ,the data is returned.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"#get-prompt-information"},"Get prompt information")),(0,a.kt)("p",{parentName:"li"},"You can get information about prompts applied to dossier, document, and report objects in the metadata as well as prompts applied to instances of those objects."))),(0,a.kt)("p",null,"Detailed explanations for each step are provided below:"),(0,a.kt)("h2",{id:"create-an-instance-of-a-dossier-document-or-report"},"Create an instance of a dossier, document or report"),(0,a.kt)("p",null,"Endpoints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"POST /api/dossiers/{dossierId}/instances"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"POST /api/documents/{id}/instances"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"POST /api/reports/{reportId}/instances")),(0,a.kt)("p",{parentName:"li"},'When an instance of a prompted report is created, the status is checked. If the status is "1" or "2", only the status and the instance ID are returned. Status "1" indicates that the instance has been created, and status "2" indicates that the dossier, document or report is waiting for a prompt answer.'),(0,a.kt)("p",{parentName:"li"},"Sample code for a response body when you create an instance of a prompted document or dossier:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "0034EC8011E70F1600000080EFD5150B",\n\n  "status": 2,\n\n  "mid": "F160BAF211E8C0372DBC0080EFE59EDF"\n}\n')),(0,a.kt)("p",{parentName:"li"},"Sample code for a response body when you create an instance of a prompted report:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "0034EC8011E70F1600000080EFD5150B",\n\n  "name": "R_Day",\n\n  "instanceId": "F160BAF211E8C0372DBC0080EFE59EDF",\n\n  "status": 2\n}\n')))),(0,a.kt)("h2",{id:"get-prompt-information"},"Get prompt information"),(0,a.kt)("p",null,"Endpoints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"GET /api/documents/{id}/prompts"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"GET /api/documents/{id}/instances/{instanceId}/prompts"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"GET /api/reports/{reportId}/prompts"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"GET /api/reports/{reportId}/instances/{instanceId}/prompts")),(0,a.kt)("p",{parentName:"li"},"You can get information about prompts applied to dossier, document, and report objects in the metadata as well as prompts applied to instances of those objects. You can get prompt definitions for three separate prompt types: attribute element prompts, object prompts, and value prompts. Sample JSON for each prompt definition is provided below."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  // Object prompts\n\n  {\n    "id": "0B524DB54440D0280747C1A3058ED474",\n\n    "key": "0B524DB54440D0280747C1A3058ED474@0@10",\n\n    "name": "Metric Prompt",\n\n    "title": "Objects",\n\n    "type": "OBJECTS",\n\n    "required": false,\n\n    "max": 2,\n\n    "min": 1,\n\n    "defaultAnswer": {\n      "name": "Cost Growth",\n\n      "id": "D823D64B48A0104B01135587BA87A2BD",\n\n      "type": 4\n    },\n\n    "answers": {\n      "name": "Cost Growth",\n\n      "id": "D823D64B48A0104B01135587BA87A2BD",\n\n      "type": 4\n    }\n  },\n  // Attribute element prompts\n  {\n    "id": "055A4B7241396EB7FC27E3A5D2A9FB2F",\n\n    "key": "055A4B7241396EB7FC27E3A5D2A9FB2F@0@10",\n\n    "name": "Age Range Prompt",\n\n    "title": "Age Range",\n\n    "type": "ELEMENTS",\n\n    "required": false,\n\n    "source": {\n      "name": "Age Range",\n\n      "id": "5603951E4FE1BC04A44E44B85BBB8ED2",\n\n      "type": 12\n    },\n\n    "defaultAnswer": [\n      {\n        "id": "5603951E4FE1BC04A44E44B85BBB8ED2:2",\n\n        "name": "25 to 34"\n      }\n    ],\n\n    "answers": [\n      {\n        "id": "5603951E4FE1BC04A44E44B85BBB8ED2:2",\n\n        "name": "25 to 34"\n      }\n    ]\n  },\n\n  // Value prompts\n  {\n    "id": "0CE45CA4483E29FFB0AF969D68588E95",\n\n    "key": "0CE45CA4483E29FFB0AF969D68588E95@0@10",\n\n    "name": "NamePrompt",\n\n    "title": "Name Prompt",\n\n    "type": "VALUE",\n\n    "required": true,\n\n    "answers": "Darren",\n\n    "defaultAnswer": "Darren",\n\n    "dataType": 8\n  }\n]\n')))))}u.isMDXComponent=!0}}]);