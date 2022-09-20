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
  
    <!-- <one-switch v-model="model.active" activeColor="green" inactiveColor="red" :name='username' ></one-switch>
    <one-switch v-model="model.active" :name='username' ></one-switch>  -->
 

  <!-- <one-radio label="0" v-model="gender">男</one-radio>
  <one-radio label="1" v-model="gender">女</one-radio> 
  -->
  <div></div>
<!--   
  <one-radio-group v-model="gender">
    <one-radio :label="8">男</one-radio>
    <one-radio :label="9">女</one-radio> 
  </one-radio-group>
  
   <one-checkbox v-model="active" lable="同意协议"></one-checkbox>
  <hr>

  <one-checkbox-group v-model="hobby">
    <one-checkbox label="抽烟"></one-checkbox>
    <one-checkbox label="喝酒"></one-checkbox>
    <one-checkbox label="烫头"></one-checkbox>
  </one-checkbox-group> 
 -->
 <one-form :model="model" labelWidth="100px">
  <one-form-item label="用户名">
    <one-input type='text'  v-model="model.username"/>
  </one-form-item>
  <one-form-item label="选择">
    <one-switch  v-model="model.active"></one-switch> 
  </one-form-item>
 </one-form>


</template>

<script>
export default {
  name: "App",
  data() {
    return {
      model: {
      aa: "343434",
      isVisible: false,
      username:"请输入用户名",
      active: false,
      gender: ' ',
      hobby: [],
      }
    };
  },
  methods: {
    switchDialog() {
      this.isVisible = false;
    },
    aa() {
      this.isVisible = true;
    },
    dd(e) {
      console.log(e);
    },
  },
  watch: {},
};
</script>

<style lang="scss">
</style>
