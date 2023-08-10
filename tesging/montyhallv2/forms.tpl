

<form id="inputForm" method="post">
  <div class="BonusCodeText">
    <h2 class="h1-input">Felicitari</h2>
    <h3 class="h2-input">ÎNREGISTREAZĂ-TE ȘI REVENDICĂ PREMIUL</h3>
    <h4 id="emailError" style="display: none; color: red">
      Format incorect, introdu o adresă de email validă.
    </h4>
  </div>
  <div class="input-box box_n0">
    <label class="input-label">email</label>
    <input
      value=""
      type="email"
      class="input-input input_n0"
      id="email"
      name="email"
      oninvalid="this.setCustomValidity('Introdu adresa de email')"
      title="Introdu adresa de email"
      oninput="this.setCustomValidity('')"
    />
    <div class="errorDiv errorDiv_n0"></div>
  </div>
  <div class="input-box box_n1">
    <label class="input-label">nume</label>
    <input
      value=""
      type="text"
      class="input-input input_n1"
      id="fname"
      name="fname"
      oninvalid="this.setCustomValidity('Introdu Numele')"
      title="Introdu Numele"
      oninput="this.setCustomValidity('')"
    />
    <div class="errorDiv errorDiv_n1"></div>
  </div>
  <div class="input-box box_n2">
    <label class="input-label">prenume</label>
    <input
      value=""
      type="text"
      class="input-input input_n2"
      id="lname"
      name="lname"
      oninvalid="this.setCustomValidity('Introdu Prenumele')"
      title="Introdu Prenumele"
      oninput="this.setCustomValidity('')"
    />
    <div class="errorDiv errorDiv_n2"></div>
  </div>
  <div class="input-box box_n3">
    <label class="input-label" style="padding: 0 23px">telefon</label>
    <div class="number-container i-focus">
      <input
        value=""
        type="number"
        class="input-input input_n3"
        name="phone"
        id="phone"
        oninvalid="this.setCustomValidity('Introdu Numarul de Telefon')"
        title="Introdu Numarul de Telefon"
        oninput="this.setCustomValidity('')"
      />
      <div class="phone-group">
        <div class="phone-prefix">
          <div class="flag">
            <div class="blue"></div>
            <div class="yellow"></div>
            <div class="red"></div>
          </div>
          <div class="phone-prefix-content">+40</div>
        </div>
      </div>
    </div>
    <div class="errorDiv errorDiv_n3"></div>
  </div>
  <div class="input-box box_n4 error">
    <div class="errorDiv errorDiv_n4"></div>
  </div>
  <div class="privOne">
    <input
      type="checkbox"
      id="privacy-check"
      name="privacy-check"
      class="input_check inp_privacy"
    />
    <label for="privacy-check" class="privacy-text"
      >Am citit și accept Termenii și Condițiile și Politica de
      Confidențialitate.</label
    >
  </div>
  <div class="privTwo">
    <input
      type="checkbox"
      id="marketing-check"
      name="marketing-check"
      class="input_check inp_marketing"
    />
    <label for="marketing-check" class="privacy-text"
      >Sunt de acord să primesc comunicări de marketing din partea ....</label
    >
  </div>
  <button
    type="submit"
    class="btnNew btn-primary btn_send disabled"
    disabled="disabled"
    id="btn-sendData"
  >
    Înregistrează-te
  </button>
  <div class="clear"></div>
</form>
<div id="thank_you" class="thank_you" style="display: none">
  <p>Iti Multumesc!</p>
  <!-- <button type="submit">Close</button> -->

  <button class="close-modal" role="button" style="display: none">X</button>
</div>



