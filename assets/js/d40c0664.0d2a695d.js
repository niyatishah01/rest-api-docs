"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[9926],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return c}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),m=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(a),c=n,k=d["".concat(l,".").concat(c)]||d[c]||u[c]||p;return a?r.createElement(k,o(o({ref:t},s),{},{components:a})):r.createElement(k,o({ref:t},s))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,o=new Array(p);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var m=2;m<p;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6067:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return u}});var r=a(3117),n=a(102),p=(a(7294),a(3905)),o=["components"],i={title:"Value prompts",description:"A value prompt allows the results to be filtered based on a specific value, such as a specific date, number, or word/phrase."},l=void 0,m={unversionedId:"common-workflows/use-prompts-objects/prompt-types/value-prompts",id:"common-workflows/use-prompts-objects/prompt-types/value-prompts",title:"Value prompts",description:"A value prompt allows the results to be filtered based on a specific value, such as a specific date, number, or word/phrase.",source:"@site/docs/common-workflows/use-prompts-objects/prompt-types/value-prompts.md",sourceDirName:"common-workflows/use-prompts-objects/prompt-types",slug:"/common-workflows/use-prompts-objects/prompt-types/value-prompts",permalink:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/value-prompts",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/use-prompts-objects/prompt-types/value-prompts.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1668189866,formattedLastUpdatedAt:"Nov 11, 2022",frontMatter:{title:"Value prompts",description:"A value prompt allows the results to be filtered based on a specific value, such as a specific date, number, or word/phrase."},sidebar:"tutorialSidebar",previous:{title:"Object prompts",permalink:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/object-prompts"},next:{title:"Metric expression prompts",permalink:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-types/metric-expression-prompts"}},s={},u=[{value:"Answer a value prompt",id:"answer-a-value-prompt",level:2},{value:"Provide specific prompt answers",id:"provide-specific-prompt-answers",level:3},{value:"Get information about a value prompt",id:"get-information-about-a-value-prompt",level:2},{value:"Value prompt definition",id:"value-prompt-definition",level:2},{value:"Possible prompt execution errors for value prompts",id:"possible-prompt-execution-errors-for-value-prompts",level:2}],d={toc:u};function c(e){var t=e.components,i=(0,n.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("admonition",{type:"tip"},(0,p.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,p.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-30ed13b7-880a-4b38-bdf7-363d868bf70c?ctx=documentation"},"REST API Playground"),"."),(0,p.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,p.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,p.kt)("p",null,"A value prompt allows the results to be filtered based on a specific value, such as a specific date, number, or word/phrase."),(0,p.kt)("p",null,"You can use REST APIs to perform the following action on value prompts:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#answer-a-value-prompt"},"Answer a value prompt"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#provide-specific-prompt-answers"},"Provide specific prompt answers")))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#get-information-about-a-value-prompt"},"Get information about a value prompt")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#value-prompt-definition"},"Value prompt definition")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#possible-prompt-execution-errors-for-value-prompts"},"Possible prompt execution errors for value prompts"))),(0,p.kt)("h2",{id:"answer-a-value-prompt"},"Answer a value prompt"),(0,p.kt)("p",null,"You use the following REST API endpoints to answer a value prompt applied to a dossier, document, or report:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"PUT ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/documents/{id}/instances/{instanceId}/prompts/answers"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"PUT ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/reports/{reportId}/instances/{instanceId}/prompts/answers")))),(0,p.kt)("h3",{id:"provide-specific-prompt-answers"},"Provide specific prompt answers"),(0,p.kt)("p",null,'You provide answers to a value prompt in the body parameter of the request. You must provide the prompt ID and specify the prompt type as "VALUE".'),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"swagger_promptAnswerModel",src:a(6582).Z,width:"336",height:"474"})),(0,p.kt)("p",null,"Sample code for answering a value prompt for each data type is provided below:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Numeric prompt"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "prompts": [\n    {\n      "key": "9BC4631D436CAA78D7A70AB2D0635D88@0@10",\n      "type": "VALUE",\n      "answers": "2015"\n    }\n  ]\n}\n'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Date prompt"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "prompts": [\n    {\n      "key": "A46842D548C3F0CEEDD3979528480FE5@0@10",\n      "type": "VALUE",\n      "answers": "2017-09-27T23:37:39.000+0000"\n    }\n  ]\n}\n'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Text prompt"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "prompts": [\n    {\n      "key": "CF604AA948AF21CBC67AF98FBA614E0F@0@10",\n      "type": "VALUE",\n      "answers": "q"\n    }\n  ]\n}\n'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Big decimal"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "prompts": [\n    {\n      "key": "6F96306444CD3F2597B3FF92E2220356@0@10",\n      "type": "VALUE",\n      "answers": "123"\n    }\n  ]\n}\n')))),(0,p.kt)("h2",{id:"get-information-about-a-value-prompt"},"Get information about a value prompt"),(0,p.kt)("p",null,"You use the following REST API endpoints to get information about value prompts applied to dossier, document, and report objects in the metadata, as well as instances of those objects:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"GET ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/documents/{id}/prompts"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"GET ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/documents/{id}/instances/{instanceId}/prompts"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"GET ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/reports/{reportId}/prompts"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"GET ",(0,p.kt)("inlineCode",{parentName:"p"},"/api/reports/{reportId}/instances/{instanceId}/prompts")))),(0,p.kt)("p",null,"You provide the ID of the document, dossier, or report in the path of the request, as well as the instance ID if you are getting information about a prompt applied to an instance of a document, dossier, or report. The response contains the prompt information."),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"swagger_promptAnswerModel_response",src:a(5899).Z,width:"1218",height:"316"})),(0,p.kt)("h2",{id:"value-prompt-definition"},"Value prompt definition"),(0,p.kt)("p",null,"The model for the definition of a value prompt can be represented with the following fields:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"id")," GUID of the prompt."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"name")," Name of the prompt. This is the most user-friendly value that can be used to identify the prompt."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"key")," Unique identifier of the prompt. It is important to use this to identify the prompt if the same prompt is used more than once in the report, document or dossier."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"title")," Title of the prompt."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"required")," Specifies whether this prompt is required or optional."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"type"),' Prompt type. For value prompts, the value is "VALUE".'),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"min")," Minimum value of prompt answer.")),(0,p.kt)("admonition",{type:"tip"},(0,p.kt)("p",{parentName:"admonition"},"This value depends on the data type of the value prompt. It can be date, number, string, and so on.")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"max")," Maximum value of prompt answer.")),(0,p.kt)("admonition",{type:"tip"},(0,p.kt)("p",{parentName:"admonition"},"This value depends on the data type of the value prompt. It can be date, number, string, and so on.")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"defaultAnswer")," Default prompt answer")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"answers")," Answer to be used for prompt.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"dataType")," Data type of prompt value (from ",(0,p.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/2021/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLDataType.html"},"EnumDSSXMLDataType"),"). The following data types are supported by value prompts:"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"Numeric prompt"),(0,p.kt)("li",{parentName:"ul"},"Date prompt"),(0,p.kt)("li",{parentName:"ul"},"Text prompt"),(0,p.kt)("li",{parentName:"ul"},"Big decimal")))),(0,p.kt)("p",null,"Sample JSON for a value prompt definition is provided below."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "0CE45CA4483E29FFB0AF969D68588E95",\n    "key": "0CE45CA4483E29FFB0AF969D68588E95@0@10",\n    "name": "NamePrompt",\n    "title": "Name Prompt",\n    "type": "VALUE",\n    "required": true,\n    "answers": "Darren",\n    "defaultAnswer": "Darren",\n    "dataType": 8\n  }\n]\n')),(0,p.kt)("p",null,"Sample code for the value prompt definition for each data type is provided below:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Numeric prompt"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "9780961349394064B659679AA3D0A822@0@10",\n  "name": "Value (Number)",\n  "title": "Number",\n  "type": "VALUE",\n  "required": true,\n  "max": 50,\n  "min": 0.25,\n  "dataType": "NUMERIC"\n}\n'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Date prompt"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "A46842D548C3F0CEEDD3979528480FE5@0@10",\n  "name": "Value (Date)",\n  "title": "Date",\n  "type": "VALUE",\n  "required": true,\n  "max": "2018-09-26T23:37:39.000+0000",\n  "min": "2018-09-26T23:37:39.000+0000",\n  "answers": "2017-09-27T04:00:00.000+0000",\n  "defaultAnswer": "2018-09-26T04:00:00.000+0000",\n  "dataType": "DATE"\n}\n'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Text prompt"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "CF604AA948AF21CBC67AF98FBA614E0F@0@10",\n  "name": "Value (Text)",\n  "title": "Text",\n  "type": "VALUE",\n  "required": true,\n  "max": 5,\n  "min": 1,\n  "answers": "q",\n  "defaultAnswer": "ab",\n  "dataType": "TEXT"\n}\n'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Big decimal"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "6F96306444CD3F2597B3FF92E2220356@0@10",\n  "name": "Value (Big Decimal)",\n  "title": "Big decimal",\n  "type": "VALUE",\n  "required": true,\n  "max": 999999999999.4,\n  "min": 0,\n  "answers": 2000,\n  "defaultAnswer": 12,\n  "dataType": "NUMERIC"\n}\n')))),(0,p.kt)("h2",{id:"possible-prompt-execution-errors-for-value-prompts"},"Possible prompt execution errors for value prompts"),(0,p.kt)("p",null,"Numerous errors can occur during the prompt execution workflow, when answering prompts. Some of these are ",(0,p.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/use-prompts-objects/prompt-execution-errors"},"general errors"),", and others occur only for specific types of prompts. The errors listed below are specific to value prompts."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Does not meet minimum date range"),(0,p.kt)("p",{parentName:"li"},"HTTP - 400"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "code": "ERR006",\n  "message": "The date(2011-08-07T21:09:50.000+0000) provided for prompt name:\n   Value (Date) key: 180E0FE14CA4A62957488C8EBE6FE321@0@10 does not meet the\n   minimum date range specified(2012-10-08T21:09:50.000+0000) by the prompt",\n  "ticketId": "6f5c692f3c294e0b95d2d02fd4a3402a"\n}\n'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Exceeds maximum date range"),(0,p.kt)("p",{parentName:"li"},"HTTP - 400"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "code": "ERR006",\n  "message": "The date(2040-08-07T21:09:50.000+0000) provided for prompt name:\n   Value (Date) key: 180E0FE14CA4A62957488C8EBE6FE321@0@10 exceeds the maximum\n   date range specified(2012-10-08T21:09:50.000+0000) by the prompt",\n  "ticketId": "1e8068d7ca044ba1abd828f473feb3d7"\n}\n'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Does not meet minimum value"),(0,p.kt)("p",{parentName:"li"},"HTTP - 400"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "code": "ERR006",\n  "message": "The value(0.1456) provided for prompt name: Value (Number)\n   key: 2CBAE32748F6ECE80617CF9A6B34003D@0@10 does not meet the minimum\n   required value(0.999999999)",\n  "ticketId": "7937c4d61aad4f34b9ae7433efe3237e"\n}\n'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Exceeds maximum value"),(0,p.kt)("p",{parentName:"li"},"HTTP - 400"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "code": "ERR006",\n  "message": "The value(200000.99) provided for prompt name: Value (Number)\n   key: 2CBAE32748F6ECE80617CF9A6B34003D@0@10 exceeds the maximum allowed\n   value(100000.99}",\n  "ticketId": "6f5c692f3c294e0b95d2d02fd4a3402a"\n}\n'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Text length too short"),(0,p.kt)("p",{parentName:"li"},"HTTP - 400"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "code": "ERR006",\n  "message": "The number of characters provided for prompt name: Value (Text)\n   key: CF604AA948AF21CBC67AF98FBA614E0F@0@10 does not meet the minimum\n   required(2} text length.",\n  "ticketId": "9c91e304e5a74881a8579230ea0d463c"\n}\n'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Text length too long"),(0,p.kt)("p",{parentName:"li"},"HTTP - 400"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "code": "ERR006",\n  "message": "The number of characters provided for prompt name: Value (Text)\n   key: CF604AA948AF21CBC67AF98FBA614E0F@0@10 exceeds the maximum allowed(5)\n   text length.",\n  "ticketId": "67fb558e27c34d6e816a8a17920a23eb"\n}\n')))))}c.isMDXComponent=!0},6582:function(e,t,a){t.Z=a.p+"assets/images/swagger_promptAnswerModel-c7ad8ba8d412aab7837a477e460d8a31.png"},5899:function(e,t,a){t.Z=a.p+"assets/images/swagger_promptAnswerModel_response-93a77f14c2ae9b378ff4d4f556f3acb7.png"}}]);