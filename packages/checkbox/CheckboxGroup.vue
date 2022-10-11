<template>
  <div class="ba-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'BaCheckboxGroup',
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    modelValue: {
      type: Array
    }
  }
}
</script>