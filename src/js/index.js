'use strict';

// SCSS

import '../scss/index.scss';

// VARIABLES

const burgerBtn = document.querySelector('.js-burger');
const bannerBtnOne = document.querySelector('.js-img-btn-one');
const bannerBtnTwo = document.querySelector('.js-img-btn-two');
const bannerBtnThree = document.querySelector('.js-img-btn-three');

// JS

import {burgerMenuOpen} from '../js/view/burger-menu';

import {chooseImg} from '../js/view/img-banner';
// EVENT LISTENERS

burgerBtn.addEventListener('click', burgerMenuOpen);

bannerBtnOne.addEventListener('click', chooseImg);
bannerBtnTwo.addEventListener('click', chooseImg);
bannerBtnThree.addEventListener('click', chooseImg);


