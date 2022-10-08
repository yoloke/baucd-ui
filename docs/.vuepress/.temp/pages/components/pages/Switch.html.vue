<template><h2 id="switch-开关" tabindex="-1"><a class="header-anchor" href="#switch-开关" aria-hidden="true">#</a> Switch 开关</h2>
<p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<demo customClass="" sourceCode="&lt;ba-switch
  v-model=&quot;value&quot;
  activeColor=&quot;#13ce66&quot;
  inactiveColor=&quot;#ff4949&quot;&gt;
&lt;/ba-switch&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: true
      }
    }
  };
&lt;/script&gt;

"><render-demo-0 />
        <template #description>
          <div>绑定<code>v-model</code>到一个<code>Boolean</code>类型的变量。可以使用<code>activeColor</code>属性与<code>inactiveColor</code>属性来设置开关的背景色。</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;ba-switch</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  v-model=&quot;value&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  activeColor=&quot;#13ce66&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  inactiveColor=&quot;#ff4949&quot;&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/ba-switch&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">default</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-function)">data</span><span style="color: var(--shiki-color-text)">() {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">return</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        value</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">true</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  };</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
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
<td>mimicry</td>
<td>Boolean</td>
<td>对话框是否为拟态风格，默认为 false</td>
</tr>
<tr>
<td>name</td>
<td>String</td>
<td>switch 对应的 name 属性，默认为空</td>
</tr>
<tr>
<td>value / v-model</td>
<td>String</td>
<td>绑定值，默认为空字符串</td>
</tr>
<tr>
<td>disabled</td>
<td>Boolean</td>
<td>是否禁用，默认为 false</td>
</tr>
<tr>
<td>activeColor</td>
<td>String</td>
<td>激活状态颜色，默认为#dcdfe6</td>
</tr>
<tr>
<td>inactiveColor</td>
<td>String</td>
<td>未激化状态颜色，默认为#dcdfe6</td>
</tr>
</tbody>
</table>
<h3 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3>
<table>
<thead>
<tr>
<th>事件</th>
<th>值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>Function</td>
<td>状态修改触发事件，返回修改后的状态</td>
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
  const _component_ba_switch = _resolveComponent("ba-switch")

  return (_openBlock(), _createBlock(_component_ba_switch, {
    modelValue: _ctx.value,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.value) = $event)),
    activeColor: "#13ce66",
    inactiveColor: "#ff4949"
  }, null, 8 /* PROPS */, ["modelValue"]))
}
  
    const democomponentExport = {
    data() {
      return {
        value: true
      }
    }
  };
    return {
      render,
      ...democomponentExport
    }
  })(),
        }
      }
    </script>
<style></style>