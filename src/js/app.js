//import './libs/libs.js'

import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp(); // для коректной работы пребразования файлов в webp формат


$(function () {
  $('.header__btn-menu').on('click', function () {
    $('.header__btn-menu').toggleClass('header__btn-menu--active'),
    $('.header__nav').toggleClass('header__nav--active')
    });  
  
  $('.header__link').on('click', function () {
      $('.header__btn-menu').removeClass('header__btn-menu--active'),
      $('.header__nav').removeClass('header__nav--active')
    });

  $('.portfolio__spoiler-click').click(function(event) {
    $(this).toggleClass('active').next().slideToggle(300);
  });


    /*

    $('.portfolio__content').slick({
      dots: true,
      arrows: false,
      autoplay: true,
    });
    */
});



// slowly anchors

let anchors = document.querySelectorAll('a[href*="#"]');

for(let anchor of anchors) {
  anchor.addEventListener('click', function(event) {
    removeMenuAndClose();
    event.preventDefault();
    let blockID = anchor.getAttribute('href');
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

