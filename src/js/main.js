// Import our custom CSS
import '../scss/default.scss';

// Import only the Bootstrap components we need
import {Util, Dropdown, Offcanvas, Popover} from 'bootstrap';

// Create an example popover
document.querySelectorAll ('[data-bs-toggle="popover"]').forEach (popover => {
  new Popover (popover);
});

/*============================================================
 * Description : Swipe Slide
 *============================================================*/

// myNoteSlide
const myNoteSlide = new Swiper ('.myNoteSlide .swiperType_01', {
  slidesPerView: 1.8,
  spaceBetween: 0,
  centeredSlides: false,
  pagination: {
    el: '.myNoteSlide .swiperType_01 .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.myNoteSlide .swiper-button-next',
    prevEl: '.myNoteSlide .swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1.1,
    },
    540: {
      slidesPerView: 2,
    },
  },
});

// myNoteAddSlide
const myNoteAddSlide = new Swiper ('.myNoteAddSlide .swiperType_01', {
  slidesPerView: 1.8,
  spaceBetween: 25,
  centeredSlides: false,
  pagination: {
    el: '.myNoteAddSlide .swiperType_01 .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.myNoteAddSlide .swiper-button-next',
    prevEl: '.myNoteAddSlide .swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1.1,
    },
    540: {
      slidesPerView: 2,
    },
  },
});

// contentTitleSlide
const swiper_title = new Swiper ('.contentTitleSlide .swiperType_02', {
  loop: false,
  slidesPerView: 1.8,
  spaceBetween: 20,
  centeredSlides: false,

  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    540: {
      spaceBetween: 20,
      slidesPerView: 2.8,
    },
    960: {
      spaceBetween: 25,
      slidesPerView: 4.5,
    },
  },
});

// cardSlide
const cardSlide = new Swiper ('.cardSlide .swiperType_card', {
  loop: false,
  slidesPerView: 1.8,
  spaceBetween: 20,
  centeredSlides: false,
  pagination: {
    el: '.cardSlide .swiperType_card .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.cardSlide .swiper-button-next',
    prevEl: '.cardSlide .swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1.2,
    },
    540: {
      slidesPerView: 2.2,
    },
    960: {
      slidesPerView: 4.8,
    },
    1200: {
      slidesPerView: 3.8,
    },
  },
});

// thumbNailSlide
const swiper_thumb = new Swiper ('.thumbNailSlide .swiperType_thumb', {
  loop: false,
  spaceBetween: 25,
  centeredSlides: false,
  pagination: {
    el: '.thumbNailSlide .swiperType_thumb .swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1.2,
    },
    540: {
      slidesPerView: 3,
    },
  },
});

// Top Slide Menu
const slideTopMenu = new Swiper ('.slideTopMenu', {
  spaceBetween: 0,
  slidesPerView: 2.8,
  watchSlidesProgress: true,
  centeredSlides: false,
});

const subSwiper = new Swiper ('.subSwiper', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  spaceBetween: 10,
  thumbs: {
    swiper: slideTopMenu,
  },
});

