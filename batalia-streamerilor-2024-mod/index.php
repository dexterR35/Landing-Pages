<?php
$qsa = '';
$qsa_with_end = '';
if (count($_GET) > 0)
{
	while (list($name, $value) = each($_GET))
		$qsa .= '&'.$name.'='.$value;	
}

if (!empty($qsa))
{
	$qsa_with_end = $qsa;
	$qsa = '?'.substr($qsa, 1);
}
?>
<!DOCTYPE html>
<html lang="ro">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
  integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
  crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <meta name="description" content="Bătălia Streamerilor Sezonul 3 - Cel mai așteptat eveniment al streamerilor din 2024!">
  <meta property="og:title" content="Bătălia Streamerilor Sezonul 3">
  <meta property="og:description" content="Participă la Bătălia Streamerilor 2024 și câștigă o parte din cei 10.000 EURO și 100.000 Runde Gratuite">
  <meta name="keywords" content="streaming, Bătălia Streamerilor, online, streameri români, Bătălia Streamerilor 2024">
  <meta name="keywords" content="Streameri, Casino Streamers, Sezonul 3">
  <meta name="robots" content="index, follow">
  <meta name="language" content="ro-RO" />

  <link rel="stylesheet" href="https://unpkg.com/blaze-slider@latest/dist/blaze.css">
  <link rel="stylesheet" href="./index1.css">
  <link rel="stylesheet" href="./src/css/carousel1.css">
  <link rel="stylesheet" href="./src/css/table1.css">
  <link rel="stylesheet" href="./src/css/tnc1.css">
  <link rel="stylesheet" href="./src/css/modal1.css">
  <script>
    const qsaEnd = "<?php echo $qsa_with_end; ?>";
    const qsa = "<?php echo $qsa; ?>";
  </script>
  <title>Batalia Streamerilor Sezonul 3</title>
</head>

