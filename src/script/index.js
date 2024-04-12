const menu = document.querySelector('#menu-interativo');
const navLinks = document.querySelector('#navLinks')


menu.addEventListener('click', () => {
  menu.classList.toggle('menu-ativo');
  navLinks.classList.toggle('nav-ativo')
});