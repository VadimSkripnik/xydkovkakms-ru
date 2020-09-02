<template>
    <div class="v-main-wrapper">




           
            <div class="header">
        <div class="wrapper">
            <div class="header-center">
                
                    <div class="headr_center_top">
                        <a href="">г. Комсомольск-на-Амуре, ул. Северное шоссе 62</a><br>
                        <a href="mailto:tsermer2015@gmail.com">tsermer2015@gmail.com</a><br>
                        <a href="tel:+79638233500">+7 (963) 823-33-35</a><br>
                        <a href="tel:333500">33-35-00</a>
                    </div>
           
                    <div class="headr_center_bottom"></div>
                    <div class="newmenu">
                        <ul>
                       
                             <router-link tag="li" :to="'/'"><a>Главная</a></router-link>
                             <router-link tag="li" :to="'/carts'"><a>Каталог</a></router-link>
                             <router-link tag="li" :to="'/readme'"><a>Написать нам</a></router-link>
                             <router-link tag="li" :to="'/kontakts'"><a>Контакты</a></router-link>
                        </ul>  
                      
                    </div>
                
            </div>
        </div>
       
     </div>
     
     
    
    
    
    
    
    
    
    
    
    
    
    
    <div class="cc">
    
     <div class="cright">
               <keep-alive>
                          <router-view></router-view> 
                      </keep-alive>
           
            
          
               
               </div>
               <footer>
                <div class="wrapper">
                    <div class="footer_1">
                      <div class="footer_1-1">
                      
                        <div class="footer_1-1-1">
                       
                          <div class="footer_1-1-1-1">
                              <div class="footer_1-1-1-1-1">КАТАЛОГ ТОВАРОВ</div>
                              <div class="footer_1-1-1-1-2">О НАС</div>
                              <!-- <div class="footer_1-1-1-1-3">ПОКУПАТЕЛЮ</div> -->
                          </div>
                        
        
        
        
                          <div class="footer_1-1-1-2">
        
                              <div class="footer_1-1-1-2-1">
                                     <ul>
                                        <router-link tag="li"  :to="'/vorotaone'"><li><a href=""><img src="../assets/images/menu_li.gif">Ворота и калитки</a></li></router-link>
                                        <router-link tag="li"  :to="'/navesykozyrki'"><li><a href=""><img src="../assets/images/menu_li.gif">Навесы и козырьки</a></li></router-link>
                                        <router-link tag="li"  :to="'/cvetochnicy'"><li><a href=""><img src="../assets/images/menu_li.gif">Цветочницы</a></li></router-link>
                                        <router-link tag="li"  :to="'/kaminienabory'"><li><a href=""><img src="../assets/images/menu_li.gif">Каминные наборы</a></li></router-link>
                                        <router-link tag="li"  :to="'/adressnietablichki'"><li><a href=""><img src="../assets/images/menu_li.gif">Адресные таблички</a></li></router-link>
                                        <router-link tag="li"  :to="'/pergolyvinogradniki'"><li><a href=""><img src="../assets/images/menu_li.gif">Перголы и Виноградники</a></li></router-link>
                                    </ul>
                              </div> 

                      
                              
                              
                              
                              <div class="footer_1-1-1-2-2">
                                <ul>
        
        
                                        <router-link tag="li"  :to="'/ogragdeniyzabori'"><li><a href=""><img src="../assets/images/menu_li.gif">Ограждения заборные</a></li></router-link>
                                        <router-link tag="li"  :to="'/besedkiteplici'"><li><a href=""><img src="../assets/images/menu_li.gif">Беседки</a></li></router-link>
                                        <router-link tag="li"  :to="'/okonierechetki'"><li><a href=""><img src="../assets/images/menu_li.gif">Оконные решетки</a></li></router-link>
                                        <router-link tag="li"  :to="'/kacheli'"><li><a href=""><img src="../assets/images/menu_li.gif">Лавки,урны и качели</a></li></router-link>
                                        <router-link tag="li"  :to="'/kovaniedveri'"><li><a href=""><img src="../assets/images/menu_li.gif">Кованные двери</a></li></router-link>
                                        <router-link tag="li"  :to="'/cyveniry'"><li><a href=""><img src="../assets/images/menu_li.gif">Сувениры</a></li></router-link>
        
        
                                        
                                       
                                    </ul>
                              </div>
                            
                             
                             
                             
                              <div class="footer_1-1-1-2-3">
                                <ul>
                                        <router-link tag="li"  :to="'/lestnicaogragdeniy'"><li><a href=""><img src="../assets/images/menu_li.gif">Лестничные ограждения</a></li></router-link>
                                        <router-link tag="li"  :to="'/voliery'"><li><a href=""><img src="../assets/images/menu_li.gif">Вольеры</a></li></router-link>
                                        <router-link tag="li"  :to="'/mangali'"><li><a href=""><img src="../assets/images/menu_li.gif">Мангалы</a></li></router-link>
                                        <router-link tag="li"  :to="'/rityalnieogragdeniy'"><li><a href=""><img src="../assets/images/menu_li.gif">Ритуальные ограждения</a></li></router-link>
                                        <router-link tag="li"  :to="'/dekorativnaymebel'"><li><a href=""><img src="../assets/images/menu_li.gif">Декоративная мебель</a></li></router-link>
                                        <router-link tag="li"  :to="'/raznoe'"><li><a href=""><img src="../assets/images/menu_li.gif">Разное</a></li></router-link>
                                </ul>
                              </div>


                                      <div class="footer_1-1-1-2-4">
                                        <ul>
                                              <router-link tag="li"  :to="'/'"><li><a href=""><img src="../assets/images/menu_li.gif">Главная</a></li></router-link>
                                              <router-link tag="li"  :to="'/carts'"><li><a href=""><img src="../assets/images/menu_li.gif">Каталог</a></li></router-link>
                                              <router-link tag="li"  :to="'/readme'"><li><a href=""><img src="../assets/images/menu_li.gif">Написать нам</a></li></router-link>
                                              <router-link tag="li"  :to="'/kontakts'"><li><a href=""><img src="../assets/images/menu_li.gif">Контакты</a></li></router-link>
                                      </ul>
                                     </div>
                            </div>
                            
                           
                         
                        </div>
                       
        
        
        
        
        
                        <div class="footer_1-1-2">
                          <div class="footer_1-1-2-1">
                            <img class="footer_1-1-2-1-1" src="../assets/images/fane-futer.png">
                            <img class="footer_1-1-2-1-2" src="../assets/images/mal-futer.png">
                           
                          </div>
                           <div class="footer_1-1-2-2">
                            <a class="footer_1-1-2-2-1" href="tel:+79638233500">Контактные телефоны<br>+7 (4217) 33-35-00<br>8-963-823-35-00</a>
                          <a class="footer_1-1-2-2-2" href="mailto:tsermer2015@gmail.com">Написать письмо</a>
                          <a class="footer_1-1-2-2-3" href="mailto:tsermer2015@gmail.com">tsermer2015@gmail.ru</a>
                          <p class="footer_1-1-2-2-4">Наш адрес<br>г. Комсомольск-на-Амуре<br>ул. Северное шоссе, д. 62<br>(база "УМ-4")</p>
                          </div>
                       </div>

                      
                      
                      
                       </div>
                    </div>
        
        
        
        
        
        
        
                    <div class="ends">
                      <div class="ends1">
                        <p>© ООО "Кузнец" 2006-2020 Ковка, Художественная ковка, Кованые изделия, Кованые элементы.</p>
                      </div>
                      <div class="ends2">
                        <a href=""><img src="../assets/images/mail.gif"></a>
                      .
                        <a href=""><img src="../assets/images/yadro.gif"></a>
                      </div>
                    </div>






                   
        
                </div>
            </footer>
            </div> 
           
    </div>
    
</template>

<script>

export default {
name: "v-main-wrapper",
 components:{},
props: {},
data() {
    return {
     
    }
   },
     computed:{
  },
   methods: {},
}
</script>

<style scoped>

</style>