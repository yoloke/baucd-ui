<template><h2 id="radio-单选框" tabindex="-1"><a class="header-anchor" href="#radio-单选框" aria-hidden="true">#</a> Radio 单选框</h2>
<p>在一组备选项中进行单选</p>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;ba-radio v-model=&quot;radio&quot; label=&quot;1&quot;&gt;备选项&lt;/ba-radio&gt;
  &lt;ba-radio v-model=&quot;radio&quot; label=&quot;2&quot;&gt;备选项&lt;/ba-radio&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
&lt;/script&gt;
"><render-demo-0 />
        <template #description>
          <div>要使用 Radio 组件，只需要设置<code>v-model</code>绑定变量，选中意味着变量的值为相应 Radio <code>label</code>属性的值，<code>label</code>可以是<code>String</code>、<code>Number</code>或<code>Boolean</code>。</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-radio</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">v-model</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">radio</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;1&quot;</span><span style="color: var(--shiki-color-text)">&gt;备选项&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-radio</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-radio</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">v-model</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">radio</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;2&quot;</span><span style="color: var(--shiki-color-text)">&gt;备选项&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-radio</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">default</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-function)">data</span><span style="color: var(--shiki-color-text)"> () {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">return</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        radio</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;1&#39;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      };</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h3 id="禁用状态" tabindex="-1"><a class="header-anchor" href="#禁用状态" aria-hidden="true">#</a> 禁用状态</h3>
<p>单选框不可用的状态。</p>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;ba-radio disabled v-model=&quot;radio&quot; label=&quot;禁用&quot;&gt;备选项&lt;/ba-radio&gt;
  &lt;ba-radio disabled v-model=&quot;radio&quot; label=&quot;选中且禁用&quot;&gt;备选项&lt;/ba-radio&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data () {
      return {
        radio: '选中且禁用'
      };
    }
  }
&lt;/script&gt;
"><render-demo-1 />
        <template #description>
          <div>只要在<code>ba-radio</code>元素中设置<code>disabled</code>属性即可，它接受一个<code>Boolean</code>，<code>true</code>为禁用。</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-radio</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">v-model</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">radio</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;禁用&quot;</span><span style="color: var(--shiki-color-text)">&gt;备选项&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-radio</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-radio</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">v-model</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">radio</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;选中且禁用&quot;</span><span style="color: var(--shiki-color-text)">&gt;备选项&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-radio</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">default</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-function)">data</span><span style="color: var(--shiki-color-text)"> () {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">return</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        radio</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;选中且禁用&#39;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      };</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h3 id="单选框组" tabindex="-1"><a class="header-anchor" href="#单选框组" aria-hidden="true">#</a> 单选框组</h3>
<p>适用于在多个互斥的选项中选择的场景</p>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;ba-radio-group v-model=&quot;radio&quot;&gt;
    &lt;ba-radio :label=&quot;3&quot;&gt;备选项&lt;/ba-radio&gt;
    &lt;ba-radio :label=&quot;6&quot;&gt;备选项&lt;/ba-radio&gt;
    &lt;ba-radio :label=&quot;9&quot;&gt;备选项&lt;/ba-radio&gt;
  &lt;/ba-radio-group&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        radio: 3
      };
    }
  }
&lt;/script&gt;
"><render-demo-2 />
        <template #description>
          <div>只要在<code>ba-radio</code>元素中设置<code>disabled</code>属性即可，它接受一个<code>Boolean</code>，<code>true</code>为禁用。</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-radio-group</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">v-model</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">radio</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-radio</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">3</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">&gt;备选项&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-radio</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-radio</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">6</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">&gt;备选项&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-radio</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-radio</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">9</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">&gt;备选项&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-radio</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-radio-group</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">default</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-function)">data</span><span style="color: var(--shiki-color-text)"> () {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">return</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        radio</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">3</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      };</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  }</span></span>
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
<td>单选框的value值，默认为空字符串</td>
</tr>
<tr>
<td>value / v-model</td>
<td>[String, Number, Boolean]</td>
<td>单选框的绑定值，默认为空字符串</td>
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
    
    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = /*#__PURE__*/_createTextVNode("备选项")
const _hoisted_2 = /*#__PURE__*/_createTextVNode("备选项")

function render(_ctx, _cache) {
  const _component_ba_radio = _resolveComponent("ba-radio")

  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createVNode(_component_ba_radio, {
      modelValue: _ctx.radio,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.radio) = $event)),
      label: "1"
    }, {
      default: _withCtx(() => [
        _hoisted_1
      ]),
      _: 1
    }, 8, ["modelValue"]),
    _createVNode(_component_ba_radio, {
      modelValue: _ctx.radio,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((_ctx.radio) = $event)),
      label: "2"
    }, {
      default: _withCtx(() => [
        _hoisted_2
      ]),
      _: 1
    }, 8, ["modelValue"])
  ], 64))
}
  
    const democomponentExport = {
    data () {
      return {
        radio: '1'
      };
    }
  }
    return {
      render,
      ...democomponentExport
    }
  })(),"render-demo-1": (function() {
    
    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = /*#__PURE__*/_createTextVNode("备选项")
const _hoisted_2 = /*#__PURE__*/_createTextVNode("备选项")

function render(_ctx, _cache) {
  const _component_ba_radio = _resolveComponent("ba-radio")

  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createVNode(_component_ba_radio, {
      disabled: "",
      modelValue: _ctx.radio,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.radio) = $event)),
      label: "禁用"
    }, {
      default: _withCtx(() => [
        _hoisted_1
      ]),
      _: 1
    }, 8, ["modelValue"]),
    _createVNode(_component_ba_radio, {
      disabled: "",
      modelValue: _ctx.radio,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((_ctx.radio) = $event)),
      label: "选中且禁用"
    }, {
      default: _withCtx(() => [
        _hoisted_2
      ]),
      _: 1
    }, 8, ["modelValue"])
  ], 64))
}
  
    const democomponentExport = {
    data () {
      return {
        radio: '选中且禁用'
      };
    }
  }
    return {
      render,
      ...democomponentExport
    }
  })(),"render-demo-2": (function() {
    
    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue

const _hoisted_1 = /*#__PURE__*/_createTextVNode("备选项")
const _hoisted_2 = /*#__PURE__*/_createTextVNode("备选项")
const _hoisted_3 = /*#__PURE__*/_createTextVNode("备选项")

function render(_ctx, _cache) {
  const _component_ba_radio = _resolveComponent("ba-radio")
  const _component_ba_radio_group = _resolveComponent("ba-radio-group")

  return (_openBlock(), _createBlock(_component_ba_radio_group, {
    modelValue: _ctx.radio,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.radio) = $event))
  }, {
    default: _withCtx(() => [
      _createVNode(_component_ba_radio, { label: 3 }, {
        default: _withCtx(() => [
          _hoisted_1
        ]),
        _: 1
      }),
      _createVNode(_component_ba_radio, { label: 6 }, {
        default: _withCtx(() => [
          _hoisted_2
        ]),
        _: 1
      }),
      _createVNode(_component_ba_radio, { label: 9 }, {
        default: _withCtx(() => [
          _hoisted_3
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["modelValue"]))
}
  
    const democomponentExport = {
    data () {
      return {
        radio: 3
      };
    }
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