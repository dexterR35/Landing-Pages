

$(document).ready(function () {
  $.scrollify({
    section: ".panel",
    scrollbars: false,
    standardScrollElements: ".forScrolling",
    before: function (i, panels) {
      // let ref = panels[i].attr("data-section-name");
      // console.log(i, "i-section");
    },
    after: function (i, panels) {},
    afterResize: initialPosition,
    afterRender: initialPosition,
  });

  $(".pagination a").on("click", function () {
    $.scrollify.move($(this).attr("href"));
  });

  function initialPosition() {
    var current = $.scrollify.current();
    // if (current.hasClass("inner_section_4") === false) {
    //   var height = parseInt($(".inner_section_4 ").height());
    //   var f = parseInt($(".inner_section_4 .gallery0").height()) - 50;
    //   var top = 0 - height * 0.3 - (height - f);
    //   $(".inner_section_7 .gallery0").css("top", top);
    // } else {
    //   $(".inner_section_7")
    //     .find(".gallery0,.gallery1,.gallery2")
    //     .addClass("moved");
    // }
  }

  $(".md-trigger").on("click", function () {
    $(".md-modal").addClass("md-show");
  });

  $(".md-close").on("click", function () {
    $(".md-modal").removeClass("md-show");
  });

  $(".logo-top").attr("data-aos", "fade-down");
  $(".header-content-text").attr("data-aos", "zoom-out-right");
  $(".messi").attr("data-aos", "fade-up");
  $(".messi2").attr("data-aos", "fade-right");

  $(".clock-swirl").attr("data-aos", "zoom-in-left");
  $(".player-swirl").attr("data-aos", "fade-right");
  // $(".constent").attr("data-aos", "fade-right");

  $(".bottom_aos").attr({
    "data-aos": "fade-up",
    "data-aos-anchor-placement": "center-bottom",
  });
  // $(".constent").attr({"data-aos": "zoom-out-left","data-aos-duration":"350"});
  $(".terms-toggle").click(function () {
    $(".terms").toggleClass("hidden-two");
    $(".terms-content").slideToggle();
  });
});

const config = {
  autoload: true,
  itemsToBeVisible: 3,
  speed: 3000,
};

function start() {
  window.onload = function () {
    setSlidersStyle(config);

    const prevSlideButton = document.getElementById("prev-slide");
    const nextSlideButton = document.getElementById("next-slide");

    prevSlideButton.addEventListener("click", () => {
      navigate("backward", config);
      // console.log(navigate("backward", config), "test");
    });

    nextSlideButton.addEventListener("click", () => {
      navigate("forward", config);
    });

    if (config.autoload) {
      playCarousel(nextSlideButton, config);
    }
  };
}

/*--------------------------------------------------------------
Sets the style of slides based on the number of visible items.
---------------------------------------------------------------*/
function setSlidersStyle(config) {
  document.querySelector(
    "style"
  ).textContent += `@media screen and (min-width:1180px) { .carousel__slide{ min-width: ${
    100 / config.itemsToBeVisible
  }% } }`;
}

/*----------------------------------------
Performs the sliding behavior of items.
----------------------------------------*/
function navigate(position, config) {
  const carouselEl = document.getElementById("carousel");
  const slideContainerEl = carouselEl.querySelector(
    ".carousel__container"
  );
  const slideEl = carouselEl.querySelector(".carousel__slide");
  let slideWidth = slideEl.offsetWidth;
  slideContainerEl.scrollLeft = this.getNewScrollPosition(
    position,
    slideContainerEl,
    slideWidth,
    config
  );
}

/*-------------------------------
Get the new scroll position.
---------------------------------*/
function getNewScrollPosition(
  position,
  slideContainerEl,
  slideWidth,
  config
) {
  const maxScrollLeft =
    slideContainerEl.scrollWidth - slideWidth * config.itemsToBeVisible;
  if (position === "forward") {
    const x = slideContainerEl.scrollLeft + slideWidth;
    return x <= maxScrollLeft ? x : 0;
  } else {
    const x = slideContainerEl.scrollLeft - slideWidth;
    return x >= 0 ? x : maxScrollLeft;
  }
}

/*-------------------------------
Autoplay
---------------------------------*/
function playCarousel(nextButton, config) {
  const play = () => {
    nextButton.click();
    setTimeout(play, config.speed);
  };
  play();
}
start();

