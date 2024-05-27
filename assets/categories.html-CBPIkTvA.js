import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as a,a as l}from"./app-D2ePHc3u.js";const i={},r=l(`<h2 id="双向数据绑定的原理" tabindex="-1"><a class="header-anchor" href="#双向数据绑定的原理"><span>双向数据绑定的原理</span></a></h2><p>Vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的 setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。主要分为以下几个步骤：</p><ol><li><p>需要 observe 的数据对象进行递归遍历，包括子属性对象的属性，都加上setter和getter，这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化。</p></li><li><p>compile 解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图</p></li><li><p>Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁，主要做 的事情是:</p><ol><li>在自身实例化时往属性订阅器(dep)里面添加自己</li><li>自身必须有一个 update()方法</li><li>待属性变动 dep.notice()通知时，能调用自身的 update()方法，并触发 Compile 中绑定的回调</li></ol></li><li><p>MVVM 作为数据绑定的入口，整合 Observer、Compile 和 Watcher 三者，通过 Observer 来监听自己的 model 数据变化，通过 Compile 来解析编译模板指令，最终利用 Watcher 搭起 Observer 和 Compile 之间的通信桥梁，达到数据变化 -&gt; 视图更新；视图交互变化(input) -&gt; 数据 model 变更的双向绑定效果。</p></li></ol><h2 id="assets-和-static-的区别" tabindex="-1"><a class="header-anchor" href="#assets-和-static-的区别"><span>assets 和 static 的区别</span></a></h2><p>相同点：assets 和 static 两个都是存放静态资源文件。项目中所需要的资源文件图片，字体图标，样式文件等都可以放在这两个文件下。 不同点：assets中存放的静态资源文件在项目打包时，会进行体积压缩，代码格式化。 static中放置的静态资源文件不会走打包压缩格式化的流程。</p><h2 id="vue页面初始化闪动问题。" tabindex="-1"><a class="header-anchor" href="#vue页面初始化闪动问题。"><span>vue页面初始化闪动问题。</span></a></h2><p>在vue初始化之前，div是不归vue管的，会出现类似<code>{{message}}</code>字样，很短暂。 解决在css代码中加入：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">[v-cloak]</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者在根元素加上 style=&quot;display: none&quot;</p><h2 id="v-if和v-for哪个优先级更高-如果同时出现-应如何优化。" tabindex="-1"><a class="header-anchor" href="#v-if和v-for哪个优先级更高-如果同时出现-应如何优化。"><span>v-if和v-for哪个优先级更高？如果同时出现，应如何优化。</span></a></h2><p>v-for优先于v-if被解析，如果同时出现，每次渲染都会先执行循环再判断条件，无论如何循环都不可避免，浪费了性能。</p><p>要避免出现这种情况，可以在外层嵌套template，在这一层进行v-if判断，然后在内部进行v-for循环。如果条件出现在循环内部，可以通过计算属性提前过滤掉不需要显示的项。</p><h2 id="vue的生命周期" tabindex="-1"><a class="header-anchor" href="#vue的生命周期"><span>Vue的生命周期</span></a></h2><p>Vue实例有一个完整的生命周期，即开始创建、初始化数据、编译模板、挂载Dom -&gt; 渲染、更新 -&gt; 渲染、卸载等一系列过程，称为Vue的生命周期。</p><ol><li>beforeCreate(创建前)：数据观测和初始化事件还为开始，此时data的响应式追踪、event/watcher都还没有被设置，也就是不能访问到data、computed、watch、methods上的方法和数据</li><li>created（创建后） ：实例创建完成，实例上配置的 options 包括 data、computed、watch、methods 等都配置完成，但是此时渲染得节点还未挂载到 DOM，所以不能访问到 $el 属性。</li><li>beforeMount（挂载前）：在挂载开始之前被调用，相关的 render函数首次被调用。实例已完成以下的配置：编译模板，把 data 里面的数据和模板生成 html。此时还没有挂载 html 到页面上。</li><li>mounted（挂载后）：在 el 被新创建的 vm.$el 替换，并挂载到实 例上去之后调用。实例已完成以下的配置：用上面编译好的 html 内 容替换 el 属性指向的 DOM 对象。完成模板中的 html 渲染到 html 页 面中。此过程中进行 ajax 交互</li><li>beforeUpdate（更新前）：响应式数据更新时调用，此时虽然响应 式数据更新了，但是对应的真实 DOM 还没有被渲染。</li><li>updated（更新后） ：在由于数据更改导致的虚拟 DOM 重新渲染和 打补丁之后调用。此时 DOM 已经根据响应式数据的变化更新了。调 用时，组件 DOM 已经更新，所以可以执行依赖于 DOM 的操作。然而 在大多数情况下，应该避免在此期间更改状态，因为这可能会导致更 新无限循环。该钩子在服务器端渲染期间不被调用。</li><li>beforeDestroy（销毁前）：实例销毁之前调用。这一步，实例仍 然完全可用，this 仍能获取到实例</li><li>destroyed（销毁后）：实例销毁后调用，调用后，Vue 实例指示 的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例 也会被销毁。该钩子在服务端渲染期间不被调用。</li></ol><p>另外还有 keep-alive 独有的生命周期，分别为 activated 和 deactivated。用 keep-alive 包裹的组件在切换时不会进行销毁，而 是缓存到内存中并执行 deactivated 钩子函数，命中缓存渲染后会执 行 activated 钩子函数</p><h2 id="vue-子组件和父组件执行顺序" tabindex="-1"><a class="header-anchor" href="#vue-子组件和父组件执行顺序"><span>Vue 子组件和父组件执行顺序</span></a></h2><p>加载渲染过程：</p><ol><li>父组件 beforeCreate</li><li>父组件 created</li><li>父组件 beforeMount</li><li>子组件 beforeCreate</li><li>子组件 created</li><li>子组件 beforeMount</li><li>子组件 mounted</li><li>父组件 mounted</li></ol><p>更新过程：</p><ol><li>父组件 beforeUpdate</li><li>子组件 beforeUpdate</li><li>子组件 updated</li><li>父组件 update</li></ol><p>销毁过程：</p><ol><li>父组件 beforeDestroy</li><li>子组件 beforeDestroy</li><li>子组件 destroyed</li><li>父组件 destroyed</li></ol><h2 id="created和mounted的区别" tabindex="-1"><a class="header-anchor" href="#created和mounted的区别"><span>created和mounted的区别</span></a></h2><p>created: 在模板渲染成 html 前调用，即通常初始化某些属性值，然 后再渲染成视图。 mounted: 在模板渲染成 html 后调用，通常是初始化页面完成后，再 对 html 的 dom 节点进行一些需要的操作。</p><h2 id="一般在哪个生命周期请求异步数据" tabindex="-1"><a class="header-anchor" href="#一般在哪个生命周期请求异步数据"><span>一般在哪个生命周期请求异步数据</span></a></h2><p>created、beforeMount、mounted 中进行调用，因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值</p><p>推荐在 created 钩子函数中调用异步请求，因为在 created 钩子函数中调用异步请求有以下优点：</p><ul><li>能更快获取到服务端数据，减少页面加载时间，用户体验更好；</li><li>SSR 不支持 beforeMount 、mounted 钩子函数，放在 created 中有 助于一致性。</li></ul><h2 id="vuex的原理" tabindex="-1"><a class="header-anchor" href="#vuex的原理"><span>Vuex的原理</span></a></h2><p>Vuex是一个专为Vue.js提供的状态管理模式。它的核心有：</p><p>State: 页面状态管理容器对象。集中存储 Vue components 中 data对象的零散数据，全局唯一，以进行统一的状态管理。 getters：state 对象读取方法。 Actions：操作行为处理模块。通过dispatch触发。 Mutations：状态改变操作方法。通过commit去修改state中的数据。 modules: 分模块的状态管理</p><h2 id="vuex-和-localstorage-的区别" tabindex="-1"><a class="header-anchor" href="#vuex-和-localstorage-的区别"><span>Vuex 和 localStorage 的区别</span></a></h2><p>1：vuex存储在内存中，localStorage则以文件的方式存储在本地，只能存储字符串类型的数据，存储对象需要JSON的stringify和parse方法进行处理。读取内存比读取硬盘速度要快。 2：Vuex是一个专为Vue.js应用程序开发的状态管理模式。它采用了集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。vuex用于组件之间的传值。 localStorage是本地存储，是将数据存储到浏览器的方法，一般是跨页面传递数据时使用。 vuex能做到数据的响应式，localStorage不能。 3: 刷新页面时vuex存储的值会丢失，localStorage不会。</p><h2 id="diff算法的原理" tabindex="-1"><a class="header-anchor" href="#diff算法的原理"><span>Diff算法的原理</span></a></h2><p>在新老虚拟DOM对比时： 首先，对比节点本身，判断是否为同一节点，如果不为相同节点，则删除该节点重新创建节点进行替换。 如果为相同节点，进行patchVnode，判断如何对该节点的子节点进行处理，先判断一方有子节点一方没有子节点的情况（如果新的children没有子节点，将旧的子节点移除） 比较如果都有子节点，则进行updateChildren，判断如何对这些新老节点的子节点进行操作。 匹配时，进行相同的子节点，递归比较子节点 在diff中，字对同层的子节点进行比较，放弃跨级的节点比较，使得时间复杂度从从 O(n3)降低值 O(n)，也就是说，只有当新旧 children都为多个子节点时才需要用核心的 Diff 算法进行同层级比</p>`,36),s=[r];function o(n,c){return t(),a("div",null,s)}const u=e(i,[["render",o],["__file","categories.html.vue"]]),h=JSON.parse('{"path":"/frame/Vue/categories.html","title":"面试题-Vue","lang":"zh-CN","frontmatter":{"title":"面试题-Vue","icon":"object-group","excerpt":"不要因为走得太远，忘了我们为什么出发。纪伯伦（黎巴嫩）","category":["Vue"],"tag":["面试题"],"description":"双向数据绑定的原理 Vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的 setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。主要分为以下几个步骤： 需要 observe 的数据对象进行递归遍历，包括子属性对象的属性，都加上setter和getter，这样...","head":[["meta",{"property":"og:url","content":"https://arisemarcher.github.io/blog/blog/frame/Vue/categories.html"}],["meta",{"property":"og:site_name","content":"御神"}],["meta",{"property":"og:title","content":"面试题-Vue"}],["meta",{"property":"og:description","content":"双向数据绑定的原理 Vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的 setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。主要分为以下几个步骤： 需要 observe 的数据对象进行递归遍历，包括子属性对象的属性，都加上setter和getter，这样..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-12T06:08:07.000Z"}],["meta",{"property":"article:tag","content":"面试题"}],["meta",{"property":"article:modified_time","content":"2024-03-12T06:08:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"面试题-Vue\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-12T06:08:07.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"双向数据绑定的原理","slug":"双向数据绑定的原理","link":"#双向数据绑定的原理","children":[]},{"level":2,"title":"assets 和 static 的区别","slug":"assets-和-static-的区别","link":"#assets-和-static-的区别","children":[]},{"level":2,"title":"vue页面初始化闪动问题。","slug":"vue页面初始化闪动问题。","link":"#vue页面初始化闪动问题。","children":[]},{"level":2,"title":"v-if和v-for哪个优先级更高？如果同时出现，应如何优化。","slug":"v-if和v-for哪个优先级更高-如果同时出现-应如何优化。","link":"#v-if和v-for哪个优先级更高-如果同时出现-应如何优化。","children":[]},{"level":2,"title":"Vue的生命周期","slug":"vue的生命周期","link":"#vue的生命周期","children":[]},{"level":2,"title":"Vue 子组件和父组件执行顺序","slug":"vue-子组件和父组件执行顺序","link":"#vue-子组件和父组件执行顺序","children":[]},{"level":2,"title":"created和mounted的区别","slug":"created和mounted的区别","link":"#created和mounted的区别","children":[]},{"level":2,"title":"一般在哪个生命周期请求异步数据","slug":"一般在哪个生命周期请求异步数据","link":"#一般在哪个生命周期请求异步数据","children":[]},{"level":2,"title":"Vuex的原理","slug":"vuex的原理","link":"#vuex的原理","children":[]},{"level":2,"title":"Vuex 和 localStorage 的区别","slug":"vuex-和-localstorage-的区别","link":"#vuex-和-localstorage-的区别","children":[]},{"level":2,"title":"Diff算法的原理","slug":"diff算法的原理","link":"#diff算法的原理","children":[]}],"git":{"createdTime":1710223687000,"updatedTime":1710223687000,"contributors":[{"name":"arisemarcher","email":"2543061999@qq.com","commits":1}]},"readingTime":{"minutes":7.55,"words":2265},"filePathRelative":"frame/Vue/categories.md","localizedDate":"2024年3月12日","autoDesc":true}');export{u as comp,h as data};