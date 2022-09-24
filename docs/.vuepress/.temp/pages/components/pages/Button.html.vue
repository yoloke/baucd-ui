<template><h2 id="button-按钮" tabindex="-1"><a class="header-anchor" href="#button-按钮" aria-hidden="true">#</a> Button 按钮</h2>
<p>常用的操作按钮。</p>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<br/>
基础的按钮用法。
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;ba-button&gt;默认按钮&lt;/ba-button&gt;
  &lt;ba-button type=&quot;primary&quot;&gt;主要按钮&lt;/ba-button&gt;
  &lt;ba-button type=&quot;success&quot;&gt;成功按钮&lt;/ba-button&gt;
  &lt;ba-button type=&quot;info&quot;&gt;信息按钮&lt;/ba-button&gt;
  &lt;ba-button type=&quot;warning&quot;&gt;警告按钮&lt;/ba-button&gt;
  &lt;ba-button type=&quot;danger&quot;&gt;危险按钮&lt;/ba-button&gt;
  &lt;br/&gt;
  &lt;br/&gt;
  &lt;ba-button plain&gt;朴素按钮&lt;/ba-button&gt;
  &lt;ba-button type=&quot;primary&quot; plain&gt;主要按钮&lt;/ba-button&gt;
  &lt;ba-button type=&quot;success&quot; plain&gt;成功按钮&lt;/ba-button&gt;
  &lt;ba-button type=&quot;info&quot; plain&gt;信息按钮&lt;/ba-button&gt;
  &lt;ba-button type=&quot;warning&quot; plain&gt;警告按钮&lt;/ba-button&gt;
  &lt;ba-button type=&quot;danger&quot; plain&gt;危险按钮&lt;/ba-button&gt;
  &lt;br/&gt;
  &lt;br/&gt;
  &lt;ba-button round&gt;圆角按钮&lt;/ba-button&gt;
  &lt;ba-button type=&quot;primary&quot; round&gt;主要按钮&lt;/ba-button&gt;
  &lt;ba-button type=&quot;success&quot; round&gt;成功按钮&lt;/ba-button&gt;
  &lt;ba-button type=&quot;info&quot; round&gt;信息按钮&lt;/ba-button&gt;
  &lt;ba-button type=&quot;warning&quot; round&gt;警告按钮&lt;/ba-button&gt;
  &lt;ba-button type=&quot;danger&quot; round&gt;危险按钮&lt;/ba-button&gt;
  &lt;br/&gt;
  &lt;br/&gt;
   &lt;ba-button icon=&quot;search&quot; circle&gt;&lt;/ba-button&gt;
  &lt;ba-button type=&quot;primary&quot; icon=&quot;edit&quot; circle&gt;&lt;/ba-button&gt;
  &lt;ba-button type=&quot;success&quot; icon=&quot;check&quot; circle&gt;&lt;/ba-button&gt;
  &lt;ba-button type=&quot;info&quot; icon=&quot;power&quot; circle&gt;&lt;/ba-button&gt;
  &lt;ba-button type=&quot;warning&quot; icon=&quot;heart&quot; circle&gt;&lt;/ba-button&gt;
  &lt;ba-button type=&quot;danger&quot; icon=&quot;delete&quot; circle&gt;&lt;/ba-button&gt;
&lt;/template&gt;

