'use strict';
// Create the XHR object.

  function makeMyXHR(url, methodType) {
    const promiseObj = new Promise(function (resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open(methodType, url, true);
      xhr.send();
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('xhr done successfully');
            const resp = xhr.responseText;
            const respJson = JSON.parse(resp);
            resolve(respJson);
          } else {
            reject(xhr.status);
            console.log('xhr failed');
          }
        } else {
          console.log('xhr processing going on');
        }
      };
      console.log('request sent successfully');
    });

    return promiseObj;
  }

  document.getElementById('userDetails').addEventListener('click', function () {
    const userId = document.getElementById('userId').value;
    const url = 'https://api.github.com/users/' + userId;
    makeMyXHR(url, 'GET').then(uerDetailsResponse, errorHandler);
  });

  document.getElementById('repoList').addEventListener('click', function () {
    const userId = document.getElementById('userId').value;
    const url = 'https://api.github.com/users/' + userId + '/repos';
    makeMyXHR(url, 'GET').then(repoListResponse, errorHandler);
  });

  function uerDetailsResponse(userData) {
    console.log('render user details', userData);
  }

  function repoListResponse(repoList) {
    console.log('render repo list', repoList);
  }

  function errorHandler(statusCode) {
    console.log('failed with status', status);
  }
}