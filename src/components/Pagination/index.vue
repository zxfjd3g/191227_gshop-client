<template>
  <div class="pagination">
    <button>上一页</button>
    <button>1</button>
    <button disabled>···</button>

    <button>3</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>7</button>
    
    <button disabled>···</button>
    <button>{{totalPages}}</button>
    <button>上一页</button>
    
    <button style="margin-left: 30px" disabled>共 {{total}} 条</button>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    props: {
      // currentPage: 当前页码
      currentPage: {
        type: Number,
        default: 1
      },
      // pageSize: 每页数量
      pageSize: {
        type: Number,
        default: 10
      },
      // total: 总数量
      total: {
        type: Number,
        default: 0
      },
      // showPageNo: 连续数码数
      showPageNo: {
        type: Number,
        default: 5  // 最好指定为奇数
      },
    },

    data () {
      return {
        // 将外部传入的当前页码作为当前组件的当前面页码初始值
        myCurrentPage: this.currentPage
      }
    },

    computed: {
      /* 
      总页数: totalPages
          依赖数据: total 和 pageSize     36 5 
          算法: Math.ceil(total/pageSize)
      */
      totalPages () {
        const { total, pageSize } = this
        return Math.ceil(total/pageSize)
      }
    }
  }
</script>

<style lang="less" scoped>
  .pagination {
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;

      &[disabled] {
        color: #c0c4cc;
        cursor: not-allowed;
      }

      &.active {
        cursor: not-allowed;
        background-color: #409eff;
        color: #fff;
      }
    }
  }
</style>