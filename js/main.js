const menuBtn = document.querySelector('.burger-btn');
const menuMobile = document.querySelector('.nav__list');

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--open');
});