import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as t}from"./app-DdMks_IY.js";const e={},p=t(`<p>当开发代码修改预期在打包后的代码中实现浏览器刷新，参考以下代码。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>这是独立的，与之前的gulp文档没有任何联系</p></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> browserSync <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;browser-sync&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> bs <span class="token operator">=</span> browserSync<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">serveStart</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  bs<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">files</span><span class="token operator">:</span> <span class="token string">&#39;./dist/*&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">baseDir</span><span class="token operator">:</span> <span class="token string">&#39;./dist&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function r(c,l){return s(),a("div",null,o)}const d=n(e,[["render",r],["__file","10-gulp-browser-sync.html.vue"]]),m=JSON.parse('{"path":"/pack/Gulp/10-gulp-browser-sync.html","title":"Gulp配置篇--gulp-watch","lang":"zh-CN","frontmatter":{"title":"Gulp配置篇--gulp-watch","excerpt":"学而不思则罔，思而不学则殆。-- 孔子","sidebar":true,"tag":["Gulp"],"category":["Gulp"],"description":"当开发代码修改预期在打包后的代码中实现浏览器刷新，参考以下代码。 提示 这是独立的，与之前的gulp文档没有任何联系","head":[["meta",{"property":"og:url","content":"https://arisemarcher.github.io/blog/blog/pack/Gulp/10-gulp-browser-sync.html"}],["meta",{"property":"og:site_name","content":"御神"}],["meta",{"property":"og:title","content":"Gulp配置篇--gulp-watch"}],["meta",{"property":"og:description","content":"当开发代码修改预期在打包后的代码中实现浏览器刷新，参考以下代码。 提示 这是独立的，与之前的gulp文档没有任何联系"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-17T12:45:22.000Z"}],["meta",{"property":"article:tag","content":"Gulp"}],["meta",{"property":"article:modified_time","content":"2024-03-17T12:45:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Gulp配置篇--gulp-watch\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-17T12:45:22.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1710679522000,"updatedTime":1710679522000,"contributors":[{"name":"arisemarcher","email":"2543061999@qq.com","commits":1}]},"readingTime":{"minutes":0.33,"words":98},"filePathRelative":"pack/Gulp/10-gulp-browser-sync.md","localizedDate":"2024年3月17日","autoDesc":true}');export{d as comp,m as data};
