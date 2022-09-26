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
.ba-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  height: 32px;
  white-space: nowrap;
  cursor: pointer;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  transition: 0.1s;
  font-weight: 500;
  user-select: none;
  vertical-align: middle;
  -webkit-appearance: none;
  background-color: #ffffff;
  border: 1px solid #dcdfe6;
  border-color: #dcdfe6;
  padding: 8px 15px;
  font-size: 14px;
  border-radius: 4px;
  &.is-disabled {
    opacity: 0.6;
    cursor: no-drop;
    &:hover,
    &:focus {
      color: none;
      border-color: none;
      background-color: none;
    }
  }
  &.is-circle {
    border-radius: 50%;
    padding: 8px;
  }
  &.is-round {
    border-radius: 20px;
    padding: 10px 18px;
  }
  + .ba-button {
    margin-left: 12px;
  }
  .icon-rigeht {
    order: 2;
    margin-left: 6px;
    + .content {
      order: 1;
      margin-left: 0px;
    }
  }
  &.loading{
    opacity: 0.6;
    cursor:default;
  }
  .icon-loading {
    opacity: 0.6;
    animation: example 1s infinite linear;
  }
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
    outline: none;
  }
}
.ba-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    color: #ffffff;
    border-color: #79bbff;
    background-color: #79bbff;
    outline: none;
  }
}
.ba-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    color: #ffffff;
    border-color: #95d475;
    background-color: #95d475;
    outline: none;
  }
}
.ba-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    color: #ffffff;
    border-color: #b1b3b8;
    background-color: #b1b3b8;
    outline: none;
  }
}
.ba-button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    color: #ffffff;
    border-color: #eebe77;
    background-color: #eebe77;
    outline: none;
  }
}
.ba-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    color: #ffffff;
    border-color: #f89898;
    background-color: #f89898;
    outline: none;
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
// 设置icon配套样式，使图标和文字之间有一定间隔
.ba-button [class*="ba-icon-"] + span {
  margin-left: 6px;
}
@keyframes example {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
