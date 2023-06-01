isResize('.info__img', '.info__wrapper', '.info__content-img', 1160);
isResize(
  '.info--revers .info__img',
  '.info--revers .info__wrapper',
  '.info--revers .info__content-img',
  1160,
);

window.addEventListener('resize', () => {
  isResize('.info__img', '.info__wrapper', '.info__content-img', 1160);
  isResize(
    '.info--revers .info__img',
    '.info--revers .info__wrapper',
    '.info--revers .info__content-img',
    1160,
  );

  initSliderModuls();
});

//header

function headerScroll() {
  const header = document.querySelector('.header');
  if (window.pageYOffset > 0 && !header.classList.contains('header--scroll')) {
    header.classList.add('header--scroll');
  } else if (window.pageYOffset <= 0 && header.classList.contains('header--scroll')) {
    header.classList.remove('header--scroll');
  }
}
headerScroll();

window.addEventListener('scroll', function () {
  headerScroll();
});

//burger

function isBurger() {
  const burger = document.querySelector('.burger');
  const burgerBtn = document.querySelector('.burger__btn');
  const burgerBtnClose = document.querySelector('.burger__btn-close');
  const header = document.querySelector('.header');

  burgerBtn.addEventListener('click', () => {
    if (!burger.classList.contains('burger--active')) {
      burger.classList.add('burger--active');
      if (window.pageYOffset === 0) {
        header.classList.add('header--scroll');
      }
    } else if (burger.classList.contains('burger--active')) {
      burger.classList.remove('burger--active');
      if (window.pageYOffset === 0) {
        header.classList.remove('header--scroll');
      }
    }
  });

  burgerBtnClose.addEventListener('click', () => {
    burger.classList.remove('burger--active');
    if (window.pageYOffset === 0) {
      header.classList.remove('header--scroll');
    }
  });

  document.addEventListener('click', (e) => {
    const withinBurger = e.composedPath().includes(burger);
    const withinBurgerBtn = e.composedPath().includes(burgerBtn);

    if (!withinBurger && !withinBurgerBtn) {
      burger.classList.remove('burger--active');
      if (window.pageYOffset === 0) {
        header.classList.remove('header--scroll');
      }
    }
  });
}
isBurger();

//sliders

const swiper = new Swiper('.info-2__slider', {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  allowTouchMove: true,

  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 20,
      centeredSlides: true,
      initialSlide: 2,
    },
    600: {
      slidesPerView: 1.9,
      spaceBetween: 20,
      centeredSlides: true,
      initialSlide: 2,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
      allowTouchMove: false,
    },
  },
});

let swiper2;

function initSliderModuls() {
  if (window.innerWidth <= 768) {
    swiper2 = new Swiper('.slider-2', {
      slidesPerView: 3.5,
      breakpoints: {
        320: {
          slidesPerView: 1.3,
          spaceBetween: 20,
          centeredSlides: true,
          initialSlide: 2,
        },
        600: {
          slidesPerView: 1.9,
          spaceBetween: 20,
          centeredSlides: true,
          initialSlide: 2,
        },
      },
    });
  } else if (
    window.innerWidth > 768 &&
    document.querySelector('.slider-2').classList.contains('swiper-initialized')
  ) {
    swiper2.destroy(true, true);
  }
}

initSliderModuls();

const swiper3 = new Swiper('.slider-3', {
  slidesPerView: 2.5,
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,

  breakpoints: {
    320: { slidesPerView: 1.2 },

    1000: { slidesPerView: 1.5 },
    1300: { slidesPerView: 1.9 },
    1600: {
      slidesPerView: 2.5,
    },
  },
});

const swiper4 = new Swiper('.slider-4', {
  slidesPerView: 2,
  spaceBetween: 20,

  breakpoints: {
    320: { slidesPerView: 1.2 },

    450: { slidesPerView: 1.7 },

    575: {
      slidesPerView: 2,
    },
  },
});

const swiper5 = new Swiper('.slider-5', {
  slidesPerView: 2.5,
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,

  breakpoints: {
    320: { slidesPerView: 1.2 },

    1000: { slidesPerView: 1.3 },
    1400: {
      slidesPerView: 1.4,
    },
  },
});

const swiper6 = new Swiper('.slider-6', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,

  navigation: {
    nextEl: '.gallery__wrapper-arrow-r',
    prevEl: '.gallery__wrapper-arrow-l',
  },
});

//Modal
function isModal() {
  let modalBtns = document.querySelectorAll('.modal__btn-active');

  if (modalBtns.length > 0) {
    for (let modalBtn of modalBtns) {
      modalBtn.addEventListener('click', function () {
        let modalBtnData = modalBtn.getAttribute('data-modal-src');
        let modalWindow = document.querySelector(`*[data-modal-window="${modalBtnData}"]`);
        let body = document.querySelector('body');

        if (modalWindow) {
          modalWindow.classList.add('active');
          body.classList.add('lock');
        }
      });
    }
  }
}
isModal();

function isModalClose() {
  let modalCloseBtns = document.querySelectorAll('.modal__btn-close');
  if (modalCloseBtns.length > 0) {
    for (let modalCloseBtn of modalCloseBtns) {
      modalCloseBtn.addEventListener('click', function () {
        let modalWindow = modalCloseBtn.closest('*[data-modal-window]');
        let body = document.querySelector('body');

        modalWindow.classList.remove('active');
        body.classList.remove('lock');
      });
    }
  }
}
isModalClose();

//smooth

const scrollSmoothLinck = document.querySelectorAll('*[data-scroll-smooth]');

for (let elem of scrollSmoothLinck) {
  elem.addEventListener('click', function (e) {
    e.preventDefault();

    let blockID = elem.getAttribute('data-scroll-smooth');
    let top = document.getElementById(blockID).getBoundingClientRect().top;

    document.querySelector('html,body').scrollTo({
      top: top + window.pageYOffset - 130,
      behavior: 'smooth',
    });
  });
}
