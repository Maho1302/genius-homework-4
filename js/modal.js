const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toddleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toddleModal);
modalBtnClose.addEventListener('click', toddleModal);
