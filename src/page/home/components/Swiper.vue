<template>
  <div class="swiper">
    <swiper :options="swiperOptions" class="swiper-list">
      <swiper-slide v-for="item  in images":key="item.id">
        <img :src="item.img" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

  </div>

</template>

<script>
  import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
  import 'swiper/swiper-bundle.css'
  export default {
    name: "HmoeSwiper",
    components: {
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive
    },
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay:true,
          loop:true

        },
       images:[
         {
           id:'001',
           img:'http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg'
         },
         {
           id:'002',
           img:'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg'
         },

         {
           id:'003',
           img:'http://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg'
         },

         {
           id:'004',
           img:'http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg'
         }


       ]
      }
    }
  }
</script>

<style scoped>
  .swiper .swiper-list{
    width: 100%;
    height: 0;
    padding-bottom: 40.3%;

  }

</style>
