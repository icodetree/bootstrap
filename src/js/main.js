// Import our custom CSS
import '../scss/default.scss';

// Import only the Bootstrap components we need
import { Util, Dropdown, Offcanvas, Popover } from 'bootstrap';

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]').forEach(popover => {
	new Popover(popover);
});

// myNoteSlide
const myNoteSlide = new Swiper('.myNoteSlide .swiperType_01', {
	slidesPerView: 1.8,
	spaceBetween: 25,
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
			slidesPerView: 2.1,
		},
	},
});

// contentTitleSlide
const swiper_title = new Swiper('.contentTitleSlide .swiperType_02', {
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
const swiper_card = new Swiper('.cardSlide .swiperType_card', {
	loop: true,
	slidesPerView: 1.8,
	spaceBetween: 18,
	centeredSlides: false,
	pagination: {
		el: '.cardSlide .swiperType_card .swiper-pagination',
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

// thumbNailSlide
const swiper_thumb = new Swiper('.thumbNailSlide .swiperType_thumb', {
	loop: true,
	spaceBetween: 25,
	centeredSlides: false,
	pagination: {
		el: '.thumbNailSlide .swiperType_thumb .swiper-pagination',
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



// menu-list
(() => {
	class TabList {
		constructor(opt) {
			this.tab = document.querySelector('.' + opt.elmName);
			this.tabul = this.tab.firstElementChild;
			this.tabLi = [...this.tabul.children];
			this.target = null;
			this.index = null;
			this.lastChild = null;

			this.active = 'active';
		}
		init() {
			this.tabLi.map(elm => {
				this.target = elm;

				this.mouseEvent();
			});
		}
		mouseEvent() {
			this.target.addEventListener('click', e => this.eventHandler(e));
		}
		eventHandler(e) {
			e.preventDefault();
			let type = e.type;

			this.parent = e.target.parentElement;
			if (!this.parent.classList.contains(this.active)) {
				this.open();
			} else {
				this.close();
			}
		}
		open() {
			this.tabLi.map((elm, idx) => {
				this.elm = elm;
				this.elm.classList.remove(this.active);
				this.parent.classList.add(this.active);
			});

			this.tab.classList.add(this.active);
		}
		close() {
			this.tabLi.map((elm, idx) => {
				this.elm = elm;
				this.elm.classList.remove(this.active);
			});

			this.tab.classList.remove(this.active);
		}
	}

	window.addEventListener('load', () => {
		const tabList = new TabList({
			elmName: 'TabList',
		});
		tabList.init();
	});
})();


// addSearch
(() => {
	class AddSearch {
		constructor(opt) {
			this.body = document.querySelector('body');
			this.addBtn = document.querySelector('.' + opt.elmName);
			this.addSearch = document.querySelector('.addSearch');
			this.active = 'active';
		}
		init() {
			this.mouseEvent();
		}
		mouseEvent() {
			this.body.addEventListener('click', e => this.eventHandler(e));
		}
		eventHandler(e) {
			e.preventDefault();

			this.parent = e.target.parentElement;
			if (
				!this.parent.classList.contains(this.active) &&
				e.target === e.currentTarget.querySelector('.addSearchBtn')
			) {
				this.open();
			} else {
				if (
					e.target === e.currentTarget.querySelector('.input-search') ||
					e.target === e.currentTarget.querySelector('.btn-search')
				)
					return;
				this.close();
			}
		}
		open() {
			this.addBtn.classList.add(this.active);
			this.addSearch.classList.add(this.active);
		}
		close() {
			this.addBtn.classList.remove(this.active);
			this.addSearch.classList.remove(this.active);
		}
	}

	window.addEventListener('load', () => {
		const addSearch = new AddSearch({
			elmName: 'addSearchBtn',
		});
		addSearch.init();
	});
})();


// changeView Slide
(() => {
	class ChangeView {
		constructor(opt) {
			this.targetBtn = document.querySelector('.' + opt.elmName);
			this.swiper = document.querySelector('.myNoteSlide');
			this.active = 'active';
			this.parent = null;
		}
		init() {
			this.mouseEvent();
		}
		mouseEvent() {
			this.targetBtn.addEventListener('click', e => this.eventHandler(e));
		}
		eventHandler(e) {
			e.preventDefault();
			this.parent = e.target;
			console.log(this.parent);
			if (!this.parent.classList.contains(this.active)) {
				this.open();
			} else {
				this.close();
			}
		}
		open() {
			this.targetBtn.classList.add(this.active);
			this.parent.textContent = `전체보기 취소`;
			this.swiper.classList.add(this.active);
			myNoteSlide.disable();
			console.log("open");
		}
		close() {
			this.targetBtn.classList.remove(this.active);
			this.parent.textContent = `전체보기`;
			this.swiper.classList.remove(this.active);
			myNoteSlide.enable();
			console.log("close");
		}
	}

	window.addEventListener('load', () => {
		const changeView = new ChangeView({
			elmName: 'changeViewBtn',
		});
		changeView.init();
	});
})();
