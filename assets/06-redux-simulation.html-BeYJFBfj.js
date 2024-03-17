import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as t}from"./app-ahG6XCs9.js";const p={},e=t(`<h2 id="自实现-redux-功能" tabindex="-1"><a class="header-anchor" href="#自实现-redux-功能"><span>自实现 redux 功能</span></a></h2><h3 id="redux核心代码" tabindex="-1"><a class="header-anchor" href="#redux核心代码"><span>redux核心代码</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * createStore(reducer, preloadedState, enhancer)
 * <span class="token punctuation">{</span>
 *    getState, dispatch, subscribe
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">createStore</span> <span class="token punctuation">(</span><span class="token parameter">reducer<span class="token punctuation">,</span> preloadedState</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// store对象中存储的状态</span>
  <span class="token keyword">var</span> currentState <span class="token operator">=</span> preloadedState
  <span class="token comment">// 存放订阅者函数</span>
  <span class="token keyword">var</span> currentListeners <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token comment">// 获取状态</span>
  <span class="token keyword">function</span> <span class="token function">getState</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> currentState
  <span class="token punctuation">}</span>

  <span class="token comment">// 触发action</span>
  <span class="token keyword">function</span> <span class="token function">dispatch</span> <span class="token punctuation">(</span><span class="token parameter">action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    currentState <span class="token operator">=</span> <span class="token function">reducer</span><span class="token punctuation">(</span>currentState<span class="token punctuation">,</span> action<span class="token punctuation">)</span>
    <span class="token comment">// 循环数组 调用订阅者</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> currentListeners<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 获取订阅者</span>
      <span class="token keyword">var</span> listener <span class="token operator">=</span> currentListeners<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      <span class="token comment">// 调用订阅者</span>
      <span class="token function">listener</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 订阅状态</span>
  <span class="token keyword">function</span> <span class="token function">subscribe</span> <span class="token punctuation">(</span><span class="token parameter">listener</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    currentListeners<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    getState<span class="token punctuation">,</span>
    dispatch<span class="token punctuation">,</span>
    subscribe
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redux-参数约束" tabindex="-1"><a class="header-anchor" href="#redux-参数约束"><span>redux 参数约束</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * createStore(reducer, preloadedState, enhancer)
 * <span class="token punctuation">{</span>
 *    getState, dispatch, subscribe
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">createStore</span> <span class="token punctuation">(</span><span class="token parameter">reducer<span class="token punctuation">,</span> preloadedState</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 约束 reducer 参数类型</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> reducer <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;reducer必须是函数&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// store对象中存储的状态</span>
  <span class="token keyword">var</span> currentState <span class="token operator">=</span> preloadedState
  <span class="token comment">// 存放订阅者函数</span>
  <span class="token keyword">var</span> currentListeners <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token comment">// 获取状态</span>
  <span class="token keyword">function</span> <span class="token function">getState</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> currentState
  <span class="token punctuation">}</span>

  <span class="token comment">// 触发action</span>
  <span class="token keyword">function</span> <span class="token function">dispatch</span> <span class="token punctuation">(</span><span class="token parameter">action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 判断 action 是否是对象</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;action必须是对象&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 判断对象中 是否具有 type 属性</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> action<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;action对象中必须要有type属性&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    currentState <span class="token operator">=</span> <span class="token function">reducer</span><span class="token punctuation">(</span>currentState<span class="token punctuation">,</span> action<span class="token punctuation">)</span>
    <span class="token comment">// 循环数组 调用订阅者</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> currentListeners<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 获取订阅者</span>
      <span class="token keyword">var</span> listener <span class="token operator">=</span> currentListeners<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      <span class="token comment">// 调用订阅者</span>
      <span class="token function">listener</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 订阅状态</span>
  <span class="token keyword">function</span> <span class="token function">subscribe</span> <span class="token punctuation">(</span><span class="token parameter">listener</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    currentListeners<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    getState<span class="token punctuation">,</span>
    dispatch<span class="token punctuation">,</span>
    subscribe
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 判断 obj 参数是否是对象</span>
<span class="token keyword">function</span> <span class="token function">isPlainObject</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 排除基本数据类型和null</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> obj <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token comment">// 区分数组和对象</span>
  <span class="token keyword">var</span> proto <span class="token operator">=</span> obj
  <span class="token keyword">while</span> <span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>proto<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    proto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>proto<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">===</span> proto
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redux-createstore-enhancer" tabindex="-1"><a class="header-anchor" href="#redux-createstore-enhancer"><span>redux createStore enhancer</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * createStore(reducer, preloadedState, enhancer)
 * <span class="token punctuation">{</span>
 *    getState, dispatch, subscribe
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">createStore</span> <span class="token punctuation">(</span><span class="token parameter">reducer<span class="token punctuation">,</span> preloadedState<span class="token punctuation">,</span> enhancer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 约束 reducer 参数类型</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> reducer <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;reducer必须是函数&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 判断 enhancer 是否传递</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> enhancer <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 判断 enhancer 是否是一个函数</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> enhancer <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;enhancer必须是一个函数&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">enhancer</span><span class="token punctuation">(</span>createStore<span class="token punctuation">)</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> preloadedState<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// store对象中存储的状态</span>
  <span class="token keyword">var</span> currentState <span class="token operator">=</span> preloadedState
  <span class="token comment">// 存放订阅者函数</span>
  <span class="token keyword">var</span> currentListeners <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token comment">// 获取状态</span>
  <span class="token keyword">function</span> <span class="token function">getState</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> currentState
  <span class="token punctuation">}</span>

  <span class="token comment">// 触发action</span>
  <span class="token keyword">function</span> <span class="token function">dispatch</span> <span class="token punctuation">(</span><span class="token parameter">action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 判断 action 是否是对象</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;action必须是对象&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 判断对象中 是否具有 type 属性</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> action<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;action对象中必须要有type属性&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    currentState <span class="token operator">=</span> <span class="token function">reducer</span><span class="token punctuation">(</span>currentState<span class="token punctuation">,</span> action<span class="token punctuation">)</span>
    <span class="token comment">// 循环数组 调用订阅者</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> currentListeners<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 获取订阅者</span>
      <span class="token keyword">var</span> listener <span class="token operator">=</span> currentListeners<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      <span class="token comment">// 调用订阅者</span>
      <span class="token function">listener</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 订阅状态</span>
  <span class="token keyword">function</span> <span class="token function">subscribe</span> <span class="token punctuation">(</span><span class="token parameter">listener</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    currentListeners<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    getState<span class="token punctuation">,</span>
    dispatch<span class="token punctuation">,</span>
    subscribe
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 判断 obj 参数是否是对象</span>
<span class="token keyword">function</span> <span class="token function">isPlainObject</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 排除基本数据类型和null</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> obj <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token comment">// 区分数组和对象</span>
  <span class="token keyword">var</span> proto <span class="token operator">=</span> obj
  <span class="token keyword">while</span> <span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>proto<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    proto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>proto<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">===</span> proto
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>increment<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>decrement<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>-1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myRedux.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">function</span> <span class="token function">enhancer</span> <span class="token punctuation">(</span><span class="token parameter">createStore</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">reducer<span class="token punctuation">,</span> preloadState</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> preloadState<span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span>
      <span class="token comment">// 模拟 redux-thunk</span>
      <span class="token keyword">var</span> dispatch <span class="token operator">=</span> store<span class="token punctuation">.</span>dispatch<span class="token punctuation">;</span>
      <span class="token keyword">function</span> <span class="token function">_dispatch</span> <span class="token punctuation">(</span><span class="token parameter">action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> action <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">action</span><span class="token punctuation">(</span>dispatch<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token function">dispatch</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>store<span class="token punctuation">,</span>
        <span class="token literal-property property">dispatch</span><span class="token operator">:</span> _dispatch
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">function</span> <span class="token function">reducer</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token string">&#39;increment&#39;</span><span class="token operator">:</span>
        <span class="token keyword">return</span> state <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token string">&#39;decrement&#39;</span><span class="token operator">:</span>
        <span class="token keyword">return</span> state <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token keyword">return</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 创建store</span>
  <span class="token keyword">var</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> enhancer<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span>

  store<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// store.dispatch({ type: &#39;increment&#39; })</span>
    store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;increment&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;decrement&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;decrement&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redux-applymiddleware" tabindex="-1"><a class="header-anchor" href="#redux-applymiddleware"><span>redux applyMiddleware</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;!-- project --&gt;
|- middlewares
  |- logger.js
  |- thunk.js
|- index.html
|- myRedux.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// logger.js</span>
<span class="token comment">// store getState dispatch这两个方法</span>
<span class="token keyword">function</span> <span class="token function">logger</span> <span class="token punctuation">(</span><span class="token parameter">store</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// next 下一个中间件函数</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这才是中间件函数 外面两个函数是用来接受参数的</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;logger&#39;</span><span class="token punctuation">)</span>
      <span class="token function">next</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// thunk.js</span>
<span class="token keyword">function</span> <span class="token function">thunk</span> <span class="token punctuation">(</span><span class="token parameter">store</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 最后一个中间件的 next 就是 dispatch这个方法</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;thunk&#39;</span><span class="token punctuation">)</span>
      <span class="token function">next</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// myRedux.js</span>
<span class="token doc-comment comment">/**
 * createStore(reducer, preloadedState, enhancer)
 * <span class="token punctuation">{</span>
 *    getState, dispatch, subscribe
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">createStore</span> <span class="token punctuation">(</span><span class="token parameter">reducer<span class="token punctuation">,</span> preloadedState<span class="token punctuation">,</span> enhancer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 约束 reducer 参数类型</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> reducer <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;reducer必须是函数&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 判断 enhancer 是否传递</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> enhancer <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 判断 enhancer 是否是一个函数</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> enhancer <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;enhancer必须是一个函数&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">enhancer</span><span class="token punctuation">(</span>createStore<span class="token punctuation">)</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> preloadedState<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// store对象中存储的状态</span>
  <span class="token keyword">var</span> currentState <span class="token operator">=</span> preloadedState
  <span class="token comment">// 存放订阅者函数</span>
  <span class="token keyword">var</span> currentListeners <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token comment">// 获取状态</span>
  <span class="token keyword">function</span> <span class="token function">getState</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> currentState
  <span class="token punctuation">}</span>

  <span class="token comment">// 触发action</span>
  <span class="token keyword">function</span> <span class="token function">dispatch</span> <span class="token punctuation">(</span><span class="token parameter">action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 判断 action 是否是对象</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;action必须是对象&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 判断对象中 是否具有 type 属性</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> action<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;action对象中必须要有type属性&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    currentState <span class="token operator">=</span> <span class="token function">reducer</span><span class="token punctuation">(</span>currentState<span class="token punctuation">,</span> action<span class="token punctuation">)</span>
    <span class="token comment">// 循环数组 调用订阅者</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> currentListeners<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 获取订阅者</span>
      <span class="token keyword">var</span> listener <span class="token operator">=</span> currentListeners<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      <span class="token comment">// 调用订阅者</span>
      <span class="token function">listener</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 订阅状态</span>
  <span class="token keyword">function</span> <span class="token function">subscribe</span> <span class="token punctuation">(</span><span class="token parameter">listener</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    currentListeners<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    getState<span class="token punctuation">,</span>
    dispatch<span class="token punctuation">,</span>
    subscribe
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 判断 obj 参数是否是对象</span>
<span class="token comment">// 判断对象的当前原型对象是否和顶层原型对象相同</span>
<span class="token keyword">function</span> <span class="token function">isPlainObject</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 排除基本数据类型和null</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> obj <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token comment">// 区分数组和对象</span>
  <span class="token keyword">var</span> proto <span class="token operator">=</span> obj
  <span class="token keyword">while</span> <span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>proto<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    proto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>proto<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">===</span> proto
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 中间件其实是对dispatch进行增强，applyMiddleware,</span>
<span class="token comment">// 让多个中间件函数进行组合，触发action适合让多个中间件按照顺序进行执行</span>

<span class="token keyword">function</span> <span class="token function">applyMiddleware</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>middlewares</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">createStore</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">reducer<span class="token punctuation">,</span> preloadedState</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 创建 store</span>
      <span class="token keyword">var</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> preloadedState<span class="token punctuation">)</span>
      <span class="token comment">// 阉割版的 store</span>
      <span class="token keyword">var</span> middlewareAPI <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">getState</span><span class="token operator">:</span> store<span class="token punctuation">.</span>getState<span class="token punctuation">,</span>
        <span class="token literal-property property">dispatch</span><span class="token operator">:</span> store<span class="token punctuation">.</span>dispatch<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// 调用中间件的第一层函数 传递阉割版的 store 对象</span>
      <span class="token keyword">var</span> chain <span class="token operator">=</span> middlewares<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">middleware</span> <span class="token operator">=&gt;</span> <span class="token function">middleware</span><span class="token punctuation">(</span>middlewareAPI<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token keyword">var</span> dispatch <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span><span class="token operator">...</span>chain<span class="token punctuation">)</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>dispatch<span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>store<span class="token punctuation">,</span>
        dispatch
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">compose</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> funcs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arguments<span class="token punctuation">]</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 由于最后一个dispatch 是去触发真正的 reducer的</span>
    <span class="token comment">// dispatch赋值改变</span>
    <span class="token doc-comment comment">/**
     * 1. 是最开始 createStore中的 dispatch
     * 2. function (next) <span class="token punctuation">{</span> // 这个 next 是 dispatch
          return function (action) <span class="token punctuation">{</span>
            console.log(&#39;thunk&#39;)
            next(action)
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    * 3 function (next) <span class="token punctuation">{</span> // 这个 next 是 thunk
        // 这才是中间件函数 外面两个函数是用来接受参数的
        return function (action) <span class="token punctuation">{</span>
          console.log(&#39;logger&#39;)
          next(action)
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    * 最后一步 返回 Logger (一开始的中间件)
      然后在 applyMiddleware 中增强了 dispatch（重新改变了）方法
      最后的执行操作就是
     */</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> funcs<span class="token punctuation">.</span>length <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      dispatch <span class="token operator">=</span> funcs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">(</span>dispatch<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dispatch
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>increment<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>decrement<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>-1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myRedux.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>middlewares/logger.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>middlewares/thunk.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">function</span> <span class="token function">enhancer</span> <span class="token punctuation">(</span><span class="token parameter">createStore</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">reducer<span class="token punctuation">,</span> preloadState</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> preloadState<span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span>
      <span class="token comment">// 模拟 redux-thunk</span>
      <span class="token keyword">var</span> dispatch <span class="token operator">=</span> store<span class="token punctuation">.</span>dispatch<span class="token punctuation">;</span>
      <span class="token keyword">function</span> <span class="token function">_dispatch</span> <span class="token punctuation">(</span><span class="token parameter">action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> action <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">action</span><span class="token punctuation">(</span>dispatch<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token function">dispatch</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>store<span class="token punctuation">,</span>
        <span class="token literal-property property">dispatch</span><span class="token operator">:</span> _dispatch
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">function</span> <span class="token function">reducer</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token string">&#39;increment&#39;</span><span class="token operator">:</span>
        <span class="token keyword">return</span> state <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token string">&#39;decrement&#39;</span><span class="token operator">:</span>
        <span class="token keyword">return</span> state <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token keyword">return</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 创建store</span>
  <span class="token keyword">var</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">applyMiddleware</span><span class="token punctuation">(</span>logger<span class="token punctuation">,</span> thunk<span class="token punctuation">)</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span>

  store<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// logger -&gt; thunk -&gt; reducer</span>
    store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;increment&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;decrement&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;decrement&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redux-bindactioncreators" tabindex="-1"><a class="header-anchor" href="#redux-bindactioncreators"><span>redux bindActionCreators</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">bindActionCreators</span> <span class="token punctuation">(</span><span class="token parameter">actionCreators<span class="token punctuation">,</span> dispatch</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> boundActionCreators <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> actionCreators<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      boundActionCreators<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">dispatch</span><span class="token punctuation">(</span>actionCreators<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> boundActionCreators
<span class="token punctuation">}</span>

<span class="token comment">// 使用</span>
<span class="token comment">// bindActionCreators 是将 actionCreators 转换成可以触发action的函数</span>
<span class="token keyword">var</span> actions <span class="token operator">=</span> <span class="token function">bindActionCreators</span><span class="token punctuation">(</span><span class="token punctuation">{</span>increment<span class="token punctuation">,</span> decrement<span class="token punctuation">}</span><span class="token punctuation">,</span> store<span class="token punctuation">.</span>dispatch<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>actions<span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;increment&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">decrement</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;decrement&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// logger -&gt; thunk -&gt; reducer</span>
  <span class="token comment">// 这是之前的</span>
  <span class="token comment">// store.dispatch({ type: &#39;increment&#39; })</span>
  <span class="token comment">// 这是修改之后的</span>
  actions<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;decrement&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// store.dispatch({ type: &#39;decrement&#39; })</span>
  actions<span class="token punctuation">.</span><span class="token function">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redux-combinereducers" tabindex="-1"><a class="header-anchor" href="#redux-combinereducers"><span>redux combineReducers</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">combineReducers</span><span class="token punctuation">(</span><span class="token parameter">reducers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1. 检查 reducer 类型 它必须是函数</span>
  <span class="token keyword">var</span> reducerKeys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>reducers<span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> reducerKeys<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> key <span class="token operator">=</span> reducerKeys<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> reducers<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;reducer 必须是函数&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 2. 调用一个个小的reducer 将每一个小的reducer中返回的状态存储在一个新的大的对象中</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> nextState <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> reducerKeys<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> key <span class="token operator">=</span> reducerKeys<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      <span class="token keyword">var</span> reducer <span class="token operator">=</span> reducers<span class="token punctuation">[</span>key<span class="token punctuation">]</span>

      <span class="token comment">// 获取 reducer 的状态</span>
      <span class="token keyword">var</span> previousStateForKey <span class="token operator">=</span> state<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
      nextState<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">reducer</span><span class="token punctuation">(</span>previousStateForKey<span class="token punctuation">,</span> action<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> nextState
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 简单使用示例</span>
<span class="token keyword">var</span> rootReducer <span class="token operator">=</span> <span class="token function">combineReducers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">counter</span><span class="token operator">:</span> counterReducer
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 创建store</span>
<span class="token keyword">var</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>rootReducer<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token function">applyMiddleware</span><span class="token punctuation">(</span>logger<span class="token punctuation">,</span> thunk<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),c=[e];function o(i,l){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","06-redux-simulation.html.vue"]]),d=JSON.parse('{"path":"/frame/React/06-redux-simulation.html","title":"React-- Redux simulation","lang":"zh-CN","frontmatter":{"title":"React-- Redux simulation","sidebar":true,"excerpt":"自信是向成功迈出的第一步。-- 爱因斯坦","tag":["react"],"category":["react"],"description":"自实现 redux 功能 redux核心代码 redux 参数约束 redux createStore enhancer redux applyMiddleware redux bindActionCreators redux combineReducers","head":[["meta",{"property":"og:url","content":"https://arisemarcher.github.io/blog/blog/frame/React/06-redux-simulation.html"}],["meta",{"property":"og:site_name","content":"御神"}],["meta",{"property":"og:title","content":"React-- Redux simulation"}],["meta",{"property":"og:description","content":"自实现 redux 功能 redux核心代码 redux 参数约束 redux createStore enhancer redux applyMiddleware redux bindActionCreators redux combineReducers"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-11T09:18:15.000Z"}],["meta",{"property":"article:tag","content":"react"}],["meta",{"property":"article:modified_time","content":"2024-03-11T09:18:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"React-- Redux simulation\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-11T09:18:15.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"自实现 redux 功能","slug":"自实现-redux-功能","link":"#自实现-redux-功能","children":[{"level":3,"title":"redux核心代码","slug":"redux核心代码","link":"#redux核心代码","children":[]},{"level":3,"title":"redux 参数约束","slug":"redux-参数约束","link":"#redux-参数约束","children":[]},{"level":3,"title":"redux createStore enhancer","slug":"redux-createstore-enhancer","link":"#redux-createstore-enhancer","children":[]},{"level":3,"title":"redux applyMiddleware","slug":"redux-applymiddleware","link":"#redux-applymiddleware","children":[]},{"level":3,"title":"redux bindActionCreators","slug":"redux-bindactioncreators","link":"#redux-bindactioncreators","children":[]},{"level":3,"title":"redux combineReducers","slug":"redux-combinereducers","link":"#redux-combinereducers","children":[]}]}],"git":{"createdTime":1710141840000,"updatedTime":1710148695000,"contributors":[{"name":"arisemarcher","email":"2543061999@qq.com","commits":2}]},"readingTime":{"minutes":6.31,"words":1893},"filePathRelative":"frame/React/06-redux-simulation.md","localizedDate":"2024年3月11日","autoDesc":true}');export{k as comp,d as data};
