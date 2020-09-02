<template>
 <!-- <div> -->
   <div id="dle-content"><form method="post" id="sendmail" name="sendmail" action="">
        <h1>Оставить заявку</h1>
        <div class="baseform">
          <table class="tableform">
          
            <tbody><tr>
              <td class="label">
                Телефон для связи:<span class="impot">*</span>
              </td>
              <td><input type="text" maxlength="35" name="name" class="f_input"></td>
            </tr>
            <tr>
              <td class="label">
                Ваш E-Mail:<span class="impot">*</span>
              </td>
              <td><input type="text" maxlength="35" name="email" class="f_input"></td>
            </tr>
          
            <!-- <tr>
              <td class="label">
                Кому:<span class="impot">*</span>
              </td>
              <td><select name="recip"><option selected="selected" value="1">Tsermer (Администраторы)</option>
        <option value="5">Aser (Администраторы)</option>
        </select></td>
            </tr> -->
            <tr>
              <td class="label">
                Тема:<span class="impot">*</span>
              </td>
              <td><input type="text" maxlength="45" name="subject" class="f_input"></td>
            </tr>
            <tr>
              <td class="label" valign="top">
                Сообщение:
              </td>
              <td><textarea name="message" style="width: 380px; height: 160px" class="f_textarea"></textarea></td>
            </tr>
            <tr>
              <td class="label">
                Введите код:<span class="impot">*</span>
              </td>
              <td>
                <div><a href="#" title="Кликните на изображение чтобы обновить код, если он неразборчив"><span id="dle-captcha"><img src="/img/antibot.jpg" alt="Кликните на изображение чтобы обновить код, если он неразборчив" width="160" height="80"></span></a></div>
                <div><br><br><input type="text" maxlength="45" name="sec_code" style="width:154px" class="f_input"></div>
              </td>
            </tr>
            
              
          </tbody></table>
          <div class="fieldsubmit">
            <button name="send_btn" class="fbutton" type="submit"><span>Отправить</span></button>
          </div>
        </div>
        <input name="send" type="hidden" value="send">
        </form>
       
        </div>
    <!-- </div> -->




</template>

<script>
  



export default {
  name: 'readme',               
  components: {              
                   
  },
data () {
    return {}
    }
}



</script>


<style scoped>

 

</style>