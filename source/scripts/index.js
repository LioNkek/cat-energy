/* в этот файл добавляет скрипты*/
const mainNav = document.querySelector('.main-nav');
const mainHeaderToggle = document.querySelector('.main-header__toggle');

mainNav.classList.remove('main-nav--nojs');
mainHeaderToggle.classList.remove('main-header__toggle--nojs');

mainHeaderToggle.addEventListener('click', () => {
  mainHeaderToggle.classList.toggle('main-header__toggle--opened');
  mainNav.classList.toggle('main-nav--closed');
});