<body>
  <div class="targetShoot" id="target">
    <main class="panelWrap">
      <section class="section s1 _b" id="section1">
        <div class="_page">
          <div class="parent">
            <div class="left-side"></div>
            <div class="right-side">
              <div class="offer">
                <div class="offer-html">
                  <div class="logo">
                    <img src="./assets/stuff/pragmatic.webp" class="pragmatic-logo" alt="pragm">
                  </div>
                  <div class="offer-content">
                    <div class="line-0">50.000 R<span>o</span>N</div>
                    <div class="line-1">p<span>r</span>emii cash</div>
                    <div class="line-2">+ 99.999 runde</div>
                    <div class="line-3">gratuite</div>
                  </div>
                  <div class="container-btn" id="actionButton"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel">
            <div id="image-carousel" class="carousel">
              <div class="blaze-slider">
                <div class="blaze-container">
                  <div class="blaze-track-container">
                    <div class="blaze-track"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section s2 _b" id="section2">
        <div class="_page">
          <div class="parent">
            <h2>BĂTĂLIA STREAMERILOR REVINE CU <br> PREMII FABULOASE!</h2>
            <div class="section_title">
              <p> Joacă pe NetBet și adună puncte </p> 
              <p>în perioada <span>8 octombrie – 22 noiembrie</span> și câștigi garantat unul din premiile puse la bătaie! </p>
             
              <p>Luptă-te pentru top 200 și vei avea parte de extra surprize – premii cash și pachete cadou by Pragmatic
                Play.</p>
             
              <p>Alătură-te streamerilor și joacă sloturile tale preferate, dar nu uita că cele de la <span>Pragmatic
                  Play</span> îți asigură:</p>
              <p>★★★ PUNCTE DUBLE ★★★</p>
            </div>
            <div class="left-side">
              <div class="carousel">
                <div id="games-carousel" class="carousel">
                  <div class="blaze-slider">
                    <div class="blaze-container">
                      <div class="blaze-track-container">
                        <div class="blaze-track blaze-second"></div>
                      </div>
                    </div>
                    <div class="controls">
                      <button class="blaze-prev pointer"></button>
                      <button class="blaze-next pointer"></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container-btn">
              <a href="https://casino.netbet.ro/pragmatic<?php echo $qsa; ?>" target="_blank">
                <button class="btn shape pointer"><span></span>vezi toate jocurile</button>
              </a>
            </div>
            <div class="box-arrow pointer">
              <svg class="arrows">
                <path class="a1" d="M0 0 L30 32 L60 0"></path>
                <path class="a2" d="M0 20 L30 52 L60 20"></path>
                <path class="a3" d="M0 40 L30 72 L60 40"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section class="section s3 _b" id="section3">
        <div class="_page">
          <div class="parent">
            <div class="left-side">
              <div class="container-table">
                <div class="table-responsive _streamers">
                  <div class="blob1"></div>
                  <div class="blob2"></div>
                  <h3 class="t-table"><img src="./assets/stuff/holeblue.webp" alt="">Clasament Streameri</h3>
                  <table id="streamersTable">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Streamer</th>
                        <th>Puncte</th>
                      </tr>
                    </thead>
                    <tbody class="table-body" id="bodyStreamer"></tbody>
                  </table>
                </div>
                <div class="table-responsive _users ">
                  <div class="blob1"></div>
                  <div class="blob2"></div>
                  <h3 class="t-table">Clasament Jucători</h3>
                  <table id="usersTable">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nume</th>
                        <th>Puncte</th>
                      </tr>
                    </thead>
                    <tbody class="table-body" id="bodyUser"></tbody>
                    <tfoot></tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <div class="_page _b">
        <div class="parent">
          <div class="terms-container">
            <div id="termsAndConditionsS" class="hidden tc">
              <h2>TERMENI ȘI CONDIȚII</h2>
              <div class="section_title">
                <p></p>
              </div>
              <p><b>Cine este eligibil?</b></p>
              <ul>
                <li>
                  „Bătălia Streamerilor” este o campanie realizată de NetBet și se adresează exclusiv jucătorilor din România înregistrați pe NetBet Cazino, care pariază cu bani reali la sloturile din platforma de cazino.
                </li>
                <li>
                  Promoția se desfășoară în perioada 07.10.2024, ora 00:00 EEST – 22.11.2024, ora 23:59 EET. Ne rezervăm dreptul de a retrage disponibilitatea ofertei în orice moment.

                </li>
                <li>
                  Oferta este limitată la o singură utilizare per adresă domiciliu/calculator/adresă IP.
                
                </li>
              </ul>
              <p><b>Cum funcționează?</b></p>
              <ul>
                <li>
                  Jucătorii pot participa dacă accesează link-ul campaniei și apasă butonul de înscriere afișat pe ecranul principal al campaniei. 
                </li>
                <li>
                  Campania împarte concurenții în două echipe: streameri și jucători. Jucătorii înscriși trebuie să acumuleze puncte în clasament jucând orice slot din colecția NetBet Cazino, cu excepția: Bugs Party, Vikings Fortune: Hold and Win, Goldfish, Deal or No Deal International, Brilliant Gems, Aviator, Rome: The Golden Age, The Magic Cauldron -  Enchanted Brew, Fortune Finder with Holly, jocurilor bingo și curselor virtuale.  De asemenea, nu contribuie la acumularea punctelor sumele depuse și mizate pe platformele NetBet Sport, NetBet Poker și NetBet Loto. 
                </li>
                <li>
                  Pentru a urca în clasament, jucătorii trebuie să depună și să joace cu bani reali la sloturile din colecția NetBet. Toate sloturile (cu excepția celor enumerate mai sus) contribuie la acumularea punctelor, dar dacă jucătorii aleg să parieze pe jocurile furnizorului partener al campaniei, punctele acumulate de aceștia vor fi duble.
                </li>
                <li>Furnizorul partener al campaniei este: <b> Pragmatic Play.</b></li>
             
                <li>
                  Orice miză plasată va contribui la scorul total al unui jucător. Scorul va fi afișat în clasament și va fi calculat la un interval de 5 minute.
                </li>
                <li>
                  Scorul total este calculat prin adunarea punctelor obținute în timpul tuturor rundelor jucate la orice slot din casino, în timpul perioadei promoționale.
                </li>
                <li>
                  Punctele turneului se calculează după cum urmează: 1 RON CASH mizat la orice slot din cazino = 10 puncte în clasament. În cazul jocurilor oferite de Pragmatic Play, calculul este următorul: 1 RON CASH mizat = 20 de puncte în clasament.
                </li>
                <li>
                  Atunci când doi jucători au același punctaj, premiile din turneu nu vor fi împărțite. Departajarea va fi decisă în funcție de suma totală câștigată în timpul jocului eligibil, și, de asemenea, de numărul de runde jucate.
                </li>

                <li>
                  Atunci când doi jucători au același punctaj, premiile din
                  turneu nu vor fi împărțite. Departajarea va fi decisă în
                  funcție de suma totală câștigată în timpul jocului eligibil,
                  și, de asemenea, de numărul de runde jucate.
                </li>
                <li>
                  Pentru acest turneu vor fi luate în considerare doar mizele cash (mizele din bani bonus sunt excluse).
                </li>
                <li>Jucătorii au posibilitatea de a se retrage din competiție oricând. Pentru a face acest lucru, apasă butonul de <button id="optout-btn" class="optout-btn btn pointer">Opt-Out</button>. </li>
              </ul>

              <p><b>Ce pot câștiga?</b></p>
              <ul>
                <li>
                  La finalul perioadei promoționale toți jucătorii vor fi premiați. Printre premiile oferite în cadrul acestei campanii se numără bani reali, Runde Gratuite și pachete cadou. 
                </li>
                <li>
                  Valoarea totală a premiilor cash este de 50.000 de RON.
                </li>
                <li>
                  Numărul total al Rundelor Gratuite acordate este de 99.999 de rotiri.
                </li>
                <li>
                  Primii 200 de concurenți vor primi premii cash 💰, pachete cadou 🎁 din partea Pragmatic Play și Runde Gratuite 🎰.
                </li>
                <li>
                  Distribuția premiilor poate fi vizualizată în tabelul de mai
                  jos:
                </li>
                <br />
                <table class="tableNetBet">
                  <thead>
                    <tr>
                      <th>Clasament</th>
                      <th>Premii</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>2000RON 💵 150 🎰1 🎁</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>1500RON 💵 150 🎰1 🎁</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>1000RON 💵 150 🎰1 🎁</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>800RON 💵 150 🎰1 🎁</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>700RON 💵 150 🎰1 🎁</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>600RON 💵 150 🎰1 🎁</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>500RON 💵 150 🎰1 🎁</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>400RON 💵 150 🎰1 🎁</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>300RON 💵 150 🎰1 🎁</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>200RON 💵 150 🎰1 🎁</td>
                    </tr>
                    <tr>
                      <td>11-50</td>
                      <td>150RON 💵 150 🎰1 🎁</td>
                    </tr>
                    <tr>
                      <td>51 - 100</td>
                      <td>100RON 💵 150 🎰1 🎁</td>
                    </tr>
                    <tr>
                      <td>101 - 200</td>
                      <td>90RON 💵 150 🎰1 🎁</td>
                    </tr>
                    <tr>
                      <td>201 - 350</td>
                      <td>80RON 💵 150 🎰</td>
                    </tr>
                    <tr>
                      <td>351 - 450</td>
                      <td>70RON 💵 150 🎰</td>
                    </tr>
                    <tr>
                      <td>451 - 500</td>
                      <td>60RON 💵 150 🎰</td>
                    </tr>
                    <tr>
                      <td>501 + ♾️</td>
                      <td>50 🎰</td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <li>Premiile vor fi creditate în conturile jucătorilor NetBet în termen de 72 de ore (3 zile lucrătoare) de la încheierea promoției ca sume cash. Acestea nu sunt supuse niciunei condiții de rulaj și vor putea fi retrase în orice moment.</li>
              </ul>
              <p><b>Pachete cadou:</b></p>
              <ul>
                <li>Pachetele cadou sunt oferite primilor 200 de jucători din clasament de către Pragmatic Play.</li>
                <li>Pachetele cadou vor fi acordate jucătorilor după finalizarea campaniei (după 14 zile de la finalizare) și vor fi contactați de un reprezentant NetBet pentru a oferi datele de contact și adresa de livrare. </li>
                
              </ul>

              <p><b>Runde Gratuite:</b></p>
              <ul>
                <li>Orice jucător care a obținut minimum 500 de puncte în clasament va primi garantat 50 de Runde Gratuite care vor putea fi folosite la slotul <span>Sweet Bonanza Xmas</span> de la Pragmatic Play (atât pe desktop, cât și pe versiunea mobilă, dacă aceasta este disponibilă), la valoarea minimă a unei fise.</li>
                <li>Rundele Gratuite vor fi creditate în maximum 72h (3 zile lucrătoare) în contul jucătorilor și sunt active 3 zile de la momentul creditării.</li>
                <li>Câștigurile obținute în urma rulajului rundelor gratuite vor fi creditate în balanța jucătorilor sub formă de bonus de îndată ce toate rundele acordate au fost epuizate.</li>
                <li>Bonusul este supus unei condiții de mizare de 40x (playthrough 40x) înainte ca balanța bonus să fie convertită în fonduri cash. Orice cerere de retragere efectuată înainte de îndeplinirea condițiilor de mizare va rezulta în pierderea automată a tuturor sumelor bonus și a câștigurilor în așteptare derivate din acestea.</li>
                <li>Bonusul are valabilitate 7 zile de la data emiterii, cu excepția cazului în care se specifică altfel. La finalul acestei perioade, toate bonusurile neutilizate, bonusurile ale căror condiții de mizare nu au fost îndeplinite și câștigurile în așteptare derivate din acestea vor fi deduse automat din contul jucătorului.</li>

                <li>Miza maximă acceptată pe parcursul efectuării rulajului este de <b>50 RON</b>. </li>
                <li>Suma maximă care poate fi convertită în fonduri cash ca urmare a îndeplinirii condițiilor de rulaj este de <b>250 RON</b>. Orice fonduri care depășesc această valoare vor fi deduse. </li>
              </ul>



              <p><b>Ce altceva trebuie să știi?</b></p>
              <ul>
                <li>Această ofertă respectă <a
                    href="https://casino.netbet.ro/help/terms-and-conditions/terms-conditions<?php echo $qsa; ?>" style="display:inline-block;">Termenii și Condițiile NetBet</a>.</li>
                <li>
                  Streamerii nu sunt eligibili pentru a beneficia de premii,  aceștia având un clasament separat față de jucători. 
                </li>
                <li>
                  Ne rezervăm dreptul de a anula scorul cumulat sau de a nu credita premiul în cazul în care scorul cumulat sau parte din acesta a fost obținut în urma unei erori tehnice sau umane (inclusiv câștiguri înregistrate greșit în timpul jocului).
                </li>
                <li>
                  NetBet își rezervă dreptul de a exclude jucătorii care participă la această campanie cu conturi multiple de utilizator. În cazul în care avem motive să credem că un cont sau un grup de conturi operează sistematic, de exemplu, folosind tehnici de pariere specifice sau pariuri în grup, atunci NetBet își rezervă dreptul de a suspenda sau de a închide permanent toate conturile. În aceste circumstanțe, conturile vor fi excluse automat de la participarea la promoții, chiar dacă au început deja procesul de depunere sau de pariere. 
                </li>

                <li>
                  NetBet își rezervă dreptul de a anula sau a modifica condițiile acestei promoții fără notificare prealabilă.
                </li>
                <ul class="insideUl">
                  <li style="list-style: initial;">Pentru a putea juca pe NetBet, este necesar să ai peste 18 ani și să nu ai interdicție de a participa la activități de jocuri de noroc din orice motiv.</li>
                  <li style="list-style: initial;">NetBet: Licența nr. L1160651W000195 emisă de Comitetul de Supraveghere ONJN pentru NetBet Enterprises Ltd., Ewropa Business Centre, etaj 3, camera 704, birou A, str. Dun Karm Street, Birkirkara, Malta, valabilă din data de 01 Iulie 2016 până la 30 Iunie 2026.
                  </li style="list-style: initial;">
                  <li style="list-style: initial;">Cod unic de identificare fiscală 35831487 eliberat de Administrația Fiscală pentru Contribuabili Nerezidenți.</li>
                  <li style="list-style: initial;">Accesul la site-urile online cu jocuri pe bani reali este interzis în conformitate cu unele legislații naționale.</li>
                  <li style="list-style: initial;">Este responsabilitatea fiecărui jucător în parte de a se asigura că acționează în conformitate cu legislația în vigoare atunci când accesează site-ul NetBet.</li>
                  <li style="list-style: initial;">Jocurile de noroc implică riscuri financiare și de dependență. Jucați cu moderație.</li>
                  <li style="list-style: initial;">Dacă simți că ai nevoie de asistență suplimentară pentru a controla activitatea de jocuri de noroc, ia-ți timp și caută ajutor.</li>
                </ul>
                
                
              </ul>
              <p ><b style="color:var(--color_red);font-size: 100% !important;">ORGANIZAȚIILE DE MAI JOS ÎȚI VOR OFERI SPRIJIN SPECIALIZAT:</b></p>
              <ul>
                <li style="list-style: initial;">Dacă ai nevoie sau știi pe cineva din jurul tău care are probleme cu jocurile de noroc, nu ezita să contactezi departamentul de relații cu clienții al grupului NetBet.
                </li>
                <li style="list-style: initial;">Gamblers Anonymous oferă informații pentru a ajuta oamenii să ia decizii despre dependența de jocuri de noroc. Au, de asemenea, un serviciu de localizare a grupurilor de suport din întreaga lume, inclusiv din România;</li>
                <li style="list-style: initial;">Gambling Therapy este un serviciu online gratuit, disponibil în mai multe limbi, care oferă sfaturi practice și sprijin persoanelor afectate de probleme cu jocurile de noroc. Poate fi deosebit de util deoarece site-ul este disponibil și în limba română.</li>
                <li style="list-style: initial;">Pentru ajutor și sprijin privind dependența de jocuri de noroc contactați Clinica ALIAT la +40727880447 sau vizitați https://clinica-aliat.ro/jocuri-de-noroc/</li>
              </ul>
              <div class="logos">
                <!-- Div for ONJN and GambleAware logos -->
                <div class="logos-group">
                  <a href="https://onjn.gov.ro<?php echo $qsa; ?>" target="_blank">
                    <img src="./assets/stuff/icons/onjn-white.png" alt="onjn" class="onjn lozad" />
                  </a>
                  <a href="https://www.begambleaware.org<?php echo $qsa; ?>" target="_blank">
                    <img src="./assets//stuff/icons/gambleaware_white.png" alt="gambleaware"
                      class="gambleaware lozad" />
                  </a>
                </div>
                <!-- Div for GamCare and Logo Clinica logos -->
                <div class="logos-group">
                  <a href="https://www.gamcare.org.uk<?php echo $qsa; ?>" target="_blank">
                    <img src="./assets/stuff/icons/gamcare.png" alt="gamcare" class="gamcare lozad" />
                  </a>
                  <a href="https://clinica-aliat.ro/jocuri-de-noroc<?php echo $qsa; ?>" target="_blank">
                    <img src="./assets/stuff/icons/clinica_logo_white.png" alt="logo_clinica"
                      class="logo_clinica lozad" />
                  </a>
                </div>
              </div>
           
              <p>&copy;2024 Netbet. All rights reserved.</p>
              <br />
              <hr />
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>

  <style>
    .box-arrow {
      position: relative;
      left: 50%;
      transform: translate(-50%, 0%);
      bottom: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: -1;
    }

    .arrows {
      width: 60px;
      height: 80px;

    }

    @media (max-width:991px) {
      .box-arrow {
        position: relative;
        bottom: 0%;
      }
    }

    .arrows path {
      stroke: #fff;
      fill: transparent;
      stroke-width: 4px;
      animation: arrow 2s infinite;
      -webkit-animation: arrow 2s infinite;
    }

    @keyframes arrow {
      0% {
        opacity: 0
      }

      40% {
        opacity: 1
      }

      80% {
        opacity: 0
      }

      100% {
        opacity: 0
      }
    }

    @-webkit-keyframes arrow {
      0% {
        opacity: 0
      }

      40% {
        opacity: 1
      }

      80% {
        opacity: 0
      }

      100% {
        opacity: 0
      }
    }

    .arrows path.a1 {
      animation-delay: -1s;
      -webkit-animation-delay: -1s;
    }

    .arrows path.a2 {
      animation-delay: -0.5s;
      -webkit-animation-delay: -0.5s;
    }

    .arrows path.a3 {
      animation-delay: 0s;
      -webkit-animation-delay: 0s;
    }

  </style>
  
