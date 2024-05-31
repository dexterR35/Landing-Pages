const $ = fp_utils.$;
const addClass = fp_utils.addClass;
const removeClass = fp_utils.removeClass;
const toggleClass = fp_utils.toggleClass;
const g_timeouts = {};
const ACTIVE = "active";
const fullData = {
  dataBoxes: [{
      text: "Este a șasea apariție a Tricolorilor la un Campionat European. Cea mai bună performanță a fost în 2000 când visele lui Hagi și co. s-au spulberat în sferturi. Acum, România vine cu forțe proaspete și încrederea la cote maxime ținând cont că și-a câștigat grupa de calificări fără să fie învinsă.",
      image: "./png/_slides/slide1/romania2.png",
      title: "România",
    },
    {
      text: "Cele două echipe au trei victorii la Campionatele Europene. Ambele se luptă pentru a o obține pe a patra. Nu știm dacă vor reuși, cert este că dintre cele două, un record inedit îl dețin ibericii. Sunt singurii care au reușit să câștige două europene la rând: 2008 și 2012.",
      image: "./png/_slides/slide1/spaniaGermania.png",
      title: "Spania și Germania",
    },
    {
      text: "Pe locul doi la victorii, Franța și Italia speră să ajungă în clubul select din care fac parte rivalele Spania și Germania. Gli Azzuri sunt campionii en-titre, iar Cocoșii galici au câștigat mondialul din 2018 și au ajuns în finală în 2022, așa că toată lumea este cu ochii pe ei!",
      image: "./png/_slides/slide2/franceItaly.png",
      title: "Franța și Italia",
    },
    {
      text: "FUSSBALLIEBE este mingea oficială a Campionatului European. “Dragostea pentru fotbal” se regăsește în cel mai mic detaliu, de la culorile ce reprezintă fiecare națiune, la inovația tehnologică folosită pentru construcția sa.",
      image: "./png/_slides/slide2/euroBall.png",
      title: "Uniți prin fotbal",
    },
    {
      text: "Din cele 10 stadioane alese pentru acest turneu, doar unul poate face față unei finale de așa anvergură. Vorbim, desigur, de Olympiastadion din Berlin. Încă nu știm ce echipe se vor duela pe 14 iulie, dar un lucru este cert: cei 70,000 de spectatori vor avea parte de o atmosferă incendiară!",
      image: "./png/_slides/slide3/grandFinal.png",
      title: "Marea finală",
    },
    {
      text: "Știai că din cele 24 de echipe participante la EURO 2024, Portugalia este singura care a câștigat fiecare meci din calificări? Cu 36 de goluri înscrise și doar 2 încasate, colegele sale de grupă Cehia, Turcia și Georgia au o misiune grea.",
      image: "./png/_slides/slide3/winWhite.png",
      title: "Victorie în alb",
    },
    {
      text: "Cristiano Ronaldo! Legendarul jucător portughez se află (probabil) la ultima sa apariție la un turneu final. Cea de-a 6 ediție de EURO este un adevărat record, fiind singurul jucător care a reușit o asemenea performanță.",
      image: "./png/_slides/slide4/ronaldo.png",
      title: "Nu există EURO fără....",
    },
    {
      text: "Michel Platini a fost omul de bază al francezilor la campionatul din ’84. O adevărată legendă, ținând cont că recordul său de 9 goluri date la o singură ediție de EURO este încă în picioare. Să fie oare acesta Europeanul în care se va doborî recordul său?",
      image: "./png/_slides/slide4/platini.png",
      title: "Recorduri personale",
    },
    {
      text: "Încă o dată, englezii sunt în frunte, cu un lot ce valorează 1,67 miliarde de euro. Nu stau rău nici Les Bleus cu un lot de peste un miliard de euro. La polul opus, România încheie topul cu un lot ce valorează 95 de milioane de euro.",
      image: "./png/_slides/slide5/angliaFranta.png",
      title: "Cel mai valoros lot",
    },
    {
      text: "Aici lupta se dă între Kylian Mbappe și Jude Bellingham. Performanțele lor și ale naționalelor sigur vor face diferența la finalul turneului!",
      image: "./png/_slides/slide5/frantaAnglia.png",
      title: "...si cei mai valoroși jucători",
    },
  ],
  containerBoxes: [
    "container_boxes2-1",
    "container_boxes2-2",
    "container_boxes2-3",
    "container_boxes2-4",
    "container_boxes2-5",
  ],
  matches: [{
      team1: "Romania",
      team2: "Ucraina",
      date: "2024-06-15",
      cote: {
        x1: 3.65,
        x: 3.25,
        x2: 2.13,
      },
    },
    {
      team1: "SPANIA",
      team2: "CROATIA",
      date: "2024-06-16",
      cote: {
        x1: 2.1,
        x: 3.5,
        x2: 2.8,
      },
    },
    {
      team1: "BELGIA",
      team2: "SLOVACIA",
      date: "2024-06-17",
      cote: {
        x1: 2.75,
        x: 3.0,
        x2: 2.5,
      },
    },
    {
      team1: "PORTUGALIA",
      team2: "CEHIA",
      date: "2024-06-18",
      cote: {
        x1: 2.95,
        x: 3.2,
        x2: 2.1,
      },
    },
  ],
  teams: [{
      name: "Belgium",
      flag: "https://flagcdn.com/w20/be.png",
      p: 0,
      w: 0,
      d: 0,
      l: 0,
      pts: 0,
    },
    {
      name: "Slovakia",
      flag: "https://flagcdn.com/w20/sk.png",
      p: 0,
      w: 0,
      d: 0,
      l: 0,
      pts: 0,
    },
    {
      name: "Romania",
      flag: "https://flagcdn.com/w20/ro.png",
      p: 0,
      w: 0,
      d: 0,
      l: 0,
      pts: 0,
    },
    {
      name: "Ukraine",
      flag: "https://flagcdn.com/w20/ua.png",
      p: 0,
      w: 0,
      d: 0,
      l: 0,
      pts: 0,
    },
  ],
};
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

  // userToCheck = "teststep"; //teststep
  userToCheck = getCookie("netbet_login");

