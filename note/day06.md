## 今日任务
    1). 响应式数据对象: 添加新属性和删除属性的问题
    2). 排序
    3). 自定义分页组件: Pagination
    4). Detail组件


## 响应式数据对象: 添加新属性和删除属性的问题
    基础: 
        响应式数据对象: data或者state中的对象属性, 比如 options/productList
        内部所层次的数据都是响应式的(更新这个数据对应界面就会自动更新)
    添加新属性
        错误方式: 
            直接添加: this.options.trademark = 'xxx'   ==> 不会自动更新界面
        原因: 
            vue内部没有对添加的属性进行劫持操作(没有对应的setter监视)
        正确方式:
            vm.$set( target, key, value )
            Vue.set( target, key, value )
            为响应式对象添加一个属性，确保新属性也是响应式的，并且能够触发视图更新
    删除属性
        错误方式: 
            直接添加: delete this.options.trademark   ==> 不会自动更新界面
        原因: 
            vue内部给响应式属性添加的setter, 只能监视属性值的改变, 不能监视属性的删除
        正确方式:
            vm.$delete( target, key )
            Vue.delete( target, key )
            删除属性, 同时更新界面

## 排序
    1). order数据的结构
        组成: orderFlag:orderType
        例子: 
            1:desc
            1:asc
            2:desc
            2:asc
        1: 综合,2: 价格 asc: 升序,desc: 降序  示例: "1:desc"
    2). 哪个排序项选中?
        根据当前order中的orderFlag来确定
    3). 根据哪个排序项进行什么方式排序?
        哪个排序项?  根据当前order中的orderFlag来确定
        什么方式排序?  根据当前order中的orderType确定
    4). 点击切换排序项和排序方式
        点击当前排序项: 切换排序方式后进行搜索
        点击不是当前排序项: 切换排序项, 排序方式为降序

## 自定义分页组件: Pagination
    1). 直接使用已经定义好的分页组件Pagination