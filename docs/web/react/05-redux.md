---
title: React-- Redux
date: 2022-10-11 21:59:00
sidebar: auto
tags:
 - react
categories:
 - react
---

## Redux核心


### Redux介绍

JavaScript 状态容器，提供可预测化的状态管理

```jsx
const state = {
  user: null,
  isLogin: false
}
```

### Redux获取

+ [官网](https://cn.redux.js.org/)
+ CDN
  ```
  <script src="https://cdn.bootcdn.net/ajax/libs/redux/4.2.0/redux.js"></script>
  ```

### Redux核心概念及工作流程

+ Store: 存储状态的容器，JavaScript对象
+ View：视图，HTML页面
+ Actions: 对象，描述对状态进行怎样的操作
+ Reducers: 函数，操作状态并返回新的状态

<img :src="$withBase('/images/react/redux/1.jpg')" alt="">

### Redux核心API

```js
// 创建 Store 状态容器
const store = Redux.createStore(reducer)

// 创建用于处理状态的 reducer 函数
function reducer (state = initialState, action) {}

// 获取状态
store.getState()

// 订阅状态
store.subscribe(function () {})

// 触发 Action
store.dispatch({ type: 'description...' })
```

## React + Redux

## Redux中间件

## Redux常用中间件

## Redux综合案例
