window.addEventListener('DOMContentLoaded', function () {

  'use strict';

  let writeMe = document.querySelectorAll('.write-me'),
      popup = document.querySelector('.popup'),
      close = document.querySelectorAll('.form-close');

  writeMe.forEach(function (item) {
      item.addEventListener('click', function (event) {
          event.preventDefault();
          popup.classList.add('overlay');
          document.body.style.overflow = 'hidden';
      });
  });

  close.forEach(function (item) {
      item.addEventListener('click', function () {
          this.parentNode.parentNode.classList.remove('overlay');
          document.body.style.overflow = '';
      });
  });

  var $page = $('html, body');
  $('a[href*="#"]').click(function () {
          if (this.hash == '#top') {
              $page.animate({scrollTop: 0}, 400);
          }
          else {
          $page.animate({
              scrollTop: $($.attr(this, 'href')).offset().top - 70
          }, 400);
      }
      return false;
  });

$(function () {

  $(window).scroll(function () {

      if ($(this).scrollTop() != 0) {

          $('#toTop').fadeIn();

      } else {

          $('#toTop').fadeOut();

      }

  });


});

});
// // Код учителя:
// $(document).ready(function() {

//     $('.write-me').click(function(event) {
//         event.preventDefault();
//         $('.popup').fadeIn(1000);
//         // $('.modal').slideDown(1000);
//     });

//     $('.form-close').click(function() {
//         // $('.modal').slideUp(1000);
//         $('.popup').fadeOut(1000);
//     });

// });