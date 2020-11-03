<template>
  <div>
    <HomeHeard></HomeHeard>
    <HomeSwiper></HomeSwiper>
    <HomeIcoms></HomeIcoms>
    <HomeRecomment></HomeRecomment>
  </div>

</template>

<script>
  import HomeHeard from './components/HomeHeard'
  import HomeSwiper from './components/Swiper'
  import HomeIcoms from './components/Icoms'
  import HomeRecomment from './components/Recomment'

  export default {
    name: "home",
    components: {
      HomeHeard,
      HomeSwiper,
      HomeIcoms,
      HomeRecomment
    }
  }
</script>

<style scoped>

</style>
