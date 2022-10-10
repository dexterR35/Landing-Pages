// //creating element

// // let ul = document.querySelector("ul");
// // let container = document.getElementsByClassName("container");
// // let li = document.createElement("li");

// // // adding element
// // // ul.append(li);
// // li.innerText = "testate";

// // // modifi text
// // const firstListItems = document.querySelector('.list-items');
// // console.log(firstListItems.innerText);
// // console.log(firstListItems.textContent);
// // console.log(firstListItems.innerHTML);
// // console.log();

// // console.log(ul.parentNode, "1");
// // console.log(ul.parentElement.parentElement, "2");

// // ul.append(container);

// // element.addEventListener('click', function(){});

// const button2 = document.querySelector(".btn");

// function alertBtn() {

// alert("sss");
// let text = "tests"
// console.log(text);
// };

// button2.addEventListener("click", alertBtn);

// let newBg = document.querySelector(".box3");

// function changeBg() {
//     newBg.style.backgroundColor = "blue";
// }

// newBg.addEventListener("mouseover", changeBg);

// const revealBtn = document.querySelector(".reveal-btn");
// const hiddenContent = document.querySelector(".hidden-content");
// console.log(revealBtn);
// console.log(hiddenContent);

// function reveal() {
//     if (hiddenContent.classList.contains("reveal-btn")) {
//         hiddenContent.classList.remove("reveal-btn");
//     } else {
//         hiddenContent.classList.add("reveal-btn");
//     }
// }

// revealBtn.addEventListener("click", reveal)

// document.addEventListener("click", function(){

//     console.log(document);
// },true);

// document.querySelector(".reveal-btn").addEventListener("click", function(e){
//     console.log(e.target.innerText = "clicked");

// },{once:true});