// Add origin animations
function addOriginAnimations(elements, direction) {
  if (elements.length) {
    elements.forEach(function (element) {
      console.log(element);
      element.classList.remove("animate2");
      g_timeouts.origin = setTimeout(function () {
        console.warn("hide-" + direction);
        addClass(element, "hide-" + direction);
        element.classList.remove("animate");
      }, 100);
    });
  }
}

// Add destiny animations
function addDestinyAnimations(element, direction) {
  const hideClass =
    direction === "up" || direction === "down" ?
    "hide-down hide-up" :
    "hide-left hide-right";
  if (element) {
    addClass(element, ACTIVE);
    addClass(element, "animate");
    removeClass(element, hideClass);
    g_timeouts.destination = setTimeout(function () {
      addClass(element, "animate2");
    }, 1000);
  }
}

// Initialize fullpage.js
document.addEventListener("DOMContentLoaded", function () {
  const loadingElement = document.getElementById('loading');
  const contentElement = document.getElementById('content');
  loadingElement.style.display = 'flex';
  contentElement.style.display = 'none';

  function hideLoadingScreen() {
    setTimeout(() => {
      loadingElement.style.display = 'none';
      contentElement.style.display = 'flex';
    }, 1000); // 1000ms = 1 second
  }

  window.addEventListener("load", hideLoadingScreen);

  new fullpage("#content", {
    sectionsColor: ["#3a45de", "#fc6c7c", "#7BAABE"],
    anchors: ["firstPage", "secondPage", "3thPage", "4thPage", "5thPage"],
    menu: "#menu",
    navigation: true,
    // responsiveSlides:true,
    // animateAnchor: true,
    // cardsOptions: {
    //   perspective: 950,
    //   fadeContent: true,
    //   fadeBackground: true,
    // },
    // touchSensitivity: 18,
    // scrollingSpeed: 1000,
    keyboardScrolling: true,
    dragAndMove: true,
    lazyLoading: true,
    controlArrows: false,
    fadingEffect: true,
    fadingEffectKey: "STdibVYwWW1WMExuSnZLOF8yZnRZMkZ5WkhNPU9NTw==",
    licenseKey: "K6CMK-781MK-IQ9J6-N9S36-VXKNO",
    cardsKey: "YWx2YXJvdHJpZ28uY29tX0E2MFkyRnlaSE09cmI2",
    cards: true,

    afterLoad: (origin, destination, direction) => {
      addClass(destination.item, "animate");
      const btnActive = document.querySelectorAll(".footer-button");
      const anchor = destination.item.getAttribute('data-anchor');
      btnActive.forEach(element => {
        if (element.getAttribute('data-target') === anchor) {
          addClass(element, "_active");
          const color = element.getAttribute('data-color');
          element.style.background = `var(${color})`;
          element.style.color = "white";
        } else {
          removeClass(element, "_active");
          element.style.background= "";
          element.style.color = "initial";
        }
      });
    },
    onLeave: (origin, destination, direction) => {
      clearTimeout(g_timeouts.destination);
      removeClass(document.body, "fp-moving-right fp-moving-vertically fp-moving-left fp-moving-down fp-moving-up");
      if (direction) {
        addClass(document.body, `fp-moving-${direction}`);
        removeClass(document.body, "fp-moving-horizontally");
        addClass(document.body, "fp-moving-vertically");
      }
      if (["right", "left"].indexOf(direction) === -1) {
        const activeElement = $(`.active[data-section="${destination.index + 1}"]`)[0];
        addDestinyAnimations(activeElement || $(`[data-section="${destination.index + 1}"]`)[0], direction);
        const originElements = $(`.active[data-section="${origin.index + 1}"]`);
        addOriginAnimations(originElements, direction);
      }
    },
    onSlideLeave: (section, origin, destination, direction) => {
      removeClass(document.body, "fp-moving-right fp-moving-left fp-moving-down fp-moving-up");
      if (direction) {
        addClass(document.body, `fp-moving-${direction}`);
        removeClass(document.body, "fp-moving-vertically");
        addClass(document.body, "fp-moving-horizontally");
      }
      const destinationElement = $(`.trainers[data-section="${section.index + 1}"][data-slide="${destination.index + 1}"]`)[0];
      addDestinyAnimations(destinationElement, direction);
      const activeElements = $(`.trainers[data-section="${section.index + 1}"][data-slide="${origin.index + 1}"]`);
      removeClass(activeElements, ACTIVE);
      addOriginAnimations(activeElements, direction);
    },
    afterResize: function(width, height){},
  });




});

