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
    smoother.scrollTo(target, true)
  })
})

const counterElements = document.querySelectorAll('.features__value span');

const animateNumber = (element, finalNumber) => {
  // Проверяем, является ли число дробным
  const isDecimal = finalNumber % 1 !== 0;

  if (!isNaN(finalNumber) && typeof finalNumber === 'number') {
    gsap.to(element, {
      duration: 3,
      // Если число дробное, используем parseFloat для преобразования строки в число с плавающей точкой
      innerHTML: isDecimal ? parseFloat(finalNumber) : finalNumber,
      // Если число дробное, округляем его до двух знаков после запятой
      roundProps: isDecimal ? '' : 'innerHTML',
      onUpdate: () => {
        // Если число дробное, округляем текущее значение до двух знаков после запятой
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
  const finalNumber = parseFloat(element.innerText);
  gsap.set(element, { innerHTML: 0 });

  ScrollTrigger.create({
    trigger: element.parentNode,
    onEnter: () => {
      animateNumber(element, finalNumber);
    }
  });
});
