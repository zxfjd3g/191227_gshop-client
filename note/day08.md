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