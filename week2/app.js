"use strict";
var body = window.document.getElementsByTagName("body")[0];
var resultEl = document.querySelector("#resultEl");
var loaderEl = document.getElementById("resultLoader");
var search = document.getElementById('search');
var button = document.getElementById ('button');
 var input = document.getElementById('input');

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
  var httpRequest;
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


// this is my another myRequest but it was not work
/*var myRequest = new XMLHttpRequest();
var myURL = 'https://api.github.com/orgs/HackYourFuture/repos';
myRequest.open("GET", myURL);

var errorMSG = 'Woops, there was an error making the request.';

button.addEventListener("click", function () {

  var input = document.getElementById('input');
  if (isNaN(input)) {

    // Check to see if the input is the word "all", which will request all the pet data.
    if (input === "all") {
      var submit = "all";
    } else {
      var submit = "sorry";
      // Here's where our error message will be called.
      alert(errorMSG);
    }
  }else {
  var submit = parseInt(input);
  }

  var myRequest = new XMLHttpRequest();
  myRequest.open("GET", ourURL);
  myRequest.onload = function () {
    var myData = JSON.parse(myRequest.responseText);
    renderHTML(myData, submit);
    console.log(myData);
  };
   myRequest.send();
   });

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
  petContainer.insertAdjacentHTML("beforeend", htmlString);
}




//   function createCORSRequest(method, url) {
//   var xhr = new XMLHttpRequest ();
//   if ('withCredentials' in xhr) {
//     // XHR for Chrome/Firefox/Opera/Safari.
//     xhr.open (method, url, true);
//   } else if (typeof XDomainRequest != 'undefined') {
//     // XDomainRequest for IE.
//     xhr = new XDomainRequest ();
//     xhr.open (method, url);
//   } else {
//     // CORS not supported.
//     xhr = null;
//   }
//   return xhr;
// }
*/
// // Make the actual CORS request.
// function makeCorsRequest () {
//   // This is a sample server that supports CORS.
//   var url = 'https://api.github.com/orgs/HackYourFuture/repos';

//   var xhr = createCORSRequest ('GET', url);
//   if (!xhr) {
//     alert ('CORS not supported');
//     return;
//   }

//   // Response handlers.
//   xhr.onload = function () {
//     var text = xhr.responseText;
//     alert ('Response from CORS request to ' + url + ': ' + text);
//   };

//   xhr.onerror = function () {
//     alert ();
//   };

//   xhr.send ();
// }
