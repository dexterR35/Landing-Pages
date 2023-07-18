{include file="{resource_path()}/views/pages/landing/shared/general/variables.tpl"}


{$link = $cta[$product]}
{$link_login = $cta[$product]|replace:'t=register':'t=login&custom=login&enhancedpromo=login'}

{if $smarty.server.QUERY_STRING eq ''}
{$url_postfix = ''}
{$url_alt_postfix = ''}
{else}
{$url_postfix = '?'|cat: $smarty.server.QUERY_STRING}
{$url_alt_postfix = '&'|cat: $smarty.server.QUERY_STRING}
{/if}



{$register_text = "Înregistrează-te"}
{$version = "A"}
{$subVersion = "MontyHall"}
{$background_desktop = "{$asset}/bg-desktop.jpg"}
{$background_mobile = "{$asset}/bg-mobileM.png"}
{$promo_text = "<span> CEL MAI MARE CAZINO ONLINE</span><br> DIN ROMÂNIA"}
{$banner = 'ShiningCrown_main'}
{$section_title = 'CELE MAI POPULARE JOCURI DE CAZINO online'}
{$banner_text = 'Joacă acum<br>SHINING CROWN'}



{$payment_methods_texts = [
  'ro' => 'METODE DE PLATĂ'
]}



{$steps = [
 "DESCHIDE UȘA<br>VEZI CADOUL",
  "INTRĂ ÎN<br> UNIVERSUL NETBET",
  "BUCURĂ-TE DE<br>RUNDELE GRATUITE"
]}


{include file="{$smarty.current_dir}/offer.tpl"}



{capture assign="terms"}
  {include file="{$smarty.current_dir}/terms.tpl"}
{/capture}

{extends file="{$path_to_shared.templates.brand}/template-2022v2/template.tpl"}



