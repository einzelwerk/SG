import { gsap, ScrollTrigger, ScrollSmoother } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
  smooth: 1,
  effects: true,
});

const scrollTarget = document.querySelector('.js-scroll-to-section');

if (scrollTarget) {
  scrollTarget.addEventListener('click', () => {
    smoother.scrollTo(document.querySelector('.section-hero').offsetHeight, true, 'top top');
  });
}
