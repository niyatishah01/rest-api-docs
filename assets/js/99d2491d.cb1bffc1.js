"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3397],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(n),c=r,f=d["".concat(l,".").concat(c)]||d[c]||u[c]||o;return n?a.createElement(f,p(p({ref:t},s),{},{components:n})):a.createElement(f,p({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var m=2;m<o;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12050:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a,r=n(83117),o=n(80102),p=(n(67294),n(3905)),i=["components"],l={title:"Attribute element prompts",description:"The attribute element prompt is one of the most commonly used prompt types. It allows the caller to provide a list of attribute elements from which a selection is made. For example, you can define a prompt as - 'Choose from a list of elements in Month'."},m=void 0,s={unversionedId:"common-workflows/analytics/use-prompts-objects/prompt-types/attribute-element-prompts",id:"common-workflows/analytics/use-prompts-objects/prompt-types/attribute-element-prompts",title:"Attribute element prompts",description:"The attribute element prompt is one of the most commonly used prompt types. It allows the caller to provide a list of attribute elements from which a selection is made. For example, you can define a prompt as - 'Choose from a list of elements in Month'.",source:"@site/docs/common-workflows/analytics/use-prompts-objects/prompt-types/attribute-element-prompts.md",sourceDirName:"common-workflows/analytics/use-prompts-objects/prompt-types",slug:"/common-workflows/analytics/use-prompts-objects/prompt-types/attribute-element-prompts",permalink:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/attribute-element-prompts",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/use-prompts-objects/prompt-types/attribute-element-prompts.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1677861063,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{title:"Attribute element prompts",description:"The attribute element prompt is one of the most commonly used prompt types. It allows the caller to provide a list of attribute elements from which a selection is made. For example, you can define a prompt as - 'Choose from a list of elements in Month'."},sidebar:"tutorialSidebar",previous:{title:"Prompt types",permalink:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/"},next:{title:"Attribute qualification prompts",permalink:"/rest-api-docs/common-workflows/analytics/use-prompts-objects/prompt-types/attribute-qualification-prompts"}},u={},d=[{value:"Obtain elements for answering attribute element prompts",id:"obtain-elements-for-answering-attribute-element-prompts",level:2},{value:"Answer an attribute element prompt",id:"answer-an-attribute-element-prompt",level:2},{value:"Provide specific prompt answers",id:"provide-specific-prompt-answers",level:3},{value:"Get information about an attribute element prompt",id:"get-information-about-an-attribute-element-prompt",level:2},{value:"Attribute element prompt definition",id:"attribute-element-prompt-definition",level:2}],c=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,p.kt)("div",e)}),f={toc:d};function k(e){var t=e.components,a=(0,o.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)(c,{since:"2021 Update 1",mdxType:"Available"}),(0,p.kt)("admonition",{type:"tip"},(0,p.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,p.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-5eeb2bce-6951-41c6-aba0-97565505eaa5?ctx=documentation"},"REST API Playground"),"."),(0,p.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,p.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,p.kt)("p",null,"The attribute element prompt is one of the most commonly used prompt types. It allows the caller to provide a list of attribute elements from which a selection is made. For example, you can define a prompt as: 'Choose from a list of elements in Month'."),(0,p.kt)("p",null,"You can use REST APIs to perform the following action on attribute element prompts:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#obtain-elements-for-answering-attribute-element-prompts"},"Obtain elements for answering attribute element prompts")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#answer-an-attribute-element-prompt"},"Answer an attribute element prompt"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#provide-specific-prompt-answers"},"Provide specific prompt answers")))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#get-information-about-an-attribute-element-prompt"},"Get information about an attribute element prompt")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#attribute-element-prompt-definition"},"Attribute element prompt definition"))),(0,p.kt)("h2",{id:"obtain-elements-for-answering-attribute-element-prompts"},"Obtain elements for answering attribute element prompts"),(0,p.kt)("p",null,"To answer an attribute element prompt, the user must know which attribute elements can be supplied as an answer. Use the following REST APIs to obtain this list of elements."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"GET ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/reports/{id}/instances/{instanceId}/prompts/{promptIdentifier}/elements"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"GET ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/documents/{id}/instances/{instanceId}/prompts/{promptIdentifier}/elements")))),(0,p.kt)("p",null,"The response can change based on the request parameters provided by the caller. Use the following parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Location"),(0,p.kt)("th",{parentName:"tr",align:null},"Name"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"header"),(0,p.kt)("td",{parentName:"tr",align:null},"x-mstr-authToken"),(0,p.kt)("td",{parentName:"tr",align:null},"The authorization token")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"header"),(0,p.kt)("td",{parentName:"tr",align:null},"x-mstr-projectID"),(0,p.kt)("td",{parentName:"tr",align:null},"The ID of the project")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"path"),(0,p.kt)("td",{parentName:"tr",align:null},"reportId or dossierId"),(0,p.kt)("td",{parentName:"tr",align:null},"The ID of the report or dossier")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"path"),(0,p.kt)("td",{parentName:"tr",align:null},"instanceId"),(0,p.kt)("td",{parentName:"tr",align:null},"The instance ID of the report or dossier")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"path"),(0,p.kt)("td",{parentName:"tr",align:null},"promptIdentifier"),(0,p.kt)("td",{parentName:"tr",align:null},"The key or ID of the prompt. Either one can be used to identify the prompt. Only the key is unique, since some prompts can be present multiple times in the dataset. Both of these fields can be obtained from the ",(0,p.kt)("inlineCode",{parentName:"td"},"GET /api/prompts")," API call.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"query"),(0,p.kt)("td",{parentName:"tr",align:null},"offset"),(0,p.kt)("td",{parentName:"tr",align:null},"The starting point with the collection of returned results. The default is zero.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"query"),(0,p.kt)("td",{parentName:"tr",align:null},"limit"),(0,p.kt)("td",{parentName:"tr",align:null},"The maximum number of items returned for a single request. The default value is 100. The maximum value is 200.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"query"),(0,p.kt)("td",{parentName:"tr",align:null},"searchPattern"),(0,p.kt)("td",{parentName:"tr",align:null},"The search pattern")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null})))),(0,p.kt)("p",null,"Sample code for obtaining the available attribute elements is provided below:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "elements": [\n    {\n      "id": "h7796;8D679D3C11D3E4981000E787EC6DE8A4",\n      "name": "Aaby:Alen"\n    },\n    {\n      "id": "h1874;8D679D3C11D3E4981000E787EC6DE8A4",\n      "name": "Aadland:Miko"\n    },\n    {\n      "id": "h1874;8D679D3C11D3E4981000E787EC6DE8A4:3771",\n      "name": "Aadland:Warner"\n    }\n  ]\n}\n')),(0,p.kt)("h2",{id:"answer-an-attribute-element-prompt"},"Answer an attribute element prompt"),(0,p.kt)("p",null,"You use the following REST API endpoints to answer an attribute element prompt applied to a dossier, document, or report:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"PUT ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/documents/{id}/instances/{instanceId}/prompts/answers"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"PUT ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/reports/{reportId}/instances/{instanceId}/prompts/answers")))),(0,p.kt)("h3",{id:"provide-specific-prompt-answers"},"Provide specific prompt answers"),(0,p.kt)("p",null,'You provide answers to an attribute element prompt in the body parameter of the request. You identify the prompt by providing the prompt ID, name or key; you specify the prompt type as "ELEMENTS". You specify the attribute element used to answer the prompt by providing either the full attribute element ID or the attribute element name.'),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"Prompt Answer Model",src:n(16582).Z,width:"336",height:"474"})),(0,p.kt)("p",null,"Sample code for answering an attribute element prompt is provided below:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "prompts": [\n    {\n      "key": "76B7EBEE487913EF5C0A21975B577733@0@10",\n      "name": "Elements of Category",\n      "type": "ELEMENTS",\n      "answers": [\n        {\n          "id": "h1;8D679D3711D3E4981000E787EC6DE8A4",\n          "name": "Books"\n        }\n      ]\n    }\n  ]\n}\n')),(0,p.kt)("h2",{id:"get-information-about-an-attribute-element-prompt"},"Get information about an attribute element prompt"),(0,p.kt)("p",null,"You use the following REST API endpoints to get information about attribute element prompts applied to dossier, document, and report objects in the metadata, as well as instances of those objects:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"GET ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/documents/{id}/prompts"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"GET ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/documents/{id}/instances/{instanceId}/prompts"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"GET ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/reports/{reportId}/prompts"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"GET ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/reports/{reportId}/instances/{instanceId}/prompts")))),(0,p.kt)("p",null,"You provide the ID of the document, dossier, or report in the path of the request, as well as the instance ID if you are getting information about a prompt applied to an instance of a document, dossier, or report. The response contains the prompt information."),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"Prompt Answer Model Response",src:n(5899).Z,width:"1218",height:"316"})),(0,p.kt)("h2",{id:"attribute-element-prompt-definition"},"Attribute element prompt definition"),(0,p.kt)("p",null,"The model for the definition of an attribute element prompt can be represented with the following fields:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"id")," GUID of the prompt.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"name")," Name of the prompt. This is the most user-friendly value that can be used to identify the prompt.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"key")," Unique identifier of the prompt. It is important to use this to identify the prompt if the same prompt is used more than once in the report, document or dossier.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"title")," Title of the prompt.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"required")," Specifies whether this prompt is required or optional.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"type"),' Prompt type. For attribute element prompts, the value is "ELEMENTS".')),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"min")," The minimum number of values that must be supplied to answer the prompt.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"max")," The maximum number of values that can be supplied to answer the prompt.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"source")),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"name")," Name of the attribute that provides the elements that prompt answers are selected from.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"id")," GUID of the attribute that provides the elements that prompt answers are selected from.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"type"),' Integer value for the object ID. The value of the object ID for an attribute is "12".')))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"defaultAnswer")),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"id")," Identifier of the default prompt answer, in the format AttributeID:ElementID.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"name")," Name of the default prompt answer, in the format AttributeID:ElementID.")))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"answers")),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"id")," Identifier of the prompt answer to be used, in the format AttributeID:ElementID. This is the full attribute element ID.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"name")," Name of the prompt answer to be used. This is the attribute element name."))))),(0,p.kt)("p",null,"Sample JSON code for an attribute element prompt definition is provided below:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "0E6BAF5211EB0899810D0080EF25B228",\n    "key": "0E6BAF5211EB0899810D0080EF25B228@0@10",\n    "name": "Elements of Month",\n    "title": "Month",\n    "type": "ELEMENTS",\n    "required": false,\n    "closed": false,\n    "source": {\n      "name": "Month",\n      "id": "415C548749D69B14A728D0B1EF04E29E",\n      "type": 12\n    },\n    "defaultAnswer": [\n      {\n        "id": "h201411;415C548749D69B14A728D0B1EF04E29E",\n        "name": "November"\n      },\n      {\n        "id": "h201412;415C548749D69B14A728D0B1EF04E29E",\n        "name": "December"\n      }\n    ],\n    "answers": [\n      {\n        "id": "h201411;415C548749D69B14A728D0B1EF04E29E",\n        "name": "November"\n      },\n      {\n        "id": "h201412;415C548749D69B14A728D0B1EF04E29E",\n        "name": "December"\n      }\n    ]\n  }\n]\n')))}k.isMDXComponent=!0},16582:function(e,t,n){t.Z=n.p+"assets/images/swagger_promptAnswerModel-c7ad8ba8d412aab7837a477e460d8a31.png"},5899:function(e,t,n){t.Z=n.p+"assets/images/swagger_promptAnswerModel_response-93a77f14c2ae9b378ff4d4f556f3acb7.png"}}]);