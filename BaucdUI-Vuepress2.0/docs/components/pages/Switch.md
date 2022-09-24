## Switch 开关
表示两种相互对立的状态间的切换，多用于触发「开/关」。
### 基础用法

:::demo 绑定`v-model`到一个`Boolean`类型的变量。可以使用`activeColor`属性与`inactiveColor`属性来设置开关的背景色。

```vue
<ba-switch
  v-model="value"
  activeColor="#13ce66"
  inactiveColor="#ff4949">
</ba-switch>

<script>
  export default {
    data() {
      return {
        value: true
      }
    }
  };
</script>

```
:::




### Attributes

| 属性            | 值      | 描述                               |
| --------------- | ------- | ---------------------------------- |
| mimicry         | Boolean | 对话框是否为拟态风格，默认为 false |
| name            | String  | switch 对应的 name 属性，默认为空  |
| value / v-model | String  | 绑定值，默认为空字符串             |
| disabled        | Boolean | 是否禁用，默认为 false             |
| activeColor     | String  | 激活状态颜色，默认为#dcdfe6        |
| inactiveColor   | String  | 未激化状态颜色，默认为#dcdfe6      |



### Events
| 事件   | 值       | 描述                               |
| ------ | -------- | ---------------------------------- |
| change | Function | 状态修改触发事件，返回修改后的状态 |

