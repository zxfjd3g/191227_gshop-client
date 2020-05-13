## 今日任务
    1). 添加购物车成功
    2). 购物车数据的CRUD

## 添加购物车成功
    静态路由组件

    跳转路由时携带数据
      params     刷新数据还在
      query    刷新数据还在
      vuex: 在跳转路由前先将数据保存到state中  问题: 刷新就会丢失
      纯浏览器端存储: sessionStorage与localStorage

## sessionStorage与localStorage的使用和区别
    共同点:
        都是只保存在浏览器端
        存储的是文本字符串(如果指定的是对象会自动转换为字符串保存), 
        如果要保存对象/数组, 应该转换为JSON字符串后保存
        语法基本一样:
          sessionStorage.setItem(key, value)/getItem(key)/removeItem(key)
          localStorage.setItem(key, value)/getItem(key)/removeItem(key)
    不同点:
        sessionStorage: 保存在浏览器运行的内存中, 刷新浏览器数据还在, 关闭浏览器会自动清除
        localStorage: 保存在浏览器管理的本地文本中, 无论刷新还关闭浏览器还会存在, 不自动清除

## 购物车路由组件ShopCart

## ShopCart组件--动态列表数据
    api
    vuex
    component

## 用于购物车相关请求的标识数据: 用户临时ID / userTempId
    userTempId的作用:
        在用户未登陆前的身份标识, 用于识别不同的浏览器访问
    userTempId的特点
        它是一个随机唯一的字符串值: 多个客户端之间不相同, 同一个客户端如果产生多次也不同     UUID
        由浏览器端创建, 每次请求都携带给服务器端
        一旦产生, 尽量不删除或修改, 可以一直使用
    userTempId的创建与保存
        使用UUID库来创建: uuidv4()
        保存在哪?: 
            localStorage   ===> 关闭浏览器还存在
            vuex的state中: 从localStorage中读取uuid值保存到state中  ==> 减少从localStorage读取的次数
    userTempId使用
        每次请求都携带上userTempId: 使用axios的请求拦截器


## 改变指定商品的勾选状态
    api
    vuex
    component

## 实现所有购物项商品的全选/全不选功能
    api
    vuex
    component
        显示: 根据cartList中是否所有item都勾选了, 来决定是true/false
        当用户主动改变的checkbox勾选状态: 发请求更新所有购物项的勾选状态为对应的值

## 删除指定的一个商品  (作业)

## 删除所有选中的商品 (作业)

## 修改商品的数量
    api: reqAddToCart(skuId, skuNumChange)  
         skuNumChange代表要改变的数量, 如果是正数代表增加, 如果负数代表减少
    vuex:
        addToCart3({}, {skuId, skuNum})
    component:
        