"><render-demo-0 />
        <template #description>
          <div>使用<code>type</code>、<code>plain</code>、<code>round</code>和<code>circle</code>属性来定义 Button 的样式。</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;默认按钮&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;primary&quot;</span><span style="color: var(--shiki-color-text)">&gt;主要按钮&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;success&quot;</span><span style="color: var(--shiki-color-text)">&gt;成功按钮&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;info&quot;</span><span style="color: var(--shiki-color-text)">&gt;信息按钮&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;warning&quot;</span><span style="color: var(--shiki-color-text)">&gt;警告按钮&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;danger&quot;</span><span style="color: var(--shiki-color-text)">&gt;危险按钮&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">br</span><span style="color: var(--shiki-color-text)">/&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">br</span><span style="color: var(--shiki-color-text)">/&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">plain</span><span style="color: var(--shiki-color-text)">&gt;朴素按钮&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;primary&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">plain</span><span style="color: var(--shiki-color-text)">&gt;主要按钮&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;success&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">plain</span><span style="color: var(--shiki-color-text)">&gt;成功按钮&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;info&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">plain</span><span style="color: var(--shiki-color-text)">&gt;信息按钮&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;warning&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">plain</span><span style="color: var(--shiki-color-text)">&gt;警告按钮&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;danger&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">plain</span><span style="color: var(--shiki-color-text)">&gt;危险按钮&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">br</span><span style="color: var(--shiki-color-text)">/&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">br</span><span style="color: var(--shiki-color-text)">/&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">round</span><span style="color: var(--shiki-color-text)">&gt;圆角按钮&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;primary&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">round</span><span style="color: var(--shiki-color-text)">&gt;主要按钮&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;success&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">round</span><span style="color: var(--shiki-color-text)">&gt;成功按钮&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;info&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">round</span><span style="color: var(--shiki-color-text)">&gt;信息按钮&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;warning&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">round</span><span style="color: var(--shiki-color-text)">&gt;警告按钮&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;danger&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">round</span><span style="color: var(--shiki-color-text)">&gt;危险按钮&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">br</span><span style="color: var(--shiki-color-text)">/&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">br</span><span style="color: var(--shiki-color-text)">/&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">   &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">icon</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;search&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">circle</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;primary&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">icon</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;edit&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">circle</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;success&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">icon</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;check&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">circle</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;info&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">icon</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;power&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">circle</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;warning&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">icon</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;heart&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">circle</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;danger&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">icon</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;delete&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">circle</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h3 id="禁用状态" tabindex="-1"><a class="header-anchor" href="#禁用状态" aria-hidden="true">#</a> 禁用状态</h3>
<h4 id="按钮不可用状态。" tabindex="-1"><a class="header-anchor" href="#按钮不可用状态。" aria-hidden="true">#</a> 按钮不可用状态。</h4>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;ba-button disabled&gt;默认按钮&lt;/ba-button&gt;
  &lt;ba-button type=&quot;primary&quot; disabled&gt;主要按钮&lt;/ba-button&gt;
  &lt;ba-button type=&quot;success&quot; disabled&gt;成功按钮&lt;/ba-button&gt;
  &lt;ba-button type=&quot;info&quot; disabled&gt;信息按钮&lt;/ba-button&gt;
  &lt;ba-button type=&quot;warning&quot; disabled&gt;警告按钮&lt;/ba-button&gt;
  &lt;ba-button type=&quot;danger&quot; disabled&gt;危险按钮&lt;/ba-button&gt;
  &lt;br/&gt;
  &lt;br/&gt;
  &lt;ba-button plain disabled&gt;朴素按钮&lt;/ba-button&gt;
  &lt;ba-button type=&quot;primary&quot; plain disabled&gt;主要按钮&lt;/ba-button&gt;
  &lt;ba-button type=&quot;success&quot; plain disabled&gt;成功按钮&lt;/ba-button&gt;
  &lt;ba-button type=&quot;info&quot; plain disabled&gt;信息按钮&lt;/ba-button&gt;
  &lt;ba-button type=&quot;warning&quot; plain disabled&gt;警告按钮&lt;/ba-button&gt;
  &lt;ba-button type=&quot;danger&quot; plain disabled&gt;危险按钮&lt;/ba-button&gt;
&lt;/template&gt;