<script src="https://unpkg.com/blaze-slider@latest/dist/blaze-slider.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/datatables/1.10.21/js/jquery.dataTables.min.js"
  integrity="sha512-BkpSL20WETFylMrcirBahHfSnY++H2O1W+UnEEO4yNIl+jI2+zowyoGJpbtk6bx97fBXf++WJHSSK2MV4ghPcg=="
  crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="./index.js"></script>
  <script src="./src/js/carousel.js"></script>
  <script src="./src/js/dataTable.js" ></script>

  <script>
    $('#target').on('click touchstart', '._b', function (e) {
      if ($('#target .bullet-hole').length >= 10) {
        return;
      }
      if ($(e.target).is('button, input, textarea, select, a, p, h2') ||
        $(e.target).closest('.table-responsive').length ||
        $(e.target).closest('.offer-content').length ||
        $(e.target).closest('.carousel').length ||
        $(e.target).closest('.arrows').length) {
        return;
      }
      // For touch, use touches[0] to get coordinates.
      let isTouch = e.type === 'touchstart';
      let pageX = isTouch ? e.originalEvent.touches[0].pageX : e.pageX;
      let pageY = isTouch ? e.originalEvent.touches[0].pageY : e.pageY;

      let sectionOffset = $(this).offset();

      let bulletHoleX = pageX - sectionOffset.left;
      let bulletHoleY = pageY - sectionOffset.top;

      // Create the bullet hole element
      let bulletHole = $('<div />').addClass('bullet-hole').appendTo($(this));

      // Get bullet hole dimensions
      let bulletHoleWidth = bulletHole.outerWidth();
      let bulletHoleHeight = bulletHole.outerHeight();

      bulletHole.css({
        top: bulletHoleY - bulletHoleHeight / 2,
        left: bulletHoleX - bulletHoleWidth / 2
      });

      setTimeout(removeBulletHole, 1500);
    });

    function removeBulletHole() {
      $('#target .bullet-hole:not(:animated):first').fadeOut(function () {
        $(this).remove();
      });
    }

  </script>
</body>

</html>