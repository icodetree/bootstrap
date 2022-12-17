'use strict';

/*============================================================
 * Description : WORD GAME JS
 *============================================================*/

// 게임 초기화
class GameInterFace {
  constructor (opt) {
    this.opt = opt;
    this.uiClass = document.querySelector ('.' + this.opt.uiClass);

    this.gameList = this.uiClass.querySelector ('.game__list');
    this.lifeList = this.uiClass.querySelector ('.game-heart__list');
    this.gameInput = this.uiClass.querySelector ('.game__input');
    this.wordInput = this.gameInput.querySelector ('.game__input-box--typing');
    this.sendBtn = this.gameInput.querySelector ('.game__input-box--send');
    this.timeDisplay = this.uiClass.querySelector ('.game__info--time');
    this.scoreDisplay = this.uiClass.querySelector ('.game__info--score');
    this.btnStart = this.uiClass.querySelector ('.game__button--start');
    this.btnRestart = this.uiClass.querySelector ('.btns__button--pink');

    this.setLayer = this.uiClass.querySelector ('.popup');
    this.closeLayerBtn = this.uiClass.querySelectorAll ('.closeLayerBtn');
    this.overPopup = this.uiClass.querySelector ('.gameOver');

    this.optionBtn = this.uiClass.querySelector ('.game__button');
    this.rePlay = this.uiClass.querySelector ('.rePlay');
    this.selectSpeed = this.uiClass.querySelector ('.selectSpeed');
    this.gameRestart = this.uiClass.querySelector ('.gameRestart');
  }

  init () {
    this.gameLife = this.opt.gameLife;
    this.gameSpeed = this.opt.gameSpeed;

    this.dataUrl = '../data/word.json';
    this.delay = this.gameSpeed / 5;
    this.score = 0; // 글자갯수 설정
    this.count = 0;
    this.posY = 0;
    this.words = []; // 단어 배열 생성

    this.btnText = '게임로딩중...';

    this.isPlaying = false;
    this.isLife = false;

    this._winW = this.uiClass.offsetWidth;
    this._winH = this.uiClass.offsetHeight;

    this.dropInterval = null;
    this.wordWidth = null;
    this.wordDisplay = null;
    this.wordHeight = null;
    this.randomIndex = null;
    this.randomWordList = null;
    this.createWordElm = null;
    this.createWordImg = null;
    this.reqAnimation = null;
    this.classFull = null;
    this.heartIndex = null;
    this.newSpeed = null;
    this.timer = null;

    this._posTop = null;
    this._inputH = null;
    this._listH = null;
    this._docH = null;

    this._answer = null;
    this._question = null;
    this._url = null;

    this.wordArr = null;
    this.posLX = null;
    this.posFX = null;

    this.btnTextChange ('게임로딩중...');
    this.setLife ();
    this.getHeight ();
    this.getData ();
    this.setPopupClose ();
  }

  // 버튼 텍스트 변경
  btnTextChange (_text) {
    this.btnStart.innerText = _text;
    _text === '게임시작'
      ? this.btnStart.classList.remove ('game--loading')
      : this.btnStart.classList.add ('game--loading');
  }

  // 하트 셋팅
  setLife () {
    for (let k = 0; k < this.gameLife; k++) {
      this.lifeHeart = document.createElement ('li');
      this.lifeList.appendChild (this.lifeHeart);
      this.lifeHeart.innerText = '하트' + k;
      this.lifeHeart.classList.add ('full');
    }

    this.timeDisplay.innerText = this.gameLife;
    this.scoreDisplay.innerText = 0;
    this.btnTextChange ('게임시작');
  }

  // 게임창 높이 구하기
  getHeight () {
    this.gameList.style.height = '';
    this._docH = this.gameList.clientHeight;
    this.gameList.style.height = `${this._docH}px`;

    console.log (this._docH);
  }

