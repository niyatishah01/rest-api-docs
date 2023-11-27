"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3330],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(a),m=r,u=h["".concat(l,".").concat(m)]||h[m]||p[m]||o;return a?i.createElement(u,n(n({ref:t},d),{},{components:a})):i.createElement(u,n({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,n=new Array(o);n[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,n[1]=s;for(var c=2;c<o;c++)n[c]=a[c];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},71505:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var i=a(83117),r=a(80102),o=(a(67294),a(3905)),n=["components"],s={sidebar_label:"REST API families",title:"MicroStrategy REST API families",description:"The MicroStrategy REST API Explorer lets you drill down into the individual APis. You can see HTTP headers and input and output information for each request, and enter values to try out the APIs."},l=void 0,c={unversionedId:"getting-started/rest-api-families",id:"getting-started/rest-api-families",title:"MicroStrategy REST API families",description:"The MicroStrategy REST API Explorer lets you drill down into the individual APis. You can see HTTP headers and input and output information for each request, and enter values to try out the APIs.",source:"@site/docs/getting-started/rest-api-families.md",sourceDirName:"getting-started",slug:"/getting-started/rest-api-families",permalink:"/rest-api-docs/getting-started/rest-api-families",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/getting-started/rest-api-families.md",tags:[],version:"current",lastUpdatedBy:"kezhou-mstr",lastUpdatedAt:1701121876,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{sidebar_label:"REST API families",title:"MicroStrategy REST API families",description:"The MicroStrategy REST API Explorer lets you drill down into the individual APis. You can see HTTP headers and input and output information for each request, and enter values to try out the APIs."},sidebar:"tutorialSidebar",previous:{title:"REST API architecture",permalink:"/rest-api-docs/getting-started/rest-api-architecture"},next:{title:"Configure clustered environments",permalink:"/rest-api-docs/getting-started/configure-clustered-environments"}},d={},p=[{value:"Authentication API",id:"authentication-api",level:2},{value:"Attribute API",id:"attribute-api",level:2},{value:"Browsing API",id:"browsing-api",level:2},{value:"Changesets API",id:"changesets-api",level:2},{value:"Consolidations API",id:"consolidations-api",level:2},{value:"Cubes API",id:"cubes-api",level:2},{value:"Custom groups API",id:"custom-groups-api",level:2},{value:"Datasets API",id:"datasets-api",level:2},{value:"Datasource management API",id:"datasource-management-api",level:2},{value:"Derived elements API",id:"derived-elements-api",level:2},{value:"Dossiers and documents API",id:"dossiers-and-documents-api",level:2},{value:"Drivers API",id:"drivers-api",level:2},{value:"Emails API",id:"emails-api",level:2},{value:"Facts API",id:"facts-api",level:2},{value:"Filters API",id:"filters-api",level:2},{value:"Gateways API",id:"gateways-api",level:2},{value:"Library API",id:"library-api",level:2},{value:"Object management API",id:"object-management-api",level:2},{value:"Packages API",id:"packages-api",level:2},{value:"Prompts API",id:"prompts-api",level:2},{value:"Projects API",id:"projects-api",level:2},{value:"Reports API",id:"reports-api",level:2},{value:"Runtimes API",id:"runtimes-api",level:2},{value:"Schema API",id:"schema-api",level:2},{value:"Security filters API",id:"security-filters-api",level:2},{value:"Security roles API",id:"security-roles-api",level:2},{value:"System administration API",id:"system-administration-api",level:2},{value:"System hierarchy API",id:"system-hierarchy-api",level:2},{value:"Tables API",id:"tables-api",level:2},{value:"User hierarchies API",id:"user-hierarchies-api",level:2},{value:"User management API",id:"user-management-api",level:2}],h={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,n);return(0,o.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/"},"MicroStrategy REST API Explorer")," lets you drill down into the individual APis. You can see HTTP headers and input and output information for each request, and enter values to try out the APIs."),(0,o.kt)("h2",{id:"authentication-api"},(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication"},"Authentication API")),(0,o.kt)("p",null,"The Authentication API family allows developers to authenticate users against the Intelligence Server or third-party servers."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"Login API"))),(0,o.kt)("p",null,"Developers can use the Login API for authentication\u2014to create and terminate sessions. Users are authenticated against the Intelligence Server that is configured as the default in the REST server configuration. Each successful authentication attempt returns an authorization token which can be used to authorize subsequent requests. The authorization token must be used in conjunction with an HTTP session in order to authorize the caller."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/sessionSessionIdGet"},"Sessions API"))),(0,o.kt)("p",null,"Developers can use the Sessions API to obtain information about the active session such as user privileges, information about the currently authenticated user, and whether the session is still alive."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/getIdentityTokenInfo"},"Identity Token API"))),(0,o.kt)("p",null,"Developers can use the Identity Token API to authenticate using third-party applications. Once a user has been authenticated with the Login API, an identity token can be requested and passed to another application. The third-party application can then make a request to authenticate on behalf of the user, generating a new authorization token and an HTTP session."),(0,o.kt)("h2",{id:"attribute-api"},(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Attributes"},"Attribute API")),(0,o.kt)("p",null,"The Attribute API family allows developers to obtain an attribute's definition, create a attribute object, and update the definition of an existing attribute."),(0,o.kt)("h2",{id:"browsing-api"},(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Browsing"},"Browsing API")),(0,o.kt)("p",null,"The Browsing API family allows developers to leverage traditional metadata folder browsing through the Folders endpoints. It also exposes the ability to perform a search with a wide variety of search criteria."),(0,o.kt)("h2",{id:"changesets-api"},(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Changesets/ms-createChangeset"},"Changesets API")),(0,o.kt)("p",null,"The Changesets API family allows developers to create, commit, and delete changesets. A changeset maintains an indivisible group of creations or modifications on modeling objects. Eventually the changes in the changeset should be either committed as one transaction, or abandoned altogether. A changeset is used in requests to read, create, and/or update objects through the modeling APIs such as filters, facts, attributes, and so on."),(0,o.kt)("h2",{id:"consolidations-api"},(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Consolidations"},"Consolidations API")),(0,o.kt)("p",null,"The Consolidations API family allows developers to obtain a consolidation\u2019s definition, create a consolidation object, and update the definition of an existing consolidation."),(0,o.kt)("h2",{id:"cubes-api"},(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Cubes"},"Cubes API")),(0,o.kt)("p",null,"The Cubes API family allows developers to create a report instance based on a cube and incrementally fetch slices of the report instance. The Cubes API lets developers leverage the performance advantage of in-memory cubes. The cube can be either an Intelligent Cube or a DDA(Direct Data Access)/MDX(Multidimensional Expressions)-based Live Connect cube. Together with the Reports API, this API is often referred to as the JSON Data API."),(0,o.kt)("h2",{id:"custom-groups-api"},(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Custom%20Groups"},"Custom groups API")),(0,o.kt)("p",null,"The Custom Groups API family allows developers to obtain a custom group's definition, create a custom group object, and update the definition of an existing custom group."),(0,o.kt)("h2",{id:"datasets-api"},(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datasets"},"Datasets API")),(0,o.kt)("p",null,"The Datasets API family allows developers to push external data directly to the MicroStrategy Intelligence Server. This data can be used to create a dataset or to modify an existing dataset in a Data Import cube. Once the data has been pushed to the Intelligence Server, developers can use the Cubes API or the Reports API to manipulate that data. This API is often referred to as the Push Data API."),(0,o.kt)("h2",{id:"datasource-management-api"},(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Datasource%20Management"},"Datasource management API")),(0,o.kt)("p",null,"The Datasource Management API family allows administrators to create, update, and delete database connections in the MicroStrategy metadata. This functionality can be used to automate the update of data source credentials."),(0,o.kt)("h2",{id:"derived-elements-api"},(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Derived%20Elements"},"Derived elements API")),(0,o.kt)("p",null,"The Derived Elements API family allows developers to obtain a derived element's definition, create a derived element object, and update the definition of an existing derived element."),(0,o.kt)("h2",{id:"dossiers-and-documents-api"},(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Dossiers%20and%20Documents"},"Dossiers and documents API")),(0,o.kt)("p",null,"The Dossiers and Documents API family exposes functionality that allows the execution and exporting of dossiers and documents to a variety of export formats."),(0,o.kt)("h2",{id:"drivers-api"},(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Drivers"},"Drivers API")),(0,o.kt)("p",null,"The Drivers API family allows developers to obtain drivers' definition and update a driver's definition."),(0,o.kt)("h2",{id:"emails-api"},(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Emails"},"Emails API")),(0,o.kt)("p",null,"The Emails API family allows administrators and developers to send emails using MicroStrategy Distribution Services email transmitters."),(0,o.kt)("h2",{id:"facts-api"},(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Facts"},"Facts API")),(0,o.kt)("p",null,"The Facts API family allows developers to obtain a fact's definition, create a fact object, and update the definition of an existing fact."),(0,o.kt)("h2",{id:"filters-api"},(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Filters"},"Filters API")),(0,o.kt)("p",null,"The Filters API family allows developers to obtain a filter's definition, create a filter object, and update the definition of an existing filter."),(0,o.kt)("h2",{id:"gateways-api"},(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Gateways"},"Gateways API")),(0,o.kt)("p",null,"The Gateways API family allows developers to obtain gateways' definitions."),(0,o.kt)("h2",{id:"library-api"},(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Library"},"Library API")),(0,o.kt)("p",null,"The Library API family exposes the publishing workflow, allowing requests to publish or un-publish to a set of users/usergroups and obtain the Library for the authenticated user."),(0,o.kt)("h2",{id:"object-management-api"},(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Object%20Management"},"Object management API")),(0,o.kt)("p",null,"The Object Management API family exposes the ability to programmatically manage objects in the MicroStrategy metadata. Endpoints can be used to certify or de-certify a report or dossier, delete objects, and update object info for any object type."),(0,o.kt)("h2",{id:"packages-api"},(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Packages"},"Packages API")),(0,o.kt)("p",null,"The Packages API family allows you to create and import migration packages."),(0,o.kt)("h2",{id:"prompts-api"},(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Prompts"},"Prompts API")),(0,o.kt)("p",null,"The Prompts API family allows developers to obtain a prompt's definition, create a prompt object, and update the definition of an existing project."),(0,o.kt)("h2",{id:"projects-api"},(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects"},"Projects API")),(0,o.kt)("p",null,"The Projects API family allows an authenticated user to obtain the list of projects which they have access to. It also exposes functionality for an administrator to administer the quota settings for users and projects."),(0,o.kt)("h2",{id:"reports-api"},(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports"},"Reports API")),(0,o.kt)("p",null,"The Reports API family allows developers to retrieve the data from a specific report. The Reports API currently supports reports with attributes on rows and metrics on columns. Together with the Cubes API, this API is often referred to as the JSON Data API."),(0,o.kt)("h2",{id:"runtimes-api"},(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Runtimes"},"Runtimes API")),(0,o.kt)("p",null,"The Runtimes API family allows developers to obtain a runtime's definition, create a runtime object, update the definition of an existing runtime, and delete a runtime object. The runtime objects currently work with the containerized Intelligence Server."),(0,o.kt)("h2",{id:"schema-api"},(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Schema"},"Schema API")),(0,o.kt)("p",null,"The Schema API family allows developers to obtain the schema lock status, lock the schema, unlock the schema, and reload or update the schema synchronously or asynchronously."),(0,o.kt)("h2",{id:"security-filters-api"},(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Security%20Filters"},"Security filters API")),(0,o.kt)("p",null,"The Security Filters API family allows the retrieval, creation, and update of security filter objects through the Modeling service."),(0,o.kt)("h2",{id:"security-roles-api"},(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Security%20Roles"},"Security roles API")),(0,o.kt)("p",null,"The Security Roles API family allows administrators and developers to obtain a list of roles, its members and current privileges, and to manage security role membership."),(0,o.kt)("h2",{id:"system-administration-api"},(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System%20Administration"},"System administration API")),(0,o.kt)("p",null,"The System Administration API family allows administrators and developers to programmatically configure the settings related to the MicroStrategy Library web application. For example, this functionality can be used to configure default values related to the authentication process, set up trust relationships to the Intelligence Server, and more."),(0,o.kt)("h2",{id:"system-hierarchy-api"},(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/System%20Hierarchy"},"System hierarchy API")),(0,o.kt)("p",null,"The System Hierarchy API family allows developers to obtain and update an attribute's relationships."),(0,o.kt)("h2",{id:"tables-api"},(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Tables"},"Tables API")),(0,o.kt)("p",null,"The Tables API family allows developers to obtain a table's definition, create a table object, and update the definition of an existing table."),(0,o.kt)("h2",{id:"user-hierarchies-api"},(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Hierarchies"},"User hierarchies API")),(0,o.kt)("p",null,"The User Hierarchies API family allows developers to obtain a user hierarchy\u2019s definition, create a user hierarchy object, and update the definition of an existing user hierarchy."),(0,o.kt)("h2",{id:"user-management-api"},(0,o.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/User%20Management"},"User management API")),(0,o.kt)("p",null,"The User Management API family allows developers to create, update, and delete users and usergroups; perform usergroup membership management; and manage membership within Security Roles. This functionality can be used to automate user creation and management in conjunction with the onboarding process."))}m.isMDXComponent=!0}}]);