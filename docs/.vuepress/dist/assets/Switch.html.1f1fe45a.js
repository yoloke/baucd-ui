var E=Object.defineProperty;var i=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var d=(u,o,s)=>o in u?E(u,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):u[o]=s,h=(u,o)=>{for(var s in o||(o={}))C.call(o,s)&&d(u,s,o[s]);if(i)for(var s of i(o))y.call(o,s)&&d(u,s,o[s]);return u};import{_ as m,r as p,o as B,b as x,f as v,w as l,F as _,d as t,e,g as f,V as A}from"./app.a2982fb3.js";const b={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:u,openBlock:o,createBlock:s}=A;function c(n,a){const r=u("ba-switch");return o(),s(r,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=k=>n.value=k),activeColor:"#13ce66",inactiveColor:"#ff4949"},null,8,["modelValue"])}return h({render:c},{data(){return{value:!0}}})}()}},D=t("h2",{id:"switch-\u5F00\u5173",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#switch-\u5F00\u5173","aria-hidden":"true"},"#"),e(" Switch \u5F00\u5173")],-1),w=t("p",null,"\u8868\u793A\u4E24\u79CD\u76F8\u4E92\u5BF9\u7ACB\u7684\u72B6\u6001\u95F4\u7684\u5207\u6362\uFF0C\u591A\u7528\u4E8E\u89E6\u53D1\u300C\u5F00/\u5173\u300D\u3002",-1),g=t("h3",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#"),e(" \u57FA\u7840\u7528\u6CD5")],-1),V=t("div",null,[e("\u7ED1\u5B9A"),t("code",null,"v-model"),e("\u5230\u4E00\u4E2A"),t("code",null,"Boolean"),e("\u7C7B\u578B\u7684\u53D8\u91CF\u3002\u53EF\u4EE5\u4F7F\u7528"),t("code",null,"activeColor"),e("\u5C5E\u6027\u4E0E"),t("code",null,"inactiveColor"),e("\u5C5E\u6027\u6765\u8BBE\u7F6E\u5F00\u5173\u7684\u80CC\u666F\u8272\u3002")],-1),S=t("div",{class:"language-vue"},[t("pre",{class:"shiki",style:{"background-color":"var(--shiki-color-background)"}},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"var(--shiki-color-text)"}},"<ba-switch")]),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"var(--shiki-color-text)"}},'  v-model="value"')]),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"var(--shiki-color-text)"}},'  activeColor="#13ce66"')]),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"var(--shiki-color-text)"}},'  inactiveColor="#ff4949">')]),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"var(--shiki-color-text)"}},"</ba-switch>")]),e(`
`),t("span",{class:"line"}),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"var(--shiki-color-text)"}},"<"),t("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),t("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"var(--shiki-color-text)"}},"  "),t("span",{style:{color:"var(--shiki-token-keyword)"}},"export"),t("span",{style:{color:"var(--shiki-color-text)"}}," "),t("span",{style:{color:"var(--shiki-token-keyword)"}},"default"),t("span",{style:{color:"var(--shiki-color-text)"}}," {")]),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"var(--shiki-color-text)"}},"    "),t("span",{style:{color:"var(--shiki-token-function)"}},"data"),t("span",{style:{color:"var(--shiki-color-text)"}},"() {")]),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"var(--shiki-color-text)"}},"      "),t("span",{style:{color:"var(--shiki-token-keyword)"}},"return"),t("span",{style:{color:"var(--shiki-color-text)"}}," {")]),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"var(--shiki-color-text)"}},"        value"),t("span",{style:{color:"var(--shiki-token-keyword)"}},":"),t("span",{style:{color:"var(--shiki-color-text)"}}," "),t("span",{style:{color:"var(--shiki-token-constant)"}},"true")]),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"var(--shiki-color-text)"}},"      }")]),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"var(--shiki-color-text)"}},"    }")]),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"var(--shiki-color-text)"}},"  };")]),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"var(--shiki-color-text)"}},"</"),t("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),t("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),t("span",{class:"line"}),e(`
`),t("span",{class:"line"})])])],-1),N=f('<h3 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> Attributes</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>mimicry</td><td>Boolean</td><td>\u5BF9\u8BDD\u6846\u662F\u5426\u4E3A\u62DF\u6001\u98CE\u683C\uFF0C\u9ED8\u8BA4\u4E3A false</td></tr><tr><td>name</td><td>String</td><td>switch \u5BF9\u5E94\u7684 name \u5C5E\u6027\uFF0C\u9ED8\u8BA4\u4E3A\u7A7A</td></tr><tr><td>value / v-model</td><td>String</td><td>\u7ED1\u5B9A\u503C\uFF0C\u9ED8\u8BA4\u4E3A\u7A7A\u5B57\u7B26\u4E32</td></tr><tr><td>disabled</td><td>Boolean</td><td>\u662F\u5426\u7981\u7528\uFF0C\u9ED8\u8BA4\u4E3A false</td></tr><tr><td>activeColor</td><td>String</td><td>\u6FC0\u6D3B\u72B6\u6001\u989C\u8272\uFF0C\u9ED8\u8BA4\u4E3A#dcdfe6</td></tr><tr><td>inactiveColor</td><td>String</td><td>\u672A\u6FC0\u5316\u72B6\u6001\u989C\u8272\uFF0C\u9ED8\u8BA4\u4E3A#dcdfe6</td></tr></tbody></table><h3 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>change</td><td>Function</td><td>\u72B6\u6001\u4FEE\u6539\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u8FD4\u56DE\u4FEE\u6539\u540E\u7684\u72B6\u6001</td></tr></tbody></table>',4);function $(u,o,s,c,F,n){const a=p("render-demo-0"),r=p("demo");return B(),x(_,null,[D,w,g,v(r,{customClass:"",sourceCode:`<ba-switch
  v-model="value"
  activeColor="#13ce66"
  inactiveColor="#ff4949">
</ba-switch>

<script>
  export default {
    data() {
      return {
        value: true
      }
    }
  };
<\/script>

`},{description:l(()=>[V]),highlight:l(()=>[S]),default:l(()=>[v(a)]),_:1}),N],64)}var j=m(b,[["render",$],["__file","Switch.html.vue"]]);export{j as default};
