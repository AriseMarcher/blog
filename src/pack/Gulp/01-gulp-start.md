---
title: 基本使用
sidebar: true
excerpt: 深窥自己的心，而后发觉一切的奇迹在你自己。-- 培根
tag:
 - Gulp
category:
 - Gulp
---

## 介绍

[Gulp官网](https://www.gulpjs.com.cn/)

基于流的自动化构建工具，在开发过程中实现任务自动化，提高效率，创造更大的价值。

### 基本使用（gulp4.x）

检查node、npm和npx是否OK，如我使用的node版本为 16.12.0

```bash
node --version
```

### 创建项目目标并进入

```bash
mkdir [project-name]
cd [project-name]
```

### 创建package.json文件

```bash
npm init
```

### 创建gulp任务

在当前项目的根目录下创建gulpfile.js文件，开始编写一个简单的任务.
```js
<!-- 这是一些最简单的gulp task示例 -->

// 【推荐】创建任务方式一 再exports导出
function defaultTask (cb) {
  cb()
}

// 【不怎么推荐】创建任务方式二
// 该方式不需要exports导出就能实现gulp任务导出
gulp.task('bar', done => {
  // todo something
  done()
})

exports.default = defaultTask
```

每一个gulp任务都是一个异步的javaScript函数

此函数可以接受一个callback作为参数，调用callback函数任务就会结束。
或者是一个返回stream、promise、event emitter、child process或observable类型的函数

任务可以是public和private类型

+ 公开任务（Public tasks）从gulpfile中被导出（export），可以通过gulp命令直接调用
+ 私有任务（Private tasks）被设计在内部使用，通常作为<code>series()</code>或<code>parallel()</code>组合的组成部分。

### gulp任务测试

gulp4.x依赖本身自带gulp-cli，因此不需要再全局安装gulp-cli

```bash
npx gulp --tasks
```

```bash
PS D:\arise-codes\gulp-es5-example> npx gulp --tasks
[17:27:13] Tasks for D:\arise-codes\gulp-es5-example\gulpfile.js
[17:27:13] ├── bar
[17:27:13] └── default
```

需要执行相应的task任务在后面加上已经定义好的任务名称就行。如果是执行默认default（默认任务则可以省略），即 <code>npx gulp</code>

```bash
npx gulp [task-name]
```


### Gulp和Webpack的区别

gulp的核心概念是 task runner

+ 可以定义一系列的任务，等待任务被执行
+ 基于文件Stream的构建流
+ 可以使用gulp的插件体系来完成某些任务

webpack 的核心理念是 module bundle

+ webpack是一个模块化的打包工具
+ 可以使用各种各样的loader来加载不同的模块
+ 可以使用各种各样的插件在webpack打包的生命周期完成其他的任务

gulp相比于webpack的优缺点：

+ gulp相对于webpack思想更加的简单，易用，更适合编写一些自动化的任务。
+ 对于大型项目（Vue、React、Angular）并不会使用gulp来构建，gulp默认不支持模块化。