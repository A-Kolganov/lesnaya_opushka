import contentModule from "../../templates/module.hbs";
import moduleObj from '../obj/module-obj';

function showContentModule(e) {
    e.preventDefault();
    
    const content = document.querySelector('.content__inner');
    console.log(content.children.length)
    if (content.children.length !== 0){
        while (content.hasChildNodes()) {
            content.removeChild(content.firstChild);
         }
    }
    moduleObj.forEach(i=>content.insertAdjacentHTML("beforeend", contentModule(i)));
}

export {showContentModule};