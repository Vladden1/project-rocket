(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-video__modal-open]'),
    closeModalBtn: document.querySelector('[data-video__modal-close]'),
    modal: document.querySelector('[data-video__modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();