// UI Common
(() => {
  // Category TabList only DeskTop
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

      if (e.target !== e.currentTarget.querySelector ('.subtit')) return;
      this.parent = e.currentTarget.firstElementChild;

      if (!this.parent.classList.contains (this.active)) {
        this.open ();
      } else {
        this.close ();
      }
    }
    open () {
      this.tabLi.map ((elm, idx) => {
        this.elm = elm.firstElementChild;
        this.elm.classList.remove (this.active);
      });
      this.parent.classList.add (this.active);
      this.tab.classList.add (this.active);
    }
    close () {
      this.tabLi.map ((elm, idx) => {
        this.elm = elm.firstElementChild;
        this.elm.classList.remove (this.active);
      });

      this.parent.classList.remove (this.active);
      this.tab.classList.remove (this.active);
    }
  }

  // AddSearch only DeskTop
  // Common Top button
  class AddSearch {
    constructor (opt) {
      this.html = document.querySelector ('html');
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
      window.addEventListener ('scroll', e => this.scrollEvent (e));
    }
    eventHandler (e) {
      e.preventDefault ();

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
    scrollEvent (e) {
      e.preventDefault ();

      this.topBtn = document.querySelector ('.btnTop');
      this.headerH = document.querySelector ('.header').clientHeight;
      this.visualH = document.querySelector ('.visual').clientHeight;

      if (this.html.scrollTop > this.visualH + this.visualH) {
        this.topBtn.classList.add (this.active);
        this.topBtn.addEventListener ('click', e => this.moveTop (e));
      } else {
        this.topBtn.classList.remove (this.active);
      }
    }
    moveTop () {
      window.scrollTo ({top: 0, behavior: 'smooth'});
    }
  }

  // Common ChangeView
  class ChangeView {
    constructor (opt) {
      this.slideName = opt.targetSlideName;
      this.targetBtn = document.querySelector ('.' + opt.elmName);
      this.swiper = document.querySelector ('.' + opt.targetSlideName);
      this.active = 'active';
      this.target = null;
      this.parent = null;
    }
    init () {
      this.mouseEvent ();
    }
    mouseEvent () {
      this.targetBtn.addEventListener ('click', e => this.eventHandler (e));
    }
    eventHandler (e) {
      e.preventDefault ();
      this.target = e.currentTarget.firstElementChild;
      this.parent = e.currentTarget;

      if (!this.parent.classList.contains (this.active)) {
        this.open ();
      } else {
        this.close ();
      }
    }
    open () {
      this.targetBtn.classList.add (this.active);
      this.target.textContent = `전체보기 취소`;
      this.swiper.classList.add (this.active);
      eval (this.slideName).disable ();
    }
    close () {
      this.targetBtn.classList.remove (this.active);
      this.target.textContent = `전체보기`;
      this.swiper.classList.remove (this.active);
      eval (this.slideName).enable ();
    }
  }

  class Vocabulary {
    constructor (opt) {
      this.vocabulary = document.querySelector ('.' + opt.elmName);
      this.vocList = [...document.querySelectorAll ('.vocabulary')];

      this.target = null;
      this.active = 'active';
      this.parent = null;
      this.mother = null;
    }
    init () {
      this.vocList.map (elm => {
        this.target = elm.querySelector ('.addBtn');
        this.mouseEvent ();
      });
    }
    mouseEvent () {
      this.target.addEventListener ('click', e => this.eventHandler (e));
    }
    eventHandler (e) {
      e.preventDefault ();

      this.parent = e.target;
      this.mother = this.parent.closest ('.vocabulary');

      if (!this.parent.classList.contains (this.active)) {
        this.open ();
      } else {
        this.close ();
      }
    }
    open () {
      this.parent.classList.add (this.active);
      this.parent.textContent = `내 단어장에서 삭제하기`;
      this.mother.classList.add (this.active);
    }
    close () {
      this.parent.classList.remove (this.active);
      this.parent.textContent = `내 단어장에 추가하기`;
      this.mother.classList.remove (this.active);
    }
  }

  // Toggle Button
  class Toggle {
    constructor (opt) {
      this.btn = [...document.querySelectorAll ('#' + opt.elmName)];
      this.closeBtn = [...document.querySelectorAll ('.popClose')];
      this.body = document.querySelector ('body');

      this.target = null;
      this.overlay = null;
      this.parent = null;
      this.active = 'active';
      this.hidden = 'hidden';
      this.elmBool = null;
    }
    init () {
      this.btn.forEach (elm => {
        this.target = elm;
        this.mouseEvent ();
      });
      this.closeBtn.forEach (elm => {
        elm.addEventListener ('click', e => this.close ());
      });
    }
    mouseEvent () {
      this.target.addEventListener ('click', e => this.eventHandler (e));
    }
    eventHandler (e) {
      e.preventDefault ();

      this.parent = e.currentTarget;
      this.overlay = this.parent.nextElementSibling;
      this.elmBool = this.parent.closest ('.navbar') ? true : false;

      if (!this.parent.classList.contains (this.active)) {
        this.open ();
      } else {
        this.close ();
      }
    }
    open () {
      this.parent.classList.add (this.active);
      this.overlay.classList.add (this.active);
      if (this.elmBool) this.body.classList.add (this.hidden);
    }
    close () {
      this.parent.classList.remove (this.active);
      this.overlay.classList.remove (this.active);
      if (this.elmBool) this.body.classList.remove (this.hidden);
    }
  }

  // Mobile only Nav
  class MoNavi {
    constructor (opt) {
      this.mother = document.querySelector ('.' + opt.elmName);
      this.slideTopMenu = this.mother.querySelector ('.slideTopMenu');
      this.tabSlide = [...this.slideTopMenu.querySelectorAll ('.swiper-slide')];

      this.subSwiper = this.mother.querySelector ('.subSwiper');
      this.subTabLink = [...this.subSwiper.querySelectorAll ('a')];
      this.closeBtn = [...this.subSwiper.querySelectorAll ('.btnClose')];

      this.target = null;
      this.tabLi = null;
      this.subTarget = null;

      this.active = 'active';
      this.menuActive = 'on';
    }
    init () {
      this.tabSlide.map (elm => {
        this.target = elm;
        this.mouseEvent ();
      });
    }
    mouseEvent () {
      this.target.addEventListener ('click', e => this.eventHandler (e));
      this.closeBtn.map (elm => {
        elm.addEventListener ('click', e => this.closeAll ());
      });
    }
    eventHandler (e) {
      e.preventDefault ();
      this.subSwiper.classList.add (this.active);

      // 대메뉴 활성화 클래스 넣기
      if (e.currentTarget.classList.contains ('swiper-slide-thumb-active')) {
        e.currentTarget.classList.add (this.menuActive);
      } else {
        e.currentTarget.classList.remove (this.menuActive);
      }

      this.subTabLink.map (elm => {
        elm.addEventListener ('click', e => this.subTabEventHandler (e));
      });
    }
    subTabEventHandler (e) {
      this.subTarget = e.target;

      if (!e.target.classList.contains (this.active)) {
        this.open ();
      } else {
        this.close ();
      }
    }
    open () {
      this.subTarget.classList.add (this.active);
    }
    close () {
      this.subTarget.classList.remove (this.active);
      // 3 depth check
      if (this.subTarget.nextElementSibling === null) return;
      [...this.subTarget.nextElementSibling.children].map (elm => {
        elm.classList.remove (this.active);
      });
    }
    closeAll () {
      this.subSwiper.classList.remove (this.active);
      this.tabSlide.map (elm => {
        if (elm.classList.contains (this.menuActive)) {
          elm.classList.remove (this.menuActive);
        }
      });
      this.subTabLink.map (elm => {
        if (elm.classList.contains (this.active)) {
          elm.classList.remove (this.active);
        }
      });
    }
  }
  window.addEventListener ('load', () => {
    // PC 버전 : 카테고리
    const isTablist = document.querySelector ('.TabList');
    if (isTablist !== null) {
      const tabList = new TabList ({elmName: 'TabList'});
      tabList.init ();
    }

    // PC 버전 : 검색열기
    const isAddSearch = document.querySelector ('.addSearchBtn');
    if (isAddSearch !== null) {
      const addSearch = new AddSearch ({elmName: 'addSearchBtn'});
      addSearch.init ();
    }

    // 공통 :  전체보기 열기
    const isChangeViewBtn = document.querySelector ('.changeViewBtn');
    if (isChangeViewBtn !== null) {
      const myNoteSlide = new ChangeView ({
        elmName: 'changeViewBtn',
        targetSlideName: 'myNoteSlide',
      });
      myNoteSlide.init ();
    }

    // 공통 :  카드섹션 전체보기 열기
    const isChangeBtn = document.querySelector ('.changeCardBtn');
    if (isChangeBtn !== null) {
      const cardSlide = new ChangeView ({
        elmName: 'changeCardBtn',
        targetSlideName: 'cardSlide',
      });
      cardSlide.init ();
    }

    // 공통 :  단어장 선택
    const vocabulary = new Vocabulary ({elmName: 'vocabulary'});
    vocabulary.init ();

    // 공통 : Toggle
    const toggle = new Toggle ({elmName: 'toggle'});
    toggle.init ();

    // Mobile 버전 : 상단 카테고리
    const isNavi = document.querySelector ('.moNavi');
    if (isNavi !== null) {
      const moNavi = new MoNavi ({elmName: 'moNavi'});
      moNavi.init ();
    }
  });
}) ();

