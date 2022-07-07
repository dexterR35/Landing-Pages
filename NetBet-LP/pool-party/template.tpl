{include file="{resource_path()}/views/pages/landing/shared/general/variables.tpl"}

{$register_text = "Înregistrează-te"}
{$version = "A"}
{$background_desktop = "{$asset}/Apa.png"}
{$background_mobile = "{$asset}/Apa.png"}
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
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.ripples/0.5.3/jquery.ripples.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js"></script>
   <script src="https://unpkg.co/gsap@3/dist/gsap.min.js"></script>
<script>
  $("body").ripples({
  resolution: 120,
  perturbance: 0.04,
  interactive:true,
}); 
</script>
<style>
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


<script>

let tl = new TimelineLite({paused:true});
tl.to(".char_water", 0.9, {x:-10}, 0);
let hoverArea = $('.container-hero-img');
hoverArea.on("mouseenter", function(){
  tl.play();
});
hoverArea.on("mouseleave", function(){
  tl.reverse();
});




</script>
{/literal}
{/block}


