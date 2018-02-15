const http = new XMLHttpRequest ();

http.open ('GET', 'https://api.github.com/orgs/HackYourFuture/repos');
http.send ();

http.onload = () => console.log (http.responseText);
