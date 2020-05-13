## 今日任务
    1). Detail组件动态显示数据
    2). ImageList组件
    3). Zoom组件
    4). 添加到购物车

## Detail组件动态显示数据
    api: reqProduct()
    vuex: detail.js---state/mutations/actions/getters
    组件: dispatch() / mapState() / mapGetters()

## 错误: "TypeError: Cannot read property 'category1Name' of undefined"
    说明: 不能在undefined上读取xxx属性
    原因: detailInfo初始值是{}, detailInfo.categoryView就是undefined  
          如果执行detailInfo.categoryView.category1Name就会报错了
    解决办法1:
        想办法让detailInfo.categoryView不是undefined ==> 利用vuex的getters来处理返回对象
    解决办法2:
        想办法当detailInfo.categoryView是undefined时, 不解析此块模板, 使用v-if来限制
        说明: v-show不可以(条件为false时, 依然会解析, 只是display为none不显示)
              v-if可以(条件为false时, 不会解析)

## 销售属性的功能(大家做)
    数据: spuSaleAttrList  ==> isChecked为"1"代表是默认的
    动态显示列表
    点击选中任意一个

## ImageList组件
    动态显示数据
        根据传的imgUrl和bigUrl属性来显示中图和大图
    放大镜的效果:
        布局: 
            左边: 
                <img>: 中图
                event <div>: 用来绑定响应mousemove
                mask <div>: 随着鼠标移动的遮罩   字的尺寸是div的1/4
            右边:
                <div>: 包含大图img, 与左侧尺寸一样
                <img>: 大图, 尺寸是中图的4倍
        事件处理:
            什么事件: mousemove
            给谁绑定: event <div>
            在事件回调函数中做什么?
                移动mask div: 指定其left和top样式: 
                    maskDiv.style.left = left + px
                    maskDiv.style.top = top + px
                移动大图 img: 指定其left和top样式: 
                    bigImg.style.left = -2*top + px
                    bigImg.style.top = -2*top + px
            计算最新的left值和top值
                依赖数据: 事件坐标offsetX和offsetY, mask的宽度maskWidth
                算法: 
                    left = offsetX - maskWidth/2
                    top = offsetY - maskWidth/2
                    限制left和top值只能在[0, maskWidth/2]

## 在组件中分发异步action之后, 如果知道是成功了还是失败了从而做相应处理?
    实现方式1: 利用回调函数数据
        component: dispatch('addToCart', {callback: this.callback}) // 携带回调函数数据
        action: 请求成功或失败后, 调用callback(errorMsg值) // 向组件传递需要显示的errorMsg
        component: 在callback中, 根据errorMsg参数是否有值来做相应处理

    实现方式2: 利用dispatch()的promise返回值
        前置知识:
            async函数执行的返回值是一个promise, 且promise的结果由函数体的结果决定
                throw error ==> 失败了 reason为error
                return 失败的promise  ==> 失败了 reason为函数体返回听promise的reason
                return 成功的promise ==> 成功了, value为函数体返回听promise的value
                return 其它值  ==> 成功了, value为函数体返回的值

            执行dispatch()返回值为promise对象, 它就是async action函数返回的promise
        
        component: dispatch('addToCart', {}) // 不用携带回调函数数据
        方式1:
            action: 
                请求操作成功: 返回''
                请求操作失败: 返回errorMsg
            component: 通过dispatch()返回的promise的成功value值来判断成功还是失败了
        方式2:
            action: 
                请求操作成功: 返回''
                请求操作失败: throw new Error(errorMsg值)
            component: 通过dispatch()返回的promise是成功的还是失败来判断操作是成功的还是失败
