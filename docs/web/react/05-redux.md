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
  `
  <script src="https://cdn.bootcdn.net/ajax/libs/redux/4.2.0/redux.js"></script>
  `

### Redux核心概念及工作流程

+ Store: 存储状态的容器，JavaScript对象
+ View：视图，HTML页面
+ Actions: 对象，描述对状态进行怎样的操作
+ Reducers: 函数，操作状态并返回新的状态

<img :src="$withBase('/images/react/redux/1.jpg')" alt="">

### 简单计数器示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <button id="plus">+</button>
  <span id="count">0</span>
  <button id="minus">-</button>
  <script src="https://cdn.bootcdn.net/ajax/libs/redux/4.2.0/redux.js"></script>
  <script>
    // 存储默认状态
    var initialState = {
      count: 0
    }

    // 2. 创建 reducer 函数
    function reducer (state = initialState, action) {
      switch (action.type) {
        case 'increment':
          return { count: state.count + 1 }
        case 'decrement':
          return { count: state.count - 1 }
        default:
          return state;
      }
    }

    // 1. 创建 Store对象
    // 1.1 Redux.createStore第二个参数 (不建议这么使用)
    //    var store = Redux.createStore(reducer, { count: 0 })
    var store = Redux.createStore(reducer)

    // 4. 定义 action
    var increment = { type: 'increment' }
    var decrement = { type: 'decrement' }

    // 5. 给按钮添加点击事件
    var plus = document.getElementById('plus')
    var minus = document.getElementById('minus')
    var count = document.getElementById('count')

    plus.addEventListener('click', function () {
      // 6. 触发action
      store.dispatch(increment, 2)
    })

    minus.addEventListener('click', function () {
      // 6. 触发action
      store.dispatch(decrement)
    })

    // 7. 订阅 store
    store.subscribe(() => {
      // 获取 store 对象中存储的状态
      console.log(store.getState())
      count.innerHTML = store.getState().count
    })

  </script>
</body>
</html>
```

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

### 缺点

在React中组件通信的数据流是单向的, 顶层组件可以通过props属性向下层组件传递数据, ⽽下层
组件不能向上层组件传递数据, 要实现下层组件修改数据, 需要上层组件传递修改数据的⽅法到下层
组件. 当项⽬越来越⼤的时候, 组件之间传递数据变得越来越困难

<img :src="$withBase('/images/react/redux/2.jpg')" alt="">

### 优点

使⽤Redux管理数据，由于Store独⽴于组件，使得数据管理独⽴于组件，解决了组件与组件之间传递数据困难的问题。

<img :src="$withBase('/images/react/redux/3.jpg')" alt="">

### 下载 Redux

`npm install redux react-redux`

### Redux工作流程

1. 组件通过dispatch方法触发Action
2. Store接受Action并将Action分发给Reducer
3. Reducer根据Action类型对状态进行更改并将更改后的状态返回给Store
4. 组件订阅了Store的状态，Store中的状态更新会同步到组件

<img :src="$withBase('/images/react/redux/4.jpg')" alt="">

## Redux中间件

## Redux常用中间件

## Redux综合案例
