/* eslint-disable */
import { gsap, ScrollTrigger, ScrollSmoother } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
  smooth: 1,
  effects: true,
});



const archonLinks = document.querySelectorAll('a[href^="#"]')
archonLinks.forEach(t => {
  t.addEventListener('click', e => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute('href')
    smoother.scrollTo(target)
  })
})


const counterElements = document.querySelectorAll('.features__value span');

const animateNumber = (element, finalNumber) => {
  const isDecimal = finalNumber % 1 !== 0;
  if (!isNaN(finalNumber)) {
    gsap.to(element, {
      duration: 3,
      innerHTML: isDecimal ? parseFloat(finalNumber) : finalNumber,
      roundProps: isDecimal ? '' : 'innerHTML',
      onUpdate: () => {
        if (isDecimal) {
          element.innerHTML = parseFloat(element.innerHTML).toFixed(2);
        } else {
          element.innerHTML = Math.round(element.innerHTML);
        }
      }
    });
  }
};

gsap.registerPlugin(ScrollTrigger);

counterElements.forEach((element) => {
  const finalNumber = element.innerText;
  gsap.set(element, { innerHTML: 0 });

  ScrollTrigger.create({
    trigger: element.parentNode,
    onEnter: () => {
      animateNumber(element, finalNumber);
    }
  });
});
