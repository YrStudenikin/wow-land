const mobileMenu = document.getElementById('mobile-menu');
const burger = document.getElementById('burger-menu');

document.querySelectorAll('a.menu__link').forEach($anchor => {
    $anchor.addEventListener('click', function (e) {
        e.preventDefault();

        if (mobileMenu.classList.contains('is-open')) {
            mobileMenu.classList.remove('is-open');
            burger.classList.remove('is-open');
        }

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});