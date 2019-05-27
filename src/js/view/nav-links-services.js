import templ from '../../templates/servicePage.hbs';
import {scrollToResolver} from '../../js/components/auto-scroll';

function showNavContentServices(e){
    e.preventDefault();
    const header = document.querySelector('.content__heading');
    const content = document.querySelector('.content__inner__upload');
    if (content.children.length !== 0){
        while (content.hasChildNodes()) {
            content.removeChild(content.firstChild);
         }
    }

    header.textContent = 'Услуги';
    content.insertAdjacentHTML("beforeend", templ())

    scrollToResolver();
}

export {showNavContentServices};