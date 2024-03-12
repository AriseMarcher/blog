import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,a as t}from"./app-CU98DmvO.js";const e={},p=t(`<h3 id="受控组件与非受控组件" tabindex="-1"><a class="header-anchor" href="#受控组件与非受控组件"><span>受控组件与非受控组件</span></a></h3><h4 id="非受控组件" tabindex="-1"><a class="header-anchor" href="#非受控组件"><span>非受控组件</span></a></h4><p>在组件当中的数据都是由表单DOM元素本身管理的,表单中的数据在需要的时候再获取</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> userInput <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">function</span> <span class="token function">handleSubmit</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> username <span class="token operator">=</span> userInput<span class="token punctuation">.</span>current<span class="token punctuation">.</span>value
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>handleSubmit<span class="token punctuation">}</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> ref<span class="token operator">=</span><span class="token punctuation">{</span>userInput<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;submit&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="受控组件" tabindex="-1"><a class="header-anchor" href="#受控组件"><span>受控组件</span></a></h4><p>表单数据交由state对象管理，特点是可以实时得到表单数据，代码相对复杂</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span>
  <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">username</span><span class="token operator">:</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>form<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>input
        type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>username<span class="token punctuation">}</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleChange</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>username<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h4><p>受控组件和非受控组件都有其特点，应该根据需求场合进行选择，在大多数情况下，推荐使用受控组件处理表单数据。如果表单在数据交互方面比较简单，使用非受控表单，否则使用受控表单。</p><table><thead><tr><th>场景</th><th>非受控</th><th>受控</th></tr></thead><tbody><tr><td>表单提交时取值</td><td>Yes</td><td>Yes</td></tr><tr><td>表单提交时验证</td><td>Yes</td><td>Yes</td></tr><tr><td>表单项元素实时验证</td><td>No</td><td>Yes</td></tr><tr><td>根据条件禁用提交按钮</td><td>No</td><td>Yes</td></tr><tr><td>强制输入内容的格式</td><td>No</td><td>Yes</td></tr><tr><td>一个数据的多个输入</td><td>No</td><td>Yes</td></tr></tbody></table>`,10),o=[p];function c(r,l){return a(),s("div",null,o)}const d=n(e,[["render",c],["__file","10-component.html.vue"]]),k=JSON.parse('{"path":"/frame/React/10-component.html","title":"React-- component","lang":"zh-CN","frontmatter":{"title":"React-- component","sidebar":true,"excerpt":"富贵不能淫，贫贱不能移，威武不能屈，此之谓大丈夫 -- 孟子","tag":["react"],"category":["react"],"description":"受控组件与非受控组件 非受控组件 在组件当中的数据都是由表单DOM元素本身管理的,表单中的数据在需要的时候再获取 受控组件 表单数据交由state对象管理，特点是可以实时得到表单数据，代码相对复杂 总结 受控组件和非受控组件都有其特点，应该根据需求场合进行选择，在大多数情况下，推荐使用受控组件处理表单数据。如果表单在数据交互方面比较简单，使用非受控表单...","head":[["meta",{"property":"og:url","content":"https://arisemarcher.github.io/blog/blog/frame/React/10-component.html"}],["meta",{"property":"og:site_name","content":"御神"}],["meta",{"property":"og:title","content":"React-- component"}],["meta",{"property":"og:description","content":"受控组件与非受控组件 非受控组件 在组件当中的数据都是由表单DOM元素本身管理的,表单中的数据在需要的时候再获取 受控组件 表单数据交由state对象管理，特点是可以实时得到表单数据，代码相对复杂 总结 受控组件和非受控组件都有其特点，应该根据需求场合进行选择，在大多数情况下，推荐使用受控组件处理表单数据。如果表单在数据交互方面比较简单，使用非受控表单..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-11T09:18:15.000Z"}],["meta",{"property":"article:tag","content":"react"}],["meta",{"property":"article:modified_time","content":"2024-03-11T09:18:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"React-- component\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-11T09:18:15.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"受控组件与非受控组件","slug":"受控组件与非受控组件","link":"#受控组件与非受控组件","children":[]}],"git":{"createdTime":1710141840000,"updatedTime":1710148695000,"contributors":[{"name":"arisemarcher","email":"2543061999@qq.com","commits":2}]},"readingTime":{"minutes":1.07,"words":322},"filePathRelative":"frame/React/10-component.md","localizedDate":"2024年3月11日","autoDesc":true}');export{d as comp,k as data};
