import { gsap, ScrollTrigger } from 'gsap/all';
import breakpoints from './MatchMedia';

const mm = gsap.matchMedia();

gsap.registerPlugin(ScrollTrigger);

mm.add(breakpoints.isDesktop, () => {
  gsap.to('.services__item:not(:last-child)', {
    yPercent: -100,
    stagger: 1,

    scrollTrigger: {
      trigger: '.services',
      pin: true,
      scrub: true,
      start: 'bottom bottom',
    },
  });
});
