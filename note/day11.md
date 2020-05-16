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
