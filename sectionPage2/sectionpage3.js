$(function () {
    $.scrollify({
        section: ".panel",
        scrollbars: true,
        sectionName: "section-name",
        interstitialSection: "",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset: 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll: true,
        
        before: function (i, panels,section) {
            console.log(i,"i");
            var ref = panels[i].attr("data-section-name");
            $(".panel.actived").removeClass("actived");
            $("[data-section-name=" + ref + "]").addClass("actived");
            // $('".' + ref+'"').addClass("actived");

            $(".pagination .active").removeClass("active");
            $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
            // var cc = ref === "five",
            //     cc2 = ref === "second";
            //     cc3 = ref === "third";
            //     console.log(cc,"cc");
            //     console.log(cc2,"cc2");
            //     console.log(cc3,"cc2");
                if (i === 1) {
                    $('.panel h1').addClass("fadeIn");
                    console.log(i,"test h1")
                  }
                
                  if (i !== 1) {
                    $('.panel h1').removeClass("fadeIn");
                    console.log(i,"remove test h1")
                  }
                
                  if (i === 2) {
                    $('.panel h2').addClass("slideInUp");
                  }
                
                  if (i !== 2) {
                    $('.panel h2').removeClass("slideInUp");
                  }

            // if (cc) {
            //     $(".panel4 .content").addClass("moved");
                
            // } else {
            //     $(".panel4 .content").removeClass("moved");
            // }

            // if (cc2) {
            //     $(".panel1").addClass("actived");
            // } else {
            //     $(".panel1").removeClass("actived");
            // }
     
   
        },
        afterRender: function () {
            var pagination = "<ul class=\"pagination\">";
            var activeClass = "";
            $(".panel").each(function (i) {
                console.log(i , "i after")
                activeClass = "";
                if (i === 0) {
                    activeClass = "active";
                }
                pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
            });

            pagination += "</ul>";

            $(".home").append(pagination);
            console.log(pagination, "pagination")
        }
        
    });
   


    /*
  
    Tip: The two click events below are the same:
  
    $(".pagination a").on("click",function() {
      $.scrollify.move($(this).attr("href"));
    });
  
    */
    $(".pagination a").on("click", $.scrollify.move);

});







// (function () {
//     const scrollElements = document.querySelectorAll(".js-scroll");
//     console.log(scrollElements, "scrollelement")
//     // for elements inside
//     const elementInView = (el, dividend = 1) => {
//         const elementTop = el.getBoundingClientRect().top;
//         // console.log(elementTop, "elementTop");
//         return (
//             elementTop <=
//             (window.innerHeight || document.documentElement.clientHeight) / dividend
//         );
//     };
//     // for elements outside
//     const elementOutofView = (el) => {
//         const elementTop = el.getBoundingClientRect().top;

//         return (
//             elementTop > (window.innerHeight || document.documentElement.clientHeight)
//         );
//     };

//     const displayScrollElement = (element) => {
//         element.classList.add("scrolled");
//     };


//     const hideScrollElement = (element) => {
//         element.classList.remove("scrolled");
//     };

//     const handleScrollAnimation = () => {
//         scrollElements.forEach((el) => {
//             if (elementInView(el, 1.25)) {
//                 displayScrollElement(el);
//             } else if (elementOutofView(el)) {
//                 hideScrollElement(el)
//             }
//         })
//     }

//     window.addEventListener("scroll", () => {
//         handleScrollAnimation();
//     });

//     //////////////////////
//     // Utils smooth click on nav bar
//     //////////////////////
//     // Default   precented
//     function throttle(fn, delay, scope) {

//         delay = delay || 250;
//         var last, defer;
//         return function () {
//             var context = scope || this,
//                 now = +new Date(),
//                 args = arguments;
//             if (last && now < last + delay) {
//                 clearTimeout(defer);
//                 defer = setTimeout(function () {
//                     last = now;
//                     fn.apply(context, args);
//                 }, delay);
//             } else {
//                 last = now;
//                 fn.apply(context, args);
//             }
//         }
//     }

//     function extend(destination, source) {
//         for (var k in source) {
//             if (source.hasOwnProperty(k)) {
//                 destination[k] = source[k];
//             }
//         }
//         return destination;
//     }


//     //////////////////////
//     // END Utils
//     //////////////////////

//     //////////////////////
//     // Scroll Module
//     //////////////////////

//     var ScrollManager = (function () {
//         var defaults = {
//                 steps: true,
//                 navigationContainer: null,
//                 links: null,
//                 scrollToTopBtn: null,
//                 navigationElementClass: '.Quick-navigation',
//                 currentStepClass: 'current',
//                 smoothScrollEnabled: true,
//                 stepsCheckEnabled: true,

//                 // Callbacks
//                 onScroll: null,

//                 onStepChange: function (step) {
//                     var self = this;
//                     var relativeLink = [].filter.call(options.links, function (link) {
//                         link.classList.remove(self.currentStepClass);
//                         return link.hash === '#' + step.id;
//                     });
//                     relativeLink[0].classList.add(self.currentStepClass);
//                 },
//                 // Provide a default scroll animation
//                 smoothScrollAnimation: function (target) {
//                     $('html, body').animate({
//                         scrollTop: target
//                     }, 'slow');
//                 }
//             },

