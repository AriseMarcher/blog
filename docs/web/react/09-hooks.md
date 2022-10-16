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

对函数型组件进行增强，让函数型组件可以存储状态，可以拥有处理副作用的能力。让开发者在不适用类组件的情况下，实现相同的功能。

在一个组件中，只要不是把数据转换成视图的代码就属于副作用，获取DOM元素，为DOM元素添加事件，定时器，发送AJAS代码。在类组件中，通常使用生命周期函数处理这些副作用，在函数型组件中则需要通过Hooks处理这些副作用。

#### 1.2 类组件的不足（hooks要解决的问题）

1. 缺少逻辑复用机制

为了服用逻辑增加无实际渲染效果的组件，增加了层级组件，显得十分臃肿，增加了调式的难度以及运行效率的降低

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
  const { count, setCount } = useState(0);
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


### 3. 自定义Hook

### 4. React 路由Hooks

### 5. React Hooks 原理分析

