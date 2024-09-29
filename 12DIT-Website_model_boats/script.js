// Document Event Listener
document.addEventListener('DOMContentLoaded', () => {
  
  // Navigation Bar
  const nav = document.getElementById('nav');
  const orginalColor = getComputedStyle(nav).backgroundColor;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      nav.style.backgroundColor = 'rgba(9, 7, 50, 0.8)'
    } else {
      nav.style.backgroundColor = orginalColor
    }
  });


  // Swiper
  const swiper = new Swiper('.swiper', {
    
    
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1200,
    effect: 'coverflow',
    centeredSlide: true,

    coverflow: {
      slideShadows: false,
    },

    // Autoplay
    autoplay: {
      delay: 3000,
      disableOninteraction: false,
    },

    // Pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation
    navigation: {
      nextEl: '.swiper-button-next',
      prevEL: '.swiper-button-prev',
    },
  });
});
 



