<template>
  <label class="ba-radio" :class="{ 'is-checked': label == model,'is-disabled':disabled}">
    <span class="ba-radio_input">
      <!-- 模拟radio选框 小圆圈 -->
      <span class="ba-radio_inner"></span>
      <!-- 隐藏radio选框 -->
      <input type="radio" class="ba-radio_original" :value="label" :name="name" v-model="model" :disabled="disabled==true?'disabled':false" />
    </span>
    <span class="ba-radio_label">
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>
<script>
export default {
  name: "BaRadio",
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
    disabled: {
      type:Boolean,
      default:false,
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
        return this.isGroup ? this.RadioGroup.modelValue : this.modelValue;
      },
      set(value) {
        // 触发父组件的input事件
        this.isGroup
          ? this.RadioGroup.$emit("update:modelValue", value)
          : this.$emit("update:modelValue", value);
      },
    },
    // 用于判断radio是否被radioGroup包裹
    isGroup() {
      return !!this.RadioGroup;
    },
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
.ba-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  font-size: 14px;
  margin-right: 30px;

  .ba-radio_input {
    position: relative;
    white-space: nowrap;
    display: inline-block;
    line-height: 1;
    vertical-align: middle;

    .ba-radio_inner {
      width: 14px;
      height: 14px;
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      background-color: #fff;
      display: inline-block;
      box-sizing: border-box;

      // 里面的小圆白点
      &:after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        width: 4px;
        height: 4px;
        margin-top: -1px;
        border-radius: 50%;
        background-color: #fff;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.5s ease-in;
      }
    }

    .ba-radio_original {
      opacity: 0;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0px;
      bottom: 0;
      margin: 0;
    }
  }

  .ba-radio_label {
    font-size: 14px;
    padding-left: 10px;
  }
}

// 选中的样式
.ba-radio.is-checked {
  .ba-radio_input {
    .ba-radio_inner {
      border-color: #409eff;
      background-color: #409eff;

      &:after {
        transform: translate(-50%, -50%);
      }
    }
  }
  .ba-radio_label {
    color: #409eff;
  }
}

//不可选的样式
.is-disabled {
  cursor:not-allowed;
}

</style>