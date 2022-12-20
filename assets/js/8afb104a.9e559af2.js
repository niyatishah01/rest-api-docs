"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[2755],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,h=c["".concat(m,".").concat(u)]||c[u]||d[u]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9059:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),i=["components"],l={title:"Create a datamart from a source report",description:"This workflow sample demonstrates how to create a new Datamart object from a source report through the Modeling service."},m=void 0,s={unversionedId:"common-workflows/manage-datamart-objects/create-a-datamart-from-a-source-report",id:"common-workflows/manage-datamart-objects/create-a-datamart-from-a-source-report",title:"Create a datamart from a source report",description:"This workflow sample demonstrates how to create a new Datamart object from a source report through the Modeling service.",source:"@site/docs/common-workflows/manage-datamart-objects/create-a-datamart-from-a-source-report.md",sourceDirName:"common-workflows/manage-datamart-objects",slug:"/common-workflows/manage-datamart-objects/create-a-datamart-from-a-source-report",permalink:"/rest-api-docs/common-workflows/manage-datamart-objects/create-a-datamart-from-a-source-report",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/manage-datamart-objects/create-a-datamart-from-a-source-report.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1671571075,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{title:"Create a datamart from a source report",description:"This workflow sample demonstrates how to create a new Datamart object from a source report through the Modeling service."},sidebar:"tutorialSidebar",previous:{title:"Manage datamart objects",permalink:"/rest-api-docs/common-workflows/manage-datamart-objects/"},next:{title:"Create a datamart from scratch",permalink:"/rest-api-docs/common-workflows/manage-datamart-objects/create-a-datamart-from-scratch"}},p={},d=[{value:"Create a new datamart",id:"create-a-new-datamart",level:2},{value:"The model for the definition of the datamart",id:"the-model-for-the-definition-of-the-datamart",level:2}],c={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This workflow sample demonstrates how to create a new datamart object from a source report through the Modeling service."),(0,o.kt)("p",null,"You want to create a datamart from a source report with the object ID of 0D0E80754CC1987C52F9BCB317E6941D and put the newly created datamart into the destination folder of 8A1831FF494F528D02A4A8BF5FB73459. The project ID is B7CA92F04B9FAE8D941C3E9B7E0CD754."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence Server and creates a unique authorization token for the client."),(0,o.kt)("p",{parentName:"admonition"},"Obtain the authorization token needed to execute the request using ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,o.kt)("p",{parentName:"admonition"},"Obtain the project ID from ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,o.kt)("h2",{id:"create-a-new-datamart"},"Create a new datamart"),(0,o.kt)("p",null,"Endpoint: ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datamarts/post_api_model_datamarts"},"POST /api/model/datamarts")),(0,o.kt)("p",null,"The response can change based on the request parameters provided by the caller. Use the following parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Location"),(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"header"),(0,o.kt)("td",{parentName:"tr",align:null},"X-MSTR-authToken"),(0,o.kt)("td",{parentName:"tr",align:null},"The authorization token.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"header"),(0,o.kt)("td",{parentName:"tr",align:null},"X-MSTR-ProjectID"),(0,o.kt)("td",{parentName:"tr",align:null},"The ID of the project.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"params"),(0,o.kt)("td",{parentName:"tr",align:null},"sourceReportId"),(0,o.kt)("td",{parentName:"tr",align:null},"The ID of the source report that you want to create datamart from.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"params"),(0,o.kt)("td",{parentName:"tr",align:null},"showFilterTokens"),(0,o.kt)("td",{parentName:"tr",align:null},'Specify whether the Datamart\u2019s "filter" is returned in "tokens" format, along with "text" and "tree" formats.')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"params"),(0,o.kt)("td",{parentName:"tr",align:null},"showExpressionAs"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the format in which the expressions are returned in response, applied to the expressions in a fact or attribute and custom expressions used in a filter, prompt, security filter, custom group, etc.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"params"),(0,o.kt)("td",{parentName:"tr",align:null},"showAdvancedProperties"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify whether the datamart\u2019s definition is returned with advanced properties.")))),(0,o.kt)("p",null,"To create the new datamart from existing report , you need to submit the request body with the correct information. Other fields except ",(0,o.kt)("inlineCode",{parentName:"p"},"information")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"datamartOptions")," would be ignored even if they\u2019re provided."),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"information"),", you need to provide name, destinationFolderID for the datamart you want to create."),(0,o.kt)("p",null,"Sample Request Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "destinationFolderId": "8A1831FF494F528D02A4A8BF5FB73459",\n    "name": "demo datamart"\n  },\n  "datamartOptions": {\n    "append": true,\n    "targetSource": {\n      "objectId": "05AC49F849389A20A6C9C19A3105A69B",\n      "subType": "db_role",\n      "name": "Statistics"\n    },\n    "tableName": "MD_TEST",\n    "placeholderIncluded": true,\n    "datamartProperties": {\n      "[DatamartProperties].[Create Table Post String]": {\n        "name": "Create Table Post String",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Insert SQLs]": {\n        "name": "Insert SQLs",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Maximum Execution Time]": {\n        "name": "Maximum Execution Time",\n        "value": "0",\n        "type": "int32",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Maximum Rows]": {\n        "name": "Maximum Rows",\n        "value": "65536",\n        "type": "int32",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Post SQLs]": {\n        "name": "Post SQLs",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Pre SQLs]": {\n        "name": "Pre SQLs",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Table Descriptor]": {\n        "name": "Table Descriptor",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Sample Curl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X \'POST\' \\\n  \'https://demo.microstrategy.com/MicroStrategyLibrary/api/model/datamarts?sourceReportId=0D0E80754CC1987C52F9BCB317E6941D\' \\\n  -H \'accept: application/json\' \\\n  -H \'X-MSTR-AuthToken: 20tpft1324b71ubo9emqesv5u7\' \\\n  -H \'X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "information":{\n        "destinationFolderId":"8A1831FF494F528D02A4A8BF5FB73459",\n        "name": "demo datamart"\n    },\n    "datamartOptions": {\n        "append": true,\n        "targetSource": {\n            "objectId": "05AC49F849389A20A6C9C19A3105A69B",\n            "subType": "db_role",\n            "name": "Statistics"\n        },\n        "tableName": "MD_TEST",\n        "placeholderIncluded": true,\n        "datamartProperties": {\n            "[DatamartProperties].[Create Table Post String]": {\n                "name": "Create Table Post String",\n                "value": "",\n                "type": "string",\n                "resolvedLocation": "object"\n            },\n            "[DatamartProperties].[Insert SQLs]": {\n                "name": "Insert SQLs",\n                "value": "",\n                "type": "string",\n                "resolvedLocation": "object"\n            },\n            "[DatamartProperties].[Maximum Execution Time]": {\n                "name": "Maximum Execution Time",\n                "value": "0",\n                "type": "int32",\n                "resolvedLocation": "object"\n            },\n            "[DatamartProperties].[Maximum Rows]": {\n                "name": "Maximum Rows",\n                "value": "65536",\n                "type": "int32",\n                "resolvedLocation": "object"\n            },\n            "[DatamartProperties].[Post SQLs]": {\n                "name": "Post SQLs",\n                "value": "",\n                "type": "string",\n                "resolvedLocation": "object"\n            },\n            "[DatamartProperties].[Pre SQLs]": {\n                "name": "Pre SQLs",\n                "value": "",\n                "type": "string",\n                "resolvedLocation": "object"\n            },\n            "[DatamartProperties].[Table Descriptor]": {\n                "name": "Table Descriptor",\n                "value": "",\n                "type": "string",\n                "resolvedLocation": "object"\n            }\n        }\n    }\n}\'\n')),(0,o.kt)("p",null,"Sample Response Body:"),(0,o.kt)("p",null,"You can view the new datamart definition in the body of the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-09-08T08:23:53.645Z",\n    "dateModified": "2022-09-08T08:23:53.645Z",\n    "versionId": "D71F41E547AE966037017D97FFA04CA9",\n    "acg": 255,\n    "primaryLocale": "en-US",\n    "objectId": "93C339024786A4EA0A7B0CADDFFD7BC1",\n    "subType": "report_datamart",\n    "name": "demo datamart"\n  },\n  "sourceType": "normal",\n  "dataSource": {\n    "dataTemplate": {\n      "units": [\n        {\n          "id": "8D679D3811D3E4981000E787EC6DE8A4",\n          "name": "Country",\n          "type": "attribute"\n        },\n        {\n          "id": "8D679D3611D3E4981000E787EC6DE8A4",\n          "name": "Catalog",\n          "type": "attribute"\n        },\n        {\n          "id": "8D679D3511D3E4981000E787EC6DE8A4",\n          "name": "Call Center",\n          "type": "attribute"\n        },\n        {\n          "id": "8D679D5211D3E4981000E787EC6DE8A4",\n          "name": "Distribution Center",\n          "type": "attribute"\n        },\n        {\n          "id": "8D679D4F11D3E4981000E787EC6DE8A4",\n          "name": "Subcategory",\n          "type": "attribute"\n        },\n        {\n          "type": "metrics",\n          "elements": [\n            {\n              "id": "7FD5B69611D5AC76C000D98A4CC5F24F",\n              "name": "Cost",\n              "subType": "metric"\n            },\n            {\n              "id": "D823D64B48A0104B01135587BA87A2BD",\n              "name": "Cost Growth",\n              "subType": "metric"\n            },\n            {\n              "id": "381980B211D40BC8C000C8906B98494F",\n              "name": "Discount",\n              "subType": "metric"\n            }\n          ]\n        }\n      ]\n    },\n    "filter": {}\n  },\n  "datamartOptions": {\n    "append": true,\n    "targetSource": {\n      "objectId": "05AC49F849389A20A6C9C19A3105A69B",\n      "subType": "db_role",\n      "name": "Statistics"\n    },\n    "tableName": "MD_TEST",\n    "placeholderIncluded": true,\n    "datamartProperties": {\n      "[DatamartProperties].[Create Table Post String]": {\n        "name": "Create Table Post String",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Insert SQLs]": {\n        "name": "Insert SQLs",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Maximum Execution Time]": {\n        "name": "Maximum Execution Time",\n        "value": "0",\n        "type": "int32",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Maximum Rows]": {\n        "name": "Maximum Rows",\n        "value": "65536",\n        "type": "int32",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Post SQLs]": {\n        "name": "Post SQLs",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Pre SQLs]": {\n        "name": "Pre SQLs",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Table Descriptor]": {\n        "name": "Table Descriptor",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "object"\n      },\n      "[DatamartProperties].[Table Option]": {\n        "name": "Table Option",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "default"\n      },\n      "[DatamartProperties].[Table Prefix]": {\n        "name": "Table Prefix",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "default"\n      },\n      "[DatamartProperties].[Table Qualifier]": {\n        "name": "Table Qualifier",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "default"\n      },\n      "[DatamartProperties].[Table Space]": {\n        "name": "Table Space",\n        "value": "",\n        "type": "string",\n        "resolvedLocation": "default"\n      },\n      "[DatamartProperties].[Table Type]": {\n        "name": "Table Type",\n        "value": "0",\n        "type": "int32",\n        "resolvedLocation": "default"\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Response Code: 201 (A datamart is created successfully.)"),(0,o.kt)("h2",{id:"the-model-for-the-definition-of-the-datamart"},"The model for the definition of the datamart"),(0,o.kt)("p",null,"The model for the definition of a datamart can be represented with the following fields."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"objectId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dateCreated"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dateModified"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"versionId")," are generated automatically. Currently only ",(0,o.kt)("inlineCode",{parentName:"p"},"en-US")," is available for ",(0,o.kt)("inlineCode",{parentName:"p"},"primaryLocale"),".")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"(Required) ",(0,o.kt)("inlineCode",{parentName:"li"},"information"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"(Required) ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," (",(0,o.kt)("inlineCode",{parentName:"li"},"String"),") - Name of the datamart. This is the most user-friendly value that can be used to identify the datamart."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"subType")," (",(0,o.kt)("inlineCode",{parentName:"li"},"String"),") - The subType of datamart, which should be ",(0,o.kt)("inlineCode",{parentName:"li"},"report_datamart"),"."),(0,o.kt)("li",{parentName:"ul"},"(Required) ",(0,o.kt)("inlineCode",{parentName:"li"},"destinationFolderId")," (",(0,o.kt)("inlineCode",{parentName:"li"},"String"),") - Folder Id where the new datamart is saved."))),(0,o.kt)("li",{parentName:"ul"},"(Required) ",(0,o.kt)("inlineCode",{parentName:"li"},"datamartOptions"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"append")," (",(0,o.kt)("inlineCode",{parentName:"li"},"Boolean"),") - This flag indicate whether to create a new table or append to the existing table every time report runs."),(0,o.kt)("li",{parentName:"ul"},"(Required) ",(0,o.kt)("inlineCode",{parentName:"li"},"targetSource")," - The database instance instance where the table will be placed in."),(0,o.kt)("li",{parentName:"ul"},"(Required) ",(0,o.kt)("inlineCode",{parentName:"li"},"tableName")," (",(0,o.kt)("inlineCode",{parentName:"li"},"String"),") - The name of the inserted table."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"placeholderIncluded")," (",(0,o.kt)("inlineCode",{parentName:"li"},"Boolean"),") - The placeholders we support on table name. Details can be referred ",(0,o.kt)("a",{parentName:"li",href:"https://www2.microstrategy.com/producthelp/Current/ReportDesigner/WebHelp/Lang_1033/Content/datamart_reports.htm"},"here"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"datamartProperties")," - The datamart properties that are used to configure the table in warehouse.")))))}u.isMDXComponent=!0}}]);