$(document).ready(function () {
  AOS.init({
    offset: 0,
    duration: 500,
    easing: "ease-in-sine",
    delay: 0,
  });
  $("#window").on("click", function (e) {
    e.preventDefault();
    $(".bg-pulse").css("display", "none");

    // $(".shape-modal").remove();

    // setTimeout(function () {
    //   $(".item-shape").append(
    //   '<img src="./images/section1/element-section1.png" data-src="./images/section1/element-section1.png" class="lazy-img lozad ttesttt shape-modal"/>'
    // );
    //   $(".shape-modal").css("opacity", "1");
    // }, 800);
    $.scrollify.disable();
    let showInfo = $(this).text();
    $(this).text("");
    $(this).addClass("ball_animation");
    if ($(this).find("forB")) {
      $(".forC, .forD, .forB").css({
        opacity: "0",
        transition: "opacity 0.4s ease 0.2s",
      });
    }
    setTimeout(function () {
      if ($(".modal_home_container").find("modEmbl")) {
        $(".modal_Emblem").addClass("activeTwo");
      }
      $(".close_emblem").css("width", "30px");
      $(".close_emblem").css("height", "30px");

      setTimeout(function () {
        $(".btn_Emblem").removeClass("ball_animation");
        $(".forB").removeClass("ball_animation");
        $(".btn_Emblem").text(showInfo);
      }, 300);
    }, 500);
  });

  $(".close_emblem").click(function () {
    $(".modal_Emblem").removeClass("activeTwo");
    $(".close_emblem").css("width", "0px");
    $(".close_emblem").css("height", "0px");
    $.scrollify.enable();
    $(".forC, .forD, .forB").css({
      opacity: "1",
      transition: "opacity 0.4s ease",
    });
    $(".bg-pulse").css("display", "initial");
  });

  function progressBarScroll() {
    let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop,
      height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight,
      scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
  }
  window.onscroll = function () {
    progressBarScroll();
  };
});

