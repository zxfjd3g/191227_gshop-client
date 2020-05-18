## 今日任务
    1). 订单交易
    2). 支付
    3). 其它

## 订单相关接口请求函数

## 订单的vuex子模块

## 订单交易
    动态获取数据显示
    收件地址选择的功能
        默认选中默认收件地址: selectedAddr / watch 'tradeInfo.userAddressList'
        点击选中任意一个
        显示选中的地址
    提交订单
        提交订单请求的参数的准备: tradeNo和orderInfo
        发送提交订单的请求 ==> 得到一个新的订单号orderId
        跳转到Pay页面并携带orderId

## 支付
    动态获取支付信息 ==> 金额与支付的url
    利用qrcode工具包生成一个用于支付的二维码图片
    利用element-ui的组件来显示二维码图片
        对element-ui实现按需引入打包
        2种类型的UI组件
            标签组件: 通过渲染其标签来显示界面  例子: Pagination
            函数/对象组件: 通过执行函数或调用对象的方法来显示界面  例子: MessageBox/Message
        理解: $msgbox与$alert/$confirm
            $msgbox: MessageBox
            $alert: MessageBox.alert
            $confirm: MessageBox.confirm
    每隔3S获取去获取订单支付的状态, 
        如果已支付:
            自动关闭对话框
            跳转到成功页面
            清除定时
            删除购物车所有勾选的购物项
        如果还没有, 等待
        请求出错:
            提示
            清除定时器

## 路由组件懒加载
    理解: 
        当打包构建应用时，JS包会变得非常大，影响页面加载。
        如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，
        这样就更加高效了
    编码: Home = () => import('@/pages/Home')
    分析: 
        import(modulePath): 动态import引入模块, 被引入的模块会被单独打包
        组件配置的是一个函数, 函数中通过import动态加载模块并返回, 
        初始时函数不会执行, 第一次访问对应的路由才会执行, 也就是说只有一次请求对应的路由路径才会请求加载单独打包的js

## 图片懒加载
    理解:
        还没有加载得到目标图片时, 先显示loading图片
        在<img>进入可视范围才加载请求目标图片
    编码:
        使用vue-lazy实现
        下载: npm install -S vue-lazy
        import VueLazyload from 'vue-lazyload'
        // 配置vue的插件
        Vue.use(VueLazyload, { // 内部自定义一个指令: lazy
            loading,  // 配置loading图片
        })
        <img v-lazy="goods.defaultImg" />