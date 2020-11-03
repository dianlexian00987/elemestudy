<template>
    <div class="city-input">
      <input type="text" class="input" placeholder="输入城市名">
    </div>
</template>

<script>
    export default {
        name: "CityInput"
    }
</script>

<style scoped>
  .city-input{
    height: .86rem;
    line-height: .86rem;
    background: #25a4bb;
    text-align: center;
    padding: .15rem;
  }
  .city-input .input{
    width: 100%;
    height: 100%;
    border-radius: .09rem;
    text-align: center;
  }

</style>
