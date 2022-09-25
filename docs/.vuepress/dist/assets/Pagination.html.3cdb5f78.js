var d=Object.defineProperty;var p=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var k=(t,e,n)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,h=(t,e)=>{for(var n in e||(e={}))x.call(e,n)&&k(t,n,e[n]);if(p)for(var n of p(e))g.call(e,n)&&k(t,n,e[n]);return t};import{_ as m,r as u,o as _,c as N,d as y,w as l,F,e as f,V as w,a as o,b as s}from"./app.9661c574.js";const C={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:t,openBlock:e,createBlock:n}=w;function i(a,c){const r=t("ba-pagination");return e(),n(r,{pageNo:a.pageNo,pageSize:1,total:50,continues:3,onGetPageNo:a.getPageNo},null,8,["pageNo","onGetPageNo"])}return h({render:i},{name:"App",data(){return{pageNo:1}},methods:{getPageNo(a){this.pageNo=a}}})}()}},b=f('<h2 id="pagination-\u5206\u9875" tabindex="-1"><a class="header-anchor" href="#pagination-\u5206\u9875" aria-hidden="true">#</a> Pagination \u5206\u9875</h2><p>\u5F53\u6570\u636E\u91CF\u8FC7\u591A\u65F6\uFF0C\u4F7F\u7528\u5206\u9875\u5206\u89E3\u6570\u636E\u3002</p><h3 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u7840\u7528\u6CD5</h3><br> \u63D0\u4F9B\u4E86\u4E00\u5957\u5E38\u7528\u7684\u56FE\u6807\u96C6\u5408\u3002 <h3 id="\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u6CD5</h3>',6),E=o("div",null,[s("\u4F7F\u7528"),o("code",null,"icon"),s("\u5C5E\u6027\u6765\u5B9A\u4E49\u56FE\u6807\u7684\u6837\u5F0F\u3002")],-1),P=o("div",{class:"language-vue"},[o("pre",{class:"shiki",style:{"background-color":"var(--shiki-color-background)"}},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ba-pagination")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"pageNo"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"pageNo"),o("span",{style:{color:"var(--shiki-color-text)"}},'"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"pageSize"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"1"),o("span",{style:{color:"var(--shiki-color-text)"}},'"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"total"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"50"),o("span",{style:{color:"var(--shiki-color-text)"}},'"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"continues"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"3"),o("span",{style:{color:"var(--shiki-color-text)"}},'"')]),s(`
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
`),o("span",{class:"line"})])])],-1);function B(t,e,n,i,v,a){const c=u("render-demo-0"),r=u("demo");return _(),N(F,null,[b,y(r,{customClass:"",sourceCode:`<template>
  <ba-pagination
    :pageNo="pageNo"
    :pageSize="1"
    :total="50"
    :continues="3"
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
`},{description:l(()=>[E]),highlight:l(()=>[P]),default:l(()=>[y(c)]),_:1})],64)}var V=m(C,[["render",B],["__file","Pagination.html.vue"]]);export{V as default};
