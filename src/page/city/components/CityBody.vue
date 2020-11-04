<template>
  <div ref="wrapper" class="list-city">
    <div>
      <div class="eare">
        <div class="title">当前城市</div>
        <div class="city-list">
          <div class="city-item" @click="currentCity(city)">
            <div class="item">
              {{city}}
            </div>
          </div>
        </div>
      </div>
      <div class="eare">
        <div class="title">热门城市</div>
        <div class="city-list">
          <div class="city-item" v-for="item in hotCities" :key="item.id">
            <div class="item" @click="hontCity(item.name)">
              {{item.name}}
            </div>

          </div>
        </div>
      </div>
      <div class="eare" v-for="(item,key) in cities">
        <div class="title" :ref="key">{{key}}</div>
        <ul class="list">
          <li class="item" v-for="itemInfo in item"
              @click="cityItem(itemInfo.name)">
            {{itemInfo.name}}
          </li>
        </ul>
      </div>

    </div>
  </div>


</template>

<script>

  import Bscroll from 'better-scroll'

  export default {
    name: "CityBody",
    props: {
      cities: Object,
      city: String,
      hotCities: Array,
      letter: String
    },
    mounted() {
      //console.log(this.cities)
      this. bs = new Bscroll(this.$refs.wrapper, {
        click: true
      });
      //console.log(bs)
    },
    methods: {
      hontCity(name) {
        console.log('点击了热门城市' + name)
        this.$store.commit('increment', name)
        this.$router.push('/')
      },
      currentCity(city) {
        console.log(city);
        //修改数据
        this.$store.commit('increment', city)
        this.$router.push('/')
      },
      cityItem(city) {
        this.$store.commit('increment', city)
        this.$router.push('/')
      }
    },
    watch:{
      letter(){
        console.log(this.$refs[this.letter])
        this.bs.scrollToElement(this.$refs[this.letter][0])
      }
    }


  }
</script>

<style scoped>

  .list-city {
    position: absolute;
    left: 0;
    right: 0;
    top: 1.96rem;
    bottom: 0;
    overflow: hidden;
  }

  .eare .title {
    height: .6rem;
    line-height: .6rem;
    background: #eee;
    padding-left: .3rem;
  }

  .eare .city-list {
    display: flex;
    padding: .2rem .2rem 0 .2rem;
    flex-wrap: wrap;
  }

  .eare .city-list .city-item {
    width: 32%;
    margin-bottom: .2rem;
  }

  .eare .city-list .city-item .item {
    margin-right: .3rem;
    padding: .14rem 0;
    border: .01rem solid #ccc;
    text-align: center;
  }

  .eare .list .item {
    height: .68rem;
    line-height: .68rem;
    padding-left: .3rem;
    font-size: .36rem;
    border: .001rem solid #eee;
  }

</style>
