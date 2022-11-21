{include file="{resource_path()}/views/pages/landing/shared/general/variables.tpl"}

{$register_text = "HOHOHO"}
{$version = "A"}
{$subversion = 'AA'}
{$background_desktop = "{$asset}/bg2.jpg"}
{$background_mobile = "{$asset}/bg-mobile.jpg"}
{$promo_text = "<span>SĂRBĂTORILE ÎNCEP MAI DEVREME PE </span>NETBET"}
{$banner = 'ShiningCrown_main'}

{$section_title = 'CELE MAI POPULARE JOCURI DE CAZINO ONLINE'}
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
  "Înregistrează-te & depune pe NetBet",
  "Accesează zilnic promoția de Crăciun",
  "Bucură-te de daruri"
]}




<!-- 
{$providers_list = [
  'ro' => [
    'badminton', 'bandy', 'basketball',
    'boxing', 'cricket', 'cyclism', 'darts',
    'e-sport', 'golf', 'handball', 'hockey',
    'table-tennis', 'tennis', 'volleyball'
  ]
]} -->

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
<style>
/* .gdpr-notification {
  display: none !important;
} */
</style>
{/block}
