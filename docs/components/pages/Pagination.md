## Pagination 分页
当数据量过多时，使用分页分解数据。

### 基础用法
<br/>
提供了一套常用的图标集合。

### 使用方法
:::demo 使用`icon`属性来定义图标的样式。

```vue
<template>
  <ba-pagination
    :pageNo="pageNo"
    :pageSize="1"
    :total="50"
    :continues="3"
    @getPageNo="getPageNo"
  ></ba-pagination>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      pageNo: 1,
    };
  },
  methods: {
    getPageNo(value) {
      this.pageNo = value;
    },
  },
};
</script>
```
:::

