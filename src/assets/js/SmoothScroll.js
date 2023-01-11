import { gsap, ScrollTrigger, ScrollSmoother } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
  smooth: 1,
  effects: true,
});

document.querySelector('.js-scroll-to-section').addEventListener('click', () => {
  smoother.scrollTo(document.querySelector('.section-hero').offsetHeight, true, 'top top');
});