"><render-demo-1 />
        <template #description>
          <div>使用<code>disabled</code>属性来定义 Button 禁用。</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)">&gt;默认按钮&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;primary&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)">&gt;主要按钮&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;success&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)">&gt;成功按钮&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;info&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)">&gt;信息按钮&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;warning&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)">&gt;警告按钮&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;danger&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)">&gt;危险按钮&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">br</span><span style="color: var(--shiki-color-text)">/&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">br</span><span style="color: var(--shiki-color-text)">/&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">plain</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)">&gt;朴素按钮&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;primary&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">plain</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)">&gt;主要按钮&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;success&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">plain</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)">&gt;成功按钮&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;info&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">plain</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)">&gt;信息按钮&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;warning&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">plain</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)">&gt;警告按钮&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;danger&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">plain</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)">&gt;危险按钮&lt;/</span><span style="color: var(--shiki-token-string-expression)">ba-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
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
<td>type</td>
<td>String</td>
<td>按钮类型：primary,info,success,warning,danger</td>
</tr>
<tr>
<td>plain</td>
<td>Boolean</td>
<td>是否为朴素按钮，默认为 false</td>
</tr>
<tr>
<td>mimicry</td>
<td>Boolean</td>
<td>是否为拟态按钮，和 plain 不能同时设置，会被 plain 覆盖。默认为 false</td>
</tr>
<tr>
<td>disabled</td>
<td>Boolean</td>
<td>是否禁用按钮，默认为 false</td>
</tr>
<tr>
<td>round</td>
<td>Boolean</td>
<td>是否为圆角按钮，默认为 false</td>
</tr>
<tr>
<td>circle</td>
<td>Boolean</td>
<td>是否为圆形按钮，默认为 false</td>
</tr>
<tr>
<td>icon</td>
<td>Array 或 Boolean</td>
<td>font-awesome 字体数组，默认为 false</td>
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
<td>click</td>
<td>Function</td>
<td>点击事件</td>
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
    
    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = /*#__PURE__*/_createTextVNode("默认按钮")
const _hoisted_2 = /*#__PURE__*/_createTextVNode("主要按钮")
const _hoisted_3 = /*#__PURE__*/_createTextVNode("成功按钮")
const _hoisted_4 = /*#__PURE__*/_createTextVNode("信息按钮")
const _hoisted_5 = /*#__PURE__*/_createTextVNode("警告按钮")
const _hoisted_6 = /*#__PURE__*/_createTextVNode("危险按钮")
const _hoisted_7 = /*#__PURE__*/_createElementVNode("br", null, null, -1)
const _hoisted_8 = /*#__PURE__*/_createElementVNode("br", null, null, -1)
const _hoisted_9 = /*#__PURE__*/_createTextVNode("朴素按钮")
const _hoisted_10 = /*#__PURE__*/_createTextVNode("主要按钮")
const _hoisted_11 = /*#__PURE__*/_createTextVNode("成功按钮")
const _hoisted_12 = /*#__PURE__*/_createTextVNode("信息按钮")
const _hoisted_13 = /*#__PURE__*/_createTextVNode("警告按钮")
const _hoisted_14 = /*#__PURE__*/_createTextVNode("危险按钮")
const _hoisted_15 = /*#__PURE__*/_createElementVNode("br", null, null, -1)
const _hoisted_16 = /*#__PURE__*/_createElementVNode("br", null, null, -1)
const _hoisted_17 = /*#__PURE__*/_createTextVNode("圆角按钮")
const _hoisted_18 = /*#__PURE__*/_createTextVNode("主要按钮")
const _hoisted_19 = /*#__PURE__*/_createTextVNode("成功按钮")
const _hoisted_20 = /*#__PURE__*/_createTextVNode("信息按钮")
const _hoisted_21 = /*#__PURE__*/_createTextVNode("警告按钮")
const _hoisted_22 = /*#__PURE__*/_createTextVNode("危险按钮")
const _hoisted_23 = /*#__PURE__*/_createElementVNode("br", null, null, -1)
const _hoisted_24 = /*#__PURE__*/_createElementVNode("br", null, null, -1)

