---
title: Gulp配置篇--06--js-browserify+babel
excerpt: 少年易学老难成，一寸光阴不可轻。-- 朱熹
sidebar: true
tag:
 - Gulp
category:
 - Gulp
---

## 插件介绍
+ browserify 可以让你使用类似于 node 的 require() 的方式来组织浏览器端的 Javascript 代码，通过预编译让前端 Javascript 可以直接使用 Node NPM 安装的一些库。[传送门](https://github.com/browserify/browserify)
+ babelify 类似 babel-loader，用于webpack和browserify等构建工具中 [传送门](https://github.com/babel/babelify)
+ vinyl-buffer 将流式文件转换为使用缓冲区。[传送门](https://github.com/hughsk/vinyl-buffer)
+ vinyl-source-stream 在gulp或vinyl pipelines中使用常规文本流，使得与现有npm流生态系统实现更好的互操作性 [传送门](https://github.com/hughsk/vinyl-source-stream)
+ @babel/preset-env [传送门](https://www.babeljs.cn/docs/babel-preset-env)
+ @babel/core [传送门](https://www.babeljs.cn/docs/babel-core)
+ @babel/plugin-transform-runtime [传送门](https://www.babeljs.cn/docs/babel-plugin-transform-runtime)
+ @babel/runtime-corejs3 corejs版本，支持数组includes等 [传送门](https://www.babeljs.cn/docs/babel-plugin-transform-runtime)

[参考网站](https://www.digitalocean.com/community/tutorials/getting-started-with-browserify#toc-browserify-transforms)

## 文件目录结构

```
├── code-origin // 原始入口文件
│   ├── css
│      ├── index.css 
│      ├── other.css 
│      ├── xxxxx.css
│   ├── js
│      ├── index.js 
│      ├── other.js 
│      ├── xxxxx.js
├── code-mini   // 经过Gulp处理打包后的文件
├── node_modules
└── .gitignore
└── gulpfile.js 
└── package.json
```


## 相关依赖

```
npm install gulp-babel@8 @babel/core@7 @babel/preset-env@7 @babel/plugin-transform-runtime@7 -D
npm install @babel/runtime-corejs3 --save

npm install browserify@17 babelify@10 vinyl-buffer@1 vinyl-source-stream@2 --save-dev
```

## gulpfile.js 配置

```js
const { series, parallel, src, dest } = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins')();

const uglify = gulpLoadPlugins.uglify;
const browserify = require('browserify');
const babelify = require('babelify')

const source = require('vinyl-source-stream')
const buffer     = require('vinyl-buffer')

const bundle = () => {
  return browserify({
    entries: 'code-origin/js/index.js'
  })
    .transform(babelify, {
      presets: ["@babel/preset-env"],
      plugins: [
        ["@babel/plugin-transform-runtime", {
        "absoluteRuntime": false,
        "corejs": 3,
        "helpers": true,
        "regenerator": true,
        "version": "7.18.10"
      }]
      ]
    })
    .bundle() // Start bundle
    .pipe(source('index.js')) // 入口文件名称
    .pipe(buffer()) // 转换为gulp识别的管道
    .pipe(uglify({
      compress: true,
      mangle: true
    }))
    .pipe(dest('code-mini/js'))
}

exports.bundle = bundle
```

## package.json中新增scripts命令

```json
{
  "scripts": {
    "bundle": "gulp bundle"
  }
}
```

## 运行命令

```bash
npm run bundle
```

## 效果展示

### 未压缩前Js文件示例（是的，你没有看错，就是验证下includes兼容性）

```js
const arr = ['apple', 'origin', 'other']
let fruitName = 'banner'

console.log(arr.includes(fruitName))
```

### 经过bundle处理的压缩后的代码

很大，如下图，望不到底部
![示例](/assets/images/gulp/browserify.png =500x300)

虽然很大，但用html引入该js是可以正常在浏览器上运行的，当然，包括IE。


## 总结

::: tip
当一个js正常开发下未通过require引入其他js模块，但是使用了ES6+以上的语法，可用通过browserify+babel和babel其他的工具和集成来实现语法向ES5兼容，

如果该js需要引入其他的js文件，此时也需要用同样的方法（browserify+babel）处理该文件，这样子就可以引入了。

值得注意的是这里不支持按需引入。即tree-shaking
:::

## 其他实现方式对比

::: tip
此处尝试了通过html引入polyfill.min.js(102.11KB)来实现ES6+的相关语法，
那么就不对js使用babel处理，直接使用uglify的话js代码会报错（不能识别const语法等），
故而：不对该js处理先引入polyfill.min.js再引入带有es6+的语法，如果语法中有（const 声明，模板字符串、includes语法等），都是OK的，然而尝试了Class语法则会报错。

因此，最终还是采用browserify实现语法兼容是最理想的，虽然多出来很多的兼容语法，但这些都是当前文件中用到的（也算按需压缩引入了），压缩之后也才20多KB（简单的示例语法），而且在H5的单个文件这个大小还算可取。
:::