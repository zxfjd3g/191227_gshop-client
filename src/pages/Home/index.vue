<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <TodayRecommend/>
  </div>
</template>

<script>
import ListContainer from './ListContainer/ListContainer'
import TodayRecommend from './TodayRecommend/TodayRecommend'
export default {
  name: 'Home',

  components: {
    ListContainer,
    TodayRecommend
  }
}
</script>

<style lang="less" scoped>

</style>
