"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2502],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=n.createContext({}),a=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=a(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,i=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=a(r),m=c,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=r.length,o=new Array(i);o[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:c,o[1]=u;for(var a=2;a<i;a++)o[a]=r[a];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3114:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>a});var n=r(7462),c=(r(7294),r(3905));const i={},o=void 0,u={unversionedId:"Design_Documents/ServerArchitecture/README",id:"Design_Documents/ServerArchitecture/README",title:"README",description:"SolidUI Service Architecture",source:"@site/docs/Design_Documents/ServerArchitecture/README.md",sourceDirName:"Design_Documents/ServerArchitecture",slug:"/Design_Documents/ServerArchitecture/",permalink:"/docs/Design_Documents/ServerArchitecture/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Design_Documents/ServerArchitecture/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Design_Documents",permalink:"/docs/category/design_documents"},next:{title:"README",permalink:"/docs/Design_Documents/SolidUI_Front-end_Architecture_Design_Document/"}},s={},a=[{value:"SolidUI Service Architecture",id:"solidui-service-architecture",level:2},{value:"1. Architecture Overview",id:"1-architecture-overview",level:3}],l={toc:a},p="wrapper";function d(e){let{components:t,...i}=e;return(0,c.kt)(p,(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"solidui-service-architecture"},"SolidUI Service Architecture"),(0,c.kt)("h3",{id:"1-architecture-overview"},"1. Architecture Overview"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"soliduiv0.1.0",src:r(5317).Z,width:"2212",height:"1355"})),(0,c.kt)("p",null,"Entrance: API interface layer, mainly responsible for the request of the front-end UI layer, the service uniformly provides RESTful api to provide request services to the outside"))}d.isMDXComponent=!0},5317:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/soliduiv0.1.0structure-90ce72d6f8336ce812d2193dc3e0f1c3.jpg"}}]);