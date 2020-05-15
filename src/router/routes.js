/* 
所有路由配置的数组
*/
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'

import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import MyOrder from '@/pages/Center/MyOrder'
import GroupBuy from '@/pages/Center/GroupBuy'


import Register from '@/pages/Register'
import Login from '@/pages/Login'
import store from '@/store'
import router from '@/router'

export default [
  {
    path: '/',
    component: Home
  },
  {
    name: 'search',  // 是当前路由的标识名称
    path: '/search/:keyword?',
    component: Search,
    // 将params参数和query参数映射成属性传入路由组件
    props: route => ({keyword3: route.params.keyword, keyword4: route.query.keyword2})
  },
  {
    name: 'detail',  // 是当前路由的标识名称
    path: '/detail/:skuId',
    component: Detail,
  },
  {
    path: '/addcartsuccess',
    component: AddCartSuccess,

    beforeEnter (to, from, next) {
      // 得到当前路由信息对象
      // const route = router.currentRoute  // route就是from

      // 得到要跳转到目路由的query参数
      const skuNum = to.query.skuNum
      // 读取保存的数据
      const skuInfo = JSON.parse(window.sessionStorage.getItem('SKU_INFO_KEY'))
      console.log('---', skuNum, skuInfo)
      // 只有都存在, 才放行
      if (skuNum && skuInfo) {
        next()
      } else { // 在组件对象创建前强制跳转到首页
        next('/')
      }
    }
  },
  {
    path: '/shopcart',
    component: ShopCart,
  },

  {
    path: '/trade',
    component: Trade,
    /* 只能从购物车界面, 才能跳转到交易界面 */
    beforeEnter (to, from, next) {
      if (from.path==='/shopcart') {
        next()
      } else {
        next('/shopcart')
      }
    }
  },
  {
    path: '/pay',
    component: Pay,
    /* 只能从交易界面, 才能跳转到支付界面 */
    beforeEnter (to, from, next) {
      if (from.path==='/trade') {
        next()
      } else {
        next('/trade')
      }
    }
  },
  
  {
    path: '/paysuccess',
    component: PaySuccess,
    /* 只有从支付界面, 才能跳转到支付成功的界面 */
    beforeEnter (to, from, next) {
      if (from.path==='/pay') {
        next()
      } else {
        next('/pay')
      }
    }
  },
  {
    path: '/center',
    component: Center,
    children: [
      {
        // path: '/center/myorder',
        path: 'myorder',
        component: MyOrder,
      },
      {
        path: 'groupbuy',
        component: GroupBuy,
      },

      {
        path: '',
        redirect: 'myorder'
      }
    ]
  },

  {
    path: '/register',
    component: Register,
    meta: {
      isHideFooter: true
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      isHideFooter: true
    },
/* 
    beforeEnter: (to, from, next) => { // 路由前置守卫
      // 如果还没有登陆, 放行
      if (!store.state.user.userInfo.token) {
        next()
      } else {
        // 如果已经登陆, 跳转到首页
        next('/')
      }
    } */
  },
]