{include file="{resource_path()}/views/pages/landing/shared/general/variables.tpl"}

{$register_text = "VREAU GRATIS"}
{$version = "A"}
{$version_offer = "athena"}
{$version_grid = "grid_system"}
{$background_desktop = ""}
{$background_mobile = ""}
{$promo_text = "<span>CEL MAI MARE CAZINO ONLINE </span>DIN ROMÂNIA"}
{$banner = 'banner_zeus_dark'}
{$section_title = 'CELE MAI POPULARE JOCURI DE CAZINO online'}
{$banner_text = 'Joacă acum<br>GATES OF OLYMPUS'}
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
 "ÎNREGISTREAZĂ-TE ȘI <br> VALIDEAZĂ CONTUL",
  "AI INSTANT 200 RUNDE <br> FĂRĂ DEPUNERE",
  "DEPUNE 50 DE RON <br> ȘI IA SPECIALA!"
]}

{$providers_list = [
  'ro' => [
    'egt', 'pragmatic-play', 'novomatic',
    'play-n-go', 'evolution-gaming', 'relax-gaming',
    'isoftbet', 'microgaming', 'netent'
  ]
]}

{include file="{$smarty.current_dir}/offer.tpl"}




{extends file="{$path_to_shared.templates.brand}/template-noScroll/template.tpl"}





