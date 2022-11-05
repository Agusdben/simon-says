import '../styles/modal.css'

export const modalGameOver = ({ title = '', score }) => {
  const modal = document.getElementById('modal')
  const closeModal = () => {
    modal.innerHTML = ''
  }

  modal.innerHTML = `
  <div class="modal__window">
    <div class="modal__container">
      <header class="modal__header"> 
        <p>${title} </p>
        <button class="btn btn--rounded modal__header__button modal__close">x</button>
      </header>
      <section class="modal__info">
        <p>Score: ${score}</p>
      </section>
      <button class="btn btn--primary modal__close modal__close-btn" >Close</button>
    </div>
    <button class="modal__close modal__background"></button>
  </div>
  `

  document
    .querySelectorAll('.modal__close')
    .forEach(btn => btn.addEventListener('click', closeModal))
}
