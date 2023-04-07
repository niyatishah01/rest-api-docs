"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[689],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},17725:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a,o=t(83117),r=t(80102),i=(t(67294),t(3905)),s=["components"],l={title:"Manage application general settings",description:"You can use REST APIs to manage application general settings."},p=void 0,c={unversionedId:"common-workflows/administration/manage-application-objects/manage-application-general-settings",id:"common-workflows/administration/manage-application-objects/manage-application-general-settings",title:"Manage application general settings",description:"You can use REST APIs to manage application general settings.",source:"@site/docs/common-workflows/administration/manage-application-objects/manage-application-general-settings.md",sourceDirName:"common-workflows/administration/manage-application-objects",slug:"/common-workflows/administration/manage-application-objects/manage-application-general-settings",permalink:"/rest-api-docs/common-workflows/administration/manage-application-objects/manage-application-general-settings",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/manage-application-objects/manage-application-general-settings.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1680880277,formattedLastUpdatedAt:"Apr 7, 2023",frontMatter:{title:"Manage application general settings",description:"You can use REST APIs to manage application general settings."},sidebar:"tutorialSidebar",previous:{title:"Manage application objects",permalink:"/rest-api-docs/common-workflows/administration/manage-application-objects/"},next:{title:"Manage application customized emails",permalink:"/rest-api-docs/common-workflows/administration/manage-application-objects/manage-application-customized-emails"}},d={},u=[{value:"Create an application",id:"create-an-application",level:2},{value:"Get an existing application",id:"get-an-existing-application",level:2},{value:"Update an existing application",id:"update-an-existing-application",level:2},{value:"Delete an existing application",id:"delete-an-existing-application",level:2},{value:"Get application list",id:"get-application-list",level:2}],m=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),g={toc:u};function b(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(m,{since:"2021 Update 4",mdxType:"Available"}),(0,i.kt)("p",null,"You can use REST APIs to manage application general settings."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),".")),(0,i.kt)("h2",{id:"create-an-application"},"Create an application"),(0,i.kt)("p",null,"Let's create a general application named company A."),(0,i.kt)("p",null,"Here are some important objects explain may help you:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"general"),(0,i.kt)("p",{parentName:"li"},"This object contains a series of general setting fields such as network timeout, custom logging, clear cache, and so on.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"homeScreen"),(0,i.kt)("p",{parentName:"li"},"This object has two modes, ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," on behalf of using the Library screen as home and ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),' on behalf of using the document as home. We can customize the document screen through the "homeDocument" field and the library screen through "homeLibrary".'))),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Applications/createApplication_1"},"POST /api/v2/applications")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "6ijq1gm6h441ab73veev05igr"\n')),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "projectId": "38A062302D4411D28E71006008960167",\n  "name": "company A",\n  "description": "hello world",\n  "type": 78,\n  "general": {\n    "disableAdvancedSettings": false,\n    "disablePreferences": false,\n    "networkTimeout": 180,\n    "cacheClearMode": 1,\n    "clearCacheOnLogout": false,\n    "maxLogSize": 500,\n    "logLevel": 12,\n    "updateInterval": 30\n  },\n  "homeScreen": {\n    "mode": 0,\n    "homeDocument": {\n      "url": "",\n      "icons": ["table_of_contents", "bookmarks", "reset", "filters", "comments", "share"],\n      "toolbarMode": 0,\n      "toolbarEnabled": true\n    },\n    "homeLibrary": {\n      "contentBundleIds": [],\n      "icons": [\n        "sidebars",\n        "sort_and_filter",\n        "search",\n        "notifications",\n        "multi_select",\n        "options"\n      ],\n      "customizedItems": {\n        "my_content": true,\n        "subscriptions": true,\n        "new_dossier": true,\n        "edit_dossier": true,\n        "add_library_server": true,\n        "data_search": true,\n        "hyper_intelligence": true,\n        "font_size": true,\n        "undo_and_redo": true\n      },\n      "toolbarMode": 0,\n      "sidebars": ["all", "favorites", "recents", "default_groups", "my_groups", "options"],\n      "toolbarEnabled": true,\n      "defaultGroupsName": "Default Groups"\n    }\n  },\n  "platforms": ["mobile", "web", "desktop"],\n  "applicationPalettes": [],\n  "isDefault": false,\n  "useConfigPalettes": false\n}\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X \'POST\' \\\n  \'http://demo.microstrategy.com/MicroStrategyLibrary/api/v2/applications\' \\\n  -H \'accept: */*\' \\\n  -H \'X-MSTR-AuthToken: 6ijq1gm6h441ab73veev05igr\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n   "projectId":"38A062302D4411D28E71006008960167",\n   "name":"company A",\n   "description":"hello world",\n   "type":78,\n   "ownerId":"BC29183744275F2836AC8DB23E2AB756",\n   "objectNames":[\n\n   ],\n   "parentObjectId":"4B979645463C14EF5A32EF8A032C9AC1",\n   "parentId":"4B979645463C14EF5A32EF8A032C9AC1",\n   "objectAcl":[\n      {\n         "deny":false,\n         "inheritable":false,\n         "rights":255,\n         "type":1,\n         "trustee":"BC29183744275F2836AC8DB23E2AB756"\n      }\n   ],\n   "general":{\n      "disableAdvancedSettings":false,\n      "disablePreferences":false,\n      "networkTimeout":180,\n      "cacheClearMode":1,\n      "clearCacheOnLogout":false,\n      "maxLogSize":500,\n      "logLevel":12,\n      "updateInterval":30\n   },\n   "homeScreen":{\n      "mode":0,\n      "homeDocument":{\n         "url":"",\n         "icons":[\n            "table_of_contents",\n            "bookmarks",\n            "reset",\n            "filters",\n            "comments",\n            "share"\n         ],\n         "toolbarMode":0,\n         "toolbarEnabled":true\n      },\n      "homeLibrary":{\n         "contentBundleIds":[\n\n         ],\n         "icons":[\n            "sidebars",\n            "sort_and_filter",\n            "search",\n            "notifications",\n            "multi_select",\n            "options"\n         ],\n         "customizedItems":{\n            "my_content":true,\n            "subscriptions":true,\n            "new_dossier":true,\n            "edit_dossier":true,\n            "add_library_server":true,\n            "data_search":true,\n            "hyper_intelligence":true,\n            "font_size":true,\n            "undo_and_redo":true\n         },\n         "toolbarMode":0,\n         "sidebars":[\n            "all",\n            "favorites",\n            "recents",\n            "default_groups",\n            "my_groups",\n            "options"\n         ],\n         "toolbarEnabled":true,\n         "defaultGroupsName":"Default Groups"\n      }\n   },\n   "platforms":[\n      "mobile",\n      "web",\n      "desktop"\n   ],\n   "applicationPalettes":[\n\n   ],\n   "isDefault":false,\n   "useConfigPalettes":false\n}\'\n')),(0,i.kt)("p",null,"Sample Response Body: N/A"),(0,i.kt)("p",null,"Sample Response Code: 204 (The application has been created successfully.)"),(0,i.kt)("h2",{id:"get-an-existing-application"},"Get an existing application"),(0,i.kt)("p",null,"Next, we want to get the application created above whose id is ",(0,i.kt)("inlineCode",{parentName:"p"},"856F5276290944F48FCF34DF4AC9737C"),". The result will include ",(0,i.kt)("inlineCode",{parentName:"p"},"objectVersion"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"objectNames"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"objectAcl")," if requested with the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"outputFlag=INCLUDE_LOCALE&outputFlag=INCLUDE_ACL"),". They are essential for updating applications."),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Applications/getApplication_1"},"GET /api/v2/applications/{id}")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "dol2gdrd2297743v8kush3nd1e"\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'GET' \\\n  'http://demo.microstrategy.com/MicroStrategyLibrary/api/v2/applications/856F5276290944F48FCF34DF4AC9737C?outputFlag=INCLUDE_LOCALE&outputFlag=INCLUDE_ACL' \\\n  -H 'accept: application/json' \\\n  -H 'X-MSTR-AuthToken: dol2gdrd2297743v8kush3nd1e'\n")),(0,i.kt)("p",null,"Sample Response Body"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "856F5276290944F48FCF34DF4AC9737C",\n  "projectId": "38A062302D4411D28E71006008960167",\n  "name": "company A",\n  "description": "hello world",\n  "type": 78,\n  "dateCreated": "2022-12-01T06:01:13.971+0000",\n  "dateModified": "2022-12-01T06:14:19.730+0000",\n  "objectVersion": "0805BA3446006A004CEE97A9BEA3EE0A",\n  "ownerId": "44622F1542CDBB6DF7E598B23972AC02",\n  "objectNames": [\n    {\n      "localeId": 1033,\n      "name": "company A",\n      "description": "hello world"\n    }\n  ],\n  "parentObjectId": "4B979645463C14EF5A32EF8A032C9AC1",\n  "parentId": "4B979645463C14EF5A32EF8A032C9AC1",\n  "objectAcl": [\n    {\n      "deny": false,\n      "inheritable": false,\n      "rights": 255,\n      "type": 1,\n      "trustee": "44622F1542CDBB6DF7E598B23972AC02"\n    },\n    {\n      "deny": false,\n      "inheritable": false,\n      "rights": 5,\n      "type": 1,\n      "trustee": "294DEDC011D2F1D56000D98E67019608"\n    },\n    {\n      "deny": false,\n      "inheritable": false,\n      "rights": 5,\n      "type": 1,\n      "trustee": "4FF5121411D49BC8C00014894C78604F"\n    },\n    {\n      "deny": false,\n      "inheritable": false,\n      "rights": 5,\n      "type": 1,\n      "trustee": "5F3FAFE011D2D8CC6000CC8E67019608"\n    },\n    {\n      "deny": false,\n      "inheritable": false,\n      "rights": 5,\n      "type": 1,\n      "trustee": "C82C6B1011D2894CC0009D9F29718E4F"\n    },\n    {\n      "deny": false,\n      "inheritable": false,\n      "rights": 255,\n      "type": 1,\n      "trustee": "5F3FAFE111D2D8CC6000CC8E67019608"\n    }\n  ],\n  "general": {\n    "disableAdvancedSettings": false,\n    "disablePreferences": false,\n    "networkTimeout": 180,\n    "cacheClearMode": 1,\n    "clearCacheOnLogout": false,\n    "maxLogSize": 500,\n    "logLevel": 12,\n    "updateInterval": 30\n  },\n  "homeScreen": {\n    "mode": 0,\n    "homeDocument": {\n      "url": "",\n      "icons": ["table_of_contents", "bookmarks", "reset", "filters", "comments", "share"],\n      "toolbarMode": 0,\n      "toolbarEnabled": true\n    },\n    "homeLibrary": {\n      "contentBundleIds": [],\n      "icons": [\n        "sidebars",\n        "sort_and_filter",\n        "search",\n        "notifications",\n        "multi_select",\n        "options"\n      ],\n      "customizedItems": {\n        "my_content": true,\n        "subscriptions": true,\n        "new_dossier": true,\n        "edit_dossier": true,\n        "add_library_server": true,\n        "data_search": true,\n        "hyper_intelligence": true,\n        "font_size": true,\n        "undo_and_redo": true\n      },\n      "toolbarMode": 0,\n      "sidebars": ["all", "favorites", "recents", "default_groups", "my_groups", "options"],\n      "toolbarEnabled": true,\n      "defaultGroupsName": "Default Groups"\n    }\n  },\n  "platforms": ["mobile", "web", "desktop"],\n  "applicationPalettes": [],\n  "isDefault": false\n}\n')),(0,i.kt)("p",null,"Sample Response Code: 200"),(0,i.kt)("h2",{id:"update-an-existing-application"},"Update an existing application"),(0,i.kt)("p",null,"Now, let us update the properties in the application created above. We should send the request with these objects below and keep the same as what we got."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"objectVersion"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"objectNames"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"objectAcl")),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Applications/updateApplication"},"PUT /api/v2/applications/{id}")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "dol2gdrd2297743v8kush3nd1e"\n')),(0,i.kt)("p",null,"Sample Request Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "856F5276290944F48FCF34DF4AC9737C",\n  "projectId": "38A062302D4411D28E71006008960167",\n  "name": "company A",\n  "description": "hello, company A",\n  "type": 78,\n  "dateCreated": "2022-12-01T06:01:13.971+0000",\n  "dateModified": "2022-12-01T06:14:19.730+0000",\n  "objectVersion": "0805BA3446006A004CEE97A9BEA3EE0A",\n  "ownerId": "44622F1542CDBB6DF7E598B23972AC02",\n  "objectNames": [\n    {\n      "localeId": 1033,\n      "name": "company A",\n      "description": "hello world"\n    }\n  ],\n  "parentObjectId": "4B979645463C14EF5A32EF8A032C9AC1",\n  "parentId": "4B979645463C14EF5A32EF8A032C9AC1",\n  "objectAcl": [\n    {\n      "deny": false,\n      "inheritable": false,\n      "rights": 255,\n      "type": 1,\n      "trustee": "44622F1542CDBB6DF7E598B23972AC02"\n    },\n    {\n      "deny": false,\n      "inheritable": false,\n      "rights": 5,\n      "type": 1,\n      "trustee": "294DEDC011D2F1D56000D98E67019608"\n    },\n    {\n      "deny": false,\n      "inheritable": false,\n      "rights": 5,\n      "type": 1,\n      "trustee": "4FF5121411D49BC8C00014894C78604F"\n    },\n    {\n      "deny": false,\n      "inheritable": false,\n      "rights": 5,\n      "type": 1,\n      "trustee": "5F3FAFE011D2D8CC6000CC8E67019608"\n    },\n    {\n      "deny": false,\n      "inheritable": false,\n      "rights": 5,\n      "type": 1,\n      "trustee": "C82C6B1011D2894CC0009D9F29718E4F"\n    },\n    {\n      "deny": false,\n      "inheritable": false,\n      "rights": 255,\n      "type": 1,\n      "trustee": "5F3FAFE111D2D8CC6000CC8E67019608"\n    }\n  ],\n  "general": {\n    "disableAdvancedSettings": false,\n    "disablePreferences": false,\n    "networkTimeout": 180,\n    "cacheClearMode": 1,\n    "clearCacheOnLogout": false,\n    "maxLogSize": 500,\n    "logLevel": 12,\n    "updateInterval": 30\n  },\n  "homeScreen": {\n    "mode": 0,\n    "homeDocument": {\n      "url": "",\n      "icons": ["table_of_contents", "bookmarks", "reset", "filters", "comments", "share"],\n      "toolbarMode": 0,\n      "toolbarEnabled": true\n    },\n    "homeLibrary": {\n      "contentBundleIds": [],\n      "icons": [\n        "sidebars",\n        "sort_and_filter",\n        "search",\n        "notifications",\n        "multi_select",\n        "options"\n      ],\n      "customizedItems": {\n        "my_content": true,\n        "subscriptions": true,\n        "new_dossier": true,\n        "edit_dossier": true,\n        "add_library_server": true,\n        "data_search": true,\n        "hyper_intelligence": true,\n        "font_size": true,\n        "undo_and_redo": true\n      },\n      "toolbarMode": 0,\n      "sidebars": ["all", "favorites", "recents", "default_groups", "my_groups", "options"],\n      "toolbarEnabled": true,\n      "defaultGroupsName": "Default Groups"\n    }\n  },\n  "platforms": ["mobile", "web", "desktop"],\n  "applicationPalettes": [],\n  "isDefault": false\n}\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X \'PUT\' \\\n  \'http://demo.microstrategy.com/MicroStrategyLibrary/api/v2/applications/856F5276290944F48FCF34DF4AC9737C\' \\\n  -H \'accept: */*\' \\\n  -H \'X-MSTR-AuthToken: dol2gdrd2297743v8kush3nd1e\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "id": "856F5276290944F48FCF34DF4AC9737C",\n  "projectId": "38A062302D4411D28E71006008960167",\n  "name": "company A",\n  "description": "hello, company A",\n  "type": 78,\n  "dateCreated": "2022-12-01T06:01:13.971+0000",\n  "dateModified": "2022-12-01T06:14:19.730+0000",\n  "objectVersion": "0805BA3446006A004CEE97A9BEA3EE0A",\n  "ownerId": "44622F1542CDBB6DF7E598B23972AC02",\n  "objectNames": [\n    {\n      "localeId": 1033,\n      "name": "company A",\n      "description": "hello world"\n    }\n  ],\n  "parentObjectId": "4B979645463C14EF5A32EF8A032C9AC1",\n  "parentId": "4B979645463C14EF5A32EF8A032C9AC1",\n  "objectAcl": [\n    {\n      "deny": false,\n      "inheritable": false,\n      "rights": 255,\n      "type": 1,\n      "trustee": "44622F1542CDBB6DF7E598B23972AC02"\n    },\n    {\n      "deny": false,\n      "inheritable": false,\n      "rights": 5,\n      "type": 1,\n      "trustee": "294DEDC011D2F1D56000D98E67019608"\n    },\n    {\n      "deny": false,\n      "inheritable": false,\n      "rights": 5,\n      "type": 1,\n      "trustee": "4FF5121411D49BC8C00014894C78604F"\n    },\n    {\n      "deny": false,\n      "inheritable": false,\n      "rights": 5,\n      "type": 1,\n      "trustee": "5F3FAFE011D2D8CC6000CC8E67019608"\n    },\n    {\n      "deny": false,\n      "inheritable": false,\n      "rights": 5,\n      "type": 1,\n      "trustee": "C82C6B1011D2894CC0009D9F29718E4F"\n    },\n    {\n      "deny": false,\n      "inheritable": false,\n      "rights": 255,\n      "type": 1,\n      "trustee": "5F3FAFE111D2D8CC6000CC8E67019608"\n    }\n  ],\n  "general": {\n    "disableAdvancedSettings": false,\n    "disablePreferences": false,\n    "networkTimeout": 180,\n    "cacheClearMode": 1,\n    "clearCacheOnLogout": false,\n    "maxLogSize": 500,\n    "logLevel": 12,\n    "updateInterval": 30\n  },\n  "homeScreen": {\n    "mode": 0,\n    "homeDocument": {\n      "url": "",\n      "icons": [\n        "table_of_contents",\n        "bookmarks",\n        "reset",\n        "filters",\n        "comments",\n        "share"\n      ],\n      "toolbarMode": 0,\n      "toolbarEnabled": true\n    },\n    "homeLibrary": {\n      "contentBundleIds": [],\n      "icons": [\n        "sidebars",\n        "sort_and_filter",\n        "search",\n        "notifications",\n        "multi_select",\n        "options"\n      ],\n      "customizedItems": {\n        "my_content": true,\n        "subscriptions": true,\n        "new_dossier": true,\n        "edit_dossier": true,\n        "add_library_server": true,\n        "data_search": true,\n        "hyper_intelligence": true,\n        "font_size": true,\n        "undo_and_redo": true\n      },\n      "toolbarMode": 0,\n      "sidebars": [\n        "all",\n        "favorites",\n        "recents",\n        "default_groups",\n        "my_groups",\n        "options"\n      ],\n      "toolbarEnabled": true,\n      "defaultGroupsName": "Default Groups"\n    }\n  },\n  "platforms": [\n    "mobile",\n    "web",\n    "desktop"\n  ],\n  "applicationPalettes": [],\n  "isDefault": false\n}\'\n')),(0,i.kt)("p",null,"Sample Response Body: N/A"),(0,i.kt)("p",null,"Sample Response Code: 204 (The application has been updated successfully.)"),(0,i.kt)("h2",{id:"delete-an-existing-application"},"Delete an existing application"),(0,i.kt)("p",null,"We can also delete the application created above whose id is ",(0,i.kt)("inlineCode",{parentName:"p"},"856F5276290944F48FCF34DF4AC9737C"),"."),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Applications/removeApplication"},"DELETE /api/v2/applications/{id}")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "dol2gdrd2297743v8kush3nd1e"\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'DELETE' \\\n  'http://demo.microstrategy.com/MicroStrategyLibrary/api/v2/applications/856F5276290944F48FCF34DF4AC9737C' \\\n  -H 'accept: */*' \\\n  -H 'X-MSTR-AuthToken: dol2gdrd2297743v8kush3nd1e'\n")),(0,i.kt)("p",null,"Sample Response Body: N/A"),(0,i.kt)("p",null,"Sample Response Code: 204 (The application has been deleted successfully.)"),(0,i.kt)("h2",{id:"get-application-list"},"Get application list"),(0,i.kt)("p",null,"We can get all existing applications."),(0,i.kt)("p",null,"Endpoint: ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Applications/getApplications"},"GET /api/v2/applications")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "dol2gdrd2297743v8kush3nd1e"\n')),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'GET' \\\n'http://10.27.69.39:8080/MicroStrategyLibrary/api/v2/applications' \\\n-H 'accept: application/json' \\\n-H 'X-MSTR-AuthToken: dol2gdrd2297743v8kush3nd1e'\n")),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "applications": [\n    {\n      "id": "BEAA91CE8C854AC6A2C580CF283E0C99",\n      "projectId": "38A062302D4411D28E71006008960167",\n      "name": "Copy of haoxu_1012_4",\n      "description": "123111111aaaqqq",\n      "type": 78,\n      "dateCreated": "2022-10-17T11:20:07.291+0000",\n      "dateModified": "2022-10-17T11:23:44.096+0000",\n      "objectVersion": "BE40BA334A68A54CDDA25FB3EA943B22",\n      "ownerId": "E01FC9A147ED7FEAECF113ABB26AB83B",\n      "parentObjectId": "4B979645463C14EF5A32EF8A032C9AC1",\n      "parentId": "4B979645463C14EF5A32EF8A032C9AC1",\n      "general": {\n        "disableAdvancedSettings": false,\n        "disablePreferences": false,\n        "networkTimeout": 180,\n        "cacheClearMode": 1,\n        "clearCacheOnLogout": false,\n        "maxLogSize": 500,\n        "logLevel": 12,\n        "updateInterval": 30\n      },\n      "homeScreen": {\n        "mode": 0,\n        "homeDocument": {\n          "url": "",\n          "icons": ["table_of_contents", "bookmarks", "reset", "filters", "comments", "share"],\n          "toolbarMode": 0,\n          "toolbarEnabled": true\n        },\n        "homeLibrary": {\n          "contentBundleIds": [],\n          "icons": [\n            "sidebars",\n            "sort_and_filter",\n            "search",\n            "notifications",\n            "multi_select",\n            "options"\n          ],\n          "customizedItems": {\n            "my_content": true,\n            "subscriptions": true,\n            "new_dossier": true,\n            "edit_dossier": true,\n            "add_library_server": true,\n            "data_search": true,\n            "hyper_intelligence": true,\n            "font_size": true,\n            "undo_and_redo": true\n          },\n          "toolbarMode": 0,\n          "sidebars": ["all", "favorites", "recents", "default_groups", "my_groups", "options"],\n          "toolbarEnabled": true,\n          "defaultGroupsName": "Default Groups"\n        }\n      },\n      "platforms": ["mobile", "web", "desktop"],\n      "applicationPalettes": [],\n      "isDefault": false,\n      "emailSettings": {\n        "enabled": true,\n        "hostPortal": "",\n        "showBrandingImage": true,\n        "showBrowserButton": true,\n        "showMobileButton": true,\n        "showReminder": true,\n        "showSentBy": true,\n        "sentByText": "&lt;h1&gt;123&lt;/h1&gt;&lt;br&gt;",\n        "showSocialMedia": false\n      }\n    },\n\n    {\n      "id": "81F38D0F62994E35A4AD016B4931B511",\n      "projectId": "38A062302D4411D28E71006008960167",\n      "name": "Smit_test1",\n      "type": 78,\n      "dateCreated": "2022-08-18T14:39:23.769+0000",\n      "dateModified": "2022-08-29T08:30:52.832+0000",\n      "objectVersion": "EFDCCFFA4800970D8DA89EB961C6F9B9",\n      "ownerId": "AD96A895446E227989BDCEBCEBFD57B5",\n      "parentObjectId": "4B979645463C14EF5A32EF8A032C9AC1",\n      "parentId": "4B979645463C14EF5A32EF8A032C9AC1",\n      "general": {\n        "disableAdvancedSettings": false,\n        "disablePreferences": false,\n        "networkTimeout": 180,\n        "cacheClearMode": 1,\n        "clearCacheOnLogout": false,\n        "maxLogSize": 500,\n        "logLevel": 12,\n        "updateInterval": 30\n      },\n      "homeScreen": {\n        "mode": 0,\n        "homeDocument": {\n          "url": "",\n          "icons": ["table_of_contents", "bookmarks", "reset", "filters", "comments", "share"],\n          "toolbarMode": 0,\n          "toolbarEnabled": true\n        },\n        "homeLibrary": {\n          "contentBundleIds": [],\n          "icons": [\n            "sidebars",\n            "sort_and_filter",\n            "search",\n            "notifications",\n            "multi_select",\n            "options"\n          ],\n          "customizedItems": {\n            "my_content": true,\n            "subscriptions": true,\n            "new_dossier": true,\n            "edit_dossier": true,\n            "add_library_server": true,\n            "data_search": true,\n            "hyper_intelligence": true,\n            "font_size": true,\n            "undo_and_redo": true,\n            "insights": true\n          },\n          "toolbarMode": 0,\n          "sidebars": ["all", "favorites", "recents", "default_groups", "my_groups", "options"],\n          "toolbarEnabled": true,\n          "defaultGroupsName": "Default Groups"\n        }\n      },\n      "platforms": ["mobile", "web", "desktop"],\n      "applicationPalettes": [],\n      "isDefault": false,\n      "emailSettings": {\n        "enabled": true,\n        "hostPortal": "",\n        "showBrandingImage": true,\n        "showBrowserButton": true,\n        "showMobileButton": true,\n        "showReminder": true,\n        "showSentBy": true,\n        "sentByText": "Smit",\n        "showSocialMedia": true\n      }\n    },\n    {\n      "id": "6EA250C2E0AA446FB1DC4154AC91C7B1",\n      "projectId": "38A062302D4411D28E71006008960167",\n      "name": "zzhou_1018_disabled",\n      "type": 78,\n      "dateCreated": "2022-10-18T04:03:01.107+0000",\n      "dateModified": "2022-10-18T04:03:01.107+0000",\n      "objectVersion": "5C159F894EAB7F0F1457E8997ACE514F",\n      "ownerId": "6B8437A34B2A2BB16FA0BE815D9B2127",\n      "parentObjectId": "4B979645463C14EF5A32EF8A032C9AC1",\n      "parentId": "4B979645463C14EF5A32EF8A032C9AC1",\n      "general": {\n        "disableAdvancedSettings": false,\n        "disablePreferences": false,\n        "networkTimeout": 180,\n        "cacheClearMode": 1,\n        "clearCacheOnLogout": false,\n        "maxLogSize": 500,\n        "logLevel": 12,\n        "updateInterval": 30\n      },\n      "homeScreen": {\n        "mode": 0,\n        "homeDocument": {\n          "url": "",\n          "icons": ["table_of_contents", "bookmarks", "reset", "filters", "comments", "share"],\n          "toolbarMode": 0,\n          "toolbarEnabled": true\n        },\n        "homeLibrary": {\n          "contentBundleIds": [],\n          "icons": [\n            "sidebars",\n            "sort_and_filter",\n            "search",\n            "notifications",\n            "multi_select",\n            "options"\n          ],\n          "customizedItems": {\n            "my_content": true,\n            "subscriptions": true,\n            "new_dossier": true,\n            "edit_dossier": true,\n            "add_library_server": true,\n            "data_search": true,\n            "hyper_intelligence": true,\n            "font_size": true,\n            "undo_and_redo": true,\n            "insights": true\n          },\n          "toolbarMode": 0,\n          "sidebars": ["all", "favorites", "recents", "default_groups", "my_groups", "options"],\n          "toolbarEnabled": true,\n          "defaultGroupsName": "Default Groups"\n        }\n      },\n      "platforms": ["mobile", "web", "desktop"],\n      "applicationPalettes": [],\n      "isDefault": false,\n      "emailSettings": {\n        "enabled": false,\n        "hostPortal": "",\n        "showBrandingImage": true,\n        "showBrowserButton": true,\n        "showMobileButton": true,\n        "showReminder": true,\n        "showSentBy": true,\n        "sentByText": "MicroStrategy Inc.",\n        "showSocialMedia": true\n      }\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Sample Response Code: 200"))}b.isMDXComponent=!0}}]);