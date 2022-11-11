"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3475],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,k=c["".concat(l,".").concat(u)]||c[u]||d[u]||o;return n?r.createElement(k,p(p({ref:t},m),{},{components:n})):r.createElement(k,p({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9385:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),p=["components"],i={title:"Object prompts",description:"An object prompt allows the caller to supply a list of objects, such as attributes, metrics, hierarchies, and so on from which a selection is made."},l=void 0,s={unversionedId:"common-workflows/use-prompts-objects/prompt-types/object-prompts",id:"common-workflows/use-prompts-objects/prompt-types/object-prompts",title:"Object prompts",description:"An object prompt allows the caller to supply a list of objects, such as attributes, metrics, hierarchies, and so on from which a selection is made.",source:"@site/docs/common-workflows/use-prompts-objects/prompt-types/object-prompts.md",sourceDirName:"common-workflows/use-prompts-objects/prompt-types",slug:"/common-workflows/use-prompts-objects/prompt-types/object-prompts",permalink:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/object-prompts",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/use-prompts-objects/prompt-types/object-prompts.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1668189866,formattedLastUpdatedAt:"Nov 11, 2022",frontMatter:{title:"Object prompts",description:"An object prompt allows the caller to supply a list of objects, such as attributes, metrics, hierarchies, and so on from which a selection is made."},sidebar:"tutorialSidebar",previous:{title:"Attribute qualification prompts",permalink:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/attribute-qualification-prompts"},next:{title:"Value prompts",permalink:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/value-prompts"}},m={},d=[{value:"Workflow for object prompts",id:"workflow-for-object-prompts",level:2},{value:"Obtain elements for answering object prompts",id:"obtain-elements-for-answering-object-prompts",level:2},{value:"Answer an object prompt",id:"answer-an-object-prompt",level:2},{value:"Provide specific prompt answers",id:"provide-specific-prompt-answers",level:3},{value:"Get information about an object prompt",id:"get-information-about-an-object-prompt",level:3},{value:"Object prompt definition",id:"object-prompt-definition",level:3},{value:"Possible prompt execution errors for object prompts",id:"possible-prompt-execution-errors-for-object-prompts",level:3}],c={toc:d};function u(e){var t=e.components,i=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-763d27e2-3d03-47ab-9e7b-6b3b4db736b4?ctx=documentation"},"REST API Playground"),"."),(0,o.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,o.kt)("p",null,"An object prompt allows the caller to supply a list of objects, such as attributes, metrics, hierarchies, and so on from which a selection is made."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#workflow-for-object-prompts"},"Workflow for object prompts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#obtain-elements-for-answering-object-prompts"},"Obtain elements for answering object prompts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#answer-an-object-prompt"},"Answer an object prompt"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#provide-specific-prompt-answers"},"Provide specific prompt answers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#get-information-about-an-object-prompt"},"Get information about an object prompt")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#object-prompt-definition"},"Object prompt definition")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#possible-prompt-execution-errors-for-object-prompts"},"Possible prompt execution errors for object prompts"))))),(0,o.kt)("h2",{id:"workflow-for-object-prompts"},"Workflow for object prompts"),(0,o.kt)("p",null,"Here is a workflow sample for using REST APIs to execute object prompts:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The user authenticates into the environment using the following endpoint and standard authentication:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"POST ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/auth/login")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the following endpoints to create a report or dossier/document instance:"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"POST ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/reports/{reportId}/instances")),(0,o.kt)("li",{parentName:"ul"},"POST ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/documents/{id}/instances"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the following endpoints to get the collection of prompts and their respective definitions from a report, document, or dossier:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/reports/{reportId}/prompts")),(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/reports/{reportId}/instances/{instanceId}/prompts")),(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/documents/{id}/prompts")),(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/documents/{id}/instances/{instanceId}/prompts")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the following endpoints to get an available list of objects for answering the prompts for a report, document, or dossier instance:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/reports/{reportId}/instances/{instanceId}/prompts/{promptIdentifier}/objects")),(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/documents/{id}/instances/{instanceId}/prompts/{promptIdentifier}/objects")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the following endpoints to answer a prompt applied to a dossier, document, or report instance:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"PUT ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/reports/{reportId}/instances/{instanceId}/prompts/answers")),(0,o.kt)("li",{parentName:"ul"},"POST ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/documents/{id}/instances/{instanceId}/prompts/answers")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the following endpoints to answer specified prompts on the document, dossier, or report instance:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"PUT ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/reports/{reportId}/instances/{instanceId}/prompts/answers")),(0,o.kt)("li",{parentName:"ul"},"PUT ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/documents/{id}/instances/{instanceId}/prompts/answers")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Get the result of a report instance. Use the following API endpoints to get report data after applying a prompt on top of the report instance:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/reports/{reportId}/instances/{instancesId}")),(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/dossiers/{dossierId}/instances/{dossierInstanceId}"))))),(0,o.kt)("h2",{id:"obtain-elements-for-answering-object-prompts"},"Obtain elements for answering object prompts"),(0,o.kt)("p",null,"To answer an object prompt, the user needs to know which object can be supplied as the answer. The following REST APIs can be used to obtain this list of objects."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/reports/{reportId}/instances/{instanceId}/prompts/{promptIdentifier}/objects")),(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/documents/{id}/instances/{instanceId}/prompts/{promptIdentifier}/objects"))),(0,o.kt)("p",null,"The response changes based on the request parameters provided by the caller. All available parameters are shown below."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Location"),(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"header"),(0,o.kt)("td",{parentName:"tr",align:null},"X-MSTR-AuthToken"),(0,o.kt)("td",{parentName:"tr",align:null},"The authorization token"),(0,o.kt)("td",{parentName:"tr",align:null},"string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"header"),(0,o.kt)("td",{parentName:"tr",align:null},"X-MSTR-ProjectID"),(0,o.kt)("td",{parentName:"tr",align:null},"The ID of the project"),(0,o.kt)("td",{parentName:"tr",align:null},"string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"path"),(0,o.kt)("td",{parentName:"tr",align:null},"reportId"),(0,o.kt)("td",{parentName:"tr",align:null},"The ID of the report"),(0,o.kt)("td",{parentName:"tr",align:null},"string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"path"),(0,o.kt)("td",{parentName:"tr",align:null},"instanceId"),(0,o.kt)("td",{parentName:"tr",align:null},"The instance ID of the report"),(0,o.kt)("td",{parentName:"tr",align:null},"string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"path"),(0,o.kt)("td",{parentName:"tr",align:null},"promptIdentifier"),(0,o.kt)("td",{parentName:"tr",align:null},"The key or ID of the prompt. Either one can be used to identify the prompt. Only the key is unique, since some prompts can be present multiple times in the dataset. Both of these fields can be obtained from the ",(0,o.kt)("inlineCode",{parentName:"td"},"GET /api/prompts")," API call."),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"query"),(0,o.kt)("td",{parentName:"tr",align:null},"fields"),(0,o.kt)("td",{parentName:"tr",align:null},"Comma-separated top-level field white list. This allows the client to selectively retrieve part of the response model. If specified, extra filtering is applied and the top-level object (If the root model is an array, each array element), only the listed fields are kept in the response. For example, id,elements means to keep only the id field and the whole elements array field, omitting all other fields of the top-level response model."),(0,o.kt)("td",{parentName:"tr",align:null},"string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"query"),(0,o.kt)("td",{parentName:"tr",align:null},"offset"),(0,o.kt)("td",{parentName:"tr",align:null},"The starting point within the collection of returned results. Used to control paging behavior. The default is zero."),(0,o.kt)("td",{parentName:"tr",align:null},"integer")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"query"),(0,o.kt)("td",{parentName:"tr",align:null},"limit"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum number of items returned for a single request. The default value is 100. The maximum value is 200."),(0,o.kt)("td",{parentName:"tr",align:null},"integer")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"query"),(0,o.kt)("td",{parentName:"tr",align:null},"searchPattern"),(0,o.kt)("td",{parentName:"tr",align:null},"The search pattern"),(0,o.kt)("td",{parentName:"tr",align:null},"string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h2",{id:"answer-an-object-prompt"},"Answer an object prompt"),(0,o.kt)("p",null,"You use the following REST API endpoints to answer an object prompt applied to a dossier, document, or report:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PUT ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/documents/{id}/instances/{instanceId}/prompts/answers")),(0,o.kt)("li",{parentName:"ul"},"PUT ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/reports/{reportId}/instances/{instanceId}/prompts/answers"))),(0,o.kt)("h3",{id:"provide-specific-prompt-answers"},"Provide specific prompt answers"),(0,o.kt)("p",null,'You provide answers to an object prompt in the body parameter of the request. You identify the prompt by providing the prompt ID or key; you specify the prompt type as "OBJECTS". You specify the object used to answer the prompt by providing the object GUID and the object type; the value of the object type depends on the kind of object used by the prompt.'),(0,o.kt)("p",null,"Object prompts cannot be identified by name because names are not unique in the metadata."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"swagger_promptAnswerModel",src:n(6582).Z,width:"336",height:"474"})),(0,o.kt)("p",null,"Sample code for answering multiple object prompts in a single request is provided below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "prompts": [\n    {\n      "key": "753C65EB402C44D3A991F285D3CB7F6D@0@10",\n      "type": "OBJECTS",\n      "answers": [\n        {\n          "id": "8D679D5111D3E4981000E787EC6DE8A4",\n          "type": "attribute"\n        },\n        {\n          "id": "8D679D4A11D3E4981000E787EC6DE8A4",\n          "type": "attribute"\n        }\n      ]\n    },\n    {\n      "key": "07736087478D24656A2A65820F968661@0@10",\n      "type": "OBJECTS",\n      "answers": [\n        {\n          "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n          "type": "metric"\n        },\n        {\n          "id": "4C051DB611D3E877C000B3B2D86C964F",\n          "type": "metric"\n        }\n      ]\n    }\n  ]\n}\n')),(0,o.kt)("h3",{id:"get-information-about-an-object-prompt"},"Get information about an object prompt"),(0,o.kt)("p",null,"You use the following REST API endpoints to get information about object prompts applied to dossier, document, and report objects in the metadata, as well as instances of those objects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"GET ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/documents/{id}/prompts"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"GET ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/documents/{id}/instances/{instanceId}/prompts"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"GET ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/reports/{reportId}/prompts"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"GET ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/reports/{reportId}/instances/{instanceId}/prompts")))),(0,o.kt)("p",null,"You provide the ID of the document, dossier, or report in the path of the request, as well as the instance ID if you are getting information about a prompt applied to an instance of a document, dossier, or report. The response contains the prompt information."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"swagger_promptAnswerModel_response",src:n(5899).Z,width:"1218",height:"316"})),(0,o.kt)("h3",{id:"object-prompt-definition"},"Object prompt definition"),(0,o.kt)("p",null,"The model for the definition of an object prompt can be represented with the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"id")," GUID of the prompt.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"name")," Name of the prompt. This is the most user-friendly value that can be used to identify the prompt.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"key")," Unique identifier of the prompt. It is important to use this to identify the prompt if the same prompt is used more than once in the report, document or dossier.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"title")," Title of the prompt.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"required")," Specifies whether this prompt is required or optional.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"type"),' Prompt type. For object prompts, the value is "OBJECTS".')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"min")," The minimum number of values that must be supplied to answer the prompt.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"max")," The maximum number of values that can be supplied to answer the prompt.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"defaultAnswer")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"id")," Object GUID of the default prompt answer.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"name")," Object name of the default prompt answer.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"type")," String value for the object type. The value of the object type depends on the kind of object used by the prompt. If the prompt consists of metric choices, the object type is ",(0,o.kt)("strong",{parentName:"p"},"metric"),". If the prompt consists of attribute choices, the object type is ",(0,o.kt)("strong",{parentName:"p"},"attribute"),".")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"answers")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"id")," Object GUID of the prompt answer to be used.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"name")," Object name of the prompt answer to be used.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"type")," String value for the object type. The value of the object type depends on the kind of object used by the prompt. If the prompt consists of metric choices, the object type is ",(0,o.kt)("strong",{parentName:"p"},"metric"),". If the prompt consists of attribute choices, the object type is ",(0,o.kt)("strong",{parentName:"p"},"attribute"),"."))))),(0,o.kt)("p",null,"Sample JSON for an object prompt definition is provided below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "0B524DB54440D0280747C1A3058ED474",\n    "key": "0B524DB54440D0280747C1A3058ED474@0@10",\n    "name": "Metric Prompt",\n    "title": "Objects",\n    "type": "OBJECTS",\n    "required": false,\n    "max": 2,\n    "min": 1,\n    "defaultAnswer": [\n      {\n        "name": "Cost Growth",\n        "id": "D823D64B48A0104B01135587BA87A2BD",\n        "type": "metric"\n      }\n    ],\n    "answers": [\n      {\n        "name": "Cost Growth",\n        "id": "D823D64B48A0104B01135587BA87A2BD",\n        "type": "metric"\n      }\n    ]\n  }\n]\n')),(0,o.kt)("p",null,"Additional sample code for an object prompt definition is provided below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "12FF3D5D43A6A17E8847FB9304FEA1E1@0@10",\n  "name": "Predefined list of objects",\n  "title": "Objects",\n  "type": "OBJECTS",\n  "required": true,\n  "max": 2,\n  "min": 1,\n  "defaultAnswer": [\n    {\n      "name": "Age Range",\n      "id": "5603951E4FE1BC04A44E44B85BBB8ED2",\n      "type": "attribute"\n    },\n    {\n      "name": "Customer",\n      "id": "8D679D3C11D3E4981000E787EC6DE8A4",\n      "type": "attribute"\n    }\n  ],\n  "answers": [\n    {\n      "name": "Age Range",\n      "id": "5603951E4FE1BC04A44E44B85BBB8ED2",\n      "type": "attribute"\n    },\n    {\n      "name": "Customer",\n      "id": "8D679D3C11D3E4981000E787EC6DE8A4",\n      "type": "attribute"\n    }\n  ]\n}\n')),(0,o.kt)("h3",{id:"possible-prompt-execution-errors-for-object-prompts"},"Possible prompt execution errors for object prompts"),(0,o.kt)("p",null,"Numerous errors can occur during the prompt execution workflow, when answering prompts. Some of these are ",(0,o.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-execution-errors"},"general errors"),", and others occur only for specific types of prompts. The errors listed below are specific to object prompts."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Too many prompt answers provided"),(0,o.kt)("p",{parentName:"li"},"HTTP - 400"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "ERR006",\n  "message": "The number of objects provided for prompt name: Predefined list of objects key: 12FF3D5D43A6A17E8847FB9304FEA1E1@0@10 exceeds the maximum allowed(3} answers",\n  "ticketId": "5352773f8b1440a9891911bc2cdd05b4"\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Too few prompt answers provided"),(0,o.kt)("p",{parentName:"li"},"HTTP - 400"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "ERR006",\n  "message": "The number of objects provided for prompt name: Predefined list of objects key: 12FF3D5D43A6A17E8847FB9304FEA1E1@0@10 does not meet the minimum required(3} answer.",\n  "ticketId": "3439cf127157448abfb621998868ad19"\n}\n')))))}u.isMDXComponent=!0},6582:function(e,t,n){t.Z=n.p+"assets/images/swagger_promptAnswerModel-c7ad8ba8d412aab7837a477e460d8a31.png"},5899:function(e,t,n){t.Z=n.p+"assets/images/swagger_promptAnswerModel_response-93a77f14c2ae9b378ff4d4f556f3acb7.png"}}]);