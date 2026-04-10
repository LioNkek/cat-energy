/* в этот файл добавляет скрипты*/
const mainNav = document.querySelector('.main-nav');
const mainHeaderToggle = document.querySelector('.main-header__toggle');

mainNav.classList.remove('main-nav--nojs');
mainHeaderToggle.classList.remove('main-header__toggle--nojs');

mainHeaderToggle.addEventListener('click', () => {
  mainHeaderToggle.classList.toggle('main-header__toggle--opened');
  mainNav.classList.toggle('main-nav--closed');
});

//slider
const range = document.querySelector('.slider__range');
const button = document.querySelector('.slider__button');
const overlay = document.querySelector('.slider__image-overlay');

range.addEventListener('input', (e) => {
  const value = e.target.value;
  button.style.left = `${value}%`;
  overlay.style.clipPath = `inset(0 0 0 ${value}%)`;
});
