<template>
  <div>
    <h2>自定义带Hover提示的按钮</h2>

    <MyComponent xxx="abc" yyy='cba' :zzz="123" @input="test" @aaa="test2"></MyComponent>
  </div>
</template>

<script type="text/ecmascript-6">
  import MyComponent from './MyComponent'
  export default {
    name: 'AttrsListenersTest',

    methods: {
      test () {

      },

      test2 () {

      }
    },

    components: {
      MyComponent
    }
  }
</script>
