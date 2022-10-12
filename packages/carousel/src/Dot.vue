<template>
  <div class="dot-wrapper" v-if="hasDot">
    <ul class="dot-item">
      <li v-for="item in itemLen" :key="item" class="dot-lk" @click="dotClick(item - 1)"
        @mouseenter="dotHover(item -1)">
        <a :style="{ backgroundColor: (item - 1) === currentIndex ? dotBgColor : '#b5b7ba'}"></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CarDot',
  props: {
    itemLen: Number,
    currentIndex: Number,
    hasDot: {
      type: Boolean,
      default: true
    },
    dotBgColor: {
      type: String,
      default: '#fff'
    },
    trigger: {
      type: String,
      default: 'hover'
    }
  },
  setup(props, ctx) {
    const dotClick = (index) => {
      console.log(props.trigger);
      if (props.trigger == "click") {
        ctx.emit('dotClick', index);
      }
    }
    const dotHover = (index) => {
      if (props.trigger == "hover") {
        ctx.emit('dotClick', index);
      }
    }
    return {
      dotClick,
      dotHover
    }
  }
}
</script>

<style lang="scss" scoped>
.dot-wrapper {
  width: 100%;
  position: absolute;
  bottom:calc(5%);
  text-align: center;
  z-index: 1;

  .dot-item {
    display: flex;
    width: 100%;
    justify-content: center;
    padding-left: 0 !important;
    .dot-lk {
      width: 30px;
      padding: 0 2px;
      cursor: pointer;
      a {
        display: block;
        width: 24px;
        height: 2px;
      }
    }
  }
}
</style>