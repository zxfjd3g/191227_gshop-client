<template>
  <div>
    <Header/>
    
    <!-- 在此显示当前路由组件 -->
    <router-view></router-view>

    <!-- <Footer v-show="$route.path!=='/register' && $route.path!=='/login'"/>  -->
    <Footer v-show="!$route.meta.isHideFooter"/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {reqBaseCategoryList, reqLogin} from '@/api'

export default {
  name: 'App',

  async mounted () {
    // 测试接口请求函数
    const result = await reqBaseCategoryList()
    console.log('result', result)

    const result2 = await reqLogin('13700000000', '111111')
    console.log('result2', result2)
  },

  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>
