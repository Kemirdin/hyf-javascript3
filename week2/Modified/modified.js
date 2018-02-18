'use strict';

//Search button  
const search = document.getElementById('search');
const button = document.getElementById ('button');
const input = document.getElementById ('input');

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
  
$ ('button').on ('click', function () {
  // Insert <p> to appear while waiting for list to append
  // $('<p class="pending-message">Pending...!</p>').insertBefore('repo-list');
  $ ('.repo-list').before ('<p class="pending-message">Loading...</p>');

  $.getJSON (
    'https://api.github.com/repos/HackYourFuture/CommandLine'
  )
    .done (function (data) {
      $.each (data, function (index, value) {
        // Need to find out what the property name is first, can use console.log()
        // console.log(data);
        $ ('.repo-list').append ('<li>' + value.name + '</li>');
      }); // Chain on error handling with .fail() to ensure action runs
    })
    .fail (function () {
      $ ('.repo-list').append ('<li>' + "Sorry, it's not working!" + '</li>');
    })
    .always (function () {
      // Removes pending message above
      $ ('.pending-message').remove ();
    });
});