$(document).ready(function () {
  function updateChart() {
    const api_url = "./dataDB.json";

    async function getJson() {
      const response = await fetch(api_url);
      const jsondata = await response.json();
      // console.log(jsondata);
      // jsonSection = jsondata.qatar[1];
      // jsonStadium = jsondata.qatar[3];
      // const { sections } = jsonSection;
      // const { stadium } = jsonStadium;
      return jsondata;
    }
    const x = document.querySelectorAll(".inner");
    const y = x[14].querySelectorAll(".entry-title");
    const z = x[14].getElementsByClassName("entry-content");
    getJson().then((jsondata) => {
      const jsonSection = jsondata.qatar[1].sections;
      for (i = 1; i < jsonSection.length; i++) {
        let j = i + 1;

        if (
          i > 1 &&
          x[i].getElementsByClassName("entry-title").length + 1 > 0
        ) {
          x[i - 1].getElementsByClassName("entry-title")[0].innerHTML =
            `<h2 class="entry-title">` +
            jsonSection[i - 1].subtitle +
            `</h2>`;
          x[i - 1].getElementsByClassName("entry-content")[0].innerHTML =
            `<p>` + jsonSection[i - 1].content + `</p>`;
          if (x[i].getElementsByClassName("entry-title").length == 2) {
            x[i].getElementsByClassName("entry-title")[1].innerHTML =
              `<h2 class="entry-title">` +
              jsonSection[i].subtitle_two +
              `</h2>`;
            x[i].getElementsByClassName("entry-content")[1].innerHTML =
              `<p>` + jsonSection[i].content_two + `</p>`;
          }
        }
      }
      const stadium_name = jsondata.qatar[3].stadium.map(function (
        index,
        i
      ) {
        return index.name;
      });
      const stadium_size = jsondata.qatar[3].stadium.map(function (
        index
      ) {
        return index.name;
      });

      /*s6*/
      const players_name = jsondata.qatar[2].players.map(
        ({ name, price }, index) => {
          // console.log("index", price);
          return name;
        }
      );
      const players_price = jsondata.qatar[2].players.map(
        ({ price }, index) => {
          return price;
        }
      );
      const temperature = jsondata.qatar[0].game_info.map(
        ({ temperature, stadium }, index) => {
          console.log("index", temperature);
          return temperature;
        }
      );

      const match = jsondata.qatar[0].game_info.map(
        ({ match }, index) => {
          return match;
        }
      );

      const data_chart6 = {
        labels: players_name.slice(0, 5),
        datasets: [
          {
            label: "MILIOANELE DE EURO",
            data: players_price.slice(0, 5),
            borderColor: "black",
            borderWidth: 0,
            fontColor: "white",
            // pointBackgroundColor: "crimson",
            backgroundColor: ["#2196f3", "#2196f3", "#2196f3"],
          },
        ],
      };

      // config
      const config_chart6 = {
        type: "bar",
        data: data_chart6,
        options: {
          indexAxis: "y",
          plugins: {
            datalabels: {
              anchor: "end",
              align: "top",
            },
            legend: {
              display: false,
            },
            title: {
              display: true,
              text: "Fotbalul și milioanele",
              color: "white",
            },
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              min: 0,
              max: 190,
              ticks: {
                callback: function (price) {
                  return "$" + price + "m";
                },
                color: "white",
              },
              grid: {
                lineWidth: 0.5,
                color: "#7F8487",
              },
            },
            y: {
              ticks: {
                color: "white",
              },
              grid: {
                lineWidth: 0.5,
                color: "#7F8487",
              },
            },
          },

          layout: {
            padding: {
              left: 2,
              right: 2,
              bottom: 5,
              top: 5,
            },
          },
        },
      };

      //   myChart.update();
      const myChart_s6 = new Chart(
        document.getElementsByClassName("myChart_s6"),
        config_chart6
      ).getContext("2d");

      var ctx4 = document.getElementById("myChart_s2").getContext("2d");

      var myChart2 = new Chart(ctx4, {
        type: "line",
        data: {
          labels: match.slice(0, 15),
          datasets: [
            {
              label: "Temperatura", // Name the series
              data: temperature.slice(0, 15), // Specify the data values array
              fill: false,
              pointBorderColor: "#3A8891",
              pointBorderWidth: 1,
              pointRadius: 3,

              pointHoverRadius: 3,
              pointHoverBorderWidth: 3,
              pointHoverBorderColor: "black",
              pointHoverBackgroundColor: "blue",
              pointHitRadius: 30,

              borderColor: "#2196f3", // Add custom color border (Line)
              backgroundColor: "#3A8891", // Add custom color background (Points and Fill)
              borderWidth: 1, // Specify bar border width
            },
            //   {
            //   label: "Prezența medie pe meci", // Name the series
            //   data: [
            //     90, 70, 84, 88, 140, 126, 89, 89, 95, 97, 102, 146, 132, 115,
            //     141, 171, 161, 147, 143, 171, 169,
            //   ], // Specify the data values array
            //   fill: false,
            //   borderColor: "#7743DB", // Add custom color border (Line)
            //   backgroundColor: "#7743DB", // Add custom color background (Points and Fill)
            //   borderWidth: 1, // Specify bar border width
            // },
          ],
        },
        options: {

          plugins: {
          legend: {
            labels: {
              font: {
                  size: 18
              },
              color:"white",
          
            
            },
          },

        },
          responsive: true, // Instruct chart js to respond nicely.
          maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
          scales: {
            y: {
              grid: {
                borderColor: "black",
                borderWidth: 0.5,
                lineWidth: 0.5,
                beginAtZero: true,
                color: "#7F8487",
              },

              min: 0,
              max: 35,
              ticks: {
                callback: function (m) {
                  return m + " °" + "C";

                  // return m + "m";
                },
               
               
            
                color: "white",
              },
            },

            x: {
              
              grid: {
                borderColor: "black",
                borderWidth: 0.5,
                lineWidth: 0.5,
                color: "#7F8487",
              },
              ticks: {
                autoSkip: true,

                color: "white",
              },
              min: 0,
              max: 25,
            },
          },
 
        },
      });
    });
  }

  let card_div_normal = `<div class="container-cards card_normal entry-cards" data-aos="fade-left">
  <h2 class="entry-title">title</h2>
  <div class="entry-content forScrolling">
    <p></p>
    <p></p>
  </div>
</div>`;

  let card_div_reverse = `<div class="container-cards card_reverse entry-cards" data-aos="flip-down">
  <h2 class="entry-title">title</h2>
  <div class="entry-content forScrolling">
    <p></p>
  </div>
</div>`;

  $(".insert_cars").append(card_div_normal);
  $(".insert_cars_double").append(card_div_reverse, card_div_normal);

  let closeHeight = "2.2em";
  let moreText = "citește mai mult";
  let lessText = "inchide";
  let duration = "1000";
  let easing = "slow";
  let fullHeight = $(".entry-content").css("height", "12em");
  // Limit height of .entry-content div
  $(".container-cards").each(function () {
    // Set data attribute to record original height
    let current = $(this).children(".entry-content");
    // console.log($(this), "curent child");
    current
      .data("fullHeight", current.height())
      .css("height", closeHeight);
    // Insert "Read More" link
    current.after(
      '<button class="more-link closed">' + moreText + "</button>"
    );
  });
  // Link functinoality
  let openSlider = function (e) {
    e.preventDefault();
    link = $(this);
    let openHeight =
      link.prev(".entry-content").data("fullHeight") / 1.5 + "px";
    link.prev(".entry-content").animate(
      {
        height: openHeight,
      },
      {
        duration: duration,
      },
      easing
    );
    link.text(lessText).addClass("open").removeClass("closed");
    if ($(".more-link").hasClass("open")) {
      $(".entry-content").addClass("intro");
      $(".entry-cards").addClass("expand-cards");
    }
    link.unbind("click", openSlider);
    link.on("click", closeSlider);
  };
  let closeSlider = function (e) {
    e.preventDefault();
    link = $(this);
    link.prev(".entry-content").animate(
      {
        height: closeHeight,
      },
      {
        duration: duration,
      },
      easing
    );
    link.text(moreText).addClass("closed").removeClass("open");
    link.unbind("click");
    link.on("click", openSlider);
    if ($(".more-link").hasClass("closed")) {
      $(".entry-content").removeClass("intro");
      $(".entry-cards").removeClass("expand-cards");
    }
  };
  $(".more-link").on(
    "click",
    function (e) {
      e.preventDefault();
      more = $(this);
      // console.log(more, "more");
      more.addClass("tessst");
    },
    openSlider
  );
  updateChart();
  // $(".more-link").bind("click", openSlider);
});