  // 데이터 가져오기
  getData () {
    axios
      .get (this.dataUrl)
      .then (response => {
        this.words.push (...response.data.LIST);
        console.log ('단어 준비완료', this.words);
      })
      .then (() => {
        this.eventHanler ();
      })
      .catch (function (error) {
        console.log (error);
      });
  }

  // 이벤트 핸들러
  eventHanler () {
    // 시작
    this.btnStart.addEventListener ('click', e => {
      e.stopPropagation ();
      this.start ();
      this.getHeight ();
    });

    // 설정
    this.optionBtn.addEventListener ('click', () => {
      this.setPopupOpen ();
    });

    // 진행
    this.rePlay.addEventListener ('click', () => {
      this.checkOption ();
      this.start ();
      this.setPopupClose ();
    });

    // 팝업닫기
    this.closeLayerBtn.forEach (elm => {
      elm.addEventListener ('click', e => {
        e.stopPropagation ();
        this.setPopupClose ();
      });
    });

    // resize
    window.addEventListener ('resize', () => {
      clearTimeout (this.timer);
      this.timer = setTimeout (() => {
        this.stop ();
        this.start ();
        console.log ('resize');
      }, 100);
    });
  }

  start () {
    if (this.isPlaying) return;

    this.isPlaying = true;
    this.gameLife = this.gameLife;
    this.wordInput.focus ();
    this.getHeight ();

    // play
    this.play ();

    // console.log("gameplay");
    this.btnTextChange ('게임중...');
  }

  play () {
    // if (this.count === 0) {
    //   this.createObj ();
    // }
    this.dropInterval = setInterval (() => {
      this.count = this.count + 1;
      this.createObj ();
    }, this.delay);
  }

  stop () {
    this.isPlaying = false;

    clearInterval (this.dropInterval);
    clearInterval (this.checkInterval);

    this.removeAll ();
  }

  // 단어 모두 삭제
  removeAll () {
    const wordObjList = document.querySelectorAll ('.game__word');
    wordObjList.forEach (elem => {
      elem.remove ();
    });
  }

  // 단어 엘리먼트 생성
  createObj () {
    // 랜덤 적용
    this.randomIndex = Math.floor (Math.random () * this.words.length);
    this.randomWordList = this.words[this.randomIndex];

    // 데이터 추출
    this._url = this.randomWordList.url;
    this._question = this.randomWordList.question;
    this._answer = this.randomWordList.answer;

    // 엘리먼트 생성
    this.createWordElm = document.createElement ('div');
    this.createWordImg = document.createElement ('img');

    this.createWordElm.setAttribute ('data-ans', this._answer);
    this.createWordImg.setAttribute ('src', this._url);

    this.createWordElm.classList.add ('game__word');
    this.createWordElm.textContent = this._question;

    // 중복방지를 위해 제거해준다.
    this.words.splice (this.randomIndex, 1);

    // 단어가 없을경우 게임완료
    if (this.words.length === 0) this.gameOver ();

    // 이미지주소가 있다면 이미지를 넣어준다.
    if (this._url !== '') {
      this.createWordElm.prepend (this.createWordImg);
    }

    // 단어 넣기
    this.gameList.appendChild (this.createWordElm);

    // console.log("단어 랜덤생성");
    this.activeFrame ();
  }

  // 애니메이션
  activeFrame () {
    // 브라우저 왼쪽 좌표
    this._docLX = 0;
    // 브라우저 우측 좌표
    this._docRX = this._docLX + this._winW;
    // 박스사이즈
    this.wordWidth = this.createWordElm.offsetWidth;
    //박스 높이값
    this.wordHeight = this.createWordElm.offsetHeight;

    this.posFX = this._winW - this.wordWidth;

    if (this.wordArr === null) {
      this.posLX = random (this._docLX, this.posFX);
    } else {
      // 박스 우측좌표보다 오른쪽 여백이 크면 큰 여백으로 나오게 한다.
      if (this.posRX < this.space_R) {
        this.posLX = random (this.posRX, this.space_R);
      } else {
        this.posLX = random (this._docLX, this.posLX - this.wordWidth);
      }
    }

    // 단어 우측 좌표
    this.posRX = this.posLX + this.wordWidth;

    // 박스 오른쪽 여백
    this.space_R = this._winW - this.posRX;

    // 이전좌표구하기
    this.wordArr = this.posLX;

    this.createWordElm.style.left = `${this.posLX}px`;

    // console.log("박스좌표 이후", this.wordArr);

    this.createWordElm.style.transition = `transform ${this.gameSpeed}ms linear`;
    this.createWordElm.style.transform = `translateY(${this._docH}px)`;

    setTimeout (() => {
      this.checkStatus ();
    }, 100);

    // console.log("애니메이션 준비완료");
  }

