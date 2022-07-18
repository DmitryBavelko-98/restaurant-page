'use strict';

import './style.css';
import renderHome from './modules/home.js';
import renderMenu from './modules/menu.js';
import renderContact from './modules/contact.js'; 

const home = document.querySelector('#home'),
      menu = document.querySelector('#menu'),
      contact = document.querySelector('#contact');

document.addEventListener('DOMContentLoaded', renderHome);
home.addEventListener('click', renderHome);
menu.addEventListener('click', renderMenu);
contact.addEventListener('click', renderContact);