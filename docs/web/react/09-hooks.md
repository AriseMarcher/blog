---
title: React-- Hooks
date: 2022-10-16 12:00:00
sidebar: auto
tags:
 - react
categories:
 - react
---

### 1. React Hooks介绍

#### 1.1 React Hooks作用

对函数型组件进行增强，让函数型组件可以存储状态，可以拥有处理副作用的能力。让开发者在不使用类组件的情况下，实现相同的功能。

在一个组件中，只要不是把数据转换成视图的代码就属于副作用，获取DOM元素，为DOM元素添加事件，定时器，发送AJAS代码。在类组件中，通常使用生命周期函数处理这些副作用，在函数型组件中则需要通过Hooks处理这些副作用。

#### 1.2 类组件的不足（hooks要解决的问题）

1. 缺少逻辑复用机制

为了复用逻辑增加无实际渲染效果的组件，增加了层级组件，显得十分臃肿，增加了调式的难度以及运行效率的降低

2. 类组件经常会变得很复杂难以维护

将一组相干的业务逻辑拆分到了多个生命周期函数中
在一个生命周期函数内存在多个不相干的业务逻辑

3. 类成员方法不能保证this指向的正确性

### 2. React Hooks使用

Hooks即为钩子，React Hooks就是一堆钩子函数，React通过这些钩子函数对函数型组件进行增强，不同的钩子函数提供了不同的功能

+ useState()
+ useEffect()
+ useReducer()
+ useRef()
+ useCallback()
+ useContext()
+ useMemo()

#### 2.1 useState()

用于为函数组件引入状态，使用闭包来保存数据的

```js
import React, { useState } from 'react'

function App () {
  // useState 返回 状态数据 设置状态数据的方法
  // 要以 set进行开头 后面加上相应的名称
  const [ count, setCount ] = useState(0);
  // 参数为一个方法 需要用数组的解构
  // const [ count, setCount ] = useState(() => 100)
  const [ person, setPerson ] = useState({ name: '张三', age: 20 })

  function handleCount () {
    setCount((count) => {
      return count + 100
    })
  }

  return <div>
    <span>{count}{person.name}{person.age}</span>
    <button onClick={() => setCount(count + 1)}>+ 1</button>
    <button onClick={handleCount}>函数增加</button>
    <button onClick={() => setPerson({name: '李四', age: 30})}>setPerson</button>
  </div>
}
```

useState使用上的细节

+ 接受唯一的参数即状态初始值，初始值可以是任意数据类型
+ 返回值为数组，数组中存储状态值和更改状态值的方法，方法名称约定以set开头，后面加上状态名称。
+ 方法可以被调用多次，用以保存不同状态值
+ 参数可以是一个函数，函数返回什么，初始状态就是什么，函数只会被调用一次，用在初始值是动态值的情况。


+ 设置状态值方法的参数可以之一个值也可以是一个函数
+ 设置状态值的方法本身是异步的

```js
import { useState } from 'react'

function App () {
  const [ count, setCount ] = useState(() => 100)
  function handleCount () {
    setCount((count) => {
      let newCount = count + 100;
      document.title = newCount;
      return newCount
    })
  }
  return <div>
    <span>{count}{person.name}{person.age}</span>
    <button onClick={() => setCount(count + 1)}>+ 1</button>
    <button onClick={handleCount}>函数增加</button>
  </div>
}

```

#### 2.2 useReducer()

另一种让函数组件保存状态的方式

```js
import { useReducer } from 'react'

function App () {
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

  const [ count, dispatch ] = useReducer(reducer, 0)

  return <div>
    <button onClick={() => dispatch({ type: 'decrement'})}>-1</button>
    <span>{count}</span>
    <button onClick={() => dispatch({ type: 'increment'})}>+1</button>
  </div>
}

export default App;
```

#### 2.3 useContext()

在跨组件层级获取数据时简化获取数据的代码

之前使用createContext的代码

```js
import { createContext } from 'react'

const counterContext = createContext()

function App () {
  return <counterContext.Provider value={100}>
    <Foo />
  </counterContext.Provider>
}

function Foo () {
  return <counterContext.Consumer>
    {
      value => {
        return <div>{value}</div>
      }
    }
  </counterContext.Consumer>
}

export default App;
```

简化后的代码

```js
import { createContext, useContext } from 'react'

const counterContext = createContext()

function App () {
  return <counterContext.Provider value={100}>
    <Foo />
  </counterContext.Provider>
}

function Foo () {
  const value = useContext(counterContext)
  return <div>Foo-{value}</div>
}

export default App;
```
#### 2.4 useEffect()

让函数型组件拥有处理副作用的能力，类似生命周期函数。

可以把useEffect看做componentDidMount,componentDidUpdate和componentWillUnMount这三个函数的组合

+ useEffect(() => {})  => componentDidMount,componentDidUpdate
+ useEffect(() => {}, []) => componentDidMount
+ useEffect(() => () => {})  ==> componentWillUnMount

```js
import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  // 组件挂载完成之后执行 组件数据更新完成之后
  // useEffect(() => {
  //   console.log('111')
  // })

  // 组件挂载完成之后执行一次 之后不会执行
  useEffect(() => {
    console.log('222')
  }, [])

  // 组件被卸载之前执行
  useEffect(() => {
    return () => {
      console.log('333')
    }
  })

  return <div className='app'>
    <span>{count}</span>
    <button onClick={() => setCount(count + 1)}>+1</button>
  </div>
}


export default App;
```

