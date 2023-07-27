"use strict";


function  setupMobileMenu () {
  let MobileMenu = document.querySelector('.menu');
  let burgerMenu = document.querySelector('.burgermenu');
  let xmark = document.querySelector('.xmark');

  burgerMenu.addEventListener('click', () => {
    MobileMenu.classList.add('show');
    burgerMenu.style.display = 'none';
    xmark.style.display = 'block';
  });

  xmark.addEventListener('click', () => {
    MobileMenu.classList.remove('show');
    burgerMenu.style.display = 'block';
    xmark.style.display = 'none';
  });

}



// function setupIntersectionObserver () {
//   const sections = document.querySelectorAll(".section1,.section_capabilities, .section_our_work, .footer1,.section1_about, .section6_aboutus_home, .section_meet_our_team, .section1_services, .section2_services, .article_service, .section1_portfolio, .section2_portfolio, .section1_contact, .section2_contact");

// const options = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.10, 
// };

// const observer = new IntersectionObserver(function (entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("load");
//       observer.unobserve(entry.target);
//     }
//   });
// }, options);

// sections.forEach((section) => {
//   observer.observe(section);
// });


// }


document.addEventListener("DOMContentLoaded", function () {
  setupMobileMenu();
  // setupIntersectionObserver();
});

  





