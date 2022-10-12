var w=Object.defineProperty;var x=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var f=(a,t,s)=>t in a?w(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,E=(a,t)=>{for(var s in t||(t={}))V.call(t,s)&&f(a,s,t[s]);if(x)for(var s of x(t))S.call(t,s)&&f(a,s,t[s]);return a};import{_ as N,r as F,o as U,c as T,d as B,w as d,F as $,a as o,b as e,e as q,V as I}from"./app.79405b97.js";const P={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:a,createVNode:t,withCtx:s,createTextVNode:i,openBlock:b,createBlock:h}=I,c=i("\u7ACB\u5373\u521B\u5EFA"),p=i("\u53D6\u6D88");function D(l,r){const k=a("ba-input"),n=a("ba-form-item"),A=a("ba-switch"),m=a("ba-checkbox"),_=a("ba-checkbox-group"),y=a("ba-radio"),C=a("ba-radio-group"),v=a("ba-button"),g=a("ba-form");return b(),h(g,{ref:"form",model:l.form,"label-width":"80px"},{default:s(()=>[t(n,{label:"\u6D3B\u52A8\u540D\u79F0"},{default:s(()=>[t(k,{modelValue:l.form.name,"onUpdate:modelValue":r[0]||(r[0]=u=>l.form.name=u)},null,8,["modelValue"])]),_:1}),t(n,{label:"\u5373\u65F6\u914D\u9001"},{default:s(()=>[t(A,{modelValue:l.form.delivery,"onUpdate:modelValue":r[1]||(r[1]=u=>l.form.delivery=u)},null,8,["modelValue"])]),_:1}),t(n,{label:"\u6D3B\u52A8\u6027\u8D28"},{default:s(()=>[t(_,{modelValue:l.form.type,"onUpdate:modelValue":r[2]||(r[2]=u=>l.form.type=u)},{default:s(()=>[t(m,{label:"\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8",name:"type"}),t(m,{label:"\u5730\u63A8\u6D3B\u52A8",name:"type"}),t(m,{label:"\u7EBF\u4E0B\u4E3B\u9898\u6D3B\u52A8",name:"type"})]),_:1},8,["modelValue"])]),_:1}),t(n,{label:"\u7279\u6B8A\u8D44\u6E90"},{default:s(()=>[t(C,{modelValue:l.form.resource,"onUpdate:modelValue":r[3]||(r[3]=u=>l.form.resource=u)},{default:s(()=>[t(y,{label:"\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9"}),t(y,{label:"\u7EBF\u4E0B\u573A\u5730\u514D\u8D39"})]),_:1},8,["modelValue"])]),_:1}),t(n,{label:"\u6D3B\u52A8\u5F62\u5F0F"},{default:s(()=>[t(k,{type:"textarea",modelValue:l.form.desc,"onUpdate:modelValue":r[4]||(r[4]=u=>l.form.desc=u)},null,8,["modelValue"])]),_:1}),t(n,null,{default:s(()=>[t(v,{type:"primary",onClick:l.onSubmit},{default:s(()=>[c]),_:1},8,["onClick"]),t(v,null,{default:s(()=>[p]),_:1})]),_:1})]),_:1},8,["model"])}return E({render:D},{data(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{onSubmit(){console.log("submit!")}}})}()}},W=o("h2",{id:"form-\u8868\u5355",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#form-\u8868\u5355","aria-hidden":"true"},"#"),e(" Form \u8868\u5355")],-1),j=o("p",null,"\u7531\u8F93\u5165\u6846\u3001\u9009\u62E9\u5668\u3001\u5355\u9009\u6846\u3001\u591A\u9009\u6846\u7B49\u63A7\u4EF6\u7EC4\u6210\uFF0C\u7528\u4EE5\u6536\u96C6\u3001\u6821\u9A8C\u3001\u63D0\u4EA4\u6570\u636E",-1),O=o("h3",{id:"\u5178\u578B\u8868\u5355",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u5178\u578B\u8868\u5355","aria-hidden":"true"},"#"),e(" \u5178\u578B\u8868\u5355")],-1),R=o("br",null,null,-1),z=e(" \u5305\u62EC\u5404\u79CD\u8868\u5355\u9879\uFF0C\u6BD4\u5982\u8F93\u5165\u6846\u3001\u9009\u62E9\u5668\u3001\u5F00\u5173\u3001\u5355\u9009\u6846\u3001\u591A\u9009\u6846\u7B49\u3002 "),G=o("div",null,"\u5728 Form \u7EC4\u4EF6\u4E2D\uFF0C\u6BCF\u4E00\u4E2A\u8868\u5355\u57DF\u7531\u4E00\u4E2A Form-Item \u7EC4\u4EF6\u6784\u6210\uFF0C\u8868\u5355\u57DF\u4E2D\u53EF\u4EE5\u653E\u7F6E\u5404\u79CD\u7C7B\u578B\u7684\u8868\u5355\u63A7\u4EF6\uFF0C\u5305\u62EC Input\u3001Select\u3001Checkbox\u3001Radio\u3001Switch\u3001DatePicker\u3001TimePicker",-1),H=o("div",{class:"language-vue"},[o("pre",{class:"shiki",style:{"background-color":"var(--shiki-color-background)"}},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},'<ba-form ref="form" :model="form" label-width="80px">')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},'  <ba-form-item label="\u6D3B\u52A8\u540D\u79F0">')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},'    <ba-input v-model="form.name"></ba-input>')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  </ba-form-item>")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},'  <ba-form-item label="\u5373\u65F6\u914D\u9001">')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},'    <ba-switch v-model="form.delivery"></ba-switch>')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  </ba-form-item>")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},'  <ba-form-item label="\u6D3B\u52A8\u6027\u8D28">')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},'    <ba-checkbox-group v-model="form.type">')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},'      <ba-checkbox label="\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8" name="type"></ba-checkbox>')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},'      <ba-checkbox label="\u5730\u63A8\u6D3B\u52A8" name="type"></ba-checkbox>')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},'      <ba-checkbox label="\u7EBF\u4E0B\u4E3B\u9898\u6D3B\u52A8" name="type"></ba-checkbox>')]),e(`
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
`),o("span",{class:"line"})])])],-1),J=q('<br><div class="custom-container tip"><p class="custom-container-title">W3C \u6807\u51C6\u4E2D\u6709\u5982\u4E0B\u89C4\u5B9A:</p><p>When there is only one single-line text input field in a form, the user agent should accept Enter in that field as a request to submit the form. \u5373\uFF1A\u5F53\u4E00\u4E2A form \u5143\u7D20\u4E2D\u53EA\u6709\u4E00\u4E2A\u8F93\u5165\u6846\u65F6\uFF0C\u5728\u8BE5\u8F93\u5165\u6846\u4E2D\u6309\u4E0B\u56DE\u8F66\u5E94\u63D0\u4EA4\u8BE5\u8868\u5355\u3002 \u5982\u679C\u5E0C\u671B\u963B\u6B62\u8FD9\u4E00\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u53EF\u4EE5\u5728 <code>&lt;ba-form&gt;</code> \u6807\u7B7E\u4E0A\u6DFB\u52A0 <code>@submit.native.prevent</code>\u3002</p></div><br><h3 id="form-item-attributes" tabindex="-1"><a class="header-anchor" href="#form-item-attributes" aria-hidden="true">#</a> Form-item Attributes</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>label</td><td>String</td><td>\u8868\u5355\u9879\u540D\u79F0\uFF0C\u9ED8\u8BA4\u4E3A\u7A7A\u5B57\u7B26\u4E32</td></tr></tbody></table><h3 id="form-attributes" tabindex="-1"><a class="header-anchor" href="#form-attributes" aria-hidden="true">#</a> Form Attributes</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>model</td><td>Object</td><td>\u8868\u5355\u5BF9\u8C61\uFF0C\u5FC5\u586B</td></tr><tr><td>label-width</td><td>String</td><td>\u6807\u7B7E\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4&quot;80px&quot;</td></tr></tbody></table>',7);function K(a,t,s,i,b,h){const c=F("render-demo-0"),p=F("demo");return U(),T($,null,[W,j,O,R,z,B(p,{customClass:"",sourceCode:`<ba-form ref="form" :model="form" label-width="80px">
  <ba-form-item label="\u6D3B\u52A8\u540D\u79F0">
    <ba-input v-model="form.name"></ba-input>
  </ba-form-item>
  <ba-form-item label="\u5373\u65F6\u914D\u9001">
    <ba-switch v-model="form.delivery"></ba-switch>
  </ba-form-item>
  <ba-form-item label="\u6D3B\u52A8\u6027\u8D28">
    <ba-checkbox-group v-model="form.type">
      <ba-checkbox label="\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8" name="type"></ba-checkbox>
      <ba-checkbox label="\u5730\u63A8\u6D3B\u52A8" name="type"></ba-checkbox>
      <ba-checkbox label="\u7EBF\u4E0B\u4E3B\u9898\u6D3B\u52A8" name="type"></ba-checkbox>
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
`},{description:d(()=>[G]),highlight:d(()=>[H]),default:d(()=>[B(c)]),_:1}),J],64)}var X=N(P,[["render",K],["__file","Form.html.vue"]]);export{X as default};