/*============================================================
 * Description : Graph
 *============================================================*/

function levelGarph () {
  $ ('.animated-progress span').each (function () {
    let targetPos = $ (this).attr ('data-progress');
    let $elm = $ ('.animated-progress--text');
    let $duration = 1000;

    $ (this).stop ().animate (
      {
        width: targetPos + '%',
      },
      $duration
    );
    $elm.stop ().animate (
      {
        left: targetPos + '%',
      },
      $duration
    );

    $ ({val: 0}).animate (
      {val: targetPos},
      {
        duration: $duration,
        step: function () {
          let num = numberWithCommas (Math.floor (this.val));
          $elm.text (num);
        },
        complete: function () {
          let num = numberWithCommas (Math.floor (this.val));
          $elm.text (num);
        },
      }
    );

    function numberWithCommas (x) {
      return x.toString ().replace (/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  });
}
window.addEventListener ('load', () => levelGarph ());

/*============================================================
 * Description : responsive slide
 *============================================================*/
let ww = $ (window).width ();
let swiper_report = undefined;

function initSwiper () {
  if (ww < 960 && swiper_report == undefined) {
    // reportSlide
    swiper_report = new Swiper ('.reportSlide .swiperType_report', {
      loop: false,
      spaceBetween: 15,
      slidesPerView: 2.2,
      centeredSlides: false,
      pagination: {
        el: '.reportSlide .swiperType_report .swiper-pagination',
        clickable: true,
      },
    });
  } else if (ww >= 960 && swiper_report != undefined) {
    swiper_report.destroy ();
    swiper_report = undefined;
  }
}

initSwiper ();

$ (window).on ('resize', function () {
  ww = $ (window).width ();
  initSwiper ();
});