let $progressValue = 0;
let resultList = [];

const quizdata = [
  {
    question:
      "Când a fost folosit sistemul de arbitraj video (VAR) pentru prima dată la Turneul Final?",
    options: ["În 2010", "În 2018", "În 2022 va fi prima dată"],
    answer: "În 2018",
    infoQ:
      "Din 2018 până în prezent, VAR a sporit gradul de decizii corecte de la 95% la 99,2%.",
    category: 1,
  },
  {
    question:
      "Care a fost Campionatul cu cea mai scăzută medie de goluri pe meci?",
    options: ["Mexic 1970", "Italia 1990", "Brazilia 2014"],
    answer: "Italia 1990",
    infoQ:
      "Coppa del Mondo 1990 a avut o medie de 2,21 goluri pe meci, cea mai mică de până acum. Cu un golaveraj 5-5 în 4 partide, România s-a clasat peste medie la această statistică.",
    category: 2,
  },
  {
    question: "Care este simbolul din Turneul de anul acesta?",
    options: ["Infinit", "Trofeu", "Cerc"],
    answer: "Infinit",
    infoQ:
      "Simbolul infinitului are mai multe conotații, reprezentând cele 8 stadioane participante și legăturile formate ce vor dăinui mult timp după turneu.",
    category: 3,
  },
  {
    question:
      "Care națională ar putea egala anul acesta recordul de 5 trofee deținut în prezent de Brazilia?",
    options: ["Franța", "Italia", "Germania"],
    answer: "Germania",
    infoQ:
      "Germania și Italia au câte 4 titluri fiecare, dar numai Germania s-a calificat anul acesta. Franța are 2 titluri câștigate.",
    category: 1,
  },
  {
    question: "Care este cel mai bun marcator din istoria Cupei?",
    options: [
      "Miroslav Klose (Germania)",
      "Ronaldo Nazario (Brazilia)",
      "Luis Suarez (Uruguay)",
    ],
    answer: "Miroslav Klose (Germania)",
    infoQ:
      "Deși retras, Klose câștigă acest top, cu 16 goluri, urmat de Ronaldo cu 15.",
    category: 2,
  },
  {
    question: "Ce țară participantă are cel mai valoros lot?",
    options: ["Brazilia", "Anglia", "Franța"],
    infoQ:
      "Cel mai valoros lot îl are Anglia, ce depășește 1 miliard de euro. Brazilia este următoarea pe listă, iar Franța ocupă locul 4.",
    answer: "Anglia",
    category: 3,
  },
  {
    question:
      "Anul acesta se modifică numărul jucătorilor din loturile naționalelor. Care este noul număr?",
    options: ["30", "26", "24"],
    answer: "26",
    infoQ:
      "Cu trei mai mulți ca în edițiile precedente, loturile au acum dreptul de a avea 26 de jucători.",
    category: 2,
  },
  {
    question: "Ce nume purta primul trofeu?",
    options: ["Fortuna", "Joga Bonito", "Jules Rimet"],
    answer: "Jules Rimet",
    infoQ:
      "Inițial botezat Victoria, trofeul a fost redenumit după președintele organizației din 1929, Jules Rimet.",
    category: 3,
  },
  {
    question:
      "Cum se numește stadionul temporar, construit din containere?",
    options: [
      "Stadionul 974",
      "Stadionul Education City ",
      "Stadionul Al Janoub",
    ],
    infoQ:
      "Stadionul 974 este un proiect sustenabil, o construcție temporară ce va fi demolată si refolosită. Numeralul reprezintă prefixul țării gazdă.",
    answer: "Stadionul 974",
    category: 1,
  },
  {
    question:
      "Care este jucătorul ce poate depăși recordul lui Matthäus la acest turneu?",
    options: ["Cristiano Ronaldo", "Lionel Messi", "Antoine Griezmann"],
    infoQ:
      "Dintre jucătorii in activitate, Lionel Messi este cel cu șansele cele mai bune, datorită celor 19 prezențe. Ronaldo are 17, iar Griezmann 12.",
    answer: "Lionel Messi",
    category: 2,
  },
  {
    question:
      "Când a fost pentru prima dată difuzat la televizor Turneul de fotbal?",
    options: ["1954", "1958", "2002"],
    infoQ:
      "În 1954 a fost difuzat pentru prima oară la televizor C.M. De atunci și până acum a devenit cel mai urmărit eveniment sportive din lume.",
    answer: "1954",
    category: 3,
  },
  {
    question:
      "Care este naționala ce nu a ratat niciun Turneu Final până în prezent?",
    options: ["Anglia", "SUA", "Brazilia"],
    infoQ:
      "Brazilia deține acest record, fiind prezentă la fiecare C.M. Are și cele mai multe victorii, cinci la număr.",
    answer: "Brazilia",
    category: 3,
  },
];

