/* eslint-disable class-methods-use-this */
import { gsap } from 'gsap';

class Modal {
  constructor(trigger, modal) {
    this.modal = modal;
    this.modalInner = document.querySelector(this.modal).querySelector('.modal__inner');
    this.trigger = trigger;
    this.closeBtn = '.modal__close';
    this.state = false;
  }

  animation(target, reversed) {
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(
      target,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
      }
    );
    tl.fromTo(
      this.modalInner,
      {
        xPercent: 100,
      },
      {
        xPercent: 0,
      },
      '.3'
    );
    if (reversed) {
      tl.reverse(true);
    } else {
      tl.play();
    }
  }

  open() {
    this.animation(this.modal, false);
    this.state = true;
  }

  close() {
    this.animation(this.modal, true);
    this.state = false;
  }

  listener() {
    document.addEventListener('click', (e) => {
      if ((this.state && !e.target.closest('.modal__inner')) || (this.state && e.target.closest(this.closeBtn)) || e.key === 'Escape') {
        this.close();
      }
      if (!this.state && e.target.closest(this.trigger)) {
        this.open();
      }
    });
  }
}

const mainModal = new Modal('[data-modal="main-modal"]', '[data-modal-el="main-modal"]');
mainModal.listener();
