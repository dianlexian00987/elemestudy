<template>
    <div class="recomment">
        <div class="title">热门推销</div>
        <div class="recomment-body">
          <div class="hot-left">
            <img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt="" class="img">
          </div>
          <div class="hot-right">
            <p class="name">故宫</p>
            <p class="desc">东方宫殿建筑代表，世界宫殿建筑典范</p>
            <button class="button">查看详情</button>
          </div>
        </div>

      <div class="recomment-body">
        <div class="hot-left">
          <img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt="" class="img">
        </div>
        <div class="hot-right">
          <p class="name">故宫</p>
          <p class="desc">东方宫殿建筑代表，世界宫殿建筑典范</p>
          <button class="button">查看详情</button>
        </div>
      </div>

      <div class="recomment-body">
        <div class="hot-left">
          <img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt="" class="img">
        </div>
        <div class="hot-right">
          <p class="name">故宫</p>
          <p class="desc">东方宫殿建筑代表，世界宫殿建筑典范</p>
          <button class="button">查看详情</button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "HomeRecomment"
    }
</script>

<style scoped>
  .title{
    height: .46rem;
    line-height: .46rem;
    padding-left: .1rem;
    background: #eee;

  }
  .recomment-body{
    display: flex;
    padding: .15rem;
  }
  .recomment-body .img{
    width: 1.7rem;
    height: 1.7rem;
  }
  .recomment-body .hot-right{
    flex: 1;
    padding-left: .1rem;
    margin-top: .1rem;
  }
  .recomment-body .hot-right .name,
  .recomment-body .hot-right .desc
  {
    height: .5rem;
    line-height: .5rem;
    font-size: .3rem;
    margin-left: .2rem;
  }

  .recomment-body .hot-right .button{
    line-height: 0.44rem;
    margin-top: 0.16rem;
    margin-left: .2rem;
    background: #ff9300;
    padding: 0 0.2rem;
    border-radius: 0.06rem;
    color: #fff;
  }

</style>
