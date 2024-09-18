document.addEventListener('DOMContentLoaded', () => {
    const slidesData = [
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
  
    const blazeTrack = document.querySelector('.blaze-track');
  
    // Loop through slidesData and create the slides dynamically
    slidesData.forEach((slide) => {
      const slideDiv = document.createElement('div'); // Create a slide div
      const linkElement = document.createElement('a'); // Create the anchor element
      const imgElement = document.createElement('img'); // Create the image element
  
      // Set image attributes
      imgElement.src = slide.src;
      imgElement.alt = slide.alt;
  
      // Set the link's href attribute
      linkElement.href = slide.link;
      linkElement.target = '_blank'; // Optional: open link in a new tab
  
      // Append the image inside the link
      linkElement.appendChild(imgElement);
      
      // Append the link inside the slide div
      slideDiv.appendChild(linkElement);
  
      // Add the slide to the track
      blazeTrack.appendChild(slideDiv);
    });
  
    // Initialize BlazeSlider after dynamically adding slides

    new BlazeSlider(document.querySelector('.blaze-slider'), {
      all: {
        enableAutoplay: true,
        autoplayInterval: 1800,
        transitionDuration: 500,
        slidesToShow: 10,
      },
      '(max-width: 900px)': {
        slidesToShow: 3,
      },
      '(max-width: 600px)': {
        slidesToShow: 2,
      },
    });

    

    // Initialize BlazeSlider after dynamically adding slides

  });