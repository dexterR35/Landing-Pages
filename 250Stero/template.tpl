{include file="{resource_path()}/views/pages/landing/shared/general/variables.tpl"}
{$register_text = "Înregistrează-te"}
{$version = "A"}
{$version_grid = "grid_system"}
{$version_link = "link_system"}
{$background_desktop = "{$asset}/bg-desk-new.jpg"}
{$background_mobile = "{$asset}/bg-stero-mobile.jpg"}
{$promo_text = "<span>CEL MAI MARE CAZINO ONLINE </span>DIN ROMÂNIA"}
{$banner = 'ShiningCrown_main2'}
{$section_title = 'CELE MAI POPULARE JOCURI DE CAZINO online'}
{$banner_text = 'Joacă acum<br>SHINING CROWN'}
{$section_pay = "metode de plată"}


<!-- {$payment_methods_texts = [
  'ro' => 'METODE DE PLATĂ'
]} -->


{$top_games_list = [
  'ro' => [
    'shining-crown', 'sweet-bonanza',
    'Big_Bonanza','100_Hot'
  ]
]}

{$steps = [
 "INTRĂ ÎN <br> UNIVERSUL NETBET",
  "VALIDEAZĂ <br> CONTUL",
  "BUCURĂ-TE DE <br> BONUS"
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





