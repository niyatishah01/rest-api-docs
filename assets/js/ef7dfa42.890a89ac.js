"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[1014],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,g=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2353:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a,r=n(3117),o=n(102),l=(n(7294),n(3905)),i=["components"],s={title:"Manage object's translations",description:"You can use REST\u202fAPI requests to retrieve, remove, add and update object's translations."},m=void 0,c={unversionedId:"common-workflows/modeling/common-object-management/manage-object-translations/manage-object-translations",id:"common-workflows/modeling/common-object-management/manage-object-translations/manage-object-translations",title:"Manage object's translations",description:"You can use REST\u202fAPI requests to retrieve, remove, add and update object's translations.",source:"@site/docs/common-workflows/modeling/common-object-management/manage-object-translations/manage-object-translations.md",sourceDirName:"common-workflows/modeling/common-object-management/manage-object-translations",slug:"/common-workflows/modeling/common-object-management/manage-object-translations/",permalink:"/rest-api-docs/common-workflows/modeling/common-object-management/manage-object-translations/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/common-object-management/manage-object-translations/manage-object-translations.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1676308226,formattedLastUpdatedAt:"Feb 13, 2023",frontMatter:{title:"Manage object's translations",description:"You can use REST\u202fAPI requests to retrieve, remove, add and update object's translations."},sidebar:"tutorialSidebar",previous:{title:"Manage object's ACL",permalink:"/rest-api-docs/common-workflows/modeling/common-object-management/manage-object-acl"},next:{title:"Retrieve object's translations",permalink:"/rest-api-docs/common-workflows/modeling/common-object-management/manage-object-translations/retrieve-object-translations"}},p={},u=[],d=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),g={toc:u};function b(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(d,{since:"2021 Update 7",mdxType:"Available"}),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can try out these workflows at ",(0,l.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-d83e2ec3-5b5b-4fb3-8c30-4338db4c0f51?ctx=documentation"},"REST API Playground"),"."),(0,l.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,l.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,l.kt)("p",null,"The following table lists required ACLs on different levels for GET and PATCH endpoints."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,l.kt)("th",{parentName:"tr",align:null},"Object"),(0,l.kt)("th",{parentName:"tr",align:null},"Project"),(0,l.kt)("th",{parentName:"tr",align:null},"Locale"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"READ"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PATCH"),(0,l.kt)("td",{parentName:"tr",align:null},"READ, WRITE"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"USE")))),(0,l.kt)("p",null,"You can use REST\u202fAPI requests to retrieve, remove, add or update object's translations:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/common-object-management/manage-object-translations/retrieve-object-translations"},"Retrieve object's translations")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/common-object-management/manage-object-translations/remove-add-object-translations"},"Remove or add object's translations")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/modeling/common-object-management/manage-object-translations/update-object-translations"},"Update an object's translations"))),(0,l.kt)("p",null,"The following are important fields in the API response body defined:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"defaultLanguage"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default language for an object."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"localesAndTranslations"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Map containing target names' ids and corresponding translation objects as values."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"translationValues"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Map containing locales' ids and corresponding translation values."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"translation"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Translation value")))),(0,l.kt)("p",null,"Sample response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "defaultLanguage": "en",\n  "localesAndTranslations": {\n    "1:0:": {\n      "translationTargetName": "Object Name ",\n      "translationValues": {\n        "1028": {\n          "translation": "\u7522\u54c1\u5927\u985e\u92b7\u552e\u5831\u8868"\n        },\n        "1031": {\n          "translation": "Kategorieumsatzbericht"\n        }\n      }\n    },\n    "1:2:": {\n      "translationTargetName": "Object Description ",\n      "translationValues": {\n        "1028": {\n          "translation": "\u8a72\u5831\u8868\u986f\u793a\u4e86\u67d0\u7279\u5b9a\u7522\u54c1\u985e\u5225\u548c\u4e2d\u985e\u6bcf\u6708\u7684\u71df\u6536\u548c\u5229\u6f64\u8cc7\u8a0a\u3002\u8a72\u5229\u606f\u7684\u7522\u54c1\u985e\u5225\u901a\u904e\u5206\u9801\u9078\u64c7\u3002"\n        },\n        "1031": {\n          "translation": "Dieser Bericht zeigt Informationen zu Einnahmen und Gewinn nach Monat f\xfcr eine bestimmte Kategorie und Subkategorie. Die Kategorie, f\xfcr die Sie sich interessieren, wird mit Page-By ausgew\xe4hlt."\n        }\n      }\n    }\n  }\n}\n')))}b.isMDXComponent=!0}}]);