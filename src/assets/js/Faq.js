/* eslint-disable no-new */
import { gsap } from 'gsap';

class Faq {
  constructor(faqItem) {
    this.faqItem = faqItem;
    this.question = faqItem.querySelector('.faq__heading');
    this.answerWrapper = faqItem.querySelector('.faq__content-wrapper');
    this.answer = faqItem.querySelector('.faq__content');

    this.faqItem.addEventListener('click', this.toggle.bind(this));

    this.faqIcon = faqItem.querySelector('.faq__icon');

    this.isOpen = false;
    this.answerHeight = this.answer.offsetHeight;
  }

  onQuestionClick() {
    this.toggle();
  }

  toggle() {
    this.isOpen = !this.isOpen;
    const targetHeight = this.isOpen ? this.answerHeight : 0;

    gsap.to(this.answerWrapper, {
      height: targetHeight,
      duration: 0.2,
      ease: 'ease-out',
    });
    gsap.to(this.faqIcon, {
      rotate: this.isOpen ? 45 : 0,
      duration: 0.2,
      ease: 'ease-out',
    });
  }
}

const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach((item) => {
  new Faq(item);
});
