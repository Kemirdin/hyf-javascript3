
function checkTheName () {
  // this function runs when pressing
  detailsDiv.innerHTML = ''; // the search button, and it makes http requests
  let userName = searchBox.value;
  detailsDiv.appendChild (h2);
  detailsDiv.appendChild (h3);
  makeRequest (
    'https://api.github.com/users/' + userName + '/repos'
  ).then (data => {
    img.src = data[0].owner.avatar_url;
    h2.innerHTML = userName;
    detailsDiv.appendChild (img);
    let repoName = '';
    data.forEach (repo => {
      repoName = repo.name;
      let li = document.createElement ('li');
      li.innerHTML = repoName;
      h3.innerHTML = userName + "'s repositories:";
      let link = repo.html_url;
      let a = document.createElement ('a');
      a.href = link;
      makeRequest (
        'https://api.github.com/repos/' + userName + '/' + repoName + '/commits'
      ).then (commit => {
        let lastCommit = commit[0];
        let authorImg = document.createElement ('img');
        authorImg.src = lastCommit.author.avatar_url;
        authorImg.className = 'author-img';
        h3.appendChild (a);
        let p = document.createElement ('p');
        let commitDate = lastCommit.commit.author.date;
        let commitAuthor = lastCommit.commit.author.name;
        p.innerHTML =
          'Last commit was at ' + commitDate + ' by ' + commitAuthor;
        li.appendChild (p);
        li.appendChild (authorImg);
        a.appendChild (li);
      });
    });
  });
}








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
  var url =
    'https://api.github.com/orgs/HackYourFuture/repos';

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
