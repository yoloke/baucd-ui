# Baucd-UI

## 简介

一个支持拟态风格的 Vue UI 组件



## 使用

1. 安装

```
npm i baucd-ui
```

2. 全局注册

```js
import UI from 'baucd-ui'
Vue.use(UI)
```

3. 按需导入

```js
import BaucdUI, { Button, Form } from 'baucd-ui'
Vue.use(BaucdUI, {
  components: [Button, Form]
})
```

3. 导入样式

```js
import 'baucd-ui/dist/baucd-ui.css'
```

4. 导入 font-awesome 字体图标

```js
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faEnvelope,
  faStar,
  faEdit,
  faTrashAlt,
  faSmile,
  faTimesCircle,
  faEye
} from '@fortawesome/free-regular-svg-icons'

import { faCheck } from '@fortawesome/free-solid-svg-icons'
```

<br>

---

<br>

## 组件

### Button

<br>

| 属性     | 值               | 描述                                                         |
| -------- | ---------------- | ------------------------------------------------------------ |
| type     | String           | 按钮类型：primary,info,success,warning,danger                |
| plain    | Boolean          | 是否为朴素按钮，默认为 false                                 |
| mimicry  | Boolean          | 是否为拟态按钮，和 plain 不能同时设置，会被 plain 覆盖。默认为 false |
| disabled | Boolean          | 是否禁用按钮，默认为 false                                   |
| round    | Boolean          | 是否为圆角按钮，默认为 false                                 |
| circle   | Boolean          | 是否为圆形按钮，默认为 false                                 |
| icon     | Array 或 Boolean | font-awesome 字体数组，默认为 false                          |

<br>

| 事件  | 值       | 描述     |
| ----- | -------- | -------- |
| click | Function | 点击事件 |

<br>

---

<br>

### Dialog

<br>

| 属性     | 值      | 描述                               |
| -------- | ------- | ---------------------------------- |
| title    | String  | 对话框头部提示，默认为"提示"       |
| visiable | Boolean | 对话框可见状态，默认为 false       |
| mimicry  | Boolean | 对话框是否为拟态风格，默认为 false |
| width    | String  | 对话框宽度，默认为 60%             |
| top      | String  | 对话框距离顶部位置，默认为 15vh    |

<br>

| 插槽   | 描述                    |
| ------ | ----------------------- |
| title  | Dialog 标题区的内容     |
| footer | Dialog 按钮操作区的内容 |

<br>

---

<br>

### Input

<br>

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

<br>

### Switch

<br>

| 属性            | 值      | 描述                               |
| --------------- | ------- | ---------------------------------- |
| mimicry         | Boolean | 对话框是否为拟态风格，默认为 false |
| name            | String  | switch 对应的 name 属性，默认为空  |
| value / v-model | String  | 绑定值，默认为空字符串             |
| disabled        | Boolean | 是否禁用，默认为 false             |
| activeColor     | String  | 激活状态颜色，默认为#dcdfe6        |
| inactiveColor   | String  | 未激化状态颜色，默认为#dcdfe6      |

<br>

| 事件   | 值       | 描述                               |
| ------ | -------- | ---------------------------------- |
| change | Function | 状态修改触发事件，返回修改后的状态 |

<br>

---

<br>

### Radio

<br>

| 属性            | 值                        | 描述                               |
| --------------- | ------------------------- | ---------------------------------- |
| label           | [String, Number, Boolean] | 单选框的value值，默认为空字符串    |
| value / v-model | [String, Number, Boolean] | 单选框的绑定值，默认为空字符串     |
| mimicry         | Boolean                   | 对话框是否为拟态风格，默认为 false |
| name            | String                    | 表单命名，默认为空                 |
| color           | String                    | 单选框选择时的颜色，默认为#409eff  |

<br>

### RadioGroup

<br>

用于包裹 radio，通过 v-model 指定组内所有的 radio 的 v-model

<br>

---

<br>

### Checkbox

<br>

| 属性    | 值                        | 描述                               |
| ------- | ------------------------- | ---------------------------------- |
| label   | [String, Number, Boolean] | 单选框 label 值，默认为空字符串    |
| value   | String                    | 表单值，默认为空字符串             |
| mimicry | Boolean                   | 对话框是否为拟态风格，默认为 false |
| name    | String                    | 表单命名，默认为空                 |
| color   | String                    | 单选框选择时的颜色，默认为#409eff  |

<br>

### CheckboxGroup

<br>

用于包裹多个 checkbox，通过 v-model 指定组内所有的 checkout 的 v-model

<br>

---

<br>

### Form-item

<br>

| 属性  | 值     | 描述                       |
| ----- | ------ | -------------------------- |
| label | String | 表单项名称，默认为空字符串 |

<br>

### Form

<br>

| 属性        | 值     | 描述                 |
| ----------- | ------ | -------------------- |
| model       | Object | 表单对象，必填       |
| label-width | String | 标签宽度，默认"80px" |

<br>

---

<br>
