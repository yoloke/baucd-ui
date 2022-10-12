
## Carousel 走马灯
在有限空间内，循环播放同一类型的图片、文字等内容

### 基础用法
适用广泛的基础用法

:::demo 结合使用`el-carousel`和`el-carousel-item`标签就得到了一个走马灯。幻灯片的内容是任意的，需要放在`el-carousel-item`标签中。默认情况下，在鼠标 `hover` 底部的指示器时就会触发切换。通过设置`trigger`属性为`click`，可以达到点击触发的效果。

```vue
<template>
  <div class="container">
    <ba-carousel
      :autoplay="true"
      :duration="3000"
      :initial="0"
      :hasDot="true"
      :hasDirector="true"
    >
      <ba-car-item v-for="(item, index) in 4" :key="index" :index="index">
        {{ item }} 默认 Hover 指示器触发
      </ba-car-item>
    </ba-carousel>
  </div>
  <div class="container">
    <ba-carousel
      :autoplay="true"
      :duration="3000"
      :initial="0"
      :hasDot="true"
      :hasDirector="true"
      trigger="click"
    >
      <ba-car-item v-for="(item, index) in 4" :key="index" :index="index">
        {{ item }} Click 指示器触发
      </ba-car-item>
    </ba-carousel>
  </div>
</template>

<style lang="scss" spode>
.container {
  float: left;
  width: 300px;
  height: 150px;
  line-height: 150px;
  text-align: center;
  margin-right: 20px;
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
}
</style>
```
:::

### 指示器 切换箭头
可以设置指示器、切换箭头是否显示 

:::demo `hasDot`属性定义了指示器的显示与否。默认情况下，它会显示在走马灯内部，设置为`false`则不会显示指示器。`hasDirector`属性定义了指示器的显示与否。默认情况下，它会显示在走马灯内部，设置为`false`则不会显示切换箭头。
```vue
<template>
  <div class="test">
    <ba-carousel
      :duration="2000"
      :initial="0"
      :hasDot="false"
      :hasDirector="false"
    >
      <ba-car-item v-for="(item, index) in 4" :key="index" :index="index">
        {{ item }} 
      </ba-car-item>
    </ba-carousel>
  </div>
</template>

<style lang="scss" spode>
.test {
  width: 580px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  color: #475669;
  font-size: 20px;
  opacity: 0.75;
}
</style>
```
:::

### 是否自动播放

可以设置切换箭头的显示与否
:::demo `autoplay`属性定义了轮播图是否自动播放。默认为`true`，设置为`false`则不会自动播放。

```vue
<template>
  <div class="test">
    <ba-carousel
      :autoplay="true"
      :initial="0"
    >
      <ba-car-item v-for="(item, index) in 4" :key="index" :index="index">
        {{ item }} 
      </ba-car-item>
    </ba-carousel>
  </div>
</template>

<style lang="scss" spode>
.test {
  width: 580px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  color: #475669;
  font-size: 20px;
  opacity: 0.75;
}
</style>
```
:::


### Attributes

| 属性         | 值                 | 描述                       |
| --------    | ------------      | ----------------------     |
| autoplay    | Boolean           | 是否自动播放，默认为 true    |
| duration    | Number            | 自动切换的时间间隔，单位为毫秒         |
| initial     | Number            | 初始状态激活的幻灯片的索引，默认从 0 开始   |
| hasDot      | Boolean           | 是否显示下面的小圆点，默认为 true  |
| hasDirector | Boolean           | 是否显示左右箭头，默认为 true |
| trigger     | String                | 指示器的触发方式 |

