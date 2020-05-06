<template>
  <div class="type-nav">
    <div class="container">
      
      <div @mouseleave="currentIndex=-2" @mouseenter="currentIndex=-1">
        <h2 class="all">全部商品分类</h2>
        <div class="sort">
          <div class="all-sort-list2" @click="toSearch">
            <div class="item" v-for="(c1, index) in categoryList" :key="c1.categoryId" 
              :class="{item_on: index===currentIndex}" @mouseenter="showSubCategorys(index)">
              <h3>
                <a href="javascript:" :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{c1.categoryName}}</a>
                <!-- <a href="javascript:" @click="$router.push(`/search?categoryName=${c1.categoryName}&category1Id=${c1.categoryId}`)">{{c1.categoryName}}</a> -->
                <!-- <router-link :to="`/search?categoryName=${c1.categoryName}&category1Id=${c1.categoryId}`">{{c1.categoryName}}</router-link> -->
              </h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl class="fore" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                    <dt>
                      <a href="javascript:" :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">{{c2.categoryName}}</a>
                      <!-- <a href="javascript:" @click="$router.push(`/search?categoryName=${c2.categoryName}&category2Id=${c2.categoryId}`)">{{c2.categoryName}}</a> -->
                      <!-- <router-link :to="`/search?categoryName=${c2.categoryName}&category2Id=${c2.categoryId}`">{{c2.categoryName}}</router-link> -->
                    </dt>
                    <dd>
                      <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                        <a href="javascript:" :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId">{{c3.categoryName}}</a>
                        <!-- <a href="javascript:" @click="$router.push(`/search?categoryName=${c3.categoryName}&category3Id=${c3.categoryId}`)">{{c3.categoryName}}</a> -->
                        <!-- <router-link :to="`/search?categoryName=${c3.categoryName}&category3Id=${c3.categoryId}`">{{c3.categoryName}}</router-link> -->
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
  // import _ from 'lodash'  // 引入整体lodash
  import throttle from 'lodash/throttle'  // 只引入我需要的工具函数   打包文件减少1.4M
  import { mapState } from 'vuex'
  export default {
    name: 'TypeNav',

    data () {
      return {
        // -2: 代表完全在整个div外面  -1: 代表在大的div中  >=0 代表在分类项小div中
        currentIndex: -2 // 需要显示子列表的一级分类项的下标
      }
    },

    computed: {
      /* baseCategoryList () {
        return this.$store.state.home.baseCategoryList
      } */
      
      /* 
      ...mapState(['baseCategoryList']),
      baseCategoryList () {
        return this.$store.state.baseCategoryList
      } 
      */

      // vuex单模块, 计算属性名与state中对应的属性名一致的情况
      /* 
      ...mapState(['baseCategoryList', 'xxx'])
      ...{
        baseCategoryList () {
          return this.$store.state['baseCategoryList']
        },
        xxx () {
          return this.$store.state['xxx']
        }      
      }
      */

     // vuex单模块, 计算属性名与总state中对应的属性名不一样的情况
     /* 
     ...mapState({
       categoryList: 'baseCategoryList',
       xxx2: 'xxx'
     }) */

      // vuex多模块
      // 不利用mapState
      /* baseCategoryList () {
        return this.$store.state.home.baseCategoryList
      } */
      
      ...mapState({
        // 计算属性值由vuex内部调用此回调函数(传入总state)得到返回值作为属性值
        // state: store的总状态
        categoryList: state => state.home.baseCategoryList
      })
    },

    mounted () {
      // 通过异步action获取异步获取数据到vuex的state中
      this.$store.dispatch('getBaseCategoryList')
    },

    methods: {
      /* 
      显示指定下标的子分类
      */
      // showSubCategorys: _.throttle(function (index) {
      showSubCategorys: throttle(function (index) {
        // console.log('showSubCategorys', index)
        if (this.currentIndex===-2) return // 如果已经完全移出去了, 不做更新
        // 更新需要显示子分类的下标
        this.currentIndex = index
        // 会导致列表更新(浏览器在更新过程中没办法去响应后面mouseenter)  ==> 实际上就是界面卡了 不太好
        // 理想: 不去特别频繁的更新数据(更新界面)   ==> 使用节流
      }, 300),

      /* 
      点击分类项, 跳转到搜索界面
      */
      toSearch (event) {
        const { categoryname, category1id, category2id, category3id } = event.target.dataset
        // 如何判断点击的分类项<a>
        if (categoryname) { // 只有所有的分类项的a指定了data-categoryName属性
          // 准备query参数对象
          const query = {categoryName: categoryname}
          if (category1id) {
            query.category1Id = category1id
          } else if (category2id) {
            query.category2Id = category2id
          } else if (category3id) {
            query.category3Id = category3id
          }

          // 跳转到search
          this.$router.push({
            name: 'search',
            query
          })
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .type-nav {
    border-bottom: 2px solid #e1251b;

    .container {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      position: relative;

      .all {
        width: 210px;
        height: 45px;
        background-color: #e1251b;
        line-height: 45px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
      }

      .nav {
        a {
          height: 45px;
          margin: 0 22px;
          line-height: 45px;
          font-size: 16px;
          color: #333;
        }
      }

      .sort {
        position: absolute;
        left: 0;
        top: 45px;
        width: 210px;
        height: 461px;
        position: absolute;
        background: #fafafa;
        z-index: 999;

        .all-sort-list2 {
          .item {
            h3 {
              line-height: 30px;
              font-size: 14px;
              font-weight: 400;
              overflow: hidden;
              padding: 0 20px;
              margin: 0;

              a {
                color: #333;
              }
            }

            .item-list {
              display: none;
              position: absolute;
              width: 734px;
              min-height: 460px;
              background: #f7f7f7;
              left: 210px;
              border: 1px solid #ddd;
              top: 0;
              z-index: 9999 !important;

              .subitem {
                float: left;
                width: 650px;
                padding: 0 4px 0 8px;

                dl {
                  border-top: 1px solid #eee;
                  padding: 6px 0;
                  overflow: hidden;
                  zoom: 1;

                  &.fore {
                    border-top: 0;
                  }

                  dt {
                    float: left;
                    width: 54px;
                    line-height: 22px;
                    text-align: right;
                    padding: 3px 6px 0 0;
                    font-weight: 700;
                  }

                  dd {
                    float: left;
                    width: 555px;
                    padding: 3px 0 0;
                    overflow: hidden;

                    em {
                      float: left;
                      height: 14px;
                      line-height: 14px;
                      padding: 0 8px;
                      margin-top: 5px;
                      border-left: 1px solid #ccc;
                    }
                  }
                }
              }
            }

            &.item_on {
              background: #ccc;
              .item-list {
                display: block;
              }
            }
          }
        }
      }
    }
  }
</style>