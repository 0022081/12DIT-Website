// Document Event Listener
document.addEventListener('DOMContentLoaded', () => {
  
  // Navigation Bar --------------------------------------------
  const nav = document.getElementById('nav');
  const orginalColor = getComputedStyle(nav).backgroundColor;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      nav.style.backgroundColor = 'rgba(9, 7, 50, 0.8)'
    } else {
      nav.style.backgroundColor = orginalColor
    }
  });


  // Swiper ---------------------------------------------------
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 2000,
    effect: 'coverflow',
    centeredSlides: true,
  
    // Swiper Slide effect
    coverflowEffect: {
      rotate: 30,
      stretch: 10,
      depth: 200,
      modifier: 1,
      slideShadows: false,
    },
    
    // Swiper autoplay
    autoplay: {
      delay: 3200,
      disableOnInteraction: false,
    },
    
    // Swiper Pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Swiper Navigation
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
 



