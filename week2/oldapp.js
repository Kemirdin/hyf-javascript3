'use strict';

//Search button
const search = document.getElementById ('search');
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
  const httpRequest;

  document.getElementById("button").addEventListener('click', makeRequest);

  function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', url);
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
})();

