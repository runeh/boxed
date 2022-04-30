"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[195],{8066:function(e,t,n){n.d(t,{Z:function(){return T}});var a=n(3117),o=n(7294),l=n(6010),r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:n(7410).default,theme:r};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}var u=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=i({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=i({},n,{backgroundColor:null}),o};function g(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var y=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,l=i({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),r=t.getThemeDict(t.props);return void 0!==r&&(l.style=r.plain),void 0!==o&&(l.style=void 0!==l.style?i({},l.style,o):o),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),s(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return l[n[0]];var r=a?{display:"inline-block"}:{},c=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[r].concat(c))}})),s(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,l=e.token,r=i({},g(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==o&&(r.style=void 0!==r.style?i({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),s(this,"tokenize",(function(e,t,n,a){var o={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var l=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,l=this.getThemeDict(this.props),r=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],l=0,r=0,c=[],s=[c];r>-1;){for(;(l=a[r]++)<o[r];){var i=void 0,d=t[r],g=n[r][l];if("string"==typeof g?(d=r>0?d:["plain"],i=g):(d=p(d,g.type),g.alias&&(d=p(d,g.alias)),i=g.content),"string"==typeof i){var y=i.split(u),h=y.length;c.push({types:d,content:y[0]});for(var v=1;v<h;v++)m(c),s.push(c=[]),c.push({types:d,content:y[v]})}else r++,t.push(d),n.push(i),a.push(0),o.push(i.length)}r--,t.pop(),n.pop(),a.pop(),o.pop()}return m(c),s}(void 0!==r?this.tokenize(t,a,r,n):[a]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component),h=y,v=n(9575);var f=n(5999),E="copyButton_eDfN",k="copyButtonCopied_ljy5",b="copyButtonIcons_W9eQ",N="copyButtonIcon_XEyF",w="copyButtonSuccessIcon_i9w9";function Z(e){var t=e.code,n=(0,o.useState)(!1),a=n[0],r=n[1],c=(0,o.useRef)(void 0),s=(0,o.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,a=void 0===n?document.body:n,o=document.createElement("textarea"),l=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var r=document.getSelection(),c=!1;r.rangeCount>0&&(c=r.getRangeAt(0)),a.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;var s=!1;try{s=document.execCommand("copy")}catch(i){}o.remove(),c&&(r.removeAllRanges(),r.addRange(c)),l&&l.focus()}(t),r(!0),c.current=window.setTimeout((function(){r(!1)}),1e3)}),[t]);return(0,o.useEffect)((function(){return function(){return window.clearTimeout(c.current)}}),[]),o.createElement("button",{type:"button","aria-label":a?(0,f.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,f.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,f.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)(E,"clean-btn",a&&k),onClick:s},o.createElement("span",{className:b,"aria-hidden":"true"},o.createElement("svg",{className:N,viewBox:"0 0 24 24"},o.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),o.createElement("svg",{className:w,viewBox:"0 0 24 24"},o.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var A="codeBlockContainer_I0IT",B="codeBlockContent_wNvx",x="codeBlockTitle_BvAR",_="codeBlock_jd64",C="codeBlockStandalone_csWH",L="codeBlockLines_mRuA";function T(e){var t,n=e.children,r=e.className,s=void 0===r?"":r,i=e.metastring,u=e.title,m=e.language,p=(0,v.LU)().prism,d=(0,o.useState)(!1),g=d[0],y=d[1];(0,o.useEffect)((function(){y(!0)}),[]);var f=(0,v.bc)(i)||u,E=(0,v.pJ)();if(o.Children.toArray(n).some((function(e){return(0,o.isValidElement)(e)})))return o.createElement(h,(0,a.Z)({},c,{key:String(g),theme:E,code:"",language:"text"}),(function(e){var t=e.className,a=e.style;return o.createElement("pre",{tabIndex:0,className:(0,l.Z)(t,C,"thin-scrollbar",A,s,v.kM.common.codeBlock),style:a},o.createElement("code",{className:L},n))}));var k=Array.isArray(n)?n.join(""):n,b=null!=(t=null!=m?m:(0,v.Vo)(s))?t:p.defaultLanguage,N=(0,v.nZ)(k,i,b),w=N.highlightLines,T=N.code;return o.createElement(h,(0,a.Z)({},c,{key:String(g),theme:E,code:T,language:null!=b?b:"text"}),(function(e){var t,n=e.className,r=e.style,c=e.tokens,i=e.getLineProps,u=e.getTokenProps;return o.createElement("div",{className:(0,l.Z)(A,s,(t={},t["language-"+b]=b&&!s.includes("language-"+b),t),v.kM.common.codeBlock)},f&&o.createElement("div",{style:r,className:x},f),o.createElement("div",{className:B,style:r},o.createElement("pre",{tabIndex:0,className:(0,l.Z)(n,_,"thin-scrollbar")},o.createElement("code",{className:L},c.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=i({line:e,key:t});return w.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),o.createElement("span",(0,a.Z)({key:t},n),e.map((function(e,t){return o.createElement("span",(0,a.Z)({key:t},u({token:e,key:t})))})),o.createElement("br",null))})))),o.createElement(Z,{code:T})))}))}},3261:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(9960),o=n(2263),l=n(8066),r=n(2600),c=n(7294),s=n(3117),i="features_t9lD",u="svgContainer_uQs8",m="svg_FQEk",p=[{title:"Avoid accidental complexity",svg:c.createElement("svg",{className:m,width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"m18.492 2.33 3.179 3.179a2.25 2.25 0 0 1 0 3.182l-2.584 2.584A2.25 2.25 0 0 1 21 13.5v5.25A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25A2.25 2.25 0 0 1 5.25 3h5.25a2.25 2.25 0 0 1 2.225 1.915L15.31 2.33a2.25 2.25 0 0 1 3.182 0ZM4.5 18.75c0 .414.336.75.75.75l5.999-.001.001-6.75H4.5v6Zm8.249.749h6.001a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-6.001v6.75Zm-2.249-15H5.25a.75.75 0 0 0-.75.75v6h6.75v-6a.75.75 0 0 0-.75-.75Zm2.25 4.81v1.94h1.94l-1.94-1.94Zm3.62-5.918-3.178 3.178a.75.75 0 0 0 0 1.061l3.179 3.179a.75.75 0 0 0 1.06 0l3.18-3.179a.75.75 0 0 0 0-1.06l-3.18-3.18a.75.75 0 0 0-1.06 0Z",fill:"#6240B5"})),description:c.createElement(c.Fragment,null,"Boxed provides functional building blocks that make your code more"," ",c.createElement("strong",null,"maintainable"),", more ",c.createElement("strong",null,"expressive"),", and"," ",c.createElement("strong",null,"safer"),".")},{title:"Focused on DX",svg:c.createElement("svg",{className:m,width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M2 5.25A3.25 3.25 0 0 1 5.25 2h11.5A3.25 3.25 0 0 1 20 5.25v2.76a4.508 4.508 0 0 0-1.5.096V7h-15v9.75c0 .966.784 1.75 1.75 1.75h7.985l-.441.764a2.457 2.457 0 0 0-.28.736H5.25A3.25 3.25 0 0 1 2 16.75V5.25ZM5.25 3.5A1.75 1.75 0 0 0 3.5 5.25v.25h15v-.25a1.75 1.75 0 0 0-1.75-1.75H5.25ZM19.857 9a3.496 3.496 0 0 0-3.356 1.736 3.5 3.5 0 0 0 .184 3.788l-3.025 5.24a1.459 1.459 0 0 0 2.526 1.458l3.03-5.25a3.5 3.5 0 0 0 2.976-5.761l-1.65 2.858a1.167 1.167 0 1 1-2.021-1.167l1.65-2.858A3.478 3.478 0 0 0 19.857 9Zm-9.554.243a.75.75 0 0 1-.046 1.06L7.86 12.5l2.397 2.197a.75.75 0 0 1-1.014 1.106l-3-2.75a.75.75 0 0 1 0-1.106l3-2.75a.75.75 0 0 1 1.06.046Zm2.954 6.56 2.02-1.852a4.495 4.495 0 0 1-.008-2.91l-2.012-1.844a.75.75 0 0 0-1.014 1.106L14.64 12.5l-2.397 2.197a.75.75 0 0 0 1.014 1.106Z",fill:"#6240B5"})),description:c.createElement(c.Fragment,null,"We provide a very ",c.createElement("strong",null,"small API surface"),". With easy interop, and ",c.createElement("strong",null,"compatiblity")," with the ecosystem (like"," ",c.createElement("a",{href:"https://github.com/gvergnaud/ts-pattern"},"ts-pattern"),")")},{title:"Easy to reason about",svg:c.createElement("svg",{className:m,width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M4 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0 1.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM9.5 15a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm0 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM11.823 2a5.414 5.414 0 0 1 5.33 4.47h.082a3.765 3.765 0 1 1 0 7.53H6.412a3.765 3.765 0 1 1 0-7.53h.081A5.414 5.414 0 0 1 11.823 2Zm.006 1.498a3.927 3.927 0 0 0-3.923 3.728.693.693 0 0 1-.692.659h-.7a2.31 2.31 0 1 0 0 4.617h10.63a2.31 2.31 0 1 0 0-4.617h-.7a.693.693 0 0 1-.692-.659 3.927 3.927 0 0 0-3.923-3.728Z",fill:"#6240B5"})),description:c.createElement(c.Fragment,null,"The concepts exposed by Boxed are ",c.createElement("strong",null,"simple")," and"," ",c.createElement("strong",null,"accessible"),": you don't need a CS\xa0degree to get started.")}];function d(e){var t=e.svg,n=e.title,a=e.description;return c.createElement("div",{className:"col col--4"},c.createElement("div",{className:u},t),c.createElement("div",{className:"text--center padding-horiz--md"},c.createElement("h3",null,n),c.createElement("p",null,a)))}function g(){return c.createElement("section",{className:i},c.createElement("div",{className:"container"},c.createElement("div",{className:"row"},p.map((function(e,t){return c.createElement(d,(0,s.Z)({key:t},e))})))))}var y="hero_aEcG",h="heroTitle_qg2I",v="heroSubtitle_jFu1",f="logo_Ukns",E="code_wG_E",k="codeBlock_NVHr",b="separator_GbEa";function N(){var e=(0,o.Z)().siteConfig;return c.createElement("header",{className:"hero hero--primary "+y},c.createElement("img",{src:"./img/logo.svg",alt:"",className:f}),c.createElement("div",{className:"container"},c.createElement("h1",{className:h},e.title),c.createElement("p",{className:v},e.tagline),c.createElement("div",null,c.createElement(a.Z,{className:"button button--lg",to:"/getting-started"},"Get started"),c.createElement("span",{className:b}),c.createElement(a.Z,{className:"button button--lg",to:"/option"},"API reference"))),c.createElement("div",{className:E},c.createElement(l.Z,{className:k,language:"typescript"},'import { AsyncData } from "@swan-io/boxed";\n\nconst UserCard = ({user}: {user: AsyncData<User>}) => {\n  return user.match({\n    NotAsked: () => null,\n    Loading: () => `Loading`,\n    Done: (user) => {\n      const name = user.name.getWithDefault("anonymous");\n      return `Hello ${name}!`;\n    },\n  });\n};')))}var w=function(){var e=(0,o.Z)().siteConfig;return c.createElement(r.Z,{title:"Boxed: "+e.tagline,description:"Functional utility types and functions for TypeScript"},c.createElement(N,null),c.createElement("main",null,c.createElement(g,null)))}}}]);