let mobileMenu = document.querySelector(".menu")
let burgerMenu = document.querySelector(".burgermenu")
let xmark = document.querySelector(".xmark")

burgerMenu.addEventListener("click", () => {
  mobileMenu.classList.add("show");
  burgerMenu.style.display = "none";
  xmark.style.display = "block";
});

xmark.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
  burgerMenu.style.display = "block";
  xmark.style.display = "none";
});