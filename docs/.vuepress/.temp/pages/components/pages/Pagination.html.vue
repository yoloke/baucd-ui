<template><h2 id="pagination-分页" tabindex="-1"><a class="header-anchor" href="#pagination-分页" aria-hidden="true">#</a> Pagination 分页</h2>
<p>当数据量过多时，使用分页分解数据。</p>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<br/>
提供了一套常用的图标集合。
<h3 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h3>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;ba-pagination
    :pageNo=&quot;pageNo&quot;
    :pageSize=&quot;1&quot;
    :total=&quot;50&quot;
    :continues=&quot;3&quot;
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
"><render-demo-0 />
        <template #description>
          <div>使用<code>icon</code>属性来定义图标的样式。</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-pagination</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">pageNo</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">pageNo</span><span style="color: var(--shiki-color-text)">&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">pageSize</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">1</span><span style="color: var(--shiki-color-text)">&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">total</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">50</span><span style="color: var(--shiki-color-text)">&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">continues</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">3</span><span style="color: var(--shiki-color-text)">&quot;</span></span>
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
<span class="line"></span></code></pre>
          </div>
        </template></demo></template>

<script lang="ts">
      import * as Vue from 'vue'
      
      export default {
        name: 'component-doc',
        components: {
          "render-demo-0": (function() {
    
    const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue

function render(_ctx, _cache) {
  const _component_ba_pagination = _resolveComponent("ba-pagination")

  return (_openBlock(), _createBlock(_component_ba_pagination, {
    pageNo: _ctx.pageNo,
    pageSize: 1,
    total: 50,
    continues: 3,
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
<style></style>