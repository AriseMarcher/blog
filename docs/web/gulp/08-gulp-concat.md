---
title: Gulp配置篇--08--concat合并文件使用
date: 2022/08/05 23:23
tags:
 - gulp
categories:
 -  gulp
---

## 依赖安装

```bash
npm install gulp-concat@2 gulp-rename@2 -D
```

## concat插件简单使用举例

gulpfile.js

```js
const { series, parallel, src, dest } = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins')();
const concat = gulpLoadPlugins.concat;

const concatJs = (cb) => {
  // 需要合并的文件 数组形式 那个文件在前就在合并后的文件前面
  return src(['code-origin/js/common.js', 'code-origin/js/index.js'])
    .pipe(rename('common-index.js')) // 取一个新的名称
    .pipe(dest('code-mini/js')) // 输出地址
}
```

## 续接 07-gulp-babel-jquery

::: tip
目的：

1：通过配置合并js和css文件

2：如有需要，对合并后的js文件执行browserify+babel打包
:::

### 文件目录结构

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
├── .babelrc.json
├── concat.map.json
├── node_modules
└── .gitignore
└── gulpfile.js 
└── package.json
```

### gulpfile.js配置（有改动）

```js
const { series, parallel, src, dest } = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins')();

const htmlmin = gulpLoadPlugins.htmlmin;
const uglify = gulpLoadPlugins.uglify;
const cleanCss = gulpLoadPlugins.cleanCss;
const babel = gulpLoadPlugins.babel;
const concat = gulpLoadPlugins.concat;
const rename = gulpLoadPlugins.rename;

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
  // 此处举例中会生成.min.js 为了防止重新npm run build 故而不对.min.js文件做处理
  return src(
    [
      `${enterFileName}/**/*.js`,
      `!${enterFileName}/js/common/*.js`,
      `!${enterFileName}/js/*.min.js`
    ])
    .pipe(babel())
    .pipe(uglify({
      compress: true,
      mangle: true
    }))
    // .pipe(stripDebug())
    .pipe(dest(`${exportFileName}`))
}

// 对原始js文件进行bundle打包
const bundleNormal = (cb) => {
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

  options.forEach(option => {
    bundle(option)
  })
  cb && cb()
}

// 专门为concat合并之后的js打包（假设这些js都是需要bundle的）
const bundleConcat = (cb) => {
  const concatJs = require('./concat.map.json').js

  // 重新数据 拼接路径
  // 也可以在这里剔除不需要执行bundle操作的js
  let rebuildJs = concatJs.map(item => {
    item.entry = `${item.originOutput}/${item.rename}`
    return item
  })

  rebuildJs.forEach(option => {
    bundle(option)
  })
  cb && cb()
}

// 基础bundle方法
// 三个参数：入口路径、新名称、输出路径
const bundle = (option) => {
  return browserify({
    entries: option.entry
  })
    .transform(babelify)
    .bundle()
    .pipe(source(option.rename))
    .pipe(buffer())
    .pipe(uglify({
      compress: true,
      mangle: true
    }))
    // .pipe(stripDebug())
    .pipe(dest(option.output))
}

exports.bundle = bundle

const miniCss = () => {
  return src(`${enterFileName}/**/*.css`)
    // .pipe(sourcemaps.init())
    .pipe(postcss([
      autoprefixer({
        overrideBrowserslist: ['> 1%', 'last 2 versions', 'Firefox ESR'],
        cascade: true //  是否美化属性值
      })
    ]))
    // .pipe(sourcemaps.write('.'))
    .pipe(cleanCss({
      format: false, // 属性值：false|keep-breaks|beautify 默认false(压缩)
      inline: ['none'], // 当 css文件中有 @import 'xxx.css'语法时, 属性值为none则不将 xxx.css全部解析到当前的css文件
    }))
    .pipe(dest(`${exportFileName}`))
}

const clean = () => {
  return del(exportFileName)
}

const copy = (enter, output) => {
  return function () {
    return src(enter)
      .pipe(dest(output))
  }
}

