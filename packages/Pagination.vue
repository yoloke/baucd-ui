<!--  -->
<template>
  <!-- 分页器 -->
  <div class="ba-pagination">
    <!-- 上一页 -->
    <ba-button
      class="ba-button"
      :class="pageNo == 1 ? 'disabled' : ''"
      @click="getPageNo(pageNo - 1)"
      icon="chevron-left"
    >
    </ba-button>
    <ul>
      <!-- 第一页 -->
      <li v-if="startAndEnd.start > 1" @click="$emit('getPageNo', 1)">1</li>
      <li v-if="startAndEnd.start > 2" @click="$emit('getPageNo', pageNo - pageDotted)">
        <i class="dotted1 ba-icon-more-horizontal"></i>
      </li>
      <!-- 中间连续页码的地方:v-for、数组、对象、数字、字符串 -->
      <li
        v-for="page in startAndEnd.end"
        :key="page"
        v-show="page >= startAndEnd.start"
        :class="{ active: pageNo == page }"
        @click="getPageNo(page)"
      >
        {{ page }}
      </li>
      <li
        v-if="startAndEnd.end < totalPage - 2"
        @click="$emit('getPageNo', pageNo + pageDotted)"
      >
        <i class="dotted2 ba-icon-more-horizontal"></i>
      </li>
      <!-- 最后一页 -->
      <li v-if="startAndEnd.end < totalPage" @click="getPageNo(totalPage)">
        {{ totalPage }}
      </li>
    </ul>
    <!-- 下一页 -->
    <ba-button
      class="ba-button"
      icon="chevron-right"
      :class="pageNo == totalPage ? 'disabled' : ''"
      @click="getPageNo(pageNo + 1)"
    >
    </ba-button>
  </div>
</template>

<script>
export default {
  name: "BaPagination",
  //pageNo当前页
  //pageSize一页多少数据
  //total一共有多少数据
  //continues代表分页连续页码个数  一般是5和7  奇数  对称
  props: {
    pageNo: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    total: {
      type: Number,
      default: 100,
    },
    continues: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    //计算一共多少页
    totalPage() {
      //shang
      return Math.ceil(this.total / this.pageSize);
    },
    //底下的代码是整个分页器最重要的地方[算出连续五个数字、开头、结尾]
    startAndEnd() {
      //算出连续页码:开始与结束这两个数字
      let start = 0,
        end = 0;
      const { totalPage, continues, pageNo } = this;
      //特殊情况:总共页数小于连续页码数
      if (totalPage < continues) {
        start = 1;
        end = totalPage;
      } else {
        //正常情况：分页器总页数大于连续页码数
        //当前第8页  6 7 8 9 10 continues=5
        //当前第8页  5 6 7 8 9 10 11 continues=7
        //continues可能会变化   不能写死 start = pageNo-2
        start = pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);
        //约束start|end在合理范围之内
        //约束头部
        if (start < 1) {
          start = 1;
          end = continues;
        }
        //约束尾部
        if (end > totalPage) {
          end = totalPage;
          start = totalPage - continues + 1;
        }
      }
      end = parseInt(end);
      start = parseInt(start);
      return { start, end };
    },
    pageDotted() {
      return parseInt(this.continues/2+1)
    }
  },
  methods: {
    getPageNo(pages) {
      this.$emit("getPageNo", pages);
    },
  },
};
</script>
<style scoped lang="scss">
.ba-pagination {
  display: flex;
  justify-content: center;
  .ba-button {
    font-size: 22px;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    height: 40px;
    margin: 0;
    &:hover {
      background-color: rgba(255, 255, 255, 0);
      color: #409eff;
    }
    &.disabled {
      pointer-events: none;
      color: #999;
      cursor: default;
    }
  }
  ul {
    li {
      position: relative;
      float: left;
      height: 18px;
      line-height: 18px;
      font-size: 14px;
      padding: 11px 18px;
      color: #333;
      &:hover {
        cursor: pointer;
        color: #409eff;
      }
      &.active {
        color: #409eff;
        cursor: default;
      }
      .dotted2 {
        font-size: 16px;
        &:hover::before {
          content: "\e938";
        }
      }
      .dotted1 {
        font-size: 16px;
        &:hover::before {
          content: "\e937";
        }
      }
    }
  }
}
</style>