(function () {
  const scrollElements = document.querySelectorAll(".js-scroll");
  console.log(scrollElements, "scrollelement");
  // for elements inside
  const elementInView = (el, dividend = 1) => {
    // console.log(el, "el");
    const elementTop = el.getBoundingClientRect().top;
    // console.log(window.innerHeight, "windows height");
    // console.log(window.innerWidth, "windows width");
    // console.log(elementTop, "elementTop");
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  // for elements outside
  const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    // console.log(elementTop, "elementTop");
    return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("scrolled");
    // console.log(element, "display")
  };

  const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
    //   console.log(element, "hideScrollElement")
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else if (elementOutofView(el)) {
        hideScrollElement(el);
      }
    });
  };

  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });

  //////////////////////
  // Utils smooth click on nav bar
  //////////////////////
  // Default   precented
  function throttle(fn, delay, scope) {
    delay = delay || 150;
    let last, defer;

    return function () {
      let context = scope || this,
        now = +new Date(),
        args = arguments;

      if (last && now < last + delay) {
        clearTimeout(defer);
        defer = setTimeout(function () {
          last = now;
          fn.apply(context, args);
        }, delay);
      } else {
        last = now;
        fn.apply(context, args);
      }
    };
  }

  function extend(destination, source) {
    console.log(destination, "destination");
    console.log(source, "source");

    for (var k in source) {
      console.log(source, "source2");
      console.log(k, "k");
      if (source.hasOwnProperty(k)) {
        destination[k] = source[k];
      }
    }
    return destination;
  }

  //////////////////////
  // END Utils
  //////////////////////

  //////////////////////
  // Scroll Module
  //////////////////////

  var ScrollManager = (function () {
    var defaults = {
        steps: true,
        navigationContainer: null,
        links: null,
        scrollToTopBtn: null,
        navigationElementClass: ".Quick-navigation",
        currentStepClass: "current",
        smoothScrollEnabled: true,
        stepsCheckEnabled: true,

        // Callbacks
        onScroll: null,

        onStepChange: function (step) {
          var self = this;
          var relativeLink = [].filter.call(options.links, function (link) {
            link.classList.remove(self.currentStepClass);
            return link.hash === "#" + step.id;
          });
          relativeLink[0].classList.add(self.currentStepClass);
        },
        // Provide a default scroll animation
        smoothScrollAnimation: function (target) {
          $("html, body").animate({
              scrollTop: target,
            },
            "medium"
          );
        },
      },
      options = {};

    // Privates
    var _animation = null,
      currentStep = null,
      throttledGetScrollPosition = null;

    return {
      scrollPosition: 0,

      init: function (opts) {
        options = extend(defaults, opts);

        if (options.steps === null) {
          console.warn(
            "Smooth scrolling require some sections or steps to scroll to :)"
          );
          return false;
        }

        // Allow to customize the animation engine ( jQuery / GSAP / velocity / ... )
        _animation = function (target) {
          target = typeof target === "number" ? target : $(target).offset().top;
          return options.smoothScrollAnimation(target);
        };

        // Activate smooth scrolling
        if (options.smoothScrollEnabled) this.smoothScroll();

        // Scroll to top handling
        if (options.scrollToTopBtn) {
          options.scrollToTopBtn.addEventListener("click", function () {
            options.smoothScrollAnimation(0);
          });
        }

        // Throttle for performances gain
        throttledGetScrollPosition = throttle(this.getScrollPosition).bind(
          this
        );
        window.addEventListener("scroll", throttledGetScrollPosition);
        window.addEventListener("resize", throttledGetScrollPosition);

        this.getScrollPosition();
      },

      getScrollPosition: function () {
        this.scrollPosition = window.pageYOffset || window.scrollY;
        if (options.stepsCheckEnabled) this.checkActiveStep();
        if (typeof options.onScroll === "function")
          options.onScroll(this.scrollPosition);
      },

      scrollPercentage: function () {
        var body = document.body,
          html = document.documentElement,
          documentHeight = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
          );

        var percentage = Math.round(
          (this.scrollPosition / (documentHeight - window.innerHeight)) * 100
        );

        if (percentage < 0) percentage = 0;
        if (percentage > 100) percentage = 100;
        // console.log(percentage,"percentagesss")
        return percentage;
      },

      doSmoothScroll: function (e) {
        if (e.target.nodeName === "A") {
          e.preventDefault();
          if (
            location.pathname.replace(/^\//, "") ===
            e.target.pathname.replace(/^\//, "") &&
            location.hostname === e.target.hostname
          ) {
            var targetStep = document.querySelector(e.target.hash);
            targetStep
              ?
              _animation(targetStep) :
              console.warn(
                "Hi! You should give an animation callback function to the Scroller module! :)"
              );
          }
        }
      },

      smoothScroll: function () {
        if (options.navigationContainer !== null)
          options.navigationContainer.addEventListener(
            "click",
            this.doSmoothScroll
          );
      },

      checkActiveStep: function () {
        var scrollPosition = this.scrollPosition;

        [].forEach.call(options.steps, function (step) {
          var bBox = step.getBoundingClientRect(),
            position = step.offsetTop,
            height = position + bBox.height;

          if (
            scrollPosition >= position &&
            scrollPosition < height &&
            currentStep !== step
          ) {
            currentStep = step;
            step.classList.add(self.currentStepClass);
            if (typeof options.onStepChange === "function")
              options.onStepChange(step);
          }
          step.classList.remove(options.currentStepClass);
        });
      },

      destroy: function () {
        window.removeEventListener("scroll", throttledGetScrollPosition);
        window.removeEventListener("resize", throttledGetScrollPosition);
        options.navigationContainer.removeEventListener(
          "click",
          this.doSmoothScroll
        );
      },
    };
  })();
  //////////////////////
  // END scroll Module
  //////////////////////

  //////////////////////
  // APP init
  //////////////////////

  var scrollToTopBtn = document.querySelector(".Scroll-to-top"),
    steps = document.querySelectorAll(".js-scroll-step"),
    navigationContainer = document.querySelector(".Quick-navigation"),
    links = navigationContainer.querySelectorAll("a"),
    progressIndicator = document.querySelector(".Scroll-progress-indicator");

  ScrollManager.init({
    steps: steps,
    scrollToTopBtn: scrollToTopBtn,
    navigationContainer: navigationContainer,
    links: links,

    // Customize onScroll behavior
    onScroll: function () {
      var percentage = ScrollManager.scrollPercentage();
      percentage >= 90 ?
        scrollToTopBtn.classList.add("visible") :
        scrollToTopBtn.classList.remove("visible");
      //  console.log(percentage, "percentage");
      if (percentage >= 10) {
        progressIndicator.innerHTML = percentage + "%";
        progressIndicator.classList.add("visible");
      } else {
        progressIndicator.classList.remove("visible");
      }
    },

    // Behavior when a step changes
    // default : highlight links

    // onStepChange: function (step) {},

    // Customize the animation with jQuery, GSAP or velocity
    // default : jQuery animate()
    // Eg with GSAP scrollTo plugin

    //smoothScrollAnimation: function (target) {
    //		TweenLite.to(window, 2, {scrollTo:{y:target}, ease:Power2.easeOut});
    //}
  });

  //////////////////////
  // END APP init
  //////////////////////
})();


