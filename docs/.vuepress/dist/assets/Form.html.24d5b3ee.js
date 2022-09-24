var S=Object.defineProperty;var f=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var E=(l,a,s)=>a in l?S(l,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[a]=s,F=(l,a)=>{for(var s in a||(a={}))N.call(a,s)&&E(l,s,a[s]);if(f)for(var s of f(a))U.call(a,s)&&E(l,s,a[s]);return l};import{_ as j,r as B,o as T,b as $,f as D,w as m,F as q,d as o,e,g as I,V as P}from"./app.ae060c5a.js";const W={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:l,createVNode:a,withCtx:s,createTextVNode:c,openBlock:h,createBlock:d}=P,p=c("\u7ACB\u5373\u521B\u5EFA"),b=c("\u53D6\u6D88");function A(t,u){const k=l("ba-input"),r=l("ba-form-item"),y=l("ba-option"),C=l("ba-select"),_=l("ba-switch"),i=l("ba-checkbox"),g=l("ba-checkbox-group"),v=l("ba-radio"),w=l("ba-radio-group"),x=l("ba-button"),V=l("ba-form");return h(),d(V,{ref:"form",model:t.form,"label-width":"80px"},{default:s(()=>[a(r,{label:"\u6D3B\u52A8\u540D\u79F0"},{default:s(()=>[a(k,{modelValue:t.form.name,"onUpdate:modelValue":u[0]||(u[0]=n=>t.form.name=n)},null,8,["modelValue"])]),_:1}),a(r,{label:"\u6D3B\u52A8\u533A\u57DF"},{default:s(()=>[a(C,{modelValue:t.form.region,"onUpdate:modelValue":u[1]||(u[1]=n=>t.form.region=n),placeholder:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF"},{default:s(()=>[a(y,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),a(y,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),a(r,{label:"\u5373\u65F6\u914D\u9001"},{default:s(()=>[a(_,{modelValue:t.form.delivery,"onUpdate:modelValue":u[2]||(u[2]=n=>t.form.delivery=n)},null,8,["modelValue"])]),_:1}),a(r,{label:"\u6D3B\u52A8\u6027\u8D28"},{default:s(()=>[a(g,{modelValue:t.form.type,"onUpdate:modelValue":u[3]||(u[3]=n=>t.form.type=n)},{default:s(()=>[a(i,{label:"\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8",name:"type"}),a(i,{label:"\u5730\u63A8\u6D3B\u52A8",name:"type"}),a(i,{label:"\u7EBF\u4E0B\u4E3B\u9898\u6D3B\u52A8",name:"type"}),a(i,{label:"\u5355\u7EAF\u54C1\u724C\u66DD\u5149",name:"type"})]),_:1},8,["modelValue"])]),_:1}),a(r,{label:"\u7279\u6B8A\u8D44\u6E90"},{default:s(()=>[a(w,{modelValue:t.form.resource,"onUpdate:modelValue":u[4]||(u[4]=n=>t.form.resource=n)},{default:s(()=>[a(v,{label:"\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9"}),a(v,{label:"\u7EBF\u4E0B\u573A\u5730\u514D\u8D39"})]),_:1},8,["modelValue"])]),_:1}),a(r,{label:"\u6D3B\u52A8\u5F62\u5F0F"},{default:s(()=>[a(k,{type:"textarea",modelValue:t.form.desc,"onUpdate:modelValue":u[5]||(u[5]=n=>t.form.desc=n)},null,8,["modelValue"])]),_:1}),a(r,null,{default:s(()=>[a(x,{type:"primary",onClick:t.onSubmit},{default:s(()=>[p]),_:1},8,["onClick"]),a(x,null,{default:s(()=>[b]),_:1})]),_:1})]),_:1},8,["model"])}return F({render:A},{data(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{onSubmit(){console.log("submit!")}}})}()}},O=o("h2",{id:"form-\u8868\u5355",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#form-\u8868\u5355","aria-hidden":"true"},"#"),e(" Form \u8868\u5355")],-1),R=o("p",null,"\u7531\u8F93\u5165\u6846\u3001\u9009\u62E9\u5668\u3001\u5355\u9009\u6846\u3001\u591A\u9009\u6846\u7B49\u63A7\u4EF6\u7EC4\u6210\uFF0C\u7528\u4EE5\u6536\u96C6\u3001\u6821\u9A8C\u3001\u63D0\u4EA4\u6570\u636E",-1),z=o("h3",{id:"\u5178\u578B\u8868\u5355",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u5178\u578B\u8868\u5355","aria-hidden":"true"},"#"),e(" \u5178\u578B\u8868\u5355")],-1),G=o("p",null,"\u5305\u62EC\u5404\u79CD\u8868\u5355\u9879\uFF0C\u6BD4\u5982\u8F93\u5165\u6846\u3001\u9009\u62E9\u5668\u3001\u5F00\u5173\u3001\u5355\u9009\u6846\u3001\u591A\u9009\u6846\u7B49\u3002",-1),H=o("div",null,"\u5728 Form \u7EC4\u4EF6\u4E2D\uFF0C\u6BCF\u4E00\u4E2A\u8868\u5355\u57DF\u7531\u4E00\u4E2A Form-Item \u7EC4\u4EF6\u6784\u6210\uFF0C\u8868\u5355\u57DF\u4E2D\u53EF\u4EE5\u653E\u7F6E\u5404\u79CD\u7C7B\u578B\u7684\u8868\u5355\u63A7\u4EF6\uFF0C\u5305\u62EC Input\u3001Select\u3001Checkbox\u3001Radio\u3001Switch\u3001DatePicker\u3001TimePicker",-1),J=o("div",{class:"language-vue"},[o("pre",{class:"shiki",style:{"background-color":"var(--shiki-color-background)"}},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},'<ba-form ref="form" :model="form" label-width="80px">')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},'  <ba-form-item label="\u6D3B\u52A8\u540D\u79F0">')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},'    <ba-input v-model="form.name"></ba-input>')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  </ba-form-item>")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},'  <ba-form-item label="\u6D3B\u52A8\u533A\u57DF">')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},'    <ba-select v-model="form.region" placeholder="\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF">')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},'      <ba-option label="\u533A\u57DF\u4E00" value="shanghai"></ba-option>')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},'      <ba-option label="\u533A\u57DF\u4E8C" value="beijing"></ba-option>')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    </ba-select>")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  </ba-form-item>")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},'  <ba-form-item label="\u5373\u65F6\u914D\u9001">')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},'    <ba-switch v-model="form.delivery"></ba-switch>')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  </ba-form-item>")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},'  <ba-form-item label="\u6D3B\u52A8\u6027\u8D28">')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},'    <ba-checkbox-group v-model="form.type">')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},'      <ba-checkbox label="\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8" name="type"></ba-checkbox>')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},'      <ba-checkbox label="\u5730\u63A8\u6D3B\u52A8" name="type"></ba-checkbox>')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},'      <ba-checkbox label="\u7EBF\u4E0B\u4E3B\u9898\u6D3B\u52A8" name="type"></ba-checkbox>')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},'      <ba-checkbox label="\u5355\u7EAF\u54C1\u724C\u66DD\u5149" name="type"></ba-checkbox>')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    </ba-checkbox-group>")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  </ba-form-item>")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},'  <ba-form-item label="\u7279\u6B8A\u8D44\u6E90">')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},'    <ba-radio-group v-model="form.resource">')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},'      <ba-radio label="\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9"></ba-radio>')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},'      <ba-radio label="\u7EBF\u4E0B\u573A\u5730\u514D\u8D39"></ba-radio>')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    </ba-radio-group>")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  </ba-form-item>")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},'  <ba-form-item label="\u6D3B\u52A8\u5F62\u5F0F">')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},'    <ba-input type="textarea" v-model="form.desc"></ba-input>')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  </ba-form-item>")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <ba-form-item>")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},'    <ba-button type="primary" @click="onSubmit">\u7ACB\u5373\u521B\u5EFA</ba-button>')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    <ba-button>\u53D6\u6D88</ba-button>")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  </ba-form-item>")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</ba-form>")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"export"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"default"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-function)"}},"data"),o("span",{style:{color:"var(--shiki-color-text)"}},"() {")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"return"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        form"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"          name"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"''"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"          region"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"''"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"          date1"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"''"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"          date2"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"''"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"          delivery"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"false"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"          type"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," []"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"          resource"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"''"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"          desc"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"''")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        }")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      }")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    methods"),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      "),o("span",{style:{color:"var(--shiki-token-function)"}},"onSubmit"),o("span",{style:{color:"var(--shiki-color-text)"}},"() {")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        "),o("span",{style:{color:"var(--shiki-token-constant)"}},"console"),o("span",{style:{color:"var(--shiki-token-function)"}},".log"),o("span",{style:{color:"var(--shiki-color-text)"}},"("),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'submit!'"),o("span",{style:{color:"var(--shiki-color-text)"}},");")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      }")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    }")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  }")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"})])])],-1),K=I(`<h3 id="w3c-\u6807\u51C6\u4E2D\u6709\u5982\u4E0B\u89C4\u5B9A" tabindex="-1"><a class="header-anchor" href="#w3c-\u6807\u51C6\u4E2D\u6709\u5982\u4E0B\u89C4\u5B9A" aria-hidden="true">#</a> W3C \u6807\u51C6\u4E2D\u6709\u5982\u4E0B\u89C4\u5B9A\uFF1A</h3><div class="language-html ext-html line-numbers-mode"><pre class="shiki" style="background-color:var(--shiki-color-background);"><code><span class="line"><span style="color:var(--shiki-color-text);">When there is only one single-line text input field in a form, </span></span>
<span class="line"><span style="color:var(--shiki-color-text);">the user agent should accept Enter in that field as a request to submit the form.</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">\u5373\uFF1A\u5F53\u4E00\u4E2A form \u5143\u7D20\u4E2D\u53EA\u6709\u4E00\u4E2A\u8F93\u5165\u6846\u65F6\uFF0C\u5728\u8BE5\u8F93\u5165\u6846\u4E2D\u6309\u4E0B\u56DE\u8F66\u5E94\u63D0\u4EA4\u8BE5\u8868\u5355\u3002</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    \u5982\u679C\u5E0C\u671B\u963B\u6B62\u8FD9\u4E00\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u53EF\u4EE5\u5728 &lt;</span><span style="color:var(--shiki-token-string-expression);">ba-form</span><span style="color:var(--shiki-color-text);">&gt; \u6807\u7B7E\u4E0A\u6DFB\u52A0 @submit.native.prevent\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="form-item-attributes" tabindex="-1"><a class="header-anchor" href="#form-item-attributes" aria-hidden="true">#</a> Form-item Attributes</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>label</td><td>String</td><td>\u8868\u5355\u9879\u540D\u79F0\uFF0C\u9ED8\u8BA4\u4E3A\u7A7A\u5B57\u7B26\u4E32</td></tr></tbody></table><h3 id="form-attributes" tabindex="-1"><a class="header-anchor" href="#form-attributes" aria-hidden="true">#</a> Form Attributes</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>model</td><td>Object</td><td>\u8868\u5355\u5BF9\u8C61\uFF0C\u5FC5\u586B</td></tr><tr><td>label-width</td><td>String</td><td>\u6807\u7B7E\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4&quot;80px&quot;</td></tr></tbody></table>`,6);function L(l,a,s,c,h,d){const p=B("render-demo-0"),b=B("demo");return T(),$(q,null,[O,R,z,G,D(b,{customClass:"",sourceCode:`<ba-form ref="form" :model="form" label-width="80px">
  <ba-form-item label="\u6D3B\u52A8\u540D\u79F0">
    <ba-input v-model="form.name"></ba-input>
  </ba-form-item>
  <ba-form-item label="\u6D3B\u52A8\u533A\u57DF">
    <ba-select v-model="form.region" placeholder="\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF">
      <ba-option label="\u533A\u57DF\u4E00" value="shanghai"></ba-option>
      <ba-option label="\u533A\u57DF\u4E8C" value="beijing"></ba-option>
    </ba-select>
  </ba-form-item>
  <ba-form-item label="\u5373\u65F6\u914D\u9001">
    <ba-switch v-model="form.delivery"></ba-switch>
  </ba-form-item>
  <ba-form-item label="\u6D3B\u52A8\u6027\u8D28">
    <ba-checkbox-group v-model="form.type">
      <ba-checkbox label="\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8" name="type"></ba-checkbox>
      <ba-checkbox label="\u5730\u63A8\u6D3B\u52A8" name="type"></ba-checkbox>
      <ba-checkbox label="\u7EBF\u4E0B\u4E3B\u9898\u6D3B\u52A8" name="type"></ba-checkbox>
      <ba-checkbox label="\u5355\u7EAF\u54C1\u724C\u66DD\u5149" name="type"></ba-checkbox>
    </ba-checkbox-group>
  </ba-form-item>
  <ba-form-item label="\u7279\u6B8A\u8D44\u6E90">
    <ba-radio-group v-model="form.resource">
      <ba-radio label="\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9"></ba-radio>
      <ba-radio label="\u7EBF\u4E0B\u573A\u5730\u514D\u8D39"></ba-radio>
    </ba-radio-group>
  </ba-form-item>
  <ba-form-item label="\u6D3B\u52A8\u5F62\u5F0F">
    <ba-input type="textarea" v-model="form.desc"></ba-input>
  </ba-form-item>
  <ba-form-item>
    <ba-button type="primary" @click="onSubmit">\u7ACB\u5373\u521B\u5EFA</ba-button>
    <ba-button>\u53D6\u6D88</ba-button>
  </ba-form-item>
</ba-form>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
<\/script>
`},{description:m(()=>[H]),highlight:m(()=>[J]),default:m(()=>[D(p)]),_:1}),K],64)}var Y=j(W,[["render",L],["__file","Form.html.vue"]]);export{Y as default};
