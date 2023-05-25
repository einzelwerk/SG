import { gsap, ScrollTrigger, ScrollSmoother } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
  smooth: 1,
  effects: true,
});



const archonLinks = document.querySelectorAll('js-scroll-to-section')
archonLinks.forEach(t => {
  t.addEventListener('click', e => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute('href')
    smoother.scrollTo(target)
  })
})
