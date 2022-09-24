## Radio 单选框
在一组备选项中进行单选

### 基础用法
:::demo 要使用 Radio 组件，只需要设置`v-model`绑定变量，选中意味着变量的值为相应 Radio `label`属性的值，`label`可以是`String`、`Number`或`Boolean`。

```vue
<template>
  <ba-radio v-model="radio" label="1">备选项</ba-radio>
  <ba-radio v-model="radio" label="2">备选项</ba-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>
```
:::

### 禁用状态
单选框不可用的状态。
:::demo 只要在`ba-radio`元素中设置`disabled`属性即可，它接受一个`Boolean`，`true`为禁用。

```vue
<template>
  <ba-radio disabled v-model="radio" label="禁用">备选项</ba-radio>
  <ba-radio disabled v-model="radio" label="选中且禁用">备选项</ba-radio>
</template>
<script>
  export default {
    data () {
      return {
        radio: '选中且禁用'
      };
    }
  }
</script>
```
:::


### 单选框组
适用于在多个互斥的选项中选择的场景
:::demo 只要在`ba-radio`元素中设置`disabled`属性即可，它接受一个`Boolean`，`true`为禁用。

```vue
<template>
  <ba-radio-group v-model="radio">
    <ba-radio :label="3">备选项</ba-radio>
    <ba-radio :label="6">备选项</ba-radio>
    <ba-radio :label="9">备选项</ba-radio>
  </ba-radio-group>
</template>

<script>
  export default {
    data () {
      return {
        radio: 3
      };
    }
  }
</script>
```
:::

### Attributes


| 属性            | 值                        | 描述                               |
| --------------- | ------------------------- | ----------------------------------|
| label           | [String, Number, Boolean] | 单选框的value值，默认为空字符串      |
| value / v-model | [String, Number, Boolean] | 单选框的绑定值，默认为空字符串       |
| name            | String                    | 表单命名，默认为空                  |
| color           | String                    | 单选框选择时的颜色，默认为#409eff   |


