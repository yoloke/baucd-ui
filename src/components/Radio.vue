<template>
  <label class="one-radio" :class="{ 'is-checked': label == model }">
    <span class="one-radio_input">
      <!-- 模拟radio选框 小圆圈 -->
      <span class="one-radio_inner"></span>
      <!-- 隐藏radio选框 -->
      <input
        type="radio"
        class="one-radio_original"
        :value="label"
        :name="name"
        v-model="model"
      />
    </span>
    <span class="one-radio_label"
      ><slot>
        {{ label }}
      </slot></span
    >
  </label>
</template>
<script>
export default {
  name: "OneRadio",
  props: {
    label: {
      type: [String, Number, Boolean],
      default: "",
    },
    modelValue: {
      type: [String, Number, Boolean],
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
  },
  methods: {
    // changeModelValue(e) {
    //   this.$emit("update:modelValue", e.target.value);
    // },
  },
  computed: {
    //计算单选框的值
    model: {
      get() {
        return this.isGroup ? this.RadioGroup.modelValue : this.modelValue
      },
      set(value) {
        console.log('value',value);
        // 触发父组件的input事件
        this.isGroup ? this.RadioGroup.$emit('update:modelValue', value) : this.$emit('update:modelValue', value)
      },
    },
     // 用于判断radio是否被radioGroup包裹
    isGroup() {
      return !!this.RadioGroup
    }
  },
  //接收参数
  inject: {
    RadioGroup: {
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
.one-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  .one-radio_input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .one-radio_inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .one-radio_original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .one-radio_label {
    font-size: 14px;
    padding-left: 10px;
  }
}
// 选中的样式
.one-radio.is-checked {
  .one-radio_input {
    .one-radio_inner {
      border-color: #409eff;
      background-color: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .one-radio_label {
    color: #409eff;
  }
}
</style>