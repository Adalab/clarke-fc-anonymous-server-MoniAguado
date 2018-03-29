'use strict';

// MENU

var buttonOpen = document.querySelector('.nav-trigger');
var menu = document.querySelector('.nav');
var buttonClose = document.querySelector('.nav-close');

function openMenu() {
  menu.classList.add('menu-visible');
}

function closeMenu() {
  menu.classList.remove('menu-visible');
}

buttonOpen.addEventListener('click', openMenu);
buttonClose.addEventListener('click', closeMenu);


// var links = document.querySelectorAll('.nav-link');
// for (var i = 0; i < links.length; i++) {
// 	links[i].addEventListener('click', closeMenu);
// }
//
// var click = document.querySelector('.nav');
// click.addEventListener('click', closeMenu);
