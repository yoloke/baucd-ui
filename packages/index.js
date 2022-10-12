//用于声明install对象
// 整个包的入口
// 统一导出
// 导出颜色选择器组件
import Button from "./button/Button";
import ButtonGroup from "./button/ButtonGroup";
import Icon from './Icon'
import IconList from './IconList'
import Dialog from './Dialog'
import Input from './Input'
import Radio from './radio/Radio'
import RadioGroup from './radio/RadioGroup'
import Switch from './Switch'
import Checkbox from "./checkbox/Checkbox";
import CheckboxGroup from "./checkbox/CheckboxGroup";
import Form from './Form'
import FormItem from './FormItem'
import Pagination from './Pagination'
import Carousel from "./carousel/Carousel";
import CarItem from "./carousel/Item";
import Selector from './Selector.vue'
import Message from "./message/Message.vue";


import './fonts/style.css'

const components = [
  Button,
  ButtonGroup,
  Icon,
  IconList,
  Dialog,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  CheckboxGroup,
  Form,
  FormItem,
  Pagination,
  Selector,
  Carousel,
  CarItem,
  Message,
];
// 定义install方法
const install = function (app) {
    //注册所有的组件
    components.forEach(component => {
        app.component(component.name, component)
    })
}
//判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

// 导出install方法
export default {
    install
}