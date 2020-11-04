<template>
    <div class="alph"
         ref="alph"
         @touchstart="touchHandlerStart"
         @touchmove="touchHandlerMove"
         @touchend="touchHandlerEnd"
    >
      <ul class="list">
        <li class="item" v-for="item in citylist"
            :ref="item"
            @click="itemHandleClick(item)"
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
            startY : 0,
            startMove: false,
            moveY: 0,
            targetY:0
          }
      },
      mounted() {
        this.$refs.alph.addEventListener('scroll',this.scrollDs)
      },
      updated(){
        this.startY = this.$refs['A'][0].offsetTop;
        console.log(this.$refs['A'])
      },
      methods:{
          //滚动的监听
        touchHandlerStart(e){
          console.log(e,'开始')
          this.startMove=true;
        },
        touchHandlerMove(e){

          if (this.startMove){
          this.moveY=  e.touches[0].clientY;
          console.log(this.moveY)
          this.targetY=this.moveY-this.startY;

          }
        },
        touchHandlerEnd(e){
          this.startMove=false;
        },
        itemHandleClick(item){
          console.log(item)
          this.$emit('change',item)

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
