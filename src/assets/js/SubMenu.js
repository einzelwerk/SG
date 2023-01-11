const navItem = document.querySelectorAll('.mobile-nav__arrow');
navItem.forEach((el) => {
  el.addEventListener('click', (e) => {
    const target = e.currentTarget.closest('.mobile-nav__item').querySelector('.mobile-sub-menu');

    target.classList.toggle('active');
  });
});
