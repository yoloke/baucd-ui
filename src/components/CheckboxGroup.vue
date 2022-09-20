<template>
  <div class="one-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'OneCheckboxGroup',
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