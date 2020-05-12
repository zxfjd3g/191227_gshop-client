## 今日任务
    1). Detail组件动态显示数据
    2). ImageList组件
    3). Zoom组件
    4). 添加到购物车

## Detail组件动态显示数据
    api
    vuex
    组件


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