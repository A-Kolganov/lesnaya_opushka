import contentModule from "../../templates/module.hbs";
import moduleObj from '../obj/module-obj';

function showContentModule(e) {
    e.preventDefault();
    
    const content = document.querySelector('.content__inner');
    const innerContent = document.querySelector('.content__content-info__card');
    content.removeChild(content.firstChild);
    content.insertAdjacentHTML("afterbegin", contentModule(moduleObj))
}

export {showContentModule};