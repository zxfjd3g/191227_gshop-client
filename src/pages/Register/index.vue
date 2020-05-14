<template>
  <div class="register-container">
    <!-- 注册内容 -->
    <div class="register">
      <h3>注册新用户
        <span class="go">我有账号，去 <router-link to="/login">登陆</router-link>
        </span>
      </h3>
      <div class="content">
        <label>手机号:</label>
        <input type="text" placeholder="请输入你的手机号" v-model="mobile">
        <!-- <span class="error-msg">错误提示信息</span> -->
      </div>
      <div class="content">
        <label>验证码:</label>
        <input type="text" placeholder="请输入验证码" v-model="code">
        <!-- img对应的请求跨域: 没有问题, 普通的HTTP, 而是ajax请求 -->
        <!-- ajax跨域请求才有问题 -->
        <!-- <img ref="code" src="http://182.92.128.115/api/user/passport/code" alt="code"> -->

        <!-- img对应的请求没有跨域 -->
        <!-- 浏览器发出的请求是当前前台应用, 
            当前开发环境包含了一个代理服务器, 对以/api开头的http请求进行请求转发给后台接口处理
        -->
        <img ref="code" src="/api/user/passport/code" alt="code" @click="updateCode">
        <a href="javascrpt:" @click="updateCode">换一个</a>
        <!-- <span class="error-msg">错误提示信息</span> -->
      </div>
      <div class="content">
        <label>登录密码:</label>
        <input type="text" placeholder="请输入你的登录密码" v-model="password">
        <!-- <span class="error-msg">错误提示信息</span> -->
      </div>
      <div class="content">
        <label>确认密码:</label>
        <input type="text" placeholder="请输入确认密码" v-model="password2">
        <!-- <span class="error-msg">错误提示信息</span> -->
      </div>
      <div class="controls">
        <input name="m1" type="checkbox" v-model="isAgree">
        <span>同意协议并注册《尚品汇用户协议》</span>
        <!-- <span class="error-msg">错误提示信息</span> -->
      </div>
      <div class="btn">
        <button @click="register">完成注册</button>
      </div>
    </div>

    <!-- 底部 -->
    <div class="copyright">
      <ul>
        <li>关于我们</li>
        <li>联系我们</li>
        <li>联系客服</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>手机尚品汇</li>
        <li>销售联盟</li>
        <li>尚品汇社区</li>
      </ul>
      <div class="address">地址：北京市昌平区宏福科技园综合楼6层</div>
      <div class="beian">京ICP备19006430号
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Register',

    data () {
      return {
        mobile: '', // 手机号
        code: '', // 一次性图形验证码
        password: '', // 密码
        password2: '', // 确认密码
        isAgree: true, // 是否同意协议
      }
    },

    methods: {
      /* 
      点击更新图形验证码
      */
      updateCode (event) {
        // 重新指定img的src值 ===> 让浏览器自动再发一次请求(并不会导致页面刷新)
        this.$refs.code.src = '/api/user/passport/code'

        // 在移动端必须要值有变化 ==> 携带一个时间戳(当前时间值)的参数
        // this.$refs.code.src = '/api/user/passport/code?time='+ Date.now() 
      },

      /* 
      注册
      */
      async register () {
        // 1. 取出输入数据
        const {mobile, code, password, password2, isAgree} = this
        // 2. 进行前台表单验证, 如果验证不通过, 显示提示
        if (!isAgree) {
          alert('必须同意')
          return
        } else if (password ==='' || password!==password2) {
          alert('2次密码必须相同')
          return
        }
        try {
          // 3. 验证通过, 发注册的请求
          await this.$store.dispatch('register', {mobile, code, password})
          // 4.1. 成功了, 跳转到登陆界面
          this.$router.replace('/login')
        } catch (error) {
          this.updateCode()  // 更新图形验证码
          this.code = '' // 清除输入码验证码

          // 4.2. 失败, 显示相应的提示
          alert(error.message)
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .register-container {
    .register {
      width: 1200px;
      height: 445px;
      border: 1px solid rgb(223, 223, 223);
      margin: 0 auto;

      h3 {
        background: #ececec;
        margin: 0;
        padding: 6px 15px;
        color: #333;
        border-bottom: 1px solid #dfdfdf;
        font-size: 20.04px;
        line-height: 30.06px;

        span {
          font-size: 14px;
          float: right;

          a {
            color: #e1251b;
          }
        }
      }

      div:nth-of-type(1) {
        margin-top: 40px;
      }

      .content {
        padding-left: 390px;
        margin-bottom: 18px;
        position: relative;

        label {
          font-size: 14px;
          width: 96px;
          text-align: right;
          display: inline-block;
        }

        input {
          width: 270px;
          height: 38px;
          padding-left: 8px;
          box-sizing: border-box;
          margin-left: 5px;
          outline: none;
          border: 1px solid #999;
        }

        img {
          vertical-align: sub;
        }

        .error-msg {
          position: absolute;
          top: 100%;
          left: 495px;
          color: red;
        }
      }

      .controls {
        text-align: center;
        position: relative;

        input {
          vertical-align: middle;
        }

        .error-msg {
          position: absolute;
          top: 100%;
          left: 495px;
          color: red;
        }
      }

      .btn {
        text-align: center;
        line-height: 36px;
        margin: 17px 0 0 55px;

        button {
          outline: none;
          width: 270px;
          height: 36px;
          background: #e1251b;
          color: #fff !important;
          display: inline-block;
          font-size: 16px;
        }
      }
    }

    .copyright {
      width: 1200px;
      margin: 0 auto;
      text-align: center;
      line-height: 24px;

      ul {
        li {
          display: inline-block;
          border-right: 1px solid #e4e4e4;
          padding: 0 20px;
          margin: 15px 0;
        }
      }
    }
  }
</style>