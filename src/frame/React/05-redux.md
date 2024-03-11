---
title: React-- Redux
sidebar: true
excerpt: 人生最高之理想，在求达于真理。-- 李大钊
tag:
 - react
category:
 - react
---

## 1 Redux核心


### 1.1 Redux介绍

JavaScript 状态容器，提供可预测化的状态管理

```js
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

![示例](/assets/images/react/redux/1.jpg =500x300)

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

![示例](/assets/images/react/redux/2.jpg =500x300)

### 2.2 React中使用Redux优点

使⽤Redux管理数据，由于Store独⽴于组件，使得数据管理独⽴于组件，解决了组件与组件之间传递数据困难的问题。

![示例](/assets/images/react/redux/3.jpg =500x300)

### 2.3 下载 Redux

`npm install redux react-redux`

### 2.4 Redux工作流程

1. 组件通过dispatch方法触发Action
2. Store接受Action并将Action分发给Reducer
3. Reducer根据Action类型对状态进行更改并将更改后的状态返回给Store
4. 组件订阅了Store的状态，Store中的状态更新会同步到组件

![示例](/assets/images/react/redux/4.jpg =500x300)

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
![示例](/assets/images/react/redux/5.jpg =500x300)

组件使用connect方法获取数据并将数据通过props传递进组件

```js
import { connect } from 'react-redux'
const mapStateToProps = state => ({
  count: state.count
})
export default connect(mapStateToProps)(组件名称)
```

#### 2.5.3. 组件更改Store中的数据

1 定义 action （action是改变状态的唯一途径）
```js
{ type: '描述对数据要进行什么要的操作' }
```

2 组件触发 action

```js
this.props.dispatch({ type: '描述对数据要进行什么要的操作' })
```

3 reducer 接受action,针对 action 对数据进行处理并返回

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
2. 接受参数，传递给 reducer
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

### 2.6 优化

#### 2.6.1 使用 Action Creator函数将触发Action的代码独立成函数

在组件中通过调用<code>this.props.dispatch({type:'描述对数据进行怎么样的操作'})</code>方法触发action,会造成HTML模板在视觉上的混乱

```js
const { increment, decrement } = this.props
<button onClick={increment}>增加</button>
<button onClick={decrement}>减少</button>
```

```js
const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = dispatch => ({
  increment () {
    dispatch({ type: 'increment' })
  },
  decrement () {
    dispatch({ type: 'decrement' })
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(组件名称)
```

#### 2.6.2 Action Creators函数绑定

触发action的函数，内部代码重复率非常高，所以React提供了方法帮我们生成这些函数，代替开发者手写

```js
// store/actions/counter.action.js
export const increment = () => ({ type: 'increment' })
export const decrement = () => ({ type: 'decrement' })

// 在组件中
import { bindActionCreators } from 'redux'
import * as counterActions from '../store/actions/counter.action'
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(counterActions, dispatch)
})
```

#### 2.6.3 将Action类型字符串独立成常量

Action类型字符串组件在触发Action时需要使用，Reducer在接受Action时也需要使用，由于字符串不存在代码提示，存在写错的风险，所以要将它独立成常量.

#### 2.6.4 拆分Reducer

当需要管理的数据越来越多时，reducer中的代码会变得越来越大.React允许将一个大的reduce拆分成若干个小的reducer，最后进行合并使用

最后的代码代码示例：

```
<!-- 目录结构部分 -->
|- src
  |- components
    |- Counter.js
    |- Modal.js
  |- store
    |- actions
      |- counter.action.js
      |- modal.action.js
    |- const
      |- counter.const.js
      |- modal.const.js
    |- reducers
      |- counter.reducer.js
      |- modal.reducer.js
      |- root.reducer.js
    index.js
```

##### components
###### Counter.js
```js
import React from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as counterActions from '../store/actions/counter.action'

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
  count: state.counter.count
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

###### Modal.js

```js
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as modalActions from '../store/actions/modal.action'

function Modal ({ showStatus, isShow, isHide }) {
  const styles = {
    width: 200,
    height: 200,
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginLeft: -100,
    marginTop: -100,
    backgroundColor: 'skyblue',
    display: showStatus ? 'block' : 'none'
  }
  
  return <div>
    <button onClick={isShow}>显示</button>
    <button onClick={isHide}>隐藏</button>
    <div style={styles}></div>
  </div>
}

const mapStateToProps = state => ({
  showStatus: state.modal.showStatus
})

const mapDispatchToProps = dispatch => bindActionCreators(modalActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
```

##### actions

```js
// counter.action.js
import { DECREMENT, INCREMENT } from "../const/counter.const"

export const increment = payload => ({ type: INCREMENT, payload })
export const decrement = payload => ({ type: DECREMENT, payload })

// modal.action.js
import { ISHIDEMODAL, ISSHOWMODAL } from "../const/modal.const"

export const isShow = () => ({ type: ISSHOWMODAL })
export const isHide = () => ({ type: ISHIDEMODAL })
```

##### const

```js
// counter.const.js
export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'

// modal.const.js
export const ISSHOWMODAL = 'isShowModal'
export const ISHIDEMODAL = 'isHideModal'
```

##### reducers

###### counter.reducer.js
```js
import { DECREMENT, INCREMENT } from "../const/counter.const"

const initialState = {
  count: 0
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count -  action.payload,
      };
    default: 
      return state
  }
}
```

###### modal.reducer.js
```js
import { ISSHOWMODAL, ISHIDEMODAL } from "../const/modal.const"

const initialState = {
  showStatus: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch(action.type) {
    case ISSHOWMODAL:
      return {
        ...state,
        showStatus: true,
      }
    case ISHIDEMODAL:
      return {
        ...state,
        showStatus: false,
      }
    default: 
      return state
  }
}
```

###### root.reducer.js
```js
import { combineReducers } from 'redux'

import CounterReducer from './counter.reducer'
import ModalReducer from './modal.reducer'

// { counter: { count: 0 } , modal: { showStatus: false } }
export default combineReducers({
  counter: CounterReducer,
  modal: ModalReducer
})
```

##### index.js
```js
import { createStore } from 'redux'
import RootReducer from './reducers/root.reducer'

export const store = createStore(RootReducer)
```



## 3 Redux中间件

### 3.1 何为中间件？
中间件本身是一个函数，允许我们扩展redux应用程序

### 3.2 中间件流程图

![示例](/assets/images/react/redux/6.jpg =500x300)

### 3.3 开发 Redux 中间件

中间件开发的模板代码

柯里化形式的函数
```js
export default store => next => action = {  }
```
要求返回一个函数，再返回一个函数

action: 组件触发的action对象,通过对action.type决定是否对它处理
next: 中间件处理完毕后需要调用next将其传递给下一个中间件在传递给reducer，可以存在多个中间件

### 3.4 注册中间件

只有把开发好的中间件注册给store，才能生效

```js
import { createStore, applyMiddleware } from 'redux'
// 自己开发的中间件
import logger from './middleware/logger'
import test from './middleware/test'

createStore(reducer, applyMiddleware(
  logger,
  test
))
```

```js
// middleware/logger.js
export default store => next => action => {
  // 我需要打印下 action 的信息
  console.log(store)
  console.log(action)
  next(action)
}

// middleware/test.js
// eslint-disable-next-line import/no-anonymous-default-export
export default store => next => action => {
  console.log('test 中间件')
  next(action)
}
```

### 3.5 中间件开发实例 thunk

简单实现一个可以在Redux的工作流程中加入异步代码

```js
// eslint-disable-next-line import/no-anonymous-default-export
export default ({dispatch}) => next => action => {
  // 1. 当前这个中间件函数不关心你想执行什么样的异步操作 只关心你执行的是不是异步操作
  // 2. 如果你执行的是异步操作 你在触发action的时候 传递一个函数过来
  //    如果你执行的是同步操作 就传递 action 对象
  // 3. 异步操作代码要写在你传递进来的函数中
  // 4. 当前这个中间件函数在调用你传进来的函数时 要将dispatch方法传递过去
  //    异步方法调用完成后通过调用dispatch方法触发另外一个action。
  //    再传递一个参数，然后再把这个参数传递给reducer
  if (typeof action === 'function') {
    return action(dispatch)
  }
  next(action)
}
```

调用举例

```js
import { DECREMENT, INCREMENT } from "../const/counter.const"

export const increment = payload => ({ type: INCREMENT, payload })
export const decrement = payload => ({ type: DECREMENT, payload })

export const increment_async = payload => dispatch => {
  setTimeout(() => {
    dispatch(increment(payload))
  }, 2000)
}
```


## 4 Redux常用中间件

### 4.1 redux-thunk
:::tip
允许在redux工作流程中加入异步代码
:::

#### 下载
`npm install redux-thunk`

#### 引入
```js
import thunk from 'redux-thunk'

```

#### 注册

```js
import { applyMiddleware } from 'redux'

createStore(rootReducer, applyMiddleware(thunk))
```

#### 使用redux-thunk中间件
```js
const loadPosts = () => async dispatch => {
  const post = await axiod.get('/api/posts').then(response => response.data)
  dispatch({ type: LOADPOSTSSUCCESS, payload: posts })
}
```

### 4.2 redux-sage
:::tip
允许在redux中加入异步代码，相比于redux-thunk更加的强大
:::

#### 4.2.1 redux-sage解决的问题

redux-saga可以将异步操作从Action Creator文件中抽离出来，放在一个单独的文件中

#### 4.2.2 redux-saga 下载
`npm install redux-saga`

#### 4.2.3 创建 redux-saga 中间件
```js
import createSagaMiddleware from 'redux-saga'
// 中间件需要调用方法得到
const sageMiddleware = createSagaMiddleware()
```

#### 4.2.4 注册 sagaMiddleware
```js
createStore(reducer, applyMiddleware(sageMiddleware))
```
#### 4.2.5 使用saga接受action执行异步操作
```js
// takeEvery 用来接受action的类型字符串
// put 用来触发另外一个action 当异步操作返回结果以后 需要通过put方法去触发一个action 帮助把异步操作的结果返回给action 跟dispatch作用是一样的
import { takeEvery, put } from 'redux-sage/effects'

function* load_posts () {
  // 异步请求数据
  const { data } = yield axios.get('/api/posts.json')
  // 触发一个action 并且把数据传递给action，让action把该数据传递给reducer，让reducer将数据保存到store中
  yield put(load_posts_success(data))
}

// 要求默认导出一个 generator 函数
export default function* postSaga () {
  // 1. action的类型字符串
  // 2. 接受到后需要处理的函数
  yield takeEvery(LOAD_POSTS, load_posts)
}
```

#### 4.2.6 启动saga

```js
import postSaga from './store/sagas/post.sage'
sagaMiddleware.run(postSaga)
```

##### 代码示例
```
|- src
  |- components
    |- Counter.js
    |- Modal.js
  |- store
    |- actions
      |- counter.action.js
      |- modal.action.js
    |- const
      |- counter.const.js
      |- modal.const.js
    |- reducers
      |- counter.reducer.js
      |- modal.reducer.js
      |- root.reducer.js
    |- sagas
      |- counter.saga.js
      |- modal.saga.js
      |- root.saga.js
    |- index.js
```

##### component
```js
// component/Counter.js
import React from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as counterActions from '../store/actions/counter.action'

function Counter ({
  count,
  increment,
  decrement,
  increment_async
}) {
  return (
    <div>
      <button onClick={() => increment_async(20)}>+</button>
      <span>{count}</span>
      <button onClick={() => decrement(5)}>-</button>
    </div>
  )
}

const mapStateToProps = state => ({
  count: state.counter.count
})

const mapDispatchToProps = dispatch => bindActionCreators(counterActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```

```js
// component/Modal.js
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as modalActions from '../store/actions/modal.action'

function Modal ({
  showStatus,
  isShow,
  isHide,
  isShow_async,
  show_async
}) {
  const styles = {
    width: 200,
    height: 200,
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginLeft: -100,
    marginTop: -100,
    backgroundColor: 'skyblue',
    display: showStatus ? 'block' : 'none'
  }
  
  return <div>
    <button onClick={show_async}>显示</button>
    <button onClick={isHide}>隐藏</button>
    <div style={styles}></div>
  </div>
}

const mapStateToProps = state => ({
  showStatus: state.modal.showStatus
})

const mapDispatchToProps = dispatch => bindActionCreators(modalActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

```

##### store/actions
```js
// counter.action.js
import { DECREMENT, INCREMENT, INCREMENT_ASYNC } from "../const/counter.const"

export const increment = payload => ({ type: INCREMENT, payload })
export const decrement = payload => ({ type: DECREMENT, payload })

export const increment_async = payload => ({ type: INCREMENT_ASYNC, payload })

```

```js
// modal.action.js
import { ISHIDEMODAL, ISSHOWMODAL, SHOWMODALASYNC } from "../const/modal.const"

export const isShow = () => ({ type: ISSHOWMODAL })
export const isHide = () => ({ type: ISHIDEMODAL })

export const show_async = () => ({ type: SHOWMODALASYNC })

```

##### store/const
```js
// counter.const.js
export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'
export const INCREMENT_ASYNC = 'increment_async'
```
```js
export const ISSHOWMODAL = 'isShowModal'
export const ISHIDEMODAL = 'isHideModal'
export const SHOWMODALASYNC = 'showModal_async'
```

##### store/reducers
```js
// counter.reducer.js
import { DECREMENT, INCREMENT } from "../const/counter.const"

const initialState = {
  count: 0
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count -  action.payload,
      };
    default: 
      return state
  }
}
```
```js
// modal.reducer.js
import { ISSHOWMODAL, ISHIDEMODAL } from "../const/modal.const"

const initialState = {
  showStatus: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch(action.type) {
    case ISSHOWMODAL:
      return {
        ...state,
        showStatus: true,
      }
    case ISHIDEMODAL:
      return {
        ...state,
        showStatus: false,
      }
    default: 
      return state
  }
}
```

##### store/sagas
```js
// counter.saga.js
import { takeEvery, put, delay } from 'redux-saga/effects'
import { increment, increment_async } from '../actions/counter.action'
import { INCREMENT_ASYNC } from '../const/counter.const'

// takeEvery 接受 action
// put 触发 action

function* increment_async_fn (action) {
  // 延迟 2s 不能用 setTimeout
  yield delay(2000)

  // 点击加10
  yield put(increment(action.payload))
}

export default function *  counterSaga() {
  // 接受 action 的类型字符串
  yield takeEvery(INCREMENT_ASYNC, increment_async_fn)
}
```

```js
// modal.saga.js
import { takeEvery, put, delay } from 'redux-saga/effects'
import { isShow } from '../actions/modal.action'
import { SHOWMODALASYNC } from '../const/modal.const'

function* showModal_async_fn(action) {
  yield delay(2000)
  yield put(isShow())
}

export default function* modalSaga () {
  yield takeEvery(SHOWMODALASYNC, showModal_async_fn)
}
```

```js
import { all } from 'redux-saga/effects'
import counterSaga from './counter.saga'
import modalSaga from './modal.saga'

// eslint-disable-next-line require-yield
export default function* rootSaga () {
  yield all([
    counterSaga(),
    modalSaga(),
  ])
}
```

##### store/index.js
```js
import { createStore, applyMiddleware } from 'redux'
import RootReducer from './reducers/root.reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/root.saga'

// 创建 sagaMiddleware
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(RootReducer, applyMiddleware(sagaMiddleware))

// 启动 counterSaga
sagaMiddleware.run(rootSaga)
```

### 4.3 redux-action

#### 4.3.1 redux-action解决的问题

redux流程中大量的样板代码读写很痛苦，使用redux-actions可以简化Action和Reducer的处理

抽离常量、switch action的type，action creator函数等都是样板代码

#### 4.3.2 redux-actions下载
`npm install redux-actions`

#### 4.3.3 创建Action

```js
import { createAction } from 'redux-action'

const increment_action = createAction('increment')
const decrement_action = createAction('decrement')
```

#### 4.3.4 创建Reducer
```js
import { handleActions as createReducer } from 'redux-actions'
import { increment_action, decrement_action } from '../action/counter.action'

const initialState = { count: 0 }
const counterReducer = createReducer({
  [increment_action]: (state, action) => ({ count: state.count +1 }),
  [decrement_action]: (state, action) => ({ count: state.count - 1 })
}, initialState)
export default counterReducer
```

#### 4.3.5 代码示例（有些混杂着saga，但并不影响，主要Counter相关的就行了）

```
|- src
  |- components
    |- Counter.js
    |- Modal.js
  |- store
    |- actions
      |- counter.action.js
      |- modal.action.js
    |- const
      |- counter.const.js
      |- modal.const.js
    |- reducers
      |- counter.reducer.js
      |- modal.reducer.js
      |- root.reducer.js
    |- sagas
      |- counter.saga.js
      |- modal.saga.js
      |- root.saga.js
    |- index.js
```

##### src/components/Counter.js
```js
import React from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as counterActions from '../store/actions/counter.action'

function Counter ({
  count,
  increment,
  decrement,
}) {
  return (
    <div>
      <button onClick={() => increment(10)}>+</button>
      <span>{count}</span>
      <button onClick={() => decrement(10)}>-</button>
    </div>
  )
}

const mapStateToProps = state => ({
  count: state.counter.count
})

// 变更后
const mapDispatchToProps = dispatch => bindActionCreators(counterActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```
##### src/components/Modal.js (该文件并未改动)
##### src/store/actions/counter.action.js
```js
// 此处是用了 createAction 去一个个创建 也有 createActions 方法
import { createAction } from 'redux-actions'

export const increment = createAction('increment')
export const decrement = createAction('decrement')

```
##### src/store/actions/modal.action.js (该文件并未改动)
##### src/reducers/counter.reducer.js
```js
import { handleActions as createReducer } from 'redux-actions'
import { increment, decrement } from '../actions/counter.action'

const initialState = {
  count: 0
}

const handleIncrement = (state, action) => ({ count: state.count + action.payload })
const handleDecrement = (state, action) => ({ count: state.count - action.payload })

export default createReducer({
  [increment]: handleIncrement,
  [decrement]: handleDecrement,
}, initialState)

```
##### src/reducers/modal.reducer.js (该文件并未改动)
##### src/reducers/root.reducer.js (该文件并未改动)
