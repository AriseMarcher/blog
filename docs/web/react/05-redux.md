---
title: React-- Redux
date: 2022-10-11 21:59:00
sidebar: auto
tags:
 - react
categories:
 - react
---

## 1 Redux核心


### 1.1 Redux介绍

JavaScript 状态容器，提供可预测化的状态管理

```jsx
const state = {
  user: null,
  isLogin: false
}
```

### 1.2 Redux获取

+ [官网](https://cn.redux.js.org/)
+ CDN
  `
  <script src="https://cdn.bootcdn.net/ajax/libs/redux/4.2.0/redux.js"></script>
  `

### 1.3 Redux核心概念及工作流程

+ Store: 存储状态的容器，JavaScript对象
+ View：视图，HTML页面
+ Actions: 对象，描述对状态进行怎样的操作
+ Reducers: 函数，操作状态并返回新的状态

<img :src="$withBase('/images/react/redux/1.jpg')" alt="">

### 1.4 简单计数器示例

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

### 1.5 Redux核心API

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

## 2 React + Redux

### 2.1 React中不使用Redux缺点

在React中组件通信的数据流是单向的, 顶层组件可以通过props属性向下层组件传递数据, ⽽下层
组件不能向上层组件传递数据, 要实现下层组件修改数据, 需要上层组件传递修改数据的⽅法到下层
组件. 当项⽬越来越⼤的时候, 组件之间传递数据变得越来越困难

<img :src="$withBase('/images/react/redux/2.jpg')" alt="">

### 2.2 React中使用Redux优点

使⽤Redux管理数据，由于Store独⽴于组件，使得数据管理独⽴于组件，解决了组件与组件之间传递数据困难的问题。

<img :src="$withBase('/images/react/redux/3.jpg')" alt="">

### 2.3 下载 Redux

`npm install redux react-redux`

### 2.4 Redux工作流程

1. 组件通过dispatch方法触发Action
2. Store接受Action并将Action分发给Reducer
3. Reducer根据Action类型对状态进行更改并将更改后的状态返回给Store
4. 组件订阅了Store的状态，Store中的状态更新会同步到组件

<img :src="$withBase('/images/react/redux/4.jpg')" alt="">

### 2.5 Redux 使用步骤

#### 2.5.1 创建Store和Reducer

1. 创建Store需要使用createStore方法，方法执行后的返回值就是Store，方法需要从redux中引入
2. createStore方法的第一个参数需要传递reducer
3. reducer是一个函数，函数返回什么，store中就存储什么，函数名称自定义

```js
import { createStore } from 'redux'
const store = createStore(reducer)
function reducer() {
  return { count: 1 }
}
```

#### 2.5.2 组件获取Store中的数据

:::tip
Provider + connect
:::

1. 将store中的数据放在Provider组件中，Provider组件是存储共享数据的地方
```js
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
Re

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Counter />
    </Provider>
  </React.StrictMode>
);
```

2. 组件使用connect方法获取数据并将数据通过props传递进组件
<img :src="$withBase('/images/react/redux/5.jpg')" alt="">

代码示例：

```js
import React from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as counterActions from '../store/actions/counter.actions'

function Counter ({count, increment, decrement}) {
  return (
    <div>
      <button onClick={() => increment(5)}>+</button>
      <span>{count}</span>
      <button onClick={() => decrement(5)}>-</button>
    </div>
  )
}

/**
 * react-redux
 *  Provider 组件 将创建出来的Store放在一个全局组件能够拿到的地方
 *  connect 方法 订阅store 当store状态发生变化后重新渲染组件
 */


// 1. connect 方法会帮助我们订阅store 当store中的状态发生更改的时候会帮助我们重新渲染组件
// 2. connect 方法可以让我们获取store中的状态 将状态通过组件的props属性映射给组件
// 3. connect 方法可以让我们获取dispatch方法
// 4. connect 第一个参数 函数 state组件当中的状态
// 4. connect 第二个参数 返回一个对象 定义什么都会映射到props中

const mapStateToProps = state => ({
  count: state.count,
  a: "b"
})

// 变更后
const mapDispatchToProps = dispatch => bindActionCreators(counterActions, dispatch)

// 更变前
// const mapDispatchToProps = dispatch => ({
//   increment () {
//     dispatch({ type: 'increment' })
//   },
//   decrement () {
//     dispatch({ type: 'decrement' })
//   }
// })

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

```

组件使用connect方法获取数据并将数据通过props传递进组件

```js
import { connect } from 'react-redux'
const mapStateToProps = state => ({
  count: state.count
})
export default connect(mapStateToProps)(组件名称)
```

#### 2.5.3. 组件更改Store中的数据

3.1 定义 action （action是改变状态的唯一途径）
```js
{ type: '描述对数据要进行什么要的操作' }
```

3.2 组件触发 action

```js
this.props.dispatch({ type: '描述对数据要进行什么要的操作' })
```

3.3 reducer 接受action,针对 action 对数据进行处理并返回

```js
const initialState = { count: 0 }
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case '描述对数据要进行什么要的操作':
      return { count: state.count + 1 };
    default:
      return state;
  }
}
```

#### 2.5.4. 为 action 传递参数

1. 传递参数
```js
<button onClick={() => increment(5)}>增加按钮</button>
```
2. 接受参数，传递 reducer
```js
export const increment = payload => ({ type: INCREMENT, payload })
```
3. reducer 根据接收到的数据进行处理
```js
export default (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + action.payload }
  }
}
```


## Redux中间件

## Redux常用中间件

## Redux综合案例
