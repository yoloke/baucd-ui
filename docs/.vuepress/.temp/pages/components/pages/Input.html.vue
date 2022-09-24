<template><h2 id="input-输入框" tabindex="-1"><a class="header-anchor" href="#input-输入框" aria-hidden="true">#</a> Input 输入框</h2>
<p>通过鼠标或键盘输入字符</p>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<br/>
<demo customClass="" sourceCode="&lt;ba-input v-model=&quot;input&quot; placeholder=&quot;请输入内容&quot;&gt;&lt;/ba-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      input: ''
    }
  }
}
&lt;/script&gt;
"><render-demo-0 />
        <template #description>
          <div>使用<code>type</code>、<code>plain</code>、<code>round</code>和<code>circle</code>属性来定义 Button 的样式。</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;ba-input v-model=&quot;input&quot; placeholder=&quot;请输入内容&quot;&gt;&lt;/ba-input&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">default</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-function)">data</span><span style="color: var(--shiki-color-text)">() {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">return</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      input</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;&#39;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h3 id="禁用状态" tabindex="-1"><a class="header-anchor" href="#禁用状态" aria-hidden="true">#</a> 禁用状态</h3>
<demo customClass="" sourceCode="&lt;template&gt;
 &lt;ba-input
  placeholder=&quot;请输入内容&quot;
  v-model=&quot;input&quot;
  :disabled=&quot;true&quot;&gt;
&lt;/ba-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      input: ''
    }
  }
}
&lt;/script&gt;
&lt;/template&gt;

"><render-demo-1 />
        <template #description>
          <div>使用<code>disabled</code>属性指定是否禁用 input 组件</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"> &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-input</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-function)">placeholder</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;请输入内容&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-function)">v-model</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">input</span><span style="color: var(--shiki-color-text)">&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">true</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-input</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">export default {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  data() {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    return {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      input: &#39;&#39;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h3 id="可清空" tabindex="-1"><a class="header-anchor" href="#可清空" aria-hidden="true">#</a> 可清空</h3>
<demo customClass="" sourceCode="&lt;ba-input
  placeholder=&quot;请输入内容&quot;
  v-model=&quot;input&quot;
  clearable&gt;
&lt;/ba-input&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
&lt;/script&gt;
"><render-demo-2 />
        <template #description>
          <div>使用<code>clearable</code>属性即可得到一个可清空的输入框</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;ba-input</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  placeholder=&quot;请输入内容&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  v-model=&quot;input&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  clearable&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/ba-input&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">default</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-function)">data</span><span style="color: var(--shiki-color-text)">() {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">return</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        input</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;&#39;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h3 id="是否显示密码" tabindex="-1"><a class="header-anchor" href="#是否显示密码" aria-hidden="true">#</a> 是否显示密码</h3>
<demo customClass="" sourceCode="&lt;ba-input type='password'  v-model=&quot;password&quot; showPassword/&gt;
&lt;script&gt;
export default {
  name: 'App',
  data() {
    return {
      password:&quot;password&quot;
    }
  },
}
&lt;/script&gt;
"><render-demo-3 />
        <template #description>
          <div>使用<code>showPassword</code>属性即可得到一个显示密码的输入框</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;ba-input type=&#39;password&#39;  v-model=&quot;password&quot; showPassword/&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">default</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  name</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;App&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-function)">data</span><span style="color: var(--shiki-color-text)">() {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">return</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      password</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;password&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h3 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> Attributes</h3>
<table>
<thead>
<tr>
<th>属性</th>
<th>值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>placeholder</td>
<td>String</td>
<td>输入框占位文本，默认为空字符串</td>
</tr>
<tr>
<td>type</td>
<td>String</td>
<td>表单类型，默认为'text'</td>
</tr>
<tr>
<td>value / v-model</td>
<td>[String, Number]</td>
<td>绑定值，默认为空字符串</td>
</tr>
<tr>
<td>mimicry</td>
<td>Boolean</td>
<td>对话框是否为拟态风格，默认为 false</td>
</tr>
<tr>
<td>name</td>
<td>String</td>
<td>原生属性，默认为空</td>
</tr>
<tr>
<td>disabled</td>
<td>Boolean</td>
<td>是否禁用，默认为 false</td>
</tr>
<tr>
<td>clearable</td>
<td>Boolean</td>
<td>是否可清空，默认为 false</td>
</tr>
<tr>
<td>showPassword</td>
<td>Boolean</td>
<td>是否显示密码可见，默认为 false</td>
</tr>
</tbody>
</table>
</template>

<script lang="ts">
      import * as Vue from 'vue'
      
      export default {
        name: 'component-doc',
        components: {
          "render-demo-0": (function() {
    
    const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue

function render(_ctx, _cache) {
  const _component_ba_input = _resolveComponent("ba-input")

  return (_openBlock(), _createBlock(_component_ba_input, {
    modelValue: _ctx.input,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.input) = $event)),
    placeholder: "请输入内容"
  }, null, 8 /* PROPS */, ["modelValue"]))
}
  
    const democomponentExport = {
  data() {
    return {
      input: ''
    }
  }
}
    return {
      render,
      ...democomponentExport
    }
  })(),"render-demo-1": (function() {
    
    const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue

function render(_ctx, _cache) {
  const _component_ba_input = _resolveComponent("ba-input")

  return (_openBlock(), _createBlock(_component_ba_input, {
    placeholder: "请输入内容",
    modelValue: _ctx.input,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.input) = $event)),
    disabled: true
  }, null, 8 /* PROPS */, ["modelValue"]))
}
  
    const democomponentExport = {
  data() {
    return {
      input: ''
    }
  }
}
    return {
      render,
      ...democomponentExport
    }
  })(),"render-demo-2": (function() {
    
    const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue

function render(_ctx, _cache) {
  const _component_ba_input = _resolveComponent("ba-input")

  return (_openBlock(), _createBlock(_component_ba_input, {
    placeholder: "请输入内容",
    modelValue: _ctx.input,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.input) = $event)),
    clearable: ""
  }, null, 8 /* PROPS */, ["modelValue"]))
}
  
    const democomponentExport = {
    data() {
      return {
        input: ''
      }
    }
  }
    return {
      render,
      ...democomponentExport
    }
  })(),"render-demo-3": (function() {
    
    const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue

function render(_ctx, _cache) {
  const _component_ba_input = _resolveComponent("ba-input")

  return (_openBlock(), _createBlock(_component_ba_input, {
    type: "password",
    modelValue: _ctx.password,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.password) = $event)),
    showPassword: ""
  }, null, 8 /* PROPS */, ["modelValue"]))
}
  
    const democomponentExport = {
  name: 'App',
  data() {
    return {
      password:"password"
    }
  },
}
    return {
      render,
      ...democomponentExport
    }
  })(),
        }
      }
    </script>
<style></style>