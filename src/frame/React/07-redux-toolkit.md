---
title: React-- Redux Toolkit
sidebar: true
excerpt: 悲观的人虽生犹死，乐观的人永生不老。-- 拜伦
tags:
 - react
categories:
 - react
---

### 1. 概述

对Redux进行的二次封装，用于高效Redux开发，使Redux的使用变得简单

[传送门](https://cn.redux.js.org/redux-toolkit/overview)

### 2. 状态切片

对于状态切换，可以认为它就是原本Redux中的那一个个小的Reducer函数

在Redux中，原本Reducer函数和Action对象需要分别创建，现在通过状态切片替代，它会返回Reducer函数和Action对象

1. 创建状态切片

```js
import { createSlice } from '@reduxjs/toolkit'

const { reducer: TodosReducer, actions } = createSlice()
```

2. 配置 crateSlice

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

3. 导出代码

```js
const { reducer: TodosReducer, actions } = createSlice()

export const { addTodo } = actions
export default TodoReducer
```

### 3. 创建 Store

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

### 4. 配置 Provider
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

### 6. 在组件中触发Action，获取状态
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

### 7. Action预处理

1. 当Action被触发后，可以通过prepare方法对Action进行预处理，处理完成后交给Reducer.prepare方法必须返回对象

```js
reducers: {
  addTodo: {
    reducer: (state, action) => {
      state.push(action.payload)
    },
    prepare: todo => {
      return { payload: { ...todo, title: 'the Title' } }
    }
  }
}
```

2. 执行异步操作一：

2.1 创建执行异步操作的Action创建函数

```js
import { createSlice, craeteAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const loadTodos = createAsyncThunk(
  "todos/loadTodos",
  (payload, thunkAPI) => {
    axios.get(payload).then(response => {
      thunkAPI.dispatch(setTodos(response))
    })
  }
)
```

2.2 创建接受异步操作结果的Reducer
```js
const { reducer: TodosReducer, actions } = createSlice({
  reducer: {
    setTodos: (state, action) => {
      action.payload.forEach(todo => state.push(todo))
    }
  }
})
```

2.3 在组件中触发Action

```js
function Todos() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadTodos("http://xxx.com/todos"))
  }, [])
}
```

3. 执行异步操作二

3.1创建执行异步操作的Action创建函数
```js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const loadTodos = createAsyncThunk("todos/loadTodos", payload => {
  return axios.get(payload).then(response = > response.data)
})
```

3.2 创建接受异步操作结果的Reducer

```js
createSlice({
  extraReduces: {
    [loadTodos.fulfilled]: (state, action) => {
      action.payload.forEach(toto => state.push(todo))
    }
  }
})
```

### 8. 配置中间件

`npm i redux-logger`

```js
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import logger from "redux-logger"

export default configureStore({
  // 内置的中间件 不要丢弃
  middleware: [...getDefaultMiddleware(), logger]
})
```

### 9. 实体适配器

将状态放入实体适配器，实体适配器提供操作状态的各种方法，简化操作

```js
import { createEntityAdapter } from "@reduxjs/toolkit"

const todosAdapter = createEntityAdapter()

todosAdapter.getInitialState()
todosAdapter.addOne(state, action.payload)
todosAdapter.addMany(state, action.payload)
```

在组件中获取状态，展示状态

```js
const todos = useSelector(state => state.todos.entities)

<ul>
  {Object.vlaues(todos).map((todo, index) => (
    <li key={index}>{todo.title}</li>
  ))}
</ul>
```

1. 实体适配器简化

代码简化，实体操作方法的第一个参数为state,第二个参数为action,内部会自动将对数据进行操作，比如对与addOne方法，它会自动将action.payload添加到state中

```js
reducers: {
  addTodo: todosAdapter.addOne
},
extraReducers: {
  [loadTodos.fulfilled]: todosAdpter.addMany
}
```

2. 实体适配器要求每一个实体必须拥有id属性作为唯一标识，如果实体中的唯一表示不叫做id，需要使用selectId进行声明

```js
const todosAdapter = createEntityAdapter({ selectId: todo => todo.cid })
```

### 10. 状态选择器

1. 提供了从实体适配器中获取状态的快捷途径

```js
import { createSelector } from "@reduxjs/toolkit"

const { selectAll } = todosAdapter.getSelectors()

export const selectTodosList = createSelector(
  state => state[TODOS_FEATURE_KEY],
  selectAll
)
```

2. 在组件中使用状态选择器

```js
import { selectTodosList } from './store/todos'

function Todos () {
  const todos = useSelector(selectTodosList)
}
```