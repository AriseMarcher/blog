---
title: 常用API简介
date: 2022/09/19
tags:
 - uniapp
categories:
 -  uniapp
---

## API 简介 

[官方地址](https://uniapp.dcloud.net.cn/api/)


> `uni-app`的 js 代码，h5 端运行于浏览器中，非 h5 端 Android 平台运行在 v8 引擎中，iOS 平台运行在 iOS 自带的 jscore 引擎中。所以，`uni-app`的 jsAPI 由标准 ECMAScript 的 js API 和 uni 扩展 API 这两部分组成。

> ECMAScript 由 Ecma 国际管理，是基础 js 语法。浏览器基于标准 js 扩充了window、document 等 js API；Node.js 基于标准 js 扩充了 fs 等模块；小程序也基于标准 js 扩展了各种 wx.xx、my.xx、swan.xx 的 API。
>
> 标准 ecmascript 的 API 非常多，比如：console、settimeout等等。

> 非 H5 端，虽然不支持 window、document、navigator 等浏览器的 js API，但也支持标准 ECMAScript。
>
> 开发者不要把浏览器里的 js 等价于标准 js。
>
> 所以 uni-app 的非 H5 端，一样支持标准 js，支持 if、for 等语法，支持字符串、数组、时间等变量及各种处理方法，仅仅是不支持浏览器专用对象。
