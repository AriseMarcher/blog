import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as i,a as o}from"./app-CfhgvICa.js";const p={},r=o('<p>Vite是一款快速开发工具，下一代前端开发工具</p><p>它主要由两部分组成：</p><ul><li>一个开发服务器：它基于原生ES模块提供了丰富的内建功能，HMR的速度非常快 <ul><li>Es6+ 语法 =&gt; 不转换</li><li>TypeScript =&gt; 直接转换Es6+</li><li>开发阶段是使用EsBuild，这是Go语言写的，速度会快上10-100倍，打包生产环境则是用的Rollup</li></ul></li><li>一套构建指令，它使用rollup打开代码，并且它是预配置的，可以输出生成环境的优化过的静态资源</li></ul><h3 id="浏览器原生加载js的缺点" tabindex="-1"><a class="header-anchor" href="#浏览器原生加载js的缺点"><span>浏览器原生加载js的缺点</span></a></h3><p>在使用js文件执行，通过<code>script</code>的src方式引入，设置type为module，在引入一些模块，有一些缺点如下：</p><ol><li>必须明确写上后缀名</li><li>如果加载某一个模块，会加载很多其他的js文件那么这些js文件都需要依次加载，浏览器需要请求所有依赖的js文件</li><li>如果代码中有typescript/jsx/vue代码，那么浏览器是不识别的</li></ol><p>而使用vite后，上诉问题就不会存在了，不需要写后缀名、加载一个模块内部依赖多个文件会合并到一个文件中，减少请求、如ts文件，虽然浏览器加载的显示也是.ts文件，但内部vite已经通过开启connect服务器，在配合esbuild转换成.js文件了</p><p>Vite核心理念</p><p>模块化支持</p><p>Vite基础打包能力</p><p>Vite打包Vue、React</p><p>Vue脚手架工具使用</p><p>ESBuild工具的解析</p>',13),l=[r];function a(c,s){return e(),i("div",null,l)}const m=t(p,[["render",a],["__file","01-核心理念.html.vue"]]),u=JSON.parse('{"path":"/pack/Vite/01-%E6%A0%B8%E5%BF%83%E7%90%86%E5%BF%B5.html","title":"基本使用","lang":"zh-CN","frontmatter":{"title":"基本使用","sidebar":true,"excerpt":"深窥自己的心，而后发觉一切的奇迹在你自己。-- 培根","tag":["Vite"],"category":["Vite"],"description":"Vite是一款快速开发工具，下一代前端开发工具 它主要由两部分组成： 一个开发服务器：它基于原生ES模块提供了丰富的内建功能，HMR的速度非常快 Es6+ 语法 => 不转换 TypeScript => 直接转换Es6+ 开发阶段是使用EsBuild，这是Go语言写的，速度会快上10-100倍，打包生产环境则是用的Rollup 一套构建指令，它使用ro...","head":[["meta",{"property":"og:url","content":"https://arisemarcher.github.io/blog/blog/pack/Vite/01-%E6%A0%B8%E5%BF%83%E7%90%86%E5%BF%B5.html"}],["meta",{"property":"og:site_name","content":"御神"}],["meta",{"property":"og:title","content":"基本使用"}],["meta",{"property":"og:description","content":"Vite是一款快速开发工具，下一代前端开发工具 它主要由两部分组成： 一个开发服务器：它基于原生ES模块提供了丰富的内建功能，HMR的速度非常快 Es6+ 语法 => 不转换 TypeScript => 直接转换Es6+ 开发阶段是使用EsBuild，这是Go语言写的，速度会快上10-100倍，打包生产环境则是用的Rollup 一套构建指令，它使用ro..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-07T04:43:50.000Z"}],["meta",{"property":"article:tag","content":"Vite"}],["meta",{"property":"article:modified_time","content":"2024-05-07T04:43:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基本使用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-07T04:43:50.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"浏览器原生加载js的缺点","slug":"浏览器原生加载js的缺点","link":"#浏览器原生加载js的缺点","children":[]}],"git":{"createdTime":1715057030000,"updatedTime":1715057030000,"contributors":[{"name":"arisemarcher","email":"2543061999@qq.com","commits":1}]},"readingTime":{"minutes":1.45,"words":436},"filePathRelative":"pack/Vite/01-核心理念.md","localizedDate":"2024年5月7日","autoDesc":true}');export{m as comp,u as data};
