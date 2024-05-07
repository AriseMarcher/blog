import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as t,c as p,b as n,d as o,e as c,a as i}from"./app-CfhgvICa.js";const l="/blog/assets/images/react/sourceCode/1.png",r="/blog/assets/images/react/sourceCode/2.png",u="/blog/assets/images/react/sourceCode/6.png",d="/blog/assets/images/react/sourceCode/3.png",k="/blog/assets/images/react/sourceCode/4.png",v="/blog/assets/images/react/sourceCode/7.png",m="/blog/assets/images/react/sourceCode/5.png",b={},y=n("h2",{id:"_1-配置-react-源码本地调试环境",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-配置-react-源码本地调试环境"},[n("span",null,"1. 配置 React 源码本地调试环境")])],-1),f={href:"https://github.com/AriseMarcher/advanced-to-react/tree/master/code/react-test",target:"_blank",rel:"noopener noreferrer"},g=i(`<ol><li>使用 create-react-app 脚手架创建项目</li></ol><p><code>npx create-react-app react-test</code></p><p>安装指定版本的react 方便调试</p><p><code>npm install react@16.13.1 react-dom@16.13.1</code></p><ol start="2"><li>弹射 create-react-app 脚手架内部配置</li></ol><p>如果有git仓库的话需要先提交代码</p><p><code>cd react-test</code></p><p><code>npm run eject</code></p><ol start="3"><li>克隆 react 官方源码 (在项目的根目录下进行克隆 react-test下)</li></ol><p><code>git clone --branch v16.13.1 --depth=1 https://github.com/facebook/react.git src/react</code></p><ol start="4"><li>链接本地源码</li></ol><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code>  <span class="token comment">// 文件位置: react-test/config/webpack.config.js</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;react-native&quot;</span><span class="token operator">:</span> <span class="token string">&quot;react-native-web&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;react&quot;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;../src/react/packages/react&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;react-dom&quot;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;../src/react/packages/react-dom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;shared&quot;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;../src/react/packages/shared&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;react-reconciler&quot;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;../src/react/packages/react-reconciler&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;legacy-events&quot;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;../src/react/packages/legacy-events&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>修改环境变量</li></ol><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code>  <span class="token comment">// 文件位置: react-test/config/env.js</span>
  <span class="token keyword">const</span> stringified <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;process.env&quot;</span><span class="token operator">:</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>raw<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">env<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      env<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>raw<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> env
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">__DEV__</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">SharedArrayBuffer</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">spyOnDev</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">spyOnDevAndProd</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">spyOnProd</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">__PROFILE__</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">__UMD__</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">__EXPERIMENTAL__</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">__VARIANT__</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">gate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">trustedTypes</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li><p>告诉 babel 在转换代码时忽略类型检查</p><p><code>npm install @babel/plugin-transform-flow-strip-types -D</code></p></li></ol><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code>  <span class="token comment">// 文件位置: react-test/config/webpack.config.js [babel-loader]</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;@babel/plugin-transform-flow-strip-types&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>导出 HostConfig</li></ol><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code>  <span class="token comment">// 文件位置: /react/packages/react-reconciler/src/ReactFiberHostConfig.js</span>
  <span class="token operator">+</span> <span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&#39;./forks/ReactFiberHostConfig.dom&#39;</span><span class="token punctuation">;</span>
  <span class="token operator">-</span> <span class="token function">invariant</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&#39;This module must be shimmed by a specific renderer.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8"><li>修改 ReactSharedInternals.js 文件</li></ol><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code>  <span class="token comment">// 文件位置: /react/packages/shared/ReactSharedInternals.js</span>
  <span class="token operator">-</span> <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
  <span class="token operator">-</span> <span class="token keyword">const</span> ReactSharedInternals <span class="token operator">=</span> React<span class="token punctuation">.</span>__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED<span class="token punctuation">;</span>
  <span class="token operator">+</span> <span class="token keyword">import</span> ReactSharedInternals <span class="token keyword">from</span> <span class="token string">&#39;../react/src/ReactSharedInternals&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="9"><li>关闭 eslint 扩展</li></ol><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code>  <span class="token comment">// 文件位置: react/.eslingrc.js [module.exports]</span>
  <span class="token comment">// 删除 extends</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;fbjs&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;prettier&#39;</span>
  <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="10"><li>禁止 invariant 报错</li></ol><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code>  <span class="token comment">// 文件位置: /react/packages/shared/invariant.js</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">invariant</span><span class="token punctuation">(</span><span class="token parameter">condition<span class="token punctuation">,</span> format<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">,</span> e<span class="token punctuation">,</span> f</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>
      <span class="token string">&#39;Internal React error: invariant() is meant to be replaced at compile &#39;</span> <span class="token operator">+</span>
        <span class="token string">&#39;time. There is no runtime version.&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="11"><li><p>eslint 配置</p><p>在 react 源码文件夹中新建 .eslintrc.json 并添加如下配置</p></li></ol><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code>  <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;react-app&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;globals&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;SharedArrayBuffer&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;spyOnDev&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;spyOnDevAndProd&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;spyOnProd&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;__PROFILE__&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;__UMD__&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;__EXPERIMENTAL__&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;__VARIANT__&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;gate&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;trustedTypes&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="12"><li>修改 react react-dom 引入方式</li></ol><p>在index.js和app.js中修改引入方式</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code>  <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span>
  <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&quot;react-dom&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="13"><li>解决 vsCode 中 flow 报错</li></ol><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code>  <span class="token string-property property">&quot;javascript.validate.enable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="14"><li><p>可选项配置</p><p>如果你的 vscode 编辑器安装了 prettier 插件并且在保存 react 源码文件时右下角出现如下错误，按照如下步骤解决</p><figure><img src="`+l+'" alt="示例" width="500" height="300" tabindex="0" loading="lazy"><figcaption>示例</figcaption></figure><ol><li><p>全局安装 prettier</p><p><code>npm i prettier -g</code></p></li><li><p>配置 prettier path</p><p>Settings &gt; Extensions &gt; Prettier &gt; Prettier path</p></li></ol><figure><img src="'+r+`" alt="示例" width="500" height="300" tabindex="0" loading="lazy"><figcaption>示例</figcaption></figure></li><li><p><code>\\_\\_DEV\\_\\_</code> 报错</p><p>删除 node_modules 文件夹，执行 npm install</p></li></ol><h2 id="_2-创建-react-元素" tabindex="-1"><a class="header-anchor" href="#_2-创建-react-元素"><span>2. 创建 React 元素</span></a></h2><p>JSX 被 Babel 编译为 React.createElement 方法的调用，createElement 方法在调用后返回的就是 ReactElement，就是 virtualDOM。</p><h3 id="_2-1-createelement" tabindex="-1"><a class="header-anchor" href="#_2-1-createelement"><span>2.1 createElement</span></a></h3><p><code>文件位置：packages/react/src/ReactElement.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">/**
 * 创建 React Element
 * type      元素类型
 * config    配置属性
 * children  子元素
 * 1. 分离 props 属性和特殊属性
 * 2. 将子元素挂载到 props.children 中
 * 3. 为 props 属性赋默认值 (defaultProps)
 * 4. 创建并返回 ReactElement
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> config<span class="token punctuation">,</span> children</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * propName -&gt; 属性名称
   * 用于后面的 for 循环
   */</span>
  <span class="token keyword">let</span> propName<span class="token punctuation">;</span>

  <span class="token comment">/**
   * 存储 React Element 中的普通元素属性 即不包含 key ref self source
   */</span>
  <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">/**
   * 待提取属性
   * React 内部为了实现某些功能而存在的属性
   */</span>
  <span class="token keyword">let</span> key <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> ref <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> self <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> source <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// 如果 config 不为 null</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>config <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果 config 对象中有合法的 ref 属性</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasValidRef</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 将 config.ref 属性提取到 ref 变量中</span>
      ref <span class="token operator">=</span> config<span class="token punctuation">.</span>ref<span class="token punctuation">;</span>
      <span class="token comment">// 在开发环境中</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果 ref 属性的值被设置成了字符串形式就报一个提示</span>
        <span class="token comment">// 说明此用法在将来的版本中会被删除</span>
        <span class="token function">warnIfStringRefCannotBeAutoConverted</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果在 config 对象中拥有合法的 key 属性</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasValidKey</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 将 config.key 属性中的值提取到 key 变量中</span>
      key <span class="token operator">=</span> <span class="token string">&#39;&#39;</span> <span class="token operator">+</span> config<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    self <span class="token operator">=</span> config<span class="token punctuation">.</span>__self <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> config<span class="token punctuation">.</span>__self<span class="token punctuation">;</span>
    source <span class="token operator">=</span> config<span class="token punctuation">.</span>__source <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> config<span class="token punctuation">.</span>__source<span class="token punctuation">;</span>
    <span class="token comment">// 遍历 config 对象</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>propName <span class="token keyword">in</span> config<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果当前遍历到的属性是对象自身属性</span>
      <span class="token comment">// 并且在 RESERVED_PROPS 对象中不存在该属性</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        <span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> propName<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
        <span class="token operator">!</span><span class="token constant">RESERVED_PROPS</span><span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>propName<span class="token punctuation">)</span>
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 将满足条件的属性添加到 props 对象中 (普通属性)</span>
        props<span class="token punctuation">[</span>propName<span class="token punctuation">]</span> <span class="token operator">=</span> config<span class="token punctuation">[</span>propName<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * 将第三个及之后的参数挂载到 props.children 属性中
   * 如果子元素是多个 props.children 是数组
   * 如果子元素是一个 props.children 是对象
   */</span>

  <span class="token comment">// 由于从第三个参数开始及以后都表示子元素</span>
  <span class="token comment">// 所以减去前两个参数的结果就是子元素的数量</span>
  <span class="token keyword">const</span> childrenLength <span class="token operator">=</span> arguments<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token comment">// 如果子元素的数量是 1</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>childrenLength <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 直接将子元素挂载到到 props.children 属性上</span>
    <span class="token comment">// 此时 children 是对象类型</span>
    props<span class="token punctuation">.</span>children <span class="token operator">=</span> children<span class="token punctuation">;</span>
    <span class="token comment">// 如果子元素的数量大于 1</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>childrenLength <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建数组, 数组中元素的数量等于子元素的数量</span>
    <span class="token keyword">const</span> childArray <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>childrenLength<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 开启循环 循环次匹配子元素的数量</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> childrenLength<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 将子元素添加到 childArray 数组中</span>
      <span class="token comment">// i + 2 的原因是实参集合的前两个参数不是子元素</span>
      childArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arguments<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果是开发环境</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果 Object 对象中存在 freeze 方法</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>Object<span class="token punctuation">.</span>freeze<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 调用 freeze 方法 冻结 childArray 数组</span>
        <span class="token comment">// 防止 React 核心对象被修改 冻结对象提高性能</span>
        Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span>childArray<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 将子元素数组挂载到 props.children 属性中</span>
    props<span class="token punctuation">.</span>children <span class="token operator">=</span> childArray<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * 如果当前处理是组件
   * 看组件身上是否有 defaultProps 属性
   * 这个属性中存储的是 props 对象中属性的默认值
   * 遍历 defaultProps 对象 查看对应的 props 属性的值是否为 undefined
   * 如果为undefined 就将默认值赋值给对应的 props 属性值
   */</span>

  <span class="token comment">// 将 type 属性值视为函数 查看其中是否具有 defaultProps 属性</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">&amp;&amp;</span> type<span class="token punctuation">.</span>defaultProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将 type 函数下的 defaultProps 属性赋值给 defaultProps 变量</span>
    <span class="token keyword">const</span> defaultProps <span class="token operator">=</span> type<span class="token punctuation">.</span>defaultProps<span class="token punctuation">;</span>
    <span class="token comment">// 遍历 defaultProps 对象中的属性 将属性名称赋值给 propName 变量</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>propName <span class="token keyword">in</span> defaultProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果 props 对象中的该属性的值为 undefined</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">[</span>propName<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 将 defaultProps 对象中的对应属性的值赋值给 props 对象中的对应属性的值</span>
        props<span class="token punctuation">[</span>propName<span class="token punctuation">]</span> <span class="token operator">=</span> defaultProps<span class="token punctuation">[</span>propName<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * 在开发环境中 如果元素的 key 属性 或者 ref 属性存在
   * 监测开发者是否在组件内部通过 props 对象获取了 key 属性或者 ref 属性
   * 如果获取了 就报错
   */</span>

  <span class="token comment">// 如果处于开发环境</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 元素具有 key 属性或者 ref 属性</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">||</span> ref<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 看一下 type 属性中存储的是否是函数 如果是函数就表示当前元素是组件</span>
      <span class="token comment">// 如果元素不是组件 就直接返回元素类型字符串</span>
      <span class="token comment">// displayName 用于在报错过程中显示是哪一个组件报错了</span>
      <span class="token comment">// 如果开发者显式定义了 displayName 属性 就显示开发者定义的</span>
      <span class="token comment">// 否者就显示组件名称 如果组件也没有名称 就显示 &#39;Unknown&#39;</span>
      <span class="token keyword">const</span> displayName <span class="token operator">=</span>
        <span class="token keyword">typeof</span> type <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span>
          <span class="token operator">?</span> type<span class="token punctuation">.</span>displayName <span class="token operator">||</span> type<span class="token punctuation">.</span>name <span class="token operator">||</span> <span class="token string">&#39;Unknown&#39;</span>
          <span class="token operator">:</span> type<span class="token punctuation">;</span>
      <span class="token comment">// 如果 key 属性存在</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 为 props 对象添加key 属性</span>
        <span class="token comment">// 并指定当通过 props 对象获取 key 属性时报错</span>
        <span class="token function">defineKeyPropWarningGetter</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> displayName<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 如果 ref 属性存在</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>ref<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 为 props 对象添加 ref 属性</span>
        <span class="token comment">// 并指定当通过 props 对象获取 ref 属性时报错</span>
        <span class="token function">defineRefPropWarningGetter</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> displayName<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 返回 ReactElement</span>
  <span class="token keyword">return</span> <span class="token function">ReactElement</span><span class="token punctuation">(</span>
    type<span class="token punctuation">,</span>
    key<span class="token punctuation">,</span>
    ref<span class="token punctuation">,</span>
    self<span class="token punctuation">,</span>
    source<span class="token punctuation">,</span>
    <span class="token comment">// 在 Virtual DOM 中用于识别自定义组件</span>
    ReactCurrentOwner<span class="token punctuation">.</span>current<span class="token punctuation">,</span>
    props<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-reactelement" tabindex="-1"><a class="header-anchor" href="#_2-2-reactelement"><span>2.2 ReactElement</span></a></h3><p><code>文件位置：packages/react/src/ReactElement.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">/**
 * 接收参数 返回 ReactElement
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">ReactElement</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> key<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> self<span class="token punctuation">,</span> source<span class="token punctuation">,</span> owner<span class="token punctuation">,</span> props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">/**
     * 组件的类型, 十六进制数值或者 Symbol 值
     * React 在最终在渲染 DOM 的时候, 需要确保元素的类型是 REACT_ELEMENT_TYPE
     * 需要此属性作为判断的依据
     */</span>
    $$<span class="token keyword">typeof</span><span class="token operator">:</span> <span class="token constant">REACT_ELEMENT_TYPE</span><span class="token punctuation">,</span>

    <span class="token comment">/**
     * 元素具体的类型值 如果是元素节点 type 属性中存储的就是 div span 等等
     * 如果元素是组件 type 属性中存储的就是组件的构造函数
     */</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> type<span class="token punctuation">,</span>
    <span class="token comment">/**
     * 元素的唯一标识
     * 用作内部 vdom 比对 提升 DOM 操作性能
     */</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> key<span class="token punctuation">,</span>
    <span class="token comment">/**
     * 存储元素 DOM 对象或者组件 实例对象
     */</span>
    <span class="token literal-property property">ref</span><span class="token operator">:</span> ref<span class="token punctuation">,</span>
    <span class="token comment">/**
     * 存储向组件内部传递的数据
     */</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> props<span class="token punctuation">,</span>

    <span class="token comment">/**
     * 记录当前元素所属组件 (记录当前元素是哪个组件创建的)
     */</span>
    <span class="token literal-property property">_owner</span><span class="token operator">:</span> owner<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// 返回 ReactElement</span>
  <span class="token keyword">return</span> element<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-hasvalidref" tabindex="-1"><a class="header-anchor" href="#_2-3-hasvalidref"><span>2.3 hasValidRef</span></a></h3><p><code>文件位置：packages/react/src/ReactElement.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">/**
 * 查看参数对象中是否有合法的 ref 属性
 * 返回布尔值
 */</span>
<span class="token keyword">function</span> <span class="token function">hasValidRef</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> config<span class="token punctuation">.</span>ref <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-hasvalidkey" tabindex="-1"><a class="header-anchor" href="#_2-4-hasvalidkey"><span>2.4 hasValidKey</span></a></h3><p><code>文件位置：packages/react/src/ReactElement.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">/**
 * 查看参数对象中是否有合法的 key 属性
 * 返回布尔值
 */</span>
<span class="token keyword">function</span> <span class="token function">hasValidKey</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> config<span class="token punctuation">.</span>key <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-isvalidelement" tabindex="-1"><a class="header-anchor" href="#_2-5-isvalidelement"><span>2.5 isValidElement</span></a></h3><p><code>文件位置：packages/react/src/ReactElement.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">/**
 * 验证 object 参数是否是 ReactElement. 返回布尔值
 * 验证成功的条件:
 * object 是对象
 * object 不为null
 * object对象中的 $$typeof 属性值为 REACT_ELEMENT_TYPE
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">isValidElement</span><span class="token punctuation">(</span><span class="token parameter">object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token keyword">typeof</span> object <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span>
    object <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
    object<span class="token punctuation">.</span>$$<span class="token keyword">typeof</span> <span class="token operator">===</span> <span class="token constant">REACT_ELEMENT_TYPE</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-definekeypropwarninggetter" tabindex="-1"><a class="header-anchor" href="#_2-6-definekeypropwarninggetter"><span>2.6 defineKeyPropWarningGetter</span></a></h3><p><code>文件位置：packages/react/src/ReactElement.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">/**
 *  指定当通过 props 对象获取 key 属性时报错
 *  props        组件中的 props 对象
 *  displayName  组件名称标识
 */</span>
<span class="token keyword">function</span> <span class="token function">defineKeyPropWarningGetter</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> displayName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 通过 props 对象获取 key 属性报错</span>
  <span class="token keyword">const</span> <span class="token function-variable function">warnAboutAccessingKey</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在开发环境中</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// specialPropKeyWarningShown 控制错误只输出一次的变量</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>specialPropKeyWarningShown<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 通过 specialPropKeyWarningShown 变量锁住判断条件</span>
        specialPropKeyWarningShown <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token comment">// 指定报错信息和组件名称</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>
          <span class="token string">&#39;%s: \`key\` is not a prop. Trying to access it will result &#39;</span> <span class="token operator">+</span>
            <span class="token string">&#39;in \`undefined\` being returned. If you need to access the same &#39;</span> <span class="token operator">+</span>
            <span class="token string">&#39;value within the child component, you should pass it as a different &#39;</span> <span class="token operator">+</span>
            <span class="token string">&#39;prop. (https://reactjs.org/link/special-props)&#39;</span><span class="token punctuation">,</span>
          displayName<span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  warnAboutAccessingKey<span class="token punctuation">.</span>isReactWarning <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token comment">// 为 props 对象添加 key 属性</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> <span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// 当获取 key 属性时调用 warnAboutAccessingKey 方法进行报错</span>
    <span class="token literal-property property">get</span><span class="token operator">:</span> warnAboutAccessingKey<span class="token punctuation">,</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-7-definerefpropwarninggetter" tabindex="-1"><a class="header-anchor" href="#_2-7-definerefpropwarninggetter"><span>2.7 defineRefPropWarningGetter</span></a></h3><p><code>文件位置：packages/react/src/ReactElement.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">/**
 *  指定当通过 props 对象获取 ref 属性时报错
 *  props        组件中的 props 对象
 *  displayName  组件名称标识
 */</span>
<span class="token keyword">function</span> <span class="token function">defineRefPropWarningGetter</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> displayName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 通过 props 对象获取 ref 属性报错</span>
  <span class="token keyword">const</span> <span class="token function-variable function">warnAboutAccessingRef</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// specialPropRefWarningShown 控制错误只输出一次的变量</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>specialPropRefWarningShown<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 通过 specialPropRefWarningShown 变量锁住判断条件</span>
        specialPropRefWarningShown <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token comment">// 指定报错信息和组件名称</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>
          <span class="token string">&#39;%s: \`ref\` is not a prop. Trying to access it will result &#39;</span> <span class="token operator">+</span>
            <span class="token string">&#39;in \`undefined\` being returned. If you need to access the same &#39;</span> <span class="token operator">+</span>
            <span class="token string">&#39;value within the child component, you should pass it as a different &#39;</span> <span class="token operator">+</span>
            <span class="token string">&#39;prop. (https://reactjs.org/link/special-props)&#39;</span><span class="token punctuation">,</span>
          displayName<span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  warnAboutAccessingRef<span class="token punctuation">.</span>isReactWarning <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token comment">// 为 props 对象添加 key 属性</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> <span class="token string">&#39;ref&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">get</span><span class="token operator">:</span> warnAboutAccessingRef<span class="token punctuation">,</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-react-架构" tabindex="-1"><a class="header-anchor" href="#_3-react-架构"><span>3. React 架构</span></a></h2><p>React 16 版本的架构可以分为三层：调度层、协调层、渲染层。</p><ul><li>Scheduler (调度层)：调度任务的优先级，高优任务优先进入协调器</li><li>Reconciler (协调层)：构建 Fiber 数据结构，比对 Fiber 对象找出差异, 记录 Fiber 对象要进行的 DOM 操作</li><li>Renderer (渲染层)：负责将发生变化的部分渲染到页面上</li></ul><h3 id="_3-1-scheduler-调度层" tabindex="-1"><a class="header-anchor" href="#_3-1-scheduler-调度层"><span>3.1 Scheduler 调度层</span></a></h3><p>在 React 15 的版本中，采用了循环加递归的方式进行了 virtualDOM 的比对，由于递归使用 JavaScript 自身的执行栈，一旦开始就无法停止，直到任务执行完成。如果 VirtualDOM 树的层级比较深，virtualDOM 的比对就会长期占用 JavaScript 主线程，由于 JavaScript 又是单线程的无法同时执行其他任务，所以在比对的过程中无法响应用户操作，无法即时执行元素动画，造成了页面卡顿的现象。</p><p>在 React 16 的版本中，放弃了 JavaScript 递归的方式进行 virtualDOM 的比对，而是采用循环模拟递归。而且比对的过程是利用浏览器的空闲时间完成的，不会长期占用主线程，这就解决了 virtualDOM 比对造成页面卡顿的问题。</p><p>在 window 对象中提供了 requestIdleCallback API，它可以利用浏览器的空闲时间执行任务，但是它自身也存在一些问题，比如说并不是所有的浏览器都支持它，而且它的触发频率也不是很稳定，所以 React 最终放弃了 requestIdleCallback 的使用。</p><p>在 React 中，官方实现了自己的任务调度库，这个库就叫做 Scheduler。它也可以实现在浏览器空闲时执行任务，而且还可以设置任务的优先级，高优先级任务先执行，低优先级任务后执行。</p><p>Scheduler 存储在 <code>packages/scheduler</code> 文件夹中。</p><h3 id="_3-2-reconciler-协调层" tabindex="-1"><a class="header-anchor" href="#_3-2-reconciler-协调层"><span>3.2 Reconciler 协调层</span></a></h3><p>在 React 15 的版本中，协调器和渲染器交替执行，即找到了差异就直接更新差异。在 React 16 的版本中，这种情况发生了变化，协调器和渲染器不再交替执行。协调器负责找出差异，在所有差异找出之后，统一交给渲染器进行 DOM 的更新。也就是说协调器的主要任务就是找出差异部分，并为差异打上标记。</p><h3 id="_3-3-renderer-渲染层" tabindex="-1"><a class="header-anchor" href="#_3-3-renderer-渲染层"><span>3.3 Renderer 渲染层</span></a></h3><p>渲染器根据协调器为 Fiber 节点打的标记，同步执行对应的DOM操作。</p><p>既然比对的过程从递归变成了可以中断的循环，那么 React 是如何解决中断更新时 DOM 渲染不完全的问题呢？</p><p>其实根本就不存在这个问题，因为在整个过程中，调度器和协调器的工作是在内存中完成的是可以被打断的，渲染器的工作被设定成不可以被打断，所以不存在DOM 渲染不完全的问题。</p><h2 id="_4-数据结构" tabindex="-1"><a class="header-anchor" href="#_4-数据结构"><span>4. 数据结构</span></a></h2><h3 id="_4-1-fiber" tabindex="-1"><a class="header-anchor" href="#_4-1-fiber"><span>4.1 Fiber</span></a></h3><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code>type Fiber <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/************************  DOM 实例相关  *****************************/</span>
  
  <span class="token comment">// 标记不同的组件类型, 值详见 WorkTag</span>
  <span class="token literal-property property">tag</span><span class="token operator">:</span> WorkTag<span class="token punctuation">,</span>

  <span class="token comment">// 组件类型 div、span、组件构造函数</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> any<span class="token punctuation">,</span>

  <span class="token comment">// 实例对象, 如类组件的实例、原生 dom 实例, 而 function 组件没有实例, 因此该属性是空</span>
  <span class="token literal-property property">stateNode</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
 
	<span class="token comment">/************************  构建 Fiber 树相关  ***************************/</span>
  
  <span class="token comment">// 指向自己的父级 Fiber 对象</span>
  <span class="token keyword">return</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

  <span class="token comment">// 指向自己的第一个子级 Fiber 对象</span>
  <span class="token literal-property property">child</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  
  <span class="token comment">// 指向自己的下一个兄弟 iber 对象</span>
  <span class="token literal-property property">sibling</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  
  <span class="token comment">// 在 Fiber 树更新的过程中，每个 Fiber 都会有一个跟其对应的 Fiber</span>
  <span class="token comment">// 我们称他为 current &lt;==&gt; workInProgress</span>
  <span class="token comment">// 在渲染完成之后他们会交换位置</span>
  <span class="token comment">// alternate 指向当前 Fiber 在 workInProgress 树中的对应 Fiber</span>
	<span class="token literal-property property">alternate</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
		
  <span class="token comment">/************************  状态数据相关  ********************************/</span>
  
  <span class="token comment">// 即将更新的 props</span>
  <span class="token literal-property property">pendingProps</span><span class="token operator">:</span> any<span class="token punctuation">,</span> 
  <span class="token comment">// 旧的 props</span>
  <span class="token literal-property property">memoizedProps</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  <span class="token comment">// 旧的 state</span>
  <span class="token literal-property property">memoizedState</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
		
  <span class="token comment">/************************  副作用相关 ******************************/</span>

  <span class="token comment">// 该 Fiber 对应的组件产生的状态更新会存放在这个队列里面 </span>
  <span class="token literal-property property">updateQueue</span><span class="token operator">:</span> UpdateQueue<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> | null,
  
  // 用来记录当前 Fiber 要执行的 DOM 操作
  effectTag: SideEffectTag,

  // 存储第一个要执行副作用的子级 Fiber 对象
  firstEffect: Fiber | null,
  
  // 存储下一个要执行副作用的子级 Fiber 对象
  // 执行 DOM 渲染时要先通过 first 找到第一个, 然后通过 next 一直向后查找
  nextEffect: Fiber | null,
  
  // 存储 DOM 操作完后的副作用 比如调用生命周期函数或者钩子函数的调用
  lastEffect: Fiber | null,

  // 任务的过期时间
  expirationTime: ExpirationTime,
  
	// 当前组件及子组件处于何种渲染模式 详见 TypeOfMode
  mode: TypeOfMode,
};
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+`" alt="示例" width="500" height="300" tabindex="0" loading="lazy"><figcaption>示例</figcaption></figure><h3 id="_4-2-worktag" tabindex="-1"><a class="header-anchor" href="#_4-2-worktag"><span>4.2 WorkTag</span></a></h3><p><code>文件位置：packages/shared/ReactWorkTags.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code>type WorkTag <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token number">0</span>
  <span class="token operator">|</span> <span class="token number">1</span>
  <span class="token operator">|</span> <span class="token number">2</span>
  <span class="token operator">|</span> <span class="token number">3</span>
  <span class="token operator">|</span> <span class="token number">4</span>
  <span class="token operator">|</span> <span class="token number">5</span>
  <span class="token operator">|</span> <span class="token number">6</span>
  <span class="token operator">|</span> <span class="token number">7</span>
  <span class="token operator">|</span> <span class="token number">8</span>
  <span class="token operator">|</span> <span class="token number">9</span>
  <span class="token operator">|</span> <span class="token number">10</span>
  <span class="token operator">|</span> <span class="token number">11</span>
  <span class="token operator">|</span> <span class="token number">12</span>
  <span class="token operator">|</span> <span class="token number">13</span>
  <span class="token operator">|</span> <span class="token number">14</span>
  <span class="token operator">|</span> <span class="token number">15</span>
  <span class="token operator">|</span> <span class="token number">16</span>
  <span class="token operator">|</span> <span class="token number">17</span>
  <span class="token operator">|</span> <span class="token number">18</span>
  <span class="token operator">|</span> <span class="token number">19</span>
  <span class="token operator">|</span> <span class="token number">20</span>
  <span class="token operator">|</span> <span class="token number">21</span>
  <span class="token operator">|</span> <span class="token number">22</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> FunctionComponent <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> ClassComponent <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> IndeterminateComponent <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> HostRoot <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> HostPortal <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> HostComponent <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> HostText <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Fragment <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Mode <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> ContextConsumer <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> ContextProvider <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> ForwardRef <span class="token operator">=</span> <span class="token number">11</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Profiler <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> SuspenseComponent <span class="token operator">=</span> <span class="token number">13</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> MemoComponent <span class="token operator">=</span> <span class="token number">14</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> SimpleMemoComponent <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> LazyComponent <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> IncompleteClassComponent <span class="token operator">=</span> <span class="token number">17</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> DehydratedFragment <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> SuspenseListComponent <span class="token operator">=</span> <span class="token number">19</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> FundamentalComponent <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> ScopeComponent <span class="token operator">=</span> <span class="token number">21</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Block <span class="token operator">=</span> <span class="token number">22</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-typeofmode" tabindex="-1"><a class="header-anchor" href="#_4-3-typeofmode"><span>4.3 TypeOfMode</span></a></h3><p><code>文件位置: packages/react-reconciler/src/ReactTypeOfMode.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">export</span> type TypeOfMode <span class="token operator">=</span> number<span class="token punctuation">;</span>

<span class="token comment">// 0 同步渲染模式</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> NoMode <span class="token operator">=</span> <span class="token number">0b0000</span><span class="token punctuation">;</span>
<span class="token comment">// 1 严格模式</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> StrictMode <span class="token operator">=</span> <span class="token number">0b0001</span><span class="token punctuation">;</span>
<span class="token comment">// 10 异步渲染过渡模式</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> BlockingMode <span class="token operator">=</span> <span class="token number">0b0010</span><span class="token punctuation">;</span>
<span class="token comment">// 100 异步渲染模式</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> ConcurrentMode <span class="token operator">=</span> <span class="token number">0b0100</span><span class="token punctuation">;</span>
<span class="token comment">// 1000 性能测试模式</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> ProfileMode <span class="token operator">=</span> <span class="token number">0b1000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-sideeffecttag" tabindex="-1"><a class="header-anchor" href="#_4-3-sideeffecttag"><span>4.3 SideEffectTag</span></a></h3><p><code>文件位置：packages/shared/ReactSideEffectTags.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">export</span> type SideEffectTag <span class="token operator">=</span> number<span class="token punctuation">;</span>

<span class="token comment">// Don&#39;t change these two values. They&#39;re used by React Dev Tools.</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> NoEffect <span class="token operator">=</span> <span class="token comment">/*              */</span> <span class="token number">0b0000000000000</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> PerformedWork <span class="token operator">=</span> <span class="token comment">/*         */</span> <span class="token number">0b0000000000001</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>

<span class="token comment">// You can change the rest (and add more).</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Placement <span class="token operator">=</span> <span class="token comment">/*             */</span> <span class="token number">0b0000000000010</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Update <span class="token operator">=</span> <span class="token comment">/*                */</span> <span class="token number">0b0000000000100</span><span class="token punctuation">;</span> <span class="token comment">// 4</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> PlacementAndUpdate <span class="token operator">=</span> <span class="token comment">/*    */</span> <span class="token number">0b0000000000110</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Deletion <span class="token operator">=</span> <span class="token comment">/*              */</span> <span class="token number">0b0000000001000</span><span class="token punctuation">;</span> <span class="token comment">// 8</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> ContentReset <span class="token operator">=</span> <span class="token comment">/*          */</span> <span class="token number">0b0000000010000</span><span class="token punctuation">;</span> <span class="token comment">// 16</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Callback <span class="token operator">=</span> <span class="token comment">/*              */</span> <span class="token number">0b0000000100000</span><span class="token punctuation">;</span> <span class="token comment">// 32</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> DidCapture <span class="token operator">=</span> <span class="token comment">/*            */</span> <span class="token number">0b0000001000000</span><span class="token punctuation">;</span> <span class="token comment">// 64</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Ref <span class="token operator">=</span> <span class="token comment">/*                   */</span> <span class="token number">0b0000010000000</span><span class="token punctuation">;</span> <span class="token comment">// 128</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Snapshot <span class="token operator">=</span> <span class="token comment">/*              */</span> <span class="token number">0b0000100000000</span><span class="token punctuation">;</span> <span class="token comment">// 256</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Passive <span class="token operator">=</span> <span class="token comment">/*               */</span> <span class="token number">0b0001000000000</span><span class="token punctuation">;</span> <span class="token comment">// 512</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Hydrating <span class="token operator">=</span> <span class="token comment">/*             */</span> <span class="token number">0b0010000000000</span><span class="token punctuation">;</span> <span class="token comment">// 1024</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> HydratingAndUpdate <span class="token operator">=</span> <span class="token comment">/*    */</span> <span class="token number">0b0010000000100</span><span class="token punctuation">;</span> <span class="token comment">// 1028</span>

<span class="token comment">// Passive &amp; Update &amp; Callback &amp; Ref &amp; Snapshot</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> LifecycleEffectMask <span class="token operator">=</span> <span class="token comment">/*   */</span> <span class="token number">0b0001110100100</span><span class="token punctuation">;</span> <span class="token comment">// 932</span>

<span class="token comment">// Union of all host effects</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> HostEffectMask <span class="token operator">=</span> <span class="token comment">/*        */</span> <span class="token number">0b0011111111111</span><span class="token punctuation">;</span> <span class="token comment">// 2047</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Incomplete <span class="token operator">=</span> <span class="token comment">/*            */</span> <span class="token number">0b0100000000000</span><span class="token punctuation">;</span> <span class="token comment">// 2048</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> ShouldCapture <span class="token operator">=</span> <span class="token comment">/*         */</span> <span class="token number">0b1000000000000</span><span class="token punctuation">;</span> <span class="token comment">// 4096</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-update" tabindex="-1"><a class="header-anchor" href="#_4-4-update"><span>4.4 Update</span></a></h3><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">let</span> <span class="token literal-property property">update</span><span class="token operator">:</span> Update<span class="token operator">&lt;</span><span class="token operator">*</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  expirationTime<span class="token punctuation">,</span>
  suspenseConfig<span class="token punctuation">,</span>

  <span class="token literal-property property">tag</span><span class="token operator">:</span> UpdateState<span class="token punctuation">,</span>
  <span class="token literal-property property">payload</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">callback</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

  <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">null</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-updatequeue" tabindex="-1"><a class="header-anchor" href="#_4-5-updatequeue"><span>4.5 UpdateQueue</span></a></h3><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token literal-property property">queue</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">State</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> = </span><span class="token punctuation">{</span>
  <span class="token comment">// 上一次更新之后的 state, 作为下一次更新的基础</span>
  <span class="token literal-property property">baseState</span><span class="token operator">:</span> fiber<span class="token punctuation">.</span>memoizedState<span class="token punctuation">,</span>
  <span class="token literal-property property">baseQueue</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">shared</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">pending</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">effects</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token plain-text">
fiber.updateQueue = queue;
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-6-roottag" tabindex="-1"><a class="header-anchor" href="#_4-6-roottag"><span>4.6 RootTag</span></a></h3><p><code>文件位置：packages/shared/ReactRootTags.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">export</span> type RootTag <span class="token operator">=</span> <span class="token number">0</span> <span class="token operator">|</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token comment">// ReactDOM.render</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> LegacyRoot <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment">// ReactDOM.createBlockingRoot</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> BlockingRoot <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// ReactDOM.createRoot</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> ConcurrentRoot <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-7-双缓存技术" tabindex="-1"><a class="header-anchor" href="#_4-7-双缓存技术"><span>4.7 双缓存技术</span></a></h3><p>在 React 中，DOM 的更新采用了双缓存技术，双缓存技术致力于更快速的 DOM 更新。</p><p>什么是双缓存？举个例子，使用 canvas 绘制动画时，在绘制每一帧前都会清除上一帧的画面，清除上一帧需要花费时间，如果当前帧画面计算量又比较大，又需要花费比较长的时间，这就导致上一帧清除到下一帧显示中间会有较长的间隙，就会出现白屏。</p><p>为了解决这个问题，我们可以在内存中绘制当前帧动画，绘制完毕后直接用当前帧替换上一帧画面，这样的话在帧画面替换的过程中就会节约非常多的时间，就不会出现白屏问题。这种在内存中构建并直接替换的技术叫做双缓存。</p><p>React 使用双缓存技术完成 Fiber 树的构建与替换，实现DOM对象的快速更新。</p><p>在 React 中最多会同时存在两棵 Fiber 树，当前在屏幕中显示的内容对应的 Fiber 树叫做 current Fiber 树，当发生更新时，React 会在内存中重新构建一颗新的 Fiber 树，这颗正在构建的 Fiber 树叫做 workInProgress Fiber 树。在双缓存技术中，workInProgress Fiber 树就是即将要显示在页面中的 Fiber 树，当这颗 Fiber 树构建完成后，React 会使用它直接替换 current Fiber 树达到快速更新 DOM 的目的，因为 workInProgress Fiber 树是在内存中构建的所以构建它的速度是非常快的。</p><p>一旦 workInProgress Fiber 树在屏幕上呈现，它就会变成 current Fiber 树。</p><p>在 current Fiber 节点对象中有一个 alternate 属性指向对应的 workInProgress Fiber 节点对象，在 workInProgress Fiber 节点中有一个 alternate 属性也指向对应的 current Fiber 节点对象。</p><figure><img src="`+d+'" alt="示例" width="500" height="300" tabindex="0" loading="lazy"><figcaption>示例</figcaption></figure><figure><img src="'+k+'" alt="示例" width="500" height="300" tabindex="0" loading="lazy"><figcaption>示例</figcaption></figure><h3 id="_4-8-区分-fiberroot-与-rootfiber" tabindex="-1"><a class="header-anchor" href="#_4-8-区分-fiberroot-与-rootfiber"><span>4.8 区分 fiberRoot 与 rootFiber</span></a></h3><p>fiberRoot 表示 Fiber 数据结构对象，是 Fiber 数据结构中的最外层对象</p><p>rootFiber 表示组件挂载点对应的 Fiber 对象，比如 React 应用中默认的组件挂载点就是 id 为 root 的 div</p><p>fiberRoot 包含 rootFiber，在 fiberRoot 对象中有一个 current 属性，存储 rootFiber</p><p>rootFiber 指向 fiberRoot，在 rootFiber 对象中有一个 stateNode 属性，指向 fiberRoot</p><p>在 React 应用中 FiberRoot 只有一个，而 rootFiber 可以有多个，因为 render 方法是可以调用多次的</p><p>fiberRoot 会记录应用的更新信息，比如协调器在完成工作后，会将工作成果存储在 fiberRoot 中。</p><figure><img src="'+v+`" alt="示例" width="500" height="300" tabindex="0" loading="lazy"><figcaption>示例</figcaption></figure><h2 id="_5-初始化渲染" tabindex="-1"><a class="header-anchor" href="#_5-初始化渲染"><span>5. 初始化渲染</span></a></h2><p>要将 React 元素渲染到页面中，分为两个阶段，render 阶段和 commit 阶段。</p><p>render 阶段负责创建 Fiber 数据结构并为 Fiber 节点打标记，标记当前 Fiber 节点要进行的 DOM 操作。</p><p>commit 阶段负责根据 Fiber 节点标记 ( effectTag ) 进行相应的 DOM 操作。</p><h3 id="_5-1-render-阶段" tabindex="-1"><a class="header-anchor" href="#_5-1-render-阶段"><span>5.1 render 阶段</span></a></h3><h4 id="_5-1-1-render" tabindex="-1"><a class="header-anchor" href="#_5-1-1-render"><span>5.1.1 render</span></a></h4><p><code>文件位置：packages/react-dom/src/client/ReactDOMLegacy.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">/**
 * 渲染入口
 * element 要进行渲染的 ReactElement, createElement 方法的返回值
 * container 渲染容器 &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;
 * callback 渲染完成后执行的回调函数
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token literal-property property">element</span><span class="token operator">:</span> React$Element<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">,
  container: Container,
  callback: ?Function,
) </span><span class="token punctuation">{</span>
  <span class="token comment">// 检测 container 是否是符合要求的渲染容器</span>
  <span class="token comment">// 即检测 container 是否是真实的DOM对象</span>
  <span class="token comment">// 如果不符合要求就报错</span>
  <span class="token function">invariant</span><span class="token punctuation">(</span>
    <span class="token function">isValidContainer</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Target container is not a DOM element.&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">legacyRenderSubtreeIntoContainer</span><span class="token punctuation">(</span>
    <span class="token comment">// 父组件 初始渲染没有父组件 传递 null 占位</span>
    <span class="token keyword">null</span><span class="token punctuation">,</span>
    element<span class="token punctuation">,</span>
    container<span class="token punctuation">,</span>
    <span class="token comment">// 是否为服务器端渲染 false 不是服务器端渲染 true 是服务器端渲染</span>
    <span class="token boolean">false</span><span class="token punctuation">,</span>
    callback<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token plain-text">
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-1-2-isvalidcontainer" tabindex="-1"><a class="header-anchor" href="#_5-1-2-isvalidcontainer"><span>5.1.2 isValidContainer</span></a></h4><p><code>文件位置：packages/react-dom/src/client/ReactDOMRoot.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">/**
 * 判断 node 是否是符合要求的 DOM 节点
 * 1. node 可以是元素节点
 * 2. node 可以是 document 节点
 * 3. node 可以是 文档碎片节点
 * 4. node 可以是注释节点但注释内容必须是 react-mount-point-unstable
 * 		react 内部会找到注释节点的父级 通过调用父级元素的 insertBefore 方法, 将 element 插入到注释节点的前面
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">isValidContainer</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">node</span><span class="token operator">:</span> mixed</span><span class="token punctuation">)</span><span class="token operator">:</span> boolean <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">(</span>
    node <span class="token operator">&amp;&amp;</span>
    <span class="token punctuation">(</span>node<span class="token punctuation">.</span>nodeType <span class="token operator">===</span> <span class="token constant">ELEMENT_NODE</span> <span class="token operator">||</span>
      node<span class="token punctuation">.</span>nodeType <span class="token operator">===</span> <span class="token constant">DOCUMENT_NODE</span> <span class="token operator">||</span>
      node<span class="token punctuation">.</span>nodeType <span class="token operator">===</span> <span class="token constant">DOCUMENT_FRAGMENT_NODE</span> <span class="token operator">||</span>
      <span class="token punctuation">(</span>node<span class="token punctuation">.</span>nodeType <span class="token operator">===</span> <span class="token constant">COMMENT_NODE</span> <span class="token operator">&amp;&amp;</span>
        <span class="token punctuation">(</span>node<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">.</span>nodeValue <span class="token operator">===</span> <span class="token string">&#39; react-mount-point-unstable &#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-1-3-初始化-fiberroot" tabindex="-1"><a class="header-anchor" href="#_5-1-3-初始化-fiberroot"><span>5.1.3 初始化 FiberRoot</span></a></h4><h5 id="_5-1-3-1-legacyrendersubtreeintocontainer" tabindex="-1"><a class="header-anchor" href="#_5-1-3-1-legacyrendersubtreeintocontainer"><span>5.1.3.1 legacyRenderSubtreeIntoContainer</span></a></h5><p><code>文件位置: packages/react-dom/src/client/ReactDOMLegacy.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">/**
 * 将子树渲染到容器中 (初始化 Fiber 数据结构: 创建 fiberRoot 及 rootFiber)
 * parentComponent: 父组件, 初始渲染传入了 null
 * children: render 方法中的第一个参数, 要渲染的 ReactElement
 * container: 渲染容器
 * forceHydrate: true 为服务端渲染, false 为客户端渲染
 * callback: 组件渲染完成后需要执行的回调函数
 **/</span>
<span class="token keyword">function</span> <span class="token function">legacyRenderSubtreeIntoContainer</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">parentComponent</span><span class="token operator">:</span> <span class="token operator">?</span>React$Component<span class="token operator">&lt;</span>any<span class="token punctuation">,</span> any<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> ReactNodeList<span class="token punctuation">,</span>
  <span class="token literal-property property">container</span><span class="token operator">:</span> Container<span class="token punctuation">,</span>
  <span class="token literal-property property">forceHydrate</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
  <span class="token literal-property property">callback</span><span class="token operator">:</span> <span class="token operator">?</span>Function<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * 检测 container 是否已经是初始化过的渲染容器
   * react 在初始渲染时会为最外层容器添加 _reactRootContainer 属性
   * react 会根据此属性进行不同的渲染方式
   * root 不存在 表示初始渲染
   * root 存在 表示更新
   */</span>
  <span class="token comment">// 获取 container 容器对象下是否有 _reactRootContainer 属性</span>
  <span class="token keyword">let</span> <span class="token literal-property property">root</span><span class="token operator">:</span> RootType <span class="token operator">=</span> <span class="token punctuation">(</span>container<span class="token punctuation">.</span>_reactRootContainer<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 即将存储根 Fiber 对象</span>
  <span class="token keyword">let</span> fiberRoot<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 初始渲染</span>
    <span class="token comment">// 初始化根 Fiber 数据结构</span>
    <span class="token comment">// 为 container 容器添加 _reactRootContainer 属性</span>
    <span class="token comment">// 在 _reactRootContainer 对象中有一个属性叫做 _internalRoot</span>
    <span class="token comment">// _internalRoot 属性值即为 FiberRoot 表示根节点 Fiber 数据结构</span>
    <span class="token comment">// legacyCreateRootFromDOMContainer</span>
    <span class="token comment">// createLegacyRoot</span>
    <span class="token comment">// new ReactDOMBlockingRoot -&gt; this._internalRoot</span>
    <span class="token comment">// createRootImpl</span>
    root <span class="token operator">=</span> container<span class="token punctuation">.</span>_reactRootContainer <span class="token operator">=</span> <span class="token function">legacyCreateRootFromDOMContainer</span><span class="token punctuation">(</span>
      container<span class="token punctuation">,</span>
      forceHydrate<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 获取 Fiber Root 对象</span>
    fiberRoot <span class="token operator">=</span> root<span class="token punctuation">.</span>_internalRoot<span class="token punctuation">;</span>
    <span class="token comment">/**
     * 改变 callback 函数中的 this 指向
     * 使其指向 render 方法第一个参数的真实 DOM 对象
     */</span>
    <span class="token comment">// 如果 callback 参数是函数类型</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> callback <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 使用 originalCallback 存储 callback 函数</span>
      <span class="token keyword">const</span> originalCallback <span class="token operator">=</span> callback<span class="token punctuation">;</span>
      <span class="token comment">// 为 callback 参数重新赋值</span>
      <span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 获取 render 方法第一个参数的真实 DOM 对象</span>
        <span class="token comment">// 实际上就是 id=&quot;root&quot; 的 div 的子元素</span>
        <span class="token comment">// rootFiber.child.stateNode</span>
        <span class="token comment">// rootFiber 就是 id=&quot;root&quot; 的 div</span>
        <span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">getPublicRootInstance</span><span class="token punctuation">(</span>fiberRoot<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 调用 callback 函数并改变函数内部 this 指向</span>
        <span class="token function">originalCallback</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 初始化渲染不执行批量更新</span>
    <span class="token comment">// 因为批量更新是异步的是可以被打断的, 但是初始化渲染应该尽快完成不能被打断</span>
    <span class="token comment">// 所以不执行批量更新</span>
    <span class="token function">unbatchedUpdates</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">updateContainer</span><span class="token punctuation">(</span>children<span class="token punctuation">,</span> fiberRoot<span class="token punctuation">,</span> parentComponent<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 非初始化渲染 即更新</span>
    fiberRoot <span class="token operator">=</span> root<span class="token punctuation">.</span>_internalRoot<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> callback <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> originalCallback <span class="token operator">=</span> callback<span class="token punctuation">;</span>
      <span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">getPublicRootInstance</span><span class="token punctuation">(</span>fiberRoot<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">originalCallback</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// Update</span>
    <span class="token function">updateContainer</span><span class="token punctuation">(</span>children<span class="token punctuation">,</span> fiberRoot<span class="token punctuation">,</span> parentComponent<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 返回 render 方法第一个参数的真实 DOM 对象作为 render 方法的返回值</span>
  <span class="token comment">// 就是说渲染谁 返回谁的真实 DOM 对象</span>
  <span class="token keyword">return</span> <span class="token function">getPublicRootInstance</span><span class="token punctuation">(</span>fiberRoot<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+m+`" alt="示例" width="500" height="300" tabindex="0" loading="lazy"><figcaption>示例</figcaption></figure><h5 id="_5-1-3-2-legacycreaterootfromdomcontainer" tabindex="-1"><a class="header-anchor" href="#_5-1-3-2-legacycreaterootfromdomcontainer"><span>5.1.3.2 legacyCreateRootFromDOMContainer</span></a></h5><p><code>文件位置: packages/react-dom/src/client/ReactDOMLegacy.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">/**
 * 判断是否为服务器端渲染 如果不是服务器端渲染
 * 清空 container 容器中的节点
 */</span>
<span class="token keyword">function</span> <span class="token function">legacyCreateRootFromDOMContainer</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">container</span><span class="token operator">:</span> Container<span class="token punctuation">,</span>
  <span class="token literal-property property">forceHydrate</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> RootType <span class="token punctuation">{</span>
  <span class="token comment">// container =&gt; &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;</span>
  <span class="token comment">// 检测是否为服务器端渲染</span>
  <span class="token keyword">const</span> shouldHydrate <span class="token operator">=</span>
    forceHydrate <span class="token operator">||</span> <span class="token function">shouldHydrateDueToLegacyHeuristic</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 如果不是服务器端渲染</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>shouldHydrate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> rootSibling<span class="token punctuation">;</span>
    <span class="token comment">// 开启循环 删除 container 容器中的节点</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>rootSibling <span class="token operator">=</span> container<span class="token punctuation">.</span>lastChild<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 删除 container 容器中的节点</span>
      container<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>rootSibling<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">/**
       * 为什么要清除 container 中的元素 ?
       * 为提供首屏加载的用户体验, 有时需要在 container 中放置一些占位图或者 loading 图
       * 就无可避免的要向 container 中加入 html 标记.
       * 在将 ReactElement 渲染到 container 之前, 必然要先清空 container
       * 因为占位图和 ReactElement 不能同时显示
       *
       * 在加入占位代码时, 最好只有一个父级元素, 可以减少内部代码的循环次数以提高性能
       * &lt;div&gt;
       *  &lt;p&gt;placement&lt;p&gt;
       *  &lt;p&gt;placement&lt;p&gt;
       *  &lt;p&gt;placement&lt;p&gt;
       * &lt;/div&gt;
       */</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">createLegacyRoot</span><span class="token punctuation">(</span>
    container<span class="token punctuation">,</span>
    shouldHydrate
      <span class="token operator">?</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">hydrate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-1-3-3-createlegacyroot" tabindex="-1"><a class="header-anchor" href="#_5-1-3-3-createlegacyroot"><span>5.1.3.3 createLegacyRoot</span></a></h5><p><code>文件位置: packages/react-dom/src/client/ReactDOMRoot.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">/**
 * 通过实例化 ReactDOMBlockingRoot 类创建 LegacyRoot
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createLegacyRoot</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">container</span><span class="token operator">:</span> Container<span class="token punctuation">,</span>
  options<span class="token operator">?</span><span class="token operator">:</span> RootOptions<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> RootType <span class="token punctuation">{</span>
  <span class="token comment">// container =&gt; &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;</span>
  <span class="token comment">// LegacyRoot 常量, 值为 0,</span>
  <span class="token comment">// 通过 render 方法创建的 container 就是 LegacyRoot</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ReactDOMBlockingRoot</span><span class="token punctuation">(</span>container<span class="token punctuation">,</span> LegacyRoot<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-1-3-3-reactdomblockingroot" tabindex="-1"><a class="header-anchor" href="#_5-1-3-3-reactdomblockingroot"><span>5.1.3.3 ReactDOMBlockingRoot</span></a></h5><p><code>文件位置: packages/react-dom/src/client/ReactDOMRoot.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">/**
 * 类, 通过它可以创建 LegacyRoot 的 Fiber 数据结构
 */</span>
<span class="token keyword">function</span> <span class="token function">ReactDOMBlockingRoot</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">container</span><span class="token operator">:</span> Container<span class="token punctuation">,</span>
  <span class="token literal-property property">tag</span><span class="token operator">:</span> RootTag<span class="token punctuation">,</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">|</span> RootOptions<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// tag =&gt; 0 =&gt; legacyRoot</span>
  <span class="token comment">// container =&gt; &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;</span>
  <span class="token comment">// container._reactRootContainer = {_internalRoot: {}}</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>_internalRoot <span class="token operator">=</span> <span class="token function">createRootImpl</span><span class="token punctuation">(</span>container<span class="token punctuation">,</span> tag<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-1-3-4-createrootimpl" tabindex="-1"><a class="header-anchor" href="#_5-1-3-4-createrootimpl"><span>5.1.3.4 createRootImpl</span></a></h5><p><code>文件位置: packages/react-dom/src/client/ReactDOMRoot.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code>
<span class="token keyword">function</span> <span class="token function">createRootImpl</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">container</span><span class="token operator">:</span> Container<span class="token punctuation">,</span>
  <span class="token literal-property property">tag</span><span class="token operator">:</span> RootTag<span class="token punctuation">,</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">|</span> RootOptions<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// container =&gt; &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;</span>
  <span class="token comment">// tag =&gt; 0</span>
  <span class="token comment">// options =&gt; undefined</span>
  <span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token function">createContainer</span><span class="token punctuation">(</span>container<span class="token punctuation">,</span> tag<span class="token punctuation">,</span> hydrate<span class="token punctuation">,</span> hydrationCallbacks<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">markContainerAsRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>current<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-1-3-5-createcontainer" tabindex="-1"><a class="header-anchor" href="#_5-1-3-5-createcontainer"><span>5.1.3.5 createContainer</span></a></h5><p><code>文件位置: packages/react-reconciler/src/ReactFiberReconciler.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">// 创建 container</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createContainer</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">containerInfo</span><span class="token operator">:</span> Container<span class="token punctuation">,</span>
  <span class="token literal-property property">tag</span><span class="token operator">:</span> RootTag<span class="token punctuation">,</span>
  <span class="token literal-property property">hydrate</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
  <span class="token literal-property property">hydrationCallbacks</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> SuspenseHydrationCallbacks<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> OpaqueRoot <span class="token punctuation">{</span>
  <span class="token comment">// containerInfo =&gt; &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;</span>
  <span class="token comment">// tag: 0</span>
  <span class="token comment">// hydrate: false</span>
  <span class="token comment">// hydrationCallbacks: null</span>
  <span class="token comment">// 忽略了和服务器端渲染相关的内容</span>
  <span class="token keyword">return</span> <span class="token function">createFiberRoot</span><span class="token punctuation">(</span>containerInfo<span class="token punctuation">,</span> tag<span class="token punctuation">,</span> hydrate<span class="token punctuation">,</span> hydrationCallbacks<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-1-3-6-createfiberroot" tabindex="-1"><a class="header-anchor" href="#_5-1-3-6-createfiberroot"><span>5.1.3.6 createFiberRoot</span></a></h5><p><code>文件位置: packages/react-reconciler/src/ReactFiberRoot.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">// 创建根节点对应的 fiber 对象</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createFiberRoot</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">containerInfo</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  <span class="token literal-property property">tag</span><span class="token operator">:</span> RootTag<span class="token punctuation">,</span>
  <span class="token literal-property property">hydrate</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
  <span class="token literal-property property">hydrationCallbacks</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> SuspenseHydrationCallbacks<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> FiberRoot <span class="token punctuation">{</span>
  <span class="token comment">// 创建 FiberRoot</span>
  <span class="token keyword">const</span> <span class="token literal-property property">root</span><span class="token operator">:</span> FiberRoot <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FiberRootNode</span><span class="token punctuation">(</span>containerInfo<span class="token punctuation">,</span> tag<span class="token punctuation">,</span> hydrate<span class="token punctuation">)</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 创建根节点对应的 rootFiber</span>
  <span class="token keyword">const</span> uninitializedFiber <span class="token operator">=</span> <span class="token function">createHostRootFiber</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 为 fiberRoot 添加 current 属性 值为 rootFiber</span>
  root<span class="token punctuation">.</span>current <span class="token operator">=</span> uninitializedFiber<span class="token punctuation">;</span>
  <span class="token comment">// 为 rootFiber 添加 stateNode 属性 值为 fiberRoot</span>
  uninitializedFiber<span class="token punctuation">.</span>stateNode <span class="token operator">=</span> root<span class="token punctuation">;</span>
  <span class="token comment">// 为 fiber 对象添加 updateQueue 属性, 初始化 updateQueue 对象</span>
  <span class="token comment">// updateQueue 用于存放 Update 对象</span>
  <span class="token comment">// Update 对象用于记录组件状态的改变</span>
  <span class="token function">initializeUpdateQueue</span><span class="token punctuation">(</span>uninitializedFiber<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 返回 root</span>
  <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-1-3-7-fiberrootnode" tabindex="-1"><a class="header-anchor" href="#_5-1-3-7-fiberrootnode"><span>5.1.3.7 FiberRootNode</span></a></h5><p><code>文件位置: packages/react-reconciler/src/ReactFiberRoot.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">FiberRootNode</span><span class="token punctuation">(</span><span class="token parameter">containerInfo<span class="token punctuation">,</span> tag<span class="token punctuation">,</span> hydrate</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>tag <span class="token operator">=</span> tag<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>containerInfo <span class="token operator">=</span> containerInfo<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>pendingChildren <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>pingCache <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>finishedExpirationTime <span class="token operator">=</span> NoWork<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>finishedWork <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>timeoutHandle <span class="token operator">=</span> noTimeout<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>context <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>pendingContext <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>hydrate <span class="token operator">=</span> hydrate<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>callbackNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>callbackPriority <span class="token operator">=</span> NoPriority<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>firstPendingTime <span class="token operator">=</span> NoWork<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>firstSuspendedTime <span class="token operator">=</span> NoWork<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>lastSuspendedTime <span class="token operator">=</span> NoWork<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>nextKnownPendingLevel <span class="token operator">=</span> NoWork<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>lastPingedTime <span class="token operator">=</span> NoWork<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>lastExpiredTime <span class="token operator">=</span> NoWork<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>enableSchedulerTracing<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>interactionThreadID <span class="token operator">=</span> <span class="token function">unstable_getThreadID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>memoizedInteractions <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>pendingInteractionMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>enableSuspenseCallback<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>hydrationCallbacks <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-3-1-8-initializeupdatequeue" tabindex="-1"><a class="header-anchor" href="#_5-3-1-8-initializeupdatequeue"><span>5.3.1.8 initializeUpdateQueue</span></a></h5><p><code>文件位置: packages/react-reconciler/src/ReactFiberRoot.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">export</span> <span class="token keyword">function</span> initializeUpdateQueue<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">State</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">(fiber: Fiber): void </span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">queue</span><span class="token operator">:</span> UpdateQueue<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">State</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> = </span><span class="token punctuation">{</span>
    <span class="token literal-property property">baseState</span><span class="token operator">:</span> fiber<span class="token punctuation">.</span>memoizedState<span class="token punctuation">,</span>
    <span class="token literal-property property">baseQueue</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">shared</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">pending</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">effects</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token plain-text">;
  fiber.updateQueue = queue;
}
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-1-4-获取-rootfiber-child-实例对象" tabindex="-1"><a class="header-anchor" href="#_5-1-4-获取-rootfiber-child-实例对象"><span>5.1.4 获取 rootFiber.child 实例对象</span></a></h4><h5 id="_5-1-4-1-getpublicrootinstance" tabindex="-1"><a class="header-anchor" href="#_5-1-4-1-getpublicrootinstance"><span>5.1.4.1 getPublicRootInstance</span></a></h5><p><code>文件位置: packages/react-reconciler/src/ReactFiberReconciler.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">/**
 * 获取 container 的第一个子元素的实例对象
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getPublicRootInstance</span><span class="token punctuation">(</span>
  <span class="token comment">// FiberRoot</span>
  <span class="token literal-property property">container</span><span class="token operator">:</span> OpaqueRoot<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> React$Component<span class="token operator">&lt;</span>any<span class="token punctuation">,</span> any<span class="token operator">&gt;</span> <span class="token operator">|</span> PublicInstance <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取 rootFiber</span>
  <span class="token keyword">const</span> containerFiber <span class="token operator">=</span> container<span class="token punctuation">.</span>current<span class="token punctuation">;</span>
  <span class="token comment">// 如果 rootFiber 没有子元素</span>
  <span class="token comment">// 指的就是 id=&quot;root&quot; 的 div 没有子元素</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>containerFiber<span class="token punctuation">.</span>child<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 返回 null</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 匹配子元素的类型</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>containerFiber<span class="token punctuation">.</span>child<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 普通</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostComponent</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token function">getPublicInstance</span><span class="token punctuation">(</span>containerFiber<span class="token punctuation">.</span>child<span class="token punctuation">.</span>stateNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token comment">// 返回子元素的真实 DOM 对象</span>
      <span class="token keyword">return</span> containerFiber<span class="token punctuation">.</span>child<span class="token punctuation">.</span>stateNode<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-1-4-2-getpublicinstance" tabindex="-1"><a class="header-anchor" href="#_5-1-4-2-getpublicinstance"><span>5.1.4.2 getPublicInstance</span></a></h5><p><code>文件位置: packages/react-dom/src/client/ReactDOMHostConfig.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getPublicInstance</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">instance</span><span class="token operator">:</span> Instance</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token operator">*</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-1-5-updatecontainer" tabindex="-1"><a class="header-anchor" href="#_5-1-5-updatecontainer"><span>5.1.5 updateContainer</span></a></h4><p><code>文件位置: packages/react-reconciler/src/ReactFiberReconciler.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">/**
 * 计算任务的过期时间
 * 再根据任务过期时间创建 Update 任务
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">updateContainer</span><span class="token punctuation">(</span>
	<span class="token comment">// element 要渲染的 ReactElement</span>
  <span class="token literal-property property">element</span><span class="token operator">:</span> ReactNodeList<span class="token punctuation">,</span>
  <span class="token comment">// container Fiber Root 对象</span>
  <span class="token literal-property property">container</span><span class="token operator">:</span> OpaqueRoot<span class="token punctuation">,</span>
  <span class="token comment">// parentComponent 父组件 初始渲染为 null</span>
  <span class="token literal-property property">parentComponent</span><span class="token operator">:</span> <span class="token operator">?</span>React$Component<span class="token operator">&lt;</span>any<span class="token punctuation">,</span> any<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token comment">// ReactElement 渲染完成执行的回调函数</span>
  <span class="token literal-property property">callback</span><span class="token operator">:</span> <span class="token operator">?</span>Function<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> ExpirationTime <span class="token punctuation">{</span>  
  <span class="token comment">// container 获取 rootFiber</span>
  <span class="token keyword">const</span> current <span class="token operator">=</span> container<span class="token punctuation">.</span>current<span class="token punctuation">;</span>
  <span class="token comment">// 获取当前距离 react 应用初始化的时间 1073741805</span>
  <span class="token keyword">const</span> currentTime <span class="token operator">=</span> <span class="token function">requestCurrentTimeForUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 异步加载设置</span>
  <span class="token keyword">const</span> suspenseConfig <span class="token operator">=</span> <span class="token function">requestCurrentSuspenseConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 计算过期时间</span>
  <span class="token comment">// 为防止任务因为优先级的原因一直被打断而未能执行</span>
  <span class="token comment">// react 会设置一个过期时间, 当时间到了过期时间的时候</span>
  <span class="token comment">// 如果任务还未执行的话, react 将会强制执行该任务</span>
  <span class="token comment">// 初始化渲染时, 任务同步执行不涉及被打断的问题 1073741823</span>
  <span class="token keyword">const</span> expirationTime <span class="token operator">=</span> <span class="token function">computeExpirationForFiber</span><span class="token punctuation">(</span>
    currentTime<span class="token punctuation">,</span>
    current<span class="token punctuation">,</span>
    suspenseConfig<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 设置FiberRoot.context, 首次执行返回一个emptyContext, 是一个 {}</span>
  <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token function">getContextForSubtree</span><span class="token punctuation">(</span>parentComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 初始渲染时 Fiber Root 对象中的 context 属性值为 null</span>
  <span class="token comment">// 所以会进入到 if 中</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>container<span class="token punctuation">.</span>context <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 初始渲染时将 context 属性值设置为 {}</span>
    container<span class="token punctuation">.</span>context <span class="token operator">=</span> context<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    container<span class="token punctuation">.</span>pendingContext <span class="token operator">=</span> context<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 创建一个待执行任务</span>
  <span class="token keyword">const</span> update <span class="token operator">=</span> <span class="token function">createUpdate</span><span class="token punctuation">(</span>expirationTime<span class="token punctuation">,</span> suspenseConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 将要更新的内容挂载到更新对象中的 payload 中</span>
  <span class="token comment">// 将要更新的组件存储在 payload 对象中, 方便后期获取</span>
  update<span class="token punctuation">.</span>payload <span class="token operator">=</span> <span class="token punctuation">{</span>element<span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// 判断 callback 是否存在</span>
  callback <span class="token operator">=</span> callback <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> callback<span class="token punctuation">;</span>
  <span class="token comment">// 如果 callback 存在</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>callback <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将 callback 挂载到 update 对象中</span>
    <span class="token comment">// 其实就是一层层传递 方便 ReactElement 元素渲染完成调用</span>
    <span class="token comment">// 回调函数执行完成后会被清除 可以在代码的后面加上 return 进行验证</span>
    update<span class="token punctuation">.</span>callback <span class="token operator">=</span> callback<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 将 update 对象加入到当前 Fiber 的更新队列当中 (updateQueue)</span>
  <span class="token function">enqueueUpdate</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> update<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 调度和更新 current 对象</span>
  <span class="token function">scheduleWork</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> expirationTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 返回过期时间</span>
  <span class="token keyword">return</span> expirationTime<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-1-6-enqueueupdate" tabindex="-1"><a class="header-anchor" href="#_5-1-6-enqueueupdate"><span>5.1.6 enqueueUpdate</span></a></h4><p><code>文件位置: packages/react-reconciler/src/ReactUpdateQueue.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">// 将任务(Update)存放于任务队列(updateQueue)中</span>
<span class="token comment">// 创建单向链表结构存放 update, next 用来串联 update</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> enqueueUpdate<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">State</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">(fiber: Fiber, update: Update</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">State</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">) </span><span class="token punctuation">{</span>
  <span class="token comment">// 获取当前 Fiber 的 更新队列</span>
  <span class="token keyword">const</span> updateQueue <span class="token operator">=</span> fiber<span class="token punctuation">.</span>updateQueue<span class="token punctuation">;</span>
  <span class="token comment">// 如果更新队列不存在 就返回 null</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>updateQueue <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 仅发生在 fiber 已经被卸载</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 获取待执行的 Update 任务</span>
  <span class="token comment">// 初始渲染时没有待执行的任务</span>
  <span class="token keyword">const</span> sharedQueue <span class="token operator">=</span> updateQueue<span class="token punctuation">.</span>shared<span class="token punctuation">;</span>
  <span class="token keyword">const</span> pending <span class="token operator">=</span> sharedQueue<span class="token punctuation">.</span>pending<span class="token punctuation">;</span>
  <span class="token comment">// 如果没有待执行的 Update 任务</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>pending <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这是第一次更新, 创建一个循环列表.</span>
    update<span class="token punctuation">.</span>next <span class="token operator">=</span> update<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    update<span class="token punctuation">.</span>next <span class="token operator">=</span> pending<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    pending<span class="token punctuation">.</span>next <span class="token operator">=</span> update<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 将 Update 任务存储在 pending 属性中</span>
  sharedQueue<span class="token punctuation">.</span>pending <span class="token operator">=</span> update<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token plain-text">
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-1-7-scheduleupdateonfiber" tabindex="-1"><a class="header-anchor" href="#_5-1-7-scheduleupdateonfiber"><span>5.1.7 scheduleUpdateOnFiber</span></a></h4><p><code>文件位置: packages/react-reconciler/src/ReactFiberWorkLoop.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">/**
 * 判断任务是否为同步 调用同步任务入口
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">scheduleUpdateOnFiber</span><span class="token punctuation">(</span>
  <span class="token comment">// rootFiber</span>
  <span class="token literal-property property">fiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">expirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * fiber: 初始化渲染时为 rootFiber, 即 &lt;div id=&quot;root&quot;&gt;&lt;/div&gt; 对应的 Fiber 对象
   * expirationTime: 任务过期时间 =&gt;1073741823
   */</span>
  <span class="token comment">/**
   * 判断是否是无限循环的 update 如果是就报错
   * 在 componentWillUpdate 或者 componentDidUpdate 生命周期函数中重复调用
   * setState 方法时, 可能会发生这种情况, React 限制了嵌套更新的数量以防止无限循环
   * 限制的嵌套更新数量为 50, 可通过 NESTED_UPDATE_LIMIT 全局变量获取
   */</span>
  <span class="token function">checkForNestedUpdates</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 判断任务是否是同步任务 Sync的值为: 1073741823</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>expirationTime <span class="token operator">===</span> Sync<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      <span class="token comment">// 检查是否处于非批量更新模式</span>
      <span class="token punctuation">(</span>executionContext <span class="token operator">&amp;</span> LegacyUnbatchedContext<span class="token punctuation">)</span> <span class="token operator">!==</span> NoContext <span class="token operator">&amp;&amp;</span>
      <span class="token comment">// 检查是否没有处于正在进行渲染的任务</span>
      <span class="token punctuation">(</span>executionContext <span class="token operator">&amp;</span> <span class="token punctuation">(</span>RenderContext <span class="token operator">|</span> CommitContext<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">===</span> NoContext
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 同步任务入口点</span>
      <span class="token function">performSyncWorkOnRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token comment">// 忽略了一些初始化渲染不会得到执行的代码</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-1-8-构建-fiber-对象" tabindex="-1"><a class="header-anchor" href="#_5-1-8-构建-fiber-对象"><span>5.1.8 构建 Fiber 对象</span></a></h4><h5 id="_5-1-8-1-performsyncworkonroot" tabindex="-1"><a class="header-anchor" href="#_5-1-8-1-performsyncworkonroot"><span>5.1.8.1 performSyncWorkOnRoot</span></a></h5><p><code>文件位置: packages/react-reconciler/src/ReactFiberWorkLoop.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">// 进入 render 阶段, 构建 workInProgress Fiber 树</span>
<span class="token keyword">function</span> <span class="token function">performSyncWorkOnRoot</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 参数 root 为 fiberRoot 对象</span>
  <span class="token comment">// 检查是否有过期的任务</span>
  <span class="token comment">// 如果没有过期的任务 值为 0</span>
  <span class="token comment">// 初始化渲染没有过期的任务待执行</span>
  <span class="token keyword">const</span> lastExpiredTime <span class="token operator">=</span> root<span class="token punctuation">.</span>lastExpiredTime<span class="token punctuation">;</span>
  <span class="token comment">// NoWork 值为 0</span>
  <span class="token comment">// 如果有过期的任务 将过期时间设置为 lastExpiredTime 否则将过期时间设置为 Sync</span>
  <span class="token comment">// 初始渲染过期时间被设置成了 Sync</span>
  <span class="token keyword">const</span> expirationTime <span class="token operator">=</span> lastExpiredTime <span class="token operator">!==</span> NoWork <span class="token operator">?</span> lastExpiredTime <span class="token operator">:</span> Sync<span class="token punctuation">;</span>

  <span class="token comment">// 如果 root 和 workInProgressRoot 不相等</span>
  <span class="token comment">// 说明 workInProgressRoot 不存在, 说明还没有构建 workInProgress Fiber 树</span>
  <span class="token comment">// workInProgressRoot 为全局变量 默认值为 null, 初始渲染时值为 null</span>
  <span class="token comment">// expirationTime =&gt; 1073741823</span>
  <span class="token comment">// renderExpirationTime =&gt; 0</span>
  <span class="token comment">// true</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">!==</span> workInProgressRoot <span class="token operator">||</span> expirationTime <span class="token operator">!==</span> renderExpirationTime<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 构建 workInProgressFiber 树及rootFiber</span>
    <span class="token function">prepareFreshStack</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> expirationTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// workInProgress 如果不为 null</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>workInProgress <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">do</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token comment">// 以同步的方式开始构建 Fiber 对象</span>
        <span class="token function">workLoopSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 跳出 while 循环</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>thrownValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">handleError</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> thrownValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">(</span>workInProgress <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 这是一个同步渲染, 所以我们应该完成整棵树.</span>
      <span class="token comment">// 无法提交不完整的 root, 此错误可能是由于React中的错误所致. 请提出问题.</span>
      <span class="token function">invariant</span><span class="token punctuation">(</span>
        <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token string">&#39;Cannot commit an incomplete root. This error is likely caused by a &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;bug in React. Please file an issue.&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 将构建好的新 Fiber 对象存储在 finishedWork 属性中</span>
      <span class="token comment">// 提交阶段使用</span>
      root<span class="token punctuation">.</span>finishedWork <span class="token operator">=</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>current<span class="token punctuation">.</span>alternate<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">;</span>
      root<span class="token punctuation">.</span>finishedExpirationTime <span class="token operator">=</span> expirationTime<span class="token punctuation">;</span>
      <span class="token comment">// 结束 render 阶段</span>
      <span class="token comment">// 进入 commit 阶段</span>
      <span class="token function">finishSyncRender</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-1-8-2-preparefreshstack" tabindex="-1"><a class="header-anchor" href="#_5-1-8-2-preparefreshstack"><span>5.1.8.2 prepareFreshStack</span></a></h5><p><code>文件位置: packages/react-reconciler/src/ReactFiberWorkLoop.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">/**
 * 根据 currentFiber 树中的 rootFiber
 * 构建 workInProgressFiber 树中的 rootFiber
 */</span>
<span class="token keyword">function</span> <span class="token function">prepareFreshStack</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> expirationTime</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 为 FiberRoot 对象添加 finishedWork 属性</span>
  <span class="token comment">// finishedWork 表示 render 阶段执行完成后构建的待提交的 Fiber 对象</span>
  root<span class="token punctuation">.</span>finishedWork <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token comment">// 初始化 finishedExpirationTime 值为 0</span>
  root<span class="token punctuation">.</span>finishedExpirationTime <span class="token operator">=</span> NoWork<span class="token punctuation">;</span>

  <span class="token comment">// 建构 workInProgress Fiber 树的 Fiber 对象</span>
  workInProgressRoot <span class="token operator">=</span> root<span class="token punctuation">;</span>
  <span class="token comment">// 构建 workInProgress Fiber 树中的 rootFiber</span>
  workInProgress <span class="token operator">=</span> <span class="token function">createWorkInProgress</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>current<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  renderExpirationTime <span class="token operator">=</span> expirationTime<span class="token punctuation">;</span>
  workInProgressRootExitStatus <span class="token operator">=</span> RootIncomplete<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-1-8-3-createworkinprogress" tabindex="-1"><a class="header-anchor" href="#_5-1-8-3-createworkinprogress"><span>5.1.8.3 createWorkInProgress</span></a></h5><p><code>文件位置: packages/react-reconciler/src/ReactFiber.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">// 构建 workInProgress Fiber 树中的 rootFiber</span>
<span class="token comment">// 构建完成后会替换 current fiber</span>
<span class="token comment">// 初始渲染 pendingProps 为 null</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createWorkInProgress</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span> <span class="token literal-property property">pendingProps</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token punctuation">{</span>
  <span class="token comment">// current: current Fiber 中的 rootFiber</span>
  <span class="token comment">// 获取 current Fiber 中对应的 workInProgress Fiber</span>
  <span class="token keyword">let</span> workInProgress <span class="token operator">=</span> current<span class="token punctuation">.</span>alternate<span class="token punctuation">;</span>
  <span class="token comment">// 如果 workInProgress 不存在</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>workInProgress <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建 fiber 对象</span>
    workInProgress <span class="token operator">=</span> <span class="token function">createFiber</span><span class="token punctuation">(</span>
      current<span class="token punctuation">.</span>tag<span class="token punctuation">,</span>
      pendingProps<span class="token punctuation">,</span>
      current<span class="token punctuation">.</span>key<span class="token punctuation">,</span>
      current<span class="token punctuation">.</span>mode<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 属性复用</span>
    workInProgress<span class="token punctuation">.</span>elementType <span class="token operator">=</span> current<span class="token punctuation">.</span>elementType<span class="token punctuation">;</span>
    workInProgress<span class="token punctuation">.</span>type <span class="token operator">=</span> current<span class="token punctuation">.</span>type<span class="token punctuation">;</span>
    workInProgress<span class="token punctuation">.</span>stateNode <span class="token operator">=</span> current<span class="token punctuation">.</span>stateNode<span class="token punctuation">;</span>
    <span class="token comment">// 使用 alternate 存储 current</span>
    workInProgress<span class="token punctuation">.</span>alternate <span class="token operator">=</span> current<span class="token punctuation">;</span>
    <span class="token comment">// 使用 alternate 存储 workInProgress</span>
    current<span class="token punctuation">.</span>alternate <span class="token operator">=</span> workInProgress<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  workInProgress<span class="token punctuation">.</span>childExpirationTime <span class="token operator">=</span> current<span class="token punctuation">.</span>childExpirationTime<span class="token punctuation">;</span>
  workInProgress<span class="token punctuation">.</span>expirationTime <span class="token operator">=</span> current<span class="token punctuation">.</span>expirationTime<span class="token punctuation">;</span>
  workInProgress<span class="token punctuation">.</span>child <span class="token operator">=</span> current<span class="token punctuation">.</span>child<span class="token punctuation">;</span>
  workInProgress<span class="token punctuation">.</span>memoizedProps <span class="token operator">=</span> current<span class="token punctuation">.</span>memoizedProps<span class="token punctuation">;</span>
  workInProgress<span class="token punctuation">.</span>memoizedState <span class="token operator">=</span> current<span class="token punctuation">.</span>memoizedState<span class="token punctuation">;</span>
  workInProgress<span class="token punctuation">.</span>updateQueue <span class="token operator">=</span> current<span class="token punctuation">.</span>updateQueue<span class="token punctuation">;</span>
  workInProgress<span class="token punctuation">.</span>sibling <span class="token operator">=</span> current<span class="token punctuation">.</span>sibling<span class="token punctuation">;</span>
  workInProgress<span class="token punctuation">.</span>index <span class="token operator">=</span> current<span class="token punctuation">.</span>index<span class="token punctuation">;</span>
  workInProgress<span class="token punctuation">.</span>ref <span class="token operator">=</span> current<span class="token punctuation">.</span>ref<span class="token punctuation">;</span>
	
  <span class="token comment">// 返回创建好的 workInProgress Fiber 对象</span>
  <span class="token keyword">return</span> workInProgress<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-1-8-4-workloopsync" tabindex="-1"><a class="header-anchor" href="#_5-1-8-4-workloopsync"><span>5.1.8.4 workLoopSync</span></a></h5><p><code>文件位置: packages/react-reconciler/src/ReactFiberWorkLoop.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">// 以同步的方式构建 workInProgress Fiber 对象</span>
<span class="token keyword">function</span> <span class="token function">workLoopSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// workInProgress 是一个 fiber 对象</span>
  <span class="token comment">// 它的值不为 null 意味着该 fiber 对象上仍然有更新要执行</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>workInProgress <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    workInProgress <span class="token operator">=</span> <span class="token function">performUnitOfWork</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-1-8-5-performunitofwork" tabindex="-1"><a class="header-anchor" href="#_5-1-8-5-performunitofwork"><span>5.1.8.5 performUnitOfWork</span></a></h5><p><code>文件位置: packages/react-reconciler/src/ReactFiberWorkLoop.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">performUnitOfWork</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">unitOfWork</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token comment">// unitOfWork =&gt; workInProgress Fiber 树中的 rootFiber</span>
  <span class="token comment">// current =&gt; currentFiber 树中的 rootFiber</span>
  <span class="token keyword">const</span> current <span class="token operator">=</span> unitOfWork<span class="token punctuation">.</span>alternate<span class="token punctuation">;</span>
  <span class="token comment">// 存储下一个要构建的子级 Fiber 对象</span>
  <span class="token keyword">let</span> next<span class="token punctuation">;</span>
  <span class="token comment">// false</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>enableProfilerTimer <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>unitOfWork<span class="token punctuation">.</span>mode <span class="token operator">&amp;</span> ProfileMode<span class="token punctuation">)</span> <span class="token operator">!==</span> NoMode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 初始渲染 不执行</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// beginWork: 从父到子, 构建 Fiber 节点对象</span>
    <span class="token comment">// 返回值 next 为当前节点的子节点</span>
    next <span class="token operator">=</span> <span class="token function">beginWork</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> unitOfWork<span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 为旧的 props 属性赋值</span>
  <span class="token comment">// 此次更新后 pendingProps 变为 memoizedProps</span>
  unitOfWork<span class="token punctuation">.</span>memoizedProps <span class="token operator">=</span> unitOfWork<span class="token punctuation">.</span>pendingProps<span class="token punctuation">;</span>
  <span class="token comment">// 如果子节点不存在说明当前节点向下遍历子节点已经到底了</span>
  <span class="token comment">// 继续向上返回 遇到兄弟节点 构建兄弟节点的子 Fiber 对象 直到返回到根 Fiber 对象</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 从子到父, 构建其余节点 Fiber 对象</span>
    next <span class="token operator">=</span> <span class="token function">completeUnitOfWork</span><span class="token punctuation">(</span>unitOfWork<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-1-8-6-beginwork" tabindex="-1"><a class="header-anchor" href="#_5-1-8-6-beginwork"><span>5.1.8.6 beginWork</span></a></h5><p><code>文件位置: packages/react-reconciler/src/ReactFiberBeginWork.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">// 从父到子, 构建 Fiber 节点对象</span>
<span class="token keyword">function</span> <span class="token function">beginWork</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">renderExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token comment">// NoWork 常量 值为0 清空过期时间</span>
  workInProgress<span class="token punctuation">.</span>expirationTime <span class="token operator">=</span> NoWork<span class="token punctuation">;</span>
  <span class="token comment">// 根据当前 Fiber 的类型决定如何构建起子级 Fiber 对象</span>
  <span class="token comment">// 文件位置: shared/ReactWorkTags.js</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 2</span>
    <span class="token comment">// 函数型组件在第一次渲染组件时使用</span>
    <span class="token keyword">case</span> <span class="token literal-property property">IndeterminateComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">mountIndeterminateComponent</span><span class="token punctuation">(</span>
        <span class="token comment">// 旧 Fiber</span>
        current<span class="token punctuation">,</span>
        <span class="token comment">// 新 Fiber</span>
        workInProgress<span class="token punctuation">,</span>
        <span class="token comment">// 新 Fiber 的 type 值 初始渲染时是App组件函数</span>
        workInProgress<span class="token punctuation">.</span>type<span class="token punctuation">,</span>
        <span class="token comment">// 同步 整数最大值 1073741823</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 0</span>
    <span class="token keyword">case</span> <span class="token literal-property property">FunctionComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> Component <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type<span class="token punctuation">;</span>
      <span class="token keyword">const</span> unresolvedProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps<span class="token punctuation">;</span>
      <span class="token keyword">const</span> resolvedProps <span class="token operator">=</span>
        workInProgress<span class="token punctuation">.</span>elementType <span class="token operator">===</span> Component
          <span class="token operator">?</span> unresolvedProps
          <span class="token operator">:</span> <span class="token function">resolveDefaultProps</span><span class="token punctuation">(</span>Component<span class="token punctuation">,</span> unresolvedProps<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token function">updateFunctionComponent</span><span class="token punctuation">(</span>
        current<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        Component<span class="token punctuation">,</span>
        resolvedProps<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 1</span>
    <span class="token keyword">case</span> <span class="token literal-property property">ClassComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> Component <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type<span class="token punctuation">;</span>
      <span class="token keyword">const</span> unresolvedProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps<span class="token punctuation">;</span>
      <span class="token keyword">const</span> resolvedProps <span class="token operator">=</span>
        workInProgress<span class="token punctuation">.</span>elementType <span class="token operator">===</span> Component
          <span class="token operator">?</span> unresolvedProps
          <span class="token operator">:</span> <span class="token function">resolveDefaultProps</span><span class="token punctuation">(</span>Component<span class="token punctuation">,</span> unresolvedProps<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token function">updateClassComponent</span><span class="token punctuation">(</span>
        current<span class="token punctuation">,</span>
        workInProgress<span class="token punctuation">,</span>
        Component<span class="token punctuation">,</span>
        resolvedProps<span class="token punctuation">,</span>
        renderExpirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 3</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostRoot</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token function">updateHostRoot</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 5</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostComponent</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token function">updateHostComponent</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 6</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostText</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token function">updateHostText</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 组件类型未知 报错</span>
  <span class="token function">invariant</span><span class="token punctuation">(</span>
    <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Unknown unit of work tag (%s). This error is likely caused by a bug in &#39;</span> <span class="token operator">+</span>
      <span class="token string">&#39;React. Please file an issue.&#39;</span><span class="token punctuation">,</span>
    workInProgress<span class="token punctuation">.</span>tag<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-1-8-7-updatehostroot" tabindex="-1"><a class="header-anchor" href="#_5-1-8-7-updatehostroot"><span>5.1.8.7 updateHostRoot</span></a></h5><p><code>文件位置: packages/react-reconciler/src/ReactFiberBeginWork.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">// HostRoot =&gt; &lt;div id=&quot;root&quot;&gt;&lt;/div&gt; 对应的 Fiber 对象</span>
<span class="token comment">// 找出 HostRoot 的子 ReactElement 并为其构建 Fiber 对象</span>
<span class="token keyword">function</span> <span class="token function">updateHostRoot</span><span class="token punctuation">(</span><span class="token parameter">current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> renderExpirationTime</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取更新队列</span>
  <span class="token keyword">const</span> updateQueue <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>updateQueue<span class="token punctuation">;</span>
  <span class="token comment">// 获取新的 props 对象 null</span>
  <span class="token keyword">const</span> nextProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps<span class="token punctuation">;</span>
  <span class="token comment">// 获取上一次渲染使用的 state null</span>
  <span class="token keyword">const</span> prevState <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>memoizedState<span class="token punctuation">;</span>
  <span class="token comment">// 获取上一次渲染使用的 children null</span>
  <span class="token keyword">const</span> prevChildren <span class="token operator">=</span> prevState <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">?</span> prevState<span class="token punctuation">.</span>element <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token comment">// 浅复制更新队列, 防止引用属性互相影响</span>
  <span class="token comment">// workInProgress.updateQueue 浅拷贝 current.updateQueue</span>
  <span class="token function">cloneUpdateQueue</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 获取 updateQueue.payload 并赋值到 workInProgress.memoizedState</span>
  <span class="token comment">// 要更新的内容就是 element 就是 rootFiber 的子元素</span>
  <span class="token function">processUpdateQueue</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">,</span> nextProps<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 获取 element 所在对象</span>
  <span class="token keyword">const</span> nextState <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>memoizedState<span class="token punctuation">;</span>
  <span class="token comment">// 从对象中获取 element</span>
  <span class="token keyword">const</span> nextChildren <span class="token operator">=</span> nextState<span class="token punctuation">.</span>element<span class="token punctuation">;</span>
  <span class="token comment">// 获取 fiberRoot 对象</span>
  <span class="token keyword">const</span> <span class="token literal-property property">root</span><span class="token operator">:</span> FiberRoot <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>stateNode<span class="token punctuation">;</span>
  <span class="token comment">// 服务器端渲染走 if</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>hydrate <span class="token operator">&amp;&amp;</span> <span class="token function">enterHydrationState</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 忽略</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 客户端渲染走 else</span>
    <span class="token comment">// 构建子节点 fiber 对象</span>
    <span class="token function">reconcileChildren</span><span class="token punctuation">(</span>
      current<span class="token punctuation">,</span>
      workInProgress<span class="token punctuation">,</span>
      nextChildren<span class="token punctuation">,</span>
      renderExpirationTime<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 返回子节点 fiber 对象</span>
  <span class="token keyword">return</span> workInProgress<span class="token punctuation">.</span>child<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-1-8-8-reconcilechildren" tabindex="-1"><a class="header-anchor" href="#_5-1-8-8-reconcilechildren"><span>5.1.8.8 reconcileChildren</span></a></h5><p><code>文件位置: packages/react-reconciler/src/ReactFiberBeginWork.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">reconcileChildren</span><span class="token punctuation">(</span>
  <span class="token comment">// 旧 Fiber</span>
  <span class="token literal-property property">current</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token comment">// 父级 Fiber</span>
  <span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token comment">// 子级 vdom 对象</span>
  <span class="token literal-property property">nextChildren</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  <span class="token comment">// 初始渲染 整型最大值 代表同步任务</span>
  <span class="token literal-property property">renderExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/**
   * 为什么要传递 current ?
   * 如果不是初始渲染的情况, 要进行新旧 Fiber 对比
   * 初始渲染时则用不到 current
   */</span>
  <span class="token comment">// 如果就 Fiber 为 null 表示初始渲染</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 为当前构建的 Fiber 对象添加子级 Fiber 对象</span>
    workInProgress<span class="token punctuation">.</span>child <span class="token operator">=</span> <span class="token function">mountChildFibers</span><span class="token punctuation">(</span>
      workInProgress<span class="token punctuation">,</span>
      <span class="token keyword">null</span><span class="token punctuation">,</span>
      nextChildren<span class="token punctuation">,</span>
      renderExpirationTime<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 忽略了 else 的情况</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-1-8-9-childreconciler" tabindex="-1"><a class="header-anchor" href="#_5-1-8-9-childreconciler"><span>5.1.8.9 ChildReconciler</span></a></h5><p><code>文件位置: packages/react-reconciler/src/ReactChildFiber.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">/**
 * shouldTrackSideEffects 标识, 是否为 Fiber 对象添加 effectTag
 * true 添加 false 不添加
 * 对于初始渲染来说, 只有根组件需要添加, 其他元素不需要添加, 防止过多的 DOM 操作
 */</span>
<span class="token comment">// 用于初始渲染</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> mountChildFibers <span class="token operator">=</span> <span class="token function">ChildReconciler</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">ChildReconciler</span><span class="token punctuation">(</span><span class="token parameter">shouldTrackSideEffects</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 
  <span class="token keyword">function</span> <span class="token function">placeChild</span><span class="token punctuation">(</span>
    <span class="token parameter"><span class="token literal-property property">newFiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
    <span class="token literal-property property">lastPlacedIndex</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
    <span class="token literal-property property">newIndex</span><span class="token operator">:</span> number<span class="token punctuation">,</span></span>
  <span class="token punctuation">)</span><span class="token operator">:</span> number <span class="token punctuation">{</span>
    newFiber<span class="token punctuation">.</span>index <span class="token operator">=</span> newIndex<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>shouldTrackSideEffects<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> lastPlacedIndex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 忽略了一部分初始化渲染不执行的代码</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">placeSingleChild</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">newFiber</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token punctuation">{</span>
    <span class="token comment">// 如果是初始渲染 会在根组件(App)上设置 effectTag 属性为 Placement 值为 1</span>
    <span class="token comment">// 其他子级节点具有默认值为 0 防止在 commit 阶段反复操作真实DOM</span>
    <span class="token comment">// 初始渲染时如果当前处理的是根组件 true 其他组件 false</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>shouldTrackSideEffects <span class="token operator">&amp;&amp;</span> newFiber<span class="token punctuation">.</span>alternate <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Placement 表示新创建的节点</span>
      newFiber<span class="token punctuation">.</span>effectTag <span class="token operator">=</span> Placement<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> newFiber<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 处理子元素是数组的情况</span>
  <span class="token keyword">function</span> <span class="token function">reconcileChildrenArray</span><span class="token punctuation">(</span>
    <span class="token comment">// 父级 Fiber</span>
    <span class="token literal-property property">returnFiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
    <span class="token literal-property property">currentFirstChild</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token comment">// 子级 vdom 数组</span>
    <span class="token literal-property property">newChildren</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span><span class="token operator">*</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">expirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token comment">/**
     * 存储第一个子节点 Fiber 对象
     * 方法返回的也是第一个子节点 Fiber 对象
     * 因为其他子节点 Fiber 对象都存储在上一个子 Fiber 节点对象的 sibling 属性中
     */</span>
    <span class="token keyword">let</span> <span class="token literal-property property">resultingFirstChild</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token comment">// 上一次创建的 Fiber 对象</span>
    <span class="token keyword">let</span> <span class="token literal-property property">previousNewFiber</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token comment">// 初始渲染没有旧的子级 所以为 null</span>
    <span class="token keyword">let</span> oldFiber <span class="token operator">=</span> currentFirstChild<span class="token punctuation">;</span>

    <span class="token keyword">let</span> lastPlacedIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> newIdx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> nextOldFiber <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token comment">// oldFiber 为空 说明是初始渲染</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>oldFiber <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 遍历子 vdom 对象</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> newIdx <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length<span class="token punctuation">;</span> newIdx<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建子 vdom 对应的 fiber 对象</span>
        <span class="token keyword">const</span> newFiber <span class="token operator">=</span> <span class="token function">createChild</span><span class="token punctuation">(</span>
          returnFiber<span class="token punctuation">,</span>
          newChildren<span class="token punctuation">[</span>newIdx<span class="token punctuation">]</span><span class="token punctuation">,</span>
          expirationTime<span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 如果 newFiber 为 null</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newFiber <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 进入下次循环</span>
          <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 初始渲染时只为 newFiber 添加了 index 属性,</span>
        <span class="token comment">// 其他事没干. lastPlacedIndex 被原封不动的返回了</span>
        lastPlacedIndex <span class="token operator">=</span> <span class="token function">placeChild</span><span class="token punctuation">(</span>newFiber<span class="token punctuation">,</span> lastPlacedIndex<span class="token punctuation">,</span> newIdx<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 为当前节点设置下一个兄弟节点</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>previousNewFiber <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 存储第一个子 Fiber 发生在第一次循环时</span>
          resultingFirstChild <span class="token operator">=</span> newFiber<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">// 为节点设置下一个兄弟 Fiber</span>
          previousNewFiber<span class="token punctuation">.</span>sibling <span class="token operator">=</span> newFiber<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 在循环的过程中更新上一个创建的Fiber 对象</span>
        previousNewFiber <span class="token operator">=</span> newFiber<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 返回创建好的子 Fiber</span>
      <span class="token comment">// 其他 Fiber 都作为 sibling 存在</span>
      <span class="token keyword">return</span> resultingFirstChild<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 返回第一个子元素 Fiber 对象</span>
    <span class="token keyword">return</span> resultingFirstChild<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 处理子元素是文本或者数值的情况</span>
  <span class="token keyword">function</span> <span class="token function">reconcileSingleTextNode</span><span class="token punctuation">(</span>
    <span class="token parameter"><span class="token literal-property property">returnFiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
    <span class="token literal-property property">currentFirstChild</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">textContent</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token literal-property property">expirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
  <span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token punctuation">{</span>
    <span class="token comment">// 初始渲染不执行</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentFirstChild <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> currentFirstChild<span class="token punctuation">.</span>tag <span class="token operator">===</span> HostText<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// We already have an existing node so let&#39;s just update it and delete</span>
      <span class="token comment">// the rest.</span>
      <span class="token function">deleteRemainingChildren</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> currentFirstChild<span class="token punctuation">.</span>sibling<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> existing <span class="token operator">=</span> <span class="token function">useFiber</span><span class="token punctuation">(</span>currentFirstChild<span class="token punctuation">,</span> textContent<span class="token punctuation">)</span><span class="token punctuation">;</span>
      existing<span class="token punctuation">.</span>return <span class="token operator">=</span> returnFiber<span class="token punctuation">;</span>
      <span class="token keyword">return</span> existing<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 现有的第一个子节点不是文本节点，因此我们需要创建一个并删除现有的.</span>
    <span class="token comment">// 初始渲染不执行</span>
    <span class="token function">deleteRemainingChildren</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> currentFirstChild<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 根据文本创建 Fiber 对象</span>
    <span class="token keyword">const</span> created <span class="token operator">=</span> <span class="token function">createFiberFromText</span><span class="token punctuation">(</span>
      textContent<span class="token punctuation">,</span>
      returnFiber<span class="token punctuation">.</span>mode<span class="token punctuation">,</span>
      expirationTime<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置父 Fiber 对象</span>
    created<span class="token punctuation">.</span>return <span class="token operator">=</span> returnFiber<span class="token punctuation">;</span>
    <span class="token comment">// 返回创建好的 Fiber 对象</span>
    <span class="token keyword">return</span> created<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 处理子元素是单个对象的情况</span>
  <span class="token keyword">function</span> <span class="token function">reconcileSingleElement</span><span class="token punctuation">(</span>
    <span class="token comment">// 父 Fiber 对象</span>
    <span class="token literal-property property">returnFiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
    <span class="token comment">// 备份子 fiber</span>
    <span class="token literal-property property">currentFirstChild</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token comment">// 子 vdom 对象</span>
    <span class="token literal-property property">element</span><span class="token operator">:</span> ReactElement<span class="token punctuation">,</span>
    <span class="token literal-property property">expirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token punctuation">{</span>
    <span class="token comment">// 查看子 vdom 对象是否表示 fragment</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token constant">REACT_FRAGMENT_TYPE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// false</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 根据 React Element 创建 Fiber 对象</span>
      <span class="token comment">// 返回创建好的 Fiber 对象</span>
      <span class="token keyword">const</span> created <span class="token operator">=</span> <span class="token function">createFiberFromElement</span><span class="token punctuation">(</span>
        element<span class="token punctuation">,</span>
        <span class="token comment">// 用来表示当前组件下的所有子组件要用处于何种渲染模式</span>
        <span class="token comment">// 文件位置: ./ReactTypeOfMode.js</span>
        <span class="token comment">// 0    同步渲染模式</span>
        <span class="token comment">// 100  异步渲染模式</span>
        returnFiber<span class="token punctuation">.</span>mode<span class="token punctuation">,</span>
        expirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 添加 ref 属性 { current: DOM }</span>
      created<span class="token punctuation">.</span>ref <span class="token operator">=</span> <span class="token function">coerceRef</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> currentFirstChild<span class="token punctuation">,</span> element<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 添加父级 Fiber 对象</span>
      created<span class="token punctuation">.</span>return <span class="token operator">=</span> returnFiber<span class="token punctuation">;</span>
      <span class="token comment">// 返回创建好的子 Fiber</span>
      <span class="token keyword">return</span> created<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">reconcileChildFibers</span><span class="token punctuation">(</span>
    <span class="token comment">// 父 Fiber 对象</span>
    <span class="token literal-property property">returnFiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
    <span class="token comment">// 旧的第一个子 Fiber 初始渲染 null</span>
    <span class="token literal-property property">currentFirstChild</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token comment">// 新的子 vdom 对象</span>
    <span class="token literal-property property">newChild</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
    <span class="token comment">// 初始渲染 整型最大值 代表同步任务</span>
    <span class="token literal-property property">expirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这是入口方法, 根据 newChild 类型进行对应处理</span>

    <span class="token comment">// 判断新的子 vdom 是否为占位组件 比如 &lt;&gt;&lt;/&gt;</span>
    <span class="token comment">// false</span>
    <span class="token keyword">const</span> isUnkeyedTopLevelFragment <span class="token operator">=</span>
      <span class="token keyword">typeof</span> newChild <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span>
      newChild <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
      newChild<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token constant">REACT_FRAGMENT_TYPE</span> <span class="token operator">&amp;&amp;</span>
      newChild<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token comment">// 如果 newChild 为占位符, 使用 占位符组件的子元素作为 newChild</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isUnkeyedTopLevelFragment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      newChild <span class="token operator">=</span> newChild<span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 检测 newChild 是否为对象类型</span>
    <span class="token keyword">const</span> isObject <span class="token operator">=</span> <span class="token keyword">typeof</span> newChild <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> newChild <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token comment">// newChild 是单个对象的情况</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 匹配子元素的类型</span>
      <span class="token keyword">switch</span> <span class="token punctuation">(</span>newChild<span class="token punctuation">.</span>$$<span class="token keyword">typeof</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 子元素为 ReactElement</span>
        <span class="token keyword">case</span> <span class="token constant">REACT_ELEMENT_TYPE</span><span class="token operator">:</span>
          <span class="token comment">// 为 Fiber 对象设置 effectTag 属性</span>
          <span class="token comment">// 返回创建好的子 Fiber</span>
          <span class="token keyword">return</span> <span class="token function">placeSingleChild</span><span class="token punctuation">(</span>
            <span class="token comment">// 处理单个 React Element 的情况</span>
            <span class="token comment">// 内部会调用其他方法创建对应的 Fiber 对象</span>
            <span class="token function">reconcileSingleElement</span><span class="token punctuation">(</span>
              returnFiber<span class="token punctuation">,</span>
              currentFirstChild<span class="token punctuation">,</span>
              newChild<span class="token punctuation">,</span>
              expirationTime<span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
      
    <span class="token comment">// 处理 children 为文本和数值的情况 return &quot;App works&quot;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> newChild <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> newChild <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">placeSingleChild</span><span class="token punctuation">(</span>
        <span class="token function">reconcileSingleTextNode</span><span class="token punctuation">(</span>
          returnFiber<span class="token punctuation">,</span>
          currentFirstChild<span class="token punctuation">,</span>
          <span class="token comment">// 如果 newChild 是数值, 转换为字符串</span>
          <span class="token string">&#39;&#39;</span> <span class="token operator">+</span> newChild<span class="token punctuation">,</span>
          expirationTime<span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// children 是数组的情况</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isArray</span><span class="token punctuation">(</span>newChild<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 返回创建好的子 Fiber</span>
      <span class="token keyword">return</span> <span class="token function">reconcileChildrenArray</span><span class="token punctuation">(</span>
        returnFiber<span class="token punctuation">,</span>
        currentFirstChild<span class="token punctuation">,</span>
        newChild<span class="token punctuation">,</span>
        expirationTime<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-1-8-10-completeunitofwork" tabindex="-1"><a class="header-anchor" href="#_5-1-8-10-completeunitofwork"><span>5.1.8.10 completeUnitOfWork</span></a></h5><p><code>文件位置: packages/react-reconciler/src/ReactFiberWorkLoop.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">/**
 *
 * 从下至上移动到该节点的兄弟节点, 如果一直往上没有兄弟节点就返回父节点, 最终会到达 root 节点
 * 1. 创建其他节点的 Fiber 对象
 * 2. 创建每一个节点的真实 DOM 对象并将其添加到 stateNode 属性中
 * 3. 构建 effect 链表结构
 */</span>
<span class="token keyword">function</span> <span class="token function">completeUnitOfWork</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">unitOfWork</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token comment">// 为 workInProgress 全局变量重新赋值</span>
  workInProgress <span class="token operator">=</span> unitOfWork<span class="token punctuation">;</span>
  <span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取备份节点</span>
    <span class="token comment">// 初始化渲染 非根 Fiber 对象没有备份节点 所以 current 为 null</span>
    <span class="token keyword">const</span> current <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>alternate<span class="token punctuation">;</span>
    <span class="token comment">// 父级 Fiber 对象, 非根 Fiber 对象都有父级</span>
    <span class="token keyword">const</span> returnFiber <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>return<span class="token punctuation">;</span>
    <span class="token comment">// 判断传入的 Fiber 对象是否构建完成, 任务调度相关</span>
    <span class="token comment">// &amp; 是表示位的与运算, 把左右两边的数字转化为二进制</span>
    <span class="token comment">// 然后每一位分别进行比较, 如果相等就为1, 不相等即为0</span>
    <span class="token comment">// 此处应用&quot;位与&quot;运算符的目的是&quot;清零&quot;</span>
    <span class="token comment">// true</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>effectTag <span class="token operator">&amp;</span> Incomplete<span class="token punctuation">)</span> <span class="token operator">===</span> NoEffect<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> next<span class="token punctuation">;</span>
      <span class="token comment">// 如果不能使用分析器的 timer, 直接执行 completeWork</span>
      <span class="token comment">// enableProfilerTimer =&gt; true</span>
      <span class="token comment">// 但此处无论条件是否成立都会执行 completeWork</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        <span class="token operator">!</span>enableProfilerTimer <span class="token operator">||</span>
        <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>mode <span class="token operator">&amp;</span> ProfileMode<span class="token punctuation">)</span> <span class="token operator">===</span> NoMode
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 重点代码(二)</span>
        <span class="token comment">// 创建节点真实 DOM 对象并将其添加到 stateNode 属性中</span>
        next <span class="token operator">=</span> <span class="token function">completeWork</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建节点真实 DOM 对象并将其添加到 stateNode 属性中</span>
        next <span class="token operator">=</span> <span class="token function">completeWork</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 重点代码(一)</span>
      <span class="token comment">// 如果子级存在</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 返回子级 一直返回到 workLoopSync</span>
        <span class="token comment">// 再重新执行 performUnitOfWork 构建子级 Fiber 节点对象</span>
        <span class="token keyword">return</span> next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// 构建 effect 链表结构</span>
      <span class="token comment">// 如果不是根 Fiber 就是 true 否则就是 false</span>
      <span class="token comment">// 将子树和此 Fiber 的所有 effect 附加到父级的 effect 列表中</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        <span class="token comment">// 如果父 Fiber 存在 并且</span>
        returnFiber <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
        <span class="token comment">// 父 Fiber 对象中的 effectTag 为 0</span>
        <span class="token punctuation">(</span>returnFiber<span class="token punctuation">.</span>effectTag <span class="token operator">&amp;</span> Incomplete<span class="token punctuation">)</span> <span class="token operator">===</span> NoEffect
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 将子树和此 Fiber 的所有副作用附加到父级的 effect 列表上</span>

        <span class="token comment">// 以下两个判断的作用是搜集子 Fiber的 effect 到父 Fiber</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>returnFiber<span class="token punctuation">.</span>firstEffect <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// first</span>
          returnFiber<span class="token punctuation">.</span>firstEffect <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>firstEffect<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>lastEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>returnFiber<span class="token punctuation">.</span>lastEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// next</span>
            returnFiber<span class="token punctuation">.</span>lastEffect<span class="token punctuation">.</span>nextEffect <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>firstEffect<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token comment">// last</span>
          returnFiber<span class="token punctuation">.</span>lastEffect <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>lastEffect<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 获取副作用标记</span>
        <span class="token comment">// 初始渲染时除[根组件]以外的 Fiber, effectTag 值都为 0, 即不需要执行任何真实DOM操作</span>
        <span class="token comment">// 根组件的 effectTag 值为 3, 即需要将此节点对应的真实DOM对象添加到页面中</span>
        <span class="token keyword">const</span> effectTag <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>effectTag<span class="token punctuation">;</span>

        <span class="token comment">// 创建 effect 列表时跳过 NoWork(0) 和 PerformedWork(1) 标记</span>
        <span class="token comment">// PerformedWork 由 React DevTools 读取, 不提交</span>
        <span class="token comment">// 初始渲染时 只有遍历到了根组件 判断条件才能成立, 将 effect 链表添加到 rootFiber</span>
        <span class="token comment">// 初始渲染 FiberRoot 对象中的 firstEffect 和 lastEffect 都是 App 组件</span>
        <span class="token comment">// 因为当所有节点在内存中构建完成后, 只需要一次将所有 DOM 添加到页面中</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>effectTag <span class="token operator">&gt;</span> PerformedWork<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// false</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>returnFiber<span class="token punctuation">.</span>lastEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            returnFiber<span class="token punctuation">.</span>lastEffect<span class="token punctuation">.</span>nextEffect <span class="token operator">=</span> workInProgress<span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 为 fiberRoot 添加 firstEffect</span>
            returnFiber<span class="token punctuation">.</span>firstEffect <span class="token operator">=</span> workInProgress<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token comment">// 为 fiberRoot 添加 lastEffect</span>
          returnFiber<span class="token punctuation">.</span>lastEffect <span class="token operator">=</span> workInProgress<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    	<span class="token comment">// 忽略了初始渲染不执行的代码      </span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 获取下一个同级 Fiber 对象</span>
    <span class="token keyword">const</span> siblingFiber <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>sibling<span class="token punctuation">;</span>
    <span class="token comment">// 如果下一个同级 Fiber 对象存在</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>siblingFiber <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 返回下一个同级 Fiber 对象</span>
      <span class="token keyword">return</span> siblingFiber<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 否则退回父级</span>
    workInProgress <span class="token operator">=</span> returnFiber<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>workInProgress <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 当执行到这里的时候, 说明遍历到了 root 节点, 已完成遍历</span>
  <span class="token comment">// 更新 workInProgressRootExitStatus 的状态为 已完成</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>workInProgressRootExitStatus <span class="token operator">===</span> RootIncomplete<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    workInProgressRootExitStatus <span class="token operator">=</span> RootCompleted<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-1-8-11-completework" tabindex="-1"><a class="header-anchor" href="#_5-1-8-11-completework"><span>5.1.8.11 completeWork</span></a></h5><p><code>文件位置: packages/react-reconciler/src/ReactFiberCompleteWork.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">completeWork</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">renderExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取待更新 props</span>
  <span class="token keyword">const</span> newProps <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>pendingProps<span class="token punctuation">;</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 0</span>
    <span class="token keyword">case</span> <span class="token literal-property property">FunctionComponent</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token comment">// 3</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostRoot</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">updateHostContainer</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 5</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 获取 rootDOM 节点 &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;</span>
      <span class="token keyword">const</span> rootContainerInstance <span class="token operator">=</span> <span class="token function">getRootHostContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 节点的具体的类型 div span ...</span>
      <span class="token keyword">const</span> type <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>type<span class="token punctuation">;</span>
      <span class="token comment">// false current = null</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> workInProgress<span class="token punctuation">.</span>stateNode <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token comment">// 初始渲染不执行</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				<span class="token comment">// false</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>wasHydrated<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token comment">// 初始渲染不执行</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">// 创建节点实例对象 &lt;div&gt;&lt;/div&gt; &lt;span&gt;&lt;/span&gt;</span>
          <span class="token keyword">let</span> instance <span class="token operator">=</span> <span class="token function">createInstance</span><span class="token punctuation">(</span>
            type<span class="token punctuation">,</span>
            newProps<span class="token punctuation">,</span>
            rootContainerInstance<span class="token punctuation">,</span>
            currentHostContext<span class="token punctuation">,</span>
            workInProgress<span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token comment">/**
           * 将所有的子级追加到父级中
           * instance 为父级
           * workInProgress.child 为子级
           */</span>
          <span class="token function">appendAllChildren</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> workInProgress<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token comment">// 为 Fiber 对象添加 stateNode 属性</span>
          workInProgress<span class="token punctuation">.</span>stateNode <span class="token operator">=</span> instance<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 处理 ref DOM 引用</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>ref <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">markRef</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> 
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-1-8-12-appendallchildren" tabindex="-1"><a class="header-anchor" href="#_5-1-8-12-appendallchildren"><span>5.1.8.12 appendAllChildren</span></a></h5><p><code>文件位置: packages/react-reconciler/src/ReactFiberCompleteWork.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token function-variable function">appendAllChildren</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>
    <span class="token parameter"><span class="token literal-property property">parent</span><span class="token operator">:</span> Instance<span class="token punctuation">,</span>
    <span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
    <span class="token literal-property property">needsVisibilityToggle</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
    <span class="token literal-property property">isHidden</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span></span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取子级</span>
    <span class="token keyword">let</span> node <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>child<span class="token punctuation">;</span>
    <span class="token comment">// 如果子级不为空 执行循环</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>node <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果 node 是普通 ReactElement 或者为文本</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>tag <span class="token operator">===</span> HostComponent <span class="token operator">||</span> node<span class="token punctuation">.</span>tag <span class="token operator">===</span> HostText<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 将子级追加到父级中</span>
        <span class="token function">appendInitialChild</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> node<span class="token punctuation">.</span>stateNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>child <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果 node 不是普通 ReactElement 又不是文本</span>
        <span class="token comment">// 将 node 视为组件, 组件本身不能转换为真实 DOM 元素</span>
        <span class="token comment">// 获取到组件的第一个子元素, 继续执行循环</span>
        node<span class="token punctuation">.</span>child<span class="token punctuation">.</span>return <span class="token operator">=</span> node<span class="token punctuation">;</span>
        node <span class="token operator">=</span> node<span class="token punctuation">.</span>child<span class="token punctuation">;</span>
        <span class="token keyword">continue</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 如果 node 和 workInProgress 是同一个节点</span>
      <span class="token comment">// 说明 node 已经退回到父级 终止循环</span>
      <span class="token comment">// 说明此时所有子级都已经追加到父级中了</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">===</span> workInProgress<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 处理子级节点的兄弟节点</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>sibling <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果节点没有父级或者节点的父级是自己, 退出循环</span>
        <span class="token comment">// 说明此时所有子级都已经追加到父级中了</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>return <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> node<span class="token punctuation">.</span>return <span class="token operator">===</span> workInProgress<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 更新 node</span>
        node <span class="token operator">=</span> node<span class="token punctuation">.</span>return<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 更新父级 方便回退</span>
      node<span class="token punctuation">.</span>sibling<span class="token punctuation">.</span>return <span class="token operator">=</span> node<span class="token punctuation">.</span>return<span class="token punctuation">;</span>
      <span class="token comment">// 将 node 更新为下一个兄弟节点</span>
      node <span class="token operator">=</span> node<span class="token punctuation">.</span>sibling<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-commit-阶段" tabindex="-1"><a class="header-anchor" href="#_5-2-commit-阶段"><span>5.2 commit 阶段</span></a></h3><h4 id="_5-2-1-finishsyncrender" tabindex="-1"><a class="header-anchor" href="#_5-2-1-finishsyncrender"><span>5.2.1 finishSyncRender</span></a></h4><p><code>文件位置: packages/react-reconciler/src/ReactFiberWorkLoop.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">finishSyncRender</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 销毁 workInProgress Fiber 树</span>
  <span class="token comment">// 因为待提交 Fiber 对象已经被存储在了 root.finishedWork 中</span>
  workInProgressRoot <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token comment">// 进入 commit 阶段</span>
  <span class="token function">commitRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-2-commitroot" tabindex="-1"><a class="header-anchor" href="#_5-2-2-commitroot"><span>5.2.2 commitRoot</span></a></h4><p><code>文件位置: packages/react-reconciler/src/ReactFiberWorkLoop.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">commitRoot</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取任务优先级 97 =&gt; 普通优先级</span>
  <span class="token keyword">const</span> renderPriorityLevel <span class="token operator">=</span> <span class="token function">getCurrentPriorityLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 使用最高优先级执行当前任务, 因为 commit 阶段不可以被打断</span>
  <span class="token comment">// ImmediatePriority, 优先级为 99, 最高优先级</span>
  <span class="token function">runWithPriority</span><span class="token punctuation">(</span>
    ImmediatePriority<span class="token punctuation">,</span>
    <span class="token function">commitRootImpl</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> root<span class="token punctuation">,</span> renderPriorityLevel<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-3-commitrootimpl" tabindex="-1"><a class="header-anchor" href="#_5-2-3-commitrootimpl"><span>5.2.3 commitRootImpl</span></a></h4><p>commit 阶段可以分为三个子阶段：</p><ul><li>before mutation 阶段（执行 DOM 操作前）</li><li>mutation 阶段（执行 DOM 操作）</li><li>layout 阶段（执行 DOM 操作后）</li></ul><p><code>文件位置: packages/react-reconciler/src/ReactFiberWorkLoop.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">commitRootImpl</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> renderPriorityLevel</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取待提交 Fiber 对象 rootFiber</span>
  <span class="token keyword">const</span> finishedWork <span class="token operator">=</span> root<span class="token punctuation">.</span>finishedWork<span class="token punctuation">;</span>
  <span class="token comment">// 如果没有任务要执行</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>finishedWork <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 阻止程序继续向下执行</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 重置为默认值</span>
  root<span class="token punctuation">.</span>finishedWork <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  root<span class="token punctuation">.</span>callbackNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  root<span class="token punctuation">.</span>callbackExpirationTime <span class="token operator">=</span> NoWork<span class="token punctuation">;</span>
  root<span class="token punctuation">.</span>callbackPriority <span class="token operator">=</span> NoPriority<span class="token punctuation">;</span>
  root<span class="token punctuation">.</span>nextKnownPendingLevel <span class="token operator">=</span> NoWork<span class="token punctuation">;</span>
  
  <span class="token comment">// 获取要执行 DOM 操作的副作用列表</span>
  <span class="token keyword">let</span> firstEffect <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>firstEffect<span class="token punctuation">;</span>

  <span class="token comment">// true</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>firstEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// commit 第一个子阶段</span>
    nextEffect <span class="token operator">=</span> firstEffect<span class="token punctuation">;</span>
    <span class="token comment">// 处理类组件的 getSnapShotBeforeUpdate 生命周期函数</span>
    <span class="token keyword">do</span> <span class="token punctuation">{</span>
      <span class="token function">invokeGuardedCallback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> commitBeforeMutationEffects<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
		<span class="token comment">// commit 第二个子阶段</span>
    nextEffect <span class="token operator">=</span> firstEffect<span class="token punctuation">;</span>
    <span class="token keyword">do</span> <span class="token punctuation">{</span>
      <span class="token function">invokeGuardedCallback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> commitMutationEffects<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> root<span class="token punctuation">,</span> renderPriorityLevel<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 将 workInProgress Fiber 树变成 current Fiber 树</span>
    root<span class="token punctuation">.</span>current <span class="token operator">=</span> finishedWork<span class="token punctuation">;</span>
    
		<span class="token comment">// commit 第三个子阶段</span>
    nextEffect <span class="token operator">=</span> firstEffect<span class="token punctuation">;</span>
    <span class="token keyword">do</span> <span class="token punctuation">{</span>
      <span class="token function">invokeGuardedCallback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> commitLayoutEffects<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> root<span class="token punctuation">,</span>expirationTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
    <span class="token comment">// 重置 nextEffect</span>
    nextEffect <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-4-第一子阶段" tabindex="-1"><a class="header-anchor" href="#_5-2-4-第一子阶段"><span>5.2.4 第一子阶段</span></a></h4><h5 id="_5-2-4-1-commitbeforemutationeffects" tabindex="-1"><a class="header-anchor" href="#_5-2-4-1-commitbeforemutationeffects"><span>5.2.4.1 commitBeforeMutationEffects</span></a></h5><p><code>文件位置: packages/react-reconciler/src/ReactFiberWorkLoop.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">// commit 阶段的第一个子阶段</span>
<span class="token comment">// 调用类组件的 getSnapshotBeforeUpdate 生命周期函数</span>
<span class="token keyword">function</span> <span class="token function">commitBeforeMutationEffects</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 循环 effect 链</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// nextEffect 是 effect 链上从 firstEffect 到 lastEffec 的每一个需要commit的 fiber 对象</span>

    <span class="token comment">// 初始化渲染第一个 nextEffect 为 App 组件</span>
    <span class="token comment">// effectTag =&gt; 3</span>
    <span class="token keyword">const</span> effectTag <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>effectTag<span class="token punctuation">;</span>
    <span class="token comment">// console.log(effectTag);</span>
    <span class="token comment">// nextEffect = null;</span>
    <span class="token comment">// return;</span>

    <span class="token comment">// 如果 fiber 对象中里有 Snapshot 这个 effectTag 的话</span>
    <span class="token comment">// Snapshot 和更新有关系 初始化渲染 不执行</span>
    <span class="token comment">// false</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>effectTag <span class="token operator">&amp;</span> Snapshot<span class="token punctuation">)</span> <span class="token operator">!==</span> NoEffect<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 获取当前 fiber 节点</span>
      <span class="token keyword">const</span> current <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>alternate<span class="token punctuation">;</span>
      <span class="token comment">// 当 nextEffect 上有 Snapshot 这个 effectTag 时</span>
      <span class="token comment">// 执行以下方法, 主要是类组件调用 getSnapshotBeforeUpdate 生命周期函数</span>
      <span class="token function">commitBeforeMutationEffectOnFiber</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> nextEffect<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 更新循环条件</span>
    nextEffect <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>nextEffect<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-2-4-2-commitbeforemutationlifecycles" tabindex="-1"><a class="header-anchor" href="#_5-2-4-2-commitbeforemutationlifecycles"><span>5.2.4.2 commitBeforeMutationLifeCycles</span></a></h5><p><code>文件位置: packages/react-reconciler/src/ReactFiberCommitWork.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">commitBeforeMutationLifeCycles</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">finishedWork</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token literal-property property">FunctionComponent</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">ForwardRef</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">SimpleMemoComponent</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">Block</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果该 fiber 类型是 ClassComponent</span>
    <span class="token keyword">case</span> <span class="token literal-property property">ClassComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>effectTag <span class="token operator">&amp;</span> Snapshot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 旧的 props</span>
          <span class="token keyword">const</span> prevProps <span class="token operator">=</span> current<span class="token punctuation">.</span>memoizedProps<span class="token punctuation">;</span>
          <span class="token comment">// 旧的 state</span>
          <span class="token keyword">const</span> prevState <span class="token operator">=</span> current<span class="token punctuation">.</span>memoizedState<span class="token punctuation">;</span>
          <span class="token comment">// 获取 classComponent 组件的实例对象</span>
          <span class="token keyword">const</span> instance <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>stateNode<span class="token punctuation">;</span>
          <span class="token comment">// 执行 getSnapshotBeforeUpdate 生命周期函数</span>
          <span class="token comment">// 在组件更新前捕获一些 DOM 信息</span>
          <span class="token comment">// 返回自定义的值或 null, 统称为 snapshot</span>
          <span class="token keyword">const</span> snapshot <span class="token operator">=</span> instance<span class="token punctuation">.</span><span class="token function">getSnapshotBeforeUpdate</span><span class="token punctuation">(</span>
            finishedWork<span class="token punctuation">.</span>elementType <span class="token operator">===</span> finishedWork<span class="token punctuation">.</span>type
              <span class="token operator">?</span> prevProps
              <span class="token operator">:</span> <span class="token function">resolveDefaultProps</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>type<span class="token punctuation">,</span> prevProps<span class="token punctuation">)</span><span class="token punctuation">,</span>
            prevState<span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostRoot</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostComponent</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostText</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostPortal</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token literal-property property">IncompleteClassComponent</span><span class="token operator">:</span>
      <span class="token comment">// Nothing to do for these component types</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-5-第二子阶段" tabindex="-1"><a class="header-anchor" href="#_5-2-5-第二子阶段"><span>5.2.5 第二子阶段</span></a></h4><h5 id="_5-2-5-1-commitmutationeffects" tabindex="-1"><a class="header-anchor" href="#_5-2-5-1-commitmutationeffects"><span>5.2.5.1 commitMutationEffects</span></a></h5><p><code>文件位置: packages/react-reconciler/src/ReactFiberWorkLoop.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">// commit 阶段的第二个子阶段</span>
<span class="token comment">// 根据 effectTag 执行 DOM 操作</span>
<span class="token keyword">function</span> <span class="token function">commitMutationEffects</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">root</span><span class="token operator">:</span> FiberRoot<span class="token punctuation">,</span> renderPriorityLevel</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 循环 effect 链</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取 effectTag</span>
    <span class="token comment">// 初始渲染第一次循环为 App 组件</span>
    <span class="token comment">// 即将根组件及内部所有内容一次性添加到页面中</span>
    <span class="token keyword">const</span> effectTag <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>effectTag<span class="token punctuation">;</span>

    <span class="token comment">// 根据 effectTag 分别处理</span>
    <span class="token keyword">let</span> primaryEffectTag <span class="token operator">=</span>
      effectTag <span class="token operator">&amp;</span> <span class="token punctuation">(</span>Placement <span class="token operator">|</span> Update <span class="token operator">|</span> Deletion <span class="token operator">|</span> Hydrating<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 匹配 effectTag</span>
    <span class="token comment">// 初始渲染 primaryEffectTag 为 2 匹配到 Placement</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>primaryEffectTag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 针对该节点及子节点进行插入操作</span>
      <span class="token keyword">case</span> <span class="token literal-property property">Placement</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">commitPlacement</span><span class="token punctuation">(</span>nextEffect<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// effectTag 从 3 变为 1</span>
        <span class="token comment">// 从 effect 标签中清除 &quot;placement&quot; 重置 effectTag 值</span>
        <span class="token comment">// 以便我们知道在调用诸如componentDidMount之类的任何生命周期之前已将其插入。</span>
        nextEffect<span class="token punctuation">.</span>effectTag <span class="token operator">&amp;=</span> <span class="token operator">~</span>Placement<span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 插入并更新 DOM</span>
      <span class="token keyword">case</span> <span class="token literal-property property">PlacementAndUpdate</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 插入</span>
        <span class="token function">commitPlacement</span><span class="token punctuation">(</span>nextEffect<span class="token punctuation">)</span><span class="token punctuation">;</span>
        nextEffect<span class="token punctuation">.</span>effectTag <span class="token operator">&amp;=</span> <span class="token operator">~</span>Placement<span class="token punctuation">;</span>

        <span class="token comment">// 更新</span>
        <span class="token keyword">const</span> current <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>alternate<span class="token punctuation">;</span>
        <span class="token function">commitWork</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> nextEffect<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 服务器端渲染</span>
      <span class="token keyword">case</span> <span class="token literal-property property">Hydrating</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        nextEffect<span class="token punctuation">.</span>effectTag <span class="token operator">&amp;=</span> <span class="token operator">~</span>Hydrating<span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 服务器端渲染</span>
      <span class="token keyword">case</span> <span class="token literal-property property">HydratingAndUpdate</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        nextEffect<span class="token punctuation">.</span>effectTag <span class="token operator">&amp;=</span> <span class="token operator">~</span>Hydrating<span class="token punctuation">;</span>

        <span class="token comment">// Update</span>
        <span class="token keyword">const</span> current <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>alternate<span class="token punctuation">;</span>
        <span class="token function">commitWork</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> nextEffect<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 更新 DOM</span>
      <span class="token keyword">case</span> <span class="token literal-property property">Update</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> current <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>alternate<span class="token punctuation">;</span>
        <span class="token function">commitWork</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> nextEffect<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 删除 DOM</span>
      <span class="token keyword">case</span> <span class="token literal-property property">Deletion</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">commitDeletion</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> nextEffect<span class="token punctuation">,</span> renderPriorityLevel<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    nextEffect <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>nextEffect<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-2-5-2-commitplacement" tabindex="-1"><a class="header-anchor" href="#_5-2-5-2-commitplacement"><span>5.2.5.2 commitPlacement</span></a></h5><p><code>文件位置: packages/react-reconciler/src/ReactFiberCommitWork.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">// 挂载 DOM 元素</span>
<span class="token keyword">function</span> <span class="token function">commitPlacement</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">finishedWork</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token comment">// finishedWork 初始化渲染时为根组件 Fiber 对象</span>
  <span class="token comment">// 获取非组件父级 Fiber 对象</span>
  <span class="token comment">// 初始渲染时为 &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;</span>
  <span class="token keyword">const</span> parentFiber <span class="token operator">=</span> <span class="token function">getHostParentFiber</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 存储真正的父级 DOM 节点对象</span>
  <span class="token keyword">let</span> parent<span class="token punctuation">;</span>
  <span class="token comment">// 是否为渲染容器</span>
  <span class="token comment">// 渲染容器和普通react元素的主要区别在于是否需要特殊处理注释节点</span>
  <span class="token keyword">let</span> isContainer<span class="token punctuation">;</span>
  <span class="token comment">// 获取父级 DOM 节点对象</span>
  <span class="token comment">// 但是初始渲染时 rootFiber 对象中的 stateNode 存储的是 FiberRoot</span>
  <span class="token keyword">const</span> parentStateNode <span class="token operator">=</span> parentFiber<span class="token punctuation">.</span>stateNode<span class="token punctuation">;</span>
  <span class="token comment">// 判断父节点的类型</span>
  <span class="token comment">// 初始渲染时是 hostRoot 3</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>parentFiber<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostComponent</span><span class="token operator">:</span>
      parent <span class="token operator">=</span> parentStateNode<span class="token punctuation">;</span>
      isContainer <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostRoot</span><span class="token operator">:</span>
      <span class="token comment">// 获取真正的 DOM 节点对象</span>
      <span class="token comment">// &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;</span>
      parent <span class="token operator">=</span> parentStateNode<span class="token punctuation">.</span>containerInfo<span class="token punctuation">;</span>
      <span class="token comment">// 是 container 容器</span>
      isContainer <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token literal-property property">HostPortal</span><span class="token operator">:</span>
      parent <span class="token operator">=</span> parentStateNode<span class="token punctuation">.</span>containerInfo<span class="token punctuation">;</span>
      isContainer <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token literal-property property">FundamentalComponent</span><span class="token operator">:</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>enableFundamentalAPI<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        parent <span class="token operator">=</span> parentStateNode<span class="token punctuation">.</span>instance<span class="token punctuation">;</span>
        isContainer <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 查看当前节点是否有下一个兄弟节点</span>
  <span class="token comment">// 有, 执行 insertBefore</span>
  <span class="token comment">// 没有, 执行 appendChild</span>
  <span class="token keyword">const</span> before <span class="token operator">=</span> <span class="token function">getHostSibling</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 渲染容器</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isContainer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 向父节点中追加节点 或者 将子节点插入到 before 节点的前面</span>
    <span class="token function">insertOrAppendPlacementNodeIntoContainer</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">,</span> before<span class="token punctuation">,</span> parent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 非渲染容器</span>
    <span class="token comment">// 向父节点中追加节点 或者 将子节点插入到 before 节点的前面</span>
    <span class="token function">insertOrAppendPlacementNode</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">,</span> before<span class="token punctuation">,</span> parent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-2-5-3-gethostparentfiber" tabindex="-1"><a class="header-anchor" href="#_5-2-5-3-gethostparentfiber"><span>5.2.5.3 getHostParentFiber</span></a></h5><p><code>文件位置: packages/react-reconciler/src/ReactFiberCommitWork.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">// 获取 HostRootFiber 对象</span>
<span class="token keyword">function</span> <span class="token function">getHostParentFiber</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">fiber</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token punctuation">{</span>
  <span class="token comment">// 获取当前 Fiber 父级</span>
  <span class="token keyword">let</span> parent <span class="token operator">=</span> fiber<span class="token punctuation">.</span>return<span class="token punctuation">;</span>
  <span class="token comment">// 查看父级是否为 null</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>parent <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 查看父级是否为 hostRoot</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isHostParent</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 返回</span>
      <span class="token keyword">return</span> parent<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 继续向上查找</span>
    parent <span class="token operator">=</span> parent<span class="token punctuation">.</span>return<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-2-5-4-insertorappendplacementnodeintocontainer" tabindex="-1"><a class="header-anchor" href="#_5-2-5-4-insertorappendplacementnodeintocontainer"><span>5.2.5.4 insertOrAppendPlacementNodeIntoContainer</span></a></h5><p><code>文件位置: packages/react-reconciler/src/ReactFiberCommitWork.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">// 向容器中追加 | 插入到某一个节点的前面</span>
<span class="token keyword">function</span> <span class="token function">insertOrAppendPlacementNodeIntoContainer</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">node</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">before</span><span class="token operator">:</span> <span class="token operator">?</span>Instance<span class="token punctuation">,</span>
  <span class="token literal-property property">parent</span><span class="token operator">:</span> Container<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>tag<span class="token punctuation">}</span> <span class="token operator">=</span> node<span class="token punctuation">;</span>
  <span class="token comment">// 如果待插入的节点是一个 DOM 元素或者文本的话</span>
  <span class="token comment">// 比如 组件fiber =&gt; false div =&gt; true</span>
  <span class="token keyword">const</span> isHost <span class="token operator">=</span> tag <span class="token operator">===</span> HostComponent <span class="token operator">||</span> tag <span class="token operator">===</span> HostText<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>isHost <span class="token operator">||</span> <span class="token punctuation">(</span>enableFundamentalAPI <span class="token operator">&amp;&amp;</span> tag <span class="token operator">===</span> FundamentalComponent<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取 DOM 节点</span>
    <span class="token keyword">const</span> stateNode <span class="token operator">=</span> isHost <span class="token operator">?</span> node<span class="token punctuation">.</span>stateNode <span class="token operator">:</span> node<span class="token punctuation">.</span>stateNode<span class="token punctuation">.</span>instance<span class="token punctuation">;</span>
    <span class="token comment">// 如果 before 存在</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>before<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 插入到 before 前面</span>
      <span class="token function">insertInContainerBefore</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> stateNode<span class="token punctuation">,</span> before<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 追加到父容器中</span>
      <span class="token function">appendChildToContainer</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> stateNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果是组件节点, 比如 ClassComponent, 则找它的第一个子节点(DOM 元素)</span>
    <span class="token comment">// 进行插入操作</span>
    <span class="token keyword">const</span> child <span class="token operator">=</span> node<span class="token punctuation">.</span>child<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>child <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 向父级中追加子节点或者将子节点插入到 before 的前面</span>
      <span class="token function">insertOrAppendPlacementNodeIntoContainer</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> before<span class="token punctuation">,</span> parent<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 获取下一个兄弟节点</span>
      <span class="token keyword">let</span> sibling <span class="token operator">=</span> child<span class="token punctuation">.</span>sibling<span class="token punctuation">;</span>
      <span class="token comment">// 如果兄弟节点存在</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>sibling <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 向父级中追加子节点或者将子节点插入到 before 的前面</span>
        <span class="token function">insertOrAppendPlacementNodeIntoContainer</span><span class="token punctuation">(</span>sibling<span class="token punctuation">,</span> before<span class="token punctuation">,</span> parent<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 同步兄弟节点</span>
        sibling <span class="token operator">=</span> sibling<span class="token punctuation">.</span>sibling<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-2-5-5-insertincontainerbefore" tabindex="-1"><a class="header-anchor" href="#_5-2-5-5-insertincontainerbefore"><span>5.2.5.5 insertInContainerBefore</span></a></h5><p><code>文件位置: packages/react-dom/src/client/ReactDOMHostConfig.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">insertInContainerBefore</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">container</span><span class="token operator">:</span> Container<span class="token punctuation">,</span>
  <span class="token literal-property property">child</span><span class="token operator">:</span> Instance <span class="token operator">|</span> TextInstance<span class="token punctuation">,</span>
  <span class="token literal-property property">beforeChild</span><span class="token operator">:</span> Instance <span class="token operator">|</span> TextInstance <span class="token operator">|</span> SuspenseInstance<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token comment">// 如果父容器是注释节点</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>container<span class="token punctuation">.</span>nodeType <span class="token operator">===</span> <span class="token constant">COMMENT_NODE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 找到注释节点的父级节点 因为注释节点没法调用 insertBefore</span>
    <span class="token punctuation">(</span>container<span class="token punctuation">.</span>parentNode<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> beforeChild<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将 child 插入到 beforeChild 的前面</span>
    container<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> beforeChild<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-2-5-6-appendchildtocontainer" tabindex="-1"><a class="header-anchor" href="#_5-2-5-6-appendchildtocontainer"><span>5.2.5.6 appendChildToContainer</span></a></h5><p><code>文件位置: packages/react-dom/src/client/ReactDOMHostConfig.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">appendChildToContainer</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">container</span><span class="token operator">:</span> Container<span class="token punctuation">,</span>
  <span class="token literal-property property">child</span><span class="token operator">:</span> Instance <span class="token operator">|</span> TextInstance<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token comment">// 监测 container 是否注释节点</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>container<span class="token punctuation">.</span>nodeType <span class="token operator">===</span> <span class="token constant">COMMENT_NODE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取父级的父级</span>
    parentNode <span class="token operator">=</span> <span class="token punctuation">(</span>container<span class="token punctuation">.</span>parentNode<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 将子级节点插入到注释节点的前面</span>
    parentNode<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 直接将 child 插入到父级中</span>
    parentNode <span class="token operator">=</span> container<span class="token punctuation">;</span>
    parentNode<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-6-第三子阶段" tabindex="-1"><a class="header-anchor" href="#_5-2-6-第三子阶段"><span>5.2.6 第三子阶段</span></a></h4><h5 id="_5-2-6-1-commitlayouteffects" tabindex="-1"><a class="header-anchor" href="#_5-2-6-1-commitlayouteffects"><span>5.2.6.1 commitLayoutEffects</span></a></h5><p><code>文件位置: packages/react-reconciler/src/ReactFiberWorkLoop.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">// commit 阶段的第三个子阶段</span>
<span class="token keyword">function</span> <span class="token function">commitLayoutEffects</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">root</span><span class="token operator">:</span> FiberRoot<span class="token punctuation">,</span>
  <span class="token literal-property property">committedExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>nextEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 此时 effectTag 已经被重置为 1, 表示 DOM 操作已经完成</span>
    <span class="token keyword">const</span> effectTag <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>effectTag<span class="token punctuation">;</span>
    <span class="token comment">// 调用生命周期函数和钩子函数</span>
    <span class="token comment">// 前提是类组件中调用了生命周期函数 或者函数组件中调用了 useEffect</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>effectTag <span class="token operator">&amp;</span> <span class="token punctuation">(</span>Update <span class="token operator">|</span> Callback<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 类组件处理生命周期函数</span>
      <span class="token comment">// 函数组件处理钩子函数</span>
      <span class="token function">commitLayoutEffectOnFiber</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> current<span class="token punctuation">,</span>nextEffect<span class="token punctuation">,</span> committedExpirationTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 更新循环条件</span>
    nextEffect <span class="token operator">=</span> nextEffect<span class="token punctuation">.</span>nextEffect<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-2-6-2-commitlifecycles" tabindex="-1"><a class="header-anchor" href="#_5-2-6-2-commitlifecycles"><span>5.2.6.2 commitLifeCycles</span></a></h5><p><code>文件位置: packages/react-reconciler/src/ReactFiberCommitWork.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">commitLifeCycles</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">finishedRoot</span><span class="token operator">:</span> FiberRoot<span class="token punctuation">,</span>
  <span class="token literal-property property">current</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">finishedWork</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">committedExpirationTime</span><span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token literal-property property">FunctionComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 处理钩子函数</span>
      <span class="token function">commitHookEffectListMount</span><span class="token punctuation">(</span>HookLayout <span class="token operator">|</span> HookHasEffect<span class="token punctuation">,</span> finishedWork<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">ClassComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 获取类组件实例对象</span>
      <span class="token keyword">const</span> instance <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>stateNode<span class="token punctuation">;</span>
      <span class="token comment">// 如果在类组件中存在生命周期函数判断条件就会成立</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>effectTag <span class="token operator">&amp;</span> Update<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 初始渲染阶段</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 调用 componentDidMount 生命周期函数</span>
          instance<span class="token punctuation">.</span><span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">// 更新阶段</span>
          <span class="token comment">// 获取旧的 props</span>
          <span class="token keyword">const</span> prevProps <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>elementType <span class="token operator">===</span> finishedWork<span class="token punctuation">.</span>type
              <span class="token operator">?</span> current<span class="token punctuation">.</span>memoizedProps
              <span class="token operator">:</span> <span class="token function">resolveDefaultProps</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>type<span class="token punctuation">,</span> current<span class="token punctuation">.</span>memoizedProps<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token comment">// 获取旧的 state</span>
          <span class="token keyword">const</span> prevState <span class="token operator">=</span> current<span class="token punctuation">.</span>memoizedState<span class="token punctuation">;</span>
          <span class="token comment">// 调用 componentDidUpdate 生命周期函数</span>
          <span class="token comment">// instance.__reactInternalSnapshotBeforeUpdate 快照 getSnapShotBeforeUpdate 方法的返回值</span>
          instance<span class="token punctuation">.</span><span class="token function">componentDidUpdate</span><span class="token punctuation">(</span>prevProps<span class="token punctuation">,</span> prevState<span class="token punctuation">,</span> instance<span class="token punctuation">.</span>__reactInternalSnapshotBeforeUpdate<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 获取任务队列</span>
      <span class="token keyword">const</span> updateQueue <span class="token operator">=</span> finishedWork<span class="token punctuation">.</span>updateQueue<span class="token punctuation">;</span>
      <span class="token comment">// 如果任务队列存在</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>updateQueue <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/**
         * 调用 ReactElement 渲染完成之后的回调函数
         * 即 render 方法的第三个参数
         */</span>
        <span class="token function">commitUpdateQueue</span><span class="token punctuation">(</span>finishedWork<span class="token punctuation">,</span> updateQueue<span class="token punctuation">,</span> instance<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-2-6-3-commitupdatequeue" tabindex="-1"><a class="header-anchor" href="#_5-2-6-3-commitupdatequeue"><span>5.2.6.3 commitUpdateQueue</span></a></h5><p><code>文件位置: packages/react-reconciler/src/ReactUpdateQueue.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">/**
 * 执行渲染完成之后的回调函数
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> commitUpdateQueue<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">State</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">(
  finishedWork: Fiber,
  finishedQueue: UpdateQueue</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">State</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">,
  instance: any,
): void </span><span class="token punctuation">{</span>
  <span class="token comment">// effects 为数组, 存储任务对象 (Update 对象)</span>
  <span class="token comment">// 但前提是在调用 render 方法时传递了回调函数, 就是 render 方法的第三个参数</span>
  <span class="token keyword">const</span> effects <span class="token operator">=</span> finishedQueue<span class="token punctuation">.</span>effects<span class="token punctuation">;</span>
  <span class="token comment">// 重置 finishedQueue.effects 数组</span>
  finishedQueue<span class="token punctuation">.</span>effects <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token comment">// 如果传递了 render 方法的第三个参数, effect 数组就不会为 null</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>effects <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 遍历 effect 数组</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> effects<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 获取数组中的第 i 个需要执行的 effect</span>
      <span class="token keyword">const</span> effect <span class="token operator">=</span> effects<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token comment">// 获取 callback 回调函数</span>
      <span class="token keyword">const</span> callback <span class="token operator">=</span> effect<span class="token punctuation">.</span>callback<span class="token punctuation">;</span>
      <span class="token comment">// 如果回调函数不为 null</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>callback <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 清空 effect 中的 callback</span>
        effect<span class="token punctuation">.</span>callback <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token comment">// 执行回调函数</span>
        <span class="token function">callCallback</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> instance<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token plain-text">
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-2-6-4-commithookeffectlistmount" tabindex="-1"><a class="header-anchor" href="#_5-2-6-4-commithookeffectlistmount"><span>5.2.6.4 commitHookEffectListMount</span></a></h5><p><code>文件位置: packages/react-reconciler/src/ReactFiberCommitWork.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token comment">/**
 * useEffect 回调函数调用
 */</span>
<span class="token keyword">function</span> <span class="token function">commitHookEffectListMount</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">tag</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">finishedWork</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取任务队列</span>
  <span class="token keyword">const</span> <span class="token literal-property property">updateQueue</span><span class="token operator">:</span> FunctionComponentUpdateQueue <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token punctuation">(</span>finishedWork<span class="token punctuation">.</span>updateQueue<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 获取 lastEffect</span>
  <span class="token keyword">let</span> lastEffect <span class="token operator">=</span> updateQueue <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">?</span> updateQueue<span class="token punctuation">.</span>lastEffect <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token comment">// 如果 lastEffect 不为 null</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>lastEffect <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取要执行的副作用</span>
    <span class="token keyword">const</span> firstEffect <span class="token operator">=</span> lastEffect<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">let</span> effect <span class="token operator">=</span> firstEffect<span class="token punctuation">;</span>
    <span class="token comment">// 通过遍历的方式调用 useEffect 中的回调函数</span>
    <span class="token comment">// 在组件中定义了调用了几次 useEffect 遍历就会执行几次</span>
    <span class="token keyword">do</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>effect<span class="token punctuation">.</span>tag <span class="token operator">&amp;</span> tag<span class="token punctuation">)</span> <span class="token operator">===</span> tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Mount</span>
        <span class="token keyword">const</span> create <span class="token operator">=</span> effect<span class="token punctuation">.</span>create<span class="token punctuation">;</span>
        <span class="token comment">// create 就是 useEffect 方法的第一个参数</span>
        <span class="token comment">// 返回值就是清理函数</span>
        effect<span class="token punctuation">.</span>destroy <span class="token operator">=</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 更新循环条件</span>
      effect <span class="token operator">=</span> effect<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>effect <span class="token operator">!==</span> firstEffect<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,252);function w(h,x){const s=e("ExternalLinkIcon");return t(),p("div",null,[y,n("p",null,[n("a",f,[o("快捷通道"),c(s)])]),g])}const _=a(b,[["render",w],["__file","04-core-source-code.html.vue"]]),j=JSON.parse('{"path":"/frame/React/04-core-source-code.html","title":"React-- Core source code","lang":"zh-CN","frontmatter":{"title":"React-- Core source code","sidebar":true,"excerpt":"信仰是伟大的情感，一种创造力量。-- 高尔基","tag":["react"],"category":["react"],"description":"1. 配置 React 源码本地调试环境 快捷通道 使用 create-react-app 脚手架创建项目 npx create-react-app react-test 安装指定版本的react 方便调试 npm install react@16.13.1 react-dom@16.13.1 弹射 create-react-app 脚手架内部配置 如...","head":[["meta",{"property":"og:url","content":"https://arisemarcher.github.io/blog/blog/frame/React/04-core-source-code.html"}],["meta",{"property":"og:site_name","content":"御神"}],["meta",{"property":"og:title","content":"React-- Core source code"}],["meta",{"property":"og:description","content":"1. 配置 React 源码本地调试环境 快捷通道 使用 create-react-app 脚手架创建项目 npx create-react-app react-test 安装指定版本的react 方便调试 npm install react@16.13.1 react-dom@16.13.1 弹射 create-react-app 脚手架内部配置 如..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://arisemarcher.github.io/blog/blog/assets/images/react/sourceCode/1.png =500x300"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-12T06:08:07.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"React-- Core source code"}],["meta",{"property":"article:tag","content":"react"}],["meta",{"property":"article:modified_time","content":"2024-03-12T06:08:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"React-- Core source code\\",\\"image\\":[\\"https://arisemarcher.github.io/blog/blog/assets/images/react/sourceCode/1.png =500x300\\",\\"https://arisemarcher.github.io/blog/blog/assets/images/react/sourceCode/2.png =500x300\\",\\"https://arisemarcher.github.io/blog/blog/assets/images/react/sourceCode/6.png =500x300\\",\\"https://arisemarcher.github.io/blog/blog/assets/images/react/sourceCode/3.png =500x300\\",\\"https://arisemarcher.github.io/blog/blog/assets/images/react/sourceCode/4.png =500x300\\",\\"https://arisemarcher.github.io/blog/blog/assets/images/react/sourceCode/7.png =500x300\\",\\"https://arisemarcher.github.io/blog/blog/assets/images/react/sourceCode/5.png =500x300\\"],\\"dateModified\\":\\"2024-03-12T06:08:07.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. 配置 React 源码本地调试环境","slug":"_1-配置-react-源码本地调试环境","link":"#_1-配置-react-源码本地调试环境","children":[]},{"level":2,"title":"2. 创建 React 元素","slug":"_2-创建-react-元素","link":"#_2-创建-react-元素","children":[{"level":3,"title":"2.1 createElement","slug":"_2-1-createelement","link":"#_2-1-createelement","children":[]},{"level":3,"title":"2.2 ReactElement","slug":"_2-2-reactelement","link":"#_2-2-reactelement","children":[]},{"level":3,"title":"2.3 hasValidRef","slug":"_2-3-hasvalidref","link":"#_2-3-hasvalidref","children":[]},{"level":3,"title":"2.4 hasValidKey","slug":"_2-4-hasvalidkey","link":"#_2-4-hasvalidkey","children":[]},{"level":3,"title":"2.5 isValidElement","slug":"_2-5-isvalidelement","link":"#_2-5-isvalidelement","children":[]},{"level":3,"title":"2.6 defineKeyPropWarningGetter","slug":"_2-6-definekeypropwarninggetter","link":"#_2-6-definekeypropwarninggetter","children":[]},{"level":3,"title":"2.7 defineRefPropWarningGetter","slug":"_2-7-definerefpropwarninggetter","link":"#_2-7-definerefpropwarninggetter","children":[]}]},{"level":2,"title":"3. React 架构","slug":"_3-react-架构","link":"#_3-react-架构","children":[{"level":3,"title":"3.1 Scheduler 调度层","slug":"_3-1-scheduler-调度层","link":"#_3-1-scheduler-调度层","children":[]},{"level":3,"title":"3.2 Reconciler 协调层","slug":"_3-2-reconciler-协调层","link":"#_3-2-reconciler-协调层","children":[]},{"level":3,"title":"3.3 Renderer 渲染层","slug":"_3-3-renderer-渲染层","link":"#_3-3-renderer-渲染层","children":[]}]},{"level":2,"title":"4. 数据结构","slug":"_4-数据结构","link":"#_4-数据结构","children":[{"level":3,"title":"4.1 Fiber","slug":"_4-1-fiber","link":"#_4-1-fiber","children":[]},{"level":3,"title":"4.2 WorkTag","slug":"_4-2-worktag","link":"#_4-2-worktag","children":[]},{"level":3,"title":"4.3 TypeOfMode","slug":"_4-3-typeofmode","link":"#_4-3-typeofmode","children":[]},{"level":3,"title":"4.3 SideEffectTag","slug":"_4-3-sideeffecttag","link":"#_4-3-sideeffecttag","children":[]},{"level":3,"title":"4.4 Update","slug":"_4-4-update","link":"#_4-4-update","children":[]},{"level":3,"title":"4.5 UpdateQueue","slug":"_4-5-updatequeue","link":"#_4-5-updatequeue","children":[]},{"level":3,"title":"4.6 RootTag","slug":"_4-6-roottag","link":"#_4-6-roottag","children":[]},{"level":3,"title":"4.7 双缓存技术","slug":"_4-7-双缓存技术","link":"#_4-7-双缓存技术","children":[]},{"level":3,"title":"4.8 区分 fiberRoot 与 rootFiber","slug":"_4-8-区分-fiberroot-与-rootfiber","link":"#_4-8-区分-fiberroot-与-rootfiber","children":[]}]},{"level":2,"title":"5. 初始化渲染","slug":"_5-初始化渲染","link":"#_5-初始化渲染","children":[{"level":3,"title":"5.1 render 阶段","slug":"_5-1-render-阶段","link":"#_5-1-render-阶段","children":[]},{"level":3,"title":"5.2 commit 阶段","slug":"_5-2-commit-阶段","link":"#_5-2-commit-阶段","children":[]}]}],"git":{"createdTime":1710141840000,"updatedTime":1710223687000,"contributors":[{"name":"arisemarcher","email":"2543061999@qq.com","commits":4}]},"readingTime":{"minutes":46.67,"words":14002},"filePathRelative":"frame/React/04-core-source-code.md","localizedDate":"2024年3月11日","autoDesc":true}');export{_ as comp,j as data};
