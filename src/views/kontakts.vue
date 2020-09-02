<template>
  <div>
    <div class="newkontatct">
                          <h1><span class="masha_index1" rel="1"></span>Контакты</h1>
                          <div><b><span class="masha_index2" rel="2"></span>Телефоны:&nbsp;</b>+7 (963) 823-35-00, 33-35-00</div>
                          <div><b><span class="masha_index3" rel="3"></span>Адрес:</b>&nbsp;г. Комсомольск-на-Амуре, Северное шоссе 62</div>
                          <div>&nbsp;</div>
                          <!-- <h2 class="newzagh"><span class="masha_index masha_index4" rel="4"></span>Наши представительства</h2>
                          <div><span style="text-align: justify;"></span><span class="masha_index masha_index5" rel="5"></span>г. Воронеж, ул.Донбасская 16в.&nbsp;(вход с правого крыла, 2 этаж)</div>
                          <div>
                            <span class="masha_index masha_index6" rel="6"></span>г. Курск, ул.1-я Кожевенная д. 31<span style="text-align: justify;"></span><br>
                           
                          </div> -->
                          <div>&nbsp;</div>
                          <div><b><span class="masha_index7" rel="7"></span>Схема проезда:</b>&nbsp;<span style="letter-spacing: 0px; word-spacing: 0.1em;">&nbsp;</span></div>
                          <div><br>
                          </div>
                          <br clear="all">
                           <div id="app">
                            <!-- <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A14deffc56c21989962b2f76055df04ee4d0233cd3dea5369958e4a06857ae599&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script> -->
                                <yandex-map :coords="coords" @click="onClick">
                                  <ymap-marker 
                                    marker-id="123" 
                                    :coords="coords"
                                    :balloon-template="balloonTemplate"
                                  ></ymap-marker>
                                </yandex-map>
                           </div>
                            
             <div class="storenumber"></div>
          </div>
        <router-link tag="li" :to="'/'"><div class="jallback"><a><span class="masha_index8" rel="8"></span>Вернуться назад</a></div></router-link>
      </div>
             
                 
            


</template>

<script>
 
// import vMaps from '../components/v-maps'
// import Vue from 'vue'
// import ymapPlugin from 'vue-yandex-maps';

// Vue.use(ymapPlugin)

export default {
  name: 'kontakts', 
  data: () => ({
    // coords: [54, 39],
    coords: [50.59799, 136.9769],
  }),              
  components: {              
          // vMaps      
  },
 computed:{
    balloonTemplate() {
      return `
        <h1 class="red">Hi, everyone!</h1>
        <p>I am here: ${this.coords}</p>
        <img src="http://via.placeholder.com/350x150">
      `
    }
  },
  methods:{
    onClick(e) {
      this.coords = e.get('coords');
    }
}
}


</script>


<style scoped>

 .ymap-container {
  height: 600px;
}
.red {
  color: red;
}

</style>