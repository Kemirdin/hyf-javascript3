function makeRequest (url, methodType, callback) {
  const xhr = new XMLHttpRequest ();
  xhr.open (methodType, url, true);
  xhr.send ();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log ('xhr done successfully');
        var resp = xhr.responseText;
        var respJson = JSON.parse (resp);
        callback (respJson);
      } else {
        console.log ('xhr failed');
      }
    } else {
      console.log ('xhr processing going on');
    }
  };
  console.log ('request sent succesfully');
}

document.getElementById ('userDetails').addEventListener ('click', function () {
  // git hub url to get btford details
  var userId = document.getElementById ('userId').value;
  var URL = 'https://api.github.com/users/' + userId;
  makeAjaxCall (URL, 'GET', processUserDetailsResponse);
});

document.getElementById ('repoList').addEventListener ('click', function () {
  // git hub url to get btford details
  var userId = document.getElementById ('userId').value;
  var URL = 'https://api.github.com/users/' + userId + '/repos';
  makeRequest (URL, 'GET', processRepoListResponse);
});

function processUserDetailsResponse (userData) {
  console.log ('render user details', userData);
}

function processRepoListResponse (repoList) {
  console.log ('render repo list', repoList);
}
