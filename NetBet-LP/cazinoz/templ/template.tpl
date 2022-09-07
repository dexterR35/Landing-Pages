{include file="{resource_path()}/views/pages/landing/shared/general/variables.tpl"}




{$register_text = "Înregistrează-te"}
{$version = "A"}
{$background_desktop = "{$asset}/bg.jpg"}
{$background_mobile = "{$asset}/bg-mobile.jpg"}
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
 "INTRODU CODUL CAZINOZ <br> LA ÎNREGISTRARE",
  "VALIDEAZĂ CONTUL <br> CU BULETINUL",
  "BUCURĂ-TE DE <br> BONUSURILE NETBET"
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
 
  

{/literal}
{/block}


