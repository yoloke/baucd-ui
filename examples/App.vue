<template>
  <div class="container">
    <ba-scroll :height="250">
      <div class="demo-scroll-item" v-for="item in 10">{{item}}</div>
    </ba-scroll>
  </div>
</template>

<script>
import Radio from '../packages/radio/Radio.vue'
export default {
  name: "App",
  setup() {
    const open = () => {
      this.$message('这是一条消息提示');
    }
    return {
      open
    };
  },
  components: { Radio }
};
</script>
<style lang="scss" spode>
.container {
  margin: 20px;
}
</style>
