---
title: Gulp配置篇--04--压缩js
date: 2022/08/03 20:40
sidebar: auto
tags:
 - gulp
categories:
 -  gulp
---

## 插件介绍

+ gulp-load-plugins 为了更便捷的引入gulp相关插件 [传送门](https://github.com/jackfranklin/gulp-load-plugins)
+ gulp-uglify 对js进行压缩 [传送门](https://github.com/terinjokes/gulp-uglify)
+ ulp-strip-debug 去除js代码中的console、debugger [传送门](https://github.com/sindresorhus/gulp-strip-debug)

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
npm install gulp@4 gulp-load-plugins@2 gulp-strip-debug@3 gulp-uglify@3  -D
```

## gulpfile.js 配置

```js
const { series, parallel, src, dest } = require('gulp');
// 为了插件更便捷的引入
const gulpLoadPlugins = require('gulp-load-plugins')();

const uglify = gulpLoadPlugins.uglify;
const stripDebug = gulpLoadPlugins.stripDebug

const enterFileName   = 'code-origin' // 入口文件名
const exportFileName  = 'code-mini'   // 输出文件名

const miniJs = () => {
  return src(`${enterFileName}/**/*.js`)
    .pipe(uglify({
      compress: true,
      mangle: true
    }))
    .pipe(stripDebug())
    .pipe(dest(`${exportFileName}`))
}

exports.miniJs = miniJs
```

## package.json 配置


```json
{
  "name": "gulp-es5-example",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "tasks": "gulp --tasks",
    "build": "gulp",
    "miniJs": "gulp miniJs",
  },
  "author": "arisemarcher",
  "license": "ISC",
  "devDependencies": {
    "gulp": "^4.0.2",
    "gulp-load-plugins": "^2.0.7",
    "gulp-strip-debug": "^3.0.0",
    "gulp-uglify": "^3.0.2",
    "gulp-htmlmin": "^5.0.1"
  }
}

```


## 运行命令

```bash
npm run miniJs
```

::: tip
不能对Es6+的语法识别
:::

## 效果展示
### 未压缩前Js文件示例

```js
function sayHello (name) {
  // console.log(`the name is ${name}`)
  console.log('the name is ' + name)
  return 'hello' + name
  // return `hello ${name}`
}

document.querySelector('.content').addEventListener('click', function () {
  alert(sayHello('gulp'))
})

```

### 压缩后js文件展开示例（美化展开）

```js
function sayHello(e) {
  return void 0, "hello" + e
}
document.querySelector(".content").addEventListener("click", function () {
  void 0
});
```