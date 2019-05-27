import templ from '../../templates/modal.hbs';
function openModal(e){
    e.preventDefault();
    const modal = document.querySelector('.js-modal');
    if ( e.target.tagName === 'BUTTON'){
    modal.classList.add('modal-open');
    modal.insertAdjacentHTML("beforeend", templ());
    }
};

export {openModal};