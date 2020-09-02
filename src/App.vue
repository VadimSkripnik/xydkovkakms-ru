<template>
  <div id="app">
    <v-main-wrapper />
     <!-- <yandex-map :coords="coords" @click="onClick">
      <ymap-marker 
        marker-id="123" 
        :coords="coords"
        :balloon-template="balloonTemplate"
      ></ymap-marker>
    </yandex-map> -->
  </div>
</template>

<script>
   import vMainWrapper from './components/v-main-wrapper'
  
export default {
  name: 'App',
  // data: () => ({
  //   coords: [54, 39],
  // }),
  components: {
    vMainWrapper
  },
  // computed:{
  //   balloonTemplate() {
  //     return `
  //       <h1 class="red">Hi, everyone!</h1>
  //       <p>I am here: ${this.coords}</p>
  //       <img src="http://via.placeholder.com/350x150">
  //     `
  //   }
  // },
  // methods:{
  //   onClick(e) {
  //     this.coords = e.get('coords');
  //   }
  // },
}
</script>

<style scoped>

/* .ymap-container {
  height: 600px;
}
.red {
  color: red;
} */
</style>
