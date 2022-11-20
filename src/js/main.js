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
  class TabList {
    constructor (opt) {
      this.tab = document.querySelector ('.' + opt.elmName);
      this.tabul = this.tab.firstElementChild;
      this.tabLi = [...this.tabul.children];
      this.target = null;
      this.index = null;
      this.lastChild = null;

      this.active = 'active';
    }
    init () {
      this.tabLi.map (elm => {
        this.target = elm;

        this.mouseEvent ();
      });
    }
    mouseEvent () {
      this.target.addEventListener ('click', e => this.eventHandler (e));
    }
    eventHandler (e) {
      e.preventDefault ();
      let type = e.type;

      this.parent = e.target.parentElement;
      if (!this.parent.classList.contains (this.active)) {
        this.open ();
      } else {
        this.close ();
      }
    }
    open () {
      this.tabLi.map ((elm, idx) => {
        this.elm = elm;
        this.elm.classList.remove (this.active);
        this.parent.classList.add (this.active);
      });

      this.tab.classList.add (this.active);
    }
    close () {
      this.tabLi.map ((elm, idx) => {
        this.elm = elm;
        this.elm.classList.remove (this.active);
      });

      this.tab.classList.remove (this.active);
    }
  }

  window.addEventListener ('load', () => {
    const tabList = new TabList ({
      elmName: 'TabList',
    });
    tabList.init ();
  });
}) ();

// addSearch
(function () {
  class AddSearch {
    constructor (opt) {
      this.body = document.querySelector ('body');
      this.addBtn = document.querySelector ('.' + opt.elmName);
      this.addSearch = document.querySelector ('.addSearch');
      this.active = 'active';
    }
    init () {
      this.mouseEvent ();
    }
    mouseEvent () {
      this.body.addEventListener ('click', e => this.eventHandler (e));
    }
    eventHandler (e) {
      e.preventDefault ();

      console.log (
        e.target,
        e.currentTarget,
        e.target === e.currentTarget.querySelector ('.btn-search')
      );
      this.parent = e.target.parentElement;
      if (
        !this.parent.classList.contains (this.active) &&
        e.target === e.currentTarget.querySelector ('.addSearchBtn')
      ) {
        this.open ();
      } else {
        if (
          e.target === e.currentTarget.querySelector ('.input-search') ||
          e.target === e.currentTarget.querySelector ('.btn-search')
        )
          return;
        this.close ();
      }
    }
    open () {
      this.addBtn.classList.add (this.active);
      this.addSearch.classList.add (this.active);
    }
    close () {
      this.addBtn.classList.remove (this.active);
      this.addSearch.classList.remove (this.active);
    }
  }

  window.addEventListener ('load', () => {
    const addSearch = new AddSearch ({
      elmName: 'addSearchBtn',
    });
    addSearch.init ();
  });
}) ();

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
      slidesPerView: 2.8,
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
      slidesPerView: 2.5,
    },
    960: {
      slidesPerView: 4.8,
    },
  },
});

// swiper_thumb
const swiper_thumb = new Swiper ('.swiperType_thumb', {
  loop: true,
  spaceBetween: 25,
  centeredSlides: false,
  pagination: {
    el: '.swiperType_thumb .swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1.4,
    },
    540: {
      slidesPerView: 3,
    },
  },
});
