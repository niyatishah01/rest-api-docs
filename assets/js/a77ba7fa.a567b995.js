"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[7943],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1259:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var i=n(3117),r=n(102),o=(n(7294),n(3905)),a=["components"],s={sidebar_label:"Authentication",title:"Authentication",description:"The REST API provides authentication endpoints to initiate a session with the Intelligence Server. It supports multiple authentication modes such as Standard, LDAP, SAML, and so on."},l=void 0,u={unversionedId:"getting-started/authentication",id:"getting-started/authentication",title:"Authentication",description:"The REST API provides authentication endpoints to initiate a session with the Intelligence Server. It supports multiple authentication modes such as Standard, LDAP, SAML, and so on.",source:"@site/docs/getting-started/authentication.md",sourceDirName:"getting-started",slug:"/getting-started/authentication",permalink:"/rest-api-docs/getting-started/authentication",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/getting-started/authentication.md",tags:[],version:"current",lastUpdatedBy:"xdumstr",lastUpdatedAt:1677268684,formattedLastUpdatedAt:"Feb 24, 2023",frontMatter:{sidebar_label:"Authentication",title:"Authentication",description:"The REST API provides authentication endpoints to initiate a session with the Intelligence Server. It supports multiple authentication modes such as Standard, LDAP, SAML, and so on."},sidebar:"tutorialSidebar",previous:{title:"Configure clustered environments",permalink:"/rest-api-docs/getting-started/configure-clustered-environments"},next:{title:"Improve performance by working with partial resources",permalink:"/rest-api-docs/getting-started/improve-performance-by-working-with-partial-resources/"}},c={},p=[],d={toc:p};function h(e){var t=e.components,s=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The REST API provides authentication endpoints to initiate a session with the Intelligence Server. It supports multiple authentication modes such as Standard, LDAP, SAML, and so on."),(0,o.kt)("p",null,"The diagram below shows the workflow when the MicroStrategy REST API is used to authenticate a user."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"REST_Login_Workflow",src:n(4547).Z,width:"1804",height:"708"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"An API client invokes a REST API login endpoint (/api/auth/login) providing the information required for authentication. This information includes the credentials needed to log in and the authentication mode to use, as well as other optional information. You specify the authentication mode using the ",(0,o.kt)("inlineCode",{parentName:"p"},"loginMode")," parameter in the body of the request.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The REST Server authenticates the user by validating the user's credentials with the Intelligence Server and returns an authorization token ",(0,o.kt)("inlineCode",{parentName:"p"},"X-MSTR-AuthToken"),") in the response header. The application container (for example,Tomcat) also returns a session cookie (for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"JSESSIONID"),") on the first request to the server.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The client needs to persist the authorization token and all cookies (session, load balancer and so on), and provide them in each subsequent request. In the case of a web application, the browser handles the cookies."))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The MicroStrategy REST server maintains an HTTP session for every client connecting to it.")),(0,o.kt)("p",null,"To use the REST API for session management, you should be familiar with the following terms:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Authorization token"))),(0,o.kt)("p",null,"Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence Server and creates a unique authorization token for the client. Using an authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Session cookie"))),(0,o.kt)("p",null,"The MicroStrategy REST framework currently relies on an HTTP session. The Java EE server (for example, Tomcat) sends a session cookie in the response header for the client to maintain. If a browser is handling requests, it will also handle the cookies. However, if you are using your own client, you need to maintain the cookie and include it in further requests, together with the authorization token."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Session timeout"))),(0,o.kt)("p",null,"There are two timeout settings that need to be considered."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"HTTP session timeout"),(0,o.kt)("p",{parentName:"li"},"The HTTP session timeout is managed by the application container. It can be configured in ",(0,o.kt)("inlineCode",{parentName:"p"},"/WEB-INF/web.xml.")),(0,o.kt)("p",{parentName:"li"},"Sample code is shown below for configuring the HTTP session timeout in the web.xml file when Tomcat is used as the application container."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<web-app>\n  ...\n  <session-config>\n    <session-timeout>30</session-timeout>\n  </session-config>\n  ...\n</web-app>\n")))),(0,o.kt)("p",null,"The value of the timeout is set in minutes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Intelligence Server session timeout"),(0,o.kt)("p",{parentName:"li"},"The Intelligence Server session timeout can be configured in the Intelligence Server settings."),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The value of the HTTP session timeout must be greater than the value of the Intelligence Server session timeout.")))))}h.isMDXComponent=!0},4547:function(e,t,n){t.Z=n.p+"assets/images/REST_Login_Workflow-1a37a98cb6495cbd5c4ed3e6791a543c.png"}}]);