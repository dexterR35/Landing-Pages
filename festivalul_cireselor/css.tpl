<style>
  a {
    display: block;
    color: inherit;
  }

  .main-section {
    padding: 1em 0;
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    font-size: 2em;
    background: url("{$asset}/bg-1.jpg");
    background-size: cover;
    background-position-y: top;
    background-position-x: right;
    background-repeat: no-repeat;
  }

  .steps-section{
    background-color: #2a2e38;
  }

  .main-section a {
    display: block;
    text-decoration: none;
  }

  .main-section .right-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .right-side-content {
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
    color: #fff;
  }

  @media (orientation: landscape) {
    .main-section {
      min-height: 95vh;
      background-position-y: top;
    }
  }

  @media (orientation: portrait) {
    .main-section {
      position: relative;
      padding: 0;
      min-height: 95vh;
      grid-template-columns: 1fr;

      background-image: url("{$asset}/bg-mobile-1.jpg");
      background-color: #000319;
      background-position-y: top;
      background-position-x: center;
      background-size: 107%;
    }

    .left-side {
      display: none;
    }

    .right-side-content {
      font-size: 0.65em;
      margin-top: 12vw;
    }

    header .login-button{
      display:none;
    }

    .line-5 .top{
      font-size: 2vw!important;
      margin-bottom: -0.8vw!important;
    }
  }

  @media (orientation: portrait) and (min-width: 600px) {
    .main-section {
      background-image: url("{$asset}/bg-ipad-1.jpg");
    }
  }

  @media (orientation: portrait) and (max-aspect-ratio: 380 / 635) {
    .main-section {
      background-size: 130%;
    }

    .main-section .right-side-content {
      font-size: 0.8em;
      margin-top: 15vw;
    }
  }

  @media (orientation: portrait) and (min-aspect-ratio: 500 / 736) and (min-width: 500px) {
    .main-section {
      background-size: 100%;
    }

    .main-section .right-side-content {
      margin-top: 40vw;
      font-size: 3.5vw;
    }
  }

  @media (orientation: portrait) and (min-aspect-ratio: 834 / 1087) {
    .main-section .right-side-content {
      margin-top: 47vw;
    }
  }

  @media (orientation: portrait) and (max-width: 350px) {
    .right-side-content {
      font-size: 0.5em;
      margin-top: 3vw;
    }
  }

  .steps-section .steps-wrapper .step .step-circle .icon-1 {
    background-size: 100%;
  }

  .steps-section .steps-wrapper .step .step-circle .icon-2 {
    background-size: 57%;
  }

  .steps-section .steps-wrapper .step .step-circle .icon-3 {
    background-size: 52%;
  }
  .steps-section .steps-wrapper .step .step-heading{
    color: #ffc107!important;
  }
  .steps-section .steps-wrapper{
    text-transform: uppercase;
  }
</style>

{include file="{$smarty.current_dir}/offer/css.tpl"}