import { gsap, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

gsap.to('.services__item:not(:last-child)', {
  yPercent: -100,
  stagger: 1,
  scrollTrigger: {
    trigger: '.services',
    pin: true,
    markers: true,
    scrub: true,
    start: 'top top',
    end: `+=2000px`,
  },
});