  // 상태체크
  checkStatus () {
    if (!this.isPlaying && this.gameLife === 0) {
      this.btnTextChange ('게임시작');
    } else {
      this.checkList ();
    }
  }

  // 단어리스트 체크
  checkList () {
    const wordObjList = document.querySelectorAll ('.game__word');
    wordObjList.forEach (elem => {
      const wordPosTop = Math.floor (elem.getBoundingClientRect ().bottom);
      if (this._docH <= wordPosTop && !this.isLife) {
        this.isLife = true;
        elem.remove ();
        this.countDown ();
      } else {
        this.wordInput.addEventListener ('keyup', e => {
          if (e.keyCode === 13) {
            this.checkMatch (elem);
          }
        });
        this.sendBtn.addEventListener ('click', e => {
          this.checkMatch (elem);
        });
      }
    });
    if (!this.isPlaying) {
      this.gameOver ();
    }
  }

  // 단어 매칭
  checkMatch (_word) {
    // 버튼 클릭시 무조건 이펙트
    this.sendBtn.classList.add ('animate');
    setTimeout (() => {
      this.sendBtn.classList.remove ('animate');
    }, 200);

    if (!this.isPlaying) {
      return;
    }
    if (
      this.wordInput.value.toLowerCase () ===
      _word.getAttribute ('data-ans').toLowerCase ()
    ) {
      _word.remove ();
      this.wordInput.value = '';

      this.score++;
      this.scoreDisplay.innerText = this.score;
    }
  }

  // 개임끝
  gameOver () {
    this.stop ();
    this.overPopup.classList.remove ('closeLayer');

    console.log ('게임오버');
  }

  // 하트 차감
  countDown () {
    if (this.gameLife > 0) this.gameLife--;
    this.timeDisplay.innerText = this.gameLife;

    // 하트없애기
    const classFull = document.querySelectorAll ('.full');

    classFull.forEach (el => {
      this.heartIndex = getElementIndex (classFull, el);
      if (this.heartIndex === this.gameLife) {
        el.remove ();
      }
    });

    if (this.gameLife === 0) {
      this.isPlaying = false;
    }
    this.isLife = false;
  }

  // 설정 팝업 열기
  setPopupOpen () {
    this.stop ();
    this.setLayer.classList.remove ('closeLayer');
  }

  // 설정 팝업 닫기
  setPopupClose () {
    const popLayer = this.uiClass.querySelectorAll ('.popup');
    popLayer.forEach (elm => {
      elm.classList.add ('closeLayer');
    });
  }

  // 속도변경
  checkOption () {
    this.count = 0;
    this.gameSpeed = this.opt.gameSpeed;

    let _v = this.selectSpeed.value;
    if (_v < 1) {
      this.newSpeed = this.gameSpeed - this.gameSpeed * _v;
      this.gameSpeed = this.newSpeed;
    }
    console.log ('이후속도', this.newSpeed, this.gameSpeed);
  }
}

// 랜덤함수
function random (min, max) {
  return Math.round (Math.random () * (max - min) + min);
}

// Find index
function getElementIndex (element, range) {
  if (!!range) return [].indexOf.call (element, range);
  return [].indexOf.call (element.parentNode.children, element);
}

const game = new GameInterFace ({
  uiClass: 'gameUi',
  gameLife: 7,
  gameSpeed: 10000,
});
