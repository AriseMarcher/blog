---
title: Gulp配置篇--07--js使用js库jq扩展
date: 2022/08/05 21:10
sidebar: auto
tags:
 - gulp
categories:
 -  gulp
---

## 文件目录结构

在js目录下的common目录下存放公共的js文件，此处用jq举例

```
├── code-origin // 原始入口文件
│   ├── html
│      ├── index.html 
│      ├── common.html 
│      ├── xxxxx.html
│   ├── css
│      ├── index.css 
│      ├── common.css 
│      ├── xxxxx.css
│   ├── js
│      ├── common
│         ├── jquery-3.6.0.min.js
│      ├── index.js 
│      ├── common.js 
│      ├── xxxxx.js
├── code-mini   // 经过Gulp处理打包后的文件
├── node_modules
└── .gitignore
└── gulpfile.js 
└── package.json
```

## gulpfile.js 配置 （比较详细）

```js
const { series, parallel, src, dest } = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins')();

const htmlmin = gulpLoadPlugins.htmlmin;
const uglify = gulpLoadPlugins.uglify;
const cleanCss = gulpLoadPlugins.cleanCss;
const babel = gulpLoadPlugins.babel;
const browserify = require('browserify');
const babelify = require('babelify')

const autoprefixer = require('autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const postcss = require('gulp-postcss')

const stripDebug = gulpLoadPlugins.stripDebug
const source = require('vinyl-source-stream')
const buffer     = require('vinyl-buffer')
const del = require('del')

const enterFileName = 'code-origin'
const exportFileName = 'code-mini'

const miniHtml = () => {
  return src(`${enterFileName}/**/*.html`)
    .pipe(htmlmin({
      collapseWhitespace: true, // 压缩HTML
      collapseBooleanAttributes: true, // 省略布尔属性值
      removeTagWhitespace: true, // 清除制表符的空白
      removeEmptyAttributes: true, // 清除 空的属性值
      removeComments: true, // 清除 HTML 中的注释
      removeScriptTypeAttributes: true, // 删除<script>的type="text/javascript"
      removeStyleLinkTypeAttributes: true, // 删除<style>和<link>的type="text/css"
      minifyJS: true, // 压缩 html文件中的 script
      minifyCSS: true, // 压缩 html文件中的 style
      minifyURLs: true,
    }))
    .pipe(dest(`${exportFileName}`))
}

const miniJs = () => {
  // 由于使用babel文件处理js文件会增加'use strict'且会增加一些require
  // 但其实并不需要使用babel对jq文件进行兼容处理，故而用语法 ! 来不执行该文件
  return src(
    [
      `${enterFileName}/**/*.js`,
      `!${enterFileName}/js/common/*.js`
    ])
    .pipe(babel())
    .pipe(uglify({
      compress: true,
      mangle: true
    }))
    .pipe(stripDebug())
    .pipe(dest(`${exportFileName}`))
}

const bundle = (cb) => {
  // 需要处理ES6+至ES5的js文件
  const options = [
    {
      entry: "code-origin/js/index.js",
      rename: "index.js",
      output: "code-mini/js"
    },
    {
      entry: "code-origin/js/common.js",
      rename: "common.js",
      output: "code-mini/js"
    },
  ]
  // 当 .babelrc.js中有配置的时候 .transform(babelify,{xxx})
  // 可以简写为 .transform(babelify)

  options.forEach(option => {
    return browserify({
      entries: option.entry
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
      .bundle()
      .pipe(source(option.rename))
      .pipe(buffer())
      .pipe(uglify({
        compress: true,
        mangle: true
      }))
      // .pipe(stripDebug()) // 是否去除 console.log和debugger 为了演示暂时注释
      .pipe(dest(option.output))
  })
  cb && cb()
}

const miniCss = () => {
  return src(`${enterFileName}/**/*.css`)
    .pipe(sourcemaps.init())
    .pipe(postcss([
      autoprefixer({
        overrideBrowserslist: ['> 1%', 'last 2 versions', 'Firefox ESR'],
        cascade: true //  是否美化属性值
      })
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(cleanCss({
      format: false, // 属性值：false|keep-breaks|beautify 默认false(压缩)
      inline: ['none'], // 当 css文件中有 @import 'xxx.css'语法时, 属性值为none则不将 xxx.css全部解析到当前的css文件
    }))
    .pipe(dest(`${exportFileName}`))
}

// 用于清除输出目录
const clean = () => {
  return del(exportFileName)
}

// 用于拷贝文件
const copy = (enter, output) => {
  return function () {
    return src(enter)
      .pipe(dest(output))
  }
}

const copyAll = copy(`${enterFileName}/**`, `${exportFileName}`)

exports.miniHtml = miniHtml
exports.miniJs = miniJs
exports.miniCss = miniCss
exports.clean = clean
exports.bundle = bundle

// 同步管道运行
// 1. 清除输出文件下的所有文件
// 2. 将原始目标文件下的所有文件全部拷贝至输出文件下（文件目录结构一样）
// 3. 异步管道执行；分别是 html、js、和css文件的压缩 （需要bundle的js文件可以不参与此处的压缩，因为bundle还会走一遍）
// 4. 对需要压缩的es6+的文件执行bundle打包，使其兼容至es5并能让浏览器识别

exports.default = series(
  clean,
  copyAll,
  parallel(
    miniHtml,
    miniJs,
    miniCss,
  ),
  bundle,
)
```

## package.json相关依赖和命令

```json
{
  "scripts": {
    "tasks": "gulp --tasks",
    "build": "gulp",
    "miniHtml": "gulp miniHtml",
    "miniJs": "gulp miniJs",
    "miniCss": "gulp miniCss",
    "bundle": "gulp bundle"
  },
  "devDependencies": {
    "@babel/core": "^7.18.10",
    "@babel/plugin-transform-runtime": "^7.18.10",
    "@babel/preset-env": "^7.18.10",
    "autoprefixer": "^7.2.6",
    "babelify": "^10.0.0",
    "browserify": "^17.0.0",
    "del": "^6.1.1",
    "gulp": "^4.0.2",
    "gulp-babel": "^8.0.0",
    "gulp-clean-css": "^4.3.0",
    "gulp-htmlmin": "^5.0.1",
    "gulp-load-plugins": "^2.0.7",
    "gulp-postcss": "^9.0.1",
    "gulp-sourcemaps": "^3.0.0",
    "gulp-strip-debug": "^3.0.0",
    "gulp-uglify": "^3.0.2",
    "vinyl-buffer": "^1.0.1",
    "vinyl-source-stream": "^2.0.0"
  },
  "dependencies": {
    "@babel/runtime-corejs3": "^7.18.9"
  }
}
```

## 效果展示

::: tip
使用es6+语法的原始js文件
:::

### code-origin/js/common.js

```js
export const commomParams = {
  userName: '小明',
  age: 18,
  sex: 'man',
}
export const elseParams = {
  interest: 'basketball'
}

export default {
  job: 'teacher'
}

```

### code-origin/js/index.js

```js
const { commomParams: commonParams } = require('./common')
const commonDefault = require('./common')

const arr = ['apple', 'origin', 'other']
let fruitName = 'banner'

console.log(`the includes result is ${arr.includes(fruitName)}`)

console.log('the commonDefault value is')
console.log(commonDefault)

console.log('the commomParams value is')
console.log(commonParams)


const el = $(".box")
console.log(el)
```

## 通过html文件引入index.js，并在控制台中打印结果如下

<img :src="$withBase('/images/gulp/html-console.png')" alt="打印结果">
