var g=Object.defineProperty;var C=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var F=(l,s,t)=>s in l?g(l,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[s]=t,y=(l,s)=>{for(var t in s||(s={}))B.call(s,t)&&F(l,t,s[t]);if(C)for(var t of C(s))A.call(s,t)&&F(l,t,s[t]);return l};import{_ as D,r as b,o as f,c as V,d,w as c,F as w,a as o,b as e,e as N,V as m}from"./app.676dc53f.js";const L={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:l,resolveComponent:s,withCtx:t,openBlock:u,createBlock:k}=m,p=l("\u5907\u9009\u9879");function h(a,r){const x=s("ba-checkbox");return u(),k(x,{modelValue:a.checked,"onUpdate:modelValue":r[0]||(r[0]=i=>a.checked=i)},{default:t(()=>[p]),_:1},8,["modelValue"])}return y({render:h},{data(){return{checked:!0}}})}(),"render-demo-1":function(){const{createTextVNode:l,resolveComponent:s,withCtx:t,createVNode:u,Fragment:k,openBlock:p,createElementBlock:h}=m,n=l("\u5907\u9009\u98791"),a=l("\u5907\u9009\u98792");function r(i,v){const _=s("ba-checkbox");return p(),h(k,null,[u(_,{modelValue:i.checked1,"onUpdate:modelValue":v[0]||(v[0]=E=>i.checked1=E),disabled:""},{default:t(()=>[n]),_:1},8,["modelValue"]),u(_,{modelValue:i.checked2,"onUpdate:modelValue":v[1]||(v[1]=E=>i.checked2=E),disabled:""},{default:t(()=>[a]),_:1},8,["modelValue"])],64)}return y({render:r},{data(){return{checked1:!1,checked2:!0}}})}(),"render-demo-2":function(){const{resolveComponent:l,createVNode:s,withCtx:t,openBlock:u,createBlock:k}=m;function p(n,a){const r=l("ba-checkbox"),x=l("ba-checkbox-group");return u(),k(x,{modelValue:n.checkList,"onUpdate:modelValue":a[0]||(a[0]=i=>n.checkList=i)},{default:t(()=>[s(r,{label:"\u590D\u9009\u6846 A"}),s(r,{label:"\u590D\u9009\u6846 B"}),s(r,{label:"\u590D\u9009\u6846 C"}),s(r,{label:"\u7981\u7528",disabled:""}),s(r,{label:"\u9009\u4E2D\u4E14\u7981\u7528",disabled:""})]),_:1},8,["modelValue"])}return y({render:p},{data(){return{checkList:["\u9009\u4E2D\u4E14\u7981\u7528","\u590D\u9009\u6846 A"]}}})}()}},S=o("h2",{id:"checkbox-\u591A\u9009\u6846",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#checkbox-\u591A\u9009\u6846","aria-hidden":"true"},"#"),e(" Checkbox \u591A\u9009\u6846")],-1),T=o("p",null,"\u4E00\u7EC4\u5907\u9009\u9879\u4E2D\u8FDB\u884C\u591A\u9009",-1),U=o("h3",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#"),e(" \u57FA\u7840\u7528\u6CD5")],-1),$=o("p",null,"\u5355\u72EC\u4F7F\u7528\u53EF\u4EE5\u8868\u793A\u4E24\u79CD\u72B6\u6001\u4E4B\u95F4\u7684\u5207\u6362\uFF0C\u5199\u5728\u6807\u7B7E\u4E2D\u7684\u5185\u5BB9\u4E3A checkbox \u6309\u94AE\u540E\u7684\u4ECB\u7ECD\u3002",-1),G=o("div",null,[e("\u5728"),o("code",null,"ba-checkbox"),e("\u5143\u7D20\u4E2D\u5B9A\u4E49"),o("code",null,"v-model"),e("\u7ED1\u5B9A\u53D8\u91CF\uFF0C\u5355\u4E00\u7684"),o("code",null,"checkbox"),e("\u4E2D\uFF0C\u9ED8\u8BA4\u7ED1\u5B9A\u53D8\u91CF\u7684\u503C\u4F1A\u662F"),o("code",null,"Boolean"),e("\uFF0C\u9009\u4E2D\u4E3A"),o("code",null,"true"),e("\u3002")],-1),j=o("div",{class:"language-vue"},[o("pre",{class:"shiki",style:{"background-color":"var(--shiki-color-background)"}},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-comment)"}},"<!-- `checked` \u4E3A true \u6216 false -->")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ba-checkbox"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"v-model"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"checked"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},">\u5907\u9009\u9879</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ba-checkbox"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"export"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"default"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-function)"}},"data"),o("span",{style:{color:"var(--shiki-color-text)"}},"() {")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"return"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        checked"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"true")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      };")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  };")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"})])])],-1),q=o("h3",{id:"\u7981\u7528\u72B6\u6001",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u7981\u7528\u72B6\u6001","aria-hidden":"true"},"#"),e(" \u7981\u7528\u72B6\u6001")],-1),z=o("p",null,"\u591A\u9009\u6846\u4E0D\u53EF\u7528\u72B6\u6001\u3002",-1),H=o("div",null,[e("\u8BBE\u7F6E"),o("code",null,"disabled"),e("\u5C5E\u6027\u5373\u53EF\u3002")],-1),I=o("div",{class:"language-vue"},[o("pre",{class:"shiki",style:{"background-color":"var(--shiki-color-background)"}},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ba-checkbox"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"v-model"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"checked1"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"disabled"),o("span",{style:{color:"var(--shiki-color-text)"}},">\u5907\u9009\u98791</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ba-checkbox"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ba-checkbox"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"v-model"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"checked2"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"disabled"),o("span",{style:{color:"var(--shiki-color-text)"}},">\u5907\u9009\u98792</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ba-checkbox"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"export"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"default"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-function)"}},"data"),o("span",{style:{color:"var(--shiki-color-text)"}},"() {")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"return"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        checked1"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"false"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        checked2"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"true")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      };")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  };")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"})])])],-1),J=o("h3",{id:"\u591A\u9009\u6846\u7EC4",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u591A\u9009\u6846\u7EC4","aria-hidden":"true"},"#"),e(" \u591A\u9009\u6846\u7EC4")],-1),K=o("p",null,"\u9002\u7528\u4E8E\u591A\u4E2A\u52FE\u9009\u6846\u7ED1\u5B9A\u5230\u540C\u4E00\u4E2A\u6570\u7EC4\u7684\u60C5\u666F\uFF0C\u901A\u8FC7\u662F\u5426\u52FE\u9009\u6765\u8868\u793A\u8FD9\u4E00\u7EC4\u9009\u9879\u4E2D\u9009\u4E2D\u7684\u9879\u3002",-1),M=o("div",null,[o("code",null,"checkbox-group"),e("\u5143\u7D20\u80FD\u628A\u591A\u4E2A "),o("code",null,"checkbox"),e(" \u7BA1\u7406\u4E3A\u4E00\u7EC4\uFF0C\u53EA\u9700\u8981\u5728 "),o("code",null,"Group"),e(" \u4E2D\u4F7F\u7528"),o("code",null,"v-model"),e("\u7ED1\u5B9A"),o("code",null,"Array"),e("\u7C7B\u578B\u7684\u53D8\u91CF\u5373\u53EF\u3002 "),o("code",null,"ba-checkbox"),e(" \u7684 "),o("code",null,"label"),e("\u5C5E\u6027\u662F\u8BE5 "),o("code",null,"checkbox"),e(" \u5BF9\u5E94\u7684\u503C\uFF0C\u82E5\u8BE5\u6807\u7B7E\u4E2D\u65E0\u5185\u5BB9\uFF0C\u5219\u8BE5\u5C5E\u6027\u4E5F\u5145\u5F53 "),o("code",null,"checkbox "),e("\u6309\u94AE\u540E\u7684\u4ECB\u7ECD\u3002label\u4E0E\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u503C\u76F8\u5BF9\u5E94\uFF0C\u5982\u679C\u5B58\u5728\u6307\u5B9A\u7684\u503C\u5219\u4E3A\u9009\u4E2D\u72B6\u6001\uFF0C\u5426\u5219\u4E3A\u4E0D\u9009\u4E2D\u3002")],-1),O=o("div",{class:"language-vue"},[o("pre",{class:"shiki",style:{"background-color":"var(--shiki-color-background)"}},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ba-checkbox-group"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"v-model"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"checkList"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    <"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ba-checkbox"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"label"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"\u590D\u9009\u6846 A"'),o("span",{style:{color:"var(--shiki-color-text)"}},"></"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ba-checkbox"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    <"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ba-checkbox"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"label"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"\u590D\u9009\u6846 B"'),o("span",{style:{color:"var(--shiki-color-text)"}},"></"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ba-checkbox"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    <"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ba-checkbox"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"label"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"\u590D\u9009\u6846 C"'),o("span",{style:{color:"var(--shiki-color-text)"}},"></"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ba-checkbox"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    <"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ba-checkbox"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"label"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"\u7981\u7528"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"disabled"),o("span",{style:{color:"var(--shiki-color-text)"}},"></"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ba-checkbox"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    <"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ba-checkbox"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"label"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"\u9009\u4E2D\u4E14\u7981\u7528"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"disabled"),o("span",{style:{color:"var(--shiki-color-text)"}},"></"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ba-checkbox"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  </"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"ba-checkbox-group"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"}),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"export"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"default"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-function)"}},"data"),o("span",{style:{color:"var(--shiki-color-text)"}}," () {")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"return"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        checkList"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," ["),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'\u9009\u4E2D\u4E14\u7981\u7528'"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'\u590D\u9009\u6846 A'"),o("span",{style:{color:"var(--shiki-color-text)"}},"]")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      };")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  };")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"})])])],-1),P=N('<h3 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> Attributes</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>label</td><td>[String, Number, Boolean]</td><td>\u5355\u9009\u6846 label \u503C\uFF0C\u9ED8\u8BA4\u4E3A\u7A7A\u5B57\u7B26\u4E32</td></tr><tr><td>value</td><td>String</td><td>\u8868\u5355\u503C\uFF0C\u9ED8\u8BA4\u4E3A\u7A7A\u5B57\u7B26\u4E32</td></tr><tr><td>mimicry</td><td>Boolean</td><td>\u5BF9\u8BDD\u6846\u662F\u5426\u4E3A\u62DF\u6001\u98CE\u683C\uFF0C\u9ED8\u8BA4\u4E3A false</td></tr><tr><td>name</td><td>String</td><td>\u8868\u5355\u547D\u540D\uFF0C\u9ED8\u8BA4\u4E3A\u7A7A</td></tr><tr><td>color</td><td>String</td><td>\u5355\u9009\u6846\u9009\u62E9\u65F6\u7684\u989C\u8272\uFF0C\u9ED8\u8BA4\u4E3A#409eff</td></tr></tbody></table>',2);function Q(l,s,t,u,k,p){const h=b("render-demo-0"),n=b("demo"),a=b("render-demo-1"),r=b("render-demo-2");return f(),V(w,null,[S,T,U,$,d(n,{customClass:"",sourceCode:`<template>
  <!-- \`checked\` \u4E3A true \u6216 false -->
  <ba-checkbox v-model="checked">\u5907\u9009\u9879</ba-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        checked: true
      };
    }
  };
<\/script>
`},{description:c(()=>[G]),highlight:c(()=>[j]),default:c(()=>[d(h)]),_:1}),q,z,d(n,{customClass:"",sourceCode:`<template>
  <ba-checkbox v-model="checked1" disabled>\u5907\u9009\u98791</ba-checkbox>
  <ba-checkbox v-model="checked2" disabled>\u5907\u9009\u98792</ba-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        checked1: false,
        checked2: true
      };
    }
  };
<\/script>
`},{description:c(()=>[H]),highlight:c(()=>[I]),default:c(()=>[d(a)]),_:1}),J,K,d(n,{customClass:"",sourceCode:`<template>
  <ba-checkbox-group v-model="checkList">
    <ba-checkbox label="\u590D\u9009\u6846 A"></ba-checkbox>
    <ba-checkbox label="\u590D\u9009\u6846 B"></ba-checkbox>
    <ba-checkbox label="\u590D\u9009\u6846 C"></ba-checkbox>
    <ba-checkbox label="\u7981\u7528" disabled></ba-checkbox>
    <ba-checkbox label="\u9009\u4E2D\u4E14\u7981\u7528" disabled></ba-checkbox>
  </ba-checkbox-group>
</template>

<script>
  export default {
    data () {
      return {
        checkList: ['\u9009\u4E2D\u4E14\u7981\u7528','\u590D\u9009\u6846 A']
      };
    }
  };
<\/script>
`},{description:c(()=>[M]),highlight:c(()=>[O]),default:c(()=>[d(r)]),_:1}),P],64)}var X=D(L,[["render",Q],["__file","Checkbox.html.vue"]]);export{X as default};