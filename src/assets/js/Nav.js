class Nav {
  constructor(btn, menu) {
    this.btn = btn;
    this.menu = menu;
    this.state = false;
    this.listener();
  }

  listener() {
    document.addEventListener('click', (e) => {
      if (this.state && e.target.closest('.open-menu-btn')) {
        this.closeNav();
      } else if (!this.state && e.target.closest('.open-menu-btn')) {
        this.openNav();
      }
    });
  }

  openNav() {
    this.state = true;
    this.menu.classList.add('opened');
    this.btn.forEach((elem) => {
      elem.classList.add('opened');
      elem.setAttribute('aria-expanded', true);
      elem.setAttribute('aria-label', 'Menü schließen');
    });
  }

  closeNav() {
    this.state = false;
    this.menu.classList.remove('opened');
    this.btn.forEach((elem) => {
      elem.classList.remove('opened');
      elem.setAttribute('aria-expanded', false);
      elem.setAttribute('aria-label', 'Menü öffnen');
    });
  }
}

(() => new Nav(document.querySelectorAll('.open-menu-btn'), document.querySelector('#nav')))();
