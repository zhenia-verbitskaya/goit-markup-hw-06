(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }
})();


(() => {
  const ref = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
  };
  ref.openMenuBtn.addEventListener("click", toggleMenu);
  ref.closeMenuBtn.addEventListener("click", toggleMenu);
  function toggleMenu() {
    ref.menu.classList.toggle("is-open");
  }
})();
