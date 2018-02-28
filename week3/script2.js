'use strict';

{
  //   const githubSearch = document.getElementById ('input');

  const githubUsers = document.getElementById ('githubUsers');
  const githubRep = document.getElementById ('githubRep');

  document
    .getElementById ('userDetails')
    .addEventListener ('click', uerDetailsResponse, true);

  document
    .getElementById ('hyfList')
    .addEventListener ('click', hyfListResponse, true);

  function getJSON (url) {
    // Return a new promise.

    return new Promise ((resolve, reject) => {
      // Do the usual XHR stuff
      const req = new XMLHttpRequest ();
      req.open ('GET', url);
      req.responseType = 'json';

      req.onload = function () {
        // This is called even on 404 etc
        // so check the status
        if (req.status === 200) {
          // Resolve the promise with the response text
          resolve (req.response);
        } else {
          // Otherwise reject with the status text
          // which will hopefully be a meaningful error
          reject (Error (req.statusText));
        }
      };

      // Handle network errors
      req.onerror = function () {
        reject (Error ('Network Error'));
      };

      // Make the request
      req.send ();
    });
  }
  function hyfListResponse () {
    getJSON (
      'https://api.github.com/repos/HackYourFuture/' +
        document.getElementById ('input')
    ).then (data => {
      if (data.message) {
        githubUsers.innerHTML = '';
        githubRep.innerHTML = '';
        createAndAppend ('h1', githubRep, 'this repository does not exist ');
      } else {
        githubRep.innerHTML = '';
        githubUsers.innerHTML = '';

        const repLink = data.svn_url;

        const contributorsUrl = data.contributors_url;
        const hyfRepLink =
          '<a href="' + repLink + '">' + 'View ' + data.name + '</a>';

        createAndAppend ('h1', githubRep, 'Repository Name : ' + data.name);
        createAndAppend ('h2', githubRep, 'Description : ' + data.description);
        createAndAppend ('h3', githubRep, ' Created at : ' + data.created_at);
        createAndAppend ('h3', githubRep, ' Updated at ' + data.updated_at);
        createAndAppend ('h3', githubRep, 'Pushed at : ' + data.pushed_at);
        createAndAppend ('h3', githubRep, ' Forks : ' + data.forks);
        createAndAppend ('h3', githubRep, 'On Branch : ' + data.default_branch);
        createAndAppend ('h3', githubRep, hyfRepLink);

        getJSON (contributorsUrl).then (data => {
          createAndAppend ('h2', githubRep, 'Contributors : ');

          data.forEach (element => {
            const contributorImg = element.avatar_url;
            const contributorImgLink = '<img src="' + contributorImg + '">';

            createAndAppend ('h2', githubRep, ' - Name : ' + element.login);
            createAndAppend ('div', githubRep, contributorImgLink);
            createAndAppend (
              'h2',
              githubRep,
              'contributions : ' + element.contributions
            );
          });
        });
      }
    });
  }

  function uerDetailsResponse () {
    getJSON (
      'https://api.github.com/users/' +
        document.getElementById ('input') +
        '/repos'
    ).then (data => {
      if (data.message) {
        githubUsers.innerHTML = '';
        githubRep.innerHTML = '';
        createAndAppend ('h1', githubUsers, 'this user does not exist');
      } else {
        githubUsers.innerHTML = '';
        githubRep.innerHTML = '';

        const userName = document.createElement ('h1');
        userName.innerHTML = data[0].owner.login;
        githubUsers.appendChild (userName);

        const userImg = document.createElement ('img');
        userImg.setAttribute ('src', data[0].owner.avatar_url);
        githubUsers.appendChild (userImg);

        const userLink = document.createElement ('a');
        userLink.setAttribute ('href', data[0].owner.html_url);
        userLink.innerHTML = '<h3>' + 'Visit user' + '</h3>';

        githubUsers.appendChild (userLink);
        // createAndAppend('h3', users, '<a href="' + data[0].owner.html_url + '">' + 'visit user' + '</a>');
        createAndAppend ('h1', githubUsers, 'Repositories :');

        for (const key in data) {
          const repositoryDiv = document.createElement ('div');
          repositoryDiv.setAttribute ('id', data[key].name);

          const nameOfRep = document.createElement ('h2');
          const description = document.createElement ('h3');
          const created = document.createElement ('h3');
          const updated = document.createElement ('h3');
          createAndAppend ('h2', githubUsers, '<br>' + '<~~~~~~~~~~~~~~~~>');
          nameOfRep.innerHTML = '-Repository name : ' + data[key].name;
          description.innerHTML = 'Description : ' + data[key].description;
          created.innerHTML = 'Created at : ' + data[key].created_at;
          updated.innerHTML = 'Updated at : ' + data[key].updated_at;

          githubUsers.appendChild (repositoryDiv);
          repositoryDiv.appendChild (nameOfRep);
          repositoryDiv.appendChild (description);
          repositoryDiv.appendChild (created);
          repositoryDiv.appendChild (updated);

          createAndAppend ('h1', repositoryDiv, '<br>' + 'Contributors : ');

          getJSON (data[key].contributors_url).then (contData => {
            for (let i = 0; i < contData.length; i++) {
              const ContributorName = document.createElement ('h2');
              const ContributorPic = document.createElement ('img');

              ContributorPic.setAttribute ('src', contData[i].avatar_url);
              ContributorName.innerHTML = contData[i].login;

              repositoryDiv.appendChild (ContributorName);
              repositoryDiv.appendChild (ContributorPic);
            }
          });
        }
      }
    });
  }

  function createAndAppend (name, parent, innerHTML) {
    const child = document.createElement (name);
    parent.appendChild (child);
    if (innerHTML !== undefined) {
      child.innerHTML = innerHTML;
    }
    return child;
  }
}
