$(function () {
  $('.header__btn-menu').on('click', function () {
    $('.header__btn-menu').toggleClass('header__btn-menu--active'),
    $('.header__nav').toggleClass('header__nav--active')
    });  
  
    $('.nav-item').on('click', function () {
      $('.header__btn-menu').removeClass('header__btn-menu--active'),
      $('.header__nav').removeClass('header__nav--active')
    });
})