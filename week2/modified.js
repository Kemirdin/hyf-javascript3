'use strict';

function makeRequest(url, methodType, callback) {
  const xhr = new XMLHttpRequest ();
  xhr.open (methodType, url, true);
  xhr.send ();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log ('xhr done successfully');
        const resp = xhr.responseText;
        const respJson = JSON.parse (resp);
        callback (respJson);
      } else {
        console.log ('xhr failed');
      }
    } else {
      console.log ('xhr processing going on');
    }
  };
  console.log('request sent successfully');
}

document.getElementById ('userDetails').addEventListener ('click', function () {
  // git hub url to get btford details
  const userId = document.getElementById ('userId').value;
  const URL = 'https://api.github.com/users/' + userId;
  makeRequest (URL, 'GET', userDetailsResponse);
});

document.getElementById ('repoList').addEventListener ('click', function () {
  // git hub url to get btford details
  const userId = document.getElementById ('userId').value;
  const URL = 'https://api.github.com/users/' + userId + '/repos';
  makeRequest (URL, 'GET', repoListResponse);
});

function userDetailsResponse (userData) {
  console.log ('render user details', userData);
}

function repoListResponse (repoList) {
  console.log ('render repo list', repoList);
}
