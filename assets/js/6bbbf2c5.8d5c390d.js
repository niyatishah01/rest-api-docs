"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[6532],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(a),h=r,d=u["".concat(p,".").concat(h)]||u[h]||c[h]||i;return a?n.createElement(d,o(o({ref:t},m),{},{components:a})):n.createElement(d,o({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},70527:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return u}});var n,r=a(83117),i=a(80102),o=(a(67294),a(3905)),l=["components"],p={title:"Hierarchy qualification prompts",description:"A hierarchy qualification prompt allows users to filter data in a report or document based on the qualification of multiple attributes from the hierarchies. For example, you can determine a single hierarchy or list of hierarchies from which users can select attributes and make qualifications on these attributes to define their filters."},s=void 0,m={unversionedId:"common-workflows/analytics/use-prompts-objects/prompt-types/hierarchy-qualification-prompts",id:"common-workflows/analytics/use-prompts-objects/prompt-types/hierarchy-qualification-prompts",title:"Hierarchy qualification prompts",description:"A hierarchy qualification prompt allows users to filter data in a report or document based on the qualification of multiple attributes from the hierarchies. For example, you can determine a single hierarchy or list of hierarchies from which users can select attributes and make qualifications on these attributes to define their filters.",source:"@site/docs/common-workflows/analytics/use-prompts-objects/prompt-types/hierarchy-qualification-prompts.md",sourceDirName:"common-workflows/analytics/use-prompts-objects/prompt-types",slug:"/common-workflows/analytics/use-prompts-objects/prompt-types/hierarchy-qualification-prompts",permalink:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/hierarchy-qualification-prompts",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/use-prompts-objects/prompt-types/hierarchy-qualification-prompts.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1680880277,formattedLastUpdatedAt:"Apr 7, 2023",frontMatter:{title:"Hierarchy qualification prompts",description:"A hierarchy qualification prompt allows users to filter data in a report or document based on the qualification of multiple attributes from the hierarchies. For example, you can determine a single hierarchy or list of hierarchies from which users can select attributes and make qualifications on these attributes to define their filters."},sidebar:"tutorialSidebar",previous:{title:"Metric expression prompts",permalink:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/metric-expression-prompts"},next:{title:"Level prompts",permalink:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/level-prompts"}},c={},u=[{value:"Get information about a hierarchy qualification prompt",id:"get-information-about-a-hierarchy-qualification-prompt",level:2},{value:"Get the hierarchy qualification prompt&#39;s available objects",id:"get-the-hierarchy-qualification-prompts-available-objects",level:2},{value:"Get the attributes of a hierarchy",id:"get-the-attributes-of-a-hierarchy",level:2},{value:"Answer a hierarchy qualification prompt",id:"answer-a-hierarchy-qualification-prompt",level:2},{value:"Provide specific prompt answers",id:"provide-specific-prompt-answers",level:3}],h=(n="Available",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),d={toc:u};function f(e){var t=e.components,a=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(h,{since:"2021 Update 1",mdxType:"Available"}),(0,o.kt)("p",null,"A hierarchy qualification prompt allows users to filter data in a report or document based on the qualification of multiple attributes from the hierarchies. For example, you can determine a single hierarchy or list of hierarchies from which users can select attributes and make qualifications on these attributes to define their filters."),(0,o.kt)("p",null,"Use REST APIs to perform the following actions on hierarchy qualification prompts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#get-information-about-a-hierarchy-qualification-prompt"},"Get information about a hierarchy qualification prompt")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#get-the-hierarchy-qualification-prompts-available-objects"},"Get the hierarchy qualification prompt's available objects")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#get-the-attributes-of-a-hierarchy"},"Get the attributes of a hierarchy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#answer-a-hierarchy-qualification-prompt"},"Answer a hierarchy qualification prompt"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#provide-specific-prompt-answers"},"Provide specific prompt answers"))))),(0,o.kt)("h2",{id:"get-information-about-a-hierarchy-qualification-prompt"},"Get information about a hierarchy qualification prompt"),(0,o.kt)("p",null,"Use the following REST API endpoints to get information about hierarchy qualification prompts applied to dossier, document, and report objects in the metadata, as well as instances of those objects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/documents/{id}/prompts")),(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/documents/{id}/instances/{instanceId}/prompts")),(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/reports/{reportId}/prompts")),(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/reports/{reportId}/instances/{instanceId}/prompts"))),(0,o.kt)("p",null,"Provide the ID of the document, dossier, or report in the path of the request. In addition, you need to supply the instance ID if you are getting information about a prompt applied to an instance of a document, dossier, or report. The response contains the prompt information. All available parameters for the prompt definition are shown below."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"id"),(0,o.kt)("td",{parentName:"tr",align:null},"The ID of the prompt"),(0,o.kt)("td",{parentName:"tr",align:null},"string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"key"),(0,o.kt)("td",{parentName:"tr",align:null},"The unique key of the prompt. Including the key helps avoid issues when the same prompt is present multiple times on a dossier, document, or report."),(0,o.kt)("td",{parentName:"tr",align:null},"string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"name"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the prompt"),(0,o.kt)("td",{parentName:"tr",align:null},"string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"title"),(0,o.kt)("td",{parentName:"tr",align:null},"The title of the prompt"),(0,o.kt)("td",{parentName:"tr",align:null},"string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"type"),(0,o.kt)("td",{parentName:"tr",align:null},"The type of prompt; Enum: ","[ VALUE, ELEMENTS, EXPRESSION, OBJECTS, LEVEL ]"),(0,o.kt)("td",{parentName:"tr",align:null},"string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"required"),(0,o.kt)("td",{parentName:"tr",align:null},"An indicator that specifies if a prompt is required"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"closed"),(0,o.kt)("td",{parentName:"tr",align:null},"An indicator that specifies if a prompt is closed"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean")))),(0,o.kt)("p",null,"The sample code below contains a hierarchy qualification prompt definition."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "12FF3D5D43A6A17E8847FB9304FEA1E1@0@10",\n  "id": "12FF3D5D43A6A17E8847FB9304FEA1E1",\n  "name": "test prompt",\n  "title": "test prompt",\n  "type": "EXPRESSION",\n  "closed": false,\n  "required": true,\n  "max": 2,\n  "min": 1,\n  "displayForms": "all", // all|browseForms|reportDisplayForms|customForms\n  "maxElementsPerSelection": -1,\n  "defaultAnswer": {\n    "content": "Category ID In 1, 2, 3, 4, 5",\n    "xml": "<exp></exp>",\n    "expression": {\n      "operator": "In",\n      "operands": [\n        {\n          "type": "form",\n          "attribute": {\n            "id": "8D679D3711D3E4981000E787EC6DE8A4",\n            "name": "Category"\n          },\n          "form": {\n            "id": "45C11FA478E745FEA08D781CEA190FE5",\n            "name": "ID"\n          }\n        },\n        {\n          "type": "constants",\n          "dataType": "Real",\n          "values": ["1", "2", "3", "4", "5"]\n        }\n      ]\n    }\n  },\n  "answers": {\n    "content": "Category In List Books, Movies",\n    "xml": "<exp></exp>",\n    "expression": {\n      "operator": "In",\n      "operands": [\n        {\n          "type": "attribute",\n          "id": "8D679D3711D3E4981000E787EC6DE8A4",\n          "name": "Category"\n        },\n        {\n          "type": "elements",\n          "elements": [\n            {\n              "id": "h1;8D679D3711D3E4981000E787EC6DE8A4",\n              "name": "Books"\n            },\n            {\n              "id": "h2;8D679D3711D3E4981000E787EC6DE8A4",\n              "name": "Electronics"\n            }\n          ]\n        }\n      ]\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Besides the commonly-used fields, the hierarchy qualification prompt also contains the following field:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"maxElementsPerSelection")," The maximum number of elements that can be supplied to answer the prompt per selection. The default setting of ",(0,o.kt)("strong",{parentName:"p"},"-1")," means there is no limit to the maximum number of elements."),(0,o.kt)("h2",{id:"get-the-hierarchy-qualification-prompts-available-objects"},"Get the hierarchy qualification prompt's available objects"),(0,o.kt)("p",null,"Use the following REST API endpoints to get a hierarchy qualification prompt's available objects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/reports/{id}/instances/{instanceId}/prompts/{promptIdentifier}/objects")),(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/documents/{id}/instances/{instanceId}/prompts/{promptIdentifier}/objects"))),(0,o.kt)("p",null,"In a hierarchy qualification prompt, the available objects returned by this endpoint are hierarchies, which contain an ID and name. The hierarchy prompt provides the user with a list of available objects. These objects can come from three different sources:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Predefined list of objects"),(0,o.kt)("li",{parentName:"ul"},"Result of a search object"),(0,o.kt)("li",{parentName:"ul"},"List of all attributes and hierarchies")),(0,o.kt)("p",null,"The sample code below contains a hierarchy qualification prompt's available objects."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "objects": [\n    {\n      "id": "C11D3E4981000E8D679D3787EC6DE8A4",\n      "name": "Time",\n      "type": "HIERARCHY"\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"get-the-attributes-of-a-hierarchy"},"Get the attributes of a hierarchy"),(0,o.kt)("p",null,"After getting a hierarchy qualification prompt's available objects, the user may need to get the attributes of some hierarchies to construct their own view filter expression. Use the following REST API endpoints to retrieve the attributes of a hierarchy."),(0,o.kt)("p",null,"GET ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/hierarchies/{hierarchyId}/attributes")),(0,o.kt)("p",null,"The sample code below contains the definition of the attributes of a hierarchy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": [\n    {\n      "name": "Month",\n      "id": "8D679D4411D3E4981000E787EC6DE8A4",\n      "type": "attribute",\n      "forms": [\n        {\n          "id": "45C11FA478E745FEA08D781CEA190FE5",\n          "name": "ID"\n        },\n        {\n          "id": "CCFBE2A5EADB4F50941FB879CCF1721C",\n          "name": "DESC"\n        },\n        {\n          "id": "4B97DFC611D5AEDAC000E38A4CC5F24F",\n          "name": "DATE"\n        }\n      ]\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"answer-a-hierarchy-qualification-prompt"},"Answer a hierarchy qualification prompt"),(0,o.kt)("p",null,"Use the following REST API endpoints to answer a hierarchy qualification prompt applied to a dossier, document, or report:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PUT ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/reports/{id}/instances/{instanceId}/prompts/answers")),(0,o.kt)("li",{parentName:"ul"},"PUT ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/documents/{id}/instances/{instanceId}/prompts/answers"))),(0,o.kt)("h3",{id:"provide-specific-prompt-answers"},"Provide specific prompt answers"),(0,o.kt)("p",null,"You provide answers to a hierarchy qualification prompt in the body parameter of the request. Identify the prompt by providing the prompt ID, name or key, and specify the prompt type as EXPRESSION. Then, specify the expression used to answer the prompt. The format of the expression is the same as the ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/"},"JSON Data API's view filter"),". This expression can be used with attribute elements."),(0,o.kt)("p",null,"All available parameters for the prompt answer are shown below."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"key"),(0,o.kt)("td",{parentName:"tr",align:null},"The unique key of the prompt. Including the key helps avoid issues when the same prompt is present multiple times on a dossier, document, or report."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"id"),(0,o.kt)("td",{parentName:"tr",align:null},"The object ID of the prompt"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"name"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the prompt"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"type"),(0,o.kt)("td",{parentName:"tr",align:null},"The type of prompt; Enum: ","[ VALUE, ELEMENTS, EXPRESSION, OBJECTS, LEVEL ]"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"useDefault"),(0,o.kt)("td",{parentName:"tr",align:null},"An indicator that specifies if the default answer should be used. If this is set to true, the values are ignored."),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("p",null,"The sample code below answers an attribute qualification prompt."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "prompts": [\n    {\n      "key": "12FF3D5D43A6A17E8847FB9304FEA1E1@0@10",\n      "id": "12FF3D5D43A6A17E8847FB9304FEA1E1",\n      "name": "test prompt",\n      "type": "EXPRESSION",\n      "answers": {\n        "content": "Category In List 1, 2, 3, 4, 5",\n        "expression": {\n          "operator": "In",\n          "operands": [\n            {\n              "type": "form",\n              "attribute": {\n                "id": "8D679D3711D3E4981000E787EC6DE8A4",\n                "name": "Category"\n              },\n              "form": {\n                "id": "45C11FA478E745FEA08D781CEA190FE5",\n                "name": "ID"\n              }\n            },\n            {\n              "type": "constants",\n              "dataType": "Real",\n              "values": ["1", "2", "3", "4", "5"]\n            }\n          ]\n        }\n      }\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Some things to keep in mind:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You only need to provide one ",(0,o.kt)("strong",{parentName:"li"},"id"),", ",(0,o.kt)("strong",{parentName:"li"},"key"),", or ",(0,o.kt)("strong",{parentName:"li"},"name"),". ",(0,o.kt)("strong",{parentName:"li"},"Key")," is preferred."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"useDefault")," field is optional, since the default value is false."),(0,o.kt)("li",{parentName:"ul"},"Content in the answer is optional. Its values do not affect the resulting answer. The default value is ",(0,o.kt)("strong",{parentName:"li"},'""'),".")))}f.isMDXComponent=!0}}]);