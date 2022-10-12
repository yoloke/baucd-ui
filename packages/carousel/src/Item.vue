<template>
  <transition>
    <div class="ba-car-item" v-show="selfIndex === currentIndex" ref="root">
      <slot></slot>
    </div>
  </transition>
</template>

<script>

import {
  getCurrentInstance,
  reactive,
  toRefs,
  watch,
} from 'vue';

export default {
  name: 'BaCarItem',
  props: {
    index: {
      default: ""
    }
  },
  setup(props) {
    const { proxy } = getCurrentInstance();

    console.log(proxy);
    const state = reactive({
      // selfIndex: instance.vnode.key,
      selfIndex: props.index,
      currentIndex: proxy.$parent.currentIndex
    });

    watch(() => {
      return proxy.$parent.currentIndex
    }, (value) => {
      state.currentIndex = value;
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
.ba-car-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #d3dce6;

  &:nth-of-type(2n+1) {
    background-color: #99a9bf;
  }

  img {
    width: 100%;
  }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.8s linear;
}

.v-enter-active {
  transform: translateX(100%)
}

.v-enter-to {
  transform: translateX(0);
}

.v-leave-active {
  transform: translateX(0);
}

.v-leave-to {
  transform: translateX(-100%)
}
</style>