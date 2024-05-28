{block name="add_char"}

<div class="elemAssets">
  <div class="div _seven">
    <img src="{$asset}/png/elements/seven.webp" alt="seven" />
  </div>
  <div class="div _crown">
    <img src="{$asset}/png/elements/crown.webp" alt="crown" />
  </div>
  <div class="div">
    <img src="{$asset}/png/elements/star-cherries.webp" alt="cherries" />
  </div>
  <div class="div _dollar">
    <img src="{$asset}/png/elements/dollar.webp" alt="dollar" />
  </div>
</div>
<div class="hero">
  <header id="headerId">
    {include file="{$smarty.current_dir}/header.tpl"}
  </header>
  <div class="wrapp-all">
    <div class="appendDivs" id="appendDivs">
      <div class="wrapperBox _hR">
        <div class="cave">
          <img src="{$asset}/png/elements/arch2.webp" alt="" class="caveImg" />
        </div>
        <div class="mainbox" id="mainbox">
          <div class="borderCave">
            <div class="borderFrame"></div>
          </div>
          <div class="_boxContainer" id="__box">
            <div class="_box1">
              <span class="clipPath span1"></span>
            </div>
            <div class="_box2">
              <span class="clipPath span2"></span>
            </div>
            <div class="_box3">
              <span class="clipPath span3"></span>
            </div>
            <div class="_box4">
              <span class="clipPath span4"></span>
            </div>
            <div class="_box5">
              <span class="clipPath span5"></span>
            </div>
            <div class="_box6">
              <span class="clipPath span6"></span>
            </div>
            <div class="_box7">
              <span class="clipPath span7"></span>
            </div>
            <div class="_box8">
              <span class="clipPath span8"></span>
            </div>
            <div class="_box9">
              <span class="clipPath span9"></span>
            </div>
            <div class="_box10">
              <span class="clipPath span10"></span>
            </div>
          </div>
          <div class="_shadow_wheel">
            <img src="{$asset}/png/wheel/shadow.webp" alt="shadow" />
          </div>
          <button class="spin" onclick="spin()"></button>
          <div class="_pin">
            <img src="{$asset}/png/wheel/pin.webp" alt="ping" class="pinImg" />
          </div>
        </div>
      </div>
      <div class="_front_text _hH">
        <div class="_tText"></div>
        <div class="_tText_s"></div>
      </div>
    </div>
  </div>
  <div class="container_terms">
    <button id="_open" class="_btn btnNew btnTerms">termeni și condiții</button>
    {include file="{$smarty.current_dir}/terms.tpl"}
  </div>
</div>

<div class="audio">
  <audio
    controls="controls"
    id="wheel"
    src="{$asset}/audio/wheel.mp3"
    type="audio/mp3"
  ></audio>
  <audio
    controls="controls"
    id="positivePopUp"
    src="{$asset}/audio/positivePopUp.mp3"
    type="audio/mp3"
  ></audio>

  <audio
    controls="controls"
    id="winningLarge"
    src="{$asset}/audio/winningLarge.mp3"
    type="audio/mp3"
  ></audio>

  <audio
    controls="controls"
    id="you_win"
    src="{$asset}/audio/you_win.mp3"
    type="audio/mp3"
  ></audio>

  <audio
    controls="controls"
    id="bonusWin"
    src="{$asset}/audio/bonusWin.mp3"
    type="audio/mp3"
  ></audio>
  <audio
    controls="controls"
    id="cardsShow"
    src="{$asset}/audio/cardsShow.mp3"
    type="audio/mp3"
  ></audio>
  <audio
    controls="controls"
    id="jackpotWin"
    src="{$asset}/audio/jackpotWin.mp3"
    type="audio/mp3"
  ></audio>
</div>

{/block} {block name="offer_css"} {include file="{$smarty.current_dir}/css.tpl"}
{/block} {block append name=js} {include
file="{$smarty.current_dir}/script.tpl"} {include
file="{$smarty.current_dir}/scratch.tpl"} {include
file="{$smarty.current_dir}/confetti.tpl"} {/block}
