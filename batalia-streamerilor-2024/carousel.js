document.addEventListener("DOMContentLoaded", () => {
  let gamesDataFetched = false; // Moved to outer scope
  let gamesData = []; // Moved to outer scope

  $(document).ready(init);

  // Initialization function
  function init() {
    const slidesData = getSlidesData(); // Images for the first carousel

    // Initialize first carousel
    populateFirstCarousel(slidesData);
    initializeCarousel("#image-carousel", getFirstCarouselOptions());

    // Fetch and populate second carousel images
    fetchGames().then((games) => {
      gamesData = games;
      populateSecondCarousel(gamesData);
      initializeCarousel("#games-carousel", getSecondCarouselOptions());
    });

    // Setup Scroll to Top button functionality
    // setupScrollToTop();

    // Observe visibility of sections and footer
    observeSections();
  }

  // Function to handle visibility of sections
  function handleSectionVisibility(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting || entry.target.getBoundingClientRect().top < window.innerHeight) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }

  // Observer to track visibility of sections
  function observeSections() {
    const sectionObserver = new IntersectionObserver(handleSectionVisibility, {
      root: null,
      threshold: 0.25,
    });

    document.querySelectorAll("._page").forEach((section) => sectionObserver.observe(section));
    const footer = document.querySelector("footer");
    if (footer) sectionObserver.observe(footer);
  }

  // Function to get predefined slide data for the first carousel
  function getSlidesData() {
    return [
      { src: "./assets/icons_streamers/testpacanela.webp", alt: "pacanela" },
      { src: "./assets/icons_streamers/stero.webp", alt: "stero" },
      { src: "./assets/icons_streamers/sorin.webp", alt: "City Image" },
      { src: "./assets/icons_streamers/razvan.webp", alt: "City Image" },
      { src: "./assets/icons_streamers/quikanu.webp", alt: "City Image" },
      { src: "./assets/icons_streamers/gamblers.webp", alt: "City Image" },
      { src: "./assets/icons_streamers/fury.webp", alt: "City Image" },
      { src: "./assets/icons_streamers/cosmina.webp", alt: "City Image" },
      { src: "./assets/icons_streamers/aps2.webp", alt: "City Image" },
      { src: "./assets/icons_streamers/anna.webp", alt: "City Image" },
      { src: "./assets/icons_streamers/andyvip.webp", alt: "City Image" },
      { src: "./assets/icons_streamers/alexmihai.webp", alt: "Nature Image" },
      { src: "./assets/icons_streamers/danutu.webp", alt: "City Image" },
    ];
  }

  // Function to populate the first carousel
  function populateFirstCarousel(slidesData) {
    const $blazeTrack1 = $("#image-carousel .blaze-track");
    $blazeTrack1.empty();
    slidesData.forEach((slide) => {
      const $slideDiv = $("<div>");
      const $linkElement = $("<a>");
 const $imgElement = $("<img>").attr({ src: slide.src, alt: slide.alt, loading: "lazy" });
      $linkElement.attr("target", "_blank").append($imgElement);
      $slideDiv.append($linkElement);
      $blazeTrack1.append($slideDiv);
    });
  }

  // Function to fetch games data asynchronously
  async function fetchGames() {
    if (gamesDataFetched) return gamesData;

    try {
      const response = await fetch("./games_new.json");
      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      if (data.status && data.data && data.data.games) {
        gamesDataFetched = true;
        return data.data.games.map((game) => ({
          ...game,
          image_url: game.image_url ? game.image_url.replace(game.id, game.id - 1) : "",
        }));
      } else {
        console.log("No games found or API returned an error.");
        return [];
      }
    } catch (error) {
      console.error("Error fetching games:", error);
      return [];
    }
  }

  // Function to populate the second carousel
  function populateSecondCarousel(gamesData) {
    const $blazeTrack2 = $("#games-carousel .blaze-track");
    $blazeTrack2.empty();
  
    gamesData.forEach((game, index) => {
      if (game.image_url && game.game_url) {
        const gameElement = `
          <div class="game relative" data-index="${index}">
            <div class="parent-game d-flex-center flex-between flex-col h-full">
              <a href="${game.game_url}" target="_blank">
                <!-- Adding loading="lazy" attribute to the image -->
                <img src="${game.image_url}" alt="${game.name}" loading="lazy">
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
      }
    });
  }
  

  // Function to initialize a BlazeSlider carousel
  function initializeCarousel(selector, options) {
    const sliderElement = $(selector)[0];
    if (sliderElement) {
      new BlazeSlider(sliderElement, options);
    }
  }

  // Get the first carousel configuration options
  function getFirstCarouselOptions() {
    return {
      all: {
        enableAutoplay: false,
        autoplayInterval: 1800,
        autoplayDirection: "to left",
        transitionTimingFunction: "ease",
        slidesToScroll: 1,
        stopAutoplayOnInteraction: true,
        loop: true,
      },
    };
  }

  // Get the second carousel configuration options
  function getSecondCarouselOptions() {
    return {
      all: {
        enableAutoplay: false,
        autoplayInterval: 2000,
        transitionTimingFunction: "ease",
        autoplayDirection: "to right",
        slidesToScroll: 1,
        stopAutoplayOnInteraction: true,
        loop: true,
      },
    };
  }

  // Setup Scroll to Top button
  // function setupScrollToTop() {
  //   $("#scrollToTop").on("click", function () {
  //     $("html, body").animate({ scrollTop: $("#section1").offset().top }, "slow");
  //   });

  //   $(window).scroll(function () {
  //     if ($(this).scrollTop() > 200) {
  //       $("#scrollToTop").fadeIn();
  //     } else {
  //       $("#scrollToTop").fadeOut();
  //     }
  //   });
  // }
});
