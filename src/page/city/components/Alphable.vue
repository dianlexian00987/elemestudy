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
            targetY:0,
            currentY:0
          }
      },
      updated(){
        this.startY = this.$refs['A'][0].offsetTop;
        console.log(this.startY)
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
          //移动的距离
          this.currentY=  this.moveY-this.startY;
          const index= Math.floor(this.currentY/25);
          if (index>=0 && index<=this.citylist.length){
            this.$emit('change',this.citylist[index])
          }

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
   top: 0;
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
