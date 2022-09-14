"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[8349],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),c=s(n),d=r,f=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return n?a.createElement(f,o(o({ref:e},m),{},{components:n})):a.createElement(f,o({ref:e},m))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9083:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],l={title:"Attribute Qualification Prompts",description:"The attribute qualification prompt is a restrictive type prompt that allows you to filter the data of a report or document based on the qualification of multiple attributes. For example, you determine a single attribute or a list of attributes from which each user that executes the report can select elements to define their report filter."},p=void 0,s={unversionedId:"common-workflows/use-prompts-objects/prompt-types/attribute-qualification-prompts",id:"common-workflows/use-prompts-objects/prompt-types/attribute-qualification-prompts",title:"Attribute Qualification Prompts",description:"The attribute qualification prompt is a restrictive type prompt that allows you to filter the data of a report or document based on the qualification of multiple attributes. For example, you determine a single attribute or a list of attributes from which each user that executes the report can select elements to define their report filter.",source:"@site/docs/common-workflows/use-prompts-objects/prompt-types/attribute-qualification-prompts.md",sourceDirName:"common-workflows/use-prompts-objects/prompt-types",slug:"/common-workflows/use-prompts-objects/prompt-types/attribute-qualification-prompts",permalink:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/attribute-qualification-prompts",draft:!1,editUrl:"https://github.com/MicroStrategy/restapi-docs/tree/main/docs/common-workflows/use-prompts-objects/prompt-types/attribute-qualification-prompts.md",tags:[],version:"current",lastUpdatedBy:"Liang, Jiapei",lastUpdatedAt:1663187922,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"Attribute Qualification Prompts",description:"The attribute qualification prompt is a restrictive type prompt that allows you to filter the data of a report or document based on the qualification of multiple attributes. For example, you determine a single attribute or a list of attributes from which each user that executes the report can select elements to define their report filter."},sidebar:"tutorialSidebar",previous:{title:"Attribute Element Prompts",permalink:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/attribute-element-prompts"},next:{title:"Object Prompts",permalink:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/object-prompts"}},m={},u=[{value:"Get Information About an Attribute Qualification Prompt",id:"get-information-about-an-attribute-qualification-prompt",level:2},{value:"Get the Attribute Qualification Prompt&#39;s Available Objects",id:"get-the-attribute-qualification-prompts-available-objects",level:2},{value:"Get the Elements of an Attribute",id:"get-the-elements-of-an-attribute",level:2},{value:"Answer an Attribute Qualification Prompt",id:"answer-an-attribute-qualification-prompt",level:2},{value:"Provide Specific Prompt Answers",id:"provide-specific-prompt-answers",level:3}],c={toc:u};function d(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-6fe150ae-169d-441e-8d1d-311c78db3663?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"The attribute qualification prompt is a restrictive type prompt that allows you to filter the data of a report or document based on the qualification of multiple attributes. For example, you determine a single attribute or a list of attributes from which each user that executes the report can select elements to define their report filter."),(0,i.kt)("p",null,"You can use REST APIs to perform the following actions on attribute qualification prompts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#get-information-about-an-attribute-qualification-prompt"},"Get Information About an Attribute Qualification Prompt")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#get-the-attribute-qualification-prompts-available-objects"},"Get the Attribute Qualification Prompt's Available Objects")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#get-the-elements-of-an-attribute"},"Get the Elements of an Attribute")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#answer-an-attribute-qualification-prompt"},"Answer an Attribute Qualification Prompt"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#provide-specific-prompt-answers"},"Provide Specific Prompt Answers"))))),(0,i.kt)("h2",{id:"get-information-about-an-attribute-qualification-prompt"},"Get Information About an Attribute Qualification Prompt"),(0,i.kt)("p",null,"Use the following REST API endpoints to get information about attribute qualification prompts applied to dossier, document, and report objects in the metadata, as well as instance of those objects:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"/documents/{id}/prompts")),(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"/documents/{id}/instances/{instanceId}/prompts")),(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"/reports/{reportId}/prompts")),(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"/reports/{reportId}/instances/{instanceId}/prompts"))),(0,i.kt)("p",null,"Provide the ID of the document, dossier, or report in the path of the request. You also need to provide the instance ID if you are getting information about a prompt applied to an instance of a document, dossier, or report. The response contains the prompt information. All available parameters for the prompt definition are shown below."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"The ID of the prompt"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"key"),(0,i.kt)("td",{parentName:"tr",align:null},"The unique key of the prompt. Including the key helps avoid issues when the same prompt is present multiple times on a dossier, document, or report."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the prompt"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"title"),(0,i.kt)("td",{parentName:"tr",align:null},"The title of the prompt"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"type"),(0,i.kt)("td",{parentName:"tr",align:null},"The type of prompt; Enum: ","[ VALUE, ELEMENTS, EXPRESSION, OBJECTS, LEVEL ]"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"An indicator that specifies if a prompt is required"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"closed"),(0,i.kt)("td",{parentName:"tr",align:null},"An indicator that specifies if a prompt is closed"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,"The sample code below contains an attribute qualification prompt definition."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "key": "12FF3D5D43A6A17E8847FB9304FEA1E1@0@10",\n    "id": "12FF3D5D43A6A17E8847FB9304FEA1E1",\n    "name": "test prompt",\n    "title": "test prompt",\n    "type": "EXPRESSION",\n    "required": true,\n    "closed": false\n    "max": 2,\n    "min": 1,\n    "maxElementsPerSelection": -1,\n    "defaultAnswer": {\n        "content": "Category ID In 1, 2, 3, 4, 5",\n        "xml": "<exp></exp>",\n        "expression": {\n            "operator": "In",\n            "operands": [\n              {\n                "type": "form",\n                "attribute":{\n                  "id": "8D679D3711D3E4981000E787EC6DE8A4",\n                  "name": "Category"\n                },\n                "form": {\n                  "id": "45C11FA478E745FEA08D781CEA190FE5",\n                  "name": "ID"\n                }\n              },\n              {\n                "type": "constants",\n                "dataType": "Real",\n                "values": ["1", "2", "3", "4", "5"]\n              }\n           ]\n        }\n    },\n    "answers": {\n        "content": "Category In List Books, Movies",\n        "xml": "<exp></exp>",\n        "expression": {\n            "operator": "In",\n            "operands": [\n              {\n                "type": "attribute",\n                "id": "8D679D3711D3E4981000E787EC6DE8A4",\n                "name": "Category"\n              },\n              {\n                "type": "elements",\n                "elements": [\n                  {\n                    "id": "h1;8D679D3711D3E4981000E787EC6DE8A4",\n                    "name": "Books"\n                  },\n                  {\n                    "id": "h2;8D679D3711D3E4981000E787EC6DE8A4",\n                    "name": "Electronics"\n                  }\n                ]\n              }\n           ]\n        }\n    }\n}\n')),(0,i.kt)("p",null,"Besides the commonly-used fields, the attribute qualification prompt also contains the following field:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"maxElementsPerSelection")," The maximum number of elements that can be supplied to answer the prompt per selection. The default setting of ",(0,i.kt)("strong",{parentName:"p"},"-1")," means there is no limit to the maximum number of elements."),(0,i.kt)("h2",{id:"get-the-attribute-qualification-prompts-available-objects"},"Get the Attribute Qualification Prompt's Available Objects"),(0,i.kt)("p",null,"Use the following REST API endpoints to get an attribute qualification prompt's available answer:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"/reports/{id}/instances/{instanceId}/prompts/{promptIdentifier}/objects")),(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"/documents/{id}/instances/{instanceId}/prompts/{promptIdentifier}/objects"))),(0,i.kt)("p",null,"In an attribute qualification prompt, the available objects returned by this endpoint, as well as the objects used to answer the prompt, are attributes that contain the attribute ID/name and its form ID/name. The level prompt provides the user with a list of available answers. These answers can come from three different sources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Specified attribute"),(0,i.kt)("li",{parentName:"ul"},"Result of a search object"),(0,i.kt)("li",{parentName:"ul"},"Predefined list of objects")),(0,i.kt)("p",null,"The sample code below contains an attribute qualification prompt's available answer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "C11D3E4981000E8D679D3787EC6DE8A4",\n    "name": "Day",\n    "type": "attribute",\n    "forms": [\n      {\n        "id": "4C05177011D3E877C000B3B2D86C964F",\n        "name": "ID"\n      }\n    ]\n  }\n]\n')),(0,i.kt)("h2",{id:"get-the-elements-of-an-attribute"},"Get the Elements of an Attribute"),(0,i.kt)("p",null,"After getting an attribute qualification prompt's available objects, the user may need to get the elements of some attributes to construct their own view filter expression. Use the following REST API endpoints to retrieve the elements of an attribute:"),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/{reportId}/instances/{instanceId}/attributes/{attributeId}/elements")),(0,i.kt)("p",null,"The sample code below contains the definition of the elements of an attribute."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "2014",\n    "id": "h2014;;2014"\n  },\n  {\n    "name": "2015",\n    "id": "h2015;;2015"\n  }\n]\n')),(0,i.kt)("h2",{id:"answer-an-attribute-qualification-prompt"},"Answer an Attribute Qualification Prompt"),(0,i.kt)("p",null,"Use the following REST API endpoints to answer an attribute qualification prompt applied to a dossier, document, or report:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PUT ",(0,i.kt)("inlineCode",{parentName:"li"},"/reports/{id}/instances/{instanceId}/prompts/answers")),(0,i.kt)("li",{parentName:"ul"},"PUT ",(0,i.kt)("inlineCode",{parentName:"li"},"/documents/{id}/instances/{instanceId}/prompts/answers"))),(0,i.kt)("h3",{id:"provide-specific-prompt-answers"},"Provide Specific Prompt Answers"),(0,i.kt)("p",null,"You provide answers to an attribute qualification prompt in the body parameter of the request. Identify the prompt by providing the prompt ID, name or key, and specify the prompt type as EXPRESSION. Then, specify the expression used to answer the prompt. The format of the expression is the same as the ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/"},"JSON Data API's view filter"),". This expression can be used with attribute elements."),(0,i.kt)("p",null,"All available parameters for the prompt answer are shown below."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"key"),(0,i.kt)("td",{parentName:"tr",align:null},"The unique key of the prompt. Including the key helps avoid issues when the same prompt is present multiple times on a dossier, document, or report."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"The object ID of the prompt"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the prompt"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"type"),(0,i.kt)("td",{parentName:"tr",align:null},"The type of prompt; Enum: ","[ VALUE, ELEMENTS, EXPRESSION, OBJECTS, LEVEL ]"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"useDefault"),(0,i.kt)("td",{parentName:"tr",align:null},"An indicator that specifies if the default answer should be used. If this is set to true, the values are ignored."),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,"The sample code below answers an attribute qualification prompt."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "prompts":[{\n    "key": "12FF3D5D43A6A17E8847FB9304FEA1E1@0@10",\n    "id": "12FF3D5D43A6A17E8847FB9304FEA1E1",\n    "name": "test prompt",\n    "type": "EXPRESSION",\n    "answers": {\n        "content": "Category In List 1, 2, 3, 4, 5",\n        "expression": {\n            "operator": "In",\n            "operands": [\n              {\n                "type": "form",\n                "attribute":{\n                  "id": "8D679D3711D3E4981000E787EC6DE8A4",\n                  "name": "Category"\n                },\n                "form": {\n                  "id": "45C11FA478E745FEA08D781CEA190FE5",\n                  "name": "ID"\n                }\n              },\n              {\n                "type": "constants",\n                "dataType": "Real",\n                "values": ["1", "2", "3", "4", "5"]\n              }\n           ]\n        }\n    },\n')),(0,i.kt)("p",null,"Some things to keep in mind:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You only need to provide one ",(0,i.kt)("strong",{parentName:"li"},"id"),", ",(0,i.kt)("strong",{parentName:"li"},"key"),", or ",(0,i.kt)("strong",{parentName:"li"},"name"),". ",(0,i.kt)("strong",{parentName:"li"},"Key")," is preferred."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"useDefault")," field is optional, since the default value is false."),(0,i.kt)("li",{parentName:"ul"},"Content in the answer is optional. Its values do not affect the resulting answer. The default value is ",(0,i.kt)("strong",{parentName:"li"},'""'),".")))}d.isMDXComponent=!0}}]);