{include file="{resource_path()}/views/pages/landing/shared/general/variables.tpl"}
{include file="{$path_to_shared.templates.brand}/general/variables.tpl"}
{include file="{$smarty.current_dir}/steps-conf.tpl"}

{$header_center_text = ''}

{$terms = "{$smarty.current_dir}/terms.tpl"}

{$link = $cta[$product]}
{$header_register_text = 'Înregistrează-te'}
{$register_text = 'Înregistrează-te'}

<!DOCTYPE html>
<html lang="{$lang}">
<head>
	<meta name="robots" content="noindex,follow" />
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" href="{$path_to_shared.assets.brand}/favicon.ico">
  <meta property="og:image" content="{$asset}/og-image.png" />
  <meta property="title" content="{$title}" />

  <title>{$title}</title>

  {include file="{$path_to_shared.templates.brand}/general/font.tpl"}

  {include file="{$path_to_shared.templates.general}/css.tpl"}
  {include file="{$path_to_shared.templates.brand}/general/css.tpl"}
  {include file="{$path_to_shared.templates.brand}/header/css.tpl"}
  {include file="{$path_to_shared.templates.brand}/steps/css.tpl"}
  {include file="{$path_to_shared.templates.brand}/footer/css.tpl"}
  {include file="{$path_to_shared.templates.brand}/tc-modal/css.tpl"}
  {include file="{$path_to_shared.templates.brand}/button/css.tpl"}
  {include file="{$path_to_shared.templates.brand}/gdpr-notification/css.tpl"}
  {include file="{$smarty.current_dir}/css.tpl"}

  {include file="{$path_to_shared.templates.general}/gtm/script.tpl"}
</head>
<body>
  {include file="{$path_to_shared.templates.general}/gtm/noscript.tpl"}

  {include file="{$path_to_shared.templates.brand}/header/html.tpl"}
  {include file="{$smarty.current_dir}/main.tpl"}
  {include file="{$path_to_shared.templates.brand}/steps/html.tpl"}
  {include file="{$path_to_shared.templates.brand}/footer/html.tpl"}
  {include file="{$path_to_shared.templates.brand}/gdpr-notification/html.tpl"}
  {include file="{$path_to_shared.templates.brand}/tc-modal/html.tpl"}

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  {include file="{$path_to_shared.templates.brand}/footer/terms/js.tpl"}
  {include file="{$path_to_shared.templates.brand}/gdpr-notification/js.tpl"}
</body>
</html>
