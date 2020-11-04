<template>
    <div class="alph" ref="alph">
      <ul class="list">
        <li class="item" v-for="item in citylist"
            :ref="item"
        >
          {{item}}
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "CityAlphable",
      props:{
        citylist:Array
      },
      data(){
          return{
            startY : 0
          }
      },
      mounted() {
        this.$refs.alph.addEventListener('scroll',this.scrollDs)
      },
      updated(){
        this.startY = this.$refs['A'][0].offsetTop;
        console.log(this.startY)


      },
      methods:{
          //滚动的监听
        scrollDs: function (e) {
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          console.log(scrollTop)
        }
      }

    }
</script>

<style scoped>
 .alph{
   display: flex;
   position: fixed;
   right: 0;
   top: 2.58rem;
   width: .5rem;
   text-align: center;
   bottom: 0;
   justify-content: center;
   flex-direction: column;
   font-size: .42rem;
 }
 .alph .list .item{
    color: #25a4bb;
   line-height: .5rem;
 }

</style>
