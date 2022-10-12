## Pagination 分页
当数据量过多时，使用分页分解数据。

### 基础用法
<br/>

### 使用方法
:::demo `pageNo`表示当前第几页，`pageSize`表示一页多少数据，`total`表示总条目数

```vue
<template>
<div class="block">
  <span class="demonstration">页数较少时的效果</span>
  <ba-pagination
    :pageNo="pageNo"
    :pageSize="10"
    :total="50"
    :continues="5"
    @getPageNo="getPageNo"
  ></ba-pagination>
  </div>
  <span class="demonstration">大于 5 页时的效果</span>
  <div class="block">
  <ba-pagination
    :pageNo="pageNo"
    :pageSize="2"
    :total="50"
    :continues="5"
    @getPageNo="getPageNo"
  ></ba-pagination>
  </div>
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
<style>
.demonstration{
  font-size:14px;
}
</style>
```
:::

### 设置最大页码数
:::demo `continues`用于设置最大连续页码数。

```vue
<template>
  <ba-pagination
    :pageNo="pageNo"
    :pageSize="2"
    :total="50"
    :continues="7"
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
<style>
.demonstration{
  font-size:14px;
}
</style>
```
:::


