<style>
  .main-section a.offer {
    font-size: 0.85em;

    display: flex;
    flex-direction: column;
    align-items: center;

    font-weight: bold;
    text-decoration: none;
  }

  @media (orientation: landscape) {
    .main-section a.offer {
      margin-right: -2em;
    }
  }

  @media (orientation: landscape) and (min-width: 1700px) {
    .main-section a.offer {
      margin-right: -10em;
    }
  }

  @media (orientation: portrait) {
    .main-section a.offer {
      align-items: center;
    }
  }

  @media (max-width: 400px) {
    .main-section a.offer {
      font-size: 0.8em;
    }
  }

  .line-1,
  .line-2,
  .line-3 {
    color: #ffc107;
  }

  .line-1 {
    font-size: 2.8em;
    margin-top: -0.15em;
    margin-bottom: -0.1em;
  }

  .line-2 {
    font-size: 4.32em;
    margin-top: -0.2em;
    margin-bottom: -0.14em;
  }

  .line-3 {
    font-size: 1.39em;
    font-weight: normal;
  }

  .line-4 {
    font-size: 1.7em;
    font-weight: normal;
  }


  .main-section .right-side .cta-button {
    font-weight: normal;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1.5em;
    margin: 1.4em auto 0.3em auto;
    font-size: 1em;
    height: 2.2em;
    border-radius: 1.1em;
    color: #fff;
    background: linear-gradient(135deg, #ff5d3c, #ff8929);
  }

  .main-section .right-side .cta-button:hover {
    cursor: pointer;
    background: linear-gradient(135deg, #ff8929, #ff5d3c);
  }
</style>