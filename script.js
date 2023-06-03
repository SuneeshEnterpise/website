const menuToggler = document.querySelector('.menu-toggler');
const menu = document.querySelector('.menu');

menuToggler.addEventListener('click', () => {
  menu.classList.toggle('menu-active');
});
