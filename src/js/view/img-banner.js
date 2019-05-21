function chooseImg (e) {
    e.preventDefault();
    const placeImg = document.querySelector('.img-section__img');
    const bannerBtnOne = document.querySelector('.js-img-btn-one');
    const bannerBtnTwo = document.querySelector('.js-img-btn-two');
    const bannerBtnThree = document.querySelector('.js-img-btn-three');

    const hasSelectedBtnOne = bannerBtnOne.classList.contains('btn-turnOn');
    const hasSelectedBtnTwo = bannerBtnTwo.classList.contains('btn-turnOn');
    const hasSelectedBtnThree = bannerBtnThree.classList.contains('btn-turnOn');

    if (hasSelectedBtnOne || hasSelectedBtnTwo || hasSelectedBtnThree) {
        bannerBtnOne.classList.remove('btn-turnOn');
        bannerBtnTwo.classList.remove('btn-turnOn');
        bannerBtnThree.classList.remove('btn-turnOn');
        
    }
    e.target.classList.add('btn-turnOn');
    if(e.target.classList.contains('img-section__btn--first') ){
        placeImg.classList.remove('js-img-two');
        placeImg.classList.remove('js-img-three');
        placeImg.classList.add('js-img-one');
     
    }
    if(e.target.classList.contains('img-section__btn--second') ){
        placeImg.classList.remove('js-img-one');
        placeImg.classList.remove('js-img-three');
        placeImg.classList.add('js-img-two');
       
    }
    if(e.target.classList.contains('img-section__btn--third') ){
        placeImg.classList.remove('js-img-one');
        placeImg.classList.remove('js-img-two');
        placeImg.classList.add('js-img-three');
       
    }
    
}

export {chooseImg};