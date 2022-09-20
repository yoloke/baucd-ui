<template>
  <!-- 
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
  -->

  <!-- 
  <one-input v-model="username" ></one-input>
  <one-input v-model="username" clearable></one-input>
  <one-input v-model="username" type="password" showPassword></one-input>
  <one-input :modelValue="username" @update:modelValue="username=$event"></one-input>
  -->
  <!-- 
    <one-switch v-model="active" activeColor="green" inactiveColor="red" :name='username' ></one-switch>
    <one-switch v-model="active" :name='username' ></one-switch> 
  -->

  <!-- <one-radio label="0" v-model="gender">男</one-radio>
  <one-radio label="1" v-model="gender">女</one-radio> 
  -->
  <div></div><hr>
<!-- 
  <one-radio-group v-model="gender">
    <one-radio label="0">男</one-radio>
    <one-radio label="1">女</one-radio> 
  </one-radio-group> -->

  <one-checkbox v-model="active" label="0">是否选中</one-checkbox>
  <one-checkbox v-model="active" label="0">是否选中</one-checkbox>
  <hr>

  <one-checkbox-group v-model="hobby">
    <one-checkbox label="11">抽烟</one-checkbox>
    <one-checkbox label="22">喝酒</one-checkbox>
    <one-checkbox label="33">烫头</one-checkbox>
  </one-checkbox-group>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isVisible: false,
      username: "我是组件",
      active: false,
      gender: '0',
      hobby:['11','22','33']
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
