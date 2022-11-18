// Import our custom CSS
import '../scss/default.scss';

// Import only the Bootstrap components we need
import {Util, Dropdown, Offcanvas, Popover} from 'bootstrap';

// Create an example popover
document.querySelectorAll ('[data-bs-toggle="popover"]').forEach (popover => {
  new Popover (popover);
});

// swiperType_01
const swiper_1 = new Swiper ('.swiperType_01', {
  slidesPerView: 1.8,
  spaceBetween: 25,
  centeredSlides: false,
  pagination: {
    el: '.swiperType_01 .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.myNoteSlide .swiper-button-next',
    prevEl: '.myNoteSlide .swiper-button-prev',
  },

  breakpoints: {
    0: {
      loop: true,
      slidesPerView: 1.1,
    },
    540: {
      loop: false,
      slidesPerView: 2.1,
    },
  },
});
