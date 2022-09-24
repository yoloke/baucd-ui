<template><h2 id="checkbox-多选框" tabindex="-1"><a class="header-anchor" href="#checkbox-多选框" aria-hidden="true">#</a> Checkbox 多选框</h2>
<p>一组备选项中进行多选</p>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<p>单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。</p>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;!-- `checked` 为 true 或 false --&gt;
  &lt;ba-checkbox v-model=&quot;checked&quot;&gt;备选项&lt;/ba-checkbox&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        checked: true
      };
    }
  };
&lt;/script&gt;
"><render-demo-0 />
        <template #description>
          <div>在<code>ba-checkbox</code>元素中定义<code>v-model</code>绑定变量，单一的<code>checkbox</code>中，默认绑定变量的值会是<code>Boolean</code>，选中为<code>true</code>。</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-comment)">&lt;!-- `checked` 为 true 或 false --&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-checkbox</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">v-model</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">checked</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">&gt;备选项&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-checkbox</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">default</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-function)">data</span><span style="color: var(--shiki-color-text)">() {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">return</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        checked</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">true</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      };</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  };</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h3 id="禁用状态" tabindex="-1"><a class="header-anchor" href="#禁用状态" aria-hidden="true">#</a> 禁用状态</h3>
<p>多选框不可用状态。</p>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;ba-checkbox v-model=&quot;checked1&quot; disabled&gt;备选项1&lt;/ba-checkbox&gt;
  &lt;ba-checkbox v-model=&quot;checked2&quot; disabled&gt;备选项2&lt;/ba-checkbox&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        checked1: false,
        checked2: true
      };
    }
  };
&lt;/script&gt;
"><render-demo-1 />
        <template #description>
          <div>设置<code>disabled</code>属性即可。</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-checkbox</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">v-model</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">checked1</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)">&gt;备选项1&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-checkbox</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-checkbox</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">v-model</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">checked2</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)">&gt;备选项2&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-checkbox</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">default</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-function)">data</span><span style="color: var(--shiki-color-text)">() {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">return</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        checked1</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        checked2</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">true</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      };</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  };</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h3 id="多选框组" tabindex="-1"><a class="header-anchor" href="#多选框组" aria-hidden="true">#</a> 多选框组</h3>
<p>适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。</p>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;ba-checkbox-group v-model=&quot;checkList&quot;&gt;
    &lt;ba-checkbox label=&quot;复选框 A&quot;&gt;&lt;/ba-checkbox&gt;
    &lt;ba-checkbox label=&quot;复选框 B&quot;&gt;&lt;/ba-checkbox&gt;
    &lt;ba-checkbox label=&quot;复选框 C&quot;&gt;&lt;/ba-checkbox&gt;
    &lt;ba-checkbox label=&quot;禁用&quot; disabled&gt;&lt;/ba-checkbox&gt;
    &lt;ba-checkbox label=&quot;选中且禁用&quot; disabled&gt;&lt;/ba-checkbox&gt;
  &lt;/ba-checkbox-group&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        checkList: ['选中且禁用','复选框 A']
      };
    }
  };
&lt;/script&gt;
"><render-demo-2 />
        <template #description>
          <div><code>checkbox-group</code>元素能把多个 <code>checkbox</code> 管理为一组，只需要在 <code>Group</code> 中使用<code>v-model</code>绑定<code>Array</code>类型的变量即可。 <code>ba-checkbox</code> 的 <code>label</code>属性是该 <code>checkbox</code> 对应的值，若该标签中无内容，则该属性也充当 <code>checkbox </code>按钮后的介绍。label与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-checkbox-group</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">v-model</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">checkList</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-checkbox</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;复选框 A&quot;</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-checkbox</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-checkbox</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;复选框 B&quot;</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-checkbox</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-checkbox</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;复选框 C&quot;</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-checkbox</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-checkbox</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;禁用&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-checkbox</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-checkbox</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;选中且禁用&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-checkbox</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-checkbox-group</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">default</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-function)">data</span><span style="color: var(--shiki-color-text)"> () {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">return</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        checkList</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> [</span><span style="color: var(--shiki-token-string-expression)">&#39;选中且禁用&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-string-expression)">&#39;复选框 A&#39;</span><span style="color: var(--shiki-color-text)">]</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      };</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  };</span></span>
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
<td>label</td>
<td>[String, Number, Boolean]</td>
<td>单选框 label 值，默认为空字符串</td>
</tr>
<tr>
<td>value</td>
<td>String</td>
<td>表单值，默认为空字符串</td>
</tr>
<tr>
<td>mimicry</td>
<td>Boolean</td>
<td>对话框是否为拟态风格，默认为 false</td>
</tr>
<tr>
<td>name</td>
<td>String</td>
<td>表单命名，默认为空</td>
</tr>
<tr>
<td>color</td>
<td>String</td>
<td>单选框选择时的颜色，默认为#409eff</td>
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
    
    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue

const _hoisted_1 = /*#__PURE__*/_createTextVNode("备选项")

function render(_ctx, _cache) {
  const _component_ba_checkbox = _resolveComponent("ba-checkbox")

  return (_openBlock(), _createBlock(_component_ba_checkbox, {
    modelValue: _ctx.checked,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.checked) = $event))
  }, {
    default: _withCtx(() => [
      _hoisted_1
    ]),
    _: 1
  }, 8, ["modelValue"]))
}
  
    const democomponentExport = {
    data() {
      return {
        checked: true
      };
    }
  };
    return {
      render,
      ...democomponentExport
    }
  })(),"render-demo-1": (function() {
    
    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = /*#__PURE__*/_createTextVNode("备选项1")
const _hoisted_2 = /*#__PURE__*/_createTextVNode("备选项2")

function render(_ctx, _cache) {
  const _component_ba_checkbox = _resolveComponent("ba-checkbox")

  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createVNode(_component_ba_checkbox, {
      modelValue: _ctx.checked1,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.checked1) = $event)),
      disabled: ""
    }, {
      default: _withCtx(() => [
        _hoisted_1
      ]),
      _: 1
    }, 8, ["modelValue"]),
    _createVNode(_component_ba_checkbox, {
      modelValue: _ctx.checked2,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((_ctx.checked2) = $event)),
      disabled: ""
    }, {
      default: _withCtx(() => [
        _hoisted_2
      ]),
      _: 1
    }, 8, ["modelValue"])
  ], 64))
}
  
    const democomponentExport = {
    data() {
      return {
        checked1: false,
        checked2: true
      };
    }
  };
    return {
      render,
      ...democomponentExport
    }
  })(),"render-demo-2": (function() {
    
    const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue

function render(_ctx, _cache) {
  const _component_ba_checkbox = _resolveComponent("ba-checkbox")
  const _component_ba_checkbox_group = _resolveComponent("ba-checkbox-group")

  return (_openBlock(), _createBlock(_component_ba_checkbox_group, {
    modelValue: _ctx.checkList,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.checkList) = $event))
  }, {
    default: _withCtx(() => [
      _createVNode(_component_ba_checkbox, { label: "复选框 A" }),
      _createVNode(_component_ba_checkbox, { label: "复选框 B" }),
      _createVNode(_component_ba_checkbox, { label: "复选框 C" }),
      _createVNode(_component_ba_checkbox, {
        label: "禁用",
        disabled: ""
      }),
      _createVNode(_component_ba_checkbox, {
        label: "选中且禁用",
        disabled: ""
      })
    ]),
    _: 1
  }, 8, ["modelValue"]))
}
  
    const democomponentExport = {
    data () {
      return {
        checkList: ['选中且禁用','复选框 A']
      };
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