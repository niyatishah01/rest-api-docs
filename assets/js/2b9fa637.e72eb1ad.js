"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[4310],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1350:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],s={title:"Manage Server-Level Privileges",description:"A high-level workflow sample for managing server-level privileges is shown below. The sequence of REST API requests in the following procedure allows an administrative user to get server-level privilege information for a specific user or user group, grant new server-level privileges to the user, and revoke granted server-level privileges."},l=void 0,p={unversionedId:"common-workflows/server-level-privileges/manage-server-level-privileges",id:"common-workflows/server-level-privileges/manage-server-level-privileges",title:"Manage Server-Level Privileges",description:"A high-level workflow sample for managing server-level privileges is shown below. The sequence of REST API requests in the following procedure allows an administrative user to get server-level privilege information for a specific user or user group, grant new server-level privileges to the user, and revoke granted server-level privileges.",source:"@site/docs/common-workflows/server-level-privileges/manage-server-level-privileges.md",sourceDirName:"common-workflows/server-level-privileges",slug:"/common-workflows/server-level-privileges/manage-server-level-privileges",permalink:"/rest-api-docs/common-workflows/server-level-privileges/manage-server-level-privileges",draft:!1,editUrl:"https://github.com/MicroStrategy/restapi-docs/tree/main/docs/common-workflows/server-level-privileges/manage-server-level-privileges.md",tags:[],version:"current",lastUpdatedBy:"Liang, Jiapei",lastUpdatedAt:1663187922,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{title:"Manage Server-Level Privileges",description:"A high-level workflow sample for managing server-level privileges is shown below. The sequence of REST API requests in the following procedure allows an administrative user to get server-level privilege information for a specific user or user group, grant new server-level privileges to the user, and revoke granted server-level privileges."},sidebar:"tutorialSidebar",previous:{title:"Server-Level Privileges",permalink:"/rest-api-docs/common-workflows/server-level-privileges/"},next:{title:"Manage Server Settings",permalink:"/rest-api-docs/common-workflows/manage-server-settings"}},u={},c=[{value:"Log In",id:"log-in",level:2},{value:"Sample Request",id:"sample-request",level:3},{value:"Sample Response",id:"sample-response",level:3},{value:"Get Server-Level Privilege Information for a Specific User or Group",id:"get-server-level-privilege-information-for-a-specific-user-or-group",level:2},{value:"Sample Request",id:"sample-request-1",level:3},{value:"Sample Response",id:"sample-response-1",level:3},{value:"Grant or Revoke Directly Assigned Privileges",id:"grant-or-revoke-directly-assigned-privileges",level:2},{value:"Sample Request",id:"sample-request-2",level:3},{value:"Sample Response",id:"sample-response-2",level:3},{value:"Log Out",id:"log-out",level:2},{value:"Sample Request",id:"sample-request-3",level:3},{value:"Sample Response",id:"sample-response-3",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,a.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-27dd7275-e91a-4fe8-900b-0590e0de37b6?ctx=documentation"},"REST API Playground"),"."),(0,a.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,a.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,a.kt)("p",null,"A high-level workflow sample for managing server-level privileges is shown below. The sequence of REST API requests in the following procedure allows an administrative user to get server-level privilege information for a specific user or user group, grant new server-level privileges to the user, and revoke granted server-level privileges."),(0,a.kt)("p",null,"A detailed explanation of each step is provided below:"),(0,a.kt)("h2",{id:"log-in"},"Log In"),(0,a.kt)("p",null,"Endpoint: ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Authentication/postLogin"},"POST/auth/login")),(0,a.kt)("p",null,"This endpoint allows the caller to authenticate with the MicroStrategy REST server. You provide the information used to create the session in the body of the request. In this example, you use standard authentication, so you need to provide the username, password, and loginMode. The loginMode specifies the authentication mode to use. If you omit an optional field, the REST server uses the default value. If the call is successful, the resulting HTTP response returns a status code of 204 and a response header containing X-MSTR-AuthToken. This authorization token is used by all subsequent requests."),(0,a.kt)("p",null,"In the following example, standard authentication uses a username of administrator and a blank password."),(0,a.kt)("h3",{id:"sample-request"},"Sample Request"),(0,a.kt)("p",null,"Request Header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"'Content-Type: application/json'\n'Accept: application/json'\n")),(0,a.kt)("p",null,"Request Body:"),(0,a.kt)("p",null,"To use standard authentication, set loginMode to 1."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "loginMode": 1,\n  "username": "administrator",\n  "password": ""\n}\n')),(0,a.kt)("p",null,"Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/login" -H "accept: application/json"-\nH "Content-Type: application/json" -d "{\\\\"username\\\\":\\\\"administrator\\\\",\\\\"password\\\\":\\\\"\\\\",\\\\"loginMode\\\\":1}"\n')),(0,a.kt)("h3",{id:"sample-response"},"Sample Response"),(0,a.kt)("p",null,"Response Header:"),(0,a.kt)("p",null,"The x-mstr-authtoken authorization token is returned in the response header. Other endpoints use this token to authenticate users."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pragma": "no-cache",\n  "x-mstr-authtoken": "pdcmrontjrlf494tl1eu6nt7hg",\n  "cache-control": "no-cache, no-store, max-age=0, must-revalidate",\n  "date: Tue, 14 May 2019 20:29:21 GMT expires: 0",\n  "expires": "0",\n  "content-type": null\n}\n')),(0,a.kt)("p",null,"Response Body: Empty"),(0,a.kt)("p",null,"Response Code: 204 (Success: No Content)"),(0,a.kt)("h2",{id:"get-server-level-privilege-information-for-a-specific-user-or-group"},"Get Server-Level Privilege Information for a Specific User or Group"),(0,a.kt)("p",null,"Endpoints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GET /api/users/{id}/privileges")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GET /api/usergroups/{id}/privileges"))),(0,a.kt)("p",null,"These endpoints allow administrative users to retrieve user privilege information. First, you obtain the authorization token needed to execute the request using POST /api/auth/login. Then, you pass the authorization token in the request header. You provide the information in the parameters of the request."),(0,a.kt)("p",null,"The example below demonstrates how to get server-level privilege information."),(0,a.kt)("h3",{id:"sample-request-1"},"Sample Request"),(0,a.kt)("p",null,"Request Parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken")),(0,a.kt)("p",{parentName:"li"},"The authorization token generated by POST /api/auth/login.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Id")),(0,a.kt)("p",{parentName:"li"},"The ID of the user.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"privilegeLevel")),(0,a.kt)("p",{parentName:"li"},"Use ",(0,a.kt)("strong",{parentName:"p"},"server")," to retrieve server-level privileges, ",(0,a.kt)("strong",{parentName:"p"},"project")," to retrieve project-level privileges, and leave this parameter empty to retrieve all privileges.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"projectID")),(0,a.kt)("p",{parentName:"li"},"Filter privileges by project."))),(0,a.kt)("p",null,"Request Header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n\u2018X-MSTR-AuthToken: djoofk6kq8htka6emv15246959\u2019\n")),(0,a.kt)("p",null,"Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "http://localhost:8282/consume-dev/api/users/6C9DFE134D0F8764893B469525E38EB0/privileges?privilege.level=server" -H "accept: application/json" -H "X-MSTR-AuthToken: djoofk6kq8htka6emv15246959"\n')),(0,a.kt)("h3",{id:"sample-response-1"},"Sample Response"),(0,a.kt)("p",null,"Response Header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"access-control-allow-headers: Content-Type\naccess-control-allow-methods: GET, POST, DELETE, PUT, PATCH, HEAD, OPTIONS\ncache-control: no-store\ncontent-encoding: gzip\ncontent-length: 1307\ncontent-security-policy: frame-ancestors 'self'\ncontent-type: application/json\ndate: Thu, 27 Feb 2020 00:28:01 GMT\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\n")),(0,a.kt)("p",null,"Response Body:"),(0,a.kt)("p",null,"The API returns a list of server-level privileges the user was granted directly or indirectly. The source of each privilege is provided. The source is either directly granted and/or inherited from a parent user group. In this example, the user has a privilege ID of 2, which is the Create configuration objects privilege. There are two sources, none are directly granted, and they are inherited from the User Administrators and System Administrators parent user groups."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "privileges": [\n    {\n      "privilege": {\n        "id": "2",\n        "name": "Create configuration objects",\n        "description": "This is the privilege required to create a configuration-level object.",\n        "level": "server"\n      },\n      "sources": [\n        {\n          "direct": false,\n          "group": {\n            "name": "User Administrators",\n            "id": "17CD5CDB43085A8A52533B86A05DCB3A"\n          }\n        },\n        {\n          "direct": false,\n          "group": {\n            "name": "System Administrators",\n            "id": "5F3FAFE111D2D8CC6000CC8E67019608"\n          }\n        }\n      ]\n    },\n    {\n      "privilege": {\n        "id": "53",\n        "name": "Monitor Database Connections",\n        "description": "Allow the user to monitor database connections and view connection details.",\n        "level": "server"\n      },\n      "sources": [\n        {\n          "direct": true\n        }\n      ]\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"Response Code: 200 (Success)"),(0,a.kt)("h2",{id:"grant-or-revoke-directly-assigned-privileges"},"Grant or Revoke Directly Assigned Privileges"),(0,a.kt)("p",null,"The following endpoints, used to patch users and user groups, are also used to grant or revoke directly assigned privileges with new operations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PATCH /api/users/{id}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PATCH /api/userGroups/{id}"))),(0,a.kt)("p",null,"Privileges are directly granted if you use the endpoints listed above to grant them. These direct privileges can only be removed using the same endpoints."),(0,a.kt)("p",null,"Multiple operations, passed with the request body, can be performed in one patch request. You define the functionality in these operations. Each operation contains the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Operator: add for grant, remove for revoke"),(0,a.kt)("li",{parentName:"ul"},"Path: ","\\","privileges to specify the entry to update. You cannot mix two types of operations together."),(0,a.kt)("li",{parentName:"ul"},"Value: A list of integers with enum values to represent privilege types. See ",(0,a.kt)("a",{parentName:"li",href:"https://www2.microstrategy.com/producthelp/2021/WebAPIReference/com/microstrategy/webapi/EnumDSSXMLPrivilegeTypes.html"},"EnumDSSXML.PrivilegeType"),". for more information.")),(0,a.kt)("p",null,"The request body can contain other operations other than privileges, which are applied in the same request."),(0,a.kt)("p",null,"The workflow for both granting and removing privileges are as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Obtain the authorization token needed to execute the request using POST /api/auth/login and pass the authorization token in the request header."),(0,a.kt)("li",{parentName:"ol"},"Identify the user or user group to update by specifying the ID in the path of the request. You can obtain the ID using ",(0,a.kt)("inlineCode",{parentName:"li"},"GET /api/users or GET /api/usergroups.")),(0,a.kt)("li",{parentName:"ol"},"Provide the information to update the privileges in the body parameter of the request. This means the body of the request contains the operations to be performed on a user by either granting or revoking privileges")),(0,a.kt)("h3",{id:"sample-request-2"},"Sample Request"),(0,a.kt)("p",null,"Request Parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken")),(0,a.kt)("p",{parentName:"li"},"The authorization token generated by `POST /api/auth/login.``")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Id")),(0,a.kt)("p",{parentName:"li"},"The ID of the user or user group to update.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"body")),(0,a.kt)("p",{parentName:"li"},"Contains the information used to perform the update, as described above."))),(0,a.kt)("p",null,"Request Header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'\'Accept: application/json\'\n"X-MSTR-AuthToken": "pdcmrontjrlf494tl1eu6nt7hg"\n')),(0,a.kt)("p",null,"Request Parameters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'"X-MSTR-AuthToken": " pdcmrontjrlf494tl1eu6nt7hg",\n"id": "F80E38174DA4A8AF4C82D18F34A2D5E8"\n')),(0,a.kt)("p",null,"Request Body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "operationList": [\n    {\n      "op": "add",\n      "path": "/privileges",\n      "value": [2, 54]\n    },\n    {\n      "op": "remove",\n      "path": "/privileges",\n      "value": [53]\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH curl -X PATCH "http://localhost:8282/consume-dev/api/users/6C9DFE134D0F8764893B469525E38EB0" -H "accept: application/json" -H "X-MSTR-AuthToken: cmjt8jfn2ucl260lqtrhh4gips" -H "Content-Type: application/json" -d "{ \\\\"operationList\\\\": [ { \\\\"op\\\\": \\\\"add\\\\", \\\\"path\\\\": \\\\"/privileges\\\\", \\\\"value\\\\": [2, 54] }, { \\\\"op\\\\": \\\\"remove\\\\", \\\\"path\\\\": \\\\"/privileges\\\\", \\\\"value\\\\": [53] }, ]}"\n')),(0,a.kt)("h3",{id:"sample-response-2"},"Sample Response"),(0,a.kt)("p",null,"Response Header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"access-control-allow-headers: Content-Type\naccess-control-allow-methods: GET, POST, DELETE, PUT, PATCH, HEAD, OPTIONS\ncache-control: no-store\ncontent-encoding: gzip\ncontent-length: 790\ncontent-security-policy: frame-ancestors 'self'\ncontent-type: application/json\ndate: Thu, 27 Feb 2020 16:38:44 GMT\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\n")),(0,a.kt)("p",null,"Response Body:"),(0,a.kt)("p",null,"The REST server returns a JSON object that contains the updated information for the user or user group."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Demo User",\n  "id": "6C9DFE134D0F8764893B469525E38EB0",\n  "type": 34,\n  "abbreviation": "demo",\n  "subtype": 8704,\n  "dateCreated": "2005-01-18T18:18:26.000+0000",\n  "dateModified": "2020-02-27T16:38:44.000+0000",\n  "version": "17BAA8CD4491C9640410E083579C09C0",\n  "acg": 255,\n  "owner": {\n    "name": "Administrator",\n    "id": "54F3D26011D2896560009A8E67019608"\n  },\n  "acl": [\n    {\n      "deny": false,\n      "type": 1,\n      "rights": 255,\n      "trusteeId": "5F3FAFE111D2D8CC6000CC8E67019608",\n      "trusteeName": "System Administrators",\n      "trusteeType": 34,\n      "trusteeSubtype": 8705,\n      "inheritable": false\n    }\n  ],\n  "extType": 0,\n  "ancestors": [\n    {\n      "name": "CASTOR_SERVER_CONFIGURATION",\n      "id": "5F90C74FB2944D70930B9BDDA6D2FBF1",\n      "level": 2\n    },\n    {\n      "name": "Users",\n      "id": "73F7482611D3596C60001B8F67019608",\n      "level": 1\n    }\n  ],\n  "username": "demo",\n  "fullName": "Demo User",\n  "enabled": true,\n  "passwordModifiable": false,\n  "requireNewPassword": false,\n  "standardAuth": true,\n  "memberships": [\n    {\n      "id": "C82C6B1011D2894CC0009D9F29718E4F",\n      "name": "Everyone",\n      "source": {\n        "type": ["MSTR"]\n      }\n    },\n    {\n      "id": "C2E4DA4A411B972B063FE8A583989959",\n      "name": "MicroStrategy Web Professional",\n      "source": {\n        "type": ["MSTR"]\n      }\n    },\n    {\n      "id": "0AA72D6042B938FF3FBED3AAC39349F5",\n      "name": "Mobile Users",\n      "source": {\n        "type": ["MSTR"]\n      }\n    },\n    {\n      "id": "5F3FAFE111D2D8CC6000CC8E67019608",\n      "name": "System Administrators",\n      "source": {\n        "type": ["MSTR"]\n      }\n    },\n    {\n      "id": "17CD5CDB43085A8A52533B86A05DCB3A",\n      "name": "User Administrators",\n      "source": {\n        "type": ["MSTR"]\n      }\n    }\n  ],\n  "initials": "DU"\n}\n')),(0,a.kt)("p",null,"Response Code: 200 (Success: OK)"),(0,a.kt)("p",null,"The response is irrelevant to the privilege update. This is expected behavior. Remember that you are updating a user or user group. The response body is with the JSON of the user object. You can ",(0,a.kt)("a",{parentName:"p",href:"#get-server-level-privilege-information-for-a-specific-user-or-group"},"retrieve privilege information")," again to verify the updates."),(0,a.kt)("h2",{id:"log-out"},"Log Out"),(0,a.kt)("p",null,"Endpoint: ",(0,a.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Authentication/postLogout"},"POST /api/auth/logout")),(0,a.kt)("p",null,"This endpoint allows the caller to log out the authenticated user from the MicroStrategy REST server. In this example, you close the active user session by providing the X-MSTR-AuthToken authorization token, which is generated by POST /api/auth/login. If the call is successful, the resulting HTTP response returns an HTTP status code of 204."),(0,a.kt)("h3",{id:"sample-request-3"},"Sample Request"),(0,a.kt)("p",null,"Request Header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"'Accept: application/json'\n'X-MSTR-AuthToken: pdcmrontjrlf494tl1eu6nt7hg\n")),(0,a.kt)("p",null,"Request Body: No content"),(0,a.kt)("p",null,"Curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST -i -c ~/cookie-jar.txt --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-MSTR-AuthToken: pdcmrontjrlf494tl1eu6nt7hg\n'https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/logout'\n")),(0,a.kt)("h3",{id:"sample-response-3"},"Sample Response"),(0,a.kt)("p",null,"Response Code: 204 (Success: OK)"))}m.isMDXComponent=!0}}]);