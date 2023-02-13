"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[9991],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return r?a.createElement(m,s(s({ref:t},c),{},{components:r})):a.createElement(m,s({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6626:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=r(3117),n=r(102),i=(r(7294),r(3905)),s=["components"],o={sidebar_label:"Create reports on the fly",title:"REST API sample - Create reports on the fly",description:"This interactive REST API sample highlights the ability to create reports on the fly, with ad-hoc object fetching and incremental fetch."},l=void 0,p={unversionedId:"microstrategy-rest-api-samples/create-reports-on-the-fly",id:"microstrategy-rest-api-samples/create-reports-on-the-fly",title:"REST API sample - Create reports on the fly",description:"This interactive REST API sample highlights the ability to create reports on the fly, with ad-hoc object fetching and incremental fetch.",source:"@site/docs/microstrategy-rest-api-samples/create-reports-on-the-fly.md",sourceDirName:"microstrategy-rest-api-samples",slug:"/microstrategy-rest-api-samples/create-reports-on-the-fly",permalink:"/rest-api-docs/microstrategy-rest-api-samples/create-reports-on-the-fly",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/microstrategy-rest-api-samples/create-reports-on-the-fly.md",tags:[],version:"current",lastUpdatedBy:"Darren Holmblad",lastUpdatedAt:1676308226,formattedLastUpdatedAt:"Feb 13, 2023",frontMatter:{sidebar_label:"Create reports on the fly",title:"REST API sample - Create reports on the fly",description:"This interactive REST API sample highlights the ability to create reports on the fly, with ad-hoc object fetching and incremental fetch."},sidebar:"tutorialSidebar",previous:{title:"MicroStrategy REST API samples",permalink:"/rest-api-docs/microstrategy-rest-api-samples/"},next:{title:"React user manager sample",permalink:"/rest-api-docs/microstrategy-rest-api-samples/react-user-manage-sample"}},c={},d=[{value:"Understand the REST API workflow in the sample",id:"understand-the-rest-api-workflow-in-the-sample",level:2},{value:"Set up the sample",id:"set-up-the-sample",level:2},{value:"Configure the sample",id:"configure-the-sample",level:2},{value:"Use the sample",id:"use-the-sample",level:2}],u={toc:d};function h(e){var t=e.components,o=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This interactive REST API sample highlights the ability to create reports on the fly, with ad-hoc object fetching and incremental fetch."),(0,i.kt)("p",null,"This sample gets data from an Intelligent cube or a report. It uses the attributes and metrics from the report definition to populate two list boxes. When a user selects attributes and metrics from the list boxes, an ad-hoc report is run on the cube and the results are displayed. A specified number of rows are returned, with additional rows displayed each time the user clicks the forward and backward arrows. Two types of view filters allow the user to narrow the results that are displayed. An auto-load button lets a user decide whether to automatically apply changes as they are made."),(0,i.kt)("p",null,"You can ",(0,i.kt)("a",{parentName:"p",href:"https://microstrategy.github.io/data-api-demo/site/"},"view a live demo")," of the sample. You can also ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microstrategy/data-api-demo/"},"download the code")," for this sample to help you understand and use MicroStrategy REST APIs in your application."),(0,i.kt)("h2",{id:"understand-the-rest-api-workflow-in-the-sample"},"Understand the REST API workflow in the sample"),(0,i.kt)("p",null,"This sample uses REST APIs to authenticate the user, get a list of reports and cubes, get definitions for the reports and cubes, and then run the reports and cubes with selected attributes and metrics, using defined view filters."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1.")," ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/auth/login")),(0,i.kt)("p",null,"This REST API authenticates a user. It creates a MicroStrategy session using credentials for the user and a specified authentication mode. It returns an authorization token, which is used by subsequent REST API calls. In this sample, the API is used to create a configuration session."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2.")," ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/searches/results")),(0,i.kt)("p",null,"This REST API uses quick search functionality to search objects using specified search criteria. In this sample, the API is used to search cubes or reports in a specified project."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3.")," ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/reports/{reportId}")),(0,i.kt)("p",null,"This REST API returns the definition for a specified report in a specified project, including available attributes and metrics."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"4.")," ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/cubes/{cubeId}")),(0,i.kt)("p",null,"This REST API returns the definition for a specified cube in a specified project, including available attributes and metrics."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"5.")," ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/reports/{reportId}/instances")),(0,i.kt)("p",null,"This REST API creates an instance of a specified report in a specified project. It replaces the objects in the view template with the requested attributes or metrics, applies the view filters to the report, executes the report, and returns the final data."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"6.")," ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/cubes/{cubeId}/instances")),(0,i.kt)("p",null,"This REST API creates a report instance based on a specified cube in a specified project. It adds the requested attributes or metrics to the view template, applies the view filters to the report, executes the report, and returns the final data,."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"7.")," ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/reports/{reportId}/instances/{instanceId}")),(0,i.kt)("p",null,"This REST API returns the results of a specific report instance in a specified project. It supports fetching the results of the report instance incrementally,"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"8.")," ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/cubes/{cubeId}/instances/{instanceId}")),(0,i.kt)("p",null,"This REST API returns the results of a specific report instance based on a specified cube in a specified project. It supports fetching the results of the report instance incrementally,"),(0,i.kt)("h2",{id:"set-up-the-sample"},"Set up the sample"),(0,i.kt)("p",null,"If you want to setup the sample, you can ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microstrategy/data-api-demo/"},"download the source code from GitHub"),". Follow the instruct to build and deploy the project. It is a React App."),(0,i.kt)("h2",{id:"configure-the-sample"},"Configure the sample"),(0,i.kt)("p",null,"The config.js file is used to configure the sample for your environment. Set values for the following variables to configure the Intelligence Server, project, folder, user credentials, and number of documents to display on the page."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Variable name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Variable description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"restServerURL"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Base URL of the REST API. For example, ",(0,i.kt)("inlineCode",{parentName:"td"},"http://localhost:8080/MicroStrategyLibrary/api"),". The REST API endpoints will be appended to this base URL.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"projectId"),(0,i.kt)("td",{parentName:"tr",align:"left"},'ID of the MicroStrategy project that will be used by the REST API endpoints. For example, "B19DEDCC11D4E0EFC000EB9495D0F44F".')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"username"),(0,i.kt)("td",{parentName:"tr",align:"left"},'Username that will be authenticated. The default value is "administrator".')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"password"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Password for username that will be authenticated.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"cubes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Array of cube IDs. These cubes are listed in the Datasets panel on the left of the sample, under Cubes. Be sure to use valid cube IDs.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"reports"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Array of report IDs. These reports are listed in the Datasets panel on the left of the sample, under Reports. Be sure to use valid report IDs.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"datasets"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Array of reports or cubes to be shown by default.")))),(0,i.kt)("h2",{id:"use-the-sample"},"Use the sample"),(0,i.kt)("p",null,"Initially, the demo displays a list of cubes and reports in the panel on the left, including the name of the cube or report and the number of attributes and metrics; users can also see the JSON representation of the cube or report definition from the log view at the bottom."),(0,i.kt)("p",null,"Users select a cube or report from the list. Once users have made a selection, the attributes and metrics for the selected cube or report are displayed in the panel on the left, with a data table on the right. By default, all the attributes and metrics are shown initially, but users can select specific attributes or metrics then apply the change to the data table."),(0,i.kt)("p",null,"Below the attributes, users are given the option to apply view filters. This demo supports two kinds of view filters: element filter and attribute form filter. Users define a filter, click ",(0,i.kt)("strong",{parentName:"p"},"Add"),", and then click Apply. The data displayed is filtered by the view filter."),(0,i.kt)("p",null,"Users can also see the detailed information of all the requests made in the log view below the data table."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"JsonDemoJS",src:r(5488).Z,width:"1422",height:"975"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If the grid does not populate, use the browser\u2019s developer tools to investigate potential causes. It is possible that incorrect connectivity information caused the demo to fail.")))}h.isMDXComponent=!0},5488:function(e,t,r){t.Z=r.p+"assets/images/JsonDemoJS-9ef9ec8239b05dc5a4cdbc4a17d0311a.png"}}]);