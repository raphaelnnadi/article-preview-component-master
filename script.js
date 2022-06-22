'use strict';

let myButton = document.getElementsByClassName('icon-share')[0];

myButton.addEventListener('touchstart', function () {
  myButton.classList.add('share');
});

myButton.addEventListener('touchend', function () {
  myButton.classList.remove('share');
});
