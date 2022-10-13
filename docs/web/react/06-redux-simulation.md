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

### redux applyMiddleware
```
<!-- project -->
|- middlewares
  |- logger.js
  |- thunk.js
|- index.html
|- myRedux.js
```

```js
// logger.js
// store getState dispatch这两个方法
function logger (store) {
  // next 下一个中间件函数
  return function (next) {
    // 这才是中间件函数 外面两个函数是用来接受参数的
    return function (action) {
      console.log('logger')
      next(action)
    }
  }
}
```
```js
// thunk.js
function thunk (store) {
  // 最后一个中间件的 next 就是 dispatch这个方法
  return function (next) {
    return function (action) {
      console.log('thunk')
      next(action)
    }
  }
}
```
```js
// myRedux.js
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
// 判断对象的当前原型对象是否和顶层原型对象相同
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

// 中间件其实是对dispatch进行增强，applyMiddleware,
// 让多个中间件函数进行组合，触发action适合让多个中间件按照顺序进行执行

function applyMiddleware(...middlewares) {
  return function (createStore) {
    return function (reducer, preloadedState) {
      // 创建 store
      var store = createStore(reducer, preloadedState)
      // 阉割版的 store
      var middlewareAPI = {
        getState: store.getState,
        dispatch: store.dispatch,
      }

      // 调用中间件的第一层函数 传递阉割版的 store 对象
      var chain = middlewares.map(middleware => middleware(middlewareAPI))
      var dispatch = compose(...chain)(store.dispatch)
      return {
        ...store,
        dispatch
      }
    }
  }
}

function compose () {
  var funcs = [...arguments]
  return function (dispatch) {
    // 由于最后一个dispatch 是去触发真正的 reducer的
    // dispatch赋值改变
    /**
     * 1. 是最开始 createStore中的 dispatch
     * 2. function (next) { // 这个 next 是 dispatch
          return function (action) {
            console.log('thunk')
            next(action)
          }
        }
    * 3 function (next) { // 这个 next 是 thunk
        // 这才是中间件函数 外面两个函数是用来接受参数的
        return function (action) {
          console.log('logger')
          next(action)
        }
      }
    * 最后一步 返回 Logger (一开始的中间件)
      然后在 applyMiddleware 中增强了 dispatch（重新改变了）方法
      最后的执行操作就是
     */
    for (var i = funcs.length -1; i >= 0; i--) {
      dispatch = funcs[i](dispatch)
    }
    return dispatch
  }
}
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
<script src="middlewares/logger.js"></script>
<script src="middlewares/thunk.js"></script>

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
  var store = createStore(reducer, 0, applyMiddleware(logger, thunk))
  console.log(store)

  store.subscribe(function () {
    document.getElementById('box').innerHTML = store.getState()
  })

  document.getElementById('increment').onclick = function () {
    // logger -> thunk -> reducer
    store.dispatch({ type: 'increment' })
  }
  document.getElementById('decrement').onclick = function () {
    store.dispatch({ type: 'decrement' })
  }
</script>
</html>
```

### redux bindActionCreators
```js
function bindActionCreators (actionCreators, dispatch) {
  var boundActionCreators = {}

  for (var key in actionCreators) {
    (function (key) {
      boundActionCreators[key] = function () {
        dispatch(actionCreators[key]())
      }
    })(key)
  }
  return boundActionCreators
}

// 使用
// bindActionCreators 是将 actionCreators 转换成可以触发action的函数
var actions = bindActionCreators({increment, decrement}, store.dispatch)
console.log(actions)
function increment () {
  return { type: 'increment' }
}
function decrement () {
  return { type: 'decrement' }
}
document.getElementById('increment').onclick = function () {
  // logger -> thunk -> reducer
  // 这是之前的
  // store.dispatch({ type: 'increment' })
  // 这是修改之后的
  actions.increment()
}
document.getElementById('decrement').onclick = function () {
  // store.dispatch({ type: 'decrement' })
  actions.decrement()
}
```

### redux combineReducers

```js
function combineReducers(reducers) {
  // 1. 检查 reducer 类型 它必须是函数
  var reducerKeys = Object.keys(reducers)
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i]
    if (typeof reducers[key] !== 'function') {
      throw new Error('reducer 必须是函数')
    }
  }
  // 2. 调用一个个小的reducer 将每一个小的reducer中返回的状态存储在一个新的大的对象中
  return function (state, action) {
    var nextState = {}
    for (var i = 0; i < reducerKeys.length; i++) {
      var key = reducerKeys[i]
      var reducer = reducers[key]

      // 获取 reducer 的状态
      var previousStateForKey = state[key]
      nextState[key] = reducer(previousStateForKey, action)
    }
    return nextState
  }
}

// 简单使用示例
var rootReducer = combineReducers({
  counter: counterReducer
})

// 创建store
var store = createStore(rootReducer, { counter: 100 }, applyMiddleware(logger, thunk))
```