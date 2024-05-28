<nav class="__nav_d _n">
  <div class="__logo">
    <img src="{$asset}/png/nbLogoWhite.png" alt="nblogo" />
  </div>
  <ul class="__ul _d">
    {foreach from=$header_products key=product_name item=product_link} {if
    $product_name == 'Sport' || $product_name == 'Cazino'}
    <li>
      <a href="{$product_link}">{$product_name}</a>
    </li>
    {/if} {/foreach}

    <li>
      <a href="{$login_link}">LOGHEAZĂ-TE</a>
    </li>
  </ul>
  <div class="___ham">
    <div class="__ham" id="__ham">
      <span class="_ln"></span>
      <span class="_ln"></span>
      <span class="_ln"></span>
    </div>
  </div>
</nav>
<nav class="__nav_m _n">
  <ul>
    {foreach from=$header_products key=product_name item=product_link} {if
    $product_name == 'Sport' || $product_name == 'Cazino'}
    <li>
      <a href="{$product_link}">{$product_name}</a>
    </li>
    {/if} {/foreach}

    <li>
      <a href="{$login_link}">LOGHEAZĂ-TE</a>
    </li>
  </ul>
</nav>

<script>
  $(".__nav_m").hide();
  $(".___ham").click(function () {
    $(".__ham").toggleClass("is-active");
    $(".__nav_m").toggleClass("is-active");
    $(".__nav_m").slideToggle();
  });
</script>
