import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp(); // для коректной работы пребразования файлов в webp формат

import jquery from './../../node_modules/jquery/dist/jquery';
import slick from './../../node_modules/slick-carousel/slick/slick.js';

$(function () {
  $('.header__btn-menu').on('click', function () {
    $('.header__btn-menu').toggleClass('header__btn-menu--active'),
    $('.header__nav').toggleClass('header__nav--active')
    });  
  
    $('.nav-item').on('click', function () {
      $('.header__btn-menu').removeClass('header__btn-menu--active'),
      $('.header__nav').removeClass('header__nav--active')
    });

    $('.portfolio__content').slick({
      dots: true,
      arrows: false,
      autoplay: true,
    });
})