/* 
管理购物车相关数据的vuex子模块
*/

import {reqCartLit} from '@/api'

export default  {
  state: {
    cartList: [], // 购物项的列表
  },

  mutations: {
    RECEIVE_CART_LIST (state, {cartList}) {
      state.cartList = cartList
    }
  },

  actions: {
    /* 
    获取购物车列表数据的异步action
    */
    async getCartList ({commit}) {
      const result = await reqCartLit()
      if (result.code===200) {
        const cartList = result.data
        commit('RECEIVE_CART_LIST', {cartList})  // 提交给mutation是包含数据的对象
      }
    }
  },
  getters: {
    /* 
    已选中的商品的总数量
    */
    totalCount (state) {
      
      let total = 0
      state.cartList.forEach(item => {
        const {isChecked, skuNum} = item
        // 只有在当前购物项选中才累加
        if (isChecked===1) {
          total += skuNum
        }
      })

      return total

      // 使用array的reduce()来做累计累加操作
     /*  return state.cartList.reduce((pre, item) => {
        return item.isChecked===1 ? pre + item.skuNum : pre
      }, 0) */
    },

    /* 
    已选中的商品的总价格
    */
    totalPrice (state) {
      let total = 0
      state.cartList.forEach(item => {
        const {isChecked, cartPrice, skuNum} = item
        // 只有在当前购物项选中才累加
        if (isChecked===1) {
          total += cartPrice * skuNum
        }
      })
      return total

      /* 
      return state.cartList.reduce((pre, item) => {
        return item.isChecked===1 ? pre + item.skuNum*item*cartPrice : pre
      }, 0) */
    }
  },
}