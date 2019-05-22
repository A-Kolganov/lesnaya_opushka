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

const content = document.querySelector('.content__inner');
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

