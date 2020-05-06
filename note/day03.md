## 今日任务
    1). TypeNav的交互功能
    2). mock数据接口
    3). 利用mock数据接口实现ListContainer和Floor


## 事件控制二三级分类列表的显示与隐藏
    绑定事件: 
        mouseenter: 绑定在分类项上
        mouseleave: 标题和分类列表的父div(不能包含水平导航)  ---> 做动态效果时可能需要修改结构
    状态数据: currentIndex: 需要显示子分类列表的一级分类的下标
    样式类名: item_on 显示子分类列表div

## 优化高频事件触发处理: 利用lodash进行函数节流处理
    问题: mouseenter事件频繁触发会导致分类列表更新卡的现象
    解决: 使用lodash的throttle函数进行节流处理, 限制更新的次数

## 优化减小打包文件: 对lodash库实现按需引入 
    import _ from 'lodash'  // 引入整体lodash
    import throttle from 'lodash/throttle'  // 只引入我需要的工具函数   打包文件减少1.4M

## 解决快速移出后可能显示第一个分类的子分类列表的bug
    在最后一个mouseenter事件延迟0.3m才执行更新的回调函数
    在这个0.3s之内可能已经移出去了


6)优化减少组件对象数量: 使用编程式导航代替声明式导航
7)优化事件处理效率: 利用事件委托
8)利用标签自定义属性携带动态数据
9)控制一级列表的显示与隐藏
10)一级列表显示隐藏的过渡效果
11)优化请求执行的位置, 减少请求次数
12)合并分类query参数与搜索的关键字params参数