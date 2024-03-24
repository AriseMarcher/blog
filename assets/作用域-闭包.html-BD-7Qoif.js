import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as t,a as i}from"./app-DPveSBVH.js";const l={},r=i('<h2 id="作用域和作用域链-scope-chain" tabindex="-1"><a class="header-anchor" href="#作用域和作用域链-scope-chain"><span>作用域和作用域链（Scope Chain）</span></a></h2><p>当进入到一个执行上下文时，上下文也会关联一个作用域链</p><ul><li>作用域链是一个对象列表，用于变量标识符的求值；</li><li>当进入一个执行上下文时，这个作用域链被创建，并且根据代码类型，添加一系列的对象；</li></ul><h2 id="javascript内存管理" tabindex="-1"><a class="header-anchor" href="#javascript内存管理"><span>JavaScript内存管理</span></a></h2><p>不管什么样的编程语言，在代码的执行过程中都是需要给它分配内存的，不同的是某些编程语言需要手动的管理内存，某些编程语言会自动帮助我们管理内存</p><p>不管以什么样的方式来管理内存，内存的管理都会有如下的生命周期：</p><ul><li>分配申请你需要的内存（申请）</li><li>使用分配的内存（存放一些东西，比如对象等）</li><li>不需要使用时，对其进行释放</li></ul><p>不同的编程语言对于申请和释放会有不同的实现</p><ul><li>手动管理内存：比如C、C++</li><li>自动管理内存：比如Java、JavaScript、Python、Swift、Dart</li></ul><p>内存分配方式</p><ul><li>Js对于原始数据类型内存的分配会在执行时，直接在栈空间进行分配；</li><li>Js对于复杂数据类型内存的分配会在堆内存中开辟一块空间，并且将这块空间的指针返回值变量引用</li></ul><h2 id="javascript的垃圾回收" tabindex="-1"><a class="header-anchor" href="#javascript的垃圾回收"><span>JavaScript的垃圾回收</span></a></h2><p>因为内存的大小是有限的，所以当内存不在需要的时候，我们需要对其进行释放，以便腾出更多的内存空间</p><p>在手动管理内存的语言中，我们需要通过一些方式自己来释放不在需要的内存，比如free函数：</p><ul><li>但是这种管理的方式其实非常非常的低效，影响我们编写逻辑的代码的效率；</li><li>并且这种方式对开发者的要求也很高，并且一不小心就会产生内存泄漏；</li></ul><p>所以大部分现代的编程语言都是有自己的垃圾回收机制：</p><ul><li>垃圾回收的英文是Garbage Collection，简称GC；</li><li>对于那些不再使用的对象，我们都称之为垃圾，它需要被回收，以释放更多的内存空间；</li><li>而我们的语言运行环境，比如Java的运行环境JVM，JavaScript的运行环境js引擎都会内存垃圾回收器</li><li>垃圾回收器我们也会简称为GC，所以在很多地方你可以看到GC其实指的是垃圾回收器。</li></ul><p>常见的GC算法--引用计数（Reference counting）</p><ul><li>当一个对象有一个引用指向它时，那么这个对象的引用就+1；</li><li>当一个对象的引用为0时，这个对象就可以被销毁掉；</li></ul><p>这个算法有一个很大的弊端就是会产生循环引用；</p><p>常见的GC算法-- 标记清除</p><h2 id="闭包的概念理解" tabindex="-1"><a class="header-anchor" href="#闭包的概念理解"><span>闭包的概念理解</span></a></h2><h2 id="闭包的形成过程" tabindex="-1"><a class="header-anchor" href="#闭包的形成过程"><span>闭包的形成过程</span></a></h2><h2 id="闭包的内存泄露" tabindex="-1"><a class="header-anchor" href="#闭包的内存泄露"><span>闭包的内存泄露</span></a></h2>',24),c=[r];function p(n,o){return a(),t("div",null,c)}const d=e(l,[["render",p],["__file","作用域-闭包.html.vue"]]),m=JSON.parse('{"path":"/web/JavaScript/%E4%BD%9C%E7%94%A8%E5%9F%9F-%E9%97%AD%E5%8C%85.html","title":"作用域-作用域链-闭包","lang":"zh-CN","frontmatter":{"title":"作用域-作用域链-闭包","icon":"object-group","excerpt":"世界上最宽阔的是海洋，比海洋更宽阔的是天空，比天空更宽阔的是人的心灵 --雨果（法国）","excerptLength":100,"category":["JavaScript"],"tag":["基础"],"description":"作用域和作用域链（Scope Chain） 当进入到一个执行上下文时，上下文也会关联一个作用域链 作用域链是一个对象列表，用于变量标识符的求值； 当进入一个执行上下文时，这个作用域链被创建，并且根据代码类型，添加一系列的对象； JavaScript内存管理 不管什么样的编程语言，在代码的执行过程中都是需要给它分配内存的，不同的是某些编程语言需要手动的管...","head":[["meta",{"property":"og:url","content":"https://arisemarcher.github.io/blog/blog/web/JavaScript/%E4%BD%9C%E7%94%A8%E5%9F%9F-%E9%97%AD%E5%8C%85.html"}],["meta",{"property":"og:site_name","content":"御神"}],["meta",{"property":"og:title","content":"作用域-作用域链-闭包"}],["meta",{"property":"og:description","content":"作用域和作用域链（Scope Chain） 当进入到一个执行上下文时，上下文也会关联一个作用域链 作用域链是一个对象列表，用于变量标识符的求值； 当进入一个执行上下文时，这个作用域链被创建，并且根据代码类型，添加一系列的对象； JavaScript内存管理 不管什么样的编程语言，在代码的执行过程中都是需要给它分配内存的，不同的是某些编程语言需要手动的管..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-24T03:36:48.000Z"}],["meta",{"property":"article:tag","content":"基础"}],["meta",{"property":"article:modified_time","content":"2024-03-24T03:36:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"作用域-作用域链-闭包\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-24T03:36:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"作用域和作用域链（Scope Chain）","slug":"作用域和作用域链-scope-chain","link":"#作用域和作用域链-scope-chain","children":[]},{"level":2,"title":"JavaScript内存管理","slug":"javascript内存管理","link":"#javascript内存管理","children":[]},{"level":2,"title":"JavaScript的垃圾回收","slug":"javascript的垃圾回收","link":"#javascript的垃圾回收","children":[]},{"level":2,"title":"闭包的概念理解","slug":"闭包的概念理解","link":"#闭包的概念理解","children":[]},{"level":2,"title":"闭包的形成过程","slug":"闭包的形成过程","link":"#闭包的形成过程","children":[]},{"level":2,"title":"闭包的内存泄露","slug":"闭包的内存泄露","link":"#闭包的内存泄露","children":[]}],"git":{"createdTime":1711251408000,"updatedTime":1711251408000,"contributors":[{"name":"arisemarcher","email":"2543061999@qq.com","commits":1}]},"readingTime":{"minutes":2.73,"words":819},"filePathRelative":"web/JavaScript/作用域-闭包.md","localizedDate":"2024年3月24日","autoDesc":true}');export{d as comp,m as data};
