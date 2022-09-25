## Button 按钮
常用的操作按钮。

### 基础用法
<br/>
基础的按钮用法。


:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```vue
<template>
  <ba-button>默认按钮</ba-button>
  <ba-button type="primary">主要按钮</ba-button>
  <ba-button type="success">成功按钮</ba-button>
  <ba-button type="info">信息按钮</ba-button>
  <ba-button type="warning">警告按钮</ba-button>
  <ba-button type="danger">危险按钮</ba-button>
  <br/>
  <ba-button plain>朴素按钮</ba-button>
  <ba-button type="primary" plain>主要按钮</ba-button>
  <ba-button type="success" plain>成功按钮</ba-button>
  <ba-button type="info" plain>信息按钮</ba-button>
  <ba-button type="warning" plain>警告按钮</ba-button>
  <ba-button type="danger" plain>危险按钮</ba-button>
  <br/>
  <ba-button round>圆角按钮</ba-button>
  <ba-button type="primary" round>主要按钮</ba-button>
  <ba-button type="success" round>成功按钮</ba-button>
  <ba-button type="info" round>信息按钮</ba-button>
  <ba-button type="warning" round>警告按钮</ba-button>
  <ba-button type="danger" round>危险按钮</ba-button>
  <br/>
   <ba-button icon="search" circle></ba-button>
  <ba-button type="primary" icon="edit" circle></ba-button>
  <ba-button type="success" icon="check" circle></ba-button>
  <ba-button type="info" icon="power" circle></ba-button>
  <ba-button type="warning" icon="heart" circle></ba-button>
  <ba-button type="danger" icon="delete" circle></ba-button>
</template>

```
:::
### 禁用状态
#### 按钮不可用状态。
:::demo 使用`disabled`属性来定义 Button 禁用。

```vue
<template>
  <ba-button disabled>默认按钮</ba-button>
  <ba-button type="primary" disabled>主要按钮</ba-button>
  <ba-button type="success" disabled>成功按钮</ba-button>
  <ba-button type="info" disabled>信息按钮</ba-button>
  <ba-button type="warning" disabled>警告按钮</ba-button>
  <ba-button type="danger" disabled>危险按钮</ba-button>
  <br/>
  <ba-button plain disabled>朴素按钮</ba-button>
  <ba-button type="primary" plain disabled>主要按钮</ba-button>
  <ba-button type="success" plain disabled>成功按钮</ba-button>
  <ba-button type="info" plain disabled>信息按钮</ba-button>
  <ba-button type="warning" plain disabled>警告按钮</ba-button>
  <ba-button type="danger" plain disabled>危险按钮</ba-button>
</template>

```
:::


### Attributes

| 属性     | 值               | 描述                                                         |
| -------- | ---------------- | ------------------------------------------------------------ |
| type     | String           | 按钮类型：primary、info、success、warning、danger                |
| plain    | Boolean          | 是否为朴素按钮，默认为 false                                 |
| disabled | Boolean          | 是否禁用按钮，默认为 false                                   |
| round    | Boolean          | 是否为圆角按钮，默认为 false                                 |
| circle   | Boolean          | 是否为圆形按钮，默认为 false                                 |
| icon     | String           | 按钮图标        


### Events
| 事件  | 值       | 描述     |
| ----- | -------- | -------- |
| click | Function | 点击事件 |