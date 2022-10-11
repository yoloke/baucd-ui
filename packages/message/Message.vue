<template>
    <transition name="slideY-fade" @after-leave="afterLeave" appear>
        <div class="ba-message" v-show="isShow">
            <span><i :class="icon[type]" />{{ content }}</span>
        </div>
    </transition>
</template>

<script>
import { ref, getCurrentInstance } from 'vue'
export default {
    name: 'BaMessage',
    props: {
        content: [String, Number, Boolean],
        type: String,
        duration: {
            type: Number,
            default: 1.5,
        },
    },
    setup(props) {
        const { duration } = props
        const instance = getCurrentInstance()

        const isShow = ref(true)

        if (duration > 0) {
            setTimeout(close, duration * 1000)
        }

        function close() {
            isShow.value = false
        }

        const afterLeave = () => {
            instance.vnode.el.parentElement?.removeChild(instance.vnode.el)
        }

        const icon = {
            info: 'x-icon-info info',
            error: 'x-icon-x-circle error',
            success: 'x-icon-check-circle success',
            warning: 'x-icon-alert-triangle warning',
            loading: 'x-icon-loader loading',
        }

        return {
            icon,
            isShow,
            close,
            afterLeave,
        }
    },
}
</script>
<style lang="scss" scoped>
.ba-message {
    font-size: 14px;
    position: fixed;
    z-index: 1010;
    top: 16px;
    left: 50%;
    background-color: var(--main-background-color);
    box-shadow: 0 4px 10px var(--shadow);
    padding: 5px 20px;
    border-radius: 3px;
    pointer-events: none;
    font-family: Arial, Helvetica, sans-serif;
    transform: translate(-50%, 0);

    span {
        font-size: 14px;
        position: relative;
        padding-left: 23px;
        display: block;
    }

    i[class^=x-icon] {
        font-size: 16px;
        position: absolute;
        left: 0;
        top: -2px;

        &.loading {
            color: rgb(var(--info));
            animation: rotating linear 1.5s infinite;
            transform-origin: center;
        }
    }
}

@keyframes rotating {
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
