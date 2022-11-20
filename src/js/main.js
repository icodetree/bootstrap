// Import our custom CSS
import '../scss/default.scss';

// Import only the Bootstrap components we need
import {Util, Dropdown, Offcanvas, Popover} from 'bootstrap';

// Create an example popover
document.querySelectorAll ('[data-bs-toggle="popover"]').forEach (popover => {
  new Popover (popover);
});

// menu-list
(() => {
  const menuList = document.querySelector(".menu-list");
  const subCategory = document.querySelector(".sub-category");
  const ul = menuList.querySelector("ul");

  ul.addEventListener ("click" , (e) => {
    e.preventDefault();

    if (e.target.nodeName === "A") {
      tabEventHandler (e.target);
    }
  })

  function tabEventHandler (target) {
    let idx = target.getAttribute("data-index") - 1;
    let subTarget = subCategory.children[idx];

    if(subTarget.className === "active") {
      subTarget.classList.add("active");
    }
    console.log(subTarget.getAttribute("class") );

  }
})()

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


// swiperType_02
const swiper_title = new Swiper ('.swiperType_02', {
  loop: true,
  slidesPerView: 1.8,
  spaceBetween: 30,
  centeredSlides: false,

  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    540: {
      slidesPerView: 3.8,
    },
    960: {
      slidesPerView: 4.5,
    },
  },
});


// cardSlide
const swiper_card = new Swiper ('.swiperType_card', {
  loop: true,
  slidesPerView: 1.8,
  spaceBetween: 18,
  centeredSlides: false,
  pagination: {
    el: '.swiperType_card .swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1.2,
    },
    540: {
      slidesPerView: 3.8,
    },
    960: {
      slidesPerView: 3.8,
    },
  },
});
