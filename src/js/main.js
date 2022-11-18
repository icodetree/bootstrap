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
  loop: true,
  slidesPerView: 1.8,
  spaceBetween: 25,
  centeredSlides: false,
  pagination: {
    el: '.swiperType_01 .swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
    },

    960: {
      slidesPerView: 2.1,
    },
  },
});