// 合并Js相关操作
// 只合并 不做相关babel操作
// Why? 为了统一在bundle中处理
const concatJs = (cb) => {
  const options = require('./concat.map.json').js
  options.forEach(item => {
    return src(item.entry)
      .pipe(rename(item.rename))
      .pipe(dest(item.originOutput)) // 在原始文件下也输出一份 保持开发和压缩后的文件代码同步
      .pipe(dest(item.output))
  })
  cb && cb()
}

// 合并Css相关操作
const concatCss = (cb) => {
  const options = require('./concat.map.json').css
  options.forEach(item => {
    return src(item.entry)
      // .pipe(sourcemaps.init())
      .pipe(postcss([
        autoprefixer({
          overrideBrowserslist: ['> 1%', 'last 2 versions', 'Firefox ESR'],
          cascade: true //  是否美化属性值
        })
      ]))
      // .pipe(sourcemaps.write('.'))
      .pipe(cleanCss({
        format: false, // 属性值：false|keep-breaks|beautify 默认false(压缩)
        inline: ['none'], // 当 css文件中有 @import 'xxx.css'语法时, 属性值为none则不将 xxx.css全部解析到当前的css文件
      }))
      .pipe(dest(item.originOutput)) // 在原始文件下也保存一份
      .pipe(dest(item.output))
  })
  cb && cb()
}

const copyAll = copy(`${enterFileName}/**`, `${exportFileName}`)

exports.miniHtml = miniHtml
exports.miniJs = miniJs
exports.miniCss = miniCss
exports.clean = clean

// 再合并之后再进行对合并后的js进行bundle操作
exports.default = series(
  clean,
  copyAll,
  parallel(
    miniHtml,
    miniJs,
    miniCss,
  ),
  bundleNormal,
  parallel(
    concatJs,
    concatCss
  ),
  bundleConcat,
)
```

### gulpfile.js同级目录新增 concat.map.json文件，为了合并配置便捷

:::tip
由于concat可以合并css和js,此处都放在一起，路径需要补全

由于index.js中有使用require语法，所有originOutput和output都放在同级js文件下，
不然为了好区分，可以把路径设置如 code-origin/js/concat-mini 这种

后续需要合并其他，在此处增加即可
:::

```json
{
  "js": [
    {
      "entry": ["code-origin/js/common.js", "code-origin/js/index.js"],
      "rename": "common-index.mini.js",
      "originOutput": "code-origin/js",
      "output": "code-mini/js"
    }
  ],
  "css": [
    {
      "entry": ["code-origin/css/reset.css", "code-origin/css/index.css"],
      "rename": "reset-index.mini.css",
      "originOutput": "code-origin/css",
      "output": "code-mini/css"
    }
  ]
}
```

### .babelrc.json配置

```js
{
  "presets": ["@babel/preset-env"],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "absoluteRuntime": false,
        "corejs": 3,
        "helpers": true,
        "regenerator": true,
        "version": "7.0.0-beta.0"
      }
    ]
  ]
}

```

### 执行build

```bash
npm run build

[23:42:04] Using gulpfile D:\arise-codes\gulp-es5-example\gulpfile.js
[23:42:04] Starting 'default'...
[23:42:04] Starting 'clean'...
[23:42:04] Finished 'clean' after 21 ms
[23:42:04] Starting '<anonymous>'...   
[23:42:04] Finished '<anonymous>' after 57 ms
[23:42:04] Starting 'miniHtml'...
[23:42:04] Starting 'miniJs'...
[23:42:04] Starting 'miniCss'...
[23:42:04] Finished 'miniHtml' after 175 ms
[23:42:05] Finished 'miniCss' after 829 ms      
[23:42:05] Finished 'miniJs' after 833 ms       
[23:42:05] Starting 'bundleNormal'...
[23:42:05] Finished 'bundleNormal' after 8.27 ms
[23:42:05] Starting 'concatJs'...
[23:42:05] Starting 'concatCss'...
[23:42:05] Finished 'concatJs' after 3.2 ms  
[23:42:05] Finished 'concatCss' after 5.97 ms
[23:42:05] Starting 'bundleConcat'...
[23:42:05] Finished 'bundleConcat' after 2.61 ms
[23:42:05] Finished 'default' after 938 ms
```

## 结果如下

在html中引入concat生成后的js文件运行正常

![打印结果](/images/gulp/concat-mini.png)