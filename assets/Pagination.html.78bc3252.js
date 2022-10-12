var f=Object.defineProperty;var d=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var g=(n,t,e)=>t in n?f(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,v=(n,t)=>{for(var e in t||(t={}))w.call(t,e)&&g(n,e,t[e]);if(d)for(var e of d(t))F.call(t,e)&&g(n,e,t[e]);return n};import{_ as E,r as u,o as b,c as C,d as k,w as i,F as P,e as B,a as o,b as s,V as m}from"./app.79405b97.js";const z={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:n,resolveComponent:t,createVNode:e,Fragment:c,openBlock:h,createElementBlock:a}=m,p={class:"block"},l=n("span",{class:"demonstration"},"\u9875\u6570\u8F83\u5C11\u65F6\u7684\u6548\u679C",-1),y=n("span",{class:"demonstration"},"\u5927\u4E8E 5 \u9875\u65F6\u7684\u6548\u679C",-1),N={class:"block"};function _(r,q){const x=t("ba-pagination");return h(),a(c,null,[n("div",p,[l,e(x,{pageNo:r.pageNo,pageSize:10,total:50,continues:5,onGetPageNo:r.getPageNo},null,8,["pageNo","onGetPageNo"])]),y,n("div",N,[e(x,{pageNo:r.pageNo,pageSize:2,total:50,continues:5,onGetPageNo:r.getPageNo},null,8,["pageNo","onGetPageNo"])])],64)}return v({render:_},{name:"App",data(){return{pageNo:1}},methods:{getPageNo(r){this.pageNo=r}}})}(),"render-demo-1":function(){const{resolveComponent:n,openBlock:t,createBlock:e}=m;function c(a,p){const l=n("ba-pagination");return t(),e(l,{pageNo:a.pageNo,pageSize:2,total:50,continues:7,onGetPageNo:a.getPageNo},null,8,["pageNo","onGetPageNo"])}return v({render:c},{name:"App",data(){return{pageNo:1}},methods:{getPageNo(a){this.pageNo=a}}})}()}},A=B('<h2 id="pagination-\u5206\u9875" tabindex="-1"><a class="header-anchor" href="#pagination-\u5206\u9875" aria-hidden="true">#</a> Pagination \u5206\u9875</h2><p>\u5F53\u6570\u636E\u91CF\u8FC7\u591A\u65F6\uFF0C\u4F7F\u7528\u5206\u9875\u5206\u89E3\u6570\u636E\u3002</p><h3 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u7840\u7528\u6CD5</h3><br><h3 id="\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u6CD5</h3>',5),S=o("div",null,[o("code",null,"pageNo"),s("\u8868\u793A\u5F53\u524D\u7B2C\u51E0\u9875\uFF0C"),o("code",null,"pageSize"),s("\u8868\u793A\u4E00\u9875\u591A\u5C11\u6570\u636E\uFF0C"),o("code",null,"total"),s("\u8868\u793A\u603B\u6761\u76EE\u6570")],-1),V=o("div",{class:"language-vue"},[o("pre",{class:"shiki",style:{"background-color":"var(--shiki-color-background)"}},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"div"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"class"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"block"'),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"span"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"class"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"demonstration"'),o("span",{style:{color:"var(--shiki-color-text)"}},">\u9875\u6570\u8F83\u5C11\u65F6\u7684\u6548\u679C</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"span"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ba-pagination")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"pageNo"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"pageNo"),o("span",{style:{color:"var(--shiki-color-text)"}},'"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"pageSize"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"10"),o("span",{style:{color:"var(--shiki-color-text)"}},'"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"total"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"50"),o("span",{style:{color:"var(--shiki-color-text)"}},'"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"continues"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"5"),o("span",{style:{color:"var(--shiki-color-text)"}},'"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"@"),o("span",{style:{color:"var(--shiki-token-function)"}},"getPageNo"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"getPageNo"),o("span",{style:{color:"var(--shiki-color-text)"}},'"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  ></"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ba-pagination"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  </"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"div"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"span"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"class"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"demonstration"'),o("span",{style:{color:"var(--shiki-color-text)"}},">\u5927\u4E8E 5 \u9875\u65F6\u7684\u6548\u679C</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"span"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"div"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"class"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"block"'),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ba-pagination")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"pageNo"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"pageNo"),o("span",{style:{color:"var(--shiki-color-text)"}},'"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"pageSize"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"2"),o("span",{style:{color:"var(--shiki-color-text)"}},'"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"total"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"50"),o("span",{style:{color:"var(--shiki-color-text)"}},'"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"continues"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"5"),o("span",{style:{color:"var(--shiki-color-text)"}},'"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"@"),o("span",{style:{color:"var(--shiki-token-function)"}},"getPageNo"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"getPageNo"),o("span",{style:{color:"var(--shiki-color-text)"}},'"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  ></"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ba-pagination"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  </"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"div"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-keyword)"}},"export"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"default"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"App"'),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-function)"}},"data"),o("span",{style:{color:"var(--shiki-color-text)"}},"() {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"return"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      pageNo"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"1"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    };")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  methods"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-function)"}},"getPageNo"),o("span",{style:{color:"var(--shiki-color-text)"}},"(value) {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      "),o("span",{style:{color:"var(--shiki-token-constant)"}},"this"),o("span",{style:{color:"var(--shiki-color-text)"}},".pageNo "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}}," value;")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"};")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"style"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-function)"}},".demonstration"),o("span",{style:{color:"var(--shiki-color-text)"}},"{")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-constant)"}},"font-size"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-constant)"}},"14"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"px"),o("span",{style:{color:"var(--shiki-color-text)"}},";")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"}")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"style"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"})])])],-1),D=o("h3",{id:"\u8BBE\u7F6E\u6700\u5927\u9875\u7801\u6570",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u8BBE\u7F6E\u6700\u5927\u9875\u7801\u6570","aria-hidden":"true"},"#"),s(" \u8BBE\u7F6E\u6700\u5927\u9875\u7801\u6570")],-1),G=o("div",null,[o("code",null,"continues"),s("\u7528\u4E8E\u8BBE\u7F6E\u6700\u5927\u8FDE\u7EED\u9875\u7801\u6570\u3002")],-1),$=o("div",{class:"language-vue"},[o("pre",{class:"shiki",style:{"background-color":"var(--shiki-color-background)"}},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ba-pagination")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"pageNo"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"pageNo"),o("span",{style:{color:"var(--shiki-color-text)"}},'"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"pageSize"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"2"),o("span",{style:{color:"var(--shiki-color-text)"}},'"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"total"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"50"),o("span",{style:{color:"var(--shiki-color-text)"}},'"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"continues"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"7"),o("span",{style:{color:"var(--shiki-color-text)"}},'"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"@"),o("span",{style:{color:"var(--shiki-token-function)"}},"getPageNo"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"getPageNo"),o("span",{style:{color:"var(--shiki-color-text)"}},'"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  ></"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ba-pagination"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-keyword)"}},"export"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"default"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"App"'),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-function)"}},"data"),o("span",{style:{color:"var(--shiki-color-text)"}},"() {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"return"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      pageNo"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"1"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    };")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  methods"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-function)"}},"getPageNo"),o("span",{style:{color:"var(--shiki-color-text)"}},"(value) {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      "),o("span",{style:{color:"var(--shiki-token-constant)"}},"this"),o("span",{style:{color:"var(--shiki-color-text)"}},".pageNo "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}}," value;")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"};")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"style"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-function)"}},".demonstration"),o("span",{style:{color:"var(--shiki-color-text)"}},"{")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-constant)"}},"font-size"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-constant)"}},"14"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"px"),o("span",{style:{color:"var(--shiki-color-text)"}},";")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"}")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"style"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"})])])],-1);function T(n,t,e,c,h,a){const p=u("render-demo-0"),l=u("demo"),y=u("render-demo-1");return b(),C(P,null,[A,k(l,{customClass:"",sourceCode:`<template>
<div class="block">
  <span class="demonstration">\u9875\u6570\u8F83\u5C11\u65F6\u7684\u6548\u679C</span>
  <ba-pagination
    :pageNo="pageNo"
    :pageSize="10"
    :total="50"
    :continues="5"
    @getPageNo="getPageNo"
  ></ba-pagination>
  </div>
  <span class="demonstration">\u5927\u4E8E 5 \u9875\u65F6\u7684\u6548\u679C</span>
  <div class="block">
  <ba-pagination
    :pageNo="pageNo"
    :pageSize="2"
    :total="50"
    :continues="5"
    @getPageNo="getPageNo"
  ></ba-pagination>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      pageNo: 1,
    };
  },
  methods: {
    getPageNo(value) {
      this.pageNo = value;
    },
  },
};
<\/script>
<style>
.demonstration{
  font-size:14px;
}
</style>
`},{description:i(()=>[S]),highlight:i(()=>[V]),default:i(()=>[k(p)]),_:1}),D,k(l,{customClass:"",sourceCode:`<template>
  <ba-pagination
    :pageNo="pageNo"
    :pageSize="2"
    :total="50"
    :continues="7"
    @getPageNo="getPageNo"
  ></ba-pagination>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      pageNo: 1,
    };
  },
  methods: {
    getPageNo(value) {
      this.pageNo = value;
    },
  },
};
<\/script>
<style>
.demonstration{
  font-size:14px;
}
</style>
`},{description:i(()=>[G]),highlight:i(()=>[$]),default:i(()=>[k(y)]),_:1})],64)}var J=E(z,[["render",T],["__file","Pagination.html.vue"]]);export{J as default};
