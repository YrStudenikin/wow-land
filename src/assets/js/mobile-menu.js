const burger = document.getElementById('burger-menu');
const mobileMenu = document.getElementById('mobile-menu');

burger.addEventListener('click', () => {

    setTimeout(() => {
        burger.classList.toggle('is-open');
        mobileMenu.classList.toggle('is-open');
    }, 1);
});