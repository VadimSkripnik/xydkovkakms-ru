<template>

 <div class="maps">
   <yandex-map :settings="settings">
    <!-- Markers -->
   </yandex-map>
</div> 
   
</template>

<script>
 



import { yandexMap } from 'vue-yandex-maps'

export default {
  components: { yandexMap,},
  // other options
 
data () {
    return {
  settings:{
  apiKey: '',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
}  
      
    }
}
}




</script>


<style scoped>

/* .maps {
   width: 800px;
   height: 500px;
   background-color: #fff;
} */
</style>