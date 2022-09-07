---
title: Gulp配置篇--09--gulp-watch
date: 2022/08/06 12::07
tags:
 - gulp
categories:
 -  gulp
---

## 依赖安装

```bash
npm install gulp-watch@5 -D
```

## gulp插件简单使用举例

gulpfile.js

```js
const { series, parallel, src, dest } = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins')();
const watch = gulpLoadPlugins.watch;

const startWatch = () => {
  watch("code-origin/js/**/*.js", function () {
    // todo 需要执行对js文件的相关操作
  })
}

```

## 更全面的Gulp-watch使用方法

现在有两个文件目录，一个是code-origin(未压缩前的代码)，另一个是code-mini（压缩后的代码）

在开发阶段的时候，我的目的：
1. 我新增了一个文件，我希望该操作能同步到压缩后的文件中
2. 我修改了一个文件，我希望该操作能同步到压缩后的文件中
3. 我删除了一个文件，我希望该操作能同步到压缩后的文件中
4. 我新增了一些文件，但这些文件不是html、js、css，此时我也希望该操作能同步到压缩后的文件中
5. 我希望保持开发目录结构的清晰，我删除了一些文件夹，我希望该操作能同步到压缩后的文件中

### 文件目录结构（老样子）

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

### gulpfile.js配置

::: tip
为了基本的演示，去除了相关文件打包操作
:::

```js
const { series, parallel, src, dest } = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins')();

const watch = gulpLoadPlugins.watch;

const del = require('del')

const enterFileName = 'code-origin'
const exportFileName = 'code-mini'

// 清除文件
const clean = () => {
  return del(exportFileName, { force: true })
}

// 复制文件/文件夹至目标目录
const copy = (enter, output, base = enterFileName) => {
  return function () {
    // base的作用是为了映射到输出目录时能和原始目录结构保持一致性
    return src(enter, { base: base })
      .pipe(dest(output))
  }
}

// 开始执行watch监听
const startWatch = () => {
  // 监听开发环境代码下的所有文件夹下的所有文件
  // 事件解析
  // add：文件新增 change：文件修改 unlink：文件删除 addDir：新增文件夹 unlinkDir：文件夹删除了

  // 此处是对文件直接进行了 copy操作，未进行相关的代码压缩 如有需要可以自行配置
  // 为什么加了 .on(finish)操作？这是为了在该操作完成后可以在里面执行浏览器刷新操作 配合browser-sync（此处暂时不演示，太简单了）
  watch(`${enterFileName}/**`)
    .on('add', function (path) {
      // 如果需要启用代码压缩等，可以通过path文件后缀判断文件类型来执行相应的操作
      copy(path, `${exportFileName}`)().on('finish', function () {
        console.log('this is add finish')
      })
    })
    .on('change', function (path) {
      copy(path, `${exportFileName}`)().on('finish', function () {
        console.log('this is change finish')
      })
    })
    .on('unlink', function (path) {
      const miniFilePath = path.replace(enterFileName, exportFileName)
      del(miniFilePath)
      console.log('this is unlink finish')
    })
    .on('addDir', function (path) {
      console.log(`addDir ${path}`)
      copy(path, `${exportFileName}`)().on('finish', function () {
        console.log('this is addDir finish')
      })
    })
    .on('unlinkDir', function (path) {
      console.log(`unlinkDir ${path}`)
      const miniFilePath = path.replace(enterFileName, exportFileName)
      del(miniFilePath)
      console.log('this is unlinkDir finish')
    })
}

exports.startWatch = startWatch
```

### 添加运行命令

```json
"scripts": {
  "startWatch": "gulp startWatch"
},
```

### 执行运行命令
```
npm run startWatch
```

### 效果演示

<!-- <iframe
  src="/audios/code-gulp-watch.mp4"
  scrolling="no"
  border="0"
  frameborder="no"
  framespacing="0"
  allowfullscreen="true">
</iframe> -->

## 总结

利用gulp-watch插件能监听文件修改，新增、删除等。此处只是演示了文件变化后对文件的copy操作。

需要对文件采用更多的操作可以在相应的监听事件中对文件判断来执行不同的操作，这样的情况下就需要写成这种

```js
// 原始的js压缩 路径写死
const miniJs = () => {
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

// watch事件后的js压缩方法
// 只是需要一个入口文件，因为输出文件固定了，就没必要在加动态参数
const miniWatchJs = (entry) => {
  return function () {
    return src(entry) // 动态入口文件
    .pipe(babel())
    .pipe(uglify({
      compress: true,
      mangle: true
    }))
    // .pipe(stripDebug())
    .pipe(dest(`${exportFileName}`))
  }
}

// 然后在watch中调用
// miniWatchJs(path)() 同copy(path, `${exportFileName}`)()的调用
```

这样的优点就是只对单一文件做压缩处理，而不是所有的文件，就会提高效率。如果改动的文件需要影响到其他文件(如需要concat的js)，那就需要再去执行concat相关的操作
