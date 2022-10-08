## Form 表单
由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据


### 典型表单
<br/>
包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。

:::demo 在 Form 组件中，每一个表单域由一个 Form-Item 组件构成，表单域中可以放置各种类型的表单控件，包括 Input、Select、Checkbox、Radio、Switch、DatePicker、TimePicker

```vue
<ba-form ref="form" :model="form" label-width="80px">
  <ba-form-item label="活动名称">
    <ba-input v-model="form.name"></ba-input>
  </ba-form-item>
  <ba-form-item label="即时配送">
    <ba-switch v-model="form.delivery"></ba-switch>
  </ba-form-item>
  <ba-form-item label="活动性质">
    <ba-checkbox-group v-model="form.type">
      <ba-checkbox label="美食/餐厅线上活动" name="type"></ba-checkbox>
      <ba-checkbox label="地推活动" name="type"></ba-checkbox>
      <ba-checkbox label="线下主题活动" name="type"></ba-checkbox>
    </ba-checkbox-group>
  </ba-form-item>
  <ba-form-item label="特殊资源">
    <ba-radio-group v-model="form.resource">
      <ba-radio label="线上品牌商赞助"></ba-radio>
      <ba-radio label="线下场地免费"></ba-radio>
    </ba-radio-group>
  </ba-form-item>
  <ba-form-item label="活动形式">
    <ba-input type="textarea" v-model="form.desc"></ba-input>
  </ba-form-item>
  <ba-form-item>
    <ba-button type="primary" @click="onSubmit">立即创建</ba-button>
    <ba-button>取消</ba-button>
  </ba-form-item>
</ba-form>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
```
:::

<br/>


::: tip W3C 标准中有如下规定:

When there is only one single-line text input field in a form, 
the user agent should accept Enter in that field as a request to submit the form.
即：当一个 form 元素中只有一个输入框时，在该输入框中按下回车应提交该表单。
如果希望阻止这一默认行为，可以在 `<ba-form>` 标签上添加 `@submit.native.prevent`。

:::


<br/>

### Form-item Attributes


| 属性  | 值     | 描述                       |
| ----- | ------ | -------------------------- |
| label | String | 表单项名称，默认为空字符串 |



### Form Attributes


| 属性        | 值     | 描述                 |
| ----------- | ------ | -------------------- |
| model       | Object | 表单对象，必填       |
| label-width | String | 标签宽度，默认"80px" |