<template><h2 id="form-表单" tabindex="-1"><a class="header-anchor" href="#form-表单" aria-hidden="true">#</a> Form 表单</h2>
<p>由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据</p>
<h3 id="典型表单" tabindex="-1"><a class="header-anchor" href="#典型表单" aria-hidden="true">#</a> 典型表单</h3>
<br/>
包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。
<demo customClass="" sourceCode="&lt;ba-form ref=&quot;form&quot; :model=&quot;form&quot; label-width=&quot;80px&quot;&gt;
  &lt;ba-form-item label=&quot;活动名称&quot;&gt;
    &lt;ba-input v-model=&quot;form.name&quot;&gt;&lt;/ba-input&gt;
  &lt;/ba-form-item&gt;
  &lt;ba-form-item label=&quot;即时配送&quot;&gt;
    &lt;ba-switch v-model=&quot;form.delivery&quot;&gt;&lt;/ba-switch&gt;
  &lt;/ba-form-item&gt;
  &lt;ba-form-item label=&quot;活动性质&quot;&gt;
    &lt;ba-checkbox-group v-model=&quot;form.type&quot;&gt;
      &lt;ba-checkbox label=&quot;美食/餐厅线上活动&quot; name=&quot;type&quot;&gt;&lt;/ba-checkbox&gt;
      &lt;ba-checkbox label=&quot;地推活动&quot; name=&quot;type&quot;&gt;&lt;/ba-checkbox&gt;
      &lt;ba-checkbox label=&quot;线下主题活动&quot; name=&quot;type&quot;&gt;&lt;/ba-checkbox&gt;
    &lt;/ba-checkbox-group&gt;
  &lt;/ba-form-item&gt;
  &lt;ba-form-item label=&quot;特殊资源&quot;&gt;
    &lt;ba-radio-group v-model=&quot;form.resource&quot;&gt;
      &lt;ba-radio label=&quot;线上品牌商赞助&quot;&gt;&lt;/ba-radio&gt;
      &lt;ba-radio label=&quot;线下场地免费&quot;&gt;&lt;/ba-radio&gt;
    &lt;/ba-radio-group&gt;
  &lt;/ba-form-item&gt;
  &lt;ba-form-item label=&quot;活动形式&quot;&gt;
    &lt;ba-input type=&quot;textarea&quot; v-model=&quot;form.desc&quot;&gt;&lt;/ba-input&gt;
  &lt;/ba-form-item&gt;
  &lt;ba-form-item&gt;
    &lt;ba-button type=&quot;primary&quot; @click=&quot;onSubmit&quot;&gt;立即创建&lt;/ba-button&gt;
    &lt;ba-button&gt;取消&lt;/ba-button&gt;
  &lt;/ba-form-item&gt;
