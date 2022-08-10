import mixitup from 'mixitup';
import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp(); // для коректной работы пребразования файлов в webp формат



$(function () {

  // open/close burger-menu 
  $('.header__btn-menu').on('click', function () {
    $('.header__btn-menu').toggleClass('header__btn-menu--active'),
    $('.header__nav').toggleClass('header__nav--active')
    });  
  
  $('.header__link').on('click', function () {
      $('.header__btn-menu').removeClass('header__btn-menu--active'),
      $('.header__nav').removeClass('header__nav--active')
    });


  
  // responsive, client-side pagination
  $('.portfolio__spoiler-click').click(function(event) {
    $(this).toggleClass('active').next().slideToggle(300);
  });

  var mixer = mixitup('.portfolio__body' , {
    load: {
      filter: '.webpage'
    }
  });
});



// slowly anchors

let anchors = document.querySelectorAll('a[href*="#"]');

for(let anchor of anchors) {
  anchor.addEventListener('click', function(event) {
    event.preventDefault();
    let blockID = anchor.getAttribute('href');
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}



// scroll animation

const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(params) {
    for (let i=0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight/animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight/animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('active-animation');
      } else {
        if (!animItem.classList.contains('anim-no-hide')) {          
          animItem.classList.remove('active-animation');
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
  }

  
    animOnScroll();
  
}

