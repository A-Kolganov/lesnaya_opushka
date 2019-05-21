const timerId = setInterval(function() {
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
       
        
    if(placeImg.classList.contains('js-img-one') ){
        placeImg.classList.remove('js-img-one');
        placeImg.classList.remove('js-img-three');
        placeImg.classList.add('js-img-two');
        bannerBtnTwo.classList.add('btn-turnOn');
       
        return
    }
    if(placeImg.classList.contains('js-img-two') ){
        placeImg.classList.remove('js-img-one');
        placeImg.classList.remove('js-img-two');
        placeImg.classList.add('js-img-three');
        bannerBtnThree.classList.add('btn-turnOn');
       
       return
    }
    if(placeImg.classList.contains('js-img-three') ){
        placeImg.classList.remove('js-img-three');
        placeImg.classList.remove('js-img-two');
        placeImg.classList.add('js-img-one');
       bannerBtnOne.classList.add('btn-turnOn');
       
       return
    }}
  }, 5000);

  export {timerId};
