<template>
  <div
    class="ba-switch"
    @click="handleClick"
    :class="{ 'is-checked': modelValue, 'is-disabled': disabled }">
    <span class="ba-switch_core" ref="core">
      <!-- 小圆点 -->
      <span class="ba-switch_button"></span>
    </span>
    <input type="checkbox" class="ba-switch_input" :name="name" ref="input" />
  </div>
</template>

<script>
export default {
  name: "BaSwitch",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    activeColor: {
      type: String,
      default: "",
    },
    inactiveColor: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      this.$emit("update:modelValue", !this.modelValue);
    },
  },
  mounted() {
    // 修改开关颜色 只会改一次
    if (this.activeColor || this.inactiveColor) {
      var color = this.modelValue ? this.activeColor : this.inactiveColor;
      this.$refs.core.style.borderColor = color;
      this.$refs.core.style.backgroundColor = color;
    }
    // 控制checkbox的值,input值同步value值
    this.$refs.input.checked = this.modelValue;
  },
  watch: {
    modelValue(newValue) {
      // 修改开关颜色
      if (this.activeColor || this.inactiveColor) {
        var color = newValue ? this.activeColor : this.inactiveColor;
        this.$refs.core.style.borderColor = color;
        this.$refs.core.style.backgroundColor = color;
      }
      // 控制checkbox的值,input值同步value值
      this.$refs.input.checked = this.modelValue;
    },
  },
};
</script>
<style lang="scss" scoped>
.ba-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;

  .ba-switch_core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: nba;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .ba-switch_button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
  //input标签只作为name绑定使用 隐藏input标签
  .ba-switch_input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  // 选中样式
  &.is-checked {
    .ba-switch_core {
      border-color: #409eff;
      background-color: #409eff;
      .ba-switch_button {
        //移动小圆点
        transform: translateX(20px);
      }
    }
  }
  &.is-disabled {
    cursor: not-allowed;
  }
}
</style>
 