## 今日任务
    1). Home组件(静态)
    2). 后台接口与使用postman进行接口测试
    3). ajax进行前后台交互
    4). 使用vuex管理组件状态数据
    5). 分类导航TypeNav组件的交互功能(部分)

## Home组件(静态)
    1).TypeNav: 3级分类导航
    2).ListContainer: 包含轮播列表的容器
    3).TodayRecommend: 今日推荐
    4).Rank: 排行
    5).Like: 猜你喜欢
    6).Floor: 楼层
    7).Brand: 品牌

## 使用postman测试接口
    1). 启动 ===> 选择登陆==> cancel ===> 进入主界面
    2). 输入url/参数进行请求测试
    3). 注意post请求体参数需要指定为json格式
    4). 保存测试接口 ==> 后面可以反复使用

## 前后台交互ajax
    1). 下载axios
    2). 对axios进行二次封装(axios本身就是对原生ajax(xHR)的封装)   面试必说
        1. 配置通用的基础路径和超时
        2. 显示请求进度条
        3. 成功返回的数据不再是response, 而直接是响应体数据response.data
        4. 统一处理请求错误, 具体请求也可以选择处理或不处理