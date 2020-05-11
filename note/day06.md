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

    2). 自定义通用型/复用型组件的基本步骤
        实现静态组件: 模板/样式写好
        设计从外部接收的数据: props
            currentPage: 当前页码
            pageSize: 每页数量
            total: 总数量
            showPageNo: 连续数码数
        设计内部包含的数据: data
            myCurrentPage: 当前页码
        设计基于props和data的计算属性数据: computed
            总页数: totalPages
                依赖数据: total 和 pageSize     36 5 
                算法: Math.ceil(total/pageSize)
            连续页码数的开始页码与结束页码: start和end
                依赖数据: myCurrentPage / showPageNo / totalPages
                算法:
                    start最小值是1
                    end最大值是totalPages
                    计算start
                    计算end
                    返回包含start和end的对象

        根据props和data数据和computed进行动态显示
            :disabled="xxx": 控制是否能操作
            v-if="yyy": 控制是否显示
            v-for="end": 遍历显示多个数值   
            v-for的优先级高于v-if: 先执行v-for的遍历, 每遍历一个再进行v-if的判断  面试题
        
        更新数据, 更新界面
            用户操作组件界面元素时, 更新当前组件的data数据
            子组件更新data数据的同时, 可能需要通知父组件做一些更新父组件数据的操作(可能异步/同步)
            父组件更新data数据的同时, 可能也要去更新子组件的数据

## Detail组件静态路由组件
    定义静态组件
    注册路由
    通过<router-link>进行路由跳转

    如何让路由跳转后, 滚动条自动停留到起始位置?
        scrollBehavior (to, from, savedPosition) {
            return { x: 0, y: 0 }  // 在跳转路由时, 滚动条自动滚动到x轴和y轴的起始位置
        }

