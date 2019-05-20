'use strict';

// SCSS

import '../scss/index.scss';

// VARIABLES

const burgerBtn = document.querySelector('.js-burger');

// JS

import {burgerMenuOpen} from '../js/view/burger-menu';

// EVENT LISTENERS

burgerBtn.addEventListener('click', burgerMenuOpen);


