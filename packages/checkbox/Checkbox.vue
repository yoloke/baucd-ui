<template>
  <label class="ba-checkbox" :class="{'is-checked':isChecked,'is-disabled':disabled}">
    <span class="ba-checkbox_input">
      <span class="ba-checkbox_inner"></span>
      <input type="checkbox" class="ba-checkbox_original" :name="name" :value="label" v-model="model"
        :disabled="disabled==true?'disabled':false">
    </span>
    <span class="ba-checkbox_label">
      <slot>{{label}}</slot>
    </span>
  </label>
</template>
<script>
export default {
  name: 'BaCheckbox',
  inject: {
    CheckboxGroup: {
      default: ''
    }
  },
  props: {
    //布尔值
    modelValue: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this.CheckboxGroup.modelValue : this.modelValue
      },
      set(value) {
        this.isGroup ? this.CheckboxGroup.$emit('update:modelValue', value) : this.$emit('update:modelValue', value)
      }
    },
    isGroup() {
      return !!this.CheckboxGroup
    },
    //是否选中
    isChecked() {
      // 如果group包裹，判断label是否在model中
      // 如果没有group包裹,直接使用model
      return this.isGroup ? this.model.includes(this.label) : this.model
    }
  }
}
</script>
 
<style lang="scss" scoped>
.ba-checkbox {
  position: relative;
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;

  .ba-checkbox_input {
    white-space: nowrap;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;

    .ba-checkbox_inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color .25s cubic-bezier(.71, -.46, .29, 1.46), background-color .25s, cubic-bezier(.71, -.46, .29, 1.46);

      &:after {
        box-sizing: content-box;
        content: '';
        border: 1px solid #ffffff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform .15s ease-in .05s;
        transform-origin: center;
      }
    }

    .ba-checkbox_original {
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }

  .ba-checkbox_label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}

// 选中的样式
.ba-checkbox.is-checked {
  .ba-checkbox_input {
    .ba-checkbox_inner {
      background-color: #409eff;
      border-color: #409eff;
    }

    &:after {
      transform: rotate(45deg) scaleY(1);
    }
  }

  .ba-checkbox_label {
    color: #409eff;
  }
}
        .is-disabled {
          cursor: not-allowed;
        }
</style>