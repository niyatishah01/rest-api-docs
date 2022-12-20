"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[2913],{3905:function(e,t,a){a.d(t,{Zo:function(){return g},kt:function(){return m}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},g=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),c=u(a),m=l,d=c["".concat(p,".").concat(m)]||c[m]||i[m]||r;return a?n.createElement(d,o(o({ref:t},g),{},{components:a})):n.createElement(d,o({ref:t},g))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5780:function(e,t,a){a.r(t),a.d(t,{assets:function(){return g},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return i}});var n=a(3117),l=a(102),r=(a(7294),a(3905)),o=["components"],s={title:"Manage language objects",description:"This section covers creating, updating and deleting language objects"},p=void 0,u={unversionedId:"common-workflows/manage-languages",id:"common-workflows/manage-languages",title:"Manage language objects",description:"This section covers creating, updating and deleting language objects",source:"@site/docs/common-workflows/manage-languages.md",sourceDirName:"common-workflows",slug:"/common-workflows/manage-languages",permalink:"/rest-api-docs/common-workflows/manage-languages",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-languages.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1671571075,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{title:"Manage language objects",description:"This section covers creating, updating and deleting language objects"},sidebar:"tutorialSidebar",previous:{title:"Update a consolidation object",permalink:"/rest-api-docs/common-workflows/manage-consolidation-objects/update-a-consolidation-object"},next:{title:"Purge object and element caches",permalink:"/rest-api-docs/common-workflows/manage-caches"}},g={},i=[{value:"1. Get server supported langauges",id:"1-get-server-supported-langauges",level:2},{value:"2. Get a list of existing language objects",id:"2-get-a-list-of-existing-language-objects",level:2},{value:"3. Create language object",id:"3-create-language-object",level:2},{value:"4. Delete language object",id:"4-delete-language-object",level:2},{value:"5. Get language object",id:"5-get-language-object",level:2},{value:"6. Update language object",id:"6-update-language-object",level:2},{value:"7. Get language formatting settings",id:"7-get-language-formatting-settings",level:2},{value:"8. Update language&#39;s formatting settings",id:"8-update-languages-formatting-settings",level:2},{value:"9. Get base locale default formatting settings",id:"9-get-base-locale-default-formatting-settings",level:2}],c={toc:i};function m(e){var t=e.components,a=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can try out these workflows at ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-d97007d2-a5be-4748-913d-c243b1b21663?ctx=documentation"},"REST API Playground"),"."),(0,r.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,r.kt)("h2",{id:"1-get-server-supported-langauges"},"1. Get server supported langauges"),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/iserver/baseLanguages")),(0,r.kt)("p",null,"This call is necessary to obtain a list of base languages supported by the server. You will need the LCID of a base language to proceed with creating a language object."),(0,r.kt)("p",null,"Header parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"X-MSTR-AuthToken": "ugvg79hltc7bv6sm57vt0jpr9j"\n')),(0,r.kt)("p",null,"Curl Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'GET' \\\n  'https://demo.microstrategy.com/MicroStrategyLibrary/api/iserver/baseLanguages' \\\n  -H 'accept: application/json' \\\n  -H 'X-MSTR-AuthToken: ugvg79hltc7bv6sm57vt0jpr9j'\n")),(0,r.kt)("p",null,"Request URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-url"},"https://demo.microstrategy.com/MicroStrategyLibrary/api/iserver/baseLanguages\n")),(0,r.kt)("p",null,"Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "baseLocales": [\n    {\n      "languageGroup": "English",\n      "lcid": 1033,\n      "name": "English (United States)"\n    },\n    {\n      "languageGroup": "German",\n      "lcid": 1031,\n      "name": "German (Germany)"\n    },\n    {\n      "languageGroup": "Italian",\n      "lcid": 1040,\n      "name": "Italian (Italy)"\n    },\n    {\n      "languageGroup": "Portuguese",\n      "lcid": 1046,\n      "name": "Portuguese (Brazil)"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Response Code: 200"),(0,r.kt)("h2",{id:"2-get-a-list-of-existing-language-objects"},"2. Get a list of existing language objects"),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/languages")),(0,r.kt)("p",null,"This call allows you to check existing language objects. Make sure you don't already have an existing object you are planning to create."),(0,r.kt)("p",null,"Header parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"X-MSTR-AuthToken": "ugvg79hltc7bv6sm57vt0jpr9j"\n')),(0,r.kt)("p",null,"Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'GET' \\\n  'https://demo.microstrategy.com/MicroStrategyLibrary/api/languages' \\\n  -H 'accept: application/json' \\\n  -H 'X-MSTR-AuthToken: ugvg79hltc7bv6sm57vt0jpr9j'\n")),(0,r.kt)("p",null,"Request URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-url"},"https://demo.microstrategy.com/MicroStrategyLibrary/api/languages\n")),(0,r.kt)("p",null,"Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "languages": [\n    {\n      "name": "Chinese (Simplified)",\n      "id": "000008044F95EF3956E52781700C1E7A",\n      "baseLangLcid": 0,\n      "lcid": 2052,\n      "owner": {\n        "id": "54F3D26011D2896560009A8E67019608",\n        "name": "Administrator"\n      },\n      "lastModified": "2021-12-13T04:46:25+0000",\n      "acg": 255\n    },\n    {\n      "name": "Spanish (Spain)",\n      "id": "00000C0A4F95EF3956E52781700C1E7A",\n      "baseLangLcid": 0,\n      "lcid": 3082,\n      "owner": {\n        "id": "54F3D26011D2896560009A8E67019608",\n        "name": "Administrator"\n      },\n      "lastModified": "2021-12-13T04:46:25+0000",\n      "acg": 255\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Response code: 200"),(0,r.kt)("h2",{id:"3-create-language-object"},"3. Create language object"),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/languages")),(0,r.kt)("p",null,"This call allows you to create new language based on existing one. Call ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/languages")," for languages' LCIDs."),(0,r.kt)("p",null,"Header parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"X-MSTR-AuthToken": "ugvg79hltc7bv6sm57vt0jpr9j"\n')),(0,r.kt)("p",null,"Request Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "name": "New Language Object Name", "baseLanguageLcid": 1033 }\n')),(0,r.kt)("p",null,"Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST 'https://demo.microstrategy.com/MicroStrategyLibrary/api/languages' \\\n    -H 'accept:application/json' \\\n    -H 'X-MSTR-AuthToken: ugvg79hltc7bv6sm57vt0jpr9j' \\\n    -H 'Content-Type: application/json' \\\n    -d '{ \"name\": \"New Language Object Name\", \"baseLanguageLcid\": 1033 }'\n")),(0,r.kt)("p",null,"Request URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-url"},"https://demo.microstrategy.com/MicroStrategyLibrary/api/languages\n")),(0,r.kt)("p",null,"Response Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "New Language Object Name",\n  "id": "003004094F95EF3956E52781700C1E7A",\n  "baseLangLcid": 1033,\n  "lcid": 3146761,\n  "owner": {\n    "id": "54F3D26011D2896560009A8E67019608",\n    "name": "Administrator"\n  },\n  "lastModified": "2022-09-23T11:55:28+0200",\n  "acg": 255\n}\n')),(0,r.kt)("p",null,"Response Code: 200"),(0,r.kt)("h2",{id:"4-delete-language-object"},"4. Delete language object"),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE /api/objects/{id}")),(0,r.kt)("p",null,"This call allows you to delete an object. Object type for language is 45. Call ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/languages")," for languages' IDs."),(0,r.kt)("p",null,"Header parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"X-MSTR-AuthToken": "ugvg79hltc7bv6sm57vt0jpr9j"\n')),(0,r.kt)("p",null,"Path parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"id": "001008044F95EF3956E52781700C1E7A"\n')),(0,r.kt)("p",null,"Query parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"type": 45\n')),(0,r.kt)("p",null,"Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'DELETE' \\\n  'https://demo.microstrategy.com/MicroStrategyLibrary/api/objects/001008044F95EF3956E52781700C1E7A?type=45' \\\n  -H 'accept: */*' \\\n  -H 'X-MSTR-AuthToken: ugvg79hltc7bv6sm57vt0jpr9j'\n")),(0,r.kt)("p",null,"Request URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-url"},"https://demo.microstrategy.com/MicroStrategyLibrary/api/objects/001008044F95EF3956E52781700C1E7A?type=45\n")),(0,r.kt)("p",null,"Response Code: 204 (No Content)"),(0,r.kt)("h2",{id:"5-get-language-object"},"5. Get language object"),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/languages/{id}")),(0,r.kt)("p",null,"This call allows you to get information about language object. Call ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/languages")," for languages' IDs."),(0,r.kt)("p",null,"Header parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"X-MSTR-AuthToken": "ugvg79hltc7bv6sm57vt0jpr9j"\n')),(0,r.kt)("p",null,"Path parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"id": "00000C0A4F95EF3956E52781700C1E7A"\n')),(0,r.kt)("p",null,"Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'GET' \\\n  'https://demo.microstrategy.com/MicroStrategyLibrary/api/languages/00000C0A4F95EF3956E52781700C1E7A' \\\n  -H 'accept: application/json' \\\n  -H 'X-MSTR-AuthToken: ugvg79hltc7bv6sm57vt0jpr9j'\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Spanish (Spain)",\n  "id": "00000C0A4F95EF3956E52781700C1E7A",\n  "baseLangLcid": 0,\n  "lcid": 3082,\n  "owner": {\n    "id": "54F3D26011D2896560009A8E67019608",\n    "name": "Administrator"\n  },\n  "lastModified": "2022-10-25T13:15:19+0000",\n  "acg": 255\n}\n')),(0,r.kt)("p",null,"Response Code: 200"),(0,r.kt)("h2",{id:"6-update-language-object"},"6. Update language object"),(0,r.kt)("p",null,"This call allows you to update information about language object. Call ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/languages")," for languages' IDs."),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH /api/languages/{id}")),(0,r.kt)("p",null,"Header parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"X-MSTR-AuthToken": "ugvg79hltc7bv6sm57vt0jpr9j"\n')),(0,r.kt)("p",null,"Path parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"id": "00000C0A4F95EF3956E52781700C1E7A"\n')),(0,r.kt)("p",null,"Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X \'PATCH\' \\\n  \'https://demo.microstrategy.com/MicroStrategyLibrary/api/languages/00000C0A4F95EF3956E52781700C1E7A\' \\\n  -H \'accept: application/json\' \\\n  -H \'X-MSTR-AuthToken: ugvg79hltc7bv6sm57vt0jpr9j\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "operationList": [\n    {\n      "op": "replace",\n      "path": "/name",\n      "value": "Spanish v2"\n    }\n  ]\n}\'\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Spanish v2",\n  "id": "00000C0A4F95EF3956E52781700C1E7A",\n  "baseLangLcid": 0,\n  "lcid": 3082,\n  "owner": {\n    "id": "54F3D26011D2896560009A8E67019608",\n    "name": "Administrator"\n  },\n  "lastModified": "2022-10-25T13:15:19+0000",\n  "acg": 255\n}\n')),(0,r.kt)("p",null,"Response Code: 200"),(0,r.kt)("h2",{id:"7-get-language-formatting-settings"},"7. Get language formatting settings"),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/languages/{id}/formattingSettings")),(0,r.kt)("p",null,"This call allows you to get information about formatting settings for language object. Call ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/languages")," for languages' IDs."),(0,r.kt)("p",null,"Header parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"X-MSTR-AuthToken": "ugvg79hltc7bv6sm57vt0jpr9j"\n')),(0,r.kt)("p",null,"Path parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"id": "00000C0A4F95EF3956E52781700C1E7A"\n')),(0,r.kt)("p",null,"Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'GET' \\\n  'https://demo.microstrategy.com/MicroStrategyLibrary/api/languages/00000C0A4F95EF3956E52781700C1E7A/formattingSettings' \\\n  -H 'accept: application/json' \\\n  -H 'X-MSTR-AuthToken: ugvg79hltc7bv6sm57vt0jpr9j'\n")),(0,r.kt)("p",null,"Request URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-url"},"https://demo.microstrategy.com/MicroStrategyLibrary/api/languages/00000C0A4F95EF3956E52781700C1E7A/formattingSettings\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "formattingSettings": {\n    "timeInterval": {\n      "minutes15": "H:mm",\n      "minutes30": "H:mm",\n      "hour": "H:mm",\n      "day": "dd/MM",\n      "week": "dd/MM",\n      "hourOfDay": "H:mm",\n      "month": "MMM",\n      "quarter": "qqq",\n      "year": "yyyy"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Response Code: 200"),(0,r.kt)("h2",{id:"8-update-languages-formatting-settings"},"8. Update language's formatting settings"),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH /api/languages/{id}/formattingSettings")),(0,r.kt)("p",null,"This call allows you to update information about formatting settings for language object. Call ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/languages")," for languages' IDs."),(0,r.kt)("p",null,"Header parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"X-MSTR-AuthToken": "ugvg79hltc7bv6sm57vt0jpr9j"\n')),(0,r.kt)("p",null,"Path parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"id": "00000C0A4F95EF3956E52781700C1E7A"\n')),(0,r.kt)("p",null,"Request body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "operationList": [\n    {\n      "op": "replace",\n      "path": "/formattingSettings/timeInterval/hour",\n      "value": "H"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' curl -X \'PATCH\' \\\n   \'https://env-301206.customer.cloud.microstrategy.com/MicroStrategyLibrary/api/languages/00000C0A4F95EF3956E52781700C1E7A/formattingSettings\' \\\n   -H \'accept: application/json\' \\\n   -H \'X-MSTR-AuthToken: ugvg79hltc7bv6sm57vt0jpr9j\' \\\n   -H \'Content-Type: application/json\' \\\n   -d \'{\n   "operationList": [\n     {\n       "op": "replace",\n       "path": "/formattingSettings/timeInterval/hour",\n       "value": "H"\n     }\n   ]\n }\'\n')),(0,r.kt)("p",null,"Request URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-url"},"https://demo.microstrategy.com/MicroStrategyLibrary/api/languages/00000C0A4F95EF3956E52781700C1E7A/formattingSettings\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "formattingSettings": {\n    "timeInterval": {\n      "minutes15": "H:mm",\n      "minutes30": "H:mm",\n      "hour": "H",\n      "day": "dd/MM",\n      "week": "dd/MM",\n      "hourOfDay": "H:mm",\n      "month": "MMM",\n      "quarter": "qqq",\n      "year": "yyyy"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Response Code: 200"),(0,r.kt)("h2",{id:"9-get-base-locale-default-formatting-settings"},"9. Get base locale default formatting settings"),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/baseLocaleDefaultFormats/{lcid}")),(0,r.kt)("p",null,"This call allows you to get default information about formatting settings for language object. Call ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/languages")," for languages' LCIDs."),(0,r.kt)("p",null,"Header parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"X-MSTR-AuthToken": "ugvg79hltc7bv6sm57vt0jpr9j"\n')),(0,r.kt)("p",null,"Path parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"lcid": 1033\n')),(0,r.kt)("p",null,"Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," curl -X 'GET' \\\n   'https://env-301206.customer.cloud.microstrategy.com/MicroStrategyLibrary/api/languages/baseLocaleDefaultFormats/1033' \\\n   -H 'accept: application/json' \\\n   -H 'X-MSTR-AuthToken: ugvg79hltc7bv6sm57vt0jpr9j'\n")),(0,r.kt)("p",null,"Request URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-url"},"https://demo.microstrategy.com/MicroStrategyLibrary/api/languages/baseLocaleDefaultFormats/1033\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "smartAttributeDefaultFormats": [\n    {\n      "smartAttributeType": 1,\n      "defaultFormats": [\n        {\n          "format": "h:mm AM/PM",\n          "example": "9:44 AM"\n        },\n        {\n          "format": "hh:mm AM/PM",\n          "example": "09:44 AM"\n        }\n      ]\n    },\n    {\n      "smartAttributeType": 2,\n      "defaultFormats": [\n        {\n          "format": "h:mm AM/PM",\n          "example": "9:44 AM"\n        },\n        {\n          "format": "hh:mm AM/PM",\n          "example": "09:44 AM"\n        }\n      ]\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Response Code: 200"))}m.isMDXComponent=!0}}]);