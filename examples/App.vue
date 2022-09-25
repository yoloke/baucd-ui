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
      pageNo: 5,
    };
  },
  methods: {
    getPageNo(a) {
      this.pageNo = a;
    },
  },
};
</script>

<style lang="scss">
</style>