//             options = {};

//         // Privates
//         var _animation = null,
//             currentStep = null,
//             throttledGetScrollPosition = null;

//         return {

//             scrollPosition: 0,

//             init: function (opts) {

//                 options = extend(defaults, opts);

//                 if (options.steps === null) {
//                     console.warn('Smooth scrolling require some sections or steps to scroll to :)');
//                     return false;
//                 }

//                 // Allow to customize the animation engine ( jQuery / GSAP / velocity / ... )
//                 _animation = function (target) {
//                     target = typeof target === 'number' ? target : $(target).offset().top;
//                     return options.smoothScrollAnimation(target);
//                 };

//                 // Activate smooth scrolling
//                 if (options.smoothScrollEnabled) this.smoothScroll();

//                 // Scroll to top handling
//                 if (options.scrollToTopBtn) {
//                     options.scrollToTopBtn.addEventListener('click', function () {
//                         options.smoothScrollAnimation(0);
//                     });
//                 }

//                 // Throttle for performances gain
//                 throttledGetScrollPosition = throttle(this.getScrollPosition).bind(this);
//                 window.addEventListener('scroll', throttledGetScrollPosition);
//                 window.addEventListener('resize', throttledGetScrollPosition);

//                 this.getScrollPosition();
//             },

//             getScrollPosition: function () {
//                 this.scrollPosition = window.pageYOffset || window.scrollY;
//                 if (options.stepsCheckEnabled) this.checkActiveStep();
//                 if (typeof options.onScroll === 'function') options.onScroll(this.scrollPosition);
//             },

//             scrollPercentage: function () {
//                 var body = document.body,
//                     html = document.documentElement,
//                     documentHeight = Math.max(body.scrollHeight, body.offsetHeight,
//                         html.clientHeight, html.scrollHeight, html.offsetHeight);

//                 var percentage = Math.round(this.scrollPosition / (documentHeight - window.innerHeight) * 100);
//                 if (percentage < 0) percentage = 0;
//                 if (percentage > 100) percentage = 100;
//                 return percentage;
//             },

//             doSmoothScroll: function (e) {
//                 if (e.target.nodeName === 'A') {
//                     e.preventDefault();
//                     if (location.pathname.replace(/^\//, '') === e.target.pathname.replace(/^\//, '') && location.hostname === e.target.hostname) {
//                         var targetStep = document.querySelector(e.target.hash);
//                         targetStep ? _animation(targetStep) : console.warn('Hi! You should give an animation callback function to the Scroller module! :)');
//                     }
//                 }
//             },

//             smoothScroll: function () {
//                 if (options.navigationContainer !== null) options.navigationContainer.addEventListener('click', this.doSmoothScroll);
//             },

//             checkActiveStep: function () {
//                 var scrollPosition = this.scrollPosition;

//                 [].forEach.call(options.steps, function (step) {
//                     var bBox = step.getBoundingClientRect(),
//                         position = step.offsetTop,
//                         height = position + bBox.height;

//                     if (scrollPosition >= position && scrollPosition < height && currentStep !== step) {
//                         currentStep = step;
//                         step.classList.add(self.currentStepClass);
//                         if (typeof options.onStepChange === 'function') options.onStepChange(step);
//                     }
//                     step.classList.remove(options.currentStepClass);
//                 });
//             },

//             destroy: function () {
//                 window.removeEventListener('scroll', throttledGetScrollPosition);
//                 window.removeEventListener('resize', throttledGetScrollPosition);
//                 options.navigationContainer.removeEventListener('click', this.doSmoothScroll);
//             }
//         }
//     })();
//     //////////////////////
//     // END scroll Module
//     //////////////////////


//     //////////////////////
//     // APP init
//     //////////////////////

//     var scrollToTopBtn = document.querySelector('.Scroll-to-top'),
//         steps = document.querySelectorAll('.js-scroll-step'),
//         navigationContainer = document.querySelector('.Quick-navigation'),
//         links = navigationContainer.querySelectorAll('a'),
//         progressIndicator = document.querySelector('.Scroll-progress-indicator');

//     ScrollManager.init({
//         steps: steps,
//         scrollToTopBtn: scrollToTopBtn,
//         navigationContainer: navigationContainer,
//         links: links,

//         // Customize onScroll behavior
//         onScroll: function () {
//             var percentage = ScrollManager.scrollPercentage();
//             percentage >= 90 ? scrollToTopBtn.classList.add('visible') : scrollToTopBtn.classList.remove('visible');
//             console.log(percentage, "percentage");
//             if (percentage >= 10) {
//                 progressIndicator.innerHTML = percentage + "%";
//                 progressIndicator.classList.add('visible');
//             } else {
//                 progressIndicator.classList.remove('visible');
//             }

//         },

//         // Behavior when a step changes
//         // default : highlight links 

//         // onStepChange: function (step) {},

//         // Customize the animation with jQuery, GSAP or velocity 
//         // default : jQuery animate()
//         // Eg with GSAP scrollTo plugin

//         //smoothScrollAnimation: function (target) {
//         //		TweenLite.to(window, 2, {scrollTo:{y:target}, ease:Power2.easeOut});
//         //}

//     });

//     //////////////////////
//     // END APP init
//     //////////////////////

// })();