alert('JS loaded!');


// js/script.js
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


// Contact form validation
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const subject = form.subject.value.trim();
      const message = form.message.value.trim();
  
      if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        return;
      }
  
      alert('Message sent successfully!');
      form.reset();
    });
  });
  