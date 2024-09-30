document.addEventListener("DOMContentLoaded", () => {
  $(document).ready(function () {
    let currentSlideIndex = 0;
    let sliderInstance1 = null;
    let sliderInstance2 = null;
    let isCarousel1Visible = false;
    let isCarousel2Visible = false;
    let gamesDataFetched = false;
    let gamesData = [];
    let slidesDataFetched = false;

    // Data for the first carousel (static images)
    const slidesData = [
      {
        src: "./assets/png/sorin2.webp",
        alt: "City Image",
    
      },
      {
        src: "./assets/png/sorin2.webp",
        alt: "City Image",
    
      },
      {
        src: "./assets/png/sorin2.webp",
        alt: "City Image",
    
      },
      {
        src: "./assets/png/sorin2.webp",
        alt: "City Image",
    
      },
      {
        src: "./assets/png/sorin2.webp",
        alt: "City Image",
    
      },
      {
        src: "./assets/png/sorin2.webp",
        alt: "City Image",
    
      },
      {
        src: "./assets/png/sorin2.webp",
        alt: "City Image",
    
      },
      {
        src: "./assets/png/sorin2.webp",
        alt: "City Image",
    
      },
      {
        src: "./assets/png/sorin2.webp",
        alt: "City Image",
    
      },
      {
        src: "./assets/png/sorin2.webp",
        alt: "City Image",
    
      },
      {
        src: "./assets/png/sorin2.webp",
        alt: "Nature Image",
  
      },
      {
        src: "./assets/png/sorin2.webp",
        alt: "City Image",
    
      },
      {
        src: "./assets/png/sorin2.webp",
        alt: "City Image",
    
      },
   
    ];

    // Populate the first carousel with images
    function populateFirstCarousel() {
      const $blazeTrack1 = $("#image-carousel .blaze-track");
      $blazeTrack1.empty();
      slidesData.forEach(function (slide) {
        const $slideDiv = $("<div>");
        const $linkElement = $("<a>");
        const $imgElement = $("<img>");
        $imgElement.attr("src", slide.src);
        $imgElement.attr("alt", slide.alt);
        // $linkElement.attr("href", slide.link);
        $linkElement.attr("target", "_blank");
        $linkElement.append($imgElement);
        $slideDiv.append($linkElement);
        $blazeTrack1.append($slideDiv);
      });
    }

    // Initialize the first carousel
    function initializeFirstCarousel() {
      if (!sliderInstance1) {
        sliderInstance1 = new BlazeSlider($("#image-carousel")[0], {
          all: {
            enableAutoplay: false,
            autoplayInterval: 1800,
            // transitionDuration: 500,
            autoplayDirection: "to left",
            transitionTimingFunction: "ease",
            slidesToScroll: 1,
            stopAutoplayOnInteraction: true,
            loop: true,
          },
        });
        console.log("First carousel initialized.");
      }
    }

    // Manually pause autoplay if needed
    function stopAutoplay(sliderInstance) {
      if (sliderInstance && sliderInstance.pause) {
        sliderInstance.pause(); // Pause the autoplay manually
        console.log("Autoplay paused manually.");
      }
    }

    // Destroy the first carousel
    function destroyFirstCarousel() {
      if (sliderInstance1) {
        stopAutoplay(sliderInstance1); // Pause autoplay before destroying
        sliderInstance1.destroy();
        sliderInstance1 = null;
        isCarousel1Visible = false;
        console.log("First carousel destroyed.");
      }
    }

    // Initialize the second carousel
    function initializeSecondCarousel() {
      if (!sliderInstance2) {
        sliderInstance2 = new BlazeSlider($("#games-carousel")[0], {
          all: {
            enableAutoplay: false,
            autoplayInterval: 2000,
            // transitionDuration: 500,
            transitionTimingFunction: "ease",
            autoplayDirection: "to right",
            slidesToScroll: 1,
            stopAutoplayOnInteraction: true,
            loop: true,
          },
        });
        console.log("Second carousel initialized.");

        sliderInstance2.onSlide(
          (pageIndex, firstVisibleSlideIndex, lastVisibleSlideIndex) => {
            console.log({
              pageIndex,
              firstVisibleSlideIndex,
              lastVisibleSlideIndex,
            });
          }
        );
      }
    }

    // Destroy the second carousel
    function destroySecondCarousel() {
      if (sliderInstance2) {
        stopAutoplay(sliderInstance2); // Pause autoplay before destroying
        sliderInstance2.destroy();
        sliderInstance2 = null;
        isCarousel2Visible = false;
        console.log("Second carousel destroyed.");
      }
    }

    // Fetch and display all games in the second carousel
    async function fetchGames() {
      try {
        const response = await fetch("./games_new.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // console.log(data);
        if (data.status && data.data && data.data.games) {
          gamesData = data.data.games.map((game) => ({
            ...game,
            image_url: game.image_url
              ? game.image_url.replace(game.id, game.id - 1) // -1 img id from api !
              : "",
          }));
          gamesDataFetched = true;
          populateSecondCarousel();
        } else {
          console.log("No games found or API returned an error.");
        }
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    }

    // Populate the second carousel with all games data
    function populateSecondCarousel() {
      const $blazeTrack2 = $("#games-carousel .blaze-track");
      $blazeTrack2.empty();

      gamesData.forEach(function (game, index) {
        if (game.image_url && game.game_url) {
          const gameElement = `
            <div class="game relative" data-index="${index}">
              <a href="${game.game_url}" target="_blank" class="play-overlay absolute"><p>Play</p></a>
              <div class="parent-game d-flex-center flex-between flex-col h-full">
                <a href="${game.game_url}" target="_blank">
                  <img src="${game.image_url}" alt="${game.name}">
                </a>
                <div class="footer-game">
                  <div class="footer-text">
                    <p>PragmaticPlay</p>
                    <p><strong>${game.name}</strong></p>
                  </div>
                </div>
              </div>
            </div>`;
          $blazeTrack2.append(gameElement);
        } else {
          console.warn(`Missing URL for game: ${game.name}`);
        }
      });

      initializeSecondCarousel();

      // Store current slide index on click
      $("#games-carousel .game").on("click", function () {
        currentSlideIndex = $(this).data("index");
      });
    }

    // Observer options for carousels
    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    // Function to handle visibility changes for a carousel
    function handleCarouselVisibility(entries, carousel) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (carousel === "first" && !isCarousel1Visible) {
            destroySecondCarousel();
            if (!slidesDataFetched) {
              populateFirstCarousel();
              slidesDataFetched = true;
            }
            initializeFirstCarousel();
            isCarousel1Visible = true;
          } else if (carousel === "second" && !isCarousel2Visible) {
            destroyFirstCarousel();
            if (!gamesDataFetched) {
              fetchGames();
            } else {
              populateSecondCarousel();
            }
            isCarousel2Visible = true;
          }
        } else {
          if (carousel === "first" && isCarousel1Visible) {
            destroyFirstCarousel();
          } else if (carousel === "second" && isCarousel2Visible) {
            destroySecondCarousel();
          }
        }
      });
    }

    // Create observers for each carousel
    const firstCarouselObserver = new IntersectionObserver((entries) => {
      handleCarouselVisibility(entries, "first");
    }, observerOptions);

    const secondCarouselObserver = new IntersectionObserver((entries) => {
      handleCarouselVisibility(entries, "second");
    }, observerOptions);

    // Observe the carousels
    firstCarouselObserver.observe(document.querySelector("#image-carousel"));
    secondCarouselObserver.observe(document.querySelector("#games-carousel"));

    // Observer options for sections and footer
    const sectionObserverOptions = {
      root: null,
      threshold: 0.15, // Adjust the threshold as needed
    };

    // Callback function for section observer
    function handleSectionVisibility(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }

    // Create the observer for sections and footer
    const sectionObserver = new IntersectionObserver(
      handleSectionVisibility,
      sectionObserverOptions
    );

    // Observe all sections with the 'section' class
    document.querySelectorAll(".section .parent").forEach((section) => {
      sectionObserver.observe(section);
    });

    // Observe the footer
    const footer = document.querySelector("footer");
    if (footer) {
      sectionObserver.observe(footer);
    }
    console.log(footer);

    // Scroll to Top button functionality
    $("#scrollToTop").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: $("#section1").offset().top,
        },
        "slow"
      );
    });

    // Show/Hide Scroll to Top Button Based on Scroll Position
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $("#scrollToTop").fadeIn();
      } else {
        $("#scrollToTop").fadeOut();
      }
    });

    // Initial fetch of games data if not already fetched
    if (!gamesDataFetched) {
      fetchGames();
    }
  });
});
