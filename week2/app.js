'use strict';

  //Search button
  const button = document.getElementById('button');
 const container = document.getElementById("getResults");
  const search = document.getElementById ('search');
  search.addEventListener('click', makeRequest);
  
const input = document.getElementById('input');


const url = 'https://api.github.com/repos/HackYourFuture/';

document.getElementById("button").addEventListener('click', makeRequest);
// Create the XHR object.

function makeRequest() {
  const httpRequest = new XMLHttpRequest();
  httpRequest.open("GET", url + input.value);
  httpRequest.responseType = "json";
  httpRequest.send();
  httpRequest.onload = function () {
    const data = httpRequest.response;
    renderRepositories(data);
  };
  httpRequest.onerror = function () {
    httpRequest.statusText;

  };
  }
  // render repository button click

  function renderRepositories(data) {
    const h1 = createAndAppend("h1", getRsults, data.full_name);
    const ul = createAndAppend("ul", getRsults);
    const li = createAndAppend("li", ul);
    const a = createAndAppend("a", li, data.html_url);
    a.setAttribute("href", data.html_url);
    a.setAttribute("target", "_blank");
    const xhrCont = new XMLHttpRequest();
    xhrCont.open("GET", data.contributors_url);
    xhrCont.send();
    xhrCont.responseType = "json";
    xhrCont.onload = function () {
        const output = xhrCont.response;
        getContributors(output);

    }     
//get contributer date function
function getContributors (data) {
  for (let i = 0; i < data.length; i++) {
    const ul = createAndAppend ('ul', getRsults);
    const li = createAndAppend ('li', ul);
    const a = createAndAppend (
      'a',
      li,
      '<hr><br>' + data[i].login + '<br><br>'
    );
    a.setAttribute ('href', data[i].html_url);
    a.setAttribute ('target', '_blank');
    const img = createAndAppend ('img', li);
    img.setAttribute ('src', data[i].avatar_url);
  }
}
    
  // create and append function
    
  
function createAndAppend (name, append, innerHTML) {
  const child = document.createElement (name);
  append.appendChild (child);
  if (innerHTML !== undefined) {
    child.innerHTML = innerHTML;
  }
  return child;
}
