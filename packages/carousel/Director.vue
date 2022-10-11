<template>
  <transition>
    <div class="director dir-next ba-icon-chevron-right" v-if="dir === 'next'" @click="dirClick(dir)">
    </div>
    <div class="director dir-prev ba-icon-chevron-left" v-else-if="dir === 'prev'" @click="dirClick(dir)">
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Director',
  props: {
    dir: String
  },
  setup(props, ctx) {
    const dirClick = (dir) => {
      console.log(dir);
      ctx.emit('dirClick', dir);
    }
    return {
      dirClick
    }
  }
}
</script>

<style lang="scss" scoped>
.director {
  position: absolute;
  display: none;
  top: 50%;
  z-index: 1;
  margin-top: -12px;
  width:24px;
  height:24px;
  text-align: center;
  line-height: 24px;
  color: #fff;
  font-size: 18px;
  background-color: rgb(0,0,0, .1);
  border-radius: 50%;

  a {
    color: #fff;
    text-decoration: none;
  }

  &.dir-next {
    right: 10px;
    animation: aa 0.2s linear;
  }

  &.dir-prev {
    left: 10px;
    animation: kk 0.2s linear;
  }

  @keyframes kk {
    0% {
      transform: translateX(-10px);
      opacity: 0.2;
    }

    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes aa {
    0% {
      transform: translateX(10px);
      opacity: 0.2;
    }

    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
}
</style>