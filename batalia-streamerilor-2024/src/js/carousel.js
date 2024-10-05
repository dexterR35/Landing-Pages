document.addEventListener("DOMContentLoaded", () => {
  let gamesDataFetched = false;
  let gamesData = []; 

  $(document).ready(init);
  function init() {
    const slidesData = getSlidesData();
    // Init first carousel
    populateFirstCarousel(slidesData);
    initializeCarousel("#image-carousel", getFirstCarouselOptions());
    // Fetch and populate second carousel images
    fetchGames().then((games) => {
      gamesData = games;
      populateSecondCarousel(gamesData);
      initializeCarousel("#games-carousel", getSecondCarouselOptions());
    });
    // Observe visibility of sections and footer
    observeSections();
  }

  function getSlidesData() {
    return [
      { src: "./assets/icons_streamers/testpacanela.webp", alt: "testpacanela" },
      { src: "./assets/icons_streamers/stero.webp", alt: "stero" },
      { src: "./assets/icons_streamers/sorin.webp", alt: "sorin" },
      { src: "./assets/icons_streamers/razvan.webp", alt: "razvan" },
      { src: "./assets/icons_streamers/gamblers.webp", alt: "gamblers" },
      { src: "./assets/icons_streamers/fury.webp", alt: "fury" },
      { src: "./assets/icons_streamers/cosmina.webp", alt: "cosmina" },
      { src: "./assets/icons_streamers/aps2.webp", alt: "aps2" },
      { src: "./assets/icons_streamers/anna.webp", alt: "anna" },
      { src: "./assets/icons_streamers/andyvip.webp", alt: "andyvip" },
      { src: "./assets/icons_streamers/alexmihai.webp", alt: "alexmihai" },
      { src: "./assets/icons_streamers/danutu.webp", alt: "danutu" },
    ];
  }

  // handle visibility of sections
  function handleSectionVisibility(entries) {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting ||
        entry.target.getBoundingClientRect().top < window.innerHeight
      ) {
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
    document
      .querySelectorAll("._page")
      .forEach((section) => sectionObserver.observe(section));
    const footer = document.querySelector("footer");
    if (footer) sectionObserver.observe(footer);
  }


  // populate first carousel
  function populateFirstCarousel(slidesData) {
    const $blazeTrack1 = $("#image-carousel .blaze-track");
    $blazeTrack1.empty();
    slidesData.forEach((slide) => {
      const $slideDiv = $("<div class='pointer'>");
      const $linkElement = $("<a>");
      const $imgElement = $("<img>").attr({
        src: slide.src,
        alt: slide.alt,
        loading: "lazy",
      });
      $linkElement.attr("target", "_blank").append($imgElement);
      $slideDiv.append($linkElement);
      $blazeTrack1.append($slideDiv);
    });
  }

  //  fetch games data 
  async function fetchGames() {
    if (gamesDataFetched) return gamesData;
    try {
      const response = await fetch("./src/games_new.json");
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      if (data.status && data.data && data.data.games) {
        gamesDataFetched = true;
        return data.data.games.map((game) => ({
          ...game,
          image_url: game.image_url
            ? game.image_url.replace(game.id, game.id - 1)
            : "",
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

  // populate second carousel
  function populateSecondCarousel(gamesData) {
    const $blazeTrack2 = $("#games-carousel .blaze-track");
    $blazeTrack2.empty();
    gamesData.forEach((game, index) => {
      if (game.image_url && game.game_url) {
        const gameElement = `
          <div class="game relative" data-index="${index}">
            <div class="parent-game d-flex-center flex-between flex-col h-full">
              <a href="${game.game_url}" target="_blank" class="pointer">
                <!-- Adding loading="lazy" attribute to the image -->
                <img src="${game.image_url}" alt="${game.name}" loading="lazy">
              </a>
              <div class="footer-game pointer">
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

  // initialize BlazeSlider carousel
  function initializeCarousel(selector, options) {
    const sliderElement = $(selector)[0];
    if (sliderElement) {
      new BlazeSlider(sliderElement, options);
    }
  }

  // first carousel config options
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

  // second carousel config options
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
});
