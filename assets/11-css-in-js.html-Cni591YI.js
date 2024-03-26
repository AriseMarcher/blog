import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as p,c as o,b as s,d as l,e as i,f as c,a as n}from"./app-C7GBmG3V.js";const r={},d=n('<h2 id="css-in-js-why" tabindex="-1"><a class="header-anchor" href="#css-in-js-why"><span>CSS-IN-JS Why?</span></a></h2><p>CSS-IN-JS是WEB项目中将CSS代码捆绑在JavaScript代码中的解决方案。这种方案旨在解决CSS的局限性，例如缺乏动态功能，作用域和可移植性。</p><ul><li>组件为单位，希望CSS代码只在组件类的范围生效</li><li>增加组件的独立性和可移植性</li><li>CSS本身缺乏动态功能，不能根据条件给某一个元素添加相应的样式</li></ul><h2 id="css-in-js介绍" tabindex="-1"><a class="header-anchor" href="#css-in-js介绍"><span>CSS-IN-JS介绍</span></a></h2><p>CSS-IN-JS的优点：</p><ul><li>让CSS代码拥有独立的作用域，阻止CSS代码泄漏到组件外部，防止样式冲突。</li><li>让组件更具可移植性，实现开箱即用，轻松创建松耦合的应用程序</li><li>让组件更具有重用性，只需编写一次即可，可以在任何地方运行，不仅可以在同一应用程序中重用组件，而且可以在使用相同框架构建的其他应用程序中重用组件。</li><li>让样式具有动态功能，可以将复杂的逻辑应用于样式规则，如果要创建需要动态功能的复杂UI，它是理想的解决方案。</li></ul><p>CSS-IN-JS的缺点：</p><ul><li>为项目增加了复杂的复杂性</li><li>自动生成的选择器大大降低了代码的可读性</li></ul><h2 id="emotion库" tabindex="-1"><a class="header-anchor" href="#emotion库"><span>Emotion库</span></a></h2>',9),u={href:"https://gitee.com/mirrors/emotion?utm_source=alading&utm_campaign=repo#emotion",target:"_blank",rel:"noopener noreferrer"},k=n(`<h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h3><p>Emotion是一个旨在使用JavaScript编写CSS样式的库</p><p><code>npm install --save @emotion/react</code></p><h3 id="css属性支持" tabindex="-1"><a class="header-anchor" href="#css属性支持"><span>css属性支持</span></a></h3><ol><li>JSX Pragma</li></ol><p>通知babel,不再需要将jsx语法转换为React.createElement方法，而是需要转换为jsx方法。</p><table><thead><tr><th></th><th>Input</th><th>OutPut</th></tr></thead><tbody><tr><td>Before</td><td><code>&lt;img scr=&quot;avatar.png&quot; /&gt;</code></td><td><code>React.createElement(img, {src: &#39;avatar.png&#39;})</code></td></tr><tr><td>After</td><td><code>&lt;img src=&quot;avatar.pgn&quot; /&gt;</code></td><td><code>jsx(&#39;img&#39;, {src: &#39;avatar.png&#39;})</code></td></tr></tbody></table><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** <span class="token keyword">@jsx</span> jsx */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> jsx <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@emotion/react&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Babel Preset【推荐】</li></ol><ul><li>npm run eject</li><li>npm install @emotion/babel-preset-css-prop</li><li>在package.json文件中找到babel属性，加入</li></ul><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;react-app&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;@emotion/babel-preset-css-prop&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div css<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
      App Page
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="css方法" tabindex="-1"><a class="header-anchor" href="#css方法"><span>css方法</span></a></h3><ol><li>String Styles【推荐】</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> css <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@emotion/react&#39;</span>

<span class="token keyword">const</span> style <span class="token operator">=</span> css<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  width: 100px;
  height: 100px;
  background: red;
</span><span class="token template-punctuation string">\`</span></span>

<span class="token operator">&lt;</span>div css<span class="token operator">=</span><span class="token punctuation">{</span>style<span class="token punctuation">}</span><span class="token operator">&gt;</span>App pages<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Object Styles</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> css <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@emotion/react&#39;</span>

<span class="token keyword">const</span> style <span class="token operator">=</span> <span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">App</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div css<span class="token operator">=</span><span class="token punctuation">{</span>style<span class="token punctuation">}</span><span class="token operator">&gt;</span>App<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="css属性优先级" tabindex="-1"><a class="header-anchor" href="#css属性优先级"><span>css属性优先级</span></a></h3><p>props对象中的css属性优先级高于组件内部的css属性。在带哦用组件时可以覆盖组件默认样式。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> css <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@emotion/react&#39;</span>

<span class="token keyword">const</span> styleDemo <span class="token operator">=</span> css<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  width: 200px;
  height: 200px;
  background: skyblue;
</span><span class="token template-punctuation string">\`</span></span>

<span class="token keyword">const</span> styleApp <span class="token operator">=</span> css<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  background: red;
</span><span class="token template-punctuation string">\`</span></span>

<span class="token keyword">function</span> <span class="token function">Demo</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div css<span class="token operator">=</span><span class="token punctuation">{</span>style<span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span><span class="token operator">&gt;</span>Demo<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Css css<span class="token operator">=</span><span class="token punctuation">{</span>styleApp<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="styled-components样式化组件" tabindex="-1"><a class="header-anchor" href="#styled-components样式化组件"><span>styled Components样式化组件</span></a></h3><p>样式化组件就是用来构建用户界面的，是emotion库提供的另一种为元素添加样式的方式</p><ol><li>基本写法</li></ol><ul><li>String Styles</li><li>Object Styles</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">&#39;@emotion/styled&#39;</span>

<span class="token keyword">const</span> Button <span class="token operator">=</span> styled<span class="token punctuation">.</span>button<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  width: 100px;
  height: 30px;
  background: #fff;
</span><span class="token template-punctuation string">\`</span></span>

<span class="token keyword">const</span> Container <span class="token operator">=</span> styled<span class="token punctuation">.</span><span class="token function">div</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token string">&#39;1px solid #eee&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token string">&#39;0 auto&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">&#39;#eee&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Container<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Button<span class="token operator">&gt;</span>按钮<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span>

      <span class="token operator">&lt;</span><span class="token operator">/</span>Container<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>根据props属性覆盖样式</p></li><li><p>String Styles</p></li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 声明</span>
<span class="token keyword">const</span> Button <span class="token operator">=</span> styled<span class="token punctuation">.</span>button<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  width: 100px;
  height: 30px;
  background: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token parameter">props</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>bgColor <span class="token operator">||</span> <span class="token string">&#39;skyblue&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
</span><span class="token template-punctuation string">\`</span></span>

<span class="token comment">// 使用</span>
<span class="token operator">&lt;</span>Button bgColor<span class="token operator">=</span><span class="token string">&quot;blue&quot;</span><span class="token operator">&gt;</span>按钮<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Object Styles</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 声明1</span>
<span class="token keyword">const</span> Container <span class="token operator">=</span> styled<span class="token punctuation">.</span><span class="token function">div</span><span class="token punctuation">(</span><span class="token parameter">props</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> props<span class="token punctuation">.</span>w <span class="token operator">||</span> <span class="token number">1000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token string">&#39;1px solid #eee&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token string">&#39;0 auto&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">&#39;#eee&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// 声明二</span>
<span class="token keyword">const</span> ContainerDemo <span class="token operator">=</span> styled<span class="token punctuation">.</span><span class="token function">div</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">&#39;skyblue&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token parameter">props</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> props<span class="token punctuation">.</span>bgColor
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment">// 使用</span>
<span class="token operator">&lt;</span>Container w<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">300</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>Button bgColor<span class="token operator">=</span><span class="token string">&quot;blue&quot;</span><span class="token operator">&gt;</span>按钮<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Container<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="为任何组件添加样式" tabindex="-1"><a class="header-anchor" href="#为任何组件添加样式"><span>为任何组件添加样式</span></a></h3><ol><li>String Styles</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">Demo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>className<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>className<span class="token punctuation">}</span><span class="token operator">&gt;</span>Demo<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token keyword">const</span> Fancy <span class="token operator">=</span> <span class="token function">styled</span><span class="token punctuation">(</span>Demo<span class="token punctuation">)</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  color: red
</span><span class="token template-punctuation string">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Object Styles</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">Demo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>className<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>className<span class="token punctuation">}</span><span class="token operator">&gt;</span>Demo<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token keyword">const</span> Orange <span class="token operator">=</span> <span class="token function">styled</span><span class="token punctuation">(</span>Demo<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">&#39;orange&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;white&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通过父组件设置子组件样式" tabindex="-1"><a class="header-anchor" href="#通过父组件设置子组件样式"><span>通过父组件设置子组件样式</span></a></h3><ol><li>String Styles</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> Child <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  color: red;
</span><span class="token template-punctuation string">\`</span></span>

<span class="token keyword">const</span> Parent <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Child<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> {
    color: blue;
  }
</span><span class="token template-punctuation string">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Object Styles</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> Child <span class="token operator">=</span> styled<span class="token punctuation">.</span><span class="token function">div</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> Parent <span class="token operator">=</span> styled<span class="token punctuation">.</span><span class="token function">div</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token punctuation">[</span>Child<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;blue&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="嵌套选择器" tabindex="-1"><a class="header-anchor" href="#嵌套选择器"><span>嵌套选择器 &amp;</span></a></h3><p>&amp; 表示组件本身</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> Container <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  color: red;
  &amp; &gt; a {
    color: #333;
  }
</span><span class="token template-punctuation string">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="as属性" tabindex="-1"><a class="header-anchor" href="#as属性"><span>as属性</span></a></h3><p>要使用组件中的样式，但要更改呈现的元素，可以使用as属性</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> Button <span class="token operator">=</span> style<span class="token punctuation">.</span>button<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  color: red
</span><span class="token template-punctuation string">\`</span></span>

<span class="token comment">// 这个会被转换成 a 标签</span>
<span class="token operator">&lt;</span>Button <span class="token keyword">as</span><span class="token operator">=</span><span class="token string">&quot;a&quot;</span> href<span class="token operator">=</span><span class="token string">&quot;#&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="样式组合" tabindex="-1"><a class="header-anchor" href="#样式组合"><span>样式组合</span></a></h3><p>后调用的样式优先级高于先调用的样式</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> css <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@emotion/react&#39;</span>

<span class="token keyword">const</span> base <span class="token operator">=</span> css<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  color: blue;
  font-size: 12px;
</span><span class="token template-punctuation string">\`</span></span>

<span class="token keyword">const</span> danger <span class="token operator">=</span> css<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  color: red;
  font-size: 16px;
</span><span class="token template-punctuation string">\`</span></span>
<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button css<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>base<span class="token punctuation">,</span> danger<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>button<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局样式" tabindex="-1"><a class="header-anchor" href="#全局样式"><span>全局样式</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> css<span class="token punctuation">,</span> Global <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@emotion/react&#39;</span>
<span class="token keyword">import</span> Demo <span class="token keyword">from</span> <span class="token string">&#39;./Demo&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> css<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  body {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: red;
  }
</span><span class="token template-punctuation string">\`</span></span>

<span class="token comment">// Demo 和 a标签中也会应用全局样式</span>
<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Global styles<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;#&quot;</span><span class="token operator">&gt;</span>a标签<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Demo <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关键帧动画" tabindex="-1"><a class="header-anchor" href="#关键帧动画"><span>关键帧动画</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> css<span class="token punctuation">,</span> keyframes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@emotion/react&#39;</span>

<span class="token keyword">const</span> move <span class="token operator">=</span> keyframes<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  0% {
    background: skyblue;
    left: 0;
    top: 0
  }
  100% {
    background: red;
    left: 500px;
    top: 200px;
  }
</span><span class="token template-punctuation string">\`</span></span>

<span class="token keyword">const</span> box <span class="token operator">=</span> css<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  width: 50px;
  height: 50px;
  position: absolute;
  animation: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>move<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 2s ease infinite;
</span><span class="token template-punctuation string">\`</span></span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div css<span class="token operator">=</span><span class="token punctuation">{</span>box<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      Go
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建主题" tabindex="-1"><a class="header-anchor" href="#创建主题"><span>创建主题</span></a></h3><ol><li>下载主题模块</li></ol>`,54),v=n(`<p><code>npm install @emotion/react</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 2 引入 ThemeProvider 组件</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ThemeProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@emotion/react&#39;</span>

<span class="token comment">// 4. 添加主题内容</span>
<span class="token keyword">const</span> theme <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">colors</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">primary</span><span class="token operator">:</span> <span class="token string">&#39;hotpink&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 3. 将ThemeProvider放置在视图的最外层</span>
<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
	<span class="token operator">&lt;</span>ThemeProvider theme<span class="token operator">=</span><span class="token punctuation">{</span>theme<span class="token punctuation">}</span><span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>ThemeProvider<span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取主题内容一</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">getPrimaryColor</span> <span class="token operator">=</span> <span class="token parameter">props</span> <span class="token operator">=&gt;</span> css<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  color: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>props<span class="token punctuation">.</span>colors<span class="token punctuation">.</span>primary<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
</span><span class="token template-punctuation string">\`</span></span>

<span class="token operator">&lt;</span>div css<span class="token operator">=</span><span class="token punctuation">{</span>getPrimaryColor<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取主题内容二</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@emotion/react&#39;</span>

<span class="token keyword">function</span> <span class="token function">Demo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> theme <span class="token operator">=</span> <span class="token function">useTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function m(b,g){const a=t("ExternalLinkIcon");return p(),o("div",null,[d,s("p",null,[s("a",u,[l("传送门"),i(a)])]),k,c(" theme-emoting已经集成在了@emotion/react "),v])}const j=e(r,[["render",m],["__file","11-css-in-js.html.vue"]]),S=JSON.parse('{"path":"/frame/React/11-css-in-js.html","title":"React-- CSS-IN-JS","lang":"zh-CN","frontmatter":{"title":"React-- CSS-IN-JS","sidebar":true,"excerpt":"我们热爱这个世界时，才真正活在这个世界上。 -- 泰戈尔","tag":["react"],"category":["react"],"description":"CSS-IN-JS Why? CSS-IN-JS是WEB项目中将CSS代码捆绑在JavaScript代码中的解决方案。这种方案旨在解决CSS的局限性，例如缺乏动态功能，作用域和可移植性。 组件为单位，希望CSS代码只在组件类的范围生效 增加组件的独立性和可移植性 CSS本身缺乏动态功能，不能根据条件给某一个元素添加相应的样式 CSS-IN-JS介绍 C...","head":[["meta",{"property":"og:url","content":"https://arisemarcher.github.io/blog/blog/frame/React/11-css-in-js.html"}],["meta",{"property":"og:site_name","content":"御神"}],["meta",{"property":"og:title","content":"React-- CSS-IN-JS"}],["meta",{"property":"og:description","content":"CSS-IN-JS Why? CSS-IN-JS是WEB项目中将CSS代码捆绑在JavaScript代码中的解决方案。这种方案旨在解决CSS的局限性，例如缺乏动态功能，作用域和可移植性。 组件为单位，希望CSS代码只在组件类的范围生效 增加组件的独立性和可移植性 CSS本身缺乏动态功能，不能根据条件给某一个元素添加相应的样式 CSS-IN-JS介绍 C..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-11T09:18:15.000Z"}],["meta",{"property":"article:tag","content":"react"}],["meta",{"property":"article:modified_time","content":"2024-03-11T09:18:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"React-- CSS-IN-JS\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-11T09:18:15.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"CSS-IN-JS Why?","slug":"css-in-js-why","link":"#css-in-js-why","children":[]},{"level":2,"title":"CSS-IN-JS介绍","slug":"css-in-js介绍","link":"#css-in-js介绍","children":[]},{"level":2,"title":"Emotion库","slug":"emotion库","link":"#emotion库","children":[{"level":3,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":3,"title":"css属性支持","slug":"css属性支持","link":"#css属性支持","children":[]},{"level":3,"title":"css方法","slug":"css方法","link":"#css方法","children":[]},{"level":3,"title":"css属性优先级","slug":"css属性优先级","link":"#css属性优先级","children":[]},{"level":3,"title":"styled Components样式化组件","slug":"styled-components样式化组件","link":"#styled-components样式化组件","children":[]},{"level":3,"title":"为任何组件添加样式","slug":"为任何组件添加样式","link":"#为任何组件添加样式","children":[]},{"level":3,"title":"通过父组件设置子组件样式","slug":"通过父组件设置子组件样式","link":"#通过父组件设置子组件样式","children":[]},{"level":3,"title":"嵌套选择器 &","slug":"嵌套选择器","link":"#嵌套选择器","children":[]},{"level":3,"title":"as属性","slug":"as属性","link":"#as属性","children":[]},{"level":3,"title":"样式组合","slug":"样式组合","link":"#样式组合","children":[]},{"level":3,"title":"全局样式","slug":"全局样式","link":"#全局样式","children":[]},{"level":3,"title":"关键帧动画","slug":"关键帧动画","link":"#关键帧动画","children":[]},{"level":3,"title":"创建主题","slug":"创建主题","link":"#创建主题","children":[]}]}],"git":{"createdTime":1710141840000,"updatedTime":1710148695000,"contributors":[{"name":"arisemarcher","email":"2543061999@qq.com","commits":2}]},"readingTime":{"minutes":4.28,"words":1284},"filePathRelative":"frame/React/11-css-in-js.md","localizedDate":"2024年3月11日","autoDesc":true}');export{j as comp,S as data};
