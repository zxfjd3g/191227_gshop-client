## 今日任务
    1). 利用mock的接口实现动态的ListContainer与Floor组件
    2). 实现Search组件

## mock接口的vuex编码
    home.js: mutation / action
    App.vue: dipatch()

## 使用swiper实现静态页面轮播
    下载swiper: npm install -S swiper
    引入swiper: js/css
    创建并配置swiper对象: 必须在列表显示显示之后创建 ===> 在mounted()中创建

## 解决多个swiper效果冲突的问题
    问题: 针对某个swiper界面创建一个swiper对象, 它会影响了其它界面的swiper界面
    原因: new Swiper ('.swiper-container'), 类名选择器匹配了页面中所有的swiper界面, 都产生了效果
    解决: 使用ref技术: 通过ref标识swiper的根div, new Swiper (this.$refs.swiper)

## 解决swiper动态页面轮播的bug
    问题: 异步动态获取数据 + 直接在mounted中创建Swiper对象  ===> 没有轮播效果
    原因: swiper对象创建得太早
    解决: 使swiper对象在列表数据显示之后创建
        办法1: 使用延迟定时器延迟一定的时间才创建  ==> 不合适, 因为请求获取的时间是不定的


## 定义可复用的轮播组件
## 解决Floor组件中轮播有问题的bug