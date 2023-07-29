"use strict";

function setupMobileMenu() {
  let MobileMenu = document.querySelector(".menu");
  let burgerMenu = document.querySelector(".burgermenu");
  let xmark = document.querySelector(".xmark");

  burgerMenu.addEventListener("click", () => {
    MobileMenu.classList.add("show");
    burgerMenu.style.display = "none";
    xmark.style.display = "block";
  });

  xmark.addEventListener("click", () => {
    MobileMenu.classList.remove("show");
    burgerMenu.style.display = "block";
    xmark.style.display = "none";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  setupMobileMenu();
});
