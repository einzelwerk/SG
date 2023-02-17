import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);

CustomEase.create('cubic', '0.77, 0, 0.175, 1');

const baseHeroHeight = document.querySelector('.section-hero')?.offsetHeight;

class HeroVideoPlayback {
  constructor() {
    this.header = document?.querySelector('.header');
    this.heroElements = document?.querySelectorAll(' .hero__desc, .hero__title , .hero__btn:not(.js-play-hero-video)');
    this.btn = '.js-play-hero-video';
    this.state = false;
    this.video = document.querySelector('.hero__media');
    this.originalText = document.querySelector(`${this.btn} span`)?.innerText;
    this.modyfText = document.querySelector(this.btn)?.dataset.switchText;
  }

  getTargetBtnWidth() {
    return document.querySelector(this.btn).offsetWidth;
  }

  getOthersBtnsWidth() {
    let width = 0;
    document.querySelectorAll(`.hero__btn:not(${this.btn})`).forEach((el) => {
      width += el.offsetWidth;
    });
    return width;
  }

  animation(reverse = false) {
    if (!reverse) {
      document.querySelector(`${this.btn} span`).innerText = this.modyfText;
      this.video.removeAttribute('muted');
      document.querySelector('.section-hero').classList.add('playing-video');
    } else {
      document.querySelector(`${this.btn} span`).innerText = this.originalText;
      this.video.setAttribute('muted', true);
      document.querySelector('.section-hero').classList.remove('playing-video');
    }
    const tl = gsap.timeline({
      paused: true,
    });

    tl.fromTo(
      this.header,
      {
        y: 0,
        opacity: 1,
      },
      {
        y: -100,
        opacity: 0,
      }
    );

    tl.fromTo(
      this.heroElements,
      {
        x: 0,
        opacity: 1,
      },
      {
        x: -100,
        opacity: 0,
        stagger: 0.1,
      },
      '='
    );
    tl.fromTo(
      this.btn,
      {
        x: 0,
      },
      {
        x: window.innerWidth / 2 - this.getOthersBtnsWidth() - this.getTargetBtnWidth(),
      },
      '<'
    );
    tl.fromTo(
      '.section-hero',
      {
        height: baseHeroHeight,
      },
      {
        height: window.innerHeight,
      },
      '<'
    );
    if (reverse) {
      tl.reverse(true);
      this.video.setAttribute('muted', '');
    } else {
      tl.play();
      this.video.removeAttribute('muted', '');
    }
  }

  listener() {
    document.querySelector(this.btn)?.addEventListener('click', () => {
      this.animation(this.state);
      this.state = !this.state;
    });
  }
}

const heroVideo = new HeroVideoPlayback();
heroVideo.listener();
