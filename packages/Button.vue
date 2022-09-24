<template>
  <button
    class="ba-button"
    :class="[
      `ba-button-${type}`,
      { 'is-plain': plain, 'is-round': round, 'is-circle': circle,'is-disabled':disabled },
    ]"
    @click="handleClick"
    :disabled="disabled"
  >
    <i v-if="icon" :class="`ba-icon-${icon}`"></i>
    <!-- 如果没传入文本插槽，则不显示span内容 -->
    <!-- 传了内容就有默认插槽 -->
    <span v-if="$slots.default"><slot></slot></span>
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
  },
  //声明click为自定义事件
  emits: ["click"],
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  }
};
</script>
<style lang="scss" scoped>
.ba-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  margin-bottom: 20px;
  margin-left: 10px;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  //禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  padding: 10px 18px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.ba-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
  }
}
.ba-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
  }
}
.ba-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
  }
}
.ba-button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
  }
}
.ba-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    background-color: #f78989;
    color: #fff;
  }
}
// 朴素按钮样式
.ba-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.ba-button-primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.ba-button-success.is-plain {
  color: #67c23a;
  background: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.ba-button-info.is-plain {
  color: #909399;
  background: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.ba-button-warning.is-plain {
  color: #e6a23c;
  background: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.ba-button-danger.is-plain {
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
.ba-button.is-round {
  border-radius: 20px;
  padding: 10px 18px;
}
.ba-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
.ba-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
// 设置icon配套样式，使图标和文字之间有一定间隔
.ba-button [class*="ba-icon-"] + span {
  margin-left: 5px;
}
.ba-button.is-disabled{
  opacity: .5;
   cursor: no-drop;
}
</style>
