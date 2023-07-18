{include file="{resource_path()}/views/pages/landing/shared/general/variables.tpl"}

{$register_text = "PARIAZĂ ACUM"}
{$version = "A"}
{$background_desktop = "{$asset}/bg-desktop5.png"}
{$background_mobile = "{$asset}/bg-mobile4.jpg"}
{$promo_text = "<span>CEL MAI APRECIAT SITE DE PARIURI </span> Din romÂnia"}
{$banner = 'NetbetROsport2'}
{$banner_text = 'ProfitĂ de PromoȚii Acum'}
{$section_title = 'PARIAZĂ PE CELE MAI IUBITE SPORTURI DIN ROMÂNIA'}


{$payment_methods_texts = [
  'ro' => 'METODE DE PLATĂ'
]}



{$top_games_list = [
  'ro' => [
    'sportFotbal', 'sportConsole',
    'sportBasket','sportTenis'
  ]
]}



{$steps = [
  "INTRODU 50SPORT <br/> LA ÎNREGISTRARE",
  "VALIDEAZĂ <br/> CONTUL",
  "BUCURĂ-TE <br/> DE FREEBET"
]}



{$providers_list = [
  'ro' => [
    'badminton', 'bandy', 'basketball',
    'boxing', 'cricket', 'cyclism', 'darts',
    'e-sport', 'golf', 'handball', 'hockey',
    'table-tennis', 'tennis', 'volleyball'
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
