<template>
  <div class="ba-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaButtonGroup",
};
</script>
<style scoped lang="scss">
.ba-button-group {
    display: inline-flex;
    + .ba-button-group{
        margin-left: 16px;
    }
   ::v-deep .ba-button {
    border-radius: 0;
    margin: 0;
    &:not(:first-child){
        border-left:none;
    }
     &:not(:last-child){
        border-right: 1px solid rgba(255, 255, 255, .5);
    }
    &:first-child{
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
    }
    &:last-child{
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
    }
  }
}
</style>