/** Random shuffle questions **/
function shuffleArray(question) {
  let shuffled = question.sort(function () {
    return 0.5 - Math.random();
  });
  return shuffled;
}

function shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    let _ref = [a[j], a[i - 1]];
    a[i - 1] = _ref[0];
    a[j] = _ref[1];
  }
}

/*** Return shuffled question ***/
function generateQuestions() {
  let questions = shuffleArray(quizdata);
  return questions;
}

/*** Return list of options ***/
function returnOptionList(opts, i) {
  let optionHtml =
    '<li class="myoptions">' +
    '<input value="' +
    opts +
    '" name="optRdBtn" type="radio" id="rd_' +
    i +
    '">' +
    '<label for="rd_' +
    i +
    '">' +
    opts +
    "</label>" +
    '<div class="bullet">' +
    '<div class="line zero"></div>' +
    '<div class="line one"></div>' +
    '<div class="line two"></div>' +
    '<div class="line three"></div>' +
    '<div class="line four"></div>' +
    '<div class="line five"></div>' +
    '<div class="line six"></div>' +
    '<div class="line seven"></div>' +
    "</div>" +
    "</li>";

  return optionHtml;
}

/** Render Options **/
function renderOptions(optionList) {
  let ulContainer = $("<ul>").attr("id", "optionList");
  for (let i = 0, len = optionList.length; i < len; i++) {
    let optionContainer = returnOptionList(optionList[i], i);
    ulContainer.append(optionContainer);
  }
  $(".answerOptions").html("").append(ulContainer);
}

