<template>
  <div class="ba-form-item">
    <label :style="labelStyle" class="ba-form-item_label">{{label}}</label>
    <div class="ba-form-item_content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BaFormItem',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
   //接收参数
  inject: {
    Form: {
      default: "",
    },
  },
  computed: {
    labelStyle() {
      return {
        width: this.Form.labelWidth
      }
    }
  }
}
</script>
 
<style lang="scss" scoped>
  .ba-form-item{
    margin-bottom: 25px;
    .ba-form-item_label{
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
    }
    .ba-form-item_content{
      line-height: 40px;
      position: relative;
      font-size: 14px;
      overflow: hidde;
    }
  }
</style>