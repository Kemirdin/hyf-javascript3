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
  
 const httpRequest;
  makeRequest ();

  // create and send an XHR request
  function makeRequest () {
    httpRequest = new XMLHttpRequest ();
    httpRequest.onreadystatechange = responseMethod;
    httpRequest.open ('GET', url);
    httpRequest.send ();
  }
  // handle XHR response
  function responseMethod () {
    if (httpRequest.readyState === 4) {
      console.log (httpRequest.responseText);
    }
  }
})();

$ ('button').on ('click', function () {
  $ ('.repo-list').append ('<p class="loading">Loading...</p>');

  $.ajax ({
    method: 'GET',
    url: 'https://api.github.com/repos/HackYourFuture/CommandLine',
  })
    .done (function (data) {
      $.each (data, function (index, value) {
        console.log (value);
        $ ('ul').append ('<li>' + index + ':' + value + '</li>');
        //other items go in here.
      });
    })
    .fail (function () {
      console.log ('fail');
    })
    .always (function () {
      $ ('button').css ('color', 'red');
      $ ('.loading').remove ();
    });
});
