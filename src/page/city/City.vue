<template>
  <div>
    <CityHeard></CityHeard>
    <CityInput></CityInput>
    <CityBody
      :city="city"
      :cities="cities"
      :hotCities="hotCities"
      :letter="letter"
      ></CityBody>
    <CityAlphable :citylist="citylist"

    @change="handleLetterChange"
    ></CityAlphable>
  </div>
</template>

<script>
  import CityHeard from './components/CityHeard'
  import CityInput from './components/CityInput'
  import CityBody from './components/CityBody'
  import CityAlphable from './components/Alphable'

  export default {
    name: "City",
    components: {
      CityHeard,
      CityInput,
      CityBody,
      CityAlphable
    },
    data(){
      return{
        cities:{},
        city:'',
        hotCities:[],
        citylist:[],
        letter : ''
      }
    },
    mounted() {
      this.getCityInfo();
    },
    methods : {
      getCityInfo(){
        this.axios.get('/api/city.json')
          .then(this.handleGetCityInfoSucc)
      },
      handleGetCityInfoSucc(res){
        //console.log(res);
        res=res.data.data;
        this.city=res.city;
        this.cities=res.cities;
        this.hotCities=res.hotCities;



        for (let item in this.cities) {
          this.citylist.push(item)

        }
      },
      handleLetterChange(letter){
          this.letter=letter;
      }
    }
  }
</script>

<style scoped>

</style>
