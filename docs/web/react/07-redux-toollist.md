---
title: React-- Redux Toolkit
date: 2022-10-13 22:03:00
sidebar: auto
tags:
 - react
categories:
 - react
---

## 概述

对Redux进行的二次封装，用于高效Redux开发，使Redux的使用变得简单

[传送门](https://cn.redux.js.org/redux-toolkit/overview)

### 状态切片

对于状态切换，可以认为它就是原本Redux中的那一个个小的Reducer函数

在Redux中，原本Reducer函数和Action对象需要分别创建，现在通过状态切片替代，它会返回Reducer函数和Action对象

#### 创建状态切片

```js
import { createSlice } from '@reduxjs/toolkit'

const { reducer: TodosReducer, actions } = createSlice()
```

配置 crateSlice

```js
export const TODOS_FEATURE_KEY = "todos"

createSlice({
  name: TODOS_FEATURE_KEY,
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    }
  }
})
```

导出代码

```js
const { reducer: TodosReducer, actions } = createSlice()

export const { addTodo } = actions
export default TodoReducer
```

#### 创建 Store

```js
import { configureStore } from '@reduxjs/toolkit'
import TodosReducer, { TODOS_FEATURE_KEY } from './todos'

export default configureStore({
  reducer: {
    [TODOS_FEATURE_KEY]: TodosReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})
```

#### 配置 Provider
```js
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

#### 在组件中触发Action，获取状态
```js
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, TODOS_FEATURE_KEY } from '../../Store/todos.slice'

function Todos () {
  const dispatch = useDispatch()
  const todos = useSelector(state => state[TODOS_FEATURE_KEY])

  return (
    <div>
      <button onClick={() => dispatch(addTodo({id: 999, title: '测试任务'}))}></button>
    </div>
  )
}
```