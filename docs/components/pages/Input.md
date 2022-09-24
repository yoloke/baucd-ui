## Input 输入框
通过鼠标或键盘输入字符

### 基础用法
<br/>


:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```vue
<ba-input v-model="input" placeholder="请输入内容"></ba-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::
### 禁用状态
:::demo 使用`disabled`属性指定是否禁用 input 组件

```vue
<template>
 <ba-input
  placeholder="请输入内容"
  v-model="input"
  :disabled="true">
</ba-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
</template>

```
:::

### 可清空
:::demo 使用`clearable`属性即可得到一个可清空的输入框

```vue
<ba-input
  placeholder="请输入内容"
  v-model="input"
  clearable>
</ba-input>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>
```
:::

### 是否显示密码

:::demo 使用`showPassword`属性即可得到一个显示密码的输入框

```vue
<ba-input type='password'  v-model="password" showPassword/>
<script>
export default {
  name: 'App',
  data() {
    return {
      password:"password"
    }
  },
}
</script>
```
:::







### Attributes

| 属性            | 值               | 描述                               |
| --------------- | ---------------- | ---------------------------------- |
| placeholder     | String           | 输入框占位文本，默认为空字符串     |
| type            | String           | 表单类型，默认为'text'             |
| value / v-model | [String, Number] | 绑定值，默认为空字符串             |
| mimicry         | Boolean          | 对话框是否为拟态风格，默认为 false |
| name            | String           | 原生属性，默认为空                 |
| disabled        | Boolean          | 是否禁用，默认为 false             |
| clearable       | Boolean          | 是否可清空，默认为 false           |
| showPassword    | Boolean          | 是否显示密码可见，默认为 false     |