$(document).ready(function(){
  // Basically, we can click anywhere in the body to get our .on() events to work.
  var $body = $(document.body);

  // Click on a frame to expand it
  $body.on("click",".lid",function()
  {
     var $box = $(this).parent();
     var $lid = $box.children(".lid");
     var $stuff = $box.children(".stuff"); // instead of $(this)
     var $close = $box.children(".close");
     var $width  = 300;
     var $height = 300;
    
     $lid.css({
       "cursor" : "default"
     });
    
     $lid.animate({
       "width" : "0px",
       "height" : "0px",
       "opacity" : 0.0
     }, "fast");
    
     $box.animate({
       "width" : $width,
       "height": $height
     },"fast");
    
     $stuff.css({
      "width" : $width,
      "height": $height,
      /* "position": "fixed", */
      "overflow" : "scroll",
      "z-index" : 4
     });    
     // TODO: Eventually, box growth animation
    $close.fadeIn("fast");
  });

  // Click on the return box to restore it back to its screen position.
  $body.on("click",".close",function()
  {
     var $box   = $(this).parent();
     var $lid   = $box.children(".lid");
     var $stuff = $box.children(".stuff"); 
    var $close = $box.children(".close"); // Instead of $(this)
    var $width  = 100;
    var $height = 100;
    // Do what we did in reverse!
     $close.fadeOut("fast");
     // TODO: Eventually, box shrink animation
     $stuff.css({
      "width" : $width,
      "height": $height,
      /* "position" : "absolute", */
      "overflow" : "hidden",
      "z-index"  : 0
     });
     $box.animate({
       "width" : $width,
       "height": $height
     },"fast");
    
    $lid.animate({
      "width" : "100px",
      "height" : "100px",
      "opacity" : 1.0
    },"fast");
    $lid.css({
      "cursor" : "pointer"
    });
  });
});
/*
function updateChart() {
  async function fetchData() {
    const url = "./json/fixtureweather.json";

    const response = await fetch(url);
    //wait until the request has been completed;
    const datapoints = await response.json();
    console.log(datapoints, "datapoints");
    return datapoints;
    //
  };

  fetchData().then(datapoints => {
    const monthInfo = datapoints.SectionTwo[0].infoForSectionTwo.map(function (index) {
      return index.Stadium;
    });
    console.log(monthInfo, "monthInfo outside return");
  myChart.config.data.labels = monthInfo;
  myChart.update();
  });
}

updateChart();



const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "whatever",
      data: [18, 12, 6, 9, 12, 3, 9],
      backgroundColor: [
        "rgba(255, 26, 104, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(0, 0, 0, 0.2)",
      ],
      borderColor: [
        "rgba(255, 26, 104, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(0, 0, 0, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

// config
const config = {
  type: "bar",
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};
const myChart = new Chart(document.getElementById("myChart"), config);
// render init block

*/
// let allSectionLogo = document.querySelectorAll("#LogoInsert");
// for (i = 0; i< allSectionLogo.length; i++) {
//   console.log(allSectionLogo);
// }

// window.onload = function () {


//   let imgLogoQuatar = document.createElement("img");
//   imgLogoQuatar.src = "./images/section5/Stadion.png";
//   imgLogoQuatar.setAttribute("alt", "logo");
//   imgLogoQuatar.classList.add("quatarLogo", "lazy");
//   let srcLogo = document.getElementById("LogoInsert");
//   console.log(srcLogo,"srcLogo");
//   console.log(imgLogoQuatar,"imgLogoQuatar");

//   srcLogo.appendChild(imgLogoQuatar);
//   for (i = 0; i< srcLogo.length; i++) {
//     console.log(i, "youudasas")
//     console.log(srcLogo.length, "srcLogo.length")

//     }
// };

function expand(card) {
  card.classList.toggle('profile--expanded');

  // If card is not expanded after toggle, add 'unexpanded' class
  if (!card.classList.contains('profile--expanded')) card.classList.toggle('profile--unexpanded');
  // Else if card is expanded after toggle and still contains 'unexpanded' class, remove 'unexpanded'
  else if (card.classList.contains('profile--expanded') && card.classList.contains('profile--unexpanded')) card.classList.toggle('profile--unexpanded');
}