/** Render question **/
function renderQuestion(question) {
  $(".question").html("<h2>" + question + "</h2>");
}

/** Render quiz :: Question and option **/
function renderQuiz(questions, index) {
  let currentQuest = questions[index];
  renderQuestion(currentQuest.question);
  renderOptions(currentQuest.options);
  // console.log("Question");
  // console.log(questions[index]);
}

/** Return correct answer of a question ***/
function getCorrectAnswer(questions, index) {
  return questions[index].answer;
}

/** pushanswers in array **/
function correctAnswerArray(resultByCat) {
  let arrayForChart = [];
  for (let i = 0; i < resultByCat.length; i++) {
    arrayForChart.push(resultByCat[i].correctanswer);
  }

  return arrayForChart;
}
/** Generate array for percentage calculation **/
function genResultArray(results, wrong) {
  let resultByCat = resultByCategory(results);
  let arrayForChart = correctAnswerArray(resultByCat);
  arrayForChart.push(wrong);
  return arrayForChart;
}

/** percentage Calculation **/
function percentCalculation(array, total) {
  let percent = array.map(function (d, i) {
    return ((100 * d) / total).toFixed(2);
  });
  return percent;
}

/*** Get percentage for chart **/
function getPercentage(resultByCat, wrong) {
  let totalNumber = resultList.length;
  let wrongAnwer = wrong;
  //let arrayForChart=genResultArray(resultByCat, wrong);
  //return percentCalculation(arrayForChart, totalNumber);
}

/** count right and wrong answer number **/
function countAnswers(results) {
  let countCorrect = 0,
    countWrong = 0;

  for (let i = 0; i < results.length; i++) {
    if (results[i].iscorrect == true) countCorrect++;
    else countWrong++;
  }

  return [countCorrect, countWrong];
}

/**** Categorize result *****/
function resultByCategory(results) {
  let categoryCount = [];
  let ctArray = results.reduce(function (res, value) {
    if (!res[value.category]) {
      res[value.category] = {
        category: value.category,
        correctanswer: 0,
      };
      categoryCount.push(res[value.category]);
    }
    let val = value.iscorrect == true ? 1 : 0;
    // console.log(val, "valoare");
    res[value.category].correctanswer += val;
    return res;
  }, {});

  categoryCount.sort(function (a, b) {
    return a.category - b.category;
  });

  return categoryCount;
}

/** Total score pie chart**/
function totalPieChart(_upto, _cir_progress_id, _correct, _incorrect) {
  $("#" + _cir_progress_id)
    .find("._text_incor")
    .html("Incorect : " + _incorrect);
  $("#" + _cir_progress_id)
    .find("._text_cor")
    .html("Corect : " + _correct);

  let unchnagedPer = _upto;

  _upto = _upto > 100 ? 100 : _upto < 0 ? 0 : _upto;
  let _progress = 0;
  let _cir_progress = $("#" + _cir_progress_id).find("._cir_P_y");
  let _text_percentage = $("#" + _cir_progress_id).find("._cir_Per");
  let _input_percentage;
  let _percentage;

  let _sleep = setInterval(_animateCircle, 25);

  function _animateCircle() {
    //2*pi*r == 753.6 +xxx=764
    _input_percentage = (_upto / 100) * 764;
    _percentage = (_progress / 100) * 764;

    _text_percentage.html(_progress + "%");

    if (_percentage >= _input_percentage) {
      _text_percentage.html(
        '<tspan x="52%" dy="0em">' +
          unchnagedPer +
          '% </tspan><tspan  x="50%" dy="1em">Scorul tău</tspan>'
      );
      clearInterval(_sleep);
    } else {
      _progress++;
      _cir_progress.attr("stroke-dasharray", _percentage + ",764");
    }
  }
}

function renderBriefChart(correct, total, incorrect) {
  let percent = (100 * correct) / total;
  if (Math.round(percent) !== percent) {
    percent = percent.toFixed(2);
  }

  totalPieChart(percent, "_cir_progress", correct, incorrect);
}

