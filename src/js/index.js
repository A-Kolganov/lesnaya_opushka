'use strict';

// SCSS

import '../scss/index.scss';

// TEMPLATES

import contentModule from "../templates/module.hbs";

// VARIABLES

const burgerBtn = document.querySelector('.js-burger');

const bannerBtnOne = document.querySelector('.js-img-btn-one');
const bannerBtnTwo = document.querySelector('.js-img-btn-two');
const bannerBtnThree = document.querySelector('.js-img-btn-three');

const btnNavModule = document.querySelector('.content__nav__btn-link--modules');
const btnNavSeedlings = document.querySelector('.content__nav__btn-link--seedlings');
const btnNavLight = document.querySelector('.content__nav__btn-link--light');
const btnNavAuto = document.querySelector('.content__nav__btn-link--auto');
const btnNavManure = document.querySelector('.content__nav__btn-link--manure');
const btnNavControl = document.querySelector('.content__nav__btn-link--control');

// JS

import {burgerMenuOpen} from '../js/view/burger-menu';

import {chooseImg} from '../js/view/img-banner';
import {timer} from '../js/components/img-auto-change';
import {showContentModule} from '../js/view/content-module';
// EVENT LISTENERS

burgerBtn.addEventListener('click', burgerMenuOpen);

bannerBtnOne.addEventListener('click', chooseImg);
bannerBtnTwo.addEventListener('click', chooseImg);
bannerBtnThree.addEventListener('click', chooseImg);

btnNavModule.addEventListener('click', showContentModule);
btnNavSeedlings.addEventListener('click', showContentModule);
btnNavLight.addEventListener('click', showContentModule); 
btnNavAuto.addEventListener('click', showContentModule); 
btnNavManure.addEventListener('click', showContentModule); 
btnNavControl.addEventListener('click', showContentModule); 

