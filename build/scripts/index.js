// source/scripts/index.js
var mainNav = document.querySelector(".main-nav");
var mainHeaderToggle = document.querySelector(".main-header__toggle");
mainNav.classList.remove("main-nav--nojs");
mainHeaderToggle.classList.remove("main-header__toggle--nojs");
mainHeaderToggle.addEventListener("click", () => {
  mainHeaderToggle.classList.toggle("main-header__toggle--opened");
  mainNav.classList.toggle("main-nav--closed");
});
var range = document.querySelector(".slider__range");
var button = document.querySelector(".slider__button");
var overlay = document.querySelector(".slider__image-overlay");
range.addEventListener("input", (e) => {
  const value = e.target.value;
  button.style.left = `${value}%`;
  overlay.style.clipPath = `inset(0 0 0 ${value}%)`;
});
//# sourceMappingURL=index.js.map
