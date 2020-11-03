<template>
   <div class="heard">
     <span class="iconfont" @click="back">&#xe669;</span>

       <span class="text">城市选择</span>


   </div>
</template>

<script>
    export default {
        name: "CityHeard",
      methods:{
          back(){
            this.$router.push('./')
          }
      }

    }

</script>

<style scoped>
  .heard{
    height: .84rem;
    background: #25a4bb;
    line-height: .84rem;
    padding-left: .3rem;
    box-sizing: border-box;
    text-align: center;

  }
  .heard .iconfont{
    position: absolute;
    top: 0;
    left: .3rem;
  }


</style>
