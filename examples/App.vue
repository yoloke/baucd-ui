<template>
  <ba-form :model="model" labelWidth="100px">
  <ba-form-item label="用户名">
    <ba-input type='text'  v-model="model.username" clearable/>
  </ba-form-item>
   <ba-form-item label="密码">
    <ba-input type='password'  v-model="model.username" showPassword/>
  </ba-form-item>
  <ba-form-item label="选择">
    <ba-switch  v-model="model.active" disabled></ba-switch> 
  </ba-form-item>
  <ba-form-item label="按钮">
    <ba-button circle icon="activity"></ba-button> 
  </ba-form-item>
  </ba-form>
  <ba-pagination pageNo="1" pageSize='3' total="43" continues="7"></ba-pagination>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      model: {
      aa: "343434",
      isVisible: false,
      username: "我是组件",
      username:"请输入用户名",
      active: false,
      gender: '0',
      hobby:['11','22','33'],
      gender: ' ',
      hobby: [],
      }
    }
  },
}
</script>

<style lang="scss">
p{
  color:#ff4949;
}
</style>
