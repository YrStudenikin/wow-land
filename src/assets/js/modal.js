const modalBtn = document.querySelectorAll('[data-modal]');
const body = document.body;
const modal = document.querySelectorAll('.modal');

let currentVideo = '';

modalBtn.forEach(item => {
   item.addEventListener('click', event => {
       let $this = event.currentTarget;
       let modalId = $this.getAttribute('data-modal');
       let modal = document.getElementById(modalId);
       let modalContent = modal.querySelector('.modal__content');

       modalContent.addEventListener('click', event => {
           event.stopPropagation();
       });

       modal.classList.add('is-open');
       body.classList.add('no-scroll');

       setTimeout(() => {
           modalContent.style.transform = 'none';
           modalContent.style.opacity = '1';
       }, 1);

       if ($this.classList.contains('js-open-video')) {
           currentVideo = modal.getElementsByTagName('video');
       }
       currentVideo && currentVideo[0].play();
   });
});

modal.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.currentTarget;
        let modalContent = currentModal.querySelector('.modal__content');

        modalContent.removeAttribute('style');

        setTimeout(() => {
            currentModal.classList.remove('is-open');
            body.classList.remove('no-scroll');
        }, 200);

        currentVideo && currentVideo[0].pause();
    })
});