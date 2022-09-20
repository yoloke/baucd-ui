<template>
  <div class="one-input" :class="{ 'one-input_suffix': showSuffix }">
    <!-- disabled属性为true时，输入框禁用，并且需要改变样式，
        之前在button组件封装的时候也用到了相同的方法，获取到值后动态设置组件样式
     -->
    <input
      class="one-input_inner"
      :class="{ 'is-disabled': disabled }"
      :placeholder="placeholder"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :name="name"
      :value="modelValue"
      @input="handleInput"
      :disabled="disabled"
    />
    <span class="one-input_suffix" v-if="showSuffix">
      <!-- 清空的小图标 -->
      <i
        class="one-icon-cancel"
        v-if="clearable && modelValue"
        @click="clear"
      ></i>
      <!-- 显示和隐藏密码的小图标 -->
      <i
        :class="passwordVisible?'one-icon-eye_protection':'one-icon-visible'"
        v-if="showPassword && type == 'password'"
        @click="handlePassword"
      ></i>
    </span>
  </div>
</template>
<script>
export default {
  name: "oneInput",
  components: {},
  props: {
    placeholder: {
      type: String,
      default: "请输入内容",
    },
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
      default: "",
    },
    //清空输入框
    clearable: {
      type: Boolean,
      default: false,
    },
    //是否需要显示隐藏密码功能
    showPassword: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // 显示是否显示密码框
      passwordVisible: false,
    };
  },
  methods: {
    handleInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
    //清空文本框内容
    clear() {
      this.$emit("update:modelValue", "");
    },
    //显示隐藏密码
    handlePassword() {
      this.passwordVisible = !this.passwordVisible;
    },
  },
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword;
    },
  },
};
</script>
<style lang="scss" scoped>
.one-input {
  width: 400px;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .one-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
//图标样式
.one-input_suffix {
  .one-input_inner {
    padding-right: 30px;
  }
  .one-input_suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 20px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    
  }
}
</style>