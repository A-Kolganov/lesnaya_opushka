function burgerMenuOpen (e) {
    const list =document.querySelector('.js-burger-list')
    const hasClass = list.classList.contains('header__box__nav__ul');
    if(hasClass){
        list.classList.remove('header__box__nav__ul');
        list.classList.add('header__box__nav__ul--open');
    };
    if(!hasClass){
        list.classList.remove('header__box__nav__ul--open');
        list.classList.add('header__box__nav__ul');
    }
    
    
}

export {burgerMenuOpen};