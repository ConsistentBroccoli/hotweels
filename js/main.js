$(document).ready(function(){
  
  
  // Меню
  document.querySelector('.menu-icon-wrapper').onclick = function(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
  };
  
  // owl-carousel
  $('.owl-carousel').owlCarousel({
    items:1
  });

  //scroll-to-top
  const scrollBtn = $('.scroll-to-top-btn');

  //По скроллу скрываем или показываем кнопку
  $(window).scroll(function(){
    if ( $(this).scrollTop() > 500 ) {
      scrollBtn.fadeIn();
    } else {
      scrollBtn.fadeOut();
    }
  });


  // Клик по кнопке
  scrollBtn.click(function(){
    $('html, body').animate({ scrollTop: 0 }, 360);
    return false;
  });

  // MixitUp
  let mixer = mixitup('.products__row');

});