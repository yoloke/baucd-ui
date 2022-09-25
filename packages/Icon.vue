<template>
  <i v-if="icon" :class="`ba-icon-${icon}`"></i>
</template>

<script>
export default {
  name: "BaIcon",
  props: {
    //字体图标
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
i {
  margin-bottom: 10px;
  margin-left: 8px;
  margin-right: 8px;
  font-size: 22px;
}
</style>