/** List question and your answer and correct answer  ****/
function getAllAnswer(results) {
  let innerhtmlS = "";
  for (let i = 0; i < results.length; i++) {
    let _class = results[i].iscorrect ? "item-correct" : "item-incorrect";
    let _classH = results[i].iscorrect ? "h-correct" : "h-incorrect";
    let _html =
      '<div class="_resultboard ' +
      _class +
      '">' +
      '<div class="_header">' +
      results[i].question +
      "</div>" +
      '<div class="_yourans ' +
      _classH +
      '">' +
      results[i].clicked +
      "</div>";

    let html = "";
    if (!results[i].iscorrect)
      html = '<div class="_correct">' + results[i].answer + "</div>";
    _html = _html + html + "</div>";
    innerhtmlS += _html;
  }

  $(".allAnswerBox").html("").append(innerhtmlS);
}
/** render  Brief Result **/
function renderResult(resultList) {
  let results = resultList;
  // console.log(results);
  let countCorrect = countAnswers(results)[0],
    countWrong = countAnswers(results)[1];

  renderBriefChart(countCorrect, resultList.length, countWrong);
}

function renderChartResult() {
  let results = resultList;
  let countCorrect = countAnswers(results)[0],
    countWrong = countAnswers(results)[1];
  let dataForChart = genResultArray(resultList, countWrong);
  renderChart(dataForChart);
}

/** Insert progress bar in html **/
function getProgressindicator(length) {
  let progressbarhtml = "";
  for (let k = 0; k < length; k++) {
    progressbarhtml +=
      '<div class="my-progress-indicator progress_' +
      (k + 1) +
      " " +
      (k == 0 ? "active" : "") +
      '"></div>';
  }
  // console.log(progressbarhtml, "progresbar");
  $(progressbarhtml).insertAfter(".my-progress-bar");
}

/*** change progress bar when next button is clicked ***/
function changeProgressValue() {
  $progressValue += 9;
  if ($progressValue >= 100) {
  } else {
    if ($progressValue == 99) $progressValue = 100;
    $(".my-progress")
      .find(".my-progress-indicator.active")
      .next(".my-progress-indicator")
      .addClass("active");
    $("progress").val($progressValue);
  }
  $(".js-my-progress-completion").html(
    $("progress").val() + "% complete"
  );
}

function addClickedAnswerToResult(questions, presentIndex, clicked) {
  let correct = getCorrectAnswer(questions, presentIndex);
  let result = {
    index: presentIndex,
    question: questions[presentIndex].question,
    clicked: clicked,
    iscorrect: clicked == correct ? true : false,
    answer: correct,
    category: questions[presentIndex].category,
  };
  resultList.push(result);
}
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let displayContainer = document.getElementById("display-container");

$(document).ready(function () {
  let presentIndex = 0;
  let clicked = 0;

  let questions = generateQuestions();
  renderQuiz(questions, presentIndex);
  getProgressindicator(questions.length);

  $(".answerOptions ").on("click", ".myoptions>input", function (e) {
    clicked = $(this).val();

    if (questions.length == presentIndex + 1) {
      $("#submit").removeClass("hidden");
      $("#next").addClass("hidden");
    } else {
      $("#next").removeClass("hidden");
    }
  });

  $("#next").on("click", function (e) {
    e.preventDefault();
    addClickedAnswerToResult(questions, presentIndex, clicked);

    $(this).addClass("hidden");

    presentIndex++;
    renderQuiz(questions, presentIndex);
    changeProgressValue();
  });

  $("#submit").on("click", function (e) {
    addClickedAnswerToResult(questions, presentIndex, clicked);
    $(".multipleChoiceQues").hide();
    $(".resultArea").show();
    renderResult(resultList);
  });

  // $(".resultArea").on("click", ".viewchart", function () {
  //   $(".resultPage2").show();
  //   $(".resultPage1").hide();
  //   $(".resultPage3").hide();
  //   renderChartResult();
  // });

  $(".resultArea").on("click", ".backBtn", function () {
    $(".resultPage1").show();
    $(".resultPage2").hide();
    $(".resultPage3").hide();

    renderResult(resultList);
    // location.reload();
  });

  $(".resultArea").on("click", ".viewanswer", function () {
    $(".resultPage3").show();
    $(".resultPage2").hide();
    $(".resultPage1").hide();

    getAllAnswer(resultList);
  });

  //hide quiz and display start screen

  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");

  //when user click on start button
  startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    $.scrollify.disable();
  });
  $(".resultArea").on("click", ".replay", function () {
    //    window.location.reload(true);

    window.location.href = "https://sport.netbet.ro/?register=1";
  });
});
