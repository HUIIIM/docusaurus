"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76975],{15995:(e,r,n)=>{n.d(r,{A:()=>o});var s=n(62540);n(63696);var a=n(11750);function o({children:e,hidden:r,className:n}){return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)("tabItem_pnkT",n),hidden:r,children:e})}},27446:(e,r,n)=>{n.d(r,{A:()=>b});var s=n(62540),a=n(63696),o=n(11750),i=n(7846),t=n(49519),c=n(96439),l=n(19739),h=n(66904),d=n(79244);function u(e){var r,n;return null!==(n=null===(r=a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===r?void 0:r.filter(Boolean))&&void 0!==n?n:[]}function p({value:e,tabValues:r}){return r.some(r=>r.value===e)}var g=n(10709);function f(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},s=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),s.forEach(function(r){var s;s=n[r],r in e?Object.defineProperty(e,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[r]=s})}return e}function m(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):(function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n.push.apply(n,s)}return n})(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}),e}function x({className:e,block:r,selectedValue:n,selectValue:a,tabValues:t}){let c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),h=e=>{let r=e.currentTarget,s=t[c.indexOf(r)].value;s!==n&&(l(r),a(s))},d=e=>{var r,n;let s=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let n=c.indexOf(e.currentTarget)+1;s=null!==(r=c[n])&&void 0!==r?r:c[0];break}case"ArrowLeft":{let r=c.indexOf(e.currentTarget)-1;s=null!==(n=c[r])&&void 0!==n?n:c[c.length-1]}}null==s||s.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},e),children:t.map(({value:e,label:r,attributes:a})=>(0,s.jsx)("li",m(f({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:e=>c.push(e),onKeyDown:d,onClick:h},a),{className:(0,o.A)("tabs__item","tabItem_AQgk",null==a?void 0:a.className,{"tabs__item--active":n===e}),children:null!=r?r:e}),e))})}function j({lazy:e,children:r,selectedValue:n}){let i=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){let e=i.find(e=>e.props.value===n);return e?(0,a.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:i.map((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n}))})}function y(e){let r=function(e){let{defaultValue:r,queryString:n=!1,groupId:s}=e,o=function(e){let{values:r,children:n}=e;return(0,a.useMemo)(()=>{let e=null!=r?r:u(n).map(({props:{value:e,label:r,attributes:n,default:s}})=>({value:e,label:r,attributes:n,default:s}));return!function(e){let r=(0,h.XI)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,n])}(e),[i,g]=(0,a.useState)(()=>(function({defaultValue:e,tabValues:r}){var n;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let s=null!==(n=r.find(e=>e.default))&&void 0!==n?n:r[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:r,tabValues:o})),[f,m]=function({queryString:e=!1,groupId:r}){let n=(0,t.W6)(),s=function({queryString:e=!1,groupId:r}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:e,groupId:r});return[(0,l.aZ)(s),(0,a.useCallback)(e=>{var r,a;if(!s)return;let o=new URLSearchParams(n.location.search);o.set(s,e),n.replace((r=function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},s=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),s.forEach(function(r){var s;s=n[r],r in e?Object.defineProperty(e,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[r]=s})}return e}({},n.location),a=a={search:o.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):(function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n.push.apply(n,s)}return n})(Object(a)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(a,e))}),r))},[s,n])]}({queryString:n,groupId:s}),[x,j]=function({groupId:e}){let r=e?`docusaurus.tab.${e}`:null,[n,s]=(0,d.Dv)(r);return[n,(0,a.useCallback)(e=>{r&&s.set(e)},[r,s])]}({groupId:s}),y=(()=>{let e=null!=f?f:x;return p({value:e,tabValues:o})?e:null})();return(0,c.A)(()=>{y&&g(y)},[y]),{selectedValue:i,selectValue:(0,a.useCallback)(e=>{if(!p({value:e,tabValues:o}))throw Error(`Can't select invalid tab value=${e}`);g(e),m(e),j(e)},[m,j,o]),tabValues:o}}(e);return(0,s.jsxs)("div",{className:(0,o.A)("tabs-container","tabList_Qoir"),children:[(0,s.jsx)(x,f({},r,e)),(0,s.jsx)(j,f({},r,e))]})}function b(e){let r=(0,g.A)();return(0,s.jsx)(y,m(f({},e),{children:u(e.children)}),String(r))}},25472:(e,r,n)=>{n.d(r,{A:()=>s});let s=n.p+"assets/images/docsearch-troubleshoot-index-facets-4c0d9816a72c457e3e8352bc0fceccb6.jpg"},12787:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>d});let s=JSON.parse('{"id":"search","title":"Search","description":"There are a few options you can use to add search to your website:","source":"@site/docs/search.mdx","sourceDirName":".","slug":"/search","permalink":"/docs/search","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/search.mdx","tags":[],"version":"current","lastUpdatedBy":"Chris Cho","lastUpdatedAt":1726217516000,"frontMatter":{"keywords":["algolia","search"]},"sidebar":"docs","previous":{"title":"Static Assets","permalink":"/docs/static-assets"},"next":{"title":"Browser support","permalink":"/docs/browser-support"}}');var a=n(62540),o=n(43023),i=n(27446),t=n(15995);let c={keywords:["algolia","search"]},l="Search",h={},d=[{value:"\u{1F947} Using Algolia DocSearch",id:"using-algolia-docsearch",level:2},{value:"Index Configuration",id:"algolia-index-configuration",level:3},{value:"Connecting Algolia",id:"connecting-algolia",level:3},{value:"Contextual search",id:"contextual-search",level:3},{value:"Styling your Algolia search",id:"styling-your-algolia-search",level:3},{value:"Customizing the Algolia search behavior",id:"customizing-the-algolia-search-behavior",level:3},{value:"Editing the Algolia search component",id:"editing-the-algolia-search-component",level:3},{value:"Troubleshooting",id:"algolia-troubleshooting",level:3},{value:"No Search Results",id:"algolia-no-search-results",level:4},{value:"Support",id:"algolia-support",level:3},{value:"\u{1F465} Using Typesense DocSearch",id:"using-typesense-docsearch",level:2},{value:"\u{1F465} Using Local Search",id:"using-local-search",level:2},{value:"\u{1F465} Using your own search",id:"using-your-own-search",level:2}];function u(e){let r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Details:s}=r;return s||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"search",children:"Search"})}),"\n",(0,a.jsx)(r.p,{children:"There are a few options you can use to add search to your website:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\u{1F947} ",(0,a.jsx)(r.a,{href:"#using-algolia-docsearch",children:"Algolia DocSearch"})," (",(0,a.jsx)(r.strong,{children:"official"}),")"]}),"\n",(0,a.jsxs)(r.li,{children:["\u{1F465} ",(0,a.jsx)(r.a,{href:"#using-typesense-docsearch",children:"Typesense DocSearch"})]}),"\n",(0,a.jsxs)(r.li,{children:["\u{1F465} ",(0,a.jsx)(r.a,{href:"#using-local-search",children:"Local Search"})]}),"\n",(0,a.jsxs)(r.li,{children:["\u{1F465} ",(0,a.jsxs)(r.a,{href:"#using-your-own-search",children:["Your own ",(0,a.jsx)(r.code,{children:"SearchBar"})," component"]})]}),"\n"]}),"\n",(0,a.jsxs)(r.admonition,{type:"info",children:[(0,a.jsxs)(r.p,{children:["\u{1F947} Docusaurus provides ",(0,a.jsx)(r.strong,{children:"first-class support"})," for ",(0,a.jsx)(r.a,{href:"#using-algolia-docsearch",children:"Algolia DocSearch"}),"."]}),(0,a.jsxs)(r.p,{children:["\u{1F465} Other options are ",(0,a.jsx)(r.strong,{children:"maintained by the community"}),": please report bugs to their respective repositories."]})]}),"\n",(0,a.jsx)(r.h2,{id:"using-algolia-docsearch",children:"\u{1F947} Using Algolia DocSearch"}),"\n",(0,a.jsxs)(r.p,{children:["Docusaurus has ",(0,a.jsx)(r.strong,{children:"official support"})," for ",(0,a.jsx)(r.a,{href:"https://docsearch.algolia.com",children:"Algolia DocSearch"}),"."]}),"\n",(0,a.jsxs)(r.p,{children:["The service is ",(0,a.jsx)(r.strong,{children:"free"})," for any developer documentation or technical blog: just make sure to read the ",(0,a.jsx)(r.a,{href:"https://docsearch.algolia.com/docs/who-can-apply/",children:"checklist"})," and ",(0,a.jsx)(r.a,{href:"https://docsearch.algolia.com/apply",children:"apply to the DocSearch program"}),"."]}),"\n",(0,a.jsx)(r.p,{children:"DocSearch crawls your website once a week (the schedule is configurable from the web interface) and aggregates all the content in an Algolia index. This content is then queried directly from your front-end using the Algolia API."}),"\n",(0,a.jsxs)(r.p,{children:["If your website is ",(0,a.jsx)(r.a,{href:"https://docsearch.algolia.com/docs/who-can-apply",children:"not eligible"})," for the free, hosted version of DocSearch, or if your website sits behind a firewall and is not public, then you can ",(0,a.jsx)(r.a,{href:"https://docsearch.algolia.com/docs/run-your-own/",children:"run your own"})," DocSearch crawler."]}),"\n",(0,a.jsx)(r.admonition,{type:"note",children:(0,a.jsxs)(r.p,{children:["By default, the Docusaurus preset generates a ",(0,a.jsx)(r.a,{href:"https://docusaurus.io/sitemap.xml",children:"sitemap.xml"})," that the Algolia crawler can use."]})}),"\n",(0,a.jsx)(r.admonition,{title:"From the old docsearch?",type:"info",children:(0,a.jsxs)(r.p,{children:["You can read more about migration from the legacy DocSearch infra in ",(0,a.jsx)(r.a,{href:"/blog/2021/11/21/algolia-docsearch-migration",children:"our blog post"})," or ",(0,a.jsx)(r.a,{href:"https://docsearch.algolia.com/docs/migrating-from-legacy",children:"the DocSearch migration docs"}),"."]})}),"\n",(0,a.jsx)(r.h3,{id:"algolia-index-configuration",children:"Index Configuration"}),"\n",(0,a.jsxs)(r.p,{children:["After your application has been approved and deployed, you will receive an email with all the details for you to add DocSearch to your project. Editing and managing your crawls can be done via ",(0,a.jsx)(r.a,{href:"https://crawler.algolia.com/",children:"the web interface"}),". Indices are readily available after deployment, so manual configuration usually isn't necessary."]}),"\n",(0,a.jsx)(r.admonition,{title:"Use the recommended crawler config",type:"danger",children:(0,a.jsxs)(r.p,{children:["It is highly recommended to use our official ",(0,a.jsx)(r.a,{href:"https://docsearch.algolia.com/docs/templates/#docusaurus-v3-template",children:(0,a.jsx)(r.strong,{children:"Docusaurus v3 crawler configuration"})}),". We cannot support you if you choose a different crawler configuration."]})}),"\n",(0,a.jsxs)(r.admonition,{title:"When updating your crawler config",type:"warning",children:[(0,a.jsxs)(r.p,{children:["The crawler configuration contains a ",(0,a.jsx)(r.code,{children:"initialIndexSettings"}),", which will only be used to initialize your Algolia index if it does not exist yet."]}),(0,a.jsxs)(r.p,{children:["If you update your ",(0,a.jsx)(r.code,{children:"initialIndexSettings"})," crawler setting, it is possible to update the index manually through the interface, but ",(0,a.jsx)(r.a,{href:"https://github.com/facebook/docusaurus/issues/9200#issuecomment-1667338492",children:"the Algolia team recommends to delete your index and then restart a crawl"})," to fully reinitialize it with the new settings."]})]}),"\n",(0,a.jsx)(r.h3,{id:"connecting-algolia",children:"Connecting Algolia"}),"\n",(0,a.jsxs)(r.p,{children:["Docusaurus' own ",(0,a.jsx)(r.code,{children:"@docusaurus/preset-classic"})," supports Algolia DocSearch integration. If you use the classic preset, no additional installation is needed."]}),"\n",(0,a.jsxs)(s,{children:[(0,a.jsxs)("summary",{children:["Installation steps when not using ",(0,a.jsx)("code",{children:"@docusaurus/preset-classic"})]}),(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsx)(r.li,{children:"Install the package:"}),"\n"]}),(0,a.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,a.jsx)(t.A,{value:"npm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"npm install --save @docusaurus/theme-search-algolia\n"})})}),(0,a.jsx)(t.A,{value:"yarn",label:"Yarn",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"yarn add @docusaurus/theme-search-algolia\n"})})}),(0,a.jsx)(t.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"pnpm add @docusaurus/theme-search-algolia\n"})})})]}),(0,a.jsxs)(r.ol,{start:"2",children:["\n",(0,a.jsxs)(r.li,{children:["Register the theme in ",(0,a.jsx)(r.code,{children:"docusaurus.config.js"}),":"]}),"\n"]}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  title: 'My site',\n  // ...\n  themes: ['@docusaurus/theme-search-algolia'],\n  themeConfig: {\n    // ...\n  },\n};\n"})})]}),"\n",(0,a.jsxs)(r.p,{children:["Then, add an ",(0,a.jsx)(r.code,{children:"algolia"})," field in your ",(0,a.jsx)(r.code,{children:"themeConfig"}),". ",(0,a.jsx)(r.strong,{children:(0,a.jsx)(r.a,{href:"https://docsearch.algolia.com/apply/",children:"Apply for DocSearch"})})," to get your Algolia index and API key."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  themeConfig: {\n    // ...\n    // highlight-start\n    algolia: {\n      // The application ID provided by Algolia\n      appId: 'YOUR_APP_ID',\n\n      // Public API key: it is safe to commit it\n      apiKey: 'YOUR_SEARCH_API_KEY',\n\n      indexName: 'YOUR_INDEX_NAME',\n\n      // Optional: see doc section below\n      contextualSearch: true,\n\n      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.\n      externalUrlRegex: 'external\\\\.com|domain\\\\.com',\n\n      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs\n      replaceSearchResultPathname: {\n        from: '/docs/', // or as RegExp: /\\/docs\\//\n        to: '/',\n      },\n\n      // Optional: Algolia search parameters\n      searchParameters: {},\n\n      // Optional: path for search page that enabled by default (`false` to disable it)\n      searchPagePath: 'search',\n\n      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)\n      insights: false,\n\n      //... other Algolia params\n    },\n    // highlight-end\n  },\n};\n"})}),"\n",(0,a.jsxs)(r.admonition,{type:"info",children:[(0,a.jsxs)(r.p,{children:["The ",(0,a.jsx)(r.code,{children:"searchParameters"})," option used to be named ",(0,a.jsx)(r.code,{children:"algoliaOptions"})," in Docusaurus v1."]}),(0,a.jsxs)(r.p,{children:["Refer to its ",(0,a.jsx)(r.a,{href:"https://docsearch.algolia.com/docs/api#searchparameters",children:"official DocSearch documentation"})," for possible values."]})]}),"\n",(0,a.jsxs)(r.admonition,{type:"warning",children:[(0,a.jsx)(r.p,{children:"The search feature will not work reliably until Algolia crawls your site."}),(0,a.jsxs)(r.p,{children:["If search doesn't work after any significant change, please use the Algolia dashboard to ",(0,a.jsx)(r.strong,{children:"trigger a new crawl"}),"."]})]}),"\n",(0,a.jsx)(r.h3,{id:"contextual-search",children:"Contextual search"}),"\n",(0,a.jsxs)(r.p,{children:["Contextual search is ",(0,a.jsx)(r.strong,{children:"enabled by default"}),"."]}),"\n",(0,a.jsxs)(r.p,{children:["It ensures that search results are ",(0,a.jsx)(r.strong,{children:"relevant to the current language and version"}),"."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  themeConfig: {\n    // ...\n    // highlight-start\n    algolia: {\n      contextualSearch: true,\n    },\n    // highlight-end\n  },\n};\n"})}),"\n",(0,a.jsxs)(r.p,{children:["Let's consider you have 2 docs versions (",(0,a.jsx)(r.strong,{children:"v1"})," and ",(0,a.jsx)(r.strong,{children:"v2"}),") and 2 languages (",(0,a.jsx)(r.code,{children:"en"})," and ",(0,a.jsx)(r.code,{children:"fr"}),")."]}),"\n",(0,a.jsx)(r.p,{children:"When browsing v2 docs, it would be odd to return search results for the v1 documentation. Sometimes v1 and v2 docs are quite similar, and you would end up with duplicate search results for the same query (one result per version)."}),"\n",(0,a.jsx)(r.p,{children:"Similarly, when browsing the French site, it would be odd to return search results for the English docs."}),"\n",(0,a.jsx)(r.p,{children:"To solve this problem, the contextual search feature understands that you are browsing a specific docs version and language, and will create the search query filters dynamically."}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["on ",(0,a.jsx)(r.code,{children:"/en/docs/v1/myDoc"}),", search results will only include ",(0,a.jsx)(r.strong,{children:"English"})," results for the ",(0,a.jsx)(r.strong,{children:"v1"})," docs (+ other unversioned pages)"]}),"\n",(0,a.jsxs)(r.li,{children:["on ",(0,a.jsx)(r.code,{children:"/fr/docs/v2/myDoc"}),", search results will only include ",(0,a.jsx)(r.strong,{children:"French"})," results for the ",(0,a.jsx)(r.strong,{children:"v2"})," docs (+ other unversioned pages)"]}),"\n"]}),"\n",(0,a.jsxs)(r.admonition,{type:"info",children:[(0,a.jsxs)(r.p,{children:["When using ",(0,a.jsx)(r.code,{children:"contextualSearch: true"})," (default), the contextual facet filters will be merged with the ones provided with ",(0,a.jsx)(r.code,{children:"algolia.searchParameters.facetFilters"})," ."]}),(0,a.jsxs)(r.p,{children:["For specific needs, you can disable ",(0,a.jsx)(r.code,{children:"contextualSearch"})," and define your own ",(0,a.jsx)(r.code,{children:"facetFilters"}),":"]}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  themeConfig: {\n    // ...\n    // highlight-start\n    algolia: {\n      contextualSearch: false,\n      searchParameters: {\n        facetFilters: ['language:en', ['filter1', 'filter2'], 'filter3'],\n      },\n    },\n    // highlight-end\n  },\n};\n"})}),(0,a.jsxs)(r.p,{children:["Refer to the relevant ",(0,a.jsx)(r.a,{href:"https://www.algolia.com/doc/guides/managing-results/refine-results/faceting/",children:"Algolia faceting documentation"}),"."]})]}),"\n",(0,a.jsx)(r.admonition,{title:"Contextual search doesn't work?",type:"warning",children:(0,a.jsxs)(r.p,{children:["If you only get search results when Contextual Search is disabled, this is very likely because of an ",(0,a.jsx)(r.a,{href:"#algolia-no-search-results",children:"index configuration issue"}),"."]})}),"\n",(0,a.jsx)(r.h3,{id:"styling-your-algolia-search",children:"Styling your Algolia search"}),"\n",(0,a.jsx)(r.p,{children:"By default, DocSearch comes with a fine-tuned theme that was designed for accessibility, making sure that colors and contrasts respect standards."}),"\n",(0,a.jsxs)(r.p,{children:["Still, you can reuse the ",(0,a.jsx)(r.a,{href:"/docs/styling-layout#styling-your-site-with-infima",children:"Infima CSS variables"})," from Docusaurus to style DocSearch by editing the ",(0,a.jsx)(r.code,{children:"/src/css/custom.css"})," file."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-css",metastring:'title="/src/css/custom.css"',children:"[data-theme='light'] .DocSearch {\n  /* --docsearch-primary-color: var(--ifm-color-primary); */\n  /* --docsearch-text-color: var(--ifm-font-color-base); */\n  --docsearch-muted-color: var(--ifm-color-secondary-darkest);\n  --docsearch-container-background: rgba(94, 100, 112, 0.7);\n  /* Modal */\n  --docsearch-modal-background: var(--ifm-color-secondary-lighter);\n  /* Search box */\n  --docsearch-searchbox-background: var(--ifm-color-secondary);\n  --docsearch-searchbox-focus-background: var(--ifm-color-white);\n  /* Hit */\n  --docsearch-hit-color: var(--ifm-font-color-base);\n  --docsearch-hit-active-color: var(--ifm-color-white);\n  --docsearch-hit-background: var(--ifm-color-white);\n  /* Footer */\n  --docsearch-footer-background: var(--ifm-color-white);\n}\n\n[data-theme='dark'] .DocSearch {\n  --docsearch-text-color: var(--ifm-font-color-base);\n  --docsearch-muted-color: var(--ifm-color-secondary-darkest);\n  --docsearch-container-background: rgba(47, 55, 69, 0.7);\n  /* Modal */\n  --docsearch-modal-background: var(--ifm-background-color);\n  /* Search box */\n  --docsearch-searchbox-background: var(--ifm-background-color);\n  --docsearch-searchbox-focus-background: var(--ifm-color-black);\n  /* Hit */\n  --docsearch-hit-color: var(--ifm-font-color-base);\n  --docsearch-hit-active-color: var(--ifm-color-white);\n  --docsearch-hit-background: var(--ifm-color-emphasis-100);\n  /* Footer */\n  --docsearch-footer-background: var(--ifm-background-surface-color);\n  --docsearch-key-gradient: linear-gradient(\n    -26.5deg,\n    var(--ifm-color-emphasis-200) 0%,\n    var(--ifm-color-emphasis-100) 100%\n  );\n}\n"})}),"\n",(0,a.jsx)(r.h3,{id:"customizing-the-algolia-search-behavior",children:"Customizing the Algolia search behavior"}),"\n",(0,a.jsxs)(r.p,{children:["Algolia DocSearch supports a ",(0,a.jsx)(r.a,{href:"https://docsearch.algolia.com/docs/api/",children:"list of options"})," that you can pass to the ",(0,a.jsx)(r.code,{children:"algolia"})," field in the ",(0,a.jsx)(r.code,{children:"docusaurus.config.js"})," file."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    // ...\n    algolia: {\n      apiKey: 'YOUR_API_KEY',\n      indexName: 'YOUR_INDEX_NAME',\n      // Options...\n    },\n  },\n};\n"})}),"\n",(0,a.jsx)(r.h3,{id:"editing-the-algolia-search-component",children:"Editing the Algolia search component"}),"\n",(0,a.jsxs)(r.p,{children:["If you prefer to edit the Algolia search React component, ",(0,a.jsx)(r.a,{href:"/docs/swizzling",children:"swizzle"})," the ",(0,a.jsx)(r.code,{children:"SearchBar"})," component in ",(0,a.jsx)(r.code,{children:"@docusaurus/theme-search-algolia"}),":"]}),"\n",(0,a.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,a.jsx)(t.A,{value:"npm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"npm run swizzle @docusaurus/theme-search-algolia SearchBar\n"})})}),(0,a.jsx)(t.A,{value:"yarn",label:"Yarn",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"yarn swizzle @docusaurus/theme-search-algolia SearchBar\n"})})}),(0,a.jsx)(t.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"pnpm run swizzle @docusaurus/theme-search-algolia SearchBar\n"})})})]}),"\n",(0,a.jsx)(r.h3,{id:"algolia-troubleshooting",children:"Troubleshooting"}),"\n",(0,a.jsx)(r.p,{children:"Here are the most common issues Docusaurus users face when using Algolia DocSearch."}),"\n",(0,a.jsx)(r.h4,{id:"algolia-no-search-results",children:"No Search Results"}),"\n",(0,a.jsxs)(r.p,{children:["Seeing no search results is usually related to an ",(0,a.jsx)(r.strong,{children:"index configuration problem"}),"."]}),"\n",(0,a.jsxs)(s,{children:[(0,a.jsx)("summary",{children:"How to check if I have a config problem?"}),(0,a.jsxs)(r.p,{children:["Docusaurus uses ",(0,a.jsx)(r.a,{href:"https://www.algolia.com/doc/guides/managing-results/refine-results/faceting/",children:"Algolia faceting"})," for its ",(0,a.jsx)(r.a,{href:"#contextual-search",children:"Contextual Search"})," feature, to create dynamic queries such as:"]}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-json",children:'[\n  "language:en",\n  [\n    "docusaurus_tag:default",\n    "docusaurus_tag:docs-default-3.2.1",\n    "docusaurus_tag:docs-community-current",\n    "docusaurus_tag:docs-docs-tests-current"\n  ]\n]\n'})}),(0,a.jsxs)(r.p,{children:["On the Algolia UI, your index should allow to create facet queries on fields ",(0,a.jsx)(r.code,{children:"docusaurus_tag"}),", ",(0,a.jsx)(r.code,{children:"language"}),", ",(0,a.jsx)(r.code,{children:"lang"}),", ",(0,a.jsx)(r.code,{children:"version"}),", ",(0,a.jsx)(r.code,{children:"type"}),", as shown in the screenshot below:"]}),(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"Algolia index showing appropriate faceting fields",src:n(25472).A+"",width:"1072",height:"1761"})}),(0,a.jsxs)(r.p,{children:["Alternatively, if you disable ",(0,a.jsx)(r.a,{href:"#contextual-search",children:"Contextual Search"})," with ",(0,a.jsx)(r.code,{children:"{contextualSearch: false}"})," (which we don't particularly recommend), Docusaurus will not use facet queries, and you should start seeing results."]})]}),"\n",(0,a.jsx)(r.admonition,{title:"Use the recommended configuration",type:"danger",children:(0,a.jsxs)(r.p,{children:["We ",(0,a.jsx)(r.a,{href:"#algolia-index-configuration",children:"recommend a specific crawler configuration"})," for a good reason. We cannot support you if you choose to use a different configuration."]})}),"\n",(0,a.jsx)(r.p,{children:"You can fix index configuration problems by following those steps:"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["Use the ",(0,a.jsx)(r.a,{href:"#algolia-index-configuration",children:"recommend crawler configuration"})]}),"\n",(0,a.jsx)(r.li,{children:"Delete your index through the UI"}),"\n",(0,a.jsx)(r.li,{children:"Trigger a new crawl through the UI"}),"\n",(0,a.jsxs)(r.li,{children:["Check your index is recreated with the appropriate faceting fields: ",(0,a.jsx)(r.code,{children:"docusaurus_tag"}),", ",(0,a.jsx)(r.code,{children:"language"}),", ",(0,a.jsx)(r.code,{children:"lang"}),", ",(0,a.jsx)(r.code,{children:"version"}),", ",(0,a.jsx)(r.code,{children:"type"})]}),"\n",(0,a.jsxs)(r.li,{children:["See that you now get search results, even with ",(0,a.jsx)(r.a,{href:"#contextual-search",children:"Contextual Search"})," enabled"]}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"algolia-support",children:"Support"}),"\n",(0,a.jsx)(r.p,{children:"The Algolia DocSearch team can help you figure out search problems on your site."}),"\n",(0,a.jsxs)(r.p,{children:["You can reach out to Algolia via ",(0,a.jsx)(r.a,{href:"https://algolia.com/support",children:"their support page"})," or on ",(0,a.jsx)(r.a,{href:"https://discord.gg/wr2m5j948P",children:"Discord"}),"."]}),"\n",(0,a.jsxs)(r.p,{children:["Docusaurus also has an ",(0,a.jsx)(r.code,{children:"#algolia"})," channel on ",(0,a.jsx)(r.a,{href:"https://discordapp.com/invite/docusaurus",children:"Discord"}),"."]}),"\n",(0,a.jsx)(r.h2,{id:"using-typesense-docsearch",children:"\u{1F465} Using Typesense DocSearch"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"https://typesense.org",children:"Typesense"})," DocSearch works similar to Algolia DocSearch, except that your website is indexed into a Typesense search cluster."]}),"\n",(0,a.jsxs)(r.p,{children:["Typesense is an ",(0,a.jsx)(r.a,{href:"https://github.com/typesense/typesense",children:"open source"})," instant-search engine that you can either:"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"https://typesense.org/docs/guide/install-typesense.html#option-2-local-machine-self-hosting",children:"Self-Host"})," on your own servers or"]}),"\n",(0,a.jsxs)(r.li,{children:["Use the Managed ",(0,a.jsx)(r.a,{href:"https://cloud.typesense.org",children:"Typesense Cloud"})," service."]}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"Similar to Algolia DocSearch, there are two components:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"https://github.com/typesense/typesense-docsearch-scraper",children:"typesense-docsearch-scraper"})," - which scrapes your website and indexes the data in your Typesense cluster."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"https://github.com/typesense/docusaurus-theme-search-typesense",children:"docusaurus-theme-search-typesense"})," - a search bar UI component to add to your website."]}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:["Read a step-by-step walk-through of how to ",(0,a.jsx)(r.a,{href:"https://typesense.org/docs/guide/docsearch.html#step-1-set-up-docsearch-scraper",children:"run typesense-docsearch-scraper here"})," and how to ",(0,a.jsx)(r.a,{href:"https://typesense.org/docs/guide/docsearch.html#option-a-docusaurus-powered-sites",children:"install the Search Bar in your Docusaurus Site here"}),"."]}),"\n",(0,a.jsx)(r.h2,{id:"using-local-search",children:"\u{1F465} Using Local Search"}),"\n",(0,a.jsx)(r.p,{children:"You can use a local search plugin for websites where the search index is small and can be downloaded to your users' browsers when they visit your website."}),"\n",(0,a.jsxs)(r.p,{children:["You'll find a list of community-supported ",(0,a.jsx)(r.a,{href:"https://docusaurus.io/community/resources#search",children:"local search plugins listed here"}),"."]}),"\n",(0,a.jsx)(r.h2,{id:"using-your-own-search",children:"\u{1F465} Using your own search"}),"\n",(0,a.jsxs)(r.p,{children:["To use your own search, swizzle the ",(0,a.jsx)(r.code,{children:"SearchBar"})," component in ",(0,a.jsx)(r.code,{children:"@docusaurus/theme-classic"})]}),"\n",(0,a.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,a.jsx)(t.A,{value:"npm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"npm run swizzle @docusaurus/theme-classic SearchBar\n"})})}),(0,a.jsx)(t.A,{value:"yarn",label:"Yarn",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"yarn swizzle @docusaurus/theme-classic SearchBar\n"})})}),(0,a.jsx)(t.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"pnpm run swizzle @docusaurus/theme-classic SearchBar\n"})})})]}),"\n",(0,a.jsxs)(r.p,{children:["This will create an ",(0,a.jsx)(r.code,{children:"src/theme/SearchBar"})," file in your project folder. Restart your dev server and edit the component, you will see that Docusaurus uses your own ",(0,a.jsx)(r.code,{children:"SearchBar"})," component now."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Notes"}),": You can alternatively ",(0,a.jsx)(r.a,{href:"#editing-the-algolia-search-component",children:"swizzle from Algolia SearchBar"})," and create your own search component from there."]})]})}function p(e={}){let{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},43023:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>t});var s=n(63696);let a={},o=s.createContext(a);function i(e){let r=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);