1. 为window对象添加滚动事件
2. 设置定时器让count数值每隔一秒加1

```js
import { useEffect, useState } from 'react'

function App() {
  
  function onScroll () {
    console.log('the page is scrolling')
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const [count, setCount] = useState(0)
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return <div>
    <span>{count}</span>
  </div>
}

export default App;
```

useEffect解决的问题

1. 按照用途代码进行分类（将一组相干的业务逻辑归置到了同一个副作用函数中）
2. 简化重复代码，使组件内部代码更加清晰

useEffect数据监测

useEffect钩子函数的第二个参数，只有指定数据发生变化时触发effect

```js
useEffect(() => {
  document.title = count
}, [count])
```

useEffect钩子函数结合异步函数

```js
useEffect(() => {
  // 触发异步函数写一个自执行函数 不然会破坏原有的clear方法
  (async () => {
    let result = await getData()
    console.log(result)
  })()
}, [])
```

#### 2.5 useMemo()

+ useMemo的行为类似Vue中的计算属性，可以监测某个值的变化，根据变化值计算新值
+ useMemo会缓存计算结果，如果监测值没有发生变化，即使组件重新渲染，也不会重新计算。此行为可以有助于避免在每个渲染上进行昂贵的计算。

```js
import { useMemo } from 'react'

const result = useMemo(() => {
  // 如果count值发生变化此函数重新执行
  // 没有则不会重新执行，类似Vue的computed属性
  return result
}, [count])
```
#### 2.6 memo()

性能优化，如果本组件中的数据没有发生变化，阻止组件更新，类似类组件中的PureComponent和shouldComponentUpdate

```js
import { useMemo, useState, memo } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [bool, setBool] = useState(true)

  const result = useMemo(() => {
    return count * 2
  }, [count])

  return <div>
    <span>{count} -- {result} -- {bool ? '真': '假'}</span>
    <button onClick={() => setCount(count + 1)}>+1</button>
    <button onClick={() => setBool(!bool)}>+1</button>
    <Foo />
  </div>
}

// 不使用 memo 每次App里面的数据变化时 这个都会重新渲染
const Foo = memo(function Foo () {
  console.log('Foo组件重新渲染了')
  return <div>Foo组件</div>
})


export default App;
```
#### 2.7 useCallback()
性能优化，缓存函数，使组件重新渲染时得到相同的函数实例

```js
import { useState, memo, useCallback } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const resetCount = useCallback(() => setCount(0), [setCount])

  return <div>
    <span>{count}</span>
    <button onClick={() => setCount(count + 1)}>+1</button>
    <Foo resetCount={resetCount} />
  </div>
}

const Foo = memo(function Foo (props) {
  console.log('Foo组件重新渲染了')
  return <div>
    Foo组件
    <button onClick={props.resetCount}>resetCount</button>
  </div>
})


export default App;
```

#### 2.8 useRef()

1. 获取DOM元素对象

```js
import { useRef } from 'react'

function App () {
  const usename = useRef()
  const hander = () => console.log(username)
  return <input ref={username} onChange={hander} />
}
```

2. 保存数据（跨组件周期）

即使组件重新渲染，保持的数据依然还在，保存的数据被更改不会触发组件重新渲染

```js
import { useEffect, useState, useRef } from 'react'

function App() {
  const [count, setCount] = useState(0)
  let timer = useRef();
  useEffect(() => {
    // 会触发组件重新渲染 不能直接把timer设置成Null
    timer.current = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
  }, [])
  const stopCount = () => {
    console.log(timer)
    clearInterval(timer.current)
  }

  return <div>
    {count}
    <button onClick={stopCount}>Stop increment</button>
  </div>
}

export default App;
```

### 3. 自定义Hook

+ 自定义Hook是标准的封装和共享逻辑的方式
+ 自定义Hook是一个函数，其名称以use开头
+ 自定义Hook其实就是逻辑和内置的Hook的组合

在组件完成之后向服务端发送请求，其他组件也需要这个请求

```js
import { useState, useEffect } from 'react'
import axios from 'axios'

// 自定义Hook 逻辑和内置的hook组合
function useGetPost () {
  const [post, setPost ] = useState({})
  useEffect(() => {
    axios.get('https://xxx.com/xxx')
      .then(response => {
        setPost(response.data)
      })
  }, [])
  return [post, setPost]
}

function App() {
  const [post, setPost] = useGetPost()

  return <div>
    <div>{post.title}</div>
    <br />
    <div>{post.body}</div>
  </div>
}

export default App;
```

示例二：公共逻辑

```js
import { useState } from 'react'

function useUpdateInput (initialValue) {
  const [value, setValue] = useState(initialValue)
  return {
    value,
    onChange: event => setValue(event.target.value)
  }
}

function App() {
  const usernameInput = useUpdateInput('')
  const passwordInput = useUpdateInput('')
  const submitForm = event => {
    event.preventDefault();
    console.log(usernameInput)
    console.log(passwordInput)
  }

  return <form onSubmit={submitForm}>
    <input type="text" name="username" {...usernameInput} />
    <input type="password" name="password" {...passwordInput} />
    <input type="submit" />
  </form>
}

export default App;
```

### 4. React 路由Hooks

待定。。。我要去看下 react-router-dom6的文档