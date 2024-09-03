const burger = document.querySelector('.burger');
 const navLinks = document.querySelector('.nav-bar');
 burger.addEventListener('click', () => {
 navLinks.classList.toggle('active');
 });