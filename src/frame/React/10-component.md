---
title: React-- component
sidebar: true
excerpt: 富贵不能淫，贫贱不能移，威武不能屈，此之谓大丈夫 -- 孟子
tag:
 - react
category:
 - react
---

### 受控组件与非受控组件

#### 非受控组件

在组件当中的数据都是由表单DOM元素本身管理的,表单中的数据在需要的时候再获取

```js
function App () {
  const userInput = useRef()
  function handleSubmit () {
    const username = userInput.current.value
  }
  return <form onSubmit={handleSubmit}>
    <input type="text" ref={userInput} />
    <input type="submit" />
  </form>
}
```

#### 受控组件

表单数据交由state对象管理，特点是可以实时得到表单数据，代码相对复杂

```js
class App extends Component {
  state = { username: '' }
  handleChange(event) { this.setState({username: event.target.value}) }
  render() {
    return <form>
      <input
        type="text" value={this.state.username}
        onChange={this.handleChange.bind(this)} />
      <span>{this.state.username}</span>
    </form>
  }
}
```

#### 总结

受控组件和非受控组件都有其特点，应该根据需求场合进行选择，在大多数情况下，推荐使用受控组件处理表单数据。如果表单在数据交互方面比较简单，使用非受控表单，否则使用受控表单。

| 场景 | 非受控 | 受控 |
| ---- | ---- | ---- |
| 表单提交时取值 | Yes | Yes |
| 表单提交时验证 | Yes | Yes |
| 表单项元素实时验证 | No | Yes |
| 根据条件禁用提交按钮 | No | Yes |
| 强制输入内容的格式 | No | Yes |
| 一个数据的多个输入 | No | Yes |
