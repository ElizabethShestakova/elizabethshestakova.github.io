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

    close.forEach(function(item){
       item.addEventListener('click', function() {
        this.parentNode.parentNode.classList.remove('overlay');
        document.body.style.overflow = '';
       });
    });

});