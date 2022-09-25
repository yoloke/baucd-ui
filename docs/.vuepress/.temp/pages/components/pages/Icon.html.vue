<template><h2 id="icon-图标" tabindex="-1"><a class="header-anchor" href="#icon-图标" aria-hidden="true">#</a> Icon 图标</h2>
<p>提供了一套常用的图标集合。</p>
<h3 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h3>
<demo customClass="" sourceCode="  &lt;ba-icon icon=&quot;check-circle&quot;&gt;&lt;/ba-icon&gt;
  &lt;ba-icon icon=&quot;camera&quot;&gt;&lt;/ba-icon&gt;
  &lt;ba-icon icon=&quot;github&quot;&gt;&lt;/ba-icon&gt;
  &lt;ba-icon icon=&quot;headphones&quot;&gt;&lt;/ba-icon&gt;
  &lt;ba-icon icon=&quot;tool&quot;&gt;&lt;/ba-icon&gt;
  &lt;ba-icon icon=&quot;thumbs-up&quot;&gt;&lt;/ba-icon&gt;

"><render-demo-0 />
        <template #description>
          <div>使用<code>icon</code>属性来定义图标的样式。</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">  &lt;ba-icon icon=&quot;check-circle&quot;&gt;&lt;/ba-icon&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;ba-icon icon=&quot;camera&quot;&gt;&lt;/ba-icon&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;ba-icon icon=&quot;github&quot;&gt;&lt;/ba-icon&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;ba-icon icon=&quot;headphones&quot;&gt;&lt;/ba-icon&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;ba-icon icon=&quot;tool&quot;&gt;&lt;/ba-icon&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;ba-icon icon=&quot;thumbs-up&quot;&gt;&lt;/ba-icon&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h3 id="图标集合" tabindex="-1"><a class="header-anchor" href="#图标集合" aria-hidden="true">#</a> 图标集合</h3>
<br>
<icon-list/>
</template>

<script lang="ts">
      import * as Vue from 'vue'
      
      export default {
        name: 'component-doc',
        components: {
          "render-demo-0": (function() {
    
    const { resolveComponent: _resolveComponent, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

function render(_ctx, _cache) {
  const _component_ba_icon = _resolveComponent("ba-icon")

  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createVNode(_component_ba_icon, { icon: "check-circle" }),
    _createVNode(_component_ba_icon, { icon: "camera" }),
    _createVNode(_component_ba_icon, { icon: "github" }),
    _createVNode(_component_ba_icon, { icon: "headphones" }),
    _createVNode(_component_ba_icon, { icon: "tool" }),
    _createVNode(_component_ba_icon, { icon: "thumbs-up" })
  ], 64))
}
  
    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),
        }
      }
    </script>
<style></style>