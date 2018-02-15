var search = document.getElementById ('search');
var button = document.getElementById ('button');
var input = document.getElementById ('input');

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
function createCORSRequest (method, url) {
  var xhr = new XMLHttpRequest ();
  if ('withCredentials' in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open (method, url, true);
  } else if (typeof XDomainRequest != 'undefined') {
    // XDomainRequest for IE.
    xhr = new XDomainRequest ();
    xhr.open (method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Make the actual CORS request.
function makeCorsRequest () {
  // This is a sample server that supports CORS.
  var url = 'https://api.github.com/orgs/HackYourFuture/repos';

  var xhr = createCORSRequest ('GET', url);
  if (!xhr) {
    alert ('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function () {
    var text = xhr.responseText;
    alert ('Response from CORS request to ' + url + ': ' + text);
  };

  xhr.onerror = function () {
    alert ('Woops, there was an error making the request.');
  };

  xhr.send ();
}
