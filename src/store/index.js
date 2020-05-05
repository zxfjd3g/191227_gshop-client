/* 
vuex最核心的管理对象: store
*/
import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home'
import user from './modules/user'

// 声明使用vuex的插件
Vue.use(Vuex)

const mutations = {
  test2 (state) { // 总state

  }
}

const actions = {

}

const getters = {

}

// 向外暴露store对象
export default new Vuex.Store({
  // state,
  mutations,
  actions,
  getters,
  modules: {// 注册vuex的多个子模块
    home,
    user
  }
})

/* 
vuex的store管理的总state是什么结构:
  {
    home: {
      baseCategoryList: [],
      x: {},
      y: ''
    },

    user: {
      userInfo: {},
      x: ''
    }
  }
*/
