import home from '../../templates/guarantyPage.hbs';
import {scrollToResolver} from '../../js/components/auto-scroll';

function showNavContentGuaranty(e){
    e.preventDefault();
    const header = document.querySelector('.content__heading');
    const content = document.querySelector('.content__inner__upload');
    if (content.children.length !== 0){
        while (content.hasChildNodes()) {
            content.removeChild(content.firstChild);
         }
    }

    header.textContent = 'сервис и гарантии';
    content.insertAdjacentHTML("beforeend", home())

    scrollToResolver();
}

export {showNavContentGuaranty};