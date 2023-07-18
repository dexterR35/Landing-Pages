{include file="{resource_path()}/views/pages/landing/shared/general/variables.tpl"}

{$register_text = "ÎNVÂRTE ROATA"}
{$background_desktop = "{$asset}/bg1.jpg"}
{$background_mobile = "{$asset}/bg-mobile-new1.jpg"}
{$promo_text = "<span> CEL MAI MARE CAZINO ONLINE</span><br> DIN ROMÂNIA"}

{$banner = 'ShiningCrown_main'}
{$banner_text = 'Joacă acum<br>SHINING CROWN'}

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

{include file="{$smarty.current_dir}/offer.tpl"}

{capture assign="terms"}
  {include file="{$smarty.current_dir}/terms.tpl"}
{/capture}

{extends file="{$path_to_shared.templates.brand}/template-2021/template.tpl"}

{block append name=css}
<style>
/* .gdpr-notification {
  display: none !important;
} */
</style>
{/block}

{block append name=js}
{literal}
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script>
    const dial = document.querySelector('.dial');
    const arrow = document.querySelector('.arrow-light');

    window.onload=function(){
        dial.classList.toggle("spinning");
        setTimeout(function(){
            arrow.classList.toggle("open-light")
        }, 5000);
    }
</script>
{/literal}
{/block}
