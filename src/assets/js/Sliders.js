/* eslint-disable import/no-unresolved */
import Swiper from 'swiper';
import 'swiper/scss';
import breakpoints from './MatchMedia';

class Sliders {
  static typesSlider() {
    const root = document.querySelector('.types');
    const sliderInstance = new Swiper(root, {
      init: false,
      slidesPerView: 1.2,
      spaceBetween: 16,
    });
    if (window.matchMedia(breakpoints.isMobile).matches) {
      sliderInstance.init();
    }
  }

  static departmentsSlider() {
    const root = document.querySelector('.departments');
    const sliderInstance = new Swiper(root, {
      init: false,
      slidesPerView: 1.2,
      spaceBetween: 16,
    });
    if (window.matchMedia(breakpoints.isMobile).matches) {
      sliderInstance.init();
    }
  }

  static careerFeaturesSlider() {
    const root = document.querySelector('.career-features');
    const sliderInstance = new Swiper(root, {
      init: false,
      slidesPerView: 1.2,
      spaceBetween: 16,
    });
    if (window.matchMedia(breakpoints.isMobile).matches) {
      sliderInstance.init();
    }
  }

  static partnersSlider() {
    const root = document.querySelector('.partners-wrapper');
    const sliderInstance = new Swiper(root, {
      init: false,
      slidesPerView: 1.2,
      spaceBetween: 16,
      breakpoints: {
        768: {
          slidesPerView: 4,
        },
      },
    });

    sliderInstance.init();
  }

  static featuresSlider() {
    const root = document.querySelector('.features');
    const sliderInstance = new Swiper(root, {
      init: false,
      slidesPerView: 1.2,
      spaceBetween: 16,
      breakpoints: {
        768: {
          slidesPerView: 4,
        },
      },
    });

    sliderInstance.init();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  Sliders.typesSlider();
  Sliders.partnersSlider();
  Sliders.featuresSlider();
  Sliders.departmentsSlider();
  Sliders.careerFeaturesSlider();
});
