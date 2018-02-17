"use strict";
let body = window.document.getElementsByTagName("body");
let resultEl = document.querySelector("#resultEl");
let loaderEl = document.getElementById("resultLoader");
let search = document.getElementById('search');
let button = document.getElementById('button');
let input = document.getElementById('input');

function loading() {
  search.classList.add('loading');

  setTimeout(function () {
    search.classList.remove('loading');
  }, 1500);
}

button.addEventListener('click', loading);

input.addEventListener('keydown', function () {
  if (event.keyCode == 13) loading();
});



// Create the XHR object.

(function () {
  let httpRequest;
  document.getElementById("button").addEventListener('click', makeRequest);

  function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', 'https://api.github.com/orgs/HackYourFuture/repos');
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




function renderHTML(data, amount) {
  var htmlString = "";
  if (amount == "all") {
    var amount = data.length;
  }
  if (amount == "sorry") {
    var amount = 0;
  }
  for (i = 0; i < amount; i++) {
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes";
    for (ii = 0; ii < data[i].foods.likes.length; ii++) {
      htmlString += " " + data[i].foods.likes[ii] + " and";
    }
    htmlString = htmlString.slice(0, -4);
    htmlString += ".</p>";
  }
  myContainer.insertAdjacentHTML("beforeend", htmlString);
}




