"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5193],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),m=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=m(t),d=o,b=u["".concat(l,".").concat(d)]||u[d]||c[d]||i;return t?a.createElement(b,r(r({ref:n},p),{},{components:t})):a.createElement(b,r({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var m=2;m<i;m++)r[m]=t[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},43586:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a,o=t(83117),i=t(80102),r=(t(67294),t(3905)),s=["components"],l={title:"Manage application customized emails",description:"You can use REST APIs to manage the customized emails in application."},m=void 0,p={unversionedId:"common-workflows/administration/manage-application-objects/manage-application-customized-emails",id:"common-workflows/administration/manage-application-objects/manage-application-customized-emails",title:"Manage application customized emails",description:"You can use REST APIs to manage the customized emails in application.",source:"@site/docs/common-workflows/administration/manage-application-objects/manage-application-customized-emails.md",sourceDirName:"common-workflows/administration/manage-application-objects",slug:"/common-workflows/administration/manage-application-objects/manage-application-customized-emails",permalink:"/rest-api-docs/common-workflows/administration/manage-application-objects/manage-application-customized-emails",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/manage-application-objects/manage-application-customized-emails.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1695919031,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{title:"Manage application customized emails",description:"You can use REST APIs to manage the customized emails in application."},sidebar:"tutorialSidebar",previous:{title:"Manage application general settings",permalink:"/rest-api-docs/common-workflows/administration/manage-application-objects/manage-application-general-settings"},next:{title:"Manage application themes",permalink:"/rest-api-docs/common-workflows/administration/manage-application-objects/manage-application-themes"}},c={},u=[{value:"Create an application with customized email",id:"create-an-application-with-customized-email",level:2},{value:"Update the customized email setting for an existing application",id:"update-the-customized-email-setting-for-an-existing-application",level:2}],d=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)}),b={toc:u};function h(e){var n=e.components,t=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(d,{since:"2021 Update 8",mdxType:"Available"}),(0,r.kt)("p",null,"You can use REST APIs to manage the customized emails in application."),(0,r.kt)("p",null,"In this sample workflow, we want to create an application with customized email and then change the email setting."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html#DssXmlPrivilegesManageApplication"},"DssXmlPrivilegesManageApplication")," privilege is required to manage application customized emails.")),(0,r.kt)("h2",{id:"create-an-application-with-customized-email"},"Create an application with customized email"),(0,r.kt)("p",null,"The following table lists important fields in the email settings."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Location"),(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"header"),(0,r.kt)("td",{parentName:"tr",align:null},"X-MSTR-AuthToken"),(0,r.kt)("td",{parentName:"tr",align:null},"The authorization token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"emailSettings.enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to enable the customized email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"emailSettings.hostPortal"),(0,r.kt)("td",{parentName:"tr",align:null},"In a client application that embeds a dossier page, if you want the share link in the embedded dossier page to be the client application URL instead of the embedded dossier URL, you need to configure this field. More details could be found ",(0,r.kt)("a",{parentName:"td",href:"https://microstrategy.github.io/embedding-sdk-docs/add-functionality/use-custom-dossier-link/"},"here"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"emailSettings.content"),(0,r.kt)("td",{parentName:"tr",align:null},"The customized email content for different templates. The content for both subject and body should be the plain text. Some placeholders like dossier name, sender name, recipient name are supported.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"emailSettings.sender"),(0,r.kt)("td",{parentName:"tr",align:null},"The sender info which can specify the display name and address in the distribution email.")))),(0,r.kt)("p",null,"Let's create an application with the customized email for company A. The email will contain the customized subject, body, sender info, branding image, host web portal, action buttons with different styles, and social media area. Make sure the ",(0,r.kt)("inlineCode",{parentName:"p"},"enabled")," field is true, otherwise the original email templates will be used."),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Applications/createApplication_1"},"POST /api/v2/applications")),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "hkr5bl7itn13hs5ml5dbaufs73"\n')),(0,r.kt)("p",null,"Sample Request Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Application for Company A",\n  "description": "This is the application for the Company A.",\n  "objectNames": [],\n  "objectAcl": [],\n  "general": {\n    "disableAdvancedSettings": false,\n    "disablePreferences": false,\n    "networkTimeout": 180,\n    "cacheClearMode": 1,\n    "clearCacheOnLogout": false,\n    "maxLogSize": 500,\n    "logLevel": 12,\n    "updateInterval": 30\n  },\n  "homeScreen": {\n    "mode": 0,\n    "homeDocument": {\n      "url": "",\n      "icons": ["table_of_contents", "bookmarks", "reset", "filters", "comments", "share"],\n      "toolbarMode": 0,\n      "toolbarEnabled": true\n    },\n    "homeLibrary": {\n      "contentBundleIds": [],\n      "icons": [\n        "sidebars",\n        "sort_and_filter",\n        "search",\n        "notifications",\n        "multi_select",\n        "options"\n      ],\n      "customizedItems": {\n        "my_content": true,\n        "subscriptions": true,\n        "new_dossier": true,\n        "edit_dossier": true,\n        "add_library_server": true,\n        "data_search": true,\n        "hyper_intelligence": true,\n        "font_size": true,\n        "undo_and_redo": true\n      },\n      "toolbarMode": 0,\n      "sidebars": ["all", "favorites", "recents", "default_groups", "my_groups", "options"],\n      "toolbarEnabled": true,\n      "defaultGroupsName": "Default Groups"\n    }\n  },\n  "emailSettings": {\n    "enabled": true,\n    "hostPortal": "http://host-portal-of-company-A.com",\n    "showBrandingImage": true,\n    "showBrowserButton": true,\n    "showMobileButton": true,\n    "showButtonDescription": false,\n    "showReminder": true,\n    "showSentBy": true,\n    "sentByText": "Sent By Company A",\n    "showSocialMedia": true,\n    "content": {\n      "SHARE_BOOKMARK": {\n        "subject": "Custom SHARE_BOOKMARK subject. DossierName={&DossierName} ",\n        "body": "Custom SHARE_BOOKMARK body. RecipientName={&RecipientName}, SenderName={&SenderName} BookmarkCount={&BookmarkCount}"\n      },\n      "USER_MENTION": {\n        "subject": "Custom USER_MENTION subject. DossierName={&DossierName} ",\n        "body": "Custom USER_MENTION body. RecipientName={&RecipientName}, SenderName={&SenderName} MentionTarget={&MentionTarget}"\n      },\n      "SHARE_DOSSIER": {\n        "subject": "Custom SHARE_DOSSIER subject. DossierName={&DossierName} ",\n        "body": "Custom SHARE_DOSSIER body. RecipientName={&RecipientName}, SenderName={&SenderName} BookmarkCount={&BookmarkCount}"\n      },\n      "MEMBER_ADDED": {\n        "subject": "Custom MEMBER_ADDED subject.",\n        "body": "Custom MEMBER_ADDED body. RecipientName={&RecipientName}, SenderName={&SenderName}"\n      }\n    },\n    "sender": {\n      "displayName": "Company A",\n      "address": "email_service@company-a.com"\n    },\n    "brandingImage": {\n      "url": "https://company-A.com/logo.png"\n    },\n    "button": {\n      "browserButtonStyle": {\n        "backgroundColor": "#198556",\n        "fontColor": "#FFFFFF",\n        "text": "Custom button1"\n      },\n      "mobileButtonStyle": {\n        "backgroundColor": "#198556",\n        "fontColor": "#FFFFFF",\n        "text": "Custom button2"\n      },\n      "mobileButtonLinkType": "DEFAULT",\n      "description": "Custom button description"\n    },\n    "reminder": {\n      "text": "Custom Reminder Text. NewNotificationCount={&NewNotificationCount}",\n      "linkText": "View Custom Link"\n    },\n    "socialMedia": {\n      "showFacebook": true,\n      "facebookLink": "companyA",\n      "showTwitter": false,\n      "showLinkedIn": false,\n      "showYouTube": false\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X \'POST\' \\\n  \'https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/applications\' \\\n  -H \'accept: */*\' \\\n  -H \'X-MSTR-AuthToken: hkr5bl7itn13hs5ml5dbaufs73\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "name": "Application for Company A",\n    "description": "This is the application for the Company A.",\n    "objectNames": [],\n    "objectAcl": [],\n    "general": {\n        "disableAdvancedSettings": false,\n        "disablePreferences": false,\n        "networkTimeout": 180,\n        "cacheClearMode": 1,\n        "clearCacheOnLogout": false,\n        "maxLogSize": 500,\n        "logLevel": 12,\n        "updateInterval": 30\n    },\n    "homeScreen": {\n        "mode": 0,\n        "homeDocument": {\n            "url": "",\n            "icons": [\n                "table_of_contents",\n                "bookmarks",\n                "reset",\n                "filters",\n                "comments",\n                "share"\n            ],\n            "toolbarMode": 0,\n            "toolbarEnabled": true\n        },\n        "homeLibrary": {\n            "contentBundleIds": [],\n            "icons": [\n                "sidebars",\n                "sort_and_filter",\n                "search",\n                "notifications",\n                "multi_select",\n                "options"\n            ],\n            "customizedItems": {\n                "my_content": true,\n                "subscriptions": true,\n                "new_dossier": true,\n                "edit_dossier": true,\n                "add_library_server": true,\n                "data_search": true,\n                "hyper_intelligence": true,\n                "font_size": true,\n                "undo_and_redo": true\n            },\n            "toolbarMode": 0,\n            "sidebars": [\n                "all",\n                "favorites",\n                "recents",\n                "default_groups",\n                "my_groups",\n                "options"\n            ],\n            "toolbarEnabled": true,\n            "defaultGroupsName": "Default Groups"\n        }\n    },\n    "emailSettings": {\n        "enabled": true,\n        "hostPortal": "http://host-portal-of-company-A.com",\n        "showBrandingImage": true,\n        "showBrowserButton": true,\n        "showMobileButton": true,\n        "showButtonDescription": false,\n        "showReminder": true,\n        "showSentBy": true,\n        "sentByText": "Sent By Company A",\n        "showSocialMedia": true,\n        "content": {\n            "SHARE_BOOKMARK": {\n                "subject": "Custom SHARE_BOOKMARK subject. DossierName={&DossierName} ",\n                "body": "Custom SHARE_BOOKMARK body. RecipientName={&RecipientName}, SenderName={&SenderName} BookmarkCount={&BookmarkCount}"\n            },\n            "USER_MENTION": {\n    "subject": "Custom USER_MENTION subject. DossierName={&DossierName} ",\n                "body": "Custom USER_MENTION body. RecipientName={&RecipientName}, SenderName={&SenderName} MentionTarget={&MentionTarget}"\n            },\n   "SHARE_DOSSIER": {\n    "subject": "Custom SHARE_DOSSIER subject. DossierName={&DossierName} ",\n                "body": "Custom SHARE_DOSSIER body. RecipientName={&RecipientName}, SenderName={&SenderName} BookmarkCount={&BookmarkCount}"\n            },\n   "MEMBER_ADDED": {\n    "subject": "Custom MEMBER_ADDED subject.",\n                "body": "Custom MEMBER_ADDED body. RecipientName={&RecipientName}, SenderName={&SenderName}"\n            }\n        },\n        "sender": {\n            "displayName": "Company A",\n            "address": "email_service@company-a.com"\n        },\n        "brandingImage": {\n            "url": "https://company-A.com/logo.png"\n        },\n        "button": {\n            "browserButtonStyle": {\n                "backgroundColor": "#198556",\n                "fontColor": "#FFFFFF",\n                "text": "Custom button1"\n            },\n            "mobileButtonStyle": {\n                "backgroundColor": "#198556",\n                "fontColor": "#FFFFFF",\n                "text": "Custom button2"\n            },\n            "mobileButtonLinkType": "DEFAULT",\n            "description": "Custom button description"\n        },\n        "reminder": {\n            "text": "Custom Reminder Text. NewNotificationCount={&NewNotificationCount}",\n            "linkText": "View Custom Link"\n        },\n        "socialMedia": {\n            "showFacebook": true,\n            "facebookLink": "companyA",\n            "showTwitter": false,\n            "showLinkedIn": false,\n            "showYouTube": false\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"Sample Response Body: N/A"),(0,r.kt)("p",null,"Sample Response Code: 204 (The application has been created successfully.)"),(0,r.kt)("h2",{id:"update-the-customized-email-setting-for-an-existing-application"},"Update the customized email setting for an existing application"),(0,r.kt)("p",null,"Next, we want to update the application with id ",(0,r.kt)("inlineCode",{parentName:"p"},"EAF29916C4E147CCAD976C6AB6F12632")," to hide the branding info in the distribution email. Specifically, we will hide the branding image, send by section, and the social media area. Note that all other fields in the application should be sent, otherwise they will be set to empty. You could use the endpoint ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Applications/getApplication_1"},"GET /api/v2/applications/{id}")," with the output flag for the whole definition of this application. Refer to ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/administration/manage-application-objects/manage-application-general-settings#update-an-existing-application"},"update an existing application")," for details."),(0,r.kt)("p",null,"Endpoint: ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Applications/updateApplication"},"PUT /api/v2/applications/{id}")),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "hkr5bl7itn13hs5ml5dbaufs73"\n')),(0,r.kt)("p",null,"Sample Request Body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Application for Company A",\n  "description": "This is the application for the Company A.",\n  "type": 78,\n  "dateCreated": "2022-11-23T08:33:01.438+0000",\n  "dateModified": "2022-11-23T08:33:01.438+0000",\n  "objectVersion": "045406B843595EFF1CF08AB05B7BEA97",\n  "ownerId": "54F3D26011D2896560009A8E67019608",\n  "objectNames": [\n    {\n      "localeId": 1033,\n      "name": "Application for Company A",\n      "description": "This is the application for the Company A."\n    }\n  ],\n  "parentObjectId": "4B979645463C14EF5A32EF8A032C9AC1",\n  "parentId": "4B979645463C14EF5A32EF8A032C9AC1",\n  "objectAcl": [\n    {\n      "deny": false,\n      "inheritable": false,\n      "rights": 255,\n      "type": 1,\n      "trustee": "54F3D26011D2896560009A8E67019608"\n    },\n    {\n      "deny": false,\n      "inheritable": false,\n      "rights": 5,\n      "type": 1,\n      "trustee": "294DEDC011D2F1D56000D98E67019608"\n    },\n    {\n      "deny": false,\n      "inheritable": false,\n      "rights": 5,\n      "type": 1,\n      "trustee": "4FF5121411D49BC8C00014894C78604F"\n    },\n    {\n      "deny": false,\n      "inheritable": false,\n      "rights": 5,\n      "type": 1,\n      "trustee": "5F3FAFE011D2D8CC6000CC8E67019608"\n    },\n    {\n      "deny": false,\n      "inheritable": false,\n      "rights": 5,\n      "type": 1,\n      "trustee": "C82C6B1011D2894CC0009D9F29718E4F"\n    },\n    {\n      "deny": false,\n      "inheritable": false,\n      "rights": 255,\n      "type": 1,\n      "trustee": "5F3FAFE111D2D8CC6000CC8E67019608"\n    }\n  ],\n  "general": {\n    "disableAdvancedSettings": false,\n    "disablePreferences": false,\n    "networkTimeout": 180,\n    "cacheClearMode": 1,\n    "clearCacheOnLogout": false,\n    "maxLogSize": 500,\n    "logLevel": 12,\n    "updateInterval": 30\n  },\n  "homeScreen": {\n    "mode": 0,\n    "homeDocument": {\n      "url": "",\n      "icons": ["table_of_contents", "bookmarks", "reset", "filters", "comments", "share"],\n      "toolbarMode": 0,\n      "toolbarEnabled": true\n    },\n    "homeLibrary": {\n      "contentBundleIds": [],\n      "icons": [\n        "sidebars",\n        "sort_and_filter",\n        "search",\n        "notifications",\n        "multi_select",\n        "options"\n      ],\n      "customizedItems": {\n        "my_content": true,\n        "subscriptions": true,\n        "new_dossier": true,\n        "edit_dossier": true,\n        "add_library_server": true,\n        "data_search": true,\n        "hyper_intelligence": true,\n        "font_size": true,\n        "undo_and_redo": true\n      },\n      "toolbarMode": 0,\n      "sidebars": ["all", "favorites", "recents", "default_groups", "my_groups", "options"],\n      "toolbarEnabled": true,\n      "defaultGroupsName": "Default Groups"\n    }\n  },\n  "applicationPalettes": [],\n  "emailSettings": {\n    "enabled": true,\n    "showBrandingImage": false,\n    "showBrowserButton": true,\n    "showMobileButton": true,\n    "showButtonDescription": false,\n    "showReminder": true,\n    "showSentBy": false,\n    "showSocialMedia": false,\n    "content": {\n      "SHARE_BOOKMARK": {\n        "subject": "Custom SHARE_BOOKMARK subject. DossierName={&amp;DossierName} ",\n        "body": "Custom SHARE_BOOKMARK body. RecipientName={&amp;RecipientName}, SenderName={&amp;SenderName} BookmarkCount={&amp;BookmarkCount}"\n      },\n      "USER_MENTION": {\n        "subject": "Custom USER_MENTION subject. DossierName={&amp;DossierName} ",\n        "body": "Custom USER_MENTION body. RecipientName={&amp;RecipientName}, SenderName={&amp;SenderName} MentionTarget={&amp;MentionTarget}"\n      },\n      "SHARE_DOSSIER": {\n        "subject": "Custom SHARE_DOSSIER subject. DossierName={&amp;DossierName} ",\n        "body": "Custom SHARE_DOSSIER body. RecipientName={&amp;RecipientName}, SenderName={&amp;SenderName} BookmarkCount={&amp;BookmarkCount}"\n      },\n      "MEMBER_ADDED": {\n        "subject": "Custom MEMBER_ADDED subject.",\n        "body": "Custom MEMBER_ADDED body. RecipientName={&amp;RecipientName}, SenderName={&amp;SenderName}"\n      }\n    },\n    "sender": {\n      "displayName": "Company A",\n      "address": "email_service@company-a.com"\n    },\n    "button": {\n      "browserButtonStyle": {\n        "backgroundColor": "#198556",\n        "fontColor": "#FFFFFF",\n        "text": "Custom button1"\n      },\n      "mobileButtonStyle": {\n        "backgroundColor": "#198556",\n        "fontColor": "#FFFFFF",\n        "text": "Custom button2"\n      },\n      "mobileButtonLinkType": "DEFAULT",\n      "description": "Custom button description"\n    },\n    "reminder": {\n      "text": "Custom Reminder Text. NewNotificationCount={&amp;NewNotificationCount}",\n      "linkText": "View Custom Link"\n    },\n    "socialMedia": {\n      "showFacebook": false,\n      "showTwitter": false,\n      "showLinkedIn": false,\n      "showYouTube": false\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X \'PUT\' \\\n  \'https://demo.microstrategy.com/MicroStrategyLibrary/api/v2/applications/EAF29916C4E147CCAD976C6AB6F12632\' \\\n  -H \'accept: */*\' \\\n  -H \'X-MSTR-AuthToken: hkr5bl7itn13hs5ml5dbaufs73\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "name": "Application for Company A",\n  "description": "This is the application for the Company A.",\n  "type": 78,\n  "dateCreated": "2022-11-23T08:33:01.438+0000",\n  "dateModified": "2022-11-23T08:33:01.438+0000",\n  "objectVersion": "045406B843595EFF1CF08AB05B7BEA97",\n  "ownerId": "54F3D26011D2896560009A8E67019608",\n  "objectNames": [\n    {\n      "localeId": 1033,\n      "name": "Application for Company A",\n      "description": "This is the application for the Company A."\n    }\n  ],\n  "parentObjectId": "4B979645463C14EF5A32EF8A032C9AC1",\n  "parentId": "4B979645463C14EF5A32EF8A032C9AC1",\n  "objectAcl": [\n    {\n      "deny": false,\n      "inheritable": false,\n      "rights": 255,\n      "type": 1,\n      "trustee": "54F3D26011D2896560009A8E67019608"\n    },\n    {\n      "deny": false,\n      "inheritable": false,\n      "rights": 5,\n      "type": 1,\n      "trustee": "294DEDC011D2F1D56000D98E67019608"\n    },\n    {\n      "deny": false,\n      "inheritable": false,\n      "rights": 5,\n      "type": 1,\n      "trustee": "4FF5121411D49BC8C00014894C78604F"\n    },\n    {\n      "deny": false,\n      "inheritable": false,\n      "rights": 5,\n      "type": 1,\n      "trustee": "5F3FAFE011D2D8CC6000CC8E67019608"\n    },\n    {\n      "deny": false,\n      "inheritable": false,\n      "rights": 5,\n      "type": 1,\n      "trustee": "C82C6B1011D2894CC0009D9F29718E4F"\n    },\n    {\n      "deny": false,\n      "inheritable": false,\n      "rights": 255,\n      "type": 1,\n      "trustee": "5F3FAFE111D2D8CC6000CC8E67019608"\n    }\n  ],\n  "general": {\n    "disableAdvancedSettings": false,\n    "disablePreferences": false,\n    "networkTimeout": 180,\n    "cacheClearMode": 1,\n    "clearCacheOnLogout": false,\n    "maxLogSize": 500,\n    "logLevel": 12,\n    "updateInterval": 30\n  },\n  "homeScreen": {\n    "mode": 0,\n    "homeDocument": {\n      "url": "",\n      "icons": [\n        "table_of_contents",\n        "bookmarks",\n        "reset",\n        "filters",\n        "comments",\n        "share"\n      ],\n      "toolbarMode": 0,\n      "toolbarEnabled": true\n    },\n    "homeLibrary": {\n      "contentBundleIds": [],\n      "icons": [\n        "sidebars",\n        "sort_and_filter",\n        "search",\n        "notifications",\n        "multi_select",\n        "options"\n      ],\n      "customizedItems": {\n        "my_content": true,\n        "subscriptions": true,\n        "new_dossier": true,\n        "edit_dossier": true,\n        "add_library_server": true,\n        "data_search": true,\n        "hyper_intelligence": true,\n        "font_size": true,\n        "undo_and_redo": true\n      },\n      "toolbarMode": 0,\n      "sidebars": [\n        "all",\n        "favorites",\n        "recents",\n        "default_groups",\n        "my_groups",\n        "options"\n      ],\n      "toolbarEnabled": true,\n      "defaultGroupsName": "Default Groups"\n    }\n  },\n  "applicationPalettes": [],\n  "emailSettings": {\n    "enabled": true,\n    "showBrandingImage": false,\n    "showBrowserButton": true,\n    "showMobileButton": true,\n    "showButtonDescription": false,\n    "showReminder": true,\n    "showSentBy": false,\n    "showSocialMedia": false,\n    "content": {\n      "SHARE_BOOKMARK": {\n        "subject": "Custom SHARE_BOOKMARK subject. DossierName={&amp;DossierName} ",\n        "body": "Custom SHARE_BOOKMARK body. RecipientName={&amp;RecipientName}, SenderName={&amp;SenderName} BookmarkCount={&amp;BookmarkCount}"\n      },\n      "USER_MENTION": {\n        "subject": "Custom USER_MENTION subject. DossierName={&amp;DossierName} ",\n        "body": "Custom USER_MENTION body. RecipientName={&amp;RecipientName}, SenderName={&amp;SenderName} MentionTarget={&amp;MentionTarget}"\n      },\n      "SHARE_DOSSIER": {\n        "subject": "Custom SHARE_DOSSIER subject. DossierName={&amp;DossierName} ",\n        "body": "Custom SHARE_DOSSIER body. RecipientName={&amp;RecipientName}, SenderName={&amp;SenderName} BookmarkCount={&amp;BookmarkCount}"\n      },\n      "MEMBER_ADDED": {\n        "subject": "Custom MEMBER_ADDED subject.",\n        "body": "Custom MEMBER_ADDED body. RecipientName={&amp;RecipientName}, SenderName={&amp;SenderName}"\n      }\n    },\n    "sender": {\n      "displayName": "Company A",\n      "address": "email_service@company-a.com"\n    },\n    "button": {\n      "browserButtonStyle": {\n        "backgroundColor": "#198556",\n        "fontColor": "#FFFFFF",\n        "text": "Custom button1"\n      },\n      "mobileButtonStyle": {\n        "backgroundColor": "#198556",\n        "fontColor": "#FFFFFF",\n        "text": "Custom button2"\n      },\n      "mobileButtonLinkType": "DEFAULT",\n      "description": "Custom button description"\n    },\n    "reminder": {\n      "text": "Custom Reminder Text. NewNotificationCount={&amp;NewNotificationCount}",\n      "linkText": "View Custom Link"\n    },\n    "socialMedia": {\n      "showFacebook": false,\n      "showTwitter": false,\n      "showLinkedIn": false,\n      "showYouTube": false\n    }\n  }\n}\'\n')),(0,r.kt)("p",null,"Sample Response Body: N/A"),(0,r.kt)("p",null,"Sample Response Code: 204 (The application has been updated successfully.)"))}h.isMDXComponent=!0}}]);