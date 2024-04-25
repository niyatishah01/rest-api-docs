"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[160],{10987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(74848),o=n(28453);const a={title:"Retrieve object's translations",sidebar_label:"Retrieve object's translations",description:"This topic covers workflow for retrieving object's translations."},s=void 0,i={id:"common-workflows/modeling/common-object-management/manage-object-translations/retrieve-object-translations",title:"Retrieve object's translations",description:"This topic covers workflow for retrieving object's translations.",source:"@site/docs/common-workflows/modeling/common-object-management/manage-object-translations/retrieve-object-translations.md",sourceDirName:"common-workflows/modeling/common-object-management/manage-object-translations",slug:"/common-workflows/modeling/common-object-management/manage-object-translations/retrieve-object-translations",permalink:"/rest-api-docs/common-workflows/modeling/common-object-management/manage-object-translations/retrieve-object-translations",draft:!1,unlisted:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/common-object-management/manage-object-translations/retrieve-object-translations.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1714063612,formattedLastUpdatedAt:"Apr 25, 2024",frontMatter:{title:"Retrieve object's translations",sidebar_label:"Retrieve object's translations",description:"This topic covers workflow for retrieving object's translations."},sidebar:"tutorialSidebar",previous:{title:"Manage object's translations",permalink:"/rest-api-docs/common-workflows/modeling/common-object-management/manage-object-translations/"},next:{title:"Remove and add object's translations",permalink:"/rest-api-docs/common-workflows/modeling/common-object-management/manage-object-translations/remove-add-object-translations"}},c={},l=[{value:"Retrieve object&#39;s translations",id:"retrieve-objects-translations",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This topic covers workflow for retrieving object's translations."}),"\n",(0,r.jsxs)(t.p,{children:["Endpoint: ",(0,r.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Object%20Management/getObjectsTranslation",children:"GET /api/objects/{type}/{id}/translations"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"The response can change based on the request parameters provided by the caller. Use the following parameters:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Location"}),(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"header"}),(0,r.jsx)(t.td,{children:"X-MSTR-AuthToken"}),(0,r.jsx)(t.td,{children:"The authorization token"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"header"}),(0,r.jsx)(t.td,{children:"X-MSTR-ProjectID"}),(0,r.jsx)(t.td,{children:"The ID of the project"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"path"}),(0,r.jsx)(t.td,{children:"objectId"}),(0,r.jsx)(t.td,{children:"Id of an object"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"path"}),(0,r.jsx)(t.td,{children:"type"}),(0,r.jsx)(t.td,{children:"type of an object"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Prepare necessary info in order to perform GET operation"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Get the authorization token needed to execute the request with ",(0,r.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin",children:"POST /api/auth/login"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Get the project ID from ",(0,r.jsx)(t.a,{href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1",children:"GET /api/projects"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Identify the object type from ",(0,r.jsx)(t.a,{href:"https://www2.microstrategy.com/producthelp/2021/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLObjectTypes.html",children:"EnumDSSXMLObjectTypes"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"In this demo following parameter values will be used:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Project: MicroStrategy Tutorial"}),"\n",(0,r.jsxs)(t.li,{children:["Project ID: ",(0,r.jsx)(t.code,{children:"B7CA92F04B9FAE8D941C3E9B7E0CD754"})]}),"\n",(0,r.jsxs)(t.li,{children:["Object ID: ",(0,r.jsx)(t.code,{children:"BEC722A6406320A3E67DBFBAB2F033CB"})]}),"\n",(0,r.jsxs)(t.li,{children:["Object type: ",(0,r.jsx)(t.code,{children:"report_definition"})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Request URL:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-url",children:"https://demo.microstrategy.com/MicroStrategyLibrary/api/objects/report_definition/BEC722A6406320A3E67DBFBAB2F033CB/translations\n"})}),"\n",(0,r.jsx)(t.h2,{id:"retrieve-objects-translations",children:"Retrieve object's translations"}),"\n",(0,r.jsx)(t.p,{children:"Sample Curl:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/objects/report_definition/BEC722A6406320A3E67DBFBAB2F033CB/translations" -H "X-MSTR-AuthToken: db3nqj4o29vg5i747cdd2t4j38" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n'})}),"\n",(0,r.jsx)(t.p,{children:"Sample Response Body:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "defaultLanguage": "en",\n  "localesAndTranslations": {\n    "1:0:": {\n      "translationTargetName": "Object Name ",\n      "translationValues": {\n        "1028": {\n          "translation": "\u7522\u54c1\u5927\u985e\u92b7\u552e\u5831\u8868"\n        },\n        "1031": {\n          "translation": "Kategorieumsatzbericht"\n        },\n        "1033": {\n          "translation": "Category Sales Report"\n        },\n        "1036": {\n          "translation": "Rapport sur les ventes par cat\xe9gorie"\n        },\n        "1040": {\n          "translation": "Report Vendite di categoria"\n        },\n        "1041": {\n          "translation": "\u30ab\u30c6\u30b4\u30ea\u58f2\u4e0a\u30ec\u30dd\u30fc\u30c8"\n        },\n        "1042": {\n          "translation": "\ubc94\uc8fc \ub9e4\ucd9c \ub9ac\ud3ec\ud2b8"\n        },\n        "1046": {\n          "translation": "Relat\xf3rio de Vendas da Categoria"\n        },\n        "1053": {\n          "translation": "Kategorif\xf6rs\xe4ljningsrapport"\n        },\n        "2052": {\n          "translation": "\u5404\u5927\u7c7b\u5546\u54c1\u9500\u552e\u62a5\u8868"\n        },\n        "3082": {\n          "translation": "Categor\xeda Informe de ventas"\n        }\n      }\n    },\n    "1:2:": {\n      "translationTargetName": "Object Description ",\n      "translationValues": {\n        "1028": {\n          "translation": "\u8a72\u5831\u8868\u986f\u793a\u4e86\u67d0\u7279\u5b9a\u7522\u54c1\u985e\u5225\u548c\u4e2d\u985e\u6bcf\u6708\u7684\u71df\u6536\u548c\u5229\u6f64\u8cc7\u8a0a\u3002\u8a72\u5229\u606f\u7684\u7522\u54c1\u985e\u5225\u901a\u904e\u5206\u9801\u9078\u64c7\u3002"\n        },\n        "1031": {\n          "translation": "Dieser Bericht zeigt Informationen zu Einnahmen und Gewinn nach Monat f\xfcr eine bestimmte Kategorie und Subkategorie. Die Kategorie, f\xfcr die Sie sich interessieren, wird mit Page-By ausgew\xe4hlt."\n        },\n        "1033": {\n          "translation": "This report displays revenue and profit information by month for a particular category and subcategory.  The category of interest is selected via page-by."\n        },\n        "1036": {\n          "translation": "Ce rapport affiche les informations sur le chiffre d\'affaires et le profit par mois pour une certaine cat\xe9gorie et sous-cat\xe9gorie  La cat\xe9gorie qui int\xe9resse l\'utilisateur est s\xe9lectionn\xe9e via le saut de page."\n        },\n        "1040": {\n          "translation": "Questo report mostra informazioni di entrate e profitti per mese per categorie e sottocategorie particolari. La categoria di interesse viene selezionata tramite raggruppamento a pagine."\n        },\n        "1041": {\n          "translation": "\u3053\u306e\u30ec\u30dd\u30fc\u30c8\u306f\u7279\u5b9a\u306e\u30ab\u30c6\u30b4\u30ea\u3068\u30b5\u30d6\u30ab\u30c6\u30b4\u30ea\u3054\u3068\u306b\u6708\u5225\u3067\u58f2\u4e0a\u9ad8\u3068\u5229\u76ca\u60c5\u5831\u3092\u793a\u3057\u307e\u3059\u3002\u30ab\u30c6\u30b4\u30ea\u306f\u30da\u30fc\u30b8\u30d0\u30a4\u3067\u9078\u629e\u3067\u304d\u307e\u3059\u3002"\n        },\n        "1042": {\n          "translation": "\uc774 \ub9ac\ud3ec\ud2b8\ub294 \ud2b9\uc815 \ubc94\uc8fc \ubc0f \ud558\uc704 \ubc94\uc8fc\ubcc4\ub85c \uc6d4\ubcc4 \uc218\uc775 \ubc0f \uc774\uc775 \uc815\ubcf4\ub97c \ud45c\uc2dc\ud569\ub2c8\ub2e4. \uc6d0\ud558\ub294 \ubc94\uc8fc\ub294 \ud398\uc774\uc9c0-\ubc14\uc774\ub97c \ud1b5\ud574 \uc120\ud0dd\ub429\ub2c8\ub2e4."\n        },\n        "1046": {\n          "translation": "Este relat\xf3rio exibe informa\xe7\xf5es sobre a receita e o lucro mensal de categorias e subcategorias espec\xedficas.  A categoria de interesse \xe9 selecionada p\xe1gina a p\xe1gina."\n        },\n        "1053": {\n          "translation": "Denna rapport visar information om int\xe4kt och vinst per m\xe5nad f\xf6r en viss kategori och underkategori.  Kategorin av intresse v\xe4ljs genom s\xf6kning."\n        },\n        "2052": {\n          "translation": "\u8be5\u62a5\u8868\u663e\u793a\u4e86\u67d0\u7279\u5b9a\u5546\u54c1\u5927\u7c7b\u548c\u5b50\u7c7b\u6bcf\u6708\u7684\u6536\u76ca\u548c\u5229\u6da6\u4fe1\u606f\u3002\u8be5\u5229\u606f\u7684\u5546\u54c1\u5927\u7c7b\u901a\u8fc7\u5206\u9875\u9009\u62e9\u3002"\n        },\n        "3082": {\n          "translation": "Este informe muestra informaci\xf3n sobre ingresos y beneficios por mes para una categor\xeda y una subcategor\xeda determinadas.  La categor\xeda se selecciona mediante paginaci\xf3n."\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"Response Code: 200 (Object's translations returned successfully)"})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(96540);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);