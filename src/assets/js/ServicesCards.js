import { gsap, ScrollTrigger } from 'gsap/all';
import breakpoints from './MatchMedia';

const mm = gsap.matchMedia();

gsap.registerPlugin(ScrollTrigger);

const target = gsap.utils.toArray('.services__item');
target.pop();

mm.add(breakpoints.isDesktop, () => {
  gsap.to(target, {
    yPercent: -100,
    stagger: 1,

    scrollTrigger: {
      trigger: '.services',
      pin: true,
      scrub: true,
      markers: true,
      start: 'bottom bottom',
    },
  });
});
