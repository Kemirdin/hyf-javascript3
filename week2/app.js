'use strict';

  //Search button
  const button = document.getElementById('button');
const container = document.getElementById("getResults");
  const search = document.getElementById ('search');
  search.addEventListener('click', makeRequest);
  
const input = document.getElementById('input');


const url = 'https://api.github.com/repos/HackYourFuture/';

document.getElementById("button").addEventListener('click', makeRequest);

function makeRequest() {
  const httpRequest = new XMLHttpRequest();
  httpRequest.open("GET", url + input.value);
  httpRequest.responseType = "json";
  httpRequest.send();
  httpRequest.onload = function () {
    const data = httpRequest.response;
    renderRepositories(data);
  };
  }
  
  function renderRepositories(val) {
    const h1 = createAndAppend("h1", container, val.name);
    const a = createAndAppend("a", container, val.html_url);
    a.setAttribute("href", val.html_url);
    a.setAttribute("target", "_blank");

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
