/* 
用来管理用户数据的vuex模块
*/

import { getUserTempId } from '@/utils'
import {reqRegister, reqLogin, reqLogout} from '@/api'

export default  {
  state: {
    userInfo: {},
    userTempId: getUserTempId()  // 用户临时ID, 获取函数只执行一次
  },
  mutations: {},
  actions: {
    /* 
    注册的异步action
    */
    async register (context, userInfo) {
      const result = await reqRegister(userInfo)
      if (result.code!==200) {
        throw new Error(result.data || result.message || '注册失败')
      }
    }
  },
  getters: {},
}