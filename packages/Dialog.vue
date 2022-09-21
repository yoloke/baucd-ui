<template>
  <transition name="dialog-fade">
    <!-- 对话框的遮罩 灰色的大背景 -->
    <!-- @click.self避免冒泡，只有点击自己时才能触发   -->
    <div class="ba-dialog_wrapper" @click.self="handleClose" v-show="modelValue">
      <!-- 整个对话框 -->
      <div class="ba-dialog" :style="{ width: width, marginTop: top }">
        <!-- 头部 -->
        <div class="ba-dialog_header">
          <!-- 将span放到slot内，这样不仅可以定义title文本，还可以定义样式等 -->
          <slot name="title"><span class="ba-dialog_title">{{ title }}</span></slot>
          <button class="ba-dialog_headerbtn" @click="handleClose">
            <i class="ba-icon-close"></i>
          </button>
        </div>
        <!-- 中间内容 -->
        <div class="ba-dialog_body">
          <!-- 内容可能是除span以外的其他内容，比如列表等，所以在这里使用插槽，并且不规定插槽内具体的标签 -->
          <!-- 并且在这里使用匿名插槽，使用匿名插槽的好处就是不用指定名称，这样在不使用<template v-slot>指定插槽内容的时候，也可以自定义内容 -->
          <slot><span>内容</span></slot>
        </div>
        <!-- 底部 -->
        <div class="ba-dialog_footer">
          <!-- 如果footer不传递内容，则不显示footer -->
          <slot name="footer" v-if="$slots.footer"></slot>
        </div>
      </div>
    </div>
    </transition>
</template>

<script>
export default {
  name: "BaDialog",
  props: {
    title: {
      type: String,
      default: "标题",
    },
    width: {
      type: String,
      default: "30%",
    },
    top: {
      type: String,
      default: "15vh",
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClose() {
      this.$emit("update:modelValue", false);
    },
  },
};
</script>
<style lang="scss" scoped>
.ba-dialog_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.3);
  //整个对话框
  .ba-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &_header {
      padding: 20px 20px 10px;
      .ba-dialog_title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .ba-dialog_headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .ba-icon-close {
          color: 909399;
        }
      }
    }
    &_body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      //深度选择器 scss ::v-deep  less /deep/
      //不会加属性选择器
      ::v-deep .ba-button:first-child {
         margin-right: 20px;
      }
    }
  }
}
//来的过程
.dialog-fade-enter-active{
  animation: fade .3s;
}
//离开的过程
.dialog-fade-leave-active{
  animation: fade .3s reverse;
}
//动画名fade
@keyframes fade{
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100%{
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>