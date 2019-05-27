import templ from '../../templates/aboutUs.hbs';
import {scrollToResolver} from '../../js/components/auto-scroll';

function showNavContentAbout(e){
    e.preventDefault();
    const header = document.querySelector('.content__heading');
    const content = document.querySelector('.content__inner__upload');
    if (content.children.length !== 0){
        while (content.hasChildNodes()) {
            content.removeChild(content.firstChild);
         }
    }

    header.textContent = 'о нас';
    content.insertAdjacentHTML("beforeend", templ())

    scrollToResolver();
}

export {showNavContentAbout};