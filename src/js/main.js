// Import our custom CSS
import '../scss/default.scss';

// Import only the Bootstrap components we need
import { Util, Dropdown, Offcanvas, Popover } from 'bootstrap';

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]').forEach(popover => {
  new Popover(popover)
});


var swiper = new Swiper(".swiperType_01", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiperType_01 .swiper-pagination",
    clickable: true,
  },
});