&lt;/ba-form&gt;
&lt;script&gt;
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
&lt;/script&gt;
"><render-demo-0 />
        <template #description>
          <div>在 Form 组件中，每一个表单域由一个 Form-Item 组件构成，表单域中可以放置各种类型的表单控件，包括 Input、Select、Checkbox、Radio、Switch、DatePicker、TimePicker</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;ba-form ref=&quot;form&quot; :model=&quot;form&quot; label-width=&quot;80px&quot;&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;ba-form-item label=&quot;活动名称&quot;&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;ba-input v-model=&quot;form.name&quot;&gt;&lt;/ba-input&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/ba-form-item&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;ba-form-item label=&quot;即时配送&quot;&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;ba-switch v-model=&quot;form.delivery&quot;&gt;&lt;/ba-switch&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/ba-form-item&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;ba-form-item label=&quot;活动性质&quot;&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;ba-checkbox-group v-model=&quot;form.type&quot;&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;ba-checkbox label=&quot;美食/餐厅线上活动&quot; name=&quot;type&quot;&gt;&lt;/ba-checkbox&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;ba-checkbox label=&quot;地推活动&quot; name=&quot;type&quot;&gt;&lt;/ba-checkbox&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;ba-checkbox label=&quot;线下主题活动&quot; name=&quot;type&quot;&gt;&lt;/ba-checkbox&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;/ba-checkbox-group&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/ba-form-item&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;ba-form-item label=&quot;特殊资源&quot;&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;ba-radio-group v-model=&quot;form.resource&quot;&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;ba-radio label=&quot;线上品牌商赞助&quot;&gt;&lt;/ba-radio&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;ba-radio label=&quot;线下场地免费&quot;&gt;&lt;/ba-radio&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;/ba-radio-group&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/ba-form-item&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;ba-form-item label=&quot;活动形式&quot;&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;ba-input type=&quot;textarea&quot; v-model=&quot;form.desc&quot;&gt;&lt;/ba-input&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/ba-form-item&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;ba-form-item&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;ba-button type=&quot;primary&quot; @click=&quot;onSubmit&quot;&gt;立即创建&lt;/ba-button&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;ba-button&gt;取消&lt;/ba-button&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/ba-form-item&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/ba-form&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">default</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-function)">data</span><span style="color: var(--shiki-color-text)">() {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">return</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        form</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">          name</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">          region</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">          date1</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">          date2</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">          delivery</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">          type</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> []</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">          resource</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">          desc</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;&#39;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    methods</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-function)">onSubmit</span><span style="color: var(--shiki-color-text)">() {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-constant)">console</span><span style="color: var(--shiki-token-function)">.log</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;submit!&#39;</span><span style="color: var(--shiki-color-text)">);</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><br/>
<h3 id="w3c-标准中有如下规定" tabindex="-1"><a class="header-anchor" href="#w3c-标准中有如下规定" aria-hidden="true">#</a> W3C 标准中有如下规定：</h3>
<h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h4>
<p>When there is only one single-line text input field in a form,
the user agent should accept Enter in that field as a request to submit the form.
即：当一个 form 元素中只有一个输入框时，在该输入框中按下回车应提交该表单。
如果希望阻止这一默认行为，可以在 <code>&lt;ba-form&gt;</code> 标签上添加 <code>@submit.native.prevent</code>。</p>
<br/>
<h3 id="form-item-attributes" tabindex="-1"><a class="header-anchor" href="#form-item-attributes" aria-hidden="true">#</a> Form-item Attributes</h3>
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
<td>String</td>
<td>表单项名称，默认为空字符串</td>
</tr>
</tbody>
</table>
<h3 id="form-attributes" tabindex="-1"><a class="header-anchor" href="#form-attributes" aria-hidden="true">#</a> Form Attributes</h3>
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
<td>model</td>
<td>Object</td>
<td>表单对象，必填</td>
</tr>
<tr>
<td>label-width</td>
<td>String</td>
<td>标签宽度，默认&quot;80px&quot;</td>
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
    
    const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, createTextVNode: _createTextVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue

const _hoisted_1 = /*#__PURE__*/_createTextVNode("立即创建")
const _hoisted_2 = /*#__PURE__*/_createTextVNode("取消")

function render(_ctx, _cache) {
  const _component_ba_input = _resolveComponent("ba-input")
  const _component_ba_form_item = _resolveComponent("ba-form-item")
  const _component_ba_switch = _resolveComponent("ba-switch")
  const _component_ba_checkbox = _resolveComponent("ba-checkbox")
  const _component_ba_checkbox_group = _resolveComponent("ba-checkbox-group")
  const _component_ba_radio = _resolveComponent("ba-radio")
  const _component_ba_radio_group = _resolveComponent("ba-radio-group")
  const _component_ba_button = _resolveComponent("ba-button")
  const _component_ba_form = _resolveComponent("ba-form")

  return (_openBlock(), _createBlock(_component_ba_form, {
    ref: "form",
    model: _ctx.form,
    "label-width": "80px"
  }, {
    default: _withCtx(() => [
      _createVNode(_component_ba_form_item, { label: "活动名称" }, {
        default: _withCtx(() => [
          _createVNode(_component_ba_input, {
            modelValue: _ctx.form.name,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.form.name) = $event))
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }),
      _createVNode(_component_ba_form_item, { label: "即时配送" }, {
        default: _withCtx(() => [
          _createVNode(_component_ba_switch, {
            modelValue: _ctx.form.delivery,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((_ctx.form.delivery) = $event))
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }),
      _createVNode(_component_ba_form_item, { label: "活动性质" }, {
        default: _withCtx(() => [
          _createVNode(_component_ba_checkbox_group, {
            modelValue: _ctx.form.type,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((_ctx.form.type) = $event))
          }, {
            default: _withCtx(() => [
              _createVNode(_component_ba_checkbox, {
                label: "美食/餐厅线上活动",
                name: "type"
              }),
              _createVNode(_component_ba_checkbox, {
                label: "地推活动",
                name: "type"
              }),
              _createVNode(_component_ba_checkbox, {
                label: "线下主题活动",
                name: "type"
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      }),
      _createVNode(_component_ba_form_item, { label: "特殊资源" }, {
        default: _withCtx(() => [
          _createVNode(_component_ba_radio_group, {
            modelValue: _ctx.form.resource,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ((_ctx.form.resource) = $event))
          }, {
            default: _withCtx(() => [
              _createVNode(_component_ba_radio, { label: "线上品牌商赞助" }),
              _createVNode(_component_ba_radio, { label: "线下场地免费" })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      }),
      _createVNode(_component_ba_form_item, { label: "活动形式" }, {
        default: _withCtx(() => [
          _createVNode(_component_ba_input, {
            type: "textarea",
            modelValue: _ctx.form.desc,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => ((_ctx.form.desc) = $event))
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }),
      _createVNode(_component_ba_form_item, null, {
        default: _withCtx(() => [
          _createVNode(_component_ba_button, {
            type: "primary",
            onClick: _ctx.onSubmit
          }, {
            default: _withCtx(() => [
              _hoisted_1
            ]),
            _: 1
          }, 8, ["onClick"]),
          _createVNode(_component_ba_button, null, {
            default: _withCtx(() => [
              _hoisted_2
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["model"]))
}
  
    const democomponentExport = {
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
    return {
      render,
      ...democomponentExport
    }
  })(),
        }
      }
    </script>
<style></style>