---
title: React-- Redux simulation
date: 2022-10-13 16:05:00
sidebar: auto
tags:
 - react
categories:
 - react
---

## 自实现 redux 功能

### redux核心代码
```js
/**
 * createStore(reducer, preloadedState, enhancer)
 * {
 *    getState, dispatch, subscribe
 * }
 */
function createStore (reducer, preloadedState) {
  // store对象中存储的状态
  var currentState = preloadedState
  // 存放订阅者函数
  var currentListeners = []

  // 获取状态
  function getState () {
    return currentState
  }

  // 触发action
  function dispatch (action) {
    currentState = reducer(currentState, action)
    // 循环数组 调用订阅者
    for (var i = 0; i < currentListeners.length; i++) {
      // 获取订阅者
      var listener = currentListeners[i]
      // 调用订阅者
      listener()
    }
  }

  // 订阅状态
  function subscribe (listener) {
    currentListeners.push(listener)
  }

  return {
    getState,
    dispatch,
    subscribe
  }
}
```

### redux 参数约束
```js
/**
 * createStore(reducer, preloadedState, enhancer)
 * {
 *    getState, dispatch, subscribe
 * }
 */
function createStore (reducer, preloadedState) {
  // 约束 reducer 参数类型
  if (typeof reducer !== 'function') {
    throw new Error('reducer必须是函数')
  }

  // store对象中存储的状态
  var currentState = preloadedState
  // 存放订阅者函数
  var currentListeners = []

  // 获取状态
  function getState () {
    return currentState
  }

  // 触发action
  function dispatch (action) {
    // 判断 action 是否是对象
    if (!isPlainObject(action)) {
      throw new Error('action必须是对象')
    }
    // 判断对象中 是否具有 type 属性
    if (typeof action.type === 'undefined') {
      throw new Error('action对象中必须要有type属性')
    }

    currentState = reducer(currentState, action)
    // 循环数组 调用订阅者
    for (var i = 0; i < currentListeners.length; i++) {
      // 获取订阅者
      var listener = currentListeners[i]
      // 调用订阅者
      listener()
    }
  }

  // 订阅状态
  function subscribe (listener) {
    currentListeners.push(listener)
  }

  return {
    getState,
    dispatch,
    subscribe
  }
}

// 判断 obj 参数是否是对象
function isPlainObject (obj) {
  // 排除基本数据类型和null
  if (typeof obj !== 'object' || obj === null) return false
  // 区分数组和对象
  var proto = obj
  while (Object.getPrototypeOf(proto) != null) {
    proto = Object.getPrototypeOf(proto)
  }
  return Object.getPrototypeOf(obj) === proto
}

console.log(isPlainObject([]))
```

### redux createStore enhancer
```js
/**
 * createStore(reducer, preloadedState, enhancer)
 * {
 *    getState, dispatch, subscribe
 * }
 */
function createStore (reducer, preloadedState, enhancer) {
  // 约束 reducer 参数类型
  if (typeof reducer !== 'function') {
    throw new Error('reducer必须是函数')
  }
  // 判断 enhancer 是否传递
  if (typeof enhancer !== 'undefined') {
    // 判断 enhancer 是否是一个函数
    if (typeof enhancer !== 'function') {
      throw new Error('enhancer必须是一个函数')
    }
    return enhancer(createStore)(reducer, preloadedState)
  }

  // store对象中存储的状态
  var currentState = preloadedState
  // 存放订阅者函数
  var currentListeners = []

  // 获取状态
  function getState () {
    return currentState
  }

  // 触发action
  function dispatch (action) {
    // 判断 action 是否是对象
    if (!isPlainObject(action)) {
      throw new Error('action必须是对象')
    }
    // 判断对象中 是否具有 type 属性
    if (typeof action.type === 'undefined') {
      throw new Error('action对象中必须要有type属性')
    }

    currentState = reducer(currentState, action)
    // 循环数组 调用订阅者
    for (var i = 0; i < currentListeners.length; i++) {
      // 获取订阅者
      var listener = currentListeners[i]
      // 调用订阅者
      listener()
    }
  }

  // 订阅状态
  function subscribe (listener) {
    currentListeners.push(listener)
  }

  return {
    getState,
    dispatch,
    subscribe
  }
}

// 判断 obj 参数是否是对象
function isPlainObject (obj) {
  // 排除基本数据类型和null
  if (typeof obj !== 'object' || obj === null) return false
  // 区分数组和对象
  var proto = obj
  while (Object.getPrototypeOf(proto) != null) {
    proto = Object.getPrototypeOf(proto)
  }
  return Object.getPrototypeOf(obj) === proto
}

console.log(isPlainObject([]))

```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <button id="increment">+1</button>
  <span id="box">0</span>
  <button id="decrement">-1</button>
</body>
<script src="myRedux.js"></script>
<script>
  function enhancer (createStore) {
    return function (reducer, preloadState) {
      var store = createStore(reducer, preloadState)
      console.log(store)
      // 模拟 redux-thunk
      var dispatch = store.dispatch;
      function _dispatch (action) {
        if (typeof action === 'function') {
          return action(dispatch)
        }
        dispatch(action)
      }
      return {
        ...store,
        dispatch: _dispatch
      }
    }
  }
  function reducer (state, action) {
    switch (action.type) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state - 1;
      default:
        return state;
    }
  }
  // 创建store
  var store = createStore(reducer, 0, enhancer)
  console.log(store)

  store.subscribe(function () {
    document.getElementById('box').innerHTML = store.getState()
  })

  document.getElementById('increment').onclick = function () {
    // store.dispatch({ type: 'increment' })
    store.dispatch(function (dispatch) {
      setTimeout(function() {
        dispatch({type: 'increment'})
      }, 1000)
    })
  }
  document.getElementById('decrement').onclick = function () {
    store.dispatch({ type: 'decrement' })
  }
</script>
</html>
```