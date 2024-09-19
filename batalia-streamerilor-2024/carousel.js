document.addEventListener('DOMContentLoaded', () => {
  //carousel
    $(document).ready(function() {
    
      const slidesData = [
        { 
          src: './assets/png/sorin2.webp', 
          alt: 'Nature Image', 
          link: 'https://example.com/nature' 
        },
        { 
          src: './assets/png/stero2.webp', 
          alt: 'City Image', 
          link: 'https://example.com/city' 
        },
        { 
          src: './assets/png/sorin2.webp', 
          alt: 'Water Image', 
          link: 'https://example.com/water' 
        },
        { 
          src: './assets/png/stero2.webp', 
          alt: 'Forest Image', 
          link: 'https://example.com/forest' 
        },
        { 
          src: './assets/png/sorin2.webp', 
          alt: 'Architecture Image', 
          link: 'https://example.com/architecture' 
        },
        { 
          src: './assets/png/stero2.webp', 
          alt: 'Landscape Image', 
          link: 'https://example.com/landscape' 
        },
        { 
          src: './assets/test.png', 
          alt: 'Nature Image', 
          link: 'https://example.com/nature' 
        },
        { 
          src: './assets/test.png', 
          alt: 'City Image', 
          link: 'https://example.com/city' 
        },
        { 
          src: './assets/test.png', 
          alt: 'Water Image', 
          link: 'https://example.com/water' 
        },
        { 
          src: './assets/test.png', 
          alt: 'Forest Image', 
          link: 'https://example.com/forest' 
        },
        { 
          src: './assets/test.png',  
          alt: 'Architecture Image', 
          link: 'https://example.com/architecture' 
        },
        { 
          src: './assets/test.png', 
          alt: 'Landscape Image', 
          link: 'https://example.com/landscape' 
        },
        { 
          src: './assets/test.png', 
          alt: 'Landscape Image', 
          link: 'https://example.com/landscape' 
        }
      ];
    
  
      const $blazeTrack = $('.blaze-track');
      slidesData.forEach(function(slide) {
        const $slideDiv = $('<div>'); 
        const $linkElement = $('<a>'); 
        const $imgElement = $('<img>'); 
        $imgElement.attr('src', slide.src);
        $imgElement.attr('alt', slide.alt);
        $linkElement.attr('href', slide.link);
        $linkElement.attr('target', '_blank'); 
        $linkElement.append($imgElement);
        $slideDiv.append($linkElement);
        $blazeTrack.append($slideDiv);
      });
    

      new BlazeSlider($('.blaze-slider')[0], {
        all: {
          enableAutoplay: true,
          autoplayInterval: 1800,
          transitionDuration: 500,
          slidesToShow: 6,
        },
        '(max-width: 900px)': {
          slidesToShow: 3,
        },
        '(max-width: 600px)': {
          slidesToShow: 2,
        },
      });
    
   
      const $sections = $('.section'); 
      const observerOptions = {
        root: null, 
        threshold: 0.02 
      };
    
      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            $(entry.target).addClass('visible'); 
          } else {
            $(entry.target).removeClass('visible'); 
          }
        });
      }, observerOptions);
   
      $sections.each(function() {
        observer.observe(this);
      });
    
      $('#scrollToTop').on('click', function() {
        $('html, body').animate({
          scrollTop: $('#section1').offset().top
        }, 'slow');
      });
    });
})
    