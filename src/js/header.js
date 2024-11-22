const toggleBtn = document.querySelector('.header__toggle-btn');
const mobMenu = document.querySelector('.nav');

toggleBtn.addEventListener('click', function () {
  this.classList.toggle('is-active');
  mobMenu.classList.toggle('is-open');
  document.documentElement.classList.toggle('no-scroll');
});

let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    header.style.transform = 'translateY(-100%)';
    header.classList.remove('scroll');
  } else {
    header.style.transform = 'translateY(0)';
    header.classList.add('scroll');
  }
  if (window.scrollY === 0) {
    header.style.transform = 'translateY(0)';
    header.classList.remove('scroll');
  }

  lastScrollY = window.scrollY;
});
