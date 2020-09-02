<template>
<div id="dle-content">	<div class="statall">
		<h1><span class="masha_index masha_index1" rel="1"></span>Сувениры</h1>
		<router-link :to="'/bytilnici'"><a  class="tabstr"><span class="masha_index masha_index2" rel="2"></span>Бутыльницы</a></router-link>
    <router-link :to="'/podcvechniki'"> <a class="tabstr"><span class="masha_index masha_index3" rel="3"></span>Подсвечники</a></router-link>
    <router-link :to="'/klychnici'"><a class="tabstr"><span class="masha_index masha_index4" rel="4"></span>Ключницы</a></router-link>
		<br clear="all">
		<div class="storenumber"></div>
	</div>
<router-link :to="'/'"><div class="jallback"> <a><span class="masha_index masha_index9" rel="9"></span>Вернуться назад</a></div></router-link>
</div>

</template>

<script>

export default {
  name: 'cyveniry',               
  components: {},
data () {
    return {}
    }
}



</script>


<style scoped>

 

</style>