// Event listeners


document.querySelector(".arrow-down").addEventListener("click", () => {
  fullpage_api.moveSectionDown();
});

document.querySelector(".arrow-custom").addEventListener("click", () => {
  fullpage_api.moveSectionDown();
});

document.querySelectorAll(".slider-control-next").forEach(element => {
  element.addEventListener("click", e => {
    e.preventDefault();
    fullpage_api.moveSlideRight();
  });
});

document.querySelectorAll(".slider-control-prev").forEach(element => {
  element.addEventListener("click", e => {
    e.preventDefault();
    fullpage_api.moveSlideLeft();
  });
});

// Function to add content
function addInfoCotes(matches) {
  const htmlContent = matches.map(match => `
    <div class="content-cote">
      <div class="matches-cote"><p>${match.team1}</p> <p>${match.team2}</p></div>
      <div class="date-cote"><p>${match.date}</p></div>
      <div class="number-cote">
        <p>1x2 ${match.cote.x1} <span>|</span></p>
        <p>1x2 ${match.cote.x} <span>|</span></p>
        <p>1x2 ${match.cote.x2} </p>
      </div>
    </div>
  `).join("");

  const coteMatchElement = document.getElementById("coteMatch");
  coteMatchElement.insertAdjacentHTML("beforeend", htmlContent);
}


addInfoCotes(fullData.matches);

function onLoad() {
  addClass(document.body, "loadBg");
}

window.addEventListener("load", onLoad);

fullData.dataBoxes.forEach((item, index) => {
  const sectionIndex = Math.floor(index / 2);
  const sectionContainer = document.getElementById(fullData.containerBoxes[sectionIndex]);
  if (sectionContainer) {
    sectionContainer.innerHTML += `
      <div class="boxParent${index} boxParent">
        <div>
          <img src="${item.image}" alt="img" class="boxImg boxImg${index}">
        </div>
        <div>
          <p>${item.title}</p>
          <p class="boxText boxText${index}">${item.text}</p>
        </div>
      </div>
    `;
  }
});

const tableContent = document.getElementById('tableScore-content');
fullData.teams.forEach(team => {
  const row = document.createElement('div');
  row.classList.add('parent-tableScore-row');
  row.innerHTML = `
  <div class="tableScore-row">
      <div class="team-name">
          <img class="flag" src="${team.flag}" alt="${team.name} flag">
          ${team.name}
      </div>
      <div class="cell">${team.p}</div>
      <div class="cell">${team.w}</div>
      <div class="cell">${team.d}</div>
      <div class="cell">${team.l}</div>
      <div class="cell">${team.pts}</div>
      </div>
  `;
  tableContent.appendChild(row);
});