function render(_ctx, _cache) {
  const _component_ba_button = _resolveComponent("ba-button")

  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createVNode(_component_ba_button, null, {
      default: _withCtx(() => [
        _hoisted_1
      ]),
      _: 1
    }),
    _createVNode(_component_ba_button, { type: "primary" }, {
      default: _withCtx(() => [
        _hoisted_2
      ]),
      _: 1
    }),
    _createVNode(_component_ba_button, { type: "success" }, {
      default: _withCtx(() => [
        _hoisted_3
      ]),
      _: 1
    }),
    _createVNode(_component_ba_button, { type: "info" }, {
      default: _withCtx(() => [
        _hoisted_4
      ]),
      _: 1
    }),
    _createVNode(_component_ba_button, { type: "warning" }, {
      default: _withCtx(() => [
        _hoisted_5
      ]),
      _: 1
    }),
    _createVNode(_component_ba_button, { type: "danger" }, {
      default: _withCtx(() => [
        _hoisted_6
      ]),
      _: 1
    }),
    _hoisted_7,
    _hoisted_8,
    _createVNode(_component_ba_button, { plain: "" }, {
      default: _withCtx(() => [
        _hoisted_9
      ]),
      _: 1
    }),
    _createVNode(_component_ba_button, {
      type: "primary",
      plain: ""
    }, {
      default: _withCtx(() => [
        _hoisted_10
      ]),
      _: 1
    }),
    _createVNode(_component_ba_button, {
      type: "success",
      plain: ""
    }, {
      default: _withCtx(() => [
        _hoisted_11
      ]),
      _: 1
    }),
    _createVNode(_component_ba_button, {
      type: "info",
      plain: ""
    }, {
      default: _withCtx(() => [
        _hoisted_12
      ]),
      _: 1
    }),
    _createVNode(_component_ba_button, {
      type: "warning",
      plain: ""
    }, {
      default: _withCtx(() => [
        _hoisted_13
      ]),
      _: 1
    }),
    _createVNode(_component_ba_button, {
      type: "danger",
      plain: ""
    }, {
      default: _withCtx(() => [
        _hoisted_14
      ]),
      _: 1
    }),
    _hoisted_15,
    _hoisted_16,
    _createVNode(_component_ba_button, { round: "" }, {
      default: _withCtx(() => [
        _hoisted_17
      ]),
      _: 1
    }),
    _createVNode(_component_ba_button, {
      type: "primary",
      round: ""
    }, {
      default: _withCtx(() => [
        _hoisted_18
      ]),
      _: 1
    }),
    _createVNode(_component_ba_button, {
      type: "success",
      round: ""
    }, {
      default: _withCtx(() => [
        _hoisted_19
      ]),
      _: 1
    }),
    _createVNode(_component_ba_button, {
      type: "info",
      round: ""
    }, {
      default: _withCtx(() => [
        _hoisted_20
      ]),
      _: 1
    }),
    _createVNode(_component_ba_button, {
      type: "warning",
      round: ""
    }, {
      default: _withCtx(() => [
        _hoisted_21
      ]),
      _: 1
    }),
    _createVNode(_component_ba_button, {
      type: "danger",
      round: ""
    }, {
      default: _withCtx(() => [
        _hoisted_22
      ]),
      _: 1
    }),
    _hoisted_23,
    _hoisted_24,
    _createVNode(_component_ba_button, {
      icon: "search",
      circle: ""
    }),
    _createVNode(_component_ba_button, {
      type: "primary",
      icon: "edit",
      circle: ""
    }),
    _createVNode(_component_ba_button, {
      type: "success",
      icon: "check",
      circle: ""
    }),
    _createVNode(_component_ba_button, {
      type: "info",
      icon: "power",
      circle: ""
    }),
    _createVNode(_component_ba_button, {
      type: "warning",
      icon: "heart",
      circle: ""
    }),
    _createVNode(_component_ba_button, {
      type: "danger",
      icon: "delete",
      circle: ""
    })
  ], 64))
}
  
    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),"render-demo-1": (function() {
    
    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = /*#__PURE__*/_createTextVNode("默认按钮")
const _hoisted_2 = /*#__PURE__*/_createTextVNode("主要按钮")
const _hoisted_3 = /*#__PURE__*/_createTextVNode("成功按钮")
const _hoisted_4 = /*#__PURE__*/_createTextVNode("信息按钮")
const _hoisted_5 = /*#__PURE__*/_createTextVNode("警告按钮")
const _hoisted_6 = /*#__PURE__*/_createTextVNode("危险按钮")
const _hoisted_7 = /*#__PURE__*/_createElementVNode("br", null, null, -1)
const _hoisted_8 = /*#__PURE__*/_createElementVNode("br", null, null, -1)
const _hoisted_9 = /*#__PURE__*/_createTextVNode("朴素按钮")
const _hoisted_10 = /*#__PURE__*/_createTextVNode("主要按钮")
const _hoisted_11 = /*#__PURE__*/_createTextVNode("成功按钮")
const _hoisted_12 = /*#__PURE__*/_createTextVNode("信息按钮")
const _hoisted_13 = /*#__PURE__*/_createTextVNode("警告按钮")
const _hoisted_14 = /*#__PURE__*/_createTextVNode("危险按钮")

function render(_ctx, _cache) {
  const _component_ba_button = _resolveComponent("ba-button")

  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createVNode(_component_ba_button, { disabled: "" }, {
      default: _withCtx(() => [
        _hoisted_1
      ]),
      _: 1
    }),
    _createVNode(_component_ba_button, {
      type: "primary",
      disabled: ""
    }, {
      default: _withCtx(() => [
        _hoisted_2
      ]),
      _: 1
    }),
    _createVNode(_component_ba_button, {
      type: "success",
      disabled: ""
    }, {
      default: _withCtx(() => [
        _hoisted_3
      ]),
      _: 1
    }),
    _createVNode(_component_ba_button, {
      type: "info",
      disabled: ""
    }, {
      default: _withCtx(() => [
        _hoisted_4
      ]),
      _: 1
    }),
    _createVNode(_component_ba_button, {
      type: "warning",
      disabled: ""
    }, {
      default: _withCtx(() => [
        _hoisted_5
      ]),
      _: 1
    }),
    _createVNode(_component_ba_button, {
      type: "danger",
      disabled: ""
    }, {
      default: _withCtx(() => [
        _hoisted_6
      ]),
      _: 1
    }),
    _hoisted_7,
    _hoisted_8,
    _createVNode(_component_ba_button, {
      plain: "",
      disabled: ""
    }, {
      default: _withCtx(() => [
        _hoisted_9
      ]),
      _: 1
    }),
    _createVNode(_component_ba_button, {
      type: "primary",
      plain: "",
      disabled: ""
    }, {
      default: _withCtx(() => [
        _hoisted_10
      ]),
      _: 1
    }),
    _createVNode(_component_ba_button, {
      type: "success",
      plain: "",
      disabled: ""
    }, {
      default: _withCtx(() => [
        _hoisted_11
      ]),
      _: 1
    }),
    _createVNode(_component_ba_button, {
      type: "info",
      plain: "",
      disabled: ""
    }, {
      default: _withCtx(() => [
        _hoisted_12
      ]),
      _: 1
    }),
    _createVNode(_component_ba_button, {
      type: "warning",
      plain: "",
      disabled: ""
    }, {
      default: _withCtx(() => [
        _hoisted_13
      ]),
      _: 1
    }),
    _createVNode(_component_ba_button, {
      type: "danger",
      plain: "",
      disabled: ""
    }, {
      default: _withCtx(() => [
        _hoisted_14
      ]),
      _: 1
    })
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