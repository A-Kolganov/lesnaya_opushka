import templ from '../../templates/displayItem.hbs';
import {scrollToResolver} from '../../js/components/auto-scroll';
import {makeImgArr} from '../view/img-array';
import {fnReturn} from '../components/returnBtn';

import moduleObj from '../obj/module-obj';
import seedlingObj from '../obj/seedling-obj';
import lightObj from '../obj/light-obj';
import autoObj from '../obj/auto-obj';
import manureObj from '../obj/manure-obj';
import controlObj from '../obj/control-obj';

function displayItem(e) {
    e.preventDefault();
    const header = document.querySelector('.content__heading');
    const content = document.querySelector('.content__inner__upload');
    const btn =document.querySelector('.item__btn');
    console.log(e.target.textContent);




    if ( e.target.tagName === 'BUTTON' && e.target.textContent === 'читать далее'){
        if (content.children.length !== 0){
            while (content.hasChildNodes()) {
                content.removeChild(content.firstChild);
             }
        }
        const id = Number(e.target.parentNode.querySelector('.js-block-id').innerHTML);
        const category = e.target.parentNode.querySelector('.js-block-info').innerHTML;
        const name = e.target.parentNode.parentNode.parentNode.querySelector('.card__heading__text').innerHTML;
        header.textContent = name;
        let  founder = null;

        switch (category.toLowerCase()) {
            case String('АЭРОПОННЫЕ МОДУЛИ').toLowerCase():
                founder = moduleObj.find(i => i.id === id);
                content.insertAdjacentHTML("beforeend", templ(founder));
                makeImgArr(founder)
              break;
            case String('РАССАДА').toLowerCase():
                    founder = seedlingObj.find(i => i.id === id);
                    content.insertAdjacentHTML("beforeend", templ(founder));
                    makeImgArr(founder)
              break;
            case String('ОСВЕЩЕНИЕ').toLowerCase():
                    founder = lightObj.find(i => i.id === id);
                    content.insertAdjacentHTML("beforeend", templ(founder));
                    makeImgArr(founder)
              break;
            case String('АВТОМАТИЗАЦИЯ').toLowerCase():
                    founder = autoObj.find(i => i.id === id);
                    content.insertAdjacentHTML("beforeend", templ(founder));
                    makeImgArr(founder)
              break;
            case String('УДОБРЕНИЯ И СТИМУЛЯТОРЫ').toLowerCase():
                    founder = manureObj.find(i => i.id === id);
                    content.insertAdjacentHTML("beforeend", templ(founder));
                    makeImgArr(founder)
                    break;
              case String('КОНТРОЛЬ И ИЗМЕРЕНИЯ').toLowerCase():
                    founder = controlObj.find(i => i.id === id);
                    content.insertAdjacentHTML("beforeend", templ(founder));
                    makeImgArr(founder)
              break;
            default:
              alert( 'Сервис временно недоступен' );
        }
        const btnReturn = document.querySelector('.item__btn');
        btnReturn.addEventListener('click', fnReturn);
        scrollToResolver();
        return
        }
    if ( e.target.tagName === 'IMG' && document.querySelector('.item__img__cover__img')){
        const fullImg = document.querySelector('.item__img__cover__img');
        const imgSrc = e.target.getAttribute('src');
        fullImg.removeAttribute('src');
        fullImg.setAttribute('src', imgSrc);
    }
    scrollToResolver();
};

export {displayItem};