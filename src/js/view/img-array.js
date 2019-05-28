function makeImgArr(obj) {
    const array = obj.imgArr;
    array.forEach(i=> {
        const img = document.createElement('img');
        
        img.classList.add('item__img__arr__item');
        img.setAttribute('src', i);
        const place = document.querySelector('.item__img__arr');
        place.insertAdjacentElement("afterbegin", img);
    });

};

export {makeImgArr};