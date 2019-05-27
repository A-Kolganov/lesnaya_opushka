import home from '../../templates/homePage.hbs';
import contentModule from "../../templates/module.hbs";
import moduleObj from '../obj/module-obj';
import seedlingObj from '../obj/seedling-obj';
import lightObj from '../obj/light-obj';
import autoObj from '../obj/auto-obj';
import manureObj from '../obj/manure-obj';
import controlObj from '../obj/control-obj';


function showNavContent(e) {
    e.preventDefault();
    const header = document.querySelector('.content__heading');
    const content = document.querySelector('.content__inner__upload');
   
    if (content.children.length !== 0){
        while (content.hasChildNodes()) {
            content.removeChild(content.firstChild);
         }
    }

    if (String(e.target.textContent).toLowerCase().trim() === 'главная'){
        header.textContent = 'Лучшие продажи';
    };
    content.insertAdjacentHTML("beforeend", home());

    const topSale = document.querySelector('.topSale');
    topSale.insertAdjacentHTML("afterBegin", contentModule(moduleObj[0]));
    topSale.insertAdjacentHTML("afterBegin", contentModule(seedlingObj[0]));
    topSale.insertAdjacentHTML("afterBegin", contentModule(lightObj[0]));

    
      
}

export {showNavContent};