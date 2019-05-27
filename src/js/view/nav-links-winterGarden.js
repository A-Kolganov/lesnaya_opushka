import templ from '../../templates/winterGarden.hbs';
import {scrollToResolver} from '../../js/components/auto-scroll';

function showNavContentWinterGarden(e){
    e.preventDefault();
    const header = document.querySelector('.content__heading');
    const content = document.querySelector('.content__inner__upload');
    if (content.children.length !== 0){
        while (content.hasChildNodes()) {
            content.removeChild(content.firstChild);
         }
    }

    header.textContent = 'Зимний сад и оранжереи';
    content.insertAdjacentHTML("beforeend", templ())

    scrollToResolver();
}

export {showNavContentWinterGarden};