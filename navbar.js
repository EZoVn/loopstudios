const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navbar = document.querySelector(".header__nav--menu");
const nav = document.querySelector(".header__nav");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
  hamburger.classList.toggle("hidden");
  close.classList.toggle("active");
  nav.classList.toggle("navActive");

});

close.addEventListener("click", () => {
  navbar.classList.remove("active");
  hamburger.classList.remove("hidden");
  close.classList.remove("active");
  nav.classList.remove("navActive");

});

