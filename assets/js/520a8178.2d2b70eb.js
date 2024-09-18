"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7427],{15995:(e,n,t)=>{t.d(n,{A:()=>s});var r=t(62540);t(63696);var i=t(11750);function s({children:e,hidden:n,className:t}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)("tabItem_pnkT",t),hidden:n,children:e})}},27446:(e,n,t)=>{t.d(n,{A:()=>v});var r=t(62540),i=t(63696),s=t(11750),l=t(7846),u=t(49519),o=t(96439),a=t(19739),c=t(66904),d=t(79244);function p(e){var n,t;return null!==(t=null===(n=i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function h({value:e,tabValues:n}){return n.some(n=>n.value===e)}var g=t(10709);function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){var r;r=t[n],n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r})}return e}function b(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}function m({className:e,block:n,selectedValue:t,selectValue:i,tabValues:u}){let o=[],{blockElementScrollPositionUntilNextRender:a}=(0,l.a_)(),c=e=>{let n=e.currentTarget,r=u[o.indexOf(n)].value;r!==t&&(a(n),i(r))},d=e=>{var n,t;let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{let t=o.indexOf(e.currentTarget)+1;r=null!==(n=o[t])&&void 0!==n?n:o[0];break}case"ArrowLeft":{let n=o.indexOf(e.currentTarget)-1;r=null!==(t=o[n])&&void 0!==t?t:o[o.length-1]}}null==r||r.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},e),children:u.map(({value:e,label:n,attributes:i})=>(0,r.jsx)("li",b(f({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>o.push(e),onKeyDown:d,onClick:c},i),{className:(0,s.A)("tabs__item","tabItem_AQgk",null==i?void 0:i.className,{"tabs__item--active":t===e}),children:null!=n?n:e}),e))})}function j({lazy:e,children:n,selectedValue:t}){let l=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){let e=l.find(e=>e.props.value===t);return e?(0,i.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t}))})}function y(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:r}=e,s=function(e){let{values:n,children:t}=e;return(0,i.useMemo)(()=>{let e=null!=n?n:p(t).map(({props:{value:e,label:n,attributes:t,default:r}})=>({value:e,label:n,attributes:t,default:r}));return!function(e){let n=(0,c.XI)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[l,g]=(0,i.useState)(()=>(function({defaultValue:e,tabValues:n}){var t;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let r=null!==(t=n.find(e=>e.default))&&void 0!==t?t:n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:s})),[f,b]=function({queryString:e=!1,groupId:n}){let t=(0,u.W6)(),r=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,a.aZ)(r),(0,i.useCallback)(e=>{var n,i;if(!r)return;let s=new URLSearchParams(t.location.search);s.set(r,e),t.replace((n=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){var r;r=t[n],n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r})}return e}({},t.location),i=i={search:s.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t})(Object(i)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))}),n))},[r,t])]}({queryString:t,groupId:r}),[m,j]=function({groupId:e}){let n=e?`docusaurus.tab.${e}`:null,[t,r]=(0,d.Dv)(n);return[t,(0,i.useCallback)(e=>{n&&r.set(e)},[n,r])]}({groupId:r}),y=(()=>{let e=null!=f?f:m;return h({value:e,tabValues:s})?e:null})();return(0,o.A)(()=>{y&&g(y)},[y]),{selectedValue:l,selectValue:(0,i.useCallback)(e=>{if(!h({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);g(e),b(e),j(e)},[b,j,s]),tabValues:s}}(e);return(0,r.jsxs)("div",{className:(0,s.A)("tabs-container","tabList_Qoir"),children:[(0,r.jsx)(m,f({},n,e)),(0,r.jsx)(j,f({},n,e))]})}function v(e){let n=(0,g.A)();return(0,r.jsx)(y,b(f({},e),{children:p(e.children)}),String(n))}},59591:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});let r=JSON.parse('{"id":"api/plugins/plugin-debug","title":"\u{1F4E6} plugin-debug","description":"The debug plugin will display useful debug information at http3000/docusaurus/debug.","source":"@site/docs/api/plugins/plugin-debug.mdx","sourceDirName":"api/plugins","slug":"/api/plugins/@docusaurus/plugin-debug","permalink":"/docs/api/plugins/@docusaurus/plugin-debug","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-debug.mdx","tags":[],"version":"current","lastUpdatedBy":"Chris Cho","lastUpdatedAt":1726217516000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"slug":"/api/plugins/@docusaurus/plugin-debug"},"sidebar":"api","previous":{"title":"\u{1F4E6} plugin-client-redirects","permalink":"/docs/api/plugins/@docusaurus/plugin-client-redirects"},"next":{"title":"\u{1F4E6} plugin-google-analytics","permalink":"/docs/api/plugins/@docusaurus/plugin-google-analytics"}}');var i=t(62540),s=t(43023),l=t(27446),u=t(15995);let o={sidebar_position:5,slug:"/api/plugins/@docusaurus/plugin-debug"},a="\u{1F4E6} plugin-debug",c={},d=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}];function p(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"-plugin-debug",children:"\u{1F4E6} plugin-debug"})}),"\n","\n",(0,i.jsxs)(n.p,{children:["The debug plugin will display useful debug information at ",(0,i.jsx)(n.a,{href:"http://localhost:3000/__docusaurus/debug",children:(0,i.jsx)(n.code,{children:"http://localhost:3000/__docusaurus/debug"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["It is mostly useful for plugin authors, that will be able to inspect more easily the content of the ",(0,i.jsx)(n.code,{children:".docusaurus"})," folder (like the creates routes), but also be able to inspect data structures that are never written to disk, like the plugin data loaded through the ",(0,i.jsx)(n.code,{children:"contentLoaded"})," lifecycle."]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["If you use the plugin via the classic preset, the preset will ",(0,i.jsx)(n.strong,{children:"enable the plugin in development and disable it in production"})," by default (",(0,i.jsx)(n.code,{children:"debug: undefined"}),") to avoid exposing potentially sensitive information. You can use ",(0,i.jsx)(n.code,{children:"debug: true"})," to always enable it or ",(0,i.jsx)(n.code,{children:"debug: false"})," to always disable it."]}),(0,i.jsx)(n.p,{children:"If you use a standalone plugin, you may need to achieve the same effect by checking the environment:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: [\n    // highlight-next-line\n    process.env.NODE_ENV === 'production' && '@docusaurus/plugin-debug',\n  ].filter(Boolean),\n};\n"})})]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"If you report a bug, we will probably ask you to have this plugin turned on in the production, so that we can inspect your deployment config more easily."}),(0,i.jsxs)(n.p,{children:["If you don't have any sensitive information, you can keep it on in production ",(0,i.jsx)(n.a,{href:"/__docusaurus/debug",children:"like we do"}),"."]})]}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(l.A,{groupId:"npm2yarn",children:[(0,i.jsx)(u.A,{value:"npm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-debug\n"})})}),(0,i.jsx)(u.A,{value:"yarn",label:"Yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-debug\n"})})}),(0,i.jsx)(u.A,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-debug\n"})})})]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["If you use the preset ",(0,i.jsx)(n.code,{children:"@docusaurus/preset-classic"}),", you don't need to install this plugin as a dependency."]}),(0,i.jsxs)(n.p,{children:["You can configure this plugin through the ",(0,i.jsx)(n.a,{href:"/docs/using-plugins#docusauruspreset-classic",children:"preset options"}),"."]})]}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.p,{children:"This plugin currently has no options."}),"\n",(0,i.jsx)(n.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,i.jsx)(n.p,{children:"You can configure this plugin through preset options or plugin options."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Most Docusaurus users configure this plugin through the preset options."})}),"\n",(0,i.jsxs)(l.A,{groupId:"api-config-ex",children:[(0,i.jsxs)(u.A,{value:"preset",label:"Preset options",children:[(0,i.jsxs)(n.p,{children:["If you use a preset, configure this plugin through the ",(0,i.jsx)(n.a,{href:"/docs/using-plugins#docusauruspreset-classic",children:"preset options"}),":"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        // highlight-next-line\n        debug: true, // This will enable the plugin in production\n      },\n    ],\n  ],\n};\n"})})]}),(0,i.jsxs)(u.A,{value:"plugin",label:"Plugin Options",children:[(0,i.jsx)(n.p,{children:"If you are using a standalone plugin, provide options directly to the plugin:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // highlight-next-line\n  plugins: ['@docusaurus/plugin-debug'],\n};\n"})})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},43023:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>u});var r=t(63696);let i={},s=r.createContext(i);function l(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);