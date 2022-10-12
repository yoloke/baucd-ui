<template>
  <button
    class="ba-button"
    :class="[
      `ba-button-${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
        'loading':loading
      },
    ]"
    @click="handleClick"
    :disabled="disabled"
  >
    <i
      v-if="icon || loading"
      :class="[
        `ba-icon-${icon}`,
        `ba-icon-${loading}`,
        { 'icon-rigeht': right, 'icon-loading': loading },
      ]"
    ></i>
    <!-- 如果没传入文本插槽，则不显示span内容  传了内容就有默认插槽 -->
    <span v-if="$slots.default" class="content"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "BaButton",
  // 此时对props进行校验，值接收string类型的type值
  props: {
    //按钮类型
    type: {
      type: String,
      // 设置默认值：如果不传值，那么使用default
      default: "default",
    },
    //朴素按钮
    plain: {
      type: Boolean,
      default: false,
    },
    //圆角属性
    round: {
      type: Boolean,
      default: false,
    },
    //圆按钮
    circle: {
      type: Boolean,
      default: false,
    },
    //字体图标
    icon: {
      type: String,
      default: "",
    },
    //按钮中的disabled属性
    disabled: {
      type: Boolean,
      default: false,
    },
    //字体图标是否在右边
    right: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: String,
      default: "",
    },
  },
  //声明click为自定义事件
  emits: ["click"],
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>
<style lang="scss" scoped>
@import './style.scss'
</style>
