'use strict';


const search = document.getElementById('search');
const button = document.getElementById ('button');
const input = document.getElementById ('input');

function loading () {
  search.classList.add ('loading');

  setTimeout (function () {
    search.classList.remove ('loading');
  }, 1500);
}

button.addEventListener ('click', loading);

input.addEventListener ('keydown', function () {
  if (event.keyCode == 13) loading ();
});
