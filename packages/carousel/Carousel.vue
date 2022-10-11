<template>
  <div class="carousel" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <div class="inner">
      <CarDot :hasDot="hasDot" :itemLen="itemLen" :currentIndex="currentIndex" :dotBgColor="dotBgColor"
        @dotClick="dotClick" :trigger="trigger" />
      <CarDirector v-if="hasDirector" dir="prev" @dirClick="dirClick" />
      <CarDirector v-if="hasDirector" dir="next" @dirClick="dirClick" />
      <slot></slot>
    </div>
  </div>
</template>

<script>

import {
  reactive,
  toRefs,
  onMounted,
  onBeforeUnmount,
  getCurrentInstance
} from 'vue';

import CarDot from './Dot';
import CarDirector from './Director';

export default {
  name: 'BaCarousel',
  components: {
    CarDot,
    CarDirector
  },
  props: {
    autoplay: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 3000
    },
    initial: {
      type: Number,
      default: 0
    },
    hasDot: {
      type: Boolean,
      default: true
    },
    hasDirector: {
      type: Boolean,
      default: true
    },
    dotBgColor: String,
    trigger: {
      type: String,
      default: "hover"
    }
  },
  setup(props) {
    const instance = getCurrentInstance();

    const state = reactive({
      currentIndex: props.initial,
      itemLen: 0
    });

    let t = null;

    const autoPlay = () => {
      if (props.autoplay) {
        t = setInterval(() => {
          setIndex('next');
        }, props.duration)
      }
    }

    const setIndex = (dir) => {
      switch (dir) {
        case 'next':
          state.currentIndex += 1;
          if (state.currentIndex === state.itemLen) {
            state.currentIndex = 0;
          }
          break;
        case 'prev':
          state.currentIndex -= 1;
          if (state.currentIndex === -1) {
            state.currentIndex = state.itemLen - 1;
          }
          break;
        default:
          break;
      }
    }

    const dotClick = (index) => {
      state.currentIndex = index;
    }

    const dirClick = (dir) => {
      setIndex(dir);
    }

    const mouseEnter = () => {
      _clearIntervalFn();
    }

    const mouseLeave = () => {
      autoPlay();
    }

    onMounted(() => {
      state.itemLen = instance.slots.default()[0].children.length;
      autoPlay();
    });

    onBeforeUnmount(() => {
      _clearIntervalFn();
    });

    function _clearIntervalFn() {
      clearInterval(t);
      t = null;
    }

    return {
      ...toRefs(state),
      dotClick,
      dirClick,
      mouseEnter,
      mouseLeave
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  width: 100%;
  height: 100%;
  &:hover{
    .director{
      display: block;
    }
  }
  

  .inner {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>