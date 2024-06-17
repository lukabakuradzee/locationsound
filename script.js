"use strict";
// Mobile Menu
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

// text animation 
document.addEventListener("DOMContentLoaded", function() {
  const swiftUpElements = document.querySelectorAll('.swift-up-text');

  swiftUpElements.forEach(elem => {
      const words = elem.textContent.split(' ');
      elem.innerHTML = '';

      words.forEach((el, index) => {
          words[index] = `<span><i>${words[index]}</i></span>`;
      });

      elem.innerHTML = words.join(' ');

      const children = document.querySelectorAll('span > i');
      children.forEach((node, index) => {
          node.style.animationDelay = `${index * .1}s`;
      });
  });
});



// Sending Email 
document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('textarea').value;

  fetch('http://localhost:3300/api/send-email', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, textarea: message }),
  })
  .then(response => response.text())
  .then(data => {
      alert('Email sent successfully!');
      document.getElementById('myForm').reset(); // Clear the form
  })
  .catch((error) => {
      console.error('Error:', error);
  });
});
