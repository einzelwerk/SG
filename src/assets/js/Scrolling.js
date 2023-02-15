let lastScrollTop = 0;
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 600) {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      header.classList.remove('fixed');
    } else {
      header.classList.add('fixed');
    }
    lastScrollTop = st <= 0 ? 0 : st;
  } else {
    header.classList.remove('fixed');
  }
});
