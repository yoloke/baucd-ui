## Checkbox 多选框
一组备选项中进行多选

### 基础用法
单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。
:::demo 在`ba-checkbox`元素中定义`v-model`绑定变量，单一的`checkbox`中，默认绑定变量的值会是`Boolean`，选中为`true`。

```vue
<template>
  <!-- `checked` 为 true 或 false -->
  <ba-checkbox v-model="checked">备选项</ba-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        checked: true
      };
    }
  };
</script>
```
:::

### 禁用状态
多选框不可用状态。
:::demo 设置`disabled`属性即可。

```vue
<template>
  <ba-checkbox v-model="checked1" disabled>备选项1</ba-checkbox>
  <ba-checkbox v-model="checked2" disabled>备选项2</ba-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        checked1: false,
        checked2: true
      };
    }
  };
</script>
```
:::


### 多选框组
适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。
:::demo `checkbox-group`元素能把多个 `checkbox` 管理为一组，只需要在 `Group` 中使用`v-model`绑定`Array`类型的变量即可。 `ba-checkbox` 的 `label`属性是该 `checkbox` 对应的值，若该标签中无内容，则该属性也充当 `checkbox `按钮后的介绍。label与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。

```vue
<template>
  <ba-checkbox-group v-model="checkList">
    <ba-checkbox label="复选框 A"></ba-checkbox>
    <ba-checkbox label="复选框 B"></ba-checkbox>
    <ba-checkbox label="复选框 C"></ba-checkbox>
    <ba-checkbox label="禁用" disabled></ba-checkbox>
    <ba-checkbox label="选中且禁用" disabled></ba-checkbox>
  </ba-checkbox-group>
</template>

<script>
  export default {
    data () {
      return {
        checkList: ['选中且禁用','复选框 A']
      };
    }
  };
</script>
```
:::


### Attributes
| 属性    | 值                        | 描述                               |
| ------- | ------------------------- | ---------------------------------- |
| label   | [String, Number, Boolean] | 单选框 label 值，默认为空字符串    |
| value   | String                    | 表单值，默认为空字符串             |
| mimicry | Boolean                   | 对话框是否为拟态风格，默认为 false |
| name    | String                    | 表单命名，默认为空                 |
| color   | String                    | 单选框选择时的颜色，默认为#409eff  |
