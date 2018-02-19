'use strict';

//Search button
const newLogo = document.createElement('img');
const newContainer = document.createElement ('div');
const newButton = document.createElement ('button');
const newInput = document.createElement ('input');
const newSearch = document.createElement ('div');

// Create the XHR object.

(function () {
  
  const url = 'https://api.github.com/repos/HackYourFuture/';
  const makeRequest;

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
//create and append
document.getElementById('logo').appendChild(newLogo);
document.getElementById ('search').appendChild (newSearch);
document.getElementById ('button').appendChild (newButton);
document.getElementById ('input').appendChild (newInput);
document.getElementById('getResults').appendChild(newContainer);

/*// Create the XHR object.

// (function () {
//  const url = 'https://api.github.com/orgs/HackYourFuture/repos';

//  const httpRequest;
//   makeRequest ();

//   // create and send an XHR request
//   function makeRequest () {
//     httpRequest = new XMLHttpRequest ();
//     httpRequest.onreadystatechange = responseMethod;
//     httpRequest.open ('GET', url);
//     httpRequest.send ();
//   }
//   // handle XHR response
//   function responseMethod () {
//     if (httpRequest.readyState === 4) {
//       console.log (httpRequest.responseText);
//     }
//   }
// })();*/
