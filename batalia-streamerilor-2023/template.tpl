{include file="{resource_path()}/views/pages/landing/shared/general/variables.tpl"}


{$register_text = "Înregistrează-te"}
{$version = "A"}
{$stream = "stream_fight"}
{$background_desktop = ""}
{$background_mobile = ""}
{$streamerNamePic = ""}
{$promo_text = "<span>CEL MAI MARE CAZINO ONLINE </span>DIN ROMÂNIA"}
{$banner = 'banner_welcome'}
{*{$section_title = 'CELE MAI POPULARE JOCURI DE CAZINO online'}*}
{$banner_text = 'PROFITĂ ACUM <br>DE OFERTĂ'}
{$section_pay = "metode de plată"}


{$top_games_list = [
  'ro' => [
    'shining-crown', 'sweet-bonanza',
    'Big_Bonanza','100_Hot'
  ]
]}

{$steps = [
 "ÎNREGISTREAZĂ-TE<br> ACUM",
  "ÎNSCRIE-TE <br> LA PROMOȚIE",
  "BUCURĂ-TE <br> DE PREMII"
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

{extends file="{$path_to_shared.templates.brand}/template-new/template.tpl"}


{assign var="query" value=$smarty.server.QUERY_STRING}

{if $query|strstr:"streamer="}
  {assign var="streamerStr" value=$query|regex_replace:"/^.*[?&]streamer=([^&]+).*$/":"$1"}
  {assign var="background_desktop" value="{$asset}/bg/bg_{$streamerStr}.jpg"}
  {assign var="background_mobile" value="{$asset}/bg/bg_{$streamerStr}_mob.jpg"}
  {assign var="streamerNamePic" value="{$asset}/names/t_{$streamerStr}.png"}
{else}
{assign var="background_desktop" value="{$asset}/bg/bg_default.jpg"}
{assign var="background_mobile" value="{$asset}/bg/bg_default.jpg"}
 {* {assign var="streamerNamePic" value="{$asset}/names/t_{$streamerStr}.png"} *}
{/if}