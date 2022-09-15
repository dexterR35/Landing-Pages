{include file="{resource_path()}/views/pages/landing/shared/general/variables.tpl"}

{$register_text = "Înregistrează-te"}
{$version = "A"}
{$background_desktop = "{$asset}/bk3.jpg"}
{$background_mobile = "{$asset}/bk3.jpg"}
{$promo_text = "<span> CEL MAI MARE CAZINO ONLINE</span><br> DIN ROMÂNIA"}
{$banner = 'ShiningCrown_main'}
{$section_title = 'CELE MAI POPULARE JOCURI DE CAZINO online'}Predeal, 505300
{$banner_text = 'Joacă acum<br>SHINING CROWN'}




{$payment_methods_texts = [
  'ro' => 'METODE DE PLATĂ'
]}


{$top_games_list = [
  'ro' => [
    'shining-crown', 'sweet-bonanza',
    'Big_Bonanza','100_Hot'
  ]
]}

{$steps = [
 "ÎNSCRIE-TE CU CODUL <br> 500ROTIRI",
  "VALIDEAZĂ CONTUL <br> CU BULETINUL",
  " ÎNVÂRTE ROATA <br> ȘI CÂȘTIGĂ"
]}

{$providers_list = [
  'ro' => [
    'egt', 'pragmatic-play', 'novomatic',
    'play-n-go', 'evolution-gaming', 'relax-gaming',
    'isoftbet', 'microgaming', 'netent'
  ]
]}

{include file="{$smarty.current_dir}/offer.tpl"}


{capture assign="terms"}
  {include file="{$smarty.current_dir}/terms.tpl"}
{/capture}

{extends file="{$path_to_shared.templates.brand}/template-2022v2/template.tpl"}

{block append name=css}


{/block}

{block append name=js}
{literal}
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
  integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
 
  


<script>




$(document).scroll(function () {

    var y = $(this).scrollTop();
    if (y > 1) {
        $('.umbra-roata').fadeOut();
     
    } else {
        $('.umbra-roata').fadeIn();
      
    }
    
 
 
});
 
  

var h = $('.flag-container').width();
for(var i = 0; i < h; i++){
    var flagElement = $("<div class='flag-element'>");
    flagElement.css('background-position', -i + "px 0");
    flagElement.css('-webkit-animation-delay', i * 10 + 'ms');
    flagElement.css('-moz-animation-delay', i * 10 + 'ms');
    flagElement.css('-ms-animation-delay', i * 10 + 'ms');
    flagElement.css('animation-delay', i * 10 + 'ms');
    $('.flag-container').append(flagElement);
}



 
</script>
<style>
/*// Get the headers position from the top of the page, plus its own height
var startY = 30;

$(window).scroll(function(){
    checkY();
});
var h = $('.flag').width();
for(var i = 0; i < h; i++){
    var flagElement = $("<div class='flag-element'>");
    flagElement.css('background-position', -i + "px 0");
    flagElement.css('-webkit-animation-delay', i * 10 + 'ms');
    flagElement.css('-moz-animation-delay', i * 10 + 'ms');
    flagElement.css('-ms-animation-delay', i * 10 + 'ms');
    flagElement.css('animation-delay', i * 10 + 'ms');
    $('.flag').append(flagElement);
}
function checkY(){
    if( $(window).scrollTop() > startY ){
        $('.girl::before').slideUp();
    }else{
        $('.girl::before').slideDown();
    }
}

checkY();

   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js"></script>
   <script src="https://unpkg.co/gsap@3/dist/gsap.min.js"></script>

*/

/* .gdpr-notification {
  display: none !important;
} */
/*
function parallaxed(e) {
      var amountMovedX = (e.clientX * -0.3 / 20);
      var amountMovedY = (e.clientY * -0.3 / 20);
      var x = document.getElementsByClassName("char_water");
      var i;
      for (i = 0; i < x.length; i++) {
        x[i].style.transform ='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
      }
}


*/
</style>


{/literal}
{/block}


