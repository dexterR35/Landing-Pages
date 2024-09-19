document.addEventListener('DOMContentLoaded', () => {
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
  
    $(document).ready(function() {
      // Data for slides
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
    
      // Loop through slidesData and create the slides dynamically
      const $blazeTrack = $('.blaze-track');
      slidesData.forEach(function(slide) {
        const $slideDiv = $('<div>'); // Create a slide div
        const $linkElement = $('<a>'); // Create the anchor element
        const $imgElement = $('<img>'); // Create the image element
    
        // Set image attributes
        $imgElement.attr('src', slide.src);
        $imgElement.attr('alt', slide.alt);
    
        // Set the link's href attribute
        $linkElement.attr('href', slide.link);
        $linkElement.attr('target', '_blank'); // Optional: open link in a new tab
    
        // Append the image inside the link
        $linkElement.append($imgElement);
        
        // Append the link inside the slide div
        $slideDiv.append($linkElement);
    
        // Add the slide to the track
        $blazeTrack.append($slideDiv);
      });
    
      // Initialize BlazeSlider after dynamically adding slides
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
    
      // Smooth fade-in effect on scroll
      const $sections = $('.section'); // Select all sections
    
      const observerOptions = {
        root: null, // Use the viewport as the root
        threshold: 0.02 // Trigger when 2% of the section is visible
      };
    
      // Create an Intersection Observer instance
      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            $(entry.target).addClass('visible'); // Add 'visible' class when the section is in view
          } else {
            $(entry.target).removeClass('visible'); // Remove 'visible' class when the section is out of view
          }
        });
      }, observerOptions);
    
      // Observe each section
      $sections.each(function() {
        observer.observe(this);
      });
    
      // Smooth scroll to Section 1 on button click
      $('#scrollToTop').on('click', function() {
        $('html, body').animate({
          scrollTop: $('#section1').offset().top
        }, 'slow');
      });
    });
})
    