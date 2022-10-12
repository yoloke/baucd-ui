<template><h2 id="pagination-分页" tabindex="-1"><a class="header-anchor" href="#pagination-分页" aria-hidden="true">#</a> Pagination 分页</h2>
<p>当数据量过多时，使用分页分解数据。</p>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<br/>
<h3 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h3>
<demo customClass="" sourceCode="&lt;template&gt;
&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;页数较少时的效果&lt;/span&gt;
  &lt;ba-pagination
    :pageNo=&quot;pageNo&quot;
    :pageSize=&quot;10&quot;
    :total=&quot;50&quot;
    :continues=&quot;5&quot;
    @getPageNo=&quot;getPageNo&quot;
  &gt;&lt;/ba-pagination&gt;
  &lt;/div&gt;
  &lt;span class=&quot;demonstration&quot;&gt;大于 5 页时的效果&lt;/span&gt;
  &lt;div class=&quot;block&quot;&gt;
  &lt;ba-pagination
    :pageNo=&quot;pageNo&quot;
    :pageSize=&quot;2&quot;
    :total=&quot;50&quot;
    :continues=&quot;5&quot;
    @getPageNo=&quot;getPageNo&quot;
  &gt;&lt;/ba-pagination&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: &quot;App&quot;,
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
&lt;/script&gt;
&lt;style&gt;
.demonstration{
  font-size:14px;
}
&lt;/style&gt;
"><render-demo-0 />
        <template #description>
          <div><code>pageNo</code>表示当前第几页，<code>pageSize</code>表示一页多少数据，<code>total</code>表示总条目数</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">class</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;block&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">span</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">class</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;demonstration&quot;</span><span style="color: var(--shiki-color-text)">&gt;页数较少时的效果&lt;/</span><span style="color: var(--shiki-token-string-expression)">span</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-pagination</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">pageNo</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">pageNo</span><span style="color: var(--shiki-color-text)">&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">pageSize</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">10</span><span style="color: var(--shiki-color-text)">&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">total</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">50</span><span style="color: var(--shiki-color-text)">&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">continues</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">5</span><span style="color: var(--shiki-color-text)">&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">@</span><span style="color: var(--shiki-token-function)">getPageNo</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">getPageNo</span><span style="color: var(--shiki-color-text)">&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-pagination</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">span</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">class</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;demonstration&quot;</span><span style="color: var(--shiki-color-text)">&gt;大于 5 页时的效果&lt;/</span><span style="color: var(--shiki-token-string-expression)">span</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">class</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;block&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-pagination</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">pageNo</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">pageNo</span><span style="color: var(--shiki-color-text)">&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">pageSize</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">2</span><span style="color: var(--shiki-color-text)">&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">total</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">50</span><span style="color: var(--shiki-color-text)">&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">continues</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">5</span><span style="color: var(--shiki-color-text)">&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">@</span><span style="color: var(--shiki-token-function)">getPageNo</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">getPageNo</span><span style="color: var(--shiki-color-text)">&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-pagination</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">default</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  name</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;App&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-function)">data</span><span style="color: var(--shiki-color-text)">() {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">return</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      pageNo</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">1</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    };</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  methods</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-function)">getPageNo</span><span style="color: var(--shiki-color-text)">(value) {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-constant)">this</span><span style="color: var(--shiki-color-text)">.pageNo </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> value;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">};</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">style</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">.demonstration</span><span style="color: var(--shiki-color-text)">{</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">font-size</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">14</span><span style="color: var(--shiki-token-keyword)">px</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">style</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h3 id="设置最大页码数" tabindex="-1"><a class="header-anchor" href="#设置最大页码数" aria-hidden="true">#</a> 设置最大页码数</h3>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;ba-pagination
    :pageNo=&quot;pageNo&quot;
    :pageSize=&quot;2&quot;
    :total=&quot;50&quot;
    :continues=&quot;7&quot;
    @getPageNo=&quot;getPageNo&quot;
  &gt;&lt;/ba-pagination&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: &quot;App&quot;,
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
&lt;/script&gt;
&lt;style&gt;
.demonstration{
  font-size:14px;
}
&lt;/style&gt;
"><render-demo-1 />
        <template #description>
          <div><code>continues</code>用于设置最大连续页码数。</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-pagination</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">pageNo</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">pageNo</span><span style="color: var(--shiki-color-text)">&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">pageSize</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">2</span><span style="color: var(--shiki-color-text)">&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">total</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">50</span><span style="color: var(--shiki-color-text)">&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">continues</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">7</span><span style="color: var(--shiki-color-text)">&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">@</span><span style="color: var(--shiki-token-function)">getPageNo</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">getPageNo</span><span style="color: var(--shiki-color-text)">&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-pagination</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">default</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  name</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;App&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-function)">data</span><span style="color: var(--shiki-color-text)">() {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">return</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      pageNo</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">1</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    };</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  methods</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-function)">getPageNo</span><span style="color: var(--shiki-color-text)">(value) {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-constant)">this</span><span style="color: var(--shiki-color-text)">.pageNo </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> value;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">};</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">style</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">.demonstration</span><span style="color: var(--shiki-color-text)">{</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">font-size</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">14</span><span style="color: var(--shiki-token-keyword)">px</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">style</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo></template>

<script lang="ts">
      import * as Vue from 'vue'
      
      export default {
        name: 'component-doc',
        components: {
          "render-demo-0": (function() {
    
    const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = { class: "block" }
const _hoisted_2 = /*#__PURE__*/_createElementVNode("span", { class: "demonstration" }, "页数较少时的效果", -1 /* HOISTED */)
const _hoisted_3 = /*#__PURE__*/_createElementVNode("span", { class: "demonstration" }, "大于 5 页时的效果", -1 /* HOISTED */)
const _hoisted_4 = { class: "block" }

function render(_ctx, _cache) {
  const _component_ba_pagination = _resolveComponent("ba-pagination")

  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createElementVNode("div", _hoisted_1, [
      _hoisted_2,
      _createVNode(_component_ba_pagination, {
        pageNo: _ctx.pageNo,
        pageSize: 10,
        total: 50,
        continues: 5,
        onGetPageNo: _ctx.getPageNo
      }, null, 8 /* PROPS */, ["pageNo", "onGetPageNo"])
    ]),
    _hoisted_3,
    _createElementVNode("div", _hoisted_4, [
      _createVNode(_component_ba_pagination, {
        pageNo: _ctx.pageNo,
        pageSize: 2,
        total: 50,
        continues: 5,
        onGetPageNo: _ctx.getPageNo
      }, null, 8 /* PROPS */, ["pageNo", "onGetPageNo"])
    ])
  ], 64 /* STABLE_FRAGMENT */))
}
  
    const democomponentExport = {
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
    return {
      render,
      ...democomponentExport
    }
  })(),"render-demo-1": (function() {
    
    const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue

function render(_ctx, _cache) {
  const _component_ba_pagination = _resolveComponent("ba-pagination")

  return (_openBlock(), _createBlock(_component_ba_pagination, {
    pageNo: _ctx.pageNo,
    pageSize: 2,
    total: 50,
    continues: 7,
    onGetPageNo: _ctx.getPageNo
  }, null, 8 /* PROPS */, ["pageNo", "onGetPageNo"]))
}
  
    const democomponentExport = {
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
    return {
      render,
      ...democomponentExport
    }
  })(),
        }
      }
    </script>
<style>.demonstration{
  font-size:14px;
}</style>