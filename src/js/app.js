import mixitup from 'mixitup';
import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp(); // для коректной работы пребразования файлов в webp формат



$(function () {

  // open/close burger-menu 
  $('.header__btn-menu').on('click', function () {
    $('.header__btn-menu').toggleClass('header__btn-menu--active'),
    $('.header__nav').toggleClass('header__nav--active')
    });  
  
  $('.header__link, .header__lang').on('click', function () {
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



  //мультиязычность

  var arrLang = {
    "ru" : {
      'home' : 'Главная',
      'about' : 'Обо мне',
      'skills' : 'Навыки',
      'portfolio' : 'Портфолио',
      'contacts' : 'Контакты',
      
      "name" : "Виктория Свистунова",
      'profession-1' : 'HTML-верстальщик/Front-end-разработчик',

      'about-text-1' : 'Привет, меня зовут Виктория и я веб-разработчик из Минска.',
      'about-text-2' : `Закончила курсы "HTML5 верстки" в IT-INCUBATOR и
                        продолжаю обучаться на курсах "Junior Software Engineer in JavaScript/Front-end" в The Rolling Scopes.`,
      'about-text-3' : `Имею коммерческий опыт разработки. Готова реализовать отличные проекты
                        с замечательными людьми`,
      'about-link' : 'мое резюме',

      'skills-subtitle' : 'Я работаю с такими инструментами:',
      'skills-subtitle-2' : 'Для вёрстка сайтов и приложений использую платформы:',

      'webpage' : 'Сайты',
      'app' : 'Приложения',

      'portfolio-title-1' : 'Smoothie - сайт-визитка продукта',
      'portfolio-title-2' : 'HelyFly - сайт-визитка сервиса',
      'portfolio-title-3' : `Портфолио фотографа - сайт-визитка услуг`,
      'portfolio-title-4' : 'Мебель для жизни - многостраничный сайт-каталог',
      'portfolio-title-5' : 'Singolo - целевая страница ',
      'portfolio-title-6' : 'Manao - сайт-визитка',
      'portfolio-title-7' : 'Твоя продуктивность - сайт-визитка сервиса',
      'portfolio-title-8' : 'Поймай снеговика - игра на скорость реакции',
      'portfolio-title-9' : 'Интерактивная галерея - слайдер изображений',
      'portfolio-title-10' : 'Медитация - приложение для расслабления и медитации',
      'portfolio-title-11' : 'Капля дождя - игра на знание арифметики',
      'portfolio-title-12' : 'Plants - лендинг сайта, предлагающего свои услуги по выращиванию растений.',
      'portfolio-title-13' : 'Momentum — аналог одноименного приложения Интернет-магазина Chrome.',
      'more' : 'смотреть ещё',

      'contact-subtitle' : `Хотите узнать больше или просто поболтать? Вот мои контакты:`,

    },
  
    "en" : {
      'home' : 'Home',
      'about' : 'About me',
      'skills' : 'Skills',
      'portfolio' : 'Portfolio',
      'contacts' : 'Contacts',
      
      "name" : "Viktoryia Svistunova",
      'profession-1' : 'HTML coder/ Front-end Developer',

      'about-text-1' : `Hi, I'm Viktoryia – HTML coder from Minsk. 
                        I'm interested in web-development and everything connected with it.`,
      'about-text-2' : `I completed the courses "HTML5 coding" in IT-INCUBATOR and 
                        I'm studying at courses "Junior Software Engineer in JavaScript/Front-end" in The Rolling Scopes.`,
      'about-text-3' : `Ready to implement excellent projects
                        with wonderful people -`,
      'about-link' : 'open my CV',

      'skills-subtitle' : 'I work with such tools:',
      'skills-subtitle-2' : 'Layout of sites and applications based on layouts from:',

      'webpage' : 'webpage',
      'app' : 'app',

      'portfolio-title-1' : 'Smoothie - landing page contains information about a product',
      'portfolio-title-2' : 'HelyFly - landing page contains information about a service',
      'portfolio-title-3' : `Photographer's portfolio - landing page`,
      'portfolio-title-4' : 'Furniture for life - multipage site',
      'portfolio-title-5' : 'Simple singolo - landing page',
      'portfolio-title-6' : 'Test-manao - landing page',
      'portfolio-title-7' : 'Your productivity - landing page',
      'portfolio-title-8' : 'Whack a snowman - reaction speed game',
      'portfolio-title-9' : 'Flex Panel Gallery - javascript image slider',
      'portfolio-title-10' : 'Meditation App - relaxation and meditation app',
      'portfolio-title-11' : 'RainDrop game/app - a simulator in mathematics',
      'portfolio-title-12' : 'Plants - landing page of a site that offers its services for growing plants.',
      'portfolio-title-13' : 'Momentum - analogue of the eponymous application of the Chrome Web Store.',
      'more' : 'More',

      'contact-subtitle' : `Want to know more or just chat? 
                            You are welcome!`,
    },
  }


  $(function() {
    $('.translate').click(function() {
      var lang = $(this).attr('id');
      $('.header__lang-btn').removeClass('header__lang-btn--active');
      $(this).addClass('header__lang-btn--active');
  
      $('.lang').each(function(index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    });
  });

  const swiper = new Swiper('.swiper', {
    speed: 700,
    autoplay: true,
    spaceBetween: 20,
    effect: 'coverflow',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });