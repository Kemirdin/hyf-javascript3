'use strict';

  //Search button
  const button = document.getElementById('button');
  
  const search = document.getElementById ('search');
  search.addEventListener('click', myXML, true);
  function myXML() {
  const input = document.getElementById ('input').value;


  const url = 'https://api.github.com/orgs/HackYourFuture/repos';
  const httpRequest;

  document.getElementById("button").addEventListener('click', makeRequest);

  function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', url);
    const myData = JSON.parse (httRequest.responseText);
renderHTML (myData);

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
}) ();

//actually, I would like to get 'repo info' but still has few problems
//my renderHtmle functions doesn't  work
function renderHTML (myData;
) {
  var htmlString = '';

  for (i = 0; i < myData.length; i++) {
    htmlString +=
      '<p>' + myData[i].name + ' is a ' + myData[i].name + ' Repo ';
    for (ii = 0; ii < myData[i].id.name.length; ii++) {
      if (ii == 0) {
        htmlString += myData[i].foods.id[ii];
      } else {
        htmlString += ' and ' + myData[i].id.name[ii];
      }
    }
    htmlString += ' and  ';
    for (ii = 0; ii < myData[i].id.name.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].id.name[ii];
      } else {
        htmlString += ' and ' + data[i].id.name[ii];
      }
    }
    htmlString += '.</p>';
  }
  myContainer.insertAdjacentHTML ('beforeend', htmlString);
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

  // Fetch request
  //actually, I would like to make Fetch but still has few problems
//my Fetch functions doesn't  work


  (function() {
	var url = "https://api.github.com/orgs/HackYourFuture/repos";
	

	fetch(url).then(function(response) {
		if (!response.ok) {
			throw Error(response.statusText);
		}
		return(response.json());
	}).then(function(response) {
		renderHTML(response);
	}).catch(function() {
		updateUIError();
	});

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  





