import { gsap, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

gsap.set('.marquee__line', { x: '-50%' });

const mq = document.querySelectorAll('.marquee__line');

mq.forEach((el, index) => {
  const tl = gsap.timeline({});
  const tween = gsap.to(el, {
    x: index % 2 === 0 ? `+=50%` : `-=50%`,
    repeat: -1,
    duration: 13,
    ease: 'linear',
    scrollTrigger: {
      start: 0,
      end: 'max',
      markers: true,
      onUpdate: () => {
        tl.timeScale(2);
        tween.invalidate().restart();
      },
    },
  });
});
