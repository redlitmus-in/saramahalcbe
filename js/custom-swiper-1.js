const swiper = new Swiper('.swiper', {

  autoplay: {
     delay: 3000,
     disableOnInteraction: false
   },

   spaceBetween: 30,
        effect: "fade",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: false,
          clickable: false,
    },

  

});

const modern3dSwiper = new Swiper('#modern-3d-carousel', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  mousewheel: true,
  speed: 700,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// --- Alternating animation logic for hero section ---
function alternateHeroAnimations() {
  const slides = document.querySelectorAll('.swiper .swiper-slide .swiper-inner');
  slides.forEach((slide, idx) => {
    slide.classList.remove('scaleIn', 'scaleOut');
    if (idx % 2 === 0) {
      slide.classList.add('scaleIn'); // Even: zoom out
    } else {
      slide.classList.add('scaleOut'); // Odd: zoom in
    }
  });
}

// Initial assignment
alternateHeroAnimations();

// Helper to re-trigger animation
function reTriggerAnimation(el, animClass) {
  el.classList.remove(animClass);
  // Force reflow
  void el.offsetWidth;
  el.classList.add(animClass);
}

swiper.on('slideChangeTransitionStart', function () {
  const slides = document.querySelectorAll('.swiper .swiper-slide .swiper-inner');
  slides.forEach((slide, idx) => {
    // Remove both classes
    slide.classList.remove('scaleIn', 'scaleOut');
    // Assign alternating class
    const animClass = (idx % 2 === 0) ? 'scaleIn' : 'scaleOut';
    slide.classList.add(animClass);
    // Only re-trigger for the active slide
    if (slide.closest('.swiper-slide').classList.contains('swiper-slide-active')) {
      reTriggerAnimation(slide, animClass);
    }
  });
});