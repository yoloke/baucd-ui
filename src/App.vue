<template>
  <!-- <one-button @click="aa" round>点我弹出对话框</one-button>
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
  <hr /> -->

  <!-- <one-input v-model="username" ></one-input>
  <one-input v-model="username" clearable></one-input>
  <one-input v-model="username" type="password" showPassword></one-input> -->
  <!--<one-input :modelValue="username" @update:modelValue="username=$event"></one-input>-->
  <!-- <one-switch v-model="active" activeColor="green" inactiveColor="red" :name='username' ></one-switch>
  <one-switch v-model="active" :name='username' ></one-switch> -->
  <div></div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isVisible: false,
      username: "我是打算代组件",
      active:false
    };
  },
  methods: {
    switchDialog() {
      this.isVisible = false;
    },
    aa() {
      this.isVisible = true;
    },
  },
  watch: {

  }
};
</script>

<style lang="scss">
</style>
