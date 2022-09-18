---
title: 基本使用
date: 2022/07/31
sidebar: auto
tags:
 - gulp
categories:
 -  gulp
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

### 创建gulpfile.js文件（根目录下）

```js
<!-- 这是一些最简单的gulp task示例 -->

// 创建任务方式一
function defaultTask (cb) {
  cb()
}

// 创建任务方式二
// 该方式不需要exports导出就能实现gulp任务导出
gulp.task('bar', done => {
  // todo something
  done()
})

exports.default = defaultTask
```

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
