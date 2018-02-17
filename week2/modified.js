'use strict';

//Search button  
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

// Create the XHR object.

(function () {
 const url = 'https://api.github.com/orgs/HackYourFuture/repos';
 //const apiKey = 'APIKEY'; 
 const httpRequest;
  makeRequest ();

  // create and send an XHR request
  function makeRequest () {
    httpRequest = new XMLHttpRequest ();
    httpRequest.onreadystatechange = responseMethod;
    httpRequest.open ('GET', url  /* + '&appid=' + apiKey*/);
    httpRequest.send ();
  }
  // handle XHR response
  function responseMethod () {
    if (httpRequest.readyState === 4) {
      console.log (httpRequest.responseText);
    }
  }
}) ();
