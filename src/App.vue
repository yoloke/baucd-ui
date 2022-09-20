<template>
  <one-button @click="aa" round>点我弹出对话框</one-button>
    <one-dialog v-model="isVisible">
    <template v-slot:title>
      <h3>我是标题</h3>
    </template>
    <template>
      <h3>我是内容</h3>
    </template>
    <template v-slot:footer>
      <one-button @click="switchDialog">取消</one-button>
      <one-button type="primary" @click="switchDialog">确定</one-button>
    </template>
  </one-dialog>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
    isVisible:false
   } 
  },
  methods: {
    switchDialog() {
      this.isVisible=false
    },
    aa() {
      this.isVisible=true
    }
  },
};
</script>

<style lang="scss">
.row {
  padding: 12px;
  one-button {
    margin-right: 6px;
  }
}
</style>
