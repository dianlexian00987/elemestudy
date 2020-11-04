<template>
    <div class="heard">
      <div class="heard-left">
        <span class="iconfont">&#xe669;</span>
      </div>
      <div class="heard-body">
        <div class="input">
        <span class="iconfont">&#xe602;</span>
        <span class="input-search">输入城市/景点</span>
        </div>
      </div>
      <div class="heard-right">
        <router-link to="/city" class="heard-right-city">
          <span class="address">{{cityName}}</span>
          <span class="iconfont">&#xe62a;</span>

        </router-link>


      </div>
    </div>
</template>

<script>
    export default {
        name: "HomeHeard",
      data(){
          return{
            city : ''
          }
      },
      mounted() {


      },
      watch :{
          cityName:function () {
            this.city=   this.$store.state.city
            console.log(this.cityName)
          }
      }
    }
</script>

<style scoped>
  .heard{
    background: #00bcd4;
    height: .86rem;
    display: flex;
    line-height: .86rem;
    padding: 0 .2rem;
  }
  .heard .heard-left{
    float: left;
  }
  .heard .heard-body{
    flex: 1;
  }
  .heard .heard-right{
    float: left;
  }
  .heard-body .input{
    border-radius: .1rem;
    box-sizing: border-box;
    margin-top: .1rem;
    height: .66rem;
    background: #fff;
    line-height: .66rem;
    padding-left: .2rem;
  }
  .heard-right-city{
    color: #fff;
  }

</style>