function toggleTheme() {
  let docu = document.querySelector('html');

  docu.classList.toggle('light-theme');
  docu.classList.toggle('dark-theme');
}




$("body").append('<style id="lightbox-animations" type="text/css"></style>');

/* Click on the container */
$("#container-1").on('click', function () {
  /* The position of the container will be set to fixed, so set the top & left properties of the container */
  var bounding_box = $("#container-1").get(0).getBoundingClientRect();
  $(this).css({
    top: bounding_box.top + 'px',
    left: bounding_box.left + 'px'
  });

  /* Set container to fixed position. Add animation */
  $(this).addClass('in-animation');

  $(this).css('overflow', 'auto');

  /* An empty container has to be added in place of the lightbox container so that the elements below don't come up
  Dimensions of this empty container is the same as the original container */
  $('<div id="empty-container"></div>').insertAfter("#container-1");

  /* To animate the container from full-screen to normal, we need dynamic keyframes */
  var styles = ``;
  styles = `@keyframes outlightbox {
		0% {
      height: 100%;
      width: 100%;
      top: 0px;
      left: 0px;
		}
		50% {
      height: 200px;
      top: ${bounding_box.y}px;
		}
		100% {
      height: 200px;
      width: 500px;
      top: ${bounding_box.y}px;
      left: ${bounding_box.x}px;
		}
	}`;

  /* Add keyframe to CSS */
  $("#lightbox-animations").get(0).sheet.insertRule(styles, 0);

  /* Hide the window scrollbar */
  $("body").css('overflow', 'hidden');
});

/* Click on close button when full-screen */
$("#close").on('click', function (e) {
  $("#close").hide();

  /* Window scrollbar normal */
  $("body").css('overflow', 'auto');

  /* Show animation */
  $("#container-1").addClass('out-animation');

  e.stopPropagation();
});

/* On animationend : from normal to full screen & full screen to normal */
$("#container-1").on('animationend', function (e) {
  /* On animation end from normal to full-screen */
  if (e.originalEvent.animationName == 'inlightbox') {
    $("#close").show();
  }
  /* On animation end from full-screen to normal */
  else if (e.originalEvent.animationName == 'outlightbox') {
    $("#container-1").css('overflow', 'hidden');
    /* Remove fixed positioning, remove animation rules */
    $("#container-1").removeClass('in-animation').removeClass('out-animation');

    /* Remove the empty container that was earlier added */
    $("#empty-container").remove();

    /* Delete the dynamic keyframe rule that was earlier created */
    $("#lightbox-animations").get(0).sheet.deleteRule(0);
  }
});
// const projectData = [{
//     coverImg: './images/section3/bg-section3.png'
//   },
//   {
//     coverImg: './images/section3/bg-section3.png'
//   },
//   {
//     coverImg: './images/section3/bg-section3.png'
//   },
//   {
//     coverImg: 'https://via.placeholder.com/350x150?text=image4'
//   },
//   {
//     coverImg: 'https://via.placeholder.com/350x150?text=image5'
//   },
//   {
//     coverImg: 'https://via.placeholder.com/350x150?text=image6'
//   },
//   {
//     coverImg: 'https://via.placeholder.com/350x150?text=image7'
//   },
//   {
//     coverImg: 'https://via.placeholder.com/350x150?text=image8'
//   }
// ];


// document.addEventListener("DOMContentLoaded", function (event) {

//   const projects_container = document.createElement("div");
//   projects_container.classList.add('projects_container');
//   for (i = 0; i < projectData.length; i++) {
//     const card_block_El = document.createElement("div");
//     const card_img_div_El = document.createElement("div");
//     const card_img_El = document.createElement("img");
//     card_img_El.src = projectData[i].coverImg;

//     card_img_div_El.appendChild(card_img_El);
//     card_block_El.appendChild(card_img_div_El);
//     projects_container.appendChild(card_block_El);
//   }


//   document.getElementById("testMM").style.display = "none";
//   document.getElementById("testMM").appendChild(projects_container);


//   var CheckImages = function () {
//     var loadedimages = 0;
//     var images = document.getElementById("testMM").getElementsByTagName("img");
//     console.log(images, "iumagesss");
//     for (i = 0; i < images.length; i++) {
//       if (images[i].complete && images[i].naturalHeight !== 0) {
//         loadedimages++;
//       }

//     }
//     if (images.length == loadedimages) {
//       document.getElementById("testM3").style.display = "block";
//     } else {
//       setTimeout(CheckImages, 1000);
//     }
//   }
//   CheckImages();
// });