---
title: Gulp配置篇--02--压缩html
sidebar: true
excerpt: 千磨万击还坚韧，任尔东南西北风。-- 郑板桥
tag:
 - Gulp
category:
 - Gulp
---

## 插件介绍

+ gulp-load-plugins 为了更便捷的引入gulp相关插件 [传送门](https://github.com/jackfranklin/gulp-load-plugins)
+ gulp-htmlmin：提供了对html、htm文件的压缩 [传送门](https://github.com/jonschlinkert/gulp-htmlmin)

## 文件目录结构

```
├── code-origin // 原始入口文件
│   ├── html
│      ├── index.html 
│      ├── other.html 
│      ├── xxxxx.html
├── code-mini   // 经过Gulp处理打包后的文件
├── node_modules
└── .gitignore
└── gulpfile.js 
└── package.json
```

## 相关依赖

```
npm install gulp@4 gulp-load-plugins@2 -D
npm install gulp-htmlmin@5
```

## gulpfile.js 配置

```js
const { series, parallel, src, dest } = require('gulp');
// 为了插件更便捷的引入
const gulpLoadPlugins = require('gulp-load-plugins')();

const htmlmin  = gulpLoadPlugins.htmlmin;

const enterFileName   = 'code-origin' // 入口文件名
const exportFileName  = 'code-mini'   // 输出文件名

const miniHtml = () => {
  // 找到 文件名下所有文件夹下所有的.html文件
  // 目录工整的话 可以书写成 `${enterFileName}/html/*.html`
  return src(`${enterFileName}/**/*.html`)
    .pipe(htmlmin({
      collapseWhitespace: true,            // 压缩HTML
      collapseBooleanAttributes: true,     // 省略布尔属性值
      removeTagWhitespace: true,           // 清除制表符的空白
      removeEmptyAttributes: true,         // 清除 空的属性值
      removeComments: true,                // 清除 HTML 中的注释
      removeScriptTypeAttributes: true,    // 删除<script>的type="text/javascript"
      removeStyleLinkTypeAttributes: true, // 删除<style>和<link>的type="text/css"
      minifyJS: true,                      // 压缩 html文件中的 script
      minifyCSS: true,                     // 压缩 html文件中的 style
      minifyURLs: true,
    }))
    .pipe(dest(`${exportFileName}`))
}

exports.miniHtml = miniHtml
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
    "miniHtml": "gulp miniHtml",
  },
  "author": "arisemarcher",
  "license": "ISC",
  "devDependencies": {
    "gulp": "^4.0.2",
    "gulp-load-plugins": "^2.0.7",
  },
  "dependencies": {
    "gulp-htmlmin": "^5.0.1"
  }
}

```

## 运行命令

```bash
npm run miniHtml
```
