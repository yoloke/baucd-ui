<template>
  <div class="container">
    <ba-carousel :autoplay="true" :duration="3000" :initial="0" :hasDot="true" :hasDirector="true">
      <ba-car-item v-for="(item, index) in 4" :index="index" :key="index" name="ssss">
        {{ item }} 默认 Hover 指示器触发
      </ba-car-item>
    </ba-carousel>
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
<style lang="scss">
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
