import {showContentModule} from '../view/content-module';

function fnReturn (e) {
    e.preventDefault();
    const btn =document.querySelector('.item__btn');
    const category = btn.value;
    if (e.target == btn){
        showContentModule(e, category)
    }
   

};

export {fnReturn};