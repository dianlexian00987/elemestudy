<template>
  <div class="icoms">
    <div class="imgs" v-for="item  in imgs":key="item.id">
      <div class="imgs-item">
        <img :src="item.img" alt="" class="img">

      </div>
      <p class="title">{{item.title}} {{getPages}}</p>

    </div>




  </div>

</template>

<script>
    export default {
        name: "HomeIcoms",
        data(){
          return {
            imgs: [
              {
              id : '001',
              img : 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
                title: '景点门票'

            },
              {
                id : '002',
                img : 'http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png',
                title: '景点门票'

              },
              {
                id : '003',
                img : 'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
                title: '景点门票'

              },
              {
                id : '004',
                img : 'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
                title: '景点门票'

              },
              {
                id : '005',
                img : 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
                title: '景点门票'

              },
              {
                id : '006',
                img : 'http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png',
                title: '景点门票'

              },
              {
                id : '007',
                img : 'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
                title: '景点门票'

              },
              {
                id : '008',
                img : 'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
                title: '景点门票'

              },

            ],
            allPages:[]
          }
        },
      computed :{
          getPages : function () {
            this.imgs.forEach((item,index)=>{
              let page=Math.floor(index/8);
              if (!this.allPages[page]){
                this.allPages[page]=[];
              }
              
              this.allPages[page].push(page)


            })

          }
      }
    }
</script>

<style scoped>
  .icoms{
    display: flex;
    flex-wrap:wrap;
  }
  .icoms .imgs{
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    position: relative;
    margin-top: .1rem;
    position: relative;
    overflow: hidden;
  }
  .icoms .imgs .imgs-item{
    position: absolute;
    top: 0;
    bottom: .44rem;
    right: 0;
    left: 0;
    padding: .1rem;


  }
  .icoms .imgs .imgs-item .img{
    display: block;
    height: 100%;
    margin: 0 auto;

  }
  .icoms .imgs .title{
    line-height: .44rem;
    height: .44rem;
    text-align: center;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
  }


</style>
