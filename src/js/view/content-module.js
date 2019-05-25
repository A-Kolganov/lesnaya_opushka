import contentModule from "../../templates/module.hbs";
import moduleObj from '../obj/module-obj';
import seedlingObj from '../obj/seedling-obj';
import lightObj from '../obj/light-obj';
import autoObj from '../obj/auto-obj';
import manureObj from '../obj/manure-obj';
import controlObj from '../obj/control-obj';


function showContentModule(e) {
    e.preventDefault();
    const header = document.querySelector('.content__heading');
    const content = document.querySelector('.content__inner__upload');
    header.textContent = String(e.target.value);

    if (content.children.length !== 0){
        while (content.hasChildNodes()) {
            content.removeChild(content.firstChild);
         }
    }

    switch (String(e.target.value).toLowerCase()) {
        case String('АЭРОПОННЫЕ МОДУЛИ').toLowerCase():
            moduleObj.forEach(i=>content.insertAdjacentHTML("beforeend", contentModule(i)));
          break;
        case String('РАССАДА').toLowerCase():
                seedlingObj.forEach(i=>content.insertAdjacentHTML("beforeend", contentModule(i)));
          break;
        case String('ОСВЕЩЕНИЕ').toLowerCase():
                lightObj.forEach(i=>content.insertAdjacentHTML("beforeend", contentModule(i)));
          break;
        case String('АВТОМАТИЗАЦИЯ').toLowerCase():
                autoObj.forEach(i=>content.insertAdjacentHTML("beforeend", contentModule(i)));
          break;
        case String('УДОБРЕНИЯ И СТИМУЛЯТОРЫ').toLowerCase():
                manureObj.forEach(i=>content.insertAdjacentHTML("beforeend", contentModule(i)));
          break;
          case String('КОНТРОЛЬ И ИЗМЕРЕНИЯ').toLowerCase():
                controlObj.forEach(i=>content.insertAdjacentHTML("beforeend", contentModule(i)));
          break;
        default:
          alert( 'Я таких значений не знаю' );
    }
}

export {showContentModule};