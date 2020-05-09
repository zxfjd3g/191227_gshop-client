## 今日任务: 实现Search组件
    1). Search静态组件(包含子SearchSelector子组件)
    2). Search组件动态显示
    3). 搜索条件参数的理解和准备
    4). 根据分类和关键字进行搜索
    5). 根据品牌进行搜索
    6). 根据商品属性进行搜索
    7). 排序搜索
    8). 自定义分页组件

## Search静态组件(包含子SearchSelector子组件)

## Search组件动态显示
    api: reqProductList()
    vuex: search.js ==> state/mutations/actions/getters 
    组件: 
        dispatch()
        mapState()
        模板

## 搜索条件参数的理解和准备
    category1Id: '', // 一级分类ID
    category2Id: '', // 二级分类ID
    category3Id: '', // 三级分类ID
    categoryName: '', // 分类名称
    keyword: '', // 关键字
    trademark: '', // 品牌  "ID:品牌名称"
    props: [], // 商品属性的数组: ["属性ID:属性值:属性名"] 示例: ["2:6.0～6.24英寸:屏幕尺寸"]
    order: '1:desc', // 排序方式  1: 综合,2: 价格 asc: 升序,desc: 降序  示例: "1:desc"
    pageNo: 1, // 当前页码
    pageSize: 10, // 每页数量
	
## 根据分类和关键字进行搜索
	分类: query参数: categoryName / category1Id / category2Id / category3Id
	关键字: params参数: keyword

    在beMount(): 根据query和params参数来更新options
    在mounted(): 根据options发请求获取数据

    问题: 如果当前已经在Search了, 再通过点击搜索/点击分类来跳转到Search, 没有重新搜索?
    原因: 从A路由跳转到A路由, A路由组件对象不会重新创建  ==> 不会重新执行初始化生命周期回调
    解决: 监视$route的变化(A => A, $router是重新产生), 根据query&params更新options, 再请求
        监视路由参数变化: 监视$route就可以